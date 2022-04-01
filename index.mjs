// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
function e(e){if(e.__esModule)return e;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var r=require("path").resolve,t=require("@stdlib/fs-read-json").sync,n=r("/home/runner/work/datasets-dale-chall-new/datasets-dale-chall-new/lib","..","data","words.json"),o={encoding:"utf8"};module.exports=function(){var e=t(n,o);if(e instanceof Error)throw e;return e};var a=e(Object.freeze({__proto__:null}));export{a as default};
//# sourceMappingURL=index.mjs.map
