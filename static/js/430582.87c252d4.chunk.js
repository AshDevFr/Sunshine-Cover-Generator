"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[430582],{430582:(t,n,o)=>{o.r(n),o.d(n,{fontFamily:()=>i,getInfo:()=>a,loadFont:()=>f});var e=o(662166),s={},a=()=>({fontFamily:"Timmana",importName:"Timmana",version:"v12",url:"https://fonts.googleapis.com/css2?family=Timmana:ital,wght@0,400",unicodeRanges:{telugu:"U+0951-0952, U+0964-0965, U+0C00-0C7F, U+1CDA, U+1CF2, U+200C-200D, U+25CC",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{telugu:"https://fonts.gstatic.com/s/timmana/v12/6xKvdShfL9yK-rvpOnDRKUwJ.woff2",latin:"https://fonts.gstatic.com/s/timmana/v12/6xKvdShfL9yK-rvpOmzRKQ.woff2"}}}}),i="Timmana",f=(t,n)=>((t,n,o)=>{const a=[],i=n?[n]:Object.keys(t.fonts);for(const f of i){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const n=o?.weights??Object.keys(t.fonts[f]);for(const i of n){if(!t.fonts[f][i])throw new Error(`The font ${t.fontFamily} does not  have a weight ${i} in style ${f}`);const n=o?.subsets??Object.keys(t.fonts[f][i]);for(const m of n){let n=t.fonts[f]?.[i]?.[m];if(!n)throw new Error(`weight: ${i} subset: ${m} is not available for '${t.fontFamily}'`);let r=`${t.fontFamily}-${f}-${i}-${m}`;const l=s[r];if(l){a.push(l);continue}const c=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:i,subset:m})}`),h=new FontFace(t.fontFamily,`url(${n}) format('woff2')`,{weight:i,style:f,unicodeRange:t.unicodeRanges[m]}),U=h.load().then((()=>{(o?.document??document).fonts.add(h),(0,e._8)(c)})).catch((t=>{throw s[r]=void 0,t}));s[r]=U,a.push(U)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(a).then((()=>{}))}})(a(),t,n)}}]);
//# sourceMappingURL=430582.87c252d4.chunk.js.map