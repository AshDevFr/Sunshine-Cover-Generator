"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[619852],{619852:(t,n,o)=>{o.r(n),o.d(n,{fontFamily:()=>i,getInfo:()=>a,loadFont:()=>f});var e=o(662166),s={},a=()=>({fontFamily:"Noto Sans Lycian",importName:"NotoSansLycian",version:"v15",url:"https://fonts.googleapis.com/css2?family=Noto+Sans+Lycian:ital,wght@0,400",unicodeRanges:{lycian:"U+10280-1029C, U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{lycian:"https://fonts.gstatic.com/s/notosanslycian/v15/QldVNSNMqAsHtsJ7UmqxBQA9r8wA16TQCQ.woff2"}}}}),i="Noto Sans Lycian",f=(t,n)=>((t,n,o)=>{const a=[],i=n?[n]:Object.keys(t.fonts);for(const f of i){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const n=o?.weights??Object.keys(t.fonts[f]);for(const i of n){if(!t.fonts[f][i])throw new Error(`The font ${t.fontFamily} does not  have a weight ${i} in style ${f}`);const n=o?.subsets??Object.keys(t.fonts[f][i]);for(const c of n){let n=t.fonts[f]?.[i]?.[c];if(!n)throw new Error(`weight: ${i} subset: ${c} is not available for '${t.fontFamily}'`);let l=`${t.fontFamily}-${f}-${i}-${c}`;const r=s[l];if(r){a.push(r);continue}const h=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:i,subset:c})}`),y=new FontFace(t.fontFamily,`url(${n}) format('woff2')`,{weight:i,style:f,unicodeRange:t.unicodeRanges[c]}),F=y.load().then((()=>{(o?.document??document).fonts.add(y),(0,e._8)(h)})).catch((t=>{throw s[l]=void 0,t}));s[l]=F,a.push(F)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(a).then((()=>{}))}})(a(),t,n)}}]);
//# sourceMappingURL=619852.d3bc49a9.chunk.js.map