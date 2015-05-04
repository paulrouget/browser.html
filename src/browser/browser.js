/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define((require, exports, module) => {

  'use strict';

  const Component = require('omniscient');
  const {DOM} = require('react');
  const {compose} = require('lang/functional');
  const {Editable} = require('common/editable');
  const {KeyBindings} = require('common/keyboard');
  const ClassSet = require('common/class-set');
  const {mix} = require('common/style');
  const os = require('common/os');
  const {WindowBar} = require('./window-bar');
  const {LocationBar} = require('./location-bar');
  const {Suggestions} = require('./suggestion-box');
  const {Previews} = require('./preview-box');
  const {WebViewBox, WebView} = require('./web-view');
  const {readInputURL, deactivate, writeSession, resetSession, resetSelected} = require('./actions');
  const {indexOfSelected, indexOfActive, isActive, active, selected,
         selectNext, selectPrevious, select, activate,
         remove, insertAfter,
         isntPinned, isPinned} = require('./deck/actions');
  const {readTheme} = require('./theme');
  const {Main} = require('./main');
  const {Updates} = require('./update-banner');

  const editWith = edit => {
    if (typeof (edit) !== 'function') {
      throw TypeError('Must be a function')
    }
    return submit => submit(edit);
  }

  const onNavigation = KeyBindings({
    'accel l': editWith(LocationBar.enter),
    'accel t': editWith(Editable.focus)
  });

  const onViewerBinding = (() => {
    const modifier = os.platform() == 'linux' ? 'alt' : 'accel';
    return KeyBindings({
      'accel =': editWith(WebView.zoomIn),
      'accel -': editWith(WebView.zoomOut),
      'accel 0': editWith(WebView.zoomReset),
      [`${modifier} left`]: editWith(WebView.goBack),
      [`${modifier} right`]: editWith(WebView.goForward),
      'escape': editWith(WebView.stop),
      'accel r': editWith(WebView.reload),
      'F5': editWith(WebView.reload),
    });
  })();

  const loadURI = (uri, viewer) => viewers => {
    const target = viewer || active(viewers);
    return viewers.mergeIn([viewers.indexOf(target)],
                           {uri, isFocused: true});
  }

  const openTab = uri => items =>
    insertAfter(items,
                 WebView.open({uri,
                               isSelected: true,
                               isFocused: true,
                               isActive: true}),
                 isActive);

  const openTabBg = uri => items =>
    insertAfter(items, WebView.open({uri}), isActive);

  const clearActiveInput = viewers =>
    viewers.setIn([indexOfActive(viewers), 'userInput'], '');

  const navigateTo = location => viewers => {
    const uri = readInputURL(location);
    // const navigate = !isPinned(active(viewers)) ? loadURI(uri) :
    //               compose(openTab(uri), clearActiveInput);
    const navigate = loadURI(uri);

    return navigate(viewers);
  };

  // If closing viewer, replace it with a fresh one & select it.
  // This avoids code branching down the pipe that otherwise will
  // need to deal with 0 viewer & no active viewer case.
  // FIXME: I don't understand this comment ^ We still need to make
  // sure we don't delete the latest viewer.
  const close = p => items =>
    (!isPinned(items.find(p)) && items.size > 1) ? remove(items, p) : items;

  const closeTab = id =>
    close(x => x.get('id') == id);


  const switchTab = (items, to) =>
    to ? activate(select(items, tab => tab === to)) : items;

  switchTab.toIndex = index => items => switchTab(items, items.get(index));
  switchTab.toLast = items => switchTab(items, items.last());


  const onTabSwitch = (() => {
    const modifier = os.platform() == 'darwin' ? 'meta' : 'alt';
    return KeyBindings({
      [`${modifier} 1`]: editWith(switchTab.toIndex(1)),
      [`${modifier} 2`]: editWith(switchTab.toIndex(2)),
      [`${modifier} 3`]: editWith(switchTab.toIndex(3)),
      [`${modifier} 4`]: editWith(switchTab.toIndex(4)),
      [`${modifier} 5`]: editWith(switchTab.toIndex(5)),
      [`${modifier} 6`]: editWith(switchTab.toIndex(6)),
      [`${modifier} 7`]: editWith(switchTab.toIndex(7)),
      [`${modifier} 8`]: editWith(switchTab.toIndex(8)),
      [`${modifier} 9`]: editWith(switchTab.toLast),
    });
  })();

  const onDeckBinding = KeyBindings({
    'accel t': editWith(openTab()),
    'accel w': editWith(close(isActive)),
    'control tab': editWith(selectNext),
    'control shift tab': editWith(selectPrevious),
    'meta shift ]': editWith(selectNext),
    'meta shift [': editWith(selectPrevious),
    'ctrl pagedown': editWith(selectNext),
    'ctrl pageup': editWith(selectPrevious),
  });

  const onDeckBindingRelease = KeyBindings({
    'control': editWith(activate),
    'meta': editWith(activate)
  });

  const onBrowserBinding = KeyBindings({
    'accel shift backspace': editWith(resetSession),
    'accel shift s': editWith(writeSession),
    'accel u': edit => edit(state =>
      state.updateIn('webViews', openTab(`data:application/json,${JSON.stringify(root, null, 2)}`)))
  });

  const In = (...path) => edit => state =>
    state.updateIn(path, edit);

  // CSS

  const styleMain = {
    height: '100vh',
    width: '100vw',
    color: 'black',
    overflowY: 'scroll',
    scrollSnapType: 'mandatory',
    scrollSnapDestination: '0 0',
    position: 'relative'
  };

  // Browser is a root component for our application that just delegates
  // to a core sub-components here.
  const Browser = Component('Browser', (state, {step: edit}) => {
    const webViews = state.get('webViews');

    const editWebViews = compose(edit, In('webViews'));
    const editSelectedWebView = compose(edit, In('webViews',
                                                indexOfSelected(webViews)));
    const editInput = compose(edit, In('input'));
    const editRfa = compose(edit, In('rfa'));
    const editSuggestions = compose(edit, In('suggestions'));
    const editUpdates = compose(edit, In('updates'));

    const selectedWebView = selected(webViews);
    const activeWebView = active(webViews);
    const input = state.get('input');
    const rfa = state.get('rfa');
    const suggestions = state.get('suggestions');
    const isDocumentFocused = state.get('isDocumentFocused');
    const updates = state.get('updates');

    const isLocationBarActive = input.get('isFocused');

    const theme = Browser.readTheme(activeWebView);

    return DOM.div({
      key: 'root',
    }, [Main({
      key: 'main',
      windowTitle: selectedWebView.title || selectedWebView.uri,
      scrollGrab: true,
      style: mix(styleMain, input.get('isFocused') ?  {overflowY: 'hidden'} : {}),
      className: 'moz-noscrollbars',
      onDocumentUnload: event => writeSession(state),
      onDocumentFocus: event => edit(state => state.set('isDocumentFocused', true)),
      onDocumentBlur: event => edit(state => state.set('isDocumentFocused', false)),
      onDocumentKeyDown: compose(onNavigation(editInput),
                                 onViewerBinding(editSelectedWebView),
                                 onDeckBinding(editWebViews),
                                 onTabSwitch(editWebViews),
                                 onBrowserBinding(edit)),
      onDocumentKeyUp: onDeckBindingRelease(editWebViews),
      onAppUpdateAvailable: event => editUpdates(Updates.setAppUpdateAvailable),
      onRuntimeUpdateAvailable: event => editUpdates(Updates.setRuntimeUpdateAvailable)
    }, [
      WindowBar({
        key: 'navigation',
        input,
        theme,
        rfa,
        suggestions,
        isDocumentFocused,
        webView: selectedWebView,
      }, {
        onNavigate: location => editWebViews(navigateTo(location)),
        editSelectedWebView,
        editRfa,
        editInput,
        editSuggestions
      }),
      Previews.render({
        key: 'preview-box',
        webViews
      }, {
        edit: editWebViews,
      }),
      Suggestions.render({
        key: 'awesomebar',
        isLocationBarActive,
        suggestions,
        theme
      }, {
        onOpen: uri => editWebViews(navigateTo(uri))
      }),
      WebViewBox.render('web-view-box', WebViewBox({
        items: webViews
      }), {
        onClose: id => editWebViews(closeTab(id)),
        onOpen: uri => editWebViews(openTab(uri)),
        onOpenBg: uri => editWebViews(openTabBg(uri)),
        edit: editWebViews
      })
    ]),
    Updates.render({key: 'updates-banner', updates})
    ]);
  })
  // Create a version of readTheme that will return from cache
  // on repeating calls with an equal cursor.
  Browser.readTheme = Component.cached(readTheme);

  // Exports:

  exports.Browser = Browser;

});
