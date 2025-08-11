// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-header.component',
//   standalone: false,
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.scss'
// })
// export class HeaderComponent {

// }

import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeDropdown: string | null = null;

  @HostListener('window:scroll')
  onScroll() { this.isScrolled = window.scrollY > 50; }

  toggleMobileMenu(): void { this.isMobileMenuOpen = !this.isMobileMenuOpen; }
  closeMobileMenu(): void { this.isMobileMenuOpen = false; this.activeDropdown = null; }
  toggleDropdown(name: string) { this.activeDropdown = this.activeDropdown === name ? null : name; }
  navigateAndClose() { this.closeMobileMenu(); }
}
