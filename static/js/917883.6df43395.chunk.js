"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[917883],{917883:(n,t,o)=>{o.r(t),o.d(t,{fontFamily:()=>i,getInfo:()=>s,loadFont:()=>f});var a=o(662166),e={},s=()=>({fontFamily:"Noto Sans Manichaean",importName:"NotoSansManichaean",version:"v18",url:"https://fonts.googleapis.com/css2?family=Noto+Sans+Manichaean:ital,wght@0,400",unicodeRanges:{manichaean:"U+0640, U+200C-200D, U+25CC, U+FE00, U+10AC0-10AFF","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{manichaean:"https://fonts.gstatic.com/s/notosansmanichaean/v18/taiVGntiC4--qtsfi4Jp9-_GkPZZCcrfenr-Pzp1Cg.woff2","latin-ext":"https://fonts.gstatic.com/s/notosansmanichaean/v18/taiVGntiC4--qtsfi4Jp9-_GkPZZCcrfenqLPzp1Cg.woff2",latin:"https://fonts.gstatic.com/s/notosansmanichaean/v18/taiVGntiC4--qtsfi4Jp9-_GkPZZCcrfenqFPzo.woff2"}}}}),i="Noto Sans Manichaean",f=(n,t)=>((n,t,o)=>{const s=[],i=t?[t]:Object.keys(n.fonts);for(const f of i){if("undefined"===typeof FontFace)continue;if(!n.fonts[f])throw new Error(`The font ${n.fontFamily} does not have a style ${f}`);const t=o?.weights??Object.keys(n.fonts[f]);for(const i of t){if(!n.fonts[f][i])throw new Error(`The font ${n.fontFamily} does not  have a weight ${i} in style ${f}`);const t=o?.subsets??Object.keys(n.fonts[f][i]);for(const c of t){let t=n.fonts[f]?.[i]?.[c];if(!t)throw new Error(`weight: ${i} subset: ${c} is not available for '${n.fontFamily}'`);let h=`${n.fontFamily}-${f}-${i}-${c}`;const r=e[h];if(r){s.push(r);continue}const U=(0,a.IH)(`Fetching ${n.fontFamily} font ${JSON.stringify({style:f,weight:i,subset:c})}`),F=new FontFace(n.fontFamily,`url(${t}) format('woff2')`,{weight:i,style:f,unicodeRange:n.unicodeRanges[c]}),l=F.load().then((()=>{(o?.document??document).fonts.add(F),(0,a._8)(U)})).catch((n=>{throw e[h]=void 0,n}));e[h]=l,s.push(l)}}}return{fontFamily:n.fontFamily,fonts:n.fonts,unicodeRanges:n.unicodeRanges,waitUntilDone:()=>Promise.all(s).then((()=>{}))}})(s(),n,t)}}]);
//# sourceMappingURL=917883.6df43395.chunk.js.map