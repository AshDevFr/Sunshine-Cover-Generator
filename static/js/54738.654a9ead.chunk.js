"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[54738],{54738:(t,n,e)=>{e.r(n),e.d(n,{fontFamily:()=>i,getInfo:()=>a,loadFont:()=>f});var o=e(662166),s={},a=()=>({fontFamily:"Emblema One",importName:"EmblemaOne",version:"v21",url:"https://fonts.googleapis.com/css2?family=Emblema+One:ital,wght@0,400",unicodeRanges:{"latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{"latin-ext":"https://fonts.gstatic.com/s/emblemaone/v21/nKKT-GQ0F5dSY8vzG0rOELRIFF9LGw.woff2",latin:"https://fonts.gstatic.com/s/emblemaone/v21/nKKT-GQ0F5dSY8vzG0rOELRGFF8.woff2"}}}}),i="Emblema One",f=(t,n)=>((t,n,e)=>{const a=[],i=n?[n]:Object.keys(t.fonts);for(const f of i){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const n=e?.weights??Object.keys(t.fonts[f]);for(const i of n){if(!t.fonts[f][i])throw new Error(`The font ${t.fontFamily} does not  have a weight ${i} in style ${f}`);const n=e?.subsets??Object.keys(t.fonts[f][i]);for(const l of n){let n=t.fonts[f]?.[i]?.[l];if(!n)throw new Error(`weight: ${i} subset: ${l} is not available for '${t.fontFamily}'`);let F=`${t.fontFamily}-${f}-${i}-${l}`;const r=s[F];if(r){a.push(r);continue}const m=(0,o.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:i,subset:l})}`),c=new FontFace(t.fontFamily,`url(${n}) format('woff2')`,{weight:i,style:f,unicodeRange:t.unicodeRanges[l]}),U=c.load().then((()=>{(e?.document??document).fonts.add(c),(0,o._8)(m)})).catch((t=>{throw s[F]=void 0,t}));s[F]=U,a.push(U)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(a).then((()=>{}))}})(a(),t,n)}}]);
//# sourceMappingURL=54738.654a9ead.chunk.js.map