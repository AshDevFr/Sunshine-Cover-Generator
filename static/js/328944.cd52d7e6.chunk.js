"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[328944],{328944:(t,n,e)=>{e.r(n),e.d(n,{fontFamily:()=>a,getInfo:()=>s,loadFont:()=>f});var o=e(662166),i={},s=()=>({fontFamily:"Meera Inimai",importName:"MeeraInimai",version:"v12",url:"https://fonts.googleapis.com/css2?family=Meera+Inimai:ital,wght@0,400",unicodeRanges:{tamil:"U+0964-0965, U+0B82-0BFA, U+200C-200D, U+20B9, U+25CC",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{tamil:"https://fonts.gstatic.com/s/meerainimai/v12/845fNMM5EIqOW5MPuvO3ILeZ7mLCZes.woff2",latin:"https://fonts.gstatic.com/s/meerainimai/v12/845fNMM5EIqOW5MPuvO3ILeZ-GLC.woff2"}}}}),a="Meera Inimai",f=(t,n)=>((t,n,e)=>{const s=[],a=n?[n]:Object.keys(t.fonts);for(const f of a){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const n=e?.weights??Object.keys(t.fonts[f]);for(const a of n){if(!t.fonts[f][a])throw new Error(`The font ${t.fontFamily} does not  have a weight ${a} in style ${f}`);const n=e?.subsets??Object.keys(t.fonts[f][a]);for(const r of n){let n=t.fonts[f]?.[a]?.[r];if(!n)throw new Error(`weight: ${a} subset: ${r} is not available for '${t.fontFamily}'`);let l=`${t.fontFamily}-${f}-${a}-${r}`;const c=i[l];if(c){s.push(c);continue}const m=(0,o.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:a,subset:r})}`),h=new FontFace(t.fontFamily,`url(${n}) format('woff2')`,{weight:a,style:f,unicodeRange:t.unicodeRanges[r]}),u=h.load().then((()=>{(e?.document??document).fonts.add(h),(0,o._8)(m)})).catch((t=>{throw i[l]=void 0,t}));i[l]=u,s.push(u)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(s).then((()=>{}))}})(s(),t,n)}}]);
//# sourceMappingURL=328944.cd52d7e6.chunk.js.map