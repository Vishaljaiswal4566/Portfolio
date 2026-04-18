import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about page-enter">
      <div class="page-header fade-up visible">
        <p class="page-tag">Who I am</p>
        <h2 class="page-title">About Me</h2>
      </div>
      <div class="about-grid">
        <div class="fade-up" [class.visible]="show">
          <div class="about-card">
            <div class="avatar">VJ</div>
            <div class="about-name">Vishal Jaiswal</div>
            <div class="about-role">Java Developer · TCS</div>
            <div class="about-chips">
              <div class="chip"><span class="dot"></span>Hyderabad, Telangana</div>
              <div class="chip"><span class="dot"></span>vjaiswal23032002&#64;gmail.com</div>
              <div class="chip"><span class="dot"></span>+91 98017 60342</div>
              <div class="chip"><span class="dot"></span>B.Tech CSE &nbsp;·&nbsp; 80%</div>
            </div>
          </div>
        </div>
        <div class="about-content fade-up" [class.visible]="show2">
          <p>I'm a Java Developer at Tata Consultancy Services (TCS), working on enterprise applications using Spring Boot and REST APIs. I hold a B.Tech in Computer Science from Vignan's Foundation for Science Technology and Research.</p>
          <p>During my internship at VFSTR, I delivered full-stack applications used by thousands of students and hundreds of staff — including an event portal that served 1,500–2,000 students from 30+ colleges and a service request system adopted by 150–200 staff members.</p>
          <p>I enjoy working across the stack — from designing microservices architectures in Spring Boot to building dynamic Angular frontends. I'm particularly drawn to clean architecture, scalable APIs, and writing code that lasts.</p>
        </div>
      </div>

      <!-- Impact, Certifications, Achievements -->
      <div class="bottom-grid fade-up" [class.visible]="show3">
        <div class="highlight-card accent-card">
          <p class="hl-title">Impact at a glance</p>
          <div class="hl-stat-row">
            <div class="hl-stat"><div class="hl-num">1.5<span>k+</span></div><div class="hl-desc">Students reached</div></div>
            <div class="hl-stat"><div class="hl-num">30<span>+</span></div><div class="hl-desc">Colleges served</div></div>
            <div class="hl-stat"><div class="hl-num">200<span>+</span></div><div class="hl-desc">Staff users</div></div>
            <div class="hl-stat"><div class="hl-num">3<span>+</span></div><div class="hl-desc">Projects built</div></div>
          </div>
        </div>

        <div class="highlight-card">
          <p class="hl-title">Certifications</p>
          <div class="cert-list">
            <div class="cert-row" *ngFor="let c of certs">
              <span class="cert-dot"></span>{{ c.name }}<span class="cert-org">{{ c.org }}</span>
            </div>
          </div>
        </div>

        <div class="highlight-card">
          <p class="hl-title">Achievements</p>
          <div class="achiev-list">
            <div class="achiev-row" *ngFor="let a of achievements">
              <span class="achiev-icon">{{ a.icon }}</span>{{ a.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {
  show = false;
  show2 = false;
  show3 = false;

  certs = [
    { name: 'Java Full Stack Development', org: 'Edureka' },
    { name: 'Programming Through Java', org: 'NPTEL' },
    { name: 'Software Project Management', org: 'NPTEL' },
    { name: 'Data Structures & Algorithms', org: 'Smart Interviews' },
  ];

  achievements = [
    { icon: '★', text: '5-Star in Java, Python & Problem Solving — HackerRank' },
    { icon: '★', text: '3-Star rating on CodeChef' },
    { icon: '🏆', text: 'First Prize — Codeathon & Technical Quiz, Vignan University' },
    { icon: '⚡', text: 'National-level Hackathon — SRUJANANKURA 2K23' },
  ];

  ngAfterViewInit() {
    setTimeout(() => this.show = true, 100);
    setTimeout(() => this.show2 = true, 260);
    setTimeout(() => this.show3 = true, 400);
  }
}
