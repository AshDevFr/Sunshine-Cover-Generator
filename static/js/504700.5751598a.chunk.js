"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[504700],{504700:(t,n,o)=>{o.r(n),o.d(n,{fontFamily:()=>f,getInfo:()=>a,loadFont:()=>i});var s=o(662166),e={},a=()=>({fontFamily:"Noto Sans Osmanya",importName:"NotoSansOsmanya",version:"v18",url:"https://fonts.googleapis.com/css2?family=Noto+Sans+Osmanya:ital,wght@0,400",unicodeRanges:{osmanya:"U+10480-104AF","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{osmanya:"https://fonts.gstatic.com/s/notosansosmanya/v18/8vIS7xs32H97qzQKnzfeWzUyUpOJmw60TY_9CQ.woff2","latin-ext":"https://fonts.gstatic.com/s/notosansosmanya/v18/8vIS7xs32H97qzQKnzfeWzUyUpOJmw6tTY_9CQ.woff2",latin:"https://fonts.gstatic.com/s/notosansosmanya/v18/8vIS7xs32H97qzQKnzfeWzUyUpOJmw6jTY8.woff2"}}}}),f="Noto Sans Osmanya",i=(t,n)=>((t,n,o)=>{const a=[],f=n?[n]:Object.keys(t.fonts);for(const i of f){if("undefined"===typeof FontFace)continue;if(!t.fonts[i])throw new Error(`The font ${t.fontFamily} does not have a style ${i}`);const n=o?.weights??Object.keys(t.fonts[i]);for(const f of n){if(!t.fonts[i][f])throw new Error(`The font ${t.fontFamily} does not  have a weight ${f} in style ${i}`);const n=o?.subsets??Object.keys(t.fonts[i][f]);for(const U of n){let n=t.fonts[i]?.[f]?.[U];if(!n)throw new Error(`weight: ${f} subset: ${U} is not available for '${t.fontFamily}'`);let c=`${t.fontFamily}-${i}-${f}-${U}`;const m=e[c];if(m){a.push(m);continue}const l=(0,s.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:i,weight:f,subset:U})}`),r=new FontFace(t.fontFamily,`url(${n}) format('woff2')`,{weight:f,style:i,unicodeRange:t.unicodeRanges[U]}),F=r.load().then((()=>{(o?.document??document).fonts.add(r),(0,s._8)(l)})).catch((t=>{throw e[c]=void 0,t}));e[c]=F,a.push(F)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(a).then((()=>{}))}})(a(),t,n)}}]);
//# sourceMappingURL=504700.5751598a.chunk.js.map