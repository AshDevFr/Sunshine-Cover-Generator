"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[22965],{22965:(t,n,o)=>{o.r(n),o.d(n,{fontFamily:()=>a,getInfo:()=>i,loadFont:()=>f});var e=o(662166),s={},i=()=>({fontFamily:"Modern Antiqua",importName:"ModernAntiqua",version:"v24",url:"https://fonts.googleapis.com/css2?family=Modern+Antiqua:ital,wght@0,400",unicodeRanges:{"latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{"latin-ext":"https://fonts.gstatic.com/s/modernantiqua/v24/NGStv5TIAUg6Iq_RLNo_2dp1sL1NYWqEcw.woff2",latin:"https://fonts.gstatic.com/s/modernantiqua/v24/NGStv5TIAUg6Iq_RLNo_2dp1sL1DYWo.woff2"}}}}),a="Modern Antiqua",f=(t,n)=>((t,n,o)=>{const i=[],a=n?[n]:Object.keys(t.fonts);for(const f of a){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const n=o?.weights??Object.keys(t.fonts[f]);for(const a of n){if(!t.fonts[f][a])throw new Error(`The font ${t.fontFamily} does not  have a weight ${a} in style ${f}`);const n=o?.subsets??Object.keys(t.fonts[f][a]);for(const r of n){let n=t.fonts[f]?.[a]?.[r];if(!n)throw new Error(`weight: ${a} subset: ${r} is not available for '${t.fontFamily}'`);let c=`${t.fontFamily}-${f}-${a}-${r}`;const l=s[c];if(l){i.push(l);continue}const U=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:a,subset:r})}`),F=new FontFace(t.fontFamily,`url(${n}) format('woff2')`,{weight:a,style:f,unicodeRange:t.unicodeRanges[r]}),u=F.load().then((()=>{(o?.document??document).fonts.add(F),(0,e._8)(U)})).catch((t=>{throw s[c]=void 0,t}));s[c]=u,i.push(u)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,n)}}]);
//# sourceMappingURL=22965.d483e4aa.chunk.js.map