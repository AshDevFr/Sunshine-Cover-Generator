"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[889411],{889411:(t,o,n)=>{n.r(o),n.d(o,{fontFamily:()=>i,getInfo:()=>a,loadFont:()=>f});var s=n(662166),e={},a=()=>({fontFamily:"Noto Sans Nushu",importName:"NotoSansNushu",version:"v19",url:"https://fonts.googleapis.com/css2?family=Noto+Sans+Nushu:ital,wght@0,400",unicodeRanges:{nushu:"U+2003, U+3000, U+3002, U+4E00, U+FE12, U+16FE1, U+1B170-1B2FB","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{nushu:"https://fonts.gstatic.com/s/notosansnushu/v19/rnCw-xRQ3B7652emAbAe_Ai1IYa1IFoNMrY.woff2","latin-ext":"https://fonts.gstatic.com/s/notosansnushu/v19/rnCw-xRQ3B7652emAbAe_Ai1IYa1UVoNMrY.woff2",latin:"https://fonts.gstatic.com/s/notosansnushu/v19/rnCw-xRQ3B7652emAbAe_Ai1IYa1X1oN.woff2"}}}}),i="Noto Sans Nushu",f=(t,o)=>((t,o,n)=>{const a=[],i=o?[o]:Object.keys(t.fonts);for(const f of i){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const o=n?.weights??Object.keys(t.fonts[f]);for(const i of o){if(!t.fonts[f][i])throw new Error(`The font ${t.fontFamily} does not  have a weight ${i} in style ${f}`);const o=n?.subsets??Object.keys(t.fonts[f][i]);for(const u of o){let o=t.fonts[f]?.[i]?.[u];if(!o)throw new Error(`weight: ${i} subset: ${u} is not available for '${t.fontFamily}'`);let U=`${t.fontFamily}-${f}-${i}-${u}`;const r=e[U];if(r){a.push(r);continue}const h=(0,s.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:i,subset:u})}`),F=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:i,style:f,unicodeRange:t.unicodeRanges[u]}),c=F.load().then((()=>{(n?.document??document).fonts.add(F),(0,s._8)(h)})).catch((t=>{throw e[U]=void 0,t}));e[U]=c,a.push(c)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(a).then((()=>{}))}})(a(),t,o)}}]);
//# sourceMappingURL=889411.88b3eb7c.chunk.js.map