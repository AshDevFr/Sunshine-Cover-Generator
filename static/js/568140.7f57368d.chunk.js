"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[568140],{568140:(t,n,o)=>{o.r(n),o.d(n,{fontFamily:()=>a,getInfo:()=>i,loadFont:()=>f});var s=o(662166),e={},i=()=>({fontFamily:"Julius Sans One",importName:"JuliusSansOne",version:"v18",url:"https://fonts.googleapis.com/css2?family=Julius+Sans+One:ital,wght@0,400",unicodeRanges:{"latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{"latin-ext":"https://fonts.gstatic.com/s/juliussansone/v18/1Pt2g8TAX_SGgBGUi0tGOYEga5WOzHsX2aE.woff2",latin:"https://fonts.gstatic.com/s/juliussansone/v18/1Pt2g8TAX_SGgBGUi0tGOYEga5WOwnsX.woff2"}}}}),a="Julius Sans One",f=(t,n)=>((t,n,o)=>{const i=[],a=n?[n]:Object.keys(t.fonts);for(const f of a){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const n=o?.weights??Object.keys(t.fonts[f]);for(const a of n){if(!t.fonts[f][a])throw new Error(`The font ${t.fontFamily} does not  have a weight ${a} in style ${f}`);const n=o?.subsets??Object.keys(t.fonts[f][a]);for(const l of n){let n=t.fonts[f]?.[a]?.[l];if(!n)throw new Error(`weight: ${a} subset: ${l} is not available for '${t.fontFamily}'`);let u=`${t.fontFamily}-${f}-${a}-${l}`;const U=e[u];if(U){i.push(U);continue}const c=(0,s.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:a,subset:l})}`),r=new FontFace(t.fontFamily,`url(${n}) format('woff2')`,{weight:a,style:f,unicodeRange:t.unicodeRanges[l]}),F=r.load().then((()=>{(o?.document??document).fonts.add(r),(0,s._8)(c)})).catch((t=>{throw e[u]=void 0,t}));e[u]=F,i.push(F)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,n)}}]);
//# sourceMappingURL=568140.7f57368d.chunk.js.map