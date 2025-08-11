// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-hero.component',
//   standalone: false,
//   templateUrl: './hero.component.html',
//   styleUrl: './hero.component.scss'
// })
// export class HeroComponent {

// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  heroContent = {
    title: 'Your Gateway to Global Education',
    subtitle: 'Transform your future with world-class education opportunities across Italy, UK, France, and Denmark',
    ctaText: 'Start Your Journey',
    stats: [
      { value: '5000+', label: 'Students Placed' },
      { value: '200+', label: 'Partner Universities' },
      { value: '98%', label: 'Success Rate' },
      { value: '15+', label: 'Years Experience' }
    ]
  };

  constructor() { }

  ngOnInit(): void { }

  onHeroImgError(img: Event) {
    const el = img.target as HTMLImageElement | null;
    if (!el) return;
    el.onerror = null; // prevent loop
    el.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><defs><linearGradient id="g" x1="0" y1="0" x2="640" y2="480" gradientUnits="userSpaceOnUse"><stop stop-color="%236366f1"/><stop offset="0.5" stop-color="%238b5cf6"/><stop offset="1" stop-color="%2306b6d4"/></linearGradient></defs><rect width="640" height="480" rx="32" fill="url(%23g)"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%23fff" font-family="Arial" font-size="42">Study Abroad</text></svg>';
  }

  scrollToConsultation(): void {
    const element = document.getElementById('consultation-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
