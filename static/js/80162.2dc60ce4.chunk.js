"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[80162],{80162:(t,n,o)=>{o.r(n),o.d(n,{fontFamily:()=>f,getInfo:()=>e,loadFont:()=>i});var a=o(662166),s={},e=()=>({fontFamily:"Sumana",importName:"Sumana",version:"v10",url:"https://fonts.googleapis.com/css2?family=Sumana:ital,wght@0,400;0,700",unicodeRanges:{devanagari:"U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{devanagari:"https://fonts.gstatic.com/s/sumana/v10/4UaDrE5TqRBjGj-29hLj36w.woff2","latin-ext":"https://fonts.gstatic.com/s/sumana/v10/4UaDrE5TqRBjGj-2-RLj36w.woff2",latin:"https://fonts.gstatic.com/s/sumana/v10/4UaDrE5TqRBjGj-29xLj.woff2"},700:{devanagari:"https://fonts.gstatic.com/s/sumana/v10/4UaArE5TqRBjGj--TDf24Y3M2po.woff2","latin-ext":"https://fonts.gstatic.com/s/sumana/v10/4UaArE5TqRBjGj--TDf27o3M2po.woff2",latin:"https://fonts.gstatic.com/s/sumana/v10/4UaArE5TqRBjGj--TDf24I3M.woff2"}}}}),f="Sumana",i=(t,n)=>((t,n,o)=>{const e=[],f=n?[n]:Object.keys(t.fonts);for(const i of f){if("undefined"===typeof FontFace)continue;if(!t.fonts[i])throw new Error(`The font ${t.fontFamily} does not have a style ${i}`);const n=o?.weights??Object.keys(t.fonts[i]);for(const f of n){if(!t.fonts[i][f])throw new Error(`The font ${t.fontFamily} does not  have a weight ${f} in style ${i}`);const n=o?.subsets??Object.keys(t.fonts[i][f]);for(const U of n){let n=t.fonts[i]?.[f]?.[U];if(!n)throw new Error(`weight: ${f} subset: ${U} is not available for '${t.fontFamily}'`);let r=`${t.fontFamily}-${i}-${f}-${U}`;const c=s[r];if(c){e.push(c);continue}const F=(0,a.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:i,weight:f,subset:U})}`),l=new FontFace(t.fontFamily,`url(${n}) format('woff2')`,{weight:f,style:i,unicodeRange:t.unicodeRanges[U]}),m=l.load().then((()=>{(o?.document??document).fonts.add(l),(0,a._8)(F)})).catch((t=>{throw s[r]=void 0,t}));s[r]=m,e.push(m)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(e).then((()=>{}))}})(e(),t,n)}}]);
//# sourceMappingURL=80162.2dc60ce4.chunk.js.map