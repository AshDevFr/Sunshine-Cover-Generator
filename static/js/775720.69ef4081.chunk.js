"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[775720],{775720:(t,e,o)=>{o.r(e),o.d(e,{fontFamily:()=>f,getInfo:()=>a,loadFont:()=>i});var n=o(662166),s={},a=()=>({fontFamily:"Average",importName:"Average",version:"v18",url:"https://fonts.googleapis.com/css2?family=Average:ital,wght@0,400",unicodeRanges:{"latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{"latin-ext":"https://fonts.gstatic.com/s/average/v18/fC1hPYBHe23MxA7rEet6VFyt.woff2",latin:"https://fonts.gstatic.com/s/average/v18/fC1hPYBHe23MxA7rEeV6VA.woff2"}}}}),f="Average",i=(t,e)=>((t,e,o)=>{const a=[],f=e?[e]:Object.keys(t.fonts);for(const i of f){if("undefined"===typeof FontFace)continue;if(!t.fonts[i])throw new Error(`The font ${t.fontFamily} does not have a style ${i}`);const e=o?.weights??Object.keys(t.fonts[i]);for(const f of e){if(!t.fonts[i][f])throw new Error(`The font ${t.fontFamily} does not  have a weight ${f} in style ${i}`);const e=o?.subsets??Object.keys(t.fonts[i][f]);for(const r of e){let e=t.fonts[i]?.[f]?.[r];if(!e)throw new Error(`weight: ${f} subset: ${r} is not available for '${t.fontFamily}'`);let l=`${t.fontFamily}-${i}-${f}-${r}`;const c=s[l];if(c){a.push(c);continue}const F=(0,n.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:i,weight:f,subset:r})}`),U=new FontFace(t.fontFamily,`url(${e}) format('woff2')`,{weight:f,style:i,unicodeRange:t.unicodeRanges[r]}),h=U.load().then((()=>{(o?.document??document).fonts.add(U),(0,n._8)(F)})).catch((t=>{throw s[l]=void 0,t}));s[l]=h,a.push(h)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(a).then((()=>{}))}})(a(),t,e)}}]);
//# sourceMappingURL=775720.69ef4081.chunk.js.map