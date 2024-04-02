import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { SkillInfoComponent } from './skill-info/skill-info.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import _projectInfo from '../assets/ProjectInfo.json';
import _skilltInfo from '../assets/Skills.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, CarrouselComponent, ProjectInfoComponent, SkillInfoComponent, ContactComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  projectInfo: any = _projectInfo;
  skillInfo: any = _skilltInfo;
}
