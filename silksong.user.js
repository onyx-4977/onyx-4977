// ==UserScript==
// @name         Silksong Place
// @namespace    https://www.reddit.com/r/HollowKnight/
// @version      0.6.1
// @description  try to take over r/place!
// @author       OnyX_#4977
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==

function makeOverlay(id, url, width, height, x, y) {
    const div = document.createElement("div");
    div.className = "Template";
    div.id = id;
    div.style = `height:${height}px; width:${width}px; position: absolute; inset: 0px; transform: translateX(${x}px) translateY(${y}px); background-size: cover; image-rendering: pixelated; background-image: url('${url}'); opacity: 0.3;`;
    document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-camera")[0].shadowRoot.children[0].children[0].children[0].appendChild(div);
}

if (window.top !== window.self) {
    window.addEventListener('load', () => {
        makeOverlay("Silksong",     "https://raw.githubusercontent.com/onyx-4977/onyx-4977/main/SilksongTemplate.png", 5250, 3900, 11250, 17150);
        makeOverlay("HollowKnight", "https://github.com/onyx-4977/onyx-4977/raw/main/HollowKnightTemplate.png",        5600, 3500, 65000, 2500);
        makeOverlay("Radiance",     "https://github.com/onyx-4977/onyx-4977/raw/main/RadianceTemplate.png",            4700, 5250, 30250, 82500);

        /// BACKUP PLAN
        /*
        document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-camera")[0].shadowRoot.children[0].children[0].children[0].appendChild(
        (function () {
            const div = document.createElement("div");
            div.className = "Template";
            div.id = "Radiance2";
            div.style = "height:5050px; width:4550px; position: absolute; inset: 0px; transform: translateX(15250px) translateY(82500px);     background-size: cover; image-rendering: pixelated;" +
    "background-image: url('https://github.com/onyx-4977/onyx-4977/raw/main/RadianceTemplate.png'); opacity: 0.3;";
            return div;
        })())
        */

        document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByClassName("bottom-controls")[0].appendChild(
        (function () {
            const slider = document.createElement("div");
            slider.style = "height: 36px; width: 200px; position: absolute;  right: 100px; top: 0;  background-color: #FFF;pointer-events: all;border-radius: 26px;";
            const input = document.createElement("input");
            input.type = 'range';
            input.min = '0';
            input.max = '1';
            input.step = '0.1';
            input.value = '0.3';
            input.style = "margin: 10px;left: 0;right: 0;top: 0;bottom: 0;box-sizing: border-box;position: absolute;";
            input.addEventListener('input', (event) => {
                document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-camera")[0].shadowRoot.children[0].children[0].children[0].querySelectorAll(".Template").forEach(element => {element.style.opacity = event.currentTarget.value});
            });
            slider.appendChild(input);
            return slider;
        })()
        );

    }, false);
}
