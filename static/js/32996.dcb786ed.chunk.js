"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[32996],{32996:(t,n,o)=>{o.r(n),o.d(n,{fontFamily:()=>i,getInfo:()=>a,loadFont:()=>f});var e=o(662166),s={},a=()=>({fontFamily:"Keania One",importName:"KeaniaOne",version:"v24",url:"https://fonts.googleapis.com/css2?family=Keania+One:ital,wght@0,400",unicodeRanges:{"latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{"latin-ext":"https://fonts.gstatic.com/s/keaniaone/v24/zOL54pXJk65E8pXardnu-c1kvthH.woff2",latin:"https://fonts.gstatic.com/s/keaniaone/v24/zOL54pXJk65E8pXardnu-cNkvg.woff2"}}}}),i="Keania One",f=(t,n)=>((t,n,o)=>{const a=[],i=n?[n]:Object.keys(t.fonts);for(const f of i){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const n=o?.weights??Object.keys(t.fonts[f]);for(const i of n){if(!t.fonts[f][i])throw new Error(`The font ${t.fontFamily} does not  have a weight ${i} in style ${f}`);const n=o?.subsets??Object.keys(t.fonts[f][i]);for(const c of n){let n=t.fonts[f]?.[i]?.[c];if(!n)throw new Error(`weight: ${i} subset: ${c} is not available for '${t.fontFamily}'`);let r=`${t.fontFamily}-${f}-${i}-${c}`;const l=s[r];if(l){a.push(l);continue}const F=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:i,subset:c})}`),U=new FontFace(t.fontFamily,`url(${n}) format('woff2')`,{weight:i,style:f,unicodeRange:t.unicodeRanges[c]}),h=U.load().then((()=>{(o?.document??document).fonts.add(U),(0,e._8)(F)})).catch((t=>{throw s[r]=void 0,t}));s[r]=h,a.push(h)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(a).then((()=>{}))}})(a(),t,n)}}]);
//# sourceMappingURL=32996.dcb786ed.chunk.js.map