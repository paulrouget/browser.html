/* this source code form is subject to the terms of the mozilla public
 * license, v. 2.0. if a copy of the mpl was not distributed with this
 * file, you can obtain one at http://mozilla.org/mpl/2.0/. */

define((require, exports, module) => {

  'use strict';

  const {getOrigin} = require('common/url-helper');

  /*
   * webView.icons:
   * {
   *  'http://foo.com/logo.png': {
   *    href: 'http://foo.com/logo.png',
   *    sizes: '16x16 32x32'
   *  },
   *  'http://bar.com/logo.png': {
   *    href: 'http://bar.com/logo.png',
   *    sizes: '16x16 32x32'
   *  }
   * }
   */
  const getBestFavicon = ({idealSize, webView}) => {

    const icons = webView.icons;

    if (icons) {

      const allSizes = new Map();
      const undefinedSizes = new Set();

      for (let k in icons) {
        if (!icons[k].sizes) {
          undefinedSizes.add(icons[k]);
        } else {
          icons[k].sizes.split(' ')
            .map(s => parseInt(s, 10))
            .forEach(s => allSizes.set(s, icons[k]));
        }
      }

      const bestFit = [...allSizes].reduce((prev, curr) => {
        if (!prev) {
          return curr;
        }
        if (Math.abs(prev[0] - idealSize) > Math.abs(curr[0] - idealSize)) {
          return curr;
        } else {
          return prev;
        }
      }, undefined);

      const bestFitForUndefined = [...undefinedSizes].reduce((prev, curr) => {
        if (!prev) {
          return curr;
        }
        if (curr.rel == 'shortcut icon') {
          return curr;
        }
        return prev;
      }, undefined);

      if (bestFit) {
        const size = bestFit[0];
        const href = bestFit[1].href;
        return `${href}#-moz-resolution=${size},${size}`;
      } else {
        if (bestFitForUndefined) {
          const href = bestFitForUndefined.href;
          return `${href}#-moz-resolution=${idealSize},${idealSize}`;
        }
      }
    }

    if (webView.uri) {
      const fallback = getOrigin(webView.uri) + '/favicon.ico';
      return `${fallback}#-moz-resolution=${idealSize},${idealSize}`;
    }

    return null;

  };

  exports.getBestFavicon = getBestFavicon;
});
