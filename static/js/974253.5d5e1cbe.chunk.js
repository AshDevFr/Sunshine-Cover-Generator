"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[974253],{974253:(t,e,o)=>{o.r(e),o.d(e,{fontFamily:()=>a,getInfo:()=>i,loadFont:()=>f});var n=o(662166),s={},i=()=>({fontFamily:"Della Respira",importName:"DellaRespira",version:"v22",url:"https://fonts.googleapis.com/css2?family=Della+Respira:ital,wght@0,400",unicodeRanges:{latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{latin:"https://fonts.gstatic.com/s/dellarespira/v22/RLp5K5v44KaueWI6iEJQBiGPdf4Yug.woff2"}}}}),a="Della Respira",f=(t,e)=>((t,e,o)=>{const i=[],a=e?[e]:Object.keys(t.fonts);for(const f of a){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const e=o?.weights??Object.keys(t.fonts[f]);for(const a of e){if(!t.fonts[f][a])throw new Error(`The font ${t.fontFamily} does not  have a weight ${a} in style ${f}`);const e=o?.subsets??Object.keys(t.fonts[f][a]);for(const l of e){let e=t.fonts[f]?.[a]?.[l];if(!e)throw new Error(`weight: ${a} subset: ${l} is not available for '${t.fontFamily}'`);let r=`${t.fontFamily}-${f}-${a}-${l}`;const c=s[r];if(c){i.push(c);continue}const h=(0,n.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:a,subset:l})}`),u=new FontFace(t.fontFamily,`url(${e}) format('woff2')`,{weight:a,style:f,unicodeRange:t.unicodeRanges[l]}),F=u.load().then((()=>{(o?.document??document).fonts.add(u),(0,n._8)(h)})).catch((t=>{throw s[r]=void 0,t}));s[r]=F,i.push(F)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,e)}}]);
//# sourceMappingURL=974253.5d5e1cbe.chunk.js.map