/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Storify = (function () {
	  function Storify() {
	    _classCallCheck(this, Storify);

	    this.storify = {
	      methods: {},
	      state: {}
	    };
	    this.callbacks = {};
	  }

	  _createClass(Storify, [{
	    key: "setState",
	    value: function setState(method, newState) {
	      var storedState = this.storify.state[method];
	      this.storify.state[method] = this.mergeState(storedState, newState);
	      this.fireChanges(method);
	    }
	  }, {
	    key: "new",
	    value: function _new(methods) {
	      methods.prototype.setState = this.setState.bind(this, methods.name);
	      methods.prototype.state = this.state.bind(this, methods.name);
	      this.storify.methods[methods.name] = methods.prototype;
	      this.storify.state[methods.name] = {};
	      this.callbacks[methods.name] = [];
	    }
	  }, {
	    key: "methods",
	    value: function methods(name) {
	      return this.storify.methods[name];
	    }
	  }, {
	    key: "fireChanges",
	    value: function fireChanges(method) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = this.callbacks[method][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var callback = _step.value;

	          callback(this.storify.state[method]);
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator["return"]) {
	            _iterator["return"]();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	  }, {
	    key: "onMethod",
	    value: function onMethod(method, callback) {
	      this.callbacks[method].push(callback);
	    }
	  }, {
	    key: "state",
	    value: function state(method) {
	      return this.storify.state[method];
	    }
	  }, {
	    key: "mergeState",

	    /*private stuff*/

	    value: function mergeState(initialState, newState) {
	      var mergedState = {};

	      for (var attrname in initialState) {
	        mergedState[attrname] = initialState[attrname];
	      }

	      for (var attrname in newState) {
	        mergedState[attrname] = newState[attrname];
	      }

	      return mergedState;
	    }
	  }]);

	  return Storify;
	})();

	exports["default"] = Storify;
	module.exports = exports["default"];

/***/ }
/******/ ]);