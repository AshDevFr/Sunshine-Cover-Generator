"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[734019],{734019:(t,o,n)=>{n.r(o),n.d(o,{fontFamily:()=>i,getInfo:()=>a,loadFont:()=>f});var e=n(662166),s={},a=()=>({fontFamily:"Arapey",importName:"Arapey",version:"v16",url:"https://fonts.googleapis.com/css2?family=Arapey:ital,wght@0,400;1,400",unicodeRanges:{latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{italic:{400:{latin:"https://fonts.gstatic.com/s/arapey/v16/-W_9XJn-UDDA2RCKZeofTkY.woff2"}},normal:{400:{latin:"https://fonts.gstatic.com/s/arapey/v16/-W__XJn-UDDA2RCKYNod.woff2"}}}}),i="Arapey",f=(t,o)=>((t,o,n)=>{const a=[],i=o?[o]:Object.keys(t.fonts);for(const f of i){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const o=n?.weights??Object.keys(t.fonts[f]);for(const i of o){if(!t.fonts[f][i])throw new Error(`The font ${t.fontFamily} does not  have a weight ${i} in style ${f}`);const o=n?.subsets??Object.keys(t.fonts[f][i]);for(const r of o){let o=t.fonts[f]?.[i]?.[r];if(!o)throw new Error(`weight: ${i} subset: ${r} is not available for '${t.fontFamily}'`);let c=`${t.fontFamily}-${f}-${i}-${r}`;const l=s[c];if(l){a.push(l);continue}const h=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:i,subset:r})}`),y=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:i,style:f,unicodeRange:t.unicodeRanges[r]}),F=y.load().then((()=>{(n?.document??document).fonts.add(y),(0,e._8)(h)})).catch((t=>{throw s[c]=void 0,t}));s[c]=F,a.push(F)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(a).then((()=>{}))}})(a(),t,o)}}]);
//# sourceMappingURL=734019.d435cd9b.chunk.js.map