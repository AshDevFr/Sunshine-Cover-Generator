"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[301787],{301787:(t,o,n)=>{n.r(o),n.d(o,{fontFamily:()=>a,getInfo:()=>i,loadFont:()=>f});var e=n(662166),s={},i=()=>({fontFamily:"Michroma",importName:"Michroma",version:"v19",url:"https://fonts.googleapis.com/css2?family=Michroma:ital,wght@0,400",unicodeRanges:{"latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{"latin-ext":"https://fonts.gstatic.com/s/michroma/v19/PN_zRfy9qWD8fEagAPgzpTnr_w.woff2",latin:"https://fonts.gstatic.com/s/michroma/v19/PN_zRfy9qWD8fEagAPg9pTk.woff2"}}}}),a="Michroma",f=(t,o)=>((t,o,n)=>{const i=[],a=o?[o]:Object.keys(t.fonts);for(const f of a){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const o=n?.weights??Object.keys(t.fonts[f]);for(const a of o){if(!t.fonts[f][a])throw new Error(`The font ${t.fontFamily} does not  have a weight ${a} in style ${f}`);const o=n?.subsets??Object.keys(t.fonts[f][a]);for(const r of o){let o=t.fonts[f]?.[a]?.[r];if(!o)throw new Error(`weight: ${a} subset: ${r} is not available for '${t.fontFamily}'`);let c=`${t.fontFamily}-${f}-${a}-${r}`;const l=s[c];if(l){i.push(l);continue}const h=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:a,subset:r})}`),F=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:a,style:f,unicodeRange:t.unicodeRanges[r]}),U=F.load().then((()=>{(n?.document??document).fonts.add(F),(0,e._8)(h)})).catch((t=>{throw s[c]=void 0,t}));s[c]=U,i.push(U)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,o)}}]);
//# sourceMappingURL=301787.055ef045.chunk.js.map