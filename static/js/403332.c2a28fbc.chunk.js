"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[403332],{403332:(t,n,o)=>{o.r(n),o.d(n,{fontFamily:()=>a,getInfo:()=>i,loadFont:()=>f});var e=o(662166),s={},i=()=>({fontFamily:"Jim Nightshade",importName:"JimNightshade",version:"v20",url:"https://fonts.googleapis.com/css2?family=Jim+Nightshade:ital,wght@0,400",unicodeRanges:{"latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{"latin-ext":"https://fonts.gstatic.com/s/jimnightshade/v20/PlIkFlu9Pb08Q8HLM1PxmB0g-NSxXXu6aA.woff2",latin:"https://fonts.gstatic.com/s/jimnightshade/v20/PlIkFlu9Pb08Q8HLM1PxmB0g-NS_XXs.woff2"}}}}),a="Jim Nightshade",f=(t,n)=>((t,n,o)=>{const i=[],a=n?[n]:Object.keys(t.fonts);for(const f of a){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const n=o?.weights??Object.keys(t.fonts[f]);for(const a of n){if(!t.fonts[f][a])throw new Error(`The font ${t.fontFamily} does not  have a weight ${a} in style ${f}`);const n=o?.subsets??Object.keys(t.fonts[f][a]);for(const h of n){let n=t.fonts[f]?.[a]?.[h];if(!n)throw new Error(`weight: ${a} subset: ${h} is not available for '${t.fontFamily}'`);let l=`${t.fontFamily}-${f}-${a}-${h}`;const F=s[l];if(F){i.push(F);continue}const c=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:a,subset:h})}`),r=new FontFace(t.fontFamily,`url(${n}) format('woff2')`,{weight:a,style:f,unicodeRange:t.unicodeRanges[h]}),U=r.load().then((()=>{(o?.document??document).fonts.add(r),(0,e._8)(c)})).catch((t=>{throw s[l]=void 0,t}));s[l]=U,i.push(U)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,n)}}]);
//# sourceMappingURL=403332.c2a28fbc.chunk.js.map