"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[244245],{244245:(t,n,o)=>{o.r(n),o.d(n,{fontFamily:()=>f,getInfo:()=>a,loadFont:()=>i});var e=o(662166),s={},a=()=>({fontFamily:"Suranna",importName:"Suranna",version:"v13",url:"https://fonts.googleapis.com/css2?family=Suranna:ital,wght@0,400",unicodeRanges:{telugu:"U+0951-0952, U+0964-0965, U+0C00-0C7F, U+1CDA, U+1CF2, U+200C-200D, U+25CC",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{telugu:"https://fonts.gstatic.com/s/suranna/v13/gokuH6ztGkFjWe58hA9TTlKm.woff2",latin:"https://fonts.gstatic.com/s/suranna/v13/gokuH6ztGkFjWe58hBNTTg.woff2"}}}}),f="Suranna",i=(t,n)=>((t,n,o)=>{const a=[],f=n?[n]:Object.keys(t.fonts);for(const i of f){if("undefined"===typeof FontFace)continue;if(!t.fonts[i])throw new Error(`The font ${t.fontFamily} does not have a style ${i}`);const n=o?.weights??Object.keys(t.fonts[i]);for(const f of n){if(!t.fonts[i][f])throw new Error(`The font ${t.fontFamily} does not  have a weight ${f} in style ${i}`);const n=o?.subsets??Object.keys(t.fonts[i][f]);for(const r of n){let n=t.fonts[i]?.[f]?.[r];if(!n)throw new Error(`weight: ${f} subset: ${r} is not available for '${t.fontFamily}'`);let l=`${t.fontFamily}-${i}-${f}-${r}`;const u=s[l];if(u){a.push(u);continue}const c=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:i,weight:f,subset:r})}`),h=new FontFace(t.fontFamily,`url(${n}) format('woff2')`,{weight:f,style:i,unicodeRange:t.unicodeRanges[r]}),F=h.load().then((()=>{(o?.document??document).fonts.add(h),(0,e._8)(c)})).catch((t=>{throw s[l]=void 0,t}));s[l]=F,a.push(F)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(a).then((()=>{}))}})(a(),t,n)}}]);
//# sourceMappingURL=244245.c0f9df33.chunk.js.map