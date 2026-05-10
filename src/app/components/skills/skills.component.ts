import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="skills-section">
      <div class="container">

        <div class="section-header reveal">
          <div class="section-label">{{ isArabic ? 'مهاراتي' : 'Skills' }}</div>
          <h2 class="section-title">
            {{ isArabic ? 'التقنيات التي' : 'Technologies I' }}<br>
            <span class="gradient-text">{{ isArabic ? 'أعمل بها' : 'work with' }}</span>
          </h2>
          <p class="section-sub">
            {{ isArabic ? 'الأدوات والتقنيات التي أستخدمها لبناء تطبيقات ويب حديثة' : 'Tools and technologies I use to build modern web applications' }}
          </p>
        </div>

        <!-- Tabs -->
        <div class="skills-tabs reveal reveal-delay-1">
          <button
            *ngFor="let cat of categories"
            class="tab-btn"
            [class.active]="activeCategory === cat.name"
            (click)="activeCategory = cat.name"
          >
            <span class="tab-icon">
              <img [src]="cat.icon" [alt]="cat.name" />
            </span>
            {{ cat.name }}
          </button>
        </div>

        <!-- Skills -->
        <div class="skills-grid">
          <div
            class="skill-card reveal"
            *ngFor="let skill of filteredSkills; let i = index"
            [style.transition-delay]="(i * 0.05) + 's'"
          >

            <div class="skill-top">
              <span class="skill-icon">
                <img [src]="skill.icon" [alt]="skill.name" />
              </span>

              <span class="skill-level" [class]="skill.level.toLowerCase()">
                {{ skill.level }}
              </span>
            </div>

            <h3 class="skill-name">{{ skill.name }}</h3>

            <div class="skill-bar-wrap">
              <div class="skill-bar">
                <div
                  class="skill-fill"
                  [style.width.%]="skill.percent"
                  [style.background]="skill.color"
                ></div>
              </div>

              <span class="skill-percent">{{ skill.percent }}%</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  `,

  styles: [`
    .skills-section { background: var(--bg-2); }

    .section-header {
      text-align: center;
      max-width: 600px;
      margin: 0 auto 60px;
    }

    .section-sub {
      color: var(--text-muted);
      font-size: 15px;
      margin-top: 8px;
    }

    /* Tabs */
    .skills-tabs {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 48px;
    }

    .tab-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 20px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 100px;
      color: var(--text-muted);
      font-size: 14px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .tab-btn:hover {
      border-color: var(--accent);
      color: var(--text);
    }

    .tab-btn.active {
      background: var(--accent);
      border-color: var(--accent);
      color: #fff;
      box-shadow: 0 4px 20px rgba(108,99,255,0.3);
    }

    .tab-icon {
      width: 16px;
      height: 16px;
      display: flex;
    }

    .tab-icon img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    /* Grid */
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 18px;
    }

    /* Card */
    .skill-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 22px;
      transition: 0.3s;
    }

    .skill-card:hover {
      border-color: var(--accent);
      transform: translateY(-4px);
      box-shadow: 0 12px 40px rgba(0,0,0,0.3);
    }

    /* Top */
    .skill-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }

    .skill-icon {
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .skill-icon img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    /* Level */
    .skill-level {
      font-family: var(--font-mono);
      font-size: 10px;
      text-transform: uppercase;
      padding: 3px 8px;
      border-radius: 100px;
    }

    .skill-level.expert {
      background: rgba(67,233,123,0.1);
      color: var(--accent-3);
    }

    .skill-level.advanced {
      background: rgba(108,99,255,0.1);
      color: var(--accent);
    }

    .skill-level.intermediate {
      background: rgba(255,107,107,0.1);
      color: var(--accent-2);
    }

    /* Name */
    .skill-name {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 15px;
      margin-bottom: 14px;
    }

    /* Bar */
    .skill-bar-wrap {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .skill-bar {
      flex: 1;
      height: 4px;
      background: var(--surface-2);
      border-radius: 2px;
      overflow: hidden;
    }

    .skill-fill {
      height: 100%;
      border-radius: 2px;
      transition: width 1.2s ease;
    }

    .skill-percent {
      font-family: var(--font-mono);
      font-size: 11px;
      color: var(--text-dim);
    }

    @media (max-width: 600px) {
      .skills-grid {
        grid-template-columns: 1fr 1fr;
      }
    }
  `]
})
export class SkillsComponent {
  @Input() isArabic = false;


  activeCategory = 'All';

 categories = [
  { name: 'All', icon: 'https://cdn.simpleicons.org/semanticweb' },
  { name: 'Frontend', icon: 'https://cdn.simpleicons.org/html5/e34f26' },
  { name: 'Tools', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/visualstudiocode.svg' },
  { name: 'Networking', icon: 'https://cdn.simpleicons.org/cisco/1ba0d7' }
];

  skills = [
    { name: 'Angular', icon: 'https://cdn.simpleicons.org/angular/dd0031', percent: 88, level: 'Expert', color: '#dd0031', category: 'Frontend' },
    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178c6', percent: 85, level: 'Expert', color: '#3178c6', category: 'Frontend' },
    { name: 'HTML / CSS', icon: 'https://cdn.simpleicons.org/html5/e34f26', percent: 95, level: 'Expert', color: '#e34f26', category: 'Frontend' },
    { name: 'SCSS / Sass', icon: 'https://cdn.simpleicons.org/sass/cc6699', percent: 88, level: 'Expert', color: '#cc6699', category: 'Frontend' },
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/f7df1e', percent: 82, level: 'Expert', color: '#f7df1e', category: 'Frontend' },
    { name: 'RxJS', icon: 'https://cdn.simpleicons.org/reactivex/b7178c', percent: 75, level: 'Advanced', color: '#b7178c', category: 'Frontend' },
    { name: 'Bootstrap', icon: 'https://cdn.simpleicons.org/bootstrap/7952b3', percent: 85, level: 'Expert', color: '#7952b3', category: 'Frontend' },

    { name: 'Git / GitHub', icon: 'https://cdn.simpleicons.org/git/f05032', percent: 82, level: 'Advanced', color: '#f05032', category: 'Tools' },
    { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/f24e1e', percent: 70, level: 'Advanced', color: '#f24e1e', category: 'Tools' },
    { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/ffca28', percent: 70, level: 'Advanced', color: '#ffca28', category: 'Tools' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/visualstudiocode.svg', percent: 92, level: 'Expert', color: '#007acc', category: 'Tools' },

    { name: 'Cisco CCNA', icon: 'https://cdn.simpleicons.org/cisco/1ba0d7', percent: 78, level: 'Advanced', color: '#1ba0d7', category: 'Networking' },
    { name: 'Network Config', icon: 'https://cdn.simpleicons.org/linux/43e97b', percent: 72, level: 'Advanced', color: '#43e97b', category: 'Networking' }
  ];

  get filteredSkills() {
    return this.activeCategory === 'All'
      ? this.skills
      : this.skills.filter(s => s.category === this.activeCategory);
  }
}