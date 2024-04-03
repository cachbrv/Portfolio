import { Component } from '@angular/core';
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
  constructor(private scroller: ViewportScroller) {}
  
  ScrollIntoView(target: string) {
    this.scroller.scrollToAnchor(target);
  }
}
