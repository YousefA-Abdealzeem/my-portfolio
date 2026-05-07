import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="hero">
      <div class="hero-grid">
        <div class="hero-content">
          <div class="hero-label reveal">
            <span class="label-dot"></span>
            <span>Available for work</span>
          </div>
          <h1 class="hero-title reveal reveal-delay-1">
            <span class="line greeting">Hi, I'm</span>
            <span class="line name-line">
              <span class="gradient-text">Yousef Alian</span>
              <span class="cursor-blink">_</span>
            </span>
            <span class="line role-line">
              <span class="typed-text">{{ displayedText }}</span>
              <span class="type-cursor" [class.blink]="!isTyping">|</span>
            </span>
          </h1>
          <p class="hero-desc reveal reveal-delay-2">
            I build <strong>exceptional digital experiences</strong> — from pixel-perfect UI to
            scalable Angular applications. Turning ideas into reality, one component at a time.
          </p>
          <div class="hero-actions reveal reveal-delay-3">
            <a href="#projects" class="btn-primary">
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="https://drive.google.com/file/d/1QHv8Qh3U03gVOn2YCG5buFORweZMb1vM/view?usp=drive_link" target="_blank" class="btn-outline">
              Download CV
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            </a>
          </div>
          <div class="hero-stats reveal reveal-delay-4">
            <div class="stat" *ngFor="let stat of stats">
              <span class="stat-num">{{ stat.num }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>

        <div class="hero-visual reveal reveal-delay-2">
          <div class="photo-container">
            <div class="orbit orbit-1"><div class="orbit-dot dot-accent"></div></div>
            <div class="orbit orbit-2"><div class="orbit-dot dot-red"></div></div>
            <div class="orbit orbit-3"><div class="orbit-dot dot-green"></div></div>
            <div class="photo-glow"></div>
            <div class="photo-frame">
              <img src="assets/images/yousef.jpg" alt="Yousef Alian" class="profile-photo"/>
            </div>
<div class="floating-badge badge-angular">
  <img src="https://cdn.simpleicons.org/angular/dd0031" width="16" />
  <span>Angular</span>
</div>

<div class="floating-badge badge-ts">
  <img src="https://cdn.simpleicons.org/typescript/3178c6" width="16" />
  <span>TypeScript</span>
</div>
            <div class="floating-badge badge-open"><span class="status-dot"></span><span>Open to Work</span></div>
          </div>
          <div class="social-strip reveal reveal-delay-5">
            <a href="https://github.com/YousefA-Abdealzeem" target="_blank" class="social-icon" title="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/yousef-alian" target="_blank" class="social-icon" title="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://wa.me/201050202407" target="_blank" class="social-icon" title="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a href="https://www.instagram.com/yousefaliann" target="_blank" class="social-icon" title="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div class="scroll-indicator">
        <div class="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 100px 40px 60px;
      max-width: 1200px;
      margin: 0 auto;
      position: relative;
    }
    .hero-grid {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 80px;
      align-items: center;
    }
    .hero-label {
      display: inline-flex; align-items: center; gap: 10px;
      padding: 8px 16px;
      background: rgba(67,233,123,0.08); border: 1px solid rgba(67,233,123,0.25);
      border-radius: 100px; font-family: var(--font-mono); font-size: 12px;
      color: var(--accent-3); margin-bottom: 32px; width: fit-content;
    }
    .label-dot { width: 8px; height: 8px; background: var(--accent-3); border-radius: 50%; animation: pulse 2s ease-in-out infinite; }
    @keyframes pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(67,233,123,0.5); } 50% { box-shadow: 0 0 0 6px rgba(67,233,123,0); } }
    .hero-title { font-family: var(--font-display); font-weight: 800; line-height: 1.05; margin-bottom: 28px; }
    .line { display: block; }
    .greeting { font-size: clamp(1.1rem, 2vw, 1.5rem); color: var(--text-muted); font-weight: 500; }
    .name-line { font-size: clamp(2.5rem, 5.5vw, 4.5rem); }
    .cursor-blink { color: var(--accent); animation: blink 1s step-end infinite; }
    @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0; } }
    .role-line { font-size: clamp(1.1rem, 2.2vw, 1.7rem); color: var(--text-muted); font-weight: 600; margin-top: 6px; min-height: 2.2rem; }
    .type-cursor { color: var(--accent); &.blink { animation: blink 0.8s step-end infinite; } }
    .hero-desc { font-size: 16px; color: var(--text-muted); line-height: 1.8; max-width: 520px; margin-bottom: 36px; strong { color: var(--text); } }
    .hero-actions { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 48px; }
    .hero-stats { display: flex; gap: 40px; padding-top: 32px; border-top: 1px solid var(--border); }
    .stat { display: flex; flex-direction: column; gap: 4px; }
    .stat-num {
      font-family: var(--font-display); font-size: 26px; font-weight: 800;
      background: linear-gradient(135deg, var(--accent), var(--accent-2));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    .stat-label { font-size: 11px; color: var(--text-dim); font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 1px; }

    /* PHOTO */
    .hero-visual { display: flex; flex-direction: column; align-items: center; gap: 28px; }
    .photo-container { position: relative; width: 300px; height: 300px; }

    .orbit {
      position: absolute; border-radius: 50%;
      border: 1px dashed rgba(108,99,255,0.2);
      animation: orbitSpin linear infinite;
      top: 50%; left: 50%;
    }
    .orbit-1 { width: 370px; height: 370px; margin-left: -185px; margin-top: -185px; animation-duration: 18s; }
    .orbit-2 { width: 430px; height: 430px; margin-left: -215px; margin-top: -215px; animation-duration: 28s; animation-direction: reverse; border-color: rgba(255,107,107,0.12); }
    .orbit-3 { width: 490px; height: 490px; margin-left: -245px; margin-top: -245px; animation-duration: 40s; border-color: rgba(67,233,123,0.08); }
    @keyframes orbitSpin { to { transform: rotate(360deg); } }

    .orbit-dot { position: absolute; width: 10px; height: 10px; border-radius: 50%; top: 6px; left: 50%; margin-left: -5px; box-shadow: 0 0 10px currentColor; }
    .dot-accent { background: var(--accent); color: var(--accent); }
    .dot-red { background: var(--accent-2); color: var(--accent-2); }
    .dot-green { background: var(--accent-3); color: var(--accent-3); }

    .photo-glow {
      position: absolute; inset: 10px; border-radius: 50%;
      background: radial-gradient(circle, rgba(108,99,255,0.2) 0%, transparent 70%);
      animation: glowPulse 4s ease-in-out infinite; z-index: 0;
    }
    @keyframes glowPulse { 0%,100% { opacity:0.6; transform:scale(0.95); } 50% { opacity:1; transform:scale(1.08); } }

    .photo-frame {
      position: absolute; inset: 0; border-radius: 50%; overflow: hidden;
      border: 3px solid rgba(108,99,255,0.5);
      box-shadow: 0 0 0 6px rgba(108,99,255,0.08), 0 0 60px rgba(108,99,255,0.25), 0 20px 60px rgba(0,0,0,0.6);
      z-index: 2; animation: photoFloat 6s ease-in-out infinite;
    }
    @keyframes photoFloat { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-14px); } }
    .profile-photo { width: 100%; height: 100%; object-fit: cover; object-position: center top; filter: brightness(1.05); transition: transform 0.6s ease; }
    .profile-photo:hover { transform: scale(1.04); }

    /* Floating badges */
    .floating-badge {
      position: absolute; display: flex; align-items: center; gap: 8px;
      background: rgba(13,13,20,0.92); backdrop-filter: blur(12px);
      border: 1px solid var(--border); border-radius: 100px;
      padding: 8px 16px; font-size: 12px; font-family: var(--font-mono);
      color: var(--text-muted); white-space: nowrap; z-index: 10;
      box-shadow: 0 8px 24px rgba(0,0,0,0.4);
    }
    .badge-icon { font-size: 15px; }
    .badge-angular { top: -16px; right: -10px; animation: badgeFloat 5s ease-in-out infinite; }
    .badge-ts { bottom: 4px; left: -20px; animation: badgeFloat 7s ease-in-out reverse infinite; }
    .badge-open { top: 44%; right: -44px; animation: badgeFloat 6s ease-in-out 0.5s infinite; border-color: rgba(67,233,123,0.3); color: var(--accent-3); }
    .status-dot { width: 8px; height: 8px; background: var(--accent-3); border-radius: 50%; animation: pulse 2s ease-in-out infinite; flex-shrink: 0; }
    @keyframes badgeFloat { 0%,100% { transform:translateY(0) rotate(-1deg); } 50% { transform:translateY(-8px) rotate(1deg); } }

    /* Socials */
    .social-strip { display: flex; gap: 12px; align-items: center; }
    .social-icon {
      width: 44px; height: 44px; display: flex; align-items: center; justify-content: center;
      background: var(--surface); border: 1px solid var(--border); border-radius: 10px;
      color: var(--text-dim); transition: all 0.3s var(--ease-out-expo);
    }
    .social-icon:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-3px); box-shadow: 0 8px 24px rgba(108,99,255,0.2); }

    .scroll-indicator {
      position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%);
      display: flex; flex-direction: column; align-items: center; gap: 10px;
      color: var(--text-dim); font-family: var(--font-mono); font-size: 11px;
      letter-spacing: 2px; text-transform: uppercase; animation: fadeIn 2s 1.5s both;
    }
    .scroll-line { width: 1px; height: 50px; background: linear-gradient(to bottom, var(--accent), transparent); animation: scrollPulse 2s ease-in-out infinite; }
    @keyframes scrollPulse { 0%,100% { opacity:0.3; } 50% { opacity:1; } }
    @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

    @media (max-width: 1024px) {
      .hero-grid { grid-template-columns: 1fr; gap: 60px; }
      .hero-visual { order: -1; }
      .hero { padding: 120px 24px 80px; }
      .scroll-indicator { display: none; }
      .orbit-2, .orbit-3 { display: none; }
    }
    @media (max-width: 600px) {
      .photo-container { width: 250px; height: 250px; }
      .orbit-1 { width: 300px; height: 300px; margin-left: -150px; margin-top: -150px; }
      .badge-ts, .badge-open { display: none; }
      .hero-stats { gap: 20px; }
    }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  displayedText = '';
  isTyping = false;
  private roles = ['Frontend Developer', 'Angular Specialist', 'UI/UX Craftsman', 'Web Architect'];
  private roleIndex = 0;
  private charIndex = 0;
  private timeout: any;
  private deleting = false;

  stats = [
    { num: '2+', label: 'Years Exp.' },
    { num: '10+', label: 'Projects' },
    { num: '5+', label: 'Certificates' }
  ];

  ngOnInit() { setTimeout(() => this.type(), 1500); }

  type() {
    const current = this.roles[this.roleIndex];
    this.isTyping = true;
    if (!this.deleting && this.charIndex < current.length) {
      this.displayedText = current.substring(0, ++this.charIndex);
      this.timeout = setTimeout(() => this.type(), 80);
    } else if (this.deleting && this.charIndex > 0) {
      this.displayedText = current.substring(0, --this.charIndex);
      this.timeout = setTimeout(() => this.type(), 40);
    } else if (!this.deleting) {
      this.isTyping = false;
      this.timeout = setTimeout(() => { this.deleting = true; this.type(); }, 2500);
    } else {
      this.deleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      this.timeout = setTimeout(() => this.type(), 300);
    }
  }

  ngOnDestroy() { clearTimeout(this.timeout); }
}
