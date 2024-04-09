import { CUSTOM_ELEMENTS_SCHEMA, Component, HostListener } from '@angular/core';
import { ModelViewerElement } from '@google/model-viewer';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutComponent {
  goingLeft: boolean = true;

  @HostListener('window:resize', ['$event'])

  onResize() {
    const modelViewer = document.querySelector<ModelViewerElement>("#myModel");

    if (window.innerWidth <= 600) {
      modelViewer!.style.minHeight = "385px";
    }
    else {
      const modelViewer = document.querySelector<ModelViewerElement>("#myModel");
      modelViewer!.style.minHeight = "600px";
    }
  }

  @HostListener('document:DOMContentLoaded', ['$event'])

  onLoad() {
    this.onResize();
    this.animateModel();
  }

  animateModel() {
    // Animation rotating the 3dmodel from left to right
    const modelViewer = document.querySelector<ModelViewerElement>("#myModel");
    const values = modelViewer!.cameraOrbit.split(' ');
    var yaxis = Number(values[0].replace('deg', ''));

    if (yaxis > 60) {
      this.goingLeft = false;
    }
    else if (yaxis < 15) {
      this.goingLeft = true;
    }

    yaxis += this.goingLeft ? 0.05 : -0.05;

    // Rotating model on y axis
    modelViewer!.cameraOrbit = `${yaxis}deg ` + `${values[1]} ` + `${values[2]}`;
    window.requestAnimationFrame(() => this.animateModel());
  }

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
          // modelViewer.cameraOrbit = `${15}deg ` + `${90}deg ` + `"0%"`;
        }
      }
      else {
        let xdeg = midX > e.clientX ? "40" : (midX < e.clientX ? "-20" : "10");
        let ydeg = midY > e.clientY ? "110" : (midY < e.clientY ? "50" : "90");

        if (modelViewer.cameraOrbit != `${xdeg}deg ` + `${ydeg}deg ` + `"0%"`) {
          // modelViewer.cameraOrbit = `${xdeg}deg ` + `${ydeg}deg ` + `"0%"`;
        }
      }
    }
  }
}
