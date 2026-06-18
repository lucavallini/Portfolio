export class TitleCard extends HTMLElement {
    connectedCallback() {
        const name = this.getAttribute("name") ?? "";
        const institution = this.getAttribute("institution") ?? "";
        const status = this.getAttribute("status") ?? "";
        const statusClass = status === "completed" ? "title-card__status--completed" : "title-card__status--in-progress";

        this.innerHTML = `
        <div class="title-card">
            <div class="title-card__main">
                <h3 class="title-card__name">${name}</h3>
                <p class="title-card__institution">${institution}</p>
            </div>
            <span class="title-card__status ${statusClass}">${status}</span>
        </div>
        `;
    }
}

customElements.define("title-card", TitleCard);