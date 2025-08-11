import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { StudyAbroadComponent } from './pages/study-abroad'; // barrel
import { ContactComponent } from './pages/contact'; // barrel

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home - GlobalStudy Consultancy' } },
  { path: 'about', component: AboutComponent, data: { title: 'About Us - GlobalStudy Consultancy' } },
  { path: 'study-abroad', component: StudyAbroadComponent, data: { title: 'Study Abroad - GlobalStudy Consultancy' } },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact Us - GlobalStudy Consultancy' } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', anchorScrolling: 'enabled', scrollOffset: [0,80] })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
