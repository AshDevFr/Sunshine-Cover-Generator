"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[786088],{786088:(t,o,n)=>{n.r(o),n.d(o,{fontFamily:()=>i,getInfo:()=>a,loadFont:()=>f});var e=n(662166),s={},a=()=>({fontFamily:"Delius Swash Caps",importName:"DeliusSwashCaps",version:"v23",url:"https://fonts.googleapis.com/css2?family=Delius+Swash+Caps:ital,wght@0,400",unicodeRanges:{latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{latin:"https://fonts.gstatic.com/s/deliusswashcaps/v23/oY1E8fPLr7v4JWCExZpWebxVKORpXUeaIGY.woff2"}}}}),i="Delius Swash Caps",f=(t,o)=>((t,o,n)=>{const a=[],i=o?[o]:Object.keys(t.fonts);for(const f of i){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const o=n?.weights??Object.keys(t.fonts[f]);for(const i of o){if(!t.fonts[f][i])throw new Error(`The font ${t.fontFamily} does not  have a weight ${i} in style ${f}`);const o=n?.subsets??Object.keys(t.fonts[f][i]);for(const l of o){let o=t.fonts[f]?.[i]?.[l];if(!o)throw new Error(`weight: ${i} subset: ${l} is not available for '${t.fontFamily}'`);let r=`${t.fontFamily}-${f}-${i}-${l}`;const c=s[r];if(c){a.push(c);continue}const h=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:i,subset:l})}`),u=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:i,style:f,unicodeRange:t.unicodeRanges[l]}),F=u.load().then((()=>{(n?.document??document).fonts.add(u),(0,e._8)(h)})).catch((t=>{throw s[r]=void 0,t}));s[r]=F,a.push(F)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(a).then((()=>{}))}})(a(),t,o)}}]);
//# sourceMappingURL=786088.1fea8f35.chunk.js.map