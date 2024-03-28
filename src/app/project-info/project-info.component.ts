import { Component, Input, OnInit } from '@angular/core';
import { ProjectInfo } from '../project-info';

@Component({
  selector: 'app-project-info',
  standalone: true,
  imports: [],
  templateUrl: './project-info.component.html',
  styleUrl: './project-info.component.scss'
})
export class ProjectInfoComponent implements OnInit {
  @Input() info: ProjectInfo[] = [];

  ngOnInit(): void {  }
}
