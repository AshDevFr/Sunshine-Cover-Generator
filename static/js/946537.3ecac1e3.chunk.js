"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[946537],{946537:(n,t,e)=>{e.r(t),e.d(t,{fontFamily:()=>f,getInfo:()=>a,loadFont:()=>i});var o=e(662166),s={},a=()=>({fontFamily:"Benne",importName:"Benne",version:"v22",url:"https://fonts.googleapis.com/css2?family=Benne:ital,wght@0,400",unicodeRanges:{kannada:"U+0951-0952, U+0964-0965, U+0C80-0CF3, U+1CD0, U+1CD2, U+1CDA, U+1CF2, U+1CF4, U+200C-200D, U+20B9, U+25CC, U+A830-A835","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{kannada:"https://fonts.gstatic.com/s/benne/v22/L0xzDFAhn18E6WjsnN-aTA.woff2","latin-ext":"https://fonts.gstatic.com/s/benne/v22/L0xzDFAhn18E6Wj4nN-aTA.woff2",latin:"https://fonts.gstatic.com/s/benne/v22/L0xzDFAhn18E6Wj2nN8.woff2"}}}}),f="Benne",i=(n,t)=>((n,t,e)=>{const a=[],f=t?[t]:Object.keys(n.fonts);for(const i of f){if("undefined"===typeof FontFace)continue;if(!n.fonts[i])throw new Error(`The font ${n.fontFamily} does not have a style ${i}`);const t=e?.weights??Object.keys(n.fonts[i]);for(const f of t){if(!n.fonts[i][f])throw new Error(`The font ${n.fontFamily} does not  have a weight ${f} in style ${i}`);const t=e?.subsets??Object.keys(n.fonts[i][f]);for(const U of t){let t=n.fonts[i]?.[f]?.[U];if(!t)throw new Error(`weight: ${f} subset: ${U} is not available for '${n.fontFamily}'`);let F=`${n.fontFamily}-${i}-${f}-${U}`;const c=s[F];if(c){a.push(c);continue}const l=(0,o.IH)(`Fetching ${n.fontFamily} font ${JSON.stringify({style:i,weight:f,subset:U})}`),r=new FontFace(n.fontFamily,`url(${t}) format('woff2')`,{weight:f,style:i,unicodeRange:n.unicodeRanges[U]}),h=r.load().then((()=>{(e?.document??document).fonts.add(r),(0,o._8)(l)})).catch((n=>{throw s[F]=void 0,n}));s[F]=h,a.push(h)}}}return{fontFamily:n.fontFamily,fonts:n.fonts,unicodeRanges:n.unicodeRanges,waitUntilDone:()=>Promise.all(a).then((()=>{}))}})(a(),n,t)}}]);
//# sourceMappingURL=946537.3ecac1e3.chunk.js.map