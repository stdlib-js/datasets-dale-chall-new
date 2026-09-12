"use strict";var o=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(s){throw (e=0, s)}};};var t=o(function(p,a){
var i=require("path").resolve,n=require('@stdlib/fs-read-json/dist').sync,u=i(__dirname,"..","data","words.json"),v={encoding:"utf8"};function d(){var r=n(u,v);if(r instanceof Error)throw r;return r}a.exports=d
});var c=t();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
