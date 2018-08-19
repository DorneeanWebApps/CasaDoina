/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html } from '@polymer/lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

// These are the actions needed by this element.
import {
  navigate,
  updateOffline,
  updateDrawerState,
  updateLayout
} from '../actions/app.js';

// These are the elements needed by this element.
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import { menuIcon } from './my-icons.js';
import './snack-bar.js';

class MyApp extends connect(store)(LitElement) {
  _render({appTitle, _page, _drawerOpened, _snackbarOpened, _offline}) {
    // Anything that's related to rendering should be done in here.
    return html`
    <style>
      :host {
        --app-drawer-width: 256px;
        display: block;

        --app-primary-color: #388E3C;
        --app-secondary-color: #FFEB3B;
        --app-dark-text-color: #9E9E9E;
        --app-light-text-color: #FFF9C4;
        /* --app-section-even-color: #f7f7f7;
        --app-section-odd-color: white; */

        --app-header-background-color: var(--app-primary-color);
        --app-header-text-color: var(--app-light-text-color);
        --app-header-selected-color: var(--app-secondary-color);

        --app-drawer-background-color: var(--app-light-text-color);
        --app-drawer-text-color: var(--app-dark-text-color);
        --app-drawer-selected-color: #78909C;
      }

      #main-wrapper{
        background-image: linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.8)), url('/images/background.jpg');
        background-position: right top;
        background-attachment: fixed;
        background-size: cover;
        height: 100vh;
        overflow-x: auto;
        display: block;
      }

      #main-wrapper::-webkit-scrollbar {
          display: none;
        }

      app-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        text-align: center;
        background-color: var(--app-header-background-color);
        color: var(--app-header-text-color);
        border-bottom: 1px solid #eee;
        height: 100px;
        display: grid;
        align-content: end;
        z-index: 201;
      }

      .toolbar-top {
        background-color: var(--app-header-background-color);
      }

      [main-title] {
        font-family: 'Pacifico';
        font-size: 1.5em;
        /* In the narrow layout, the toolbar is offset by the width of the
        drawer button, and the text looks not centered. Add a padding to
        match that button */
        padding-right: 44px;
      }

      .toolbar-list {
        display: none;
      }

      .toolbar-list > a {
        display: inline-block;
        color: var(--app-header-text-color);
        text-decoration: none;
        line-height: 30px;
        padding: 4px 24px;
        font-family: 'Open Sans Condensed', sans-serif;
        font-size: 1.3em;
      }

      .toolbar-list > a[selected] {
        color: var(--app-header-selected-color);
        border-bottom: 4px solid var(--app-header-selected-color);
      }

      .menu-btn {
        background: none;
        border: none;
        fill: var(--app-header-text-color);
        cursor: pointer;
        height: 44px;
        width: 44px;
      }

      .drawer-list {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 24px;
        background: var(--app-drawer-background-color);
        position: relative;
      }

      .drawer-list > a {
        display: block;
        text-decoration: none;
        color: var(--app-drawer-text-color);
        line-height: 40px;
        padding: 0 24px;
      }

      .drawer-list > a[selected] {
        color: var(--app-drawer-selected-color);
      }

      /* Workaround for IE11 displaying <main> as inline */
      main {
        display: block;
      }

      .main-content {
        padding-top: 100px;
        min-height: calc(100vh - 100px);
      }

      .page {
        display: none;
      }

      .page[active] {
        display: block;
      }

      footer {
        padding: 24px;
        background: var(--app-drawer-background-color);
        color: var(--app-drawer-text-color);
        text-align: center;
      }

      /* Wide layout: when the viewport width is bigger than 460px, layout
      changes to a wide layout. */
      @media (min-width: 460px) {
        .toolbar-list {
          display: block;
        }

        .menu-btn {
          display: none;
        }

        .main-content {
          padding-top: 100px;
        }

        /* The drawer button isn't shown in the wide layout, so we don't
        need to offset the title */
        [main-title] {
          padding: 0;
          width: 200px;
          display: grid;
          justify-content: start;
          margin-left: 3vw;
        }
      }
    </style>

<div id="main-wrapper">

<app-header fixed condenses effects="waterfall">
      <app-toolbar sticky class="toolbar-top">
        <button class="menu-btn" title="Menu" on-click="${_ => store.dispatch(updateDrawerState(true))}">${menuIcon}</button>
        <div main-title>${appTitle}</div>

      <!-- This gets hidden on a small screen-->
      <nav class="toolbar-list">
        <a selected?="${_page === 'acasa'}" href="/acasa">Acasa</a>
        <a selected?="${_page === 'vatra_dornei'}" href="/vatra_dornei">Vatra Dornei</a>
        <a selected?="${_page === 'oferte'}" href="/oferte">Oferte</a>
        <a selected?="${_page === 'camere'}" href="/camere">Camere</a>
        <a selected?="${_page === 'contact'}" href="/contact">Contact</a>
      </nav>
      </app-toolbar>
    </app-header>

    <!-- Drawer content -->
    <app-drawer opened="${_drawerOpened}"
        on-opened-changed="${e => store.dispatch(updateDrawerState(e.target.opened))}">
      <nav class="drawer-list">
        <a selected?="${_page === 'acasa'}" href="/acasa">Acasa</a>
        <a selected?="${_page === 'vatra_dornei'}" href="/vatra_dornei">Vatra Dornei</a>
        <a selected?="${_page === 'oferte'}" href="/oferte">Oferte</a>
        <a selected?="${_page === 'camere'}" href="/camere">Camere</a>
        <a selected?="${_page === 'contact'}" href="/contact">Contact</a>
      </nav>
    </app-drawer>

    <!-- Main content -->
    <main role="main" class="main-content">
      <my-home class="page" active?="${_page === 'acasa'}"></my-home>
      <my-view2 class="page" active?="${_page === 'camere'}"></my-view2>
      <my-view3 class="page" active?="${_page === 'oferte'}"></my-view3>
      <my-view1 class="page" active?="${_page === 'vatra_dornei'}"></my-view1>
      <my-view3 class="page" active?="${_page === 'contact'}"></my-view3>
      <my-view404 class="page" active?="${_page === 'view404'}"></my-view404>
    </main>

    <footer>
      <p>Made with &hearts; by the Polymer team.</p>
    </footer>

    <snack-bar active?="${_snackbarOpened}">
        You are now ${_offline ? 'offline' : 'online'}.</snack-bar>

    </div>    
    `;
  }

  static get properties() {
    return {
      appTitle: String,
      _page: String,
      _drawerOpened: Boolean,
      _snackbarOpened: Boolean,
      _offline: Boolean
    }
  }

  constructor() {
    super();
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/3.0/docs/devguide/settings#setting-passive-touch-gestures
    setPassiveTouchGestures(true);
  }

  _firstRendered() {
    installRouter((location) => store.dispatch(navigate(window.decodeURIComponent(location.pathname))));
    installOfflineWatcher((offline) => store.dispatch(updateOffline(offline)));
    installMediaQueryWatcher(`(min-width: 460px)`,
        (matches) => store.dispatch(updateLayout(matches)));
  }

  _didRender(properties, changeList) {
    if ('_page' in changeList) {
      const pageTitle = properties.appTitle + ' - ' + changeList._page;
      updateMetadata({
          title: pageTitle,
          description: pageTitle
          // This object also takes an image property, that points to an img src.
      });
    }
  }

  _stateChanged(state) {
    this._page = state.app.page;
    this._offline = state.app.offline;
    this._snackbarOpened = state.app.snackbarOpened;
    this._drawerOpened = state.app.drawerOpened;
  }
}

window.customElements.define('my-app', MyApp);
