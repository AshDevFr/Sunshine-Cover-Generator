"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[668443],{668443:(n,t,o)=>{o.r(t),o.d(t,{fontFamily:()=>f,getInfo:()=>i,loadFont:()=>a});var e=o(662166),s={},i=()=>({fontFamily:"Henny Penny",importName:"HennyPenny",version:"v17",url:"https://fonts.googleapis.com/css2?family=Henny+Penny:ital,wght@0,400",unicodeRanges:{latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{latin:"https://fonts.gstatic.com/s/hennypenny/v17/wXKvE3UZookzsxz_kjGSfPQtvXI.woff2"}}}}),f="Henny Penny",a=(n,t)=>((n,t,o)=>{const i=[],f=t?[t]:Object.keys(n.fonts);for(const a of f){if("undefined"===typeof FontFace)continue;if(!n.fonts[a])throw new Error(`The font ${n.fontFamily} does not have a style ${a}`);const t=o?.weights??Object.keys(n.fonts[a]);for(const f of t){if(!n.fonts[a][f])throw new Error(`The font ${n.fontFamily} does not  have a weight ${f} in style ${a}`);const t=o?.subsets??Object.keys(n.fonts[a][f]);for(const r of t){let t=n.fonts[a]?.[f]?.[r];if(!t)throw new Error(`weight: ${f} subset: ${r} is not available for '${n.fontFamily}'`);let l=`${n.fontFamily}-${a}-${f}-${r}`;const c=s[l];if(c){i.push(c);continue}const y=(0,e.IH)(`Fetching ${n.fontFamily} font ${JSON.stringify({style:a,weight:f,subset:r})}`),h=new FontFace(n.fontFamily,`url(${t}) format('woff2')`,{weight:f,style:a,unicodeRange:n.unicodeRanges[r]}),F=h.load().then((()=>{(o?.document??document).fonts.add(h),(0,e._8)(y)})).catch((n=>{throw s[l]=void 0,n}));s[l]=F,i.push(F)}}}return{fontFamily:n.fontFamily,fonts:n.fonts,unicodeRanges:n.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),n,t)}}]);
//# sourceMappingURL=668443.bcf591af.chunk.js.map