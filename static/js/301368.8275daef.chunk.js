"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[301368],{301368:(t,n,o)=>{o.r(n),o.d(n,{fontFamily:()=>i,getInfo:()=>a,loadFont:()=>f});var s=o(662166),e={},a=()=>({fontFamily:"Noto Sans Shavian",importName:"NotoSansShavian",version:"v17",url:"https://fonts.googleapis.com/css2?family=Noto+Sans+Shavian:ital,wght@0,400",unicodeRanges:{shavian:"U+10450-1047F","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{shavian:"https://fonts.gstatic.com/s/notosansshavian/v17/CHy5V_HZE0jxJBQlqAeCKjJvQBNF4HEaQJhf2A.woff2","latin-ext":"https://fonts.gstatic.com/s/notosansshavian/v17/CHy5V_HZE0jxJBQlqAeCKjJvQBNF4HFZQJhf2A.woff2",latin:"https://fonts.gstatic.com/s/notosansshavian/v17/CHy5V_HZE0jxJBQlqAeCKjJvQBNF4HFXQJg.woff2"}}}}),i="Noto Sans Shavian",f=(t,n)=>((t,n,o)=>{const a=[],i=n?[n]:Object.keys(t.fonts);for(const f of i){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const n=o?.weights??Object.keys(t.fonts[f]);for(const i of n){if(!t.fonts[f][i])throw new Error(`The font ${t.fontFamily} does not  have a weight ${i} in style ${f}`);const n=o?.subsets??Object.keys(t.fonts[f][i]);for(const h of n){let n=t.fonts[f]?.[i]?.[h];if(!n)throw new Error(`weight: ${i} subset: ${h} is not available for '${t.fontFamily}'`);let F=`${t.fontFamily}-${f}-${i}-${h}`;const l=e[F];if(l){a.push(l);continue}const c=(0,s.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:i,subset:h})}`),r=new FontFace(t.fontFamily,`url(${n}) format('woff2')`,{weight:i,style:f,unicodeRange:t.unicodeRanges[h]}),U=r.load().then((()=>{(o?.document??document).fonts.add(r),(0,s._8)(c)})).catch((t=>{throw e[F]=void 0,t}));e[F]=U,a.push(U)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(a).then((()=>{}))}})(a(),t,n)}}]);
//# sourceMappingURL=301368.8275daef.chunk.js.map