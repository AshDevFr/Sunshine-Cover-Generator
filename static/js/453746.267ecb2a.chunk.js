"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[453746],{453746:(t,n,o)=>{o.r(n),o.d(n,{fontFamily:()=>a,getInfo:()=>s,loadFont:()=>f});var e=o(662166),i={},s=()=>({fontFamily:"Hanalei Fill",importName:"HanaleiFill",version:"v22",url:"https://fonts.googleapis.com/css2?family=Hanalei+Fill:ital,wght@0,400",unicodeRanges:{"latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{"latin-ext":"https://fonts.gstatic.com/s/hanaleifill/v22/fC1mPYtObGbfyQznIaQzPQi8XgjAllk.woff2",latin:"https://fonts.gstatic.com/s/hanaleifill/v22/fC1mPYtObGbfyQznIaQzPQi8UAjA.woff2"}}}}),a="Hanalei Fill",f=(t,n)=>((t,n,o)=>{const s=[],a=n?[n]:Object.keys(t.fonts);for(const f of a){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const n=o?.weights??Object.keys(t.fonts[f]);for(const a of n){if(!t.fonts[f][a])throw new Error(`The font ${t.fontFamily} does not  have a weight ${a} in style ${f}`);const n=o?.subsets??Object.keys(t.fonts[f][a]);for(const l of n){let n=t.fonts[f]?.[a]?.[l];if(!n)throw new Error(`weight: ${a} subset: ${l} is not available for '${t.fontFamily}'`);let F=`${t.fontFamily}-${f}-${a}-${l}`;const c=i[F];if(c){s.push(c);continue}const r=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:a,subset:l})}`),U=new FontFace(t.fontFamily,`url(${n}) format('woff2')`,{weight:a,style:f,unicodeRange:t.unicodeRanges[l]}),h=U.load().then((()=>{(o?.document??document).fonts.add(U),(0,e._8)(r)})).catch((t=>{throw i[F]=void 0,t}));i[F]=h,s.push(h)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(s).then((()=>{}))}})(s(),t,n)}}]);
//# sourceMappingURL=453746.267ecb2a.chunk.js.map