"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[980598],{980598:(o,t,n)=>{n.r(t),n.d(t,{fontFamily:()=>i,getInfo:()=>a,loadFont:()=>f});var s=n(662166),e={},a=()=>({fontFamily:"Noto Sans Phags Pa",importName:"NotoSansPhagsPa",version:"v15",url:"https://fonts.googleapis.com/css2?family=Noto+Sans+Phags+Pa:ital,wght@0,400",unicodeRanges:{"phags-pa":"U+1801-1803, U+1805, U+200C-200F, U+2025, U+25CC, U+3000-3003, U+3005, U+3007-301B, U+A840-A877, U+FE00, U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{"phags-pa":"https://fonts.gstatic.com/s/notosansphagspa/v15/pxiZyoo6v8ZYyWh5WuPeJzMkd4SrGChUnU6t.woff2"}}}}),i="Noto Sans Phags Pa",f=(o,t)=>((o,t,n)=>{const a=[],i=t?[t]:Object.keys(o.fonts);for(const f of i){if("undefined"===typeof FontFace)continue;if(!o.fonts[f])throw new Error(`The font ${o.fontFamily} does not have a style ${f}`);const t=n?.weights??Object.keys(o.fonts[f]);for(const i of t){if(!o.fonts[f][i])throw new Error(`The font ${o.fontFamily} does not  have a weight ${i} in style ${f}`);const t=n?.subsets??Object.keys(o.fonts[f][i]);for(const h of t){let t=o.fonts[f]?.[i]?.[h];if(!t)throw new Error(`weight: ${i} subset: ${h} is not available for '${o.fontFamily}'`);let r=`${o.fontFamily}-${f}-${i}-${h}`;const U=e[r];if(U){a.push(U);continue}const c=(0,s.IH)(`Fetching ${o.fontFamily} font ${JSON.stringify({style:f,weight:i,subset:h})}`),l=new FontFace(o.fontFamily,`url(${t}) format('woff2')`,{weight:i,style:f,unicodeRange:o.unicodeRanges[h]}),g=l.load().then((()=>{(n?.document??document).fonts.add(l),(0,s._8)(c)})).catch((o=>{throw e[r]=void 0,o}));e[r]=g,a.push(g)}}}return{fontFamily:o.fontFamily,fonts:o.fonts,unicodeRanges:o.unicodeRanges,waitUntilDone:()=>Promise.all(a).then((()=>{}))}})(a(),o,t)}}]);
//# sourceMappingURL=980598.c43881a9.chunk.js.map