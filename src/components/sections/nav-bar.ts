
export class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="nav-bar">
            <div class="nav-bar__logo">
                <a href="#hero">LV</a>
            </div>

            <div class="nav-bar__links">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#tech">Tech</a>
                <a href="#titles">Titles</a>
                <a href="#contact">Contact</a>
            </div>

            <div class="nav-bar__button">
                <button class="nav-bar__theme-button" id="theme-button">🌙</button>
            </div>
        </nav>
        `;
    
        const btn = this.querySelector("#theme-button");
        btn.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
            btn.textContent = document.body.classList.contains("light-mode") ? '☀️' : '🌙';
        })
    }
}

customElements.define("nav-bar", NavBar);