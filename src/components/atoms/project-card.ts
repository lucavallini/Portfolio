export class ProjectCard extends HTMLElement {
    connectedCallback() {
        const name = this.getAttribute('name') ?? '';
        const description = this.getAttribute('description') ?? '';
        const repo = this.getAttribute('repo') ?? '';
        const img = this.getAttribute('img') ?? '';

        this.innerHTML = `
        <div class="project-card">
            <h3>${name}</h3>
            <div class='project-card__img'>
                <img src="${img}" class="project-card__img">
            </div>
            <p class="project-card__description">${description}</p>
            <div class="project-card__techs"></div>
            <a href="${repo}" target="_blank" class="project-card__repo">Ver repositorio</a>
        </div>
        `;
    }
    }

customElements.define('project-card', ProjectCard);