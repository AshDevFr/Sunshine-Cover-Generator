"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[248988],{248988:(t,o,e)=>{e.r(o),e.d(o,{fontFamily:()=>f,getInfo:()=>i,loadFont:()=>a});var n=e(662166),s={},i=()=>({fontFamily:"Rochester",importName:"Rochester",version:"v22",url:"https://fonts.googleapis.com/css2?family=Rochester:ital,wght@0,400",unicodeRanges:{latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{latin:"https://fonts.gstatic.com/s/rochester/v22/6ae-4KCqVa4Zy6Fif-UC2FHX.woff2"}}}}),f="Rochester",a=(t,o)=>((t,o,e)=>{const i=[],f=o?[o]:Object.keys(t.fonts);for(const a of f){if("undefined"===typeof FontFace)continue;if(!t.fonts[a])throw new Error(`The font ${t.fontFamily} does not have a style ${a}`);const o=e?.weights??Object.keys(t.fonts[a]);for(const f of o){if(!t.fonts[a][f])throw new Error(`The font ${t.fontFamily} does not  have a weight ${f} in style ${a}`);const o=e?.subsets??Object.keys(t.fonts[a][f]);for(const r of o){let o=t.fonts[a]?.[f]?.[r];if(!o)throw new Error(`weight: ${f} subset: ${r} is not available for '${t.fontFamily}'`);let c=`${t.fontFamily}-${a}-${f}-${r}`;const l=s[c];if(l){i.push(l);continue}const h=(0,n.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:a,weight:f,subset:r})}`),F=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:f,style:a,unicodeRange:t.unicodeRanges[r]}),u=F.load().then((()=>{(e?.document??document).fonts.add(F),(0,n._8)(h)})).catch((t=>{throw s[c]=void 0,t}));s[c]=u,i.push(u)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,o)}}]);
//# sourceMappingURL=248988.f6fd8a72.chunk.js.map