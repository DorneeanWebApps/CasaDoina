import { LitElement, html } from '@polymer/lit-element';
import { chevronLeft, chevronRight } from '../initializers/my-icons'

class MyOffersCarousel extends LitElement {
    _render(props, pickerselected) {
        return html `       
    <style>
        #section-wrapper{
            display: grid;
            grid-gap: 5vw;
            grid-template-columns: 3fr 2fr ;
            align-content: center;
            overflow:hidden;
            transform: translateX(-100%);
            -webkit-transform: translateX(-100%);
        }

        #offer-container{
            height:500px;
            color: var(--app-darker-text-color);
            font-family: 'Merriweather', serif;        }

        #offer-container > h1{
            margin: 0;
        }

        #offer-container > h2{
            margin: 0;
        }

        #offer-container > h3{
            margin: 0;
        }

        #offer-container > h6{
            margin: 0;
        }

        #offer-container > p{

        }

        .slide-in {
            animation: slide-in 1.5s forwards;
            animation-timing-function: ease-in;
            -webkit-animation: slide-in 0.5s forwards;
        }

        .slide-out {
            animation: slide-out 1.5s forwards;
            animation-timing-function: ease-out;
            -webkit-animation: slide-out 0.5s forwards;
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

        .image-wrapper{
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .image-container{
            width: 100%;
            height: auto;
            margin: auto;
            border-radius: 7px;
        }

        @keyframes slide-in {
            100% { transform: translateX(0%); }
        }

        @-webkit-keyframes slide-in {
            100% { -webkit-transform: translateX(0%); }
        }
            
        @keyframes slide-out {
            0% { transform: translateX(0%); }
            100% { transform: translateX(100%); }
        }

        @-webkit-keyframes slide-out {
            0% { -webkit-transform: translateX(0%); }
            100% { -webkit-transform: translateX(100%); }
        }




    </style>


        <div id="section-wrapper">
        

            <div id="offer-container">
                <h1>${props.offers[this.index].denumire}</h1>
                <h2>${props.offers[this.index].perioada}</h2>
                <p>${props.offers[this.index].descriere}</p>
                <h3>${props.offers[this.index].preturi}</h3>
                <h6>${props.offers[this.index].conditii}</h6>
            </div>

            <div class="image-wrapper">
                <img class="image-container" src="${props.offers[this.index].mainimage}">
            </div>

        </div>

    `;
    }



    static get properties() {
        return {
            offers: Array,
            offer: Object,
            index: Number
        }
    }

    constructor() {
        super();
        this.offer = {}
        this.index = 0;
    }

    _firstRendered(props) {}

    _didRender(props, changedProps, prevProps) {
        this.slideOffer();

    }
 
    slideIn(){

        this.shadowRoot.querySelector('#section-wrapper').classList.add('slide-in');
        this.shadowRoot.querySelector('#section-wrapper').classList.remove('slide-out');

    }


    slideOut(){
            setTimeout(() => {
                this.shadowRoot.querySelector('#section-wrapper').classList.remove('slide-in');
                this.shadowRoot.querySelector('#section-wrapper').classList.add('slide-out');
            }, 5500);
    }

    changeOffersIndex(){
            setTimeout(()=>{
                this.index === this.offers.length-1 ? this.index=0 : this.index = this.index+1;
            },6000)
    }

    slideOffer(){
        if(this.index < this.offers.length){
            this.slideIn();
            this.changeOffersIndex();
            this.slideOut();
        }
    }


}


window.customElements.define('my-offers-carousel', MyOffersCarousel);