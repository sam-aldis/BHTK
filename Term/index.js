"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve4, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve4(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/.pnpm/xterm@5.1.0/node_modules/xterm/lib/xterm.js
  var require_xterm = __commonJS({
    "node_modules/.pnpm/xterm@5.1.0/node_modules/xterm/lib/xterm.js"(exports, module) {
      !function(e, t) {
        if ("object" == typeof exports && "object" == typeof module)
          module.exports = t();
        else if ("function" == typeof define && define.amd)
          define([], t);
        else {
          var i = t();
          for (var s in i)
            ("object" == typeof exports ? exports : e)[s] = i[s];
        }
      }(self, function() {
        return (() => {
          "use strict";
          var e = { 4567: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.AccessibilityManager = void 0;
            const s2 = i2(9042), r = i2(6114), n = i2(9924), o = i2(3656), a = i2(844), h = i2(5596), c = i2(9631);
            class l extends a.Disposable {
              constructor(e3, t3) {
                super(), this._terminal = e3, this._renderService = t3, this._liveRegionLineCount = 0, this._charsToConsume = [], this._charsToAnnounce = "", this._accessibilityTreeRoot = document.createElement("div"), this._accessibilityTreeRoot.classList.add("xterm-accessibility"), this._accessibilityTreeRoot.tabIndex = 0, this._rowContainer = document.createElement("div"), this._rowContainer.setAttribute("role", "list"), this._rowContainer.classList.add("xterm-accessibility-tree"), this._rowElements = [];
                for (let e4 = 0; e4 < this._terminal.rows; e4++)
                  this._rowElements[e4] = this._createAccessibilityTreeNode(), this._rowContainer.appendChild(this._rowElements[e4]);
                if (this._topBoundaryFocusListener = (e4) => this._handleBoundaryFocus(e4, 0), this._bottomBoundaryFocusListener = (e4) => this._handleBoundaryFocus(e4, 1), this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener), this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._refreshRowsDimensions(), this._accessibilityTreeRoot.appendChild(this._rowContainer), this._renderRowsDebouncer = new n.TimeBasedDebouncer(this._renderRows.bind(this)), this._refreshRows(), this._liveRegion = document.createElement("div"), this._liveRegion.classList.add("live-region"), this._liveRegion.setAttribute("aria-live", "assertive"), this._accessibilityTreeRoot.appendChild(this._liveRegion), !this._terminal.element)
                  throw new Error("Cannot enable accessibility before Terminal.open");
                this._terminal.element.insertAdjacentElement("afterbegin", this._accessibilityTreeRoot), this.register(this._renderRowsDebouncer), this.register(this._terminal.onResize((e4) => this._handleResize(e4.rows))), this.register(this._terminal.onRender((e4) => this._refreshRows(e4.start, e4.end))), this.register(this._terminal.onScroll(() => this._refreshRows())), this.register(this._terminal.onA11yChar((e4) => this._handleChar(e4))), this.register(this._terminal.onLineFeed(() => this._handleChar("\n"))), this.register(this._terminal.onA11yTab((e4) => this._handleTab(e4))), this.register(this._terminal.onKey((e4) => this._handleKey(e4.key))), this.register(this._terminal.onBlur(() => this._clearLiveRegion())), this.register(this._renderService.onDimensionsChange(() => this._refreshRowsDimensions())), this._screenDprMonitor = new h.ScreenDprMonitor(window), this.register(this._screenDprMonitor), this._screenDprMonitor.setListener(() => this._refreshRowsDimensions()), this.register((0, o.addDisposableDomListener)(window, "resize", () => this._refreshRowsDimensions())), this.register((0, a.toDisposable)(() => {
                  (0, c.removeElementFromParent)(this._accessibilityTreeRoot), this._rowElements.length = 0;
                }));
              }
              _handleBoundaryFocus(e3, t3) {
                const i3 = e3.target, s3 = this._rowElements[0 === t3 ? 1 : this._rowElements.length - 2];
                if (i3.getAttribute("aria-posinset") === (0 === t3 ? "1" : `${this._terminal.buffer.lines.length}`))
                  return;
                if (e3.relatedTarget !== s3)
                  return;
                let r2, n2;
                if (0 === t3 ? (r2 = i3, n2 = this._rowElements.pop(), this._rowContainer.removeChild(n2)) : (r2 = this._rowElements.shift(), n2 = i3, this._rowContainer.removeChild(r2)), r2.removeEventListener("focus", this._topBoundaryFocusListener), n2.removeEventListener("focus", this._bottomBoundaryFocusListener), 0 === t3) {
                  const e4 = this._createAccessibilityTreeNode();
                  this._rowElements.unshift(e4), this._rowContainer.insertAdjacentElement("afterbegin", e4);
                } else {
                  const e4 = this._createAccessibilityTreeNode();
                  this._rowElements.push(e4), this._rowContainer.appendChild(e4);
                }
                this._rowElements[0].addEventListener("focus", this._topBoundaryFocusListener), this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._terminal.scrollLines(0 === t3 ? -1 : 1), this._rowElements[0 === t3 ? 1 : this._rowElements.length - 2].focus(), e3.preventDefault(), e3.stopImmediatePropagation();
              }
              _handleResize(e3) {
                this._rowElements[this._rowElements.length - 1].removeEventListener("focus", this._bottomBoundaryFocusListener);
                for (let e4 = this._rowContainer.children.length; e4 < this._terminal.rows; e4++)
                  this._rowElements[e4] = this._createAccessibilityTreeNode(), this._rowContainer.appendChild(this._rowElements[e4]);
                for (; this._rowElements.length > e3; )
                  this._rowContainer.removeChild(this._rowElements.pop());
                this._rowElements[this._rowElements.length - 1].addEventListener("focus", this._bottomBoundaryFocusListener), this._refreshRowsDimensions();
              }
              _createAccessibilityTreeNode() {
                const e3 = document.createElement("div");
                return e3.setAttribute("role", "listitem"), e3.tabIndex = -1, this._refreshRowDimensions(e3), e3;
              }
              _handleTab(e3) {
                for (let t3 = 0; t3 < e3; t3++)
                  this._handleChar(" ");
              }
              _handleChar(e3) {
                this._liveRegionLineCount < 21 && (this._charsToConsume.length > 0 ? this._charsToConsume.shift() !== e3 && (this._charsToAnnounce += e3) : this._charsToAnnounce += e3, "\n" === e3 && (this._liveRegionLineCount++, 21 === this._liveRegionLineCount && (this._liveRegion.textContent += s2.tooMuchOutput)), r.isMac && this._liveRegion.textContent && this._liveRegion.textContent.length > 0 && !this._liveRegion.parentNode && setTimeout(() => {
                  this._accessibilityTreeRoot.appendChild(this._liveRegion);
                }, 0));
              }
              _clearLiveRegion() {
                this._liveRegion.textContent = "", this._liveRegionLineCount = 0, r.isMac && (0, c.removeElementFromParent)(this._liveRegion);
              }
              _handleKey(e3) {
                this._clearLiveRegion(), /\p{Control}/u.test(e3) || this._charsToConsume.push(e3);
              }
              _refreshRows(e3, t3) {
                this._renderRowsDebouncer.refresh(e3, t3, this._terminal.rows);
              }
              _renderRows(e3, t3) {
                const i3 = this._terminal.buffer, s3 = i3.lines.length.toString();
                for (let r2 = e3; r2 <= t3; r2++) {
                  const e4 = i3.translateBufferLineToString(i3.ydisp + r2, true), t4 = (i3.ydisp + r2 + 1).toString(), n2 = this._rowElements[r2];
                  n2 && (0 === e4.length ? n2.innerText = "\xA0" : n2.textContent = e4, n2.setAttribute("aria-posinset", t4), n2.setAttribute("aria-setsize", s3));
                }
                this._announceCharacters();
              }
              _refreshRowsDimensions() {
                if (this._renderService.dimensions.css.cell.height) {
                  this._accessibilityTreeRoot.style.width = `${this._renderService.dimensions.css.canvas.width}px`, this._rowElements.length !== this._terminal.rows && this._handleResize(this._terminal.rows);
                  for (let e3 = 0; e3 < this._terminal.rows; e3++)
                    this._refreshRowDimensions(this._rowElements[e3]);
                }
              }
              _refreshRowDimensions(e3) {
                e3.style.height = `${this._renderService.dimensions.css.cell.height}px`;
              }
              _announceCharacters() {
                0 !== this._charsToAnnounce.length && (this._liveRegion.textContent += this._charsToAnnounce, this._charsToAnnounce = "");
              }
            }
            t2.AccessibilityManager = l;
          }, 3614: (e2, t2) => {
            function i2(e3) {
              return e3.replace(/\r?\n/g, "\r");
            }
            function s2(e3, t3) {
              return t3 ? "\x1B[200~" + e3 + "\x1B[201~" : e3;
            }
            function r(e3, t3, r2) {
              e3 = s2(e3 = i2(e3), r2.decPrivateModes.bracketedPasteMode), r2.triggerDataEvent(e3, true), t3.value = "";
            }
            function n(e3, t3, i3) {
              const s3 = i3.getBoundingClientRect(), r2 = e3.clientX - s3.left - 10, n2 = e3.clientY - s3.top - 10;
              t3.style.width = "20px", t3.style.height = "20px", t3.style.left = `${r2}px`, t3.style.top = `${n2}px`, t3.style.zIndex = "1000", t3.focus();
            }
            Object.defineProperty(t2, "__esModule", { value: true }), t2.rightClickHandler = t2.moveTextAreaUnderMouseCursor = t2.paste = t2.handlePasteEvent = t2.copyHandler = t2.bracketTextForPaste = t2.prepareTextForTerminal = void 0, t2.prepareTextForTerminal = i2, t2.bracketTextForPaste = s2, t2.copyHandler = function(e3, t3) {
              e3.clipboardData && e3.clipboardData.setData("text/plain", t3.selectionText), e3.preventDefault();
            }, t2.handlePasteEvent = function(e3, t3, i3) {
              e3.stopPropagation(), e3.clipboardData && r(e3.clipboardData.getData("text/plain"), t3, i3);
            }, t2.paste = r, t2.moveTextAreaUnderMouseCursor = n, t2.rightClickHandler = function(e3, t3, i3, s3, r2) {
              n(e3, t3, i3), r2 && s3.rightClickSelect(e3), t3.value = s3.selectionText, t3.select();
            };
          }, 7239: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.ColorContrastCache = void 0;
            const s2 = i2(1505);
            t2.ColorContrastCache = class {
              constructor() {
                this._color = new s2.TwoKeyMap(), this._css = new s2.TwoKeyMap();
              }
              setCss(e3, t3, i3) {
                this._css.set(e3, t3, i3);
              }
              getCss(e3, t3) {
                return this._css.get(e3, t3);
              }
              setColor(e3, t3, i3) {
                this._color.set(e3, t3, i3);
              }
              getColor(e3, t3) {
                return this._color.get(e3, t3);
              }
              clear() {
                this._color.clear(), this._css.clear();
              }
            };
          }, 9631: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.removeElementFromParent = void 0, t2.removeElementFromParent = function(...e3) {
              var t3;
              for (const i2 of e3)
                null === (t3 = null == i2 ? void 0 : i2.parentElement) || void 0 === t3 || t3.removeChild(i2);
            };
          }, 3656: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.addDisposableDomListener = void 0, t2.addDisposableDomListener = function(e3, t3, i2, s2) {
              e3.addEventListener(t3, i2, s2);
              let r = false;
              return { dispose: () => {
                r || (r = true, e3.removeEventListener(t3, i2, s2));
              } };
            };
          }, 6465: function(e2, t2, i2) {
            var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
              var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                o2 = Reflect.decorate(e3, t3, i3, s3);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
              return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
            }, r = this && this.__param || function(e3, t3) {
              return function(i3, s3) {
                t3(i3, s3, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.Linkifier2 = void 0;
            const n = i2(2585), o = i2(8460), a = i2(844), h = i2(3656);
            let c = class extends a.Disposable {
              constructor(e3) {
                super(), this._bufferService = e3, this._linkProviders = [], this._linkCacheDisposables = [], this._isMouseOut = true, this._activeLine = -1, this._onShowLinkUnderline = this.register(new o.EventEmitter()), this.onShowLinkUnderline = this._onShowLinkUnderline.event, this._onHideLinkUnderline = this.register(new o.EventEmitter()), this.onHideLinkUnderline = this._onHideLinkUnderline.event, this.register((0, a.getDisposeArrayDisposable)(this._linkCacheDisposables)), this.register((0, a.toDisposable)(() => {
                  this._lastMouseEvent = void 0;
                }));
              }
              get currentLink() {
                return this._currentLink;
              }
              registerLinkProvider(e3) {
                return this._linkProviders.push(e3), { dispose: () => {
                  const t3 = this._linkProviders.indexOf(e3);
                  -1 !== t3 && this._linkProviders.splice(t3, 1);
                } };
              }
              attachToDom(e3, t3, i3) {
                this._element = e3, this._mouseService = t3, this._renderService = i3, this.register((0, h.addDisposableDomListener)(this._element, "mouseleave", () => {
                  this._isMouseOut = true, this._clearCurrentLink();
                })), this.register((0, h.addDisposableDomListener)(this._element, "mousemove", this._handleMouseMove.bind(this))), this.register((0, h.addDisposableDomListener)(this._element, "mousedown", this._handleMouseDown.bind(this))), this.register((0, h.addDisposableDomListener)(this._element, "mouseup", this._handleMouseUp.bind(this)));
              }
              _handleMouseMove(e3) {
                if (this._lastMouseEvent = e3, !this._element || !this._mouseService)
                  return;
                const t3 = this._positionFromMouseEvent(e3, this._element, this._mouseService);
                if (!t3)
                  return;
                this._isMouseOut = false;
                const i3 = e3.composedPath();
                for (let e4 = 0; e4 < i3.length; e4++) {
                  const t4 = i3[e4];
                  if (t4.classList.contains("xterm"))
                    break;
                  if (t4.classList.contains("xterm-hover"))
                    return;
                }
                this._lastBufferCell && t3.x === this._lastBufferCell.x && t3.y === this._lastBufferCell.y || (this._handleHover(t3), this._lastBufferCell = t3);
              }
              _handleHover(e3) {
                if (this._activeLine !== e3.y)
                  return this._clearCurrentLink(), void this._askForLink(e3, false);
                this._currentLink && this._linkAtPosition(this._currentLink.link, e3) || (this._clearCurrentLink(), this._askForLink(e3, true));
              }
              _askForLink(e3, t3) {
                var i3, s3;
                this._activeProviderReplies && t3 || (null === (i3 = this._activeProviderReplies) || void 0 === i3 || i3.forEach((e4) => {
                  null == e4 || e4.forEach((e5) => {
                    e5.link.dispose && e5.link.dispose();
                  });
                }), this._activeProviderReplies = /* @__PURE__ */ new Map(), this._activeLine = e3.y);
                let r2 = false;
                for (const [i4, n2] of this._linkProviders.entries())
                  t3 ? (null === (s3 = this._activeProviderReplies) || void 0 === s3 ? void 0 : s3.get(i4)) && (r2 = this._checkLinkProviderResult(i4, e3, r2)) : n2.provideLinks(e3.y, (t4) => {
                    var s4, n3;
                    if (this._isMouseOut)
                      return;
                    const o2 = null == t4 ? void 0 : t4.map((e4) => ({ link: e4 }));
                    null === (s4 = this._activeProviderReplies) || void 0 === s4 || s4.set(i4, o2), r2 = this._checkLinkProviderResult(i4, e3, r2), (null === (n3 = this._activeProviderReplies) || void 0 === n3 ? void 0 : n3.size) === this._linkProviders.length && this._removeIntersectingLinks(e3.y, this._activeProviderReplies);
                  });
              }
              _removeIntersectingLinks(e3, t3) {
                const i3 = /* @__PURE__ */ new Set();
                for (let s3 = 0; s3 < t3.size; s3++) {
                  const r2 = t3.get(s3);
                  if (r2)
                    for (let t4 = 0; t4 < r2.length; t4++) {
                      const s4 = r2[t4], n2 = s4.link.range.start.y < e3 ? 0 : s4.link.range.start.x, o2 = s4.link.range.end.y > e3 ? this._bufferService.cols : s4.link.range.end.x;
                      for (let e4 = n2; e4 <= o2; e4++) {
                        if (i3.has(e4)) {
                          r2.splice(t4--, 1);
                          break;
                        }
                        i3.add(e4);
                      }
                    }
                }
              }
              _checkLinkProviderResult(e3, t3, i3) {
                var s3;
                if (!this._activeProviderReplies)
                  return i3;
                const r2 = this._activeProviderReplies.get(e3);
                let n2 = false;
                for (let t4 = 0; t4 < e3; t4++)
                  this._activeProviderReplies.has(t4) && !this._activeProviderReplies.get(t4) || (n2 = true);
                if (!n2 && r2) {
                  const e4 = r2.find((e5) => this._linkAtPosition(e5.link, t3));
                  e4 && (i3 = true, this._handleNewLink(e4));
                }
                if (this._activeProviderReplies.size === this._linkProviders.length && !i3)
                  for (let e4 = 0; e4 < this._activeProviderReplies.size; e4++) {
                    const r3 = null === (s3 = this._activeProviderReplies.get(e4)) || void 0 === s3 ? void 0 : s3.find((e5) => this._linkAtPosition(e5.link, t3));
                    if (r3) {
                      i3 = true, this._handleNewLink(r3);
                      break;
                    }
                  }
                return i3;
              }
              _handleMouseDown() {
                this._mouseDownLink = this._currentLink;
              }
              _handleMouseUp(e3) {
                if (!this._element || !this._mouseService || !this._currentLink)
                  return;
                const t3 = this._positionFromMouseEvent(e3, this._element, this._mouseService);
                t3 && this._mouseDownLink === this._currentLink && this._linkAtPosition(this._currentLink.link, t3) && this._currentLink.link.activate(e3, this._currentLink.link.text);
              }
              _clearCurrentLink(e3, t3) {
                this._element && this._currentLink && this._lastMouseEvent && (!e3 || !t3 || this._currentLink.link.range.start.y >= e3 && this._currentLink.link.range.end.y <= t3) && (this._linkLeave(this._element, this._currentLink.link, this._lastMouseEvent), this._currentLink = void 0, (0, a.disposeArray)(this._linkCacheDisposables));
              }
              _handleNewLink(e3) {
                if (!this._element || !this._lastMouseEvent || !this._mouseService)
                  return;
                const t3 = this._positionFromMouseEvent(this._lastMouseEvent, this._element, this._mouseService);
                t3 && this._linkAtPosition(e3.link, t3) && (this._currentLink = e3, this._currentLink.state = { decorations: { underline: void 0 === e3.link.decorations || e3.link.decorations.underline, pointerCursor: void 0 === e3.link.decorations || e3.link.decorations.pointerCursor }, isHovered: true }, this._linkHover(this._element, e3.link, this._lastMouseEvent), e3.link.decorations = {}, Object.defineProperties(e3.link.decorations, { pointerCursor: { get: () => {
                  var e4, t4;
                  return null === (t4 = null === (e4 = this._currentLink) || void 0 === e4 ? void 0 : e4.state) || void 0 === t4 ? void 0 : t4.decorations.pointerCursor;
                }, set: (e4) => {
                  var t4, i3;
                  (null === (t4 = this._currentLink) || void 0 === t4 ? void 0 : t4.state) && this._currentLink.state.decorations.pointerCursor !== e4 && (this._currentLink.state.decorations.pointerCursor = e4, this._currentLink.state.isHovered && (null === (i3 = this._element) || void 0 === i3 || i3.classList.toggle("xterm-cursor-pointer", e4)));
                } }, underline: { get: () => {
                  var e4, t4;
                  return null === (t4 = null === (e4 = this._currentLink) || void 0 === e4 ? void 0 : e4.state) || void 0 === t4 ? void 0 : t4.decorations.underline;
                }, set: (t4) => {
                  var i3, s3, r2;
                  (null === (i3 = this._currentLink) || void 0 === i3 ? void 0 : i3.state) && (null === (r2 = null === (s3 = this._currentLink) || void 0 === s3 ? void 0 : s3.state) || void 0 === r2 ? void 0 : r2.decorations.underline) !== t4 && (this._currentLink.state.decorations.underline = t4, this._currentLink.state.isHovered && this._fireUnderlineEvent(e3.link, t4));
                } } }), this._renderService && this._linkCacheDisposables.push(this._renderService.onRenderedViewportChange((e4) => {
                  const t4 = 0 === e4.start ? 0 : e4.start + 1 + this._bufferService.buffer.ydisp, i3 = this._currentLink ? this._lastMouseEvent : void 0;
                  if (this._clearCurrentLink(t4, e4.end + 1 + this._bufferService.buffer.ydisp), i3 && this._element) {
                    const e5 = this._positionFromMouseEvent(i3, this._element, this._mouseService);
                    e5 && this._askForLink(e5, false);
                  }
                })));
              }
              _linkHover(e3, t3, i3) {
                var s3;
                (null === (s3 = this._currentLink) || void 0 === s3 ? void 0 : s3.state) && (this._currentLink.state.isHovered = true, this._currentLink.state.decorations.underline && this._fireUnderlineEvent(t3, true), this._currentLink.state.decorations.pointerCursor && e3.classList.add("xterm-cursor-pointer")), t3.hover && t3.hover(i3, t3.text);
              }
              _fireUnderlineEvent(e3, t3) {
                const i3 = e3.range, s3 = this._bufferService.buffer.ydisp, r2 = this._createLinkUnderlineEvent(i3.start.x - 1, i3.start.y - s3 - 1, i3.end.x, i3.end.y - s3 - 1, void 0);
                (t3 ? this._onShowLinkUnderline : this._onHideLinkUnderline).fire(r2);
              }
              _linkLeave(e3, t3, i3) {
                var s3;
                (null === (s3 = this._currentLink) || void 0 === s3 ? void 0 : s3.state) && (this._currentLink.state.isHovered = false, this._currentLink.state.decorations.underline && this._fireUnderlineEvent(t3, false), this._currentLink.state.decorations.pointerCursor && e3.classList.remove("xterm-cursor-pointer")), t3.leave && t3.leave(i3, t3.text);
              }
              _linkAtPosition(e3, t3) {
                const i3 = e3.range.start.y * this._bufferService.cols + e3.range.start.x, s3 = e3.range.end.y * this._bufferService.cols + e3.range.end.x, r2 = t3.y * this._bufferService.cols + t3.x;
                return i3 <= r2 && r2 <= s3;
              }
              _positionFromMouseEvent(e3, t3, i3) {
                const s3 = i3.getCoords(e3, t3, this._bufferService.cols, this._bufferService.rows);
                if (s3)
                  return { x: s3[0], y: s3[1] + this._bufferService.buffer.ydisp };
              }
              _createLinkUnderlineEvent(e3, t3, i3, s3, r2) {
                return { x1: e3, y1: t3, x2: i3, y2: s3, cols: this._bufferService.cols, fg: r2 };
              }
            };
            c = s2([r(0, n.IBufferService)], c), t2.Linkifier2 = c;
          }, 9042: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.tooMuchOutput = t2.promptLabel = void 0, t2.promptLabel = "Terminal input", t2.tooMuchOutput = "Too much output to announce, navigate to rows manually to read";
          }, 3730: function(e2, t2, i2) {
            var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
              var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                o2 = Reflect.decorate(e3, t3, i3, s3);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
              return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
            }, r = this && this.__param || function(e3, t3) {
              return function(i3, s3) {
                t3(i3, s3, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.OscLinkProvider = void 0;
            const n = i2(511), o = i2(2585);
            let a = class {
              constructor(e3, t3, i3) {
                this._bufferService = e3, this._optionsService = t3, this._oscLinkService = i3;
              }
              provideLinks(e3, t3) {
                var i3;
                const s3 = this._bufferService.buffer.lines.get(e3 - 1);
                if (!s3)
                  return void t3(void 0);
                const r2 = [], o2 = this._optionsService.rawOptions.linkHandler, a2 = new n.CellData(), c = s3.getTrimmedLength();
                let l = -1, d = -1, _ = false;
                for (let t4 = 0; t4 < c; t4++)
                  if (-1 !== d || s3.hasContent(t4)) {
                    if (s3.loadCell(t4, a2), a2.hasExtendedAttrs() && a2.extended.urlId) {
                      if (-1 === d) {
                        d = t4, l = a2.extended.urlId;
                        continue;
                      }
                      _ = a2.extended.urlId !== l;
                    } else
                      -1 !== d && (_ = true);
                    if (_ || -1 !== d && t4 === c - 1) {
                      const s4 = null === (i3 = this._oscLinkService.getLinkData(l)) || void 0 === i3 ? void 0 : i3.uri;
                      if (s4) {
                        const i4 = { start: { x: d + 1, y: e3 }, end: { x: t4 + (_ || t4 !== c - 1 ? 0 : 1), y: e3 } };
                        let n2 = false;
                        if (!(null == o2 ? void 0 : o2.allowNonHttpProtocols))
                          try {
                            const e4 = new URL(s4);
                            ["http:", "https:"].includes(e4.protocol) || (n2 = true);
                          } catch (e4) {
                            n2 = true;
                          }
                        n2 || r2.push({ text: s4, range: i4, activate: (e4, t5) => o2 ? o2.activate(e4, t5, i4) : h(0, t5), hover: (e4, t5) => {
                          var s5;
                          return null === (s5 = null == o2 ? void 0 : o2.hover) || void 0 === s5 ? void 0 : s5.call(o2, e4, t5, i4);
                        }, leave: (e4, t5) => {
                          var s5;
                          return null === (s5 = null == o2 ? void 0 : o2.leave) || void 0 === s5 ? void 0 : s5.call(o2, e4, t5, i4);
                        } });
                      }
                      _ = false, a2.hasExtendedAttrs() && a2.extended.urlId ? (d = t4, l = a2.extended.urlId) : (d = -1, l = -1);
                    }
                  }
                t3(r2);
              }
            };
            function h(e3, t3) {
              if (confirm(`Do you want to navigate to ${t3}?

WARNING: This link could potentially be dangerous`)) {
                const e4 = window.open();
                if (e4) {
                  try {
                    e4.opener = null;
                  } catch (e5) {
                  }
                  e4.location.href = t3;
                } else
                  console.warn("Opening link blocked as opener could not be cleared");
              }
            }
            a = s2([r(0, o.IBufferService), r(1, o.IOptionsService), r(2, o.IOscLinkService)], a), t2.OscLinkProvider = a;
          }, 6193: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.RenderDebouncer = void 0, t2.RenderDebouncer = class {
              constructor(e3, t3) {
                this._parentWindow = e3, this._renderCallback = t3, this._refreshCallbacks = [];
              }
              dispose() {
                this._animationFrame && (this._parentWindow.cancelAnimationFrame(this._animationFrame), this._animationFrame = void 0);
              }
              addRefreshCallback(e3) {
                return this._refreshCallbacks.push(e3), this._animationFrame || (this._animationFrame = this._parentWindow.requestAnimationFrame(() => this._innerRefresh())), this._animationFrame;
              }
              refresh(e3, t3, i2) {
                this._rowCount = i2, e3 = void 0 !== e3 ? e3 : 0, t3 = void 0 !== t3 ? t3 : this._rowCount - 1, this._rowStart = void 0 !== this._rowStart ? Math.min(this._rowStart, e3) : e3, this._rowEnd = void 0 !== this._rowEnd ? Math.max(this._rowEnd, t3) : t3, this._animationFrame || (this._animationFrame = this._parentWindow.requestAnimationFrame(() => this._innerRefresh()));
              }
              _innerRefresh() {
                if (this._animationFrame = void 0, void 0 === this._rowStart || void 0 === this._rowEnd || void 0 === this._rowCount)
                  return void this._runRefreshCallbacks();
                const e3 = Math.max(this._rowStart, 0), t3 = Math.min(this._rowEnd, this._rowCount - 1);
                this._rowStart = void 0, this._rowEnd = void 0, this._renderCallback(e3, t3), this._runRefreshCallbacks();
              }
              _runRefreshCallbacks() {
                for (const e3 of this._refreshCallbacks)
                  e3(0);
                this._refreshCallbacks = [];
              }
            };
          }, 5596: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.ScreenDprMonitor = void 0;
            const s2 = i2(844);
            class r extends s2.Disposable {
              constructor(e3) {
                super(), this._parentWindow = e3, this._currentDevicePixelRatio = this._parentWindow.devicePixelRatio, this.register((0, s2.toDisposable)(() => {
                  this.clearListener();
                }));
              }
              setListener(e3) {
                this._listener && this.clearListener(), this._listener = e3, this._outerListener = () => {
                  this._listener && (this._listener(this._parentWindow.devicePixelRatio, this._currentDevicePixelRatio), this._updateDpr());
                }, this._updateDpr();
              }
              _updateDpr() {
                var e3;
                this._outerListener && (null === (e3 = this._resolutionMediaMatchList) || void 0 === e3 || e3.removeListener(this._outerListener), this._currentDevicePixelRatio = this._parentWindow.devicePixelRatio, this._resolutionMediaMatchList = this._parentWindow.matchMedia(`screen and (resolution: ${this._parentWindow.devicePixelRatio}dppx)`), this._resolutionMediaMatchList.addListener(this._outerListener));
              }
              clearListener() {
                this._resolutionMediaMatchList && this._listener && this._outerListener && (this._resolutionMediaMatchList.removeListener(this._outerListener), this._resolutionMediaMatchList = void 0, this._listener = void 0, this._outerListener = void 0);
              }
            }
            t2.ScreenDprMonitor = r;
          }, 3236: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.Terminal = void 0;
            const s2 = i2(2950), r = i2(1680), n = i2(3614), o = i2(2584), a = i2(5435), h = i2(9312), c = i2(6114), l = i2(3656), d = i2(9042), _ = i2(4567), u = i2(1296), f = i2(7399), v = i2(8460), g = i2(8437), p = i2(3230), S = i2(4725), m = i2(428), C = i2(8934), b = i2(6465), y = i2(5114), w = i2(8969), E = i2(8055), L = i2(4269), k = i2(5941), R = i2(3107), D = i2(5744), A = i2(9074), x = i2(2585), B = i2(3730), T = i2(844), M = i2(6731), O = "undefined" != typeof window ? window.document : null;
            class I extends w.CoreTerminal {
              constructor(e3 = {}) {
                super(e3), this.browser = c, this._keyDownHandled = false, this._keyDownSeen = false, this._keyPressHandled = false, this._unprocessedDeadKey = false, this._onCursorMove = this.register(new v.EventEmitter()), this.onCursorMove = this._onCursorMove.event, this._onKey = this.register(new v.EventEmitter()), this.onKey = this._onKey.event, this._onRender = this.register(new v.EventEmitter()), this.onRender = this._onRender.event, this._onSelectionChange = this.register(new v.EventEmitter()), this.onSelectionChange = this._onSelectionChange.event, this._onTitleChange = this.register(new v.EventEmitter()), this.onTitleChange = this._onTitleChange.event, this._onBell = this.register(new v.EventEmitter()), this.onBell = this._onBell.event, this._onFocus = this.register(new v.EventEmitter()), this._onBlur = this.register(new v.EventEmitter()), this._onA11yCharEmitter = this.register(new v.EventEmitter()), this._onA11yTabEmitter = this.register(new v.EventEmitter()), this._onWillOpen = this.register(new v.EventEmitter()), this._setup(), this.linkifier2 = this.register(this._instantiationService.createInstance(b.Linkifier2)), this.linkifier2.registerLinkProvider(this._instantiationService.createInstance(B.OscLinkProvider)), this._decorationService = this._instantiationService.createInstance(A.DecorationService), this._instantiationService.setService(x.IDecorationService, this._decorationService), this.register(this._inputHandler.onRequestBell(() => this._onBell.fire())), this.register(this._inputHandler.onRequestRefreshRows((e4, t3) => this.refresh(e4, t3))), this.register(this._inputHandler.onRequestSendFocus(() => this._reportFocus())), this.register(this._inputHandler.onRequestReset(() => this.reset())), this.register(this._inputHandler.onRequestWindowsOptionsReport((e4) => this._reportWindowsOptions(e4))), this.register(this._inputHandler.onColor((e4) => this._handleColorEvent(e4))), this.register((0, v.forwardEvent)(this._inputHandler.onCursorMove, this._onCursorMove)), this.register((0, v.forwardEvent)(this._inputHandler.onTitleChange, this._onTitleChange)), this.register((0, v.forwardEvent)(this._inputHandler.onA11yChar, this._onA11yCharEmitter)), this.register((0, v.forwardEvent)(this._inputHandler.onA11yTab, this._onA11yTabEmitter)), this.register(this._bufferService.onResize((e4) => this._afterResize(e4.cols, e4.rows))), this.register((0, T.toDisposable)(() => {
                  var e4, t3;
                  this._customKeyEventHandler = void 0, null === (t3 = null === (e4 = this.element) || void 0 === e4 ? void 0 : e4.parentNode) || void 0 === t3 || t3.removeChild(this.element);
                }));
              }
              get onFocus() {
                return this._onFocus.event;
              }
              get onBlur() {
                return this._onBlur.event;
              }
              get onA11yChar() {
                return this._onA11yCharEmitter.event;
              }
              get onA11yTab() {
                return this._onA11yTabEmitter.event;
              }
              get onWillOpen() {
                return this._onWillOpen.event;
              }
              _handleColorEvent(e3) {
                if (this._themeService)
                  for (const t3 of e3) {
                    let e4, i3 = "";
                    switch (t3.index) {
                      case 256:
                        e4 = "foreground", i3 = "10";
                        break;
                      case 257:
                        e4 = "background", i3 = "11";
                        break;
                      case 258:
                        e4 = "cursor", i3 = "12";
                        break;
                      default:
                        e4 = "ansi", i3 = "4;" + t3.index;
                    }
                    switch (t3.type) {
                      case 0:
                        const s3 = E.color.toColorRGB("ansi" === e4 ? this._themeService.colors.ansi[t3.index] : this._themeService.colors[e4]);
                        this.coreService.triggerDataEvent(`${o.C0.ESC}]${i3};${(0, k.toRgbString)(s3)}${o.C1_ESCAPED.ST}`);
                        break;
                      case 1:
                        if ("ansi" === e4)
                          this._themeService.modifyColors((e5) => e5.ansi[t3.index] = E.rgba.toColor(...t3.color));
                        else {
                          const i4 = e4;
                          this._themeService.modifyColors((e5) => e5[i4] = E.rgba.toColor(...t3.color));
                        }
                        break;
                      case 2:
                        this._themeService.restoreColor(t3.index);
                    }
                  }
              }
              _setup() {
                super._setup(), this._customKeyEventHandler = void 0;
              }
              get buffer() {
                return this.buffers.active;
              }
              focus() {
                this.textarea && this.textarea.focus({ preventScroll: true });
              }
              _handleScreenReaderModeOptionChange(e3) {
                var t3;
                e3 ? !this._accessibilityManager && this._renderService && (this._accessibilityManager = new _.AccessibilityManager(this, this._renderService)) : (null === (t3 = this._accessibilityManager) || void 0 === t3 || t3.dispose(), this._accessibilityManager = void 0);
              }
              _handleTextAreaFocus(e3) {
                this.coreService.decPrivateModes.sendFocus && this.coreService.triggerDataEvent(o.C0.ESC + "[I"), this.updateCursorStyle(e3), this.element.classList.add("focus"), this._showCursor(), this._onFocus.fire();
              }
              blur() {
                var e3;
                return null === (e3 = this.textarea) || void 0 === e3 ? void 0 : e3.blur();
              }
              _handleTextAreaBlur() {
                this.textarea.value = "", this.refresh(this.buffer.y, this.buffer.y), this.coreService.decPrivateModes.sendFocus && this.coreService.triggerDataEvent(o.C0.ESC + "[O"), this.element.classList.remove("focus"), this._onBlur.fire();
              }
              _syncTextArea() {
                if (!this.textarea || !this.buffer.isCursorInViewport || this._compositionHelper.isComposing || !this._renderService)
                  return;
                const e3 = this.buffer.ybase + this.buffer.y, t3 = this.buffer.lines.get(e3);
                if (!t3)
                  return;
                const i3 = Math.min(this.buffer.x, this.cols - 1), s3 = this._renderService.dimensions.css.cell.height, r2 = t3.getWidth(i3), n2 = this._renderService.dimensions.css.cell.width * r2, o2 = this.buffer.y * this._renderService.dimensions.css.cell.height, a2 = i3 * this._renderService.dimensions.css.cell.width;
                this.textarea.style.left = a2 + "px", this.textarea.style.top = o2 + "px", this.textarea.style.width = n2 + "px", this.textarea.style.height = s3 + "px", this.textarea.style.lineHeight = s3 + "px", this.textarea.style.zIndex = "-5";
              }
              _initGlobal() {
                this._bindKeys(), this.register((0, l.addDisposableDomListener)(this.element, "copy", (e4) => {
                  this.hasSelection() && (0, n.copyHandler)(e4, this._selectionService);
                }));
                const e3 = (e4) => (0, n.handlePasteEvent)(e4, this.textarea, this.coreService);
                this.register((0, l.addDisposableDomListener)(this.textarea, "paste", e3)), this.register((0, l.addDisposableDomListener)(this.element, "paste", e3)), c.isFirefox ? this.register((0, l.addDisposableDomListener)(this.element, "mousedown", (e4) => {
                  2 === e4.button && (0, n.rightClickHandler)(e4, this.textarea, this.screenElement, this._selectionService, this.options.rightClickSelectsWord);
                })) : this.register((0, l.addDisposableDomListener)(this.element, "contextmenu", (e4) => {
                  (0, n.rightClickHandler)(e4, this.textarea, this.screenElement, this._selectionService, this.options.rightClickSelectsWord);
                })), c.isLinux && this.register((0, l.addDisposableDomListener)(this.element, "auxclick", (e4) => {
                  1 === e4.button && (0, n.moveTextAreaUnderMouseCursor)(e4, this.textarea, this.screenElement);
                }));
              }
              _bindKeys() {
                this.register((0, l.addDisposableDomListener)(this.textarea, "keyup", (e3) => this._keyUp(e3), true)), this.register((0, l.addDisposableDomListener)(this.textarea, "keydown", (e3) => this._keyDown(e3), true)), this.register((0, l.addDisposableDomListener)(this.textarea, "keypress", (e3) => this._keyPress(e3), true)), this.register((0, l.addDisposableDomListener)(this.textarea, "compositionstart", () => this._compositionHelper.compositionstart())), this.register((0, l.addDisposableDomListener)(this.textarea, "compositionupdate", (e3) => this._compositionHelper.compositionupdate(e3))), this.register((0, l.addDisposableDomListener)(this.textarea, "compositionend", () => this._compositionHelper.compositionend())), this.register((0, l.addDisposableDomListener)(this.textarea, "input", (e3) => this._inputEvent(e3), true)), this.register(this.onRender(() => this._compositionHelper.updateCompositionElements()));
              }
              open(e3) {
                var t3;
                if (!e3)
                  throw new Error("Terminal requires a parent element.");
                e3.isConnected || this._logService.debug("Terminal.open was called on an element that was not attached to the DOM"), this._document = e3.ownerDocument, this.element = this._document.createElement("div"), this.element.dir = "ltr", this.element.classList.add("terminal"), this.element.classList.add("xterm"), this.element.setAttribute("tabindex", "0"), e3.appendChild(this.element);
                const i3 = O.createDocumentFragment();
                this._viewportElement = O.createElement("div"), this._viewportElement.classList.add("xterm-viewport"), i3.appendChild(this._viewportElement), this._viewportScrollArea = O.createElement("div"), this._viewportScrollArea.classList.add("xterm-scroll-area"), this._viewportElement.appendChild(this._viewportScrollArea), this.screenElement = O.createElement("div"), this.screenElement.classList.add("xterm-screen"), this._helperContainer = O.createElement("div"), this._helperContainer.classList.add("xterm-helpers"), this.screenElement.appendChild(this._helperContainer), i3.appendChild(this.screenElement), this.textarea = O.createElement("textarea"), this.textarea.classList.add("xterm-helper-textarea"), this.textarea.setAttribute("aria-label", d.promptLabel), c.isChromeOS || this.textarea.setAttribute("aria-multiline", "false"), this.textarea.setAttribute("autocorrect", "off"), this.textarea.setAttribute("autocapitalize", "off"), this.textarea.setAttribute("spellcheck", "false"), this.textarea.tabIndex = 0, this._coreBrowserService = this._instantiationService.createInstance(y.CoreBrowserService, this.textarea, null !== (t3 = this._document.defaultView) && void 0 !== t3 ? t3 : window), this._instantiationService.setService(S.ICoreBrowserService, this._coreBrowserService), this.register((0, l.addDisposableDomListener)(this.textarea, "focus", (e4) => this._handleTextAreaFocus(e4))), this.register((0, l.addDisposableDomListener)(this.textarea, "blur", () => this._handleTextAreaBlur())), this._helperContainer.appendChild(this.textarea), this._charSizeService = this._instantiationService.createInstance(m.CharSizeService, this._document, this._helperContainer), this._instantiationService.setService(S.ICharSizeService, this._charSizeService), this._themeService = this._instantiationService.createInstance(M.ThemeService), this._instantiationService.setService(S.IThemeService, this._themeService), this._characterJoinerService = this._instantiationService.createInstance(L.CharacterJoinerService), this._instantiationService.setService(S.ICharacterJoinerService, this._characterJoinerService), this._renderService = this.register(this._instantiationService.createInstance(p.RenderService, this.rows, this.screenElement)), this._instantiationService.setService(S.IRenderService, this._renderService), this.register(this._renderService.onRenderedViewportChange((e4) => this._onRender.fire(e4))), this.onResize((e4) => this._renderService.resize(e4.cols, e4.rows)), this._compositionView = O.createElement("div"), this._compositionView.classList.add("composition-view"), this._compositionHelper = this._instantiationService.createInstance(s2.CompositionHelper, this.textarea, this._compositionView), this._helperContainer.appendChild(this._compositionView), this.element.appendChild(i3);
                try {
                  this._onWillOpen.fire(this.element);
                } catch (e4) {
                }
                this._renderService.hasRenderer() || this._renderService.setRenderer(this._createRenderer()), this._mouseService = this._instantiationService.createInstance(C.MouseService), this._instantiationService.setService(S.IMouseService, this._mouseService), this.viewport = this._instantiationService.createInstance(r.Viewport, (e4) => this.scrollLines(e4, true, 1), this._viewportElement, this._viewportScrollArea), this.register(this._inputHandler.onRequestSyncScrollBar(() => this.viewport.syncScrollArea())), this.register(this.viewport), this.register(this.onCursorMove(() => {
                  this._renderService.handleCursorMove(), this._syncTextArea();
                })), this.register(this.onResize(() => this._renderService.handleResize(this.cols, this.rows))), this.register(this.onBlur(() => this._renderService.handleBlur())), this.register(this.onFocus(() => this._renderService.handleFocus())), this.register(this._renderService.onDimensionsChange(() => this.viewport.syncScrollArea())), this._selectionService = this.register(this._instantiationService.createInstance(h.SelectionService, this.element, this.screenElement, this.linkifier2)), this._instantiationService.setService(S.ISelectionService, this._selectionService), this.register(this._selectionService.onRequestScrollLines((e4) => this.scrollLines(e4.amount, e4.suppressScrollEvent))), this.register(this._selectionService.onSelectionChange(() => this._onSelectionChange.fire())), this.register(this._selectionService.onRequestRedraw((e4) => this._renderService.handleSelectionChanged(e4.start, e4.end, e4.columnSelectMode))), this.register(this._selectionService.onLinuxMouseSelection((e4) => {
                  this.textarea.value = e4, this.textarea.focus(), this.textarea.select();
                })), this.register(this._onScroll.event((e4) => {
                  this.viewport.syncScrollArea(), this._selectionService.refresh();
                })), this.register((0, l.addDisposableDomListener)(this._viewportElement, "scroll", () => this._selectionService.refresh())), this.linkifier2.attachToDom(this.screenElement, this._mouseService, this._renderService), this.register(this._instantiationService.createInstance(R.BufferDecorationRenderer, this.screenElement)), this.register((0, l.addDisposableDomListener)(this.element, "mousedown", (e4) => this._selectionService.handleMouseDown(e4))), this.coreMouseService.areMouseEventsActive ? (this._selectionService.disable(), this.element.classList.add("enable-mouse-events")) : this._selectionService.enable(), this.options.screenReaderMode && (this._accessibilityManager = new _.AccessibilityManager(this, this._renderService)), this.register(this.optionsService.onSpecificOptionChange("screenReaderMode", (e4) => this._handleScreenReaderModeOptionChange(e4))), this.options.overviewRulerWidth && (this._overviewRulerRenderer = this.register(this._instantiationService.createInstance(D.OverviewRulerRenderer, this._viewportElement, this.screenElement))), this.optionsService.onSpecificOptionChange("overviewRulerWidth", (e4) => {
                  !this._overviewRulerRenderer && e4 && this._viewportElement && this.screenElement && (this._overviewRulerRenderer = this.register(this._instantiationService.createInstance(D.OverviewRulerRenderer, this._viewportElement, this.screenElement)));
                }), this._charSizeService.measure(), this.refresh(0, this.rows - 1), this._initGlobal(), this.bindMouse();
              }
              _createRenderer() {
                return this._instantiationService.createInstance(u.DomRenderer, this.element, this.screenElement, this._viewportElement, this.linkifier2);
              }
              bindMouse() {
                const e3 = this, t3 = this.element;
                function i3(t4) {
                  const i4 = e3._mouseService.getMouseReportCoords(t4, e3.screenElement);
                  if (!i4)
                    return false;
                  let s4, r3;
                  switch (t4.overrideType || t4.type) {
                    case "mousemove":
                      r3 = 32, void 0 === t4.buttons ? (s4 = 3, void 0 !== t4.button && (s4 = t4.button < 3 ? t4.button : 3)) : s4 = 1 & t4.buttons ? 0 : 4 & t4.buttons ? 1 : 2 & t4.buttons ? 2 : 3;
                      break;
                    case "mouseup":
                      r3 = 0, s4 = t4.button < 3 ? t4.button : 3;
                      break;
                    case "mousedown":
                      r3 = 1, s4 = t4.button < 3 ? t4.button : 3;
                      break;
                    case "wheel":
                      if (0 === e3.viewport.getLinesScrolled(t4))
                        return false;
                      r3 = t4.deltaY < 0 ? 0 : 1, s4 = 4;
                      break;
                    default:
                      return false;
                  }
                  return !(void 0 === r3 || void 0 === s4 || s4 > 4) && e3.coreMouseService.triggerMouseEvent({ col: i4.col, row: i4.row, x: i4.x, y: i4.y, button: s4, action: r3, ctrl: t4.ctrlKey, alt: t4.altKey, shift: t4.shiftKey });
                }
                const s3 = { mouseup: null, wheel: null, mousedrag: null, mousemove: null }, r2 = { mouseup: (e4) => (i3(e4), e4.buttons || (this._document.removeEventListener("mouseup", s3.mouseup), s3.mousedrag && this._document.removeEventListener("mousemove", s3.mousedrag)), this.cancel(e4)), wheel: (e4) => (i3(e4), this.cancel(e4, true)), mousedrag: (e4) => {
                  e4.buttons && i3(e4);
                }, mousemove: (e4) => {
                  e4.buttons || i3(e4);
                } };
                this.register(this.coreMouseService.onProtocolChange((e4) => {
                  e4 ? ("debug" === this.optionsService.rawOptions.logLevel && this._logService.debug("Binding to mouse events:", this.coreMouseService.explainEvents(e4)), this.element.classList.add("enable-mouse-events"), this._selectionService.disable()) : (this._logService.debug("Unbinding from mouse events."), this.element.classList.remove("enable-mouse-events"), this._selectionService.enable()), 8 & e4 ? s3.mousemove || (t3.addEventListener("mousemove", r2.mousemove), s3.mousemove = r2.mousemove) : (t3.removeEventListener("mousemove", s3.mousemove), s3.mousemove = null), 16 & e4 ? s3.wheel || (t3.addEventListener("wheel", r2.wheel, { passive: false }), s3.wheel = r2.wheel) : (t3.removeEventListener("wheel", s3.wheel), s3.wheel = null), 2 & e4 ? s3.mouseup || (s3.mouseup = r2.mouseup) : (this._document.removeEventListener("mouseup", s3.mouseup), s3.mouseup = null), 4 & e4 ? s3.mousedrag || (s3.mousedrag = r2.mousedrag) : (this._document.removeEventListener("mousemove", s3.mousedrag), s3.mousedrag = null);
                })), this.coreMouseService.activeProtocol = this.coreMouseService.activeProtocol, this.register((0, l.addDisposableDomListener)(t3, "mousedown", (e4) => {
                  if (e4.preventDefault(), this.focus(), this.coreMouseService.areMouseEventsActive && !this._selectionService.shouldForceSelection(e4))
                    return i3(e4), s3.mouseup && this._document.addEventListener("mouseup", s3.mouseup), s3.mousedrag && this._document.addEventListener("mousemove", s3.mousedrag), this.cancel(e4);
                })), this.register((0, l.addDisposableDomListener)(t3, "wheel", (e4) => {
                  if (!s3.wheel) {
                    if (!this.buffer.hasScrollback) {
                      const t4 = this.viewport.getLinesScrolled(e4);
                      if (0 === t4)
                        return;
                      const i4 = o.C0.ESC + (this.coreService.decPrivateModes.applicationCursorKeys ? "O" : "[") + (e4.deltaY < 0 ? "A" : "B");
                      let s4 = "";
                      for (let e5 = 0; e5 < Math.abs(t4); e5++)
                        s4 += i4;
                      return this.coreService.triggerDataEvent(s4, true), this.cancel(e4, true);
                    }
                    return this.viewport.handleWheel(e4) ? this.cancel(e4) : void 0;
                  }
                }, { passive: false })), this.register((0, l.addDisposableDomListener)(t3, "touchstart", (e4) => {
                  if (!this.coreMouseService.areMouseEventsActive)
                    return this.viewport.handleTouchStart(e4), this.cancel(e4);
                }, { passive: true })), this.register((0, l.addDisposableDomListener)(t3, "touchmove", (e4) => {
                  if (!this.coreMouseService.areMouseEventsActive)
                    return this.viewport.handleTouchMove(e4) ? void 0 : this.cancel(e4);
                }, { passive: false }));
              }
              refresh(e3, t3) {
                var i3;
                null === (i3 = this._renderService) || void 0 === i3 || i3.refreshRows(e3, t3);
              }
              updateCursorStyle(e3) {
                var t3;
                (null === (t3 = this._selectionService) || void 0 === t3 ? void 0 : t3.shouldColumnSelect(e3)) ? this.element.classList.add("column-select") : this.element.classList.remove("column-select");
              }
              _showCursor() {
                this.coreService.isCursorInitialized || (this.coreService.isCursorInitialized = true, this.refresh(this.buffer.y, this.buffer.y));
              }
              scrollLines(e3, t3, i3 = 0) {
                super.scrollLines(e3, t3, i3), this.refresh(0, this.rows - 1);
              }
              paste(e3) {
                (0, n.paste)(e3, this.textarea, this.coreService);
              }
              attachCustomKeyEventHandler(e3) {
                this._customKeyEventHandler = e3;
              }
              registerLinkProvider(e3) {
                return this.linkifier2.registerLinkProvider(e3);
              }
              registerCharacterJoiner(e3) {
                if (!this._characterJoinerService)
                  throw new Error("Terminal must be opened first");
                const t3 = this._characterJoinerService.register(e3);
                return this.refresh(0, this.rows - 1), t3;
              }
              deregisterCharacterJoiner(e3) {
                if (!this._characterJoinerService)
                  throw new Error("Terminal must be opened first");
                this._characterJoinerService.deregister(e3) && this.refresh(0, this.rows - 1);
              }
              get markers() {
                return this.buffer.markers;
              }
              addMarker(e3) {
                return this.buffer.addMarker(this.buffer.ybase + this.buffer.y + e3);
              }
              registerDecoration(e3) {
                return this._decorationService.registerDecoration(e3);
              }
              hasSelection() {
                return !!this._selectionService && this._selectionService.hasSelection;
              }
              select(e3, t3, i3) {
                this._selectionService.setSelection(e3, t3, i3);
              }
              getSelection() {
                return this._selectionService ? this._selectionService.selectionText : "";
              }
              getSelectionPosition() {
                if (this._selectionService && this._selectionService.hasSelection)
                  return { start: { x: this._selectionService.selectionStart[0], y: this._selectionService.selectionStart[1] }, end: { x: this._selectionService.selectionEnd[0], y: this._selectionService.selectionEnd[1] } };
              }
              clearSelection() {
                var e3;
                null === (e3 = this._selectionService) || void 0 === e3 || e3.clearSelection();
              }
              selectAll() {
                var e3;
                null === (e3 = this._selectionService) || void 0 === e3 || e3.selectAll();
              }
              selectLines(e3, t3) {
                var i3;
                null === (i3 = this._selectionService) || void 0 === i3 || i3.selectLines(e3, t3);
              }
              _keyDown(e3) {
                if (this._keyDownHandled = false, this._keyDownSeen = true, this._customKeyEventHandler && false === this._customKeyEventHandler(e3))
                  return false;
                const t3 = this.browser.isMac && this.options.macOptionIsMeta && e3.altKey;
                if (!t3 && !this._compositionHelper.keydown(e3))
                  return this.options.scrollOnUserInput && this.buffer.ybase !== this.buffer.ydisp && this._bufferService.scrollToBottom(), false;
                t3 || "Dead" !== e3.key && "AltGraph" !== e3.key || (this._unprocessedDeadKey = true);
                const i3 = (0, f.evaluateKeyboardEvent)(e3, this.coreService.decPrivateModes.applicationCursorKeys, this.browser.isMac, this.options.macOptionIsMeta);
                if (this.updateCursorStyle(e3), 3 === i3.type || 2 === i3.type) {
                  const t4 = this.rows - 1;
                  return this.scrollLines(2 === i3.type ? -t4 : t4), this.cancel(e3, true);
                }
                return 1 === i3.type && this.selectAll(), !!this._isThirdLevelShift(this.browser, e3) || (i3.cancel && this.cancel(e3, true), !i3.key || !!(e3.key && !e3.ctrlKey && !e3.altKey && !e3.metaKey && 1 === e3.key.length && e3.key.charCodeAt(0) >= 65 && e3.key.charCodeAt(0) <= 90) || (this._unprocessedDeadKey ? (this._unprocessedDeadKey = false, true) : (i3.key !== o.C0.ETX && i3.key !== o.C0.CR || (this.textarea.value = ""), this._onKey.fire({ key: i3.key, domEvent: e3 }), this._showCursor(), this.coreService.triggerDataEvent(i3.key, true), !this.optionsService.rawOptions.screenReaderMode || e3.altKey || e3.ctrlKey ? this.cancel(e3, true) : void (this._keyDownHandled = true))));
              }
              _isThirdLevelShift(e3, t3) {
                const i3 = e3.isMac && !this.options.macOptionIsMeta && t3.altKey && !t3.ctrlKey && !t3.metaKey || e3.isWindows && t3.altKey && t3.ctrlKey && !t3.metaKey || e3.isWindows && t3.getModifierState("AltGraph");
                return "keypress" === t3.type ? i3 : i3 && (!t3.keyCode || t3.keyCode > 47);
              }
              _keyUp(e3) {
                this._keyDownSeen = false, this._customKeyEventHandler && false === this._customKeyEventHandler(e3) || (function(e4) {
                  return 16 === e4.keyCode || 17 === e4.keyCode || 18 === e4.keyCode;
                }(e3) || this.focus(), this.updateCursorStyle(e3), this._keyPressHandled = false);
              }
              _keyPress(e3) {
                let t3;
                if (this._keyPressHandled = false, this._keyDownHandled)
                  return false;
                if (this._customKeyEventHandler && false === this._customKeyEventHandler(e3))
                  return false;
                if (this.cancel(e3), e3.charCode)
                  t3 = e3.charCode;
                else if (null === e3.which || void 0 === e3.which)
                  t3 = e3.keyCode;
                else {
                  if (0 === e3.which || 0 === e3.charCode)
                    return false;
                  t3 = e3.which;
                }
                return !(!t3 || (e3.altKey || e3.ctrlKey || e3.metaKey) && !this._isThirdLevelShift(this.browser, e3) || (t3 = String.fromCharCode(t3), this._onKey.fire({ key: t3, domEvent: e3 }), this._showCursor(), this.coreService.triggerDataEvent(t3, true), this._keyPressHandled = true, this._unprocessedDeadKey = false, 0));
              }
              _inputEvent(e3) {
                if (e3.data && "insertText" === e3.inputType && (!e3.composed || !this._keyDownSeen) && !this.optionsService.rawOptions.screenReaderMode) {
                  if (this._keyPressHandled)
                    return false;
                  this._unprocessedDeadKey = false;
                  const t3 = e3.data;
                  return this.coreService.triggerDataEvent(t3, true), this.cancel(e3), true;
                }
                return false;
              }
              resize(e3, t3) {
                e3 !== this.cols || t3 !== this.rows ? super.resize(e3, t3) : this._charSizeService && !this._charSizeService.hasValidSize && this._charSizeService.measure();
              }
              _afterResize(e3, t3) {
                var i3, s3;
                null === (i3 = this._charSizeService) || void 0 === i3 || i3.measure(), null === (s3 = this.viewport) || void 0 === s3 || s3.syncScrollArea(true);
              }
              clear() {
                if (0 !== this.buffer.ybase || 0 !== this.buffer.y) {
                  this.buffer.clearAllMarkers(), this.buffer.lines.set(0, this.buffer.lines.get(this.buffer.ybase + this.buffer.y)), this.buffer.lines.length = 1, this.buffer.ydisp = 0, this.buffer.ybase = 0, this.buffer.y = 0;
                  for (let e3 = 1; e3 < this.rows; e3++)
                    this.buffer.lines.push(this.buffer.getBlankLine(g.DEFAULT_ATTR_DATA));
                  this.refresh(0, this.rows - 1), this._onScroll.fire({ position: this.buffer.ydisp, source: 0 });
                }
              }
              reset() {
                var e3, t3;
                this.options.rows = this.rows, this.options.cols = this.cols;
                const i3 = this._customKeyEventHandler;
                this._setup(), super.reset(), null === (e3 = this._selectionService) || void 0 === e3 || e3.reset(), this._decorationService.reset(), this._customKeyEventHandler = i3, this.refresh(0, this.rows - 1), null === (t3 = this.viewport) || void 0 === t3 || t3.syncScrollArea();
              }
              clearTextureAtlas() {
                var e3;
                null === (e3 = this._renderService) || void 0 === e3 || e3.clearTextureAtlas();
              }
              _reportFocus() {
                var e3;
                (null === (e3 = this.element) || void 0 === e3 ? void 0 : e3.classList.contains("focus")) ? this.coreService.triggerDataEvent(o.C0.ESC + "[I") : this.coreService.triggerDataEvent(o.C0.ESC + "[O");
              }
              _reportWindowsOptions(e3) {
                if (this._renderService)
                  switch (e3) {
                    case a.WindowsOptionsReportType.GET_WIN_SIZE_PIXELS:
                      const e4 = this._renderService.dimensions.css.canvas.width.toFixed(0), t3 = this._renderService.dimensions.css.canvas.height.toFixed(0);
                      this.coreService.triggerDataEvent(`${o.C0.ESC}[4;${t3};${e4}t`);
                      break;
                    case a.WindowsOptionsReportType.GET_CELL_SIZE_PIXELS:
                      const i3 = this._renderService.dimensions.css.cell.width.toFixed(0), s3 = this._renderService.dimensions.css.cell.height.toFixed(0);
                      this.coreService.triggerDataEvent(`${o.C0.ESC}[6;${s3};${i3}t`);
                  }
              }
              cancel(e3, t3) {
                if (this.options.cancelEvents || t3)
                  return e3.preventDefault(), e3.stopPropagation(), false;
              }
            }
            t2.Terminal = I;
          }, 9924: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.TimeBasedDebouncer = void 0, t2.TimeBasedDebouncer = class {
              constructor(e3, t3 = 1e3) {
                this._renderCallback = e3, this._debounceThresholdMS = t3, this._lastRefreshMs = 0, this._additionalRefreshRequested = false;
              }
              dispose() {
                this._refreshTimeoutID && clearTimeout(this._refreshTimeoutID);
              }
              refresh(e3, t3, i2) {
                this._rowCount = i2, e3 = void 0 !== e3 ? e3 : 0, t3 = void 0 !== t3 ? t3 : this._rowCount - 1, this._rowStart = void 0 !== this._rowStart ? Math.min(this._rowStart, e3) : e3, this._rowEnd = void 0 !== this._rowEnd ? Math.max(this._rowEnd, t3) : t3;
                const s2 = Date.now();
                if (s2 - this._lastRefreshMs >= this._debounceThresholdMS)
                  this._lastRefreshMs = s2, this._innerRefresh();
                else if (!this._additionalRefreshRequested) {
                  const e4 = s2 - this._lastRefreshMs, t4 = this._debounceThresholdMS - e4;
                  this._additionalRefreshRequested = true, this._refreshTimeoutID = window.setTimeout(() => {
                    this._lastRefreshMs = Date.now(), this._innerRefresh(), this._additionalRefreshRequested = false, this._refreshTimeoutID = void 0;
                  }, t4);
                }
              }
              _innerRefresh() {
                if (void 0 === this._rowStart || void 0 === this._rowEnd || void 0 === this._rowCount)
                  return;
                const e3 = Math.max(this._rowStart, 0), t3 = Math.min(this._rowEnd, this._rowCount - 1);
                this._rowStart = void 0, this._rowEnd = void 0, this._renderCallback(e3, t3);
              }
            };
          }, 1680: function(e2, t2, i2) {
            var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
              var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                o2 = Reflect.decorate(e3, t3, i3, s3);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
              return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
            }, r = this && this.__param || function(e3, t3) {
              return function(i3, s3) {
                t3(i3, s3, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.Viewport = void 0;
            const n = i2(844), o = i2(3656), a = i2(4725), h = i2(2585);
            let c = class extends n.Disposable {
              constructor(e3, t3, i3, s3, r2, n2, a2, h2, c2) {
                super(), this._scrollLines = e3, this._viewportElement = t3, this._scrollArea = i3, this._bufferService = s3, this._optionsService = r2, this._charSizeService = n2, this._renderService = a2, this._coreBrowserService = h2, this.scrollBarWidth = 0, this._currentRowHeight = 0, this._currentDeviceCellHeight = 0, this._lastRecordedBufferLength = 0, this._lastRecordedViewportHeight = 0, this._lastRecordedBufferHeight = 0, this._lastTouchY = 0, this._lastScrollTop = 0, this._wheelPartialScroll = 0, this._refreshAnimationFrame = null, this._ignoreNextScrollEvent = false, this._smoothScrollState = { startTime: 0, origin: -1, target: -1 }, this.scrollBarWidth = this._viewportElement.offsetWidth - this._scrollArea.offsetWidth || 15, this.register((0, o.addDisposableDomListener)(this._viewportElement, "scroll", this._handleScroll.bind(this))), this._activeBuffer = this._bufferService.buffer, this.register(this._bufferService.buffers.onBufferActivate((e4) => this._activeBuffer = e4.activeBuffer)), this._renderDimensions = this._renderService.dimensions, this.register(this._renderService.onDimensionsChange((e4) => this._renderDimensions = e4)), this._handleThemeChange(c2.colors), this.register(c2.onChangeColors((e4) => this._handleThemeChange(e4))), this.register(this._optionsService.onSpecificOptionChange("scrollback", () => this.syncScrollArea())), setTimeout(() => this.syncScrollArea(), 0);
              }
              _handleThemeChange(e3) {
                this._viewportElement.style.backgroundColor = e3.background.css;
              }
              _refresh(e3) {
                if (e3)
                  return this._innerRefresh(), void (null !== this._refreshAnimationFrame && this._coreBrowserService.window.cancelAnimationFrame(this._refreshAnimationFrame));
                null === this._refreshAnimationFrame && (this._refreshAnimationFrame = this._coreBrowserService.window.requestAnimationFrame(() => this._innerRefresh()));
              }
              _innerRefresh() {
                if (this._charSizeService.height > 0) {
                  this._currentRowHeight = this._renderService.dimensions.device.cell.height / this._coreBrowserService.dpr, this._currentDeviceCellHeight = this._renderService.dimensions.device.cell.height, this._lastRecordedViewportHeight = this._viewportElement.offsetHeight;
                  const e4 = Math.round(this._currentRowHeight * this._lastRecordedBufferLength) + (this._lastRecordedViewportHeight - this._renderService.dimensions.css.canvas.height);
                  this._lastRecordedBufferHeight !== e4 && (this._lastRecordedBufferHeight = e4, this._scrollArea.style.height = this._lastRecordedBufferHeight + "px");
                }
                const e3 = this._bufferService.buffer.ydisp * this._currentRowHeight;
                this._viewportElement.scrollTop !== e3 && (this._ignoreNextScrollEvent = true, this._viewportElement.scrollTop = e3), this._refreshAnimationFrame = null;
              }
              syncScrollArea(e3 = false) {
                if (this._lastRecordedBufferLength !== this._bufferService.buffer.lines.length)
                  return this._lastRecordedBufferLength = this._bufferService.buffer.lines.length, void this._refresh(e3);
                this._lastRecordedViewportHeight === this._renderService.dimensions.css.canvas.height && this._lastScrollTop === this._activeBuffer.ydisp * this._currentRowHeight && this._renderDimensions.device.cell.height === this._currentDeviceCellHeight || this._refresh(e3);
              }
              _handleScroll(e3) {
                if (this._lastScrollTop = this._viewportElement.scrollTop, !this._viewportElement.offsetParent)
                  return;
                if (this._ignoreNextScrollEvent)
                  return this._ignoreNextScrollEvent = false, void this._scrollLines(0);
                const t3 = Math.round(this._lastScrollTop / this._currentRowHeight) - this._bufferService.buffer.ydisp;
                this._scrollLines(t3);
              }
              _smoothScroll() {
                if (this._isDisposed || -1 === this._smoothScrollState.origin || -1 === this._smoothScrollState.target)
                  return;
                const e3 = this._smoothScrollPercent();
                this._viewportElement.scrollTop = this._smoothScrollState.origin + Math.round(e3 * (this._smoothScrollState.target - this._smoothScrollState.origin)), e3 < 1 ? this._coreBrowserService.window.requestAnimationFrame(() => this._smoothScroll()) : this._clearSmoothScrollState();
              }
              _smoothScrollPercent() {
                return this._optionsService.rawOptions.smoothScrollDuration && this._smoothScrollState.startTime ? Math.max(Math.min((Date.now() - this._smoothScrollState.startTime) / this._optionsService.rawOptions.smoothScrollDuration, 1), 0) : 1;
              }
              _clearSmoothScrollState() {
                this._smoothScrollState.startTime = 0, this._smoothScrollState.origin = -1, this._smoothScrollState.target = -1;
              }
              _bubbleScroll(e3, t3) {
                const i3 = this._viewportElement.scrollTop + this._lastRecordedViewportHeight;
                return !(t3 < 0 && 0 !== this._viewportElement.scrollTop || t3 > 0 && i3 < this._lastRecordedBufferHeight) || (e3.cancelable && e3.preventDefault(), false);
              }
              handleWheel(e3) {
                const t3 = this._getPixelsScrolled(e3);
                return 0 !== t3 && (this._optionsService.rawOptions.smoothScrollDuration ? (this._smoothScrollState.startTime = Date.now(), this._smoothScrollPercent() < 1 ? (this._smoothScrollState.origin = this._viewportElement.scrollTop, -1 === this._smoothScrollState.target ? this._smoothScrollState.target = this._viewportElement.scrollTop + t3 : this._smoothScrollState.target += t3, this._smoothScrollState.target = Math.max(Math.min(this._smoothScrollState.target, this._viewportElement.scrollHeight), 0), this._smoothScroll()) : this._clearSmoothScrollState()) : this._viewportElement.scrollTop += t3, this._bubbleScroll(e3, t3));
              }
              _getPixelsScrolled(e3) {
                if (0 === e3.deltaY || e3.shiftKey)
                  return 0;
                let t3 = this._applyScrollModifier(e3.deltaY, e3);
                return e3.deltaMode === WheelEvent.DOM_DELTA_LINE ? t3 *= this._currentRowHeight : e3.deltaMode === WheelEvent.DOM_DELTA_PAGE && (t3 *= this._currentRowHeight * this._bufferService.rows), t3;
              }
              getLinesScrolled(e3) {
                if (0 === e3.deltaY || e3.shiftKey)
                  return 0;
                let t3 = this._applyScrollModifier(e3.deltaY, e3);
                return e3.deltaMode === WheelEvent.DOM_DELTA_PIXEL ? (t3 /= this._currentRowHeight + 0, this._wheelPartialScroll += t3, t3 = Math.floor(Math.abs(this._wheelPartialScroll)) * (this._wheelPartialScroll > 0 ? 1 : -1), this._wheelPartialScroll %= 1) : e3.deltaMode === WheelEvent.DOM_DELTA_PAGE && (t3 *= this._bufferService.rows), t3;
              }
              _applyScrollModifier(e3, t3) {
                const i3 = this._optionsService.rawOptions.fastScrollModifier;
                return "alt" === i3 && t3.altKey || "ctrl" === i3 && t3.ctrlKey || "shift" === i3 && t3.shiftKey ? e3 * this._optionsService.rawOptions.fastScrollSensitivity * this._optionsService.rawOptions.scrollSensitivity : e3 * this._optionsService.rawOptions.scrollSensitivity;
              }
              handleTouchStart(e3) {
                this._lastTouchY = e3.touches[0].pageY;
              }
              handleTouchMove(e3) {
                const t3 = this._lastTouchY - e3.touches[0].pageY;
                return this._lastTouchY = e3.touches[0].pageY, 0 !== t3 && (this._viewportElement.scrollTop += t3, this._bubbleScroll(e3, t3));
              }
            };
            c = s2([r(3, h.IBufferService), r(4, h.IOptionsService), r(5, a.ICharSizeService), r(6, a.IRenderService), r(7, a.ICoreBrowserService), r(8, a.IThemeService)], c), t2.Viewport = c;
          }, 3107: function(e2, t2, i2) {
            var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
              var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                o2 = Reflect.decorate(e3, t3, i3, s3);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
              return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
            }, r = this && this.__param || function(e3, t3) {
              return function(i3, s3) {
                t3(i3, s3, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferDecorationRenderer = void 0;
            const n = i2(3656), o = i2(4725), a = i2(844), h = i2(2585);
            let c = class extends a.Disposable {
              constructor(e3, t3, i3, s3) {
                super(), this._screenElement = e3, this._bufferService = t3, this._decorationService = i3, this._renderService = s3, this._decorationElements = /* @__PURE__ */ new Map(), this._altBufferIsActive = false, this._dimensionsChanged = false, this._container = document.createElement("div"), this._container.classList.add("xterm-decoration-container"), this._screenElement.appendChild(this._container), this.register(this._renderService.onRenderedViewportChange(() => this._doRefreshDecorations())), this.register(this._renderService.onDimensionsChange(() => {
                  this._dimensionsChanged = true, this._queueRefresh();
                })), this.register((0, n.addDisposableDomListener)(window, "resize", () => this._queueRefresh())), this.register(this._bufferService.buffers.onBufferActivate(() => {
                  this._altBufferIsActive = this._bufferService.buffer === this._bufferService.buffers.alt;
                })), this.register(this._decorationService.onDecorationRegistered(() => this._queueRefresh())), this.register(this._decorationService.onDecorationRemoved((e4) => this._removeDecoration(e4))), this.register((0, a.toDisposable)(() => {
                  this._container.remove(), this._decorationElements.clear();
                }));
              }
              _queueRefresh() {
                void 0 === this._animationFrame && (this._animationFrame = this._renderService.addRefreshCallback(() => {
                  this._doRefreshDecorations(), this._animationFrame = void 0;
                }));
              }
              _doRefreshDecorations() {
                for (const e3 of this._decorationService.decorations)
                  this._renderDecoration(e3);
                this._dimensionsChanged = false;
              }
              _renderDecoration(e3) {
                this._refreshStyle(e3), this._dimensionsChanged && this._refreshXPosition(e3);
              }
              _createElement(e3) {
                var t3;
                const i3 = document.createElement("div");
                i3.classList.add("xterm-decoration"), i3.style.width = `${Math.round((e3.options.width || 1) * this._renderService.dimensions.css.cell.width)}px`, i3.style.height = (e3.options.height || 1) * this._renderService.dimensions.css.cell.height + "px", i3.style.top = (e3.marker.line - this._bufferService.buffers.active.ydisp) * this._renderService.dimensions.css.cell.height + "px", i3.style.lineHeight = `${this._renderService.dimensions.css.cell.height}px`;
                const s3 = null !== (t3 = e3.options.x) && void 0 !== t3 ? t3 : 0;
                return s3 && s3 > this._bufferService.cols && (i3.style.display = "none"), this._refreshXPosition(e3, i3), i3;
              }
              _refreshStyle(e3) {
                const t3 = e3.marker.line - this._bufferService.buffers.active.ydisp;
                if (t3 < 0 || t3 >= this._bufferService.rows)
                  e3.element && (e3.element.style.display = "none", e3.onRenderEmitter.fire(e3.element));
                else {
                  let i3 = this._decorationElements.get(e3);
                  i3 || (i3 = this._createElement(e3), e3.element = i3, this._decorationElements.set(e3, i3), this._container.appendChild(i3)), i3.style.top = t3 * this._renderService.dimensions.css.cell.height + "px", i3.style.display = this._altBufferIsActive ? "none" : "block", e3.onRenderEmitter.fire(i3);
                }
              }
              _refreshXPosition(e3, t3 = e3.element) {
                var i3;
                if (!t3)
                  return;
                const s3 = null !== (i3 = e3.options.x) && void 0 !== i3 ? i3 : 0;
                "right" === (e3.options.anchor || "left") ? t3.style.right = s3 ? s3 * this._renderService.dimensions.css.cell.width + "px" : "" : t3.style.left = s3 ? s3 * this._renderService.dimensions.css.cell.width + "px" : "";
              }
              _removeDecoration(e3) {
                var t3;
                null === (t3 = this._decorationElements.get(e3)) || void 0 === t3 || t3.remove(), this._decorationElements.delete(e3), e3.dispose();
              }
            };
            c = s2([r(1, h.IBufferService), r(2, h.IDecorationService), r(3, o.IRenderService)], c), t2.BufferDecorationRenderer = c;
          }, 5871: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.ColorZoneStore = void 0, t2.ColorZoneStore = class {
              constructor() {
                this._zones = [], this._zonePool = [], this._zonePoolIndex = 0, this._linePadding = { full: 0, left: 0, center: 0, right: 0 };
              }
              get zones() {
                return this._zonePool.length = Math.min(this._zonePool.length, this._zones.length), this._zones;
              }
              clear() {
                this._zones.length = 0, this._zonePoolIndex = 0;
              }
              addDecoration(e3) {
                if (e3.options.overviewRulerOptions) {
                  for (const t3 of this._zones)
                    if (t3.color === e3.options.overviewRulerOptions.color && t3.position === e3.options.overviewRulerOptions.position) {
                      if (this._lineIntersectsZone(t3, e3.marker.line))
                        return;
                      if (this._lineAdjacentToZone(t3, e3.marker.line, e3.options.overviewRulerOptions.position))
                        return void this._addLineToZone(t3, e3.marker.line);
                    }
                  if (this._zonePoolIndex < this._zonePool.length)
                    return this._zonePool[this._zonePoolIndex].color = e3.options.overviewRulerOptions.color, this._zonePool[this._zonePoolIndex].position = e3.options.overviewRulerOptions.position, this._zonePool[this._zonePoolIndex].startBufferLine = e3.marker.line, this._zonePool[this._zonePoolIndex].endBufferLine = e3.marker.line, void this._zones.push(this._zonePool[this._zonePoolIndex++]);
                  this._zones.push({ color: e3.options.overviewRulerOptions.color, position: e3.options.overviewRulerOptions.position, startBufferLine: e3.marker.line, endBufferLine: e3.marker.line }), this._zonePool.push(this._zones[this._zones.length - 1]), this._zonePoolIndex++;
                }
              }
              setPadding(e3) {
                this._linePadding = e3;
              }
              _lineIntersectsZone(e3, t3) {
                return t3 >= e3.startBufferLine && t3 <= e3.endBufferLine;
              }
              _lineAdjacentToZone(e3, t3, i2) {
                return t3 >= e3.startBufferLine - this._linePadding[i2 || "full"] && t3 <= e3.endBufferLine + this._linePadding[i2 || "full"];
              }
              _addLineToZone(e3, t3) {
                e3.startBufferLine = Math.min(e3.startBufferLine, t3), e3.endBufferLine = Math.max(e3.endBufferLine, t3);
              }
            };
          }, 5744: function(e2, t2, i2) {
            var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
              var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                o2 = Reflect.decorate(e3, t3, i3, s3);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
              return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
            }, r = this && this.__param || function(e3, t3) {
              return function(i3, s3) {
                t3(i3, s3, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.OverviewRulerRenderer = void 0;
            const n = i2(5871), o = i2(3656), a = i2(4725), h = i2(844), c = i2(2585), l = { full: 0, left: 0, center: 0, right: 0 }, d = { full: 0, left: 0, center: 0, right: 0 }, _ = { full: 0, left: 0, center: 0, right: 0 };
            let u = class extends h.Disposable {
              constructor(e3, t3, i3, s3, r2, o2, a2) {
                var c2;
                super(), this._viewportElement = e3, this._screenElement = t3, this._bufferService = i3, this._decorationService = s3, this._renderService = r2, this._optionsService = o2, this._coreBrowseService = a2, this._colorZoneStore = new n.ColorZoneStore(), this._shouldUpdateDimensions = true, this._shouldUpdateAnchor = true, this._lastKnownBufferLength = 0, this._canvas = document.createElement("canvas"), this._canvas.classList.add("xterm-decoration-overview-ruler"), this._refreshCanvasDimensions(), null === (c2 = this._viewportElement.parentElement) || void 0 === c2 || c2.insertBefore(this._canvas, this._viewportElement);
                const l2 = this._canvas.getContext("2d");
                if (!l2)
                  throw new Error("Ctx cannot be null");
                this._ctx = l2, this._registerDecorationListeners(), this._registerBufferChangeListeners(), this._registerDimensionChangeListeners(), this.register((0, h.toDisposable)(() => {
                  var e4;
                  null === (e4 = this._canvas) || void 0 === e4 || e4.remove();
                }));
              }
              get _width() {
                return this._optionsService.options.overviewRulerWidth || 0;
              }
              _registerDecorationListeners() {
                this.register(this._decorationService.onDecorationRegistered(() => this._queueRefresh(void 0, true))), this.register(this._decorationService.onDecorationRemoved(() => this._queueRefresh(void 0, true)));
              }
              _registerBufferChangeListeners() {
                this.register(this._renderService.onRenderedViewportChange(() => this._queueRefresh())), this.register(this._bufferService.buffers.onBufferActivate(() => {
                  this._canvas.style.display = this._bufferService.buffer === this._bufferService.buffers.alt ? "none" : "block";
                })), this.register(this._bufferService.onScroll(() => {
                  this._lastKnownBufferLength !== this._bufferService.buffers.normal.lines.length && (this._refreshDrawHeightConstants(), this._refreshColorZonePadding());
                }));
              }
              _registerDimensionChangeListeners() {
                this.register(this._renderService.onRender(() => {
                  this._containerHeight && this._containerHeight === this._screenElement.clientHeight || (this._queueRefresh(true), this._containerHeight = this._screenElement.clientHeight);
                })), this.register(this._optionsService.onSpecificOptionChange("overviewRulerWidth", () => this._queueRefresh(true))), this.register((0, o.addDisposableDomListener)(this._coreBrowseService.window, "resize", () => this._queueRefresh(true))), this._queueRefresh(true);
              }
              _refreshDrawConstants() {
                const e3 = Math.floor(this._canvas.width / 3), t3 = Math.ceil(this._canvas.width / 3);
                d.full = this._canvas.width, d.left = e3, d.center = t3, d.right = e3, this._refreshDrawHeightConstants(), _.full = 0, _.left = 0, _.center = d.left, _.right = d.left + d.center;
              }
              _refreshDrawHeightConstants() {
                l.full = Math.round(2 * this._coreBrowseService.dpr);
                const e3 = this._canvas.height / this._bufferService.buffer.lines.length, t3 = Math.round(Math.max(Math.min(e3, 12), 6) * this._coreBrowseService.dpr);
                l.left = t3, l.center = t3, l.right = t3;
              }
              _refreshColorZonePadding() {
                this._colorZoneStore.setPadding({ full: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * l.full), left: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * l.left), center: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * l.center), right: Math.floor(this._bufferService.buffers.active.lines.length / (this._canvas.height - 1) * l.right) }), this._lastKnownBufferLength = this._bufferService.buffers.normal.lines.length;
              }
              _refreshCanvasDimensions() {
                this._canvas.style.width = `${this._width}px`, this._canvas.width = Math.round(this._width * this._coreBrowseService.dpr), this._canvas.style.height = `${this._screenElement.clientHeight}px`, this._canvas.height = Math.round(this._screenElement.clientHeight * this._coreBrowseService.dpr), this._refreshDrawConstants(), this._refreshColorZonePadding();
              }
              _refreshDecorations() {
                this._shouldUpdateDimensions && this._refreshCanvasDimensions(), this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height), this._colorZoneStore.clear();
                for (const e4 of this._decorationService.decorations)
                  this._colorZoneStore.addDecoration(e4);
                this._ctx.lineWidth = 1;
                const e3 = this._colorZoneStore.zones;
                for (const t3 of e3)
                  "full" !== t3.position && this._renderColorZone(t3);
                for (const t3 of e3)
                  "full" === t3.position && this._renderColorZone(t3);
                this._shouldUpdateDimensions = false, this._shouldUpdateAnchor = false;
              }
              _renderColorZone(e3) {
                this._ctx.fillStyle = e3.color, this._ctx.fillRect(_[e3.position || "full"], Math.round((this._canvas.height - 1) * (e3.startBufferLine / this._bufferService.buffers.active.lines.length) - l[e3.position || "full"] / 2), d[e3.position || "full"], Math.round((this._canvas.height - 1) * ((e3.endBufferLine - e3.startBufferLine) / this._bufferService.buffers.active.lines.length) + l[e3.position || "full"]));
              }
              _queueRefresh(e3, t3) {
                this._shouldUpdateDimensions = e3 || this._shouldUpdateDimensions, this._shouldUpdateAnchor = t3 || this._shouldUpdateAnchor, void 0 === this._animationFrame && (this._animationFrame = this._coreBrowseService.window.requestAnimationFrame(() => {
                  this._refreshDecorations(), this._animationFrame = void 0;
                }));
              }
            };
            u = s2([r(2, c.IBufferService), r(3, c.IDecorationService), r(4, a.IRenderService), r(5, c.IOptionsService), r(6, a.ICoreBrowserService)], u), t2.OverviewRulerRenderer = u;
          }, 2950: function(e2, t2, i2) {
            var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
              var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                o2 = Reflect.decorate(e3, t3, i3, s3);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
              return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
            }, r = this && this.__param || function(e3, t3) {
              return function(i3, s3) {
                t3(i3, s3, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.CompositionHelper = void 0;
            const n = i2(4725), o = i2(2585), a = i2(2584);
            let h = class {
              constructor(e3, t3, i3, s3, r2, n2) {
                this._textarea = e3, this._compositionView = t3, this._bufferService = i3, this._optionsService = s3, this._coreService = r2, this._renderService = n2, this._isComposing = false, this._isSendingComposition = false, this._compositionPosition = { start: 0, end: 0 }, this._dataAlreadySent = "";
              }
              get isComposing() {
                return this._isComposing;
              }
              compositionstart() {
                this._isComposing = true, this._compositionPosition.start = this._textarea.value.length, this._compositionView.textContent = "", this._dataAlreadySent = "", this._compositionView.classList.add("active");
              }
              compositionupdate(e3) {
                this._compositionView.textContent = e3.data, this.updateCompositionElements(), setTimeout(() => {
                  this._compositionPosition.end = this._textarea.value.length;
                }, 0);
              }
              compositionend() {
                this._finalizeComposition(true);
              }
              keydown(e3) {
                if (this._isComposing || this._isSendingComposition) {
                  if (229 === e3.keyCode)
                    return false;
                  if (16 === e3.keyCode || 17 === e3.keyCode || 18 === e3.keyCode)
                    return false;
                  this._finalizeComposition(false);
                }
                return 229 !== e3.keyCode || (this._handleAnyTextareaChanges(), false);
              }
              _finalizeComposition(e3) {
                if (this._compositionView.classList.remove("active"), this._isComposing = false, e3) {
                  const e4 = { start: this._compositionPosition.start, end: this._compositionPosition.end };
                  this._isSendingComposition = true, setTimeout(() => {
                    if (this._isSendingComposition) {
                      let t3;
                      this._isSendingComposition = false, e4.start += this._dataAlreadySent.length, t3 = this._isComposing ? this._textarea.value.substring(e4.start, e4.end) : this._textarea.value.substring(e4.start), t3.length > 0 && this._coreService.triggerDataEvent(t3, true);
                    }
                  }, 0);
                } else {
                  this._isSendingComposition = false;
                  const e4 = this._textarea.value.substring(this._compositionPosition.start, this._compositionPosition.end);
                  this._coreService.triggerDataEvent(e4, true);
                }
              }
              _handleAnyTextareaChanges() {
                const e3 = this._textarea.value;
                setTimeout(() => {
                  if (!this._isComposing) {
                    const t3 = this._textarea.value, i3 = t3.replace(e3, "");
                    this._dataAlreadySent = i3, t3.length > e3.length ? this._coreService.triggerDataEvent(i3, true) : t3.length < e3.length ? this._coreService.triggerDataEvent(`${a.C0.DEL}`, true) : t3.length === e3.length && t3 !== e3 && this._coreService.triggerDataEvent(t3, true);
                  }
                }, 0);
              }
              updateCompositionElements(e3) {
                if (this._isComposing) {
                  if (this._bufferService.buffer.isCursorInViewport) {
                    const e4 = Math.min(this._bufferService.buffer.x, this._bufferService.cols - 1), t3 = this._renderService.dimensions.css.cell.height, i3 = this._bufferService.buffer.y * this._renderService.dimensions.css.cell.height, s3 = e4 * this._renderService.dimensions.css.cell.width;
                    this._compositionView.style.left = s3 + "px", this._compositionView.style.top = i3 + "px", this._compositionView.style.height = t3 + "px", this._compositionView.style.lineHeight = t3 + "px", this._compositionView.style.fontFamily = this._optionsService.rawOptions.fontFamily, this._compositionView.style.fontSize = this._optionsService.rawOptions.fontSize + "px";
                    const r2 = this._compositionView.getBoundingClientRect();
                    this._textarea.style.left = s3 + "px", this._textarea.style.top = i3 + "px", this._textarea.style.width = Math.max(r2.width, 1) + "px", this._textarea.style.height = Math.max(r2.height, 1) + "px", this._textarea.style.lineHeight = r2.height + "px";
                  }
                  e3 || setTimeout(() => this.updateCompositionElements(true), 0);
                }
              }
            };
            h = s2([r(2, o.IBufferService), r(3, o.IOptionsService), r(4, o.ICoreService), r(5, n.IRenderService)], h), t2.CompositionHelper = h;
          }, 9806: (e2, t2) => {
            function i2(e3, t3, i3) {
              const s2 = i3.getBoundingClientRect(), r = e3.getComputedStyle(i3), n = parseInt(r.getPropertyValue("padding-left")), o = parseInt(r.getPropertyValue("padding-top"));
              return [t3.clientX - s2.left - n, t3.clientY - s2.top - o];
            }
            Object.defineProperty(t2, "__esModule", { value: true }), t2.getCoords = t2.getCoordsRelativeToElement = void 0, t2.getCoordsRelativeToElement = i2, t2.getCoords = function(e3, t3, s2, r, n, o, a, h, c) {
              if (!o)
                return;
              const l = i2(e3, t3, s2);
              return l ? (l[0] = Math.ceil((l[0] + (c ? a / 2 : 0)) / a), l[1] = Math.ceil(l[1] / h), l[0] = Math.min(Math.max(l[0], 1), r + (c ? 1 : 0)), l[1] = Math.min(Math.max(l[1], 1), n), l) : void 0;
            };
          }, 9504: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.moveToCellSequence = void 0;
            const s2 = i2(2584);
            function r(e3, t3, i3, s3) {
              const r2 = e3 - n(e3, i3), a2 = t3 - n(t3, i3), l = Math.abs(r2 - a2) - function(e4, t4, i4) {
                let s4 = 0;
                const r3 = e4 - n(e4, i4), a3 = t4 - n(t4, i4);
                for (let n2 = 0; n2 < Math.abs(r3 - a3); n2++) {
                  const a4 = "A" === o(e4, t4) ? -1 : 1, h2 = i4.buffer.lines.get(r3 + a4 * n2);
                  (null == h2 ? void 0 : h2.isWrapped) && s4++;
                }
                return s4;
              }(e3, t3, i3);
              return c(l, h(o(e3, t3), s3));
            }
            function n(e3, t3) {
              let i3 = 0, s3 = t3.buffer.lines.get(e3), r2 = null == s3 ? void 0 : s3.isWrapped;
              for (; r2 && e3 >= 0 && e3 < t3.rows; )
                i3++, s3 = t3.buffer.lines.get(--e3), r2 = null == s3 ? void 0 : s3.isWrapped;
              return i3;
            }
            function o(e3, t3) {
              return e3 > t3 ? "A" : "B";
            }
            function a(e3, t3, i3, s3, r2, n2) {
              let o2 = e3, a2 = t3, h2 = "";
              for (; o2 !== i3 || a2 !== s3; )
                o2 += r2 ? 1 : -1, r2 && o2 > n2.cols - 1 ? (h2 += n2.buffer.translateBufferLineToString(a2, false, e3, o2), o2 = 0, e3 = 0, a2++) : !r2 && o2 < 0 && (h2 += n2.buffer.translateBufferLineToString(a2, false, 0, e3 + 1), o2 = n2.cols - 1, e3 = o2, a2--);
              return h2 + n2.buffer.translateBufferLineToString(a2, false, e3, o2);
            }
            function h(e3, t3) {
              const i3 = t3 ? "O" : "[";
              return s2.C0.ESC + i3 + e3;
            }
            function c(e3, t3) {
              e3 = Math.floor(e3);
              let i3 = "";
              for (let s3 = 0; s3 < e3; s3++)
                i3 += t3;
              return i3;
            }
            t2.moveToCellSequence = function(e3, t3, i3, s3) {
              const o2 = i3.buffer.x, l = i3.buffer.y;
              if (!i3.buffer.hasScrollback)
                return function(e4, t4, i4, s4, o3, l2) {
                  return 0 === r(t4, s4, o3, l2).length ? "" : c(a(e4, t4, e4, t4 - n(t4, o3), false, o3).length, h("D", l2));
                }(o2, l, 0, t3, i3, s3) + r(l, t3, i3, s3) + function(e4, t4, i4, s4, o3, l2) {
                  let d2;
                  d2 = r(t4, s4, o3, l2).length > 0 ? s4 - n(s4, o3) : t4;
                  const _2 = s4, u = function(e5, t5, i5, s5, o4, a2) {
                    let h2;
                    return h2 = r(i5, s5, o4, a2).length > 0 ? s5 - n(s5, o4) : t5, e5 < i5 && h2 <= s5 || e5 >= i5 && h2 < s5 ? "C" : "D";
                  }(e4, t4, i4, s4, o3, l2);
                  return c(a(e4, d2, i4, _2, "C" === u, o3).length, h(u, l2));
                }(o2, l, e3, t3, i3, s3);
              let d;
              if (l === t3)
                return d = o2 > e3 ? "D" : "C", c(Math.abs(o2 - e3), h(d, s3));
              d = l > t3 ? "D" : "C";
              const _ = Math.abs(l - t3);
              return c(function(e4, t4) {
                return t4.cols - e4;
              }(l > t3 ? e3 : o2, i3) + (_ - 1) * i3.cols + 1 + ((l > t3 ? o2 : e3) - 1), h(d, s3));
            };
          }, 1296: function(e2, t2, i2) {
            var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
              var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                o2 = Reflect.decorate(e3, t3, i3, s3);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
              return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
            }, r = this && this.__param || function(e3, t3) {
              return function(i3, s3) {
                t3(i3, s3, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.DomRenderer = void 0;
            const n = i2(9631), o = i2(3787), a = i2(2223), h = i2(6171), c = i2(4725), l = i2(8055), d = i2(8460), _ = i2(844), u = i2(2585), f = "xterm-dom-renderer-owner-", v = "xterm-focus";
            let g = 1, p = class extends _.Disposable {
              constructor(e3, t3, i3, s3, r2, a2, c2, l2, u2, v2) {
                super(), this._element = e3, this._screenElement = t3, this._viewportElement = i3, this._linkifier2 = s3, this._charSizeService = a2, this._optionsService = c2, this._bufferService = l2, this._coreBrowserService = u2, this._terminalClass = g++, this._rowElements = [], this._cellToRowElements = [], this.onRequestRedraw = this.register(new d.EventEmitter()).event, this._rowContainer = document.createElement("div"), this._rowContainer.classList.add("xterm-rows"), this._rowContainer.style.lineHeight = "normal", this._rowContainer.setAttribute("aria-hidden", "true"), this._refreshRowElements(this._bufferService.cols, this._bufferService.rows), this._selectionContainer = document.createElement("div"), this._selectionContainer.classList.add("xterm-selection"), this._selectionContainer.setAttribute("aria-hidden", "true"), this.dimensions = (0, h.createRenderDimensions)(), this._updateDimensions(), this.register(this._optionsService.onOptionChange(() => this._handleOptionsChanged())), this.register(v2.onChangeColors((e4) => this._injectCss(e4))), this._injectCss(v2.colors), this._rowFactory = r2.createInstance(o.DomRendererRowFactory, document), this._element.classList.add(f + this._terminalClass), this._screenElement.appendChild(this._rowContainer), this._screenElement.appendChild(this._selectionContainer), this.register(this._linkifier2.onShowLinkUnderline((e4) => this._handleLinkHover(e4))), this.register(this._linkifier2.onHideLinkUnderline((e4) => this._handleLinkLeave(e4))), this.register((0, _.toDisposable)(() => {
                  this._element.classList.remove(f + this._terminalClass), (0, n.removeElementFromParent)(this._rowContainer, this._selectionContainer, this._themeStyleElement, this._dimensionsStyleElement);
                }));
              }
              _updateDimensions() {
                const e3 = this._coreBrowserService.dpr;
                this.dimensions.device.char.width = this._charSizeService.width * e3, this.dimensions.device.char.height = Math.ceil(this._charSizeService.height * e3), this.dimensions.device.cell.width = this.dimensions.device.char.width + Math.round(this._optionsService.rawOptions.letterSpacing), this.dimensions.device.cell.height = Math.floor(this.dimensions.device.char.height * this._optionsService.rawOptions.lineHeight), this.dimensions.device.char.left = 0, this.dimensions.device.char.top = 0, this.dimensions.device.canvas.width = this.dimensions.device.cell.width * this._bufferService.cols, this.dimensions.device.canvas.height = this.dimensions.device.cell.height * this._bufferService.rows, this.dimensions.css.canvas.width = Math.round(this.dimensions.device.canvas.width / e3), this.dimensions.css.canvas.height = Math.round(this.dimensions.device.canvas.height / e3), this.dimensions.css.cell.width = this.dimensions.css.canvas.width / this._bufferService.cols, this.dimensions.css.cell.height = this.dimensions.css.canvas.height / this._bufferService.rows;
                for (const e4 of this._rowElements)
                  e4.style.width = `${this.dimensions.css.canvas.width}px`, e4.style.height = `${this.dimensions.css.cell.height}px`, e4.style.lineHeight = `${this.dimensions.css.cell.height}px`, e4.style.overflow = "hidden";
                this._dimensionsStyleElement || (this._dimensionsStyleElement = document.createElement("style"), this._screenElement.appendChild(this._dimensionsStyleElement));
                const t3 = `${this._terminalSelector} .xterm-rows span { display: inline-block; height: 100%; vertical-align: top; width: ${this.dimensions.css.cell.width}px}`;
                this._dimensionsStyleElement.textContent = t3, this._selectionContainer.style.height = this._viewportElement.style.height, this._screenElement.style.width = `${this.dimensions.css.canvas.width}px`, this._screenElement.style.height = `${this.dimensions.css.canvas.height}px`;
              }
              _injectCss(e3) {
                this._themeStyleElement || (this._themeStyleElement = document.createElement("style"), this._screenElement.appendChild(this._themeStyleElement));
                let t3 = `${this._terminalSelector} .xterm-rows { color: ${e3.foreground.css}; font-family: ${this._optionsService.rawOptions.fontFamily}; font-size: ${this._optionsService.rawOptions.fontSize}px;}`;
                t3 += `${this._terminalSelector} span:not(.${o.BOLD_CLASS}) { font-weight: ${this._optionsService.rawOptions.fontWeight};}${this._terminalSelector} span.${o.BOLD_CLASS} { font-weight: ${this._optionsService.rawOptions.fontWeightBold};}${this._terminalSelector} span.${o.ITALIC_CLASS} { font-style: italic;}`, t3 += "@keyframes blink_box_shadow_" + this._terminalClass + " { 50% {  box-shadow: none; }}", t3 += "@keyframes blink_block_" + this._terminalClass + ` { 0% {  background-color: ${e3.cursor.css};  color: ${e3.cursorAccent.css}; } 50% {  background-color: ${e3.cursorAccent.css};  color: ${e3.cursor.css}; }}`, t3 += `${this._terminalSelector} .xterm-rows:not(.xterm-focus) .${o.CURSOR_CLASS}.${o.CURSOR_STYLE_BLOCK_CLASS} { outline: 1px solid ${e3.cursor.css}; outline-offset: -1px;}${this._terminalSelector} .xterm-rows.xterm-focus .${o.CURSOR_CLASS}.${o.CURSOR_BLINK_CLASS}:not(.${o.CURSOR_STYLE_BLOCK_CLASS}) { animation: blink_box_shadow_` + this._terminalClass + ` 1s step-end infinite;}${this._terminalSelector} .xterm-rows.xterm-focus .${o.CURSOR_CLASS}.${o.CURSOR_BLINK_CLASS}.${o.CURSOR_STYLE_BLOCK_CLASS} { animation: blink_block_` + this._terminalClass + ` 1s step-end infinite;}${this._terminalSelector} .xterm-rows.xterm-focus .${o.CURSOR_CLASS}.${o.CURSOR_STYLE_BLOCK_CLASS} { background-color: ${e3.cursor.css}; color: ${e3.cursorAccent.css};}${this._terminalSelector} .xterm-rows .${o.CURSOR_CLASS}.${o.CURSOR_STYLE_BAR_CLASS} { box-shadow: ${this._optionsService.rawOptions.cursorWidth}px 0 0 ${e3.cursor.css} inset;}${this._terminalSelector} .xterm-rows .${o.CURSOR_CLASS}.${o.CURSOR_STYLE_UNDERLINE_CLASS} { box-shadow: 0 -1px 0 ${e3.cursor.css} inset;}`, t3 += `${this._terminalSelector} .xterm-selection { position: absolute; top: 0; left: 0; z-index: 1; pointer-events: none;}${this._terminalSelector}.focus .xterm-selection div { position: absolute; background-color: ${e3.selectionBackgroundOpaque.css};}${this._terminalSelector} .xterm-selection div { position: absolute; background-color: ${e3.selectionInactiveBackgroundOpaque.css};}`;
                for (const [i3, s3] of e3.ansi.entries())
                  t3 += `${this._terminalSelector} .xterm-fg-${i3} { color: ${s3.css}; }${this._terminalSelector} .xterm-bg-${i3} { background-color: ${s3.css}; }`;
                t3 += `${this._terminalSelector} .xterm-fg-${a.INVERTED_DEFAULT_COLOR} { color: ${l.color.opaque(e3.background).css}; }${this._terminalSelector} .xterm-bg-${a.INVERTED_DEFAULT_COLOR} { background-color: ${e3.foreground.css}; }`, this._themeStyleElement.textContent = t3;
              }
              handleDevicePixelRatioChange() {
                this._updateDimensions();
              }
              _refreshRowElements(e3, t3) {
                for (let e4 = this._rowElements.length; e4 <= t3; e4++) {
                  const e5 = document.createElement("div");
                  this._rowContainer.appendChild(e5), this._rowElements.push(e5);
                }
                for (; this._rowElements.length > t3; )
                  this._rowContainer.removeChild(this._rowElements.pop());
              }
              handleResize(e3, t3) {
                this._refreshRowElements(e3, t3), this._updateDimensions();
              }
              handleCharSizeChanged() {
                this._updateDimensions();
              }
              handleBlur() {
                this._rowContainer.classList.remove(v);
              }
              handleFocus() {
                this._rowContainer.classList.add(v);
              }
              handleSelectionChanged(e3, t3, i3) {
                for (; this._selectionContainer.children.length; )
                  this._selectionContainer.removeChild(this._selectionContainer.children[0]);
                if (this._rowFactory.handleSelectionChanged(e3, t3, i3), this.renderRows(0, this._bufferService.rows - 1), !e3 || !t3)
                  return;
                const s3 = e3[1] - this._bufferService.buffer.ydisp, r2 = t3[1] - this._bufferService.buffer.ydisp, n2 = Math.max(s3, 0), o2 = Math.min(r2, this._bufferService.rows - 1);
                if (n2 >= this._bufferService.rows || o2 < 0)
                  return;
                const a2 = document.createDocumentFragment();
                if (i3) {
                  const i4 = e3[0] > t3[0];
                  a2.appendChild(this._createSelectionElement(n2, i4 ? t3[0] : e3[0], i4 ? e3[0] : t3[0], o2 - n2 + 1));
                } else {
                  const i4 = s3 === n2 ? e3[0] : 0, h2 = n2 === r2 ? t3[0] : this._bufferService.cols;
                  a2.appendChild(this._createSelectionElement(n2, i4, h2));
                  const c2 = o2 - n2 - 1;
                  if (a2.appendChild(this._createSelectionElement(n2 + 1, 0, this._bufferService.cols, c2)), n2 !== o2) {
                    const e4 = r2 === o2 ? t3[0] : this._bufferService.cols;
                    a2.appendChild(this._createSelectionElement(o2, 0, e4));
                  }
                }
                this._selectionContainer.appendChild(a2);
              }
              _createSelectionElement(e3, t3, i3, s3 = 1) {
                const r2 = document.createElement("div");
                return r2.style.height = s3 * this.dimensions.css.cell.height + "px", r2.style.top = e3 * this.dimensions.css.cell.height + "px", r2.style.left = t3 * this.dimensions.css.cell.width + "px", r2.style.width = this.dimensions.css.cell.width * (i3 - t3) + "px", r2;
              }
              handleCursorMove() {
              }
              _handleOptionsChanged() {
                this._updateDimensions();
              }
              clear() {
                for (const e3 of this._rowElements)
                  e3.replaceChildren();
              }
              renderRows(e3, t3) {
                const i3 = this._bufferService.buffer.ybase + this._bufferService.buffer.y, s3 = Math.min(this._bufferService.buffer.x, this._bufferService.cols - 1), r2 = this._optionsService.rawOptions.cursorBlink;
                for (let n2 = e3; n2 <= t3; n2++) {
                  const e4 = this._rowElements[n2], t4 = n2 + this._bufferService.buffer.ydisp, o2 = this._bufferService.buffer.lines.get(t4), a2 = this._optionsService.rawOptions.cursorStyle;
                  this._cellToRowElements[n2] && this._cellToRowElements[n2].length === this._bufferService.cols || (this._cellToRowElements[n2] = new Int16Array(this._bufferService.cols)), e4.replaceChildren(this._rowFactory.createRow(o2, t4, t4 === i3, a2, s3, r2, this.dimensions.css.cell.width, this._bufferService.cols, this._cellToRowElements[n2]));
                }
              }
              get _terminalSelector() {
                return `.${f}${this._terminalClass}`;
              }
              _handleLinkHover(e3) {
                this._setCellUnderline(e3.x1, e3.x2, e3.y1, e3.y2, e3.cols, true);
              }
              _handleLinkLeave(e3) {
                this._setCellUnderline(e3.x1, e3.x2, e3.y1, e3.y2, e3.cols, false);
              }
              _setCellUnderline(e3, t3, i3, s3, r2, n2) {
                if (e3 = this._cellToRowElements[i3][e3], t3 = this._cellToRowElements[s3][t3], -1 !== e3 && -1 !== t3)
                  for (; e3 !== t3 || i3 !== s3; ) {
                    const t4 = this._rowElements[i3];
                    if (!t4)
                      return;
                    const s4 = t4.children[e3];
                    s4 && (s4.style.textDecoration = n2 ? "underline" : "none"), ++e3 >= r2 && (e3 = 0, i3++);
                  }
              }
            };
            p = s2([r(4, u.IInstantiationService), r(5, c.ICharSizeService), r(6, u.IOptionsService), r(7, u.IBufferService), r(8, c.ICoreBrowserService), r(9, c.IThemeService)], p), t2.DomRenderer = p;
          }, 3787: function(e2, t2, i2) {
            var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
              var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                o2 = Reflect.decorate(e3, t3, i3, s3);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
              return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
            }, r = this && this.__param || function(e3, t3) {
              return function(i3, s3) {
                t3(i3, s3, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.DomRendererRowFactory = t2.CURSOR_STYLE_UNDERLINE_CLASS = t2.CURSOR_STYLE_BAR_CLASS = t2.CURSOR_STYLE_BLOCK_CLASS = t2.CURSOR_BLINK_CLASS = t2.CURSOR_CLASS = t2.STRIKETHROUGH_CLASS = t2.UNDERLINE_CLASS = t2.ITALIC_CLASS = t2.DIM_CLASS = t2.BOLD_CLASS = void 0;
            const n = i2(2223), o = i2(643), a = i2(511), h = i2(2585), c = i2(8055), l = i2(4725), d = i2(4269), _ = i2(6171), u = i2(3734);
            t2.BOLD_CLASS = "xterm-bold", t2.DIM_CLASS = "xterm-dim", t2.ITALIC_CLASS = "xterm-italic", t2.UNDERLINE_CLASS = "xterm-underline", t2.STRIKETHROUGH_CLASS = "xterm-strikethrough", t2.CURSOR_CLASS = "xterm-cursor", t2.CURSOR_BLINK_CLASS = "xterm-cursor-blink", t2.CURSOR_STYLE_BLOCK_CLASS = "xterm-cursor-block", t2.CURSOR_STYLE_BAR_CLASS = "xterm-cursor-bar", t2.CURSOR_STYLE_UNDERLINE_CLASS = "xterm-cursor-underline";
            let f = class {
              constructor(e3, t3, i3, s3, r2, n2, o2) {
                this._document = e3, this._characterJoinerService = t3, this._optionsService = i3, this._coreBrowserService = s3, this._coreService = r2, this._decorationService = n2, this._themeService = o2, this._workCell = new a.CellData(), this._columnSelectMode = false;
              }
              handleSelectionChanged(e3, t3, i3) {
                this._selectionStart = e3, this._selectionEnd = t3, this._columnSelectMode = i3;
              }
              createRow(e3, i3, s3, r2, a2, h2, l2, _2, f2) {
                const g = this._document.createDocumentFragment(), p = this._characterJoinerService.getJoinedCharacters(i3);
                let S = 0;
                for (let t3 = Math.min(e3.length, _2) - 1; t3 >= 0; t3--)
                  if (e3.loadCell(t3, this._workCell).getCode() !== o.NULL_CELL_CODE || s3 && t3 === a2) {
                    S = t3 + 1;
                    break;
                  }
                const m = this._themeService.colors;
                let C = -1, b = 0;
                for (; b < S; b++) {
                  e3.loadCell(b, this._workCell);
                  let _3 = this._workCell.getWidth();
                  if (0 === _3) {
                    f2[b] = C;
                    continue;
                  }
                  let S2 = false, y = b, w = this._workCell;
                  if (p.length > 0 && b === p[0][0]) {
                    S2 = true;
                    const t3 = p.shift();
                    w = new d.JoinedCellData(this._workCell, e3.translateToString(true, t3[0], t3[1]), t3[1] - t3[0]), y = t3[1] - 1, _3 = w.getWidth();
                  }
                  const E = this._document.createElement("span");
                  if (_3 > 1 && (E.style.width = l2 * _3 + "px"), S2 && (E.style.display = "inline", a2 >= b && a2 <= y && (a2 = b)), !this._coreService.isCursorHidden && s3 && b === a2)
                    switch (E.classList.add(t2.CURSOR_CLASS), h2 && E.classList.add(t2.CURSOR_BLINK_CLASS), r2) {
                      case "bar":
                        E.classList.add(t2.CURSOR_STYLE_BAR_CLASS);
                        break;
                      case "underline":
                        E.classList.add(t2.CURSOR_STYLE_UNDERLINE_CLASS);
                        break;
                      default:
                        E.classList.add(t2.CURSOR_STYLE_BLOCK_CLASS);
                    }
                  if (w.isBold() && E.classList.add(t2.BOLD_CLASS), w.isItalic() && E.classList.add(t2.ITALIC_CLASS), w.isDim() && E.classList.add(t2.DIM_CLASS), w.isInvisible() ? E.textContent = o.WHITESPACE_CELL_CHAR : E.textContent = w.getChars() || o.WHITESPACE_CELL_CHAR, w.isUnderline() && (E.classList.add(`${t2.UNDERLINE_CLASS}-${w.extended.underlineStyle}`), " " === E.textContent && (E.textContent = "\xA0"), !w.isUnderlineColorDefault()))
                    if (w.isUnderlineColorRGB())
                      E.style.textDecorationColor = `rgb(${u.AttributeData.toColorRGB(w.getUnderlineColor()).join(",")})`;
                    else {
                      let e4 = w.getUnderlineColor();
                      this._optionsService.rawOptions.drawBoldTextInBrightColors && w.isBold() && e4 < 8 && (e4 += 8), E.style.textDecorationColor = m.ansi[e4].css;
                    }
                  w.isStrikethrough() && E.classList.add(t2.STRIKETHROUGH_CLASS);
                  let L = w.getFgColor(), k = w.getFgColorMode(), R = w.getBgColor(), D = w.getBgColorMode();
                  const A = !!w.isInverse();
                  if (A) {
                    const e4 = L;
                    L = R, R = e4;
                    const t3 = k;
                    k = D, D = t3;
                  }
                  let x, B, T = false;
                  this._decorationService.forEachDecorationAtCell(b, i3, void 0, (e4) => {
                    "top" !== e4.options.layer && T || (e4.backgroundColorRGB && (D = 50331648, R = e4.backgroundColorRGB.rgba >> 8 & 16777215, x = e4.backgroundColorRGB), e4.foregroundColorRGB && (k = 50331648, L = e4.foregroundColorRGB.rgba >> 8 & 16777215, B = e4.foregroundColorRGB), T = "top" === e4.options.layer);
                  });
                  const M = this._isCellInSelection(b, i3);
                  let O;
                  switch (T || m.selectionForeground && M && (k = 50331648, L = m.selectionForeground.rgba >> 8 & 16777215, B = m.selectionForeground), M && (x = this._coreBrowserService.isFocused ? m.selectionBackgroundOpaque : m.selectionInactiveBackgroundOpaque, T = true), T && E.classList.add("xterm-decoration-top"), D) {
                    case 16777216:
                    case 33554432:
                      O = m.ansi[R], E.classList.add(`xterm-bg-${R}`);
                      break;
                    case 50331648:
                      O = c.rgba.toColor(R >> 16, R >> 8 & 255, 255 & R), this._addStyle(E, `background-color:#${v((R >>> 0).toString(16), "0", 6)}`);
                      break;
                    default:
                      A ? (O = m.foreground, E.classList.add(`xterm-bg-${n.INVERTED_DEFAULT_COLOR}`)) : O = m.background;
                  }
                  switch (x || w.isDim() && (x = c.color.multiplyOpacity(O, 0.5)), k) {
                    case 16777216:
                    case 33554432:
                      w.isBold() && L < 8 && this._optionsService.rawOptions.drawBoldTextInBrightColors && (L += 8), this._applyMinimumContrast(E, O, m.ansi[L], w, x, void 0) || E.classList.add(`xterm-fg-${L}`);
                      break;
                    case 50331648:
                      const e4 = c.rgba.toColor(L >> 16 & 255, L >> 8 & 255, 255 & L);
                      this._applyMinimumContrast(E, O, e4, w, x, B) || this._addStyle(E, `color:#${v(L.toString(16), "0", 6)}`);
                      break;
                    default:
                      this._applyMinimumContrast(E, O, m.foreground, w, x, void 0) || A && E.classList.add(`xterm-fg-${n.INVERTED_DEFAULT_COLOR}`);
                  }
                  g.appendChild(E), f2[b] = ++C, b = y;
                }
                return b < _2 - 1 && f2.subarray(b).fill(++C), g;
              }
              _applyMinimumContrast(e3, t3, i3, s3, r2, n2) {
                if (1 === this._optionsService.rawOptions.minimumContrastRatio || (0, _.excludeFromContrastRatioDemands)(s3.getCode()))
                  return false;
                let o2;
                return r2 || n2 || (o2 = this._themeService.colors.contrastCache.getColor(t3.rgba, i3.rgba)), void 0 === o2 && (o2 = c.color.ensureContrastRatio(r2 || t3, n2 || i3, this._optionsService.rawOptions.minimumContrastRatio), this._themeService.colors.contrastCache.setColor((r2 || t3).rgba, (n2 || i3).rgba, null != o2 ? o2 : null)), !!o2 && (this._addStyle(e3, `color:${o2.css}`), true);
              }
              _addStyle(e3, t3) {
                e3.setAttribute("style", `${e3.getAttribute("style") || ""}${t3};`);
              }
              _isCellInSelection(e3, t3) {
                const i3 = this._selectionStart, s3 = this._selectionEnd;
                return !(!i3 || !s3) && (this._columnSelectMode ? i3[0] <= s3[0] ? e3 >= i3[0] && t3 >= i3[1] && e3 < s3[0] && t3 <= s3[1] : e3 < i3[0] && t3 >= i3[1] && e3 >= s3[0] && t3 <= s3[1] : t3 > i3[1] && t3 < s3[1] || i3[1] === s3[1] && t3 === i3[1] && e3 >= i3[0] && e3 < s3[0] || i3[1] < s3[1] && t3 === s3[1] && e3 < s3[0] || i3[1] < s3[1] && t3 === i3[1] && e3 >= i3[0]);
              }
            };
            function v(e3, t3, i3) {
              for (; e3.length < i3; )
                e3 = t3 + e3;
              return e3;
            }
            f = s2([r(1, l.ICharacterJoinerService), r(2, h.IOptionsService), r(3, l.ICoreBrowserService), r(4, h.ICoreService), r(5, h.IDecorationService), r(6, l.IThemeService)], f), t2.DomRendererRowFactory = f;
          }, 2223: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.TEXT_BASELINE = t2.DIM_OPACITY = t2.INVERTED_DEFAULT_COLOR = void 0;
            const s2 = i2(6114);
            t2.INVERTED_DEFAULT_COLOR = 257, t2.DIM_OPACITY = 0.5, t2.TEXT_BASELINE = s2.isFirefox || s2.isLegacyEdge ? "bottom" : "ideographic";
          }, 6171: (e2, t2) => {
            function i2(e3) {
              return 57508 <= e3 && e3 <= 57558;
            }
            Object.defineProperty(t2, "__esModule", { value: true }), t2.createRenderDimensions = t2.excludeFromContrastRatioDemands = t2.isRestrictedPowerlineGlyph = t2.isPowerlineGlyph = t2.throwIfFalsy = void 0, t2.throwIfFalsy = function(e3) {
              if (!e3)
                throw new Error("value must not be falsy");
              return e3;
            }, t2.isPowerlineGlyph = i2, t2.isRestrictedPowerlineGlyph = function(e3) {
              return 57520 <= e3 && e3 <= 57527;
            }, t2.excludeFromContrastRatioDemands = function(e3) {
              return i2(e3) || function(e4) {
                return 9472 <= e4 && e4 <= 9631;
              }(e3);
            }, t2.createRenderDimensions = function() {
              return { css: { canvas: { width: 0, height: 0 }, cell: { width: 0, height: 0 } }, device: { canvas: { width: 0, height: 0 }, cell: { width: 0, height: 0 }, char: { width: 0, height: 0, left: 0, top: 0 } } };
            };
          }, 456: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.SelectionModel = void 0, t2.SelectionModel = class {
              constructor(e3) {
                this._bufferService = e3, this.isSelectAllActive = false, this.selectionStartLength = 0;
              }
              clearSelection() {
                this.selectionStart = void 0, this.selectionEnd = void 0, this.isSelectAllActive = false, this.selectionStartLength = 0;
              }
              get finalSelectionStart() {
                return this.isSelectAllActive ? [0, 0] : this.selectionEnd && this.selectionStart && this.areSelectionValuesReversed() ? this.selectionEnd : this.selectionStart;
              }
              get finalSelectionEnd() {
                if (this.isSelectAllActive)
                  return [this._bufferService.cols, this._bufferService.buffer.ybase + this._bufferService.rows - 1];
                if (this.selectionStart) {
                  if (!this.selectionEnd || this.areSelectionValuesReversed()) {
                    const e3 = this.selectionStart[0] + this.selectionStartLength;
                    return e3 > this._bufferService.cols ? e3 % this._bufferService.cols == 0 ? [this._bufferService.cols, this.selectionStart[1] + Math.floor(e3 / this._bufferService.cols) - 1] : [e3 % this._bufferService.cols, this.selectionStart[1] + Math.floor(e3 / this._bufferService.cols)] : [e3, this.selectionStart[1]];
                  }
                  if (this.selectionStartLength && this.selectionEnd[1] === this.selectionStart[1]) {
                    const e3 = this.selectionStart[0] + this.selectionStartLength;
                    return e3 > this._bufferService.cols ? [e3 % this._bufferService.cols, this.selectionStart[1] + Math.floor(e3 / this._bufferService.cols)] : [Math.max(e3, this.selectionEnd[0]), this.selectionEnd[1]];
                  }
                  return this.selectionEnd;
                }
              }
              areSelectionValuesReversed() {
                const e3 = this.selectionStart, t3 = this.selectionEnd;
                return !(!e3 || !t3) && (e3[1] > t3[1] || e3[1] === t3[1] && e3[0] > t3[0]);
              }
              handleTrim(e3) {
                return this.selectionStart && (this.selectionStart[1] -= e3), this.selectionEnd && (this.selectionEnd[1] -= e3), this.selectionEnd && this.selectionEnd[1] < 0 ? (this.clearSelection(), true) : (this.selectionStart && this.selectionStart[1] < 0 && (this.selectionStart[1] = 0), false);
              }
            };
          }, 428: function(e2, t2, i2) {
            var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
              var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                o2 = Reflect.decorate(e3, t3, i3, s3);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
              return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
            }, r = this && this.__param || function(e3, t3) {
              return function(i3, s3) {
                t3(i3, s3, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.CharSizeService = void 0;
            const n = i2(2585), o = i2(8460), a = i2(844);
            let h = class extends a.Disposable {
              constructor(e3, t3, i3) {
                super(), this._optionsService = i3, this.width = 0, this.height = 0, this._onCharSizeChange = this.register(new o.EventEmitter()), this.onCharSizeChange = this._onCharSizeChange.event, this._measureStrategy = new c(e3, t3, this._optionsService), this.register(this._optionsService.onMultipleOptionChange(["fontFamily", "fontSize"], () => this.measure()));
              }
              get hasValidSize() {
                return this.width > 0 && this.height > 0;
              }
              measure() {
                const e3 = this._measureStrategy.measure();
                e3.width === this.width && e3.height === this.height || (this.width = e3.width, this.height = e3.height, this._onCharSizeChange.fire());
              }
            };
            h = s2([r(2, n.IOptionsService)], h), t2.CharSizeService = h;
            class c {
              constructor(e3, t3, i3) {
                this._document = e3, this._parentElement = t3, this._optionsService = i3, this._result = { width: 0, height: 0 }, this._measureElement = this._document.createElement("span"), this._measureElement.classList.add("xterm-char-measure-element"), this._measureElement.textContent = "W", this._measureElement.setAttribute("aria-hidden", "true"), this._parentElement.appendChild(this._measureElement);
              }
              measure() {
                this._measureElement.style.fontFamily = this._optionsService.rawOptions.fontFamily, this._measureElement.style.fontSize = `${this._optionsService.rawOptions.fontSize}px`;
                const e3 = this._measureElement.getBoundingClientRect();
                return 0 !== e3.width && 0 !== e3.height && (this._result.width = e3.width, this._result.height = Math.ceil(e3.height)), this._result;
              }
            }
          }, 4269: function(e2, t2, i2) {
            var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
              var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                o2 = Reflect.decorate(e3, t3, i3, s3);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
              return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
            }, r = this && this.__param || function(e3, t3) {
              return function(i3, s3) {
                t3(i3, s3, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.CharacterJoinerService = t2.JoinedCellData = void 0;
            const n = i2(3734), o = i2(643), a = i2(511), h = i2(2585);
            class c extends n.AttributeData {
              constructor(e3, t3, i3) {
                super(), this.content = 0, this.combinedData = "", this.fg = e3.fg, this.bg = e3.bg, this.combinedData = t3, this._width = i3;
              }
              isCombined() {
                return 2097152;
              }
              getWidth() {
                return this._width;
              }
              getChars() {
                return this.combinedData;
              }
              getCode() {
                return 2097151;
              }
              setFromCharData(e3) {
                throw new Error("not implemented");
              }
              getAsCharData() {
                return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
              }
            }
            t2.JoinedCellData = c;
            let l = class e3 {
              constructor(e4) {
                this._bufferService = e4, this._characterJoiners = [], this._nextCharacterJoinerId = 0, this._workCell = new a.CellData();
              }
              register(e4) {
                const t3 = { id: this._nextCharacterJoinerId++, handler: e4 };
                return this._characterJoiners.push(t3), t3.id;
              }
              deregister(e4) {
                for (let t3 = 0; t3 < this._characterJoiners.length; t3++)
                  if (this._characterJoiners[t3].id === e4)
                    return this._characterJoiners.splice(t3, 1), true;
                return false;
              }
              getJoinedCharacters(e4) {
                if (0 === this._characterJoiners.length)
                  return [];
                const t3 = this._bufferService.buffer.lines.get(e4);
                if (!t3 || 0 === t3.length)
                  return [];
                const i3 = [], s3 = t3.translateToString(true);
                let r2 = 0, n2 = 0, a2 = 0, h2 = t3.getFg(0), c2 = t3.getBg(0);
                for (let e5 = 0; e5 < t3.getTrimmedLength(); e5++)
                  if (t3.loadCell(e5, this._workCell), 0 !== this._workCell.getWidth()) {
                    if (this._workCell.fg !== h2 || this._workCell.bg !== c2) {
                      if (e5 - r2 > 1) {
                        const e6 = this._getJoinedRanges(s3, a2, n2, t3, r2);
                        for (let t4 = 0; t4 < e6.length; t4++)
                          i3.push(e6[t4]);
                      }
                      r2 = e5, a2 = n2, h2 = this._workCell.fg, c2 = this._workCell.bg;
                    }
                    n2 += this._workCell.getChars().length || o.WHITESPACE_CELL_CHAR.length;
                  }
                if (this._bufferService.cols - r2 > 1) {
                  const e5 = this._getJoinedRanges(s3, a2, n2, t3, r2);
                  for (let t4 = 0; t4 < e5.length; t4++)
                    i3.push(e5[t4]);
                }
                return i3;
              }
              _getJoinedRanges(t3, i3, s3, r2, n2) {
                const o2 = t3.substring(i3, s3);
                let a2 = [];
                try {
                  a2 = this._characterJoiners[0].handler(o2);
                } catch (e4) {
                  console.error(e4);
                }
                for (let t4 = 1; t4 < this._characterJoiners.length; t4++)
                  try {
                    const i4 = this._characterJoiners[t4].handler(o2);
                    for (let t5 = 0; t5 < i4.length; t5++)
                      e3._mergeRanges(a2, i4[t5]);
                  } catch (e4) {
                    console.error(e4);
                  }
                return this._stringRangesToCellRanges(a2, r2, n2), a2;
              }
              _stringRangesToCellRanges(e4, t3, i3) {
                let s3 = 0, r2 = false, n2 = 0, a2 = e4[s3];
                if (a2) {
                  for (let h2 = i3; h2 < this._bufferService.cols; h2++) {
                    const i4 = t3.getWidth(h2), c2 = t3.getString(h2).length || o.WHITESPACE_CELL_CHAR.length;
                    if (0 !== i4) {
                      if (!r2 && a2[0] <= n2 && (a2[0] = h2, r2 = true), a2[1] <= n2) {
                        if (a2[1] = h2, a2 = e4[++s3], !a2)
                          break;
                        a2[0] <= n2 ? (a2[0] = h2, r2 = true) : r2 = false;
                      }
                      n2 += c2;
                    }
                  }
                  a2 && (a2[1] = this._bufferService.cols);
                }
              }
              static _mergeRanges(e4, t3) {
                let i3 = false;
                for (let s3 = 0; s3 < e4.length; s3++) {
                  const r2 = e4[s3];
                  if (i3) {
                    if (t3[1] <= r2[0])
                      return e4[s3 - 1][1] = t3[1], e4;
                    if (t3[1] <= r2[1])
                      return e4[s3 - 1][1] = Math.max(t3[1], r2[1]), e4.splice(s3, 1), e4;
                    e4.splice(s3, 1), s3--;
                  } else {
                    if (t3[1] <= r2[0])
                      return e4.splice(s3, 0, t3), e4;
                    if (t3[1] <= r2[1])
                      return r2[0] = Math.min(t3[0], r2[0]), e4;
                    t3[0] < r2[1] && (r2[0] = Math.min(t3[0], r2[0]), i3 = true);
                  }
                }
                return i3 ? e4[e4.length - 1][1] = t3[1] : e4.push(t3), e4;
              }
            };
            l = s2([r(0, h.IBufferService)], l), t2.CharacterJoinerService = l;
          }, 5114: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.CoreBrowserService = void 0, t2.CoreBrowserService = class {
              constructor(e3, t3) {
                this._textarea = e3, this.window = t3, this._isFocused = false, this._cachedIsFocused = void 0, this._textarea.addEventListener("focus", () => this._isFocused = true), this._textarea.addEventListener("blur", () => this._isFocused = false);
              }
              get dpr() {
                return this.window.devicePixelRatio;
              }
              get isFocused() {
                return void 0 === this._cachedIsFocused && (this._cachedIsFocused = this._isFocused && this._textarea.ownerDocument.hasFocus(), queueMicrotask(() => this._cachedIsFocused = void 0)), this._cachedIsFocused;
              }
            };
          }, 8934: function(e2, t2, i2) {
            var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
              var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                o2 = Reflect.decorate(e3, t3, i3, s3);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
              return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
            }, r = this && this.__param || function(e3, t3) {
              return function(i3, s3) {
                t3(i3, s3, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.MouseService = void 0;
            const n = i2(4725), o = i2(9806);
            let a = class {
              constructor(e3, t3) {
                this._renderService = e3, this._charSizeService = t3;
              }
              getCoords(e3, t3, i3, s3, r2) {
                return (0, o.getCoords)(window, e3, t3, i3, s3, this._charSizeService.hasValidSize, this._renderService.dimensions.css.cell.width, this._renderService.dimensions.css.cell.height, r2);
              }
              getMouseReportCoords(e3, t3) {
                const i3 = (0, o.getCoordsRelativeToElement)(window, e3, t3);
                if (!(!this._charSizeService.hasValidSize || i3[0] < 0 || i3[1] < 0 || i3[0] >= this._renderService.dimensions.css.canvas.width || i3[1] >= this._renderService.dimensions.css.canvas.height))
                  return { col: Math.floor(i3[0] / this._renderService.dimensions.css.cell.width), row: Math.floor(i3[1] / this._renderService.dimensions.css.cell.height), x: Math.floor(i3[0]), y: Math.floor(i3[1]) };
              }
            };
            a = s2([r(0, n.IRenderService), r(1, n.ICharSizeService)], a), t2.MouseService = a;
          }, 3230: function(e2, t2, i2) {
            var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
              var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                o2 = Reflect.decorate(e3, t3, i3, s3);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
              return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
            }, r = this && this.__param || function(e3, t3) {
              return function(i3, s3) {
                t3(i3, s3, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.RenderService = void 0;
            const n = i2(6193), o = i2(8460), a = i2(844), h = i2(5596), c = i2(3656), l = i2(2585), d = i2(4725), _ = i2(7226);
            let u = class extends a.Disposable {
              constructor(e3, t3, i3, s3, r2, a2, l2, d2) {
                if (super(), this._rowCount = e3, this._charSizeService = s3, this._pausedResizeTask = new _.DebouncedIdleTask(), this._isPaused = false, this._needsFullRefresh = false, this._isNextRenderRedrawOnly = true, this._needsSelectionRefresh = false, this._canvasWidth = 0, this._canvasHeight = 0, this._selectionState = { start: void 0, end: void 0, columnSelectMode: false }, this._onDimensionsChange = this.register(new o.EventEmitter()), this.onDimensionsChange = this._onDimensionsChange.event, this._onRenderedViewportChange = this.register(new o.EventEmitter()), this.onRenderedViewportChange = this._onRenderedViewportChange.event, this._onRender = this.register(new o.EventEmitter()), this.onRender = this._onRender.event, this._onRefreshRequest = this.register(new o.EventEmitter()), this.onRefreshRequest = this._onRefreshRequest.event, this.register({ dispose: () => {
                  var e4;
                  return null === (e4 = this._renderer) || void 0 === e4 ? void 0 : e4.dispose();
                } }), this._renderDebouncer = new n.RenderDebouncer(l2.window, (e4, t4) => this._renderRows(e4, t4)), this.register(this._renderDebouncer), this._screenDprMonitor = new h.ScreenDprMonitor(l2.window), this._screenDprMonitor.setListener(() => this.handleDevicePixelRatioChange()), this.register(this._screenDprMonitor), this.register(a2.onResize(() => this._fullRefresh())), this.register(a2.buffers.onBufferActivate(() => {
                  var e4;
                  return null === (e4 = this._renderer) || void 0 === e4 ? void 0 : e4.clear();
                })), this.register(i3.onOptionChange(() => this._handleOptionsChanged())), this.register(this._charSizeService.onCharSizeChange(() => this.handleCharSizeChanged())), this.register(r2.onDecorationRegistered(() => this._fullRefresh())), this.register(r2.onDecorationRemoved(() => this._fullRefresh())), this.register(i3.onMultipleOptionChange(["customGlyphs", "drawBoldTextInBrightColors", "letterSpacing", "lineHeight", "fontFamily", "fontSize", "fontWeight", "fontWeightBold", "minimumContrastRatio"], () => {
                  this.clear(), this.handleResize(a2.cols, a2.rows), this._fullRefresh();
                })), this.register(i3.onMultipleOptionChange(["cursorBlink", "cursorStyle"], () => this.refreshRows(a2.buffer.y, a2.buffer.y, true))), this.register((0, c.addDisposableDomListener)(l2.window, "resize", () => this.handleDevicePixelRatioChange())), this.register(d2.onChangeColors(() => this._fullRefresh())), "IntersectionObserver" in l2.window) {
                  const e4 = new l2.window.IntersectionObserver((e5) => this._handleIntersectionChange(e5[e5.length - 1]), { threshold: 0 });
                  e4.observe(t3), this.register({ dispose: () => e4.disconnect() });
                }
              }
              get dimensions() {
                return this._renderer.dimensions;
              }
              _handleIntersectionChange(e3) {
                this._isPaused = void 0 === e3.isIntersecting ? 0 === e3.intersectionRatio : !e3.isIntersecting, this._isPaused || this._charSizeService.hasValidSize || this._charSizeService.measure(), !this._isPaused && this._needsFullRefresh && (this._pausedResizeTask.flush(), this.refreshRows(0, this._rowCount - 1), this._needsFullRefresh = false);
              }
              refreshRows(e3, t3, i3 = false) {
                this._isPaused ? this._needsFullRefresh = true : (i3 || (this._isNextRenderRedrawOnly = false), this._renderDebouncer.refresh(e3, t3, this._rowCount));
              }
              _renderRows(e3, t3) {
                this._renderer && (this._renderer.renderRows(e3, t3), this._needsSelectionRefresh && (this._renderer.handleSelectionChanged(this._selectionState.start, this._selectionState.end, this._selectionState.columnSelectMode), this._needsSelectionRefresh = false), this._isNextRenderRedrawOnly || this._onRenderedViewportChange.fire({ start: e3, end: t3 }), this._onRender.fire({ start: e3, end: t3 }), this._isNextRenderRedrawOnly = true);
              }
              resize(e3, t3) {
                this._rowCount = t3, this._fireOnCanvasResize();
              }
              _handleOptionsChanged() {
                this._renderer && (this.refreshRows(0, this._rowCount - 1), this._fireOnCanvasResize());
              }
              _fireOnCanvasResize() {
                this._renderer && (this._renderer.dimensions.css.canvas.width === this._canvasWidth && this._renderer.dimensions.css.canvas.height === this._canvasHeight || this._onDimensionsChange.fire(this._renderer.dimensions));
              }
              hasRenderer() {
                return !!this._renderer;
              }
              setRenderer(e3) {
                var t3;
                null === (t3 = this._renderer) || void 0 === t3 || t3.dispose(), this._renderer = e3, this._renderer.onRequestRedraw((e4) => this.refreshRows(e4.start, e4.end, true)), this._needsSelectionRefresh = true, this._fullRefresh();
              }
              addRefreshCallback(e3) {
                return this._renderDebouncer.addRefreshCallback(e3);
              }
              _fullRefresh() {
                this._isPaused ? this._needsFullRefresh = true : this.refreshRows(0, this._rowCount - 1);
              }
              clearTextureAtlas() {
                var e3, t3;
                this._renderer && (null === (t3 = (e3 = this._renderer).clearTextureAtlas) || void 0 === t3 || t3.call(e3), this._fullRefresh());
              }
              handleDevicePixelRatioChange() {
                this._charSizeService.measure(), this._renderer && (this._renderer.handleDevicePixelRatioChange(), this.refreshRows(0, this._rowCount - 1));
              }
              handleResize(e3, t3) {
                this._renderer && (this._isPaused ? this._pausedResizeTask.set(() => this._renderer.handleResize(e3, t3)) : this._renderer.handleResize(e3, t3), this._fullRefresh());
              }
              handleCharSizeChanged() {
                var e3;
                null === (e3 = this._renderer) || void 0 === e3 || e3.handleCharSizeChanged();
              }
              handleBlur() {
                var e3;
                null === (e3 = this._renderer) || void 0 === e3 || e3.handleBlur();
              }
              handleFocus() {
                var e3;
                null === (e3 = this._renderer) || void 0 === e3 || e3.handleFocus();
              }
              handleSelectionChanged(e3, t3, i3) {
                var s3;
                this._selectionState.start = e3, this._selectionState.end = t3, this._selectionState.columnSelectMode = i3, null === (s3 = this._renderer) || void 0 === s3 || s3.handleSelectionChanged(e3, t3, i3);
              }
              handleCursorMove() {
                var e3;
                null === (e3 = this._renderer) || void 0 === e3 || e3.handleCursorMove();
              }
              clear() {
                var e3;
                null === (e3 = this._renderer) || void 0 === e3 || e3.clear();
              }
            };
            u = s2([r(2, l.IOptionsService), r(3, d.ICharSizeService), r(4, l.IDecorationService), r(5, l.IBufferService), r(6, d.ICoreBrowserService), r(7, d.IThemeService)], u), t2.RenderService = u;
          }, 9312: function(e2, t2, i2) {
            var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
              var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                o2 = Reflect.decorate(e3, t3, i3, s3);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
              return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
            }, r = this && this.__param || function(e3, t3) {
              return function(i3, s3) {
                t3(i3, s3, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.SelectionService = void 0;
            const n = i2(6114), o = i2(456), a = i2(511), h = i2(8460), c = i2(4725), l = i2(2585), d = i2(9806), _ = i2(9504), u = i2(844), f = i2(4841), v = String.fromCharCode(160), g = new RegExp(v, "g");
            let p = class extends u.Disposable {
              constructor(e3, t3, i3, s3, r2, n2, c2, l2, d2) {
                super(), this._element = e3, this._screenElement = t3, this._linkifier = i3, this._bufferService = s3, this._coreService = r2, this._mouseService = n2, this._optionsService = c2, this._renderService = l2, this._coreBrowserService = d2, this._dragScrollAmount = 0, this._enabled = true, this._workCell = new a.CellData(), this._mouseDownTimeStamp = 0, this._oldHasSelection = false, this._oldSelectionStart = void 0, this._oldSelectionEnd = void 0, this._onLinuxMouseSelection = this.register(new h.EventEmitter()), this.onLinuxMouseSelection = this._onLinuxMouseSelection.event, this._onRedrawRequest = this.register(new h.EventEmitter()), this.onRequestRedraw = this._onRedrawRequest.event, this._onSelectionChange = this.register(new h.EventEmitter()), this.onSelectionChange = this._onSelectionChange.event, this._onRequestScrollLines = this.register(new h.EventEmitter()), this.onRequestScrollLines = this._onRequestScrollLines.event, this._mouseMoveListener = (e4) => this._handleMouseMove(e4), this._mouseUpListener = (e4) => this._handleMouseUp(e4), this._coreService.onUserInput(() => {
                  this.hasSelection && this.clearSelection();
                }), this._trimListener = this._bufferService.buffer.lines.onTrim((e4) => this._handleTrim(e4)), this.register(this._bufferService.buffers.onBufferActivate((e4) => this._handleBufferActivate(e4))), this.enable(), this._model = new o.SelectionModel(this._bufferService), this._activeSelectionMode = 0, this.register((0, u.toDisposable)(() => {
                  this._removeMouseDownListeners();
                }));
              }
              reset() {
                this.clearSelection();
              }
              disable() {
                this.clearSelection(), this._enabled = false;
              }
              enable() {
                this._enabled = true;
              }
              get selectionStart() {
                return this._model.finalSelectionStart;
              }
              get selectionEnd() {
                return this._model.finalSelectionEnd;
              }
              get hasSelection() {
                const e3 = this._model.finalSelectionStart, t3 = this._model.finalSelectionEnd;
                return !(!e3 || !t3 || e3[0] === t3[0] && e3[1] === t3[1]);
              }
              get selectionText() {
                const e3 = this._model.finalSelectionStart, t3 = this._model.finalSelectionEnd;
                if (!e3 || !t3)
                  return "";
                const i3 = this._bufferService.buffer, s3 = [];
                if (3 === this._activeSelectionMode) {
                  if (e3[0] === t3[0])
                    return "";
                  const r2 = e3[0] < t3[0] ? e3[0] : t3[0], n2 = e3[0] < t3[0] ? t3[0] : e3[0];
                  for (let o2 = e3[1]; o2 <= t3[1]; o2++) {
                    const e4 = i3.translateBufferLineToString(o2, true, r2, n2);
                    s3.push(e4);
                  }
                } else {
                  const r2 = e3[1] === t3[1] ? t3[0] : void 0;
                  s3.push(i3.translateBufferLineToString(e3[1], true, e3[0], r2));
                  for (let r3 = e3[1] + 1; r3 <= t3[1] - 1; r3++) {
                    const e4 = i3.lines.get(r3), t4 = i3.translateBufferLineToString(r3, true);
                    (null == e4 ? void 0 : e4.isWrapped) ? s3[s3.length - 1] += t4 : s3.push(t4);
                  }
                  if (e3[1] !== t3[1]) {
                    const e4 = i3.lines.get(t3[1]), r3 = i3.translateBufferLineToString(t3[1], true, 0, t3[0]);
                    e4 && e4.isWrapped ? s3[s3.length - 1] += r3 : s3.push(r3);
                  }
                }
                return s3.map((e4) => e4.replace(g, " ")).join(n.isWindows ? "\r\n" : "\n");
              }
              clearSelection() {
                this._model.clearSelection(), this._removeMouseDownListeners(), this.refresh(), this._onSelectionChange.fire();
              }
              refresh(e3) {
                this._refreshAnimationFrame || (this._refreshAnimationFrame = this._coreBrowserService.window.requestAnimationFrame(() => this._refresh())), n.isLinux && e3 && this.selectionText.length && this._onLinuxMouseSelection.fire(this.selectionText);
              }
              _refresh() {
                this._refreshAnimationFrame = void 0, this._onRedrawRequest.fire({ start: this._model.finalSelectionStart, end: this._model.finalSelectionEnd, columnSelectMode: 3 === this._activeSelectionMode });
              }
              _isClickInSelection(e3) {
                const t3 = this._getMouseBufferCoords(e3), i3 = this._model.finalSelectionStart, s3 = this._model.finalSelectionEnd;
                return !!(i3 && s3 && t3) && this._areCoordsInSelection(t3, i3, s3);
              }
              isCellInSelection(e3, t3) {
                const i3 = this._model.finalSelectionStart, s3 = this._model.finalSelectionEnd;
                return !(!i3 || !s3) && this._areCoordsInSelection([e3, t3], i3, s3);
              }
              _areCoordsInSelection(e3, t3, i3) {
                return e3[1] > t3[1] && e3[1] < i3[1] || t3[1] === i3[1] && e3[1] === t3[1] && e3[0] >= t3[0] && e3[0] < i3[0] || t3[1] < i3[1] && e3[1] === i3[1] && e3[0] < i3[0] || t3[1] < i3[1] && e3[1] === t3[1] && e3[0] >= t3[0];
              }
              _selectWordAtCursor(e3, t3) {
                var i3, s3;
                const r2 = null === (s3 = null === (i3 = this._linkifier.currentLink) || void 0 === i3 ? void 0 : i3.link) || void 0 === s3 ? void 0 : s3.range;
                if (r2)
                  return this._model.selectionStart = [r2.start.x - 1, r2.start.y - 1], this._model.selectionStartLength = (0, f.getRangeLength)(r2, this._bufferService.cols), this._model.selectionEnd = void 0, true;
                const n2 = this._getMouseBufferCoords(e3);
                return !!n2 && (this._selectWordAt(n2, t3), this._model.selectionEnd = void 0, true);
              }
              selectAll() {
                this._model.isSelectAllActive = true, this.refresh(), this._onSelectionChange.fire();
              }
              selectLines(e3, t3) {
                this._model.clearSelection(), e3 = Math.max(e3, 0), t3 = Math.min(t3, this._bufferService.buffer.lines.length - 1), this._model.selectionStart = [0, e3], this._model.selectionEnd = [this._bufferService.cols, t3], this.refresh(), this._onSelectionChange.fire();
              }
              _handleTrim(e3) {
                this._model.handleTrim(e3) && this.refresh();
              }
              _getMouseBufferCoords(e3) {
                const t3 = this._mouseService.getCoords(e3, this._screenElement, this._bufferService.cols, this._bufferService.rows, true);
                if (t3)
                  return t3[0]--, t3[1]--, t3[1] += this._bufferService.buffer.ydisp, t3;
              }
              _getMouseEventScrollAmount(e3) {
                let t3 = (0, d.getCoordsRelativeToElement)(this._coreBrowserService.window, e3, this._screenElement)[1];
                const i3 = this._renderService.dimensions.css.canvas.height;
                return t3 >= 0 && t3 <= i3 ? 0 : (t3 > i3 && (t3 -= i3), t3 = Math.min(Math.max(t3, -50), 50), t3 /= 50, t3 / Math.abs(t3) + Math.round(14 * t3));
              }
              shouldForceSelection(e3) {
                return n.isMac ? e3.altKey && this._optionsService.rawOptions.macOptionClickForcesSelection : e3.shiftKey;
              }
              handleMouseDown(e3) {
                if (this._mouseDownTimeStamp = e3.timeStamp, (2 !== e3.button || !this.hasSelection) && 0 === e3.button) {
                  if (!this._enabled) {
                    if (!this.shouldForceSelection(e3))
                      return;
                    e3.stopPropagation();
                  }
                  e3.preventDefault(), this._dragScrollAmount = 0, this._enabled && e3.shiftKey ? this._handleIncrementalClick(e3) : 1 === e3.detail ? this._handleSingleClick(e3) : 2 === e3.detail ? this._handleDoubleClick(e3) : 3 === e3.detail && this._handleTripleClick(e3), this._addMouseDownListeners(), this.refresh(true);
                }
              }
              _addMouseDownListeners() {
                this._screenElement.ownerDocument && (this._screenElement.ownerDocument.addEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.addEventListener("mouseup", this._mouseUpListener)), this._dragScrollIntervalTimer = this._coreBrowserService.window.setInterval(() => this._dragScroll(), 50);
              }
              _removeMouseDownListeners() {
                this._screenElement.ownerDocument && (this._screenElement.ownerDocument.removeEventListener("mousemove", this._mouseMoveListener), this._screenElement.ownerDocument.removeEventListener("mouseup", this._mouseUpListener)), this._coreBrowserService.window.clearInterval(this._dragScrollIntervalTimer), this._dragScrollIntervalTimer = void 0;
              }
              _handleIncrementalClick(e3) {
                this._model.selectionStart && (this._model.selectionEnd = this._getMouseBufferCoords(e3));
              }
              _handleSingleClick(e3) {
                if (this._model.selectionStartLength = 0, this._model.isSelectAllActive = false, this._activeSelectionMode = this.shouldColumnSelect(e3) ? 3 : 0, this._model.selectionStart = this._getMouseBufferCoords(e3), !this._model.selectionStart)
                  return;
                this._model.selectionEnd = void 0;
                const t3 = this._bufferService.buffer.lines.get(this._model.selectionStart[1]);
                t3 && t3.length !== this._model.selectionStart[0] && 0 === t3.hasWidth(this._model.selectionStart[0]) && this._model.selectionStart[0]++;
              }
              _handleDoubleClick(e3) {
                this._selectWordAtCursor(e3, true) && (this._activeSelectionMode = 1);
              }
              _handleTripleClick(e3) {
                const t3 = this._getMouseBufferCoords(e3);
                t3 && (this._activeSelectionMode = 2, this._selectLineAt(t3[1]));
              }
              shouldColumnSelect(e3) {
                return e3.altKey && !(n.isMac && this._optionsService.rawOptions.macOptionClickForcesSelection);
              }
              _handleMouseMove(e3) {
                if (e3.stopImmediatePropagation(), !this._model.selectionStart)
                  return;
                const t3 = this._model.selectionEnd ? [this._model.selectionEnd[0], this._model.selectionEnd[1]] : null;
                if (this._model.selectionEnd = this._getMouseBufferCoords(e3), !this._model.selectionEnd)
                  return void this.refresh(true);
                2 === this._activeSelectionMode ? this._model.selectionEnd[1] < this._model.selectionStart[1] ? this._model.selectionEnd[0] = 0 : this._model.selectionEnd[0] = this._bufferService.cols : 1 === this._activeSelectionMode && this._selectToWordAt(this._model.selectionEnd), this._dragScrollAmount = this._getMouseEventScrollAmount(e3), 3 !== this._activeSelectionMode && (this._dragScrollAmount > 0 ? this._model.selectionEnd[0] = this._bufferService.cols : this._dragScrollAmount < 0 && (this._model.selectionEnd[0] = 0));
                const i3 = this._bufferService.buffer;
                if (this._model.selectionEnd[1] < i3.lines.length) {
                  const e4 = i3.lines.get(this._model.selectionEnd[1]);
                  e4 && 0 === e4.hasWidth(this._model.selectionEnd[0]) && this._model.selectionEnd[0]++;
                }
                t3 && t3[0] === this._model.selectionEnd[0] && t3[1] === this._model.selectionEnd[1] || this.refresh(true);
              }
              _dragScroll() {
                if (this._model.selectionEnd && this._model.selectionStart && this._dragScrollAmount) {
                  this._onRequestScrollLines.fire({ amount: this._dragScrollAmount, suppressScrollEvent: false });
                  const e3 = this._bufferService.buffer;
                  this._dragScrollAmount > 0 ? (3 !== this._activeSelectionMode && (this._model.selectionEnd[0] = this._bufferService.cols), this._model.selectionEnd[1] = Math.min(e3.ydisp + this._bufferService.rows, e3.lines.length - 1)) : (3 !== this._activeSelectionMode && (this._model.selectionEnd[0] = 0), this._model.selectionEnd[1] = e3.ydisp), this.refresh();
                }
              }
              _handleMouseUp(e3) {
                const t3 = e3.timeStamp - this._mouseDownTimeStamp;
                if (this._removeMouseDownListeners(), this.selectionText.length <= 1 && t3 < 500 && e3.altKey && this._optionsService.rawOptions.altClickMovesCursor) {
                  if (this._bufferService.buffer.ybase === this._bufferService.buffer.ydisp) {
                    const t4 = this._mouseService.getCoords(e3, this._element, this._bufferService.cols, this._bufferService.rows, false);
                    if (t4 && void 0 !== t4[0] && void 0 !== t4[1]) {
                      const e4 = (0, _.moveToCellSequence)(t4[0] - 1, t4[1] - 1, this._bufferService, this._coreService.decPrivateModes.applicationCursorKeys);
                      this._coreService.triggerDataEvent(e4, true);
                    }
                  }
                } else
                  this._fireEventIfSelectionChanged();
              }
              _fireEventIfSelectionChanged() {
                const e3 = this._model.finalSelectionStart, t3 = this._model.finalSelectionEnd, i3 = !(!e3 || !t3 || e3[0] === t3[0] && e3[1] === t3[1]);
                i3 ? e3 && t3 && (this._oldSelectionStart && this._oldSelectionEnd && e3[0] === this._oldSelectionStart[0] && e3[1] === this._oldSelectionStart[1] && t3[0] === this._oldSelectionEnd[0] && t3[1] === this._oldSelectionEnd[1] || this._fireOnSelectionChange(e3, t3, i3)) : this._oldHasSelection && this._fireOnSelectionChange(e3, t3, i3);
              }
              _fireOnSelectionChange(e3, t3, i3) {
                this._oldSelectionStart = e3, this._oldSelectionEnd = t3, this._oldHasSelection = i3, this._onSelectionChange.fire();
              }
              _handleBufferActivate(e3) {
                this.clearSelection(), this._trimListener.dispose(), this._trimListener = e3.activeBuffer.lines.onTrim((e4) => this._handleTrim(e4));
              }
              _convertViewportColToCharacterIndex(e3, t3) {
                let i3 = t3;
                for (let s3 = 0; t3 >= s3; s3++) {
                  const r2 = e3.loadCell(s3, this._workCell).getChars().length;
                  0 === this._workCell.getWidth() ? i3-- : r2 > 1 && t3 !== s3 && (i3 += r2 - 1);
                }
                return i3;
              }
              setSelection(e3, t3, i3) {
                this._model.clearSelection(), this._removeMouseDownListeners(), this._model.selectionStart = [e3, t3], this._model.selectionStartLength = i3, this.refresh(), this._fireEventIfSelectionChanged();
              }
              rightClickSelect(e3) {
                this._isClickInSelection(e3) || (this._selectWordAtCursor(e3, false) && this.refresh(true), this._fireEventIfSelectionChanged());
              }
              _getWordAt(e3, t3, i3 = true, s3 = true) {
                if (e3[0] >= this._bufferService.cols)
                  return;
                const r2 = this._bufferService.buffer, n2 = r2.lines.get(e3[1]);
                if (!n2)
                  return;
                const o2 = r2.translateBufferLineToString(e3[1], false);
                let a2 = this._convertViewportColToCharacterIndex(n2, e3[0]), h2 = a2;
                const c2 = e3[0] - a2;
                let l2 = 0, d2 = 0, _2 = 0, u2 = 0;
                if (" " === o2.charAt(a2)) {
                  for (; a2 > 0 && " " === o2.charAt(a2 - 1); )
                    a2--;
                  for (; h2 < o2.length && " " === o2.charAt(h2 + 1); )
                    h2++;
                } else {
                  let t4 = e3[0], i4 = e3[0];
                  0 === n2.getWidth(t4) && (l2++, t4--), 2 === n2.getWidth(i4) && (d2++, i4++);
                  const s4 = n2.getString(i4).length;
                  for (s4 > 1 && (u2 += s4 - 1, h2 += s4 - 1); t4 > 0 && a2 > 0 && !this._isCharWordSeparator(n2.loadCell(t4 - 1, this._workCell)); ) {
                    n2.loadCell(t4 - 1, this._workCell);
                    const e4 = this._workCell.getChars().length;
                    0 === this._workCell.getWidth() ? (l2++, t4--) : e4 > 1 && (_2 += e4 - 1, a2 -= e4 - 1), a2--, t4--;
                  }
                  for (; i4 < n2.length && h2 + 1 < o2.length && !this._isCharWordSeparator(n2.loadCell(i4 + 1, this._workCell)); ) {
                    n2.loadCell(i4 + 1, this._workCell);
                    const e4 = this._workCell.getChars().length;
                    2 === this._workCell.getWidth() ? (d2++, i4++) : e4 > 1 && (u2 += e4 - 1, h2 += e4 - 1), h2++, i4++;
                  }
                }
                h2++;
                let f2 = a2 + c2 - l2 + _2, v2 = Math.min(this._bufferService.cols, h2 - a2 + l2 + d2 - _2 - u2);
                if (t3 || "" !== o2.slice(a2, h2).trim()) {
                  if (i3 && 0 === f2 && 32 !== n2.getCodePoint(0)) {
                    const t4 = r2.lines.get(e3[1] - 1);
                    if (t4 && n2.isWrapped && 32 !== t4.getCodePoint(this._bufferService.cols - 1)) {
                      const t5 = this._getWordAt([this._bufferService.cols - 1, e3[1] - 1], false, true, false);
                      if (t5) {
                        const e4 = this._bufferService.cols - t5.start;
                        f2 -= e4, v2 += e4;
                      }
                    }
                  }
                  if (s3 && f2 + v2 === this._bufferService.cols && 32 !== n2.getCodePoint(this._bufferService.cols - 1)) {
                    const t4 = r2.lines.get(e3[1] + 1);
                    if ((null == t4 ? void 0 : t4.isWrapped) && 32 !== t4.getCodePoint(0)) {
                      const t5 = this._getWordAt([0, e3[1] + 1], false, false, true);
                      t5 && (v2 += t5.length);
                    }
                  }
                  return { start: f2, length: v2 };
                }
              }
              _selectWordAt(e3, t3) {
                const i3 = this._getWordAt(e3, t3);
                if (i3) {
                  for (; i3.start < 0; )
                    i3.start += this._bufferService.cols, e3[1]--;
                  this._model.selectionStart = [i3.start, e3[1]], this._model.selectionStartLength = i3.length;
                }
              }
              _selectToWordAt(e3) {
                const t3 = this._getWordAt(e3, true);
                if (t3) {
                  let i3 = e3[1];
                  for (; t3.start < 0; )
                    t3.start += this._bufferService.cols, i3--;
                  if (!this._model.areSelectionValuesReversed())
                    for (; t3.start + t3.length > this._bufferService.cols; )
                      t3.length -= this._bufferService.cols, i3++;
                  this._model.selectionEnd = [this._model.areSelectionValuesReversed() ? t3.start : t3.start + t3.length, i3];
                }
              }
              _isCharWordSeparator(e3) {
                return 0 !== e3.getWidth() && this._optionsService.rawOptions.wordSeparator.indexOf(e3.getChars()) >= 0;
              }
              _selectLineAt(e3) {
                const t3 = this._bufferService.buffer.getWrappedRangeForLine(e3), i3 = { start: { x: 0, y: t3.first }, end: { x: this._bufferService.cols - 1, y: t3.last } };
                this._model.selectionStart = [0, t3.first], this._model.selectionEnd = void 0, this._model.selectionStartLength = (0, f.getRangeLength)(i3, this._bufferService.cols);
              }
            };
            p = s2([r(3, l.IBufferService), r(4, l.ICoreService), r(5, c.IMouseService), r(6, l.IOptionsService), r(7, c.IRenderService), r(8, c.ICoreBrowserService)], p), t2.SelectionService = p;
          }, 4725: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.IThemeService = t2.ICharacterJoinerService = t2.ISelectionService = t2.IRenderService = t2.IMouseService = t2.ICoreBrowserService = t2.ICharSizeService = void 0;
            const s2 = i2(8343);
            t2.ICharSizeService = (0, s2.createDecorator)("CharSizeService"), t2.ICoreBrowserService = (0, s2.createDecorator)("CoreBrowserService"), t2.IMouseService = (0, s2.createDecorator)("MouseService"), t2.IRenderService = (0, s2.createDecorator)("RenderService"), t2.ISelectionService = (0, s2.createDecorator)("SelectionService"), t2.ICharacterJoinerService = (0, s2.createDecorator)("CharacterJoinerService"), t2.IThemeService = (0, s2.createDecorator)("ThemeService");
          }, 6731: function(e2, t2, i2) {
            var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
              var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                o2 = Reflect.decorate(e3, t3, i3, s3);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
              return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
            }, r = this && this.__param || function(e3, t3) {
              return function(i3, s3) {
                t3(i3, s3, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.ThemeService = t2.DEFAULT_ANSI_COLORS = void 0;
            const n = i2(7239), o = i2(8055), a = i2(8460), h = i2(844), c = i2(2585), l = o.css.toColor("#ffffff"), d = o.css.toColor("#000000"), _ = o.css.toColor("#ffffff"), u = o.css.toColor("#000000"), f = { css: "rgba(255, 255, 255, 0.3)", rgba: 4294967117 };
            t2.DEFAULT_ANSI_COLORS = Object.freeze((() => {
              const e3 = [o.css.toColor("#2e3436"), o.css.toColor("#cc0000"), o.css.toColor("#4e9a06"), o.css.toColor("#c4a000"), o.css.toColor("#3465a4"), o.css.toColor("#75507b"), o.css.toColor("#06989a"), o.css.toColor("#d3d7cf"), o.css.toColor("#555753"), o.css.toColor("#ef2929"), o.css.toColor("#8ae234"), o.css.toColor("#fce94f"), o.css.toColor("#729fcf"), o.css.toColor("#ad7fa8"), o.css.toColor("#34e2e2"), o.css.toColor("#eeeeec")], t3 = [0, 95, 135, 175, 215, 255];
              for (let i3 = 0; i3 < 216; i3++) {
                const s3 = t3[i3 / 36 % 6 | 0], r2 = t3[i3 / 6 % 6 | 0], n2 = t3[i3 % 6];
                e3.push({ css: o.channels.toCss(s3, r2, n2), rgba: o.channels.toRgba(s3, r2, n2) });
              }
              for (let t4 = 0; t4 < 24; t4++) {
                const i3 = 8 + 10 * t4;
                e3.push({ css: o.channels.toCss(i3, i3, i3), rgba: o.channels.toRgba(i3, i3, i3) });
              }
              return e3;
            })());
            let v = class extends h.Disposable {
              constructor(e3) {
                super(), this._optionsService = e3, this._onChangeColors = this.register(new a.EventEmitter()), this.onChangeColors = this._onChangeColors.event, this._contrastCache = new n.ColorContrastCache(), this._colors = { foreground: l, background: d, cursor: _, cursorAccent: u, selectionForeground: void 0, selectionBackgroundTransparent: f, selectionBackgroundOpaque: o.color.blend(d, f), selectionInactiveBackgroundTransparent: f, selectionInactiveBackgroundOpaque: o.color.blend(d, f), ansi: t2.DEFAULT_ANSI_COLORS.slice(), contrastCache: this._contrastCache }, this._updateRestoreColors(), this._setTheme(this._optionsService.rawOptions.theme), this.register(this._optionsService.onSpecificOptionChange("minimumContrastRatio", () => this._contrastCache.clear())), this.register(this._optionsService.onSpecificOptionChange("theme", () => this._setTheme(this._optionsService.rawOptions.theme)));
              }
              get colors() {
                return this._colors;
              }
              _setTheme(e3 = {}) {
                const i3 = this._colors;
                if (i3.foreground = g(e3.foreground, l), i3.background = g(e3.background, d), i3.cursor = g(e3.cursor, _), i3.cursorAccent = g(e3.cursorAccent, u), i3.selectionBackgroundTransparent = g(e3.selectionBackground, f), i3.selectionBackgroundOpaque = o.color.blend(i3.background, i3.selectionBackgroundTransparent), i3.selectionInactiveBackgroundTransparent = g(e3.selectionInactiveBackground, i3.selectionBackgroundTransparent), i3.selectionInactiveBackgroundOpaque = o.color.blend(i3.background, i3.selectionInactiveBackgroundTransparent), i3.selectionForeground = e3.selectionForeground ? g(e3.selectionForeground, o.NULL_COLOR) : void 0, i3.selectionForeground === o.NULL_COLOR && (i3.selectionForeground = void 0), o.color.isOpaque(i3.selectionBackgroundTransparent)) {
                  const e4 = 0.3;
                  i3.selectionBackgroundTransparent = o.color.opacity(i3.selectionBackgroundTransparent, e4);
                }
                if (o.color.isOpaque(i3.selectionInactiveBackgroundTransparent)) {
                  const e4 = 0.3;
                  i3.selectionInactiveBackgroundTransparent = o.color.opacity(i3.selectionInactiveBackgroundTransparent, e4);
                }
                if (i3.ansi = t2.DEFAULT_ANSI_COLORS.slice(), i3.ansi[0] = g(e3.black, t2.DEFAULT_ANSI_COLORS[0]), i3.ansi[1] = g(e3.red, t2.DEFAULT_ANSI_COLORS[1]), i3.ansi[2] = g(e3.green, t2.DEFAULT_ANSI_COLORS[2]), i3.ansi[3] = g(e3.yellow, t2.DEFAULT_ANSI_COLORS[3]), i3.ansi[4] = g(e3.blue, t2.DEFAULT_ANSI_COLORS[4]), i3.ansi[5] = g(e3.magenta, t2.DEFAULT_ANSI_COLORS[5]), i3.ansi[6] = g(e3.cyan, t2.DEFAULT_ANSI_COLORS[6]), i3.ansi[7] = g(e3.white, t2.DEFAULT_ANSI_COLORS[7]), i3.ansi[8] = g(e3.brightBlack, t2.DEFAULT_ANSI_COLORS[8]), i3.ansi[9] = g(e3.brightRed, t2.DEFAULT_ANSI_COLORS[9]), i3.ansi[10] = g(e3.brightGreen, t2.DEFAULT_ANSI_COLORS[10]), i3.ansi[11] = g(e3.brightYellow, t2.DEFAULT_ANSI_COLORS[11]), i3.ansi[12] = g(e3.brightBlue, t2.DEFAULT_ANSI_COLORS[12]), i3.ansi[13] = g(e3.brightMagenta, t2.DEFAULT_ANSI_COLORS[13]), i3.ansi[14] = g(e3.brightCyan, t2.DEFAULT_ANSI_COLORS[14]), i3.ansi[15] = g(e3.brightWhite, t2.DEFAULT_ANSI_COLORS[15]), e3.extendedAnsi) {
                  const s3 = Math.min(i3.ansi.length - 16, e3.extendedAnsi.length);
                  for (let r2 = 0; r2 < s3; r2++)
                    i3.ansi[r2 + 16] = g(e3.extendedAnsi[r2], t2.DEFAULT_ANSI_COLORS[r2 + 16]);
                }
                this._contrastCache.clear(), this._updateRestoreColors(), this._onChangeColors.fire(this.colors);
              }
              restoreColor(e3) {
                this._restoreColor(e3), this._onChangeColors.fire(this.colors);
              }
              _restoreColor(e3) {
                if (void 0 !== e3)
                  switch (e3) {
                    case 256:
                      this._colors.foreground = this._restoreColors.foreground;
                      break;
                    case 257:
                      this._colors.background = this._restoreColors.background;
                      break;
                    case 258:
                      this._colors.cursor = this._restoreColors.cursor;
                      break;
                    default:
                      this._colors.ansi[e3] = this._restoreColors.ansi[e3];
                  }
                else
                  for (let e4 = 0; e4 < this._restoreColors.ansi.length; ++e4)
                    this._colors.ansi[e4] = this._restoreColors.ansi[e4];
              }
              modifyColors(e3) {
                e3(this._colors), this._onChangeColors.fire(this.colors);
              }
              _updateRestoreColors() {
                this._restoreColors = { foreground: this._colors.foreground, background: this._colors.background, cursor: this._colors.cursor, ansi: this._colors.ansi.slice() };
              }
            };
            function g(e3, t3) {
              if (void 0 !== e3)
                try {
                  return o.css.toColor(e3);
                } catch (e4) {
                }
              return t3;
            }
            v = s2([r(0, c.IOptionsService)], v), t2.ThemeService = v;
          }, 6349: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.CircularList = void 0;
            const s2 = i2(8460), r = i2(844);
            class n extends r.Disposable {
              constructor(e3) {
                super(), this._maxLength = e3, this.onDeleteEmitter = this.register(new s2.EventEmitter()), this.onDelete = this.onDeleteEmitter.event, this.onInsertEmitter = this.register(new s2.EventEmitter()), this.onInsert = this.onInsertEmitter.event, this.onTrimEmitter = this.register(new s2.EventEmitter()), this.onTrim = this.onTrimEmitter.event, this._array = new Array(this._maxLength), this._startIndex = 0, this._length = 0;
              }
              get maxLength() {
                return this._maxLength;
              }
              set maxLength(e3) {
                if (this._maxLength === e3)
                  return;
                const t3 = new Array(e3);
                for (let i3 = 0; i3 < Math.min(e3, this.length); i3++)
                  t3[i3] = this._array[this._getCyclicIndex(i3)];
                this._array = t3, this._maxLength = e3, this._startIndex = 0;
              }
              get length() {
                return this._length;
              }
              set length(e3) {
                if (e3 > this._length)
                  for (let t3 = this._length; t3 < e3; t3++)
                    this._array[t3] = void 0;
                this._length = e3;
              }
              get(e3) {
                return this._array[this._getCyclicIndex(e3)];
              }
              set(e3, t3) {
                this._array[this._getCyclicIndex(e3)] = t3;
              }
              push(e3) {
                this._array[this._getCyclicIndex(this._length)] = e3, this._length === this._maxLength ? (this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1)) : this._length++;
              }
              recycle() {
                if (this._length !== this._maxLength)
                  throw new Error("Can only recycle when the buffer is full");
                return this._startIndex = ++this._startIndex % this._maxLength, this.onTrimEmitter.fire(1), this._array[this._getCyclicIndex(this._length - 1)];
              }
              get isFull() {
                return this._length === this._maxLength;
              }
              pop() {
                return this._array[this._getCyclicIndex(this._length-- - 1)];
              }
              splice(e3, t3, ...i3) {
                if (t3) {
                  for (let i4 = e3; i4 < this._length - t3; i4++)
                    this._array[this._getCyclicIndex(i4)] = this._array[this._getCyclicIndex(i4 + t3)];
                  this._length -= t3, this.onDeleteEmitter.fire({ index: e3, amount: t3 });
                }
                for (let t4 = this._length - 1; t4 >= e3; t4--)
                  this._array[this._getCyclicIndex(t4 + i3.length)] = this._array[this._getCyclicIndex(t4)];
                for (let t4 = 0; t4 < i3.length; t4++)
                  this._array[this._getCyclicIndex(e3 + t4)] = i3[t4];
                if (i3.length && this.onInsertEmitter.fire({ index: e3, amount: i3.length }), this._length + i3.length > this._maxLength) {
                  const e4 = this._length + i3.length - this._maxLength;
                  this._startIndex += e4, this._length = this._maxLength, this.onTrimEmitter.fire(e4);
                } else
                  this._length += i3.length;
              }
              trimStart(e3) {
                e3 > this._length && (e3 = this._length), this._startIndex += e3, this._length -= e3, this.onTrimEmitter.fire(e3);
              }
              shiftElements(e3, t3, i3) {
                if (!(t3 <= 0)) {
                  if (e3 < 0 || e3 >= this._length)
                    throw new Error("start argument out of range");
                  if (e3 + i3 < 0)
                    throw new Error("Cannot shift elements in list beyond index 0");
                  if (i3 > 0) {
                    for (let s4 = t3 - 1; s4 >= 0; s4--)
                      this.set(e3 + s4 + i3, this.get(e3 + s4));
                    const s3 = e3 + t3 + i3 - this._length;
                    if (s3 > 0)
                      for (this._length += s3; this._length > this._maxLength; )
                        this._length--, this._startIndex++, this.onTrimEmitter.fire(1);
                  } else
                    for (let s3 = 0; s3 < t3; s3++)
                      this.set(e3 + s3 + i3, this.get(e3 + s3));
                }
              }
              _getCyclicIndex(e3) {
                return (this._startIndex + e3) % this._maxLength;
              }
            }
            t2.CircularList = n;
          }, 1439: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.clone = void 0, t2.clone = function e3(t3, i2 = 5) {
              if ("object" != typeof t3)
                return t3;
              const s2 = Array.isArray(t3) ? [] : {};
              for (const r in t3)
                s2[r] = i2 <= 1 ? t3[r] : t3[r] && e3(t3[r], i2 - 1);
              return s2;
            };
          }, 8055: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.contrastRatio = t2.toPaddedHex = t2.rgba = t2.rgb = t2.css = t2.color = t2.channels = t2.NULL_COLOR = void 0;
            const s2 = i2(6114);
            let r = 0, n = 0, o = 0, a = 0;
            var h, c, l;
            function d(e3) {
              const t3 = e3.toString(16);
              return t3.length < 2 ? "0" + t3 : t3;
            }
            function _(e3, t3) {
              return e3 < t3 ? (t3 + 0.05) / (e3 + 0.05) : (e3 + 0.05) / (t3 + 0.05);
            }
            t2.NULL_COLOR = { css: "#00000000", rgba: 0 }, function(e3) {
              e3.toCss = function(e4, t3, i3, s3) {
                return void 0 !== s3 ? `#${d(e4)}${d(t3)}${d(i3)}${d(s3)}` : `#${d(e4)}${d(t3)}${d(i3)}`;
              }, e3.toRgba = function(e4, t3, i3, s3 = 255) {
                return (e4 << 24 | t3 << 16 | i3 << 8 | s3) >>> 0;
              };
            }(h = t2.channels || (t2.channels = {})), function(e3) {
              function t3(e4, t4) {
                return a = Math.round(255 * t4), [r, n, o] = l.toChannels(e4.rgba), { css: h.toCss(r, n, o, a), rgba: h.toRgba(r, n, o, a) };
              }
              e3.blend = function(e4, t4) {
                if (a = (255 & t4.rgba) / 255, 1 === a)
                  return { css: t4.css, rgba: t4.rgba };
                const i3 = t4.rgba >> 24 & 255, s3 = t4.rgba >> 16 & 255, c2 = t4.rgba >> 8 & 255, l2 = e4.rgba >> 24 & 255, d2 = e4.rgba >> 16 & 255, _2 = e4.rgba >> 8 & 255;
                return r = l2 + Math.round((i3 - l2) * a), n = d2 + Math.round((s3 - d2) * a), o = _2 + Math.round((c2 - _2) * a), { css: h.toCss(r, n, o), rgba: h.toRgba(r, n, o) };
              }, e3.isOpaque = function(e4) {
                return 255 == (255 & e4.rgba);
              }, e3.ensureContrastRatio = function(e4, t4, i3) {
                const s3 = l.ensureContrastRatio(e4.rgba, t4.rgba, i3);
                if (s3)
                  return l.toColor(s3 >> 24 & 255, s3 >> 16 & 255, s3 >> 8 & 255);
              }, e3.opaque = function(e4) {
                const t4 = (255 | e4.rgba) >>> 0;
                return [r, n, o] = l.toChannels(t4), { css: h.toCss(r, n, o), rgba: t4 };
              }, e3.opacity = t3, e3.multiplyOpacity = function(e4, i3) {
                return a = 255 & e4.rgba, t3(e4, a * i3 / 255);
              }, e3.toColorRGB = function(e4) {
                return [e4.rgba >> 24 & 255, e4.rgba >> 16 & 255, e4.rgba >> 8 & 255];
              };
            }(t2.color || (t2.color = {})), function(e3) {
              let t3, i3;
              if (!s2.isNode) {
                const e4 = document.createElement("canvas");
                e4.width = 1, e4.height = 1;
                const s3 = e4.getContext("2d", { willReadFrequently: true });
                s3 && (t3 = s3, t3.globalCompositeOperation = "copy", i3 = t3.createLinearGradient(0, 0, 1, 1));
              }
              e3.toColor = function(e4) {
                if (e4.match(/#[\da-f]{3,8}/i))
                  switch (e4.length) {
                    case 4:
                      return r = parseInt(e4.slice(1, 2).repeat(2), 16), n = parseInt(e4.slice(2, 3).repeat(2), 16), o = parseInt(e4.slice(3, 4).repeat(2), 16), l.toColor(r, n, o);
                    case 5:
                      return r = parseInt(e4.slice(1, 2).repeat(2), 16), n = parseInt(e4.slice(2, 3).repeat(2), 16), o = parseInt(e4.slice(3, 4).repeat(2), 16), a = parseInt(e4.slice(4, 5).repeat(2), 16), l.toColor(r, n, o, a);
                    case 7:
                      return { css: e4, rgba: (parseInt(e4.slice(1), 16) << 8 | 255) >>> 0 };
                    case 9:
                      return { css: e4, rgba: parseInt(e4.slice(1), 16) >>> 0 };
                  }
                const s3 = e4.match(/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(0|1|\d?\.(\d+))\s*)?\)/);
                if (s3)
                  return r = parseInt(s3[1]), n = parseInt(s3[2]), o = parseInt(s3[3]), a = Math.round(255 * (void 0 === s3[5] ? 1 : parseFloat(s3[5]))), l.toColor(r, n, o, a);
                if (!t3 || !i3)
                  throw new Error("css.toColor: Unsupported css format");
                if (t3.fillStyle = i3, t3.fillStyle = e4, "string" != typeof t3.fillStyle)
                  throw new Error("css.toColor: Unsupported css format");
                if (t3.fillRect(0, 0, 1, 1), [r, n, o, a] = t3.getImageData(0, 0, 1, 1).data, 255 !== a)
                  throw new Error("css.toColor: Unsupported css format");
                return { rgba: h.toRgba(r, n, o, a), css: e4 };
              };
            }(t2.css || (t2.css = {})), function(e3) {
              function t3(e4, t4, i3) {
                const s3 = e4 / 255, r2 = t4 / 255, n2 = i3 / 255;
                return 0.2126 * (s3 <= 0.03928 ? s3 / 12.92 : Math.pow((s3 + 0.055) / 1.055, 2.4)) + 0.7152 * (r2 <= 0.03928 ? r2 / 12.92 : Math.pow((r2 + 0.055) / 1.055, 2.4)) + 0.0722 * (n2 <= 0.03928 ? n2 / 12.92 : Math.pow((n2 + 0.055) / 1.055, 2.4));
              }
              e3.relativeLuminance = function(e4) {
                return t3(e4 >> 16 & 255, e4 >> 8 & 255, 255 & e4);
              }, e3.relativeLuminance2 = t3;
            }(c = t2.rgb || (t2.rgb = {})), function(e3) {
              function t3(e4, t4, i4) {
                const s3 = e4 >> 24 & 255, r2 = e4 >> 16 & 255, n2 = e4 >> 8 & 255;
                let o2 = t4 >> 24 & 255, a2 = t4 >> 16 & 255, h2 = t4 >> 8 & 255, l2 = _(c.relativeLuminance2(o2, a2, h2), c.relativeLuminance2(s3, r2, n2));
                for (; l2 < i4 && (o2 > 0 || a2 > 0 || h2 > 0); )
                  o2 -= Math.max(0, Math.ceil(0.1 * o2)), a2 -= Math.max(0, Math.ceil(0.1 * a2)), h2 -= Math.max(0, Math.ceil(0.1 * h2)), l2 = _(c.relativeLuminance2(o2, a2, h2), c.relativeLuminance2(s3, r2, n2));
                return (o2 << 24 | a2 << 16 | h2 << 8 | 255) >>> 0;
              }
              function i3(e4, t4, i4) {
                const s3 = e4 >> 24 & 255, r2 = e4 >> 16 & 255, n2 = e4 >> 8 & 255;
                let o2 = t4 >> 24 & 255, a2 = t4 >> 16 & 255, h2 = t4 >> 8 & 255, l2 = _(c.relativeLuminance2(o2, a2, h2), c.relativeLuminance2(s3, r2, n2));
                for (; l2 < i4 && (o2 < 255 || a2 < 255 || h2 < 255); )
                  o2 = Math.min(255, o2 + Math.ceil(0.1 * (255 - o2))), a2 = Math.min(255, a2 + Math.ceil(0.1 * (255 - a2))), h2 = Math.min(255, h2 + Math.ceil(0.1 * (255 - h2))), l2 = _(c.relativeLuminance2(o2, a2, h2), c.relativeLuminance2(s3, r2, n2));
                return (o2 << 24 | a2 << 16 | h2 << 8 | 255) >>> 0;
              }
              e3.ensureContrastRatio = function(e4, s3, r2) {
                const n2 = c.relativeLuminance(e4 >> 8), o2 = c.relativeLuminance(s3 >> 8);
                if (_(n2, o2) < r2) {
                  if (o2 < n2) {
                    const o3 = t3(e4, s3, r2), a3 = _(n2, c.relativeLuminance(o3 >> 8));
                    if (a3 < r2) {
                      const t4 = i3(e4, s3, r2);
                      return a3 > _(n2, c.relativeLuminance(t4 >> 8)) ? o3 : t4;
                    }
                    return o3;
                  }
                  const a2 = i3(e4, s3, r2), h2 = _(n2, c.relativeLuminance(a2 >> 8));
                  if (h2 < r2) {
                    const i4 = t3(e4, s3, r2);
                    return h2 > _(n2, c.relativeLuminance(i4 >> 8)) ? a2 : i4;
                  }
                  return a2;
                }
              }, e3.reduceLuminance = t3, e3.increaseLuminance = i3, e3.toChannels = function(e4) {
                return [e4 >> 24 & 255, e4 >> 16 & 255, e4 >> 8 & 255, 255 & e4];
              }, e3.toColor = function(e4, t4, i4, s3) {
                return { css: h.toCss(e4, t4, i4, s3), rgba: h.toRgba(e4, t4, i4, s3) };
              };
            }(l = t2.rgba || (t2.rgba = {})), t2.toPaddedHex = d, t2.contrastRatio = _;
          }, 8969: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.CoreTerminal = void 0;
            const s2 = i2(844), r = i2(2585), n = i2(4348), o = i2(7866), a = i2(744), h = i2(7302), c = i2(6975), l = i2(8460), d = i2(1753), _ = i2(1480), u = i2(7994), f = i2(9282), v = i2(5435), g = i2(5981), p = i2(2660);
            let S = false;
            class m extends s2.Disposable {
              constructor(e3) {
                super(), this._onBinary = this.register(new l.EventEmitter()), this.onBinary = this._onBinary.event, this._onData = this.register(new l.EventEmitter()), this.onData = this._onData.event, this._onLineFeed = this.register(new l.EventEmitter()), this.onLineFeed = this._onLineFeed.event, this._onResize = this.register(new l.EventEmitter()), this.onResize = this._onResize.event, this._onWriteParsed = this.register(new l.EventEmitter()), this.onWriteParsed = this._onWriteParsed.event, this._onScroll = this.register(new l.EventEmitter()), this._instantiationService = new n.InstantiationService(), this.optionsService = this.register(new h.OptionsService(e3)), this._instantiationService.setService(r.IOptionsService, this.optionsService), this._bufferService = this.register(this._instantiationService.createInstance(a.BufferService)), this._instantiationService.setService(r.IBufferService, this._bufferService), this._logService = this.register(this._instantiationService.createInstance(o.LogService)), this._instantiationService.setService(r.ILogService, this._logService), this.coreService = this.register(this._instantiationService.createInstance(c.CoreService)), this._instantiationService.setService(r.ICoreService, this.coreService), this.coreMouseService = this.register(this._instantiationService.createInstance(d.CoreMouseService)), this._instantiationService.setService(r.ICoreMouseService, this.coreMouseService), this.unicodeService = this.register(this._instantiationService.createInstance(_.UnicodeService)), this._instantiationService.setService(r.IUnicodeService, this.unicodeService), this._charsetService = this._instantiationService.createInstance(u.CharsetService), this._instantiationService.setService(r.ICharsetService, this._charsetService), this._oscLinkService = this._instantiationService.createInstance(p.OscLinkService), this._instantiationService.setService(r.IOscLinkService, this._oscLinkService), this._inputHandler = this.register(new v.InputHandler(this._bufferService, this._charsetService, this.coreService, this._logService, this.optionsService, this._oscLinkService, this.coreMouseService, this.unicodeService)), this.register((0, l.forwardEvent)(this._inputHandler.onLineFeed, this._onLineFeed)), this.register(this._inputHandler), this.register((0, l.forwardEvent)(this._bufferService.onResize, this._onResize)), this.register((0, l.forwardEvent)(this.coreService.onData, this._onData)), this.register((0, l.forwardEvent)(this.coreService.onBinary, this._onBinary)), this.register(this.coreService.onRequestScrollToBottom(() => this.scrollToBottom())), this.register(this.coreService.onUserInput(() => this._writeBuffer.handleUserInput())), this.register(this.optionsService.onSpecificOptionChange("windowsMode", (e4) => this._handleWindowsModeOptionChange(e4))), this.register(this._bufferService.onScroll((e4) => {
                  this._onScroll.fire({ position: this._bufferService.buffer.ydisp, source: 0 }), this._inputHandler.markRangeDirty(this._bufferService.buffer.scrollTop, this._bufferService.buffer.scrollBottom);
                })), this.register(this._inputHandler.onScroll((e4) => {
                  this._onScroll.fire({ position: this._bufferService.buffer.ydisp, source: 0 }), this._inputHandler.markRangeDirty(this._bufferService.buffer.scrollTop, this._bufferService.buffer.scrollBottom);
                })), this._writeBuffer = this.register(new g.WriteBuffer((e4, t3) => this._inputHandler.parse(e4, t3))), this.register((0, l.forwardEvent)(this._writeBuffer.onWriteParsed, this._onWriteParsed)), this.register((0, s2.toDisposable)(() => {
                  var e4;
                  null === (e4 = this._windowsMode) || void 0 === e4 || e4.dispose(), this._windowsMode = void 0;
                }));
              }
              get onScroll() {
                return this._onScrollApi || (this._onScrollApi = this.register(new l.EventEmitter()), this._onScroll.event((e3) => {
                  var t3;
                  null === (t3 = this._onScrollApi) || void 0 === t3 || t3.fire(e3.position);
                })), this._onScrollApi.event;
              }
              get cols() {
                return this._bufferService.cols;
              }
              get rows() {
                return this._bufferService.rows;
              }
              get buffers() {
                return this._bufferService.buffers;
              }
              get options() {
                return this.optionsService.options;
              }
              set options(e3) {
                for (const t3 in e3)
                  this.optionsService.options[t3] = e3[t3];
              }
              write(e3, t3) {
                this._writeBuffer.write(e3, t3);
              }
              writeSync(e3, t3) {
                this._logService.logLevel <= r.LogLevelEnum.WARN && !S && (this._logService.warn("writeSync is unreliable and will be removed soon."), S = true), this._writeBuffer.writeSync(e3, t3);
              }
              resize(e3, t3) {
                isNaN(e3) || isNaN(t3) || (e3 = Math.max(e3, a.MINIMUM_COLS), t3 = Math.max(t3, a.MINIMUM_ROWS), this._bufferService.resize(e3, t3));
              }
              scroll(e3, t3 = false) {
                this._bufferService.scroll(e3, t3);
              }
              scrollLines(e3, t3, i3) {
                this._bufferService.scrollLines(e3, t3, i3);
              }
              scrollPages(e3) {
                this._bufferService.scrollPages(e3);
              }
              scrollToTop() {
                this._bufferService.scrollToTop();
              }
              scrollToBottom() {
                this._bufferService.scrollToBottom();
              }
              scrollToLine(e3) {
                this._bufferService.scrollToLine(e3);
              }
              registerEscHandler(e3, t3) {
                return this._inputHandler.registerEscHandler(e3, t3);
              }
              registerDcsHandler(e3, t3) {
                return this._inputHandler.registerDcsHandler(e3, t3);
              }
              registerCsiHandler(e3, t3) {
                return this._inputHandler.registerCsiHandler(e3, t3);
              }
              registerOscHandler(e3, t3) {
                return this._inputHandler.registerOscHandler(e3, t3);
              }
              _setup() {
                this.optionsService.rawOptions.windowsMode && this._enableWindowsMode();
              }
              reset() {
                this._inputHandler.reset(), this._bufferService.reset(), this._charsetService.reset(), this.coreService.reset(), this.coreMouseService.reset();
              }
              _handleWindowsModeOptionChange(e3) {
                var t3;
                e3 ? this._enableWindowsMode() : (null === (t3 = this._windowsMode) || void 0 === t3 || t3.dispose(), this._windowsMode = void 0);
              }
              _enableWindowsMode() {
                if (!this._windowsMode) {
                  const e3 = [];
                  e3.push(this.onLineFeed(f.updateWindowsModeWrappedState.bind(null, this._bufferService))), e3.push(this.registerCsiHandler({ final: "H" }, () => ((0, f.updateWindowsModeWrappedState)(this._bufferService), false))), this._windowsMode = { dispose: () => {
                    for (const t3 of e3)
                      t3.dispose();
                  } };
                }
              }
            }
            t2.CoreTerminal = m;
          }, 8460: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.forwardEvent = t2.EventEmitter = void 0, t2.EventEmitter = class {
              constructor() {
                this._listeners = [], this._disposed = false;
              }
              get event() {
                return this._event || (this._event = (e3) => (this._listeners.push(e3), { dispose: () => {
                  if (!this._disposed) {
                    for (let t3 = 0; t3 < this._listeners.length; t3++)
                      if (this._listeners[t3] === e3)
                        return void this._listeners.splice(t3, 1);
                  }
                } })), this._event;
              }
              fire(e3, t3) {
                const i2 = [];
                for (let e4 = 0; e4 < this._listeners.length; e4++)
                  i2.push(this._listeners[e4]);
                for (let s2 = 0; s2 < i2.length; s2++)
                  i2[s2].call(void 0, e3, t3);
              }
              dispose() {
                this._listeners && (this._listeners.length = 0), this._disposed = true;
              }
            }, t2.forwardEvent = function(e3, t3) {
              return e3((e4) => t3.fire(e4));
            };
          }, 5435: function(e2, t2, i2) {
            var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
              var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                o2 = Reflect.decorate(e3, t3, i3, s3);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
              return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
            }, r = this && this.__param || function(e3, t3) {
              return function(i3, s3) {
                t3(i3, s3, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.InputHandler = t2.WindowsOptionsReportType = void 0;
            const n = i2(2584), o = i2(7116), a = i2(2015), h = i2(844), c = i2(482), l = i2(8437), d = i2(8460), _ = i2(643), u = i2(511), f = i2(3734), v = i2(2585), g = i2(6242), p = i2(6351), S = i2(5941), m = { "(": 0, ")": 1, "*": 2, "+": 3, "-": 1, ".": 2 }, C = 131072;
            function b(e3, t3) {
              if (e3 > 24)
                return t3.setWinLines || false;
              switch (e3) {
                case 1:
                  return !!t3.restoreWin;
                case 2:
                  return !!t3.minimizeWin;
                case 3:
                  return !!t3.setWinPosition;
                case 4:
                  return !!t3.setWinSizePixels;
                case 5:
                  return !!t3.raiseWin;
                case 6:
                  return !!t3.lowerWin;
                case 7:
                  return !!t3.refreshWin;
                case 8:
                  return !!t3.setWinSizeChars;
                case 9:
                  return !!t3.maximizeWin;
                case 10:
                  return !!t3.fullscreenWin;
                case 11:
                  return !!t3.getWinState;
                case 13:
                  return !!t3.getWinPosition;
                case 14:
                  return !!t3.getWinSizePixels;
                case 15:
                  return !!t3.getScreenSizePixels;
                case 16:
                  return !!t3.getCellSizePixels;
                case 18:
                  return !!t3.getWinSizeChars;
                case 19:
                  return !!t3.getScreenSizeChars;
                case 20:
                  return !!t3.getIconTitle;
                case 21:
                  return !!t3.getWinTitle;
                case 22:
                  return !!t3.pushTitle;
                case 23:
                  return !!t3.popTitle;
                case 24:
                  return !!t3.setWinLines;
              }
              return false;
            }
            var y;
            !function(e3) {
              e3[e3.GET_WIN_SIZE_PIXELS = 0] = "GET_WIN_SIZE_PIXELS", e3[e3.GET_CELL_SIZE_PIXELS = 1] = "GET_CELL_SIZE_PIXELS";
            }(y = t2.WindowsOptionsReportType || (t2.WindowsOptionsReportType = {}));
            let w = 0;
            class E extends h.Disposable {
              constructor(e3, t3, i3, s3, r2, h2, _2, f2, v2 = new a.EscapeSequenceParser()) {
                super(), this._bufferService = e3, this._charsetService = t3, this._coreService = i3, this._logService = s3, this._optionsService = r2, this._oscLinkService = h2, this._coreMouseService = _2, this._unicodeService = f2, this._parser = v2, this._parseBuffer = new Uint32Array(4096), this._stringDecoder = new c.StringToUtf32(), this._utf8Decoder = new c.Utf8ToUtf32(), this._workCell = new u.CellData(), this._windowTitle = "", this._iconName = "", this._windowTitleStack = [], this._iconNameStack = [], this._curAttrData = l.DEFAULT_ATTR_DATA.clone(), this._eraseAttrDataInternal = l.DEFAULT_ATTR_DATA.clone(), this._onRequestBell = this.register(new d.EventEmitter()), this.onRequestBell = this._onRequestBell.event, this._onRequestRefreshRows = this.register(new d.EventEmitter()), this.onRequestRefreshRows = this._onRequestRefreshRows.event, this._onRequestReset = this.register(new d.EventEmitter()), this.onRequestReset = this._onRequestReset.event, this._onRequestSendFocus = this.register(new d.EventEmitter()), this.onRequestSendFocus = this._onRequestSendFocus.event, this._onRequestSyncScrollBar = this.register(new d.EventEmitter()), this.onRequestSyncScrollBar = this._onRequestSyncScrollBar.event, this._onRequestWindowsOptionsReport = this.register(new d.EventEmitter()), this.onRequestWindowsOptionsReport = this._onRequestWindowsOptionsReport.event, this._onA11yChar = this.register(new d.EventEmitter()), this.onA11yChar = this._onA11yChar.event, this._onA11yTab = this.register(new d.EventEmitter()), this.onA11yTab = this._onA11yTab.event, this._onCursorMove = this.register(new d.EventEmitter()), this.onCursorMove = this._onCursorMove.event, this._onLineFeed = this.register(new d.EventEmitter()), this.onLineFeed = this._onLineFeed.event, this._onScroll = this.register(new d.EventEmitter()), this.onScroll = this._onScroll.event, this._onTitleChange = this.register(new d.EventEmitter()), this.onTitleChange = this._onTitleChange.event, this._onColor = this.register(new d.EventEmitter()), this.onColor = this._onColor.event, this._parseStack = { paused: false, cursorStartX: 0, cursorStartY: 0, decodedLength: 0, position: 0 }, this._specialColors = [256, 257, 258], this.register(this._parser), this._dirtyRowTracker = new L(this._bufferService), this._activeBuffer = this._bufferService.buffer, this.register(this._bufferService.buffers.onBufferActivate((e4) => this._activeBuffer = e4.activeBuffer)), this._parser.setCsiHandlerFallback((e4, t4) => {
                  this._logService.debug("Unknown CSI code: ", { identifier: this._parser.identToString(e4), params: t4.toArray() });
                }), this._parser.setEscHandlerFallback((e4) => {
                  this._logService.debug("Unknown ESC code: ", { identifier: this._parser.identToString(e4) });
                }), this._parser.setExecuteHandlerFallback((e4) => {
                  this._logService.debug("Unknown EXECUTE code: ", { code: e4 });
                }), this._parser.setOscHandlerFallback((e4, t4, i4) => {
                  this._logService.debug("Unknown OSC code: ", { identifier: e4, action: t4, data: i4 });
                }), this._parser.setDcsHandlerFallback((e4, t4, i4) => {
                  "HOOK" === t4 && (i4 = i4.toArray()), this._logService.debug("Unknown DCS code: ", { identifier: this._parser.identToString(e4), action: t4, payload: i4 });
                }), this._parser.setPrintHandler((e4, t4, i4) => this.print(e4, t4, i4)), this._parser.registerCsiHandler({ final: "@" }, (e4) => this.insertChars(e4)), this._parser.registerCsiHandler({ intermediates: " ", final: "@" }, (e4) => this.scrollLeft(e4)), this._parser.registerCsiHandler({ final: "A" }, (e4) => this.cursorUp(e4)), this._parser.registerCsiHandler({ intermediates: " ", final: "A" }, (e4) => this.scrollRight(e4)), this._parser.registerCsiHandler({ final: "B" }, (e4) => this.cursorDown(e4)), this._parser.registerCsiHandler({ final: "C" }, (e4) => this.cursorForward(e4)), this._parser.registerCsiHandler({ final: "D" }, (e4) => this.cursorBackward(e4)), this._parser.registerCsiHandler({ final: "E" }, (e4) => this.cursorNextLine(e4)), this._parser.registerCsiHandler({ final: "F" }, (e4) => this.cursorPrecedingLine(e4)), this._parser.registerCsiHandler({ final: "G" }, (e4) => this.cursorCharAbsolute(e4)), this._parser.registerCsiHandler({ final: "H" }, (e4) => this.cursorPosition(e4)), this._parser.registerCsiHandler({ final: "I" }, (e4) => this.cursorForwardTab(e4)), this._parser.registerCsiHandler({ final: "J" }, (e4) => this.eraseInDisplay(e4, false)), this._parser.registerCsiHandler({ prefix: "?", final: "J" }, (e4) => this.eraseInDisplay(e4, true)), this._parser.registerCsiHandler({ final: "K" }, (e4) => this.eraseInLine(e4, false)), this._parser.registerCsiHandler({ prefix: "?", final: "K" }, (e4) => this.eraseInLine(e4, true)), this._parser.registerCsiHandler({ final: "L" }, (e4) => this.insertLines(e4)), this._parser.registerCsiHandler({ final: "M" }, (e4) => this.deleteLines(e4)), this._parser.registerCsiHandler({ final: "P" }, (e4) => this.deleteChars(e4)), this._parser.registerCsiHandler({ final: "S" }, (e4) => this.scrollUp(e4)), this._parser.registerCsiHandler({ final: "T" }, (e4) => this.scrollDown(e4)), this._parser.registerCsiHandler({ final: "X" }, (e4) => this.eraseChars(e4)), this._parser.registerCsiHandler({ final: "Z" }, (e4) => this.cursorBackwardTab(e4)), this._parser.registerCsiHandler({ final: "`" }, (e4) => this.charPosAbsolute(e4)), this._parser.registerCsiHandler({ final: "a" }, (e4) => this.hPositionRelative(e4)), this._parser.registerCsiHandler({ final: "b" }, (e4) => this.repeatPrecedingCharacter(e4)), this._parser.registerCsiHandler({ final: "c" }, (e4) => this.sendDeviceAttributesPrimary(e4)), this._parser.registerCsiHandler({ prefix: ">", final: "c" }, (e4) => this.sendDeviceAttributesSecondary(e4)), this._parser.registerCsiHandler({ final: "d" }, (e4) => this.linePosAbsolute(e4)), this._parser.registerCsiHandler({ final: "e" }, (e4) => this.vPositionRelative(e4)), this._parser.registerCsiHandler({ final: "f" }, (e4) => this.hVPosition(e4)), this._parser.registerCsiHandler({ final: "g" }, (e4) => this.tabClear(e4)), this._parser.registerCsiHandler({ final: "h" }, (e4) => this.setMode(e4)), this._parser.registerCsiHandler({ prefix: "?", final: "h" }, (e4) => this.setModePrivate(e4)), this._parser.registerCsiHandler({ final: "l" }, (e4) => this.resetMode(e4)), this._parser.registerCsiHandler({ prefix: "?", final: "l" }, (e4) => this.resetModePrivate(e4)), this._parser.registerCsiHandler({ final: "m" }, (e4) => this.charAttributes(e4)), this._parser.registerCsiHandler({ final: "n" }, (e4) => this.deviceStatus(e4)), this._parser.registerCsiHandler({ prefix: "?", final: "n" }, (e4) => this.deviceStatusPrivate(e4)), this._parser.registerCsiHandler({ intermediates: "!", final: "p" }, (e4) => this.softReset(e4)), this._parser.registerCsiHandler({ intermediates: " ", final: "q" }, (e4) => this.setCursorStyle(e4)), this._parser.registerCsiHandler({ final: "r" }, (e4) => this.setScrollRegion(e4)), this._parser.registerCsiHandler({ final: "s" }, (e4) => this.saveCursor(e4)), this._parser.registerCsiHandler({ final: "t" }, (e4) => this.windowOptions(e4)), this._parser.registerCsiHandler({ final: "u" }, (e4) => this.restoreCursor(e4)), this._parser.registerCsiHandler({ intermediates: "'", final: "}" }, (e4) => this.insertColumns(e4)), this._parser.registerCsiHandler({ intermediates: "'", final: "~" }, (e4) => this.deleteColumns(e4)), this._parser.registerCsiHandler({ intermediates: '"', final: "q" }, (e4) => this.selectProtected(e4)), this._parser.registerCsiHandler({ intermediates: "$", final: "p" }, (e4) => this.requestMode(e4, true)), this._parser.registerCsiHandler({ prefix: "?", intermediates: "$", final: "p" }, (e4) => this.requestMode(e4, false)), this._parser.setExecuteHandler(n.C0.BEL, () => this.bell()), this._parser.setExecuteHandler(n.C0.LF, () => this.lineFeed()), this._parser.setExecuteHandler(n.C0.VT, () => this.lineFeed()), this._parser.setExecuteHandler(n.C0.FF, () => this.lineFeed()), this._parser.setExecuteHandler(n.C0.CR, () => this.carriageReturn()), this._parser.setExecuteHandler(n.C0.BS, () => this.backspace()), this._parser.setExecuteHandler(n.C0.HT, () => this.tab()), this._parser.setExecuteHandler(n.C0.SO, () => this.shiftOut()), this._parser.setExecuteHandler(n.C0.SI, () => this.shiftIn()), this._parser.setExecuteHandler(n.C1.IND, () => this.index()), this._parser.setExecuteHandler(n.C1.NEL, () => this.nextLine()), this._parser.setExecuteHandler(n.C1.HTS, () => this.tabSet()), this._parser.registerOscHandler(0, new g.OscHandler((e4) => (this.setTitle(e4), this.setIconName(e4), true))), this._parser.registerOscHandler(1, new g.OscHandler((e4) => this.setIconName(e4))), this._parser.registerOscHandler(2, new g.OscHandler((e4) => this.setTitle(e4))), this._parser.registerOscHandler(4, new g.OscHandler((e4) => this.setOrReportIndexedColor(e4))), this._parser.registerOscHandler(8, new g.OscHandler((e4) => this.setHyperlink(e4))), this._parser.registerOscHandler(10, new g.OscHandler((e4) => this.setOrReportFgColor(e4))), this._parser.registerOscHandler(11, new g.OscHandler((e4) => this.setOrReportBgColor(e4))), this._parser.registerOscHandler(12, new g.OscHandler((e4) => this.setOrReportCursorColor(e4))), this._parser.registerOscHandler(104, new g.OscHandler((e4) => this.restoreIndexedColor(e4))), this._parser.registerOscHandler(110, new g.OscHandler((e4) => this.restoreFgColor(e4))), this._parser.registerOscHandler(111, new g.OscHandler((e4) => this.restoreBgColor(e4))), this._parser.registerOscHandler(112, new g.OscHandler((e4) => this.restoreCursorColor(e4))), this._parser.registerEscHandler({ final: "7" }, () => this.saveCursor()), this._parser.registerEscHandler({ final: "8" }, () => this.restoreCursor()), this._parser.registerEscHandler({ final: "D" }, () => this.index()), this._parser.registerEscHandler({ final: "E" }, () => this.nextLine()), this._parser.registerEscHandler({ final: "H" }, () => this.tabSet()), this._parser.registerEscHandler({ final: "M" }, () => this.reverseIndex()), this._parser.registerEscHandler({ final: "=" }, () => this.keypadApplicationMode()), this._parser.registerEscHandler({ final: ">" }, () => this.keypadNumericMode()), this._parser.registerEscHandler({ final: "c" }, () => this.fullReset()), this._parser.registerEscHandler({ final: "n" }, () => this.setgLevel(2)), this._parser.registerEscHandler({ final: "o" }, () => this.setgLevel(3)), this._parser.registerEscHandler({ final: "|" }, () => this.setgLevel(3)), this._parser.registerEscHandler({ final: "}" }, () => this.setgLevel(2)), this._parser.registerEscHandler({ final: "~" }, () => this.setgLevel(1)), this._parser.registerEscHandler({ intermediates: "%", final: "@" }, () => this.selectDefaultCharset()), this._parser.registerEscHandler({ intermediates: "%", final: "G" }, () => this.selectDefaultCharset());
                for (const e4 in o.CHARSETS)
                  this._parser.registerEscHandler({ intermediates: "(", final: e4 }, () => this.selectCharset("(" + e4)), this._parser.registerEscHandler({ intermediates: ")", final: e4 }, () => this.selectCharset(")" + e4)), this._parser.registerEscHandler({ intermediates: "*", final: e4 }, () => this.selectCharset("*" + e4)), this._parser.registerEscHandler({ intermediates: "+", final: e4 }, () => this.selectCharset("+" + e4)), this._parser.registerEscHandler({ intermediates: "-", final: e4 }, () => this.selectCharset("-" + e4)), this._parser.registerEscHandler({ intermediates: ".", final: e4 }, () => this.selectCharset("." + e4)), this._parser.registerEscHandler({ intermediates: "/", final: e4 }, () => this.selectCharset("/" + e4));
                this._parser.registerEscHandler({ intermediates: "#", final: "8" }, () => this.screenAlignmentPattern()), this._parser.setErrorHandler((e4) => (this._logService.error("Parsing error: ", e4), e4)), this._parser.registerDcsHandler({ intermediates: "$", final: "q" }, new p.DcsHandler((e4, t4) => this.requestStatusString(e4, t4)));
              }
              getAttrData() {
                return this._curAttrData;
              }
              _preserveStack(e3, t3, i3, s3) {
                this._parseStack.paused = true, this._parseStack.cursorStartX = e3, this._parseStack.cursorStartY = t3, this._parseStack.decodedLength = i3, this._parseStack.position = s3;
              }
              _logSlowResolvingAsync(e3) {
                this._logService.logLevel <= v.LogLevelEnum.WARN && Promise.race([e3, new Promise((e4, t3) => setTimeout(() => t3("#SLOW_TIMEOUT"), 5e3))]).catch((e4) => {
                  if ("#SLOW_TIMEOUT" !== e4)
                    throw e4;
                  console.warn("async parser handler taking longer than 5000 ms");
                });
              }
              _getCurrentLinkId() {
                return this._curAttrData.extended.urlId;
              }
              parse(e3, t3) {
                let i3, s3 = this._activeBuffer.x, r2 = this._activeBuffer.y, n2 = 0;
                const o2 = this._parseStack.paused;
                if (o2) {
                  if (i3 = this._parser.parse(this._parseBuffer, this._parseStack.decodedLength, t3))
                    return this._logSlowResolvingAsync(i3), i3;
                  s3 = this._parseStack.cursorStartX, r2 = this._parseStack.cursorStartY, this._parseStack.paused = false, e3.length > C && (n2 = this._parseStack.position + C);
                }
                if (this._logService.logLevel <= v.LogLevelEnum.DEBUG && this._logService.debug("parsing data" + ("string" == typeof e3 ? ` "${e3}"` : ` "${Array.prototype.map.call(e3, (e4) => String.fromCharCode(e4)).join("")}"`), "string" == typeof e3 ? e3.split("").map((e4) => e4.charCodeAt(0)) : e3), this._parseBuffer.length < e3.length && this._parseBuffer.length < C && (this._parseBuffer = new Uint32Array(Math.min(e3.length, C))), o2 || this._dirtyRowTracker.clearRange(), e3.length > C)
                  for (let t4 = n2; t4 < e3.length; t4 += C) {
                    const n3 = t4 + C < e3.length ? t4 + C : e3.length, o3 = "string" == typeof e3 ? this._stringDecoder.decode(e3.substring(t4, n3), this._parseBuffer) : this._utf8Decoder.decode(e3.subarray(t4, n3), this._parseBuffer);
                    if (i3 = this._parser.parse(this._parseBuffer, o3))
                      return this._preserveStack(s3, r2, o3, t4), this._logSlowResolvingAsync(i3), i3;
                  }
                else if (!o2) {
                  const t4 = "string" == typeof e3 ? this._stringDecoder.decode(e3, this._parseBuffer) : this._utf8Decoder.decode(e3, this._parseBuffer);
                  if (i3 = this._parser.parse(this._parseBuffer, t4))
                    return this._preserveStack(s3, r2, t4, 0), this._logSlowResolvingAsync(i3), i3;
                }
                this._activeBuffer.x === s3 && this._activeBuffer.y === r2 || this._onCursorMove.fire(), this._onRequestRefreshRows.fire(this._dirtyRowTracker.start, this._dirtyRowTracker.end);
              }
              print(e3, t3, i3) {
                let s3, r2;
                const n2 = this._charsetService.charset, o2 = this._optionsService.rawOptions.screenReaderMode, a2 = this._bufferService.cols, h2 = this._coreService.decPrivateModes.wraparound, l2 = this._coreService.modes.insertMode, d2 = this._curAttrData;
                let u2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._activeBuffer.x && i3 - t3 > 0 && 2 === u2.getWidth(this._activeBuffer.x - 1) && u2.setCellFromCodePoint(this._activeBuffer.x - 1, 0, 1, d2.fg, d2.bg, d2.extended);
                for (let f2 = t3; f2 < i3; ++f2) {
                  if (s3 = e3[f2], r2 = this._unicodeService.wcwidth(s3), s3 < 127 && n2) {
                    const e4 = n2[String.fromCharCode(s3)];
                    e4 && (s3 = e4.charCodeAt(0));
                  }
                  if (o2 && this._onA11yChar.fire((0, c.stringFromCodePoint)(s3)), this._getCurrentLinkId() && this._oscLinkService.addLineToLink(this._getCurrentLinkId(), this._activeBuffer.ybase + this._activeBuffer.y), r2 || !this._activeBuffer.x) {
                    if (this._activeBuffer.x + r2 - 1 >= a2) {
                      if (h2) {
                        for (; this._activeBuffer.x < a2; )
                          u2.setCellFromCodePoint(this._activeBuffer.x++, 0, 1, d2.fg, d2.bg, d2.extended);
                        this._activeBuffer.x = 0, this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData(), true)) : (this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = true), u2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                      } else if (this._activeBuffer.x = a2 - 1, 2 === r2)
                        continue;
                    }
                    if (l2 && (u2.insertCells(this._activeBuffer.x, r2, this._activeBuffer.getNullCell(d2), d2), 2 === u2.getWidth(a2 - 1) && u2.setCellFromCodePoint(a2 - 1, _.NULL_CELL_CODE, _.NULL_CELL_WIDTH, d2.fg, d2.bg, d2.extended)), u2.setCellFromCodePoint(this._activeBuffer.x++, s3, r2, d2.fg, d2.bg, d2.extended), r2 > 0)
                      for (; --r2; )
                        u2.setCellFromCodePoint(this._activeBuffer.x++, 0, 0, d2.fg, d2.bg, d2.extended);
                  } else
                    u2.getWidth(this._activeBuffer.x - 1) ? u2.addCodepointToCell(this._activeBuffer.x - 1, s3) : u2.addCodepointToCell(this._activeBuffer.x - 2, s3);
                }
                i3 - t3 > 0 && (u2.loadCell(this._activeBuffer.x - 1, this._workCell), 2 === this._workCell.getWidth() || this._workCell.getCode() > 65535 ? this._parser.precedingCodepoint = 0 : this._workCell.isCombined() ? this._parser.precedingCodepoint = this._workCell.getChars().charCodeAt(0) : this._parser.precedingCodepoint = this._workCell.content), this._activeBuffer.x < a2 && i3 - t3 > 0 && 0 === u2.getWidth(this._activeBuffer.x) && !u2.hasContent(this._activeBuffer.x) && u2.setCellFromCodePoint(this._activeBuffer.x, 0, 1, d2.fg, d2.bg, d2.extended), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
              }
              registerCsiHandler(e3, t3) {
                return "t" !== e3.final || e3.prefix || e3.intermediates ? this._parser.registerCsiHandler(e3, t3) : this._parser.registerCsiHandler(e3, (e4) => !b(e4.params[0], this._optionsService.rawOptions.windowOptions) || t3(e4));
              }
              registerDcsHandler(e3, t3) {
                return this._parser.registerDcsHandler(e3, new p.DcsHandler(t3));
              }
              registerEscHandler(e3, t3) {
                return this._parser.registerEscHandler(e3, t3);
              }
              registerOscHandler(e3, t3) {
                return this._parser.registerOscHandler(e3, new g.OscHandler(t3));
              }
              bell() {
                return this._onRequestBell.fire(), true;
              }
              lineFeed() {
                return this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._optionsService.rawOptions.convertEol && (this._activeBuffer.x = 0), this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData())) : this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._activeBuffer.x >= this._bufferService.cols && this._activeBuffer.x--, this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._onLineFeed.fire(), true;
              }
              carriageReturn() {
                return this._activeBuffer.x = 0, true;
              }
              backspace() {
                var e3;
                if (!this._coreService.decPrivateModes.reverseWraparound)
                  return this._restrictCursor(), this._activeBuffer.x > 0 && this._activeBuffer.x--, true;
                if (this._restrictCursor(this._bufferService.cols), this._activeBuffer.x > 0)
                  this._activeBuffer.x--;
                else if (0 === this._activeBuffer.x && this._activeBuffer.y > this._activeBuffer.scrollTop && this._activeBuffer.y <= this._activeBuffer.scrollBottom && (null === (e3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y)) || void 0 === e3 ? void 0 : e3.isWrapped)) {
                  this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y).isWrapped = false, this._activeBuffer.y--, this._activeBuffer.x = this._bufferService.cols - 1;
                  const e4 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                  e4.hasWidth(this._activeBuffer.x) && !e4.hasContent(this._activeBuffer.x) && this._activeBuffer.x--;
                }
                return this._restrictCursor(), true;
              }
              tab() {
                if (this._activeBuffer.x >= this._bufferService.cols)
                  return true;
                const e3 = this._activeBuffer.x;
                return this._activeBuffer.x = this._activeBuffer.nextStop(), this._optionsService.rawOptions.screenReaderMode && this._onA11yTab.fire(this._activeBuffer.x - e3), true;
              }
              shiftOut() {
                return this._charsetService.setgLevel(1), true;
              }
              shiftIn() {
                return this._charsetService.setgLevel(0), true;
              }
              _restrictCursor(e3 = this._bufferService.cols - 1) {
                this._activeBuffer.x = Math.min(e3, Math.max(0, this._activeBuffer.x)), this._activeBuffer.y = this._coreService.decPrivateModes.origin ? Math.min(this._activeBuffer.scrollBottom, Math.max(this._activeBuffer.scrollTop, this._activeBuffer.y)) : Math.min(this._bufferService.rows - 1, Math.max(0, this._activeBuffer.y)), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
              }
              _setCursor(e3, t3) {
                this._dirtyRowTracker.markDirty(this._activeBuffer.y), this._coreService.decPrivateModes.origin ? (this._activeBuffer.x = e3, this._activeBuffer.y = this._activeBuffer.scrollTop + t3) : (this._activeBuffer.x = e3, this._activeBuffer.y = t3), this._restrictCursor(), this._dirtyRowTracker.markDirty(this._activeBuffer.y);
              }
              _moveCursor(e3, t3) {
                this._restrictCursor(), this._setCursor(this._activeBuffer.x + e3, this._activeBuffer.y + t3);
              }
              cursorUp(e3) {
                const t3 = this._activeBuffer.y - this._activeBuffer.scrollTop;
                return t3 >= 0 ? this._moveCursor(0, -Math.min(t3, e3.params[0] || 1)) : this._moveCursor(0, -(e3.params[0] || 1)), true;
              }
              cursorDown(e3) {
                const t3 = this._activeBuffer.scrollBottom - this._activeBuffer.y;
                return t3 >= 0 ? this._moveCursor(0, Math.min(t3, e3.params[0] || 1)) : this._moveCursor(0, e3.params[0] || 1), true;
              }
              cursorForward(e3) {
                return this._moveCursor(e3.params[0] || 1, 0), true;
              }
              cursorBackward(e3) {
                return this._moveCursor(-(e3.params[0] || 1), 0), true;
              }
              cursorNextLine(e3) {
                return this.cursorDown(e3), this._activeBuffer.x = 0, true;
              }
              cursorPrecedingLine(e3) {
                return this.cursorUp(e3), this._activeBuffer.x = 0, true;
              }
              cursorCharAbsolute(e3) {
                return this._setCursor((e3.params[0] || 1) - 1, this._activeBuffer.y), true;
              }
              cursorPosition(e3) {
                return this._setCursor(e3.length >= 2 ? (e3.params[1] || 1) - 1 : 0, (e3.params[0] || 1) - 1), true;
              }
              charPosAbsolute(e3) {
                return this._setCursor((e3.params[0] || 1) - 1, this._activeBuffer.y), true;
              }
              hPositionRelative(e3) {
                return this._moveCursor(e3.params[0] || 1, 0), true;
              }
              linePosAbsolute(e3) {
                return this._setCursor(this._activeBuffer.x, (e3.params[0] || 1) - 1), true;
              }
              vPositionRelative(e3) {
                return this._moveCursor(0, e3.params[0] || 1), true;
              }
              hVPosition(e3) {
                return this.cursorPosition(e3), true;
              }
              tabClear(e3) {
                const t3 = e3.params[0];
                return 0 === t3 ? delete this._activeBuffer.tabs[this._activeBuffer.x] : 3 === t3 && (this._activeBuffer.tabs = {}), true;
              }
              cursorForwardTab(e3) {
                if (this._activeBuffer.x >= this._bufferService.cols)
                  return true;
                let t3 = e3.params[0] || 1;
                for (; t3--; )
                  this._activeBuffer.x = this._activeBuffer.nextStop();
                return true;
              }
              cursorBackwardTab(e3) {
                if (this._activeBuffer.x >= this._bufferService.cols)
                  return true;
                let t3 = e3.params[0] || 1;
                for (; t3--; )
                  this._activeBuffer.x = this._activeBuffer.prevStop();
                return true;
              }
              selectProtected(e3) {
                const t3 = e3.params[0];
                return 1 === t3 && (this._curAttrData.bg |= 536870912), 2 !== t3 && 0 !== t3 || (this._curAttrData.bg &= -536870913), true;
              }
              _eraseInBufferLine(e3, t3, i3, s3 = false, r2 = false) {
                const n2 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e3);
                n2.replaceCells(t3, i3, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData(), r2), s3 && (n2.isWrapped = false);
              }
              _resetBufferLine(e3, t3 = false) {
                const i3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e3);
                i3.fill(this._activeBuffer.getNullCell(this._eraseAttrData()), t3), this._bufferService.buffer.clearMarkers(this._activeBuffer.ybase + e3), i3.isWrapped = false;
              }
              eraseInDisplay(e3, t3 = false) {
                let i3;
                switch (this._restrictCursor(this._bufferService.cols), e3.params[0]) {
                  case 0:
                    for (i3 = this._activeBuffer.y, this._dirtyRowTracker.markDirty(i3), this._eraseInBufferLine(i3++, this._activeBuffer.x, this._bufferService.cols, 0 === this._activeBuffer.x, t3); i3 < this._bufferService.rows; i3++)
                      this._resetBufferLine(i3, t3);
                    this._dirtyRowTracker.markDirty(i3);
                    break;
                  case 1:
                    for (i3 = this._activeBuffer.y, this._dirtyRowTracker.markDirty(i3), this._eraseInBufferLine(i3, 0, this._activeBuffer.x + 1, true, t3), this._activeBuffer.x + 1 >= this._bufferService.cols && (this._activeBuffer.lines.get(i3 + 1).isWrapped = false); i3--; )
                      this._resetBufferLine(i3, t3);
                    this._dirtyRowTracker.markDirty(0);
                    break;
                  case 2:
                    for (i3 = this._bufferService.rows, this._dirtyRowTracker.markDirty(i3 - 1); i3--; )
                      this._resetBufferLine(i3, t3);
                    this._dirtyRowTracker.markDirty(0);
                    break;
                  case 3:
                    const e4 = this._activeBuffer.lines.length - this._bufferService.rows;
                    e4 > 0 && (this._activeBuffer.lines.trimStart(e4), this._activeBuffer.ybase = Math.max(this._activeBuffer.ybase - e4, 0), this._activeBuffer.ydisp = Math.max(this._activeBuffer.ydisp - e4, 0), this._onScroll.fire(0));
                }
                return true;
              }
              eraseInLine(e3, t3 = false) {
                switch (this._restrictCursor(this._bufferService.cols), e3.params[0]) {
                  case 0:
                    this._eraseInBufferLine(this._activeBuffer.y, this._activeBuffer.x, this._bufferService.cols, 0 === this._activeBuffer.x, t3);
                    break;
                  case 1:
                    this._eraseInBufferLine(this._activeBuffer.y, 0, this._activeBuffer.x + 1, false, t3);
                    break;
                  case 2:
                    this._eraseInBufferLine(this._activeBuffer.y, 0, this._bufferService.cols, true, t3);
                }
                return this._dirtyRowTracker.markDirty(this._activeBuffer.y), true;
              }
              insertLines(e3) {
                this._restrictCursor();
                let t3 = e3.params[0] || 1;
                if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
                  return true;
                const i3 = this._activeBuffer.ybase + this._activeBuffer.y, s3 = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom, r2 = this._bufferService.rows - 1 + this._activeBuffer.ybase - s3 + 1;
                for (; t3--; )
                  this._activeBuffer.lines.splice(r2 - 1, 1), this._activeBuffer.lines.splice(i3, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
                return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom), this._activeBuffer.x = 0, true;
              }
              deleteLines(e3) {
                this._restrictCursor();
                let t3 = e3.params[0] || 1;
                if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
                  return true;
                const i3 = this._activeBuffer.ybase + this._activeBuffer.y;
                let s3;
                for (s3 = this._bufferService.rows - 1 - this._activeBuffer.scrollBottom, s3 = this._bufferService.rows - 1 + this._activeBuffer.ybase - s3; t3--; )
                  this._activeBuffer.lines.splice(i3, 1), this._activeBuffer.lines.splice(s3, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
                return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.y, this._activeBuffer.scrollBottom), this._activeBuffer.x = 0, true;
              }
              insertChars(e3) {
                this._restrictCursor();
                const t3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                return t3 && (t3.insertCells(this._activeBuffer.x, e3.params[0] || 1, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), true;
              }
              deleteChars(e3) {
                this._restrictCursor();
                const t3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                return t3 && (t3.deleteCells(this._activeBuffer.x, e3.params[0] || 1, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), true;
              }
              scrollUp(e3) {
                let t3 = e3.params[0] || 1;
                for (; t3--; )
                  this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 1), this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 0, this._activeBuffer.getBlankLine(this._eraseAttrData()));
                return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
              }
              scrollDown(e3) {
                let t3 = e3.params[0] || 1;
                for (; t3--; )
                  this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollBottom, 1), this._activeBuffer.lines.splice(this._activeBuffer.ybase + this._activeBuffer.scrollTop, 0, this._activeBuffer.getBlankLine(l.DEFAULT_ATTR_DATA));
                return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
              }
              scrollLeft(e3) {
                if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
                  return true;
                const t3 = e3.params[0] || 1;
                for (let e4 = this._activeBuffer.scrollTop; e4 <= this._activeBuffer.scrollBottom; ++e4) {
                  const i3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e4);
                  i3.deleteCells(0, t3, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i3.isWrapped = false;
                }
                return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
              }
              scrollRight(e3) {
                if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
                  return true;
                const t3 = e3.params[0] || 1;
                for (let e4 = this._activeBuffer.scrollTop; e4 <= this._activeBuffer.scrollBottom; ++e4) {
                  const i3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e4);
                  i3.insertCells(0, t3, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i3.isWrapped = false;
                }
                return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
              }
              insertColumns(e3) {
                if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
                  return true;
                const t3 = e3.params[0] || 1;
                for (let e4 = this._activeBuffer.scrollTop; e4 <= this._activeBuffer.scrollBottom; ++e4) {
                  const i3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e4);
                  i3.insertCells(this._activeBuffer.x, t3, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i3.isWrapped = false;
                }
                return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
              }
              deleteColumns(e3) {
                if (this._activeBuffer.y > this._activeBuffer.scrollBottom || this._activeBuffer.y < this._activeBuffer.scrollTop)
                  return true;
                const t3 = e3.params[0] || 1;
                for (let e4 = this._activeBuffer.scrollTop; e4 <= this._activeBuffer.scrollBottom; ++e4) {
                  const i3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + e4);
                  i3.deleteCells(this._activeBuffer.x, t3, this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), i3.isWrapped = false;
                }
                return this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom), true;
              }
              eraseChars(e3) {
                this._restrictCursor();
                const t3 = this._activeBuffer.lines.get(this._activeBuffer.ybase + this._activeBuffer.y);
                return t3 && (t3.replaceCells(this._activeBuffer.x, this._activeBuffer.x + (e3.params[0] || 1), this._activeBuffer.getNullCell(this._eraseAttrData()), this._eraseAttrData()), this._dirtyRowTracker.markDirty(this._activeBuffer.y)), true;
              }
              repeatPrecedingCharacter(e3) {
                if (!this._parser.precedingCodepoint)
                  return true;
                const t3 = e3.params[0] || 1, i3 = new Uint32Array(t3);
                for (let e4 = 0; e4 < t3; ++e4)
                  i3[e4] = this._parser.precedingCodepoint;
                return this.print(i3, 0, i3.length), true;
              }
              sendDeviceAttributesPrimary(e3) {
                return e3.params[0] > 0 || (this._is("xterm") || this._is("rxvt-unicode") || this._is("screen") ? this._coreService.triggerDataEvent(n.C0.ESC + "[?1;2c") : this._is("linux") && this._coreService.triggerDataEvent(n.C0.ESC + "[?6c")), true;
              }
              sendDeviceAttributesSecondary(e3) {
                return e3.params[0] > 0 || (this._is("xterm") ? this._coreService.triggerDataEvent(n.C0.ESC + "[>0;276;0c") : this._is("rxvt-unicode") ? this._coreService.triggerDataEvent(n.C0.ESC + "[>85;95;0c") : this._is("linux") ? this._coreService.triggerDataEvent(e3.params[0] + "c") : this._is("screen") && this._coreService.triggerDataEvent(n.C0.ESC + "[>83;40003;0c")), true;
              }
              _is(e3) {
                return 0 === (this._optionsService.rawOptions.termName + "").indexOf(e3);
              }
              setMode(e3) {
                for (let t3 = 0; t3 < e3.length; t3++)
                  switch (e3.params[t3]) {
                    case 4:
                      this._coreService.modes.insertMode = true;
                      break;
                    case 20:
                      this._optionsService.options.convertEol = true;
                  }
                return true;
              }
              setModePrivate(e3) {
                for (let t3 = 0; t3 < e3.length; t3++)
                  switch (e3.params[t3]) {
                    case 1:
                      this._coreService.decPrivateModes.applicationCursorKeys = true;
                      break;
                    case 2:
                      this._charsetService.setgCharset(0, o.DEFAULT_CHARSET), this._charsetService.setgCharset(1, o.DEFAULT_CHARSET), this._charsetService.setgCharset(2, o.DEFAULT_CHARSET), this._charsetService.setgCharset(3, o.DEFAULT_CHARSET);
                      break;
                    case 3:
                      this._optionsService.rawOptions.windowOptions.setWinLines && (this._bufferService.resize(132, this._bufferService.rows), this._onRequestReset.fire());
                      break;
                    case 6:
                      this._coreService.decPrivateModes.origin = true, this._setCursor(0, 0);
                      break;
                    case 7:
                      this._coreService.decPrivateModes.wraparound = true;
                      break;
                    case 12:
                      this._optionsService.options.cursorBlink = true;
                      break;
                    case 45:
                      this._coreService.decPrivateModes.reverseWraparound = true;
                      break;
                    case 66:
                      this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = true, this._onRequestSyncScrollBar.fire();
                      break;
                    case 9:
                      this._coreMouseService.activeProtocol = "X10";
                      break;
                    case 1e3:
                      this._coreMouseService.activeProtocol = "VT200";
                      break;
                    case 1002:
                      this._coreMouseService.activeProtocol = "DRAG";
                      break;
                    case 1003:
                      this._coreMouseService.activeProtocol = "ANY";
                      break;
                    case 1004:
                      this._coreService.decPrivateModes.sendFocus = true, this._onRequestSendFocus.fire();
                      break;
                    case 1005:
                      this._logService.debug("DECSET 1005 not supported (see #2507)");
                      break;
                    case 1006:
                      this._coreMouseService.activeEncoding = "SGR";
                      break;
                    case 1015:
                      this._logService.debug("DECSET 1015 not supported (see #2507)");
                      break;
                    case 1016:
                      this._coreMouseService.activeEncoding = "SGR_PIXELS";
                      break;
                    case 25:
                      this._coreService.isCursorHidden = false;
                      break;
                    case 1048:
                      this.saveCursor();
                      break;
                    case 1049:
                      this.saveCursor();
                    case 47:
                    case 1047:
                      this._bufferService.buffers.activateAltBuffer(this._eraseAttrData()), this._coreService.isCursorInitialized = true, this._onRequestRefreshRows.fire(0, this._bufferService.rows - 1), this._onRequestSyncScrollBar.fire();
                      break;
                    case 2004:
                      this._coreService.decPrivateModes.bracketedPasteMode = true;
                  }
                return true;
              }
              resetMode(e3) {
                for (let t3 = 0; t3 < e3.length; t3++)
                  switch (e3.params[t3]) {
                    case 4:
                      this._coreService.modes.insertMode = false;
                      break;
                    case 20:
                      this._optionsService.options.convertEol = false;
                  }
                return true;
              }
              resetModePrivate(e3) {
                for (let t3 = 0; t3 < e3.length; t3++)
                  switch (e3.params[t3]) {
                    case 1:
                      this._coreService.decPrivateModes.applicationCursorKeys = false;
                      break;
                    case 3:
                      this._optionsService.rawOptions.windowOptions.setWinLines && (this._bufferService.resize(80, this._bufferService.rows), this._onRequestReset.fire());
                      break;
                    case 6:
                      this._coreService.decPrivateModes.origin = false, this._setCursor(0, 0);
                      break;
                    case 7:
                      this._coreService.decPrivateModes.wraparound = false;
                      break;
                    case 12:
                      this._optionsService.options.cursorBlink = false;
                      break;
                    case 45:
                      this._coreService.decPrivateModes.reverseWraparound = false;
                      break;
                    case 66:
                      this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = false, this._onRequestSyncScrollBar.fire();
                      break;
                    case 9:
                    case 1e3:
                    case 1002:
                    case 1003:
                      this._coreMouseService.activeProtocol = "NONE";
                      break;
                    case 1004:
                      this._coreService.decPrivateModes.sendFocus = false;
                      break;
                    case 1005:
                      this._logService.debug("DECRST 1005 not supported (see #2507)");
                      break;
                    case 1006:
                    case 1016:
                      this._coreMouseService.activeEncoding = "DEFAULT";
                      break;
                    case 1015:
                      this._logService.debug("DECRST 1015 not supported (see #2507)");
                      break;
                    case 25:
                      this._coreService.isCursorHidden = true;
                      break;
                    case 1048:
                      this.restoreCursor();
                      break;
                    case 1049:
                    case 47:
                    case 1047:
                      this._bufferService.buffers.activateNormalBuffer(), 1049 === e3.params[t3] && this.restoreCursor(), this._coreService.isCursorInitialized = true, this._onRequestRefreshRows.fire(0, this._bufferService.rows - 1), this._onRequestSyncScrollBar.fire();
                      break;
                    case 2004:
                      this._coreService.decPrivateModes.bracketedPasteMode = false;
                  }
                return true;
              }
              requestMode(e3, t3) {
                const i3 = this._coreService.decPrivateModes, { activeProtocol: s3, activeEncoding: r2 } = this._coreMouseService, o2 = this._coreService, { buffers: a2, cols: h2 } = this._bufferService, { active: c2, alt: l2 } = a2, d2 = this._optionsService.rawOptions, _2 = (e4) => e4 ? 1 : 2, u2 = e3.params[0];
                return f2 = u2, v2 = t3 ? 2 === u2 ? 3 : 4 === u2 ? _2(o2.modes.insertMode) : 12 === u2 ? 4 : 20 === u2 ? _2(d2.convertEol) : 0 : 1 === u2 ? _2(i3.applicationCursorKeys) : 3 === u2 ? d2.windowOptions.setWinLines ? 80 === h2 ? 2 : 132 === h2 ? 1 : 0 : 0 : 6 === u2 ? _2(i3.origin) : 7 === u2 ? _2(i3.wraparound) : 8 === u2 ? 3 : 9 === u2 ? _2("X10" === s3) : 12 === u2 ? _2(d2.cursorBlink) : 25 === u2 ? _2(!o2.isCursorHidden) : 45 === u2 ? _2(i3.reverseWraparound) : 66 === u2 ? _2(i3.applicationKeypad) : 1e3 === u2 ? _2("VT200" === s3) : 1002 === u2 ? _2("DRAG" === s3) : 1003 === u2 ? _2("ANY" === s3) : 1004 === u2 ? _2(i3.sendFocus) : 1005 === u2 ? 4 : 1006 === u2 ? _2("SGR" === r2) : 1015 === u2 ? 4 : 1016 === u2 ? _2("SGR_PIXELS" === r2) : 1048 === u2 ? 1 : 47 === u2 || 1047 === u2 || 1049 === u2 ? _2(c2 === l2) : 2004 === u2 ? _2(i3.bracketedPasteMode) : 0, o2.triggerDataEvent(`${n.C0.ESC}[${t3 ? "" : "?"}${f2};${v2}$y`), true;
                var f2, v2;
              }
              _updateAttrColor(e3, t3, i3, s3, r2) {
                return 2 === t3 ? (e3 |= 50331648, e3 &= -16777216, e3 |= f.AttributeData.fromColorRGB([i3, s3, r2])) : 5 === t3 && (e3 &= -50331904, e3 |= 33554432 | 255 & i3), e3;
              }
              _extractColor(e3, t3, i3) {
                const s3 = [0, 0, -1, 0, 0, 0];
                let r2 = 0, n2 = 0;
                do {
                  if (s3[n2 + r2] = e3.params[t3 + n2], e3.hasSubParams(t3 + n2)) {
                    const i4 = e3.getSubParams(t3 + n2);
                    let o2 = 0;
                    do {
                      5 === s3[1] && (r2 = 1), s3[n2 + o2 + 1 + r2] = i4[o2];
                    } while (++o2 < i4.length && o2 + n2 + 1 + r2 < s3.length);
                    break;
                  }
                  if (5 === s3[1] && n2 + r2 >= 2 || 2 === s3[1] && n2 + r2 >= 5)
                    break;
                  s3[1] && (r2 = 1);
                } while (++n2 + t3 < e3.length && n2 + r2 < s3.length);
                for (let e4 = 2; e4 < s3.length; ++e4)
                  -1 === s3[e4] && (s3[e4] = 0);
                switch (s3[0]) {
                  case 38:
                    i3.fg = this._updateAttrColor(i3.fg, s3[1], s3[3], s3[4], s3[5]);
                    break;
                  case 48:
                    i3.bg = this._updateAttrColor(i3.bg, s3[1], s3[3], s3[4], s3[5]);
                    break;
                  case 58:
                    i3.extended = i3.extended.clone(), i3.extended.underlineColor = this._updateAttrColor(i3.extended.underlineColor, s3[1], s3[3], s3[4], s3[5]);
                }
                return n2;
              }
              _processUnderline(e3, t3) {
                t3.extended = t3.extended.clone(), (!~e3 || e3 > 5) && (e3 = 1), t3.extended.underlineStyle = e3, t3.fg |= 268435456, 0 === e3 && (t3.fg &= -268435457), t3.updateExtended();
              }
              _processSGR0(e3) {
                e3.fg = l.DEFAULT_ATTR_DATA.fg, e3.bg = l.DEFAULT_ATTR_DATA.bg, e3.extended = e3.extended.clone(), e3.extended.underlineStyle = 0, e3.extended.underlineColor &= -67108864, e3.updateExtended();
              }
              charAttributes(e3) {
                if (1 === e3.length && 0 === e3.params[0])
                  return this._processSGR0(this._curAttrData), true;
                const t3 = e3.length;
                let i3;
                const s3 = this._curAttrData;
                for (let r2 = 0; r2 < t3; r2++)
                  i3 = e3.params[r2], i3 >= 30 && i3 <= 37 ? (s3.fg &= -50331904, s3.fg |= 16777216 | i3 - 30) : i3 >= 40 && i3 <= 47 ? (s3.bg &= -50331904, s3.bg |= 16777216 | i3 - 40) : i3 >= 90 && i3 <= 97 ? (s3.fg &= -50331904, s3.fg |= 16777224 | i3 - 90) : i3 >= 100 && i3 <= 107 ? (s3.bg &= -50331904, s3.bg |= 16777224 | i3 - 100) : 0 === i3 ? this._processSGR0(s3) : 1 === i3 ? s3.fg |= 134217728 : 3 === i3 ? s3.bg |= 67108864 : 4 === i3 ? (s3.fg |= 268435456, this._processUnderline(e3.hasSubParams(r2) ? e3.getSubParams(r2)[0] : 1, s3)) : 5 === i3 ? s3.fg |= 536870912 : 7 === i3 ? s3.fg |= 67108864 : 8 === i3 ? s3.fg |= 1073741824 : 9 === i3 ? s3.fg |= 2147483648 : 2 === i3 ? s3.bg |= 134217728 : 21 === i3 ? this._processUnderline(2, s3) : 22 === i3 ? (s3.fg &= -134217729, s3.bg &= -134217729) : 23 === i3 ? s3.bg &= -67108865 : 24 === i3 ? (s3.fg &= -268435457, this._processUnderline(0, s3)) : 25 === i3 ? s3.fg &= -536870913 : 27 === i3 ? s3.fg &= -67108865 : 28 === i3 ? s3.fg &= -1073741825 : 29 === i3 ? s3.fg &= 2147483647 : 39 === i3 ? (s3.fg &= -67108864, s3.fg |= 16777215 & l.DEFAULT_ATTR_DATA.fg) : 49 === i3 ? (s3.bg &= -67108864, s3.bg |= 16777215 & l.DEFAULT_ATTR_DATA.bg) : 38 === i3 || 48 === i3 || 58 === i3 ? r2 += this._extractColor(e3, r2, s3) : 59 === i3 ? (s3.extended = s3.extended.clone(), s3.extended.underlineColor = -1, s3.updateExtended()) : 100 === i3 ? (s3.fg &= -67108864, s3.fg |= 16777215 & l.DEFAULT_ATTR_DATA.fg, s3.bg &= -67108864, s3.bg |= 16777215 & l.DEFAULT_ATTR_DATA.bg) : this._logService.debug("Unknown SGR attribute: %d.", i3);
                return true;
              }
              deviceStatus(e3) {
                switch (e3.params[0]) {
                  case 5:
                    this._coreService.triggerDataEvent(`${n.C0.ESC}[0n`);
                    break;
                  case 6:
                    const e4 = this._activeBuffer.y + 1, t3 = this._activeBuffer.x + 1;
                    this._coreService.triggerDataEvent(`${n.C0.ESC}[${e4};${t3}R`);
                }
                return true;
              }
              deviceStatusPrivate(e3) {
                if (6 === e3.params[0]) {
                  const e4 = this._activeBuffer.y + 1, t3 = this._activeBuffer.x + 1;
                  this._coreService.triggerDataEvent(`${n.C0.ESC}[?${e4};${t3}R`);
                }
                return true;
              }
              softReset(e3) {
                return this._coreService.isCursorHidden = false, this._onRequestSyncScrollBar.fire(), this._activeBuffer.scrollTop = 0, this._activeBuffer.scrollBottom = this._bufferService.rows - 1, this._curAttrData = l.DEFAULT_ATTR_DATA.clone(), this._coreService.reset(), this._charsetService.reset(), this._activeBuffer.savedX = 0, this._activeBuffer.savedY = this._activeBuffer.ybase, this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg, this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg, this._activeBuffer.savedCharset = this._charsetService.charset, this._coreService.decPrivateModes.origin = false, true;
              }
              setCursorStyle(e3) {
                const t3 = e3.params[0] || 1;
                switch (t3) {
                  case 1:
                  case 2:
                    this._optionsService.options.cursorStyle = "block";
                    break;
                  case 3:
                  case 4:
                    this._optionsService.options.cursorStyle = "underline";
                    break;
                  case 5:
                  case 6:
                    this._optionsService.options.cursorStyle = "bar";
                }
                const i3 = t3 % 2 == 1;
                return this._optionsService.options.cursorBlink = i3, true;
              }
              setScrollRegion(e3) {
                const t3 = e3.params[0] || 1;
                let i3;
                return (e3.length < 2 || (i3 = e3.params[1]) > this._bufferService.rows || 0 === i3) && (i3 = this._bufferService.rows), i3 > t3 && (this._activeBuffer.scrollTop = t3 - 1, this._activeBuffer.scrollBottom = i3 - 1, this._setCursor(0, 0)), true;
              }
              windowOptions(e3) {
                if (!b(e3.params[0], this._optionsService.rawOptions.windowOptions))
                  return true;
                const t3 = e3.length > 1 ? e3.params[1] : 0;
                switch (e3.params[0]) {
                  case 14:
                    2 !== t3 && this._onRequestWindowsOptionsReport.fire(y.GET_WIN_SIZE_PIXELS);
                    break;
                  case 16:
                    this._onRequestWindowsOptionsReport.fire(y.GET_CELL_SIZE_PIXELS);
                    break;
                  case 18:
                    this._bufferService && this._coreService.triggerDataEvent(`${n.C0.ESC}[8;${this._bufferService.rows};${this._bufferService.cols}t`);
                    break;
                  case 22:
                    0 !== t3 && 2 !== t3 || (this._windowTitleStack.push(this._windowTitle), this._windowTitleStack.length > 10 && this._windowTitleStack.shift()), 0 !== t3 && 1 !== t3 || (this._iconNameStack.push(this._iconName), this._iconNameStack.length > 10 && this._iconNameStack.shift());
                    break;
                  case 23:
                    0 !== t3 && 2 !== t3 || this._windowTitleStack.length && this.setTitle(this._windowTitleStack.pop()), 0 !== t3 && 1 !== t3 || this._iconNameStack.length && this.setIconName(this._iconNameStack.pop());
                }
                return true;
              }
              saveCursor(e3) {
                return this._activeBuffer.savedX = this._activeBuffer.x, this._activeBuffer.savedY = this._activeBuffer.ybase + this._activeBuffer.y, this._activeBuffer.savedCurAttrData.fg = this._curAttrData.fg, this._activeBuffer.savedCurAttrData.bg = this._curAttrData.bg, this._activeBuffer.savedCharset = this._charsetService.charset, true;
              }
              restoreCursor(e3) {
                return this._activeBuffer.x = this._activeBuffer.savedX || 0, this._activeBuffer.y = Math.max(this._activeBuffer.savedY - this._activeBuffer.ybase, 0), this._curAttrData.fg = this._activeBuffer.savedCurAttrData.fg, this._curAttrData.bg = this._activeBuffer.savedCurAttrData.bg, this._charsetService.charset = this._savedCharset, this._activeBuffer.savedCharset && (this._charsetService.charset = this._activeBuffer.savedCharset), this._restrictCursor(), true;
              }
              setTitle(e3) {
                return this._windowTitle = e3, this._onTitleChange.fire(e3), true;
              }
              setIconName(e3) {
                return this._iconName = e3, true;
              }
              setOrReportIndexedColor(e3) {
                const t3 = [], i3 = e3.split(";");
                for (; i3.length > 1; ) {
                  const e4 = i3.shift(), s3 = i3.shift();
                  if (/^\d+$/.exec(e4)) {
                    const i4 = parseInt(e4);
                    if (0 <= i4 && i4 < 256)
                      if ("?" === s3)
                        t3.push({ type: 0, index: i4 });
                      else {
                        const e5 = (0, S.parseColor)(s3);
                        e5 && t3.push({ type: 1, index: i4, color: e5 });
                      }
                  }
                }
                return t3.length && this._onColor.fire(t3), true;
              }
              setHyperlink(e3) {
                const t3 = e3.split(";");
                return !(t3.length < 2) && (t3[1] ? this._createHyperlink(t3[0], t3[1]) : !t3[0] && this._finishHyperlink());
              }
              _createHyperlink(e3, t3) {
                this._getCurrentLinkId() && this._finishHyperlink();
                const i3 = e3.split(":");
                let s3;
                const r2 = i3.findIndex((e4) => e4.startsWith("id="));
                return -1 !== r2 && (s3 = i3[r2].slice(3) || void 0), this._curAttrData.extended = this._curAttrData.extended.clone(), this._curAttrData.extended.urlId = this._oscLinkService.registerLink({ id: s3, uri: t3 }), this._curAttrData.updateExtended(), true;
              }
              _finishHyperlink() {
                return this._curAttrData.extended = this._curAttrData.extended.clone(), this._curAttrData.extended.urlId = 0, this._curAttrData.updateExtended(), true;
              }
              _setOrReportSpecialColor(e3, t3) {
                const i3 = e3.split(";");
                for (let e4 = 0; e4 < i3.length && !(t3 >= this._specialColors.length); ++e4, ++t3)
                  if ("?" === i3[e4])
                    this._onColor.fire([{ type: 0, index: this._specialColors[t3] }]);
                  else {
                    const s3 = (0, S.parseColor)(i3[e4]);
                    s3 && this._onColor.fire([{ type: 1, index: this._specialColors[t3], color: s3 }]);
                  }
                return true;
              }
              setOrReportFgColor(e3) {
                return this._setOrReportSpecialColor(e3, 0);
              }
              setOrReportBgColor(e3) {
                return this._setOrReportSpecialColor(e3, 1);
              }
              setOrReportCursorColor(e3) {
                return this._setOrReportSpecialColor(e3, 2);
              }
              restoreIndexedColor(e3) {
                if (!e3)
                  return this._onColor.fire([{ type: 2 }]), true;
                const t3 = [], i3 = e3.split(";");
                for (let e4 = 0; e4 < i3.length; ++e4)
                  if (/^\d+$/.exec(i3[e4])) {
                    const s3 = parseInt(i3[e4]);
                    0 <= s3 && s3 < 256 && t3.push({ type: 2, index: s3 });
                  }
                return t3.length && this._onColor.fire(t3), true;
              }
              restoreFgColor(e3) {
                return this._onColor.fire([{ type: 2, index: 256 }]), true;
              }
              restoreBgColor(e3) {
                return this._onColor.fire([{ type: 2, index: 257 }]), true;
              }
              restoreCursorColor(e3) {
                return this._onColor.fire([{ type: 2, index: 258 }]), true;
              }
              nextLine() {
                return this._activeBuffer.x = 0, this.index(), true;
              }
              keypadApplicationMode() {
                return this._logService.debug("Serial port requested application keypad."), this._coreService.decPrivateModes.applicationKeypad = true, this._onRequestSyncScrollBar.fire(), true;
              }
              keypadNumericMode() {
                return this._logService.debug("Switching back to normal keypad."), this._coreService.decPrivateModes.applicationKeypad = false, this._onRequestSyncScrollBar.fire(), true;
              }
              selectDefaultCharset() {
                return this._charsetService.setgLevel(0), this._charsetService.setgCharset(0, o.DEFAULT_CHARSET), true;
              }
              selectCharset(e3) {
                return 2 !== e3.length ? (this.selectDefaultCharset(), true) : ("/" === e3[0] || this._charsetService.setgCharset(m[e3[0]], o.CHARSETS[e3[1]] || o.DEFAULT_CHARSET), true);
              }
              index() {
                return this._restrictCursor(), this._activeBuffer.y++, this._activeBuffer.y === this._activeBuffer.scrollBottom + 1 ? (this._activeBuffer.y--, this._bufferService.scroll(this._eraseAttrData())) : this._activeBuffer.y >= this._bufferService.rows && (this._activeBuffer.y = this._bufferService.rows - 1), this._restrictCursor(), true;
              }
              tabSet() {
                return this._activeBuffer.tabs[this._activeBuffer.x] = true, true;
              }
              reverseIndex() {
                if (this._restrictCursor(), this._activeBuffer.y === this._activeBuffer.scrollTop) {
                  const e3 = this._activeBuffer.scrollBottom - this._activeBuffer.scrollTop;
                  this._activeBuffer.lines.shiftElements(this._activeBuffer.ybase + this._activeBuffer.y, e3, 1), this._activeBuffer.lines.set(this._activeBuffer.ybase + this._activeBuffer.y, this._activeBuffer.getBlankLine(this._eraseAttrData())), this._dirtyRowTracker.markRangeDirty(this._activeBuffer.scrollTop, this._activeBuffer.scrollBottom);
                } else
                  this._activeBuffer.y--, this._restrictCursor();
                return true;
              }
              fullReset() {
                return this._parser.reset(), this._onRequestReset.fire(), true;
              }
              reset() {
                this._curAttrData = l.DEFAULT_ATTR_DATA.clone(), this._eraseAttrDataInternal = l.DEFAULT_ATTR_DATA.clone();
              }
              _eraseAttrData() {
                return this._eraseAttrDataInternal.bg &= -67108864, this._eraseAttrDataInternal.bg |= 67108863 & this._curAttrData.bg, this._eraseAttrDataInternal;
              }
              setgLevel(e3) {
                return this._charsetService.setgLevel(e3), true;
              }
              screenAlignmentPattern() {
                const e3 = new u.CellData();
                e3.content = 1 << 22 | "E".charCodeAt(0), e3.fg = this._curAttrData.fg, e3.bg = this._curAttrData.bg, this._setCursor(0, 0);
                for (let t3 = 0; t3 < this._bufferService.rows; ++t3) {
                  const i3 = this._activeBuffer.ybase + this._activeBuffer.y + t3, s3 = this._activeBuffer.lines.get(i3);
                  s3 && (s3.fill(e3), s3.isWrapped = false);
                }
                return this._dirtyRowTracker.markAllDirty(), this._setCursor(0, 0), true;
              }
              requestStatusString(e3, t3) {
                const i3 = this._bufferService.buffer, s3 = this._optionsService.rawOptions;
                return ((e4) => (this._coreService.triggerDataEvent(`${n.C0.ESC}${e4}${n.C0.ESC}\\`), true))('"q' === e3 ? `P1$r${this._curAttrData.isProtected() ? 1 : 0}"q` : '"p' === e3 ? 'P1$r61;1"p' : "r" === e3 ? `P1$r${i3.scrollTop + 1};${i3.scrollBottom + 1}r` : "m" === e3 ? "P1$r0m" : " q" === e3 ? `P1$r${{ block: 2, underline: 4, bar: 6 }[s3.cursorStyle] - (s3.cursorBlink ? 1 : 0)} q` : "P0$r");
              }
              markRangeDirty(e3, t3) {
                this._dirtyRowTracker.markRangeDirty(e3, t3);
              }
            }
            t2.InputHandler = E;
            let L = class {
              constructor(e3) {
                this._bufferService = e3, this.clearRange();
              }
              clearRange() {
                this.start = this._bufferService.buffer.y, this.end = this._bufferService.buffer.y;
              }
              markDirty(e3) {
                e3 < this.start ? this.start = e3 : e3 > this.end && (this.end = e3);
              }
              markRangeDirty(e3, t3) {
                e3 > t3 && (w = e3, e3 = t3, t3 = w), e3 < this.start && (this.start = e3), t3 > this.end && (this.end = t3);
              }
              markAllDirty() {
                this.markRangeDirty(0, this._bufferService.rows - 1);
              }
            };
            L = s2([r(0, v.IBufferService)], L);
          }, 844: (e2, t2) => {
            function i2(e3) {
              for (const t3 of e3)
                t3.dispose();
              e3.length = 0;
            }
            Object.defineProperty(t2, "__esModule", { value: true }), t2.getDisposeArrayDisposable = t2.disposeArray = t2.toDisposable = t2.Disposable = void 0, t2.Disposable = class {
              constructor() {
                this._disposables = [], this._isDisposed = false;
              }
              dispose() {
                this._isDisposed = true;
                for (const e3 of this._disposables)
                  e3.dispose();
                this._disposables.length = 0;
              }
              register(e3) {
                return this._disposables.push(e3), e3;
              }
              unregister(e3) {
                const t3 = this._disposables.indexOf(e3);
                -1 !== t3 && this._disposables.splice(t3, 1);
              }
            }, t2.toDisposable = function(e3) {
              return { dispose: e3 };
            }, t2.disposeArray = i2, t2.getDisposeArrayDisposable = function(e3) {
              return { dispose: () => i2(e3) };
            };
          }, 1505: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.FourKeyMap = t2.TwoKeyMap = void 0;
            class i2 {
              constructor() {
                this._data = {};
              }
              set(e3, t3, i3) {
                this._data[e3] || (this._data[e3] = {}), this._data[e3][t3] = i3;
              }
              get(e3, t3) {
                return this._data[e3] ? this._data[e3][t3] : void 0;
              }
              clear() {
                this._data = {};
              }
            }
            t2.TwoKeyMap = i2, t2.FourKeyMap = class {
              constructor() {
                this._data = new i2();
              }
              set(e3, t3, s2, r, n) {
                this._data.get(e3, t3) || this._data.set(e3, t3, new i2()), this._data.get(e3, t3).set(s2, r, n);
              }
              get(e3, t3, i3, s2) {
                var r;
                return null === (r = this._data.get(e3, t3)) || void 0 === r ? void 0 : r.get(i3, s2);
              }
              clear() {
                this._data.clear();
              }
            };
          }, 6114: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.isChromeOS = t2.isLinux = t2.isWindows = t2.isIphone = t2.isIpad = t2.isMac = t2.getSafariVersion = t2.isSafari = t2.isLegacyEdge = t2.isFirefox = t2.isNode = void 0, t2.isNode = "undefined" == typeof navigator;
            const i2 = t2.isNode ? "node" : navigator.userAgent, s2 = t2.isNode ? "node" : navigator.platform;
            t2.isFirefox = i2.includes("Firefox"), t2.isLegacyEdge = i2.includes("Edge"), t2.isSafari = /^((?!chrome|android).)*safari/i.test(i2), t2.getSafariVersion = function() {
              if (!t2.isSafari)
                return 0;
              const e3 = i2.match(/Version\/(\d+)/);
              return null === e3 || e3.length < 2 ? 0 : parseInt(e3[1]);
            }, t2.isMac = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].includes(s2), t2.isIpad = "iPad" === s2, t2.isIphone = "iPhone" === s2, t2.isWindows = ["Windows", "Win16", "Win32", "WinCE"].includes(s2), t2.isLinux = s2.indexOf("Linux") >= 0, t2.isChromeOS = /\bCrOS\b/.test(i2);
          }, 6106: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.SortedList = void 0;
            let i2 = 0;
            t2.SortedList = class {
              constructor(e3) {
                this._getKey = e3, this._array = [];
              }
              clear() {
                this._array.length = 0;
              }
              insert(e3) {
                0 !== this._array.length ? (i2 = this._search(this._getKey(e3), 0, this._array.length - 1), this._array.splice(i2, 0, e3)) : this._array.push(e3);
              }
              delete(e3) {
                if (0 === this._array.length)
                  return false;
                const t3 = this._getKey(e3);
                if (void 0 === t3)
                  return false;
                if (i2 = this._search(t3, 0, this._array.length - 1), -1 === i2)
                  return false;
                if (this._getKey(this._array[i2]) !== t3)
                  return false;
                do {
                  if (this._array[i2] === e3)
                    return this._array.splice(i2, 1), true;
                } while (++i2 < this._array.length && this._getKey(this._array[i2]) === t3);
                return false;
              }
              *getKeyIterator(e3) {
                if (0 !== this._array.length && (i2 = this._search(e3, 0, this._array.length - 1), !(i2 < 0 || i2 >= this._array.length) && this._getKey(this._array[i2]) === e3))
                  do {
                    yield this._array[i2];
                  } while (++i2 < this._array.length && this._getKey(this._array[i2]) === e3);
              }
              forEachByKey(e3, t3) {
                if (0 !== this._array.length && (i2 = this._search(e3, 0, this._array.length - 1), !(i2 < 0 || i2 >= this._array.length) && this._getKey(this._array[i2]) === e3))
                  do {
                    t3(this._array[i2]);
                  } while (++i2 < this._array.length && this._getKey(this._array[i2]) === e3);
              }
              values() {
                return this._array.values();
              }
              _search(e3, t3, i3) {
                if (i3 < t3)
                  return t3;
                let s2 = Math.floor((t3 + i3) / 2);
                const r = this._getKey(this._array[s2]);
                if (r > e3)
                  return this._search(e3, t3, s2 - 1);
                if (r < e3)
                  return this._search(e3, s2 + 1, i3);
                for (; s2 > 0 && this._getKey(this._array[s2 - 1]) === e3; )
                  s2--;
                return s2;
              }
            };
          }, 7226: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.DebouncedIdleTask = t2.IdleTaskQueue = t2.PriorityTaskQueue = void 0;
            const s2 = i2(6114);
            class r {
              constructor() {
                this._tasks = [], this._i = 0;
              }
              enqueue(e3) {
                this._tasks.push(e3), this._start();
              }
              flush() {
                for (; this._i < this._tasks.length; )
                  this._tasks[this._i]() || this._i++;
                this.clear();
              }
              clear() {
                this._idleCallback && (this._cancelCallback(this._idleCallback), this._idleCallback = void 0), this._i = 0, this._tasks.length = 0;
              }
              _start() {
                this._idleCallback || (this._idleCallback = this._requestCallback(this._process.bind(this)));
              }
              _process(e3) {
                this._idleCallback = void 0;
                let t3 = 0, i3 = 0, s3 = e3.timeRemaining(), r2 = 0;
                for (; this._i < this._tasks.length; ) {
                  if (t3 = Date.now(), this._tasks[this._i]() || this._i++, t3 = Math.max(1, Date.now() - t3), i3 = Math.max(t3, i3), r2 = e3.timeRemaining(), 1.5 * i3 > r2)
                    return s3 - t3 < -20 && console.warn(`task queue exceeded allotted deadline by ${Math.abs(Math.round(s3 - t3))}ms`), void this._start();
                  s3 = r2;
                }
                this.clear();
              }
            }
            class n extends r {
              _requestCallback(e3) {
                return setTimeout(() => e3(this._createDeadline(16)));
              }
              _cancelCallback(e3) {
                clearTimeout(e3);
              }
              _createDeadline(e3) {
                const t3 = Date.now() + e3;
                return { timeRemaining: () => Math.max(0, t3 - Date.now()) };
              }
            }
            t2.PriorityTaskQueue = n, t2.IdleTaskQueue = !s2.isNode && "requestIdleCallback" in window ? class extends r {
              _requestCallback(e3) {
                return requestIdleCallback(e3);
              }
              _cancelCallback(e3) {
                cancelIdleCallback(e3);
              }
            } : n, t2.DebouncedIdleTask = class {
              constructor() {
                this._queue = new t2.IdleTaskQueue();
              }
              set(e3) {
                this._queue.clear(), this._queue.enqueue(e3);
              }
              flush() {
                this._queue.flush();
              }
            };
          }, 9282: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.updateWindowsModeWrappedState = void 0;
            const s2 = i2(643);
            t2.updateWindowsModeWrappedState = function(e3) {
              const t3 = e3.buffer.lines.get(e3.buffer.ybase + e3.buffer.y - 1), i3 = null == t3 ? void 0 : t3.get(e3.cols - 1), r = e3.buffer.lines.get(e3.buffer.ybase + e3.buffer.y);
              r && i3 && (r.isWrapped = i3[s2.CHAR_DATA_CODE_INDEX] !== s2.NULL_CELL_CODE && i3[s2.CHAR_DATA_CODE_INDEX] !== s2.WHITESPACE_CELL_CODE);
            };
          }, 3734: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.ExtendedAttrs = t2.AttributeData = void 0;
            class i2 {
              constructor() {
                this.fg = 0, this.bg = 0, this.extended = new s2();
              }
              static toColorRGB(e3) {
                return [e3 >>> 16 & 255, e3 >>> 8 & 255, 255 & e3];
              }
              static fromColorRGB(e3) {
                return (255 & e3[0]) << 16 | (255 & e3[1]) << 8 | 255 & e3[2];
              }
              clone() {
                const e3 = new i2();
                return e3.fg = this.fg, e3.bg = this.bg, e3.extended = this.extended.clone(), e3;
              }
              isInverse() {
                return 67108864 & this.fg;
              }
              isBold() {
                return 134217728 & this.fg;
              }
              isUnderline() {
                return this.hasExtendedAttrs() && 0 !== this.extended.underlineStyle ? 1 : 268435456 & this.fg;
              }
              isBlink() {
                return 536870912 & this.fg;
              }
              isInvisible() {
                return 1073741824 & this.fg;
              }
              isItalic() {
                return 67108864 & this.bg;
              }
              isDim() {
                return 134217728 & this.bg;
              }
              isStrikethrough() {
                return 2147483648 & this.fg;
              }
              isProtected() {
                return 536870912 & this.bg;
              }
              getFgColorMode() {
                return 50331648 & this.fg;
              }
              getBgColorMode() {
                return 50331648 & this.bg;
              }
              isFgRGB() {
                return 50331648 == (50331648 & this.fg);
              }
              isBgRGB() {
                return 50331648 == (50331648 & this.bg);
              }
              isFgPalette() {
                return 16777216 == (50331648 & this.fg) || 33554432 == (50331648 & this.fg);
              }
              isBgPalette() {
                return 16777216 == (50331648 & this.bg) || 33554432 == (50331648 & this.bg);
              }
              isFgDefault() {
                return 0 == (50331648 & this.fg);
              }
              isBgDefault() {
                return 0 == (50331648 & this.bg);
              }
              isAttributeDefault() {
                return 0 === this.fg && 0 === this.bg;
              }
              getFgColor() {
                switch (50331648 & this.fg) {
                  case 16777216:
                  case 33554432:
                    return 255 & this.fg;
                  case 50331648:
                    return 16777215 & this.fg;
                  default:
                    return -1;
                }
              }
              getBgColor() {
                switch (50331648 & this.bg) {
                  case 16777216:
                  case 33554432:
                    return 255 & this.bg;
                  case 50331648:
                    return 16777215 & this.bg;
                  default:
                    return -1;
                }
              }
              hasExtendedAttrs() {
                return 268435456 & this.bg;
              }
              updateExtended() {
                this.extended.isEmpty() ? this.bg &= -268435457 : this.bg |= 268435456;
              }
              getUnderlineColor() {
                if (268435456 & this.bg && ~this.extended.underlineColor)
                  switch (50331648 & this.extended.underlineColor) {
                    case 16777216:
                    case 33554432:
                      return 255 & this.extended.underlineColor;
                    case 50331648:
                      return 16777215 & this.extended.underlineColor;
                    default:
                      return this.getFgColor();
                  }
                return this.getFgColor();
              }
              getUnderlineColorMode() {
                return 268435456 & this.bg && ~this.extended.underlineColor ? 50331648 & this.extended.underlineColor : this.getFgColorMode();
              }
              isUnderlineColorRGB() {
                return 268435456 & this.bg && ~this.extended.underlineColor ? 50331648 == (50331648 & this.extended.underlineColor) : this.isFgRGB();
              }
              isUnderlineColorPalette() {
                return 268435456 & this.bg && ~this.extended.underlineColor ? 16777216 == (50331648 & this.extended.underlineColor) || 33554432 == (50331648 & this.extended.underlineColor) : this.isFgPalette();
              }
              isUnderlineColorDefault() {
                return 268435456 & this.bg && ~this.extended.underlineColor ? 0 == (50331648 & this.extended.underlineColor) : this.isFgDefault();
              }
              getUnderlineStyle() {
                return 268435456 & this.fg ? 268435456 & this.bg ? this.extended.underlineStyle : 1 : 0;
              }
            }
            t2.AttributeData = i2;
            class s2 {
              constructor(e3 = 0, t3 = 0) {
                this._ext = 0, this._urlId = 0, this._ext = e3, this._urlId = t3;
              }
              get ext() {
                return this._urlId ? -469762049 & this._ext | this.underlineStyle << 26 : this._ext;
              }
              set ext(e3) {
                this._ext = e3;
              }
              get underlineStyle() {
                return this._urlId ? 5 : (469762048 & this._ext) >> 26;
              }
              set underlineStyle(e3) {
                this._ext &= -469762049, this._ext |= e3 << 26 & 469762048;
              }
              get underlineColor() {
                return 67108863 & this._ext;
              }
              set underlineColor(e3) {
                this._ext &= -67108864, this._ext |= 67108863 & e3;
              }
              get urlId() {
                return this._urlId;
              }
              set urlId(e3) {
                this._urlId = e3;
              }
              clone() {
                return new s2(this._ext, this._urlId);
              }
              isEmpty() {
                return 0 === this.underlineStyle && 0 === this._urlId;
              }
            }
            t2.ExtendedAttrs = s2;
          }, 9092: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferStringIterator = t2.Buffer = t2.MAX_BUFFER_SIZE = void 0;
            const s2 = i2(6349), r = i2(8437), n = i2(511), o = i2(643), a = i2(4634), h = i2(4863), c = i2(7116), l = i2(3734), d = i2(7226);
            t2.MAX_BUFFER_SIZE = 4294967295, t2.Buffer = class {
              constructor(e3, t3, i3) {
                this._hasScrollback = e3, this._optionsService = t3, this._bufferService = i3, this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.tabs = {}, this.savedY = 0, this.savedX = 0, this.savedCurAttrData = r.DEFAULT_ATTR_DATA.clone(), this.savedCharset = c.DEFAULT_CHARSET, this.markers = [], this._nullCell = n.CellData.fromCharData([0, o.NULL_CELL_CHAR, o.NULL_CELL_WIDTH, o.NULL_CELL_CODE]), this._whitespaceCell = n.CellData.fromCharData([0, o.WHITESPACE_CELL_CHAR, o.WHITESPACE_CELL_WIDTH, o.WHITESPACE_CELL_CODE]), this._isClearing = false, this._memoryCleanupQueue = new d.IdleTaskQueue(), this._memoryCleanupPosition = 0, this._cols = this._bufferService.cols, this._rows = this._bufferService.rows, this.lines = new s2.CircularList(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops();
              }
              getNullCell(e3) {
                return e3 ? (this._nullCell.fg = e3.fg, this._nullCell.bg = e3.bg, this._nullCell.extended = e3.extended) : (this._nullCell.fg = 0, this._nullCell.bg = 0, this._nullCell.extended = new l.ExtendedAttrs()), this._nullCell;
              }
              getWhitespaceCell(e3) {
                return e3 ? (this._whitespaceCell.fg = e3.fg, this._whitespaceCell.bg = e3.bg, this._whitespaceCell.extended = e3.extended) : (this._whitespaceCell.fg = 0, this._whitespaceCell.bg = 0, this._whitespaceCell.extended = new l.ExtendedAttrs()), this._whitespaceCell;
              }
              getBlankLine(e3, t3) {
                return new r.BufferLine(this._bufferService.cols, this.getNullCell(e3), t3);
              }
              get hasScrollback() {
                return this._hasScrollback && this.lines.maxLength > this._rows;
              }
              get isCursorInViewport() {
                const e3 = this.ybase + this.y - this.ydisp;
                return e3 >= 0 && e3 < this._rows;
              }
              _getCorrectBufferLength(e3) {
                if (!this._hasScrollback)
                  return e3;
                const i3 = e3 + this._optionsService.rawOptions.scrollback;
                return i3 > t2.MAX_BUFFER_SIZE ? t2.MAX_BUFFER_SIZE : i3;
              }
              fillViewportRows(e3) {
                if (0 === this.lines.length) {
                  void 0 === e3 && (e3 = r.DEFAULT_ATTR_DATA);
                  let t3 = this._rows;
                  for (; t3--; )
                    this.lines.push(this.getBlankLine(e3));
                }
              }
              clear() {
                this.ydisp = 0, this.ybase = 0, this.y = 0, this.x = 0, this.lines = new s2.CircularList(this._getCorrectBufferLength(this._rows)), this.scrollTop = 0, this.scrollBottom = this._rows - 1, this.setupTabStops();
              }
              resize(e3, t3) {
                const i3 = this.getNullCell(r.DEFAULT_ATTR_DATA);
                let s3 = 0;
                const n2 = this._getCorrectBufferLength(t3);
                if (n2 > this.lines.maxLength && (this.lines.maxLength = n2), this.lines.length > 0) {
                  if (this._cols < e3)
                    for (let t4 = 0; t4 < this.lines.length; t4++)
                      s3 += +this.lines.get(t4).resize(e3, i3);
                  let o2 = 0;
                  if (this._rows < t3)
                    for (let s4 = this._rows; s4 < t3; s4++)
                      this.lines.length < t3 + this.ybase && (this._optionsService.rawOptions.windowsMode ? this.lines.push(new r.BufferLine(e3, i3)) : this.ybase > 0 && this.lines.length <= this.ybase + this.y + o2 + 1 ? (this.ybase--, o2++, this.ydisp > 0 && this.ydisp--) : this.lines.push(new r.BufferLine(e3, i3)));
                  else
                    for (let e4 = this._rows; e4 > t3; e4--)
                      this.lines.length > t3 + this.ybase && (this.lines.length > this.ybase + this.y + 1 ? this.lines.pop() : (this.ybase++, this.ydisp++));
                  if (n2 < this.lines.maxLength) {
                    const e4 = this.lines.length - n2;
                    e4 > 0 && (this.lines.trimStart(e4), this.ybase = Math.max(this.ybase - e4, 0), this.ydisp = Math.max(this.ydisp - e4, 0), this.savedY = Math.max(this.savedY - e4, 0)), this.lines.maxLength = n2;
                  }
                  this.x = Math.min(this.x, e3 - 1), this.y = Math.min(this.y, t3 - 1), o2 && (this.y += o2), this.savedX = Math.min(this.savedX, e3 - 1), this.scrollTop = 0;
                }
                if (this.scrollBottom = t3 - 1, this._isReflowEnabled && (this._reflow(e3, t3), this._cols > e3))
                  for (let t4 = 0; t4 < this.lines.length; t4++)
                    s3 += +this.lines.get(t4).resize(e3, i3);
                this._cols = e3, this._rows = t3, this._memoryCleanupQueue.clear(), s3 > 0.1 * this.lines.length && (this._memoryCleanupPosition = 0, this._memoryCleanupQueue.enqueue(() => this._batchedMemoryCleanup()));
              }
              _batchedMemoryCleanup() {
                let e3 = true;
                this._memoryCleanupPosition >= this.lines.length && (this._memoryCleanupPosition = 0, e3 = false);
                let t3 = 0;
                for (; this._memoryCleanupPosition < this.lines.length; )
                  if (t3 += this.lines.get(this._memoryCleanupPosition++).cleanupMemory(), t3 > 100)
                    return true;
                return e3;
              }
              get _isReflowEnabled() {
                return this._hasScrollback && !this._optionsService.rawOptions.windowsMode;
              }
              _reflow(e3, t3) {
                this._cols !== e3 && (e3 > this._cols ? this._reflowLarger(e3, t3) : this._reflowSmaller(e3, t3));
              }
              _reflowLarger(e3, t3) {
                const i3 = (0, a.reflowLargerGetLinesToRemove)(this.lines, this._cols, e3, this.ybase + this.y, this.getNullCell(r.DEFAULT_ATTR_DATA));
                if (i3.length > 0) {
                  const s3 = (0, a.reflowLargerCreateNewLayout)(this.lines, i3);
                  (0, a.reflowLargerApplyNewLayout)(this.lines, s3.layout), this._reflowLargerAdjustViewport(e3, t3, s3.countRemoved);
                }
              }
              _reflowLargerAdjustViewport(e3, t3, i3) {
                const s3 = this.getNullCell(r.DEFAULT_ATTR_DATA);
                let n2 = i3;
                for (; n2-- > 0; )
                  0 === this.ybase ? (this.y > 0 && this.y--, this.lines.length < t3 && this.lines.push(new r.BufferLine(e3, s3))) : (this.ydisp === this.ybase && this.ydisp--, this.ybase--);
                this.savedY = Math.max(this.savedY - i3, 0);
              }
              _reflowSmaller(e3, t3) {
                const i3 = this.getNullCell(r.DEFAULT_ATTR_DATA), s3 = [];
                let n2 = 0;
                for (let o2 = this.lines.length - 1; o2 >= 0; o2--) {
                  let h2 = this.lines.get(o2);
                  if (!h2 || !h2.isWrapped && h2.getTrimmedLength() <= e3)
                    continue;
                  const c2 = [h2];
                  for (; h2.isWrapped && o2 > 0; )
                    h2 = this.lines.get(--o2), c2.unshift(h2);
                  const l2 = this.ybase + this.y;
                  if (l2 >= o2 && l2 < o2 + c2.length)
                    continue;
                  const d2 = c2[c2.length - 1].getTrimmedLength(), _2 = (0, a.reflowSmallerGetNewLineLengths)(c2, this._cols, e3), u = _2.length - c2.length;
                  let f;
                  f = 0 === this.ybase && this.y !== this.lines.length - 1 ? Math.max(0, this.y - this.lines.maxLength + u) : Math.max(0, this.lines.length - this.lines.maxLength + u);
                  const v = [];
                  for (let e4 = 0; e4 < u; e4++) {
                    const e5 = this.getBlankLine(r.DEFAULT_ATTR_DATA, true);
                    v.push(e5);
                  }
                  v.length > 0 && (s3.push({ start: o2 + c2.length + n2, newLines: v }), n2 += v.length), c2.push(...v);
                  let g = _2.length - 1, p = _2[g];
                  0 === p && (g--, p = _2[g]);
                  let S = c2.length - u - 1, m = d2;
                  for (; S >= 0; ) {
                    const e4 = Math.min(m, p);
                    if (void 0 === c2[g])
                      break;
                    if (c2[g].copyCellsFrom(c2[S], m - e4, p - e4, e4, true), p -= e4, 0 === p && (g--, p = _2[g]), m -= e4, 0 === m) {
                      S--;
                      const e5 = Math.max(S, 0);
                      m = (0, a.getWrappedLineTrimmedLength)(c2, e5, this._cols);
                    }
                  }
                  for (let t4 = 0; t4 < c2.length; t4++)
                    _2[t4] < e3 && c2[t4].setCell(_2[t4], i3);
                  let C = u - f;
                  for (; C-- > 0; )
                    0 === this.ybase ? this.y < t3 - 1 ? (this.y++, this.lines.pop()) : (this.ybase++, this.ydisp++) : this.ybase < Math.min(this.lines.maxLength, this.lines.length + n2) - t3 && (this.ybase === this.ydisp && this.ydisp++, this.ybase++);
                  this.savedY = Math.min(this.savedY + u, this.ybase + t3 - 1);
                }
                if (s3.length > 0) {
                  const e4 = [], t4 = [];
                  for (let e5 = 0; e5 < this.lines.length; e5++)
                    t4.push(this.lines.get(e5));
                  const i4 = this.lines.length;
                  let r2 = i4 - 1, o2 = 0, a2 = s3[o2];
                  this.lines.length = Math.min(this.lines.maxLength, this.lines.length + n2);
                  let h2 = 0;
                  for (let c3 = Math.min(this.lines.maxLength - 1, i4 + n2 - 1); c3 >= 0; c3--)
                    if (a2 && a2.start > r2 + h2) {
                      for (let e5 = a2.newLines.length - 1; e5 >= 0; e5--)
                        this.lines.set(c3--, a2.newLines[e5]);
                      c3++, e4.push({ index: r2 + 1, amount: a2.newLines.length }), h2 += a2.newLines.length, a2 = s3[++o2];
                    } else
                      this.lines.set(c3, t4[r2--]);
                  let c2 = 0;
                  for (let t5 = e4.length - 1; t5 >= 0; t5--)
                    e4[t5].index += c2, this.lines.onInsertEmitter.fire(e4[t5]), c2 += e4[t5].amount;
                  const l2 = Math.max(0, i4 + n2 - this.lines.maxLength);
                  l2 > 0 && this.lines.onTrimEmitter.fire(l2);
                }
              }
              stringIndexToBufferIndex(e3, t3, i3 = false) {
                for (; t3; ) {
                  const s3 = this.lines.get(e3);
                  if (!s3)
                    return [-1, -1];
                  const r2 = i3 ? s3.getTrimmedLength() : s3.length;
                  for (let i4 = 0; i4 < r2; ++i4)
                    if (s3.get(i4)[o.CHAR_DATA_WIDTH_INDEX] && (t3 -= s3.get(i4)[o.CHAR_DATA_CHAR_INDEX].length || 1), t3 < 0)
                      return [e3, i4];
                  e3++;
                }
                return [e3, 0];
              }
              translateBufferLineToString(e3, t3, i3 = 0, s3) {
                const r2 = this.lines.get(e3);
                return r2 ? r2.translateToString(t3, i3, s3) : "";
              }
              getWrappedRangeForLine(e3) {
                let t3 = e3, i3 = e3;
                for (; t3 > 0 && this.lines.get(t3).isWrapped; )
                  t3--;
                for (; i3 + 1 < this.lines.length && this.lines.get(i3 + 1).isWrapped; )
                  i3++;
                return { first: t3, last: i3 };
              }
              setupTabStops(e3) {
                for (null != e3 ? this.tabs[e3] || (e3 = this.prevStop(e3)) : (this.tabs = {}, e3 = 0); e3 < this._cols; e3 += this._optionsService.rawOptions.tabStopWidth)
                  this.tabs[e3] = true;
              }
              prevStop(e3) {
                for (null == e3 && (e3 = this.x); !this.tabs[--e3] && e3 > 0; )
                  ;
                return e3 >= this._cols ? this._cols - 1 : e3 < 0 ? 0 : e3;
              }
              nextStop(e3) {
                for (null == e3 && (e3 = this.x); !this.tabs[++e3] && e3 < this._cols; )
                  ;
                return e3 >= this._cols ? this._cols - 1 : e3 < 0 ? 0 : e3;
              }
              clearMarkers(e3) {
                this._isClearing = true;
                for (let t3 = 0; t3 < this.markers.length; t3++)
                  this.markers[t3].line === e3 && (this.markers[t3].dispose(), this.markers.splice(t3--, 1));
                this._isClearing = false;
              }
              clearAllMarkers() {
                this._isClearing = true;
                for (let e3 = 0; e3 < this.markers.length; e3++)
                  this.markers[e3].dispose(), this.markers.splice(e3--, 1);
                this._isClearing = false;
              }
              addMarker(e3) {
                const t3 = new h.Marker(e3);
                return this.markers.push(t3), t3.register(this.lines.onTrim((e4) => {
                  t3.line -= e4, t3.line < 0 && t3.dispose();
                })), t3.register(this.lines.onInsert((e4) => {
                  t3.line >= e4.index && (t3.line += e4.amount);
                })), t3.register(this.lines.onDelete((e4) => {
                  t3.line >= e4.index && t3.line < e4.index + e4.amount && t3.dispose(), t3.line > e4.index && (t3.line -= e4.amount);
                })), t3.register(t3.onDispose(() => this._removeMarker(t3))), t3;
              }
              _removeMarker(e3) {
                this._isClearing || this.markers.splice(this.markers.indexOf(e3), 1);
              }
              iterator(e3, t3, i3, s3, r2) {
                return new _(this, e3, t3, i3, s3, r2);
              }
            };
            class _ {
              constructor(e3, t3, i3 = 0, s3 = e3.lines.length, r2 = 0, n2 = 0) {
                this._buffer = e3, this._trimRight = t3, this._startIndex = i3, this._endIndex = s3, this._startOverscan = r2, this._endOverscan = n2, this._startIndex < 0 && (this._startIndex = 0), this._endIndex > this._buffer.lines.length && (this._endIndex = this._buffer.lines.length), this._current = this._startIndex;
              }
              hasNext() {
                return this._current < this._endIndex;
              }
              next() {
                const e3 = this._buffer.getWrappedRangeForLine(this._current);
                e3.first < this._startIndex - this._startOverscan && (e3.first = this._startIndex - this._startOverscan), e3.last > this._endIndex + this._endOverscan && (e3.last = this._endIndex + this._endOverscan), e3.first = Math.max(e3.first, 0), e3.last = Math.min(e3.last, this._buffer.lines.length);
                let t3 = "";
                for (let i3 = e3.first; i3 <= e3.last; ++i3)
                  t3 += this._buffer.translateBufferLineToString(i3, this._trimRight);
                return this._current = e3.last + 1, { range: e3, content: t3 };
              }
            }
            t2.BufferStringIterator = _;
          }, 8437: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferLine = t2.DEFAULT_ATTR_DATA = void 0;
            const s2 = i2(482), r = i2(643), n = i2(511), o = i2(3734);
            t2.DEFAULT_ATTR_DATA = Object.freeze(new o.AttributeData());
            let a = 0;
            class h {
              constructor(e3, t3, i3 = false) {
                this.isWrapped = i3, this._combined = {}, this._extendedAttrs = {}, this._data = new Uint32Array(3 * e3);
                const s3 = t3 || n.CellData.fromCharData([0, r.NULL_CELL_CHAR, r.NULL_CELL_WIDTH, r.NULL_CELL_CODE]);
                for (let t4 = 0; t4 < e3; ++t4)
                  this.setCell(t4, s3);
                this.length = e3;
              }
              get(e3) {
                const t3 = this._data[3 * e3 + 0], i3 = 2097151 & t3;
                return [this._data[3 * e3 + 1], 2097152 & t3 ? this._combined[e3] : i3 ? (0, s2.stringFromCodePoint)(i3) : "", t3 >> 22, 2097152 & t3 ? this._combined[e3].charCodeAt(this._combined[e3].length - 1) : i3];
              }
              set(e3, t3) {
                this._data[3 * e3 + 1] = t3[r.CHAR_DATA_ATTR_INDEX], t3[r.CHAR_DATA_CHAR_INDEX].length > 1 ? (this._combined[e3] = t3[1], this._data[3 * e3 + 0] = 2097152 | e3 | t3[r.CHAR_DATA_WIDTH_INDEX] << 22) : this._data[3 * e3 + 0] = t3[r.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | t3[r.CHAR_DATA_WIDTH_INDEX] << 22;
              }
              getWidth(e3) {
                return this._data[3 * e3 + 0] >> 22;
              }
              hasWidth(e3) {
                return 12582912 & this._data[3 * e3 + 0];
              }
              getFg(e3) {
                return this._data[3 * e3 + 1];
              }
              getBg(e3) {
                return this._data[3 * e3 + 2];
              }
              hasContent(e3) {
                return 4194303 & this._data[3 * e3 + 0];
              }
              getCodePoint(e3) {
                const t3 = this._data[3 * e3 + 0];
                return 2097152 & t3 ? this._combined[e3].charCodeAt(this._combined[e3].length - 1) : 2097151 & t3;
              }
              isCombined(e3) {
                return 2097152 & this._data[3 * e3 + 0];
              }
              getString(e3) {
                const t3 = this._data[3 * e3 + 0];
                return 2097152 & t3 ? this._combined[e3] : 2097151 & t3 ? (0, s2.stringFromCodePoint)(2097151 & t3) : "";
              }
              isProtected(e3) {
                return 536870912 & this._data[3 * e3 + 2];
              }
              loadCell(e3, t3) {
                return a = 3 * e3, t3.content = this._data[a + 0], t3.fg = this._data[a + 1], t3.bg = this._data[a + 2], 2097152 & t3.content && (t3.combinedData = this._combined[e3]), 268435456 & t3.bg && (t3.extended = this._extendedAttrs[e3]), t3;
              }
              setCell(e3, t3) {
                2097152 & t3.content && (this._combined[e3] = t3.combinedData), 268435456 & t3.bg && (this._extendedAttrs[e3] = t3.extended), this._data[3 * e3 + 0] = t3.content, this._data[3 * e3 + 1] = t3.fg, this._data[3 * e3 + 2] = t3.bg;
              }
              setCellFromCodePoint(e3, t3, i3, s3, r2, n2) {
                268435456 & r2 && (this._extendedAttrs[e3] = n2), this._data[3 * e3 + 0] = t3 | i3 << 22, this._data[3 * e3 + 1] = s3, this._data[3 * e3 + 2] = r2;
              }
              addCodepointToCell(e3, t3) {
                let i3 = this._data[3 * e3 + 0];
                2097152 & i3 ? this._combined[e3] += (0, s2.stringFromCodePoint)(t3) : (2097151 & i3 ? (this._combined[e3] = (0, s2.stringFromCodePoint)(2097151 & i3) + (0, s2.stringFromCodePoint)(t3), i3 &= -2097152, i3 |= 2097152) : i3 = t3 | 1 << 22, this._data[3 * e3 + 0] = i3);
              }
              insertCells(e3, t3, i3, s3) {
                if ((e3 %= this.length) && 2 === this.getWidth(e3 - 1) && this.setCellFromCodePoint(e3 - 1, 0, 1, (null == s3 ? void 0 : s3.fg) || 0, (null == s3 ? void 0 : s3.bg) || 0, (null == s3 ? void 0 : s3.extended) || new o.ExtendedAttrs()), t3 < this.length - e3) {
                  const s4 = new n.CellData();
                  for (let i4 = this.length - e3 - t3 - 1; i4 >= 0; --i4)
                    this.setCell(e3 + t3 + i4, this.loadCell(e3 + i4, s4));
                  for (let s5 = 0; s5 < t3; ++s5)
                    this.setCell(e3 + s5, i3);
                } else
                  for (let t4 = e3; t4 < this.length; ++t4)
                    this.setCell(t4, i3);
                2 === this.getWidth(this.length - 1) && this.setCellFromCodePoint(this.length - 1, 0, 1, (null == s3 ? void 0 : s3.fg) || 0, (null == s3 ? void 0 : s3.bg) || 0, (null == s3 ? void 0 : s3.extended) || new o.ExtendedAttrs());
              }
              deleteCells(e3, t3, i3, s3) {
                if (e3 %= this.length, t3 < this.length - e3) {
                  const s4 = new n.CellData();
                  for (let i4 = 0; i4 < this.length - e3 - t3; ++i4)
                    this.setCell(e3 + i4, this.loadCell(e3 + t3 + i4, s4));
                  for (let e4 = this.length - t3; e4 < this.length; ++e4)
                    this.setCell(e4, i3);
                } else
                  for (let t4 = e3; t4 < this.length; ++t4)
                    this.setCell(t4, i3);
                e3 && 2 === this.getWidth(e3 - 1) && this.setCellFromCodePoint(e3 - 1, 0, 1, (null == s3 ? void 0 : s3.fg) || 0, (null == s3 ? void 0 : s3.bg) || 0, (null == s3 ? void 0 : s3.extended) || new o.ExtendedAttrs()), 0 !== this.getWidth(e3) || this.hasContent(e3) || this.setCellFromCodePoint(e3, 0, 1, (null == s3 ? void 0 : s3.fg) || 0, (null == s3 ? void 0 : s3.bg) || 0, (null == s3 ? void 0 : s3.extended) || new o.ExtendedAttrs());
              }
              replaceCells(e3, t3, i3, s3, r2 = false) {
                if (r2)
                  for (e3 && 2 === this.getWidth(e3 - 1) && !this.isProtected(e3 - 1) && this.setCellFromCodePoint(e3 - 1, 0, 1, (null == s3 ? void 0 : s3.fg) || 0, (null == s3 ? void 0 : s3.bg) || 0, (null == s3 ? void 0 : s3.extended) || new o.ExtendedAttrs()), t3 < this.length && 2 === this.getWidth(t3 - 1) && !this.isProtected(t3) && this.setCellFromCodePoint(t3, 0, 1, (null == s3 ? void 0 : s3.fg) || 0, (null == s3 ? void 0 : s3.bg) || 0, (null == s3 ? void 0 : s3.extended) || new o.ExtendedAttrs()); e3 < t3 && e3 < this.length; )
                    this.isProtected(e3) || this.setCell(e3, i3), e3++;
                else
                  for (e3 && 2 === this.getWidth(e3 - 1) && this.setCellFromCodePoint(e3 - 1, 0, 1, (null == s3 ? void 0 : s3.fg) || 0, (null == s3 ? void 0 : s3.bg) || 0, (null == s3 ? void 0 : s3.extended) || new o.ExtendedAttrs()), t3 < this.length && 2 === this.getWidth(t3 - 1) && this.setCellFromCodePoint(t3, 0, 1, (null == s3 ? void 0 : s3.fg) || 0, (null == s3 ? void 0 : s3.bg) || 0, (null == s3 ? void 0 : s3.extended) || new o.ExtendedAttrs()); e3 < t3 && e3 < this.length; )
                    this.setCell(e3++, i3);
              }
              resize(e3, t3) {
                if (e3 === this.length)
                  return 4 * this._data.length * 2 < this._data.buffer.byteLength;
                const i3 = 3 * e3;
                if (e3 > this.length) {
                  if (this._data.buffer.byteLength >= 4 * i3)
                    this._data = new Uint32Array(this._data.buffer, 0, i3);
                  else {
                    const e4 = new Uint32Array(i3);
                    e4.set(this._data), this._data = e4;
                  }
                  for (let i4 = this.length; i4 < e3; ++i4)
                    this.setCell(i4, t3);
                } else {
                  this._data = this._data.subarray(0, i3);
                  const t4 = Object.keys(this._combined);
                  for (let i4 = 0; i4 < t4.length; i4++) {
                    const s4 = parseInt(t4[i4], 10);
                    s4 >= e3 && delete this._combined[s4];
                  }
                  const s3 = Object.keys(this._extendedAttrs);
                  for (let t5 = 0; t5 < s3.length; t5++) {
                    const i4 = parseInt(s3[t5], 10);
                    i4 >= e3 && delete this._extendedAttrs[i4];
                  }
                }
                return this.length = e3, 4 * i3 * 2 < this._data.buffer.byteLength;
              }
              cleanupMemory() {
                if (4 * this._data.length * 2 < this._data.buffer.byteLength) {
                  const e3 = new Uint32Array(this._data.length);
                  return e3.set(this._data), this._data = e3, 1;
                }
                return 0;
              }
              fill(e3, t3 = false) {
                if (t3)
                  for (let t4 = 0; t4 < this.length; ++t4)
                    this.isProtected(t4) || this.setCell(t4, e3);
                else {
                  this._combined = {}, this._extendedAttrs = {};
                  for (let t4 = 0; t4 < this.length; ++t4)
                    this.setCell(t4, e3);
                }
              }
              copyFrom(e3) {
                this.length !== e3.length ? this._data = new Uint32Array(e3._data) : this._data.set(e3._data), this.length = e3.length, this._combined = {};
                for (const t3 in e3._combined)
                  this._combined[t3] = e3._combined[t3];
                this._extendedAttrs = {};
                for (const t3 in e3._extendedAttrs)
                  this._extendedAttrs[t3] = e3._extendedAttrs[t3];
                this.isWrapped = e3.isWrapped;
              }
              clone() {
                const e3 = new h(0);
                e3._data = new Uint32Array(this._data), e3.length = this.length;
                for (const t3 in this._combined)
                  e3._combined[t3] = this._combined[t3];
                for (const t3 in this._extendedAttrs)
                  e3._extendedAttrs[t3] = this._extendedAttrs[t3];
                return e3.isWrapped = this.isWrapped, e3;
              }
              getTrimmedLength() {
                for (let e3 = this.length - 1; e3 >= 0; --e3)
                  if (4194303 & this._data[3 * e3 + 0])
                    return e3 + (this._data[3 * e3 + 0] >> 22);
                return 0;
              }
              copyCellsFrom(e3, t3, i3, s3, r2) {
                const n2 = e3._data;
                if (r2)
                  for (let r3 = s3 - 1; r3 >= 0; r3--) {
                    for (let e4 = 0; e4 < 3; e4++)
                      this._data[3 * (i3 + r3) + e4] = n2[3 * (t3 + r3) + e4];
                    268435456 & n2[3 * (t3 + r3) + 2] && (this._extendedAttrs[i3 + r3] = e3._extendedAttrs[t3 + r3]);
                  }
                else
                  for (let r3 = 0; r3 < s3; r3++) {
                    for (let e4 = 0; e4 < 3; e4++)
                      this._data[3 * (i3 + r3) + e4] = n2[3 * (t3 + r3) + e4];
                    268435456 & n2[3 * (t3 + r3) + 2] && (this._extendedAttrs[i3 + r3] = e3._extendedAttrs[t3 + r3]);
                  }
                const o2 = Object.keys(e3._combined);
                for (let s4 = 0; s4 < o2.length; s4++) {
                  const r3 = parseInt(o2[s4], 10);
                  r3 >= t3 && (this._combined[r3 - t3 + i3] = e3._combined[r3]);
                }
              }
              translateToString(e3 = false, t3 = 0, i3 = this.length) {
                e3 && (i3 = Math.min(i3, this.getTrimmedLength()));
                let n2 = "";
                for (; t3 < i3; ) {
                  const e4 = this._data[3 * t3 + 0], i4 = 2097151 & e4;
                  n2 += 2097152 & e4 ? this._combined[t3] : i4 ? (0, s2.stringFromCodePoint)(i4) : r.WHITESPACE_CELL_CHAR, t3 += e4 >> 22 || 1;
                }
                return n2;
              }
            }
            t2.BufferLine = h;
          }, 4841: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.getRangeLength = void 0, t2.getRangeLength = function(e3, t3) {
              if (e3.start.y > e3.end.y)
                throw new Error(`Buffer range end (${e3.end.x}, ${e3.end.y}) cannot be before start (${e3.start.x}, ${e3.start.y})`);
              return t3 * (e3.end.y - e3.start.y) + (e3.end.x - e3.start.x + 1);
            };
          }, 4634: (e2, t2) => {
            function i2(e3, t3, i3) {
              if (t3 === e3.length - 1)
                return e3[t3].getTrimmedLength();
              const s2 = !e3[t3].hasContent(i3 - 1) && 1 === e3[t3].getWidth(i3 - 1), r = 2 === e3[t3 + 1].getWidth(0);
              return s2 && r ? i3 - 1 : i3;
            }
            Object.defineProperty(t2, "__esModule", { value: true }), t2.getWrappedLineTrimmedLength = t2.reflowSmallerGetNewLineLengths = t2.reflowLargerApplyNewLayout = t2.reflowLargerCreateNewLayout = t2.reflowLargerGetLinesToRemove = void 0, t2.reflowLargerGetLinesToRemove = function(e3, t3, s2, r, n) {
              const o = [];
              for (let a = 0; a < e3.length - 1; a++) {
                let h = a, c = e3.get(++h);
                if (!c.isWrapped)
                  continue;
                const l = [e3.get(a)];
                for (; h < e3.length && c.isWrapped; )
                  l.push(c), c = e3.get(++h);
                if (r >= a && r < h) {
                  a += l.length - 1;
                  continue;
                }
                let d = 0, _ = i2(l, d, t3), u = 1, f = 0;
                for (; u < l.length; ) {
                  const e4 = i2(l, u, t3), r2 = e4 - f, o2 = s2 - _, a2 = Math.min(r2, o2);
                  l[d].copyCellsFrom(l[u], f, _, a2, false), _ += a2, _ === s2 && (d++, _ = 0), f += a2, f === e4 && (u++, f = 0), 0 === _ && 0 !== d && 2 === l[d - 1].getWidth(s2 - 1) && (l[d].copyCellsFrom(l[d - 1], s2 - 1, _++, 1, false), l[d - 1].setCell(s2 - 1, n));
                }
                l[d].replaceCells(_, s2, n);
                let v = 0;
                for (let e4 = l.length - 1; e4 > 0 && (e4 > d || 0 === l[e4].getTrimmedLength()); e4--)
                  v++;
                v > 0 && (o.push(a + l.length - v), o.push(v)), a += l.length - 1;
              }
              return o;
            }, t2.reflowLargerCreateNewLayout = function(e3, t3) {
              const i3 = [];
              let s2 = 0, r = t3[s2], n = 0;
              for (let o = 0; o < e3.length; o++)
                if (r === o) {
                  const i4 = t3[++s2];
                  e3.onDeleteEmitter.fire({ index: o - n, amount: i4 }), o += i4 - 1, n += i4, r = t3[++s2];
                } else
                  i3.push(o);
              return { layout: i3, countRemoved: n };
            }, t2.reflowLargerApplyNewLayout = function(e3, t3) {
              const i3 = [];
              for (let s2 = 0; s2 < t3.length; s2++)
                i3.push(e3.get(t3[s2]));
              for (let t4 = 0; t4 < i3.length; t4++)
                e3.set(t4, i3[t4]);
              e3.length = t3.length;
            }, t2.reflowSmallerGetNewLineLengths = function(e3, t3, s2) {
              const r = [], n = e3.map((s3, r2) => i2(e3, r2, t3)).reduce((e4, t4) => e4 + t4);
              let o = 0, a = 0, h = 0;
              for (; h < n; ) {
                if (n - h < s2) {
                  r.push(n - h);
                  break;
                }
                o += s2;
                const c = i2(e3, a, t3);
                o > c && (o -= c, a++);
                const l = 2 === e3[a].getWidth(o - 1);
                l && o--;
                const d = l ? s2 - 1 : s2;
                r.push(d), h += d;
              }
              return r;
            }, t2.getWrappedLineTrimmedLength = i2;
          }, 5295: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferSet = void 0;
            const s2 = i2(9092), r = i2(8460), n = i2(844);
            class o extends n.Disposable {
              constructor(e3, t3) {
                super(), this._optionsService = e3, this._bufferService = t3, this._onBufferActivate = this.register(new r.EventEmitter()), this.onBufferActivate = this._onBufferActivate.event, this.reset(), this.register(this._optionsService.onSpecificOptionChange("scrollback", () => this.resize(this._bufferService.cols, this._bufferService.rows))), this.register(this._optionsService.onSpecificOptionChange("tabStopWidth", () => this.setupTabStops()));
              }
              reset() {
                this._normal = new s2.Buffer(true, this._optionsService, this._bufferService), this._normal.fillViewportRows(), this._alt = new s2.Buffer(false, this._optionsService, this._bufferService), this._activeBuffer = this._normal, this._onBufferActivate.fire({ activeBuffer: this._normal, inactiveBuffer: this._alt }), this.setupTabStops();
              }
              get alt() {
                return this._alt;
              }
              get active() {
                return this._activeBuffer;
              }
              get normal() {
                return this._normal;
              }
              activateNormalBuffer() {
                this._activeBuffer !== this._normal && (this._normal.x = this._alt.x, this._normal.y = this._alt.y, this._alt.clearAllMarkers(), this._alt.clear(), this._activeBuffer = this._normal, this._onBufferActivate.fire({ activeBuffer: this._normal, inactiveBuffer: this._alt }));
              }
              activateAltBuffer(e3) {
                this._activeBuffer !== this._alt && (this._alt.fillViewportRows(e3), this._alt.x = this._normal.x, this._alt.y = this._normal.y, this._activeBuffer = this._alt, this._onBufferActivate.fire({ activeBuffer: this._alt, inactiveBuffer: this._normal }));
              }
              resize(e3, t3) {
                this._normal.resize(e3, t3), this._alt.resize(e3, t3), this.setupTabStops(e3);
              }
              setupTabStops(e3) {
                this._normal.setupTabStops(e3), this._alt.setupTabStops(e3);
              }
            }
            t2.BufferSet = o;
          }, 511: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.CellData = void 0;
            const s2 = i2(482), r = i2(643), n = i2(3734);
            class o extends n.AttributeData {
              constructor() {
                super(...arguments), this.content = 0, this.fg = 0, this.bg = 0, this.extended = new n.ExtendedAttrs(), this.combinedData = "";
              }
              static fromCharData(e3) {
                const t3 = new o();
                return t3.setFromCharData(e3), t3;
              }
              isCombined() {
                return 2097152 & this.content;
              }
              getWidth() {
                return this.content >> 22;
              }
              getChars() {
                return 2097152 & this.content ? this.combinedData : 2097151 & this.content ? (0, s2.stringFromCodePoint)(2097151 & this.content) : "";
              }
              getCode() {
                return this.isCombined() ? this.combinedData.charCodeAt(this.combinedData.length - 1) : 2097151 & this.content;
              }
              setFromCharData(e3) {
                this.fg = e3[r.CHAR_DATA_ATTR_INDEX], this.bg = 0;
                let t3 = false;
                if (e3[r.CHAR_DATA_CHAR_INDEX].length > 2)
                  t3 = true;
                else if (2 === e3[r.CHAR_DATA_CHAR_INDEX].length) {
                  const i3 = e3[r.CHAR_DATA_CHAR_INDEX].charCodeAt(0);
                  if (55296 <= i3 && i3 <= 56319) {
                    const s3 = e3[r.CHAR_DATA_CHAR_INDEX].charCodeAt(1);
                    56320 <= s3 && s3 <= 57343 ? this.content = 1024 * (i3 - 55296) + s3 - 56320 + 65536 | e3[r.CHAR_DATA_WIDTH_INDEX] << 22 : t3 = true;
                  } else
                    t3 = true;
                } else
                  this.content = e3[r.CHAR_DATA_CHAR_INDEX].charCodeAt(0) | e3[r.CHAR_DATA_WIDTH_INDEX] << 22;
                t3 && (this.combinedData = e3[r.CHAR_DATA_CHAR_INDEX], this.content = 2097152 | e3[r.CHAR_DATA_WIDTH_INDEX] << 22);
              }
              getAsCharData() {
                return [this.fg, this.getChars(), this.getWidth(), this.getCode()];
              }
            }
            t2.CellData = o;
          }, 643: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.WHITESPACE_CELL_CODE = t2.WHITESPACE_CELL_WIDTH = t2.WHITESPACE_CELL_CHAR = t2.NULL_CELL_CODE = t2.NULL_CELL_WIDTH = t2.NULL_CELL_CHAR = t2.CHAR_DATA_CODE_INDEX = t2.CHAR_DATA_WIDTH_INDEX = t2.CHAR_DATA_CHAR_INDEX = t2.CHAR_DATA_ATTR_INDEX = t2.DEFAULT_EXT = t2.DEFAULT_ATTR = t2.DEFAULT_COLOR = void 0, t2.DEFAULT_COLOR = 0, t2.DEFAULT_ATTR = 256 | t2.DEFAULT_COLOR << 9, t2.DEFAULT_EXT = 0, t2.CHAR_DATA_ATTR_INDEX = 0, t2.CHAR_DATA_CHAR_INDEX = 1, t2.CHAR_DATA_WIDTH_INDEX = 2, t2.CHAR_DATA_CODE_INDEX = 3, t2.NULL_CELL_CHAR = "", t2.NULL_CELL_WIDTH = 1, t2.NULL_CELL_CODE = 0, t2.WHITESPACE_CELL_CHAR = " ", t2.WHITESPACE_CELL_WIDTH = 1, t2.WHITESPACE_CELL_CODE = 32;
          }, 4863: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.Marker = void 0;
            const s2 = i2(8460), r = i2(844);
            class n {
              constructor(e3) {
                this.line = e3, this.isDisposed = false, this._disposables = [], this._id = n._nextId++, this._onDispose = this.register(new s2.EventEmitter()), this.onDispose = this._onDispose.event;
              }
              get id() {
                return this._id;
              }
              dispose() {
                this.isDisposed || (this.isDisposed = true, this.line = -1, this._onDispose.fire(), (0, r.disposeArray)(this._disposables), this._disposables.length = 0);
              }
              register(e3) {
                return this._disposables.push(e3), e3;
              }
            }
            t2.Marker = n, n._nextId = 1;
          }, 7116: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.DEFAULT_CHARSET = t2.CHARSETS = void 0, t2.CHARSETS = {}, t2.DEFAULT_CHARSET = t2.CHARSETS.B, t2.CHARSETS[0] = { "`": "\u25C6", a: "\u2592", b: "\u2409", c: "\u240C", d: "\u240D", e: "\u240A", f: "\xB0", g: "\xB1", h: "\u2424", i: "\u240B", j: "\u2518", k: "\u2510", l: "\u250C", m: "\u2514", n: "\u253C", o: "\u23BA", p: "\u23BB", q: "\u2500", r: "\u23BC", s: "\u23BD", t: "\u251C", u: "\u2524", v: "\u2534", w: "\u252C", x: "\u2502", y: "\u2264", z: "\u2265", "{": "\u03C0", "|": "\u2260", "}": "\xA3", "~": "\xB7" }, t2.CHARSETS.A = { "#": "\xA3" }, t2.CHARSETS.B = void 0, t2.CHARSETS[4] = { "#": "\xA3", "@": "\xBE", "[": "ij", "\\": "\xBD", "]": "|", "{": "\xA8", "|": "f", "}": "\xBC", "~": "\xB4" }, t2.CHARSETS.C = t2.CHARSETS[5] = { "[": "\xC4", "\\": "\xD6", "]": "\xC5", "^": "\xDC", "`": "\xE9", "{": "\xE4", "|": "\xF6", "}": "\xE5", "~": "\xFC" }, t2.CHARSETS.R = { "#": "\xA3", "@": "\xE0", "[": "\xB0", "\\": "\xE7", "]": "\xA7", "{": "\xE9", "|": "\xF9", "}": "\xE8", "~": "\xA8" }, t2.CHARSETS.Q = { "@": "\xE0", "[": "\xE2", "\\": "\xE7", "]": "\xEA", "^": "\xEE", "`": "\xF4", "{": "\xE9", "|": "\xF9", "}": "\xE8", "~": "\xFB" }, t2.CHARSETS.K = { "@": "\xA7", "[": "\xC4", "\\": "\xD6", "]": "\xDC", "{": "\xE4", "|": "\xF6", "}": "\xFC", "~": "\xDF" }, t2.CHARSETS.Y = { "#": "\xA3", "@": "\xA7", "[": "\xB0", "\\": "\xE7", "]": "\xE9", "`": "\xF9", "{": "\xE0", "|": "\xF2", "}": "\xE8", "~": "\xEC" }, t2.CHARSETS.E = t2.CHARSETS[6] = { "@": "\xC4", "[": "\xC6", "\\": "\xD8", "]": "\xC5", "^": "\xDC", "`": "\xE4", "{": "\xE6", "|": "\xF8", "}": "\xE5", "~": "\xFC" }, t2.CHARSETS.Z = { "#": "\xA3", "@": "\xA7", "[": "\xA1", "\\": "\xD1", "]": "\xBF", "{": "\xB0", "|": "\xF1", "}": "\xE7" }, t2.CHARSETS.H = t2.CHARSETS[7] = { "@": "\xC9", "[": "\xC4", "\\": "\xD6", "]": "\xC5", "^": "\xDC", "`": "\xE9", "{": "\xE4", "|": "\xF6", "}": "\xE5", "~": "\xFC" }, t2.CHARSETS["="] = { "#": "\xF9", "@": "\xE0", "[": "\xE9", "\\": "\xE7", "]": "\xEA", "^": "\xEE", _: "\xE8", "`": "\xF4", "{": "\xE4", "|": "\xF6", "}": "\xFC", "~": "\xFB" };
          }, 2584: (e2, t2) => {
            var i2, s2;
            Object.defineProperty(t2, "__esModule", { value: true }), t2.C1_ESCAPED = t2.C1 = t2.C0 = void 0, function(e3) {
              e3.NUL = "\0", e3.SOH = "", e3.STX = "", e3.ETX = "", e3.EOT = "", e3.ENQ = "", e3.ACK = "", e3.BEL = "\x07", e3.BS = "\b", e3.HT = "	", e3.LF = "\n", e3.VT = "\v", e3.FF = "\f", e3.CR = "\r", e3.SO = "", e3.SI = "", e3.DLE = "", e3.DC1 = "", e3.DC2 = "", e3.DC3 = "", e3.DC4 = "", e3.NAK = "", e3.SYN = "", e3.ETB = "", e3.CAN = "", e3.EM = "", e3.SUB = "", e3.ESC = "\x1B", e3.FS = "", e3.GS = "", e3.RS = "", e3.US = "", e3.SP = " ", e3.DEL = "\x7F";
            }(i2 = t2.C0 || (t2.C0 = {})), (s2 = t2.C1 || (t2.C1 = {})).PAD = "\x80", s2.HOP = "\x81", s2.BPH = "\x82", s2.NBH = "\x83", s2.IND = "\x84", s2.NEL = "\x85", s2.SSA = "\x86", s2.ESA = "\x87", s2.HTS = "\x88", s2.HTJ = "\x89", s2.VTS = "\x8A", s2.PLD = "\x8B", s2.PLU = "\x8C", s2.RI = "\x8D", s2.SS2 = "\x8E", s2.SS3 = "\x8F", s2.DCS = "\x90", s2.PU1 = "\x91", s2.PU2 = "\x92", s2.STS = "\x93", s2.CCH = "\x94", s2.MW = "\x95", s2.SPA = "\x96", s2.EPA = "\x97", s2.SOS = "\x98", s2.SGCI = "\x99", s2.SCI = "\x9A", s2.CSI = "\x9B", s2.ST = "\x9C", s2.OSC = "\x9D", s2.PM = "\x9E", s2.APC = "\x9F", (t2.C1_ESCAPED || (t2.C1_ESCAPED = {})).ST = `${i2.ESC}\\`;
          }, 7399: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.evaluateKeyboardEvent = void 0;
            const s2 = i2(2584), r = { 48: ["0", ")"], 49: ["1", "!"], 50: ["2", "@"], 51: ["3", "#"], 52: ["4", "$"], 53: ["5", "%"], 54: ["6", "^"], 55: ["7", "&"], 56: ["8", "*"], 57: ["9", "("], 186: [";", ":"], 187: ["=", "+"], 188: [",", "<"], 189: ["-", "_"], 190: [".", ">"], 191: ["/", "?"], 192: ["`", "~"], 219: ["[", "{"], 220: ["\\", "|"], 221: ["]", "}"], 222: ["'", '"'] };
            t2.evaluateKeyboardEvent = function(e3, t3, i3, n) {
              const o = { type: 0, cancel: false, key: void 0 }, a = (e3.shiftKey ? 1 : 0) | (e3.altKey ? 2 : 0) | (e3.ctrlKey ? 4 : 0) | (e3.metaKey ? 8 : 0);
              switch (e3.keyCode) {
                case 0:
                  "UIKeyInputUpArrow" === e3.key ? o.key = t3 ? s2.C0.ESC + "OA" : s2.C0.ESC + "[A" : "UIKeyInputLeftArrow" === e3.key ? o.key = t3 ? s2.C0.ESC + "OD" : s2.C0.ESC + "[D" : "UIKeyInputRightArrow" === e3.key ? o.key = t3 ? s2.C0.ESC + "OC" : s2.C0.ESC + "[C" : "UIKeyInputDownArrow" === e3.key && (o.key = t3 ? s2.C0.ESC + "OB" : s2.C0.ESC + "[B");
                  break;
                case 8:
                  if (e3.altKey) {
                    o.key = s2.C0.ESC + s2.C0.DEL;
                    break;
                  }
                  o.key = s2.C0.DEL;
                  break;
                case 9:
                  if (e3.shiftKey) {
                    o.key = s2.C0.ESC + "[Z";
                    break;
                  }
                  o.key = s2.C0.HT, o.cancel = true;
                  break;
                case 13:
                  o.key = e3.altKey ? s2.C0.ESC + s2.C0.CR : s2.C0.CR, o.cancel = true;
                  break;
                case 27:
                  o.key = s2.C0.ESC, e3.altKey && (o.key = s2.C0.ESC + s2.C0.ESC), o.cancel = true;
                  break;
                case 37:
                  if (e3.metaKey)
                    break;
                  a ? (o.key = s2.C0.ESC + "[1;" + (a + 1) + "D", o.key === s2.C0.ESC + "[1;3D" && (o.key = s2.C0.ESC + (i3 ? "b" : "[1;5D"))) : o.key = t3 ? s2.C0.ESC + "OD" : s2.C0.ESC + "[D";
                  break;
                case 39:
                  if (e3.metaKey)
                    break;
                  a ? (o.key = s2.C0.ESC + "[1;" + (a + 1) + "C", o.key === s2.C0.ESC + "[1;3C" && (o.key = s2.C0.ESC + (i3 ? "f" : "[1;5C"))) : o.key = t3 ? s2.C0.ESC + "OC" : s2.C0.ESC + "[C";
                  break;
                case 38:
                  if (e3.metaKey)
                    break;
                  a ? (o.key = s2.C0.ESC + "[1;" + (a + 1) + "A", i3 || o.key !== s2.C0.ESC + "[1;3A" || (o.key = s2.C0.ESC + "[1;5A")) : o.key = t3 ? s2.C0.ESC + "OA" : s2.C0.ESC + "[A";
                  break;
                case 40:
                  if (e3.metaKey)
                    break;
                  a ? (o.key = s2.C0.ESC + "[1;" + (a + 1) + "B", i3 || o.key !== s2.C0.ESC + "[1;3B" || (o.key = s2.C0.ESC + "[1;5B")) : o.key = t3 ? s2.C0.ESC + "OB" : s2.C0.ESC + "[B";
                  break;
                case 45:
                  e3.shiftKey || e3.ctrlKey || (o.key = s2.C0.ESC + "[2~");
                  break;
                case 46:
                  o.key = a ? s2.C0.ESC + "[3;" + (a + 1) + "~" : s2.C0.ESC + "[3~";
                  break;
                case 36:
                  o.key = a ? s2.C0.ESC + "[1;" + (a + 1) + "H" : t3 ? s2.C0.ESC + "OH" : s2.C0.ESC + "[H";
                  break;
                case 35:
                  o.key = a ? s2.C0.ESC + "[1;" + (a + 1) + "F" : t3 ? s2.C0.ESC + "OF" : s2.C0.ESC + "[F";
                  break;
                case 33:
                  e3.shiftKey ? o.type = 2 : e3.ctrlKey ? o.key = s2.C0.ESC + "[5;" + (a + 1) + "~" : o.key = s2.C0.ESC + "[5~";
                  break;
                case 34:
                  e3.shiftKey ? o.type = 3 : e3.ctrlKey ? o.key = s2.C0.ESC + "[6;" + (a + 1) + "~" : o.key = s2.C0.ESC + "[6~";
                  break;
                case 112:
                  o.key = a ? s2.C0.ESC + "[1;" + (a + 1) + "P" : s2.C0.ESC + "OP";
                  break;
                case 113:
                  o.key = a ? s2.C0.ESC + "[1;" + (a + 1) + "Q" : s2.C0.ESC + "OQ";
                  break;
                case 114:
                  o.key = a ? s2.C0.ESC + "[1;" + (a + 1) + "R" : s2.C0.ESC + "OR";
                  break;
                case 115:
                  o.key = a ? s2.C0.ESC + "[1;" + (a + 1) + "S" : s2.C0.ESC + "OS";
                  break;
                case 116:
                  o.key = a ? s2.C0.ESC + "[15;" + (a + 1) + "~" : s2.C0.ESC + "[15~";
                  break;
                case 117:
                  o.key = a ? s2.C0.ESC + "[17;" + (a + 1) + "~" : s2.C0.ESC + "[17~";
                  break;
                case 118:
                  o.key = a ? s2.C0.ESC + "[18;" + (a + 1) + "~" : s2.C0.ESC + "[18~";
                  break;
                case 119:
                  o.key = a ? s2.C0.ESC + "[19;" + (a + 1) + "~" : s2.C0.ESC + "[19~";
                  break;
                case 120:
                  o.key = a ? s2.C0.ESC + "[20;" + (a + 1) + "~" : s2.C0.ESC + "[20~";
                  break;
                case 121:
                  o.key = a ? s2.C0.ESC + "[21;" + (a + 1) + "~" : s2.C0.ESC + "[21~";
                  break;
                case 122:
                  o.key = a ? s2.C0.ESC + "[23;" + (a + 1) + "~" : s2.C0.ESC + "[23~";
                  break;
                case 123:
                  o.key = a ? s2.C0.ESC + "[24;" + (a + 1) + "~" : s2.C0.ESC + "[24~";
                  break;
                default:
                  if (!e3.ctrlKey || e3.shiftKey || e3.altKey || e3.metaKey)
                    if (i3 && !n || !e3.altKey || e3.metaKey)
                      !i3 || e3.altKey || e3.ctrlKey || e3.shiftKey || !e3.metaKey ? e3.key && !e3.ctrlKey && !e3.altKey && !e3.metaKey && e3.keyCode >= 48 && 1 === e3.key.length ? o.key = e3.key : e3.key && e3.ctrlKey && ("_" === e3.key && (o.key = s2.C0.US), "@" === e3.key && (o.key = s2.C0.NUL)) : 65 === e3.keyCode && (o.type = 1);
                    else {
                      const t4 = r[e3.keyCode], i4 = null == t4 ? void 0 : t4[e3.shiftKey ? 1 : 0];
                      if (i4)
                        o.key = s2.C0.ESC + i4;
                      else if (e3.keyCode >= 65 && e3.keyCode <= 90) {
                        const t5 = e3.ctrlKey ? e3.keyCode - 64 : e3.keyCode + 32;
                        let i5 = String.fromCharCode(t5);
                        e3.shiftKey && (i5 = i5.toUpperCase()), o.key = s2.C0.ESC + i5;
                      } else if (32 === e3.keyCode)
                        o.key = s2.C0.ESC + (e3.ctrlKey ? s2.C0.NUL : " ");
                      else if ("Dead" === e3.key && e3.code.startsWith("Key")) {
                        let t5 = e3.code.slice(3, 4);
                        e3.shiftKey || (t5 = t5.toLowerCase()), o.key = s2.C0.ESC + t5, o.cancel = true;
                      }
                    }
                  else
                    e3.keyCode >= 65 && e3.keyCode <= 90 ? o.key = String.fromCharCode(e3.keyCode - 64) : 32 === e3.keyCode ? o.key = s2.C0.NUL : e3.keyCode >= 51 && e3.keyCode <= 55 ? o.key = String.fromCharCode(e3.keyCode - 51 + 27) : 56 === e3.keyCode ? o.key = s2.C0.DEL : 219 === e3.keyCode ? o.key = s2.C0.ESC : 220 === e3.keyCode ? o.key = s2.C0.FS : 221 === e3.keyCode && (o.key = s2.C0.GS);
              }
              return o;
            };
          }, 482: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.Utf8ToUtf32 = t2.StringToUtf32 = t2.utf32ToString = t2.stringFromCodePoint = void 0, t2.stringFromCodePoint = function(e3) {
              return e3 > 65535 ? (e3 -= 65536, String.fromCharCode(55296 + (e3 >> 10)) + String.fromCharCode(e3 % 1024 + 56320)) : String.fromCharCode(e3);
            }, t2.utf32ToString = function(e3, t3 = 0, i2 = e3.length) {
              let s2 = "";
              for (let r = t3; r < i2; ++r) {
                let t4 = e3[r];
                t4 > 65535 ? (t4 -= 65536, s2 += String.fromCharCode(55296 + (t4 >> 10)) + String.fromCharCode(t4 % 1024 + 56320)) : s2 += String.fromCharCode(t4);
              }
              return s2;
            }, t2.StringToUtf32 = class {
              constructor() {
                this._interim = 0;
              }
              clear() {
                this._interim = 0;
              }
              decode(e3, t3) {
                const i2 = e3.length;
                if (!i2)
                  return 0;
                let s2 = 0, r = 0;
                if (this._interim) {
                  const i3 = e3.charCodeAt(r++);
                  56320 <= i3 && i3 <= 57343 ? t3[s2++] = 1024 * (this._interim - 55296) + i3 - 56320 + 65536 : (t3[s2++] = this._interim, t3[s2++] = i3), this._interim = 0;
                }
                for (let n = r; n < i2; ++n) {
                  const r2 = e3.charCodeAt(n);
                  if (55296 <= r2 && r2 <= 56319) {
                    if (++n >= i2)
                      return this._interim = r2, s2;
                    const o = e3.charCodeAt(n);
                    56320 <= o && o <= 57343 ? t3[s2++] = 1024 * (r2 - 55296) + o - 56320 + 65536 : (t3[s2++] = r2, t3[s2++] = o);
                  } else
                    65279 !== r2 && (t3[s2++] = r2);
                }
                return s2;
              }
            }, t2.Utf8ToUtf32 = class {
              constructor() {
                this.interim = new Uint8Array(3);
              }
              clear() {
                this.interim.fill(0);
              }
              decode(e3, t3) {
                const i2 = e3.length;
                if (!i2)
                  return 0;
                let s2, r, n, o, a = 0, h = 0, c = 0;
                if (this.interim[0]) {
                  let s3 = false, r2 = this.interim[0];
                  r2 &= 192 == (224 & r2) ? 31 : 224 == (240 & r2) ? 15 : 7;
                  let n2, o2 = 0;
                  for (; (n2 = 63 & this.interim[++o2]) && o2 < 4; )
                    r2 <<= 6, r2 |= n2;
                  const h2 = 192 == (224 & this.interim[0]) ? 2 : 224 == (240 & this.interim[0]) ? 3 : 4, l2 = h2 - o2;
                  for (; c < l2; ) {
                    if (c >= i2)
                      return 0;
                    if (n2 = e3[c++], 128 != (192 & n2)) {
                      c--, s3 = true;
                      break;
                    }
                    this.interim[o2++] = n2, r2 <<= 6, r2 |= 63 & n2;
                  }
                  s3 || (2 === h2 ? r2 < 128 ? c-- : t3[a++] = r2 : 3 === h2 ? r2 < 2048 || r2 >= 55296 && r2 <= 57343 || 65279 === r2 || (t3[a++] = r2) : r2 < 65536 || r2 > 1114111 || (t3[a++] = r2)), this.interim.fill(0);
                }
                const l = i2 - 4;
                let d = c;
                for (; d < i2; ) {
                  for (; !(!(d < l) || 128 & (s2 = e3[d]) || 128 & (r = e3[d + 1]) || 128 & (n = e3[d + 2]) || 128 & (o = e3[d + 3])); )
                    t3[a++] = s2, t3[a++] = r, t3[a++] = n, t3[a++] = o, d += 4;
                  if (s2 = e3[d++], s2 < 128)
                    t3[a++] = s2;
                  else if (192 == (224 & s2)) {
                    if (d >= i2)
                      return this.interim[0] = s2, a;
                    if (r = e3[d++], 128 != (192 & r)) {
                      d--;
                      continue;
                    }
                    if (h = (31 & s2) << 6 | 63 & r, h < 128) {
                      d--;
                      continue;
                    }
                    t3[a++] = h;
                  } else if (224 == (240 & s2)) {
                    if (d >= i2)
                      return this.interim[0] = s2, a;
                    if (r = e3[d++], 128 != (192 & r)) {
                      d--;
                      continue;
                    }
                    if (d >= i2)
                      return this.interim[0] = s2, this.interim[1] = r, a;
                    if (n = e3[d++], 128 != (192 & n)) {
                      d--;
                      continue;
                    }
                    if (h = (15 & s2) << 12 | (63 & r) << 6 | 63 & n, h < 2048 || h >= 55296 && h <= 57343 || 65279 === h)
                      continue;
                    t3[a++] = h;
                  } else if (240 == (248 & s2)) {
                    if (d >= i2)
                      return this.interim[0] = s2, a;
                    if (r = e3[d++], 128 != (192 & r)) {
                      d--;
                      continue;
                    }
                    if (d >= i2)
                      return this.interim[0] = s2, this.interim[1] = r, a;
                    if (n = e3[d++], 128 != (192 & n)) {
                      d--;
                      continue;
                    }
                    if (d >= i2)
                      return this.interim[0] = s2, this.interim[1] = r, this.interim[2] = n, a;
                    if (o = e3[d++], 128 != (192 & o)) {
                      d--;
                      continue;
                    }
                    if (h = (7 & s2) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & o, h < 65536 || h > 1114111)
                      continue;
                    t3[a++] = h;
                  }
                }
                return a;
              }
            };
          }, 225: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.UnicodeV6 = void 0;
            const i2 = [[768, 879], [1155, 1158], [1160, 1161], [1425, 1469], [1471, 1471], [1473, 1474], [1476, 1477], [1479, 1479], [1536, 1539], [1552, 1557], [1611, 1630], [1648, 1648], [1750, 1764], [1767, 1768], [1770, 1773], [1807, 1807], [1809, 1809], [1840, 1866], [1958, 1968], [2027, 2035], [2305, 2306], [2364, 2364], [2369, 2376], [2381, 2381], [2385, 2388], [2402, 2403], [2433, 2433], [2492, 2492], [2497, 2500], [2509, 2509], [2530, 2531], [2561, 2562], [2620, 2620], [2625, 2626], [2631, 2632], [2635, 2637], [2672, 2673], [2689, 2690], [2748, 2748], [2753, 2757], [2759, 2760], [2765, 2765], [2786, 2787], [2817, 2817], [2876, 2876], [2879, 2879], [2881, 2883], [2893, 2893], [2902, 2902], [2946, 2946], [3008, 3008], [3021, 3021], [3134, 3136], [3142, 3144], [3146, 3149], [3157, 3158], [3260, 3260], [3263, 3263], [3270, 3270], [3276, 3277], [3298, 3299], [3393, 3395], [3405, 3405], [3530, 3530], [3538, 3540], [3542, 3542], [3633, 3633], [3636, 3642], [3655, 3662], [3761, 3761], [3764, 3769], [3771, 3772], [3784, 3789], [3864, 3865], [3893, 3893], [3895, 3895], [3897, 3897], [3953, 3966], [3968, 3972], [3974, 3975], [3984, 3991], [3993, 4028], [4038, 4038], [4141, 4144], [4146, 4146], [4150, 4151], [4153, 4153], [4184, 4185], [4448, 4607], [4959, 4959], [5906, 5908], [5938, 5940], [5970, 5971], [6002, 6003], [6068, 6069], [6071, 6077], [6086, 6086], [6089, 6099], [6109, 6109], [6155, 6157], [6313, 6313], [6432, 6434], [6439, 6440], [6450, 6450], [6457, 6459], [6679, 6680], [6912, 6915], [6964, 6964], [6966, 6970], [6972, 6972], [6978, 6978], [7019, 7027], [7616, 7626], [7678, 7679], [8203, 8207], [8234, 8238], [8288, 8291], [8298, 8303], [8400, 8431], [12330, 12335], [12441, 12442], [43014, 43014], [43019, 43019], [43045, 43046], [64286, 64286], [65024, 65039], [65056, 65059], [65279, 65279], [65529, 65531]], s2 = [[68097, 68099], [68101, 68102], [68108, 68111], [68152, 68154], [68159, 68159], [119143, 119145], [119155, 119170], [119173, 119179], [119210, 119213], [119362, 119364], [917505, 917505], [917536, 917631], [917760, 917999]];
            let r;
            t2.UnicodeV6 = class {
              constructor() {
                if (this.version = "6", !r) {
                  r = new Uint8Array(65536), r.fill(1), r[0] = 0, r.fill(0, 1, 32), r.fill(0, 127, 160), r.fill(2, 4352, 4448), r[9001] = 2, r[9002] = 2, r.fill(2, 11904, 42192), r[12351] = 1, r.fill(2, 44032, 55204), r.fill(2, 63744, 64256), r.fill(2, 65040, 65050), r.fill(2, 65072, 65136), r.fill(2, 65280, 65377), r.fill(2, 65504, 65511);
                  for (let e3 = 0; e3 < i2.length; ++e3)
                    r.fill(0, i2[e3][0], i2[e3][1] + 1);
                }
              }
              wcwidth(e3) {
                return e3 < 32 ? 0 : e3 < 127 ? 1 : e3 < 65536 ? r[e3] : function(e4, t3) {
                  let i3, s3 = 0, r2 = t3.length - 1;
                  if (e4 < t3[0][0] || e4 > t3[r2][1])
                    return false;
                  for (; r2 >= s3; )
                    if (i3 = s3 + r2 >> 1, e4 > t3[i3][1])
                      s3 = i3 + 1;
                    else {
                      if (!(e4 < t3[i3][0]))
                        return true;
                      r2 = i3 - 1;
                    }
                  return false;
                }(e3, s2) ? 0 : e3 >= 131072 && e3 <= 196605 || e3 >= 196608 && e3 <= 262141 ? 2 : 1;
              }
            };
          }, 5981: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.WriteBuffer = void 0;
            const s2 = i2(8460), r = i2(844);
            class n extends r.Disposable {
              constructor(e3) {
                super(), this._action = e3, this._writeBuffer = [], this._callbacks = [], this._pendingData = 0, this._bufferOffset = 0, this._isSyncWriting = false, this._syncCalls = 0, this._didUserInput = false, this._onWriteParsed = this.register(new s2.EventEmitter()), this.onWriteParsed = this._onWriteParsed.event;
              }
              handleUserInput() {
                this._didUserInput = true;
              }
              writeSync(e3, t3) {
                if (void 0 !== t3 && this._syncCalls > t3)
                  return void (this._syncCalls = 0);
                if (this._pendingData += e3.length, this._writeBuffer.push(e3), this._callbacks.push(void 0), this._syncCalls++, this._isSyncWriting)
                  return;
                let i3;
                for (this._isSyncWriting = true; i3 = this._writeBuffer.shift(); ) {
                  this._action(i3);
                  const e4 = this._callbacks.shift();
                  e4 && e4();
                }
                this._pendingData = 0, this._bufferOffset = 2147483647, this._isSyncWriting = false, this._syncCalls = 0;
              }
              write(e3, t3) {
                if (this._pendingData > 5e7)
                  throw new Error("write data discarded, use flow control to avoid losing data");
                if (!this._writeBuffer.length) {
                  if (this._bufferOffset = 0, this._didUserInput)
                    return this._didUserInput = false, this._pendingData += e3.length, this._writeBuffer.push(e3), this._callbacks.push(t3), void this._innerWrite();
                  setTimeout(() => this._innerWrite());
                }
                this._pendingData += e3.length, this._writeBuffer.push(e3), this._callbacks.push(t3);
              }
              _innerWrite(e3 = 0, t3 = true) {
                const i3 = e3 || Date.now();
                for (; this._writeBuffer.length > this._bufferOffset; ) {
                  const e4 = this._writeBuffer[this._bufferOffset], s3 = this._action(e4, t3);
                  if (s3) {
                    const e5 = (e6) => Date.now() - i3 >= 12 ? setTimeout(() => this._innerWrite(0, e6)) : this._innerWrite(i3, e6);
                    return void s3.catch((e6) => (queueMicrotask(() => {
                      throw e6;
                    }), Promise.resolve(false))).then(e5);
                  }
                  const r2 = this._callbacks[this._bufferOffset];
                  if (r2 && r2(), this._bufferOffset++, this._pendingData -= e4.length, Date.now() - i3 >= 12)
                    break;
                }
                this._writeBuffer.length > this._bufferOffset ? (this._bufferOffset > 50 && (this._writeBuffer = this._writeBuffer.slice(this._bufferOffset), this._callbacks = this._callbacks.slice(this._bufferOffset), this._bufferOffset = 0), setTimeout(() => this._innerWrite())) : (this._writeBuffer.length = 0, this._callbacks.length = 0, this._pendingData = 0, this._bufferOffset = 0), this._onWriteParsed.fire();
              }
            }
            t2.WriteBuffer = n;
          }, 5941: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.toRgbString = t2.parseColor = void 0;
            const i2 = /^([\da-f])\/([\da-f])\/([\da-f])$|^([\da-f]{2})\/([\da-f]{2})\/([\da-f]{2})$|^([\da-f]{3})\/([\da-f]{3})\/([\da-f]{3})$|^([\da-f]{4})\/([\da-f]{4})\/([\da-f]{4})$/, s2 = /^[\da-f]+$/;
            function r(e3, t3) {
              const i3 = e3.toString(16), s3 = i3.length < 2 ? "0" + i3 : i3;
              switch (t3) {
                case 4:
                  return i3[0];
                case 8:
                  return s3;
                case 12:
                  return (s3 + s3).slice(0, 3);
                default:
                  return s3 + s3;
              }
            }
            t2.parseColor = function(e3) {
              if (!e3)
                return;
              let t3 = e3.toLowerCase();
              if (0 === t3.indexOf("rgb:")) {
                t3 = t3.slice(4);
                const e4 = i2.exec(t3);
                if (e4) {
                  const t4 = e4[1] ? 15 : e4[4] ? 255 : e4[7] ? 4095 : 65535;
                  return [Math.round(parseInt(e4[1] || e4[4] || e4[7] || e4[10], 16) / t4 * 255), Math.round(parseInt(e4[2] || e4[5] || e4[8] || e4[11], 16) / t4 * 255), Math.round(parseInt(e4[3] || e4[6] || e4[9] || e4[12], 16) / t4 * 255)];
                }
              } else if (0 === t3.indexOf("#") && (t3 = t3.slice(1), s2.exec(t3) && [3, 6, 9, 12].includes(t3.length))) {
                const e4 = t3.length / 3, i3 = [0, 0, 0];
                for (let s3 = 0; s3 < 3; ++s3) {
                  const r2 = parseInt(t3.slice(e4 * s3, e4 * s3 + e4), 16);
                  i3[s3] = 1 === e4 ? r2 << 4 : 2 === e4 ? r2 : 3 === e4 ? r2 >> 4 : r2 >> 8;
                }
                return i3;
              }
            }, t2.toRgbString = function(e3, t3 = 16) {
              const [i3, s3, n] = e3;
              return `rgb:${r(i3, t3)}/${r(s3, t3)}/${r(n, t3)}`;
            };
          }, 5770: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.PAYLOAD_LIMIT = void 0, t2.PAYLOAD_LIMIT = 1e7;
          }, 6351: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.DcsHandler = t2.DcsParser = void 0;
            const s2 = i2(482), r = i2(8742), n = i2(5770), o = [];
            t2.DcsParser = class {
              constructor() {
                this._handlers = /* @__PURE__ */ Object.create(null), this._active = o, this._ident = 0, this._handlerFb = () => {
                }, this._stack = { paused: false, loopPosition: 0, fallThrough: false };
              }
              dispose() {
                this._handlers = /* @__PURE__ */ Object.create(null), this._handlerFb = () => {
                }, this._active = o;
              }
              registerHandler(e3, t3) {
                void 0 === this._handlers[e3] && (this._handlers[e3] = []);
                const i3 = this._handlers[e3];
                return i3.push(t3), { dispose: () => {
                  const e4 = i3.indexOf(t3);
                  -1 !== e4 && i3.splice(e4, 1);
                } };
              }
              clearHandler(e3) {
                this._handlers[e3] && delete this._handlers[e3];
              }
              setHandlerFallback(e3) {
                this._handlerFb = e3;
              }
              reset() {
                if (this._active.length)
                  for (let e3 = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; e3 >= 0; --e3)
                    this._active[e3].unhook(false);
                this._stack.paused = false, this._active = o, this._ident = 0;
              }
              hook(e3, t3) {
                if (this.reset(), this._ident = e3, this._active = this._handlers[e3] || o, this._active.length)
                  for (let e4 = this._active.length - 1; e4 >= 0; e4--)
                    this._active[e4].hook(t3);
                else
                  this._handlerFb(this._ident, "HOOK", t3);
              }
              put(e3, t3, i3) {
                if (this._active.length)
                  for (let s3 = this._active.length - 1; s3 >= 0; s3--)
                    this._active[s3].put(e3, t3, i3);
                else
                  this._handlerFb(this._ident, "PUT", (0, s2.utf32ToString)(e3, t3, i3));
              }
              unhook(e3, t3 = true) {
                if (this._active.length) {
                  let i3 = false, s3 = this._active.length - 1, r2 = false;
                  if (this._stack.paused && (s3 = this._stack.loopPosition - 1, i3 = t3, r2 = this._stack.fallThrough, this._stack.paused = false), !r2 && false === i3) {
                    for (; s3 >= 0 && (i3 = this._active[s3].unhook(e3), true !== i3); s3--)
                      if (i3 instanceof Promise)
                        return this._stack.paused = true, this._stack.loopPosition = s3, this._stack.fallThrough = false, i3;
                    s3--;
                  }
                  for (; s3 >= 0; s3--)
                    if (i3 = this._active[s3].unhook(false), i3 instanceof Promise)
                      return this._stack.paused = true, this._stack.loopPosition = s3, this._stack.fallThrough = true, i3;
                } else
                  this._handlerFb(this._ident, "UNHOOK", e3);
                this._active = o, this._ident = 0;
              }
            };
            const a = new r.Params();
            a.addParam(0), t2.DcsHandler = class {
              constructor(e3) {
                this._handler = e3, this._data = "", this._params = a, this._hitLimit = false;
              }
              hook(e3) {
                this._params = e3.length > 1 || e3.params[0] ? e3.clone() : a, this._data = "", this._hitLimit = false;
              }
              put(e3, t3, i3) {
                this._hitLimit || (this._data += (0, s2.utf32ToString)(e3, t3, i3), this._data.length > n.PAYLOAD_LIMIT && (this._data = "", this._hitLimit = true));
              }
              unhook(e3) {
                let t3 = false;
                if (this._hitLimit)
                  t3 = false;
                else if (e3 && (t3 = this._handler(this._data, this._params), t3 instanceof Promise))
                  return t3.then((e4) => (this._params = a, this._data = "", this._hitLimit = false, e4));
                return this._params = a, this._data = "", this._hitLimit = false, t3;
              }
            };
          }, 2015: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.EscapeSequenceParser = t2.VT500_TRANSITION_TABLE = t2.TransitionTable = void 0;
            const s2 = i2(844), r = i2(8742), n = i2(6242), o = i2(6351);
            class a {
              constructor(e3) {
                this.table = new Uint8Array(e3);
              }
              setDefault(e3, t3) {
                this.table.fill(e3 << 4 | t3);
              }
              add(e3, t3, i3, s3) {
                this.table[t3 << 8 | e3] = i3 << 4 | s3;
              }
              addMany(e3, t3, i3, s3) {
                for (let r2 = 0; r2 < e3.length; r2++)
                  this.table[t3 << 8 | e3[r2]] = i3 << 4 | s3;
              }
            }
            t2.TransitionTable = a;
            const h = 160;
            t2.VT500_TRANSITION_TABLE = function() {
              const e3 = new a(4095), t3 = Array.apply(null, Array(256)).map((e4, t4) => t4), i3 = (e4, i4) => t3.slice(e4, i4), s3 = i3(32, 127), r2 = i3(0, 24);
              r2.push(25), r2.push.apply(r2, i3(28, 32));
              const n2 = i3(0, 14);
              let o2;
              for (o2 in e3.setDefault(1, 0), e3.addMany(s3, 0, 2, 0), n2)
                e3.addMany([24, 26, 153, 154], o2, 3, 0), e3.addMany(i3(128, 144), o2, 3, 0), e3.addMany(i3(144, 152), o2, 3, 0), e3.add(156, o2, 0, 0), e3.add(27, o2, 11, 1), e3.add(157, o2, 4, 8), e3.addMany([152, 158, 159], o2, 0, 7), e3.add(155, o2, 11, 3), e3.add(144, o2, 11, 9);
              return e3.addMany(r2, 0, 3, 0), e3.addMany(r2, 1, 3, 1), e3.add(127, 1, 0, 1), e3.addMany(r2, 8, 0, 8), e3.addMany(r2, 3, 3, 3), e3.add(127, 3, 0, 3), e3.addMany(r2, 4, 3, 4), e3.add(127, 4, 0, 4), e3.addMany(r2, 6, 3, 6), e3.addMany(r2, 5, 3, 5), e3.add(127, 5, 0, 5), e3.addMany(r2, 2, 3, 2), e3.add(127, 2, 0, 2), e3.add(93, 1, 4, 8), e3.addMany(s3, 8, 5, 8), e3.add(127, 8, 5, 8), e3.addMany([156, 27, 24, 26, 7], 8, 6, 0), e3.addMany(i3(28, 32), 8, 0, 8), e3.addMany([88, 94, 95], 1, 0, 7), e3.addMany(s3, 7, 0, 7), e3.addMany(r2, 7, 0, 7), e3.add(156, 7, 0, 0), e3.add(127, 7, 0, 7), e3.add(91, 1, 11, 3), e3.addMany(i3(64, 127), 3, 7, 0), e3.addMany(i3(48, 60), 3, 8, 4), e3.addMany([60, 61, 62, 63], 3, 9, 4), e3.addMany(i3(48, 60), 4, 8, 4), e3.addMany(i3(64, 127), 4, 7, 0), e3.addMany([60, 61, 62, 63], 4, 0, 6), e3.addMany(i3(32, 64), 6, 0, 6), e3.add(127, 6, 0, 6), e3.addMany(i3(64, 127), 6, 0, 0), e3.addMany(i3(32, 48), 3, 9, 5), e3.addMany(i3(32, 48), 5, 9, 5), e3.addMany(i3(48, 64), 5, 0, 6), e3.addMany(i3(64, 127), 5, 7, 0), e3.addMany(i3(32, 48), 4, 9, 5), e3.addMany(i3(32, 48), 1, 9, 2), e3.addMany(i3(32, 48), 2, 9, 2), e3.addMany(i3(48, 127), 2, 10, 0), e3.addMany(i3(48, 80), 1, 10, 0), e3.addMany(i3(81, 88), 1, 10, 0), e3.addMany([89, 90, 92], 1, 10, 0), e3.addMany(i3(96, 127), 1, 10, 0), e3.add(80, 1, 11, 9), e3.addMany(r2, 9, 0, 9), e3.add(127, 9, 0, 9), e3.addMany(i3(28, 32), 9, 0, 9), e3.addMany(i3(32, 48), 9, 9, 12), e3.addMany(i3(48, 60), 9, 8, 10), e3.addMany([60, 61, 62, 63], 9, 9, 10), e3.addMany(r2, 11, 0, 11), e3.addMany(i3(32, 128), 11, 0, 11), e3.addMany(i3(28, 32), 11, 0, 11), e3.addMany(r2, 10, 0, 10), e3.add(127, 10, 0, 10), e3.addMany(i3(28, 32), 10, 0, 10), e3.addMany(i3(48, 60), 10, 8, 10), e3.addMany([60, 61, 62, 63], 10, 0, 11), e3.addMany(i3(32, 48), 10, 9, 12), e3.addMany(r2, 12, 0, 12), e3.add(127, 12, 0, 12), e3.addMany(i3(28, 32), 12, 0, 12), e3.addMany(i3(32, 48), 12, 9, 12), e3.addMany(i3(48, 64), 12, 0, 11), e3.addMany(i3(64, 127), 12, 12, 13), e3.addMany(i3(64, 127), 10, 12, 13), e3.addMany(i3(64, 127), 9, 12, 13), e3.addMany(r2, 13, 13, 13), e3.addMany(s3, 13, 13, 13), e3.add(127, 13, 0, 13), e3.addMany([27, 156, 24, 26], 13, 14, 0), e3.add(h, 0, 2, 0), e3.add(h, 8, 5, 8), e3.add(h, 6, 0, 6), e3.add(h, 11, 0, 11), e3.add(h, 13, 13, 13), e3;
            }();
            class c extends s2.Disposable {
              constructor(e3 = t2.VT500_TRANSITION_TABLE) {
                super(), this._transitions = e3, this._parseStack = { state: 0, handlers: [], handlerPos: 0, transition: 0, chunkPos: 0 }, this.initialState = 0, this.currentState = this.initialState, this._params = new r.Params(), this._params.addParam(0), this._collect = 0, this.precedingCodepoint = 0, this._printHandlerFb = (e4, t3, i3) => {
                }, this._executeHandlerFb = (e4) => {
                }, this._csiHandlerFb = (e4, t3) => {
                }, this._escHandlerFb = (e4) => {
                }, this._errorHandlerFb = (e4) => e4, this._printHandler = this._printHandlerFb, this._executeHandlers = /* @__PURE__ */ Object.create(null), this._csiHandlers = /* @__PURE__ */ Object.create(null), this._escHandlers = /* @__PURE__ */ Object.create(null), this.register((0, s2.toDisposable)(() => {
                  this._csiHandlers = /* @__PURE__ */ Object.create(null), this._executeHandlers = /* @__PURE__ */ Object.create(null), this._escHandlers = /* @__PURE__ */ Object.create(null);
                })), this._oscParser = this.register(new n.OscParser()), this._dcsParser = this.register(new o.DcsParser()), this._errorHandler = this._errorHandlerFb, this.registerEscHandler({ final: "\\" }, () => true);
              }
              _identifier(e3, t3 = [64, 126]) {
                let i3 = 0;
                if (e3.prefix) {
                  if (e3.prefix.length > 1)
                    throw new Error("only one byte as prefix supported");
                  if (i3 = e3.prefix.charCodeAt(0), i3 && 60 > i3 || i3 > 63)
                    throw new Error("prefix must be in range 0x3c .. 0x3f");
                }
                if (e3.intermediates) {
                  if (e3.intermediates.length > 2)
                    throw new Error("only two bytes as intermediates are supported");
                  for (let t4 = 0; t4 < e3.intermediates.length; ++t4) {
                    const s4 = e3.intermediates.charCodeAt(t4);
                    if (32 > s4 || s4 > 47)
                      throw new Error("intermediate must be in range 0x20 .. 0x2f");
                    i3 <<= 8, i3 |= s4;
                  }
                }
                if (1 !== e3.final.length)
                  throw new Error("final must be a single byte");
                const s3 = e3.final.charCodeAt(0);
                if (t3[0] > s3 || s3 > t3[1])
                  throw new Error(`final must be in range ${t3[0]} .. ${t3[1]}`);
                return i3 <<= 8, i3 |= s3, i3;
              }
              identToString(e3) {
                const t3 = [];
                for (; e3; )
                  t3.push(String.fromCharCode(255 & e3)), e3 >>= 8;
                return t3.reverse().join("");
              }
              setPrintHandler(e3) {
                this._printHandler = e3;
              }
              clearPrintHandler() {
                this._printHandler = this._printHandlerFb;
              }
              registerEscHandler(e3, t3) {
                const i3 = this._identifier(e3, [48, 126]);
                void 0 === this._escHandlers[i3] && (this._escHandlers[i3] = []);
                const s3 = this._escHandlers[i3];
                return s3.push(t3), { dispose: () => {
                  const e4 = s3.indexOf(t3);
                  -1 !== e4 && s3.splice(e4, 1);
                } };
              }
              clearEscHandler(e3) {
                this._escHandlers[this._identifier(e3, [48, 126])] && delete this._escHandlers[this._identifier(e3, [48, 126])];
              }
              setEscHandlerFallback(e3) {
                this._escHandlerFb = e3;
              }
              setExecuteHandler(e3, t3) {
                this._executeHandlers[e3.charCodeAt(0)] = t3;
              }
              clearExecuteHandler(e3) {
                this._executeHandlers[e3.charCodeAt(0)] && delete this._executeHandlers[e3.charCodeAt(0)];
              }
              setExecuteHandlerFallback(e3) {
                this._executeHandlerFb = e3;
              }
              registerCsiHandler(e3, t3) {
                const i3 = this._identifier(e3);
                void 0 === this._csiHandlers[i3] && (this._csiHandlers[i3] = []);
                const s3 = this._csiHandlers[i3];
                return s3.push(t3), { dispose: () => {
                  const e4 = s3.indexOf(t3);
                  -1 !== e4 && s3.splice(e4, 1);
                } };
              }
              clearCsiHandler(e3) {
                this._csiHandlers[this._identifier(e3)] && delete this._csiHandlers[this._identifier(e3)];
              }
              setCsiHandlerFallback(e3) {
                this._csiHandlerFb = e3;
              }
              registerDcsHandler(e3, t3) {
                return this._dcsParser.registerHandler(this._identifier(e3), t3);
              }
              clearDcsHandler(e3) {
                this._dcsParser.clearHandler(this._identifier(e3));
              }
              setDcsHandlerFallback(e3) {
                this._dcsParser.setHandlerFallback(e3);
              }
              registerOscHandler(e3, t3) {
                return this._oscParser.registerHandler(e3, t3);
              }
              clearOscHandler(e3) {
                this._oscParser.clearHandler(e3);
              }
              setOscHandlerFallback(e3) {
                this._oscParser.setHandlerFallback(e3);
              }
              setErrorHandler(e3) {
                this._errorHandler = e3;
              }
              clearErrorHandler() {
                this._errorHandler = this._errorHandlerFb;
              }
              reset() {
                this.currentState = this.initialState, this._oscParser.reset(), this._dcsParser.reset(), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingCodepoint = 0, 0 !== this._parseStack.state && (this._parseStack.state = 2, this._parseStack.handlers = []);
              }
              _preserveStack(e3, t3, i3, s3, r2) {
                this._parseStack.state = e3, this._parseStack.handlers = t3, this._parseStack.handlerPos = i3, this._parseStack.transition = s3, this._parseStack.chunkPos = r2;
              }
              parse(e3, t3, i3) {
                let s3, r2 = 0, n2 = 0, o2 = 0;
                if (this._parseStack.state)
                  if (2 === this._parseStack.state)
                    this._parseStack.state = 0, o2 = this._parseStack.chunkPos + 1;
                  else {
                    if (void 0 === i3 || 1 === this._parseStack.state)
                      throw this._parseStack.state = 1, new Error("improper continuation due to previous async handler, giving up parsing");
                    const t4 = this._parseStack.handlers;
                    let n3 = this._parseStack.handlerPos - 1;
                    switch (this._parseStack.state) {
                      case 3:
                        if (false === i3 && n3 > -1) {
                          for (; n3 >= 0 && (s3 = t4[n3](this._params), true !== s3); n3--)
                            if (s3 instanceof Promise)
                              return this._parseStack.handlerPos = n3, s3;
                        }
                        this._parseStack.handlers = [];
                        break;
                      case 4:
                        if (false === i3 && n3 > -1) {
                          for (; n3 >= 0 && (s3 = t4[n3](), true !== s3); n3--)
                            if (s3 instanceof Promise)
                              return this._parseStack.handlerPos = n3, s3;
                        }
                        this._parseStack.handlers = [];
                        break;
                      case 6:
                        if (r2 = e3[this._parseStack.chunkPos], s3 = this._dcsParser.unhook(24 !== r2 && 26 !== r2, i3), s3)
                          return s3;
                        27 === r2 && (this._parseStack.transition |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0;
                        break;
                      case 5:
                        if (r2 = e3[this._parseStack.chunkPos], s3 = this._oscParser.end(24 !== r2 && 26 !== r2, i3), s3)
                          return s3;
                        27 === r2 && (this._parseStack.transition |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0;
                    }
                    this._parseStack.state = 0, o2 = this._parseStack.chunkPos + 1, this.precedingCodepoint = 0, this.currentState = 15 & this._parseStack.transition;
                  }
                for (let i4 = o2; i4 < t3; ++i4) {
                  switch (r2 = e3[i4], n2 = this._transitions.table[this.currentState << 8 | (r2 < 160 ? r2 : h)], n2 >> 4) {
                    case 2:
                      for (let s4 = i4 + 1; ; ++s4) {
                        if (s4 >= t3 || (r2 = e3[s4]) < 32 || r2 > 126 && r2 < h) {
                          this._printHandler(e3, i4, s4), i4 = s4 - 1;
                          break;
                        }
                        if (++s4 >= t3 || (r2 = e3[s4]) < 32 || r2 > 126 && r2 < h) {
                          this._printHandler(e3, i4, s4), i4 = s4 - 1;
                          break;
                        }
                        if (++s4 >= t3 || (r2 = e3[s4]) < 32 || r2 > 126 && r2 < h) {
                          this._printHandler(e3, i4, s4), i4 = s4 - 1;
                          break;
                        }
                        if (++s4 >= t3 || (r2 = e3[s4]) < 32 || r2 > 126 && r2 < h) {
                          this._printHandler(e3, i4, s4), i4 = s4 - 1;
                          break;
                        }
                      }
                      break;
                    case 3:
                      this._executeHandlers[r2] ? this._executeHandlers[r2]() : this._executeHandlerFb(r2), this.precedingCodepoint = 0;
                      break;
                    case 0:
                      break;
                    case 1:
                      if (this._errorHandler({ position: i4, code: r2, currentState: this.currentState, collect: this._collect, params: this._params, abort: false }).abort)
                        return;
                      break;
                    case 7:
                      const o3 = this._csiHandlers[this._collect << 8 | r2];
                      let a2 = o3 ? o3.length - 1 : -1;
                      for (; a2 >= 0 && (s3 = o3[a2](this._params), true !== s3); a2--)
                        if (s3 instanceof Promise)
                          return this._preserveStack(3, o3, a2, n2, i4), s3;
                      a2 < 0 && this._csiHandlerFb(this._collect << 8 | r2, this._params), this.precedingCodepoint = 0;
                      break;
                    case 8:
                      do {
                        switch (r2) {
                          case 59:
                            this._params.addParam(0);
                            break;
                          case 58:
                            this._params.addSubParam(-1);
                            break;
                          default:
                            this._params.addDigit(r2 - 48);
                        }
                      } while (++i4 < t3 && (r2 = e3[i4]) > 47 && r2 < 60);
                      i4--;
                      break;
                    case 9:
                      this._collect <<= 8, this._collect |= r2;
                      break;
                    case 10:
                      const c2 = this._escHandlers[this._collect << 8 | r2];
                      let l = c2 ? c2.length - 1 : -1;
                      for (; l >= 0 && (s3 = c2[l](), true !== s3); l--)
                        if (s3 instanceof Promise)
                          return this._preserveStack(4, c2, l, n2, i4), s3;
                      l < 0 && this._escHandlerFb(this._collect << 8 | r2), this.precedingCodepoint = 0;
                      break;
                    case 11:
                      this._params.reset(), this._params.addParam(0), this._collect = 0;
                      break;
                    case 12:
                      this._dcsParser.hook(this._collect << 8 | r2, this._params);
                      break;
                    case 13:
                      for (let s4 = i4 + 1; ; ++s4)
                        if (s4 >= t3 || 24 === (r2 = e3[s4]) || 26 === r2 || 27 === r2 || r2 > 127 && r2 < h) {
                          this._dcsParser.put(e3, i4, s4), i4 = s4 - 1;
                          break;
                        }
                      break;
                    case 14:
                      if (s3 = this._dcsParser.unhook(24 !== r2 && 26 !== r2), s3)
                        return this._preserveStack(6, [], 0, n2, i4), s3;
                      27 === r2 && (n2 |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingCodepoint = 0;
                      break;
                    case 4:
                      this._oscParser.start();
                      break;
                    case 5:
                      for (let s4 = i4 + 1; ; s4++)
                        if (s4 >= t3 || (r2 = e3[s4]) < 32 || r2 > 127 && r2 < h) {
                          this._oscParser.put(e3, i4, s4), i4 = s4 - 1;
                          break;
                        }
                      break;
                    case 6:
                      if (s3 = this._oscParser.end(24 !== r2 && 26 !== r2), s3)
                        return this._preserveStack(5, [], 0, n2, i4), s3;
                      27 === r2 && (n2 |= 1), this._params.reset(), this._params.addParam(0), this._collect = 0, this.precedingCodepoint = 0;
                  }
                  this.currentState = 15 & n2;
                }
              }
            }
            t2.EscapeSequenceParser = c;
          }, 6242: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.OscHandler = t2.OscParser = void 0;
            const s2 = i2(5770), r = i2(482), n = [];
            t2.OscParser = class {
              constructor() {
                this._state = 0, this._active = n, this._id = -1, this._handlers = /* @__PURE__ */ Object.create(null), this._handlerFb = () => {
                }, this._stack = { paused: false, loopPosition: 0, fallThrough: false };
              }
              registerHandler(e3, t3) {
                void 0 === this._handlers[e3] && (this._handlers[e3] = []);
                const i3 = this._handlers[e3];
                return i3.push(t3), { dispose: () => {
                  const e4 = i3.indexOf(t3);
                  -1 !== e4 && i3.splice(e4, 1);
                } };
              }
              clearHandler(e3) {
                this._handlers[e3] && delete this._handlers[e3];
              }
              setHandlerFallback(e3) {
                this._handlerFb = e3;
              }
              dispose() {
                this._handlers = /* @__PURE__ */ Object.create(null), this._handlerFb = () => {
                }, this._active = n;
              }
              reset() {
                if (2 === this._state)
                  for (let e3 = this._stack.paused ? this._stack.loopPosition - 1 : this._active.length - 1; e3 >= 0; --e3)
                    this._active[e3].end(false);
                this._stack.paused = false, this._active = n, this._id = -1, this._state = 0;
              }
              _start() {
                if (this._active = this._handlers[this._id] || n, this._active.length)
                  for (let e3 = this._active.length - 1; e3 >= 0; e3--)
                    this._active[e3].start();
                else
                  this._handlerFb(this._id, "START");
              }
              _put(e3, t3, i3) {
                if (this._active.length)
                  for (let s3 = this._active.length - 1; s3 >= 0; s3--)
                    this._active[s3].put(e3, t3, i3);
                else
                  this._handlerFb(this._id, "PUT", (0, r.utf32ToString)(e3, t3, i3));
              }
              start() {
                this.reset(), this._state = 1;
              }
              put(e3, t3, i3) {
                if (3 !== this._state) {
                  if (1 === this._state)
                    for (; t3 < i3; ) {
                      const i4 = e3[t3++];
                      if (59 === i4) {
                        this._state = 2, this._start();
                        break;
                      }
                      if (i4 < 48 || 57 < i4)
                        return void (this._state = 3);
                      -1 === this._id && (this._id = 0), this._id = 10 * this._id + i4 - 48;
                    }
                  2 === this._state && i3 - t3 > 0 && this._put(e3, t3, i3);
                }
              }
              end(e3, t3 = true) {
                if (0 !== this._state) {
                  if (3 !== this._state)
                    if (1 === this._state && this._start(), this._active.length) {
                      let i3 = false, s3 = this._active.length - 1, r2 = false;
                      if (this._stack.paused && (s3 = this._stack.loopPosition - 1, i3 = t3, r2 = this._stack.fallThrough, this._stack.paused = false), !r2 && false === i3) {
                        for (; s3 >= 0 && (i3 = this._active[s3].end(e3), true !== i3); s3--)
                          if (i3 instanceof Promise)
                            return this._stack.paused = true, this._stack.loopPosition = s3, this._stack.fallThrough = false, i3;
                        s3--;
                      }
                      for (; s3 >= 0; s3--)
                        if (i3 = this._active[s3].end(false), i3 instanceof Promise)
                          return this._stack.paused = true, this._stack.loopPosition = s3, this._stack.fallThrough = true, i3;
                    } else
                      this._handlerFb(this._id, "END", e3);
                  this._active = n, this._id = -1, this._state = 0;
                }
              }
            }, t2.OscHandler = class {
              constructor(e3) {
                this._handler = e3, this._data = "", this._hitLimit = false;
              }
              start() {
                this._data = "", this._hitLimit = false;
              }
              put(e3, t3, i3) {
                this._hitLimit || (this._data += (0, r.utf32ToString)(e3, t3, i3), this._data.length > s2.PAYLOAD_LIMIT && (this._data = "", this._hitLimit = true));
              }
              end(e3) {
                let t3 = false;
                if (this._hitLimit)
                  t3 = false;
                else if (e3 && (t3 = this._handler(this._data), t3 instanceof Promise))
                  return t3.then((e4) => (this._data = "", this._hitLimit = false, e4));
                return this._data = "", this._hitLimit = false, t3;
              }
            };
          }, 8742: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.Params = void 0;
            const i2 = 2147483647;
            class s2 {
              constructor(e3 = 32, t3 = 32) {
                if (this.maxLength = e3, this.maxSubParamsLength = t3, t3 > 256)
                  throw new Error("maxSubParamsLength must not be greater than 256");
                this.params = new Int32Array(e3), this.length = 0, this._subParams = new Int32Array(t3), this._subParamsLength = 0, this._subParamsIdx = new Uint16Array(e3), this._rejectDigits = false, this._rejectSubDigits = false, this._digitIsSub = false;
              }
              static fromArray(e3) {
                const t3 = new s2();
                if (!e3.length)
                  return t3;
                for (let i3 = Array.isArray(e3[0]) ? 1 : 0; i3 < e3.length; ++i3) {
                  const s3 = e3[i3];
                  if (Array.isArray(s3))
                    for (let e4 = 0; e4 < s3.length; ++e4)
                      t3.addSubParam(s3[e4]);
                  else
                    t3.addParam(s3);
                }
                return t3;
              }
              clone() {
                const e3 = new s2(this.maxLength, this.maxSubParamsLength);
                return e3.params.set(this.params), e3.length = this.length, e3._subParams.set(this._subParams), e3._subParamsLength = this._subParamsLength, e3._subParamsIdx.set(this._subParamsIdx), e3._rejectDigits = this._rejectDigits, e3._rejectSubDigits = this._rejectSubDigits, e3._digitIsSub = this._digitIsSub, e3;
              }
              toArray() {
                const e3 = [];
                for (let t3 = 0; t3 < this.length; ++t3) {
                  e3.push(this.params[t3]);
                  const i3 = this._subParamsIdx[t3] >> 8, s3 = 255 & this._subParamsIdx[t3];
                  s3 - i3 > 0 && e3.push(Array.prototype.slice.call(this._subParams, i3, s3));
                }
                return e3;
              }
              reset() {
                this.length = 0, this._subParamsLength = 0, this._rejectDigits = false, this._rejectSubDigits = false, this._digitIsSub = false;
              }
              addParam(e3) {
                if (this._digitIsSub = false, this.length >= this.maxLength)
                  this._rejectDigits = true;
                else {
                  if (e3 < -1)
                    throw new Error("values lesser than -1 are not allowed");
                  this._subParamsIdx[this.length] = this._subParamsLength << 8 | this._subParamsLength, this.params[this.length++] = e3 > i2 ? i2 : e3;
                }
              }
              addSubParam(e3) {
                if (this._digitIsSub = true, this.length)
                  if (this._rejectDigits || this._subParamsLength >= this.maxSubParamsLength)
                    this._rejectSubDigits = true;
                  else {
                    if (e3 < -1)
                      throw new Error("values lesser than -1 are not allowed");
                    this._subParams[this._subParamsLength++] = e3 > i2 ? i2 : e3, this._subParamsIdx[this.length - 1]++;
                  }
              }
              hasSubParams(e3) {
                return (255 & this._subParamsIdx[e3]) - (this._subParamsIdx[e3] >> 8) > 0;
              }
              getSubParams(e3) {
                const t3 = this._subParamsIdx[e3] >> 8, i3 = 255 & this._subParamsIdx[e3];
                return i3 - t3 > 0 ? this._subParams.subarray(t3, i3) : null;
              }
              getSubParamsAll() {
                const e3 = {};
                for (let t3 = 0; t3 < this.length; ++t3) {
                  const i3 = this._subParamsIdx[t3] >> 8, s3 = 255 & this._subParamsIdx[t3];
                  s3 - i3 > 0 && (e3[t3] = this._subParams.slice(i3, s3));
                }
                return e3;
              }
              addDigit(e3) {
                let t3;
                if (this._rejectDigits || !(t3 = this._digitIsSub ? this._subParamsLength : this.length) || this._digitIsSub && this._rejectSubDigits)
                  return;
                const s3 = this._digitIsSub ? this._subParams : this.params, r = s3[t3 - 1];
                s3[t3 - 1] = ~r ? Math.min(10 * r + e3, i2) : e3;
              }
            }
            t2.Params = s2;
          }, 5741: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.AddonManager = void 0, t2.AddonManager = class {
              constructor() {
                this._addons = [];
              }
              dispose() {
                for (let e3 = this._addons.length - 1; e3 >= 0; e3--)
                  this._addons[e3].instance.dispose();
              }
              loadAddon(e3, t3) {
                const i2 = { instance: t3, dispose: t3.dispose, isDisposed: false };
                this._addons.push(i2), t3.dispose = () => this._wrappedAddonDispose(i2), t3.activate(e3);
              }
              _wrappedAddonDispose(e3) {
                if (e3.isDisposed)
                  return;
                let t3 = -1;
                for (let i2 = 0; i2 < this._addons.length; i2++)
                  if (this._addons[i2] === e3) {
                    t3 = i2;
                    break;
                  }
                if (-1 === t3)
                  throw new Error("Could not dispose an addon that has not been loaded");
                e3.isDisposed = true, e3.dispose.apply(e3.instance), this._addons.splice(t3, 1);
              }
            };
          }, 8771: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferApiView = void 0;
            const s2 = i2(3785), r = i2(511);
            t2.BufferApiView = class {
              constructor(e3, t3) {
                this._buffer = e3, this.type = t3;
              }
              init(e3) {
                return this._buffer = e3, this;
              }
              get cursorY() {
                return this._buffer.y;
              }
              get cursorX() {
                return this._buffer.x;
              }
              get viewportY() {
                return this._buffer.ydisp;
              }
              get baseY() {
                return this._buffer.ybase;
              }
              get length() {
                return this._buffer.lines.length;
              }
              getLine(e3) {
                const t3 = this._buffer.lines.get(e3);
                if (t3)
                  return new s2.BufferLineApiView(t3);
              }
              getNullCell() {
                return new r.CellData();
              }
            };
          }, 3785: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferLineApiView = void 0;
            const s2 = i2(511);
            t2.BufferLineApiView = class {
              constructor(e3) {
                this._line = e3;
              }
              get isWrapped() {
                return this._line.isWrapped;
              }
              get length() {
                return this._line.length;
              }
              getCell(e3, t3) {
                if (!(e3 < 0 || e3 >= this._line.length))
                  return t3 ? (this._line.loadCell(e3, t3), t3) : this._line.loadCell(e3, new s2.CellData());
              }
              translateToString(e3, t3, i3) {
                return this._line.translateToString(e3, t3, i3);
              }
            };
          }, 8285: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferNamespaceApi = void 0;
            const s2 = i2(8771), r = i2(8460);
            t2.BufferNamespaceApi = class {
              constructor(e3) {
                this._core = e3, this._onBufferChange = new r.EventEmitter(), this.onBufferChange = this._onBufferChange.event, this._normal = new s2.BufferApiView(this._core.buffers.normal, "normal"), this._alternate = new s2.BufferApiView(this._core.buffers.alt, "alternate"), this._core.buffers.onBufferActivate(() => this._onBufferChange.fire(this.active));
              }
              get active() {
                if (this._core.buffers.active === this._core.buffers.normal)
                  return this.normal;
                if (this._core.buffers.active === this._core.buffers.alt)
                  return this.alternate;
                throw new Error("Active buffer is neither normal nor alternate");
              }
              get normal() {
                return this._normal.init(this._core.buffers.normal);
              }
              get alternate() {
                return this._alternate.init(this._core.buffers.alt);
              }
            };
          }, 7975: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.ParserApi = void 0, t2.ParserApi = class {
              constructor(e3) {
                this._core = e3;
              }
              registerCsiHandler(e3, t3) {
                return this._core.registerCsiHandler(e3, (e4) => t3(e4.toArray()));
              }
              addCsiHandler(e3, t3) {
                return this.registerCsiHandler(e3, t3);
              }
              registerDcsHandler(e3, t3) {
                return this._core.registerDcsHandler(e3, (e4, i2) => t3(e4, i2.toArray()));
              }
              addDcsHandler(e3, t3) {
                return this.registerDcsHandler(e3, t3);
              }
              registerEscHandler(e3, t3) {
                return this._core.registerEscHandler(e3, t3);
              }
              addEscHandler(e3, t3) {
                return this.registerEscHandler(e3, t3);
              }
              registerOscHandler(e3, t3) {
                return this._core.registerOscHandler(e3, t3);
              }
              addOscHandler(e3, t3) {
                return this.registerOscHandler(e3, t3);
              }
            };
          }, 7090: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.UnicodeApi = void 0, t2.UnicodeApi = class {
              constructor(e3) {
                this._core = e3;
              }
              register(e3) {
                this._core.unicodeService.register(e3);
              }
              get versions() {
                return this._core.unicodeService.versions;
              }
              get activeVersion() {
                return this._core.unicodeService.activeVersion;
              }
              set activeVersion(e3) {
                this._core.unicodeService.activeVersion = e3;
              }
            };
          }, 744: function(e2, t2, i2) {
            var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
              var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                o2 = Reflect.decorate(e3, t3, i3, s3);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
              return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
            }, r = this && this.__param || function(e3, t3) {
              return function(i3, s3) {
                t3(i3, s3, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.BufferService = t2.MINIMUM_ROWS = t2.MINIMUM_COLS = void 0;
            const n = i2(2585), o = i2(5295), a = i2(8460), h = i2(844);
            t2.MINIMUM_COLS = 2, t2.MINIMUM_ROWS = 1;
            let c = class extends h.Disposable {
              constructor(e3) {
                super(), this.isUserScrolling = false, this._onResize = this.register(new a.EventEmitter()), this.onResize = this._onResize.event, this._onScroll = this.register(new a.EventEmitter()), this.onScroll = this._onScroll.event, this.cols = Math.max(e3.rawOptions.cols || 0, t2.MINIMUM_COLS), this.rows = Math.max(e3.rawOptions.rows || 0, t2.MINIMUM_ROWS), this.buffers = this.register(new o.BufferSet(e3, this));
              }
              get buffer() {
                return this.buffers.active;
              }
              resize(e3, t3) {
                this.cols = e3, this.rows = t3, this.buffers.resize(e3, t3), this._onResize.fire({ cols: e3, rows: t3 });
              }
              reset() {
                this.buffers.reset(), this.isUserScrolling = false;
              }
              scroll(e3, t3 = false) {
                const i3 = this.buffer;
                let s3;
                s3 = this._cachedBlankLine, s3 && s3.length === this.cols && s3.getFg(0) === e3.fg && s3.getBg(0) === e3.bg || (s3 = i3.getBlankLine(e3, t3), this._cachedBlankLine = s3), s3.isWrapped = t3;
                const r2 = i3.ybase + i3.scrollTop, n2 = i3.ybase + i3.scrollBottom;
                if (0 === i3.scrollTop) {
                  const e4 = i3.lines.isFull;
                  n2 === i3.lines.length - 1 ? e4 ? i3.lines.recycle().copyFrom(s3) : i3.lines.push(s3.clone()) : i3.lines.splice(n2 + 1, 0, s3.clone()), e4 ? this.isUserScrolling && (i3.ydisp = Math.max(i3.ydisp - 1, 0)) : (i3.ybase++, this.isUserScrolling || i3.ydisp++);
                } else {
                  const e4 = n2 - r2 + 1;
                  i3.lines.shiftElements(r2 + 1, e4 - 1, -1), i3.lines.set(n2, s3.clone());
                }
                this.isUserScrolling || (i3.ydisp = i3.ybase), this._onScroll.fire(i3.ydisp);
              }
              scrollLines(e3, t3, i3) {
                const s3 = this.buffer;
                if (e3 < 0) {
                  if (0 === s3.ydisp)
                    return;
                  this.isUserScrolling = true;
                } else
                  e3 + s3.ydisp >= s3.ybase && (this.isUserScrolling = false);
                const r2 = s3.ydisp;
                s3.ydisp = Math.max(Math.min(s3.ydisp + e3, s3.ybase), 0), r2 !== s3.ydisp && (t3 || this._onScroll.fire(s3.ydisp));
              }
              scrollPages(e3) {
                this.scrollLines(e3 * (this.rows - 1));
              }
              scrollToTop() {
                this.scrollLines(-this.buffer.ydisp);
              }
              scrollToBottom() {
                this.scrollLines(this.buffer.ybase - this.buffer.ydisp);
              }
              scrollToLine(e3) {
                const t3 = e3 - this.buffer.ydisp;
                0 !== t3 && this.scrollLines(t3);
              }
            };
            c = s2([r(0, n.IOptionsService)], c), t2.BufferService = c;
          }, 7994: (e2, t2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.CharsetService = void 0, t2.CharsetService = class {
              constructor() {
                this.glevel = 0, this._charsets = [];
              }
              reset() {
                this.charset = void 0, this._charsets = [], this.glevel = 0;
              }
              setgLevel(e3) {
                this.glevel = e3, this.charset = this._charsets[e3];
              }
              setgCharset(e3, t3) {
                this._charsets[e3] = t3, this.glevel === e3 && (this.charset = t3);
              }
            };
          }, 1753: function(e2, t2, i2) {
            var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
              var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                o2 = Reflect.decorate(e3, t3, i3, s3);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
              return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
            }, r = this && this.__param || function(e3, t3) {
              return function(i3, s3) {
                t3(i3, s3, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.CoreMouseService = void 0;
            const n = i2(2585), o = i2(8460), a = i2(844), h = { NONE: { events: 0, restrict: () => false }, X10: { events: 1, restrict: (e3) => 4 !== e3.button && 1 === e3.action && (e3.ctrl = false, e3.alt = false, e3.shift = false, true) }, VT200: { events: 19, restrict: (e3) => 32 !== e3.action }, DRAG: { events: 23, restrict: (e3) => 32 !== e3.action || 3 !== e3.button }, ANY: { events: 31, restrict: (e3) => true } };
            function c(e3, t3) {
              let i3 = (e3.ctrl ? 16 : 0) | (e3.shift ? 4 : 0) | (e3.alt ? 8 : 0);
              return 4 === e3.button ? (i3 |= 64, i3 |= e3.action) : (i3 |= 3 & e3.button, 4 & e3.button && (i3 |= 64), 8 & e3.button && (i3 |= 128), 32 === e3.action ? i3 |= 32 : 0 !== e3.action || t3 || (i3 |= 3)), i3;
            }
            const l = String.fromCharCode, d = { DEFAULT: (e3) => {
              const t3 = [c(e3, false) + 32, e3.col + 32, e3.row + 32];
              return t3[0] > 255 || t3[1] > 255 || t3[2] > 255 ? "" : `\x1B[M${l(t3[0])}${l(t3[1])}${l(t3[2])}`;
            }, SGR: (e3) => {
              const t3 = 0 === e3.action && 4 !== e3.button ? "m" : "M";
              return `\x1B[<${c(e3, true)};${e3.col};${e3.row}${t3}`;
            }, SGR_PIXELS: (e3) => {
              const t3 = 0 === e3.action && 4 !== e3.button ? "m" : "M";
              return `\x1B[<${c(e3, true)};${e3.x};${e3.y}${t3}`;
            } };
            let _ = class extends a.Disposable {
              constructor(e3, t3) {
                super(), this._bufferService = e3, this._coreService = t3, this._protocols = {}, this._encodings = {}, this._activeProtocol = "", this._activeEncoding = "", this._lastEvent = null, this._onProtocolChange = this.register(new o.EventEmitter()), this.onProtocolChange = this._onProtocolChange.event;
                for (const e4 of Object.keys(h))
                  this.addProtocol(e4, h[e4]);
                for (const e4 of Object.keys(d))
                  this.addEncoding(e4, d[e4]);
                this.reset();
              }
              addProtocol(e3, t3) {
                this._protocols[e3] = t3;
              }
              addEncoding(e3, t3) {
                this._encodings[e3] = t3;
              }
              get activeProtocol() {
                return this._activeProtocol;
              }
              get areMouseEventsActive() {
                return 0 !== this._protocols[this._activeProtocol].events;
              }
              set activeProtocol(e3) {
                if (!this._protocols[e3])
                  throw new Error(`unknown protocol "${e3}"`);
                this._activeProtocol = e3, this._onProtocolChange.fire(this._protocols[e3].events);
              }
              get activeEncoding() {
                return this._activeEncoding;
              }
              set activeEncoding(e3) {
                if (!this._encodings[e3])
                  throw new Error(`unknown encoding "${e3}"`);
                this._activeEncoding = e3;
              }
              reset() {
                this.activeProtocol = "NONE", this.activeEncoding = "DEFAULT", this._lastEvent = null;
              }
              triggerMouseEvent(e3) {
                if (e3.col < 0 || e3.col >= this._bufferService.cols || e3.row < 0 || e3.row >= this._bufferService.rows)
                  return false;
                if (4 === e3.button && 32 === e3.action)
                  return false;
                if (3 === e3.button && 32 !== e3.action)
                  return false;
                if (4 !== e3.button && (2 === e3.action || 3 === e3.action))
                  return false;
                if (e3.col++, e3.row++, 32 === e3.action && this._lastEvent && this._equalEvents(this._lastEvent, e3, "SGR_PIXELS" === this._activeEncoding))
                  return false;
                if (!this._protocols[this._activeProtocol].restrict(e3))
                  return false;
                const t3 = this._encodings[this._activeEncoding](e3);
                return t3 && ("DEFAULT" === this._activeEncoding ? this._coreService.triggerBinaryEvent(t3) : this._coreService.triggerDataEvent(t3, true)), this._lastEvent = e3, true;
              }
              explainEvents(e3) {
                return { down: !!(1 & e3), up: !!(2 & e3), drag: !!(4 & e3), move: !!(8 & e3), wheel: !!(16 & e3) };
              }
              _equalEvents(e3, t3, i3) {
                if (i3) {
                  if (e3.x !== t3.x)
                    return false;
                  if (e3.y !== t3.y)
                    return false;
                } else {
                  if (e3.col !== t3.col)
                    return false;
                  if (e3.row !== t3.row)
                    return false;
                }
                return e3.button === t3.button && e3.action === t3.action && e3.ctrl === t3.ctrl && e3.alt === t3.alt && e3.shift === t3.shift;
              }
            };
            _ = s2([r(0, n.IBufferService), r(1, n.ICoreService)], _), t2.CoreMouseService = _;
          }, 6975: function(e2, t2, i2) {
            var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
              var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                o2 = Reflect.decorate(e3, t3, i3, s3);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
              return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
            }, r = this && this.__param || function(e3, t3) {
              return function(i3, s3) {
                t3(i3, s3, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.CoreService = void 0;
            const n = i2(2585), o = i2(8460), a = i2(1439), h = i2(844), c = Object.freeze({ insertMode: false }), l = Object.freeze({ applicationCursorKeys: false, applicationKeypad: false, bracketedPasteMode: false, origin: false, reverseWraparound: false, sendFocus: false, wraparound: true });
            let d = class extends h.Disposable {
              constructor(e3, t3, i3) {
                super(), this._bufferService = e3, this._logService = t3, this._optionsService = i3, this.isCursorInitialized = false, this.isCursorHidden = false, this._onData = this.register(new o.EventEmitter()), this.onData = this._onData.event, this._onUserInput = this.register(new o.EventEmitter()), this.onUserInput = this._onUserInput.event, this._onBinary = this.register(new o.EventEmitter()), this.onBinary = this._onBinary.event, this._onRequestScrollToBottom = this.register(new o.EventEmitter()), this.onRequestScrollToBottom = this._onRequestScrollToBottom.event, this.modes = (0, a.clone)(c), this.decPrivateModes = (0, a.clone)(l);
              }
              reset() {
                this.modes = (0, a.clone)(c), this.decPrivateModes = (0, a.clone)(l);
              }
              triggerDataEvent(e3, t3 = false) {
                if (this._optionsService.rawOptions.disableStdin)
                  return;
                const i3 = this._bufferService.buffer;
                t3 && this._optionsService.rawOptions.scrollOnUserInput && i3.ybase !== i3.ydisp && this._onRequestScrollToBottom.fire(), t3 && this._onUserInput.fire(), this._logService.debug(`sending data "${e3}"`, () => e3.split("").map((e4) => e4.charCodeAt(0))), this._onData.fire(e3);
              }
              triggerBinaryEvent(e3) {
                this._optionsService.rawOptions.disableStdin || (this._logService.debug(`sending binary "${e3}"`, () => e3.split("").map((e4) => e4.charCodeAt(0))), this._onBinary.fire(e3));
              }
            };
            d = s2([r(0, n.IBufferService), r(1, n.ILogService), r(2, n.IOptionsService)], d), t2.CoreService = d;
          }, 9074: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.DecorationService = void 0;
            const s2 = i2(8055), r = i2(8460), n = i2(844), o = i2(6106);
            let a = 0, h = 0;
            class c extends n.Disposable {
              constructor() {
                super(), this._decorations = new o.SortedList((e3) => null == e3 ? void 0 : e3.marker.line), this._onDecorationRegistered = this.register(new r.EventEmitter()), this.onDecorationRegistered = this._onDecorationRegistered.event, this._onDecorationRemoved = this.register(new r.EventEmitter()), this.onDecorationRemoved = this._onDecorationRemoved.event, this.register((0, n.toDisposable)(() => {
                  for (const e3 of this._decorations.values())
                    this._onDecorationRemoved.fire(e3);
                  this.reset();
                }));
              }
              get decorations() {
                return this._decorations.values();
              }
              registerDecoration(e3) {
                if (e3.marker.isDisposed)
                  return;
                const t3 = new l(e3);
                if (t3) {
                  const e4 = t3.marker.onDispose(() => t3.dispose());
                  t3.onDispose(() => {
                    t3 && (this._decorations.delete(t3) && this._onDecorationRemoved.fire(t3), e4.dispose());
                  }), this._decorations.insert(t3), this._onDecorationRegistered.fire(t3);
                }
                return t3;
              }
              reset() {
                for (const e3 of this._decorations.values())
                  e3.dispose();
                this._decorations.clear();
              }
              *getDecorationsAtCell(e3, t3, i3) {
                var s3, r2, n2;
                let o2 = 0, a2 = 0;
                for (const h2 of this._decorations.getKeyIterator(t3))
                  o2 = null !== (s3 = h2.options.x) && void 0 !== s3 ? s3 : 0, a2 = o2 + (null !== (r2 = h2.options.width) && void 0 !== r2 ? r2 : 1), e3 >= o2 && e3 < a2 && (!i3 || (null !== (n2 = h2.options.layer) && void 0 !== n2 ? n2 : "bottom") === i3) && (yield h2);
              }
              forEachDecorationAtCell(e3, t3, i3, s3) {
                this._decorations.forEachByKey(t3, (t4) => {
                  var r2, n2, o2;
                  a = null !== (r2 = t4.options.x) && void 0 !== r2 ? r2 : 0, h = a + (null !== (n2 = t4.options.width) && void 0 !== n2 ? n2 : 1), e3 >= a && e3 < h && (!i3 || (null !== (o2 = t4.options.layer) && void 0 !== o2 ? o2 : "bottom") === i3) && s3(t4);
                });
              }
              dispose() {
                for (const e3 of this._decorations.values())
                  this._onDecorationRemoved.fire(e3);
                this.reset();
              }
            }
            t2.DecorationService = c;
            class l extends n.Disposable {
              constructor(e3) {
                super(), this.options = e3, this.isDisposed = false, this.onRenderEmitter = this.register(new r.EventEmitter()), this.onRender = this.onRenderEmitter.event, this._onDispose = this.register(new r.EventEmitter()), this.onDispose = this._onDispose.event, this._cachedBg = null, this._cachedFg = null, this.marker = e3.marker, this.options.overviewRulerOptions && !this.options.overviewRulerOptions.position && (this.options.overviewRulerOptions.position = "full");
              }
              get backgroundColorRGB() {
                return null === this._cachedBg && (this.options.backgroundColor ? this._cachedBg = s2.css.toColor(this.options.backgroundColor) : this._cachedBg = void 0), this._cachedBg;
              }
              get foregroundColorRGB() {
                return null === this._cachedFg && (this.options.foregroundColor ? this._cachedFg = s2.css.toColor(this.options.foregroundColor) : this._cachedFg = void 0), this._cachedFg;
              }
              dispose() {
                this._onDispose.fire(), super.dispose();
              }
            }
          }, 4348: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.InstantiationService = t2.ServiceCollection = void 0;
            const s2 = i2(2585), r = i2(8343);
            class n {
              constructor(...e3) {
                this._entries = /* @__PURE__ */ new Map();
                for (const [t3, i3] of e3)
                  this.set(t3, i3);
              }
              set(e3, t3) {
                const i3 = this._entries.get(e3);
                return this._entries.set(e3, t3), i3;
              }
              forEach(e3) {
                for (const [t3, i3] of this._entries.entries())
                  e3(t3, i3);
              }
              has(e3) {
                return this._entries.has(e3);
              }
              get(e3) {
                return this._entries.get(e3);
              }
            }
            t2.ServiceCollection = n, t2.InstantiationService = class {
              constructor() {
                this._services = new n(), this._services.set(s2.IInstantiationService, this);
              }
              setService(e3, t3) {
                this._services.set(e3, t3);
              }
              getService(e3) {
                return this._services.get(e3);
              }
              createInstance(e3, ...t3) {
                const i3 = (0, r.getServiceDependencies)(e3).sort((e4, t4) => e4.index - t4.index), s3 = [];
                for (const t4 of i3) {
                  const i4 = this._services.get(t4.id);
                  if (!i4)
                    throw new Error(`[createInstance] ${e3.name} depends on UNKNOWN service ${t4.id}.`);
                  s3.push(i4);
                }
                const n2 = i3.length > 0 ? i3[0].index : t3.length;
                if (t3.length !== n2)
                  throw new Error(`[createInstance] First service dependency of ${e3.name} at position ${n2 + 1} conflicts with ${t3.length} static arguments`);
                return new e3(...[...t3, ...s3]);
              }
            };
          }, 7866: function(e2, t2, i2) {
            var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
              var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                o2 = Reflect.decorate(e3, t3, i3, s3);
              else
                for (var a2 = e3.length - 1; a2 >= 0; a2--)
                  (r2 = e3[a2]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
              return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
            }, r = this && this.__param || function(e3, t3) {
              return function(i3, s3) {
                t3(i3, s3, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.LogService = void 0;
            const n = i2(844), o = i2(2585), a = { debug: o.LogLevelEnum.DEBUG, info: o.LogLevelEnum.INFO, warn: o.LogLevelEnum.WARN, error: o.LogLevelEnum.ERROR, off: o.LogLevelEnum.OFF };
            let h = class extends n.Disposable {
              constructor(e3) {
                super(), this._optionsService = e3, this.logLevel = o.LogLevelEnum.OFF, this._updateLogLevel(), this.register(this._optionsService.onSpecificOptionChange("logLevel", () => this._updateLogLevel()));
              }
              _updateLogLevel() {
                this.logLevel = a[this._optionsService.rawOptions.logLevel];
              }
              _evalLazyOptionalParams(e3) {
                for (let t3 = 0; t3 < e3.length; t3++)
                  "function" == typeof e3[t3] && (e3[t3] = e3[t3]());
              }
              _log(e3, t3, i3) {
                this._evalLazyOptionalParams(i3), e3.call(console, "xterm.js: " + t3, ...i3);
              }
              debug(e3, ...t3) {
                this.logLevel <= o.LogLevelEnum.DEBUG && this._log(console.log, e3, t3);
              }
              info(e3, ...t3) {
                this.logLevel <= o.LogLevelEnum.INFO && this._log(console.info, e3, t3);
              }
              warn(e3, ...t3) {
                this.logLevel <= o.LogLevelEnum.WARN && this._log(console.warn, e3, t3);
              }
              error(e3, ...t3) {
                this.logLevel <= o.LogLevelEnum.ERROR && this._log(console.error, e3, t3);
              }
            };
            h = s2([r(0, o.IOptionsService)], h), t2.LogService = h;
          }, 7302: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.OptionsService = t2.DEFAULT_OPTIONS = void 0;
            const s2 = i2(8460), r = i2(6114), n = i2(844);
            t2.DEFAULT_OPTIONS = { cols: 80, rows: 24, cursorBlink: false, cursorStyle: "block", cursorWidth: 1, customGlyphs: true, drawBoldTextInBrightColors: true, fastScrollModifier: "alt", fastScrollSensitivity: 5, fontFamily: "courier-new, courier, monospace", fontSize: 15, fontWeight: "normal", fontWeightBold: "bold", lineHeight: 1, letterSpacing: 0, linkHandler: null, logLevel: "info", scrollback: 1e3, scrollOnUserInput: true, scrollSensitivity: 1, screenReaderMode: false, smoothScrollDuration: 0, macOptionIsMeta: false, macOptionClickForcesSelection: false, minimumContrastRatio: 1, disableStdin: false, allowProposedApi: false, allowTransparency: false, tabStopWidth: 8, theme: {}, rightClickSelectsWord: r.isMac, windowOptions: {}, windowsMode: false, wordSeparator: " ()[]{}',\"`", altClickMovesCursor: true, convertEol: false, termName: "xterm", cancelEvents: false, overviewRulerWidth: 0 };
            const o = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
            class a extends n.Disposable {
              constructor(e3) {
                super(), this._onOptionChange = this.register(new s2.EventEmitter()), this.onOptionChange = this._onOptionChange.event;
                const i3 = Object.assign({}, t2.DEFAULT_OPTIONS);
                for (const t3 in e3)
                  if (t3 in i3)
                    try {
                      const s3 = e3[t3];
                      i3[t3] = this._sanitizeAndValidateOption(t3, s3);
                    } catch (e4) {
                      console.error(e4);
                    }
                this.rawOptions = i3, this.options = Object.assign({}, i3), this._setupOptions();
              }
              onSpecificOptionChange(e3, t3) {
                return this.onOptionChange((i3) => {
                  i3 === e3 && t3(this.rawOptions[e3]);
                });
              }
              onMultipleOptionChange(e3, t3) {
                return this.onOptionChange((i3) => {
                  -1 !== e3.indexOf(i3) && t3();
                });
              }
              _setupOptions() {
                const e3 = (e4) => {
                  if (!(e4 in t2.DEFAULT_OPTIONS))
                    throw new Error(`No option with key "${e4}"`);
                  return this.rawOptions[e4];
                }, i3 = (e4, i4) => {
                  if (!(e4 in t2.DEFAULT_OPTIONS))
                    throw new Error(`No option with key "${e4}"`);
                  i4 = this._sanitizeAndValidateOption(e4, i4), this.rawOptions[e4] !== i4 && (this.rawOptions[e4] = i4, this._onOptionChange.fire(e4));
                };
                for (const t3 in this.rawOptions) {
                  const s3 = { get: e3.bind(this, t3), set: i3.bind(this, t3) };
                  Object.defineProperty(this.options, t3, s3);
                }
              }
              _sanitizeAndValidateOption(e3, i3) {
                switch (e3) {
                  case "cursorStyle":
                    if (i3 || (i3 = t2.DEFAULT_OPTIONS[e3]), !function(e4) {
                      return "block" === e4 || "underline" === e4 || "bar" === e4;
                    }(i3))
                      throw new Error(`"${i3}" is not a valid value for ${e3}`);
                    break;
                  case "wordSeparator":
                    i3 || (i3 = t2.DEFAULT_OPTIONS[e3]);
                    break;
                  case "fontWeight":
                  case "fontWeightBold":
                    if ("number" == typeof i3 && 1 <= i3 && i3 <= 1e3)
                      break;
                    i3 = o.includes(i3) ? i3 : t2.DEFAULT_OPTIONS[e3];
                    break;
                  case "cursorWidth":
                    i3 = Math.floor(i3);
                  case "lineHeight":
                  case "tabStopWidth":
                    if (i3 < 1)
                      throw new Error(`${e3} cannot be less than 1, value: ${i3}`);
                    break;
                  case "minimumContrastRatio":
                    i3 = Math.max(1, Math.min(21, Math.round(10 * i3) / 10));
                    break;
                  case "scrollback":
                    if ((i3 = Math.min(i3, 4294967295)) < 0)
                      throw new Error(`${e3} cannot be less than 0, value: ${i3}`);
                    break;
                  case "fastScrollSensitivity":
                  case "scrollSensitivity":
                    if (i3 <= 0)
                      throw new Error(`${e3} cannot be less than or equal to 0, value: ${i3}`);
                  case "rows":
                  case "cols":
                    if (!i3 && 0 !== i3)
                      throw new Error(`${e3} must be numeric, value: ${i3}`);
                }
                return i3;
              }
            }
            t2.OptionsService = a;
          }, 2660: function(e2, t2, i2) {
            var s2 = this && this.__decorate || function(e3, t3, i3, s3) {
              var r2, n2 = arguments.length, o2 = n2 < 3 ? t3 : null === s3 ? s3 = Object.getOwnPropertyDescriptor(t3, i3) : s3;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                o2 = Reflect.decorate(e3, t3, i3, s3);
              else
                for (var a = e3.length - 1; a >= 0; a--)
                  (r2 = e3[a]) && (o2 = (n2 < 3 ? r2(o2) : n2 > 3 ? r2(t3, i3, o2) : r2(t3, i3)) || o2);
              return n2 > 3 && o2 && Object.defineProperty(t3, i3, o2), o2;
            }, r = this && this.__param || function(e3, t3) {
              return function(i3, s3) {
                t3(i3, s3, e3);
              };
            };
            Object.defineProperty(t2, "__esModule", { value: true }), t2.OscLinkService = void 0;
            const n = i2(2585);
            let o = class {
              constructor(e3) {
                this._bufferService = e3, this._nextId = 1, this._entriesWithId = /* @__PURE__ */ new Map(), this._dataByLinkId = /* @__PURE__ */ new Map();
              }
              registerLink(e3) {
                const t3 = this._bufferService.buffer;
                if (void 0 === e3.id) {
                  const i4 = t3.addMarker(t3.ybase + t3.y), s4 = { data: e3, id: this._nextId++, lines: [i4] };
                  return i4.onDispose(() => this._removeMarkerFromLink(s4, i4)), this._dataByLinkId.set(s4.id, s4), s4.id;
                }
                const i3 = e3, s3 = this._getEntryIdKey(i3), r2 = this._entriesWithId.get(s3);
                if (r2)
                  return this.addLineToLink(r2.id, t3.ybase + t3.y), r2.id;
                const n2 = t3.addMarker(t3.ybase + t3.y), o2 = { id: this._nextId++, key: this._getEntryIdKey(i3), data: i3, lines: [n2] };
                return n2.onDispose(() => this._removeMarkerFromLink(o2, n2)), this._entriesWithId.set(o2.key, o2), this._dataByLinkId.set(o2.id, o2), o2.id;
              }
              addLineToLink(e3, t3) {
                const i3 = this._dataByLinkId.get(e3);
                if (i3 && i3.lines.every((e4) => e4.line !== t3)) {
                  const e4 = this._bufferService.buffer.addMarker(t3);
                  i3.lines.push(e4), e4.onDispose(() => this._removeMarkerFromLink(i3, e4));
                }
              }
              getLinkData(e3) {
                var t3;
                return null === (t3 = this._dataByLinkId.get(e3)) || void 0 === t3 ? void 0 : t3.data;
              }
              _getEntryIdKey(e3) {
                return `${e3.id};;${e3.uri}`;
              }
              _removeMarkerFromLink(e3, t3) {
                const i3 = e3.lines.indexOf(t3);
                -1 !== i3 && (e3.lines.splice(i3, 1), 0 === e3.lines.length && (void 0 !== e3.data.id && this._entriesWithId.delete(e3.key), this._dataByLinkId.delete(e3.id)));
              }
            };
            o = s2([r(0, n.IBufferService)], o), t2.OscLinkService = o;
          }, 8343: (e2, t2) => {
            function i2(e3, t3, i3) {
              t3.di$target === t3 ? t3.di$dependencies.push({ id: e3, index: i3 }) : (t3.di$dependencies = [{ id: e3, index: i3 }], t3.di$target = t3);
            }
            Object.defineProperty(t2, "__esModule", { value: true }), t2.createDecorator = t2.getServiceDependencies = t2.serviceRegistry = void 0, t2.serviceRegistry = /* @__PURE__ */ new Map(), t2.getServiceDependencies = function(e3) {
              return e3.di$dependencies || [];
            }, t2.createDecorator = function(e3) {
              if (t2.serviceRegistry.has(e3))
                return t2.serviceRegistry.get(e3);
              const s2 = function(e4, t3, r) {
                if (3 !== arguments.length)
                  throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
                i2(s2, e4, r);
              };
              return s2.toString = () => e3, t2.serviceRegistry.set(e3, s2), s2;
            };
          }, 2585: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.IDecorationService = t2.IUnicodeService = t2.IOscLinkService = t2.IOptionsService = t2.ILogService = t2.LogLevelEnum = t2.IInstantiationService = t2.ICharsetService = t2.ICoreService = t2.ICoreMouseService = t2.IBufferService = void 0;
            const s2 = i2(8343);
            var r;
            t2.IBufferService = (0, s2.createDecorator)("BufferService"), t2.ICoreMouseService = (0, s2.createDecorator)("CoreMouseService"), t2.ICoreService = (0, s2.createDecorator)("CoreService"), t2.ICharsetService = (0, s2.createDecorator)("CharsetService"), t2.IInstantiationService = (0, s2.createDecorator)("InstantiationService"), (r = t2.LogLevelEnum || (t2.LogLevelEnum = {}))[r.DEBUG = 0] = "DEBUG", r[r.INFO = 1] = "INFO", r[r.WARN = 2] = "WARN", r[r.ERROR = 3] = "ERROR", r[r.OFF = 4] = "OFF", t2.ILogService = (0, s2.createDecorator)("LogService"), t2.IOptionsService = (0, s2.createDecorator)("OptionsService"), t2.IOscLinkService = (0, s2.createDecorator)("OscLinkService"), t2.IUnicodeService = (0, s2.createDecorator)("UnicodeService"), t2.IDecorationService = (0, s2.createDecorator)("DecorationService");
          }, 1480: (e2, t2, i2) => {
            Object.defineProperty(t2, "__esModule", { value: true }), t2.UnicodeService = void 0;
            const s2 = i2(8460), r = i2(225);
            t2.UnicodeService = class {
              constructor() {
                this._providers = /* @__PURE__ */ Object.create(null), this._active = "", this._onChange = new s2.EventEmitter(), this.onChange = this._onChange.event;
                const e3 = new r.UnicodeV6();
                this.register(e3), this._active = e3.version, this._activeProvider = e3;
              }
              dispose() {
                this._onChange.dispose();
              }
              get versions() {
                return Object.keys(this._providers);
              }
              get activeVersion() {
                return this._active;
              }
              set activeVersion(e3) {
                if (!this._providers[e3])
                  throw new Error(`unknown Unicode version "${e3}"`);
                this._active = e3, this._activeProvider = this._providers[e3], this._onChange.fire(e3);
              }
              register(e3) {
                this._providers[e3.version] = e3;
              }
              wcwidth(e3) {
                return this._activeProvider.wcwidth(e3);
              }
              getStringCellWidth(e3) {
                let t3 = 0;
                const i3 = e3.length;
                for (let s3 = 0; s3 < i3; ++s3) {
                  let r2 = e3.charCodeAt(s3);
                  if (55296 <= r2 && r2 <= 56319) {
                    if (++s3 >= i3)
                      return t3 + this.wcwidth(r2);
                    const n = e3.charCodeAt(s3);
                    56320 <= n && n <= 57343 ? r2 = 1024 * (r2 - 55296) + n - 56320 + 65536 : t3 += this.wcwidth(n);
                  }
                  t3 += this.wcwidth(r2);
                }
                return t3;
              }
            };
          } }, t = {};
          function i(s2) {
            var r = t[s2];
            if (void 0 !== r)
              return r.exports;
            var n = t[s2] = { exports: {} };
            return e[s2].call(n.exports, n, n.exports, i), n.exports;
          }
          var s = {};
          return (() => {
            var e2 = s;
            Object.defineProperty(e2, "__esModule", { value: true }), e2.Terminal = void 0;
            const t2 = i(3236), r = i(9042), n = i(7975), o = i(7090), a = i(5741), h = i(8285), c = ["cols", "rows"];
            e2.Terminal = class {
              constructor(e3) {
                this._core = new t2.Terminal(e3), this._addonManager = new a.AddonManager(), this._publicOptions = Object.assign({}, this._core.options);
                const i2 = (e4) => this._core.options[e4], s2 = (e4, t3) => {
                  this._checkReadonlyOptions(e4), this._core.options[e4] = t3;
                };
                for (const e4 in this._core.options) {
                  const t3 = { get: i2.bind(this, e4), set: s2.bind(this, e4) };
                  Object.defineProperty(this._publicOptions, e4, t3);
                }
              }
              _checkReadonlyOptions(e3) {
                if (c.includes(e3))
                  throw new Error(`Option "${e3}" can only be set in the constructor`);
              }
              _checkProposedApi() {
                if (!this._core.optionsService.rawOptions.allowProposedApi)
                  throw new Error("You must set the allowProposedApi option to true to use proposed API");
              }
              get onBell() {
                return this._core.onBell;
              }
              get onBinary() {
                return this._core.onBinary;
              }
              get onCursorMove() {
                return this._core.onCursorMove;
              }
              get onData() {
                return this._core.onData;
              }
              get onKey() {
                return this._core.onKey;
              }
              get onLineFeed() {
                return this._core.onLineFeed;
              }
              get onRender() {
                return this._core.onRender;
              }
              get onResize() {
                return this._core.onResize;
              }
              get onScroll() {
                return this._core.onScroll;
              }
              get onSelectionChange() {
                return this._core.onSelectionChange;
              }
              get onTitleChange() {
                return this._core.onTitleChange;
              }
              get onWriteParsed() {
                return this._core.onWriteParsed;
              }
              get element() {
                return this._core.element;
              }
              get parser() {
                return this._parser || (this._parser = new n.ParserApi(this._core)), this._parser;
              }
              get unicode() {
                return this._checkProposedApi(), new o.UnicodeApi(this._core);
              }
              get textarea() {
                return this._core.textarea;
              }
              get rows() {
                return this._core.rows;
              }
              get cols() {
                return this._core.cols;
              }
              get buffer() {
                return this._buffer || (this._buffer = new h.BufferNamespaceApi(this._core)), this._buffer;
              }
              get markers() {
                return this._checkProposedApi(), this._core.markers;
              }
              get modes() {
                const e3 = this._core.coreService.decPrivateModes;
                let t3 = "none";
                switch (this._core.coreMouseService.activeProtocol) {
                  case "X10":
                    t3 = "x10";
                    break;
                  case "VT200":
                    t3 = "vt200";
                    break;
                  case "DRAG":
                    t3 = "drag";
                    break;
                  case "ANY":
                    t3 = "any";
                }
                return { applicationCursorKeysMode: e3.applicationCursorKeys, applicationKeypadMode: e3.applicationKeypad, bracketedPasteMode: e3.bracketedPasteMode, insertMode: this._core.coreService.modes.insertMode, mouseTrackingMode: t3, originMode: e3.origin, reverseWraparoundMode: e3.reverseWraparound, sendFocusMode: e3.sendFocus, wraparoundMode: e3.wraparound };
              }
              get options() {
                return this._publicOptions;
              }
              set options(e3) {
                for (const t3 in e3)
                  this._publicOptions[t3] = e3[t3];
              }
              blur() {
                this._core.blur();
              }
              focus() {
                this._core.focus();
              }
              resize(e3, t3) {
                this._verifyIntegers(e3, t3), this._core.resize(e3, t3);
              }
              open(e3) {
                this._core.open(e3);
              }
              attachCustomKeyEventHandler(e3) {
                this._core.attachCustomKeyEventHandler(e3);
              }
              registerLinkProvider(e3) {
                return this._core.registerLinkProvider(e3);
              }
              registerCharacterJoiner(e3) {
                return this._checkProposedApi(), this._core.registerCharacterJoiner(e3);
              }
              deregisterCharacterJoiner(e3) {
                this._checkProposedApi(), this._core.deregisterCharacterJoiner(e3);
              }
              registerMarker(e3 = 0) {
                return this._verifyIntegers(e3), this._core.addMarker(e3);
              }
              registerDecoration(e3) {
                var t3, i2, s2;
                return this._checkProposedApi(), this._verifyPositiveIntegers(null !== (t3 = e3.x) && void 0 !== t3 ? t3 : 0, null !== (i2 = e3.width) && void 0 !== i2 ? i2 : 0, null !== (s2 = e3.height) && void 0 !== s2 ? s2 : 0), this._core.registerDecoration(e3);
              }
              hasSelection() {
                return this._core.hasSelection();
              }
              select(e3, t3, i2) {
                this._verifyIntegers(e3, t3, i2), this._core.select(e3, t3, i2);
              }
              getSelection() {
                return this._core.getSelection();
              }
              getSelectionPosition() {
                return this._core.getSelectionPosition();
              }
              clearSelection() {
                this._core.clearSelection();
              }
              selectAll() {
                this._core.selectAll();
              }
              selectLines(e3, t3) {
                this._verifyIntegers(e3, t3), this._core.selectLines(e3, t3);
              }
              dispose() {
                this._addonManager.dispose(), this._core.dispose();
              }
              scrollLines(e3) {
                this._verifyIntegers(e3), this._core.scrollLines(e3);
              }
              scrollPages(e3) {
                this._verifyIntegers(e3), this._core.scrollPages(e3);
              }
              scrollToTop() {
                this._core.scrollToTop();
              }
              scrollToBottom() {
                this._core.scrollToBottom();
              }
              scrollToLine(e3) {
                this._verifyIntegers(e3), this._core.scrollToLine(e3);
              }
              clear() {
                this._core.clear();
              }
              write(e3, t3) {
                this._core.write(e3, t3);
              }
              writeln(e3, t3) {
                this._core.write(e3), this._core.write("\r\n", t3);
              }
              paste(e3) {
                this._core.paste(e3);
              }
              refresh(e3, t3) {
                this._verifyIntegers(e3, t3), this._core.refresh(e3, t3);
              }
              reset() {
                this._core.reset();
              }
              clearTextureAtlas() {
                this._core.clearTextureAtlas();
              }
              loadAddon(e3) {
                return this._addonManager.loadAddon(this, e3);
              }
              static get strings() {
                return r;
              }
              _verifyIntegers(...e3) {
                for (const t3 of e3)
                  if (t3 === 1 / 0 || isNaN(t3) || t3 % 1 != 0)
                    throw new Error("This API only accepts integers");
              }
              _verifyPositiveIntegers(...e3) {
                for (const t3 of e3)
                  if (t3 && (t3 === 1 / 0 || isNaN(t3) || t3 % 1 != 0 || t3 < 0))
                    throw new Error("This API only accepts positive integers");
              }
            };
          })(), s;
        })();
      });
    }
  });

  // index.ts
  var import_xterm = __toESM(require_xterm(), 1);

  // node_modules/.pnpm/indexeddb-fs@2.1.5/node_modules/indexeddb-fs/dist/index.es.js
  var __assign = function() {
    __assign = Object.assign || function __assign2(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };
  function __rest(s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  }
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve4) {
        resolve4(value);
      });
    }
    return new (P || (P = Promise))(function(resolve4, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve4(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1)
        throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f)
        throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _)
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
            return t;
          if (y = 0, t)
            op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2])
                _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5)
        throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }
  var getDatabaseCrud = function(_a) {
    var databaseName = _a.databaseName, databaseVersion = _a.databaseVersion, objectStoreName = _a.objectStoreName;
    var initializeObjectStore = initializeObjectStoreInstance({
      databaseName,
      databaseVersion,
      objectStoreName
    });
    var getRecord = getRecordInstance({
      initializeObjectStore
    });
    var putRecord = putRecordInstance({
      initializeObjectStore
    });
    var openCursor = openCursorInstance({
      initializeObjectStore
    });
    var deleteRecord = deleteRecordInstance({
      initializeObjectStore
    });
    return {
      getRecord,
      putRecord,
      openCursor,
      deleteRecord
    };
  };
  var OBJECT_STORE_KEY_PATH = "fullPath";
  var OBJECT_STORE_INDEX_NAME = "directory";
  var IS_VALID_PATH_REG_EXP_STRING = "^([A-Za-z]:|[A-Za-z0-9_-]+(.[A-Za-z0-9_-]+)*)((/[A-Za-z0-9_.-]+)+)$";
  function getDatabaseObjectFromTarget(target) {
    if (!target) {
      return null;
    }
    var targetWithType = target;
    return targetWithType.result;
  }
  function throwDatabaseOpenError(reject, database) {
    if (!database) {
      reject(new Error("Something went wrong and the database transaction was not opened."));
    }
  }
  var initializeDatabase = function(_a) {
    var databaseName = _a.databaseName, databaseVersion = _a.databaseVersion, objectStoreName = _a.objectStoreName;
    return new Promise(function(resolve4, reject) {
      var request = openIndexedDBConnection(databaseName, databaseVersion);
      request.onerror = reject;
      request.onsuccess = function(_a2) {
        var target = _a2.target;
        var database = getDatabaseObjectFromTarget(target);
        throwDatabaseOpenError(reject, database);
        resolve4(database);
      };
      request.onupgradeneeded = function(_a2) {
        var target = _a2.target;
        var database = getDatabaseObjectFromTarget(target);
        throwDatabaseOpenError(reject, database);
        var objectStore = database === null || database === void 0 ? void 0 : database.createObjectStore(objectStoreName, {
          keyPath: OBJECT_STORE_KEY_PATH
        });
        objectStore === null || objectStore === void 0 ? void 0 : objectStore.createIndex(OBJECT_STORE_INDEX_NAME, OBJECT_STORE_INDEX_NAME, {
          unique: false
        });
      };
    });
  };
  var putRecordInstance = function(_a) {
    var initializeObjectStore = _a.initializeObjectStore;
    return function(value) {
      return __awaiter(void 0, void 0, void 0, function() {
        var objectStore;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, initializeObjectStore("readwrite")];
            case 1:
              objectStore = _a2.sent();
              return [2, new Promise(function(resolve4, reject) {
                var request = objectStore.put(value);
                request.onerror = reject;
                request.onsuccess = function() {
                  return resolve4(value);
                };
              })];
          }
        });
      });
    };
  };
  var getRecordInstance = function(_a) {
    var initializeObjectStore = _a.initializeObjectStore;
    return function(query, onResolve2) {
      return __awaiter(void 0, void 0, void 0, function() {
        var objectStore;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, initializeObjectStore("readonly")];
            case 1:
              objectStore = _a2.sent();
              return [2, new Promise(function(resolve4, reject) {
                var request = objectStore.get(query);
                request.onerror = reject;
                request.onsuccess = function(event) {
                  return resolve4(onResolve2(event === null || event === void 0 ? void 0 : event.target));
                };
              })];
          }
        });
      });
    };
  };
  var openCursorInstance = function(_a) {
    var initializeObjectStore = _a.initializeObjectStore;
    return function(value, onResolve2) {
      return __awaiter(void 0, void 0, void 0, function() {
        var objectStore, objectStoreIndex, keyRange, request;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, initializeObjectStore("readonly")];
            case 1:
              objectStore = _a2.sent();
              objectStoreIndex = objectStore.index(OBJECT_STORE_INDEX_NAME);
              keyRange = IDBKeyRange.only(value);
              request = objectStoreIndex.openCursor(keyRange);
              return [2, new Promise(function(resolve4, reject) {
                request.onerror = reject;
                request.onsuccess = function(_a3) {
                  var target = _a3.target;
                  return onResolve2(target, resolve4);
                };
              })];
          }
        });
      });
    };
  };
  var isIndexedDBSupport = function() {
    return Boolean(indexedDB);
  };
  var deleteRecordInstance = function(_a) {
    var initializeObjectStore = _a.initializeObjectStore;
    return function(key) {
      return __awaiter(void 0, void 0, void 0, function() {
        var objectStore;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, initializeObjectStore("readwrite")];
            case 1:
              objectStore = _a2.sent();
              return [2, new Promise(function(resolve4, reject) {
                var request = objectStore.delete(key);
                request.onerror = reject;
                request.onsuccess = function() {
                  return resolve4();
                };
              })];
          }
        });
      });
    };
  };
  var openIndexedDBConnection = function(databaseName, databaseVersion) {
    return indexedDB.open(databaseName, databaseVersion);
  };
  var initializeObjectStoreInstance = function(_a) {
    var databaseName = _a.databaseName, databaseVersion = _a.databaseVersion, objectStoreName = _a.objectStoreName;
    return function(type) {
      return __awaiter(void 0, void 0, void 0, function() {
        var database, transaction;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, initializeDatabase({
                databaseName,
                databaseVersion,
                objectStoreName
              })];
            case 1:
              database = _a2.sent();
              transaction = database.transaction(objectStoreName, type);
              return [2, transaction.objectStore(objectStoreName)];
          }
        });
      });
    };
  };
  var isString$1 = function(value) {
    return typeof value === "string" || value instanceof String;
  };
  var pathRegExp = new RegExp(IS_VALID_PATH_REG_EXP_STRING);
  function isValidPath(path2) {
    if (!isString$1(path2)) {
      return false;
    }
    return pathRegExp.test(path2);
  }
  var tryCatchWrapper = function(func, onError) {
    return __awaiter(void 0, void 0, void 0, function() {
      var error_1;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);
            return [4, func()];
          case 1:
            return [2, _a.sent()];
          case 2:
            error_1 = _a.sent();
            if (onError) {
              onError(error_1);
            }
            return [3, 3];
          case 3:
            return [2, null];
        }
      });
    });
  };
  function startsWithSlash(fullPath) {
    if (!isString$1(fullPath) || fullPath.length === 0) {
      return false;
    }
    return fullPath[0] === "/";
  }
  function normalizeArray(parts, allowAboveRoot) {
    var up = 0;
    for (var i = parts.length - 1; i >= 0; i--) {
      var last = parts[i];
      if (last === ".") {
        parts.splice(i, 1);
      } else if (last === "..") {
        parts.splice(i, 1);
        up++;
      } else if (up) {
        parts.splice(i, 1);
        up--;
      }
    }
    if (allowAboveRoot) {
      for (; up--; up) {
        parts.unshift("..");
      }
    }
    return parts;
  }
  var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
  var splitPath = function(filename) {
    return splitPathRe.exec(filename).slice(1);
  };
  function resolve() {
    var resolvedPath = "", resolvedAbsolute = false;
    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path2 = i >= 0 ? arguments[i] : "/";
      if (typeof path2 !== "string") {
        throw new TypeError("Arguments to path.resolve must be strings");
      } else if (!path2) {
        continue;
      }
      resolvedPath = path2 + "/" + resolvedPath;
      resolvedAbsolute = path2.charAt(0) === "/";
    }
    resolvedPath = normalizeArray(filter(resolvedPath.split("/"), function(p) {
      return !!p;
    }), !resolvedAbsolute).join("/");
    return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
  }
  function normalize(path2) {
    var isPathAbsolute = isAbsolute(path2), trailingSlash = substr(path2, -1) === "/";
    path2 = normalizeArray(filter(path2.split("/"), function(p) {
      return !!p;
    }), !isPathAbsolute).join("/");
    if (!path2 && !isPathAbsolute) {
      path2 = ".";
    }
    if (path2 && trailingSlash) {
      path2 += "/";
    }
    return (isPathAbsolute ? "/" : "") + path2;
  }
  function isAbsolute(path2) {
    return path2.charAt(0) === "/";
  }
  function join() {
    var paths = Array.prototype.slice.call(arguments, 0);
    return normalize(filter(paths, function(p, index) {
      if (typeof p !== "string") {
        throw new TypeError("Arguments to path.join must be strings");
      }
      return p;
    }).join("/"));
  }
  function relative(from, to) {
    from = resolve(from).substr(1);
    to = resolve(to).substr(1);
    function trim(arr) {
      var start = 0;
      for (; start < arr.length; start++) {
        if (arr[start] !== "")
          break;
      }
      var end = arr.length - 1;
      for (; end >= 0; end--) {
        if (arr[end] !== "")
          break;
      }
      if (start > end)
        return [];
      return arr.slice(start, end - start + 1);
    }
    var fromParts = trim(from.split("/"));
    var toParts = trim(to.split("/"));
    var length = Math.min(fromParts.length, toParts.length);
    var samePartsLength = length;
    for (var i = 0; i < length; i++) {
      if (fromParts[i] !== toParts[i]) {
        samePartsLength = i;
        break;
      }
    }
    var outputParts = [];
    for (var i = samePartsLength; i < fromParts.length; i++) {
      outputParts.push("..");
    }
    outputParts = outputParts.concat(toParts.slice(samePartsLength));
    return outputParts.join("/");
  }
  var sep = "/";
  var delimiter$1 = ":";
  function dirname(path2) {
    var result = splitPath(path2), root = result[0], dir = result[1];
    if (!root && !dir) {
      return ".";
    }
    if (dir) {
      dir = dir.substr(0, dir.length - 1);
    }
    return root + dir;
  }
  function basename(path2, ext) {
    var f = splitPath(path2)[2];
    if (ext && f.substr(-1 * ext.length) === ext) {
      f = f.substr(0, f.length - ext.length);
    }
    return f;
  }
  function extname(path2) {
    return splitPath(path2)[3];
  }
  var path = {
    extname,
    basename,
    dirname,
    sep,
    delimiter: delimiter$1,
    relative,
    join,
    isAbsolute,
    normalize,
    resolve
  };
  function filter(xs, f) {
    if (xs.filter)
      return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
      if (f(xs[i], i, xs))
        res.push(xs[i]);
    }
    return res;
  }
  var substr = "ab".substr(-1) === "b" ? function(str, start, len) {
    return str.substr(start, len);
  } : function(str, start, len) {
    if (start < 0)
      start = str.length + start;
    return str.substr(start, len);
  };
  function getDirectoryName(fullPath, rootDirectoryName) {
    var directoryName = path.dirname(fullPath);
    if (directoryName === ".") {
      return rootDirectoryName;
    }
    return directoryName;
  }
  function getAugmentedNamespace(n) {
    if (n.__esModule)
      return n;
    var f = n.default;
    if (typeof f == "function") {
      var a = function a2() {
        if (this instanceof a2) {
          var args = [null];
          args.push.apply(args, arguments);
          var Ctor = Function.bind.apply(f, args);
          return new Ctor();
        }
        return f.apply(this, arguments);
      };
      a.prototype = f.prototype;
    } else
      a = {};
    Object.defineProperty(a, "__esModule", { value: true });
    Object.keys(n).forEach(function(k) {
      var d = Object.getOwnPropertyDescriptor(n, k);
      Object.defineProperty(a, k, d.get ? d : {
        enumerable: true,
        get: function() {
          return n[k];
        }
      });
    });
    return a;
  }
  var global$1 = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
  var maxInt = 2147483647;
  var base = 36;
  var tMin = 1;
  var tMax = 26;
  var skew = 38;
  var damp = 700;
  var initialBias = 72;
  var initialN = 128;
  var delimiter = "-";
  var regexNonASCII = /[^\x20-\x7E]/;
  var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
  var errors = {
    "overflow": "Overflow: input needs wider integers to process",
    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
    "invalid-input": "Invalid input"
  };
  var baseMinusTMin = base - tMin;
  var floor = Math.floor;
  var stringFromCharCode = String.fromCharCode;
  function error(type) {
    throw new RangeError(errors[type]);
  }
  function map$1(array, fn) {
    var length = array.length;
    var result = [];
    while (length--) {
      result[length] = fn(array[length]);
    }
    return result;
  }
  function mapDomain(string, fn) {
    var parts = string.split("@");
    var result = "";
    if (parts.length > 1) {
      result = parts[0] + "@";
      string = parts[1];
    }
    string = string.replace(regexSeparators, ".");
    var labels = string.split(".");
    var encoded = map$1(labels, fn).join(".");
    return result + encoded;
  }
  function ucs2decode(string) {
    var output = [], counter = 0, length = string.length, value, extra;
    while (counter < length) {
      value = string.charCodeAt(counter++);
      if (value >= 55296 && value <= 56319 && counter < length) {
        extra = string.charCodeAt(counter++);
        if ((extra & 64512) == 56320) {
          output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
        } else {
          output.push(value);
          counter--;
        }
      } else {
        output.push(value);
      }
    }
    return output;
  }
  function digitToBasic(digit, flag) {
    return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
  }
  function adapt(delta, numPoints, firstTime) {
    var k = 0;
    delta = firstTime ? floor(delta / damp) : delta >> 1;
    delta += floor(delta / numPoints);
    for (; delta > baseMinusTMin * tMax >> 1; k += base) {
      delta = floor(delta / baseMinusTMin);
    }
    return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
  }
  function encode(input) {
    var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, output = [], inputLength, handledCPCountPlusOne, baseMinusT, qMinusT;
    input = ucs2decode(input);
    inputLength = input.length;
    n = initialN;
    delta = 0;
    bias = initialBias;
    for (j = 0; j < inputLength; ++j) {
      currentValue = input[j];
      if (currentValue < 128) {
        output.push(stringFromCharCode(currentValue));
      }
    }
    handledCPCount = basicLength = output.length;
    if (basicLength) {
      output.push(delimiter);
    }
    while (handledCPCount < inputLength) {
      for (m = maxInt, j = 0; j < inputLength; ++j) {
        currentValue = input[j];
        if (currentValue >= n && currentValue < m) {
          m = currentValue;
        }
      }
      handledCPCountPlusOne = handledCPCount + 1;
      if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
        error("overflow");
      }
      delta += (m - n) * handledCPCountPlusOne;
      n = m;
      for (j = 0; j < inputLength; ++j) {
        currentValue = input[j];
        if (currentValue < n && ++delta > maxInt) {
          error("overflow");
        }
        if (currentValue == n) {
          for (q = delta, k = base; ; k += base) {
            t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
            if (q < t) {
              break;
            }
            qMinusT = q - t;
            baseMinusT = base - t;
            output.push(
              stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
            );
            q = floor(qMinusT / baseMinusT);
          }
          output.push(stringFromCharCode(digitToBasic(q, 0)));
          bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
          delta = 0;
          ++handledCPCount;
        }
      }
      ++delta;
      ++n;
    }
    return output.join("");
  }
  function toASCII(input) {
    return mapDomain(input, function(string) {
      return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
    });
  }
  function isNull(arg) {
    return arg === null;
  }
  function isNullOrUndefined(arg) {
    return arg == null;
  }
  function isString(arg) {
    return typeof arg === "string";
  }
  function isObject(arg) {
    return typeof arg === "object" && arg !== null;
  }
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  var isArray = Array.isArray || function(xs) {
    return Object.prototype.toString.call(xs) === "[object Array]";
  };
  function stringifyPrimitive(v) {
    switch (typeof v) {
      case "string":
        return v;
      case "boolean":
        return v ? "true" : "false";
      case "number":
        return isFinite(v) ? v : "";
      default:
        return "";
    }
  }
  function stringify(obj, sep2, eq, name) {
    sep2 = sep2 || "&";
    eq = eq || "=";
    if (obj === null) {
      obj = void 0;
    }
    if (typeof obj === "object") {
      return map(objectKeys(obj), function(k) {
        var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
        if (isArray(obj[k])) {
          return map(obj[k], function(v) {
            return ks + encodeURIComponent(stringifyPrimitive(v));
          }).join(sep2);
        } else {
          return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
        }
      }).join(sep2);
    }
    if (!name)
      return "";
    return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
  }
  function map(xs, f) {
    if (xs.map)
      return xs.map(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
      res.push(f(xs[i], i));
    }
    return res;
  }
  var objectKeys = Object.keys || function(obj) {
    var res = [];
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key))
        res.push(key);
    }
    return res;
  };
  function parse$1(qs, sep2, eq, options) {
    sep2 = sep2 || "&";
    eq = eq || "=";
    var obj = {};
    if (typeof qs !== "string" || qs.length === 0) {
      return obj;
    }
    var regexp = /\+/g;
    qs = qs.split(sep2);
    var maxKeys = 1e3;
    if (options && typeof options.maxKeys === "number") {
      maxKeys = options.maxKeys;
    }
    var len = qs.length;
    if (maxKeys > 0 && len > maxKeys) {
      len = maxKeys;
    }
    for (var i = 0; i < len; ++i) {
      var x = qs[i].replace(regexp, "%20"), idx = x.indexOf(eq), kstr, vstr, k, v;
      if (idx >= 0) {
        kstr = x.substr(0, idx);
        vstr = x.substr(idx + 1);
      } else {
        kstr = x;
        vstr = "";
      }
      k = decodeURIComponent(kstr);
      v = decodeURIComponent(vstr);
      if (!hasOwnProperty(obj, k)) {
        obj[k] = v;
      } else if (isArray(obj[k])) {
        obj[k].push(v);
      } else {
        obj[k] = [obj[k], v];
      }
    }
    return obj;
  }
  var URL2 = global$1.URL;
  var URLSearchParams = global$1.URLSearchParams;
  var _polyfillNode_url = {
    parse: urlParse,
    resolve: urlResolve,
    resolveObject: urlResolveObject,
    fileURLToPath: urlFileURLToPath,
    format: urlFormat,
    Url,
    // WHATWG API
    URL: URL2,
    URLSearchParams
  };
  function Url() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.host = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.query = null;
    this.pathname = null;
    this.path = null;
    this.href = null;
  }
  var protocolPattern = /^([a-z0-9.+-]+:)/i;
  var portPattern = /:[0-9]*$/;
  var simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
  var delims = ["<", ">", '"', "`", " ", "\r", "\n", "	"];
  var unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims);
  var autoEscape = ["'"].concat(unwise);
  var nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape);
  var hostEndingChars = ["/", "?", "#"];
  var hostnameMaxLen = 255;
  var hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/;
  var hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
  var unsafeProtocol = {
    "javascript": true,
    "javascript:": true
  };
  var hostlessProtocol = {
    "javascript": true,
    "javascript:": true
  };
  var slashedProtocol = {
    "http": true,
    "https": true,
    "ftp": true,
    "gopher": true,
    "file": true,
    "http:": true,
    "https:": true,
    "ftp:": true,
    "gopher:": true,
    "file:": true
  };
  function urlParse(url, parseQueryString, slashesDenoteHost) {
    if (url && isObject(url) && url instanceof Url)
      return url;
    var u = new Url();
    u.parse(url, parseQueryString, slashesDenoteHost);
    return u;
  }
  Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
    return parse(this, url, parseQueryString, slashesDenoteHost);
  };
  function parse(self2, url, parseQueryString, slashesDenoteHost) {
    if (!isString(url)) {
      throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
    }
    var queryIndex = url.indexOf("?"), splitter = queryIndex !== -1 && queryIndex < url.indexOf("#") ? "?" : "#", uSplit = url.split(splitter), slashRegex = /\\/g;
    uSplit[0] = uSplit[0].replace(slashRegex, "/");
    url = uSplit.join(splitter);
    var rest = url;
    rest = rest.trim();
    if (!slashesDenoteHost && url.split("#").length === 1) {
      var simplePath = simplePathPattern.exec(rest);
      if (simplePath) {
        self2.path = rest;
        self2.href = rest;
        self2.pathname = simplePath[1];
        if (simplePath[2]) {
          self2.search = simplePath[2];
          if (parseQueryString) {
            self2.query = parse$1(self2.search.substr(1));
          } else {
            self2.query = self2.search.substr(1);
          }
        } else if (parseQueryString) {
          self2.search = "";
          self2.query = {};
        }
        return self2;
      }
    }
    var proto = protocolPattern.exec(rest);
    if (proto) {
      proto = proto[0];
      var lowerProto = proto.toLowerCase();
      self2.protocol = lowerProto;
      rest = rest.substr(proto.length);
    }
    if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var slashes = rest.substr(0, 2) === "//";
      if (slashes && !(proto && hostlessProtocol[proto])) {
        rest = rest.substr(2);
        self2.slashes = true;
      }
    }
    var i, hec, l, p;
    if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
      var hostEnd = -1;
      for (i = 0; i < hostEndingChars.length; i++) {
        hec = rest.indexOf(hostEndingChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
          hostEnd = hec;
      }
      var auth, atSign;
      if (hostEnd === -1) {
        atSign = rest.lastIndexOf("@");
      } else {
        atSign = rest.lastIndexOf("@", hostEnd);
      }
      if (atSign !== -1) {
        auth = rest.slice(0, atSign);
        rest = rest.slice(atSign + 1);
        self2.auth = decodeURIComponent(auth);
      }
      hostEnd = -1;
      for (i = 0; i < nonHostChars.length; i++) {
        hec = rest.indexOf(nonHostChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
          hostEnd = hec;
      }
      if (hostEnd === -1)
        hostEnd = rest.length;
      self2.host = rest.slice(0, hostEnd);
      rest = rest.slice(hostEnd);
      parseHost(self2);
      self2.hostname = self2.hostname || "";
      var ipv6Hostname = self2.hostname[0] === "[" && self2.hostname[self2.hostname.length - 1] === "]";
      if (!ipv6Hostname) {
        var hostparts = self2.hostname.split(/\./);
        for (i = 0, l = hostparts.length; i < l; i++) {
          var part = hostparts[i];
          if (!part)
            continue;
          if (!part.match(hostnamePartPattern)) {
            var newpart = "";
            for (var j = 0, k = part.length; j < k; j++) {
              if (part.charCodeAt(j) > 127) {
                newpart += "x";
              } else {
                newpart += part[j];
              }
            }
            if (!newpart.match(hostnamePartPattern)) {
              var validParts = hostparts.slice(0, i);
              var notHost = hostparts.slice(i + 1);
              var bit = part.match(hostnamePartStart);
              if (bit) {
                validParts.push(bit[1]);
                notHost.unshift(bit[2]);
              }
              if (notHost.length) {
                rest = "/" + notHost.join(".") + rest;
              }
              self2.hostname = validParts.join(".");
              break;
            }
          }
        }
      }
      if (self2.hostname.length > hostnameMaxLen) {
        self2.hostname = "";
      } else {
        self2.hostname = self2.hostname.toLowerCase();
      }
      if (!ipv6Hostname) {
        self2.hostname = toASCII(self2.hostname);
      }
      p = self2.port ? ":" + self2.port : "";
      var h = self2.hostname || "";
      self2.host = h + p;
      self2.href += self2.host;
      if (ipv6Hostname) {
        self2.hostname = self2.hostname.substr(1, self2.hostname.length - 2);
        if (rest[0] !== "/") {
          rest = "/" + rest;
        }
      }
    }
    if (!unsafeProtocol[lowerProto]) {
      for (i = 0, l = autoEscape.length; i < l; i++) {
        var ae = autoEscape[i];
        if (rest.indexOf(ae) === -1)
          continue;
        var esc = encodeURIComponent(ae);
        if (esc === ae) {
          esc = escape(ae);
        }
        rest = rest.split(ae).join(esc);
      }
    }
    var hash = rest.indexOf("#");
    if (hash !== -1) {
      self2.hash = rest.substr(hash);
      rest = rest.slice(0, hash);
    }
    var qm = rest.indexOf("?");
    if (qm !== -1) {
      self2.search = rest.substr(qm);
      self2.query = rest.substr(qm + 1);
      if (parseQueryString) {
        self2.query = parse$1(self2.query);
      }
      rest = rest.slice(0, qm);
    } else if (parseQueryString) {
      self2.search = "";
      self2.query = {};
    }
    if (rest)
      self2.pathname = rest;
    if (slashedProtocol[lowerProto] && self2.hostname && !self2.pathname) {
      self2.pathname = "/";
    }
    if (self2.pathname || self2.search) {
      p = self2.pathname || "";
      var s = self2.search || "";
      self2.path = p + s;
    }
    self2.href = format(self2);
    return self2;
  }
  function urlFileURLToPath(path2) {
    if (typeof path2 === "string")
      path2 = new Url().parse(path2);
    else if (!(path2 instanceof Url))
      throw new TypeError('The "path" argument must be of type string or an instance of URL. Received type ' + typeof path2 + String(path2));
    if (path2.protocol !== "file:")
      throw new TypeError("The URL must be of scheme file");
    return getPathFromURLPosix(path2);
  }
  function getPathFromURLPosix(url) {
    const pathname = url.pathname;
    for (let n = 0; n < pathname.length; n++) {
      if (pathname[n] === "%") {
        const third = pathname.codePointAt(n + 2) | 32;
        if (pathname[n + 1] === "2" && third === 102) {
          throw new TypeError(
            "must not include encoded / characters"
          );
        }
      }
    }
    return decodeURIComponent(pathname);
  }
  function urlFormat(obj) {
    if (isString(obj))
      obj = parse({}, obj);
    return format(obj);
  }
  function format(self2) {
    var auth = self2.auth || "";
    if (auth) {
      auth = encodeURIComponent(auth);
      auth = auth.replace(/%3A/i, ":");
      auth += "@";
    }
    var protocol = self2.protocol || "", pathname = self2.pathname || "", hash = self2.hash || "", host = false, query = "";
    if (self2.host) {
      host = auth + self2.host;
    } else if (self2.hostname) {
      host = auth + (self2.hostname.indexOf(":") === -1 ? self2.hostname : "[" + this.hostname + "]");
      if (self2.port) {
        host += ":" + self2.port;
      }
    }
    if (self2.query && isObject(self2.query) && Object.keys(self2.query).length) {
      query = stringify(self2.query);
    }
    var search = self2.search || query && "?" + query || "";
    if (protocol && protocol.substr(-1) !== ":")
      protocol += ":";
    if (self2.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
      host = "//" + (host || "");
      if (pathname && pathname.charAt(0) !== "/")
        pathname = "/" + pathname;
    } else if (!host) {
      host = "";
    }
    if (hash && hash.charAt(0) !== "#")
      hash = "#" + hash;
    if (search && search.charAt(0) !== "?")
      search = "?" + search;
    pathname = pathname.replace(/[?#]/g, function(match) {
      return encodeURIComponent(match);
    });
    search = search.replace("#", "%23");
    return protocol + host + pathname + search + hash;
  }
  Url.prototype.format = function() {
    return format(this);
  };
  function urlResolve(source, relative2) {
    return urlParse(source, false, true).resolve(relative2);
  }
  Url.prototype.resolve = function(relative2) {
    return this.resolveObject(urlParse(relative2, false, true)).format();
  };
  function urlResolveObject(source, relative2) {
    if (!source)
      return relative2;
    return urlParse(source, false, true).resolveObject(relative2);
  }
  Url.prototype.resolveObject = function(relative2) {
    if (isString(relative2)) {
      var rel = new Url();
      rel.parse(relative2, false, true);
      relative2 = rel;
    }
    var result = new Url();
    var tkeys = Object.keys(this);
    for (var tk = 0; tk < tkeys.length; tk++) {
      var tkey = tkeys[tk];
      result[tkey] = this[tkey];
    }
    result.hash = relative2.hash;
    if (relative2.href === "") {
      result.href = result.format();
      return result;
    }
    if (relative2.slashes && !relative2.protocol) {
      var rkeys = Object.keys(relative2);
      for (var rk = 0; rk < rkeys.length; rk++) {
        var rkey = rkeys[rk];
        if (rkey !== "protocol")
          result[rkey] = relative2[rkey];
      }
      if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
        result.path = result.pathname = "/";
      }
      result.href = result.format();
      return result;
    }
    var relPath;
    if (relative2.protocol && relative2.protocol !== result.protocol) {
      if (!slashedProtocol[relative2.protocol]) {
        var keys = Object.keys(relative2);
        for (var v = 0; v < keys.length; v++) {
          var k = keys[v];
          result[k] = relative2[k];
        }
        result.href = result.format();
        return result;
      }
      result.protocol = relative2.protocol;
      if (!relative2.host && !hostlessProtocol[relative2.protocol]) {
        relPath = (relative2.pathname || "").split("/");
        while (relPath.length && !(relative2.host = relPath.shift()))
          ;
        if (!relative2.host)
          relative2.host = "";
        if (!relative2.hostname)
          relative2.hostname = "";
        if (relPath[0] !== "")
          relPath.unshift("");
        if (relPath.length < 2)
          relPath.unshift("");
        result.pathname = relPath.join("/");
      } else {
        result.pathname = relative2.pathname;
      }
      result.search = relative2.search;
      result.query = relative2.query;
      result.host = relative2.host || "";
      result.auth = relative2.auth;
      result.hostname = relative2.hostname || relative2.host;
      result.port = relative2.port;
      if (result.pathname || result.search) {
        var p = result.pathname || "";
        var s = result.search || "";
        result.path = p + s;
      }
      result.slashes = result.slashes || relative2.slashes;
      result.href = result.format();
      return result;
    }
    var isSourceAbs = result.pathname && result.pathname.charAt(0) === "/", isRelAbs = relative2.host || relative2.pathname && relative2.pathname.charAt(0) === "/", mustEndAbs = isRelAbs || isSourceAbs || result.host && relative2.pathname, removeAllDots = mustEndAbs, srcPath = result.pathname && result.pathname.split("/") || [], psychotic = result.protocol && !slashedProtocol[result.protocol];
    relPath = relative2.pathname && relative2.pathname.split("/") || [];
    if (psychotic) {
      result.hostname = "";
      result.port = null;
      if (result.host) {
        if (srcPath[0] === "")
          srcPath[0] = result.host;
        else
          srcPath.unshift(result.host);
      }
      result.host = "";
      if (relative2.protocol) {
        relative2.hostname = null;
        relative2.port = null;
        if (relative2.host) {
          if (relPath[0] === "")
            relPath[0] = relative2.host;
          else
            relPath.unshift(relative2.host);
        }
        relative2.host = null;
      }
      mustEndAbs = mustEndAbs && (relPath[0] === "" || srcPath[0] === "");
    }
    var authInHost;
    if (isRelAbs) {
      result.host = relative2.host || relative2.host === "" ? relative2.host : result.host;
      result.hostname = relative2.hostname || relative2.hostname === "" ? relative2.hostname : result.hostname;
      result.search = relative2.search;
      result.query = relative2.query;
      srcPath = relPath;
    } else if (relPath.length) {
      if (!srcPath)
        srcPath = [];
      srcPath.pop();
      srcPath = srcPath.concat(relPath);
      result.search = relative2.search;
      result.query = relative2.query;
    } else if (!isNullOrUndefined(relative2.search)) {
      if (psychotic) {
        result.hostname = result.host = srcPath.shift();
        authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
        if (authInHost) {
          result.auth = authInHost.shift();
          result.host = result.hostname = authInHost.shift();
        }
      }
      result.search = relative2.search;
      result.query = relative2.query;
      if (!isNull(result.pathname) || !isNull(result.search)) {
        result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
      }
      result.href = result.format();
      return result;
    }
    if (!srcPath.length) {
      result.pathname = null;
      if (result.search) {
        result.path = "/" + result.search;
      } else {
        result.path = null;
      }
      result.href = result.format();
      return result;
    }
    var last = srcPath.slice(-1)[0];
    var hasTrailingSlash = (result.host || relative2.host || srcPath.length > 1) && (last === "." || last === "..") || last === "";
    var up = 0;
    for (var i = srcPath.length; i >= 0; i--) {
      last = srcPath[i];
      if (last === ".") {
        srcPath.splice(i, 1);
      } else if (last === "..") {
        srcPath.splice(i, 1);
        up++;
      } else if (up) {
        srcPath.splice(i, 1);
        up--;
      }
    }
    if (!mustEndAbs && !removeAllDots) {
      for (; up--; up) {
        srcPath.unshift("..");
      }
    }
    if (mustEndAbs && srcPath[0] !== "" && (!srcPath[0] || srcPath[0].charAt(0) !== "/")) {
      srcPath.unshift("");
    }
    if (hasTrailingSlash && srcPath.join("/").substr(-1) !== "/") {
      srcPath.push("");
    }
    var isAbsolute2 = srcPath[0] === "" || srcPath[0] && srcPath[0].charAt(0) === "/";
    if (psychotic) {
      result.hostname = result.host = isAbsolute2 ? "" : srcPath.length ? srcPath.shift() : "";
      authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    mustEndAbs = mustEndAbs || result.host && srcPath.length;
    if (mustEndAbs && !isAbsolute2) {
      srcPath.unshift("");
    }
    if (!srcPath.length) {
      result.pathname = null;
      result.path = null;
    } else {
      result.pathname = srcPath.join("/");
    }
    if (!isNull(result.pathname) || !isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
    }
    result.auth = relative2.auth || result.auth;
    result.slashes = result.slashes || relative2.slashes;
    result.href = result.format();
    return result;
  };
  Url.prototype.parseHost = function() {
    return parseHost(this);
  };
  function parseHost(self2) {
    var host = self2.host;
    var port = portPattern.exec(host);
    if (port) {
      port = port[0];
      if (port !== ":") {
        self2.port = port.substr(1);
      }
      host = host.substr(0, host.length - port.length);
    }
    if (host)
      self2.hostname = host;
  }
  var _polyfillNode_url$1 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    URL: URL2,
    URLSearchParams,
    Url,
    default: _polyfillNode_url,
    fileURLToPath: urlFileURLToPath,
    format: urlFormat,
    parse: urlParse,
    resolve: urlResolve,
    resolveObject: urlResolveObject
  });
  var require$$0 = /* @__PURE__ */ getAugmentedNamespace(_polyfillNode_url$1);
  var helpers$3 = {};
  var uri = require$$0;
  var ValidationError = helpers$3.ValidationError = function ValidationError2(message, instance, schema, path2, name, argument) {
    if (Array.isArray(path2)) {
      this.path = path2;
      this.property = path2.reduce(function(sum, item) {
        return sum + makeSuffix(item);
      }, "instance");
    } else if (path2 !== void 0) {
      this.property = path2;
    }
    if (message) {
      this.message = message;
    }
    if (schema) {
      var id = schema.$id || schema.id;
      this.schema = id || schema;
    }
    if (instance !== void 0) {
      this.instance = instance;
    }
    this.name = name;
    this.argument = argument;
    this.stack = this.toString();
  };
  ValidationError.prototype.toString = function toString() {
    return this.property + " " + this.message;
  };
  var ValidatorResult$2 = helpers$3.ValidatorResult = function ValidatorResult(instance, schema, options, ctx) {
    this.instance = instance;
    this.schema = schema;
    this.options = options;
    this.path = ctx.path;
    this.propertyPath = ctx.propertyPath;
    this.errors = [];
    this.throwError = options && options.throwError;
    this.throwFirst = options && options.throwFirst;
    this.throwAll = options && options.throwAll;
    this.disableFormat = options && options.disableFormat === true;
  };
  ValidatorResult$2.prototype.addError = function addError(detail) {
    var err2;
    if (typeof detail == "string") {
      err2 = new ValidationError(detail, this.instance, this.schema, this.path);
    } else {
      if (!detail)
        throw new Error("Missing error detail");
      if (!detail.message)
        throw new Error("Missing error message");
      if (!detail.name)
        throw new Error("Missing validator type");
      err2 = new ValidationError(detail.message, this.instance, this.schema, this.path, detail.name, detail.argument);
    }
    this.errors.push(err2);
    if (this.throwFirst) {
      throw new ValidatorResultError$1(this);
    } else if (this.throwError) {
      throw err2;
    }
    return err2;
  };
  ValidatorResult$2.prototype.importErrors = function importErrors(res) {
    if (typeof res == "string" || res && res.validatorType) {
      this.addError(res);
    } else if (res && res.errors) {
      this.errors = this.errors.concat(res.errors);
    }
  };
  function stringizer(v, i) {
    return i + ": " + v.toString() + "\n";
  }
  ValidatorResult$2.prototype.toString = function toString2(res) {
    return this.errors.map(stringizer).join("");
  };
  Object.defineProperty(ValidatorResult$2.prototype, "valid", { get: function() {
    return !this.errors.length;
  } });
  helpers$3.ValidatorResultError = ValidatorResultError$1;
  function ValidatorResultError$1(result) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidatorResultError$1);
    }
    this.instance = result.instance;
    this.schema = result.schema;
    this.options = result.options;
    this.errors = result.errors;
  }
  ValidatorResultError$1.prototype = new Error();
  ValidatorResultError$1.prototype.constructor = ValidatorResultError$1;
  ValidatorResultError$1.prototype.name = "Validation Error";
  var SchemaError$2 = helpers$3.SchemaError = function SchemaError(msg, schema) {
    this.message = msg;
    this.schema = schema;
    Error.call(this, msg);
    Error.captureStackTrace(this, SchemaError);
  };
  SchemaError$2.prototype = Object.create(
    Error.prototype,
    {
      constructor: { value: SchemaError$2, enumerable: false },
      name: { value: "SchemaError", enumerable: false }
    }
  );
  var SchemaContext$1 = helpers$3.SchemaContext = function SchemaContext(schema, options, path2, base2, schemas) {
    this.schema = schema;
    this.options = options;
    if (Array.isArray(path2)) {
      this.path = path2;
      this.propertyPath = path2.reduce(function(sum, item) {
        return sum + makeSuffix(item);
      }, "instance");
    } else {
      this.propertyPath = path2;
    }
    this.base = base2;
    this.schemas = schemas;
  };
  SchemaContext$1.prototype.resolve = function resolve2(target) {
    return uri.resolve(this.base, target);
  };
  SchemaContext$1.prototype.makeChild = function makeChild(schema, propertyName) {
    var path2 = propertyName === void 0 ? this.path : this.path.concat([propertyName]);
    var id = schema.$id || schema.id;
    var base2 = uri.resolve(this.base, id || "");
    var ctx = new SchemaContext$1(schema, this.options, path2, base2, Object.create(this.schemas));
    if (id && !ctx.schemas[base2]) {
      ctx.schemas[base2] = schema;
    }
    return ctx;
  };
  var FORMAT_REGEXPS = helpers$3.FORMAT_REGEXPS = {
    // 7.3.1. Dates, Times, and Duration
    "date-time": /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])[tT ](2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])(\.\d+)?([zZ]|[+-]([0-5][0-9]):(60|[0-5][0-9]))$/,
    "date": /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])$/,
    "time": /^(2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])$/,
    "duration": /P(T\d+(H(\d+M(\d+S)?)?|M(\d+S)?|S)|\d+(D|M(\d+D)?|Y(\d+M(\d+D)?)?)(T\d+(H(\d+M(\d+S)?)?|M(\d+S)?|S))?|\d+W)/i,
    // 7.3.2. Email Addresses
    // TODO: fix the email production
    "email": /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,
    "idn-email": /^("(?:[!#-\[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*|\[[!-Z\^-\u{10FFFF}]*\])$/u,
    // 7.3.3. Hostnames
    // 7.3.4. IP Addresses
    "ip-address": /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    // FIXME whitespace is invalid
    "ipv6": /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
    // 7.3.5. Resource Identifiers
    // TODO: A more accurate regular expression for "uri" goes:
    // [A-Za-z][+\-.0-9A-Za-z]*:((/(/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?)?#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(/(/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])|/?%[0-9A-Fa-f]{2}|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*(#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?|/(/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)?)?
    "uri": /^[a-zA-Z][a-zA-Z0-9+.-]*:[^\s]*$/,
    "uri-reference": /^(((([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|([A-Za-z][+\-.0-9A-Za-z]*:?)?)|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?))#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(([A-Za-z][+\-.0-9A-Za-z]*)?%[0-9A-Fa-f]{2}|[!$&-.0-9;=@_~]|[A-Za-z][+\-.0-9A-Za-z]*[!$&-*,;=@_~])(%[0-9A-Fa-f]{2}|[!$&-.0-9;=@-Z_a-z~])*((([/?](%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?#|[/?])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?|([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)?|[A-Za-z][+\-.0-9A-Za-z]*:?)?$/,
    "iri": /^[a-zA-Z][a-zA-Z0-9+.-]*:[^\s]*$/,
    "iri-reference": /^(((([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~-\u{10FFFF}]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|([A-Za-z][+\-.0-9A-Za-z]*:?)?)|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|(\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?))#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|(([A-Za-z][+\-.0-9A-Za-z]*)?%[0-9A-Fa-f]{2}|[!$&-.0-9;=@_~-\u{10FFFF}]|[A-Za-z][+\-.0-9A-Za-z]*[!$&-*,;=@_~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-.0-9;=@-Z_a-z~-\u{10FFFF}])*((([/?](%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*)?#|[/?])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*)?|([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~-\u{10FFFF}]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)?|[A-Za-z][+\-.0-9A-Za-z]*:?)?$/u,
    "uuid": /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    // 7.3.6. uri-template
    "uri-template": /(%[0-9a-f]{2}|[!#$&(-;=?@\[\]_a-z~]|\{[!#&+,./;=?@|]?(%[0-9a-f]{2}|[0-9_a-z])(\.?(%[0-9a-f]{2}|[0-9_a-z]))*(:[1-9]\d{0,3}|\*)?(,(%[0-9a-f]{2}|[0-9_a-z])(\.?(%[0-9a-f]{2}|[0-9_a-z]))*(:[1-9]\d{0,3}|\*)?)*\})*/iu,
    // 7.3.7. JSON Pointers
    "json-pointer": /^(\/([\x00-\x2e0-@\[-}\x7f]|~[01])*)*$/iu,
    "relative-json-pointer": /^\d+(#|(\/([\x00-\x2e0-@\[-}\x7f]|~[01])*)*)$/iu,
    // hostname regex from: http://stackoverflow.com/a/1420225/5628
    "hostname": /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
    "host-name": /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
    "utc-millisec": function(input) {
      return typeof input === "string" && parseFloat(input) === parseInt(input, 10) && !isNaN(input);
    },
    // 7.3.8. regex
    "regex": function(input) {
      var result = true;
      try {
        new RegExp(input);
      } catch (e) {
        result = false;
      }
      return result;
    },
    // Other definitions
    // "style" was removed from JSON Schema in draft-4 and is deprecated
    "style": /[\r\n\t ]*[^\r\n\t ][^:]*:[\r\n\t ]*[^\r\n\t ;]*[\r\n\t ]*;?/,
    // "color" was removed from JSON Schema in draft-4 and is deprecated
    "color": /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,
    "phone": /^\+(?:[0-9] ?){6,14}[0-9]$/,
    "alpha": /^[a-zA-Z]+$/,
    "alphanumeric": /^[a-zA-Z0-9]+$/
  };
  FORMAT_REGEXPS.regexp = FORMAT_REGEXPS.regex;
  FORMAT_REGEXPS.pattern = FORMAT_REGEXPS.regex;
  FORMAT_REGEXPS.ipv4 = FORMAT_REGEXPS["ip-address"];
  helpers$3.isFormat = function isFormat(input, format2, validator2) {
    if (typeof input === "string" && FORMAT_REGEXPS[format2] !== void 0) {
      if (FORMAT_REGEXPS[format2] instanceof RegExp) {
        return FORMAT_REGEXPS[format2].test(input);
      }
      if (typeof FORMAT_REGEXPS[format2] === "function") {
        return FORMAT_REGEXPS[format2](input);
      }
    } else if (validator2 && validator2.customFormats && typeof validator2.customFormats[format2] === "function") {
      return validator2.customFormats[format2](input);
    }
    return true;
  };
  var makeSuffix = helpers$3.makeSuffix = function makeSuffix2(key) {
    key = key.toString();
    if (!key.match(/[.\s\[\]]/) && !key.match(/^[\d]/)) {
      return "." + key;
    }
    if (key.match(/^\d+$/)) {
      return "[" + key + "]";
    }
    return "[" + JSON.stringify(key) + "]";
  };
  helpers$3.deepCompareStrict = function deepCompareStrict(a, b) {
    if (typeof a !== typeof b) {
      return false;
    }
    if (Array.isArray(a)) {
      if (!Array.isArray(b)) {
        return false;
      }
      if (a.length !== b.length) {
        return false;
      }
      return a.every(function(v, i) {
        return deepCompareStrict(a[i], b[i]);
      });
    }
    if (typeof a === "object") {
      if (!a || !b) {
        return a === b;
      }
      var aKeys = Object.keys(a);
      var bKeys = Object.keys(b);
      if (aKeys.length !== bKeys.length) {
        return false;
      }
      return aKeys.every(function(v) {
        return deepCompareStrict(a[v], b[v]);
      });
    }
    return a === b;
  };
  function deepMerger(target, dst, e, i) {
    if (typeof e === "object") {
      dst[i] = deepMerge(target[i], e);
    } else {
      if (target.indexOf(e) === -1) {
        dst.push(e);
      }
    }
  }
  function copyist(src, dst, key) {
    dst[key] = src[key];
  }
  function copyistWithDeepMerge(target, src, dst, key) {
    if (typeof src[key] !== "object" || !src[key]) {
      dst[key] = src[key];
    } else {
      if (!target[key]) {
        dst[key] = src[key];
      } else {
        dst[key] = deepMerge(target[key], src[key]);
      }
    }
  }
  function deepMerge(target, src) {
    var array = Array.isArray(src);
    var dst = array && [] || {};
    if (array) {
      target = target || [];
      dst = dst.concat(target);
      src.forEach(deepMerger.bind(null, target, dst));
    } else {
      if (target && typeof target === "object") {
        Object.keys(target).forEach(copyist.bind(null, target, dst));
      }
      Object.keys(src).forEach(copyistWithDeepMerge.bind(null, target, src, dst));
    }
    return dst;
  }
  helpers$3.deepMerge = deepMerge;
  helpers$3.objectGetPath = function objectGetPath(o, s) {
    var parts = s.split("/").slice(1);
    var k;
    while (typeof (k = parts.shift()) == "string") {
      var n = decodeURIComponent(k.replace(/~0/, "~").replace(/~1/g, "/"));
      if (!(n in o))
        return;
      o = o[n];
    }
    return o;
  };
  function pathEncoder(v) {
    return "/" + encodeURIComponent(v).replace(/~/g, "%7E");
  }
  helpers$3.encodePath = function encodePointer(a) {
    return a.map(pathEncoder).join("");
  };
  helpers$3.getDecimalPlaces = function getDecimalPlaces(number) {
    var decimalPlaces = 0;
    if (isNaN(number))
      return decimalPlaces;
    if (typeof number !== "number") {
      number = Number(number);
    }
    var parts = number.toString().split("e");
    if (parts.length === 2) {
      if (parts[1][0] !== "-") {
        return decimalPlaces;
      } else {
        decimalPlaces = Number(parts[1].slice(1));
      }
    }
    var decimalParts = parts[0].split(".");
    if (decimalParts.length === 2) {
      decimalPlaces += decimalParts[1].length;
    }
    return decimalPlaces;
  };
  helpers$3.isSchema = function isSchema(val) {
    return typeof val === "object" && val || typeof val === "boolean";
  };
  var helpers$2 = helpers$3;
  var ValidatorResult$1 = helpers$2.ValidatorResult;
  var SchemaError$1 = helpers$2.SchemaError;
  var attribute$1 = {};
  attribute$1.ignoreProperties = {
    // informative properties
    "id": true,
    "default": true,
    "description": true,
    "title": true,
    // arguments to other properties
    "additionalItems": true,
    "then": true,
    "else": true,
    // special-handled properties
    "$schema": true,
    "$ref": true,
    "extends": true
  };
  var validators = attribute$1.validators = {};
  validators.type = function validateType(instance, schema, options, ctx) {
    if (instance === void 0) {
      return null;
    }
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    var types2 = Array.isArray(schema.type) ? schema.type : [schema.type];
    if (!types2.some(this.testType.bind(this, instance, schema, options, ctx))) {
      var list = types2.map(function(v) {
        if (!v)
          return;
        var id = v.$id || v.id;
        return id ? "<" + id + ">" : v + "";
      });
      result.addError({
        name: "type",
        argument: list,
        message: "is not of a type(s) " + list
      });
    }
    return result;
  };
  function testSchemaNoThrow(instance, options, ctx, callback, schema) {
    var throwError = options.throwError;
    var throwAll = options.throwAll;
    options.throwError = false;
    options.throwAll = false;
    var res = this.validateSchema(instance, schema, options, ctx);
    options.throwError = throwError;
    options.throwAll = throwAll;
    if (!res.valid && callback instanceof Function) {
      callback(res);
    }
    return res.valid;
  }
  validators.anyOf = function validateAnyOf(instance, schema, options, ctx) {
    if (instance === void 0) {
      return null;
    }
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    var inner = new ValidatorResult$1(instance, schema, options, ctx);
    if (!Array.isArray(schema.anyOf)) {
      throw new SchemaError$1("anyOf must be an array");
    }
    if (!schema.anyOf.some(
      testSchemaNoThrow.bind(
        this,
        instance,
        options,
        ctx,
        function(res) {
          inner.importErrors(res);
        }
      )
    )) {
      var list = schema.anyOf.map(function(v, i) {
        var id = v.$id || v.id;
        if (id)
          return "<" + id + ">";
        return v.title && JSON.stringify(v.title) || v["$ref"] && "<" + v["$ref"] + ">" || "[subschema " + i + "]";
      });
      if (options.nestedErrors) {
        result.importErrors(inner);
      }
      result.addError({
        name: "anyOf",
        argument: list,
        message: "is not any of " + list.join(",")
      });
    }
    return result;
  };
  validators.allOf = function validateAllOf(instance, schema, options, ctx) {
    if (instance === void 0) {
      return null;
    }
    if (!Array.isArray(schema.allOf)) {
      throw new SchemaError$1("allOf must be an array");
    }
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    var self2 = this;
    schema.allOf.forEach(function(v, i) {
      var valid = self2.validateSchema(instance, v, options, ctx);
      if (!valid.valid) {
        var id = v.$id || v.id;
        var msg = id || v.title && JSON.stringify(v.title) || v["$ref"] && "<" + v["$ref"] + ">" || "[subschema " + i + "]";
        result.addError({
          name: "allOf",
          argument: { id: msg, length: valid.errors.length, valid },
          message: "does not match allOf schema " + msg + " with " + valid.errors.length + " error[s]:"
        });
        result.importErrors(valid);
      }
    });
    return result;
  };
  validators.oneOf = function validateOneOf(instance, schema, options, ctx) {
    if (instance === void 0) {
      return null;
    }
    if (!Array.isArray(schema.oneOf)) {
      throw new SchemaError$1("oneOf must be an array");
    }
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    var inner = new ValidatorResult$1(instance, schema, options, ctx);
    var count = schema.oneOf.filter(
      testSchemaNoThrow.bind(
        this,
        instance,
        options,
        ctx,
        function(res) {
          inner.importErrors(res);
        }
      )
    ).length;
    var list = schema.oneOf.map(function(v, i) {
      var id = v.$id || v.id;
      return id || v.title && JSON.stringify(v.title) || v["$ref"] && "<" + v["$ref"] + ">" || "[subschema " + i + "]";
    });
    if (count !== 1) {
      if (options.nestedErrors) {
        result.importErrors(inner);
      }
      result.addError({
        name: "oneOf",
        argument: list,
        message: "is not exactly one from " + list.join(",")
      });
    }
    return result;
  };
  validators.if = function validateIf(instance, schema, options, ctx) {
    if (instance === void 0)
      return null;
    if (!helpers$2.isSchema(schema.if))
      throw new Error('Expected "if" keyword to be a schema');
    var ifValid = testSchemaNoThrow.call(this, instance, options, ctx, null, schema.if);
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    var res;
    if (ifValid) {
      if (schema.then === void 0)
        return;
      if (!helpers$2.isSchema(schema.then))
        throw new Error('Expected "then" keyword to be a schema');
      res = this.validateSchema(instance, schema.then, options, ctx.makeChild(schema.then));
      result.importErrors(res);
    } else {
      if (schema.else === void 0)
        return;
      if (!helpers$2.isSchema(schema.else))
        throw new Error('Expected "else" keyword to be a schema');
      res = this.validateSchema(instance, schema.else, options, ctx.makeChild(schema.else));
      result.importErrors(res);
    }
    return result;
  };
  function getEnumerableProperty(object, key) {
    if (Object.hasOwnProperty.call(object, key))
      return object[key];
    if (!(key in object))
      return;
    while (object = Object.getPrototypeOf(object)) {
      if (Object.propertyIsEnumerable.call(object, key))
        return object[key];
    }
  }
  validators.propertyNames = function validatePropertyNames(instance, schema, options, ctx) {
    if (!this.types.object(instance))
      return;
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    var subschema = schema.propertyNames !== void 0 ? schema.propertyNames : {};
    if (!helpers$2.isSchema(subschema))
      throw new SchemaError$1('Expected "propertyNames" to be a schema (object or boolean)');
    for (var property in instance) {
      if (getEnumerableProperty(instance, property) !== void 0) {
        var res = this.validateSchema(property, subschema, options, ctx.makeChild(subschema));
        result.importErrors(res);
      }
    }
    return result;
  };
  validators.properties = function validateProperties(instance, schema, options, ctx) {
    if (!this.types.object(instance))
      return;
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    var properties = schema.properties || {};
    for (var property in properties) {
      var subschema = properties[property];
      if (subschema === void 0) {
        continue;
      } else if (subschema === null) {
        throw new SchemaError$1('Unexpected null, expected schema in "properties"');
      }
      if (typeof options.preValidateProperty == "function") {
        options.preValidateProperty(instance, property, subschema, options, ctx);
      }
      var prop = getEnumerableProperty(instance, property);
      var res = this.validateSchema(prop, subschema, options, ctx.makeChild(subschema, property));
      if (res.instance !== result.instance[property])
        result.instance[property] = res.instance;
      result.importErrors(res);
    }
    return result;
  };
  function testAdditionalProperty(instance, schema, options, ctx, property, result) {
    if (!this.types.object(instance))
      return;
    if (schema.properties && schema.properties[property] !== void 0) {
      return;
    }
    if (schema.additionalProperties === false) {
      result.addError({
        name: "additionalProperties",
        argument: property,
        message: "is not allowed to have the additional property " + JSON.stringify(property)
      });
    } else {
      var additionalProperties = schema.additionalProperties || {};
      if (typeof options.preValidateProperty == "function") {
        options.preValidateProperty(instance, property, additionalProperties, options, ctx);
      }
      var res = this.validateSchema(instance[property], additionalProperties, options, ctx.makeChild(additionalProperties, property));
      if (res.instance !== result.instance[property])
        result.instance[property] = res.instance;
      result.importErrors(res);
    }
  }
  validators.patternProperties = function validatePatternProperties(instance, schema, options, ctx) {
    if (!this.types.object(instance))
      return;
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    var patternProperties = schema.patternProperties || {};
    for (var property in instance) {
      var test = true;
      for (var pattern in patternProperties) {
        var subschema = patternProperties[pattern];
        if (subschema === void 0) {
          continue;
        } else if (subschema === null) {
          throw new SchemaError$1('Unexpected null, expected schema in "patternProperties"');
        }
        try {
          var regexp = new RegExp(pattern, "u");
        } catch (_e) {
          regexp = new RegExp(pattern);
        }
        if (!regexp.test(property)) {
          continue;
        }
        test = false;
        if (typeof options.preValidateProperty == "function") {
          options.preValidateProperty(instance, property, subschema, options, ctx);
        }
        var res = this.validateSchema(instance[property], subschema, options, ctx.makeChild(subschema, property));
        if (res.instance !== result.instance[property])
          result.instance[property] = res.instance;
        result.importErrors(res);
      }
      if (test) {
        testAdditionalProperty.call(this, instance, schema, options, ctx, property, result);
      }
    }
    return result;
  };
  validators.additionalProperties = function validateAdditionalProperties(instance, schema, options, ctx) {
    if (!this.types.object(instance))
      return;
    if (schema.patternProperties) {
      return null;
    }
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    for (var property in instance) {
      testAdditionalProperty.call(this, instance, schema, options, ctx, property, result);
    }
    return result;
  };
  validators.minProperties = function validateMinProperties(instance, schema, options, ctx) {
    if (!this.types.object(instance))
      return;
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    var keys = Object.keys(instance);
    if (!(keys.length >= schema.minProperties)) {
      result.addError({
        name: "minProperties",
        argument: schema.minProperties,
        message: "does not meet minimum property length of " + schema.minProperties
      });
    }
    return result;
  };
  validators.maxProperties = function validateMaxProperties(instance, schema, options, ctx) {
    if (!this.types.object(instance))
      return;
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    var keys = Object.keys(instance);
    if (!(keys.length <= schema.maxProperties)) {
      result.addError({
        name: "maxProperties",
        argument: schema.maxProperties,
        message: "does not meet maximum property length of " + schema.maxProperties
      });
    }
    return result;
  };
  validators.items = function validateItems(instance, schema, options, ctx) {
    var self2 = this;
    if (!this.types.array(instance))
      return;
    if (schema.items === void 0)
      return;
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    instance.every(function(value, i) {
      if (Array.isArray(schema.items)) {
        var items = schema.items[i] === void 0 ? schema.additionalItems : schema.items[i];
      } else {
        var items = schema.items;
      }
      if (items === void 0) {
        return true;
      }
      if (items === false) {
        result.addError({
          name: "items",
          message: "additionalItems not permitted"
        });
        return false;
      }
      var res = self2.validateSchema(value, items, options, ctx.makeChild(items, i));
      if (res.instance !== result.instance[i])
        result.instance[i] = res.instance;
      result.importErrors(res);
      return true;
    });
    return result;
  };
  validators.contains = function validateContains(instance, schema, options, ctx) {
    var self2 = this;
    if (!this.types.array(instance))
      return;
    if (schema.contains === void 0)
      return;
    if (!helpers$2.isSchema(schema.contains))
      throw new Error('Expected "contains" keyword to be a schema');
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    var count = instance.some(function(value, i) {
      var res = self2.validateSchema(value, schema.contains, options, ctx.makeChild(schema.contains, i));
      return res.errors.length === 0;
    });
    if (count === false) {
      result.addError({
        name: "contains",
        argument: schema.contains,
        message: "must contain an item matching given schema"
      });
    }
    return result;
  };
  validators.minimum = function validateMinimum(instance, schema, options, ctx) {
    if (!this.types.number(instance))
      return;
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    if (schema.exclusiveMinimum && schema.exclusiveMinimum === true) {
      if (!(instance > schema.minimum)) {
        result.addError({
          name: "minimum",
          argument: schema.minimum,
          message: "must be greater than " + schema.minimum
        });
      }
    } else {
      if (!(instance >= schema.minimum)) {
        result.addError({
          name: "minimum",
          argument: schema.minimum,
          message: "must be greater than or equal to " + schema.minimum
        });
      }
    }
    return result;
  };
  validators.maximum = function validateMaximum(instance, schema, options, ctx) {
    if (!this.types.number(instance))
      return;
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    if (schema.exclusiveMaximum && schema.exclusiveMaximum === true) {
      if (!(instance < schema.maximum)) {
        result.addError({
          name: "maximum",
          argument: schema.maximum,
          message: "must be less than " + schema.maximum
        });
      }
    } else {
      if (!(instance <= schema.maximum)) {
        result.addError({
          name: "maximum",
          argument: schema.maximum,
          message: "must be less than or equal to " + schema.maximum
        });
      }
    }
    return result;
  };
  validators.exclusiveMinimum = function validateExclusiveMinimum(instance, schema, options, ctx) {
    if (typeof schema.exclusiveMinimum === "boolean")
      return;
    if (!this.types.number(instance))
      return;
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    var valid = instance > schema.exclusiveMinimum;
    if (!valid) {
      result.addError({
        name: "exclusiveMinimum",
        argument: schema.exclusiveMinimum,
        message: "must be strictly greater than " + schema.exclusiveMinimum
      });
    }
    return result;
  };
  validators.exclusiveMaximum = function validateExclusiveMaximum(instance, schema, options, ctx) {
    if (typeof schema.exclusiveMaximum === "boolean")
      return;
    if (!this.types.number(instance))
      return;
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    var valid = instance < schema.exclusiveMaximum;
    if (!valid) {
      result.addError({
        name: "exclusiveMaximum",
        argument: schema.exclusiveMaximum,
        message: "must be strictly less than " + schema.exclusiveMaximum
      });
    }
    return result;
  };
  var validateMultipleOfOrDivisbleBy = function validateMultipleOfOrDivisbleBy2(instance, schema, options, ctx, validationType, errorMessage) {
    if (!this.types.number(instance))
      return;
    var validationArgument = schema[validationType];
    if (validationArgument == 0) {
      throw new SchemaError$1(validationType + " cannot be zero");
    }
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    var instanceDecimals = helpers$2.getDecimalPlaces(instance);
    var divisorDecimals = helpers$2.getDecimalPlaces(validationArgument);
    var maxDecimals = Math.max(instanceDecimals, divisorDecimals);
    var multiplier = Math.pow(10, maxDecimals);
    if (Math.round(instance * multiplier) % Math.round(validationArgument * multiplier) !== 0) {
      result.addError({
        name: validationType,
        argument: validationArgument,
        message: errorMessage + JSON.stringify(validationArgument)
      });
    }
    return result;
  };
  validators.multipleOf = function validateMultipleOf(instance, schema, options, ctx) {
    return validateMultipleOfOrDivisbleBy.call(this, instance, schema, options, ctx, "multipleOf", "is not a multiple of (divisible by) ");
  };
  validators.divisibleBy = function validateDivisibleBy(instance, schema, options, ctx) {
    return validateMultipleOfOrDivisbleBy.call(this, instance, schema, options, ctx, "divisibleBy", "is not divisible by (multiple of) ");
  };
  validators.required = function validateRequired(instance, schema, options, ctx) {
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    if (instance === void 0 && schema.required === true) {
      result.addError({
        name: "required",
        message: "is required"
      });
    } else if (this.types.object(instance) && Array.isArray(schema.required)) {
      schema.required.forEach(function(n) {
        if (getEnumerableProperty(instance, n) === void 0) {
          result.addError({
            name: "required",
            argument: n,
            message: "requires property " + JSON.stringify(n)
          });
        }
      });
    }
    return result;
  };
  validators.pattern = function validatePattern(instance, schema, options, ctx) {
    if (!this.types.string(instance))
      return;
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    var pattern = schema.pattern;
    try {
      var regexp = new RegExp(pattern, "u");
    } catch (_e) {
      regexp = new RegExp(pattern);
    }
    if (!instance.match(regexp)) {
      result.addError({
        name: "pattern",
        argument: schema.pattern,
        message: "does not match pattern " + JSON.stringify(schema.pattern.toString())
      });
    }
    return result;
  };
  validators.format = function validateFormat(instance, schema, options, ctx) {
    if (instance === void 0)
      return;
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    if (!result.disableFormat && !helpers$2.isFormat(instance, schema.format, this)) {
      result.addError({
        name: "format",
        argument: schema.format,
        message: "does not conform to the " + JSON.stringify(schema.format) + " format"
      });
    }
    return result;
  };
  validators.minLength = function validateMinLength(instance, schema, options, ctx) {
    if (!this.types.string(instance))
      return;
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    var hsp = instance.match(/[\uDC00-\uDFFF]/g);
    var length = instance.length - (hsp ? hsp.length : 0);
    if (!(length >= schema.minLength)) {
      result.addError({
        name: "minLength",
        argument: schema.minLength,
        message: "does not meet minimum length of " + schema.minLength
      });
    }
    return result;
  };
  validators.maxLength = function validateMaxLength(instance, schema, options, ctx) {
    if (!this.types.string(instance))
      return;
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    var hsp = instance.match(/[\uDC00-\uDFFF]/g);
    var length = instance.length - (hsp ? hsp.length : 0);
    if (!(length <= schema.maxLength)) {
      result.addError({
        name: "maxLength",
        argument: schema.maxLength,
        message: "does not meet maximum length of " + schema.maxLength
      });
    }
    return result;
  };
  validators.minItems = function validateMinItems(instance, schema, options, ctx) {
    if (!this.types.array(instance))
      return;
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    if (!(instance.length >= schema.minItems)) {
      result.addError({
        name: "minItems",
        argument: schema.minItems,
        message: "does not meet minimum length of " + schema.minItems
      });
    }
    return result;
  };
  validators.maxItems = function validateMaxItems(instance, schema, options, ctx) {
    if (!this.types.array(instance))
      return;
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    if (!(instance.length <= schema.maxItems)) {
      result.addError({
        name: "maxItems",
        argument: schema.maxItems,
        message: "does not meet maximum length of " + schema.maxItems
      });
    }
    return result;
  };
  function testArrays(v, i, a) {
    var j, len = a.length;
    for (j = i + 1, len; j < len; j++) {
      if (helpers$2.deepCompareStrict(v, a[j])) {
        return false;
      }
    }
    return true;
  }
  validators.uniqueItems = function validateUniqueItems(instance, schema, options, ctx) {
    if (schema.uniqueItems !== true)
      return;
    if (!this.types.array(instance))
      return;
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    if (!instance.every(testArrays)) {
      result.addError({
        name: "uniqueItems",
        message: "contains duplicate item"
      });
    }
    return result;
  };
  validators.dependencies = function validateDependencies(instance, schema, options, ctx) {
    if (!this.types.object(instance))
      return;
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    for (var property in schema.dependencies) {
      if (instance[property] === void 0) {
        continue;
      }
      var dep = schema.dependencies[property];
      var childContext = ctx.makeChild(dep, property);
      if (typeof dep == "string") {
        dep = [dep];
      }
      if (Array.isArray(dep)) {
        dep.forEach(function(prop) {
          if (instance[prop] === void 0) {
            result.addError({
              // FIXME there's two different "dependencies" errors here with slightly different outputs
              // Can we make these the same? Or should we create different error types?
              name: "dependencies",
              argument: childContext.propertyPath,
              message: "property " + prop + " not found, required by " + childContext.propertyPath
            });
          }
        });
      } else {
        var res = this.validateSchema(instance, dep, options, childContext);
        if (result.instance !== res.instance)
          result.instance = res.instance;
        if (res && res.errors.length) {
          result.addError({
            name: "dependencies",
            argument: childContext.propertyPath,
            message: "does not meet dependency required by " + childContext.propertyPath
          });
          result.importErrors(res);
        }
      }
    }
    return result;
  };
  validators["enum"] = function validateEnum(instance, schema, options, ctx) {
    if (instance === void 0) {
      return null;
    }
    if (!Array.isArray(schema["enum"])) {
      throw new SchemaError$1("enum expects an array", schema);
    }
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    if (!schema["enum"].some(helpers$2.deepCompareStrict.bind(null, instance))) {
      result.addError({
        name: "enum",
        argument: schema["enum"],
        message: "is not one of enum values: " + schema["enum"].map(String).join(",")
      });
    }
    return result;
  };
  validators["const"] = function validateEnum2(instance, schema, options, ctx) {
    if (instance === void 0) {
      return null;
    }
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    if (!helpers$2.deepCompareStrict(schema["const"], instance)) {
      result.addError({
        name: "const",
        argument: schema["const"],
        message: "does not exactly match expected constant: " + schema["const"]
      });
    }
    return result;
  };
  validators.not = validators.disallow = function validateNot(instance, schema, options, ctx) {
    var self2 = this;
    if (instance === void 0)
      return null;
    var result = new ValidatorResult$1(instance, schema, options, ctx);
    var notTypes = schema.not || schema.disallow;
    if (!notTypes)
      return null;
    if (!Array.isArray(notTypes))
      notTypes = [notTypes];
    notTypes.forEach(function(type) {
      if (self2.testType(instance, schema, options, ctx, type)) {
        var id = type && (type.$id || type.id);
        var schemaId = id || type;
        result.addError({
          name: "not",
          argument: schemaId,
          message: "is of prohibited type " + schemaId
        });
      }
    });
    return result;
  };
  var attribute_1 = attribute$1;
  var scan = {};
  var urilib$1 = require$$0;
  var helpers$1 = helpers$3;
  scan.SchemaScanResult = SchemaScanResult;
  function SchemaScanResult(found, ref) {
    this.id = found;
    this.ref = ref;
  }
  scan.scan = function scan2(base2, schema) {
    function scanSchema2(baseuri, schema2) {
      if (!schema2 || typeof schema2 != "object")
        return;
      if (schema2.$ref) {
        var resolvedUri = urilib$1.resolve(baseuri, schema2.$ref);
        ref[resolvedUri] = ref[resolvedUri] ? ref[resolvedUri] + 1 : 0;
        return;
      }
      var id = schema2.$id || schema2.id;
      var ourBase = id ? urilib$1.resolve(baseuri, id) : baseuri;
      if (ourBase) {
        if (ourBase.indexOf("#") < 0)
          ourBase += "#";
        if (found[ourBase]) {
          if (!helpers$1.deepCompareStrict(found[ourBase], schema2)) {
            throw new Error("Schema <" + ourBase + "> already exists with different definition");
          }
          return found[ourBase];
        }
        found[ourBase] = schema2;
        if (ourBase[ourBase.length - 1] == "#") {
          found[ourBase.substring(0, ourBase.length - 1)] = schema2;
        }
      }
      scanArray(ourBase + "/items", Array.isArray(schema2.items) ? schema2.items : [schema2.items]);
      scanArray(ourBase + "/extends", Array.isArray(schema2.extends) ? schema2.extends : [schema2.extends]);
      scanSchema2(ourBase + "/additionalItems", schema2.additionalItems);
      scanObject(ourBase + "/properties", schema2.properties);
      scanSchema2(ourBase + "/additionalProperties", schema2.additionalProperties);
      scanObject(ourBase + "/definitions", schema2.definitions);
      scanObject(ourBase + "/patternProperties", schema2.patternProperties);
      scanObject(ourBase + "/dependencies", schema2.dependencies);
      scanArray(ourBase + "/disallow", schema2.disallow);
      scanArray(ourBase + "/allOf", schema2.allOf);
      scanArray(ourBase + "/anyOf", schema2.anyOf);
      scanArray(ourBase + "/oneOf", schema2.oneOf);
      scanSchema2(ourBase + "/not", schema2.not);
    }
    function scanArray(baseuri, schemas) {
      if (!Array.isArray(schemas))
        return;
      for (var i = 0; i < schemas.length; i++) {
        scanSchema2(baseuri + "/" + i, schemas[i]);
      }
    }
    function scanObject(baseuri, schemas) {
      if (!schemas || typeof schemas != "object")
        return;
      for (var p in schemas) {
        scanSchema2(baseuri + "/" + p, schemas[p]);
      }
    }
    var found = {};
    var ref = {};
    scanSchema2(base2, schema);
    return new SchemaScanResult(found, ref);
  };
  var urilib = require$$0;
  var attribute = attribute_1;
  var helpers = helpers$3;
  var scanSchema = scan.scan;
  var ValidatorResult2 = helpers.ValidatorResult;
  var ValidatorResultError = helpers.ValidatorResultError;
  var SchemaError2 = helpers.SchemaError;
  var SchemaContext2 = helpers.SchemaContext;
  var anonymousBase = "/";
  var Validator$1 = function Validator() {
    this.customFormats = Object.create(Validator.prototype.customFormats);
    this.schemas = {};
    this.unresolvedRefs = [];
    this.types = Object.create(types);
    this.attributes = Object.create(attribute.validators);
  };
  Validator$1.prototype.customFormats = {};
  Validator$1.prototype.schemas = null;
  Validator$1.prototype.types = null;
  Validator$1.prototype.attributes = null;
  Validator$1.prototype.unresolvedRefs = null;
  Validator$1.prototype.addSchema = function addSchema(schema, base2) {
    var self2 = this;
    if (!schema) {
      return null;
    }
    var scan3 = scanSchema(base2 || anonymousBase, schema);
    var ourUri = base2 || schema.$id || schema.id;
    for (var uri2 in scan3.id) {
      this.schemas[uri2] = scan3.id[uri2];
    }
    for (var uri2 in scan3.ref) {
      this.unresolvedRefs.push(uri2);
    }
    this.unresolvedRefs = this.unresolvedRefs.filter(function(uri3) {
      return typeof self2.schemas[uri3] === "undefined";
    });
    return this.schemas[ourUri];
  };
  Validator$1.prototype.addSubSchemaArray = function addSubSchemaArray(baseuri, schemas) {
    if (!Array.isArray(schemas))
      return;
    for (var i = 0; i < schemas.length; i++) {
      this.addSubSchema(baseuri, schemas[i]);
    }
  };
  Validator$1.prototype.addSubSchemaObject = function addSubSchemaArray2(baseuri, schemas) {
    if (!schemas || typeof schemas != "object")
      return;
    for (var p in schemas) {
      this.addSubSchema(baseuri, schemas[p]);
    }
  };
  Validator$1.prototype.setSchemas = function setSchemas(schemas) {
    this.schemas = schemas;
  };
  Validator$1.prototype.getSchema = function getSchema(urn) {
    return this.schemas[urn];
  };
  Validator$1.prototype.validate = function validate(instance, schema, options, ctx) {
    if (typeof schema !== "boolean" && typeof schema !== "object" || schema === null) {
      throw new SchemaError2("Expected `schema` to be an object or boolean");
    }
    if (!options) {
      options = {};
    }
    var id = schema.$id || schema.id;
    var base2 = urilib.resolve(options.base || anonymousBase, id || "");
    if (!ctx) {
      ctx = new SchemaContext2(schema, options, [], base2, Object.create(this.schemas));
      if (!ctx.schemas[base2]) {
        ctx.schemas[base2] = schema;
      }
      var found = scanSchema(base2, schema);
      for (var n in found.id) {
        var sch = found.id[n];
        ctx.schemas[n] = sch;
      }
    }
    if (options.required && instance === void 0) {
      var result = new ValidatorResult2(instance, schema, options, ctx);
      result.addError("is required, but is undefined");
      return result;
    }
    var result = this.validateSchema(instance, schema, options, ctx);
    if (!result) {
      throw new Error("Result undefined");
    } else if (options.throwAll && result.errors.length) {
      throw new ValidatorResultError(result);
    }
    return result;
  };
  function shouldResolve(schema) {
    var ref = typeof schema === "string" ? schema : schema.$ref;
    if (typeof ref == "string")
      return ref;
    return false;
  }
  Validator$1.prototype.validateSchema = function validateSchema(instance, schema, options, ctx) {
    var result = new ValidatorResult2(instance, schema, options, ctx);
    if (typeof schema === "boolean") {
      if (schema === true) {
        schema = {};
      } else if (schema === false) {
        schema = { type: [] };
      }
    } else if (!schema) {
      throw new Error("schema is undefined");
    }
    if (schema["extends"]) {
      if (Array.isArray(schema["extends"])) {
        var schemaobj = { schema, ctx };
        schema["extends"].forEach(this.schemaTraverser.bind(this, schemaobj));
        schema = schemaobj.schema;
        schemaobj.schema = null;
        schemaobj.ctx = null;
        schemaobj = null;
      } else {
        schema = helpers.deepMerge(schema, this.superResolve(schema["extends"], ctx));
      }
    }
    var switchSchema = shouldResolve(schema);
    if (switchSchema) {
      var resolved = this.resolve(schema, switchSchema, ctx);
      var subctx = new SchemaContext2(resolved.subschema, options, ctx.path, resolved.switchSchema, ctx.schemas);
      return this.validateSchema(instance, resolved.subschema, options, subctx);
    }
    var skipAttributes = options && options.skipAttributes || [];
    for (var key in schema) {
      if (!attribute.ignoreProperties[key] && skipAttributes.indexOf(key) < 0) {
        var validatorErr = null;
        var validator2 = this.attributes[key];
        if (validator2) {
          validatorErr = validator2.call(this, instance, schema, options, ctx);
        } else if (options.allowUnknownAttributes === false) {
          throw new SchemaError2("Unsupported attribute: " + key, schema);
        }
        if (validatorErr) {
          result.importErrors(validatorErr);
        }
      }
    }
    if (typeof options.rewrite == "function") {
      var value = options.rewrite.call(this, instance, schema, options, ctx);
      result.instance = value;
    }
    return result;
  };
  Validator$1.prototype.schemaTraverser = function schemaTraverser(schemaobj, s) {
    schemaobj.schema = helpers.deepMerge(schemaobj.schema, this.superResolve(s, schemaobj.ctx));
  };
  Validator$1.prototype.superResolve = function superResolve(schema, ctx) {
    var ref = shouldResolve(schema);
    if (ref) {
      return this.resolve(schema, ref, ctx).subschema;
    }
    return schema;
  };
  Validator$1.prototype.resolve = function resolve3(schema, switchSchema, ctx) {
    switchSchema = ctx.resolve(switchSchema);
    if (ctx.schemas[switchSchema]) {
      return { subschema: ctx.schemas[switchSchema], switchSchema };
    }
    var parsed = urilib.parse(switchSchema);
    var fragment = parsed && parsed.hash;
    var document2 = fragment && fragment.length && switchSchema.substr(0, switchSchema.length - fragment.length);
    if (!document2 || !ctx.schemas[document2]) {
      throw new SchemaError2("no such schema <" + switchSchema + ">", schema);
    }
    var subschema = helpers.objectGetPath(ctx.schemas[document2], fragment.substr(1));
    if (subschema === void 0) {
      throw new SchemaError2("no such schema " + fragment + " located in <" + document2 + ">", schema);
    }
    return { subschema, switchSchema };
  };
  Validator$1.prototype.testType = function validateType2(instance, schema, options, ctx, type) {
    if (type === void 0) {
      return;
    } else if (type === null) {
      throw new SchemaError2('Unexpected null in "type" keyword');
    }
    if (typeof this.types[type] == "function") {
      return this.types[type].call(this, instance);
    }
    if (type && typeof type == "object") {
      var res = this.validateSchema(instance, type, options, ctx);
      return res === void 0 || !(res && res.errors.length);
    }
    return true;
  };
  var types = Validator$1.prototype.types = {};
  types.string = function testString(instance) {
    return typeof instance == "string";
  };
  types.number = function testNumber(instance) {
    return typeof instance == "number" && isFinite(instance);
  };
  types.integer = function testInteger(instance) {
    return typeof instance == "number" && instance % 1 === 0;
  };
  types.boolean = function testBoolean(instance) {
    return typeof instance == "boolean";
  };
  types.array = function testArray(instance) {
    return Array.isArray(instance);
  };
  types["null"] = function testNull(instance) {
    return instance === null;
  };
  types.date = function testDate(instance) {
    return instance instanceof Date;
  };
  types.any = function testAny(instance) {
    return true;
  };
  types.object = function testObject(instance) {
    return instance && typeof instance === "object" && !Array.isArray(instance) && !(instance instanceof Date);
  };
  var validator = Validator$1;
  var Validator2 = validator;
  helpers$3.ValidatorResult;
  helpers$3.ValidatorResultError;
  helpers$3.ValidationError;
  helpers$3.SchemaError;
  var validate2 = function(instance, schema, options) {
    var v = new Validator2();
    return v.validate(instance, schema, options);
  };
  var stringRegExp = "^[a-zA-Z0-9_.-]*$";
  var createFsPropsSchema = {
    type: "object",
    id: "/CreateFsPropsSchema",
    properties: {
      databaseName: {
        minLength: 4,
        maxLength: 50,
        type: "string",
        pattern: stringRegExp
      },
      objectStoreName: {
        minLength: 1,
        maxLength: 20,
        type: "string",
        pattern: stringRegExp
      },
      rootDirectoryName: {
        minLength: 1,
        maxLength: 20,
        type: "string",
        pattern: stringRegExp
      },
      databaseVersion: {
        minimum: 1,
        maximum: 100,
        type: "integer"
      }
    },
    required: ["databaseName", "databaseVersion", "objectStoreName", "rootDirectoryName"]
  };
  function validateCreateFsProps(props) {
    var _a = validate2(props, createFsPropsSchema), errors2 = _a.errors, valid = _a.valid;
    if (valid) {
      return valid;
    }
    var errorsAsString = JSON.stringify(errors2);
    throw new Error("Props passed to createFS function are invalid:\n".concat(errorsAsString));
  }
  function hasRootDirectoryPrefix(fullPath, rootDirectoryName) {
    if (!isString$1(fullPath) || !isString$1(rootDirectoryName) || rootDirectoryName === "") {
      return false;
    }
    var rootDirectoryNameWithSlash = "".concat(rootDirectoryName, "/");
    return fullPath.startsWith(rootDirectoryNameWithSlash);
  }
  function withRootDirectoryPrefix(fullPath, rootDirectoryName) {
    if (fullPath === "") {
      return rootDirectoryName;
    }
    var isRootPrefix = hasRootDirectoryPrefix(fullPath, rootDirectoryName);
    if (!isRootPrefix) {
      var withFirstSlash = startsWithSlash(fullPath);
      return "".concat(rootDirectoryName).concat(withFirstSlash ? "" : "/").concat(fullPath);
    }
    return fullPath;
  }
  function formatAndValidateFullPath(fullPath, rootDirectoryName) {
    if (!isString$1(rootDirectoryName) || rootDirectoryName === "") {
      throw new Error("rootDirectoryName parameter was not provided");
    }
    if (!isString$1(fullPath)) {
      throw new Error("fullPath parameter was not provided");
    }
    if (fullPath === rootDirectoryName) {
      return rootDirectoryName;
    }
    var fullPathWithPrefix = withRootDirectoryPrefix(fullPath, rootDirectoryName);
    if (!fullPathWithPrefix || !isValidPath(fullPathWithPrefix)) {
      throw new Error('"'.concat(fullPath, '" path is invalid. Path must match the following pattern: /').concat(IS_VALID_PATH_REG_EXP_STRING, "/"));
    }
    return fullPathWithPrefix;
  }
  var defaultProps = {
    databaseVersion: 1,
    objectStoreName: "files",
    rootDirectoryName: "root",
    databaseName: "indexeddb-fs"
  };
  var onResolve$4 = function(_a) {
    var result = _a.result;
    return Boolean(result === null || result === void 0 ? void 0 : result.createdAt);
  };
  var existsInstance = function(_a) {
    var getRecord = _a.getRecord, rootDirectoryName = _a.rootDirectoryName;
    return function(fullPath) {
      return __awaiter(void 0, void 0, void 0, function() {
        var verifiedFullPath;
        return __generator(this, function(_a2) {
          verifiedFullPath = formatAndValidateFullPath(fullPath, rootDirectoryName);
          return [2, getRecord(verifiedFullPath, onResolve$4)];
        });
      });
    };
  };
  var removeInstance = function(_a) {
    var deleteRecord = _a.deleteRecord, exists = _a.exists, rootDirectoryName = _a.rootDirectoryName;
    return function(fullPath) {
      return __awaiter(void 0, void 0, void 0, function() {
        var verifiedFullPath, doesTargetExist;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              verifiedFullPath = formatAndValidateFullPath(fullPath, rootDirectoryName);
              return [4, exists(verifiedFullPath)];
            case 1:
              doesTargetExist = _a2.sent();
              if (!doesTargetExist) {
                throw new Error('"'.concat(verifiedFullPath, '" file or directory does not exist.'));
              }
              return [2, deleteRecord(verifiedFullPath)];
          }
        });
      });
    };
  };
  var detailsInstance = function(_a) {
    var directoryDetails = _a.directoryDetails, exists = _a.exists, fileDetails = _a.fileDetails, isDirectory = _a.isDirectory, isFile = _a.isFile, rootDirectoryName = _a.rootDirectoryName;
    return function(fullPath) {
      return __awaiter(void 0, void 0, void 0, function() {
        var verifiedFullPath, doesTargetExist, targetIsOfTypeFile, targetIsOfTypeDirectory;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              verifiedFullPath = formatAndValidateFullPath(fullPath, rootDirectoryName);
              return [4, exists(verifiedFullPath)];
            case 1:
              doesTargetExist = _a2.sent();
              if (!doesTargetExist) {
                throw new Error('"'.concat(verifiedFullPath, '" file or directory does not exist.'));
              }
              return [4, isFile(verifiedFullPath)];
            case 2:
              targetIsOfTypeFile = _a2.sent();
              return [4, isDirectory(verifiedFullPath)];
            case 3:
              targetIsOfTypeDirectory = _a2.sent();
              if (targetIsOfTypeFile && targetIsOfTypeDirectory) {
                throw new Error('"'.concat(verifiedFullPath, '" is a path of file and directory.'));
              }
              if (targetIsOfTypeFile) {
                return [2, fileDetails(verifiedFullPath)];
              }
              return [2, directoryDetails(verifiedFullPath)];
          }
        });
      });
    };
  };
  var EEntryType;
  (function(EEntryType2) {
    EEntryType2["DIRECTORY"] = "directory";
    EEntryType2["FILE"] = "file";
  })(EEntryType || (EEntryType = {}));
  var onResolve$3 = function(_a) {
    var result = _a.result;
    return Boolean((result === null || result === void 0 ? void 0 : result.type) === EEntryType.FILE);
  };
  var isFileInstance = function(_a) {
    var exists = _a.exists, getRecord = _a.getRecord, rootDirectoryName = _a.rootDirectoryName;
    return function(fullPath) {
      return __awaiter(void 0, void 0, void 0, function() {
        var verifiedFullPath, doesFileExist;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              verifiedFullPath = formatAndValidateFullPath(fullPath, rootDirectoryName);
              return [4, exists(verifiedFullPath)];
            case 1:
              doesFileExist = _a2.sent();
              if (!doesFileExist) {
                throw new Error('"'.concat(verifiedFullPath, '" file does not exist.'));
              }
              return [2, getRecord(verifiedFullPath, onResolve$3)];
          }
        });
      });
    };
  };
  var copyFileInstance = function(_a) {
    var exists = _a.exists, fileDetails = _a.fileDetails, isDirectory = _a.isDirectory, isFile = _a.isFile, rootDirectoryName = _a.rootDirectoryName, writeFile = _a.writeFile;
    return function(sourcePath, destinationPath) {
      return __awaiter(void 0, void 0, void 0, function() {
        var verifiedSourcePath, verifiedDestinationPath, sourceIsOfTypeFile, destinationDirectory, destinationDirectoryIsOfTypeDirectory, destinationPathIsAlreadyTaken, sourceFileDetails;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              verifiedSourcePath = formatAndValidateFullPath(sourcePath, rootDirectoryName);
              verifiedDestinationPath = formatAndValidateFullPath(destinationPath, rootDirectoryName);
              return [4, isFile(verifiedSourcePath)];
            case 1:
              sourceIsOfTypeFile = _a2.sent();
              if (!sourceIsOfTypeFile) {
                throw new Error('"'.concat(verifiedSourcePath, '" source is not a file.'));
              }
              destinationDirectory = getDirectoryName(verifiedDestinationPath, rootDirectoryName);
              return [4, isDirectory(destinationDirectory)];
            case 2:
              destinationDirectoryIsOfTypeDirectory = _a2.sent();
              if (!destinationDirectoryIsOfTypeDirectory) {
                throw new Error('"'.concat(destinationDirectory, '" destination directory does not exist.'));
              }
              return [4, exists(verifiedDestinationPath)];
            case 3:
              destinationPathIsAlreadyTaken = _a2.sent();
              if (destinationPathIsAlreadyTaken) {
                throw new Error('"'.concat(verifiedDestinationPath, '" is already taken.'));
              }
              return [4, fileDetails(verifiedSourcePath)];
            case 4:
              sourceFileDetails = _a2.sent();
              return [2, writeFile(verifiedDestinationPath, sourceFileDetails.data)];
          }
        });
      });
    };
  };
  var readFileInstance = function(_a) {
    var fileDetails = _a.fileDetails;
    return function(fullPath) {
      return __awaiter(void 0, void 0, void 0, function() {
        var result;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, fileDetails(fullPath)];
            case 1:
              result = _a2.sent();
              return [2, result.data];
          }
        });
      });
    };
  };
  var moveFileInstance = function(_a) {
    var exists = _a.exists, isDirectory = _a.isDirectory, isFile = _a.isFile, removeFile = _a.removeFile, rootDirectoryName = _a.rootDirectoryName, updateFileDetails = _a.updateFileDetails;
    return function(sourcePath, destinationPath) {
      return __awaiter(void 0, void 0, void 0, function() {
        var verifiedSourcePath, verifiedDestinationPath, sourceIsOfTypeFile, destinationDirectory, destinationDirectoryIsOfTypeDirectory, destinationPathIsAlreadyTaken, destinationFilename, newFileDetails;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              verifiedSourcePath = formatAndValidateFullPath(sourcePath, rootDirectoryName);
              verifiedDestinationPath = formatAndValidateFullPath(destinationPath, rootDirectoryName);
              return [4, isFile(verifiedSourcePath)];
            case 1:
              sourceIsOfTypeFile = _a2.sent();
              if (!sourceIsOfTypeFile) {
                throw new Error('"'.concat(verifiedSourcePath, '" source is not a file.'));
              }
              destinationDirectory = getDirectoryName(verifiedDestinationPath, rootDirectoryName);
              return [4, isDirectory(destinationDirectory)];
            case 2:
              destinationDirectoryIsOfTypeDirectory = _a2.sent();
              if (!destinationDirectoryIsOfTypeDirectory) {
                throw new Error('"'.concat(destinationDirectory, '" destination directory does not exist.'));
              }
              return [4, exists(verifiedDestinationPath)];
            case 3:
              destinationPathIsAlreadyTaken = _a2.sent();
              if (destinationPathIsAlreadyTaken) {
                throw new Error('"'.concat(verifiedDestinationPath, '" is already taken.'));
              }
              destinationFilename = path.basename(verifiedDestinationPath);
              return [4, updateFileDetails(verifiedSourcePath, {
                name: destinationFilename,
                directory: destinationDirectory,
                fullPath: verifiedDestinationPath
              })];
            case 4:
              newFileDetails = _a2.sent();
              return [4, removeFile(verifiedSourcePath)];
            case 5:
              _a2.sent();
              return [2, newFileDetails];
          }
        });
      });
    };
  };
  var writeFileInstance = function(_a) {
    var isDirectory = _a.isDirectory, putRecord = _a.putRecord, rootDirectoryName = _a.rootDirectoryName;
    return function(fullPath, data2) {
      return __awaiter(void 0, void 0, void 0, function() {
        var verifiedFullPath, basename2, directory, doesDirectoryExists, targetIsTypeOfDirectory, entry;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              verifiedFullPath = formatAndValidateFullPath(fullPath, rootDirectoryName);
              if (verifiedFullPath === rootDirectoryName) {
                throw new Error('Root directory: "'.concat(verifiedFullPath, '" cannot be a file.'));
              }
              basename2 = path.basename(verifiedFullPath);
              directory = getDirectoryName(verifiedFullPath, rootDirectoryName);
              return [4, isDirectory(directory)];
            case 1:
              doesDirectoryExists = _a2.sent();
              if (!doesDirectoryExists) {
                throw new Error('"'.concat(directory, '" directory does not exist.'));
              }
              return [4, tryCatchWrapper(function() {
                return isDirectory(verifiedFullPath);
              }, function() {
                return false;
              })];
            case 2:
              targetIsTypeOfDirectory = _a2.sent();
              if (targetIsTypeOfDirectory) {
                throw new Error('"'.concat(verifiedFullPath, '" you cannot create a file with the same name as the directory.'));
              }
              entry = {
                data: data2,
                directory,
                name: basename2,
                type: EEntryType.FILE,
                createdAt: Date.now(),
                fullPath: verifiedFullPath
              };
              return [2, putRecord(entry)];
          }
        });
      });
    };
  };
  var renameFileInstance = function(_a) {
    var exists = _a.exists, isFile = _a.isFile, removeFile = _a.removeFile, rootDirectoryName = _a.rootDirectoryName, updateFileDetails = _a.updateFileDetails;
    return function(fullPath, newFilename) {
      return __awaiter(void 0, void 0, void 0, function() {
        var verifiedFullPath, sourceIsOfTypeFile, pathDirectory, newFullPath, newFullPathIsAlreadyTaken, updatedFileDetails;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              verifiedFullPath = formatAndValidateFullPath(fullPath, rootDirectoryName);
              return [4, isFile(verifiedFullPath)];
            case 1:
              sourceIsOfTypeFile = _a2.sent();
              if (!sourceIsOfTypeFile) {
                throw new Error('"'.concat(verifiedFullPath, '" is not a file.'));
              }
              pathDirectory = getDirectoryName(verifiedFullPath, rootDirectoryName);
              newFullPath = "".concat(pathDirectory, "/").concat(newFilename);
              return [4, exists(newFullPath)];
            case 2:
              newFullPathIsAlreadyTaken = _a2.sent();
              if (newFullPathIsAlreadyTaken) {
                throw new Error('"'.concat(newFullPath, '" is already taken.'));
              }
              return [4, updateFileDetails(verifiedFullPath, {
                name: newFilename,
                fullPath: newFullPath
              })];
            case 3:
              updatedFileDetails = _a2.sent();
              return [4, removeFile(verifiedFullPath)];
            case 4:
              _a2.sent();
              return [2, updatedFileDetails];
          }
        });
      });
    };
  };
  var removeFileInstance = function(_a) {
    var deleteRecord = _a.deleteRecord, isFile = _a.isFile, rootDirectoryName = _a.rootDirectoryName;
    return function(fullPath) {
      return __awaiter(void 0, void 0, void 0, function() {
        var verifiedFullPath, targetIsOfTypeFile;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              verifiedFullPath = formatAndValidateFullPath(fullPath, rootDirectoryName);
              return [4, isFile(verifiedFullPath)];
            case 1:
              targetIsOfTypeFile = _a2.sent();
              if (!targetIsOfTypeFile) {
                throw new Error('"'.concat(verifiedFullPath, '" is not a file.'));
              }
              return [2, deleteRecord(verifiedFullPath)];
          }
        });
      });
    };
  };
  var onResolve$2 = function(_a) {
    var result = _a.result;
    return Boolean((result === null || result === void 0 ? void 0 : result.type) === EEntryType.DIRECTORY);
  };
  var isDirectoryInstance = function(_a) {
    var exists = _a.exists, getRecord = _a.getRecord, rootDirectoryName = _a.rootDirectoryName;
    return function(fullPath) {
      return __awaiter(void 0, void 0, void 0, function() {
        var verifiedFullPath, doesDirectoryExists;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              verifiedFullPath = formatAndValidateFullPath(fullPath, rootDirectoryName);
              return [4, exists(verifiedFullPath)];
            case 1:
              doesDirectoryExists = _a2.sent();
              if (!doesDirectoryExists) {
                throw new Error('"'.concat(verifiedFullPath, '" directory does not exist.'));
              }
              return [2, getRecord(verifiedFullPath, onResolve$2)];
          }
        });
      });
    };
  };
  var onResolve$1 = function(_a) {
    var result = _a.result;
    return result;
  };
  var fileDetailsInstance = function(_a) {
    var getRecord = _a.getRecord, isFile = _a.isFile, rootDirectoryName = _a.rootDirectoryName;
    return function(fullPath) {
      return __awaiter(void 0, void 0, void 0, function() {
        var verifiedFullPath, targetIsOfTypeFile;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              verifiedFullPath = formatAndValidateFullPath(fullPath, rootDirectoryName);
              return [4, isFile(verifiedFullPath)];
            case 1:
              targetIsOfTypeFile = _a2.sent();
              if (!targetIsOfTypeFile) {
                throw new Error('"'.concat(verifiedFullPath, '" is not a file.'));
              }
              return [2, getRecord(verifiedFullPath, onResolve$1)];
          }
        });
      });
    };
  };
  var readDirectoryInstance = function(_a) {
    var isDirectory = _a.isDirectory, openCursor = _a.openCursor, rootDirectoryName = _a.rootDirectoryName;
    return function(fullPath) {
      return __awaiter(void 0, void 0, void 0, function() {
        var verifiedFullPath, targetIsOfTypeDirectory, foundFiles, foundDirectories, onResolve2;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              verifiedFullPath = formatAndValidateFullPath(fullPath, rootDirectoryName);
              return [4, isDirectory(fullPath)];
            case 1:
              targetIsOfTypeDirectory = _a2.sent();
              if (!targetIsOfTypeDirectory) {
                throw new Error('"'.concat(verifiedFullPath, '" is not a directory.'));
              }
              foundFiles = [];
              foundDirectories = [];
              onResolve2 = function(_a3, resolve4) {
                var result = _a3.result;
                if (result) {
                  var value = result.value;
                  if (value.type === EEntryType.FILE) {
                    value.data;
                    var restProps = __rest(value, ["data"]);
                    foundFiles.push(restProps);
                  } else if (value.type === EEntryType.DIRECTORY && !value.isRoot) {
                    foundDirectories.push(value);
                  }
                  result.continue();
                } else {
                  var filesCount = foundFiles.length;
                  var directoriesCount = foundDirectories.length;
                  var isEmpty = filesCount === 0 && directoriesCount === 0;
                  resolve4({
                    isEmpty,
                    filesCount,
                    directoriesCount,
                    files: foundFiles,
                    directories: foundDirectories
                  });
                }
              };
              return [2, openCursor(verifiedFullPath, onResolve2)];
          }
        });
      });
    };
  };
  var createDirectoryInstance = function(_a) {
    var isDirectory = _a.isDirectory, isFile = _a.isFile, putRecord = _a.putRecord, rootDirectoryName = _a.rootDirectoryName;
    return function(fullPath) {
      return __awaiter(void 0, void 0, void 0, function() {
        var verifiedFullPath, basename2, directory, doesDirectoryExists, targetIsTypeOfFile, entry;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              verifiedFullPath = formatAndValidateFullPath(fullPath, rootDirectoryName);
              if (verifiedFullPath === rootDirectoryName) {
                throw new Error('Root directory: "'.concat(verifiedFullPath, '" already exist.'));
              }
              basename2 = path.basename(verifiedFullPath);
              directory = getDirectoryName(verifiedFullPath, rootDirectoryName);
              return [4, isDirectory(directory)];
            case 1:
              doesDirectoryExists = _a2.sent();
              if (!doesDirectoryExists) {
                throw new Error('"'.concat(directory, '" is not a directory.'));
              }
              return [4, tryCatchWrapper(function() {
                return isFile(verifiedFullPath);
              }, function() {
                return false;
              })];
            case 2:
              targetIsTypeOfFile = _a2.sent();
              if (targetIsTypeOfFile) {
                throw new Error('"'.concat(verifiedFullPath, '" you cannot create a directory with the same name as the file.'));
              }
              entry = {
                directory,
                isRoot: false,
                name: basename2,
                createdAt: Date.now(),
                type: EEntryType.DIRECTORY,
                fullPath: verifiedFullPath
              };
              return [2, putRecord(entry)];
          }
        });
      });
    };
  };
  var removeDirectoryInstance = function(_a) {
    var isDirectory = _a.isDirectory, readDirectory = _a.readDirectory, remove = _a.remove, rootDirectoryName = _a.rootDirectoryName;
    function removeNestedDirectory(fullPath) {
      return __awaiter(this, void 0, void 0, function() {
        var verifiedFullPath, _a2, directories, directoriesCount, files, filesCount, _i, files_1, _file, _loop_1, _b, directories_1, _directory;
        return __generator(this, function(_c) {
          switch (_c.label) {
            case 0:
              verifiedFullPath = formatAndValidateFullPath(fullPath, rootDirectoryName);
              return [4, readDirectory(verifiedFullPath)];
            case 1:
              _a2 = _c.sent(), directories = _a2.directories, directoriesCount = _a2.directoriesCount, files = _a2.files, filesCount = _a2.filesCount;
              if (!(filesCount > 0))
                return [3, 5];
              _i = 0, files_1 = files;
              _c.label = 2;
            case 2:
              if (!(_i < files_1.length))
                return [3, 5];
              _file = files_1[_i];
              return [4, remove(_file.fullPath)];
            case 3:
              _c.sent();
              _c.label = 4;
            case 4:
              _i++;
              return [3, 2];
            case 5:
              if (!!directoriesCount)
                return [3, 7];
              return [4, remove(fullPath)];
            case 6:
              _c.sent();
              return [2];
            case 7:
              _loop_1 = function(_directory2) {
                return __generator(this, function(_d) {
                  switch (_d.label) {
                    case 0:
                      if (!!_directory2.isRoot)
                        return [3, 2];
                      return [4, removeNestedDirectory(_directory2.fullPath)];
                    case 1:
                      _d.sent();
                      _d.label = 2;
                    case 2:
                      return [4, tryCatchWrapper(function() {
                        return remove(_directory2.fullPath);
                      })];
                    case 3:
                      _d.sent();
                      return [2];
                  }
                });
              };
              _b = 0, directories_1 = directories;
              _c.label = 8;
            case 8:
              if (!(_b < directories_1.length))
                return [3, 11];
              _directory = directories_1[_b];
              return [5, _loop_1(_directory)];
            case 9:
              _c.sent();
              _c.label = 10;
            case 10:
              _b++;
              return [3, 8];
            case 11:
              return [2];
          }
        });
      });
    }
    return function removeDirectory(fullPath) {
      return __awaiter(this, void 0, void 0, function() {
        var targetIsOfTypeDirectory;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, isDirectory(fullPath)];
            case 1:
              targetIsOfTypeDirectory = _a2.sent();
              if (!targetIsOfTypeDirectory) {
                throw new Error('"'.concat(fullPath, '" is not a directory.'));
              }
              return [4, removeNestedDirectory(fullPath)];
            case 2:
              _a2.sent();
              if (!(fullPath !== rootDirectoryName))
                return [3, 4];
              return [4, tryCatchWrapper(function() {
                return remove(fullPath);
              })];
            case 3:
              _a2.sent();
              _a2.label = 4;
            case 4:
              return [2];
          }
        });
      });
    };
  };
  var onResolve = function(_a) {
    var result = _a.result;
    return result;
  };
  var directoryDetailsInstance = function(_a) {
    var getRecord = _a.getRecord, isDirectory = _a.isDirectory, rootDirectoryName = _a.rootDirectoryName;
    return function(fullPath) {
      return __awaiter(void 0, void 0, void 0, function() {
        var verifiedFullPath, targetIsOfTypeDirectory;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              verifiedFullPath = formatAndValidateFullPath(fullPath, rootDirectoryName);
              return [4, isDirectory(fullPath)];
            case 1:
              targetIsOfTypeDirectory = _a2.sent();
              if (!targetIsOfTypeDirectory) {
                throw new Error('"'.concat(verifiedFullPath, '" is not a directory.'));
              }
              return [2, getRecord(verifiedFullPath, onResolve)];
          }
        });
      });
    };
  };
  var updateFileDetailsInstance = function(_a) {
    var fileDetails = _a.fileDetails, isDirectory = _a.isDirectory, putRecord = _a.putRecord, rootDirectoryName = _a.rootDirectoryName;
    return function(fullPath, newFileEntry) {
      return __awaiter(void 0, void 0, void 0, function() {
        var verifiedFullPath, directory, doesDirectoryExists, targetIsTypeOfDirectory, existFileDetails, concatedFileDetails;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              verifiedFullPath = formatAndValidateFullPath(fullPath, rootDirectoryName);
              if (verifiedFullPath === rootDirectoryName) {
                throw new Error('Root directory: "'.concat(verifiedFullPath, '" cannot be updated.'));
              }
              directory = getDirectoryName(verifiedFullPath, rootDirectoryName);
              return [4, isDirectory(directory)];
            case 1:
              doesDirectoryExists = _a2.sent();
              if (!doesDirectoryExists) {
                throw new Error('"'.concat(directory, '" is not a directory.'));
              }
              return [4, tryCatchWrapper(function() {
                return isDirectory(verifiedFullPath);
              }, function() {
                return false;
              })];
            case 2:
              targetIsTypeOfDirectory = _a2.sent();
              if (targetIsTypeOfDirectory) {
                throw new Error('"'.concat(verifiedFullPath, '" you cannot update a directory.'));
              }
              return [4, fileDetails(verifiedFullPath)];
            case 3:
              existFileDetails = _a2.sent();
              concatedFileDetails = __assign(__assign({}, existFileDetails), newFileEntry);
              return [2, putRecord(concatedFileDetails)];
          }
        });
      });
    };
  };
  var createRootDirectoryInstance = function(_a) {
    var putRecord = _a.putRecord, rootDirectoryName = _a.rootDirectoryName;
    return function() {
      return __awaiter(void 0, void 0, void 0, function() {
        var entry;
        return __generator(this, function(_a2) {
          entry = {
            isRoot: true,
            createdAt: Date.now(),
            name: rootDirectoryName,
            type: EEntryType.DIRECTORY,
            fullPath: rootDirectoryName,
            directory: rootDirectoryName
          };
          return [2, putRecord(entry)];
        });
      });
    };
  };
  var checkIndexedDBSupport = function() {
    if (!isIndexedDBSupport()) {
      throw new Error("Your browser does not support indexedDB.");
    }
  };
  var createFs = function(_a) {
    var _b = _a === void 0 ? defaultProps : _a, _c = _b.databaseName, databaseName = _c === void 0 ? defaultProps.databaseName : _c, _d = _b.databaseVersion, databaseVersion = _d === void 0 ? defaultProps.databaseVersion : _d, _e = _b.objectStoreName, objectStoreName = _e === void 0 ? defaultProps.objectStoreName : _e, _f = _b.rootDirectoryName, rootDirectoryName = _f === void 0 ? defaultProps.rootDirectoryName : _f;
    var validateProps = function() {
      return validateCreateFsProps({
        databaseName,
        objectStoreName,
        databaseVersion,
        rootDirectoryName
      });
    };
    var initialize = function() {
      checkIndexedDBSupport();
      validateProps();
    };
    var _g = getDatabaseCrud({
      databaseName,
      databaseVersion,
      objectStoreName
    }), deleteRecord = _g.deleteRecord, getRecord = _g.getRecord, openCursor = _g.openCursor, putRecord = _g.putRecord;
    var exists = existsInstance({
      getRecord,
      rootDirectoryName
    });
    var isFile = isFileInstance({
      exists,
      getRecord,
      rootDirectoryName
    });
    var remove = removeInstance({
      exists,
      deleteRecord,
      rootDirectoryName
    });
    var fileDetails = fileDetailsInstance({
      isFile,
      getRecord,
      rootDirectoryName
    });
    var readFile = readFileInstance({
      fileDetails
    });
    var removeFile = removeFileInstance({
      isFile,
      deleteRecord,
      rootDirectoryName
    });
    var isDirectory = isDirectoryInstance({
      exists,
      getRecord,
      rootDirectoryName
    });
    var writeFile = writeFileInstance({
      putRecord,
      isDirectory,
      rootDirectoryName
    });
    var copyFile = copyFileInstance({
      exists,
      isFile,
      writeFile,
      fileDetails,
      isDirectory,
      rootDirectoryName
    });
    var readDirectory = readDirectoryInstance({
      openCursor,
      isDirectory,
      rootDirectoryName
    });
    var createDirectory = createDirectoryInstance({
      isFile,
      putRecord,
      isDirectory,
      rootDirectoryName
    });
    var removeDirectory = removeDirectoryInstance({
      remove,
      isDirectory,
      readDirectory,
      rootDirectoryName
    });
    var directoryDetails = directoryDetailsInstance({
      getRecord,
      isDirectory,
      rootDirectoryName
    });
    var details = detailsInstance({
      isFile,
      exists,
      isDirectory,
      fileDetails,
      directoryDetails,
      rootDirectoryName
    });
    var updateFileDetails = updateFileDetailsInstance({
      putRecord,
      fileDetails,
      isDirectory,
      rootDirectoryName
    });
    var moveFile = moveFileInstance({
      exists,
      isFile,
      removeFile,
      isDirectory,
      updateFileDetails,
      rootDirectoryName
    });
    var renameFile = renameFileInstance({
      exists,
      isFile,
      removeFile,
      updateFileDetails,
      rootDirectoryName
    });
    var createRootDirectory = createRootDirectoryInstance({
      putRecord,
      rootDirectoryName
    });
    var createRootDirectoryIfDoesNotExist = function() {
      return __awaiter(void 0, void 0, void 0, function() {
        var hasRootDirectory;
        return __generator(this, function(_a2) {
          switch (_a2.label) {
            case 0:
              return [4, exists(rootDirectoryName)];
            case 1:
              hasRootDirectory = _a2.sent();
              if (!!hasRootDirectory)
                return [3, 3];
              return [4, createRootDirectory()];
            case 2:
              _a2.sent();
              _a2.label = 3;
            case 3:
              return [2];
          }
        });
      });
    };
    var withRootDirectoryCheck = function(callback) {
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return __awaiter(void 0, void 0, void 0, function() {
          return __generator(this, function(_a2) {
            switch (_a2.label) {
              case 0:
                return [4, createRootDirectoryIfDoesNotExist()];
              case 1:
                _a2.sent();
                return [2, callback.apply(void 0, args)];
            }
          });
        });
      };
    };
    initialize();
    return {
      databaseName,
      databaseVersion,
      objectStoreName,
      rootDirectoryName,
      exists: withRootDirectoryCheck(exists),
      isFile: withRootDirectoryCheck(isFile),
      remove: withRootDirectoryCheck(remove),
      details: withRootDirectoryCheck(details),
      copyFile: withRootDirectoryCheck(copyFile),
      readFile: withRootDirectoryCheck(readFile),
      moveFile: withRootDirectoryCheck(moveFile),
      writeFile: withRootDirectoryCheck(writeFile),
      renameFile: withRootDirectoryCheck(renameFile),
      removeFile: withRootDirectoryCheck(removeFile),
      fileDetails: withRootDirectoryCheck(fileDetails),
      isDirectory: withRootDirectoryCheck(isDirectory),
      readDirectory: withRootDirectoryCheck(readDirectory),
      createDirectory: withRootDirectoryCheck(createDirectory),
      removeDirectory: withRootDirectoryCheck(removeDirectory),
      directoryDetails: withRootDirectoryCheck(directoryDetails)
    };
  };
  var fs = createFs();

  // modules/filesystem.ts
  var VFileSystem = class {
    constructor(homeDir, cwd, user) {
      this.homeDir = homeDir;
      this.cwd = cwd;
      this.user = user;
      this.dirExists(homeDir).then((ret) => {
        if (!ret) {
          this.mkdir(`/root/${homeDir}`);
        }
      }).then(() => {
        this.pwd = this.cwd;
      });
    }
    mkdir(dir) {
      return __async(this, null, function* () {
        if (!(yield this.dirExists(dir))) {
          yield fs.createDirectory(dir);
        }
      });
    }
    exists(ford) {
      return __async(this, null, function* () {
        var ret = { exists: false, type: 0 /* None */ };
        let isDir = yield this.dirExists(ford);
        if (!isDir) {
          let isFile = yield this.fileExists(ford);
          ret = { exists: true, type: 1 /* File */ };
        } else {
          ret = { exists: true, type: 2 /* Directory */ };
        }
        return ret;
      });
    }
    dirExists(dir) {
      return __async(this, null, function* () {
        return yield fs.isDirectory(dir);
      });
    }
    fileExists(file) {
      return __async(this, null, function* () {
        return yield fs.isFile(file);
      });
    }
    get pwd() {
      return this.cwd;
    }
    set pwd(wd) {
      this.cwd = wd;
    }
    ls(dir) {
      return __async(this, null, function* () {
        let ret = [];
        let lsdir = dir !== void 0 ? dir : this.pwd;
        ret.push((yield fs.readDirectory(lsdir)).directories);
        ret.push((yield fs.readDirectory(lsdir)).files);
        return ret;
      });
    }
    touch(filename) {
      return __async(this, null, function* () {
        return yield fs.writeFile(`${this.pwd}/${filename}`, "");
      });
    }
    write(filename, data2) {
      return __async(this, null, function* () {
        return yield fs.writeFile(`${this.pwd}/${filename}`, data2);
      });
    }
    read(filename) {
      return __async(this, null, function* () {
        return yield fs.readFile(`${this.pwd}/${filename}`);
      });
    }
    rm(path2) {
      return __async(this, null, function* () {
        if (path2.indexOf("/") == 0) {
          return yield fs.remove(path2);
        } else {
          return yield fs.remove(`${this.pwd}/${path2}`);
        }
      });
    }
  };

  // index.ts
  var opts = {
    cursorBlink: true,
    cursorStyle: "block",
    logLevel: "error"
  };
  var ws = new WebSocket("ws://localhost:7171/");
  var term = new import_xterm.Terminal(opts);
  var termElement = document.getElementById("xterm");
  var PROMPT = "~BHTK ~> ";
  var lineBuffer = "";
  var stdout = "";
  var vfs = new VFileSystem("/bhtk", "/bhtk", "unfazed");
  var commands = {
    "clear": () => {
      term.clear();
      lineBuffer = "";
      term.write(PROMPT);
    },
    "reload": () => {
      window.location.reload();
    },
    "ls": () => __async(void 0, null, function* () {
      yield vfs.ls();
    })
  };
  term.open(termElement);
  term.write(PROMPT);
  term.onKey((data, err) => {
    console.log(lineBuffer);
    if (data.domEvent.keyCode !== 13) {
      if (data.domEvent.keyCode === 8) {
        term.write(" \b\b");
        if (lineBuffer.length > 0) {
          lineBuffer = lineBuffer.substring(0, lineBuffer.length - 1);
        }
      } else {
        term.write(data.key);
        lineBuffer += data.key;
      }
    } else {
      term.writeln("");
      if (lineBuffer in commands) {
        console.log(`${lineBuffer} is in commands`);
        console.log(eval(`commands.${lineBuffer}()`));
      } else if (lineBuffer.toString().indexOf("~") == 0) {
        term.writeln(eval(lineBuffer.toString().substring(1, lineBuffer.length)));
      } else if (lineBuffer.toString().indexOf("!") == 0) {
        ws.send(lineBuffer);
      } else {
        term.writeln(`${lineBuffer} not found, please type .help for more info`);
        term.write(PROMPT);
      }
      lineBuffer = "";
    }
  });
  ws.onmessage = (ev) => {
    stdout = ev.data;
    console.log(ev.data.toString());
    term.write(stdout);
    console.log(`stdout == ${stdout}`);
    stdout = "";
  };
})();
/*! Bundled license information:

indexeddb-fs/dist/index.es.js:
  (*! https://mths.be/punycode v1.4.1 by @mathias *)
*/
