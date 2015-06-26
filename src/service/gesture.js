/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define((require, exports, module) => {

  'use strict';

  const {Record} = require('common/typed');

  const GestureScale = Record({
    scale: 1,
  }, 'GestureScale');

  exports.GestureScale = GestureScale;

  const service = address => {

    let delta;
    let refSize;

    let rfaRunning = false;

    const startZooming = () => {
      console.profile("x");
      refSize = window.innerWidth / 2;
      rfaRunning = true;
      updatingZoom();
    }

    const updatingZoom = () => {
      let scale = (refSize + delta) / refSize;
      address.receive(GestureScale({scale}));
      if (rfaRunning) {
        window.requestAnimationFrame(updatingZoom);
      }
    }

    const stopZooming = () => {
      delta = 0;
      rfaRunning = false;
      console.profileEnd("x");
    }

    document.body.addEventListener('MozMagnifyGestureStart', (e) => {
      // start
      delta = e.delta;
      startZooming();
    }, true);

    document.body.addEventListener('MozMagnifyGestureUpdate', (e) => {
      // update
      delta += e.delta;
    }, true);

    document.body.addEventListener('MozMagnifyGesture', (e) => {
      // end
      stopZooming();
    }, true);
  };

  exports.service = service;
});
