"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[961598],{961598:(t,o,e)=>{e.r(o),e.d(o,{fontFamily:()=>f,getInfo:()=>i,loadFont:()=>a});var n=e(662166),s={},i=()=>({fontFamily:"Solitreo",importName:"Solitreo",version:"v2",url:"https://fonts.googleapis.com/css2?family=Solitreo:ital,wght@0,400",unicodeRanges:{hebrew:"U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{hebrew:"https://fonts.gstatic.com/s/solitreo/v2/r05YGLlS5a9KYsyNO_uswjcdSg.woff2","latin-ext":"https://fonts.gstatic.com/s/solitreo/v2/r05YGLlS5a9KYsyNO_ugwjcdSg.woff2",latin:"https://fonts.gstatic.com/s/solitreo/v2/r05YGLlS5a9KYsyNO_uuwjc.woff2"}}}}),f="Solitreo",a=(t,o)=>((t,o,e)=>{const i=[],f=o?[o]:Object.keys(t.fonts);for(const a of f){if("undefined"===typeof FontFace)continue;if(!t.fonts[a])throw new Error(`The font ${t.fontFamily} does not have a style ${a}`);const o=e?.weights??Object.keys(t.fonts[a]);for(const f of o){if(!t.fonts[a][f])throw new Error(`The font ${t.fontFamily} does not  have a weight ${f} in style ${a}`);const o=e?.subsets??Object.keys(t.fonts[a][f]);for(const r of o){let o=t.fonts[a]?.[f]?.[r];if(!o)throw new Error(`weight: ${f} subset: ${r} is not available for '${t.fontFamily}'`);let l=`${t.fontFamily}-${a}-${f}-${r}`;const c=s[l];if(c){i.push(c);continue}const F=(0,n.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:a,weight:f,subset:r})}`),U=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:f,style:a,unicodeRange:t.unicodeRanges[r]}),h=U.load().then((()=>{(e?.document??document).fonts.add(U),(0,n._8)(F)})).catch((t=>{throw s[l]=void 0,t}));s[l]=h,i.push(h)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,o)}}]);
//# sourceMappingURL=961598.4f3e7249.chunk.js.map