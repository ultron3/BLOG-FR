import { html,render } from "./lib/lit-html.js";
import {Router} from "./lib/vaadin-router.js";
export default class Home extends HTMLElement{
    
    constructor(){
        super();
    }

    getRoot(){
        return this;
    }

    renderView(){
        return html `
        <form>
        <div class="field">
        <button class="submit"@click=${this.Onsave(e)}>invia</button>
        <button class="submit"@click=${this.Oncancel(e)}>reset</button>
        </form>

        
    `;
    }
}