/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define((require, exports, module) => {

  'use strict';

  const Component = require('omniscient');
  const {DOM} = require('react');
  const {sendEventToChrome} = require('./actions');
  const {mix} = require('common/style');
  const {getBestFavicon} = require('common/getbestfavicon');
  const {select, activate, remove, isPinned} = require('./deck/actions');

  // FIXME: redundant (see browser.js)

  const selectWebView = webView => items =>
    activate(select(items, item => item.get('id') == webView.id));

  const close = p => items =>
    (!isPinned(items.find(p)) && items.size > 1) ? remove(items, p) : items;
  const closeWebView = webView =>
    close(x => x.get('id') == webView.id);

  // View

  const Previews = {};

  Previews.render = Component(({webViews}, {edit}) => {


    const previews = webViews.toJSON().map((webView, index) => {

      // FIXME: for some reason this is called
      // on every click on a [+] on reddit.com.
      // Probably a focus issue

      const title = webView.title ? webView.title :
        webView.isLoading ? 'Loading...' :
        webView.uri ? webView.uri :
        'New Tab';

      let iconUrl;
     
      if (!webView.isLoading) {
        iconUrl = getBestFavicon({
         idealSize: 16 * devicePixelRatio,
         webView
        });
      }

      return DOM.div({
        key: 'preview' + index,
        style: {
          display: 'flex',
          flexBasis: '180px',
          backgroundColor: webView.isSelected ? 'white' : 'transparent',
          borderRight: '1px solid #DDD',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 7px'
        },
        onClick: e => edit(selectWebView(webView)),
      }, [
        DOM.div({
          key: 'throbber',
          style: {
            fontFamily: 'FontAwesome',
            width: 30,
            textAlign: 'center',
            flexShrink: '0',
            cursor: 'default',
            animation: 'rotate 1s linear 0s infinite',
            display: (webView.uri && webView.isLoading) ? 'block' : 'none'
          }
        }, '\uf1ce'),
        DOM.img({
          key: 'favicon',
          src: iconUrl,
          style: {
            width: 16,
            height: 16,
            marginRight: 7,
            cursor: 'default',
            flexShrink: '0',
            display: (!webView.isLoading && iconUrl) ? 'block' : 'none'
          }
        }),
        DOM.div({
          key: 'title',
          style: {
            flexGrow: '1',
            display: 'inline-block',
            textOverflow: 'ellipsis',
            overflowX: 'hidden',
            verticalAlign: 'middle',
            cursor: 'default',
            textAlign: 'center',
            color: webView.isSelected ? '#000' : '#888'
          }
        }, title),
        DOM.div({
          key: 'closebutton',
          style: {
            fontFamily: 'FontAwesome',
            margintLeft: 7,
            cursor: 'default',
            flexShrink: '0',
            color: webView.isSelected ? '#444' : '#888'
          },
          onClick: e => {
            edit(closeWebView(webView));
            e.stopPropagation();
          }
        }, '\uf00d'),
      ]);
    });

    const addButton = DOM.div({
      key: 'addbutton',
      style: {
        fontFamily: 'FontAwesome',
        width: 30,
        alignSelf: 'center',
        textAlign: 'center',
        flexShrink: '0'
      }
    }, '\uf067');

    const spacer = DOM.div({
      key: 'spacer',
      style: {
        display: 'flex',
        flexGrow: '1'
      }
    });

    const box = DOM.div({
      style: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        height: 30, // FIXME: webview are display below this box
        borderTop: '1px solid #DDD',
        width: '100vw',
        backgroundColor: '#F0F2F5',
        display: 'flex',
        alignItems: 'flex-stretch'
      },
    }, [
      previews,
      spacer,
      addButton
    ]);

    return box;
  });

  exports.Previews = Previews;
});
