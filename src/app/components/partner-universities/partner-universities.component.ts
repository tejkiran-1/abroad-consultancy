import { Component } from '@angular/core';

@Component({
  selector: 'app-partner-universities',
  standalone: false,
  templateUrl: './partner-universities.component.html',
  styleUrls: ['./partner-universities.component.scss']
})
export class PartnerUniversitiesComponent {
  universities = {
    uk: ['BPP University','Coventry University','De Montfort University','Edinburgh Napier University','University of East London','University of Greenwich','University of Kent','University of Sunderland'],
    italy: ['Politecnico di Torino','Sapienza University of Rome','University of Bologna','University of Florence','University of Milan','University of Turin','University of Venice']
  };

  sanitize(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '');
  }
}
