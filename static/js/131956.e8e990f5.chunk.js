"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[131956],{131956:(t,n,o)=>{o.r(n),o.d(n,{fontFamily:()=>f,getInfo:()=>i,loadFont:()=>a});var e=o(662166),s={},i=()=>({fontFamily:"Luckiest Guy",importName:"LuckiestGuy",version:"v22",url:"https://fonts.googleapis.com/css2?family=Luckiest+Guy:ital,wght@0,400",unicodeRanges:{latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{latin:"https://fonts.gstatic.com/s/luckiestguy/v22/_gP_1RrxsjcxVyin9l9n_j2hTd52.woff2"}}}}),f="Luckiest Guy",a=(t,n)=>((t,n,o)=>{const i=[],f=n?[n]:Object.keys(t.fonts);for(const a of f){if("undefined"===typeof FontFace)continue;if(!t.fonts[a])throw new Error(`The font ${t.fontFamily} does not have a style ${a}`);const n=o?.weights??Object.keys(t.fonts[a]);for(const f of n){if(!t.fonts[a][f])throw new Error(`The font ${t.fontFamily} does not  have a weight ${f} in style ${a}`);const n=o?.subsets??Object.keys(t.fonts[a][f]);for(const c of n){let n=t.fonts[a]?.[f]?.[c];if(!n)throw new Error(`weight: ${f} subset: ${c} is not available for '${t.fontFamily}'`);let l=`${t.fontFamily}-${a}-${f}-${c}`;const r=s[l];if(r){i.push(r);continue}const u=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:a,weight:f,subset:c})}`),h=new FontFace(t.fontFamily,`url(${n}) format('woff2')`,{weight:f,style:a,unicodeRange:t.unicodeRanges[c]}),y=h.load().then((()=>{(o?.document??document).fonts.add(h),(0,e._8)(u)})).catch((t=>{throw s[l]=void 0,t}));s[l]=y,i.push(y)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,n)}}]);
//# sourceMappingURL=131956.e8e990f5.chunk.js.map