"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[289498],{289498:(t,o,n)=>{n.r(o),n.d(o,{fontFamily:()=>f,getInfo:()=>i,loadFont:()=>a});var e=n(662166),s={},i=()=>({fontFamily:"Risque",importName:"Risque",version:"v22",url:"https://fonts.googleapis.com/css2?family=Risque:ital,wght@0,400",unicodeRanges:{"latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{"latin-ext":"https://fonts.gstatic.com/s/risque/v22/VdGfAZUfHosahXxYAEwUNJ8.woff2",latin:"https://fonts.gstatic.com/s/risque/v22/VdGfAZUfHosahXxYDkwU.woff2"}}}}),f="Risque",a=(t,o)=>((t,o,n)=>{const i=[],f=o?[o]:Object.keys(t.fonts);for(const a of f){if("undefined"===typeof FontFace)continue;if(!t.fonts[a])throw new Error(`The font ${t.fontFamily} does not have a style ${a}`);const o=n?.weights??Object.keys(t.fonts[a]);for(const f of o){if(!t.fonts[a][f])throw new Error(`The font ${t.fontFamily} does not  have a weight ${f} in style ${a}`);const o=n?.subsets??Object.keys(t.fonts[a][f]);for(const U of o){let o=t.fonts[a]?.[f]?.[U];if(!o)throw new Error(`weight: ${f} subset: ${U} is not available for '${t.fontFamily}'`);let r=`${t.fontFamily}-${a}-${f}-${U}`;const l=s[r];if(l){i.push(l);continue}const c=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:a,weight:f,subset:U})}`),F=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:f,style:a,unicodeRange:t.unicodeRanges[U]}),h=F.load().then((()=>{(n?.document??document).fonts.add(F),(0,e._8)(c)})).catch((t=>{throw s[r]=void 0,t}));s[r]=h,i.push(h)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,o)}}]);
//# sourceMappingURL=289498.8cc83124.chunk.js.map