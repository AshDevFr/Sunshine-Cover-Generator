"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[23743],{23743:(t,n,e)=>{e.r(n),e.d(n,{fontFamily:()=>f,getInfo:()=>i,loadFont:()=>a});var o=e(662166),s={},i=()=>({fontFamily:"Delius Unicase",importName:"DeliusUnicase",version:"v28",url:"https://fonts.googleapis.com/css2?family=Delius+Unicase:ital,wght@0,400;0,700",unicodeRanges:{latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{latin:"https://fonts.gstatic.com/s/deliusunicase/v28/845BNMEwEIOVT8BmgfSzIr_6mlLAfe8.woff2"},700:{latin:"https://fonts.gstatic.com/s/deliusunicase/v28/845CNMEwEIOVT8BmgfSzIr_6mlp7WPr4DGg.woff2"}}}}),f="Delius Unicase",a=(t,n)=>((t,n,e)=>{const i=[],f=n?[n]:Object.keys(t.fonts);for(const a of f){if("undefined"===typeof FontFace)continue;if(!t.fonts[a])throw new Error(`The font ${t.fontFamily} does not have a style ${a}`);const n=e?.weights??Object.keys(t.fonts[a]);for(const f of n){if(!t.fonts[a][f])throw new Error(`The font ${t.fontFamily} does not  have a weight ${f} in style ${a}`);const n=e?.subsets??Object.keys(t.fonts[a][f]);for(const l of n){let n=t.fonts[a]?.[f]?.[l];if(!n)throw new Error(`weight: ${f} subset: ${l} is not available for '${t.fontFamily}'`);let c=`${t.fontFamily}-${a}-${f}-${l}`;const r=s[c];if(r){i.push(r);continue}const u=(0,o.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:a,weight:f,subset:l})}`),h=new FontFace(t.fontFamily,`url(${n}) format('woff2')`,{weight:f,style:a,unicodeRange:t.unicodeRanges[l]}),m=h.load().then((()=>{(e?.document??document).fonts.add(h),(0,o._8)(u)})).catch((t=>{throw s[c]=void 0,t}));s[c]=m,i.push(m)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,n)}}]);
//# sourceMappingURL=23743.0187c39c.chunk.js.map