/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define((require, exports, module) => {

  'use strict';

  const Component = require('omniscient');
  const {DOM} = require('react');
  const {sendEventToChrome} = require('./actions');
  const {mix} = require('common/style');

  // View

  const Previews = {};

  Previews.render = Component(({webViews}, {edit}) => {

    console.log(webViews.toJSON().map(m => {
      let r = '';
      r += m.uri + ' ';
      r += m.isActive ? 'a':'_';
      r += m.isSelected ? 's':'_';
      return r;
    }).join('  |  '));

    return null;
  });

  exports.Previews = Previews;
});
