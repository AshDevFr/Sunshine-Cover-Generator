"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[855824],{855824:(t,o,e)=>{e.r(o),e.d(o,{fontFamily:()=>a,getInfo:()=>i,loadFont:()=>f});var n=e(662166),s={},i=()=>({fontFamily:"Libre Barcode OneTwoEight",importName:"LibreBarcode128",version:"v28",url:"https://fonts.googleapis.com/css2?family=Libre+Barcode+128:ital,wght@0,400",unicodeRanges:{latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{latin:"https://fonts.gstatic.com/s/librebarcode128/v28/cIfnMbdUsUoiW3O_hVviCwVjuLtXeK_H9AI.woff2"}}}}),a="Libre Barcode OneTwoEight",f=(t,o)=>((t,o,e)=>{const i=[],a=o?[o]:Object.keys(t.fonts);for(const f of a){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const o=e?.weights??Object.keys(t.fonts[f]);for(const a of o){if(!t.fonts[f][a])throw new Error(`The font ${t.fontFamily} does not  have a weight ${a} in style ${f}`);const o=e?.subsets??Object.keys(t.fonts[f][a]);for(const r of o){let o=t.fonts[f]?.[a]?.[r];if(!o)throw new Error(`weight: ${a} subset: ${r} is not available for '${t.fontFamily}'`);let c=`${t.fontFamily}-${f}-${a}-${r}`;const l=s[c];if(l){i.push(l);continue}const h=(0,n.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:a,subset:r})}`),u=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:a,style:f,unicodeRange:t.unicodeRanges[r]}),F=u.load().then((()=>{(e?.document??document).fonts.add(u),(0,n._8)(h)})).catch((t=>{throw s[c]=void 0,t}));s[c]=F,i.push(F)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,o)}}]);
//# sourceMappingURL=855824.d704c191.chunk.js.map