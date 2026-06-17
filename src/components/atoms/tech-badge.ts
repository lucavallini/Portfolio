export class TechBadge extends HTMLElement {
    connectedCallback() {
        const name = this.getAttribute('name') ?? '';
        const icon = this.getAttribute('icon') ?? '';

        this.innerHTML = `
        <div class="tech-badge">
            <i class="${icon}"></i>
            <span>${name}</span>
        </div>
        `;
    }
}

customElements.define('tech-badge', TechBadge);