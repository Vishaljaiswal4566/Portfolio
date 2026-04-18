import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EduItem {
  icon: string;
  degree: string;
  school: string;
  detail: string;
  score: string;
  scoreLabel: string;
  year: string;
  link: string;
  linkText: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="education page-enter">
      <div class="page-header">
        <p class="page-tag">Academic background</p>
        <h2 class="page-title">Education</h2>
      </div>
      <div class="edu-list">
        <ng-container *ngFor="let item of items; let i = index">
          <a class="edu-card fade-up" [class.visible]="visibleIdx > i" [href]="item.link" target="_blank">
            <div class="edu-icon">{{ item.icon }}</div>
            <div class="edu-body">
              <div class="edu-degree">{{ item.degree }}</div>
              <div class="edu-school">{{ item.school }}</div>
              <div class="edu-detail">{{ item.detail }}</div>
              <span class="edu-link">{{ item.linkText }} →</span>
            </div>
            <div class="edu-right">
              <div class="edu-score">{{ item.score }}</div>
              <div class="edu-score-label">{{ item.scoreLabel }}</div>
              <div class="edu-year">{{ item.year }}</div>
            </div>
          </a>
          <div class="timeline-line" *ngIf="i < items.length - 1"></div>
        </ng-container>
      </div>
    </div>
  `,
  styleUrl: './education.component.scss'
})
export class EducationComponent implements AfterViewInit {
  visibleIdx = 0;
  items: EduItem[] = [
    {
      icon: '🎓',
      degree: 'B.Tech — Computer Science & Engineering',
      school: "Vignan's Foundation for Science Technology and Research",
      detail: 'Guntur, Andhra Pradesh',
      score: '80%', scoreLabel: 'Aggregate',
      year: '2020 – 2024',
      link: 'https://vignan.ac.in/newvignan/',
      linkText: 'vignan.ac.in'
    },
    {
      icon: '🏫',
      degree: 'Intermediate — Class XII',
      school: 'Bhupesh Gupta Inter College',
      detail: 'Science Stream',
      score: '74.6%', scoreLabel: 'Aggregate',
      year: '2019',
      link: 'https://bgcollege.org.in/',
      linkText: 'bgcollege.org.in'
    },
    {
      icon: '🏫',
      degree: 'SSC — Class X',
      school: 'Delhi Public School, Bhabua',
      detail: 'CBSE Board',
      score: '9.6', scoreLabel: 'CGPA',
      year: '2017',
      link: 'https://dpsbhabua.com/',
      linkText: 'dpsbhabua.com'
    }
  ];

  ngAfterViewInit() {
    this.items.forEach((_, i) => {
      setTimeout(() => this.visibleIdx = i + 1, i * 160 + 100);
    });
  }
}
