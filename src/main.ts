import { getPortfolioData } from "./services/data.service";
import { HeroSection } from "./components/sections/hero-section";
import { AboutSection } from "./components/sections/about-section";
import { ProjectSection } from "./components/sections/project-section";
import { TechSection } from "./components/sections/tech-section";
import { TitleSection } from "./components/sections/title-section";
import "./styles/base.css";
import "./styles/layout.css";

const data = await getPortfolioData();

const heroEl = document.querySelector("hero-section") as HeroSection;
heroEl.setData(data.hero);

const aboutEl = document.querySelector("about-section") as AboutSection;
aboutEl.setData(data.about);

const projectEl = document.querySelector("project-section") as ProjectSection;
projectEl.setData(data.projects);

const techEl = document.querySelector("tech-section") as TechSection;
techEl.setData(data.technologies);

const titleEl = document.querySelector("title-section") as TitleSection;
titleEl.setData(data.titles);