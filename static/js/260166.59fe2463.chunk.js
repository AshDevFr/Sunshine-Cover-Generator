"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[260166],{260166:(t,o,n)=>{n.r(o),n.d(o,{fontFamily:()=>a,getInfo:()=>i,loadFont:()=>f});var e=n(662166),s={},i=()=>({fontFamily:"Cagliostro",importName:"Cagliostro",version:"v21",url:"https://fonts.googleapis.com/css2?family=Cagliostro:ital,wght@0,400",unicodeRanges:{latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{latin:"https://fonts.gstatic.com/s/cagliostro/v21/ZgNWjP5HM73BV5amnX-TvGLOMg.woff2"}}}}),a="Cagliostro",f=(t,o)=>((t,o,n)=>{const i=[],a=o?[o]:Object.keys(t.fonts);for(const f of a){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const o=n?.weights??Object.keys(t.fonts[f]);for(const a of o){if(!t.fonts[f][a])throw new Error(`The font ${t.fontFamily} does not  have a weight ${a} in style ${f}`);const o=n?.subsets??Object.keys(t.fonts[f][a]);for(const r of o){let o=t.fonts[f]?.[a]?.[r];if(!o)throw new Error(`weight: ${a} subset: ${r} is not available for '${t.fontFamily}'`);let l=`${t.fontFamily}-${f}-${a}-${r}`;const c=s[l];if(c){i.push(c);continue}const g=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:a,subset:r})}`),h=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:a,style:f,unicodeRange:t.unicodeRanges[r]}),F=h.load().then((()=>{(n?.document??document).fonts.add(h),(0,e._8)(g)})).catch((t=>{throw s[l]=void 0,t}));s[l]=F,i.push(F)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,o)}}]);
//# sourceMappingURL=260166.59fe2463.chunk.js.map