import type { Contact } from "../../types/portfolio.types";
import "../atoms/contact-link";

export class FooterSection extends HTMLElement {
  setData(contact: Contact[]) {
    this.innerHTML = `
    <section class="section" id="contact">
      <footer class="footer-section">
        <div class="footer__links">
          ${contact.map(c => `<contact-link class="footer__link" icon="${c.icon}" url="${c.url}"></contact-link>`).join('')}
        </div>
        <p class="footer__copy">Gracias por leer :D</p>
      </footer>
    </section>
    `;
  }
}

customElements.define("footer-section", FooterSection);