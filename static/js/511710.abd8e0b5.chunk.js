"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[511710],{511710:(e,t,n)=>{n.r(t),n.d(t,{fontFamily:()=>a,getInfo:()=>i,loadFont:()=>f});var o=n(662166),s={},i=()=>({fontFamily:"Libre Barcode ThreeNine Extended",importName:"LibreBarcode39Extended",version:"v27",url:"https://fonts.googleapis.com/css2?family=Libre+Barcode+39+Extended:ital,wght@0,400",unicodeRanges:{latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{latin:"https://fonts.gstatic.com/s/librebarcode39extended/v27/8At7Gt6_O5yNS0-K4Nf5U922qSzhJ3dUdfJpwNUgTNNIOA.woff2"}}}}),a="Libre Barcode ThreeNine Extended",f=(e,t)=>((e,t,n)=>{const i=[],a=t?[t]:Object.keys(e.fonts);for(const f of a){if("undefined"===typeof FontFace)continue;if(!e.fonts[f])throw new Error(`The font ${e.fontFamily} does not have a style ${f}`);const t=n?.weights??Object.keys(e.fonts[f]);for(const a of t){if(!e.fonts[f][a])throw new Error(`The font ${e.fontFamily} does not  have a weight ${a} in style ${f}`);const t=n?.subsets??Object.keys(e.fonts[f][a]);for(const r of t){let t=e.fonts[f]?.[a]?.[r];if(!t)throw new Error(`weight: ${a} subset: ${r} is not available for '${e.fontFamily}'`);let c=`${e.fontFamily}-${f}-${a}-${r}`;const d=s[c];if(d){i.push(d);continue}const l=(0,o.IH)(`Fetching ${e.fontFamily} font ${JSON.stringify({style:f,weight:a,subset:r})}`),h=new FontFace(e.fontFamily,`url(${t}) format('woff2')`,{weight:a,style:f,unicodeRange:e.unicodeRanges[r]}),F=h.load().then((()=>{(n?.document??document).fonts.add(h),(0,o._8)(l)})).catch((e=>{throw s[c]=void 0,e}));s[c]=F,i.push(F)}}}return{fontFamily:e.fontFamily,fonts:e.fonts,unicodeRanges:e.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),e,t)}}]);
//# sourceMappingURL=511710.abd8e0b5.chunk.js.map