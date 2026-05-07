import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">Projects</div>
          <h2 class="section-title">Things I've <span class="gradient-text">built</span></h2>
          <p class="section-sub">Real projects — from Angular apps to landing pages</p>
        </div>

        <!-- Featured (first 2) -->
        <div class="featured-project reveal" *ngFor="let p of featuredProjects; let i = index" [class.reverse]="i % 2 !== 0">
          <div class="fp-visual">
            <div class="fp-screen">
              <div class="fp-bar">
                <span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>
                <span class="fp-url">{{ p.liveUrl }}</span>
              </div>
              <div class="fp-img-wrap">
                <img [src]="p.img" [alt]="p.title" class="fp-img"/>
                <div class="fp-overlay">
                  <a [href]="p.live" target="_blank" class="btn-primary fp-live-btn">
                    Live Demo
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="fp-info">
            <span class="fp-tag">Featured Project</span>
            <h3 class="fp-title">{{ p.title }}</h3>
            <div class="fp-desc-box"><p>{{ p.description }}</p></div>
            <div class="fp-techs">
              <span class="tech-tag" *ngFor="let t of p.techs">{{ t }}</span>
            </div>
            <div class="fp-links">
              <a [href]="p.github" target="_blank" class="fp-link" title="GitHub" *ngIf="p.github">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
              <a [href]="p.live" target="_blank" class="fp-link live" title="Live Demo">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                Live Demo
              </a>
            </div>
          </div>
        </div>

        <!-- Other projects grid -->
        <h3 class="other-title reveal">More Projects</h3>
        <div class="other-grid">
          <div class="project-card reveal" *ngFor="let p of otherProjects; let i = index" [style.transition-delay]="(i * 0.08) + 's'">
            <div class="card-img-wrap">
              <img [src]="p.img" [alt]="p.title" class="card-img"/>
              <div class="card-img-overlay"></div>
            </div>
            <div class="card-body">
              <div class="card-top">
                <h4 class="card-title">{{ p.title }}</h4>
                <div class="card-links">
                  <a [href]="p.github" target="_blank" title="GitHub" *ngIf="p.github">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  <a [href]="p.live" target="_blank" title="Live">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                  </a>
                </div>
              </div>
              <p class="card-desc">{{ p.description }}</p>
              <div class="card-techs">
                <span *ngFor="let t of p.techs">{{ t }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-header { text-align: center; max-width: 600px; margin: 0 auto 80px; }
    .section-sub { color: var(--text-muted); font-size: 15px; margin-top: 8px; }

    /* Featured */
    .featured-project { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; margin-bottom: 100px; }
    .featured-project.reverse { direction: rtl; }
    .featured-project.reverse > * { direction: ltr; }

    .fp-screen { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; box-shadow: 0 24px 80px rgba(0,0,0,0.4); transition: transform 0.4s var(--ease-out-expo); &:hover { transform: scale(1.02) rotate(-0.5deg); } }
    .fp-bar { display: flex; align-items: center; gap: 6px; padding: 10px 14px; background: var(--bg-3); border-bottom: 1px solid var(--border); }
    .dot { width: 10px; height: 10px; border-radius: 50%; }
    .dot.r { background: #ff5f57; } .dot.y { background: #febc2e; } .dot.g { background: #28c840; }
    .fp-url { font-family: var(--font-mono); font-size: 10px; color: var(--text-dim); margin-left: 8px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1; }
    .fp-img-wrap { position: relative; height: 240px; overflow: hidden; }
    .fp-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
    .fp-screen:hover .fp-img { transform: scale(1.04); }
    .fp-overlay {
      position: absolute; inset: 0; background: rgba(5,5,8,0.7); display: flex; align-items: center; justify-content: center;
      opacity: 0; transition: opacity 0.3s;
    }
    .fp-screen:hover .fp-overlay { opacity: 1; }
    .fp-live-btn { font-size: 13px; padding: 10px 24px; }

    .fp-tag { font-family: var(--font-mono); font-size: 11px; color: var(--accent); text-transform: uppercase; letter-spacing: 2px; }
    .fp-title { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.4rem, 2.5vw, 1.9rem); margin: 10px 0 20px; }
    .fp-desc-box { background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 18px; margin-bottom: 20px; p { color: var(--text-muted); line-height: 1.7; font-size: 14px; } }
    .fp-techs { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px; }
    .tech-tag { font-family: var(--font-mono); font-size: 11px; color: var(--accent); padding: 4px 10px; background: rgba(108,99,255,0.08); border: 1px solid rgba(108,99,255,0.2); border-radius: 4px; }
    .fp-links { display: flex; gap: 12px; }
    .fp-link {
      display: flex; align-items: center; gap: 8px; padding: 10px 18px;
      background: var(--surface); border: 1px solid var(--border); border-radius: 8px;
      color: var(--text-muted); font-size: 13px; font-family: var(--font-mono);
      transition: all 0.3s;
      &:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }
      &.live:hover { border-color: var(--accent-3); color: var(--accent-3); }
    }

    /* Other grid */
    .other-title { font-family: var(--font-display); font-weight: 700; font-size: 20px; text-align: center; color: var(--text-muted); margin-bottom: 36px; }
    .other-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .project-card { background: var(--surface); border: 1px solid var(--border); border-radius: 14px; overflow: hidden; transition: border-color 0.3s, transform 0.3s var(--ease-out-expo); &:hover { border-color: var(--accent); transform: translateY(-6px); } }
    .card-img-wrap { position: relative; height: 160px; overflow: hidden; }
    .card-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
    .project-card:hover .card-img { transform: scale(1.06); }
    .card-img-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, transparent 50%, rgba(5,5,8,0.7)); }
    .card-body { padding: 18px; }
    .card-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px; }
    .card-title { font-family: var(--font-display); font-weight: 700; font-size: 15px; }
    .card-links { display: flex; gap: 10px; color: var(--text-dim); a { transition: color 0.2s; &:hover { color: var(--accent); } } }
    .card-desc { color: var(--text-muted); font-size: 13px; line-height: 1.6; margin-bottom: 14px; }
    .card-techs { display: flex; gap: 10px; flex-wrap: wrap; span { font-family: var(--font-mono); font-size: 10px; color: var(--text-dim); } }

    @media (max-width: 1024px) {
      .featured-project { grid-template-columns: 1fr; gap: 36px; }
      .featured-project.reverse { direction: ltr; }
      .other-grid { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 600px) { .other-grid { grid-template-columns: 1fr; } }
  `]
})
export class ProjectsComponent {
  featuredProjects = [
    {
      title: 'HerPower — Women Sports Platform',
      description: 'A full Arabic women\'s sports platform built with Angular 17. Features include sport category filtering, article feeds, user authentication, and a responsive RTL layout with a modern UI.',
      techs: ['Angular 17', 'TypeScript', 'SCSS', 'REST API', 'RTL'],
      img: 'assets/images/project1.png',
      liveUrl: 'feminine-sports.vercel.app',
      live: 'https://feminine-sports.vercel.app/',
      github: 'https://github.com/YousefA-Abdealzeem/feminine-sports.git'
    },
    {
      title: 'DevTriplet — Business Agency',
      description: 'A professional agency website for a web development team. Features dark/light mode toggle, Arabic/English language switch, pricing sections, team showcase, FAQ, and a contact form.',
      techs: ['Angular', 'TypeScript', 'SCSS', 'i18n', 'Dark Mode'],
      img: 'assets/images/project2.png',
      liveUrl: 'devtriplet-6425a.web.app',
      live: 'https://devtriplet-6425a.web.app/',
      github: ''
    }
  ];

  otherProjects = [
    {
      title: 'Delicious Restaurant',
      description: 'Restaurant website with full menu, gallery, chef profiles, and specials sections.',
      techs: ['Angular', 'SCSS', 'Firebase'],
      img: 'assets/images/project3.png',
      live: 'https://delicious-d3228.web.app/',
      github: 'https://github.com/YousefA-Abdealzeem/Delicious.git'
    },
    {
      title: 'Dolcino Chocolaterie',
      description: 'Elegant chocolate shop landing page with slider, family tradition story, and premium aesthetics.',
      techs: ['HTML', 'CSS', 'JavaScript'],
      img: 'assets/images/project4.png',
      live: 'https://yousefa-abdealzeem.github.io/Dolcino/',
      github: 'https://github.com/YousefA-Abdealzeem/Dolcino.git'
    },
    {
      title: 'Coza Fashion Store',
      description: 'E-commerce fashion store with product catalog, shopping cart, and user authentication.',
      techs: ['Angular', 'NgRx', 'SCSS'],
      img: 'assets/images/project5.png',
      live: 'https://front-end-angular-project.vercel.app/',
      github: 'https://github.com/Mahmoud3178/front-end-angular-project.git'
    },
    {
      title: 'Notification Page',
      description: 'Interactive notification component with read/unread states and real-time UI updates.',
      techs: ['HTML', 'CSS', 'JavaScript'],
      img: 'assets/images/project6.png',
      live: 'https://yousefa-abdealzeem.github.io/Notification-page/',
      github: 'https://github.com/YousefA-Abdealzeem/Notification-page.git'
    },
    {
      title: 'Clipboard Landing Page',
      description: 'Clean product landing page for a clipboard manager app with download CTAs.',
      techs: ['HTML', 'CSS'],
      img: 'assets/images/project7.png',
      live: 'https://yousefa-abdealzeem.github.io/Clipboard-landing-page/',
      github: 'https://github.com/YousefA-Abdealzeem/Clipboard-landing-page.git'
    }
  ];
}
