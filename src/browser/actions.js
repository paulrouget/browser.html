/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define((require, exports, module) => {

  'use strict';

  const {fromJS, List} = require('immutable');
  const {isAboutURL, isNotURL, hasScheme, getBaseURI} = require('common/url-helper');
  const {select, active} = require('./deck/actions');
  const {Suggestions} = require('./suggestion-box');
  const {Editable} = require('common/editable');
  const {WebView, WebViews} = require('./web-view');
  const {Updates} = require('./update-banner');
  // TODO: Should be `const {version} = require('package.json`);` instead but require.js
  // does not supports that.
  const version = '0.0.7';

  const makeSearchURL = input =>
    `https://duckduckgo.com/?q=${encodeURIComponent(input)}`;

  const makeAboutURL = input =>
    getBaseURI() + 'src/about/' + input.replace('about:', '') + '/index.html';

  const sendEventToChrome = type => dispatchEvent(new CustomEvent('mozContentEvent',
    {bubbles: true, cancelable: false, detail: {type}}))

  const readInputURL = input =>
    isAboutURL(input) ? makeAboutURL(input) :
    isNotURL(input) ? makeSearchURL(input) :
    !hasScheme(input) ? `http://${input}` :
    input;

  // Creates a blank session. Returns immutable map.
  const resetSession = () => fromJS({
    isDocumentFocused: document.hasFocus(),
    isDocumentScrolled: false,
    // TODO: `isFocused` should be `true` but that causes
    // issues when app iframe isn't focused. Can be fixed
    // once #239 is resolved.
    input: Editable(),
    rfa: {id: -1},
    suggestions: Suggestions(),
    updates: Updates(),
    webViews: [WebView({id: 'about:blank',
                        isPinned: false,
                        isSelected: true,
                        isActive: true,
                        isFocused: false})]
  });

  // Reads stored session. Returns either immutable data for the
  // session or null.
  const readSession = () => {
    try {
      return fromJS(JSON.parse(localStorage[`session@${version}`]))
             .update('suggestions', Suggestions)
             .update('input', Editable)
             .update('webViews', WebViews)
             .update('updates', Updates())
    } catch (error) {
      return null;
    }
  };

  const writeSession = session => {
    const data = session
      .setIn(['rfa', 'id'], -1)
      // Reset state of each web viewer that can't be carried across the sessions.
      .updateIn(['webViews'], viewers => viewers.map(WebView.persistent))
      .toJSON();
    localStorage[`session@${version}`] = JSON.stringify(data);
    return session;
  };

  // Exports:

  exports.makeSearchURL = makeSearchURL;
  exports.readInputURL = readInputURL;
  exports.resetSession = resetSession;
  exports.readSession = readSession;
  exports.writeSession = writeSession;
  exports.sendEventToChrome = sendEventToChrome;

});
