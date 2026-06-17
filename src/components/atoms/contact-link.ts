export class ContactLink extends HTMLElement {
    connectedCallback() {
        const icon = this.getAttribute('icon') ?? '';
        const url = this.getAttribute('url') ?? '';
        const isMail = url.includes('@');

        this.innerHTML = `
        <div class="contact-link">
            <i class="${icon}"></i>
        </div>
        `;

        const div = this.querySelector('.contact-link');
        div?.addEventListener('click', () => {
        if (isMail) {
            navigator.clipboard.writeText(url);
        } else {
            window.open(url, '_blank');
        }
        });
    }
}

customElements.define('contact-link', ContactLink);