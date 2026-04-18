import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="skills page-enter">
      <div class="page-header">
        <p class="page-tag">What I know</p>
        <h2 class="page-title">Technical Skills</h2>
      </div>
      <div class="skill-cats">
        <div class="scat fade-up" *ngFor="let cat of categories; let i = index" [class.visible]="visibleIdx > i" [style.transition-delay]="i * 60 + 'ms'">
          <p class="scat-title">{{ cat.title }}</p>
          <div class="stags">
            <span class="stag" *ngFor="let tag of cat.tags">{{ tag }}</span>
          </div>
        </div>
      </div>
      <div class="skill-bars">
        <p class="bars-title">Proficiency</p>
        <div class="bar-row" *ngFor="let bar of bars; let i = index">
          <div class="bar-label"><span>{{ bar.name }}</span><span>{{ bar.pct }}%</span></div>
          <div class="bar-track">
            <div class="bar-fill" [style.width]="barsVisible ? bar.pct + '%' : '0'" [style.transition-delay]="i * 100 + 'ms'"></div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit {
  visibleIdx = 0;
  barsVisible = false;

  categories = [
    { title: 'Languages', tags: ['Java', 'Python', 'SQL', 'C'] },
    { title: 'Frameworks', tags: ['Spring Boot', 'Spring', 'Hibernate', 'Servlet', 'Angular'] },
    { title: 'Web & Frontend', tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Bootstrap', 'JSP'] },
    { title: 'Databases', tags: ['MySQL', 'SQLite', 'Firebase'] },
    { title: 'DevOps & Tools', tags: ['Docker', 'Jenkins', 'Git', 'GitHub', 'Postman', 'Swagger', 'SoapUI', 'JUnit'] },
    { title: 'CS Fundamentals', tags: ['DSA', 'OOP', 'DBMS', 'OS'] },
  ];

  bars = [
    { name: 'Java & Spring Boot', pct: 90 },
    { name: 'Angular & Frontend', pct: 78 },
    { name: 'SQL & Databases', pct: 82 },
    { name: 'Microservices & REST APIs', pct: 80 },
    { name: 'Python', pct: 72 },
  ];

  ngAfterViewInit() {
    this.categories.forEach((_, i) => {
      setTimeout(() => this.visibleIdx = i + 1, i * 70 + 80);
    });
    setTimeout(() => this.barsVisible = true, 350);
  }
}
