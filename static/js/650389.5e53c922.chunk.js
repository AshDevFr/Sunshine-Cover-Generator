"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[650389],{650389:(t,n,o)=>{o.r(n),o.d(n,{fontFamily:()=>a,getInfo:()=>i,loadFont:()=>f});var e=o(662166),s={},i=()=>({fontFamily:"Delicious Handrawn",importName:"DeliciousHandrawn",version:"v8",url:"https://fonts.googleapis.com/css2?family=Delicious+Handrawn:ital,wght@0,400",unicodeRanges:{"latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{"latin-ext":"https://fonts.gstatic.com/s/delicioushandrawn/v8/wlpsgx_NAUNkpmKQifcxkQchDFo3fJ1F1ZBCR6s.woff2",latin:"https://fonts.gstatic.com/s/delicioushandrawn/v8/wlpsgx_NAUNkpmKQifcxkQchDFo3fJ1F25BC.woff2"}}}}),a="Delicious Handrawn",f=(t,n)=>((t,n,o)=>{const i=[],a=n?[n]:Object.keys(t.fonts);for(const f of a){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const n=o?.weights??Object.keys(t.fonts[f]);for(const a of n){if(!t.fonts[f][a])throw new Error(`The font ${t.fontFamily} does not  have a weight ${a} in style ${f}`);const n=o?.subsets??Object.keys(t.fonts[f][a]);for(const c of n){let n=t.fonts[f]?.[a]?.[c];if(!n)throw new Error(`weight: ${a} subset: ${c} is not available for '${t.fontFamily}'`);let l=`${t.fontFamily}-${f}-${a}-${c}`;const r=s[l];if(r){i.push(r);continue}const F=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:a,subset:c})}`),U=new FontFace(t.fontFamily,`url(${n}) format('woff2')`,{weight:a,style:f,unicodeRange:t.unicodeRanges[c]}),h=U.load().then((()=>{(o?.document??document).fonts.add(U),(0,e._8)(F)})).catch((t=>{throw s[l]=void 0,t}));s[l]=h,i.push(h)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,n)}}]);
//# sourceMappingURL=650389.5e53c922.chunk.js.map