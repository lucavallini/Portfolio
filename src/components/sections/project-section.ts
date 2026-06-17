import type { Project } from "../../types/portfolio.types";
import { ProjectCard } from "../atoms/project-card";
import "../atoms/tech-badge";

export class ProjectSection extends HTMLElement {
    setData(projects: Project[]){
        this.innerHTML = `
        <section class='project'>
            <div class='project__title'>
                <h2>Projects</h2>
            </div>

            <div class='project__container' id='project-container'>
            </div>

        </section>
        `;
        const container = this.querySelector('#project-container');

        projects.forEach(project => {
            const card = document.createElement('project-card') as ProjectCard;
            card.setAttribute('name', project.name);
            card.setAttribute('description', project.description);
            card.setAttribute('repo', project.repo);
            card.setAttribute('img', project.img);

            container?.appendChild(card);
            const techsContainer = card.querySelector('.project-card__techs');
            project.technologies.forEach(tech => {
                const badge = document.createElement('tech-badge');
                badge.setAttribute('name', tech.name);
                badge.setAttribute('icon', tech.icon ?? '');
                techsContainer?.appendChild(badge);
            });
        });
    }
}

customElements.define('project-section', ProjectSection);