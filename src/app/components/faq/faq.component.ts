import { Component } from '@angular/core';

interface FAQ { q:string; a:string; open?:boolean; }

@Component({
  selector: 'app-faq',
  standalone: false,
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faqs: FAQ[] = [
    { q:'How do I choose a country?', a:'We evaluate your goals, budget and profile to advise destinations.' },
    { q:'What tests do I need?', a:'Depends on program level & country; common ones are IELTS, TOEFL, GRE.' },
    { q:'Do you help with scholarships?', a:'Yes, we shortlist relevant scholarships and guide applications.' }
  ];
  toggle(f:FAQ){ f.open = !f.open; }
}
