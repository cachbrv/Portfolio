import { CUSTOM_ELEMENTS_SCHEMA, Component, HostListener } from '@angular/core';
import { ModelViewerElement } from '@google/model-viewer';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AboutComponent {
  @HostListener('document:mousemove', ['$event']) 
  
  onMouseMove(e: MouseEvent) {
		const modelViewer = document.querySelector<ModelViewerElement>("#myModel");
    if (modelViewer != null) {
      let coordinates = modelViewer.getBoundingClientRect();

      let xdeg = coordinates.x > e.clientX ? "40" : (coordinates.x < e.clientX ? "-20" : "10");
      let ydeg = coordinates.y > e.clientY ? "110" : (coordinates.y < e.clientY ? "50" : "90");
		  modelViewer.cameraOrbit = `${xdeg}deg ` + `${ydeg}deg ` + `"0%"`;
    }
  }
}
