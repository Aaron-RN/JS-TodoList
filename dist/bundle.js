!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=11)}([function(t,e,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function s(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function d(t,e){for(var n={},r=[],a=0;a<t.length;a++){var o=t[a],d=e.base?o[0]+e.base:o[0],c=n[d]||0,u="".concat(d," ").concat(c);n[d]=c+1;var l=s(u),h={css:o[1],media:o[2],sourceMap:o[3]};-1!==l?(i[l].references++,i[l].updater(h)):i.push({identifier:u,updater:g(h,e),references:1}),r.push(u)}return r}function c(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var i=o(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var u,l=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function h(t,e,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(e,a);else{var o=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}function f(t,e,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?t.setAttribute("media",a):t.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var m=null,p=0;function g(t,e){var n,r,a;if(e.singleton){var o=p++;n=m||(m=c(e)),r=h.bind(null,n,o,!1),a=h.bind(null,n,o,!0)}else n=c(e),r=f.bind(null,n,e),a=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else a()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=a());var n=d(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var a=s(n[r]);i[a].references--}for(var o=d(t,e),c=0;c<n.length;c++){var u=s(n[c]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=o}}}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var a=(i=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(d," */")),o=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(o).concat([a]).join("\n")}var i,s,d;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<t.length;s++){var d=[].concat(t[s]);r&&a[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),e.push(d))}},e}},,function(t,e,n){var r=n(0),a=n(4);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});t.exports=i},function(t,e,n){(e=n(1)(!1)).push([t.i,'html { box-sizing: border-box; }\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Used for Debugging purposes */\n*,\n*::before,\n*::after {\n  -webkit-transition-duration: 0.25s;\n  -moz-transition-duration: 0.25s;\n  transition-duration: 0.25s;\n}\n\nbody{\n  font-size: 18px;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n}\ninput[type="text"]{\n  outline: none;\n  border: 1px solid midnightblue;\n  border-radius: 8px;\n  padding: 8px;\n}\n\nh1 {\n  font-size: 44px;\n}\n\nh2 {\n  font-size: 36px;\n  margin: auto\n}\n\nh3 {\n  margin: 5px;\n  font-size: 25px;\n}\n\n.container{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.center{\n  display: block;\n  text-align: center;\n  margin: 0 auto;\n  vertical-align: middle;\n}\n.label{\n  padding: 8px;\n  margin: 12px 8px;\n}\n\n.button {\n  border-radius: 15px;\n  box-shadow: 3px 3px rgba(0,0,0,0.2);\n  padding: 8px 10px 8px 10px;\n  font-size: 24px;\n  font-weight: 500;\n  color: white;\n  background: dodgerblue;\n  cursor: pointer;\n}\n\n.button:hover{\n  border-color: goldenrod;\n  transform:scale(1.03);\n  -moz-transform:scale(1.03);\n  -webkit-transform:scale(1.03);\n  -ms-transform:scale(1.03);\n  -o-transform:scale(1.03);\n}\n\n.button-todo {\n  padding: 4px 6px 4px 6px;\n  font-size: 18px;\n}\n\n.btn-plus:before{\n  content: "+";\n  font-size: 30px;\n  font-weight: bolder;\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0 4px 4px 0;\n}\n\n.btn-plus:hover:before{\n  transform:scale(1.3);\n  -moz-transform:scale(1.3);\n  -webkit-transform:scale(1.3);\n  -ms-transform:scale(1.3);\n  -o-transform:scale(1.3);\n}\n\n.todo button, .delete-button {\n  font-size: 20px;\n  font-weight: bold;\n  border: none;\n  border-radius: 50px;\n  margin: 10px;\n}\n\n.todo button:hover, .delete-button:hover {\n  color: white;\n  background: red;\n}\n',""]),t.exports=e},function(t,e,n){var r=n(0),a=n(6);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});t.exports=i},function(t,e,n){(e=n(1)(!1)).push([t.i,".modal{\n  display: none;\n  position: fixed;\n  z-index: 999;\n  background-color: rgba(0,0,0,0.3);\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  overflow: scroll;\n  }\n\n.modal-content{\n  background: white;\n  max-width: 600px;\n  width: auto;\n  min-height: 200px;\n  border: 1px solid black;\n  border-radius: 6px;\n  box-shadow: 5px 10px rgba(0,0,0,0.2);\n  margin: 10% auto;\n  padding: 20px;\n}\n\n.exit{\n  width: 40px;\n  height: 40px;\n  padding: 8px;\n  position: relative;\n  display: block;\n  left: calc(96% - 10px);\n  color: white;\n  background-color: darkred;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.exit:hover{\n  background-color: red;\n}\n\n.show{ display: block; }\n\n.hide{ display: none; }\n",""]),t.exports=e},function(t,e,n){var r=n(0),a=n(8);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});t.exports=i},function(t,e,n){(e=n(1)(!1)).push([t.i,".projects {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: baseline;\n  margin-top: 20px;\n}\n\n.project {\n  margin: 10px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-basis: 100%;\n  border: 1px solid lightgrey;\n  border-radius: 15px;\n  box-shadow: 3px 3px rgba(0,0,0,0.2);\n}\n\n.delete-button {\n  align-self: flex-end;\n}\n\n@media (min-width: 1024px) {\n  .project {\n    flex-basis: calc(50% - 20px);\n  }\n}\n\n@media (min-width: 1200px) {\n  .project {\n    flex-basis: calc(33% - 20px);\n  }\n}\n",""]),t.exports=e},function(t,e,n){var r=n(0),a=n(10);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});t.exports=i},function(t,e,n){(e=n(1)(!1)).push([t.i,".todos {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.todo {\n  display: flex;\n  align-items: baseline;\n  border: 2px solid lightgrey;\n  border-radius: 15px;\n  box-shadow: 3px 3px rgba(0,0,0,0.2);\n  margin-bottom: 10px;\n  color: #444;\n}\n\n.todo-title {\n  font-size: 20px;\n}\n\n.todo-description {\n  font-size: 15px;\n}\n\n.todo input {\n  margin: 10px;\n  font-size: 20px;\n}\n\n.todo-card {\n  flex-grow: 1;\n}\n\n.todo .striked {\n  text-decoration: line-through;\n}\n\n.priority {\n  margin: 10px;\n  border-radius: 10px;\n  color: white;\n  font-size: 15px;\n  padding: 5px;\n}\n.priority-1 {\n  background: green;\n}\n\n.priority-1::before {\n  content: 'low';\n}\n\n.priority-2 {\n  background: orange;\n}\n\n.priority-2::before {\n  content: 'medium';\n}\n\n.priority-3 {\n  background: red;\n}\n\n.priority-3::before {\n  content: 'high';\n}\n\n.due-date {\n  font-style: italic;\n  color: #888;\n}\n",""]),t.exports=e},function(t,e,n){"use strict";n.r(e);n(3),n(5);function r(t,e){if(e.length<t)throw new TypeError(t+" argument"+t>1?"s":" required, but only "+e.length+" present")}function a(t){r(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function o(t){r(1,arguments);var e=a(t);return!isNaN(e)}var i={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function s(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var d={date:s({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:s({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:s({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},c={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function u(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=a.width?String(a.width):o;r=t.formattingValues[i]||t.formattingValues[o]}else{var s=t.defaultWidth,d=a.width?String(a.width):t.defaultWidth;r=t.values[d]||t.values[s]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function l(t){return function(e,n){var r=String(e),a=n||{},o=a.width,i=o&&t.matchPatterns[o]||t.matchPatterns[t.defaultMatchWidth],s=r.match(i);if(!s)return null;var d,c=s[0],u=o&&t.parsePatterns[o]||t.parsePatterns[t.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(u)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(u,(function(t){return t.test(r)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(u,(function(t){return t.test(r)})),d=t.valueCallback?t.valueCallback(d):d,{value:d=a.valueCallback?a.valueCallback(d):d,rest:r.slice(c.length)}}}var h,f={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof i[t]?i[t]:1===e?i[t].one:i[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:d,formatRelative:function(t,e,n,r){return c[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:u({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:u({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:u({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:u({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:u({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(h={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match(h.matchPattern);if(!a)return null;var o=a[0],i=n.match(h.parsePattern);if(!i)return null;var s=h.valueCallback?h.valueCallback(i[0]):i[0];return{value:s=r.valueCallback?r.valueCallback(s):s,rest:n.slice(o.length)}}),era:l({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:l({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:l({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:l({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:l({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function m(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function p(t,e){r(2,arguments);var n=a(t).getTime(),o=m(e);return new Date(n+o)}function g(t,e){r(2,arguments);var n=m(e);return p(t,-n)}function w(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var b={y:function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return w("yy"===e?r%100:r,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):w(n+1,2)},d:function(t,e){return w(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return w(t.getUTCHours()%12||12,e.length)},H:function(t,e){return w(t.getUTCHours(),e.length)},m:function(t,e){return w(t.getUTCMinutes(),e.length)},s:function(t,e){return w(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,r=t.getUTCMilliseconds();return w(Math.floor(r*Math.pow(10,n-3)),e.length)}};function v(t){r(1,arguments);var e=1,n=a(t),o=n.getUTCDay(),i=(o<e?7:0)+o-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function y(t){r(1,arguments);var e=a(t),n=e.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(n+1,0,4),o.setUTCHours(0,0,0,0);var i=v(o),s=new Date(0);s.setUTCFullYear(n,0,4),s.setUTCHours(0,0,0,0);var d=v(s);return e.getTime()>=i.getTime()?n+1:e.getTime()>=d.getTime()?n:n-1}function x(t){r(1,arguments);var e=y(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var a=v(n);return a}function T(t,e){r(1,arguments);var n=e||{},o=n.locale,i=o&&o.options&&o.options.weekStartsOn,s=null==i?0:m(i),d=null==n.weekStartsOn?s:m(n.weekStartsOn);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=a(t),u=c.getUTCDay(),l=(u<d?7:0)+u-d;return c.setUTCDate(c.getUTCDate()-l),c.setUTCHours(0,0,0,0),c}function C(t,e){r(1,arguments);var n=a(t,e),o=n.getUTCFullYear(),i=e||{},s=i.locale,d=s&&s.options&&s.options.firstWeekContainsDate,c=null==d?1:m(d),u=null==i.firstWeekContainsDate?c:m(i.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(o+1,0,u),l.setUTCHours(0,0,0,0);var h=T(l,e),f=new Date(0);f.setUTCFullYear(o,0,u),f.setUTCHours(0,0,0,0);var p=T(f,e);return n.getTime()>=h.getTime()?o+1:n.getTime()>=p.getTime()?o:o-1}function M(t,e){r(1,arguments);var n=e||{},a=n.locale,o=a&&a.options&&a.options.firstWeekContainsDate,i=null==o?1:m(o),s=null==n.firstWeekContainsDate?i:m(n.firstWeekContainsDate),d=C(t,e),c=new Date(0);c.setUTCFullYear(d,0,s),c.setUTCHours(0,0,0,0);var u=T(c,e);return u}var j="midnight",P="noon",k="morning",L="afternoon",E="evening",S="night";function D(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+w(o,2)}function N(t,e){return t%60==0?(t>0?"-":"+")+w(Math.abs(t)/60,2):U(t,e)}function U(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+w(Math.floor(a/60),2)+n+w(a%60,2)}var O={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return b.y(t,e)},Y:function(t,e,n,r){var a=C(t,r),o=a>0?a:1-a;return"YY"===e?w(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):w(o,e.length)},R:function(t,e){return w(y(t),e.length)},u:function(t,e){return w(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return w(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return w(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return b.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return w(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,o){var i=function(t,e){r(1,arguments);var n=a(t),o=T(n,e).getTime()-M(n,e).getTime();return Math.round(o/6048e5)+1}(t,o);return"wo"===e?n.ordinalNumber(i,{unit:"week"}):w(i,e.length)},I:function(t,e,n){var o=function(t){r(1,arguments);var e=a(t),n=v(e).getTime()-x(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(o,{unit:"week"}):w(o,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):b.d(t,e)},D:function(t,e,n){var o=function(t){r(1,arguments);var e=a(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var o=e.getTime(),i=n-o;return Math.floor(i/864e5)+1}(t);return"Do"===e?n.ordinalNumber(o,{unit:"dayOfYear"}):w(o,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return w(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return w(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return w(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?P:0===a?j:a/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?E:a>=12?L:a>=4?k:S,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return b.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):b.H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):w(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):w(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):b.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):b.s(t,e)},S:function(t,e){return b.S(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return N(a);case"XXXX":case"XX":return U(a);case"XXXXX":case"XXX":default:return U(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return N(a);case"xxxx":case"xx":return U(a);case"xxxxx":case"xxx":default:return U(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+D(a,":");case"OOOO":default:return"GMT"+U(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+D(a,":");case"zzzz":default:return"GMT"+U(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return w(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return w((r._originalDate||t).getTime(),e.length)}};function B(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function W(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var H={p:W,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],o=r[2];if(!o)return B(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",B(a,e)).replace("{{time}}",W(o,e))}};function z(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());return e.setSeconds(0,0),6e4*n+e.getTime()%6e4}var Y=["D","DD"],A=["YY","YYYY"];function q(t){return-1!==Y.indexOf(t)}function F(t){return-1!==A.indexOf(t)}function X(t){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===t)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===t)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===t)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}var _=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Q=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,G=/^'([^]*?)'?$/,R=/''/g,I=/[a-zA-Z]/;function J(t,e,n){r(2,arguments);var i=String(e),s=n||{},d=s.locale||f,c=d.options&&d.options.firstWeekContainsDate,u=null==c?1:m(c),l=null==s.firstWeekContainsDate?u:m(s.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=d.options&&d.options.weekStartsOn,p=null==h?0:m(h),w=null==s.weekStartsOn?p:m(s.weekStartsOn);if(!(w>=0&&w<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!d.localize)throw new RangeError("locale must contain localize property");if(!d.formatLong)throw new RangeError("locale must contain formatLong property");var b=a(t);if(!o(b))throw new RangeError("Invalid time value");var v=z(b),y=g(b,v),x={firstWeekContainsDate:l,weekStartsOn:w,locale:d,_originalDate:b},T=i.match(Q).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,H[e])(t,d.formatLong,x):t})).join("").match(_).map((function(t){if("''"===t)return"'";var e=t[0];if("'"===e)return $(t);var n=O[e];if(n)return!s.useAdditionalWeekYearTokens&&F(t)&&X(t),!s.useAdditionalDayOfYearTokens&&q(t)&&X(t),n(y,t,d.localize,x);if(e.match(I))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return t})).join("");return T}function $(t){return t.match(G)[1].replace(R,"'")}var V=class{constructor(t){this.id=`project_${Math.random().toString(36).substr(2,9)}`,this.title=t,this.todos=[]}addTodo(t){this.todos.push(t)}removeTodo(t){const e=this.todos.findIndex(e=>e.id===t);this.todos.splice(e,1)}toggleTodo(t){this.todos.find(e=>e.id===t).toggle()}};var K=class{constructor(t,e,n,r){this.id=`todo_${Math.random().toString(36).substr(2,9)}`,this.title=t,this.description=e,this.dueDate=n,this.priority=r,this.checked=!1}toggle(){this.checked=!this.checked}};function Z(t,e,n=""){const r=document.createElement("div");let a;return r.classList="label center",r.innerHTML=e,"textarea"===t?(a=document.createElement("textarea"),a.setAttribute("rows","4"),a.setAttribute("cols","50"),a.setAttribute("maxlength","100")):(a=document.createElement("input"),a.setAttribute("type",t)),"text"===t&&(a.setAttribute("placeholder",n),a.setAttribute("maxlength","25")),"number"!==t&&"range"!==t||(a.setAttribute("value","1"),a.setAttribute("min","1"),a.setAttribute("max","3")),a.classList="center",r.appendChild(a),r}function tt(t,e){const n=document.createElement("button");return n.classList.add("button"),n.classList.add("center"),n.setAttribute("data-button",e),n.innerHTML=t,n}var et=(()=>{let t,e,n,r,a,o,i,s,d,c,u,l,h,f,m=[];const p=t=>{e.innerHTML="",m.find(e=>e===t)||m.push(t),m.forEach(t=>{const n=document.createElement("div");n.innerHTML=t,e.appendChild(n)})},g=t=>{t.classList.add("hide")},w=t=>{t.classList.remove("hide")},b=()=>{t.classList="modal"},v=()=>{t.classList="modal show",m=[],e.innerHTML="",a.value="",d.value="",c.value="",u.value=J(new Date,"yyyy-MM-dd"),l.value=1,h.className="priority priority-1"};return{init:()=>{t=document.createElement("div"),t.classList.add("modal");const m=document.createElement("div");m.classList.add("modal-content"),e=document.createElement("div"),e.classList.add("modal-errors"),n=document.createElement("div"),n.classList.add("exit"),n.innerHTML="x",n.addEventListener("click",b),r=document.createElement("div"),r.setAttribute("id","newProject");const p=document.createElement("h2");p.innerHTML="New Project";const g=Z("text","Title","eg. Daily Chores");a=g.firstElementChild,o=tt("Add Project","New Project"),i=document.createElement("div"),i.setAttribute("id","newTodo");const w=document.createElement("h2");w.innerHTML="New Todo",s=document.createElement("input"),s.type="hidden";const v=Z("text","Title","eg. Wash car");d=v.firstElementChild;const y=Z("textarea","Description","eg. Wash the car really good");c=y.firstElementChild;const x=Z("date","Due Date");u=x.firstElementChild;const T=Z("range","Priority","1 for lowest and 3 for highest");return l=T.firstElementChild,h=document.createElement("span"),l.addEventListener("change",()=>{h.className=`priority priority-${l.value}`}),f=tt("Add Todo","New Todo"),t.appendChild(m),m.appendChild(n),m.appendChild(e),m.appendChild(r),r.appendChild(p),r.appendChild(g),r.appendChild(o),m.appendChild(i),i.appendChild(w),i.appendChild(v),i.appendChild(y),i.appendChild(x),i.appendChild(T),T.appendChild(h),i.appendChild(f),t},addValidationError:p,addProjectBtn:t=>o.addEventListener("click",t),addTodoBtn:t=>f.addEventListener("click",t),showNewProject:()=>{v(),a.focus(),g(i),w(r)},showNewTodo:t=>{s.value=t,v(),d.focus(),g(r),w(i)},hide:b,getNewProject:()=>{const t=a.value.toString();return t?new V(t):(p("Project must have a title!"),!1)},getNewTodo:()=>{let t=!1;const e=d.value.toString(),n=c.value.toString(),r=u.value,a=l.value;return e||(p("Todo must have a title!"),t=!0),!t&&{projectId:s.value,todo:new K(e,n,r.replace(/-/g,"/"),a)}}}})();n(7);var nt=class{constructor(t){this.content=document.createElement("div"),this.content.id=t.id,this.content.classList.add("project");const e=document.createElement("div");e.classList.add("todos");const n=document.createElement("h3");n.innerHTML=t.title,this.newTodoBtn=document.createElement("button"),this.newTodoBtn.classList.add("button"),this.newTodoBtn.classList.add("button-todo"),this.newTodoBtn.classList.add("btn-plus"),this.newTodoBtn.setAttribute("data-id",t.id.toString()),this.newTodoBtn.innerHTML="New Todo",this.deleteProjectBtn=document.createElement("button"),this.deleteProjectBtn.classList.add("delete-button"),this.deleteProjectBtn.innerHTML="&times;",this.content.appendChild(this.deleteProjectBtn),this.content.appendChild(n),this.content.appendChild(e),this.content.appendChild(this.newTodoBtn)}render(){document.querySelector("#projects").appendChild(this.content)}};n(9);var rt=class{constructor(t,e){this.projectId=e,this.todoContent=document.createElement("div"),this.todoContent.setAttribute("id",t.id),this.todoContent.classList.add("todo"),this.todoChecked=document.createElement("input"),this.todoChecked.classList.add("inline-block"),this.todoChecked.setAttribute("type","checkbox"),this.todoChecked.checked=t.checked;const n=document.createElement("div");n.className="todo-card",t.checked&&n.classList.add("striked");const r=document.createElement("p");r.innerHTML=t.title,r.classList.add("todo-title");const a=document.createElement("span");a.classList.add("priority"),a.classList.add(`priority-${t.priority}`),r.appendChild(a);const o=document.createElement("p");o.innerHTML=t.description,o.classList.add("todo-description"),o.classList.add("hide");const i=document.createElement("div");i.classList.add("due-date"),i.innerHTML=J(new Date(t.dueDate),"MMM do"),n.appendChild(r),n.appendChild(o),this.todoContent.appendChild(this.todoChecked),this.todoContent.appendChild(n),this.todoContent.appendChild(i),this.deleteTodoBtn=document.createElement("button"),this.deleteTodoBtn.innerHTML="&times;",this.todoContent.appendChild(this.deleteTodoBtn),n.addEventListener("click",()=>{o.classList.toggle("hide")}),this.todoChecked.addEventListener("click",()=>{n.classList.toggle("striked")})}render(){document.querySelector(`#${this.projectId} .todos`).appendChild(this.todoContent)}};new class{constructor(t){this.projectList=t,this.modal=et,this.modalDiv=this.modal.init(),this.content=document.createElement("div"),this.content.setAttribute("id","main"),this.content.classList.add("container");const e=document.createElement("h1");e.innerHTML="Todo List",this.newProjectBtn=document.createElement("button"),this.newProjectBtn.id="new-project",this.newProjectBtn.classList.add("button"),this.newProjectBtn.classList.add("btn-plus"),this.newProjectBtn.innerHTML="New Project",this.newProjectBtn.addEventListener("click",this.modal.showNewProject);const n=document.createElement("div");n.id="projects",n.classList.add("projects"),this.content.appendChild(e),this.content.appendChild(this.newProjectBtn),this.content.appendChild(n),this.modal.addProjectBtn(()=>{const t=this.modal.getNewProject();t&&(this.projectList.addProject(t),this.renderNewProject(t),this.modal.hide())}),this.modal.addTodoBtn(()=>{const{todo:t,projectId:e}=this.modal.getNewTodo();t&&e&&(this.projectList.getProject(e).addTodo(t),this.projectList.save(),this.renderNewTodo(t,e),this.modal.hide())})}renderNewTodo(t,e){const n=new rt(t,e);n.todoChecked.addEventListener("click",()=>{this.projectList.getProject(e).toggleTodo(t.id),this.projectList.save()}),n.deleteTodoBtn.addEventListener("click",()=>{const r=this.projectList.getProject(e);n.todoContent.remove(),r.removeTodo(t.id),this.projectList.save()}),n.render()}renderNewProject(t){const e=new nt(t);e.newTodoBtn.addEventListener("click",t=>{const e=t.target.parentNode.id;this.modal.showNewTodo(e)}),e.deleteProjectBtn.addEventListener("click",t=>{const n=t.target.parentNode.id;e.content.remove(),this.projectList.removeProject(n)}),e.render(),t.todos.forEach(e=>{this.renderNewTodo(e,t.id)})}render(){document.body.appendChild(this.modalDiv),document.body.appendChild(this.content),this.projectList.projects.forEach(t=>{this.renderNewProject(t)})}}(new class{constructor(){const t=localStorage.getItem("projects");this.projects=t?JSON.parse(t).map(t=>{const e=Object.assign(new V,t);return e.todos=e.todos.map(t=>Object.assign(new K,t)),e}):[]}getProject(t){return this.projects.find(e=>e.id===t)}addProject(t){this.projects.push(t),this.save()}removeProject(t){const e=this.projects.findIndex(e=>e.id===t);this.projects.splice(e,1),this.save()}save(){localStorage.setItem("projects",JSON.stringify(this.projects))}}).render()}]);