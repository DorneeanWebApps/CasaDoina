/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

import { myOffers } from '../initializers/my-offers';

import '../elements/app-section.js';
import '../elements/my-offers-carousel';
import '../elements/my-pictures-carousel';


class MyHome extends PageViewElement {
  _render(props) {
    return html`
      <style>

      </style>

      <app-section sectionTitle="Bucura-te de ofertele noastre">
        <my-offers-carousel offers="${myOffers}"></my-offers-carousel>
      </app-section>

      <app-section sectionTitle="Casa Doina - gazdele tale ideale">
        <my-pictures-carousel articles="${props.homeArticles}"></my-pictures-carousel>
      </app-section>


      <app-section sectionTitle="De ce sa ne alegi pe noi?">
        
      </app-section>

      <app-section sectionTitle="Vatra Dornei - orasul din inima Bucovinei">

      </app-section>

      <app-section sectionTitle="Ce poti sa faci in vacanta?">

      </app-section>

    `;
  }

  static get properties() {
     return {

     } 
  }


  // This is called every time something is updated in the store.
  _stateChanged(state) {
  }



}

window.customElements.define('my-home', MyHome);
