"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/tester2/index.html","9e6255ec4c93bcfdab08d924851b2aa5"],["/tester2/static/css/main.c1e8cdb9.css","54f34459ad202f58bf5a7c6b9afd3aa8"],["/tester2/static/media/csvQsortsFile.7fb6a278.png","7fb6a2789c4c73843d87447ba03f1f53"],["/tester2/static/media/excelType1.257ebb26.png","257ebb261c2d6b62932ed8f9b7a625a8"],["/tester2/static/media/excelType2.92104c95.png","92104c959f054183f6b7018cedebeac9"],["/tester2/static/media/firefox.5ed7b862.png","5ed7b862b3cdaa8b85ff4f0a6a346303"],["/tester2/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/tester2/static/media/icons.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/tester2/static/media/icons.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/tester2/static/media/icons.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/tester2/static/media/icons.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/tester2/static/media/icons.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/tester2/static/media/kocDataImage.b5e2c44a.png","b5e2c44acbc51f8636009eec85eb84ba"],["/tester2/static/media/lipsetDataImage1.354551e2.png","354551e2dd1daea001cd410613e00b11"],["/tester2/static/media/pqmethodStatementsImage.d6830dcc.png","d6830dccb18e831840fef473b7d5590c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/tester2/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});