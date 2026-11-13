import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injector,
  afterNextRender,
  inject,
  isDevMode,
  signal,
  viewChild,
} from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { isPlaceholder, site } from '../../config/site.config';
import { ContactService, type SubmitResult } from '../../core/contact.service';
import { I18nService } from '../../i18n/i18n.service';
import { AUDIENCE_PARAM, parseAudience } from '../../config/navigation';
import { AUDIENCES, type Audience, type FormField as FieldName } from '../../i18n/types';
import { Icon } from '../../shared/icon';

type Status = 'idle' | 'invalid' | 'submitting' | SubmitResult;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^\+?[\d\s/()-]{6,}$/;
/* Bei Änderung auch die Fehlermeldungen in de.ts / en.ts anpassen */
const MESSAGE_MIN = 10;
const MESSAGE_MAX = 3000;

/** Pflichtfeld, das nicht nur aus Leerzeichen bestehen darf. */
function notBlank(control: AbstractControl<string>): ValidationErrors | null {
  return control.value.trim() ? null : { required: true };
}

/** Mindestlänge ohne führende/abschließende Leerzeichen. */
function trimmedMinLength(min: number) {
  return (control: AbstractControl<string>): ValidationErrors | null => {
    const length = control.value.trim().length;
    return length > 0 && length < min ? { minlength: true } : null;
  };
}

/** Firmenname ist nur Pflicht, wenn „Unternehmen“ gewählt wurde. */
function requiredForBusiness(control: AbstractControl<string>): ValidationErrors | null {
  const isBusiness = control.parent?.get('customerType')?.value === 'business';
  return isBusiness && !control.value.trim() ? { required: true } : null;
}

const FIELD_ORDER: FieldName[] = ['customerType', 'company', 'name', 'email', 'phone', 'message', 'privacy'];

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact-form.html',
})
export class ContactForm {
  private readonly contactService = inject(ContactService);
  private readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;
  private readonly injector = inject(Injector);
  private readonly summary = viewChild<ElementRef<HTMLElement>>('summary');
  private readonly result = viewChild<ElementRef<HTMLElement>>('result');

  protected readonly status = signal<Status>('idle');
  protected readonly submitted = signal(false);
  protected readonly messageMax = MESSAGE_MAX;
  protected readonly audiences = AUDIENCES;
  /** Hinweis nur während der Entwicklung (npm start) – nicht auf der veröffentlichten Website. */
  protected readonly showDevNote = isDevMode() && !this.contactService.isConfigured;

  protected readonly form = new FormGroup({
    // Vorbelegung, wenn man von „Leistungen“ (Privat-/Geschäftskunden) kommt, z. B. /kontakt?audience=business
    customerType: new FormControl<Audience | ''>(
      parseAudience(inject(ActivatedRoute).snapshot.queryParamMap.get(AUDIENCE_PARAM)) ?? '',
      { nonNullable: true, validators: [Validators.required] },
    ),
    company: new FormControl('', { nonNullable: true, validators: [requiredForBusiness] }),
    name: new FormControl('', { nonNullable: true, validators: [notBlank, trimmedMinLength(2)] }),
    email: new FormControl('', { nonNullable: true, validators: [notBlank, Validators.pattern(EMAIL_PATTERN)] }),
    phone: new FormControl('', { nonNullable: true, validators: [Validators.pattern(PHONE_PATTERN)] }),
    message: new FormControl('', {
      nonNullable: true,
      validators: [notBlank, trimmedMinLength(MESSAGE_MIN), Validators.maxLength(MESSAGE_MAX)],
    }),
    privacy: new FormControl(false, { nonNullable: true, validators: [Validators.requiredTrue] }),
  });

  constructor() {
    // Pflichtprüfung des Firmennamens aktualisieren, wenn die Kundenart wechselt
    this.form.controls.customerType.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.form.controls.company.updateValueAndValidity());

    // Alte Ergebnis-Meldung ausblenden, sobald erneut bearbeitet wird
    this.form.valueChanges.pipe(takeUntilDestroyed()).subscribe(() => {
      const current = this.status();
      if (current === 'sent' || current === 'not-configured' || current === 'error') {
        this.status.set('idle');
      }
    });
  }

  /** Fehlermeldung eines Feldes – nur, wenn es berührt oder das Formular abgeschickt wurde. */
  protected errorFor(field: FieldName): string | null {
    const control = this.form.controls[field];
    if (!control.errors || !(control.touched || this.submitted())) return null;
    const key = Object.keys(control.errors)[0];
    const form = this.t().form;
    return form.errors[field][key] ?? form.fallbackError;
  }

  protected fieldsWithErrors(): FieldName[] {
    return FIELD_ORDER.filter((field) => this.errorFor(field));
  }

  protected describedBy(field: FieldName, helpId?: string): string | null {
    const ids = [helpId, this.errorFor(field) ? `fehler-${field}` : undefined].filter(Boolean);
    return ids.length ? ids.join(' ') : null;
  }

  protected isBusiness(): boolean {
    return this.form.controls.customerType.value === 'business';
  }

  protected i18nPath(page: 'privacy'): string {
    return this.i18n.path(page);
  }

  protected focusField(event: Event, field: FieldName): void {
    event.preventDefault();
    document.getElementById(`feld-${field}`)?.focus();
  }

  /** mailto-Link mit vorausgefüllter Nachricht (nur wenn eine echte E-Mail-Adresse konfiguriert ist). */
  protected mailtoHref(): string | null {
    if (isPlaceholder(site.email)) return null;
    const { customerType, company, name, phone, message } = this.form.getRawValue();
    const f = this.t().form;
    const lines = [message.trim(), '', name.trim()];
    if (customerType) lines.push(`${f.mailCustomerType}: ${f.customerTypes[customerType]}`);
    if (customerType === 'business' && company.trim()) lines.push(`${f.mailCompany}: ${company.trim()}`);
    if (phone.trim()) lines.push(`${f.mailPhone}: ${phone.trim()}`);
    const body = lines.join('\n');
    const mailSubject = f.mailSubject;
    return `mailto:${site.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(body)}`;
  }

  protected async onSubmit(): Promise<void> {
    if (this.status() === 'submitting') return;
    this.submitted.set(true);
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      this.status.set('invalid');
      // Fokus auf die Fehlerübersicht, damit alle Fehler wahrgenommen werden
      afterNextRender(() => this.summary()?.nativeElement.focus(), { injector: this.injector });
      return;
    }

    this.status.set('submitting');
    const { customerType, company, name, email, phone, message, privacy } = this.form.getRawValue();
    const result = await this.contactService.submit({
      customerType: customerType as Audience,
      company: customerType === 'business' ? company.trim() : '',
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),
      privacyAccepted: privacy,
      language: this.i18n.lang(),
    });

    if (result === 'sent') {
      this.form.reset();
      this.submitted.set(false);
    }
    this.status.set(result);
    afterNextRender(() => this.result()?.nativeElement.focus(), { injector: this.injector });
  }
}
