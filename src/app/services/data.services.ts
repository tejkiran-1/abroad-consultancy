// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class DataServices {
  
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface University {
  id: string;
  name: string;
  country: string;
  city: string;
  ranking: number;
  logo: string;
  description: string;
  programs: string[];
  tuitionRange: string;
  requirements: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  program: string;
  university: string;
  country: string;
  image: string;
  rating: number;
  review: string;
  year: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUniversities(): Observable<University[]> {
    // Mock data - replace with actual API call
    const mockUniversities: University[] = [
      {
        id: 'bpp-uk',
        name: 'BPP University',
        country: 'United Kingdom',
        city: 'London',
        ranking: 85,
        logo: 'assets/images/universities/bpp-logo.png',
        description: 'Leading professional education provider with focus on business, law, and healthcare.',
        programs: ['Business Management', 'Law', 'Healthcare', 'Finance'],
        tuitionRange: '£14,000 - £18,000',
        requirements: ['IELTS 6.5', 'Bachelor\'s degree', 'Statement of purpose']
      },
      {
        id: 'politecnico-torino',
        name: 'Politecnico di Torino',
        country: 'Italy',
        city: 'Turin',
        ranking: 47,
        logo: 'assets/images/universities/polito-logo.png',
        description: 'Prestigious technical university specializing in engineering and architecture.',
        programs: ['Engineering', 'Architecture', 'Design', 'Technology'],
        tuitionRange: '€2,500 - €4,000',
        requirements: ['IELTS 6.0', 'High school diploma', 'Entrance exam']
      }
      // Add more universities...
    ];

    return of(mockUniversities);
  }

  getTestimonials(): Observable<Testimonial[]> {
    const mockTestimonials: Testimonial[] = [
      {
        id: '1',
        name: 'Sarah Johnson',
        program: 'Masters in Computer Science',
        university: 'University of Greenwich',
        country: 'United Kingdom',
        image: 'assets/images/testimonials/sarah.jpg',
        rating: 5,
        review: 'GlobalStudy made my dream of studying in the UK a reality. Their guidance was exceptional throughout the entire process.',
        year: 2024
      },
      {
        id: '2',
        name: 'Marco Rossi',
        program: 'Engineering',
        university: 'Politecnico di Torino',
        country: 'Italy',
        image: 'assets/images/testimonials/marco.jpg',
        rating: 5,
        review: 'Amazing support from application to arrival. I couldn\'t have done it without their expert assistance.',
        year: 2023
      }
      // Add more testimonials...
    ];

    return of(mockTestimonials);
  }

  getFAQs(): Observable<any[]> {
    const faqs = [
      {
        question: 'What are the admission requirements for studying abroad?',
        answer: 'Requirements vary by country and university, but typically include academic transcripts, language proficiency tests (IELTS/TOEFL), statement of purpose, and letters of recommendation.'
      },
      {
        question: 'How much does it cost to study abroad?',
        answer: 'Costs vary significantly by destination. European countries like Italy and France offer more affordable options (€2,000-€10,000), while UK programs range from £12,000-£25,000 annually.'
      },
      {
        question: 'When should I start my application process?',
        answer: 'We recommend starting 12-18 months before your intended start date to allow time for test preparation, applications, visa processing, and preparation.'
      }
      // Add more FAQs...
    ];

    return of(faqs);
  }
}
