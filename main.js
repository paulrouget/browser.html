/**
 * React v0.13.3
 *
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define('react',[],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.React=e()}}(function(){return function e(t,n,r){function o(a,u){if(!n[a]){if(!t[a]){var s="function"==typeof require&&require;if(!u&&s)return s(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){"use strict";var r=e(19),o=e(32),i=e(34),a=e(33),u=e(38),s=e(39),l=e(55),c=(e(56),e(40)),p=e(51),d=e(54),f=e(64),h=e(68),m=e(73),v=e(76),g=e(79),y=e(82),C=e(27),E=e(115),b=e(142);d.inject();var _=l.createElement,x=l.createFactory,D=l.cloneElement,M=m.measure("React","render",h.render),N={Children:{map:o.map,forEach:o.forEach,count:o.count,only:b},Component:i,DOM:c,PropTypes:v,initializeTouchEvents:function(e){r.useTouchEvents=e},createClass:a.createClass,createElement:_,cloneElement:D,createFactory:x,createMixin:function(e){return e},constructAndRenderComponent:h.constructAndRenderComponent,constructAndRenderComponentByID:h.constructAndRenderComponentByID,findDOMNode:E,render:M,renderToString:y.renderToString,renderToStaticMarkup:y.renderToStaticMarkup,unmountComponentAtNode:h.unmountComponentAtNode,isValidElement:l.isValidElement,withContext:u.withContext,__spread:C};"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject&&__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({CurrentOwner:s,InstanceHandles:f,Mount:h,Reconciler:g,TextComponent:p});N.version="0.13.3",t.exports=N},{115:115,142:142,19:19,27:27,32:32,33:33,34:34,38:38,39:39,40:40,51:51,54:54,55:55,56:56,64:64,68:68,73:73,76:76,79:79,82:82}],2:[function(e,t,n){"use strict";var r=e(117),o={componentDidMount:function(){this.props.autoFocus&&r(this.getDOMNode())}};t.exports=o},{117:117}],3:[function(e,t,n){"use strict";function r(){var e=window.opera;return"object"==typeof e&&"function"==typeof e.version&&parseInt(e.version(),10)<=12}function o(e){return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}function i(e){switch(e){case T.topCompositionStart:return P.compositionStart;case T.topCompositionEnd:return P.compositionEnd;case T.topCompositionUpdate:return P.compositionUpdate}}function a(e,t){return e===T.topKeyDown&&t.keyCode===b}function u(e,t){switch(e){case T.topKeyUp:return-1!==E.indexOf(t.keyCode);case T.topKeyDown:return t.keyCode!==b;case T.topKeyPress:case T.topMouseDown:case T.topBlur:return!0;default:return!1}}function s(e){var t=e.detail;return"object"==typeof t&&"data"in t?t.data:null}function l(e,t,n,r){var o,l;if(_?o=i(e):w?u(e,r)&&(o=P.compositionEnd):a(e,r)&&(o=P.compositionStart),!o)return null;M&&(w||o!==P.compositionStart?o===P.compositionEnd&&w&&(l=w.getData()):w=v.getPooled(t));var c=g.getPooled(o,n,r);if(l)c.data=l;else{var p=s(r);null!==p&&(c.data=p)}return h.accumulateTwoPhaseDispatches(c),c}function c(e,t){switch(e){case T.topCompositionEnd:return s(t);case T.topKeyPress:var n=t.which;return n!==N?null:(R=!0,I);case T.topTextInput:var r=t.data;return r===I&&R?null:r;default:return null}}function p(e,t){if(w){if(e===T.topCompositionEnd||u(e,t)){var n=w.getData();return v.release(w),w=null,n}return null}switch(e){case T.topPaste:return null;case T.topKeyPress:return t.which&&!o(t)?String.fromCharCode(t.which):null;case T.topCompositionEnd:return M?null:t.data;default:return null}}function d(e,t,n,r){var o;if(o=D?c(e,r):p(e,r),!o)return null;var i=y.getPooled(P.beforeInput,n,r);return i.data=o,h.accumulateTwoPhaseDispatches(i),i}var f=e(15),h=e(20),m=e(21),v=e(22),g=e(91),y=e(95),C=e(139),E=[9,13,27,32],b=229,_=m.canUseDOM&&"CompositionEvent"in window,x=null;m.canUseDOM&&"documentMode"in document&&(x=document.documentMode);var D=m.canUseDOM&&"TextEvent"in window&&!x&&!r(),M=m.canUseDOM&&(!_||x&&x>8&&11>=x),N=32,I=String.fromCharCode(N),T=f.topLevelTypes,P={beforeInput:{phasedRegistrationNames:{bubbled:C({onBeforeInput:null}),captured:C({onBeforeInputCapture:null})},dependencies:[T.topCompositionEnd,T.topKeyPress,T.topTextInput,T.topPaste]},compositionEnd:{phasedRegistrationNames:{bubbled:C({onCompositionEnd:null}),captured:C({onCompositionEndCapture:null})},dependencies:[T.topBlur,T.topCompositionEnd,T.topKeyDown,T.topKeyPress,T.topKeyUp,T.topMouseDown]},compositionStart:{phasedRegistrationNames:{bubbled:C({onCompositionStart:null}),captured:C({onCompositionStartCapture:null})},dependencies:[T.topBlur,T.topCompositionStart,T.topKeyDown,T.topKeyPress,T.topKeyUp,T.topMouseDown]},compositionUpdate:{phasedRegistrationNames:{bubbled:C({onCompositionUpdate:null}),captured:C({onCompositionUpdateCapture:null})},dependencies:[T.topBlur,T.topCompositionUpdate,T.topKeyDown,T.topKeyPress,T.topKeyUp,T.topMouseDown]}},R=!1,w=null,O={eventTypes:P,extractEvents:function(e,t,n,r){return[l(e,t,n,r),d(e,t,n,r)]}};t.exports=O},{139:139,15:15,20:20,21:21,22:22,91:91,95:95}],4:[function(e,t,n){"use strict";function r(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}var o={boxFlex:!0,boxFlexGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0},i=["Webkit","ms","Moz","O"];Object.keys(o).forEach(function(e){i.forEach(function(t){o[r(t,e)]=o[e]})});var a={background:{backgroundImage:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundColor:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0}},u={isUnitlessNumber:o,shorthandPropertyExpansions:a};t.exports=u},{}],5:[function(e,t,n){"use strict";var r=e(4),o=e(21),i=(e(106),e(111)),a=e(131),u=e(141),s=(e(150),u(function(e){return a(e)})),l="cssFloat";o.canUseDOM&&void 0===document.documentElement.style.cssFloat&&(l="styleFloat");var c={createMarkupForStyles:function(e){var t="";for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];null!=r&&(t+=s(n)+":",t+=i(n,r)+";")}return t||null},setValueForStyles:function(e,t){var n=e.style;for(var o in t)if(t.hasOwnProperty(o)){var a=i(o,t[o]);if("float"===o&&(o=l),a)n[o]=a;else{var u=r.shorthandPropertyExpansions[o];if(u)for(var s in u)n[s]="";else n[o]=""}}}};t.exports=c},{106:106,111:111,131:131,141:141,150:150,21:21,4:4}],6:[function(e,t,n){"use strict";function r(){this._callbacks=null,this._contexts=null}var o=e(28),i=e(27),a=e(133);i(r.prototype,{enqueue:function(e,t){this._callbacks=this._callbacks||[],this._contexts=this._contexts||[],this._callbacks.push(e),this._contexts.push(t)},notifyAll:function(){var e=this._callbacks,t=this._contexts;if(e){a(e.length===t.length),this._callbacks=null,this._contexts=null;for(var n=0,r=e.length;r>n;n++)e[n].call(t[n]);e.length=0,t.length=0}},reset:function(){this._callbacks=null,this._contexts=null},destructor:function(){this.reset()}}),o.addPoolingTo(r),t.exports=r},{133:133,27:27,28:28}],7:[function(e,t,n){"use strict";function r(e){return"SELECT"===e.nodeName||"INPUT"===e.nodeName&&"file"===e.type}function o(e){var t=x.getPooled(T.change,R,e);E.accumulateTwoPhaseDispatches(t),_.batchedUpdates(i,t)}function i(e){C.enqueueEvents(e),C.processEventQueue()}function a(e,t){P=e,R=t,P.attachEvent("onchange",o)}function u(){P&&(P.detachEvent("onchange",o),P=null,R=null)}function s(e,t,n){return e===I.topChange?n:void 0}function l(e,t,n){e===I.topFocus?(u(),a(t,n)):e===I.topBlur&&u()}function c(e,t){P=e,R=t,w=e.value,O=Object.getOwnPropertyDescriptor(e.constructor.prototype,"value"),Object.defineProperty(P,"value",k),P.attachEvent("onpropertychange",d)}function p(){P&&(delete P.value,P.detachEvent("onpropertychange",d),P=null,R=null,w=null,O=null)}function d(e){if("value"===e.propertyName){var t=e.srcElement.value;t!==w&&(w=t,o(e))}}function f(e,t,n){return e===I.topInput?n:void 0}function h(e,t,n){e===I.topFocus?(p(),c(t,n)):e===I.topBlur&&p()}function m(e,t,n){return e!==I.topSelectionChange&&e!==I.topKeyUp&&e!==I.topKeyDown||!P||P.value===w?void 0:(w=P.value,R)}function v(e){return"INPUT"===e.nodeName&&("checkbox"===e.type||"radio"===e.type)}function g(e,t,n){return e===I.topClick?n:void 0}var y=e(15),C=e(17),E=e(20),b=e(21),_=e(85),x=e(93),D=e(134),M=e(136),N=e(139),I=y.topLevelTypes,T={change:{phasedRegistrationNames:{bubbled:N({onChange:null}),captured:N({onChangeCapture:null})},dependencies:[I.topBlur,I.topChange,I.topClick,I.topFocus,I.topInput,I.topKeyDown,I.topKeyUp,I.topSelectionChange]}},P=null,R=null,w=null,O=null,S=!1;b.canUseDOM&&(S=D("change")&&(!("documentMode"in document)||document.documentMode>8));var A=!1;b.canUseDOM&&(A=D("input")&&(!("documentMode"in document)||document.documentMode>9));var k={get:function(){return O.get.call(this)},set:function(e){w=""+e,O.set.call(this,e)}},L={eventTypes:T,extractEvents:function(e,t,n,o){var i,a;if(r(t)?S?i=s:a=l:M(t)?A?i=f:(i=m,a=h):v(t)&&(i=g),i){var u=i(e,t,n);if(u){var c=x.getPooled(T.change,u,o);return E.accumulateTwoPhaseDispatches(c),c}}a&&a(e,t,n)}};t.exports=L},{134:134,136:136,139:139,15:15,17:17,20:20,21:21,85:85,93:93}],8:[function(e,t,n){"use strict";var r=0,o={createReactRootIndex:function(){return r++}};t.exports=o},{}],9:[function(e,t,n){"use strict";function r(e,t,n){e.insertBefore(t,e.childNodes[n]||null)}var o=e(12),i=e(70),a=e(145),u=e(133),s={dangerouslyReplaceNodeWithMarkup:o.dangerouslyReplaceNodeWithMarkup,updateTextContent:a,processUpdates:function(e,t){for(var n,s=null,l=null,c=0;c<e.length;c++)if(n=e[c],n.type===i.MOVE_EXISTING||n.type===i.REMOVE_NODE){var p=n.fromIndex,d=n.parentNode.childNodes[p],f=n.parentID;u(d),s=s||{},s[f]=s[f]||[],s[f][p]=d,l=l||[],l.push(d)}var h=o.dangerouslyRenderMarkup(t);if(l)for(var m=0;m<l.length;m++)l[m].parentNode.removeChild(l[m]);for(var v=0;v<e.length;v++)switch(n=e[v],n.type){case i.INSERT_MARKUP:r(n.parentNode,h[n.markupIndex],n.toIndex);break;case i.MOVE_EXISTING:r(n.parentNode,s[n.parentID][n.fromIndex],n.toIndex);break;case i.TEXT_CONTENT:a(n.parentNode,n.textContent);break;case i.REMOVE_NODE:}}};t.exports=s},{12:12,133:133,145:145,70:70}],10:[function(e,t,n){"use strict";function r(e,t){return(e&t)===t}var o=e(133),i={MUST_USE_ATTRIBUTE:1,MUST_USE_PROPERTY:2,HAS_SIDE_EFFECTS:4,HAS_BOOLEAN_VALUE:8,HAS_NUMERIC_VALUE:16,HAS_POSITIVE_NUMERIC_VALUE:48,HAS_OVERLOADED_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(e){var t=e.Properties||{},n=e.DOMAttributeNames||{},a=e.DOMPropertyNames||{},s=e.DOMMutationMethods||{};e.isCustomAttribute&&u._isCustomAttributeFunctions.push(e.isCustomAttribute);for(var l in t){o(!u.isStandardName.hasOwnProperty(l)),u.isStandardName[l]=!0;var c=l.toLowerCase();if(u.getPossibleStandardName[c]=l,n.hasOwnProperty(l)){var p=n[l];u.getPossibleStandardName[p]=l,u.getAttributeName[l]=p}else u.getAttributeName[l]=c;u.getPropertyName[l]=a.hasOwnProperty(l)?a[l]:l,s.hasOwnProperty(l)?u.getMutationMethod[l]=s[l]:u.getMutationMethod[l]=null;var d=t[l];u.mustUseAttribute[l]=r(d,i.MUST_USE_ATTRIBUTE),u.mustUseProperty[l]=r(d,i.MUST_USE_PROPERTY),u.hasSideEffects[l]=r(d,i.HAS_SIDE_EFFECTS),u.hasBooleanValue[l]=r(d,i.HAS_BOOLEAN_VALUE),u.hasNumericValue[l]=r(d,i.HAS_NUMERIC_VALUE),u.hasPositiveNumericValue[l]=r(d,i.HAS_POSITIVE_NUMERIC_VALUE),u.hasOverloadedBooleanValue[l]=r(d,i.HAS_OVERLOADED_BOOLEAN_VALUE),o(!u.mustUseAttribute[l]||!u.mustUseProperty[l]),o(u.mustUseProperty[l]||!u.hasSideEffects[l]),o(!!u.hasBooleanValue[l]+!!u.hasNumericValue[l]+!!u.hasOverloadedBooleanValue[l]<=1)}}},a={},u={ID_ATTRIBUTE_NAME:"data-reactid",isStandardName:{},getPossibleStandardName:{},getAttributeName:{},getPropertyName:{},getMutationMethod:{},mustUseAttribute:{},mustUseProperty:{},hasSideEffects:{},hasBooleanValue:{},hasNumericValue:{},hasPositiveNumericValue:{},hasOverloadedBooleanValue:{},_isCustomAttributeFunctions:[],isCustomAttribute:function(e){for(var t=0;t<u._isCustomAttributeFunctions.length;t++){var n=u._isCustomAttributeFunctions[t];if(n(e))return!0}return!1},getDefaultValueForProperty:function(e,t){var n,r=a[e];return r||(a[e]=r={}),t in r||(n=document.createElement(e),r[t]=n[t]),r[t]},injection:i};t.exports=u},{133:133}],11:[function(e,t,n){"use strict";function r(e,t){return null==t||o.hasBooleanValue[e]&&!t||o.hasNumericValue[e]&&isNaN(t)||o.hasPositiveNumericValue[e]&&1>t||o.hasOverloadedBooleanValue[e]&&t===!1}var o=e(10),i=e(143),a=(e(150),{createMarkupForID:function(e){return o.ID_ATTRIBUTE_NAME+"="+i(e)},createMarkupForProperty:function(e,t){if(o.isStandardName.hasOwnProperty(e)&&o.isStandardName[e]){if(r(e,t))return"";var n=o.getAttributeName[e];return o.hasBooleanValue[e]||o.hasOverloadedBooleanValue[e]&&t===!0?n:n+"="+i(t)}return o.isCustomAttribute(e)?null==t?"":e+"="+i(t):null},setValueForProperty:function(e,t,n){if(o.isStandardName.hasOwnProperty(t)&&o.isStandardName[t]){var i=o.getMutationMethod[t];if(i)i(e,n);else if(r(t,n))this.deleteValueForProperty(e,t);else if(o.mustUseAttribute[t])e.setAttribute(o.getAttributeName[t],""+n);else{var a=o.getPropertyName[t];o.hasSideEffects[t]&&""+e[a]==""+n||(e[a]=n)}}else o.isCustomAttribute(t)&&(null==n?e.removeAttribute(t):e.setAttribute(t,""+n))},deleteValueForProperty:function(e,t){if(o.isStandardName.hasOwnProperty(t)&&o.isStandardName[t]){var n=o.getMutationMethod[t];if(n)n(e,void 0);else if(o.mustUseAttribute[t])e.removeAttribute(o.getAttributeName[t]);else{var r=o.getPropertyName[t],i=o.getDefaultValueForProperty(e.nodeName,r);o.hasSideEffects[t]&&""+e[r]===i||(e[r]=i)}}else o.isCustomAttribute(t)&&e.removeAttribute(t)}});t.exports=a},{10:10,143:143,150:150}],12:[function(e,t,n){"use strict";function r(e){return e.substring(1,e.indexOf(" "))}var o=e(21),i=e(110),a=e(112),u=e(125),s=e(133),l=/^(<[^ \/>]+)/,c="data-danger-index",p={dangerouslyRenderMarkup:function(e){s(o.canUseDOM);for(var t,n={},p=0;p<e.length;p++)s(e[p]),t=r(e[p]),t=u(t)?t:"*",n[t]=n[t]||[],n[t][p]=e[p];var d=[],f=0;for(t in n)if(n.hasOwnProperty(t)){var h,m=n[t];for(h in m)if(m.hasOwnProperty(h)){var v=m[h];m[h]=v.replace(l,"$1 "+c+'="'+h+'" ')}for(var g=i(m.join(""),a),y=0;y<g.length;++y){var C=g[y];C.hasAttribute&&C.hasAttribute(c)&&(h=+C.getAttribute(c),C.removeAttribute(c),s(!d.hasOwnProperty(h)),d[h]=C,f+=1)}}return s(f===d.length),s(d.length===e.length),d},dangerouslyReplaceNodeWithMarkup:function(e,t){s(o.canUseDOM),s(t),s("html"!==e.tagName.toLowerCase());var n=i(t,a)[0];e.parentNode.replaceChild(n,e)}};t.exports=p},{110:110,112:112,125:125,133:133,21:21}],13:[function(e,t,n){"use strict";var r=e(139),o=[r({ResponderEventPlugin:null}),r({SimpleEventPlugin:null}),r({TapEventPlugin:null}),r({EnterLeaveEventPlugin:null}),r({ChangeEventPlugin:null}),r({SelectEventPlugin:null}),r({BeforeInputEventPlugin:null}),r({AnalyticsEventPlugin:null}),r({MobileSafariClickEventPlugin:null})];t.exports=o},{139:139}],14:[function(e,t,n){"use strict";var r=e(15),o=e(20),i=e(97),a=e(68),u=e(139),s=r.topLevelTypes,l=a.getFirstReactDOM,c={mouseEnter:{registrationName:u({onMouseEnter:null}),dependencies:[s.topMouseOut,s.topMouseOver]},mouseLeave:{registrationName:u({onMouseLeave:null}),dependencies:[s.topMouseOut,s.topMouseOver]}},p=[null,null],d={eventTypes:c,extractEvents:function(e,t,n,r){if(e===s.topMouseOver&&(r.relatedTarget||r.fromElement))return null;if(e!==s.topMouseOut&&e!==s.topMouseOver)return null;var u;if(t.window===t)u=t;else{var d=t.ownerDocument;u=d?d.defaultView||d.parentWindow:window}var f,h;if(e===s.topMouseOut?(f=t,h=l(r.relatedTarget||r.toElement)||u):(f=u,h=t),f===h)return null;var m=f?a.getID(f):"",v=h?a.getID(h):"",g=i.getPooled(c.mouseLeave,m,r);g.type="mouseleave",g.target=f,g.relatedTarget=h;var y=i.getPooled(c.mouseEnter,v,r);return y.type="mouseenter",y.target=h,y.relatedTarget=f,o.accumulateEnterLeaveDispatches(g,y,m,v),p[0]=g,p[1]=y,p}};t.exports=d},{139:139,15:15,20:20,68:68,97:97}],15:[function(e,t,n){"use strict";var r=e(138),o=r({bubbled:null,captured:null}),i=r({topBlur:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topError:null,topFocus:null,topInput:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topReset:null,topScroll:null,topSelectionChange:null,topSubmit:null,topTextInput:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topWheel:null}),a={topLevelTypes:i,PropagationPhases:o};t.exports=a},{138:138}],16:[function(e,t,n){var r=e(112),o={listen:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!1),{remove:function(){e.removeEventListener(t,n,!1)}}):e.attachEvent?(e.attachEvent("on"+t,n),{remove:function(){e.detachEvent("on"+t,n)}}):void 0},capture:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!0),{remove:function(){e.removeEventListener(t,n,!0)}}):{remove:r}},registerDefault:function(){}};t.exports=o},{112:112}],17:[function(e,t,n){"use strict";var r=e(18),o=e(19),i=e(103),a=e(118),u=e(133),s={},l=null,c=function(e){if(e){var t=o.executeDispatch,n=r.getPluginModuleForEvent(e);n&&n.executeDispatch&&(t=n.executeDispatch),o.executeDispatchesInOrder(e,t),e.isPersistent()||e.constructor.release(e)}},p=null,d={injection:{injectMount:o.injection.injectMount,injectInstanceHandle:function(e){p=e},getInstanceHandle:function(){return p},injectEventPluginOrder:r.injectEventPluginOrder,injectEventPluginsByName:r.injectEventPluginsByName},eventNameDispatchConfigs:r.eventNameDispatchConfigs,registrationNameModules:r.registrationNameModules,putListener:function(e,t,n){u(!n||"function"==typeof n);var r=s[t]||(s[t]={});r[e]=n},getListener:function(e,t){var n=s[t];return n&&n[e]},deleteListener:function(e,t){var n=s[t];n&&delete n[e]},deleteAllListeners:function(e){for(var t in s)delete s[t][e]},extractEvents:function(e,t,n,o){for(var a,u=r.plugins,s=0,l=u.length;l>s;s++){var c=u[s];if(c){var p=c.extractEvents(e,t,n,o);p&&(a=i(a,p))}}return a},enqueueEvents:function(e){e&&(l=i(l,e))},processEventQueue:function(){var e=l;l=null,a(e,c),u(!l)},__purge:function(){s={}},__getListenerBank:function(){return s}};t.exports=d},{103:103,118:118,133:133,18:18,19:19}],18:[function(e,t,n){"use strict";function r(){if(u)for(var e in s){var t=s[e],n=u.indexOf(e);if(a(n>-1),!l.plugins[n]){a(t.extractEvents),l.plugins[n]=t;var r=t.eventTypes;for(var i in r)a(o(r[i],t,i))}}}function o(e,t,n){a(!l.eventNameDispatchConfigs.hasOwnProperty(n)),l.eventNameDispatchConfigs[n]=e;var r=e.phasedRegistrationNames;if(r){for(var o in r)if(r.hasOwnProperty(o)){var u=r[o];i(u,t,n)}return!0}return e.registrationName?(i(e.registrationName,t,n),!0):!1}function i(e,t,n){a(!l.registrationNameModules[e]),l.registrationNameModules[e]=t,l.registrationNameDependencies[e]=t.eventTypes[n].dependencies}var a=e(133),u=null,s={},l={plugins:[],eventNameDispatchConfigs:{},registrationNameModules:{},registrationNameDependencies:{},injectEventPluginOrder:function(e){a(!u),u=Array.prototype.slice.call(e),r()},injectEventPluginsByName:function(e){var t=!1;for(var n in e)if(e.hasOwnProperty(n)){var o=e[n];s.hasOwnProperty(n)&&s[n]===o||(a(!s[n]),s[n]=o,t=!0)}t&&r()},getPluginModuleForEvent:function(e){var t=e.dispatchConfig;if(t.registrationName)return l.registrationNameModules[t.registrationName]||null;for(var n in t.phasedRegistrationNames)if(t.phasedRegistrationNames.hasOwnProperty(n)){var r=l.registrationNameModules[t.phasedRegistrationNames[n]];if(r)return r}return null},_resetEventPlugins:function(){u=null;for(var e in s)s.hasOwnProperty(e)&&delete s[e];l.plugins.length=0;var t=l.eventNameDispatchConfigs;for(var n in t)t.hasOwnProperty(n)&&delete t[n];var r=l.registrationNameModules;for(var o in r)r.hasOwnProperty(o)&&delete r[o]}};t.exports=l},{133:133}],19:[function(e,t,n){"use strict";function r(e){return e===v.topMouseUp||e===v.topTouchEnd||e===v.topTouchCancel}function o(e){return e===v.topMouseMove||e===v.topTouchMove}function i(e){return e===v.topMouseDown||e===v.topTouchStart}function a(e,t){var n=e._dispatchListeners,r=e._dispatchIDs;if(Array.isArray(n))for(var o=0;o<n.length&&!e.isPropagationStopped();o++)t(e,n[o],r[o]);else n&&t(e,n,r)}function u(e,t,n){e.currentTarget=m.Mount.getNode(n);var r=t(e,n);return e.currentTarget=null,r}function s(e,t){a(e,t),e._dispatchListeners=null,e._dispatchIDs=null}function l(e){var t=e._dispatchListeners,n=e._dispatchIDs;if(Array.isArray(t)){for(var r=0;r<t.length&&!e.isPropagationStopped();r++)if(t[r](e,n[r]))return n[r]}else if(t&&t(e,n))return n;return null}function c(e){var t=l(e);return e._dispatchIDs=null,e._dispatchListeners=null,t}function p(e){var t=e._dispatchListeners,n=e._dispatchIDs;h(!Array.isArray(t));var r=t?t(e,n):null;return e._dispatchListeners=null,e._dispatchIDs=null,r}function d(e){return!!e._dispatchListeners}var f=e(15),h=e(133),m={Mount:null,injectMount:function(e){m.Mount=e}},v=f.topLevelTypes,g={isEndish:r,isMoveish:o,isStartish:i,executeDirectDispatch:p,executeDispatch:u,executeDispatchesInOrder:s,executeDispatchesInOrderStopAtTrue:c,hasDispatches:d,injection:m,useTouchEvents:!1};t.exports=g},{133:133,15:15}],20:[function(e,t,n){"use strict";function r(e,t,n){var r=t.dispatchConfig.phasedRegistrationNames[n];return v(e,r)}function o(e,t,n){var o=t?m.bubbled:m.captured,i=r(e,n,o);i&&(n._dispatchListeners=f(n._dispatchListeners,i),n._dispatchIDs=f(n._dispatchIDs,e))}function i(e){e&&e.dispatchConfig.phasedRegistrationNames&&d.injection.getInstanceHandle().traverseTwoPhase(e.dispatchMarker,o,e)}function a(e,t,n){if(n&&n.dispatchConfig.registrationName){var r=n.dispatchConfig.registrationName,o=v(e,r);o&&(n._dispatchListeners=f(n._dispatchListeners,o),n._dispatchIDs=f(n._dispatchIDs,e))}}function u(e){e&&e.dispatchConfig.registrationName&&a(e.dispatchMarker,null,e)}function s(e){h(e,i)}function l(e,t,n,r){d.injection.getInstanceHandle().traverseEnterLeave(n,r,a,e,t)}function c(e){h(e,u)}var p=e(15),d=e(17),f=e(103),h=e(118),m=p.PropagationPhases,v=d.getListener,g={accumulateTwoPhaseDispatches:s,accumulateDirectDispatches:c,accumulateEnterLeaveDispatches:l};t.exports=g},{103:103,118:118,15:15,17:17}],21:[function(e,t,n){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r};t.exports=o},{}],22:[function(e,t,n){"use strict";function r(e){this._root=e,this._startText=this.getText(),this._fallbackText=null}var o=e(28),i=e(27),a=e(128);i(r.prototype,{getText:function(){return"value"in this._root?this._root.value:this._root[a()]},getData:function(){if(this._fallbackText)return this._fallbackText;var e,t,n=this._startText,r=n.length,o=this.getText(),i=o.length;for(e=0;r>e&&n[e]===o[e];e++);var a=r-e;for(t=1;a>=t&&n[r-t]===o[i-t];t++);var u=t>1?1-t:void 0;return this._fallbackText=o.slice(e,u),this._fallbackText}}),o.addPoolingTo(r),t.exports=r},{128:128,27:27,28:28}],23:[function(e,t,n){"use strict";var r,o=e(10),i=e(21),a=o.injection.MUST_USE_ATTRIBUTE,u=o.injection.MUST_USE_PROPERTY,s=o.injection.HAS_BOOLEAN_VALUE,l=o.injection.HAS_SIDE_EFFECTS,c=o.injection.HAS_NUMERIC_VALUE,p=o.injection.HAS_POSITIVE_NUMERIC_VALUE,d=o.injection.HAS_OVERLOADED_BOOLEAN_VALUE;if(i.canUseDOM){var f=document.implementation;r=f&&f.hasFeature&&f.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")}var h={isCustomAttribute:RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),Properties:{accept:null,acceptCharset:null,accessKey:null,action:null,allowFullScreen:a|s,allowTransparency:a,alt:null,async:s,autoComplete:null,autoPlay:s,cellPadding:null,cellSpacing:null,charSet:a,checked:u|s,classID:a,className:r?a:u,cols:a|p,colSpan:null,content:null,contentEditable:null,contextMenu:a,controls:u|s,coords:null,crossOrigin:null,data:null,dateTime:a,defer:s,dir:null,disabled:a|s,download:d,draggable:null,encType:null,form:a,formAction:a,formEncType:a,formMethod:a,formNoValidate:s,formTarget:a,frameBorder:a,headers:null,height:a,hidden:a|s,high:null,href:null,hrefLang:null,htmlFor:null,httpEquiv:null,icon:null,id:u,label:null,lang:null,list:a,loop:u|s,low:null,manifest:a,marginHeight:null,marginWidth:null,max:null,maxLength:a,media:a,mediaGroup:null,method:null,min:null,multiple:u|s,muted:u|s,name:null,noValidate:s,open:s,optimum:null,pattern:null,placeholder:null,poster:null,preload:null,radioGroup:null,readOnly:u|s,rel:null,required:s,role:a,rows:a|p,rowSpan:null,sandbox:null,scope:null,scoped:s,scrolling:null,seamless:a|s,selected:u|s,shape:null,size:a|p,sizes:a,span:p,spellCheck:null,src:null,srcDoc:u,srcSet:a,start:c,step:null,style:null,tabIndex:null,target:null,title:null,type:null,useMap:null,value:u|l,width:a,wmode:a,autoCapitalize:null,autoCorrect:null,itemProp:a,itemScope:a|s,itemType:a,itemID:a,itemRef:a,property:null,unselectable:a},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMPropertyNames:{autoCapitalize:"autocapitalize",autoComplete:"autocomplete",autoCorrect:"autocorrect",autoFocus:"autofocus",autoPlay:"autoplay",encType:"encoding",hrefLang:"hreflang",radioGroup:"radiogroup",spellCheck:"spellcheck",srcDoc:"srcdoc",srcSet:"srcset"}};t.exports=h},{10:10,21:21}],24:[function(e,t,n){"use strict";function r(e){l(null==e.props.checkedLink||null==e.props.valueLink)}function o(e){r(e),l(null==e.props.value&&null==e.props.onChange)}function i(e){r(e),l(null==e.props.checked&&null==e.props.onChange)}function a(e){this.props.valueLink.requestChange(e.target.value)}function u(e){this.props.checkedLink.requestChange(e.target.checked)}var s=e(76),l=e(133),c={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},p={Mixin:{propTypes:{value:function(e,t,n){return!e[t]||c[e.type]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")},checked:function(e,t,n){return!e[t]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")},onChange:s.func}},getValue:function(e){return e.props.valueLink?(o(e),e.props.valueLink.value):e.props.value},getChecked:function(e){return e.props.checkedLink?(i(e),e.props.checkedLink.value):e.props.checked},getOnChange:function(e){return e.props.valueLink?(o(e),a):e.props.checkedLink?(i(e),u):e.props.onChange}};t.exports=p},{133:133,76:76}],25:[function(e,t,n){"use strict";function r(e){e.remove()}var o=e(30),i=e(103),a=e(118),u=e(133),s={trapBubbledEvent:function(e,t){u(this.isMounted());var n=this.getDOMNode();u(n);var r=o.trapBubbledEvent(e,t,n);this._localEventListeners=i(this._localEventListeners,r)},componentWillUnmount:function(){this._localEventListeners&&a(this._localEventListeners,r)}};t.exports=s},{103:103,118:118,133:133,30:30}],26:[function(e,t,n){"use strict";var r=e(15),o=e(112),i=r.topLevelTypes,a={eventTypes:null,extractEvents:function(e,t,n,r){if(e===i.topTouchStart){var a=r.target;a&&!a.onclick&&(a.onclick=o)}}};t.exports=a},{112:112,15:15}],27:[function(e,t,n){"use strict";function r(e,t){if(null==e)throw new TypeError("Object.assign target cannot be null or undefined");for(var n=Object(e),r=Object.prototype.hasOwnProperty,o=1;o<arguments.length;o++){var i=arguments[o];if(null!=i){var a=Object(i);for(var u in a)r.call(a,u)&&(n[u]=a[u])}}return n}t.exports=r},{}],28:[function(e,t,n){"use strict";var r=e(133),o=function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)},i=function(e,t){var n=this;if(n.instancePool.length){var r=n.instancePool.pop();return n.call(r,e,t),r}return new n(e,t)},a=function(e,t,n){var r=this;if(r.instancePool.length){var o=r.instancePool.pop();return r.call(o,e,t,n),o}return new r(e,t,n)},u=function(e,t,n,r,o){var i=this;if(i.instancePool.length){var a=i.instancePool.pop();return i.call(a,e,t,n,r,o),a}return new i(e,t,n,r,o)},s=function(e){var t=this;r(e instanceof t),e.destructor&&e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},l=10,c=o,p=function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||c,n.poolSize||(n.poolSize=l),n.release=s,n},d={addPoolingTo:p,oneArgumentPooler:o,twoArgumentPooler:i,threeArgumentPooler:a,fiveArgumentPooler:u};t.exports=d},{133:133}],29:[function(e,t,n){"use strict";var r=e(115),o={getDOMNode:function(){return r(this)}};t.exports=o},{115:115}],30:[function(e,t,n){"use strict";function r(e){return Object.prototype.hasOwnProperty.call(e,m)||(e[m]=f++,p[e[m]]={}),p[e[m]]}var o=e(15),i=e(17),a=e(18),u=e(59),s=e(102),l=e(27),c=e(134),p={},d=!1,f=0,h={topBlur:"blur",topChange:"change",topClick:"click",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topScroll:"scroll",topSelectionChange:"selectionchange",topTextInput:"textInput",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topWheel:"wheel"},m="_reactListenersID"+String(Math.random()).slice(2),v=l({},u,{ReactEventListener:null,injection:{injectReactEventListener:function(e){e.setHandleTopLevel(v.handleTopLevel),v.ReactEventListener=e}},setEnabled:function(e){v.ReactEventListener&&v.ReactEventListener.setEnabled(e)},isEnabled:function(){return!(!v.ReactEventListener||!v.ReactEventListener.isEnabled())},listenTo:function(e,t){for(var n=t,i=r(n),u=a.registrationNameDependencies[e],s=o.topLevelTypes,l=0,p=u.length;p>l;l++){var d=u[l];i.hasOwnProperty(d)&&i[d]||(d===s.topWheel?c("wheel")?v.ReactEventListener.trapBubbledEvent(s.topWheel,"wheel",n):c("mousewheel")?v.ReactEventListener.trapBubbledEvent(s.topWheel,"mousewheel",n):v.ReactEventListener.trapBubbledEvent(s.topWheel,"DOMMouseScroll",n):d===s.topScroll?c("scroll",!0)?v.ReactEventListener.trapCapturedEvent(s.topScroll,"scroll",n):v.ReactEventListener.trapBubbledEvent(s.topScroll,"scroll",v.ReactEventListener.WINDOW_HANDLE):d===s.topFocus||d===s.topBlur?(c("focus",!0)?(v.ReactEventListener.trapCapturedEvent(s.topFocus,"focus",n),v.ReactEventListener.trapCapturedEvent(s.topBlur,"blur",n)):c("focusin")&&(v.ReactEventListener.trapBubbledEvent(s.topFocus,"focusin",n),v.ReactEventListener.trapBubbledEvent(s.topBlur,"focusout",n)),i[s.topBlur]=!0,i[s.topFocus]=!0):h.hasOwnProperty(d)&&v.ReactEventListener.trapBubbledEvent(d,h[d],n),i[d]=!0)}},trapBubbledEvent:function(e,t,n){
return v.ReactEventListener.trapBubbledEvent(e,t,n)},trapCapturedEvent:function(e,t,n){return v.ReactEventListener.trapCapturedEvent(e,t,n)},ensureScrollValueMonitoring:function(){if(!d){var e=s.refreshScrollValues;v.ReactEventListener.monitorScrollValue(e),d=!0}},eventNameDispatchConfigs:i.eventNameDispatchConfigs,registrationNameModules:i.registrationNameModules,putListener:i.putListener,getListener:i.getListener,deleteListener:i.deleteListener,deleteAllListeners:i.deleteAllListeners});t.exports=v},{102:102,134:134,15:15,17:17,18:18,27:27,59:59}],31:[function(e,t,n){"use strict";var r=e(79),o=e(116),i=e(132),a=e(147),u={instantiateChildren:function(e,t,n){var r=o(e);for(var a in r)if(r.hasOwnProperty(a)){var u=r[a],s=i(u,null);r[a]=s}return r},updateChildren:function(e,t,n,u){var s=o(t);if(!s&&!e)return null;var l;for(l in s)if(s.hasOwnProperty(l)){var c=e&&e[l],p=c&&c._currentElement,d=s[l];if(a(p,d))r.receiveComponent(c,d,n,u),s[l]=c;else{c&&r.unmountComponent(c,l);var f=i(d,null);s[l]=f}}for(l in e)!e.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||r.unmountComponent(e[l]);return s},unmountChildren:function(e){for(var t in e){var n=e[t];r.unmountComponent(n)}}};t.exports=u},{116:116,132:132,147:147,79:79}],32:[function(e,t,n){"use strict";function r(e,t){this.forEachFunction=e,this.forEachContext=t}function o(e,t,n,r){var o=e;o.forEachFunction.call(o.forEachContext,t,r)}function i(e,t,n){if(null==e)return e;var i=r.getPooled(t,n);f(e,o,i),r.release(i)}function a(e,t,n){this.mapResult=e,this.mapFunction=t,this.mapContext=n}function u(e,t,n,r){var o=e,i=o.mapResult,a=!i.hasOwnProperty(n);if(a){var u=o.mapFunction.call(o.mapContext,t,r);i[n]=u}}function s(e,t,n){if(null==e)return e;var r={},o=a.getPooled(r,t,n);return f(e,u,o),a.release(o),d.create(r)}function l(e,t,n,r){return null}function c(e,t){return f(e,l,null)}var p=e(28),d=e(61),f=e(149),h=(e(150),p.twoArgumentPooler),m=p.threeArgumentPooler;p.addPoolingTo(r,h),p.addPoolingTo(a,m);var v={forEach:i,map:s,count:c};t.exports=v},{149:149,150:150,28:28,61:61}],33:[function(e,t,n){"use strict";function r(e,t){var n=D.hasOwnProperty(t)?D[t]:null;N.hasOwnProperty(t)&&y(n===_.OVERRIDE_BASE),e.hasOwnProperty(t)&&y(n===_.DEFINE_MANY||n===_.DEFINE_MANY_MERGED)}function o(e,t){if(t){y("function"!=typeof t),y(!d.isValidElement(t));var n=e.prototype;t.hasOwnProperty(b)&&M.mixins(e,t.mixins);for(var o in t)if(t.hasOwnProperty(o)&&o!==b){var i=t[o];if(r(n,o),M.hasOwnProperty(o))M[o](e,i);else{var a=D.hasOwnProperty(o),l=n.hasOwnProperty(o),c=i&&i.__reactDontBind,p="function"==typeof i,f=p&&!a&&!l&&!c;if(f)n.__reactAutoBindMap||(n.__reactAutoBindMap={}),n.__reactAutoBindMap[o]=i,n[o]=i;else if(l){var h=D[o];y(a&&(h===_.DEFINE_MANY_MERGED||h===_.DEFINE_MANY)),h===_.DEFINE_MANY_MERGED?n[o]=u(n[o],i):h===_.DEFINE_MANY&&(n[o]=s(n[o],i))}else n[o]=i}}}}function i(e,t){if(t)for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){var o=n in M;y(!o);var i=n in e;y(!i),e[n]=r}}}function a(e,t){y(e&&t&&"object"==typeof e&&"object"==typeof t);for(var n in t)t.hasOwnProperty(n)&&(y(void 0===e[n]),e[n]=t[n]);return e}function u(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return a(o,n),a(o,r),o}}function s(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function l(e,t){var n=t.bind(e);return n}function c(e){for(var t in e.__reactAutoBindMap)if(e.__reactAutoBindMap.hasOwnProperty(t)){var n=e.__reactAutoBindMap[t];e[t]=l(e,f.guard(n,e.constructor.displayName+"."+t))}}var p=e(34),d=(e(39),e(55)),f=e(58),h=e(65),m=e(66),v=(e(75),e(74),e(84)),g=e(27),y=e(133),C=e(138),E=e(139),b=(e(150),E({mixins:null})),_=C({DEFINE_ONCE:null,DEFINE_MANY:null,OVERRIDE_BASE:null,DEFINE_MANY_MERGED:null}),x=[],D={mixins:_.DEFINE_MANY,statics:_.DEFINE_MANY,propTypes:_.DEFINE_MANY,contextTypes:_.DEFINE_MANY,childContextTypes:_.DEFINE_MANY,getDefaultProps:_.DEFINE_MANY_MERGED,getInitialState:_.DEFINE_MANY_MERGED,getChildContext:_.DEFINE_MANY_MERGED,render:_.DEFINE_ONCE,componentWillMount:_.DEFINE_MANY,componentDidMount:_.DEFINE_MANY,componentWillReceiveProps:_.DEFINE_MANY,shouldComponentUpdate:_.DEFINE_ONCE,componentWillUpdate:_.DEFINE_MANY,componentDidUpdate:_.DEFINE_MANY,componentWillUnmount:_.DEFINE_MANY,updateComponent:_.OVERRIDE_BASE},M={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)o(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=g({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=g({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=u(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=g({},e.propTypes,t)},statics:function(e,t){i(e,t)}},N={replaceState:function(e,t){v.enqueueReplaceState(this,e),t&&v.enqueueCallback(this,t)},isMounted:function(){var e=h.get(this);return e&&e!==m.currentlyMountingInstance},setProps:function(e,t){v.enqueueSetProps(this,e),t&&v.enqueueCallback(this,t)},replaceProps:function(e,t){v.enqueueReplaceProps(this,e),t&&v.enqueueCallback(this,t)}},I=function(){};g(I.prototype,p.prototype,N);var T={createClass:function(e){var t=function(e,t){this.__reactAutoBindMap&&c(this),this.props=e,this.context=t,this.state=null;var n=this.getInitialState?this.getInitialState():null;y("object"==typeof n&&!Array.isArray(n)),this.state=n};t.prototype=new I,t.prototype.constructor=t,x.forEach(o.bind(null,t)),o(t,e),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),y(t.prototype.render);for(var n in D)t.prototype[n]||(t.prototype[n]=null);return t.type=t,t},injection:{injectMixin:function(e){x.push(e)}}};t.exports=T},{133:133,138:138,139:139,150:150,27:27,34:34,39:39,55:55,58:58,65:65,66:66,74:74,75:75,84:84}],34:[function(e,t,n){"use strict";function r(e,t){this.props=e,this.context=t}{var o=e(84),i=e(133);e(150)}r.prototype.setState=function(e,t){i("object"==typeof e||"function"==typeof e||null==e),o.enqueueSetState(this,e),t&&o.enqueueCallback(this,t)},r.prototype.forceUpdate=function(e){o.enqueueForceUpdate(this),e&&o.enqueueCallback(this,e)};t.exports=r},{133:133,150:150,84:84}],35:[function(e,t,n){"use strict";var r=e(44),o=e(68),i={processChildrenUpdates:r.dangerouslyProcessChildrenUpdates,replaceNodeWithMarkupByID:r.dangerouslyReplaceNodeWithMarkupByID,unmountIDFromEnvironment:function(e){o.purgeID(e)}};t.exports=i},{44:44,68:68}],36:[function(e,t,n){"use strict";var r=e(133),o=!1,i={unmountIDFromEnvironment:null,replaceNodeWithMarkupByID:null,processChildrenUpdates:null,injection:{injectEnvironment:function(e){r(!o),i.unmountIDFromEnvironment=e.unmountIDFromEnvironment,i.replaceNodeWithMarkupByID=e.replaceNodeWithMarkupByID,i.processChildrenUpdates=e.processChildrenUpdates,o=!0}}};t.exports=i},{133:133}],37:[function(e,t,n){"use strict";function r(e){var t=e._currentElement._owner||null;if(t){var n=t.getName();if(n)return" Check the render method of `"+n+"`."}return""}var o=e(36),i=e(38),a=e(39),u=e(55),s=(e(56),e(65)),l=e(66),c=e(71),p=e(73),d=e(75),f=(e(74),e(79)),h=e(85),m=e(27),v=e(113),g=e(133),y=e(147),C=(e(150),1),E={construct:function(e){this._currentElement=e,this._rootNodeID=null,this._instance=null,this._pendingElement=null,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,this._renderedComponent=null,this._context=null,this._mountOrder=0,this._isTopLevel=!1,this._pendingCallbacks=null},mountComponent:function(e,t,n){this._context=n,this._mountOrder=C++,this._rootNodeID=e;var r=this._processProps(this._currentElement.props),o=this._processContext(this._currentElement._context),i=c.getComponentClassForElement(this._currentElement),a=new i(r,o);a.props=r,a.context=o,a.refs=v,this._instance=a,s.set(a,this);var u=a.state;void 0===u&&(a.state=u=null),g("object"==typeof u&&!Array.isArray(u)),this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1;var p,d,h=l.currentlyMountingInstance;l.currentlyMountingInstance=this;try{a.componentWillMount&&(a.componentWillMount(),this._pendingStateQueue&&(a.state=this._processPendingState(a.props,a.context))),p=this._getValidatedChildContext(n),d=this._renderValidatedComponent(p)}finally{l.currentlyMountingInstance=h}this._renderedComponent=this._instantiateReactComponent(d,this._currentElement.type);var m=f.mountComponent(this._renderedComponent,e,t,this._mergeChildContext(n,p));return a.componentDidMount&&t.getReactMountReady().enqueue(a.componentDidMount,a),m},unmountComponent:function(){var e=this._instance;if(e.componentWillUnmount){var t=l.currentlyUnmountingInstance;l.currentlyUnmountingInstance=this;try{e.componentWillUnmount()}finally{l.currentlyUnmountingInstance=t}}f.unmountComponent(this._renderedComponent),this._renderedComponent=null,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,this._pendingCallbacks=null,this._pendingElement=null,this._context=null,this._rootNodeID=null,s.remove(e)},_setPropsInternal:function(e,t){var n=this._pendingElement||this._currentElement;this._pendingElement=u.cloneAndReplaceProps(n,m({},n.props,e)),h.enqueueUpdate(this,t)},_maskContext:function(e){var t=null;if("string"==typeof this._currentElement.type)return v;var n=this._currentElement.type.contextTypes;if(!n)return v;t={};for(var r in n)t[r]=e[r];return t},_processContext:function(e){var t=this._maskContext(e);return t},_getValidatedChildContext:function(e){var t=this._instance,n=t.getChildContext&&t.getChildContext();if(n){g("object"==typeof t.constructor.childContextTypes);for(var r in n)g(r in t.constructor.childContextTypes);return n}return null},_mergeChildContext:function(e,t){return t?m({},e,t):e},_processProps:function(e){return e},_checkPropTypes:function(e,t,n){var o=this.getName();for(var i in e)if(e.hasOwnProperty(i)){var a;try{g("function"==typeof e[i]),a=e[i](t,i,o,n)}catch(u){a=u}a instanceof Error&&(r(this),n===d.prop)}},receiveComponent:function(e,t,n){var r=this._currentElement,o=this._context;this._pendingElement=null,this.updateComponent(t,r,e,o,n)},performUpdateIfNecessary:function(e){null!=this._pendingElement&&f.receiveComponent(this,this._pendingElement||this._currentElement,e,this._context),(null!==this._pendingStateQueue||this._pendingForceUpdate)&&this.updateComponent(e,this._currentElement,this._currentElement,this._context,this._context)},_warnIfContextsDiffer:function(e,t){e=this._maskContext(e),t=this._maskContext(t);for(var n=Object.keys(t).sort(),r=(this.getName()||"ReactCompositeComponent",0);r<n.length;r++)n[r]},updateComponent:function(e,t,n,r,o){var i=this._instance,a=i.context,u=i.props;t!==n&&(a=this._processContext(n._context),u=this._processProps(n.props),i.componentWillReceiveProps&&i.componentWillReceiveProps(u,a));var s=this._processPendingState(u,a),l=this._pendingForceUpdate||!i.shouldComponentUpdate||i.shouldComponentUpdate(u,s,a);l?(this._pendingForceUpdate=!1,this._performComponentUpdate(n,u,s,a,e,o)):(this._currentElement=n,this._context=o,i.props=u,i.state=s,i.context=a)},_processPendingState:function(e,t){var n=this._instance,r=this._pendingStateQueue,o=this._pendingReplaceState;if(this._pendingReplaceState=!1,this._pendingStateQueue=null,!r)return n.state;if(o&&1===r.length)return r[0];for(var i=m({},o?r[0]:n.state),a=o?1:0;a<r.length;a++){var u=r[a];m(i,"function"==typeof u?u.call(n,i,e,t):u)}return i},_performComponentUpdate:function(e,t,n,r,o,i){var a=this._instance,u=a.props,s=a.state,l=a.context;a.componentWillUpdate&&a.componentWillUpdate(t,n,r),this._currentElement=e,this._context=i,a.props=t,a.state=n,a.context=r,this._updateRenderedComponent(o,i),a.componentDidUpdate&&o.getReactMountReady().enqueue(a.componentDidUpdate.bind(a,u,s,l),a)},_updateRenderedComponent:function(e,t){var n=this._renderedComponent,r=n._currentElement,o=this._getValidatedChildContext(),i=this._renderValidatedComponent(o);if(y(r,i))f.receiveComponent(n,i,e,this._mergeChildContext(t,o));else{var a=this._rootNodeID,u=n._rootNodeID;f.unmountComponent(n),this._renderedComponent=this._instantiateReactComponent(i,this._currentElement.type);var s=f.mountComponent(this._renderedComponent,a,e,this._mergeChildContext(t,o));this._replaceNodeWithMarkupByID(u,s)}},_replaceNodeWithMarkupByID:function(e,t){o.replaceNodeWithMarkupByID(e,t)},_renderValidatedComponentWithoutOwnerOrContext:function(){var e=this._instance,t=e.render();return t},_renderValidatedComponent:function(e){var t,n=i.current;i.current=this._mergeChildContext(this._currentElement._context,e),a.current=this;try{t=this._renderValidatedComponentWithoutOwnerOrContext()}finally{i.current=n,a.current=null}return g(null===t||t===!1||u.isValidElement(t)),t},attachRef:function(e,t){var n=this.getPublicInstance(),r=n.refs===v?n.refs={}:n.refs;r[e]=t.getPublicInstance()},detachRef:function(e){var t=this.getPublicInstance().refs;delete t[e]},getName:function(){var e=this._currentElement.type,t=this._instance&&this._instance.constructor;return e.displayName||t&&t.displayName||e.name||t&&t.name||null},getPublicInstance:function(){return this._instance},_instantiateReactComponent:null};p.measureMethods(E,"ReactCompositeComponent",{mountComponent:"mountComponent",updateComponent:"updateComponent",_renderValidatedComponent:"_renderValidatedComponent"});var b={Mixin:E};t.exports=b},{113:113,133:133,147:147,150:150,27:27,36:36,38:38,39:39,55:55,56:56,65:65,66:66,71:71,73:73,74:74,75:75,79:79,85:85}],38:[function(e,t,n){"use strict";var r=e(27),o=e(113),i=(e(150),{current:o,withContext:function(e,t){var n,o=i.current;i.current=r({},o,e);try{n=t()}finally{i.current=o}return n}});t.exports=i},{113:113,150:150,27:27}],39:[function(e,t,n){"use strict";var r={current:null};t.exports=r},{}],40:[function(e,t,n){"use strict";function r(e){return o.createFactory(e)}var o=e(55),i=(e(56),e(140)),a=i({a:"a",abbr:"abbr",address:"address",area:"area",article:"article",aside:"aside",audio:"audio",b:"b",base:"base",bdi:"bdi",bdo:"bdo",big:"big",blockquote:"blockquote",body:"body",br:"br",button:"button",canvas:"canvas",caption:"caption",cite:"cite",code:"code",col:"col",colgroup:"colgroup",data:"data",datalist:"datalist",dd:"dd",del:"del",details:"details",dfn:"dfn",dialog:"dialog",div:"div",dl:"dl",dt:"dt",em:"em",embed:"embed",fieldset:"fieldset",figcaption:"figcaption",figure:"figure",footer:"footer",form:"form",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",head:"head",header:"header",hr:"hr",html:"html",i:"i",iframe:"iframe",img:"img",input:"input",ins:"ins",kbd:"kbd",keygen:"keygen",label:"label",legend:"legend",li:"li",link:"link",main:"main",map:"map",mark:"mark",menu:"menu",menuitem:"menuitem",meta:"meta",meter:"meter",nav:"nav",noscript:"noscript",object:"object",ol:"ol",optgroup:"optgroup",option:"option",output:"output",p:"p",param:"param",picture:"picture",pre:"pre",progress:"progress",q:"q",rp:"rp",rt:"rt",ruby:"ruby",s:"s",samp:"samp",script:"script",section:"section",select:"select",small:"small",source:"source",span:"span",strong:"strong",style:"style",sub:"sub",summary:"summary",sup:"sup",table:"table",tbody:"tbody",td:"td",textarea:"textarea",tfoot:"tfoot",th:"th",thead:"thead",time:"time",title:"title",tr:"tr",track:"track",u:"u",ul:"ul","var":"var",video:"video",wbr:"wbr",circle:"circle",clipPath:"clipPath",defs:"defs",ellipse:"ellipse",g:"g",line:"line",linearGradient:"linearGradient",mask:"mask",path:"path",pattern:"pattern",polygon:"polygon",polyline:"polyline",radialGradient:"radialGradient",rect:"rect",stop:"stop",svg:"svg",text:"text",tspan:"tspan"},r);t.exports=a},{140:140,55:55,56:56}],41:[function(e,t,n){"use strict";var r=e(2),o=e(29),i=e(33),a=e(55),u=e(138),s=a.createFactory("button"),l=u({onClick:!0,onDoubleClick:!0,onMouseDown:!0,onMouseMove:!0,onMouseUp:!0,onClickCapture:!0,onDoubleClickCapture:!0,onMouseDownCapture:!0,onMouseMoveCapture:!0,onMouseUpCapture:!0}),c=i.createClass({displayName:"ReactDOMButton",tagName:"BUTTON",mixins:[r,o],render:function(){var e={};for(var t in this.props)!this.props.hasOwnProperty(t)||this.props.disabled&&l[t]||(e[t]=this.props[t]);return s(e,this.props.children)}});t.exports=c},{138:138,2:2,29:29,33:33,55:55}],42:[function(e,t,n){"use strict";function r(e){e&&(null!=e.dangerouslySetInnerHTML&&(g(null==e.children),g("object"==typeof e.dangerouslySetInnerHTML&&"__html"in e.dangerouslySetInnerHTML)),g(null==e.style||"object"==typeof e.style))}function o(e,t,n,r){var o=d.findReactContainerForID(e);if(o){var i=o.nodeType===D?o.ownerDocument:o;E(t,i)}r.getPutListenerQueue().enqueuePutListener(e,t,n)}function i(e){P.call(T,e)||(g(I.test(e)),T[e]=!0)}function a(e){i(e),this._tag=e,this._renderedChildren=null,this._previousStyleCopy=null,this._rootNodeID=null}var u=e(5),s=e(10),l=e(11),c=e(30),p=e(35),d=e(68),f=e(69),h=e(73),m=e(27),v=e(114),g=e(133),y=(e(134),e(139)),C=(e(150),c.deleteListener),E=c.listenTo,b=c.registrationNameModules,_={string:!0,number:!0},x=y({style:null}),D=1,M=null,N={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},I=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,T={},P={}.hasOwnProperty;a.displayName="ReactDOMComponent",a.Mixin={construct:function(e){this._currentElement=e},mountComponent:function(e,t,n){this._rootNodeID=e,r(this._currentElement.props);var o=N[this._tag]?"":"</"+this._tag+">";return this._createOpenTagMarkupAndPutListeners(t)+this._createContentMarkup(t,n)+o},_createOpenTagMarkupAndPutListeners:function(e){var t=this._currentElement.props,n="<"+this._tag;for(var r in t)if(t.hasOwnProperty(r)){var i=t[r];if(null!=i)if(b.hasOwnProperty(r))o(this._rootNodeID,r,i,e);else{r===x&&(i&&(i=this._previousStyleCopy=m({},t.style)),i=u.createMarkupForStyles(i));var a=l.createMarkupForProperty(r,i);a&&(n+=" "+a)}}if(e.renderToStaticMarkup)return n+">";var s=l.createMarkupForID(this._rootNodeID);return n+" "+s+">"},_createContentMarkup:function(e,t){var n="";("listing"===this._tag||"pre"===this._tag||"textarea"===this._tag)&&(n="\n");var r=this._currentElement.props,o=r.dangerouslySetInnerHTML;if(null!=o){if(null!=o.__html)return n+o.__html}else{var i=_[typeof r.children]?r.children:null,a=null!=i?null:r.children;if(null!=i)return n+v(i);if(null!=a){var u=this.mountChildren(a,e,t);return n+u.join("")}}return n},receiveComponent:function(e,t,n){var r=this._currentElement;this._currentElement=e,this.updateComponent(t,r,e,n)},updateComponent:function(e,t,n,o){r(this._currentElement.props),this._updateDOMProperties(t.props,e),this._updateDOMChildren(t.props,e,o)},_updateDOMProperties:function(e,t){var n,r,i,a=this._currentElement.props;for(n in e)if(!a.hasOwnProperty(n)&&e.hasOwnProperty(n))if(n===x){var u=this._previousStyleCopy;for(r in u)u.hasOwnProperty(r)&&(i=i||{},i[r]="");this._previousStyleCopy=null}else b.hasOwnProperty(n)?C(this._rootNodeID,n):(s.isStandardName[n]||s.isCustomAttribute(n))&&M.deletePropertyByID(this._rootNodeID,n);for(n in a){var l=a[n],c=n===x?this._previousStyleCopy:e[n];if(a.hasOwnProperty(n)&&l!==c)if(n===x)if(l?l=this._previousStyleCopy=m({},l):this._previousStyleCopy=null,c){for(r in c)!c.hasOwnProperty(r)||l&&l.hasOwnProperty(r)||(i=i||{},i[r]="");for(r in l)l.hasOwnProperty(r)&&c[r]!==l[r]&&(i=i||{},i[r]=l[r])}else i=l;else b.hasOwnProperty(n)?o(this._rootNodeID,n,l,t):(s.isStandardName[n]||s.isCustomAttribute(n))&&M.updatePropertyByID(this._rootNodeID,n,l)}i&&M.updateStylesByID(this._rootNodeID,i)},_updateDOMChildren:function(e,t,n){var r=this._currentElement.props,o=_[typeof e.children]?e.children:null,i=_[typeof r.children]?r.children:null,a=e.dangerouslySetInnerHTML&&e.dangerouslySetInnerHTML.__html,u=r.dangerouslySetInnerHTML&&r.dangerouslySetInnerHTML.__html,s=null!=o?null:e.children,l=null!=i?null:r.children,c=null!=o||null!=a,p=null!=i||null!=u;null!=s&&null==l?this.updateChildren(null,t,n):c&&!p&&this.updateTextContent(""),null!=i?o!==i&&this.updateTextContent(""+i):null!=u?a!==u&&M.updateInnerHTMLByID(this._rootNodeID,u):null!=l&&this.updateChildren(l,t,n)},unmountComponent:function(){this.unmountChildren(),c.deleteAllListeners(this._rootNodeID),p.unmountIDFromEnvironment(this._rootNodeID),this._rootNodeID=null}},h.measureMethods(a,"ReactDOMComponent",{mountComponent:"mountComponent",updateComponent:"updateComponent"}),m(a.prototype,a.Mixin,f.Mixin),a.injection={injectIDOperations:function(e){a.BackendIDOperations=M=e}},t.exports=a},{10:10,11:11,114:114,133:133,134:134,139:139,150:150,27:27,30:30,35:35,5:5,68:68,69:69,73:73}],43:[function(e,t,n){"use strict";var r=e(15),o=e(25),i=e(29),a=e(33),u=e(55),s=u.createFactory("form"),l=a.createClass({displayName:"ReactDOMForm",tagName:"FORM",mixins:[i,o],render:function(){return s(this.props)},componentDidMount:function(){this.trapBubbledEvent(r.topLevelTypes.topReset,"reset"),this.trapBubbledEvent(r.topLevelTypes.topSubmit,"submit")}});t.exports=l},{15:15,25:25,29:29,33:33,55:55}],44:[function(e,t,n){"use strict";var r=e(5),o=e(9),i=e(11),a=e(68),u=e(73),s=e(133),l=e(144),c={dangerouslySetInnerHTML:"`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",style:"`style` must be set using `updateStylesByID()`."},p={updatePropertyByID:function(e,t,n){var r=a.getNode(e);s(!c.hasOwnProperty(t)),null!=n?i.setValueForProperty(r,t,n):i.deleteValueForProperty(r,t)},deletePropertyByID:function(e,t,n){var r=a.getNode(e);s(!c.hasOwnProperty(t)),i.deleteValueForProperty(r,t,n)},updateStylesByID:function(e,t){var n=a.getNode(e);r.setValueForStyles(n,t)},updateInnerHTMLByID:function(e,t){var n=a.getNode(e);l(n,t)},updateTextContentByID:function(e,t){var n=a.getNode(e);o.updateTextContent(n,t)},dangerouslyReplaceNodeWithMarkupByID:function(e,t){var n=a.getNode(e);o.dangerouslyReplaceNodeWithMarkup(n,t)},dangerouslyProcessChildrenUpdates:function(e,t){for(var n=0;n<e.length;n++)e[n].parentNode=a.getNode(e[n].parentID);o.processUpdates(e,t)}};u.measureMethods(p,"ReactDOMIDOperations",{updatePropertyByID:"updatePropertyByID",deletePropertyByID:"deletePropertyByID",updateStylesByID:"updateStylesByID",updateInnerHTMLByID:"updateInnerHTMLByID",updateTextContentByID:"updateTextContentByID",dangerouslyReplaceNodeWithMarkupByID:"dangerouslyReplaceNodeWithMarkupByID",dangerouslyProcessChildrenUpdates:"dangerouslyProcessChildrenUpdates"}),t.exports=p},{11:11,133:133,144:144,5:5,68:68,73:73,9:9}],45:[function(e,t,n){"use strict";var r=e(15),o=e(25),i=e(29),a=e(33),u=e(55),s=u.createFactory("iframe"),l=a.createClass({displayName:"ReactDOMIframe",tagName:"IFRAME",mixins:[i,o],render:function(){return s(this.props)},componentDidMount:function(){this.trapBubbledEvent(r.topLevelTypes.topLoad,"load")}});t.exports=l},{15:15,25:25,29:29,33:33,55:55}],46:[function(e,t,n){"use strict";var r=e(15),o=e(25),i=e(29),a=e(33),u=e(55),s=u.createFactory("img"),l=a.createClass({displayName:"ReactDOMImg",tagName:"IMG",mixins:[i,o],render:function(){return s(this.props)},componentDidMount:function(){this.trapBubbledEvent(r.topLevelTypes.topLoad,"load"),this.trapBubbledEvent(r.topLevelTypes.topError,"error")}});t.exports=l},{15:15,25:25,29:29,33:33,55:55}],47:[function(e,t,n){"use strict";function r(){this.isMounted()&&this.forceUpdate()}var o=e(2),i=e(11),a=e(24),u=e(29),s=e(33),l=e(55),c=e(68),p=e(85),d=e(27),f=e(133),h=l.createFactory("input"),m={},v=s.createClass({displayName:"ReactDOMInput",tagName:"INPUT",mixins:[o,a.Mixin,u],getInitialState:function(){var e=this.props.defaultValue;return{initialChecked:this.props.defaultChecked||!1,initialValue:null!=e?e:null}},render:function(){var e=d({},this.props);e.defaultChecked=null,e.defaultValue=null;var t=a.getValue(this);e.value=null!=t?t:this.state.initialValue;var n=a.getChecked(this);return e.checked=null!=n?n:this.state.initialChecked,e.onChange=this._handleChange,h(e,this.props.children)},componentDidMount:function(){var e=c.getID(this.getDOMNode());m[e]=this},componentWillUnmount:function(){var e=this.getDOMNode(),t=c.getID(e);delete m[t]},componentDidUpdate:function(e,t,n){var r=this.getDOMNode();null!=this.props.checked&&i.setValueForProperty(r,"checked",this.props.checked||!1);var o=a.getValue(this);null!=o&&i.setValueForProperty(r,"value",""+o)},_handleChange:function(e){var t,n=a.getOnChange(this);n&&(t=n.call(this,e)),p.asap(r,this);var o=this.props.name;if("radio"===this.props.type&&null!=o){for(var i=this.getDOMNode(),u=i;u.parentNode;)u=u.parentNode;for(var s=u.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),l=0,d=s.length;d>l;l++){var h=s[l];if(h!==i&&h.form===i.form){var v=c.getID(h);f(v);var g=m[v];f(g),p.asap(r,g)}}}return t}});t.exports=v},{11:11,133:133,2:2,24:24,27:27,29:29,33:33,55:55,68:68,85:85}],48:[function(e,t,n){"use strict";var r=e(29),o=e(33),i=e(55),a=(e(150),i.createFactory("option")),u=o.createClass({displayName:"ReactDOMOption",tagName:"OPTION",mixins:[r],componentWillMount:function(){},render:function(){return a(this.props,this.props.children)}});t.exports=u},{150:150,29:29,33:33,55:55}],49:[function(e,t,n){"use strict";function r(){if(this._pendingUpdate){this._pendingUpdate=!1;var e=u.getValue(this);null!=e&&this.isMounted()&&i(this,e)}}function o(e,t,n){if(null==e[t])return null;if(e.multiple){if(!Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be an array if `multiple` is true.")}else if(Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be a scalar value if `multiple` is false.")}function i(e,t){var n,r,o,i=e.getDOMNode().options;if(e.props.multiple){for(n={},r=0,o=t.length;o>r;r++)n[""+t[r]]=!0;for(r=0,o=i.length;o>r;r++){var a=n.hasOwnProperty(i[r].value);i[r].selected!==a&&(i[r].selected=a)}}else{for(n=""+t,r=0,o=i.length;o>r;r++)if(i[r].value===n)return void(i[r].selected=!0);i.length&&(i[0].selected=!0)}}var a=e(2),u=e(24),s=e(29),l=e(33),c=e(55),p=e(85),d=e(27),f=c.createFactory("select"),h=l.createClass({displayName:"ReactDOMSelect",tagName:"SELECT",mixins:[a,u.Mixin,s],propTypes:{defaultValue:o,value:o},render:function(){var e=d({},this.props);return e.onChange=this._handleChange,e.value=null,f(e,this.props.children)},componentWillMount:function(){this._pendingUpdate=!1},componentDidMount:function(){var e=u.getValue(this);null!=e?i(this,e):null!=this.props.defaultValue&&i(this,this.props.defaultValue)},componentDidUpdate:function(e){var t=u.getValue(this);null!=t?(this._pendingUpdate=!1,i(this,t)):!e.multiple!=!this.props.multiple&&(null!=this.props.defaultValue?i(this,this.props.defaultValue):i(this,this.props.multiple?[]:""))},_handleChange:function(e){var t,n=u.getOnChange(this);return n&&(t=n.call(this,e)),this._pendingUpdate=!0,p.asap(r,this),t}});t.exports=h},{2:2,24:24,27:27,29:29,33:33,55:55,85:85}],50:[function(e,t,n){"use strict";function r(e,t,n,r){return e===n&&t===r}function o(e){var t=document.selection,n=t.createRange(),r=n.text.length,o=n.duplicate();o.moveToElementText(e),o.setEndPoint("EndToStart",n);var i=o.text.length,a=i+r;return{start:i,end:a}}function i(e){var t=window.getSelection&&window.getSelection();if(!t||0===t.rangeCount)return null;var n=t.anchorNode,o=t.anchorOffset,i=t.focusNode,a=t.focusOffset,u=t.getRangeAt(0),s=r(t.anchorNode,t.anchorOffset,t.focusNode,t.focusOffset),l=s?0:u.toString().length,c=u.cloneRange();c.selectNodeContents(e),c.setEnd(u.startContainer,u.startOffset);var p=r(c.startContainer,c.startOffset,c.endContainer,c.endOffset),d=p?0:c.toString().length,f=d+l,h=document.createRange();h.setStart(n,o),h.setEnd(i,a);var m=h.collapsed;return{start:m?f:d,end:m?d:f}}function a(e,t){var n,r,o=document.selection.createRange().duplicate();"undefined"==typeof t.end?(n=t.start,r=n):t.start>t.end?(n=t.end,r=t.start):(n=t.start,r=t.end),o.moveToElementText(e),o.moveStart("character",n),o.setEndPoint("EndToStart",o),o.moveEnd("character",r-n),o.select()}function u(e,t){if(window.getSelection){var n=window.getSelection(),r=e[c()].length,o=Math.min(t.start,r),i="undefined"==typeof t.end?o:Math.min(t.end,r);if(!n.extend&&o>i){var a=i;i=o,o=a}var u=l(e,o),s=l(e,i);if(u&&s){var p=document.createRange();p.setStart(u.node,u.offset),n.removeAllRanges(),o>i?(n.addRange(p),n.extend(s.node,s.offset)):(p.setEnd(s.node,s.offset),n.addRange(p))}}}var s=e(21),l=e(126),c=e(128),p=s.canUseDOM&&"selection"in document&&!("getSelection"in window),d={getOffsets:p?o:i,setOffsets:p?a:u};t.exports=d},{126:126,128:128,21:21}],51:[function(e,t,n){"use strict";var r=e(11),o=e(35),i=e(42),a=e(27),u=e(114),s=function(e){};a(s.prototype,{construct:function(e){this._currentElement=e,this._stringText=""+e,this._rootNodeID=null,this._mountIndex=0},mountComponent:function(e,t,n){this._rootNodeID=e;var o=u(this._stringText);return t.renderToStaticMarkup?o:"<span "+r.createMarkupForID(e)+">"+o+"</span>"},receiveComponent:function(e,t){if(e!==this._currentElement){this._currentElement=e;var n=""+e;n!==this._stringText&&(this._stringText=n,i.BackendIDOperations.updateTextContentByID(this._rootNodeID,n))}},unmountComponent:function(){o.unmountIDFromEnvironment(this._rootNodeID)}}),t.exports=s},{11:11,114:114,27:27,35:35,42:42}],52:[function(e,t,n){"use strict";function r(){this.isMounted()&&this.forceUpdate()}var o=e(2),i=e(11),a=e(24),u=e(29),s=e(33),l=e(55),c=e(85),p=e(27),d=e(133),f=(e(150),l.createFactory("textarea")),h=s.createClass({displayName:"ReactDOMTextarea",tagName:"TEXTAREA",mixins:[o,a.Mixin,u],getInitialState:function(){var e=this.props.defaultValue,t=this.props.children;null!=t&&(d(null==e),Array.isArray(t)&&(d(t.length<=1),t=t[0]),e=""+t),null==e&&(e="");var n=a.getValue(this);return{initialValue:""+(null!=n?n:e)}},render:function(){var e=p({},this.props);return d(null==e.dangerouslySetInnerHTML),e.defaultValue=null,e.value=null,e.onChange=this._handleChange,f(e,this.state.initialValue)},componentDidUpdate:function(e,t,n){var r=a.getValue(this);if(null!=r){var o=this.getDOMNode();i.setValueForProperty(o,"value",""+r)}},_handleChange:function(e){var t,n=a.getOnChange(this);return n&&(t=n.call(this,e)),c.asap(r,this),t}});t.exports=h},{11:11,133:133,150:150,2:2,24:24,27:27,29:29,33:33,55:55,85:85}],53:[function(e,t,n){"use strict";function r(){this.reinitializeTransaction()}var o=e(85),i=e(101),a=e(27),u=e(112),s={initialize:u,close:function(){d.isBatchingUpdates=!1}},l={initialize:u,close:o.flushBatchedUpdates.bind(o)},c=[l,s];a(r.prototype,i.Mixin,{getTransactionWrappers:function(){return c}});var p=new r,d={isBatchingUpdates:!1,batchedUpdates:function(e,t,n,r,o){var i=d.isBatchingUpdates;d.isBatchingUpdates=!0,i?e(t,n,r,o):p.perform(e,null,t,n,r,o)}};t.exports=d},{101:101,112:112,27:27,85:85}],54:[function(e,t,n){"use strict";function r(e){return h.createClass({tagName:e.toUpperCase(),render:function(){return new T(e,null,null,null,null,this.props)}})}function o(){R.EventEmitter.injectReactEventListener(P),R.EventPluginHub.injectEventPluginOrder(s),R.EventPluginHub.injectInstanceHandle(w),R.EventPluginHub.injectMount(O),R.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:L,EnterLeaveEventPlugin:l,ChangeEventPlugin:a,MobileSafariClickEventPlugin:d,SelectEventPlugin:A,BeforeInputEventPlugin:i}),R.NativeComponent.injectGenericComponentClass(g),R.NativeComponent.injectTextComponentClass(I),R.NativeComponent.injectAutoWrapper(r),R.Class.injectMixin(f),R.NativeComponent.injectComponentClasses({button:y,form:C,iframe:_,img:E,input:x,option:D,select:M,textarea:N,html:F("html"),head:F("head"),body:F("body")}),R.DOMProperty.injectDOMPropertyConfig(p),R.DOMProperty.injectDOMPropertyConfig(U),R.EmptyComponent.injectEmptyComponent("noscript"),R.Updates.injectReconcileTransaction(S),R.Updates.injectBatchingStrategy(v),R.RootIndex.injectCreateReactRootIndex(c.canUseDOM?u.createReactRootIndex:k.createReactRootIndex),R.Component.injectEnvironment(m),R.DOMComponent.injectIDOperations(b)}var i=e(3),a=e(7),u=e(8),s=e(13),l=e(14),c=e(21),p=e(23),d=e(26),f=e(29),h=e(33),m=e(35),v=e(53),g=e(42),y=e(41),C=e(43),E=e(46),b=e(44),_=e(45),x=e(47),D=e(48),M=e(49),N=e(52),I=e(51),T=e(55),P=e(60),R=e(62),w=e(64),O=e(68),S=e(78),A=e(87),k=e(88),L=e(89),U=e(86),F=e(109);

t.exports={inject:o}},{109:109,13:13,14:14,21:21,23:23,26:26,29:29,3:3,33:33,35:35,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,51:51,52:52,53:53,55:55,60:60,62:62,64:64,68:68,7:7,78:78,8:8,86:86,87:87,88:88,89:89}],55:[function(e,t,n){"use strict";var r=e(38),o=e(39),i=e(27),a=(e(150),{key:!0,ref:!0}),u=function(e,t,n,r,o,i){this.type=e,this.key=t,this.ref=n,this._owner=r,this._context=o,this.props=i};u.prototype={_isReactElement:!0},u.createElement=function(e,t,n){var i,s={},l=null,c=null;if(null!=t){c=void 0===t.ref?null:t.ref,l=void 0===t.key?null:""+t.key;for(i in t)t.hasOwnProperty(i)&&!a.hasOwnProperty(i)&&(s[i]=t[i])}var p=arguments.length-2;if(1===p)s.children=n;else if(p>1){for(var d=Array(p),f=0;p>f;f++)d[f]=arguments[f+2];s.children=d}if(e&&e.defaultProps){var h=e.defaultProps;for(i in h)"undefined"==typeof s[i]&&(s[i]=h[i])}return new u(e,l,c,o.current,r.current,s)},u.createFactory=function(e){var t=u.createElement.bind(null,e);return t.type=e,t},u.cloneAndReplaceProps=function(e,t){var n=new u(e.type,e.key,e.ref,e._owner,e._context,t);return n},u.cloneElement=function(e,t,n){var r,s=i({},e.props),l=e.key,c=e.ref,p=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,p=o.current),void 0!==t.key&&(l=""+t.key);for(r in t)t.hasOwnProperty(r)&&!a.hasOwnProperty(r)&&(s[r]=t[r])}var d=arguments.length-2;if(1===d)s.children=n;else if(d>1){for(var f=Array(d),h=0;d>h;h++)f[h]=arguments[h+2];s.children=f}return new u(e.type,l,c,p,e._context,s)},u.isValidElement=function(e){var t=!(!e||!e._isReactElement);return t},t.exports=u},{150:150,27:27,38:38,39:39}],56:[function(e,t,n){"use strict";function r(){if(y.current){var e=y.current.getName();if(e)return" Check the render method of `"+e+"`."}return""}function o(e){var t=e&&e.getPublicInstance();if(!t)return void 0;var n=t.constructor;return n?n.displayName||n.name||void 0:void 0}function i(){var e=y.current;return e&&o(e)||void 0}function a(e,t){e._store.validated||null!=e.key||(e._store.validated=!0,s('Each child in an array or iterator should have a unique "key" prop.',e,t))}function u(e,t,n){D.test(e)&&s("Child objects should have non-numeric keys so ordering is preserved.",t,n)}function s(e,t,n){var r=i(),a="string"==typeof n?n:n.displayName||n.name,u=r||a,s=_[e]||(_[e]={});if(!s.hasOwnProperty(u)){s[u]=!0;var l="";if(t&&t._owner&&t._owner!==y.current){var c=o(t._owner);l=" It was passed a child from "+c+"."}}}function l(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];m.isValidElement(r)&&a(r,t)}else if(m.isValidElement(e))e._store.validated=!0;else if(e){var o=E(e);if(o){if(o!==e.entries)for(var i,s=o.call(e);!(i=s.next()).done;)m.isValidElement(i.value)&&a(i.value,t)}else if("object"==typeof e){var l=v.extractIfFragment(e);for(var c in l)l.hasOwnProperty(c)&&u(c,l[c],t)}}}function c(e,t,n,o){for(var i in t)if(t.hasOwnProperty(i)){var a;try{b("function"==typeof t[i]),a=t[i](n,i,e,o)}catch(u){a=u}a instanceof Error&&!(a.message in x)&&(x[a.message]=!0,r(this))}}function p(e,t){var n=t.type,r="string"==typeof n?n:n.displayName,o=t._owner?t._owner.getPublicInstance().constructor.displayName:null,i=e+"|"+r+"|"+o;if(!M.hasOwnProperty(i)){M[i]=!0;var a="";r&&(a=" <"+r+" />");var u="";o&&(u=" The element was created by "+o+".")}}function d(e,t){return e!==e?t!==t:0===e&&0===t?1/e===1/t:e===t}function f(e){if(e._store){var t=e._store.originalProps,n=e.props;for(var r in n)n.hasOwnProperty(r)&&(t.hasOwnProperty(r)&&d(t[r],n[r])||(p(r,e),t[r]=n[r]))}}function h(e){if(null!=e.type){var t=C.getComponentClassForElement(e),n=t.displayName||t.name;t.propTypes&&c(n,t.propTypes,e.props,g.prop),"function"==typeof t.getDefaultProps}}var m=e(55),v=e(61),g=e(75),y=(e(74),e(39)),C=e(71),E=e(124),b=e(133),_=(e(150),{}),x={},D=/^\d+$/,M={},N={checkAndWarnForMutatedProps:f,createElement:function(e,t,n){var r=m.createElement.apply(this,arguments);if(null==r)return r;for(var o=2;o<arguments.length;o++)l(arguments[o],e);return h(r),r},createFactory:function(e){var t=N.createElement.bind(null,e);return t.type=e,t},cloneElement:function(e,t,n){for(var r=m.cloneElement.apply(this,arguments),o=2;o<arguments.length;o++)l(arguments[o],r.type);return h(r),r}};t.exports=N},{124:124,133:133,150:150,39:39,55:55,61:61,71:71,74:74,75:75}],57:[function(e,t,n){"use strict";function r(e){c[e]=!0}function o(e){delete c[e]}function i(e){return!!c[e]}var a,u=e(55),s=e(65),l=e(133),c={},p={injectEmptyComponent:function(e){a=u.createFactory(e)}},d=function(){};d.prototype.componentDidMount=function(){var e=s.get(this);e&&r(e._rootNodeID)},d.prototype.componentWillUnmount=function(){var e=s.get(this);e&&o(e._rootNodeID)},d.prototype.render=function(){return l(a),a()};var f=u.createElement(d),h={emptyElement:f,injection:p,isNullComponentID:i};t.exports=h},{133:133,55:55,65:65}],58:[function(e,t,n){"use strict";var r={guard:function(e,t){return e}};t.exports=r},{}],59:[function(e,t,n){"use strict";function r(e){o.enqueueEvents(e),o.processEventQueue()}var o=e(17),i={handleTopLevel:function(e,t,n,i){var a=o.extractEvents(e,t,n,i);r(a)}};t.exports=i},{17:17}],60:[function(e,t,n){"use strict";function r(e){var t=p.getID(e),n=c.getReactRootIDFromNodeID(t),r=p.findReactContainerForID(n),o=p.getFirstReactDOM(r);return o}function o(e,t){this.topLevelType=e,this.nativeEvent=t,this.ancestors=[]}function i(e){for(var t=p.getFirstReactDOM(h(e.nativeEvent))||window,n=t;n;)e.ancestors.push(n),n=r(n);for(var o=0,i=e.ancestors.length;i>o;o++){t=e.ancestors[o];var a=p.getID(t)||"";v._handleTopLevel(e.topLevelType,t,a,e.nativeEvent)}}function a(e){var t=m(window);e(t)}var u=e(16),s=e(21),l=e(28),c=e(64),p=e(68),d=e(85),f=e(27),h=e(123),m=e(129);f(o.prototype,{destructor:function(){this.topLevelType=null,this.nativeEvent=null,this.ancestors.length=0}}),l.addPoolingTo(o,l.twoArgumentPooler);var v={_enabled:!0,_handleTopLevel:null,WINDOW_HANDLE:s.canUseDOM?window:null,setHandleTopLevel:function(e){v._handleTopLevel=e},setEnabled:function(e){v._enabled=!!e},isEnabled:function(){return v._enabled},trapBubbledEvent:function(e,t,n){var r=n;return r?u.listen(r,t,v.dispatchEvent.bind(null,e)):null},trapCapturedEvent:function(e,t,n){var r=n;return r?u.capture(r,t,v.dispatchEvent.bind(null,e)):null},monitorScrollValue:function(e){var t=a.bind(null,e);u.listen(window,"scroll",t)},dispatchEvent:function(e,t){if(v._enabled){var n=o.getPooled(e,t);try{d.batchedUpdates(i,n)}finally{o.release(n)}}}};t.exports=v},{123:123,129:129,16:16,21:21,27:27,28:28,64:64,68:68,85:85}],61:[function(e,t,n){"use strict";var r=(e(55),e(150),{create:function(e){return e},extract:function(e){return e},extractIfFragment:function(e){return e}});t.exports=r},{150:150,55:55}],62:[function(e,t,n){"use strict";var r=e(10),o=e(17),i=e(36),a=e(33),u=e(57),s=e(30),l=e(71),c=e(42),p=e(73),d=e(81),f=e(85),h={Component:i.injection,Class:a.injection,DOMComponent:c.injection,DOMProperty:r.injection,EmptyComponent:u.injection,EventPluginHub:o.injection,EventEmitter:s.injection,NativeComponent:l.injection,Perf:p.injection,RootIndex:d.injection,Updates:f.injection};t.exports=h},{10:10,17:17,30:30,33:33,36:36,42:42,57:57,71:71,73:73,81:81,85:85}],63:[function(e,t,n){"use strict";function r(e){return i(document.documentElement,e)}var o=e(50),i=e(107),a=e(117),u=e(119),s={hasSelectionCapabilities:function(e){return e&&("INPUT"===e.nodeName&&"text"===e.type||"TEXTAREA"===e.nodeName||"true"===e.contentEditable)},getSelectionInformation:function(){var e=u();return{focusedElem:e,selectionRange:s.hasSelectionCapabilities(e)?s.getSelection(e):null}},restoreSelection:function(e){var t=u(),n=e.focusedElem,o=e.selectionRange;t!==n&&r(n)&&(s.hasSelectionCapabilities(n)&&s.setSelection(n,o),a(n))},getSelection:function(e){var t;if("selectionStart"in e)t={start:e.selectionStart,end:e.selectionEnd};else if(document.selection&&"INPUT"===e.nodeName){var n=document.selection.createRange();n.parentElement()===e&&(t={start:-n.moveStart("character",-e.value.length),end:-n.moveEnd("character",-e.value.length)})}else t=o.getOffsets(e);return t||{start:0,end:0}},setSelection:function(e,t){var n=t.start,r=t.end;if("undefined"==typeof r&&(r=n),"selectionStart"in e)e.selectionStart=n,e.selectionEnd=Math.min(r,e.value.length);else if(document.selection&&"INPUT"===e.nodeName){var i=e.createTextRange();i.collapse(!0),i.moveStart("character",n),i.moveEnd("character",r-n),i.select()}else o.setOffsets(e,t)}};t.exports=s},{107:107,117:117,119:119,50:50}],64:[function(e,t,n){"use strict";function r(e){return f+e.toString(36)}function o(e,t){return e.charAt(t)===f||t===e.length}function i(e){return""===e||e.charAt(0)===f&&e.charAt(e.length-1)!==f}function a(e,t){return 0===t.indexOf(e)&&o(t,e.length)}function u(e){return e?e.substr(0,e.lastIndexOf(f)):""}function s(e,t){if(d(i(e)&&i(t)),d(a(e,t)),e===t)return e;var n,r=e.length+h;for(n=r;n<t.length&&!o(t,n);n++);return t.substr(0,n)}function l(e,t){var n=Math.min(e.length,t.length);if(0===n)return"";for(var r=0,a=0;n>=a;a++)if(o(e,a)&&o(t,a))r=a;else if(e.charAt(a)!==t.charAt(a))break;var u=e.substr(0,r);return d(i(u)),u}function c(e,t,n,r,o,i){e=e||"",t=t||"",d(e!==t);var l=a(t,e);d(l||a(e,t));for(var c=0,p=l?u:s,f=e;;f=p(f,t)){var h;if(o&&f===e||i&&f===t||(h=n(f,l,r)),h===!1||f===t)break;d(c++<m)}}var p=e(81),d=e(133),f=".",h=f.length,m=100,v={createReactRootID:function(){return r(p.createReactRootIndex())},createReactID:function(e,t){return e+t},getReactRootIDFromNodeID:function(e){if(e&&e.charAt(0)===f&&e.length>1){var t=e.indexOf(f,1);return t>-1?e.substr(0,t):e}return null},traverseEnterLeave:function(e,t,n,r,o){var i=l(e,t);i!==e&&c(e,i,n,r,!1,!0),i!==t&&c(i,t,n,o,!0,!1)},traverseTwoPhase:function(e,t,n){e&&(c("",e,t,n,!0,!1),c(e,"",t,n,!1,!0))},traverseAncestors:function(e,t,n){c("",e,t,n,!0,!1)},_getFirstCommonAncestorID:l,_getNextDescendantID:s,isAncestorIDOf:a,SEPARATOR:f};t.exports=v},{133:133,81:81}],65:[function(e,t,n){"use strict";var r={remove:function(e){e._reactInternalInstance=void 0},get:function(e){return e._reactInternalInstance},has:function(e){return void 0!==e._reactInternalInstance},set:function(e,t){e._reactInternalInstance=t}};t.exports=r},{}],66:[function(e,t,n){"use strict";var r={currentlyMountingInstance:null,currentlyUnmountingInstance:null};t.exports=r},{}],67:[function(e,t,n){"use strict";var r=e(104),o={CHECKSUM_ATTR_NAME:"data-react-checksum",addChecksumToMarkup:function(e){var t=r(e);return e.replace(">"," "+o.CHECKSUM_ATTR_NAME+'="'+t+'">')},canReuseMarkup:function(e,t){var n=t.getAttribute(o.CHECKSUM_ATTR_NAME);n=n&&parseInt(n,10);var i=r(e);return i===n}};t.exports=o},{104:104}],68:[function(e,t,n){"use strict";function r(e,t){for(var n=Math.min(e.length,t.length),r=0;n>r;r++)if(e.charAt(r)!==t.charAt(r))return r;return e.length===t.length?-1:n}function o(e){var t=P(e);return t&&K.getID(t)}function i(e){var t=a(e);if(t)if(L.hasOwnProperty(t)){var n=L[t];n!==e&&(w(!c(n,t)),L[t]=e)}else L[t]=e;return t}function a(e){return e&&e.getAttribute&&e.getAttribute(k)||""}function u(e,t){var n=a(e);n!==t&&delete L[n],e.setAttribute(k,t),L[t]=e}function s(e){return L.hasOwnProperty(e)&&c(L[e],e)||(L[e]=K.findReactNodeByID(e)),L[e]}function l(e){var t=b.get(e)._rootNodeID;return C.isNullComponentID(t)?null:(L.hasOwnProperty(t)&&c(L[t],t)||(L[t]=K.findReactNodeByID(t)),L[t])}function c(e,t){if(e){w(a(e)===t);var n=K.findReactContainerForID(t);if(n&&T(n,e))return!0}return!1}function p(e){delete L[e]}function d(e){var t=L[e];return t&&c(t,e)?void(W=t):!1}function f(e){W=null,E.traverseAncestors(e,d);var t=W;return W=null,t}function h(e,t,n,r,o){var i=D.mountComponent(e,t,r,I);e._isTopLevel=!0,K._mountImageIntoNode(i,n,o)}function m(e,t,n,r){var o=N.ReactReconcileTransaction.getPooled();o.perform(h,null,e,t,n,o,r),N.ReactReconcileTransaction.release(o)}var v=e(10),g=e(30),y=(e(39),e(55)),C=(e(56),e(57)),E=e(64),b=e(65),_=e(67),x=e(73),D=e(79),M=e(84),N=e(85),I=e(113),T=e(107),P=e(127),R=e(132),w=e(133),O=e(144),S=e(147),A=(e(150),E.SEPARATOR),k=v.ID_ATTRIBUTE_NAME,L={},U=1,F=9,B={},V={},j=[],W=null,K={_instancesByReactRootID:B,scrollMonitor:function(e,t){t()},_updateRootComponent:function(e,t,n,r){return K.scrollMonitor(n,function(){M.enqueueElementInternal(e,t),r&&M.enqueueCallbackInternal(e,r)}),e},_registerComponent:function(e,t){w(t&&(t.nodeType===U||t.nodeType===F)),g.ensureScrollValueMonitoring();var n=K.registerContainer(t);return B[n]=e,n},_renderNewRootComponent:function(e,t,n){var r=R(e,null),o=K._registerComponent(r,t);return N.batchedUpdates(m,r,o,t,n),r},render:function(e,t,n){w(y.isValidElement(e));var r=B[o(t)];if(r){var i=r._currentElement;if(S(i,e))return K._updateRootComponent(r,e,t,n).getPublicInstance();K.unmountComponentAtNode(t)}var a=P(t),u=a&&K.isRenderedByReact(a),s=u&&!r,l=K._renderNewRootComponent(e,t,s).getPublicInstance();return n&&n.call(l),l},constructAndRenderComponent:function(e,t,n){var r=y.createElement(e,t);return K.render(r,n)},constructAndRenderComponentByID:function(e,t,n){var r=document.getElementById(n);return w(r),K.constructAndRenderComponent(e,t,r)},registerContainer:function(e){var t=o(e);return t&&(t=E.getReactRootIDFromNodeID(t)),t||(t=E.createReactRootID()),V[t]=e,t},unmountComponentAtNode:function(e){w(e&&(e.nodeType===U||e.nodeType===F));var t=o(e),n=B[t];return n?(K.unmountComponentFromNode(n,e),delete B[t],delete V[t],!0):!1},unmountComponentFromNode:function(e,t){for(D.unmountComponent(e),t.nodeType===F&&(t=t.documentElement);t.lastChild;)t.removeChild(t.lastChild)},findReactContainerForID:function(e){var t=E.getReactRootIDFromNodeID(e),n=V[t];return n},findReactNodeByID:function(e){var t=K.findReactContainerForID(e);return K.findComponentRoot(t,e)},isRenderedByReact:function(e){if(1!==e.nodeType)return!1;var t=K.getID(e);return t?t.charAt(0)===A:!1},getFirstReactDOM:function(e){for(var t=e;t&&t.parentNode!==t;){if(K.isRenderedByReact(t))return t;t=t.parentNode}return null},findComponentRoot:function(e,t){var n=j,r=0,o=f(t)||e;for(n[0]=o.firstChild,n.length=1;r<n.length;){for(var i,a=n[r++];a;){var u=K.getID(a);u?t===u?i=a:E.isAncestorIDOf(u,t)&&(n.length=r=0,n.push(a.firstChild)):n.push(a.firstChild),a=a.nextSibling}if(i)return n.length=0,i}n.length=0,w(!1)},_mountImageIntoNode:function(e,t,n){if(w(t&&(t.nodeType===U||t.nodeType===F)),n){var o=P(t);if(_.canReuseMarkup(e,o))return;var i=o.getAttribute(_.CHECKSUM_ATTR_NAME);o.removeAttribute(_.CHECKSUM_ATTR_NAME);var a=o.outerHTML;o.setAttribute(_.CHECKSUM_ATTR_NAME,i);var u=r(e,a);" (client) "+e.substring(u-20,u+20)+"\n (server) "+a.substring(u-20,u+20),w(t.nodeType!==F)}w(t.nodeType!==F),O(t,e)},getReactRootID:o,getID:i,setID:u,getNode:s,getNodeFromInstance:l,purgeID:p};x.measureMethods(K,"ReactMount",{_renderNewRootComponent:"_renderNewRootComponent",_mountImageIntoNode:"_mountImageIntoNode"}),t.exports=K},{10:10,107:107,113:113,127:127,132:132,133:133,144:144,147:147,150:150,30:30,39:39,55:55,56:56,57:57,64:64,65:65,67:67,73:73,79:79,84:84,85:85}],69:[function(e,t,n){"use strict";function r(e,t,n){h.push({parentID:e,parentNode:null,type:c.INSERT_MARKUP,markupIndex:m.push(t)-1,textContent:null,fromIndex:null,toIndex:n})}function o(e,t,n){h.push({parentID:e,parentNode:null,type:c.MOVE_EXISTING,markupIndex:null,textContent:null,fromIndex:t,toIndex:n})}function i(e,t){h.push({parentID:e,parentNode:null,type:c.REMOVE_NODE,markupIndex:null,textContent:null,fromIndex:t,toIndex:null})}function a(e,t){h.push({parentID:e,parentNode:null,type:c.TEXT_CONTENT,markupIndex:null,textContent:t,fromIndex:null,toIndex:null})}function u(){h.length&&(l.processChildrenUpdates(h,m),s())}function s(){h.length=0,m.length=0}var l=e(36),c=e(70),p=e(79),d=e(31),f=0,h=[],m=[],v={Mixin:{mountChildren:function(e,t,n){var r=d.instantiateChildren(e,t,n);this._renderedChildren=r;var o=[],i=0;for(var a in r)if(r.hasOwnProperty(a)){var u=r[a],s=this._rootNodeID+a,l=p.mountComponent(u,s,t,n);u._mountIndex=i,o.push(l),i++}return o},updateTextContent:function(e){f++;var t=!0;try{var n=this._renderedChildren;d.unmountChildren(n);for(var r in n)n.hasOwnProperty(r)&&this._unmountChildByName(n[r],r);this.setTextContent(e),t=!1}finally{f--,f||(t?s():u())}},updateChildren:function(e,t,n){f++;var r=!0;try{this._updateChildren(e,t,n),r=!1}finally{f--,f||(r?s():u())}},_updateChildren:function(e,t,n){var r=this._renderedChildren,o=d.updateChildren(r,e,t,n);if(this._renderedChildren=o,o||r){var i,a=0,u=0;for(i in o)if(o.hasOwnProperty(i)){var s=r&&r[i],l=o[i];s===l?(this.moveChild(s,u,a),a=Math.max(s._mountIndex,a),s._mountIndex=u):(s&&(a=Math.max(s._mountIndex,a),this._unmountChildByName(s,i)),this._mountChildByNameAtIndex(l,i,u,t,n)),u++}for(i in r)!r.hasOwnProperty(i)||o&&o.hasOwnProperty(i)||this._unmountChildByName(r[i],i)}},unmountChildren:function(){var e=this._renderedChildren;d.unmountChildren(e),this._renderedChildren=null},moveChild:function(e,t,n){e._mountIndex<n&&o(this._rootNodeID,e._mountIndex,t)},createChild:function(e,t){r(this._rootNodeID,t,e._mountIndex)},removeChild:function(e){i(this._rootNodeID,e._mountIndex)},setTextContent:function(e){a(this._rootNodeID,e)},_mountChildByNameAtIndex:function(e,t,n,r,o){var i=this._rootNodeID+t,a=p.mountComponent(e,i,r,o);e._mountIndex=n,this.createChild(e,a)},_unmountChildByName:function(e,t){this.removeChild(e),e._mountIndex=null}}};t.exports=v},{31:31,36:36,70:70,79:79}],70:[function(e,t,n){"use strict";var r=e(138),o=r({INSERT_MARKUP:null,MOVE_EXISTING:null,REMOVE_NODE:null,TEXT_CONTENT:null});t.exports=o},{138:138}],71:[function(e,t,n){"use strict";function r(e){if("function"==typeof e.type)return e.type;var t=e.type,n=p[t];return null==n&&(p[t]=n=l(t)),n}function o(e){return s(c),new c(e.type,e.props)}function i(e){return new d(e)}function a(e){return e instanceof d}var u=e(27),s=e(133),l=null,c=null,p={},d=null,f={injectGenericComponentClass:function(e){c=e},injectTextComponentClass:function(e){d=e},injectComponentClasses:function(e){u(p,e)},injectAutoWrapper:function(e){l=e}},h={getComponentClassForElement:r,createInternalComponent:o,createInstanceForText:i,isTextComponent:a,injection:f};t.exports=h},{133:133,27:27}],72:[function(e,t,n){"use strict";var r=e(133),o={isValidOwner:function(e){return!(!e||"function"!=typeof e.attachRef||"function"!=typeof e.detachRef)},addComponentAsRefTo:function(e,t,n){r(o.isValidOwner(n)),n.attachRef(t,e)},removeComponentAsRefFrom:function(e,t,n){r(o.isValidOwner(n)),n.getPublicInstance().refs[t]===e.getPublicInstance()&&n.detachRef(t)}};t.exports=o},{133:133}],73:[function(e,t,n){"use strict";function r(e,t,n){return n}var o={enableMeasure:!1,storedMeasure:r,measureMethods:function(e,t,n){},measure:function(e,t,n){return n},injection:{injectMeasure:function(e){o.storedMeasure=e}}};t.exports=o},{}],74:[function(e,t,n){"use strict";var r={};t.exports=r},{}],75:[function(e,t,n){"use strict";var r=e(138),o=r({prop:null,context:null,childContext:null});t.exports=o},{138:138}],76:[function(e,t,n){"use strict";function r(e){function t(t,n,r,o,i){if(o=o||b,null==n[r]){var a=C[i];return t?new Error("Required "+a+" `"+r+"` was not specified in "+("`"+o+"`.")):null}return e(n,r,o,i)}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n}function o(e){function t(t,n,r,o){var i=t[n],a=m(i);if(a!==e){var u=C[o],s=v(i);return new Error("Invalid "+u+" `"+n+"` of type `"+s+"` "+("supplied to `"+r+"`, expected `"+e+"`."))}return null}return r(t)}function i(){return r(E.thatReturns(null))}function a(e){function t(t,n,r,o){var i=t[n];if(!Array.isArray(i)){var a=C[o],u=m(i);return new Error("Invalid "+a+" `"+n+"` of type "+("`"+u+"` supplied to `"+r+"`, expected an array."))}for(var s=0;s<i.length;s++){var l=e(i,s,r,o);if(l instanceof Error)return l}return null}return r(t)}function u(){function e(e,t,n,r){if(!g.isValidElement(e[t])){var o=C[r];return new Error("Invalid "+o+" `"+t+"` supplied to "+("`"+n+"`, expected a ReactElement."))}return null}return r(e)}function s(e){function t(t,n,r,o){if(!(t[n]instanceof e)){var i=C[o],a=e.name||b;return new Error("Invalid "+i+" `"+n+"` supplied to "+("`"+r+"`, expected instance of `"+a+"`."))}return null}return r(t)}function l(e){function t(t,n,r,o){for(var i=t[n],a=0;a<e.length;a++)if(i===e[a])return null;var u=C[o],s=JSON.stringify(e);return new Error("Invalid "+u+" `"+n+"` of value `"+i+"` "+("supplied to `"+r+"`, expected one of "+s+"."))}return r(t)}function c(e){function t(t,n,r,o){var i=t[n],a=m(i);if("object"!==a){var u=C[o];return new Error("Invalid "+u+" `"+n+"` of type "+("`"+a+"` supplied to `"+r+"`, expected an object."))}for(var s in i)if(i.hasOwnProperty(s)){var l=e(i,s,r,o);if(l instanceof Error)return l}return null}return r(t)}function p(e){function t(t,n,r,o){for(var i=0;i<e.length;i++){var a=e[i];if(null==a(t,n,r,o))return null}var u=C[o];return new Error("Invalid "+u+" `"+n+"` supplied to "+("`"+r+"`."))}return r(t)}function d(){function e(e,t,n,r){if(!h(e[t])){var o=C[r];return new Error("Invalid "+o+" `"+t+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return null}return r(e)}function f(e){function t(t,n,r,o){var i=t[n],a=m(i);if("object"!==a){var u=C[o];return new Error("Invalid "+u+" `"+n+"` of type `"+a+"` "+("supplied to `"+r+"`, expected `object`."))}for(var s in e){var l=e[s];if(l){var c=l(i,s,r,o);if(c)return c}}return null}return r(t)}function h(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(h);if(null===e||g.isValidElement(e))return!0;e=y.extractIfFragment(e);for(var t in e)if(!h(e[t]))return!1;return!0;default:return!1}}function m(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":t}function v(e){var t=m(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}var g=e(55),y=e(61),C=e(74),E=e(112),b="<<anonymous>>",_=u(),x=d(),D={array:o("array"),bool:o("boolean"),func:o("function"),number:o("number"),object:o("object"),string:o("string"),any:i(),arrayOf:a,element:_,instanceOf:s,node:x,objectOf:c,oneOf:l,oneOfType:p,shape:f};t.exports=D},{112:112,55:55,61:61,74:74}],77:[function(e,t,n){"use strict";function r(){this.listenersToPut=[]}var o=e(28),i=e(30),a=e(27);a(r.prototype,{enqueuePutListener:function(e,t,n){this.listenersToPut.push({rootNodeID:e,propKey:t,propValue:n})},putListeners:function(){for(var e=0;e<this.listenersToPut.length;e++){var t=this.listenersToPut[e];i.putListener(t.rootNodeID,t.propKey,t.propValue)}},reset:function(){this.listenersToPut.length=0},destructor:function(){this.reset()}}),o.addPoolingTo(r),t.exports=r},{27:27,28:28,30:30}],78:[function(e,t,n){"use strict";function r(){this.reinitializeTransaction(),this.renderToStaticMarkup=!1,this.reactMountReady=o.getPooled(null),this.putListenerQueue=s.getPooled()}var o=e(6),i=e(28),a=e(30),u=e(63),s=e(77),l=e(101),c=e(27),p={initialize:u.getSelectionInformation,close:u.restoreSelection},d={initialize:function(){var e=a.isEnabled();return a.setEnabled(!1),e},close:function(e){a.setEnabled(e)}},f={initialize:function(){this.reactMountReady.reset()},close:function(){this.reactMountReady.notifyAll()}},h={initialize:function(){this.putListenerQueue.reset()},close:function(){this.putListenerQueue.putListeners()}},m=[h,p,d,f],v={getTransactionWrappers:function(){return m},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){o.release(this.reactMountReady),this.reactMountReady=null,s.release(this.putListenerQueue),this.putListenerQueue=null}};c(r.prototype,l.Mixin,v),i.addPoolingTo(r),t.exports=r},{101:101,27:27,28:28,30:30,6:6,63:63,77:77}],79:[function(e,t,n){"use strict";function r(){o.attachRefs(this,this._currentElement)}var o=e(80),i=(e(56),{mountComponent:function(e,t,n,o){var i=e.mountComponent(t,n,o);return n.getReactMountReady().enqueue(r,e),i},unmountComponent:function(e){o.detachRefs(e,e._currentElement),e.unmountComponent()},receiveComponent:function(e,t,n,i){var a=e._currentElement;if(t!==a||null==t._owner){var u=o.shouldUpdateRefs(a,t);u&&o.detachRefs(e,a),e.receiveComponent(t,n,i),u&&n.getReactMountReady().enqueue(r,e)}},performUpdateIfNecessary:function(e,t){e.performUpdateIfNecessary(t)}});t.exports=i},{56:56,80:80}],80:[function(e,t,n){"use strict";function r(e,t,n){"function"==typeof e?e(t.getPublicInstance()):i.addComponentAsRefTo(t,e,n)}function o(e,t,n){"function"==typeof e?e(null):i.removeComponentAsRefFrom(t,e,n)}var i=e(72),a={};a.attachRefs=function(e,t){var n=t.ref;null!=n&&r(n,e,t._owner)},a.shouldUpdateRefs=function(e,t){return t._owner!==e._owner||t.ref!==e.ref},a.detachRefs=function(e,t){var n=t.ref;null!=n&&o(n,e,t._owner)},t.exports=a},{72:72}],81:[function(e,t,n){"use strict";var r={injectCreateReactRootIndex:function(e){o.createReactRootIndex=e}},o={createReactRootIndex:null,injection:r};t.exports=o},{}],82:[function(e,t,n){"use strict";function r(e){p(i.isValidElement(e));var t;try{var n=a.createReactRootID();return t=s.getPooled(!1),t.perform(function(){var r=c(e,null),o=r.mountComponent(n,t,l);return u.addChecksumToMarkup(o)},null)}finally{s.release(t)}}function o(e){p(i.isValidElement(e));var t;try{var n=a.createReactRootID();return t=s.getPooled(!0),t.perform(function(){var r=c(e,null);return r.mountComponent(n,t,l)},null)}finally{s.release(t)}}var i=e(55),a=e(64),u=e(67),s=e(83),l=e(113),c=e(132),p=e(133);t.exports={renderToString:r,renderToStaticMarkup:o}},{113:113,132:132,133:133,55:55,64:64,67:67,83:83}],83:[function(e,t,n){"use strict";function r(e){this.reinitializeTransaction(),this.renderToStaticMarkup=e,this.reactMountReady=i.getPooled(null),this.putListenerQueue=a.getPooled()}var o=e(28),i=e(6),a=e(77),u=e(101),s=e(27),l=e(112),c={initialize:function(){this.reactMountReady.reset()},close:l},p={initialize:function(){this.putListenerQueue.reset()},close:l},d=[p,c],f={getTransactionWrappers:function(){return d},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){i.release(this.reactMountReady),this.reactMountReady=null,a.release(this.putListenerQueue),this.putListenerQueue=null}};s(r.prototype,u.Mixin,f),o.addPoolingTo(r),t.exports=r},{101:101,112:112,27:27,28:28,6:6,77:77}],84:[function(e,t,n){"use strict";function r(e){e!==i.currentlyMountingInstance&&l.enqueueUpdate(e)}function o(e,t){p(null==a.current);var n=s.get(e);return n?n===i.currentlyUnmountingInstance?null:n:null}var i=e(66),a=e(39),u=e(55),s=e(65),l=e(85),c=e(27),p=e(133),d=(e(150),{enqueueCallback:function(e,t){p("function"==typeof t);var n=o(e);return n&&n!==i.currentlyMountingInstance?(n._pendingCallbacks?n._pendingCallbacks.push(t):n._pendingCallbacks=[t],void r(n)):null},enqueueCallbackInternal:function(e,t){p("function"==typeof t),e._pendingCallbacks?e._pendingCallbacks.push(t):e._pendingCallbacks=[t],r(e)},enqueueForceUpdate:function(e){var t=o(e,"forceUpdate");t&&(t._pendingForceUpdate=!0,r(t))},enqueueReplaceState:function(e,t){var n=o(e,"replaceState");n&&(n._pendingStateQueue=[t],n._pendingReplaceState=!0,r(n))},enqueueSetState:function(e,t){var n=o(e,"setState");if(n){var i=n._pendingStateQueue||(n._pendingStateQueue=[]);i.push(t),r(n)}},enqueueSetProps:function(e,t){var n=o(e,"setProps");if(n){p(n._isTopLevel);var i=n._pendingElement||n._currentElement,a=c({},i.props,t);n._pendingElement=u.cloneAndReplaceProps(i,a),r(n)}},enqueueReplaceProps:function(e,t){var n=o(e,"replaceProps");if(n){p(n._isTopLevel);var i=n._pendingElement||n._currentElement;n._pendingElement=u.cloneAndReplaceProps(i,t),r(n)}},enqueueElementInternal:function(e,t){e._pendingElement=t,r(e)}});t.exports=d},{133:133,150:150,27:27,39:39,55:55,65:65,66:66,85:85}],85:[function(e,t,n){"use strict";function r(){v(N.ReactReconcileTransaction&&E)}function o(){this.reinitializeTransaction(),this.dirtyComponentsLength=null,this.callbackQueue=c.getPooled(),this.reconcileTransaction=N.ReactReconcileTransaction.getPooled()}function i(e,t,n,o,i){r(),E.batchedUpdates(e,t,n,o,i)}function a(e,t){return e._mountOrder-t._mountOrder}function u(e){var t=e.dirtyComponentsLength;v(t===g.length),g.sort(a);for(var n=0;t>n;n++){var r=g[n],o=r._pendingCallbacks;if(r._pendingCallbacks=null,f.performUpdateIfNecessary(r,e.reconcileTransaction),o)for(var i=0;i<o.length;i++)e.callbackQueue.enqueue(o[i],r.getPublicInstance())}}function s(e){return r(),E.isBatchingUpdates?void g.push(e):void E.batchedUpdates(s,e)}function l(e,t){v(E.isBatchingUpdates),y.enqueue(e,t),C=!0}var c=e(6),p=e(28),d=(e(39),e(73)),f=e(79),h=e(101),m=e(27),v=e(133),g=(e(150),[]),y=c.getPooled(),C=!1,E=null,b={initialize:function(){this.dirtyComponentsLength=g.length},close:function(){this.dirtyComponentsLength!==g.length?(g.splice(0,this.dirtyComponentsLength),D()):g.length=0}},_={initialize:function(){this.callbackQueue.reset()},close:function(){this.callbackQueue.notifyAll()}},x=[b,_];m(o.prototype,h.Mixin,{getTransactionWrappers:function(){return x},destructor:function(){this.dirtyComponentsLength=null,c.release(this.callbackQueue),this.callbackQueue=null,N.ReactReconcileTransaction.release(this.reconcileTransaction),this.reconcileTransaction=null},perform:function(e,t,n){return h.Mixin.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,e,t,n)}}),p.addPoolingTo(o);var D=function(){for(;g.length||C;){if(g.length){var e=o.getPooled();e.perform(u,null,e),o.release(e)}if(C){C=!1;var t=y;y=c.getPooled(),t.notifyAll(),c.release(t)}}};D=d.measure("ReactUpdates","flushBatchedUpdates",D);var M={injectReconcileTransaction:function(e){v(e),N.ReactReconcileTransaction=e},injectBatchingStrategy:function(e){v(e),v("function"==typeof e.batchedUpdates),v("boolean"==typeof e.isBatchingUpdates),E=e}},N={ReactReconcileTransaction:null,batchedUpdates:i,enqueueUpdate:s,flushBatchedUpdates:D,injection:M,asap:l};t.exports=N},{101:101,133:133,150:150,27:27,28:28,39:39,6:6,73:73,79:79}],86:[function(e,t,n){"use strict";var r=e(10),o=r.injection.MUST_USE_ATTRIBUTE,i={Properties:{clipPath:o,cx:o,cy:o,d:o,dx:o,dy:o,fill:o,fillOpacity:o,fontFamily:o,fontSize:o,fx:o,fy:o,gradientTransform:o,gradientUnits:o,markerEnd:o,markerMid:o,markerStart:o,offset:o,opacity:o,patternContentUnits:o,patternUnits:o,points:o,preserveAspectRatio:o,r:o,rx:o,ry:o,spreadMethod:o,stopColor:o,stopOpacity:o,stroke:o,strokeDasharray:o,strokeLinecap:o,strokeOpacity:o,strokeWidth:o,textAnchor:o,transform:o,version:o,viewBox:o,x1:o,x2:o,x:o,y1:o,y2:o,y:o},DOMAttributeNames:{clipPath:"clip-path",fillOpacity:"fill-opacity",fontFamily:"font-family",fontSize:"font-size",gradientTransform:"gradientTransform",gradientUnits:"gradientUnits",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",patternContentUnits:"patternContentUnits",patternUnits:"patternUnits",preserveAspectRatio:"preserveAspectRatio",spreadMethod:"spreadMethod",stopColor:"stop-color",stopOpacity:"stop-opacity",strokeDasharray:"stroke-dasharray",strokeLinecap:"stroke-linecap",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",viewBox:"viewBox"}};t.exports=i},{10:10}],87:[function(e,t,n){"use strict";function r(e){if("selectionStart"in e&&u.hasSelectionCapabilities(e))return{start:e.selectionStart,end:e.selectionEnd};if(window.getSelection){var t=window.getSelection();return{anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}}if(document.selection){var n=document.selection.createRange();return{parentElement:n.parentElement(),text:n.text,top:n.boundingTop,left:n.boundingLeft}}}function o(e){if(y||null==m||m!==l())return null;var t=r(m);if(!g||!d(g,t)){g=t;var n=s.getPooled(h.select,v,e);return n.type="select",n.target=m,a.accumulateTwoPhaseDispatches(n),n}}var i=e(15),a=e(20),u=e(63),s=e(93),l=e(119),c=e(136),p=e(139),d=e(146),f=i.topLevelTypes,h={select:{phasedRegistrationNames:{bubbled:p({onSelect:null}),captured:p({onSelectCapture:null})},dependencies:[f.topBlur,f.topContextMenu,f.topFocus,f.topKeyDown,f.topMouseDown,f.topMouseUp,f.topSelectionChange]
}},m=null,v=null,g=null,y=!1,C={eventTypes:h,extractEvents:function(e,t,n,r){switch(e){case f.topFocus:(c(t)||"true"===t.contentEditable)&&(m=t,v=n,g=null);break;case f.topBlur:m=null,v=null,g=null;break;case f.topMouseDown:y=!0;break;case f.topContextMenu:case f.topMouseUp:return y=!1,o(r);case f.topSelectionChange:case f.topKeyDown:case f.topKeyUp:return o(r)}}};t.exports=C},{119:119,136:136,139:139,146:146,15:15,20:20,63:63,93:93}],88:[function(e,t,n){"use strict";var r=Math.pow(2,53),o={createReactRootIndex:function(){return Math.ceil(Math.random()*r)}};t.exports=o},{}],89:[function(e,t,n){"use strict";var r=e(15),o=e(19),i=e(20),a=e(90),u=e(93),s=e(94),l=e(96),c=e(97),p=e(92),d=e(98),f=e(99),h=e(100),m=e(120),v=e(133),g=e(139),y=(e(150),r.topLevelTypes),C={blur:{phasedRegistrationNames:{bubbled:g({onBlur:!0}),captured:g({onBlurCapture:!0})}},click:{phasedRegistrationNames:{bubbled:g({onClick:!0}),captured:g({onClickCapture:!0})}},contextMenu:{phasedRegistrationNames:{bubbled:g({onContextMenu:!0}),captured:g({onContextMenuCapture:!0})}},copy:{phasedRegistrationNames:{bubbled:g({onCopy:!0}),captured:g({onCopyCapture:!0})}},cut:{phasedRegistrationNames:{bubbled:g({onCut:!0}),captured:g({onCutCapture:!0})}},doubleClick:{phasedRegistrationNames:{bubbled:g({onDoubleClick:!0}),captured:g({onDoubleClickCapture:!0})}},drag:{phasedRegistrationNames:{bubbled:g({onDrag:!0}),captured:g({onDragCapture:!0})}},dragEnd:{phasedRegistrationNames:{bubbled:g({onDragEnd:!0}),captured:g({onDragEndCapture:!0})}},dragEnter:{phasedRegistrationNames:{bubbled:g({onDragEnter:!0}),captured:g({onDragEnterCapture:!0})}},dragExit:{phasedRegistrationNames:{bubbled:g({onDragExit:!0}),captured:g({onDragExitCapture:!0})}},dragLeave:{phasedRegistrationNames:{bubbled:g({onDragLeave:!0}),captured:g({onDragLeaveCapture:!0})}},dragOver:{phasedRegistrationNames:{bubbled:g({onDragOver:!0}),captured:g({onDragOverCapture:!0})}},dragStart:{phasedRegistrationNames:{bubbled:g({onDragStart:!0}),captured:g({onDragStartCapture:!0})}},drop:{phasedRegistrationNames:{bubbled:g({onDrop:!0}),captured:g({onDropCapture:!0})}},focus:{phasedRegistrationNames:{bubbled:g({onFocus:!0}),captured:g({onFocusCapture:!0})}},input:{phasedRegistrationNames:{bubbled:g({onInput:!0}),captured:g({onInputCapture:!0})}},keyDown:{phasedRegistrationNames:{bubbled:g({onKeyDown:!0}),captured:g({onKeyDownCapture:!0})}},keyPress:{phasedRegistrationNames:{bubbled:g({onKeyPress:!0}),captured:g({onKeyPressCapture:!0})}},keyUp:{phasedRegistrationNames:{bubbled:g({onKeyUp:!0}),captured:g({onKeyUpCapture:!0})}},load:{phasedRegistrationNames:{bubbled:g({onLoad:!0}),captured:g({onLoadCapture:!0})}},error:{phasedRegistrationNames:{bubbled:g({onError:!0}),captured:g({onErrorCapture:!0})}},mouseDown:{phasedRegistrationNames:{bubbled:g({onMouseDown:!0}),captured:g({onMouseDownCapture:!0})}},mouseMove:{phasedRegistrationNames:{bubbled:g({onMouseMove:!0}),captured:g({onMouseMoveCapture:!0})}},mouseOut:{phasedRegistrationNames:{bubbled:g({onMouseOut:!0}),captured:g({onMouseOutCapture:!0})}},mouseOver:{phasedRegistrationNames:{bubbled:g({onMouseOver:!0}),captured:g({onMouseOverCapture:!0})}},mouseUp:{phasedRegistrationNames:{bubbled:g({onMouseUp:!0}),captured:g({onMouseUpCapture:!0})}},paste:{phasedRegistrationNames:{bubbled:g({onPaste:!0}),captured:g({onPasteCapture:!0})}},reset:{phasedRegistrationNames:{bubbled:g({onReset:!0}),captured:g({onResetCapture:!0})}},scroll:{phasedRegistrationNames:{bubbled:g({onScroll:!0}),captured:g({onScrollCapture:!0})}},submit:{phasedRegistrationNames:{bubbled:g({onSubmit:!0}),captured:g({onSubmitCapture:!0})}},touchCancel:{phasedRegistrationNames:{bubbled:g({onTouchCancel:!0}),captured:g({onTouchCancelCapture:!0})}},touchEnd:{phasedRegistrationNames:{bubbled:g({onTouchEnd:!0}),captured:g({onTouchEndCapture:!0})}},touchMove:{phasedRegistrationNames:{bubbled:g({onTouchMove:!0}),captured:g({onTouchMoveCapture:!0})}},touchStart:{phasedRegistrationNames:{bubbled:g({onTouchStart:!0}),captured:g({onTouchStartCapture:!0})}},wheel:{phasedRegistrationNames:{bubbled:g({onWheel:!0}),captured:g({onWheelCapture:!0})}}},E={topBlur:C.blur,topClick:C.click,topContextMenu:C.contextMenu,topCopy:C.copy,topCut:C.cut,topDoubleClick:C.doubleClick,topDrag:C.drag,topDragEnd:C.dragEnd,topDragEnter:C.dragEnter,topDragExit:C.dragExit,topDragLeave:C.dragLeave,topDragOver:C.dragOver,topDragStart:C.dragStart,topDrop:C.drop,topError:C.error,topFocus:C.focus,topInput:C.input,topKeyDown:C.keyDown,topKeyPress:C.keyPress,topKeyUp:C.keyUp,topLoad:C.load,topMouseDown:C.mouseDown,topMouseMove:C.mouseMove,topMouseOut:C.mouseOut,topMouseOver:C.mouseOver,topMouseUp:C.mouseUp,topPaste:C.paste,topReset:C.reset,topScroll:C.scroll,topSubmit:C.submit,topTouchCancel:C.touchCancel,topTouchEnd:C.touchEnd,topTouchMove:C.touchMove,topTouchStart:C.touchStart,topWheel:C.wheel};for(var b in E)E[b].dependencies=[b];var _={eventTypes:C,executeDispatch:function(e,t,n){var r=o.executeDispatch(e,t,n);r===!1&&(e.stopPropagation(),e.preventDefault())},extractEvents:function(e,t,n,r){var o=E[e];if(!o)return null;var g;switch(e){case y.topInput:case y.topLoad:case y.topError:case y.topReset:case y.topSubmit:g=u;break;case y.topKeyPress:if(0===m(r))return null;case y.topKeyDown:case y.topKeyUp:g=l;break;case y.topBlur:case y.topFocus:g=s;break;case y.topClick:if(2===r.button)return null;case y.topContextMenu:case y.topDoubleClick:case y.topMouseDown:case y.topMouseMove:case y.topMouseOut:case y.topMouseOver:case y.topMouseUp:g=c;break;case y.topDrag:case y.topDragEnd:case y.topDragEnter:case y.topDragExit:case y.topDragLeave:case y.topDragOver:case y.topDragStart:case y.topDrop:g=p;break;case y.topTouchCancel:case y.topTouchEnd:case y.topTouchMove:case y.topTouchStart:g=d;break;case y.topScroll:g=f;break;case y.topWheel:g=h;break;case y.topCopy:case y.topCut:case y.topPaste:g=a}v(g);var C=g.getPooled(o,n,r);return i.accumulateTwoPhaseDispatches(C),C}};t.exports=_},{100:100,120:120,133:133,139:139,15:15,150:150,19:19,20:20,90:90,92:92,93:93,94:94,96:96,97:97,98:98,99:99}],90:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(93),i={clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}};o.augmentClass(r,i),t.exports=r},{93:93}],91:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(93),i={data:null};o.augmentClass(r,i),t.exports=r},{93:93}],92:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(97),i={dataTransfer:null};o.augmentClass(r,i),t.exports=r},{97:97}],93:[function(e,t,n){"use strict";function r(e,t,n){this.dispatchConfig=e,this.dispatchMarker=t,this.nativeEvent=n;var r=this.constructor.Interface;for(var o in r)if(r.hasOwnProperty(o)){var i=r[o];i?this[o]=i(n):this[o]=n[o]}var u=null!=n.defaultPrevented?n.defaultPrevented:n.returnValue===!1;u?this.isDefaultPrevented=a.thatReturnsTrue:this.isDefaultPrevented=a.thatReturnsFalse,this.isPropagationStopped=a.thatReturnsFalse}var o=e(28),i=e(27),a=e(112),u=e(123),s={type:null,target:u,currentTarget:a.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};i(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e.preventDefault?e.preventDefault():e.returnValue=!1,this.isDefaultPrevented=a.thatReturnsTrue},stopPropagation:function(){var e=this.nativeEvent;e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,this.isPropagationStopped=a.thatReturnsTrue},persist:function(){this.isPersistent=a.thatReturnsTrue},isPersistent:a.thatReturnsFalse,destructor:function(){var e=this.constructor.Interface;for(var t in e)this[t]=null;this.dispatchConfig=null,this.dispatchMarker=null,this.nativeEvent=null}}),r.Interface=s,r.augmentClass=function(e,t){var n=this,r=Object.create(n.prototype);i(r,e.prototype),e.prototype=r,e.prototype.constructor=e,e.Interface=i({},n.Interface,t),e.augmentClass=n.augmentClass,o.addPoolingTo(e,o.threeArgumentPooler)},o.addPoolingTo(r,o.threeArgumentPooler),t.exports=r},{112:112,123:123,27:27,28:28}],94:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(99),i={relatedTarget:null};o.augmentClass(r,i),t.exports=r},{99:99}],95:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(93),i={data:null};o.augmentClass(r,i),t.exports=r},{93:93}],96:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(99),i=e(120),a=e(121),u=e(122),s={key:a,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:u,charCode:function(e){return"keypress"===e.type?i(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?i(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}};o.augmentClass(r,s),t.exports=r},{120:120,121:121,122:122,99:99}],97:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(99),i=e(102),a=e(122),u={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:a,button:function(e){var t=e.button;return"which"in e?t:2===t?2:4===t?1:0},buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},pageX:function(e){return"pageX"in e?e.pageX:e.clientX+i.currentScrollLeft},pageY:function(e){return"pageY"in e?e.pageY:e.clientY+i.currentScrollTop}};o.augmentClass(r,u),t.exports=r},{102:102,122:122,99:99}],98:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(99),i=e(122),a={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:i};o.augmentClass(r,a),t.exports=r},{122:122,99:99}],99:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(93),i=e(123),a={view:function(e){if(e.view)return e.view;var t=i(e);if(null!=t&&t.window===t)return t;var n=t.ownerDocument;return n?n.defaultView||n.parentWindow:window},detail:function(e){return e.detail||0}};o.augmentClass(r,a),t.exports=r},{123:123,93:93}],100:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(97),i={deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null};o.augmentClass(r,i),t.exports=r},{97:97}],101:[function(e,t,n){"use strict";var r=e(133),o={reinitializeTransaction:function(){this.transactionWrappers=this.getTransactionWrappers(),this.wrapperInitData?this.wrapperInitData.length=0:this.wrapperInitData=[],this._isInTransaction=!1},_isInTransaction:!1,getTransactionWrappers:null,isInTransaction:function(){return!!this._isInTransaction},perform:function(e,t,n,o,i,a,u,s){r(!this.isInTransaction());var l,c;try{this._isInTransaction=!0,l=!0,this.initializeAll(0),c=e.call(t,n,o,i,a,u,s),l=!1}finally{try{if(l)try{this.closeAll(0)}catch(p){}else this.closeAll(0)}finally{this._isInTransaction=!1}}return c},initializeAll:function(e){for(var t=this.transactionWrappers,n=e;n<t.length;n++){var r=t[n];try{this.wrapperInitData[n]=i.OBSERVED_ERROR,this.wrapperInitData[n]=r.initialize?r.initialize.call(this):null}finally{if(this.wrapperInitData[n]===i.OBSERVED_ERROR)try{this.initializeAll(n+1)}catch(o){}}}},closeAll:function(e){r(this.isInTransaction());for(var t=this.transactionWrappers,n=e;n<t.length;n++){var o,a=t[n],u=this.wrapperInitData[n];try{o=!0,u!==i.OBSERVED_ERROR&&a.close&&a.close.call(this,u),o=!1}finally{if(o)try{this.closeAll(n+1)}catch(s){}}}this.wrapperInitData.length=0}},i={Mixin:o,OBSERVED_ERROR:{}};t.exports=i},{133:133}],102:[function(e,t,n){"use strict";var r={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function(e){r.currentScrollLeft=e.x,r.currentScrollTop=e.y}};t.exports=r},{}],103:[function(e,t,n){"use strict";function r(e,t){if(o(null!=t),null==e)return t;var n=Array.isArray(e),r=Array.isArray(t);return n&&r?(e.push.apply(e,t),e):n?(e.push(t),e):r?[e].concat(t):[e,t]}var o=e(133);t.exports=r},{133:133}],104:[function(e,t,n){"use strict";function r(e){for(var t=1,n=0,r=0;r<e.length;r++)t=(t+e.charCodeAt(r))%o,n=(n+t)%o;return t|n<<16}var o=65521;t.exports=r},{}],105:[function(e,t,n){function r(e){return e.replace(o,function(e,t){return t.toUpperCase()})}var o=/-(.)/g;t.exports=r},{}],106:[function(e,t,n){"use strict";function r(e){return o(e.replace(i,"ms-"))}var o=e(105),i=/^-ms-/;t.exports=r},{105:105}],107:[function(e,t,n){function r(e,t){return e&&t?e===t?!0:o(e)?!1:o(t)?r(e,t.parentNode):e.contains?e.contains(t):e.compareDocumentPosition?!!(16&e.compareDocumentPosition(t)):!1:!1}var o=e(137);t.exports=r},{137:137}],108:[function(e,t,n){function r(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"length"in e&&!("setInterval"in e)&&"number"!=typeof e.nodeType&&(Array.isArray(e)||"callee"in e||"item"in e)}function o(e){return r(e)?Array.isArray(e)?e.slice():i(e):[e]}var i=e(148);t.exports=o},{148:148}],109:[function(e,t,n){"use strict";function r(e){var t=i.createFactory(e),n=o.createClass({tagName:e.toUpperCase(),displayName:"ReactFullPageComponent"+e,componentWillUnmount:function(){a(!1)},render:function(){return t(this.props)}});return n}var o=e(33),i=e(55),a=e(133);t.exports=r},{133:133,33:33,55:55}],110:[function(e,t,n){function r(e){var t=e.match(c);return t&&t[1].toLowerCase()}function o(e,t){var n=l;s(!!l);var o=r(e),i=o&&u(o);if(i){n.innerHTML=i[1]+e+i[2];for(var c=i[0];c--;)n=n.lastChild}else n.innerHTML=e;var p=n.getElementsByTagName("script");p.length&&(s(t),a(p).forEach(t));for(var d=a(n.childNodes);n.lastChild;)n.removeChild(n.lastChild);return d}var i=e(21),a=e(108),u=e(125),s=e(133),l=i.canUseDOM?document.createElement("div"):null,c=/^\s*<(\w+)/;t.exports=o},{108:108,125:125,133:133,21:21}],111:[function(e,t,n){"use strict";function r(e,t){var n=null==t||"boolean"==typeof t||""===t;if(n)return"";var r=isNaN(t);return r||0===t||i.hasOwnProperty(e)&&i[e]?""+t:("string"==typeof t&&(t=t.trim()),t+"px")}var o=e(4),i=o.isUnitlessNumber;t.exports=r},{4:4}],112:[function(e,t,n){function r(e){return function(){return e}}function o(){}o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},t.exports=o},{}],113:[function(e,t,n){"use strict";var r={};t.exports=r},{}],114:[function(e,t,n){"use strict";function r(e){return i[e]}function o(e){return(""+e).replace(a,r)}var i={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},a=/[&><"']/g;t.exports=o},{}],115:[function(e,t,n){"use strict";function r(e){return null==e?null:u(e)?e:o.has(e)?i.getNodeFromInstance(e):(a(null==e.render||"function"!=typeof e.render),void a(!1))}{var o=(e(39),e(65)),i=e(68),a=e(133),u=e(135);e(150)}t.exports=r},{133:133,135:135,150:150,39:39,65:65,68:68}],116:[function(e,t,n){"use strict";function r(e,t,n){var r=e,o=!r.hasOwnProperty(n);o&&null!=t&&(r[n]=t)}function o(e){if(null==e)return e;var t={};return i(e,r,t),t}{var i=e(149);e(150)}t.exports=o},{149:149,150:150}],117:[function(e,t,n){"use strict";function r(e){try{e.focus()}catch(t){}}t.exports=r},{}],118:[function(e,t,n){"use strict";var r=function(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)};t.exports=r},{}],119:[function(e,t,n){function r(){try{return document.activeElement||document.body}catch(e){return document.body}}t.exports=r},{}],120:[function(e,t,n){"use strict";function r(e){var t,n=e.keyCode;return"charCode"in e?(t=e.charCode,0===t&&13===n&&(t=13)):t=n,t>=32||13===t?t:0}t.exports=r},{}],121:[function(e,t,n){"use strict";function r(e){if(e.key){var t=i[e.key]||e.key;if("Unidentified"!==t)return t}if("keypress"===e.type){var n=o(e);return 13===n?"Enter":String.fromCharCode(n)}return"keydown"===e.type||"keyup"===e.type?a[e.keyCode]||"Unidentified":""}var o=e(120),i={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};t.exports=r},{120:120}],122:[function(e,t,n){"use strict";function r(e){var t=this,n=t.nativeEvent;if(n.getModifierState)return n.getModifierState(e);var r=i[e];return r?!!n[r]:!1}function o(e){return r}var i={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};t.exports=o},{}],123:[function(e,t,n){"use strict";function r(e){var t=e.target||e.srcElement||window;return 3===t.nodeType?t.parentNode:t}t.exports=r},{}],124:[function(e,t,n){"use strict";function r(e){var t=e&&(o&&e[o]||e[i]);return"function"==typeof t?t:void 0}var o="function"==typeof Symbol&&Symbol.iterator,i="@@iterator";t.exports=r},{}],125:[function(e,t,n){function r(e){return i(!!a),d.hasOwnProperty(e)||(e="*"),u.hasOwnProperty(e)||("*"===e?a.innerHTML="<link />":a.innerHTML="<"+e+"></"+e+">",u[e]=!a.firstChild),u[e]?d[e]:null}var o=e(21),i=e(133),a=o.canUseDOM?document.createElement("div"):null,u={circle:!0,clipPath:!0,defs:!0,ellipse:!0,g:!0,line:!0,linearGradient:!0,path:!0,polygon:!0,polyline:!0,radialGradient:!0,rect:!0,stop:!0,text:!0},s=[1,'<select multiple="true">',"</select>"],l=[1,"<table>","</table>"],c=[3,"<table><tbody><tr>","</tr></tbody></table>"],p=[1,"<svg>","</svg>"],d={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:s,option:s,caption:l,colgroup:l,tbody:l,tfoot:l,thead:l,td:c,th:c,circle:p,clipPath:p,defs:p,ellipse:p,g:p,line:p,linearGradient:p,path:p,polygon:p,polyline:p,radialGradient:p,rect:p,stop:p,text:p};t.exports=r},{133:133,21:21}],126:[function(e,t,n){"use strict";function r(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function o(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}function i(e,t){for(var n=r(e),i=0,a=0;n;){if(3===n.nodeType){if(a=i+n.textContent.length,t>=i&&a>=t)return{node:n,offset:t-i};i=a}n=r(o(n))}}t.exports=i},{}],127:[function(e,t,n){"use strict";function r(e){return e?e.nodeType===o?e.documentElement:e.firstChild:null}var o=9;t.exports=r},{}],128:[function(e,t,n){"use strict";function r(){return!i&&o.canUseDOM&&(i="textContent"in document.documentElement?"textContent":"innerText"),i}var o=e(21),i=null;t.exports=r},{21:21}],129:[function(e,t,n){"use strict";function r(e){return e===window?{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}:{x:e.scrollLeft,y:e.scrollTop}}t.exports=r},{}],130:[function(e,t,n){function r(e){return e.replace(o,"-$1").toLowerCase()}var o=/([A-Z])/g;t.exports=r},{}],131:[function(e,t,n){"use strict";function r(e){return o(e).replace(i,"-ms-")}var o=e(130),i=/^ms-/;t.exports=r},{130:130}],132:[function(e,t,n){"use strict";function r(e){return"function"==typeof e&&"undefined"!=typeof e.prototype&&"function"==typeof e.prototype.mountComponent&&"function"==typeof e.prototype.receiveComponent}function o(e,t){var n;if((null===e||e===!1)&&(e=a.emptyElement),"object"==typeof e){var o=e;n=t===o.type&&"string"==typeof o.type?u.createInternalComponent(o):r(o.type)?new o.type(o):new c}else"string"==typeof e||"number"==typeof e?n=u.createInstanceForText(e):l(!1);return n.construct(e),n._mountIndex=0,n._mountImage=null,n}var i=e(37),a=e(57),u=e(71),s=e(27),l=e(133),c=(e(150),function(){});s(c.prototype,i.Mixin,{_instantiateReactComponent:o}),t.exports=o},{133:133,150:150,27:27,37:37,57:57,71:71}],133:[function(e,t,n){"use strict";var r=function(e,t,n,r,o,i,a,u){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,i,a,u],c=0;s=new Error("Invariant Violation: "+t.replace(/%s/g,function(){return l[c++]}))}throw s.framesToPop=1,s}};t.exports=r},{}],134:[function(e,t,n){"use strict";function r(e,t){if(!i.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,r=n in document;if(!r){var a=document.createElement("div");a.setAttribute(n,"return;"),r="function"==typeof a[n]}return!r&&o&&"wheel"===e&&(r=document.implementation.hasFeature("Events.wheel","3.0")),r}var o,i=e(21);i.canUseDOM&&(o=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0),t.exports=r},{21:21}],135:[function(e,t,n){function r(e){return!(!e||!("function"==typeof Node?e instanceof Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}t.exports=r},{}],136:[function(e,t,n){"use strict";function r(e){return e&&("INPUT"===e.nodeName&&o[e.type]||"TEXTAREA"===e.nodeName)}var o={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};t.exports=r},{}],137:[function(e,t,n){function r(e){return o(e)&&3==e.nodeType}var o=e(135);t.exports=r},{135:135}],138:[function(e,t,n){"use strict";var r=e(133),o=function(e){var t,n={};r(e instanceof Object&&!Array.isArray(e));for(t in e)e.hasOwnProperty(t)&&(n[t]=t);return n};t.exports=o},{133:133}],139:[function(e,t,n){var r=function(e){var t;for(t in e)if(e.hasOwnProperty(t))return t;return null};t.exports=r},{}],140:[function(e,t,n){"use strict";function r(e,t,n){if(!e)return null;var r={};for(var i in e)o.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}var o=Object.prototype.hasOwnProperty;t.exports=r},{}],141:[function(e,t,n){"use strict";function r(e){var t={};return function(n){return t.hasOwnProperty(n)||(t[n]=e.call(this,n)),t[n]}}t.exports=r},{}],142:[function(e,t,n){"use strict";function r(e){return i(o.isValidElement(e)),e}var o=e(55),i=e(133);t.exports=r},{133:133,55:55}],143:[function(e,t,n){"use strict";function r(e){return'"'+o(e)+'"'}var o=e(114);t.exports=r},{114:114}],144:[function(e,t,n){"use strict";var r=e(21),o=/^[ \r\n\t\f]/,i=/<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,a=function(e,t){e.innerHTML=t};if("undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction&&(a=function(e,t){MSApp.execUnsafeLocalFunction(function(){e.innerHTML=t})}),r.canUseDOM){var u=document.createElement("div");u.innerHTML=" ",""===u.innerHTML&&(a=function(e,t){if(e.parentNode&&e.parentNode.replaceChild(e,e),o.test(t)||"<"===t[0]&&i.test(t)){e.innerHTML="\ufeff"+t;var n=e.firstChild;1===n.data.length?e.removeChild(n):n.deleteData(0,1)}else e.innerHTML=t})}t.exports=a},{21:21}],145:[function(e,t,n){"use strict";var r=e(21),o=e(114),i=e(144),a=function(e,t){e.textContent=t};r.canUseDOM&&("textContent"in document.documentElement||(a=function(e,t){i(e,o(t))})),t.exports=a},{114:114,144:144,21:21}],146:[function(e,t,n){"use strict";function r(e,t){if(e===t)return!0;var n;for(n in e)if(e.hasOwnProperty(n)&&(!t.hasOwnProperty(n)||e[n]!==t[n]))return!1;for(n in t)if(t.hasOwnProperty(n)&&!e.hasOwnProperty(n))return!1;return!0}t.exports=r},{}],147:[function(e,t,n){"use strict";function r(e,t){if(null!=e&&null!=t){var n=typeof e,r=typeof t;if("string"===n||"number"===n)return"string"===r||"number"===r;if("object"===r&&e.type===t.type&&e.key===t.key){var o=e._owner===t._owner;return o}}return!1}e(150);t.exports=r},{150:150}],148:[function(e,t,n){function r(e){var t=e.length;if(o(!Array.isArray(e)&&("object"==typeof e||"function"==typeof e)),o("number"==typeof t),o(0===t||t-1 in e),e.hasOwnProperty)try{return Array.prototype.slice.call(e)}catch(n){}for(var r=Array(t),i=0;t>i;i++)r[i]=e[i];return r}var o=e(133);t.exports=r},{133:133}],149:[function(e,t,n){"use strict";function r(e){return v[e]}function o(e,t){return e&&null!=e.key?a(e.key):t.toString(36)}function i(e){return(""+e).replace(g,r)}function a(e){return"$"+i(e)}function u(e,t,n,r,i){var s=typeof e;if(("undefined"===s||"boolean"===s)&&(e=null),null===e||"string"===s||"number"===s||l.isValidElement(e))return r(i,e,""===t?h+o(e,0):t,n),1;var p,v,g,y=0;if(Array.isArray(e))for(var C=0;C<e.length;C++)p=e[C],v=(""!==t?t+m:h)+o(p,C),g=n+y,y+=u(p,v,g,r,i);else{var E=d(e);if(E){var b,_=E.call(e);if(E!==e.entries)for(var x=0;!(b=_.next()).done;)p=b.value,v=(""!==t?t+m:h)+o(p,x++),g=n+y,y+=u(p,v,g,r,i);else for(;!(b=_.next()).done;){var D=b.value;D&&(p=D[1],v=(""!==t?t+m:h)+a(D[0])+m+o(p,0),g=n+y,y+=u(p,v,g,r,i))}}else if("object"===s){f(1!==e.nodeType);var M=c.extract(e);for(var N in M)M.hasOwnProperty(N)&&(p=M[N],v=(""!==t?t+m:h)+a(N)+m+o(p,0),g=n+y,y+=u(p,v,g,r,i))}}return y}function s(e,t,n){return null==e?0:u(e,"",0,t,n)}var l=e(55),c=e(61),p=e(64),d=e(124),f=e(133),h=(e(150),p.SEPARATOR),m=":",v={"=":"=0",".":"=1",":":"=2"},g=/[=.:]/g;t.exports=s},{124:124,133:133,150:150,55:55,61:61,64:64}],150:[function(e,t,n){"use strict";var r=e(112),o=r;t.exports=o},{112:112}]},{},[1])(1)});
(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define('reflex',['exports', 'react'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.React);
    global.index = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  var _get = function get(_x5, _x6, _x7) { var _again = true; _function: while (_again) { var object = _x5, property = _x6, receiver = _x7; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x5 = parent; _x6 = property; _x7 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _defaults(subClass, superClass); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  if (typeof Symbol === 'undefined') {
    var Symbol = function Symbol(name) {
      return '@@' + name + '#' + Math.random().toString(36).substr(2);
    };
    Symbol['for'] = function (name) {
      return '@@' + name;
    };
  }

  if (typeof WeakMap === 'undefined') {
    var WeakMap;

    (function () {
      var weakMapID = 0;

      WeakMap = (function () {
        var _class = function WeakMap() {
          _classCallCheck(this, _class);

          this.id = 'weak#' + (++weakMapID).toString(36);
        };

        _createClass(_class, [{
          key: 'has',
          value: function has(key) {
            return this.hasOwnProperty.call(key, this.id);
          }
        }, {
          key: 'set',
          value: function set(key, value) {
            key[this.id] = value;
          }
        }, {
          key: 'get',
          value: function get(key) {
            return key[this.id];
          }
        }, {
          key: 'delete',
          value: function _delete(key) {
            delete key[this.id];
          }
        }, {
          key: 'clear',
          value: function clear() {
            this.constructor();
            console.warn('WeakMap polyfill does not release references');
          }
        }]);

        return _class;
      })();
    })();
  }

  // node function constructs a virtual dom nodes. It takes node `tagName`,
  // optional `model` properties and optional `children` and produces instance
  // of the appropriate virtual `Node`.
  var node = function node(tagName, model) {
    var children = arguments[2] === undefined ? NodeList.empty : arguments[2];

    var properties = {};

    if (model) {
      for (var _name in model) {
        if (model.hasOwnProperty(_name)) {
          var value = model[_name];
          if (_name === 'style' && value && value.toJSON) {
            properties[_name] = value.toJSON();
          } else {
            properties[_name] = value;
          }
        }
      }
    }

    properties.children = children;

    return _react.createElement(tagName, properties);
  };

  exports.node = node;
  // Create a function for react supported nodes.
  var html = Object.create(null);
  exports.html = html;
  Object.keys(_react.DOM).forEach(function (tagName) {
    html[tagName] = function (model, children) {
      return node(tagName, model, children);
    };
  });

  // Fragment insntances represents a namespacing facility for
  // entities in virtual dom tree, primarily to group several keyed
  // nodes without wrapping them in an element. This allows different
  // groups of nodes to be joined under the same parent. Namespacing
  // such groups with a `properties.key` is crucial for optimising
  // performance of virtual dom diffing algorithm. Optionally
  // `properties.type` can be passed that will be a tagName of node
  // if fragment is rendered as a root of dom tree, or root of the
  // subtree that is computed lazily by a thunk. `children` argument
  // is an array of nodes that this fragment represents.

  var Fragment = function Fragment(properties, children) {
    _classCallCheck(this, Fragment);

    this.key = properties.key;
    this.type = properties.type || 'x:fragment';
    this.properties = properties;
    this.children = children;

    this._reactFragment = _defineProperty({}, this.key, this.children);
  };

  // Function for constructing fragments of virtual dom tree.
  // Takes `properties.key` for identifying fragment, optional
  // `properties.type` which is used as wrapper node for given
  // `children` if fragment is returned from thunk or is rendered
  // directly.
  var fragment = function fragment(properties, children) {
    return new Fragment(properties, children);
  };

  exports.fragment = fragment;

  var Forwarder = (function () {
    function Forwarder(addressBook, to) {
      _classCallCheck(this, Forwarder);

      this.addressBook = addressBook;
      this.to = to;
    }

    _createClass(Forwarder, [{
      key: 'receive',
      value: function receive(action) {
        this.addressBook[this.to].receive(action);
      }
    }]);

    return Forwarder;
  })();

  // Thunk instances are entities in a virtual dom tree that represent
  // lazily compute sub-trees with built-in caching that avoid re-computing
  // sub-tree when same data is being rendered.

  var Thunk = (function (_React$Component) {
    function Thunk(props, context) {
      _classCallCheck(this, Thunk);

      _get(Object.getPrototypeOf(Thunk.prototype), 'constructor', this).call(this, props, context);
    }

    _inherits(Thunk, _React$Component);

    _createClass(Thunk, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var args = this.props.args;

        var count = args.length;

        var addressBook = new Array(count);
        var params = new Array(count);

        var index = 0;
        while (index < count) {
          var arg = args[index];
          if (arg instanceof Address) {
            addressBook[index] = arg;
            params[index] = new Address(new Forwarder(addressBook, index));
          } else {
            params[index] = arg;
          }
          index = index + 1;
        }

        this.setState({ args: params, addressBook: addressBook });
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(_ref) {
        var after = _ref.args;

        if (profile) {
          console.time(this.props.Key + '.compute');
        }

        var _state = this.state;
        var args = _state.args;
        var addressBook = _state.addressBook;

        var count = after.length;
        var index = 0;
        var isUpdated = false;

        if (args.length !== count) {
          isUpdated = true;
          args.length = count;
          addressBook.length = count;
        }

        while (index < count) {
          var next = after[index];
          var arg = args[index];

          if (next === arg) {} else if (next instanceof Address && arg instanceof Address) {
            // Update adrress book with a new address.
            addressBook[index] = next;
          } else {
            isUpdated = true;

            if (next instanceof Address) {
              addressBook[index] = next;
              args[index] = new Address(this, [redirect(index)]);
            } else {
              args[index] = next;
            }
          }
          index = index + 1;
        }

        if (isUpdated) {
          this.setState({ args: args, addressBook: addressBook });
        }

        if (profile) {
          console.timeEnd(this.props.Key + '.compute');
        }
      }
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(_, state) {
        return state !== this.state;
      }
    }, {
      key: 'render',
      value: function render() {
        if (profile) {
          console.time(this.props.Key + '.render');
        }

        // Store currently operating view to enable cacheing by
        // the view.
        Thunk.context = this.view;

        var args = this.state.args;

        var result = this.view.apply(this, _toConsumableArray(args));

        Thunk.context = null;

        if (profile) {
          console.timeEnd(this.props.Key + '.render');
        }
        return result;
      }
    }], [{
      key: 'for',
      value: function _for(view, key) {
        var ReactComponent = (function (_Thunk) {
          function ReactComponent(props, context) {
            _classCallCheck(this, ReactComponent);

            _get(Object.getPrototypeOf(ReactComponent.prototype), 'constructor', this).call(this, props, context);
            this.view = view;
          }

          _inherits(ReactComponent, _Thunk);

          return ReactComponent;
        })(Thunk);

        ReactComponent.displayName = key.split('@')[0];
        return ReactComponent;
      }
    }]);

    return Thunk;
  })(_react.Component);

  var contextualCache = new WeakMap();
  var contextlessCache = new WeakMap();

  var cache = function cache(f) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var cache = null;
    var changed = false;
    var context = Thunk.context;

    if (context) {
      cache = contextualCache.get(f);
      if (!cache) {
        contextualCache.set(f, cache = new WeakMap());
      }
    } else {
      cache = contextlessCache;
    }

    var memory = cache.get(f);
    if (memory) {
      var input = memory.input;

      var count = input.length;
      var index = 0;
      var _changed = args.length !== count;
      while (!_changed && index < count && !_changed) {
        var past = input[index];
        var current = args[index];

        _changed = current !== past;
        index = index + 1;
      }

      if (_changed) {
        memory.output = f.apply(undefined, args);
        memory.input = args;
      }
    } else {
      memory = { output: f.apply(undefined, args), input: args };
      cache.set(f, memory);
    }

    return memory.output;
  };

  exports.cache = cache;
  // render function provides shortcut for rendering a model with
  // default view function (although custom view function can be
  // passed as second optional argument), but unlike calling view
  // directly result is a thunk, there for it's defers actual computation
  // and makes use of caching to avoid computation when possible.
  var render = function render(key, view) {
    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    var component = view.reactComponent || (view.reactComponent = Thunk['for'](view, key));
    return _react.createElement(component, { key: key, Key: key, args: args });
  };

  exports.render = render;
  var GUID = 0;

  var ParameterizedReceiver = function ParameterizedReceiver(address, read, prefix) {
    return function (event) {
      return address.receive(read.apply(undefined, _toConsumableArray(prefix).concat([event])));
    };
  };

  var Receiver = function Receiver(address, read) {
    return function (event) {
      return address.receive(read(event));
    };
  };

  var Address = (function () {
    function Address(mailbox, forwarders) {
      _classCallCheck(this, Address);

      this.id = ++GUID;
      this.mailbox = mailbox;
      this.forwarders = forwarders;
    }

    _createClass(Address, [{
      key: 'forward',
      value: function forward(anotate) {
        var cache = anotate[Address.cache] || (anotate[Address.cache] = {});

        if (!cache[this.id]) {
          var forwarders = this.forwarders ? [anotate].concat(this.forwarders) : [anotate];
          cache[this.id] = new Address(this.mailbox, forwarders);
        }

        return cache[this.id];
      }
    }, {
      key: 'receive',
      value: function receive(action) {
        if (this.isBlocked && action !== null) {
          (this.queue || (this.queue = [])).push(action);
        } else {
          var forwarders = this.forwarders;

          this.isBlocked = true;
          var ticket = -1;

          // Define a `delivered` flag that is updated at the begining of action
          // delivery and at the end of it. This is so that in finally we can
          // figure out if exception was throw or not.
          var delivered = false;

          while (this.isBlocked) {
            try {
              delivered = false;

              if (action !== null) {
                if (forwarders) {
                  var count = forwarders.length;
                  var index = 0;
                  while (index < count) {
                    action = forwarders[index](action);
                    index = index + 1;
                  }
                }

                this.mailbox.receive(action);

                delivered = true;
              }
            } finally {
              ticket = ticket + 1;
              this.isBlocked = this.queue && this.queue.length > ticket;
              action = this.isBlocked && this.queue[ticket];

              // If failed to deliver (exception was thrown) and address is still
              // blocked that means there are still pending actions to process. In
              // that case we unblock an address remove delivered actions from a
              // queue and re-enter receive loop. This way receive drains action
              // action loop regardless of exceptions that may occur.
              if (!delivered && this.isBlocked) {
                this.isBlocked = false;
                this.queue && this.queue.splice(0, ticket + 1);
                this.receive(action);
              }
            }
          }

          this.queue && this.queue.splice(0);
        }
      }
    }, {
      key: 'send',
      value: function send(action) {
        var _this = this;

        return function (_) {
          return _this.receive(action);
        };
      }
    }, {
      key: 'pass',
      value: function pass(read) {
        if (typeof read !== 'function') {
          throw TypeError('Non function was passed to address.pass');
        }

        for (var _len3 = arguments.length, prefix = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          prefix[_key3 - 1] = arguments[_key3];
        }

        return prefix.length ? ParameterizedReceiver(this, read, prefix) : read['reflex/address-' + this.id] || (read['reflex/address-' + this.id] = Receiver(this, read));
      }
    }]);

    return Address;
  })();

  exports.Address = Address;

  Address.cache = Symbol['for']('reflex/address-book');

  // Program is a root entity of the virtual dom tree that is responsible
  // for computing a virtual dom tree for the `state` via given `view` function
  // and reacting to dispatched actions via given `update` by updating a state
  // and restarting a the same cycle again.

  var Application = (function () {
    function Application(_ref2) {
      var address = _ref2.address;
      var target = _ref2.target;
      var state = _ref2.state;
      var update = _ref2.update;
      var view = _ref2.view;

      _classCallCheck(this, Application);

      this.target = target;
      this.view = view;
      this.update = update;
      this.state = state;
      this.address = address;
      this.render = this.render.bind(this);
    }

    _createClass(Application, [{
      key: 'receive',
      value: function receive(action) {
        this.action = action;
        var state = this.update(this.state, this.action);
        if (state !== this.state) {
          this.state = state;
          this.schedule();
        }
      }
    }, {
      key: 'schedule',
      value: function schedule() {
        if (!this.isScheduled) {
          this.isScheduled = true;
          this.version = requestAnimationFrame(this.render);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        if (profile) {
          console.time('React.render');
        }

        var start = performance.now();

        // It is important to mark `isScheduled` as `false` before doing actual
        // rendering since state changes in effect of reflecting current state
        // won't be handled by this render cycle. For example rendering a state
        // with updated focus will cause `blur` & `focus` events to be dispatched
        // that happen synchronously, and there for another render cycle may be
        // scheduled for which `isScheduled` must be `false`. Attempt to render
        // this state may also cause a runtime exception but even then we would
        // rather attempt to render updated states that end up being blocked
        // forever.
        this.isScheduled = false;
        if (profile) {
          console.time('Application.render');
        }

        this.tree = this.view(this.state, this.address);

        if (profile) {
          console.timeEnd('Application.render');
        }

        if (profile) {
          console.time('React.reconcile');
        }

        _react.render(this.tree, this.target);

        if (profile) {
          console.timeEnd('React.reconcile');
        }

        var end = performance.now();
        var time = end - start;

        if (time > 16) {
          console.warn('Render took ' + time + 'ms & will cause frame drop');
        }

        if (profile) {
          console.timeEnd('React.render');
        }
        return this;
      }
    }]);

    return Application;
  })();

  exports.Application = Application;

  // Function that takes `target` element to continiusly render given `model`
  // into. model's default `update` function is used to update module in response
  // to dispatched actions and model's default `view` function is used to compute
  // dom tree represantation of the model. Optionally custom `update` and `view`
  // functions could be passed to customize render loop.
  var main = function main(target, model) {
    var update = arguments[2] === undefined ? model.constructor.update : arguments[2];
    var view = arguments[3] === undefined ? model.constructor.view : arguments[3];
    return (function () {
      var application = new Application({
        state: model,
        target: target, update: update, view: view
      });
      application.address = new Address(application);

      application.schedule();
      return application;
    })();
  };

  exports.main = main;
  var profile = null;
  var time = function time() {
    var name = arguments[0] === undefined ? '' : arguments[0];
    return profile = name + ' ';
  };
  exports.time = time;
  var timeEnd = function timeEnd() {
    return profile = null;
  };
  exports.timeEnd = timeEnd;
});

// do nothing
//# sourceMappingURL=data:application/json;base64,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QUFXLENBQUMsTUFBTTtRQUFFLElBQUksZ0NBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJO3dCQUFLO0FBQ2pHLFVBQU0sV0FBVyxHQUFHLElBQUksV0FBVyxDQUFDO0FBQ2xDLGFBQUssRUFBRSxLQUFLO0FBQ1osY0FBTSxFQUFOLE1BQU0sRUFBRSxNQUFNLEVBQU4sTUFBTSxFQUFFLElBQUksRUFBSixJQUFJO09BQ3JCLENBQUMsQ0FBQTtBQUNGLGlCQUFXLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDOztBQUUvQyxpQkFBVyxDQUFDLFFBQVEsRUFBRSxDQUFBO0FBQ3RCLGFBQU8sV0FBVyxDQUFBO0tBQ25CO0dBQUEsQ0FBQTs7VUFUVSxJQUFJLEdBQUosSUFBSTtBQVdmLE1BQUksT0FBTyxHQUFHLElBQUksQ0FBQTtBQUNYLE1BQU0sSUFBSSxHQUFHLFNBQVAsSUFBSTtRQUFJLElBQUksZ0NBQUMsRUFBRTtXQUMxQixPQUFPLEdBQU0sSUFBSSxNQUFHO0dBQUEsQ0FBQTtVQURULElBQUksR0FBSixJQUFJO0FBRVYsTUFBTSxPQUFPLEdBQUcsU0FBVixPQUFPO1dBQ2xCLE9BQU8sR0FBRyxJQUFJO0dBQUEsQ0FBQTtVQURILE9BQU8sR0FBUCxPQUFPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuaWYgKHR5cGVvZihTeW1ib2wpID09PSAndW5kZWZpbmVkJykge1xuICB2YXIgU3ltYm9sID0gbmFtZSA9PiBgQEAke25hbWV9IyR7TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIpfWBcbiAgU3ltYm9sLmZvciA9IG5hbWUgPT4gYEBAJHtuYW1lfWBcbn1cblxuXG5pZiAodHlwZW9mKFdlYWtNYXApID09PSAndW5kZWZpbmVkJykge1xuICBsZXQgd2Vha01hcElEID0gMDtcbiAgdmFyIFdlYWtNYXAgPSBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLmlkID0gYHdlYWsjJHsoKyt3ZWFrTWFwSUQpLnRvU3RyaW5nKDM2KX1gXG4gICAgfVxuICAgIGhhcyhrZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhc093blByb3BlcnR5LmNhbGwoa2V5LCB0aGlzLmlkKTtcbiAgICB9XG4gICAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgIGtleVt0aGlzLmlkXSA9IHZhbHVlXG4gICAgfVxuICAgIGdldChrZXkpIHtcbiAgICAgIHJldHVybiBrZXlbdGhpcy5pZF1cbiAgICB9XG4gICAgZGVsZXRlKGtleSkge1xuICAgICAgZGVsZXRlIGtleVt0aGlzLmlkXVxuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgIHRoaXMuY29uc3RydWN0b3IoKVxuICAgICAgY29uc29sZS53YXJuKCdXZWFrTWFwIHBvbHlmaWxsIGRvZXMgbm90IHJlbGVhc2UgcmVmZXJlbmNlcycpXG4gICAgfVxuICB9XG59XG5cbi8vIG5vZGUgZnVuY3Rpb24gY29uc3RydWN0cyBhIHZpcnR1YWwgZG9tIG5vZGVzLiBJdCB0YWtlcyBub2RlIGB0YWdOYW1lYCxcbi8vIG9wdGlvbmFsIGBtb2RlbGAgcHJvcGVydGllcyBhbmQgb3B0aW9uYWwgYGNoaWxkcmVuYCBhbmQgcHJvZHVjZXMgaW5zdGFuY2Vcbi8vIG9mIHRoZSBhcHByb3ByaWF0ZSB2aXJ0dWFsIGBOb2RlYC5cbmV4cG9ydCBsZXQgbm9kZSA9ICh0YWdOYW1lLCBtb2RlbCwgY2hpbGRyZW49Tm9kZUxpc3QuZW1wdHkpID0+IHtcbiAgbGV0IHByb3BlcnRpZXMgPSB7fVxuXG4gIGlmIChtb2RlbCkge1xuICAgIGZvciAobGV0IG5hbWUgaW4gbW9kZWwpIHtcbiAgICAgIGlmIChtb2RlbC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IG1vZGVsW25hbWVdXG4gICAgICAgIGlmIChuYW1lID09PSBcInN0eWxlXCIgJiYgdmFsdWUgJiYgdmFsdWUudG9KU09OKSB7XG4gICAgICAgICAgcHJvcGVydGllc1tuYW1lXSA9IHZhbHVlLnRvSlNPTigpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvcGVydGllc1tuYW1lXSA9IHZhbHVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm9wZXJ0aWVzLmNoaWxkcmVuID0gY2hpbGRyZW5cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBwcm9wZXJ0aWVzKVxufVxuXG5cbi8vIENyZWF0ZSBhIGZ1bmN0aW9uIGZvciByZWFjdCBzdXBwb3J0ZWQgbm9kZXMuXG5leHBvcnQgbGV0IGh0bWwgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5PYmplY3Qua2V5cyhSZWFjdC5ET00pLmZvckVhY2godGFnTmFtZSA9PiB7XG4gIGh0bWxbdGFnTmFtZV0gPSAobW9kZWwsIGNoaWxkcmVuKSA9PiBub2RlKHRhZ05hbWUsIG1vZGVsLCBjaGlsZHJlbilcbn0pXG5cblxuLy8gRnJhZ21lbnQgaW5zbnRhbmNlcyByZXByZXNlbnRzIGEgbmFtZXNwYWNpbmcgZmFjaWxpdHkgZm9yXG4vLyBlbnRpdGllcyBpbiB2aXJ0dWFsIGRvbSB0cmVlLCBwcmltYXJpbHkgdG8gZ3JvdXAgc2V2ZXJhbCBrZXllZFxuLy8gbm9kZXMgd2l0aG91dCB3cmFwcGluZyB0aGVtIGluIGFuIGVsZW1lbnQuIFRoaXMgYWxsb3dzIGRpZmZlcmVudFxuLy8gZ3JvdXBzIG9mIG5vZGVzIHRvIGJlIGpvaW5lZCB1bmRlciB0aGUgc2FtZSBwYXJlbnQuIE5hbWVzcGFjaW5nXG4vLyBzdWNoIGdyb3VwcyB3aXRoIGEgYHByb3BlcnRpZXMua2V5YCBpcyBjcnVjaWFsIGZvciBvcHRpbWlzaW5nXG4vLyBwZXJmb3JtYW5jZSBvZiB2aXJ0dWFsIGRvbSBkaWZmaW5nIGFsZ29yaXRobS4gT3B0aW9uYWxseVxuLy8gYHByb3BlcnRpZXMudHlwZWAgY2FuIGJlIHBhc3NlZCB0aGF0IHdpbGwgYmUgYSB0YWdOYW1lIG9mIG5vZGVcbi8vIGlmIGZyYWdtZW50IGlzIHJlbmRlcmVkIGFzIGEgcm9vdCBvZiBkb20gdHJlZSwgb3Igcm9vdCBvZiB0aGVcbi8vIHN1YnRyZWUgdGhhdCBpcyBjb21wdXRlZCBsYXppbHkgYnkgYSB0aHVuay4gYGNoaWxkcmVuYCBhcmd1bWVudFxuLy8gaXMgYW4gYXJyYXkgb2Ygbm9kZXMgdGhhdCB0aGlzIGZyYWdtZW50IHJlcHJlc2VudHMuXG5jbGFzcyBGcmFnbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMsIGNoaWxkcmVuKSB7XG4gICAgdGhpcy5rZXkgPSBwcm9wZXJ0aWVzLmtleTtcbiAgICB0aGlzLnR5cGUgPSBwcm9wZXJ0aWVzLnR5cGUgfHwgJ3g6ZnJhZ21lbnQnO1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gICAgdGhpcy5fcmVhY3RGcmFnbWVudCA9IHtbdGhpcy5rZXldOiB0aGlzLmNoaWxkcmVufVxuICB9XG59XG5cbi8vIEZ1bmN0aW9uIGZvciBjb25zdHJ1Y3RpbmcgZnJhZ21lbnRzIG9mIHZpcnR1YWwgZG9tIHRyZWUuXG4vLyBUYWtlcyBgcHJvcGVydGllcy5rZXlgIGZvciBpZGVudGlmeWluZyBmcmFnbWVudCwgb3B0aW9uYWxcbi8vIGBwcm9wZXJ0aWVzLnR5cGVgIHdoaWNoIGlzIHVzZWQgYXMgd3JhcHBlciBub2RlIGZvciBnaXZlblxuLy8gYGNoaWxkcmVuYCBpZiBmcmFnbWVudCBpcyByZXR1cm5lZCBmcm9tIHRodW5rIG9yIGlzIHJlbmRlcmVkXG4vLyBkaXJlY3RseS5cbmV4cG9ydCBsZXQgZnJhZ21lbnQgPSAocHJvcGVydGllcywgY2hpbGRyZW4pID0+XG4gIG5ldyBGcmFnbWVudChwcm9wZXJ0aWVzLCBjaGlsZHJlbilcblxuY2xhc3MgRm9yd2FyZGVyIHtcbiAgY29uc3RydWN0b3IoYWRkcmVzc0Jvb2ssIHRvKSB7XG4gICAgdGhpcy5hZGRyZXNzQm9vayA9IGFkZHJlc3NCb29rXG4gICAgdGhpcy50byA9IHRvXG4gIH1cbiAgcmVjZWl2ZShhY3Rpb24pIHtcbiAgICB0aGlzLmFkZHJlc3NCb29rW3RoaXMudG9dLnJlY2VpdmUoYWN0aW9uKVxuICB9XG59XG5cbi8vIFRodW5rIGluc3RhbmNlcyBhcmUgZW50aXRpZXMgaW4gYSB2aXJ0dWFsIGRvbSB0cmVlIHRoYXQgcmVwcmVzZW50XG4vLyBsYXppbHkgY29tcHV0ZSBzdWItdHJlZXMgd2l0aCBidWlsdC1pbiBjYWNoaW5nIHRoYXQgYXZvaWQgcmUtY29tcHV0aW5nXG4vLyBzdWItdHJlZSB3aGVuIHNhbWUgZGF0YSBpcyBiZWluZyByZW5kZXJlZC5cbmNsYXNzIFRodW5rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGZvcih2aWV3LCBrZXkpIHtcbiAgICBjbGFzcyBSZWFjdENvbXBvbmVudCBleHRlbmRzIFRodW5rIHtcbiAgICAgIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KVxuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3XG4gICAgICB9XG4gICAgfVxuICAgIFJlYWN0Q29tcG9uZW50LmRpc3BsYXlOYW1lID0ga2V5LnNwbGl0KCdAJylbMF07XG4gICAgcmV0dXJuIFJlYWN0Q29tcG9uZW50XG4gIH1cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dClcbiAgfVxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY29uc3Qge2FyZ3N9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGNvdW50ID0gYXJncy5sZW5ndGhcblxuICAgIGNvbnN0IGFkZHJlc3NCb29rID0gbmV3IEFycmF5KGNvdW50KVxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheShjb3VudClcblxuICAgIGxldCBpbmRleCA9IDBcbiAgICB3aGlsZSAoaW5kZXggPCBjb3VudCkge1xuICAgICAgY29uc3QgYXJnID0gYXJnc1tpbmRleF1cbiAgICAgIGlmIChhcmcgaW5zdGFuY2VvZiBBZGRyZXNzKSB7XG4gICAgICAgIGFkZHJlc3NCb29rW2luZGV4XSA9IGFyZ1xuICAgICAgICBwYXJhbXNbaW5kZXhdID0gbmV3IEFkZHJlc3MobmV3IEZvcndhcmRlcihhZGRyZXNzQm9vaywgaW5kZXgpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zW2luZGV4XSA9IGFyZ1xuICAgICAgfVxuICAgICAgaW5kZXggPSBpbmRleCArIDFcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHthcmdzOiBwYXJhbXMsIGFkZHJlc3NCb29rfSlcbiAgfVxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHthcmdzOiBhZnRlcn0pIHtcbiAgICBpZiAocHJvZmlsZSkge1xuICAgICAgY29uc29sZS50aW1lKGAke3RoaXMucHJvcHMuS2V5fS5jb21wdXRlYClcbiAgICB9XG5cbiAgICBjb25zdCB7YXJncywgYWRkcmVzc0Jvb2t9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3QgY291bnQgPSBhZnRlci5sZW5ndGhcbiAgICBsZXQgaW5kZXggPSAwXG4gICAgbGV0IGlzVXBkYXRlZCA9IGZhbHNlXG5cbiAgICBpZiAoYXJncy5sZW5ndGggIT09IGNvdW50KSB7XG4gICAgICBpc1VwZGF0ZWQgPSB0cnVlXG4gICAgICBhcmdzLmxlbmd0aCA9IGNvdW50XG4gICAgICBhZGRyZXNzQm9vay5sZW5ndGggPSBjb3VudFxuICAgIH1cblxuICAgIHdoaWxlIChpbmRleCA8IGNvdW50KSB7XG4gICAgICBjb25zdCBuZXh0ID0gYWZ0ZXJbaW5kZXhdXG4gICAgICBjb25zdCBhcmcgPSBhcmdzW2luZGV4XVxuXG4gICAgICBpZiAobmV4dCA9PT0gYXJnKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgIH0gZWxzZSBpZiAobmV4dCBpbnN0YW5jZW9mIEFkZHJlc3MgJiYgYXJnIGluc3RhbmNlb2YgQWRkcmVzcykge1xuICAgICAgICAvLyBVcGRhdGUgYWRycmVzcyBib29rIHdpdGggYSBuZXcgYWRkcmVzcy5cbiAgICAgICAgYWRkcmVzc0Jvb2tbaW5kZXhdID0gbmV4dFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNVcGRhdGVkID0gdHJ1ZVxuXG4gICAgICAgIGlmIChuZXh0IGluc3RhbmNlb2YgQWRkcmVzcykge1xuICAgICAgICAgIGFkZHJlc3NCb29rW2luZGV4XSA9IG5leHRcbiAgICAgICAgICBhcmdzW2luZGV4XSA9IG5ldyBBZGRyZXNzKHRoaXMsIFtyZWRpcmVjdChpbmRleCldKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFyZ3NbaW5kZXhdID0gbmV4dFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpbmRleCA9IGluZGV4ICsgMVxuICAgIH1cblxuICAgIGlmIChpc1VwZGF0ZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2FyZ3MsIGFkZHJlc3NCb29rfSlcbiAgICB9XG5cbiAgICBpZiAocHJvZmlsZSkge1xuICAgICAgY29uc29sZS50aW1lRW5kKGAke3RoaXMucHJvcHMuS2V5fS5jb21wdXRlYClcbiAgICB9XG4gIH1cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKF8sIHN0YXRlKSB7XG4gICAgcmV0dXJuIHN0YXRlICE9PSB0aGlzLnN0YXRlXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGlmIChwcm9maWxlKSB7XG4gICAgICBjb25zb2xlLnRpbWUoYCR7dGhpcy5wcm9wcy5LZXl9LnJlbmRlcmApXG4gICAgfVxuXG4gICAgLy8gU3RvcmUgY3VycmVudGx5IG9wZXJhdGluZyB2aWV3IHRvIGVuYWJsZSBjYWNoZWluZyBieVxuICAgIC8vIHRoZSB2aWV3LlxuICAgIFRodW5rLmNvbnRleHQgPSB0aGlzLnZpZXdcblxuICAgIGNvbnN0IHthcmdzfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnZpZXcoLi4uYXJncylcblxuXG4gICAgVGh1bmsuY29udGV4dCA9IG51bGxcblxuICAgIGlmIChwcm9maWxlKSB7XG4gICAgICBjb25zb2xlLnRpbWVFbmQoYCR7dGhpcy5wcm9wcy5LZXl9LnJlbmRlcmApXG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuY29uc3QgY29udGV4dHVhbENhY2hlID0gbmV3IFdlYWtNYXAoKVxuY29uc3QgY29udGV4dGxlc3NDYWNoZSA9IG5ldyBXZWFrTWFwKClcblxuZXhwb3J0IGNvbnN0IGNhY2hlID0gKGYsIC4uLmFyZ3MpID0+IHtcbiAgbGV0IGNhY2hlID0gbnVsbFxuICBsZXQgY2hhbmdlZCA9IGZhbHNlXG4gIGNvbnN0IGNvbnRleHQgPSBUaHVuay5jb250ZXh0XG5cblxuICBpZiAoY29udGV4dCkge1xuICAgIGNhY2hlID0gY29udGV4dHVhbENhY2hlLmdldChmKVxuICAgIGlmICghY2FjaGUpIHtcbiAgICAgIGNvbnRleHR1YWxDYWNoZS5zZXQoZiwgY2FjaGUgPSBuZXcgV2Vha01hcCgpKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjYWNoZSA9IGNvbnRleHRsZXNzQ2FjaGVcbiAgfVxuXG4gIGxldCBtZW1vcnkgPSBjYWNoZS5nZXQoZilcbiAgaWYgKG1lbW9yeSkge1xuICAgIGNvbnN0IHtpbnB1dH0gPSBtZW1vcnlcblxuICAgIGNvbnN0IGNvdW50ID0gaW5wdXQubGVuZ3RoXG4gICAgbGV0IGluZGV4ID0gMFxuICAgIGxldCBjaGFuZ2VkID0gYXJncy5sZW5ndGggIT09IGNvdW50XG4gICAgd2hpbGUgKCFjaGFuZ2VkICYmIGluZGV4IDwgY291bnQgJiYgIWNoYW5nZWQpIHtcbiAgICAgIGNvbnN0IHBhc3QgPSBpbnB1dFtpbmRleF1cbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBhcmdzW2luZGV4XVxuXG4gICAgICBjaGFuZ2VkID0gY3VycmVudCAhPT0gcGFzdFxuICAgICAgaW5kZXggPSBpbmRleCArIDFcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgbWVtb3J5Lm91dHB1dCA9IGYoLi4uYXJncylcbiAgICAgIG1lbW9yeS5pbnB1dCA9IGFyZ3NcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbWVtb3J5ID0ge291dHB1dDogZiguLi5hcmdzKSwgaW5wdXQ6IGFyZ3N9XG4gICAgY2FjaGUuc2V0KGYsIG1lbW9yeSlcbiAgfVxuXG4gIHJldHVybiBtZW1vcnkub3V0cHV0XG59XG5cbi8vIHJlbmRlciBmdW5jdGlvbiBwcm92aWRlcyBzaG9ydGN1dCBmb3IgcmVuZGVyaW5nIGEgbW9kZWwgd2l0aFxuLy8gZGVmYXVsdCB2aWV3IGZ1bmN0aW9uIChhbHRob3VnaCBjdXN0b20gdmlldyBmdW5jdGlvbiBjYW4gYmVcbi8vIHBhc3NlZCBhcyBzZWNvbmQgb3B0aW9uYWwgYXJndW1lbnQpLCBidXQgdW5saWtlIGNhbGxpbmcgdmlld1xuLy8gZGlyZWN0bHkgcmVzdWx0IGlzIGEgdGh1bmssIHRoZXJlIGZvciBpdCdzIGRlZmVycyBhY3R1YWwgY29tcHV0YXRpb25cbi8vIGFuZCBtYWtlcyB1c2Ugb2YgY2FjaGluZyB0byBhdm9pZCBjb21wdXRhdGlvbiB3aGVuIHBvc3NpYmxlLlxuZXhwb3J0IGNvbnN0IHJlbmRlciA9IChrZXksIHZpZXcsIC4uLmFyZ3MpID0+IHtcbiAgY29uc3QgY29tcG9uZW50ID0gdmlldy5yZWFjdENvbXBvbmVudCB8fFxuICAgICAgICAgICAgICAgICAgICAodmlldy5yZWFjdENvbXBvbmVudCA9IFRodW5rLmZvcih2aWV3LCBrZXkpKTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCB7a2V5LCBLZXk6IGtleSwgYXJnc30pO1xufVxuXG5sZXQgR1VJRCA9IDBcblxuY29uc3QgUGFyYW1ldGVyaXplZFJlY2VpdmVyID0gKGFkZHJlc3MsIHJlYWQsIHByZWZpeCkgPT5cbiAgZXZlbnQgPT4gYWRkcmVzcy5yZWNlaXZlKHJlYWQoLi4ucHJlZml4LCBldmVudCkpO1xuXG5jb25zdCBSZWNlaXZlciA9IChhZGRyZXNzLCByZWFkKSA9PlxuICBldmVudCA9PiBhZGRyZXNzLnJlY2VpdmUocmVhZChldmVudCkpO1xuXG5leHBvcnQgY2xhc3MgQWRkcmVzcyB7XG4gIGNvbnN0cnVjdG9yKG1haWxib3gsIGZvcndhcmRlcnMpIHtcbiAgICB0aGlzLmlkID0gKytHVUlEXG4gICAgdGhpcy5tYWlsYm94ID0gbWFpbGJveFxuICAgIHRoaXMuZm9yd2FyZGVycyA9IGZvcndhcmRlcnNcbiAgfVxuICBmb3J3YXJkKGFub3RhdGUpIHtcbiAgICBjb25zdCBjYWNoZSA9IGFub3RhdGVbQWRkcmVzcy5jYWNoZV0gfHxcbiAgICAgICAgICAgICAgICAgIChhbm90YXRlW0FkZHJlc3MuY2FjaGVdID0ge30pXG5cbiAgICBpZiAoIWNhY2hlW3RoaXMuaWRdKSB7XG4gICAgICBjb25zdCBmb3J3YXJkZXJzID0gdGhpcy5mb3J3YXJkZXJzID8gW2Fub3RhdGVdLmNvbmNhdCh0aGlzLmZvcndhcmRlcnMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBbYW5vdGF0ZV1cbiAgICAgIGNhY2hlW3RoaXMuaWRdID0gbmV3IEFkZHJlc3ModGhpcy5tYWlsYm94LCBmb3J3YXJkZXJzKVxuICAgIH1cblxuICAgIHJldHVybiBjYWNoZVt0aGlzLmlkXVxuICB9XG4gIHJlY2VpdmUoYWN0aW9uKSB7XG4gICAgaWYgKHRoaXMuaXNCbG9ja2VkICYmIGFjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgKHRoaXMucXVldWUgfHwgKHRoaXMucXVldWUgPSBbXSkpLnB1c2goYWN0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7Zm9yd2FyZGVyc30gPSB0aGlzXG4gICAgICB0aGlzLmlzQmxvY2tlZCA9IHRydWVcbiAgICAgIGxldCB0aWNrZXQgPSAtMVxuXG4gICAgICAvLyBEZWZpbmUgYSBgZGVsaXZlcmVkYCBmbGFnIHRoYXQgaXMgdXBkYXRlZCBhdCB0aGUgYmVnaW5pbmcgb2YgYWN0aW9uXG4gICAgICAvLyBkZWxpdmVyeSBhbmQgYXQgdGhlIGVuZCBvZiBpdC4gVGhpcyBpcyBzbyB0aGF0IGluIGZpbmFsbHkgd2UgY2FuXG4gICAgICAvLyBmaWd1cmUgb3V0IGlmIGV4Y2VwdGlvbiB3YXMgdGhyb3cgb3Igbm90LlxuICAgICAgbGV0IGRlbGl2ZXJlZCA9IGZhbHNlXG5cbiAgICAgIHdoaWxlICh0aGlzLmlzQmxvY2tlZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGRlbGl2ZXJlZCA9IGZhbHNlXG5cbiAgICAgICAgICBpZiAoYWN0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoZm9yd2FyZGVycykge1xuICAgICAgICAgICAgICBjb25zdCBjb3VudCA9IGZvcndhcmRlcnMubGVuZ3RoXG4gICAgICAgICAgICAgIGxldCBpbmRleCA9IDBcbiAgICAgICAgICAgICAgd2hpbGUgKGluZGV4IDwgY291bnQpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gPSBmb3J3YXJkZXJzW2luZGV4XShhY3Rpb24pXG4gICAgICAgICAgICAgICAgaW5kZXggPSBpbmRleCArIDFcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm1haWxib3gucmVjZWl2ZShhY3Rpb24pXG5cbiAgICAgICAgICAgIGRlbGl2ZXJlZCA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgdGlja2V0ID0gdGlja2V0ICsgMVxuICAgICAgICAgIHRoaXMuaXNCbG9ja2VkID0gdGhpcy5xdWV1ZSAmJiB0aGlzLnF1ZXVlLmxlbmd0aCA+IHRpY2tldFxuICAgICAgICAgIGFjdGlvbiA9IHRoaXMuaXNCbG9ja2VkICYmIHRoaXMucXVldWVbdGlja2V0XVxuXG4gICAgICAgICAgLy8gSWYgZmFpbGVkIHRvIGRlbGl2ZXIgKGV4Y2VwdGlvbiB3YXMgdGhyb3duKSBhbmQgYWRkcmVzcyBpcyBzdGlsbFxuICAgICAgICAgIC8vIGJsb2NrZWQgdGhhdCBtZWFucyB0aGVyZSBhcmUgc3RpbGwgcGVuZGluZyBhY3Rpb25zIHRvIHByb2Nlc3MuIEluXG4gICAgICAgICAgLy8gdGhhdCBjYXNlIHdlIHVuYmxvY2sgYW4gYWRkcmVzcyByZW1vdmUgZGVsaXZlcmVkIGFjdGlvbnMgZnJvbSBhXG4gICAgICAgICAgLy8gcXVldWUgYW5kIHJlLWVudGVyIHJlY2VpdmUgbG9vcC4gVGhpcyB3YXkgcmVjZWl2ZSBkcmFpbnMgYWN0aW9uXG4gICAgICAgICAgLy8gYWN0aW9uIGxvb3AgcmVnYXJkbGVzcyBvZiBleGNlcHRpb25zIHRoYXQgbWF5IG9jY3VyLlxuICAgICAgICAgIGlmICghZGVsaXZlcmVkICYmIHRoaXMuaXNCbG9ja2VkKSB7XG4gICAgICAgICAgICB0aGlzLmlzQmxvY2tlZCA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLnF1ZXVlICYmIHRoaXMucXVldWUuc3BsaWNlKDAsIHRpY2tldCArIDEpXG4gICAgICAgICAgICB0aGlzLnJlY2VpdmUoYWN0aW9uKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnF1ZXVlICYmIHRoaXMucXVldWUuc3BsaWNlKDApXG4gICAgfVxuICB9XG4gIHNlbmQoYWN0aW9uKSB7XG4gICAgcmV0dXJuIF8gPT4gdGhpcy5yZWNlaXZlKGFjdGlvbilcbiAgfVxuICBwYXNzKHJlYWQsIC4uLnByZWZpeCkge1xuICAgIGlmICh0eXBlb2YocmVhZCkgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignTm9uIGZ1bmN0aW9uIHdhcyBwYXNzZWQgdG8gYWRkcmVzcy5wYXNzJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZWZpeC5sZW5ndGggPyBQYXJhbWV0ZXJpemVkUmVjZWl2ZXIodGhpcywgcmVhZCwgcHJlZml4KSA6XG4gICAgICAgICAgIChyZWFkW2ByZWZsZXgvYWRkcmVzcy0ke3RoaXMuaWR9YF0gfHxcbiAgICAgICAgICAgIChyZWFkW2ByZWZsZXgvYWRkcmVzcy0ke3RoaXMuaWR9YF0gPSBSZWNlaXZlcih0aGlzLCByZWFkKSkpO1xuICB9XG59XG5BZGRyZXNzLmNhY2hlID0gU3ltYm9sLmZvcigncmVmbGV4L2FkZHJlc3MtYm9vaycpXG5cbi8vIFByb2dyYW0gaXMgYSByb290IGVudGl0eSBvZiB0aGUgdmlydHVhbCBkb20gdHJlZSB0aGF0IGlzIHJlc3BvbnNpYmxlXG4vLyBmb3IgY29tcHV0aW5nIGEgdmlydHVhbCBkb20gdHJlZSBmb3IgdGhlIGBzdGF0ZWAgdmlhIGdpdmVuIGB2aWV3YCBmdW5jdGlvblxuLy8gYW5kIHJlYWN0aW5nIHRvIGRpc3BhdGNoZWQgYWN0aW9ucyB2aWEgZ2l2ZW4gYHVwZGF0ZWAgYnkgdXBkYXRpbmcgYSBzdGF0ZVxuLy8gYW5kIHJlc3RhcnRpbmcgYSB0aGUgc2FtZSBjeWNsZSBhZ2Fpbi5cbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHthZGRyZXNzLCB0YXJnZXQsIHN0YXRlLCB1cGRhdGUsIHZpZXd9KSB7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXRcbiAgICB0aGlzLnZpZXcgPSB2aWV3XG4gICAgdGhpcy51cGRhdGUgPSB1cGRhdGVcbiAgICB0aGlzLnN0YXRlID0gc3RhdGVcbiAgICB0aGlzLmFkZHJlc3MgPSBhZGRyZXNzXG4gICAgdGhpcy5yZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpXG4gIH1cbiAgcmVjZWl2ZShhY3Rpb24pIHtcbiAgICB0aGlzLmFjdGlvbiA9IGFjdGlvblxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy51cGRhdGUodGhpcy5zdGF0ZSwgdGhpcy5hY3Rpb24pXG4gICAgaWYgKHN0YXRlICE9PSB0aGlzLnN0YXRlKSB7XG4gICAgICB0aGlzLnN0YXRlID0gc3RhdGVcbiAgICAgIHRoaXMuc2NoZWR1bGUoKVxuICAgIH1cbiAgfVxuICBzY2hlZHVsZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNTY2hlZHVsZWQpIHtcbiAgICAgIHRoaXMuaXNTY2hlZHVsZWQgPSB0cnVlXG4gICAgICB0aGlzLnZlcnNpb24gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXIpXG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBpZiAocHJvZmlsZSkge1xuICAgICAgY29uc29sZS50aW1lKCdSZWFjdC5yZW5kZXInKVxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KClcblxuICAgIC8vIEl0IGlzIGltcG9ydGFudCB0byBtYXJrIGBpc1NjaGVkdWxlZGAgYXMgYGZhbHNlYCBiZWZvcmUgZG9pbmcgYWN0dWFsXG4gICAgLy8gcmVuZGVyaW5nIHNpbmNlIHN0YXRlIGNoYW5nZXMgaW4gZWZmZWN0IG9mIHJlZmxlY3RpbmcgY3VycmVudCBzdGF0ZVxuICAgIC8vIHdvbid0IGJlIGhhbmRsZWQgYnkgdGhpcyByZW5kZXIgY3ljbGUuIEZvciBleGFtcGxlIHJlbmRlcmluZyBhIHN0YXRlXG4gICAgLy8gd2l0aCB1cGRhdGVkIGZvY3VzIHdpbGwgY2F1c2UgYGJsdXJgICYgYGZvY3VzYCBldmVudHMgdG8gYmUgZGlzcGF0Y2hlZFxuICAgIC8vIHRoYXQgaGFwcGVuIHN5bmNocm9ub3VzbHksIGFuZCB0aGVyZSBmb3IgYW5vdGhlciByZW5kZXIgY3ljbGUgbWF5IGJlXG4gICAgLy8gc2NoZWR1bGVkIGZvciB3aGljaCBgaXNTY2hlZHVsZWRgIG11c3QgYmUgYGZhbHNlYC4gQXR0ZW1wdCB0byByZW5kZXJcbiAgICAvLyB0aGlzIHN0YXRlIG1heSBhbHNvIGNhdXNlIGEgcnVudGltZSBleGNlcHRpb24gYnV0IGV2ZW4gdGhlbiB3ZSB3b3VsZFxuICAgIC8vIHJhdGhlciBhdHRlbXB0IHRvIHJlbmRlciB1cGRhdGVkIHN0YXRlcyB0aGF0IGVuZCB1cCBiZWluZyBibG9ja2VkXG4gICAgLy8gZm9yZXZlci5cbiAgICB0aGlzLmlzU2NoZWR1bGVkID0gZmFsc2VcbiAgICBpZiAocHJvZmlsZSkge1xuICAgICAgY29uc29sZS50aW1lKCdBcHBsaWNhdGlvbi5yZW5kZXInKVxuICAgIH1cblxuICAgIHRoaXMudHJlZSA9IHRoaXMudmlldyh0aGlzLnN0YXRlLCB0aGlzLmFkZHJlc3MpXG5cbiAgICBpZiAocHJvZmlsZSkge1xuICAgICAgY29uc29sZS50aW1lRW5kKCdBcHBsaWNhdGlvbi5yZW5kZXInKVxuICAgIH1cblxuICAgIGlmIChwcm9maWxlKSB7XG4gICAgICBjb25zb2xlLnRpbWUoJ1JlYWN0LnJlY29uY2lsZScpXG4gICAgfVxuXG4gICAgUmVhY3QucmVuZGVyKHRoaXMudHJlZSwgdGhpcy50YXJnZXQpXG5cbiAgICBpZiAocHJvZmlsZSkge1xuICAgICAgY29uc29sZS50aW1lRW5kKCdSZWFjdC5yZWNvbmNpbGUnKVxuICAgIH1cblxuICAgIGNvbnN0IGVuZCA9IHBlcmZvcm1hbmNlLm5vdygpXG4gICAgY29uc3QgdGltZSA9IGVuZCAtIHN0YXJ0XG5cbiAgICBpZiAodGltZSA+IDE2KSB7XG4gICAgICBjb25zb2xlLndhcm4oYFJlbmRlciB0b29rICR7dGltZX1tcyAmIHdpbGwgY2F1c2UgZnJhbWUgZHJvcGApXG4gICAgfVxuXG4gICAgaWYgKHByb2ZpbGUpIHtcbiAgICAgIGNvbnNvbGUudGltZUVuZCgnUmVhY3QucmVuZGVyJylcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxufVxuXG4vLyBGdW5jdGlvbiB0aGF0IHRha2VzIGB0YXJnZXRgIGVsZW1lbnQgdG8gY29udGluaXVzbHkgcmVuZGVyIGdpdmVuIGBtb2RlbGBcbi8vIGludG8uIG1vZGVsJ3MgZGVmYXVsdCBgdXBkYXRlYCBmdW5jdGlvbiBpcyB1c2VkIHRvIHVwZGF0ZSBtb2R1bGUgaW4gcmVzcG9uc2Vcbi8vIHRvIGRpc3BhdGNoZWQgYWN0aW9ucyBhbmQgbW9kZWwncyBkZWZhdWx0IGB2aWV3YCBmdW5jdGlvbiBpcyB1c2VkIHRvIGNvbXB1dGVcbi8vIGRvbSB0cmVlIHJlcHJlc2FudGF0aW9uIG9mIHRoZSBtb2RlbC4gT3B0aW9uYWxseSBjdXN0b20gYHVwZGF0ZWAgYW5kIGB2aWV3YFxuLy8gZnVuY3Rpb25zIGNvdWxkIGJlIHBhc3NlZCB0byBjdXN0b21pemUgcmVuZGVyIGxvb3AuXG5leHBvcnQgbGV0IG1haW4gPSAodGFyZ2V0LCBtb2RlbCwgdXBkYXRlPW1vZGVsLmNvbnN0cnVjdG9yLnVwZGF0ZSwgdmlldz1tb2RlbC5jb25zdHJ1Y3Rvci52aWV3KSA9PiB7XG4gIGNvbnN0IGFwcGxpY2F0aW9uID0gbmV3IEFwcGxpY2F0aW9uKHtcbiAgICBzdGF0ZTogbW9kZWwsXG4gICAgdGFyZ2V0LCB1cGRhdGUsIHZpZXdcbiAgfSlcbiAgYXBwbGljYXRpb24uYWRkcmVzcyA9IG5ldyBBZGRyZXNzKGFwcGxpY2F0aW9uKTtcblxuICBhcHBsaWNhdGlvbi5zY2hlZHVsZSgpXG4gIHJldHVybiBhcHBsaWNhdGlvblxufVxuXG5sZXQgcHJvZmlsZSA9IG51bGxcbmV4cG9ydCBjb25zdCB0aW1lID0gKG5hbWU9JycpID0+XG4gIHByb2ZpbGUgPSBgJHtuYW1lfSBgXG5leHBvcnQgY29uc3QgdGltZUVuZCA9ICgpID0+XG4gIHByb2ZpbGUgPSBudWxsXG4iXX0=;
/**
 *  Copyright (c) 2014-2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define('immutable',factory) :
  global.Immutable = factory()
}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;

  function createClass(ctor, superClass) {
    if (superClass) {
      ctor.prototype = Object.create(superClass.prototype);
    }
    ctor.prototype.constructor = ctor;
  }

  // Used for setting prototype methods that IE8 chokes on.
  var DELETE = 'delete';

  // Constants describing the size of trie nodes.
  var SHIFT = 5; // Resulted in best performance after ______?
  var SIZE = 1 << SHIFT;
  var MASK = SIZE - 1;

  // A consistent shared value representing "not set" which equals nothing other
  // than itself, and nothing that could be provided externally.
  var NOT_SET = {};

  // Boolean references, Rough equivalent of `bool &`.
  var CHANGE_LENGTH = { value: false };
  var DID_ALTER = { value: false };

  function MakeRef(ref) {
    ref.value = false;
    return ref;
  }

  function SetRef(ref) {
    ref && (ref.value = true);
  }

  // A function which returns a value representing an "owner" for transient writes
  // to tries. The return value will only ever equal itself, and will not equal
  // the return of any subsequent call of this function.
  function OwnerID() {}

  // http://jsperf.com/copy-array-inline
  function arrCopy(arr, offset) {
    offset = offset || 0;
    var len = Math.max(0, arr.length - offset);
    var newArr = new Array(len);
    for (var ii = 0; ii < len; ii++) {
      newArr[ii] = arr[ii + offset];
    }
    return newArr;
  }

  function ensureSize(iter) {
    if (iter.size === undefined) {
      iter.size = iter.__iterate(returnTrue);
    }
    return iter.size;
  }

  function wrapIndex(iter, index) {
    return index >= 0 ? (+index) : ensureSize(iter) + (+index);
  }

  function returnTrue() {
    return true;
  }

  function wholeSlice(begin, end, size) {
    return (begin === 0 || (size !== undefined && begin <= -size)) &&
      (end === undefined || (size !== undefined && end >= size));
  }

  function resolveBegin(begin, size) {
    return resolveIndex(begin, size, 0);
  }

  function resolveEnd(end, size) {
    return resolveIndex(end, size, size);
  }

  function resolveIndex(index, size, defaultIndex) {
    return index === undefined ?
      defaultIndex :
      index < 0 ?
        Math.max(0, size + index) :
        size === undefined ?
          index :
          Math.min(size, index);
  }

  function Iterable(value) {
      return isIterable(value) ? value : Seq(value);
    }


  createClass(KeyedIterable, Iterable);
    function KeyedIterable(value) {
      return isKeyed(value) ? value : KeyedSeq(value);
    }


  createClass(IndexedIterable, Iterable);
    function IndexedIterable(value) {
      return isIndexed(value) ? value : IndexedSeq(value);
    }


  createClass(SetIterable, Iterable);
    function SetIterable(value) {
      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
    }



  function isIterable(maybeIterable) {
    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
  }

  function isKeyed(maybeKeyed) {
    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
  }

  function isIndexed(maybeIndexed) {
    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
  }

  function isAssociative(maybeAssociative) {
    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
  }

  function isOrdered(maybeOrdered) {
    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
  }

  Iterable.isIterable = isIterable;
  Iterable.isKeyed = isKeyed;
  Iterable.isIndexed = isIndexed;
  Iterable.isAssociative = isAssociative;
  Iterable.isOrdered = isOrdered;

  Iterable.Keyed = KeyedIterable;
  Iterable.Indexed = IndexedIterable;
  Iterable.Set = SetIterable;


  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  /* global Symbol */

  var ITERATE_KEYS = 0;
  var ITERATE_VALUES = 1;
  var ITERATE_ENTRIES = 2;

  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';

  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;


  function src_Iterator__Iterator(next) {
      this.next = next;
    }

    src_Iterator__Iterator.prototype.toString = function() {
      return '[Iterator]';
    };


  src_Iterator__Iterator.KEYS = ITERATE_KEYS;
  src_Iterator__Iterator.VALUES = ITERATE_VALUES;
  src_Iterator__Iterator.ENTRIES = ITERATE_ENTRIES;

  src_Iterator__Iterator.prototype.inspect =
  src_Iterator__Iterator.prototype.toSource = function () { return this.toString(); }
  src_Iterator__Iterator.prototype[ITERATOR_SYMBOL] = function () {
    return this;
  };


  function iteratorValue(type, k, v, iteratorResult) {
    var value = type === 0 ? k : type === 1 ? v : [k, v];
    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
      value: value, done: false
    });
    return iteratorResult;
  }

  function iteratorDone() {
    return { value: undefined, done: true };
  }

  function hasIterator(maybeIterable) {
    return !!getIteratorFn(maybeIterable);
  }

  function isIterator(maybeIterator) {
    return maybeIterator && typeof maybeIterator.next === 'function';
  }

  function getIterator(iterable) {
    var iteratorFn = getIteratorFn(iterable);
    return iteratorFn && iteratorFn.call(iterable);
  }

  function getIteratorFn(iterable) {
    var iteratorFn = iterable && (
      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
      iterable[FAUX_ITERATOR_SYMBOL]
    );
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  function isArrayLike(value) {
    return value && typeof value.length === 'number';
  }

  createClass(Seq, Iterable);
    function Seq(value) {
      return value === null || value === undefined ? emptySequence() :
        isIterable(value) ? value.toSeq() : seqFromValue(value);
    }

    Seq.of = function(/*...values*/) {
      return Seq(arguments);
    };

    Seq.prototype.toSeq = function() {
      return this;
    };

    Seq.prototype.toString = function() {
      return this.__toString('Seq {', '}');
    };

    Seq.prototype.cacheResult = function() {
      if (!this._cache && this.__iterateUncached) {
        this._cache = this.entrySeq().toArray();
        this.size = this._cache.length;
      }
      return this;
    };

    // abstract __iterateUncached(fn, reverse)

    Seq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, true);
    };

    // abstract __iteratorUncached(type, reverse)

    Seq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, true);
    };



  createClass(KeyedSeq, Seq);
    function KeyedSeq(value) {
      return value === null || value === undefined ?
        emptySequence().toKeyedSeq() :
        isIterable(value) ?
          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
          keyedSeqFromValue(value);
    }

    KeyedSeq.prototype.toKeyedSeq = function() {
      return this;
    };



  createClass(IndexedSeq, Seq);
    function IndexedSeq(value) {
      return value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
    }

    IndexedSeq.of = function(/*...values*/) {
      return IndexedSeq(arguments);
    };

    IndexedSeq.prototype.toIndexedSeq = function() {
      return this;
    };

    IndexedSeq.prototype.toString = function() {
      return this.__toString('Seq [', ']');
    };

    IndexedSeq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, false);
    };

    IndexedSeq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, false);
    };



  createClass(SetSeq, Seq);
    function SetSeq(value) {
      return (
        value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value
      ).toSetSeq();
    }

    SetSeq.of = function(/*...values*/) {
      return SetSeq(arguments);
    };

    SetSeq.prototype.toSetSeq = function() {
      return this;
    };



  Seq.isSeq = isSeq;
  Seq.Keyed = KeyedSeq;
  Seq.Set = SetSeq;
  Seq.Indexed = IndexedSeq;

  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';

  Seq.prototype[IS_SEQ_SENTINEL] = true;



  // #pragma Root Sequences

  createClass(ArraySeq, IndexedSeq);
    function ArraySeq(array) {
      this._array = array;
      this.size = array.length;
    }

    ArraySeq.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
    };

    ArraySeq.prototype.__iterate = function(fn, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ArraySeq.prototype.__iterator = function(type, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      var ii = 0;
      return new src_Iterator__Iterator(function() 
        {return ii > maxIndex ?
          iteratorDone() :
          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
      );
    };



  createClass(ObjectSeq, KeyedSeq);
    function ObjectSeq(object) {
      var keys = Object.keys(object);
      this._object = object;
      this._keys = keys;
      this.size = keys.length;
    }

    ObjectSeq.prototype.get = function(key, notSetValue) {
      if (notSetValue !== undefined && !this.has(key)) {
        return notSetValue;
      }
      return this._object[key];
    };

    ObjectSeq.prototype.has = function(key) {
      return this._object.hasOwnProperty(key);
    };

    ObjectSeq.prototype.__iterate = function(fn, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var key = keys[reverse ? maxIndex - ii : ii];
        if (fn(object[key], key, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ObjectSeq.prototype.__iterator = function(type, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      var ii = 0;
      return new src_Iterator__Iterator(function()  {
        var key = keys[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, key, object[key]);
      });
    };

  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(IterableSeq, IndexedSeq);
    function IterableSeq(iterable) {
      this._iterable = iterable;
      this.size = iterable.length || iterable.size;
    }

    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      var iterations = 0;
      if (isIterator(iterator)) {
        var step;
        while (!(step = iterator.next()).done) {
          if (fn(step.value, iterations++, this) === false) {
            break;
          }
        }
      }
      return iterations;
    };

    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      if (!isIterator(iterator)) {
        return new src_Iterator__Iterator(iteratorDone);
      }
      var iterations = 0;
      return new src_Iterator__Iterator(function()  {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, iterations++, step.value);
      });
    };



  createClass(IteratorSeq, IndexedSeq);
    function IteratorSeq(iterator) {
      this._iterator = iterator;
      this._iteratorCache = [];
    }

    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      while (iterations < cache.length) {
        if (fn(cache[iterations], iterations++, this) === false) {
          return iterations;
        }
      }
      var step;
      while (!(step = iterator.next()).done) {
        var val = step.value;
        cache[iterations] = val;
        if (fn(val, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };

    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      return new src_Iterator__Iterator(function()  {
        if (iterations >= cache.length) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          cache[iterations] = step.value;
        }
        return iteratorValue(type, iterations, cache[iterations++]);
      });
    };




  // # pragma Helper functions

  function isSeq(maybeSeq) {
    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
  }

  var EMPTY_SEQ;

  function emptySequence() {
    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
  }

  function keyedSeqFromValue(value) {
    var seq =
      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
      typeof value === 'object' ? new ObjectSeq(value) :
      undefined;
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of [k, v] entries, '+
        'or keyed object: ' + value
      );
    }
    return seq;
  }

  function indexedSeqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values: ' + value
      );
    }
    return seq;
  }

  function seqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value) ||
      (typeof value === 'object' && new ObjectSeq(value));
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values, or keyed object: ' + value
      );
    }
    return seq;
  }

  function maybeIndexedSeqFromValue(value) {
    return (
      isArrayLike(value) ? new ArraySeq(value) :
      isIterator(value) ? new IteratorSeq(value) :
      hasIterator(value) ? new IterableSeq(value) :
      undefined
    );
  }

  function seqIterate(seq, fn, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var entry = cache[reverse ? maxIndex - ii : ii];
        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
          return ii + 1;
        }
      }
      return ii;
    }
    return seq.__iterateUncached(fn, reverse);
  }

  function seqIterator(seq, type, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      var ii = 0;
      return new src_Iterator__Iterator(function()  {
        var entry = cache[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
      });
    }
    return seq.__iteratorUncached(type, reverse);
  }

  createClass(Collection, Iterable);
    function Collection() {
      throw TypeError('Abstract');
    }


  createClass(KeyedCollection, Collection);function KeyedCollection() {}

  createClass(IndexedCollection, Collection);function IndexedCollection() {}

  createClass(SetCollection, Collection);function SetCollection() {}


  Collection.Keyed = KeyedCollection;
  Collection.Indexed = IndexedCollection;
  Collection.Set = SetCollection;

  /**
   * An extension of the "same-value" algorithm as [described for use by ES6 Map
   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
   *
   * NaN is considered the same as NaN, however -0 and 0 are considered the same
   * value, which is different from the algorithm described by
   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
   *
   * This is extended further to allow Objects to describe the values they
   * represent, by way of `valueOf` or `equals` (and `hashCode`).
   *
   * Note: because of this extension, the key equality of Immutable.Map and the
   * value equality of Immutable.Set will differ from ES6 Map and Set.
   *
   * ### Defining custom values
   *
   * The easiest way to describe the value an object represents is by implementing
   * `valueOf`. For example, `Date` represents a value by returning a unix
   * timestamp for `valueOf`:
   *
   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
   *     var date2 = new Date(1234567890000);
   *     date1.valueOf(); // 1234567890000
   *     assert( date1 !== date2 );
   *     assert( Immutable.is( date1, date2 ) );
   *
   * Note: overriding `valueOf` may have other implications if you use this object
   * where JavaScript expects a primitive, such as implicit string coercion.
   *
   * For more complex types, especially collections, implementing `valueOf` may
   * not be performant. An alternative is to implement `equals` and `hashCode`.
   *
   * `equals` takes another object, presumably of similar type, and returns true
   * if the it is equal. Equality is symmetrical, so the same result should be
   * returned if this and the argument are flipped.
   *
   *     assert( a.equals(b) === b.equals(a) );
   *
   * `hashCode` returns a 32bit integer number representing the object which will
   * be used to determine how to store the value object in a Map or Set. You must
   * provide both or neither methods, one must not exist without the other.
   *
   * Also, an important relationship between these methods must be upheld: if two
   * values are equal, they *must* return the same hashCode. If the values are not
   * equal, they might have the same hashCode; this is called a hash collision,
   * and while undesirable for performance reasons, it is acceptable.
   *
   *     if (a.equals(b)) {
   *       assert( a.hashCode() === b.hashCode() );
   *     }
   *
   * All Immutable collections implement `equals` and `hashCode`.
   *
   */
  function is(valueA, valueB) {
    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
    if (typeof valueA.valueOf === 'function' &&
        typeof valueB.valueOf === 'function') {
      valueA = valueA.valueOf();
      valueB = valueB.valueOf();
      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
        return true;
      }
      if (!valueA || !valueB) {
        return false;
      }
    }
    if (typeof valueA.equals === 'function' &&
        typeof valueB.equals === 'function' &&
        valueA.equals(valueB)) {
      return true;
    }
    return false;
  }

  function fromJS(json, converter) {
    return converter ?
      fromJSWith(converter, json, '', {'': json}) :
      fromJSDefault(json);
  }

  function fromJSWith(converter, json, key, parentJSON) {
    if (Array.isArray(json)) {
      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    if (isPlainObj(json)) {
      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    return json;
  }

  function fromJSDefault(json) {
    if (Array.isArray(json)) {
      return IndexedSeq(json).map(fromJSDefault).toList();
    }
    if (isPlainObj(json)) {
      return KeyedSeq(json).map(fromJSDefault).toMap();
    }
    return json;
  }

  function isPlainObj(value) {
    return value && (value.constructor === Object || value.constructor === undefined);
  }

  var src_Math__imul =
    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
    Math.imul :
    function imul(a, b) {
      a = a | 0; // int
      b = b | 0; // int
      var c = a & 0xffff;
      var d = b & 0xffff;
      // Shift by 0 fixes the sign on the high part.
      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
    };

  // v8 has an optimization for storing 31-bit signed numbers.
  // Values which have either 00 or 11 as the high order bits qualify.
  // This function drops the highest order bit in a signed number, maintaining
  // the sign bit.
  function smi(i32) {
    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
  }

  function hash(o) {
    if (o === false || o === null || o === undefined) {
      return 0;
    }
    if (typeof o.valueOf === 'function') {
      o = o.valueOf();
      if (o === false || o === null || o === undefined) {
        return 0;
      }
    }
    if (o === true) {
      return 1;
    }
    var type = typeof o;
    if (type === 'number') {
      var h = o | 0;
      if (h !== o) {
        h ^= o * 0xFFFFFFFF;
      }
      while (o > 0xFFFFFFFF) {
        o /= 0xFFFFFFFF;
        h ^= o;
      }
      return smi(h);
    }
    if (type === 'string') {
      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
    }
    if (typeof o.hashCode === 'function') {
      return o.hashCode();
    }
    return hashJSObj(o);
  }

  function cachedHashString(string) {
    var hash = stringHashCache[string];
    if (hash === undefined) {
      hash = hashString(string);
      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
        STRING_HASH_CACHE_SIZE = 0;
        stringHashCache = {};
      }
      STRING_HASH_CACHE_SIZE++;
      stringHashCache[string] = hash;
    }
    return hash;
  }

  // http://jsperf.com/hashing-strings
  function hashString(string) {
    // This is the hash from JVM
    // The hash code for a string is computed as
    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
    // where s[i] is the ith character of the string and n is the length of
    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
    // (exclusive) by dropping high bits.
    var hash = 0;
    for (var ii = 0; ii < string.length; ii++) {
      hash = 31 * hash + string.charCodeAt(ii) | 0;
    }
    return smi(hash);
  }

  function hashJSObj(obj) {
    var hash;
    if (usingWeakMap) {
      hash = weakMap.get(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = obj[UID_HASH_KEY];
    if (hash !== undefined) {
      return hash;
    }

    if (!canDefineProperty) {
      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
      if (hash !== undefined) {
        return hash;
      }

      hash = getIENodeHash(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = ++objHashUID;
    if (objHashUID & 0x40000000) {
      objHashUID = 0;
    }

    if (usingWeakMap) {
      weakMap.set(obj, hash);
    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
      throw new Error('Non-extensible objects are not allowed as keys.');
    } else if (canDefineProperty) {
      Object.defineProperty(obj, UID_HASH_KEY, {
        'enumerable': false,
        'configurable': false,
        'writable': false,
        'value': hash
      });
    } else if (obj.propertyIsEnumerable !== undefined &&
               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
      // Since we can't define a non-enumerable property on the object
      // we'll hijack one of the less-used non-enumerable properties to
      // save our hash on it. Since this is a function it will not show up in
      // `JSON.stringify` which is what we want.
      obj.propertyIsEnumerable = function() {
        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
      };
      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
    } else if (obj.nodeType !== undefined) {
      // At this point we couldn't get the IE `uniqueID` to use as a hash
      // and we couldn't use a non-enumerable property to exploit the
      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
      // itself.
      obj[UID_HASH_KEY] = hash;
    } else {
      throw new Error('Unable to set a non-enumerable property on object.');
    }

    return hash;
  }

  // Get references to ES5 object methods.
  var isExtensible = Object.isExtensible;

  // True if Object.defineProperty works as expected. IE8 fails this test.
  var canDefineProperty = (function() {
    try {
      Object.defineProperty({}, '@', {});
      return true;
    } catch (e) {
      return false;
    }
  }());

  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
  // and avoid memory leaks from the IE cloneNode bug.
  function getIENodeHash(node) {
    if (node && node.nodeType > 0) {
      switch (node.nodeType) {
        case 1: // Element
          return node.uniqueID;
        case 9: // Document
          return node.documentElement && node.documentElement.uniqueID;
      }
    }
  }

  // If possible, use a WeakMap.
  var usingWeakMap = typeof WeakMap === 'function';
  var weakMap;
  if (usingWeakMap) {
    weakMap = new WeakMap();
  }

  var objHashUID = 0;

  var UID_HASH_KEY = '__immutablehash__';
  if (typeof Symbol === 'function') {
    UID_HASH_KEY = Symbol(UID_HASH_KEY);
  }

  var STRING_HASH_CACHE_MIN_STRLEN = 16;
  var STRING_HASH_CACHE_MAX_SIZE = 255;
  var STRING_HASH_CACHE_SIZE = 0;
  var stringHashCache = {};

  function invariant(condition, error) {
    if (!condition) throw new Error(error);
  }

  function assertNotInfinite(size) {
    invariant(
      size !== Infinity,
      'Cannot perform this action with an infinite size.'
    );
  }

  createClass(ToKeyedSequence, KeyedSeq);
    function ToKeyedSequence(indexed, useKeys) {
      this._iter = indexed;
      this._useKeys = useKeys;
      this.size = indexed.size;
    }

    ToKeyedSequence.prototype.get = function(key, notSetValue) {
      return this._iter.get(key, notSetValue);
    };

    ToKeyedSequence.prototype.has = function(key) {
      return this._iter.has(key);
    };

    ToKeyedSequence.prototype.valueSeq = function() {
      return this._iter.valueSeq();
    };

    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
      var reversedSequence = reverseFactory(this, true);
      if (!this._useKeys) {
        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
      }
      return reversedSequence;
    };

    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
      var mappedSequence = mapFactory(this, mapper, context);
      if (!this._useKeys) {
        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
      }
      return mappedSequence;
    };

    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var ii;
      return this._iter.__iterate(
        this._useKeys ?
          function(v, k)  {return fn(v, k, this$0)} :
          ((ii = reverse ? resolveSize(this) : 0),
            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
        reverse
      );
    };

    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
      if (this._useKeys) {
        return this._iter.__iterator(type, reverse);
      }
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var ii = reverse ? resolveSize(this) : 0;
      return new src_Iterator__Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
      });
    };

  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(ToIndexedSequence, IndexedSeq);
    function ToIndexedSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToIndexedSequence.prototype.contains = function(value) {
      return this._iter.contains(value);
    };

    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
    };

    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      return new src_Iterator__Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, iterations++, step.value, step)
      });
    };



  createClass(ToSetSequence, SetSeq);
    function ToSetSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToSetSequence.prototype.has = function(key) {
      return this._iter.contains(key);
    };

    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
    };

    ToSetSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new src_Iterator__Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, step.value, step.value, step);
      });
    };



  createClass(FromEntriesSequence, KeyedSeq);
    function FromEntriesSequence(entries) {
      this._iter = entries;
      this.size = entries.size;
    }

    FromEntriesSequence.prototype.entrySeq = function() {
      return this._iter.toSeq();
    };

    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(entry ) {
        // Check if entry exists first so array access doesn't throw for holes
        // in the parent iteration.
        if (entry) {
          validateEntry(entry);
          var indexedIterable = isIterable(entry);
          return fn(
            indexedIterable ? entry.get(1) : entry[1],
            indexedIterable ? entry.get(0) : entry[0],
            this$0
          );
        }
      }, reverse);
    };

    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new src_Iterator__Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          // Check if entry exists first so array access doesn't throw for holes
          // in the parent iteration.
          if (entry) {
            validateEntry(entry);
            var indexedIterable = isIterable(entry);
            return iteratorValue(
              type,
              indexedIterable ? entry.get(0) : entry[0],
              indexedIterable ? entry.get(1) : entry[1],
              step
            );
          }
        }
      });
    };


  ToIndexedSequence.prototype.cacheResult =
  ToKeyedSequence.prototype.cacheResult =
  ToSetSequence.prototype.cacheResult =
  FromEntriesSequence.prototype.cacheResult =
    cacheResultThrough;


  function flipFactory(iterable) {
    var flipSequence = makeSequence(iterable);
    flipSequence._iter = iterable;
    flipSequence.size = iterable.size;
    flipSequence.flip = function()  {return iterable};
    flipSequence.reverse = function () {
      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
      reversedSequence.flip = function()  {return iterable.reverse()};
      return reversedSequence;
    };
    flipSequence.has = function(key ) {return iterable.contains(key)};
    flipSequence.contains = function(key ) {return iterable.has(key)};
    flipSequence.cacheResult = cacheResultThrough;
    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
    }
    flipSequence.__iteratorUncached = function(type, reverse) {
      if (type === ITERATE_ENTRIES) {
        var iterator = iterable.__iterator(type, reverse);
        return new src_Iterator__Iterator(function()  {
          var step = iterator.next();
          if (!step.done) {
            var k = step.value[0];
            step.value[0] = step.value[1];
            step.value[1] = k;
          }
          return step;
        });
      }
      return iterable.__iterator(
        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
        reverse
      );
    }
    return flipSequence;
  }


  function mapFactory(iterable, mapper, context) {
    var mappedSequence = makeSequence(iterable);
    mappedSequence.size = iterable.size;
    mappedSequence.has = function(key ) {return iterable.has(key)};
    mappedSequence.get = function(key, notSetValue)  {
      var v = iterable.get(key, NOT_SET);
      return v === NOT_SET ?
        notSetValue :
        mapper.call(context, v, key, iterable);
    };
    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(
        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
        reverse
      );
    }
    mappedSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      return new src_Iterator__Iterator(function()  {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        return iteratorValue(
          type,
          key,
          mapper.call(context, entry[1], key, iterable),
          step
        );
      });
    }
    return mappedSequence;
  }


  function reverseFactory(iterable, useKeys) {
    var reversedSequence = makeSequence(iterable);
    reversedSequence._iter = iterable;
    reversedSequence.size = iterable.size;
    reversedSequence.reverse = function()  {return iterable};
    if (iterable.flip) {
      reversedSequence.flip = function () {
        var flipSequence = flipFactory(iterable);
        flipSequence.reverse = function()  {return iterable.flip()};
        return flipSequence;
      };
    }
    reversedSequence.get = function(key, notSetValue) 
      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
    reversedSequence.has = function(key )
      {return iterable.has(useKeys ? key : -1 - key)};
    reversedSequence.contains = function(value ) {return iterable.contains(value)};
    reversedSequence.cacheResult = cacheResultThrough;
    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
    };
    reversedSequence.__iterator =
      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
    return reversedSequence;
  }


  function filterFactory(iterable, predicate, context, useKeys) {
    var filterSequence = makeSequence(iterable);
    if (useKeys) {
      filterSequence.has = function(key ) {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
      };
      filterSequence.get = function(key, notSetValue)  {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
          v : notSetValue;
      };
    }
    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      }, reverse);
      return iterations;
    };
    filterSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterations = 0;
      return new src_Iterator__Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          var key = entry[0];
          var value = entry[1];
          if (predicate.call(context, value, key, iterable)) {
            return iteratorValue(type, useKeys ? key : iterations++, value, step);
          }
        }
      });
    }
    return filterSequence;
  }


  function countByFactory(iterable, grouper, context) {
    var groups = src_Map__Map().asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        0,
        function(a ) {return a + 1}
      );
    });
    return groups.asImmutable();
  }


  function groupByFactory(iterable, grouper, context) {
    var isKeyedIter = isKeyed(iterable);
    var groups = (isOrdered(iterable) ? OrderedMap() : src_Map__Map()).asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
      );
    });
    var coerce = iterableClass(iterable);
    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
  }


  function sliceFactory(iterable, begin, end, useKeys) {
    var originalSize = iterable.size;

    if (wholeSlice(begin, end, originalSize)) {
      return iterable;
    }

    var resolvedBegin = resolveBegin(begin, originalSize);
    var resolvedEnd = resolveEnd(end, originalSize);

    // begin or end will be NaN if they were provided as negative numbers and
    // this iterable's size is unknown. In that case, cache first so there is
    // a known size.
    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
    }

    var sliceSize = resolvedEnd - resolvedBegin;
    if (sliceSize < 0) {
      sliceSize = 0;
    }

    var sliceSeq = makeSequence(iterable);

    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
      sliceSeq.get = function (index, notSetValue) {
        index = wrapIndex(this, index);
        return index >= 0 && index < sliceSize ?
          iterable.get(index + resolvedBegin, notSetValue) :
          notSetValue;
      }
    }

    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (sliceSize === 0) {
        return 0;
      }
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var skipped = 0;
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k)  {
        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
                 iterations !== sliceSize;
        }
      });
      return iterations;
    };

    sliceSeq.__iteratorUncached = function(type, reverse) {
      if (sliceSize && reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      // Don't bother instantiating parent iterator if taking 0.
      var iterator = sliceSize && iterable.__iterator(type, reverse);
      var skipped = 0;
      var iterations = 0;
      return new src_Iterator__Iterator(function()  {
        while (skipped++ < resolvedBegin) {
          iterator.next();
        }
        if (++iterations > sliceSize) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (useKeys || type === ITERATE_VALUES) {
          return step;
        } else if (type === ITERATE_KEYS) {
          return iteratorValue(type, iterations - 1, undefined, step);
        } else {
          return iteratorValue(type, iterations - 1, step.value[1], step);
        }
      });
    }

    return sliceSeq;
  }


  function takeWhileFactory(iterable, predicate, context) {
    var takeSequence = makeSequence(iterable);
    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterations = 0;
      iterable.__iterate(function(v, k, c) 
        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
      );
      return iterations;
    };
    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterating = true;
      return new src_Iterator__Iterator(function()  {
        if (!iterating) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var k = entry[0];
        var v = entry[1];
        if (!predicate.call(context, v, k, this$0)) {
          iterating = false;
          return iteratorDone();
        }
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return takeSequence;
  }


  function skipWhileFactory(iterable, predicate, context, useKeys) {
    var skipSequence = makeSequence(iterable);
    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      });
      return iterations;
    };
    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var skipping = true;
      var iterations = 0;
      return new src_Iterator__Iterator(function()  {
        var step, k, v;
        do {
          step = iterator.next();
          if (step.done) {
            if (useKeys || type === ITERATE_VALUES) {
              return step;
            } else if (type === ITERATE_KEYS) {
              return iteratorValue(type, iterations++, undefined, step);
            } else {
              return iteratorValue(type, iterations++, step.value[1], step);
            }
          }
          var entry = step.value;
          k = entry[0];
          v = entry[1];
          skipping && (skipping = predicate.call(context, v, k, this$0));
        } while (skipping);
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return skipSequence;
  }


  function concatFactory(iterable, values) {
    var isKeyedIterable = isKeyed(iterable);
    var iters = [iterable].concat(values).map(function(v ) {
      if (!isIterable(v)) {
        v = isKeyedIterable ?
          keyedSeqFromValue(v) :
          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
      } else if (isKeyedIterable) {
        v = KeyedIterable(v);
      }
      return v;
    }).filter(function(v ) {return v.size !== 0});

    if (iters.length === 0) {
      return iterable;
    }

    if (iters.length === 1) {
      var singleton = iters[0];
      if (singleton === iterable ||
          isKeyedIterable && isKeyed(singleton) ||
          isIndexed(iterable) && isIndexed(singleton)) {
        return singleton;
      }
    }

    var concatSeq = new ArraySeq(iters);
    if (isKeyedIterable) {
      concatSeq = concatSeq.toKeyedSeq();
    } else if (!isIndexed(iterable)) {
      concatSeq = concatSeq.toSetSeq();
    }
    concatSeq = concatSeq.flatten(true);
    concatSeq.size = iters.reduce(
      function(sum, seq)  {
        if (sum !== undefined) {
          var size = seq.size;
          if (size !== undefined) {
            return sum + size;
          }
        }
      },
      0
    );
    return concatSeq;
  }


  function flattenFactory(iterable, depth, useKeys) {
    var flatSequence = makeSequence(iterable);
    flatSequence.__iterateUncached = function(fn, reverse) {
      var iterations = 0;
      var stopped = false;
      function flatDeep(iter, currentDepth) {var this$0 = this;
        iter.__iterate(function(v, k)  {
          if ((!depth || currentDepth < depth) && isIterable(v)) {
            flatDeep(v, currentDepth + 1);
          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
            stopped = true;
          }
          return !stopped;
        }, reverse);
      }
      flatDeep(iterable, 0);
      return iterations;
    }
    flatSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(type, reverse);
      var stack = [];
      var iterations = 0;
      return new src_Iterator__Iterator(function()  {
        while (iterator) {
          var step = iterator.next();
          if (step.done !== false) {
            iterator = stack.pop();
            continue;
          }
          var v = step.value;
          if (type === ITERATE_ENTRIES) {
            v = v[1];
          }
          if ((!depth || stack.length < depth) && isIterable(v)) {
            stack.push(iterator);
            iterator = v.__iterator(type, reverse);
          } else {
            return useKeys ? step : iteratorValue(type, iterations++, v, step);
          }
        }
        return iteratorDone();
      });
    }
    return flatSequence;
  }


  function flatMapFactory(iterable, mapper, context) {
    var coerce = iterableClass(iterable);
    return iterable.toSeq().map(
      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
    ).flatten(true);
  }


  function interposeFactory(iterable, separator) {
    var interposedSequence = makeSequence(iterable);
    interposedSequence.size = iterable.size && iterable.size * 2 -1;
    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k) 
        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
        fn(v, iterations++, this$0) !== false},
        reverse
      );
      return iterations;
    };
    interposedSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      var step;
      return new src_Iterator__Iterator(function()  {
        if (!step || iterations % 2) {
          step = iterator.next();
          if (step.done) {
            return step;
          }
        }
        return iterations % 2 ?
          iteratorValue(type, iterations++, separator) :
          iteratorValue(type, iterations++, step.value, step);
      });
    };
    return interposedSequence;
  }


  function sortFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    var isKeyedIterable = isKeyed(iterable);
    var index = 0;
    var entries = iterable.toSeq().map(
      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
    ).toArray();
    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
      isKeyedIterable ?
      function(v, i)  { entries[i].length = 2; } :
      function(v, i)  { entries[i] = v[1]; }
    );
    return isKeyedIterable ? KeyedSeq(entries) :
      isIndexed(iterable) ? IndexedSeq(entries) :
      SetSeq(entries);
  }


  function maxFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    if (mapper) {
      var entry = iterable.toSeq()
        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
      return entry && entry[0];
    } else {
      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
    }
  }

  function maxCompare(comparator, a, b) {
    var comp = comparator(b, a);
    // b is considered the new max if the comparator declares them equal, but
    // they are not equal and b is in fact a nullish value.
    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
  }


  function zipWithFactory(keyIter, zipper, iters) {
    var zipSequence = makeSequence(keyIter);
    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
    // Note: this a generic base implementation of __iterate in terms of
    // __iterator which may be more generically useful in the future.
    zipSequence.__iterate = function(fn, reverse) {
      /* generic:
      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        iterations++;
        if (fn(step.value[1], step.value[0], this) === false) {
          break;
        }
      }
      return iterations;
      */
      // indexed:
      var iterator = this.__iterator(ITERATE_VALUES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };
    zipSequence.__iteratorUncached = function(type, reverse) {
      var iterators = iters.map(function(i )
        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
      );
      var iterations = 0;
      var isDone = false;
      return new src_Iterator__Iterator(function()  {
        var steps;
        if (!isDone) {
          steps = iterators.map(function(i ) {return i.next()});
          isDone = steps.some(function(s ) {return s.done});
        }
        if (isDone) {
          return iteratorDone();
        }
        return iteratorValue(
          type,
          iterations++,
          zipper.apply(null, steps.map(function(s ) {return s.value}))
        );
      });
    };
    return zipSequence
  }


  // #pragma Helper Functions

  function reify(iter, seq) {
    return isSeq(iter) ? seq : iter.constructor(seq);
  }

  function validateEntry(entry) {
    if (entry !== Object(entry)) {
      throw new TypeError('Expected [K, V] tuple: ' + entry);
    }
  }

  function resolveSize(iter) {
    assertNotInfinite(iter.size);
    return ensureSize(iter);
  }

  function iterableClass(iterable) {
    return isKeyed(iterable) ? KeyedIterable :
      isIndexed(iterable) ? IndexedIterable :
      SetIterable;
  }

  function makeSequence(iterable) {
    return Object.create(
      (
        isKeyed(iterable) ? KeyedSeq :
        isIndexed(iterable) ? IndexedSeq :
        SetSeq
      ).prototype
    );
  }

  function cacheResultThrough() {
    if (this._iter.cacheResult) {
      this._iter.cacheResult();
      this.size = this._iter.size;
      return this;
    } else {
      return Seq.prototype.cacheResult.call(this);
    }
  }

  function defaultComparator(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }

  function forceIterator(keyPath) {
    var iter = getIterator(keyPath);
    if (!iter) {
      // Array might not be iterable in this environment, so we need a fallback
      // to our wrapped type.
      if (!isArrayLike(keyPath)) {
        throw new TypeError('Expected iterable or array-like: ' + keyPath);
      }
      iter = getIterator(Iterable(keyPath));
    }
    return iter;
  }

  createClass(src_Map__Map, KeyedCollection);

    // @pragma Construction

    function src_Map__Map(value) {
      return value === null || value === undefined ? emptyMap() :
        isMap(value) ? value :
        emptyMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    src_Map__Map.prototype.toString = function() {
      return this.__toString('Map {', '}');
    };

    // @pragma Access

    src_Map__Map.prototype.get = function(k, notSetValue) {
      return this._root ?
        this._root.get(0, undefined, k, notSetValue) :
        notSetValue;
    };

    // @pragma Modification

    src_Map__Map.prototype.set = function(k, v) {
      return updateMap(this, k, v);
    };

    src_Map__Map.prototype.setIn = function(keyPath, v) {
      return this.updateIn(keyPath, NOT_SET, function()  {return v});
    };

    src_Map__Map.prototype.remove = function(k) {
      return updateMap(this, k, NOT_SET);
    };

    src_Map__Map.prototype.deleteIn = function(keyPath) {
      return this.updateIn(keyPath, function()  {return NOT_SET});
    };

    src_Map__Map.prototype.update = function(k, notSetValue, updater) {
      return arguments.length === 1 ?
        k(this) :
        this.updateIn([k], notSetValue, updater);
    };

    src_Map__Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
      if (!updater) {
        updater = notSetValue;
        notSetValue = undefined;
      }
      var updatedValue = updateInDeepMap(
        this,
        forceIterator(keyPath),
        notSetValue,
        updater
      );
      return updatedValue === NOT_SET ? undefined : updatedValue;
    };

    src_Map__Map.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._root = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyMap();
    };

    // @pragma Composition

    src_Map__Map.prototype.merge = function(/*...iters*/) {
      return mergeIntoMapWith(this, undefined, arguments);
    };

    src_Map__Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, merger, iters);
    };

    src_Map__Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(keyPath, emptyMap(), function(m ) {return m.merge.apply(m, iters)});
    };

    src_Map__Map.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoMapWith(this, deepMerger(undefined), arguments);
    };

    src_Map__Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, deepMerger(merger), iters);
    };

    src_Map__Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(keyPath, emptyMap(), function(m ) {return m.mergeDeep.apply(m, iters)});
    };

    src_Map__Map.prototype.sort = function(comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator));
    };

    src_Map__Map.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator, mapper));
    };

    // @pragma Mutability

    src_Map__Map.prototype.withMutations = function(fn) {
      var mutable = this.asMutable();
      fn(mutable);
      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
    };

    src_Map__Map.prototype.asMutable = function() {
      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
    };

    src_Map__Map.prototype.asImmutable = function() {
      return this.__ensureOwner();
    };

    src_Map__Map.prototype.wasAltered = function() {
      return this.__altered;
    };

    src_Map__Map.prototype.__iterator = function(type, reverse) {
      return new MapIterator(this, type, reverse);
    };

    src_Map__Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      this._root && this._root.iterate(function(entry ) {
        iterations++;
        return fn(entry[1], entry[0], this$0);
      }, reverse);
      return iterations;
    };

    src_Map__Map.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeMap(this.size, this._root, ownerID, this.__hash);
    };


  function isMap(maybeMap) {
    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
  }

  src_Map__Map.isMap = isMap;

  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

  var MapPrototype = src_Map__Map.prototype;
  MapPrototype[IS_MAP_SENTINEL] = true;
  MapPrototype[DELETE] = MapPrototype.remove;
  MapPrototype.removeIn = MapPrototype.deleteIn;


  // #pragma Trie Nodes



    function ArrayMapNode(ownerID, entries) {
      this.ownerID = ownerID;
      this.entries = entries;
    }

    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && entries.length === 1) {
        return; // undefined
      }

      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
        return createNodes(ownerID, entries, key, value);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new ArrayMapNode(ownerID, newEntries);
    };




    function BitmapIndexedNode(ownerID, bitmap, nodes) {
      this.ownerID = ownerID;
      this.bitmap = bitmap;
      this.nodes = nodes;
    }

    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
      var bitmap = this.bitmap;
      return (bitmap & bit) === 0 ? notSetValue :
        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
    };

    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var bit = 1 << keyHashFrag;
      var bitmap = this.bitmap;
      var exists = (bitmap & bit) !== 0;

      if (!exists && value === NOT_SET) {
        return this;
      }

      var idx = popCount(bitmap & (bit - 1));
      var nodes = this.nodes;
      var node = exists ? nodes[idx] : undefined;
      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

      if (newNode === node) {
        return this;
      }

      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
      }

      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
        return nodes[idx ^ 1];
      }

      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
        return newNode;
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
      var newNodes = exists ? newNode ?
        setIn(nodes, idx, newNode, isEditable) :
        spliceOut(nodes, idx, isEditable) :
        spliceIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.bitmap = newBitmap;
        this.nodes = newNodes;
        return this;
      }

      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
    };




    function HashArrayMapNode(ownerID, count, nodes) {
      this.ownerID = ownerID;
      this.count = count;
      this.nodes = nodes;
    }

    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var node = this.nodes[idx];
      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
    };

    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var removed = value === NOT_SET;
      var nodes = this.nodes;
      var node = nodes[idx];

      if (removed && !node) {
        return this;
      }

      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
      if (newNode === node) {
        return this;
      }

      var newCount = this.count;
      if (!node) {
        newCount++;
      } else if (!newNode) {
        newCount--;
        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
          return packNodes(ownerID, nodes, newCount, idx);
        }
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newNodes = setIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.count = newCount;
        this.nodes = newNodes;
        return this;
      }

      return new HashArrayMapNode(ownerID, newCount, newNodes);
    };




    function HashCollisionNode(ownerID, keyHash, entries) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entries = entries;
    }

    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }

      var removed = value === NOT_SET;

      if (keyHash !== this.keyHash) {
        if (removed) {
          return this;
        }
        SetRef(didAlter);
        SetRef(didChangeSize);
        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
      }

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && len === 2) {
        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
    };




    function ValueNode(ownerID, keyHash, entry) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entry = entry;
    }

    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
    };

    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;
      var keyMatch = is(key, this.entry[0]);
      if (keyMatch ? value === this.entry[1] : removed) {
        return this;
      }

      SetRef(didAlter);

      if (removed) {
        SetRef(didChangeSize);
        return; // undefined
      }

      if (keyMatch) {
        if (ownerID && ownerID === this.ownerID) {
          this.entry[1] = value;
          return this;
        }
        return new ValueNode(ownerID, this.keyHash, [key, value]);
      }

      SetRef(didChangeSize);
      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
    };



  // #pragma Iterators

  ArrayMapNode.prototype.iterate =
  HashCollisionNode.prototype.iterate = function (fn, reverse) {
    var entries = this.entries;
    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
        return false;
      }
    }
  }

  BitmapIndexedNode.prototype.iterate =
  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
    var nodes = this.nodes;
    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
      var node = nodes[reverse ? maxIndex - ii : ii];
      if (node && node.iterate(fn, reverse) === false) {
        return false;
      }
    }
  }

  ValueNode.prototype.iterate = function (fn, reverse) {
    return fn(this.entry);
  }

  createClass(MapIterator, src_Iterator__Iterator);

    function MapIterator(map, type, reverse) {
      this._type = type;
      this._reverse = reverse;
      this._stack = map._root && mapIteratorFrame(map._root);
    }

    MapIterator.prototype.next = function() {
      var type = this._type;
      var stack = this._stack;
      while (stack) {
        var node = stack.node;
        var index = stack.index++;
        var maxIndex;
        if (node.entry) {
          if (index === 0) {
            return mapIteratorValue(type, node.entry);
          }
        } else if (node.entries) {
          maxIndex = node.entries.length - 1;
          if (index <= maxIndex) {
            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
          }
        } else {
          maxIndex = node.nodes.length - 1;
          if (index <= maxIndex) {
            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
            if (subNode) {
              if (subNode.entry) {
                return mapIteratorValue(type, subNode.entry);
              }
              stack = this._stack = mapIteratorFrame(subNode, stack);
            }
            continue;
          }
        }
        stack = this._stack = this._stack.__prev;
      }
      return iteratorDone();
    };


  function mapIteratorValue(type, entry) {
    return iteratorValue(type, entry[0], entry[1]);
  }

  function mapIteratorFrame(node, prev) {
    return {
      node: node,
      index: 0,
      __prev: prev
    };
  }

  function makeMap(size, root, ownerID, hash) {
    var map = Object.create(MapPrototype);
    map.size = size;
    map._root = root;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_MAP;
  function emptyMap() {
    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
  }

  function updateMap(map, k, v) {
    var newRoot;
    var newSize;
    if (!map._root) {
      if (v === NOT_SET) {
        return map;
      }
      newSize = 1;
      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
    } else {
      var didChangeSize = MakeRef(CHANGE_LENGTH);
      var didAlter = MakeRef(DID_ALTER);
      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
      if (!didAlter.value) {
        return map;
      }
      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
    }
    if (map.__ownerID) {
      map.size = newSize;
      map._root = newRoot;
      map.__hash = undefined;
      map.__altered = true;
      return map;
    }
    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
  }

  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (!node) {
      if (value === NOT_SET) {
        return node;
      }
      SetRef(didAlter);
      SetRef(didChangeSize);
      return new ValueNode(ownerID, keyHash, [key, value]);
    }
    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
  }

  function isLeafNode(node) {
    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
  }

  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
    if (node.keyHash === keyHash) {
      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
    }

    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

    var newNode;
    var nodes = idx1 === idx2 ?
      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);

    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
  }

  function createNodes(ownerID, entries, key, value) {
    if (!ownerID) {
      ownerID = new OwnerID();
    }
    var node = new ValueNode(ownerID, hash(key), [key, value]);
    for (var ii = 0; ii < entries.length; ii++) {
      var entry = entries[ii];
      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
    }
    return node;
  }

  function packNodes(ownerID, nodes, count, excluding) {
    var bitmap = 0;
    var packedII = 0;
    var packedNodes = new Array(count);
    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
      var node = nodes[ii];
      if (node !== undefined && ii !== excluding) {
        bitmap |= bit;
        packedNodes[packedII++] = node;
      }
    }
    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
  }

  function expandNodes(ownerID, nodes, bitmap, including, node) {
    var count = 0;
    var expandedNodes = new Array(SIZE);
    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
    }
    expandedNodes[including] = node;
    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
  }

  function mergeIntoMapWith(map, merger, iterables) {
    var iters = [];
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = KeyedIterable(value);
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    return mergeIntoCollectionWith(map, merger, iters);
  }

  function deepMerger(merger) {
    return function(existing, value, key) 
      {return existing && existing.mergeDeepWith && isIterable(value) ?
        existing.mergeDeepWith(merger, value) :
        merger ? merger(existing, value, key) : value};
  }

  function mergeIntoCollectionWith(collection, merger, iters) {
    iters = iters.filter(function(x ) {return x.size !== 0});
    if (iters.length === 0) {
      return collection;
    }
    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
      return collection.constructor(iters[0]);
    }
    return collection.withMutations(function(collection ) {
      var mergeIntoMap = merger ?
        function(value, key)  {
          collection.update(key, NOT_SET, function(existing )
            {return existing === NOT_SET ? value : merger(existing, value, key)}
          );
        } :
        function(value, key)  {
          collection.set(key, value);
        }
      for (var ii = 0; ii < iters.length; ii++) {
        iters[ii].forEach(mergeIntoMap);
      }
    });
  }

  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
    var isNotSet = existing === NOT_SET;
    var step = keyPathIter.next();
    if (step.done) {
      var existingValue = isNotSet ? notSetValue : existing;
      var newValue = updater(existingValue);
      return newValue === existingValue ? existing : newValue;
    }
    invariant(
      isNotSet || (existing && existing.set),
      'invalid keyPath'
    );
    var key = step.value;
    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
    var nextUpdated = updateInDeepMap(
      nextExisting,
      keyPathIter,
      notSetValue,
      updater
    );
    return nextUpdated === nextExisting ? existing :
      nextUpdated === NOT_SET ? existing.remove(key) :
      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
  }

  function popCount(x) {
    x = x - ((x >> 1) & 0x55555555);
    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
    x = (x + (x >> 4)) & 0x0f0f0f0f;
    x = x + (x >> 8);
    x = x + (x >> 16);
    return x & 0x7f;
  }

  function setIn(array, idx, val, canEdit) {
    var newArray = canEdit ? array : arrCopy(array);
    newArray[idx] = val;
    return newArray;
  }

  function spliceIn(array, idx, val, canEdit) {
    var newLen = array.length + 1;
    if (canEdit && idx + 1 === newLen) {
      array[idx] = val;
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        newArray[ii] = val;
        after = -1;
      } else {
        newArray[ii] = array[ii + after];
      }
    }
    return newArray;
  }

  function spliceOut(array, idx, canEdit) {
    var newLen = array.length - 1;
    if (canEdit && idx === newLen) {
      array.pop();
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        after = 1;
      }
      newArray[ii] = array[ii + after];
    }
    return newArray;
  }

  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

  createClass(List, IndexedCollection);

    // @pragma Construction

    function List(value) {
      var empty = emptyList();
      if (value === null || value === undefined) {
        return empty;
      }
      if (isList(value)) {
        return value;
      }
      var iter = IndexedIterable(value);
      var size = iter.size;
      if (size === 0) {
        return empty;
      }
      assertNotInfinite(size);
      if (size > 0 && size < SIZE) {
        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
      }
      return empty.withMutations(function(list ) {
        list.setSize(size);
        iter.forEach(function(v, i)  {return list.set(i, v)});
      });
    }

    List.of = function(/*...values*/) {
      return this(arguments);
    };

    List.prototype.toString = function() {
      return this.__toString('List [', ']');
    };

    // @pragma Access

    List.prototype.get = function(index, notSetValue) {
      index = wrapIndex(this, index);
      if (index < 0 || index >= this.size) {
        return notSetValue;
      }
      index += this._origin;
      var node = listNodeFor(this, index);
      return node && node.array[index & MASK];
    };

    // @pragma Modification

    List.prototype.set = function(index, value) {
      return updateList(this, index, value);
    };

    List.prototype.remove = function(index) {
      return !this.has(index) ? this :
        index === 0 ? this.shift() :
        index === this.size - 1 ? this.pop() :
        this.splice(index, 1);
    };

    List.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = this._origin = this._capacity = 0;
        this._level = SHIFT;
        this._root = this._tail = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyList();
    };

    List.prototype.push = function(/*...values*/) {
      var values = arguments;
      var oldSize = this.size;
      return this.withMutations(function(list ) {
        setListBounds(list, 0, oldSize + values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(oldSize + ii, values[ii]);
        }
      });
    };

    List.prototype.pop = function() {
      return setListBounds(this, 0, -1);
    };

    List.prototype.unshift = function(/*...values*/) {
      var values = arguments;
      return this.withMutations(function(list ) {
        setListBounds(list, -values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(ii, values[ii]);
        }
      });
    };

    List.prototype.shift = function() {
      return setListBounds(this, 1);
    };

    // @pragma Composition

    List.prototype.merge = function(/*...iters*/) {
      return mergeIntoListWith(this, undefined, arguments);
    };

    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, merger, iters);
    };

    List.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoListWith(this, deepMerger(undefined), arguments);
    };

    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, deepMerger(merger), iters);
    };

    List.prototype.setSize = function(size) {
      return setListBounds(this, 0, size);
    };

    // @pragma Iteration

    List.prototype.slice = function(begin, end) {
      var size = this.size;
      if (wholeSlice(begin, end, size)) {
        return this;
      }
      return setListBounds(
        this,
        resolveBegin(begin, size),
        resolveEnd(end, size)
      );
    };

    List.prototype.__iterator = function(type, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      return new src_Iterator__Iterator(function()  {
        var value = values();
        return value === DONE ?
          iteratorDone() :
          iteratorValue(type, index++, value);
      });
    };

    List.prototype.__iterate = function(fn, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      var value;
      while ((value = values()) !== DONE) {
        if (fn(value, index++, this) === false) {
          break;
        }
      }
      return index;
    };

    List.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        return this;
      }
      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
    };


  function isList(maybeList) {
    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
  }

  List.isList = isList;

  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';

  var ListPrototype = List.prototype;
  ListPrototype[IS_LIST_SENTINEL] = true;
  ListPrototype[DELETE] = ListPrototype.remove;
  ListPrototype.setIn = MapPrototype.setIn;
  ListPrototype.deleteIn =
  ListPrototype.removeIn = MapPrototype.removeIn;
  ListPrototype.update = MapPrototype.update;
  ListPrototype.updateIn = MapPrototype.updateIn;
  ListPrototype.mergeIn = MapPrototype.mergeIn;
  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  ListPrototype.withMutations = MapPrototype.withMutations;
  ListPrototype.asMutable = MapPrototype.asMutable;
  ListPrototype.asImmutable = MapPrototype.asImmutable;
  ListPrototype.wasAltered = MapPrototype.wasAltered;



    function VNode(array, ownerID) {
      this.array = array;
      this.ownerID = ownerID;
    }

    // TODO: seems like these methods are very similar

    VNode.prototype.removeBefore = function(ownerID, level, index) {
      if (index === level ? 1 << level : 0 || this.array.length === 0) {
        return this;
      }
      var originIndex = (index >>> level) & MASK;
      if (originIndex >= this.array.length) {
        return new VNode([], ownerID);
      }
      var removingFirst = originIndex === 0;
      var newChild;
      if (level > 0) {
        var oldChild = this.array[originIndex];
        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
        if (newChild === oldChild && removingFirst) {
          return this;
        }
      }
      if (removingFirst && !newChild) {
        return this;
      }
      var editable = editableVNode(this, ownerID);
      if (!removingFirst) {
        for (var ii = 0; ii < originIndex; ii++) {
          editable.array[ii] = undefined;
        }
      }
      if (newChild) {
        editable.array[originIndex] = newChild;
      }
      return editable;
    };

    VNode.prototype.removeAfter = function(ownerID, level, index) {
      if (index === level ? 1 << level : 0 || this.array.length === 0) {
        return this;
      }
      var sizeIndex = ((index - 1) >>> level) & MASK;
      if (sizeIndex >= this.array.length) {
        return this;
      }
      var removingLast = sizeIndex === this.array.length - 1;
      var newChild;
      if (level > 0) {
        var oldChild = this.array[sizeIndex];
        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
        if (newChild === oldChild && removingLast) {
          return this;
        }
      }
      if (removingLast && !newChild) {
        return this;
      }
      var editable = editableVNode(this, ownerID);
      if (!removingLast) {
        editable.array.pop();
      }
      if (newChild) {
        editable.array[sizeIndex] = newChild;
      }
      return editable;
    };



  var DONE = {};

  function iterateList(list, reverse) {
    var left = list._origin;
    var right = list._capacity;
    var tailPos = getTailOffset(right);
    var tail = list._tail;

    return iterateNodeOrLeaf(list._root, list._level, 0);

    function iterateNodeOrLeaf(node, level, offset) {
      return level === 0 ?
        iterateLeaf(node, offset) :
        iterateNode(node, level, offset);
    }

    function iterateLeaf(node, offset) {
      var array = offset === tailPos ? tail && tail.array : node && node.array;
      var from = offset > left ? 0 : left - offset;
      var to = right - offset;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        if (from === to) {
          return DONE;
        }
        var idx = reverse ? --to : from++;
        return array && array[idx];
      };
    }

    function iterateNode(node, level, offset) {
      var values;
      var array = node && node.array;
      var from = offset > left ? 0 : (left - offset) >> level;
      var to = ((right - offset) >> level) + 1;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        do {
          if (values) {
            var value = values();
            if (value !== DONE) {
              return value;
            }
            values = null;
          }
          if (from === to) {
            return DONE;
          }
          var idx = reverse ? --to : from++;
          values = iterateNodeOrLeaf(
            array && array[idx], level - SHIFT, offset + (idx << level)
          );
        } while (true);
      };
    }
  }

  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
    var list = Object.create(ListPrototype);
    list.size = capacity - origin;
    list._origin = origin;
    list._capacity = capacity;
    list._level = level;
    list._root = root;
    list._tail = tail;
    list.__ownerID = ownerID;
    list.__hash = hash;
    list.__altered = false;
    return list;
  }

  var EMPTY_LIST;
  function emptyList() {
    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
  }

  function updateList(list, index, value) {
    index = wrapIndex(list, index);

    if (index >= list.size || index < 0) {
      return list.withMutations(function(list ) {
        index < 0 ?
          setListBounds(list, index).set(0, value) :
          setListBounds(list, 0, index + 1).set(index, value)
      });
    }

    index += list._origin;

    var newTail = list._tail;
    var newRoot = list._root;
    var didAlter = MakeRef(DID_ALTER);
    if (index >= getTailOffset(list._capacity)) {
      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
    } else {
      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
    }

    if (!didAlter.value) {
      return list;
    }

    if (list.__ownerID) {
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
  }

  function updateVNode(node, ownerID, level, index, value, didAlter) {
    var idx = (index >>> level) & MASK;
    var nodeHas = node && idx < node.array.length;
    if (!nodeHas && value === undefined) {
      return node;
    }

    var newNode;

    if (level > 0) {
      var lowerNode = node && node.array[idx];
      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
      if (newLowerNode === lowerNode) {
        return node;
      }
      newNode = editableVNode(node, ownerID);
      newNode.array[idx] = newLowerNode;
      return newNode;
    }

    if (nodeHas && node.array[idx] === value) {
      return node;
    }

    SetRef(didAlter);

    newNode = editableVNode(node, ownerID);
    if (value === undefined && idx === newNode.array.length - 1) {
      newNode.array.pop();
    } else {
      newNode.array[idx] = value;
    }
    return newNode;
  }

  function editableVNode(node, ownerID) {
    if (ownerID && node && ownerID === node.ownerID) {
      return node;
    }
    return new VNode(node ? node.array.slice() : [], ownerID);
  }

  function listNodeFor(list, rawIndex) {
    if (rawIndex >= getTailOffset(list._capacity)) {
      return list._tail;
    }
    if (rawIndex < 1 << (list._level + SHIFT)) {
      var node = list._root;
      var level = list._level;
      while (node && level > 0) {
        node = node.array[(rawIndex >>> level) & MASK];
        level -= SHIFT;
      }
      return node;
    }
  }

  function setListBounds(list, begin, end) {
    var owner = list.__ownerID || new OwnerID();
    var oldOrigin = list._origin;
    var oldCapacity = list._capacity;
    var newOrigin = oldOrigin + begin;
    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
      return list;
    }

    // If it's going to end after it starts, it's empty.
    if (newOrigin >= newCapacity) {
      return list.clear();
    }

    var newLevel = list._level;
    var newRoot = list._root;

    // New origin might require creating a higher root.
    var offsetShift = 0;
    while (newOrigin + offsetShift < 0) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
      newLevel += SHIFT;
      offsetShift += 1 << newLevel;
    }
    if (offsetShift) {
      newOrigin += offsetShift;
      oldOrigin += offsetShift;
      newCapacity += offsetShift;
      oldCapacity += offsetShift;
    }

    var oldTailOffset = getTailOffset(oldCapacity);
    var newTailOffset = getTailOffset(newCapacity);

    // New size might require creating a higher root.
    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
      newLevel += SHIFT;
    }

    // Locate or create the new tail.
    var oldTail = list._tail;
    var newTail = newTailOffset < oldTailOffset ?
      listNodeFor(list, newCapacity - 1) :
      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

    // Merge Tail into tree.
    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
      newRoot = editableVNode(newRoot, owner);
      var node = newRoot;
      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
        var idx = (oldTailOffset >>> level) & MASK;
        node = node.array[idx] = editableVNode(node.array[idx], owner);
      }
      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
    }

    // If the size has been reduced, there's a chance the tail needs to be trimmed.
    if (newCapacity < oldCapacity) {
      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
    }

    // If the new origin is within the tail, then we do not need a root.
    if (newOrigin >= newTailOffset) {
      newOrigin -= newTailOffset;
      newCapacity -= newTailOffset;
      newLevel = SHIFT;
      newRoot = null;
      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

    // Otherwise, if the root has been trimmed, garbage collect.
    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
      offsetShift = 0;

      // Identify the new top root node of the subtree of the old root.
      while (newRoot) {
        var beginIndex = (newOrigin >>> newLevel) & MASK;
        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
          break;
        }
        if (beginIndex) {
          offsetShift += (1 << newLevel) * beginIndex;
        }
        newLevel -= SHIFT;
        newRoot = newRoot.array[beginIndex];
      }

      // Trim the new sides of the new root.
      if (newRoot && newOrigin > oldOrigin) {
        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
      }
      if (newRoot && newTailOffset < oldTailOffset) {
        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
      }
      if (offsetShift) {
        newOrigin -= offsetShift;
        newCapacity -= offsetShift;
      }
    }

    if (list.__ownerID) {
      list.size = newCapacity - newOrigin;
      list._origin = newOrigin;
      list._capacity = newCapacity;
      list._level = newLevel;
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
  }

  function mergeIntoListWith(list, merger, iterables) {
    var iters = [];
    var maxSize = 0;
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = IndexedIterable(value);
      if (iter.size > maxSize) {
        maxSize = iter.size;
      }
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    if (maxSize > list.size) {
      list = list.setSize(maxSize);
    }
    return mergeIntoCollectionWith(list, merger, iters);
  }

  function getTailOffset(size) {
    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
  }

  createClass(OrderedMap, src_Map__Map);

    // @pragma Construction

    function OrderedMap(value) {
      return value === null || value === undefined ? emptyOrderedMap() :
        isOrderedMap(value) ? value :
        emptyOrderedMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    OrderedMap.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedMap.prototype.toString = function() {
      return this.__toString('OrderedMap {', '}');
    };

    // @pragma Access

    OrderedMap.prototype.get = function(k, notSetValue) {
      var index = this._map.get(k);
      return index !== undefined ? this._list.get(index)[1] : notSetValue;
    };

    // @pragma Modification

    OrderedMap.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._map.clear();
        this._list.clear();
        return this;
      }
      return emptyOrderedMap();
    };

    OrderedMap.prototype.set = function(k, v) {
      return updateOrderedMap(this, k, v);
    };

    OrderedMap.prototype.remove = function(k) {
      return updateOrderedMap(this, k, NOT_SET);
    };

    OrderedMap.prototype.wasAltered = function() {
      return this._map.wasAltered() || this._list.wasAltered();
    };

    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._list.__iterate(
        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
        reverse
      );
    };

    OrderedMap.prototype.__iterator = function(type, reverse) {
      return this._list.fromEntrySeq().__iterator(type, reverse);
    };

    OrderedMap.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      var newList = this._list.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        this._list = newList;
        return this;
      }
      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
    };


  function isOrderedMap(maybeOrderedMap) {
    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
  }

  OrderedMap.isOrderedMap = isOrderedMap;

  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;



  function makeOrderedMap(map, list, ownerID, hash) {
    var omap = Object.create(OrderedMap.prototype);
    omap.size = map ? map.size : 0;
    omap._map = map;
    omap._list = list;
    omap.__ownerID = ownerID;
    omap.__hash = hash;
    return omap;
  }

  var EMPTY_ORDERED_MAP;
  function emptyOrderedMap() {
    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
  }

  function updateOrderedMap(omap, k, v) {
    var map = omap._map;
    var list = omap._list;
    var i = map.get(k);
    var has = i !== undefined;
    var newMap;
    var newList;
    if (v === NOT_SET) { // removed
      if (!has) {
        return omap;
      }
      if (list.size >= SIZE && list.size >= map.size * 2) {
        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
        if (omap.__ownerID) {
          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
        }
      } else {
        newMap = map.remove(k);
        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
      }
    } else {
      if (has) {
        if (v === list.get(i)[1]) {
          return omap;
        }
        newMap = map;
        newList = list.set(i, [k, v]);
      } else {
        newMap = map.set(k, list.size);
        newList = list.set(list.size, [k, v]);
      }
    }
    if (omap.__ownerID) {
      omap.size = newMap.size;
      omap._map = newMap;
      omap._list = newList;
      omap.__hash = undefined;
      return omap;
    }
    return makeOrderedMap(newMap, newList);
  }

  createClass(Stack, IndexedCollection);

    // @pragma Construction

    function Stack(value) {
      return value === null || value === undefined ? emptyStack() :
        isStack(value) ? value :
        emptyStack().unshiftAll(value);
    }

    Stack.of = function(/*...values*/) {
      return this(arguments);
    };

    Stack.prototype.toString = function() {
      return this.__toString('Stack [', ']');
    };

    // @pragma Access

    Stack.prototype.get = function(index, notSetValue) {
      var head = this._head;
      index = wrapIndex(this, index);
      while (head && index--) {
        head = head.next;
      }
      return head ? head.value : notSetValue;
    };

    Stack.prototype.peek = function() {
      return this._head && this._head.value;
    };

    // @pragma Modification

    Stack.prototype.push = function(/*...values*/) {
      if (arguments.length === 0) {
        return this;
      }
      var newSize = this.size + arguments.length;
      var head = this._head;
      for (var ii = arguments.length - 1; ii >= 0; ii--) {
        head = {
          value: arguments[ii],
          next: head
        };
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pushAll = function(iter) {
      iter = IndexedIterable(iter);
      if (iter.size === 0) {
        return this;
      }
      assertNotInfinite(iter.size);
      var newSize = this.size;
      var head = this._head;
      iter.reverse().forEach(function(value ) {
        newSize++;
        head = {
          value: value,
          next: head
        };
      });
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pop = function() {
      return this.slice(1);
    };

    Stack.prototype.unshift = function(/*...values*/) {
      return this.push.apply(this, arguments);
    };

    Stack.prototype.unshiftAll = function(iter) {
      return this.pushAll(iter);
    };

    Stack.prototype.shift = function() {
      return this.pop.apply(this, arguments);
    };

    Stack.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._head = undefined;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyStack();
    };

    Stack.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      var resolvedBegin = resolveBegin(begin, this.size);
      var resolvedEnd = resolveEnd(end, this.size);
      if (resolvedEnd !== this.size) {
        // super.slice(begin, end);
        return IndexedCollection.prototype.slice.call(this, begin, end);
      }
      var newSize = this.size - resolvedBegin;
      var head = this._head;
      while (resolvedBegin--) {
        head = head.next;
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    // @pragma Mutability

    Stack.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeStack(this.size, this._head, ownerID, this.__hash);
    };

    // @pragma Iteration

    Stack.prototype.__iterate = function(fn, reverse) {
      if (reverse) {
        return this.reverse().__iterate(fn);
      }
      var iterations = 0;
      var node = this._head;
      while (node) {
        if (fn(node.value, iterations++, this) === false) {
          break;
        }
        node = node.next;
      }
      return iterations;
    };

    Stack.prototype.__iterator = function(type, reverse) {
      if (reverse) {
        return this.reverse().__iterator(type);
      }
      var iterations = 0;
      var node = this._head;
      return new src_Iterator__Iterator(function()  {
        if (node) {
          var value = node.value;
          node = node.next;
          return iteratorValue(type, iterations++, value);
        }
        return iteratorDone();
      });
    };


  function isStack(maybeStack) {
    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
  }

  Stack.isStack = isStack;

  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

  var StackPrototype = Stack.prototype;
  StackPrototype[IS_STACK_SENTINEL] = true;
  StackPrototype.withMutations = MapPrototype.withMutations;
  StackPrototype.asMutable = MapPrototype.asMutable;
  StackPrototype.asImmutable = MapPrototype.asImmutable;
  StackPrototype.wasAltered = MapPrototype.wasAltered;


  function makeStack(size, head, ownerID, hash) {
    var map = Object.create(StackPrototype);
    map.size = size;
    map._head = head;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_STACK;
  function emptyStack() {
    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
  }

  createClass(src_Set__Set, SetCollection);

    // @pragma Construction

    function src_Set__Set(value) {
      return value === null || value === undefined ? emptySet() :
        isSet(value) ? value :
        emptySet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    src_Set__Set.of = function(/*...values*/) {
      return this(arguments);
    };

    src_Set__Set.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    src_Set__Set.prototype.toString = function() {
      return this.__toString('Set {', '}');
    };

    // @pragma Access

    src_Set__Set.prototype.has = function(value) {
      return this._map.has(value);
    };

    // @pragma Modification

    src_Set__Set.prototype.add = function(value) {
      return updateSet(this, this._map.set(value, true));
    };

    src_Set__Set.prototype.remove = function(value) {
      return updateSet(this, this._map.remove(value));
    };

    src_Set__Set.prototype.clear = function() {
      return updateSet(this, this._map.clear());
    };

    // @pragma Composition

    src_Set__Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
      iters = iters.filter(function(x ) {return x.size !== 0});
      if (iters.length === 0) {
        return this;
      }
      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
        return this.constructor(iters[0]);
      }
      return this.withMutations(function(set ) {
        for (var ii = 0; ii < iters.length; ii++) {
          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
        }
      });
    };

    src_Set__Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (!iters.every(function(iter ) {return iter.contains(value)})) {
            set.remove(value);
          }
        });
      });
    };

    src_Set__Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (iters.some(function(iter ) {return iter.contains(value)})) {
            set.remove(value);
          }
        });
      });
    };

    src_Set__Set.prototype.merge = function() {
      return this.union.apply(this, arguments);
    };

    src_Set__Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return this.union.apply(this, iters);
    };

    src_Set__Set.prototype.sort = function(comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator));
    };

    src_Set__Set.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator, mapper));
    };

    src_Set__Set.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    src_Set__Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
    };

    src_Set__Set.prototype.__iterator = function(type, reverse) {
      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
    };

    src_Set__Set.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return this.__make(newMap, ownerID);
    };


  function isSet(maybeSet) {
    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
  }

  src_Set__Set.isSet = isSet;

  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';

  var SetPrototype = src_Set__Set.prototype;
  SetPrototype[IS_SET_SENTINEL] = true;
  SetPrototype[DELETE] = SetPrototype.remove;
  SetPrototype.mergeDeep = SetPrototype.merge;
  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
  SetPrototype.withMutations = MapPrototype.withMutations;
  SetPrototype.asMutable = MapPrototype.asMutable;
  SetPrototype.asImmutable = MapPrototype.asImmutable;

  SetPrototype.__empty = emptySet;
  SetPrototype.__make = makeSet;

  function updateSet(set, newMap) {
    if (set.__ownerID) {
      set.size = newMap.size;
      set._map = newMap;
      return set;
    }
    return newMap === set._map ? set :
      newMap.size === 0 ? set.__empty() :
      set.__make(newMap);
  }

  function makeSet(map, ownerID) {
    var set = Object.create(SetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_SET;
  function emptySet() {
    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
  }

  createClass(OrderedSet, src_Set__Set);

    // @pragma Construction

    function OrderedSet(value) {
      return value === null || value === undefined ? emptyOrderedSet() :
        isOrderedSet(value) ? value :
        emptyOrderedSet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    OrderedSet.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedSet.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    OrderedSet.prototype.toString = function() {
      return this.__toString('OrderedSet {', '}');
    };


  function isOrderedSet(maybeOrderedSet) {
    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
  }

  OrderedSet.isOrderedSet = isOrderedSet;

  var OrderedSetPrototype = OrderedSet.prototype;
  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;

  OrderedSetPrototype.__empty = emptyOrderedSet;
  OrderedSetPrototype.__make = makeOrderedSet;

  function makeOrderedSet(map, ownerID) {
    var set = Object.create(OrderedSetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_ORDERED_SET;
  function emptyOrderedSet() {
    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
  }

  createClass(Record, KeyedCollection);

    function Record(defaultValues, name) {
      var hasInitialized;

      var RecordType = function Record(values) {
        if (values instanceof RecordType) {
          return values;
        }
        if (!(this instanceof RecordType)) {
          return new RecordType(values);
        }
        if (!hasInitialized) {
          hasInitialized = true;
          var keys = Object.keys(defaultValues);
          setProps(RecordTypePrototype, keys);
          RecordTypePrototype.size = keys.length;
          RecordTypePrototype._name = name;
          RecordTypePrototype._keys = keys;
          RecordTypePrototype._defaultValues = defaultValues;
        }
        this._map = src_Map__Map(values);
      };

      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
      RecordTypePrototype.constructor = RecordType;

      return RecordType;
    }

    Record.prototype.toString = function() {
      return this.__toString(recordName(this) + ' {', '}');
    };

    // @pragma Access

    Record.prototype.has = function(k) {
      return this._defaultValues.hasOwnProperty(k);
    };

    Record.prototype.get = function(k, notSetValue) {
      if (!this.has(k)) {
        return notSetValue;
      }
      var defaultVal = this._defaultValues[k];
      return this._map ? this._map.get(k, defaultVal) : defaultVal;
    };

    // @pragma Modification

    Record.prototype.clear = function() {
      if (this.__ownerID) {
        this._map && this._map.clear();
        return this;
      }
      var RecordType = this.constructor;
      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
    };

    Record.prototype.set = function(k, v) {
      if (!this.has(k)) {
        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
      }
      var newMap = this._map && this._map.set(k, v);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.remove = function(k) {
      if (!this.has(k)) {
        return this;
      }
      var newMap = this._map && this._map.remove(k);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
    };

    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
    };

    Record.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map && this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return makeRecord(this, newMap, ownerID);
    };


  var RecordPrototype = Record.prototype;
  RecordPrototype[DELETE] = RecordPrototype.remove;
  RecordPrototype.deleteIn =
  RecordPrototype.removeIn = MapPrototype.removeIn;
  RecordPrototype.merge = MapPrototype.merge;
  RecordPrototype.mergeWith = MapPrototype.mergeWith;
  RecordPrototype.mergeIn = MapPrototype.mergeIn;
  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  RecordPrototype.setIn = MapPrototype.setIn;
  RecordPrototype.update = MapPrototype.update;
  RecordPrototype.updateIn = MapPrototype.updateIn;
  RecordPrototype.withMutations = MapPrototype.withMutations;
  RecordPrototype.asMutable = MapPrototype.asMutable;
  RecordPrototype.asImmutable = MapPrototype.asImmutable;


  function makeRecord(likeRecord, map, ownerID) {
    var record = Object.create(Object.getPrototypeOf(likeRecord));
    record._map = map;
    record.__ownerID = ownerID;
    return record;
  }

  function recordName(record) {
    return record._name || record.constructor.name || 'Record';
  }

  function setProps(prototype, names) {
    try {
      names.forEach(setProp.bind(undefined, prototype));
    } catch (error) {
      // Object.defineProperty failed. Probably IE8.
    }
  }

  function setProp(prototype, name) {
    Object.defineProperty(prototype, name, {
      get: function() {
        return this.get(name);
      },
      set: function(value) {
        invariant(this.__ownerID, 'Cannot set on an immutable record.');
        this.set(name, value);
      }
    });
  }

  function deepEqual(a, b) {
    if (a === b) {
      return true;
    }

    if (
      !isIterable(b) ||
      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
      isKeyed(a) !== isKeyed(b) ||
      isIndexed(a) !== isIndexed(b) ||
      isOrdered(a) !== isOrdered(b)
    ) {
      return false;
    }

    if (a.size === 0 && b.size === 0) {
      return true;
    }

    var notAssociative = !isAssociative(a);

    if (isOrdered(a)) {
      var entries = a.entries();
      return b.every(function(v, k)  {
        var entry = entries.next().value;
        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
      }) && entries.next().done;
    }

    var flipped = false;

    if (a.size === undefined) {
      if (b.size === undefined) {
        if (typeof a.cacheResult === 'function') {
          a.cacheResult();
        }
      } else {
        flipped = true;
        var _ = a;
        a = b;
        b = _;
      }
    }

    var allEqual = true;
    var bSize = b.__iterate(function(v, k)  {
      if (notAssociative ? !a.has(v) :
          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
        allEqual = false;
        return false;
      }
    });

    return allEqual && a.size === bSize;
  }

  createClass(Range, IndexedSeq);

    function Range(start, end, step) {
      if (!(this instanceof Range)) {
        return new Range(start, end, step);
      }
      invariant(step !== 0, 'Cannot step a Range by 0');
      start = start || 0;
      if (end === undefined) {
        end = Infinity;
      }
      step = step === undefined ? 1 : Math.abs(step);
      if (end < start) {
        step = -step;
      }
      this._start = start;
      this._end = end;
      this._step = step;
      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
      if (this.size === 0) {
        if (EMPTY_RANGE) {
          return EMPTY_RANGE;
        }
        EMPTY_RANGE = this;
      }
    }

    Range.prototype.toString = function() {
      if (this.size === 0) {
        return 'Range []';
      }
      return 'Range [ ' +
        this._start + '...' + this._end +
        (this._step > 1 ? ' by ' + this._step : '') +
      ' ]';
    };

    Range.prototype.get = function(index, notSetValue) {
      return this.has(index) ?
        this._start + wrapIndex(this, index) * this._step :
        notSetValue;
    };

    Range.prototype.contains = function(searchValue) {
      var possibleIndex = (searchValue - this._start) / this._step;
      return possibleIndex >= 0 &&
        possibleIndex < this.size &&
        possibleIndex === Math.floor(possibleIndex);
    };

    Range.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      begin = resolveBegin(begin, this.size);
      end = resolveEnd(end, this.size);
      if (end <= begin) {
        return new Range(0, 0);
      }
      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
    };

    Range.prototype.indexOf = function(searchValue) {
      var offsetValue = searchValue - this._start;
      if (offsetValue % this._step === 0) {
        var index = offsetValue / this._step;
        if (index >= 0 && index < this.size) {
          return index
        }
      }
      return -1;
    };

    Range.prototype.lastIndexOf = function(searchValue) {
      return this.indexOf(searchValue);
    };

    Range.prototype.__iterate = function(fn, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(value, ii, this) === false) {
          return ii + 1;
        }
        value += reverse ? -step : step;
      }
      return ii;
    };

    Range.prototype.__iterator = function(type, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      var ii = 0;
      return new src_Iterator__Iterator(function()  {
        var v = value;
        value += reverse ? -step : step;
        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
      });
    };

    Range.prototype.equals = function(other) {
      return other instanceof Range ?
        this._start === other._start &&
        this._end === other._end &&
        this._step === other._step :
        deepEqual(this, other);
    };


  var EMPTY_RANGE;

  createClass(Repeat, IndexedSeq);

    function Repeat(value, times) {
      if (!(this instanceof Repeat)) {
        return new Repeat(value, times);
      }
      this._value = value;
      this.size = times === undefined ? Infinity : Math.max(0, times);
      if (this.size === 0) {
        if (EMPTY_REPEAT) {
          return EMPTY_REPEAT;
        }
        EMPTY_REPEAT = this;
      }
    }

    Repeat.prototype.toString = function() {
      if (this.size === 0) {
        return 'Repeat []';
      }
      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
    };

    Repeat.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._value : notSetValue;
    };

    Repeat.prototype.contains = function(searchValue) {
      return is(this._value, searchValue);
    };

    Repeat.prototype.slice = function(begin, end) {
      var size = this.size;
      return wholeSlice(begin, end, size) ? this :
        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
    };

    Repeat.prototype.reverse = function() {
      return this;
    };

    Repeat.prototype.indexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return 0;
      }
      return -1;
    };

    Repeat.prototype.lastIndexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return this.size;
      }
      return -1;
    };

    Repeat.prototype.__iterate = function(fn, reverse) {
      for (var ii = 0; ii < this.size; ii++) {
        if (fn(this._value, ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
      var ii = 0;
      return new src_Iterator__Iterator(function() 
        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
      );
    };

    Repeat.prototype.equals = function(other) {
      return other instanceof Repeat ?
        is(this._value, other._value) :
        deepEqual(other);
    };


  var EMPTY_REPEAT;

  /**
   * Contributes additional methods to a constructor
   */
  function mixin(ctor, methods) {
    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
    Object.keys(methods).forEach(keyCopier);
    Object.getOwnPropertySymbols &&
      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
    return ctor;
  }

  Iterable.Iterator = src_Iterator__Iterator;

  mixin(Iterable, {

    // ### Conversion to other types

    toArray: function() {
      assertNotInfinite(this.size);
      var array = new Array(this.size || 0);
      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
      return array;
    },

    toIndexedSeq: function() {
      return new ToIndexedSequence(this);
    },

    toJS: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
      ).__toJS();
    },

    toJSON: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
      ).__toJS();
    },

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, true);
    },

    toMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return src_Map__Map(this.toKeyedSeq());
    },

    toObject: function() {
      assertNotInfinite(this.size);
      var object = {};
      this.__iterate(function(v, k)  { object[k] = v; });
      return object;
    },

    toOrderedMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedMap(this.toKeyedSeq());
    },

    toOrderedSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
    },

    toSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return src_Set__Set(isKeyed(this) ? this.valueSeq() : this);
    },

    toSetSeq: function() {
      return new ToSetSequence(this);
    },

    toSeq: function() {
      return isIndexed(this) ? this.toIndexedSeq() :
        isKeyed(this) ? this.toKeyedSeq() :
        this.toSetSeq();
    },

    toStack: function() {
      // Use Late Binding here to solve the circular dependency.
      return Stack(isKeyed(this) ? this.valueSeq() : this);
    },

    toList: function() {
      // Use Late Binding here to solve the circular dependency.
      return List(isKeyed(this) ? this.valueSeq() : this);
    },


    // ### Common JavaScript methods and properties

    toString: function() {
      return '[Iterable]';
    },

    __toString: function(head, tail) {
      if (this.size === 0) {
        return head + tail;
      }
      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    concat: function() {var values = SLICE$0.call(arguments, 0);
      return reify(this, concatFactory(this, values));
    },

    contains: function(searchValue) {
      return this.some(function(value ) {return is(value, searchValue)});
    },

    entries: function() {
      return this.__iterator(ITERATE_ENTRIES);
    },

    every: function(predicate, context) {
      assertNotInfinite(this.size);
      var returnValue = true;
      this.__iterate(function(v, k, c)  {
        if (!predicate.call(context, v, k, c)) {
          returnValue = false;
          return false;
        }
      });
      return returnValue;
    },

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, true));
    },

    find: function(predicate, context, notSetValue) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[1] : notSetValue;
    },

    findEntry: function(predicate, context) {
      var found;
      this.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          found = [k, v];
          return false;
        }
      });
      return found;
    },

    findLastEntry: function(predicate, context) {
      return this.toSeq().reverse().findEntry(predicate, context);
    },

    forEach: function(sideEffect, context) {
      assertNotInfinite(this.size);
      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
    },

    join: function(separator) {
      assertNotInfinite(this.size);
      separator = separator !== undefined ? '' + separator : ',';
      var joined = '';
      var isFirst = true;
      this.__iterate(function(v ) {
        isFirst ? (isFirst = false) : (joined += separator);
        joined += v !== null && v !== undefined ? v.toString() : '';
      });
      return joined;
    },

    keys: function() {
      return this.__iterator(ITERATE_KEYS);
    },

    map: function(mapper, context) {
      return reify(this, mapFactory(this, mapper, context));
    },

    reduce: function(reducer, initialReduction, context) {
      assertNotInfinite(this.size);
      var reduction;
      var useFirst;
      if (arguments.length < 2) {
        useFirst = true;
      } else {
        reduction = initialReduction;
      }
      this.__iterate(function(v, k, c)  {
        if (useFirst) {
          useFirst = false;
          reduction = v;
        } else {
          reduction = reducer.call(context, reduction, v, k, c);
        }
      });
      return reduction;
    },

    reduceRight: function(reducer, initialReduction, context) {
      var reversed = this.toKeyedSeq().reverse();
      return reversed.reduce.apply(reversed, arguments);
    },

    reverse: function() {
      return reify(this, reverseFactory(this, true));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, true));
    },

    some: function(predicate, context) {
      return !this.every(not(predicate), context);
    },

    sort: function(comparator) {
      return reify(this, sortFactory(this, comparator));
    },

    values: function() {
      return this.__iterator(ITERATE_VALUES);
    },


    // ### More sequential methods

    butLast: function() {
      return this.slice(0, -1);
    },

    isEmpty: function() {
      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
    },

    count: function(predicate, context) {
      return ensureSize(
        predicate ? this.toSeq().filter(predicate, context) : this
      );
    },

    countBy: function(grouper, context) {
      return countByFactory(this, grouper, context);
    },

    equals: function(other) {
      return deepEqual(this, other);
    },

    entrySeq: function() {
      var iterable = this;
      if (iterable._cache) {
        // We cache as an entries array, so we can just return the cache!
        return new ArraySeq(iterable._cache);
      }
      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
      return entriesSequence;
    },

    filterNot: function(predicate, context) {
      return this.filter(not(predicate), context);
    },

    findLast: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
    },

    first: function() {
      return this.find(returnTrue);
    },

    flatMap: function(mapper, context) {
      return reify(this, flatMapFactory(this, mapper, context));
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, true));
    },

    fromEntrySeq: function() {
      return new FromEntriesSequence(this);
    },

    get: function(searchKey, notSetValue) {
      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
    },

    getIn: function(searchKeyPath, notSetValue) {
      var nested = this;
      // Note: in an ES6 environment, we would prefer:
      // for (var key of searchKeyPath) {
      var iter = forceIterator(searchKeyPath);
      var step;
      while (!(step = iter.next()).done) {
        var key = step.value;
        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
        if (nested === NOT_SET) {
          return notSetValue;
        }
      }
      return nested;
    },

    groupBy: function(grouper, context) {
      return groupByFactory(this, grouper, context);
    },

    has: function(searchKey) {
      return this.get(searchKey, NOT_SET) !== NOT_SET;
    },

    hasIn: function(searchKeyPath) {
      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
    },

    isSubset: function(iter) {
      iter = typeof iter.contains === 'function' ? iter : Iterable(iter);
      return this.every(function(value ) {return iter.contains(value)});
    },

    isSuperset: function(iter) {
      return iter.isSubset(this);
    },

    keySeq: function() {
      return this.toSeq().map(keyMapper).toIndexedSeq();
    },

    last: function() {
      return this.toSeq().reverse().first();
    },

    max: function(comparator) {
      return maxFactory(this, comparator);
    },

    maxBy: function(mapper, comparator) {
      return maxFactory(this, comparator, mapper);
    },

    min: function(comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
    },

    minBy: function(mapper, comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
    },

    rest: function() {
      return this.slice(1);
    },

    skip: function(amount) {
      return this.slice(Math.max(0, amount));
    },

    skipLast: function(amount) {
      return reify(this, this.toSeq().reverse().skip(amount).reverse());
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, true));
    },

    skipUntil: function(predicate, context) {
      return this.skipWhile(not(predicate), context);
    },

    sortBy: function(mapper, comparator) {
      return reify(this, sortFactory(this, comparator, mapper));
    },

    take: function(amount) {
      return this.slice(0, Math.max(0, amount));
    },

    takeLast: function(amount) {
      return reify(this, this.toSeq().reverse().take(amount).reverse());
    },

    takeWhile: function(predicate, context) {
      return reify(this, takeWhileFactory(this, predicate, context));
    },

    takeUntil: function(predicate, context) {
      return this.takeWhile(not(predicate), context);
    },

    valueSeq: function() {
      return this.toIndexedSeq();
    },


    // ### Hashable Object

    hashCode: function() {
      return this.__hash || (this.__hash = hashIterable(this));
    },


    // ### Internal

    // abstract __iterate(fn, reverse)

    // abstract __iterator(type, reverse)
  });

  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  var IterablePrototype = Iterable.prototype;
  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
  IterablePrototype.__toJS = IterablePrototype.toArray;
  IterablePrototype.__toStringMapper = quoteString;
  IterablePrototype.inspect =
  IterablePrototype.toSource = function() { return this.toString(); };
  IterablePrototype.chain = IterablePrototype.flatMap;

  // Temporary warning about using length
  (function () {
    try {
      Object.defineProperty(IterablePrototype, 'length', {
        get: function () {
          if (!Iterable.noLengthWarning) {
            var stack;
            try {
              throw new Error();
            } catch (error) {
              stack = error.stack;
            }
            if (stack.indexOf('_wrapObject') === -1) {
              console && console.warn && console.warn(
                'iterable.length has been deprecated, '+
                'use iterable.size or iterable.count(). '+
                'This warning will become a silent error in a future version. ' +
                stack
              );
              return this.size;
            }
          }
        }
      });
    } catch (e) {}
  })();



  mixin(KeyedIterable, {

    // ### More sequential methods

    flip: function() {
      return reify(this, flipFactory(this));
    },

    findKey: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry && entry[0];
    },

    findLastKey: function(predicate, context) {
      return this.toSeq().reverse().findKey(predicate, context);
    },

    keyOf: function(searchValue) {
      return this.findKey(function(value ) {return is(value, searchValue)});
    },

    lastKeyOf: function(searchValue) {
      return this.findLastKey(function(value ) {return is(value, searchValue)});
    },

    mapEntries: function(mapper, context) {var this$0 = this;
      var iterations = 0;
      return reify(this,
        this.toSeq().map(
          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
        ).fromEntrySeq()
      );
    },

    mapKeys: function(mapper, context) {var this$0 = this;
      return reify(this,
        this.toSeq().flip().map(
          function(k, v)  {return mapper.call(context, k, v, this$0)}
        ).flip()
      );
    },

  });

  var KeyedIterablePrototype = KeyedIterable.prototype;
  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};



  mixin(IndexedIterable, {

    // ### Conversion to other types

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, false);
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, false));
    },

    findIndex: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[0] : -1;
    },

    indexOf: function(searchValue) {
      var key = this.toKeyedSeq().keyOf(searchValue);
      return key === undefined ? -1 : key;
    },

    lastIndexOf: function(searchValue) {
      return this.toSeq().reverse().indexOf(searchValue);
    },

    reverse: function() {
      return reify(this, reverseFactory(this, false));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, false));
    },

    splice: function(index, removeNum /*, ...values*/) {
      var numArgs = arguments.length;
      removeNum = Math.max(removeNum | 0, 0);
      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
        return this;
      }
      index = resolveBegin(index, this.size);
      var spliced = this.slice(0, index);
      return reify(
        this,
        numArgs === 1 ?
          spliced :
          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
      );
    },


    // ### More collection methods

    findLastIndex: function(predicate, context) {
      var key = this.toKeyedSeq().findLastKey(predicate, context);
      return key === undefined ? -1 : key;
    },

    first: function() {
      return this.get(0);
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, false));
    },

    get: function(index, notSetValue) {
      index = wrapIndex(this, index);
      return (index < 0 || (this.size === Infinity ||
          (this.size !== undefined && index > this.size))) ?
        notSetValue :
        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
    },

    has: function(index) {
      index = wrapIndex(this, index);
      return index >= 0 && (this.size !== undefined ?
        this.size === Infinity || index < this.size :
        this.indexOf(index) !== -1
      );
    },

    interpose: function(separator) {
      return reify(this, interposeFactory(this, separator));
    },

    interleave: function(/*...iterables*/) {
      var iterables = [this].concat(arrCopy(arguments));
      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
      var interleaved = zipped.flatten(true);
      if (zipped.size) {
        interleaved.size = zipped.size * iterables.length;
      }
      return reify(this, interleaved);
    },

    last: function() {
      return this.get(-1);
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, false));
    },

    zip: function(/*, ...iterables */) {
      var iterables = [this].concat(arrCopy(arguments));
      return reify(this, zipWithFactory(this, defaultZipper, iterables));
    },

    zipWith: function(zipper/*, ...iterables */) {
      var iterables = arrCopy(arguments);
      iterables[0] = this;
      return reify(this, zipWithFactory(this, zipper, iterables));
    },

  });

  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;



  mixin(SetIterable, {

    // ### ES6 Collection methods (ES6 Array and Map)

    get: function(value, notSetValue) {
      return this.has(value) ? value : notSetValue;
    },

    contains: function(value) {
      return this.has(value);
    },


    // ### More sequential methods

    keySeq: function() {
      return this.valueSeq();
    },

  });

  SetIterable.prototype.has = IterablePrototype.contains;


  // Mixin subclasses

  mixin(KeyedSeq, KeyedIterable.prototype);
  mixin(IndexedSeq, IndexedIterable.prototype);
  mixin(SetSeq, SetIterable.prototype);

  mixin(KeyedCollection, KeyedIterable.prototype);
  mixin(IndexedCollection, IndexedIterable.prototype);
  mixin(SetCollection, SetIterable.prototype);


  // #pragma Helper functions

  function keyMapper(v, k) {
    return k;
  }

  function entryMapper(v, k) {
    return [k, v];
  }

  function not(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    }
  }

  function neg(predicate) {
    return function() {
      return -predicate.apply(this, arguments);
    }
  }

  function quoteString(value) {
    return typeof value === 'string' ? JSON.stringify(value) : value;
  }

  function defaultZipper() {
    return arrCopy(arguments);
  }

  function defaultNegComparator(a, b) {
    return a < b ? 1 : a > b ? -1 : 0;
  }

  function hashIterable(iterable) {
    if (iterable.size === Infinity) {
      return 0;
    }
    var ordered = isOrdered(iterable);
    var keyed = isKeyed(iterable);
    var h = ordered ? 1 : 0;
    var size = iterable.__iterate(
      keyed ?
        ordered ?
          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
        ordered ?
          function(v ) { h = 31 * h + hash(v) | 0; } :
          function(v ) { h = h + hash(v) | 0; }
    );
    return murmurHashOfSize(size, h);
  }

  function murmurHashOfSize(size, h) {
    h = src_Math__imul(h, 0xCC9E2D51);
    h = src_Math__imul(h << 15 | h >>> -15, 0x1B873593);
    h = src_Math__imul(h << 13 | h >>> -13, 5);
    h = (h + 0xE6546B64 | 0) ^ size;
    h = src_Math__imul(h ^ h >>> 16, 0x85EBCA6B);
    h = src_Math__imul(h ^ h >>> 13, 0xC2B2AE35);
    h = smi(h ^ h >>> 16);
    return h;
  }

  function hashMerge(a, b) {
    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
  }

  var Immutable = {

    Iterable: Iterable,

    Seq: Seq,
    Collection: Collection,
    Map: src_Map__Map,
    OrderedMap: OrderedMap,
    List: List,
    Stack: Stack,
    Set: src_Set__Set,
    OrderedSet: OrderedSet,

    Record: Record,
    Range: Range,
    Repeat: Repeat,

    is: is,
    fromJS: fromJS,

  };

  return Immutable;

}));
(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define('typed-immutable/typed',['exports', 'immutable'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('immutable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Immutable);
    global.typed = mod.exports;
  }
})(this, function (exports, _immutable) {
  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _defaults(subClass, superClass); }

  if (typeof Symbol === 'undefined') {
    var Symbol = function Symbol(hint) {
      return '@@' + hint;
    };
    Symbol['for'] = Symbol;
  }

  function Construct() {}
  var construct = function construct(value) {
    Construct.prototype = value.constructor.prototype;
    return new Construct();
  };

  exports.construct = construct;
  var $type = Symbol['for']('typed/type');
  var $store = Symbol['for']('typed/store');
  var $empty = Symbol['for']('typed/empty');

  var $maybe = Symbol['for']('typed/type/maybe');
  var $default = Symbol['for']('typed/type/default');
  var $label = Symbol['for']('typed/type/label');

  var $init = Symbol['for']('transducer/init');
  var $result = Symbol['for']('transducer/result');
  var $step = Symbol['for']('transducer/step');
  var $read = Symbol['for']('typed/type/read');
  var $parse = Symbol['for']('typed/type/parse');
  var $typeName = Symbol('typed/type/name');
  var $typeSignature = Symbol('typed/type/signature');

  var Typed = function Typed(label, parse, defaultValue) {
    var ValueType = (function (_Type) {
      function ValueType(defaultValue) {
        _classCallCheck(this, ValueType);

        _get(Object.getPrototypeOf(ValueType.prototype), 'constructor', this).call(this);
        this[$default] = defaultValue;
      }

      _inherits(ValueType, _Type);

      return ValueType;
    })(Type);

    var prototype = ValueType.prototype;
    prototype[$default] = defaultValue;
    prototype[$parse] = parse;
    prototype[$label] = label;

    var TypedValue = function TypedValue(defaultValue) {
      return defaultValue === void 0 ? prototype : new ValueType(defaultValue);
    };
    TypedValue.prototype = prototype;

    return TypedValue;
  };

  exports.Typed = Typed;
  Typed.label = $label;
  Typed.defaultValue = $default;
  Typed.read = $read;
  Typed.typeName = $typeName;
  Typed.typeSignature = $typeSignature;

  Typed.type = $type;
  Typed.store = $store;
  Typed.init = $init;
  Typed.result = $result;
  Typed.step = $step;
  Typed.DELETE = 'delete';
  Typed.empty = $empty;

  var typeName = function typeName(type) {
    return type[$typeName]();
  };
  var typeSignature = function typeSignature(type) {
    return type[$typeSignature]();
  };

  var Type = (function () {
    function Type() {
      _classCallCheck(this, Type);
    }

    _createClass(Type, [{
      key: Typed.read,
      value: function value() {
        var _value = arguments.length <= 0 || arguments[0] === undefined ? this[$default] : arguments[0];

        return this[$parse](_value);
      }
    }, {
      key: Typed.parse,
      value: function value(_value2) {
        throw TypeError('Type implementation must implement "[read.symbol]" method');
      }
    }, {
      key: Typed.typeName,
      value: function value() {
        var label = this[$label];
        var defaultValue = this[$default];
        return defaultValue === void 0 ? label : label + '(' + JSON.stringify(defaultValue) + ')';
      }
    }]);

    return Type;
  })();

  exports.Type = Type;

  var ObjectPrototype = Object.prototype;

  // Returns `true` if given `x` is a JS array.
  var isArray = Array.isArray || function (x) {
    return ObjectPrototype.toString.call(x) === '[object Array]';
  };

  // Returns `true` if given `x` is a regular expression.
  var isRegExp = function isRegExp(x) {
    return ObjectPrototype.toString.call(x) === '[object RegExp]';
  };

  var typeOf = function typeOf(x) {
    var type = arguments.length <= 1 || arguments[1] === undefined ? typeof x : arguments[1];
    return (function () {
      return x === void 0 ? x : x === null ? x : x[$read] ? x : x.prototype && x.prototype[$read] ? x.prototype : type === 'number' ? new Typed.Number(x) : type === 'string' ? new Typed.String(x) : type === 'boolean' ? new Typed.Boolean(x) : type === 'symbol' ? new Typed.Symbol(x) : isArray(x) ? Typed.Array(x) : isRegExp(x) ? new Typed.RegExp(x) : x === String ? Typed.String.prototype : x === Number ? Typed.Number.prototype : x === Boolean ? Typed.Boolean.prototype : x === RegExp ? Typed.RegExp.prototype : x === Array ? Typed.Array.prototype : x === Symbol ? Typed.Symbol.prototype : x === Date ? Typed.Date.prototype : Any;
    })();
  };

  exports.typeOf = typeOf;
  var Any = Typed('Any', function (value) {
    return value;
  })();
  exports.Any = Any;
  Typed.Any = Any;

  Typed.Number = Typed('Number', function (value) {
    return typeof value === 'number' ? value : TypeError('"' + value + '" is not a number');
  });

  Typed.String = Typed('String', function (value) {
    return typeof value === 'string' ? value : TypeError('"' + value + '" is not a string');
  });

  Typed.Symbol = Typed('Symbol', function (value) {
    return typeof value === 'symbol' ? value : TypeError('"' + value + '" is not a symbol');
  });

  Typed.Array = Typed('Array', function (value) {
    return isArray(value) ? value : TypeError('"' + value + '" is not an array');
  });

  Typed.RegExp = Typed('RegExp', function (value) {
    return value instanceof RegExp ? value : TypeError('"' + value + '" is not a regexp');
  });

  Typed.Boolean = Typed('Boolean', function (value) {
    return value === true ? true : value === false ? false : TypeError('"' + value + '" is not a boolean');
  });

  var MaybeType = (function (_Type2) {
    function MaybeType(type) {
      _classCallCheck(this, MaybeType);

      _get(Object.getPrototypeOf(MaybeType.prototype), 'constructor', this).call(this);
      this[$type] = type;
    }

    _inherits(MaybeType, _Type2);

    _createClass(MaybeType, [{
      key: Typed.typeName,
      value: function value() {
        return 'Maybe(' + this[$type][$typeName]() + ')';
      }
    }, {
      key: Typed.read,
      value: function value(_value3) {
        var result = _value3 == null ? null : this[$type][$read](_value3);

        return !(result instanceof TypeError) ? result : TypeError('"' + _value3 + '" is not nully nor it is of ' + this[$type][$typeName]() + ' type');
      }
    }]);

    return MaybeType;
  })(Type);

  var Maybe = function Maybe(Type) {
    var type = typeOf(Type);
    if (type === Any) {
      throw TypeError(Type + ' is not a valid type');
    }

    return type[$maybe] || (type[$maybe] = new MaybeType(type));
  };
  exports.Maybe = Maybe;
  Maybe.Type = MaybeType;

  var UnionType = (function (_Type3) {
    function UnionType(variants) {
      _classCallCheck(this, UnionType);

      _get(Object.getPrototypeOf(UnionType.prototype), 'constructor', this).call(this);
      this[$type] = variants;
    }

    _inherits(UnionType, _Type3);

    _createClass(UnionType, [{
      key: Typed.typeName,
      value: function value() {
        return 'Union(' + this[$type].map(typeName).join(', ') + ')';
      }
    }, {
      key: Typed.read,
      value: function value(_value4) {
        var variants = this[$type];
        var count = variants.length;
        var index = 0;
        while (index < count) {
          var variant = variants[index];
          if (_value4 instanceof variant.constructor) {
            return _value4;
          }
          index = index + 1;
        }

        index = 0;
        while (index < count) {
          var result = variants[index][$read](_value4);
          if (!(result instanceof TypeError)) {
            return result;
          }
          index = index + 1;
        }

        return TypeError('"' + _value4 + '" does not satisfy ' + this[$typeName]() + ' type');
      }
    }]);

    return UnionType;
  })(Type);

  // Returns `xs` excluding any values that are included in `ys`.
  var subtract = function subtract(xs, ys) {
    return xs.filter(function (x) {
      return ys.indexOf(x) < 0;
    });
  };

  // Returns array including all values from `xs` and all values from
  // `ys` that aren't already included in `xs`. It will also attempt
  // to return either `xs` or `ys` if one of them is a superset of other.
  // return `xs` or `ys` if
  var union = function union(xs, ys) {
    // xs can be superset only if it contains more items then
    // ys. If that's a case find items in ys that arent included
    // in xs. If such items do not exist return back `xs` otherwise
    // return concatination of xs with those items.
    // those items
    if (xs.length > ys.length) {
      var diff = subtract(ys, xs);
      return diff.length === 0 ? xs : xs.concat(diff);
    }
    // if number of items in xs is not greater than number of items in ys
    // then either xs is either subset or equal of `ys`. There for we find
    // ys that are not included in `xs` if such items aren't found ys is
    // either superset or equal so just return ys otherwise return concatination
    // of those items with `ys`.
    else {
      var diff = subtract(xs, ys);
      return diff.length === 0 ? ys : diff.concat(ys);
    }
  };

  var Union = function Union() {
    for (var _len = arguments.length, Types = Array(_len), _key = 0; _key < _len; _key++) {
      Types[_key] = arguments[_key];
    }

    var count = Types.length;

    if (count === 0) {
      throw TypeError('Union must be of at at least one type');
    }

    var variants = null;
    var type = null;
    var index = 0;
    while (index < count) {
      var variant = typeOf(Types[index]);
      // If there is `Any` present than union is also `Any`.
      if (variant === Any) {
        return Any;
      }
      // If this is the first type we met than we assume it's the
      // one that satisfies all types.
      if (!variants) {
        type = variant;
        variants = type instanceof UnionType ? type[$type] : [variant];
      } else if (variants.indexOf(variant) < 0) {
        // If current reader is of union type
        if (variant instanceof UnionType) {
          var variantUnion = union(variants, variant[$type]);

          // If `reader.readers` matches union of readers, then
          // current reader is a superset so we use it as a type
          // that satisfies all types.
          if (variantUnion === variant[$type]) {
            type = variant;
            variants = variantUnion;
          }
          // If current readers is not the union than it does not
          // satisfy currenty reader. There for we update readers
          // and unset a type.
          else if (variantUnion !== variants) {
            type = null;
            variants = variantUnion;
          }
        } else {
          type = null;
          variants.push(variant);
        }
      }

      index = index + 1;
    }

    return type ? type : new UnionType(variants);
  };
  exports.Union = Union;
  Union.Type = UnionType;

  Typed.Number.Range = function (from, to, defaultValue) {
    if (to === undefined) to = +Infinity;
    return Typed('Typed.Number.Range(' + from + '..' + to + ')', function (value) {
      if (typeof value !== 'number') {
        return TypeError('"' + value + '" is not a number');
      }

      if (!(value >= from && value <= to)) {
        return TypeError('"' + value + '" isn\'t in the range of ' + from + '..' + to);
      }

      return value;
    }, defaultValue);
  };
});
//# sourceMappingURL=data:application/json;base64,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LFVBQUssRUFBRSxDQUFHLENBQUE7T0FDcEU7O0FBRUQsYUFBTyxLQUFLLENBQUE7S0FDYixFQUFFLFlBQVksQ0FBQztHQUFBLENBQUEiLCJmaWxlIjoidHlwZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBJbW11dGFibGUgZnJvbSAnaW1tdXRhYmxlJ1xuXG5pZiAodHlwZW9mKFN5bWJvbCkgPT09ICd1bmRlZmluZWQnKSB7XG4gIHZhciBTeW1ib2wgPSBoaW50ID0+IGBAQCR7aGludH1gXG4gIFN5bWJvbC5mb3IgPSBTeW1ib2xcbn1cblxuZnVuY3Rpb24gQ29uc3RydWN0KCkge31cbmV4cG9ydCBjb25zdCBjb25zdHJ1Y3QgPSB2YWx1ZSA9PiB7XG4gIENvbnN0cnVjdC5wcm90b3R5cGUgPSB2YWx1ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGVcbiAgcmV0dXJuIG5ldyBDb25zdHJ1Y3QoKVxufVxuXG5jb25zdCAkdHlwZSA9IFN5bWJvbC5mb3IoXCJ0eXBlZC90eXBlXCIpXG5jb25zdCAkc3RvcmUgPSBTeW1ib2wuZm9yKFwidHlwZWQvc3RvcmVcIilcbmNvbnN0ICRlbXB0eSA9IFN5bWJvbC5mb3IoXCJ0eXBlZC9lbXB0eVwiKVxuXG5jb25zdCAkbWF5YmUgPSBTeW1ib2wuZm9yKFwidHlwZWQvdHlwZS9tYXliZVwiKVxuY29uc3QgJGRlZmF1bHQgPSBTeW1ib2wuZm9yKFwidHlwZWQvdHlwZS9kZWZhdWx0XCIpXG5jb25zdCAkbGFiZWwgPSBTeW1ib2wuZm9yKFwidHlwZWQvdHlwZS9sYWJlbFwiKVxuXG5jb25zdCAkaW5pdCA9IFN5bWJvbC5mb3IoXCJ0cmFuc2R1Y2VyL2luaXRcIilcbmNvbnN0ICRyZXN1bHQgPSBTeW1ib2wuZm9yKFwidHJhbnNkdWNlci9yZXN1bHRcIilcbmNvbnN0ICRzdGVwID0gU3ltYm9sLmZvcihcInRyYW5zZHVjZXIvc3RlcFwiKVxuY29uc3QgJHJlYWQgPSBTeW1ib2wuZm9yKFwidHlwZWQvdHlwZS9yZWFkXCIpXG5jb25zdCAkcGFyc2UgPSBTeW1ib2wuZm9yKFwidHlwZWQvdHlwZS9wYXJzZVwiKVxuY29uc3QgJHR5cGVOYW1lID0gU3ltYm9sKFwidHlwZWQvdHlwZS9uYW1lXCIpXG5jb25zdCAkdHlwZVNpZ25hdHVyZSA9IFN5bWJvbChcInR5cGVkL3R5cGUvc2lnbmF0dXJlXCIpXG5cbmV4cG9ydCBjb25zdCBUeXBlZCA9IGZ1bmN0aW9uKGxhYmVsLCBwYXJzZSwgZGVmYXVsdFZhbHVlKSB7XG4gIGNsYXNzIFZhbHVlVHlwZSBleHRlbmRzIFR5cGUge1xuICAgIGNvbnN0cnVjdG9yKGRlZmF1bHRWYWx1ZSkge1xuICAgICAgc3VwZXIoKVxuICAgICAgdGhpc1skZGVmYXVsdF0gPSBkZWZhdWx0VmFsdWVcbiAgICB9XG4gIH1cblxuICBjb25zdCBwcm90b3R5cGUgPSBWYWx1ZVR5cGUucHJvdG90eXBlXG4gIHByb3RvdHlwZVskZGVmYXVsdF0gPSBkZWZhdWx0VmFsdWVcbiAgcHJvdG90eXBlWyRwYXJzZV0gPSBwYXJzZVxuICBwcm90b3R5cGVbJGxhYmVsXSA9IGxhYmVsXG5cbiAgY29uc3QgVHlwZWRWYWx1ZSA9IGZ1bmN0aW9uKGRlZmF1bHRWYWx1ZSkge1xuICAgIHJldHVybiBkZWZhdWx0VmFsdWUgPT09IHZvaWQoMCkgPyBwcm90b3R5cGUgOlxuICAgIG5ldyBWYWx1ZVR5cGUoZGVmYXVsdFZhbHVlKVxuICB9XG4gIFR5cGVkVmFsdWUucHJvdG90eXBlID0gcHJvdG90eXBlXG5cbiAgcmV0dXJuIFR5cGVkVmFsdWVcbn1cblxuVHlwZWQubGFiZWwgPSAkbGFiZWxcblR5cGVkLmRlZmF1bHRWYWx1ZSA9ICRkZWZhdWx0XG5UeXBlZC5yZWFkID0gJHJlYWRcblR5cGVkLnR5cGVOYW1lID0gJHR5cGVOYW1lXG5UeXBlZC50eXBlU2lnbmF0dXJlID0gJHR5cGVTaWduYXR1cmVcblxuVHlwZWQudHlwZSA9ICR0eXBlXG5UeXBlZC5zdG9yZSA9ICRzdG9yZVxuVHlwZWQuaW5pdCA9ICRpbml0XG5UeXBlZC5yZXN1bHQgPSAkcmVzdWx0XG5UeXBlZC5zdGVwID0gJHN0ZXBcblR5cGVkLkRFTEVURSA9IFwiZGVsZXRlXCJcblR5cGVkLmVtcHR5ID0gJGVtcHR5XG5cbmNvbnN0IHR5cGVOYW1lID0gdHlwZSA9PiB0eXBlWyR0eXBlTmFtZV0oKVxuY29uc3QgdHlwZVNpZ25hdHVyZSA9IHR5cGUgPT4gdHlwZVskdHlwZVNpZ25hdHVyZV0oKVxuXG5leHBvcnQgY2xhc3MgVHlwZSB7XG4gIGNvbnN0cnVjdG9yKCkge31cbiAgW1R5cGVkLnJlYWRdKHZhbHVlPXRoaXNbJGRlZmF1bHRdKSB7XG4gICAgcmV0dXJuIHRoaXNbJHBhcnNlXSh2YWx1ZSlcbiAgfVxuICBbVHlwZWQucGFyc2VdKHZhbHVlKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKGBUeXBlIGltcGxlbWVudGF0aW9uIG11c3QgaW1wbGVtZW50IFwiW3JlYWQuc3ltYm9sXVwiIG1ldGhvZGApXG4gIH1cbiAgW1R5cGVkLnR5cGVOYW1lXSgpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXNbJGxhYmVsXVxuICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IHRoaXNbJGRlZmF1bHRdXG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZSA9PT0gdm9pZCgwKSA/IGxhYmVsIDogYCR7bGFiZWx9KCR7SlNPTi5zdHJpbmdpZnkoZGVmYXVsdFZhbHVlKX0pYFxuICB9XG59XG5cbmNvbnN0IE9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGVcblxuLy8gUmV0dXJucyBgdHJ1ZWAgaWYgZ2l2ZW4gYHhgIGlzIGEgSlMgYXJyYXkuXG5jb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fFxuICAoeCA9PiBPYmplY3RQcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gJ1tvYmplY3QgQXJyYXldJylcblxuLy8gUmV0dXJucyBgdHJ1ZWAgaWYgZ2l2ZW4gYHhgIGlzIGEgcmVndWxhciBleHByZXNzaW9uLlxuY29uc3QgaXNSZWdFeHAgPSB4ID0+XG4gIE9iamVjdFByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpID09PSAnW29iamVjdCBSZWdFeHBdJ1xuXG5cbmV4cG9ydCBjb25zdCB0eXBlT2YgPSAoeCwgdHlwZT10eXBlb2YoeCkpID0+XG4gIHggPT09IHZvaWQoMCkgPyB4IDpcbiAgeCA9PT0gbnVsbCA/IHggOlxuICB4WyRyZWFkXSA/IHggOlxuICAoeC5wcm90b3R5cGUgJiYgeC5wcm90b3R5cGVbJHJlYWRdKSA/IHgucHJvdG90eXBlIDpcbiAgdHlwZSA9PT0gXCJudW1iZXJcIiA/IG5ldyBUeXBlZC5OdW1iZXIoeCkgOlxuICB0eXBlID09PSBcInN0cmluZ1wiID8gbmV3IFR5cGVkLlN0cmluZyh4KSA6XG4gIHR5cGUgPT09IFwiYm9vbGVhblwiID8gbmV3IFR5cGVkLkJvb2xlYW4oeCkgOlxuICB0eXBlID09PSBcInN5bWJvbFwiID8gbmV3IFR5cGVkLlN5bWJvbCh4KSA6XG4gIGlzQXJyYXkoeCkgPyBUeXBlZC5BcnJheSh4KSA6XG4gIGlzUmVnRXhwKHgpID8gbmV3IFR5cGVkLlJlZ0V4cCh4KSA6XG4gIHggPT09IFN0cmluZyA/IFR5cGVkLlN0cmluZy5wcm90b3R5cGUgOlxuICB4ID09PSBOdW1iZXIgPyBUeXBlZC5OdW1iZXIucHJvdG90eXBlIDpcbiAgeCA9PT0gQm9vbGVhbiA/IFR5cGVkLkJvb2xlYW4ucHJvdG90eXBlIDpcbiAgeCA9PT0gUmVnRXhwID8gVHlwZWQuUmVnRXhwLnByb3RvdHlwZSA6XG4gIHggPT09IEFycmF5ID8gVHlwZWQuQXJyYXkucHJvdG90eXBlIDpcbiAgeCA9PT0gU3ltYm9sID8gVHlwZWQuU3ltYm9sLnByb3RvdHlwZSA6XG4gIHggPT09IERhdGUgPyBUeXBlZC5EYXRlLnByb3RvdHlwZSA6XG4gIEFueTtcblxuZXhwb3J0IGNvbnN0IEFueSA9IFR5cGVkKFwiQW55XCIsIHZhbHVlID0+IHZhbHVlKSgpXG5UeXBlZC5BbnkgPSBBbnlcblxuVHlwZWQuTnVtYmVyID0gVHlwZWQoXCJOdW1iZXJcIiwgdmFsdWUgPT5cbiAgdHlwZW9mKHZhbHVlKSA9PT0gXCJudW1iZXJcIiA/IHZhbHVlIDpcbiAgVHlwZUVycm9yKGBcIiR7dmFsdWV9XCIgaXMgbm90IGEgbnVtYmVyYCkpXG5cblR5cGVkLlN0cmluZyA9IFR5cGVkKFwiU3RyaW5nXCIsIHZhbHVlID0+XG4gIHR5cGVvZih2YWx1ZSkgPT09IFwic3RyaW5nXCIgPyB2YWx1ZSA6XG4gIFR5cGVFcnJvcihgXCIke3ZhbHVlfVwiIGlzIG5vdCBhIHN0cmluZ2ApKVxuXG5UeXBlZC5TeW1ib2wgPSBUeXBlZChcIlN5bWJvbFwiLCB2YWx1ZSA9PlxuICB0eXBlb2YodmFsdWUpID09PSBcInN5bWJvbFwiID8gdmFsdWUgOlxuICBUeXBlRXJyb3IoYFwiJHt2YWx1ZX1cIiBpcyBub3QgYSBzeW1ib2xgKSlcblxuVHlwZWQuQXJyYXkgPSBUeXBlZChcIkFycmF5XCIsIHZhbHVlID0+XG4gIGlzQXJyYXkodmFsdWUpID8gdmFsdWUgOlxuICBUeXBlRXJyb3IoYFwiJHt2YWx1ZX1cIiBpcyBub3QgYW4gYXJyYXlgKSlcblxuVHlwZWQuUmVnRXhwID0gVHlwZWQoXCJSZWdFeHBcIiwgdmFsdWUgPT5cbiAgdmFsdWUgaW5zdGFuY2VvZiBSZWdFeHAgPyB2YWx1ZSA6XG4gIFR5cGVFcnJvcihgXCIke3ZhbHVlfVwiIGlzIG5vdCBhIHJlZ2V4cGApKVxuXG5UeXBlZC5Cb29sZWFuID0gVHlwZWQoXCJCb29sZWFuXCIsIHZhbHVlID0+XG4gIHZhbHVlID09PSB0cnVlID8gdHJ1ZSA6XG4gIHZhbHVlID09PSBmYWxzZSA/IGZhbHNlIDpcbiAgVHlwZUVycm9yKGBcIiR7dmFsdWV9XCIgaXMgbm90IGEgYm9vbGVhbmApKVxuXG5jbGFzcyBNYXliZVR5cGUgZXh0ZW5kcyBUeXBlIHtcbiAgY29uc3RydWN0b3IodHlwZSkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzWyR0eXBlXSA9IHR5cGVcbiAgfVxuICBbVHlwZWQudHlwZU5hbWVdKCkge1xuICAgIHJldHVybiBgTWF5YmUoJHt0aGlzWyR0eXBlXVskdHlwZU5hbWVdKCl9KWBcbiAgfVxuICBbVHlwZWQucmVhZF0odmFsdWUpIHtcbiAgICBjb25zdCByZXN1bHQgPSB2YWx1ZSA9PSBudWxsID8gbnVsbCA6IHRoaXNbJHR5cGVdWyRyZWFkXSh2YWx1ZSlcblxuICAgIHJldHVybiAhKHJlc3VsdCBpbnN0YW5jZW9mIFR5cGVFcnJvcikgPyByZXN1bHQgOlxuICAgICAgICAgICBUeXBlRXJyb3IoYFwiJHt2YWx1ZX1cIiBpcyBub3QgbnVsbHkgbm9yIGl0IGlzIG9mICR7dGhpc1skdHlwZV1bJHR5cGVOYW1lXSgpfSB0eXBlYClcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTWF5YmUgPSBUeXBlID0+IHtcbiAgY29uc3QgdHlwZSA9IHR5cGVPZihUeXBlKVxuICBpZiAodHlwZSA9PT0gQW55KSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKGAke1R5cGV9IGlzIG5vdCBhIHZhbGlkIHR5cGVgKVxuICB9XG5cbiAgcmV0dXJuIHR5cGVbJG1heWJlXSB8fCAodHlwZVskbWF5YmVdID0gbmV3IE1heWJlVHlwZSh0eXBlKSlcbn1cbk1heWJlLlR5cGUgPSBNYXliZVR5cGVcblxuXG5jbGFzcyBVbmlvblR5cGUgZXh0ZW5kcyBUeXBlIHtcbiAgY29uc3RydWN0b3IodmFyaWFudHMpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpc1skdHlwZV0gPSB2YXJpYW50c1xuICB9XG4gIFtUeXBlZC50eXBlTmFtZV0oKSB7XG4gICAgcmV0dXJuIGBVbmlvbigke3RoaXNbJHR5cGVdLm1hcCh0eXBlTmFtZSkuam9pbignLCAnKX0pYFxuICB9XG4gIFtUeXBlZC5yZWFkXSh2YWx1ZSkge1xuICAgIGNvbnN0IHZhcmlhbnRzID0gdGhpc1skdHlwZV1cbiAgICBjb25zdCBjb3VudCA9IHZhcmlhbnRzLmxlbmd0aFxuICAgIGxldCBpbmRleCA9IDBcbiAgICB3aGlsZSAoaW5kZXggPCBjb3VudCkge1xuICAgICAgY29uc3QgdmFyaWFudCA9IHZhcmlhbnRzW2luZGV4XVxuICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgdmFyaWFudC5jb25zdHJ1Y3Rvcikge1xuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgIH1cbiAgICAgIGluZGV4ID0gaW5kZXggKyAxXG4gICAgfVxuXG4gICAgaW5kZXggPSAwXG4gICAgd2hpbGUgKGluZGV4IDwgY291bnQpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHZhcmlhbnRzW2luZGV4XVskcmVhZF0odmFsdWUpXG4gICAgICBpZiAoIShyZXN1bHQgaW5zdGFuY2VvZiBUeXBlRXJyb3IpKSB7XG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH1cbiAgICAgIGluZGV4ID0gaW5kZXggKyAxXG4gICAgfVxuXG4gICAgcmV0dXJuIFR5cGVFcnJvcihgXCIke3ZhbHVlfVwiIGRvZXMgbm90IHNhdGlzZnkgJHt0aGlzWyR0eXBlTmFtZV0oKX0gdHlwZWApXG4gIH1cbn1cblxuLy8gUmV0dXJucyBgeHNgIGV4Y2x1ZGluZyBhbnkgdmFsdWVzIHRoYXQgYXJlIGluY2x1ZGVkIGluIGB5c2AuXG5jb25zdCBzdWJ0cmFjdCA9ICh4cywgeXMpID0+XG4gIHhzLmZpbHRlcih4ID0+IHlzLmluZGV4T2YoeCkgPCAwKVxuXG4vLyBSZXR1cm5zIGFycmF5IGluY2x1ZGluZyBhbGwgdmFsdWVzIGZyb20gYHhzYCBhbmQgYWxsIHZhbHVlcyBmcm9tXG4vLyBgeXNgIHRoYXQgYXJlbid0IGFscmVhZHkgaW5jbHVkZWQgaW4gYHhzYC4gSXQgd2lsbCBhbHNvIGF0dGVtcHRcbi8vIHRvIHJldHVybiBlaXRoZXIgYHhzYCBvciBgeXNgIGlmIG9uZSBvZiB0aGVtIGlzIGEgc3VwZXJzZXQgb2Ygb3RoZXIuXG4vLyByZXR1cm4gYHhzYCBvciBgeXNgIGlmXG5jb25zdCB1bmlvbiA9ICh4cywgeXMpID0+IHtcbiAgLy8geHMgY2FuIGJlIHN1cGVyc2V0IG9ubHkgaWYgaXQgY29udGFpbnMgbW9yZSBpdGVtcyB0aGVuXG4gIC8vIHlzLiBJZiB0aGF0J3MgYSBjYXNlIGZpbmQgaXRlbXMgaW4geXMgdGhhdCBhcmVudCBpbmNsdWRlZFxuICAvLyBpbiB4cy4gSWYgc3VjaCBpdGVtcyBkbyBub3QgZXhpc3QgcmV0dXJuIGJhY2sgYHhzYCBvdGhlcndpc2VcbiAgLy8gcmV0dXJuIGNvbmNhdGluYXRpb24gb2YgeHMgd2l0aCB0aG9zZSBpdGVtcy5cbiAgLy8gdGhvc2UgaXRlbXNcbiAgaWYgKHhzLmxlbmd0aCA+IHlzLmxlbmd0aCkge1xuICAgIGNvbnN0IGRpZmYgPSBzdWJ0cmFjdCh5cywgeHMpXG4gICAgcmV0dXJuIGRpZmYubGVuZ3RoID09PSAwID8geHMgOiB4cy5jb25jYXQoZGlmZilcbiAgfVxuICAvLyBpZiBudW1iZXIgb2YgaXRlbXMgaW4geHMgaXMgbm90IGdyZWF0ZXIgdGhhbiBudW1iZXIgb2YgaXRlbXMgaW4geXNcbiAgLy8gdGhlbiBlaXRoZXIgeHMgaXMgZWl0aGVyIHN1YnNldCBvciBlcXVhbCBvZiBgeXNgLiBUaGVyZSBmb3Igd2UgZmluZFxuICAvLyB5cyB0aGF0IGFyZSBub3QgaW5jbHVkZWQgaW4gYHhzYCBpZiBzdWNoIGl0ZW1zIGFyZW4ndCBmb3VuZCB5cyBpc1xuICAvLyBlaXRoZXIgc3VwZXJzZXQgb3IgZXF1YWwgc28ganVzdCByZXR1cm4geXMgb3RoZXJ3aXNlIHJldHVybiBjb25jYXRpbmF0aW9uXG4gIC8vIG9mIHRob3NlIGl0ZW1zIHdpdGggYHlzYC5cbiAgZWxzZSB7XG4gICAgY29uc3QgZGlmZiA9IHN1YnRyYWN0KHhzLCB5cylcbiAgICByZXR1cm4gZGlmZi5sZW5ndGggPT09IDAgPyB5cyA6IGRpZmYuY29uY2F0KHlzKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBVbmlvbiA9ICguLi5UeXBlcykgPT4ge1xuICBjb25zdCBjb3VudCA9IFR5cGVzLmxlbmd0aFxuXG4gIGlmIChjb3VudCA9PT0gMCkge1xuICAgIHRocm93IFR5cGVFcnJvcihgVW5pb24gbXVzdCBiZSBvZiBhdCBhdCBsZWFzdCBvbmUgdHlwZWApXG4gIH1cblxuICBsZXQgdmFyaWFudHMgPSBudWxsXG4gIGxldCB0eXBlID0gbnVsbFxuICBsZXQgaW5kZXggPSAwO1xuICB3aGlsZSAoaW5kZXggPCBjb3VudCkge1xuICAgIGNvbnN0IHZhcmlhbnQgPSB0eXBlT2YoVHlwZXNbaW5kZXhdKVxuICAgIC8vIElmIHRoZXJlIGlzIGBBbnlgIHByZXNlbnQgdGhhbiB1bmlvbiBpcyBhbHNvIGBBbnlgLlxuICAgIGlmICh2YXJpYW50ID09PSBBbnkpIHtcbiAgICAgIHJldHVybiBBbnlcbiAgICB9XG4gICAgLy8gSWYgdGhpcyBpcyB0aGUgZmlyc3QgdHlwZSB3ZSBtZXQgdGhhbiB3ZSBhc3N1bWUgaXQncyB0aGVcbiAgICAvLyBvbmUgdGhhdCBzYXRpc2ZpZXMgYWxsIHR5cGVzLlxuICAgIGlmICghdmFyaWFudHMpIHtcbiAgICAgIHR5cGUgPSB2YXJpYW50XG4gICAgICB2YXJpYW50cyA9IHR5cGUgaW5zdGFuY2VvZiBVbmlvblR5cGUgPyB0eXBlWyR0eXBlXSA6IFt2YXJpYW50XVxuICAgIH0gZWxzZSBpZiAodmFyaWFudHMuaW5kZXhPZih2YXJpYW50KSA8IDApIHtcbiAgICAgIC8vIElmIGN1cnJlbnQgcmVhZGVyIGlzIG9mIHVuaW9uIHR5cGVcbiAgICAgIGlmICh2YXJpYW50IGluc3RhbmNlb2YgVW5pb25UeXBlKSB7XG4gICAgICAgIGNvbnN0IHZhcmlhbnRVbmlvbiA9IHVuaW9uKHZhcmlhbnRzLCB2YXJpYW50WyR0eXBlXSlcblxuICAgICAgICAvLyBJZiBgcmVhZGVyLnJlYWRlcnNgIG1hdGNoZXMgdW5pb24gb2YgcmVhZGVycywgdGhlblxuICAgICAgICAvLyBjdXJyZW50IHJlYWRlciBpcyBhIHN1cGVyc2V0IHNvIHdlIHVzZSBpdCBhcyBhIHR5cGVcbiAgICAgICAgLy8gdGhhdCBzYXRpc2ZpZXMgYWxsIHR5cGVzLlxuICAgICAgICBpZiAodmFyaWFudFVuaW9uID09PSB2YXJpYW50WyR0eXBlXSkge1xuICAgICAgICAgIHR5cGUgPSB2YXJpYW50XG4gICAgICAgICAgdmFyaWFudHMgPSB2YXJpYW50VW5pb25cbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBjdXJyZW50IHJlYWRlcnMgaXMgbm90IHRoZSB1bmlvbiB0aGFuIGl0IGRvZXMgbm90XG4gICAgICAgIC8vIHNhdGlzZnkgY3VycmVudHkgcmVhZGVyLiBUaGVyZSBmb3Igd2UgdXBkYXRlIHJlYWRlcnNcbiAgICAgICAgLy8gYW5kIHVuc2V0IGEgdHlwZS5cbiAgICAgICAgZWxzZSBpZiAodmFyaWFudFVuaW9uICE9PSB2YXJpYW50cykge1xuICAgICAgICAgIHR5cGUgPSBudWxsXG4gICAgICAgICAgdmFyaWFudHMgPSB2YXJpYW50VW5pb25cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZSA9IG51bGxcbiAgICAgICAgdmFyaWFudHMucHVzaCh2YXJpYW50KVxuICAgICAgfVxuICAgIH1cblxuICAgIGluZGV4ID0gaW5kZXggKyAxXG4gIH1cblxuICByZXR1cm4gdHlwZSA/IHR5cGUgOiBuZXcgVW5pb25UeXBlKHZhcmlhbnRzKVxufVxuVW5pb24uVHlwZSA9IFVuaW9uVHlwZVxuXG5cblR5cGVkLk51bWJlci5SYW5nZSA9IChmcm9tLCB0bz0rSW5maW5pdHksIGRlZmF1bHRWYWx1ZSkgPT5cbiAgVHlwZWQoYFR5cGVkLk51bWJlci5SYW5nZSgke2Zyb219Li4ke3RvfSlgLCB2YWx1ZSA9PiB7XG4gICAgaWYgKHR5cGVvZih2YWx1ZSkgIT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gVHlwZUVycm9yKGBcIiR7dmFsdWV9XCIgaXMgbm90IGEgbnVtYmVyYClcbiAgICB9XG5cbiAgICBpZiAoISh2YWx1ZSA+PSBmcm9tICYmIHZhbHVlIDw9IHRvKSkge1xuICAgICAgcmV0dXJuIFR5cGVFcnJvcihgXCIke3ZhbHVlfVwiIGlzbid0IGluIHRoZSByYW5nZSBvZiAke2Zyb219Li4ke3RvfWApXG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlXG4gIH0sIGRlZmF1bHRWYWx1ZSlcbiJdfQ==;
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('typed-immutable/record',["exports", "./typed", "immutable"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./typed"), require("immutable"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.typed, global.immutable);
    global.record = mod.exports;
  }
})(this, function (exports, _typed, _immutable) {
  "use strict";

  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _defaults(subClass, superClass); }

  var Keyed = _immutable.Iterable.Keyed;

  var Getter = function Getter(key) {
    return function () {
      return this.get(key);
    };
  };

  var Setter = function Setter(key) {
    return function (value) {
      if (!this.__ownerID) {
        throw TypeError("Cannot set on an immutable record.");
      }
      this.set(key, value);
    };
  };

  var $store = _typed.Typed.store;
  var $type = _typed.Typed.type;
  var $step = _typed.Typed.step;
  var $init = _typed.Typed.init;
  var $result = _typed.Typed.result;
  var $read = _typed.Typed.read;
  var $label = _typed.Typed.label;
  var $empty = _typed.Typed.empty;
  var $typeName = _typed.Typed.typeName;
  var $typeSignature = _typed.Typed.typeSignature;

  var IterableKeyedBase = function IterableKeyedBase() {};
  IterableKeyedBase.prototype = _immutable.Iterable.Keyed.prototype;

  var TypedRecord = (function (_IterableKeyedBase) {
    function TypedRecord() {
      _classCallCheck(this, TypedRecord);

      _get(Object.getPrototypeOf(TypedRecord.prototype), "constructor", this).call(this);
    }

    _inherits(TypedRecord, _IterableKeyedBase);

    _createClass(TypedRecord, [{
      key: _typed.Typed.init,
      value: function value() {
        return (0, _typed.construct)(this).asMutable();
      }
    }, {
      key: _typed.Typed.result,
      value: function value(result) {
        return result.asImmutable();
      }
    }, {
      key: _typed.Typed.read,
      value: function value(structure) {
        var Type = this.constructor;

        if (structure instanceof Type && structure && structure.constructor === Type) {
          return structure;
        }

        if (structure === null || structure && typeof structure !== "object") {
          return TypeError("Invalid data structure \"" + structure + "\" was passed to " + this[$typeName]());
        }

        var seq = (0, _immutable.Seq)(structure);
        var type = this[$type];
        var isEmpty = seq.size === 0;

        if (isEmpty && this[$empty]) {
          return this[$empty];
        }

        var record = undefined;
        for (var key in type) {
          var fieldType = type[key];
          var value = seq.has(key) ? seq.get(key) : this.get(key);
          var result = fieldType[$read](value);

          if (result instanceof TypeError) {
            return TypeError("Invalid value for \"" + key + "\" field:\n " + result.message);
          }

          record = this[$step](record || this[$init](), [key, result]);
        }

        record = this[$result](record);

        if (isEmpty) {
          this[$empty] = record;
        }

        return record;
      }
    }, {
      key: _typed.Typed.step,
      value: function value(result, _ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var key = _ref2[0];
        var _value = _ref2[1];

        var store = result[$store] ? result[$store].set(key, _value) : new _immutable.Map([[key, _value]]);

        if (result[$store] === store) {
          return result;
        }

        var record = result.__ownerID ? result : (0, _typed.construct)(result);
        record[$store] = store;

        return record;
      }
    }, {
      key: _typed.Typed.typeSignature,
      value: function value() {
        var type = this[$type];
        var body = [];
        for (var key in type) {
          body.push(key + ": " + type[key][$typeName]());
        }

        return "Typed.Record({" + body.join(", ") + "})";
      }
    }, {
      key: _typed.Typed.typeName,
      value: function value() {
        return this[$label] || this[$typeSignature]();
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.__toString(this[$typeName]() + "({", "})");
      }
    }, {
      key: "has",
      value: function has(key) {
        return !!this[$type][key];
      }
    }, {
      key: "get",
      value: function get(key, defaultValue) {
        return !this[$type][key] ? defaultValue : !this[$store] ? defaultValue : this[$store].get(key, defaultValue);
      }
    }, {
      key: "clear",
      value: function clear() {
        if (this.__ownerID) {
          this[$store] && this[$store].clear();
          return this;
        }

        return this[$empty] || (this[$empty] = new this.constructor());
      }
    }, {
      key: "remove",
      value: function remove(key) {
        return this[$type][key] ? this.set(key, void 0) : this;
      }
    }, {
      key: "set",
      value: function set(key, value) {
        var fieldType = this[$type][key];

        if (!fieldType) {
          throw TypeError("Cannot set unknown field \"" + key + "\" on \"" + this[$typeName]() + "\"");
        }

        var result = fieldType[$read](value);

        if (result instanceof TypeError) {
          throw TypeError("Invalid value for " + key + " field: " + result.message);
        }

        return this[$step](this, [key, result]);
      }
    }, {
      key: "__iterator",
      value: function __iterator(type, reverse) {
        var _this = this;

        return Keyed(this[$type]).map(function (_, key) {
          return _this.get(key);
        }).__iterator(type, reverse);
      }
    }, {
      key: "__iterate",
      value: function __iterate(f, reverse) {
        var _this2 = this;

        return Keyed(this[$type]).map(function (_, key) {
          return _this2.get(key);
        }).__iterate(f, reverse);
      }
    }, {
      key: "__ensureOwner",
      value: function __ensureOwner(ownerID) {
        if (ownerID === this.__ownerID) {
          return this;
        }

        var store = this[$store] && this[$store].__ensureOwner(ownerID);
        var result = !ownerID ? this : (0, _typed.construct)(this);

        result.__ownerID = ownerID;
        result[$store] = store;
        return result;
      }
    }, {
      key: "wasAltered",
      value: function wasAltered() {
        return this[$store].wasAltered();
      }
    }]);

    return TypedRecord;
  })(IterableKeyedBase);

  var Record = function Record(descriptor, label) {
    if (descriptor && typeof descriptor === "object") {
      var type = Object.create(null);
      var _keys = Object.keys(descriptor);
      var size = _keys.length;

      if (size > 0) {
        var _properties;

        var _ret = (function () {
          var properties = (_properties = {
            size: { value: size }
          }, _defineProperty(_properties, $type, { value: type }), _defineProperty(_properties, $label, { value: label }), _properties);

          var index = 0;
          while (index < size) {
            var key = _keys[index];
            var fieldType = (0, _typed.typeOf)(descriptor[key]);

            if (fieldType) {
              type[key] = fieldType;
              properties[key] = { get: Getter(key), set: Setter(key), enumerable: true };
            } else {
              throw TypeError("Invalid field descriptor provided for a \"" + key + "\" field");
            }

            index = index + 1;
          }

          var RecordType = function RecordType(structure) {
            var isNew = this instanceof RecordType;
            var constructor = isNew ? this.constructor : RecordType;

            if (structure instanceof constructor) {
              return structure;
            }

            var type = constructor.prototype;
            var result = type[$read](structure);

            if (result instanceof TypeError) {
              throw result;
            }

            if (isNew) {
              this[$store] = result[$store];
            } else {
              return result;
            }
          };

          properties.constructor = { value: RecordType };
          RecordType.prototype = Object.create(RecordPrototype, properties);
          var prototype = RecordType.prototype;

          return {
            v: RecordType
          };
        })();

        if (typeof _ret === "object") return _ret.v;
      } else {
        throw TypeError("Typed.Record descriptor must define at least on field");
      }
    } else {
      throw TypeError("Typed.Record must be passed a descriptor of fields");
    }
  };
  exports.Record = Record;
  Record.Type = TypedRecord;
  Record.prototype = TypedRecord.prototype;
  var RecordPrototype = TypedRecord.prototype;

  RecordPrototype[_typed.Typed.DELETE] = RecordPrototype.remove;

  // Large part of the Record API is implemented by Immutabel.Map
  // and is just copied over.
  RecordPrototype.deleteIn = _immutable.Map.prototype.deleteIn;
  RecordPrototype.removeIn = _immutable.Map.prototype.removeIn;
  RecordPrototype.merge = _immutable.Map.prototype.merge;
  RecordPrototype.mergeWith = _immutable.Map.prototype.mergeWith;
  RecordPrototype.mergeIn = _immutable.Map.prototype.mergeIn;
  RecordPrototype.mergeDeep = _immutable.Map.prototype.mergeDeep;
  RecordPrototype.mergeDeepWith = _immutable.Map.prototype.mergeDeepWith;
  RecordPrototype.mergeDeepIn = _immutable.Map.prototype.mergeDeepIn;
  RecordPrototype.setIn = _immutable.Map.prototype.setIn;
  RecordPrototype.update = _immutable.Map.prototype.update;
  RecordPrototype.updateIn = _immutable.Map.prototype.updateIn;
  RecordPrototype.withMutations = _immutable.Map.prototype.withMutations;
  RecordPrototype.asMutable = _immutable.Map.prototype.asMutable;
  RecordPrototype.asImmutable = _immutable.Map.prototype.asImmutable;

  // Large chuck of API inherited from Iterable does not makes
  // much sense in the context of records so we undefine it.
  RecordPrototype.map = void 0;
  RecordPrototype.filter = void 0;
  RecordPrototype.filterNot = void 0;
  RecordPrototype.flip = void 0;
  RecordPrototype.mapKeys = void 0;
  RecordPrototype.mapEntries = void 0;
  RecordPrototype.sort = void 0;
  RecordPrototype.sortBy = void 0;
  RecordPrototype.reverse = void 0;
  RecordPrototype.slice = void 0;
  RecordPrototype.butLast = void 0;
  RecordPrototype.flatMap = void 0;
  RecordPrototype.flatten = void 0;
  RecordPrototype.rest = void 0;
  RecordPrototype.skip = void 0;
  RecordPrototype.skipLast = void 0;
  RecordPrototype.skipWhile = void 0;
  RecordPrototype.skipUntil = void 0;
  RecordPrototype.sortBy = void 0;
  RecordPrototype.take = void 0;
  RecordPrototype.takeLast = void 0;
  RecordPrototype.takeWhile = void 0;
  RecordPrototype.takeUntil = void 0;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWNvcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFHTyxLQUFLLGNBRkMsUUFBUSxDQUVkLEtBQUs7O0FBRVosTUFBTSxNQUFNLEdBQUcsU0FBVCxNQUFNLENBQUcsR0FBRztXQUFJLFlBQVc7QUFDL0IsYUFBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0tBQ3JCO0dBQUEsQ0FBQTs7QUFFRCxNQUFNLE1BQU0sR0FBRyxTQUFULE1BQU0sQ0FBRyxHQUFHO1dBQUksVUFBUyxLQUFLLEVBQUU7QUFDcEMsVUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDbkIsY0FBTSxTQUFTLENBQUMsb0NBQW9DLENBQUMsQ0FBQTtPQUN0RDtBQUNELFVBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO0tBQ3JCO0dBQUEsQ0FBQTs7QUFHRCxNQUFNLE1BQU0sR0FBRyxPQWpCUCxLQUFLLENBaUJRLEtBQUssQ0FBQTtBQUMxQixNQUFNLEtBQUssR0FBRyxPQWxCTixLQUFLLENBa0JPLElBQUksQ0FBQTtBQUN4QixNQUFNLEtBQUssR0FBRyxPQW5CTixLQUFLLENBbUJPLElBQUksQ0FBQTtBQUN4QixNQUFNLEtBQUssR0FBRyxPQXBCTixLQUFLLENBb0JPLElBQUksQ0FBQTtBQUN4QixNQUFNLE9BQU8sR0FBRyxPQXJCUixLQUFLLENBcUJTLE1BQU0sQ0FBQTtBQUM1QixNQUFNLEtBQUssR0FBRyxPQXRCTixLQUFLLENBc0JPLElBQUksQ0FBQTtBQUN4QixNQUFNLE1BQU0sR0FBRyxPQXZCUCxLQUFLLENBdUJRLEtBQUssQ0FBQTtBQUMxQixNQUFNLE1BQU0sR0FBRyxPQXhCUCxLQUFLLENBd0JRLEtBQUssQ0FBQTtBQUMxQixNQUFNLFNBQVMsR0FBRyxPQXpCVixLQUFLLENBeUJXLFFBQVEsQ0FBQTtBQUNoQyxNQUFNLGNBQWMsR0FBRyxPQTFCZixLQUFLLENBMEJnQixhQUFhLENBQUE7O0FBRTFDLE1BQU0saUJBQWlCLEdBQUcsU0FBcEIsaUJBQWlCLEdBQWMsRUFBRSxDQUFBO0FBQ3ZDLG1CQUFpQixDQUFDLFNBQVMsR0FBRyxXQTVCakIsUUFBUSxDQTRCa0IsS0FBSyxDQUFDLFNBQVMsQ0FBQTs7TUFHaEQsV0FBVztBQUNKLGFBRFAsV0FBVyxHQUNEOzRCQURWLFdBQVc7O0FBRWIsaUNBRkUsV0FBVyw2Q0FFTjtLQUNSOztjQUhHLFdBQVc7O2lCQUFYLFdBQVc7V0FJZCxPQXBDSyxLQUFLLENBb0NKLElBQUk7YUFBQyxpQkFBRztBQUNiLGVBQU8sV0FyQ1ksU0FBUyxFQXFDWCxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtPQUNuQzs7V0FDQSxPQXZDSyxLQUFLLENBdUNKLE1BQU07YUFBQyxlQUFDLE1BQU0sRUFBRTtBQUNyQixlQUFPLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQTtPQUM1Qjs7V0FFQSxPQTNDSyxLQUFLLENBMkNKLElBQUk7YUFBQyxlQUFDLFNBQVMsRUFBRTtBQUN0QixZQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFBOztBQUU3QixZQUFJLFNBQVMsWUFBWSxJQUFJLElBQ3pCLFNBQVMsSUFDVCxTQUFTLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRTtBQUNsQyxpQkFBTyxTQUFTLENBQUE7U0FDakI7O0FBRUQsWUFBSSxTQUFTLEtBQUssSUFBSSxJQUFLLFNBQVMsSUFBSSxPQUFPLFNBQVMsS0FBTSxRQUFRLEVBQUc7QUFDdkUsaUJBQU8sU0FBUywrQkFBNEIsU0FBUyx5QkFBbUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUcsQ0FBQTtTQUM3Rjs7QUFFRCxZQUFNLEdBQUcsR0FBRyxlQXZEUixHQUFHLEVBdURTLFNBQVMsQ0FBQyxDQUFBO0FBQzFCLFlBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUN4QixZQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQTs7QUFHOUIsWUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQzNCLGlCQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtTQUNwQjs7QUFFRCxZQUFJLE1BQU0sWUFBQSxDQUFBO0FBQ1YsYUFBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7QUFDcEIsY0FBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQzNCLGNBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ3pELGNBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQTs7QUFFdEMsY0FBSSxNQUFNLFlBQVksU0FBUyxFQUFFO0FBQy9CLG1CQUFPLFNBQVMsMEJBQXVCLEdBQUcsb0JBQWMsTUFBTSxDQUFDLE9BQU8sQ0FBRyxDQUFBO1dBQzFFOztBQUVELGdCQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFBO1NBQzdEOztBQUVELGNBQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUE7O0FBRS9CLFlBQUksT0FBTyxFQUFFO0FBQ1YsY0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQTtTQUN0Qjs7QUFFRCxlQUFPLE1BQU0sQ0FBQTtPQUNkOztXQUNBLE9BdEZLLEtBQUssQ0FzRkosSUFBSTthQUFDLGVBQUMsTUFBTSxFQUFFLElBQVksRUFBRTttQ0FBZCxJQUFZOztZQUFYLEdBQUc7WUFBRSxNQUFLOztBQUM5QixZQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBSyxDQUFDLEdBQy9DLGVBdkZLLEdBQUcsQ0F1RkEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxNQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7O0FBRXJDLFlBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssRUFBRTtBQUM1QixpQkFBTyxNQUFNLENBQUM7U0FDZjs7QUFFRCxZQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sR0FBRyxXQTlGeEIsU0FBUyxFQThGeUIsTUFBTSxDQUFDLENBQUE7QUFDNUQsY0FBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQTs7QUFFdEIsZUFBTyxNQUFNLENBQUE7T0FDZDs7V0FFQSxPQXBHSyxLQUFLLENBb0dKLGFBQWE7YUFBQyxpQkFBRztBQUN0QixZQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDeEIsWUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFBO0FBQ2YsYUFBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7QUFDcEIsY0FBSSxDQUFDLElBQUksQ0FBSSxHQUFHLFVBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUcsQ0FBQTtTQUMvQzs7QUFFRCxrQ0FBd0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBSTtPQUM1Qzs7V0FFQSxPQTlHSyxLQUFLLENBOEdKLFFBQVE7YUFBQyxpQkFBRztBQUNqQixlQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQTtPQUM5Qzs7O2FBRU8sb0JBQUc7QUFDVCxlQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO09BQ3ZEOzs7YUFFRSxhQUFDLEdBQUcsRUFBRTtBQUNQLGVBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtPQUMxQjs7O2FBRUUsYUFBQyxHQUFHLEVBQUUsWUFBWSxFQUFFO0FBQ3JCLGVBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsWUFBWSxHQUNoQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxZQUFZLEdBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO09BQzVDOzs7YUFFSSxpQkFBRztBQUNOLFlBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNsQixjQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0FBQ3BDLGlCQUFPLElBQUksQ0FBQTtTQUNaOztBQUVELGVBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQSxDQUFDO09BQy9DOzs7YUFFSyxnQkFBQyxHQUFHLEVBQUU7QUFDVixlQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBRSxHQUFHLElBQUksQ0FBQTtPQUN4RDs7O2FBRUUsYUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ2QsWUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBOztBQUVsQyxZQUFJLENBQUMsU0FBUyxFQUFFO0FBQ2QsZ0JBQU0sU0FBUyxpQ0FBOEIsR0FBRyxnQkFBUyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsUUFBSSxDQUFBO1NBQy9FOztBQUVELFlBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQTs7QUFFdEMsWUFBSSxNQUFNLFlBQVksU0FBUyxFQUFFO0FBQy9CLGdCQUFNLFNBQVMsd0JBQXNCLEdBQUcsZ0JBQVcsTUFBTSxDQUFDLE9BQU8sQ0FBRyxDQUFBO1NBQ3JFOztBQUVELGVBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFBO09BQ3hDOzs7YUFDUyxvQkFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFOzs7QUFDeEIsZUFBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxFQUFFLEdBQUc7aUJBQUssTUFBSyxHQUFHLENBQUMsR0FBRyxDQUFDO1NBQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7T0FDcEY7OzthQUVRLG1CQUFDLENBQUMsRUFBRSxPQUFPLEVBQUU7OztBQUNwQixlQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLEVBQUUsR0FBRztpQkFBSyxPQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUM7U0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztPQUNoRjs7O2FBRVksdUJBQUMsT0FBTyxFQUFFO0FBQ3JCLFlBQUksT0FBTyxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDOUIsaUJBQU8sSUFBSSxDQUFBO1NBQ1o7O0FBRUQsWUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDakUsWUFBTSxNQUFNLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLFdBM0tkLFNBQVMsRUEyS2UsSUFBSSxDQUFDLENBQUE7O0FBRWhELGNBQU0sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFBO0FBQzFCLGNBQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUE7QUFDdEIsZUFBTyxNQUFNLENBQUE7T0FDZDs7O2FBQ1Msc0JBQUc7QUFDWCxlQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtPQUNqQzs7O1dBbkpHLFdBQVc7S0FBUyxpQkFBaUI7O0FBc0pwQyxNQUFNLE1BQU0sR0FBRyxTQUFULE1BQU0sQ0FBWSxVQUFVLEVBQUUsS0FBSyxFQUFFO0FBQ2hELFFBQUksVUFBVSxJQUFJLE9BQU8sVUFBVSxLQUFNLFFBQVEsRUFBRTtBQUNqRCxVQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ2hDLFVBQU0sS0FBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7QUFDcEMsVUFBTSxJQUFJLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQTs7QUFFeEIsVUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFOzs7O0FBQ1osY0FBTSxVQUFVO0FBQ2QsZ0JBQUksRUFBRSxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUM7MENBQ2xCLEtBQUssRUFBRyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsZ0NBQ3JCLE1BQU0sRUFBRyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsZUFDekIsQ0FBQTs7QUFFRCxjQUFJLEtBQUssR0FBRyxDQUFDLENBQUE7QUFDYixpQkFBTyxLQUFLLEdBQUcsSUFBSSxFQUFFO0FBQ25CLGdCQUFNLEdBQUcsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDdkIsZ0JBQU0sU0FBUyxHQUFHLFdBdE1YLE1BQU0sRUFzTVksVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7O0FBRXpDLGdCQUFJLFNBQVMsRUFBRTtBQUNiLGtCQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFBO0FBQ3JCLHdCQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQyxDQUFBO2FBQ3ZFLE1BQU07QUFDTCxvQkFBTSxTQUFTLGdEQUE2QyxHQUFHLGNBQVUsQ0FBQTthQUMxRTs7QUFFRCxpQkFBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUE7V0FDbEI7O0FBRUQsY0FBTSxVQUFVLEdBQUcsU0FBYixVQUFVLENBQVksU0FBUyxFQUFFO0FBQ3JDLGdCQUFNLEtBQUssR0FBRyxJQUFJLFlBQVksVUFBVSxDQUFBO0FBQ3hDLGdCQUFNLFdBQVcsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUE7O0FBRXpELGdCQUFJLFNBQVMsWUFBWSxXQUFXLEVBQUU7QUFDcEMscUJBQU8sU0FBUyxDQUFBO2FBQ2pCOztBQUVELGdCQUFNLElBQUksR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFBO0FBQ2xDLGdCQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUE7O0FBRXJDLGdCQUFJLE1BQU0sWUFBWSxTQUFTLEVBQUU7QUFDL0Isb0JBQU0sTUFBTSxDQUFBO2FBQ2I7O0FBRUQsZ0JBQUksS0FBSyxFQUFFO0FBQ1Qsa0JBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7YUFDOUIsTUFBTTtBQUNMLHFCQUFPLE1BQU0sQ0FBQTthQUNkO1dBQ0YsQ0FBQTs7QUFFRCxvQkFBVSxDQUFDLFdBQVcsR0FBRyxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUMsQ0FBQTtBQUM1QyxvQkFBVSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxVQUFVLENBQUMsQ0FBQTtBQUNqRSxjQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFBOztBQUV0QztlQUFPLFVBQVU7WUFBQTs7OztPQUNsQixNQUFNO0FBQ0wsY0FBTSxTQUFTLHlEQUF5RCxDQUFBO09BQ3pFO0tBQ0YsTUFBTTtBQUNMLFlBQU0sU0FBUyxzREFBc0QsQ0FBQTtLQUN0RTtHQUNGLENBQUE7VUE3RFksTUFBTSxHQUFOLE1BQU07QUE4RG5CLFFBQU0sQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFBO0FBQ3pCLFFBQU0sQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQTtBQUN4QyxNQUFNLGVBQWUsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFBOztBQUc3QyxpQkFBZSxDQUFDLE9BelBSLEtBQUssQ0F5UFMsTUFBTSxDQUFDLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQTs7OztBQUl0RCxpQkFBZSxDQUFDLFFBQVEsR0FBRyxXQTVQSixHQUFHLENBNFBLLFNBQVMsQ0FBQyxRQUFRLENBQUE7QUFDakQsaUJBQWUsQ0FBQyxRQUFRLEdBQUcsV0E3UEosR0FBRyxDQTZQSyxTQUFTLENBQUMsUUFBUSxDQUFBO0FBQ2pELGlCQUFlLENBQUMsS0FBSyxHQUFHLFdBOVBELEdBQUcsQ0E4UEUsU0FBUyxDQUFDLEtBQUssQ0FBQTtBQUMzQyxpQkFBZSxDQUFDLFNBQVMsR0FBRyxXQS9QTCxHQUFHLENBK1BNLFNBQVMsQ0FBQyxTQUFTLENBQUE7QUFDbkQsaUJBQWUsQ0FBQyxPQUFPLEdBQUcsV0FoUUgsR0FBRyxDQWdRSSxTQUFTLENBQUMsT0FBTyxDQUFBO0FBQy9DLGlCQUFlLENBQUMsU0FBUyxHQUFHLFdBalFMLEdBQUcsQ0FpUU0sU0FBUyxDQUFDLFNBQVMsQ0FBQTtBQUNuRCxpQkFBZSxDQUFDLGFBQWEsR0FBRyxXQWxRVCxHQUFHLENBa1FVLFNBQVMsQ0FBQyxhQUFhLENBQUE7QUFDM0QsaUJBQWUsQ0FBQyxXQUFXLEdBQUcsV0FuUVAsR0FBRyxDQW1RUSxTQUFTLENBQUMsV0FBVyxDQUFBO0FBQ3ZELGlCQUFlLENBQUMsS0FBSyxHQUFHLFdBcFFELEdBQUcsQ0FvUUUsU0FBUyxDQUFDLEtBQUssQ0FBQTtBQUMzQyxpQkFBZSxDQUFDLE1BQU0sR0FBRyxXQXJRRixHQUFHLENBcVFHLFNBQVMsQ0FBQyxNQUFNLENBQUE7QUFDN0MsaUJBQWUsQ0FBQyxRQUFRLEdBQUcsV0F0UUosR0FBRyxDQXNRSyxTQUFTLENBQUMsUUFBUSxDQUFBO0FBQ2pELGlCQUFlLENBQUMsYUFBYSxHQUFHLFdBdlFULEdBQUcsQ0F1UVUsU0FBUyxDQUFDLGFBQWEsQ0FBQTtBQUMzRCxpQkFBZSxDQUFDLFNBQVMsR0FBRyxXQXhRTCxHQUFHLENBd1FNLFNBQVMsQ0FBQyxTQUFTLENBQUE7QUFDbkQsaUJBQWUsQ0FBQyxXQUFXLEdBQUcsV0F6UVAsR0FBRyxDQXlRUSxTQUFTLENBQUMsV0FBVyxDQUFBOzs7O0FBSXZELGlCQUFlLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQzdCLGlCQUFlLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLGlCQUFlLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ25DLGlCQUFlLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQzlCLGlCQUFlLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ2pDLGlCQUFlLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ3BDLGlCQUFlLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQzlCLGlCQUFlLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLGlCQUFlLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ2pDLGlCQUFlLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQy9CLGlCQUFlLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ2pDLGlCQUFlLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ2pDLGlCQUFlLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ2pDLGlCQUFlLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQzlCLGlCQUFlLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQzlCLGlCQUFlLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ2xDLGlCQUFlLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ25DLGlCQUFlLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ25DLGlCQUFlLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLGlCQUFlLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQzlCLGlCQUFlLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ2xDLGlCQUFlLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ25DLGlCQUFlLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDIiwiZmlsZSI6InJlY29yZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VHlwZWQsIHR5cGVPZiwgY29uc3RydWN0fSBmcm9tIFwiLi90eXBlZFwiXG5pbXBvcnQge1NlcSwgSXRlcmFibGUsIE1hcH0gZnJvbSAnaW1tdXRhYmxlJ1xuXG5jb25zdCB7S2V5ZWR9ID0gSXRlcmFibGVcblxuY29uc3QgR2V0dGVyID0ga2V5ID0+IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5nZXQoa2V5KVxufVxuXG5jb25zdCBTZXR0ZXIgPSBrZXkgPT4gZnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCF0aGlzLl9fb3duZXJJRCkge1xuICAgIHRocm93IFR5cGVFcnJvcihcIkNhbm5vdCBzZXQgb24gYW4gaW1tdXRhYmxlIHJlY29yZC5cIilcbiAgfVxuICB0aGlzLnNldChrZXksIHZhbHVlKVxufVxuXG5cbmNvbnN0ICRzdG9yZSA9IFR5cGVkLnN0b3JlXG5jb25zdCAkdHlwZSA9IFR5cGVkLnR5cGVcbmNvbnN0ICRzdGVwID0gVHlwZWQuc3RlcFxuY29uc3QgJGluaXQgPSBUeXBlZC5pbml0XG5jb25zdCAkcmVzdWx0ID0gVHlwZWQucmVzdWx0XG5jb25zdCAkcmVhZCA9IFR5cGVkLnJlYWRcbmNvbnN0ICRsYWJlbCA9IFR5cGVkLmxhYmVsXG5jb25zdCAkZW1wdHkgPSBUeXBlZC5lbXB0eVxuY29uc3QgJHR5cGVOYW1lID0gVHlwZWQudHlwZU5hbWVcbmNvbnN0ICR0eXBlU2lnbmF0dXJlID0gVHlwZWQudHlwZVNpZ25hdHVyZVxuXG5jb25zdCBJdGVyYWJsZUtleWVkQmFzZSA9IGZ1bmN0aW9uKCkge31cbkl0ZXJhYmxlS2V5ZWRCYXNlLnByb3RvdHlwZSA9IEl0ZXJhYmxlLktleWVkLnByb3RvdHlwZVxuXG5cbmNsYXNzIFR5cGVkUmVjb3JkIGV4dGVuZHMgSXRlcmFibGVLZXllZEJhc2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gIH1cbiAgW1R5cGVkLmluaXRdKCkge1xuICAgIHJldHVybiBjb25zdHJ1Y3QodGhpcykuYXNNdXRhYmxlKClcbiAgfVxuICBbVHlwZWQucmVzdWx0XShyZXN1bHQpIHtcbiAgICByZXR1cm4gcmVzdWx0LmFzSW1tdXRhYmxlKClcbiAgfVxuXG4gIFtUeXBlZC5yZWFkXShzdHJ1Y3R1cmUpIHtcbiAgICBjb25zdCBUeXBlID0gdGhpcy5jb25zdHJ1Y3RvclxuXG4gICAgaWYgKHN0cnVjdHVyZSBpbnN0YW5jZW9mIFR5cGUgJiZcbiAgICAgICAgc3RydWN0dXJlICYmXG4gICAgICAgIHN0cnVjdHVyZS5jb25zdHJ1Y3RvciA9PT0gVHlwZSkge1xuICAgICAgcmV0dXJuIHN0cnVjdHVyZVxuICAgIH1cblxuICAgIGlmIChzdHJ1Y3R1cmUgPT09IG51bGwgfHwgKHN0cnVjdHVyZSAmJiB0eXBlb2Yoc3RydWN0dXJlKSAhPT0gXCJvYmplY3RcIikpIHtcbiAgICAgIHJldHVybiBUeXBlRXJyb3IoYEludmFsaWQgZGF0YSBzdHJ1Y3R1cmUgXCIke3N0cnVjdHVyZX1cIiB3YXMgcGFzc2VkIHRvICR7dGhpc1skdHlwZU5hbWVdKCl9YClcbiAgICB9XG5cbiAgICBjb25zdCBzZXEgPSBTZXEoc3RydWN0dXJlKVxuICAgIGNvbnN0IHR5cGUgPSB0aGlzWyR0eXBlXVxuICAgIGNvbnN0IGlzRW1wdHkgPSBzZXEuc2l6ZSA9PT0gMFxuXG5cbiAgICBpZiAoaXNFbXB0eSAmJiB0aGlzWyRlbXB0eV0pIHtcbiAgICAgIHJldHVybiB0aGlzWyRlbXB0eV1cbiAgICB9XG5cbiAgICBsZXQgcmVjb3JkXG4gICAgZm9yIChsZXQga2V5IGluIHR5cGUpIHtcbiAgICAgIGNvbnN0IGZpZWxkVHlwZSA9IHR5cGVba2V5XVxuICAgICAgY29uc3QgdmFsdWUgPSBzZXEuaGFzKGtleSkgPyBzZXEuZ2V0KGtleSkgOiB0aGlzLmdldChrZXkpXG4gICAgICBjb25zdCByZXN1bHQgPSBmaWVsZFR5cGVbJHJlYWRdKHZhbHVlKVxuXG4gICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgVHlwZUVycm9yKSB7XG4gICAgICAgIHJldHVybiBUeXBlRXJyb3IoYEludmFsaWQgdmFsdWUgZm9yIFwiJHtrZXl9XCIgZmllbGQ6XFxuICR7cmVzdWx0Lm1lc3NhZ2V9YClcbiAgICAgIH1cblxuICAgICAgcmVjb3JkID0gdGhpc1skc3RlcF0ocmVjb3JkIHx8IHRoaXNbJGluaXRdKCksIFtrZXksIHJlc3VsdF0pXG4gICAgfVxuXG4gICAgcmVjb3JkID0gdGhpc1skcmVzdWx0XShyZWNvcmQpXG5cbiAgIGlmIChpc0VtcHR5KSB7XG4gICAgICB0aGlzWyRlbXB0eV0gPSByZWNvcmRcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjb3JkXG4gIH1cbiAgW1R5cGVkLnN0ZXBdKHJlc3VsdCwgW2tleSwgdmFsdWVdKSB7XG4gICAgY29uc3Qgc3RvcmUgPSByZXN1bHRbJHN0b3JlXSA/IHJlc3VsdFskc3RvcmVdLnNldChrZXksIHZhbHVlKSA6XG4gICAgICAgICAgICAgICAgICBuZXcgTWFwKFtba2V5LCB2YWx1ZV1dKVxuXG4gICAgaWYgKHJlc3VsdFskc3RvcmVdID09PSBzdG9yZSkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBjb25zdCByZWNvcmQgPSByZXN1bHQuX19vd25lcklEID8gcmVzdWx0IDogY29uc3RydWN0KHJlc3VsdClcbiAgICByZWNvcmRbJHN0b3JlXSA9IHN0b3JlXG5cbiAgICByZXR1cm4gcmVjb3JkXG4gIH1cblxuICBbVHlwZWQudHlwZVNpZ25hdHVyZV0oKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXNbJHR5cGVdXG4gICAgY29uc3QgYm9keSA9IFtdXG4gICAgZm9yIChsZXQga2V5IGluIHR5cGUpIHtcbiAgICAgIGJvZHkucHVzaChgJHtrZXl9OiAke3R5cGVba2V5XVskdHlwZU5hbWVdKCl9YClcbiAgICB9XG5cbiAgICByZXR1cm4gYFR5cGVkLlJlY29yZCh7JHtib2R5LmpvaW4oJywgJyl9fSlgXG4gIH1cblxuICBbVHlwZWQudHlwZU5hbWVdKCkge1xuICAgIHJldHVybiB0aGlzWyRsYWJlbF0gfHwgdGhpc1skdHlwZVNpZ25hdHVyZV0oKVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX190b1N0cmluZyh0aGlzWyR0eXBlTmFtZV0oKSArICcoeycsICd9KScpXG4gIH1cblxuICBoYXMoa2V5KSB7XG4gICAgcmV0dXJuICEhdGhpc1skdHlwZV1ba2V5XVxuICB9XG5cbiAgZ2V0KGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgcmV0dXJuICF0aGlzWyR0eXBlXVtrZXldID8gZGVmYXVsdFZhbHVlIDpcbiAgICAgICAgICAgIXRoaXNbJHN0b3JlXSA/IGRlZmF1bHRWYWx1ZSA6XG4gICAgICAgICAgIHRoaXNbJHN0b3JlXS5nZXQoa2V5LCBkZWZhdWx0VmFsdWUpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgaWYgKHRoaXMuX19vd25lcklEKSB7XG4gICAgICB0aGlzWyRzdG9yZV0gJiYgdGhpc1skc3RvcmVdLmNsZWFyKClcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNbJGVtcHR5XSB8fFxuICAgICAgICAgICAodGhpc1skZW1wdHldID0gbmV3IHRoaXMuY29uc3RydWN0b3IoKSlcbiAgfVxuXG4gIHJlbW92ZShrZXkpIHtcbiAgICByZXR1cm4gdGhpc1skdHlwZV1ba2V5XSA/IHRoaXMuc2V0KGtleSwgdm9pZCgwKSkgOiB0aGlzXG4gIH1cblxuICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IGZpZWxkVHlwZSA9IHRoaXNbJHR5cGVdW2tleV1cblxuICAgIGlmICghZmllbGRUeXBlKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoYENhbm5vdCBzZXQgdW5rbm93biBmaWVsZCBcIiR7a2V5fVwiIG9uIFwiJHt0aGlzWyR0eXBlTmFtZV0oKX1cImApXG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gZmllbGRUeXBlWyRyZWFkXSh2YWx1ZSlcblxuICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBUeXBlRXJyb3IpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcihgSW52YWxpZCB2YWx1ZSBmb3IgJHtrZXl9IGZpZWxkOiAke3Jlc3VsdC5tZXNzYWdlfWApXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNbJHN0ZXBdKHRoaXMsIFtrZXksIHJlc3VsdF0pXG4gIH1cbiAgX19pdGVyYXRvcih0eXBlLCByZXZlcnNlKSB7XG4gICAgcmV0dXJuIEtleWVkKHRoaXNbJHR5cGVdKS5tYXAoKF8sIGtleSkgPT4gdGhpcy5nZXQoa2V5KSkuX19pdGVyYXRvcih0eXBlLCByZXZlcnNlKTtcbiAgfVxuXG4gIF9faXRlcmF0ZShmLCByZXZlcnNlKSB7XG4gICAgcmV0dXJuIEtleWVkKHRoaXNbJHR5cGVdKS5tYXAoKF8sIGtleSkgPT4gdGhpcy5nZXQoa2V5KSkuX19pdGVyYXRlKGYsIHJldmVyc2UpO1xuICB9XG5cbiAgX19lbnN1cmVPd25lcihvd25lcklEKSB7XG4gICAgaWYgKG93bmVySUQgPT09IHRoaXMuX19vd25lcklEKSB7XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGNvbnN0IHN0b3JlID0gdGhpc1skc3RvcmVdICYmIHRoaXNbJHN0b3JlXS5fX2Vuc3VyZU93bmVyKG93bmVySUQpXG4gICAgY29uc3QgcmVzdWx0ID0gIW93bmVySUQgPyB0aGlzIDogY29uc3RydWN0KHRoaXMpXG5cbiAgICByZXN1bHQuX19vd25lcklEID0gb3duZXJJRFxuICAgIHJlc3VsdFskc3RvcmVdID0gc3RvcmVcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbiAgd2FzQWx0ZXJlZCgpIHtcbiAgICByZXR1cm4gdGhpc1skc3RvcmVdLndhc0FsdGVyZWQoKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBSZWNvcmQgPSBmdW5jdGlvbihkZXNjcmlwdG9yLCBsYWJlbCkge1xuICBpZiAoZGVzY3JpcHRvciAmJiB0eXBlb2YoZGVzY3JpcHRvcikgPT09IFwib2JqZWN0XCIpIHtcbiAgICBjb25zdCB0eXBlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkZXNjcmlwdG9yKVxuICAgIGNvbnN0IHNpemUgPSBrZXlzLmxlbmd0aFxuXG4gICAgaWYgKHNpemUgPiAwKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0aWVzID0ge1xuICAgICAgICBzaXplOiB7dmFsdWU6IHNpemV9LFxuICAgICAgICBbJHR5cGVdOiB7dmFsdWU6IHR5cGV9LFxuICAgICAgICBbJGxhYmVsXToge3ZhbHVlOiBsYWJlbH1cbiAgICAgIH1cblxuICAgICAgbGV0IGluZGV4ID0gMFxuICAgICAgd2hpbGUgKGluZGV4IDwgc2l6ZSkge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlzW2luZGV4XVxuICAgICAgICBjb25zdCBmaWVsZFR5cGUgPSB0eXBlT2YoZGVzY3JpcHRvcltrZXldKVxuXG4gICAgICAgIGlmIChmaWVsZFR5cGUpIHtcbiAgICAgICAgICB0eXBlW2tleV0gPSBmaWVsZFR5cGVcbiAgICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSB7Z2V0OkdldHRlcihrZXkpLCBzZXQ6U2V0dGVyKGtleSksIGVudW1lcmFibGU6IHRydWV9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgVHlwZUVycm9yKGBJbnZhbGlkIGZpZWxkIGRlc2NyaXB0b3IgcHJvdmlkZWQgZm9yIGEgXCIke2tleX1cIiBmaWVsZGApXG4gICAgICAgIH1cblxuICAgICAgICBpbmRleCA9IGluZGV4ICsgMVxuICAgICAgfVxuXG4gICAgICBjb25zdCBSZWNvcmRUeXBlID0gZnVuY3Rpb24oc3RydWN0dXJlKSB7XG4gICAgICAgIGNvbnN0IGlzTmV3ID0gdGhpcyBpbnN0YW5jZW9mIFJlY29yZFR5cGVcbiAgICAgICAgY29uc3QgY29uc3RydWN0b3IgPSBpc05ldyA/IHRoaXMuY29uc3RydWN0b3IgOiBSZWNvcmRUeXBlXG5cbiAgICAgICAgaWYgKHN0cnVjdHVyZSBpbnN0YW5jZW9mIGNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgcmV0dXJuIHN0cnVjdHVyZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdHlwZSA9IGNvbnN0cnVjdG9yLnByb3RvdHlwZVxuICAgICAgICBjb25zdCByZXN1bHQgPSB0eXBlWyRyZWFkXShzdHJ1Y3R1cmUpXG5cbiAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFR5cGVFcnJvcikge1xuICAgICAgICAgIHRocm93IHJlc3VsdFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzTmV3KSB7XG4gICAgICAgICAgdGhpc1skc3RvcmVdID0gcmVzdWx0WyRzdG9yZV1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJvcGVydGllcy5jb25zdHJ1Y3RvciA9IHt2YWx1ZTogUmVjb3JkVHlwZX1cbiAgICAgIFJlY29yZFR5cGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShSZWNvcmRQcm90b3R5cGUsIHByb3BlcnRpZXMpXG4gICAgICBjb25zdCBwcm90b3R5cGUgPSBSZWNvcmRUeXBlLnByb3RvdHlwZVxuXG4gICAgICByZXR1cm4gUmVjb3JkVHlwZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoYFR5cGVkLlJlY29yZCBkZXNjcmlwdG9yIG11c3QgZGVmaW5lIGF0IGxlYXN0IG9uIGZpZWxkYClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKGBUeXBlZC5SZWNvcmQgbXVzdCBiZSBwYXNzZWQgYSBkZXNjcmlwdG9yIG9mIGZpZWxkc2ApXG4gIH1cbn1cblJlY29yZC5UeXBlID0gVHlwZWRSZWNvcmRcblJlY29yZC5wcm90b3R5cGUgPSBUeXBlZFJlY29yZC5wcm90b3R5cGVcbmNvbnN0IFJlY29yZFByb3RvdHlwZSA9IFR5cGVkUmVjb3JkLnByb3RvdHlwZVxuXG5cblJlY29yZFByb3RvdHlwZVtUeXBlZC5ERUxFVEVdID0gUmVjb3JkUHJvdG90eXBlLnJlbW92ZVxuXG4vLyBMYXJnZSBwYXJ0IG9mIHRoZSBSZWNvcmQgQVBJIGlzIGltcGxlbWVudGVkIGJ5IEltbXV0YWJlbC5NYXBcbi8vIGFuZCBpcyBqdXN0IGNvcGllZCBvdmVyLlxuUmVjb3JkUHJvdG90eXBlLmRlbGV0ZUluID0gTWFwLnByb3RvdHlwZS5kZWxldGVJblxuUmVjb3JkUHJvdG90eXBlLnJlbW92ZUluID0gTWFwLnByb3RvdHlwZS5yZW1vdmVJblxuUmVjb3JkUHJvdG90eXBlLm1lcmdlID0gTWFwLnByb3RvdHlwZS5tZXJnZVxuUmVjb3JkUHJvdG90eXBlLm1lcmdlV2l0aCA9IE1hcC5wcm90b3R5cGUubWVyZ2VXaXRoXG5SZWNvcmRQcm90b3R5cGUubWVyZ2VJbiA9IE1hcC5wcm90b3R5cGUubWVyZ2VJblxuUmVjb3JkUHJvdG90eXBlLm1lcmdlRGVlcCA9IE1hcC5wcm90b3R5cGUubWVyZ2VEZWVwXG5SZWNvcmRQcm90b3R5cGUubWVyZ2VEZWVwV2l0aCA9IE1hcC5wcm90b3R5cGUubWVyZ2VEZWVwV2l0aFxuUmVjb3JkUHJvdG90eXBlLm1lcmdlRGVlcEluID0gTWFwLnByb3RvdHlwZS5tZXJnZURlZXBJblxuUmVjb3JkUHJvdG90eXBlLnNldEluID0gTWFwLnByb3RvdHlwZS5zZXRJblxuUmVjb3JkUHJvdG90eXBlLnVwZGF0ZSA9IE1hcC5wcm90b3R5cGUudXBkYXRlXG5SZWNvcmRQcm90b3R5cGUudXBkYXRlSW4gPSBNYXAucHJvdG90eXBlLnVwZGF0ZUluXG5SZWNvcmRQcm90b3R5cGUud2l0aE11dGF0aW9ucyA9IE1hcC5wcm90b3R5cGUud2l0aE11dGF0aW9uc1xuUmVjb3JkUHJvdG90eXBlLmFzTXV0YWJsZSA9IE1hcC5wcm90b3R5cGUuYXNNdXRhYmxlXG5SZWNvcmRQcm90b3R5cGUuYXNJbW11dGFibGUgPSBNYXAucHJvdG90eXBlLmFzSW1tdXRhYmxlXG5cbi8vIExhcmdlIGNodWNrIG9mIEFQSSBpbmhlcml0ZWQgZnJvbSBJdGVyYWJsZSBkb2VzIG5vdCBtYWtlc1xuLy8gbXVjaCBzZW5zZSBpbiB0aGUgY29udGV4dCBvZiByZWNvcmRzIHNvIHdlIHVuZGVmaW5lIGl0LlxuUmVjb3JkUHJvdG90eXBlLm1hcCA9IHZvaWQoMClcblJlY29yZFByb3RvdHlwZS5maWx0ZXIgPSB2b2lkKDApXG5SZWNvcmRQcm90b3R5cGUuZmlsdGVyTm90ID0gdm9pZCgwKVxuUmVjb3JkUHJvdG90eXBlLmZsaXAgPSB2b2lkKDApXG5SZWNvcmRQcm90b3R5cGUubWFwS2V5cyA9IHZvaWQoMClcblJlY29yZFByb3RvdHlwZS5tYXBFbnRyaWVzID0gdm9pZCgwKVxuUmVjb3JkUHJvdG90eXBlLnNvcnQgPSB2b2lkKDApXG5SZWNvcmRQcm90b3R5cGUuc29ydEJ5ID0gdm9pZCgwKVxuUmVjb3JkUHJvdG90eXBlLnJldmVyc2UgPSB2b2lkKDApXG5SZWNvcmRQcm90b3R5cGUuc2xpY2UgPSB2b2lkKDApXG5SZWNvcmRQcm90b3R5cGUuYnV0TGFzdCA9IHZvaWQoMClcblJlY29yZFByb3RvdHlwZS5mbGF0TWFwID0gdm9pZCgwKVxuUmVjb3JkUHJvdG90eXBlLmZsYXR0ZW4gPSB2b2lkKDApXG5SZWNvcmRQcm90b3R5cGUucmVzdCA9IHZvaWQoMClcblJlY29yZFByb3RvdHlwZS5za2lwID0gdm9pZCgwKVxuUmVjb3JkUHJvdG90eXBlLnNraXBMYXN0ID0gdm9pZCgwKVxuUmVjb3JkUHJvdG90eXBlLnNraXBXaGlsZSA9IHZvaWQoMClcblJlY29yZFByb3RvdHlwZS5za2lwVW50aWwgPSB2b2lkKDApXG5SZWNvcmRQcm90b3R5cGUuc29ydEJ5ID0gdm9pZCgwKVxuUmVjb3JkUHJvdG90eXBlLnRha2UgPSB2b2lkKDApXG5SZWNvcmRQcm90b3R5cGUudGFrZUxhc3QgPSB2b2lkKDApXG5SZWNvcmRQcm90b3R5cGUudGFrZVdoaWxlID0gdm9pZCgwKVxuUmVjb3JkUHJvdG90eXBlLnRha2VVbnRpbCA9IHZvaWQoMClcbiJdfQ==;
(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define('typed-immutable/list',['exports', './typed', 'immutable'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('./typed'), require('immutable'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.typed, global.Immutable);
    global.list = mod.exports;
  }
})(this, function (exports, _typed, _immutable) {
  'use strict';

  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _defaults(subClass, superClass); }

  var ImmutableList = _immutable.List;
  var Indexed = _immutable.Iterable.Indexed;

  var $store = _typed.Typed.store;
  var $type = _typed.Typed.type;
  var $read = _typed.Typed.read;
  var $step = _typed.Typed.step;
  var $init = _typed.Typed.init;
  var $result = _typed.Typed.result;
  var $label = _typed.Typed.label;
  var $typeName = _typed.Typed.typeName;
  var $empty = _typed.Typed.empty;

  var change = function change(list, f) {
    var store = f(list[$store]);
    if (store === list[$store]) {
      return list;
    } else {
      var result = list.__ownerID ? list : (0, _typed.construct)(list);
      result[$store] = store;
      result.size = store.size;
      return result;
    }
  };

  var _clear = function _clear(target) {
    return target.clear();
  };
  var _pop = function _pop(target) {
    return target.pop();
  };
  var _shift = function _shift(target) {
    return target.shift();
  };

  var TypeInferer = (function (_Type) {
    function TypeInferer() {
      _classCallCheck(this, TypeInferer);

      _get(Object.getPrototypeOf(TypeInferer.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(TypeInferer, _Type);

    _createClass(TypeInferer, [{
      key: _typed.Typed.typeName,
      value: function value() {
        return 'TypeInferer';
      }
    }, {
      key: _typed.Typed.read,
      value: function value(_value) {
        // typeOf usually creates type for the value with that
        // value being a default. For type inference we should
        // actually use a base type instead of type with default
        // there for we use prototype of the constructor.
        var type = (0, _typed.typeOf)(_value).constructor.prototype;
        this.type = this.type ? (0, _typed.Union)(this.type, type) : type;
        return _value;
      }
    }]);

    return TypeInferer;
  })(_typed.Type);

  function BaseImmutableList() {}
  BaseImmutableList.prototype = ImmutableList.prototype;

  var TypeInferedList = (function (_BaseImmutableList) {
    _inherits(TypeInferedList, _BaseImmutableList);

    _createClass(TypeInferedList, null, [{
      key: 'from',
      value: function from(list) {
        var result = (0, _typed.construct)(this.prototype);
        result[$store] = list[$store];
        result.size = list.size;
        return result;
      }
    }]);

    function TypeInferedList(value) {
      _classCallCheck(this, TypeInferedList);

      _get(Object.getPrototypeOf(TypeInferedList.prototype), 'constructor', this).call(this);
      return TypeInferedList.prototype[$read](value);
    }

    _createClass(TypeInferedList, [{
      key: _typed.Typed.init,
      value: function value() {
        var result = (0, _typed.construct)(this).asMutable();
        result[$type] = new TypeInferer();
        return result;
      }
    }, {
      key: _typed.Typed.result,
      value: function value(result) {
        var list = result.asImmutable();
        list[$type] = result[$type].type;

        return list;
      }
    }, {
      key: _typed.Typed.read,
      value: function value(input) {
        var Type = this.constructor;

        if (input === null || input === void 0) {
          if (!this[$empty]) {
            var result = (0, _typed.construct)(this);
            result[$store] = ImmutableList();
            result.size = 0;
            this[$empty] = result;
          }

          return this[$empty];
        }

        if (input instanceof Type && input && input.constructor === Type) {
          return input;
        }

        var source = Indexed(input);
        var isEmpty = source.size === 0;

        if (isEmpty && this[$empty]) {
          return this[$empty];
        }

        var list = this[$init]();
        list.size = source.size;
        source.forEach(function (value, index) {
          list.set(index, value);
        });

        list = this[$result](list);

        if (isEmpty) {
          this[$empty] = list;
        }

        return list;
      }
    }, {
      key: _typed.Typed.step,
      value: function value(result, _ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var key = _ref2[0];
        var _value2 = _ref2[1];

        return change(result, function () {
          var store = arguments.length <= 0 || arguments[0] === undefined ? ImmutableList() : arguments[0];
          return store.set(key, _value2);
        });
      }
    }, {
      key: _typed.Typed.typeName,
      value: function value() {
        return this[$label] || 'Typed.List(' + this[$type][$typeName]() + ')';
      }
    }, {
      key: 'toString',
      value: function toString() {
        return this.__toString(this[$typeName]() + '([', '])');
      }
    }, {
      key: 'has',
      value: function has(key) {
        return this[$store].has(key);
      }
    }, {
      key: 'get',
      value: function get(index, notSetValue) {
        return this[$store] ? this[$store].get(index, notSetValue) : notSetValue;
      }
    }, {
      key: 'clear',
      value: function clear() {
        if (this.__ownerID) {
          return change(this, _clear);
        }

        return this[$empty] || this[$read]();
      }
    }, {
      key: 'remove',
      value: function remove(index) {
        return change(this, function (store) {
          return store && store.remove(index);
        });
      }
    }, {
      key: 'set',
      value: function set(index, value) {
        if (index > this.size) {
          throw TypeError('Index "' + index + '" is out of bound');
        }

        var result = this[$type][$read](value);

        if (result instanceof TypeError) {
          throw TypeError('Invalid value: ' + result.message);
        }

        return this[$step](this, [index, result]);
      }
    }, {
      key: 'push',
      value: function push() {
        var type = this[$type];
        var items = [];

        for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
          values[_key] = arguments[_key];
        }

        var count = values.length;
        var index = 0;
        while (index < count) {
          var value = values[index];
          var result = type[$read](value);

          if (result instanceof TypeError) {
            throw TypeError('Invalid value: ' + result.message);
          }

          items.push(result);
          index = index + 1;
        }

        return change(this, function (store) {
          return store ? store.push.apply(store, items) : ImmutableList.apply(undefined, items);
        });
      }
    }, {
      key: 'pop',
      value: function pop() {
        return change(this, _pop);
      }
    }, {
      key: 'unshift',
      value: function unshift() {
        var type = this[$type];
        var items = [];

        for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          values[_key2] = arguments[_key2];
        }

        var count = values.length;
        var index = 0;

        while (index < count) {
          var value = values[index];
          var result = type[$read](value);

          if (result instanceof TypeError) {
            throw TypeError('Invalid value: ' + result.message);
          }

          items.push(result);
          index = index + 1;
        }

        return change(this, function (store) {
          return store ? store.unshift.apply(store, items) : ImmutableList.apply(undefined, items);
        });
      }
    }, {
      key: 'shift',
      value: function shift() {
        return change(this, _shift);
      }
    }, {
      key: 'setSize',
      value: function setSize(size) {
        if (size > this.size) {
          throw TypeError('setSize may only downsize');
        }

        return change(this, function (store) {
          return store.setSize(size);
        });
      }
    }, {
      key: 'slice',
      value: function slice(begin, end) {
        return change(this, function (store) {
          return store && store.slice(begin, end);
        });
      }
    }, {
      key: 'wasAltered',
      value: function wasAltered() {
        return this[$store].wasAltered();
      }
    }, {
      key: '__ensureOwner',
      value: function __ensureOwner(ownerID) {
        var result = this.__ownerID === ownerID ? this : !ownerID ? this : (0, _typed.construct)(this);

        result.__ownerID = ownerID;
        result[$store] = this[$store] ? this[$store].__ensureOwner(ownerID) : ImmutableList().__ensureOwner(ownerID);
        result.size = result[$store].size;

        return result;
      }
    }, {
      key: '__iterator',
      value: function __iterator(type, reverse) {
        var _this = this;

        return Indexed(this[$store]).map(function (_, key) {
          return _this.get(key);
        }).__iterator(type, reverse);
      }
    }, {
      key: '__iterate',
      value: function __iterate(f, reverse) {
        var _this2 = this;

        return Indexed(this[$store]).map(function (_, key) {
          return _this2.get(key);
        }).__iterate(f, reverse);
      }
    }]);

    return TypeInferedList;
  })(BaseImmutableList);

  TypeInferedList.prototype[_typed.Typed.DELETE] = TypeInferedList.prototype.remove;

  var BaseTypeInferedList = function BaseTypeInferedList() {};
  BaseTypeInferedList.prototype = TypeInferedList.prototype;

  var TypedList = (function (_BaseTypeInferedList) {
    function TypedList() {
      _classCallCheck(this, TypedList);

      _get(Object.getPrototypeOf(TypedList.prototype), 'constructor', this).call(this);
    }

    _inherits(TypedList, _BaseTypeInferedList);

    _createClass(TypedList, [{
      key: _typed.Typed.init,
      value: function value() {
        return (0, _typed.construct)(this).asMutable();
      }
    }, {
      key: _typed.Typed.result,
      value: function value(result) {
        return result.asImmutable();
      }
    }, {
      key: 'map',
      value: function map(mapper, context) {
        if (this.size === 0) {
          return this;
        } else {
          var result = TypeInferedList.from(this).map(mapper, context);
          if (this[$store] === result[$store]) {
            return this;
          }
          if (result[$type] === this[$type]) {
            var list = (0, _typed.construct)(this);
            list[$store] = result[$store];
            list.size = result.size;
            return list;
          } else {
            return result;
          }
        }
      }
    }]);

    return TypedList;
  })(BaseTypeInferedList);

  var List = function List(descriptor, label) {
    var _Object$create;

    if (descriptor === void 0) {
      throw TypeError('Typed.List must be passed a type descriptor');
    }

    if (descriptor === _typed.Any) {
      return _immutable.List;
    }

    var type = (0, _typed.typeOf)(descriptor);

    if (type === _typed.Any) {
      throw TypeError('Typed.List was passed an invalid type descriptor: ${descriptor}');
    }

    var ListType = function ListType(value) {
      var isListType = this instanceof ListType;
      var Type = isListType ? this.constructor : ListType;

      if (value instanceof Type) {
        return value;
      }

      var result = Type.prototype[$read](value);

      if (result instanceof TypeError) {
        throw result;
      }

      // `list.map(f)` will in fact cause `list.constructor(items)` to be
      // invoked there for we need to check if `this[$store]` was
      // assigned to know if it's that or if it's a `new ListType()` call.
      if (isListType && !this[$store]) {
        this[$store] = result[$store];
        this.size = result.size;
      } else {
        return result;
      }

      return this;
    };
    ListType.of = ImmutableList.of;
    ListType.prototype = Object.create(ListPrototype, (_Object$create = {
      constructor: { value: ListType }
    }, _defineProperty(_Object$create, $type, { value: type }), _defineProperty(_Object$create, $label, { value: label }), _Object$create));

    return ListType;
  };
  exports.List = List;
  List.Type = TypedList;
  List.prototype = TypedList.prototype;
  var ListPrototype = TypedList.prototype;
});
//# sourceMappingURL=data:application/json;base64,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QUFBO0FBQ3BDLE1BQU0sYUFBYSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUEiLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VHlwZWQsIFR5cGUsIFVuaW9uLCBBbnksIHR5cGVPZiwgY29uc3RydWN0fSBmcm9tIFwiLi90eXBlZFwiXG5pbXBvcnQgKiBhcyBJbW11dGFibGUgZnJvbSAnaW1tdXRhYmxlJ1xuXG5cbmNvbnN0IEltbXV0YWJsZUxpc3QgPSBJbW11dGFibGUuTGlzdFxuY29uc3Qge0luZGV4ZWR9ID0gSW1tdXRhYmxlLkl0ZXJhYmxlXG5cbmNvbnN0ICRzdG9yZSA9IFR5cGVkLnN0b3JlXG5jb25zdCAkdHlwZSA9IFR5cGVkLnR5cGVcbmNvbnN0ICRyZWFkID0gVHlwZWQucmVhZFxuY29uc3QgJHN0ZXAgPSBUeXBlZC5zdGVwXG5jb25zdCAkaW5pdCA9IFR5cGVkLmluaXRcbmNvbnN0ICRyZXN1bHQgPSBUeXBlZC5yZXN1bHRcbmNvbnN0ICRsYWJlbCA9IFR5cGVkLmxhYmVsXG5jb25zdCAkdHlwZU5hbWUgPSBUeXBlZC50eXBlTmFtZVxuY29uc3QgJGVtcHR5ID0gVHlwZWQuZW1wdHlcblxuXG5jb25zdCBjaGFuZ2UgPSAobGlzdCwgZikgPT4ge1xuICBjb25zdCBzdG9yZSA9IGYobGlzdFskc3RvcmVdKVxuICBpZiAoc3RvcmUgPT09IGxpc3RbJHN0b3JlXSkge1xuICAgIHJldHVybiBsaXN0XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcmVzdWx0ID0gbGlzdC5fX293bmVySUQgPyBsaXN0IDogY29uc3RydWN0KGxpc3QpXG4gICAgcmVzdWx0WyRzdG9yZV0gPSBzdG9yZVxuICAgIHJlc3VsdC5zaXplID0gc3RvcmUuc2l6ZVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5jb25zdCBjbGVhciA9IHRhcmdldCA9PiB0YXJnZXQuY2xlYXIoKVxuY29uc3QgcG9wID0gdGFyZ2V0ID0+IHRhcmdldC5wb3AoKVxuY29uc3Qgc2hpZnQgPSB0YXJnZXQgPT4gdGFyZ2V0LnNoaWZ0KClcblxuY2xhc3MgVHlwZUluZmVyZXIgZXh0ZW5kcyBUeXBlIHtcbiAgW1R5cGVkLnR5cGVOYW1lXSgpIHtcbiAgICByZXR1cm4gJ1R5cGVJbmZlcmVyJ1xuICB9XG4gIFtUeXBlZC5yZWFkXSh2YWx1ZSkge1xuICAgIC8vIHR5cGVPZiB1c3VhbGx5IGNyZWF0ZXMgdHlwZSBmb3IgdGhlIHZhbHVlIHdpdGggdGhhdFxuICAgIC8vIHZhbHVlIGJlaW5nIGEgZGVmYXVsdC4gRm9yIHR5cGUgaW5mZXJlbmNlIHdlIHNob3VsZFxuICAgIC8vIGFjdHVhbGx5IHVzZSBhIGJhc2UgdHlwZSBpbnN0ZWFkIG9mIHR5cGUgd2l0aCBkZWZhdWx0XG4gICAgLy8gdGhlcmUgZm9yIHdlIHVzZSBwcm90b3R5cGUgb2YgdGhlIGNvbnN0cnVjdG9yLlxuICAgIGNvbnN0IHR5cGUgPSB0eXBlT2YodmFsdWUpLmNvbnN0cnVjdG9yLnByb3RvdHlwZVxuICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZSA/IFVuaW9uKHRoaXMudHlwZSwgdHlwZSkgOiB0eXBlXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cbn1cblxuZnVuY3Rpb24gQmFzZUltbXV0YWJsZUxpc3QoKSB7fVxuQmFzZUltbXV0YWJsZUxpc3QucHJvdG90eXBlID0gSW1tdXRhYmxlTGlzdC5wcm90b3R5cGVcblxuY2xhc3MgVHlwZUluZmVyZWRMaXN0IGV4dGVuZHMgQmFzZUltbXV0YWJsZUxpc3Qge1xuICBzdGF0aWMgZnJvbShsaXN0KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gY29uc3RydWN0KHRoaXMucHJvdG90eXBlKVxuICAgIHJlc3VsdFskc3RvcmVdID0gbGlzdFskc3RvcmVdXG4gICAgcmVzdWx0LnNpemUgPSBsaXN0LnNpemVcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbiAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICBzdXBlcigpO1xuICAgIHJldHVybiBUeXBlSW5mZXJlZExpc3QucHJvdG90eXBlWyRyZWFkXSh2YWx1ZSlcbiAgfVxuICBbVHlwZWQuaW5pdF0oKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gY29uc3RydWN0KHRoaXMpLmFzTXV0YWJsZSgpXG4gICAgcmVzdWx0WyR0eXBlXSA9IG5ldyBUeXBlSW5mZXJlcigpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG4gIFtUeXBlZC5yZXN1bHRdKHJlc3VsdCkge1xuICAgIGNvbnN0IGxpc3QgPSByZXN1bHQuYXNJbW11dGFibGUoKVxuICAgIGxpc3RbJHR5cGVdID0gcmVzdWx0WyR0eXBlXS50eXBlXG5cbiAgICByZXR1cm4gbGlzdFxuICB9XG5cbiAgW1R5cGVkLnJlYWRdKGlucHV0KSB7XG4gICAgY29uc3QgVHlwZSA9IHRoaXMuY29uc3RydWN0b3JcblxuICAgIGlmIChpbnB1dCA9PT0gbnVsbCB8fCBpbnB1dCA9PT0gdm9pZCgwKSkge1xuICAgICAgaWYgKCF0aGlzWyRlbXB0eV0pIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY29uc3RydWN0KHRoaXMpXG4gICAgICAgIHJlc3VsdFskc3RvcmVdID0gSW1tdXRhYmxlTGlzdCgpXG4gICAgICAgIHJlc3VsdC5zaXplID0gMFxuICAgICAgICB0aGlzWyRlbXB0eV0gPSByZXN1bHRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXNbJGVtcHR5XVxuICAgIH1cblxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIFR5cGUgJiYgaW5wdXQgJiYgaW5wdXQuY29uc3RydWN0b3IgPT09IFR5cGUpIHtcbiAgICAgIHJldHVybiBpbnB1dFxuICAgIH1cblxuICAgIGNvbnN0IHNvdXJjZSA9IEluZGV4ZWQoaW5wdXQpXG4gICAgY29uc3QgaXNFbXB0eSA9IHNvdXJjZS5zaXplID09PSAwXG5cbiAgICBpZiAoaXNFbXB0eSAmJiB0aGlzWyRlbXB0eV0pIHtcbiAgICAgIHJldHVybiB0aGlzWyRlbXB0eV1cbiAgICB9XG5cblxuICAgIGxldCBsaXN0ID0gdGhpc1skaW5pdF0oKVxuICAgIGxpc3Quc2l6ZSA9IHNvdXJjZS5zaXplXG4gICAgc291cmNlLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgbGlzdC5zZXQoaW5kZXgsIHZhbHVlKVxuICAgIH0pXG5cbiAgICBsaXN0ID0gdGhpc1skcmVzdWx0XShsaXN0KVxuXG4gICAgaWYgKGlzRW1wdHkpIHtcbiAgICAgIHRoaXNbJGVtcHR5XSA9IGxpc3RcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdFxuICB9XG4gIFtUeXBlZC5zdGVwXShyZXN1bHQsIFtrZXksIHZhbHVlXSkge1xuICAgIHJldHVybiBjaGFuZ2UocmVzdWx0LCAoc3RvcmU9SW1tdXRhYmxlTGlzdCgpKSA9PiBzdG9yZS5zZXQoa2V5LCB2YWx1ZSkpXG4gIH1cblxuICBbVHlwZWQudHlwZU5hbWVdKCkge1xuICAgIHJldHVybiB0aGlzWyRsYWJlbF0gfHwgYFR5cGVkLkxpc3QoJHt0aGlzWyR0eXBlXVskdHlwZU5hbWVdKCl9KWBcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9fdG9TdHJpbmcodGhpc1skdHlwZU5hbWVdKCkgKyAnKFsnLCAnXSknKVxuICB9XG5cbiAgaGFzKGtleSkge1xuICAgIHJldHVybiB0aGlzWyRzdG9yZV0uaGFzKGtleSlcbiAgfVxuXG4gIGdldChpbmRleCwgbm90U2V0VmFsdWUpIHtcbiAgICByZXR1cm4gdGhpc1skc3RvcmVdID8gdGhpc1skc3RvcmVdLmdldChpbmRleCwgbm90U2V0VmFsdWUpIDpcbiAgICAgICAgICAgbm90U2V0VmFsdWVcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGlmICh0aGlzLl9fb3duZXJJRCkge1xuICAgICAgcmV0dXJuIGNoYW5nZSh0aGlzLCBjbGVhcilcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1skZW1wdHldIHx8IHRoaXNbJHJlYWRdKClcbiAgfVxuXG4gIHJlbW92ZShpbmRleCkge1xuICAgIHJldHVybiBjaGFuZ2UodGhpcywgc3RvcmUgPT4gc3RvcmUgJiYgc3RvcmUucmVtb3ZlKGluZGV4KSlcbiAgfVxuXG4gIHNldChpbmRleCwgdmFsdWUpIHtcbiAgICBpZiAoaW5kZXggPiB0aGlzLnNpemUpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcihgSW5kZXggXCIke2luZGV4fVwiIGlzIG91dCBvZiBib3VuZGApXG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpc1skdHlwZV1bJHJlYWRdKHZhbHVlKVxuXG4gICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFR5cGVFcnJvcikge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKGBJbnZhbGlkIHZhbHVlOiAke3Jlc3VsdC5tZXNzYWdlfWApXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNbJHN0ZXBdKHRoaXMsIFtpbmRleCwgcmVzdWx0XSlcbiAgfVxuXG4gIHB1c2goLi4udmFsdWVzKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXNbJHR5cGVdXG4gICAgY29uc3QgaXRlbXMgPSBbXVxuICAgIGNvbnN0IGNvdW50ID0gdmFsdWVzLmxlbmd0aFxuICAgIGxldCBpbmRleCA9IDBcbiAgICB3aGlsZSAoaW5kZXggPCBjb3VudCkge1xuICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNbaW5kZXhdXG4gICAgICBjb25zdCByZXN1bHQgPSB0eXBlWyRyZWFkXSh2YWx1ZSlcblxuICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFR5cGVFcnJvcikge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoYEludmFsaWQgdmFsdWU6ICR7cmVzdWx0Lm1lc3NhZ2V9YClcbiAgICAgIH1cblxuICAgICAgaXRlbXMucHVzaChyZXN1bHQpXG4gICAgICBpbmRleCA9IGluZGV4ICsgMVxuICAgIH1cblxuICAgIHJldHVybiBjaGFuZ2UodGhpcywgc3RvcmUgPT5cbiAgICAgIHN0b3JlID8gc3RvcmUucHVzaCguLi5pdGVtcykgOiBJbW11dGFibGVMaXN0KC4uLml0ZW1zKSlcbiAgfVxuICBwb3AoKSB7XG4gICAgcmV0dXJuIGNoYW5nZSh0aGlzLCBwb3ApXG4gIH1cbiAgdW5zaGlmdCguLi52YWx1ZXMpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpc1skdHlwZV1cbiAgICBjb25zdCBpdGVtcyA9IFtdXG4gICAgY29uc3QgY291bnQgPSB2YWx1ZXMubGVuZ3RoXG4gICAgbGV0IGluZGV4ID0gMFxuXG4gICAgd2hpbGUgKGluZGV4IDwgY291bnQpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzW2luZGV4XVxuICAgICAgY29uc3QgcmVzdWx0ID0gdHlwZVskcmVhZF0odmFsdWUpXG5cbiAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBUeXBlRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKGBJbnZhbGlkIHZhbHVlOiAke3Jlc3VsdC5tZXNzYWdlfWApXG4gICAgICB9XG5cbiAgICAgIGl0ZW1zLnB1c2gocmVzdWx0KVxuICAgICAgaW5kZXggPSBpbmRleCArIDFcbiAgICB9XG5cbiAgICByZXR1cm4gY2hhbmdlKHRoaXMsIHN0b3JlID0+XG4gICAgICBzdG9yZSA/IHN0b3JlLnVuc2hpZnQoLi4uaXRlbXMpIDogSW1tdXRhYmxlTGlzdCguLi5pdGVtcykpXG4gIH1cbiAgc2hpZnQoKSB7XG4gICAgcmV0dXJuIGNoYW5nZSh0aGlzLCBzaGlmdClcbiAgfVxuICBzZXRTaXplKHNpemUpIHtcbiAgICBpZiAoc2l6ZSA+IHRoaXMuc2l6ZSkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKGBzZXRTaXplIG1heSBvbmx5IGRvd25zaXplYClcbiAgICB9XG5cbiAgICByZXR1cm4gY2hhbmdlKHRoaXMsIHN0b3JlID0+IHN0b3JlLnNldFNpemUoc2l6ZSkpXG4gIH1cbiAgc2xpY2UoYmVnaW4sIGVuZCkge1xuICAgIHJldHVybiBjaGFuZ2UodGhpcywgc3RvcmUgPT4gc3RvcmUgJiYgc3RvcmUuc2xpY2UoYmVnaW4sIGVuZCkpXG4gIH1cblxuICB3YXNBbHRlcmVkKCkge1xuICAgIHJldHVybiB0aGlzWyRzdG9yZV0ud2FzQWx0ZXJlZCgpXG4gIH1cblxuICBfX2Vuc3VyZU93bmVyKG93bmVySUQpIHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9fb3duZXJJRCA9PT0gb3duZXJJRCA/IHRoaXMgOlxuICAgICAgICAgICAgICAgICAgICFvd25lcklEID8gdGhpcyA6XG4gICAgICAgICAgICAgICAgICAgY29uc3RydWN0KHRoaXMpXG5cbiAgICByZXN1bHQuX19vd25lcklEID0gb3duZXJJRFxuICAgIHJlc3VsdFskc3RvcmVdID0gdGhpc1skc3RvcmVdID8gdGhpc1skc3RvcmVdLl9fZW5zdXJlT3duZXIob3duZXJJRCkgOlxuICAgICAgICAgICAgICAgICAgICAgSW1tdXRhYmxlTGlzdCgpLl9fZW5zdXJlT3duZXIob3duZXJJRClcbiAgICByZXN1bHQuc2l6ZSA9IHJlc3VsdFskc3RvcmVdLnNpemVcblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuICBfX2l0ZXJhdG9yKHR5cGUsIHJldmVyc2UpIHtcbiAgICByZXR1cm4gSW5kZXhlZCh0aGlzWyRzdG9yZV0pLm1hcCgoXywga2V5KSA9PiB0aGlzLmdldChrZXkpKS5fX2l0ZXJhdG9yKHR5cGUsIHJldmVyc2UpXG4gIH1cblxuICBfX2l0ZXJhdGUoZiwgcmV2ZXJzZSkge1xuICAgIHJldHVybiBJbmRleGVkKHRoaXNbJHN0b3JlXSkubWFwKChfLCBrZXkpID0+IHRoaXMuZ2V0KGtleSkpLl9faXRlcmF0ZShmLCByZXZlcnNlKVxuICB9XG59XG5UeXBlSW5mZXJlZExpc3QucHJvdG90eXBlW1R5cGVkLkRFTEVURV0gPSBUeXBlSW5mZXJlZExpc3QucHJvdG90eXBlLnJlbW92ZTtcblxuY29uc3QgQmFzZVR5cGVJbmZlcmVkTGlzdCA9IGZ1bmN0aW9uKCkge31cbkJhc2VUeXBlSW5mZXJlZExpc3QucHJvdG90eXBlID0gVHlwZUluZmVyZWRMaXN0LnByb3RvdHlwZVxuXG5jbGFzcyBUeXBlZExpc3QgZXh0ZW5kcyBCYXNlVHlwZUluZmVyZWRMaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuICB9XG4gIFtUeXBlZC5pbml0XSgpIHtcbiAgICByZXR1cm4gY29uc3RydWN0KHRoaXMpLmFzTXV0YWJsZSgpXG4gIH1cbiAgW1R5cGVkLnJlc3VsdF0ocmVzdWx0KSB7XG4gICAgcmV0dXJuIHJlc3VsdC5hc0ltbXV0YWJsZSgpXG4gIH1cbiAgbWFwKG1hcHBlciwgY29udGV4dCkge1xuICAgIGlmICh0aGlzLnNpemUgPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFR5cGVJbmZlcmVkTGlzdC5mcm9tKHRoaXMpLm1hcChtYXBwZXIsIGNvbnRleHQpXG4gICAgICBpZiAodGhpc1skc3RvcmVdID09PSByZXN1bHRbJHN0b3JlXSkge1xuICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdFskdHlwZV0gPT09IHRoaXNbJHR5cGVdKSB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBjb25zdHJ1Y3QodGhpcylcbiAgICAgICAgbGlzdFskc3RvcmVdID0gcmVzdWx0WyRzdG9yZV1cbiAgICAgICAgbGlzdC5zaXplID0gcmVzdWx0LnNpemVcbiAgICAgICAgcmV0dXJuIGxpc3RcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IExpc3QgPSBmdW5jdGlvbihkZXNjcmlwdG9yLCBsYWJlbCkge1xuICBpZiAoZGVzY3JpcHRvciA9PT0gdm9pZCgwKSkge1xuICAgIHRocm93IFR5cGVFcnJvcihcIlR5cGVkLkxpc3QgbXVzdCBiZSBwYXNzZWQgYSB0eXBlIGRlc2NyaXB0b3JcIilcbiAgfVxuXG4gIGlmIChkZXNjcmlwdG9yID09PSBBbnkpIHtcbiAgICByZXR1cm4gSW1tdXRhYmxlLkxpc3RcbiAgfVxuXG4gIGNvbnN0IHR5cGUgPSB0eXBlT2YoZGVzY3JpcHRvcilcblxuICBpZiAodHlwZSA9PT0gQW55KSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFwiVHlwZWQuTGlzdCB3YXMgcGFzc2VkIGFuIGludmFsaWQgdHlwZSBkZXNjcmlwdG9yOiAke2Rlc2NyaXB0b3J9XCIpXG4gIH1cblxuICBjb25zdCBMaXN0VHlwZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgY29uc3QgaXNMaXN0VHlwZSA9IHRoaXMgaW5zdGFuY2VvZiBMaXN0VHlwZVxuICAgIGNvbnN0IFR5cGUgPSBpc0xpc3RUeXBlID8gdGhpcy5jb25zdHJ1Y3RvciA6IExpc3RUeXBlXG5cbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUeXBlKSB7XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBUeXBlLnByb3RvdHlwZVskcmVhZF0odmFsdWUpXG5cbiAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgVHlwZUVycm9yKSB7XG4gICAgICB0aHJvdyByZXN1bHRcbiAgICB9XG5cbiAgICAvLyBgbGlzdC5tYXAoZilgIHdpbGwgaW4gZmFjdCBjYXVzZSBgbGlzdC5jb25zdHJ1Y3RvcihpdGVtcylgIHRvIGJlXG4gICAgLy8gaW52b2tlZCB0aGVyZSBmb3Igd2UgbmVlZCB0byBjaGVjayBpZiBgdGhpc1skc3RvcmVdYCB3YXNcbiAgICAvLyBhc3NpZ25lZCB0byBrbm93IGlmIGl0J3MgdGhhdCBvciBpZiBpdCdzIGEgYG5ldyBMaXN0VHlwZSgpYCBjYWxsLlxuICAgIGlmIChpc0xpc3RUeXBlICYmICF0aGlzWyRzdG9yZV0pIHtcbiAgICAgIHRoaXNbJHN0b3JlXSA9IHJlc3VsdFskc3RvcmVdXG4gICAgICB0aGlzLnNpemUgPSByZXN1bHQuc2l6ZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICBMaXN0VHlwZS5vZiA9IEltbXV0YWJsZUxpc3Qub2ZcbiAgTGlzdFR5cGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMaXN0UHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHt2YWx1ZTogTGlzdFR5cGV9LFxuICAgIFskdHlwZV06IHt2YWx1ZTogdHlwZX0sXG4gICAgWyRsYWJlbF06IHt2YWx1ZTogbGFiZWx9XG4gIH0pXG5cbiAgcmV0dXJuIExpc3RUeXBlXG59XG5MaXN0LlR5cGUgPSBUeXBlZExpc3Rcbkxpc3QucHJvdG90eXBlID0gVHlwZWRMaXN0LnByb3RvdHlwZVxuY29uc3QgTGlzdFByb3RvdHlwZSA9IFR5cGVkTGlzdC5wcm90b3R5cGVcbiJdfQ==;
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('typed-immutable/index',["exports", "./record", "./list", "./typed"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./record"), require("./list"), require("./typed"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.record, global.list, global.typed);
    global.index = mod.exports;
  }
})(this, function (exports, _record, _list, _typed) {
  "use strict";

  Object.defineProperty(exports, "Record", {
    enumerable: true,
    get: function get() {
      return _record.Record;
    }
  });
  Object.defineProperty(exports, "List", {
    enumerable: true,
    get: function get() {
      return _list.List;
    }
  });
  Object.defineProperty(exports, "Typed", {
    enumerable: true,
    get: function get() {
      return _typed.Typed;
    }
  });
  Object.defineProperty(exports, "typeOf", {
    enumerable: true,
    get: function get() {
      return _typed.typeOf;
    }
  });
  Object.defineProperty(exports, "Type", {
    enumerable: true,
    get: function get() {
      return _typed.Type;
    }
  });
  Object.defineProperty(exports, "Any", {
    enumerable: true,
    get: function get() {
      return _typed.Any;
    }
  });
  Object.defineProperty(exports, "Union", {
    enumerable: true,
    get: function get() {
      return _typed.Union;
    }
  });
  Object.defineProperty(exports, "Maybe", {
    enumerable: true,
    get: function get() {
      return _typed.Maybe;
    }
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQVEsTUFBTTs7Ozs7O21CQUNOLElBQUk7Ozs7OztvQkFDSixLQUFLOzs7Ozs7b0JBQUUsTUFBTTs7Ozs7O29CQUFFLElBQUk7Ozs7OztvQkFBRSxHQUFHOzs7Ozs7b0JBQUUsS0FBSzs7Ozs7O29CQUFFLEtBQUsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge1JlY29yZH0gZnJvbSBcIi4vcmVjb3JkXCJcbmV4cG9ydCB7TGlzdH0gZnJvbSBcIi4vbGlzdFwiXG5leHBvcnQge1R5cGVkLCB0eXBlT2YsIFR5cGUsIEFueSwgVW5pb24sIE1heWJlfSBmcm9tIFwiLi90eXBlZFwiXG4iXX0=;
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('common/typed',['require','exports','module','typed-immutable/index'],(require, exports, module) => {

  'use strict';

  const {Record, List, Typed, Type, Any, Union, Maybe} = require('typed-immutable/index');

  const isTypeOf = function(value) {
    for (var Type of this.variants) {
      if (value instanceof Type) {
        return true
      }
      else if (Type.isTypeOf && Type.isTypeOf(value)) {
        return true
      }
    }
    return false
  }

  const TypeUnion = types => {
    const variants = [];
    const Type = function(value) {
      return prototype[Typed.read](value);
    }
    Type.variants = variants;
    Type.isTypeOf = isTypeOf;

    for (var name in types) {
      if (types.hasOwnProperty(name) &&
          name[0].toUpperCase() === name[0])
      {
        const type = types[name]
        variants.push(type);
        Type[name] = type;
      }
    }

    const prototype = Union(...variants);
    Type.toString = prototype[Type.typeName];
    Type.prototype = prototype;

    return Type;
  }

  exports.Record = Record;
  exports.List = List;
  exports.Typed = Typed;
  exports.Type = Type;
  exports.Any = Any;
  exports.Maybe = Maybe;
  exports.Union = TypeUnion;
})
;
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('common/style',['require','exports','module'],(require, exports, module) => {

  const composedStyles = Object.create(null);

  const ID = Symbol('style-sheet/id');
  var id = 0;

  class StyleSheet {
    constructor(sheet) {
      for (var name in sheet) {
        const style = sheet[name]
        if (style && typeof(style) === 'object' && sheet.hasOwnProperty(name)) {
          style[ID] = ++id;
          this[name] = style;
        }
      }
    }
    static create(sheet) {
      return new this(sheet);
    }
  }
  exports.StyleSheet = StyleSheet;

  const Style = (...styles) => {
    var id = '0';

    var length = styles.length;
    var index = 0;
    while (index < length) {
      const style = styles[index];
      if (style) {
        if (style[ID]) {
          id = id ? `${id}+${style[ID]}` : id;
        } else if (typeof(style) === "object") {
          id = null;
        } else {
          throw TypeError(`Style may only be given objects and falsy values`);
        }
        index = index + 1;
      } else {
        styles.splice(index, 1);
        length = length - 1;
      }
    }

    if (id && !composedStyles[id]) {
      composedStyles[id] = Object.assign({[ID]: id}, ...styles);
    }

    return composedStyles[id] || Object.assign({}, ...styles);
  }
  exports.Style = Style;

  exports.StyleSheet = StyleSheet
});

// Subset of `os` module from node.js and io.js:
// https://iojs.org/api/os.html
define('common/os',['require','exports','module'],(require, exports, module) => {
  const platform = navigator.platform.startsWith('Win') ? 'win32' :
                   navigator.platform.startsWith('Mac') ? 'darwin' :
                   navigator.platform.startsWith('Linux') ? 'linux' :
                   navigator.platform.startsWith('FreeBSD') ? 'freebsd' :
                   navigator.platform;

  // https://iojs.org/api/os.html#os_os_platform
  exports.platform = () => platform;
});

/* this source code form is subject to the terms of the mozilla public
 * license, v. 2.0. if a copy of the mpl was not distributed with this
 * file, you can obtain one at http://mozilla.org/mpl/2.0/. */

define('common/keyboard',['require','exports','module','common/os','common/typed'],(require, exports, module) => {

  'use strict';

  const platform = require('common/os').platform();
  const {Record, Any} = require('common/typed');

  const readModifiers = ({type, metaKey, shiftKey, altKey, ctrlKey}) => {
    const modifiers = [];
    // Modifier fields indicate if relevant modifier is pressed, in case
    // of 'keyup' event including those does not make sense.
    if (type != 'keyup') {
      if (metaKey) {
        modifiers.push('Meta');
      }
      if (ctrlKey) {
        modifiers.push('Control');
      }
      if (altKey) {
        modifiers.push('Alt');
      }
      if (shiftKey) {
        modifiers.push('Shift');
      }
    }
    return modifiers;
  };


  const readKey = key => readKey.table[key] || key;
  readKey.table = Object.assign(Object.create(null), {
    'ctrl': 'control',
    'accel': platform == 'darwin' ? 'meta' : 'control',
    'ArrowLeft': 'left',
    'ArrowRight': 'right',
    'ArrowUp': 'up',
    'ArrowDown': 'down',
    'esc': 'escape'
  });

  const readChord = input =>
    input.trim()
    .toLowerCase()
    .split(/\s+/)
    .map(readKey)
    .sort()
    .join(' ');

  const writeChord = event =>
    [...new Set([...readModifiers(event), readKey(event.key)])]
      .join(' ')
      .toLowerCase()
      .split(' ')
      .sort()
      .join(' ');

  class KeyBinding {
    constructor({chord, metaKey, shiftKey, altKey, ctrlKey, key, action}) {
      this.chord = chord
      this.key = key
      this.metaKey = metaKey
      this.shiftKey = shiftKey
      this.altKey = altKey
      this.ctrlKey = ctrlKey
      this.action = action
    }
    toJSON() {
      const {chord, key, metaKey, shiftKey, altKey, ctrlKey} = this;
      return {chord, key, metaKey, shiftKey, altKey, ctrlKey};
    }
    toString() {
      return `KeyBinding(${JSON.stringify(this)})`
    }
  }

  class KeyboardAction {
    constructor(options) {
      this.label = options.label || 'Keyboard.Action'

      this.chord = options.chord
      this.key = options.key

      this.metaKey = options.metaKey
      this.shiftKey = options.shiftKey
      this.altKey = options.altKey
      this.ctrlKey = options.ctrlKey
      this.action = options.action || null
    }
    toJSON() {
      const {action, chord, key, metaKey, shiftKey, altKey, ctrlKey} = this;
      return {action, chord, key, metaKey, shiftKey, altKey, ctrlKey};
    }
    toString() {
      return `${this.label}(${JSON.stringify(this)})`
    }
  };

  const KeyBindings = (bindingTable, label) => {
    const bindings = Object.create(null);
    Object.keys(bindingTable).forEach(key => {
      bindings[readChord(key)] = bindingTable[key];
    });

    const Binding = (...args) => {
      const event = args[args.length - 1];
      const chord = writeChord(event);
      const read = bindings[chord] ||
                   bindings[`@${event.type} ${chord}`];

      if (read) {
        event.preventDefault();
        event.stopPropagation();
        return new KeyboardAction({
          action: read(...args),
          chord, label,

          metaKey: event.metaKey,
          shiftKey: event.shiftKey,
          altKey: event.altKey,
          ctrlKey: event.ctrlKey,
          key: event.key
        });
      }

      return null;
    };
    Binding.Action = KeyboardAction;

    return Binding;
  }
  KeyBindings.Stop = read => {
    event.stopPropagation();
    return read(event);
  }
  KeyBindings.Cancel = read => {
    event.preventDefault();
    return read(event);
  }
  KeyBindings.Abort = read => {
    event.preventDefault();
    event.stopPropagation();
    return read(event);
  }

  const service = address => action => {
    if (action instanceof KeyboardAction) {
      address.receive(action.action);
    }
  }
  exports.service = service;

  // Exports:

  exports.readModifiers = readModifiers;
  exports.readKey = readKey;
  exports.readChord = readChord;
  exports.writeChord = writeChord;
  exports.KeyBindings = KeyBindings;

});

/* this source code form is subject to the terms of the mozilla public
 * license, v. 2.0. if a copy of the mpl was not distributed with this
 * file, you can obtain one at http://mozilla.org/mpl/2.0/. */

define('common/element',['require','exports','module','react','reflex'],(require, exports, module) => {

  'use strict';

  const React = require('react');
  const {node} = require('reflex');

  const isPreMountHook = field => field && field.mount;

  const isPostMountHook = field => field && field.mounted;

  const isUpdateHook = field => field && field.write;

  const isConstractorHook = field => field && field.construct;

  class ElementView extends React.Component {
    constructor() {
      React.Component.apply(this, arguments);

      const {type, fields, mount, mounted, write} = this.props;
      const hooks = Object.create(null);

      for (var key in fields) {
        if (fields.hasOwnProperty(key)) {
          const field = fields[key];
          const hook = field.construct ? field.construct() : field;
          hooks[key] = hook;
        }
      }

      this.displayName = `html:${type}`
      this.state = hooks;
    }
    // Reflect attributes not recognized by react.
    componentDidMount() {
      const node = React.findDOMNode(this);
      const {model, mount, mounted} = this.props;
      const hooks = this.state;

      if (mount.length > 0) {
        for (var key of mount) {
          const hook = hooks[key];
          const value = model[key];
          hook.mount(node, value);
        }

        // Pre mount fields need to be set before node
        // is in the document. Since react does not has
        // an appropriate hook we replace node with itself
        // to trigger desired behavior.
        node.parentNode.replaceChild(node, node);
      }

      for (var key of mounted) {
        const hook = hooks[key];
        hook.mounted(node, model[key]);
      }
    }
    // Reflect attribute changes not recognized by react.
    componentDidUpdate({model: past}) {
      const node = React.findDOMNode(this);
      const {model, write} = this.props;
      const hooks = this.state;

      for (var key of write) {
        const hook = hooks[key];
        hook.write(node, model[key], past[key]);
      }
    }
    // Render renders wrapped HTML node.
    render() {
      const {type, model, children, parent} = this.props;
      return node(type, model, children);
    }
  }

  const Element = (type, fields={}) => {
    // In react you can actually define custom HTML element it's
    // just set of attributes you'll be able to set will be limited
    // to React's white list. To workaround that we define React
    // custom HTML element factory & custom react component that
    // will render that HTML element via custom factory.

    const keys = Object.keys(fields);
    const mount = keys.filter(key => isPreMountHook(fields[key]));
    const mounted = keys.filter(key => isPostMountHook(fields[key]));
    const write = keys.filter(key => isUpdateHook(fields[key]));
    const construct = keys.filter(key => isConstractorHook(fields[key]));

    return (model, children) =>
      React.createElement(ElementView, {
        model, type,
        key: model.key || model.id,
        fields,
        mount, mounted, write
      }, children);
  };

  // BeforeAppendAttribute can be used to define attribute on the
  // element that is set once before element is inserted into a
  // document (mounted). Changes to this property are ignored &
  // in general use of `Attribute` is preferred, this should be
  // reserved only for attributes changes to which aren't picked up
  // after node is in the tree.
  // Example: Element('iframe', { browser: BeforeAppendAttribute('mozbrowser') })
  const BeforeAppendAttribute = function(name) {
    if (!(this instanceof BeforeAppendAttribute)) {
      return new BeforeAppendAttribute(name);
    }

    this.name = name;
  }
  BeforeAppendAttribute.prototype = {
    constructor: BeforeAppendAttribute,
    mount(node, value) {
      if (value != void(0)) {
        node.setAttribute(this.name, value);
      }
    },
    write(node, present, past) {
      Attribute.prototype.write.call(this, node, present, past)
      if (present !== past) {
        node.parentNode.replaceChild(node, node)
      }
    }
  };
  Element.BeforeAppendAttribute = BeforeAppendAttribute;

  // Attribute can be used to define field mapped to a
  // DOM attribute with a given `name`. If the field is
  // set to `undefined` or `null` attribute is removed
  // othrewise it's set to given value.
  // Example: Element('hbox', {flex: Attribute('flex')})
  const Attribute = function(name) {
    if (!(this instanceof Attribute)) {
      return new Attribute(name);
    }

    this.name = name;
  };
  Attribute.prototype = {
    constructor: Attribute,
    mounted(node, value) {
      if (value != void(0)) {
        node.setAttribute(this.name, value);
      }
    },
    write(node, present, past) {
      if (present != past) {
        if (present == void(0)) {
          node.removeAttribute(this.name);
        } else {
          node.setAttribute(this.name, present);
        }
      }
    }
  }
  Element.Attribute = Attribute;

  // VirtualAttribute can be used to define fields that can't be
  // mapped to an attribute in the DOM. VirtualAttribute is defined
  // by providing a function that will be invoked target
  // `node` `current` value & `past` value and it's supposed
  // to reflect changes in the DOM. Note that on initial
  // render `past` will be `void(0)`.
  //
  // Example:
  // Element('iframe', {focused: (node, current, past) => {
  //   if (current) {
  //     node.focus()
  //   }
  // }})
  const VirtualAttribute = function(write) {
    if (!(this instanceof VirtualAttribute)) {
      return new VirtualAttribute(write);
    }
    this.write = write;
  };
  VirtualAttribute.prototype = {
    constructor: Attribute,
    mounted(node, value) {
      this.write(node, value, void(0));
    }
  };
  Element.VirtualAttribute = VirtualAttribute;

  // Event can be used to define event handler fields, for
  // the given event `type`. When event of that type occurs
  // event handler assigned to the associated field will be
  // invoked. Optionally `read` function can be passed as a
  // second argument, in which case event handler will be
  // invoked with `read(event)` instead of `event`.
  // Example:
  // Element('iframe', {onTitleChanged: Event('mozbrowsertitlechange')})
  const Event = function(type, read, capture=false) {
    if (!(this instanceof Event)) {
      return new Event(type, read, capture);
    }
    this.type = type;
    this.read = read;
    this.capture = capture;
  };
  Event.prototype = {
    constructor: Event,
    construct() {
      return new this.constructor(this.type,
                                  this.read,
                                  this.capture);
    },
    capture: false,
    mounted(node, handler) {
      this.handler = handler;
      const target = this.read ? this.read(node) : node;
      target.addEventListener(this.type, this, this.capture);
    },
    write(node, present) {
      this.handler = present;
    },
    handleEvent(event) {
      if (this.handler) {
        this.handler(event);
      }
    }
  };
  Element.Event = Event;

  const ChromeEvent = function(type) {
    if (!(this instanceof ChromeEvent)) {
      return new ChromeEvent(type);
    }
    this.type = type;
  };
  ChromeEvent.prototype = {
    constructor: ChromeEvent,
    construct() {
      return new this.constructor(this.type);
    },
    mounted(node, handler) {
      this.handler = handler;
      window.addEventListener('mozChromeEvent', this);
    },
    write(node, present) {
      this.handler = present;
    },
    handleEvent(event) {
      if (this.handler && this.type == event.detail.type) {
        this.handler(event);
      }
    }
  };
  Element.ChromeEvent = ChromeEvent;

  // CapturedEvent can be used same as `Event` with a difference
  // that events listeners will be added with a capture `true`.
  const CapturedEvent = function(type, read) {
    if (!(this instanceof CapturedEvent)) {
      return new CapturedEvent(type, read);
    }

    this.type = type;
    this.read = read;
    this.capture = true;
  }
  CapturedEvent.prototype = Event.prototype;
  Element.CapturedEvent = CapturedEvent;

  const VirtualEvent = function(setup) {
    if (!(this instanceof VirtualEvent)) {
      return new VirtualEvent(setup);
    }

    this.setup = setup;
  }
  VirtualEvent.prototype = {
    constructor: VirtualEvent,
    construct() {
      return new this.constructor(this.setup);
    },
    mounted(node, handler) {
      this.write(node, handler);
      this.setup(node, this.handleEvent.bind(this));
    },
    write(node, present) {
      this.handler = present;
    },
    handleEvent(event) {
      if (this.handler) {
        this.handler(event);
      }
    }
  };
  Element.VirtualEvent = VirtualEvent;

  // Exports:

  exports.isPreMountHook = isPreMountHook;
  exports.isPostMountHook = isPostMountHook;
  exports.isUpdateHook = isUpdateHook;
  exports.isConstractorHook = isConstractorHook;
  exports.Element = Element;
  exports.BeforeAppendAttribute = BeforeAppendAttribute;
  exports.Attribute = Attribute;
  exports.VirtualAttribute = VirtualAttribute;
  exports.Event = Event;
  exports.CapturedEvent = CapturedEvent;
  exports.VirtualEvent = VirtualEvent;
  exports.ChromeEvent = ChromeEvent;
});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('common/focusable',['require','exports','module','common/typed','./element'],(require, exports, module) => {

  'use strict';

  const {Record, Union} = require('common/typed');
  const {VirtualAttribute} = require('./element');

  // Model

  const Model = Record({
    isFocused: Boolean
  });
  exports.Model = Model;

  // Action

  const Focus = Record({
    description: 'Request a focus'
  }, 'Focusable.Focus');
  exports.Focus = Focus;

  const Blur = Record({
    description: 'Request a blur'
  }, 'Focusable.Blur');
  exports.Blur = Blur;

  const Focused = Record({
    description: 'Element gained focus'
  }, 'Focusable.Focused');
  exports.Focused = Focused;

  const Blured = Record({
    description: 'Element lost focus'
  }, 'Focusable.Blured');
  exports.Blured = Blured;

  // Update

  const focus = state => state.set('isFocused', true);
  exports.focus = focus;

  const blur = state => state.set('isFocused', false);
  exports.blur = blur;

  const update = (state, action) =>
    action instanceof Focus ? focus(state) :
    action instanceof Focused ? focus(state) :
    action instanceof Blur ? blur(state) :
    action instanceof Blured ? blur(state) :
    state;
  exports.update = update;


  // Fields

  const Field = {
    isFocused: new VirtualAttribute((node, current, past) => {
      if (current != past) {
        if (current) {
          node.focus();
        } else {
          node.blur();
        }
      }
    })
  };
  exports.Field = Field;
});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('service/navigation',['require','exports','module','common/typed'],(require, exports, module) => {

  'use strict';

  const {Record} = require('common/typed');

  const GoBack = Record({
    id: '@selected'
  },'WebView.Navigation.GoBack');
  exports.GoBack = GoBack;

  const GoForward = Record({
    id: '@selected'
  }, 'WebView.Navigation.GoForward');
  exports.GoForward = GoForward;

  const Stop = Record({
    id: '@selected'
  }, 'WebView.Navigation.Stop');
  exports.Stop = Stop;

  const Reload = Record({
    id: '@selected'
  }, 'WebView.Navigation.Reload');
  exports.Reload = Reload;


  const webViewByID = id =>
    id === '@selected' ? document.querySelector('.web-view.selected') :
    document.querySelector(`#view-view-${id}]`);


  const service = address => action => {
    if (action instanceof GoBack) {
      const webView = webViewByID(action.id);
      webView && webView.goBack && webView.goBack();
    }

    if (action instanceof GoForward) {
      const webView = webViewByID(action.id);
      webView && webView.goForward && webView.goForward();
    }

    if (action instanceof Stop) {
      const webView = webViewByID(action.id);
      webView && webView.stop && webView.stop();
    }

    if (action instanceof Reload) {
      const webView = webViewByID(action.id);
      webView && webView.reload && webView.reload();
    }
  }
  exports.service = service;
});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('service/settings',['require','exports','module','common/typed','immutable'],(require, exports, module) => {

  'use strict';

  const {Record, Union, Any} = require('common/typed');
  const {Map} = require('immutable');

  // Actions

  const Update = Record({
    name: String,
    value: Any
  }, 'Settings.Update');
  exports.Update = Update;

  const Fetch = Record({
    id: String,
    query: String,
  }, 'Settings.Fetch');
  exports.Fetch = Fetch;

  const Changed = Record({
    name: String,
    value: Any
  }, 'Settings.Changed');
  Changed.read = ({settingName, settingValue}) =>
    Changed({name: settingName, value: settingValue});
  exports.Changed = Changed;

  const Fetched = Record({
    id: String,
    settings: Any
  }, 'Settings.Response');
  Fetched.read = ({id}, settings) =>
    Fetched({id, settings: Map(settings)});
  exports.Fetched = Fetched;

  const service = address => {
    if (navigator.mozSettings) {
      navigator.mozSettings.onsettingchange = address.pass(Changed.read);

      return action => {
        if (action instanceof Update) {
          navigator.mozSettings
                   .createLock()
                   .set({[action.name]: action.value});
        }

        if (action instanceof Fetch) {
          navigator.mozSettings
                   .createLock()
                   .get(action.query)
                   .then(address.pass(Fetched.read, action));
        }
      }
    } else {
      return action => action
    }
  };
  exports.service = service;
});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('browser/devtools-hud',['require','exports','module','reflex','common/style','common/typed','service/settings'],(require, exports, module) => {

  'use strict';

  const {html} = require('reflex');
  const {Style, StyleSheet} = require('common/style');
  const {Record} = require('common/typed');
  const Settings = require('service/settings');

  // Model

  const Model = Record({
    enableHUD: false,
    enableRemoteDevtools: false,
    settings: Record({
      'apz.overscroll.enabled': false,
      'debug.fps.enabled': false,
      'debug.paint-flashing.enabled': false,
      'layers.low-precision': false,
      'layers.low-opacity': false,
      'layers.draw-borders': false,
      'layers.draw-tile-borders': false,
      'layers.dump': false,
      'layers.enable-tiles': false,
      'layers.async-pan-zoom.enabled': false
    })
  });
  exports.Model = Model;

  const SettingDescriptions = {
    'apz.overscroll.enabled': 'Enable overscroll effect',
    'debug.fps.enabled': 'FPS',
    'debug.paint-flashing.enabled': 'Paint flashing',
    'layers.low-precision': 'Low precision buffer & paint',
    'layers.low-opacity': 'Low precision opacity',
    'layers.draw-borders': 'Draw layer borders',
    'layers.draw-tile-borders': 'Draw tile borders',
    'layers.dump': 'Layers dump',
    'layers.enable-tiles': 'Enable tiles',
    'layers.async-pan-zoom.enabled': 'Enable APZC (restart required)'
  };


  // Action

  const ToggleDevtoolsHUD = Record({
    description: 'Toggle DevTools HUD'
  }, 'DevtoolsHUD.ToggleHUD')

  exports.ToggleDevtoolsHUD = ToggleDevtoolsHUD;

  // update

  const update = (state, action) => {

    const updateSettingIfNeeded = (name, value) => {
      if (name in state.get('settings')) {
        state = state.setIn(['settings', name], value);
      }
      if (name == 'debugger.remote-mode') {
        state = state.set('enableRemoteDevtools', value == 'adb-devtools');
      }
    }

    if (action instanceof Settings.Changed) {
      updateSettingIfNeeded(action.name, action.value);
    }

    if (action instanceof Settings.Fetched) {
      for (var setting of action.settings) {
        var [name, value] = setting;
        updateSettingIfNeeded(name, value);
      }
    }

    if (action instanceof ToggleDevtoolsHUD) {
      state = state.set('enableHUD', !state.get('enableHUD'));
    }
    return state;
  }
  exports.update = update;


  // FIXME: how can I avoid this ugly hack?
  // I want to call Settings.Fetch only once
  // to initialize the Model values.
  var fetched = false;
  const fetchInitialValuesIfNeeded = (state, address) => {
    if (fetched) {
      return;
    }
    fetched = true;
    for (var name of [...state.get('settings').keys()]) {
      address.receive(Settings.Fetch({
        id: 'devtools:fetch' + name,
        query: name}));
    }
    var name = 'debugger.remote-mode';
    address.receive(Settings.Fetch({
      id: 'devtools:fetch:debugger.remote-mode',
      query: name}));
  }

  const style = StyleSheet.create({
    checkbox: {
      marginRight: 6,
      MozAppearance: 'checkbox',
    },
    label: {
      padding: 6,
      MozUserSelect: 'none',
      display: 'block',
    },
    container: {
      padding: 10,
      position: 'absolute',
      bottom: 10,
      left: 10,
      width: '300px',
      height: '350px',
      color: 'black',
      backgroundColor: 'white',
      border: '2px solid #F06',
      overflow: 'scroll',
    },
    containerHidden: {
      display: 'none',
    },
    containerVisible: {
      display: 'block',
    },
  });

  const view = (state, address) => {

    fetchInitialValuesIfNeeded(state, address);

    const settingsCheckboxes =
      [...state.get('settings').keys()].map(settingName => html.label({
        key: settingName,
        style: style.label,
      }, [
        html.input({
          type: 'checkbox',
          checked: state.getIn(['settings', settingName]),
          style: style.checkbox,
          onChange: e => {
            var setting = {};
            setting[settingName] = e.target.checked;
            navigator.mozSettings.createLock().set(setting);
          }
        }), SettingDescriptions[settingName]
      ]));

    return html.div({
      key: 'devtools-toolbox',
      style: Style(style.container,
          state.enableHUD ? style.containerVisible : style.containerHidden),
    }, [
      html.label({
        key: 'enableRemoteDevtools',
        style: style.label,
      }, [
        html.input({
          type: 'checkbox',
          checked: state.get('enableRemoteDevtools'),
          style: style.checkbox,
          onChange: e => {
            navigator.mozSettings.createLock().set({
              'debugger.remote-mode': e.target.checked ? 'adb-devtools' : 'disabled'
            });
          }
        }), 'Enable Remote DevTools'
      ]), settingsCheckboxes]);
  };

  exports.view = view;
});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('common/editable',['require','exports','module','common/typed','./element','./focusable'],(require, exports, module) => {

  'use strict';

  const {Record, Union, Maybe} = require('common/typed');
  const {Element, VirtualAttribute} = require('./element');
  const Focusable = require('./focusable');

  // Model

  const Selection = Record({
    start: 0,
    end: 0,
    direction: 'forward'
  }, 'Editable.Selection');
  exports.Selection = Selection;

  const Model = Record({
    isFocused: false,
    value: Maybe(String),
    selection: Selection
  }, 'Editable.Model');
  exports.Model = Model;

  // Actions

  const Select = Record({
    range: Selection
  }, 'Editable.Select');
  Select.All = () => Select({end: Infinity});
  exports.Select = Select;


  const Change = Record({
    description: 'Input value / selection has changed',
    value: String,
    selection: Selection
  }, 'Editable.Change');
  exports.Change = Change;

  // Update

  const select = (state, range) =>
    state.set('selection', Selection(range));
  exports.select = select;

  const selectAll = state =>
    state.set('selection', Selection({end: Infinity, direction: 'backward'}));
  exports.selectAll = selectAll;

  const change = (state, action) =>
    state.merge({value: action.value,
                 selection: action.selection});
  exports.change = change;

  const clear = state =>
    state.remove('value');
  exports.clear = clear;

  const update = (state, action) =>
    action instanceof Change ? change(state, action) :
    action instanceof Select ? select(state, action.range) :
    action;

  exports.update = update;

  // Field

  const Field = {
    selection: VirtualAttribute((node, current, past) => {
      if (current !== past) {
        const {start, end, direction} = current;
        node.setSelectionRange(start === Infinity ? node.value.length : start,
                               end === Infinity ? node.value.length : end,
                               direction);
      }
    })
  };
  exports.Field = Field;

  // View

  const view = Element('input', {
    isFocused: Focusable.Field.isFocused,
    selection: Field.selection
  });
  exports.view = view;
});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('browser/web-input',['require','exports','module','common/typed','common/editable','common/focusable'],(require, exports, module) => {

  'use strict';

  const {Record, Union, List, Maybe, Any} = require('common/typed');
  const Editable = require('common/editable');
  const Focusable = require('common/focusable');

  // Model
  exports.Model = Editable.Model;


  // Action

  const {Focus, Blur, Focused, Blured} = Focusable;
  const {Change, Select} = Editable;

  const Submit = Record({
    value: String,
    description: 'Submit input field'
  }, 'WebInput.Submit');
  exports.Submit = Submit;

  const InputAction = Union({
    Focus, Focused, Blur, Blured, Change, Select, Submit
  }, 'InputAction');

  const Action = Record({
    description: 'Action targeted web-input',
    action: InputAction
  }, 'WebInput.Action');
  exports.Action = Action;

  // Update

  const updateByAction = (state, action) =>
    action instanceof Focus ? Focusable.focus(state) :
    action instanceof Blur ? Focusable.blur(state) :
    action instanceof Focused ? Focusable.focus(state) :
    action instanceof Blured ? Focusable.blur(state) :
    action instanceof Change ? Editable.change(state, action) :
    action instanceof Select ? Editable.select(state, action.range) :
    action instanceof Submit ? Editable.clear(state) :
    state;

  const update = (state, action) =>
    action instanceof Action ? updateByAction(state, action.action) :
    state;

  exports.update = update;

});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('browser/main',['require','exports','module','common/element'],(require, exports, module) => {

  'use strict';
  const {Element, Event, ChromeEvent, VirtualAttribute} = require('common/element');

  const getOwnerWindow = node => node.ownerDocument.defaultView;

  // TODO: All of these events can be expressed using external services which is
  // probably what we should do.

  // Define custom `main` element with a custom `scrollGrab` attribute
  // that maps to same named proprety.
  const Main = Element('div', {
    windowTitle: VirtualAttribute((node, current, past) => {
      node.ownerDocument.title = current;
    }),
    scrollGrab: VirtualAttribute((node, current, past) => {
      node.scrollgrab = current;
    }),
    onWindowFocus: Event('focus', getOwnerWindow),
    onWindowBlur: Event('blur', getOwnerWindow),
    onKeyDown: Event('keydown', getOwnerWindow),
    onKeyUp: Event('keyup', getOwnerWindow),
    onUnload: Event('unload', getOwnerWindow),
    onOpenWindow: ChromeEvent('mozbrowseropenwindow')
  });

  exports.Main = Main;
})
;
/* this source code form is subject to the terms of the mozilla public
 * license, v. 2.0. if a copy of the mpl was not distributed with this
 * file, you can obtain one at http://mozilla.org/mpl/2.0/. */

define('common/url-helper',['require','exports','module'],(require, exports, module) => {

  'use strict';

  const hasScheme = input => !!(rscheme.exec(input) || [])[0];
  const getOrigin = url => new URL(url).origin;
  const getBaseURI = () => new URL('./', location);
  const getHostname = url => new URL(url).hostname;
  const getDomainName = url => getHostname(url).replace(/^www\./, '');
  const getProtocol = url => new URL(url).protocol;
  const getManifestURL = () => new URL('./manifest.webapp', getBaseURI());

  const isAboutURL = url => {
    try {
      return new URL(url).protocol == 'about:';
    } catch (e) {
      return false;
    }
  };

  const isPrivileged = uri => {
    // FIXME: not safe. White list?
    return uri && uri.startsWith(new URL('./src/about/', getBaseURI()));
  };

  const rscheme = /^(?:[a-z\u00a1-\uffff0-9-+]+)(?::|:\/\/)/i;
  const isNotURL = input => {
    var str = input.trim();

    // for cases, ?abc and 'a? b' which should searching query
    const case1Reg = /^(\?)|(\?.+\s)/;
    // for cases, pure string
    const case2Reg = /[\?\.\s\:]/;
    // for cases, data:uri
    const case3Reg = /^\w+\:\/*$/;
    if (str == 'localhost') {
      return false;
    }
    if (case1Reg.test(str) || !case2Reg.test(str) || case3Reg.test(str)) {
      return true;
    }
    if (!hasScheme(input)) {
      str = 'http://' + str;
    }
    try {
      new URL(str);
      return false;
    } catch (e) {
      return true;
    }
  }

  const readSearchURL = input =>
    `https://duckduckgo.com/?q=${encodeURIComponent(input)}`;

  const readAboutURL = input =>
    `${getBaseURI()}src/about/${input.replace('about:', '')}/index.html`;

  const read = input =>
    isNotURL(input) ? readSearchURL(input) :
    !hasScheme(input) ? `http://${input}` :
    input;

  const resolve = uri =>
    isAboutURL(uri) ? readAboutURL(uri) :
    uri;

  exports.resolve = resolve;
  exports.read = read;
  exports.hasScheme = hasScheme;
  exports.getOrigin = getOrigin;
  exports.getBaseURI = getBaseURI;
  exports.getHostname = getHostname;
  exports.getDomainName = getDomainName;
  exports.getProtocol = getProtocol;
  exports.getManifestURL = getManifestURL;
  exports.isAboutURL = isAboutURL;
  exports.isPrivileged = isPrivileged;
  exports.isNotURL = isNotURL;
});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('browser/iframe',['require','exports','module','common/focusable','common/element'],(require, exports, module) => {

  'use strict';

  const Focusable = require('common/focusable');
  const {Element, BeforeAppendAttribute, VirtualAttribute, Event, VirtualEvent} = require('common/element');

  const view = Element('iframe', {
    isFocused: Focusable.Field.isFocused,
    remote: new BeforeAppendAttribute('remote'),
    mozbrowser: new BeforeAppendAttribute('mozbrowser'),
    mozapp: new BeforeAppendAttribute('mozapp'),
    mozallowfullscreen: new BeforeAppendAttribute('mozallowfullscreen'),
    uri: VirtualAttribute((node, current, past) => {
      if (current != past) {
        const uri = node.setVisible ? current : `data:text/html,${current}`
        if (node.location !== uri) {
          node.location = uri;
          node.src = uri;
        }
      }
    }),
    isVisible: VirtualAttribute((node, current, past) => {
      if (current != past) {
        if (node.setVisible) {
          node.setVisible(current);
        }
      }
    }),
    zoom: VirtualAttribute((node, current, past) => {
      if (current != past) {
        if (node.zoom) {
          node.zoom(current);
        }
      }
    }),
    onAsyncScroll: Event('mozbrowserasyncscroll'),
    onClose: Event('mozbrowserclose'),
    onOpenWindow: Event('mozbrowseropenwindow'),
    onOpenTab: Event('mozbrowseropentab'),
    onMenu: Event('mozbrowsercontextmenu'),
    onError: Event('mozbrowsererror'),
    onLoadStarted: Event('mozbrowserloadstart'),
    onLoadEnded: Event('mozbrowserloadend'),
    onIconChanged: Event('mozbrowsericonchange'),
    onUserActivityDone: Event('mozbrowseractivitydone'),
    onVisibilityChanged: Event('mozbrowservisibilitychange'),
    onMetaChanged: Event('mozbrowsermetachange'),
    // Use `VirtualEvent` to proxy events in order to mutate `target.location`
    // so that user can check `target.location` before deciding if change to
    // `target.src` is required.
    onLocationChanged: VirtualEvent((target, dispatch) => {
      target.addEventListener('mozbrowserlocationchange', event => {
        target.location = event.detail;
        // Set an attribute as well so that in the inspector we can tell what
        // is the location of a page even if user navigated away.
        target.setAttribute('location', event.detail);
        dispatch(event);
      });
    }),
    onSecurityChanged: Event('mozbrowsersecuritychange'),
    onTitleChanged: Event('mozbrowsertitlechange'),
    onPrompt: Event('mozbrowsershowmodalprompt'),
    onAuthentificate: Event('mozbrowserusernameandpasswordrequired'),
    onScrollAreaChange: Event('mozbrowserscrollareachanged'),
    onLoadProgressChange: Event('mozbrowserloadprogresschanged'),

    // It is unfortunate that state of `canGoBack` and `canGoForward` is
    // not observadle, with virtual events we polifill more desired API
    // and pretend there are events dispatched when state changes.
    onCanGoBackChanged: VirtualEvent((target, dispatch) => {
      const onsuccess = request =>
        dispatch({target,
                  type: 'mozbrowsergobackchanged',
                  detail: request.target.result});

      target.addEventListener('mozbrowserlocationchange', event => {
        target.getCanGoBack().onsuccess = onsuccess;
      });
    }),
    onCanGoForwardChanged: VirtualEvent((target, dispatch) => {
      const onsuccess = request =>
        dispatch({target,
                  type: 'mozbrowsergoforwardchanged',
                  detail: request.target.result});

      target.addEventListener('mozbrowserlocationchange', event => {
        target.getCanGoForward().onsuccess = onsuccess;
      });
    })
  });

  // Exports:

  exports.view = view;
});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('browser/web-loader',['require','exports','module','common/typed'],(require, exports, module) => {

  'use strict';

  const {Record, Union, List, Maybe, Any} = require('common/typed');

  // Model
  const Model = Record({
    id: String,
    uri: Maybe(String)
  }, 'WebLoader');
  exports.Model = Model;

  // Actions

  const Load = Record({
    description: 'Request loading of the passed `uri`',
    uri: String
  }, 'WebView.Load');
  exports.Load = Load;

  const LocationChanged = Record({
    description: 'Location of the web view changed to enclosed uri',
    uri: String
  }, 'WebView.LocationChanged');
  exports.LocationChanged = LocationChanged;

  // Update

  const update = (state, action) =>
    action instanceof Load ? state.set('uri', action.uri) :
    action instanceof LocationChanged ? state.set('uri', action.uri) :
    state;
  exports.update = update;
});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('browser/web-progress',['require','exports','module','common/typed','common/style','reflex','./web-loader'],(require, exports, module) => {

  'use strict';

  const {Record, Union} = require('common/typed');
  const {StyleSheet, Style} = require('common/style');
  const {html, render} = require('reflex');
  const Loader = require('./web-loader');

  // Model
  const Model = Record({
    loading: false
  });
  exports.Model = Model;

  // Action

  const LoadStarted = Record({
    uri: String,
  }, 'Progress.LoadStarted');
  exports.LoadStarted = LoadStarted;

  const LoadEnded = Record({
    uri: String,
  }, 'Progress.LoadEnded');
  exports.LoadEnded = LoadEnded;

  // Update

  const update = (state, action) =>
    action instanceof Loader.Load ?
      state.clear() :
    action instanceof LoadStarted ?
      Model({loading: true}) :
    action instanceof LoadEnded ?
      Model({loading: false}) :
    state;
  exports.update = update;

  // View

  const style = StyleSheet.create({

    container: {
      width: '100%',
      height: 4,
      minHeight: 4,
      marginBottom: -4,
      position: 'relative',
      overflowX: 'hidden',
      pointerEvents: 'none',
      zIndex: 1,
    },

    bar: {
      position: 'absolute',
      top: 0,
      height: 4,
      width: '100%',
      transitionProperty: 'transform, opacity',
      transitionDuration: '300ms, 200ms',
      transitionTimingFunction: 'ease-out',
      transitionDelay: '0s, 300ms',

      animationDuration: '10s',
      animationTimingFunction: 'cubic-bezier(0, 0.5, 0, 0.5)',

      transform: 'translateX(-100%)',
      opacity: 0,
    },
    hidden: {
      visibility: 'hidden'
    },
    visible: {
      visibility: 'visible'
    },
    loading: {
      animationName: 'progressBarLoading'
    },
    loaded: {
      transform: 'translateX(0px)',
      opacity: 0
    },

    arrow: {
      width: 4,
      height: 4,
      float: 'right',
      marginRight: -4,
    },

  });

  const progressbarView = (id, progress, isSelected, theme) => {
    return html.div({
      key: `progressbar-${id}`,
      style: Style(style.bar,
                   !isSelected ? style.hidden : style.visible,
                   !progress.loading ? style.loaded : style.loading, {
                     backgroundColor: theme.progressBar
                   }),
    }, [html.div({
      key: `progressbar-arrow-${id}`,
      style: Style(style.arrow, {
        backgroundImage: `linear-gradient(135deg, ${theme.progressBar} 50%, transparent 50%)`,
      })
    })]);
  };

  const view = (mode, loaders, progress, selected, theme) => {
    return html.div({
      key: 'progressbars',
      style: style.container
    }, loaders.map((loader, index) =>
      render(`progressbar@${loader.id}`, progressbarView,
             loader.id,
             progress.get(index),
             // If not in show-web-view pass -1 to hide all progressbars.
             mode === 'show-web-view' && index === selected,
             theme)));
  };

  exports.view = view;

});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('browser/web-shell',['require','exports','module','common/typed','common/focusable','./web-loader'],(require, exports, module) => {

  'use strict';

  const {Record, Union, List, Maybe, Any} = require('common/typed');
  const Focusable = require('common/focusable');
  const Loader = require('./web-loader');

  // Model

  const Model = Record({
    isFocused: false,
    isVisible: true,
    zoom: 1
  });
  exports.Model = Model;

  // Actions

  const ZoomIn = Record({
    description: 'Request ZoomIn for web-view content'
  }, 'WebView.Shell.ZoomIn');
  exports.ZoomIn = ZoomIn;

  const ZoomOut = Record({
    description: 'Request ZoomOut for web-view content'
  }, 'WebView.Shell.ZoomOut');
  exports.ZoomOut = ZoomOut;

  const ResetZoom = Record({
    description: 'Request zoom of web-view content to be reset'
  }, 'WebView.Shell.ResetZoom');
  exports.ResetZoom = ResetZoom;


  const VisibilityChanged = Record({
    description: 'Visibility of the web-view content has changed',
    value: Boolean
  }, 'WebView.Shell.VisibilityChanged');
  exports.VisibilityChanged = VisibilityChanged;


  // Update

  const ZOOM_MIN = 0.5;
  const ZOOM_MAX = 2;
  const ZOOM_STEP = 0.1;

  const resetZoom = state =>
    state.remove('zoom');
  exports.resetZoom = resetZoom;

  const zoomIn = state =>
    state.set('zoom', Math.min(ZOOM_MAX, state.zoom + ZOOM_STEP));
  exports.zoomIn = zoomIn;

  const zoomOut = state =>
    state.set('zoom', Math.max(ZOOM_MIN, state.zoom - ZOOM_STEP));
  exports.zoomOut = zoomOut;

  // Update

  const update = (state, action) =>
    action instanceof VisibilityChanged ? state.set('isVisible', state.value) :
    action instanceof ZoomIn ? zoomIn(state) :
    action instanceof ZoomOut ? zoomOut(state) :
    action instanceof ResetZoom ? resetZoom(state) :
    action instanceof Focusable.Focus ? Focusable.focus(state) :
    action instanceof Focusable.Blur ? Focusable.blur(state) :
    action instanceof Focusable.Focused ? Focusable.focus(state) :
    action instanceof Focusable.Blured ? Focusable.blur(state) :
    action instanceof Loader.Load ? Focusable.focus(state) :
    state;
  exports.update = update;

});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('browser/web-navigation',['require','exports','module','common/typed','./web-loader','./web-progress'],(require, exports, module) => {

  'use strict';

  const {Record, Union, List, Maybe, Any} = require('common/typed');
  const Loader = require('./web-loader');
  const Progress = require('./web-progress');

  // Model

  const Model = Record({
    canGoBack: false,
    canGoForward: false,
  });
  exports.Model = Model;

  // Actions

  const CanGoBackChanged = Record({
    description: 'Navigator state for going forward changed',
    value: Boolean
  }, 'WebView.Navigation.CanGoBackChanged');
  exports.CanGoBackChanged = CanGoBackChanged;

  const CanGoForwardChanged = Record({
    description: 'Navigator state for going back changed',
    value: Boolean
  }, 'WebView.Navigation.CanGoForwardChanged');
  exports.CanGoForwardChanged = CanGoForwardChanged;


  // Update

  const update = (state, action) =>
    action instanceof CanGoBackChanged ?
      state.set('canGoBack', action.value) :
    action instanceof CanGoForwardChanged ?
      state.set('canGoForward', action.value) :
    // Clear state when load is initiated or load is started.
    action instanceof Progress.LoadStarted ? state.clear() :
    action instanceof Loader.Load ? state.clear() :
    state;

  exports.update = update;

});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('browser/web-security',['require','exports','module','common/typed','./web-loader'],(require, exports, module) => {

  'use strict';

  const {Record, Union, List, Maybe, Any} = require('common/typed');
  const Loader = require('./web-loader');

  // Model
  const Model = Record({
    state: 'insecure',
    secure: false,
    extendedValidation: false
  });
  exports.Model = Model;

  // Action

  const SecurityChanged = Record({
    description: 'Security state of the page changed',
    state: String,
    extendedValidation: Boolean
  }, 'WebView.Security.Change');
  exports.SecurityChanged = SecurityChanged;

  // Update

  const update = (state, action) =>
    action instanceof SecurityChanged ? state.merge({
        state: action.state,
        secure: action.state === 'secure',
        extendedValidation: action.extendedValidation
      }) :
    action instanceof Loader.Load ? state.clear() :
    action instanceof Loader.LocationChanged ? state.clear() :
    state;
  exports.update = update;

});

// TinyColor v1.1.2
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function() {

var trimLeft = /^[\s,#]+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    math = Math,
    mathRound = math.round,
    mathMin = math.min,
    mathMax = math.max,
    mathRandom = math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function() {
        return rgbaToHex(this._r, this._g, this._b, this._a);
    },
    toHex8String: function() {
        return '#' + this.toHex8();
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = s.toHex8String();
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("v")) {
            color.s = convertToPercentage(color.s);
            color.v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, color.s, color.v);
            ok = true;
            format = "hsv";
        }
        else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("l")) {
            color.s = convertToPercentage(color.s);
            color.l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, color.s, color.l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}
    // `rgbaToHex`
    // Converts an RGBA color plus alpha transparency to hex
    // Assumes r, g, b and a are contained in the set [0, 255]
    // Returns an 8 character hex
    function rgbaToHex(r, g, b, a) {

        var hex = [
            pad2(convertDecimalToHex(a)),
            pad2(mathRound(r).toString(16)),
            pad2(mathRound(g).toString(16)),
            pad2(mathRound(b).toString(16))
        ];

        return hex.join("");
    }

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};
tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (mathRound(hsl.h) + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;
    var w = p * 2 - 1;
    var a = rgb2.a - rgb1.a;

    var w1;

    if (w * a == -1) {
        w1 = w;
    } else {
        w1 = (w + a) / (1 + w * a);
    }

    w1 = (w1 + 1) / 2;

    var w2 = 1 - w1;

    var rgba = {
        r: rgb2.r * w1 + rgb1.r * w2,
        g: rgb2.g * w1 + rgb1.g * w2,
        b: rgb2.b * w1 + rgb1.b * w2,
        a: rgb2.a * p  + rgb1.a * (1 - p)
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false

tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"


tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            a: convertHexToDecimal(match[1]),
            r: parseIntFromHex(match[2]),
            g: parseIntFromHex(match[3]),
            b: parseIntFromHex(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}
// Node: Export function
if (typeof module !== "undefined" && module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (typeof define === 'function' && define.amd) {
    define('tinycolor',[],function () {return tinycolor;});
}
// Browser: Expose to window
else {
    window.tinycolor = tinycolor;
}

})();

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('service/pallet',['require','exports','module','common/typed','common/url-helper','browser/web-view','browser/web-loader','tinycolor'],(require, exports, module) => {

  'use strict';

  const {Record, Maybe, Union} = require('common/typed');
  const URI = require('common/url-helper');
  const WebView = require('browser/web-view');
  const Loader = require('browser/web-loader');
  const tinycolor = require('tinycolor');

  const DARK = true;

  const curated = {
    // [foreground, background]
    'youtube.com': ['#cc181e', '#fff'],
    'yahoo.com': ['#2d1152', '#fff'],
    'facebook.com': ['#fff', '#3A5795'],
    'biadu.com': ['#2529d8', '#fff'],
    'amazon.com': ['#e47911', '#fff'],
    'taobao.com': ['#ff4400', '#fff'],
    'qq.com': ['#5da4e6', '#fff'],
    'sina.com.cn': ['#fff', '#ff8500', DARK],
    'reddit.com': ['#336699', '#F0F0F0'],
    'instagram.com': ['#fff', '#125688', DARK],
    'imgur.com': ['#fff', '#2b2b2b', DARK],
    'cnn.com': ['#fff', '#0c0c0c', DARK],
    'slideshare.net': ['#fff', '#313131', DARK],
    'deviantart.com': ['#fff', '#475c4d', DARK],
    'soundcloud.com': ['#FF5500', '#333333', DARK],
    'mashable.com': ['#fff', '#00aeef', DARK],
    'daringfireball.net': ['#fff', '#4a525a', DARK],
    'firewatchgame.com': ['#EF4338', '#2D102B', DARK],
    'whatliesbelow.com': ['#fff', '#74888B', DARK],
    'supertimeforce.com': ['#2EBCEC', '#051224', DARK]
  };

  const Color = String;

  const Model = Record({
    isDark: false,
    foreground: Maybe(Color),
    background: Maybe(Color)
  }, 'Pallet');
  exports.Model = Model;

  const isBright = hexcolor =>
    parseInt(hexcolor, 16) > 0xffffff/2;


  const read = input => {
    const pigments = String(input).split('|').concat(null, null);
    const [bg, fg] = pigments.slice(0, 2).map(tinycolor);
    const background = bg.isValid() ? bg.toRgbString() : void(0);
    // tinycolor uses YIQ for brightness calculation, we also throw more
    // primitive hex based calculation and treat background as dark if any
    // of two calculations consider color to be dark.
    const isDark = background && (bg.isDark() || !isBright(bg.toHex()));
    const foreground = fg.isValid() ? fg.toRgbString() :
                       isDark ? '#fff' :
                       void(0);
    return Model({isDark, foreground, background});
  };
  exports.read = read;

  // Action

  const PalletChanged = Record({
    pallet: Model,
    description: 'Color pallet of page changed'
  }, 'Pallet.Action.Change');
  exports.PalletChanged = PalletChanged;

  const service = address => action => {
    if (action instanceof WebView.Action &&
        action.action instanceof Loader.LocationChanged) {
      const hostname = URI.getDomainName(action.action.uri);
      const theme = curated[hostname];
      if (theme) {
        const [foreground, background, isDark] = theme;
        const pallet = Model({foreground, background, isDark});
        // Use promise so behavior is going to be closer to what it will be
        // when we stop faking.
        Promise.resolve()
          .then(address.send(WebView.Action({
            id: action.id,
            action: PalletChanged({pallet})
          })));
      }
    }
    return action
  };

  exports.service = service;
});

/* this source code form is subject to the terms of the mozilla public
 * license, v. 2.0. if a copy of the mpl was not distributed with this
 * file, you can obtain one at http://mozilla.org/mpl/2.0/. */

define('common/favicon',['require','exports','module','common/url-helper'],(require, exports, module) => {

  'use strict';

  const {getOrigin} = require('common/url-helper');

  const constructFaviconURL = (href, size) => `${href}#-moz-resolution=${size},${size}`;

  const getFallback = (pageURL) => pageURL ?
    constructFaviconURL(getOrigin(pageURL) + '/favicon.ico', FAVICON_SIZE) : null;

  // Ideal size for a favicon.
  const FAVICON_SIZE = 16 * devicePixelRatio;

  /**
   * Takes an array of icons, and find the icon the fits best as a favicon.
   * icon {
   *  href: String,
   *  sizes: Maybe(String) // "16x16" or "16x16 32x32" or "any"
   *  rel: Maybe(String)   // "shortcut icon", "icon"
   * }
   */
  const getBestIcon = (icons) => {

    const allSizes = new Map(); // store icons per size
    const others = new Set();   // store icons without sizes or non-shortcut icons

    for (var icon of icons) {
      if (!icon) {
        continue;
      }
      if (icon.rel != 'shortcut icon') {
        others.add(icon);
      } else if (!icon.sizes) {
        others.add(icon);
      } else {
        if (icon.sizes == 'any') {
          // Consider it fits the best size
          allSizes.set(FAVICON_SIZE, icon);
        } else {
          // if sizes = "16x16 32x32", move icon into allSizes(16) and allSizes(32)
          icon.sizes.split(' ')
              .map(s => parseInt(s, 10))
              .forEach(s => allSizes.set(s, icon));
        }
      }
    }

    const bestFit = [...allSizes].reduce((prev, curr) => {
      if (!prev) {
        return curr;
      }
      if (Math.abs(prev[0] - FAVICON_SIZE) > Math.abs(curr[0] - FAVICON_SIZE)) {
        // Size of curr fits better than size of prev.
        return curr;
      } else {
        return prev;
      }
    }, undefined);

    const bestFitForOthers = [...others].reduce((prev, curr) => {
      if (!prev) {
        return curr;
      }
      if (curr.rel == 'shortcut icon') {
        // Prefer 'shortcut icon'
        return curr;
      }
      return prev;
    }, undefined);

    if (bestFit) {
      const size = bestFit[0];
      const href = bestFit[1].href;
      return {
        bestIcon: bestFit[1],
        faviconURL: constructFaviconURL(href, size),
      }
    }

    if (bestFitForOthers) {
      const href = bestFitForOthers.href;
      return {
        bestIcon: bestFitForOthers,
        faviconURL: constructFaviconURL(href, FAVICON_SIZE),
      }
    }

    return {bestIcon: null, faviconURL: null};
  };

  exports.getBestIcon = getBestIcon;
  exports.getFallback = getFallback;

});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('browser/web-page',['require','exports','module','common/typed','service/pallet','./web-loader','./web-progress','./web-view','common/favicon'],(require, exports, module) => {

  'use strict';

  const {Record, Union, List, Maybe, Any} = require('common/typed');
  const Pallet = require('service/pallet');
  const Loader = require('./web-loader');
  const Progress = require('./web-progress');
  const WebView = require('./web-view');
  const Favicon = require('common/favicon');

  // Model


  const Heros = List(String, 'Heros');

  const Icon = Record({
    href: String,
    sizes: Maybe(String),
    rel: Maybe(String),
  });

  const Model = Record({
    title: Maybe(String),

    label: Maybe(String),
    icon: Maybe(Icon),
    faviconURL: Maybe(String),
    description: Maybe(String),
    name: Maybe(String),
    hero: Heros,

    thumbnail: Maybe(String),
    overflow: false,
    palletSource: Maybe(String),
    pallet: Pallet.Model
  });
  exports.Model = Model;

  // Action

  const MetaChanged = Record({
    description: 'Metadata of the page changed',
    content: String,
    name: String
  }, 'WebView.MetaChanged');
  exports.MetaChanged = MetaChanged;

  const ThumbnailChanged = Record({
    description: 'Thumbnail of the page changed',
    uri: String,
    image: String
  }, 'WebView.ThumbnailChanged');
  exports.ThumbnailChanged = ThumbnailChanged;

  const TitleChanged = Record({
    description: 'Title of the page changed',
    uri: String,
    title: String
  }, 'WebView.Page.TitleChanged');
  exports.TitleChanged = TitleChanged;

  const IconChanged = Record({
    description: 'Favicon of the page changed',
    uri: String,
    icon: Icon,
  }, 'WebView.Page.IconChanged');
  exports.IconChanged = IconChanged;

  const Scrolled = Record({
    description: 'Page was scrolled'
  }, 'WebView.Page.Scrolled');
  exports.Scrolled = Scrolled;

  const OverflowChanged = Record({
    description: 'Page overflow has changed',
    overflow: Boolean
  }, 'WebView.Page.OverflowChanged');
  exports.OverflowChanged = OverflowChanged;

  const PageCardChanged = Record({
    uri: String,
    hero: Heros,
    title: String,
    description: String,
    name: String
  }, 'WebView.Page.CardChange');
  exports.PageCardChanged = PageCardChanged;


  const {PalletChanged} = Pallet;
  exports.PalletChanged = PalletChanged;

  // Update

  const updateMeta = (state, action) => {
    if (action.name === 'theme-color') {
      // Never override pallet if there was a currated theme.
      if (state.palletSource !== 'curated-theme-colors') {
        return state.merge({
          palletSource: 'theme-color',
          pallet: Pallet.read(action.content)
        });
      }
    }
    return state
  };

  const updateCard = (state, action) =>
    state.merge({
      label: action.title !== '' ? action.title : '',
      name: action.name,
      description: action.description,
      hero: action.hero
    });

  const updateIcon = (state, icon) => {
    const {bestIcon, faviconURL} = Favicon.getBestIcon([state.icon, icon]);
    console.log(faviconURL);
    return state.set('icon', bestIcon).set('faviconURL', faviconURL);
  }

  const update = (state, action) =>
    action instanceof TitleChanged ? state.set('title', action.title) :
    action instanceof IconChanged ? state.set('icon', action.icon) :
    action instanceof OverflowChanged ? state.set('overflow', action.overflow) :
    action instanceof ThumbnailChanged ? state.set('thumbnail', action.image) :
    action instanceof MetaChanged ? updateMeta(state, action) :
    action instanceof PalletChanged ? state.merge({
      pallet: action.pallet,
      palletSource: 'curated-theme-colors'
    }) :
    action instanceof PageCardChanged ? updateCard(state, action) :
    action instanceof Progress.LoadStarted ? state.clear() :
    state;

  exports.update = update;

});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('browser/web-view',['require','exports','module','common/typed','reflex','common/style','common/url-helper','common/editable','common/focusable','./iframe','./web-progress','./web-shell','./web-navigation','./web-security','./web-page','./web-loader'],(require, exports, module) => {

  'use strict';

  const {Record, Union, List, Maybe, Any} = require('common/typed');
  const {html, render} = require('reflex');
  const {StyleSheet, Style} = require('common/style');
  const URI = require('common/url-helper');
  const Editable = require('common/editable');
  const Focusable = require('common/focusable');
  const IFrame = require('./iframe');
  const Progress = require('./web-progress');
  const Shell = require('./web-shell');
  const Navigation = require('./web-navigation');
  const Security = require('./web-security');
  const Page = require('./web-page');
  const Loader = require('./web-loader');

  // Model
  const Model = Record({
    selected: Maybe(Number),
    nextID: 0,

    loader: List(Loader.Model),
    shell: List(Shell.Model),
    page: List(Page.Model),
    progress: List(Progress.Model),
    navigation: List(Navigation.Model),
    security: List(Security.Model),
  }, 'WebViews');
  exports.Model = Model;

  // Returns subset of the model which can be restored acrosse sessions.
  const write = model => model.merge({
    progress: model.progress.map(Progress.write),
    page: model.page.map(Page.write),
    navigation: model.navigation.map(Navigation.write),
    security: model.security.map(Security.write)
  });
  exports.write = write;

  const get = (state, index) => ({
    loader: state.loader.get(index),
    shell: state.shell.get(index),
    page: state.page.get(index),
    progress: state.progress.get(index),
    navigation: state.navigation.get(index),
    security: state.security.get(index)
  });
  exports.get = get;

  // Actions

  const Failure = Record({
    description: 'WebView failure',
    detail: Any
  }, 'WebView.Failure');
  exports.Failure = Failure;

  const ContextMenu = Record({
    description: 'WebView requested a context menu',
  }, 'WebView.ContextMenu');
  exports.ContextMenu = ContextMenu;

  const ModalPrompt = Record({
    description: 'WebView requested a modal prompt'
  }, 'WebView.ModalPrompt');
  exports.ModalPrompt = ModalPrompt;

  const Authentificate = Record({
    description: 'WebView requested an authentification'
  }, 'WebView.Authentificate');
  exports.Authentificate = Authentificate;

  const Open = Record({
    uri: Maybe(String),
    name: '_blank',
    features: ''
  }, 'WebViews.Open');
  exports.Open = Open;

  const FadeToOpen = Record({
    description: 'Transition to open-web-view mode with fade animation'
  }, 'WebViews.FadeToOpen');
  exports.FadeToOpen = FadeToOpen;

  const OpenInBackground = Record({
    uri: String,
    inBackground: true
  }, 'WebView.OpenInBackground');
  exports.OpenInBackground = OpenInBackground;

  const Close = Record({
    description: 'close selected web view'
  }, 'WebView.Close');
  exports.Close = Close;

  const SelectByOffset = Record({
    description: 'Select web-view by an offset',
    offset: Number,
    loop: true
  }, 'WebViews.SelectByOffset');
  exports.SelectByOffset = SelectByOffset;

  const SelectByID = Record({
    description: 'Select web-view by an id',
    id: String
  }, 'WebViews.SelectByID');
  exports.SelectByID = SelectByID;

  const SelectByIndex = Record({
    description: 'Select web-view by an index',
    index: Number
  }, 'WebViews.SelectByIndex');
  exports.SelectByIndex = SelectByIndex;

  const SelectNext = Record({
    description: 'Select web view following selected one'
  }, 'WebViews.SelectNext');
  exports.SelectNext = SelectNext;

  const SelectPrevious = Record({
    description: 'Select web view preceeding selected one'
  }, 'WebView.SelectPrevious');
  exports.SelectPrevious = SelectPrevious;

  const {Load, LocationChanged} = Loader;
  const {CanGoBackChanged, CanGoForwardChanged} = Navigation;
  const {LoadStarted, LoadEnded} = Progress;
  const {MetaChanged, ThumbnailChanged, TitleChanged,
         IconChanged, Scrolled, OverflowChanged,
         PageCardChanged, PalletChanged} = Page;
  const {SecurityChanged} = Security;
  const {VisibilityChanged} = Shell;
  const {Focus, Blur, Focused, Blured} = Focusable;


  // Just a union type for all possible actions that are targeted at specific
  // web view.
  const WebViewAction = Union({
    Close, Open, OpenInBackground,
    // Loader
    Load, LocationChanged,
    // Progress
    LoadStarted, LoadEnded,
    // Navigation
    CanGoBackChanged, CanGoForwardChanged,
    // Page
    MetaChanged, ThumbnailChanged, TitleChanged, IconChanged, Scrolled,
    OverflowChanged, PageCardChanged, PalletChanged,
    // Security
    SecurityChanged,
    // Shell
    VisibilityChanged,
    Focus, Blur, Focused, Blured,
    // Other
    Failure, ContextMenu, ModalPrompt, Authentificate
  });
  exports.WebViewAction = WebViewAction;

  // Type contains `id` of the web-view and an `action` that is targeted
  // the web-view that has matching `id`. If `id` is `null` targets currently
  // selected web-view.
  const Action = Record({
    id: Maybe(String),
    action: WebViewAction
  }, 'WebView.Action');
  exports.Action = Action;



  // Update


  const indexByID = (state, id) =>
    id === null ? state.selected :
    id === void(0) ? state.selected :
    id === '@selected' ? state.selected :
    state.loader.findIndex(loader => loader.id === id);
  exports.indexByID = indexByID;

  const indexByOffset = (state, offset, loop) => {
    const position = state.selected + offset;
    const count = state.loader.size;
    if (loop) {
      const index = position - Math.trunc(position / count) * count
      return index < 0 ? index + count :  index
    } else {
      return Math.min(count - 1, Math.max(0, position))
    }
  }
  exports.indexByOffset = indexByOffset;

  const selectByOffset = (state, offset, loop=true) =>
    state.set('selected', indexByOffset(state, offset, loop));
  exports.selectByOffset = selectByOffset;

  const selectByID = (state, id) =>
    state.set('selected', indexByID(state, id));
  exports.selectByID = selectByID;

  const selectByIndex = (state, index) =>
    state.set('selected', index);
  exports.selectByIndex = selectByIndex;

  // Transformers

  const open = (state, {uri, inBackground}) => state.merge({
    nextID: state.nextID + 1,
    selected: inBackground ? state.selected + 1: 0,
    loader: state.loader.unshift(Loader.Model({uri, id: String(state.nextID)})),
    shell: state.shell.unshift(Shell.Model({isFocused: !inBackground})),
    page: state.page.unshift(Page.Model()),
    progress: state.progress.unshift(Progress.Model()),
    navigation: state.navigation.unshift(Navigation.Model()),
    security: state.security.unshift(Security.Model())
  });
  exports.open = open;

  const close = state =>
    closeByIndex(state, state.selected);
  exports.close = close;

  const closeByID = (state, id) =>
    closeByIndex(state, indexByID(state, id));
  exports.closeByID = closeByID;

  const closeByIndex = (state, index) =>
    index === null ? state : state.merge({
      selected: state.loader.size === 1 ?  null :
                index === 0 ? 0 : index - 1,

      loader: state.loader.remove(index),
      shell: state.shell.remove(index),
      page: state.page.remove(index),
      progress: state.progress.remove(index),
      navigation: state.navigation.remove(index),
      security: state.security.remove(index)
    });
  exports.closeByIndex = closeByIndex;


  const load = (state, action) =>
    loadByIndex(state, state.selected, action);
  exports.load = load;

  const loadByID = (state, id, action) =>
    loadByIndex(state, indexByID(id), action);
  exports.loadByID = loadByID;

  const loadByIndex = (state, index, action) => {
    const loader = state.loader.get(index);
    return !loader ?
            open(state, action) :
           loader.uri && (URI.getOrigin(loader.uri) !== URI.getOrigin(action.uri)) ?
            open(state, action) :
            updateByIndex(state, index, Loader.Load(action));
  };
  exports.loadByIndex = loadByIndex;


  const updateByID = (state, id, action) =>
    action instanceof Load ? loadByID(state, id, action) :
    action instanceof Close ? closeByID(state, id) :
    action instanceof Open ? open(state, action) :
    action instanceof OpenInBackground ? open(state, action) :
    updateByIndex(state, indexByID(state, id), action);
  exports.updateByID = updateByID;

  const updateByIndex = (state, n, action) => {
    const {loader, shell, page, progress, navigation, security} = state;
    return n === null ? state : state.merge({
     selected: action instanceof Focus ? n :
               action instanceof Focused ? n :
               state.selected,
     loader: loader.set(n, Loader.update(loader.get(n), action)),
     shell: shell.set(n, Shell.update(shell.get(n), action)),
     page: page.set(n, Page.update(page.get(n), action)),
     progress: progress.set(n, Progress.update(progress.get(n), action)),
     security: security.set(n, Security.update(security.get(n), action)),
     navigation: navigation.set(n, Navigation.update(navigation.get(n), action))
   });
 };

  const update = (state, action) =>
    action instanceof Load ?
      load(state, action) :
    action instanceof Open ?
      open(state, action) :
    action instanceof OpenInBackground ?
      open(state, action) :
    action instanceof Close ?
      close(state) :
    action instanceof SelectByIndex ?
      selectByIndex(state, action.index) :
    action instanceof SelectByID ?
      selectByID(state, action.id) :
    action instanceof SelectByOffset ?
      selectByOffset(state, action.offset, action.loop) :
    action instanceof SelectNext ?
      selectByOffset(state, 1) :
    action instanceof SelectPrevious ?
      selectByOffset(state, -1) :
    // @TODO we explicitly tie ZoomIn/ZoomOut actions to selected webview.
    // It may make more sense in future to include an ID with the action model.
    action instanceof Shell.ResetZoom ?
      updateByID(state, '@selected', action) :
    action instanceof Shell.ZoomIn ?
      updateByID(state, '@selected', action) :
    action instanceof Shell.ZoomOut ?
      updateByID(state, '@selected', action) :
    action instanceof Action ?
      updateByID(state, action.id, action.action) :
    state;
  exports.update = update;


  // View

  const webviewStyle = StyleSheet.create({
    base: {
      position: 'absolute',
      MozUserSelect: 'none',
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      zIndex: 0,
    },
    active: {
      zIndex: 1,
    },
    inactive: {
      display: 'none',
    },
    passive: {
      visibility: 'hidden',
    }
  });

  const viewWebView = (loader, shell, thumbnail, isSelected, address) => {
    // Do not render anything unless viewer has an `uri`
    if (!loader.uri) return null;

    const action = address.pass(Event);
    const location = URI.resolve(loader.uri);

    return IFrame.view({
      id: `web-view-${loader.id}`,
      uri: location,
      className: `web-view ${isSelected ? 'selected' : ''}`,
      // This is a workaround for Bug #266 that prevents capturing
      // screenshots if iframe or it's ancesstors have `display: none`.
      // Until that's fixed on platform we just hide such elements with
      // negative index and absolute position.
      style: Style(webviewStyle.base,
                   isSelected ? webviewStyle.active :
                   !thumbnail ? webviewStyle.passive :
                   webviewStyle.inactive),
      mozbrowser: true,
      remote: true,
      mozapp: URI.isPrivileged(location) ? URI.getManifestURL().href : null,
      mozallowfullscreen: true,
      isVisible: isSelected || !thumbnail,
      zoom: shell.zoom,

      isFocused: shell.isFocused,

      onCanGoBackChanged: action,
      onCanGoForwardChanged: action,
      onBlur: action,
      onFocus: action,
      // onAsyncScroll: action
      onClose: action,
      onOpenWindow: action,
      onOpenTab: action,
      onMenu: action,
      onError: action,
      onLoadStarted: action,
      onLoadEnded: action,
      onLoadProgressChange: action,
      onLocationChanged: action,
      onMetaChanged: action,
      onIconChanged: action,
      onLocationChanged: action,
      onSecurityChanged: action,
      onTitleChanged: action,
      onPrompt: action,
      onAuthentificate: action,
      onScrollAreaChange: action,
    });
  };
  exports.viewWebView = viewWebView;

  const webviewsStyle = StyleSheet.create({
    base: {
      width: '100%',
      height: '100%',
      position: 'relative',
    },
    fadeIn: {
      transition: 'opacity 100ms linear',
      transform: 'scale(1)',
      opacity: 1,
    },
    fadeOut: {
      transition: 'transform 0ms linear 100ms, opacity 100ms linear',
      transform: 'scale(0)',
      opacity: 0,
      pointerEvents: 'none',
    },
    grow: {
      transition: 'transform 200ms linear, opacity 200ms linear',
      transform: 'scale(1)',
      opacity: 1,
    },
    shrink: {
      transition: 'transform 200ms linear, opacity 150ms linear',
      transform: 'scale(0)',
      opacity: 0,
      pointerEvents: 'none',
    },
    hide: {
      transform: 'scale(0)',
      opacity: 0,
      pointerEvents: 'none'
    }
  });

  // Given a mode and transition, returns appropriate style object.
  const getModeStyle =  (mode, transition) =>
    (mode === 'show-web-view' && transition === 'fade') ?
      webviewsStyle.fadeIn :
    (mode === 'show-web-view' && transition === 'zoom') ?
      webviewsStyle.grow :
    (mode === 'create-web-view' && transition === 'fade') ?
      webviewsStyle.fadeOut :
    mode === 'select-web-view' ?
      webviewsStyle.fadeOut :
    (mode === 'edit-web-view' && !transition) ?
      webviewsStyle.hide :
    (mode === 'edit-web-view' && transition === 'fade') ?
      webviewsStyle.fadeOut :
    webviewsStyle.shrink;

  const view = (mode, transition, loader, shell, page, address, selected) =>
    html.div({
      key: 'web-views',
      style: Style(webviewsStyle.base, getModeStyle(mode, transition)),
    }, loader.map((loader, index) =>
      render(`web-view@${loader.id}`, viewWebView,
             loader,
             shell.get(index),
             page.get(index).thumbnail,
             index === selected,
             address.forward(action => Action({id: loader.id, action})))));
  exports.view = view;

  // Actions that web-view produces but `update` does not handles.



  const Event = event =>
    Event[event.type](event);

  Event.mozbrowserlocationchange = ({detail: uri}) =>
    LocationChanged({uri});

  // TODO: Figure out what's in detail
  Event.mozbrowserclose = ({detail}) =>
    Close();

  Event.mozbrowseropenwindow = ({detail}) =>
    Open({uri: detail.url,
          name: detail.name,
          features: detail.features});

  Event.mozbrowseropentab = ({detail}) =>
    OpenInBackground({uri: detail.url});

  // TODO: Figure out what's in detail
  Event.mozbrowsercontextmenu = ({detail}) =>
    ContextMenu();

  // TODO: Figure out what's in detail
  Event.mozbrowsershowmodalprompt = ({detail}) =>
    ModalPrompt();

  // TODO: Figure out what's in detail
  Event.mozbrowserusernameandpasswordrequired = ({detail}) =>
    Authentificate();

  // TODO: Figure out what's in detail
  Event.mozbrowsererror = ({detail}) =>
    Failure({detail});


  Event.focus = ({id}) =>
    Focused({id});

  Event.blur = ({id}) =>
    Blured({id});


  Event.mozbrowsergobackchanged = ({detail: value}) =>
    CanGoBackChanged({value});

  Event.mozbrowsergoforwardchanged = ({detail: value}) =>
    CanGoForwardChanged({value});


  Event.mozbrowserloadstart = ({target, timeStamp}) =>
    LoadStarted({uri: target.location});

  Event.mozbrowserloadend = ({target, timeStamp}) =>
    LoadEnded({uri: target.location});

  Event.mozbrowsertitlechange = ({target, detail: title}) =>
    TitleChanged({uri: target.location, title});

  Event.mozbrowsericonchange = ({target, detail: icon}) =>
    IconChanged({uri: target.location, icon});

  Event.mozbrowsermetachange = ({detail: {content, name}}) =>
    MetaChanged({content, name});

  // TODO: Figure out what's in detail
  Event.mozbrowserasyncscroll = ({detail}) =>
    Scrolled();

  Event.mozbrowserscrollareachanged = ({target, detail}) =>
    OverflowChanged({
      overflow: detail.height > target.parentNode.clientHeight
    });

  Event.mozbrowsersecuritychange = ({detail}) =>
    SecurityChanged({
      state: detail.state,
      extendedValidation: detail.extendedValidation
    });
});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('browser/theme',['require','exports','module','common/url-helper','typed-immutable/index'],(require, exports, module) => {

  'use strict';

  const {getDomainName} = require('common/url-helper');
  const {Record, Maybe} = require('typed-immutable/index');

  const Color = String;

  const Model = Record({
    isDark: false,

    inputText: Color('rgba(0,0,0,0.65)'),
    locationText: Color('rgba(0,0,0,0.65)'),
    titleText: Color('rgba(0,0,0,0.5)'),
    locationBar: Color('rgba(0,0,0,0.07)'),

    shell: Color('#fff'),
    shellText: Color('rgba(0,0,0,0.65)'),

    progressBar: Color('#4A90E2')
  }, 'Theme');
  exports.Model = Model;

  exports.dashboard = Model({
    isDark: true,

    inputText: Color('rgba(255,255,255,0.65)'),
    locationText: Color('rgba(255,255,255,0.65)'),
    titleText: Color('rgba(255,255,255,0.5)'),
    locationBar: 'rgba(255,255,255,0.15)',

    shell: Color('#273340'),
    shellText: Color('rgba(255,255,255,0.65)'),

    progressBar: Color('#4A90E2')
  });

  exports.default = Model();

  exports.read = (pallet) => {
    const foreground = pallet && pallet.foreground || void(0);
    const background = pallet && pallet.background || void(0);
    return !pallet ? Model() : Model({
      isDark: pallet.isDark,

      inputText: foreground,
      locationText: foreground,
      titleText: foreground,
      locationBar: pallet.isDark ? 'rgba(255,255,255,0.15)' :
                   'rgba(0,0,0,0.07)',

      shell: background,
      shellText: foreground,

      progressBar: foreground
    });
  }
});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('browser2/sidetabs',['require','exports','module','common/typed','reflex','browser/web-view','common/style','common/favicon','browser/devtools-hud','common/focusable'],(require, exports, module) => {

  'use strict';

  const {Record} = require('common/typed');
  const {html, render} = require('reflex');
  const WebView = require('browser/web-view');
  const {Style, StyleSheet} = require('common/style');
  const Favicon = require('common/favicon');
  const {ToggleDevtoolsHUD} = require('browser/devtools-hud');
  const Focusable = require('common/focusable');

  const Model = Record({
    showSidetabs: true,
    large: false,
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
          onClick: address.pass(ToggleSidetabs),
        }, '\uf363'),
        html.div({
          style: styleButton.default,
          onClick: address.pass(ToggleSidetabsSize),
        }, '\uf264'),
        html.div({
          style: styleButton.default,
          onClick: address.pass(ToggleDevtoolsHUD),
        }, '\uf2AD'),
      ]),
    ]);

  exports.view = view;

});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Manages events coming from gecko.

define('common/runtime',['require','exports','module','common/typed'],(require, exports, module) => {
  'use strict';

  const {Record, Union, Any} = require('common/typed');

  // Actions

  const Unknown = Record({
    type: String,
    detail: Any
  }, 'Runtime.Unknown');
  exports.Unknown = Unknown;

  const RemoteDebugRequest = Record({
    type: 'remote-debugger-prompt'
  }, 'Runtime.RemoteDebugRequest');
  exports.RemoteDebugRequest = RemoteDebugRequest;

  const UpdateAvailable = Record({
    type: 'update-available'
  }, 'Runtime.UpdateAvailable');
  exports.UpdateAvailable = UpdateAvailable;

  const UpdateDownloaded = Record({
    type: 'update-downloaded'
  }, 'Runtime.UpdateDownloaded');
  exports.UpdateDownloaded = UpdateDownloaded;


  const CheckUpdate = Record({
    type: 'force-update-check'
  }, 'Runtime.CheckUpdate');
  exports.CheckUpdate = CheckUpdate;

  const RemoteDebugResponse = Record({
    type: 'remote-debugger-prompt',
    value: Boolean
  }, 'Runtime.RemoteDebugResponse');
  exports.RemoteDebugResponse = RemoteDebugResponse;

  const DownloadUpdate = Record({
    type: 'update-available-result',
    result: 'download'
  }, 'Runtime.DownloadUpdate');
  exports.DownloadUpdate = DownloadUpdate;

  const Restart = Record({
    type: 'restart',
  }, 'Runtime.Restart');
  exports.Restart = Restart;

  const CleanRestart = Record({
    type: 'clear-cache-and-restart'
  }, 'Runtime.CleanRestart');
  exports.CleanRestart = CleanRestart;

  const CleanReload = Record({
    type: 'clear-cache-and-reload'
  }, 'Runtime.CleanReload');
  exports.CleanReload = CleanReload;

  const Shutdown = Record({
    type: 'shutdown-application'
  }, 'Runtime.Shutdown');
  exports.Shutdown = Shutdown;

  const Minimize = Record({
    type: 'minimize-native-window'
  }, 'Runtime.Minimize');
  exports.Minimize = Minimize;

  const Maximize = Record({
    type: 'toggle-fullscreen-native-window'
  }, 'Runtime.Maximize');
  exports.Maximize = Maximize;


  const Incoming = ({detail}) =>
    detail.type === 'remote-debugger-prompt' ? RemoteDebugRequest() :
    detail.type === 'update-available' ? UpdateAvailable() :
    detail.type === 'update-downloaded' ? UpdateDownloaded() :
    detail.type === 'update-prompt-apply' ? UpdateDownloaded() :
    Unknown({type: detail.type, detail});

  const service = address => {
    // Start listening for runtime events.
    window.addEventListener('mozChromeEvent', address.pass(Incoming));

    return action => {
      if (action instanceof RemoteDebugRequest) {
        address.receive(RemoteDebugResponse({value: true}));
      } else if (action instanceof UpdateDownloaded) {
        address.receive(DownloadUpdate());
      } else if (action instanceof Unknown) {
        console.warn(`Unknown runtime event ${action}`)
      } else if (action instanceof CheckUpdate ||
                 action instanceof RemoteDebugResponse ||
                 action instanceof DownloadUpdate ||
                 action instanceof Restart ||
                 action instanceof CleanRestart ||
                 action instanceof CleanReload ||
                 action instanceof Shutdown ||
                 action instanceof Minimize ||
                 action instanceof Maximize)
      {
        window.dispatchEvent(new CustomEvent('mozContentEvent', {
          bubles: true,
          cancelable: false,
          detail: action.toJSON()
        }));

        if (action instanceof Restart) {
          console.warn(`Unsupported runtime action triggered ${action}`);
        }
      }
    }
  };

  exports.service = service;
});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('browser2/window-controls',['require','exports','module','reflex','common/style','common/runtime','common/os'],(require, exports, module) => {

  'use strict';

  const {html} = require('reflex');
  const {Style, StyleSheet} = require('common/style');
  const Runtime = require('common/runtime');
  const OS = require('common/os');

  // style

  const stylePlaceHolder = StyleSheet.create({
    default: {
      width: 60,
      height: 12,
      padding: 4,
    },
  });

  const styleButton = StyleSheet.create({
    button: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      margin: '0 4px',
      backgroundColor: 'hsl(0, 0%, 86%)'
    },
  });

  const styleContainer = StyleSheet.create({
    default: {
      padding: '4px',
      display: 'flex',
      flexShrink: 0,
      MozWindowDragging: 'no-drag'
    }
  });

  // Style

  const viewDarwin = ({isFocused}, theme, address) => {
    return html.div({
      key: 'WindowControls',
      style: styleContainer.default
    }, [
      html.button({
        key: 'WindowCloseButton',
        style: Style(styleButton.button, isFocused && {backgroundColor: theme.shellText}),
        onClick: address.send(Runtime.Shutdown())
      }),
      html.button({
        key: 'WindowMinButton',
        style: Style(styleButton.button, isFocused && {backgroundColor: theme.shellText}),
        onClick: address.send(Runtime.Minimize())
      }),
      html.button({
        key: 'WindowMaxButton',
        style: Style(styleButton.button, isFocused && {backgroundColor: theme.shellText}),
        onClick: address.send(Runtime.Maximize())
      })
    ]);
  }

  const viewOther = () => html.div({style: stylePlaceHolder.default});

  exports.view = OS.platform() == 'darwin' ? viewDarwin : viewOther;
});


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('browser2/navigation-controls',['require','exports','module','reflex','common/style','service/navigation'],(require, exports, module) => {

  'use strict';

  const {html} = require('reflex');
  const {Style, StyleSheet} = require('common/style');
  const {GoBack, GoForward, Stop, Reload} = require('service/navigation');

  // style

  const characters = {
    back: '\uf3D2',
    fwd: '\uf3D3',
    reload: '\uf49a',
    stop: '\uf404'
  }

  const styleButton = StyleSheet.create({
    button: {
      width: 14,
      fontSize: '12px',
      lineHeight: '14px',
      fontFamily: 'FontIon',
      verticalAlign: 'middle',
      textAlign: 'center',
    },
    enabled: {
    },
    disabled: {
      opacity: 0.2,
      pointerEvents: 'none',
    },
    displayed: {
    },
    collapsed: {
      display: 'none'
    }
  });

  const styleContainer = StyleSheet.create({
    default: {
      display: 'flex',
      flexShrink: 0,
      margin: '0 3px'
    },
  });

  // Style

  exports.viewHistoryButtons = ({isFocused}, navigation, address) => {

    const canGoBack = navigation && navigation.canGoBack;
    const canGoForward = navigation && navigation.canGoForward;

    return html.div({
      key: 'NavigationControlsHistory',
      style: styleContainer.default
    }, [
      html.div({
        key: 'NavigationBack',
        style: Style(styleButton.button, canGoBack ? styleButton.enabled : styleButton.disabled),
        onClick: address.send(GoBack())
      }, characters.back),
      html.div({
        key: 'NavigationFwd',
        style: Style(styleButton.button, canGoForward ? styleButton.displayed : styleButton.collapsed),
        onClick: address.send(GoForward())
      }, characters.fwd),
    ]);
  }

  exports.viewLoadButtons = ({isFocused}, progress, address) => {

    const canStop = progress && progress.loading;
    const canReload = progress && !progress.loading;

    return html.div({
      key: 'NavigationControlsLoad',
      style: styleContainer.default
    }, [
      html.div({
        key: 'NavigationStop',
        style: Style(styleButton.button, canStop ? styleButton.displayed : styleButton.collapsed),
        onClick: address.send(Stop())
      }, characters.stop),
      html.div({
        key: 'NavigationReload',
        style: Style(styleButton.button, canReload ? styleButton.displayed : styleButton.collapsed),
        onClick: address.send(Reload())
      }, characters.reload),
    ]);
  }

});



// Could not use it directly from react as it's now wrapped in AMD
// so we copy & paste here :(
// For details see:
// http://facebook.github.io/react/docs/class-name-manipulation.html
define('common/class-set',['require','exports','module'],function(require, exports, module) {
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule cx
 */

/**
 * This function is used to mark string literals representing CSS class names
 * so that they can be transformed statically. This allows for modularization
 * and minification of CSS class names.
 *
 * In static_upstream, this function is actually implemented, but it should
 * eventually be replaced with something more descriptive, and the transform
 * that is used in the main stack should be ported for use elsewhere.
 *
 * @param string|object className to modularize, or an object of key/values.
 *                      In the object case, the values are conditions that
 *                      determine if the className keys should be included.
 * @param [string ...]  Variable list of classNames in the string case.
 * @return string       Renderable space-separated CSS className.
 */
function cx(classNames) {
  if (typeof classNames == 'object') {
    return Object.keys(classNames).filter(function(className) {
      return classNames[className];
    }).join(' ');
  } else {
    return Array.prototype.join.call(arguments, ' ');
  }
}

module.exports = cx;
});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('service/history',['require','exports','module','common/typed','browser/web-loader','browser/web-progress','browser/web-page','browser/web-view'],(require, exports, module) => {

  'use strict';

  const {Record, Maybe, Union, List} = require('common/typed');
  const Loader = require('browser/web-loader');
  const Progress = require('browser/web-progress');
  const Page = require('browser/web-page');
  const WebView = require('browser/web-view');

  const PageMatch = Record({
    title: Maybe(String),
    uri: String,
    score: Number
  }, 'History.PageMatch');
  exports.PageMatch = PageMatch;


  const PageResult = Record({
    id: String,
    results: List(PageMatch, 'History.PageResult')
  });
  exports.PageResult = PageResult;

  const PageQuery = Record({
    id: String,
    input: String,
    limit: Number
  }, 'History.PageQuery');
  exports.PageQuery = PageQuery;

  const service = address => {
    /* FIXME: doesn't work with r.js
    const worker = require('common/worker!service/history-worker');

    worker.onmessage = ({data: {type, action}}) => {
      if (type === 'PageResult') {
        address.receive(PageResult(action));
      }
    }

    const handleAction = ({id, action}) => {
      if (action instanceof Progress.LoadEnded) {
        worker.postMessage({type: 'LoadEnded',
                            id,
                            action: action.toJSON()});
      }

      if (action instanceof Loader.LocationChanged) {
        worker.postMessage({type: 'LocationChanged',
                            id,
                            action: action.toJSON()});
      }

      if (action instanceof Page.TitleChanged) {
        worker.postMessage({type: 'TitleChanged',
                            id,
                            action: action.toJSON()});
      }

      if (action instanceof Page.ThumbnailChanged) {
        worker.postMessage({type: 'ThumbnailChanged',
                            id,
                            action: action.toJSON()});
      }

      if (action instanceof Page.IconChanged) {
        worker.postMessage({type: 'IconChanged',
                            id,
                            action: action.toJSON()});
      }
    }


    return action => {
      if (action instanceof PageQuery) {
        worker.postMessage({type: 'PageQuery',
                            action: action.toJSON()});
      }

      if (action instanceof WebView.Action) {
        handleAction(action)
      }
    }
    */
    return () => {};
  };
  exports.service = service;

});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('lang/task',['require','exports','module'],(require, exports, module) => {

  'use strict';

  // Utility function that can be used to resume a generator
  // in a given mode (`next` or `throw`). Result is a function
  // that takes a `value` and resumes `task` in a curried `mode`
  // with a given `value`.
  const resume = (task, mode="next") => value => {
    try {
      return task[mode](value);
    } catch (error) {
      return {error}
    }
  }


  // Utility function takes `routine` generator and arguments
  // that will be start / pass to a generator. Result of calling
  // spawn is a promise that is resolved to a return value of
  // the give generator. spawn will pause / resume generator on
  // `yield`. If yield value is a promise generator is resumed
  // with a value that promise is resolved to or if promise is
  // rejected then generator will be resumed with an exception
  // that will be rejection reason. If exception is thrown / not
  // handled in generator body then returned promise will be
  // rejected with a given exception.
  const spawn = function(task, ...params) {
    return new Promise((resolve, reject) => {
      // start a task by passing arguments to generator, note if generator
      // throws right away it will just reject outer promise.
      const routine = task.call(this, ...params);
      // Create a task resuming functions that resume a generator to capture
      // value it yeilds / returns or an error it throws. `raise` is used to
      // remuse task with a exception and `next` is used to resume it with a
      // `value`.
      const raise = resume(routine, "throw");
      const next = resume(routine, "next");

      // step function takes result captured via one of the resumer functions
      // and either completes result promise of the task with it (rejects if
      // exception was captured or resolves with value if generator returned)
      // or suspends generator until yield value is resolved / rejected and
      // then resumes it with resolution value / rejecetion reason.
      const step = ({done, error, value}) => {
        // If error was captured reject promise.
        if (error) {
          reject(error);
        }
        // If generator is done resolve with a completion value.
        else if (done) {
          resolve(value);
        }
        // Otherwise wrap yield value with promise to wait for tick even
        // if it was not already a promise & resume generator with either
        // reseming funciton and caputre results which then are cycled back
        // onto next step.
        else {
          Promise.
          resolve(value).
          then(next, raise).
          then(step);
        }
      };

      // Resume generator initially with no value and pass on to next step.
      step(next());
    });
  };
  exports.spawn = spawn;

  // Async decorator function takes let you define ES7 like async
  // function (see http://jakearchibald.com/2014/es7-async-functions/)
  // but desugared using generators. `async` must be invoked with a
  // generator function & it will return back pseudo async function.
  // Returned funciton when invoked returns promise that will be resolved
  // to a return value of the decorated generator. Generator can yield
  // promises in which case it's going to be resued with a result of the
  // promise or exception will be thrown into generator if promise is
  // rejected. If exception is throw / not caught in generator body
  // then returned promise will be rejected with that promise.
  const async = task => function(...params) {
    return spawn.call(this, task, ...params);
  };
  exports.async = async;

  // Scheduler can be used to queue up tasks to run them in order they
  // were scheduled but only after task with mathing id is complete.
  const schedule = (id, task, ...params) => {
    const pending = schedule.d[id];
    return schedule.d[id] = spawn(function*() {
      // wait for the scheduled task with matching id to complete before
      // spawning new task.
      try {
        yield pending;
      }
      // spawn a task regardless if previous task completed with error
      // or success. Note we do not catch error here to let it propagate
      // and make devtools handle it more properly.
      finally {
        return spawn(task, ...params);
      }
    });
  };

  // Use `null` prototype to avoid object as a hash map pitfalls
  // see following post for more details:
  // http://www.2ality.com/2012/01/objects-as-maps.html
  schedule.d = Object.create(null);

  exports.schedule = schedule;
});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('service/search',['require','exports','module','common/typed','lang/task'],(require, exports, module) => {

  'use strict';

  const {Record, Maybe, Union, List} = require('common/typed');
  const {async} = require('lang/task');

  const Match = Record({
    title: Maybe(String),
    uri: String
  }, 'Search.Match');
  Match.read = result => Match({
    title: result,
    uri: `https://duckduckgo.com/?q=${encodeURIComponent(result)}`
  });
  exports.Match = Match;

  const Result = Record({
    id: String,
    results: List(Match)
  }, 'Search.Result');
  exports.Result = Result;

  const Query = Record({
    id: String,
    input: String,
    limit: Number
  }, 'Search.Query');
  exports.Query = Query;


  const service = address => {
    var request = null;

    const respond = ({id}, {response}) => {
      request = null;
      const entries = response[1] &&
                      response[1].map(Match.read);

      return Result({id, results: entries});
    }

    return action => {
      if (action instanceof Query) {
        if (request) {
          request.abort();
        }

        const query = action.input.trim();

        if (!query) {
          address.receive(Result({id: action.id}));
        } else {
          request = new XMLHttpRequest({mozSystem: true});
          request.open('GET', `https://ac.duckduckgo.com/ac/?q=${query}&type=list`, true);
          request.responseType = 'json';
          request.send();
          request.onload = address.pass(respond, action, request);
        }
      }
    };
  };

  exports.service = service;

});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('browser/suggestion-box',['require','exports','module','reflex','common/typed','common/style','common/class-set','./web-loader','service/history','service/search'],(require, exports, module) => {

  'use strict';

  const MAX_RESULTS = 6;

  const {html, render} = require('reflex');
  const {Record, List, Union} = require('common/typed');
  const {StyleSheet, Style} = require('common/style');
  const ClassSet = require('common/class-set');
  const Loader = require('./web-loader');
  const History = require('service/history');
  const Search = require('service/search');

  // Model

  const Suggestion = Union({
    Search: Search.Match,
    Page: History.PageMatch
  }, 'Suggestion');
  exports.Suggestion = Suggestion;

  const Model = Record({
    entries: List(Suggestion),
    selected: -1
  }, 'Suggestions');
  exports.Model = Model;

  // Action

  const SelectRelative = Record({
    offset: 0
  }, 'Suggestions.SelectRelative');
  exports.SelectRelative = SelectRelative;

  const SelectNext = Record({
    offset: 1
  }, 'Suggestions.SelectNext');
  exports.SelectNext = SelectNext;

  const SelectPrevious = Record({
    offset: -1
  }, 'Suggestions.SelectPrevious');
  exports.SelectPrevious = SelectPrevious;

  const Unselect = Record({
    index: -1
  }, 'Suggestions.Unselect');
  exports.Unselect = Unselect;

  const Clear = Record({
    description: 'reset suggestions'
  }, 'suggestions.Clear');
  exports.Clear = Clear;


  // Update

  // Selects suggestion `n` items away relative to currently seleceted suggestion.
  // Selection over suggestion entries is moved in a loop although there is extra
  // "no selection" entry between last and first suggestions. Given `n` can be negative
  // or positive in order to select suggestion before or after the current one.
  const selectRelative = (state, offset) =>
    state.update('selected', index => {
      const none = -1;
      const last = state.entries.count() - 1;
      const to = index + offset;

      return to > last ? none :
             to < none ? last :
             to;
    });


  const isntSearch = entry => !(entry instanceof Search.Match);
  const isntPage = entry => !(entry instanceof History.PageMatch);

  const updateSearch = (state, {results: matches}) => {
    const entries = state.entries.filter(isntSearch);
    const count = Math.min(matches.count(),
                           MAX_RESULTS - Math.min(MAX_RESULTS / 2, entries.count()));

    return state.merge({
      selected: -1,
      entries: entries.take(count)
                      .concat(matches.slice(0, count))
    });
  };

  const updatePage = (state, {results: matches}) => {
    const entries = state.entries.filter(isntPage);
    const count = Math.min(matches.count(),
                           MAX_RESULTS - Math.min(MAX_RESULTS / 2, entries.count()));
    const pages = matches.take(count);

    return state.merge({
      selected: -1,
      entries: entries.unshift(...pages)
                      .take(MAX_RESULTS)
    });
  };

  const clear = state => state.clear();
  exports.clear = clear;

  const update = (state, action) =>
    action instanceof SelectRelative ? selectRelative(state, action.offset) :
    action instanceof SelectNext ? selectRelative(state, 1) :
    action instanceof SelectPrevious ? selectRelative(state, -1) :
    action instanceof Unselect ? state.remove('selected') :
    action instanceof Clear ? state.clear() :
    action instanceof Search.Result ? updateSearch(state, action) :
    action instanceof History.PageResult ? updatePage(state, action) :
    state;
  exports.update = update;


  // Style

  const style = StyleSheet.create({
    container: {
      textAlign: 'center',
      width: '100vw',
      position: 'absolute',
      top: 44,
      zIndex: 43,
      height: 260,
      pointerEvents: 'none'
    },
    collapsed: {
      visibility: 'collapse'
    },
    suggestions: {
      display: 'inline-block',
      textAlign: 'left',
      width: 400,
      pointerEvents: 'all',
      backgroundColor: '#fff',
      borderRadius: 5,
      paddingTop: 20
    },
    first: {
      borderTop: 0
    },
    suggestion: {
      lineHeight: '40px',
      verticalAlign: 'middle',
      borderTop: '1px solid rgba(0,0,0,0.05)',
      cursor: 'pointer',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    selected: {
      backgroundClip: 'content-box',
      backgroundColor: 'rgba(0,0,0,0.05)'
    },
    dark: {
      borderTopColor: 'rgba(255,255,255,0.15)'
    },
    selectedDark: {
      backgroundColor: 'rgba(255,255,255,0.15)'
    },
    prefix: {
      display: 'inline-block',
      fontSize: '16px',
      fontFamily: 'FontAwesome',
      width: 30,
      textAlign: 'center'
    }
  });


  // View

  const SEARCH_ICON = '\uf002';
  const HISTORY_ICON = '\uf14e';

  const Icon = {
    'search': SEARCH_ICON,
    'history': HISTORY_ICON
  };

  const viewSuggestion = (state, selected, index, theme, address) => {
    const type = state instanceof History.PageMatch ? 'history' :
                 state instanceof Search.Match ? 'search' :
                 null;

    return html.p({
      style: Style(
        style.suggestion,
        index == selected && style.selected,
        theme.isDark ? style.dark : style.light,
        theme.isDark && index === selected && style.selectedDark
      ),
      onMouseDown: address.pass(Loader.Load, state)
    }, [
      html.span({
        key: 'suggestionprefix',
        style: style.prefix,
      }, Icon[type] || ''),
      html.span({
        key: 'suggestion'
      }, type == 'history' ? state.uri : state.title)
    ]);
  };
  exports.viewSuggestion = viewSuggestion;

  const view = (mode, state, input, theme, address) => {
    const isActive = mode != 'show-web-view' &&
                     input.isFocused &&
                     input.value !== '' &&
                     input.value;

    return html.div({
      key: 'suggestionscontainer',
      style: Style(style.container,
                   {color: theme.foreground},
                   !isActive && style.collapsed,
                   state.entries.size <= 0 && style.collapsed)
    }, [
      html.div({
        key: 'suggestions',
        style: style.suggestions
      }, state.entries.map((entry, index) => {
        return render(`suggestion@${index}`, viewSuggestion,
                      entry, state.selected, index, theme,
                      address);
      }))
    ]);
  };
  exports.view = view;
});


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('browser2/location-bar',['require','exports','module','reflex','common/style','common/keyboard','common/editable','common/focusable','common/url-helper','browser/web-input','./navigation-controls','browser/web-view','browser/suggestion-box'],(require, exports, module) => {

  'use strict';

  const {html, render} = require('reflex');
  const {StyleSheet, Style} = require('common/style');
  const {KeyBindings} = require('common/keyboard');
  const Editable = require('common/editable');
  const Focusable = require('common/focusable');
  const URI = require('common/url-helper');
  const Input = require('browser/web-input');
  const NavigationControls = require('./navigation-controls');
  const WebView = require('browser/web-view');
  const Suggestions = require('browser/suggestion-box');

  const Change = ({target}) =>
    Editable.Change({
      id: '@selected',
      value: target.value,
      selection: Editable.Selection({
        start: target.selectionStart,
        end: target.selectionEnd,
        direction: target.selectionDirection
      })
    });

  // Style

  const styleLocationBarContainer = StyleSheet.create({
    default: {
      display: 'flex',
      width: '50%',
      padding: '3px 0',
      margin: '8px 3px',
      borderRadius: '100px',
      flexBasis: '300px',
      MozWindowDragging: 'no-drag',
    }
  });

  const styleIdentityIconContainer = StyleSheet.create({
    default: {
      flexShrink: 0,
    } 
  });

  const styleIdentityIcon = StyleSheet.create({
    default: {
      width: 14,
      fontSize: '12px',
      lineHeight: '14px',
      fontFamily: 'FontIon',
      verticalAlign: 'middle',
      textAlign: 'center',
      margin: '0 3px',
    },
    lock: {
      // FIXME: font alignement issue
      fontSize: '10px',
      transform: 'translateY(-0.5px)',
    },
    displayed: {
    },
    collapsed: {
      display: 'none',
    },
  });

  const styleInput = StyleSheet.create({
    default: {
      fontSize: '12px',
      lineHeight: '14px',
      flexGrow: 1,
      fontWeight: 'lighter',
      margin: '0 3px',
    },
    displayed: {
    },
    collapsed: {
      display: 'none',
    }
  });

  const stylePrettyURL = StyleSheet.create({

    container: {
      fontSize: '12px',
      lineHeight: '14px',
      flexGrow: 1,
      fontWeight: 'lighter',
      overflow: 'hidden',
      cursor: 'text',
      margin: '0 3px',
    },
    displayed: {
    },
    collapsed: {
      display: 'none',
    },

    protocol: { opacity: 0.4 },
    username: { opacity: 0.4 },
    hostname: { opacity: 1.0 },
    pathname: { opacity: 0.4 },
    search:   { opacity: 0.4 },
    hash:     { opacity: 0.4 },

  });


  // view

  const Binding = KeyBindings({
    'up': _ => Suggestions.SelectPrevious(),
    'down': _ => Suggestions.SelectNext(),
    'enter': e => Input.Action({action: Input.Submit({value: e.target.value})}),
    'escape': e => Input.Action({action: Focusable.Blur()}),
  }, 'LocationBar.Keyboard.Action');

  const characters = {
    gear: '\uf412',
    lock: '\uf200'
  };

  const view = (loader, progress, security, navigation, page, input, suggestions, shell, theme, address) => {

    const isSecure = security && security.secure;
    const isPrivileged = loader && URI.isPrivileged(loader.uri);

    const icons = html.div({
      style: styleIdentityIconContainer.default,
    }, [
      html.div({
        key: 'gearicon',
        style: Style(styleIdentityIcon.default, isPrivileged ? styleIdentityIcon.displayed : styleIdentityIcon.collapsed),
      }, characters.gear),
      html.div({
        key: 'lockicon',
        style: Style(styleIdentityIcon.default, styleIdentityIcon.lock, isSecure ? styleIdentityIcon.displayed : styleIdentityIcon.collapsed),
      }, characters.lock),
    ]);

    const inputAddress = address.forward(action => Input.Action({action}));

    var showInput = input.isFocused;

    var prettyURLChildren = [];
    if (loader && loader.uri) {
      const url = new URL(loader.uri); // FIXME: do that directly in loader's code
      prettyURLChildren = [
        html.span({style: stylePrettyURL.protocol}, url.protocol + '//'),
        // html.span({style: stylePrettyURL.username}, url.username + '@'),
        html.span({style: stylePrettyURL.hostname}, url.hostname),
        html.span({style: stylePrettyURL.pathname}, url.pathname),
        html.span({style: stylePrettyURL.search},   url.search),
        html.span({style: stylePrettyURL.hash},     url.hash)
      ];
    } else {
      showInput = true;
    }

    const prettyURL = html.div({
      style: Style(stylePrettyURL.container, showInput ? stylePrettyURL.collapsed : stylePrettyURL.displayed),
      key: 'prettyURL',
      onMouseDown: inputAddress.pass(Focusable.Focus),
    }, prettyURLChildren);

    const editable = Editable.view({
      style: Style(
        styleInput.default,
        showInput ? styleInput.displayed : styleInput.collapsed,
        { color: theme.locationText }),
      key: 'input',
      placeholder: 'Search or enter address',
      type: 'text',
      value: suggestions.selected >= 0 ?
              suggestions.entries.get(suggestions.selected).uri :
              (input.value || ''),
      isFocused: input.isFocused,
      selection: input.selection,
      onChange: inputAddress.pass(Change),
      onFocus: inputAddress.pass(Focusable.Focused),
      onBlur: inputAddress.pass(Focusable.Blured),
      onKeyDown: address.pass(Binding)
    })

    const navButtons1 = render('NavigationControlsHistory', NavigationControls.viewHistoryButtons, shell, navigation, address);
    const navButtons2 = render('NavigationControlsLoad', NavigationControls.viewLoadButtons, shell, progress, address);

    return html.div({
      style: Style(styleLocationBarContainer.default, {
        backgroundColor: theme.locationBar,
        color: theme.locationText
      })
    }, [
        navButtons1, icons, editable, prettyURL, navButtons2
    ]);

  };

  exports.view = view;
});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('browser2/tab-button',['require','exports','module','reflex','common/style','browser2/sidetabs'],(require, exports, module) => {

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
    selected = tabCount - selected; // tabs are ordered young -> old

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


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('browser2/window-bar',['require','exports','module','reflex','common/style','./window-controls','browser2/location-bar','browser2/tab-button'],(require, exports, module) => {

  'use strict';

  const {html, render} = require('reflex')
  const {StyleSheet, Style} = require('common/style');
  const WindowControls = require('./window-controls');
  const LocationBar = require('browser2/location-bar');
  const TabButton = require('browser2/tab-button');

  // Style

  const style = StyleSheet.create({
    container: {
      MozWindowDragging: 'drag',
      display: 'flex',
      flexShrink: 0,
      alignItems: 'center',
      justifyContent: 'space-between',
      scrollSnapCoordinate: '0 0',
    }
  });

  // view

  const view = (
      shell,
      loader,
      progress,
      navigation,
      security,
      page,
      input,
      suggestions,
      selected,
      tabCount,
      showSidetabs,
      theme,
      address) => html.div({
    key: 'WindowBar',
    style: Style(style.container, {backgroundColor: theme.shell})
  },[
    render('WindowControls', WindowControls.view, shell, theme, address),
    render('LocationBar', LocationBar.view, loader, progress, security, navigation, page, input, suggestions, shell, theme, address),
    render('TabButton', TabButton.view, selected, tabCount, showSidetabs, theme, address),
  ]);
  exports.view = view;
});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('lang/functional',['require','exports','module'],(require, exports, module) => {
  'use strict';

  const compose = (...lambdas) => {
    /**
    Returns the composition of a list of functions, where each function
    consumes the return value of the function that follows. In math
    terms, composing the functions `f()`, `g()`, and `h()` produces
    `f(g(h()))`.
    Usage:

    var square = function(x) { return x * x }
    var increment = function(x) { return x + 1 }

    var f1 = compose(increment, square)
    f1(5) // => 26

    var f2 = compose(square, increment)
    f2(5) // => 36
    **/

    return (...args) => {
      var index = lambdas.length;
      var result = lambdas[--index](...args);
      while (--index >= 0) {
        result = lambdas[index](result);
      }
      return result;
    };
  };

  const partial = (lambda, ...curried) =>
    (...passed) => lambda(...curried, ...passed);

  const curry = (lambda, arity=lambda.length, curried) => {
    /**
    Returns function with implicit currying, which will continue currying until
    expected number of argument is collected. Expected number of arguments is
    determined by `lambda.length` unless it's 0. In later case function will be
    assumed to be variadic and will be curried until invoked with `0` arguments.
    Optionally `arity` of curried arguments can be overridden via second `arity`
    argument.
    ## Examples
       var sum = curry(function(a, b) {
         return a + b
       })
       console.log(sum(2, 2)) // 4
       console.log(sum(2)(4)) // 6
       var sum = curry(function() {
         return Array.prototype.reduce.call(arguments, function(sum, number) {
           return sum + number
         }, 0)
       })
       console.log(sum(2, 2)()) // 4
       console.log(sum(2, 4, 5)(-3)(1)()) // 9
    **/
    return (...passed) => {
      const args = curried ? [...curried, ...passed] : passed;
      return args.length >= arity ? lambda(...args) : curry(lambda, arity, args);
    }
  };

  const arity = (n, f) => (...params) => f(...params.slice(0, n));


  const invokerFrom = (name, object) => (...args) => object[name](...args);
  const invokerOf = name => (object, ...args) => object[name](...args);

  const identity = value => value;

  const constant = value => () => value;

  const True = constant(true);
  const False = constant(false);

  const not = f => (...args) => !f(...args);
  const and = (...ps) => (...params) => ps.every(p => p(...params));
  const or = (...ps) => (...params) => ps.some(p => p(...params));


  const scheduler = task => {
    var isScheduled = false;
    const end = () => isScheduled = false;
    const schedule = () => {
      if (!isScheduled) {
        task(end);
      }
    }
  }


  const throttle = (f, wait, options={}) => {
    var args = null;
    var result = null;
    var timeout = null;
    var previous = 0;
    var {leading, trailing} = options;


    const later = () => {
      previous = leading === false ? 0 : Date.now();
      timeout = null;
      result = f(...args);
      args = null;
    };

    return (...params) => {
      var now = Date.now();
      if (!previous && leading === false) previous = now;
      var remaining = wait - (now - previous);
      args = params;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = f(...args);
        args = null;
      } else if (!timeout && trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  const debounce = (f, wait, immediate) => {
    var timeout = null;
    var args = null;
    var timestamp = null;
    var result = null;

    const later = (...args) => {
      var last = Date.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = f(...args);
          if (!timeout) args = null;
        }
      }
    };

    return (...params) => {
      args = params;
      timestamp = Date.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = f(...args);
        args = null;
      }

      return result;
    }
  }

  exports.compose = compose;
  exports.partial = partial;
  exports.curry = curry;
  exports.arity = arity;
  exports.invokerFrom = invokerFrom;
  exports.invokerOf = invokerOf;
  exports.identity = identity;
  exports.constant = constant;
  exports.True = True;
  exports.False = False;
  exports.not = not;
  exports.and = and;
  exports.or = or;

  exports.throttle = throttle;
  exports.debounce = debounce;
});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('service/gesture',['require','exports','module','common/typed'],(require, exports, module) => {

  'use strict';

  const {Record, Union} = require('common/typed');

  const Pinch = Record({
    description: 'Pinch gesture'
  });
  exports.Pinch = Pinch;

  const service = address => {

    var delta;
    var refSize;

    const checkScale = () => {
      const scale = (refSize + delta) / refSize;
      if (delta < 0 && scale < 0.5) {
        address.receive(Pinch());
      }
    }

    document.body.addEventListener('MozMagnifyGestureStart', (e) => {
      refSize = window.innerWidth / 2;
      delta = e.delta;
      checkScale();
    }, true);

    document.body.addEventListener('MozMagnifyGestureUpdate', (e) => {
      delta += e.delta;
      checkScale();
    }, true);

    document.body.addEventListener('MozMagnifyGesture', (e) => {
      delta += e.delta;
      checkScale();
    }, true);
  };

  exports.service = service;
});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('browser2/ui',['require','exports','module','common/typed','lang/functional','browser/web-view','browser/web-input','browser/web-input','service/gesture','common/url-helper','common/focusable','common/editable','service/navigation'],(require, exports, module) => {

  'use strict';

  const {Record, Any, Union} = require('common/typed');
  const {compose} = require('lang/functional');
  const WebView = require('browser/web-view');
  const Input = require('browser/web-input');
  const Shell = require('browser/web-input');
  const Gesture = require('service/gesture');
  const URI = require('common/url-helper');
  const Focusable = require('common/focusable');
  const Editable = require('common/editable');
  const Navigation = require('service/navigation');

  // Update

  const edit = (field, update) =>
    state => state.update(field, update);

  const focusInput = edit('input', Focusable.focus);
  const selectInput = edit('input', Editable.selectAll);
  const blurInput = edit('input', Focusable.blur);
  const clearInput = edit('input', Editable.clear);

  const focusShell = edit('shell', Focusable.focus);
  const blurShell = edit('shell', Focusable.blur);

  const selectViewByID = (state, id) =>
    state.set('webViews', WebView.selectByID(state.webViews, id));

  const createEmptyWebView = compose(
    focusInput,
    state => state.set('webViews', WebView.open(state.webViews, {})),
    state => state.setIn(['input', 'value'], null));

  const createWebView = (state, action) =>
    state.set('webViews', WebView.open(state.webViews, action))
         .setIn(['input', 'value'], null);

  const setInputToURIByID = (state, id) => {
    const index = WebView.indexByID(state.webViews, id);
    return state.setIn(['input', 'value'],
                       state.getIn(['webViews', 'loader', index, 'uri']));
  };

  const editWebViewByID = compose(
    selectInput,
    focusInput,
    (state, id) => setInputToURIByID(state, id));

  const selectByOffset = offset => state =>
    state.set('webViews', WebView.selectByOffset(state.webViews, offset));

  const selectNext = compose(
    blurInput,
    selectByOffset(1));

  const selectPrevious = compose(
    blurInput,
    selectByOffset(-1));

  const closeWebViewByID = compose(
    selectInput,
    focusInput,
    (state, id) =>
      state.set('webViews', WebView.closeByID(state.webViews, id)));

  const navigate = (state, value) => {
    const uri = URI.read(value);
    return state.set('webViews', WebView.load(state.webViews, {uri}));
  };

  const submit = compose(clearInput, navigate);


  const updateByWebViewAction = (state, id, action) =>
    action instanceof Focusable.Focus ? selectViewByID(state, id) :
    action instanceof Focusable.Focused ? selectViewByID(state, id) :
    action instanceof WebView.Close ? closeWebViewByID(state, id) :
    (action instanceof WebView.Open && action.uri) ? createWebView(state, action) :
    (action instanceof WebView.Open && !action.uri) ? createEmptyWebView(state) :
    action instanceof WebView.SelectNext ? selectNext(state) :
    action instanceof WebView.SelectPrevious ? selectPrevious(state) :
    state;

  const updateByInputAction = (state, action) =>
    action instanceof Input.Submit ? submit(state, action.value) :
    action instanceof Focusable.Focus ? editWebViewByID(state, null) :
    action instanceof Focusable.Focused ? editWebViewByID(state, null) :
    state;

  const update = (state, action) => {
    return action instanceof WebView.Action ?
      updateByWebViewAction(state, action.id, action.action) :
    action instanceof WebView.Open ?
      updateByWebViewAction(state, null, action) :
    action instanceof WebView.Close ?
      updateByWebViewAction(state, null, action) :
    action instanceof WebView.SelectNext ?
      updateByWebViewAction(state, null, action) :
    action instanceof WebView.SelectPrevious ?
      updateByWebViewAction(state, null, action) :
    action instanceof Input.Action ?
      updateByInputAction(state, action.action) :
    action instanceof Input.Submit ?
      updateByInputAction(state, action) :
    action instanceof Focusable.Focused ?
      focusShell(state, action) :
    action instanceof Focusable.Blured ?
      blurShell(state, action) :
    state;
  }

  exports.update = update;
});


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('browser2/browser',['require','exports','module','reflex','common/typed','common/style','common/keyboard','common/focusable','common/os','service/navigation','browser/devtools-hud','browser/web-input','browser/main','browser/web-view','browser/web-shell','browser/web-progress','browser/theme','browser2/sidetabs','browser2/window-bar','browser2/location-bar','browser2/ui','browser/suggestion-box'],(require, exports, module) => {

  'use strict';

  const {html, render, cache} = require('reflex');
  const {Record} = require('common/typed');
  const {StyleSheet, Style} = require('common/style');
  const {KeyBindings} = require('common/keyboard');
  const Focusable = require('common/focusable');
  const OS = require('common/os');

  const Navigation = require('service/navigation');

  const DevtoolsHUD = require('browser/devtools-hud');
  const Input = require('browser/web-input');
  const {Main} = require('browser/main');
  const WebView = require('browser/web-view');
  const Shell = require('browser/web-shell');
  const Progress = require('browser/web-progress');
  const Theme = require('browser/theme');

  const Sidetabs = require('browser2/sidetabs');
  const WindowBar = require('browser2/window-bar');
  const LocationBar = require('browser2/location-bar');
  const UI = require('browser2/ui');

  const Suggestions = require('browser/suggestion-box');

  // Model
  const Model = Record({
    version: '0.0.7',
    shell: Focusable.Model({isFocused: true}),
    webViews: WebView.Model,
    input: Input.Model,
    devtoolsHUD: DevtoolsHUD.Model,
    sidetabs: Sidetabs.Model,
    suggestions: Suggestions.Model,
    mode: 'show-web-view'
  });
  exports.Model = Model;

  // Actions

  const modifier = OS.platform() == 'linux' ? 'alt' : 'accel';
  const KeyDown = KeyBindings({
    'accel l': _ => Input.Action({action: Focusable.Focus()}),
    'accel t': _ => WebView.Action({action: WebView.Open()}),
    'accel 0': _ => Shell.ResetZoom(),
    'accel -': _ => Shell.ZoomOut(),
    'accel =': _ => Shell.ZoomIn(),
    'accel shift =': _ => Shell.ZoomIn(),
    'accel w': _ => WebView.Action({action: WebView.Close()}),
    'accel shift ]': _ => WebView.SelectNext(),
    'accel shift [': _ => WebView.SelectPrevious(),
    'control tab': _ => WebView.SelectPrevious(), // tabs are stored old last
    'control shift tab': _ => WebView.SelectNext(),
    'control n': _ => WebView.SelectPrevious(),
    'control p': _ => WebView.SelectNext(),
    'accel r': _ => Navigation.Reload(),
    'escape': _ => Navigation.Stop(),
    'F12': _ => DevtoolsHUD.ToggleDevtoolsHUD(),
    'control b': _ => Sidetabs.ToggleSidetabs(),
    [`${modifier} left`]: _ => Navigation.GoBack(),
    [`${modifier} right`]: _ => Navigation.GoForward()
  }, 'Browser.KeyDown.Action');


  // Update


  // Utility function takes `update` functions and attepts to handle action
  // with each one in the order they were passed until one of them returns
  // updated state in which case it returns that state and no longer calls
  // any further update functions.
  const pipeline = updaters => {
    const count = updaters.length
    return (state, action) => {
      var index = 0
      var before = state
      while (index < count) {
        const after = updaters[index](before, action)
        index = index + 1

        if (before !== after) {
          return after
        }
      }
      return state
    }
  };

  exports.update = pipeline([
    UI.update,
    (state, action) => state.set('webViews', WebView.update(state.webViews, action)), // FIXME: webview.update has a lot of overlap (but no-op) with UI.update
    (state, action) => state.set('input', Input.update(state.input, action)),
    (state, action) => state.set('devtoolsHUD', DevtoolsHUD.update(state.devtoolsHUD, action)),
    (state, action) => state.set('sidetabs', Sidetabs.update(state.sidetabs, action)),
    (state, action) => state.set('suggestions', Suggestions.update(state.suggestions, action))
  ]);


  // View

  const OpenWindow = event =>
    WebView.Action({action: WebView.Open({uri: event.detail.url}) });

  const defaultTheme = Theme.read({});

  const styleBoxes = StyleSheet.create({
    hbox: {
      display: 'flex',
    },
    vbox: {
      display: 'flex',
      flexDirection: 'column',
    },
    scrollable: {
      overflowY: 'scroll',
      scrollSnapType: 'mandatory',
      scrollSnapDestination: '0 0',
    },
    flex1: {
      flexGrow: '1',
    },
    fullVH: {
      height: '100vh'
    },
    webViewContainer: {
      scrollSnapCoordinate: '0 0',
      display: 'flex',
      flexGrow: '1',
    },
    webViewContainerBigger: {
      height: '100vh',
      flexShrink: '0',
    },
  });

  const view = (state, address) => {

    const {shell, webViews, input, suggestions} = state;
    const {loader, page, security, navigation, progress} = WebView.get(webViews, webViews.selected);
    const id = loader && loader.id;

    const tabCount = webViews.loader.count();

    const theme = page ? cache(Theme.read, page.pallet) : defaultTheme;

    const showSidetabs = state.sidetabs.showSidetabs;

    const contentCanScroll = page && page.overflow;

    const suggestionBox = render('Suggestions', Suggestions.view, 'edit-web-view', suggestions, input, theme, address);


    return Main({
      key: 'root',
      style: Style(styleBoxes.fullVH, styleBoxes.hbox),
      windowTitle: !loader ? '' :
                   !page ? loader.uri :
                   page.title || loader.uri,
      onKeyDown: address.pass(KeyDown),
      onWindowBlur: address.pass(Focusable.Blured),
      onWindowFocus: address.pass(Focusable.Focused),
      onOpenWindow: address.pass(OpenWindow),
      tabIndex: 1
    }, [
      html.div({
        key: 'scrollableBox',
        style: Style(styleBoxes.scrollable, styleBoxes.vbox, styleBoxes.flex1),
        className: 'moz-noscrollbars',
      }, [
        render('WindowBar', WindowBar.view, shell, loader, progress, navigation, security, page, input, suggestions, webViews.selected, tabCount, showSidetabs, theme, address),
        render('ProgressBars', Progress.view, 'show-web-view', webViews.loader, webViews.progress, webViews.selected, theme),
        suggestionBox,
        html.div({
          key: 'resizableVbox',
          style: Style(styleBoxes.webViewContainer, contentCanScroll && styleBoxes.webViewContainerBigger),
        }, render('WebViews', WebView.view, 'show-web-view', 'zoom', webViews.loader, webViews.shell, webViews.page, address, webViews.selected)),
        render('DevtoolsHUD', DevtoolsHUD.view, state.devtoolsHUD, address),
      ]),
      render('Sidetabs', Sidetabs.view, state.sidetabs, webViews.page, webViews.loader, webViews.progress, webViews.selected, address),
    ])
  };
  exports.view = view;
});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('lang/promise',['require','exports','module'],(require, exports, module) => {

  'use strict';

  exports.fromDOMRequest = request => new Promise((resolve, reject) => {
    request.onsuccess = event => resolve(request.result);
    request.onerror = event => reject(request.error.name);
  });

  exports.fromEvent = (target, type, capture=false) => new Promise((resolve, reject) => {
    target.addEventListener(type, {
      handleEvent(event) {
        target.removeEventListener(type, this, capture);
        resolve(event);
      }
    }, capture);
  });

});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('service/thumbnail',['require','exports','module','browser/web-view','browser/web-loader','browser/web-page','common/typed','lang/promise','common/url-helper'],(require, exports, module) => {

  'use strict';

  const WebView = require('browser/web-view');
  const Loader = require('browser/web-loader');
  const Page = require('browser/web-page');
  const {Record, Union} = require('common/typed');
  const {fromDOMRequest, fromEvent} = require('lang/promise');
  const URI = require('common/url-helper');

  const fetchScreenshot = iframe =>
    // 960 is a guestimate... we're going to guess that within that space there
    // will be content to show in the screenshot. In future, we need to center
    // screenshot on the content.
    fromDOMRequest(iframe.getScreenshot(960, 552, 'image/png'));

  const requestThumbnail = iframe => {
    // Create a promise that is rejected when iframe location is changes,
    // in order to abort task if this happens before we have a response.
    const abort = fromEvent(iframe, 'mozbrowserlocationchange')
      .then(event => Promise.reject(event));

    // Create a promise that is resolved once iframe ends loading, it will
    // be used to defer a screenshot request.
    const loaded = fromEvent(iframe, 'mozbrowserloadend');

    // We race `loaded` against `abort` and if `loaded` wins we fetch a
    // screenshot that will be our thumbnail.
    const thumbnail = Promise
      .race([abort, loaded])
      .then(_ => fetchScreenshot(iframe))
      fetchScreenshot(iframe);

    // Finally we return promise that rejects if `abort` wins and resolves to a
    // `thumbnail` if we get it before `abort`.
    return Promise.race([abort, thumbnail]);
  }

  // service

  const service = address => action => {
    if (action instanceof WebView.Action &&
        action.action instanceof Loader.LocationChanged) {
      const iframe = document.getElementById(`web-view-${action.id}`);
      const uri = iframe.location;
      const id = action.id;
      if (iframe) {
        fetchScreenshot(iframe).then(address.pass(blob => WebView.Action({
          id,
          action: Page.ThumbnailChanged({
            uri, image: URL.createObjectURL(blob)
          })
        })));
      }
    }

    return action;
  };
  exports.service = service;

});


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('browser2/session',['require','exports','module','common/typed'],(require, exports, module) => {

  'use strict';

  const {Record, Any, Union} = require('common/typed');

  // Action

  const ResetSession = Record({
    name: '@reset-session'
  }, 'Session.ResetSession');
  exports.ResetSession = ResetSession;

  exports.update = (state, action) => {
    if (action instanceof ResetSession) {
      return state.clear().merge({
        shell: {isFocused: true},
        input: {isFocused: true}
      });
    }
    return state
  };
});


/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('service/suggestion',['require','exports','module','browser/web-input','common/editable','common/focusable','service/history','service/search','lang/functional','browser/suggestion-box'],(require, exports, module) => {

  'use strict';

  const Input = require('browser/web-input');
  const Editable = require('common/editable');
  const Focusable = require('common/focusable');
  const History = require('service/history');
  const Search = require('service/search');
  const {throttle} = require('lang/functional');
  const Suggestions = require('browser/suggestion-box');

  const MAX_RESULTS = 6;

  const service = address => {
    const search = Search.service(address)
    const history = History.service(address)

    const requestSuggestions = throttle(action => {
      history(History.PageQuery({id: action.value,
                                 input: action.value,
                                 limit: MAX_RESULTS}));

      search(Search.Query({id: action.value,
                           input: action.value,
                           limit: MAX_RESULTS}));
    }, 300);

    return action => {
      history(action);

      if (action instanceof Input.Action) {
        if (action.action instanceof Focusable.Blur) {
          address.receive(Suggestions.Unselect());
        }

        if (action.action instanceof Editable.Change) {
          requestSuggestions(action.action);
        }

        if (action.action instanceof Input.Submit) {
          address.receive(Suggestions.Clear())
        }
      }
    };
  };
  exports.service = service;
});

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define('browser2/index',['require','exports','module','reflex','./browser','service/thumbnail','common/keyboard','service/navigation','./session','common/runtime','service/settings','service/pallet','service/suggestion'],(require, exports, module) => {
  'use strict';

  const {Application, Address} = require('reflex');
  const Browser = require('./browser');
  const Thumbnail = require('service/thumbnail');
  const Keyboard = require('common/keyboard');
  const Navigation = require('service/navigation');
  const Session = require('./session');
  const Runtime = require('common/runtime');
  const Settings = require('service/settings');
  const Pallet = require('service/pallet');
  const Suggestion = require('service/suggestion');

  // Set up a address (message bus if you like) that will be used
  // as an address for all application components / services. This
  // address is going to receive action and then pass it on to each
  // application component for it handle it.
  const address = new Address({
    receive(action) {
      application.receive(action);
      thumbnail(action);
      runtime(action);
      keyboard(action);
      navigation(action);
      settings(action);
      pallet(action);
      suggestion(action);
    }
  });
  window.address = address;

  const application = new Application({
    target: document.body,
    state: Browser.Model(),
    update: Browser.update,
    view: Browser.view,
    address: address
  });
  window.application = application;

  const thumbnail = Thumbnail.service(address);
  const runtime = Runtime.service(address);
  const keyboard = Keyboard.service(address);
  const navigation = Navigation.service(address);
  const settings = Settings.service(address);
  const pallet = Pallet.service(address);
  const suggestion = Suggestion.service(address);

  address.receive(Session.ResetSession());

  application.render();
});

require.config({
  baseUrl: 'node_modules/',
  nodeIdCompat: true,
  paths: {
    browser: '../src/browser',
    browser2: '../src/browser2',
    common: '../src/common',
    lang: '../src/lang',
    service: '../src/service',
    // http://facebook.github.io/react/
    react: 'react/dist/react',
    // http://facebook.github.io/immutable-js/
    // Because of the bug https://github.com/facebook/immutable-js/pull/297
    // we use forked version until it's uplifted.
    immutable: 'immutable/dist/immutable',
    'typed-immutable': 'typed-immutable/lib/',
    // https://github.com/broofa/node-uuid
    uuid: 'node-uuid/uuid',
    reflex: 'reflex/lib/index',
    pouchdb: 'pouchdb/dist/pouchdb',
    tinycolor: 'tinycolor2/tinycolor'
  },
  shim: {
    tinycolor: {
      exports: 'tinycolor'
    },
    pouchdb: {
      exports: 'PouchDB'
    }
  }
});


require(['browser2/index']);

define("../main", function(){});

