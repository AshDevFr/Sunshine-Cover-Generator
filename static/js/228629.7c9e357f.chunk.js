"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[228629],{228629:(o,n,t)=>{t.r(n),t.d(n,{fontFamily:()=>f,getInfo:()=>i,loadFont:()=>a});var e=t(662166),s={},i=()=>({fontFamily:"Bonbon",importName:"Bonbon",version:"v30",url:"https://fonts.googleapis.com/css2?family=Bonbon:ital,wght@0,400",unicodeRanges:{latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{latin:"https://fonts.gstatic.com/s/bonbon/v30/0FlVVPeVlFec4eePdzsB.woff2"}}}}),f="Bonbon",a=(o,n)=>((o,n,t)=>{const i=[],f=n?[n]:Object.keys(o.fonts);for(const a of f){if("undefined"===typeof FontFace)continue;if(!o.fonts[a])throw new Error(`The font ${o.fontFamily} does not have a style ${a}`);const n=t?.weights??Object.keys(o.fonts[a]);for(const f of n){if(!o.fonts[a][f])throw new Error(`The font ${o.fontFamily} does not  have a weight ${f} in style ${a}`);const n=t?.subsets??Object.keys(o.fonts[a][f]);for(const l of n){let n=o.fonts[a]?.[f]?.[l];if(!n)throw new Error(`weight: ${f} subset: ${l} is not available for '${o.fontFamily}'`);let r=`${o.fontFamily}-${a}-${f}-${l}`;const c=s[r];if(c){i.push(c);continue}const h=(0,e.IH)(`Fetching ${o.fontFamily} font ${JSON.stringify({style:a,weight:f,subset:l})}`),F=new FontFace(o.fontFamily,`url(${n}) format('woff2')`,{weight:f,style:a,unicodeRange:o.unicodeRanges[l]}),u=F.load().then((()=>{(t?.document??document).fonts.add(F),(0,e._8)(h)})).catch((o=>{throw s[r]=void 0,o}));s[r]=u,i.push(u)}}}return{fontFamily:o.fontFamily,fonts:o.fonts,unicodeRanges:o.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),o,n)}}]);
//# sourceMappingURL=228629.7c9e357f.chunk.js.map