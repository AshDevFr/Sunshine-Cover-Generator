"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[108706],{108706:(t,o,n)=>{n.r(o),n.d(o,{fontFamily:()=>i,getInfo:()=>a,loadFont:()=>f});var s=n(662166),e={},a=()=>({fontFamily:"Ropa Sans",importName:"RopaSans",version:"v15",url:"https://fonts.googleapis.com/css2?family=Ropa+Sans:ital,wght@0,400;1,400",unicodeRanges:{"latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{italic:{400:{"latin-ext":"https://fonts.gstatic.com/s/ropasans/v15/EYq3maNOzLlWtsZSScy6WANle5av2g.woff2",latin:"https://fonts.gstatic.com/s/ropasans/v15/EYq3maNOzLlWtsZSScy6WANre5Y.woff2"}},normal:{400:{"latin-ext":"https://fonts.gstatic.com/s/ropasans/v15/EYqxmaNOzLlWtsZSScy6UzNpY5I.woff2",latin:"https://fonts.gstatic.com/s/ropasans/v15/EYqxmaNOzLlWtsZSScy6XTNp.woff2"}}}}),i="Ropa Sans",f=(t,o)=>((t,o,n)=>{const a=[],i=o?[o]:Object.keys(t.fonts);for(const f of i){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const o=n?.weights??Object.keys(t.fonts[f]);for(const i of o){if(!t.fonts[f][i])throw new Error(`The font ${t.fontFamily} does not  have a weight ${i} in style ${f}`);const o=n?.subsets??Object.keys(t.fonts[f][i]);for(const c of o){let o=t.fonts[f]?.[i]?.[c];if(!o)throw new Error(`weight: ${i} subset: ${c} is not available for '${t.fontFamily}'`);let l=`${t.fontFamily}-${f}-${i}-${c}`;const r=e[l];if(r){a.push(r);continue}const U=(0,s.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:i,subset:c})}`),F=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:i,style:f,unicodeRange:t.unicodeRanges[c]}),h=F.load().then((()=>{(n?.document??document).fonts.add(F),(0,s._8)(U)})).catch((t=>{throw e[l]=void 0,t}));e[l]=h,a.push(h)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(a).then((()=>{}))}})(a(),t,o)}}]);
//# sourceMappingURL=108706.06db2ab0.chunk.js.map