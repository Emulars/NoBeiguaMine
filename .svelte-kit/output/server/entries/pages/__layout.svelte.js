import { g as getContext, c as create_ssr_component, a as compute_rest_props, b as get_current_component, s as setContext, v as validate_component, m as missing_component, d as globals, e as spread, f as escape_attribute_value, h as escape_object, i as add_attribute, j as subscribe, n as noop, k as createEventDispatcher, l as escape$1 } from "../../chunks/index-b4318809.js";
import { f as forwardEventsBuilder, c as classMap, B as Button, A, a as classAdderBuilder, D as Div, S as Span, M as Main } from "../../chunks/classAdderBuilder-f812527e.js";
import { __extends, __assign, __values } from "tslib";
import { r as readable } from "../../chunks/index-6b5ffa68.js";
import { M as MediaQuery } from "../../chunks/MediaQuery-ea883436.js";
import { L as Logoh1 } from "../../chunks/LWhite-0f432e21.js";
import "mixpanel-browser";
function dispatch(element, eventType, detail, eventInit = { bubbles: true }, duplicateEventForMDC = false) {
  if (typeof Event !== "undefined" && element) {
    const event = new CustomEvent(eventType, Object.assign(Object.assign({}, eventInit), { detail }));
    element === null || element === void 0 ? void 0 : element.dispatchEvent(event);
    if (duplicateEventForMDC && eventType.startsWith("SMUI")) {
      const duplicateEvent = new CustomEvent(eventType.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, eventInit), { detail }));
      element === null || element === void 0 ? void 0 : element.dispatchEvent(duplicateEvent);
      if (duplicateEvent.defaultPrevented) {
        event.preventDefault();
      }
    }
    return event;
  }
}
var supportsCssVariables_;
function supportsCssVariables(windowObj, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }
  var CSS = windowObj.CSS;
  var supportsCssVars = supportsCssVariables_;
  if (typeof supportsCssVariables_ === "boolean" && !forceRefresh) {
    return supportsCssVariables_;
  }
  var supportsFunctionPresent = CSS && typeof CSS.supports === "function";
  if (!supportsFunctionPresent) {
    return false;
  }
  var explicitlySupportsCssVars = CSS.supports("--css-vars", "yes");
  var weAreFeatureDetectingSafari10plus = CSS.supports("(--css-vars: yes)") && CSS.supports("color", "#00000000");
  supportsCssVars = explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVars;
  }
  return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
  if (!evt) {
    return { x: 0, y: 0 };
  }
  var x = pageOffset.x, y = pageOffset.y;
  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;
  var normalizedX;
  var normalizedY;
  if (evt.type === "touchstart") {
    var touchEvent = evt;
    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
  } else {
    var mouseEvent = evt;
    normalizedX = mouseEvent.pageX - documentX;
    normalizedY = mouseEvent.pageY - documentY;
  }
  return { x: normalizedX, y: normalizedY };
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = function() {
  function MDCFoundation2(adapter) {
    if (adapter === void 0) {
      adapter = {};
    }
    this.adapter = adapter;
  }
  Object.defineProperty(MDCFoundation2, "cssClasses", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation2, "strings", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation2, "numbers", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCFoundation2, "defaultAdapter", {
    get: function() {
      return {};
    },
    enumerable: false,
    configurable: true
  });
  MDCFoundation2.prototype.init = function() {
  };
  MDCFoundation2.prototype.destroy = function() {
  };
  return MDCFoundation2;
}();
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function applyPassive$1(globalObj) {
  if (globalObj === void 0) {
    globalObj = window;
  }
  return supportsPassiveOption(globalObj) ? { passive: true } : false;
}
function supportsPassiveOption(globalObj) {
  if (globalObj === void 0) {
    globalObj = window;
  }
  var passiveSupported = false;
  try {
    var options = {
      get passive() {
        passiveSupported = true;
        return false;
      }
    };
    var handler = function() {
    };
    globalObj.document.addEventListener("test", handler, options);
    globalObj.document.removeEventListener("test", handler, options);
  } catch (err) {
    passiveSupported = false;
  }
  return passiveSupported;
}
var events = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: applyPassive$1
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function closest(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }
  var el = element;
  while (el) {
    if (matches$1(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}
function matches$1(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}
function estimateScrollWidth(element) {
  var htmlEl = element;
  if (htmlEl.offsetParent !== null) {
    return htmlEl.scrollWidth;
  }
  var clone = htmlEl.cloneNode(true);
  clone.style.setProperty("position", "absolute");
  clone.style.setProperty("transform", "translate(-9999px, -9999px)");
  document.documentElement.appendChild(clone);
  var scrollWidth = clone.scrollWidth;
  document.documentElement.removeChild(clone);
  return scrollWidth;
}
var ponyfill = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest,
  matches: matches$1,
  estimateScrollWidth
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses$1 = {
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
};
var strings$1 = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
};
var numbers$1 = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ACTIVATION_EVENT_TYPES = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
];
var POINTER_DEACTIVATION_EVENT_TYPES = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
];
var activatedTargets = [];
var MDCRippleFoundation = function(_super) {
  __extends(MDCRippleFoundation2, _super);
  function MDCRippleFoundation2(adapter) {
    var _this = _super.call(this, __assign(__assign({}, MDCRippleFoundation2.defaultAdapter), adapter)) || this;
    _this.activationAnimationHasEnded = false;
    _this.activationTimer = 0;
    _this.fgDeactivationRemovalTimer = 0;
    _this.fgScale = "0";
    _this.frame = { width: 0, height: 0 };
    _this.initialSize = 0;
    _this.layoutFrame = 0;
    _this.maxRadius = 0;
    _this.unboundedCoords = { left: 0, top: 0 };
    _this.activationState = _this.defaultActivationState();
    _this.activationTimerCallback = function() {
      _this.activationAnimationHasEnded = true;
      _this.runDeactivationUXLogicIfReady();
    };
    _this.activateHandler = function(e) {
      _this.activateImpl(e);
    };
    _this.deactivateHandler = function() {
      _this.deactivateImpl();
    };
    _this.focusHandler = function() {
      _this.handleFocus();
    };
    _this.blurHandler = function() {
      _this.handleBlur();
    };
    _this.resizeHandler = function() {
      _this.layout();
    };
    return _this;
  }
  Object.defineProperty(MDCRippleFoundation2, "cssClasses", {
    get: function() {
      return cssClasses$1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation2, "strings", {
    get: function() {
      return strings$1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation2, "numbers", {
    get: function() {
      return numbers$1;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCRippleFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        browserSupportsCssVars: function() {
          return true;
        },
        computeBoundingRect: function() {
          return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
        },
        containsEventTarget: function() {
          return true;
        },
        deregisterDocumentInteractionHandler: function() {
          return void 0;
        },
        deregisterInteractionHandler: function() {
          return void 0;
        },
        deregisterResizeHandler: function() {
          return void 0;
        },
        getWindowPageOffset: function() {
          return { x: 0, y: 0 };
        },
        isSurfaceActive: function() {
          return true;
        },
        isSurfaceDisabled: function() {
          return true;
        },
        isUnbounded: function() {
          return true;
        },
        registerDocumentInteractionHandler: function() {
          return void 0;
        },
        registerInteractionHandler: function() {
          return void 0;
        },
        registerResizeHandler: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        updateCssVariable: function() {
          return void 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCRippleFoundation2.prototype.init = function() {
    var _this = this;
    var supportsPressRipple = this.supportsPressRipple();
    this.registerRootHandlers(supportsPressRipple);
    if (supportsPressRipple) {
      var _a = MDCRippleFoundation2.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
      requestAnimationFrame(function() {
        _this.adapter.addClass(ROOT_1);
        if (_this.adapter.isUnbounded()) {
          _this.adapter.addClass(UNBOUNDED_1);
          _this.layoutInternal();
        }
      });
    }
  };
  MDCRippleFoundation2.prototype.destroy = function() {
    var _this = this;
    if (this.supportsPressRipple()) {
      if (this.activationTimer) {
        clearTimeout(this.activationTimer);
        this.activationTimer = 0;
        this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_ACTIVATION);
      }
      if (this.fgDeactivationRemovalTimer) {
        clearTimeout(this.fgDeactivationRemovalTimer);
        this.fgDeactivationRemovalTimer = 0;
        this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_DEACTIVATION);
      }
      var _a = MDCRippleFoundation2.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
      requestAnimationFrame(function() {
        _this.adapter.removeClass(ROOT_2);
        _this.adapter.removeClass(UNBOUNDED_2);
        _this.removeCssVars();
      });
    }
    this.deregisterRootHandlers();
    this.deregisterDeactivationHandlers();
  };
  MDCRippleFoundation2.prototype.activate = function(evt) {
    this.activateImpl(evt);
  };
  MDCRippleFoundation2.prototype.deactivate = function() {
    this.deactivateImpl();
  };
  MDCRippleFoundation2.prototype.layout = function() {
    var _this = this;
    if (this.layoutFrame) {
      cancelAnimationFrame(this.layoutFrame);
    }
    this.layoutFrame = requestAnimationFrame(function() {
      _this.layoutInternal();
      _this.layoutFrame = 0;
    });
  };
  MDCRippleFoundation2.prototype.setUnbounded = function(unbounded) {
    var UNBOUNDED = MDCRippleFoundation2.cssClasses.UNBOUNDED;
    if (unbounded) {
      this.adapter.addClass(UNBOUNDED);
    } else {
      this.adapter.removeClass(UNBOUNDED);
    }
  };
  MDCRippleFoundation2.prototype.handleFocus = function() {
    var _this = this;
    requestAnimationFrame(function() {
      return _this.adapter.addClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
    });
  };
  MDCRippleFoundation2.prototype.handleBlur = function() {
    var _this = this;
    requestAnimationFrame(function() {
      return _this.adapter.removeClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
    });
  };
  MDCRippleFoundation2.prototype.supportsPressRipple = function() {
    return this.adapter.browserSupportsCssVars();
  };
  MDCRippleFoundation2.prototype.defaultActivationState = function() {
    return {
      activationEvent: void 0,
      hasDeactivationUXRun: false,
      isActivated: false,
      isProgrammatic: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false
    };
  };
  MDCRippleFoundation2.prototype.registerRootHandlers = function(supportsPressRipple) {
    var e_1, _a;
    if (supportsPressRipple) {
      try {
        for (var ACTIVATION_EVENT_TYPES_1 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()) {
          var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
          this.adapter.registerInteractionHandler(evtType, this.activateHandler);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a = ACTIVATION_EVENT_TYPES_1.return))
            _a.call(ACTIVATION_EVENT_TYPES_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      if (this.adapter.isUnbounded()) {
        this.adapter.registerResizeHandler(this.resizeHandler);
      }
    }
    this.adapter.registerInteractionHandler("focus", this.focusHandler);
    this.adapter.registerInteractionHandler("blur", this.blurHandler);
  };
  MDCRippleFoundation2.prototype.registerDeactivationHandlers = function(evt) {
    var e_2, _a;
    if (evt.type === "keydown") {
      this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
    } else {
      try {
        for (var POINTER_DEACTIVATION_EVENT_TYPES_1 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()) {
          var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
          this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_1.return))
            _a.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
    }
  };
  MDCRippleFoundation2.prototype.deregisterRootHandlers = function() {
    var e_3, _a;
    try {
      for (var ACTIVATION_EVENT_TYPES_2 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()) {
        var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
        this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
      }
    } catch (e_3_1) {
      e_3 = { error: e_3_1 };
    } finally {
      try {
        if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a = ACTIVATION_EVENT_TYPES_2.return))
          _a.call(ACTIVATION_EVENT_TYPES_2);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
    this.adapter.deregisterInteractionHandler("focus", this.focusHandler);
    this.adapter.deregisterInteractionHandler("blur", this.blurHandler);
    if (this.adapter.isUnbounded()) {
      this.adapter.deregisterResizeHandler(this.resizeHandler);
    }
  };
  MDCRippleFoundation2.prototype.deregisterDeactivationHandlers = function() {
    var e_4, _a;
    this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
    try {
      for (var POINTER_DEACTIVATION_EVENT_TYPES_2 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()) {
        var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
        this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
      }
    } catch (e_4_1) {
      e_4 = { error: e_4_1 };
    } finally {
      try {
        if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_2.return))
          _a.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
      } finally {
        if (e_4)
          throw e_4.error;
      }
    }
  };
  MDCRippleFoundation2.prototype.removeCssVars = function() {
    var _this = this;
    var rippleStrings = MDCRippleFoundation2.strings;
    var keys = Object.keys(rippleStrings);
    keys.forEach(function(key) {
      if (key.indexOf("VAR_") === 0) {
        _this.adapter.updateCssVariable(rippleStrings[key], null);
      }
    });
  };
  MDCRippleFoundation2.prototype.activateImpl = function(evt) {
    var _this = this;
    if (this.adapter.isSurfaceDisabled()) {
      return;
    }
    var activationState = this.activationState;
    if (activationState.isActivated) {
      return;
    }
    var previousActivationEvent = this.previousActivationEvent;
    var isSameInteraction = previousActivationEvent && evt !== void 0 && previousActivationEvent.type !== evt.type;
    if (isSameInteraction) {
      return;
    }
    activationState.isActivated = true;
    activationState.isProgrammatic = evt === void 0;
    activationState.activationEvent = evt;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== void 0 && (evt.type === "mousedown" || evt.type === "touchstart" || evt.type === "pointerdown");
    var hasActivatedChild = evt !== void 0 && activatedTargets.length > 0 && activatedTargets.some(function(target) {
      return _this.adapter.containsEventTarget(target);
    });
    if (hasActivatedChild) {
      this.resetActivationState();
      return;
    }
    if (evt !== void 0) {
      activatedTargets.push(evt.target);
      this.registerDeactivationHandlers(evt);
    }
    activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
    if (activationState.wasElementMadeActive) {
      this.animateActivation();
    }
    requestAnimationFrame(function() {
      activatedTargets = [];
      if (!activationState.wasElementMadeActive && evt !== void 0 && (evt.key === " " || evt.keyCode === 32)) {
        activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
        if (activationState.wasElementMadeActive) {
          _this.animateActivation();
        }
      }
      if (!activationState.wasElementMadeActive) {
        _this.activationState = _this.defaultActivationState();
      }
    });
  };
  MDCRippleFoundation2.prototype.checkElementMadeActive = function(evt) {
    return evt !== void 0 && evt.type === "keydown" ? this.adapter.isSurfaceActive() : true;
  };
  MDCRippleFoundation2.prototype.animateActivation = function() {
    var _this = this;
    var _a = MDCRippleFoundation2.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
    var _b = MDCRippleFoundation2.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation2.numbers.DEACTIVATION_TIMEOUT_MS;
    this.layoutInternal();
    var translateStart = "";
    var translateEnd = "";
    if (!this.adapter.isUnbounded()) {
      var _c = this.getFgTranslationCoordinates(), startPoint = _c.startPoint, endPoint = _c.endPoint;
      translateStart = startPoint.x + "px, " + startPoint.y + "px";
      translateEnd = endPoint.x + "px, " + endPoint.y + "px";
    }
    this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
    clearTimeout(this.activationTimer);
    clearTimeout(this.fgDeactivationRemovalTimer);
    this.rmBoundedActivationClasses();
    this.adapter.removeClass(FG_DEACTIVATION);
    this.adapter.computeBoundingRect();
    this.adapter.addClass(FG_ACTIVATION);
    this.activationTimer = setTimeout(function() {
      _this.activationTimerCallback();
    }, DEACTIVATION_TIMEOUT_MS);
  };
  MDCRippleFoundation2.prototype.getFgTranslationCoordinates = function() {
    var _a = this.activationState, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
    var startPoint;
    if (wasActivatedByPointer) {
      startPoint = getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
    } else {
      startPoint = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      };
    }
    startPoint = {
      x: startPoint.x - this.initialSize / 2,
      y: startPoint.y - this.initialSize / 2
    };
    var endPoint = {
      x: this.frame.width / 2 - this.initialSize / 2,
      y: this.frame.height / 2 - this.initialSize / 2
    };
    return { startPoint, endPoint };
  };
  MDCRippleFoundation2.prototype.runDeactivationUXLogicIfReady = function() {
    var _this = this;
    var FG_DEACTIVATION = MDCRippleFoundation2.cssClasses.FG_DEACTIVATION;
    var _a = this.activationState, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
    var activationHasEnded = hasDeactivationUXRun || !isActivated;
    if (activationHasEnded && this.activationAnimationHasEnded) {
      this.rmBoundedActivationClasses();
      this.adapter.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer = setTimeout(function() {
        _this.adapter.removeClass(FG_DEACTIVATION);
      }, numbers$1.FG_DEACTIVATION_MS);
    }
  };
  MDCRippleFoundation2.prototype.rmBoundedActivationClasses = function() {
    var FG_ACTIVATION = MDCRippleFoundation2.cssClasses.FG_ACTIVATION;
    this.adapter.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded = false;
    this.adapter.computeBoundingRect();
  };
  MDCRippleFoundation2.prototype.resetActivationState = function() {
    var _this = this;
    this.previousActivationEvent = this.activationState.activationEvent;
    this.activationState = this.defaultActivationState();
    setTimeout(function() {
      return _this.previousActivationEvent = void 0;
    }, MDCRippleFoundation2.numbers.TAP_DELAY_MS);
  };
  MDCRippleFoundation2.prototype.deactivateImpl = function() {
    var _this = this;
    var activationState = this.activationState;
    if (!activationState.isActivated) {
      return;
    }
    var state = __assign({}, activationState);
    if (activationState.isProgrammatic) {
      requestAnimationFrame(function() {
        _this.animateDeactivation(state);
      });
      this.resetActivationState();
    } else {
      this.deregisterDeactivationHandlers();
      requestAnimationFrame(function() {
        _this.activationState.hasDeactivationUXRun = true;
        _this.animateDeactivation(state);
        _this.resetActivationState();
      });
    }
  };
  MDCRippleFoundation2.prototype.animateDeactivation = function(_a) {
    var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady();
    }
  };
  MDCRippleFoundation2.prototype.layoutInternal = function() {
    var _this = this;
    this.frame = this.adapter.computeBoundingRect();
    var maxDim = Math.max(this.frame.height, this.frame.width);
    var getBoundedRadius = function() {
      var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
      return hypotenuse + MDCRippleFoundation2.numbers.PADDING;
    };
    this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
    var initialSize = Math.floor(maxDim * MDCRippleFoundation2.numbers.INITIAL_ORIGIN_SCALE);
    if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
      this.initialSize = initialSize - 1;
    } else {
      this.initialSize = initialSize;
    }
    this.fgScale = "" + this.maxRadius / this.initialSize;
    this.updateLayoutCssVars();
  };
  MDCRippleFoundation2.prototype.updateLayoutCssVars = function() {
    var _a = MDCRippleFoundation2.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
    this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
    this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
    if (this.adapter.isUnbounded()) {
      this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      };
      this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
      this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
    }
  };
  return MDCRippleFoundation2;
}(MDCFoundation);
const { applyPassive } = events;
const { matches } = ponyfill;
function Ripple(node, { ripple = true, surface = false, unbounded = false, disabled = false, color, active, rippleElement, eventTarget, activeTarget, addClass = (className) => node.classList.add(className), removeClass = (className) => node.classList.remove(className), addStyle = (name, value) => node.style.setProperty(name, value), initPromise = Promise.resolve() } = {}) {
  let instance;
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  let oldActive = active;
  let oldEventTarget = eventTarget;
  let oldActiveTarget = activeTarget;
  function handleProps() {
    if (surface) {
      addClass("mdc-ripple-surface");
      if (color === "primary") {
        addClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      } else if (color === "secondary") {
        removeClass("smui-ripple-surface--primary");
        addClass("smui-ripple-surface--secondary");
      } else {
        removeClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      }
    } else {
      removeClass("mdc-ripple-surface");
      removeClass("smui-ripple-surface--primary");
      removeClass("smui-ripple-surface--secondary");
    }
    if (instance && oldActive !== active) {
      oldActive = active;
      if (active) {
        instance.activate();
      } else if (active === false) {
        instance.deactivate();
      }
    }
    if (ripple && !instance) {
      instance = new MDCRippleFoundation({
        addClass,
        browserSupportsCssVars: () => supportsCssVariables(window),
        computeBoundingRect: () => (rippleElement || node).getBoundingClientRect(),
        containsEventTarget: (target) => node.contains(target),
        deregisterDocumentInteractionHandler: (evtType, handler) => document.documentElement.removeEventListener(evtType, handler, applyPassive()),
        deregisterInteractionHandler: (evtType, handler) => (eventTarget || node).removeEventListener(evtType, handler, applyPassive()),
        deregisterResizeHandler: (handler) => window.removeEventListener("resize", handler),
        getWindowPageOffset: () => ({
          x: window.pageXOffset,
          y: window.pageYOffset
        }),
        isSurfaceActive: () => active == null ? matches(activeTarget || node, ":active") : active,
        isSurfaceDisabled: () => !!disabled,
        isUnbounded: () => !!unbounded,
        registerDocumentInteractionHandler: (evtType, handler) => document.documentElement.addEventListener(evtType, handler, applyPassive()),
        registerInteractionHandler: (evtType, handler) => (eventTarget || node).addEventListener(evtType, handler, applyPassive()),
        registerResizeHandler: (handler) => window.addEventListener("resize", handler),
        removeClass,
        updateCssVariable: addStyle
      });
      initPromise.then(() => {
        if (instance) {
          instance.init();
          instance.setUnbounded(unbounded);
        }
      });
    } else if (instance && !ripple) {
      initPromise.then(() => {
        if (instance) {
          instance.destroy();
          instance = void 0;
        }
      });
    }
    if (instance && (oldEventTarget !== eventTarget || oldActiveTarget !== activeTarget)) {
      oldEventTarget = eventTarget;
      oldActiveTarget = activeTarget;
      instance.destroy();
      requestAnimationFrame(() => {
        if (instance) {
          instance.init();
          instance.setUnbounded(unbounded);
        }
      });
    }
    if (!ripple && unbounded) {
      addClass("mdc-ripple-upgraded--unbounded");
    }
  }
  handleProps();
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  function layout() {
    if (instance) {
      instance.layout();
    }
  }
  return {
    update(props) {
      ({
        ripple,
        surface,
        unbounded,
        disabled,
        color,
        active,
        rippleElement,
        eventTarget,
        activeTarget,
        addClass,
        removeClass,
        addStyle,
        initPromise
      } = Object.assign({ ripple: true, surface: false, unbounded: false, disabled: false, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (className) => node.classList.add(className), removeClass: (className) => node.classList.remove(className), addStyle: (name, value) => node.style.setProperty(name, value), initPromise: Promise.resolve() }, props));
      handleProps();
    },
    destroy() {
      if (instance) {
        instance.destroy();
        instance = void 0;
        removeClass("mdc-ripple-surface");
        removeClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      }
      if (removeLayoutListener) {
        removeLayoutListener();
      }
    }
  };
}
const { Object: Object_1 } = globals;
const Button_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let actionProp;
  let defaultProp;
  let secondaryProp;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "variant",
    "touch",
    "href",
    "action",
    "defaultAction",
    "secondary",
    "component",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style: style2 = "" } = $$props;
  let { ripple = true } = $$props;
  let { color = "primary" } = $$props;
  let { variant = "text" } = $$props;
  let { touch = false } = $$props;
  let { href = void 0 } = $$props;
  let { action = "close" } = $$props;
  let { defaultAction = false } = $$props;
  let { secondary = false } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let context = getContext("SMUI:button:context");
  let { component = href == null ? Button : A } = $$props;
  let previousDisabled = $$restProps.disabled;
  setContext("SMUI:label:context", "button");
  setContext("SMUI:icon:context", "button");
  function addClass(className2) {
    if (!internalClasses[className2]) {
      internalClasses[className2] = true;
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style2 !== void 0)
    $$bindings.style(style2);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.defaultAction === void 0 && $$bindings.defaultAction && defaultAction !== void 0)
    $$bindings.defaultAction(defaultAction);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    actionProp = context === "dialog:action" && action != null ? { "data-mdc-dialog-action": action } : { action: $$props.action };
    defaultProp = context === "dialog:action" && defaultAction ? { "data-mdc-dialog-button-default": "" } : { default: $$props.default };
    secondaryProp = context === "banner" ? {} : { secondary: $$props.secondary };
    {
      if (previousDisabled !== $$restProps.disabled) {
        getElement().blur();
        previousDisabled = $$restProps.disabled;
      }
    }
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render($$result, Object_1.assign({
      use: [
        [
          Ripple,
          {
            ripple,
            unbounded: false,
            color,
            disabled: !!$$restProps.disabled,
            addClass,
            removeClass,
            addStyle
          }
        ],
        forwardEvents,
        ...use
      ]
    }, {
      class: classMap({
        [className]: true,
        "mdc-button": true,
        "mdc-button--raised": variant === "raised",
        "mdc-button--unelevated": variant === "unelevated",
        "mdc-button--outlined": variant === "outlined",
        "smui-button--color-secondary": color === "secondary",
        "mdc-button--touch": touch,
        "mdc-card__action": context === "card:action",
        "mdc-card__action--button": context === "card:action",
        "mdc-dialog__button": context === "dialog:action",
        "mdc-top-app-bar__navigation-icon": context === "top-app-bar:navigation",
        "mdc-top-app-bar__action-item": context === "top-app-bar:action",
        "mdc-snackbar__action": context === "snackbar:actions",
        "mdc-banner__secondary-action": context === "banner" && secondary,
        "mdc-banner__primary-action": context === "banner" && !secondary,
        "mdc-tooltip__action": context === "tooltip:rich-actions",
        ...internalClasses
      })
    }, {
      style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style2]).join(" ")
    }, actionProp, defaultProp, secondaryProp, { href }, $$restProps, { this: element }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `<div class="${"mdc-button__ripple"}"></div>
  ${slots.default ? slots.default({}) : ``}${touch ? `<div class="${"mdc-button__touch"}"></div>` : ``}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  FIXED_CLASS: "mdc-top-app-bar--fixed",
  FIXED_SCROLLED_CLASS: "mdc-top-app-bar--fixed-scrolled",
  SHORT_CLASS: "mdc-top-app-bar--short",
  SHORT_COLLAPSED_CLASS: "mdc-top-app-bar--short-collapsed",
  SHORT_HAS_ACTION_ITEM_CLASS: "mdc-top-app-bar--short-has-action-item"
};
var numbers = {
  DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
  MAX_TOP_APP_BAR_HEIGHT: 128
};
var strings = {
  ACTION_ITEM_SELECTOR: ".mdc-top-app-bar__action-item",
  NAVIGATION_EVENT: "MDCTopAppBar:nav",
  NAVIGATION_ICON_SELECTOR: ".mdc-top-app-bar__navigation-icon",
  ROOT_SELECTOR: ".mdc-top-app-bar",
  TITLE_SELECTOR: ".mdc-top-app-bar__title"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCTopAppBarBaseFoundation = function(_super) {
  __extends(MDCTopAppBarBaseFoundation2, _super);
  function MDCTopAppBarBaseFoundation2(adapter) {
    return _super.call(this, __assign(__assign({}, MDCTopAppBarBaseFoundation2.defaultAdapter), adapter)) || this;
  }
  Object.defineProperty(MDCTopAppBarBaseFoundation2, "strings", {
    get: function() {
      return strings;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTopAppBarBaseFoundation2, "cssClasses", {
    get: function() {
      return cssClasses;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTopAppBarBaseFoundation2, "numbers", {
    get: function() {
      return numbers;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(MDCTopAppBarBaseFoundation2, "defaultAdapter", {
    get: function() {
      return {
        addClass: function() {
          return void 0;
        },
        removeClass: function() {
          return void 0;
        },
        hasClass: function() {
          return false;
        },
        setStyle: function() {
          return void 0;
        },
        getTopAppBarHeight: function() {
          return 0;
        },
        notifyNavigationIconClicked: function() {
          return void 0;
        },
        getViewportScrollY: function() {
          return 0;
        },
        getTotalActionItems: function() {
          return 0;
        }
      };
    },
    enumerable: false,
    configurable: true
  });
  MDCTopAppBarBaseFoundation2.prototype.handleTargetScroll = function() {
  };
  MDCTopAppBarBaseFoundation2.prototype.handleWindowResize = function() {
  };
  MDCTopAppBarBaseFoundation2.prototype.handleNavigationClick = function() {
    this.adapter.notifyNavigationIconClicked();
  };
  return MDCTopAppBarBaseFoundation2;
}(MDCFoundation);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var INITIAL_VALUE = 0;
var MDCTopAppBarFoundation = function(_super) {
  __extends(MDCTopAppBarFoundation2, _super);
  function MDCTopAppBarFoundation2(adapter) {
    var _this = _super.call(this, adapter) || this;
    _this.wasDocked = true;
    _this.isDockedShowing = true;
    _this.currentAppBarOffsetTop = 0;
    _this.isCurrentlyBeingResized = false;
    _this.resizeThrottleId = INITIAL_VALUE;
    _this.resizeDebounceId = INITIAL_VALUE;
    _this.lastScrollPosition = _this.adapter.getViewportScrollY();
    _this.topAppBarHeight = _this.adapter.getTopAppBarHeight();
    return _this;
  }
  MDCTopAppBarFoundation2.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
    this.adapter.setStyle("top", "");
  };
  MDCTopAppBarFoundation2.prototype.handleTargetScroll = function() {
    var currentScrollPosition = Math.max(this.adapter.getViewportScrollY(), 0);
    var diff = currentScrollPosition - this.lastScrollPosition;
    this.lastScrollPosition = currentScrollPosition;
    if (!this.isCurrentlyBeingResized) {
      this.currentAppBarOffsetTop -= diff;
      if (this.currentAppBarOffsetTop > 0) {
        this.currentAppBarOffsetTop = 0;
      } else if (Math.abs(this.currentAppBarOffsetTop) > this.topAppBarHeight) {
        this.currentAppBarOffsetTop = -this.topAppBarHeight;
      }
      this.moveTopAppBar();
    }
  };
  MDCTopAppBarFoundation2.prototype.handleWindowResize = function() {
    var _this = this;
    if (!this.resizeThrottleId) {
      this.resizeThrottleId = setTimeout(function() {
        _this.resizeThrottleId = INITIAL_VALUE;
        _this.throttledResizeHandler();
      }, numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
    }
    this.isCurrentlyBeingResized = true;
    if (this.resizeDebounceId) {
      clearTimeout(this.resizeDebounceId);
    }
    this.resizeDebounceId = setTimeout(function() {
      _this.handleTargetScroll();
      _this.isCurrentlyBeingResized = false;
      _this.resizeDebounceId = INITIAL_VALUE;
    }, numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
  };
  MDCTopAppBarFoundation2.prototype.checkForUpdate = function() {
    var offscreenBoundaryTop = -this.topAppBarHeight;
    var hasAnyPixelsOffscreen = this.currentAppBarOffsetTop < 0;
    var hasAnyPixelsOnscreen = this.currentAppBarOffsetTop > offscreenBoundaryTop;
    var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen;
    if (partiallyShowing) {
      this.wasDocked = false;
    } else {
      if (!this.wasDocked) {
        this.wasDocked = true;
        return true;
      } else if (this.isDockedShowing !== hasAnyPixelsOnscreen) {
        this.isDockedShowing = hasAnyPixelsOnscreen;
        return true;
      }
    }
    return partiallyShowing;
  };
  MDCTopAppBarFoundation2.prototype.moveTopAppBar = function() {
    if (this.checkForUpdate()) {
      var offset = this.currentAppBarOffsetTop;
      if (Math.abs(offset) >= this.topAppBarHeight) {
        offset = -numbers.MAX_TOP_APP_BAR_HEIGHT;
      }
      this.adapter.setStyle("top", offset + "px");
    }
  };
  MDCTopAppBarFoundation2.prototype.throttledResizeHandler = function() {
    var currentHeight = this.adapter.getTopAppBarHeight();
    if (this.topAppBarHeight !== currentHeight) {
      this.wasDocked = false;
      this.currentAppBarOffsetTop -= this.topAppBarHeight - currentHeight;
      this.topAppBarHeight = currentHeight;
    }
    this.handleTargetScroll();
  };
  return MDCTopAppBarFoundation2;
}(MDCTopAppBarBaseFoundation);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFixedTopAppBarFoundation = function(_super) {
  __extends(MDCFixedTopAppBarFoundation2, _super);
  function MDCFixedTopAppBarFoundation2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.wasScrolled = false;
    return _this;
  }
  MDCFixedTopAppBarFoundation2.prototype.handleTargetScroll = function() {
    var currentScroll = this.adapter.getViewportScrollY();
    if (currentScroll <= 0) {
      if (this.wasScrolled) {
        this.adapter.removeClass(cssClasses.FIXED_SCROLLED_CLASS);
        this.wasScrolled = false;
      }
    } else {
      if (!this.wasScrolled) {
        this.adapter.addClass(cssClasses.FIXED_SCROLLED_CLASS);
        this.wasScrolled = true;
      }
    }
  };
  return MDCFixedTopAppBarFoundation2;
}(MDCTopAppBarFoundation);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCShortTopAppBarFoundation = function(_super) {
  __extends(MDCShortTopAppBarFoundation2, _super);
  function MDCShortTopAppBarFoundation2(adapter) {
    var _this = _super.call(this, adapter) || this;
    _this.collapsed = false;
    _this.isAlwaysCollapsed = false;
    return _this;
  }
  Object.defineProperty(MDCShortTopAppBarFoundation2.prototype, "isCollapsed", {
    get: function() {
      return this.collapsed;
    },
    enumerable: false,
    configurable: true
  });
  MDCShortTopAppBarFoundation2.prototype.init = function() {
    _super.prototype.init.call(this);
    if (this.adapter.getTotalActionItems() > 0) {
      this.adapter.addClass(cssClasses.SHORT_HAS_ACTION_ITEM_CLASS);
    }
    this.setAlwaysCollapsed(this.adapter.hasClass(cssClasses.SHORT_COLLAPSED_CLASS));
  };
  MDCShortTopAppBarFoundation2.prototype.setAlwaysCollapsed = function(value) {
    this.isAlwaysCollapsed = !!value;
    if (this.isAlwaysCollapsed) {
      this.collapse();
    } else {
      this.maybeCollapseBar();
    }
  };
  MDCShortTopAppBarFoundation2.prototype.getAlwaysCollapsed = function() {
    return this.isAlwaysCollapsed;
  };
  MDCShortTopAppBarFoundation2.prototype.handleTargetScroll = function() {
    this.maybeCollapseBar();
  };
  MDCShortTopAppBarFoundation2.prototype.maybeCollapseBar = function() {
    if (this.isAlwaysCollapsed) {
      return;
    }
    var currentScroll = this.adapter.getViewportScrollY();
    if (currentScroll <= 0) {
      if (this.collapsed) {
        this.uncollapse();
      }
    } else {
      if (!this.collapsed) {
        this.collapse();
      }
    }
  };
  MDCShortTopAppBarFoundation2.prototype.uncollapse = function() {
    this.adapter.removeClass(cssClasses.SHORT_COLLAPSED_CLASS);
    this.collapsed = false;
  };
  MDCShortTopAppBarFoundation2.prototype.collapse = function() {
    this.adapter.addClass(cssClasses.SHORT_COLLAPSED_CLASS);
    this.collapsed = true;
  };
  return MDCShortTopAppBarFoundation2;
}(MDCTopAppBarBaseFoundation);
const TopAppBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "variant",
    "color",
    "collapsed",
    "prominent",
    "dense",
    "scrollTarget",
    "getPropStore",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value) {
    return value === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style: style2 = "" } = $$props;
  let { variant = "standard" } = $$props;
  let { color = "primary" } = $$props;
  let { collapsed = uninitializedValue } = $$props;
  const alwaysCollapsed = !isUninitializedValue(collapsed) && !!collapsed;
  if (isUninitializedValue(collapsed)) {
    collapsed = false;
  }
  let { prominent = false } = $$props;
  let { dense = false } = $$props;
  let { scrollTarget = void 0 } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  let propStoreSet;
  let propStore = readable({ variant, prominent, dense }, (set) => {
    propStoreSet = set;
  });
  let oldScrollTarget = void 0;
  let oldVariant = variant;
  function getInstance() {
    const Foundation = {
      static: MDCTopAppBarBaseFoundation,
      short: MDCShortTopAppBarFoundation,
      fixed: MDCFixedTopAppBarFoundation
    }[variant] || MDCTopAppBarFoundation;
    return new Foundation({
      hasClass,
      addClass,
      removeClass,
      setStyle: addStyle,
      getTopAppBarHeight: () => element.clientHeight,
      notifyNavigationIconClicked: () => dispatch(element, "SMUITopAppBar:nav", void 0, void 0, true),
      getViewportScrollY: () => scrollTarget == null ? window.pageYOffset : scrollTarget.scrollTop,
      getTotalActionItems: () => element.querySelectorAll(".mdc-top-app-bar__action-item").length
    });
  }
  function hasClass(className2) {
    return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
  }
  function addClass(className2) {
    if (!internalClasses[className2]) {
      internalClasses[className2] = true;
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }
  function handleTargetScroll() {
    if (instance) {
      instance.handleTargetScroll();
      if (variant === "short") {
        collapsed = "isCollapsed" in instance && instance.isCollapsed;
      }
    }
  }
  function getPropStore() {
    return propStore;
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style2 !== void 0)
    $$bindings.style(style2);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.collapsed === void 0 && $$bindings.collapsed && collapsed !== void 0)
    $$bindings.collapsed(collapsed);
  if ($$props.prominent === void 0 && $$bindings.prominent && prominent !== void 0)
    $$bindings.prominent(prominent);
  if ($$props.dense === void 0 && $$bindings.dense && dense !== void 0)
    $$bindings.dense(dense);
  if ($$props.scrollTarget === void 0 && $$bindings.scrollTarget && scrollTarget !== void 0)
    $$bindings.scrollTarget(scrollTarget);
  if ($$props.getPropStore === void 0 && $$bindings.getPropStore && getPropStore !== void 0)
    $$bindings.getPropStore(getPropStore);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    if (propStoreSet) {
      propStoreSet({ variant, prominent, dense });
    }
  }
  {
    if (oldVariant !== variant && instance) {
      oldVariant = variant;
      instance.destroy();
      internalClasses = {};
      internalStyles = {};
      instance = getInstance();
      instance.init();
    }
  }
  {
    if (instance && variant === "short" && "setAlwaysCollapsed" in instance) {
      instance.setAlwaysCollapsed(alwaysCollapsed);
    }
  }
  {
    if (oldScrollTarget !== scrollTarget) {
      if (oldScrollTarget) {
        oldScrollTarget.removeEventListener("scroll", handleTargetScroll);
      }
      if (scrollTarget) {
        scrollTarget.addEventListener("scroll", handleTargetScroll);
      }
      oldScrollTarget = scrollTarget;
    }
  }
  return `

<header${spread([
    {
      class: escape_attribute_value(classMap({
        [className]: true,
        "mdc-top-app-bar": true,
        "mdc-top-app-bar--short": variant === "short",
        "mdc-top-app-bar--short-collapsed": collapsed,
        "mdc-top-app-bar--fixed": variant === "fixed",
        "smui-top-app-bar--static": variant === "static",
        "smui-top-app-bar--color-secondary": color === "secondary",
        "mdc-top-app-bar--prominent": prominent,
        "mdc-top-app-bar--dense": dense,
        ...internalClasses
      }))
    },
    {
      style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style2]).join(" "))
    },
    escape_object($$restProps)
  ], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</header>`;
});
var Row = classAdderBuilder({
  class: "mdc-top-app-bar__row",
  component: Div
});
const Section$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "align", "toolbar", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { align = "start" } = $$props;
  let { toolbar = false } = $$props;
  let element;
  setContext("SMUI:icon-button:context", toolbar ? "top-app-bar:action" : "top-app-bar:navigation");
  setContext("SMUI:button:context", toolbar ? "top-app-bar:action" : "top-app-bar:navigation");
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.toolbar === void 0 && $$bindings.toolbar && toolbar !== void 0)
    $$bindings.toolbar(toolbar);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<section${spread([
    {
      class: escape_attribute_value(classMap({
        [className]: true,
        "mdc-top-app-bar__section": true,
        "mdc-top-app-bar__section--align-start": align === "start",
        "mdc-top-app-bar__section--align-end": align === "end"
      }))
    },
    escape_object(toolbar ? { role: "toolbar" } : {}),
    escape_object($$restProps)
  ], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</section>`;
});
classAdderBuilder({
  class: "mdc-top-app-bar__title",
  component: Span
});
const AutoAdjust$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let propStore;
  let adjustClass;
  let $$restProps = compute_rest_props($$props, ["use", "class", "topAppBar", "component", "getElement"]);
  let $propStore, $$unsubscribe_propStore = noop, $$subscribe_propStore = () => ($$unsubscribe_propStore(), $$unsubscribe_propStore = subscribe(propStore, ($$value) => $propStore = $$value), propStore);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { topAppBar } = $$props;
  let element;
  let { component = Main } = $$props;
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.topAppBar === void 0 && $$bindings.topAppBar && topAppBar !== void 0)
    $$bindings.topAppBar(topAppBar);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$subscribe_propStore(propStore = topAppBar && topAppBar.getPropStore());
    adjustClass = (() => {
      if (!propStore || $propStore.variant === "static") {
        return "";
      }
      if ($propStore.variant === "short") {
        return "mdc-top-app-bar--short-fixed-adjust";
      }
      if ($propStore.prominent && $propStore.dense) {
        return "mdc-top-app-bar--dense-prominent-fixed-adjust";
      }
      if ($propStore.prominent) {
        return "mdc-top-app-bar--prominent-fixed-adjust";
      }
      if ($propStore.dense) {
        return "mdc-top-app-bar--dense-fixed-adjust";
      }
      return "mdc-top-app-bar--fixed-adjust";
    })();
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render($$result, Object.assign({ use: [forwardEvents, ...use] }, {
      class: classMap({ [className]: true, [adjustClass]: true })
    }, $$restProps, { this: element }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_propStore();
  return $$rendered;
});
const Section = Section$1;
const AutoAdjust = AutoAdjust$1;
var Logo = "/_app/assets/LBlack-43113315.png";
var Insta = "/_app/assets/instagram-5ad92138.png";
var NavBar_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".root.svelte-8nkbwg.svelte-8nkbwg{left:0;top:0;right:0;bottom:0;display:flex}.desktop.svelte-8nkbwg .LogoP.svelte-8nkbwg{width:69px;align-items:center}.tablet.svelte-8nkbwg .LogoP.svelte-8nkbwg{width:69px;align-items:center}.mobile.svelte-8nkbwg .LogoP.svelte-8nkbwg{margin-left:-25px;width:60px;align-items:center}",
  map: null
};
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let topAppBar;
  let shown = false;
  let dispatch2 = createEventDispatcher();
  function show() {
    shown = !shown;
    dispatch2("show", shown);
  }
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `

<main>
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(min-width: 1281px)" }, {}, {
      default: ({ matches: matches2 }) => {
        return `${matches2 ? `<div class="${"root desktop svelte-8nkbwg"}">${validate_component(TopAppBar, "TopAppBar").$$render($$result, {
          variant: "standard",
          style: "box-shadow: 0 2px 10px -2px rgb(0 0 0 / 20%);",
          this: topAppBar
        }, {
          this: ($$value) => {
            topAppBar = $$value;
            $$settled = false;
          }
        }, {
          default: () => {
            return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `
                    ${validate_component(Section, "Section").$$render($$result, {}, {}, {
                  default: () => {
                    return `<a href="${"https://mountainresistance.vercel.app/"}"><img class="${"LogoP svelte-8nkbwg"}"${add_attribute("src", Logo, 0)} alt="${"My logo"}"></a>`;
                  }
                })}
            
                    
                    ${validate_component(Section, "Section").$$render($$result, { align: "end", toolbar: true }, {}, {
                  default: () => {
                    return `<a href="${"https://www.instagram.com/mountain_resistance_/"}" target="${"_blank"}" rel="${"noopener noreferrer"}"><img style="${"height: 20px; width:20px; margin-right:10px;"}"${add_attribute("src", Insta, 0)} alt="${"instagram"}"></a>
                        ${validate_component(Button_1, "Button").$$render($$result, { "aria-label": "", href: "/articles" }, {}, {
                      default: () => {
                        return `<span>Articoli</span>`;
                      }
                    })}
                        ${validate_component(Button_1, "Button").$$render($$result, { "aria-label": "", href: "/timeline" }, {}, {
                      default: () => {
                        return `<span>Cronistoria</span>`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}`;
          }
        })}
            
            ${validate_component(AutoAdjust, "AutoAdjust").$$render($$result, { topAppBar }, {}, {
          default: () => {
            return `<div class="${"container"}">${slots.default ? slots.default({}) : ``}</div>`;
          }
        })}</div>` : ``}`;
      }
    })}


    
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, {
      query: "(min-width: 481px) and (max-width: 1280px)"
    }, {}, {
      default: ({ matches: matches2 }) => {
        return `${matches2 ? `<div class="${"root tablet svelte-8nkbwg"}">${validate_component(TopAppBar, "TopAppBar").$$render($$result, {
          variant: "standard",
          style: "box-shadow: 0 2px 10px -2px rgb(0 0 0 / 20%);",
          this: topAppBar
        }, {
          this: ($$value) => {
            topAppBar = $$value;
            $$settled = false;
          }
        }, {
          default: () => {
            return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `
                    ${validate_component(Section, "Section").$$render($$result, {}, {}, {
                  default: () => {
                    return `<a href="${"https://mountainresistance.vercel.app/"}"><img class="${"LogoP svelte-8nkbwg"}"${add_attribute("src", Logo, 0)} alt="${"My logo"}"></a>`;
                  }
                })}
            
                    
                    ${validate_component(Section, "Section").$$render($$result, { align: "end", toolbar: true }, {}, {
                  default: () => {
                    return `<a href="${"https://www.instagram.com/mountain_resistance_/"}" target="${"_blank"}" rel="${"noopener noreferrer"}"><img style="${"height: 20px; width:20px; margin-right:10px;"}"${add_attribute("src", Insta, 0)} alt="${"instagram"}"></a>
                        ${validate_component(Button_1, "Button").$$render($$result, { "aria-label": "", href: "/articles" }, {}, {
                      default: () => {
                        return `<span>Articoli</span>`;
                      }
                    })}
                        ${validate_component(Button_1, "Button").$$render($$result, { "aria-label": "", href: "/timeline" }, {}, {
                      default: () => {
                        return `<span>Cronistoria</span>`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}`;
          }
        })}
            
            ${validate_component(AutoAdjust, "AutoAdjust").$$render($$result, { topAppBar }, {}, {
          default: () => {
            return `<div class="${"container"}">${slots.default ? slots.default({}) : ``}</div>`;
          }
        })}</div>` : ``}`;
      }
    })}


    
    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(max-width: 480px)" }, {}, {
      default: ({ matches: matches2 }) => {
        return `${matches2 ? `<div class="${"root mobile svelte-8nkbwg"}">${validate_component(TopAppBar, "TopAppBar").$$render($$result, {
          variant: "standard",
          style: "box-shadow: 0 2px 10px -2px rgb(0 0 0 / 20%);",
          this: topAppBar
        }, {
          this: ($$value) => {
            topAppBar = $$value;
            $$settled = false;
          }
        }, {
          default: () => {
            return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `
                    ${validate_component(Section, "Section").$$render($$result, {}, {}, {
                  default: () => {
                    return `<a href="${"https://mountainresistance.vercel.app/"}"><img class="${"LogoP svelte-8nkbwg"}"${add_attribute("src", Logo, 0)} alt="${"My logo"}"></a>`;
                  }
                })}
            
                    
                    ${validate_component(Section, "Section").$$render($$result, { align: "end", toolbar: true }, {}, {
                  default: () => {
                    return `${validate_component(Button_1, "Button").$$render($$result, { id: "icon" }, {}, {
                      default: () => {
                        return `<i class="${"fa fa-bars"}"></i>`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}
                ${shown ? `${validate_component(Row, "Row").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Section, "Section").$$render($$result, { align: "end", toolbar: true }, {}, {
                  default: () => {
                    return `<a href="${"https://www.instagram.com/mountain_resistance_/"}" target="${"_blank"}" rel="${"noopener noreferrer"}"><img style="${"height: 20px; width:20px; margin-right:10px;"}"${add_attribute("src", Insta, 0)} alt="${"instagram"}"></a>
                            ${validate_component(Button_1, "Button").$$render($$result, { "aria-label": "", href: "/articles" }, {}, {
                      default: () => {
                        return `<span>Articoli</span>`;
                      }
                    })}
                            ${validate_component(Button_1, "Button").$$render($$result, { "aria-label": "", href: "/timeline" }, {}, {
                      default: () => {
                        return `<span>Cronistoria</span>`;
                      }
                    })}`;
                  }
                })}`;
              }
            })}` : ``}`;
          }
        })}
            
            ${validate_component(AutoAdjust, "AutoAdjust").$$render($$result, { topAppBar }, {}, {
          default: () => {
            return `<div class="${"container"}">${slots.default ? slots.default({}) : ``}</div>`;
          }
        })}</div>` : ``}`;
      }
    })} 


</main>`;
  } while (!$$settled);
  return $$rendered;
});
var Map = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAABHUlEQVRIx92SsUoDQRCGf05bNY2HrVGwCPa20VdQnyJa5gX0HYI+gm+QxsZAutOXEOxMThFRyGczgWXZu+zmIogDU+zN7PfdzJ307wPIgWvgEXi3LIArIG8KPwNKqqMETpvAZyyOWbLE1lJGwOcxBbZDrKzCcSlpw3s2kXRrOfVqm5IuUiZ48t7wFdh16m1g4vUUKYI37/Ig0HPjf/CUFX1F9GUL7tROMA6sqO3U9wIrGodY6xWOB0lHzrklqQDu7HwuaStwJ3qCTsIvOo/DaIFJRgnwURLcBCcJguNkgUmGEfDhUnAT7AMfNfBP4GBpgUn6NYJ+I7gJsopV3QNrjQUmyYFnB/4C7KwE7ki6wLdld6VwR9IDer8C/7PxAyCHfsREKdQyAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA2LTEwVDA4OjE0OjM0KzAwOjAw0BDgBQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wNi0xMFQwODoxNDozNCswMDowMKFNWLkAAAAASUVORK5CYII=";
var Phone = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAA/ElEQVRIx+3VMWoCQRTG8W+DEFCwUwI2IZYpbFKKWJvaxmN4gHgAD5EDaBPUA1iksFJYSxuvoI1B5G/zkHUZQ9wZK/N1wzzej515uyv955oA35xnB7z79HxIrd9S60dJjZDA1lFTCgmsHTW1kMDSBQCFUMDUURNL+vF5ilOAJ2CfmKIY8LoDFzKy5qvgzQ1oGLABKsEBQyaGDG4FVIGtId1bIR0DDkD7Qk0OyPsgvQTSTe2VgIXtzYFPoH/1twv4SIztEKhY8xh3dlmPa5OYrhW/JOtxvQBj/pDMd2JQHfhKvfEXgcgDKktqSWpKepX0LKkoaRZFkdc/5M5yBEkzW7VXIuTNAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA2LTEwVDA4OjM0OjEwKzAwOjAwPhZ6qgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wNi0xMFQwODozNDoxMCswMDowME9LwhYAAAAASUVORK5CYII=";
var At = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAABoElEQVRIx9WVP0sDQRDFZyOoEOw1WBtt/Q7pJIdoo1Wwyp9vEMFCIX4VBStrQdMramVhtBX7KMQiPwufOpybS05sHFiWe29m3+7szJ7Zf7eQRQLTZrZpZomZrZrZgqgnM7sys1MzOwkhvOVWBtaBR8bbA5DkWTgAB8BQC1wDDaAMFDXKwm7kMwT2gTCJwIGCBkAdKGT4FiQ0UMz+JGkZKqCS49QV4E2xySinaeUToJ7iEqAL9DW6QDXl01RsT8XxQ2Db5bzg8MOMC+6k0vV5J1sxgWORjdTO0fHbwIJGWxj+JEBL2FFMoCdyyWFdYe2I/664C4ctC7uPCfRFFiPYfMR/XlzfYcU05kuQjEKJ1feU5q8NhRBe0pgXeNa86LArzTsRgZrb+azmGUGDWIqOdLymw6qpSy5p7LpLRs05B+zp+zImMKpMOxllejYCX48J+EZrpLgqcOEa7RxYE1cD7oBXbW5z5E2q7nM/FbmMj1cRibTIeOx+KxAk8vlc30poxffIXwglrrszLWudSX6ZG/b9yyyZa6KvRUIY/6P5t/YOhxvhCz+o91UAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDYtMTBUMDg6Mzc6NDArMDA6MDCdwc/NAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA2LTEwVDA4OjM3OjQwKzAwOjAw7Jx3cQAAAABJRU5ErkJggg==";
var footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.disposition_contact.svelte-tkg656.svelte-tkg656.svelte-tkg656{font-family:"Roboto Light", sans-serif;text-align:left;display:flex;justify-content:space-between;width:290px}.disposition.svelte-tkg656.svelte-tkg656.svelte-tkg656{font-family:"Roboto Light", sans-serif;text-align:left}.iconf.svelte-tkg656.svelte-tkg656.svelte-tkg656,a.svelte-tkg656.svelte-tkg656.svelte-tkg656{margin:10px}.iconf.svelte-tkg656.svelte-tkg656.svelte-tkg656{display:flex;align-items:center;justify-content:left;height:24px;width:100%}.iconf-mobile.svelte-tkg656.svelte-tkg656.svelte-tkg656{display:flex;align-items:center;justify-content:center;width:100%}.footer.svelte-tkg656.svelte-tkg656.svelte-tkg656{bottom:0;width:100%;height:100%;margin:0px 0px 0px 0px;background-color:#5daca7;color:white;text-align:center;padding-top:30px;padding-bottom:15px}.block.svelte-tkg656.svelte-tkg656.svelte-tkg656{display:flex;justify-content:space-around;align-items:center;width:100%;height:100%;color:white;font-size:15px}.links.svelte-tkg656.svelte-tkg656.svelte-tkg656{color:white;text-decoration:none}.logoFooter.svelte-tkg656.svelte-tkg656.svelte-tkg656{width:150px;margin:0px 0px 0px 0px;justify-content:left}.desktop.svelte-tkg656 .tablet.svelte-tkg656 hr.solid.svelte-tkg656{display:none}.mobile.svelte-tkg656 hr.solid.svelte-tkg656.svelte-tkg656{border-top:1px solid #ffffff;width:250px}.mobile.svelte-tkg656 .block.svelte-tkg656.svelte-tkg656{display:flex;align-items:center;width:100%;height:100%;color:white;font-size:20px;flex-direction:column;justify-content:center;flex-wrap:nowrap;text-align:center}.mobile.svelte-tkg656 .logoFooter.svelte-tkg656.svelte-tkg656{width:150px;justify-content:center}.mobile.svelte-tkg656 .disposition.svelte-tkg656.svelte-tkg656{font-family:"Roboto Light", sans-serif;text-align:center}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<main>
	${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(min-width: 1281px)" }, {}, {
    default: ({ matches: matches2 }) => {
      return `${matches2 ? `<div class="${"root desktop svelte-tkg656"}"><div class="${"footer svelte-tkg656"}"><span class="${"block svelte-tkg656"}"><div class="${"disposition_contact svelte-tkg656"}"><div><img class="${"logoFooter svelte-tkg656"}"${add_attribute("src", Logoh1, 0)} alt="${"My logo"}"></div>
						<div><hr class="${"solid svelte-tkg656"}">
							<p><b>MENU</b></p>
				
							<a class="${"links svelte-tkg656"}" href="${"/articles"}">Articoli</a><br><br>
							<a class="${"links svelte-tkg656"}" href="${"/timeline_parallax"}">Cronostoria</a><br><br>
							<a class="${"links svelte-tkg656"}" href="${"/whoami"}">Chi siamo</a></div></div>

					<div class="${"disposition svelte-tkg656"}"><hr class="${"solid svelte-tkg656"}">
						<p><b>CONTATTI</b></p>
						<div class="${"iconf svelte-tkg656"}"><img style="${"height: 20px; width:20px; margin-right:10px;"}"${add_attribute("src", Map, 0)} alt="${"address"}">
							<p>indirizzo sede amministrativa</p></div>
						<div class="${"iconf svelte-tkg656"}"><img style="${"height: 20px; width:20px; margin-right:10px;"}"${add_attribute("src", Phone, 0)} alt="${"number"}">
							<p>(+39) 342 1234567</p></div>
						<div class="${"iconf svelte-tkg656"}"><img style="${"height: 20px; width:20px; margin-right:10px;"}"${add_attribute("src", At, 0)} alt="${"email"}">
							<p>info@mountance.it</p></div></div></span></div></div>` : ``}`;
    }
  })}

	
	${validate_component(MediaQuery, "MediaQuery").$$render($$result, {
    query: "(min-width: 541px) and (max-width: 1280px)"
  }, {}, {
    default: ({ matches: matches2 }) => {
      return `${matches2 ? `<div class="${"root tablet svelte-tkg656"}"><div class="${"footer svelte-tkg656"}"><span class="${"block svelte-tkg656"}"><div class="${"disposition_contact svelte-tkg656"}"><div><img class="${"logoFooter svelte-tkg656"}"${add_attribute("src", Logoh1, 0)} alt="${"My logo"}"></div>
						<div><hr class="${"solid svelte-tkg656"}">
							<p><b>MENU</b></p>
				
							<a class="${"links svelte-tkg656"}" href="${"/articles"}">Articoli</a><br><br>
							<a class="${"links svelte-tkg656"}" href="${"/timeline_parallax"}">Cronostoria</a><br><br>
							<a class="${"links svelte-tkg656"}" href="${"/whoami"}">Chi siamo</a></div></div>

					<div class="${"disposition svelte-tkg656"}"><hr class="${"solid svelte-tkg656"}">
						<p><b>CONTATTI</b></p>
						<div class="${"iconf svelte-tkg656"}"><img style="${"height: 20px; width:20px; margin-right:10px;"}"${add_attribute("src", Map, 0)} alt="${"address"}">
							<p>indirizzo sede amministrativa</p></div>
						<div class="${"iconf svelte-tkg656"}"><img style="${"height: 20px; width:20px; margin-right:10px;"}"${add_attribute("src", Phone, 0)} alt="${"number"}">
							<p>(+39) 342 1234567</p></div>
						<div class="${"iconf svelte-tkg656"}"><img style="${"height: 20px; width:20px; margin-right:10px;"}"${add_attribute("src", At, 0)} alt="${"email"}">
							<p>info@mountance.it</p></div></div></span></div></div>` : ``}`;
    }
  })}

	
	${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(max-width: 540px)" }, {}, {
    default: ({ matches: matches2 }) => {
      return `${matches2 ? `<div class="${"root mobile svelte-tkg656"}"><div class="${"footer svelte-tkg656"}"><span class="${"block svelte-tkg656"}"><img class="${"logoFooter svelte-tkg656"}"${add_attribute("src", Logoh1, 0)} alt="${"My logo"}">

					<div class="${"disposition svelte-tkg656"}"><hr class="${"solid svelte-tkg656"}">
						<p><b>MENU</b></p>
			
						<a class="${"links svelte-tkg656"}" href="${"/articles"}">Articoli</a><br><br>
						<a class="${"links svelte-tkg656"}" href="${"/timeline_parallax"}">Cronostoria</a><br><br>
						<a class="${"links svelte-tkg656"}" href="${"/whoami"}">Chi siamo</a></div>

					<div class="${"disposition svelte-tkg656"}"><hr class="${"solid svelte-tkg656"}">
						<p><b>CONTATTI</b></p>
						<div class="${"iconf-mobile svelte-tkg656"}"><img style="${"height: 20px; width:20px; margin-right:10px;"}"${add_attribute("src", Map, 0)} alt="${"address"}">
							<p style="${"width:60%"}">indirizzo sede amministrativa</p></div>
						<div class="${"iconf-mobile svelte-tkg656"}"><img style="${"height: 20px; width:20px; margin-right:10px;"}"${add_attribute("src", Phone, 0)} alt="${"number"}">
							<p>(+39) 342 1234567</p></div>
						<div class="${"iconf-mobile svelte-tkg656"}"><img style="${"height: 20px; width:20px; margin-right:10px;"}"${add_attribute("src", At, 0)} alt="${"email"}">
							<p>info@mountance.it</p></div></div></span></div></div>` : ``}`;
    }
  })} 
</main>`;
});
var cookies_svelte_svelte_type_style_lang = "";
const css = {
  code: '.content.svelte-w70jbv{width:100%;height:20px;font-size:15px;text-align:center}.text.svelte-w70jbv{margin-top:0;margin-bottom:0;text-align:center;color:white;padding-top:5px;padding-bottom:5px;background-color:#557B83;font-family:"Roboto Light", sans-serif}.link.svelte-w70jbv{text-decoration:none}',
  map: null
};
const Cookies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main>${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(min-width: 541px)" }, {}, {
    default: ({ matches: matches2 }) => {
      return `${matches2 ? `<a class="${"link svelte-w70jbv"}" href="${"/privacy&policy"}"><div class="${"content svelte-w70jbv"}"><p class="${"text svelte-w70jbv"}">Informativa sui contenuti | Informativa sulla Privacy | Informativa sui Cookies | credit*</p></div></a>` : ``}`;
    }
  })}

    ${validate_component(MediaQuery, "MediaQuery").$$render($$result, { query: "(max-width: 540px)" }, {}, {
    default: ({ matches: matches2 }) => {
      return `${matches2 ? `<a class="${"link svelte-w70jbv"}" href="${"/privacy&policy"}"><div class="${"content svelte-w70jbv"}"><p class="${"text svelte-w70jbv"}">Informativa sui contenuti | Informativa sulla Privacy | Informativa sui Cookies | credit*</p></div></a>` : ``}`;
    }
  })}    
</main>`;
});
/*! js-cookie v3.0.1 | MIT */
function assign(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target;
}
var defaultConverter = {
  read: function(value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(value) {
    return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
  }
};
function init(converter, defaultAttributes) {
  function set(key, value, attributes) {
    if (typeof document === "undefined") {
      return;
    }
    attributes = assign({}, defaultAttributes, attributes);
    if (typeof attributes.expires === "number") {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }
    key = encodeURIComponent(key).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
    var stringifiedAttributes = "";
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue;
      }
      stringifiedAttributes += "; " + attributeName;
      if (attributes[attributeName] === true) {
        continue;
      }
      stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
    }
    return document.cookie = key + "=" + converter.write(value, key) + stringifiedAttributes;
  }
  function get(key) {
    if (typeof document === "undefined" || arguments.length && !key) {
      return;
    }
    var cookies = document.cookie ? document.cookie.split("; ") : [];
    var jar = {};
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split("=");
      var value = parts.slice(1).join("=");
      try {
        var foundKey = decodeURIComponent(parts[0]);
        jar[foundKey] = converter.read(value, foundKey);
        if (key === foundKey) {
          break;
        }
      } catch (e) {
      }
    }
    return key ? jar[key] : jar;
  }
  return Object.create({
    set,
    get,
    remove: function(key, attributes) {
      set(key, "", assign({}, attributes, {
        expires: -1
      }));
    },
    withAttributes: function(attributes) {
      return init(this.converter, assign({}, this.attributes, attributes));
    },
    withConverter: function(converter2) {
      return init(assign({}, this.converter, converter2), this.attributes);
    }
  }, {
    attributes: { value: Object.freeze(defaultAttributes) },
    converter: { value: Object.freeze(converter) }
  });
}
init(defaultConverter, { path: "/" });
const Banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let choicesMerged;
  let choicesArr;
  createEventDispatcher();
  let { cookieName = null } = $$props;
  let { showEditIcon = true } = $$props;
  let shown = false;
  let { heading = "GDPR Notice" } = $$props;
  let { description = "We use cookies to offer a better browsing experience, analyze site traffic, personalize content, and serve targeted advertisements. Please review our privacy policy & cookies information page. By clicking accept, you consent to our privacy policy & use of cookies." } = $$props;
  let { categories = {
    analytics() {
    },
    tracking() {
    },
    marketing() {
    },
    necessary() {
    }
  } } = $$props;
  let { cookieConfig = {} } = $$props;
  let { choices = {} } = $$props;
  const choicesDefaults = {
    necessary: {
      label: "Necessary cookies",
      description: "Used for cookie control. Can't be turned off.",
      value: true
    },
    tracking: {
      label: "Tracking cookies",
      description: "Used for advertising purposes.",
      value: true
    },
    analytics: {
      label: "Analytics cookies",
      description: "Used to control Google Analytics, a 3rd party tool offered by Google to track user behavior.",
      value: true
    },
    marketing: {
      label: "Marketing cookies",
      description: "Used for marketing data.",
      value: true
    }
  };
  let { acceptLabel = "Accept cookies" } = $$props;
  let { settingsLabel = "Cookie settings" } = $$props;
  let { closeLabel = "Close settings" } = $$props;
  function show() {
    shown = true;
  }
  if ($$props.cookieName === void 0 && $$bindings.cookieName && cookieName !== void 0)
    $$bindings.cookieName(cookieName);
  if ($$props.showEditIcon === void 0 && $$bindings.showEditIcon && showEditIcon !== void 0)
    $$bindings.showEditIcon(showEditIcon);
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.categories === void 0 && $$bindings.categories && categories !== void 0)
    $$bindings.categories(categories);
  if ($$props.cookieConfig === void 0 && $$bindings.cookieConfig && cookieConfig !== void 0)
    $$bindings.cookieConfig(cookieConfig);
  if ($$props.choices === void 0 && $$bindings.choices && choices !== void 0)
    $$bindings.choices(choices);
  if ($$props.acceptLabel === void 0 && $$bindings.acceptLabel && acceptLabel !== void 0)
    $$bindings.acceptLabel(acceptLabel);
  if ($$props.settingsLabel === void 0 && $$bindings.settingsLabel && settingsLabel !== void 0)
    $$bindings.settingsLabel(settingsLabel);
  if ($$props.closeLabel === void 0 && $$bindings.closeLabel && closeLabel !== void 0)
    $$bindings.closeLabel(closeLabel);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  choicesMerged = Object.assign({}, choicesDefaults, choices);
  choicesArr = Object.values(choicesMerged).map((item, index) => {
    return Object.assign({}, item, { id: Object.keys(choicesMerged)[index] });
  });
  choicesArr.reduce((result, item, index, array) => {
    result[item.id] = item.value ? item.value : false;
    return result;
  }, {});
  return `${showEditIcon ? `<button class="${"cookieConsentToggle"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 512 512"}"><path d="${"M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17\n        0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13\n        35.22a132.221 132.221 0 0 0-57.79 57.81l-35.1 68.88a132.645 132.645 0 0\n        0-12.82 80.95l12.08 76.27a132.521 132.521 0 0 0 37.16 72.96l54.77\n        54.76a132.036 132.036 0 0 0 72.71 37.06l76.71 12.15c27.51 4.36 55.7-.11\n        80.53-12.76l69.13-35.21a132.273 132.273 0 0 0\n        57.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176\n        368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32\n        32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33\n        32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32\n        32-14.33 32-32 32z"}"></path></svg></button>` : ``}

${shown ? `<div class="${"cookieConsentWrapper"}"><div class="${"cookieConsent"}"><div class="${"cookieConsent__Left"}"><div class="${"cookieConsent__Content"}"><p class="${"cookieConsent__Title"}">${escape$1(heading)}</p>
        <p class="${"cookieConsent__Description"}"><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></p></div></div>
    <div class="${"cookieConsent__Right"}"><button type="${"button"}" class="${"cookieConsent__Button"}">${escape$1(settingsLabel)}</button>
      <button type="${"submit"}" class="${"cookieConsent__Button"}">${escape$1(acceptLabel)}</button></div></div></div>` : ``}

${``}`;
});
var style = "";
const banner_text = "Questo sito utilizza i cookies per semplificare e personalizzare l'esperienza di navigazione. Continuando a navigare su questo sito web o cliccando sul tasto 'Accept cookies' si accetta l'utilizzo dei cookies. <a href='./privacy&policy'>Informativa sulla privacy</a>";
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const choices = {
    necessary: {
      label: "Necessary cookies",
      description: "Used for cookie control. Can't be turned off.",
      value: true
    },
    tracking: false,
    analytics: {
      label: "Analytics cookies",
      description: "Used to control Google Analytics, a 3rd party tool offered by Google to track user behavior.",
      value: true
    },
    marketing: false
  };
  return `
${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})}


<div class="${"container"}">${slots.default ? slots.default({}) : ``}</div>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
${validate_component(Cookies, "Cookies").$$render($$result, {}, {}, {})}
${`${validate_component(Banner, "GdprBanner").$$render($$result, {
    cookieName: "cookie_banner",
    heading: "GDPR Notice",
    description: banner_text,
    acceptLabel: "Conferma preferenze",
    settingsLabel: "Preferenze",
    closeLabel: "Chiudi finestra",
    choices,
    showEditIcon: "false"
  }, {}, {})}`}`;
});
export { _layout as default };
