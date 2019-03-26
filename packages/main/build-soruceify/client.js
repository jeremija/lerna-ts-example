(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
__export(require("./math"));

},{"./math":2}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
function add(a, b) {
    return a + b;
}
exports.add = add;
function addMany() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return a
        .reduce(function (total, num) { return total + num; }, 0);
}
exports.addMany = addMany;
function multiply(a, b) {
    return a * b;
}
exports.multiply = multiply;
function multiplyMany() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    return a
        .reduce(function (total, num) { return total * num; }, 1);
}
exports.multiplyMany = multiplyMany;

},{}],3:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var main_1 = require("./main");
main_1.main();

},{"./main":4}],4:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var library_1 = require("@example/library");
function main() {
    console.log(library_1.multiplyMany(2, 3, 4, 5));
}
exports.main = main;

},{"@example/library":1}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvc291cmNlL25vZGVfbW9kdWxlcy9AZXhhbXBsZS9ub2RlX21vZHVsZXMvQGV4YW1wbGUvbGlicmFyeS9saWIvc3JjL2luZGV4LnRzIiwiL3NvdXJjZS9wYWNrYWdlcy9saWJyYXJ5L2xpYi9zcmMvbWF0aC50cyIsInBhY2thZ2VzL21haW4vc3JjL2luZGV4LnRzIiwicGFja2FnZXMvbWFpbi9zcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FDQUEsNEJBQXNCOzs7OztBQ0F0QixTQUFnQixHQUFHLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ2QsQ0FBQztBQUZELGtCQUVDO0FBRUQsU0FBZ0IsT0FBTztJQUFDLFdBQWM7U0FBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1FBQWQsc0JBQWM7O0lBQ3BDLE9BQU8sQ0FBQztTQUNQLE1BQU0sQ0FBQyxVQUFDLEtBQUssRUFBRSxHQUFHLElBQUssT0FBQSxLQUFLLEdBQUcsR0FBRyxFQUFYLENBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUN6QyxDQUFDO0FBSEQsMEJBR0M7QUFFRCxTQUFnQixRQUFRLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ2QsQ0FBQztBQUZELDRCQUVDO0FBRUQsU0FBZ0IsWUFBWTtJQUFDLFdBQWM7U0FBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1FBQWQsc0JBQWM7O0lBQ3pDLE9BQU8sQ0FBQztTQUNQLE1BQU0sQ0FBQyxVQUFDLEtBQUssRUFBRSxHQUFHLElBQUssT0FBQSxLQUFLLEdBQUcsR0FBRyxFQUFYLENBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUN6QyxDQUFDO0FBSEQsb0NBR0M7Ozs7O0FDaEJELCtCQUEyQjtBQUUzQixXQUFJLEVBQUUsQ0FBQTs7Ozs7QUNGTiw0Q0FBNkM7QUFFN0MsU0FBZ0IsSUFBSTtJQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUN2QyxDQUFDO0FBRkQsb0JBRUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgKiBmcm9tICcuL21hdGgnXG4iLCJleHBvcnQgZnVuY3Rpb24gYWRkKGE6IG51bWJlciwgYjogbnVtYmVyKSB7XG4gIHJldHVybiBhICsgYlxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTWFueSguLi5hOiBudW1iZXJbXSkge1xuICByZXR1cm4gYVxuICAucmVkdWNlKCh0b3RhbCwgbnVtKSA9PiB0b3RhbCArIG51bSwgMClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KGE6IG51bWJlciwgYjogbnVtYmVyKSB7XG4gIHJldHVybiBhICogYlxufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHlNYW55KC4uLmE6IG51bWJlcltdKSB7XG4gIHJldHVybiBhXG4gIC5yZWR1Y2UoKHRvdGFsLCBudW0pID0+IHRvdGFsICogbnVtLCAxKVxufVxuIiwiaW1wb3J0IHttYWlufSBmcm9tICcuL21haW4nXG5cbm1haW4oKVxuIiwiaW1wb3J0IHttdWx0aXBseU1hbnl9IGZyb20gJ0BleGFtcGxlL2xpYnJhcnknXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWluKCkge1xuICBjb25zb2xlLmxvZyhtdWx0aXBseU1hbnkoMiwgMywgNCwgNSkpXG59XG4iXX0=
