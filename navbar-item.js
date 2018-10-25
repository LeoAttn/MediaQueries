class NavItem extends HTMLElement {
    constructor() {
        super();

        var shadow = this.attachShadow({mode: 'open'});

        const lien = document.createElement('a');
        lien.classList.add('item');
        if (this.getAttribute('data-url') != null) {
            lien.setAttribute('href', this.getAttribute('data-url'))
        }

        const icone = document.createElement('i');
        icone.classList.add('icon');
        icone.classList.add(this.getAttribute('data-icon'));

        const nom = document.createElement('span');
        nom.textContent = this.getAttribute('data-name');
        nom.classList.add('desktop-size');

        const style = document.createElement('style');
        style.textContent = `@import "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"`

        lien.appendChild(icone);
        lien.appendChild(nom);

        shadow.appendChild(style);
        shadow.appendChild(style2);
        shadow.appendChild(lien);
    }
}

customElements.define('nav-item', NavItem);