"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[19663],{19663:(t,e,o)=>{o.r(e),o.d(e,{fontFamily:()=>i,getInfo:()=>a,loadFont:()=>f});var n=o(662166),s={},a=()=>({fontFamily:"Bebas Neue",importName:"BebasNeue",version:"v14",url:"https://fonts.googleapis.com/css2?family=Bebas+Neue:ital,wght@0,400",unicodeRanges:{"latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{"latin-ext":"https://fonts.gstatic.com/s/bebasneue/v14/JTUSjIg69CK48gW7PXoo9Wdhyzbi.woff2",latin:"https://fonts.gstatic.com/s/bebasneue/v14/JTUSjIg69CK48gW7PXoo9Wlhyw.woff2"}}}}),i="Bebas Neue",f=(t,e)=>((t,e,o)=>{const a=[],i=e?[e]:Object.keys(t.fonts);for(const f of i){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const e=o?.weights??Object.keys(t.fonts[f]);for(const i of e){if(!t.fonts[f][i])throw new Error(`The font ${t.fontFamily} does not  have a weight ${i} in style ${f}`);const e=o?.subsets??Object.keys(t.fonts[f][i]);for(const l of e){let e=t.fonts[f]?.[i]?.[l];if(!e)throw new Error(`weight: ${i} subset: ${l} is not available for '${t.fontFamily}'`);let U=`${t.fontFamily}-${f}-${i}-${l}`;const c=s[U];if(c){a.push(c);continue}const r=(0,n.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:i,subset:l})}`),F=new FontFace(t.fontFamily,`url(${e}) format('woff2')`,{weight:i,style:f,unicodeRange:t.unicodeRanges[l]}),h=F.load().then((()=>{(o?.document??document).fonts.add(F),(0,n._8)(r)})).catch((t=>{throw s[U]=void 0,t}));s[U]=h,a.push(h)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(a).then((()=>{}))}})(a(),t,e)}}]);
//# sourceMappingURL=19663.b5012fce.chunk.js.map