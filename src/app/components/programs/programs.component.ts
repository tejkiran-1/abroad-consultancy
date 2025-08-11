import { Component } from '@angular/core';

@Component({
  selector: 'app-programs',
  standalone: false,
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent {
  programs = [
    'Information Technology','Creative Arts, Design & Communication','Business, Commerce & Management','Art, Humanities & Social Sciences','Architecture & Building','Health & Allied Health'
  ];
  iconMap = ['laptop','palette','briefcase2','book','building','heart-pulse'];
}
