import { Component, ViewChild  } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.scss'
})
export class CarrouselComponent {
  images = ["https://upload.wikimedia.org/wikipedia/commons/d/d2/C_Sharp_Logo_2023.svg",
           "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1280px-Unofficial_JavaScript_logo_2.svg.png",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/langfr-1024px-CSS3_logo_and_wordmark.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg?uselang=fr",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Sql_data_base_with_logo.svg/640px-Sql_data_base_with_logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/640px-Swift_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/640px-ISO_C%2B%2B_Logo.svg.png"];

  constructor(config: NgbCarouselConfig) {
    config.interval = 200;
		config.wrap = true;
		config.keyboard = false;
		config.pauseOnHover = true;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
    config.animation = false;
	}
}
