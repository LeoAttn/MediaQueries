class Map extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});

        const osm = document.createElement('div');
        osm.id = "basicMap";

        const style = document.createElement('style');
        style.textContent = `
        div {
            height: 50vh;
        }
        `

        const scriptMap = document.createElement('script');
        scriptMap.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/openlayers/2.11/OpenLayers.js')
        const script = document.createElement('script');
        script.textContent = `
        function init() {
            map = new OpenLayers.Map("basicMap");
            var fromProjection = new OpenLayers.Projection("EPSG:4326");
            var toProjection = new OpenLayers.Projection("EPSG:900913");

            map.addLayer(new OpenLayers.Layer.OSM());
            map.setCenter(new OpenLayers.LonLat(2.30, 48.82).transform( fromProjection, toProjection), 10);
        }
        window.onload = init;
        `

        shadow.appendChild(style);
        shadow.appendChild(osm);
        shadow.appendChild(scriptMap);
        shadow.appendChild(script);
    }
}

customElements.define('open-map', Map);