import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="contact page-enter">
      <p class="page-tag">Let's connect</p>
      <h2 class="page-title">Get in Touch</h2>
      <p class="page-sub">Open to full-time software developer roles. I'd love to hear from you!</p>

      <div class="contact-layout">
        <!-- LEFT -->
        <div class="contact-left fade-up" [class.visible]="show">
          <div class="avail"><span class="avail-dot"></span>Available for opportunities</div>
          <div class="info-cards">
            <a class="info-card" href="mailto:vjaiswal23032002@gmail.com">
              <div class="info-icon">✉</div>
              <div><div class="info-label">Email</div><div class="info-val">vjaiswal23032002&#64;gmail.com</div></div>
            </a>
            <div class="info-card">
              <div class="info-icon">📱</div>
              <div><div class="info-label">Phone</div><div class="info-val">+91 98017 60342</div></div>
            </div>
            <div class="info-card">
              <div class="info-icon">📍</div>
              <div><div class="info-label">Location</div><div class="info-val">Hyderabad, Telangana, India</div></div>
            </div>
          </div>
          <div class="social-row">
            <a class="social-btn" href="https://github.com/Vishaljaiswal4566" target="_blank">⌥ GitHub</a>
            <a class="social-btn" href="https://linkedin.com" target="_blank">in LinkedIn</a>
          </div>
        </div>

        <!-- RIGHT — empty placeholder for balance -->
        <div class="contact-right fade-up" [class.visible]="show2">
          <div class="note-card">
            <p class="note-title">Let's build something great together</p>
            <p class="note-text">I'm always open to discussing new opportunities, interesting projects, or just a good conversation about tech. Drop me a message and I'll get back to you!</p>
            <a class="cta-btn" href="mailto:vjaiswal23032002@gmail.com">Send an Email →</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {
  show = false;
  show2 = false;

  ngAfterViewInit() {
    setTimeout(() => this.show = true, 100);
    setTimeout(() => this.show2 = true, 260);
  }
}
