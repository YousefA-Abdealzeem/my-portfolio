import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <div class="section-label reveal">{{ isArabic ? 'تواصل معي' : 'Contact' }}</div>
            <h2 class="section-title reveal reveal-delay-1">
              {{ isArabic ? 'لنبني شيئاً' : "Let's build something" }}<br>
              <span class="gradient-text">{{ isArabic ? 'رائعاً معاً' : 'great together' }}</span>
            </h2>
            <p class="contact-desc reveal reveal-delay-2">
              {{ isArabic ? 'لديك مشروع في ذهنك أو تريد التعاون؟ صندوق بريدي مفتوح دائماً. سأرد عليك خلال 24 ساعة!' : "Have a project in mind or want to collaborate? My inbox is always open. I'll get back to you within 24 hours!" }}
            </p>
            <div class="contact-details reveal reveal-delay-3">
              <a class="contact-detail" *ngFor="let c of contactInfo" [href]="c.href" target="_blank">
                <div class="c-icon-wrap">
  <img [src]="c.icon" [alt]="c.label" />
</div>
                <div>
                  <span class="c-label">{{ c.label }}</span>
                  <span class="c-value">{{ c.value }}</span>
                </div>
              </a>
            </div>
            <div class="socials reveal reveal-delay-4">
              <a class="social-btn" href="https://github.com/YousefA-Abdealzeem" target="_blank" title="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a class="social-btn" href="https://www.linkedin.com/in/yousef-alian" target="_blank" title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a class="social-btn" href="https://wa.me/201050202407" target="_blank" title="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a class="social-btn" href="https://www.instagram.com/yousefaliann" target="_blank" title="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          <div class="contact-form-wrap reveal reveal-delay-2">
            <div class="form-card">
              <h3>Send a message</h3>
              <p class="form-note">Messages go directly to <strong>yousef227d&#64;gmail.com</strong></p>
              <div class="form-group" *ngIf="!sent">
                <div class="input-group">
                  <label>Your Name</label>
                  <input type="text" [(ngModel)]="form.name" placeholder="John Doe" class="form-input">
                </div>
                <div class="input-group">
                  <label>Email Address</label>
                  <input type="email" [(ngModel)]="form.email" placeholder="john@email.com" class="form-input">
                </div>
                <div class="input-group">
                  <label>Subject</label>
                  <input type="text" [(ngModel)]="form.subject" placeholder="Project Inquiry" class="form-input">
                </div>
                <div class="input-group">
                  <label>Message</label>
                  <textarea [(ngModel)]="form.message" placeholder="Tell me about your project..." rows="5" class="form-input"></textarea>
                </div>
                <div class="error-msg" *ngIf="errorMsg">{{ errorMsg }}</div>
                <button class="btn-primary send-btn" (click)="submit()" [disabled]="sending">
                  <span *ngIf="!sending">Send Message</span>
                  <span *ngIf="sending">Sending...</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
              </div>
              <div class="sent-msg" *ngIf="sent">
                <span class="sent-icon">🎉</span>
                <h4>Message Sent!</h4>
                <p>Thanks for reaching out, I'll reply within 24 hours!</p>
                <button class="btn-outline" style="margin-top:16px" (click)="reset()">Send Another</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section { background: var(--bg-2); }
    .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
    .contact-desc { color: var(--text-muted); line-height: 1.8; margin-bottom: 40px; font-size: 15px; }
    .contact-details { display: flex; flex-direction: column; gap: 14px; margin-bottom: 36px; }
    .contact-detail {
      display: flex; gap: 14px; align-items: center; padding: 14px;
      background: var(--surface); border: 1px solid var(--border); border-radius: 10px;
      transition: border-color 0.3s, transform 0.3s;
      &:hover { border-color: var(--accent); transform: translateX(4px); }
    }
    .c-icon-wrap { width: 40px; height: 40px; background: var(--surface-2); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
    .c-label { display: block; font-size: 10px; color: var(--text-dim); font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 1px; }
    .c-value { display: block; font-size: 13px; color: var(--text); margin-top: 2px; }
    .socials { display: flex; gap: 10px; }
    .social-btn {
      width: 44px; height: 44px; background: var(--surface); border: 1px solid var(--border); border-radius: 10px;
      display: flex; align-items: center; justify-content: center; font-size: 18px; color: var(--text-muted);
      transition: all 0.3s;
      &:hover { border-color: var(--accent); transform: translateY(-3px); color: var(--accent); }
    }

    .c-icon-wrap img {
  width: 22px;
  height: 22px;
  object-fit: contain;
}

    .form-card {
      background: var(--surface); border: 1px solid var(--border); border-radius: 20px; padding: 36px;
      h3 { font-family: var(--font-display); font-weight: 700; font-size: 20px; margin-bottom: 4px; }
    }
    .form-note { font-size: 12px; color: var(--text-dim); margin-bottom: 28px; font-family: var(--font-mono); strong { color: var(--accent); } }
    .form-group { display: flex; flex-direction: column; gap: 18px; }
    .input-group { display: flex; flex-direction: column; gap: 6px; label { font-size: 12px; color: var(--text-muted); font-family: var(--font-mono); } }
    .form-input {
      background: var(--bg-3); border: 1px solid var(--border); border-radius: 8px; padding: 12px 14px;
      color: var(--text); font-family: var(--font-body); font-size: 14px; width: 100%; outline: none;
      transition: border-color 0.3s, box-shadow 0.3s; resize: vertical;
      &::placeholder { color: var(--text-dim); }
      &:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(108,99,255,0.1); }
    }
    .error-msg { color: var(--accent-2); font-size: 12px; font-family: var(--font-mono); }
    .send-btn { width: 100%; justify-content: center; padding: 15px; font-size: 14px; margin-top: 4px; }
    .send-btn:disabled { opacity: 0.6; cursor: not-allowed; }
    .sent-msg { text-align: center; padding: 32px 0; .sent-icon { font-size: 48px; display: block; margin-bottom: 14px; } h4 { font-family: var(--font-display); font-size: 20px; margin-bottom: 8px; } p { color: var(--text-muted); font-size: 14px; } }

    @media (max-width: 1024px) { .contact-grid { grid-template-columns: 1fr; gap: 56px; } }
    @media (max-width: 600px) { .form-card { padding: 24px 18px; } }
  `]
})
export class ContactComponent {
  @Input() isArabic = false;

  form = { name: '', email: '', subject: '', message: '' };
  sending = false;
  sent = false;
  errorMsg = '';

contactInfo = [
  {
    icon: 'https://cdn.simpleicons.org/gmail/c71610',
    label: 'Email',
    value: 'yousef227d@gmail.com',
    href: 'mailto:yousef227d@gmail.com'
  },
  {
    icon: 'https://cdn.simpleicons.org/whatsapp/25d366',
    label: 'WhatsApp',
    value: '+20 105 020 2407',
    href: 'https://wa.me/201050202407'
  },
  {
    icon: 'https://cdn.simpleicons.org/googlemaps/e34f26',
    label: 'Location',
    value: 'Egypt — Available Remotely',
    href: '#'
  }
];

  submit() {
    this.errorMsg = '';
    if (!this.form.name || !this.form.email || !this.form.message) {
      this.errorMsg = 'Please fill in all required fields.';
      return;
    }
    this.sending = true;

    // Use mailto as a fallback that always works — opens default mail client
    // For EmailJS integration, replace this block with your EmailJS credentials
    const subject = encodeURIComponent(this.form.subject || `Portfolio Contact from ${this.form.name}`);
    const body = encodeURIComponent(
      `Name: ${this.form.name}\nEmail: ${this.form.email}\n\nMessage:\n${this.form.message}`
    );
    window.open(`mailto:yousef227d@gmail.com?subject=${subject}&body=${body}`, '_blank');

    setTimeout(() => {
      this.sending = false;
      this.sent = true;
    }, 800);
  }

  reset() {
    this.sent = false;
    this.form = { name: '', email: '', subject: '', message: '' };
  }
}
