class ElementPerso extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({node: 'open'});

        const titre = document.createElement('h2');
        titre.textContent = 'Bonjour';

        const paragraphe = document.createElement('p');
        paragraphe.textContent = 'Lorem Ipsum';
        paragraphe.classList.add('highlight');

        const style = document.createElement('style');
        style.textContent = `
            highlight {
                color: red
            }
            `;
        shadow.appendChild(style);
        shadow.appendChild(titre);
        shadow.appendChild(paragraphe);
    }
}

customElements.define('element-perso', ElementPerso);