"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[179627],{179627:(t,n,o)=>{o.r(n),o.d(n,{fontFamily:()=>i,getInfo:()=>a,loadFont:()=>f});var e=o(662166),s={},a=()=>({fontFamily:"Bubblegum Sans",importName:"BubblegumSans",version:"v20",url:"https://fonts.googleapis.com/css2?family=Bubblegum+Sans:ital,wght@0,400",unicodeRanges:{"latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{"latin-ext":"https://fonts.gstatic.com/s/bubblegumsans/v20/AYCSpXb_Z9EORv1M5QTjEzMEteaOxIL_bw.woff2",latin:"https://fonts.gstatic.com/s/bubblegumsans/v20/AYCSpXb_Z9EORv1M5QTjEzMEteaAxII.woff2"}}}}),i="Bubblegum Sans",f=(t,n)=>((t,n,o)=>{const a=[],i=n?[n]:Object.keys(t.fonts);for(const f of i){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const n=o?.weights??Object.keys(t.fonts[f]);for(const i of n){if(!t.fonts[f][i])throw new Error(`The font ${t.fontFamily} does not  have a weight ${i} in style ${f}`);const n=o?.subsets??Object.keys(t.fonts[f][i]);for(const l of n){let n=t.fonts[f]?.[i]?.[l];if(!n)throw new Error(`weight: ${i} subset: ${l} is not available for '${t.fontFamily}'`);let u=`${t.fontFamily}-${f}-${i}-${l}`;const c=s[u];if(c){a.push(c);continue}const r=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:i,subset:l})}`),F=new FontFace(t.fontFamily,`url(${n}) format('woff2')`,{weight:i,style:f,unicodeRange:t.unicodeRanges[l]}),U=F.load().then((()=>{(o?.document??document).fonts.add(F),(0,e._8)(r)})).catch((t=>{throw s[u]=void 0,t}));s[u]=U,a.push(U)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(a).then((()=>{}))}})(a(),t,n)}}]);
//# sourceMappingURL=179627.6da74eb6.chunk.js.map