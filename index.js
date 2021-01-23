"use strict";
// String
var str = "文字列です";
// Number
var num = 1;
// Boolean
var bool = true;
// Any
var any = "なんでも入るよ";
// Void
var func = function (target, length) {
    console.log(target);
    console.log(length);
    console.log('func');
};
// Array
var strAry = ["a", "b", "c"];
var numAry = [0, 1, 2];
var object = {
    a: "str",
    b: 1,
    c: true,
    d: [0, 1, 2],
    e: {
        a: "hoge"
    }
};
var nullable = {
    a: null
};
var undef = {
    a: 1,
    b: undefined
};
