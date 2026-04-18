import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home">
      <div class="glow"></div>
      <p class="home-tag fade-a">Available for Opportunities</p>
      <h1 class="home-name fade-b">Vishal <span>Jaiswal</span></h1>
      <div class="typing-wrap fade-c">
        <span class="typed">{{ displayText }}</span><span class="cursor">|</span>
      </div>
      <p class="home-summary fade-d">
        Java Developer at TCS with hands-on experience building full-stack and microservices-based
        applications. Passionate about clean architecture, scalable REST APIs, and delivering
        real-world software solutions.
      </p>
      <div class="home-btns fade-e">
        <button class="btn-primary" (click)="nav('/projects')">View Projects</button>
        <button class="btn-outline" (click)="nav('/contact')">Get in Touch</button>
      </div>
      <div class="home-stats fade-f">
        <div class="stat">
          <div class="stat-num">2<span>+</span></div>
          <div class="stat-label">Years Exp.</div>
        </div>
        <div class="stat">
          <div class="stat-num">3<span>+</span></div>
          <div class="stat-label">Projects</div>
        </div>
        <div class="stat">
          <div class="stat-num">4<span>+</span></div>
          <div class="stat-label">Certifications</div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  displayText = '';
  private roles = ['Java Developer', 'Full Stack Developer', 'Spring Boot Engineer', 'Angular Developer', 'Software Developer'];
  private ri = 0;
  private ci = 0;
  private deleting = false;
  private timer: any;

  constructor(private router: Router) {}

  ngOnInit() { this.type(); }
  ngOnDestroy() { clearTimeout(this.timer); }

  nav(path: string) { this.router.navigate([path]); }

  private type() {
    const cur = this.roles[this.ri];
    if (!this.deleting) {
      this.ci++;
      this.displayText = cur.slice(0, this.ci);
      if (this.ci === cur.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.type(), 1800);
        return;
      }
    } else {
      this.ci--;
      this.displayText = cur.slice(0, this.ci);
      if (this.ci === 0) {
        this.deleting = false;
        this.ri = (this.ri + 1) % this.roles.length;
      }
    }
    this.timer = setTimeout(() => this.type(), this.deleting ? 40 : 80);
  }
}
