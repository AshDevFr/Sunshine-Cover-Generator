"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[564808],{564808:(t,n,o)=>{o.r(n),o.d(n,{fontFamily:()=>a,getInfo:()=>i,loadFont:()=>f});var e=o(662166),s={},i=()=>({fontFamily:"Tangerine",importName:"Tangerine",version:"v17",url:"https://fonts.googleapis.com/css2?family=Tangerine:ital,wght@0,400;0,700",unicodeRanges:{latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{latin:"https://fonts.gstatic.com/s/tangerine/v17/IurY6Y5j_oScZZow4VOxCZZM.woff2"},700:{latin:"https://fonts.gstatic.com/s/tangerine/v17/Iurd6Y5j_oScZZow4VO5srNZi5FN.woff2"}}}}),a="Tangerine",f=(t,n)=>((t,n,o)=>{const i=[],a=n?[n]:Object.keys(t.fonts);for(const f of a){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const n=o?.weights??Object.keys(t.fonts[f]);for(const a of n){if(!t.fonts[f][a])throw new Error(`The font ${t.fontFamily} does not  have a weight ${a} in style ${f}`);const n=o?.subsets??Object.keys(t.fonts[f][a]);for(const r of n){let n=t.fonts[f]?.[a]?.[r];if(!n)throw new Error(`weight: ${a} subset: ${r} is not available for '${t.fontFamily}'`);let c=`${t.fontFamily}-${f}-${a}-${r}`;const l=s[c];if(l){i.push(l);continue}const g=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:a,subset:r})}`),h=new FontFace(t.fontFamily,`url(${n}) format('woff2')`,{weight:a,style:f,unicodeRange:t.unicodeRanges[r]}),u=h.load().then((()=>{(o?.document??document).fonts.add(h),(0,e._8)(g)})).catch((t=>{throw s[c]=void 0,t}));s[c]=u,i.push(u)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,n)}}]);
//# sourceMappingURL=564808.9843d5b3.chunk.js.map