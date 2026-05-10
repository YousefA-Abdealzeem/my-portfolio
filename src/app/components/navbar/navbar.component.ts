import { Component, HostListener, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav [class.scrolled]="isScrolled" [class.hidden]="isHidden">
      <div class="nav-inner">
        <a class="nav-logo" href="#hero">
          <span class="logo-bracket">&lt;</span>YA<span class="logo-bracket">/&gt;</span>
        </a>
        <ul class="nav-links">
          <li *ngFor="let item of navItems; let i = index">
            <a [href]="item.href" class="nav-link">
              <span class="nav-num">0{{i+1}}.</span>
              {{ isArabic ? item.labelAr : item.label }}
            </a>
          </li>
        </ul>
        <a href="#contact" class="btn-outline nav-cta">{{ isArabic ? 'وظّفني' : 'Hire Me' }}</a>
        <button class="menu-toggle" (click)="toggleMenu()" [class.open]="menuOpen">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div class="mobile-menu" [class.open]="menuOpen">
        <ul>
          <li *ngFor="let item of navItems; let i = index">
            <a [href]="item.href" (click)="closeMenu()" class="mobile-link">
              <span class="nav-num">0{{i+1}}.</span> {{ isArabic ? item.labelAr : item.label }}
            </a>
          </li>
          <li><a href="#contact" (click)="closeMenu()" class="btn-primary" style="width:100%;justify-content:center;margin-top:16px">{{ isArabic ? 'وظّفني' : 'Hire Me' }}</a></li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 900;
      padding: 24px 40px;
      transition: all 0.4s var(--ease-out-expo);
    }
    nav.scrolled {
      padding: 16px 40px;
      background: var(--nav-bg);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--border);
    }
    nav.hidden { transform: translateY(-100%); }
    .nav-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 40px;
    }
    .nav-logo {
      font-family: var(--font-display);
      font-weight: 800;
      font-size: 20px;
      color: var(--text);
      transition: color 0.3s;
      flex-shrink: 0;
    }
    .logo-bracket {
      color: var(--accent);
      font-weight: 400;
    }
    .nav-links {
      display: flex;
      gap: 8px;
      list-style: none;
    }
    .nav-link {
      padding: 8px 16px;
      font-size: 14px;
      font-family: var(--font-body);
      color: var(--text-muted);
      border-radius: 4px;
      transition: color 0.3s, background 0.3s;
      display: flex;
      gap: 6px;
      align-items: center;

      &:hover { color: var(--text); background: var(--surface); }
    }
    .nav-num {
      font-family: var(--font-mono);
      font-size: 11px;
      color: var(--accent);
    }
    .nav-cta { font-size: 13px; padding: 10px 22px; white-space: nowrap; }
    .menu-toggle {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: none;
      padding: 4px;

      span {
        display: block;
        width: 24px;
        height: 2px;
        background: var(--text);
        border-radius: 2px;
        transition: all 0.3s var(--ease-out-expo);
        transform-origin: center;
      }
      &.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
      &.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
      &.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
    }
    .mobile-menu {
      display: none;
      position: fixed;
      inset: 0;
      background: var(--mobile-nav-solid);
      z-index: 899;
      padding: 100px 40px 40px;
      transform: translateX(100%);
      transition: transform 0.5s var(--ease-out-expo);

      &.open { transform: translateX(0); }
      ul { list-style: none; }
      .mobile-link {
        display: block;
        padding: 20px 0;
        font-family: var(--font-display);
        font-size: 2rem;
        font-weight: 700;
        color: var(--text-muted);
        border-bottom: 1px solid var(--border);
        transition: color 0.3s, padding-left 0.3s;

        &:hover { color: var(--text); padding-left: 16px; }
      }
    }
    @media (max-width: 900px) {
      .nav-links, .nav-cta { display: none; }
      .menu-toggle { display: flex; }
      .mobile-menu { display: block; }
      nav { padding: 20px 24px; background: var(--mobile-nav-solid); }
      nav.scrolled { padding: 16px 24px; background: var(--mobile-nav-solid); backdrop-filter: none; }
    }
  `]
})
export class NavbarComponent implements OnChanges {
  @Input() isArabic = false;

  isScrolled = false;
  isHidden = false;
  menuOpen = false;
  private lastScroll = 0;

  navItems = [
    { label: 'About',    labelAr: 'عني',       href: '#about' },
    { label: 'Skills',   labelAr: 'مهاراتي',   href: '#skills' },
    { label: 'Projects', labelAr: 'مشاريعي',   href: '#projects' },
    { label: 'Contact',  labelAr: 'تواصل',     href: '#contact' }
  ];

  @HostListener('window:scroll')
  onScroll() {
    const current = window.scrollY;
    this.isScrolled = current > 50;
    this.isHidden = current > this.lastScroll && current > 300;
    this.lastScroll = current;
  }

  ngOnChanges() {}
  toggleMenu() { this.menuOpen = !this.menuOpen; }
  closeMenu() { this.menuOpen = false; }
}
