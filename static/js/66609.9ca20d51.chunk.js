"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[66609],{66609:(t,n,o)=>{o.r(n),o.d(n,{fontFamily:()=>a,getInfo:()=>i,loadFont:()=>f});var s=o(662166),e={},i=()=>({fontFamily:"Kings",importName:"Kings",version:"v7",url:"https://fonts.googleapis.com/css2?family=Kings:ital,wght@0,400",unicodeRanges:{vietnamese:"U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{vietnamese:"https://fonts.gstatic.com/s/kings/v7/8AtnGsK4O5CYXX_AoaCiPQ.woff2","latin-ext":"https://fonts.gstatic.com/s/kings/v7/8AtnGsK4O5CYXX_BoaCiPQ.woff2",latin:"https://fonts.gstatic.com/s/kings/v7/8AtnGsK4O5CYXX_PoaA.woff2"}}}}),a="Kings",f=(t,n)=>((t,n,o)=>{const i=[],a=n?[n]:Object.keys(t.fonts);for(const f of a){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const n=o?.weights??Object.keys(t.fonts[f]);for(const a of n){if(!t.fonts[f][a])throw new Error(`The font ${t.fontFamily} does not  have a weight ${a} in style ${f}`);const n=o?.subsets??Object.keys(t.fonts[f][a]);for(const U of n){let n=t.fonts[f]?.[a]?.[U];if(!n)throw new Error(`weight: ${a} subset: ${U} is not available for '${t.fontFamily}'`);let c=`${t.fontFamily}-${f}-${a}-${U}`;const l=e[c];if(l){i.push(l);continue}const F=(0,s.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:a,subset:U})}`),r=new FontFace(t.fontFamily,`url(${n}) format('woff2')`,{weight:a,style:f,unicodeRange:t.unicodeRanges[U]}),g=r.load().then((()=>{(o?.document??document).fonts.add(r),(0,s._8)(F)})).catch((t=>{throw e[c]=void 0,t}));e[c]=g,i.push(g)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,n)}}]);
//# sourceMappingURL=66609.9ca20d51.chunk.js.map