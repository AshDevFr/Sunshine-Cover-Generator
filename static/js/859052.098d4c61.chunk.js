"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[859052],{859052:(n,t,o)=>{o.r(t),o.d(t,{fontFamily:()=>f,getInfo:()=>a,loadFont:()=>i});var e=o(662166),s={},a=()=>({fontFamily:"Krona One",importName:"KronaOne",version:"v14",url:"https://fonts.googleapis.com/css2?family=Krona+One:ital,wght@0,400",unicodeRanges:{"latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{"latin-ext":"https://fonts.gstatic.com/s/kronaone/v14/jAnEgHdjHcjgfIb1ZcUyOIWg7cU.woff2",latin:"https://fonts.gstatic.com/s/kronaone/v14/jAnEgHdjHcjgfIb1ZcUyNoWg.woff2"}}}}),f="Krona One",i=(n,t)=>((n,t,o)=>{const a=[],f=t?[t]:Object.keys(n.fonts);for(const i of f){if("undefined"===typeof FontFace)continue;if(!n.fonts[i])throw new Error(`The font ${n.fontFamily} does not have a style ${i}`);const t=o?.weights??Object.keys(n.fonts[i]);for(const f of t){if(!n.fonts[i][f])throw new Error(`The font ${n.fontFamily} does not  have a weight ${f} in style ${i}`);const t=o?.subsets??Object.keys(n.fonts[i][f]);for(const r of t){let t=n.fonts[i]?.[f]?.[r];if(!t)throw new Error(`weight: ${f} subset: ${r} is not available for '${n.fontFamily}'`);let c=`${n.fontFamily}-${i}-${f}-${r}`;const U=s[c];if(U){a.push(U);continue}const l=(0,e.IH)(`Fetching ${n.fontFamily} font ${JSON.stringify({style:i,weight:f,subset:r})}`),F=new FontFace(n.fontFamily,`url(${t}) format('woff2')`,{weight:f,style:i,unicodeRange:n.unicodeRanges[r]}),g=F.load().then((()=>{(o?.document??document).fonts.add(F),(0,e._8)(l)})).catch((n=>{throw s[c]=void 0,n}));s[c]=g,a.push(g)}}}return{fontFamily:n.fontFamily,fonts:n.fonts,unicodeRanges:n.unicodeRanges,waitUntilDone:()=>Promise.all(a).then((()=>{}))}})(a(),n,t)}}]);
//# sourceMappingURL=859052.098d4c61.chunk.js.map