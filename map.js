class Map extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        const osm = document.createElement('iframe');
        osm.setAttribute('width', '100%');
        osm.setAttribute('height', '400px');
        osm.setAttribute('frameborder', 0);
        osm.setAttribute('scrolling', 'no');
        osm.setAttribute('marginheight', 0);
        osm.setAttribute('marginwidth', 0);
        osm.setAttribute('src', 'https://www.openstreetmap.org/export/embed.html?bbox=0.9448242187500001%2C48.45288728338137%2C3.2382202148437504%2C49.21670007971536&amp;layer=cyclemap" style="border: 1px solid black');

        const style = document.createElement('style');
        style.textContent = `
        div {
            height: 50vh;
        }
        `

        shadow.appendChild(style);
        shadow.appendChild(osm);
    }
}

customElements.define('open-map', Map);