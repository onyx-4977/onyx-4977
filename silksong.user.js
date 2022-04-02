// ==UserScript==
// @name         Silksong Place
// @namespace    https://www.reddit.com/r/HollowKnight/
// @version      0.1
// @description  try to take over r/place!
// @author       OnyX_#4977
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
console.log("script");
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-camera")[0].shadowRoot.children[0].children[0].children[0].appendChild(
        (function () {
            const div = document.createElement("div");
            div.style = "height:3550px; width:4400px; position: absolute; left: 0; right:0; top: 0; bottom:0; transform: translateX(11350px) translateY(17350px);     background-size: cover;" +
    "background-image: url('https://cdn.discordapp.com/attachments/959559823089860638/959588823602458644/unknown.png'); opacity: 0.3;";
            console.log(div);
            return div;
        })())

    }, false);
}