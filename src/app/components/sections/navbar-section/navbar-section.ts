import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-section',
  imports: [],
  templateUrl: './navbar-section.html',
  styleUrl: './navbar-section.css',
})
export class NavbarSection {
  items = ["About", "Projects", "Skills", "Titles", "Contact"]
  themeIcon = '🌙'
  toggleTheme(){
    document.body.classList.toggle('light-mode');
    this.themeIcon= document.body.classList.contains('light-mode')? '☀️' : '🌙';
  }
}
