"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[171075],{171075:(t,n,o)=>{o.r(n),o.d(n,{fontFamily:()=>a,getInfo:()=>i,loadFont:()=>f});var s=o(662166),e={},i=()=>({fontFamily:"Noto Sans Runic",importName:"NotoSansRunic",version:"v17",url:"https://fonts.googleapis.com/css2?family=Noto+Sans+Runic:ital,wght@0,400",unicodeRanges:{runic:"U+16A0-16F8","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{runic:"https://fonts.gstatic.com/s/notosansrunic/v17/H4c_BXWPl9DZ0Xe_nHUaus7W68WmWBBuLtg.woff2","latin-ext":"https://fonts.gstatic.com/s/notosansrunic/v17/H4c_BXWPl9DZ0Xe_nHUaus7W68WmYhBuLtg.woff2",latin:"https://fonts.gstatic.com/s/notosansrunic/v17/H4c_BXWPl9DZ0Xe_nHUaus7W68WmbBBu.woff2"}}}}),a="Noto Sans Runic",f=(t,n)=>((t,n,o)=>{const i=[],a=n?[n]:Object.keys(t.fonts);for(const f of a){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const n=o?.weights??Object.keys(t.fonts[f]);for(const a of n){if(!t.fonts[f][a])throw new Error(`The font ${t.fontFamily} does not  have a weight ${a} in style ${f}`);const n=o?.subsets??Object.keys(t.fonts[f][a]);for(const c of n){let n=t.fonts[f]?.[a]?.[c];if(!n)throw new Error(`weight: ${a} subset: ${c} is not available for '${t.fontFamily}'`);let r=`${t.fontFamily}-${f}-${a}-${c}`;const u=e[r];if(u){i.push(u);continue}const l=(0,s.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:a,subset:c})}`),U=new FontFace(t.fontFamily,`url(${n}) format('woff2')`,{weight:a,style:f,unicodeRange:t.unicodeRanges[c]}),F=U.load().then((()=>{(o?.document??document).fonts.add(U),(0,s._8)(l)})).catch((t=>{throw e[r]=void 0,t}));e[r]=F,i.push(F)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,n)}}]);
//# sourceMappingURL=171075.6f413fc4.chunk.js.map