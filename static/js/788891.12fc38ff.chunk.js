"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[788891],{788891:(t,o,n)=>{n.r(o),n.d(o,{fontFamily:()=>f,getInfo:()=>i,loadFont:()=>a});var e=n(662166),s={},i=()=>({fontFamily:"Astloch",importName:"Astloch",version:"v26",url:"https://fonts.googleapis.com/css2?family=Astloch:ital,wght@0,400;0,700",unicodeRanges:{latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{latin:"https://fonts.gstatic.com/s/astloch/v26/TuGRUVJ8QI5GSeUjm9sbzQ.woff2"},700:{latin:"https://fonts.gstatic.com/s/astloch/v26/TuGUUVJ8QI5GSeUjk2A-2MRFAg.woff2"}}}}),f="Astloch",a=(t,o)=>((t,o,n)=>{const i=[],f=o?[o]:Object.keys(t.fonts);for(const a of f){if("undefined"===typeof FontFace)continue;if(!t.fonts[a])throw new Error(`The font ${t.fontFamily} does not have a style ${a}`);const o=n?.weights??Object.keys(t.fonts[a]);for(const f of o){if(!t.fonts[a][f])throw new Error(`The font ${t.fontFamily} does not  have a weight ${f} in style ${a}`);const o=n?.subsets??Object.keys(t.fonts[a][f]);for(const c of o){let o=t.fonts[a]?.[f]?.[c];if(!o)throw new Error(`weight: ${f} subset: ${c} is not available for '${t.fontFamily}'`);let l=`${t.fontFamily}-${a}-${f}-${c}`;const h=s[l];if(h){i.push(h);continue}const r=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:a,weight:f,subset:c})}`),u=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:f,style:a,unicodeRange:t.unicodeRanges[c]}),F=u.load().then((()=>{(n?.document??document).fonts.add(u),(0,e._8)(r)})).catch((t=>{throw s[l]=void 0,t}));s[l]=F,i.push(F)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,o)}}]);
//# sourceMappingURL=788891.12fc38ff.chunk.js.map