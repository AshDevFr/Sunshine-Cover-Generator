"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[826086],{826086:(t,e,o)=>{o.r(e),o.d(e,{fontFamily:()=>a,getInfo:()=>i,loadFont:()=>f});var n=o(662166),s={},i=()=>({fontFamily:"Beau Rivage",importName:"BeauRivage",version:"v2",url:"https://fonts.googleapis.com/css2?family=Beau+Rivage:ital,wght@0,400",unicodeRanges:{vietnamese:"U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{vietnamese:"https://fonts.gstatic.com/s/beaurivage/v2/UcCi3FIgIG2bH4mMNWJUllg_P5tMKw.woff2","latin-ext":"https://fonts.gstatic.com/s/beaurivage/v2/UcCi3FIgIG2bH4mMNWJUllg-P5tMKw.woff2",latin:"https://fonts.gstatic.com/s/beaurivage/v2/UcCi3FIgIG2bH4mMNWJUllgwP5s.woff2"}}}}),a="Beau Rivage",f=(t,e)=>((t,e,o)=>{const i=[],a=e?[e]:Object.keys(t.fonts);for(const f of a){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const e=o?.weights??Object.keys(t.fonts[f]);for(const a of e){if(!t.fonts[f][a])throw new Error(`The font ${t.fontFamily} does not  have a weight ${a} in style ${f}`);const e=o?.subsets??Object.keys(t.fonts[f][a]);for(const U of e){let e=t.fonts[f]?.[a]?.[U];if(!e)throw new Error(`weight: ${a} subset: ${U} is not available for '${t.fontFamily}'`);let l=`${t.fontFamily}-${f}-${a}-${U}`;const c=s[l];if(c){i.push(c);continue}const F=(0,n.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:a,subset:U})}`),r=new FontFace(t.fontFamily,`url(${e}) format('woff2')`,{weight:a,style:f,unicodeRange:t.unicodeRanges[U]}),g=r.load().then((()=>{(o?.document??document).fonts.add(r),(0,n._8)(F)})).catch((t=>{throw s[l]=void 0,t}));s[l]=g,i.push(g)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,e)}}]);
//# sourceMappingURL=826086.fde4ea13.chunk.js.map