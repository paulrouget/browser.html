/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define((require, exports, module) => {
  'use strict';

  const {Application, Address} = require('reflex');
  const Browser = require('./browser');
  const Thumbnail = require('service/thumbnail');
  const Pallet = require('service/pallet');
  const Update = require('service/update');
  const Session = require('./session');
  const Runtime = require('common/runtime');
  const History = require('service/history');
  const Search = require('service/search');
  const Suggestion = require('service/suggestion');
  const Keyboard = require('common/keyboard');
  const Settings = require('service/settings');
  const GestureScale = require('service/gesture');

  // Set up a address (message bus if you like) that will be used
  // as an address for all application components / services. This
  // address is going to receive action and then pass it on to each
  // application component for it handle it.
  const address = new Address({
    receive(action) {
      application.receive(action);
      thumbnail(action);
      pallet(action);
      runtime(action);
      //history(action);
      //search(action);
      suggestion(action);
      keyboard(action);
      settings(action);
    }
  });
  window.address = address;

  const application = new Application({
    target: document.body,
    state: Browser.Model(),
    update: Browser.update,
    view: Browser.view,
    address: address
  });
  window.application = application;

  const thumbnail = Thumbnail.service(address);
  const pallet = Pallet.service(address);
  const updater = Update.service(address);
  const runtime = Runtime.service(address);
  // const history = History.service(address);
  const search = Search.service(address);
  const suggestion = Suggestion.service(address);
  const keyboard = Keyboard.service(address);
  const settings = Settings.service(address);
  // const session = Session.service(address);
  const gestureScale = GestureScale.service(address);

  // Restore application state.
  address.receive(Session.Action.RestoreSession());

  // Trigger a forced update check after 5s to not slow down startup.
  // TODO: delay until we're online if needed.
  window.setTimeout(address.pass(Runtime.Action.CheckUpdate), 500);
});
