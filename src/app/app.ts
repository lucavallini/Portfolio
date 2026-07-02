import { Component, OnInit, ChangeDetectorRef, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data-service';
import { PortfolioData } from './types/portfolio.types';
import { HeroComponent } from './components/sections/hero/hero';
import { JsonPipe } from '@angular/common';
import { AboutSection } from './components/sections/about-section/about-section';
import { ProjectsSection } from './components/sections/projects-section/projects-section';
import { SkillsSection } from './components/sections/skills-section/skills-section';
import { TitlesSection } from './components/sections/titles-section/titles-section';
import { NavbarSection } from './components/sections/navbar-section/navbar-section';
import { FooterSection } from './components/sections/footer-section/footer-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent, JsonPipe, AboutSection, ProjectsSection, SkillsSection, TitlesSection, NavbarSection, FooterSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  constructor(private dataService: DataService, private cdr: ChangeDetectorRef) {}
  portfolioData: PortfolioData | null=null;
  ngOnInit(){
    this.dataService.getPortfolioData('es').subscribe(data=>{
      this.portfolioData = data
      this.cdr.detectChanges()
    })
  }
  onLanguageChange(lang:string){
    this.dataService.getPortfolioData(lang).subscribe(data=>{
      this.portfolioData = data;
      this.cdr.detectChanges()
    })

  }
}
