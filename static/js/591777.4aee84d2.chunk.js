"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[591777],{591777:(t,n,o)=>{o.r(n),o.d(n,{fontFamily:()=>a,getInfo:()=>i,loadFont:()=>f});var e=o(662166),s={},i=()=>({fontFamily:"Stardos Stencil",importName:"StardosStencil",version:"v15",url:"https://fonts.googleapis.com/css2?family=Stardos+Stencil:ital,wght@0,400;0,700",unicodeRanges:{latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{latin:"https://fonts.gstatic.com/s/stardosstencil/v15/X7n94bcuGPC8hrvEOHXOgaKCc2Th6F52.woff2"},700:{latin:"https://fonts.gstatic.com/s/stardosstencil/v15/X7n44bcuGPC8hrvEOHXOgaKCc2TpU3tjuQWs.woff2"}}}}),a="Stardos Stencil",f=(t,n)=>((t,n,o)=>{const i=[],a=n?[n]:Object.keys(t.fonts);for(const f of a){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const n=o?.weights??Object.keys(t.fonts[f]);for(const a of n){if(!t.fonts[f][a])throw new Error(`The font ${t.fontFamily} does not  have a weight ${a} in style ${f}`);const n=o?.subsets??Object.keys(t.fonts[f][a]);for(const c of n){let n=t.fonts[f]?.[a]?.[c];if(!n)throw new Error(`weight: ${a} subset: ${c} is not available for '${t.fontFamily}'`);let r=`${t.fontFamily}-${f}-${a}-${c}`;const l=s[r];if(l){i.push(l);continue}const h=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:a,subset:c})}`),u=new FontFace(t.fontFamily,`url(${n}) format('woff2')`,{weight:a,style:f,unicodeRange:t.unicodeRanges[c]}),F=u.load().then((()=>{(o?.document??document).fonts.add(u),(0,e._8)(h)})).catch((t=>{throw s[r]=void 0,t}));s[r]=F,i.push(F)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,n)}}]);
//# sourceMappingURL=591777.4aee84d2.chunk.js.map