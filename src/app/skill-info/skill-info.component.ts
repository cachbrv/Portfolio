import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-info',
  standalone: true,
  imports: [],
  templateUrl: './skill-info.component.html',
  styleUrl: './skill-info.component.scss'
})
export class SkillInfoComponent {
  @Input() skills: any = [];
}
