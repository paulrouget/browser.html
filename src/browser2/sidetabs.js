/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define((require, exports, module) => {

  'use strict';

  const {Record} = require('common/typed');
  const {html, render} = require('reflex');
  const WebView = require('browser/web-view');
  const {Style, StyleSheet} = require('common/style');
  const Favicon = require('common/favicon');
  const {ToggleDevtoolsHUD} = require('browser/devtools-hud');
  const Focusable = require('common/focusable');

  const Model = Record({
    showSidetabs: false,
    large: true,
  });
  exports.Model = Model;

  // Action

  const ToggleSidetabs = Record({
    description: 'Toggle Sidetabs'
  }, 'Sidetabs.ToggleSidetabs')

  exports.ToggleSidetabs = ToggleSidetabs;

  const ToggleSidetabsSize = Record({
    description: 'Toggle Sidetabs Size'
  }, 'Sidetabs.ToggleSidetabsSize')

  exports.ToggleSidetabsSize = ToggleSidetabsSize;

  const update = (state, action) =>
    action instanceof ToggleSidetabs ?
      state.set('showSidetabs', !state.showSidetabs) :
    action instanceof ToggleSidetabsSize ?
      state.set('large', !state.large) :
    state;
  exports.update = update;

  const styleContainer = StyleSheet.create({
    default: {
      background: '#F5F5F5',
      display: 'none',
      flexDirection: 'column',
      flexShrink: '0',
      borderLeft: '0.5px solid #CBCBCB',
      flexBasis: '28.5px',
      padding: '0 0 12px 0', // room for native window resizer
    },
    large: {
      flexBasis: '120.5px',
    },
    displayed: {
      display: 'flex',
    },
  });

  const styleSpacer = StyleSheet.create({
    default: {
      flexGrow: 1,
      MozWindowDragging: 'drag',
    }
  })

  const styleButton = StyleSheet.create({
    default: {
      fontFamily: 'FontIon',
      width: 16,
      margin: 6,
      lineHeight: '16px',
      textAlign: 'center',
      alignSelf: 'center',
      border: '0.5px solid #CBCBCB',
      borderRadius: '100px',
      backgroundColor: '#DDD',
      MozUserSelect: 'none',
    },
  });

  const styleTab = StyleSheet.create({
    tab: {
      color: '#777',
      fontSize: '12px',
      lineHeight: '14px',
      fontWeight: 'lighter',
      padding: '6px',
      display: 'flex',
      MozUserSelect: 'none',
      cursor: 'default',
      borderBottom: '0.5px solid #CBCBCB'
    },
    selected: {
      color: '#333',
      backgroundColor: '#DDD'
    },

    favicon: {
      imageRendering: '-moz-crisp-edges',
      width: 16,
      height: 16,
      flexShrink: 0,
    },
    title: {
      fontSize: '10px',
      flexGrow: 1,
      margin: '0 6px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      lineHeight: '16px',
    },
    close: {
      fontFamily: 'FontIon',
      textAlign: 'center',
      verticalAlign: 'middle',
      flexShrink: 0,
      width: 16,
      lineHeight: '16px',
    },
    spinner: {
      flexShrink: 0,
      fontFamily: 'FontIon',
      width: 16,
      lineHeight: '16px',
      textAlign: 'center',
      color: '#4A90E2',
      animationName: 'spinner',
      animationDuration: '500ms',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
    },
  });

  // View

  const viewOneTab = (loader, page, progress, isSelected, large, address) => {
    const title = page.title || loader.uri || 'New Tab';
    const faviconURL = page.faviconURL || Favicon.getFallback(loader.uri);

    const icon = progress.loading ?
      html.div({
        style: styleTab.spinner,
        onClick: address.pass(Focusable.Focus),
      }, '\uf29C') :
      html.img({
        style: styleTab.favicon,
        alt: '',
        src: faviconURL,
        onClick: address.pass(Focusable.Focus),
      });

    return html.div({
      style: Style(styleTab.tab, isSelected && styleTab.selected),
    }, [
      icon,
      large && html.div({
        style: styleTab.title,
        onClick: address.pass(Focusable.Focus),
      }, title),
      large && html.div({
        style: styleTab.close,
        onClick: address.pass(WebView.Close)
      }, '\uf404'),
    ])
  }

  const viewTabs = (pages, loaders, progress, selected, large, address) =>
    loaders.map((loader, index) =>
        render(`Tab@${loader.id}`, viewOneTab,
               loader, pages.get(index),
               progress.get(index),
               index === selected,
               large,
               address.forward(action => WebView.Action({id: loader.id, action}))));

  const view = (sidetabs, pages, loaders, progress, selected, address) =>
    html.div({
      style: Style(styleContainer.default, sidetabs.showSidetabs && styleContainer.displayed, sidetabs.large && styleContainer.large)
    }, [
      (selected != null) && !sidetabs.large && html.div({
        style: styleButton.default,
        onClick: address.send(WebView.Action({action: WebView.Close()})),
      }, '\uf404'),
      ...viewTabs(pages, loaders, progress, selected, sidetabs.large, address).reverse(),
      html.div({
        style: styleButton.default,
        onClick: address.send(WebView.Action({action: WebView.Open()})),
      }, '\uf489'),
      html.div({style: styleSpacer.default}),
      html.div({
        style: Style({display:'flex', justifyContent: 'center'}, !sidetabs.large && {flexDirection: 'column'})
      }, [
        html.div({
          style: styleButton.default,
          onClick: address.pass(ToggleSidetabsSize),
        }, sidetabs.large ? '\uf397' : '\uf396'),
        html.div({
          style: styleButton.default,
          onClick: address.pass(ToggleDevtoolsHUD),
        }, '\uf2AD'),
        html.div({
          style: styleButton.default,
          onClick: address.pass(ToggleSidetabs),
        }, '\uf404'),
      ]),
    ]);

  exports.view = view;

});
