"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[587228],{587228:(t,o,n)=>{n.r(o),n.d(o,{fontFamily:()=>f,getInfo:()=>a,loadFont:()=>i});var e=n(662166),s={},a=()=>({fontFamily:"Flamenco",importName:"Flamenco",version:"v18",url:"https://fonts.googleapis.com/css2?family=Flamenco:ital,wght@0,300;0,400",unicodeRanges:{latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{300:{latin:"https://fonts.gstatic.com/s/flamenco/v18/neIPzCehqYguo67ssZ0qNLk1cJA.woff2"},400:{latin:"https://fonts.gstatic.com/s/flamenco/v18/neIIzCehqYguo67ssZWBFqw.woff2"}}}}),f="Flamenco",i=(t,o)=>((t,o,n)=>{const a=[],f=o?[o]:Object.keys(t.fonts);for(const i of f){if("undefined"===typeof FontFace)continue;if(!t.fonts[i])throw new Error(`The font ${t.fontFamily} does not have a style ${i}`);const o=n?.weights??Object.keys(t.fonts[i]);for(const f of o){if(!t.fonts[i][f])throw new Error(`The font ${t.fontFamily} does not  have a weight ${f} in style ${i}`);const o=n?.subsets??Object.keys(t.fonts[i][f]);for(const c of o){let o=t.fonts[i]?.[f]?.[c];if(!o)throw new Error(`weight: ${f} subset: ${c} is not available for '${t.fontFamily}'`);let l=`${t.fontFamily}-${i}-${f}-${c}`;const r=s[l];if(r){a.push(r);continue}const h=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:i,weight:f,subset:c})}`),F=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:f,style:i,unicodeRange:t.unicodeRanges[c]}),m=F.load().then((()=>{(n?.document??document).fonts.add(F),(0,e._8)(h)})).catch((t=>{throw s[l]=void 0,t}));s[l]=m,a.push(m)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(a).then((()=>{}))}})(a(),t,o)}}]);
//# sourceMappingURL=587228.cb0e93a4.chunk.js.map