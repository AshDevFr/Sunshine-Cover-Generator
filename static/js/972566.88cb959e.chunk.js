"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[972566],{972566:(t,o,n)=>{n.r(o),n.d(o,{fontFamily:()=>a,getInfo:()=>e,loadFont:()=>f});var s=n(662166),i={},e=()=>({fontFamily:"Noto Sans Ugaritic",importName:"NotoSansUgaritic",version:"v16",url:"https://fonts.googleapis.com/css2?family=Noto+Sans+Ugaritic:ital,wght@0,400",unicodeRanges:{ugaritic:"U+10380-1039F","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{ugaritic:"https://fonts.gstatic.com/s/notosansugaritic/v16/3qTwoiqhnSyU8TNFIdhZVCwbjCpkAXXUfBAJoiY.woff2","latin-ext":"https://fonts.gstatic.com/s/notosansugaritic/v16/3qTwoiqhnSyU8TNFIdhZVCwbjCpkAXXUOxAJoiY.woff2",latin:"https://fonts.gstatic.com/s/notosansugaritic/v16/3qTwoiqhnSyU8TNFIdhZVCwbjCpkAXXUNRAJ.woff2"}}}}),a="Noto Sans Ugaritic",f=(t,o)=>((t,o,n)=>{const e=[],a=o?[o]:Object.keys(t.fonts);for(const f of a){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const o=n?.weights??Object.keys(t.fonts[f]);for(const a of o){if(!t.fonts[f][a])throw new Error(`The font ${t.fontFamily} does not  have a weight ${a} in style ${f}`);const o=n?.subsets??Object.keys(t.fonts[f][a]);for(const c of o){let o=t.fonts[f]?.[a]?.[c];if(!o)throw new Error(`weight: ${a} subset: ${c} is not available for '${t.fontFamily}'`);let U=`${t.fontFamily}-${f}-${a}-${c}`;const r=i[U];if(r){e.push(r);continue}const F=(0,s.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:a,subset:c})}`),h=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:a,style:f,unicodeRange:t.unicodeRanges[c]}),l=h.load().then((()=>{(n?.document??document).fonts.add(h),(0,s._8)(F)})).catch((t=>{throw i[U]=void 0,t}));i[U]=l,e.push(l)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(e).then((()=>{}))}})(e(),t,o)}}]);
//# sourceMappingURL=972566.88cb959e.chunk.js.map