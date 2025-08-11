// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-services.component',
//   standalone: false,
//   templateUrl: './services.component.html',
//   styleUrl: './services.component.scss'
// })
// export class ServicesComponent {

// }

import { Component, OnInit } from '@angular/core';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  img?: string; // optional image/icon url
  svg?: string; // inline svg icon
}

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: Service[] = [
    {
      id: 'career-counseling',
      title: 'Career Counseling',
      description: 'Expert guidance to align your academic choices with career aspirations and global opportunities.',
      icon: 'fas fa-user-graduate',
      img: 'https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/user-graduate.svg',
  svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 2 8l10 5 10-5-5.2-2.6"/><path d="M12 13v8"/><path d="M7 10.5v4.8L12 18l5-2.7v-4.8"/></svg>',
      features: ['Personalized career assessment', 'Industry trend analysis', 'Skills gap identification', 'Future roadmap planning']
    },
    {
      id: 'university-selection',
      title: 'University Selection',
      description: 'Comprehensive assistance in selecting the right universities that match your profile and goals.',
      icon: 'fas fa-university',
      img: 'https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/building-bank.svg',
  svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10 12 5l9 5"/><path d="M5 10v9"/><path d="M19 10v9"/><path d="M9 14v5"/><path d="M15 14v5"/><path d="M3 19h18"/></svg>',
      features: ['University ranking analysis', 'Course comparison', 'Admission requirements review', 'Location preferences']
    },
    {
      id: 'test-preparation',
      title: 'Test Preparation',
      description: 'Structured preparation programs for IELTS, TOEFL, SAT, GRE, and other standardized tests.',
      icon: 'fas fa-clipboard-check',
      img: 'https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/clipboard-check.svg',
  svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="18" rx="2"/><path d="M9 4V2h6v2"/><path d="m9 14 2.2 2L15 12"/></svg>',
      features: ['Mock test sessions', 'Personalized study plans', 'Expert tutoring', 'Progress tracking']
    },
    {
      id: 'visa-assistance',
      title: 'Visa Assistance',
      description: 'Complete support through the visa application process with high success rates.',
      icon: 'fas fa-passport',
      img: 'https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/id.svg',
  svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6"/><path d="M9 12h6"/><path d="M9 16h4"/></svg>',
      features: ['Document preparation', 'Application filing', 'Interview preparation', 'Follow-up support']
    },
    {
      id: 'financial-advice',
      title: 'Financial Advice',
      description: 'Strategic financial planning and scholarship guidance for affordable education abroad.',
      icon: 'fas fa-coins',
      img: 'https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/coins.svg',
  svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>',
      features: ['Cost estimation', 'Scholarship identification', 'Education loan guidance', 'Budget planning']
    },
    {
      id: 'pre-departure',
      title: 'Pre-Departure Briefing',
      description: 'Essential orientation and preparation for smooth transition to your new academic environment.',
      icon: 'fas fa-plane-departure',
      img: 'https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/plane-departure.svg',
  svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 16 22 8l-6 10"/><path d="M3 12l7 2"/><path d="M7 21l2-5"/><path d="M12 21l1-5"/></svg>',
      features: ['Cultural orientation', 'Accommodation guidance', 'Travel arrangements', 'Emergency contacts']
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
