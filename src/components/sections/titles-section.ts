import type { Title } from "../../types/portfolio.types";
import "../atoms/title-card";

export class TitleSection extends HTMLElement {
    setData(titles: Title[]) {
        this.innerHTML = `
        <section id="titles" class="title">
            <div class="title-section__title">
                <h2>Titles</h2>
            </div>
            <div class="title-section__container" id="title-container">
            </div>
        </section>
        `;
        const container = this.querySelector("#title-container");

        titles.forEach(title => {
            const card = document.createElement("title-card");
            card.setAttribute("name", title.name);
            card.setAttribute("institution", title.institution);
            card.setAttribute("status", title.status);
            container?.appendChild(card);
        });
    }
}

customElements.define("title-section", TitleSection);