"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[952458],{952458:(t,o,n)=>{n.r(o),n.d(o,{fontFamily:()=>a,getInfo:()=>f,loadFont:()=>i});var e=n(662166),s={},f=()=>({fontFamily:"Kotta One",importName:"KottaOne",version:"v20",url:"https://fonts.googleapis.com/css2?family=Kotta+One:ital,wght@0,400",unicodeRanges:{"latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{"latin-ext":"https://fonts.gstatic.com/s/kottaone/v20/S6u_w41LXzPc_jlfNWq_FQft1dw.woff2",latin:"https://fonts.gstatic.com/s/kottaone/v20/S6u_w41LXzPc_jlfNWq_Gwft.woff2"}}}}),a="Kotta One",i=(t,o)=>((t,o,n)=>{const f=[],a=o?[o]:Object.keys(t.fonts);for(const i of a){if("undefined"===typeof FontFace)continue;if(!t.fonts[i])throw new Error(`The font ${t.fontFamily} does not have a style ${i}`);const o=n?.weights??Object.keys(t.fonts[i]);for(const a of o){if(!t.fonts[i][a])throw new Error(`The font ${t.fontFamily} does not  have a weight ${a} in style ${i}`);const o=n?.subsets??Object.keys(t.fonts[i][a]);for(const l of o){let o=t.fonts[i]?.[a]?.[l];if(!o)throw new Error(`weight: ${a} subset: ${l} is not available for '${t.fontFamily}'`);let c=`${t.fontFamily}-${i}-${a}-${l}`;const r=s[c];if(r){f.push(r);continue}const F=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:i,weight:a,subset:l})}`),U=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:a,style:i,unicodeRange:t.unicodeRanges[l]}),h=U.load().then((()=>{(n?.document??document).fonts.add(U),(0,e._8)(F)})).catch((t=>{throw s[c]=void 0,t}));s[c]=h,f.push(h)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(f).then((()=>{}))}})(f(),t,o)}}]);
//# sourceMappingURL=952458.286669e5.chunk.js.map