import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav>
      <div class="nav-inner">
        <a class="nav-logo" routerLink="/">V<span>.</span>J</a>
        <div class="nav-links">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a>
          <a routerLink="/about" routerLinkActive="active">About</a>
          <a routerLink="/experience" routerLinkActive="active">Experience</a>
          <a routerLink="/education" routerLinkActive="active">Education</a>
          <a routerLink="/skills" routerLinkActive="active">Skills</a>
          <a routerLink="/projects" routerLinkActive="active">Projects</a>
          <a routerLink="/contact" routerLinkActive="active">Contact</a>
        </div>
      </div>
    </nav>
  `,
  styleUrl: './nav.component.scss'
})
export class NavComponent {}
