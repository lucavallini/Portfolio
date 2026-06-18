import type { Technology } from "../../types/portfolio.types";

export class TechSection extends HTMLElement {
    setData(technologies: Technology[]) {
        this.innerHTML = `
        <section class="tech">
            <div class="tech__title">
                <h2>Technologies</h2>
            </div>
                
            <div class="tech__container" id="tech-container">
            </div>
        </section>
        `;
        
        const container = this.querySelector("#tech-container");
        const categories = ["Frontend", "Backend", "Database"];

        categories.forEach(category => {
            const filtered = technologies.filter(t => t.category === category);
            if (filtered.length === 0) return;

            const categoryEl = document.createElement("div");
            categoryEl.className = "tech-category";

            const header = document.createElement("div");
            header.className = "tech-category__header";
            header.innerHTML = `<h3 class="tech-category__title">${category}</h3>`;
            categoryEl.appendChild(header);

            const grid = document.createElement("div");
            grid.className = "tech-category__grid";

            filtered.forEach(tech => {
                const card = document.createElement("div");
                card.className = "tech-card";
                card.innerHTML = `
                    <div class="tech-card__top">
                        <i class="${tech.icon} tech-card__icon"></i>
                        <span class="tech-card__name">${tech.name}</span>
                    </div>
                    <span class="tech-card__level">${tech.level}</span>
                `;
                grid.appendChild(card);
            });

            categoryEl.appendChild(grid);
            container?.appendChild(categoryEl);
        });
    }
}

customElements.define("tech-section", TechSection);