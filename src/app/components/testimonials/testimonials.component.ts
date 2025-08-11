import { Component } from '@angular/core';

interface Testimonial { name:string; quote:string; destination:string; }

@Component({
  selector: 'app-testimonials',
  standalone: false,
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    { name:'Alice', quote:'Amazing guidance throughout my application journey!', destination:'UK' },
    { name:'Marco', quote:'Visa process felt effortless with their help.', destination:'Italy' },
    { name:'Fatima', quote:'Great counseling and program selection support.', destination:'France' }
  ];
  active = 0;
  next(){ this.active = (this.active + 1) % this.testimonials.length; }
  prev(){ this.active = (this.active - 1 + this.testimonials.length) % this.testimonials.length; }
}
