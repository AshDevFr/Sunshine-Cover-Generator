"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[122740],{122740:(t,e,o)=>{o.r(e),o.d(e,{fontFamily:()=>f,getInfo:()=>i,loadFont:()=>a});var n=o(662166),s={},i=()=>({fontFamily:"Ledger",importName:"Ledger",version:"v16",url:"https://fonts.googleapis.com/css2?family=Ledger:ital,wght@0,400",unicodeRanges:{cyrillic:"U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{cyrillic:"https://fonts.gstatic.com/s/ledger/v16/j8_q6-HK1L3if_sBmMrxLTA.woff2","latin-ext":"https://fonts.gstatic.com/s/ledger/v16/j8_q6-HK1L3if_sBksrxLTA.woff2",latin:"https://fonts.gstatic.com/s/ledger/v16/j8_q6-HK1L3if_sBnMrx.woff2"}}}}),f="Ledger",a=(t,e)=>((t,e,o)=>{const i=[],f=e?[e]:Object.keys(t.fonts);for(const a of f){if("undefined"===typeof FontFace)continue;if(!t.fonts[a])throw new Error(`The font ${t.fontFamily} does not have a style ${a}`);const e=o?.weights??Object.keys(t.fonts[a]);for(const f of e){if(!t.fonts[a][f])throw new Error(`The font ${t.fontFamily} does not  have a weight ${f} in style ${a}`);const e=o?.subsets??Object.keys(t.fonts[a][f]);for(const r of e){let e=t.fonts[a]?.[f]?.[r];if(!e)throw new Error(`weight: ${f} subset: ${r} is not available for '${t.fontFamily}'`);let l=`${t.fontFamily}-${a}-${f}-${r}`;const c=s[l];if(c){i.push(c);continue}const U=(0,n.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:a,weight:f,subset:r})}`),F=new FontFace(t.fontFamily,`url(${e}) format('woff2')`,{weight:f,style:a,unicodeRange:t.unicodeRanges[r]}),g=F.load().then((()=>{(o?.document??document).fonts.add(F),(0,n._8)(U)})).catch((t=>{throw s[l]=void 0,t}));s[l]=g,i.push(g)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,e)}}]);
//# sourceMappingURL=122740.d14b9b76.chunk.js.map