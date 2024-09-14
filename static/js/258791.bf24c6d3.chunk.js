"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[258791],{258791:(t,s,i)=>{i.r(s),i.d(s,{fontFamily:()=>f,getInfo:()=>n,loadFont:()=>e});var o=i(662166),c={},n=()=>({fontFamily:"Mitr",importName:"Mitr",version:"v11",url:"https://fonts.googleapis.com/css2?family=Mitr:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700",unicodeRanges:{thai:"U+0E01-0E5B, U+200C-200D, U+25CC",vietnamese:"U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{200:{thai:"https://fonts.gstatic.com/s/mitr/v11/pxiEypw5ucZF8fMZJIPecmNE.woff2",vietnamese:"https://fonts.gstatic.com/s/mitr/v11/pxiEypw5ucZF8fMZJJjecmNE.woff2","latin-ext":"https://fonts.gstatic.com/s/mitr/v11/pxiEypw5ucZF8fMZJJnecmNE.woff2",latin:"https://fonts.gstatic.com/s/mitr/v11/pxiEypw5ucZF8fMZJJfecg.woff2"},300:{thai:"https://fonts.gstatic.com/s/mitr/v11/pxiEypw5ucZF8ZcaJIPecmNE.woff2",vietnamese:"https://fonts.gstatic.com/s/mitr/v11/pxiEypw5ucZF8ZcaJJjecmNE.woff2","latin-ext":"https://fonts.gstatic.com/s/mitr/v11/pxiEypw5ucZF8ZcaJJnecmNE.woff2",latin:"https://fonts.gstatic.com/s/mitr/v11/pxiEypw5ucZF8ZcaJJfecg.woff2"},400:{thai:"https://fonts.gstatic.com/s/mitr/v11/pxiLypw5ucZF-Sg4Maj_.woff2",vietnamese:"https://fonts.gstatic.com/s/mitr/v11/pxiLypw5ucZF-TM4Maj_.woff2","latin-ext":"https://fonts.gstatic.com/s/mitr/v11/pxiLypw5ucZF-TI4Maj_.woff2",latin:"https://fonts.gstatic.com/s/mitr/v11/pxiLypw5ucZF-Tw4MQ.woff2"},500:{thai:"https://fonts.gstatic.com/s/mitr/v11/pxiEypw5ucZF8c8bJIPecmNE.woff2",vietnamese:"https://fonts.gstatic.com/s/mitr/v11/pxiEypw5ucZF8c8bJJjecmNE.woff2","latin-ext":"https://fonts.gstatic.com/s/mitr/v11/pxiEypw5ucZF8c8bJJnecmNE.woff2",latin:"https://fonts.gstatic.com/s/mitr/v11/pxiEypw5ucZF8c8bJJfecg.woff2"},600:{thai:"https://fonts.gstatic.com/s/mitr/v11/pxiEypw5ucZF8eMcJIPecmNE.woff2",vietnamese:"https://fonts.gstatic.com/s/mitr/v11/pxiEypw5ucZF8eMcJJjecmNE.woff2","latin-ext":"https://fonts.gstatic.com/s/mitr/v11/pxiEypw5ucZF8eMcJJnecmNE.woff2",latin:"https://fonts.gstatic.com/s/mitr/v11/pxiEypw5ucZF8eMcJJfecg.woff2"},700:{thai:"https://fonts.gstatic.com/s/mitr/v11/pxiEypw5ucZF8YcdJIPecmNE.woff2",vietnamese:"https://fonts.gstatic.com/s/mitr/v11/pxiEypw5ucZF8YcdJJjecmNE.woff2","latin-ext":"https://fonts.gstatic.com/s/mitr/v11/pxiEypw5ucZF8YcdJJnecmNE.woff2",latin:"https://fonts.gstatic.com/s/mitr/v11/pxiEypw5ucZF8YcdJJfecg.woff2"}}}}),f="Mitr",e=(t,s)=>((t,s,i)=>{const n=[],f=s?[s]:Object.keys(t.fonts);for(const e of f){if("undefined"===typeof FontFace)continue;if(!t.fonts[e])throw new Error(`The font ${t.fontFamily} does not have a style ${e}`);const s=i?.weights??Object.keys(t.fonts[e]);for(const f of s){if(!t.fonts[e][f])throw new Error(`The font ${t.fontFamily} does not  have a weight ${f} in style ${e}`);const s=i?.subsets??Object.keys(t.fonts[e][f]);for(const a of s){let s=t.fonts[e]?.[f]?.[a];if(!s)throw new Error(`weight: ${f} subset: ${a} is not available for '${t.fontFamily}'`);let m=`${t.fontFamily}-${e}-${f}-${a}`;const p=c[m];if(p){n.push(p);continue}const w=(0,o.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:e,weight:f,subset:a})}`),r=new FontFace(t.fontFamily,`url(${s}) format('woff2')`,{weight:f,style:e,unicodeRange:t.unicodeRanges[a]}),F=r.load().then((()=>{(i?.document??document).fonts.add(r),(0,o._8)(w)})).catch((t=>{throw c[m]=void 0,t}));c[m]=F,n.push(F)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(n).then((()=>{}))}})(n(),t,s)}}]);
//# sourceMappingURL=258791.bf24c6d3.chunk.js.map