"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[709616],{709616:(t,o,n)=>{n.r(o),n.d(o,{fontFamily:()=>f,getInfo:()=>i,loadFont:()=>a});var e=n(662166),s={},i=()=>({fontFamily:"Molle",importName:"Molle",version:"v23",url:"https://fonts.googleapis.com/css2?family=Molle:ital,wght@1,400",unicodeRanges:{"latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{italic:{400:{"latin-ext":"https://fonts.gstatic.com/s/molle/v23/E21n_dL5hOXFhWEsbzEsVhdR.woff2",latin:"https://fonts.gstatic.com/s/molle/v23/E21n_dL5hOXFhWEsbz8sVg.woff2"}}}}),f="Molle",a=(t,o)=>((t,o,n)=>{const i=[],f=o?[o]:Object.keys(t.fonts);for(const a of f){if("undefined"===typeof FontFace)continue;if(!t.fonts[a])throw new Error(`The font ${t.fontFamily} does not have a style ${a}`);const o=n?.weights??Object.keys(t.fonts[a]);for(const f of o){if(!t.fonts[a][f])throw new Error(`The font ${t.fontFamily} does not  have a weight ${f} in style ${a}`);const o=n?.subsets??Object.keys(t.fonts[a][f]);for(const l of o){let o=t.fonts[a]?.[f]?.[l];if(!o)throw new Error(`weight: ${f} subset: ${l} is not available for '${t.fontFamily}'`);let c=`${t.fontFamily}-${a}-${f}-${l}`;const F=s[c];if(F){i.push(F);continue}const h=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:a,weight:f,subset:l})}`),r=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:f,style:a,unicodeRange:t.unicodeRanges[l]}),U=r.load().then((()=>{(n?.document??document).fonts.add(r),(0,e._8)(h)})).catch((t=>{throw s[c]=void 0,t}));s[c]=U,i.push(U)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,o)}}]);
//# sourceMappingURL=709616.013cc4b4.chunk.js.map