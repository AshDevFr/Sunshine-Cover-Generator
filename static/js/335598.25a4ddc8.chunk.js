"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[335598],{335598:(t,o,n)=>{n.r(o),n.d(o,{fontFamily:()=>f,getInfo:()=>s,loadFont:()=>i});var e=n(662166),a={},s=()=>({fontFamily:"Ramaraja",importName:"Ramaraja",version:"v15",url:"https://fonts.googleapis.com/css2?family=Ramaraja:ital,wght@0,400",unicodeRanges:{telugu:"U+0951-0952, U+0964-0965, U+0C00-0C7F, U+1CDA, U+1CF2, U+200C-200D, U+25CC",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{telugu:"https://fonts.gstatic.com/s/ramaraja/v15/SlGTmQearpYAYG1CACI_oHFKaQ.woff2",latin:"https://fonts.gstatic.com/s/ramaraja/v15/SlGTmQearpYAYG1CACIjoHE.woff2"}}}}),f="Ramaraja",i=(t,o)=>((t,o,n)=>{const s=[],f=o?[o]:Object.keys(t.fonts);for(const i of f){if("undefined"===typeof FontFace)continue;if(!t.fonts[i])throw new Error(`The font ${t.fontFamily} does not have a style ${i}`);const o=n?.weights??Object.keys(t.fonts[i]);for(const f of o){if(!t.fonts[i][f])throw new Error(`The font ${t.fontFamily} does not  have a weight ${f} in style ${i}`);const o=n?.subsets??Object.keys(t.fonts[i][f]);for(const r of o){let o=t.fonts[i]?.[f]?.[r];if(!o)throw new Error(`weight: ${f} subset: ${r} is not available for '${t.fontFamily}'`);let l=`${t.fontFamily}-${i}-${f}-${r}`;const c=a[l];if(c){s.push(c);continue}const m=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:i,weight:f,subset:r})}`),h=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:f,style:i,unicodeRange:t.unicodeRanges[r]}),u=h.load().then((()=>{(n?.document??document).fonts.add(h),(0,e._8)(m)})).catch((t=>{throw a[l]=void 0,t}));a[l]=u,s.push(u)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(s).then((()=>{}))}})(s(),t,o)}}]);
//# sourceMappingURL=335598.25a4ddc8.chunk.js.map