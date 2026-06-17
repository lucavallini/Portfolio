import '../atoms/contact-link.ts';
import type { Hero } from '../../types/portfolio.types';

export class HeroSection extends HTMLElement{
    setData(hero: Hero){
        this.innerHTML =`
        <section class="hero">
            <div class='hero__left'>
                <div class='hero__name'>
                    <h1>${hero.name} ${hero.lastName}</h1>
                </div>

                <div class='hero__info'>
                    ${hero.info.map(line => `<p>${line}</p>`).join('')}
                </div>

                <div class='hero__contact'>
                        ${hero.contact.map(c => `<contact-link class='hero__contact-cursor' icon="${c.icon}" url="${c.url}"></contact-link>`).join('')}
                </div>
            </div>

            <div class='hero__right'>
                <img src='${hero.img}'>
            </div>
        </section>
        `;
    }
}

customElements.define(
    'hero-section',
    HeroSection
)