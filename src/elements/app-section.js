import { LitElement, html } from '@polymer/lit-element';

class AppSection extends LitElement {
    _render(props, pickerselected) {
        return html `       
    <style>
        .section-wrapper{
            margin-top: 5vh;
            padding: 24px;  
            position: relative;          
        }

        .section-container{
            border: 2px;
            border-style: solid;
            border-color: var(--app-dark-text-color);
            height: 250px;
        }

        .section-title{
            border: 2px;
            border-style: solid;
            border-color: var(--app-dark-text-color);
            color: var(--app-dark-text-color);
            position: absolute;
            padding: 8px 24px;
            top: -0.5em;
            left: 3vw;
            background-color: #F3E2CC;
        }

        .section-title > h2{
            margin: 0;
            padding: 0;
        }
    </style>

    <div class="section-wrapper">
        <div class="section-container">

        </div>

        <div class="section-title">
            <h2>TITLU SECTIUNE</h2>
        </div>
    </div>

    


    `;
    }


    static get properties() {
        return {

        }
    }

    constructor() {
        super();
    }

    _firstRendered(props) {}

    _didRender(props, changedProps, prevProps) {}


}

window.customElements.define('app-section', AppSection);