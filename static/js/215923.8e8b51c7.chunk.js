"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[215923],{215923:(t,o,n)=>{n.r(o),n.d(o,{fontFamily:()=>f,getInfo:()=>a,loadFont:()=>i});var s=n(662166),e={},a=()=>({fontFamily:"Noto Sans Newa",importName:"NotoSansNewa",version:"v16",url:"https://fonts.googleapis.com/css2?family=Noto+Sans+Newa:ital,wght@0,400",unicodeRanges:{newa:"U+1DFB, U+200C-200D, U+25CC, U+11400-1147F","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{newa:"https://fonts.gstatic.com/s/notosansnewa/v16/7r3fqXp6utEsO9pI4f8ok8sWg_mSot8h5g.woff2","latin-ext":"https://fonts.gstatic.com/s/notosansnewa/v16/7r3fqXp6utEsO9pI4f8ok8sWg_n2ot8h5g.woff2",latin:"https://fonts.gstatic.com/s/notosansnewa/v16/7r3fqXp6utEsO9pI4f8ok8sWg_n4ot8.woff2"}}}}),f="Noto Sans Newa",i=(t,o)=>((t,o,n)=>{const a=[],f=o?[o]:Object.keys(t.fonts);for(const i of f){if("undefined"===typeof FontFace)continue;if(!t.fonts[i])throw new Error(`The font ${t.fontFamily} does not have a style ${i}`);const o=n?.weights??Object.keys(t.fonts[i]);for(const f of o){if(!t.fonts[i][f])throw new Error(`The font ${t.fontFamily} does not  have a weight ${f} in style ${i}`);const o=n?.subsets??Object.keys(t.fonts[i][f]);for(const r of o){let o=t.fonts[i]?.[f]?.[r];if(!o)throw new Error(`weight: ${f} subset: ${r} is not available for '${t.fontFamily}'`);let U=`${t.fontFamily}-${i}-${f}-${r}`;const c=e[U];if(c){a.push(c);continue}const l=(0,s.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:i,weight:f,subset:r})}`),F=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:f,style:i,unicodeRange:t.unicodeRanges[r]}),h=F.load().then((()=>{(n?.document??document).fonts.add(F),(0,s._8)(l)})).catch((t=>{throw e[U]=void 0,t}));e[U]=h,a.push(h)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(a).then((()=>{}))}})(a(),t,o)}}]);
//# sourceMappingURL=215923.8e8b51c7.chunk.js.map