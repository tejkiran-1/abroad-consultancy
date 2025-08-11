import { Component } from '@angular/core';

@Component({
  selector: 'app-destinations',
  standalone: false,
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent {
  countries = [
    { code: 'italy', name: 'Italy', blurb: 'Historic universities & rich culture.', image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=320&h=200&fit=crop&crop=center&auto=format&q=80' },
    { code: 'uk', name: 'United Kingdom', blurb: 'World-leading education hubs.', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=320&h=200&fit=crop&crop=center&auto=format&q=80' },
    { code: 'france', name: 'France', blurb: 'Innovation & art excellence.', image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=320&h=200&fit=crop&crop=center&auto=format&q=80' },
    { code: 'denmark', name: 'Denmark', blurb: 'Sustainability & design thinking.', image: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=320&h=200&fit=crop&crop=center&auto=format&q=80' }
  ];
}
