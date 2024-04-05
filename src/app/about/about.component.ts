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
      let midX = coordinates.x + coordinates.width / 2;
      let midY = coordinates.y + coordinates.height / 2;

      let notTooFar = (Math.abs(midX - e.clientX) < 400) && (Math.abs(midY - e.clientY) < 400);
      if (!notTooFar) {
        if (modelViewer.cameraOrbit != `${15}deg ` + `${90}deg ` + `"0%"`) {
          modelViewer.cameraOrbit = `${15}deg ` + `${90}deg ` + `"0%"`;
        }
      }
      else {
        let xdeg = midX > e.clientX ? "40" : (midX < e.clientX ? "-20" : "10");
        let ydeg = midY > e.clientY ? "110" : (midY < e.clientY ? "50" : "90");
        
        if (modelViewer.cameraOrbit != `${xdeg}deg ` + `${ydeg}deg ` + `"0%"`) {
          modelViewer.cameraOrbit = `${xdeg}deg ` + `${ydeg}deg ` + `"0%"`;
        }
      }
    }
  }
}
