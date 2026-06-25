import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HeroComponent, AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent],
  template: `
    <div class="bg-blob bg-blob-1"></div>
    <div class="bg-blob bg-blob-2"></div>
    <div class="bg-blob bg-blob-3"></div>

    <div class="cursor" [style.left.px]="cursorX" [style.top.px]="cursorY" [class.hovering]="isHovering"></div>
    <div class="cursor-follower" [style.left.px]="followerX" [style.top.px]="followerY" [class.hovering]="isHovering"></div>

    <!-- Floating Controls -->
    <div class="floating-controls">
      <!-- Theme Toggle -->
      <button class="ctrl-btn" (click)="toggleTheme()" [title]="isDark ? 'Switch to Light' : 'Switch to Dark'" aria-label="Toggle theme">
        <svg *ngIf="isDark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
        <svg *ngIf="!isDark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      </button>

      <!-- Language Toggle -->
      <button class="ctrl-btn lang-btn" (click)="toggleLang()" [title]="isArabic ? 'Switch to English' : 'التبديل للعربية'" aria-label="Toggle language">
        <span class="lang-label">{{ isArabic ? 'EN' : 'ع' }}</span>
      </button>
    </div>

    <app-navbar [isArabic]="isArabic"></app-navbar>
    <main>
      <app-hero [isArabic]="isArabic"></app-hero>
      <app-about [isArabic]="isArabic"></app-about>
      <app-skills [isArabic]="isArabic"></app-skills>
      <app-projects [isArabic]="isArabic"></app-projects>
      <app-contact [isArabic]="isArabic"></app-contact>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-inner">
          <a href="#hero" class="footer-logo">
            <span class="logo-b">&lt;</span>YA<span class="logo-b">/&gt;</span>
          </a>
          <p class="footer-copy">
            {{ isArabic ? 'تصميم وتطوير' : 'Designed & Built by' }}
            <span class="gradient-text">Yousef Alian Abdelazeem</span>
          </p>
          <div class="footer-socials">
            <a href="https://github.com/YousefA-Abdealzeem" target="_blank" title="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/yousef-alian" target="_blank" title="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://wa.me/201050202407" target="_blank" title="WhatsApp">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    main { position: relative; z-index: 1; }
    .footer { border-top: 1px solid var(--border); padding: 36px 0; position: relative; z-index: 1; }
    .footer-inner { display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap; }
    .footer-logo { font-family: var(--font-display); font-weight: 800; font-size: 18px; color: var(--text); }
    .logo-b { color: var(--accent); font-weight: 400; }
    .footer-copy { color: var(--text-muted); font-size: 13px; }
    .footer-socials { display: flex; gap: 12px; }
    .footer-socials a { color: var(--text-dim); transition: color 0.2s, transform 0.2s; display: flex; &:hover { color: var(--accent); transform: translateY(-2px); } }

    /* Floating controls */
    .floating-controls {
      position: fixed;
      right: 24px;
      bottom: 40px;
      z-index: 800;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .ctrl-btn {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: 1.5px solid var(--border);
      background: var(--surface);
      color: var(--text-muted);
      cursor: none;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: border-color 0.3s, color 0.3s, transform 0.3s var(--ease-out-expo), box-shadow 0.3s;
      box-shadow: 0 4px 20px rgba(0,0,0,0.2);
      backdrop-filter: blur(10px);

      &:hover {
        border-color: var(--accent);
        color: var(--accent);
        transform: scale(1.1);
        box-shadow: 0 6px 28px rgba(108,99,255,0.3);
      }
    }

    .lang-btn .lang-label {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 14px;
    }

    @media (max-width: 768px) {
      .floating-controls { right: 16px; bottom: 24px; }
      .ctrl-btn { cursor: auto; }
    }
  `]
})
export class AppComponent implements OnInit {
  cursorX = 0; cursorY = 0;
  followerX = 0; followerY = 0;
  isHovering = false;
  isDark = true;
  isArabic = false;

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.cursorX = e.clientX;
    this.cursorY = e.clientY;
    setTimeout(() => { this.followerX = e.clientX; this.followerY = e.clientY; }, 80);
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
  }

  toggleLang() {
    this.isArabic = !this.isArabic;
    document.documentElement.setAttribute('dir', this.isArabic ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', this.isArabic ? 'ar' : 'en');
  }

  ngOnInit() {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', 'en');

    document.addEventListener('mouseover', (e) => {
      const target = e.target as HTMLElement;
      this.isHovering = ['A','BUTTON'].includes(target.tagName) || !!target.closest('a, button, [data-hover]');
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.1 });

    setTimeout(() => { document.querySelectorAll('.reveal').forEach(el => observer.observe(el)); }, 200);
  }
}
