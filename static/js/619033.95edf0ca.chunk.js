"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[619033],{619033:(t,o,n)=>{n.r(o),n.d(o,{fontFamily:()=>f,getInfo:()=>i,loadFont:()=>a});var e=n(662166),s={},i=()=>({fontFamily:"Atomic Age",importName:"AtomicAge",version:"v27",url:"https://fonts.googleapis.com/css2?family=Atomic+Age:ital,wght@0,400",unicodeRanges:{latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{latin:"https://fonts.gstatic.com/s/atomicage/v27/f0Xz0eug6sdmRFkYZZGL18bn9A.woff2"}}}}),f="Atomic Age",a=(t,o)=>((t,o,n)=>{const i=[],f=o?[o]:Object.keys(t.fonts);for(const a of f){if("undefined"===typeof FontFace)continue;if(!t.fonts[a])throw new Error(`The font ${t.fontFamily} does not have a style ${a}`);const o=n?.weights??Object.keys(t.fonts[a]);for(const f of o){if(!t.fonts[a][f])throw new Error(`The font ${t.fontFamily} does not  have a weight ${f} in style ${a}`);const o=n?.subsets??Object.keys(t.fonts[a][f]);for(const c of o){let o=t.fonts[a]?.[f]?.[c];if(!o)throw new Error(`weight: ${f} subset: ${c} is not available for '${t.fontFamily}'`);let r=`${t.fontFamily}-${a}-${f}-${c}`;const l=s[r];if(l){i.push(l);continue}const m=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:a,weight:f,subset:c})}`),g=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:f,style:a,unicodeRange:t.unicodeRanges[c]}),h=g.load().then((()=>{(n?.document??document).fonts.add(g),(0,e._8)(m)})).catch((t=>{throw s[r]=void 0,t}));s[r]=h,i.push(h)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,o)}}]);
//# sourceMappingURL=619033.95edf0ca.chunk.js.map