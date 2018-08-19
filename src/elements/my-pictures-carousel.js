import { LitElement, html } from '@polymer/lit-element';
import { chevronLeft, chevronRight } from '../initializers/my-icons'

class MyPicturesCarousel extends LitElement {
    _render(props, pickerselected) {
        return html `       
    <style>
        .section-wrapper{
            display: grid;
            grid-template-columns: 10vw 3fr 2fr 10vw;
            align-content: center;
        }

        .arrow{
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .icon{
            color: var(--app-dark-text-color);
            width: 7vw;
            height: 100%;
        }

        .image-container{
            width: 100%;
            height: auto;
        }




    </style>


        <div class="section-wrapper">
           <div class="arrow">
              <svg class="icon">${chevronLeft}</svg>  
            </div>
            <div class="">
                <img class="image-container" src="/images/mainpic.jpg">
            </div>

            <div class="text container">

            </div>
            <div class="arrow">
            <svg class="icon">${chevronRight}</svg>  
            </div>
        </div>

    `;
    }


    static get properties() {
        return {
            sectionTitle: String,
        }
    }

    constructor() {
        super();
    }

    _firstRendered(props) {}

    _didRender(props, changedProps, prevProps) {}


}

window.customElements.define('my-pictures-carousel', MyPicturesCarousel);