"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[91232],{91232:(t,n,o)=>{o.r(n),o.d(n,{fontFamily:()=>f,getInfo:()=>i,loadFont:()=>l});var e=o(662166),s={},i=()=>({fontFamily:"IM Fell English SC",importName:"IMFellEnglishSC",version:"v16",url:"https://fonts.googleapis.com/css2?family=IM+Fell+English+SC:ital,wght@0,400",unicodeRanges:{latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{latin:"https://fonts.gstatic.com/s/imfellenglishsc/v16/a8IENpD3CDX-4zrWfr1VY879qFF05pZ7PIIP.woff2"}}}}),f="IM Fell English SC",l=(t,n)=>((t,n,o)=>{const i=[],f=n?[n]:Object.keys(t.fonts);for(const l of f){if("undefined"===typeof FontFace)continue;if(!t.fonts[l])throw new Error(`The font ${t.fontFamily} does not have a style ${l}`);const n=o?.weights??Object.keys(t.fonts[l]);for(const f of n){if(!t.fonts[l][f])throw new Error(`The font ${t.fontFamily} does not  have a weight ${f} in style ${l}`);const n=o?.subsets??Object.keys(t.fonts[l][f]);for(const a of n){let n=t.fonts[l]?.[f]?.[a];if(!n)throw new Error(`weight: ${f} subset: ${a} is not available for '${t.fontFamily}'`);let r=`${t.fontFamily}-${l}-${f}-${a}`;const c=s[r];if(c){i.push(c);continue}const h=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:l,weight:f,subset:a})}`),F=new FontFace(t.fontFamily,`url(${n}) format('woff2')`,{weight:f,style:l,unicodeRange:t.unicodeRanges[a]}),g=F.load().then((()=>{(o?.document??document).fonts.add(F),(0,e._8)(h)})).catch((t=>{throw s[r]=void 0,t}));s[r]=g,i.push(g)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,n)}}]);
//# sourceMappingURL=91232.ca449638.chunk.js.map