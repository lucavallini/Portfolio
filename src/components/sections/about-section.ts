import type { About } from "../../types/portfolio.types";

export class AboutSection extends HTMLElement {
    setData(about: About) {
        this.innerHTML = `
        <section id="about" class="about">
            <div class="about__title">
                <h2>About</h2>
            </div>
            <div class="about__description">
                ${about.description.map(line => `<p>${line}</p>`).join("")}
            </div>
        </section>
        `;
    }
}

customElements.define("about-section", AboutSection);