"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[314301],{314301:(t,e,o)=>{o.r(e),o.d(e,{fontFamily:()=>f,getInfo:()=>i,loadFont:()=>a});var n=o(662166),s={},i=()=>({fontFamily:"Festive",importName:"Festive",version:"v9",url:"https://fonts.googleapis.com/css2?family=Festive:ital,wght@0,400",unicodeRanges:{vietnamese:"U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{vietnamese:"https://fonts.gstatic.com/s/festive/v9/cY9Ffj6KX1xcoDWhJt_qyuHT.woff2","latin-ext":"https://fonts.gstatic.com/s/festive/v9/cY9Ffj6KX1xcoDWhJt7qyuHT.woff2",latin:"https://fonts.gstatic.com/s/festive/v9/cY9Ffj6KX1xcoDWhJtDqyg.woff2"}}}}),f="Festive",a=(t,e)=>((t,e,o)=>{const i=[],f=e?[e]:Object.keys(t.fonts);for(const a of f){if("undefined"===typeof FontFace)continue;if(!t.fonts[a])throw new Error(`The font ${t.fontFamily} does not have a style ${a}`);const e=o?.weights??Object.keys(t.fonts[a]);for(const f of e){if(!t.fonts[a][f])throw new Error(`The font ${t.fontFamily} does not  have a weight ${f} in style ${a}`);const e=o?.subsets??Object.keys(t.fonts[a][f]);for(const U of e){let e=t.fonts[a]?.[f]?.[U];if(!e)throw new Error(`weight: ${f} subset: ${U} is not available for '${t.fontFamily}'`);let c=`${t.fontFamily}-${a}-${f}-${U}`;const F=s[c];if(F){i.push(F);continue}const l=(0,n.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:a,weight:f,subset:U})}`),r=new FontFace(t.fontFamily,`url(${e}) format('woff2')`,{weight:f,style:a,unicodeRange:t.unicodeRanges[U]}),h=r.load().then((()=>{(o?.document??document).fonts.add(r),(0,n._8)(l)})).catch((t=>{throw s[c]=void 0,t}));s[c]=h,i.push(h)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,e)}}]);
//# sourceMappingURL=314301.b0cca24b.chunk.js.map