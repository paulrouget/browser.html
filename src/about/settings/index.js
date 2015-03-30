/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define((require, exports, module) => {

  'use strict';

  const Component = require('omniscient');
  const {render} = require('browser/core');
  const {DOM} = require('react');
  const {fromJS} = require('immutable');

  const Settings = Component('Settings', state => {

    let rows = [];
    for (let [name,value] of state) {
      rows.push(DOM.div({
        key: name,
        className: 'row'
      }, [
        DOM.span({
          key: 'name.' + name,
          className: 'name',
          title: name
        }, name),
        DOM.span({
          key: 'value.' + name,
          className: 'value',
          title: value
        }, value)
      ]));
    }

    return DOM.div({
      key: 'table',
      className: 'table'
    }, rows);

  });

  let state;

  const update = () => render(Settings, state, document.body);

  navigator.mozSettings
           .createLock()
           .get('*')
           .then(r => {
             state = fromJS(r);
             update();
           });

  navigator.mozSettings.onsettingchange = e => {
    if (state) {
      state = state.set(e.settingName, e.settingValue);
      update();
    }
  };

});
