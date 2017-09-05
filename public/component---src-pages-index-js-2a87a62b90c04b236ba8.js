webpackJsonp([35783957827783],{

/***/ "./node_modules/deep-equal/index.js":
/***/ (function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__("./node_modules/deep-equal/lib/keys.js");
	var isArguments = __webpack_require__("./node_modules/deep-equal/lib/is_arguments.js");
	
	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	
	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();
	
	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;
	
	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}
	
	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}
	
	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}
	
	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ }),

/***/ "./node_modules/deep-equal/lib/is_arguments.js":
/***/ (function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';
	
	exports = module.exports = supportsArgumentsClass ? supported : unsupported;
	
	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};
	
	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ }),

/***/ "./node_modules/deep-equal/lib/keys.js":
/***/ (function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;
	
	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ }),

/***/ "./node_modules/exenv/index.js":
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);
	
		var ExecutionEnvironment = {
	
			canUseDOM: canUseDOM,
	
			canUseWorkers: typeof Worker !== 'undefined',
	
			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),
	
			canUseViewport: canUseDOM && !!window.screen
	
		};
	
		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}
	
	}());


/***/ }),

/***/ "./node_modules/hedron/dist/hedron.js":
/***/ (function(module, exports, __webpack_require__) {

	(function (global, factory) {
		 true ? factory(exports, __webpack_require__("./node_modules/react/react.js"), __webpack_require__("./node_modules/styled-components/lib/index.js")) :
		typeof define === 'function' && define.amd ? define(['exports', 'react', 'styled-components'], factory) :
		(factory((global.hedron = global.hedron || {}),global.React,global.styled));
	}(this, (function (exports,React,styled) { 'use strict';
	
	var React__default = 'default' in React ? React['default'] : React;
	var styled__default = 'default' in styled ? styled['default'] : styled;
	
	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction$1 = function emptyFunction$1() {};
	
	emptyFunction$1.thatReturns = makeEmptyFunction;
	emptyFunction$1.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction$1.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction$1.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction$1.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction$1.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	var emptyFunction_1 = emptyFunction$1;
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var validateFormat = function validateFormat(format) {};
	
	{
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}
	
	function invariant$1(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	var invariant_1 = invariant$1;
	
	var emptyFunction$2 = emptyFunction_1;
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning$1 = emptyFunction$2;
	
	{
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };
	
	    warning$1 = function warning$1(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }
	
	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }
	
	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }
	
	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}
	
	var warning_1 = warning$1;
	
	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
	
	{
	  var invariant$2 = invariant_1;
	  var warning$2 = warning_1;
	  var ReactPropTypesSecret$2 = ReactPropTypesSecret_1;
	  var loggedTypeFailures = {};
	}
	
	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
	  {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant$2(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$2);
	        } catch (ex) {
	          error = ex;
	        }
	        warning$2(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;
	
	          var stack = getStack ? getStack() : '';
	
	          warning$2(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}
	
	var checkPropTypes_1 = checkPropTypes$1;
	
	var emptyFunction = emptyFunction_1;
	var invariant = invariant_1;
	var warning = warning_1;
	
	var ReactPropTypesSecret = ReactPropTypesSecret_1;
	var checkPropTypes = checkPropTypes_1;
	
	var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */
	
	  var ANONYMOUS = '<<anonymous>>';
	
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),
	
	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };
	
	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/
	
	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;
	
	  function createChainableTypeChecker(validate) {
	    {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	
	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if ("development" !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }
	
	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);
	
	    return chainedCheckType;
	  }
	
	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);
	
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }
	
	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.');
	      return emptyFunction.thatReturnsNull;
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }
	
	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.');
	      return emptyFunction.thatReturnsNull;
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }
	
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }
	
	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }
	
	        return true;
	      default:
	        return false;
	    }
	  }
	
	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }
	
	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }
	
	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }
	
	    return false;
	  }
	
	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }
	
	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }
	
	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }
	
	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};
	
	var index = createCommonjsModule(function (module) {
	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	{
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;
	
	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };
	
	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
	}
	});
	
	// Divvy is a function for dividing up a grid.
	// divvy(12, 6) returns: (100 / 12) * 6
	// This can then be used by the grid system.
	// i.e. width: ${divvy(12, 4)};
	var divvy = function () {
	  var divisions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
	  var span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	
	  return 100 / divisions * span;
	};
	
	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();
	
	
	
	
	
	
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	var get = function get(object, property, receiver) {
	  if (object === null) object = Function.prototype;
	  var desc = Object.getOwnPropertyDescriptor(object, property);
	
	  if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);
	
	    if (parent === null) {
	      return undefined;
	    } else {
	      return get(parent, property, receiver);
	    }
	  } else if ("value" in desc) {
	    return desc.value;
	  } else {
	    var getter = desc.get;
	
	    if (getter === undefined) {
	      return undefined;
	    }
	
	    return getter.call(receiver);
	  }
	};
	
	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	
	
	
	
	
	
	
	
	var objectWithoutProperties = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};
	
	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};
	
	
	
	var set = function set(object, property, value, receiver) {
	  var desc = Object.getOwnPropertyDescriptor(object, property);
	
	  if (desc === undefined) {
	    var parent = Object.getPrototypeOf(object);
	
	    if (parent !== null) {
	      set(parent, property, value, receiver);
	    }
	  } else if ("value" in desc && desc.writable) {
	    desc.value = value;
	  } else {
	    var setter = desc.set;
	
	    if (setter !== undefined) {
	      setter.call(receiver, value);
	    }
	  }
	
	  return value;
	};
	
	
	
	
	
	var taggedTemplateLiteral = function (strings, raw) {
	  return Object.freeze(Object.defineProperties(strings, {
	    raw: {
	      value: Object.freeze(raw)
	    }
	  }));
	};
	
	var _templateObject$3 = taggedTemplateLiteral(['\n  @media (min-width: ', 'px) {\n    ', '\n  }'], ['\n  @media (min-width: ', 'px) {\n    ', '\n  }']);
	
	var defaultBreakpoints = {
	  sm: 500,
	  md: 768,
	  lg: 1100
	};
	
	var query = function query(size) {
	  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultBreakpoints;
	  return function () {
	    return styled.css(_templateObject$3, breakpoints[size] || defaultBreakpoints[size], styled.css.apply(undefined, arguments));
	  };
	};
	
	var media = Object.keys(defaultBreakpoints).reduce(function (acc, label) {
	  var accumulator = acc;
	  accumulator[label] = function (breakpoints) {
	    return query(label, breakpoints);
	  };
	  return accumulator;
	}, {});
	
	var _templateObject$4 = taggedTemplateLiteral(['', ''], ['', '']);
	
	var breakpoint = function breakpoint(name, getStyle) {
	  return function (props) {
	    return media[name] ? media[name](props.breakpoints)(_templateObject$4, function (props) {
	      return getStyle(props, name);
	    }) : getStyle(props, name);
	  };
	};
	
	/* globals ReactClass */
	// This is an undocumented utility that is subject to change.
	// Please do not use this externally. Eventually I will likely
	// expose it once it's been cleaned and made reusable.
	//
	// The passOn function applies a specific set of properties
	// to the children components. It will only apply the props
	// to a component type that exists in the ofTypes array.
	var passOn = function (children, ofTypes) {
	  var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (r) {
	    return r;
	  };
	
	  var response = React__default.Children.map(children,
	  // Check to see if the child's component type is whitelisted,
	  // and then process it.
	  function (child) {
	    return React__default.isValidElement(child) && ofTypes.indexOf(child.type) !== -1 ? React__default.cloneElement(child, process(child)) : child;
	  });
	  return response;
	};
	
	
	
	var index$1 = Object.freeze({
		divvy: divvy,
		media: media,
		defaultBreakpoints: defaultBreakpoints,
		breakpoint: breakpoint,
		passOn: passOn
	});
	
	/* globals ReactClass */
	var breakpointsShape = index.shape({
	  sm: index.number,
	  md: index.number,
	  lg: index.number
	});
	
	var BreakpointProvider = function (_Component) {
	  inherits(BreakpointProvider, _Component);
	
	  function BreakpointProvider() {
	    classCallCheck(this, BreakpointProvider);
	    return possibleConstructorReturn(this, (BreakpointProvider.__proto__ || Object.getPrototypeOf(BreakpointProvider)).apply(this, arguments));
	  }
	
	  createClass(BreakpointProvider, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      var _props$breakpoints = this.props.breakpoints,
	          propsBreakpoints = _props$breakpoints === undefined ? {} : _props$breakpoints;
	      var _context$breakpoints = this.context.breakpoints,
	          contextBreakpoints = _context$breakpoints === undefined ? {} : _context$breakpoints;
	
	
	      return {
	        breakpoints: _extends({}, defaultBreakpoints, contextBreakpoints, propsBreakpoints)
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.Children.only(this.props.children);
	    }
	  }]);
	  return BreakpointProvider;
	}(React.Component);
	
	BreakpointProvider.propTypes = {
	  children: index.node,
	  breakpoints: breakpointsShape
	};
	BreakpointProvider.contextTypes = {
	  breakpoints: breakpointsShape
	};
	BreakpointProvider.childContextTypes = {
	  breakpoints: breakpointsShape
	};
	var withBreakpoints = function withBreakpoints(WrappedComponent
	// eslint-disable-next-line react/no-multi-comp
	) {
	  var _class, _temp;
	
	  return _temp = _class = function (_Component2) {
	    inherits(Breakpoints, _Component2);
	
	    function Breakpoints() {
	      classCallCheck(this, Breakpoints);
	      return possibleConstructorReturn(this, (Breakpoints.__proto__ || Object.getPrototypeOf(Breakpoints)).apply(this, arguments));
	    }
	
	    createClass(Breakpoints, [{
	      key: 'render',
	      value: function render() {
	        var breakpoints = this.context.breakpoints;
	
	
	        return React__default.createElement(WrappedComponent, _extends({}, this.props, { breakpoints: breakpoints }));
	      } // eslint-disable-line  react/prefer-stateless-function
	
	    }]);
	    return Breakpoints;
	  }(React.Component), _class.contextTypes = {
	    breakpoints: breakpointsShape
	  }, _temp;
	};
	
	var _templateObject$2 = taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n']);
	
	/* eslint-disable no-unused-vars */
	function HiddenContainer(props) {
	  var children = props.children,
	      debug = props.debug,
	      xs = props.xs,
	      sm = props.sm,
	      md = props.md,
	      lg = props.lg,
	      breakpoints = props.breakpoints,
	      rest = objectWithoutProperties(props, ['children', 'debug', 'xs', 'sm', 'md', 'lg', 'breakpoints']);
	
	  var newChildren = passOn(children, [Row, Column$1], function (child) {
	    return {
	      debug: typeof child.props.debug === 'undefined' ? debug : child.props.debug
	    };
	  });
	  return React__default.createElement(
	    'div',
	    rest,
	    newChildren
	  );
	}
	
	HiddenContainer.propTypes = {
	  children: __webpack_require__("./node_modules/prop-types/index.js").node,
	  debug: __webpack_require__("./node_modules/prop-types/index.js").bool,
	  xs: __webpack_require__("./node_modules/prop-types/index.js").bool,
	  sm: __webpack_require__("./node_modules/prop-types/index.js").bool,
	  md: __webpack_require__("./node_modules/prop-types/index.js").bool,
	  lg: __webpack_require__("./node_modules/prop-types/index.js").bool,
	  breakpoints: __webpack_require__("./node_modules/prop-types/index.js").object
	};
	var compute$1 = function compute$1(name) {
	  return breakpoint(name, function (props, name) {
	    return 'display:' + (props[name] ? 'none' : 'inherit') + ';';
	  });
	};
	
	var Hidden = styled__default(HiddenContainer)(_templateObject$2, compute$1('xs'), compute$1('sm'), compute$1('md'), compute$1('lg'));
	
	var Hidden$1 = withBreakpoints(Hidden);
	
	var _templateObject$1 = taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);
	
	/* eslint-disable no-unused-vars */
	function RowContainer(props) {
	  var children = props.children,
	      tagName = props.tagName,
	      debug = props.debug,
	      divisions = props.divisions,
	      theme = props.theme,
	      alignContent = props.alignContent,
	      alignItems = props.alignItems,
	      alignSelf = props.alignSelf,
	      justifyContent = props.justifyContent,
	      order = props.order,
	      rest = objectWithoutProperties(props, ['children', 'tagName', 'debug', 'divisions', 'theme', 'alignContent', 'alignItems', 'alignSelf', 'justifyContent', 'order']);
	
	  var newChildren = passOn(children, [Column$1, Hidden$1], function (child) {
	    return {
	      debug: typeof child.props.debug === 'undefined' ? debug : child.props.debug,
	      divisions: divisions
	    };
	  });
	  return React__default.createElement(tagName || 'section', rest, newChildren);
	}
	
	RowContainer.propTypes = {
	  children: __webpack_require__("./node_modules/prop-types/index.js").node,
	  className: __webpack_require__("./node_modules/prop-types/index.js").string,
	  debug: __webpack_require__("./node_modules/prop-types/index.js").bool,
	  tagName: __webpack_require__("./node_modules/prop-types/index.js").string,
	  theme: __webpack_require__("./node_modules/prop-types/index.js").object,
	  divisions: __webpack_require__("./node_modules/prop-types/index.js").number,
	  alignContent: __webpack_require__("./node_modules/prop-types/index.js").string,
	  alignItems: __webpack_require__("./node_modules/prop-types/index.js").string,
	  alignSelf: __webpack_require__("./node_modules/prop-types/index.js").string,
	  justifyContent: __webpack_require__("./node_modules/prop-types/index.js").string,
	  order: __webpack_require__("./node_modules/prop-types/index.js").string
	};
	RowContainer.defaultProps = {
	  divisions: 12
	};
	
	var ifDefined = function ifDefined(prop) {
	  var css$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : prop;
	  return function (props) {
	    return props[prop] ? css$$1 + ': ' + props[prop] : '';
	  };
	};
	
	var Row = styled__default(RowContainer)(_templateObject$1, ifDefined('alignContent', 'align-content'), ifDefined('alignItems', 'align-items'), ifDefined('alignSelf', 'align-self'), ifDefined('justifyContent', 'justify-content'), ifDefined('order'));
	
	var _templateObject = taggedTemplateLiteral(['\n  display: block;\n  ', '\n  box-sizing: border-box;\n  padding: ', ';\n  width: 100%;\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  display: block;\n  ', '\n  box-sizing: border-box;\n  padding: ', ';\n  width: 100%;\n  ', '\n  ', '\n  ', '\n  ', '\n']);
	
	/* eslint-disable no-unused-vars */
	function ColumnContainer(props) {
	  var children = props.children,
	      tagName = props.tagName,
	      debug = props.debug,
	      divisions = props.divisions,
	      fluid = props.fluid,
	      xs = props.xs,
	      sm = props.sm,
	      md = props.md,
	      lg = props.lg,
	      theme = props.theme,
	      xsShift = props.xsShift,
	      smShift = props.smShift,
	      mdShift = props.mdShift,
	      lgShift = props.lgShift,
	      breakpoints = props.breakpoints,
	      rest = objectWithoutProperties(props, ['children', 'tagName', 'debug', 'divisions', 'fluid', 'xs', 'sm', 'md', 'lg', 'theme', 'xsShift', 'smShift', 'mdShift', 'lgShift', 'breakpoints']);
	
	  var newChildren = passOn(children, [Row], function (child) {
	    return {
	      debug: typeof child.props.debug === 'undefined' ? debug : child.props.debug
	    };
	  });
	  return React__default.createElement(tagName || 'div', rest, newChildren);
	}
	
	ColumnContainer.propTypes = {
	  children: __webpack_require__("./node_modules/prop-types/index.js").node,
	  className: __webpack_require__("./node_modules/prop-types/index.js").string,
	  tagName: __webpack_require__("./node_modules/prop-types/index.js").string,
	  theme: __webpack_require__("./node_modules/prop-types/index.js").object,
	  debug: __webpack_require__("./node_modules/prop-types/index.js").bool,
	  divisions: __webpack_require__("./node_modules/prop-types/index.js").number,
	  fluid: __webpack_require__("./node_modules/prop-types/index.js").bool,
	  xs: __webpack_require__("./node_modules/prop-types/index.js").number,
	  sm: __webpack_require__("./node_modules/prop-types/index.js").number,
	  md: __webpack_require__("./node_modules/prop-types/index.js").number,
	  lg: __webpack_require__("./node_modules/prop-types/index.js").number,
	  xsShift: __webpack_require__("./node_modules/prop-types/index.js").number,
	  smShift: __webpack_require__("./node_modules/prop-types/index.js").number,
	  mdShift: __webpack_require__("./node_modules/prop-types/index.js").number,
	  lgShift: __webpack_require__("./node_modules/prop-types/index.js").number,
	  breakpoints: __webpack_require__("./node_modules/prop-types/index.js").object
	};
	ColumnContainer.defaultProps = {
	  divisions: 12
	};
	
	var compute = function compute(name) {
	  return breakpoint(name, function (props, name) {
	    return function (divisions, size, shift) {
	      return '\n      ' + (size ? 'width: ' + divvy(divisions, size) + '%;' : '') + '\n      ' + (shift ? 'margin-left: ' + divvy(divisions, shift) + '%;' : '') + '\n    ';
	    }(props.divisions, props[name], props[name + 'Shift']);
	  });
	};
	
	var Column = styled__default(ColumnContainer)(_templateObject, function (props) {
	  return props.debug ? 'background-color: rgba(50, 50, 255, .1);\n       outline: 1px solid #fff;' : '';
	}, function (props) {
	  return props.fluid ? '0' : '20px';
	}, compute('xs'), compute('sm'), compute('md'), compute('lg'));
	
	var Column$1 = withBreakpoints(Column);
	
	var _templateObject$5 = taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);
	
	/* eslint-disable no-unused-vars */
	function PageContainer(props) {
	  var children = props.children,
	      tagName = props.tagName,
	      debug = props.debug,
	      fluid = props.fluid,
	      rest = objectWithoutProperties(props, ['children', 'tagName', 'debug', 'fluid']);
	
	  var newChildren = passOn(children, [Row, Hidden$1], function (child) {
	    return {
	      debug: typeof child.props.debug === 'undefined' ? debug : child.props.debug
	    };
	  });
	  return React__default.createElement(tagName || 'div', rest, newChildren);
	}
	
	PageContainer.propTypes = {
	  children: __webpack_require__("./node_modules/prop-types/index.js").node,
	  className: __webpack_require__("./node_modules/prop-types/index.js").string,
	  tagName: __webpack_require__("./node_modules/prop-types/index.js").string,
	  debug: __webpack_require__("./node_modules/prop-types/index.js").bool,
	  fluid: __webpack_require__("./node_modules/prop-types/index.js").bool,
	  width: __webpack_require__("./node_modules/prop-types/index.js").string
	};
	var Page = styled__default(PageContainer)(_templateObject$5, function (props) {
	  return props.fluid ? 'width: 100%;' : '\n      margin: 0 auto;\n      max-width: 100%;\n      ' + (props.width ? 'width: ' + props.width + ';' : 'width: 960px;') + '\n    ';
	});
	
	exports.Column = Column$1;
	exports.Page = Page;
	exports.Row = Row;
	exports.Hidden = Hidden$1;
	exports.BreakpointProvider = BreakpointProvider;
	exports.withBreakpoints = withBreakpoints;
	exports.utils = index$1;
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	})));


/***/ }),

/***/ "./node_modules/hedron/lib/utils/breakpoint.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);
	
	var _media = __webpack_require__("./node_modules/hedron/lib/utils/media.js");
	
	var _media2 = _interopRequireDefault(_media);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	var breakpoint = function breakpoint(name, getStyle) {
	  return function (props) {
	    return _media2.default[name] ? _media2.default[name](props.breakpoints)(_templateObject, function (props) {
	      return getStyle(props, name);
	    }) : getStyle(props, name);
	  };
	};
	
	exports.default = breakpoint;

/***/ }),

/***/ "./node_modules/hedron/lib/utils/divvy.js":
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var divisions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
	  var span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	
	  return 100 / divisions * span;
	};

/***/ }),

/***/ "./node_modules/hedron/lib/utils/index.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.passOn = exports.breakpoint = exports.defaultBreakpoints = exports.media = exports.divvy = undefined;
	
	var _divvy = __webpack_require__("./node_modules/hedron/lib/utils/divvy.js");
	
	var _divvy2 = _interopRequireDefault(_divvy);
	
	var _media = __webpack_require__("./node_modules/hedron/lib/utils/media.js");
	
	var _media2 = _interopRequireDefault(_media);
	
	var _breakpoint = __webpack_require__("./node_modules/hedron/lib/utils/breakpoint.js");
	
	var _breakpoint2 = _interopRequireDefault(_breakpoint);
	
	var _passOn = __webpack_require__("./node_modules/hedron/lib/utils/passOn.js");
	
	var _passOn2 = _interopRequireDefault(_passOn);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.divvy = _divvy2.default;
	exports.media = _media2.default;
	exports.defaultBreakpoints = _media.defaultBreakpoints;
	exports.breakpoint = _breakpoint2.default;
	exports.passOn = _passOn2.default;

/***/ }),

/***/ "./node_modules/hedron/lib/utils/media.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defaultBreakpoints = undefined;
	
	var _templateObject = _taggedTemplateLiteral(['\n  @media (min-width: ', 'px) {\n    ', '\n  }'], ['\n  @media (min-width: ', 'px) {\n    ', '\n  }']);
	
	var _styledComponents = __webpack_require__("./node_modules/styled-components/lib/index.js");
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	var defaultBreakpoints = exports.defaultBreakpoints = {
	  sm: 500,
	  md: 768,
	  lg: 1100
	};
	
	var query = function query(size) {
	  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultBreakpoints;
	  return function () {
	    return (0, _styledComponents.css)(_templateObject, breakpoints[size] || defaultBreakpoints[size], _styledComponents.css.apply(undefined, arguments));
	  };
	};
	
	exports.default = Object.keys(defaultBreakpoints).reduce(function (acc, label) {
	  var accumulator = acc;
	  accumulator[label] = function (breakpoints) {
	    return query(label, breakpoints);
	  };
	  return accumulator;
	}, {});

/***/ }),

/***/ "./node_modules/hedron/lib/utils/passOn.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (children, ofTypes) {
	  var process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (r) {
	    return r;
	  };
	
	  var response = _react2.default.Children.map(children,
	  // Check to see if the child's component type is whitelisted,
	  // and then process it.
	  function (child) {
	    return _react2.default.isValidElement(child) && ofTypes.includes(child.type) ? _react2.default.cloneElement(child, process(child)) : child;
	  });
	  return response;
	};
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/is-function/index.js":
/***/ (function(module, exports) {

	module.exports = isFunction
	
	var toString = Object.prototype.toString
	
	function isFunction (fn) {
	  var string = toString.call(fn)
	  return string === '[object Function]' ||
	    (typeof fn === 'function' && string !== '[object RegExp]') ||
	    (typeof window !== 'undefined' &&
	     // IE8 and below
	     (fn === window.setTimeout ||
	      fn === window.alert ||
	      fn === window.confirm ||
	      fn === window.prompt))
	};


/***/ }),

/***/ "./node_modules/is-plain-object/index.js":
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */
	
	'use strict';
	
	var isObject = __webpack_require__("./node_modules/is-plain-object/node_modules/isobject/index.js");
	
	function isObjectObject(o) {
	  return isObject(o) === true
	    && Object.prototype.toString.call(o) === '[object Object]';
	}
	
	module.exports = function isPlainObject(o) {
	  var ctor,prot;
	
	  if (isObjectObject(o) === false) return false;
	
	  // If has modified constructor
	  ctor = o.constructor;
	  if (typeof ctor !== 'function') return false;
	
	  // If has modified prototype
	  prot = ctor.prototype;
	  if (isObjectObject(prot) === false) return false;
	
	  // If constructor does not have an Object-specific method
	  if (prot.hasOwnProperty('isPrototypeOf') === false) {
	    return false;
	  }
	
	  // Most likely a plain Object
	  return true;
	};


/***/ }),

/***/ "./node_modules/is-plain-object/node_modules/isobject/index.js":
/***/ (function(module, exports) {

	/*!
	 * isobject <https://github.com/jonschlinkert/isobject>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */
	
	'use strict';
	
	module.exports = function isObject(val) {
	  return val != null && typeof val === 'object' && Array.isArray(val) === false;
	};


/***/ }),

/***/ "./node_modules/react-helmet/lib/Helmet.js":
/***/ (function(module, exports, __webpack_require__) {

	exports.__esModule = true;
	exports.Helmet = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactSideEffect = __webpack_require__("./node_modules/react-side-effect/lib/index.js");
	
	var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);
	
	var _deepEqual = __webpack_require__("./node_modules/deep-equal/index.js");
	
	var _deepEqual2 = _interopRequireDefault(_deepEqual);
	
	var _HelmetUtils = __webpack_require__("./node_modules/react-helmet/lib/HelmetUtils.js");
	
	var _HelmetConstants = __webpack_require__("./node_modules/react-helmet/lib/HelmetConstants.js");
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Helmet = function Helmet(Component) {
	    var _class, _temp;
	
	    return _temp = _class = function (_React$Component) {
	        _inherits(HelmetWrapper, _React$Component);
	
	        function HelmetWrapper() {
	            _classCallCheck(this, HelmetWrapper);
	
	            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	        }
	
	        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	            return !(0, _deepEqual2.default)(this.props, nextProps);
	        };
	
	        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
	            if (!nestedChildren) {
	                return null;
	            }
	
	            switch (child.type) {
	                case _HelmetConstants.TAG_NAMES.SCRIPT:
	                case _HelmetConstants.TAG_NAMES.NOSCRIPT:
	                    return {
	                        innerHTML: nestedChildren
	                    };
	
	                case _HelmetConstants.TAG_NAMES.STYLE:
	                    return {
	                        cssText: nestedChildren
	                    };
	            }
	
	            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
	        };
	
	        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
	            var _extends2;
	
	            var child = _ref.child,
	                arrayTypeChildren = _ref.arrayTypeChildren,
	                newChildProps = _ref.newChildProps,
	                nestedChildren = _ref.nestedChildren;
	
	            return _extends({}, arrayTypeChildren, (_extends2 = {}, _extends2[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _extends2));
	        };
	
	        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
	            var _extends3, _extends4;
	
	            var child = _ref2.child,
	                newProps = _ref2.newProps,
	                newChildProps = _ref2.newChildProps,
	                nestedChildren = _ref2.nestedChildren;
	
	            switch (child.type) {
	                case _HelmetConstants.TAG_NAMES.TITLE:
	                    return _extends({}, newProps, (_extends3 = {}, _extends3[child.type] = nestedChildren, _extends3.titleAttributes = _extends({}, newChildProps), _extends3));
	
	                case _HelmetConstants.TAG_NAMES.BODY:
	                    return _extends({}, newProps, {
	                        bodyAttributes: _extends({}, newChildProps)
	                    });
	
	                case _HelmetConstants.TAG_NAMES.HTML:
	                    return _extends({}, newProps, {
	                        htmlAttributes: _extends({}, newChildProps)
	                    });
	            }
	
	            return _extends({}, newProps, (_extends4 = {}, _extends4[child.type] = _extends({}, newChildProps), _extends4));
	        };
	
	        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
	            var newFlattenedProps = _extends({}, newProps);
	
	            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
	                var _extends5;
	
	                newFlattenedProps = _extends({}, newFlattenedProps, (_extends5 = {}, _extends5[arrayChildName] = arrayTypeChildren[arrayChildName], _extends5));
	            });
	
	            return newFlattenedProps;
	        };
	
	        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
	            if (false) {
	                if (!_HelmetConstants.VALID_TAG_NAMES.some(function (name) {
	                    return child.type === name;
	                })) {
	                    if (typeof child.type === "function") {
	                        return (0, _HelmetUtils.warn)("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.");
	                    }
	
	                    return (0, _HelmetUtils.warn)("Only elements types " + _HelmetConstants.VALID_TAG_NAMES.join(", ") + " are allowed. Helmet does not support rendering <" + child.type + "> elements. Refer to our API for more information.");
	                }
	
	                if (nestedChildren && typeof nestedChildren !== "string" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {
	                    return typeof nestedChild !== "string";
	                }))) {
	                    throw new Error("Helmet expects a string as a child of <" + child.type + ">. Did you forget to wrap your children in braces? ( <" + child.type + ">{``}</" + child.type + "> ) Refer to our API for more information.");
	                }
	            }
	
	            return true;
	        };
	
	        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
	            var _this2 = this;
	
	            var arrayTypeChildren = {};
	
	            _react2.default.Children.forEach(children, function (child) {
	                if (!child || !child.props) {
	                    return;
	                }
	
	                var _child$props = child.props,
	                    nestedChildren = _child$props.children,
	                    childProps = _objectWithoutProperties(_child$props, ["children"]);
	
	                var newChildProps = (0, _HelmetUtils.convertReactPropstoHtmlAttributes)(childProps);
	
	                _this2.warnOnInvalidChildren(child, nestedChildren);
	
	                switch (child.type) {
	                    case _HelmetConstants.TAG_NAMES.LINK:
	                    case _HelmetConstants.TAG_NAMES.META:
	                    case _HelmetConstants.TAG_NAMES.NOSCRIPT:
	                    case _HelmetConstants.TAG_NAMES.SCRIPT:
	                    case _HelmetConstants.TAG_NAMES.STYLE:
	                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
	                            child: child,
	                            arrayTypeChildren: arrayTypeChildren,
	                            newChildProps: newChildProps,
	                            nestedChildren: nestedChildren
	                        });
	                        break;
	
	                    default:
	                        newProps = _this2.mapObjectTypeChildren({
	                            child: child,
	                            newProps: newProps,
	                            newChildProps: newChildProps,
	                            nestedChildren: nestedChildren
	                        });
	                        break;
	                }
	            });
	
	            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
	            return newProps;
	        };
	
	        HelmetWrapper.prototype.render = function render() {
	            var _props = this.props,
	                children = _props.children,
	                props = _objectWithoutProperties(_props, ["children"]);
	
	            var newProps = _extends({}, props);
	
	            if (children) {
	                newProps = this.mapChildrenToProps(children, newProps);
	            }
	
	            return _react2.default.createElement(Component, newProps);
	        };
	
	        _createClass(HelmetWrapper, null, [{
	            key: "canUseDOM",
	
	
	            // Component.peek comes from react-side-effect:
	            // For testing, you may use a static peek() method available on the returned component.
	            // It lets you get the current state without resetting the mounted instance stack.
	            // Don’t use it for anything other than testing.
	
	            /**
	            * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
	            * @param {Object} bodyAttributes: {"className": "root"}
	            * @param {String} defaultTitle: "Default Title"
	            * @param {Boolean} defer: true
	            * @param {Boolean} encodeSpecialCharacters: true
	            * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
	            * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
	            * @param {Array} meta: [{"name": "description", "content": "Test description"}]
	            * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
	            * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
	            * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
	            * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
	            * @param {String} title: "Title"
	            * @param {Object} titleAttributes: {"itemprop": "name"}
	            * @param {String} titleTemplate: "MySite.com - %s"
	            */
	            set: function set(canUseDOM) {
	                Component.canUseDOM = canUseDOM;
	            }
	        }]);
	
	        return HelmetWrapper;
	    }(_react2.default.Component), _class.propTypes = {
	        base: _propTypes2.default.object,
	        bodyAttributes: _propTypes2.default.object,
	        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
	        defaultTitle: _propTypes2.default.string,
	        defer: _propTypes2.default.bool,
	        encodeSpecialCharacters: _propTypes2.default.bool,
	        htmlAttributes: _propTypes2.default.object,
	        link: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        meta: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        noscript: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        onChangeClientState: _propTypes2.default.func,
	        script: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        style: _propTypes2.default.arrayOf(_propTypes2.default.object),
	        title: _propTypes2.default.string,
	        titleAttributes: _propTypes2.default.object,
	        titleTemplate: _propTypes2.default.string
	    }, _class.defaultProps = {
	        defer: true,
	        encodeSpecialCharacters: true
	    }, _class.peek = Component.peek, _class.rewind = function () {
	        var mappedState = Component.rewind();
	        if (!mappedState) {
	            // provide fallback if mappedState is undefined
	            mappedState = (0, _HelmetUtils.mapStateOnServer)({
	                baseTag: [],
	                bodyAttributes: {},
	                encodeSpecialCharacters: true,
	                htmlAttributes: {},
	                linkTags: [],
	                metaTags: [],
	                noscriptTags: [],
	                scriptTags: [],
	                styleTags: [],
	                title: "",
	                titleAttributes: {}
	            });
	        }
	
	        return mappedState;
	    }, _temp;
	};
	
	var NullComponent = function NullComponent() {
	    return null;
	};
	
	var HelmetSideEffects = (0, _reactSideEffect2.default)(_HelmetUtils.reducePropsToState, _HelmetUtils.handleClientStateChange, _HelmetUtils.mapStateOnServer)(NullComponent);
	
	var HelmetExport = Helmet(HelmetSideEffects);
	HelmetExport.renderStatic = HelmetExport.rewind;
	
	exports.Helmet = HelmetExport;
	exports.default = HelmetExport;

/***/ }),

/***/ "./node_modules/react-helmet/lib/HelmetConstants.js":
/***/ (function(module, exports) {

	exports.__esModule = true;
	var ATTRIBUTE_NAMES = exports.ATTRIBUTE_NAMES = {
	    BODY: "bodyAttributes",
	    HTML: "htmlAttributes",
	    TITLE: "titleAttributes"
	};
	
	var TAG_NAMES = exports.TAG_NAMES = {
	    BASE: "base",
	    BODY: "body",
	    HEAD: "head",
	    HTML: "html",
	    LINK: "link",
	    META: "meta",
	    NOSCRIPT: "noscript",
	    SCRIPT: "script",
	    STYLE: "style",
	    TITLE: "title"
	};
	
	var VALID_TAG_NAMES = exports.VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
	    return TAG_NAMES[name];
	});
	
	var TAG_PROPERTIES = exports.TAG_PROPERTIES = {
	    CHARSET: "charset",
	    CSS_TEXT: "cssText",
	    HREF: "href",
	    HTTPEQUIV: "http-equiv",
	    INNER_HTML: "innerHTML",
	    ITEM_PROP: "itemprop",
	    NAME: "name",
	    PROPERTY: "property",
	    REL: "rel",
	    SRC: "src"
	};
	
	var REACT_TAG_MAP = exports.REACT_TAG_MAP = {
	    accesskey: "accessKey",
	    charset: "charSet",
	    class: "className",
	    contenteditable: "contentEditable",
	    contextmenu: "contextMenu",
	    "http-equiv": "httpEquiv",
	    itemprop: "itemProp",
	    tabindex: "tabIndex"
	};
	
	var HELMET_PROPS = exports.HELMET_PROPS = {
	    DEFAULT_TITLE: "defaultTitle",
	    DEFER: "defer",
	    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
	    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
	    TITLE_TEMPLATE: "titleTemplate"
	};
	
	var HTML_TAG_MAP = exports.HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
	    obj[REACT_TAG_MAP[key]] = key;
	    return obj;
	}, {});
	
	var SELF_CLOSING_TAGS = exports.SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];
	
	var HELMET_ATTRIBUTE = exports.HELMET_ATTRIBUTE = "data-react-helmet";

/***/ }),

/***/ "./node_modules/react-helmet/lib/HelmetUtils.js":
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {exports.__esModule = true;
	exports.warn = exports.requestAnimationFrame = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__("./node_modules/object-assign/index.js");
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _HelmetConstants = __webpack_require__("./node_modules/react-helmet/lib/HelmetConstants.js");
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
	    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	    if (encode === false) {
	        return String(str);
	    }
	
	    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
	};
	
	var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
	    var innermostTitle = getInnermostProperty(propsList, _HelmetConstants.TAG_NAMES.TITLE);
	    var innermostTemplate = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.TITLE_TEMPLATE);
	
	    if (innermostTemplate && innermostTitle) {
	        // use function arg to avoid need to escape $ characters
	        return innermostTemplate.replace(/%s/g, function () {
	            return innermostTitle;
	        });
	    }
	
	    var innermostDefaultTitle = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFAULT_TITLE);
	
	    return innermostTitle || innermostDefaultTitle || undefined;
	};
	
	var getOnChangeClientState = function getOnChangeClientState(propsList) {
	    return getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
	};
	
	var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
	    return propsList.filter(function (props) {
	        return typeof props[tagType] !== "undefined";
	    }).map(function (props) {
	        return props[tagType];
	    }).reduce(function (tagAttrs, current) {
	        return _extends({}, tagAttrs, current);
	    }, {});
	};
	
	var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
	    return propsList.filter(function (props) {
	        return typeof props[_HelmetConstants.TAG_NAMES.BASE] !== "undefined";
	    }).map(function (props) {
	        return props[_HelmetConstants.TAG_NAMES.BASE];
	    }).reverse().reduce(function (innermostBaseTag, tag) {
	        if (!innermostBaseTag.length) {
	            var keys = Object.keys(tag);
	
	            for (var i = 0; i < keys.length; i++) {
	                var attributeKey = keys[i];
	                var lowerCaseAttributeKey = attributeKey.toLowerCase();
	
	                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
	                    return innermostBaseTag.concat(tag);
	                }
	            }
	        }
	
	        return innermostBaseTag;
	    }, []);
	};
	
	var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
	    // Calculate list of tags, giving priority innermost component (end of the propslist)
	    var approvedSeenTags = {};
	
	    return propsList.filter(function (props) {
	        if (Array.isArray(props[tagName])) {
	            return true;
	        }
	        if (typeof props[tagName] !== "undefined") {
	            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
	        }
	        return false;
	    }).map(function (props) {
	        return props[tagName];
	    }).reverse().reduce(function (approvedTags, instanceTags) {
	        var instanceSeenTags = {};
	
	        instanceTags.filter(function (tag) {
	            var primaryAttributeKey = void 0;
	            var keys = Object.keys(tag);
	            for (var i = 0; i < keys.length; i++) {
	                var attributeKey = keys[i];
	                var lowerCaseAttributeKey = attributeKey.toLowerCase();
	
	                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
	                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
	                    primaryAttributeKey = lowerCaseAttributeKey;
	                }
	                // Special case for innerHTML which doesn't work lowercased
	                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT || attributeKey === _HelmetConstants.TAG_PROPERTIES.ITEM_PROP)) {
	                    primaryAttributeKey = attributeKey;
	                }
	            }
	
	            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
	                return false;
	            }
	
	            var value = tag[primaryAttributeKey].toLowerCase();
	
	            if (!approvedSeenTags[primaryAttributeKey]) {
	                approvedSeenTags[primaryAttributeKey] = {};
	            }
	
	            if (!instanceSeenTags[primaryAttributeKey]) {
	                instanceSeenTags[primaryAttributeKey] = {};
	            }
	
	            if (!approvedSeenTags[primaryAttributeKey][value]) {
	                instanceSeenTags[primaryAttributeKey][value] = true;
	                return true;
	            }
	
	            return false;
	        }).reverse().forEach(function (tag) {
	            return approvedTags.push(tag);
	        });
	
	        // Update seen tags with tags from this instance
	        var keys = Object.keys(instanceSeenTags);
	        for (var i = 0; i < keys.length; i++) {
	            var attributeKey = keys[i];
	            var tagUnion = (0, _objectAssign2.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);
	
	            approvedSeenTags[attributeKey] = tagUnion;
	        }
	
	        return approvedTags;
	    }, []).reverse();
	};
	
	var getInnermostProperty = function getInnermostProperty(propsList, property) {
	    for (var i = propsList.length - 1; i >= 0; i--) {
	        var props = propsList[i];
	
	        if (props.hasOwnProperty(property)) {
	            return props[property];
	        }
	    }
	
	    return null;
	};
	
	var reducePropsToState = function reducePropsToState(propsList) {
	    return {
	        baseTag: getBaseTagFromPropsList([_HelmetConstants.TAG_PROPERTIES.HREF], propsList),
	        bodyAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.BODY, propsList),
	        defer: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFER),
	        encode: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
	        htmlAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.HTML, propsList),
	        linkTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.LINK, [_HelmetConstants.TAG_PROPERTIES.REL, _HelmetConstants.TAG_PROPERTIES.HREF], propsList),
	        metaTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.META, [_HelmetConstants.TAG_PROPERTIES.NAME, _HelmetConstants.TAG_PROPERTIES.CHARSET, _HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstants.TAG_PROPERTIES.PROPERTY, _HelmetConstants.TAG_PROPERTIES.ITEM_PROP], propsList),
	        noscriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.NOSCRIPT, [_HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
	        onChangeClientState: getOnChangeClientState(propsList),
	        scriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.SCRIPT, [_HelmetConstants.TAG_PROPERTIES.SRC, _HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
	        styleTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.STYLE, [_HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),
	        title: getTitleFromPropsList(propsList),
	        titleAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.TITLE, propsList)
	    };
	};
	
	var rafPolyfill = function () {
	    var clock = Date.now();
	
	    return function (callback) {
	        var currentTime = Date.now();
	
	        if (currentTime - clock > 16) {
	            clock = currentTime;
	            callback(currentTime);
	        } else {
	            setTimeout(function () {
	                rafPolyfill(callback);
	            }, 0);
	        }
	    };
	}();
	
	var cafPolyfill = function cafPolyfill(id) {
	    return clearTimeout(id);
	};
	
	var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;
	
	var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;
	
	var warn = function warn(msg) {
	    return console && typeof console.warn === "function" && console.warn(msg);
	};
	
	var _helmetCallback = null;
	
	var handleClientStateChange = function handleClientStateChange(newState) {
	    if (_helmetCallback) {
	        cancelAnimationFrame(_helmetCallback);
	    }
	
	    if (newState.defer) {
	        _helmetCallback = requestAnimationFrame(function () {
	            commitTagChanges(newState, function () {
	                _helmetCallback = null;
	            });
	        });
	    } else {
	        commitTagChanges(newState);
	        _helmetCallback = null;
	    }
	};
	
	var commitTagChanges = function commitTagChanges(newState, cb) {
	    var baseTag = newState.baseTag,
	        bodyAttributes = newState.bodyAttributes,
	        htmlAttributes = newState.htmlAttributes,
	        linkTags = newState.linkTags,
	        metaTags = newState.metaTags,
	        noscriptTags = newState.noscriptTags,
	        onChangeClientState = newState.onChangeClientState,
	        scriptTags = newState.scriptTags,
	        styleTags = newState.styleTags,
	        title = newState.title,
	        titleAttributes = newState.titleAttributes;
	
	    updateAttributes(_HelmetConstants.TAG_NAMES.BODY, bodyAttributes);
	    updateAttributes(_HelmetConstants.TAG_NAMES.HTML, htmlAttributes);
	
	    updateTitle(title, titleAttributes);
	
	    var tagUpdates = {
	        baseTag: updateTags(_HelmetConstants.TAG_NAMES.BASE, baseTag),
	        linkTags: updateTags(_HelmetConstants.TAG_NAMES.LINK, linkTags),
	        metaTags: updateTags(_HelmetConstants.TAG_NAMES.META, metaTags),
	        noscriptTags: updateTags(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),
	        scriptTags: updateTags(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),
	        styleTags: updateTags(_HelmetConstants.TAG_NAMES.STYLE, styleTags)
	    };
	
	    var addedTags = {};
	    var removedTags = {};
	
	    Object.keys(tagUpdates).forEach(function (tagType) {
	        var _tagUpdates$tagType = tagUpdates[tagType],
	            newTags = _tagUpdates$tagType.newTags,
	            oldTags = _tagUpdates$tagType.oldTags;
	
	
	        if (newTags.length) {
	            addedTags[tagType] = newTags;
	        }
	        if (oldTags.length) {
	            removedTags[tagType] = tagUpdates[tagType].oldTags;
	        }
	    });
	
	    cb && cb();
	
	    onChangeClientState(newState, addedTags, removedTags);
	};
	
	var flattenArray = function flattenArray(possibleArray) {
	    return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
	};
	
	var updateTitle = function updateTitle(title, attributes) {
	    if (typeof title !== "undefined" && document.title !== title) {
	        document.title = flattenArray(title);
	    }
	
	    updateAttributes(_HelmetConstants.TAG_NAMES.TITLE, attributes);
	};
	
	var updateAttributes = function updateAttributes(tagName, attributes) {
	    var elementTag = document.getElementsByTagName(tagName)[0];
	
	    if (!elementTag) {
	        return;
	    }
	
	    var helmetAttributeString = elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
	    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
	    var attributesToRemove = [].concat(helmetAttributes);
	    var attributeKeys = Object.keys(attributes);
	
	    for (var i = 0; i < attributeKeys.length; i++) {
	        var attribute = attributeKeys[i];
	        var value = attributes[attribute] || "";
	
	        if (elementTag.getAttribute(attribute) !== value) {
	            elementTag.setAttribute(attribute, value);
	        }
	
	        if (helmetAttributes.indexOf(attribute) === -1) {
	            helmetAttributes.push(attribute);
	        }
	
	        var indexToSave = attributesToRemove.indexOf(attribute);
	        if (indexToSave !== -1) {
	            attributesToRemove.splice(indexToSave, 1);
	        }
	    }
	
	    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
	        elementTag.removeAttribute(attributesToRemove[_i]);
	    }
	
	    if (helmetAttributes.length === attributesToRemove.length) {
	        elementTag.removeAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
	    } else if (elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
	        elementTag.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, attributeKeys.join(","));
	    }
	};
	
	var updateTags = function updateTags(type, tags) {
	    var headElement = document.head || document.querySelector(_HelmetConstants.TAG_NAMES.HEAD);
	    var tagNodes = headElement.querySelectorAll(type + "[" + _HelmetConstants.HELMET_ATTRIBUTE + "]");
	    var oldTags = Array.prototype.slice.call(tagNodes);
	    var newTags = [];
	    var indexToDelete = void 0;
	
	    if (tags && tags.length) {
	        tags.forEach(function (tag) {
	            var newElement = document.createElement(type);
	
	            for (var attribute in tag) {
	                if (tag.hasOwnProperty(attribute)) {
	                    if (attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML) {
	                        newElement.innerHTML = tag.innerHTML;
	                    } else if (attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
	                        if (newElement.styleSheet) {
	                            newElement.styleSheet.cssText = tag.cssText;
	                        } else {
	                            newElement.appendChild(document.createTextNode(tag.cssText));
	                        }
	                    } else {
	                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
	                        newElement.setAttribute(attribute, value);
	                    }
	                }
	            }
	
	            newElement.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, "true");
	
	            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
	            if (oldTags.some(function (existingTag, index) {
	                indexToDelete = index;
	                return newElement.isEqualNode(existingTag);
	            })) {
	                oldTags.splice(indexToDelete, 1);
	            } else {
	                newTags.push(newElement);
	            }
	        });
	    }
	
	    oldTags.forEach(function (tag) {
	        return tag.parentNode.removeChild(tag);
	    });
	    newTags.forEach(function (tag) {
	        return headElement.appendChild(tag);
	    });
	
	    return {
	        oldTags: oldTags,
	        newTags: newTags
	    };
	};
	
	var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
	    return Object.keys(attributes).reduce(function (str, key) {
	        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
	        return str ? str + " " + attr : attr;
	    }, "");
	};
	
	var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
	    var attributeString = generateElementAttributesAsString(attributes);
	    var flattenedTitle = flattenArray(title);
	    return attributeString ? "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
	};
	
	var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
	    return tags.reduce(function (str, tag) {
	        var attributeHtml = Object.keys(tag).filter(function (attribute) {
	            return !(attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT);
	        }).reduce(function (string, attribute) {
	            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
	            return string ? string + " " + attr : attr;
	        }, "");
	
	        var tagContent = tag.innerHTML || tag.cssText || "";
	
	        var isSelfClosing = _HelmetConstants.SELF_CLOSING_TAGS.indexOf(type) === -1;
	
	        return str + "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
	    }, "");
	};
	
	var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
	    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return Object.keys(attributes).reduce(function (obj, key) {
	        obj[_HelmetConstants.REACT_TAG_MAP[key] || key] = attributes[key];
	        return obj;
	    }, initProps);
	};
	
	var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
	    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    return Object.keys(props).reduce(function (obj, key) {
	        obj[_HelmetConstants.HTML_TAG_MAP[key] || key] = props[key];
	        return obj;
	    }, initAttributes);
	};
	
	var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
	    var _initProps;
	
	    // assigning into an array to define toString function on it
	    var initProps = (_initProps = {
	        key: title
	    }, _initProps[_HelmetConstants.HELMET_ATTRIBUTE] = true, _initProps);
	    var props = convertElementAttributestoReactProps(attributes, initProps);
	
	    return [_react2.default.createElement(_HelmetConstants.TAG_NAMES.TITLE, props, title)];
	};
	
	var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
	    return tags.map(function (tag, i) {
	        var _mappedTag;
	
	        var mappedTag = (_mappedTag = {
	            key: i
	        }, _mappedTag[_HelmetConstants.HELMET_ATTRIBUTE] = true, _mappedTag);
	
	        Object.keys(tag).forEach(function (attribute) {
	            var mappedAttribute = _HelmetConstants.REACT_TAG_MAP[attribute] || attribute;
	
	            if (mappedAttribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || mappedAttribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
	                var content = tag.innerHTML || tag.cssText;
	                mappedTag.dangerouslySetInnerHTML = { __html: content };
	            } else {
	                mappedTag[mappedAttribute] = tag[attribute];
	            }
	        });
	
	        return _react2.default.createElement(type, mappedTag);
	    });
	};
	
	var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
	    switch (type) {
	        case _HelmetConstants.TAG_NAMES.TITLE:
	            return {
	                toComponent: function toComponent() {
	                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
	                },
	                toString: function toString() {
	                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
	                }
	            };
	        case _HelmetConstants.ATTRIBUTE_NAMES.BODY:
	        case _HelmetConstants.ATTRIBUTE_NAMES.HTML:
	            return {
	                toComponent: function toComponent() {
	                    return convertElementAttributestoReactProps(tags);
	                },
	                toString: function toString() {
	                    return generateElementAttributesAsString(tags);
	                }
	            };
	        default:
	            return {
	                toComponent: function toComponent() {
	                    return generateTagsAsReactComponent(type, tags);
	                },
	                toString: function toString() {
	                    return generateTagsAsString(type, tags, encode);
	                }
	            };
	    }
	};
	
	var mapStateOnServer = function mapStateOnServer(_ref) {
	    var baseTag = _ref.baseTag,
	        bodyAttributes = _ref.bodyAttributes,
	        encode = _ref.encode,
	        htmlAttributes = _ref.htmlAttributes,
	        linkTags = _ref.linkTags,
	        metaTags = _ref.metaTags,
	        noscriptTags = _ref.noscriptTags,
	        scriptTags = _ref.scriptTags,
	        styleTags = _ref.styleTags,
	        _ref$title = _ref.title,
	        title = _ref$title === undefined ? "" : _ref$title,
	        titleAttributes = _ref.titleAttributes;
	    return {
	        base: getMethodsForTag(_HelmetConstants.TAG_NAMES.BASE, baseTag, encode),
	        bodyAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
	        htmlAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
	        link: getMethodsForTag(_HelmetConstants.TAG_NAMES.LINK, linkTags, encode),
	        meta: getMethodsForTag(_HelmetConstants.TAG_NAMES.META, metaTags, encode),
	        noscript: getMethodsForTag(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags, encode),
	        script: getMethodsForTag(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags, encode),
	        style: getMethodsForTag(_HelmetConstants.TAG_NAMES.STYLE, styleTags, encode),
	        title: getMethodsForTag(_HelmetConstants.TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
	    };
	};
	
	exports.convertReactPropstoHtmlAttributes = convertReactPropstoHtmlAttributes;
	exports.handleClientStateChange = handleClientStateChange;
	exports.mapStateOnServer = mapStateOnServer;
	exports.reducePropsToState = reducePropsToState;
	exports.requestAnimationFrame = requestAnimationFrame;
	exports.warn = warn;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ "./node_modules/react-side-effect/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _exenv = __webpack_require__("./node_modules/exenv/index.js");
	
	var _exenv2 = _interopRequireDefault(_exenv);
	
	var _shallowequal = __webpack_require__("./node_modules/shallowequal/index.js");
	
	var _shallowequal2 = _interopRequireDefault(_shallowequal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	module.exports = function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
	  if (typeof reducePropsToState !== 'function') {
	    throw new Error('Expected reducePropsToState to be a function.');
	  }
	  if (typeof handleStateChangeOnClient !== 'function') {
	    throw new Error('Expected handleStateChangeOnClient to be a function.');
	  }
	  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
	    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
	  }
	
	  function getDisplayName(WrappedComponent) {
	    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	  }
	
	  return function wrap(WrappedComponent) {
	    if (typeof WrappedComponent !== 'function') {
	      throw new Error('Expected WrappedComponent to be a React component.');
	    }
	
	    var mountedInstances = [];
	    var state = void 0;
	
	    function emitChange() {
	      state = reducePropsToState(mountedInstances.map(function (instance) {
	        return instance.props;
	      }));
	
	      if (SideEffect.canUseDOM) {
	        handleStateChangeOnClient(state);
	      } else if (mapStateOnServer) {
	        state = mapStateOnServer(state);
	      }
	    }
	
	    var SideEffect = function (_Component) {
	      _inherits(SideEffect, _Component);
	
	      function SideEffect() {
	        _classCallCheck(this, SideEffect);
	
	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	      }
	
	      // Try to use displayName of wrapped component
	      SideEffect.peek = function peek() {
	        return state;
	      };
	
	      // Expose canUseDOM so tests can monkeypatch it
	
	
	      SideEffect.rewind = function rewind() {
	        if (SideEffect.canUseDOM) {
	          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
	        }
	
	        var recordedState = state;
	        state = undefined;
	        mountedInstances = [];
	        return recordedState;
	      };
	
	      SideEffect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	        return !(0, _shallowequal2.default)(nextProps, this.props);
	      };
	
	      SideEffect.prototype.componentWillMount = function componentWillMount() {
	        mountedInstances.push(this);
	        emitChange();
	      };
	
	      SideEffect.prototype.componentDidUpdate = function componentDidUpdate() {
	        emitChange();
	      };
	
	      SideEffect.prototype.componentWillUnmount = function componentWillUnmount() {
	        var index = mountedInstances.indexOf(this);
	        mountedInstances.splice(index, 1);
	        emitChange();
	      };
	
	      SideEffect.prototype.render = function render() {
	        return _react2.default.createElement(WrappedComponent, this.props);
	      };
	
	      return SideEffect;
	    }(_react.Component);
	
	    SideEffect.displayName = 'SideEffect(' + getDisplayName(WrappedComponent) + ')';
	    SideEffect.canUseDOM = _exenv2.default.canUseDOM;
	
	
	    return SideEffect;
	  };
	};

/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/***/ (function(module, exports) {

	module.exports = function shallowEqual(objA, objB, compare, compareContext) {
	
	    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
	
	    if(ret !== void 0) {
	        return !!ret;
	    }
	
	    if(objA === objB) {
	        return true;
	    }
	
	    if(typeof objA !== 'object' || !objA ||
	       typeof objB !== 'object' || !objB) {
	        return false;
	    }
	
	    var keysA = Object.keys(objA);
	    var keysB = Object.keys(objB);
	
	    if(keysA.length !== keysB.length) {
	        return false;
	    }
	
	    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	
	    // Test for A's keys different from B.
	    for(var idx = 0; idx < keysA.length; idx++) {
	
	        var key = keysA[idx];
	
	        if(!bHasOwnProperty(key)) {
	            return false;
	        }
	
	        var valueA = objA[key];
	        var valueB = objB[key];
	
	        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
	
	        if(ret === false ||
	           ret === void 0 && valueA !== valueB) {
	            return false;
	        }
	
	    }
	
	    return true;
	
	};


/***/ }),

/***/ "./node_modules/striptags/src/striptags.js":
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	(function (global) {
	
	    // minimal symbol polyfill for IE11 and others
	    if (typeof Symbol !== 'function') {
	        var Symbol = function(name) {
	            return name;
	        }
	
	        Symbol.nonNative = true;
	    }
	
	    const STATE_PLAINTEXT = Symbol('plaintext');
	    const STATE_HTML      = Symbol('html');
	    const STATE_COMMENT   = Symbol('comment');
	
	    const ALLOWED_TAGS_REGEX  = /<(\w*)>/g;
	    const NORMALIZE_TAG_REGEX = /<\/?([^\s\/>]+)/;
	
	    function striptags(html, allowable_tags, tag_replacement) {
	        html            = html || '';
	        allowable_tags  = allowable_tags || [];
	        tag_replacement = tag_replacement || '';
	
	        let context = init_context(allowable_tags, tag_replacement);
	
	        return striptags_internal(html, context);
	    }
	
	    function init_striptags_stream(allowable_tags, tag_replacement) {
	        allowable_tags  = allowable_tags || [];
	        tag_replacement = tag_replacement || '';
	
	        let context = init_context(allowable_tags, tag_replacement);
	
	        return function striptags_stream(html) {
	            return striptags_internal(html || '', context);
	        };
	    }
	
	    striptags.init_streaming_mode = init_striptags_stream;
	
	    function init_context(allowable_tags, tag_replacement) {
	        allowable_tags = parse_allowable_tags(allowable_tags);
	
	        return {
	            allowable_tags : allowable_tags,
	            tag_replacement: tag_replacement,
	
	            state         : STATE_PLAINTEXT,
	            tag_buffer    : '',
	            depth         : 0,
	            in_quote_char : ''
	        };
	    }
	
	    function striptags_internal(html, context) {
	        let allowable_tags  = context.allowable_tags;
	        let tag_replacement = context.tag_replacement;
	
	        let state         = context.state;
	        let tag_buffer    = context.tag_buffer;
	        let depth         = context.depth;
	        let in_quote_char = context.in_quote_char;
	        let output        = '';
	
	        for (let idx = 0, length = html.length; idx < length; idx++) {
	            let char = html[idx];
	
	            if (state === STATE_PLAINTEXT) {
	                switch (char) {
	                    case '<':
	                        state       = STATE_HTML;
	                        tag_buffer += char;
	                        break;
	
	                    default:
	                        output += char;
	                        break;
	                }
	            }
	
	            else if (state === STATE_HTML) {
	                switch (char) {
	                    case '<':
	                        // ignore '<' if inside a quote
	                        if (in_quote_char) {
	                            break;
	                        }
	
	                        // we're seeing a nested '<'
	                        depth++;
	                        break;
	
	                    case '>':
	                        // ignore '>' if inside a quote
	                        if (in_quote_char) {
	                            break;
	                        }
	
	                        // something like this is happening: '<<>>'
	                        if (depth) {
	                            depth--;
	
	                            break;
	                        }
	
	                        // this is closing the tag in tag_buffer
	                        in_quote_char = '';
	                        state         = STATE_PLAINTEXT;
	                        tag_buffer   += '>';
	
	                        if (allowable_tags.has(normalize_tag(tag_buffer))) {
	                            output += tag_buffer;
	                        } else {
	                            output += tag_replacement;
	                        }
	
	                        tag_buffer = '';
	                        break;
	
	                    case '"':
	                    case '\'':
	                        // catch both single and double quotes
	
	                        if (char === in_quote_char) {
	                            in_quote_char = '';
	                        } else {
	                            in_quote_char = in_quote_char || char;
	                        }
	
	                        tag_buffer += char;
	                        break;
	
	                    case '-':
	                        if (tag_buffer === '<!-') {
	                            state = STATE_COMMENT;
	                        }
	
	                        tag_buffer += char;
	                        break;
	
	                    case ' ':
	                    case '\n':
	                        if (tag_buffer === '<') {
	                            state      = STATE_PLAINTEXT;
	                            output    += '< ';
	                            tag_buffer = '';
	
	                            break;
	                        }
	
	                        tag_buffer += char;
	                        break;
	
	                    default:
	                        tag_buffer += char;
	                        break;
	                }
	            }
	
	            else if (state === STATE_COMMENT) {
	                switch (char) {
	                    case '>':
	                        if (tag_buffer.slice(-2) == '--') {
	                            // close the comment
	                            state = STATE_PLAINTEXT;
	                        }
	
	                        tag_buffer = '';
	                        break;
	
	                    default:
	                        tag_buffer += char;
	                        break;
	                }
	            }
	        }
	
	        // save the context for future iterations
	        context.state         = state;
	        context.tag_buffer    = tag_buffer;
	        context.depth         = depth;
	        context.in_quote_char = in_quote_char;
	
	        return output;
	    }
	
	    function parse_allowable_tags(allowable_tags) {
	        let tag_set = new Set();
	
	        if (typeof allowable_tags === 'string') {
	            let match;
	
	            while ((match = ALLOWED_TAGS_REGEX.exec(allowable_tags))) {
	                tag_set.add(match[1]);
	            }
	        }
	
	        else if (!Symbol.nonNative &&
	                 typeof allowable_tags[Symbol.iterator] === 'function') {
	
	            tag_set = new Set(allowable_tags);
	        }
	
	        else if (typeof allowable_tags.forEach === 'function') {
	            // IE11 compatible
	            allowable_tags.forEach(tag_set.add, tag_set);
	        }
	
	        return tag_set;
	    }
	
	    function normalize_tag(tag_buffer) {
	        let match = NORMALIZE_TAG_REGEX.exec(tag_buffer);
	
	        return match ? match[1].toLowerCase() : null;
	    }
	
	    if (true) {
	        // AMD
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function module_factory() { return striptags; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	
	    else if (typeof module === 'object' && module.exports) {
	        // Node
	        module.exports = striptags;
	    }
	
	    else {
	        // Browser
	        global.striptags = striptags;
	    }
	}(this));


/***/ }),

/***/ "./node_modules/styled-components/lib/constructors/constructWithOptions.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var babelPluginFlowReactPropTypes_proptype_Target = __webpack_require__("./node_modules/styled-components/lib/types.js").babelPluginFlowReactPropTypes_proptype_Target || __webpack_require__("./node_modules/prop-types/index.js").any;
	
	var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__("./node_modules/styled-components/lib/types.js").babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__("./node_modules/prop-types/index.js").any;
	
	exports.default = function (css) {
	  var constructWithOptions = function constructWithOptions(componentConstructor, tag) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	    if (typeof tag !== 'string' && typeof tag !== 'function') {
	      // $FlowInvalidInputTest
	      throw new Error('Cannot create styled-component for component: ' + tag);
	    }
	
	    /* This is callable directly as a template function */
	    var templateFunction = function templateFunction(strings) {
	      for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        interpolations[_key - 1] = arguments[_key];
	      }
	
	      return componentConstructor(tag, options, css.apply(undefined, [strings].concat(interpolations)));
	    };
	
	    /* If config methods are called, wrap up a new template function and merge options */
	    templateFunction.withConfig = function (config) {
	      return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
	    };
	    templateFunction.attrs = function (attrs) {
	      return constructWithOptions(componentConstructor, tag, _extends({}, options, {
	        attrs: _extends({}, options.attrs || {}, attrs) }));
	    };
	
	    return templateFunction;
	  };
	
	  return constructWithOptions;
	};
	
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/styled-components/lib/constructors/css.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _interleave = __webpack_require__("./node_modules/styled-components/lib/utils/interleave.js");
	
	var _interleave2 = _interopRequireDefault(_interleave);
	
	var _flatten = __webpack_require__("./node_modules/styled-components/lib/utils/flatten.js");
	
	var _flatten2 = _interopRequireDefault(_flatten);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var babelPluginFlowReactPropTypes_proptype_RuleSet = __webpack_require__("./node_modules/styled-components/lib/types.js").babelPluginFlowReactPropTypes_proptype_RuleSet || __webpack_require__("./node_modules/prop-types/index.js").any;
	
	var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__("./node_modules/styled-components/lib/types.js").babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__("./node_modules/prop-types/index.js").any;
	
	exports.default = function (strings) {
	  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    interpolations[_key - 1] = arguments[_key];
	  }
	
	  return (0, _flatten2.default)((0, _interleave2.default)(strings, interpolations));
	};
	
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/styled-components/lib/constructors/injectGlobal.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _hash = __webpack_require__("./node_modules/styled-components/lib/vendor/glamor/hash.js");
	
	var _hash2 = _interopRequireDefault(_hash);
	
	var _StyleSheet = __webpack_require__("./node_modules/styled-components/lib/models/StyleSheet.js");
	
	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var babelPluginFlowReactPropTypes_proptype_Stringifier = __webpack_require__("./node_modules/styled-components/lib/types.js").babelPluginFlowReactPropTypes_proptype_Stringifier || __webpack_require__("./node_modules/prop-types/index.js").any;
	
	var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__("./node_modules/styled-components/lib/types.js").babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__("./node_modules/prop-types/index.js").any;
	
	exports.default = function (stringifyRules, css) {
	  var injectGlobal = function injectGlobal(strings) {
	    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      interpolations[_key - 1] = arguments[_key];
	    }
	
	    var rules = css.apply(undefined, [strings].concat(interpolations));
	    var hash = (0, _hash2.default)(JSON.stringify(rules));
	
	    var componentId = 'sc-global-' + hash;
	    if (_StyleSheet2.default.instance.hasInjectedComponent(componentId)) return;
	
	    _StyleSheet2.default.instance.inject(componentId, false, stringifyRules(rules));
	  };
	
	  return injectGlobal;
	};
	
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/styled-components/lib/constructors/keyframes.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _hash = __webpack_require__("./node_modules/styled-components/lib/vendor/glamor/hash.js");
	
	var _hash2 = _interopRequireDefault(_hash);
	
	var _StyleSheet = __webpack_require__("./node_modules/styled-components/lib/models/StyleSheet.js");
	
	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var babelPluginFlowReactPropTypes_proptype_Stringifier = __webpack_require__("./node_modules/styled-components/lib/types.js").babelPluginFlowReactPropTypes_proptype_Stringifier || __webpack_require__("./node_modules/prop-types/index.js").any;
	
	var babelPluginFlowReactPropTypes_proptype_NameGenerator = __webpack_require__("./node_modules/styled-components/lib/types.js").babelPluginFlowReactPropTypes_proptype_NameGenerator || __webpack_require__("./node_modules/prop-types/index.js").any;
	
	var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__("./node_modules/styled-components/lib/types.js").babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__("./node_modules/prop-types/index.js").any;
	
	var replaceWhitespace = function replaceWhitespace(str) {
	  return str.replace(/\s|\\n/g, '');
	};
	
	exports.default = function (nameGenerator, stringifyRules, css) {
	  return function (strings) {
	    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      interpolations[_key - 1] = arguments[_key];
	    }
	
	    var rules = css.apply(undefined, [strings].concat(interpolations));
	    var hash = (0, _hash2.default)(replaceWhitespace(JSON.stringify(rules)));
	
	    var existingName = _StyleSheet2.default.instance.getName(hash);
	    if (existingName) return existingName;
	
	    var name = nameGenerator(hash);
	    if (_StyleSheet2.default.instance.alreadyInjected(hash, name)) return name;
	
	    var generatedCSS = stringifyRules(rules, name, '@keyframes');
	    _StyleSheet2.default.instance.inject('sc-keyframes-' + name, true, generatedCSS, hash, name);
	    return name;
	  };
	};
	
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/styled-components/lib/constructors/styled.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _domElements = __webpack_require__("./node_modules/styled-components/lib/utils/domElements.js");
	
	var _domElements2 = _interopRequireDefault(_domElements);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var babelPluginFlowReactPropTypes_proptype_Target = __webpack_require__("./node_modules/styled-components/lib/types.js").babelPluginFlowReactPropTypes_proptype_Target || __webpack_require__("./node_modules/prop-types/index.js").any;
	
	exports.default = function (styledComponent, constructWithOptions) {
	  var styled = function styled(tag) {
	    return constructWithOptions(styledComponent, tag);
	  };
	
	  // Shorthands for all valid HTML Elements
	  _domElements2.default.forEach(function (domElement) {
	    styled[domElement] = styled(domElement);
	  });
	
	  return styled;
	};
	
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/styled-components/lib/hoc/withTheme.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _hoistNonReactStatics = __webpack_require__("./node_modules/hoist-non-react-statics/index.js");
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _ThemeProvider = __webpack_require__("./node_modules/styled-components/lib/models/ThemeProvider.js");
	
	var _isStyledComponent2 = __webpack_require__("./node_modules/styled-components/lib/utils/isStyledComponent.js");
	
	var _isStyledComponent3 = _interopRequireDefault(_isStyledComponent2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	/* globals ReactClass */
	
	var wrapWithTheme = function wrapWithTheme(Component) {
	  var _WithTheme$contextTyp;
	
	  var componentName = Component.displayName || Component.name || 'Component';
	
	  var isStyledComponent = (0, _isStyledComponent3.default)(Component);
	
	  var WithTheme = function (_React$Component) {
	    _inherits(WithTheme, _React$Component);
	
	    function WithTheme() {
	      var _temp, _this, _ret;
	
	      _classCallCheck(this, WithTheme);
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    // NOTE: This is so that isStyledComponent passes for the innerRef unwrapping
	
	
	    WithTheme.prototype.componentWillMount = function componentWillMount() {
	      var _this2 = this;
	
	      if (!this.context[_ThemeProvider.CHANNEL]) {
	        throw new Error('[withTheme] Please use ThemeProvider to be able to use withTheme');
	      }
	
	      var subscribe = this.context[_ThemeProvider.CHANNEL];
	      this.unsubscribe = subscribe(function (theme) {
	        _this2.setState({ theme: theme });
	      });
	    };
	
	    WithTheme.prototype.componentWillUnmount = function componentWillUnmount() {
	      if (typeof this.unsubscribe === 'function') this.unsubscribe();
	    };
	
	    WithTheme.prototype.render = function render() {
	      // eslint-disable-next-line react/prop-types
	      var innerRef = this.props.innerRef;
	      var theme = this.state.theme;
	
	
	      return _react2.default.createElement(Component, _extends({
	        theme: theme
	      }, this.props, {
	        innerRef: isStyledComponent ? innerRef : undefined,
	        ref: isStyledComponent ? undefined : innerRef
	      }));
	    };
	
	    return WithTheme;
	  }(_react2.default.Component);
	
	  WithTheme.displayName = 'WithTheme(' + componentName + ')';
	  WithTheme.styledComponentId = 'withTheme';
	  WithTheme.contextTypes = (_WithTheme$contextTyp = {}, _WithTheme$contextTyp[_ThemeProvider.CHANNEL] = _propTypes2.default.func, _WithTheme$contextTyp);
	
	
	  return (0, _hoistNonReactStatics2.default)(WithTheme, Component);
	};
	
	exports.default = wrapWithTheme;
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/styled-components/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.StyleSheetManager = exports.ServerStyleSheet = exports.withTheme = exports.ThemeProvider = exports.injectGlobal = exports.keyframes = exports.css = undefined;
	
	var _flatten = __webpack_require__("./node_modules/styled-components/lib/utils/flatten.js");
	
	var _flatten2 = _interopRequireDefault(_flatten);
	
	var _stringifyRules = __webpack_require__("./node_modules/styled-components/lib/utils/stringifyRules.js");
	
	var _stringifyRules2 = _interopRequireDefault(_stringifyRules);
	
	var _generateAlphabeticName = __webpack_require__("./node_modules/styled-components/lib/utils/generateAlphabeticName.js");
	
	var _generateAlphabeticName2 = _interopRequireDefault(_generateAlphabeticName);
	
	var _css = __webpack_require__("./node_modules/styled-components/lib/constructors/css.js");
	
	var _css2 = _interopRequireDefault(_css);
	
	var _ServerStyleSheet = __webpack_require__("./node_modules/styled-components/lib/models/ServerStyleSheet.js");
	
	var _ServerStyleSheet2 = _interopRequireDefault(_ServerStyleSheet);
	
	var _StyleSheetManager = __webpack_require__("./node_modules/styled-components/lib/models/StyleSheetManager.js");
	
	var _StyleSheetManager2 = _interopRequireDefault(_StyleSheetManager);
	
	var _StyledComponent2 = __webpack_require__("./node_modules/styled-components/lib/models/StyledComponent.js");
	
	var _StyledComponent3 = _interopRequireDefault(_StyledComponent2);
	
	var _ComponentStyle2 = __webpack_require__("./node_modules/styled-components/lib/models/ComponentStyle.js");
	
	var _ComponentStyle3 = _interopRequireDefault(_ComponentStyle2);
	
	var _styled2 = __webpack_require__("./node_modules/styled-components/lib/constructors/styled.js");
	
	var _styled3 = _interopRequireDefault(_styled2);
	
	var _keyframes2 = __webpack_require__("./node_modules/styled-components/lib/constructors/keyframes.js");
	
	var _keyframes3 = _interopRequireDefault(_keyframes2);
	
	var _injectGlobal2 = __webpack_require__("./node_modules/styled-components/lib/constructors/injectGlobal.js");
	
	var _injectGlobal3 = _interopRequireDefault(_injectGlobal2);
	
	var _constructWithOptions2 = __webpack_require__("./node_modules/styled-components/lib/constructors/constructWithOptions.js");
	
	var _constructWithOptions3 = _interopRequireDefault(_constructWithOptions2);
	
	var _ThemeProvider = __webpack_require__("./node_modules/styled-components/lib/models/ThemeProvider.js");
	
	var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);
	
	var _withTheme = __webpack_require__("./node_modules/styled-components/lib/hoc/withTheme.js");
	
	var _withTheme2 = _interopRequireDefault(_withTheme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* Instantiate singletons */
	
	
	/* Import components */
	
	
	/* Import singleton constructors */
	
	
	/* Import singletons */
	var ComponentStyle = (0, _ComponentStyle3.default)(_generateAlphabeticName2.default, _flatten2.default, _stringifyRules2.default);
	
	/* Import Higher Order Components */
	
	var constructWithOptions = (0, _constructWithOptions3.default)(_css2.default);
	var StyledComponent = (0, _StyledComponent3.default)(ComponentStyle, constructWithOptions);
	
	/* Instantiate exported singletons */
	var keyframes = (0, _keyframes3.default)(_generateAlphabeticName2.default, _stringifyRules2.default, _css2.default);
	var injectGlobal = (0, _injectGlobal3.default)(_stringifyRules2.default, _css2.default);
	var styled = (0, _styled3.default)(StyledComponent, constructWithOptions);
	
	/* Export everything */
	exports.default = styled;
	exports.css = _css2.default;
	exports.keyframes = keyframes;
	exports.injectGlobal = injectGlobal;
	exports.ThemeProvider = _ThemeProvider2.default;
	exports.withTheme = _withTheme2.default;
	exports.ServerStyleSheet = _ServerStyleSheet2.default;
	exports.StyleSheetManager = _StyleSheetManager2.default;

/***/ }),

/***/ "./node_modules/styled-components/lib/models/AbstractStyledComponent.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _AbstractStyledCompon;
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _ThemeProvider = __webpack_require__("./node_modules/styled-components/lib/models/ThemeProvider.js");
	
	var _StyleSheet = __webpack_require__("./node_modules/styled-components/lib/models/StyleSheet.js");
	
	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AbstractStyledComponent = function (_Component) {
	  _inherits(AbstractStyledComponent, _Component);
	
	  function AbstractStyledComponent() {
	    _classCallCheck(this, AbstractStyledComponent);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  return AbstractStyledComponent;
	}(_react.Component);
	
	exports.default = AbstractStyledComponent;
	
	
	AbstractStyledComponent.contextTypes = (_AbstractStyledCompon = {}, _AbstractStyledCompon[_ThemeProvider.CHANNEL] = _propTypes2.default.func, _AbstractStyledCompon[_StyleSheet.CONTEXT_KEY] = _propTypes2.default.instanceOf(_StyleSheet2.default), _AbstractStyledCompon);
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/styled-components/lib/models/BrowserStyleSheet.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.COMPONENTS_PER_TAG = undefined;
	
	var _extractCompsFromCSS = __webpack_require__("./node_modules/styled-components/lib/utils/extractCompsFromCSS.js");
	
	var _extractCompsFromCSS2 = _interopRequireDefault(_extractCompsFromCSS);
	
	var _StyleSheet = __webpack_require__("./node_modules/styled-components/lib/models/StyleSheet.js");
	
	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	/* eslint-disable no-underscore-dangle */
	/*
	 * Browser Style Sheet with Rehydration
	 *
	 * <style data-styled-components="x y z"
	 *        data-styled-components-is-local="true">
	 *   /· sc-component-id: a ·/
	 *   .sc-a { ... }
	 *   .x { ... }
	 *   /· sc-component-id: b ·/
	 *   .sc-b { ... }
	 *   .y { ... }
	 *   .z { ... }
	 * </style>
	 *
	 * Note: replace · with * in the above snippet.
	 * */
	
	
	var babelPluginFlowReactPropTypes_proptype_Tag = __webpack_require__("./node_modules/styled-components/lib/models/StyleSheet.js").babelPluginFlowReactPropTypes_proptype_Tag || __webpack_require__("./node_modules/prop-types/index.js").any;
	
	var COMPONENTS_PER_TAG = exports.COMPONENTS_PER_TAG = 40;
	
	var BrowserTag = function () {
	  function BrowserTag(el, isLocal) {
	    var existingSource = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	
	    _classCallCheck(this, BrowserTag);
	
	    this.el = el;
	    this.isLocal = isLocal;
	    this.ready = false;
	
	    var extractedComps = (0, _extractCompsFromCSS2.default)(existingSource);
	
	    this.size = extractedComps.length;
	    this.components = extractedComps.reduce(function (acc, obj) {
	      acc[obj.componentId] = obj; // eslint-disable-line no-param-reassign
	      return acc;
	    }, {});
	  }
	
	  BrowserTag.prototype.isFull = function isFull() {
	    return this.size >= COMPONENTS_PER_TAG;
	  };
	
	  BrowserTag.prototype.addComponent = function addComponent(componentId) {
	    if (!this.ready) this.replaceElement();
	    if (this.components[componentId]) throw new Error('Trying to add Component \'' + componentId + '\' twice!');
	
	    var comp = { componentId: componentId, textNode: document.createTextNode('') };
	    this.el.appendChild(comp.textNode);
	
	    this.size += 1;
	    this.components[componentId] = comp;
	  };
	
	  BrowserTag.prototype.inject = function inject(componentId, css, name) {
	    if (!this.ready) this.replaceElement();
	    var comp = this.components[componentId];
	
	    if (!comp) throw new Error('Must add a new component before you can inject css into it');
	    if (comp.textNode.data === '') comp.textNode.appendData('\n/* sc-component-id: ' + componentId + ' */\n');
	
	    comp.textNode.appendData(css);
	    if (name) {
	      var existingNames = this.el.getAttribute(_StyleSheet.SC_ATTR);
	      this.el.setAttribute(_StyleSheet.SC_ATTR, existingNames ? existingNames + ' ' + name : name);
	
	      if (typeof window !== 'undefined' && window.__webpack_nonce__) {
	        this.el.setAttribute('nonce', window.__webpack_nonce__);
	      }
	    }
	  };
	
	  BrowserTag.prototype.toHTML = function toHTML() {
	    return this.el.outerHTML;
	  };
	
	  BrowserTag.prototype.toReactElement = function toReactElement() {
	    throw new Error('BrowserTag doesn\'t implement toReactElement!');
	  };
	
	  BrowserTag.prototype.clone = function clone() {
	    throw new Error('BrowserTag cannot be cloned!');
	  };
	
	  /* Because we care about source order, before we can inject anything we need to
	   * create a text node for each component and replace the existing CSS. */
	
	
	  BrowserTag.prototype.replaceElement = function replaceElement() {
	    var _this = this;
	
	    this.ready = true;
	    // We have nothing to inject. Use the current el.
	    if (this.size === 0) return;
	
	    // Build up our replacement style tag
	    var newEl = this.el.cloneNode();
	    newEl.appendChild(document.createTextNode('\n'));
	
	    Object.keys(this.components).forEach(function (key) {
	      var comp = _this.components[key];
	
	      // eslint-disable-next-line no-param-reassign
	      comp.textNode = document.createTextNode(comp.cssFromDOM);
	      newEl.appendChild(comp.textNode);
	    });
	
	    if (!this.el.parentNode) throw new Error("Trying to replace an element that wasn't mounted!");
	
	    // The ol' switcheroo
	    this.el.parentNode.replaceChild(newEl, this.el);
	    this.el = newEl;
	  };
	
	  return BrowserTag;
	}();
	
	/* Factory function to separate DOM operations from logical ones*/
	
	
	exports.default = {
	  create: function create() {
	    var tags = [];
	    var names = {};
	
	    /* Construct existing state from DOM */
	    var nodes = document.querySelectorAll('[' + _StyleSheet.SC_ATTR + ']');
	    var nodesLength = nodes.length;
	
	    for (var i = 0; i < nodesLength; i += 1) {
	      var el = nodes[i];
	
	      tags.push(new BrowserTag(el, el.getAttribute(_StyleSheet.LOCAL_ATTR) === 'true', el.innerHTML));
	
	      var attr = el.getAttribute(_StyleSheet.SC_ATTR);
	      if (attr) {
	        attr.trim().split(/\s+/).forEach(function (name) {
	          names[name] = true;
	        });
	      }
	    }
	
	    /* Factory for making more tags */
	    var tagConstructor = function tagConstructor(isLocal) {
	      var el = document.createElement('style');
	      el.type = 'text/css';
	      el.setAttribute(_StyleSheet.SC_ATTR, '');
	      el.setAttribute(_StyleSheet.LOCAL_ATTR, isLocal ? 'true' : 'false');
	      if (!document.head) throw new Error('Missing document <head>');
	      document.head.appendChild(el);
	      return new BrowserTag(el, isLocal);
	    };
	
	    return new _StyleSheet2.default(tagConstructor, tags, names);
	  }
	};

/***/ }),

/***/ "./node_modules/styled-components/lib/models/ComponentStyle.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _hash = __webpack_require__("./node_modules/styled-components/lib/vendor/glamor/hash.js");
	
	var _hash2 = _interopRequireDefault(_hash);
	
	var _StyleSheet = __webpack_require__("./node_modules/styled-components/lib/models/StyleSheet.js");
	
	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var babelPluginFlowReactPropTypes_proptype_Stringifier = __webpack_require__("./node_modules/styled-components/lib/types.js").babelPluginFlowReactPropTypes_proptype_Stringifier || __webpack_require__("./node_modules/prop-types/index.js").any;
	
	var babelPluginFlowReactPropTypes_proptype_Flattener = __webpack_require__("./node_modules/styled-components/lib/types.js").babelPluginFlowReactPropTypes_proptype_Flattener || __webpack_require__("./node_modules/prop-types/index.js").any;
	
	var babelPluginFlowReactPropTypes_proptype_NameGenerator = __webpack_require__("./node_modules/styled-components/lib/types.js").babelPluginFlowReactPropTypes_proptype_NameGenerator || __webpack_require__("./node_modules/prop-types/index.js").any;
	
	var babelPluginFlowReactPropTypes_proptype_RuleSet = __webpack_require__("./node_modules/styled-components/lib/types.js").babelPluginFlowReactPropTypes_proptype_RuleSet || __webpack_require__("./node_modules/prop-types/index.js").any;
	
	/*
	 ComponentStyle is all the CSS-specific stuff, not
	 the React-specific stuff.
	 */
	exports.default = function (nameGenerator, flatten, stringifyRules) {
	  var ComponentStyle = function () {
	    function ComponentStyle(rules, componentId) {
	      _classCallCheck(this, ComponentStyle);
	
	      this.rules = rules;
	      this.componentId = componentId;
	      if (!_StyleSheet2.default.instance.hasInjectedComponent(this.componentId)) {
	        var placeholder =  false ? '.' + componentId + ' {}' : '';
	        _StyleSheet2.default.instance.deferredInject(componentId, true, placeholder);
	      }
	    }
	
	    /*
	     * Flattens a rule set into valid CSS
	     * Hashes it, wraps the whole chunk in a .hash1234 {}
	     * Returns the hash to be injected on render()
	     * */
	
	
	    ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
	      var flatCSS = flatten(this.rules, executionContext);
	      var hash = (0, _hash2.default)(this.componentId + flatCSS.join(''));
	
	      var existingName = styleSheet.getName(hash);
	      if (existingName) return existingName;
	
	      var name = nameGenerator(hash);
	      if (styleSheet.alreadyInjected(hash, name)) return name;
	
	      var css = '\n' + stringifyRules(flatCSS, '.' + name);
	      styleSheet.inject(this.componentId, true, css, hash, name);
	      return name;
	    };
	
	    ComponentStyle.generateName = function generateName(str) {
	      return nameGenerator((0, _hash2.default)(str));
	    };
	
	    return ComponentStyle;
	  }();
	
	  return ComponentStyle;
	};
	
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/styled-components/lib/models/ServerStyleSheet.js":
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _StyleSheet = __webpack_require__("./node_modules/styled-components/lib/models/StyleSheet.js");
	
	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);
	
	var _StyleSheetManager = __webpack_require__("./node_modules/styled-components/lib/models/StyleSheetManager.js");
	
	var _StyleSheetManager2 = _interopRequireDefault(_StyleSheetManager);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	/* eslint-disable no-underscore-dangle */
	
	
	var babelPluginFlowReactPropTypes_proptype_Tag = __webpack_require__("./node_modules/styled-components/lib/models/StyleSheet.js").babelPluginFlowReactPropTypes_proptype_Tag || __webpack_require__("./node_modules/prop-types/index.js").any;
	
	var ServerTag = function () {
	  function ServerTag(isLocal) {
	    _classCallCheck(this, ServerTag);
	
	    this.isLocal = isLocal;
	    this.components = {};
	    this.size = 0;
	    this.names = [];
	  }
	
	  ServerTag.prototype.isFull = function isFull() {
	    return false;
	  };
	
	  ServerTag.prototype.addComponent = function addComponent(componentId) {
	    if (this.components[componentId]) throw new Error('Trying to add Component \'' + componentId + '\' twice!');
	    this.components[componentId] = { componentId: componentId, css: '' };
	    this.size += 1;
	  };
	
	  ServerTag.prototype.concatenateCSS = function concatenateCSS() {
	    var _this = this;
	
	    return Object.keys(this.components).reduce(function (styles, k) {
	      return styles + _this.components[k].css;
	    }, '');
	  };
	
	  ServerTag.prototype.inject = function inject(componentId, css, name) {
	    var comp = this.components[componentId];
	
	    if (!comp) throw new Error('Must add a new component before you can inject css into it');
	    if (comp.css === '') comp.css = '/* sc-component-id: ' + componentId + ' */\n';
	
	    comp.css += css.replace(/\n*$/, '\n');
	
	    if (name) this.names.push(name);
	  };
	
	  ServerTag.prototype.toHTML = function toHTML() {
	    var attrs = ['type="text/css"', _StyleSheet.SC_ATTR + '="' + this.names.join(' ') + '"', _StyleSheet.LOCAL_ATTR + '="' + (this.isLocal ? 'true' : 'false') + '"'];
	
	    if (typeof global !== 'undefined' && global.__webpack_nonce__) {
	      attrs.push('nonce="' + global.__webpack_nonce__ + '"');
	    }
	
	    return '<style ' + attrs.join(' ') + '>' + this.concatenateCSS() + '</style>';
	  };
	
	  ServerTag.prototype.toReactElement = function toReactElement(key) {
	    var _attrs;
	
	    var attrs = (_attrs = {}, _attrs[_StyleSheet.SC_ATTR] = this.names.join(' '), _attrs[_StyleSheet.LOCAL_ATTR] = this.isLocal.toString(), _attrs);
	
	    if (typeof global !== 'undefined' && global.__webpack_nonce__) {
	      attrs.nonce = global.__webpack_nonce__;
	    }
	
	    return _react2.default.createElement('style', _extends({
	      key: key, type: 'text/css' }, attrs, {
	      dangerouslySetInnerHTML: { __html: this.concatenateCSS() }
	    }));
	  };
	
	  ServerTag.prototype.clone = function clone() {
	    var _this2 = this;
	
	    var copy = new ServerTag(this.isLocal);
	    copy.names = [].concat(this.names);
	    copy.size = this.size;
	    copy.components = Object.keys(this.components).reduce(function (acc, key) {
	      acc[key] = _extends({}, _this2.components[key]); // eslint-disable-line no-param-reassign
	      return acc;
	    }, {});
	
	    return copy;
	  };
	
	  return ServerTag;
	}();
	
	var ServerStyleSheet = function () {
	  function ServerStyleSheet() {
	    _classCallCheck(this, ServerStyleSheet);
	
	    this.instance = _StyleSheet2.default.clone(_StyleSheet2.default.instance);
	  }
	
	  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
	    if (this.closed) throw new Error("Can't collect styles once you've called getStyleTags!");
	    return _react2.default.createElement(
	      _StyleSheetManager2.default,
	      { sheet: this.instance },
	      children
	    );
	  };
	
	  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
	    if (!this.closed) {
	      _StyleSheet.clones.splice(_StyleSheet.clones.indexOf(this.instance), 1);
	      this.closed = true;
	    }
	
	    return this.instance.toHTML();
	  };
	
	  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
	    if (!this.closed) {
	      _StyleSheet.clones.splice(_StyleSheet.clones.indexOf(this.instance), 1);
	      this.closed = true;
	    }
	
	    return this.instance.toReactElements();
	  };
	
	  ServerStyleSheet.create = function create() {
	    return new _StyleSheet2.default(function (isLocal) {
	      return new ServerTag(isLocal);
	    });
	  };
	
	  return ServerStyleSheet;
	}();
	
	exports.default = ServerStyleSheet;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ "./node_modules/styled-components/lib/models/StyleSheet.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.clones = exports.CONTEXT_KEY = exports.LOCAL_ATTR = exports.SC_ATTR = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BrowserStyleSheet = __webpack_require__("./node_modules/styled-components/lib/models/BrowserStyleSheet.js");
	
	var _BrowserStyleSheet2 = _interopRequireDefault(_BrowserStyleSheet);
	
	var _ServerStyleSheet = __webpack_require__("./node_modules/styled-components/lib/models/ServerStyleSheet.js");
	
	var _ServerStyleSheet2 = _interopRequireDefault(_ServerStyleSheet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SC_ATTR = exports.SC_ATTR = 'data-styled-components';
	var LOCAL_ATTR = exports.LOCAL_ATTR = 'data-styled-components-is-local';
	var CONTEXT_KEY = exports.CONTEXT_KEY = '__styled-components-stylesheet__';
	
	var instance = null;
	// eslint-disable-next-line no-use-before-define
	var clones = exports.clones = [];
	
	var StyleSheet = function () {
	  function StyleSheet(tagConstructor) {
	    var tags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	    var names = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	    _classCallCheck(this, StyleSheet);
	
	    this.hashes = {};
	    this.deferredInjections = {};
	
	    this.tagConstructor = tagConstructor;
	    this.tags = tags;
	    this.names = names;
	    this.constructComponentTagMap();
	  }
	
	  StyleSheet.prototype.constructComponentTagMap = function constructComponentTagMap() {
	    var _this = this;
	
	    this.componentTags = {};
	
	    this.tags.forEach(function (tag) {
	      Object.keys(tag.components).forEach(function (componentId) {
	        _this.componentTags[componentId] = tag;
	      });
	    });
	  };
	
	  /* Best level of caching—get the name from the hash straight away. */
	
	
	  StyleSheet.prototype.getName = function getName(hash) {
	    return this.hashes[hash.toString()];
	  };
	
	  /* Second level of caching—if the name is already in the dom, don't
	   * inject anything and record the hash for getName next time. */
	
	
	  StyleSheet.prototype.alreadyInjected = function alreadyInjected(hash, name) {
	    if (!this.names[name]) return false;
	
	    this.hashes[hash.toString()] = name;
	    return true;
	  };
	
	  /* Third type of caching—don't inject components' componentId twice. */
	
	
	  StyleSheet.prototype.hasInjectedComponent = function hasInjectedComponent(componentId) {
	    return !!this.componentTags[componentId];
	  };
	
	  StyleSheet.prototype.deferredInject = function deferredInject(componentId, isLocal, css) {
	    if (this === instance) {
	      clones.forEach(function (clone) {
	        clone.deferredInject(componentId, isLocal, css);
	      });
	    }
	
	    this.getOrCreateTag(componentId, isLocal);
	    this.deferredInjections[componentId] = css;
	  };
	
	  StyleSheet.prototype.inject = function inject(componentId, isLocal, css, hash, name) {
	    if (this === instance) {
	      clones.forEach(function (clone) {
	        clone.inject(componentId, isLocal, css);
	      });
	    }
	
	    var tag = this.getOrCreateTag(componentId, isLocal);
	
	    var deferredInjection = this.deferredInjections[componentId];
	    if (deferredInjection) {
	      tag.inject(componentId, deferredInjection);
	      delete this.deferredInjections[componentId];
	    }
	
	    tag.inject(componentId, css, name);
	
	    if (hash && name) {
	      this.hashes[hash.toString()] = name;
	    }
	  };
	
	  StyleSheet.prototype.toHTML = function toHTML() {
	    return this.tags.map(function (tag) {
	      return tag.toHTML();
	    }).join('');
	  };
	
	  StyleSheet.prototype.toReactElements = function toReactElements() {
	    return this.tags.map(function (tag, i) {
	      return tag.toReactElement('sc-' + i);
	    });
	  };
	
	  StyleSheet.prototype.getOrCreateTag = function getOrCreateTag(componentId, isLocal) {
	    var existingTag = this.componentTags[componentId];
	    if (existingTag) {
	      return existingTag;
	    }
	
	    var lastTag = this.tags[this.tags.length - 1];
	    var componentTag = !lastTag || lastTag.isFull() || lastTag.isLocal !== isLocal ? this.createNewTag(isLocal) : lastTag;
	    this.componentTags[componentId] = componentTag;
	    componentTag.addComponent(componentId);
	    return componentTag;
	  };
	
	  StyleSheet.prototype.createNewTag = function createNewTag(isLocal) {
	    var newTag = this.tagConstructor(isLocal);
	    this.tags.push(newTag);
	    return newTag;
	  };
	
	  StyleSheet.reset = function reset(isServer) {
	    instance = StyleSheet.create(isServer);
	  };
	
	  /* We can make isServer totally implicit once Jest 20 drops and we
	   * can change environment on a per-test basis. */
	
	
	  StyleSheet.create = function create() {
	    var isServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : typeof document === 'undefined';
	
	    return (isServer ? _ServerStyleSheet2.default : _BrowserStyleSheet2.default).create();
	  };
	
	  StyleSheet.clone = function clone(oldSheet) {
	    var newSheet = new StyleSheet(oldSheet.tagConstructor, oldSheet.tags.map(function (tag) {
	      return tag.clone();
	    }), _extends({}, oldSheet.names));
	
	    newSheet.hashes = _extends({}, oldSheet.hashes);
	    newSheet.deferredInjections = _extends({}, oldSheet.deferredInjections);
	    clones.push(newSheet);
	
	    return newSheet;
	  };
	
	  _createClass(StyleSheet, null, [{
	    key: 'instance',
	    get: function get() {
	      return instance || (instance = StyleSheet.create());
	    }
	  }]);
	
	  return StyleSheet;
	}();
	
	exports.default = StyleSheet;

/***/ }),

/***/ "./node_modules/styled-components/lib/models/StyleSheetManager.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _StyleSheetManager$ch;
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _StyleSheet = __webpack_require__("./node_modules/styled-components/lib/models/StyleSheet.js");
	
	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var StyleSheetManager = function (_Component) {
	  _inherits(StyleSheetManager, _Component);
	
	  function StyleSheetManager() {
	    _classCallCheck(this, StyleSheetManager);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  StyleSheetManager.prototype.getChildContext = function getChildContext() {
	    var _ref;
	
	    return _ref = {}, _ref[_StyleSheet.CONTEXT_KEY] = this.props.sheet, _ref;
	  };
	
	  StyleSheetManager.prototype.render = function render() {
	    /* eslint-disable react/prop-types */
	    // Flow v0.43.1 will report an error accessing the `children` property,
	    // but v0.47.0 will not. It is necessary to use a type cast instead of
	    // a "fixme" comment to satisfy both Flow versions.
	    return _react2.default.Children.only(this.props.children);
	  };
	
	  return StyleSheetManager;
	}(_react.Component);
	
	StyleSheetManager.childContextTypes = (_StyleSheetManager$ch = {}, _StyleSheetManager$ch[_StyleSheet.CONTEXT_KEY] = _propTypes2.default.instanceOf(_StyleSheet2.default).isRequired, _StyleSheetManager$ch);
	
	StyleSheetManager.propTypes = {
	  sheet: _propTypes2.default.instanceOf(_StyleSheet2.default).isRequired
	};
	
	exports.default = StyleSheetManager;
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/styled-components/lib/models/StyledComponent.js":
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _createWarnTooManyClasses = __webpack_require__("./node_modules/styled-components/lib/utils/createWarnTooManyClasses.js");
	
	var _createWarnTooManyClasses2 = _interopRequireDefault(_createWarnTooManyClasses);
	
	var _validAttr = __webpack_require__("./node_modules/styled-components/lib/utils/validAttr.js");
	
	var _validAttr2 = _interopRequireDefault(_validAttr);
	
	var _isTag = __webpack_require__("./node_modules/styled-components/lib/utils/isTag.js");
	
	var _isTag2 = _interopRequireDefault(_isTag);
	
	var _isStyledComponent = __webpack_require__("./node_modules/styled-components/lib/utils/isStyledComponent.js");
	
	var _isStyledComponent2 = _interopRequireDefault(_isStyledComponent);
	
	var _getComponentName = __webpack_require__("./node_modules/styled-components/lib/utils/getComponentName.js");
	
	var _getComponentName2 = _interopRequireDefault(_getComponentName);
	
	var _AbstractStyledComponent = __webpack_require__("./node_modules/styled-components/lib/models/AbstractStyledComponent.js");
	
	var _AbstractStyledComponent2 = _interopRequireDefault(_AbstractStyledComponent);
	
	var _ThemeProvider = __webpack_require__("./node_modules/styled-components/lib/models/ThemeProvider.js");
	
	var _StyleSheet = __webpack_require__("./node_modules/styled-components/lib/models/StyleSheet.js");
	
	var _StyleSheet2 = _interopRequireDefault(_StyleSheet);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var babelPluginFlowReactPropTypes_proptype_Theme = __webpack_require__("./node_modules/styled-components/lib/models/ThemeProvider.js").babelPluginFlowReactPropTypes_proptype_Theme || __webpack_require__("./node_modules/prop-types/index.js").any;
	
	var babelPluginFlowReactPropTypes_proptype_Target = __webpack_require__("./node_modules/styled-components/lib/types.js").babelPluginFlowReactPropTypes_proptype_Target || __webpack_require__("./node_modules/prop-types/index.js").any;
	
	var babelPluginFlowReactPropTypes_proptype_RuleSet = __webpack_require__("./node_modules/styled-components/lib/types.js").babelPluginFlowReactPropTypes_proptype_RuleSet || __webpack_require__("./node_modules/prop-types/index.js").any;
	
	var escapeRegex = /[[\].#*$><+~=|^:(),"'`]/g;
	var multiDashRegex = /--+/g;
	
	exports.default = function (ComponentStyle, constructWithOptions) {
	  /* We depend on components having unique IDs */
	  var identifiers = {};
	  var generateId = function generateId(_displayName, parentComponentId) {
	    var displayName = typeof _displayName !== 'string' ? 'sc' : _displayName.replace(escapeRegex, '-') // Replace all possible CSS selectors
	    .replace(multiDashRegex, '-'); // Replace multiple -- with single -
	
	    var nr = (identifiers[displayName] || 0) + 1;
	    identifiers[displayName] = nr;
	
	    var hash = ComponentStyle.generateName(displayName + nr);
	    var componentId = displayName + '-' + hash;
	    return parentComponentId !== undefined ? parentComponentId + '-' + componentId : componentId;
	  };
	
	  var BaseStyledComponent = function (_AbstractStyledCompon) {
	    _inherits(BaseStyledComponent, _AbstractStyledCompon);
	
	    function BaseStyledComponent() {
	      var _temp, _this, _ret;
	
	      _classCallCheck(this, BaseStyledComponent);
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _AbstractStyledCompon.call.apply(_AbstractStyledCompon, [this].concat(args))), _this), _this.attrs = {}, _this.state = {
	        theme: null,
	        generatedClassName: ''
	      }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    BaseStyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props) {
	      var attrs = this.constructor.attrs;
	
	      var context = _extends({}, props, { theme: theme });
	      if (attrs === undefined) {
	        return context;
	      }
	
	      this.attrs = Object.keys(attrs).reduce(function (acc, key) {
	        var attr = attrs[key];
	        // eslint-disable-next-line no-param-reassign
	        acc[key] = typeof attr === 'function' ? attr(context) : attr;
	        return acc;
	      }, {});
	
	      return _extends({}, context, this.attrs);
	    };
	
	    BaseStyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
	      var _constructor = this.constructor,
	          componentStyle = _constructor.componentStyle,
	          warnTooManyClasses = _constructor.warnTooManyClasses;
	
	      var executionContext = this.buildExecutionContext(theme, props);
	      var styleSheet = this.context[_StyleSheet.CONTEXT_KEY] || _StyleSheet2.default.instance;
	      var className = componentStyle.generateAndInjectStyles(executionContext, styleSheet);
	
	      if (warnTooManyClasses !== undefined) warnTooManyClasses(className);
	
	      return className;
	    };
	
	    BaseStyledComponent.prototype.componentWillMount = function componentWillMount() {
	      var _this2 = this;
	
	      // If there is a theme in the context, subscribe to the event emitter. This
	      // is necessary due to pure components blocking context updates, this circumvents
	      // that by updating when an event is emitted
	      if (this.context[_ThemeProvider.CHANNEL]) {
	        var subscribe = this.context[_ThemeProvider.CHANNEL];
	        this.unsubscribe = subscribe(function (nextTheme) {
	          // This will be called once immediately
	
	          // Props should take precedence over ThemeProvider, which should take precedence over
	          // defaultProps, but React automatically puts defaultProps on props.
	          var defaultProps = _this2.constructor.defaultProps;
	
	          var isDefaultTheme = defaultProps && _this2.props.theme === defaultProps.theme;
	          var theme = _this2.props.theme && !isDefaultTheme ? _this2.props.theme : nextTheme;
	          var generatedClassName = _this2.generateAndInjectStyles(theme, _this2.props);
	          _this2.setState({ theme: theme, generatedClassName: generatedClassName });
	        });
	      } else {
	        var _theme = this.props.theme || {};
	        var generatedClassName = this.generateAndInjectStyles(_theme, this.props);
	        this.setState({ theme: _theme, generatedClassName: generatedClassName });
	      }
	    };
	
	    BaseStyledComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      var _this3 = this;
	
	      this.setState(function (oldState) {
	        // Props should take precedence over ThemeProvider, which should take precedence over
	        // defaultProps, but React automatically puts defaultProps on props.
	        var defaultProps = _this3.constructor.defaultProps;
	
	        var isDefaultTheme = defaultProps && nextProps.theme === defaultProps.theme;
	        var theme = nextProps.theme && !isDefaultTheme ? nextProps.theme : oldState.theme;
	        var generatedClassName = _this3.generateAndInjectStyles(theme, nextProps);
	
	        return { theme: theme, generatedClassName: generatedClassName };
	      });
	    };
	
	    BaseStyledComponent.prototype.componentWillUnmount = function componentWillUnmount() {
	      if (this.unsubscribe) {
	        this.unsubscribe();
	      }
	    };
	
	    BaseStyledComponent.prototype.render = function render() {
	      var _this4 = this;
	
	      var innerRef = this.props.innerRef;
	      var generatedClassName = this.state.generatedClassName;
	      var _constructor2 = this.constructor,
	          styledComponentId = _constructor2.styledComponentId,
	          target = _constructor2.target;
	
	
	      var isTargetTag = (0, _isTag2.default)(target);
	
	      var className = [this.props.className, styledComponentId, this.attrs.className, generatedClassName].filter(Boolean).join(' ');
	
	      var baseProps = _extends({}, this.attrs, {
	        className: className
	      });
	
	      if ((0, _isStyledComponent2.default)(target)) {
	        baseProps.innerRef = innerRef;
	      } else {
	        baseProps.ref = innerRef;
	      }
	
	      var propsForElement = Object.keys(this.props).reduce(function (acc, propName) {
	        // Don't pass through non HTML tags through to HTML elements
	        // always omit innerRef
	        if (propName !== 'innerRef' && propName !== 'className' && (!isTargetTag || (0, _validAttr2.default)(propName))) {
	          // eslint-disable-next-line no-param-reassign
	          acc[propName] = _this4.props[propName];
	        }
	
	        return acc;
	      }, baseProps);
	
	      return (0, _react.createElement)(target, propsForElement);
	    };
	
	    return BaseStyledComponent;
	  }(_AbstractStyledComponent2.default);
	
	  var createStyledComponent = function createStyledComponent(target, options, rules) {
	    var _StyledComponent$cont;
	
	    var _options$displayName = options.displayName,
	        displayName = _options$displayName === undefined ? (0, _isTag2.default)(target) ? 'styled.' + target : 'Styled(' + (0, _getComponentName2.default)(target) + ')' : _options$displayName,
	        _options$componentId = options.componentId,
	        componentId = _options$componentId === undefined ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
	        _options$ParentCompon = options.ParentComponent,
	        ParentComponent = _options$ParentCompon === undefined ? BaseStyledComponent : _options$ParentCompon,
	        extendingRules = options.rules,
	        attrs = options.attrs;
	
	
	    var styledComponentId = options.displayName && options.componentId ? options.displayName + '-' + options.componentId : componentId;
	
	    var warnTooManyClasses = void 0;
	    if (typeof process !== 'undefined' && ("production") !== 'production') {
	      warnTooManyClasses = (0, _createWarnTooManyClasses2.default)(displayName);
	    }
	
	    var componentStyle = new ComponentStyle(extendingRules === undefined ? rules : extendingRules.concat(rules), styledComponentId);
	
	    var StyledComponent = function (_ParentComponent) {
	      _inherits(StyledComponent, _ParentComponent);
	
	      function StyledComponent() {
	        _classCallCheck(this, StyledComponent);
	
	        return _possibleConstructorReturn(this, _ParentComponent.apply(this, arguments));
	      }
	
	      StyledComponent.withComponent = function withComponent(tag) {
	        var previousComponentId = options.componentId,
	            optionsToCopy = _objectWithoutProperties(options, ['componentId']);
	
	        var newComponentId = previousComponentId && previousComponentId + '-' + ((0, _isTag2.default)(tag) ? tag : (0, _getComponentName2.default)(tag));
	
	        var newOptions = _extends({}, optionsToCopy, {
	          componentId: newComponentId,
	          ParentComponent: StyledComponent
	        });
	
	        return createStyledComponent(tag, newOptions, rules);
	      };
	
	      _createClass(StyledComponent, null, [{
	        key: 'extend',
	        get: function get() {
	          var rulesFromOptions = options.rules,
	              parentComponentId = options.componentId,
	              optionsToCopy = _objectWithoutProperties(options, ['rules', 'componentId']);
	
	          var newRules = rulesFromOptions === undefined ? rules : rulesFromOptions.concat(rules);
	
	          var newOptions = _extends({}, optionsToCopy, {
	            rules: newRules,
	            parentComponentId: parentComponentId,
	            ParentComponent: StyledComponent
	          });
	
	          return constructWithOptions(createStyledComponent, target, newOptions);
	        }
	      }]);
	
	      return StyledComponent;
	    }(ParentComponent);
	
	    StyledComponent.contextTypes = (_StyledComponent$cont = {}, _StyledComponent$cont[_ThemeProvider.CHANNEL] = _propTypes2.default.func, _StyledComponent$cont[_StyleSheet.CONTEXT_KEY] = _propTypes2.default.instanceOf(_StyleSheet2.default), _StyledComponent$cont);
	    StyledComponent.displayName = displayName;
	    StyledComponent.styledComponentId = styledComponentId;
	    StyledComponent.attrs = attrs;
	    StyledComponent.componentStyle = componentStyle;
	    StyledComponent.warnTooManyClasses = warnTooManyClasses;
	    StyledComponent.target = target;
	
	
	    return StyledComponent;
	  };
	
	  return createStyledComponent;
	};
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-components/lib/models/ThemeProvider.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.CHANNEL = undefined;
	
	var _ThemeProvider$childC, _ThemeProvider$contex;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _isFunction = __webpack_require__("./node_modules/is-function/index.js");
	
	var _isFunction2 = _interopRequireDefault(_isFunction);
	
	var _isPlainObject = __webpack_require__("./node_modules/is-plain-object/index.js");
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _createBroadcast = __webpack_require__("./node_modules/styled-components/lib/utils/create-broadcast.js");
	
	var _createBroadcast2 = _interopRequireDefault(_createBroadcast);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	/* globals React$Element */
	
	
	// NOTE: DO NOT CHANGE, changing this is a semver major change!
	var babelPluginFlowReactPropTypes_proptype_Broadcast = __webpack_require__("./node_modules/styled-components/lib/utils/create-broadcast.js").babelPluginFlowReactPropTypes_proptype_Broadcast || __webpack_require__("./node_modules/prop-types/index.js").any;
	
	var CHANNEL = exports.CHANNEL = '__styled-components__';
	
	if (true) Object.defineProperty(exports, 'babelPluginFlowReactPropTypes_proptype_Theme', {
	  value: __webpack_require__("./node_modules/prop-types/index.js").shape({})
	});
	
	/**
	 * Provide a theme to an entire react component tree via context and event listeners (have to do
	 * both context and event emitter as pure components block context updates)
	 */
	var ThemeProvider = function (_Component) {
	  _inherits(ThemeProvider, _Component);
	
	  function ThemeProvider() {
	    _classCallCheck(this, ThemeProvider);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this));
	
	    _this.getTheme = _this.getTheme.bind(_this);
	    return _this;
	  }
	
	  ThemeProvider.prototype.componentWillMount = function componentWillMount() {
	    var _this2 = this;
	
	    // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
	    // with the outer theme
	    if (this.context[CHANNEL]) {
	      var subscribe = this.context[CHANNEL];
	      this.unsubscribeToOuter = subscribe(function (theme) {
	        _this2.outerTheme = theme;
	      });
	    }
	    this.broadcast = (0, _createBroadcast2.default)(this.getTheme());
	  };
	
	  ThemeProvider.prototype.getChildContext = function getChildContext() {
	    var _extends2;
	
	    return _extends({}, this.context, (_extends2 = {}, _extends2[CHANNEL] = this.broadcast.subscribe, _extends2));
	  };
	
	  ThemeProvider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (this.props.theme !== nextProps.theme) this.broadcast.publish(this.getTheme(nextProps.theme));
	  };
	
	  ThemeProvider.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.context[CHANNEL]) {
	      this.unsubscribeToOuter();
	    }
	  };
	
	  // Get the theme from the props, supporting both (outerTheme) => {} as well as object notation
	
	
	  ThemeProvider.prototype.getTheme = function getTheme(passedTheme) {
	    var theme = passedTheme || this.props.theme;
	    if ((0, _isFunction2.default)(theme)) {
	      var mergedTheme = theme(this.outerTheme);
	      if (!(0, _isPlainObject2.default)(mergedTheme)) {
	        throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
	      }
	      return mergedTheme;
	    }
	    if (!(0, _isPlainObject2.default)(theme)) {
	      throw new Error('[ThemeProvider] Please make your theme prop a plain object');
	    }
	    return _extends({}, this.outerTheme, theme);
	  };
	
	  ThemeProvider.prototype.render = function render() {
	    if (!this.props.children) {
	      return null;
	    }
	    return _react2.default.Children.only(this.props.children);
	  };
	
	  return ThemeProvider;
	}(_react.Component);
	
	ThemeProvider.propTypes = {
	  children: __webpack_require__("./node_modules/prop-types/index.js").any,
	  theme: __webpack_require__("./node_modules/prop-types/index.js").oneOfType([__webpack_require__("./node_modules/prop-types/index.js").shape({}), __webpack_require__("./node_modules/prop-types/index.js").func]).isRequired
	};
	
	
	ThemeProvider.childContextTypes = (_ThemeProvider$childC = {}, _ThemeProvider$childC[CHANNEL] = _propTypes2.default.func.isRequired, _ThemeProvider$childC);
	ThemeProvider.contextTypes = (_ThemeProvider$contex = {}, _ThemeProvider$contex[CHANNEL] = _propTypes2.default.func, _ThemeProvider$contex);
	
	exports.default = ThemeProvider;

/***/ }),

/***/ "./node_modules/styled-components/lib/types.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	/* todo: I want this to actually be an array of Function | string but that causes errors */
	if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_StyleSheet", {
	  value: __webpack_require__("./node_modules/prop-types/index.js").shape({
	    create: __webpack_require__("./node_modules/prop-types/index.js").func.isRequired
	  })
	});
	
	/* eslint-disable no-undef */

/***/ }),

/***/ "./node_modules/styled-components/lib/utils/create-broadcast.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	if (true) Object.defineProperty(exports, "babelPluginFlowReactPropTypes_proptype_Broadcast", {
	  value: __webpack_require__("./node_modules/prop-types/index.js").shape({
	    publish: __webpack_require__("./node_modules/prop-types/index.js").func.isRequired,
	    subscribe: __webpack_require__("./node_modules/prop-types/index.js").func.isRequired
	  })
	});
	/**
	 * Creates a broadcast that can be listened to, i.e. simple event emitter
	 *
	 * @see https://github.com/ReactTraining/react-broadcast
	 */
	
	var createBroadcast = function createBroadcast(initialValue) {
	  var listeners = [];
	  var currentValue = initialValue;
	
	  return {
	    publish: function publish(value) {
	      currentValue = value;
	      listeners.forEach(function (listener) {
	        return listener(currentValue);
	      });
	    },
	    subscribe: function subscribe(listener) {
	      listeners.push(listener);
	
	      // Publish to this subscriber once immediately.
	      listener(currentValue);
	
	      return function () {
	        listeners = listeners.filter(function (item) {
	          return item !== listener;
	        });
	      };
	    }
	  };
	};
	
	exports.default = createBroadcast;
	module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/styled-components/lib/utils/createWarnTooManyClasses.js":
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var LIMIT = 200;
	
	exports.default = function (displayName) {
	  var generatedClasses = {};
	  var warningSeen = false;
	
	  return function (className) {
	    if (!warningSeen) {
	      generatedClasses[className] = true;
	      if (Object.keys(generatedClasses).length >= LIMIT) {
	        // Unable to find latestRule in test environment.
	        /* eslint-disable no-console, prefer-template */
	        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. ' + 'Consider using style property for frequently changed styles.\n' + 'Example:\n' + '  const StyledComp = styled.div`width: 100%;`\n' + '  <StyledComp style={{ background: background }} />');
	        warningSeen = true;
	        generatedClasses = {};
	      }
	    }
	  };
	};
	
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/styled-components/lib/utils/domElements.js":
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	// Thanks to ReactDOMFactories for this handy list!
	
	exports.default = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',
	
	// SVG
	'circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/styled-components/lib/utils/extractCompsFromCSS.js":
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s+(\S+)\s+\*\//mg;
	
	exports.default = function (maybeCSS) {
	  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
	  var existingComponents = [];
	  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
	    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
	    return match;
	  });
	  return existingComponents.map(function (_ref, i) {
	    var componentId = _ref.componentId,
	        matchIndex = _ref.matchIndex;
	
	    var nextComp = existingComponents[i + 1];
	    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
	    return { componentId: componentId, cssFromDOM: cssFromDOM };
	  });
	};
	
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/styled-components/lib/utils/flatten.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.objToCss = undefined;
	
	var _hyphenateStyleName = __webpack_require__("./node_modules/fbjs/lib/hyphenateStyleName.js");
	
	var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);
	
	var _isPlainObject = __webpack_require__("./node_modules/is-plain-object/index.js");
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__("./node_modules/styled-components/lib/types.js").babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__("./node_modules/prop-types/index.js").any;
	
	var objToCss = exports.objToCss = function objToCss(obj, prevKey) {
	  var css = Object.keys(obj).map(function (key) {
	    if ((0, _isPlainObject2.default)(obj[key])) return objToCss(obj[key], key);
	    return (0, _hyphenateStyleName2.default)(key) + ': ' + obj[key] + ';';
	  }).join(' ');
	  return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css;
	};
	
	var flatten = function flatten(chunks, executionContext) {
	  return chunks.reduce(function (ruleSet, chunk) {
	    /* Remove falsey values */
	    if (chunk === undefined || chunk === null || chunk === false || chunk === '') return ruleSet;
	    /* Flatten ruleSet */
	    if (Array.isArray(chunk)) return [].concat(ruleSet, flatten(chunk, executionContext));
	
	    /* Handle other components */
	    // $FlowFixMe not sure how to make this pass
	    if (chunk.hasOwnProperty('styledComponentId')) return [].concat(ruleSet, ['.' + chunk.styledComponentId]);
	
	    /* Either execute or defer the function */
	    if (typeof chunk === 'function') {
	      return executionContext ? ruleSet.concat.apply(ruleSet, flatten([chunk(executionContext)], executionContext)) : ruleSet.concat(chunk);
	    }
	
	    /* Handle objects */
	    // $FlowFixMe have to add %checks somehow to isPlainObject
	    return ruleSet.concat((0, _isPlainObject2.default)(chunk) ? objToCss(chunk) : chunk.toString());
	  }, []);
	};
	
	exports.default = flatten;

/***/ }),

/***/ "./node_modules/styled-components/lib/utils/generateAlphabeticName.js":
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	var charsLength = chars.length;
	
	/* Some high number, usually 9-digit base-10. Map it to base-😎 */
	var generateAlphabeticName = function generateAlphabeticName(code) {
	  var name = '';
	  var x = void 0;
	
	  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
	    name = chars[x % charsLength] + name;
	  }
	
	  return chars[x % charsLength] + name;
	};
	
	exports.default = generateAlphabeticName;
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/styled-components/lib/utils/getComponentName.js":
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = getComponentName;
	
	
	/* eslint-disable no-undef */
	function getComponentName(target) {
	  return target.displayName || target.name || 'Component';
	}
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/styled-components/lib/utils/interleave.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__("./node_modules/styled-components/lib/types.js").babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__("./node_modules/prop-types/index.js").any;
	
	exports.default = function (strings, interpolations) {
	  return interpolations.reduce(function (array, interp, i) {
	    return array.concat(interp, strings[i + 1]);
	  }, [strings[0]]);
	};
	
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/styled-components/lib/utils/isStyledComponent.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = isStyledComponent;
	
	var babelPluginFlowReactPropTypes_proptype_Target = __webpack_require__("./node_modules/styled-components/lib/types.js").babelPluginFlowReactPropTypes_proptype_Target || __webpack_require__("./node_modules/prop-types/index.js").any;
	
	function isStyledComponent(target) /* : %checks */{
	  return typeof target === 'function' && typeof target.styledComponentId === 'string';
	}
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/styled-components/lib/utils/isTag.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = isTag;
	
	var babelPluginFlowReactPropTypes_proptype_Target = __webpack_require__("./node_modules/styled-components/lib/types.js").babelPluginFlowReactPropTypes_proptype_Target || __webpack_require__("./node_modules/prop-types/index.js").any;
	
	function isTag(target) /* : %checks */{
	  return typeof target === 'string';
	}
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/styled-components/lib/utils/stringifyRules.js":
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _stylis = __webpack_require__("./node_modules/stylis/stylis.js");
	
	var _stylis2 = _interopRequireDefault(_stylis);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var babelPluginFlowReactPropTypes_proptype_Interpolation = __webpack_require__("./node_modules/styled-components/lib/types.js").babelPluginFlowReactPropTypes_proptype_Interpolation || __webpack_require__("./node_modules/prop-types/index.js").any;
	
	var stylis = new _stylis2.default({
	  global: false,
	  cascade: true,
	  keyframe: false,
	  prefix: true,
	  compress: false,
	  semicolon: true
	});
	
	var stringifyRules = function stringifyRules(rules, selector, prefix) {
	  var flatCSS = rules.join('').replace(/^\s*\/\/.*$/gm, ''); // replace JS comments
	
	  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;
	
	  return stylis(prefix || !selector ? '' : selector, cssStr);
	};
	
	exports.default = stringifyRules;
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/styled-components/lib/utils/validAttr.js":
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	/* Trying to avoid the unknown-prop errors on styled components
	 by filtering by React's attribute whitelist.
	 */
	
	/* Logic copied from ReactDOMUnknownPropertyHook */
	var reactProps = {
	  children: true,
	  dangerouslySetInnerHTML: true,
	  key: true,
	  ref: true,
	  autoFocus: true,
	  defaultValue: true,
	  valueLink: true,
	  defaultChecked: true,
	  checkedLink: true,
	  innerHTML: true,
	  suppressContentEditableWarning: true,
	  onFocusIn: true,
	  onFocusOut: true,
	  className: true,
	
	  /* List copied from https://facebook.github.io/react/docs/events.html */
	  onCopy: true,
	  onCut: true,
	  onPaste: true,
	  onCompositionEnd: true,
	  onCompositionStart: true,
	  onCompositionUpdate: true,
	  onKeyDown: true,
	  onKeyPress: true,
	  onKeyUp: true,
	  onFocus: true,
	  onBlur: true,
	  onChange: true,
	  onInput: true,
	  onSubmit: true,
	  onClick: true,
	  onContextMenu: true,
	  onDoubleClick: true,
	  onDrag: true,
	  onDragEnd: true,
	  onDragEnter: true,
	  onDragExit: true,
	  onDragLeave: true,
	  onDragOver: true,
	  onDragStart: true,
	  onDrop: true,
	  onMouseDown: true,
	  onMouseEnter: true,
	  onMouseLeave: true,
	  onMouseMove: true,
	  onMouseOut: true,
	  onMouseOver: true,
	  onMouseUp: true,
	  onSelect: true,
	  onTouchCancel: true,
	  onTouchEnd: true,
	  onTouchMove: true,
	  onTouchStart: true,
	  onScroll: true,
	  onWheel: true,
	  onAbort: true,
	  onCanPlay: true,
	  onCanPlayThrough: true,
	  onDurationChange: true,
	  onEmptied: true,
	  onEncrypted: true,
	  onEnded: true,
	  onError: true,
	  onLoadedData: true,
	  onLoadedMetadata: true,
	  onLoadStart: true,
	  onPause: true,
	  onPlay: true,
	  onPlaying: true,
	  onProgress: true,
	  onRateChange: true,
	  onSeeked: true,
	  onSeeking: true,
	  onStalled: true,
	  onSuspend: true,
	  onTimeUpdate: true,
	  onVolumeChange: true,
	  onWaiting: true,
	  onLoad: true,
	  onAnimationStart: true,
	  onAnimationEnd: true,
	  onAnimationIteration: true,
	  onTransitionEnd: true,
	
	  onCopyCapture: true,
	  onCutCapture: true,
	  onPasteCapture: true,
	  onCompositionEndCapture: true,
	  onCompositionStartCapture: true,
	  onCompositionUpdateCapture: true,
	  onKeyDownCapture: true,
	  onKeyPressCapture: true,
	  onKeyUpCapture: true,
	  onFocusCapture: true,
	  onBlurCapture: true,
	  onChangeCapture: true,
	  onInputCapture: true,
	  onSubmitCapture: true,
	  onClickCapture: true,
	  onContextMenuCapture: true,
	  onDoubleClickCapture: true,
	  onDragCapture: true,
	  onDragEndCapture: true,
	  onDragEnterCapture: true,
	  onDragExitCapture: true,
	  onDragLeaveCapture: true,
	  onDragOverCapture: true,
	  onDragStartCapture: true,
	  onDropCapture: true,
	  onMouseDownCapture: true,
	  onMouseEnterCapture: true,
	  onMouseLeaveCapture: true,
	  onMouseMoveCapture: true,
	  onMouseOutCapture: true,
	  onMouseOverCapture: true,
	  onMouseUpCapture: true,
	  onSelectCapture: true,
	  onTouchCancelCapture: true,
	  onTouchEndCapture: true,
	  onTouchMoveCapture: true,
	  onTouchStartCapture: true,
	  onScrollCapture: true,
	  onWheelCapture: true,
	  onAbortCapture: true,
	  onCanPlayCapture: true,
	  onCanPlayThroughCapture: true,
	  onDurationChangeCapture: true,
	  onEmptiedCapture: true,
	  onEncryptedCapture: true,
	  onEndedCapture: true,
	  onErrorCapture: true,
	  onLoadedDataCapture: true,
	  onLoadedMetadataCapture: true,
	  onLoadStartCapture: true,
	  onPauseCapture: true,
	  onPlayCapture: true,
	  onPlayingCapture: true,
	  onProgressCapture: true,
	  onRateChangeCapture: true,
	  onSeekedCapture: true,
	  onSeekingCapture: true,
	  onStalledCapture: true,
	  onSuspendCapture: true,
	  onTimeUpdateCapture: true,
	  onVolumeChangeCapture: true,
	  onWaitingCapture: true,
	  onLoadCapture: true,
	  onAnimationStartCapture: true,
	  onAnimationEndCapture: true,
	  onAnimationIterationCapture: true,
	  onTransitionEndCapture: true
	};
	
	/* From HTMLDOMPropertyConfig */
	var htmlProps = {
	  /**
	   * Standard Properties
	   */
	  accept: true,
	  acceptCharset: true,
	  accessKey: true,
	  action: true,
	  allowFullScreen: true,
	  allowTransparency: true,
	  alt: true,
	  // specifies target context for links with `preload` type
	  as: true,
	  async: true,
	  autoComplete: true,
	  // autoFocus is polyfilled/normalized by AutoFocusUtils
	  // autoFocus: true,
	  autoPlay: true,
	  capture: true,
	  cellPadding: true,
	  cellSpacing: true,
	  charSet: true,
	  challenge: true,
	  checked: true,
	  cite: true,
	  classID: true,
	  className: true,
	  cols: true,
	  colSpan: true,
	  content: true,
	  contentEditable: true,
	  contextMenu: true,
	  controls: true,
	  coords: true,
	  crossOrigin: true,
	  data: true, // For `<object />` acts as `src`.
	  dateTime: true,
	  default: true,
	  defer: true,
	  dir: true,
	  disabled: true,
	  download: true,
	  draggable: true,
	  encType: true,
	  form: true,
	  formAction: true,
	  formEncType: true,
	  formMethod: true,
	  formNoValidate: true,
	  formTarget: true,
	  frameBorder: true,
	  headers: true,
	  height: true,
	  hidden: true,
	  high: true,
	  href: true,
	  hrefLang: true,
	  htmlFor: true,
	  httpEquiv: true,
	  icon: true,
	  id: true,
	  inputMode: true,
	  integrity: true,
	  is: true,
	  keyParams: true,
	  keyType: true,
	  kind: true,
	  label: true,
	  lang: true,
	  list: true,
	  loop: true,
	  low: true,
	  manifest: true,
	  marginHeight: true,
	  marginWidth: true,
	  max: true,
	  maxLength: true,
	  media: true,
	  mediaGroup: true,
	  method: true,
	  min: true,
	  minLength: true,
	  // Caution; `option.selected` is not updated if `select.multiple` is
	  // disabled with `removeAttribute`.
	  multiple: true,
	  muted: true,
	  name: true,
	  nonce: true,
	  noValidate: true,
	  open: true,
	  optimum: true,
	  pattern: true,
	  placeholder: true,
	  playsInline: true,
	  poster: true,
	  preload: true,
	  profile: true,
	  radioGroup: true,
	  readOnly: true,
	  referrerPolicy: true,
	  rel: true,
	  required: true,
	  reversed: true,
	  role: true,
	  rows: true,
	  rowSpan: true,
	  sandbox: true,
	  scope: true,
	  scoped: true,
	  scrolling: true,
	  seamless: true,
	  selected: true,
	  shape: true,
	  size: true,
	  sizes: true,
	  span: true,
	  spellCheck: true,
	  src: true,
	  srcDoc: true,
	  srcLang: true,
	  srcSet: true,
	  start: true,
	  step: true,
	  style: true,
	  summary: true,
	  tabIndex: true,
	  target: true,
	  title: true,
	  // Setting .type throws on non-<input> tags
	  type: true,
	  useMap: true,
	  value: true,
	  width: true,
	  wmode: true,
	  wrap: true,
	
	  /**
	   * RDFa Properties
	   */
	  about: true,
	  datatype: true,
	  inlist: true,
	  prefix: true,
	  // property is also supported for OpenGraph in meta tags.
	  property: true,
	  resource: true,
	  typeof: true,
	  vocab: true,
	
	  /**
	   * Non-standard Properties
	   */
	  // autoCapitalize and autoCorrect are supported in Mobile Safari for
	  // keyboard hints.
	  autoCapitalize: true,
	  autoCorrect: true,
	  // autoSave allows WebKit/Blink to persist values of input fields on page reloads
	  autoSave: true,
	  // color is for Safari mask-icon link
	  color: true,
	  // itemProp, itemScope, itemType are for
	  // Microdata support. See http://schema.org/docs/gs.html
	  itemProp: true,
	  itemScope: true,
	  itemType: true,
	  // itemID and itemRef are for Microdata support as well but
	  // only specified in the WHATWG spec document. See
	  // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
	  itemID: true,
	  itemRef: true,
	  // results show looking glass icon and recent searches on input
	  // search fields in WebKit/Blink
	  results: true,
	  // IE-only attribute that specifies security restrictions on an iframe
	  // as an alternative to the sandbox attribute on IE<10
	  security: true,
	  // IE-only attribute that controls focus behavior
	  unselectable: 0
	};
	
	var svgProps = {
	  accentHeight: true,
	  accumulate: true,
	  additive: true,
	  alignmentBaseline: true,
	  allowReorder: true,
	  alphabetic: true,
	  amplitude: true,
	  arabicForm: true,
	  ascent: true,
	  attributeName: true,
	  attributeType: true,
	  autoReverse: true,
	  azimuth: true,
	  baseFrequency: true,
	  baseProfile: true,
	  baselineShift: true,
	  bbox: true,
	  begin: true,
	  bias: true,
	  by: true,
	  calcMode: true,
	  capHeight: true,
	  clip: true,
	  clipPath: true,
	  clipRule: true,
	  clipPathUnits: true,
	  colorInterpolation: true,
	  colorInterpolationFilters: true,
	  colorProfile: true,
	  colorRendering: true,
	  contentScriptType: true,
	  contentStyleType: true,
	  cursor: true,
	  cx: true,
	  cy: true,
	  d: true,
	  decelerate: true,
	  descent: true,
	  diffuseConstant: true,
	  direction: true,
	  display: true,
	  divisor: true,
	  dominantBaseline: true,
	  dur: true,
	  dx: true,
	  dy: true,
	  edgeMode: true,
	  elevation: true,
	  enableBackground: true,
	  end: true,
	  exponent: true,
	  externalResourcesRequired: true,
	  fill: true,
	  fillOpacity: true,
	  fillRule: true,
	  filter: true,
	  filterRes: true,
	  filterUnits: true,
	  floodColor: true,
	  floodOpacity: true,
	  focusable: true,
	  fontFamily: true,
	  fontSize: true,
	  fontSizeAdjust: true,
	  fontStretch: true,
	  fontStyle: true,
	  fontVariant: true,
	  fontWeight: true,
	  format: true,
	  from: true,
	  fx: true,
	  fy: true,
	  g1: true,
	  g2: true,
	  glyphName: true,
	  glyphOrientationHorizontal: true,
	  glyphOrientationVertical: true,
	  glyphRef: true,
	  gradientTransform: true,
	  gradientUnits: true,
	  hanging: true,
	  horizAdvX: true,
	  horizOriginX: true,
	  ideographic: true,
	  imageRendering: true,
	  in: true,
	  in2: true,
	  intercept: true,
	  k: true,
	  k1: true,
	  k2: true,
	  k3: true,
	  k4: true,
	  kernelMatrix: true,
	  kernelUnitLength: true,
	  kerning: true,
	  keyPoints: true,
	  keySplines: true,
	  keyTimes: true,
	  lengthAdjust: true,
	  letterSpacing: true,
	  lightingColor: true,
	  limitingConeAngle: true,
	  local: true,
	  markerEnd: true,
	  markerMid: true,
	  markerStart: true,
	  markerHeight: true,
	  markerUnits: true,
	  markerWidth: true,
	  mask: true,
	  maskContentUnits: true,
	  maskUnits: true,
	  mathematical: true,
	  mode: true,
	  numOctaves: true,
	  offset: true,
	  opacity: true,
	  operator: true,
	  order: true,
	  orient: true,
	  orientation: true,
	  origin: true,
	  overflow: true,
	  overlinePosition: true,
	  overlineThickness: true,
	  paintOrder: true,
	  panose1: true,
	  pathLength: true,
	  patternContentUnits: true,
	  patternTransform: true,
	  patternUnits: true,
	  pointerEvents: true,
	  points: true,
	  pointsAtX: true,
	  pointsAtY: true,
	  pointsAtZ: true,
	  preserveAlpha: true,
	  preserveAspectRatio: true,
	  primitiveUnits: true,
	  r: true,
	  radius: true,
	  refX: true,
	  refY: true,
	  renderingIntent: true,
	  repeatCount: true,
	  repeatDur: true,
	  requiredExtensions: true,
	  requiredFeatures: true,
	  restart: true,
	  result: true,
	  rotate: true,
	  rx: true,
	  ry: true,
	  scale: true,
	  seed: true,
	  shapeRendering: true,
	  slope: true,
	  spacing: true,
	  specularConstant: true,
	  specularExponent: true,
	  speed: true,
	  spreadMethod: true,
	  startOffset: true,
	  stdDeviation: true,
	  stemh: true,
	  stemv: true,
	  stitchTiles: true,
	  stopColor: true,
	  stopOpacity: true,
	  strikethroughPosition: true,
	  strikethroughThickness: true,
	  string: true,
	  stroke: true,
	  strokeDasharray: true,
	  strokeDashoffset: true,
	  strokeLinecap: true,
	  strokeLinejoin: true,
	  strokeMiterlimit: true,
	  strokeOpacity: true,
	  strokeWidth: true,
	  surfaceScale: true,
	  systemLanguage: true,
	  tableValues: true,
	  targetX: true,
	  targetY: true,
	  textAnchor: true,
	  textDecoration: true,
	  textRendering: true,
	  textLength: true,
	  to: true,
	  transform: true,
	  u1: true,
	  u2: true,
	  underlinePosition: true,
	  underlineThickness: true,
	  unicode: true,
	  unicodeBidi: true,
	  unicodeRange: true,
	  unitsPerEm: true,
	  vAlphabetic: true,
	  vHanging: true,
	  vIdeographic: true,
	  vMathematical: true,
	  values: true,
	  vectorEffect: true,
	  version: true,
	  vertAdvY: true,
	  vertOriginX: true,
	  vertOriginY: true,
	  viewBox: true,
	  viewTarget: true,
	  visibility: true,
	  widths: true,
	  wordSpacing: true,
	  writingMode: true,
	  x: true,
	  xHeight: true,
	  x1: true,
	  x2: true,
	  xChannelSelector: true,
	  xlinkActuate: true,
	  xlinkArcrole: true,
	  xlinkHref: true,
	  xlinkRole: true,
	  xlinkShow: true,
	  xlinkTitle: true,
	  xlinkType: true,
	  xmlBase: true,
	  xmlns: true,
	  xmlnsXlink: true,
	  xmlLang: true,
	  xmlSpace: true,
	  y: true,
	  y1: true,
	  y2: true,
	  yChannelSelector: true,
	  z: true,
	  zoomAndPan: true
	};
	
	/* From DOMProperty */
	var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
	var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
	var isCustomAttribute = RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));
	
	var hasOwnProperty = {}.hasOwnProperty;
	
	exports.default = function (name) {
	  return hasOwnProperty.call(htmlProps, name) || hasOwnProperty.call(svgProps, name) || isCustomAttribute(name.toLowerCase()) || hasOwnProperty.call(reactProps, name);
	};
	
	module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/styled-components/lib/vendor/glamor/hash.js":
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = doHash;
	// murmurhash2 via https://gist.github.com/raycmorgan/588423
	
	function doHash(str, seed) {
	  var m = 0x5bd1e995;
	  var r = 24;
	  var h = seed ^ str.length;
	  var length = str.length;
	  var currentIndex = 0;
	
	  while (length >= 4) {
	    var k = UInt32(str, currentIndex);
	
	    k = Umul32(k, m);
	    k ^= k >>> r;
	    k = Umul32(k, m);
	
	    h = Umul32(h, m);
	    h ^= k;
	
	    currentIndex += 4;
	    length -= 4;
	  }
	
	  switch (length) {
	    case 3:
	      h ^= UInt16(str, currentIndex);
	      h ^= str.charCodeAt(currentIndex + 2) << 16;
	      h = Umul32(h, m);
	      break;
	
	    case 2:
	      h ^= UInt16(str, currentIndex);
	      h = Umul32(h, m);
	      break;
	
	    case 1:
	      h ^= str.charCodeAt(currentIndex);
	      h = Umul32(h, m);
	      break;
	  }
	
	  h ^= h >>> 13;
	  h = Umul32(h, m);
	  h ^= h >>> 15;
	
	  return h >>> 0;
	}
	
	function UInt32(str, pos) {
	  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8) + (str.charCodeAt(pos++) << 16) + (str.charCodeAt(pos) << 24);
	}
	
	function UInt16(str, pos) {
	  return str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8);
	}
	
	function Umul32(n, m) {
	  n = n | 0;
	  m = m | 0;
	  var nlo = n & 0xffff;
	  var nhi = n >>> 16;
	  var res = nlo * m + ((nhi * m & 0xffff) << 16) | 0;
	  return res;
	}
	module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/stylis/stylis.js":
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/*
	 *          __        ___
	 *    _____/ /___  __/ (_)____
	 *   / ___/ __/ / / / / / ___/
	 *  (__  ) /_/ /_/ / / (__  )
	 * /____/\__/\__, /_/_/____/
	 *          /____/
	 *
	 * light - weight css preprocessor @licence MIT
	 */
	/* eslint-disable */
	(function (factory) {
		 true ? (module['exports'] = factory(null)) :
			typeof define === 'function' && define['amd'] ? define(factory(null)) :
				(window['stylis'] = factory(null))
	}(/** @param {*=} options */function factory (options) {
	
		'use strict'
	
		/**
		 * Notes
		 *
		 * The ['<method name>'] pattern is used to support closure compiler
		 * the jsdoc signatures are also used to the same effect
		 *
		 * ---- 
		 *
		 * int + int + int === n4 [faster]
		 *
		 * vs
		 *
		 * int === n1 && int === n2 && int === n3
		 *
		 * ----
		 *
		 * switch (int) { case ints...} [faster]
		 *
		 * vs
		 *
		 * if (int == 1 && int === 2 ...)
		 *
		 * ----
		 *
		 * The (first*n1 + second*n2 + third*n3) format used in the property parser
		 * is a simple way to hash the sequence of characters
		 * taking into account the index they occur in
		 * since any number of 3 character sequences could produce duplicates.
		 *
		 * On the other hand sequences that are directly tied to the index of the character
		 * resolve a far more accurate measure, it's also faster
		 * to evaluate one condition in a switch statement
		 * than three in an if statement regardless of the added math.
		 *
		 * This allows the vendor prefixer to be both small and fast.
		 */
	
		var nullptn = /^\0+/g /* matches leading null characters */
		var formatptn = /[\0\r\f]/g /* matches new line, null and formfeed characters */
		var colonptn = /: */g /* splits animation rules */
		var cursorptn = /zoo|gra/ /* assert cursor varient */
		var transformptn = /([,: ])(transform)/g /* vendor prefix transform, older webkit */
		var animationptn = /,+\s*(?![^(]*[)])/g /* splits multiple shorthand notation animations */
		var propertiesptn = / +\s*(?![^(]*[)])/g /* animation properties */
		var elementptn = / *[\0] */g /* selector elements */
		var selectorptn = /,\r+?/g /* splits selectors */
		var andptn = /([\t\r\n ])*\f?&/g /* match & */
		var escapeptn = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g /* matches :global(.*) */
		var invalidptn = /\W+/g /* removes invalid characters from keyframes */
		var keyframeptn = /@(k\w+)\s*(\S*)\s*/ /* matches @keyframes $1 */
		var plcholdrptn = /::(place)/g /* match ::placeholder varient */
		var readonlyptn = /:(read-only)/g /* match :read-only varient */
		var beforeptn = /\s+(?=[{\];=:>])/g /* matches \s before ] ; = : */
		var afterptn = /([[}=:>])\s+/g /* matches \s after characters [ } = : */
		var tailptn = /(\{[^{]+?);(?=\})/g /* matches tail semi-colons ;} */
		var whiteptn = /\s{2,}/g /* matches repeating whitespace */
		var pseudoptn = /([^\(])(:+) */g /* pseudo element */
		var writingptn = /[svh]\w+-[tblr]{2}/ /* match writing mode property values */
		var gradientptn = /([\w-]+t\()/g /* match *gradient property */
		var supportsptn = /\(\s*([^]*?)\s*\)/g /* match supports (groups) */
		var propertyptn = /([^]*?);/g /* match properties leading semicolon 
	
		/* vendors */
		var webkit = '-webkit-'
		var moz = '-moz-'
		var ms = '-ms-'
	
		/* character codes */
		var SEMICOLON = 59 /* ; */
		var CLOSEBRACES = 125 /* } */
		var OPENBRACES = 123 /* { */
		var OPENPARENTHESES = 40 /* ( */
		var CLOSEPARENTHESES = 41 /* ) */
		var OPENBRACKET = 91 /* [ */
		var CLOSEBRACKET = 93 /* ] */
		var NEWLINE = 10 /* \n */
		var CARRIAGE = 13 /* \r */
		var TAB = 9 /* \t */
		var AT = 64 /* @ */
		var SPACE = 32 /*   */
		var AND = 38 /* & */
		var DASH = 45 /* - */
		var UNDERSCORE = 95 /* _ */
		var STAR = 42 /* * */
		var COMMA = 44 /* , */
		var COLON = 58 /* : */
		var SINGLEQUOTE = 39 /* ' */
		var DOUBLEQUOTE = 34 /* " */
		var FOWARDSLASH = 47 /* / */
		var GREATERTHAN = 62 /* > */
		var PLUS = 43 /* + */
		var TILDE = 126 /* ~ */
		var NULL = 0 /* \0 */
		var FORMFEED = 12 /* \f */
		var VERTICALTAB = 11 /* \v */
	
		/* special identifiers */
		var KEYFRAME = 107 /* k */
		var MEDIA = 109 /* m */
		var SUPPORTS = 115 /* s */
		var PLACEHOLDER = 112 /* p */
		var READONLY = 111 /* o */
		var IMPORT = 169 /* <at>i */
		var CHARSET = 163 /* <at>c */
		var DOCUMENT = 100 /* <at>d */
	
		var column = 1 /* current column */
		var line = 1 /* current line numebr */
		var pattern = 0 /* :pattern */
	
		var cascade = 1 /* #id h1 h2 vs h1#id h2#id  */
		var vendor = 1 /* vendor prefix */
		var escape = 1 /* escape :global() pattern */
		var compress = 0 /* compress output */
		var semicolon = 0 /* no/semicolon option */
		var preserve = 0 /* preserve empty selectors */
	
		/* empty reference */
		var array = []
	
		/* plugins */
		var plugins = []
		var plugged = 0
	
		/* plugin context */
		var POSTS = -2
		var PREPS = -1
		var UNKWN = 0
		var PROPS = 1
		var BLCKS = 2
		var ATRUL = 3
	
		/* plugin newline context */
		var unkwn = 0
	
		/* keyframe animation */
		var keyed = 1
		var key = ''
	
		/* selector namespace */
		var nscopealt = ''
		var nscope = ''
	
		/**
		 * Compile
		 *
		 * @param {Array<string>} parent
		 * @param {Array<string>} current
		 * @param {string} body
		 * @param {number} id
		 * @return {string}
		 */
		function compile (parent, current, body, id) {
			var bracket = 0 /* brackets [] */
			var comment = 0 /* comments /* // or /* */
			var parentheses = 0 /* functions () */
			var quote = 0 /* quotes '', "" */
	
			var first = 0 /* first character code */
			var second = 0 /* second character code */
			var code = 0 /* current character code */
			var tail = 0 /* previous character code */
			var trail = 0 /* character before previous code */
			var peak = 0 /* previous non-whitespace code */
			
			var counter = 0 /* count sequence termination */
			var context = 0 /* track current context */
			var atrule = 0 /* track @at-rule context */
			var pseudo = 0 /* track pseudo token index */
			var caret = 0 /* current character index */
			var format = 0 /* control character formating context */
			var insert = 0 /* auto semicolon insertion */
			var invert = 0 /* inverted selector pattern */
			var length = 0 /* generic length address */
			var eof = body.length /* end of file(length) */
			var eol = eof - 1 /* end of file(characters) */
	
			var char = '' /* current character */
			var chars = '' /* current buffer of characters */
			var child = '' /* next buffer of characters */
			var out = '' /* compiled body */
			var children = '' /* compiled children */
			var flat = '' /* compiled leafs */
			var selector /* generic selector address */
			var result /* generic address */
	
			// ...build body
			while (caret < eof) {
				code = body.charCodeAt(caret)
	
				if (comment + quote + parentheses + bracket === 0) {
					// eof varient
					if (caret === eol) {
						if (format > 0) {
							chars = chars.replace(formatptn, '')
						}
	
						if (chars.trim().length > 0) {
							switch (code) {
								case SPACE:
								case TAB:
								case SEMICOLON:
								case CARRIAGE:
								case NEWLINE: {
									break
								}
								default: {
									chars += body.charAt(caret)
								}
							}
	
							code = SEMICOLON
						}
					}
	
					// auto semicolon insertion
					if (insert === 1) {
						switch (code) {
							// false flags
							case OPENBRACES:
							case COMMA: {
								insert = 0
								break
							}
							// ignore
							case TAB:
							case CARRIAGE:
							case NEWLINE:
							case SPACE: {
								break
							}
							// valid
							default: {
								caret--
								code = SEMICOLON
							}
						}
					}
	
					// token varient
					switch (code) {
						case OPENBRACES: {
							chars = chars.trim()
							first = chars.charCodeAt(0)
							counter = 1
							length = ++caret
	
							while (caret < eof) {
								code = body.charCodeAt(caret)
	
								switch (code) {
									case OPENBRACES: {
										counter++
										break
									}
									case CLOSEBRACES: {
										counter--
										break
									}
								}
	
								if (counter === 0) {
									break
								}
	
								caret++
							}
	
							child = body.substring(length, caret)
	
							if (first === NULL) {
								first = (chars = chars.replace(nullptn, '').trim()).charCodeAt(0)
							}
	
							switch (first) {
								// @at-rule
								case AT: {
									if (format > 0) {
										chars = chars.replace(formatptn, '')
									}
	
									second = chars.charCodeAt(1)
	
									switch (second) {
										case DOCUMENT:
										case MEDIA:
										case SUPPORTS: {
											selector = current
											break
										}
										default: {
											selector = array
										}
									}
	
									child = compile(current, selector, child, second)
									length = child.length
	
									// preserve empty @at-rule
									if (preserve > 0 && length === 0) {
										length = chars.length
									}
	
									// execute plugins, @at-rule context
									if (plugged > 0) {
										selector = select(array, chars, invert)
										result = proxy(ATRUL, child, selector, current, line, column, length, second)
										chars = selector.join('')
	
										if (result !== void 0) {
											if ((length = (child = result.trim()).length) === 0) {
												second = 0
												child = ''
											}
										}
									}
	
									if (length > 0) {
										switch (second) {
											case SUPPORTS: {
												chars = chars.replace(supportsptn, supports)
											}
											case DOCUMENT:
											case MEDIA: {
												child = chars + '{' + child + '}'
												break
											}
											case KEYFRAME: {
												chars = chars.replace(keyframeptn, '$1 $2' + (keyed > 0 ? key : ''))
												child = chars + '{' + child + '}'
												child = '@' + (vendor > 0 ? webkit + child + '@' + child : child)
												break
											}
											default: {
												child = chars + child
											}
										}
									} else {
										child = ''
									}
	
									break
								}
								// selector
								default: {
									child = compile(current, select(current, chars, invert), child, id)
								}
							}
	
							children += child
	
							// reset
							context = 0
							insert = 0
							pseudo = 0
							format = 0
							invert = 0
							atrule = 0
							chars = ''
							child = ''
							code = body.charCodeAt(++caret)
							break
						}
						case CLOSEBRACES:
						case SEMICOLON: {
							chars = (format > 0 ? chars.replace(formatptn, '') : chars).trim()
	
							if (chars.length > 1) {
								// monkey-patch missing colon
								if (pseudo === 0) {
									first = chars.charCodeAt(0)
	
									// first character is a letter or dash, buffer has a space character
									if ((first === DASH || first > 96 && first < 123) && chars.indexOf(' ')) {
										chars = chars.replace(' ', ':')
									}
								}
	
								// execute plugins, property context
								if (plugged > 0) {
									if ((result = proxy(PROPS, chars, current, parent, line, column, out.length, id)) !== void 0) {
										if ((chars = result.trim()).length === 0) {
											chars = '\0\0'
										}
									}
								}
	
								first = chars.charCodeAt(0)
								second = chars.charCodeAt(1)
	
								switch (first + second) {
									case NULL: {
										break
									}
									case IMPORT:
									case CHARSET: {
										flat += chars + body.charAt(caret)
										break
									}
									default: {
										out += pseudo > 0 ? property(chars, first, second, chars.charCodeAt(2)) : chars + ';'
									}
								}
							}
	
							// reset
							context = 0
							insert = 0
							pseudo = 0
							format = 0
							invert = 0
							chars = ''
							code = body.charCodeAt(++caret)
							break
						}
					}
				}
	
				// parse characters
				switch (code) {
					case CARRIAGE:
					case NEWLINE: {
						// auto insert semicolon
						if (comment + quote + parentheses + bracket + semicolon === 0) {
							// valid non-whitespace characters that
							// may precede a newline
							switch (peak) {
								case CLOSEPARENTHESES:
								case SINGLEQUOTE:
								case DOUBLEQUOTE:
								case AT:
								case TILDE:
								case GREATERTHAN:
								case STAR:
								case PLUS:
								case FOWARDSLASH:
								case DASH:
								case COLON:
								case COMMA:
								case SEMICOLON:
								case OPENBRACES:
								case CLOSEBRACES: {
									break
								}
								default: {
									// current buffer has a colon
									if (pseudo > 0) {
										insert = 1
									}
								}
							}
						}
	
						// terminate line comment
						if (comment === FOWARDSLASH) {
							comment = 0
						}
	
						// execute plugins, newline context
						if (plugged * unkwn > 0) {
							proxy(UNKWN, chars, current, parent, line, column, out.length, id)
						}
	
						// next line, reset column position
						column = 1
						line++
						break
					}
					case SEMICOLON:
					case CLOSEBRACES: {
						if (comment + quote + parentheses + bracket === 0) {
							column++
							break
						}
					}
					default: {
						// increment column position
						column++
	
						// current character
						char = body.charAt(caret)
							
						// remove comments, escape functions, strings, attributes and prepare selectors
						switch (code) {
							case TAB:
							case SPACE: {
								if (quote + bracket === 0) {
									switch (tail) {
										case COMMA:
										case COLON:
										case TAB:
										case SPACE: {
											char = ''
											break
										}
										default: {
											if (code !== SPACE) {
												char = ' '
											}
										}
									}
								}
								break
							}
							// escape breaking control characters
							case NULL: {
								char = '\\0'
								break
							}
							case FORMFEED: {
								char = '\\f'
								break
							}
							case VERTICALTAB: {
								char = '\\v'
								break
							}
							// &
							case AND: {
								// inverted selector pattern i.e html &
								if (quote + comment + bracket === 0 && cascade > 0) {
									invert = 1
									format = 1
									char = '\f' + char
								}
								break
							}
							// ::p<l>aceholder, l
							// :read-on<l>y, l
							case 108: {
								if (quote + comment + bracket + pattern === 0 && pseudo > 0) {
									switch (caret - pseudo) {
										// ::placeholder
										case 2: {
											if (tail === PLACEHOLDER && body.charCodeAt(caret-3) === COLON) {
												pattern = tail
											}
										}
										// :read-only
										case 8: {
											if (trail === READONLY) {
												pattern = trail
											}
										}
									}
								}
								break
							}
							// :<pattern>
							case COLON: {
								if (quote + comment + bracket === 0) {
									pseudo = caret
								}
								break
							}
							// selectors
							case COMMA: {
								if (comment + parentheses + quote + bracket === 0) {
									format = 1
									char += '\r'
								}
								break
							}
							// quotes
							case DOUBLEQUOTE: {
								if (comment === 0) {
									quote = quote === code ? 0 : (quote === 0 ? code : quote)
									// " last character, add synthetic padding
									if (caret === eol) {
										eol++
										eof++
									}
								}
								break
							}
							case SINGLEQUOTE: {
								if (comment === 0) {
									quote = quote === code ? 0 : (quote === 0 ? code : quote)
									// ' last character, add synthetic padding
									if (caret === eol) {
										eol++
										eof++
									}
								}
								break
							}
							// attributes
							case OPENBRACKET: {
								if (quote + comment + parentheses === 0) {
									bracket++
								}
								break
							}
							case CLOSEBRACKET: {
								if (quote + comment + parentheses === 0) {
									bracket--
								}
								break
							}
							// functions
							case CLOSEPARENTHESES: {
								if (quote + comment + bracket === 0) {
									// ) last character, add synthetic padding
									if (caret === eol) {
										eol++
										eof++
									}
	
									parentheses--
								}
								break
							}
							case OPENPARENTHESES: {
								if (quote + comment + bracket === 0) {
									if (context === 0) {
										switch (tail*2 + trail*3) {
											// :matches
											case 533: {
												break
											}
											// :global, :not, :nth-child etc...
											default: {
												counter = 0
												context = 1
											}
										}
									}
	
									parentheses++
								}
								break
							}
							case AT: {
								if (comment + parentheses + quote + bracket + pseudo + atrule === 0) {
									atrule = 1
								}
								break
							}
							// block/line comments
							case STAR:
							case FOWARDSLASH: {
								if (quote + bracket + parentheses > 0) {
									break
								}
	
								switch (comment) {
									// initialize line/block comment context
									case 0: {
										switch (code*2 + body.charCodeAt(caret+1)*3) {
											// //
											case 235: {
												comment = FOWARDSLASH
												break
											}
											// /*
											case 220: {
												comment = STAR
												break
											}
										}
										break
									}
									// end block comment context
									case STAR: {
										if (code === FOWARDSLASH && tail === STAR) {
											char = ''
											comment = 0
										}
									}
								}
							}
						}
	
						// ignore comment blocks
						if (comment === 0) {
							// aggressive isolation mode, divide each individual selector
							// including selectors in :not function but excluding selectors in :global function
							if (cascade + quote + bracket + atrule === 0 && id !== KEYFRAME && code !== SEMICOLON) {
								switch (code) {
									case COMMA:
									case TILDE:
									case GREATERTHAN:
									case PLUS:
									case CLOSEPARENTHESES:
									case OPENPARENTHESES: {
										if (context === 0) {
											// outside of an isolated context i.e nth-child(<...>)
											switch (tail) {
												case TAB:
												case SPACE:
												case NEWLINE:
												case CARRIAGE: {
													char = char + '\0'
													break
												}
												default: {
													char = '\0' + char + (code === COMMA ? '' : '\0')
												}
											}
											format = 1
										} else {
											// within an isolated context, sleep untill it's terminated
											switch (code) {
												case OPENPARENTHESES: {
													context = ++counter
													break
												}
												case CLOSEPARENTHESES: {
													if ((context = --counter) === 0) {
														format = 1
														char += '\0'
													}
													break
												}
											}
										}
										break
									}
									case SPACE: {
										switch (tail) {
											case NULL:
											case OPENBRACES:
											case CLOSEBRACES:
											case SEMICOLON:
											case COMMA:
											case FORMFEED:
											case TAB:
											case SPACE:
											case NEWLINE:
											case CARRIAGE: {
												break
											}
											default: {
												// ignore in isolated contexts
												if (context === 0) {
													format = 1
													char += '\0'
												}
											}
										}
									}
								}
							}
	
							// concat buffer of characters
							chars += char
	
							// previous non-whitespace character code
							if (code !== SPACE) {
								peak = code
							}
						}
					}
				}
	
				// tail character codes
				trail = tail
				tail = code
	
				// visit every character
				caret++
			}
	
			length = out.length
	
			// preserve empty selector
	 		if (preserve > 0) {
	 			if (length === 0 && children.length === 0 && (current[0].length === 0) === false) {
	 				if (id !== MEDIA || (current.length === 1 && (cascade > 0 ? nscopealt : nscope) === current[0])) {
						length = current.join(',').length + 2 					
	 				}
	 			}
			}
	
			if (length > 0) {
				// cascade isolation mode?
				selector = cascade === 0 && id !== KEYFRAME ? isolate(current) : current
	
				// execute plugins, block context
				if (plugged > 0) {
					result = proxy(BLCKS, out, selector, parent, line, column, length, id)
	
					if (result !== void 0 && (out = result).length === 0) {
						return flat + out + children
					}
				}
	
				out = selector.join(',') + '{' + out + '}'
	
				if (vendor*pattern > 0) {
					switch (pattern) {
						// ::read-only
						case READONLY: {
							out = out.replace(readonlyptn, ':'+moz+'$1')+out
							break
						}
						// ::placeholder
						case PLACEHOLDER: {
							out = (
								out.replace(plcholdrptn, '::' + webkit + 'input-$1') +
								out.replace(plcholdrptn, '::' + moz + '$1') +
								out.replace(plcholdrptn, ':' + ms + 'input-$1') + out
							)
							break
						}
					}
					pattern = 0
				}
			}
	
			return flat + out + children
		}
	
		/**
		 * Select
		 *
		 * @param {Array<string>} parent
		 * @param {string} current
		 * @param {number} invert
		 * @return {Array<string>}
		 */
		function select (parent, current, invert) {
			var selectors = current.trim().split(selectorptn)
			var out = selectors
	
			var length = selectors.length
			var l = parent.length
	
			switch (l) {
				// 0-1 parent selectors
				case 0:
				case 1: {
					for (var i = 0, selector = l === 0 ? '' : parent[0] + ' '; i < length; ++i) {
						out[i] = scope(selector, out[i], invert, l).trim()
					}
					break
				}
				// >2 parent selectors, nested
				default: {
					for (var i = 0, j = 0, out = []; i < length; ++i) {
						for (var k = 0; k < l; ++k) {
							out[j++] = scope(parent[k] + ' ', selectors[i], invert, l).trim()
						}
					}
				}
			}
	
			return out
		}
	
		/**
		 * Scope
		 *
		 * @param {string} parent
		 * @param {string} current
		 * @param {number} invert
		 * @param {number} level
		 * @return {string}
		 */
		function scope (parent, current, invert, level) {
			var selector = current
			var code = selector.charCodeAt(0)
	
			// trim leading whitespace
			if (code < 33) {
				code = (selector = selector.trim()).charCodeAt(0)
			}
	
			switch (code) {
				// &
				case AND: {
					switch (cascade + level) {
						case 0:
						case 1: {
							if (parent.trim().length === 0) {
								break
							}
						}
						default: {
							return selector.replace(andptn, '$1'+parent.trim())
						}
					}
					break
				}
				// :
				case COLON: {
					switch (selector.charCodeAt(1)) {
						// g in :global
						case 103: {
							if (escape > 0 && cascade > 0) {
								return selector.replace(escapeptn, '$1').replace(andptn, '$1'+nscope)
							}
							break
						}
						default: {
							// :hover
							return parent.trim() + selector
						}
					}
				}
				default: {
					// html &
					if (invert*cascade > 0 && selector.indexOf('\f') > 0) {
						return selector.replace(andptn, (parent.charCodeAt(0) === COLON ? '' : '$1')+parent.trim())
					}
				}
			}
	
			return parent + selector
		}
	
		/**
		 * Property
		 *
		 * @param {string} input
		 * @param {number} first
		 * @param {number} second
		 * @param {number} third
		 * @return {string}
		 */
		function property (input, first, second, third) {
			var index = 0
			var out = input + ';'
			var hash = (first*2) + (second*3) + (third*4)
			var cache
	
			// animation: a, n, i characters
			if (hash === 944) {
				out = animation(out)
			} else if (vendor > 0) {
				// vendor prefix
				switch (hash) {
					// mask
					case 969: {
						out = webkit + out.replace(gradientptn, webkit+'$1') + out
						break
					}
					// filter
					case 951: {
						out = webkit + out + out
						break
					}
					// color/column, c, o, l
					case 963: {
						// column
						if (out.charCodeAt(5) === 110) {
							out = webkit + out + out
						}
						break
					}
					// appearance: a, p, p
					case 978: {
						out = webkit + out + moz + out + out
						break
					}
					// hyphens: h, y, p
					// user-select: u, s, e
					case 1019:
					case 983: {
						out = webkit + out + moz + out + ms + out + out
						break
					}
					// background/backface-visibility, b, a, c
					case 883: {
						// backface-visibility, -
						if (out.charCodeAt(8) === DASH) {
							out = webkit + out + out
						}
						break
					}
					// flex: f, l, e
					case 932: {
						out = webkit + out + ms + out + out
						break
					}
					// order: o, r, d
					case 964: {
						out = webkit + out + ms + 'flex' + '-' + out + out
						break
					}
					// justify-content, j, u, s
					case 1023: {
						cache = out.substring(out.indexOf(':', 15)).replace('flex-', '')
						out = webkit + 'box-pack' + cache + webkit + out + ms + 'flex-pack' + cache + out
						break
					}
					// position: sticky
					case 1017: {
						if (out.indexOf('sticky', 9) === -1) {
							break
						}
					}
					// display(flex/inline-flex/inline-box): d, i, s
					case 975: {
						index = (out = input).length-10
						cache = (out.charCodeAt(index) === 33 ? out.substring(0, index) : out).substring(input.indexOf(':', 7) + 1).trim()
	
						switch (hash = cache.charCodeAt(0) + (cache.charCodeAt(7)|0)) {
							// inline-
							case 203: {
								// inline-box
								if (cache.charCodeAt(8) < 111) {
									break
								}
							}
							// inline-box/sticky
							case 115: {
								out = out.replace(cache, webkit+cache)+';'+out
								break
							}
							// inline-flex
							// flex
							case 207:
							case 102: {
								out = (
									out.replace(cache, webkit+(hash > 102 ? 'inline-' : '')+'box')+';'+
									out.replace(cache, webkit+cache)+';'+
									out.replace(cache, ms+cache+'box')+';'+
									out
								)
							}
						}
						
						out += ';'
						break
					}
					// align-items, align-center, align-self: a, l, i, -
					case 938: {
						if (out.charCodeAt(5) === DASH) {
							switch (out.charCodeAt(6)) {
								// align-items, i
								case 105: {
									cache = out.replace('-items', '')
									out = webkit + out + webkit + 'box-' + cache + ms + 'flex-' + cache + out
									break
								}
								// align-self, s
								case 115: {
									out = webkit + out + ms + 'flex-item-' + out.replace('-self', '') + out
									break
								}
								// align-content
								default: {
									out = webkit + out + ms + 'flex-line-pack' + out.replace('align-content', '') + out
								}
							}
						}
						break
					}
					// cursor, c, u, r
					case 1005: {
						if (cursorptn.test(out)) {
							out = out.replace(colonptn, ':' + webkit) + out.replace(colonptn, ':' + moz) + out
						}
						break
					}
					// width: min-content / width: max-content
					case 953: {
						if ((index = out.indexOf('-content', 9)) > 0) {
							// width: min-content / width: max-content
							cache = out.substring(index - 3)
							out = 'width:' + webkit + cache + 'width:' + moz + cache + 'width:' + cache
						}
						break
					}
					// text-size-adjust: t, e, x
					case 1015: {
						if (input.charCodeAt(9) !== DASH) {
							break
						}
					}
					// transform, transition: t, r, a
					case 962: {
						out = webkit + out + (out.charCodeAt(5) === 102 ? ms + out : '') + out
	
						// transitions
						if (second + third === 211 && out.charCodeAt(13) === 105 && out.indexOf('transform', 10) > 0) {
							out = out.substring(0, out.indexOf(';', 27) + 1).replace(transformptn, '$1' + webkit + '$2') + out
						}
	
						break
					}
					// writing-mode, w, r, i
					case 1000: {
						cache = out.substring(13).trim()
						index = cache.indexOf('-')+1
	
						switch (cache.charCodeAt(0)+cache.charCodeAt(index)) {
							// vertical-lr
							case 226: {
								cache = out.replace(writingptn, 'tb')
								break
							}
							// vertical-rl
							case 232: {
								cache = out.replace(writingptn, 'tb-rl')
								break
							}
							// horizontal-tb
							case 220: {
								cache = out.replace(writingptn, 'lr')
								break
							}
							default: {
								return out
							}
						}
	
						out = webkit + out + ms + cache + out
						break
					}
				}
			}
	
			return out
		}
	
		/**
		 * @param {string} match
		 * @param {string} group
		 * @return {string}
		 */
		function supports (match, group) {
			var out = property(group, group.charCodeAt(0), group.charCodeAt(1), group.charCodeAt(2))
	
			return out !== group+';' ? out.replace(propertyptn, 'or($1)').substring(2) : '('+group+')'
		}
	
		/**
		 * Animation
		 *
		 * @param {string} input
		 * @return {string}
		 */
		function animation (input) {
			var length = input.length
			var index = input.indexOf(':', 9) + 1
			var declare = input.substring(0, index).trim()
			var body = input.substring(index, length-1).trim()
			var out = ''
	
			// shorthand
			if (input.charCodeAt(9) !== DASH) {
				// split in case of multiple animations
				var list = body.split(animationptn)
	
				for (var i = 0, index = 0, length = list.length; i < length; index = 0, ++i) {
					var value = list[i]
					var items = value.split(propertiesptn)
	
					while (value = items[index]) {
						var peak = value.charCodeAt(0)
	
						if (keyed === 1 && (
							// letters
							(peak > AT && peak < 90) || (peak > 96 && peak < 123) || peak === UNDERSCORE ||
							// dash but not in sequence i.e --
							(peak === DASH && value.charCodeAt(1) !== DASH)
						)) {
							// not a number/function
							switch (isNaN(parseFloat(value)) + (value.indexOf('(') !== -1)) {
								case 1: {
									switch (value) {
										// not a valid reserved keyword
										case 'infinite': case 'alternate': case 'backwards': case 'running':
										case 'normal': case 'forwards': case 'both': case 'none': case 'linear':
										case 'ease': case 'ease-in': case 'ease-out': case 'ease-in-out':
										case 'paused': case 'reverse': case 'alternate-reverse': case 'inherit':
										case 'initial': case 'unset': case 'step-start': case 'step-end': {
											break
										}
										default: {
											value += key
										}
									}
								}
							}
						}
	
						items[index++] = value
					}
	
					out += (i === 0 ? '' : ',') + items.join(' ')
				}
			} else {
				// animation-name, n
				out += input.charCodeAt(10) === 110 ? body + (keyed === 1 ? key : '') : body
			}
	
			out = declare + out + ';'
	
			return vendor > 0 ? webkit + out + out : out
		}
	
		/**
		 * Isolate
		 *
		 * @param {Array<string>} current
		 */
		function isolate (current) {
			for (var i = 0, length = current.length, selector = Array(length), padding, element; i < length; ++i) {
				// split individual elements in a selector i.e h1 h2 === [h1, h2]
				var elements = current[i].split(elementptn)
				var out = ''
	
				for (var j = 0, size = 0, tail = 0, code = 0, l = elements.length; j < l; ++j) {
					// empty element
					if ((size = (element = elements[j]).length) === 0 && l > 1) {
						continue
					}
	
					tail = out.charCodeAt(out.length-1)
					code = element.charCodeAt(0)
					padding = ''
	
					if (j !== 0) {
						// determine if we need padding
						switch (tail) {
							case STAR:
							case TILDE:
							case GREATERTHAN:
							case PLUS:
							case SPACE:
							case OPENPARENTHESES:  {
								break
							}
							default: {
								padding = ' '
							}
						}
					}
	
					switch (code) {
						case AND: {
							element = padding + nscopealt
						}
						case TILDE:
						case GREATERTHAN:
						case PLUS:
						case SPACE:
						case CLOSEPARENTHESES:
						case OPENPARENTHESES: {
							break
						}
						case OPENBRACKET: {
							element = padding + element + nscopealt
							break
						}
						case COLON: {
							switch (element.charCodeAt(1)*2 + element.charCodeAt(2)*3) {
								// :global
								case 530: {
									if (escape > 0) {
										element = padding + element.substring(8, size - 1)
										break
									}
								}
								// :hover, :nth-child(), ...
								default: {
									if (j < 1 || elements[j-1].length < 1) {
										element = padding + nscopealt + element
									}
								}
							}
							break
						}
						case COMMA: {
							padding = ''
						}
						default: {
							if (size > 1 && element.indexOf(':') > 0) {
								element = padding + element.replace(pseudoptn, '$1' + nscopealt + '$2')
							} else {
								element = padding + element + nscopealt
							}
						}
					}
	
					out += element
				}
	
				selector[i] = out.replace(formatptn, '').trim()
			}
	
			return selector
		}
	
		/**
		 * Proxy
		 *
		 * @param {number} context
		 * @param {string} content
		 * @param {Array<string>} selectors
		 * @param {Array<string>} parents
		 * @param {number} line
		 * @param {number} column
		 * @param {number} length
		 * @param {number} id
		 * @return {(string|void|*)}
		 */
		function proxy (context, content, selectors, parents, line, column, length, id) {
			for (var i = 0, out = content, next; i < plugged; ++i) {
				switch (next = plugins[i].call(stylis, context, out, selectors, parents, line, column, length, id)) {
					case void 0:
					case false:
					case true:
					case null: {
						break
					}
					default: {
						out = next
					}
				}
			}
	
			switch (out) {
				case void 0:
				case false:
				case true:
				case null:
				case content: {
					break
				}
				default: {
					return out
				}
			}
		}
	
		/**
		 * Minify
		 *
		 * @param {(string|*)} output
		 * @return {string}
		 */
		function minify (output) {
			return output
				.replace(formatptn, '')
				.replace(beforeptn, '')
				.replace(afterptn, '$1')
				.replace(tailptn, '$1')
				.replace(whiteptn, ' ')
		}
	
		/**
		 * Use
		 *
		 * @param {(Array<function(...?)>|function(...?)|number|void)?} plugin
		 */
		function use (plugin) {
			switch (plugin) {
				case void 0:
				case null: {
					plugged = plugins.length = 0
					break
				}
				default: {
					switch (plugin.constructor) {
						case Array: {
							for (var i = 0, length = plugin.length; i < length; ++i) {
								use(plugin[i])
							}
							break
						}
						case Function: {
							plugins[plugged++] = plugin
							break
						}
						case Boolean: {
							unkwn = !!plugin|0
						}
					}
				}
	 		}
	
	 		return use
		}
	
		/**
		 * Set
		 *
		 * @param {*} options
		 */
		function set (options) {
			for (var name in options) {
				var value = options[name]
				switch (name) {
					case 'keyframe': keyed = value|0; break
					case 'global': escape = value|0; break
					case 'cascade': cascade = value|0; break
					case 'compress': compress = value|0; break
					case 'prefix': vendor = value|0; break
					case 'semicolon': semicolon = value|0; break
					case 'preserve': preserve = value|0; break
				}
			}
	
			return set
		}
	
		/**
		 * Stylis
		 *
		 * @param {string} selector
		 * @param {string} input
		 * @return {*}
		 */
		function stylis (selector, input) {
			if (this !== void 0 && this.constructor === stylis) {
				return factory(selector)
			}
	
			// setup
			var ns = selector
			var code = ns.charCodeAt(0)
	
			// trim leading whitespace
			if (code < 33) {
				code = (ns = ns.trim()).charCodeAt(0)
			}
	
			// keyframe/animation namespace
			if (keyed > 0) {
				key = ns.replace(invalidptn, code === OPENBRACKET ? '' : '-')
			}
	
			// reset, used to assert if a plugin is moneky-patching the return value
			code = 1
	
			// cascade/isolate
			if (cascade === 1) {
				nscope = ns
			} else {
				nscopealt = ns
			}
	
			var selectors = [nscope]
			var result
	
			// execute plugins, pre-process context
			if (plugged > 0) {
				result = proxy(PREPS, input, selectors, selectors, line, column, 0, 0)
	
				if (result !== void 0 && typeof result === 'string') {
					input = result
				}
			}
	
			// build
			var output = compile(array, selectors, input, 0)
	
			// execute plugins, post-process context
			if (plugged > 0) {
				result = proxy(POSTS, output, selectors, selectors, line, column, output.length, 0)
		
				// bypass minification
				if (result !== void 0 && typeof(output = result) !== 'string') {
					code = 0
				}
			}
	
			// reset
			key = ''
			nscope = ''
			nscopealt = ''
			pattern = 0
			line = 1
			column = 1
	
			return compress*code === 0 ? output : minify(output)
		}
	
		stylis['use'] = use
		stylis['set'] = set
	
		if (options !== void 0) {
			set(options)
		}
	
		return stylis
	}));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),

/***/ "./src/assets/fonts/butler_black-webfont.woff":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/butler_black-webfont.4bcb9356.woff";

/***/ }),

/***/ "./src/assets/fonts/butler_black-webfont.woff2":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/butler_black-webfont.4a9ffe5c.woff2";

/***/ }),

/***/ "./src/assets/fonts/butler_black_stencil-webfont.woff":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/butler_black_stencil-webfont.3affa2e3.woff";

/***/ }),

/***/ "./src/assets/fonts/butler_black_stencil-webfont.woff2":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/butler_black_stencil-webfont.fb94ede0.woff2";

/***/ }),

/***/ "./src/assets/fonts/butler_bold-webfont.woff":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/butler_bold-webfont.3b6db305.woff";

/***/ }),

/***/ "./src/assets/fonts/butler_bold-webfont.woff2":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/butler_bold-webfont.f819a892.woff2";

/***/ }),

/***/ "./src/assets/fonts/butler_bold_stencil-webfont.woff":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/butler_bold_stencil-webfont.e16e51f7.woff";

/***/ }),

/***/ "./src/assets/fonts/butler_bold_stencil-webfont.woff2":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/butler_bold_stencil-webfont.f0134394.woff2";

/***/ }),

/***/ "./src/assets/fonts/butler_extrabold-webfont.woff":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/butler_extrabold-webfont.b67dcdc0.woff";

/***/ }),

/***/ "./src/assets/fonts/butler_extrabold-webfont.woff2":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/butler_extrabold-webfont.30d702d9.woff2";

/***/ }),

/***/ "./src/assets/fonts/butler_extrabold_stencil-webfont.woff":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/butler_extrabold_stencil-webfont.75440cc1.woff";

/***/ }),

/***/ "./src/assets/fonts/butler_extrabold_stencil-webfont.woff2":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/butler_extrabold_stencil-webfont.fbb1678b.woff2";

/***/ }),

/***/ "./src/assets/fonts/butler_light-webfont.woff":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/butler_light-webfont.56968a1f.woff";

/***/ }),

/***/ "./src/assets/fonts/butler_light-webfont.woff2":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/butler_light-webfont.5983fe88.woff2";

/***/ }),

/***/ "./src/assets/fonts/butler_light_stencil-webfont.woff":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/butler_light_stencil-webfont.afb94bef.woff";

/***/ }),

/***/ "./src/assets/fonts/butler_light_stencil-webfont.woff2":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/butler_light_stencil-webfont.94cadd79.woff2";

/***/ }),

/***/ "./src/assets/fonts/butler_medium-webfont.woff":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/butler_medium-webfont.8e2248e0.woff";

/***/ }),

/***/ "./src/assets/fonts/butler_medium-webfont.woff2":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/butler_medium-webfont.e2866d0c.woff2";

/***/ }),

/***/ "./src/assets/fonts/butler_medium_stencil-webfont.woff":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/butler_medium_stencil-webfont.29f8a716.woff";

/***/ }),

/***/ "./src/assets/fonts/butler_medium_stencil-webfont.woff2":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/butler_medium_stencil-webfont.110f2901.woff2";

/***/ }),

/***/ "./src/assets/fonts/butler_regular-webfont.woff":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/butler_regular-webfont.d7bced83.woff";

/***/ }),

/***/ "./src/assets/fonts/butler_regular-webfont.woff2":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/butler_regular-webfont.b53481cc.woff2";

/***/ }),

/***/ "./src/assets/fonts/butler_regular_stencil-webfont.woff":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/butler_regular_stencil-webfont.5198f73c.woff";

/***/ }),

/***/ "./src/assets/fonts/butler_regular_stencil-webfont.woff2":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/butler_regular_stencil-webfont.7213b03c.woff2";

/***/ }),

/***/ "./src/assets/fonts/butler_ultra_light-webfont.woff":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/butler_ultra_light-webfont.6faaf203.woff";

/***/ }),

/***/ "./src/assets/fonts/butler_ultra_light-webfont.woff2":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/butler_ultra_light-webfont.7659b361.woff2";

/***/ }),

/***/ "./src/assets/fonts/butler_ultra_light_stencil-webfont.woff":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/butler_ultra_light_stencil-webfont.96e470bc.woff";

/***/ }),

/***/ "./src/assets/fonts/butler_ultra_light_stencil-webfont.woff2":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/butler_ultra_light_stencil-webfont.76795727.woff2";

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./butler_black-webfont.woff": "./src/assets/fonts/butler_black-webfont.woff",
		"./butler_black_stencil-webfont.woff": "./src/assets/fonts/butler_black_stencil-webfont.woff",
		"./butler_bold-webfont.woff": "./src/assets/fonts/butler_bold-webfont.woff",
		"./butler_bold_stencil-webfont.woff": "./src/assets/fonts/butler_bold_stencil-webfont.woff",
		"./butler_extrabold-webfont.woff": "./src/assets/fonts/butler_extrabold-webfont.woff",
		"./butler_extrabold_stencil-webfont.woff": "./src/assets/fonts/butler_extrabold_stencil-webfont.woff",
		"./butler_light-webfont.woff": "./src/assets/fonts/butler_light-webfont.woff",
		"./butler_light_stencil-webfont.woff": "./src/assets/fonts/butler_light_stencil-webfont.woff",
		"./butler_medium-webfont.woff": "./src/assets/fonts/butler_medium-webfont.woff",
		"./butler_medium_stencil-webfont.woff": "./src/assets/fonts/butler_medium_stencil-webfont.woff",
		"./butler_regular-webfont.woff": "./src/assets/fonts/butler_regular-webfont.woff",
		"./butler_regular_stencil-webfont.woff": "./src/assets/fonts/butler_regular_stencil-webfont.woff",
		"./butler_ultra_light-webfont.woff": "./src/assets/fonts/butler_ultra_light-webfont.woff",
		"./butler_ultra_light_stencil-webfont.woff": "./src/assets/fonts/butler_ultra_light_stencil-webfont.woff"
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ }),

/***/ "./src/components/Footer.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styled = __webpack_require__("./src/components/styled/index.js");
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Footer = function Footer(props) {
	  return _react2.default.createElement(
	    "footer",
	    null,
	    _react2.default.createElement(
	      _styled.Page,
	      null,
	      _react2.default.createElement(
	        _styled.Row,
	        { height: 5 },
	        "This is a sample footer."
	      )
	    )
	  );
	};
	
	exports.default = Footer;
	module.exports = exports["default"];

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./butler_black-webfont.woff2": "./src/assets/fonts/butler_black-webfont.woff2",
		"./butler_black_stencil-webfont.woff2": "./src/assets/fonts/butler_black_stencil-webfont.woff2",
		"./butler_bold-webfont.woff2": "./src/assets/fonts/butler_bold-webfont.woff2",
		"./butler_bold_stencil-webfont.woff2": "./src/assets/fonts/butler_bold_stencil-webfont.woff2",
		"./butler_extrabold-webfont.woff2": "./src/assets/fonts/butler_extrabold-webfont.woff2",
		"./butler_extrabold_stencil-webfont.woff2": "./src/assets/fonts/butler_extrabold_stencil-webfont.woff2",
		"./butler_light-webfont.woff2": "./src/assets/fonts/butler_light-webfont.woff2",
		"./butler_light_stencil-webfont.woff2": "./src/assets/fonts/butler_light_stencil-webfont.woff2",
		"./butler_medium-webfont.woff2": "./src/assets/fonts/butler_medium-webfont.woff2",
		"./butler_medium_stencil-webfont.woff2": "./src/assets/fonts/butler_medium_stencil-webfont.woff2",
		"./butler_regular-webfont.woff2": "./src/assets/fonts/butler_regular-webfont.woff2",
		"./butler_regular_stencil-webfont.woff2": "./src/assets/fonts/butler_regular_stencil-webfont.woff2",
		"./butler_ultra_light-webfont.woff2": "./src/assets/fonts/butler_ultra_light-webfont.woff2",
		"./butler_ultra_light_stencil-webfont.woff2": "./src/assets/fonts/butler_ultra_light_stencil-webfont.woff2"
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 2;


/***/ }),

/***/ "./src/components/Header.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _gatsbyLink = __webpack_require__("./node_modules/gatsby-link/index.js");
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _styled = __webpack_require__("./src/components/styled/index.js");
	
	var _styled2 = __webpack_require__("./src/components/styled/index.js");
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Header = function Header(_ref) {
	  var title = _ref.title,
	      subtitle = _ref.subtitle,
	      pages = _ref.pages;
	  return (
	    // TODO : Sort order of menu based on field menu_order
	    _react2.default.createElement(
	      _styled2.Page,
	      null,
	      _react2.default.createElement(
	        _styled2.Row,
	        null,
	        _react2.default.createElement(
	          _styled.H3,
	          null,
	          title
	        )
	      ),
	      _react2.default.createElement(
	        _styled2.Row,
	        null,
	        _react2.default.createElement(
	          _styled.H4,
	          null,
	          subtitle
	        )
	      ),
	      _react2.default.createElement(
	        _styled2.Row,
	        null,
	        _react2.default.createElement(
	          _styled2.Column,
	          { fluid: true, xs: 1, sm: 10, md: 10, lg: 10 },
	          _react2.default.createElement(
	            "span",
	            null,
	            _react2.default.createElement(
	              _gatsbyLink2.default,
	              { to: "/" },
	              "Home"
	            ),
	            " -",
	            " "
	          ),
	          pages.edges.map(function (p, i) {
	            if (p.node.slug == "blog") return;
	            if (p.node.slug == "home") return;
	            return _react2.default.createElement(
	              "span",
	              { key: p.node.id },
	              i !== 0 ? " - " : "",
	              _react2.default.createElement(
	                _gatsbyLink2.default,
	                { to: "/" + p.node.slug },
	                unescape(p.node.title)
	              )
	            );
	          })
	        ),
	        _react2.default.createElement("hr", null)
	      )
	    )
	  );
	};
	
	Header.propTypes = {
	  title: _propTypes2.default.string,
	  pages: _propTypes2.default.object.isRequired
	};
	
	exports.default = Header;
	module.exports = exports["default"];

/***/ }),

/***/ "./src/components/PostPreview.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(["width: 100%;"], ["width: 100%;"]);
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _styled = __webpack_require__("./src/components/styled/index.js");
	
	var _styledComponents = __webpack_require__("./node_modules/styled-components/lib/index.js");
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _theme = __webpack_require__("./src/components/styled/theme.js");
	
	var _theme2 = _interopRequireDefault(_theme);
	
	var _striptags = __webpack_require__("./node_modules/striptags/src/striptags.js");
	
	var _striptags2 = _interopRequireDefault(_striptags);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var BlogPreviewImg = _styledComponents2.default.img(_templateObject);
	
	var PostPreview = function PostPreview(_ref) {
	  var article = _ref.article,
	      id = _ref.id;
	
	  console.log("article is", article);
	  return _react2.default.createElement(
	    _styled.Column,
	    { outline: true, fluid: true, xs: 4, sm: 4, md: 4, lg: 4 },
	    _react2.default.createElement(
	      _styled.BlockLink,
	      {
	        to: "/post/" + id,
	        paddingHorizontal: 2,
	        paddingTop: 2,
	        paddingBottom: 5,
	        block: true
	      },
	      _react2.default.createElement(BlogPreviewImg, {
	        src: "http://via.placeholder.com/416x245",
	        alt: "placeholder"
	      }),
	      _react2.default.createElement(_styled.P2, {
	        color: _theme2.default.color.han,
	        dangerouslySetInnerHTML: { __html: article.node.title }
	      }),
	      _react2.default.createElement(_styled.P4, {
	        color: _theme2.default.color.han,
	        dangerouslySetInnerHTML: { __html: (0, _striptags2.default)(article.node.excerpt) }
	      }),
	      _react2.default.createElement(
	        _styled.P4,
	        { color: _theme2.default.color.link },
	        "Read More"
	      )
	    )
	  );
	};
	
	PostPreview.propType = {
	  article: _propTypes2.default.object.isRequired,
	  id: _propTypes2.default.string
	};
	
	exports.default = PostPreview;
	module.exports = exports["default"];

/***/ }),

/***/ "./src/components/PostsListSearchable.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _styled = __webpack_require__("./src/components/styled/index.js");
	
	var _PostPreview = __webpack_require__("./src/components/PostPreview.js");
	
	var _PostPreview2 = _interopRequireDefault(_PostPreview);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PostsListSearchable = function (_Component) {
	  _inherits(PostsListSearchable, _Component);
	
	  // Put the props in the state
	  function PostsListSearchable(props) {
	    _classCallCheck(this, PostsListSearchable);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.handleFilter = function (id) {
	      _this.setState({
	        data: _this.props.propsData.allWordpressPost.edges.filter(function (p) {
	          return p.node.categories.includes(parseInt(id.replace("CATEGORY_", "")));
	        })
	      });
	    };
	
	    _this.resetFilter = function () {
	      return _this.setState({ data: _this.props.propsData.allWordpressPost.edges });
	    };
	
	    _this.state = {
	      data: _this.props.propsData.allWordpressPost.edges
	    };
	    return _this;
	  }
	
	  PostsListSearchable.prototype.render = function render() {
	    var _this2 = this;
	
	    return _react2.default.createElement(
	      _styled.Page,
	      null,
	      _react2.default.createElement(
	        _styled.H3,
	        null,
	        "The latests blog posts"
	      ),
	      _react2.default.createElement(
	        _styled.Row,
	        { gutter: true, gutterWhite: true },
	        _react2.default.createElement(
	          _styled.Column,
	          { fluid: true, xs: 1, sm: 10, md: 10, lg: 10 },
	          _react2.default.createElement(
	            "span",
	            null,
	            "Filter by category: "
	          ),
	          _react2.default.createElement(
	            "span",
	            { onClick: function onClick() {
	                return _this2.resetFilter();
	              } },
	            "All - "
	          ),
	          this.props.propsData.allWordpressCategory.edges.map(function (cat, i) {
	            return _react2.default.createElement(
	              "span",
	              {
	                key: cat.node.id,
	                onClick: function onClick() {
	                  return _this2.handleFilter(cat.node.id);
	                }
	              },
	              i !== 0 ? " - " : "",
	              cat.node.name
	            );
	          }),
	          _react2.default.createElement(
	            "span",
	            { onClick: function onClick() {
	                return _this2.resetFilter();
	              } },
	            " - Reset filter"
	          )
	        )
	      ),
	      _react2.default.createElement(
	        _styled.Row,
	        { gutter: true },
	        this.state.data.map(function (article) {
	          return _react2.default.createElement(_PostPreview2.default, {
	            key: article.node.slug,
	            id: article.node.slug,
	            article: article
	          });
	        })
	      ),
	      _react2.default.createElement(_styled.Row, { gutter: true, height: 19 })
	    );
	  };
	
	  return PostsListSearchable;
	}(_react.Component);
	
	PostsListSearchable.propTypes = {
	  propsData: _propTypes2.default.object.isRequired
	};
	
	exports.default = PostsListSearchable;
	module.exports = exports["default"];

/***/ }),

/***/ "./src/components/styled/index.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.Div = exports.BlockLink = exports.StyledLink = exports.DefaultLink = exports.P5 = exports.P4 = exports.P3 = exports.P2 = exports.P1 = exports.H7 = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.Column = exports.Row = exports.Page = undefined;
	
	var _templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  ", "\n  body {\n    font-family: 'butler', sans-serif;\n    margin: 0;\n    background-color: ", ";\n  }\n"], ["\n  ", "\n  ", "\n  ", "\n  body {\n    font-family: 'butler', sans-serif;\n    margin: 0;\n    background-color: ", ";\n  }\n"]),
	    _templateObject2 = _taggedTemplateLiteralLoose(["\n  ", " ", " ", ";\n"], ["\n  ", " ", " ", ";\n"]),
	    _templateObject3 = _taggedTemplateLiteralLoose(["\n  ", " ", " text-decoration: ", ";\n  &:hover {\n    ", " ", ";\n  }\n"], ["\n  ", " ", " text-decoration: ", ";\n  &:hover {\n    ", " ", ";\n  }\n"]),
	    _templateObject4 = _taggedTemplateLiteralLoose(["", ";"], ["", ";"]),
	    _templateObject5 = _taggedTemplateLiteralLoose(["\n  ", " display: block;\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  ", " display: block;\n  &:hover {\n    background-color: ", ";\n  }\n"]),
	    _templateObject6 = _taggedTemplateLiteralLoose(["\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n"]);
	
	var _layout = __webpack_require__("./src/components/styled/layout.js");
	
	Object.defineProperty(exports, "Page", {
	  enumerable: true,
	  get: function get() {
	    return _layout.Page;
	  }
	});
	Object.defineProperty(exports, "Row", {
	  enumerable: true,
	  get: function get() {
	    return _layout.Row;
	  }
	});
	Object.defineProperty(exports, "Column", {
	  enumerable: true,
	  get: function get() {
	    return _layout.Column;
	  }
	});
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__("./node_modules/styled-components/lib/index.js");
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _gatsbyLink = __webpack_require__("./node_modules/gatsby-link/index.js");
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _propReceivers = __webpack_require__("./src/components/styled/propReceivers.js");
	
	var PR = _interopRequireWildcard(_propReceivers);
	
	var _theme = __webpack_require__("./src/components/styled/theme.js");
	
	var _theme2 = _interopRequireDefault(_theme);
	
	var _fontFaceHelper = __webpack_require__("./src/utils/fontFaceHelper.js");
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var ftz = _theme2.default.ftz,
	    color = _theme2.default.color;
	
	/* Global Styles */
	
	(0, _styledComponents.injectGlobal)(_templateObject, (0, _fontFaceHelper.fontFaceHelper)("butler", "butler_black-webfont"), (0, _fontFaceHelper.fontFaceHelper)("butler", "butler_black_stencil-webfont", "normal"), (0, _fontFaceHelper.fontFaceHelper)("butler", "butler_regular-webfont"), color.lightGray);
	
	/* Global Tags */
	var H1 = exports.H1 = _styledComponents2.default.h1(_templateObject2, function (props) {
	  return PR.ftzProps(props, ftz.h1);
	}, function (props) {
	  return PR.colorProps(props);
	}, PR.marginProps);
	var H2 = exports.H2 = _styledComponents2.default.h2(_templateObject2, function (props) {
	  return PR.ftzProps(props, ftz.h2);
	}, function (props) {
	  return PR.colorProps(props);
	}, PR.marginProps);
	var H3 = exports.H3 = _styledComponents2.default.h3(_templateObject2, function (props) {
	  return PR.ftzProps(props, ftz.h3);
	}, function (props) {
	  return PR.colorProps(props);
	}, PR.marginProps);
	var H4 = exports.H4 = _styledComponents2.default.h4(_templateObject2, function (props) {
	  return PR.ftzProps(props, ftz.h4);
	}, function (props) {
	  return PR.colorProps(props);
	}, PR.marginProps);
	var H5 = exports.H5 = _styledComponents2.default.h5(_templateObject2, function (props) {
	  return PR.ftzProps(props, ftz.h5);
	}, function (props) {
	  return PR.colorProps(props);
	}, PR.marginProps);
	var H6 = exports.H6 = _styledComponents2.default.h6(_templateObject2, function (props) {
	  return PR.ftzProps(props, ftz.h6);
	}, function (props) {
	  return PR.colorProps(props);
	}, PR.marginProps);
	var H7 = exports.H7 = _styledComponents2.default.h6(_templateObject2, function (props) {
	  return PR.ftzProps(props, ftz.h6);
	}, function (props) {
	  return PR.colorProps(props);
	}, PR.marginProps);
	var P1 = exports.P1 = _styledComponents2.default.p(_templateObject2, function (props) {
	  return PR.ftzProps(props, ftz.p1);
	}, function (props) {
	  return PR.colorProps(props);
	}, PR.marginProps);
	var P2 = exports.P2 = _styledComponents2.default.p(_templateObject2, function (props) {
	  return PR.ftzProps(props, ftz.p2);
	}, function (props) {
	  return PR.colorProps(props);
	}, PR.marginProps);
	var P3 = exports.P3 = _styledComponents2.default.p(_templateObject2, function (props) {
	  return PR.ftzProps(props, ftz.p3);
	}, function (props) {
	  return PR.colorProps(props);
	}, PR.marginProps);
	var P4 = exports.P4 = _styledComponents2.default.p(_templateObject2, function (props) {
	  return PR.ftzProps(props, ftz.p4);
	}, function (props) {
	  return PR.colorProps(props);
	}, PR.marginProps);
	var P5 = exports.P5 = _styledComponents2.default.p(_templateObject2, function (props) {
	  return PR.ftzProps(props, ftz.p5);
	}, function (props) {
	  return PR.colorProps(props);
	}, PR.marginProps);
	
	/* Links */
	var DefaultLink = (0, _styledComponents2.default)(function (_ref) {
	  var h1 = _ref.h1,
	      h2 = _ref.h2,
	      h3 = _ref.h3,
	      h4 = _ref.h4,
	      h5 = _ref.h5,
	      h6 = _ref.h6,
	      h7 = _ref.h7,
	      p1 = _ref.p1,
	      p2 = _ref.p2,
	      p3 = _ref.p3,
	      p4 = _ref.p4,
	      p5 = _ref.p5,
	      ftz = _ref.ftz,
	      marginBottom = _ref.marginBottom,
	      marginTop = _ref.marginTop,
	      marginLeft = _ref.marginLeft,
	      marginRight = _ref.marginRight,
	      margin = _ref.margin,
	      marginVertical = _ref.marginVertical,
	      marginHorizontal = _ref.marginHorizontal,
	      paddingBottom = _ref.paddingBottom,
	      paddingTop = _ref.paddingTop,
	      paddingLeft = _ref.paddingLeft,
	      paddingRight = _ref.paddingRight,
	      padding = _ref.padding,
	      paddingVertical = _ref.paddingVertical,
	      paddingHorizontal = _ref.paddingHorizontal,
	      color = _ref.color,
	      colorHover = _ref.colorHover,
	      underline = _ref.underline,
	      block = _ref.block,
	      rest = _objectWithoutProperties(_ref, ["h1", "h2", "h3", "h4", "h5", "h6", "h7", "p1", "p2", "p3", "p4", "p5", "ftz", "marginBottom", "marginTop", "marginLeft", "marginRight", "margin", "marginVertical", "marginHorizontal", "paddingBottom", "paddingTop", "paddingLeft", "paddingRight", "padding", "paddingVertical", "paddingHorizontal", "color", "colorHover", "underline", "block"]);
	
	  return _react2.default.createElement(_gatsbyLink2.default, rest);
	})(_templateObject3, function (props) {
	  return PR.ftzProps(props);
	}, function (props) {
	  return PR.colorProps(props, color.link);
	}, function (props) {
	  return props.underline ? "underline" : "none";
	}, function (props) {
	  return PR.colorHoverProps(props, "blue");
	}, function (props) {
	  return props.block && typeof props.block === "boolean" && "background-color: " + color.white;
	});
	
	exports.DefaultLink = DefaultLink;
	var StyledLink = exports.StyledLink = DefaultLink.extend(_templateObject4, PR.marginProps);
	
	var BlockLink = exports.BlockLink = DefaultLink.extend(_templateObject5, PR.paddingProps, color.white);
	
	var Div = exports.Div = _styledComponents2.default.footer(_templateObject6, PR.backgroundProps, PR.heightProps);

/***/ }),

/***/ "./src/components/styled/layout.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.Column = exports.Row = exports.gutter = exports.RowHedron = exports.Page = exports.media = undefined;
	
	var _templateObject = _taggedTemplateLiteralLoose(["\n    @media (max-width: ", "em) {\n      ", ";\n    }\n  "], ["\n    @media (max-width: ", "em) {\n      ", ";\n    }\n  "]),
	    _templateObject2 = _taggedTemplateLiteralLoose(["\n  ", ";\n"], ["\n  ", ";\n"]),
	    _templateObject3 = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  ", " ", " ", " ", " ", ";\n"], ["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  ", " ", " ", " ", " ", ";\n"]),
	    _templateObject4 = _taggedTemplateLiteralLoose(["\n  padding-right: 40px;\n  padding-left: 40px;\n  ", ";\n"], ["\n  padding-right: 40px;\n  padding-left: 40px;\n  ", ";\n"]),
	    _templateObject5 = _taggedTemplateLiteralLoose(["\n    padding-right: 15px;\n    padding-left: 15px;\n  "], ["\n    padding-right: 15px;\n    padding-left: 15px;\n  "]),
	    _templateObject6 = _taggedTemplateLiteralLoose(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"]),
	    _templateObject7 = _taggedTemplateLiteralLoose(["\n      background-color: ", ";\n    "], ["\n      background-color: ", ";\n    "]),
	    _templateObject8 = _taggedTemplateLiteralLoose(["\n  display: block;\n  ", " box-sizing: border-box;\n  padding: 0;\n  width: 100%;\n  ", " ", " ", " ", " ", ";\n"], ["\n  display: block;\n  ", " box-sizing: border-box;\n  padding: 0;\n  width: 100%;\n  ", " ", " ", " ", " ", ";\n"]);
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__("./node_modules/styled-components/lib/index.js");
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _hedron = __webpack_require__("./src/utils/hedron.js");
	
	var _propReceivers = __webpack_require__("./src/components/styled/propReceivers.js");
	
	var PR = _interopRequireWildcard(_propReceivers);
	
	var _hedron2 = __webpack_require__("./node_modules/hedron/dist/hedron.js");
	
	var _theme = __webpack_require__("./src/components/styled/theme.js");
	
	var _theme2 = _interopRequireDefault(_theme);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var sizes = _theme2.default.sizes,
	    color = _theme2.default.color;
	
	/*
	 * Media Queries
	 * xs: < 450
	 * sm: < 692
	 * md: < 991
	 * lg: 992 and beyound 
	 */
	
	// const media = {
	//   tablet: (...args) => css`
	//     @media (min-width: 420px) {
	//       ${ css(...args) }
	//     }
	//   `
	// }
	
	// Iterate through the sizes and create a media template
	
	var media = exports.media = Object.keys(sizes).reduce(function (acc, label) {
	  acc[label] = function () {
	    return (0, _styledComponents.css)(_templateObject, sizes[label] / 16, _styledComponents.css.apply(undefined, arguments));
	  };
	  return acc;
	}, {});
	
	/*
	 * Grid
	 */
	var Page = exports.Page = (0, _styledComponents2.default)(_hedron2.Page)(_templateObject2, function (props) {
	  return props.fluid ? "width: 100%;" : "\n    margin: 0 auto;\n    max-width: 100%;\n    " + (props.width ? "width: " + props.width + ";" : "width: " + sizes.max + ";") + "\n    ";
	});
	
	var RowHedron = exports.RowHedron = (0, _styledComponents2.default)(_hedron2.Row)(_templateObject3, (0, _hedron.ifDefined)("alignContent", "align-content"), (0, _hedron.ifDefined)("alignItems", "align-items"), (0, _hedron.ifDefined)("alignSelf", "align-self"), (0, _hedron.ifDefined)("justifyContent", "justify-content"), (0, _hedron.ifDefined)("order"));
	
	var gutter = exports.gutter = function gutter(props) {
	  return (0, _styledComponents.css)(_templateObject4, media.sm(_templateObject5));
	};
	
	var Row = (0, _styledComponents2.default)(function (_ref) {
	  var gutter = _ref.gutter,
	      gutterWhite = _ref.gutterWhite,
	      height = _ref.height,
	      borderBottom = _ref.borderBottom,
	      borderTop = _ref.borderTop,
	      borderLeft = _ref.borderLeft,
	      borderRight = _ref.borderRight,
	      outline = _ref.outline,
	      rest = _objectWithoutProperties(_ref, ["gutter", "gutterWhite", "height", "borderBottom", "borderTop", "borderLeft", "borderRight", "outline"]);
	
	  return _react2.default.createElement(RowHedron, rest);
	})(_templateObject6, function (props) {
	  return props.gutter && gutter;
	}, function (props) {
	  return (0, _styledComponents.css)(_templateObject7, props.gutterWhite ? color.white : color.lightGray);
	}, PR.heightProps, PR.borderProps, PR.outlineProps);
	
	exports.Row = Row;
	var Column = (0, _styledComponents2.default)(function (_ref2) {
	  var outline = _ref2.outline,
	      rest = _objectWithoutProperties(_ref2, ["outline"]);
	
	  return _react2.default.createElement(_hedron2.Column, rest);
	})(_templateObject8, function (props) {
	  return props.debug ? "background-color: rgba(50, 50, 255, .1);\n  outline: 1px solid #fff;" : "";
	}, (0, _hedron.compute)("xs"), (0, _hedron.compute)("sm"), (0, _hedron.compute)("md"), (0, _hedron.compute)("lg"), PR.outlineProps);
	exports.Column = Column;

/***/ }),

/***/ "./src/components/styled/propReceivers.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.outlineProps = exports.heightProps = exports.backgroundProps = exports.borderProps = exports.paddingProps = exports.paddingPropsVar = exports.marginProps = exports.marginPropsVar = exports.colorHoverProps = exports.colorProps = exports.ftzProps = exports.ftzPropsVar = undefined;
	
	var _templateObject = _taggedTemplateLiteralLoose(["\n      font-size: ", ";\n    "], ["\n      font-size: ", ";\n    "]),
	    _templateObject2 = _taggedTemplateLiteralLoose(["\n  color: ", ";\n"], ["\n  color: ", ";\n"]),
	    _templateObject3 = _taggedTemplateLiteralLoose(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"]),
	    _templateObject4 = _taggedTemplateLiteralLoose(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"]),
	    _templateObject5 = _taggedTemplateLiteralLoose(["\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n  ", ";\n"]),
	    _templateObject6 = _taggedTemplateLiteralLoose(["\n  ", ";\n"], ["\n  ", ";\n"]);
	
	var _styledComponents = __webpack_require__("./node_modules/styled-components/lib/index.js");
	
	var _theme = __webpack_require__("./src/components/styled/theme.js");
	
	var _theme2 = _interopRequireDefault(_theme);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var ftz = _theme2.default.ftz,
	    color = _theme2.default.color,
	    goldenRatio = _theme2.default.goldenRatio;
	
	// FONT SIZES
	
	var ftzMap = function ftzMap(p) {
	  if (p.h1) {
	    return (0, _styledComponents.css)(_templateObject, ftz.h1);
	  }
	  if (p.h2) {
	    return (0, _styledComponents.css)(_templateObject, ftz.h2);
	  }
	  if (p.h3) {
	    return (0, _styledComponents.css)(_templateObject, ftz.h3);
	  }
	  if (p.h4) {
	    return (0, _styledComponents.css)(_templateObject, ftz.h4);
	  }
	  if (p.h5) {
	    return (0, _styledComponents.css)(_templateObject, ftz.h5);
	  }
	  if (p.h6) {
	    return (0, _styledComponents.css)(_templateObject, ftz.h6);
	  }
	  if (p.h7) {
	    return (0, _styledComponents.css)(_templateObject, ftz.h7);
	  }
	  if (p.p1) {
	    return (0, _styledComponents.css)(_templateObject, ftz.p1);
	  }
	  if (p.p2) {
	    return (0, _styledComponents.css)(_templateObject, ftz.p2);
	  }
	  if (p.p3) {
	    return (0, _styledComponents.css)(_templateObject, ftz.p3);
	  }
	  if (p.p4) {
	    return (0, _styledComponents.css)(_templateObject, ftz.p4);
	  }
	  if (p.p5) {
	    return (0, _styledComponents.css)(_templateObject, ftz.p5);
	  }
	};
	var ftzPropsVar = exports.ftzPropsVar = {
	  h1: "h1",
	  h2: "h2",
	  h3: "h3",
	  h4: "h4",
	  h5: "h5",
	  h6: "h6",
	  h7: "h7",
	  p1: "p1",
	  p2: "p2",
	  p3: "p3",
	  p4: "p4",
	  p5: "p5",
	  ftz: "ftz"
	};
	var ftzProps = exports.ftzProps = function ftzProps(props) {
	  var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "inherit";
	
	  if (props.h1 || props.h2 || props.h3 || props.h4 || props.h5 || props.h6 || props.h7 || props.p1 || props.p2 || props.p3 || props.p4 || props.p5) {
	    return ftzMap(props);
	  } else if (props.ftz) {
	    return (0, _styledComponents.css)(_templateObject, props.ftz);
	  } else {
	    return (0, _styledComponents.css)(_templateObject, def);
	  }
	};
	
	// COLOR
	var colorProps = exports.colorProps = function colorProps(props) {
	  var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "inherit";
	  return (0, _styledComponents.css)(_templateObject2, props.color && typeof (props.color === "string") ? props.color : def);
	};
	var colorHoverProps = exports.colorHoverProps = function colorHoverProps(props) {
	  var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "inherit";
	  return (0, _styledComponents.css)(_templateObject2, props.colorHover && typeof (props.colorHover === "string") ? props.colorHover : def);
	};
	
	// MARGIN
	var marginPropsVar = exports.marginPropsVar = {
	  marginBottom: "marginBottom",
	  marginTop: "marginTop",
	  marginLeft: "marginLeft",
	  marginRight: "marginRight",
	  margin: "margin",
	  marginVertical: "marginVertical",
	  marginHorizontal: "marginHorizontal"
	};
	var marginProps = exports.marginProps = function marginProps(props) {
	  return (0, _styledComponents.css)(_templateObject3, props.marginBottom && "margin-bottom: " + (typeof props.marginBottom === "string" ? props.marginBottom : props.marginBottom * goldenRatio + "px" || "1em"), props.marginTop && "margin-top: " + (typeof props.marginTop === "string" ? props.marginTop : props.marginTop * goldenRatio + "px" || "1em"), props.marginLeft && "margin-left: " + (typeof props.marginLeft === "string" ? props.marginLeft : props.marginLeft * goldenRatio + "px" || "1em"), props.marginRight && "margin-right: " + (typeof props.marginRight === "string" ? props.marginRight : props.marginRight * goldenRatio + "px" || "1em"), props.margin && "margin: " + (typeof props.margin === "string" ? props.margin : props.margin * goldenRatio + "px" || "1em"), props.marginVertical && "\n    margin-top: " + (typeof props.marginVertical === "string" ? props.marginVertical : props.marginVertical * goldenRatio + "px" || "1em") + ";\n    margin-bottom: " + (typeof props.marginVertical === "string" ? props.marginVertical : props.marginVertical * goldenRatio + "px" || "1em") + ";\n  ", props.marginHorizontal && "\n    margin-left: " + (typeof props.marginHorizontal === "string" ? props.marginHorizontal : props.marginHorizontal * goldenRatio + "px" || "1em") + ";\n    margin-right: " + (typeof props.marginHorizontal === "string" ? props.marginHorizontal : props.marginHorizontal * goldenRatio + "px" || "1em") + ";\n  ");
	};
	
	// PADDING
	var paddingPropsVar = exports.paddingPropsVar = {
	  paddingBottom: "paddingBottom",
	  paddingTop: "paddingTop",
	  paddingLeft: "paddingLeft",
	  paddingRight: "paddingRight",
	  padding: "padding",
	  paddingVertical: "paddingVertical",
	  paddingHorizontal: "paddingHorizontal"
	};
	var paddingProps = exports.paddingProps = function paddingProps(props) {
	  return (0, _styledComponents.css)(_templateObject3, props.paddingBottom && "padding-bottom: " + (typeof props.paddingBottom === "string" ? props.paddingBottom : props.paddingBottom * goldenRatio + "px" || "1em"), props.paddingTop && "padding-top: " + (typeof props.paddingTop === "string" ? props.paddingTop : props.paddingTop * goldenRatio + "px" || "1em"), props.paddingLeft && "padding-left: " + (typeof props.paddingLeft === "string" ? props.paddingLeft : props.paddingLeft * goldenRatio + "px" || "1em"), props.paddingRight && "padding-right: " + (typeof props.paddingRight === "string" ? props.paddingRight : props.paddingRight * goldenRatio + "px" || "1em"), props.padding && "padding: " + (typeof props.padding === "string" ? props.padding : props.padding * goldenRatio + "px" || "1em"), props.paddingVertical && "\n    padding-top: " + (typeof props.paddingVertical === "string" ? props.paddingVertical : props.paddingVertical * goldenRatio + "px" || "1em") + ";\n    padding-bottom: " + (typeof props.paddingVertical === "string" ? props.paddingVertical : props.paddingVertical * goldenRatio + "px" || "1em") + ";\n  ", props.paddingHorizontal && "\n    padding-left: " + (typeof props.paddingHorizontal === "string" ? props.paddingHorizontal : props.paddingHorizontal * goldenRatio + "px" || "1em") + ";\n    padding-right: " + (typeof props.paddingHorizontal === "string" ? props.paddingHorizontal : props.paddingHorizontal * goldenRatio + "px" || "1em") + ";\n  ");
	};
	
	var borderProps = exports.borderProps = function borderProps(props) {
	  return (0, _styledComponents.css)(_templateObject4, props.borderBottom && "border-bottom: " + (props.borderWidth || "1px") + " solid " + color.white, props.borderTop && "border-top: " + (props.borderWidth || "1px") + " solid " + color.white, props.borderLeft && "border-left: " + (props.borderWidth || "1px") + " solid " + color.white, props.borderRight && "border-right: " + (props.borderWidth || "1px") + " solid " + color.white);
	};
	
	var backgroundProps = exports.backgroundProps = function backgroundProps(props) {
	  return (0, _styledComponents.css)(_templateObject5, props.bgWhite && typeof props.bgWhite === "boolean" && "background-color: " + color.white + ";", props.bgGrey && typeof props.bgGrey === "boolean" && "background-color: " + color.gray + ";", props.bgColor && typeof props.bgColor === "string" && "background-color: " + props.bgColor + ";");
	};
	
	var heightProps = exports.heightProps = function heightProps(props) {
	  return (0, _styledComponents.css)(_templateObject6, props.height && typeof props.height === "number" && "height: " + goldenRatio * props.height + "px;");
	};
	
	var outlineProps = exports.outlineProps = function outlineProps(props) {
	  return (0, _styledComponents.css)(_templateObject6, props.outline && typeof props.outline === "boolean" && "outline: 1px solid white");
	};

/***/ }),

/***/ "./src/components/styled/theme.js":
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var theme = exports.theme = {
	  sizes: {
	    lg: 992,
	    md: 768,
	    sm: 450,
	    max: "1200px"
	  },
	  goldenRatio: 7,
	  color: {
	    gray: "#bfbfbf",
	    lightGray: "#efefef",
	    red: "#ac3842",
	    link: "#008caa",
	    white: "#fff",
	    han: "#464646"
	  },
	  ftz: {
	    h1: "77px",
	    h2: "63px",
	    h3: "42px",
	    h4: "28px",
	    h5: "21px",
	    h6: "18px",
	    h7: "14px",
	    p1: "28px",
	    p2: "21px",
	    p3: "18px",
	    p4: "16px",
	    p5: "12px"
	  }
	};
	
	exports.default = theme;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/private/var/www/erulog/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\",\"/private/var/www/erulog/node_modules/babel-plugin-add-module-exports/lib/index.js\",\"/private/var/www/erulog/node_modules/babel-plugin-transform-object-assign/lib/index.js\"],\"presets\":[[\"/private/var/www/erulog/node_modules/babel-preset-env/lib/index.js\",{\"loose\":true,\"uglify\":true,\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"IE >= 9\"]},\"exclude\":[\"transform-regenerator\",\"transform-es2015-typeof-symbol\"]}],\"/private/var/www/erulog/node_modules/babel-preset-stage-0/lib/index.js\",\"/private/var/www/erulog/node_modules/babel-preset-react/lib/index.js\"],\"cacheDirectory\":true}!./src/pages/index.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.pageQuery = undefined;
	
	var _react = __webpack_require__("./node_modules/react/react.js");
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactHelmet = __webpack_require__("./node_modules/react-helmet/lib/Helmet.js");
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _Header = __webpack_require__("./src/components/Header.js");
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Footer = __webpack_require__("./src/components/Footer.js");
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _PostsListSearchable = __webpack_require__("./src/components/PostsListSearchable.js");
	
	var _PostsListSearchable2 = _interopRequireDefault(_PostsListSearchable);
	
	var _styled = __webpack_require__("./src/components/styled/index.js");
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Home = function (_Component) {
	  _inherits(Home, _Component);
	
	  function Home() {
	    _classCallCheck(this, Home);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  Home.prototype.render = function render() {
	    // this.props is where all the data of my site lives: { data, history, location. match... }
	    // much of this if from the router, but data object is where all my api data lives
	
	    var wordpressPages = this.props.data.allWordpressPage;
	    var siteMetadata = this.props.data.site.siteMetadata;
	    var currentPage = this.props.data.wordpressPage;
	
	    return _react2.default.createElement(
	      "div",
	      null,
	      _react2.default.createElement(
	        _styled.Page,
	        null,
	        _react2.default.createElement(
	          _styled.Row,
	          null,
	          _react2.default.createElement(
	            _reactHelmet2.default,
	            null,
	            _react2.default.createElement(
	              "title",
	              null,
	              siteMetadata.title
	            )
	          ),
	          _react2.default.createElement(_Header2.default, {
	            title: siteMetadata.title,
	            subtitle: siteMetadata.subtitle,
	            pages: wordpressPages
	          })
	        ),
	        _react2.default.createElement(
	          _styled.Row,
	          null,
	          _react2.default.createElement(_styled.H1, { dangerouslySetInnerHTML: { __html: currentPage.title } }),
	          _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: currentPage.content } }),
	          _react2.default.createElement(_PostsListSearchable2.default, { propsData: this.props.data })
	        ),
	        _react2.default.createElement(
	          _styled.Row,
	          null,
	          _react2.default.createElement(_Footer2.default, null)
	        )
	      )
	    );
	  };
	
	  return Home;
	}(_react.Component);
	
	exports.default = Home;
	
	
	Home.propTypes = {
	  data: _propTypes2.default.object.isRequired,
	  allWordpressPage: _propTypes2.default.object,
	  edges: _propTypes2.default.array
	
	  // Set here the ID of the home page.
	};var pageQuery = exports.pageQuery = "** extracted graphql fragment **";

/***/ }),

/***/ "./src/utils/fontFaceHelper.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.fontFaceHelper = fontFaceHelper;
	// this function is used to import custom fonts
	function fontFaceHelper(name, src) {
	  var fontWeight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "normal";
	  var fontStyle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "normal";
	
	  return "\n    @font-face{\n      font-family: \"" + name + "\";\n      src: url(" + __webpack_require__(1)("./" + src + ".woff") + ") format(\"woff\"),\n           url(" + __webpack_require__(2)("./" + src + ".woff2") + "#" + name + ") format(\"woff2\");\n\n      font-style: " + fontStyle + ";\n      font-weight: " + fontWeight + ";\n    }\n  ";
	}
	
	//mapping with font-files:
	// Ultra 		    900
	// Black 		    800
	// Heavy 	      700
	// Bold 		    600
	// Medium	      500
	// Book 		    400
	// Light 		    300
	// ExtraLight 	200
	// Thin     	  100
	// Hairline 	  0 ?
	
	//OR
	
	// Ultra 		    1000
	// Black 		    900
	// Heavy 	      800
	// Bold 		    700
	// Medium	      600
	// Book 		    500
	// Light 		    400
	// ExtraLight 	300
	// Thin     	  200
	// Hairline 	  100 ?

/***/ }),

/***/ "./src/utils/hedron.js":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.ifDefined = exports.compute = undefined;
	
	var _utils = __webpack_require__("./node_modules/hedron/lib/utils/index.js");
	
	var compute = exports.compute = function compute(name) {
	  return (0, _utils.breakpoint)(name, function (props, name) {
	    return function (divisions, size, shift) {
	      return "\n     " + (size ? "width: " + (0, _utils.divvy)(divisions, size) + "%;" : "") + "\n     " + (shift ? "margin-left: " + (0, _utils.divvy)(divisions, shift) + "%;" : "") + "\n     ";
	    }(props.divisions, props[name], props[name + "Shift"]);
	  });
	};
	
	var ifDefined = exports.ifDefined = function ifDefined(prop) {
	  var css = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : prop;
	  return function (props) {
	    return props[prop] ? css + ": " + props[prop] : "";
	  };
	};

/***/ })

});
//# sourceMappingURL=component---src-pages-index-js-2a87a62b90c04b236ba8.js.map