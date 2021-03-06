// Generated by BUCKLESCRIPT VERSION 1.7.5, PLEASE EDIT WITH CARE
'use strict';


function polyfills() {
  ((
  // remove polyfill
  (function() {
    if (!('remove' in Element.prototype)) {
      Element.prototype.remove = function() {
        if (this.parentNode) {
          this.parentNode.removeChild(this);
        }
      };
    };
  }())
  ));
  ((
  // requestAnimationFrame polyfill
  (function() {
      var lastTime = 0;
      var vendors = ['ms', 'moz', 'webkit', 'o'];
      for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
          window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
          window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                     || window[vendors[x]+'CancelRequestAnimationFrame'];
      }

      if (!window.requestAnimationFrame)
          window.requestAnimationFrame = function(callback, element) {
              var currTime = new Date().getTime();
              var timeToCall = Math.max(0, 16 - (currTime - lastTime));
              var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
              lastTime = currTime + timeToCall;
              return id;
          };

      if (!window.cancelAnimationFrame)
          window.cancelAnimationFrame = function(id) {
              clearTimeout(id);
          };
  }())
  ));
  return /* () */0;
}

var Event = 0;

var Node = 0;

var Document = 0;

var $$Date = 0;

var Window = 0;

var Location = 0;

var Json = 0;

var $$XMLHttpRequest = 0;

var FormData = 0;

exports.Event            = Event;
exports.Node             = Node;
exports.Document         = Document;
exports.$$Date           = $$Date;
exports.Window           = Window;
exports.Location         = Location;
exports.Json             = Json;
exports.$$XMLHttpRequest = $$XMLHttpRequest;
exports.FormData         = FormData;
exports.polyfills        = polyfills;
/* No side effect */
