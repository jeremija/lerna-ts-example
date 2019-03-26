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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwYWNrYWdlcy9saWJyYXJ5L2xpYi9pbmRleC5qcyIsInBhY2thZ2VzL2xpYnJhcnkvbGliL21hdGguanMiLCJwYWNrYWdlcy9tYWluL3NyYy9pbmRleC50cyIsInBhY2thZ2VzL21haW4vc3JjL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDNUJBLCtCQUEyQjtBQUUzQixXQUFJLEVBQUUsQ0FBQTs7Ozs7QUNGTiw0Q0FBNkM7QUFFN0MsU0FBZ0IsSUFBSTtJQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUN2QyxDQUFDO0FBRkQsb0JBRUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG59XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuX19leHBvcnQocmVxdWlyZShcIi4vbWF0aFwiKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5mdW5jdGlvbiBhZGQoYSwgYikge1xuICAgIHJldHVybiBhICsgYjtcbn1cbmV4cG9ydHMuYWRkID0gYWRkO1xuZnVuY3Rpb24gYWRkTWFueSgpIHtcbiAgICB2YXIgYSA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGFbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgcmV0dXJuIGFcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAodG90YWwsIG51bSkgeyByZXR1cm4gdG90YWwgKyBudW07IH0sIDApO1xufVxuZXhwb3J0cy5hZGRNYW55ID0gYWRkTWFueTtcbmZ1bmN0aW9uIG11bHRpcGx5KGEsIGIpIHtcbiAgICByZXR1cm4gYSAqIGI7XG59XG5leHBvcnRzLm11bHRpcGx5ID0gbXVsdGlwbHk7XG5mdW5jdGlvbiBtdWx0aXBseU1hbnkoKSB7XG4gICAgdmFyIGEgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBhW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHJldHVybiBhXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKHRvdGFsLCBudW0pIHsgcmV0dXJuIHRvdGFsICogbnVtOyB9LCAxKTtcbn1cbmV4cG9ydHMubXVsdGlwbHlNYW55ID0gbXVsdGlwbHlNYW55O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWF0aC5qcy5tYXAiLCJpbXBvcnQge21haW59IGZyb20gJy4vbWFpbidcblxubWFpbigpXG4iLCJpbXBvcnQge211bHRpcGx5TWFueX0gZnJvbSAnQGV4YW1wbGUvbGlicmFyeSdcblxuZXhwb3J0IGZ1bmN0aW9uIG1haW4oKSB7XG4gIGNvbnNvbGUubG9nKG11bHRpcGx5TWFueSgyLCAzLCA0LCA1KSlcbn1cbiJdfQ==
