import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about">
      <div class="container">
        <div class="about-grid">

          <!-- LEFT SIDE -->
          <div class="about-visual reveal">

            <!-- Avatar -->
            <div class="avatar-wrap">
              <div class="avatar-ring ring-1"></div>
              <div class="avatar-ring ring-2"></div>

              <div class="photo-box">
                <img
                  src="assets/images/yousef.jpg"
                  alt="Yousef Alian"
                  class="about-photo"
                />
              </div>

              <div class="exp-badge">
                <span class="exp-num">10+</span>
                <span class="exp-txt">Projects</span>
              </div>
            </div>

            <!-- Certificates -->
            <div class="certs-list reveal reveal-delay-2">

              <h4 class="certs-title">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <circle cx="12" cy="8" r="6"/>
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                </svg>

                Certificates
              </h4>

              <div class="cert-item" *ngFor="let c of certs">

                <div class="cert-logo">
                  <img [src]="c.logo" [alt]="c.name" />
                </div>

                <div class="cert-info">
                  <span class="cert-name">{{ c.name }}</span>

                  <span class="cert-issuer">
                    {{ c.issuer }} · {{ c.year }}
                  </span>
                </div>

                <div class="cert-grade" *ngIf="c.grade">
                  {{ c.grade }}
                </div>

              </div>
            </div>
          </div>

          <!-- RIGHT SIDE -->
          <div class="about-text">

            <div class="section-label reveal">
              {{ isArabic ? 'عني' : 'About Me' }}
            </div>

            <h2 class="section-title reveal reveal-delay-1">
              {{ isArabic ? 'أبني تجارب رقمية' : 'Crafting digital experiences' }}
              <br>
              <span class="gradient-text">
                {{ isArabic ? 'بهدف وإتقان' : 'with purpose' }}
              </span>
            </h2>

            <p class="about-desc reveal reveal-delay-2">
              I'm <strong>Yousef Alian Abdelazeem</strong>,
              a passionate Frontend Developer specializing in
              <strong>Angular</strong> and modern web technologies.
              I love turning complex problems into simple,
              beautiful, and intuitive interfaces.
            </p>

            <p class="about-desc reveal reveal-delay-3">
              I completed my
              <strong>Front-end Diploma</strong>
              with Distinction (92%) from Optical Soft,
              and I'm continuously expanding my skill set
              through real-world projects and certifications.
              My background includes both frontend development
              and networking fundamentals.
            </p>

            <!-- Details -->
            <div class="about-details reveal reveal-delay-4">

              <div class="detail" *ngFor="let d of details">

                <span class="detail-icon">
  <img [src]="d.icon" [alt]="d.label" />
</span>

                <div>
                  <span class="detail-label">
                    {{ d.label }}
                  </span>

                  <span class="detail-value">
                    {{ d.value }}
                  </span>
                </div>

              </div>

            </div>

            <!-- Buttons -->
            <div class="about-actions reveal reveal-delay-5">

              <a
                href="https://drive.google.com/file/d/1QHv8Qh3U03gVOn2YCG5buFORweZMb1vM/view?usp=drive_link"
                target="_blank"
                class="btn-primary"
              >

                Download CV

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                  <path d="M7 10l5 5 5-5"/>
                  <path d="M12 15V3"/>
                </svg>

              </a>

              <a
                href="https://wa.me/201050202407"
                target="_blank"
                class="btn-outline"
              >

                Let's Talk

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                </svg>

              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  `,

  styles: [`
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 80px;
      align-items: start;
    }

    .about-visual {
      display: flex;
      flex-direction: column;
      gap: 28px;
    }


    .detail-icon {
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.detail-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

    /* Avatar */

    .avatar-wrap {
      position: relative;
      width: 260px;
      height: 260px;
      margin: 0 auto;
    }

    .avatar-ring {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 1px solid var(--border);
      animation: spin 20s linear infinite;
    }

    .ring-1 {
      border-top-color: var(--accent);
    }

    .ring-2 {
      inset: -16px;
      border-bottom-color: var(--accent-2);
      animation-direction: reverse;
      animation-duration: 30s;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    .photo-box {
      position: absolute;
      inset: 16px;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid rgba(108,99,255,0.4);
      box-shadow: 0 0 40px rgba(108,99,255,0.15);
    }

    .about-photo {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
    }

    .exp-badge {
      position: absolute;
      bottom: 6px;
      right: -12px;
      background: var(--accent);
      border-radius: 10px;
      padding: 10px 14px;
      text-align: center;
      box-shadow: 0 8px 24px rgba(108,99,255,0.4);
    }

    .exp-num {
      display: block;
      font-family: var(--font-display);
      font-weight: 800;
      font-size: 22px;
      color: #fff;
    }

    .exp-txt {
      font-size: 10px;
      color: rgba(255,255,255,0.7);
      font-family: var(--font-mono);
      text-transform: uppercase;
    }

    /* Certificates */

    .certs-list {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 20px;
    }

    .certs-title {
      font-family: var(--font-mono);
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--accent);
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .cert-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 0;
      border-bottom: 1px solid var(--border);
    }

    .cert-item:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }

    .cert-logo {
      width: 42px;
      height: 42px;
      border-radius: 10px;
      background: rgba(255,255,255,0.03);
      border: 1px solid var(--border);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      flex-shrink: 0;
    }

    .cert-logo img {
      width: 70%;
      height: 70%;
      object-fit: contain;
    }

    .cert-info {
      flex: 1;
      min-width: 0;
    }

    .cert-name {
      display: block;
      font-size: 13px;
      font-weight: 600;
      color: var(--text);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .cert-issuer {
      display: block;
      font-size: 11px;
      color: var(--text-dim);
      font-family: var(--font-mono);
      margin-top: 2px;
    }

    .cert-grade {
      font-family: var(--font-mono);
      font-size: 11px;
      color: var(--accent-3);
      background: rgba(67,233,123,0.08);
      border: 1px solid rgba(67,233,123,0.2);
      border-radius: 4px;
      padding: 2px 8px;
      white-space: nowrap;
      flex-shrink: 0;
    }

    /* About text */

    .about-desc {
      color: var(--text-muted);
      line-height: 1.8;
      margin-bottom: 20px;
    }

    .about-desc strong {
      color: var(--text);
    }

    .about-details {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      margin-bottom: 32px;
    }

    .detail {
      display: flex;
      gap: 10px;
      align-items: center;
    }

    .detail-icon {
      font-size: 18px;
      flex-shrink: 0;
    }

    .detail-label {
      display: block;
      font-size: 10px;
      color: var(--text-dim);
      font-family: var(--font-mono);
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .detail-value {
      display: block;
      font-size: 13px;
      color: var(--text);
      margin-top: 2px;
    }

    .about-actions {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }

    @media (max-width: 1024px) {
      .about-grid {
        grid-template-columns: 1fr;
        gap: 48px;
      }

      .avatar-wrap {
        margin: 0 auto 16px;
      }
    }

    @media (max-width: 600px) {
      .about-details {
        grid-template-columns: 1fr;
      }
    }
  `]
})

export class AboutComponent {
  @Input() isArabic = false;


details = [
  {
    icon: 'https://cdn.simpleicons.org/googlemaps/e34f26',
    label: 'Location',
    value: 'Egypt'
  },
  {
    icon: 'https://cdn.simpleicons.org/bookstack/3178c6',
    label: 'Education',
    value: 'Information Technology'
  },
  {
    icon: 'https://cdn.simpleicons.org/github/f05032',
    label: 'Experience',
    value: '2+ Year'
  },
  {
    icon: 'https://cdn.simpleicons.org/gmail/c71610',
    label: 'Email',
    value: 'yousef227d@gmail.com'
  }
];

  certs = [
    {
  logo: 'assets/images/٥.png',
  name: 'Front-end Diploma',
  issuer: 'Optical Soft',
  year: '2025',
  grade: '92% Excellent'
},
    {
      logo: 'assets/images/٢.png',
      name: 'Cisco CCNA',
      issuer: 'NTI — ITIDA',
      year: '2023',
      grade: '120h Training'
    },
    {
      logo: 'assets/images/١.png',
      name: 'CCNAv7: Intro to Networks',
      issuer: 'Cisco / EELU',
      year: '2024',
      grade: null
    },
    {
      logo: 'assets/images/٣.png',
      name: 'Device Config & Mgmt',
      issuer: 'Certiport / Pearson',
      year: '2025',
      grade: 'ITS Cert'
    },
    {
      logo: 'assets/images/٤.png',
      name: 'Core Java Online Test',
      issuer: 'CppBuzz.com',
      year: '2023',
      grade: '65%'
    }
  ];

}