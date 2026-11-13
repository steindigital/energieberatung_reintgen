import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CONTACT_ENDPOINT } from '../config/contact.config';
import type { Audience, Lang } from '../i18n/types';

export interface ContactPayload {
  /** 'private' = Privatperson, 'business' = Unternehmen/Organisation */
  customerType: Audience;
  /** Name des Unternehmens (nur bei Geschäftskunden, sonst leer) */
  company: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  privacyAccepted: boolean;
  /** Sprache, in der das Formular ausgefüllt wurde (für die Antwort) */
  language: Lang;
}

export type SubmitResult = 'sent' | 'not-configured' | 'error';

/** Versand des Kontaktformulars – Konfiguration siehe src/app/config/contact.config.ts */
@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);
  private readonly endpoint = CONTACT_ENDPOINT.trim();

  readonly isConfigured = this.endpoint.length > 0;

  async submit(payload: ContactPayload): Promise<SubmitResult> {
    if (!this.isConfigured) return 'not-configured';

    try {
      await firstValueFrom(this.http.post(this.endpoint, payload, { responseType: 'text' }));
      return 'sent';
    } catch {
      return 'error';
    }
  }
}
