import { LitElement, html } from '@polymer/lit-element';
import { chevronLeft, chevronRight } from '../initializers/my-icons'

class MyOffersCarousel extends LitElement {
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
            <div class="offer-container">
                <h1>Nostrud nulla sint excepteur officia magna sit sint sunt pariatur laboris nisi exercitation enim.</h1>
                <h2>PERIOADA OFERTA</h2>
                <p>In sit sit enim commodo adipisicing et in consequat cupidatat eu velit ullamco. Aute dolore pariatur nulla reprehenderit amet nulla voluptate do proident reprehenderit elit officia dolore esse. Commodo minim ad reprehenderit ex laborum consequat commodo duis proident. Et amet ullamco deserunt velit voluptate reprehenderit ut reprehenderit veniam pariatur adipisicing. Commodo voluptate aliquip in exercitation voluptate culpa nulla cillum ea. Consequat Lorem reprehenderit voluptate cupidatat officia. Ipsum non anim velit anim et do amet pariatur excepteur.

Commodo sunt labore labore amet esse. Duis nisi tempor non qui nostrud deserunt nisi officia exercitation occaecat. Exercitation elit officia est ex qui do consequat proident sunt laboris. Dolor eu reprehenderit laboris et dolore labore nulla aliquip.

Eiusmod nostrud elit consequat nisi in incididunt irure nostrud fugiat. Minim do in ullamco deserunt consectetur. Ea duis culpa magna incididunt ad ea Lorem eu laborum ullamco tempor veniam.

Do eiusmod esse mollit tempor amet irure et qui ullamco. Sint aute proident magna cupidatat aliqua. Non ad tempor mollit tempor commodo aute esse. Sit dolor laborum sit labore consequat dolor officia est veniam eiusmod. Sint et esse cillum sint in ipsum sit in.

Ad adipisicing id ea amet anim eiusmod magna eu laborum do dolor. Cupidatat eiusmod laboris labore labore. Elit consectetur et mollit amet mollit.</p>
                <h3>PRETURI OFERTA</h3>
                <h6>CONDITII OFERTA</h6>

            </div>

            <div class="text container">
                <img class="image-container" src="/images/mainpic.jpg">
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

window.customElements.define('my-offers-carousel', MyOffersCarousel);