"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[770009],{770009:(t,n,o)=>{o.r(n),o.d(n,{fontFamily:()=>i,getInfo:()=>e,loadFont:()=>f});var s=o(662166),a={},e=()=>({fontFamily:"Noto Sans Mandaic",importName:"NotoSansMandaic",version:"v16",url:"https://fonts.googleapis.com/css2?family=Noto+Sans+Mandaic:ital,wght@0,400",unicodeRanges:{mandaic:"U+0640, U+0840-085F, U+200C-200D, U+25CC","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{mandaic:"https://fonts.gstatic.com/s/notosansmandaic/v16/cIfnMbdWt1w_HgCcilqhKQBo_OsMI6-C9AIU0g.woff2","latin-ext":"https://fonts.gstatic.com/s/notosansmandaic/v16/cIfnMbdWt1w_HgCcilqhKQBo_OsMI6_J9AIU0g.woff2",latin:"https://fonts.gstatic.com/s/notosansmandaic/v16/cIfnMbdWt1w_HgCcilqhKQBo_OsMI6_H9AI.woff2"}}}}),i="Noto Sans Mandaic",f=(t,n)=>((t,n,o)=>{const e=[],i=n?[n]:Object.keys(t.fonts);for(const f of i){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const n=o?.weights??Object.keys(t.fonts[f]);for(const i of n){if(!t.fonts[f][i])throw new Error(`The font ${t.fontFamily} does not  have a weight ${i} in style ${f}`);const n=o?.subsets??Object.keys(t.fonts[f][i]);for(const c of n){let n=t.fonts[f]?.[i]?.[c];if(!n)throw new Error(`weight: ${i} subset: ${c} is not available for '${t.fontFamily}'`);let U=`${t.fontFamily}-${f}-${i}-${c}`;const l=a[U];if(l){e.push(l);continue}const r=(0,s.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:i,subset:c})}`),F=new FontFace(t.fontFamily,`url(${n}) format('woff2')`,{weight:i,style:f,unicodeRange:t.unicodeRanges[c]}),h=F.load().then((()=>{(o?.document??document).fonts.add(F),(0,s._8)(r)})).catch((t=>{throw a[U]=void 0,t}));a[U]=h,e.push(h)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(e).then((()=>{}))}})(e(),t,n)}}]);
//# sourceMappingURL=770009.b3787b15.chunk.js.map