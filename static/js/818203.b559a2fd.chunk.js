"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[818203],{818203:(t,o,n)=>{n.r(o),n.d(o,{fontFamily:()=>a,getInfo:()=>i,loadFont:()=>f});var s=n(662166),e={},i=()=>({fontFamily:"Quantico",importName:"Quantico",version:"v17",url:"https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400;1,700",unicodeRanges:{latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{italic:{400:{latin:"https://fonts.gstatic.com/s/quantico/v17/rax4HiSdp9cPL3KIF7xuFD96ng.woff2"},700:{latin:"https://fonts.gstatic.com/s/quantico/v17/rax7HiSdp9cPL3KIF7xuHIRfi0349A.woff2"}},normal:{400:{latin:"https://fonts.gstatic.com/s/quantico/v17/rax-HiSdp9cPL3KIF7xrJD0.woff2"},700:{latin:"https://fonts.gstatic.com/s/quantico/v17/rax5HiSdp9cPL3KIF7TQAShdu08.woff2"}}}}),a="Quantico",f=(t,o)=>((t,o,n)=>{const i=[],a=o?[o]:Object.keys(t.fonts);for(const f of a){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const o=n?.weights??Object.keys(t.fonts[f]);for(const a of o){if(!t.fonts[f][a])throw new Error(`The font ${t.fontFamily} does not  have a weight ${a} in style ${f}`);const o=n?.subsets??Object.keys(t.fonts[f][a]);for(const c of o){let o=t.fonts[f]?.[a]?.[c];if(!o)throw new Error(`weight: ${a} subset: ${c} is not available for '${t.fontFamily}'`);let r=`${t.fontFamily}-${f}-${a}-${c}`;const l=e[r];if(l){i.push(l);continue}const u=(0,s.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:a,subset:c})}`),h=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:a,style:f,unicodeRange:t.unicodeRanges[c]}),F=h.load().then((()=>{(n?.document??document).fonts.add(h),(0,s._8)(u)})).catch((t=>{throw e[r]=void 0,t}));e[r]=F,i.push(F)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,o)}}]);
//# sourceMappingURL=818203.b559a2fd.chunk.js.map