"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[693601],{693601:(t,e,n)=>{n.r(e),n.d(e,{fontFamily:()=>a,getInfo:()=>i,loadFont:()=>f});var o=n(662166),s={},i=()=>({fontFamily:"Special Elite",importName:"SpecialElite",version:"v18",url:"https://fonts.googleapis.com/css2?family=Special+Elite:ital,wght@0,400",unicodeRanges:{latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{latin:"https://fonts.gstatic.com/s/specialelite/v18/XLYgIZbkc4JPUL5CVArUVL0ntnAOSA.woff2"}}}}),a="Special Elite",f=(t,e)=>((t,e,n)=>{const i=[],a=e?[e]:Object.keys(t.fonts);for(const f of a){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const e=n?.weights??Object.keys(t.fonts[f]);for(const a of e){if(!t.fonts[f][a])throw new Error(`The font ${t.fontFamily} does not  have a weight ${a} in style ${f}`);const e=n?.subsets??Object.keys(t.fonts[f][a]);for(const l of e){let e=t.fonts[f]?.[a]?.[l];if(!e)throw new Error(`weight: ${a} subset: ${l} is not available for '${t.fontFamily}'`);let c=`${t.fontFamily}-${f}-${a}-${l}`;const r=s[c];if(r){i.push(r);continue}const h=(0,o.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:a,subset:l})}`),F=new FontFace(t.fontFamily,`url(${e}) format('woff2')`,{weight:a,style:f,unicodeRange:t.unicodeRanges[l]}),u=F.load().then((()=>{(n?.document??document).fonts.add(F),(0,o._8)(h)})).catch((t=>{throw s[c]=void 0,t}));s[c]=u,i.push(u)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,e)}}]);
//# sourceMappingURL=693601.f4c1f890.chunk.js.map