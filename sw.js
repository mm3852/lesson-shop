if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const l=e=>s(e,t),f={module:{uri:t},exports:o,require:l};i[t]=Promise.all(n.map((e=>f[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-DlPGzCF7.css",revision:null},{url:"assets/index-DNiz0ZJn.js",revision:null},{url:"index.html",revision:"f7529e4496a00236a9062aa93b7df974"},{url:"registerSW.js",revision:"e3b56f218b444f4a0dd93d0889f59d0c"},{url:"icon512_maskable.png",revision:"bcb57c5d9e9244effb0842f345021fb9"},{url:"manifest.webmanifest",revision:"4aca4246b28bb55e11f1c33472084933"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
