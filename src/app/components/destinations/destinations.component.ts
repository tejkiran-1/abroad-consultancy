import { Component } from '@angular/core';

@Component({
  selector: 'app-destinations',
  standalone: false,
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent {
  countries = [
    { code: 'italy', name: 'Italy', blurb: 'Historic universities & rich culture.', image: 'https://picsum.photos/seed/italy/320/200' },
    { code: 'uk', name: 'United Kingdom', blurb: 'World-leading education hubs.', image: 'https://picsum.photos/seed/uk/320/200' },
    { code: 'france', name: 'France', blurb: 'Innovation & art excellence.', image: 'https://picsum.photos/seed/france/320/200' },
    { code: 'denmark', name: 'Denmark', blurb: 'Sustainability & design thinking.', image: 'https://picsum.photos/seed/denmark/320/200' }
  ];
}
