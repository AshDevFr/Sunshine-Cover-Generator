"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[617152],{617152:(t,n,o)=>{o.r(n),o.d(n,{fontFamily:()=>i,getInfo:()=>a,loadFont:()=>f});var e=o(662166),s={},a=()=>({fontFamily:"Amarante",importName:"Amarante",version:"v28",url:"https://fonts.googleapis.com/css2?family=Amarante:ital,wght@0,400",unicodeRanges:{"latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{"latin-ext":"https://fonts.gstatic.com/s/amarante/v28/xMQXuF1KTa6EvGx9bp--AXvwmA.woff2",latin:"https://fonts.gstatic.com/s/amarante/v28/xMQXuF1KTa6EvGx9bp-wAXs.woff2"}}}}),i="Amarante",f=(t,n)=>((t,n,o)=>{const a=[],i=n?[n]:Object.keys(t.fonts);for(const f of i){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const n=o?.weights??Object.keys(t.fonts[f]);for(const i of n){if(!t.fonts[f][i])throw new Error(`The font ${t.fontFamily} does not  have a weight ${i} in style ${f}`);const n=o?.subsets??Object.keys(t.fonts[f][i]);for(const r of n){let n=t.fonts[f]?.[i]?.[r];if(!n)throw new Error(`weight: ${i} subset: ${r} is not available for '${t.fontFamily}'`);let l=`${t.fontFamily}-${f}-${i}-${r}`;const F=s[l];if(F){a.push(F);continue}const c=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:i,subset:r})}`),U=new FontFace(t.fontFamily,`url(${n}) format('woff2')`,{weight:i,style:f,unicodeRange:t.unicodeRanges[r]}),m=U.load().then((()=>{(o?.document??document).fonts.add(U),(0,e._8)(c)})).catch((t=>{throw s[l]=void 0,t}));s[l]=m,a.push(m)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(a).then((()=>{}))}})(a(),t,n)}}]);
//# sourceMappingURL=617152.8b58527d.chunk.js.map