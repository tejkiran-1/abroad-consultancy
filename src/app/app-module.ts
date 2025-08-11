import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeaderComponent } from './components/header.component/header.component';
import { ServicesComponent } from './components/services.component/services.component';
import { HeroComponent } from './components/hero.component/hero.component';
import { ContactFormComponent } from './components/contact-form.component/contact-form.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { StudyAbroadComponent } from './pages/study-abroad/study-abroad.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { PartnerUniversitiesComponent } from './components/partner-universities/partner-universities.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FaqComponent } from './components/faq/faq.component';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    ServicesComponent,
    HeroComponent,
    ContactFormComponent,
    HomeComponent,
    AboutComponent,
    StudyAbroadComponent,
    ContactComponent,
    DestinationsComponent,
    ProgramsComponent,
    PartnerUniversitiesComponent,
    TestimonialsComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
