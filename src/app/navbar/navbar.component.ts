import { Component, HostListener } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewportScroller } from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  constructor(private scroller: ViewportScroller) { }
  @HostListener('window:scroll', ['$event'])

  onScroll(event: Event) {
    const region: NodeListOf<HTMLElement> = document.querySelectorAll(".region");
    const active: string = this.getActiveState();
    var newActive: string = "";

    region.forEach((reg) => {
      let top = window.scrollY;
      let offset = reg.offsetTop - 200;
      let height = reg.offsetHeight;
      let id = reg.getAttribute("id");

      if (top >= offset && top < offset + height) {
        newActive = id!;
      }
    });

    if (newActive != "" && active != newActive) {
      this.removingAllActiveState();
      const targetElement = document.getElementById(newActive.replace('-nav', ''));
      targetElement?.classList.add('active');
    }
  }

  ScrollIntoView(target: string) {
    // Removing active state
    this.removingAllActiveState();

    // Adding active state to selected target
    const targetElement = document.getElementById(target);
    targetElement?.classList.add('active');

    this.scroller.scrollToAnchor(target + '-nav');
  }

  getActiveState() {
    var result = "";
    var els = document.getElementsByClassName("nav-item");

    Array.prototype.forEach.call(els, function (el) {
      if (el.classList.contains('active')) {
        result = el.id;
      }
    });

    return result;
  }

  removingAllActiveState() {
    var els = document.getElementsByClassName("nav-item");
    Array.prototype.forEach.call(els, function (el) {
      el.classList.remove('active');
    });
  }
}
