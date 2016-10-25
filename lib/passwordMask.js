(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("passwordMask", ["react"], factory);
	else if(typeof exports === 'object')
		exports["passwordMask"] = factory(require("react"));
	else
		root["passwordMask"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styles = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PasswordMask = function (_Component) {
	  _inherits(PasswordMask, _Component);
	
	  function PasswordMask() {
	    _classCallCheck(this, PasswordMask);
	
	    var _this = _possibleConstructorReturn(this, (PasswordMask.__proto__ || Object.getPrototypeOf(PasswordMask)).call(this));
	
	    _this.state = {
	      showPassword: false,
	      hasBeenFocused: false
	    };
	    return _this;
	  }
	
	  _createClass(PasswordMask, [{
	    key: 'invokeCallbacks',
	    value: function invokeCallbacks(value, showPassword) {
	      var _props = this.props;
	      var onShow = _props.onShow;
	      var onHide = _props.onHide;
	      var onToggle = _props.onToggle;
	
	
	      if (!onToggle && !onShow && !onHide) {
	        return;
	      }
	
	      if (onToggle) {
	        onToggle(value);
	      }
	
	      if (showPassword) {
	        if (onShow) {
	          onShow(value);
	        }
	      } else {
	        if (onHide) {
	          onHide(value);
	        }
	      }
	    }
	  }, {
	    key: 'focusVisibleField',
	    value: function focusVisibleField() {
	      var showPassword = this.state.showPassword;
	
	      var visibleField = showPassword ? this.refs.text : this.refs.password;
	
	      visibleField.focus();
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps, nextState) {
	      var showPassword = this.state.showPassword;
	
	
	      if (nextState.showPassword !== showPassword) {
	        this.invokeCallbacks(nextProps.value, nextState.showPassword);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      var _state = this.state;
	      var showPassword = _state.showPassword;
	      var hasBeenFocused = _state.hasBeenFocused;
	
	
	      if (hasBeenFocused && (prevProps.value !== this.props.value || prevState.showPassword !== showPassword)) {
	        this.focusVisibleField();
	      }
	    }
	  }, {
	    key: 'togglePasswordMask',
	    value: function togglePasswordMask() {
	      var showPassword = this.state.showPassword;
	
	      this.setState({ showPassword: !showPassword });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props2 = this.props;
	      var value = _props2.value;
	      var className = _props2.className;
	      var id = _props2.id;
	      var name = _props2.name;
	      var placeholder = _props2.placeholder;
	      var onChange = _props2.onChange;
	
	
	      return _react2.default.createElement(
	        'div',
	        { style: { position: 'relative' } },
	        _react2.default.createElement('input', {
	          type: 'text',
	          ref: 'text',
	          style: _extends({}, this.state.showPassword ? _styles.inputStyles : _styles.hiddenInputStyles, this.props.inputStyles),
	          value: value,
	          className: className,
	          id: this.state.showPassword ? id : '',
	          name: this.state.showPassword ? name : '',
	          placeholder: placeholder,
	          onChange: onChange,
	          onFocus: function onFocus() {
	            return _this2.setState({ hasBeenFocused: true });
	          }
	        }),
	        _react2.default.createElement('input', {
	          type: 'password',
	          ref: 'password',
	          style: _extends({}, this.state.showPassword ? _styles.hiddenInputStyles : _styles.inputStyles, this.props.inputStyles),
	          value: value,
	          className: className,
	          id: !this.state.showPassword ? id : '',
	          name: !this.state.showPassword ? name : '',
	          placeholder: placeholder,
	          onChange: onChange,
	          onFocus: function onFocus() {
	            return _this2.setState({ hasBeenFocused: true });
	          }
	        }),
	        _react2.default.createElement(
	          'a',
	          {
	            href: '',
	            style: _extends({}, _styles.buttonStyles, this.props.buttonStyles),
	            onMouseDown: function onMouseDown(e) {
	              return e.preventDefault();
	            },
	            onClick: function onClick(e) {
	              e.preventDefault();
	              _this2.togglePasswordMask();
	            }
	          },
	          this.state.showPassword ? 'Hide' : 'Show'
	        )
	      );
	    }
	  }]);
	
	  return PasswordMask;
	}(_react.Component);
	
	PasswordMask.propTypes = {
	  value: _react.PropTypes.any.isRequired,
	  id: _react.PropTypes.string,
	  name: _react.PropTypes.string,
	  className: _react.PropTypes.string,
	  placeholder: _react.PropTypes.string,
	  onChange: _react.PropTypes.func,
	  onShow: _react.PropTypes.func,
	  onHide: _react.PropTypes.func,
	  onToggle: _react.PropTypes.func,
	  inputStyles: _react.PropTypes.object,
	  buttonStyles: _react.PropTypes.object
	};
	exports.default = PasswordMask;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var inputStyles = {
	  width: '100%',
	  display: 'block'
	};
	
	var hiddenInputStyles = _extends({}, inputStyles, {
	  display: 'none'
	});
	
	var buttonStyles = {
	  position: 'absolute',
	  top: '50%',
	  right: '6px',
	  marginTop: '-13px',
	  padding: '4px 10px',
	  background: '#e2e2e2',
	  borderRadius: '2px',
	  color: '#000',
	  textAlign: 'center',
	  textDecoration: 'none',
	  WebkitUserSelect: 'none',
	  MozUserSelect: 'none',
	  userSelect: 'none'
	};
	
	exports.inputStyles = inputStyles;
	exports.hiddenInputStyles = hiddenInputStyles;
	exports.buttonStyles = buttonStyles;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=passwordMask.js.map