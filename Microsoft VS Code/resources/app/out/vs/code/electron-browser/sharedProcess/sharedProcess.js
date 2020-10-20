/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";function assign(e,n){return Object.keys(n).reduce(function(e,r){return e[r]=n[r],e},e)}function parseURLQueryArgs(){return(window.location.search||"").split(/[?&]/).filter(function(e){return!!e}).map(function(e){return e.split("=")}).filter(function(e){return 2===e.length}).reduce(function(e,n){return e[n[0]]=decodeURIComponent(n[1]),e},{})}function createScript(e,n){const r=document.createElement("script");r.src=e,r.addEventListener("load",n);const t=document.getElementsByTagName("head")[0];t.insertBefore(r,t.lastChild)}function uriFromPath(e){var n=path.resolve(e).replace(/\\/g,"/");return n.length>0&&"/"!==n.charAt(0)&&(n="/"+n),encodeURI("file://"+n).replace(/#/g,"%23")}function readFile(e){return new Promise(function(n,r){fs.readFile(e,"utf8",function(e,t){e?r(e):n(t)})})}function main(){const e=parseURLQueryArgs(),n=JSON.parse(e.config||"{}")||{};!function(){const e=require("path"),r=require("module");let t=e.join(n.appRoot,"node_modules")
;/[a-z]\:/.test(t)&&(t=t.charAt(0).toUpperCase()+t.substr(1));const o=t+".asar",a=r._resolveLookupPaths;r._resolveLookupPaths=function(e,n,r){const i=a(e,n,r),s=r?i:i[1];for(let e=0,n=s.length;e<n;e++)if(s[e]===t){s.splice(e,0,o);break}return i}}(),assign(process.env,n.userEnv);var r={availableLanguages:{}};const t=process.env.VSCODE_NLS_CONFIG;if(t){process.env.VSCODE_NLS_CONFIG=t;try{r=JSON.parse(t)}catch(e){}}if(r._resolvedLanguagePackCoreLocation){let e=Object.create(null);r.loadBundle=function(n,t,o){let a=e[n];if(a)return void o(void 0,a);readFile(path.join(r._resolvedLanguagePackCoreLocation,n.replace(/\//g,"!")+".nls.json")).then(function(r){let t=JSON.parse(r);e[n]=t,o(void 0,t)}).catch(e=>{try{r._corruptedFile&&writeFile(r._corruptedFile,"corrupted").catch(function(e){console.error(e)})}finally{o(e,void 0)}})}}var o=r.availableLanguages["*"]||"en";"zh-tw"===o?o="zh-Hant":"zh-cn"===o&&(o="zh-Hans"),window.document.documentElement.setAttribute("lang",o);const a=uriFromPath(n.appRoot)+"/out"
;createScript(a+"/vs/loader.js",function(){var e=global.define;global.define=void 0,e("fs",["original-fs"],function(e){return e}),window.MonacoEnvironment={},require.config({baseUrl:a,"vs/nls":r,nodeCachedDataDir:n.nodeCachedDataDir,nodeModules:[]}),r.pseudo&&require(["vs/nls"],function(e){e.setPseudoTranslation(r.pseudo)}),require(["vs/code/electron-browser/sharedProcess/sharedProcessMain"],function(e){e.startup({machineId:n.machineId})})})}const path=require("path"),fs=require("fs"),writeFile=(e,n)=>new Promise((r,t)=>fs.writeFile(e,n,"utf8",e=>e?t(e):r()));main();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/f46c4c469d6e6d8c46f268d1553c5dc4b475840f/core/vs\code\electron-browser\sharedProcess\sharedProcess.js.map