"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[899453],{899453:(t,o,n)=>{n.r(o),n.d(o,{fontFamily:()=>i,getInfo:()=>a,loadFont:()=>f});var e=n(662166),s={},a=()=>({fontFamily:"Armata",importName:"Armata",version:"v20",url:"https://fonts.googleapis.com/css2?family=Armata:ital,wght@0,400",unicodeRanges:{"latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{"latin-ext":"https://fonts.gstatic.com/s/armata/v20/gokvH63_HV5jQ-ENnTR2c2s.woff2",latin:"https://fonts.gstatic.com/s/armata/v20/gokvH63_HV5jQ-ENkzR2.woff2"}}}}),i="Armata",f=(t,o)=>((t,o,n)=>{const a=[],i=o?[o]:Object.keys(t.fonts);for(const f of i){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const o=n?.weights??Object.keys(t.fonts[f]);for(const i of o){if(!t.fonts[f][i])throw new Error(`The font ${t.fontFamily} does not  have a weight ${i} in style ${f}`);const o=n?.subsets??Object.keys(t.fonts[f][i]);for(const r of o){let o=t.fonts[f]?.[i]?.[r];if(!o)throw new Error(`weight: ${i} subset: ${r} is not available for '${t.fontFamily}'`);let c=`${t.fontFamily}-${f}-${i}-${r}`;const l=s[c];if(l){a.push(l);continue}const F=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:i,subset:r})}`),U=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:i,style:f,unicodeRange:t.unicodeRanges[r]}),m=U.load().then((()=>{(n?.document??document).fonts.add(U),(0,e._8)(F)})).catch((t=>{throw s[c]=void 0,t}));s[c]=m,a.push(m)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(a).then((()=>{}))}})(a(),t,o)}}]);
//# sourceMappingURL=899453.57e65ec4.chunk.js.map