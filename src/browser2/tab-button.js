/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define((require, exports, module) => {

  'use strict';

  const {html, render} = require('reflex')
  const {StyleSheet, Style} = require('common/style');
  const Sidetabs = require('browser2/sidetabs');

  // Style

  const style = StyleSheet.create({
    container: {
      fontSize: '14px',
      width: 60,        // the size of the window controls
      MozUserSelect: 'none',
      textAlign: 'right',
      padding: '0 10px 0 0',
    },
    selected: {
      fontFamily: 'monospace',
      fontSize: 10,
      verticalAlign: 'initial',
    },
    tabCount: {
      fontFamily: 'monospace',
      fontSize: 6,
      verticalAlign: 'initial',
    },
  });

  // view

  const view = (selected, tabCount, showSidetabs, theme, address) => {

    tabCount = tabCount || 1;
    selected = selected + 1;

    return html.div({
      key: 'TabButtonContainer',
      style: Style(style.container, {color: theme.shellText}),
      onClick: address.pass(Sidetabs.ToggleSidetabs),
    }, !showSidetabs && [
      html.span({style: style.selected}, selected),
      html.span({style: style.tabCount}, '|' + tabCount),
    ]);
  }
  exports.view = view;
});

