"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[937721],{937721:(t,n,o)=>{o.r(n),o.d(n,{fontFamily:()=>i,getInfo:()=>a,loadFont:()=>f});var e=o(662166),s={},a=()=>({fontFamily:"Esteban",importName:"Esteban",version:"v15",url:"https://fonts.googleapis.com/css2?family=Esteban:ital,wght@0,400",unicodeRanges:{"latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{"latin-ext":"https://fonts.gstatic.com/s/esteban/v15/r05bGLZE-bdGdN-GROKJ5wok.woff2",latin:"https://fonts.gstatic.com/s/esteban/v15/r05bGLZE-bdGdN-GROyJ5w.woff2"}}}}),i="Esteban",f=(t,n)=>((t,n,o)=>{const a=[],i=n?[n]:Object.keys(t.fonts);for(const f of i){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const n=o?.weights??Object.keys(t.fonts[f]);for(const i of n){if(!t.fonts[f][i])throw new Error(`The font ${t.fontFamily} does not  have a weight ${i} in style ${f}`);const n=o?.subsets??Object.keys(t.fonts[f][i]);for(const r of n){let n=t.fonts[f]?.[i]?.[r];if(!n)throw new Error(`weight: ${i} subset: ${r} is not available for '${t.fontFamily}'`);let l=`${t.fontFamily}-${f}-${i}-${r}`;const c=s[l];if(c){a.push(c);continue}const F=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:i,subset:r})}`),U=new FontFace(t.fontFamily,`url(${n}) format('woff2')`,{weight:i,style:f,unicodeRange:t.unicodeRanges[r]}),h=U.load().then((()=>{(o?.document??document).fonts.add(U),(0,e._8)(F)})).catch((t=>{throw s[l]=void 0,t}));s[l]=h,a.push(h)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(a).then((()=>{}))}})(a(),t,n)}}]);
//# sourceMappingURL=937721.7e478b84.chunk.js.map