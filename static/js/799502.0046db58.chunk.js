"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[799502],{799502:(t,o,n)=>{n.r(o),n.d(o,{fontFamily:()=>f,getInfo:()=>i,loadFont:()=>a});var e=n(662166),s={},i=()=>({fontFamily:"Gloock",importName:"Gloock",version:"v6",url:"https://fonts.googleapis.com/css2?family=Gloock:ital,wght@0,400",unicodeRanges:{"cyrillic-ext":"U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{"cyrillic-ext":"https://fonts.gstatic.com/s/gloock/v6/Iurb6YFw84WUY4NJhRakNrc.woff2","latin-ext":"https://fonts.gstatic.com/s/gloock/v6/Iurb6YFw84WUY4NJhhakNrc.woff2",latin:"https://fonts.gstatic.com/s/gloock/v6/Iurb6YFw84WUY4NJiBak.woff2"}}}}),f="Gloock",a=(t,o)=>((t,o,n)=>{const i=[],f=o?[o]:Object.keys(t.fonts);for(const a of f){if("undefined"===typeof FontFace)continue;if(!t.fonts[a])throw new Error(`The font ${t.fontFamily} does not have a style ${a}`);const o=n?.weights??Object.keys(t.fonts[a]);for(const f of o){if(!t.fonts[a][f])throw new Error(`The font ${t.fontFamily} does not  have a weight ${f} in style ${a}`);const o=n?.subsets??Object.keys(t.fonts[a][f]);for(const c of o){let o=t.fonts[a]?.[f]?.[c];if(!o)throw new Error(`weight: ${f} subset: ${c} is not available for '${t.fontFamily}'`);let l=`${t.fontFamily}-${a}-${f}-${c}`;const F=s[l];if(F){i.push(F);continue}const U=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:a,weight:f,subset:c})}`),r=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:f,style:a,unicodeRange:t.unicodeRanges[c]}),h=r.load().then((()=>{(n?.document??document).fonts.add(r),(0,e._8)(U)})).catch((t=>{throw s[l]=void 0,t}));s[l]=h,i.push(h)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,o)}}]);
//# sourceMappingURL=799502.0046db58.chunk.js.map