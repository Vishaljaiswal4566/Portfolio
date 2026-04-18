import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="experience page-enter">
      <div class="page-header">
        <p class="page-tag">Where I've worked</p>
        <h2 class="page-title">Experience</h2>
      </div>

      <div class="exp-list">
        <!-- TCS -->
        <div class="exp-card fade-up" [class.visible]="show1">
          <div class="exp-left">
            <div class="exp-logo">TCS</div>
            <div class="exp-line"></div>
          </div>
          <div class="exp-body">
            <div class="exp-header">
              <div>
                <div class="exp-role">Java Developer</div>
                <div class="exp-company">Tata Consultancy Services (TCS)</div>
              </div>
              <div class="exp-meta">
                <span class="exp-badge current">Current</span>
                <span class="exp-date">May 2025 – Present</span>
              </div>
            </div>
            <ul class="exp-bullets">
              <li>Developing and maintaining enterprise-grade Java applications using Spring Boot and REST APIs, implementing changes in existing projects based on customer requirements.</li>
              <li>Designing and consuming RESTful APIs with proper HTTP methods, error handling, and response structures to meet business needs.</li>
              <li>Writing optimized SQL queries and managing relational database interactions for data-driven application features.</li>
              <li>Conducting code reviews to ensure code quality, consistency, and adherence to best practices across the team.</li>
              <li>Collaborating with cross-functional teams to analyze customer demands, translate requirements into technical solutions, and deliver reliable software updates.</li>
            </ul>
            <div class="exp-tags">
              <span class="etag">Java</span>
              <span class="etag">Spring Boot</span>
              <span class="etag">REST APIs</span>
              <span class="etag">SQL</span>
              <span class="etag">Code Review</span>
            </div>
          </div>
        </div>

        <!-- VFSTR Internship -->
        <div class="exp-card fade-up" [class.visible]="show2">
          <div class="exp-left">
            <div class="exp-logo">VFU</div>
            <div class="exp-line"></div>
          </div>
          <div class="exp-body">
            <div class="exp-header">
              <div>
                <div class="exp-role">Software Developer Intern</div>
                <div class="exp-company">VFSTR Technology Development · Vignan University</div>
              </div>
              <div class="exp-meta">
                <span class="exp-date">Jul 2023 – Jun 2024</span>
              </div>
            </div>
            <ul class="exp-bullets">
              <li>Built a Service Request Management System adopted by 150–200 staff members, digitizing campus maintenance tracking and replacing manual processes with a transparent ticketing system.</li>
              <li>Developed the Mahotsav Event Portal enabling 1,500–2,000 students from 30+ colleges to register and participate in events online.</li>
              <li>Maintained and enhanced Vignan University's official website with 10–20 updates including new pages, feature additions, UI bug fixes, and section redesigns per management requirements.</li>
              <li>Collaborated with stakeholders to gather requirements, design database schemas, and deploy functional web solutions.</li>
            </ul>
            <div class="exp-tags">
              <span class="etag">Java</span>
              <span class="etag">Spring Boot</span>
              <span class="etag">PHP</span>
              <span class="etag">MySQL</span>
              <span class="etag">HTML/CSS</span>
              <span class="etag">JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements AfterViewInit {
  show1 = false;
  show2 = false;

  ngAfterViewInit() {
    setTimeout(() => this.show1 = true, 100);
    setTimeout(() => this.show2 = true, 280);
  }
}
