module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2257":
/***/ (function(module, exports) {

/*!
 * ====================================================
 * kity - v2.0.4 - 2016-08-22
 * https://github.com/fex-team/kity
 * GitHub: https://github.com/fex-team/kity.git 
 * Copyright (c) 2016 Baidu FEX; Licensed BSD
 * ====================================================
 */

(function () {
var _p = {
    r: function(index) {
        if (_p[index].inited) {
            return _p[index].value;
        }
        if (typeof _p[index].value === "function") {
            var module = {
                exports: {}
            }, returnValue = _p[index].value(null, module.exports, module);
            _p[index].inited = true;
            _p[index].value = returnValue;
            if (returnValue !== undefined) {
                return returnValue;
            } else {
                for (var key in module.exports) {
                    if (module.exports.hasOwnProperty(key)) {
                        _p[index].inited = true;
                        _p[index].value = module.exports;
                        return module.exports;
                    }
                }
            }
        } else {
            _p[index].inited = true;
            return _p[index].value;
        }
    }
};

//src/animate/animator.js
/**
 * @fileOverview
 *
 * 提供基本的动画支持
 */
_p[0] = {
    value: function(require) {
        function parseTime(str) {
            var value = parseFloat(str, 10);
            if (/ms/.test(str)) {
                return value;
            }
            if (/s/.test(str)) {
                return value * 1e3;
            }
            if (/min/.test(str)) {
                return value * 60 * 1e3;
            }
            return value;
        }
        var Timeline = _p.r(8);
        var easingTable = _p.r(1);
        /**
     * @class kity.Animator
     * @catalog animate
     * @description 表示一个动画启动器，可以作用于不同的对象进行动画
     */
        var Animator = _p.r(11).createClass("Animator", {
            /**
         * @constructor
         * @for kity.Animator
         * @catalog animate
         *
         * @grammar new kity.Animator(beginValue, finishValue, setter)
         * @grammar new kity.Animator(option)
         *
         * @param  {any}      beginValue|opt.beginValue
         *     动画的起始值，允许的类型有数字、数组、字面量、kity.Point、kity.Vector、kity.Box、kity.Matrix
         *
         * @param  {any}      finishValue|opt.beginValue
         *     动画的结束值，类型应于起始值相同
         *
         * @param  {Function} setter|opt.setter
         *     值的使用函数，接受三个参数: function(target, value, timeline)
         *         target   {object}        动画的目标
         *         value    {any}           动画的当前值
         *         timeline {kity.Timeline} 动画当前的时间线对象
         */
            constructor: function(beginValue, finishValue, setter) {
                if (arguments.length == 1) {
                    var opt = arguments[0];
                    this.beginValue = opt.beginValue;
                    this.finishValue = opt.finishValue;
                    this.setter = opt.setter;
                } else {
                    this.beginValue = beginValue;
                    this.finishValue = finishValue;
                    this.setter = setter;
                }
            },
            /**
         * @method start()
         * @for kity.Animator
         * @description 使用当前的动画器启动在指定目标上启动动画
         *
         * @grammar start(target, duration, easing, delay, callback) => {kity.Timeline}
         * @grammar start(target, option) => {kity.Timeline}
         *
         * @param  {object} target
         *     启动动画的目标
         *
         * @param  {Number|String} duration|option.duration
         *     [Optional] 动画的持续时间，如 300、"300ms"、"1.5min"
         *
         * @param  {String|Function} easing|option.easing
         *     [Optional] 动画使用的缓动函数，如 "ease"、"linear"、"swing"
         *
         * @param  {Number|String} delay|option.delay
         *     [Optional] 动画的播放延迟时间
         *
         * @param  {Function} callback|option.callback
         *     [Optional] 动画结束后的回调函数
         *
         * @example
         *
         * ```js
         * var turnRed = new kity.Animator(
         *     new kity.Color('yellow'),
         *     new kity.Color('red'),
         *     function(target, value) {
         *         target.fill(value);
         *     });
         *
         * turnRed.start(rect, 300, 'ease', function() {
         *     console.log('I am red!');
         * });
         * ```
         */
            start: function(target, duration, easing, delay, callback) {
                if (arguments.length === 2 && typeof duration == "object") {
                    easing = duration.easing;
                    delay = duration.delay;
                    callback = duration.callback;
                    duration = duration.duration;
                }
                if (arguments.length === 4 && typeof delay == "function") {
                    callback = delay;
                    delay = 0;
                }
                var timeline = this.create(target, duration, easing, callback);
                delay = parseTime(delay);
                if (delay > 0) {
                    setTimeout(function() {
                        timeline.play();
                    }, delay);
                } else {
                    timeline.play();
                }
                return timeline;
            },
            /**
         * @method create()
         * @for kity.Animator
         * @description 使用当前的动画器为指定目标创建时间线
         *
         * @grammar create(target, duration, easing, callback) => {kity.Timeline}
         *
         * @param  {object}            target   要创建的时间线的目标
         * @param  {Number|String}     duration 要创建的时间线的长度，如 300、"5s"、"0.5min"
         * @param  {String|Function}   easing   要创建的时间线的缓动函数，如 'ease'、'linear'、'swing'
         * @param  {Function}          callback 时间线播放结束之后的回调函数
         *
         * @example
         *
         * ```js
         * var expand = new kity.Animator({
         *     beginValue: function(target) {
         *         return target.getBox();
         *     },
         *     finishValue: function(target) {
         *         return target.getBox().expand(100, 100, 100, 100);
         *     },
         *     setter: function(target, value) {
         *         target.setBox(value)
         *     }
         * });
         *
         * var timeline = expand.create(rect, 300);
         * timeline.repeat(3).play();
         * ```
         */
            create: function(target, duration, easing, callback) {
                var timeline;
                duration = duration && parseTime(duration) || Animator.DEFAULT_DURATION;
                easing = easing || Animator.DEFAULT_EASING;
                if (typeof easing == "string") {
                    easing = easingTable[easing];
                }
                timeline = new Timeline(this, target, duration, easing);
                if (typeof callback == "function") {
                    timeline.on("finish", callback);
                }
                return timeline;
            },
            /**
         * @method reverse()
         * @for kity.Animator
         * @grammar reverse() => {kity.Animator}
         * @description 创建一个与当前动画器相反的动画器
         *
         * @example
         *
         * ```js
         * var turnYellow = turnRed.reverse();
         * ```
         */
            reverse: function() {
                return new Animator(this.finishValue, this.beginValue, this.setter);
            }
        });
        Animator.DEFAULT_DURATION = 300;
        Animator.DEFAULT_EASING = "linear";
        var Shape = _p.r(61);
        _p.r(11).extendClass(Shape, {
            /**
         * @method animate()
         * @for kity.Shape
         * @description 在图形上播放使用指定的动画器播放动画，如果图形当前有动画正在播放，则会加入播放队列
         *
         * @grammar animate(animator, duration, easing, delay, callback)
         *
         * @param  {object}            animator 播放动画使用的动画器
         * @param  {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param  {Number|String}     delay    动画播放前的延时
         * @param  {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param  {Function}          callback 播放结束之后的回调函数
         *
         * @example
         *
         * ```js
         * rect.animate(turnRed, 300); // turnRect 是一个动画器
         * rect.animate(expand, 500);  // turnRect 播放结束后播放 expand
         * ```
         */
            animate: function(animator, duration, easing, delay, callback) {
                var queue = this._KityAnimateQueue = this._KityAnimateQueue || [];
                var timeline = animator.create(this, duration, easing, callback);
                function dequeue() {
                    queue.shift();
                    if (queue.length) {
                        setTimeout(queue[0].t.play.bind(queue[0].t), queue[0].d);
                    }
                }
                timeline.on("finish", dequeue);
                queue.push({
                    t: timeline,
                    d: delay
                });
                if (queue.length == 1) {
                    setTimeout(timeline.play.bind(timeline), delay);
                }
                return this;
            },
            /**
         * @method timeline()
         * @for kity.Shape
         * @description 获得当前正在播放的动画的时间线
         *
         * @grammar timeline() => {kity.Timeline}
         *
         * @example
         *
         * ```js
         * rect.timeline().repeat(2);
         * ```
         */
            timeline: function() {
                return this._KityAnimateQueue[0].t;
            },
            /**
         * @method stop()
         * @for kity.Shape
         * @description 停止当前正在播放的动画
         *
         * @grammar stop() => {this}
         *
         * @example
         *
         * ```js
         * rect.stop(); // 停止 rect 上的动画
         * ```
         */
            stop: function() {
                var queue = this._KityAnimateQueue;
                if (queue) {
                    while (queue.length) {
                        queue.shift().t.stop();
                    }
                }
                return this;
            }
        });
        return Animator;
    }
};

//src/animate/easing.js
/**
 * Kity Animate Easing modified from jQuery Easing
 * Author: techird
 * Changes:
 *     1. make easing functions standalone
 *     2. remove the 'x' parameter
 */
/* ============================================================
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/danro/jquery-easing/master/LICENSE
 * ======================================================== */
_p[1] = {
    value: function(require, exports, module) {
        var easings = {
            // t: current_time, b: begin_value, c: change_value, d: duration
            linear: function(t, b, c, d) {
                return c * (t / d) + b;
            },
            swing: function(t, b, c, d) {
                return easings.easeOutQuad(t, b, c, d);
            },
            ease: function(t, b, c, d) {
                return easings.easeInOutCubic(t, b, c, d);
            },
            easeInQuad: function(t, b, c, d) {
                return c * (t /= d) * t + b;
            },
            easeOutQuad: function(t, b, c, d) {
                return -c * (t /= d) * (t - 2) + b;
            },
            easeInOutQuad: function(t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t + b;
                return -c / 2 * (--t * (t - 2) - 1) + b;
            },
            easeInCubic: function(t, b, c, d) {
                return c * (t /= d) * t * t + b;
            },
            easeOutCubic: function(t, b, c, d) {
                return c * ((t = t / d - 1) * t * t + 1) + b;
            },
            easeInOutCubic: function(t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
                return c / 2 * ((t -= 2) * t * t + 2) + b;
            },
            easeInQuart: function(t, b, c, d) {
                return c * (t /= d) * t * t * t + b;
            },
            easeOutQuart: function(t, b, c, d) {
                return -c * ((t = t / d - 1) * t * t * t - 1) + b;
            },
            easeInOutQuart: function(t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
                return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
            },
            easeInQuint: function(t, b, c, d) {
                return c * (t /= d) * t * t * t * t + b;
            },
            easeOutQuint: function(t, b, c, d) {
                return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
            },
            easeInOutQuint: function(t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
                return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
            },
            easeInSine: function(t, b, c, d) {
                return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
            },
            easeOutSine: function(t, b, c, d) {
                return c * Math.sin(t / d * (Math.PI / 2)) + b;
            },
            easeInOutSine: function(t, b, c, d) {
                return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
            },
            easeInExpo: function(t, b, c, d) {
                return t === 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
            },
            easeOutExpo: function(t, b, c, d) {
                return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
            },
            easeInOutExpo: function(t, b, c, d) {
                if (t === 0) return b;
                if (t == d) return b + c;
                if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            },
            easeInCirc: function(t, b, c, d) {
                return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
            },
            easeOutCirc: function(t, b, c, d) {
                return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
            },
            easeInOutCirc: function(t, b, c, d) {
                if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
            },
            easeInElastic: function(t, b, c, d) {
                var s = 1.70158;
                var p = 0;
                var a = c;
                if (t === 0) return b;
                if ((t /= d) == 1) return b + c;
                if (!p) p = d * .3;
                if (a < Math.abs(c)) {
                    a = c;
                    s = p / 4;
                } else s = p / (2 * Math.PI) * Math.asin(c / a);
                return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            },
            easeOutElastic: function(t, b, c, d) {
                var s = 1.70158;
                var p = 0;
                var a = c;
                if (t === 0) return b;
                if ((t /= d) == 1) return b + c;
                if (!p) p = d * .3;
                if (a < Math.abs(c)) {
                    a = c;
                    s = p / 4;
                } else s = p / (2 * Math.PI) * Math.asin(c / a);
                return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
            },
            easeInOutElastic: function(t, b, c, d) {
                var s = 1.70158;
                var p = 0;
                var a = c;
                if (t === 0) return b;
                if ((t /= d / 2) == 2) return b + c;
                if (!p) p = d * (.3 * 1.5);
                if (a < Math.abs(c)) {
                    a = c;
                    var s = p / 4;
                } else var s = p / (2 * Math.PI) * Math.asin(c / a);
                if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
            },
            easeInBack: function(t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                return c * (t /= d) * t * ((s + 1) * t - s) + b;
            },
            easeOutBack: function(t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
            },
            easeInOutBack: function(t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
                return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
            },
            easeInBounce: function(t, b, c, d) {
                return c - easings.easeOutBounce(d - t, 0, c, d) + b;
            },
            easeOutBounce: function(t, b, c, d) {
                if ((t /= d) < 1 / 2.75) {
                    return c * (7.5625 * t * t) + b;
                } else if (t < 2 / 2.75) {
                    return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
                } else if (t < 2.5 / 2.75) {
                    return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
                } else {
                    return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
                }
            },
            easeInOutBounce: function(t, b, c, d) {
                if (t < d / 2) return easings.easeInBounce(t * 2, 0, c, d) * .5 + b;
                return easings.easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
            }
        };
        return easings;
    }
};

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
//src/animate/frame.js
/**
 * @fileOverview
 *
 * 提供动画帧的基本支持
 */
_p[2] = {
    value: function(require, exports) {
        // 原生动画帧方法 polyfill
        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(fn) {
            return setTimeout(fn, 1e3 / 60);
        };
        var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.clearTimeout;
        // 上一个请求的原生动画帧 id
        var frameRequestId;
        // 等待执行的帧动作的集合，这些帧的方法将在下个原生动画帧同步执行
        var pendingFrames = [];
        /**
     * 添加一个帧到等待集合中
     *
     * 如果添加的帧是序列的第一个，至少有一个帧需要被执行，则会请求一个原生动画帧来执行
     */
        function pushFrame(frame) {
            if (pendingFrames.push(frame) === 1) {
                frameRequestId = requestAnimationFrame(executePendingFrames);
            }
        }
        /**
     * 执行所有等待帧
     */
        function executePendingFrames() {
            var frames = pendingFrames;
            pendingFrames = [];
            while (frames.length) {
                executeFrame(frames.pop());
            }
            frameRequestId = 0;
        }
        /**
     * @method kity.requestFrame
     * @catalog animate
     * @grammar kity.requestFrame(action) => {frame}
     * @description 请求一个帧，执行指定的动作。动作回调提供一些有用的信息
     *
     * @param {Function} action
     *
     *     要执行的动作，该动作回调有一个参数 frame，其中：
     *
     *     frame.time {Number}
     *         动作执行时的时间戳（ms）
     *
     *     frame.index {Number}
     *         当前执行的帧的编号（首帧为 0）
     *
     *     frame.dur {Number}
     *         上一帧至当前帧经过的时间，单位 ms
     *
     *     frame.elapsed {Number}
     *         从首帧开始到当前帧经过的时间，单位 ms
     *
     *     frame.action {Number}
     *         指向当前的帧处理函数
     *
     *     frame.next()
     *         表示下一帧继续执行。如果不调用该方法，将不会执行下一帧。
     *
     * @example
     *
     * ```js
     * kity.requestFrame(function(frame) {
     *     console.log('平均帧率:' + frame.elapsed / (frame.index + 1));
     *
     *     // 更新或渲染动作
     *
     *     frame.next(); //继续执行下一帧
     * });
     * ```
     */
        function requestFrame(action) {
            var frame = initFrame(action);
            pushFrame(frame);
            return frame;
        }
        /**
     * @method kity.releaseFrame
     * @catalog animate
     * @grammar kity.releaseFrame(frame)
     * @description 释放一个已经请求过的帧，如果该帧在等待集合里，将移除，下个动画帧不会执行释放的帧
     *
     * @param {frame} frame 使用 kity.requestFrame() 返回的帧
     *
     * @example
     *
     * ```js
     * var frame = kity.requestFrame(function() {....});
     * kity.releaseFrame(frame);
     * ```
     */
        function releaseFrame(frame) {
            var index = pendingFrames.indexOf(frame);
            if (~index) {
                pendingFrames.splice(index, 1);
            }
            if (pendingFrames.length === 0) {
                cancelAnimationFrame(frameRequestId);
            }
        }
        /**
     * 初始化一个帧，主要用于后续计算
     */
        function initFrame(action) {
            var frame = {
                index: 0,
                time: +new Date(),
                elapsed: 0,
                action: action,
                next: function() {
                    pushFrame(frame);
                }
            };
            return frame;
        }
        /**
     * 执行一个帧动作
     */
        function executeFrame(frame) {
            // 当前帧时间错
            var time = +new Date();
            // 当上一帧到当前帧经过的时间
            var dur = time - frame.time;
            //
            // http://stackoverflow.com/questions/13133434/requestanimationframe-detect-stop
            // 浏览器最小化或切换标签，requestAnimationFrame 不会执行。
            // 检测时间超过 200 ms（频率小于 5Hz ） 判定为计时器暂停，重置为一帧长度
            //
            if (dur > 200) {
                dur = 1e3 / 60;
            }
            frame.dur = dur;
            frame.elapsed += dur;
            frame.time = time;
            frame.action.call(null, frame);
            frame.index++;
        }
        // 暴露
        exports.requestFrame = requestFrame;
        exports.releaseFrame = releaseFrame;
    }
};

//src/animate/motionanimator.js
/**
 * @fileOverview
 *
 * 路径动画器，可以让一个物体沿着某个轨迹运动
 */
_p[3] = {
    value: function(require) {
        var Animator = _p.r(0);
        var g = _p.r(35);
        var Path = _p.r(47);
        var Shape = _p.r(61);
        /**
     * @class kity.MotionAnimator
     * @catalog animate
     * @base kity.Animator
     * @description 路径动画器，可以让一个物体沿着某个轨迹运动
     *
     * @example
     *
     * ```js
     * var motionAnimator = new MotionAnimator('M0,0C100,0,100,0,100,100L200,200');
     * motionAnimator.start(rect, 3000);
     * ```
     */
        var MotionAnimator = _p.r(11).createClass("MotionAnimator", {
            base: Animator,
            /**
         * @constructor
         * @for kity.MotionAnimator
         * @grammar new kity.MotionAnimator(path, doRotate)
         * @param {kity.Path|String|PathSegment} path 运动的轨迹，或者是 kity.Path 对象
         * @param {boolean} doRotate 是否让运动的目标沿着路径的切线方向旋转
         */
            constructor: function(path, doRotate) {
                var me = this;
                this.callBase({
                    beginValue: 0,
                    finishValue: 1,
                    setter: function(target, value) {
                        var path = me.motionPath instanceof Path ? me.motionPath.getPathData() : me.motionPath;
                        var point = g.pointAtPath(path, value);
                        target.setTranslate(point.x, point.y);
                        if (this.doRotate) target.setRotate(point.tan.getAngle());
                    }
                });
                /**
             * @property doRotate
             * @for kity.MotionAnimator
             * @type {boolean}
             * @description 是否让运动的目标沿着路径的切线方向旋转
             *
             * @example
             *
             * ```js
             * motionAnimator.doRotate = true; // 目标沿着切线方向旋转
             * ```
             */
                this.doRotate = doRotate;
                /**
             * @property motionPath
             * @for kity.MotionAnimator
             * @type  {kity.Path|String|PathSegment}
             * @description 运动沿着的路径，可以在动画过程中更新
             */
                this.motionPath = path;
            }
        });
        _p.r(11).extendClass(Shape, {
            /**
         * @method motion()
         * @catalog animate
         * @for kity.Shape
         * @description 让图形沿着指定的路径运动
         *
         * @grammar motion(path, duration, easing, delay, callback) => this
         *
         * @param {kity.Path|String|PathSegment} path 运动的轨迹，或者是 kity.Path 对象
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
            motion: function(path, duration, easing, delay, callback) {
                return this.animate(new MotionAnimator(path), duration, easing, delay, callback);
            }
        });
        return MotionAnimator;
    }
};

//src/animate/opacityanimator.js
/**
 * @fileOverview
 *
 * 透明度动画器，让图形动画过度到指定的透明度。
 */
_p[4] = {
    value: function(require) {
        var Animator = _p.r(0);
        /**
     * @class kity.OpacityAnimator
     * @catalog animate
     * @base kity.Animator
     * @description 透明度动画器，让图形动画过度到指定的透明度
     */
        var OpacityAnimator = _p.r(11).createClass("OpacityAnimator", {
            base: Animator,
            /**
         * @constructor
         * @for kity.OpacityAnimator
         * @grammar new kity.OpacityAnimator(opacity)
         *
         * @param  {Number} opacity 目标透明度，取值范围 0 - 1
         */
            constructor: function(opacity) {
                this.callBase({
                    beginValue: function(target) {
                        return target.getOpacity();
                    },
                    finishValue: opacity,
                    setter: function(target, value) {
                        target.setOpacity(value);
                    }
                });
            }
        });
        var Shape = _p.r(61);
        _p.r(11).extendClass(Shape, {
            /**
         * @method fxOpacity()
         * @catalog animate
         * @for kity.Shape
         * @description 让图形的透明度以动画的形式过渡到指定的值
         *
         * @grammar fxOpacity(opacity, duration, easing, delay, callback) => {this}
         *
         * @param {Number}            opacity  动画的目标透明度
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
            fxOpacity: function(opacity, duration, easing, delay, callback) {
                return this.animate(new OpacityAnimator(opacity), duration, easing, delay, callback);
            },
            /**
         * @method fadeTo()
         * @catalog animate
         * @for kity.Shape
         * @description 让图形的透明度以动画的形式过渡到指定的值
         *
         * @grammar fadeTo(opacity, duration, easing, delay, callback) => {this}
         *
         * @param {Number}            opacity  动画的目标透明度
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
            fadeTo: function() {
                return this.fxOpacity.apply(this, arguments);
            },
            /**
         * @method fadeIn()
         * @catalog animate
         * @for kity.Shape
         * @description 让图形淡入
         *
         * @grammar fadeIn(duration, easing, delay, callback) => {this}
         *
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
            fadeIn: function() {
                return this.fxOpacity.apply(this, [ 1 ].concat([].slice.call(arguments)));
            },
            /**
         * @method fadeOut()
         * @catalog animate
         * @for kity.Shape
         * @description 让图形淡出
         *
         * @grammar fadeIn(duration, easing, delay, callback) => {this}
         *
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
            fadeOut: function() {
                return this.fxOpacity.apply(this, [ 0 ].concat([].slice.call(arguments)));
            }
        });
        return OpacityAnimator;
    }
};

//src/animate/pathanimator.js
/**
 * @fileOverview
 *
 * 路径补间动画器，让图形从一个形状变为另一个形状
 */
_p[5] = {
    value: function(require) {
        var Animator = _p.r(0);
        var g = _p.r(35);
        /**
     * @catalog animate
     *
     * @class kity.PathAnimator
     * @base kity.Animator
     * @description 路径补间动画器，让图形从一个形状变为另一个形状
     *
     * @example
     *
     * ```js
     * var path = new kity.Path('M0,0L0,100');
     * var pa = new kity.PathAnimator('M0,0C100,0,100,0,100,100');
     * pa.start(path, 300);
     * ```
     */
        var PathAnimator = _p.r(11).createClass("OpacityAnimator", {
            base: Animator,
            /**
         * @constructor
         * @for kity.PathAnimator
         *
         * @grammar new kity.Path.Animator(path)
         *
         * @param  {String|PathSegment} path 目标形状的路径数据
         *
         */
            constructor: function(path) {
                this.callBase({
                    beginValue: function(target) {
                        this.beginPath = target.getPathData();
                        return 0;
                    },
                    finishValue: 1,
                    setter: function(target, value) {
                        target.setPathData(g.pathTween(this.beginPath, path, value));
                    }
                });
            }
        });
        var Path = _p.r(47);
        _p.r(11).extendClass(Path, {
            /**
         * @catalog animate
         *
         * @method fxPath()
         * @for kity.Shape
         * @description 以动画的形式把路径变换为新路径
         *
         * @grammar fxPath(path, duration, easing, delay, callback) => {this}
         *
         * @param {String|PathSegment}   path     要变换新路径
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
            fxPath: function(path, duration, easing, delay, callback) {
                return this.animate(new PathAnimator(path), duration, easing, delay, callback);
            }
        });
        return PathAnimator;
    }
};

//src/animate/rotateanimator.js
/**
 * @fileOverview
 *
 * 提供支持目标旋转的动画器
 */
_p[6] = {
    value: function(require) {
        var Animator = _p.r(0);
        /**
     * @class kity.RotateAnimator
     * @base Animator
     * @description 提供支持目标旋转的动画器
     */
        var RotateAnimator = _p.r(11).createClass("RotateAnimator", {
            base: Animator,
            /**
         * @constructor
         * @for kity.RotateAnimator
         *
         * @grammar new kity.RotateAnimator(deg, ax, ay)
         *
         * @param  {Number} deg 要旋转的角度
         */
            constructor: function(deg) {
                this.callBase({
                    beginValue: 0,
                    finishValue: deg,
                    setter: function(target, value, timeline) {
                        var delta = timeline.getDelta();
                        target.rotate(delta);
                    }
                });
            }
        });
        var Shape = _p.r(61);
        _p.r(11).extendClass(Shape, {
            /**
         * @method fxRotate()
         * @for kity.Shape
         * @description 让目标以动画旋转指定的角度
         *
         * @grammar fxRotate(deg, duration, easing, delay) => {this}
         *
         * @param {Number}            deg      要旋转的角度
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
            fxRotate: function(deg, duration, easing, delay, callback) {
                return this.animate(new RotateAnimator(deg), duration, easing, delay, callback);
            }
        });
        return RotateAnimator;
    }
};

//src/animate/scaleanimator.js
/**
 * @fileOverview
 *
 * 提供支持目标缩放的动画器
 */
_p[7] = {
    value: function(require) {
        var Animator = _p.r(0);
        /**
     * @class kity.ScaleAnimator
     * @base kity.Animator
     * @description 提供支持目标缩放的动画器
     */
        var ScaleAnimator = _p.r(11).createClass("ScaleAnimator", {
            base: Animator,
            /**
         * @constructor
         * @for kity.ScaleAnimator
         *
         * @grammar new kity.ScaleAnimator(sx, sy)
         * @param  {Number} sx x 轴的缩放比例
         * @param  {Number} sy y 轴的缩放比例
         */
            constructor: function(sx, sy) {
                this.callBase({
                    beginValue: 0,
                    finishValue: 1,
                    setter: function(target, value, timeline) {
                        var delta = timeline.getDelta();
                        var kx = Math.pow(sx, delta);
                        var ky = Math.pow(sy, delta);
                        target.scale(ky, kx);
                    }
                });
            }
        });
        var Shape = _p.r(61);
        _p.r(11).extendClass(Shape, {
            /**
         * @method fxScale
         * @for kity.Shape
         * @description 动画缩放当前的图形
         *
         * @grammar fxScale(sx, sy, duration, easing, delay, callback) => {this}
         *
         * @param {Number} sx x 轴的缩放比例
         * @param {Number} sy y 轴的缩放比例
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
            fxScale: function(sx, sy, duration, easing, delay, callback) {
                return this.animate(new ScaleAnimator(sx, sy), duration, easing, delay, callback);
            }
        });
        return ScaleAnimator;
    }
};

//src/animate/timeline.js
/**
 * @fileOverview
 *
 * 动画时间线的实现
 */
_p[8] = {
    value: function(require) {
        var EventHandler = _p.r(34);
        var utils = _p.r(12);
        var frame = _p.r(2);
        function getPercentValue(b, f, p) {
            return utils.paralle(b, f, function(b, f) {
                return b + (f - b) * p;
            });
        }
        function getDelta(v1, v2) {
            return utils.paralle(v1, v2, function(v1, v2) {
                return v2 - v1;
            });
        }
        function TimelineEvent(timeline, type, param) {
            this.timeline = timeline;
            this.target = timeline.target;
            this.type = type;
            for (var name in param) {
                if (param.hasOwnProperty(name)) {
                    this[name] = param[name];
                }
            }
        }
        /**
     * @class kity.Timeline
     * @catalog animate
     * @mixins EventHandler
     * @description 动画时间线
     */
        var Timeline = _p.r(11).createClass("Timeline", {
            mixins: [ EventHandler ],
            /**
         * @constructor
         * @for kity.Timeline
         * @private
         * @description 时间线应该由动画器进行构造，不应手动创建
         *
         */
            constructor: function(animator, target, duration, easing) {
                this.callMixin();
                this.target = target;
                this.time = 0;
                this.duration = duration;
                this.easing = easing;
                this.animator = animator;
                this.beginValue = animator.beginValue;
                this.finishValue = animator.finishValue;
                this.setter = animator.setter;
                this.status = "ready";
            },
            /**
         * @private
         *
         * 让时间线进入下一帧
         */
            nextFrame: function(frame) {
                if (this.status != "playing") {
                    return;
                }
                this.time += frame.dur;
                this.setValue(this.getValue());
                if (this.time >= this.duration) {
                    this.timeUp();
                }
                frame.next();
            },
            /**
         * @method getPlayTime()
         * @for kity.Timeline
         * @grammar getPlayTime() => {Number}
         * @description 获得当前播放的时间，取值区间为 [0, duration]
         */
            getPlayTime: function() {
                return this.rollbacking ? this.duration - this.time : this.time;
            },
            /**
         * @method getTimeProportion()
         * @for kity.Timeline
         * @grammar getTimeProportion() => {Number}
         * @description 获得当前播放时间的比例，取值区间为 [0, 1]
         */
            getTimeProportion: function() {
                return this.getPlayTime() / this.duration;
            },
            /**
         * @method getValueProportion()
         * @for kity.Timeline
         * @grammar getValueProportion() => {Number}
         * @description 获得当前播放时间对应值的比例，取值区间为 [0, 1]；该值实际上是时间比例值经过缓动函数计算之后的值。
         */
            getValueProportion: function() {
                return this.easing(this.getPlayTime(), 0, 1, this.duration);
            },
            /**
         * @method getValue()
         * @for kity.Timeline
         * @grammar getValue() => {any}
         * @description 返回当前播放时间对应的值。
         */
            getValue: function() {
                var b = this.beginValue;
                var f = this.finishValue;
                var p = this.getValueProportion();
                return getPercentValue(b, f, p);
            },
            /**
         * @private
         *
         * 把值通过动画器的 setter 设置到目标上
         */
            setValue: function(value) {
                this.lastValue = this.currentValue;
                this.currentValue = value;
                this.setter.call(this.target, this.target, value, this);
            },
            /**
         * @method getDelta()
         * @for kity.Timeline
         * @grammar getDelta() => {any}
         * @description 返回当前值和上一帧的值的差值
         */
            getDelta: function() {
                this.lastValue = this.lastValue === undefined ? this.beginValue : this.lastValue;
                return getDelta(this.lastValue, this.currentValue);
            },
            /**
         * @method play()
         * @for kity.Timeline
         * @grammar play() => {this}
         * @description 让时间线播放，如果时间线还没开始，或者已停止、已结束，则重头播放；如果是已暂停，从暂停的位置继续播放
         */
            play: function() {
                var lastStatus = this.status;
                this.status = "playing";
                switch (lastStatus) {
                  case "ready":
                    if (utils.isFunction(this.beginValue)) {
                        this.beginValue = this.beginValue.call(this.target, this.target);
                    }
                    if (utils.isFunction(this.finishValue)) {
                        this.finishValue = this.finishValue.call(this.target, this.target);
                    }
                    this.time = 0;
                    this.setValue(this.beginValue);
                    this.frame = frame.requestFrame(this.nextFrame.bind(this));
                    break;

                  case "finished":
                  case "stoped":
                    this.time = 0;
                    this.frame = frame.requestFrame(this.nextFrame.bind(this));
                    break;

                  case "paused":
                    this.frame.next();
                }
                /**
             * @event play
             * @for kity.Timeline
             * @description 在时间线播放后触发
             *
             * @param {String} event.lastStatus
             *        表示播放前的上一个状态，可能取值为 'ready'、'finished'、'stoped'、'paused'
             */
                this.fire("play", new TimelineEvent(this, "play", {
                    lastStatus: lastStatus
                }));
                return this;
            },
            /**
         * @method pause()
         * @for kity.Timeline
         * @description 暂停当前的时间线
         *
         * @grammar pause() => {this}
         */
            pause: function() {
                this.status = "paused";
                /**
             * @event pause
             * @for kity.Timeline
             * @description 暂停事件，在时间线暂停时触发
             */
                this.fire("pause", new TimelineEvent(this, "pause"));
                frame.releaseFrame(this.frame);
                return this;
            },
            /**
         * @method stop()
         * @for kity.Timeline
         * @description 停止当前时间线
         *
         * @grammar stop() => {this}
         */
            stop: function() {
                this.status = "stoped";
                this.setValue(this.finishValue);
                this.rollbacking = false;
                /**
             * @event stop
             * @for kity.Timeline
             * @description 停止时间，在时间线停止时触发
             */
                this.fire("stop", new TimelineEvent(this, "stop"));
                frame.releaseFrame(this.frame);
                return this;
            },
            /**
         * @private
         *
         * 播放结束之后的处理
         */
            timeUp: function() {
                if (this.repeatOption) {
                    this.time = 0;
                    if (this.rollback) {
                        if (this.rollbacking) {
                            this.decreaseRepeat();
                            this.rollbacking = false;
                        } else {
                            this.rollbacking = true;
                            /**
                         * @event rollback
                         * @for kity.Timeline
                         * @description 回滚事件，在时间线回滚播放开始的时候触发
                         */
                            this.fire("rollback", new TimelineEvent(this, "rollback"));
                        }
                    } else {
                        this.decreaseRepeat();
                    }
                    if (!this.repeatOption) {
                        this.finish();
                    } else {
                        /**
                     * @event repeat
                     * @for kity.Timeline
                     * @description 循环事件，在时间线循环播放开始的时候触发
                     */
                        this.fire("repeat", new TimelineEvent(this, "repeat"));
                    }
                } else {
                    this.finish();
                }
            },
            /**
         * @private
         *
         * 决定播放结束的处理
         */
            finish: function() {
                this.setValue(this.finishValue);
                this.status = "finished";
                /**
             * @event finish
             * @for kity.Timeline
             * @description 结束事件，在时间线播放结束后触发（包括重复和回滚都结束）
             */
                this.fire("finish", new TimelineEvent(this, "finish"));
                frame.releaseFrame(this.frame);
            },
            /**
         * @private
         *
         *  循环次数递减
         */
            decreaseRepeat: function() {
                if (this.repeatOption !== true) {
                    this.repeatOption--;
                }
            },
            /**
         * @method repeat()
         * @for kity.Timeline
         * @description 设置时间线的重复选项
         *
         * @grammar repeat(repeat, rollback) => {this}
         *
         * @param  {Number|Boolean} repeat
         *     是否重复播放，设置为 true 无限循环播放，设置数值则循环指定的次数
         * @param  {Boolean} rollback
         *     指示是否要回滚播放。
         *     如果设置为真，一次事件到 duration 则一个来回算一次循环次数，否则播放完成一次算一次循环次数
         *
         */
            repeat: function(repeat, rollback) {
                this.repeatOption = repeat;
                this.rollback = rollback;
                return this;
            }
        });
        Timeline.requestFrame = frame.requestFrame;
        Timeline.releaseFrame = frame.releaseFrame;
        return Timeline;
    }
};

//src/animate/translateanimator.js
/**
 * @fileOverview
 *
 * 提供让图形移动的动画器
 */
_p[9] = {
    value: function(require) {
        var Animator = _p.r(0);
        /**
     * @class kity.TranslateAnimator
     * @base kity.Animator
     * @description 提供让图形移动的动画器
     */
        var TranslateAnimator = _p.r(11).createClass("TranslateAnimator", {
            base: Animator,
            /**
         * @constructor
         * @for kity.TranslateAnimator
         * @grammar new kity.TranslateAnimator(x, y)
         * @param  {Number} x x 方向上需要移动的距离
         * @param  {Number} y y 方向上需要移动的距离
         */
            constructor: function(x, y) {
                this.callBase({
                    x: 0,
                    y: 0
                }, {
                    x: x,
                    y: y
                }, function(target, value, timeline) {
                    var delta = timeline.getDelta();
                    target.translate(delta.x, delta.y);
                });
            }
        });
        var Shape = _p.r(61);
        _p.r(11).extendClass(Shape, {
            /**
         * @method fxTranslate()
         * @for kity.Shape
         * @description 让目标以动画平移指定的距离
         *
         * @grammar fxTranslate(x, y, duration, easing, delay, callback) => {this}
         *
         * @param {Number} x x 方向上需要移动的距离
         * @param {Number} y y 方向上需要移动的距离
         * @param {Number|String}     duration 动画的播放长度，如 300、"5s"、"0.5min"
         * @param {Number|String}     delay    动画播放前的延时
         * @param {String|Function}   easing   动画播放使用的缓动函数，如 'ease'、'linear'、'swing'
         * @param {Function}          callback 播放结束之后的回调函数
         */
            fxTranslate: function(x, y, duration, easing, delay, callback) {
                return this.animate(new TranslateAnimator(x, y), duration, easing, delay, callback);
            }
        });
        return TranslateAnimator;
    }
};

//src/core/browser.js
/**
 * @fileOverview
 *
 * 提供浏览器判断的一些字段
 */
_p[10] = {
    value: function() {
        /**
     * @class kity.Browser
     * @catalog core
     * @static
     * @description 提供浏览器信息
     */
        var browser = function() {
            var agent = navigator.userAgent.toLowerCase(), opera = window.opera, browser;
            // 浏览器对象
            browser = {
                /**
             * @property platform
             * @description 获取浏览器所在系统,"Win"->Windows;"Mac"->Mac;"Lux"->Linux
             * @type {String}
             */
                platform: function(navigator) {
                    var _p = {
                        win32: "Win",
                        macintel: "Mac"
                    };
                    return _p[navigator.platform.toLowerCase()] || "Lux";
                }(navigator),
                /**
             * 猎豹,区分两种不同内核
             */
                lb: function(agent) {
                    if (~agent.indexOf("lbbrowser")) {
                        return ~agent.indexOf("msie") ? "ie" : "chrome";
                    }
                    return false;
                }(agent),
                /**
             * 搜狗
             */
                sg: /se[\s\S]+metasr/.test(agent),
                /**
             * 百度
             */
                bd: !!~agent.indexOf("bidubrowser"),
                /**
             * edge浏览器
             */
                edge: !!~agent.indexOf("edge"),
                /**
             * chrome初始化为false
             * @type {Boolean}
             */
                chrome: false,
                /**
             * @property opera
             * @for kity.Browser
             * @description 判断是否为 Opera 浏览器
             * @type {boolean}
             */
                opera: !!opera && opera.version,
                /**
             * @property webkit
             * @for kity.Browser
             * @description 判断是否为 Webkit 内核的浏览器
             * @type {boolean}
             */
                webkit: agent.indexOf(" applewebkit/") > -1,
                /**
             * @property mac
             * @for kity.Browser
             * @description 判断是否为 Mac 下的浏览器
             * @type {boolean}
             */
                mac: agent.indexOf("macintosh") > -1
            };
            /**
         * @property ie
         * @for kity.Browser
         * @description 判断是否为 IE 浏览器
         * @type {boolean}
         */
            browser.ie = !browser.lb && /(msie\s|trident.*rv:)([\w.]+)/.test(agent);
            browser.gecko = navigator.product == "Gecko" && !browser.webkit && !browser.opera && !browser.ie;
            var version = 0;
            // Internet Explorer 6.0+
            if (browser.ie) {
                version = (agent.match(/(msie\s|trident.*rv:)([\w.]+)/)[2] || 0) * 1;
                browser.ie11Compat = document.documentMode == 11;
                browser.ie9Compat = document.documentMode == 9;
            }
            // Gecko.
            if (browser.gecko) {
                var geckoRelease = agent.match(/rv:([\d\.]+)/);
                if (geckoRelease) {
                    geckoRelease = geckoRelease[1].split(".");
                    version = geckoRelease[0] * 1e4 + (geckoRelease[1] || 0) * 100 + (geckoRelease[2] || 0) * 1;
                }
            }
            // 排除其他chrome内核的浏览器的干扰
            if (/chrome\/(\d+\.\d)/i.test(agent) && !browser.bd && !browser.opera && !browser.lb && !browser.sg && !browser.edge) {
                /**
             * @property chrome
             * @for kity.Browser
             * @description 判断是否为 Chrome 浏览器
             * @type {boolean}
             */
                browser.chrome = +RegExp["$1"];
            }
            if (/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)) {
                browser.safari = +(RegExp["$1"] || RegExp["$2"]);
            }
            // Opera 9.50+
            if (browser.opera) version = parseFloat(opera.version());
            // WebKit 522+ (Safari 3+)
            if (browser.webkit) version = parseFloat(agent.match(/ applewebkit\/(\d+)/)[1]);
            // 搜狗版本号无从得知
            // 猎豹版本号无从得知
            // 百度
            if (browser.bd) version = parseFloat(agent.match(/bidubrowser\/(\d+)/)[1]);
            // Opera 9.50+
            if (browser.opera) version = parseFloat(agent.match(/opr\/(\d+)/)[1]);
            // edge
            if (browser.edge) version = parseFloat(agent.match(/edge\/(\d+)/)[1]);
            /**
         * @property version
         * @for kity.Browser
         * @description 获取当前浏览器的版本
         * @type {Number}
         */
            browser.version = version;
            browser.isCompatible = !browser.mobile && (browser.ie && version >= 6 || browser.gecko && version >= 10801 || browser.opera && version >= 9.5 || browser.air && version >= 1 || browser.webkit && version >= 522 || false);
            return browser;
        }();
        return browser;
    }
};

//src/core/class.js
/**
 * @fileOverview
 *
 * 提供 Kity 的 OOP 支持
 */
_p[11] = {
    value: function(require, exports) {
        /**
     * @class kity.Class
     * @catalog core
     * @description 所有 kity 类的基类
     * @abstract
     */
        function Class() {}
        exports.Class = Class;
        Class.__KityClassName = "Class";
        /**
     * @method base()
     * @for kity.Class
     * @protected
     * @grammar base(name, args...) => {any}
     * @description 调用父类指定名称的函数
     * @param {string} name 函数的名称
     * @param {parameter} args... 传递给父类函数的参数
     *
     * @example
     *
     * ```js
     * var Person = kity.createClass('Person', {
     *     toString: function() {
     *         return 'I am a person';
     *     }
     * });
     *
     * var Male = kity.createClass('Male', {
     *     base: Person,
     *
     *     toString: function() {
     *         return 'I am a man';
     *     },
     *
     *     speak: function() {
     *         return this.base('toString') + ',' + this.toString();
     *     }
     * })
     * ```
     */
        Class.prototype.base = function(name) {
            var caller = arguments.callee.caller;
            var method = caller.__KityMethodClass.__KityBaseClass.prototype[name];
            return method.apply(this, Array.prototype.slice.call(arguments, 1));
        };
        /**
     * @method callBase()
     * @for kity.Class
     * @protected
     * @grammar callBase(args...) => {any}
     * @description 调用父类同名函数
     * @param {parameter} args... 传递到父类同名函数的参数
     *
     * @example
     *
     * ```js
     * var Animal = kity.createClass('Animal', {
     *     constructor: function(name) {
     *         this.name = name;
     *     },
     *     toString: function() {
     *         return 'I am an animal name ' + this.name;
     *     }
     * });
     *
     * var Dog = kity.createClass('Dog', {
     *     constructor: function(name) {
     *         this.callBase(name);
     *     },
     *     toString: function() {
     *         return this.callBase() + ', a dog';
     *     }
     * });
     *
     * var dog = new Dog('Dummy');
     * console.log(dog.toString()); // "I am an animal name Dummy, a dog";
     * ```
     */
        Class.prototype.callBase = function() {
            var caller = arguments.callee.caller;
            var method = caller.__KityMethodClass.__KityBaseClass.prototype[caller.__KityMethodName];
            return method.apply(this, arguments);
        };
        Class.prototype.mixin = function(name) {
            var caller = arguments.callee.caller;
            var mixins = caller.__KityMethodClass.__KityMixins;
            if (!mixins) {
                return this;
            }
            var method = mixins[name];
            return method.apply(this, Array.prototype.slice.call(arguments, 1));
        };
        Class.prototype.callMixin = function() {
            var caller = arguments.callee.caller;
            var methodName = caller.__KityMethodName;
            var mixins = caller.__KityMethodClass.__KityMixins;
            if (!mixins) {
                return this;
            }
            var method = mixins[methodName];
            if (methodName == "constructor") {
                for (var i = 0, l = method.length; i < l; i++) {
                    method[i].call(this);
                }
                return this;
            } else {
                return method.apply(this, arguments);
            }
        };
        /**
     * @method pipe()
     * @for kity.Class
     * @grammar pipe() => {this}
     * @description 以当前对象为上线文以及管道函数的第一个参数，执行一个管道函数
     * @param  {Function} fn 进行管道操作的函数
     *
     * @example
     *
     * ```js
     * var rect = new kity.Rect().pipe(function() {
     *     this.setWidth(500);
     *     this.setHeight(300);
     * });
     * ```
     */
        Class.prototype.pipe = function(fn) {
            if (typeof fn == "function") {
                fn.call(this, this);
            }
            return this;
        };
        /**
     * @method getType()
     * @for kity.Class
     * @grammar getType() => {string}
     * @description 获得对象的类型
     *
     * @example
     *
     * ```js
     * var rect = new kity.Rect();
     * var circle = new kity.Circle();
     *
     * console.log(rect.getType()); // "Rect"
     * console.log(rect.getType()); // "Circle"
     * ```
     */
        Class.prototype.getType = function() {
            return this.__KityClassName;
        };
        /**
     * @method getClass()
     * @for kity.Class
     * @grammar getClass() => {Class}
     * @description 获得对象的类
     *
     * @example
     *
     * ```js
     * var rect = new kity.Rect();
     *
     * console.log(rect.getClass() === kity.Rect); // true
     * console.log(rect instanceof kity.Rect); // true
     * ```
     */
        Class.prototype.getClass = function() {
            return this.constructor;
        };
        // 检查基类是否调用了父类的构造函数
        // 该检查是弱检查，假如调用的代码被注释了，同样能检查成功（这个特性可用于知道建议调用，但是出于某些原因不想调用的情况）
        function checkBaseConstructorCall(targetClass, classname) {
            var code = targetClass.toString();
            if (!/this\.callBase/.test(code)) {
                throw new Error(classname + " : 类构造函数没有调用父类的构造函数！为了安全，请调用父类的构造函数");
            }
        }
        var KITY_INHERIT_FLAG = "__KITY_INHERIT_FLAG_" + +new Date();
        function inherit(constructor, BaseClass, classname) {
            var KityClass = eval("(function " + classname + "( __inherit__flag ) {" + "if( __inherit__flag != KITY_INHERIT_FLAG ) {" + "KityClass.__KityConstructor.apply(this, arguments);" + "}" + "this.__KityClassName = KityClass.__KityClassName;" + "})");
            KityClass.__KityConstructor = constructor;
            KityClass.prototype = new BaseClass(KITY_INHERIT_FLAG);
            for (var methodName in BaseClass.prototype) {
                if (BaseClass.prototype.hasOwnProperty(methodName) && methodName.indexOf("__Kity") !== 0) {
                    KityClass.prototype[methodName] = BaseClass.prototype[methodName];
                }
            }
            KityClass.prototype.constructor = KityClass;
            return KityClass;
        }
        function mixin(NewClass, mixins) {
            if (false === mixins instanceof Array) {
                return NewClass;
            }
            var i, length = mixins.length, proto, method;
            NewClass.__KityMixins = {
                constructor: []
            };
            for (i = 0; i < length; i++) {
                proto = mixins[i].prototype;
                for (method in proto) {
                    if (false === proto.hasOwnProperty(method) || method.indexOf("__Kity") === 0) {
                        continue;
                    }
                    if (method === "constructor") {
                        // constructor 特殊处理
                        NewClass.__KityMixins.constructor.push(proto[method]);
                    } else {
                        NewClass.prototype[method] = NewClass.__KityMixins[method] = proto[method];
                    }
                }
            }
            return NewClass;
        }
        function extend(BaseClass, extension) {
            if (extension.__KityClassName) {
                extension = extension.prototype;
            }
            for (var methodName in extension) {
                if (extension.hasOwnProperty(methodName) && methodName.indexOf("__Kity") && methodName != "constructor") {
                    var method = BaseClass.prototype[methodName] = extension[methodName];
                    method.__KityMethodClass = BaseClass;
                    method.__KityMethodName = methodName;
                }
            }
            return BaseClass;
        }
        /**
     * @method kity.createClass()
     * @grammar kity.createClass(classname, defines) => {Class}
     * @description 创建一个类
     * @param  {string} classname 类名，用于调试的时候查看，可选
     * @param  {object} defines   类定义
     *      defines.base {Class}
     *          定义的类的基类，如果不配置，则表示基类为 kity.Class
     *      defines.mixins {Class[]}
     *          定义的类要融合的类列表
     *      defines.constructor {Function}
     *          定义类的构造函数，如果父类显式定义了构造函数，需要在构造函数中使用 callBase() 方法调用父类的构造函数
     *      defines.* {Function}
     *          定义类的其它函数
     *
     * @example 创建一个类
     *
     * ```js
     * var Animal = kity.createClass('Animal', {
     *     constructor: function(name) {
     *         this.name = name;
     *     },
     *     toString: function() {
     *         return this.name;
     *     }
     * });
     *
     * var a = new Animal('kity');
     * console.log(a.toString()); // "kity"
     * ```
     *
     * @example 继承一个类
     *
     * ```js
     * var Cat = kity.createClass('Cat', {
     *     base: Animal,
     *     constructor: function(name, color) {
     *         // 调用父类构造函数
     *         this.callBase(name);
     *     },
     *     toString: function() {
     *         return 'A ' + this.color + ' cat, ' + this.callBase();
     *     }
     * });
     *
     * var cat = new Cat('kity', 'black');
     * console.log(cat.toString()); // "A black cat, kity"
     * ```
     *
     * @example 混合类的能力
     * ```js
     * var Walkable = kity.createClass('Walkable', {
     *     constructor: function() {
     *         this.speed = 'fast';
     *     },
     *     walk: function() {
     *         console.log('I am walking ' + this.speed);
     *     }
     * });
     *
     * var Dog = kity.createClass('Dog', {
     *     base: Animal,
     *     mixins: [Walkable],
     *     constructor: function(name) {
     *         this.callBase(name);
     *         this.callMixins();
     *     }
     * });
     *
     * var dog = new Dog('doggy');
     * console.log(dog.toString() + ' say:');
     * dog.walk();
     * ```
     */
        exports.createClass = function(classname, defines) {
            var constructor, NewClass, BaseClass;
            if (arguments.length === 1) {
                defines = arguments[0];
                classname = "AnonymousClass";
            }
            BaseClass = defines.base || Class;
            if (defines.hasOwnProperty("constructor")) {
                constructor = defines.constructor;
                if (BaseClass != Class) {
                    checkBaseConstructorCall(constructor, classname);
                }
            } else {
                constructor = function() {
                    this.callBase.apply(this, arguments);
                    this.callMixin.apply(this, arguments);
                };
            }
            NewClass = inherit(constructor, BaseClass, classname);
            NewClass = mixin(NewClass, defines.mixins);
            NewClass.__KityClassName = constructor.__KityClassName = classname;
            NewClass.__KityBaseClass = constructor.__KityBaseClass = BaseClass;
            NewClass.__KityMethodName = constructor.__KityMethodName = "constructor";
            NewClass.__KityMethodClass = constructor.__KityMethodClass = NewClass;
            // 下面这些不需要拷贝到原型链上
            delete defines.mixins;
            delete defines.constructor;
            delete defines.base;
            NewClass = extend(NewClass, defines);
            return NewClass;
        };
        /**
     * @method kity.extendClass()
     * @grammar kity.extendClass(clazz, extension) => {Class}
     * @description 拓展一个已有的类
     *
     * @example
     *
     * ```js
     * kity.extendClass(Dog, {
     *     spark: function() {
     *         console.log('wao wao wao!');
     *     }
     * });
     *
     * new Dog().spark(); // "wao wao wao!";
     * ```
     */
        exports.extendClass = extend;
    }
};

//src/core/utils.js
/**
 * @fileOverview
 *
 * 一些常用的工具方法
 */
_p[12] = {
    value: function() {
        /**
     * @class kity.Utils
     * @catalog core
     * @static
     * @description 提供常用的工具方法
     */
        var utils = {
            /**
         * @method each()
         * @for kity.Utils
         * @grammar each(obj, interator, context)
         * @param  {Object|Array} obj 要迭代的对象或数组
         * @param  {Function} iterator 迭代函数
         * @param  {Any} context  迭代函数的上下文
         *
         * @example 迭代数组
         *
         * ```js
         * kity.Utils.each([1, 2, 3, 4, 5], function(value, index, array) {
         *     console.log(value, index);
         * });
         * // 1, 0
         * // 2, 1
         * // 3, 2
         * // 4, 3
         * // 5, 4
         * ```
         *
         * @example 迭代对象
         *
         * ```js
         * var obj = {
         *     name: 'kity',
         *     version: '1.2.1'
         * };
         * var param = [];
         * kity.Utils.each(obj, function(value, key, obj) {
         *     param.push(key + '=' + value);
         * });
         * console.log(param.join('&')); // "name=kity&version=1.2.1"
         * ```
         */
            each: function each(obj, iterator, context) {
                if (obj === null) {
                    return;
                }
                if (obj.length === +obj.length) {
                    for (var i = 0, l = obj.length; i < l; i++) {
                        if (iterator.call(context, obj[i], i, obj) === false) {
                            return false;
                        }
                    }
                } else {
                    for (var key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            if (iterator.call(context, obj[key], key, obj) === false) {
                                return false;
                            }
                        }
                    }
                }
            },
            /**
         * @method extend()
         * @for kity.Utils
         * @grammar extend(target, sources..., notCover) => {object}
         * @description 把源对象的属性合并到目标对象上
         * @param {object} target 目标对象
         * @param {parameter} sources 源对象
         * @param {boolean} notCover 是否不要覆盖源对象已有的属性
         *
         * @example
         *
         * ```js
         * var a = {
         *     key1: 'a1',
         *     key2: 'a2'
         * };
         *
         * var b = {
         *     key2: 'b2',
         *     key3: 'b3'
         * };
         *
         * var c = {
         *     key4: 'c4'
         * };
         *
         * var d = kity.extend(a, b, c);
         *
         * console.log(d === a); // true
         * console.log(a); // {key1: 'a1', key2: 'b2', key3: 'b3', key4: 'c4'}
         * ```
         */
            extend: function extend(t) {
                var a = arguments, notCover = this.isBoolean(a[a.length - 1]) ? a[a.length - 1] : false, len = this.isBoolean(a[a.length - 1]) ? a.length - 1 : a.length;
                for (var i = 1; i < len; i++) {
                    var x = a[i];
                    for (var k in x) {
                        if (!notCover || !t.hasOwnProperty(k)) {
                            t[k] = x[k];
                        }
                    }
                }
                return t;
            },
            /**
         * @method deepExtend()
         * @for kity.Utils
         * @grammar deepExtend(target, sources..., notCover)
         * @description 把源对象的属性合并到目标对象上，如果属性是对象，会递归合并
         * @param {object} target 目标对象
         * @param {parameter} sources 源对象
         * @param {boolean} notCover 是否不要覆盖源对象已有的属性
         */
            deepExtend: function(t, s) {
                var a = arguments, notCover = this.isBoolean(a[a.length - 1]) ? a[a.length - 1] : false, len = this.isBoolean(a[a.length - 1]) ? a.length - 1 : a.length;
                for (var i = 1; i < len; i++) {
                    var x = a[i];
                    for (var k in x) {
                        if (!notCover || !t.hasOwnProperty(k)) {
                            if (this.isObject(t[k]) && this.isObject(x[k])) {
                                this.deepExtend(t[k], x[k], notCover);
                            } else {
                                t[k] = x[k];
                            }
                        }
                    }
                }
                return t;
            },
            /**
         * @method clone()
         * @for kity.Utils
         * @grammar clone(obj) => {object}
         * @description 返回一个对象的克隆副本（非深度复制）
         * @param  {object} obj 要克隆的对象
         *
         * @example
         *
         * ```js
         * var source = {
         *     key1: {
         *         key2: 'value2'
         *     },
         *     key3: 'value3'
         * };
         *
         * var target = kity.Utils.clone(source);
         *
         * console.log(target === source); // false
         * console.log(target.key1 === source.key1); // true
         * console.log(target.key3 === source.key3); // true
         * ```
         */
            clone: function clone(obj) {
                var cloned = {};
                for (var m in obj) {
                    if (obj.hasOwnProperty(m)) {
                        cloned[m] = obj[m];
                    }
                }
                return cloned;
            },
            /**
         * @method copy()
         * @for kity.Utils
         * @grammar copy(obj) => {object}
         * @description 返回一个对象的拷贝副本（深度复制）
         * @param  {object} obj 要拷贝的对象
         *
         * @example
         *
         * ```js
         * var source = {
         *     key1: {
         *         key2: 'value2'
         *     },
         *     key3: 'value3'
         * };
         *
         * var target = kity.Utils.copy(source);
         *
         * console.log(target === source); // false
         * console.log(target.key1 === source.key1); // false
         * console.log(target.key3 === source.key3); // true，因为是值类型
         * ```
         */
            copy: function copy(obj) {
                if (typeof obj !== "object") return obj;
                if (typeof obj === "function") return null;
                return JSON.parse(JSON.stringify(obj));
            },
            queryPath: function(path, obj) {
                var arr = path.split(".");
                var i = 0, tmp = obj, l = arr.length;
                while (i < l) {
                    if (arr[i] in tmp) {
                        tmp = tmp[arr[i]];
                        i++;
                        if (i >= l || tmp === undefined) {
                            return tmp;
                        }
                    } else {
                        return undefined;
                    }
                }
            },
            getValue: function(value, defaultValue) {
                return value !== undefined ? value : defaultValue;
            },
            /**
         * @method flatten()
         * @for kity.Utils
         * @grammar flatten(arr) => {Array}
         * @description 返回给定数组的扁平化版本
         * @param  {Array} arr 要扁平化的数组
         *
         * @example
         *
         * ```js
         * var flattened = kity.Utils.flatten([[1, 2], [2, 3], [[4, 5], [6, 7]]]);
         * console.log(flattened); // [1, 2, 3, 4, 5, 6, 7];
         * ```
         */
            flatten: function flatten(arr) {
                var result = [], length = arr.length, i;
                for (i = 0; i < length; i++) {
                    if (arr[i] instanceof Array) {
                        result = result.concat(utils.flatten(arr[i]));
                    } else {
                        result.push(arr[i]);
                    }
                }
                return result;
            },
            /**
         * @method paralle()
         * @for kity.Utils
         * @grammar paralle() => {Any}
         *
         * @description 平行地对 v1 和 v2 进行指定的操作
         *
         *    如果 v1 是数字，那么直接进行 op 操作
         *    如果 v1 是对象，那么返回一个对象，其元素是 v1 和 v2 同键值的每个元素平行地进行 op 操作的结果
         *    如果 v1 是数组，那么返回一个数组，其元素是 v1 和 v2 同索引的每个元素平行地进行 op 操作的结果
         *
         * @param  {Number|Object|Array} v1 第一个操作数
         * @param  {Number|Object|Array} v2 第二个操作数
         * @param  {Function} op 操作函数
         *
         *
         *
         * @example
         *
         * ```js
         * var a = {
         *     value1: 1,
         *     value2: 2,
         *     value3: [3, 4, 5]
         * };
         *
         * var b = {
         *     value1: 2,
         *     value2: 3,
         *     value3: [4, 5, 6]
         * };
         *
         * var c = kity.Utils.paralle(a, b, function(v1, v2) {
         *     return v1 + v2;
         * });
         *
         * console.log(c.value1); // 3
         * console.log(c.value2); // 5
         * console.log(c.value3); // [7, 9, 11]
         *
         * ```
         */
            paralle: function paralle(v1, v2, op) {
                var Class, field, index, name, value;
                // 数组
                if (v1 instanceof Array) {
                    value = [];
                    for (index = 0; index < v1.length; index++) {
                        value.push(utils.paralle(v1[index], v2[index], op));
                    }
                    return value;
                }
                // 对象
                if (v1 instanceof Object) {
                    // 如果值是一个支持原始表示的实例，获取其原始表示
                    Class = v1.getClass && v1.getClass();
                    if (Class && Class.parse) {
                        v1 = v1.valueOf();
                        v2 = v2.valueOf();
                        value = utils.paralle(v1, v2, op);
                        value = Class.parse(value);
                    } else {
                        value = {};
                        for (name in v1) {
                            if (v1.hasOwnProperty(name) && v2.hasOwnProperty(name)) {
                                value[name] = utils.paralle(v1[name], v2[name], op);
                            }
                        }
                    }
                    return value;
                }
                // 是否数字
                if (false === isNaN(parseFloat(v1))) {
                    return op(v1, v2);
                }
                return value;
            },
            /**
         * 创建 op 操作的一个平行化版本
         */
            parallelize: function parallelize(op) {
                return function(v1, v2) {
                    return utils.paralle(v1, v2, op);
                };
            }
        };
        /**
     * @method isString()
     * @for kity.Utils
     * @grammar isString(unknown) => {boolean}
     * @description 判断一个值是否为字符串类型
     * @param  {any} unknown 要判断的值
     */
        /**
     * @method isFunction()
     * @for kity.Utils
     * @grammar isFunction(unknown) => {boolean}
     * @description 判断一个值是否为函数类型
     * @param  {any} unknown 要判断的值
     */
        /**
     * @method isArray()
     * @for kity.Utils
     * @grammar isArray(unknown) => {boolean}
     * @description 判断一个值是否为数组类型
     * @param  {any} unknown 要判断的值
     */
        /**
     * @method isNumber()
     * @for kity.Utils
     * @grammar isNumber(unknown) => {boolean}
     * @description 判断一个值是否为数字类型
     * @param  {any} unknown 要判断的值
     */
        /**
     * @method isRegExp()
     * @for kity.Utils
     * @grammar isRegExp(unknown) => {boolean}
     * @description 判断一个值是否为正则表达式类型
     * @param  {any} unknown 要判断的值
     */
        /**
     * @method isObject()
     * @for kity.Utils
     * @grammar isObject(unknown) => {boolean}
     * @description 判断一个值是否为对象类型
     * @param  {any} unknown 要判断的值
     */
        /**
     * @method isBoolean()
     * @for kity.Utils
     * @grammar isBoolean(unknown) => {boolean}
     * @description 判断一个值是否为布尔类型
     * @param  {any} unknown 要判断的值
     */
        utils.each([ "String", "Function", "Array", "Number", "RegExp", "Object", "Boolean" ], function(v) {
            utils["is" + v] = function typeCheck(obj) {
                return Object.prototype.toString.apply(obj) == "[object " + v + "]";
            };
        });
        return utils;
    }
};

//src/expose-kity.js
_p[13] = {
    value: function(require, exports, module) {
        module.exports = window.kity = _p.r(77);
    }
};

//src/filter/effect/colormatrixeffect.js
/**
 * 颜色矩阵运算效果封装
 */
_p[14] = {
    value: function(require, exports, module) {
        var Effect = _p.r(17), Utils = _p.r(12);
        var ColorMatrixEffect = _p.r(11).createClass("ColorMatrixEffect", {
            base: Effect,
            constructor: function(type, input) {
                this.callBase(Effect.NAME_COLOR_MATRIX);
                this.set("type", Utils.getValue(type, ColorMatrixEffect.TYPE_MATRIX));
                this.set("in", Utils.getValue(input, Effect.INPUT_SOURCE_GRAPHIC));
            }
        });
        Utils.extend(ColorMatrixEffect, {
            // 类型常量
            TYPE_MATRIX: "matrix",
            TYPE_SATURATE: "saturate",
            TYPE_HUE_ROTATE: "hueRotate",
            TYPE_LUMINANCE_TO_ALPHA: "luminanceToAlpha",
            // 矩阵常量
            MATRIX_ORIGINAL: "10000010000010000010".split("").join(" "),
            MATRIX_EMPTY: "00000000000000000000".split("").join(" ")
        });
        return ColorMatrixEffect;
    }
};

//src/filter/effect/compositeeffect.js
/**
 * 高斯模糊效果封装
 */
_p[15] = {
    value: function(require, exports, module) {
        var Effect = _p.r(17), Utils = _p.r(12);
        var CompositeEffect = _p.r(11).createClass("CompositeEffect", {
            base: Effect,
            constructor: function(operator, input, input2) {
                this.callBase(Effect.NAME_COMPOSITE);
                this.set("operator", Utils.getValue(operator, CompositeEffect.OPERATOR_OVER));
                if (input) {
                    this.set("in", input);
                }
                if (input2) {
                    this.set("in2", input2);
                }
            }
        });
        Utils.extend(CompositeEffect, {
            // operator 常量
            OPERATOR_OVER: "over",
            OPERATOR_IN: "in",
            OPERATOR_OUT: "out",
            OPERATOR_ATOP: "atop",
            OPERATOR_XOR: "xor",
            OPERATOR_ARITHMETIC: "arithmetic"
        });
        return CompositeEffect;
    }
};

//src/filter/effect/convolvematrixeffect.js
/**
 * 像素级别的矩阵卷积运算效果封装
 */
_p[16] = {
    value: function(require, exports, module) {
        var Effect = _p.r(17), Utils = _p.r(12);
        var ConvolveMatrixEffect = _p.r(11).createClass("ConvolveMatrixEffect", {
            base: Effect,
            constructor: function(edgeMode, input) {
                this.callBase(Effect.NAME_CONVOLVE_MATRIX);
                this.set("edgeMode", Utils.getValue(edgeMode, ConvolveMatrixEffect.MODE_DUPLICATE));
                this.set("in", Utils.getValue(input, Effect.INPUT_SOURCE_GRAPHIC));
            }
        });
        Utils.extend(ConvolveMatrixEffect, {
            MODE_DUPLICATE: "duplicate",
            MODE_WRAP: "wrap",
            MODE_NONE: "none"
        });
        return ConvolveMatrixEffect;
    }
};

//src/filter/effect/effect.js
/*
 * 效果类
 * 该类型的对象不存储任何内部属性， 所有操作都是针对该类对象所维护的节点进行的
 */
_p[17] = {
    value: function(require, exports, module) {
        var svg = _p.r(68), Effect = _p.r(11).createClass("Effect", {
            constructor: function(type) {
                this.node = svg.createNode(type);
            },
            getId: function() {
                return this.node.id;
            },
            setId: function(id) {
                this.node.id = id;
                return this;
            },
            set: function(key, value) {
                this.node.setAttribute(key, value);
                return this;
            },
            get: function(key) {
                return this.node.getAttribute(key);
            },
            getNode: function() {
                return this.node;
            },
            // 返回该效果的result
            toString: function() {
                return this.node.getAttribute("result") || "";
            }
        });
        _p.r(12).extend(Effect, {
            // 特效名称常量
            NAME_GAUSSIAN_BLUR: "feGaussianBlur",
            NAME_OFFSET: "feOffset",
            NAME_COMPOSITE: "feComposite",
            NAME_COLOR_MATRIX: "feColorMatrix",
            NAME_CONVOLVE_MATRIX: "feConvolveMatrix",
            // 输入常量
            INPUT_SOURCE_GRAPHIC: "SourceGraphic",
            INPUT_SOURCE_ALPHA: "SourceAlpha",
            INPUT_BACKGROUND_IMAGE: "BackgroundImage",
            INPUT_BACKGROUND_ALPHA: "BackgroundAlpha",
            INPUT_FILL_PAINT: "FillPaint",
            INPUT_STROKE_PAINT: "StrokePaint"
        });
        return Effect;
    }
};

//src/filter/effect/gaussianblureffect.js
/**
 * 高斯模糊效果封装
 */
_p[18] = {
    value: function(require, exports, module) {
        var Effect = _p.r(17), Utils = _p.r(12);
        return _p.r(11).createClass("GaussianblurEffect", {
            base: Effect,
            constructor: function(stdDeviation, input) {
                this.callBase(Effect.NAME_GAUSSIAN_BLUR);
                this.set("stdDeviation", Utils.getValue(stdDeviation, 1));
                this.set("in", Utils.getValue(input, Effect.INPUT_SOURCE_GRAPHIC));
            }
        });
    }
};

//src/filter/effect/offseteffect.js
/**
 * 偏移效果封装
 */
_p[19] = {
    value: function(require, exports, module) {
        var Effect = _p.r(17), Utils = _p.r(12);
        return _p.r(11).createClass("OffsetEffect", {
            base: Effect,
            constructor: function(dx, dy, input) {
                this.callBase(Effect.NAME_OFFSET);
                this.set("dx", Utils.getValue(dx, 0));
                this.set("dy", Utils.getValue(dy, 0));
                this.set("in", Utils.getValue(input, Effect.INPUT_SOURCE_GRAPHIC));
            }
        });
    }
};

//src/filter/effectcontainer.js
/*
 * Effect所用的container
 */
_p[20] = {
    value: function(require) {
        return _p.r(11).createClass("EffectContainer", {
            base: _p.r(30),
            addEffect: function(point, pos) {
                return this.addItem.apply(this, arguments);
            },
            prependEffect: function() {
                return this.prependItem.apply(this, arguments);
            },
            appendEffect: function() {
                return this.appendItem.apply(this, arguments);
            },
            removeEffect: function(pos) {
                return this.removeItem.apply(this, arguments);
            },
            addEffects: function() {
                return this.addItems.apply(this, arguments);
            },
            setEffects: function() {
                return this.setItems.apply(this, arguments);
            },
            getEffect: function() {
                return this.getItem.apply(this, arguments);
            },
            getEffects: function() {
                return this.getItems.apply(this, arguments);
            },
            getFirstEffect: function() {
                return this.getFirstItem.apply(this, arguments);
            },
            getLastEffect: function() {
                return this.getLastItem.apply(this, arguments);
            },
            handleAdd: function(effectItem, pos) {
                var count = this.getEffects().length, nextEffectItem = this.getItem(pos + 1);
                // 最后一个节点， 直接追加
                if (count === pos + 1) {
                    this.node.appendChild(effectItem.getNode());
                    return;
                }
                this.node.insertBefore(effectItem.getNode(), nextEffectItem.getNode());
            }
        });
    }
};

//src/filter/filter.js
/**
 * Filter 基类
 */
_p[21] = {
    value: function(require, exports, module) {
        var svg = _p.r(68);
        var Class = _p.r(11);
        var Filter = Class.createClass("Filter", {
            mixins: [ _p.r(20) ],
            constructor: function(x, y, width, height) {
                this.node = svg.createNode("filter");
                if (x !== undefined) {
                    this.set("x", x);
                }
                if (y !== undefined) {
                    this.set("y", y);
                }
                if (width !== undefined) {
                    this.set("width", width);
                }
                if (height !== undefined) {
                    this.set("height", height);
                }
            },
            getId: function() {
                return this.id;
            },
            setId: function(id) {
                this.node.id = id;
                return this;
            },
            set: function(key, value) {
                this.node.setAttribute(key, value);
                return this;
            },
            get: function(key) {
                return this.node.getAttribute(key);
            },
            getNode: function() {
                return this.node;
            }
        });
        var Shape = _p.r(61);
        Class.extendClass(Shape, {
            applyFilter: function(filter) {
                var filterId = filter.get("id");
                if (filterId) {
                    this.node.setAttribute("filter", "url(#" + filterId + ")");
                }
                return this;
            }
        });
        return Filter;
    }
};

//src/filter/gaussianblurfilter.js
/*
 * 高斯模糊滤镜
 */
_p[22] = {
    value: function(require, exports, module) {
        var GaussianblurEffect = _p.r(18);
        return _p.r(11).createClass("GaussianblurFilter", {
            base: _p.r(21),
            constructor: function(stdDeviation) {
                this.callBase();
                this.addEffect(new GaussianblurEffect(stdDeviation));
            }
        });
    }
};

//src/filter/projectionfilter.js
/*
 * 投影滤镜
 */
_p[23] = {
    value: function(require, exports, module) {
        var GaussianblurEffect = _p.r(18), Effect = _p.r(17), ColorMatrixEffect = _p.r(14), Color = _p.r(29), Utils = _p.r(12), CompositeEffect = _p.r(15), OffsetEffect = _p.r(19);
        return _p.r(11).createClass("ProjectionFilter", {
            base: _p.r(21),
            constructor: function(stdDeviation, dx, dy) {
                this.callBase();
                this.gaussianblurEffect = new GaussianblurEffect(stdDeviation, Effect.INPUT_SOURCE_ALPHA);
                this.gaussianblurEffect.set("result", "gaussianblur");
                this.addEffect(this.gaussianblurEffect);
                this.offsetEffect = new OffsetEffect(dx, dy, this.gaussianblurEffect);
                this.offsetEffect.set("result", "offsetBlur");
                this.addEffect(this.offsetEffect);
                this.colorMatrixEffect = new ColorMatrixEffect(ColorMatrixEffect.TYPE_MATRIX, this.offsetEffect);
                this.colorMatrixEffect.set("values", ColorMatrixEffect.MATRIX_ORIGINAL);
                this.colorMatrixEffect.set("result", "colorOffsetBlur");
                this.addEffect(this.colorMatrixEffect);
                this.compositeEffect = new CompositeEffect(CompositeEffect.OPERATOR_OVER, Effect.INPUT_SOURCE_GRAPHIC, this.colorMatrixEffect);
                this.addEffect(this.compositeEffect);
            },
            // 设置投影颜色
            setColor: function(color) {
                var matrix = null, originMatrix = null, colorValue = [];
                if (Utils.isString(color)) {
                    color = Color.parse(color);
                }
                if (!color) {
                    return this;
                }
                matrix = ColorMatrixEffect.MATRIX_EMPTY.split(" ");
                colorValue.push(color.get("r"));
                colorValue.push(color.get("g"));
                colorValue.push(color.get("b"));
                // rgb 分量更改
                for (var i = 0, len = colorValue.length; i < len; i++) {
                    matrix[i * 5 + 3] = colorValue[i] / 255;
                }
                // alpha 分量更改
                matrix[18] = color.get("a");
                this.colorMatrixEffect.set("values", matrix.join(" "));
                return this;
            },
            // 设置投影透明度
            setOpacity: function(opacity) {
                var matrix = this.colorMatrixEffect.get("values").split(" ");
                matrix[18] = opacity;
                this.colorMatrixEffect.set("values", matrix.join(" "));
                return this;
            },
            // 设置阴影偏移量
            setOffset: function(dx, dy) {
                this.setOffsetX(dx);
                this.setOffsetY(dy);
            },
            setOffsetX: function(dx) {
                this.offsetEffect.set("dx", dx);
            },
            setOffsetY: function(dy) {
                this.offsetEffect.set("dy", dy);
            },
            setDeviation: function(deviation) {
                this.gaussianblurEffect.set("stdDeviation", deviation);
            }
        });
    }
};

//src/graphic/bezier.js
/**
 * @fileOverview
 *
 * 贝塞尔曲线
 */
_p[24] = {
    value: function(require, exports, module) {
        /**
     * @class kity.Bezier
     * @mixins kity.PointContainer
     * @base kity.Path
     * @description 绘制和使用贝塞尔曲线。贝塞尔曲线作为一个贝塞尔点的容器，任何贝塞尔点的改变都会更改贝塞尔曲线的外观
     */
        return _p.r(11).createClass("Bezier", {
            mixins: [ _p.r(52) ],
            base: _p.r(47),
            /**
         * @constructor
         * @for kity.Bezier
         *
         * @grammar new kity.Bezier(bezierPoints)
         *
         * @param  {kity.BezierPoints[]} bezierPoints 贝塞尔点集合，每个元素应该是 {kity.BezierPoint} 类型
         *
         * @example
         *
         * ```js
         * var bezier = new kity.Bezier([
         *     new kity.BezierPoint(0, 0).setForward(100, 0),
         *     new kity.BezierPoint(100, 100).setBackward(100, 0)
         * ]);
         * ```
         */
            constructor: function(bezierPoints) {
                this.callBase();
                bezierPoints = bezierPoints || [];
                this.changeable = true;
                this.setBezierPoints(bezierPoints);
            },
            /**
         * @method getBezierPoints()
         * @for kity.Bezier
         * @description 返回当前贝塞尔曲线的贝塞尔点集合
         *
         * @grammar getBezierPoints() => {kity.BezierPoints[]}
         *
         */
            getBezierPoints: function() {
                return this.getPoints();
            },
            /**
         * @method setBezierPoints()
         * @for kity.Bezier
         * @description 设置当前贝塞尔曲线的贝塞尔点集合
         *
         * @grammar setBeizerPoints(bezierPoints) => {this}
         *
         * @param {kity.BezierPoint[]} bezierPoints 贝塞尔点集合
         */
            setBezierPoints: function(bezierPoints) {
                return this.setPoints(bezierPoints);
            },
            //当点集合发生变化时采取的动作
            onContainerChanged: function() {
                if (this.changeable) {
                    this.update();
                }
            },
            update: function() {
                var drawer = null, bezierPoints = this.getBezierPoints();
                //单独的一个点不画任何图形
                if (bezierPoints.length < 2) {
                    return;
                }
                drawer = this.getDrawer();
                drawer.clear();
                var vertex = bezierPoints[0].getVertex(), forward = null, backward = null;
                drawer.moveTo(vertex.x, vertex.y);
                for (var i = 1, len = bezierPoints.length; i < len; i++) {
                    vertex = bezierPoints[i].getVertex();
                    backward = bezierPoints[i].getBackward();
                    forward = bezierPoints[i - 1].getForward();
                    drawer.bezierTo(forward.x, forward.y, backward.x, backward.y, vertex.x, vertex.y);
                }
                return this;
            }
        });
    }
};

//src/graphic/bezierpoint.js
/**
 * @fileOverview
 *
 * 表示一个贝塞尔点
 */
_p[25] = {
    value: function(require, exports, module) {
        var ShapePoint = _p.r(64);
        var Vector = _p.r(74);
        /**
     * @class kity.BezierPoint
     *
     * @description 表示一个贝塞尔点
     *              一个贝塞尔点由顶点坐标（曲线经过的点）、前方控制点、后方控制点表示
     */
        var BezierPoint = _p.r(11).createClass("BezierPoint", {
            /**
         * @constructor
         * @for kity.BezierPoint
         *
         * @description 创建一个具有默认顶点坐标的贝塞尔点，两个控制点的坐标和顶点一致
         *
         * @param  {Number}  x        顶点的 x 坐标
         * @param  {Number}  y        顶点的 y 坐标
         * @param  {Boolean} isSmooth 指示当前贝塞尔点是否光滑，光滑会约束顶点和两个控制点共线
         */
            constructor: function(x, y, isSmooth) {
                //顶点
                this.vertex = new ShapePoint(x, y);
                //控制点
                this.forward = new ShapePoint(x, y);
                this.backward = new ShapePoint(x, y);
                //是否平滑
                this.setSmooth(isSmooth === undefined || isSmooth);
                this.setSymReflaction(true);
            },
            /**
         * @method clone()
         * @for kity.BezierPoint
         * @description 返回贝塞尔点的一份拷贝
         *
         * @grammar clone() => {kity.BezierPoint}
         */
            clone: function() {
                var newPoint = new BezierPoint(), tmp = null;
                tmp = this.getVertex();
                newPoint.setVertex(tmp.x, tmp.y);
                tmp = this.getForward();
                newPoint.setForward(tmp.x, tmp.y);
                tmp = this.getBackward();
                newPoint.setBackward(tmp.x, tmp.y);
                newPoint.setSymReflaction(this.isSymReflaction);
                newPoint.setSmooth(this.isSmooth());
                return newPoint;
            },
            /**
         * @method setVertex()
         * @for kity.BezierPoint
         * @description 设置贝塞尔点的顶点坐标，注意，控制点的坐标不会跟着变化。希望控制点的坐标跟着变化，请用 moveTo() 方法
         *
         * @grammar setVertex(x, y) => {this}
         *
         * @param {Number} x 顶点的 x 坐标
         * @param {Number} y 顶点的 y 坐标
         */
            setVertex: function(x, y) {
                this.vertex.setPoint(x, y);
                this.update();
                return this;
            },
            /**
         * @method moveTo()
         * @for kity.BezierPoint
         * @description 同步移动整个贝塞尔点，使顶点的移动到指定的坐标中。控制点的位置相对顶点坐标固定。
         *
         * @grammar moveTo() => {this}
         *
         * @param  {Number} x 顶点的目标 x 坐标
         * @param  {Number} y 顶点的目标 y 坐标
         *
         */
            moveTo: function(x, y) {
                var oldForward = this.forward.getPoint(), oldBackward = this.backward.getPoint(), oldVertex = this.vertex.getPoint(), //移动距离
                distance = {
                    left: x - oldVertex.x,
                    top: y - oldVertex.y
                };
                // 更新
                this.forward.setPoint(oldForward.x + distance.left, oldForward.y + distance.top);
                this.backward.setPoint(oldBackward.x + distance.left, oldBackward.y + distance.top);
                this.vertex.setPoint(x, y);
                this.update();
            },
            /**
         * @method setForward()
         * @for kity.BezierPoint
         * @description 设置前方控制点的位置，如果贝塞尔点光滑，后方控制点会跟着联动
         *
         * @grammar setForward(x, y) => {this}
         *
         * @param {Number} x 前方控制点的 x 坐标
         * @param {Number} y 前方控制点的 y 坐标
         */
            setForward: function(x, y) {
                this.forward.setPoint(x, y);
                //更新后置点
                if (this.smooth) {
                    this.updateAnother(this.forward, this.backward);
                }
                this.update();
                this.lastControlPointSet = this.forward;
                return this;
            },
            /**
         * @method setBackward()
         * @for kity.BezierPoint
         * @description 设置后方控制点的位置，如果贝塞尔点光滑，前方控制点会跟着联动
         *
         * @grammar setBackward(x, y) => {this}
         *
         * @param {Number} x 后方控制点的 x 坐标
         * @param {Number} y 后方控制点的 y 坐标
         */
            setBackward: function(x, y) {
                this.backward.setPoint(x, y);
                //更新前置点
                if (this.smooth) {
                    this.updateAnother(this.backward, this.forward);
                }
                this.update();
                this.lastControlPointSet = this.backward;
                return this;
            },
            /**
         * @method setSymReflaction()
         * @for kity.BezierPoint
         * @description 设定是否镜像两个控制点的位置
         *
         * @grammar setSymReflaction(value) => {this}
         *
         * @param {boolean} value 如果设置为 true，且贝塞尔点光滑，两个控制点离顶点的距离相等
         */
            setSymReflaction: function(value) {
                this.symReflaction = value;
                if (this.smooth) this.setSmooth(true);
                return this;
            },
            /**
         * @method isSymReflaction()
         * @for kity.BezierPoint
         * @description 当前贝塞尔点的两个控制点是否被镜像约束
         *
         * @grammar isSymReflaction() => {boolean}
         */
            isSymReflaction: function() {
                return this.symReflaction;
            },
            /**
         * @private
         *
         * 根据前方控制点或后方控制点更新另一方
         */
            updateAnother: function(p, q) {
                var v = this.getVertex(), pv = Vector.fromPoints(p.getPoint(), v), vq = Vector.fromPoints(v, q.getPoint());
                vq = pv.normalize(this.isSymReflaction() ? pv.length() : vq.length());
                q.setPoint(v.x + vq.x, v.y + vq.y);
                return this;
            },
            /**
         * @method setSmooth()
         * @for kity.BezierPoint
         * @description 设置贝塞尔点是否光滑，光滑会约束顶点和两个控制点共线
         *
         * @param {Boolean} isSmooth 设置为 true 让贝塞尔点光滑
         */
            setSmooth: function(isSmooth) {
                var lc;
                this.smooth = !!isSmooth;
                if (this.smooth && (lc = this.lastControlPointSet)) {
                    this.updateAnother(lc, lc == this.forward ? this.backward : this.forward);
                }
                return this;
            },
            /**
         * @method isSmooth()
         * @for kity.BezierPoint
         * @description 判断贝塞尔点是否光滑
         *
         * @grammar isSmooth() => {boolean}
         */
            isSmooth: function() {
                return this.smooth;
            },
            /**
         * @method getVertex()
         * @for kity.BezierPoint
         * @description 获得当前贝塞尔点的顶点
         *
         * @grammar getVertex() => {kity.ShapePoint}
         */
            getVertex: function() {
                return this.vertex.getPoint();
            },
            /**
         * @method getForward()
         * @for kity.BezierPoint
         * @description 获得当前贝塞尔点的前方控制点
         *
         * @grammar getForward() => {kity.ShapePoint}
         */
            getForward: function() {
                return this.forward.getPoint();
            },
            /**
         * @method getBackward()
         * @for kity.BezierPoint
         * @description 获得当前贝塞尔点的后方控制点
         *
         * @grammar getBackward() => {kity.ShapePoint}
         */
            getBackward: function() {
                return this.backward.getPoint();
            },
            /**
         * @private
         *
         * 联动更新相关的贝塞尔曲线
         */
            update: function() {
                if (!this.container) {
                    return this;
                }
                //新增参数 this， 把当前引起变化的点传递过去， 以便有需要的地方可以获取到引起变化的源
                if (this.container.update) this.container.update(this);
            }
        });
        return BezierPoint;
    }
};

//src/graphic/box.js
/**
 * @fileOverview
 *
 * 表示一个矩形区域
 */
_p[26] = {
    value: function(require, exports, module) {
        /**
     * @class kity.Box
     * @description 表示一个矩形区域
     */
        var Box = _p.r(11).createClass("Box", {
            /**
         * @constructor
         * @for kity.Box
         *
         * @grammar new kity.Box(x, y, width, height)
         * @grammar new kity.Box(box)
         *
         * @param  {Number} x|box.x      矩形区域的 x 坐标
         * @param  {Number} y|box.y      矩形区域的 y 坐标
         * @param  {Number} width|box.width   矩形区域的宽度
         * @param  {Number} height|box.height 矩形区域的高度
         *
         * @example
         *
         * ```js
         * var box = new kity.Box(10, 20, 50, 50);
         * var box2 = new kity.Box({x: 10, y: 20, width: 50, height: 50});
         * ```
         */
            constructor: function(x, y, width, height) {
                var box = arguments[0];
                if (box && typeof box === "object") {
                    x = box.x;
                    y = box.y;
                    width = box.width;
                    height = box.height;
                }
                if (width < 0) {
                    x -= width = -width;
                }
                if (height < 0) {
                    y -= height = -height;
                }
                /**
             * @property x
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的 x 坐标
             */
                this.x = x || 0;
                /**
             * @property y
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的 y 坐标
             */
                this.y = y || 0;
                /**
             * @property width
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的宽度
             */
                this.width = width || 0;
                /**
             * @property height
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的高度
             */
                this.height = height || 0;
                /**
             * @property left
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的最左侧坐标，等价于 x 的值
             */
                this.left = this.x;
                /**
             * @property right
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的最右侧坐标，等价于 x + width 的值
             */
                this.right = this.x + this.width;
                /**
             * @property top
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的最上侧坐标，等价于 y 的值
             */
                this.top = this.y;
                /**
             * @property bottom
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的最下侧坐标，等价于 y + height 的值
             */
                this.bottom = this.y + this.height;
                /**
             * @property cx
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的中心 x 坐标
             */
                this.cx = this.x + this.width / 2;
                /**
             * @property cy
             * @for kity.Box
             * @type {Number}
             * @readOnly
             * @description 矩形区域的中心 y 坐标
             */
                this.cy = this.y + this.height / 2;
            },
            /**
         * @method getRangeX()
         * @for kity.Box
         * @description 获得矩形区域的 x 值域
         *
         * @grammar getRangeX() => {Number[]}
         *
         * @example
         *
         * var box = new kity.Box(10, 10, 30, 50);
         * console.log(box.getRangeX()); // [10, 40]
         */
            getRangeX: function() {
                return [ this.left, this.right ];
            },
            /**
         * @method getRangeY()
         * @for kity.Box
         * @description 获得矩形区域的 y 值域
         *
         * @grammar getRangeY() => {Number[]}
         *
         * @example
         *
         * var box = new kity.Box(10, 10, 30, 50);
         * console.log(box.getRangeY()); // [10, 60]
         */
            getRangeY: function() {
                return [ this.top, this.bottom ];
            },
            /**
         * @method merge()
         * @for kity.Box
         * @description 把当前矩形区域和指定的矩形区域合并，返回一个新的矩形区域（即包含两个源矩形区域的最小矩形区域）
         *
         * @grammar merge(another) => {kity.Box}
         * @param  {kity.Box} another 要合并的矩形区域
         *
         * @example
         *
         * ```js
         * var box1 = new kity.Box(10, 10, 50, 50);
         * var box2 = new kity.Box(30, 30, 50, 50);
         * var box3 = box1.merge(box2);
         * console.log(box3.valueOf()); // [10, 10, 70, 70]
         * ```
         */
            merge: function(another) {
                if (this.isEmpty()) {
                    return new Box(another.x, another.y, another.width, another.height);
                }
                var left = Math.min(this.left, another.left), right = Math.max(this.right, another.right), top = Math.min(this.top, another.top), bottom = Math.max(this.bottom, another.bottom);
                return new Box(left, top, right - left, bottom - top);
            },
            /**
         * @method intersect()
         * @for kity.Box
         * @description 求当前矩形区域和指定的矩形区域重叠的矩形区域
         *
         * @grammar intersect(another) => {kity.Box}
         * @param  {kity.Box} another 要求重叠的矩形区域
         *
         * @example
         *
         * ```js
         * var box1 = new kity.Box(10, 10, 50, 50);
         * var box2 = new kity.Box(30, 30, 50, 50);
         * var box3 = box1.intersect(box2);
         * console.log(box3.valueOf()); // [30, 30, 20, 20]
         * ```
         */
            intersect: function(another) {
                if (!another instanceof Box) {
                    another = new Box(another);
                }
                var left = Math.max(this.left, another.left), right = Math.min(this.right, another.right), top = Math.max(this.top, another.top), bottom = Math.min(this.bottom, another.bottom);
                if (left > right || top > bottom) return new Box();
                return new Box(left, top, right - left, bottom - top);
            },
            /**
         * @method expand()
         * @for kity.Box
         * @description 扩展（或收缩）当前的盒子，返回新的盒子
         *
         * @param {Number} top
         *     矩形区域的上边界往上扩展的值；如果是负数，则上边界往下收缩
         *
         * @param {Number} right
         *     [Optional] 矩形区域的右边界往右拓展的值；
         *                如果是负数，则右边界往左收缩；
         *                如果不设置该值，使用和 top 同样的值。
         *
         * @param {Number} bottom
         *     [Optional] 矩形区域的下边界往下拓展的值；
         *                如果是负数，则下边界往上收缩；
         *                如果不设置该值，使用和 top 同样的值。
         *
         * @param {Number} left
         *     [Optional] 矩形区域的左边界往左拓展的值;
         *                如果是负数，则左边界往右收缩;
         *                如果不设置该值，使用和 right 同样的值。
         *
         * @example
         *
         * ```js
         * var box = new kity.Box(10, 10, 20, 20);
         * var box1 = box.expand(10); // [0, 0, 40, 40]
         * var box2 = box.expand(10, 20); // [0, -10, 40, 60]
         * var box3 = box.expand(1, 2, 3, 4); // [9, 8, 24, 26]
         * ```
         */
            expand: function(top, right, bottom, left) {
                if (arguments.length < 1) {
                    return new Box(this);
                }
                if (arguments.length < 2) {
                    right = top;
                }
                if (arguments.length < 3) {
                    bottom = top;
                }
                if (arguments.length < 4) {
                    left = right;
                }
                var x = this.left - left, y = this.top - top, width = this.width + right + left, height = this.height + top + bottom;
                return new Box(x, y, width, height);
            },
            /**
         * @method valueOf()
         * @for kity.Box
         * @description 返回当前盒子的数组表示
         *
         * @grammar valueOf() => {Number[]}
         *
         * @example
         *
         * ```js
         * var box = new kity.Box(0, 0, 200, 50);
         * console.log(box.valueOf()); // [0, 0, 200, 50]
         * ```
         */
            valueOf: function() {
                return [ this.x, this.y, this.width, this.height ];
            },
            /**
         * @method toString()
         * @for kity.Box
         * @description 返回当前盒子的字符串表示
         *
         * @grammar toString() => {String}
         *
         * @example
         *
         * ```js
         * var box = new kity.Box(0, 0, 200, 50);
         * console.log(box.toString()); // "0 0 200 50"
         */
            toString: function() {
                return this.valueOf().join(" ");
            },
            /**
         * @method isEmpty()
         * @for kity.Box
         * @description 判断当前盒子是否具有尺寸（面积大
         *
         * @grammar isEmpty() => {boolean}
         *
         * @example
         * ```js
         * var box = new kity.Box(0, 0, 0, 100000);
         * console.log(box.isEmpty()); // true
         * ```
         */
            isEmpty: function() {
                return !this.width || !this.height;
            }
        });
        /**
     * @method parse()
     * @static
     * @for kity.Box
     * @description 解析一个字符串或数组为 kity.Box 对象
     *
     * @grammar kity.Box.parse(any) => {kity.Box}
     *
     * @param  {Number[]|String} any 要解析的字符串或数组
     *
     * @example
     *
     * ```js
     * console.log(kity.Box.parse('0 0 100 200'));
     * console.log(kity.Box.parse([0, 0, 100, 200]));
     * ```
     */
        Box.parse = function(any) {
            if (typeof any == "string") {
                return Box.parse(any.split(/[\s,]+/).map(parseFloat));
            }
            if (any instanceof Array) {
                return new Box(any[0], any[1], any[2], any[3]);
            }
            if ("x" in any) return new Box(any);
            return null;
        };
        return Box;
    }
};

//src/graphic/circle.js
/**
 * @fileOverview
 *
 * 绘制和使用圆形
 */
_p[27] = {
    value: function(require, exports, module) {
        /**
     * @class kity.Circle
     * @base kity.Ellipse
     * @description 表示一个圆形
     */
        return _p.r(11).createClass("Circle", {
            base: _p.r(33),
            /**
         * @constructor
         * @for kity.Circle
         *
         * @grammar new kity.Circle(radius, cx, cy)
         *
         * @param  {Number} radius 半径
         * @param  {Number} cx     圆心 x 坐标
         * @param  {Number} cy     圆心 y 坐标
         */
            constructor: function(radius, cx, cy) {
                this.callBase(radius, radius, cx, cy);
            },
            /**
         * @method
         * @for kity.Circle
         * @description 获取圆形的半径
         *
         * @grammar getRadius() => {Number}
         */
            getRadius: function() {
                return this.getRadiusX();
            },
            /**
         * @method
         * @for kity.Circle
         * @description 设置圆形的半径
         *
         * @grammar setRadius() => {this}
         *
         * @param {Number} radius 半径大小
         */
            setRadius: function(radius) {
                return this.callBase(radius, radius);
            }
        });
    }
};

//src/graphic/clip.js
/**
 * @fileOverview
 *
 * 支持图形裁切
 */
_p[28] = {
    value: function(require, exports, module) {
        var Class = _p.r(11);
        var Shape = _p.r(61);
        /**
     * @class kity.Clip
     * @base kity.Resource
     * @mixins kity.ShapeContainer
     *
     * @description 创建图形裁切，用于裁切目标图形
     */
        var Clip = Class.createClass("Clip", {
            base: Shape,
            mixins: [ _p.r(62) ],
            /**
         * @constructor
         * @for kity.Clip
         *
         * @grammar new kity.Clip(paper)
         *
         * @param  {kity.Paper} paper 资源所属的文档
         *
         * @example
         *
         * ```js
         * var circle = paper.put(new kity.Circle(100).fill('yellow'));
         * var clip = new kity.Clip(paper);
         * clip.addShape(new kity.Circle(100, 50, 0));
         * clip.clip(circle);
         * ```
         */
            constructor: function(paper) {
                this.callBase("clipPath", paper);
            },
            /**
         * @method clip()
         * @for kity.Clip
         * @description 将裁切应用到指定的图形上，应用之后，目标图形将显示与裁切形状重合的部分
         *
         * @grammar clip(shape) => {this}
         *
         * @param  {kity.Shape} shape 要应用裁切的图形
         */
            clip: function(shape) {
                shape.getNode().setAttribute("clip-path", this);
                return this;
            }
        });
        Class.extendClass(Shape, {
            /**
         * @method clipWidth()
         * @for kity.Shape
         *
         * @grammar clipWidth(clip) => {this}
         *
         * @param {kity.Clip|kity.Shape} clip 要用于裁切当前图形的图形；
         *     如果 clip 本身是一个裁切对象（kity.Clip 类型），则直接裁切；
         *     否则将创建新的裁切包含给定的图形，然后对当前图形进行裁切
         *
         * @example
         *
         * ```js
         * var circle = paper.put(new kity.Circle(100));
         * var rect = paper.put(new kity.Rect(100, 100, -100, 0));
         *
         * circle.clipWidth(rect);
         * ```
         */
            clipWith: function(clip) {
                if (clip instanceof Shape) {
                    clip = new Clip(clip.getPaper()).addShape(clip);
                }
                clip.clip(this);
                return this;
            }
        });
        return Clip;
    }
};

//src/graphic/color.js
/**
 * @fileOverview
 *
 * 提供颜色支持
 */
_p[29] = {
    value: function(require, exports, module) {
        var Utils = _p.r(12), StandardColor = _p.r(65), ColorUtils = {}, /**
         * @class kity.Color
         * @description 表示一个颜色
         */
        Color = _p.r(11).createClass("Color", {
            /**
             * @constructor
             * @for kity.Color
             *
             * @grammar new kity.Color(r, g, b)
             * @grammar new kity.Color(r, g, b, a)
             * @grammar new kity.Color(colorString)
             *
             * @param {Number} r 红色分量，取值 0 - 255
             * @param {Number} g 绿色分量，取值 0 - 255
             * @param {Number} b 蓝色分量，取值 0 - 255
             * @param {Number} a 透明度（可选），取值 0 - 100
             * @param {String} colorString 一个代表颜色的字符串，可以是：
             *     熟知颜色表：如 'red', 'yellow'
             *     HEX 表示：如 '#368', '#123456'
             *     RGB 表示：如 'RGB(200, 200, 0)', 'RGBA(200, 200, 200, .5)'
             *     HSL 表示：如 'HSL(100, 60%, 80%)', 'HSLA(100, 60%, 80%, .5)'
             */
            constructor: function() {
                var colorValue = null;
                //parse构造
                if (typeof arguments[0] === "string") {
                    colorValue = ColorUtils.parseToValue(arguments[0]);
                    //解析失败
                    if (colorValue === null) {
                        colorValue = {
                            r: 0,
                            g: 0,
                            b: 0,
                            h: 0,
                            s: 0,
                            l: 0,
                            a: 1
                        };
                    }
                } else {
                    colorValue = {
                        r: arguments[0] | 0,
                        g: arguments[1] | 0,
                        b: arguments[2] | 0,
                        //alpha 默认为1
                        a: arguments[3] === undefined ? 1 : parseFloat(arguments[3])
                    };
                    colorValue = ColorUtils.overflowFormat(colorValue);
                    //获取hsl分量
                    colorValue = Utils.extend(colorValue, ColorUtils.rgbValueToHslValue(colorValue));
                }
                this._color = colorValue;
            },
            /**
             * @method set()
             * @for kity.Color
             *
             * @description 设置当前颜色某个分量的值
             *
             * @grammar set(name, value) => {this}
             *
             * @param {string} name  要设置的颜色通道的名称
             *     r: 红色（Red），取值范围 [0, 255]
             *     g: 绿色（Green），取值范围 [0, 255]
             *     b: 蓝色（Blue），取值范围 [0, 255]
             *     a: 透明度（Alpha），取值范围 [0, 1]
             *     h: 色环角度（Hue），取值范围 [0, 359]
             *     s: 饱和度（Saturation），取值范围 [0, 100]
             *     l: 亮度（Lightness），取值范围 [0, 100]
             *     r、g、b 值和 h、s、l 值会联动修改
             * @param {number} value 要设置的值
             */
            set: function(name, value) {
                var values = null;
                //设置的值非法
                if (!Color._MAX_VALUE[name]) {
                    throw new Error("Color set(): Illegal parameter");
                }
                if (name !== "a") {
                    value = Math.floor(value);
                }
                if (name == "h") {
                    value = (value + 360) % 360;
                }
                this._color[name] = Math.max(Color._MIN_VALUE[name], Math.min(Color._MAX_VALUE[name], value));
                if ("rgb".indexOf(name) !== -1) {
                    this._color = Utils.extend(this._color, ColorUtils.rgbValueToHslValue(this._color));
                } else if ("hsl".indexOf(name) !== -1) {
                    this._color = Utils.extend(this._color, ColorUtils.hslValueToRGBValue(this._color));
                }
                return this;
            },
            /**
             * @method inc()
             *
             * @description 返回新的颜色，表示当前颜色增加指定通道的值之后的颜色
             *
             * @grammar inc(name, value) => {this}
             *
             * @param  {string} name  要增加的通道的名称，具体含义请查看 set 方法
             * @param  {number} value 增量值
             */
            inc: function(name, value) {
                value = this.get(name) + value;
                if (name == "h") {
                    value = (value + 360) % 360;
                } else {
                    value = Math.min(Color._MAX_VALUE[name], value);
                    value = Math.max(Color._MIN_VALUE[name], value);
                }
                return this.clone().set(name, value);
            },
            /**
             * @method dec()
             * @for kity.Color
             *
             * @description 返回新的颜色，表示当前颜色减少指定通道的值之后的颜色
             *
             * @grammar dec(name, value) => {this}
             *
             * @param  {string} name  要减少值的通道的名称，具体含义请查看 set 方法
             * @param  {number} value 减量值
             */
            dec: function(name, value) {
                return this.inc(name, -value);
            },
            /**
             * @method clone()
             * @for kity.Color
             *
             * @description 返回当前颜色的一个拷贝
             *
             * @grammar clone() => {kity.Color}
             */
            clone: function() {
                return new Color(this.toRGBA());
            },
            /**
             * @method get()
             * @for kity.Color
             *
             * @description 返回当前颜色指定的分量
             *
             * @grammar get() => {number}
             */
            get: function(name) {
                if (!Color._MAX_VALUE[name]) {
                    return null;
                }
                return this._color[name];
            },
            getValues: function() {
                return Utils.clone(this._color);
            },
            /**
             * @method valueOf()
             * @for kity.Color
             *
             * @description 返回当前颜色的一个字面量表示
             *
             * @return {plain} 颜色字面量，其结构为：
             *     {
             *         r: 0,
             *         g: 0,
             *         b: 0,
             *         a: 0,
             *         h: 0,
             *         s: 0,
             *         l: 0
             *     }
             */
            valueOf: function() {
                return this.getValues();
            },
            /**
             * @method toRGB()
             * @for kity.Color
             *
             * @description 返回当前颜色的 RGB 表示，如果颜色有透明度，将抛弃透明度属性（想要保留请使用 toRGBA()）方法。
             *
             * @grammar toRGB() => {string}
             */
            toRGB: function() {
                return ColorUtils.toString(this._color, "rgb");
            },
            /**
             * @method toRGBA()
             * @for kity.Color
             *
             * @description 返回当前颜色的 RGBA 表示
             *
             * @grammar toRGBA() => {string}
             */
            toRGBA: function() {
                return ColorUtils.toString(this._color, "rgba");
            },
            /**
             * @method toHEX()
             * @for kity.Color
             *
             * @description 返回当前颜色的 HEX 表示，如果颜色有透明度，将抛弃透明度属性（想要保留请使用 toRGBA()）方法。
             *
             * @grammar toHEX() => {string}
             */
            toHEX: function() {
                return ColorUtils.toString(this._color, "hex");
            },
            /**
             * @method toHSL()
             * @for kity.Color
             *
             * @description 返回当前颜色的 HSL 表示，如果颜色有透明度，将抛弃透明度属性（想要保留请使用 toHSLA()）方法。
             *
             * @grammar toHSL() => {string}
             */
            toHSL: function() {
                return ColorUtils.toString(this._color, "hsl");
            },
            /**
             * @method toHSLA()
             * @for kity.Color
             *
             * @description 返回当前颜色的 HSLA 表示
             *
             * @grammar toHSLA() => {string}
             */
            toHSLA: function() {
                return ColorUtils.toString(this._color, "hsla");
            },
            /**
             * @method toString()
             * @for kity.Color
             *
             * @description 返回当前颜色的 RGB 或 RGBA 表示，如果颜色有透明度，将使用 RGBA 形式，否则是 RGB 形式
             * @grammar toString() => {string}
             */
            toString: function() {
                if (this._color.a === 1) {
                    return this.toRGB();
                }
                return this.toRGBA();
            }
        });
        //Color 静态方法
        Utils.extend(Color, {
            //各分量可表示的最大值
            _MAX_VALUE: {
                r: 255,
                g: 255,
                b: 255,
                h: 360,
                s: 100,
                l: 100,
                a: 1
            },
            //各分量最小值
            _MIN_VALUE: {
                r: 0,
                g: 0,
                b: 0,
                h: 0,
                s: 0,
                l: 0,
                a: 0
            },
            //分量常量
            R: "r",
            G: "g",
            B: "b",
            H: "h",
            S: "s",
            L: "l",
            A: "a",
            /**
         * @method parse()
         * @static
         * @for kity.Color
         *
         * @description 解析一个颜色字符串为 kity.Color 对象
         *
         * @grammar kity.Color.parse(valStr)
         *
         * @param  {string} valStr 一个代表颜色的字符串，可以是：
         *     熟知颜色表：如 'red', 'yellow'
         *     HEX 表示：如 '#368', '#123456'
         *     RGB 表示：如 'RGB(200, 200, 0)', 'RGBA(200, 200, 200, .5)'
         *     HSL 表示：如 'HSL(100, 60%, 80%)', 'HSLA(100, 60%, 80%, .5)'
         */
            parse: function(valStr) {
                var rgbValue;
                if (Utils.isString(valStr)) {
                    rgbValue = ColorUtils.parseToValue(valStr);
                }
                if (Utils.isObject(valStr) && "r" in valStr) {
                    rgbValue = valStr;
                }
                //解析失败， 返回一个默认color实例
                if (rgbValue === null) {
                    return new Color();
                }
                return new Color(rgbValue.r, rgbValue.g, rgbValue.b, rgbValue.a);
            },
            /**
         * @method createHSL()
         * @for kity.Color
         * @static
         *
         * @description 创建一个 HSL 颜色
         *
         * @grammar kity.Color.createHSL(h, s, l) => {kity.Color}
         *
         * @param  {number} h 色环（Hue）分量值，取值范围 [0, 359]
         * @param  {number} s 饱和度（Saturation）分量值，取值范围 [0, 100]
         * @param  {number} l 亮度（Lighteness）分量值，取值范围 [0, 100]
         */
            createHSL: function(h, s, l) {
                return Color.createHSLA(h, s, l, 1);
            },
            /**
         * @method createHSLA()
         * @for kity.Color
         * @static
         *
         * @description 创建一个 HSLA 颜色
         *
         * @grammar kity.Color.createHSLA(h, s, l, a) => {kity.Color}
         *
         * @param  {number} h 色环（Hue）分量值，取值范围 [0, 359]
         * @param  {number} s 饱和度（Saturation）分量值，取值范围 [0, 100]
         * @param  {number} l 亮度（Lighteness）分量值，取值范围 [0, 100]
         * @param  {number} a 透明度（Alpha）分量值，取值范围 [0, 1]
         */
            createHSLA: function(h, s, l, a) {
                var colorValue = null;
                s += "%";
                l += "%";
                colorValue = [ "hsla(" + h, s, l, a + ")" ];
                return Color.parse(colorValue.join(", "));
            },
            /**
         * @method createRGB()
         * @for kity.Color
         * @static
         *
         * @description 创建一个 RGB 颜色
         *
         * @grammar kity.Color.createRGB(r, g, b) => {kity.Color}
         *
         * @param  {number} r 红色（Red）分量值，取值范围 [0, 255]
         * @param  {number} g 绿色（Green）分量值，取值范围 [0, 255]
         * @param  {number} b 蓝色（Blue）分量值，取值范围 [0, 255]
         */
            createRGB: function(r, g, b) {
                return Color.createRGBA(r, g, b, 1);
            },
            /**
         * @method createRGBA()
         * @for kity.Color
         * @static
         *
         * @description 创建一个 RGBA 颜色
         *
         * @grammar kity.Color.createRGBA(r, g, b, a) => {kity.Color}
         *
         * @param  {number} r 红色（Red）分量值，取值范围 [0, 255]
         * @param  {number} g 绿色（Green）分量值，取值范围 [0, 255]
         * @param  {number} b 蓝色（Blue）分量值，取值范围 [0, 255]
         * @param  {number} a 透明度（Alpha）分量值，取值范围 [0, 1]
         */
            createRGBA: function(r, g, b, a) {
                return new Color(r, g, b, a);
            }
        });
        //内部工具对象
        Utils.extend(ColorUtils, {
            parseToValue: function(valStr) {
                var rgbaValue = {};
                /* 优先检测在调色板中是否有对应的颜色 */
                valStr = StandardColor.EXTEND_STANDARD[valStr] || StandardColor.COLOR_STANDARD[valStr] || valStr;
                /* 颜色转换 */
                //hex格式
                if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(valStr)) {
                    rgbaValue = ColorUtils.hexToValue(valStr);
                } else if (/^(rgba?)/i.test(valStr)) {
                    rgbaValue = ColorUtils.rgbaToValue(valStr);
                } else if (/^(hsla?)/i.test(valStr)) {
                    rgbaValue = ColorUtils.hslaToValue(valStr);
                } else {
                    return null;
                }
                return ColorUtils.overflowFormat(rgbaValue);
            },
            hexToValue: function(hexStr) {
                var result = {}, keys = [ "r", "g", "b" ];
                if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(hexStr)) {
                    hexStr = RegExp.$1.split("");
                    Utils.each(keys, function(key, index) {
                        if (hexStr.length === 3) {
                            result[key] = ColorUtils.toNumber(hexStr[index] + hexStr[index]);
                        } else {
                            result[key] = ColorUtils.toNumber(hexStr[index * 2] + hexStr[index * 2 + 1]);
                        }
                    });
                    //转换出hsl值
                    result = Utils.extend(result, ColorUtils.rgbValueToHslValue(result));
                    result.a = 1;
                    return result;
                }
                return null;
            },
            rgbaToValue: function(rgbaStr) {
                var result = {}, hasAlpha = false, keys = [ "r", "g", "b" ];
                if (/^(rgba?)/i.test(rgbaStr)) {
                    hasAlpha = RegExp.$1.length === 4;
                    rgbaStr = rgbaStr.replace(/^rgba?/i, "").replace(/\s+/g, "").replace(/[^0-9,.]/g, "").split(",");
                    Utils.each(keys, function(key, index) {
                        result[key] = rgbaStr[index] | 0;
                    });
                    //转换出hsl值
                    result = Utils.extend(result, ColorUtils.rgbValueToHslValue(result));
                    result.a = hasAlpha ? parseFloat(rgbaStr[3]) : 1;
                    return result;
                }
                return null;
            },
            hslaToValue: function(hslaStr) {
                var result = {}, hasAlpha = false;
                if (/^(hsla?)/i.test(hslaStr)) {
                    hasAlpha = RegExp.$1.length === 4;
                    hslaStr = hslaStr.replace(/^hsla?/i, "").replace(/\s+/g, "").replace(/[^0-9,.]/g, "").split(",");
                    //记录hsl值
                    result.h = hslaStr[0] | 0;
                    result.s = hslaStr[1] | 0;
                    result.l = hslaStr[2] | 0;
                    //转换出rgb值
                    result = Utils.extend(result, ColorUtils.hslValueToRGBValue(result));
                    //hsl值转换为rgb值
                    result = ColorUtils.hslValueToRGBValue(result);
                    result.a = hasAlpha ? parseFloat(hslaStr[3]) : 1;
                    return result;
                }
                return null;
            },
            //hsl值对象转换为rgb值对象
            hslValueToRGBValue: function(hslValue) {
                function trans(v1, v2, vH) {
                    if (vH < 0) {
                        vH += 1;
                    } else if (vH > 1) {
                        vH -= 1;
                    }
                    if (6 * vH < 1) {
                        return v1 + (v2 - v1) * 6 * vH;
                    } else if (2 * vH < 1) {
                        return v2;
                    } else if (3 * vH < 2) {
                        return v1 + (v2 - v1) * ((2 / 3 - vH) * 6);
                    }
                    return v1;
                }
                var q = null, p = null, result = {};
                hslValue = Utils.extend({}, hslValue);
                hslValue.h = hslValue.h / 360;
                hslValue.s = hslValue.s / 100;
                hslValue.l = hslValue.l / 100;
                //分量计算
                if (hslValue.s === 0) {
                    result.r = result.g = result.b = hslValue.l;
                } else {
                    if (hslValue.l < .5) {
                        q = hslValue.l * (1 + hslValue.s);
                    } else {
                        q = hslValue.l + hslValue.s - hslValue.l * hslValue.s;
                    }
                    p = 2 * hslValue.l - q;
                    result.r = trans(p, q, hslValue.h + 1 / 3);
                    result.g = trans(p, q, hslValue.h);
                    result.b = trans(p, q, hslValue.h - 1 / 3);
                }
                result.r = Math.min(Math.round(result.r * 255), 255);
                result.g = Math.min(Math.round(result.g * 255), 255);
                result.b = Math.min(Math.round(result.b * 255), 255);
                return result;
            },
            //rgb值对象转换为hsl值对象
            rgbValueToHslValue: function(rgbValue) {
                var max = null, min = null, result = {};
                rgbValue = Utils.extend({}, rgbValue);
                rgbValue.r = rgbValue.r / 255;
                rgbValue.g = rgbValue.g / 255;
                rgbValue.b = rgbValue.b / 255;
                max = Math.max(rgbValue.r, rgbValue.g, rgbValue.b);
                min = Math.min(rgbValue.r, rgbValue.g, rgbValue.b);
                //h分量计算
                if (max === min) {
                    result.h = 0;
                } else if (max === rgbValue.r) {
                    if (rgbValue.g >= rgbValue.b) {
                        result.h = 60 * (rgbValue.g - rgbValue.b) / (max - min);
                    } else {
                        result.h = 60 * (rgbValue.g - rgbValue.b) / (max - min) + 360;
                    }
                } else if (max === rgbValue.g) {
                    result.h = 60 * (rgbValue.b - rgbValue.r) / (max - min) + 120;
                } else if (max === rgbValue.b) {
                    result.h = 60 * (rgbValue.r - rgbValue.g) / (max - min) + 240;
                }
                //l分量计算
                result.l = (max + min) / 2;
                //s分量计算
                if (result.l === 0 || max === min) {
                    result.s = 0;
                } else if (result.l > 0 && result.l <= .5) {
                    result.s = (max - min) / (max + min);
                } else {
                    result.s = (max - min) / (2 - max - min);
                }
                //格式化hsl结果
                result.h = Math.round(result.h);
                result.s = Math.round(result.s * 100);
                result.l = Math.round(result.l * 100);
                return result;
            },
            toString: function(colorValue, type) {
                var vals = [];
                colorValue = Utils.extend({}, colorValue);
                if (type.indexOf("hsl") !== -1) {
                    colorValue.s += "%";
                    colorValue.l += "%";
                }
                if (type !== "hex") {
                    Utils.each(type.split(""), function(key) {
                        vals.push(colorValue[key]);
                    });
                    return (type + "(" + vals.join(", ") + ")").toLowerCase();
                } else {
                    vals.push(ColorUtils.toHexValue(+colorValue.r));
                    vals.push(ColorUtils.toHexValue(+colorValue.g));
                    vals.push(ColorUtils.toHexValue(+colorValue.b));
                    return ("#" + vals.join("")).toLowerCase();
                }
            },
            //16进制的2个数字转化为10进制， 如果转化失败， 返回0
            toNumber: function(value) {
                return Number("0x" + value) | 0;
            },
            toHexValue: function(value) {
                var result = value.toString(16);
                return result.length === 1 ? "0" + result : result;
            },
            //溢出控制
            overflowFormat: function(value) {
                var tmpValue = Utils.extend({}, value), keys = "rgba";
                Utils.each(keys.split(""), function(key) {
                    if (!tmpValue.hasOwnProperty(key)) {
                        return;
                    }
                    //上溢出
                    tmpValue[key] = Math.min(Color._MAX_VALUE[key], tmpValue[key]);
                    //下溢出
                    tmpValue[key] = Math.max(Color._MIN_VALUE[key], tmpValue[key]);
                });
                return tmpValue;
            }
        });
        return Color;
    }
};

//src/graphic/container.js
_p[30] = {
    value: function(require, exports, module) {
        function itemRemove() {
            this.container.removeItem(this);
            return this;
        }
        return _p.r(11).createClass("Container", {
            getItems: function() {
                return this.items || (this.items = []);
            },
            getItem: function(index) {
                return this.getItems()[index];
            },
            getFirstItem: function() {
                return this.getItem(0);
            },
            getLastItem: function() {
                return this.getItem(this.getItems().length - 1);
            },
            indexOf: function(item) {
                return this.getItems().indexOf(item);
            },
            eachItem: function(fn) {
                var items = this.getItems(), length = items.length, i;
                for (i = 0; i < length; i++) {
                    fn.call(this, i, items[i]);
                }
                return this;
            },
            addItem: function(item, pos, noEvent) {
                var items = this.getItems(), length = items.length;
                if (~items.indexOf(item)) {
                    return this;
                }
                if (!(pos >= 0 && pos < length)) {
                    pos = length;
                }
                items.splice(pos, 0, item);
                if (typeof item === "object") {
                    item.container = this;
                    item.remove = itemRemove;
                }
                this.handleAdd(item, pos);
                if (!noEvent) {
                    this.onContainerChanged("add", [ item ]);
                }
                return this;
            },
            addItems: function(items) {
                for (var i = 0, l = items.length; i < l; i++) {
                    this.addItem(items[i], -1, true);
                }
                this.onContainerChanged("add", items);
                return this;
            },
            setItems: function(items) {
                return this.clear().addItems(items);
            },
            appendItem: function(item) {
                return this.addItem(item);
            },
            prependItem: function(item) {
                return this.addItem(item, 0);
            },
            removeItem: function(pos, noEvent) {
                if (typeof pos !== "number") {
                    return this.removeItem(this.indexOf(pos));
                }
                var items = this.getItems(), length = items.length, item = items[pos];
                if (item === undefined) {
                    return this;
                }
                items.splice(pos, 1);
                if (item.container) {
                    delete item.container;
                }
                if (item.remove) {
                    delete item.remove;
                }
                this.handleRemove(item, pos);
                if (!noEvent) {
                    this.onContainerChanged("remove", [ item ]);
                }
                return this;
            },
            clear: function() {
                var removed = [];
                var item;
                while (item = this.getFirstItem()) {
                    removed.push(item);
                    this.removeItem(0, true);
                }
                this.onContainerChanged("remove", removed);
                return this;
            },
            onContainerChanged: function(type, items) {},
            handleAdd: function(item, index) {},
            handleRemove: function(item, index) {}
        });
    }
};

//src/graphic/curve.js
/*
 * 曲线
 * */
_p[31] = {
    value: function(require, exports, module) {
        var Utils = _p.r(12), CurveUtil = {
            /*
             * 获取由两个以上的点组成的曲线的平移线
             * @param points 曲线上的点的集合， 集合中的点的数量必须大于2
             * @return 平移线数组
             */
            getCurvePanLines: function(points, smoothFactor) {
                //计算原始点的中点坐标
                var centerPoints = CurveUtil.getCenterPoints(points), //注意：计算中点连线的中点坐标， 得出平移线
                panLines = CurveUtil.getPanLine(points.length, centerPoints);
                //平移线移动到顶点
                return CurveUtil.getMovedPanLines(points, panLines, smoothFactor);
            },
            /*
             * 计算给定点集合的连线的中点
             * @param points
             */
            getCenterPoints: function(points) {
                var centerPoints = {}, key = null;
                for (var i = 0, j = 0, len = points.length; i < len; i++) {
                    //j是下一个点的索引
                    j = i === len - 1 ? 0 : i + 1;
                    key = i + "," + j;
                    //计算中点坐标
                    centerPoints[key] = {
                        x: (points[i].x + points[j].y) / 2,
                        y: (points[i].x + points[j].y) / 2
                    };
                }
                return centerPoints;
            },
            /*
             * 对getCenterPoints()接口获取到的数据做处理， 计算出各个顶点对应的平移线数据
             * @param length 集合中点的个数
             * @param points 点集合， 该集合应该是getCenterPoints()接口返回的数据
             */
            getPanLine: function(length, points) {
                var result = {}, //顶点索引
                pointIndex = null;
                for (var i = 0, j; i < length; i++) {
                    var point1 = null, point2 = null;
                    //计算当前点
                    j = (i + 1) % length;
                    //保存当前处理的顶点索引
                    pointIndex = j;
                    point1 = points[i + "," + j];
                    //计算下一个点
                    i = j;
                    j = (i + 1) % length;
                    point2 = points[i + "," + j];
                    result[pointIndex] = {
                        points: [ {
                            x: point1.x,
                            y: point1.y
                        }, {
                            x: point2.x,
                            y: point2.y
                        } ],
                        center: {
                            x: (point1.x + point2.x) / 2,
                            y: (point1.y + point2.y) / 2
                        }
                    };
                    //还原i值
                    i = (pointIndex + length - 1) % length;
                }
                return result;
            },
            /*
             * 计算平移线移动到顶点后的位置
             * @param points 顶点集合
             * @param panLines 平移线集合
             */
            getMovedPanLines: function(points, panLines, smoothFactor) {
                var result = {};
                Utils.each(points, function(point, index) {
                    //当前平移线
                    var currentPanLine = panLines[index], //平移线中点
                    center = currentPanLine.center, //移动距离
                    distance = {
                        x: center.x - point.x,
                        y: center.y - point.y
                    };
                    var currentResult = result[index] = {
                        points: [],
                        center: {
                            x: point.x,
                            y: point.y
                        }
                    };
                    //计算控制点到顶点的距离， 并且应用平滑系数到距离上
                    Utils.each(currentPanLine.points, function(controlPoint, index) {
                        var moved = {
                            x: controlPoint.x - distance.x,
                            y: controlPoint.y - distance.y
                        };
                        var vertex = currentResult.center;
                        var dx = moved.x - vertex.x;
                        var dy = moved.y - vertex.y;
                        moved.x = vertex.x + smoothFactor * dx;
                        moved.y = vertex.y + smoothFactor * dy;
                        currentResult.points.push(moved);
                    });
                });
                return result;
            }
        };
        return _p.r(11).createClass("Curve", {
            base: _p.r(47),
            mixins: [ _p.r(52) ],
            constructor: function(points, isColse) {
                this.callBase();
                this.setPoints(points || []);
                this.closeState = !!isColse;
                this.changeable = true;
                this.smoothFactor = 1;
                this.update();
            },
            //当点集合发生变化时采取的动作
            onContainerChanged: function() {
                if (this.changeable) {
                    this.update();
                }
            },
            setSmoothFactor: function(factor) {
                this.smoothFactor = factor < 0 ? 0 : factor;
                this.update();
                return this;
            },
            getSmoothFactor: function() {
                return this.smoothFactor;
            },
            update: function() {
                var points = this.getPoints(), withControlPoints = null, drawer = this.getDrawer(), curPoint = null, curControlPoint = null, prevControlPoint = null;
                drawer.clear();
                if (points.length === 0) {
                    return this;
                } else {
                    drawer.moveTo(points[0]);
                }
                if (points.length === 1) {
                    return this;
                }
                if (points.length === 2) {
                    drawer.lineTo(points[1]);
                    return this;
                }
                //获取已转换过后的带控制点的所有点
                withControlPoints = CurveUtil.getCurvePanLines(points, this.getSmoothFactor());
                for (var i = 1, len = points.length; i < len; i++) {
                    //当前顶点
                    curPoint = withControlPoints[i].center;
                    //当前控制点
                    if (this.closeState || i != len - 1) {
                        curControlPoint = withControlPoints[i].points[0];
                    } else {
                        //非闭合状态下最后一个点的处理
                        curControlPoint = withControlPoints[i].center;
                    }
                    if (this.closeState || i != 1) {
                        prevControlPoint = withControlPoints[i - 1].points[1];
                    } else {
                        //非闭合状态下第一个点的处理
                        prevControlPoint = withControlPoints[i - 1].center;
                    }
                    drawer.bezierTo(prevControlPoint.x, prevControlPoint.y, curControlPoint.x, curControlPoint.y, curPoint.x, curPoint.y);
                }
                //处理闭合
                if (this.closeState) {
                    curPoint = withControlPoints[0].center;
                    curControlPoint = withControlPoints[0].points[0];
                    prevControlPoint = withControlPoints[points.length - 1].points[1];
                    drawer.bezierTo(prevControlPoint.x, prevControlPoint.y, curControlPoint.x, curControlPoint.y, curPoint.x, curPoint.y);
                }
                return this;
            },
            close: function() {
                this.closeState = true;
                return this.update();
            },
            open: function() {
                this.closeState = false;
                return this.update();
            },
            isClose: function() {
                return !!this.closeState;
            }
        });
    }
};

//src/graphic/data.js
_p[32] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass("Data", {
            constructor: function() {
                this._data = {};
            },
            setData: function(name, value) {
                this._data[name] = value;
                return this;
            },
            getData: function(name) {
                return this._data[name];
            },
            removeData: function(name) {
                delete this._data[name];
                return this;
            }
        });
    }
};

//src/graphic/ellipse.js
_p[33] = {
    value: function(require, exports, module) {
        var Utils = _p.r(12), Point = _p.r(51);
        return _p.r(11).createClass("Ellipse", {
            base: _p.r(47),
            constructor: function(rx, ry, cx, cy) {
                this.callBase();
                this.rx = rx || 0;
                this.ry = ry || 0;
                this.cx = cx || 0;
                this.cy = cy || 0;
                this.update();
            },
            update: function() {
                var rx = this.rx, ry = this.ry, x1 = this.cx + rx, x2 = this.cx - rx, y = this.cy;
                var drawer = this.getDrawer();
                drawer.clear();
                drawer.moveTo(x1, y);
                drawer.arcTo(rx, ry, 0, 1, 1, x2, y);
                drawer.arcTo(rx, ry, 0, 1, 1, x1, y);
                return this;
            },
            getRadius: function() {
                return {
                    x: this.rx,
                    y: this.ry
                };
            },
            getRadiusX: function() {
                return this.rx;
            },
            getRadiusY: function() {
                return this.ry;
            },
            getCenter: function() {
                return new Point(this.cx, this.cy);
            },
            getCenterX: function() {
                return this.cx;
            },
            getCenterY: function() {
                return this.cy;
            },
            setRadius: function(rx, ry) {
                this.rx = rx;
                this.ry = ry;
                return this.update();
            },
            setRadiusX: function(rx) {
                this.rx = rx;
                return this.update();
            },
            setRadiusY: function(ry) {
                this.ry = ry;
                return this.update();
            },
            setCenter: function(cx, cy) {
                if (arguments.length == 1) {
                    var p = Point.parse(arguments[0]);
                    cx = p.x;
                    cy = p.y;
                }
                this.cx = cx;
                this.cy = cy;
                return this.update();
            },
            setCenterX: function(cx) {
                this.cx = cx;
                return this.update();
            },
            setCenterY: function(cy) {
                this.cy = cy;
                return this.update();
            }
        });
    }
};

//src/graphic/eventhandler.js
/*
 * kity event 实现
 */
_p[34] = {
    value: function(require, exports, module) {
        // polyfill
        (function() {
            function CustomEvent(event, params) {
                params = params || {
                    bubbles: false,
                    cancelable: false,
                    detail: undefined
                };
                var evt = document.createEvent("CustomEvent");
                evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                return evt;
            }
            CustomEvent.prototype = window.Event.prototype;
            window.CustomEvent = CustomEvent;
        })();
        var Utils = _p.r(12), ShapeEvent = _p.r(63);
        // 内部处理器缓存
        var INNER_HANDLER_CACHE = {}, // 用户处理器缓存
        USER_HANDLER_CACHE = {}, guid = 0;
        // 添加事件统一入口
        function _addEvent(type, handler, isOnce) {
            isOnce = !!isOnce;
            if (Utils.isString(type)) {
                type = type.match(/\S+/g);
            }
            Utils.each(type, function(currentType) {
                listen.call(this, this.node, currentType, handler, isOnce);
            }, this);
            return this;
        }
        // 移除事件统一入口
        function _removeEvent(type, handler) {
            var userHandlerList = null, eventId = this._EVNET_UID, isRemoveAll = handler === undefined;
            userHandlerList = USER_HANDLER_CACHE[eventId][type];
            //移除指定的监听器
            if (!isRemoveAll) {
                isRemoveAll = true;
                Utils.each(userHandlerList, function removeKityEvent(fn, index) {
                    if (fn === handler) {
                        // 不能结束， 需要查找完整个list， 避免丢失移除多次绑定同一个处理器的情况
                        delete userHandlerList[index];
                    } else {
                        isRemoveAll = false;
                    }
                });
            }
            //删除所有监听器
            if (isRemoveAll) {
                deleteDomEvent(this.node, type, INNER_HANDLER_CACHE[eventId][type]);
                delete USER_HANDLER_CACHE[eventId][type];
                delete INNER_HANDLER_CACHE[eventId][type];
            }
            return this;
        }
        // 执行绑定, 该方法context为shape或者mixin了eventhandler的对象
        function listen(node, type, handler, isOnce) {
            var eid = this._EVNET_UID, targetObject = this;
            // 初始化内部监听器
            if (!INNER_HANDLER_CACHE[eid]) {
                INNER_HANDLER_CACHE[eid] = {};
            }
            if (!INNER_HANDLER_CACHE[eid][type]) {
                // 内部监听器
                INNER_HANDLER_CACHE[eid][type] = function kityEventHandler(e) {
                    e = new ShapeEvent(e || window.event);
                    Utils.each(USER_HANDLER_CACHE[eid][type], function executeKityEvent(fn) {
                        var result;
                        if (fn) {
                            result = fn.call(targetObject, e);
                            //once 绑定， 执行完后删除
                            if (isOnce) {
                                targetObject.off(type, fn);
                            }
                        }
                        // 如果用户handler里return了false， 则该节点上的此后的同类型事件将不再执行
                        return result;
                    }, targetObject);
                };
            }
            // 初始化用户监听器列表
            if (!USER_HANDLER_CACHE[eid]) {
                USER_HANDLER_CACHE[eid] = {};
            }
            if (!USER_HANDLER_CACHE[eid][type]) {
                USER_HANDLER_CACHE[eid][type] = [ handler ];
                // 绑定对应类型的事件
                // dom对象利用dom event进行处理， 非dom对象， 由消息分发机制处理
                if (!!node && "on" + type in node) {
                    bindDomEvent(node, type, INNER_HANDLER_CACHE[eid][type]);
                }
            } else {
                USER_HANDLER_CACHE[eid][type].push(handler);
            }
        }
        // 绑定dom事件
        function bindDomEvent(node, type, handler) {
            if (node.addEventListener) {
                node.addEventListener(type, handler, false);
            } else {
                node.attachEvent("on" + type, handler);
            }
        }
        // 删除dom事件
        function deleteDomEvent(node, type, handler) {
            if (node.removeEventListener) {
                node.removeEventListener(type, handler, false);
            } else {
                node.detachEvent(type, handler);
            }
        }
        // 触发dom事件
        function triggerDomEvent(node, type, params) {
            var event = new CustomEvent(type, {
                bubbles: true,
                cancelable: true
            });
            event._kityParam = params;
            node.dispatchEvent(event);
        }
        // 发送消息
        function sendMessage(messageObj, type, msg) {
            var event = null, handler = null;
            var handlers = INNER_HANDLER_CACHE[messageObj._EVNET_UID];
            if (!handlers) return;
            handler = handlers[type];
            if (!handler) {
                return;
            }
            event = Utils.extend({
                type: type,
                target: messageObj
            }, msg || {});
            handler.call(messageObj, event);
        }
        // 对外接口
        return _p.r(11).createClass("EventHandler", {
            constructor: function() {
                this._EVNET_UID = ++guid;
            },
            addEventListener: function(type, handler) {
                return _addEvent.call(this, type, handler, false);
            },
            addOnceEventListener: function(type, handler) {
                return _addEvent.call(this, type, handler, true);
            },
            removeEventListener: function(type, handler) {
                return _removeEvent.call(this, type, handler);
            },
            on: function(type, handler) {
                return this.addEventListener.apply(this, arguments);
            },
            once: function(type, handler) {
                return this.addOnceEventListener.apply(this, arguments);
            },
            off: function() {
                return this.removeEventListener.apply(this, arguments);
            },
            fire: function(type, params) {
                return this.trigger.apply(this, arguments);
            },
            trigger: function(type, params) {
                sendMessage(this, type, params);
                return this;
            }
        });
    }
};

//src/graphic/geometry.js
_p[35] = {
    value: function(require) {
        var utils = _p.r(12);
        var Point = _p.r(51);
        var Vector = _p.r(74);
        var Matrix = _p.r(44);
        var g = {};
        var pathCommand = /([achlmrqstvz])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?\s*)+)/gi, pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)\s*,?\s*/gi, paramCounts = {
            a: 7,
            c: 6,
            h: 1,
            l: 2,
            m: 2,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            z: 0
        };
        function pathClone(path) {
            var result, i, j, segment, segmentCopy;
            result = [];
            for (i = 0; i < path.length; i++) {
                segment = path[i];
                result.push(segmentCopy = []);
                for (j = 0; j < segment.length; j++) {
                    segmentCopy.push(segment[j]);
                }
            }
            if (path.isUniform) result.isUniform = true;
            if (path.isAbsolute) result.isAbsolute = true;
            if (path.isCurve) result.isCurve = true;
            return result;
        }
        // 缓存函数
        // from raphael.js
        function cacher(f, scope, postprocessor) {
            function repush(array, item) {
                for (var i = 0, ii = array.length; i < ii; i++) if (array[i] === item) {
                    return array.push(array.splice(i, 1)[0]);
                }
            }
            function newf() {
                var arg = Array.prototype.slice.call(arguments, 0), args = arg.join("␀"), cache = newf.cache = newf.cache || {}, count = newf.count = newf.count || [];
                if (cache.hasOwnProperty(args)) {
                    repush(count, args);
                    return postprocessor ? postprocessor(cache[args]) : cache[args];
                }
                if (count.length >= 1e3) {
                    delete cache[count.shift()];
                }
                count.push(args);
                cache[args] = f.apply(scope, arg);
                return postprocessor ? postprocessor(cache[args]) : cache[args];
            }
            return newf;
        }
        /**
     *
     * kity.g.pathToString(pathSegment)
     *
     * 返回表示 PathSegment 的字符串
     *
     * @param  {Array} pathSegment
     *     要表示的 Path Segment
     *
     * @return {String} 表示该 Path 的字符串
     *
     * @example
     *
     *     var pathSegment = [['M', 0, 0], ['L', 10, 10]]
     *     var pathString = kity.g.pathToString(pathSegment);
     *     // 返回 'M0,0L10,10'
     */
        g.pathToString = function(pathSegment) {
            pathSegment = pathSegment || this;
            if (typeof pathSegment == "string") return pathSegment;
            if (pathSegment instanceof Array) {
                pathSegment = utils.flatten(pathSegment);
                return pathSegment.join(",").replace(/,?([achlmqrstvxz]),?/gi, "$1");
            }
        };
        /**
     * kity.g.parsePathString(pathString)
     *
     * 解析 Path 字符串成 PathSegment
     *
     * @copyright rapheal.js
     *
     * @example
     *
     *     var seg = kity.g.parsePathString('M10,12l21-23-21.5,11z');
     *     // 返回: [['M', 10, 12], ['l', 21, -23], ['l', -21.5, 11], ['z']]
     *
     * @param  {String} pathString Path 字符串
     * @return {Array}
     */
        g.parsePathString = cacher(function(pathString) {
            var data = [];
            pathString.replace(pathCommand, function(a, b, c) {
                var params = [], name = b.toLowerCase();
                c.replace(pathValues, function(a, b) {
                    if (b) params.push(+b);
                });
                if (name == "m" && params.length > 2) {
                    data.push([ b ].concat(params.splice(0, 2)));
                    name = "l";
                    b = b == "m" ? "l" : "L";
                }
                if (name == "r") {
                    data.push([ b ].concat(params));
                } else {
                    while (params.length >= paramCounts[name]) {
                        data.push([ b ].concat(params.splice(0, paramCounts[name])));
                        if (!paramCounts[name]) {
                            break;
                        }
                    }
                }
            });
            data.isUniform = true;
            data.toString = g.pathToString;
            return data;
        });
        /**
     * kity.g.pathToAbsolute(path)
     *
     * 把路径转换为绝对路径的形式
     *
     * @param {Array|String} path
     *     要转换的 path 路径或者数组
     *
     * @return {Array}
     *     转换后的 Path Segment
     *
     * @example
     *
     *     var path = 'M10,10l50,50';
     *     var absPath = kity.g.pathToAbsolute(path);
     *     // 返回 [['M', 10, 10], ['L', 60, 60]]
     */
        g.pathToAbsolute = cacher(function(path) {
            var pathArray = path.isUniform ? path : g.parsePathString(g.pathToString(path));
            var res = [], x = 0, y = 0, mx = 0, my = 0, start = 0;
            var r, pa, i, j, k, ii, jj, kk;
            if (pathArray[0][0] == "M") {
                x = +pathArray[0][1];
                y = +pathArray[0][2];
                mx = x;
                my = y;
                start++;
                res[0] = [ "M", x, y ];
            }
            for (r, pa, i = start, ii = pathArray.length; i < ii; i++) {
                res.push(r = []);
                pa = pathArray[i];
                if (pa[0] != pa[0].toUpperCase()) {
                    r[0] = pa[0].toUpperCase();
                    switch (r[0]) {
                      case "A":
                        r[1] = pa[1];
                        r[2] = pa[2];
                        r[3] = pa[3];
                        r[4] = pa[4];
                        r[5] = pa[5];
                        r[6] = +(pa[6] + x);
                        r[7] = +(pa[7] + y);
                        break;

                      case "V":
                        r[1] = +pa[1] + y;
                        break;

                      case "H":
                        r[1] = +pa[1] + x;
                        break;

                      case "M":
                        mx = +pa[1] + x;
                        my = +pa[2] + y;
                        break;

                      default:
                        for (j = 1, jj = pa.length; j < jj; j++) {
                            r[j] = +pa[j] + (j % 2 ? x : y);
                        }
                    }
                } else {
                    for (k = 0, kk = pa.length; k < kk; k++) {
                        r[k] = pa[k];
                    }
                }
                switch (r[0]) {
                  case "Z":
                    x = mx;
                    y = my;
                    break;

                  case "H":
                    x = r[1];
                    break;

                  case "V":
                    y = r[1];
                    break;

                  case "M":
                    mx = r[r.length - 2];
                    my = r[r.length - 1];
                    break;

                  default:
                    x = r[r.length - 2];
                    y = r[r.length - 1];
                }
            }
            res.isUniform = true;
            res.isAbsolute = true;
            res.toString = g.pathToString;
            return res;
        });
        // 把圆弧绘制的曲线转化为对应的三次贝塞尔形式
        function a2c(x1, y1, rx, ry, angle, laf, sf, x2, y2, recursive) {
            // copy from raphael.js
            // for more information of where this math came from visit:
            // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
            var math = Math, PI = math.PI, abs = Math.abs, _120 = PI * 120 / 180, rad = PI / 180 * (+angle || 0), res = [], xy, rotate = function(x, y, rad) {
                var X = x * math.cos(rad) - y * math.sin(rad), Y = x * math.sin(rad) + y * math.cos(rad);
                return {
                    x: X,
                    y: Y
                };
            };
            var cos, sin, h, x, y, rx2, ry2, k, cx, cy, f1, f2, df, f2old, x2old, y2old, c1, s1, c2, s2, t, hx, hy, m1, m2, m3, m4, newres, i, ii;
            if (!recursive) {
                xy = rotate(x1, y1, -rad);
                x1 = xy.x;
                y1 = xy.y;
                xy = rotate(x2, y2, -rad);
                x2 = xy.x;
                y2 = xy.y;
                cos = math.cos(PI / 180 * angle);
                sin = math.sin(PI / 180 * angle);
                x = (x1 - x2) / 2;
                y = (y1 - y2) / 2;
                h = x * x / (rx * rx) + y * y / (ry * ry);
                if (h > 1) {
                    h = math.sqrt(h);
                    rx = h * rx;
                    ry = h * ry;
                }
                rx2 = rx * rx;
                ry2 = ry * ry;
                k = (laf == sf ? -1 : 1) * math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x)));
                cx = k * rx * y / ry + (x1 + x2) / 2;
                cy = k * -ry * x / rx + (y1 + y2) / 2;
                f1 = math.asin(((y1 - cy) / ry).toFixed(9));
                f2 = math.asin(((y2 - cy) / ry).toFixed(9));
                f1 = x1 < cx ? PI - f1 : f1;
                f2 = x2 < cx ? PI - f2 : f2;
                if (f1 < 0) f1 = PI * 2 + f1;
                if (f2 < 0) f2 = PI * 2 + f2;
                if (sf && f1 > f2) {
                    f1 = f1 - PI * 2;
                }
                if (!sf && f2 > f1) {
                    f2 = f2 - PI * 2;
                }
            } else {
                f1 = recursive[0];
                f2 = recursive[1];
                cx = recursive[2];
                cy = recursive[3];
            }
            df = f2 - f1;
            if (abs(df) > _120) {
                f2old = f2;
                x2old = x2;
                y2old = y2;
                f2 = f1 + _120 * (sf && f2 > f1 ? 1 : -1);
                x2 = cx + rx * math.cos(f2);
                y2 = cy + ry * math.sin(f2);
                res = a2c(x2, y2, rx, ry, angle, 0, sf, x2old, y2old, [ f2, f2old, cx, cy ]);
            }
            df = f2 - f1;
            c1 = math.cos(f1);
            s1 = math.sin(f1);
            c2 = math.cos(f2);
            s2 = math.sin(f2);
            t = math.tan(df / 4);
            hx = 4 / 3 * rx * t;
            hy = 4 / 3 * ry * t;
            m1 = [ x1, y1 ];
            m2 = [ x1 + hx * s1, y1 - hy * c1 ];
            m3 = [ x2 + hx * s2, y2 - hy * c2 ];
            m4 = [ x2, y2 ];
            m2[0] = 2 * m1[0] - m2[0];
            m2[1] = 2 * m1[1] - m2[1];
            if (recursive) {
                return [ m2, m3, m4 ].concat(res);
            } else {
                res = [ m2, m3, m4 ].concat(res).join().split(",");
                newres = [];
                for (i = 0, ii = res.length; i < ii; i++) {
                    newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
                }
                return newres;
            }
        }
        // 把二次贝塞尔曲线参数转化为三次贝塞尔曲线参数
        function q2c(x1, y1, ax, ay, x2, y2) {
            // copy from raphael.js
            var _13 = 1 / 3, _23 = 2 / 3;
            return [ _13 * x1 + _23 * ax, _13 * y1 + _23 * ay, _13 * x2 + _23 * ax, _13 * y2 + _23 * ay, x2, y2 ];
        }
        /**
     * kity.g.pathToCurve(path)
     *
     * 把路径转换为贝塞尔路径
     *
     * @param  {Array|String} path
     *     要转换的 path 路径或数组
     *
     * @return {Array}
     *     转换后的 PathSegment，每一段都是 'C'
     */
        g.pathToCurve = cacher(function(path) {
            var i, j, command, param;
            var initPoint, currentPoint, endPoint, shouldClose, lastControlPoint, aussumedControlPoint;
            var controlPoint1, controlPoint2;
            var res = [];
            // 处理的路径要求是一个绝对路径
            if (!path.isAbsolute) path = g.pathToAbsolute(path);
            for (i = 0; i < path.length; i++) {
                command = path[i][0];
                param = path[i].slice(1);
                // 画笔移动
                if (command == "M") {
                    initPoint = lastControlPoint = currentPoint = param;
                    res.push(path[i]);
                    continue;
                }
                // 路径闭合
                if (command == "Z") {
                    shouldClose = true;
                    command = "L";
                    param = initPoint;
                }
                // 绘制命令的目的位置
                endPoint = param.slice(param.length - 2);
                // 对 'H' 命令的修正
                if (command == "H") {
                    endPoint = [ param[0], currentPoint[1] ];
                    command = "L";
                }
                // 对 'V' 命令的修正
                if (command == "V") {
                    endPoint = [ currentPoint[0], param[0] ];
                    command = "L";
                }
                // 对 'S' 命令求出隐含的控制点位置
                if (command == "S" || command == "T") {
                    // 隐含控制点是上一个控制点关于当前位置的镜像
                    aussumedControlPoint = [ currentPoint[0] + (currentPoint[0] - lastControlPoint[0]), currentPoint[1] + (currentPoint[1] - lastControlPoint[1]) ];
                }
                // 针对不同的命令求控制点
                switch (command) {
                  case "L":
                    controlPoint1 = currentPoint;
                    controlPoint2 = endPoint;
                    break;

                  case "C":
                    controlPoint1 = param.slice(0, 2);
                    controlPoint2 = param.slice(2, 4);
                    break;

                  case "S":
                    controlPoint1 = aussumedControlPoint.slice();
                    controlPoint2 = param.slice(0, 2);
                    break;

                  case "Q":
                    lastControlPoint = param.slice(0, 2);
                    param = q2c.apply(null, currentPoint.concat(param));
                    controlPoint1 = param.slice(0, 2);
                    controlPoint2 = param.slice(2, 4);
                    break;

                  case "T":
                    param = q2c.apply(null, currentPoint.concat(aussumedControlPoint).concat(param));
                    controlPoint1 = param.slice(0, 2);
                    controlPoint2 = param.slice(2, 4);
                    break;

                  case "A":
                    param = a2c.apply(null, currentPoint.concat(param));
                    j = 0;
                    while (j in param) {
                        controlPoint1 = param.slice(j, j + 2);
                        controlPoint2 = param.slice(j + 2, j + 4);
                        endPoint = param.slice(j + 4, j + 6);
                        // 写入当前一段曲线
                        res.push([ "C" ].concat(controlPoint1).concat(controlPoint2).concat(endPoint));
                        j += 6;
                    }
                    break;
                }
                if (command != "A") {
                    // 写入当前一段曲线
                    res.push([ "C" ].concat(controlPoint1).concat(controlPoint2).concat(endPoint));
                }
                // 为下次循环准备当前位置
                currentPoint = endPoint;
                // 二次贝塞尔曲线自己已经记录了上个控制点的位置，其它的记录控制点 2 的位置
                if (command != "Q") {
                    lastControlPoint = controlPoint2;
                }
                if (shouldClose) {
                    res.push([ "Z" ]);
                    shouldClose = false;
                }
            }
            res.isUniform = true;
            res.isAbsolute = true;
            res.isCurve = true;
            res.toString = g.pathToString;
            return res;
        });
        /**
     * 将贝塞尔曲线切成两部分
     *
     * @see http://stackoverflow.com/questions/18655135/divide-bezier-curve-into-two-equal-halves
     */
        function cutBezier(bezierArray, t) {
            function __(t) {
                return function(p, q) {
                    return p + t * (q - p);
                };
            }
            var _ = __(t || .5), ba = bezierArray, ax = ba[0], ay = ba[1], bx = ba[2], by = ba[3], cx = ba[4], cy = ba[5], dx = ba[6], dy = ba[7], ex = _(ax, bx), ey = _(ay, by), fx = _(bx, cx), fy = _(by, cy), gx = _(cx, dx), gy = _(cy, dy), hx = _(ex, fx), hy = _(ey, fy), jx = _(fx, gx), jy = _(fy, gy), kx = _(hx, jx), ky = _(hy, jy);
            return [ [ ax, ay, ex, ey, hx, hy, kx, ky ], [ kx, ky, jx, jy, gx, gy, dx, dy ] ];
        }
        /**
     * kity.g.cutBezier(bezierArray, t)
     *
     * 在指定位置把贝塞尔曲线切割为两部分
     *
     * @param {Array} bezierArray
     *     表示贝塞尔曲线的一个数组 [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y]
     *     p1 和 p2 是贝塞尔曲线的起点和终点，c1 和 c2 是两个控制点
     *
     * @param {Number} t
     *     切割的位置（0 到 1）
     *
     * @return {Array}
     *     切割的两个贝塞尔曲线：[
     *         [p1x1, p1y1, c1x1, c1y1, c2x1, c2y1, p2x1, p2y1],
     *         [p1x2, p1y2, c1x2, c1y2, c2x2, c2y2, p2x2, p2y2]
     *     ]
     *
     */
        g.cutBezier = cacher(cutBezier);
        /**
     * 求一段贝塞尔曲线的子段
     *
     * @param {Array} bezierArray
     *     长度为 8 的数组，表示 [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y]
     *
     * @param {Number} t
     *     子段的结束位置（0 到 1）
     *
     * @param {Number} t0
     *     字段的开始位置（0 到 t），可不传，默认为 0
     *
     * @return {Array}
     *     长度为 8 的数组，表示给定贝塞尔曲线的子段
     */
        g.subBezier = function(bezierArray, t, t0) {
            var b2t = cutBezier(bezierArray, t)[0];
            return t0 ? cutBezier(b2t, t0 / t)[1] : b2t;
        };
        /**
     * 求贝塞尔曲线上的一个点
     *
     * @param {Array} bezierArray
     *     长度为 8 的数组，表示 [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y]
     *
     * @param {Number} t
     *     所求点的开始位置（0 到 1）
     *
     * @return {Point} p
     *     p.x: x 坐标
     *     p.y: y 坐标
     *     p.tan: 在 t 处的切线方向（类型为 kity.Vector，模为 1）
     */
        g.pointAtBezier = function(bezierArray, t) {
            var b2t = cutBezier(bezierArray, t)[0];
            var p = Point.parse(b2t.slice(6)), c = Point.parse(b2t.slice(4, 2)), v = Vector.fromPoints(c, p);
            if (t === 0) {
                p.tan = g.pointAtBezier(bezierArray, .01).tan;
            } else {
                p.tan = v.normalize();
            }
            return p;
        };
        /**
     * 求贝塞尔曲线的长度
     *
     * @param {Array} bezierArray
     *     长度为 8 的数组，表示 [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y]
     *
     * @param {Number} tolerate
     *     允许的误差，默认是 0.1
     *
     * @return {Number} 贝塞尔曲线的长度
     */
        g.bezierLength = cacher(function bezierLength(bezierArray) {
            // 表示（c[0]*t^4 + c[1]*t^3 + c[2]*t^2 + c[3]*t^1 + c[4])^(1/2)的函数
            function f(x) {
                var m = c0 * Math.pow(x, 4) + c1 * Math.pow(x, 3) + c2 * Math.pow(x, 2) + c3 * x + c4;
                if (m < 0) {
                    m = 0;
                }
                return Math.pow(m, .5);
            }
            // 用Newton-Cotes型求积公式
            var arr = bezierArray;
            // 三次贝塞尔曲线函数求导后，求出对应的方程系数，用cx[],cy[]表示x`(t)和y`(t)的系数
            var cx0, cx1, cx2;
            var cy0, cy1, cy2;
            // 用c[]表示x`(t)^2 + y`(t)^2的结果的系数
            var c0, c1, c2, c3, c4;
            // 求x`(t) 和 y`(t)的系数
            cx0 = -3 * arr[0] + 9 * arr[2] - 9 * arr[4] + 3 * arr[6];
            cx1 = 6 * arr[0] - 12 * arr[2] + 6 * arr[4];
            cx2 = -3 * arr[0] + 3 * arr[2];
            cy0 = -3 * arr[1] + 9 * arr[3] - 9 * arr[5] + 3 * arr[7];
            cy1 = 6 * arr[1] - 12 * arr[3] + 6 * arr[5];
            cy2 = -3 * arr[1] + 3 * arr[3];
            // 求x`(t)^2 + y`(t)^2的结果的系数 c[]
            c0 = Math.pow(cx0, 2) + Math.pow(cy0, 2);
            c1 = 2 * (cx0 * cx1 + cy0 * cy1);
            c2 = 2 * (cx0 * cx2 + cy0 * cy2) + Math.pow(cx1, 2) + Math.pow(cy1, 2);
            c3 = 2 * (cx1 * cx2 + cy1 * cy2);
            c4 = Math.pow(cx2, 2) + Math.pow(cy2, 2);
            // 用cotes积分公式求值
            return (f(0) + f(1) + 4 * (f(.125) + f(.375) + f(.625) + f(.875)) + 2 * (f(.25) + f(.5) + f(.75))) / 24;
        });
        // 计算一个 pathSegment 中每一段的在整体中所占的长度范围，以及总长度
        // 方法要求每一段都是贝塞尔曲线
        var getBezierPathSegmentRanges = cacher(function(pathSegment) {
            var i, ii, segment, position, bezierLength, segmentRanges, totalLength;
            segmentRanges = [];
            // 总长度
            totalLength = 0;
            for (i = 0, ii = pathSegment.length; i < ii; i++) {
                segment = pathSegment[i];
                if (segment[0] == "M") {
                    position = segment.slice(1);
                    segmentRanges.push(null);
                    continue;
                }
                if (segment[0] == "Z") {
                    segmentRanges.push(null);
                    continue;
                }
                bezierLength = g.bezierLength(position.concat(segment.slice(1)));
                segmentRanges.push([ totalLength, totalLength + bezierLength ]);
                totalLength += bezierLength;
                // 迭代当前位置
                position = segment.slice(4);
            }
            segmentRanges.totalLength = totalLength;
            return segmentRanges;
        });
        /**
     * 求一段路径的子路径
     *
     * @param  {Array|String} path
     *     原路径
     *
     * @param  {Number} t1
     *     要求的子路径的结束位置（0 到 1）
     *
     * @param  {Number} t0
     *     要求的子路径的开始位置（0 到 t1），可不传，默认为 0
     *
     * @return {Array}
     *     子路径的 PathSegment
     */
        g.subPath = function(path, t1, t0) {
            var dt;
            t0 = t0 || 0;
            dt = t1 - t0;
            dt = dt - (dt | 0);
            t0 = t0 - (t0 | 0);
            t1 = t0 + dt;
            if (t1 > 1) {
                return g.subPath(path, 1, t0).concat(g.subPath(path, t1 - 1));
            }
            if (!path.isCurve) {
                path = g.pathToCurve(path);
            }
            // path 每一段在整体中的长度区间
            var segmentRanges = getBezierPathSegmentRanges(path);
            // path 总长度
            var totalLength = segmentRanges.totalLength;
            // t1 和 t0 位置命中的长度位置
            var t1Length = totalLength * t1, t0Length = totalLength * (t0 || 0);
            // 产生的子路径
            var subPath = [];
            // 迭代变量，a 是一段的长度区间左值，b 是右值，d 是区间长度
            var i, ii, a, b, d;
            var position;
            var bezier, subBezier, stared;
            for (i = 0, ii = path.length; i < ii; i++) {
                if (path[i][0] == "M") {
                    position = path[i].slice(1);
                    if (stared) {
                        subPath.push(path[i].slice());
                    }
                    continue;
                }
                if (path[i][0] == "Z") {
                    // subpath 路径不闭合
                    continue;
                }
                a = segmentRanges[i][0];
                b = segmentRanges[i][1];
                d = b - a;
                bezier = position.concat(path[i].slice(1));
                if (t0Length > b) {
                    // t0 和 t1 都右溢出
                    // -----------------------------------
                    //            t0   t1
                    // |________|
                    //
                    // 需要跳过当前块
                    position = bezier.slice(bezier.length - 2);
                    continue;
                } else if (t0Length >= a) {
                    // 命中 t0；t1 可能命中或右溢出
                    // -----------------------------------
                    //            t0   t1
                    //     |______|__|
                    //
                    //     or:  |_|____|__|
                    //
                    // 取当前块 t0 到 t1 的部分
                    subBezier = g.subBezier(bezier, Math.min((t1Length - a) / d, 1), (t0Length - a) / d);
                    stared = true;
                    position = subBezier.slice(0, 2);
                    subPath.push([ "M" ].concat(subBezier.slice(0, 2)));
                    subPath.push([ "C" ].concat(subBezier.slice(2)));
                } else if (t1Length >= b) {
                    // t0 左溢出；t1 右溢出，整个块是需要的
                    // -----------------------------------
                    //       t0             t1
                    //          |_________|
                    //
                    // 此时取整个块
                    subPath.push(path[i].slice());
                } else if (t1Length >= a) {
                    // t0 左溢出；t1 命中，取当前块 t1 之前的部分
                    // -----------------------------------
                    //            t0   t1
                    //              |__|______|
                    // 取当前块 t1 之前的部分
                    subBezier = g.subBezier(bezier, (t1Length - a) / d);
                    subPath.push([ "C" ].concat(subBezier.slice(2)));
                    stared = false;
                } else {
                    // 没有可以再要的了
                    break;
                }
                position = bezier.slice(bezier.length - 2);
            }
            subPath.isAbsolute = true;
            subPath.isCurve = true;
            subPath.isUniform = true;
            subPath.toString = g.pathToString;
            return subPath;
        };
        /**
     * 求路径上的一个点
     *
     * @param  {Array|String} path
     *     要求点的路径
     *
     * @param  {Number} t
     *     要求的点的位置（0 到 1）
     *
     * @return {Point} p
     *     p.x: x 坐标
     *     p.y: y 坐标
     *     p.tan: 在 t 处的切线方向（类型为 kity.Vector，模为 1）
     */
        g.pointAtPath = function(path, t) {
            if (!path.isCurve) {
                path = g.pathToCurve(path);
            }
            var subPath = g.subPath(path, t);
            var lastCurve = subPath[subPath.length - 1][0] == "Z" ? subPath[subPath.length - 2] : subPath[subPath.length - 1];
            // 跳过 'C' 命令，只留参数
            lastCurve = lastCurve.slice(1);
            var p = Point.parse(lastCurve.slice(4)), c = Point.parse(lastCurve.slice(2, 4));
            p.tan = Vector.fromPoints(c, p).normalize();
            return p;
        };
        /**
     * 求一段路径的长度
     *
     * @param  {string|Array} path
     *     要求的路径
     *
     * @return {Number}
     *     路径的长度
     */
        g.pathLength = cacher(function(path) {
            if (!path.isCurve) {
                path = g.pathToCurve(path);
            }
            // path 每一段在整体中的长度区间
            var segmentRanges = getBezierPathSegmentRanges(path);
            return segmentRanges.totalLength;
        });
        /**
     * 求一段路径的关键点
     *
     * @param  {string|Array} path
     *     要求的路径
     *
     * @return {Array}
     *     关键点的集合
     */
        g.pathKeyPoints = cacher(function(path) {
            var i, ii, command, keyPoints;
            if (!path.isCurve) {
                path = g.pathToCurve(path);
            }
            keyPoints = [];
            for (i = 0, ii = path.length; i < ii; i++) {
                if (path[i][0] == "z") continue;
                keyPoints.push(path[i].slice(path[i].length - 2));
            }
            return keyPoints;
        });
        // 对比两个路径的关键位置，在合适的位置切割合适的路径，使得两个路径的段数一致
        // TODO: 使用插值算法，使对应点更合理
        var alignCurve = cacher(function(path1, path2) {
            if (!path1.isCurve) path1 = g.pathToCurve(path1);
            if (!path2.isCurve) path2 = g.pathToCurve(path2);
            var p1 = pathClone(path1);
            var p2 = pathClone(path2);
            p1.i = 0;
            p2.i = 0;
            p1.o = p2;
            p2.o = p1;
            function command(p, i) {
                return p[i || p.i] && p[i || p.i][0];
            }
            function param(p, i) {
                return p[i || p.i] && p[i || p.i].slice(1);
            }
            function point(p, i) {
                var _param = param(p, i);
                return _param && _param.slice(-2);
            }
            function fixZ(p) {
                if (command(p) == "Z") {
                    p.splice(p.i, 1);
                    return true;
                }
                return false;
            }
            function fixM(p) {
                if (command(p) == "M") {
                    p.o.splice(p.o.i, 0, [ "M" ].concat(point(p.o, p.o.i - 1)));
                    p.i++;
                    p.o.i++;
                    return true;
                }
                return false;
            }
            function fill(p) {
                var lastPoint;
                var i = 1;
                while (!lastPoint) {
                    lastPoint = point(p, p.length - i++);
                }
                p.o.i = p.i;
                while (p.length < p.o.length) {
                    if (fixZ(p.o)) continue;
                    if (fixM(p.o)) continue;
                    p.push([ "C" ].concat(lastPoint).concat(lastPoint).concat(lastPoint));
                    p.i++;
                    p.o.i++;
                }
            }
            while (p1.i < p1.length && p2.i < p2.length) {
                if (fixZ(p1) || fixZ(p2)) continue;
                if (command(p1) == command(p2)) {
                    p1.i++;
                    p2.i++;
                    continue;
                }
                if (fixM(p1) || fixM(p2)) continue;
                p1.i++;
                p2.i++;
            }
            if (p1.i == p1.length) fill(p1);
            if (p2.i == p2.length) fill(p2);
            delete p1.i;
            delete p1.o;
            delete p2.i;
            delete p2.o;
            return [ p1, p2 ];
        });
        g.alignCurve = alignCurve;
        /**
     * 获得两个路径的补间结果
     *
     * @param  {string|Array} path1
     *     补间起始路径
     *
     * @param  {string|Array} path2
     *     补间结束路径
     *
     * @param  {Number} t
     *     补间比例，0 返回跟 path1 等效的结果；1 返回跟 path2 等效的结果
     *
     * @return {PathSegment}
     *     补间的结果
     */
        g.pathTween = function(path1, path2, t) {
            if (t === 0) return path1;
            if (t === 1) return path2;
            var aligned = alignCurve(path1, path2);
            var result = [], seg, i, j;
            path1 = aligned[0];
            path2 = aligned[1];
            for (i = 0; i < path1.length; i++) {
                result.push(seg = []);
                seg.push(path1[i][0]);
                for (j = 1; j < path1[i].length; j++) {
                    seg.push(path1[i][j] + t * (path2[i][j] - path1[i][j]));
                }
            }
            result.isUniform = result.isCurve = result.isAbsolute = true;
            return result;
        };
        /**
     * 变换指定的路径
     *
     * @param  {String|Array} path
     *     需要变换的路径
     *
     * @param  {kity.Matrix} matrix
     *     使用的变换矩阵
     *
     * @return {Array}
     *     变换后的路径
     */
        g.transformPath = cacher(function(path, matrix) {
            var i, ii, j, result, seg, pair;
            if (!path.isCurve) {
                path = g.pathToCurve(path);
            }
            result = [];
            for (i = 0, ii = path.length; i < ii; i++) {
                result.push(seg = [ path[i][0] ]);
                for (j = 1; j < path[i].length; j += 2) {
                    pair = path[i].slice(j, j + 2);
                    pair = matrix.transformPoint(Point.parse(pair));
                    result.push(pair);
                }
            }
            return result;
        });
        // entend
        _p.r(11).extendClass(Matrix, {
            transformPath: function(path) {
                return g.transformPath(path, this);
            }
        });
        return g;
    }
};

//src/graphic/gradient.js
_p[36] = {
    value: function(require, exports, module) {
        var svg = _p.r(68);
        var Resource = _p.r(59);
        var Color = _p.r(29);
        return _p.r(11).createClass("GradientBrush", {
            base: Resource,
            constructor: function(gradientNodeType, paper) {
                this.callBase(gradientNodeType, paper);
                this.stops = [];
            },
            addStop: function(offset, color, opacity) {
                var gstop = svg.createNode("stop");
                if (!(color instanceof Color)) {
                    color = Color.parse(color);
                }
                if (opacity === undefined) {
                    opacity = color.get("a");
                }
                gstop.setAttribute("offset", offset);
                gstop.setAttribute("stop-color", color.toRGB());
                if (opacity < 1) {
                    gstop.setAttribute("stop-opacity", opacity);
                }
                this.node.appendChild(gstop);
                return this;
            }
        });
    }
};

//src/graphic/group.js
_p[37] = {
    value: function(require, exports, module) {
        var ShapeContainer = _p.r(62);
        return _p.r(11).createClass("Group", {
            mixins: [ ShapeContainer ],
            base: _p.r(61),
            constructor: function Group() {
                this.callBase("g");
            }
        });
    }
};

//src/graphic/hyperlink.js
_p[38] = {
    value: function(require, exports, module) {
        var ShapeContainer = _p.r(62);
        return _p.r(11).createClass("HyperLink", {
            mixins: [ ShapeContainer ],
            base: _p.r(61),
            constructor: function(url) {
                this.callBase("a");
                this.setHref(url);
            },
            setHref: function(href) {
                this.node.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", href);
                return this;
            },
            getHref: function() {
                return this.node.getAttributeNS("xlink:href");
            },
            setTarget: function(target) {
                this.node.setAttribute("target", target);
                return this;
            },
            getTarget: function() {
                return this.node.getAttribute("target");
            }
        });
    }
};

//src/graphic/image.js
_p[39] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass("Image", {
            base: _p.r(61),
            constructor: function(url, width, height, x, y) {
                this.callBase("image");
                this.url = url;
                this.width = width || 0;
                this.height = height || 0;
                this.x = x || 0;
                this.y = y || 0;
                this.update();
            },
            update: function() {
                this.node.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this.url);
                this.node.setAttribute("x", this.x);
                this.node.setAttribute("y", this.y);
                this.node.setAttribute("width", this.width);
                this.node.setAttribute("height", this.height);
                return this;
            },
            setUrl: function(url) {
                this.url = url === "" ? null : url;
                return this.update();
            },
            getUrl: function() {
                return this.url;
            },
            setWidth: function(width) {
                this.width = width;
                return this.update();
            },
            getWidth: function() {
                return this.width;
            },
            setHeight: function(height) {
                this.height = height;
                return this.update();
            },
            getHeight: function() {
                return this.height;
            },
            setX: function(x) {
                this.x = x;
                return this.update();
            },
            getX: function() {
                return this.x;
            },
            setY: function(y) {
                this.y = y;
                return this.update();
            },
            getY: function() {
                return this.y;
            }
        });
    }
};

//src/graphic/line.js
_p[40] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass("Line", {
            base: _p.r(47),
            constructor: function(x1, y1, x2, y2) {
                this.callBase();
                this.point1 = {
                    x: x1 || 0,
                    y: y1 || 0
                };
                this.point2 = {
                    x: x2 || 0,
                    y: y2 || 0
                };
                this.update();
            },
            setPoint1: function(x, y) {
                this.point1.x = x;
                this.point1.y = y;
                return this.update();
            },
            setPoint2: function(x, y) {
                this.point2.x = x;
                this.point2.y = y;
                return this.update();
            },
            getPoint1: function() {
                return {
                    x: this.point1.x,
                    y: this.point1.y
                };
            },
            getPoint2: function() {
                return {
                    x: this.point2.x,
                    y: this.point2.y
                };
            },
            update: function() {
                var drawer = this.getDrawer();
                drawer.clear();
                drawer.moveTo(this.point1.x, this.point1.y);
                drawer.lineTo(this.point2.x, this.point2.y);
                return this;
            }
        });
    }
};

//src/graphic/lineargradient.js
_p[41] = {
    value: function(require, exports, module) {
        var svg = _p.r(68);
        var Gradient = _p.r(36);
        return _p.r(11).createClass("LinearGradientBrush", {
            base: Gradient,
            constructor: function(paper) {
                this.callBase("linearGradient", paper);
                this.setStartPosition(0, 0);
                this.setEndPosition(1, 0);
            },
            setStartPosition: function(px, py) {
                this.node.setAttribute("x1", px);
                this.node.setAttribute("y1", py);
                return this;
            },
            setEndPosition: function(px, py) {
                this.node.setAttribute("x2", px);
                this.node.setAttribute("y2", py);
                return this;
            },
            getStartPosition: function() {
                return {
                    x: +this.node.getAttribute("x1"),
                    y: +this.node.getAttribute("y1")
                };
            },
            getEndPosition: function() {
                return {
                    x: +this.node.getAttribute("x2"),
                    y: +this.node.getAttribute("y2")
                };
            }
        });
    }
};

//src/graphic/marker.js
_p[42] = {
    value: function(require, exports, module) {
        var Point = _p.r(51);
        var Marker = _p.r(11).createClass("Marker", {
            base: _p.r(59),
            mixins: [ _p.r(62), _p.r(76) ],
            constructor: function() {
                this.callBase("marker");
                this.setOrient("auto");
            },
            setRef: function(x, y) {
                if (arguments.length === 1) {
                    y = x.y;
                    x = x.x;
                }
                this.node.setAttribute("refX", x);
                this.node.setAttribute("refY", y);
                return this;
            },
            getRef: function() {
                return new Point(+this.node.getAttribute("refX"), +this.node.getAttribute("refY"));
            },
            setWidth: function(width) {
                this.node.setAttribute("markerWidth", this.width = width);
                return this;
            },
            setOrient: function(orient) {
                this.node.setAttribute("orient", this.orient = orient);
                return this;
            },
            getOrient: function() {
                return this.orient;
            },
            getWidth: function() {
                return +this.width;
            },
            setHeight: function(height) {
                this.node.setAttribute("markerHeight", this.height = height);
                return this;
            },
            getHeight: function() {
                return +this.height;
            }
        });
        var Path = _p.r(47);
        _p.r(11).extendClass(Path, {
            setMarker: function(marker, pos) {
                pos = pos || "end";
                if (!marker) {
                    this.node.removeAttribute("marker-" + pos);
                } else {
                    this.node.setAttribute("marker-" + pos, marker.toString());
                }
                return this;
            }
        });
        return Marker;
    }
};

//src/graphic/mask.js
/**
 * 蒙板
 */
_p[43] = {
    value: function(require, exports, module) {
        var Class = _p.r(11);
        var Shape = _p.r(61);
        var Mask = Class.createClass("Mask", {
            base: Shape,
            mixins: [ _p.r(62) ],
            constructor: function() {
                this.callBase("mask");
            },
            mask: function(shape) {
                shape.getNode().setAttribute("mask", "url(#" + this.getId() + ")");
                return this;
            }
        });
        Class.extendClass(Shape, {
            maskWith: function(mask) {
                mask.mask(this);
                return this;
            }
        });
        return Mask;
    }
};

//src/graphic/matrix.js
_p[44] = {
    value: function(require, exports, module) {
        var utils = _p.r(12);
        var Box = _p.r(26);
        var mPattern = /matrix\s*\((.+)\)/i;
        var Point = _p.r(51);
        // 注意，合并的结果是先执行m2，再执行m1的结果
        function mergeMatrixData(m2, m1) {
            return {
                a: m1.a * m2.a + m1.c * m2.b,
                b: m1.b * m2.a + m1.d * m2.b,
                c: m1.a * m2.c + m1.c * m2.d,
                d: m1.b * m2.c + m1.d * m2.d,
                e: m1.a * m2.e + m1.c * m2.f + m1.e,
                f: m1.b * m2.e + m1.d * m2.f + m1.f
            };
        }
        function d2r(deg) {
            return deg * Math.PI / 180;
        }
        var Matrix = _p.r(11).createClass("Matrix", {
            constructor: function() {
                if (arguments.length) {
                    this.setMatrix.apply(this, arguments);
                } else {
                    this.setMatrix(1, 0, 0, 1, 0, 0);
                }
            },
            translate: function(x, y) {
                this.m = mergeMatrixData(this.m, {
                    a: 1,
                    c: 0,
                    e: x,
                    b: 0,
                    d: 1,
                    f: y
                });
                return this;
            },
            rotate: function(deg) {
                var rad = d2r(deg);
                var sin = Math.sin(rad), cos = Math.cos(rad);
                this.m = mergeMatrixData(this.m, {
                    a: cos,
                    c: -sin,
                    e: 0,
                    b: sin,
                    d: cos,
                    f: 0
                });
                return this;
            },
            scale: function(sx, sy) {
                if (sy === undefined) {
                    sy = sx;
                }
                this.m = mergeMatrixData(this.m, {
                    a: sx,
                    c: 0,
                    e: 0,
                    b: 0,
                    d: sy,
                    f: 0
                });
                return this;
            },
            skew: function(degX, degY) {
                if (degY === undefined) {
                    degY = degX;
                }
                var tx = Math.tan(d2r(degX)), ty = Math.tan(d2r(degY));
                this.m = mergeMatrixData(this.m, {
                    a: 1,
                    c: tx,
                    e: 0,
                    b: ty,
                    d: 1,
                    f: 0
                });
                return this;
            },
            /**
         * 获得反转矩阵
         *
         * 这是我解方程算出来的
         */
            inverse: function() {
                var m = this.m, a = m.a, b = m.b, c = m.c, d = m.d, e = m.e, f = m.f, k, aa, bb, cc, dd, ee, ff;
                k = a * d - b * c;
                aa = d / k;
                bb = -b / k;
                cc = -c / k;
                dd = a / k;
                ee = (c * f - e * d) / k;
                ff = (b * e - a * f) / k;
                return new Matrix(aa, bb, cc, dd, ee, ff);
            },
            setMatrix: function(a, b, c, d, e, f) {
                if (arguments.length === 1) {
                    this.m = utils.clone(arguments[0]);
                } else {
                    this.m = {
                        a: a,
                        b: b,
                        c: c,
                        d: d,
                        e: e,
                        f: f
                    };
                }
                return this;
            },
            getMatrix: function() {
                return utils.clone(this.m);
            },
            getTranslate: function() {
                var m = this.m;
                return {
                    x: m.e / m.a,
                    y: m.f / m.d
                };
            },
            mergeMatrix: function(matrix) {
                return new Matrix(mergeMatrixData(this.m, matrix.m));
            },
            merge: function(matrix) {
                return this.mergeMatrix(matrix);
            },
            toString: function() {
                return this.valueOf().join(" ");
            },
            valueOf: function() {
                var m = this.m;
                return [ m.a, m.b, m.c, m.d, m.e, m.f ];
            },
            equals: function(matrix) {
                var m1 = this.m, m2 = matrix.m;
                return m1.a == m2.a && m1.b == m2.b && m1.c == m2.c && m1.d == m2.d && m1.e == m2.e && m1.f == m2.f;
            },
            transformPoint: function() {
                return Matrix.transformPoint.apply(null, [].slice.call(arguments).concat([ this.m ]));
            },
            transformBox: function(box) {
                return Matrix.transformBox(box, this.m);
            },
            clone: function() {
                return new Matrix(this.m);
            }
        });
        Matrix.parse = function(str) {
            var match;
            var f = parseFloat;
            if (str instanceof Array) {
                return new Matrix({
                    a: str[0],
                    b: str[1],
                    c: str[2],
                    d: str[3],
                    e: str[4],
                    f: str[5]
                });
            }
            if (match = mPattern.exec(str)) {
                var values = match[1].split(",");
                if (values.length != 6) {
                    values = match[1].split(" ");
                }
                return new Matrix({
                    a: f(values[0]),
                    b: f(values[1]),
                    c: f(values[2]),
                    d: f(values[3]),
                    e: f(values[4]),
                    f: f(values[5])
                });
            }
            return new Matrix();
        };
        Matrix.transformPoint = function(x, y, m) {
            if (arguments.length === 2) {
                m = y;
                y = x.y;
                x = x.x;
            }
            return new Point(m.a * x + m.c * y + m.e, m.b * x + m.d * y + m.f);
        };
        Matrix.transformBox = function(box, matrix) {
            var xMin = Number.MAX_VALUE, xMax = -Number.MAX_VALUE, yMin = Number.MAX_VALUE, yMax = -Number.MAX_VALUE;
            var bps = [ [ box.x, box.y ], [ box.x + box.width, box.y ], [ box.x, box.y + box.height ], [ box.x + box.width, box.y + box.height ] ];
            var bp, rp, rps = [];
            while (bp = bps.pop()) {
                rp = Matrix.transformPoint(bp[0], bp[1], matrix);
                rps.push(rp);
                xMin = Math.min(xMin, rp.x);
                xMax = Math.max(xMax, rp.x);
                yMin = Math.min(yMin, rp.y);
                yMax = Math.max(yMax, rp.y);
            }
            box = new Box({
                x: xMin,
                y: yMin,
                width: xMax - xMin,
                height: yMax - yMin
            });
            utils.extend(box, {
                closurePoints: rps
            });
            return box;
        };
        // 获得从 node 到 refer 的变换矩阵
        Matrix.getCTM = function(target, refer) {
            var ctm = {
                a: 1,
                b: 0,
                c: 0,
                d: 1,
                e: 0,
                f: 0
            };
            var node = target.shapeNode || target.node;
            refer = refer || "parent";
            /**
         * 由于新版chrome(dev 48.0)移除了getTransformToElement这个方法可能导致报错，这里做兼容处理
         * @Date 2015-11-12
         * @Editor Naixor
         */
            function getTransformToElement(target, source) {
                var matrix;
                try {
                    matrix = source.getScreenCTM().inverse();
                } catch (e) {
                    throw new Error("Can not inverse source element' ctm.");
                }
                return matrix.multiply(target.getScreenCTM());
            }
            // 根据参照坐标系选区的不一样，返回不同的结果
            switch (refer) {
              case "screen":
                // 以浏览器屏幕为参照坐标系
                ctm = node.getScreenCTM();
                break;

              case "doc":
              case "paper":
                // 以文档（Paper）为参照坐标系
                ctm = node.getCTM();
                break;

              case "view":
              case "top":
                // 以顶层绘图容器（视野）为参照坐标系
                if (target.getPaper()) {
                    ctm = node.getTransformToElement !== undefined ? node.getTransformToElement(target.getPaper().shapeNode) : getTransformToElement(node, target.getPaper().shapeNode);
                }
                break;

              case "parent":
                // 以父容器为参照坐标系
                if (target.node.parentNode) {
                    ctm = node.getTransformToElement !== undefined ? node.getTransformToElement(target.node.parentNode) : getTransformToElement(node, target.node.parentNode);
                }
                break;

              default:
                // 其他情况，指定参照物
                if (refer.node) {
                    ctm = node.getTransformToElement !== undefined ? node.getTransformToElement(refer.shapeNode || refer.node) : getTransformToElement(node, refer.shapeNode || refer.node);
                }
            }
            return ctm ? new Matrix(ctm.a, ctm.b, ctm.c, ctm.d, ctm.e, ctm.f) : new Matrix();
        };
        return Matrix;
    }
};

//src/graphic/palette.js
/**
 * 调色板
 */
_p[45] = {
    value: function(require, exports, module) {
        //标准color
        var StandardColor = _p.r(65), Color = _p.r(29), Utils = _p.r(12);
        var Palette = _p.r(11).createClass("Palette", {
            constructor: function() {
                this.color = {};
            },
            /*
         * 获取颜色名称所对应的颜色值的Color对象
         * @param name 需要获取的颜色名称
         * @return 对应颜色名称的color对象， 如果未找到对应的名称， 则返回null
         */
            get: function(name) {
                var colorValue = this.color[name] || StandardColor.EXTEND_STANDARD[name] || StandardColor.COLOR_STANDARD[name] || "";
                if (colorValue) {
                    return new Color(colorValue);
                }
                return null;
            },
            /*
         * 获取给定名称的颜色的hex值表示
         * @param name 需要获取的颜色名称
         * @return 如果找到对应的名称， 则返回该名称所对应的hex格式的值， 否则， 返回一个空字符串
         */
            getColorValue: function(name) {
                return this.color[name] || StandardColor.EXTEND_STANDARD[name] || StandardColor.COLOR_STANDARD[name] || "";
            },
            /*
         * 向调色板实例添加自己独有的颜色名称，对已存在的颜色名称， 将会覆盖掉
         * @param name 新添加的颜色名称
         * @param value 新添加的颜色名称所对应的值， 可以是一个合法的颜色字符串或者是一个color对象
         * @return 新添加的颜色的值
         */
            add: function(name, value) {
                if (typeof value === "string") {
                    this.color[name] = new Color(value).toRGBA();
                } else {
                    this.color[name] = value.toRGBA();
                }
                return value;
            },
            /*
         * 删除调色板实例上用户自己添加的颜色， 该方法不能删除内置的颜色
         * @param name 需要删除的颜色名称
         * @return 删除是否成功的bool值
         */
            remove: function(name) {
                if (this.color.hasOwnProperty(name)) {
                    delete this.color[name];
                    return true;
                }
                return false;
            }
        });
        Utils.extend(Palette, {
            getColor: function(name) {
                var colorValue = StandardColor.EXTEND_STANDARD[name] || StandardColor.COLOR_STANDARD[name];
                if (colorValue) {
                    return new Color(colorValue);
                }
                return null;
            },
            /*
         * 通过给定的名字获取标准的颜色值表示， 返回的值以hex的方式提供
         * @param name 需要获取的标准颜色名称
         * @return 名字所对应的颜色值的hex表示， 如果未找到对应名称的值， 则返回一个空字符串
         */
            getColorValue: function(name) {
                return StandardColor.EXTEND_STANDARD[name] || StandardColor.COLOR_STANDARD[name] || "";
            },
            /*
         * 向调色板添加颜色名称，新添加的颜色对所有的调色板对象都可见
         * 对已存在的颜色名称， 将会覆盖掉
         * @param name 新添加的颜色名称
         * @param value 新添加的颜色名称所对于的值， 应该是一个hex格式的颜色字符串， 如： ”#ff0000“
         * @return 新添加的颜色的值
         */
            addColor: function(name, value) {
                if (typeof value === "string") {
                    StandardColor.EXTEND_STANDARD[name] = new Color(value).toRGBA();
                } else {
                    StandardColor.EXTEND_STANDARD[name] = value.toRGBA();
                }
                return value;
            },
            /*
         * 删除用户自己添加的颜色， 该方法不能删除内置的颜色， 该方法不会影响调色板实例自由的颜色
         * @param name 需要删除的颜色名称
         * @return 删除是否成功的bool值
         */
            removeColor: function(name) {
                if (StandardColor.EXTEND_STANDARD.hasOwnProperty(name)) {
                    delete StandardColor.EXTEND_STANDARD[name];
                    return true;
                }
                return false;
            }
        });
        return Palette;
    }
};

//src/graphic/paper.js
_p[46] = {
    value: function(require, exports, module) {
        var Class = _p.r(11);
        var utils = _p.r(12);
        var svg = _p.r(68);
        var Container = _p.r(30);
        var ShapeContainer = _p.r(62);
        var ViewBox = _p.r(76);
        var EventHandler = _p.r(34);
        var Styled = _p.r(67);
        var Matrix = _p.r(44);
        var Paper = Class.createClass("Paper", {
            mixins: [ ShapeContainer, EventHandler, Styled, ViewBox ],
            constructor: function(container) {
                this.callBase();
                this.node = this.createSVGNode();
                this.node.paper = this;
                this.node.appendChild(this.resourceNode = svg.createNode("defs"));
                this.node.appendChild(this.shapeNode = svg.createNode("g"));
                this.resources = new Container();
                this.setWidth("100%").setHeight("100%");
                if (container) {
                    this.renderTo(container);
                }
                this.callMixin();
            },
            renderTo: function(container) {
                if (utils.isString(container)) {
                    container = document.getElementById(container);
                }
                this.container = container;
                container.appendChild(this.node);
            },
            createSVGNode: function() {
                var node = svg.createNode("svg");
                node.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                node.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
                node.setAttribute("version", "1.1");
                return node;
            },
            getNode: function() {
                return this.node;
            },
            getContainer: function() {
                return this.container;
            },
            getWidth: function() {
                return this.node.clientWidth;
            },
            setWidth: function(width) {
                this.node.setAttribute("width", width);
                return this;
            },
            getHeight: function() {
                return this.node.clientHeight;
            },
            setHeight: function(height) {
                this.node.setAttribute("height", height);
                return this;
            },
            setViewPort: function(cx, cy, zoom) {
                var viewport, box;
                if (arguments.length == 1) {
                    viewport = arguments[0];
                    cx = viewport.center.x;
                    cy = viewport.center.y;
                    zoom = viewport.zoom;
                }
                zoom = zoom || 1;
                box = this.getViewBox();
                var matrix = new Matrix();
                var dx = box.x + box.width / 2 - cx, dy = box.y + box.height / 2 - cy;
                matrix.translate(-cx, -cy);
                matrix.scale(zoom);
                matrix.translate(cx, cy);
                matrix.translate(dx, dy);
                this.shapeNode.setAttribute("transform", "matrix(" + matrix + ")");
                this.viewport = {
                    center: {
                        x: cx,
                        y: cy
                    },
                    offset: {
                        x: dx,
                        y: dy
                    },
                    zoom: zoom
                };
                return this;
            },
            getViewPort: function() {
                if (!this.viewport) {
                    var box = this.getViewBox();
                    return {
                        zoom: 1,
                        center: {
                            x: box.x + box.width / 2,
                            y: box.y + box.height / 2
                        },
                        offset: {
                            x: 0,
                            y: 0
                        }
                    };
                }
                return this.viewport;
            },
            getViewPortMatrix: function() {
                return Matrix.parse(this.shapeNode.getAttribute("transform"));
            },
            getViewPortTransform: function() {
                var m = this.shapeNode.getCTM();
                return new Matrix(m.a, m.b, m.c, m.d, m.e, m.f);
            },
            getTransform: function() {
                return this.getViewPortTransform().reverse();
            },
            addResource: function(resource) {
                this.resources.appendItem(resource);
                if (resource.node) {
                    this.resourceNode.appendChild(resource.node);
                }
                return this;
            },
            removeResource: function(resource) {
                if (resource.remove) {
                    resource.remove();
                }
                if (resource.node) {
                    this.resourceNode.removeChild(resource.node);
                }
                return this;
            },
            getPaper: function() {
                return this;
            }
        });
        var Shape = _p.r(61);
        Class.extendClass(Shape, {
            getPaper: function() {
                var parent = this.container;
                while (parent && parent instanceof Paper === false) {
                    parent = parent.container;
                }
                return parent;
            },
            isAttached: function() {
                return !!this.getPaper();
            },
            whenPaperReady: function(fn) {
                var me = this;
                function check() {
                    var paper = me.getPaper();
                    if (paper && fn) {
                        fn.call(me, paper);
                    }
                    return paper;
                }
                if (!check()) {
                    this.on("add treeadd", function listen() {
                        if (check()) {
                            me.off("add", listen);
                            me.off("treeadd", listen);
                        }
                    });
                }
                return this;
            }
        });
        return Paper;
    }
};

//src/graphic/path.js
_p[47] = {
    value: function(require, exports, module) {
        var Utils = _p.r(12);
        var createClass = _p.r(11).createClass;
        var Shape = _p.r(61);
        var svg = _p.r(68);
        var g = _p.r(35);
        var slice = Array.prototype.slice, flatten = Utils.flatten;
        var PathDrawer = createClass("PathDrawer", {
            constructor: function(path) {
                this.segment = [];
                this.path = path;
                this.__clear = false;
            },
            getPath: function() {
                return this.path;
            },
            redraw: function() {
                this._transation = this._transation || [];
                return this.clear();
            },
            done: function() {
                var transation = this._transation;
                this._transation = null;
                this.push(transation);
                return this;
            },
            clear: function() {
                if (this._transation) {
                    this._transation = [];
                } else {
                    this.path.setPathData("M 0 0");
                }
                this._clear = true;
                return this;
            },
            push: function() {
                var segment = slice.call(arguments);
                var originData;
                if (this._transation) {
                    this._transation.push(segment);
                    return this;
                }
                if (this._clear) {
                    originData = "";
                    this._clear = false;
                } else {
                    originData = this.path.getPathData();
                }
                originData = originData || "";
                this.path.setPathData(originData + g.pathToString(segment));
                return this;
            },
            moveTo: function(x, y) {
                return this.push("M", slice.call(arguments));
            },
            moveBy: function(dx, dy) {
                return this.push("m", slice.call(arguments));
            },
            lineTo: function(x, y) {
                return this.push("L", slice.call(arguments));
            },
            lineBy: function(dx, dy) {
                return this.push("l", slice.call(arguments));
            },
            arcTo: function(rx, ry, xr, laf, sf, x, y) {
                return this.push("A", slice.call(arguments));
            },
            arcBy: function(rx, ry, xr, laf, sf, dx, dy) {
                return this.push("a", arguments);
            },
            carcTo: function(r, laf, sf, x, y) {
                return this.push("A", [ r, r, 0 ].concat(slice.call(arguments, 1)));
            },
            carcBy: function(r, laf, sf, dx, dy) {
                return this.push("a", [ r, r, 0 ].concat(slice.call(arguments, 1)));
            },
            bezierTo: function(x1, y1, x2, y2, x, y) {
                return this.push("C", slice.call(arguments));
            },
            bezierBy: function(dx1, dy1, dx2, dy2, dx, dy) {
                return this.push("c", slice.call(arguments));
            },
            close: function() {
                return this.push("z");
            }
        });
        return createClass("Path", {
            base: Shape,
            constructor: function(data) {
                this.callBase("path");
                if (data) {
                    this.setPathData(data);
                }
                this.node.setAttribute("fill", svg.defaults.fill);
                this.node.setAttribute("stroke", svg.defaults.stroke);
            },
            setPathData: function(data) {
                data = data || "M0,0";
                this.pathdata = g.pathToString(data);
                this.node.setAttribute("d", this.pathdata);
                this.trigger("shapeupdate", {
                    type: "pathdata"
                });
                return this;
            },
            getPathData: function() {
                return this.pathdata || "";
            },
            getDrawer: function() {
                return new PathDrawer(this);
            },
            isClosed: function() {
                var data = this.getPathData();
                return !!~data.indexOf("z") || !!~data.indexOf("Z");
            }
        });
    }
};

//src/graphic/pattern.js
_p[48] = {
    value: function(require, exports, module) {
        var Resource = _p.r(59);
        var ShapeContainer = _p.r(62);
        var svg = _p.r(68);
        return _p.r(11).createClass("PatternBrush", {
            base: Resource,
            mixins: [ ShapeContainer ],
            constructor: function(paper) {
                this.callBase("pattern", paper);
                this.node.setAttribute("patternUnits", "userSpaceOnUse");
            },
            setX: function(x) {
                this.x = x;
                this.node.setAttribute("x", x);
                return this;
            },
            setY: function(y) {
                this.y = y;
                this.node.setAttribute("y", y);
                return this;
            },
            setWidth: function(width) {
                this.width = width;
                this.node.setAttribute("width", width);
                return this;
            },
            setHeight: function(height) {
                this.height = height;
                this.node.setAttribute("height", height);
                return this;
            },
            getWidth: function() {
                return this.width;
            },
            getHeight: function() {
                return this.height;
            }
        });
    }
};

//src/graphic/pen.js
_p[49] = {
    value: function(require, exports, module) {
        var Color = _p.r(29);
        return _p.r(11).createClass("Pen", {
            constructor: function(brush, width) {
                this.brush = brush;
                this.width = width || 1;
                this.linecap = null;
                this.linejoin = null;
                this.dashArray = null;
                this.opacity = 1;
            },
            getBrush: function() {
                return this.brush;
            },
            setBrush: function(brush) {
                this.brush = brush;
                return this;
            },
            setColor: function(color) {
                return this.setBrush(color);
            },
            getColor: function() {
                return this.brush instanceof Color ? this.brush : null;
            },
            getWidth: function() {
                return this.width;
            },
            setWidth: function(width) {
                this.width = width;
                return this;
            },
            getOpacity: function() {
                return this.opacity;
            },
            setOpacity: function(opacity) {
                this.opacity = opacity;
            },
            getLineCap: function() {
                return this.linecap;
            },
            setLineCap: function(linecap) {
                this.linecap = linecap;
                return this;
            },
            getLineJoin: function() {
                return this.linejoin;
            },
            setLineJoin: function(linejoin) {
                this.linejoin = linejoin;
                return this;
            },
            getDashArray: function() {
                return this.dashArray;
            },
            setDashArray: function(dashArray) {
                this.dashArray = dashArray;
                return this;
            },
            stroke: function(shape) {
                var node = shape.node;
                node.setAttribute("stroke", this.brush.toString());
                node.setAttribute("stroke-width", this.getWidth());
                if (this.getOpacity() < 1) {
                    node.setAttribute("stroke-opacity", this.getOpacity());
                }
                if (this.getLineCap()) {
                    node.setAttribute("stroke-linecap", this.getLineCap());
                }
                if (this.getLineJoin()) {
                    node.setAttribute("stroke-linejoin", this.getLineJoin());
                }
                if (this.getDashArray()) {
                    node.setAttribute("stroke-dasharray", this.getDashArray());
                }
            }
        });
    }
};

//src/graphic/pie.js
_p[50] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass({
            base: _p.r(69),
            constructor: function(radius, angle, angleOffset) {
                this.callBase([ 0, radius ], angle, angleOffset);
            },
            getRadius: function() {
                return this.getSectionArray()[1];
            },
            setRadius: function(radius) {
                this.setSectionArray([ 0, radius ]);
            }
        });
    }
};

//src/graphic/point.js
/*
 * 点对象抽象
 */
_p[51] = {
    value: function(require, exports, module) {
        /**
     * @class kity.Point
     * @description 表示一个点
     */
        var Point = _p.r(11).createClass("Point", {
            /**
         * @constructor
         * @for kity.Point
         * @description 指定默认的 x 和 y 创建一个点
         * 
         * @param  {Number} x 点的 x 坐标
         * @param  {Number} y 点的 y 坐标
         */
            constructor: function(x, y) {
                /**
             * @property
             * @for kity.Point
             * @description 表示点的 x 坐标
             * @type {Number}
             */
                this.x = x || 0;
                /**
             * @property
             * @for kity.Point
             * @description 表示点的 y 坐标
             * @type {Number}
             */
                this.y = y || 0;
            },
            offset: function(dx, dy) {
                if (arguments.length == 1) {
                    dy = dx.y;
                    dx = dx.x;
                }
                return new Point(this.x + dx, this.y + dy);
            },
            valueOf: function() {
                return [ this.x, this.y ];
            },
            toString: function() {
                return this.valueOf().join(" ");
            },
            spof: function() {
                return new Point((this.x | 0) + .5, (this.y | 0) + .5);
            },
            round: function() {
                return new Point(this.x | 0, this.y | 0);
            },
            isOrigin: function() {
                return this.x === 0 && this.y === 0;
            }
        });
        /**
     * @static
     * @method fromPolar()
     * @for kity.Point
     * @grammar kity.Point.fromPolar(radius, angle, unit) => kity.Point
     * @param  {Number} radius 极坐标中的半径
     * @param  {Number} angle  极坐标中的角度
     * @param  {String} unit   角度使用的单位，默认为 'deg' (角度)，可以取值为 'rad'，表示传入的是弧度值
     */
        Point.fromPolar = function(radius, angle, unit) {
            if (unit != "rad") {
                // deg to rad
                angle = angle / 180 * Math.PI;
            }
            return new Point(radius * Math.cos(angle), radius * Math.sin(angle));
        };
        Point.parse = function(unknown) {
            if (!unknown) return new Point();
            if (unknown instanceof Point) {
                return unknown;
            }
            if (typeof unknown == "string") {
                return Point.parse(unknown.split(/\s*[\s,]\s*/));
            }
            if ("0" in unknown && "1" in unknown) {
                return new Point(unknown[0], unknown[1]);
            }
        };
        return Point;
    }
};

//src/graphic/pointcontainer.js
/**
 * 点集合容器
 */
_p[52] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass("PointContainer", {
            base: _p.r(30),
            constructor: function() {
                this.callBase();
            },
            addPoint: function(point, pos) {
                return this.addItem.apply(this, arguments);
            },
            prependPoint: function() {
                return this.prependItem.apply(this, arguments);
            },
            appendPoint: function() {
                return this.appendItem.apply(this, arguments);
            },
            removePoint: function(pos) {
                return this.removeItem.apply(this, arguments);
            },
            addPoints: function() {
                return this.addItems.apply(this, arguments);
            },
            setPoints: function() {
                return this.setItems.apply(this, arguments);
            },
            getPoint: function() {
                return this.getItem.apply(this, arguments);
            },
            getPoints: function() {
                return this.getItems.apply(this, arguments);
            },
            getFirstPoint: function() {
                return this.getFirstItem.apply(this, arguments);
            },
            getLastPoint: function() {
                return this.getLastItem.apply(this, arguments);
            }
        });
    }
};

//src/graphic/poly.js
/*
 * 通过点来决定图形的公共父类
 */
_p[53] = {
    value: function(require, exports, module) {
        var Utils = _p.r(12);
        return _p.r(11).createClass("Poly", {
            base: _p.r(47),
            mixins: [ _p.r(52) ],
            constructor: function(points, closeable) {
                this.callBase();
                //是否可闭合
                this.closeable = !!closeable;
                this.setPoints(points || []);
                this.changeable = true;
                this.update();
            },
            //当点集合发生变化时采取的动作
            onContainerChanged: function() {
                if (this.changeable) {
                    this.update();
                }
            },
            update: function() {
                var drawer = this.getDrawer(), points = this.getPoints();
                drawer.clear();
                if (!points.length) {
                    return this;
                }
                drawer.moveTo(points[0]);
                for (var i = 1, point, len = points.length; i < len; i++) {
                    point = points[i];
                    drawer.lineTo(point);
                }
                if (this.closeable && points.length > 2) {
                    drawer.close();
                }
                return this;
            }
        });
    }
};

//src/graphic/polygon.js
_p[54] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass("Polygon", {
            base: _p.r(53),
            constructor: function(points) {
                this.callBase(points, true);
            }
        });
    }
};

//src/graphic/polyline.js
_p[55] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass("Polyline", {
            base: _p.r(53),
            constructor: function(points) {
                this.callBase(points);
            }
        });
    }
};

//src/graphic/radialgradient.js
_p[56] = {
    value: function(require, exports, module) {
        var Gradient = _p.r(36);
        return _p.r(11).createClass("RadialGradientBrush", {
            base: Gradient,
            constructor: function(paper) {
                this.callBase("radialGradient", paper);
                this.setCenter(.5, .5);
                this.setFocal(.5, .5);
                this.setRadius(.5);
            },
            setCenter: function(cx, cy) {
                this.node.setAttribute("cx", cx);
                this.node.setAttribute("cy", cy);
                return this;
            },
            getCenter: function() {
                return {
                    x: +this.node.getAttribute("cx"),
                    y: +this.node.getAttribute("cy")
                };
            },
            setFocal: function(fx, fy) {
                this.node.setAttribute("fx", fx);
                this.node.setAttribute("fy", fy);
                return this;
            },
            getFocal: function() {
                return {
                    x: +this.node.getAttribute("fx"),
                    y: +this.node.getAttribute("fy")
                };
            },
            setRadius: function(r) {
                this.node.setAttribute("r", r);
                return this;
            },
            getRadius: function() {
                return +this.node.getAttribute("r");
            }
        });
    }
};

//src/graphic/rect.js
_p[57] = {
    value: function(require, exports, module) {
        var RectUtils = {}, Utils = _p.r(12), Point = _p.r(51), Box = _p.r(26);
        Utils.extend(RectUtils, {
            //根据传递进来的width、height和radius属性，
            //获取最适合的radius值
            formatRadius: function(width, height, radius) {
                var minValue = Math.floor(Math.min(width / 2, height / 2));
                return Math.min(minValue, radius);
            }
        });
        /**
     * @class kity.Rect
     * @description 表示一个矩形
     * @base kity.Path
     */
        var Rect = _p.r(11).createClass("Rect", {
            base: _p.r(47),
            /**
         * @constructor
         * @for kity.Rect
         * @grammar new kity.Rect(width, height, x, y, radius)
         * @param  {Number} width  矩形的初始化宽度
         * @param  {Number} height 矩形的初始化高度
         * @param  {Number} x      矩形的初始化 x 坐标
         * @param  {Number} y      矩形的初始化 y 坐标
         * @param  {Number} radius 矩形的初始化圆角大小
         */
            constructor: function(width, height, x, y, radius) {
                this.callBase();
                this.x = x || 0;
                this.y = y || 0;
                this.width = width || 0;
                this.height = height || 0;
                this.radius = RectUtils.formatRadius(this.width, this.height, radius || 0);
                this.update();
            },
            update: function() {
                var x = this.x, y = this.y, w = this.width, h = this.height, r = this.radius;
                var drawer = this.getDrawer().redraw();
                if (!r) {
                    // 直角
                    drawer.push("M", x, y);
                    drawer.push("h", w);
                    drawer.push("v", h);
                    drawer.push("h", -w);
                    drawer.push("z");
                } else {
                    //圆角
                    w -= 2 * r;
                    h -= 2 * r;
                    drawer.push("M", x + r, y);
                    drawer.push("h", w);
                    drawer.push("a", r, r, 0, 0, 1, r, r);
                    drawer.push("v", h);
                    drawer.push("a", r, r, 0, 0, 1, -r, r);
                    drawer.push("h", -w);
                    drawer.push("a", r, r, 0, 0, 1, -r, -r);
                    drawer.push("v", -h);
                    drawer.push("a", r, r, 0, 0, 1, r, -r);
                    drawer.push("z");
                }
                drawer.done();
                return this;
            },
            /**
         * @method setWidth
         * @for kity.Rect
         * @grammar setWidth(width) => kity.Rect
         * @description 设置矩形的宽度，设置后返回矩形实例本身
         * @param {Number} width 宽度值
         *
         * @example
         * ```js
         * rect.setWidth(300);
         * ```
         */
            setWidth: function(width) {
                this.width = width;
                return this.update();
            },
            /**
         * @method setHeight
         * @for  kity.Rect
         * @grammar setHeight(height) => kity.Rect
         * @description 设置矩形的高度，设置后返回矩形实例本身
         * @param {Number} height 高度值
         *
         * @example
         * ```js
         * rect.setHeight(200);
         * ```
         */
            setHeight: function(height) {
                this.height = height;
                return this.update();
            },
            /**
         * @method setSize
         * @for  kity.Rect
         * @grammar setSize(width, height) => kity.Rect
         * @description 设置矩形的尺寸，设置后返回矩形本身
         * @param {Number} width  矩形的宽度值
         * @param {Number} height 矩形的高度值
         *
         * @example
         * ```js
         * rect.setSize(300, 200);
         * ```
         */
            setSize: function(width, height) {
                this.width = width;
                this.height = height;
                return this.update();
            },
            /**
         * @method setBox
         * @for kity.Rect
         * @grammar setBox(box) => kity.Rect
         * @description 使用一个 kity 的盒子数据，
         * @param {kity.Box} box 盒子数据
         */
            setBox: function(box) {
                this.x = box.x;
                this.y = box.y;
                this.width = box.width;
                this.height = box.height;
                return this.update();
            },
            getBox: function() {
                return new Box(this.x, this.y, this.width, this.height);
            },
            getRadius: function() {
                return this.radius;
            },
            setRadius: function(radius) {
                this.radius = RectUtils.formatRadius(this.width, this.height, radius || 0);
                return this.update();
            },
            getPosition: function() {
                return new Point(this.x, this.y);
            },
            setPosition: function(x, y) {
                if (arguments.length == 1) {
                    var p = Point.parse(arguments[0]);
                    y = p.y;
                    x = p.x;
                }
                this.x = x;
                this.y = y;
                return this.update();
            },
            getWidth: function() {
                return this.width;
            },
            getHeight: function() {
                return this.height;
            },
            getPositionX: function() {
                return this.x;
            },
            getPositionY: function() {
                return this.y;
            },
            setPositionX: function(x) {
                this.x = x;
                return this.update();
            },
            setPositionY: function(y) {
                this.y = y;
                return this.update();
            }
        });
        return Rect;
    }
};

//src/graphic/regularpolygon.js
_p[58] = {
    value: function(require, exports, module) {
        var Point = _p.r(51);
        return _p.r(11).createClass("RegularPolygon", {
            base: _p.r(47),
            constructor: function(side, radius, x, y) {
                this.callBase();
                this.radius = radius || 0;
                this.side = Math.max(side || 3, 3);
                if (arguments.length > 2) {
                    if (arguments.length == 3) {
                        y = x.y;
                        x = x.x;
                    }
                }
                this.center = new Point(x, y);
                this.draw();
            },
            getSide: function() {
                return this.side;
            },
            setSide: function(side) {
                this.side = side;
                return this.draw();
            },
            getRadius: function() {
                return this.radius;
            },
            setRadius: function(radius) {
                this.radius = radius;
                return this.draw();
            },
            draw: function() {
                var radius = this.radius, side = this.side, step = Math.PI * 2 / side, drawer = this.getDrawer(), i;
                drawer.clear();
                drawer.moveTo(Point.fromPolar(radius, Math.PI / 2, "rad").offset(this.center));
                for (i = 0; i <= side; i++) {
                    drawer.lineTo(Point.fromPolar(radius, step * i + Math.PI / 2, "rad").offset(this.center));
                }
                drawer.close();
                return this;
            }
        });
    }
};

//src/graphic/resource.js
/**
 * @fileOverview
 *
 * 资源节点基类
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[59] = {
    value: function(require, exports, module) {
        var svg = _p.r(68);
        return _p.r(11).createClass("Resource", {
            constructor: function(nodeType, paper) {
                this.callBase();
                this.node = svg.createNode(nodeType);
                if (paper) {
                    paper.addResource(this);
                }
            },
            toString: function() {
                return "url(#" + this.node.id + ")";
            }
        });
    }
};

//src/graphic/ring.js
_p[60] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass({
            base: _p.r(69),
            constructor: function(innerRadius, outerRadius) {
                this.callBase([ innerRadius, outerRadius ], 360, 0);
            },
            getInnerRadius: function() {
                return this.getSectionArray()[0];
            },
            getOuterRadius: function() {
                return this.getSectionArray()[1];
            },
            setInnerRadius: function(value) {
                this.setSectionArray([ value, this.getOuterRadius() ]);
            },
            setOuterRadius: function(value) {
                this.setSectionArray([ this.getInnerRadius(), value ]);
            }
        });
    }
};

//src/graphic/shape.js
_p[61] = {
    value: function(require, exports, module) {
        var svg = _p.r(68);
        var utils = _p.r(12);
        var EventHandler = _p.r(34);
        var Styled = _p.r(67);
        var Data = _p.r(32);
        var Matrix = _p.r(44);
        var Pen = _p.r(49);
        var slice = Array.prototype.slice;
        var Box = _p.r(26);
        var Shape = _p.r(11).createClass("Shape", {
            mixins: [ EventHandler, Styled, Data ],
            constructor: function Shape(tagName) {
                this.node = svg.createNode(tagName);
                this.node.shape = this;
                this.transform = {
                    translate: null,
                    rotate: null,
                    scale: null,
                    matrix: null
                };
                this.callMixin();
            },
            getId: function() {
                return this.node.id;
            },
            setId: function(id) {
                this.node.id = id;
                return this;
            },
            getNode: function() {
                return this.node;
            },
            getBoundaryBox: function() {
                var box;
                try {
                    box = this.node.getBBox();
                } catch (e) {
                    box = {
                        x: this.node.clientLeft,
                        y: this.node.clientTop,
                        width: this.node.clientWidth,
                        height: this.node.clientHeight
                    };
                }
                return new Box(box);
            },
            getRenderBox: function(refer) {
                var box = this.getBoundaryBox();
                var matrix = this.getTransform(refer);
                return matrix.transformBox(box);
            },
            getWidth: function() {
                return this.getRenderBox().width;
            },
            getHeight: function() {
                return this.getRenderBox().height;
            },
            getSize: function() {
                var box = this.getRenderBox();
                delete box.x;
                delete box.y;
                return box;
            },
            setOpacity: function(value) {
                this.node.setAttribute("opacity", value);
                return this;
            },
            getOpacity: function() {
                var opacity = this.node.getAttribute("opacity");
                return opacity ? +opacity : 1;
            },
            setVisible: function(value) {
                if (value) {
                    this.node.removeAttribute("display");
                } else {
                    this.node.setAttribute("display", "none");
                }
                return this;
            },
            getVisible: function() {
                this.node.getAttribute("display");
            },
            hasAncestor: function(node) {
                var parent = this.container;
                while (parent) {
                    if (parent === node) {
                        return true;
                    }
                    parent = parent.container;
                }
                return false;
            },
            getTransform: function(refer) {
                return Matrix.getCTM(this, refer);
            },
            clearTransform: function() {
                this.node.removeAttribute("transform");
                this.transform = {
                    translate: null,
                    rotate: null,
                    scale: null,
                    matrix: null
                };
                this.trigger("shapeupdate", {
                    type: "transform"
                });
                return this;
            },
            _applyTransform: function() {
                var t = this.transform, result = [];
                if (t.translate) {
                    result.push([ "translate(", t.translate, ")" ]);
                }
                if (t.rotate) {
                    result.push([ "rotate(", t.rotate, ")" ]);
                }
                if (t.scale) {
                    result.push([ "scale(", t.scale, ")" ]);
                }
                if (t.matrix) {
                    result.push([ "matrix(", t.matrix, ")" ]);
                }
                this.node.setAttribute("transform", utils.flatten(result).join(" "));
                return this;
            },
            setMatrix: function(m) {
                this.transform.matrix = m;
                return this._applyTransform();
            },
            setTranslate: function(t) {
                this.transform.translate = t !== null && slice.call(arguments) || null;
                return this._applyTransform();
            },
            setRotate: function(r) {
                this.transform.rotate = r !== null && slice.call(arguments) || null;
                return this._applyTransform();
            },
            setScale: function(s) {
                this.transform.scale = s !== null && slice.call(arguments) || null;
                return this._applyTransform();
            },
            translate: function(dx, dy) {
                var m = this.transform.matrix || new Matrix();
                if (dy === undefined) {
                    dy = 0;
                }
                this.transform.matrix = m.translate(dx, dy);
                return this._applyTransform();
            },
            rotate: function(deg) {
                var m = this.transform.matrix || new Matrix();
                this.transform.matrix = m.rotate(deg);
                return this._applyTransform();
            },
            scale: function(sx, sy) {
                var m = this.transform.matrix || new Matrix();
                if (sy === undefined) {
                    sy = sx;
                }
                this.transform.matrix = m.scale(sx, sy);
                return this._applyTransform();
            },
            skew: function(sx, sy) {
                var m = this.transform.matrix || new Matrix();
                if (sy === undefined) {
                    sy = sx;
                }
                this.transform.matrix = m.skew(sx, sy);
                return this._applyTransform();
            },
            stroke: function(pen, width) {
                if (pen && pen.stroke) {
                    pen.stroke(this);
                } else if (pen) {
                    // 字符串或重写了 toString 的对象
                    this.node.setAttribute("stroke", pen.toString());
                    if (width) {
                        this.node.setAttribute("stroke-width", width);
                    }
                } else if (pen === null) {
                    this.node.removeAttribute("stroe");
                }
                return this;
            },
            fill: function(brush) {
                // 字符串或重写了 toString 的对象
                if (brush) {
                    this.node.setAttribute("fill", brush.toString());
                }
                if (brush === null) {
                    this.node.removeAttribute("fill");
                }
                return this;
            },
            setAttr: function(a, v) {
                var me = this;
                if (utils.isObject(a)) {
                    utils.each(a, function(val, key) {
                        me.setAttr(key, val);
                    });
                }
                if (v === undefined || v === null || v === "") {
                    this.node.removeAttribute(a);
                } else {
                    this.node.setAttribute(a, v);
                }
                return this;
            },
            getAttr: function(a) {
                return this.node.getAttribute(a);
            }
        });
        return Shape;
    }
};

//src/graphic/shapecontainer.js
_p[62] = {
    value: function(require, exports, module) {
        var Container = _p.r(30);
        var utils = _p.r(12);
        var ShapeContainer = _p.r(11).createClass("ShapeContainer", {
            base: Container,
            isShapeContainer: true,
            /* private */
            handleAdd: function(shape, index) {
                var parent = this.getShapeNode();
                parent.insertBefore(shape.node, parent.childNodes[index] || null);
                shape.trigger("add", {
                    container: this
                });
                if (shape.notifyTreeModification) {
                    shape.notifyTreeModification("treeadd", this);
                }
            },
            /* private */
            handleRemove: function(shape, index) {
                var parent = this.getShapeNode();
                parent.removeChild(shape.node);
                shape.trigger("remove", {
                    container: this
                });
                if (shape.notifyTreeModification) {
                    shape.notifyTreeModification("treeremove", this);
                }
            },
            /* private */
            notifyTreeModification: function(type, container) {
                this.eachItem(function(index, shape) {
                    if (shape.notifyTreeModification) {
                        shape.notifyTreeModification(type, container);
                    }
                    shape.trigger(type, {
                        container: container
                    });
                });
            },
            /* public */
            getShape: function(index) {
                return this.getItem(index);
            },
            /* public */
            addShape: function(shape, index) {
                return this.addItem(shape, index);
            },
            put: function(shape) {
                this.addShape(shape);
                return shape;
            },
            appendShape: function(shape) {
                return this.addShape(shape);
            },
            prependShape: function(shape) {
                return this.addShape(shape, 0);
            },
            replaceShape: function(replacer, origin) {
                var index = this.indexOf(origin);
                if (index === -1) {
                    return;
                }
                this.removeShape(index);
                this.addShape(replacer, index);
                return this;
            },
            addShapeBefore: function(shape, refer) {
                var index = this.indexOf(refer);
                return this.addShape(shape, index);
            },
            addShapeAfter: function(shape, refer) {
                var index = this.indexOf(refer);
                return this.addShape(shape, index === -1 ? undefined : index + 1);
            },
            /* public */
            addShapes: function(shapes) {
                return this.addItems(shapes);
            },
            /* public */
            removeShape: function(index) {
                return this.removeItem(index);
            },
            getShapes: function() {
                return this.getItems();
            },
            getShapesByType: function(name) {
                var shapes = [];
                function getShapes(shape) {
                    if (name.toLowerCase() == shape.getType().toLowerCase()) {
                        shapes.push(shape);
                    }
                    if (shape.isShapeContainer) {
                        utils.each(shape.getShapes(), function(n) {
                            getShapes(n);
                        });
                    }
                }
                getShapes(this);
                return shapes;
            },
            /* public */
            getShapeById: function(id) {
                return this.getShapeNode().getElementById(id).shape;
            },
            arrangeShape: function(shape, index) {
                return this.removeShape(shape).addShape(shape, index);
            },
            /* protected */
            getShapeNode: function() {
                return this.shapeNode || this.node;
            }
        });
        var Shape = _p.r(61);
        _p.r(11).extendClass(Shape, {
            bringTo: function(index) {
                this.container.arrangeShape(this, index);
                return this;
            },
            bringFront: function() {
                return this.bringTo(this.container.indexOf(this) + 1);
            },
            bringBack: function() {
                return this.bringTo(this.container.indexOf(this) - 1);
            },
            bringTop: function() {
                this.container.removeShape(this).addShape(this);
                return this;
            },
            bringRear: function() {
                return this.bringTo(0);
            },
            bringRefer: function(referShape, offset) {
                if (referShape.container) {
                    if (this.remove) {
                        this.remove();
                    }
                    referShape.container.addShape(this, referShape.container.indexOf(referShape) + (offset || 0));
                }
                return this;
            },
            bringAbove: function(referShape) {
                return this.bringRefer(referShape);
            },
            bringBelow: function(referShape) {
                return this.bringRefer(referShape, 1);
            },
            replaceBy: function(newShape) {
                if (this.container) {
                    newShape.bringAbove(this);
                    this.remove();
                }
                return this;
            }
        });
        return ShapeContainer;
    }
};

//src/graphic/shapeevent.js
/*
 * 图形事件包装类
 * */
_p[63] = {
    value: function(require, exprots, module) {
        var Matrix = _p.r(44), Utils = _p.r(12), Point = _p.r(51);
        return _p.r(11).createClass("ShapeEvent", {
            constructor: function(event) {
                var target = null;
                // dom 事件封装对象
                if (!Utils.isObject(event.target)) {
                    this.type = event.type;
                    target = event.target;
                    // use标签有特殊属性， 需要区别对待
                    if (target.correspondingUseElement) {
                        target = target.correspondingUseElement;
                    }
                    this.originEvent = event;
                    this.targetShape = target.shape || target.paper || event.currentTarget && (event.currentTarget.shape || event.currentTarget.paper);
                    if (event._kityParam) {
                        Utils.extend(this, event._kityParam);
                    }
                } else {
                    Utils.extend(this, event);
                }
            },
            preventDefault: function() {
                var evt = this.originEvent;
                if (!evt) {
                    return true;
                }
                if (evt.preventDefault) {
                    evt.preventDefault();
                    return evt.cancelable;
                } else {
                    evt.returnValue = false;
                    return true;
                }
            },
            //当前鼠标事件在用户坐标系中点击的点的坐标位置
            getPosition: function(refer, touchIndex) {
                if (!this.originEvent) {
                    return null;
                }
                var eventClient = this.originEvent.touches ? this.originEvent.touches[touchIndex || 0] : this.originEvent;
                var target = this.targetShape;
                var targetNode = target.shapeNode || target.node;
                var pScreen = new Point(eventClient && eventClient.clientX || 0, eventClient && eventClient.clientY || 0);
                var pTarget = Matrix.transformPoint(pScreen, targetNode.getScreenCTM().inverse());
                var pRefer = Matrix.getCTM(target, refer || "view").transformPoint(pTarget);
                return pRefer;
            },
            stopPropagation: function() {
                var evt = this.originEvent;
                if (!evt) {
                    return true;
                }
                if (evt.stopPropagation) {
                    evt.stopPropagation();
                } else {
                    evt.cancelBubble = false;
                }
            }
        });
    }
};

//src/graphic/shapepoint.js
/*
 * 图形上的点抽象
 */
_p[64] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass("ShapePoint", {
            base: _p.r(51),
            constructor: function(px, py) {
                this.callBase(px, py);
            },
            setX: function(x) {
                return this.setPoint(x, this.y);
            },
            setY: function(y) {
                return this.setPoint(this.x, y);
            },
            setPoint: function(x, y) {
                this.x = x;
                this.y = y;
                this.update();
                return this;
            },
            getPoint: function() {
                return this;
            },
            update: function() {
                if (this.container && this.container.update) {
                    this.container.update();
                }
                return this;
            }
        });
    }
};

//src/graphic/standardcolor.js
/**
 * 标准颜色映射
 */
_p[65] = {
    value: {
        COLOR_STANDARD: {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkgrey: "#a9a9a9",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkslategrey: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            grey: "#808080",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgray: "#d3d3d3",
            lightgreen: "#90ee90",
            lightgrey: "#d3d3d3",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370db",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#db7093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00"
        },
        //标准扩展
        EXTEND_STANDARD: {}
    }
};

//src/graphic/star.js
_p[66] = {
    value: function(require, exports, module) {
        /**
     * @see http://www.jdawiseman.com/papers/easymath/surds_star_inner_radius.html
     */
        var defaultRatioForStar = {
            "3": .2,
            // yy
            "5": .38196601125,
            "6": .57735026919,
            "8": .541196100146,
            "10": .726542528005,
            "12": .707106781187
        };
        var Point = _p.r(51);
        return _p.r(11).createClass("Star", {
            base: _p.r(47),
            constructor: function(vertex, radius, shrink, offset, angleOffset) {
                this.callBase();
                this.vertex = vertex || 3;
                this.radius = radius || 0;
                this.shrink = shrink;
                this.offset = offset || new Point(0, 0);
                this.angleOffset = angleOffset || 0;
                this.draw();
            },
            getVertex: function() {
                return this.vertex;
            },
            setVertex: function(value) {
                this.vertex = value;
                return this.draw();
            },
            getRadius: function() {
                return this.radius;
            },
            setRadius: function(value) {
                this.radius = value;
                return this.draw();
            },
            getShrink: function() {
                return this.shrink;
            },
            setShrink: function(value) {
                this.shrink = value;
                return this.draw();
            },
            getOffset: function() {
                return this.offset;
            },
            setOffset: function(value) {
                this.offset = value;
                return this.draw();
            },
            getAngleOffset: function() {
                return this.angleOffset;
            },
            setAngleOffset: function(value) {
                this.angleOffset = value;
                return this.draw();
            },
            draw: function() {
                var innerRadius = this.radius, outerRadius = this.radius * (this.shrink || defaultRatioForStar[this.vertex] || .5), vertex = this.vertex, offset = this.offset, angleStart = 90, angleStep = 180 / vertex, angleOffset = this.angleOffset, drawer = this.getDrawer(), i, angle;
                drawer.clear();
                drawer.moveTo(Point.fromPolar(outerRadius, angleStart));
                for (i = 1; i <= vertex * 2; i++) {
                    angle = angleStart + angleStep * i;
                    // 绘制内点
                    if (i % 2) {
                        drawer.lineTo(Point.fromPolar(innerRadius, angle + angleOffset).offset(offset));
                    } else {
                        drawer.lineTo(Point.fromPolar(outerRadius, angle));
                    }
                }
                drawer.close();
            }
        });
    }
};

//src/graphic/styled.js
_p[67] = {
    value: function(require, exports, module) {
        // polyfill for ie
        var ClassList = _p.r(11).createClass("ClassList", {
            constructor: function(node) {
                this._node = node;
                this._list = node.className.toString().split(" ");
            },
            _update: function() {
                this._node.className = this._list.join(" ");
            },
            add: function(name) {
                this._list.push(name);
                this._update();
            },
            remove: function(name) {
                var index = this._list.indexOf(name);
                if (~index) {
                    this._list.splice(index, 1);
                }
                this._update();
            },
            contains: function(name) {
                return !!~this._list.indexOf(name);
            }
        });
        function getClassList(node) {
            if (!node.classList) {
                node.classList = new ClassList(node);
            }
            return node.classList;
        }
        return _p.r(11).createClass("Styled", {
            addClass: function(name) {
                getClassList(this.node).add(name);
                return this;
            },
            removeClass: function(name) {
                getClassList(this.node).remove(name);
                return this;
            },
            hasClass: function(name) {
                return getClassList(this.node).contains(name);
            },
            setStyle: function(styles) {
                if (arguments.length == 2) {
                    this.node.style[arguments[0]] = arguments[1];
                    return this;
                }
                for (var name in styles) {
                    if (styles.hasOwnProperty(name)) {
                        this.node.style[name] = styles[name];
                    }
                }
                return this;
            }
        });
    }
};

//src/graphic/svg.js
_p[68] = {
    value: function(require, exports, module) {
        var doc = document;
        var id = 0;
        var svg = {
            createNode: function(name) {
                var node = doc.createElementNS(svg.ns, name);
                node.id = "kity_" + name + "_" + id++;
                return node;
            },
            defaults: {
                stroke: "none",
                fill: "none"
            },
            xlink: "http://www.w3.org/1999/xlink",
            ns: "http://www.w3.org/2000/svg"
        };
        return svg;
    }
};

//src/graphic/sweep.js
_p[69] = {
    value: function(require, exports, module) {
        var Point = _p.r(51);
        return _p.r(11).createClass("Sweep", {
            base: _p.r(47),
            constructor: function(sectionArray, angle, angleOffset) {
                this.callBase();
                this.sectionArray = sectionArray || [];
                this.angle = angle || 0;
                this.angleOffset = angleOffset || 0;
                this.draw();
            },
            getSectionArray: function() {
                return this.sectionArray;
            },
            setSectionArray: function(value) {
                this.sectionArray = value;
                return this.draw();
            },
            getAngle: function() {
                return this.angle;
            },
            setAngle: function(value) {
                this.angle = value;
                return this.draw();
            },
            getAngleOffset: function() {
                return this.angleOffset;
            },
            setAngleOffset: function(value) {
                this.angleOffset = value;
                return this.draw();
            },
            draw: function() {
                var sectionArray = this.sectionArray, i;
                for (i = 0; i < sectionArray.length; i += 2) {
                    this.drawSection(sectionArray[i], sectionArray[i + 1]);
                }
                return this;
            },
            drawSection: function(from, to) {
                var angleLength = this.angle && (this.angle % 360 ? this.angle % 360 : 360), angleStart = this.angleOffset, angleHalf = angleStart + angleLength / 2, angleEnd = angleStart + angleLength, sweepFlag = angleLength < 0 ? 0 : 1, drawer = this.getDrawer();
                drawer.redraw();
                if (angleLength === 0) {
                    drawer.done();
                    return;
                }
                drawer.moveTo(Point.fromPolar(from, angleStart));
                drawer.lineTo(Point.fromPolar(to, angleStart));
                if (to) {
                    drawer.carcTo(to, 0, sweepFlag, Point.fromPolar(to, angleHalf));
                    drawer.carcTo(to, 0, sweepFlag, Point.fromPolar(to, angleEnd));
                }
                drawer.lineTo(Point.fromPolar(from, angleEnd));
                if (from) {
                    drawer.carcTo(from, 0, sweepFlag, Point.fromPolar(from, angleHalf));
                    drawer.carcTo(from, 0, sweepFlag, Point.fromPolar(from, angleStart));
                }
                drawer.close();
                drawer.done();
            }
        });
    }
};

//src/graphic/text.js
_p[70] = {
    value: function(require, exports, module) {
        var TextContent = _p.r(71);
        var ShapeContainer = _p.r(62);
        var svg = _p.r(68);
        var utils = _p.r(12);
        var offsetHash = {};
        function getTextBoundOffset(text) {
            var font = text._cachedFontHash;
            if (offsetHash[font]) {
                return offsetHash[font];
            }
            var textContent = text.getContent();
            text.setContent("百度Fex");
            var bbox = text.getBoundaryBox(), y = text.getY();
            if (!bbox.height) return {
                top: 0,
                bottom: 0,
                middle: 0
            };
            var topOffset = y - bbox.y + +text.node.getAttribute("dy"), bottomOffset = topOffset - bbox.height;
            text.setContent(textContent);
            return offsetHash[font] = {
                top: topOffset,
                bottom: bottomOffset,
                middle: (topOffset + bottomOffset) / 2
            };
        }
        return _p.r(11).createClass("Text", {
            base: TextContent,
            mixins: [ ShapeContainer ],
            constructor: function(content) {
                this.callBase("text");
                if (content !== undefined) {
                    this.setContent(content);
                }
                this._buildFontHash();
            },
            fixPosition: function() {
                if (!this.__fixedPosition) {
                    this.setVerticalAlign(this.getVerticalAlign());
                }
            },
            _buildFontHash: function() {
                var style = window.getComputedStyle(this.node);
                this._cachedFontHash = [ style.fontFamily, style.fontSize, style.fontStretch, style.fontStyle, style.fontVariant, style.fontWeight ].join("-");
            },
            _fontChanged: function(font) {
                var last = this._lastFont;
                var current = utils.extend({}, last, font);
                if (!last) {
                    this._lastFont = font;
                    return true;
                }
                var changed = last.family != current.family || last.size != current.size || last.style != current.style || last.weight != current.weight;
                this._lastFont = current;
                return changed;
            },
            setX: function(x) {
                this.node.setAttribute("x", x);
                return this;
            },
            setPosition: function(x, y) {
                return this.setX(x).setY(y);
            },
            setY: function(y) {
                this.node.setAttribute("y", y);
                return this;
            },
            getX: function() {
                return +this.node.getAttribute("x") || 0;
            },
            getY: function() {
                return +this.node.getAttribute("y") || 0;
            },
            setFont: function(font) {
                this.callBase(font);
                if (this._fontChanged(font)) {
                    this._buildFontHash();
                    this.setVerticalAlign(this.getVerticalAlign());
                }
                return this;
            },
            setTextAnchor: function(anchor) {
                this.node.setAttribute("text-anchor", anchor);
                return this;
            },
            getTextAnchor: function() {
                return this.node.getAttribute("text-anchor") || "start";
            },
            // top/bottom/middle/baseline
            setVerticalAlign: function(align) {
                this.whenPaperReady(function() {
                    var dy;
                    switch (align) {
                      case "top":
                        dy = getTextBoundOffset(this).top;
                        break;

                      case "bottom":
                        dy = getTextBoundOffset(this).bottom;
                        break;

                      case "middle":
                        dy = getTextBoundOffset(this).middle;
                        break;

                      default:
                        dy = 0;
                    }
                    if (dy) this.__fixedPosition = true;
                    this.node.setAttribute("dy", dy);
                });
                this.verticalAlign = align;
                return this;
            },
            getVerticalAlign: function() {
                return this.verticalAlign || "baseline";
            },
            setStartOffset: function(offset) {
                // only for text path
                if (this.shapeNode != this.node) {
                    this.shapeNode.setAttribute("startOffset", offset * 100 + "%");
                }
            },
            addSpan: function(span) {
                this.addShape(span);
                return this;
            },
            setPath: function(path) {
                var textpath = this.shapeNode;
                if (this.shapeNode == this.node) {
                    // 当前还不是 textpath
                    textpath = this.shapeNode = svg.createNode("textPath");
                    while (this.node.firstChild) {
                        this.shapeNode.appendChild(this.node.firstChild);
                    }
                    this.node.appendChild(textpath);
                }
                textpath.setAttributeNS(svg.xlink, "xlink:href", "#" + path.node.id);
                this.setTextAnchor(this.getTextAnchor());
                return this;
            }
        });
    }
};

//src/graphic/textcontent.js
_p[71] = {
    value: function(require, exports, module) {
        var Shape = _p.r(61);
        return _p.r(11).createClass("TextContent", {
            base: Shape,
            constructor: function(nodeType) {
                // call shape constructor
                this.callBase(nodeType);
                this.shapeNode = this.shapeNode || this.node;
                this.shapeNode.setAttribute("text-rendering", "geometricPrecision");
            },
            clearContent: function() {
                while (this.shapeNode.firstChild) {
                    this.shapeNode.removeChild(this.shapeNode.firstChild);
                }
                return this;
            },
            setContent: function(content) {
                this.shapeNode.textContent = content;
                return this;
            },
            getContent: function() {
                return this.shapeNode.textContent;
            },
            appendContent: function(content) {
                this.shapeNode.textContent += content;
                return this;
            },
            setSize: function(value) {
                return this.setFontSize(value);
            },
            setFontSize: function(value) {
                return this.setFont({
                    size: value
                });
            },
            setFontFamily: function(value) {
                return this.setFont({
                    family: value
                });
            },
            setFontBold: function(bold) {
                return this.setFont({
                    weight: bold ? "bold" : "normal"
                });
            },
            setFontItalic: function(italic) {
                return this.setFont({
                    style: italic ? "italic" : "normal"
                });
            },
            setFont: function(font) {
                var node = this.node;
                [ "family", "size", "weight", "style" ].forEach(function(section) {
                    if (font[section] === null) {
                        node.removeAttribute("font-" + section);
                    } else if (font[section]) {
                        node.setAttribute("font-" + section, font[section]);
                    }
                });
                return this;
            },
            getExtentOfChar: function(index) {
                return this.node.getExtentOfChar(index);
            },
            getRotationOfChar: function(index) {
                return this.node.getRotationOfChar(index);
            },
            getCharNumAtPosition: function(x, y) {
                return this.node.getCharNumAtPosition(this.node.viewportElement.createSVGPoint(x, y));
            }
        });
    }
};

//src/graphic/textspan.js
_p[72] = {
    value: function(require, exports, module) {
        var TextContent = _p.r(71);
        var Styled = _p.r(67);
        return _p.r(11).createClass("TextSpan", {
            base: TextContent,
            mixins: [ Styled ],
            constructor: function(content) {
                this.callBase("tspan");
                this.setContent(content);
            }
        });
    }
};

//src/graphic/use.js
/*
 * USE 功能
 */
_p[73] = {
    value: function(require, exports, module) {
        var Svg = _p.r(68);
        var Class = _p.r(11);
        var Use = Class.createClass("Use", {
            base: _p.r(61),
            constructor: function(shape) {
                this.callBase("use");
                this.ref(shape);
            },
            ref: function(shape) {
                if (!shape) {
                    this.node.removeAttributeNS(Svg.xlink, "xlink:href");
                    return this;
                }
                var shapeId = shape.getId();
                if (shapeId) {
                    this.node.setAttributeNS(Svg.xlink, "xlink:href", "#" + shapeId);
                }
                // by techird
                // 作为 Use 的图形，如果没有 fill 和 stroke，移除默认的 'none' 值，用于 Use 覆盖
                if (shape.node.getAttribute("fill") === "none") {
                    shape.node.removeAttribute("fill");
                }
                if (shape.node.getAttribute("stroke") === "none") {
                    shape.node.removeAttribute("stroke");
                }
                return this;
            }
        });
        var Shape = _p.r(61);
        Class.extendClass(Shape, {
            // fast-use
            use: function() {
                return new Use(this);
            }
        });
        return Use;
    }
};

//src/graphic/vector.js
_p[74] = {
    value: function(require, exports, module) {
        var Point = _p.r(51);
        var Matrix = _p.r(44);
        var Vector = _p.r(11).createClass("Vector", {
            base: Point,
            constructor: function(x, y) {
                this.callBase(x, y);
            },
            square: function() {
                return this.x * this.x + this.y * this.y;
            },
            length: function() {
                return Math.sqrt(this.square());
            },
            add: function(q) {
                return new Vector(this.x + q.x, this.y + q.y);
            },
            minus: function(q) {
                return new Vector(this.x - q.x, this.y - q.y);
            },
            dot: function(q) {
                return this.x * q.x + this.y * q.y;
            },
            project: function(q) {
                return q.multipy(this.dot(q) / q.square());
            },
            normalize: function(length) {
                if (length === undefined) {
                    length = 1;
                }
                return this.multipy(length / this.length());
            },
            multipy: function(scale) {
                return new Vector(this.x * scale, this.y * scale);
            },
            rotate: function(angle, unit) {
                if (unit == "rad") {
                    angle = angle / Math.PI * 180;
                }
                var p = new Matrix().rotate(angle).transformPoint(this);
                return new Vector(p.x, p.y);
            },
            vertical: function() {
                return new Vector(this.y, -this.x);
            },
            reverse: function() {
                return this.multipy(-1);
            },
            getAngle: function() {
                var length = this.length();
                if (length === 0) return 0;
                var rad = Math.acos(this.x / length);
                var sign = this.y > 0 ? 1 : -1;
                return sign * 180 * rad / Math.PI;
            }
        });
        Vector.fromPoints = function(p1, p2) {
            return new Vector(p2.x - p1.x, p2.y - p1.y);
        };
        Vector.fromPolar = function() {
            var p = Point.fromPolar.apply(Point, arguments);
            return new Vector(p.x, p.y);
        };
        _p.r(11).extendClass(Point, {
            asVector: function() {
                return new Vector(this.x, this.y);
            }
        });
        return Vector;
    }
};

//src/graphic/view.js
_p[75] = {
    value: function(require, exports, module) {
        var ShapeContainer = _p.r(62);
        var ViewBox = _p.r(76);
        return _p.r(11).createClass("View", {
            mixins: [ ShapeContainer, ViewBox ],
            base: _p.r(75),
            constructor: function() {
                this.callBase("view");
            }
        });
    }
};

//src/graphic/viewbox.js
_p[76] = {
    value: function(require, exports, module) {
        return _p.r(11).createClass("ViewBox", {
            getViewBox: function() {
                var attr = this.node.getAttribute("viewBox");
                if (attr === null) {
                    // firefox:
                    // 1. viewBox 没有设置过的时候获得的是 null
                    // 2. svg 标签没有指定绝对大小的时候 clientWidth 和 clientHeigt 为 0，需要在父容器上查找
                    // TODO: 第 2 条取得的不准确（假如有 padding 之类的）
                    return {
                        x: 0,
                        y: 0,
                        width: this.node.clientWidth || this.node.parentNode.clientWidth,
                        height: this.node.clientHeight || this.node.parentNode.clientHeight
                    };
                } else {
                    attr = attr.split(" ");
                    return {
                        x: +attr[0],
                        y: +attr[1],
                        width: +attr[2],
                        height: +attr[3]
                    };
                }
            },
            setViewBox: function(x, y, width, height) {
                this.node.setAttribute("viewBox", [ x, y, width, height ].join(" "));
                return this;
            }
        });
    }
};

//src/kity.js
/**
 * @fileOverview kity 暴露的方法或对象
 */
_p[77] = {
    value: function(require, exports, module) {
        var kity = {}, utils = _p.r(12);
        kity.version = "2.0.0";
        utils.extend(kity, {
            // core
            createClass: _p.r(11).createClass,
            extendClass: _p.r(11).extendClass,
            Utils: utils,
            Browser: _p.r(10),
            // shape
            Box: _p.r(26),
            Bezier: _p.r(24),
            BezierPoint: _p.r(25),
            Circle: _p.r(27),
            Clip: _p.r(28),
            Color: _p.r(29),
            Container: _p.r(30),
            Curve: _p.r(31),
            Ellipse: _p.r(33),
            Group: _p.r(37),
            Gradient: _p.r(36),
            HyperLink: _p.r(38),
            Image: _p.r(39),
            Line: _p.r(40),
            LinearGradient: _p.r(41),
            Mask: _p.r(43),
            Matrix: _p.r(44),
            Marker: _p.r(42),
            Palette: _p.r(45),
            Paper: _p.r(46),
            Path: _p.r(47),
            Pattern: _p.r(48),
            Pen: _p.r(49),
            Point: _p.r(51),
            PointContainer: _p.r(52),
            Polygon: _p.r(54),
            Polyline: _p.r(55),
            Pie: _p.r(50),
            RadialGradient: _p.r(56),
            Resource: _p.r(59),
            Rect: _p.r(57),
            RegularPolygon: _p.r(58),
            Ring: _p.r(60),
            Shape: _p.r(61),
            ShapePoint: _p.r(64),
            ShapeContainer: _p.r(62),
            Sweep: _p.r(69),
            Star: _p.r(66),
            Text: _p.r(70),
            TextSpan: _p.r(72),
            Use: _p.r(73),
            Vector: _p.r(74),
            g: _p.r(35),
            // animate
            Animator: _p.r(0),
            Easing: _p.r(1),
            OpacityAnimator: _p.r(4),
            RotateAnimator: _p.r(6),
            ScaleAnimator: _p.r(7),
            Timeline: _p.r(8),
            TranslateAnimator: _p.r(9),
            PathAnimator: _p.r(5),
            MotionAnimator: _p.r(3),
            requestFrame: _p.r(2).requestFrame,
            releaseFrame: _p.r(2).releaseFrame,
            // filter
            Filter: _p.r(21),
            GaussianblurFilter: _p.r(22),
            ProjectionFilter: _p.r(23),
            // effect
            ColorMatrixEffect: _p.r(14),
            CompositeEffect: _p.r(15),
            ConvolveMatrixEffect: _p.r(16),
            Effect: _p.r(17),
            GaussianblurEffect: _p.r(18),
            OffsetEffect: _p.r(19)
        });
        module.exports = kity;
    }
};

var moduleMapping = {
    "expose-kity": 13
};

function use(name) {
    _p.r([ moduleMapping[name] ]);
}
use('expose-kity');
})();

/***/ }),

/***/ "4362":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("df7c");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "48bb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4ef0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7101":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/*!
 * ====================================================
 * Kity Minder Core - v1.4.49 - 2018-04-02
 * https://github.com/fex-team/kityminder-core
 * GitHub: https://github.com/fex-team/kityminder-core.git 
 * Copyright (c) 2018 Baidu FEX; Licensed BSD-3-Clause
 * ====================================================
 */

(function () {
var _p = {
    r: function(index) {
        if (_p[index].inited) {
            return _p[index].value;
        }
        if (typeof _p[index].value === "function") {
            var module = {
                exports: {}
            }, returnValue = _p[index].value(null, module.exports, module);
            _p[index].inited = true;
            _p[index].value = returnValue;
            if (returnValue !== undefined) {
                return returnValue;
            } else {
                for (var key in module.exports) {
                    if (module.exports.hasOwnProperty(key)) {
                        _p[index].inited = true;
                        _p[index].value = module.exports;
                        return module.exports;
                    }
                }
            }
        } else {
            _p[index].inited = true;
            return _p[index].value;
        }
    }
};

//src/connect/arc.js
/**
 * @fileOverview
 *
 * 圆弧连线
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[0] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var connect = _p.r(11);
        var connectMarker = new kity.Marker().pipe(function() {
            var r = 7;
            var dot = new kity.Circle(r - 1);
            this.addShape(dot);
            this.setRef(r - 1, 0).setViewBox(-r, -r, r + r, r + r).setWidth(r).setHeight(r);
            this.dot = dot;
            this.node.setAttribute("markerUnits", "userSpaceOnUse");
        });
        connect.register("arc", function(node, parent, connection, width, color) {
            var box = node.getLayoutBox(), pBox = parent.getLayoutBox();
            var start, end, vector;
            var abs = Math.abs;
            var pathData = [];
            var side = box.x > pBox.x ? "right" : "left";
            node.getMinder().getPaper().addResource(connectMarker);
            start = new kity.Point(pBox.cx, pBox.cy);
            end = side == "left" ? new kity.Point(box.right + 2, box.cy) : new kity.Point(box.left - 2, box.cy);
            vector = kity.Vector.fromPoints(start, end);
            pathData.push("M", start);
            pathData.push("A", abs(vector.x), abs(vector.y), 0, 0, vector.x * vector.y > 0 ? 0 : 1, end);
            connection.setMarker(connectMarker);
            connectMarker.dot.fill(color);
            connection.setPathData(pathData);
        });
    }
};

//src/connect/arc_tp.js
/**
 *
 * 圆弧连线
 *
 * @author: along
 * @copyright: bpd729@163.com , 2015
 */
_p[1] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var connect = _p.r(11);
        var connectMarker = new kity.Marker().pipe(function() {
            var r = 7;
            var dot = new kity.Circle(r - 1);
            this.addShape(dot);
            this.setRef(r - 1, 0).setViewBox(-r, -r, r + r, r + r).setWidth(r).setHeight(r);
            this.dot = dot;
            this.node.setAttribute("markerUnits", "userSpaceOnUse");
        });
        /**
     * 天盘图连线除了连接当前节点和前一个节点外, 还需要渲染当前节点和后一个节点的连接, 防止样式上的断线
     * 这是天盘图与其余的模板不同的地方
     */
        connect.register("arc_tp", function(node, parent, connection, width, color) {
            var end_box = node.getLayoutBox(), start_box = parent.getLayoutBox();
            var index = node.getIndex();
            var nextNode = parent.getChildren()[index + 1];
            if (node.getIndex() > 0) {
                start_box = parent.getChildren()[index - 1].getLayoutBox();
            }
            var start, end, vector;
            var abs = Math.abs;
            var pathData = [];
            var side = end_box.x > start_box.x ? "right" : "left";
            node.getMinder().getPaper().addResource(connectMarker);
            start = new kity.Point(start_box.cx, start_box.cy);
            end = new kity.Point(end_box.cx, end_box.cy);
            var jl = Math.sqrt(Math.pow(start.x - end.x, 2) + Math.pow(start.y - end.y, 2));
            //两圆中心点距离
            jl = node.getIndex() == 0 ? jl * .4 : jl;
            vector = kity.Vector.fromPoints(start, end);
            pathData.push("M", start);
            pathData.push("A", jl, jl, 0, 0, 1, end);
            connection.setMarker(connectMarker);
            connectMarker.dot.fill(color);
            connection.setPathData(pathData);
            // 设置下一个的节点的连接线
            if (nextNode && nextNode.getConnection()) {
                var nextConnection = nextNode.getConnection();
                var next_end_box = nextNode.getLayoutBox();
                var next_end = new kity.Point(next_end_box.cx, next_end_box.cy);
                var jl2 = Math.sqrt(Math.pow(end.x - next_end.x, 2) + Math.pow(end.y - next_end.y, 2));
                //两圆中心点距离
                pathData = [];
                pathData.push("M", end);
                pathData.push("A", jl2, jl2, 0, 0, 1, next_end);
                nextConnection.setMarker(connectMarker);
                connectMarker.dot.fill(color);
                nextConnection.setPathData(pathData);
            }
        });
    }
};

//src/connect/bezier.js
/**
 * @fileOverview
 *
 * 提供折线相连的方法
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[2] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var connect = _p.r(11);
        connect.register("bezier", function(node, parent, connection) {
            // 连线起点和终点
            var po = parent.getLayoutVertexOut(), pi = node.getLayoutVertexIn();
            // 连线矢量和方向
            var v = parent.getLayoutVectorOut().normalize();
            var r = Math.round;
            var abs = Math.abs;
            var pathData = [];
            pathData.push("M", r(po.x), r(po.y));
            if (abs(v.x) > abs(v.y)) {
                // x - direction
                var hx = (pi.x + po.x) / 2;
                pathData.push("C", hx, po.y, hx, pi.y, pi.x, pi.y);
            } else {
                // y - direction
                var hy = (pi.y + po.y) / 2;
                pathData.push("C", po.x, hy, pi.x, hy, pi.x, pi.y);
            }
            connection.setMarker(null);
            connection.setPathData(pathData);
        });
    }
};

//src/connect/fish-bone-master.js
/**
 * @fileOverview
 *
 * 鱼骨头主干连线
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[3] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var connect = _p.r(11);
        connect.register("fish-bone-master", function(node, parent, connection) {
            var pout = parent.getLayoutVertexOut(), pin = node.getLayoutVertexIn();
            var abs = Math.abs;
            var dy = abs(pout.y - pin.y), dx = abs(pout.x - pin.x);
            var pathData = [];
            pathData.push("M", pout.x, pout.y);
            pathData.push("h", dx - dy);
            pathData.push("L", pin.x, pin.y);
            connection.setMarker(null);
            connection.setPathData(pathData);
        });
    }
};

//src/connect/l.js
/**
 * @fileOverview
 *
 * "L" 连线
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[4] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var connect = _p.r(11);
        connect.register("l", function(node, parent, connection) {
            var po = parent.getLayoutVertexOut();
            var pi = node.getLayoutVertexIn();
            var vo = parent.getLayoutVectorOut();
            var pathData = [];
            var r = Math.round, abs = Math.abs;
            pathData.push("M", po.round());
            if (abs(vo.x) > abs(vo.y)) {
                pathData.push("H", r(pi.x));
            } else {
                pathData.push("V", pi.y);
            }
            pathData.push("L", pi);
            connection.setPathData(pathData);
        });
    }
};

//src/connect/poly.js
/**
 * @fileOverview
 *
 * 提供折线相连的方法
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[5] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var connect = _p.r(11);
        connect.register("poly", function(node, parent, connection, width) {
            // 连线起点和终点
            var po = parent.getLayoutVertexOut(), pi = node.getLayoutVertexIn();
            // 连线矢量和方向
            var v = parent.getLayoutVectorOut().normalize();
            var r = Math.round;
            var abs = Math.abs;
            var pathData = [];
            pathData.push("M", r(po.x), r(po.y));
            switch (true) {
              case abs(v.x) > abs(v.y) && v.x < 0:
                // left
                pathData.push("h", -parent.getStyle("margin-left"));
                pathData.push("v", pi.y - po.y);
                pathData.push("H", pi.x);
                break;

              case abs(v.x) > abs(v.y) && v.x >= 0:
                // right
                pathData.push("h", parent.getStyle("margin-right"));
                pathData.push("v", pi.y - po.y);
                pathData.push("H", pi.x);
                break;

              case abs(v.x) <= abs(v.y) && v.y < 0:
                // top
                pathData.push("v", -parent.getStyle("margin-top"));
                pathData.push("h", pi.x - po.x);
                pathData.push("V", pi.y);
                break;

              case abs(v.x) <= abs(v.y) && v.y >= 0:
                // bottom
                pathData.push("v", parent.getStyle("margin-bottom"));
                pathData.push("h", pi.x - po.x);
                pathData.push("V", pi.y);
                break;
            }
            connection.setMarker(null);
            connection.setPathData(pathData);
        });
    }
};

//src/connect/under.js
/**
 * @fileOverview
 *
 * 下划线连线
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[6] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var connect = _p.r(11);
        connect.register("under", function(node, parent, connection, width, color) {
            var box = node.getLayoutBox(), pBox = parent.getLayoutBox();
            var start, end, vector;
            var abs = Math.abs;
            var pathData = [];
            var side = box.x > pBox.x ? "right" : "left";
            var radius = node.getStyle("connect-radius");
            var underY = box.bottom + 3;
            var startY = parent.getType() == "sub" ? pBox.bottom + 3 : pBox.cy;
            var p1, p2, p3, mx;
            if (side == "right") {
                p1 = new kity.Point(pBox.right, startY);
                p2 = new kity.Point(box.left - 10, underY);
                p3 = new kity.Point(box.right, underY);
            } else {
                p1 = new kity.Point(pBox.left, startY);
                p2 = new kity.Point(box.right + 10, underY);
                p3 = new kity.Point(box.left, underY);
            }
            mx = (p1.x + p2.x) / 2;
            pathData.push("M", p1);
            pathData.push("C", mx, p1.y, mx, p2.y, p2);
            pathData.push("L", p3);
            connection.setMarker(null);
            connection.setPathData(pathData);
        });
    }
};

//src/core/_boxv.js
/**
 * @fileOverview
 *
 * 调试工具：为 kity.Box 提供一个可视化的渲染
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[7] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var Minder = _p.r(19);
        if (location.href.indexOf("boxv") != -1) {
            var vrect;
            Object.defineProperty(kity.Box.prototype, "visualization", {
                get: function() {
                    if (!vrect) return null;
                    return vrect.setBox(this);
                }
            });
            Minder.registerInitHook(function() {
                this.on("paperrender", function() {
                    vrect = new kity.Rect();
                    vrect.fill("rgba(200, 200, 200, .5)");
                    vrect.stroke("orange");
                    this.getRenderContainer().addShape(vrect);
                });
            });
        }
    }
};

//src/core/animate.js
/**
 * @fileOverview
 *
 * 动画控制
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[8] = {
    value: function(require, exports, module) {
        var Minder = _p.r(19);
        var animateDefaultOptions = {
            enableAnimation: true,
            layoutAnimationDuration: 300,
            viewAnimationDuration: 100,
            zoomAnimationDuration: 300
        };
        var resoredAnimationOptions = {};
        Minder.registerInitHook(function() {
            this.setDefaultOptions(animateDefaultOptions);
            if (!this.getOption("enableAnimation")) {
                this.disableAnimation();
            }
        });
        Minder.prototype.enableAnimation = function() {
            for (var name in animateDefaultOptions) {
                if (animateDefaultOptions.hasOwnProperty(name)) {
                    this.setOption(resoredAnimationOptions[name]);
                }
            }
        };
        Minder.prototype.disableAnimation = function() {
            for (var name in animateDefaultOptions) {
                if (animateDefaultOptions.hasOwnProperty(name)) {
                    resoredAnimationOptions[name] = this.getOption(name);
                    this.setOption(name, 0);
                }
            }
        };
    }
};

//src/core/command.js
_p[9] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var Minder = _p.r(19);
        var MinderNode = _p.r(21);
        var MinderEvent = _p.r(13);
        var COMMAND_STATE_NORMAL = 0;
        var COMMAND_STATE_DISABLED = -1;
        var COMMAND_STATE_ACTIVED = 1;
        /**
     * 表示一个命令，包含命令的查询及执行
     */
        var Command = kity.createClass("Command", {
            constructor: function() {
                this._isContentChange = true;
                this._isSelectionChange = false;
            },
            execute: function(minder, args) {
                throw new Error("Not Implement: Command.execute()");
            },
            setContentChanged: function(val) {
                this._isContentChange = !!val;
            },
            isContentChanged: function() {
                return this._isContentChange;
            },
            setSelectionChanged: function(val) {
                this._isSelectionChange = !!val;
            },
            isSelectionChanged: function() {
                return this._isContentChange;
            },
            queryState: function(km) {
                return COMMAND_STATE_NORMAL;
            },
            queryValue: function(km) {
                return 0;
            },
            isNeedUndo: function() {
                return true;
            }
        });
        Command.STATE_NORMAL = COMMAND_STATE_NORMAL;
        Command.STATE_ACTIVE = COMMAND_STATE_ACTIVED;
        Command.STATE_DISABLED = COMMAND_STATE_DISABLED;
        kity.extendClass(Minder, {
            _getCommand: function(name) {
                return this._commands[name.toLowerCase()];
            },
            _queryCommand: function(name, type, args) {
                var cmd = this._getCommand(name);
                if (cmd) {
                    var queryCmd = cmd["query" + type];
                    if (queryCmd) return queryCmd.apply(cmd, [ this ].concat(args));
                }
                return 0;
            },
            /**
         * @method queryCommandState()
         * @for Minder
         * @description 查询指定命令的状态
         *
         * @grammar queryCommandName(name) => {number}
         *
         * @param {string} name 要查询的命令名称
         *
         * @return {number}
         *   -1: 命令不存在或命令当前不可用
         *    0: 命令可用
         *    1: 命令当前可用并且已经执行过
         */
            queryCommandState: function(name) {
                return this._queryCommand(name, "State", [].slice.call(arguments, 1));
            },
            /**
         * @method queryCommandValue()
         * @for Minder
         * @description 查询指定命令当前的执行值
         *
         * @grammar queryCommandValue(name) => {any}
         *
         * @param {string} name 要查询的命令名称
         *
         * @return {any}
         *    如果命令不存在，返回 undefined
         *    不同命令具有不同返回值，具体请查看 [Command](command) 章节
         */
            queryCommandValue: function(name) {
                return this._queryCommand(name, "Value", [].slice.call(arguments, 1));
            },
            /**
         * @method execCommand()
         * @for Minder
         * @description 执行指定的命令。
         *
         * @grammar execCommand(name, args...)
         *
         * @param {string} name 要执行的命令名称
         * @param {argument} args 要传递给命令的其它参数
         */
            execCommand: function(name) {
                if (!name) return null;
                name = name.toLowerCase();
                var cmdArgs = [].slice.call(arguments, 1), cmd, stoped, result, eventParams;
                var me = this;
                cmd = this._getCommand(name);
                eventParams = {
                    command: cmd,
                    commandName: name.toLowerCase(),
                    commandArgs: cmdArgs
                };
                if (!cmd || !~this.queryCommandState(name)) {
                    return false;
                }
                if (!this._hasEnterExecCommand) {
                    this._hasEnterExecCommand = true;
                    stoped = this._fire(new MinderEvent("beforeExecCommand", eventParams, true));
                    if (!stoped) {
                        this._fire(new MinderEvent("preExecCommand", eventParams, false));
                        result = cmd.execute.apply(cmd, [ me ].concat(cmdArgs));
                        this._fire(new MinderEvent("execCommand", eventParams, false));
                        if (cmd.isContentChanged()) {
                            this._firePharse(new MinderEvent("contentchange"));
                        }
                        this._interactChange();
                    }
                    this._hasEnterExecCommand = false;
                } else {
                    result = cmd.execute.apply(cmd, [ me ].concat(cmdArgs));
                    if (!this._hasEnterExecCommand) {
                        this._interactChange();
                    }
                }
                return result === undefined ? null : result;
            }
        });
        module.exports = Command;
    }
};

//src/core/compatibility.js
_p[10] = {
    value: function(require, exports, module) {
        var utils = _p.r(33);
        function compatibility(json) {
            var version = json.version || (json.root ? "1.4.0" : "1.1.3");
            switch (version) {
              case "1.1.3":
                c_113_120(json);

              /* falls through */
                case "1.2.0":
              case "1.2.1":
                c_120_130(json);

              /* falls through */
                case "1.3.0":
              case "1.3.1":
              case "1.3.2":
              case "1.3.3":
              case "1.3.4":
              case "1.3.5":
                /* falls through */
                c_130_140(json);
            }
            return json;
        }
        function traverse(node, fn) {
            fn(node);
            if (node.children) node.children.forEach(function(child) {
                traverse(child, fn);
            });
        }
        /* 脑图数据升级 */
        function c_120_130(json) {
            traverse(json, function(node) {
                var data = node.data;
                delete data.layout_bottom_offset;
                delete data.layout_default_offset;
                delete data.layout_filetree_offset;
            });
        }
        /**
     * 脑图数据升级
     * v1.1.3 => v1.2.0
     * */
        function c_113_120(json) {
            // 原本的布局风格
            var ocs = json.data.currentstyle;
            delete json.data.currentstyle;
            // 为 1.2 选择模板，同时保留老版本文件的皮肤
            if (ocs == "bottom") {
                json.template = "structure";
                json.theme = "snow";
            } else if (ocs == "default") {
                json.template = "default";
                json.theme = "classic";
            }
            traverse(json, function(node) {
                var data = node.data;
                // 升级优先级、进度图标
                if ("PriorityIcon" in data) {
                    data.priority = data.PriorityIcon;
                    delete data.PriorityIcon;
                }
                if ("ProgressIcon" in data) {
                    data.progress = 1 + (data.ProgressIcon - 1 << 1);
                    delete data.ProgressIcon;
                }
                // 删除过时属性
                delete data.point;
                delete data.layout;
            });
        }
        function c_130_140(json) {
            json.root = {
                data: json.data,
                children: json.children
            };
            delete json.data;
            delete json.children;
        }
        return compatibility;
    }
};

//src/core/connect.js
_p[11] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var Module = _p.r(20);
        var Minder = _p.r(19);
        var MinderNode = _p.r(21);
        // 连线提供方
        var _connectProviders = {};
        function register(name, provider) {
            _connectProviders[name] = provider;
        }
        register("default", function(node, parent, connection) {
            connection.setPathData([ "M", parent.getLayoutVertexOut(), "L", node.getLayoutVertexIn() ]);
        });
        kity.extendClass(MinderNode, {
            /**
         * @private
         * @method getConnect()
         * @for MinderNode
         * @description 获取当前节点的连线类型
         *
         * @grammar getConnect() => {string}
         */
            getConnect: function() {
                return this.data.connect || "default";
            },
            getConnectProvider: function() {
                return _connectProviders[this.getConnect()] || _connectProviders["default"];
            },
            /**
         * @private
         * @method getConnection()
         * @for MinderNode
         * @description 获取当前节点的连线对象
         *
         * @grammar getConnection() => {kity.Path}
         */
            getConnection: function() {
                return this._connection || null;
            }
        });
        kity.extendClass(Minder, {
            getConnectContainer: function() {
                return this._connectContainer;
            },
            createConnect: function(node) {
                if (node.isRoot()) return;
                var connection = new kity.Path();
                node._connection = connection;
                this._connectContainer.addShape(connection);
                this.updateConnect(node);
            },
            removeConnect: function(node) {
                var me = this;
                node.traverse(function(node) {
                    me._connectContainer.removeShape(node._connection);
                    node._connection = null;
                });
            },
            updateConnect: function(node) {
                var connection = node._connection;
                var parent = node.parent;
                if (!parent || !connection) return;
                if (parent.isCollapsed()) {
                    connection.setVisible(false);
                    return;
                }
                connection.setVisible(true);
                var provider = node.getConnectProvider();
                var strokeColor = node.getStyle("connect-color") || "white", strokeWidth = node.getStyle("connect-width") || 2;
                connection.stroke(strokeColor, strokeWidth);
                provider(node, parent, connection, strokeWidth, strokeColor);
                if (strokeWidth % 2 === 0) {
                    connection.setTranslate(.5, .5);
                } else {
                    connection.setTranslate(0, 0);
                }
            }
        });
        Module.register("Connect", {
            init: function() {
                this._connectContainer = new kity.Group().setId(utils.uuid("minder_connect_group"));
                this.getRenderContainer().prependShape(this._connectContainer);
            },
            events: {
                nodeattach: function(e) {
                    this.createConnect(e.node);
                },
                nodedetach: function(e) {
                    this.removeConnect(e.node);
                },
                "layoutapply layoutfinish noderender": function(e) {
                    this.updateConnect(e.node);
                }
            }
        });
        exports.register = register;
    }
};

//src/core/data.js
_p[12] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var Minder = _p.r(19);
        var MinderNode = _p.r(21);
        var MinderEvent = _p.r(13);
        var compatibility = _p.r(10);
        var Promise = _p.r(25);
        var protocols = {};
        function registerProtocol(name, protocol) {
            protocols[name] = protocol;
            for (var pname in protocols) {
                if (protocols.hasOwnProperty(pname)) {
                    protocols[pname] = protocols[pname];
                    protocols[pname].name = pname;
                }
            }
        }
        function getRegisterProtocol(name) {
            return name === undefined ? protocols : protocols[name] || null;
        }
        exports.registerProtocol = registerProtocol;
        exports.getRegisterProtocol = getRegisterProtocol;
        // 导入导出
        kity.extendClass(Minder, {
            // 自动导入
            setup: function(target) {
                if (typeof target == "string") {
                    target = document.querySelector(target);
                }
                if (!target) return;
                var protocol = target.getAttribute("minder-data-type");
                if (protocol in protocols) {
                    var data = target.textContent;
                    target.textContent = null;
                    this.renderTo(target);
                    this.importData(protocol, data);
                }
                return this;
            },
            /**
         * @method exportJson()
         * @for Minder
         * @description
         *     导出当前脑图数据为 JSON 对象，导出的数据格式请参考 [Data](data) 章节。
         * @grammar exportJson() => {plain}
         */
            exportJson: function() {
                /* 导出 node 上整棵树的数据为 JSON */
                function exportNode(node) {
                    var exported = {};
                    exported.data = node.getData();
                    var childNodes = node.getChildren();
                    exported.children = [];
                    for (var i = 0; i < childNodes.length; i++) {
                        exported.children.push(exportNode(childNodes[i]));
                    }
                    return exported;
                }
                var json = {
                    root: exportNode(this.getRoot())
                };
                json.template = this.getTemplate();
                json.theme = this.getTheme();
                json.version = Minder.version;
                return JSON.parse(JSON.stringify(json));
            },
            /**
         * function Text2Children(MinderNode, String) 
         * @param {MinderNode} node 要导入数据的节点
         * @param {String} text 导入的text数据
         * @Desc: 用于批量插入子节点，并不会修改被插入的父节点
         * @Editor: Naixor
         * @Date: 2015.9.21
         * @example: 用于批量导入如下类型的节点
         *      234
         *      3456346 asadf
         *          12312414
         *              wereww
         *          12314
         *      1231412
         *      13123    
         */
            Text2Children: function(node, text) {
                if (!(node instanceof kityminder.Node)) {
                    return;
                }
                var children = [], jsonMap = {}, level = 0;
                var LINE_SPLITTER = /\r|\n|\r\n/, TAB_REGEXP = /^(\t|\x20{4})/;
                var lines = text.split(LINE_SPLITTER), line = "", jsonNode, i = 0;
                var minder = this;
                function isEmpty(line) {
                    return line === "" && !/\S/.test(line);
                }
                function getNode(line) {
                    return {
                        data: {
                            text: line.replace(/^(\t|\x20{4})+/, "").replace(/(\t|\x20{4})+$/, "")
                        },
                        children: []
                    };
                }
                function getLevel(text) {
                    var level = 0;
                    while (TAB_REGEXP.test(text)) {
                        text = text.replace(TAB_REGEXP, "");
                        level++;
                    }
                    return level;
                }
                function addChild(parent, node) {
                    parent.children.push(node);
                }
                function importChildren(node, children) {
                    for (var i = 0, l = children.length; i < l; i++) {
                        var childNode = minder.createNode(null, node);
                        childNode.setData("text", children[i].data.text || "");
                        importChildren(childNode, children[i].children);
                    }
                }
                while ((line = lines[i++]) !== undefined) {
                    line = line.replace(/&nbsp;/g, "");
                    if (isEmpty(line)) continue;
                    level = getLevel(line);
                    jsonNode = getNode(line);
                    if (level === 0) {
                        jsonMap = {};
                        children.push(jsonNode);
                        jsonMap[0] = children[children.length - 1];
                    } else {
                        if (!jsonMap[level - 1]) {
                            throw new Error("Invalid local format");
                        }
                        addChild(jsonMap[level - 1], jsonNode);
                        jsonMap[level] = jsonNode;
                    }
                }
                importChildren(node, children);
                minder.refresh();
            },
            /**
         * @method exportNode(MinderNode)
         * @param  {MinderNode} node 当前要被导出的节点
         * @return {Object}      返回只含有data和children的Object
         * @Editor: Naixor
         * @Date: 2015.9.22
         */
            exportNode: function(node) {
                var exported = {};
                exported.data = node.getData();
                var childNodes = node.getChildren();
                exported.children = [];
                for (var i = 0; i < childNodes.length; i++) {
                    exported.children.push(this.exportNode(childNodes[i]));
                }
                return exported;
            },
            /**
         * @method importNode()
         * @description 根据纯json {data, children}数据转换成为脑图节点
         * @Editor: Naixor
         * @Date: 2015.9.20
         */
            importNode: function(node, json) {
                var data = json.data;
                node.data = {};
                for (var field in data) {
                    node.setData(field, data[field]);
                }
                var childrenTreeData = json.children || [];
                for (var i = 0; i < childrenTreeData.length; i++) {
                    var childNode = this.createNode(null, node);
                    this.importNode(childNode, childrenTreeData[i]);
                }
                return node;
            },
            /**
         * @method importJson()
         * @for Minder
         * @description 导入脑图数据，数据为 JSON 对象，具体的数据字段形式请参考 [Data](data) 章节。
         *
         * @grammar importJson(json) => {this}
         *
         * @param {plain} json 要导入的数据
         */
            importJson: function(json) {
                if (!json) return;
                /**
             * @event preimport
             * @for Minder
             * @when 导入数据之前
             */
                this._fire(new MinderEvent("preimport", null, false));
                // 删除当前所有节点
                while (this._root.getChildren().length) {
                    this.removeNode(this._root.getChildren()[0]);
                }
                json = compatibility(json);
                this.importNode(this._root, json.root);
                this.setTemplate(json.template || "default");
                this.setTheme(json.theme || null);
                this.refresh();
                /**
             * @event import,contentchange,interactchange
             * @for Minder
             * @when 导入数据之后
             */
                this.fire("import");
                this._firePharse({
                    type: "contentchange"
                });
                this._interactChange();
                return this;
            },
            /**
         * @method exportData()
         * @for Minder
         * @description 使用指定使用的数据协议，导入脑图数据
         *
         * @grammar exportData(protocol) => Promise<data>
         *
         * @param {string} protocol 指定的数据协议（默认内置五种数据协议 `json`、`text`、`markdown`、`svg` 和 `png`）
         */
            exportData: function(protocolName, option) {
                var json, protocol;
                json = this.exportJson();
                // 指定了协议进行导出，需要检测协议是否支持
                if (protocolName) {
                    protocol = protocols[protocolName];
                    if (!protocol || !protocol.encode) {
                        return Promise.reject(new Error("Not supported protocol:" + protocolName));
                    }
                }
                // 导出前抛个事件
                this._fire(new MinderEvent("beforeexport", {
                    json: json,
                    protocolName: protocolName,
                    protocol: protocol
                }));
                return Promise.resolve(protocol.encode(json, this, option));
            },
            /**
         * @method importData()
         * @for Minder
         * @description 使用指定的数据协议，导入脑图数据，覆盖当前实例的脑图
         *
         * @grammar importData(protocol, callback) => Promise<json>
         *
         * @param {string} protocol 指定的用于解析数据的数据协议（默认内置三种数据协议 `json`、`text` 和 `markdown` 的支持）
         * @param {any} data 要导入的数据
         */
            importData: function(protocolName, data, option) {
                var json, protocol;
                var minder = this;
                // 指定了协议进行导入，需要检测协议是否支持
                if (protocolName) {
                    protocol = protocols[protocolName];
                    if (!protocol || !protocol.decode) {
                        return Promise.reject(new Error("Not supported protocol:" + protocolName));
                    }
                }
                var params = {
                    local: data,
                    protocolName: protocolName,
                    protocol: protocol
                };
                // 导入前抛事件
                this._fire(new MinderEvent("beforeimport", params));
                return Promise.resolve(protocol.decode(data, this, option)).then(function(json) {
                    minder.importJson(json);
                    return json;
                });
            },
            /**
         * @method decodeData()
         * @for Minder
         * @description 使用指定的数据协议，解析为脑图数据，与 importData 的区别在于：不覆盖当前实例的脑图
         *
         * @grammar decodeData(protocol, callback) => Promise<json>
         *
         * @param {string} protocol 指定的用于解析数据的数据协议（默认内置三种数据协议 `json`、`text` 和 `markdown` 的支持）
         * @param {any} data 要导入的数据
         */
            decodeData: function(protocolName, data, option) {
                var json, protocol;
                var minder = this;
                // 指定了协议进行导入，需要检测协议是否支持
                if (protocolName) {
                    protocol = protocols[protocolName];
                    if (!protocol || !protocol.decode) {
                        return Promise.reject(new Error("Not supported protocol:" + protocolName));
                    }
                }
                var params = {
                    local: data,
                    protocolName: protocolName,
                    protocol: protocol
                };
                // 导入前抛事件
                this._fire(new MinderEvent("beforeimport", params));
                return Promise.resolve(protocol.decode(data, this, option));
            }
        });
    }
};

//src/core/event.js
_p[13] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var Minder = _p.r(19);
        /**
     * @class MinderEvent
     * @description 表示一个脑图中发生的事件
     */
        var MinderEvent = kity.createClass("MindEvent", {
            constructor: function(type, params, canstop) {
                params = params || {};
                if (params.getType && params.getType() == "ShapeEvent") {
                    /**
                 * @property kityEvent
                 * @for MinderEvent
                 * @description 如果事件是从一个 kity 的事件派生的，会有 kityEvent 属性指向原来的 kity 事件
                 * @type {KityEvent}
                 */
                    this.kityEvent = params;
                    /**
                 * @property originEvent
                 * @for MinderEvent
                 * @description 如果事件是从原声 Dom 事件派生的（如 click、mousemove 等），会有 originEvent 指向原来的 Dom 事件
                 * @type {DomEvent}
                 */
                    this.originEvent = params.originEvent;
                } else if (params.target && params.preventDefault) {
                    this.originEvent = params;
                } else {
                    kity.Utils.extend(this, params);
                }
                /**
             * @property type
             * @for MinderEvent
             * @description 事件的类型，如 `click`、`contentchange` 等
             * @type {string}
             */
                this.type = type;
                this._canstop = canstop || false;
            },
            /**
         * @method getPosition()
         * @for MinderEvent
         * @description 如果事件是从一个 kity 事件派生的，会有 `getPosition()` 获取事件发生的坐标
         *
         * @grammar getPosition(refer) => {kity.Point}
         *
         * @param {string|kity.Shape} refer
         *     参照的坐标系，
         *     `"screen"` - 以浏览器屏幕为参照坐标系
         *     `"minder"` - （默认）以脑图画布为参照坐标系
         *     `{kity.Shape}` - 指定以某个 kity 图形为参照坐标系
         */
            getPosition: function(refer) {
                if (!this.kityEvent) return;
                if (!refer || refer == "minder") {
                    return this.kityEvent.getPosition(this.minder.getRenderContainer());
                }
                return this.kityEvent.getPosition.call(this.kityEvent, refer);
            },
            /**
         * @method getTargetNode()
         * @for MinderEvent
         * @description 当发生的事件是鼠标事件时，获取事件位置命中的脑图节点
         *
         * @grammar getTargetNode() => {MinderNode}
         */
            getTargetNode: function() {
                var findShape = this.kityEvent && this.kityEvent.targetShape;
                if (!findShape) return null;
                while (!findShape.minderNode && findShape.container) {
                    findShape = findShape.container;
                }
                var node = findShape.minderNode;
                if (node && findShape.getOpacity() < 1) return null;
                return node || null;
            },
            /**
         * @method stopPropagation()
         * @for MinderEvent
         * @description 当发生的事件是鼠标事件时，获取事件位置命中的脑图节点
         *
         * @grammar getTargetNode() => {MinderNode}
         */
            stopPropagation: function() {
                this._stoped = true;
            },
            stopPropagationImmediately: function() {
                this._immediatelyStoped = true;
                this._stoped = true;
            },
            shouldStopPropagation: function() {
                return this._canstop && this._stoped;
            },
            shouldStopPropagationImmediately: function() {
                return this._canstop && this._immediatelyStoped;
            },
            preventDefault: function() {
                this.originEvent.preventDefault();
            },
            isRightMB: function() {
                var isRightMB = false;
                if (!this.originEvent) {
                    return false;
                }
                if ("which" in this.originEvent) isRightMB = this.originEvent.which == 3; else if ("button" in this.originEvent) isRightMB = this.originEvent.button == 2;
                return isRightMB;
            },
            getKeyCode: function() {
                var evt = this.originEvent;
                return evt.keyCode || evt.which;
            }
        });
        Minder.registerInitHook(function(option) {
            this._initEvents();
        });
        kity.extendClass(Minder, {
            _initEvents: function() {
                this._eventCallbacks = {};
            },
            _resetEvents: function() {
                this._initEvents();
                this._bindEvents();
            },
            _bindEvents: function() {
                /* jscs:disable maximumLineLength */
                this._paper.on("click dblclick mousedown contextmenu mouseup mousemove mouseover mousewheel DOMMouseScroll touchstart touchmove touchend dragenter dragleave drop", this._firePharse.bind(this));
                if (window) {
                    window.addEventListener("resize", this._firePharse.bind(this));
                }
            },
            /**
         * @method dispatchKeyEvent
         * @description 派发键盘（相关）事件到脑图实例上，让实例的模块处理
         * @grammar dispatchKeyEvent(e) => {this}
         * @param  {Event} e 原生的 Dom 事件对象
         */
            dispatchKeyEvent: function(e) {
                this._firePharse(e);
            },
            _firePharse: function(e) {
                var beforeEvent, preEvent, executeEvent;
                if (e.type == "DOMMouseScroll") {
                    e.type = "mousewheel";
                    e.wheelDelta = e.originEvent.wheelDelta = e.originEvent.detail * -10;
                    e.wheelDeltaX = e.originEvent.mozMovementX;
                    e.wheelDeltaY = e.originEvent.mozMovementY;
                }
                beforeEvent = new MinderEvent("before" + e.type, e, true);
                if (this._fire(beforeEvent)) {
                    return;
                }
                preEvent = new MinderEvent("pre" + e.type, e, true);
                executeEvent = new MinderEvent(e.type, e, true);
                if (this._fire(preEvent) || this._fire(executeEvent)) this._fire(new MinderEvent("after" + e.type, e, false));
            },
            _interactChange: function(e) {
                var me = this;
                if (me._interactScheduled) return;
                setTimeout(function() {
                    me._fire(new MinderEvent("interactchange"));
                    me._interactScheduled = false;
                }, 100);
                me._interactScheduled = true;
            },
            _listen: function(type, callback) {
                var callbacks = this._eventCallbacks[type] || (this._eventCallbacks[type] = []);
                callbacks.push(callback);
            },
            _fire: function(e) {
                /**
             * @property minder
             * @description 产生事件的 Minder 对象
             * @for MinderShape
             * @type {Minder}
             */
                e.minder = this;
                var status = this.getStatus();
                var callbacks = this._eventCallbacks[e.type.toLowerCase()] || [];
                if (status) {
                    callbacks = callbacks.concat(this._eventCallbacks[status + "." + e.type.toLowerCase()] || []);
                }
                if (callbacks.length === 0) {
                    return;
                }
                var lastStatus = this.getStatus();
                for (var i = 0; i < callbacks.length; i++) {
                    callbacks[i].call(this, e);
                    /* this.getStatus() != lastStatus ||*/
                    if (e.shouldStopPropagationImmediately()) {
                        break;
                    }
                }
                return e.shouldStopPropagation();
            },
            on: function(name, callback) {
                var km = this;
                name.split(/\s+/).forEach(function(n) {
                    km._listen(n.toLowerCase(), callback);
                });
                return this;
            },
            off: function(name, callback) {
                var types = name.split(/\s+/);
                var i, j, callbacks, removeIndex;
                for (i = 0; i < types.length; i++) {
                    callbacks = this._eventCallbacks[types[i].toLowerCase()];
                    if (callbacks) {
                        removeIndex = null;
                        for (j = 0; j < callbacks.length; j++) {
                            if (callbacks[j] == callback) {
                                removeIndex = j;
                            }
                        }
                        if (removeIndex !== null) {
                            callbacks.splice(removeIndex, 1);
                        }
                    }
                }
            },
            fire: function(type, params) {
                var e = new MinderEvent(type, params);
                this._fire(e);
                return this;
            }
        });
        module.exports = MinderEvent;
    }
};

//src/core/focus.js
_p[14] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var Minder = _p.r(19);
        Minder.registerInitHook(function() {
            this.on("beforemousedown", function(e) {
                this.focus();
                e.preventDefault();
            });
            this.on("paperrender", function() {
                this.focus();
            });
        });
        kity.extendClass(Minder, {
            focus: function() {
                if (!this.isFocused()) {
                    var renderTarget = this._renderTarget;
                    renderTarget.classList.add("focus");
                    this.renderNodeBatch(this.getSelectedNodes());
                }
                this.fire("focus");
                return this;
            },
            blur: function() {
                if (this.isFocused()) {
                    var renderTarget = this._renderTarget;
                    renderTarget.classList.remove("focus");
                    this.renderNodeBatch(this.getSelectedNodes());
                }
                this.fire("blur");
                return this;
            },
            isFocused: function() {
                var renderTarget = this._renderTarget;
                return renderTarget && renderTarget.classList.contains("focus");
            }
        });
    }
};

//src/core/keymap.js
_p[15] = {
    value: function(require, exports, module) {
        var keymap = {
            Backspace: 8,
            Tab: 9,
            Enter: 13,
            Shift: 16,
            Control: 17,
            Alt: 18,
            CapsLock: 20,
            Esc: 27,
            Spacebar: 32,
            PageUp: 33,
            PageDown: 34,
            End: 35,
            Home: 36,
            Insert: 45,
            Left: 37,
            Up: 38,
            Right: 39,
            Down: 40,
            direction: {
                37: 1,
                38: 1,
                39: 1,
                40: 1
            },
            Del: 46,
            NumLock: 144,
            Cmd: 91,
            CmdFF: 224,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            "`": 192,
            "=": 187,
            "-": 189,
            "/": 191,
            ".": 190,
            controlKeys: {
                16: 1,
                17: 1,
                18: 1,
                20: 1,
                91: 1,
                224: 1
            },
            notContentChange: {
                13: 1,
                9: 1,
                33: 1,
                34: 1,
                35: 1,
                36: 1,
                16: 1,
                17: 1,
                18: 1,
                20: 1,
                91: 1,
                //上下左右
                37: 1,
                38: 1,
                39: 1,
                40: 1,
                113: 1,
                114: 1,
                115: 1,
                144: 1,
                27: 1
            },
            isSelectedNodeKey: {
                //上下左右
                37: 1,
                38: 1,
                39: 1,
                40: 1,
                13: 1,
                9: 1
            }
        };
        // 小写适配
        for (var key in keymap) {
            if (keymap.hasOwnProperty(key)) {
                keymap[key.toLowerCase()] = keymap[key];
            }
        }
        var aKeyCode = 65;
        var aCharCode = "a".charCodeAt(0);
        // letters
        "abcdefghijklmnopqrstuvwxyz".split("").forEach(function(letter) {
            keymap[letter] = aKeyCode + (letter.charCodeAt(0) - aCharCode);
        });
        // numbers
        var n = 9;
        do {
            keymap[n.toString()] = n + 48;
        } while (--n);
        module.exports = keymap;
    }
};

//src/core/keyreceiver.js
_p[16] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var Minder = _p.r(19);
        function listen(element, type, handler) {
            type.split(" ").forEach(function(name) {
                element.addEventListener(name, handler, false);
            });
        }
        Minder.registerInitHook(function(option) {
            this.setDefaultOptions({
                enableKeyReceiver: true
            });
            if (this.getOption("enableKeyReceiver")) {
                this.on("paperrender", function() {
                    this._initKeyReceiver();
                });
            }
        });
        kity.extendClass(Minder, {
            _initKeyReceiver: function() {
                if (this._keyReceiver) return;
                var receiver = this._keyReceiver = document.createElement("input");
                receiver.classList.add("km-receiver");
                var renderTarget = this._renderTarget;
                renderTarget.appendChild(receiver);
                var minder = this;
                listen(receiver, "keydown keyup keypress copy paste blur focus input", function(e) {
                    switch (e.type) {
                      case "blur":
                        minder.blur();
                        break;

                      case "focus":
                        minder.focus();
                        break;

                      case "input":
                        receiver.value = null;
                        break;
                    }
                    minder._firePharse(e);
                    e.preventDefault();
                });
                this.on("focus", function() {
                    receiver.select();
                    receiver.focus();
                });
                this.on("blur", function() {
                    receiver.blur();
                });
                if (this.isFocused()) {
                    receiver.select();
                    receiver.focus();
                }
            }
        });
    }
};

//src/core/kity.js
/**
 * @fileOverview
 *
 * Kity 引入
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[17] = {
    value: function(require, exports, module) {
        module.exports = window.kity;
    }
};

//src/core/layout.js
_p[18] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var Minder = _p.r(19);
        var MinderNode = _p.r(21);
        var MinderEvent = _p.r(13);
        var Command = _p.r(9);
        var _layouts = {};
        var _defaultLayout;
        function register(name, layout) {
            _layouts[name] = layout;
            _defaultLayout = _defaultLayout || name;
        }
        /**
     * @class Layout 布局基类，具体布局需要从该类派生
     */
        var Layout = kity.createClass("Layout", {
            /**
         * @abstract
         *
         * 子类需要实现的布局算法，该算法输入一个节点，排布该节点的子节点（相对父节点的变换）
         *
         * @param  {MinderNode} node 需要布局的节点
         *
         * @example
         *
         * doLayout: function(node) {
         *     var children = node.getChildren();
         *     // layout calculation
         *     children[i].setLayoutTransform(new kity.Matrix().translate(x, y));
         * }
         */
            doLayout: function(parent, children) {
                throw new Error("Not Implement: Layout.doLayout()");
            },
            /**
         * 对齐指定的节点
         *
         * @param {Array<MinderNode>} nodes 要对齐的节点
         * @param {string} border 对齐边界，允许取值 left, right, top, bottom
         *
         */
            align: function(nodes, border, offset) {
                var me = this;
                offset = offset || 0;
                nodes.forEach(function(node) {
                    var tbox = me.getTreeBox([ node ]);
                    var matrix = node.getLayoutTransform();
                    switch (border) {
                      case "left":
                        return matrix.translate(offset - tbox.left, 0);

                      case "right":
                        return matrix.translate(offset - tbox.right, 0);

                      case "top":
                        return matrix.translate(0, offset - tbox.top);

                      case "bottom":
                        return matrix.translate(0, offset - tbox.bottom);
                    }
                });
            },
            stack: function(nodes, axis, distance) {
                var me = this;
                var position = 0;
                distance = distance || function(node, next, axis) {
                    return node.getStyle({
                        x: "margin-right",
                        y: "margin-bottom"
                    }[axis]) + next.getStyle({
                        x: "margin-left",
                        y: "margin-top"
                    }[axis]);
                };
                nodes.forEach(function(node, index, nodes) {
                    var tbox = me.getTreeBox([ node ]);
                    var size = {
                        x: tbox.width,
                        y: tbox.height
                    }[axis];
                    var offset = {
                        x: tbox.left,
                        y: tbox.top
                    }[axis];
                    var matrix = node.getLayoutTransform();
                    if (axis == "x") {
                        matrix.translate(position - offset, 0);
                    } else {
                        matrix.translate(0, position - offset);
                    }
                    position += size;
                    if (nodes[index + 1]) position += distance(node, nodes[index + 1], axis);
                });
                return position;
            },
            move: function(nodes, dx, dy) {
                nodes.forEach(function(node) {
                    node.getLayoutTransform().translate(dx, dy);
                });
            },
            /**
         * 工具方法：获取给点的节点所占的布局区域
         *
         * @param  {MinderNode[]} nodes 需要计算的节点
         *
         * @return {Box} 计算结果
         */
            getBranchBox: function(nodes) {
                var box = new kity.Box();
                var i, node, matrix, contentBox;
                for (i = 0; i < nodes.length; i++) {
                    node = nodes[i];
                    matrix = node.getLayoutTransform();
                    contentBox = node.getContentBox();
                    box = box.merge(matrix.transformBox(contentBox));
                }
                return box;
            },
            /**
         * 工具方法：计算给定的节点的子树所占的布局区域
         *
         * @param  {MinderNode} nodes 需要计算的节点
         *
         * @return {Box} 计算的结果
         */
            getTreeBox: function(nodes) {
                var i, node, matrix, treeBox;
                var box = new kity.Box();
                if (!(nodes instanceof Array)) nodes = [ nodes ];
                for (i = 0; i < nodes.length; i++) {
                    node = nodes[i];
                    matrix = node.getLayoutTransform();
                    treeBox = node.getContentBox();
                    if (node.isExpanded() && node.children.length) {
                        treeBox = treeBox.merge(this.getTreeBox(node.children));
                    }
                    box = box.merge(matrix.transformBox(treeBox));
                }
                return box;
            },
            getOrderHint: function(node) {
                return [];
            }
        });
        Layout.register = register;
        Minder.registerInitHook(function(options) {
            this.refresh();
        });
        /**
     * 布局支持池子管理
     */
        utils.extend(Minder, {
            getLayoutList: function() {
                return _layouts;
            },
            getLayoutInstance: function(name) {
                var LayoutClass = _layouts[name];
                if (!LayoutClass) throw new Error("Missing Layout: " + name);
                var layout = new LayoutClass();
                return layout;
            }
        });
        /**
     * MinderNode 上的布局支持
     */
        kity.extendClass(MinderNode, {
            /**
         * 获得当前节点的布局名称
         *
         * @return {String}
         */
            getLayout: function() {
                var layout = this.getData("layout");
                layout = layout || (this.isRoot() ? _defaultLayout : this.parent.getLayout());
                return layout;
            },
            setLayout: function(name) {
                if (name) {
                    if (name == "inherit") {
                        this.setData("layout");
                    } else {
                        this.setData("layout", name);
                    }
                }
                return this;
            },
            layout: function(name) {
                this.setLayout(name).getMinder().layout();
                return this;
            },
            getLayoutInstance: function() {
                return Minder.getLayoutInstance(this.getLayout());
            },
            getOrderHint: function(refer) {
                return this.parent.getLayoutInstance().getOrderHint(this);
            },
            /**
         * 获取当前节点相对于父节点的布局变换
         */
            getLayoutTransform: function() {
                return this._layoutTransform || new kity.Matrix();
            },
            /**
         * 第一轮布局计算后，获得的全局布局位置
         *
         * @return {[type]} [description]
         */
            getGlobalLayoutTransformPreview: function() {
                var pMatrix = this.parent ? this.parent.getLayoutTransform() : new kity.Matrix();
                var matrix = this.getLayoutTransform();
                var offset = this.getLayoutOffset();
                if (offset) {
                    matrix = matrix.clone().translate(offset.x, offset.y);
                }
                return pMatrix.merge(matrix);
            },
            getLayoutPointPreview: function() {
                return this.getGlobalLayoutTransformPreview().transformPoint(new kity.Point());
            },
            /**
         * 获取节点相对于全局的布局变换
         */
            getGlobalLayoutTransform: function() {
                if (this._globalLayoutTransform) {
                    return this._globalLayoutTransform;
                } else if (this.parent) {
                    return this.parent.getGlobalLayoutTransform();
                } else {
                    return new kity.Matrix();
                }
            },
            /**
         * 设置当前节点相对于父节点的布局变换
         */
            setLayoutTransform: function(matrix) {
                this._layoutTransform = matrix;
                return this;
            },
            /**
         * 设置当前节点相对于全局的布局变换（冗余优化）
         */
            setGlobalLayoutTransform: function(matrix) {
                this.getRenderContainer().setMatrix(this._globalLayoutTransform = matrix);
                return this;
            },
            setVertexIn: function(p) {
                this._vertexIn = p;
            },
            setVertexOut: function(p) {
                this._vertexOut = p;
            },
            getVertexIn: function() {
                return this._vertexIn || new kity.Point();
            },
            getVertexOut: function() {
                return this._vertexOut || new kity.Point();
            },
            getLayoutVertexIn: function() {
                return this.getGlobalLayoutTransform().transformPoint(this.getVertexIn());
            },
            getLayoutVertexOut: function() {
                return this.getGlobalLayoutTransform().transformPoint(this.getVertexOut());
            },
            setLayoutVectorIn: function(v) {
                this._layoutVectorIn = v;
                return this;
            },
            setLayoutVectorOut: function(v) {
                this._layoutVectorOut = v;
                return this;
            },
            getLayoutVectorIn: function() {
                return this._layoutVectorIn || new kity.Vector();
            },
            getLayoutVectorOut: function() {
                return this._layoutVectorOut || new kity.Vector();
            },
            getLayoutBox: function() {
                var matrix = this.getGlobalLayoutTransform();
                return matrix.transformBox(this.getContentBox());
            },
            getLayoutPoint: function() {
                var matrix = this.getGlobalLayoutTransform();
                return matrix.transformPoint(new kity.Point());
            },
            getLayoutOffset: function() {
                if (!this.parent) return new kity.Point();
                // 影响当前节点位置的是父节点的布局
                var data = this.getData("layout_" + this.parent.getLayout() + "_offset");
                if (data) return new kity.Point(data.x, data.y);
                return new kity.Point();
            },
            setLayoutOffset: function(p) {
                if (!this.parent) return this;
                this.setData("layout_" + this.parent.getLayout() + "_offset", p ? {
                    x: p.x,
                    y: p.y
                } : undefined);
                return this;
            },
            hasLayoutOffset: function() {
                return !!this.getData("layout_" + this.parent.getLayout() + "_offset");
            },
            resetLayoutOffset: function() {
                return this.setLayoutOffset(null);
            },
            getLayoutRoot: function() {
                if (this.isLayoutRoot()) {
                    return this;
                }
                return this.parent.getLayoutRoot();
            },
            isLayoutRoot: function() {
                return this.getData("layout") || this.isRoot();
            }
        });
        /**
     * Minder 上的布局支持
     */
        kity.extendClass(Minder, {
            layout: function() {
                var duration = this.getOption("layoutAnimationDuration");
                this.getRoot().traverse(function(node) {
                    // clear last results
                    node.setLayoutTransform(null);
                });
                function layoutNode(node, round) {
                    // layout all children first
                    // 剪枝：收起的节点无需计算
                    if (node.isExpanded() || true) {
                        node.children.forEach(function(child) {
                            layoutNode(child, round);
                        });
                    }
                    var layout = node.getLayoutInstance();
                    // var childrenInFlow = node.getChildren().filter(function(child) {
                    //     return !child.hasLayoutOffset();
                    // });
                    layout.doLayout(node, node.getChildren(), round);
                }
                // 第一轮布局
                layoutNode(this.getRoot(), 1);
                // 第二轮布局
                layoutNode(this.getRoot(), 2);
                var minder = this;
                this.applyLayoutResult(this.getRoot(), duration, function() {
                    /**
                 * 当节点>200, 不使用动画时, 此处逻辑变为同步逻辑, 外部minder.on事件无法
                 * 被提前录入, 因此增加setTimeout
                 * @author Naixor
                 */
                    setTimeout(function() {
                        minder.fire("layoutallfinish");
                    }, 0);
                });
                return this.fire("layout");
            },
            refresh: function() {
                this.getRoot().renderTree();
                this.layout().fire("contentchange")._interactChange();
                return this;
            },
            applyLayoutResult: function(root, duration, callback) {
                root = root || this.getRoot();
                var me = this;
                var complex = root.getComplex();
                function consume() {
                    if (!--complex) {
                        if (callback) {
                            callback();
                        }
                    }
                }
                // 节点复杂度大于 100，关闭动画
                if (complex > 200) duration = 0;
                function applyMatrix(node, matrix) {
                    node.setGlobalLayoutTransform(matrix);
                    me.fire("layoutapply", {
                        node: node,
                        matrix: matrix
                    });
                }
                function apply(node, pMatrix) {
                    var matrix = node.getLayoutTransform().merge(pMatrix.clone());
                    var lastMatrix = node.getGlobalLayoutTransform() || new kity.Matrix();
                    var offset = node.getLayoutOffset();
                    matrix.translate(offset.x, offset.y);
                    matrix.m.e = Math.round(matrix.m.e);
                    matrix.m.f = Math.round(matrix.m.f);
                    // 如果当前有动画，停止动画
                    if (node._layoutTimeline) {
                        node._layoutTimeline.stop();
                        node._layoutTimeline = null;
                    }
                    // 如果要求以动画形式来更新，创建动画
                    if (duration) {
                        node._layoutTimeline = new kity.Animator(lastMatrix, matrix, applyMatrix).start(node, duration, "ease").on("finish", function() {
                            //可能性能低的时候会丢帧，手动添加一帧
                            setTimeout(function() {
                                applyMatrix(node, matrix);
                                me.fire("layoutfinish", {
                                    node: node,
                                    matrix: matrix
                                });
                                consume();
                            }, 150);
                        });
                    } else {
                        applyMatrix(node, matrix);
                        me.fire("layoutfinish", {
                            node: node,
                            matrix: matrix
                        });
                        consume();
                    }
                    for (var i = 0; i < node.children.length; i++) {
                        apply(node.children[i], matrix);
                    }
                }
                apply(root, root.parent ? root.parent.getGlobalLayoutTransform() : new kity.Matrix());
                return this;
            }
        });
        module.exports = Layout;
    }
};

//src/core/minder.js
/**
 * @fileOverview
 *
 * KityMinder 类，暴露在 window 上的唯一变量
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[19] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var _initHooks = [];
        var Minder = kity.createClass("Minder", {
            constructor: function(options) {
                this._options = utils.extend({}, options);
                var initHooks = _initHooks.slice();
                var initHook;
                while (initHooks.length) {
                    initHook = initHooks.shift();
                    if (typeof initHook == "function") {
                        initHook.call(this, this._options);
                    }
                }
                this.fire("finishInitHook");
            }
        });
        Minder.version = "1.4.43";
        Minder.registerInitHook = function(hook) {
            _initHooks.push(hook);
        };
        module.exports = Minder;
    }
};

//src/core/module.js
_p[20] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var Minder = _p.r(19);
        /* 已注册的模块 */
        var _modules = {};
        exports.register = function(name, module) {
            _modules[name] = module;
        };
        /* 模块初始化 */
        Minder.registerInitHook(function() {
            this._initModules();
        });
        // 模块声明周期维护
        kity.extendClass(Minder, {
            _initModules: function() {
                var modulesPool = _modules;
                var modulesToLoad = this._options.modules || utils.keys(modulesPool);
                this._commands = {};
                this._query = {};
                this._modules = {};
                this._rendererClasses = {};
                var i, name, type, module, moduleDeals, dealCommands, dealEvents, dealRenderers;
                var me = this;
                for (i = 0; i < modulesToLoad.length; i++) {
                    name = modulesToLoad[i];
                    if (!modulesPool[name]) continue;
                    // 执行模块初始化，抛出后续处理对象
                    if (typeof modulesPool[name] == "function") {
                        moduleDeals = modulesPool[name].call(me);
                    } else {
                        moduleDeals = modulesPool[name];
                    }
                    this._modules[name] = moduleDeals;
                    if (!moduleDeals) continue;
                    if (moduleDeals.defaultOptions) {
                        me.setDefaultOptions(moduleDeals.defaultOptions);
                    }
                    if (moduleDeals.init) {
                        moduleDeals.init.call(me, this._options);
                    }
                    /**
                 * @Desc: 判断是否支持原生clipboard事件，如果支持，则对pager添加其监听
                 * @Editor: Naixor
                 * @Date: 2015.9.20
                 */
                    /**
                 * 由于当前脑图解构问题，clipboard暂时全权交由玩不托管
                 * @Editor: Naixor
                 * @Date: 2015.9.24
                 */
                    // if (name === 'ClipboardModule' && this.supportClipboardEvent  && !kity.Browser.gecko) {
                    //     var on = function () {
                    //         var clipBoardReceiver = this.clipBoardReceiver || document;
                    //         if (document.addEventListener) {
                    //             clipBoardReceiver.addEventListener.apply(this, arguments);
                    //         } else {
                    //             arguments[0] = 'on' + arguments[0];
                    //             clipBoardReceiver.attachEvent.apply(this, arguments);
                    //         }
                    //     }
                    //     for (var command in moduleDeals.clipBoardEvents) {
                    //         on(command, moduleDeals.clipBoardEvents[command]);
                    //     }
                    // };
                    // command加入命令池子
                    dealCommands = moduleDeals.commands;
                    for (name in dealCommands) {
                        this._commands[name.toLowerCase()] = new dealCommands[name]();
                    }
                    // 绑定事件
                    dealEvents = moduleDeals.events;
                    if (dealEvents) {
                        for (type in dealEvents) {
                            me.on(type, dealEvents[type]);
                        }
                    }
                    // 渲染器
                    dealRenderers = moduleDeals.renderers;
                    if (dealRenderers) {
                        for (type in dealRenderers) {
                            this._rendererClasses[type] = this._rendererClasses[type] || [];
                            if (utils.isArray(dealRenderers[type])) {
                                this._rendererClasses[type] = this._rendererClasses[type].concat(dealRenderers[type]);
                            } else {
                                this._rendererClasses[type].push(dealRenderers[type]);
                            }
                        }
                    }
                    //添加模块的快捷键
                    if (moduleDeals.commandShortcutKeys) {
                        this.addCommandShortcutKeys(moduleDeals.commandShortcutKeys);
                    }
                }
            },
            _garbage: function() {
                this.clearSelect();
                while (this._root.getChildren().length) {
                    this._root.removeChild(0);
                }
            },
            destroy: function() {
                var modules = this._modules;
                this._resetEvents();
                this._garbage();
                for (var key in modules) {
                    if (!modules[key].destroy) continue;
                    modules[key].destroy.call(this);
                }
            },
            reset: function() {
                var modules = this._modules;
                this._garbage();
                for (var key in modules) {
                    if (!modules[key].reset) continue;
                    modules[key].reset.call(this);
                }
            }
        });
    }
};

//src/core/node.js
_p[21] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var Minder = _p.r(19);
        /**
     * @class MinderNode
     *
     * 表示一个脑图节点
     */
        var MinderNode = kity.createClass("MinderNode", {
            /**
         * 创建一个游离的脑图节点
         *
         * @param {String|Object} textOrData
         *     节点的初始数据或文本
         */
            constructor: function(textOrData) {
                // 指针
                this.parent = null;
                this.root = this;
                this.children = [];
                // 数据
                this.data = {
                    id: utils.guid(),
                    created: +new Date()
                };
                // 绘图容器
                this.initContainers();
                if (utils.isString(textOrData)) {
                    this.setText(textOrData);
                } else if (utils.isObject(textOrData)) {
                    utils.extend(this.data, textOrData);
                }
            },
            initContainers: function() {
                this.rc = new kity.Group().setId(utils.uuid("minder_node"));
                this.rc.minderNode = this;
            },
            /**
         * 判断节点是否根节点
         */
            isRoot: function() {
                return this.root === this;
            },
            /**
         * 判断节点是否叶子
         */
            isLeaf: function() {
                return this.children.length === 0;
            },
            /**
         * 获取节点的根节点
         */
            getRoot: function() {
                return this.root || this;
            },
            /**
         * 获得节点的父节点
         */
            getParent: function() {
                return this.parent;
            },
            getSiblings: function() {
                var children = this.parent.children;
                var siblings = [];
                var self = this;
                children.forEach(function(child) {
                    if (child != self) siblings.push(child);
                });
                return siblings;
            },
            /**
         * 获得节点的深度
         */
            getLevel: function() {
                var level = 0, ancestor = this.parent;
                while (ancestor) {
                    level++;
                    ancestor = ancestor.parent;
                }
                return level;
            },
            /**
         * 获得节点的复杂度（即子树中节点的数量）
         */
            getComplex: function() {
                var complex = 0;
                this.traverse(function() {
                    complex++;
                });
                return complex;
            },
            /**
         * 获得节点的类型（root|main|sub）
         */
            getType: function(type) {
                this.type = [ "root", "main", "sub" ][Math.min(this.getLevel(), 2)];
                return this.type;
            },
            /**
         * 判断当前节点是否被测试节点的祖先
         * @param  {MinderNode}  test 被测试的节点
         */
            isAncestorOf: function(test) {
                var ancestor = test.parent;
                while (ancestor) {
                    if (ancestor == this) return true;
                    ancestor = ancestor.parent;
                }
                return false;
            },
            getData: function(key) {
                return key ? this.data[key] : this.data;
            },
            setData: function(key, value) {
                if (typeof key == "object") {
                    var data = key;
                    for (key in data) if (data.hasOwnProperty(key)) {
                        this.data[key] = data[key];
                    }
                } else {
                    this.data[key] = value;
                }
                return this;
            },
            /**
         * 设置节点的文本数据
         * @param {String} text 文本数据
         */
            setText: function(text) {
                return this.data.text = text;
            },
            /**
         * 获取节点的文本数据
         * @return {String}
         */
            getText: function() {
                return this.data.text || null;
            },
            /**
         * 先序遍历当前节点树
         * @param  {Function} fn 遍历函数
         */
            preTraverse: function(fn, excludeThis) {
                var children = this.getChildren();
                if (!excludeThis) fn(this);
                for (var i = 0; i < children.length; i++) {
                    children[i].preTraverse(fn);
                }
            },
            /**
         * 后序遍历当前节点树
         * @param  {Function} fn 遍历函数
         */
            postTraverse: function(fn, excludeThis) {
                var children = this.getChildren();
                for (var i = 0; i < children.length; i++) {
                    children[i].postTraverse(fn);
                }
                if (!excludeThis) fn(this);
            },
            traverse: function(fn, excludeThis) {
                return this.postTraverse(fn, excludeThis);
            },
            getChildren: function() {
                return this.children;
            },
            getIndex: function() {
                return this.parent ? this.parent.children.indexOf(this) : -1;
            },
            insertChild: function(node, index) {
                if (index === undefined) {
                    index = this.children.length;
                }
                if (node.parent) {
                    node.parent.removeChild(node);
                }
                node.parent = this;
                node.root = this.root;
                this.children.splice(index, 0, node);
            },
            appendChild: function(node) {
                return this.insertChild(node);
            },
            prependChild: function(node) {
                return this.insertChild(node, 0);
            },
            removeChild: function(elem) {
                var index = elem, removed;
                if (elem instanceof MinderNode) {
                    index = this.children.indexOf(elem);
                }
                if (index >= 0) {
                    removed = this.children.splice(index, 1)[0];
                    removed.parent = null;
                    removed.root = removed;
                }
            },
            clearChildren: function() {
                this.children = [];
            },
            getChild: function(index) {
                return this.children[index];
            },
            getRenderContainer: function() {
                return this.rc;
            },
            getCommonAncestor: function(node) {
                return MinderNode.getCommonAncestor(this, node);
            },
            contains: function(node) {
                return this == node || this.isAncestorOf(node);
            },
            clone: function() {
                var cloned = new MinderNode();
                cloned.data = utils.clone(this.data);
                this.children.forEach(function(child) {
                    cloned.appendChild(child.clone());
                });
                return cloned;
            },
            compareTo: function(node) {
                if (!utils.comparePlainObject(this.data, node.data)) return false;
                if (!utils.comparePlainObject(this.temp, node.temp)) return false;
                if (this.children.length != node.children.length) return false;
                var i = 0;
                while (this.children[i]) {
                    if (!this.children[i].compareTo(node.children[i])) return false;
                    i++;
                }
                return true;
            },
            getMinder: function() {
                return this.getRoot().minder;
            }
        });
        MinderNode.getCommonAncestor = function(nodeA, nodeB) {
            if (nodeA instanceof Array) {
                return MinderNode.getCommonAncestor.apply(this, nodeA);
            }
            switch (arguments.length) {
              case 1:
                return nodeA.parent || nodeA;

              case 2:
                if (nodeA.isAncestorOf(nodeB)) {
                    return nodeA;
                }
                if (nodeB.isAncestorOf(nodeA)) {
                    return nodeB;
                }
                var ancestor = nodeA.parent;
                while (ancestor && !ancestor.isAncestorOf(nodeB)) {
                    ancestor = ancestor.parent;
                }
                return ancestor;

              default:
                return Array.prototype.reduce.call(arguments, function(prev, current) {
                    return MinderNode.getCommonAncestor(prev, current);
                }, nodeA);
            }
        };
        kity.extendClass(Minder, {
            getRoot: function() {
                return this._root;
            },
            setRoot: function(root) {
                this._root = root;
                root.minder = this;
            },
            getAllNode: function() {
                var nodes = [];
                this.getRoot().traverse(function(node) {
                    nodes.push(node);
                });
                return nodes;
            },
            getNodeById: function(id) {
                return this.getNodesById([ id ])[0];
            },
            getNodesById: function(ids) {
                var nodes = this.getAllNode();
                var result = [];
                nodes.forEach(function(node) {
                    if (ids.indexOf(node.getData("id")) != -1) {
                        result.push(node);
                    }
                });
                return result;
            },
            createNode: function(textOrData, parent, index) {
                var node = new MinderNode(textOrData);
                this.fire("nodecreate", {
                    node: node,
                    parent: parent,
                    index: index
                });
                this.appendNode(node, parent, index);
                return node;
            },
            appendNode: function(node, parent, index) {
                if (parent) parent.insertChild(node, index);
                this.attachNode(node);
                return this;
            },
            removeNode: function(node) {
                if (node.parent) {
                    node.parent.removeChild(node);
                    this.detachNode(node);
                    this.fire("noderemove", {
                        node: node
                    });
                }
            },
            attachNode: function(node) {
                var rc = this.getRenderContainer();
                node.traverse(function(current) {
                    current.attached = true;
                    rc.addShape(current.getRenderContainer());
                });
                rc.addShape(node.getRenderContainer());
                this.fire("nodeattach", {
                    node: node
                });
            },
            detachNode: function(node) {
                var rc = this.getRenderContainer();
                node.traverse(function(current) {
                    current.attached = false;
                    rc.removeShape(current.getRenderContainer());
                });
                this.fire("nodedetach", {
                    node: node
                });
            },
            getMinderTitle: function() {
                return this.getRoot().getText();
            }
        });
        module.exports = MinderNode;
    }
};

//src/core/option.js
/**
 * @fileOverview
 *
 * 提供脑图选项支持
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[22] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var Minder = _p.r(19);
        Minder.registerInitHook(function(options) {
            this._defaultOptions = {};
        });
        kity.extendClass(Minder, {
            setDefaultOptions: function(options) {
                utils.extend(this._defaultOptions, options);
                return this;
            },
            getOption: function(key) {
                if (key) {
                    return key in this._options ? this._options[key] : this._defaultOptions[key];
                } else {
                    return utils.extend({}, this._defaultOptions, this._options);
                }
            },
            setOption: function(key, value) {
                this._options[key] = value;
            }
        });
    }
};

//src/core/paper.js
/**
 * @fileOverview
 *
 * 初始化渲染容器
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[23] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var Minder = _p.r(19);
        Minder.registerInitHook(function() {
            this._initPaper();
        });
        kity.extendClass(Minder, {
            _initPaper: function() {
                this._paper = new kity.Paper();
                this._paper._minder = this;
                this._paper.getNode().ondragstart = function(e) {
                    e.preventDefault();
                };
                this._paper.shapeNode.setAttribute("transform", "translate(0.5, 0.5)");
                this._addRenderContainer();
                this.setRoot(this.createNode());
                if (this._options.renderTo) {
                    this.renderTo(this._options.renderTo);
                }
            },
            _addRenderContainer: function() {
                this._rc = new kity.Group().setId(utils.uuid("minder"));
                this._paper.addShape(this._rc);
            },
            renderTo: function(target) {
                if (typeof target == "string") {
                    target = document.querySelector(target);
                }
                if (target) {
                    if (target.tagName.toLowerCase() == "script") {
                        var newTarget = document.createElement("div");
                        newTarget.id = target.id;
                        newTarget.class = target.class;
                        target.parentNode.insertBefore(newTarget, target);
                        target.parentNode.removeChild(target);
                        target = newTarget;
                    }
                    target.classList.add("km-view");
                    this._paper.renderTo(this._renderTarget = target);
                    this._bindEvents();
                    this.fire("paperrender");
                }
                return this;
            },
            getRenderContainer: function() {
                return this._rc;
            },
            getPaper: function() {
                return this._paper;
            },
            getRenderTarget: function() {
                return this._renderTarget;
            }
        });
    }
};

//src/core/patch.js
/**
 * @fileOverview
 *
 * 打补丁
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[24] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var Minder = _p.r(19);
        function insertNode(minder, info, parent, index) {
            parent = minder.createNode(info.data, parent, index);
            info.children.forEach(function(childInfo, index) {
                insertNode(minder, childInfo, parent, index);
            });
            return parent;
        }
        function applyPatch(minder, patch) {
            // patch.op - 操作，包括 remove, add, replace
            // patch.path - 路径，如 '/root/children/1/data'
            // patch.value - 数据，如 { text: "思路" }
            var path = patch.path.split("/");
            path.shift();
            var changed = path.shift();
            var node;
            if (changed == "root") {
                var dataIndex = path.indexOf("data");
                if (dataIndex > -1) {
                    changed = "data";
                    var dataPath = path.splice(dataIndex + 1);
                    patch.dataPath = dataPath;
                } else {
                    changed = "node";
                }
                node = minder.getRoot();
                var segment, index;
                while (segment = path.shift()) {
                    if (segment == "children") continue;
                    if (typeof index != "undefined") node = node.getChild(index);
                    index = +segment;
                }
                patch.index = index;
                patch.node = node;
            }
            var express = patch.express = [ changed, patch.op ].join(".");
            switch (express) {
              case "theme.replace":
                minder.useTheme(patch.value);
                break;

              case "template.replace":
                minder.useTemplate(patch.value);
                break;

              case "node.add":
                insertNode(minder, patch.value, patch.node, patch.index).renderTree();
                minder.layout();
                break;

              case "node.remove":
                minder.removeNode(patch.node.getChild(patch.index));
                minder.layout();
                break;

              case "data.add":
              case "data.replace":
              case "data.remove":
                var data = patch.node.data;
                var field;
                path = patch.dataPath.slice();
                while (data && path.length > 1) {
                    field = path.shift();
                    if (field in data) {
                        data = data[field];
                    } else if (patch.op != "remove") {
                        data = data[field] = {};
                    }
                }
                if (data) {
                    field = path.shift();
                    data[field] = patch.value;
                }
                if (field == "expandState") {
                    node.renderTree();
                } else {
                    node.render();
                }
                minder.layout();
            }
            minder.fire("patch", {
                patch: patch
            });
        }
        kity.extendClass(Minder, {
            applyPatches: function(patches) {
                for (var i = 0; i < patches.length; i++) {
                    applyPatch(this, patches[i]);
                }
                this.fire("contentchange");
                return this;
            }
        });
    }
};

//src/core/promise.js
_p[25] = {
    value: function(require, exports, module) {
        /*!
    **  Thenable -- Embeddable Minimum Strictly-Compliant Promises/A+ 1.1.1 Thenable
    **  Copyright (c) 2013-2014 Ralf S. Engelschall <http://engelschall.com>
    **  Licensed under The MIT License <http://opensource.org/licenses/MIT>
    **  Source-Code distributed on <http://github.com/rse/thenable>
    */
        /*  promise states [Promises/A+ 2.1]  */
        var STATE_PENDING = 0;
        /*  [Promises/A+ 2.1.1]  */
        var STATE_FULFILLED = 1;
        /*  [Promises/A+ 2.1.2]  */
        var STATE_REJECTED = 2;
        /*  [Promises/A+ 2.1.3]  */
        /*  promise object constructor  */
        var Promise = function(executor) {
            /*  optionally support non-constructor/plain-function call  */
            if (!(this instanceof Promise)) return new Promise(executor);
            /*  initialize object  */
            this.id = "Thenable/1.0.7";
            this.state = STATE_PENDING;
            /*  initial state  */
            this.fulfillValue = undefined;
            /*  initial value  */
            /*  [Promises/A+ 1.3, 2.1.2.2]  */
            this.rejectReason = undefined;
            /*  initial reason */
            /*  [Promises/A+ 1.5, 2.1.3.2]  */
            this.onFulfilled = [];
            /*  initial handlers  */
            this.onRejected = [];
            /*  initial handlers  */
            /*  support optional executor function  */
            if (typeof executor === "function") executor.call(this, this.fulfill.bind(this), this.reject.bind(this));
        };
        /*  Promise API methods  */
        Promise.prototype = {
            /*  promise resolving methods  */
            fulfill: function(value) {
                return deliver(this, STATE_FULFILLED, "fulfillValue", value);
            },
            reject: function(value) {
                return deliver(this, STATE_REJECTED, "rejectReason", value);
            },
            /*  'The then Method' [Promises/A+ 1.1, 1.2, 2.2]  */
            then: function(onFulfilled, onRejected) {
                var curr = this;
                var next = new Promise();
                /*  [Promises/A+ 2.2.7]  */
                curr.onFulfilled.push(resolver(onFulfilled, next, "fulfill"));
                /*  [Promises/A+ 2.2.2/2.2.6]  */
                curr.onRejected.push(resolver(onRejected, next, "reject"));
                /*  [Promises/A+ 2.2.3/2.2.6]  */
                execute(curr);
                return next;
            }
        };
        Promise.all = function(arr) {
            return new Promise(function(resolve, reject) {
                var len = arr.length, i = 0, res = 0, results = [];
                if (len === 0) {
                    resolve(results);
                }
                while (i < len) {
                    arr[i].then(function(result) {
                        results.push(result);
                        if (++res === len) {
                            resolve(results);
                        }
                    }, function(val) {
                        reject(val);
                    });
                    i++;
                }
            });
        };
        /*  deliver an action  */
        var deliver = function(curr, state, name, value) {
            if (curr.state === STATE_PENDING) {
                curr.state = state;
                /*  [Promises/A+ 2.1.2.1, 2.1.3.1]  */
                curr[name] = value;
                /*  [Promises/A+ 2.1.2.2, 2.1.3.2]  */
                execute(curr);
            }
            return curr;
        };
        /*  execute all handlers  */
        var execute = function(curr) {
            if (curr.state === STATE_FULFILLED) execute_handlers(curr, "onFulfilled", curr.fulfillValue); else if (curr.state === STATE_REJECTED) execute_handlers(curr, "onRejected", curr.rejectReason);
        };
        /*  execute particular set of handlers  */
        var execute_handlers = function(curr, name, value) {
            /* global process: true */
            /* global setImmediate: true */
            /* global setTimeout: true */
            /*  short-circuit processing  */
            if (curr[name].length === 0) return;
            /*  iterate over all handlers, exactly once  */
            var handlers = curr[name];
            curr[name] = [];
            /*  [Promises/A+ 2.2.2.3, 2.2.3.3]  */
            var func = function() {
                for (var i = 0; i < handlers.length; i++) handlers[i](value);
            };
            /*  execute procedure asynchronously  */
            /*  [Promises/A+ 2.2.4, 3.1]  */
            if (typeof process === "object" && typeof process.nextTick === "function") process.nextTick(func); else if (typeof setImmediate === "function") setImmediate(func); else setTimeout(func, 0);
        };
        /*  generate a resolver function */
        var resolver = function(cb, next, method) {
            return function(value) {
                if (typeof cb !== "function") /*  [Promises/A+ 2.2.1, 2.2.7.3, 2.2.7.4]  */
                next[method].call(next, value); else {
                    var result;
                    try {
                        if (value instanceof Promise) {
                            result = value.then(cb);
                        } else result = cb(value);
                    } /*  [Promises/A+ 2.2.2.1, 2.2.3.1, 2.2.5, 3.2]  */
                    catch (e) {
                        next.reject(e);
                        /*  [Promises/A+ 2.2.7.2]  */
                        return;
                    }
                    resolve(next, result);
                }
            };
        };
        /*  'Promise Resolution Procedure'  */
        /*  [Promises/A+ 2.3]  */
        var resolve = function(promise, x) {
            /*  sanity check arguments  */
            /*  [Promises/A+ 2.3.1]  */
            if (promise === x) {
                promise.reject(new TypeError("cannot resolve promise with itself"));
                return;
            }
            /*  surgically check for a 'then' method
            (mainly to just call the 'getter' of 'then' only once)  */
            var then;
            if (typeof x === "object" && x !== null || typeof x === "function") {
                try {
                    then = x.then;
                } /*  [Promises/A+ 2.3.3.1, 3.5]  */
                catch (e) {
                    promise.reject(e);
                    /*  [Promises/A+ 2.3.3.2]  */
                    return;
                }
            }
            /*  handle own Thenables    [Promises/A+ 2.3.2]
            and similar 'thenables' [Promises/A+ 2.3.3]  */
            if (typeof then === "function") {
                var resolved = false;
                try {
                    /*  call retrieved 'then' method */
                    /*  [Promises/A+ 2.3.3.3]  */
                    then.call(x, /*  resolvePromise  */
                    /*  [Promises/A+ 2.3.3.3.1]  */
                    function(y) {
                        if (resolved) return;
                        resolved = true;
                        /*  [Promises/A+ 2.3.3.3.3]  */
                        if (y === x) /*  [Promises/A+ 3.6]  */
                        promise.reject(new TypeError("circular thenable chain")); else resolve(promise, y);
                    }, /*  rejectPromise  */
                    /*  [Promises/A+ 2.3.3.3.2]  */
                    function(r) {
                        if (resolved) return;
                        resolved = true;
                        /*  [Promises/A+ 2.3.3.3.3]  */
                        promise.reject(r);
                    });
                } catch (e) {
                    if (!resolved) /*  [Promises/A+ 2.3.3.3.3]  */
                    promise.reject(e);
                }
                return;
            }
            /*  handle other values  */
            promise.fulfill(x);
        };
        Promise.resolve = function(value) {
            return new Promise(function(resolve) {
                resolve(value);
            });
        };
        Promise.reject = function(reason) {
            return new Promise(function(resolve, reject) {
                reject(reason);
            });
        };
        /*  export API  */
        module.exports = Promise;
    }
};

//src/core/readonly.js
/**
 * @fileOverview
 *
 * 只读模式支持
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[26] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var Minder = _p.r(19);
        var MinderEvent = _p.r(13);
        Minder.registerInitHook(function(options) {
            if (options.readOnly) {
                this.setDisabled();
            }
        });
        kity.extendClass(Minder, {
            disable: function() {
                var me = this;
                //禁用命令
                me.bkqueryCommandState = me.queryCommandState;
                me.bkqueryCommandValue = me.queryCommandValue;
                me.queryCommandState = function(type) {
                    var cmd = this._getCommand(type);
                    if (cmd && cmd.enableReadOnly) {
                        return me.bkqueryCommandState.apply(me, arguments);
                    }
                    return -1;
                };
                me.queryCommandValue = function(type) {
                    var cmd = this._getCommand(type);
                    if (cmd && cmd.enableReadOnly) {
                        return me.bkqueryCommandValue.apply(me, arguments);
                    }
                    return null;
                };
                this.setStatus("readonly");
                me._interactChange();
            },
            enable: function() {
                var me = this;
                if (me.bkqueryCommandState) {
                    me.queryCommandState = me.bkqueryCommandState;
                    delete me.bkqueryCommandState;
                }
                if (me.bkqueryCommandValue) {
                    me.queryCommandValue = me.bkqueryCommandValue;
                    delete me.bkqueryCommandValue;
                }
                this.setStatus("normal");
                me._interactChange();
            }
        });
    }
};

//src/core/render.js
_p[27] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var Minder = _p.r(19);
        var MinderNode = _p.r(21);
        var Renderer = kity.createClass("Renderer", {
            constructor: function(node) {
                this.node = node;
            },
            create: function(node) {
                throw new Error("Not implement: Renderer.create()");
            },
            shouldRender: function(node) {
                return true;
            },
            watchChange: function(data) {
                var changed;
                if (this.watchingData === undefined) {
                    changed = true;
                } else if (this.watchingData != data) {
                    changed = true;
                } else {
                    changed = false;
                }
                this.watchingData = data;
            },
            shouldDraw: function(node) {
                return true;
            },
            update: function(shape, node, box) {
                if (this.shouldDraw()) this.draw(shape, node);
                return this.place(shape, node, box);
            },
            draw: function(shape, node) {
                throw new Error("Not implement: Renderer.draw()");
            },
            place: function(shape, node, box) {
                throw new Error("Not implement: Renderer.place()");
            },
            getRenderShape: function() {
                return this._renderShape || null;
            },
            setRenderShape: function(shape) {
                this._renderShape = shape;
            }
        });
        function createMinderExtension() {
            function createRendererForNode(node, registered) {
                var renderers = [];
                [ "center", "left", "right", "top", "bottom", "outline", "outside" ].forEach(function(section) {
                    var before = "before" + section;
                    var after = "after" + section;
                    if (registered[before]) {
                        renderers = renderers.concat(registered[before]);
                    }
                    if (registered[section]) {
                        renderers = renderers.concat(registered[section]);
                    }
                    if (registered[after]) {
                        renderers = renderers.concat(registered[after]);
                    }
                });
                node._renderers = renderers.map(function(Renderer) {
                    return new Renderer(node);
                });
            }
            return {
                renderNodeBatch: function(nodes) {
                    var rendererClasses = this._rendererClasses;
                    var lastBoxes = [];
                    var rendererCount = 0;
                    var i, j, renderer, node;
                    if (!nodes.length) return;
                    for (j = 0; j < nodes.length; j++) {
                        node = nodes[j];
                        if (!node._renderers) {
                            createRendererForNode(node, rendererClasses);
                        }
                        node._contentBox = new kity.Box();
                        this.fire("beforerender", {
                            node: node
                        });
                    }
                    // 所有节点渲染器数量是一致的
                    rendererCount = nodes[0]._renderers.length;
                    for (i = 0; i < rendererCount; i++) {
                        // 获取延迟盒子数据
                        for (j = 0; j < nodes.length; j++) {
                            if (typeof lastBoxes[j] == "function") {
                                lastBoxes[j] = lastBoxes[j]();
                            }
                            if (!(lastBoxes[j] instanceof kity.Box)) {
                                lastBoxes[j] = new kity.Box(lastBoxes[j]);
                            }
                        }
                        for (j = 0; j < nodes.length; j++) {
                            node = nodes[j];
                            renderer = node._renderers[i];
                            // 合并盒子
                            if (lastBoxes[j]) {
                                node._contentBox = node._contentBox.merge(lastBoxes[j]);
                                renderer.contentBox = lastBoxes[j];
                            }
                            // 判断当前上下文是否应该渲染
                            if (renderer.shouldRender(node)) {
                                // 应该渲染，但是渲染图形没创建过，需要创建
                                if (!renderer.getRenderShape()) {
                                    renderer.setRenderShape(renderer.create(node));
                                    if (renderer.bringToBack) {
                                        node.getRenderContainer().prependShape(renderer.getRenderShape());
                                    } else {
                                        node.getRenderContainer().appendShape(renderer.getRenderShape());
                                    }
                                }
                                // 强制让渲染图形显示
                                renderer.getRenderShape().setVisible(true);
                                // 更新渲染图形
                                lastBoxes[j] = renderer.update(renderer.getRenderShape(), node, node._contentBox);
                            } else if (renderer.getRenderShape()) {
                                renderer.getRenderShape().setVisible(false);
                                lastBoxes[j] = null;
                            }
                        }
                    }
                    for (j = 0; j < nodes.length; j++) {
                        this.fire("noderender", {
                            node: nodes[j]
                        });
                    }
                },
                renderNode: function(node) {
                    var rendererClasses = this._rendererClasses;
                    var i, latestBox, renderer;
                    if (!node._renderers) {
                        createRendererForNode(node, rendererClasses);
                    }
                    this.fire("beforerender", {
                        node: node
                    });
                    node._contentBox = new kity.Box();
                    node._renderers.forEach(function(renderer) {
                        // 判断当前上下文是否应该渲染
                        if (renderer.shouldRender(node)) {
                            // 应该渲染，但是渲染图形没创建过，需要创建
                            if (!renderer.getRenderShape()) {
                                renderer.setRenderShape(renderer.create(node));
                                if (renderer.bringToBack) {
                                    node.getRenderContainer().prependShape(renderer.getRenderShape());
                                } else {
                                    node.getRenderContainer().appendShape(renderer.getRenderShape());
                                }
                            }
                            // 强制让渲染图形显示
                            renderer.getRenderShape().setVisible(true);
                            // 更新渲染图形
                            latestBox = renderer.update(renderer.getRenderShape(), node, node._contentBox);
                            if (typeof latestBox == "function") latestBox = latestBox();
                            // 合并渲染区域
                            if (latestBox) {
                                node._contentBox = node._contentBox.merge(latestBox);
                                renderer.contentBox = latestBox;
                            }
                        } else if (renderer.getRenderShape()) {
                            renderer.getRenderShape().setVisible(false);
                        }
                    });
                    this.fire("noderender", {
                        node: node
                    });
                }
            };
        }
        kity.extendClass(Minder, createMinderExtension());
        kity.extendClass(MinderNode, {
            render: function() {
                if (!this.attached) return;
                this.getMinder().renderNode(this);
                return this;
            },
            renderTree: function() {
                if (!this.attached) return;
                var list = [];
                this.traverse(function(node) {
                    list.push(node);
                });
                this.getMinder().renderNodeBatch(list);
                return this;
            },
            getRenderer: function(type) {
                var rs = this._renderers;
                if (!rs) return null;
                for (var i = 0; i < rs.length; i++) {
                    if (rs[i].getType() == type) return rs[i];
                }
                return null;
            },
            getContentBox: function() {
                //if (!this._contentBox) this.render();
                return this.parent && this.parent.isCollapsed() ? new kity.Box() : this._contentBox || new kity.Box();
            },
            getRenderBox: function(rendererType, refer) {
                var renderer = rendererType && this.getRenderer(rendererType);
                var contentBox = renderer ? renderer.contentBox : this.getContentBox();
                var ctm = kity.Matrix.getCTM(this.getRenderContainer(), refer || "paper");
                return ctm.transformBox(contentBox);
            }
        });
        module.exports = Renderer;
    }
};

//src/core/select.js
_p[28] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var Minder = _p.r(19);
        var MinderNode = _p.r(21);
        Minder.registerInitHook(function() {
            this._initSelection();
        });
        // 选区管理
        kity.extendClass(Minder, {
            _initSelection: function() {
                this._selectedNodes = [];
            },
            renderChangedSelection: function(last) {
                var current = this.getSelectedNodes();
                var changed = [];
                current.forEach(function(node) {
                    if (last.indexOf(node) == -1) {
                        changed.push(node);
                    }
                });
                last.forEach(function(node) {
                    if (current.indexOf(node) == -1) {
                        changed.push(node);
                    }
                });
                if (changed.length) {
                    this._interactChange();
                    this.fire("selectionchange");
                }
                while (changed.length) {
                    changed.shift().render();
                }
            },
            getSelectedNodes: function() {
                //不能克隆返回，会对当前选区操作，从而影响querycommand
                return this._selectedNodes;
            },
            getSelectedNode: function() {
                return this.getSelectedNodes()[0] || null;
            },
            removeAllSelectedNodes: function() {
                var me = this;
                var last = this._selectedNodes.splice(0);
                this._selectedNodes = [];
                this.renderChangedSelection(last);
                return this.fire("selectionclear");
            },
            removeSelectedNodes: function(nodes) {
                var me = this;
                var last = this._selectedNodes.slice(0);
                nodes = utils.isArray(nodes) ? nodes : [ nodes ];
                nodes.forEach(function(node) {
                    var index;
                    if ((index = me._selectedNodes.indexOf(node)) === -1) return;
                    me._selectedNodes.splice(index, 1);
                });
                this.renderChangedSelection(last);
                return this;
            },
            select: function(nodes, isSingleSelect) {
                var lastSelect = this.getSelectedNodes().slice(0);
                if (isSingleSelect) {
                    this._selectedNodes = [];
                }
                var me = this;
                nodes = utils.isArray(nodes) ? nodes : [ nodes ];
                nodes.forEach(function(node) {
                    if (me._selectedNodes.indexOf(node) !== -1) return;
                    me._selectedNodes.unshift(node);
                });
                this.renderChangedSelection(lastSelect);
                return this;
            },
            selectById: function(ids, isSingleSelect) {
                ids = utils.isArray(ids) ? ids : [ ids ];
                var nodes = this.getNodesById(ids);
                return this.select(nodes, isSingleSelect);
            },
            //当前选区中的节点在给定的节点范围内的保留选中状态，
            //没在给定范围的取消选中，给定范围中的但没在当前选中范围的也做选中效果
            toggleSelect: function(node) {
                if (utils.isArray(node)) {
                    node.forEach(this.toggleSelect.bind(this));
                } else {
                    if (node.isSelected()) this.removeSelectedNodes(node); else this.select(node);
                }
                return this;
            },
            isSingleSelect: function() {
                return this._selectedNodes.length == 1;
            },
            getSelectedAncestors: function(includeRoot) {
                var nodes = this.getSelectedNodes().slice(0), ancestors = [], judge;
                // 根节点不参与计算
                var rootIndex = nodes.indexOf(this.getRoot());
                if (~rootIndex && !includeRoot) {
                    nodes.splice(rootIndex, 1);
                }
                // 判断 nodes 列表中是否存在 judge 的祖先
                function hasAncestor(nodes, judge) {
                    for (var i = nodes.length - 1; i >= 0; --i) {
                        if (nodes[i].isAncestorOf(judge)) return true;
                    }
                    return false;
                }
                // 按照拓扑排序
                nodes.sort(function(node1, node2) {
                    return node1.getLevel() - node2.getLevel();
                });
                // 因为是拓扑有序的，所以只需往上查找
                while (judge = nodes.pop()) {
                    if (!hasAncestor(nodes, judge)) {
                        ancestors.push(judge);
                    }
                }
                return ancestors;
            }
        });
        kity.extendClass(MinderNode, {
            isSelected: function() {
                var minder = this.getMinder();
                return minder && minder.getSelectedNodes().indexOf(this) != -1;
            }
        });
    }
};

//src/core/shortcut.js
/**
 * @fileOverview
 *
 * 添加快捷键支持
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[29] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var keymap = _p.r(15);
        var Minder = _p.r(19);
        var MinderEvent = _p.r(13);
        /**
     * 计算包含 meta 键的 keycode
     *
     * @param  {String|KeyEvent} unknown
     */
        function getMetaKeyCode(unknown) {
            var CTRL_MASK = 4096;
            var ALT_MASK = 8192;
            var SHIFT_MASK = 16384;
            var metaKeyCode = 0;
            if (typeof unknown == "string") {
                // unknown as string
                unknown.toLowerCase().split(/\+\s*/).forEach(function(name) {
                    switch (name) {
                      case "ctrl":
                      case "cmd":
                        metaKeyCode |= CTRL_MASK;
                        break;

                      case "alt":
                        metaKeyCode |= ALT_MASK;
                        break;

                      case "shift":
                        metaKeyCode |= SHIFT_MASK;
                        break;

                      default:
                        metaKeyCode |= keymap[name];
                    }
                });
            } else {
                // unknown as key event
                if (unknown.ctrlKey || unknown.metaKey) {
                    metaKeyCode |= CTRL_MASK;
                }
                if (unknown.altKey) {
                    metaKeyCode |= ALT_MASK;
                }
                if (unknown.shiftKey) {
                    metaKeyCode |= SHIFT_MASK;
                }
                metaKeyCode |= unknown.keyCode;
            }
            return metaKeyCode;
        }
        kity.extendClass(MinderEvent, {
            isShortcutKey: function(keyCombine) {
                var keyEvent = this.originEvent;
                if (!keyEvent) return false;
                return getMetaKeyCode(keyCombine) == getMetaKeyCode(keyEvent);
            }
        });
        Minder.registerInitHook(function() {
            this._initShortcutKey();
        });
        kity.extendClass(Minder, {
            _initShortcutKey: function() {
                this._bindShortcutKeys();
            },
            _bindShortcutKeys: function() {
                var map = this._shortcutKeys = {};
                var has = "hasOwnProperty";
                this.on("keydown", function(e) {
                    for (var keys in map) {
                        if (!map[has](keys)) continue;
                        if (e.isShortcutKey(keys)) {
                            var fn = map[keys];
                            if (fn.__statusCondition && fn.__statusCondition != this.getStatus()) return;
                            fn();
                            e.preventDefault();
                        }
                    }
                });
            },
            addShortcut: function(keys, fn) {
                var binds = this._shortcutKeys;
                keys.split(/\|\s*/).forEach(function(combine) {
                    var parts = combine.split("::");
                    var status;
                    if (parts.length > 1) {
                        combine = parts[1];
                        status = parts[0];
                        fn.__statusCondition = status;
                    }
                    binds[combine] = fn;
                });
            },
            addCommandShortcutKeys: function(cmd, keys) {
                var binds = this._commandShortcutKeys || (this._commandShortcutKeys = {});
                var obj = {}, km = this;
                if (keys) {
                    obj[cmd] = keys;
                } else {
                    obj = cmd;
                }
                var minder = this;
                utils.each(obj, function(keys, command) {
                    binds[command] = keys;
                    minder.addShortcut(keys, function execCommandByShortcut() {
                        /**
                     * 之前判断有问题，由 === 0 改为 !== -1
                     * @editor Naixor
                     * @Date 2015-12-2
                     */
                        if (minder.queryCommandState(command) !== -1) {
                            minder.execCommand(command);
                        }
                    });
                });
            },
            getCommandShortcutKey: function(cmd) {
                var binds = this._commandShortcutKeys;
                return binds && binds[cmd] || null;
            },
            /**
         * @Desc: 添加一个判断是否支持原生Clipboard的变量，用于对ctrl + v和ctrl + c的处理
         * @Editor: Naixor
         * @Date: 2015.9.20
         */
            supportClipboardEvent: function(window) {
                return !!window.ClipboardEvent;
            }(window)
        });
    }
};

//src/core/status.js
/**
 * @fileOverview
 *
 * 状态切换控制
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[30] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var Minder = _p.r(19);
        var sf = ~window.location.href.indexOf("status");
        var tf = ~window.location.href.indexOf("trace");
        Minder.registerInitHook(function() {
            this._initStatus();
        });
        kity.extendClass(Minder, {
            _initStatus: function() {
                this._status = "normal";
                this._rollbackStatus = "normal";
            },
            setStatus: function(status, force) {
                // 在 readonly 模式下，只有 force 为 true 才能切换回来
                if (this._status == "readonly" && !force) return this;
                if (status != this._status) {
                    this._rollbackStatus = this._status;
                    this._status = status;
                    this.fire("statuschange", {
                        lastStatus: this._rollbackStatus,
                        currentStatus: this._status
                    });
                    if (sf) {
                        /* global console: true */
                        console.log(window.event.type, this._rollbackStatus, "->", this._status);
                        if (tf) {
                            console.trace();
                        }
                    }
                }
                return this;
            },
            rollbackStatus: function() {
                this.setStatus(this._rollbackStatus);
            },
            getRollbackStatus: function() {
                return this._rollbackStatus;
            },
            getStatus: function() {
                return this._status;
            }
        });
    }
};

//src/core/template.js
_p[31] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var Minder = _p.r(19);
        var Command = _p.r(9);
        var MinderNode = _p.r(21);
        var Module = _p.r(20);
        var _templates = {};
        function register(name, supports) {
            _templates[name] = supports;
        }
        exports.register = register;
        utils.extend(Minder, {
            getTemplateList: function() {
                return _templates;
            }
        });
        kity.extendClass(Minder, function() {
            var originGetTheme = Minder.prototype.getTheme;
            return {
                useTemplate: function(name, duration) {
                    this.setTemplate(name);
                    this.refresh(duration || 800);
                },
                getTemplate: function() {
                    return this._template || "default";
                },
                setTemplate: function(name) {
                    this._template = name || null;
                },
                getTemplateSupport: function(method) {
                    var supports = _templates[this.getTemplate()];
                    return supports && supports[method];
                },
                getTheme: function(node) {
                    var support = this.getTemplateSupport("getTheme") || originGetTheme;
                    return support.call(this, node);
                }
            };
        }());
        kity.extendClass(MinderNode, function() {
            var originGetLayout = MinderNode.prototype.getLayout;
            var originGetConnect = MinderNode.prototype.getConnect;
            return {
                getLayout: function() {
                    var support = this.getMinder().getTemplateSupport("getLayout") || originGetLayout;
                    return support.call(this, this);
                },
                getConnect: function() {
                    var support = this.getMinder().getTemplateSupport("getConnect") || originGetConnect;
                    return support.call(this, this);
                }
            };
        }());
        Module.register("TemplateModule", {
            /**
         * @command Template
         * @description 设置当前脑图的模板
         * @param {string} name 模板名称
         *    允许使用的模板可以使用 `kityminder.Minder.getTemplateList()` 查询
         * @state
         *   0: 始终可用
         * @return 返回当前的模板名称
         */
            commands: {
                template: kity.createClass("TemplateCommand", {
                    base: Command,
                    execute: function(minder, name) {
                        minder.useTemplate(name);
                        minder.execCommand("camera");
                    },
                    queryValue: function(minder) {
                        return minder.getTemplate() || "default";
                    }
                })
            }
        });
    }
};

//src/core/theme.js
_p[32] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var Minder = _p.r(19);
        var MinderNode = _p.r(21);
        var Module = _p.r(20);
        var Command = _p.r(9);
        var cssLikeValueMatcher = {
            left: function(value) {
                return 3 in value && value[3] || 1 in value && value[1] || value[0];
            },
            right: function(value) {
                return 1 in value && value[1] || value[0];
            },
            top: function(value) {
                return value[0];
            },
            bottom: function(value) {
                return 2 in value && value[2] || value[0];
            }
        };
        var _themes = {};
        /**
     * 注册一个主题
     *
     * @param  {String} name  主题的名称
     * @param  {Plain} theme 主题的样式描述
     *
     * @example
     *     Minder.registerTheme('default', {
     *         'root-color': 'red',
     *         'root-stroke': 'none',
     *         'root-padding': [10, 20]
     *     });
     */
        function register(name, theme) {
            _themes[name] = theme;
        }
        exports.register = register;
        utils.extend(Minder, {
            getThemeList: function() {
                return _themes;
            }
        });
        kity.extendClass(Minder, {
            /**
         * 切换脑图实例上的主题
         * @param  {String} name 要使用的主题的名称
         */
            useTheme: function(name) {
                this.setTheme(name);
                this.refresh(800);
                return true;
            },
            setTheme: function(name) {
                if (name && !_themes[name]) throw new Error("Theme " + name + " not exists!");
                var lastTheme = this._theme;
                this._theme = name || null;
                var container = this.getRenderTarget();
                if (container) {
                    container.classList.remove("km-theme-" + lastTheme);
                    if (name) {
                        container.classList.add("km-theme-" + name);
                    }
                    container.style.background = this.getStyle("background");
                }
                this.fire("themechange", {
                    theme: name
                });
                return this;
            },
            /**
         * 获取脑图实例上的当前主题
         * @return {[type]} [description]
         */
            getTheme: function(node) {
                return this._theme || this.getOption("defaultTheme") || "fresh-blue";
            },
            getThemeItems: function(node) {
                var theme = this.getTheme(node);
                return _themes[this.getTheme(node)];
            },
            /**
         * 获得脑图实例上的样式
         * @param  {String} item 样式名称
         */
            getStyle: function(item, node) {
                var items = this.getThemeItems(node);
                var segment, dir, selector, value, matcher;
                if (item in items) return items[item];
                // 尝试匹配 CSS 数组形式的值
                // 比如 item 为 'pading-left'
                // theme 里有 {'padding': [10, 20]} 的定义，则可以返回 20
                segment = item.split("-");
                if (segment.length < 2) return null;
                dir = segment.pop();
                item = segment.join("-");
                if (item in items) {
                    value = items[item];
                    if (utils.isArray(value) && (matcher = cssLikeValueMatcher[dir])) {
                        return matcher(value);
                    }
                    if (!isNaN(value)) return value;
                }
                return null;
            },
            /**
         * 获取指定节点的样式
         * @param  {String} name 样式名称，可以不加节点类型的前缀
         */
            getNodeStyle: function(node, name) {
                var value = this.getStyle(node.getType() + "-" + name, node);
                return value !== null ? value : this.getStyle(name, node);
            }
        });
        kity.extendClass(MinderNode, {
            getStyle: function(name) {
                return this.getMinder().getNodeStyle(this, name);
            }
        });
        Module.register("Theme", {
            defaultOptions: {
                defaultTheme: "fresh-blue"
            },
            commands: {
                /**
             * @command Theme
             * @description 设置当前脑图的主题
             * @param {string} name 主题名称
             *    允许使用的主题可以使用 `kityminder.Minder.getThemeList()` 查询
             * @state
             *   0: 始终可用
             * @return 返回当前的主题名称
             */
                theme: kity.createClass("ThemeCommand", {
                    base: Command,
                    execute: function(km, name) {
                        return km.useTheme(name);
                    },
                    queryValue: function(km) {
                        return km.getTheme() || "default";
                    }
                })
            }
        });
        Minder.registerInitHook(function() {
            this.setTheme();
        });
    }
};

//src/core/utils.js
_p[33] = {
    value: function(require, exports) {
        var kity = _p.r(17);
        var uuidMap = {};
        exports.extend = kity.Utils.extend.bind(kity.Utils);
        exports.each = kity.Utils.each.bind(kity.Utils);
        exports.uuid = function(group) {
            uuidMap[group] = uuidMap[group] ? uuidMap[group] + 1 : 1;
            return group + uuidMap[group];
        };
        exports.guid = function() {
            return (+new Date() * 1e6 + Math.floor(Math.random() * 1e6)).toString(36);
        };
        exports.trim = function(str) {
            return str.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g, "");
        };
        exports.keys = function(plain) {
            var keys = [];
            for (var key in plain) {
                if (plain.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }
            return keys;
        };
        exports.clone = function(source) {
            return JSON.parse(JSON.stringify(source));
        };
        exports.comparePlainObject = function(a, b) {
            return JSON.stringify(a) == JSON.stringify(b);
        };
        exports.encodeHtml = function(str, reg) {
            return str ? str.replace(reg || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp);)?/g, function(a, b) {
                if (b) {
                    return a;
                } else {
                    return {
                        "<": "&lt;",
                        "&": "&amp;",
                        '"': "&quot;",
                        ">": "&gt;",
                        "'": "&#39;"
                    }[a];
                }
            }) : "";
        };
        exports.clearWhiteSpace = function(str) {
            return str.replace(/[\u200b\t\r\n]/g, "");
        };
        exports.each([ "String", "Function", "Array", "Number", "RegExp", "Object" ], function(v) {
            var toString = Object.prototype.toString;
            exports["is" + v] = function(obj) {
                return toString.apply(obj) == "[object " + v + "]";
            };
        });
    }
};

//src/expose-kityminder.js
_p[34] = {
    value: function(require, exports, module) {
        module.exports = window.kityminder = _p.r(35);
    }
};

//src/kityminder.js
/**
 * @fileOverview
 *
 * 默认导出（全部模块）
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[35] = {
    value: function(require, exports, module) {
        var kityminder = {
            version: _p.r(19).version
        };
        // 核心导出，大写的部分导出类，小写的部分简单 require 一下
        // 这里顺序是有讲究的，调整前先弄清楚依赖关系。
        _p.r(33);
        kityminder.Minder = _p.r(19);
        kityminder.Command = _p.r(9);
        kityminder.Node = _p.r(21);
        _p.r(22);
        _p.r(8);
        kityminder.Event = _p.r(13);
        kityminder.data = _p.r(12);
        _p.r(10);
        kityminder.KeyMap = _p.r(15);
        _p.r(29);
        _p.r(30);
        _p.r(23);
        _p.r(28);
        _p.r(14);
        _p.r(16);
        kityminder.Module = _p.r(20);
        _p.r(26);
        kityminder.Render = _p.r(27);
        kityminder.Connect = _p.r(11);
        kityminder.Layout = _p.r(18);
        kityminder.Theme = _p.r(32);
        kityminder.Template = _p.r(31);
        kityminder.Promise = _p.r(25);
        _p.r(7);
        _p.r(24);
        // 模块依赖
        _p.r(42);
        _p.r(43);
        _p.r(44);
        _p.r(45);
        _p.r(46);
        _p.r(47);
        _p.r(48);
        _p.r(50);
        _p.r(49);
        _p.r(51);
        _p.r(52);
        _p.r(53);
        _p.r(54);
        _p.r(55);
        _p.r(56);
        _p.r(57);
        _p.r(58);
        _p.r(59);
        _p.r(60);
        _p.r(61);
        _p.r(62);
        _p.r(63);
        _p.r(64);
        _p.r(68);
        _p.r(65);
        _p.r(67);
        _p.r(66);
        _p.r(40);
        _p.r(36);
        _p.r(37);
        _p.r(38);
        _p.r(39);
        _p.r(41);
        _p.r(75);
        _p.r(78);
        _p.r(77);
        _p.r(76);
        _p.r(78);
        _p.r(80);
        _p.r(79);
        _p.r(0);
        _p.r(1);
        _p.r(2);
        _p.r(3);
        _p.r(4);
        _p.r(5);
        _p.r(6);
        _p.r(69);
        _p.r(73);
        _p.r(70);
        _p.r(72);
        _p.r(71);
        _p.r(74);
        module.exports = kityminder;
    }
};

//src/layout/btree.js
_p[36] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var Layout = _p.r(18);
        [ "left", "right", "top", "bottom" ].forEach(registerLayoutForDirection);
        function registerLayoutForDirection(name) {
            var axis = name == "left" || name == "right" ? "x" : "y";
            var dir = name == "left" || name == "top" ? -1 : 1;
            var oppsite = {
                left: "right",
                right: "left",
                top: "bottom",
                bottom: "top",
                x: "y",
                y: "x"
            };
            function getOrderHint(node) {
                var hint = [];
                var box = node.getLayoutBox();
                var offset = 5;
                if (axis == "x") {
                    hint.push({
                        type: "up",
                        node: node,
                        area: new kity.Box({
                            x: box.x,
                            y: box.top - node.getStyle("margin-top") - offset,
                            width: box.width,
                            height: node.getStyle("margin-top")
                        }),
                        path: [ "M", box.x, box.top - offset, "L", box.right, box.top - offset ]
                    });
                    hint.push({
                        type: "down",
                        node: node,
                        area: new kity.Box({
                            x: box.x,
                            y: box.bottom + offset,
                            width: box.width,
                            height: node.getStyle("margin-bottom")
                        }),
                        path: [ "M", box.x, box.bottom + offset, "L", box.right, box.bottom + offset ]
                    });
                } else {
                    hint.push({
                        type: "up",
                        node: node,
                        area: new kity.Box({
                            x: box.left - node.getStyle("margin-left") - offset,
                            y: box.top,
                            width: node.getStyle("margin-left"),
                            height: box.height
                        }),
                        path: [ "M", box.left - offset, box.top, "L", box.left - offset, box.bottom ]
                    });
                    hint.push({
                        type: "down",
                        node: node,
                        area: new kity.Box({
                            x: box.right + offset,
                            y: box.top,
                            width: node.getStyle("margin-right"),
                            height: box.height
                        }),
                        path: [ "M", box.right + offset, box.top, "L", box.right + offset, box.bottom ]
                    });
                }
                return hint;
            }
            Layout.register(name, kity.createClass({
                base: Layout,
                doLayout: function(parent, children) {
                    var pbox = parent.getContentBox();
                    if (axis == "x") {
                        parent.setVertexOut(new kity.Point(pbox[name], pbox.cy));
                        parent.setLayoutVectorOut(new kity.Vector(dir, 0));
                    } else {
                        parent.setVertexOut(new kity.Point(pbox.cx, pbox[name]));
                        parent.setLayoutVectorOut(new kity.Vector(0, dir));
                    }
                    if (!children.length) {
                        return false;
                    }
                    children.forEach(function(child) {
                        var cbox = child.getContentBox();
                        child.setLayoutTransform(new kity.Matrix());
                        if (axis == "x") {
                            child.setVertexIn(new kity.Point(cbox[oppsite[name]], cbox.cy));
                            child.setLayoutVectorIn(new kity.Vector(dir, 0));
                        } else {
                            child.setVertexIn(new kity.Point(cbox.cx, cbox[oppsite[name]]));
                            child.setLayoutVectorIn(new kity.Vector(0, dir));
                        }
                    });
                    this.align(children, oppsite[name]);
                    this.stack(children, oppsite[axis]);
                    var bbox = this.getBranchBox(children);
                    var xAdjust = 0, yAdjust = 0;
                    if (axis == "x") {
                        xAdjust = pbox[name];
                        xAdjust += dir * parent.getStyle("margin-" + name);
                        xAdjust += dir * children[0].getStyle("margin-" + oppsite[name]);
                        yAdjust = pbox.bottom;
                        yAdjust -= pbox.height / 2;
                        yAdjust -= bbox.height / 2;
                        yAdjust -= bbox.y;
                    } else {
                        xAdjust = pbox.right;
                        xAdjust -= pbox.width / 2;
                        xAdjust -= bbox.width / 2;
                        xAdjust -= bbox.x;
                        yAdjust = pbox[name];
                        yAdjust += dir * parent.getStyle("margin-" + name);
                        yAdjust += dir * children[0].getStyle("margin-" + oppsite[name]);
                    }
                    this.move(children, xAdjust, yAdjust);
                },
                getOrderHint: getOrderHint
            }));
        }
    }
};

//src/layout/filetree.js
_p[37] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var Layout = _p.r(18);
        [ -1, 1 ].forEach(registerLayoutForDir);
        function registerLayoutForDir(dir) {
            var name = "filetree-" + (dir > 0 ? "down" : "up");
            Layout.register(name, kity.createClass({
                base: Layout,
                doLayout: function(parent, children, round) {
                    var pBox = parent.getContentBox();
                    var indent = 20;
                    parent.setVertexOut(new kity.Point(pBox.left + indent, dir > 0 ? pBox.bottom : pBox.top));
                    parent.setLayoutVectorOut(new kity.Vector(0, dir));
                    if (!children.length) return;
                    children.forEach(function(child) {
                        var cbox = child.getContentBox();
                        child.setLayoutTransform(new kity.Matrix());
                        child.setVertexIn(new kity.Point(cbox.left, cbox.cy));
                        child.setLayoutVectorIn(new kity.Vector(1, 0));
                    });
                    this.align(children, "left");
                    this.stack(children, "y");
                    var xAdjust = 0;
                    xAdjust += pBox.left;
                    xAdjust += indent;
                    xAdjust += children[0].getStyle("margin-left");
                    var yAdjust = 0;
                    if (dir > 0) {
                        yAdjust += pBox.bottom;
                        yAdjust += parent.getStyle("margin-bottom");
                        yAdjust += children[0].getStyle("margin-top");
                    } else {
                        yAdjust -= this.getTreeBox(children).bottom;
                        yAdjust += pBox.top;
                        yAdjust -= parent.getStyle("margin-top");
                        yAdjust -= children[0].getStyle("margin-bottom");
                    }
                    this.move(children, xAdjust, yAdjust);
                },
                getOrderHint: function(node) {
                    var hint = [];
                    var box = node.getLayoutBox();
                    var offset = node.getLevel() > 1 ? 3 : 5;
                    hint.push({
                        type: "up",
                        node: node,
                        area: new kity.Box({
                            x: box.x,
                            y: box.top - node.getStyle("margin-top") - offset,
                            width: box.width,
                            height: node.getStyle("margin-top")
                        }),
                        path: [ "M", box.x, box.top - offset, "L", box.right, box.top - offset ]
                    });
                    hint.push({
                        type: "down",
                        node: node,
                        area: new kity.Box({
                            x: box.x,
                            y: box.bottom + offset,
                            width: box.width,
                            height: node.getStyle("margin-bottom")
                        }),
                        path: [ "M", box.x, box.bottom + offset, "L", box.right, box.bottom + offset ]
                    });
                    return hint;
                }
            }));
        }
    }
};

//src/layout/fish-bone-master.js
/**
 * @fileOverview
 *
 * 鱼骨图主骨架布局
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[38] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var Layout = _p.r(18);
        Layout.register("fish-bone-master", kity.createClass("FishBoneMasterLayout", {
            base: Layout,
            doLayout: function(parent, children, round) {
                var upPart = [], downPart = [];
                var child = children[0];
                var pBox = parent.getContentBox();
                parent.setVertexOut(new kity.Point(pBox.right, pBox.cy));
                parent.setLayoutVectorOut(new kity.Vector(1, 0));
                if (!child) return;
                var cBox = child.getContentBox();
                var pMarginRight = parent.getStyle("margin-right");
                var cMarginLeft = child.getStyle("margin-left");
                var cMarginTop = child.getStyle("margin-top");
                var cMarginBottom = child.getStyle("margin-bottom");
                children.forEach(function(child, index) {
                    child.setLayoutTransform(new kity.Matrix());
                    var cBox = child.getContentBox();
                    if (index % 2) {
                        downPart.push(child);
                        child.setVertexIn(new kity.Point(cBox.left, cBox.top));
                        child.setLayoutVectorIn(new kity.Vector(1, 1));
                    } else {
                        upPart.push(child);
                        child.setVertexIn(new kity.Point(cBox.left, cBox.bottom));
                        child.setLayoutVectorIn(new kity.Vector(1, -1));
                    }
                });
                this.stack(upPart, "x");
                this.stack(downPart, "x");
                this.align(upPart, "bottom");
                this.align(downPart, "top");
                var xAdjust = pBox.right + pMarginRight + cMarginLeft;
                var yAdjustUp = pBox.cy - cMarginBottom - parent.getStyle("margin-top");
                var yAdjustDown = pBox.cy + cMarginTop + parent.getStyle("margin-bottom");
                this.move(upPart, xAdjust, yAdjustUp);
                this.move(downPart, xAdjust + cMarginLeft, yAdjustDown);
            }
        }));
    }
};

//src/layout/fish-bone-slave.js
/**
 * @fileOverview
 *
 *
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[39] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var Layout = _p.r(18);
        Layout.register("fish-bone-slave", kity.createClass("FishBoneSlaveLayout", {
            base: Layout,
            doLayout: function(parent, children, round) {
                var layout = this;
                var abs = Math.abs;
                var GOLD_CUT = 1 - .618;
                var pBox = parent.getContentBox();
                var vi = parent.getLayoutVectorIn();
                parent.setLayoutVectorOut(vi);
                var goldX = pBox.left + pBox.width * GOLD_CUT;
                var pout = new kity.Point(goldX, vi.y > 0 ? pBox.bottom : pBox.top);
                parent.setVertexOut(pout);
                var child = children[0];
                if (!child) return;
                var cBox = child.getContentBox();
                children.forEach(function(child, index) {
                    child.setLayoutTransform(new kity.Matrix());
                    child.setLayoutVectorIn(new kity.Vector(1, 0));
                    child.setVertexIn(new kity.Point(cBox.left, cBox.cy));
                });
                this.stack(children, "y");
                this.align(children, "left");
                var xAdjust = 0, yAdjust = 0;
                xAdjust += pout.x;
                if (parent.getLayoutVectorOut().y < 0) {
                    yAdjust -= this.getTreeBox(children).bottom;
                    yAdjust += parent.getContentBox().top;
                    yAdjust -= parent.getStyle("margin-top");
                    yAdjust -= child.getStyle("margin-bottom");
                } else {
                    yAdjust += parent.getContentBox().bottom;
                    yAdjust += parent.getStyle("margin-bottom");
                    yAdjust += child.getStyle("margin-top");
                }
                this.move(children, xAdjust, yAdjust);
                if (round == 2) {
                    children.forEach(function(child) {
                        var m = child.getLayoutTransform();
                        var cbox = child.getContentBox();
                        var pin = m.transformPoint(new kity.Point(cbox.left, 0));
                        layout.move([ child ], abs(pin.y - pout.y), 0);
                    });
                }
            }
        }));
    }
};

//src/layout/mind.js
_p[40] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var Layout = _p.r(18);
        var Minder = _p.r(19);
        Layout.register("mind", kity.createClass({
            base: Layout,
            doLayout: function(node, children) {
                var layout = this;
                var half = Math.ceil(node.children.length / 2);
                var right = [];
                var left = [];
                children.forEach(function(child) {
                    if (child.getIndex() < half) right.push(child); else left.push(child);
                });
                var leftLayout = Minder.getLayoutInstance("left");
                var rightLayout = Minder.getLayoutInstance("right");
                leftLayout.doLayout(node, left);
                rightLayout.doLayout(node, right);
                var box = node.getContentBox();
                node.setVertexOut(new kity.Point(box.cx, box.cy));
                node.setLayoutVectorOut(new kity.Vector(0, 0));
            },
            getOrderHint: function(node) {
                var hint = [];
                var box = node.getLayoutBox();
                var offset = 5;
                hint.push({
                    type: "up",
                    node: node,
                    area: new kity.Box({
                        x: box.x,
                        y: box.top - node.getStyle("margin-top") - offset,
                        width: box.width,
                        height: node.getStyle("margin-top")
                    }),
                    path: [ "M", box.x, box.top - offset, "L", box.right, box.top - offset ]
                });
                hint.push({
                    type: "down",
                    node: node,
                    area: new kity.Box({
                        x: box.x,
                        y: box.bottom + offset,
                        width: box.width,
                        height: node.getStyle("margin-bottom")
                    }),
                    path: [ "M", box.x, box.bottom + offset, "L", box.right, box.bottom + offset ]
                });
                return hint;
            }
        }));
    }
};

//src/layout/tianpan.js
/**
 * @fileOverview
 *
 * 天盘模板
 *
 * @author: along
 * @copyright: bpd729@163.com, 2015
 */
_p[41] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var Layout = _p.r(18);
        var Minder = _p.r(19);
        Layout.register("tianpan", kity.createClass({
            base: Layout,
            doLayout: function(parent, children) {
                if (children.length == 0) return;
                var layout = this;
                var pbox = parent.getContentBox();
                var x, y, box;
                var _theta = 5;
                var _r = Math.max(pbox.width, 50);
                children.forEach(function(child, index) {
                    child.setLayoutTransform(new kity.Matrix());
                    box = layout.getTreeBox(child);
                    _r = Math.max(Math.max(box.width, box.height), _r);
                });
                _r = _r / 1.5 / Math.PI;
                children.forEach(function(child, index) {
                    x = _r * (Math.cos(_theta) + Math.sin(_theta) * _theta);
                    y = _r * (Math.sin(_theta) - Math.cos(_theta) * _theta);
                    _theta += .9 - index * .02;
                    child.setLayoutVectorIn(new kity.Vector(1, 0));
                    child.setVertexIn(new kity.Point(pbox.cx, pbox.cy));
                    child.setLayoutTransform(new kity.Matrix());
                    layout.move([ child ], x, y);
                });
            },
            getOrderHint: function(node) {
                var hint = [];
                var box = node.getLayoutBox();
                var offset = 5;
                hint.push({
                    type: "up",
                    node: node,
                    area: {
                        x: box.x,
                        y: box.top - node.getStyle("margin-top") - offset,
                        width: box.width,
                        height: node.getStyle("margin-top")
                    },
                    path: [ "M", box.x, box.top - offset, "L", box.right, box.top - offset ]
                });
                hint.push({
                    type: "down",
                    node: node,
                    area: {
                        x: box.x,
                        y: box.bottom + offset,
                        width: box.width,
                        height: node.getStyle("margin-bottom")
                    },
                    path: [ "M", box.x, box.bottom + offset, "L", box.right, box.bottom + offset ]
                });
                return hint;
            }
        }));
    }
};

//src/module/arrange.js
_p[42] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var MinderNode = _p.r(21);
        var Command = _p.r(9);
        var Module = _p.r(20);
        kity.extendClass(MinderNode, {
            arrange: function(index) {
                var parent = this.parent;
                if (!parent) return;
                var sibling = parent.children;
                if (index < 0 || index >= sibling.length) return;
                sibling.splice(this.getIndex(), 1);
                sibling.splice(index, 0, this);
                return this;
            }
        });
        function asc(nodeA, nodeB) {
            return nodeA.getIndex() - nodeB.getIndex();
        }
        function desc(nodeA, nodeB) {
            return -asc(nodeA, nodeB);
        }
        function canArrange(km) {
            var selected = km.getSelectedNode();
            return selected && selected.parent && selected.parent.children.length > 1;
        }
        /**
     * @command ArrangeUp
     * @description 向上调整选中节点的位置
     * @shortcut Alt + Up
     * @state
     *    0: 当前选中了具有相同父亲的节点
     *   -1: 其它情况
     */
        var ArrangeUpCommand = kity.createClass("ArrangeUpCommand", {
            base: Command,
            execute: function(km) {
                var nodes = km.getSelectedNodes();
                nodes.sort(asc);
                var lastIndexes = nodes.map(function(node) {
                    return node.getIndex();
                });
                nodes.forEach(function(node, index) {
                    node.arrange(lastIndexes[index] - 1);
                });
                km.layout(300);
            },
            queryState: function(km) {
                var selected = km.getSelectedNode();
                return selected ? 0 : -1;
            }
        });
        /**
     * @command ArrangeDown
     * @description 向下调整选中节点的位置
     * @shortcut Alt + Down
     * @state
     *    0: 当前选中了具有相同父亲的节点
     *   -1: 其它情况
     */
        var ArrangeDownCommand = kity.createClass("ArrangeUpCommand", {
            base: Command,
            execute: function(km) {
                var nodes = km.getSelectedNodes();
                nodes.sort(desc);
                var lastIndexes = nodes.map(function(node) {
                    return node.getIndex();
                });
                nodes.forEach(function(node, index) {
                    node.arrange(lastIndexes[index] + 1);
                });
                km.layout(300);
            },
            queryState: function(km) {
                var selected = km.getSelectedNode();
                return selected ? 0 : -1;
            }
        });
        /**
     * @command Arrange
     * @description 调整选中节点的位置
     * @param {number} index 调整后节点的新位置
     * @state
     *    0: 当前选中了具有相同父亲的节点
     *   -1: 其它情况
     */
        var ArrangeCommand = kity.createClass("ArrangeCommand", {
            base: Command,
            execute: function(km, index) {
                var nodes = km.getSelectedNodes().slice();
                if (!nodes.length) return;
                var ancestor = MinderNode.getCommonAncestor(nodes);
                if (ancestor != nodes[0].parent) return;
                var indexed = nodes.map(function(node) {
                    return {
                        index: node.getIndex(),
                        node: node
                    };
                });
                var asc = Math.min.apply(Math, indexed.map(function(one) {
                    return one.index;
                })) >= index;
                indexed.sort(function(a, b) {
                    return asc ? b.index - a.index : a.index - b.index;
                });
                indexed.forEach(function(one) {
                    one.node.arrange(index);
                });
                km.layout(300);
            },
            queryState: function(km) {
                var selected = km.getSelectedNode();
                return selected ? 0 : -1;
            }
        });
        Module.register("ArrangeModule", {
            commands: {
                arrangeup: ArrangeUpCommand,
                arrangedown: ArrangeDownCommand,
                arrange: ArrangeCommand
            },
            contextmenu: [ {
                command: "arrangeup"
            }, {
                command: "arrangedown"
            }, {
                divider: true
            } ],
            commandShortcutKeys: {
                arrangeup: "normal::alt+Up",
                arrangedown: "normal::alt+Down"
            }
        });
    }
};

//src/module/basestyle.js
_p[43] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var Minder = _p.r(19);
        var MinderNode = _p.r(21);
        var Command = _p.r(9);
        var Module = _p.r(20);
        var TextRenderer = _p.r(61);
        Module.register("basestylemodule", function() {
            var km = this;
            function getNodeDataOrStyle(node, name) {
                return node.getData(name) || node.getStyle(name);
            }
            TextRenderer.registerStyleHook(function(node, textGroup) {
                var fontWeight = getNodeDataOrStyle(node, "font-weight");
                var fontStyle = getNodeDataOrStyle(node, "font-style");
                var styleHash = [ fontWeight, fontStyle ].join("/");
                textGroup.eachItem(function(index, item) {
                    item.setFont({
                        weight: fontWeight,
                        style: fontStyle
                    });
                });
            });
            return {
                commands: {
                    /**
                 * @command Bold
                 * @description 加粗选中的节点
                 * @shortcut Ctrl + B
                 * @state
                 *   0: 当前有选中的节点
                 *  -1: 当前没有选中的节点
                 *   1: 当前已选中的节点已加粗
                 */
                    bold: kity.createClass("boldCommand", {
                        base: Command,
                        execute: function(km) {
                            var nodes = km.getSelectedNodes();
                            if (this.queryState("bold") == 1) {
                                nodes.forEach(function(n) {
                                    n.setData("font-weight").render();
                                });
                            } else {
                                nodes.forEach(function(n) {
                                    n.setData("font-weight", "bold").render();
                                });
                            }
                            km.layout();
                        },
                        queryState: function() {
                            var nodes = km.getSelectedNodes(), result = 0;
                            if (nodes.length === 0) {
                                return -1;
                            }
                            nodes.forEach(function(n) {
                                if (n && n.getData("font-weight")) {
                                    result = 1;
                                    return false;
                                }
                            });
                            return result;
                        }
                    }),
                    /**
                 * @command Italic
                 * @description 加斜选中的节点
                 * @shortcut Ctrl + I
                 * @state
                 *   0: 当前有选中的节点
                 *  -1: 当前没有选中的节点
                 *   1: 当前已选中的节点已加斜
                 */
                    italic: kity.createClass("italicCommand", {
                        base: Command,
                        execute: function(km) {
                            var nodes = km.getSelectedNodes();
                            if (this.queryState("italic") == 1) {
                                nodes.forEach(function(n) {
                                    n.setData("font-style").render();
                                });
                            } else {
                                nodes.forEach(function(n) {
                                    n.setData("font-style", "italic").render();
                                });
                            }
                            km.layout();
                        },
                        queryState: function() {
                            var nodes = km.getSelectedNodes(), result = 0;
                            if (nodes.length === 0) {
                                return -1;
                            }
                            nodes.forEach(function(n) {
                                if (n && n.getData("font-style")) {
                                    result = 1;
                                    return false;
                                }
                            });
                            return result;
                        }
                    })
                },
                commandShortcutKeys: {
                    bold: "ctrl+b",
                    //bold
                    italic: "ctrl+i"
                }
            };
        });
    }
};

//src/module/clipboard.js
_p[44] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var MinderNode = _p.r(21);
        var Command = _p.r(9);
        var Module = _p.r(20);
        Module.register("ClipboardModule", function() {
            var km = this, _clipboardNodes = [], _selectedNodes = [];
            function appendChildNode(parent, child) {
                _selectedNodes.push(child);
                km.appendNode(child, parent);
                child.render();
                child.setLayoutOffset(null);
                var children = child.children.map(function(node) {
                    return node.clone();
                });
                /*
            * fixed bug: Modified on 2015.08.05
            * 原因：粘贴递归 append 时没有清空原来父节点的子节点，而父节点被复制的时候，是连同子节点一起复制过来的
            * 解决办法：增加了下面这一行代码
            * by: @zhangbobell zhangbobell@163.com
            */
                child.clearChildren();
                for (var i = 0, ci; ci = children[i]; i++) {
                    appendChildNode(child, ci);
                }
            }
            function sendToClipboard(nodes) {
                if (!nodes.length) return;
                nodes.sort(function(a, b) {
                    return a.getIndex() - b.getIndex();
                });
                _clipboardNodes = nodes.map(function(node) {
                    return node.clone();
                });
            }
            /**
         * @command Copy
         * @description 复制当前选中的节点
         * @shortcut Ctrl + C
         * @state
         *   0: 当前有选中的节点
         *  -1: 当前没有选中的节点
         */
            var CopyCommand = kity.createClass("CopyCommand", {
                base: Command,
                execute: function(km) {
                    sendToClipboard(km.getSelectedAncestors(true));
                    this.setContentChanged(false);
                }
            });
            /**
         * @command Cut
         * @description 剪切当前选中的节点
         * @shortcut Ctrl + X
         * @state
         *   0: 当前有选中的节点
         *  -1: 当前没有选中的节点
         */
            var CutCommand = kity.createClass("CutCommand", {
                base: Command,
                execute: function(km) {
                    var ancestors = km.getSelectedAncestors();
                    if (ancestors.length === 0) return;
                    sendToClipboard(ancestors);
                    km.select(MinderNode.getCommonAncestor(ancestors), true);
                    ancestors.slice().forEach(function(node) {
                        km.removeNode(node);
                    });
                    km.layout(300);
                }
            });
            /**
         * @command Paste
         * @description 粘贴已复制的节点到每一个当前选中的节点上
         * @shortcut Ctrl + V
         * @state
         *   0: 当前有选中的节点
         *  -1: 当前没有选中的节点
         */
            var PasteCommand = kity.createClass("PasteCommand", {
                base: Command,
                execute: function(km) {
                    if (_clipboardNodes.length) {
                        var nodes = km.getSelectedNodes();
                        if (!nodes.length) return;
                        for (var i = 0, ni; ni = _clipboardNodes[i]; i++) {
                            for (var j = 0, node; node = nodes[j]; j++) {
                                appendChildNode(node, ni.clone());
                            }
                        }
                        km.select(_selectedNodes, true);
                        _selectedNodes = [];
                        km.layout(300);
                    }
                },
                queryState: function(km) {
                    return km.getSelectedNode() ? 0 : -1;
                }
            });
            /**
         * @Desc: 若支持原生clipboadr事件则基于原生扩展，否则使用km的基础事件只处理节点的粘贴复制
         * @Editor: Naixor
         * @Date: 2015.9.20
         */
            if (km.supportClipboardEvent && !kity.Browser.gecko) {
                var Copy = function(e) {
                    this.fire("beforeCopy", e);
                };
                var Cut = function(e) {
                    this.fire("beforeCut", e);
                };
                var Paste = function(e) {
                    this.fire("beforePaste", e);
                };
                return {
                    commands: {
                        copy: CopyCommand,
                        cut: CutCommand,
                        paste: PasteCommand
                    },
                    clipBoardEvents: {
                        copy: Copy.bind(km),
                        cut: Cut.bind(km),
                        paste: Paste.bind(km)
                    },
                    sendToClipboard: sendToClipboard
                };
            } else {
                return {
                    commands: {
                        copy: CopyCommand,
                        cut: CutCommand,
                        paste: PasteCommand
                    },
                    commandShortcutKeys: {
                        copy: "normal::ctrl+c|",
                        cut: "normal::ctrl+x",
                        paste: "normal::ctrl+v"
                    },
                    sendToClipboard: sendToClipboard
                };
            }
        });
    }
};

//src/module/dragtree.js
_p[45] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var MinderNode = _p.r(21);
        var Command = _p.r(9);
        var Module = _p.r(20);
        // 矩形的变形动画定义
        var MoveToParentCommand = kity.createClass("MoveToParentCommand", {
            base: Command,
            execute: function(minder, nodes, parent) {
                var node;
                for (var i = 0; i < nodes.length; i++) {
                    node = nodes[i];
                    if (node.parent) {
                        node.parent.removeChild(node);
                        parent.appendChild(node);
                        node.render();
                    }
                }
                parent.expand();
                minder.select(nodes, true);
            }
        });
        var DropHinter = kity.createClass("DropHinter", {
            base: kity.Group,
            constructor: function() {
                this.callBase();
                this.rect = new kity.Rect();
                this.addShape(this.rect);
            },
            render: function(target) {
                this.setVisible(!!target);
                if (target) {
                    this.rect.setBox(target.getLayoutBox()).setRadius(target.getStyle("radius") || 0).stroke(target.getStyle("drop-hint-color") || "yellow", target.getStyle("drop-hint-width") || 2);
                    this.bringTop();
                }
            }
        });
        var OrderHinter = kity.createClass("OrderHinter", {
            base: kity.Group,
            constructor: function() {
                this.callBase();
                this.area = new kity.Rect();
                this.path = new kity.Path();
                this.addShapes([ this.area, this.path ]);
            },
            render: function(hint) {
                this.setVisible(!!hint);
                if (hint) {
                    this.area.setBox(hint.area);
                    this.area.fill(hint.node.getStyle("order-hint-area-color") || "rgba(0, 255, 0, .5)");
                    this.path.setPathData(hint.path);
                    this.path.stroke(hint.node.getStyle("order-hint-path-color") || "#0f0", hint.node.getStyle("order-hint-path-width") || 1);
                }
            }
        });
        // 对拖动对象的一个替代盒子，控制整个拖放的逻辑，包括：
        //    1. 从节点列表计算出拖动部分
        //    2. 计算可以 drop 的节点，产生 drop 交互提示
        var TreeDragger = kity.createClass("TreeDragger", {
            constructor: function(minder) {
                this._minder = minder;
                this._dropHinter = new DropHinter();
                this._orderHinter = new OrderHinter();
                minder.getRenderContainer().addShapes([ this._dropHinter, this._orderHinter ]);
            },
            dragStart: function(position) {
                // 只记录开始位置，不马上开启拖放模式
                // 这个位置同时是拖放范围收缩时的焦点位置（中心）
                this._startPosition = position;
            },
            dragMove: function(position) {
                // 启动拖放模式需要最小的移动距离
                var DRAG_MOVE_THRESHOLD = 10;
                if (!this._startPosition) return;
                var movement = kity.Vector.fromPoints(this._dragPosition || this._startPosition, position);
                var minder = this._minder;
                this._dragPosition = position;
                if (!this._dragMode) {
                    // 判断拖放模式是否该启动
                    if (kity.Vector.fromPoints(this._dragPosition, this._startPosition).length() < DRAG_MOVE_THRESHOLD) {
                        return;
                    }
                    if (!this._enterDragMode()) {
                        return;
                    }
                }
                for (var i = 0; i < this._dragSources.length; i++) {
                    this._dragSources[i].setLayoutOffset(this._dragSources[i].getLayoutOffset().offset(movement));
                    minder.applyLayoutResult(this._dragSources[i]);
                }
                if (!this._dropTest()) {
                    this._orderTest();
                } else {
                    this._renderOrderHint(this._orderSucceedHint = null);
                }
            },
            dragEnd: function() {
                this._startPosition = null;
                this._dragPosition = null;
                if (!this._dragMode) {
                    return;
                }
                this._fadeDragSources(1);
                if (this._dropSucceedTarget) {
                    this._dragSources.forEach(function(source) {
                        source.setLayoutOffset(null);
                    });
                    this._minder.layout(-1);
                    this._minder.execCommand("movetoparent", this._dragSources, this._dropSucceedTarget);
                } else if (this._orderSucceedHint) {
                    var hint = this._orderSucceedHint;
                    var index = hint.node.getIndex();
                    var sourceIndexes = this._dragSources.map(function(source) {
                        // 顺便干掉布局偏移
                        source.setLayoutOffset(null);
                        return source.getIndex();
                    });
                    var maxIndex = Math.max.apply(Math, sourceIndexes);
                    var minIndex = Math.min.apply(Math, sourceIndexes);
                    if (index < minIndex && hint.type == "down") index++;
                    if (index > maxIndex && hint.type == "up") index--;
                    hint.node.setLayoutOffset(null);
                    this._minder.execCommand("arrange", index);
                    this._renderOrderHint(null);
                } else {
                    this._minder.fire("savescene");
                }
                this._minder.layout(300);
                this._leaveDragMode();
                this._minder.fire("contentchange");
            },
            // 进入拖放模式：
            //    1. 计算拖放源和允许的拖放目标
            //    2. 标记已启动
            _enterDragMode: function() {
                this._calcDragSources();
                if (!this._dragSources.length) {
                    this._startPosition = null;
                    return false;
                }
                this._fadeDragSources(.5);
                this._calcDropTargets();
                this._calcOrderHints();
                this._dragMode = true;
                this._minder.setStatus("dragtree");
                return true;
            },
            // 从选中的节点计算拖放源
            //    并不是所有选中的节点都作为拖放源，如果选中节点中存在 A 和 B，
            //    并且 A 是 B 的祖先，则 B 不作为拖放源
            //
            //    计算过程：
            //       1. 将节点按照树高排序，排序后只可能是前面节点是后面节点的祖先
            //       2. 从后往前枚举排序的结果，如果发现枚举目标之前存在其祖先，
            //          则排除枚举目标作为拖放源，否则加入拖放源
            _calcDragSources: function() {
                this._dragSources = this._minder.getSelectedAncestors();
            },
            _fadeDragSources: function(opacity) {
                var minder = this._minder;
                this._dragSources.forEach(function(source) {
                    source.getRenderContainer().setOpacity(opacity, 200);
                    source.traverse(function(node) {
                        if (opacity < 1) {
                            minder.detachNode(node);
                        } else {
                            minder.attachNode(node);
                        }
                    }, true);
                });
            },
            // 计算拖放目标可以释放的节点列表（释放意味着成为其子树），存在这条限制规则：
            //    - 不能拖放到拖放目标的子树上（允许拖放到自身，因为多选的情况下可以把其它节点加入）
            //
            //    1. 加入当前节点（初始为根节点）到允许列表
            //    2. 对于当前节点的每一个子节点：
            //       (1) 如果是拖放目标的其中一个节点，忽略（整棵子树被剪枝）
            //       (2) 如果不是拖放目标之一，以当前子节点为当前节点，回到 1 计算
            //    3. 返回允许列表
            //
            _calcDropTargets: function() {
                function findAvailableParents(nodes, root) {
                    var availables = [], i;
                    availables.push(root);
                    root.getChildren().forEach(function(test) {
                        for (i = 0; i < nodes.length; i++) {
                            if (nodes[i] == test) return;
                        }
                        availables = availables.concat(findAvailableParents(nodes, test));
                    });
                    return availables;
                }
                this._dropTargets = findAvailableParents(this._dragSources, this._minder.getRoot());
                this._dropTargetBoxes = this._dropTargets.map(function(source) {
                    return source.getLayoutBox();
                });
            },
            _calcOrderHints: function() {
                var sources = this._dragSources;
                var ancestor = MinderNode.getCommonAncestor(sources);
                // 只有一个元素选中，公共祖先是其父
                if (ancestor == sources[0]) ancestor = sources[0].parent;
                if (sources.length === 0 || ancestor != sources[0].parent) {
                    this._orderHints = [];
                    return;
                }
                var siblings = ancestor.children;
                this._orderHints = siblings.reduce(function(hint, sibling) {
                    if (sources.indexOf(sibling) == -1) {
                        hint = hint.concat(sibling.getOrderHint());
                    }
                    return hint;
                }, []);
            },
            _leaveDragMode: function() {
                this._dragMode = false;
                this._dropSucceedTarget = null;
                this._orderSucceedHint = null;
                this._renderDropHint(null);
                this._renderOrderHint(null);
                this._minder.rollbackStatus();
            },
            _drawForDragMode: function() {
                this._text.setContent(this._dragSources.length + " items");
                this._text.setPosition(this._startPosition.x, this._startPosition.y + 5);
                this._minder.getRenderContainer().addShape(this);
            },
            /**
         * 通过 judge 函数判断 targetBox 和 sourceBox 的位置交叉关系
         * @param targets -- 目标节点
         * @param targetBoxMapper -- 目标节点与对应 Box 的映射关系
         * @param judge -- 判断函数
         * @returns {*}
         * @private
         */
            _boxTest: function(targets, targetBoxMapper, judge) {
                var sourceBoxes = this._dragSources.map(function(source) {
                    return source.getLayoutBox();
                });
                var i, j, target, sourceBox, targetBox;
                judge = judge || function(intersectBox, sourceBox, targetBox) {
                    return intersectBox && !intersectBox.isEmpty();
                };
                for (i = 0; i < targets.length; i++) {
                    target = targets[i];
                    targetBox = targetBoxMapper.call(this, target, i);
                    for (j = 0; j < sourceBoxes.length; j++) {
                        sourceBox = sourceBoxes[j];
                        var intersectBox = sourceBox.intersect(targetBox);
                        if (judge(intersectBox, sourceBox, targetBox)) {
                            return target;
                        }
                    }
                }
                return null;
            },
            _dropTest: function() {
                this._dropSucceedTarget = this._boxTest(this._dropTargets, function(target, i) {
                    return this._dropTargetBoxes[i];
                }, function(intersectBox, sourceBox, targetBox) {
                    function area(box) {
                        return box.width * box.height;
                    }
                    if (!intersectBox) return false;
                    /*
                * Added by zhangbobell, 2015.9.8
                *
                * 增加了下面一行判断，修复了循环比较中 targetBox 为折叠节点时，intersetBox 面积为 0，
                * 而 targetBox 的 width 和 height 均为 0
                * 此时造成了满足以下的第二个条件而返回 true
                * */
                    if (!area(intersectBox)) return false;
                    // 面积判断，交叉面积大于其中的一半
                    if (area(intersectBox) > .5 * Math.min(area(sourceBox), area(targetBox))) return true;
                    // 有一个边完全重合的情况，也认为两个是交叉的
                    if (intersectBox.width + 1 >= Math.min(sourceBox.width, targetBox.width)) return true;
                    if (intersectBox.height + 1 >= Math.min(sourceBox.height, targetBox.height)) return true;
                    return false;
                });
                this._renderDropHint(this._dropSucceedTarget);
                return !!this._dropSucceedTarget;
            },
            _orderTest: function() {
                this._orderSucceedHint = this._boxTest(this._orderHints, function(hint) {
                    return hint.area;
                });
                this._renderOrderHint(this._orderSucceedHint);
                return !!this._orderSucceedHint;
            },
            _renderDropHint: function(target) {
                this._dropHinter.render(target);
            },
            _renderOrderHint: function(hint) {
                this._orderHinter.render(hint);
            },
            preventDragMove: function() {
                this._startPosition = null;
            }
        });
        Module.register("DragTree", function() {
            var dragger;
            return {
                init: function() {
                    dragger = new TreeDragger(this);
                    window.addEventListener("mouseup", function() {
                        dragger.dragEnd();
                    });
                },
                events: {
                    "normal.mousedown inputready.mousedown": function(e) {
                        // 单选中根节点也不触发拖拽
                        if (e.originEvent.button) return;
                        if (e.getTargetNode() && e.getTargetNode() != this.getRoot()) {
                            dragger.dragStart(e.getPosition());
                        }
                    },
                    "normal.mousemove dragtree.mousemove": function(e) {
                        dragger.dragMove(e.getPosition());
                    },
                    "normal.mouseup dragtree.beforemouseup": function(e) {
                        dragger.dragEnd();
                        //e.stopPropagation();
                        e.preventDefault();
                    },
                    statuschange: function(e) {
                        if (e.lastStatus == "textedit" && e.currentStatus == "normal") {
                            dragger.preventDragMove();
                        }
                    }
                },
                commands: {
                    movetoparent: MoveToParentCommand
                }
            };
        });
    }
};

//src/module/expand.js
_p[46] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var keymap = _p.r(15);
        var MinderNode = _p.r(21);
        var Command = _p.r(9);
        var Module = _p.r(20);
        var Renderer = _p.r(27);
        Module.register("Expand", function() {
            var minder = this;
            var EXPAND_STATE_DATA = "expandState", STATE_EXPAND = "expand", STATE_COLLAPSE = "collapse";
            // 将展开的操作和状态读取接口拓展到 MinderNode 上
            kity.extendClass(MinderNode, {
                /**
             * 展开节点
             * @param  {Policy} policy 展开的策略，默认为 KEEP_STATE
             */
                expand: function() {
                    this.setData(EXPAND_STATE_DATA, STATE_EXPAND);
                    return this;
                },
                /**
             * 收起节点
             */
                collapse: function() {
                    this.setData(EXPAND_STATE_DATA, STATE_COLLAPSE);
                    return this;
                },
                /**
             * 判断节点当前的状态是否为展开
             */
                isExpanded: function() {
                    var expanded = this.getData(EXPAND_STATE_DATA) !== STATE_COLLAPSE;
                    return expanded && (this.isRoot() || this.parent.isExpanded());
                },
                /**
             * 判断节点当前的状态是否为收起
             */
                isCollapsed: function() {
                    return !this.isExpanded();
                }
            });
            /**
         * @command Expand
         * @description 展开当前选中的节点，保证其可见
         * @param {bool} justParents 是否只展开到父亲
         *     * `false` - （默认）保证选中的节点以及其子树可见
         *     * `true` - 只保证选中的节点可见，不展开其子树
         * @state
         *   0: 当前有选中的节点
         *  -1: 当前没有选中的节点
         */
            var ExpandCommand = kity.createClass("ExpandCommand", {
                base: Command,
                execute: function(km, justParents) {
                    var node = km.getSelectedNode();
                    if (!node) return;
                    if (justParents) {
                        node = node.parent;
                    }
                    while (node.parent) {
                        node.expand();
                        node = node.parent;
                    }
                    node.renderTree();
                    km.layout(100);
                },
                queryState: function(km) {
                    var node = km.getSelectedNode();
                    return node && !node.isRoot() && !node.isExpanded() ? 0 : -1;
                }
            });
            /**
         * @command ExpandToLevel
         * @description 展开脑图到指定的层级
         * @param {number} level 指定展开到的层级，最少值为 1。
         * @state
         *   0: 一直可用
         */
            var ExpandToLevelCommand = kity.createClass("ExpandToLevelCommand", {
                base: Command,
                execute: function(km, level) {
                    km.getRoot().traverse(function(node) {
                        if (node.getLevel() < level) node.expand();
                        if (node.getLevel() == level && !node.isLeaf()) node.collapse();
                    });
                    km.refresh(100);
                },
                enableReadOnly: true
            });
            /**
         * @command Collapse
         * @description 收起当前节点的子树
         * @state
         *   0: 当前有选中的节点
         *  -1: 当前没有选中的节点
         */
            var CollapseCommand = kity.createClass("CollapseCommand", {
                base: Command,
                execute: function(km) {
                    var node = km.getSelectedNode();
                    if (!node) return;
                    node.collapse();
                    node.renderTree();
                    km.layout();
                },
                queryState: function(km) {
                    var node = km.getSelectedNode();
                    return node && !node.isRoot() && node.isExpanded() ? 0 : -1;
                }
            });
            var Expander = kity.createClass("Expander", {
                base: kity.Group,
                constructor: function(node) {
                    this.callBase();
                    this.radius = 6;
                    this.outline = new kity.Circle(this.radius).stroke("gray").fill("white");
                    this.sign = new kity.Path().stroke("gray");
                    this.addShapes([ this.outline, this.sign ]);
                    this.initEvent(node);
                    this.setId(utils.uuid("node_expander"));
                    this.setStyle("cursor", "pointer");
                },
                initEvent: function(node) {
                    this.on("mousedown", function(e) {
                        minder.select([ node ], true);
                        if (node.isExpanded()) {
                            node.collapse();
                        } else {
                            node.expand();
                        }
                        node.renderTree().getMinder().layout(100);
                        node.getMinder().fire("contentchange");
                        e.stopPropagation();
                        e.preventDefault();
                    });
                    this.on("dblclick click mouseup", function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                    });
                },
                setState: function(state) {
                    if (state == "hide") {
                        this.setVisible(false);
                        return;
                    }
                    this.setVisible(true);
                    var pathData = [ "M", 1.5 - this.radius, 0, "L", this.radius - 1.5, 0 ];
                    if (state == STATE_COLLAPSE) {
                        pathData.push([ "M", 0, 1.5 - this.radius, "L", 0, this.radius - 1.5 ]);
                    }
                    this.sign.setPathData(pathData);
                }
            });
            var ExpanderRenderer = kity.createClass("ExpanderRenderer", {
                base: Renderer,
                create: function(node) {
                    if (node.isRoot()) return;
                    this.expander = new Expander(node);
                    node.getRenderContainer().prependShape(this.expander);
                    node.expanderRenderer = this;
                    this.node = node;
                    return this.expander;
                },
                shouldRender: function(node) {
                    return !node.isRoot();
                },
                update: function(expander, node, box) {
                    if (!node.parent) return;
                    var visible = node.parent.isExpanded();
                    expander.setState(visible && node.children.length ? node.getData(EXPAND_STATE_DATA) : "hide");
                    var vector = node.getLayoutVectorIn().normalize(expander.radius + node.getStyle("stroke-width"));
                    var position = node.getVertexIn().offset(vector.reverse());
                    this.expander.setTranslate(position);
                }
            });
            return {
                commands: {
                    expand: ExpandCommand,
                    expandtolevel: ExpandToLevelCommand,
                    collapse: CollapseCommand
                },
                events: {
                    layoutapply: function(e) {
                        var r = e.node.getRenderer("ExpanderRenderer");
                        if (r.getRenderShape()) {
                            r.update(r.getRenderShape(), e.node);
                        }
                    },
                    beforerender: function(e) {
                        var node = e.node;
                        var visible = !node.parent || node.parent.isExpanded();
                        var minder = this;
                        node.getRenderContainer().setVisible(visible);
                        if (!visible) e.stopPropagation();
                    },
                    "normal.keydown": function(e) {
                        if (this.getStatus() == "textedit") return;
                        if (e.originEvent.keyCode == keymap["/"]) {
                            var node = this.getSelectedNode();
                            if (!node || node == this.getRoot()) return;
                            var expanded = node.isExpanded();
                            this.getSelectedNodes().forEach(function(node) {
                                if (expanded) node.collapse(); else node.expand();
                                node.renderTree();
                            });
                            this.layout(100);
                            this.fire("contentchange");
                            e.preventDefault();
                            e.stopPropagationImmediately();
                        }
                        if (e.isShortcutKey("Alt+`")) {
                            this.execCommand("expandtolevel", 9999);
                        }
                        for (var i = 1; i < 6; i++) {
                            if (e.isShortcutKey("Alt+" + i)) {
                                this.execCommand("expandtolevel", i);
                            }
                        }
                    }
                },
                renderers: {
                    outside: ExpanderRenderer
                },
                contextmenu: [ {
                    command: "expandtoleaf",
                    query: function() {
                        return !minder.getSelectedNode();
                    },
                    fn: function(minder) {
                        minder.execCommand("expandtolevel", 9999);
                    }
                }, {
                    command: "expandtolevel1",
                    query: function() {
                        return !minder.getSelectedNode();
                    },
                    fn: function(minder) {
                        minder.execCommand("expandtolevel", 1);
                    }
                }, {
                    command: "expandtolevel2",
                    query: function() {
                        return !minder.getSelectedNode();
                    },
                    fn: function(minder) {
                        minder.execCommand("expandtolevel", 2);
                    }
                }, {
                    command: "expandtolevel3",
                    query: function() {
                        return !minder.getSelectedNode();
                    },
                    fn: function(minder) {
                        minder.execCommand("expandtolevel", 3);
                    }
                }, {
                    divider: true
                } ]
            };
        });
    }
};

//src/module/font.js
_p[47] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var Minder = _p.r(19);
        var MinderNode = _p.r(21);
        var Command = _p.r(9);
        var Module = _p.r(20);
        var TextRenderer = _p.r(61);
        function getNodeDataOrStyle(node, name) {
            return node.getData(name) || node.getStyle(name);
        }
        TextRenderer.registerStyleHook(function(node, textGroup) {
            var dataColor = node.getData("color");
            var selectedColor = node.getStyle("selected-color");
            var styleColor = node.getStyle("color");
            var foreColor = dataColor || (node.isSelected() && selectedColor ? selectedColor : styleColor);
            var fontFamily = getNodeDataOrStyle(node, "font-family");
            var fontSize = getNodeDataOrStyle(node, "font-size");
            textGroup.fill(foreColor);
            textGroup.eachItem(function(index, item) {
                item.setFont({
                    family: fontFamily,
                    size: fontSize
                });
            });
        });
        Module.register("fontmodule", {
            commands: {
                /**
             * @command ForeColor
             * @description 设置选中节点的字体颜色
             * @param {string} color 表示颜色的字符串
             * @state
             *   0: 当前有选中的节点
             *  -1: 当前没有选中的节点
             * @return 如果只有一个节点选中，返回已选中节点的字体颜色；否则返回 'mixed'。
             */
                forecolor: kity.createClass("fontcolorCommand", {
                    base: Command,
                    execute: function(km, color) {
                        var nodes = km.getSelectedNodes();
                        nodes.forEach(function(n) {
                            n.setData("color", color);
                            n.render();
                        });
                    },
                    queryState: function(km) {
                        return km.getSelectedNodes().length === 0 ? -1 : 0;
                    },
                    queryValue: function(km) {
                        if (km.getSelectedNodes().length == 1) {
                            return km.getSelectedNodes()[0].getData("color");
                        }
                        return "mixed";
                    }
                }),
                /**
             * @command Background
             * @description 设置选中节点的背景颜色
             * @param {string} color 表示颜色的字符串
             * @state
             *   0: 当前有选中的节点
             *  -1: 当前没有选中的节点
             * @return 如果只有一个节点选中，返回已选中节点的背景颜色；否则返回 'mixed'。
             */
                background: kity.createClass("backgroudCommand", {
                    base: Command,
                    execute: function(km, color) {
                        var nodes = km.getSelectedNodes();
                        nodes.forEach(function(n) {
                            n.setData("background", color);
                            n.render();
                        });
                    },
                    queryState: function(km) {
                        return km.getSelectedNodes().length === 0 ? -1 : 0;
                    },
                    queryValue: function(km) {
                        if (km.getSelectedNodes().length == 1) {
                            return km.getSelectedNodes()[0].getData("background");
                        }
                        return "mixed";
                    }
                }),
                /**
             * @command FontFamily
             * @description 设置选中节点的字体
             * @param {string} family 表示字体的字符串
             * @state
             *   0: 当前有选中的节点
             *  -1: 当前没有选中的节点
             * @return 返回首个选中节点的字体
             */
                fontfamily: kity.createClass("fontfamilyCommand", {
                    base: Command,
                    execute: function(km, family) {
                        var nodes = km.getSelectedNodes();
                        nodes.forEach(function(n) {
                            n.setData("font-family", family);
                            n.render();
                            km.layout();
                        });
                    },
                    queryState: function(km) {
                        return km.getSelectedNodes().length === 0 ? -1 : 0;
                    },
                    queryValue: function(km) {
                        var node = km.getSelectedNode();
                        if (node) return node.getData("font-family");
                        return null;
                    }
                }),
                /**
             * @command FontSize
             * @description 设置选中节点的字体大小
             * @param {number} size 字体大小（px）
             * @state
             *   0: 当前有选中的节点
             *  -1: 当前没有选中的节点
             * @return 返回首个选中节点的字体大小
             */
                fontsize: kity.createClass("fontsizeCommand", {
                    base: Command,
                    execute: function(km, size) {
                        var nodes = km.getSelectedNodes();
                        nodes.forEach(function(n) {
                            n.setData("font-size", size);
                            n.render();
                            km.layout(300);
                        });
                    },
                    queryState: function(km) {
                        return km.getSelectedNodes().length === 0 ? -1 : 0;
                    },
                    queryValue: function(km) {
                        var node = km.getSelectedNode();
                        if (node) return node.getData("font-size");
                        return null;
                    }
                })
            }
        });
    }
};

//src/module/hyperlink.js
_p[48] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var Minder = _p.r(19);
        var MinderNode = _p.r(21);
        var Command = _p.r(9);
        var Module = _p.r(20);
        var Renderer = _p.r(27);
        // jscs:disable maximumLineLength
        var linkShapePath = "M16.614,10.224h-1.278c-1.668,0-3.07-1.07-3.599-2.556h4.877c0.707,0,1.278-0.571,1.278-1.278V3.834 c0-0.707-0.571-1.278-1.278-1.278h-4.877C12.266,1.071,13.668,0,15.336,0h1.278c2.116,0,3.834,1.716,3.834,3.834V6.39 C20.448,8.508,18.73,10.224,16.614,10.224z M5.112,5.112c0-0.707,0.573-1.278,1.278-1.278h7.668c0.707,0,1.278,0.571,1.278,1.278 S14.765,6.39,14.058,6.39H6.39C5.685,6.39,5.112,5.819,5.112,5.112z M2.556,3.834V6.39c0,0.707,0.573,1.278,1.278,1.278h4.877 c-0.528,1.486-1.932,2.556-3.599,2.556H3.834C1.716,10.224,0,8.508,0,6.39V3.834C0,1.716,1.716,0,3.834,0h1.278 c1.667,0,3.071,1.071,3.599,2.556H3.834C3.129,2.556,2.556,3.127,2.556,3.834z";
        Module.register("hyperlink", {
            commands: {
                /**
             * @command HyperLink
             * @description 为选中的节点添加超链接
             * @param {string} url 超链接的 URL，设置为 null 移除
             * @param {string} title 超链接的说明
             * @state
             *   0: 当前有选中的节点
             *  -1: 当前没有选中的节点
             * @return 返回首个选中节点的超链接信息，JSON 对象： `{url: url, title: title}`
             */
                hyperlink: kity.createClass("hyperlink", {
                    base: Command,
                    execute: function(km, url, title) {
                        var nodes = km.getSelectedNodes();
                        nodes.forEach(function(n) {
                            n.setData("hyperlink", url);
                            n.setData("hyperlinkTitle", url && title);
                            n.render();
                        });
                        km.layout();
                    },
                    queryState: function(km) {
                        var nodes = km.getSelectedNodes(), result = 0;
                        if (nodes.length === 0) {
                            return -1;
                        }
                        nodes.forEach(function(n) {
                            if (n && n.getData("hyperlink")) {
                                result = 0;
                                return false;
                            }
                        });
                        return result;
                    },
                    queryValue: function(km) {
                        var node = km.getSelectedNode();
                        return {
                            url: node.getData("hyperlink"),
                            title: node.getData("hyperlinkTitle")
                        };
                    }
                })
            },
            renderers: {
                right: kity.createClass("hyperlinkrender", {
                    base: Renderer,
                    create: function() {
                        var link = new kity.HyperLink();
                        var linkshape = new kity.Path();
                        var outline = new kity.Rect(24, 22, -2, -6, 4).fill("rgba(255, 255, 255, 0)");
                        linkshape.setPathData(linkShapePath).fill("#666");
                        link.addShape(outline);
                        link.addShape(linkshape);
                        link.setTarget("_blank");
                        link.setStyle("cursor", "pointer");
                        link.on("mouseover", function() {
                            outline.fill("rgba(255, 255, 200, .8)");
                        }).on("mouseout", function() {
                            outline.fill("rgba(255, 255, 255, 0)");
                        });
                        return link;
                    },
                    shouldRender: function(node) {
                        return node.getData("hyperlink");
                    },
                    update: function(link, node, box) {
                        var href = node.getData("hyperlink");
                        link.setHref("#");
                        var allowed = [ "^http:", "^https:", "^ftp:", "^mailto:" ];
                        for (var i = 0; i < allowed.length; i++) {
                            var regex = new RegExp(allowed[i]);
                            if (regex.test(href)) {
                                link.setHref(href);
                                break;
                            }
                        }
                        var title = node.getData("hyperlinkTitle");
                        if (title) {
                            title = [ title, "(", href, ")" ].join("");
                        } else {
                            title = href;
                        }
                        link.node.setAttributeNS("http://www.w3.org/1999/xlink", "title", title);
                        var spaceRight = node.getStyle("space-right");
                        link.setTranslate(box.right + spaceRight + 2, -5);
                        return new kity.Box({
                            x: box.right + spaceRight,
                            y: -11,
                            width: 24,
                            height: 22
                        });
                    }
                })
            }
        });
    }
};

//src/module/image-viewer.js
_p[49] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var keymap = _p.r(15);
        var Module = _p.r(20);
        var Command = _p.r(9);
        Module.register("ImageViewer", function() {
            function createEl(name, classNames, children) {
                var el = document.createElement(name);
                addClass(el, classNames);
                children && children.length && children.forEach(function(child) {
                    el.appendChild(child);
                });
                return el;
            }
            function on(el, event, handler) {
                el.addEventListener(event, handler);
            }
            function addClass(el, classNames) {
                classNames && classNames.split(" ").forEach(function(className) {
                    el.classList.add(className);
                });
            }
            function removeClass(el, classNames) {
                classNames && classNames.split(" ").forEach(function(className) {
                    el.classList.remove(className);
                });
            }
            var ImageViewer = kity.createClass("ImageViewer", {
                constructor: function() {
                    var btnClose = createEl("button", "km-image-viewer-btn km-image-viewer-close");
                    var btnSource = createEl("button", "km-image-viewer-btn km-image-viewer-source");
                    var image = this.image = createEl("img");
                    var toolbar = this.toolbar = createEl("div", "km-image-viewer-toolbar", [ btnSource, btnClose ]);
                    var container = createEl("div", "km-image-viewer-container", [ image ]);
                    var viewer = this.viewer = createEl("div", "km-image-viewer", [ toolbar, container ]);
                    this.hotkeyHandler = this.hotkeyHandler.bind(this);
                    on(btnClose, "click", this.close.bind(this));
                    on(btnSource, "click", this.viewSource.bind(this));
                    on(image, "click", this.zoomImage.bind(this));
                    on(viewer, "contextmenu", this.toggleToolbar.bind(this));
                    on(document, "keydown", this.hotkeyHandler);
                },
                dispose: function() {
                    this.close();
                    document.removeEventListener("remove", this.hotkeyHandler);
                },
                hotkeyHandler: function(e) {
                    if (!this.actived) {
                        return;
                    }
                    if (e.keyCode === keymap["esc"]) {
                        this.close();
                    }
                },
                toggleToolbar: function(e) {
                    e && e.preventDefault();
                    this.toolbar.classList.toggle("hidden");
                },
                zoomImage: function(restore) {
                    var image = this.image;
                    if (typeof restore === "boolean") {
                        restore && addClass(image, "limited");
                    } else {
                        image.classList.toggle("limited");
                    }
                },
                viewSource: function(src) {
                    window.open(this.image.src);
                },
                open: function(src) {
                    var input = document.querySelector("input");
                    if (input) {
                        input.focus();
                        input.blur();
                    }
                    this.image.src = src;
                    this.zoomImage(true);
                    document.body.appendChild(this.viewer);
                    this.actived = true;
                },
                close: function() {
                    this.image.src = "";
                    document.body.removeChild(this.viewer);
                    this.actived = false;
                }
            });
            return {
                init: function() {
                    this.viewer = new ImageViewer();
                },
                events: {
                    "normal.dblclick": function(e) {
                        var shape = e.kityEvent.targetShape;
                        if (shape.__KityClassName === "Image" && shape.url) {
                            this.viewer.open(shape.url);
                        }
                    }
                }
            };
        });
    }
};

//src/module/image.js
_p[50] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var Minder = _p.r(19);
        var MinderNode = _p.r(21);
        var Command = _p.r(9);
        var Module = _p.r(20);
        var Renderer = _p.r(27);
        Module.register("image", function() {
            function loadImageSize(url, callback) {
                var img = document.createElement("img");
                img.onload = function() {
                    callback(img.width, img.height);
                };
                img.onerror = function() {
                    callback(null);
                };
                img.src = url;
            }
            function fitImageSize(width, height, maxWidth, maxHeight) {
                var ratio = width / height, fitRatio = maxWidth / maxHeight;
                // 宽高比大于最大尺寸的宽高比，以宽度为标准适应
                if (width > maxWidth && ratio > fitRatio) {
                    width = maxWidth;
                    height = width / ratio;
                } else if (height > maxHeight) {
                    height = maxHeight;
                    width = height * ratio;
                }
                return {
                    width: width | 0,
                    height: height | 0
                };
            }
            /**
         * @command Image
         * @description 为选中的节点添加图片
         * @param {string} url 图片的 URL，设置为 null 移除
         * @param {string} title 图片的说明
         * @state
         *   0: 当前有选中的节点
         *  -1: 当前没有选中的节点
         * @return 返回首个选中节点的图片信息，JSON 对象： `{url: url, title: title}`
         */
            var ImageCommand = kity.createClass("ImageCommand", {
                base: Command,
                execute: function(km, url, title) {
                    var nodes = km.getSelectedNodes();
                    loadImageSize(url, function(width, height) {
                        nodes.forEach(function(n) {
                            var size = fitImageSize(width, height, km.getOption("maxImageWidth"), km.getOption("maxImageHeight"));
                            n.setData("image", url);
                            n.setData("imageTitle", url && title);
                            n.setData("imageSize", url && size);
                            n.render();
                        });
                        km.fire("saveScene");
                        km.layout(300);
                    });
                },
                queryState: function(km) {
                    var nodes = km.getSelectedNodes(), result = 0;
                    if (nodes.length === 0) {
                        return -1;
                    }
                    nodes.forEach(function(n) {
                        if (n && n.getData("image")) {
                            result = 0;
                            return false;
                        }
                    });
                    return result;
                },
                queryValue: function(km) {
                    var node = km.getSelectedNode();
                    return {
                        url: node.getData("image"),
                        title: node.getData("imageTitle")
                    };
                }
            });
            var ImageRenderer = kity.createClass("ImageRenderer", {
                base: Renderer,
                create: function(node) {
                    return new kity.Image(node.getData("image"));
                },
                shouldRender: function(node) {
                    return node.getData("image");
                },
                update: function(image, node, box) {
                    var url = node.getData("image");
                    var title = node.getData("imageTitle");
                    var size = node.getData("imageSize");
                    var spaceTop = node.getStyle("space-top");
                    if (!size) return;
                    if (title) {
                        image.node.setAttributeNS("http://www.w3.org/1999/xlink", "title", title);
                    }
                    var x = box.cx - size.width / 2;
                    var y = box.y - size.height - spaceTop;
                    image.setUrl(url).setX(x | 0).setY(y | 0).setWidth(size.width | 0).setHeight(size.height | 0);
                    return new kity.Box(x | 0, y | 0, size.width | 0, size.height | 0);
                }
            });
            return {
                defaultOptions: {
                    maxImageWidth: 200,
                    maxImageHeight: 200
                },
                commands: {
                    image: ImageCommand
                },
                renderers: {
                    top: ImageRenderer
                }
            };
        });
    }
};

//src/module/keynav.js
_p[51] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var keymap = _p.r(15);
        var Minder = _p.r(19);
        var MinderNode = _p.r(21);
        var Command = _p.r(9);
        var Module = _p.r(20);
        var Renderer = _p.r(27);
        Module.register("KeyboardModule", function() {
            var min = Math.min, max = Math.max, abs = Math.abs, sqrt = Math.sqrt, exp = Math.exp;
            function buildPositionNetwork(root) {
                var pointIndexes = [], p;
                root.traverse(function(node) {
                    p = node.getLayoutBox();
                    // bugfix: 不应导航到收起的节点（判断其尺寸是否存在）
                    if (p.width && p.height) {
                        pointIndexes.push({
                            left: p.x,
                            top: p.y,
                            right: p.x + p.width,
                            bottom: p.y + p.height,
                            width: p.width,
                            height: p.height,
                            node: node
                        });
                    }
                });
                for (var i = 0; i < pointIndexes.length; i++) {
                    findClosestPointsFor(pointIndexes, i);
                }
            }
            // 这是金泉的点子，赞！
            // 求两个不相交矩形的最近距离
            function getCoefedDistance(box1, box2) {
                var xMin, xMax, yMin, yMax, xDist, yDist, dist, cx, cy;
                xMin = min(box1.left, box2.left);
                xMax = max(box1.right, box2.right);
                yMin = min(box1.top, box2.top);
                yMax = max(box1.bottom, box2.bottom);
                xDist = xMax - xMin - box1.width - box2.width;
                yDist = yMax - yMin - box1.height - box2.height;
                if (xDist < 0) dist = yDist; else if (yDist < 0) dist = xDist; else dist = sqrt(xDist * xDist + yDist * yDist);
                var node1 = box1.node;
                var node2 = box2.node;
                // sibling
                if (node1.parent == node2.parent) {
                    dist /= 10;
                }
                // parent
                if (node2.parent == node1) {
                    dist /= 5;
                }
                return dist;
            }
            function findClosestPointsFor(pointIndexes, iFind) {
                var find = pointIndexes[iFind];
                var most = {}, quad;
                var current, dist;
                for (var i = 0; i < pointIndexes.length; i++) {
                    if (i == iFind) continue;
                    current = pointIndexes[i];
                    dist = getCoefedDistance(current, find);
                    // left check
                    if (current.right < find.left) {
                        if (!most.left || dist < most.left.dist) {
                            most.left = {
                                dist: dist,
                                node: current.node
                            };
                        }
                    }
                    // right check
                    if (current.left > find.right) {
                        if (!most.right || dist < most.right.dist) {
                            most.right = {
                                dist: dist,
                                node: current.node
                            };
                        }
                    }
                    // top check
                    if (current.bottom < find.top) {
                        if (!most.top || dist < most.top.dist) {
                            most.top = {
                                dist: dist,
                                node: current.node
                            };
                        }
                    }
                    // bottom check
                    if (current.top > find.bottom) {
                        if (!most.down || dist < most.down.dist) {
                            most.down = {
                                dist: dist,
                                node: current.node
                            };
                        }
                    }
                }
                find.node._nearestNodes = {
                    right: most.right && most.right.node || null,
                    top: most.top && most.top.node || null,
                    left: most.left && most.left.node || null,
                    down: most.down && most.down.node || null
                };
            }
            function navigateTo(km, direction) {
                var referNode = km.getSelectedNode();
                if (!referNode) {
                    km.select(km.getRoot());
                    buildPositionNetwork(km.getRoot());
                    return;
                }
                if (!referNode._nearestNodes) {
                    buildPositionNetwork(km.getRoot());
                }
                var nextNode = referNode._nearestNodes[direction];
                if (nextNode) {
                    km.select(nextNode, true);
                }
            }
            // 稀释用
            var lastFrame;
            return {
                events: {
                    layoutallfinish: function() {
                        var root = this.getRoot();
                        buildPositionNetwork(root);
                    },
                    "normal.keydown readonly.keydown": function(e) {
                        var minder = this;
                        [ "left", "right", "up", "down" ].forEach(function(key) {
                            if (e.isShortcutKey(key)) {
                                navigateTo(minder, key == "up" ? "top" : key);
                                e.preventDefault();
                            }
                        });
                    }
                }
            };
        });
    }
};

//src/module/layout.js
/**
 * @fileOverview
 *
 * 布局模块
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[52] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var Command = _p.r(9);
        var Module = _p.r(20);
        /**
     * @command Layout
     * @description 设置选中节点的布局
     *     允许使用的布局可以使用 `kityminder.Minder.getLayoutList()` 查询
     * @param {string} name 布局的名称，设置为 null 则使用继承或默认的布局
     * @state
     *   0: 当前有选中的节点
     *  -1: 当前没有选中的节点
     * @return 返回首个选中节点的布局名称
     */
        var LayoutCommand = kity.createClass("LayoutCommand", {
            base: Command,
            execute: function(minder, name) {
                var nodes = minder.getSelectedNodes();
                nodes.forEach(function(node) {
                    node.layout(name);
                });
            },
            queryValue: function(minder) {
                var node = minder.getSelectedNode();
                if (node) {
                    return node.getData("layout");
                }
            },
            queryState: function(minder) {
                return minder.getSelectedNode() ? 0 : -1;
            }
        });
        /**
     * @command ResetLayout
     * @description 重设选中节点的布局，如果当前没有选中的节点，重设整个脑图的布局
     * @state
     *   0: 始终可用
     * @return 返回首个选中节点的布局名称
     */
        var ResetLayoutCommand = kity.createClass("ResetLayoutCommand", {
            base: Command,
            execute: function(minder) {
                var nodes = minder.getSelectedNodes();
                if (!nodes.length) nodes = [ minder.getRoot() ];
                nodes.forEach(function(node) {
                    node.traverse(function(child) {
                        child.resetLayoutOffset();
                        if (!child.isRoot()) {
                            child.setData("layout", null);
                        }
                    });
                });
                minder.layout(300);
            },
            enableReadOnly: true
        });
        Module.register("LayoutModule", {
            commands: {
                layout: LayoutCommand,
                resetlayout: ResetLayoutCommand
            },
            contextmenu: [ {
                command: "resetlayout"
            }, {
                divider: true
            } ],
            commandShortcutKeys: {
                resetlayout: "Ctrl+Shift+L"
            }
        });
    }
};

//src/module/node.js
_p[53] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var Minder = _p.r(19);
        var MinderNode = _p.r(21);
        var Command = _p.r(9);
        var Module = _p.r(20);
        var Renderer = _p.r(27);
        /**
     * @command AppendChildNode
     * @description 添加子节点到选中的节点中
     * @param {string|object} textOrData 要插入的节点的文本或数据
     * @state
     *    0: 当前有选中的节点
     *   -1: 当前没有选中的节点
     */
        var AppendChildCommand = kity.createClass("AppendChildCommand", {
            base: Command,
            execute: function(km, text) {
                var parent = km.getSelectedNode();
                if (!parent) {
                    return null;
                }
                var node = km.createNode(text, parent);
                km.select(node, true);
                if (parent.isExpanded()) {
                    node.render();
                } else {
                    parent.expand();
                    parent.renderTree();
                }
                km.layout(600);
            },
            queryState: function(km) {
                var selectedNode = km.getSelectedNode();
                return selectedNode ? 0 : -1;
            }
        });
        /**
     * @command AppendSiblingNode
     * @description 添加选中的节点的兄弟节点
     * @param {string|object} textOrData 要添加的节点的文本或数据
     * @state
     *    0: 当前有选中的节点
     *   -1: 当前没有选中的节点
     */
        var AppendSiblingCommand = kity.createClass("AppendSiblingCommand", {
            base: Command,
            execute: function(km, text) {
                var sibling = km.getSelectedNode();
                var parent = sibling.parent;
                if (!parent) {
                    return km.execCommand("AppendChildNode", text);
                }
                var node = km.createNode(text, parent, sibling.getIndex() + 1);
                node.setGlobalLayoutTransform(sibling.getGlobalLayoutTransform());
                km.select(node, true);
                node.render();
                km.layout(600);
            },
            queryState: function(km) {
                var selectedNode = km.getSelectedNode();
                return selectedNode ? 0 : -1;
            }
        });
        /**
     * @command RemoveNode
     * @description 移除选中的节点
     * @state
     *    0: 当前有选中的节点
     *   -1: 当前没有选中的节点
     */
        var RemoveNodeCommand = kity.createClass("RemoverNodeCommand", {
            base: Command,
            execute: function(km) {
                var nodes = km.getSelectedNodes();
                var ancestor = MinderNode.getCommonAncestor.apply(null, nodes);
                var index = nodes[0].getIndex();
                nodes.forEach(function(node) {
                    if (!node.isRoot()) km.removeNode(node);
                });
                if (nodes.length == 1) {
                    var selectBack = ancestor.children[index - 1] || ancestor.children[index];
                    km.select(selectBack || ancestor || km.getRoot(), true);
                } else {
                    km.select(ancestor || km.getRoot(), true);
                }
                km.layout(600);
            },
            queryState: function(km) {
                var selectedNode = km.getSelectedNode();
                return selectedNode && !selectedNode.isRoot() ? 0 : -1;
            }
        });
        var AppendParentCommand = kity.createClass("AppendParentCommand", {
            base: Command,
            execute: function(km, text) {
                var nodes = km.getSelectedNodes();
                nodes.sort(function(a, b) {
                    return a.getIndex() - b.getIndex();
                });
                var parent = nodes[0].parent;
                var newParent = km.createNode(text, parent, nodes[0].getIndex());
                nodes.forEach(function(node) {
                    newParent.appendChild(node);
                });
                newParent.setGlobalLayoutTransform(nodes[nodes.length >> 1].getGlobalLayoutTransform());
                km.select(newParent, true);
                km.layout(600);
            },
            queryState: function(km) {
                var nodes = km.getSelectedNodes();
                if (!nodes.length) return -1;
                var parent = nodes[0].parent;
                if (!parent) return -1;
                for (var i = 1; i < nodes.length; i++) {
                    if (nodes[i].parent != parent) return -1;
                }
                return 0;
            }
        });
        Module.register("NodeModule", function() {
            return {
                commands: {
                    AppendChildNode: AppendChildCommand,
                    AppendSiblingNode: AppendSiblingCommand,
                    RemoveNode: RemoveNodeCommand,
                    AppendParentNode: AppendParentCommand
                },
                commandShortcutKeys: {
                    appendsiblingnode: "normal::Enter",
                    appendchildnode: "normal::Insert|Tab",
                    appendparentnode: "normal::Shift+Tab|normal::Shift+Insert",
                    removenode: "normal::Del|Backspace"
                }
            };
        });
    }
};

//src/module/note.js
/**
 * @fileOverview
 *
 * 支持节点详细信息（HTML）格式
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[54] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var Minder = _p.r(19);
        var MinderNode = _p.r(21);
        var Command = _p.r(9);
        var Module = _p.r(20);
        var Renderer = _p.r(27);
        Module.register("NoteModule", function() {
            var NOTE_PATH = "M9,9H3V8h6L9,9L9,9z M9,7H3V6h6V7z M9,5H3V4h6V5z M8.5,11H2V2h8v7.5 M9,12l2-2V1H1v11";
            /**
         * @command Note
         * @description 设置节点的备注信息
         * @param {string} note 要设置的备注信息，设置为 null 则移除备注信息
         * @state
         *    0: 当前有选中的节点
         *   -1: 当前没有选中的节点
         */
            var NoteCommand = kity.createClass("NoteCommand", {
                base: Command,
                execute: function(minder, note) {
                    var node = minder.getSelectedNode();
                    node.setData("note", note);
                    node.render();
                    node.getMinder().layout(300);
                },
                queryState: function(minder) {
                    return minder.getSelectedNodes().length === 1 ? 0 : -1;
                },
                queryValue: function(minder) {
                    var node = minder.getSelectedNode();
                    return node && node.getData("note");
                }
            });
            var NoteIcon = kity.createClass("NoteIcon", {
                base: kity.Group,
                constructor: function() {
                    this.callBase();
                    this.width = 16;
                    this.height = 17;
                    this.rect = new kity.Rect(16, 17, .5, -8.5, 2).fill("transparent");
                    this.path = new kity.Path().setPathData(NOTE_PATH).setTranslate(2.5, -6.5);
                    this.addShapes([ this.rect, this.path ]);
                    this.on("mouseover", function() {
                        this.rect.fill("rgba(255, 255, 200, .8)");
                    }).on("mouseout", function() {
                        this.rect.fill("transparent");
                    });
                    this.setStyle("cursor", "pointer");
                }
            });
            var NoteIconRenderer = kity.createClass("NoteIconRenderer", {
                base: Renderer,
                create: function(node) {
                    var icon = new NoteIcon();
                    icon.on("mousedown", function(e) {
                        e.preventDefault();
                        node.getMinder().fire("editnoterequest");
                    });
                    icon.on("mouseover", function() {
                        node.getMinder().fire("shownoterequest", {
                            node: node,
                            icon: icon
                        });
                    });
                    icon.on("mouseout", function() {
                        node.getMinder().fire("hidenoterequest", {
                            node: node,
                            icon: icon
                        });
                    });
                    return icon;
                },
                shouldRender: function(node) {
                    return node.getData("note");
                },
                update: function(icon, node, box) {
                    var x = box.right + node.getStyle("space-left");
                    var y = box.cy;
                    icon.path.fill(node.getStyle("color"));
                    icon.setTranslate(x, y);
                    return new kity.Box(x, Math.round(y - icon.height / 2), icon.width, icon.height);
                }
            });
            return {
                renderers: {
                    right: NoteIconRenderer
                },
                commands: {
                    note: NoteCommand
                }
            };
        });
    }
};

//src/module/outline.js
_p[55] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var Minder = _p.r(19);
        var MinderNode = _p.r(21);
        var Command = _p.r(9);
        var Module = _p.r(20);
        var Renderer = _p.r(27);
        var OutlineRenderer = kity.createClass("OutlineRenderer", {
            base: Renderer,
            create: function(node) {
                var outline = new kity.Rect().setId(utils.uuid("node_outline"));
                this.bringToBack = true;
                return outline;
            },
            update: function(outline, node, box) {
                var shape = node.getStyle("shape");
                var paddingLeft = node.getStyle("padding-left"), paddingRight = node.getStyle("padding-right"), paddingTop = node.getStyle("padding-top"), paddingBottom = node.getStyle("padding-bottom");
                var outlineBox = {
                    x: box.x - paddingLeft,
                    y: box.y - paddingTop,
                    width: box.width + paddingLeft + paddingRight,
                    height: box.height + paddingTop + paddingBottom
                };
                var radius = node.getStyle("radius");
                // 天盘图圆形的情况
                if (shape && shape == "circle") {
                    var p = Math.pow;
                    var r = Math.round;
                    radius = r(Math.sqrt(p(outlineBox.width, 2) + p(outlineBox.height, 2)) / 2);
                    outlineBox.x = box.cx - radius;
                    outlineBox.y = box.cy - radius;
                    outlineBox.width = 2 * radius;
                    outlineBox.height = 2 * radius;
                }
                var prefix = node.isSelected() ? node.getMinder().isFocused() ? "selected-" : "blur-selected-" : "";
                outline.setPosition(outlineBox.x, outlineBox.y).setSize(outlineBox.width, outlineBox.height).setRadius(radius).fill(node.getData("background") || node.getStyle(prefix + "background") || node.getStyle("background")).stroke(node.getStyle(prefix + "stroke" || false), node.getStyle(prefix + "stroke-width"));
                return new kity.Box(outlineBox);
            }
        });
        var ShadowRenderer = kity.createClass("ShadowRenderer", {
            base: Renderer,
            create: function(node) {
                this.bringToBack = true;
                return new kity.Rect();
            },
            shouldRender: function(node) {
                return node.getStyle("shadow");
            },
            update: function(shadow, node, box) {
                shadow.setPosition(box.x + 4, box.y + 5).fill(node.getStyle("shadow"));
                var shape = node.getStyle("shape");
                if (!shape) {
                    shadow.setSize(box.width, box.height);
                    shadow.setRadius(node.getStyle("radius"));
                } else if (shape == "circle") {
                    var width = Math.max(box.width, box.height);
                    shadow.setSize(width, width);
                    shadow.setRadius(width / 2);
                }
            }
        });
        var marker = new kity.Marker();
        marker.setWidth(10);
        marker.setHeight(12);
        marker.setRef(0, 0);
        marker.setViewBox(-6, -4, 8, 10);
        marker.addShape(new kity.Path().setPathData("M-5-3l5,3,-5,3").stroke("#33ffff"));
        var wireframeOption = /wire/.test(window.location.href);
        var WireframeRenderer = kity.createClass("WireframeRenderer", {
            base: Renderer,
            create: function() {
                var wireframe = new kity.Group();
                var oxy = this.oxy = new kity.Path().stroke("#f6f").setPathData("M0,-50L0,50M-50,0L50,0");
                var box = this.wireframe = new kity.Rect().stroke("lightgreen");
                var vectorIn = this.vectorIn = new kity.Path().stroke("#66ffff");
                var vectorOut = this.vectorOut = new kity.Path().stroke("#66ffff");
                vectorIn.setMarker(marker, "end");
                vectorOut.setMarker(marker, "end");
                return wireframe.addShapes([ oxy, box, vectorIn, vectorOut ]);
            },
            shouldRender: function() {
                return wireframeOption;
            },
            update: function(created, node, box) {
                this.wireframe.setPosition(box.x, box.y).setSize(box.width, box.height);
                var pin = node.getVertexIn();
                var pout = node.getVertexOut();
                var vin = node.getLayoutVectorIn().normalize(30);
                var vout = node.getLayoutVectorOut().normalize(30);
                this.vectorIn.setPathData([ "M", pin.offset(vin.reverse()), "L", pin ]);
                this.vectorOut.setPathData([ "M", pout, "l", vout ]);
            }
        });
        Module.register("OutlineModule", function() {
            return {
                events: !wireframeOption ? null : {
                    ready: function() {
                        this.getPaper().addResource(marker);
                    },
                    layoutallfinish: function() {
                        this.getRoot().traverse(function(node) {
                            node.getRenderer("WireframeRenderer").update(null, node, node.getContentBox());
                        });
                    }
                },
                renderers: {
                    outline: OutlineRenderer,
                    outside: [ ShadowRenderer, WireframeRenderer ]
                }
            };
        });
    }
};

//src/module/priority.js
_p[56] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var Minder = _p.r(19);
        var MinderNode = _p.r(21);
        var Command = _p.r(9);
        var Module = _p.r(20);
        var Renderer = _p.r(27);
        Module.register("PriorityModule", function() {
            var minder = this;
            // Designed by Akikonata
            // [MASK, BACK]
            var PRIORITY_COLORS = [ null, [ "#FF1200", "#840023" ], // 1 - red
            [ "#0074FF", "#01467F" ], // 2 - blue
            [ "#00AF00", "#006300" ], // 3 - green
            [ "#FF962E", "#B25000" ], // 4 - orange
            [ "#A464FF", "#4720C4" ], // 5 - purple
            [ "#A3A3A3", "#515151" ], // 6,7,8,9 - gray
            [ "#A3A3A3", "#515151" ], [ "#A3A3A3", "#515151" ], [ "#A3A3A3", "#515151" ] ];
            // hue from 1 to 5
            // jscs:disable maximumLineLength
            var BACK_PATH = "M0,13c0,3.866,3.134,7,7,7h6c3.866,0,7-3.134,7-7V7H0V13z";
            var MASK_PATH = "M20,10c0,3.866-3.134,7-7,7H7c-3.866,0-7-3.134-7-7V7c0-3.866,3.134-7,7-7h6c3.866,0,7,3.134,7,7V10z";
            var PRIORITY_DATA = "priority";
            // 优先级图标的图形
            var PriorityIcon = kity.createClass("PriorityIcon", {
                base: kity.Group,
                constructor: function() {
                    this.callBase();
                    this.setSize(20);
                    this.create();
                    this.setId(utils.uuid("node_priority"));
                },
                setSize: function(size) {
                    this.width = this.height = size;
                },
                create: function() {
                    var white, back, mask, number;
                    // 4 layer
                    white = new kity.Path().setPathData(MASK_PATH).fill("white");
                    back = new kity.Path().setPathData(BACK_PATH).setTranslate(.5, .5);
                    mask = new kity.Path().setPathData(MASK_PATH).setOpacity(.8).setTranslate(.5, .5);
                    number = new kity.Text().setX(this.width / 2 - .5).setY(this.height / 2).setTextAnchor("middle").setVerticalAlign("middle").setFontItalic(true).setFontSize(12).fill("white");
                    this.addShapes([ back, mask, number ]);
                    this.mask = mask;
                    this.back = back;
                    this.number = number;
                },
                setValue: function(value) {
                    var back = this.back, mask = this.mask, number = this.number;
                    var color = PRIORITY_COLORS[value];
                    if (color) {
                        back.fill(color[1]);
                        mask.fill(color[0]);
                    }
                    number.setContent(value);
                }
            });
            /**
         * @command Priority
         * @description 设置节点的优先级信息
         * @param {number} value 要设置的优先级（添加一个优先级小图标）
         *     取值为 0 移除优先级信息；
         *     取值为 1 - 9 设置优先级，超过 9 的优先级不渲染
         * @state
         *    0: 当前有选中的节点
         *   -1: 当前没有选中的节点
         */
            var PriorityCommand = kity.createClass("SetPriorityCommand", {
                base: Command,
                execute: function(km, value) {
                    var nodes = km.getSelectedNodes();
                    for (var i = 0; i < nodes.length; i++) {
                        nodes[i].setData(PRIORITY_DATA, value || null).render();
                    }
                    km.layout();
                },
                queryValue: function(km) {
                    var nodes = km.getSelectedNodes();
                    var val;
                    for (var i = 0; i < nodes.length; i++) {
                        val = nodes[i].getData(PRIORITY_DATA);
                        if (val) break;
                    }
                    return val || null;
                },
                queryState: function(km) {
                    return km.getSelectedNodes().length ? 0 : -1;
                }
            });
            return {
                commands: {
                    priority: PriorityCommand
                },
                renderers: {
                    left: kity.createClass("PriorityRenderer", {
                        base: Renderer,
                        create: function(node) {
                            return new PriorityIcon();
                        },
                        shouldRender: function(node) {
                            return node.getData(PRIORITY_DATA);
                        },
                        update: function(icon, node, box) {
                            var data = node.getData(PRIORITY_DATA);
                            var spaceLeft = node.getStyle("space-left"), x, y;
                            icon.setValue(data);
                            x = box.left - icon.width - spaceLeft;
                            y = -icon.height / 2;
                            icon.setTranslate(x, y);
                            return new kity.Box({
                                x: x,
                                y: y,
                                width: icon.width,
                                height: icon.height
                            });
                        }
                    })
                }
            };
        });
    }
};

//src/module/progress.js
_p[57] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var Minder = _p.r(19);
        var MinderNode = _p.r(21);
        var Command = _p.r(9);
        var Module = _p.r(20);
        var Renderer = _p.r(27);
        Module.register("ProgressModule", function() {
            var minder = this;
            var PROGRESS_DATA = "progress";
            // Designed by Akikonata
            var BG_COLOR = "#FFED83";
            var PIE_COLOR = "#43BC00";
            var SHADOW_PATH = "M10,3c4.418,0,8,3.582,8,8h1c0-5.523-3.477-10-9-10S1,5.477,1,11h1C2,6.582,5.582,3,10,3z";
            var SHADOW_COLOR = "#8E8E8E";
            // jscs:disable maximumLineLength
            var FRAME_PATH = "M10,0C4.477,0,0,4.477,0,10c0,5.523,4.477,10,10,10s10-4.477,10-10C20,4.477,15.523,0,10,0zM10,18c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S14.418,18,10,18z";
            var FRAME_GRAD = new kity.LinearGradient().pipe(function(g) {
                g.setStartPosition(0, 0);
                g.setEndPosition(0, 1);
                g.addStop(0, "#fff");
                g.addStop(1, "#ccc");
            });
            var CHECK_PATH = "M15.812,7.896l-6.75,6.75l-4.5-4.5L6.25,8.459l2.812,2.803l5.062-5.053L15.812,7.896z";
            var CHECK_COLOR = "#EEE";
            minder.getPaper().addResource(FRAME_GRAD);
            // 进度图标的图形
            var ProgressIcon = kity.createClass("ProgressIcon", {
                base: kity.Group,
                constructor: function(value) {
                    this.callBase();
                    this.setSize(20);
                    this.create();
                    this.setValue(value);
                    this.setId(utils.uuid("node_progress"));
                    this.translate(.5, .5);
                },
                setSize: function(size) {
                    this.width = this.height = size;
                },
                create: function() {
                    var bg, pie, shadow, frame, check;
                    bg = new kity.Circle(9).fill(BG_COLOR);
                    pie = new kity.Pie(9, 0).fill(PIE_COLOR);
                    shadow = new kity.Path().setPathData(SHADOW_PATH).setTranslate(-10, -10).fill(SHADOW_COLOR);
                    frame = new kity.Path().setTranslate(-10, -10).setPathData(FRAME_PATH).fill(FRAME_GRAD);
                    check = new kity.Path().setTranslate(-10, -10).setPathData(CHECK_PATH).fill(CHECK_COLOR);
                    this.addShapes([ bg, pie, shadow, check, frame ]);
                    this.pie = pie;
                    this.check = check;
                },
                setValue: function(value) {
                    this.pie.setAngle(-360 * (value - 1) / 8);
                    this.check.setVisible(value == 9);
                }
            });
            /**
         * @command Progress
         * @description 设置节点的进度信息（添加一个进度小图标）
         * @param {number} value 要设置的进度
         *     取值为 0 移除进度信息；
         *     取值为 1 表示未开始；
         *     取值为 2 表示完成 1/8；
         *     取值为 3 表示完成 2/8；
         *     取值为 4 表示完成 3/8；
         *     其余类推，取值为 9 表示全部完成
         * @state
         *    0: 当前有选中的节点
         *   -1: 当前没有选中的节点
         */
            var ProgressCommand = kity.createClass("ProgressCommand", {
                base: Command,
                execute: function(km, value) {
                    var nodes = km.getSelectedNodes();
                    for (var i = 0; i < nodes.length; i++) {
                        nodes[i].setData(PROGRESS_DATA, value || null).render();
                    }
                    km.layout();
                },
                queryValue: function(km) {
                    var nodes = km.getSelectedNodes();
                    var val;
                    for (var i = 0; i < nodes.length; i++) {
                        val = nodes[i].getData(PROGRESS_DATA);
                        if (val) break;
                    }
                    return val || null;
                },
                queryState: function(km) {
                    return km.getSelectedNodes().length ? 0 : -1;
                }
            });
            return {
                commands: {
                    progress: ProgressCommand
                },
                renderers: {
                    left: kity.createClass("ProgressRenderer", {
                        base: Renderer,
                        create: function(node) {
                            return new ProgressIcon();
                        },
                        shouldRender: function(node) {
                            return node.getData(PROGRESS_DATA);
                        },
                        update: function(icon, node, box) {
                            var data = node.getData(PROGRESS_DATA);
                            var spaceLeft = node.getStyle("space-left");
                            var x, y;
                            icon.setValue(data);
                            x = box.left - icon.width - spaceLeft;
                            y = -icon.height / 2;
                            icon.setTranslate(x + icon.width / 2, y + icon.height / 2);
                            return new kity.Box(x, y, icon.width, icon.height);
                        }
                    })
                }
            };
        });
    }
};

//src/module/resource.js
_p[58] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var Minder = _p.r(19);
        var MinderNode = _p.r(21);
        var Command = _p.r(9);
        var Module = _p.r(20);
        var Renderer = _p.r(27);
        Module.register("Resource", function() {
            // String Hash
            // https://github.com/drostie/sha3-js/edit/master/blake32.min.js
            var blake32 = function() {
                var k, g, r, l, m, o, p, q, t, w, x;
                x = 4 * (1 << 30);
                k = [ 1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225 ];
                m = [ 608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479 ];
                w = function(i) {
                    if (i < 0) {
                        i += x;
                    }
                    return ("00000000" + i.toString(16)).slice(-8);
                };
                o = [ [ 16, 50, 84, 118, 152, 186, 220, 254 ], [ 174, 132, 249, 109, 193, 32, 123, 53 ], [ 139, 12, 37, 223, 234, 99, 23, 73 ], [ 151, 19, 205, 235, 98, 165, 4, 143 ], [ 9, 117, 66, 250, 30, 203, 134, 211 ], [ 194, 166, 176, 56, 212, 87, 239, 145 ], [ 92, 241, 222, 164, 112, 54, 41, 184 ], [ 189, 231, 28, 147, 5, 79, 104, 162 ], [ 246, 158, 59, 128, 44, 125, 65, 90 ], [ 42, 72, 103, 81, 191, 233, 195, 13 ] ];
                p = function(a, b, n) {
                    var s = q[a] ^ q[b];
                    q[a] = s >>> n | s << 32 - n;
                };
                g = function(i, a, b, c, d) {
                    var u = l + o[r][i] % 16, v = l + (o[r][i] >> 4);
                    a %= 4;
                    b = 4 + b % 4;
                    c = 8 + c % 4;
                    d = 12 + d % 4;
                    q[a] += q[b] + (t[u] ^ m[v % 16]);
                    p(d, a, 16);
                    q[c] += q[d];
                    p(b, c, 12);
                    q[a] += q[b] + (t[v] ^ m[u % 16]);
                    p(d, a, 8);
                    q[c] += q[d];
                    p(b, c, 7);
                };
                return function(a, b) {
                    if (!(b instanceof Array && b.length === 4)) {
                        b = [ 0, 0, 0, 0 ];
                    }
                    var c, d, e, L, f, h, j, i;
                    d = k.slice(0);
                    c = m.slice(0, 8);
                    for (r = 0; r < 4; r += 1) {
                        c[r] ^= b[r];
                    }
                    e = a.length * 16;
                    f = e % 512 > 446 || e % 512 === 0 ? 0 : e;
                    if (e % 512 === 432) {
                        a += "老";
                    } else {
                        a += "耀";
                        while (a.length % 32 !== 27) {
                            a += "\0";
                        }
                        a += "";
                    }
                    t = [];
                    for (i = 0; i < a.length; i += 2) {
                        t.push(a.charCodeAt(i) * 65536 + a.charCodeAt(i + 1));
                    }
                    t.push(0);
                    t.push(e);
                    h = t.length - 16;
                    j = 0;
                    for (l = 0; l < t.length; l += 16) {
                        j += 512;
                        L = l === h ? f : Math.min(e, j);
                        q = d.concat(c);
                        q[12] ^= L;
                        q[13] ^= L;
                        for (r = 0; r < 10; r += 1) {
                            for (i = 0; i < 8; i += 1) {
                                if (i < 4) {
                                    g(i, i, i, i, i);
                                } else {
                                    g(i, i, i + 1, i + 2, i + 3);
                                }
                            }
                        }
                        for (i = 0; i < 8; i += 1) {
                            d[i] ^= b[i % 4] ^ q[i] ^ q[i + 8];
                        }
                    }
                    return d.map(w).join("");
                };
            }();
            /**
         * 自动使用的颜色序列
         */
            var RESOURCE_COLOR_SERIES = [ 51, 303, 75, 200, 157, 0, 26, 254 ].map(function(h) {
                return kity.Color.createHSL(h, 100, 85);
            });
            /**
         * 在 Minder 上拓展一些关于资源的支持接口
         */
            kity.extendClass(Minder, {
                /**
             * 获取字符串的哈希值
             *
             * @param {String} str
             * @return {Number} hashCode
             */
                getHashCode: function(str) {
                    str = blake32(str);
                    var hash = 1315423911, i, ch;
                    for (i = str.length - 1; i >= 0; i--) {
                        ch = str.charCodeAt(i);
                        hash ^= (hash << 5) + ch + (hash >> 2);
                    }
                    return hash & 2147483647;
                },
                /**
             * 获取脑图中某个资源对应的颜色
             *
             * 如果存在同名资源，则返回已经分配给该资源的颜色，否则分配给该资源一个颜色，并且返回
             *
             * 如果资源数超过颜色序列数量，返回哈希颜色
             *
             * @param {String} resource 资源名称
             * @return {Color}
             */
                getResourceColor: function(resource) {
                    var colorMapping = this._getResourceColorIndexMapping();
                    var nextIndex;
                    if (!Object.prototype.hasOwnProperty.call(colorMapping, resource)) {
                        // 找不到找下个可用索引
                        nextIndex = this._getNextResourceColorIndex();
                        colorMapping[resource] = nextIndex;
                    }
                    // 资源过多，找不到可用索引颜色，统一返回哈希函数得到的颜色
                    return RESOURCE_COLOR_SERIES[colorMapping[resource]] || kity.Color.createHSL(Math.floor(this.getHashCode(resource) / 2147483647 * 359), 100, 85);
                },
                /**
             * 获得已使用的资源的列表
             *
             * @return {Array}
             */
                getUsedResource: function() {
                    var mapping = this._getResourceColorIndexMapping();
                    var used = [], resource;
                    for (resource in mapping) {
                        if (Object.prototype.hasOwnProperty.call(mapping, resource)) {
                            used.push(resource);
                        }
                    }
                    return used;
                },
                /**
             * 获取脑图下一个可用的资源颜色索引
             *
             * @return {int}
             */
                _getNextResourceColorIndex: function() {
                    // 获取现有颜色映射
                    //     resource => color_index
                    var colorMapping = this._getResourceColorIndexMapping();
                    var resource, used, i;
                    used = [];
                    // 抽取已经使用的值到 used 数组
                    for (resource in colorMapping) {
                        if (Object.prototype.hasOwnProperty.call(colorMapping, resource)) {
                            used.push(colorMapping[resource]);
                        }
                    }
                    // 枚举所有的可用值，如果还没被使用，返回
                    for (i = 0; i < RESOURCE_COLOR_SERIES.length; i++) {
                        if (!~used.indexOf(i)) return i;
                    }
                    // 没有可用的颜色了
                    return -1;
                },
                // 获取现有颜色映射
                //     resource => color_index
                _getResourceColorIndexMapping: function() {
                    return this._resourceColorMapping || (this._resourceColorMapping = {});
                }
            });
            /**
         * @class 设置资源的命令
         *
         * @example
         *
         * // 设置选中节点资源为 "张三"
         * minder.execCommand('resource', ['张三']);
         *
         * // 添加资源 "李四" 到选中节点
         * var resource = minder.queryCommandValue();
         * resource.push('李四');
         * minder.execCommand('resource', resource);
         *
         * // 清除选中节点的资源
         * minder.execCommand('resource', null);
         */
            var ResourceCommand = kity.createClass("ResourceCommand", {
                base: Command,
                execute: function(minder, resource) {
                    var nodes = minder.getSelectedNodes();
                    if (typeof resource == "string") {
                        resource = [ resource ];
                    }
                    nodes.forEach(function(node) {
                        node.setData("resource", resource).render();
                    });
                    minder.layout(200);
                },
                queryValue: function(minder) {
                    var nodes = minder.getSelectedNodes();
                    var resource = [];
                    nodes.forEach(function(node) {
                        var nodeResource = node.getData("resource");
                        if (!nodeResource) return;
                        nodeResource.forEach(function(name) {
                            if (!~resource.indexOf(name)) {
                                resource.push(name);
                            }
                        });
                    });
                    return resource;
                },
                queryState: function(km) {
                    return km.getSelectedNode() ? 0 : -1;
                }
            });
            /**
         * @class 资源的覆盖图形
         *
         * 该类为一个资源以指定的颜色渲染一个动态的覆盖图形
         */
            var ResourceOverlay = kity.createClass("ResourceOverlay", {
                base: kity.Group,
                constructor: function() {
                    this.callBase();
                    var text, rect;
                    rect = this.rect = new kity.Rect().setRadius(4);
                    text = this.text = new kity.Text().setFontSize(12).setVerticalAlign("middle");
                    this.addShapes([ rect, text ]);
                },
                setValue: function(resourceName, color) {
                    var paddingX = 8, paddingY = 4, borderRadius = 4;
                    var text, box, rect;
                    text = this.text;
                    if (resourceName == this.lastResourceName) {
                        box = this.lastBox;
                    } else {
                        text.setContent(resourceName);
                        box = text.getBoundaryBox();
                        this.lastResourceName = resourceName;
                        this.lastBox = box;
                    }
                    text.setX(paddingX).fill(color.dec("l", 70));
                    rect = this.rect;
                    rect.setPosition(0, box.y - paddingY);
                    this.width = Math.round(box.width + paddingX * 2);
                    this.height = Math.round(box.height + paddingY * 2);
                    rect.setSize(this.width, this.height);
                    rect.fill(color);
                }
            });
            /**
         * @class 资源渲染器
         */
            var ResourceRenderer = kity.createClass("ResourceRenderer", {
                base: Renderer,
                create: function(node) {
                    this.overlays = [];
                    return new kity.Group();
                },
                shouldRender: function(node) {
                    return node.getData("resource") && node.getData("resource").length;
                },
                update: function(container, node, box) {
                    var spaceRight = node.getStyle("space-right");
                    var overlays = this.overlays;
                    /*  修复 resource 数组中出现 null 的 bug
                 *  @Author zhangbobell
                 *  @date 2016-01-15
                 */
                    var resource = node.getData("resource").filter(function(ele) {
                        return ele !== null;
                    });
                    if (resource.length === 0) {
                        return;
                    }
                    var minder = node.getMinder();
                    var i, overlay, x;
                    x = 0;
                    for (i = 0; i < resource.length; i++) {
                        x += spaceRight;
                        overlay = overlays[i];
                        if (!overlay) {
                            overlay = new ResourceOverlay();
                            overlays.push(overlay);
                            container.addShape(overlay);
                        }
                        overlay.setVisible(true);
                        overlay.setValue(resource[i], minder.getResourceColor(resource[i]));
                        overlay.setTranslate(x, -1);
                        x += overlay.width;
                    }
                    while (overlay = overlays[i++]) overlay.setVisible(false);
                    container.setTranslate(box.right, 0);
                    return new kity.Box({
                        x: box.right,
                        y: Math.round(-overlays[0].height / 2),
                        width: x,
                        height: overlays[0].height
                    });
                }
            });
            return {
                commands: {
                    resource: ResourceCommand
                },
                renderers: {
                    right: ResourceRenderer
                }
            };
        });
    }
};

//src/module/select.js
_p[59] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var Minder = _p.r(19);
        var MinderNode = _p.r(21);
        var Command = _p.r(9);
        var Module = _p.r(20);
        var Renderer = _p.r(27);
        Module.register("Select", function() {
            var minder = this;
            var rc = minder.getRenderContainer();
            // 在实例上渲染框选矩形、计算框选范围的对象
            var marqueeActivator = function() {
                // 记录选区的开始位置（mousedown的位置）
                var startPosition = null;
                // 选区的图形
                var marqueeShape = new kity.Path();
                // 标记是否已经启动框选状态
                //    并不是 mousedown 发生之后就启动框选状态，而是检测到移动了一定的距离（MARQUEE_MODE_THRESHOLD）之后
                var marqueeMode = false;
                var MARQUEE_MODE_THRESHOLD = 10;
                return {
                    selectStart: function(e) {
                        // 只接受左键
                        if (e.originEvent.button || e.originEvent.altKey) return;
                        // 清理不正确状态
                        if (startPosition) {
                            return this.selectEnd();
                        }
                        startPosition = e.getPosition(rc).round();
                    },
                    selectMove: function(e) {
                        if (minder.getStatus() == "textedit") {
                            return;
                        }
                        if (!startPosition) return;
                        var p1 = startPosition, p2 = e.getPosition(rc);
                        // 检测是否要进入选区模式
                        if (!marqueeMode) {
                            // 距离没达到阈值，退出
                            if (kity.Vector.fromPoints(p1, p2).length() < MARQUEE_MODE_THRESHOLD) {
                                return;
                            }
                            // 已经达到阈值，记录下来并且重置选区形状
                            marqueeMode = true;
                            rc.addShape(marqueeShape);
                            marqueeShape.fill(minder.getStyle("marquee-background")).stroke(minder.getStyle("marquee-stroke")).setOpacity(.8).getDrawer().clear();
                        }
                        var marquee = new kity.Box(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y), selectedNodes = [];
                        // 使其犀利
                        marquee.left = Math.round(marquee.left);
                        marquee.top = Math.round(marquee.top);
                        marquee.right = Math.round(marquee.right);
                        marquee.bottom = Math.round(marquee.bottom);
                        // 选区形状更新
                        marqueeShape.getDrawer().pipe(function() {
                            this.clear();
                            this.moveTo(marquee.left, marquee.top);
                            this.lineTo(marquee.right, marquee.top);
                            this.lineTo(marquee.right, marquee.bottom);
                            this.lineTo(marquee.left, marquee.bottom);
                            this.close();
                        });
                        // 计算选中范围
                        minder.getRoot().traverse(function(node) {
                            var renderBox = node.getLayoutBox();
                            if (!renderBox.intersect(marquee).isEmpty()) {
                                selectedNodes.push(node);
                            }
                        });
                        // 应用选中范围
                        minder.select(selectedNodes, true);
                        // 清除多余的东西
                        window.getSelection().removeAllRanges();
                    },
                    selectEnd: function(e) {
                        if (startPosition) {
                            startPosition = null;
                        }
                        if (marqueeMode) {
                            marqueeShape.fadeOut(200, "ease", 0, function() {
                                if (marqueeShape.remove) marqueeShape.remove();
                            });
                            marqueeMode = false;
                        }
                    }
                };
            }();
            var lastDownNode = null, lastDownPosition = null;
            return {
                init: function() {
                    window.addEventListener("mouseup", function() {
                        marqueeActivator.selectEnd();
                    });
                },
                events: {
                    mousedown: function(e) {
                        var downNode = e.getTargetNode();
                        // 没有点中节点：
                        //     清除选中状态，并且标记选区开始位置
                        if (!downNode) {
                            this.removeAllSelectedNodes();
                            marqueeActivator.selectStart(e);
                            this.setStatus("normal");
                        } else if (e.isShortcutKey("Ctrl")) {
                            this.toggleSelect(downNode);
                        } else if (!downNode.isSelected()) {
                            this.select(downNode, true);
                        } else if (!this.isSingleSelect()) {
                            lastDownNode = downNode;
                            lastDownPosition = e.getPosition();
                        }
                    },
                    mousemove: marqueeActivator.selectMove,
                    mouseup: function(e) {
                        var upNode = e.getTargetNode();
                        // 如果 mouseup 发生在 lastDownNode 外，是无需理会的
                        if (upNode && upNode == lastDownNode) {
                            var upPosition = e.getPosition();
                            var movement = kity.Vector.fromPoints(lastDownPosition, upPosition);
                            if (movement.length() < 1) this.select(lastDownNode, true);
                            lastDownNode = null;
                        }
                        // 清理一下选择状态
                        marqueeActivator.selectEnd(e);
                    },
                    //全选操作
                    "normal.keydown": function(e) {
                        if (e.isShortcutKey("ctrl+a")) {
                            var selectedNodes = [];
                            this.getRoot().traverse(function(node) {
                                selectedNodes.push(node);
                            });
                            this.select(selectedNodes, true);
                            e.preventDefault();
                        }
                    }
                }
            };
        });
    }
};

//src/module/style.js
_p[60] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var Minder = _p.r(19);
        var MinderNode = _p.r(21);
        var Command = _p.r(9);
        var Module = _p.r(20);
        var Renderer = _p.r(27);
        Module.register("StyleModule", function() {
            var styleNames = [ "font-size", "font-family", "font-weight", "font-style", "background", "color" ];
            var styleClipBoard = null;
            function hasStyle(node) {
                var data = node.getData();
                for (var i = 0; i < styleNames.length; i++) {
                    if (styleNames[i] in data) return true;
                }
            }
            return {
                commands: {
                    /**
                 * @command CopyStyle
                 * @description 拷贝选中节点的当前样式，包括字体、字号、粗体、斜体、背景色、字体色
                 * @state
                 *   0: 当前有选中的节点
                 *  -1: 当前没有选中的节点
                 */
                    copystyle: kity.createClass("CopyStyleCommand", {
                        base: Command,
                        execute: function(minder) {
                            var node = minder.getSelectedNode();
                            var nodeData = node.getData();
                            styleClipBoard = {};
                            styleNames.forEach(function(name) {
                                if (name in nodeData) styleClipBoard[name] = nodeData[name]; else {
                                    styleClipBoard[name] = null;
                                    delete styleClipBoard[name];
                                }
                            });
                            return styleClipBoard;
                        },
                        queryState: function(minder) {
                            var nodes = minder.getSelectedNodes();
                            if (nodes.length !== 1) return -1;
                            return hasStyle(nodes[0]) ? 0 : -1;
                        }
                    }),
                    /**
                 * @command PasteStyle
                 * @description 粘贴已拷贝的样式到选中的节点上，包括字体、字号、粗体、斜体、背景色、字体色
                 * @state
                 *   0: 当前有选中的节点，并且已经有复制的样式
                 *  -1: 当前没有选中的节点，或者没有复制的样式
                 */
                    pastestyle: kity.createClass("PastStyleCommand", {
                        base: Command,
                        execute: function(minder) {
                            minder.getSelectedNodes().forEach(function(node) {
                                for (var name in styleClipBoard) {
                                    if (styleClipBoard.hasOwnProperty(name)) node.setData(name, styleClipBoard[name]);
                                }
                            });
                            minder.renderNodeBatch(minder.getSelectedNodes());
                            minder.layout(300);
                            return styleClipBoard;
                        },
                        queryState: function(minder) {
                            return styleClipBoard && minder.getSelectedNodes().length ? 0 : -1;
                        }
                    }),
                    /**
                 * @command ClearStyle
                 * @description 移除选中节点的样式，包括字体、字号、粗体、斜体、背景色、字体色
                 * @state
                 *   0: 当前有选中的节点，并且至少有一个设置了至少一种样式
                 *  -1: 其它情况
                 */
                    clearstyle: kity.createClass("ClearStyleCommand", {
                        base: Command,
                        execute: function(minder) {
                            minder.getSelectedNodes().forEach(function(node) {
                                styleNames.forEach(function(name) {
                                    node.setData(name);
                                });
                            });
                            minder.renderNodeBatch(minder.getSelectedNodes());
                            minder.layout(300);
                            return styleClipBoard;
                        },
                        queryState: function(minder) {
                            var nodes = minder.getSelectedNodes();
                            if (!nodes.length) return -1;
                            for (var i = 0; i < nodes.length; i++) {
                                if (hasStyle(nodes[i])) return 0;
                            }
                            return -1;
                        }
                    })
                }
            };
        });
    }
};

//src/module/text.js
_p[61] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var Minder = _p.r(19);
        var MinderNode = _p.r(21);
        var Command = _p.r(9);
        var Module = _p.r(20);
        var Renderer = _p.r(27);
        /**
     * 针对不同系统、不同浏览器、不同字体做居中兼容性处理
     * 暂时未增加Linux的处理
     */
        var FONT_ADJUST = {
            safari: {
                "微软雅黑,Microsoft YaHei": -.17,
                "楷体,楷体_GB2312,SimKai": -.1,
                "隶书, SimLi": -.1,
                "comic sans ms": -.23,
                "impact,chicago": -.15,
                "times new roman": -.1,
                "arial black,avant garde": -.17,
                default: 0
            },
            ie: {
                10: {
                    "微软雅黑,Microsoft YaHei": -.17,
                    "comic sans ms": -.17,
                    "impact,chicago": -.08,
                    "times new roman": .04,
                    "arial black,avant garde": -.17,
                    default: -.15
                },
                11: {
                    "微软雅黑,Microsoft YaHei": -.17,
                    "arial,helvetica,sans-serif": -.17,
                    "comic sans ms": -.17,
                    "impact,chicago": -.08,
                    "times new roman": .04,
                    "sans-serif": -.16,
                    "arial black,avant garde": -.17,
                    default: -.15
                }
            },
            edge: {
                "微软雅黑,Microsoft YaHei": -.15,
                "arial,helvetica,sans-serif": -.17,
                "comic sans ms": -.17,
                "impact,chicago": -.08,
                "sans-serif": -.16,
                "arial black,avant garde": -.17,
                default: -.15
            },
            sg: {
                "微软雅黑,Microsoft YaHei": -.15,
                "arial,helvetica,sans-serif": -.05,
                "comic sans ms": -.22,
                "impact,chicago": -.16,
                "times new roman": -.03,
                "arial black,avant garde": -.22,
                default: -.15
            },
            chrome: {
                Mac: {
                    "andale mono": -.05,
                    "comic sans ms": -.3,
                    "impact,chicago": -.13,
                    "times new roman": -.1,
                    "arial black,avant garde": -.17,
                    default: 0
                },
                Win: {
                    "微软雅黑,Microsoft YaHei": -.15,
                    "arial,helvetica,sans-serif": -.02,
                    "arial black,avant garde": -.2,
                    "comic sans ms": -.2,
                    "impact,chicago": -.12,
                    "times new roman": -.02,
                    default: -.15
                },
                Lux: {
                    "andale mono": -.05,
                    "comic sans ms": -.3,
                    "impact,chicago": -.13,
                    "times new roman": -.1,
                    "arial black,avant garde": -.17,
                    default: 0
                }
            },
            firefox: {
                Mac: {
                    "微软雅黑,Microsoft YaHei": -.2,
                    "宋体,SimSun": .05,
                    "comic sans ms": -.2,
                    "impact,chicago": -.15,
                    "arial black,avant garde": -.17,
                    "times new roman": -.1,
                    default: .05
                },
                Win: {
                    "微软雅黑,Microsoft YaHei": -.16,
                    "andale mono": -.17,
                    "arial,helvetica,sans-serif": -.17,
                    "comic sans ms": -.22,
                    "impact,chicago": -.23,
                    "times new roman": -.22,
                    "sans-serif": -.22,
                    "arial black,avant garde": -.17,
                    default: -.16
                },
                Lux: {
                    "宋体,SimSun": -.2,
                    "微软雅黑,Microsoft YaHei": -.2,
                    "黑体, SimHei": -.2,
                    "隶书, SimLi": -.2,
                    "楷体,楷体_GB2312,SimKai": -.2,
                    "andale mono": -.2,
                    "arial,helvetica,sans-serif": -.2,
                    "comic sans ms": -.2,
                    "impact,chicago": -.2,
                    "times new roman": -.2,
                    "sans-serif": -.2,
                    "arial black,avant garde": -.2,
                    default: -.16
                }
            }
        };
        var TextRenderer = kity.createClass("TextRenderer", {
            base: Renderer,
            create: function() {
                return new kity.Group().setId(utils.uuid("node_text"));
            },
            update: function(textGroup, node) {
                function getDataOrStyle(name) {
                    return node.getData(name) || node.getStyle(name);
                }
                var nodeText = node.getText();
                var textArr = nodeText ? nodeText.split("\n") : [ " " ];
                var lineHeight = node.getStyle("line-height");
                var fontSize = getDataOrStyle("font-size");
                var fontFamily = getDataOrStyle("font-family") || "default";
                var height = lineHeight * fontSize * textArr.length - (lineHeight - 1) * fontSize;
                var yStart = -height / 2;
                var Browser = kity.Browser;
                var adjust;
                if (Browser.chrome || Browser.opera || Browser.bd || Browser.lb === "chrome") {
                    adjust = FONT_ADJUST["chrome"][Browser.platform][fontFamily];
                } else if (Browser.gecko) {
                    adjust = FONT_ADJUST["firefox"][Browser.platform][fontFamily];
                } else if (Browser.sg) {
                    adjust = FONT_ADJUST["sg"][fontFamily];
                } else if (Browser.safari) {
                    adjust = FONT_ADJUST["safari"][fontFamily];
                } else if (Browser.ie) {
                    adjust = FONT_ADJUST["ie"][Browser.version][fontFamily];
                } else if (Browser.edge) {
                    adjust = FONT_ADJUST["edge"][fontFamily];
                } else if (Browser.lb) {
                    // 猎豹浏览器的ie内核兼容性模式下
                    adjust = .9;
                }
                textGroup.setTranslate(0, (adjust || 0) * fontSize);
                var rBox = new kity.Box(), r = Math.round;
                this.setTextStyle(node, textGroup);
                var textLength = textArr.length;
                var textGroupLength = textGroup.getItems().length;
                var i, ci, textShape, text;
                if (textLength < textGroupLength) {
                    for (i = textLength, ci; ci = textGroup.getItem(i); ) {
                        textGroup.removeItem(i);
                    }
                } else if (textLength > textGroupLength) {
                    var growth = textLength - textGroupLength;
                    while (growth--) {
                        textShape = new kity.Text().setAttr("text-rendering", "inherit");
                        if (kity.Browser.ie || kity.Browser.edge) {
                            textShape.setVerticalAlign("top");
                        } else {
                            textShape.setAttr("dominant-baseline", "text-before-edge");
                        }
                        textGroup.addItem(textShape);
                    }
                }
                for (i = 0, text, textShape; text = textArr[i], textShape = textGroup.getItem(i); i++) {
                    textShape.setContent(text);
                    if (kity.Browser.ie || kity.Browser.edge) {
                        textShape.fixPosition();
                    }
                }
                this.setTextStyle(node, textGroup);
                var textHash = node.getText() + [ "font-size", "font-name", "font-weight", "font-style" ].map(getDataOrStyle).join("/");
                if (node._currentTextHash == textHash && node._currentTextGroupBox) return node._currentTextGroupBox;
                node._currentTextHash = textHash;
                return function() {
                    textGroup.eachItem(function(i, textShape) {
                        var y = yStart + i * fontSize * lineHeight;
                        textShape.setY(y);
                        var bbox = textShape.getBoundaryBox();
                        rBox = rBox.merge(new kity.Box(0, y, bbox.height && bbox.width || 1, fontSize));
                    });
                    var nBox = new kity.Box(r(rBox.x), r(rBox.y), r(rBox.width), r(rBox.height));
                    node._currentTextGroupBox = nBox;
                    return nBox;
                };
            },
            setTextStyle: function(node, text) {
                var hooks = TextRenderer._styleHooks;
                hooks.forEach(function(hook) {
                    hook(node, text);
                });
            }
        });
        var TextCommand = kity.createClass({
            base: Command,
            execute: function(minder, text) {
                var node = minder.getSelectedNode();
                if (node) {
                    node.setText(text);
                    node.render();
                    minder.layout();
                }
            },
            queryState: function(minder) {
                return minder.getSelectedNodes().length == 1 ? 0 : -1;
            },
            queryValue: function(minder) {
                var node = minder.getSelectedNode();
                return node ? node.getText() : null;
            }
        });
        utils.extend(TextRenderer, {
            _styleHooks: [],
            registerStyleHook: function(fn) {
                TextRenderer._styleHooks.push(fn);
            }
        });
        kity.extendClass(MinderNode, {
            getTextGroup: function() {
                return this.getRenderer("TextRenderer").getRenderShape();
            }
        });
        Module.register("text", {
            commands: {
                text: TextCommand
            },
            renderers: {
                center: TextRenderer
            }
        });
        module.exports = TextRenderer;
    }
};

//src/module/view.js
_p[62] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var Minder = _p.r(19);
        var MinderNode = _p.r(21);
        var Command = _p.r(9);
        var Module = _p.r(20);
        var Renderer = _p.r(27);
        var ViewDragger = kity.createClass("ViewDragger", {
            constructor: function(minder) {
                this._minder = minder;
                this._enabled = false;
                this._bind();
                var me = this;
                this._minder.getViewDragger = function() {
                    return me;
                };
                this.setEnabled(false);
            },
            isEnabled: function() {
                return this._enabled;
            },
            setEnabled: function(value) {
                var paper = this._minder.getPaper();
                paper.setStyle("cursor", value ? "pointer" : "default");
                paper.setStyle("cursor", value ? "-webkit-grab" : "default");
                this._enabled = value;
            },
            timeline: function() {
                return this._moveTimeline;
            },
            move: function(offset, duration) {
                var minder = this._minder;
                var targetPosition = this.getMovement().offset(offset);
                this.moveTo(targetPosition, duration);
            },
            moveTo: function(position, duration) {
                if (duration) {
                    var dragger = this;
                    if (this._moveTimeline) this._moveTimeline.stop();
                    this._moveTimeline = this._minder.getRenderContainer().animate(new kity.Animator(this.getMovement(), position, function(target, value) {
                        dragger.moveTo(value);
                    }), duration, "easeOutCubic").timeline();
                    this._moveTimeline.on("finish", function() {
                        dragger._moveTimeline = null;
                    });
                    return this;
                }
                this._minder.getRenderContainer().setTranslate(position.round());
                this._minder.fire("viewchange");
            },
            getMovement: function() {
                var translate = this._minder.getRenderContainer().transform.translate;
                return translate ? translate[0] : new kity.Point();
            },
            getView: function() {
                var minder = this._minder;
                var c = minder._lastClientSize || {
                    width: minder.getRenderTarget().clientWidth,
                    height: minder.getRenderTarget().clientHeight
                };
                var m = this.getMovement();
                var box = new kity.Box(0, 0, c.width, c.height);
                var viewMatrix = minder.getPaper().getViewPortMatrix();
                return viewMatrix.inverse().translate(-m.x, -m.y).transformBox(box);
            },
            _bind: function() {
                var dragger = this, isTempDrag = false, lastPosition = null, currentPosition = null;
                function dragEnd(e) {
                    if (!lastPosition) return;
                    lastPosition = null;
                    e.stopPropagation();
                    // 临时拖动需要还原状态
                    if (isTempDrag) {
                        dragger.setEnabled(false);
                        isTempDrag = false;
                        if (dragger._minder.getStatus() == "hand") dragger._minder.rollbackStatus();
                    }
                    var paper = dragger._minder.getPaper();
                    paper.setStyle("cursor", dragger._minder.getStatus() == "hand" ? "-webkit-grab" : "default");
                    dragger._minder.fire("viewchanged");
                }
                this._minder.on("normal.mousedown normal.touchstart " + "inputready.mousedown inputready.touchstart " + "readonly.mousedown readonly.touchstart", function(e) {
                    if (e.originEvent.button == 2) {
                        e.originEvent.preventDefault();
                    }
                    // 点击未选中的根节点临时开启
                    if (e.getTargetNode() == this.getRoot() || e.originEvent.button == 2 || e.originEvent.altKey) {
                        lastPosition = e.getPosition("view");
                        isTempDrag = true;
                    }
                }).on("normal.mousemove normal.touchmove " + "readonly.mousemove readonly.touchmove " + "inputready.mousemove inputready.touchmove", function(e) {
                    if (e.type == "touchmove") {
                        e.preventDefault();
                    }
                    if (!isTempDrag) return;
                    var offset = kity.Vector.fromPoints(lastPosition, e.getPosition("view"));
                    if (offset.length() > 10) {
                        this.setStatus("hand", true);
                        var paper = dragger._minder.getPaper();
                        paper.setStyle("cursor", "-webkit-grabbing");
                    }
                }).on("hand.beforemousedown hand.beforetouchstart", function(e) {
                    // 已经被用户打开拖放模式
                    if (dragger.isEnabled()) {
                        lastPosition = e.getPosition("view");
                        e.stopPropagation();
                        var paper = dragger._minder.getPaper();
                        paper.setStyle("cursor", "-webkit-grabbing");
                    }
                }).on("hand.beforemousemove hand.beforetouchmove", function(e) {
                    if (lastPosition) {
                        currentPosition = e.getPosition("view");
                        // 当前偏移加上历史偏移
                        var offset = kity.Vector.fromPoints(lastPosition, currentPosition);
                        dragger.move(offset);
                        e.stopPropagation();
                        e.preventDefault();
                        e.originEvent.preventDefault();
                        lastPosition = currentPosition;
                    }
                }).on("mouseup touchend", dragEnd);
                window.addEventListener("mouseup", dragEnd);
                this._minder.on("contextmenu", function(e) {
                    e.preventDefault();
                });
            }
        });
        Module.register("View", function() {
            var km = this;
            /**
         * @command Hand
         * @description 切换抓手状态，抓手状态下，鼠标拖动将拖动视野，而不是创建选区
         * @state
         *   0: 当前不是抓手状态
         *   1: 当前是抓手状态
         */
            var ToggleHandCommand = kity.createClass("ToggleHandCommand", {
                base: Command,
                execute: function(minder) {
                    if (minder.getStatus() != "hand") {
                        minder.setStatus("hand", true);
                    } else {
                        minder.rollbackStatus();
                    }
                    this.setContentChanged(false);
                },
                queryState: function(minder) {
                    return minder.getStatus() == "hand" ? 1 : 0;
                },
                enableReadOnly: true
            });
            /**
         * @command Camera
         * @description 设置当前视野的中心位置到某个节点上
         * @param {kityminder.MinderNode} focusNode 要定位的节点
         * @param {number} duration 设置视野移动的动画时长（单位 ms），设置为 0 不使用动画
         * @state
         *   0: 始终可用
         */
            var CameraCommand = kity.createClass("CameraCommand", {
                base: Command,
                execute: function(km, focusNode) {
                    focusNode = focusNode || km.getRoot();
                    var viewport = km.getPaper().getViewPort();
                    var offset = focusNode.getRenderContainer().getRenderBox("view");
                    var dx = viewport.center.x - offset.x - offset.width / 2, dy = viewport.center.y - offset.y;
                    var dragger = km._viewDragger;
                    var duration = km.getOption("viewAnimationDuration");
                    dragger.move(new kity.Point(dx, dy), duration);
                    this.setContentChanged(false);
                },
                enableReadOnly: true
            });
            /**
         * @command Move
         * @description 指定方向移动当前视野
         * @param {string} dir 移动方向
         *    取值为 'left'，视野向左移动一半
         *    取值为 'right'，视野向右移动一半
         *    取值为 'up'，视野向上移动一半
         *    取值为 'down'，视野向下移动一半
         * @param {number} duration 视野移动的动画时长（单位 ms），设置为 0 不使用动画
         * @state
         *   0: 始终可用
         */
            var MoveCommand = kity.createClass("MoveCommand", {
                base: Command,
                execute: function(km, dir) {
                    var dragger = km._viewDragger;
                    var size = km._lastClientSize;
                    var duration = km.getOption("viewAnimationDuration");
                    switch (dir) {
                      case "up":
                        dragger.move(new kity.Point(0, size.height / 2), duration);
                        break;

                      case "down":
                        dragger.move(new kity.Point(0, -size.height / 2), duration);
                        break;

                      case "left":
                        dragger.move(new kity.Point(size.width / 2, 0), duration);
                        break;

                      case "right":
                        dragger.move(new kity.Point(-size.width / 2, 0), duration);
                        break;
                    }
                },
                enableReadOnly: true
            });
            return {
                init: function() {
                    this._viewDragger = new ViewDragger(this);
                },
                commands: {
                    hand: ToggleHandCommand,
                    camera: CameraCommand,
                    move: MoveCommand
                },
                events: {
                    statuschange: function(e) {
                        this._viewDragger.setEnabled(e.currentStatus == "hand");
                    },
                    mousewheel: function(e) {
                        var dx, dy;
                        e = e.originEvent;
                        if (e.ctrlKey || e.shiftKey) return;
                        if ("wheelDeltaX" in e) {
                            dx = e.wheelDeltaX || 0;
                            dy = e.wheelDeltaY || 0;
                        } else {
                            dx = 0;
                            dy = e.wheelDelta;
                        }
                        this._viewDragger.move({
                            x: dx / 2.5,
                            y: dy / 2.5
                        });
                        var me = this;
                        clearTimeout(this._mousewheeltimer);
                        this._mousewheeltimer = setTimeout(function() {
                            me.fire("viewchanged");
                        }, 100);
                        e.preventDefault();
                    },
                    "normal.dblclick readonly.dblclick": function(e) {
                        if (e.kityEvent.targetShape instanceof kity.Paper) {
                            this.execCommand("camera", this.getRoot(), 800);
                        }
                    },
                    "paperrender finishInitHook": function() {
                        if (!this.getRenderTarget()) {
                            return;
                        }
                        this.execCommand("camera", null, 0);
                        this._lastClientSize = {
                            width: this.getRenderTarget().clientWidth,
                            height: this.getRenderTarget().clientHeight
                        };
                    },
                    resize: function(e) {
                        var a = {
                            width: this.getRenderTarget().clientWidth,
                            height: this.getRenderTarget().clientHeight
                        }, b = this._lastClientSize;
                        this._viewDragger.move(new kity.Point((a.width - b.width) / 2 | 0, (a.height - b.height) / 2 | 0));
                        this._lastClientSize = a;
                    },
                    "selectionchange layoutallfinish": function(e) {
                        var selected = this.getSelectedNode();
                        var minder = this;
                        /*
                    * Added by zhangbobell 2015.9.9
                    * windows 10 的 edge 浏览器在全部动画停止后，优先级图标不显示 text，
                    * 因此再次触发一次 render 事件，让浏览器重绘
                    * */
                        if (kity.Browser.edge) {
                            this.fire("paperrender");
                        }
                        if (!selected) return;
                        var dragger = this._viewDragger;
                        var timeline = dragger.timeline();
                        /*
                    * Added by zhangbobell 2015.09.25
                    * 如果之前有动画，那么就先暂时返回，等之前动画结束之后再次执行本函数
                    * 以防止 view 动画变动了位置，导致本函数执行的时候位置计算不对
                    *
                    * fixed bug : 初始化的时候中心节点位置不固定（有的时候在左上角，有的时候在中心）
                    * */
                        if (timeline) {
                            timeline.on("finish", function() {
                                minder.fire("selectionchange");
                            });
                            return;
                        }
                        var view = dragger.getView();
                        var focus = selected.getLayoutBox();
                        var space = 50;
                        var dx = 0, dy = 0;
                        if (focus.right > view.right) {
                            dx += view.right - focus.right - space;
                        } else if (focus.left < view.left) {
                            dx += view.left - focus.left + space;
                        }
                        if (focus.bottom > view.bottom) {
                            dy += view.bottom - focus.bottom - space;
                        }
                        if (focus.top < view.top) {
                            dy += view.top - focus.top + space;
                        }
                        if (dx || dy) dragger.move(new kity.Point(dx, dy), 100);
                    }
                }
            };
        });
    }
};

//src/module/zoom.js
_p[63] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var utils = _p.r(33);
        var Minder = _p.r(19);
        var MinderNode = _p.r(21);
        var Command = _p.r(9);
        var Module = _p.r(20);
        var Renderer = _p.r(27);
        Module.register("Zoom", function() {
            var me = this;
            var timeline;
            function setTextRendering() {
                var value = me._zoomValue >= 100 ? "optimize-speed" : "geometricPrecision";
                me.getRenderContainer().setAttr("text-rendering", value);
            }
            function fixPaperCTM(paper) {
                var node = paper.shapeNode;
                var ctm = node.getCTM();
                var matrix = new kity.Matrix(ctm.a, ctm.b, ctm.c, ctm.d, (ctm.e | 0) + .5, (ctm.f | 0) + .5);
                node.setAttribute("transform", "matrix(" + matrix.toString() + ")");
            }
            kity.extendClass(Minder, {
                zoom: function(value) {
                    var paper = this.getPaper();
                    var viewport = paper.getViewPort();
                    viewport.zoom = value / 100;
                    viewport.center = {
                        x: viewport.center.x,
                        y: viewport.center.y
                    };
                    paper.setViewPort(viewport);
                    if (value == 100) fixPaperCTM(paper);
                },
                getZoomValue: function() {
                    return this._zoomValue;
                }
            });
            function zoomMinder(minder, value) {
                var paper = minder.getPaper();
                var viewport = paper.getViewPort();
                if (!value) return;
                setTextRendering();
                var duration = minder.getOption("zoomAnimationDuration");
                if (minder.getRoot().getComplex() > 200 || !duration) {
                    minder._zoomValue = value;
                    minder.zoom(value);
                    minder.fire("viewchange");
                } else {
                    var animator = new kity.Animator({
                        beginValue: minder._zoomValue,
                        finishValue: value,
                        setter: function(target, value) {
                            target.zoom(value);
                        }
                    });
                    minder._zoomValue = value;
                    if (timeline) {
                        timeline.pause();
                    }
                    timeline = animator.start(minder, duration, "easeInOutSine");
                    timeline.on("finish", function() {
                        minder.fire("viewchange");
                    });
                }
                minder.fire("zoom", {
                    zoom: value
                });
            }
            /**
         * @command Zoom
         * @description 缩放当前的视野到一定的比例（百分比）
         * @param {number} value 设置的比例，取值 100 则为原尺寸
         * @state
         *   0: 始终可用
         */
            var ZoomCommand = kity.createClass("Zoom", {
                base: Command,
                execute: zoomMinder,
                queryValue: function(minder) {
                    return minder._zoomValue;
                }
            });
            /**
         * @command ZoomIn
         * @description 放大当前的视野到下一个比例等级（百分比）
         * @shortcut =
         * @state
         *   0: 如果当前脑图的配置中还有下一个比例等级
         *  -1: 其它情况
         */
            var ZoomInCommand = kity.createClass("ZoomInCommand", {
                base: Command,
                execute: function(minder) {
                    zoomMinder(minder, this.nextValue(minder));
                },
                queryState: function(minder) {
                    return +!this.nextValue(minder);
                },
                nextValue: function(minder) {
                    var stack = minder.getOption("zoom"), i;
                    for (i = 0; i < stack.length; i++) {
                        if (stack[i] > minder._zoomValue) return stack[i];
                    }
                    return 0;
                },
                enableReadOnly: true
            });
            /**
         * @command ZoomOut
         * @description 缩小当前的视野到上一个比例等级（百分比）
         * @shortcut -
         * @state
         *   0: 如果当前脑图的配置中还有上一个比例等级
         *  -1: 其它情况
         */
            var ZoomOutCommand = kity.createClass("ZoomOutCommand", {
                base: Command,
                execute: function(minder) {
                    zoomMinder(minder, this.nextValue(minder));
                },
                queryState: function(minder) {
                    return +!this.nextValue(minder);
                },
                nextValue: function(minder) {
                    var stack = minder.getOption("zoom"), i;
                    for (i = stack.length - 1; i >= 0; i--) {
                        if (stack[i] < minder._zoomValue) return stack[i];
                    }
                    return 0;
                },
                enableReadOnly: true
            });
            return {
                init: function() {
                    this._zoomValue = 100;
                    this.setDefaultOptions({
                        zoom: [ 10, 20, 50, 100, 200 ]
                    });
                    setTextRendering();
                },
                commands: {
                    zoomin: ZoomInCommand,
                    zoomout: ZoomOutCommand,
                    zoom: ZoomCommand
                },
                events: {
                    "normal.mousewheel readonly.mousewheel": function(e) {
                        if (!e.originEvent.ctrlKey && !e.originEvent.metaKey) return;
                        var delta = e.originEvent.wheelDelta;
                        var me = this;
                        if (!kity.Browser.mac) {
                            delta = -delta;
                        }
                        // 稀释
                        if (Math.abs(delta) > 100) {
                            clearTimeout(this._wheelZoomTimeout);
                        } else {
                            return;
                        }
                        this._wheelZoomTimeout = setTimeout(function() {
                            var value;
                            var lastValue = me.getPaper()._zoom || 1;
                            if (delta < 0) {
                                me.execCommand("zoomin");
                            } else if (delta > 0) {
                                me.execCommand("zoomout");
                            }
                        }, 100);
                        e.originEvent.preventDefault();
                    }
                },
                commandShortcutKeys: {
                    zoomin: "ctrl+=",
                    zoomout: "ctrl+-"
                }
            };
        });
    }
};

//src/protocol/json.js
_p[64] = {
    value: function(require, exports, module) {
        var data = _p.r(12);
        data.registerProtocol("json", module.exports = {
            fileDescription: "KityMinder 格式",
            fileExtension: ".km",
            dataType: "text",
            mineType: "application/json",
            encode: function(json) {
                return JSON.stringify(json);
            },
            decode: function(local) {
                return JSON.parse(local);
            }
        });
    }
};

//src/protocol/markdown.js
_p[65] = {
    value: function(require, exports, module) {
        var data = _p.r(12);
        var LINE_ENDING_SPLITER = /\r\n|\r|\n/;
        var EMPTY_LINE = "";
        var NOTE_MARK_START = "\x3c!--Note--\x3e";
        var NOTE_MARK_CLOSE = "\x3c!--/Note--\x3e";
        function encode(json) {
            return _build(json, 1).join("\n");
        }
        function _build(node, level) {
            var lines = [];
            level = level || 1;
            var sharps = _generateHeaderSharp(level);
            lines.push(sharps + " " + node.data.text);
            lines.push(EMPTY_LINE);
            var note = node.data.note;
            if (note) {
                var hasSharp = /^#/.test(note);
                if (hasSharp) {
                    lines.push(NOTE_MARK_START);
                    note = note.replace(/^#+/gm, function($0) {
                        return sharps + $0;
                    });
                }
                lines.push(note);
                if (hasSharp) {
                    lines.push(NOTE_MARK_CLOSE);
                }
                lines.push(EMPTY_LINE);
            }
            if (node.children) node.children.forEach(function(child) {
                lines = lines.concat(_build(child, level + 1));
            });
            return lines;
        }
        function _generateHeaderSharp(level) {
            var sharps = "";
            while (level--) sharps += "#";
            return sharps;
        }
        function decode(markdown) {
            var json, parentMap = {}, lines, line, lineInfo, level, node, parent, noteProgress, codeBlock;
            // 一级标题转换 `{title}\n===` => `# {title}`
            markdown = markdown.replace(/^(.+)\n={3,}/, function($0, $1) {
                return "# " + $1;
            });
            lines = markdown.split(LINE_ENDING_SPLITER);
            // 按行分析
            for (var i = 0; i < lines.length; i++) {
                line = lines[i];
                lineInfo = _resolveLine(line);
                // 备注标记处理
                if (lineInfo.noteClose) {
                    noteProgress = false;
                    continue;
                } else if (lineInfo.noteStart) {
                    noteProgress = true;
                    continue;
                }
                // 代码块处理
                codeBlock = lineInfo.codeBlock ? !codeBlock : codeBlock;
                // 备注条件：备注标签中，非标题定义，或标题越位
                if (noteProgress || codeBlock || !lineInfo.level || lineInfo.level > level + 1) {
                    if (node) _pushNote(node, line);
                    continue;
                }
                // 标题处理
                level = lineInfo.level;
                node = _initNode(lineInfo.content, parentMap[level - 1]);
                parentMap[level] = node;
            }
            _cleanUp(parentMap[1]);
            return parentMap[1];
        }
        function _initNode(text, parent) {
            var node = {
                data: {
                    text: text,
                    note: ""
                }
            };
            if (parent) {
                if (parent.children) parent.children.push(node); else parent.children = [ node ];
            }
            return node;
        }
        function _pushNote(node, line) {
            node.data.note += line + "\n";
        }
        function _isEmpty(line) {
            return !/\S/.test(line);
        }
        function _resolveLine(line) {
            var match = /^(#+)?\s*(.*)$/.exec(line);
            return {
                level: match[1] && match[1].length || null,
                content: match[2],
                noteStart: line == NOTE_MARK_START,
                noteClose: line == NOTE_MARK_CLOSE,
                codeBlock: /^\s*```/.test(line)
            };
        }
        function _cleanUp(node) {
            if (!/\S/.test(node.data.note)) {
                node.data.note = null;
                delete node.data.note;
            } else {
                var notes = node.data.note.split("\n");
                while (notes.length && !/\S/.test(notes[0])) notes.shift();
                while (notes.length && !/\S/.test(notes[notes.length - 1])) notes.pop();
                node.data.note = notes.join("\n");
            }
            if (node.children) node.children.forEach(_cleanUp);
        }
        data.registerProtocol("markdown", module.exports = {
            fileDescription: "Markdown/GFM 格式",
            fileExtension: ".md",
            mineType: "text/markdown",
            dataType: "text",
            encode: function(json) {
                return encode(json.root);
            },
            decode: function(markdown) {
                return decode(markdown);
            }
        });
    }
};

//src/protocol/png.js
_p[66] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var data = _p.r(12);
        var Promise = _p.r(25);
        var DomURL = window.URL || window.webkitURL || window;
        function loadImage(info, callback) {
            return new Promise(function(resolve, reject) {
                var image = document.createElement("img");
                image.onload = function() {
                    resolve({
                        element: this,
                        x: info.x,
                        y: info.y,
                        width: info.width,
                        height: info.height
                    });
                };
                image.onerror = function(err) {
                    reject(err);
                };
                image.crossOrigin = "anonymous";
                image.src = info.url;
            });
        }
        /**
     * xhrLoadImage: 通过 xhr 加载保存在 BOS 上的图片
     * @note: BOS 上的 CORS 策略是取 headers 里面的 Origin 字段进行判断
     *        而通过 image 的 src 的方式是无法传递 origin 的，因此需要通过 xhr 进行
     */
        function xhrLoadImage(info, callback) {
            return Promise(function(resolve, reject) {
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open("GET", info.url + "?_=" + Date.now(), true);
                xmlHttp.responseType = "blob";
                xmlHttp.onreadystatechange = function() {
                    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                        var blob = xmlHttp.response;
                        var image = document.createElement("img");
                        image.src = DomURL.createObjectURL(blob);
                        image.onload = function() {
                            DomURL.revokeObjectURL(image.src);
                            resolve({
                                element: image,
                                x: info.x,
                                y: info.y,
                                width: info.width,
                                height: info.height
                            });
                        };
                    }
                };
                xmlHttp.send();
            });
        }
        function getSVGInfo(minder) {
            var paper = minder.getPaper(), paperTransform, domContainer = paper.container, svgXml, svgContainer, svgDom, renderContainer = minder.getRenderContainer(), renderBox = renderContainer.getRenderBox(), width = renderBox.width + 1, height = renderBox.height + 1, blob, svgUrl, img;
            // 保存原始变换，并且移动到合适的位置
            paperTransform = paper.shapeNode.getAttribute("transform");
            paper.shapeNode.setAttribute("transform", "translate(0.5, 0.5)");
            renderContainer.translate(-renderBox.x, -renderBox.y);
            // 获取当前的 XML 代码
            svgXml = paper.container.innerHTML;
            // 回复原始变换及位置
            renderContainer.translate(renderBox.x, renderBox.y);
            paper.shapeNode.setAttribute("transform", paperTransform);
            // 过滤内容
            svgContainer = document.createElement("div");
            svgContainer.innerHTML = svgXml;
            svgDom = svgContainer.querySelector("svg");
            svgDom.setAttribute("width", renderBox.width + 1);
            svgDom.setAttribute("height", renderBox.height + 1);
            svgDom.setAttribute("style", 'font-family: Arial, "Microsoft Yahei","Heiti SC";');
            svgContainer = document.createElement("div");
            svgContainer.appendChild(svgDom);
            svgXml = svgContainer.innerHTML;
            // Dummy IE
            svgXml = svgXml.replace(' xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:NS1="" NS1:ns1:xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:NS2="" NS2:xmlns:ns1=""', "");
            // svg 含有 &nbsp; 符号导出报错 Entity 'nbsp' not defined ,含有控制字符触发Load Image 会触发报错
            svgXml = svgXml.replace(/&nbsp;|[\x00-\x1F\x7F-\x9F]/g, "");
            // fix title issue in safari
            // @ http://stackoverflow.com/questions/30273775/namespace-prefix-ns1-for-href-on-tagelement-is-not-defined-setattributens
            svgXml = svgXml.replace(/NS\d+:title/gi, "xlink:title");
            blob = new Blob([ svgXml ], {
                type: "image/svg+xml"
            });
            svgUrl = DomURL.createObjectURL(blob);
            //svgUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgXml);
            var imagesInfo = [];
            // 遍历取出图片信息
            traverse(minder.getRoot());
            function traverse(node) {
                var nodeData = node.data;
                if (nodeData.image) {
                    minder.renderNode(node);
                    var nodeData = node.data;
                    var imageUrl = nodeData.image;
                    var imageSize = nodeData.imageSize;
                    var imageRenderBox = node.getRenderBox("ImageRenderer", minder.getRenderContainer());
                    var imageInfo = {
                        url: imageUrl,
                        width: imageSize.width,
                        height: imageSize.height,
                        x: -renderContainer.getBoundaryBox().x + imageRenderBox.x,
                        y: -renderContainer.getBoundaryBox().y + imageRenderBox.y
                    };
                    imagesInfo.push(imageInfo);
                }
                // 若节点折叠，则直接返回
                if (nodeData.expandState === "collapse") {
                    return;
                }
                var children = node.getChildren();
                for (var i = 0; i < children.length; i++) {
                    traverse(children[i]);
                }
            }
            return {
                width: width,
                height: height,
                dataUrl: svgUrl,
                xml: svgXml,
                imagesInfo: imagesInfo
            };
        }
        function encode(json, minder, option) {
            var resultCallback;
            /* 绘制 PNG 的画布及上下文 */
            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");
            /* 尝试获取背景图片 URL 或背景颜色 */
            var bgDeclare = minder.getStyle("background").toString();
            var bgUrl = /url\(\"(.+)\"\)/.exec(bgDeclare);
            var bgColor = kity.Color.parse(bgDeclare);
            /* 获取 SVG 文件内容 */
            var svgInfo = getSVGInfo(minder);
            var width = option && option.width && option.width > svgInfo.width ? option.width : svgInfo.width;
            var height = option && option.height && option.height > svgInfo.height ? option.height : svgInfo.height;
            var offsetX = option && option.width && option.width > svgInfo.width ? (option.width - svgInfo.width) / 2 : 0;
            var offsetY = option && option.height && option.height > svgInfo.height ? (option.height - svgInfo.height) / 2 : 0;
            var svgDataUrl = svgInfo.dataUrl;
            var imagesInfo = svgInfo.imagesInfo;
            /* 画布的填充大小 */
            var padding = 20;
            canvas.width = width + padding * 2;
            canvas.height = height + padding * 2;
            function fillBackground(ctx, style) {
                ctx.save();
                ctx.fillStyle = style;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.restore();
            }
            function drawImage(ctx, image, x, y, width, height) {
                if (width && height) {
                    ctx.drawImage(image, x + padding, y + padding, width, height);
                } else {
                    ctx.drawImage(image, x + padding, y + padding);
                }
            }
            function generateDataUrl(canvas) {
                return canvas.toDataURL("image/png");
            }
            // 加载节点上的图片
            function loadImages(imagesInfo) {
                var imagePromises = imagesInfo.map(function(imageInfo) {
                    return xhrLoadImage(imageInfo);
                });
                return Promise.all(imagePromises);
            }
            function drawSVG() {
                var svgData = {
                    url: svgDataUrl
                };
                return loadImage(svgData).then(function($image) {
                    drawImage(ctx, $image.element, offsetX, offsetY, $image.width, $image.height);
                    return loadImages(imagesInfo);
                }).then(function($images) {
                    for (var i = 0; i < $images.length; i++) {
                        drawImage(ctx, $images[i].element, $images[i].x + offsetX, $images[i].y + offsetY, $images[i].width, $images[i].height);
                    }
                    DomURL.revokeObjectURL(svgDataUrl);
                    document.body.appendChild(canvas);
                    var pngBase64 = generateDataUrl(canvas);
                    document.body.removeChild(canvas);
                    return pngBase64;
                }, function(err) {
                    // 这里处理 reject，出错基本上是因为跨域，
                    // 出错后依然导出，只不过没有图片。
                    alert("脑图的节点中包含跨域图片，导出的 png 中节点图片不显示，你可以替换掉这些跨域的图片并重试。");
                    DomURL.revokeObjectURL(svgDataUrl);
                    document.body.appendChild(canvas);
                    var pngBase64 = generateDataUrl(canvas);
                    document.body.removeChild(canvas);
                    return pngBase64;
                });
            }
            if (bgUrl) {
                var bgInfo = {
                    url: bgUrl[1]
                };
                return loadImage(bgInfo).then(function($image) {
                    fillBackground(ctx, ctx.createPattern($image.element, "repeat"));
                    return drawSVG();
                });
            } else {
                fillBackground(ctx, bgColor.toString());
                return drawSVG();
            }
        }
        data.registerProtocol("png", module.exports = {
            fileDescription: "PNG 图片",
            fileExtension: ".png",
            mineType: "image/png",
            dataType: "base64",
            encode: encode
        });
    }
};

//src/protocol/svg.js
_p[67] = {
    value: function(require, exports, module) {
        var data = _p.r(12);
        /**
     * 导出svg时删除全部svg元素中的transform
     * @auth Naixor
     * @method removeTransform
     * @param  {[type]}        svgDom [description]
     * @return {[type]}               [description]
     */
        function cleanSVG(svgDom, x, y) {
            function getTransformToElement(target, source) {
                var matrix;
                try {
                    matrix = source.getScreenCTM().inverse();
                } catch (e) {
                    throw new Error("Can not inverse source element' ctm.");
                }
                return matrix.multiply(target.getScreenCTM());
            }
            function dealWithPath(d, dealWithPattern) {
                if (!(dealWithPattern instanceof Function)) {
                    dealWithPattern = function() {};
                }
                var strArr = [], pattern = [], cache = [];
                for (var i = 0, l = d.length; i < l; i++) {
                    switch (d[i]) {
                      case "M":
                      case "L":
                      case "T":
                      case "S":
                      case "A":
                      case "C":
                      case "H":
                      case "V":
                      case "Q":
                        {
                            if (cache.length) {
                                pattern.push(cache.join(""));
                                cache = [];
                            }
                            // 脑图的path格式真奇怪...偶尔就给我蹦出来一个"..V123 C..", 那空格几个意思 - -
                            if (pattern[pattern.length - 1] === ",") {
                                pattern.pop();
                            }
                            if (pattern.length) {
                                dealWithPattern(pattern);
                                strArr.push(pattern.join(""));
                                pattern = [];
                            }
                            pattern.push(d[i]);
                            break;
                        }

                      case "Z":
                      case "z":
                        {
                            pattern.push(cache.join(""), d[i]);
                            dealWithPattern(pattern);
                            strArr.push(pattern.join(""));
                            cache = [];
                            pattern = [];
                            break;
                        }

                      case ".":
                      case "e":
                        {
                            cache.push(d[i]);
                            break;
                        }

                      case "-":
                        {
                            if (d[i - 1] !== "e") {
                                if (cache.length) {
                                    pattern.push(cache.join(""), ",");
                                }
                                cache = [];
                            }
                            cache.push("-");
                            break;
                        }

                      case " ":
                      case ",":
                        {
                            if (cache.length) {
                                pattern.push(cache.join(""), ",");
                                cache = [];
                            }
                            break;
                        }

                      default:
                        {
                            if (/\d/.test(d[i])) {
                                cache.push(d[i]);
                            } else {
                                // m a c s q h v l t z情况
                                if (cache.length) {
                                    pattern.push(cache.join(""), d[i]);
                                    cache = [];
                                } else {
                                    // 脑图的path格式真奇怪...偶尔就给我蹦出来一个"..V123 c..", 那空格几个意思 - -
                                    if (pattern[pattern.length - 1] === ",") {
                                        pattern.pop();
                                    }
                                    pattern.push(d[i]);
                                }
                            }
                            if (i + 1 === l) {
                                if (cache.length) {
                                    pattern.push(cache.join(""));
                                }
                                dealWithPattern(pattern);
                                strArr.push(pattern.join(""));
                                cache = null;
                                pattern = null;
                            }
                        }
                    }
                }
                return strArr.join("");
            }
            function replaceWithNode(svgNode, parentX, parentY) {
                if (!svgNode) {
                    return;
                }
                if (svgNode.tagName === "defs") {
                    return;
                }
                if (svgNode.getAttribute("fill") === "transparent") {
                    svgNode.setAttribute("fill", "none");
                }
                if (svgNode.getAttribute("marker-end")) {
                    svgNode.removeAttribute("marker-end");
                }
                parentX = parentX || 0;
                parentY = parentY || 0;
                if (svgNode.getAttribute("transform")) {
                    var ctm = getTransformToElement(svgNode, svgNode.parentElement);
                    parentX -= ctm.e;
                    parentY -= ctm.f;
                    svgNode.removeAttribute("transform");
                }
                switch (svgNode.tagName.toLowerCase()) {
                  case "g":
                    break;

                  case "path":
                    {
                        var d = svgNode.getAttribute("d");
                        if (d) {
                            d = dealWithPath(d, function(pattern) {
                                switch (pattern[0]) {
                                  case "V":
                                    {
                                        pattern[1] = +pattern[1] - parentY;
                                        break;
                                    }

                                  case "H":
                                    {
                                        pattern[1] = +pattern[1] - parentX;
                                        break;
                                    }

                                  case "M":
                                  case "L":
                                  case "T":
                                    {
                                        pattern[1] = +pattern[1] - parentX;
                                        pattern[3] = +pattern[3] - parentY;
                                        break;
                                    }

                                  case "Q":
                                  case "S":
                                    {
                                        pattern[1] = +pattern[1] - parentX;
                                        pattern[3] = +pattern[3] - parentY;
                                        pattern[5] = +pattern[5] - parentX;
                                        pattern[7] = +pattern[7] - parentY;
                                        break;
                                    }

                                  case "A":
                                    {
                                        pattern[11] = +pattern[11] - parentX;
                                        pattern[13] = +pattern[13] - parentY;
                                        break;
                                    }

                                  case "C":
                                    {
                                        pattern[1] = +pattern[1] - parentX;
                                        pattern[3] = +pattern[3] - parentY;
                                        pattern[5] = +pattern[5] - parentX;
                                        pattern[7] = +pattern[7] - parentY;
                                        pattern[9] = +pattern[9] - parentX;
                                        pattern[11] = +pattern[11] - parentY;
                                    }
                                }
                            });
                            svgNode.setAttribute("d", d);
                            svgNode.removeAttribute("transform");
                        }
                        return;
                    }

                  case "image":
                  case "text":
                    {
                        if (parentX && parentY) {
                            var x = +svgNode.getAttribute("x") || 0, y = +svgNode.getAttribute("y") || 0;
                            svgNode.setAttribute("x", x - parentX);
                            svgNode.setAttribute("y", y - parentY);
                        }
                        if (svgNode.getAttribute("dominant-baseline")) {
                            svgNode.removeAttribute("dominant-baseline");
                            svgNode.setAttribute("dy", ".8em");
                        }
                        svgNode.removeAttribute("transform");
                        return;
                    }
                }
                if (svgNode.children) {
                    for (var i = 0, l = svgNode.children.length; i < l; i++) {
                        replaceWithNode(svgNode.children[i], parentX, parentY);
                    }
                }
            }
            svgDom.style.visibility = "hidden";
            replaceWithNode(svgDom, x || 0, y || 0);
            svgDom.style.visibility = "visible";
        }
        data.registerProtocol("svg", module.exports = {
            fileDescription: "SVG 矢量图",
            fileExtension: ".svg",
            mineType: "image/svg+xml",
            dataType: "text",
            encode: function(json, minder) {
                var paper = minder.getPaper(), paperTransform = paper.shapeNode.getAttribute("transform"), svgXml, svgContainer, svgDom, renderContainer = minder.getRenderContainer(), renderBox = renderContainer.getRenderBox(), transform = renderContainer.getTransform(), width = renderBox.width, height = renderBox.height, padding = 20;
                paper.shapeNode.setAttribute("transform", "translate(0.5, 0.5)");
                svgXml = paper.container.innerHTML;
                paper.shapeNode.setAttribute("transform", paperTransform);
                svgContainer = document.createElement("div");
                document.body.appendChild(svgContainer);
                svgContainer.innerHTML = svgXml;
                svgDom = svgContainer.querySelector("svg");
                svgDom.setAttribute("width", width + padding * 2 | 0);
                svgDom.setAttribute("height", height + padding * 2 | 0);
                svgDom.setAttribute("style", "background: " + minder.getStyle("background"));
                //"font-family: Arial, Microsoft Yahei, Heiti SC; " +
                svgDom.setAttribute("viewBox", [ 0, 0, width + padding * 2 | 0, height + padding * 2 | 0 ].join(" "));
                tempSvgContainer = document.createElement("div");
                cleanSVG(svgDom, renderBox.x - padding | 0, renderBox.y - padding | 0);
                document.body.removeChild(svgContainer);
                tempSvgContainer.appendChild(svgDom);
                // need a xml with width and height
                svgXml = tempSvgContainer.innerHTML;
                // svg 含有 &nbsp; 符号导出报错 Entity 'nbsp' not defined
                svgXml = svgXml.replace(/&nbsp;/g, "&#xa0;");
                // svg 含有 &nbsp; 符号导出报错 Entity 'nbsp' not defined
                return svgXml;
            }
        });
    }
};

//src/protocol/text.js
_p[68] = {
    value: function(require, exports, module) {
        var data = _p.r(12);
        var Browser = _p.r(17).Browser;
        /**
     * @Desc: 增加对不容浏览器下节点中文本\t匹配的处理，不同浏览器下\t无法正确匹配，导致无法使用TAB来批量导入节点
     * @Editor: Naixor
     * @Date: 2015.9.17
     */
        var LINE_ENDING = "\r", LINE_ENDING_SPLITER = /\r\n|\r|\n/, TAB_CHAR = function(Browser) {
            if (Browser.gecko) {
                return {
                    REGEXP: new RegExp("^(\t|" + String.fromCharCode(160, 160, 32, 160) + ")"),
                    DELETE: new RegExp("^(\t|" + String.fromCharCode(160, 160, 32, 160) + ")+")
                };
            } else if (Browser.ie || Browser.edge) {
                // ie系列和edge比较特别，\t在div中会被直接转义成SPACE故只好使用SPACE来做处理
                return {
                    REGEXP: new RegExp("^(" + String.fromCharCode(32) + "|" + String.fromCharCode(160) + ")"),
                    DELETE: new RegExp("^(" + String.fromCharCode(32) + "|" + String.fromCharCode(160) + ")+")
                };
            } else {
                return {
                    REGEXP: /^(\t|\x20{4})/,
                    DELETE: /^(\t|\x20{4})+/
                };
            }
        }(Browser);
        function repeat(s, n) {
            var result = "";
            while (n--) result += s;
            return result;
        }
        /**
     * 对节点text中的换行符进行处理
     * @method encodeWrap
     * @param  {String}   nodeText MinderNode.data.text
     * @return {String}            \n -> '\n'; \\n -> '\\n'
     */
        function encodeWrap(nodeText) {
            if (!nodeText) {
                return "";
            }
            var textArr = [], WRAP_TEXT = [ "\\", "n" ];
            for (var i = 0, j = 0, l = nodeText.length; i < l; i++) {
                if (nodeText[i] === "\n" || nodeText[i] === "\r") {
                    textArr.push("\\n");
                    j = 0;
                    continue;
                }
                if (nodeText[i] === WRAP_TEXT[j]) {
                    j++;
                    if (j === 2) {
                        j = 0;
                        textArr.push("\\\\n");
                    }
                    continue;
                }
                switch (j) {
                  case 0:
                    {
                        textArr.push(nodeText[i]);
                        break;
                    }

                  case 1:
                    {
                        textArr.push(nodeText[i - 1], nodeText[i]);
                    }
                }
                j = 0;
            }
            return textArr.join("");
        }
        /**
     * 将文本内容中的'\n'和'\\n'分别转换成\n和\\n
     * @method decodeWrap
     * @param  {[type]}   text [description]
     * @return {[type]}        [description]
     */
        function decodeWrap(text) {
            if (!text) {
                return "";
            }
            var textArr = [], WRAP_TEXT = [ "\\", "\\", "n" ];
            for (var i = 0, j = 0, l = text.length; i < l; i++) {
                if (text[i] === WRAP_TEXT[j]) {
                    j++;
                    if (j === 3) {
                        j = 0;
                        textArr.push("\\n");
                    }
                    continue;
                }
                switch (j) {
                  case 0:
                    {
                        textArr.push(text[i]);
                        j = 0;
                        break;
                    }

                  case 1:
                    {
                        if (text[i] === "n") {
                            textArr.push("\n");
                        } else {
                            textArr.push(text[i - 1], text[i]);
                        }
                        j = 0;
                        break;
                    }

                  case 2:
                    {
                        textArr.push(text[i - 2]);
                        if (text[i] !== "\\") {
                            j = 0;
                            textArr.push(text[i - 1], text[i]);
                        }
                        break;
                    }
                }
            }
            return textArr.join("");
        }
        function encode(json, level) {
            var local = "";
            level = level || 0;
            local += repeat("\t", level);
            local += encodeWrap(json.data.text) + LINE_ENDING;
            if (json.children) {
                json.children.forEach(function(child) {
                    local += encode(child, level + 1);
                });
            }
            return local;
        }
        function isEmpty(line) {
            return !/\S/.test(line);
        }
        function getLevel(line) {
            var level = 0;
            while (TAB_CHAR.REGEXP.test(line)) {
                line = line.replace(TAB_CHAR.REGEXP, "");
                level++;
            }
            return level;
        }
        function getNode(line) {
            return {
                data: {
                    text: decodeWrap(line.replace(TAB_CHAR.DELETE, ""))
                }
            };
        }
        function decode(local) {
            var json, parentMap = {}, lines = local.split(LINE_ENDING_SPLITER), line, level, node;
            function addChild(parent, child) {
                var children = parent.children || (parent.children = []);
                children.push(child);
            }
            for (var i = 0; i < lines.length; i++) {
                line = lines[i];
                if (isEmpty(line)) continue;
                level = getLevel(line);
                node = getNode(line);
                if (level === 0) {
                    if (json) {
                        throw new Error("Invalid local format");
                    }
                    json = node;
                } else {
                    if (!parentMap[level - 1]) {
                        throw new Error("Invalid local format");
                    }
                    addChild(parentMap[level - 1], node);
                }
                parentMap[level] = node;
            }
            return json;
        }
        /**
     * @Desc: 增加一个将当前选中节点转换成text的方法
     * @Editor: Naixor
     * @Date: 2015.9.21
     */
        function Node2Text(node) {
            function exportNode(node) {
                var exported = {};
                exported.data = node.getData();
                var childNodes = node.getChildren();
                exported.children = [];
                for (var i = 0; i < childNodes.length; i++) {
                    exported.children.push(exportNode(childNodes[i]));
                }
                return exported;
            }
            if (!node) return;
            if (/^\s*$/.test(node.data.text)) {
                node.data.text = "分支主题";
            }
            return encode(exportNode(node));
        }
        data.registerProtocol("text", module.exports = {
            fileDescription: "大纲文本",
            fileExtension: ".txt",
            dataType: "text",
            mineType: "text/plain",
            encode: function(json) {
                return encode(json.root, 0);
            },
            decode: function(local) {
                return decode(local);
            },
            Node2Text: function(node) {
                return Node2Text(node);
            }
        });
    }
};

//src/template/default.js
/**
 * @fileOverview
 *
 * 默认模板 - 脑图模板
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[69] = {
    value: function(require, exports, module) {
        var template = _p.r(31);
        template.register("default", {
            getLayout: function(node) {
                if (node.getData("layout")) return node.getData("layout");
                var level = node.getLevel();
                // 根节点
                if (level === 0) {
                    return "mind";
                }
                // 一级节点
                if (level === 1) {
                    return node.getLayoutPointPreview().x > 0 ? "right" : "left";
                }
                return node.parent.getLayout();
            },
            getConnect: function(node) {
                if (node.getLevel() == 1) return "arc";
                return "under";
            }
        });
    }
};

//src/template/filetree.js
/**
 * @fileOverview
 *
 * 文件夹模板
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[70] = {
    value: function(require, exports, module) {
        var template = _p.r(31);
        template.register("filetree", {
            getLayout: function(node) {
                if (node.getData("layout")) return node.getData("layout");
                if (node.isRoot()) return "bottom";
                return "filetree-down";
            },
            getConnect: function(node) {
                if (node.getLevel() == 1) {
                    return "poly";
                }
                return "l";
            }
        });
    }
};

//src/template/fish-bone.js
/**
 * @fileOverview
 *
 * 默认模板 - 鱼骨头模板
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[71] = {
    value: function(require, exports, module) {
        var template = _p.r(31);
        template.register("fish-bone", {
            getLayout: function(node) {
                if (node.getData("layout")) return node.getData("layout");
                var level = node.getLevel();
                // 根节点
                if (level === 0) {
                    return "fish-bone-master";
                }
                // 一级节点
                if (level === 1) {
                    return "fish-bone-slave";
                }
                return node.getLayoutPointPreview().y > 0 ? "filetree-up" : "filetree-down";
            },
            getConnect: function(node) {
                switch (node.getLevel()) {
                  case 1:
                    return "fish-bone-master";

                  case 2:
                    return "line";

                  default:
                    return "l";
                }
            }
        });
    }
};

//src/template/right.js
/**
 * @fileOverview
 *
 * 往右布局结构模板
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[72] = {
    value: function(require, exports, module) {
        var template = _p.r(31);
        template.register("right", {
            getLayout: function(node) {
                return node.getData("layout") || "right";
            },
            getConnect: function(node) {
                if (node.getLevel() == 1) return "arc";
                return "bezier";
            }
        });
    }
};

//src/template/structure.js
/**
 * @fileOverview
 *
 * 组织结构图模板
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[73] = {
    value: function(require, exports, module) {
        var template = _p.r(31);
        template.register("structure", {
            getLayout: function(node) {
                return node.getData("layout") || "bottom";
            },
            getConnect: function(node) {
                return "poly";
            }
        });
    }
};

//src/template/tianpan.js
/**
 * @fileOverview
 *
 * 天盘模板
 *
 * @author: along
 * @copyright: bpd729@163.com, 2015
 */
_p[74] = {
    value: function(require, exports, module) {
        var template = _p.r(31);
        template.register("tianpan", {
            getLayout: function(node) {
                if (node.getData("layout")) return node.getData("layout");
                var level = node.getLevel();
                // 根节点
                if (level === 0) {
                    return "tianpan";
                }
                return node.parent.getLayout();
            },
            getConnect: function(node) {
                return "arc_tp";
            }
        });
    }
};

//src/theme/default.js
_p[75] = {
    value: function(require, exports, module) {
        var theme = _p.r(32);
        [ "classic", "classic-compact" ].forEach(function(name) {
            var compact = name == "classic-compact";
            /* jscs:disable maximumLineLength */
            theme.register(name, {
                background: '#3A4144 url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzg5QTQ0NDhENzgxMUUzOENGREE4QTg0RDgzRTZDNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQzg5QTQ0NThENzgxMUUzOENGREE4QTg0RDgzRTZDNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwOEQ1NDRGOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwOEQ1NDUwOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+e9P33AAAACVJREFUeNpisXJ0YUACTAyoAMr/+eM7EGGRZ4FQ7BycEAZAgAEAHbEGtkoQm/wAAAAASUVORK5CYII=") repeat',
                "root-color": "#430",
                "root-background": "#e9df98",
                "root-stroke": "#e9df98",
                "root-font-size": 24,
                "root-padding": compact ? [ 10, 25 ] : [ 15, 25 ],
                "root-margin": compact ? [ 15, 25 ] : [ 30, 100 ],
                "root-radius": 30,
                "root-space": 10,
                "root-shadow": "rgba(0, 0, 0, .25)",
                "main-color": "#333",
                "main-background": "#a4c5c0",
                "main-stroke": "#a4c5c0",
                "main-font-size": 16,
                "main-padding": compact ? [ 5, 15 ] : [ 6, 20 ],
                "main-margin": compact ? [ 5, 10 ] : 20,
                "main-radius": 10,
                "main-space": 5,
                "main-shadow": "rgba(0, 0, 0, .25)",
                "sub-color": "white",
                "sub-background": "transparent",
                "sub-stroke": "none",
                "sub-font-size": 12,
                "sub-padding": [ 5, 10 ],
                "sub-margin": compact ? [ 5, 10 ] : [ 15, 20 ],
                "sub-tree-margin": 30,
                "sub-radius": 5,
                "sub-space": 5,
                "connect-color": "white",
                "connect-width": 2,
                "main-connect-width": 3,
                "connect-radius": 5,
                "selected-background": "rgb(254, 219, 0)",
                "selected-stroke": "rgb(254, 219, 0)",
                "selected-color": "black",
                "marquee-background": "rgba(255,255,255,.3)",
                "marquee-stroke": "white",
                "drop-hint-color": "yellow",
                "sub-drop-hint-width": 2,
                "main-drop-hint-width": 4,
                "root-drop-hint-width": 4,
                "order-hint-area-color": "rgba(0, 255, 0, .5)",
                "order-hint-path-color": "#0f0",
                "order-hint-path-width": 1,
                "text-selection-color": "rgb(27,171,255)",
                "line-height": 1.5
            });
        });
    }
};

//src/theme/fish.js
_p[76] = {
    value: function(require, exports, module) {
        var theme = _p.r(32);
        theme.register("fish", {
            background: '#3A4144 url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzg5QTQ0NDhENzgxMUUzOENGREE4QTg0RDgzRTZDNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQzg5QTQ0NThENzgxMUUzOENGREE4QTg0RDgzRTZDNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwOEQ1NDRGOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwOEQ1NDUwOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+e9P33AAAACVJREFUeNpisXJ0YUACTAyoAMr/+eM7EGGRZ4FQ7BycEAZAgAEAHbEGtkoQm/wAAAAASUVORK5CYII=") repeat',
            "root-color": "#430",
            "root-background": "#e9df98",
            "root-stroke": "#e9df98",
            "root-font-size": 24,
            "root-padding": [ 35, 35 ],
            "root-margin": 30,
            "root-radius": 100,
            "root-space": 10,
            "root-shadow": "rgba(0, 0, 0, .25)",
            "main-color": "#333",
            "main-background": "#a4c5c0",
            "main-stroke": "#a4c5c0",
            "main-font-size": 16,
            "main-padding": [ 6, 20 ],
            "main-margin": [ 20, 20 ],
            "main-radius": 5,
            "main-space": 5,
            "main-shadow": "rgba(0, 0, 0, .25)",
            "sub-color": "black",
            "sub-background": "white",
            "sub-stroke": "white",
            "sub-font-size": 12,
            "sub-padding": [ 5, 10 ],
            "sub-margin": [ 10 ],
            "sub-radius": 5,
            "sub-space": 5,
            "connect-color": "white",
            "connect-width": 3,
            "main-connect-width": 3,
            "connect-radius": 5,
            "selected-background": "rgb(254, 219, 0)",
            "selected-stroke": "rgb(254, 219, 0)",
            "marquee-background": "rgba(255,255,255,.3)",
            "marquee-stroke": "white",
            "drop-hint-color": "yellow",
            "drop-hint-width": 4,
            "order-hint-area-color": "rgba(0, 255, 0, .5)",
            "order-hint-path-color": "#0f0",
            "order-hint-path-width": 1,
            "text-selection-color": "rgb(27,171,255)",
            "line-height": 1.5
        });
    }
};

//src/theme/fresh.js
_p[77] = {
    value: function(require, exports, module) {
        var kity = _p.r(17);
        var theme = _p.r(32);
        function hsl(h, s, l) {
            return kity.Color.createHSL(h, s, l);
        }
        function generate(h, compat) {
            return {
                background: "#fbfbfb",
                "root-color": "white",
                "root-background": hsl(h, 37, 60),
                "root-stroke": hsl(h, 37, 60),
                "root-font-size": 16,
                "root-padding": compat ? [ 6, 12 ] : [ 12, 24 ],
                "root-margin": compat ? 10 : [ 30, 100 ],
                "root-radius": 5,
                "root-space": 10,
                "main-color": "black",
                "main-background": hsl(h, 33, 95),
                "main-stroke": hsl(h, 37, 60),
                "main-stroke-width": 1,
                "main-font-size": 14,
                "main-padding": [ 6, 20 ],
                "main-margin": compat ? 8 : 20,
                "main-radius": 3,
                "main-space": 5,
                "sub-color": "black",
                "sub-background": "transparent",
                "sub-stroke": "none",
                "sub-font-size": 12,
                "sub-padding": compat ? [ 3, 5 ] : [ 5, 10 ],
                "sub-margin": compat ? [ 4, 8 ] : [ 15, 20 ],
                "sub-radius": 5,
                "sub-space": 5,
                "connect-color": hsl(h, 37, 60),
                "connect-width": 1,
                "connect-radius": 5,
                "selected-stroke": hsl(h, 26, 30),
                "selected-stroke-width": "3",
                "blur-selected-stroke": hsl(h, 10, 60),
                "marquee-background": hsl(h, 100, 80).set("a", .1),
                "marquee-stroke": hsl(h, 37, 60),
                "drop-hint-color": hsl(h, 26, 35),
                "drop-hint-width": 5,
                "order-hint-area-color": hsl(h, 100, 30).set("a", .5),
                "order-hint-path-color": hsl(h, 100, 25),
                "order-hint-path-width": 1,
                "text-selection-color": hsl(h, 100, 20),
                "line-height": 1.5
            };
        }
        var plans = {
            red: 0,
            soil: 25,
            green: 122,
            blue: 204,
            purple: 246,
            pink: 334
        };
        var name;
        for (name in plans) {
            theme.register("fresh-" + name, generate(plans[name]));
            theme.register("fresh-" + name + "-compat", generate(plans[name], true));
        }
    }
};

//src/theme/snow.js
_p[78] = {
    value: function(require, exports, module) {
        var theme = _p.r(32);
        [ "snow", "snow-compact" ].forEach(function(name) {
            var compact = name == "snow-compact";
            /* jscs:disable maximumLineLength */
            theme.register(name, {
                background: '#3A4144 url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzg5QTQ0NDhENzgxMUUzOENGREE4QTg0RDgzRTZDNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQzg5QTQ0NThENzgxMUUzOENGREE4QTg0RDgzRTZDNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwOEQ1NDRGOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwOEQ1NDUwOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+e9P33AAAACVJREFUeNpisXJ0YUACTAyoAMr/+eM7EGGRZ4FQ7BycEAZAgAEAHbEGtkoQm/wAAAAASUVORK5CYII=") repeat',
                "root-color": "#430",
                "root-background": "#e9df98",
                "root-stroke": "#e9df98",
                "root-font-size": 24,
                "root-padding": compact ? [ 5, 10 ] : [ 15, 25 ],
                "root-margin": compact ? 15 : 30,
                "root-radius": 5,
                "root-space": 10,
                "root-shadow": "rgba(0, 0, 0, .25)",
                "main-color": "#333",
                "main-background": "#a4c5c0",
                "main-stroke": "#a4c5c0",
                "main-font-size": 16,
                "main-padding": compact ? [ 4, 10 ] : [ 6, 20 ],
                "main-margin": compact ? [ 5, 10 ] : [ 20, 40 ],
                "main-radius": 5,
                "main-space": 5,
                "main-shadow": "rgba(0, 0, 0, .25)",
                "sub-color": "black",
                "sub-background": "white",
                "sub-stroke": "white",
                "sub-font-size": 12,
                "sub-padding": [ 5, 10 ],
                "sub-margin": compact ? [ 5, 10 ] : [ 10, 20 ],
                "sub-radius": 5,
                "sub-space": 5,
                "connect-color": "white",
                "connect-width": 2,
                "main-connect-width": 3,
                "connect-radius": 5,
                "selected-background": "rgb(254, 219, 0)",
                "selected-stroke": "rgb(254, 219, 0)",
                "marquee-background": "rgba(255,255,255,.3)",
                "marquee-stroke": "white",
                "drop-hint-color": "yellow",
                "drop-hint-width": 4,
                "order-hint-area-color": "rgba(0, 255, 0, .5)",
                "order-hint-path-color": "#0f0",
                "order-hint-path-width": 1,
                "text-selection-color": "rgb(27,171,255)",
                "line-height": 1.5
            });
        });
    }
};

//src/theme/tianpan.js
_p[79] = {
    value: function(require, exports, module) {
        var theme = _p.r(32);
        [ "tianpan", "tianpan-compact" ].forEach(function(name) {
            var compact = name == "tianpan-compact";
            theme.register(name, {
                background: '#3A4144 url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzg5QTQ0NDhENzgxMUUzOENGREE4QTg0RDgzRTZDNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQzg5QTQ0NThENzgxMUUzOENGREE4QTg0RDgzRTZDNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwOEQ1NDRGOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwOEQ1NDUwOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+e9P33AAAACVJREFUeNpisXJ0YUACTAyoAMr/+eM7EGGRZ4FQ7BycEAZAgAEAHbEGtkoQm/wAAAAASUVORK5CYII=") repeat',
                "root-color": "#430",
                "root-background": "#e9df98",
                "root-stroke": "#e9df98",
                "root-font-size": 25,
                "root-padding": compact ? 15 : 20,
                "root-margin": compact ? [ 15, 25 ] : 100,
                "root-radius": 30,
                "root-space": 10,
                "root-shadow": "rgba(0, 0, 0, .25)",
                "root-shape": "circle",
                "main-color": "#333",
                "main-background": "#a4c5c0",
                "main-stroke": "#a4c5c0",
                "main-font-size": 15,
                "main-padding": compact ? 10 : 12,
                "main-margin": compact ? 10 : 12,
                "main-radius": 10,
                "main-space": 5,
                "main-shadow": "rgba(0, 0, 0, .25)",
                "main-shape": "circle",
                "sub-color": "#333",
                "sub-background": "#99ca6a",
                "sub-stroke": "#a4c5c0",
                "sub-font-size": 13,
                "sub-padding": 5,
                "sub-margin": compact ? 6 : 10,
                "sub-tree-margin": 30,
                "sub-radius": 5,
                "sub-space": 5,
                "sub-shadow": "rgba(0, 0, 0, .25)",
                "sub-shape": "circle",
                "connect-color": "white",
                "connect-width": 2,
                "main-connect-width": 3,
                "connect-radius": 5,
                "selected-background": "rgb(254, 219, 0)",
                "selected-stroke": "rgb(254, 219, 0)",
                "selected-color": "black",
                "marquee-background": "rgba(255,255,255,.3)",
                "marquee-stroke": "white",
                "drop-hint-color": "yellow",
                "sub-drop-hint-width": 2,
                "main-drop-hint-width": 4,
                "root-drop-hint-width": 4,
                "order-hint-area-color": "rgba(0, 255, 0, .5)",
                "order-hint-path-color": "#0f0",
                "order-hint-path-width": 1,
                "text-selection-color": "rgb(27,171,255)",
                "line-height": 1.4
            });
        });
    }
};

//src/theme/wire.js
_p[80] = {
    value: function(require, exports, module) {
        var theme = _p.r(32);
        theme.register("wire", {
            background: "black",
            color: "#999",
            stroke: "none",
            padding: 10,
            margin: 20,
            "font-size": 14,
            "connect-color": "#999",
            "connect-width": 1,
            "selected-background": "#999",
            "selected-color": "black",
            "marquee-background": "rgba(255,255,255,.3)",
            "marquee-stroke": "white",
            "drop-hint-color": "yellow",
            "sub-drop-hint-width": 2,
            "main-drop-hint-width": 4,
            "root-drop-hint-width": 4,
            "order-hint-area-color": "rgba(0, 255, 0, .5)",
            "order-hint-path-color": "#0f0",
            "order-hint-path-width": 1,
            "text-selection-color": "rgb(27,171,255)",
            "line-height": 1.5
        });
    }
};

var moduleMapping = {
    "expose-kityminder": 34
};

function use(name) {
    _p.r([ moduleMapping[name] ]);
}
use('expose-kityminder');
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "8b98":
/***/ (function(module, exports) {

/*!
 * ====================================================
 * Hot Box UI - v1.0.15 - 2017-05-05
 * https://github.com/fex-team/hotbox
 * GitHub: https://github.com/fex-team/hotbox.git 
 * Copyright (c) 2017 Baidu FEX; Licensed BSD
 * ====================================================
 */

(function () {
var _p = {
    r: function(index) {
        if (_p[index].inited) {
            return _p[index].value;
        }
        if (typeof _p[index].value === "function") {
            var module = {
                exports: {}
            }, returnValue = _p[index].value(null, module.exports, module);
            _p[index].inited = true;
            _p[index].value = returnValue;
            if (returnValue !== undefined) {
                return returnValue;
            } else {
                for (var key in module.exports) {
                    if (module.exports.hasOwnProperty(key)) {
                        _p[index].inited = true;
                        _p[index].value = module.exports;
                        return module.exports;
                    }
                }
            }
        } else {
            _p[index].inited = true;
            return _p[index].value;
        }
    }
};

//src/expose.js
_p[0] = {
    value: function(require, exports, module) {
        module.exports = window.HotBox = _p.r(1);
    }
};

//src/hotbox.js
_p[1] = {
    value: function(require, exports, module) {
        var key = _p.r(2);
        var KeyControl = _p.r(3);
        /**** Dom Utils ****/
        function createElement(name) {
            return document.createElement(name);
        }
        function setElementAttribute(element, name, value) {
            element.setAttribute(name, value);
        }
        function getElementAttribute(element, name) {
            return element.getAttribute(name);
        }
        function addElementClass(element, name) {
            element.classList.add(name);
        }
        function removeElementClass(element, name) {
            element.classList.remove(name);
        }
        function appendChild(parent, child) {
            parent.appendChild(child);
        }
        /*******************/
        var IDLE = HotBox.STATE_IDLE = "idle";
        var div = "div";
        /**
     * Simple Formatter
     */
        function format(template, args) {
            if (typeof args != "object") {
                args = [].slice.apply(arguments, 1);
            }
            return String(template).replace(/\{(\w+)\}/g, function(match, name) {
                return args[name] || match;
            });
        }
        /**
     * Hot Box Class
     */
        function HotBox($container) {
            if (typeof $container == "string") {
                $container = document.querySelector($container);
            }
            if (!$container || !($container instanceof HTMLElement)) {
                throw new Error("No container or not invalid container for hot box");
            }
            // 创建 HotBox Dom 解构
            var $hotBox = createElement(div);
            addElementClass($hotBox, "hotbox");
            appendChild($container, $hotBox);
            // 保存 Dom 解构和父容器
            this.$element = $hotBox;
            this.$container = $container;
            // 标示是否是输入法状态
            this.isIME = false;
            /**
         * @Desc: 增加一个browser用于判断浏览器类型，方便解决兼容性问题
         * @Editor: Naixor
         * @Date: 2015.09.14
         */
            this.browser = {
                sg: /se[\s\S]+metasr/.test(navigator.userAgent.toLowerCase())
            };
            /*
        * added by zhangbobell
        * 2015.09.22
        * 增加父状态机，以解决在父 FSM 下状态控制的问题，最好的解决办法是增加一个函数队列
        * 将其中的函数一起执行。//TODO
        * */
            this._parentFSM = {};
            // 记录位置
            this.position = {};
            // 已定义的状态（string => HotBoxState）
            var _states = {};
            // 主状态（HotBoxState）
            var _mainState = null;
            // 当前状态（HotBoxState）
            var _currentState = IDLE;
            // 当前状态堆栈
            var _stateStack = [];
            // 实例引用
            var _this = this;
            var _controler;
            /**
         * Controller: {
         *     constructor(hotbox: HotBox),
         *     active: () => void
         * }
         */
            function _control(Controller) {
                if (_controler) {
                    _controler.active();
                    return;
                }
                Controller = Controller || KeyControl;
                _controler = new Controller(_this);
                _controler.active();
                $hotBox.onmousedown = function(e) {
                    e.stopPropagation();
                    e.preventDefault();
                };
                return _this;
            }
            function _dispatchKey(e) {
                var type = e.type.toLowerCase();
                e.keyHash = key.hash(e);
                e.isKey = function(keyExpression) {
                    if (!keyExpression) return false;
                    var expressions = keyExpression.split(/\s*\|\s*/);
                    while (expressions.length) {
                        if (e.keyHash == key.hash(expressions.shift())) return true;
                    }
                    return false;
                };
                e[type] = true;
                // Boot: keyup and activeKey pressed on IDLE, active main state.
                if (e.keyup && _this.activeKey && e.isKey(_this.activeKey) && _currentState == IDLE && _mainState) {
                    _activeState("main", {
                        x: $container.clientWidth / 2,
                        y: $container.clientHeight / 2
                    });
                    return;
                }
                var handleState = _currentState == IDLE ? _mainState : _currentState;
                if (handleState) {
                    var handleResult = handleState.handleKeyEvent(e);
                    if (typeof _this.onkeyevent == "function") {
                        e.handleResult = handleResult;
                        _this.onkeyevent(e, handleResult);
                    }
                    return handleResult;
                }
                return null;
            }
            function _addState(name) {
                if (!name) return _currentState;
                if (name == IDLE) {
                    throw new Error("Can not define or use the `idle` state.");
                }
                _states[name] = _states[name] || new HotBoxState(this, name);
                if (name == "main") {
                    _mainState = _states[name];
                }
                return _states[name];
            }
            function _activeState(name, position) {
                _this.position = position;
                // 回到 IDLE
                if (name == IDLE) {
                    if (_currentState != IDLE) {
                        _stateStack.shift().deactive();
                        _stateStack = [];
                    }
                    _currentState = IDLE;
                } else if (name == "back") {
                    if (_currentState != IDLE) {
                        _currentState.deactive();
                        _stateStack.shift();
                        _currentState = _stateStack[0];
                        if (_currentState) {
                            _currentState.active();
                        } else {
                            _currentState = "idle";
                        }
                    }
                } else {
                    if (_currentState != IDLE) {
                        _currentState.deactive();
                    }
                    var newState = _states[name];
                    _stateStack.unshift(newState);
                    if (typeof _this.position == "function") {
                        position = _this.position(position);
                    }
                    newState.active(position);
                    _currentState = newState;
                }
            }
            function setParentFSM(fsm) {
                _this._parentFSM = fsm;
            }
            function getParentFSM() {
                return _this._parentFSM;
            }
            this.control = _control;
            this.state = _addState;
            this.active = _activeState;
            this.dispatch = _dispatchKey;
            this.setParentFSM = setParentFSM;
            this.getParentFSM = getParentFSM;
            this.activeKey = "space";
            this.actionKey = "space";
        }
        /**
     * 表示热盒某个状态，包含这些状态需要的 Dom 对象
     */
        function HotBoxState(hotBox, stateName) {
            var BUTTON_SELECTED_CLASS = "selected";
            var BUTTON_PRESSED_CLASS = "pressed";
            var STATE_ACTIVE_CLASS = "active";
            // 状态容器
            var $state = createElement(div);
            // 四种可见的按钮容器
            var $center = createElement(div);
            var $ring = createElement(div);
            var $ringShape = createElement("div");
            var $top = createElement(div);
            var $bottom = createElement(div);
            // 添加 CSS 类
            addElementClass($state, "state");
            addElementClass($state, stateName);
            addElementClass($center, "center");
            addElementClass($ring, "ring");
            addElementClass($ringShape, "ring-shape");
            addElementClass($top, "top");
            addElementClass($bottom, "bottom");
            // 摆放容器
            appendChild(hotBox.$element, $state);
            appendChild($state, $ringShape);
            appendChild($state, $center);
            appendChild($state, $ring);
            appendChild($state, $top);
            appendChild($state, $bottom);
            // 记住状态名称
            this.name = stateName;
            // 五种按钮：中心，圆环，上栏，下栏，幕后
            var buttons = {
                center: null,
                ring: [],
                top: [],
                bottom: [],
                behind: []
            };
            var allButtons = [];
            var selectedButton = null;
            var pressedButton = null;
            var stateActived = false;
            // 布局，添加按钮后，标记需要布局
            var needLayout = true;
            function layout() {
                var radius = buttons.ring.length * 15;
                layoutRing(radius);
                layoutTop(radius);
                layoutBottom(radius);
                indexPosition();
                needLayout = false;
                function layoutRing(radius) {
                    var ring = buttons.ring;
                    var step = 2 * Math.PI / ring.length;
                    if (buttons.center) {
                        buttons.center.indexedPosition = [ 0, 0 ];
                    }
                    $ringShape.style.marginLeft = $ringShape.style.marginTop = -radius + "px";
                    $ringShape.style.width = $ringShape.style.height = radius + radius + "px";
                    var $button, angle, x, y;
                    for (var i = 0; i < ring.length; i++) {
                        $button = ring[i].$button;
                        angle = step * i - Math.PI / 2;
                        x = radius * Math.cos(angle);
                        y = radius * Math.sin(angle);
                        ring[i].indexedPosition = [ x, y ];
                        $button.style.left = x + "px";
                        $button.style.top = y + "px";
                    }
                }
                function layoutTop(radius) {
                    var xOffset = -$top.clientWidth / 2;
                    var yOffset = -radius * 2 - $top.clientHeight / 2;
                    $top.style.marginLeft = xOffset + "px";
                    $top.style.marginTop = yOffset + "px";
                    buttons.top.forEach(function(topButton) {
                        var $button = topButton.$button;
                        topButton.indexedPosition = [ xOffset + $button.offsetLeft + $button.clientWidth / 2, yOffset ];
                    });
                }
                function layoutBottom(radius) {
                    var xOffset = -$bottom.clientWidth / 2;
                    var yOffset = radius * 2 - $bottom.clientHeight / 2;
                    $bottom.style.marginLeft = xOffset + "px";
                    $bottom.style.marginTop = yOffset + "px";
                    buttons.bottom.forEach(function(bottomButton) {
                        var $button = bottomButton.$button;
                        bottomButton.indexedPosition = [ xOffset + $button.offsetLeft + $button.clientWidth / 2, yOffset ];
                    });
                }
                function indexPosition() {
                    var positionedButtons = allButtons.filter(function(button) {
                        return button.indexedPosition;
                    });
                    positionedButtons.forEach(findNeightbour);
                    function findNeightbour(button) {
                        var neighbor = {};
                        var coef = 0;
                        var minCoef = {};
                        var homePosition = button.indexedPosition;
                        var candidatePosition, dx, dy, ds;
                        var possible, dir;
                        var abs = Math.abs;
                        positionedButtons.forEach(function(candidate) {
                            if (button == candidate) return;
                            candidatePosition = candidate.indexedPosition;
                            possible = [];
                            dx = candidatePosition[0] - homePosition[0];
                            dy = candidatePosition[1] - homePosition[1];
                            ds = Math.sqrt(dx * dx + dy * dy);
                            if (abs(dx) > 2) {
                                possible.push(dx > 0 ? "right" : "left");
                                possible.push(ds + abs(dy));
                            }
                            if (abs(dy) > 2) {
                                possible.push(dy > 0 ? "down" : "up");
                                possible.push(ds + abs(dx));
                            }
                            while (possible.length) {
                                dir = possible.shift();
                                coef = possible.shift();
                                if (!neighbor[dir] || coef < minCoef[dir]) {
                                    neighbor[dir] = candidate;
                                    minCoef[dir] = coef;
                                }
                            }
                        });
                        button.neighbor = neighbor;
                    }
                }
            }
            function alwaysEnable() {
                return true;
            }
            // 为状态创建按钮
            function createButton(option) {
                var $button = createElement(div);
                addElementClass($button, "button");
                var render = option.render || defaultButtonRender;
                $button.innerHTML = render(format, option);
                switch (option.position) {
                  case "center":
                    appendChild($center, $button);
                    break;

                  case "ring":
                    appendChild($ring, $button);
                    break;

                  case "top":
                    appendChild($top, $button);
                    break;

                  case "bottom":
                    appendChild($bottom, $button);
                    break;
                }
                return {
                    action: option.action,
                    enable: option.enable || alwaysEnable,
                    beforeShow: option.beforeShow,
                    key: option.key,
                    next: option.next,
                    label: option.label,
                    data: option.data || null,
                    $button: $button
                };
            }
            // 默认按钮渲染
            function defaultButtonRender(format, option) {
                return format('<span class="label">{label}</span><span class="key">{key}</span>', {
                    label: option.label,
                    key: option.key && option.key.split("|")[0]
                });
            }
            // 为当前状态添加按钮
            this.button = function(option) {
                var button = createButton(option);
                if (option.position == "center") {
                    buttons.center = button;
                } else if (buttons[option.position]) {
                    buttons[option.position].push(button);
                }
                allButtons.push(button);
                needLayout = true;
            };
            function activeState(position) {
                position = position || {
                    x: hotBox.$container.clientWidth / 2,
                    y: hotBox.$container.clientHeight / 2
                };
                if (position) {
                    $state.style.left = position.x + "px";
                    $state.style.top = position.y + "px";
                }
                allButtons.forEach(function(button) {
                    var $button = button.$button;
                    if ($button) {
                        $button.classList[button.enable() ? "add" : "remove"]("enabled");
                    }
                    if (button.beforeShow) {
                        button.beforeShow();
                    }
                });
                addElementClass($state, STATE_ACTIVE_CLASS);
                if (needLayout) {
                    layout();
                }
                if (!selectedButton) {
                    select(buttons.center || buttons.ring[0] || buttons.top[0] || buttons.bottom[0]);
                }
                stateActived = true;
            }
            function deactiveState() {
                removeElementClass($state, STATE_ACTIVE_CLASS);
                select(null);
                stateActived = false;
            }
            // 激活当前状态
            this.active = activeState;
            // 反激活当前状态
            this.deactive = deactiveState;
            function press(button) {
                if (pressedButton && pressedButton.$button) {
                    removeElementClass(pressedButton.$button, BUTTON_PRESSED_CLASS);
                }
                pressedButton = button;
                if (pressedButton && pressedButton.$button) {
                    addElementClass(pressedButton.$button, BUTTON_PRESSED_CLASS);
                }
            }
            function select(button) {
                if (selectedButton && selectedButton.$button) {
                    if (selectedButton.$button) {
                        removeElementClass(selectedButton.$button, BUTTON_SELECTED_CLASS);
                    }
                }
                selectedButton = button;
                if (selectedButton && selectedButton.$button) {
                    addElementClass(selectedButton.$button, BUTTON_SELECTED_CLASS);
                }
            }
            $state.onmouseup = function(e) {
                if (e.button) return;
                var target = e.target;
                while (target && target != $state) {
                    if (target.classList.contains("button")) {
                        allButtons.forEach(function(button) {
                            if (button.$button == target) {
                                execute(button);
                            }
                        });
                    }
                    target = target.parentNode;
                }
            };
            this.handleKeyEvent = function(e) {
                var handleResult = null;
                /**
             * @Desc: 搜狗浏览器下esc只触发keyup，因此做兼容性处理
             * @Editor: Naixor
             * @Date: 2015.09.14
             */
                if (hotBox.browser.sg) {
                    if (e.isKey("esc")) {
                        if (pressedButton) {
                            // 若存在已经按下的按钮，则取消操作
                            if (!e.isKey(pressedButton.key)) {
                                // the button is not esc
                                press(null);
                            }
                        } else {
                            hotBox.active("back", hotBox.position);
                        }
                        return "back";
                    }
                }
                if (e.keydown || hotBox.isIME && e.keyup) {
                    allButtons.forEach(function(button) {
                        if (button.enable() && e.isKey(button.key)) {
                            if (stateActived || hotBox.hintDeactiveMainState) {
                                select(button);
                                press(button);
                                handleResult = "buttonpress";
                                // 如果是 keyup 事件触发的，因为没有后续的按键事件，所以就直接执行
                                if (e.keyup) {
                                    execute(button);
                                    handleResult = "execute";
                                    return handleResult;
                                }
                            } else {
                                execute(button);
                                handleResult = "execute";
                            }
                            e.preventDefault();
                            e.stopPropagation();
                            if (!stateActived && hotBox.hintDeactiveMainState) {
                                hotBox.active(stateName, hotBox.position);
                            }
                        }
                    });
                    if (stateActived) {
                        if (e.isKey("esc")) {
                            if (pressedButton) {
                                // 若存在已经按下的按钮，则取消操作
                                if (!e.isKey(pressedButton.key)) {
                                    // the button is not esc
                                    press(null);
                                }
                            } else {
                                hotBox.active("back", hotBox.position);
                            }
                            return "back";
                        }
                        [ "up", "down", "left", "right" ].forEach(function(dir) {
                            if (!e.isKey(dir)) return;
                            if (!selectedButton) {
                                select(buttons.center || buttons.ring[0] || buttons.top[0] || buttons.bottom[0]);
                                return;
                            }
                            var neighbor = selectedButton.neighbor[dir];
                            while (neighbor && !neighbor.enable()) {
                                neighbor = neighbor.neighbor[dir];
                            }
                            if (neighbor) {
                                select(neighbor);
                            }
                            handleResult = "navigate";
                        });
                        // 若是由 keyup 触发的，则直接执行选中的按钮
                        if (e.isKey("space") && e.keyup) {
                            execute(selectedButton);
                            e.preventDefault();
                            e.stopPropagation();
                            handleResult = "execute";
                        } else if (e.isKey("space") && selectedButton) {
                            press(selectedButton);
                            handleResult = "buttonpress";
                        } else if (pressedButton && pressedButton != selectedButton) {
                            press(null);
                            handleResult = "selectcancel";
                        }
                    }
                } else if (e.keyup && (stateActived || !hotBox.hintDeactiveMainState)) {
                    if (pressedButton) {
                        if (e.isKey("space") && selectedButton == pressedButton || e.isKey(pressedButton.key)) {
                            execute(pressedButton);
                            e.preventDefault();
                            e.stopPropagation();
                            handleResult = "execute";
                        }
                    }
                }
                /*
             * Add by zhangbobell 2015.09.06
             * 增加了下面这一个判断因为 safari 下开启输入法后，所有的 keydown 的 keycode 都为 229，
             * 只能以 keyup 的 keycode 进行判断
             * */
                hotBox.isIME = e.keyCode == 229 && e.keydown;
                return handleResult;
            };
            function execute(button) {
                if (button) {
                    if (!button.enable || button.enable()) {
                        if (button.action) button.action(button);
                        hotBox.active(button.next || IDLE, hotBox.position);
                    }
                    press(null);
                    select(null);
                }
            }
        }
        module.exports = HotBox;
    }
};

//src/key.js
_p[2] = {
    value: function(require, exports, module) {
        var keymap = _p.r(4);
        var CTRL_MASK = 4096;
        var ALT_MASK = 8192;
        var SHIFT_MASK = 16384;
        function hash(unknown) {
            if (typeof unknown == "string") {
                return hashKeyExpression(unknown);
            }
            return hashKeyEvent(unknown);
        }
        function is(a, b) {
            return a && b && hash(a) == hash(b);
        }
        exports.hash = hash;
        exports.is = is;
        function hashKeyEvent(keyEvent) {
            var hashCode = 0;
            if (keyEvent.ctrlKey || keyEvent.metaKey) {
                hashCode |= CTRL_MASK;
            }
            if (keyEvent.altKey) {
                hashCode |= ALT_MASK;
            }
            if (keyEvent.shiftKey) {
                hashCode |= SHIFT_MASK;
            }
            // Shift, Control, Alt KeyCode ignored.
            if ([ 16, 17, 18, 91 ].indexOf(keyEvent.keyCode) == -1) {
                hashCode |= keyEvent.keyCode;
            }
            return hashCode;
        }
        function hashKeyExpression(keyExpression) {
            var hashCode = 0;
            keyExpression.toLowerCase().split(/\s*\+\s*/).forEach(function(name) {
                switch (name) {
                  case "ctrl":
                  case "cmd":
                    hashCode |= CTRL_MASK;
                    break;

                  case "alt":
                    hashCode |= ALT_MASK;
                    break;

                  case "shift":
                    hashCode |= SHIFT_MASK;
                    break;

                  default:
                    hashCode |= keymap[name];
                }
            });
            return hashCode;
        }
    }
};

//src/keycontrol.js
_p[3] = {
    value: function(require, exports, module) {
        var key = _p.r(2);
        var FOCUS_CLASS = "hotbox-focus";
        var RECEIVER_CLASS = "hotbox-key-receiver";
        function KeyControl(hotbox) {
            var _this = this;
            var _receiver;
            var _actived = true;
            var _receiverIsSelfCreated = false;
            var $container = hotbox.$container;
            _createReceiver();
            _bindReceiver();
            _bindContainer();
            _active();
            function _createReceiver() {
                _receiver = document.createElement("input");
                _receiver.classList.add(RECEIVER_CLASS);
                $container.appendChild(_receiver);
                _receiverIsSelfCreated = true;
            }
            function _bindReceiver() {
                _receiver.onkeyup = _handle;
                _receiver.onkeypress = _handle;
                _receiver.onkeydown = _handle;
                _receiver.onfocus = _active;
                _receiver.onblur = _deactive;
                if (_receiverIsSelfCreated) {
                    _receiver.oninput = function(e) {
                        _receiver.value = null;
                    };
                }
            }
            function _bindContainer() {
                $container.onmousedown = function(e) {
                    _active();
                    e.preventDefault();
                };
            }
            function _handle(keyEvent) {
                if (!_actived) return;
                hotbox.dispatch(keyEvent);
            }
            function _active() {
                _receiver.select();
                _receiver.focus();
                _actived = true;
                $container.classList.add(FOCUS_CLASS);
            }
            function _deactive() {
                _receiver.blur();
                _actived = false;
                $container.classList.remove(FOCUS_CLASS);
            }
            this.handle = _handle;
            this.active = _active;
            this.deactive = _deactive;
        }
        module.exports = KeyControl;
    }
};

//src/keymap.js
_p[4] = {
    value: function(require, exports, module) {
        var keymap = {
            Shift: 16,
            Control: 17,
            Alt: 18,
            CapsLock: 20,
            BackSpace: 8,
            Tab: 9,
            Enter: 13,
            Esc: 27,
            Space: 32,
            PageUp: 33,
            PageDown: 34,
            End: 35,
            Home: 36,
            Insert: 45,
            Left: 37,
            Up: 38,
            Right: 39,
            Down: 40,
            Direction: {
                37: 1,
                38: 1,
                39: 1,
                40: 1
            },
            Delete: 46,
            NumLock: 144,
            Cmd: 91,
            CmdFF: 224,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            "`": 192,
            "=": 187,
            "-": 189,
            "/": 191,
            ".": 190
        };
        // 小写适配
        for (var key in keymap) {
            if (keymap.hasOwnProperty(key)) {
                keymap[key.toLowerCase()] = keymap[key];
            }
        }
        var aKeyCode = 65;
        var aCharCode = "a".charCodeAt(0);
        // letters
        "abcdefghijklmnopqrstuvwxyz".split("").forEach(function(letter) {
            keymap[letter] = aKeyCode + (letter.charCodeAt(0) - aCharCode);
        });
        // numbers
        var n = 9;
        do {
            keymap[n.toString()] = n + 48;
        } while (n--);
        module.exports = keymap;
    }
};

var moduleMapping = {
    expose: 0
};

function use(name) {
    _p.r([ moduleMapping[name] ]);
}
use('expose');
})();

/***/ }),

/***/ "93d2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c034":
/***/ (function(module, exports) {

/*!
 * ====================================================
 * kityminder-editor - v1.0.67 - 2020-03-04
 * https://github.com/fex-team/kityminder-editor
 * GitHub: https://github.com/fex-team/kityminder-editor 
 * Copyright (c) 2020 ; Licensed 
 * ====================================================
 */
/* eslint-disable */
(function () {
var _p = {
    r: function(index) {
        if (_p[index].inited) {
            return _p[index].value;
        }
        if (typeof _p[index].value === "function") {
            var module = {
                exports: {}
            }, returnValue = _p[index].value(null, module.exports, module);
            _p[index].inited = true;
            _p[index].value = returnValue;
            if (returnValue !== undefined) {
                return returnValue;
            } else {
                for (var key in module.exports) {
                    if (module.exports.hasOwnProperty(key)) {
                        _p[index].inited = true;
                        _p[index].value = module.exports;
                        return module.exports;
                    }
                }
            }
        } else {
            _p[index].inited = true;
            return _p[index].value;
        }
    }
};

//src/editor.js
_p[0] = {
    value: function(require, exports, module) {
        /**
     * 运行时
     */
        var runtimes = [];
        function assemble(runtime) {
            runtimes.push(runtime);
        }
        function KMEditor(selector) {
            this.selector = selector;
            for (var i = 0; i < runtimes.length; i++) {
                if (typeof runtimes[i] == "function") {
                    runtimes[i].call(this, this);
                }
            }
        }
        KMEditor.assemble = assemble;
        assemble(_p.r(7));
        assemble(_p.r(9));
        assemble(_p.r(14));
        assemble(_p.r(18));
        assemble(_p.r(11));
        assemble(_p.r(12));
        assemble(_p.r(5));
        assemble(_p.r(6));
        assemble(_p.r(8));
        assemble(_p.r(15));
        assemble(_p.r(10));
        assemble(_p.r(13));
        assemble(_p.r(16));
        assemble(_p.r(17));
        return module.exports = KMEditor;
    }
};

//src/expose-editor.js
/**
 * @fileOverview
 *
 * 打包暴露
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[1] = {
    value: function(require, exports, module) {
        return module.exports = kityminder.Editor = _p.r(0);
    }
};

//src/hotbox.js
_p[2] = {
    value: function(require, exports, module) {
        return module.exports = window.HotBox;
    }
};

//src/lang.js
_p[3] = {
    value: function(require, exports, module) {}
};

//src/minder.js
_p[4] = {
    value: function(require, exports, module) {
        return module.exports = window.kityminder.Minder;
    }
};

//src/runtime/clipboard-mimetype.js
/**
 * @Desc: 新增一个用于处理系统ctrl+c ctrl+v等方式导入导出节点的MIMETYPE处理，如系统不支持clipboardEvent或者是FF则不初始化改class
 * @Editor: Naixor
 * @Date: 2015.9.21
 */
_p[5] = {
    value: function(require, exports, module) {
        function MimeType() {
            /**
		 * 私有变量
		 */
            var SPLITOR = "\ufeff";
            var MIMETYPE = {
                "application/km": "￿"
            };
            var SIGN = {
                "\ufeff": "SPLITOR",
                "￿": "application/km"
            };
            /**
		 * 用于将一段纯文本封装成符合其数据格式的文本
		 * @method process 			private
		 * @param  {MIMETYPE} mimetype 数据格式
		 * @param  {String} text     原始文本
		 * @return {String}          符合该数据格式下的文本
		 * @example
		 * 			var str = "123";
		 * 			str = process('application/km', str); // 返回的内容再经过MimeType判断会读取出其数据格式为application/km
		 * 			process('text/plain', str); // 若接受到一个非纯文本信息，则会将其转换为新的数据格式
		 */
            function process(mimetype, text) {
                if (!this.isPureText(text)) {
                    var _mimetype = this.whichMimeType(text);
                    if (!_mimetype) {
                        throw new Error("unknow mimetype!");
                    }
                    text = this.getPureText(text);
                }
                if (mimetype === false) {
                    return text;
                }
                return mimetype + SPLITOR + text;
            }
            /**
		 * 注册数据类型的标识
		 * @method registMimeTypeProtocol  	public
		 * @param  {String} type 数据类型
		 * @param  {String} sign 标识
		 */
            this.registMimeTypeProtocol = function(type, sign) {
                if (sign && SIGN[sign]) {
                    throw new Error("sing has registed!");
                }
                if (type && !!MIMETYPE[type]) {
                    throw new Error("mimetype has registed!");
                }
                SIGN[sign] = type;
                MIMETYPE[type] = sign;
            };
            /**
		 * 获取已注册数据类型的协议
		 * @method getMimeTypeProtocol  	public
		 * @param  {String} type 数据类型
		 * @param  {String} text|undefiend  文本内容或不传入
		 * @return {String|Function} 
		 * @example 
		 * 			text若不传入则直接返回对应数据格式的处理(process)方法
		 * 			若传入文本则直接调用对应的process方法进行处理，此时返回处理后的内容
		 * 			var m = new MimeType();
		 * 			var kmprocess = m.getMimeTypeProtocol('application/km');
		 * 			kmprocess("123") === m.getMimeTypeProtocol('application/km', "123");
		 * 			
		 */
            this.getMimeTypeProtocol = function(type, text) {
                var mimetype = MIMETYPE[type] || false;
                if (text === undefined) {
                    return process.bind(this, mimetype);
                }
                return process(mimetype, text);
            };
            this.getSpitor = function() {
                return SPLITOR;
            };
            this.getMimeType = function(sign) {
                if (sign !== undefined) {
                    return SIGN[sign] || null;
                }
                return MIMETYPE;
            };
        }
        MimeType.prototype.isPureText = function(text) {
            return !~text.indexOf(this.getSpitor());
        };
        MimeType.prototype.getPureText = function(text) {
            if (this.isPureText(text)) {
                return text;
            }
            return text.split(this.getSpitor())[1];
        };
        MimeType.prototype.whichMimeType = function(text) {
            if (this.isPureText(text)) {
                return null;
            }
            return this.getMimeType(text.split(this.getSpitor())[0]);
        };
        function MimeTypeRuntime() {
            if (this.minder.supportClipboardEvent && !kity.Browser.gecko) {
                this.MimeType = new MimeType();
            }
        }
        return module.exports = MimeTypeRuntime;
    }
};

//src/runtime/clipboard.js
/**
 * @Desc: 处理editor的clipboard事件，只在支持ClipboardEvent并且不是FF的情况下工作
 * @Editor: Naixor
 * @Date: 2015.9.21
 */
_p[6] = {
    value: function(require, exports, module) {
        function ClipboardRuntime() {
            var minder = this.minder;
            var Data = window.kityminder.data;
            if (!minder.supportClipboardEvent || kity.Browser.gecko) {
                return;
            }
            var fsm = this.fsm;
            var receiver = this.receiver;
            var MimeType = this.MimeType;
            var kmencode = MimeType.getMimeTypeProtocol("application/km"), decode = Data.getRegisterProtocol("json").decode;
            var _selectedNodes = [];
            /*
		 * 增加对多节点赋值粘贴的处理
		 */
            function encode(nodes) {
                var _nodes = [];
                for (var i = 0, l = nodes.length; i < l; i++) {
                    _nodes.push(minder.exportNode(nodes[i]));
                }
                return kmencode(Data.getRegisterProtocol("json").encode(_nodes));
            }
            var beforeCopy = function(e) {
                if (document.activeElement == receiver.element) {
                    var clipBoardEvent = e;
                    var state = fsm.state();
                    switch (state) {
                      case "input":
                        {
                            break;
                        }

                      case "normal":
                        {
                            var nodes = [].concat(minder.getSelectedNodes());
                            if (nodes.length) {
                                // 这里由于被粘贴复制的节点的id信息也都一样，故做此算法
                                // 这里有个疑问，使用node.getParent()或者node.parent会离奇导致出现非选中节点被渲染成选中节点，因此使用isAncestorOf，而没有使用自行回溯的方式
                                if (nodes.length > 1) {
                                    var targetLevel;
                                    nodes.sort(function(a, b) {
                                        return a.getLevel() - b.getLevel();
                                    });
                                    targetLevel = nodes[0].getLevel();
                                    if (targetLevel !== nodes[nodes.length - 1].getLevel()) {
                                        var plevel, pnode, idx = 0, l = nodes.length, pidx = l - 1;
                                        pnode = nodes[pidx];
                                        while (pnode.getLevel() !== targetLevel) {
                                            idx = 0;
                                            while (idx < l && nodes[idx].getLevel() === targetLevel) {
                                                if (nodes[idx].isAncestorOf(pnode)) {
                                                    nodes.splice(pidx, 1);
                                                    break;
                                                }
                                                idx++;
                                            }
                                            pidx--;
                                            pnode = nodes[pidx];
                                        }
                                    }
                                }
                                var str = encode(nodes);
                                clipBoardEvent.clipboardData.setData("text/plain", str);
                            }
                            e.preventDefault();
                            break;
                        }
                    }
                }
            };
            var beforeCut = function(e) {
                if (document.activeElement == receiver.element) {
                    if (minder.getStatus() !== "normal") {
                        e.preventDefault();
                        return;
                    }
                    var clipBoardEvent = e;
                    var state = fsm.state();
                    switch (state) {
                      case "input":
                        {
                            break;
                        }

                      case "normal":
                        {
                            var nodes = minder.getSelectedNodes();
                            if (nodes.length) {
                                clipBoardEvent.clipboardData.setData("text/plain", encode(nodes));
                                minder.execCommand("removenode");
                            }
                            e.preventDefault();
                            break;
                        }
                    }
                }
            };
            var beforePaste = function(e) {
                if (document.activeElement == receiver.element) {
                    if (minder.getStatus() !== "normal") {
                        e.preventDefault();
                        return;
                    }
                    var clipBoardEvent = e;
                    var state = fsm.state();
                    var textData = clipBoardEvent.clipboardData.getData("text/plain");
                    switch (state) {
                      case "input":
                        {
                            // input状态下如果格式为application/km则不进行paste操作
                            if (!MimeType.isPureText(textData)) {
                                e.preventDefault();
                                return;
                            }
                            break;
                        }

                      case "normal":
                        {
                            /*
						 * 针对normal状态下通过对选中节点粘贴导入子节点文本进行单独处理
						 */
                            var sNodes = minder.getSelectedNodes();
                            if (MimeType.whichMimeType(textData) === "application/km") {
                                var nodes = decode(MimeType.getPureText(textData));
                                var _node;
                                sNodes.forEach(function(node) {
                                    // 由于粘贴逻辑中为了排除子节点重新排序导致逆序，因此复制的时候倒过来
                                    for (var i = nodes.length - 1; i >= 0; i--) {
                                        _node = minder.createNode(null, node);
                                        minder.importNode(_node, nodes[i]);
                                        _selectedNodes.push(_node);
                                        node.appendChild(_node);
                                    }
                                });
                                minder.select(_selectedNodes, true);
                                _selectedNodes = [];
                                minder.refresh();
                            } else if (clipBoardEvent.clipboardData && clipBoardEvent.clipboardData.items[0].type.indexOf("image") > -1) {
                                var imageFile = clipBoardEvent.clipboardData.items[0].getAsFile();
                                var serverService = angular.element(document.body).injector().get("server");
                                return serverService.uploadImage(imageFile).then(function(json) {
                                    var resp = json.data;
                                    if (resp.errno === 0) {
                                        minder.execCommand("image", resp.data.url);
                                    }
                                });
                            } else {
                                sNodes.forEach(function(node) {
                                    minder.Text2Children(node, textData);
                                });
                            }
                            e.preventDefault();
                            break;
                        }
                    }
                }
            };
            /**
		 * 由editor的receiver统一处理全部事件，包括clipboard事件
		 * @Editor: Naixor
		 * @Date: 2015.9.24
		 */
            document.addEventListener("copy", beforeCopy);
            document.addEventListener("cut", beforeCut);
            document.addEventListener("paste", beforePaste);
        }
        return module.exports = ClipboardRuntime;
    }
};

//src/runtime/container.js
/**
 * @fileOverview
 *
 * 初始化编辑器的容器
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[7] = {
    value: function(require, exports, module) {
        /**
     * 最先执行的 Runtime，初始化编辑器容器
     */
        function ContainerRuntime() {
            var container;
            if (typeof this.selector == "string") {
                container = document.querySelector(this.selector);
            } else {
                container = this.selector;
            }
            if (!container) throw new Error("Invalid selector: " + this.selector);
            // 这个类名用于给编辑器添加样式
            container.classList.add("km-editor");
            // 暴露容器给其他运行时使用
            this.container = container;
        }
        return module.exports = ContainerRuntime;
    }
};

//src/runtime/drag.js
/**
 * @fileOverview
 *
 * 用于拖拽节点时屏蔽键盘事件
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[8] = {
    value: function(require, exports, module) {
        var Hotbox = _p.r(2);
        var Debug = _p.r(19);
        var debug = new Debug("drag");
        function DragRuntime() {
            var fsm = this.fsm;
            var minder = this.minder;
            var hotbox = this.hotbox;
            var receiver = this.receiver;
            var receiverElement = receiver.element;
            // setup everything to go
            setupFsm();
            // listen the fsm changes, make action.
            function setupFsm() {
                // when jumped to drag mode, enter
                fsm.when("* -> drag", function() {});
                fsm.when("drag -> *", function(exit, enter, reason) {
                    if (reason == "drag-finish") {}
                });
            }
            var downX, downY;
            var MOUSE_HAS_DOWN = 0;
            var MOUSE_HAS_UP = 1;
            var BOUND_CHECK = 20;
            var flag = MOUSE_HAS_UP;
            var maxX, maxY, osx, osy, containerY;
            var freeHorizen = false, freeVirtical = false;
            var frame;
            function move(direction, speed) {
                if (!direction) {
                    freeHorizen = freeVirtical = false;
                    frame && kity.releaseFrame(frame);
                    frame = null;
                    return;
                }
                if (!frame) {
                    frame = kity.requestFrame(function(direction, speed, minder) {
                        return function(frame) {
                            switch (direction) {
                              case "left":
                                minder._viewDragger.move({
                                    x: -speed,
                                    y: 0
                                }, 0);
                                break;

                              case "top":
                                minder._viewDragger.move({
                                    x: 0,
                                    y: -speed
                                }, 0);
                                break;

                              case "right":
                                minder._viewDragger.move({
                                    x: speed,
                                    y: 0
                                }, 0);
                                break;

                              case "bottom":
                                minder._viewDragger.move({
                                    x: 0,
                                    y: speed
                                }, 0);
                                break;

                              default:
                                return;
                            }
                            frame.next();
                        };
                    }(direction, speed, minder));
                }
            }
            minder.on("mousedown", function(e) {
                flag = MOUSE_HAS_DOWN;
                var rect = minder.getPaper().container.getBoundingClientRect();
                downX = e.originEvent.clientX;
                downY = e.originEvent.clientY;
                containerY = rect.top;
                maxX = rect.width;
                maxY = rect.height;
            });
            minder.on("mousemove", function(e) {
                if (fsm.state() === "drag" && flag == MOUSE_HAS_DOWN && minder.getSelectedNode() && (Math.abs(downX - e.originEvent.clientX) > BOUND_CHECK || Math.abs(downY - e.originEvent.clientY) > BOUND_CHECK)) {
                    osx = e.originEvent.clientX;
                    osy = e.originEvent.clientY - containerY;
                    if (osx < BOUND_CHECK) {
                        move("right", BOUND_CHECK - osx);
                    } else if (osx > maxX - BOUND_CHECK) {
                        move("left", BOUND_CHECK + osx - maxX);
                    } else {
                        freeHorizen = true;
                    }
                    if (osy < BOUND_CHECK) {
                        move("bottom", osy);
                    } else if (osy > maxY - BOUND_CHECK) {
                        move("top", BOUND_CHECK + osy - maxY);
                    } else {
                        freeVirtical = true;
                    }
                    if (freeHorizen && freeVirtical) {
                        move(false);
                    }
                }
                if (fsm.state() !== "drag" && flag === MOUSE_HAS_DOWN && minder.getSelectedNode() && (Math.abs(downX - e.originEvent.clientX) > BOUND_CHECK || Math.abs(downY - e.originEvent.clientY) > BOUND_CHECK)) {
                    if (fsm.state() === "hotbox") {
                        hotbox.active(Hotbox.STATE_IDLE);
                    }
                    return fsm.jump("drag", "user-drag");
                }
            });
            window.addEventListener("mouseup", function() {
                flag = MOUSE_HAS_UP;
                if (fsm.state() === "drag") {
                    move(false);
                    return fsm.jump("normal", "drag-finish");
                }
            }, false);
        }
        return module.exports = DragRuntime;
    }
};

//src/runtime/fsm.js
/**
 * @fileOverview
 *
 * 编辑器状态机
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[9] = {
    value: function(require, exports, module) {
        var Debug = _p.r(19);
        var debug = new Debug("fsm");
        function handlerConditionMatch(condition, when, exit, enter) {
            if (condition.when != when) return false;
            if (condition.enter != "*" && condition.enter != enter) return false;
            if (condition.exit != "*" && condition.exit != exit) return;
            return true;
        }
        function FSM(defaultState) {
            var currentState = defaultState;
            var BEFORE_ARROW = " - ";
            var AFTER_ARROW = " -> ";
            var handlers = [];
            /**
         * 状态跳转
         *
         * 会通知所有的状态跳转监视器
         *
         * @param  {string} newState  新状态名称
         * @param  {any} reason 跳转的原因，可以作为参数传递给跳转监视器
         */
            this.jump = function(newState, reason) {
                if (!reason) throw new Error("Please tell fsm the reason to jump");
                var oldState = currentState;
                var notify = [ oldState, newState ].concat([].slice.call(arguments, 1));
                var i, handler;
                // 跳转前
                for (i = 0; i < handlers.length; i++) {
                    handler = handlers[i];
                    if (handlerConditionMatch(handler.condition, "before", oldState, newState)) {
                        if (handler.apply(null, notify)) return;
                    }
                }
                currentState = newState;
                debug.log("[{0}] {1} -> {2}", reason, oldState, newState);
                // 跳转后
                for (i = 0; i < handlers.length; i++) {
                    handler = handlers[i];
                    if (handlerConditionMatch(handler.condition, "after", oldState, newState)) {
                        handler.apply(null, notify);
                    }
                }
                return currentState;
            };
            /**
         * 返回当前状态
         * @return {string}
         */
            this.state = function() {
                return currentState;
            };
            /**
         * 添加状态跳转监视器
         * 
         * @param {string} condition
         *     监视的时机
         *         "* => *" （默认）
         *
         * @param  {Function} handler
         *     监视函数，当状态跳转的时候，会接收三个参数
         *         * from - 跳转前的状态
         *         * to - 跳转后的状态
         *         * reason - 跳转的原因
         */
            this.when = function(condition, handler) {
                if (arguments.length == 1) {
                    handler = condition;
                    condition = "* -> *";
                }
                var when, resolved, exit, enter;
                resolved = condition.split(BEFORE_ARROW);
                if (resolved.length == 2) {
                    when = "before";
                } else {
                    resolved = condition.split(AFTER_ARROW);
                    if (resolved.length == 2) {
                        when = "after";
                    }
                }
                if (!when) throw new Error("Illegal fsm condition: " + condition);
                exit = resolved[0];
                enter = resolved[1];
                handler.condition = {
                    when: when,
                    exit: exit,
                    enter: enter
                };
                handlers.push(handler);
            };
        }
        function FSMRumtime() {
            this.fsm = new FSM("normal");
        }
        return module.exports = FSMRumtime;
    }
};

//src/runtime/history.js
/**
 * @fileOverview
 *
 * 历史管理
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[10] = {
    value: function(require, exports, module) {
        var jsonDiff = _p.r(22);
        function HistoryRuntime() {
            var minder = this.minder;
            var hotbox = this.hotbox;
            var MAX_HISTORY = 100;
            var lastSnap;
            var patchLock;
            var undoDiffs;
            var redoDiffs;
            function reset() {
                undoDiffs = [];
                redoDiffs = [];
                lastSnap = minder.exportJson();
            }
            function makeUndoDiff() {
                var headSnap = minder.exportJson();
                var diff = jsonDiff(headSnap, lastSnap);
                if (diff.length) {
                    undoDiffs.push(diff);
                    while (undoDiffs.length > MAX_HISTORY) {
                        undoDiffs.shift();
                    }
                    lastSnap = headSnap;
                    return true;
                }
            }
            function makeRedoDiff() {
                var revertSnap = minder.exportJson();
                redoDiffs.push(jsonDiff(revertSnap, lastSnap));
                lastSnap = revertSnap;
            }
            function undo() {
                patchLock = true;
                var undoDiff = undoDiffs.pop();
                if (undoDiff) {
                    minder.applyPatches(undoDiff);
                    makeRedoDiff();
                }
                patchLock = false;
            }
            function redo() {
                patchLock = true;
                var redoDiff = redoDiffs.pop();
                if (redoDiff) {
                    minder.applyPatches(redoDiff);
                    makeUndoDiff();
                }
                patchLock = false;
            }
            function changed() {
                if (patchLock) return;
                if (makeUndoDiff()) redoDiffs = [];
            }
            function hasUndo() {
                return !!undoDiffs.length;
            }
            function hasRedo() {
                return !!redoDiffs.length;
            }
            function updateSelection(e) {
                if (!patchLock) return;
                var patch = e.patch;
                switch (patch.express) {
                  case "node.add":
                    minder.select(patch.node.getChild(patch.index), true);
                    break;

                  case "node.remove":
                  case "data.replace":
                  case "data.remove":
                  case "data.add":
                    minder.select(patch.node, true);
                    break;
                }
            }
            this.history = {
                reset: reset,
                undo: undo,
                redo: redo,
                hasUndo: hasUndo,
                hasRedo: hasRedo
            };
            reset();
            minder.on("contentchange", changed);
            minder.on("import", reset);
            minder.on("patch", updateSelection);
            var main = hotbox.state("main");
            main.button({
                position: "top",
                label: "撤销",
                key: "Ctrl + Z",
                enable: hasUndo,
                action: undo,
                next: "idle"
            });
            main.button({
                position: "top",
                label: "重做",
                key: "Ctrl + Y",
                enable: hasRedo,
                action: redo,
                next: "idle"
            });
        }
        window.diff = jsonDiff;
        return module.exports = HistoryRuntime;
    }
};

//src/runtime/hotbox.js
/**
 * @fileOverview
 *
 * 热盒 Runtime
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[11] = {
    value: function(require, exports, module) {
        var Hotbox = _p.r(2);
        function HotboxRuntime() {
            var fsm = this.fsm;
            var minder = this.minder;
            var receiver = this.receiver;
            var container = this.container;
            var hotbox = new Hotbox(container);
            hotbox.setParentFSM(fsm);
            fsm.when("normal -> hotbox", function(exit, enter, reason) {
                var node = minder.getSelectedNode();
                var position;
                if (node) {
                    var box = node.getRenderBox();
                    position = {
                        x: box.cx,
                        y: box.cy
                    };
                }
                hotbox.active("main", position);
            });
            fsm.when("normal -> normal", function(exit, enter, reason, e) {
                if (reason == "shortcut-handle") {
                    var handleResult = hotbox.dispatch(e);
                    if (handleResult) {
                        e.preventDefault();
                    } else {
                        minder.dispatchKeyEvent(e);
                    }
                }
            });
            fsm.when("modal -> normal", function(exit, enter, reason, e) {
                if (reason == "import-text-finish") {
                    receiver.element.focus();
                }
            });
            this.hotbox = hotbox;
        }
        return module.exports = HotboxRuntime;
    }
};

//src/runtime/input.js
/**
 * @fileOverview
 *
 * 文本输入支持
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[12] = {
    value: function(require, exports, module) {
        _p.r(21);
        var Debug = _p.r(19);
        var debug = new Debug("input");
        function InputRuntime() {
            var fsm = this.fsm;
            var minder = this.minder;
            var hotbox = this.hotbox;
            var receiver = this.receiver;
            var receiverElement = receiver.element;
            var isGecko = window.kity.Browser.gecko;
            // setup everything to go
            setupReciverElement();
            setupFsm();
            setupHotbox();
            // expose editText()
            this.editText = editText;
            // listen the fsm changes, make action.
            function setupFsm() {
                // when jumped to input mode, enter
                fsm.when("* -> input", enterInputMode);
                // when exited, commit or exit depends on the exit reason
                fsm.when("input -> *", function(exit, enter, reason) {
                    switch (reason) {
                      case "input-cancel":
                        return exitInputMode();

                      case "input-commit":
                      default:
                        return commitInputResult();
                    }
                });
                // lost focus to commit
                receiver.onblur(function(e) {
                    if (fsm.state() == "input") {
                        fsm.jump("normal", "input-commit");
                    }
                });
                minder.on("beforemousedown", function() {
                    if (fsm.state() == "input") {
                        fsm.jump("normal", "input-commit");
                    }
                });
                minder.on("dblclick", function() {
                    if (minder.getSelectedNode() && minder._status !== "readonly") {
                        editText();
                    }
                });
            }
            // let the receiver follow the current selected node position
            function setupReciverElement() {
                if (debug.flaged) {
                    receiverElement.classList.add("debug");
                }
                receiverElement.onmousedown = function(e) {
                    e.stopPropagation();
                };
                minder.on("layoutallfinish viewchange viewchanged selectionchange", function(e) {
                    // viewchange event is too frequenced, lazy it
                    if (e.type == "viewchange" && fsm.state() != "input") return;
                    updatePosition();
                });
                updatePosition();
            }
            // edit entrance in hotbox
            function setupHotbox() {
                hotbox.state("main").button({
                    position: "center",
                    label: "编辑",
                    key: "F2",
                    enable: function() {
                        return minder.queryCommandState("text") != -1;
                    },
                    action: editText
                });
            }
            /**
         * 增加对字体的鉴别，以保证用户在编辑状态ctrl/cmd + b/i所触发的加粗斜体与显示一致
         * @editor Naixor
         * @Date 2015-12-2
         */
            // edit for the selected node
            function editText() {
                var node = minder.getSelectedNode();
                if (!node) {
                    return;
                }
                var textContainer = receiverElement;
                receiverElement.innerText = "";
                if (node.getData("font-weight") === "bold") {
                    var b = document.createElement("b");
                    textContainer.appendChild(b);
                    textContainer = b;
                }
                if (node.getData("font-style") === "italic") {
                    var i = document.createElement("i");
                    textContainer.appendChild(i);
                    textContainer = i;
                }
                textContainer.innerText = minder.queryCommandValue("text");
                if (isGecko) {
                    receiver.fixFFCaretDisappeared();
                }
                fsm.jump("input", "input-request");
                receiver.selectAll();
            }
            /**
         * 增加对字体的鉴别，以保证用户在编辑状态ctrl/cmd + b/i所触发的加粗斜体与显示一致
         * @editor Naixor
         * @Date 2015-12-2
         */
            function enterInputMode() {
                var node = minder.getSelectedNode();
                if (node) {
                    var fontSize = node.getData("font-size") || node.getStyle("font-size");
                    receiverElement.style.fontSize = fontSize + "px";
                    receiverElement.style.minWidth = 0;
                    receiverElement.style.minWidth = receiverElement.clientWidth + "px";
                    receiverElement.style.fontWeight = node.getData("font-weight") || "";
                    receiverElement.style.fontStyle = node.getData("font-style") || "";
                    receiverElement.classList.add("input");
                    receiverElement.focus();
                }
            }
            /**
         * 按照文本提交操作处理
         * @Desc: 从其他节点复制文字到另一个节点时部分浏览器(chrome)会自动包裹一个span标签，这样试用一下逻辑出来的就不是text节点二是span节点因此导致undefined的情况发生
         * @Warning: 下方代码使用[].slice.call来将HTMLDomCollection处理成为Array，ie8及以下会有问题
         * @Editor: Naixor
         * @Date: 2015.9.16
         */
            function commitInputText(textNodes) {
                var text = "";
                var TAB_CHAR = "\t", ENTER_CHAR = "\n", STR_CHECK = /\S/, SPACE_CHAR = " ", // 针对FF,SG,BD,LB,IE等浏览器下SPACE的charCode存在为32和160的情况做处理
                SPACE_CHAR_REGEXP = new RegExp("( |" + String.fromCharCode(160) + ")"), BR = document.createElement("br");
                var isBold = false, isItalic = false;
                for (var str, _divChildNodes, space_l, space_num, tab_num, i = 0, l = textNodes.length; i < l; i++) {
                    str = textNodes[i];
                    switch (Object.prototype.toString.call(str)) {
                      // 正常情况处理
                        case "[object HTMLBRElement]":
                        {
                            text += ENTER_CHAR;
                            break;
                        }

                      case "[object Text]":
                        {
                            // SG下会莫名其妙的加上&nbsp;影响后续判断，干掉！
                            /**
                         * FF下的wholeText会导致如下问题：
                         *     |123| -> 在一个节点中输入一段字符，此时TextNode为[#Text 123]
                         *     提交并重新编辑，在后面追加几个字符
                         *     |123abc| -> 此时123为一个TextNode为[#Text 123, #Text abc]，但是对这两个任意取值wholeText均为全部内容123abc
                         * 上述BUG仅存在在FF中，故将wholeText更改为textContent
                         */
                            str = str.textContent.replace("&nbsp;", " ");
                            if (!STR_CHECK.test(str)) {
                                space_l = str.length;
                                while (space_l--) {
                                    if (SPACE_CHAR_REGEXP.test(str[space_l])) {
                                        text += SPACE_CHAR;
                                    } else if (str[space_l] === TAB_CHAR) {
                                        text += TAB_CHAR;
                                    }
                                }
                            } else {
                                text += str;
                            }
                            break;
                        }

                      // ctrl + b/i 会给字体加上<b>/<i>标签来实现黑体和斜体
                        case "[object HTMLElement]":
                        {
                            switch (str.nodeName) {
                              case "B":
                                {
                                    isBold = true;
                                    break;
                                }

                              case "I":
                                {
                                    isItalic = true;
                                    break;
                                }

                              default:
                                {}
                            }
                            [].splice.apply(textNodes, [ i, 1 ].concat([].slice.call(str.childNodes)));
                            l = textNodes.length;
                            i--;
                            break;
                        }

                      // 被增加span标签的情况会被处理成正常情况并会推交给上面处理
                        case "[object HTMLSpanElement]":
                        {
                            [].splice.apply(textNodes, [ i, 1 ].concat([].slice.call(str.childNodes)));
                            l = textNodes.length;
                            i--;
                            break;
                        }

                      // 若标签为image标签，则判断是否为合法url，是将其加载进来
                        case "[object HTMLImageElement]":
                        {
                            if (str.src) {
                                if (/http(|s):\/\//.test(str.src)) {
                                    minder.execCommand("Image", str.src, str.alt);
                                } else {}
                            }
                            break;
                        }

                      // 被增加div标签的情况会被处理成正常情况并会推交给上面处理
                        case "[object HTMLDivElement]":
                        {
                            _divChildNodes = [];
                            for (var di = 0, l = str.childNodes.length; di < l; di++) {
                                _divChildNodes.push(str.childNodes[di]);
                            }
                            _divChildNodes.push(BR);
                            [].splice.apply(textNodes, [ i, 1 ].concat(_divChildNodes));
                            l = textNodes.length;
                            i--;
                            break;
                        }

                      default:
                        {
                            if (str && str.childNodes.length) {
                                _divChildNodes = [];
                                for (var di = 0, l = str.childNodes.length; di < l; di++) {
                                    _divChildNodes.push(str.childNodes[di]);
                                }
                                _divChildNodes.push(BR);
                                [].splice.apply(textNodes, [ i, 1 ].concat(_divChildNodes));
                                l = textNodes.length;
                                i--;
                            } else {
                                if (str && str.textContent !== undefined) {
                                    text += str.textContent;
                                } else {
                                    text += "";
                                }
                            }
                        }
                    }
                }
                text = text.replace(/^\n*|\n*$/g, "");
                text = text.replace(new RegExp("(\n|\r|\n\r)( |" + String.fromCharCode(160) + "){4}", "g"), "$1\t");
                minder.getSelectedNode().setText(text);
                if (isBold) {
                    minder.queryCommandState("bold") || minder.execCommand("bold");
                } else {
                    minder.queryCommandState("bold") && minder.execCommand("bold");
                }
                if (isItalic) {
                    minder.queryCommandState("italic") || minder.execCommand("italic");
                } else {
                    minder.queryCommandState("italic") && minder.execCommand("italic");
                }
                exitInputMode();
                return text;
            }
            /**
         * 判断节点的文本信息是否是
         * @Desc: 从其他节点复制文字到另一个节点时部分浏览器(chrome)会自动包裹一个span标签，这样使用以下逻辑出来的就不是text节点二是span节点因此导致undefined的情况发生
         * @Notice: 此处逻辑应该拆分到 kityminder-core/core/data中去，单独增加一个对某个节点importJson的事件
         * @Editor: Naixor
         * @Date: 2015.9.16
         */
            function commitInputNode(node, text) {
                try {
                    minder.decodeData("text", text).then(function(json) {
                        function importText(node, json, minder) {
                            var data = json.data;
                            node.setText(data.text || "");
                            var childrenTreeData = json.children || [];
                            for (var i = 0; i < childrenTreeData.length; i++) {
                                var childNode = minder.createNode(null, node);
                                importText(childNode, childrenTreeData[i], minder);
                            }
                            return node;
                        }
                        importText(node, json, minder);
                        minder.fire("contentchange");
                        minder.getRoot().renderTree();
                        minder.layout(300);
                    });
                } catch (e) {
                    minder.fire("contentchange");
                    minder.getRoot().renderTree();
                    // 无法被转换成脑图节点则不处理
                    if (e.toString() !== "Error: Invalid local format") {
                        throw e;
                    }
                }
            }
            function commitInputResult() {
                /**
             * @Desc: 进行如下处理：
             *             根据用户的输入判断是否生成新的节点
             *        fix #83 https://github.com/fex-team/kityminder-editor/issues/83
             * @Editor: Naixor
             * @Date: 2015.9.16
             */
                var textNodes = [].slice.call(receiverElement.childNodes);
                /**
             * @Desc: 增加setTimeout的原因：ie下receiverElement.innerHTML=""会导致后
             * 		  面commitInputText中使用textContent报错，不要问我什么原因！
             * @Editor: Naixor
             * @Date: 2015.12.14
             */
                setTimeout(function() {
                    // 解决过大内容导致SVG窜位问题
                    receiverElement.innerHTML = "";
                }, 0);
                var node = minder.getSelectedNode();
                textNodes = commitInputText(textNodes);
                commitInputNode(node, textNodes);
                if (node.type == "root") {
                    var rootText = minder.getRoot().getText();
                    minder.fire("initChangeRoot", {
                        text: rootText
                    });
                }
            }
            function exitInputMode() {
                receiverElement.classList.remove("input");
                receiver.selectAll();
            }
            function updatePosition() {
                var planed = updatePosition;
                var focusNode = minder.getSelectedNode();
                if (!focusNode) return;
                if (!planed.timer) {
                    planed.timer = setTimeout(function() {
                        var box = focusNode.getRenderBox("TextRenderer");
                        receiverElement.style.left = Math.round(box.x) + "px";
                        receiverElement.style.top = (debug.flaged ? Math.round(box.bottom + 30) : Math.round(box.y)) + "px";
                        //receiverElement.focus();
                        planed.timer = 0;
                    });
                }
            }
        }
        return module.exports = InputRuntime;
    }
};

//src/runtime/jumping.js
/**
 * @fileOverview
 *
 * 根据按键控制状态机的跳转
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[13] = {
    value: function(require, exports, module) {
        var Hotbox = _p.r(2);
        // Nice: http://unixpapa.com/js/key.html
        function isIntendToInput(e) {
            if (e.ctrlKey || e.metaKey || e.altKey) return false;
            // a-zA-Z
            if (e.keyCode >= 65 && e.keyCode <= 90) return true;
            // 0-9 以及其上面的符号
            if (e.keyCode >= 48 && e.keyCode <= 57) return true;
            // 小键盘区域 (除回车外)
            if (e.keyCode != 108 && e.keyCode >= 96 && e.keyCode <= 111) return true;
            // 小键盘区域 (除回车外)
            // @yinheli from pull request
            if (e.keyCode != 108 && e.keyCode >= 96 && e.keyCode <= 111) return true;
            // 输入法
            if (e.keyCode == 229 || e.keyCode === 0) return true;
            return false;
        }
        /**
     * @Desc: 下方使用receiver.enable()和receiver.disable()通过
     *        修改div contenteditable属性的hack来解决开启热核后依然无法屏蔽浏览器输入的bug;
     *        特别: win下FF对于此种情况必须要先blur在focus才能解决，但是由于这样做会导致用户
     *             输入法状态丢失，因此对FF暂不做处理
     * @Editor: Naixor
     * @Date: 2015.09.14
     */
        function JumpingRuntime() {
            var fsm = this.fsm;
            var minder = this.minder;
            var receiver = this.receiver;
            var container = this.container;
            var receiverElement = receiver.element;
            var hotbox = this.hotbox;
            var compositionLock = false;
            // normal -> *
            receiver.listen("normal", function(e) {
                // 为了防止处理进入edit模式而丢失处理的首字母,此时receiver必须为enable
                receiver.enable();
                // normal -> hotbox
                if (e.is("Space")) {
                    e.preventDefault();
                    // safari下Space触发hotbox,然而这时Space已在receiver上留下作案痕迹,因此抹掉
                    if (kity.Browser.safari) {
                        receiverElement.innerHTML = "";
                    }
                    return fsm.jump("hotbox", "space-trigger");
                }
                /**
             * check
             * @editor Naixor
             * @Date 2015-12-2
             */
                switch (e.type) {
                  case "keydown":
                    {
                        if (minder.getSelectedNode()) {
                            if (isIntendToInput(e)) {
                                return fsm.jump("input", "user-input");
                            }
                        } else {
                            receiverElement.innerHTML = "";
                        }
                        // normal -> normal shortcut
                        fsm.jump("normal", "shortcut-handle", e);
                        break;
                    }

                  case "keyup":
                    {
                        break;
                    }

                  default:
                    {}
                }
            });
            // hotbox -> normal
            receiver.listen("hotbox", function(e) {
                receiver.disable();
                e.preventDefault();
                var handleResult = hotbox.dispatch(e);
                if (hotbox.state() == Hotbox.STATE_IDLE && fsm.state() == "hotbox") {
                    return fsm.jump("normal", "hotbox-idle");
                }
            });
            // input => normal
            receiver.listen("input", function(e) {
                receiver.enable();
                if (e.type == "keydown") {
                    if (e.is("Enter")) {
                        e.preventDefault();
                        return fsm.jump("normal", "input-commit");
                    }
                    if (e.is("Esc")) {
                        e.preventDefault();
                        return fsm.jump("normal", "input-cancel");
                    }
                    if (e.is("Tab") || e.is("Shift + Tab")) {
                        e.preventDefault();
                    }
                } else if (e.type == "keyup" && e.is("Esc")) {
                    e.preventDefault();
                    if (!compositionLock) {
                        return fsm.jump("normal", "input-cancel");
                    }
                } else if (e.type == "compositionstart") {
                    compositionLock = true;
                } else if (e.type == "compositionend") {
                    setTimeout(function() {
                        compositionLock = false;
                    });
                }
            });
            //////////////////////////////////////////////
            /// 右键呼出热盒
            /// 判断的标准是：按下的位置和结束的位置一致
            //////////////////////////////////////////////
            var downX, downY;
            var MOUSE_RB = 2;
            // 右键
            container.addEventListener("mousedown", function(e) {
                if (e.button == MOUSE_RB) {
                    e.preventDefault();
                }
                if (fsm.state() == "hotbox") {
                    hotbox.active(Hotbox.STATE_IDLE);
                    fsm.jump("normal", "blur");
                } else if (fsm.state() == "normal" && e.button == MOUSE_RB) {
                    downX = e.clientX;
                    downY = e.clientY;
                }
            }, false);
            container.addEventListener("mousewheel", function(e) {
                if (fsm.state() == "hotbox") {
                    hotbox.active(Hotbox.STATE_IDLE);
                    fsm.jump("normal", "mousemove-blur");
                }
            }, false);
            container.addEventListener("contextmenu", function(e) {
                e.preventDefault();
            });
            container.addEventListener("mouseup", function(e) {
                if (fsm.state() != "normal") {
                    return;
                }
                if (e.button != MOUSE_RB || e.clientX != downX || e.clientY != downY) {
                    return;
                }
                if (!minder.getSelectedNode()) {
                    return;
                }
                fsm.jump("hotbox", "content-menu");
            }, false);
            // 阻止热盒事件冒泡，在热盒正确执行前导致热盒关闭
            hotbox.$element.addEventListener("mousedown", function(e) {
                e.stopPropagation();
            });
        }
        return module.exports = JumpingRuntime;
    }
};

//src/runtime/minder.js
/**
 * @fileOverview
 *
 * 脑图示例运行时
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[14] = {
    value: function(require, exports, module) {
        var Minder = _p.r(4);
        function MinderRuntime() {
            // 不使用 kityminder 的按键处理，由 ReceiverRuntime 统一处理
            var minder = new Minder({
                enableKeyReceiver: false,
                enableAnimation: true
            });
            // 渲染，初始化
            minder.renderTo(this.selector);
            minder.setTheme(null);
            minder.select(minder.getRoot(), true);
            minder.execCommand("text", "中心主题");
            // 导出给其它 Runtime 使用
            this.minder = minder;
        }
        return module.exports = MinderRuntime;
    }
};

//src/runtime/node.js
_p[15] = {
    value: function(require, exports, module) {
        function NodeRuntime() {
            var runtime = this;
            var minder = this.minder;
            var hotbox = this.hotbox;
            var fsm = this.fsm;
            var main = hotbox.state("main");
            var buttons = [ "前移:Alt+Up:ArrangeUp", "下级:Tab|Insert:AppendChildNode", "同级:Enter:AppendSiblingNode", "后移:Alt+Down:ArrangeDown", "删除:Delete|Backspace:RemoveNode", "上级:Shift+Tab|Shift+Insert:AppendParentNode" ];
            var AppendLock = 0;
            buttons.forEach(function(button) {
                var parts = button.split(":");
                var label = parts.shift();
                var key = parts.shift();
                var command = parts.shift();
                main.button({
                    position: "ring",
                    label: label,
                    key: key,
                    action: function() {
                        if (command.indexOf("Append") === 0) {
                            AppendLock++;
                            minder.execCommand(command, "分支主题");
                            // provide in input runtime
                            function afterAppend() {
                                if (!--AppendLock) {
                                    runtime.editText();
                                }
                                minder.off("layoutallfinish", afterAppend);
                            }
                            minder.on("layoutallfinish", afterAppend);
                        } else {
                            minder.execCommand(command);
                            fsm.jump("normal", "command-executed");
                        }
                    },
                    enable: function() {
                        return minder.queryCommandState(command) != -1;
                    }
                });
            });
            main.button({
                position: "bottom",
                label: "导入节点",
                key: "Alt + V",
                enable: function() {
                    var selectedNodes = minder.getSelectedNodes();
                    return selectedNodes.length == 1;
                },
                action: importNodeData,
                next: "idle"
            });
            main.button({
                position: "bottom",
                label: "导出节点",
                key: "Alt + C",
                enable: function() {
                    var selectedNodes = minder.getSelectedNodes();
                    return selectedNodes.length == 1;
                },
                action: exportNodeData,
                next: "idle"
            });
            function importNodeData() {
                minder.fire("importNodeData");
            }
            function exportNodeData() {
                minder.fire("exportNodeData");
            }
        }
        return module.exports = NodeRuntime;
    }
};

//src/runtime/priority.js
_p[16] = {
    value: function(require, exports, module) {
        function PriorityRuntime() {
            var minder = this.minder;
            var hotbox = this.hotbox;
            var main = hotbox.state("main");
            main.button({
                position: "top",
                label: "优先级",
                key: "P",
                next: "priority",
                enable: function() {
                    return minder.queryCommandState("priority") != -1;
                }
            });
            var priority = hotbox.state("priority");
            "123456789".replace(/./g, function(p) {
                priority.button({
                    position: "ring",
                    label: "P" + p,
                    key: p,
                    action: function() {
                        minder.execCommand("Priority", p);
                    }
                });
            });
            priority.button({
                position: "center",
                label: "移除",
                key: "Del",
                action: function() {
                    minder.execCommand("Priority", 0);
                }
            });
            priority.button({
                position: "top",
                label: "返回",
                key: "esc",
                next: "back"
            });
        }
        return module.exports = PriorityRuntime;
    }
};

//src/runtime/progress.js
_p[17] = {
    value: function(require, exports, module) {
        function ProgressRuntime() {
            var minder = this.minder;
            var hotbox = this.hotbox;
            var main = hotbox.state("main");
            main.button({
                position: "top",
                label: "进度",
                key: "G",
                next: "progress",
                enable: function() {
                    return minder.queryCommandState("progress") != -1;
                }
            });
            var progress = hotbox.state("progress");
            "012345678".replace(/./g, function(p) {
                progress.button({
                    position: "ring",
                    label: "G" + p,
                    key: p,
                    action: function() {
                        minder.execCommand("Progress", parseInt(p) + 1);
                    }
                });
            });
            progress.button({
                position: "center",
                label: "移除",
                key: "Del",
                action: function() {
                    minder.execCommand("Progress", 0);
                }
            });
            progress.button({
                position: "top",
                label: "返回",
                key: "esc",
                next: "back"
            });
        }
        return module.exports = ProgressRuntime;
    }
};

//src/runtime/receiver.js
/**
 * @fileOverview
 *
 * 键盘事件接收/分发器
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[18] = {
    value: function(require, exports, module) {
        var key = _p.r(23);
        var hotbox = _p.r(2);
        function ReceiverRuntime() {
            var fsm = this.fsm;
            var minder = this.minder;
            var me = this;
            // 接收事件的 div
            var element = document.createElement("div");
            element.contentEditable = true;
            /**
         * @Desc: 增加tabindex属性使得element的contenteditable不管是trur还是false都能有focus和blur事件
         * @Editor: Naixor
         * @Date: 2015.09.14
         */
            element.setAttribute("tabindex", -1);
            element.classList.add("receiver");
            element.onkeydown = element.onkeypress = element.onkeyup = dispatchKeyEvent;
            element.addEventListener("compositionstart", dispatchKeyEvent);
            // element.addEventListener('compositionend', dispatchKeyEvent);
            this.container.appendChild(element);
            // receiver 对象
            var receiver = {
                element: element,
                selectAll: function() {
                    // 保证有被选中的
                    if (!element.innerHTML) element.innerHTML = "&nbsp;";
                    var range = document.createRange();
                    var selection = window.getSelection();
                    range.selectNodeContents(element);
                    selection.removeAllRanges();
                    selection.addRange(range);
                    element.focus();
                },
                /**
             * @Desc: 增加enable和disable方法用于解决热核态的输入法屏蔽问题
             * @Editor: Naixor
             * @Date: 2015.09.14
             */
                enable: function() {
                    element.setAttribute("contenteditable", true);
                },
                disable: function() {
                    element.setAttribute("contenteditable", false);
                },
                /**
             * @Desc: hack FF下div contenteditable的光标丢失BUG
             * @Editor: Naixor
             * @Date: 2015.10.15
             */
                fixFFCaretDisappeared: function() {
                    element.removeAttribute("contenteditable");
                    element.setAttribute("contenteditable", "true");
                    element.blur();
                    element.focus();
                },
                /**
             * 以此事件代替通过mouse事件来判断receiver丢失焦点的事件
             * @editor Naixor
             * @Date 2015-12-2
             */
                onblur: function(handler) {
                    element.onblur = handler;
                }
            };
            receiver.selectAll();
            minder.on("beforemousedown", receiver.selectAll);
            minder.on("receiverfocus", receiver.selectAll);
            minder.on("readonly", function() {
                // 屏蔽minder的事件接受，删除receiver和hotbox
                minder.disable();
                editor.receiver.element.parentElement.removeChild(editor.receiver.element);
                editor.hotbox.$container.removeChild(editor.hotbox.$element);
            });
            // 侦听器，接收到的事件会派发给所有侦听器
            var listeners = [];
            // 侦听指定状态下的事件，如果不传 state，侦听所有状态
            receiver.listen = function(state, listener) {
                if (arguments.length == 1) {
                    listener = state;
                    state = "*";
                }
                listener.notifyState = state;
                listeners.push(listener);
            };
            function dispatchKeyEvent(e) {
                e.is = function(keyExpression) {
                    var subs = keyExpression.split("|");
                    for (var i = 0; i < subs.length; i++) {
                        if (key.is(this, subs[i])) return true;
                    }
                    return false;
                };
                var listener, jumpState;
                for (var i = 0; i < listeners.length; i++) {
                    listener = listeners[i];
                    // 忽略不在侦听状态的侦听器
                    if (listener.notifyState != "*" && listener.notifyState != fsm.state()) {
                        continue;
                    }
                    /**
                 *
                 * 对于所有的侦听器，只允许一种处理方式：跳转状态。
                 * 如果侦听器确定要跳转，则返回要跳转的状态。
                 * 每个事件只允许一个侦听器进行状态跳转
                 * 跳转动作由侦听器自行完成（因为可能需要在跳转时传递 reason），返回跳转结果即可。
                 * 比如：
                 *
                 * ```js
                 *  receiver.listen('normal', function(e) {
                 *      if (isSomeReasonForJumpState(e)) {
                 *          return fsm.jump('newstate', e);
                 *      }
                 *  });
                 * ```
                 */
                    if (listener.call(null, e)) {
                        return;
                    }
                }
            }
            this.receiver = receiver;
        }
        return module.exports = ReceiverRuntime;
    }
};

//src/tool/debug.js
/**
 * @fileOverview
 *
 * 支持各种调试后门
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[19] = {
    value: function(require, exports, module) {
        var format = _p.r(20);
        function noop() {}
        function stringHash(str) {
            var hash = 0;
            for (var i = 0; i < str.length; i++) {
                hash += str.charCodeAt(i);
            }
            return hash;
        }
        /* global console */
        function Debug(flag) {
            var debugMode = this.flaged = window.location.search.indexOf(flag) != -1;
            if (debugMode) {
                var h = stringHash(flag) % 360;
                var flagStyle = format("background: hsl({0}, 50%, 80%); " + "color: hsl({0}, 100%, 30%); " + "padding: 2px 3px; " + "margin: 1px 3px 0 0;" + "border-radius: 2px;", h);
                var textStyle = "background: none; color: black;";
                this.log = function() {
                    var output = format.apply(null, arguments);
                    console.log(format("%c{0}%c{1}", flag, output), flagStyle, textStyle);
                };
            } else {
                this.log = noop;
            }
        }
        return module.exports = Debug;
    }
};

//src/tool/format.js
_p[20] = {
    value: function(require, exports, module) {
        function format(template, args) {
            if (typeof args != "object") {
                args = [].slice.call(arguments, 1);
            }
            return String(template).replace(/\{(\w+)\}/gi, function(match, $key) {
                return args[$key] || $key;
            });
        }
        return module.exports = format;
    }
};

//src/tool/innertext.js
/**
 * @fileOverview
 *
 * innerText polyfill
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[21] = {
    value: function(require, exports, module) {
        if (!("innerText" in document.createElement("a")) && "getSelection" in window) {
            HTMLElement.prototype.__defineGetter__("innerText", function() {
                var selection = window.getSelection(), ranges = [], str, i;
                // Save existing selections.
                for (i = 0; i < selection.rangeCount; i++) {
                    ranges[i] = selection.getRangeAt(i);
                }
                // Deselect everything.
                selection.removeAllRanges();
                // Select `el` and all child nodes.
                // 'this' is the element .innerText got called on
                selection.selectAllChildren(this);
                // Get the string representation of the selected nodes.
                str = selection.toString();
                // Deselect everything. Again.
                selection.removeAllRanges();
                // Restore all formerly existing selections.
                for (i = 0; i < ranges.length; i++) {
                    selection.addRange(ranges[i]);
                }
                // Oh look, this is what we wanted.
                // String representation of the element, close to as rendered.
                return str;
            });
            HTMLElement.prototype.__defineSetter__("innerText", function(text) {
                /**
             * @Desc: 解决FireFox节点内容删除后text为null，出现报错的问题
             * @Editor: Naixor
             * @Date: 2015.9.16
             */
                this.innerHTML = (text || "").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>");
            });
        }
    }
};

//src/tool/jsondiff.js
/**
 * @fileOverview
 *
 *
 *
 * @author: techird
 * @copyright: Baidu FEX, 2014
 */
_p[22] = {
    value: function(require, exports, module) {
        /*!
    * https://github.com/Starcounter-Jack/Fast-JSON-Patch
    * json-patch-duplex.js 0.5.0
    * (c) 2013 Joachim Wester
    * MIT license
    */
        var _objectKeys = function() {
            if (Object.keys) return Object.keys;
            return function(o) {
                var keys = [];
                for (var i in o) {
                    if (o.hasOwnProperty(i)) {
                        keys.push(i);
                    }
                }
                return keys;
            };
        }();
        function escapePathComponent(str) {
            if (str.indexOf("/") === -1 && str.indexOf("~") === -1) return str;
            return str.replace(/~/g, "~0").replace(/\//g, "~1");
        }
        function deepClone(obj) {
            if (typeof obj === "object") {
                return JSON.parse(JSON.stringify(obj));
            } else {
                return obj;
            }
        }
        // Dirty check if obj is different from mirror, generate patches and update mirror
        function _generate(mirror, obj, patches, path) {
            var newKeys = _objectKeys(obj);
            var oldKeys = _objectKeys(mirror);
            var changed = false;
            var deleted = false;
            for (var t = oldKeys.length - 1; t >= 0; t--) {
                var key = oldKeys[t];
                var oldVal = mirror[key];
                if (obj.hasOwnProperty(key)) {
                    var newVal = obj[key];
                    if (typeof oldVal == "object" && oldVal != null && typeof newVal == "object" && newVal != null) {
                        _generate(oldVal, newVal, patches, path + "/" + escapePathComponent(key));
                    } else {
                        if (oldVal != newVal) {
                            changed = true;
                            patches.push({
                                op: "replace",
                                path: path + "/" + escapePathComponent(key),
                                value: deepClone(newVal)
                            });
                        }
                    }
                } else {
                    patches.push({
                        op: "remove",
                        path: path + "/" + escapePathComponent(key)
                    });
                    deleted = true;
                }
            }
            if (!deleted && newKeys.length == oldKeys.length) {
                return;
            }
            for (var t = 0; t < newKeys.length; t++) {
                var key = newKeys[t];
                if (!mirror.hasOwnProperty(key)) {
                    patches.push({
                        op: "add",
                        path: path + "/" + escapePathComponent(key),
                        value: deepClone(obj[key])
                    });
                }
            }
        }
        function compare(tree1, tree2) {
            var patches = [];
            _generate(tree1, tree2, patches, "");
            return patches;
        }
        return module.exports = compare;
    }
};

//src/tool/key.js
_p[23] = {
    value: function(require, exports, module) {
        var keymap = _p.r(24);
        var CTRL_MASK = 4096;
        var ALT_MASK = 8192;
        var SHIFT_MASK = 16384;
        function hash(unknown) {
            if (typeof unknown == "string") {
                return hashKeyExpression(unknown);
            }
            return hashKeyEvent(unknown);
        }
        function is(a, b) {
            return a && b && hash(a) == hash(b);
        }
        exports.hash = hash;
        exports.is = is;
        function hashKeyEvent(keyEvent) {
            var hashCode = 0;
            if (keyEvent.ctrlKey || keyEvent.metaKey) {
                hashCode |= CTRL_MASK;
            }
            if (keyEvent.altKey) {
                hashCode |= ALT_MASK;
            }
            if (keyEvent.shiftKey) {
                hashCode |= SHIFT_MASK;
            }
            // Shift, Control, Alt KeyCode ignored.
            if ([ 16, 17, 18, 91 ].indexOf(keyEvent.keyCode) === -1) {
                /**
             * 解决浏览器输入法状态下对keyDown的keyCode判断不准确的问题,使用keyIdentifier,
             * 可以解决chrome和safari下的各种问题,其他浏览器依旧有问题,然而那并不影响我们对特
             * 需判断的按键进行判断(比如Space在safari输入法态下就是229,其他的就不是)
             * @editor Naixor
             * @Date 2015-12-2
             */
                if (keyEvent.keyCode === 229 && keyEvent.keyIdentifier) {
                    return hashCode |= parseInt(keyEvent.keyIdentifier.substr(2), 16);
                }
                hashCode |= keyEvent.keyCode;
            }
            return hashCode;
        }
        function hashKeyExpression(keyExpression) {
            var hashCode = 0;
            keyExpression.toLowerCase().split(/\s*\+\s*/).forEach(function(name) {
                switch (name) {
                  case "ctrl":
                  case "cmd":
                    hashCode |= CTRL_MASK;
                    break;

                  case "alt":
                    hashCode |= ALT_MASK;
                    break;

                  case "shift":
                    hashCode |= SHIFT_MASK;
                    break;

                  default:
                    hashCode |= keymap[name];
                }
            });
            return hashCode;
        }
    }
};

//src/tool/keymap.js
_p[24] = {
    value: function(require, exports, module) {
        var keymap = {
            Shift: 16,
            Control: 17,
            Alt: 18,
            CapsLock: 20,
            BackSpace: 8,
            Tab: 9,
            Enter: 13,
            Esc: 27,
            Space: 32,
            PageUp: 33,
            PageDown: 34,
            End: 35,
            Home: 36,
            Insert: 45,
            Left: 37,
            Up: 38,
            Right: 39,
            Down: 40,
            Direction: {
                37: 1,
                38: 1,
                39: 1,
                40: 1
            },
            Del: 46,
            NumLock: 144,
            Cmd: 91,
            CmdFF: 224,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            "`": 192,
            "=": 187,
            "-": 189,
            "/": 191,
            ".": 190
        };
        // 小写适配
        for (var key in keymap) {
            if (keymap.hasOwnProperty(key)) {
                keymap[key.toLowerCase()] = keymap[key];
            }
        }
        var aKeyCode = 65;
        var aCharCode = "a".charCodeAt(0);
        // letters
        "abcdefghijklmnopqrstuvwxyz".split("").forEach(function(letter) {
            keymap[letter] = aKeyCode + (letter.charCodeAt(0) - aCharCode);
        });
        // numbers
        var n = 9;
        do {
            keymap[n.toString()] = n + 48;
        } while (--n);
        module.exports = keymap;
    }
};

var moduleMapping = {
    "expose-editor": 1
};

function use(name) {
    _p.r([ moduleMapping[name] ]);
}
use('expose-editor');
})();

/***/ }),

/***/ "d788":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_minder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4ef0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_minder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_minder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_minder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "df7c":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

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
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "f0e2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"470dcc61-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/kityMinder/src/minder.vue?vue&type=template&id=19f6d32a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"minder"},[_c('div',{attrs:{"id":"minder-container"}})])}]


// CONCATENATED MODULE: ./packages/kityMinder/src/minder.vue?vue&type=template&id=19f6d32a&

// EXTERNAL MODULE: ./node_modules/hotbox-ui/hotbox.css
var hotbox = __webpack_require__("f0e2");

// EXTERNAL MODULE: ./packages/kityMinder/assets/kityminder.editor.css
var kityminder_editor = __webpack_require__("93d2");

// EXTERNAL MODULE: ./node_modules/kityminder-core/dist/kityminder.core.css
var kityminder_core = __webpack_require__("48bb");

// EXTERNAL MODULE: ./node_modules/kity/dist/kity.js
var kity = __webpack_require__("2257");

// EXTERNAL MODULE: ./node_modules/hotbox-ui/hotbox.js
var hotbox_ui_hotbox = __webpack_require__("8b98");

// EXTERNAL MODULE: ./node_modules/kityminder-core/dist/kityminder.core.js
var dist_kityminder_core = __webpack_require__("7101");

// EXTERNAL MODULE: ./packages/kityMinder/assets/kityminder.editor.js
var assets_kityminder_editor = __webpack_require__("c034");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/kityMinder/src/minder.vue?vue&type=script&lang=js&
//
//
//
//
//
//








/* harmony default export */ var mindervue_type_script_lang_js_ = ({
  name: 'kityMinder',
  data() {
    return {
      minder: {}
    }
  },
  props: {
    importJson: {
      type: Object,
      default: () => []
    }
  },
  mounted() {
    this.KMEditor = new window.kityminder.Editor(document.querySelector('#minder-container'))
    this.minder = this.KMEditor.minder
    this.minder.importJson(this.importJson)
    this.$emit('minder', this.minder)
    // this.minder.execCommand('Theme', 'fresh-blue')
    // console.log(this.minder)
  }
});

// CONCATENATED MODULE: ./packages/kityMinder/src/minder.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mindervue_type_script_lang_js_ = (mindervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/kityMinder/src/minder.vue?vue&type=style&index=0&lang=css&
var mindervue_type_style_index_0_lang_css_ = __webpack_require__("d788");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/kityMinder/src/minder.vue






/* normalize component */

var component = normalizeComponent(
  src_mindervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var minder = (component.exports);
// CONCATENATED MODULE: ./packages/kityMinder/index.js


minder.install = function (Vue) {
  Vue.component(minder.name, minder)
}

/* harmony default export */ var kityMinder = (minder);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (kityMinder);



/***/ })

/******/ });
//# sourceMappingURL=kityMinder.common.js.map