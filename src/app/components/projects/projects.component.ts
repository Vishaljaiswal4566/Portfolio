import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  icon: string;
  name: string;
  badge: string;
  desc: string;
  stack: string[];
  link?: string;
  fromRight?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="projects page-enter">
      <div class="page-header">
        <p class="page-tag">What I've built</p>
        <h2 class="page-title">Projects</h2>
      </div>
      <div class="proj-list">
        <div class="proj-card" *ngFor="let p of projects; let i = index"
          [class.slide-left]="!p.fromRight" [class.slide-right]="p.fromRight"
          [class.visible]="visibleIdx > i">
          <div class="proj-main">
            <div class="proj-top">
              <div class="proj-icon">{{ p.icon }}</div>
              <div class="proj-name">{{ p.name }}</div>
            </div>
            <p class="proj-desc">{{ p.desc }}</p>
            <div class="proj-stack">
              <span class="ptag" *ngFor="let t of p.stack">{{ t }}</span>
            </div>
            <a class="proj-link" *ngIf="p.link" [href]="'https://' + p.link" target="_blank">{{ p.link }} →</a>
          </div>
          <div class="proj-badge">{{ p.badge }}</div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
  visibleIdx = 0;
  projects: Project[] = [
    {
      icon: '▶',
      name: 'Video Streaming Platform',
      badge: 'Microservices',
      desc: 'Production-grade platform with 5 Spring Boot microservices (user, content, subscription, api-gateway, eureka), Netflix Eureka service discovery, centralized API Gateway, and a dynamic Angular frontend with 9+ components including Video Player, Admin Dashboard, and Subscription Plans.',
      stack: ['Angular', 'Spring Boot', 'Spring Cloud', 'MySQL', 'Netflix Eureka', 'REST APIs'],
    },
    {
      icon: '⚡',
      name: 'Online Auction Platform',
      badge: 'Android',
      fromRight: true,
      desc: 'Android-based real-time auction app enabling users to list valuable items, host live auctions, and connect with buyers. Firebase handles real-time bid updates and secure authentication with clean Repository and Service layer patterns.',
      stack: ['Java', 'Android', 'Firebase', 'XML'],
    },
    {
      icon: '⚙',
      name: 'Service Request Management',
      badge: '150+ users',
      desc: 'Campus portal used by 150–200 staff members to digitize maintenance and administrative request tracking. Replaced manual processes with a transparent ticketing system built end-to-end with JSP, Bootstrap, and MySQL.',
      stack: ['JSP', 'Bootstrap', 'MySQL', 'JavaScript'],
      link: 'github.com/Vishaljaiswal4566/estatemgmt',
    }
  ];

  ngAfterViewInit() {
    this.projects.forEach((_, i) => {
      setTimeout(() => this.visibleIdx = i + 1, i * 140 + 100);
    });
  }
}
