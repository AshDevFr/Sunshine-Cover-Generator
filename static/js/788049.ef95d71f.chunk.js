"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[788049],{788049:(t,o,n)=>{n.r(o),n.d(o,{fontFamily:()=>i,getInfo:()=>a,loadFont:()=>f});var e=n(662166),s={},a=()=>({fontFamily:"Marko One",importName:"MarkoOne",version:"v22",url:"https://fonts.googleapis.com/css2?family=Marko+One:ital,wght@0,400",unicodeRanges:{latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{latin:"https://fonts.gstatic.com/s/markoone/v23/9Btq3DFG0cnVM5lw1haqLZ8e.woff2"}}}}),i="Marko One",f=(t,o)=>((t,o,n)=>{const a=[],i=o?[o]:Object.keys(t.fonts);for(const f of i){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const o=n?.weights??Object.keys(t.fonts[f]);for(const i of o){if(!t.fonts[f][i])throw new Error(`The font ${t.fontFamily} does not  have a weight ${i} in style ${f}`);const o=n?.subsets??Object.keys(t.fonts[f][i]);for(const r of o){let o=t.fonts[f]?.[i]?.[r];if(!o)throw new Error(`weight: ${i} subset: ${r} is not available for '${t.fontFamily}'`);let l=`${t.fontFamily}-${f}-${i}-${r}`;const c=s[l];if(c){a.push(c);continue}const h=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:i,subset:r})}`),F=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:i,style:f,unicodeRange:t.unicodeRanges[r]}),u=F.load().then((()=>{(n?.document??document).fonts.add(F),(0,e._8)(h)})).catch((t=>{throw s[l]=void 0,t}));s[l]=u,a.push(u)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(a).then((()=>{}))}})(a(),t,o)}}]);
//# sourceMappingURL=788049.ef95d71f.chunk.js.map