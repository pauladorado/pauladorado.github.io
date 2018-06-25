import "../../node_modules/fontawesome-icon/fontawesome-icon.js";
import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
/**
* @customElement
* @polymer
*/

class PauladoradoComApp extends PolymerElement {
  static get template() {
    return html`
        <style>
            :host {
                max-height: 80%;
                display: grid;
                grid-template: 1fr 50px / 1fr;
            }

            header {
                display: flex;
                justify-content: center;
            }

            header img {
                max-width: 70%;
            }

            footer {
                margin-top: 85px;
                font-size: 30px;
                display: flex;
                flex-direction: row;
                justify-content: center;
            }

            a:hover { color: black; }
            a:link { color: black; }
            a:visited { color: black; }

            footer a:first-child {
                margin-left: 0;
            }

            footer a + footer a {
                margin-left: 20px;
            }
        </style>

        <header>
            <img src="/img/logo.png" />
        </header>
        <footer>
            <a href="https://www.twitter.com/katedorado" target="blank">
                <fontawesome-icon prefix="fab" name="twitter-square" fixed-width></fontawesome-icon>
            </a>
            <a href="https://www.instagram.com/katedorado" target="blank">
                <fontawesome-icon prefix="fab" name="instagram" fixed-width></fontawesome-icon>
            </a>
            <a href="https://www.behance.net/katedorado086d" target="blank">
                <fontawesome-icon prefix="fab" name="behance-square" fixed-width></fontawesome-icon>
            </a>
        </footer>
        `;
  }

}

window.customElements.define('pauladorado-com-app', PauladoradoComApp);