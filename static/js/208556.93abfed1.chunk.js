"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[208556],{208556:(o,t,n)=>{n.r(t),n.d(t,{fontFamily:()=>f,getInfo:()=>a,loadFont:()=>i});var s=n(662166),e={},a=()=>({fontFamily:"Noto Sans NKo",importName:"NotoSansNKo",version:"v6",url:"https://fonts.googleapis.com/css2?family=Noto+Sans+NKo:ital,wght@0,400",unicodeRanges:{nko:"U+060C, U+061B, U+061F, U+066A, U+07C0-07FF, U+200C-200F, U+25CC, U+2E1C-2E1D, U+FD3E-FD3F","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{nko:"https://fonts.gstatic.com/s/notosansnko/v6/esDX31ZdNv-KYGGJpKGk2_RpAvyGHfLB.woff2","latin-ext":"https://fonts.gstatic.com/s/notosansnko/v6/esDX31ZdNv-KYGGJpKGk2_RpApmGHfLB.woff2",latin:"https://fonts.gstatic.com/s/notosansnko/v6/esDX31ZdNv-KYGGJpKGk2_RpApeGHQ.woff2"}}}}),f="Noto Sans NKo",i=(o,t)=>((o,t,n)=>{const a=[],f=t?[t]:Object.keys(o.fonts);for(const i of f){if("undefined"===typeof FontFace)continue;if(!o.fonts[i])throw new Error(`The font ${o.fontFamily} does not have a style ${i}`);const t=n?.weights??Object.keys(o.fonts[i]);for(const f of t){if(!o.fonts[i][f])throw new Error(`The font ${o.fontFamily} does not  have a weight ${f} in style ${i}`);const t=n?.subsets??Object.keys(o.fonts[i][f]);for(const U of t){let t=o.fonts[i]?.[f]?.[U];if(!t)throw new Error(`weight: ${f} subset: ${U} is not available for '${o.fontFamily}'`);let F=`${o.fontFamily}-${i}-${f}-${U}`;const c=e[F];if(c){a.push(c);continue}const l=(0,s.IH)(`Fetching ${o.fontFamily} font ${JSON.stringify({style:i,weight:f,subset:U})}`),r=new FontFace(o.fontFamily,`url(${t}) format('woff2')`,{weight:f,style:i,unicodeRange:o.unicodeRanges[U]}),h=r.load().then((()=>{(n?.document??document).fonts.add(r),(0,s._8)(l)})).catch((o=>{throw e[F]=void 0,o}));e[F]=h,a.push(h)}}}return{fontFamily:o.fontFamily,fonts:o.fonts,unicodeRanges:o.unicodeRanges,waitUntilDone:()=>Promise.all(a).then((()=>{}))}})(a(),o,t)}}]);
//# sourceMappingURL=208556.93abfed1.chunk.js.map