"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[142452],{142452:(t,o,e)=>{e.r(o),e.d(o,{fontFamily:()=>a,getInfo:()=>i,loadFont:()=>f});var n=e(662166),s={},i=()=>({fontFamily:"Orelega One",importName:"OrelegaOne",version:"v12",url:"https://fonts.googleapis.com/css2?family=Orelega+One:ital,wght@0,400",unicodeRanges:{"cyrillic-ext":"U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",cyrillic:"U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{"cyrillic-ext":"https://fonts.gstatic.com/s/orelegaone/v12/3qTpojOggD2XtAdFb-QXZFtw3kYoaQ.woff2",cyrillic:"https://fonts.gstatic.com/s/orelegaone/v12/3qTpojOggD2XtAdFb-QXZFt53kYoaQ.woff2","latin-ext":"https://fonts.gstatic.com/s/orelegaone/v12/3qTpojOggD2XtAdFb-QXZFtz3kYoaQ.woff2",latin:"https://fonts.gstatic.com/s/orelegaone/v12/3qTpojOggD2XtAdFb-QXZFt93kY.woff2"}}}}),a="Orelega One",f=(t,o)=>((t,o,e)=>{const i=[],a=o?[o]:Object.keys(t.fonts);for(const f of a){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const o=e?.weights??Object.keys(t.fonts[f]);for(const a of o){if(!t.fonts[f][a])throw new Error(`The font ${t.fontFamily} does not  have a weight ${a} in style ${f}`);const o=e?.subsets??Object.keys(t.fonts[f][a]);for(const l of o){let o=t.fonts[f]?.[a]?.[l];if(!o)throw new Error(`weight: ${a} subset: ${l} is not available for '${t.fontFamily}'`);let F=`${t.fontFamily}-${f}-${a}-${l}`;const c=s[F];if(c){i.push(c);continue}const r=(0,n.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:a,subset:l})}`),U=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:a,style:f,unicodeRange:t.unicodeRanges[l]}),g=U.load().then((()=>{(e?.document??document).fonts.add(U),(0,n._8)(r)})).catch((t=>{throw s[F]=void 0,t}));s[F]=g,i.push(g)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,o)}}]);
//# sourceMappingURL=142452.251ae5c9.chunk.js.map