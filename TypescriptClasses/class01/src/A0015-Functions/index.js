"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapStrings = mapStrings;
function mapStrings(array, callbackfn) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        newArray.push(callbackfn(item));
    }
    return newArray;
}
var abc = ['a', 'b', 'c'];
var abcMapped = mapStrings(abc, function (item) { return item.toUpperCase(); });
console.log(abc);
console.log(abcMapped);
