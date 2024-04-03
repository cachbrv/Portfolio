import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AboutComponent {

}
