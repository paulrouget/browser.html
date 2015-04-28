/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define((require, exports, module) => {

  'use strict';

  const Component = require('omniscient');
  const {DOM} = require('react');
  const {sendEventToChrome} = require('./actions');
  const {mix} = require('common/style');
  const {Record} = require('typed-immutable/index');

  // Style

  const styleFoobar = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: 100,
    backgroundColor: 'red'
  };

  // View

  const Foobar = {};
  Foobar.render = Component(() => {

    return DOM.div({
      style: styleFoobar
    }, [
    ]);
  });

  exports.Foobar = Foobar;
});

