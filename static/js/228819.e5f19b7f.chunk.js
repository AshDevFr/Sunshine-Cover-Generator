"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[228819],{228819:(t,n,o)=>{o.r(n),o.d(n,{fontFamily:()=>f,getInfo:()=>i,loadFont:()=>a});var e=o(662166),s={},i=()=>({fontFamily:"Sniglet",importName:"Sniglet",version:"v17",url:"https://fonts.googleapis.com/css2?family=Sniglet:ital,wght@0,400;0,800",unicodeRanges:{"latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{"latin-ext":"https://fonts.gstatic.com/s/sniglet/v17/cIf9MaFLtkE3UjaJ9CChYVkH.woff2",latin:"https://fonts.gstatic.com/s/sniglet/v17/cIf9MaFLtkE3UjaJ9C6hYQ.woff2"},800:{"latin-ext":"https://fonts.gstatic.com/s/sniglet/v17/cIf4MaFLtkE3UjaJ_ImHdGgmnbJk.woff2",latin:"https://fonts.gstatic.com/s/sniglet/v17/cIf4MaFLtkE3UjaJ_ImHdGYmnQ.woff2"}}}}),f="Sniglet",a=(t,n)=>((t,n,o)=>{const i=[],f=n?[n]:Object.keys(t.fonts);for(const a of f){if("undefined"===typeof FontFace)continue;if(!t.fonts[a])throw new Error(`The font ${t.fontFamily} does not have a style ${a}`);const n=o?.weights??Object.keys(t.fonts[a]);for(const f of n){if(!t.fonts[a][f])throw new Error(`The font ${t.fontFamily} does not  have a weight ${f} in style ${a}`);const n=o?.subsets??Object.keys(t.fonts[a][f]);for(const l of n){let n=t.fonts[a]?.[f]?.[l];if(!n)throw new Error(`weight: ${f} subset: ${l} is not available for '${t.fontFamily}'`);let c=`${t.fontFamily}-${a}-${f}-${l}`;const F=s[c];if(F){i.push(F);continue}const U=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:a,weight:f,subset:l})}`),r=new FontFace(t.fontFamily,`url(${n}) format('woff2')`,{weight:f,style:a,unicodeRange:t.unicodeRanges[l]}),g=r.load().then((()=>{(o?.document??document).fonts.add(r),(0,e._8)(U)})).catch((t=>{throw s[c]=void 0,t}));s[c]=g,i.push(g)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,n)}}]);
//# sourceMappingURL=228819.e5f19b7f.chunk.js.map