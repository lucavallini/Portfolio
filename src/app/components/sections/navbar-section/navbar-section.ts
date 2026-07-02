import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar-section',
  imports: [],
  templateUrl: './navbar-section.html',
  styleUrl: './navbar-section.css',
})
export class NavbarSection {
  items = ["About", "Projects", "Skills", "Titles", "Contact"]
  themeIcon = '🌙'
  languageIcon = '愛'
  languageDefault = 'es'

  toggleTheme(){
    document.body.classList.toggle('light-mode');
    this.themeIcon= document.body.classList.contains('light-mode')? '☀️' : '🌙';
  }
  toggleLanguage(){
    if (this.languageDefault === 'es'){
      this.languageDefault = 'en'
    }else{
      this.languageDefault = 'es'
    }
    this.languageChange.emit(this.languageDefault)
  }
  @Output() languageChange = new EventEmitter<string>()
  
}
