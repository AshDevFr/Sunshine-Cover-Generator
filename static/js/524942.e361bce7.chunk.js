"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[524942],{524942:(n,t,o)=>{o.r(t),o.d(t,{fontFamily:()=>i,getInfo:()=>e,loadFont:()=>f});var s=o(662166),a={},e=()=>({fontFamily:"Noto Sans Old Hungarian",importName:"NotoSansOldHungarian",version:"v18",url:"https://fonts.googleapis.com/css2?family=Noto+Sans+Old+Hungarian:ital,wght@0,400",unicodeRanges:{"old-hungarian":"U+200D, U+205A, U+205D-205E, U+2E31, U+10C80-10CFF","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{"old-hungarian":"https://fonts.gstatic.com/s/notosansoldhungarian/v18/E213_cD6hP3GwCJPEUssHEM0KqLaHJXg2PiIgSdsRSpqMJw.woff2","latin-ext":"https://fonts.gstatic.com/s/notosansoldhungarian/v18/E213_cD6hP3GwCJPEUssHEM0KqLaHJXg2PiIgSfqZA9XCQ.woff2",latin:"https://fonts.gstatic.com/s/notosansoldhungarian/v18/E213_cD6hP3GwCJPEUssHEM0KqLaHJXg2PiIgSfkZA8.woff2"}}}}),i="Noto Sans Old Hungarian",f=(n,t)=>((n,t,o)=>{const e=[],i=t?[t]:Object.keys(n.fonts);for(const f of i){if("undefined"===typeof FontFace)continue;if(!n.fonts[f])throw new Error(`The font ${n.fontFamily} does not have a style ${f}`);const t=o?.weights??Object.keys(n.fonts[f]);for(const i of t){if(!n.fonts[f][i])throw new Error(`The font ${n.fontFamily} does not  have a weight ${i} in style ${f}`);const t=o?.subsets??Object.keys(n.fonts[f][i]);for(const l of t){let t=n.fonts[f]?.[i]?.[l];if(!t)throw new Error(`weight: ${i} subset: ${l} is not available for '${n.fontFamily}'`);let r=`${n.fontFamily}-${f}-${i}-${l}`;const U=a[r];if(U){e.push(U);continue}const c=(0,s.IH)(`Fetching ${n.fontFamily} font ${JSON.stringify({style:f,weight:i,subset:l})}`),g=new FontFace(n.fontFamily,`url(${t}) format('woff2')`,{weight:i,style:f,unicodeRange:n.unicodeRanges[l]}),h=g.load().then((()=>{(o?.document??document).fonts.add(g),(0,s._8)(c)})).catch((n=>{throw a[r]=void 0,n}));a[r]=h,e.push(h)}}}return{fontFamily:n.fontFamily,fonts:n.fonts,unicodeRanges:n.unicodeRanges,waitUntilDone:()=>Promise.all(e).then((()=>{}))}})(e(),n,t)}}]);
//# sourceMappingURL=524942.e361bce7.chunk.js.map