"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[470823],{470823:(t,o,n)=>{n.r(o),n.d(o,{fontFamily:()=>a,getInfo:()=>i,loadFont:()=>f});var s=n(662166),e={},i=()=>({fontFamily:"Noto Sans Egyptian Hieroglyphs",importName:"NotoSansEgyptianHieroglyphs",version:"v28",url:"https://fonts.googleapis.com/css2?family=Noto+Sans+Egyptian+Hieroglyphs:ital,wght@0,400",unicodeRanges:{"egyptian-hieroglyphs":"U+13000-13455","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{"egyptian-hieroglyphs":"https://fonts.gstatic.com/s/notosansegyptianhieroglyphs/v28/vEF42-tODB8RrNDvZSUmRhcQHzx1s7y_F9-j3qSzEcbEYintdVi99Rg.woff2","latin-ext":"https://fonts.gstatic.com/s/notosansegyptianhieroglyphs/v28/vEF42-tODB8RrNDvZSUmRhcQHzx1s7y_F9-j3qSzEcbEYintQFi99Rg.woff2",latin:"https://fonts.gstatic.com/s/notosansegyptianhieroglyphs/v28/vEF42-tODB8RrNDvZSUmRhcQHzx1s7y_F9-j3qSzEcbEYintTli9.woff2"}}}}),a="Noto Sans Egyptian Hieroglyphs",f=(t,o)=>((t,o,n)=>{const i=[],a=o?[o]:Object.keys(t.fonts);for(const f of a){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const o=n?.weights??Object.keys(t.fonts[f]);for(const a of o){if(!t.fonts[f][a])throw new Error(`The font ${t.fontFamily} does not  have a weight ${a} in style ${f}`);const o=n?.subsets??Object.keys(t.fonts[f][a]);for(const h of o){let o=t.fonts[f]?.[a]?.[h];if(!o)throw new Error(`weight: ${a} subset: ${h} is not available for '${t.fontFamily}'`);let r=`${t.fontFamily}-${f}-${a}-${h}`;const l=e[r];if(l){i.push(l);continue}const g=(0,s.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:a,subset:h})}`),c=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:a,style:f,unicodeRange:t.unicodeRanges[h]}),y=c.load().then((()=>{(n?.document??document).fonts.add(c),(0,s._8)(g)})).catch((t=>{throw e[r]=void 0,t}));e[r]=y,i.push(y)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,o)}}]);
//# sourceMappingURL=470823.e61e3534.chunk.js.map