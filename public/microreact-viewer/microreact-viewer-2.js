(this["webpackJsonpProjectViewer"] = this["webpackJsonpProjectViewer"] || []).push([[2],{

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _filters = __webpack_require__(45);

var _panes = __webpack_require__(53);

var _styles = __webpack_require__(80);

var _LegendPane = _interopRequireDefault(__webpack_require__(538));

var _legends = _interopRequireDefault(__webpack_require__(543));

var _state = __webpack_require__(3);

function mapStateToProps(state) {
  return {
    direction: state.styles.legendDirection,
    legends: (0, _legends["default"])(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClose: function onClose() {
      return dispatch((0, _panes.setSidePane)());
    },
    onDirectionChange: function onDirectionChange(direction) {
      return dispatch((0, _styles.setLegendDirection)(direction));
    },
    onSelectRows: function onSelectRows(ids, merge) {
      return dispatch((0, _filters.selectRows)(ids, merge));
    }
  };
}

var _default = (0, _state.connectToPresentState)(_LegendPane["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _ListSubheader = _interopRequireDefault(__webpack_require__(165));

var _react = _interopRequireDefault(__webpack_require__(1));

var _CloseRounded = _interopRequireDefault(__webpack_require__(39));

__webpack_require__(493);

var _UiIconButton = _interopRequireDefault(__webpack_require__(162));

var UiSidePaneHeader = /*#__PURE__*/_react["default"].memo(function (props) {
  return /*#__PURE__*/_react["default"].createElement(_ListSubheader["default"], {
    className: "mr-ui-side-pane-header",
    disableSticky: props.disableSticky
  }, props.title, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-actions"
  }, props.children, /*#__PURE__*/_react["default"].createElement(_UiIconButton["default"], {
    onClick: props.onClose
  }, /*#__PURE__*/_react["default"].createElement(_CloseRounded["default"], null))));
});

UiSidePaneHeader.displayName = "UiSidePaneHeader";
UiSidePaneHeader.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  disableSticky: _propTypes["default"].bool,
  onClose: _propTypes["default"].func.isRequired,
  title: _propTypes["default"].node.isRequired
};
var _default = UiSidePaneHeader;
exports["default"] = _default;

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shapeImage = shapeImage;
exports.linearGradientImage = linearGradientImage;

var _miniSvgDataUri = _interopRequireDefault(__webpack_require__(441));

var _phylocanvas = __webpack_require__(94);

/* eslint-disable no-lonely-if */

/* eslint-disable no-bitwise */
function drawShape(shape, x, y, radius, fillColour, highlightColour) {
  var borderWidth = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
  var borderColour = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : "rgba(0, 0, 0, 0.56)";

  if (radius <= 0 || !shape) {
    return "";
  }

  return _phylocanvas.Utils.drawVectorShape(shape, x, y, radius, fillColour, borderColour, borderWidth); // if (highlightColour) {
  //   // drawHalo(ctx, x, y, radius, highlightColour);
  //   ctx.strokeStyle = highlightColour;
  //   const lineWidth = ctx.lineWidth;
  //   ctx.lineWidth = defaults.highlight.width;
  //   ctx.beginPath();
  //   ctx.arc(x, y, radius + defaults.NODE_RADIUS + Math.floor((radius / defaults.NODE_RADIUS) / 2), 0, Math.PI * 2, false);
  //   ctx.closePath();
  //   ctx.stroke();
  //   ctx.lineWidth = lineWidth;
  // }
}

function shapeImage(width, height, size, shape, fillColour) {
  var borderWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
  var borderColour = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "rgba(0, 0, 0, 0.56)";
  var shapeSvgElement = drawShape(shape, width / 2, height / 2, size);
  return (0, _miniSvgDataUri["default"])("\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"".concat(width, "\"\n      height=\"").concat(height, "\"\n    >\n      <g\n        fill=\"").concat(fillColour, "\"\n        stroke=\"").concat(borderColour, "\"\n        linewidth=\"").concat(borderWidth, "\"\n      >\n        ").concat(shapeSvgElement, "\n      </g>\n    </svg>\n  "));
}

function linearGradientImage(width, height, startColour, stopColour) {
  return (0, _miniSvgDataUri["default"])("\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"".concat(width, "\"\n      height=\"").concat(height, "\"\n    >\n      <defs>\n        <linearGradient\n          id=\"gradientDef\" \n          gradientTransform=\"rotate(90)\"\n        >\n          <stop offset=\"5%\"  stop-color=\"").concat(startColour, "\" />\n          <stop offset=\"95%\" stop-color=\"").concat(stopColour, "\" />\n        </linearGradient>\n      </defs>\n\n      <rect\n        x=\"0\"\n        y=\"0\"\n        width=\"").concat(width, "\"\n        height=\"").concat(height, "\"\n        fill=\"url(#gradientDef)\"\n      />\n    </svg>\n  ")).replace("#", "%23");
}

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(492);

var _ShapeSvgImage = _interopRequireDefault(__webpack_require__(503));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ShapesLegend = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(ShapesLegend, _React$PureComponent);

  var _super = _createSuper(ShapesLegend);

  function ShapesLegend() {
    (0, _classCallCheck2["default"])(this, ShapesLegend);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ShapesLegend, [{
    key: "render",
    value: function render() {
      var _this = this;

      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-legend-entries mr-shapes-legend",
        id: props.id
      }, this.props.entries.map(function (item, index) {
        return /*#__PURE__*/_react["default"].createElement("button", {
          key: index,
          onClick: _this.props.onSelectQueryRows ? function (e) {
            return _this.props.onSelectQueryRows(item.value, e.metaKey || e.ctrlKey);
          } : undefined
        }, /*#__PURE__*/_react["default"].createElement(_ShapeSvgImage["default"], {
          shape: item.shape,
          colour: "transparent"
        }), /*#__PURE__*/_react["default"].createElement("span", null, item.label));
      }));
    }
  }]);
  return ShapesLegend;
}(_react["default"].PureComponent);

ShapesLegend.displayName = "ShapesLegend";
ShapesLegend.propTypes = {
  entries: _propTypes["default"].array.isRequired,
  id: _propTypes["default"].string.isRequired,
  onSelectQueryRows: _propTypes["default"].func
};
ShapesLegend.defaultProps = {
  shapeSize: 32
};
var _default = ShapesLegend;
exports["default"] = _default;

/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _svg = __webpack_require__(494);

var _propTypes2 = __webpack_require__(14);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Shape = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(Shape, _React$PureComponent);

  var _super = _createSuper(Shape);

  function Shape() {
    (0, _classCallCheck2["default"])(this, Shape);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Shape, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("img", {
        width: this.props.width,
        height: this.props.height,
        src: (0, _svg.shapeImage)(this.props.width, this.props.height, this.props.size, this.props.shape, this.props.colour, this.props.borderWidth, this.props.borderColour)
      });
    }
  }]);
  return Shape;
}(_react["default"].PureComponent);

Shape.displayName = "Shape";
Shape.propTypes = {
  borderColour: _propTypes["default"].string,
  borderWidth: _propTypes["default"].number,
  colour: _propTypes["default"].string,
  height: _propTypes["default"].number,
  isHighlighted: _propTypes["default"].bool,
  shape: _propTypes["default"].string,
  size: _propTypes["default"].number,
  theme: _propTypes2.ThemeDef,
  width: _propTypes["default"].number
};
Shape.defaultProps = {
  borderColour: "rgba(0, 0, 0, 0.56)",
  borderWidth: 1,
  height: 32,
  shape: "circle",
  size: 7,
  width: 32
};
var _default = Shape;
exports["default"] = _default;

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(492);

var _LinearGradientSvgImage = _interopRequireDefault(__webpack_require__(505));

var _propTypes2 = __webpack_require__(14);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ColoursLegend = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(ColoursLegend, _React$PureComponent);

  var _super = _createSuper(ColoursLegend);

  function ColoursLegend() {
    (0, _classCallCheck2["default"])(this, ColoursLegend);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ColoursLegend, [{
    key: "render",
    value: function render() {
      var props = this.props;

      if (props.scale === "discrete" || props.scale === "binned") {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "mr-legend-entries",
          id: props.id
        }, props.entries.map(function (item, index) {
          return /*#__PURE__*/_react["default"].createElement("button", {
            key: index,
            onClick: props.onSelectQueryRows ? function (e) {
              return props.onSelectQueryRows(item.value, e.metaKey || e.ctrlKey);
            } : undefined
          }, /*#__PURE__*/_react["default"].createElement("code", {
            style: {
              backgroundColor: item.colour
            }
          }), item.label);
        }));
      }

      if (props.scale === "continuous") {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "mr-legend-entries",
          id: props.id
        }, /*#__PURE__*/_react["default"].createElement("table", {
          className: "mr-legend-table",
          border: "0"
        }, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
          style: {
            paddingLeft: "6px",
            minWidth: "16px"
          },
          rowSpan: "3"
        }, /*#__PURE__*/_react["default"].createElement(_LinearGradientSvgImage["default"], {
          width: 16,
          height: 120,
          startColour: props.entries[0].colour,
          stopColour: props.entries[1].colour
        })), /*#__PURE__*/_react["default"].createElement("td", {
          style: {
            height: "20px",
            verticalAlign: "top",
            textAlign: "left"
          }
        }, "\xA0", props.entries[0].value)), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
          style: {
            height: "*"
          }
        }, "\xA0")), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
          style: {
            height: "20px",
            verticalAlign: "bottom",
            textAlign: "left"
          }
        }, "\xA0", props.entries[1].value)))));
      }

      return null;
    }
  }]);
  return ColoursLegend;
}(_react["default"].PureComponent);

ColoursLegend.displayName = "ColoursLegend";
ColoursLegend.propTypes = {
  entries: _propTypes["default"].array.isRequired,
  id: _propTypes["default"].string.isRequired,
  onSelectQueryRows: _propTypes["default"].func,
  scale: _propTypes["default"].string.isRequired
};
var _default = ColoursLegend;
exports["default"] = _default;

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _react = _interopRequireDefault(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _svg = __webpack_require__(494);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var LinearGradientSvgImage = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(LinearGradientSvgImage, _React$PureComponent);

  var _super = _createSuper(LinearGradientSvgImage);

  function LinearGradientSvgImage() {
    (0, _classCallCheck2["default"])(this, LinearGradientSvgImage);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(LinearGradientSvgImage, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("img", {
        width: this.props.width,
        height: this.props.height,
        src: (0, _svg.linearGradientImage)(this.props.width, this.props.height, this.props.startColour, this.props.stopColour)
      });
    }
  }]);
  return LinearGradientSvgImage;
}(_react["default"].PureComponent);

LinearGradientSvgImage.displayName = "LinearGradientSvgImage";
LinearGradientSvgImage.propTypes = {
  height: _propTypes["default"].number,
  startColour: _propTypes["default"].string,
  stopColour: _propTypes["default"].string,
  width: _propTypes["default"].number
};
LinearGradientSvgImage.defaultProps = {
  height: 32,
  width: 32
};
var _default = LinearGradientSvgImage;
exports["default"] = _default;

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(31));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(32));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(5));

var _createClass2 = _interopRequireDefault(__webpack_require__(6));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(10));

var _inherits2 = _interopRequireDefault(__webpack_require__(7));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(9));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _clsx = _interopRequireDefault(__webpack_require__(112));

var _Divider = _interopRequireDefault(__webpack_require__(93));

var _htmlsvg = _interopRequireDefault(__webpack_require__(447));

var _ListSubheader = _interopRequireDefault(__webpack_require__(165));

var _propTypes = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(492);

var _UiDropdownMenu = _interopRequireDefault(__webpack_require__(34));

var _UiIconButton = _interopRequireDefault(__webpack_require__(162));

var _constants = __webpack_require__(12);

var _ShapesLegend = _interopRequireDefault(__webpack_require__(539));

var _ColoursLegend = _interopRequireDefault(__webpack_require__(541));

var _html = __webpack_require__(35);

var _downloads = __webpack_require__(68);

var _UiSidePaneHeader = _interopRequireDefault(__webpack_require__(491));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var LegendPane = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(LegendPane, _React$PureComponent);

  var _super = _createSuper(LegendPane);

  function LegendPane() {
    var _this;

    (0, _classCallCheck2["default"])(this, LegendPane);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "elRef", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "downloadSvg", /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(legendId) {
        var htmlElement;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                htmlElement = _this.elRef.current.querySelector("[id=\"".concat(legendId, "\"]"));
                _context.next = 3;
                return (0, _htmlsvg["default"])(htmlElement, {
                  downloadSvg: true,
                  downloadPng: false,
                  convertDataUrl: false,
                  // you need to convert images to dataurl if you wanna download png image
                  filename: legendId
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "downloadPng", function (legendId) {
      var htmlElement = _this.elRef.current.querySelector("[id=\"".concat(legendId, "\"]"));

      (0, _html.exportHtmlElementAsDataUrl)(htmlElement).then(function (url) {
        return (0, _downloads.downloadDataUrl)(url, "legend.png", "image/png");
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(LegendPane, [{
    key: "renderExportMenu",
    value: function renderExportMenu() {
      var _this2 = this;

      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"], {
        button: _UiIconButton["default"],
        icon: _constants.icons.menu
      }, props.legends.length > 1 && /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
        onClick: function onClick() {
          return props.onDirectionChange(props.direction === "row" ? "column" : "row");
        }
      }, props.direction === "row" ? "Stack Vertically" : "Stack Horizontally"), props.legends.length > 1 && /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), /*#__PURE__*/_react["default"].createElement(_ListSubheader["default"], null, "Download as SVG"), props.legends.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
          key: item.id,
          onClick: function onClick() {
            return _this2.downloadSvg(item.id);
          }
        }, item.title);
      }), /*#__PURE__*/_react["default"].createElement(_Divider["default"], null), /*#__PURE__*/_react["default"].createElement(_ListSubheader["default"], null, "Download as PNG"), props.legends.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement(_UiDropdownMenu["default"].Item, {
          key: item.id,
          onClick: function onClick() {
            return _this2.downloadPng(item.id);
          }
        }, item.title);
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "mr-legend-pane"
      }, /*#__PURE__*/_react["default"].createElement(_UiSidePaneHeader["default"], {
        disableSticky: true,
        onClose: props.onClose,
        title: "Legend"
      }, this.renderExportMenu()), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _clsx["default"])("mr-legends", props.direction === "row" ? "mr-stack-horizontally" : "mr-stack-vertically"),
        ref: this.elRef
      }, props.legends.map(function (item) {
        if (item.type === "colours") {
          return /*#__PURE__*/_react["default"].createElement("div", {
            key: item.id
          }, /*#__PURE__*/_react["default"].createElement(_ListSubheader["default"], {
            component: "div"
          }, item.title), /*#__PURE__*/_react["default"].createElement(_ColoursLegend["default"], {
            id: item.id,
            field: item.field
          }));
        } else if (item.type === "shapes") {
          return /*#__PURE__*/_react["default"].createElement("div", {
            key: item.id
          }, /*#__PURE__*/_react["default"].createElement(_ListSubheader["default"], {
            component: "div"
          }, item.title), /*#__PURE__*/_react["default"].createElement(_ShapesLegend["default"], {
            id: item.id,
            field: item.field
          }));
        } else {
          return null;
        }
      })));
    }
  }]);
  return LegendPane;
}(_react["default"].PureComponent);

LegendPane.displayName = "Legend";
LegendPane.propTypes = {
  direction: _propTypes["default"].string.isRequired,
  legends: _propTypes["default"].array.isRequired,
  onDirectionChange: _propTypes["default"].func.isRequired,
  onClose: _propTypes["default"].func.isRequired
};
var _default = LegendPane;
exports["default"] = _default;

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _filters = __webpack_require__(45);

var _ShapesLegend = _interopRequireDefault(__webpack_require__(502));

var _shapesLegendEntries = _interopRequireDefault(__webpack_require__(540));

var _state = __webpack_require__(3);

function mapStateToProps(state, _ref) {
  var field = _ref.field;
  return {
    entries: (0, _shapesLegendEntries["default"])(state, field)
  };
}

function mapDispatchToProps(dispatch, _ref2) {
  var field = _ref2.field;
  return {
    onSelectQueryRows: function onSelectQueryRows(value, merge) {
      return dispatch((0, _filters.selectQueryRows)((0, _defineProperty2["default"])({}, field, value), merge));
    }
  };
}

var _default = (0, _state.connectToPresentState)(_ShapesLegend["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var _reselect = __webpack_require__(11);

var _text = __webpack_require__(69);

var _dataColumnByField = _interopRequireDefault(__webpack_require__(42));

var _shapeMapByField = _interopRequireDefault(__webpack_require__(191));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var shapesLegendEntriesSelector = (0, _reselect.createSelector)(function (state, field) {
  return (0, _dataColumnByField["default"])(state, field);
}, function (state, field) {
  return (0, _shapeMapByField["default"])(state, field);
}, function (dataColumn, shapesMap) {
  // group all rows
  var entries = [];

  var _iterator = _createForOfIteratorHelper(shapesMap.entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = (0, _slicedToArray2["default"])(_step.value, 2),
          value = _step$value[0],
          shape = _step$value[1];

      entries.push({
        shape: shape,
        value: value,
        label: (0, _text.toText)(dataColumn.type, value)
      });
    } // order the list of groups by label

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return entries.sort(function (a, b) {
    if (a.label > b.label) {
      return 1;
    }

    if (a.label < b.label) {
      return -1;
    }

    return 0;
  });
});
var _default = shapesLegendEntriesSelector;
exports["default"] = _default;

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(4));

var _filters = __webpack_require__(45);

var _ColoursLegend = _interopRequireDefault(__webpack_require__(504));

var _coloursLegendEntries2 = _interopRequireDefault(__webpack_require__(542));

var _state = __webpack_require__(3);

function mapStateToProps(state, _ref) {
  var field = _ref.field;

  var _coloursLegendEntries = (0, _coloursLegendEntries2["default"])(state, field),
      scale = _coloursLegendEntries.scale,
      entries = _coloursLegendEntries.entries;

  return {
    entries: entries,
    scale: scale
  };
}

function mapDispatchToProps(dispatch, _ref2) {
  var field = _ref2.field;
  return {
    onSelectQueryRows: function onSelectQueryRows(value, merge) {
      return dispatch((0, _filters.selectQueryRows)((0, _defineProperty2["default"])({}, field, value), merge));
    }
  };
}

var _default = (0, _state.connectToPresentState)(_ColoursLegend["default"], mapStateToProps, mapDispatchToProps);

exports["default"] = _default;

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16));

var _reselect = __webpack_require__(11);

var _text = __webpack_require__(69);

var _dataColumnByField = _interopRequireDefault(__webpack_require__(42));

var _colourMapForField = _interopRequireDefault(__webpack_require__(95));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var coloursLegendEntriesSelector = (0, _reselect.createSelector)(function (state, field) {
  return (0, _dataColumnByField["default"])(state, field);
}, function (state, field) {
  return (0, _colourMapForField["default"])(state, field);
}, function (dataColumn, colourMap) {
  var entries = [];

  if (colourMap.scale === "discrete") {
    var _iterator = _createForOfIteratorHelper(colourMap.entries()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = (0, _slicedToArray2["default"])(_step.value, 2),
            value = _step$value[0],
            colour = _step$value[1];

        entries.push({
          colour: colour,
          value: value,
          label: (0, _text.toText)(dataColumn.type, value)
        });
      } // order the list of groups by label

    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    entries.sort(function (a, b) {
      if (a.label > b.label) {
        return 1;
      }

      if (a.label < b.label) {
        return -1;
      }

      return 0;
    });
  } else if (colourMap.scale === "binned") {
    for (var index = 1; index <= colourMap.numberOfBins; index++) {
      var start = colourMap.domain[0] + colourMap.binLength * (index - 1);
      var end = colourMap.domain[0] + colourMap.binLength * index;
      entries.push({
        colour: colourMap.colourGetter(index),
        value: [start, end],
        label: "".concat((0, _text.toText)(dataColumn.type, start.toFixed(2)), " - ").concat((0, _text.toText)(dataColumn.type, end.toFixed(2)))
      });
    }
  } else if (colourMap.scale === "continuous") {
    entries.push({
      colour: colourMap.range[0],
      value: colourMap.domain[0],
      label: (0, _text.toText)(dataColumn.type, colourMap.domain[0])
    });
    entries.push({
      colour: colourMap.range[1],
      value: colourMap.domain[1],
      label: (0, _text.toText)(dataColumn.type, colourMap.domain[1])
    });
  }

  return {
    scale: colourMap.scale,
    entries: entries
  };
});
var _default = coloursLegendEntriesSelector;
exports["default"] = _default;

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reselect = __webpack_require__(11);

var _coloursDataColumn = _interopRequireDefault(__webpack_require__(52));

var _shapesDataColumn = _interopRequireDefault(__webpack_require__(108));

var _allTreesMetadataFields = _interopRequireDefault(__webpack_require__(544));

var _dataColumnsByFieldMap = _interopRequireDefault(__webpack_require__(15));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var legendsSelector = (0, _reselect.createSelector)(function (state) {
  return (0, _coloursDataColumn["default"])(state);
}, function (state) {
  return (0, _shapesDataColumn["default"])(state);
}, function (state) {
  return (0, _allTreesMetadataFields["default"])(state);
}, function (state) {
  return (0, _dataColumnsByFieldMap["default"])(state);
}, function (colourColumn, shapeColumn, treesMetadataFields, columnsByFieldMapSelector) {
  var legends = [];

  if (colourColumn) {
    legends.push({
      field: colourColumn.name,
      title: "Colours by ".concat(columnsByFieldMapSelector.get(colourColumn.name).label),
      type: "colours",
      id: "".concat(colourColumn.name, "-colours")
    });
  }

  if (shapeColumn) {
    legends.push({
      field: shapeColumn.name,
      title: "Shapes by ".concat(columnsByFieldMapSelector.get(shapeColumn.name).label),
      type: "shapes",
      id: "".concat(colourColumn.name, "-shapes")
    });
  }

  var _iterator = _createForOfIteratorHelper(treesMetadataFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var field = _step.value;

      if (field !== (colourColumn === null || colourColumn === void 0 ? void 0 : colourColumn.name)) {
        legends.push({
          field: field,
          type: "colours",
          title: "Colours by ".concat(columnsByFieldMapSelector.get(field).label),
          id: "".concat(field, "-colours")
        });
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return legends;
});
var _default = legendsSelector;
exports["default"] = _default;

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _state = __webpack_require__(3);

var _sets = __webpack_require__(41);

var _metadataFields = _interopRequireDefault(__webpack_require__(545));

var _constants = __webpack_require__(12);

var allTreesMetadataFieldsSelector = (0, _state.createCombinedStateSelector)(function (state) {
  return state.trees;
}, _metadataFields["default"], function (arriesOfFields) {
  if (arriesOfFields.length === 0) {
    return _constants.emptyArray;
  } else if (arriesOfFields.length === 1) {
    return arriesOfFields[0];
  } else {
    return Array.from((0, _sets.intersect)(arriesOfFields.map(function (x) {
      return new Set(x);
    })));
  }
});
var _default = allTreesMetadataFieldsSelector;
exports["default"] = _default;

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = __webpack_require__(12);

var _treeState = _interopRequireDefault(__webpack_require__(55));

var metadataFieldsSelector = function metadataFieldsSelector(state, treeId) {
  return (0, _treeState["default"])(state, treeId).blocks || _constants.emptyArray;
};

var _default = metadataFieldsSelector;
exports["default"] = _default;

/***/ })

}]);