"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[836397],{836397:(o,t,n)=>{n.r(t),n.d(t,{fontFamily:()=>i,getInfo:()=>a,loadFont:()=>f});var s=n(662166),e={},a=()=>({fontFamily:"Noto Sans Anatolian Hieroglyphs",importName:"NotoSansAnatolianHieroglyphs",version:"v16",url:"https://fonts.googleapis.com/css2?family=Noto+Sans+Anatolian+Hieroglyphs:ital,wght@0,400",unicodeRanges:{"anatolian-hieroglyphs":"U+14400-14646","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{"anatolian-hieroglyphs":"https://fonts.gstatic.com/s/notosansanatolianhieroglyphs/v16/ijw9s4roRME5LLRxjsRb8A0gKPSWq4BbDmHHu6j2pEtUJzZWb4bj7moAWA.woff2","latin-ext":"https://fonts.gstatic.com/s/notosansanatolianhieroglyphs/v16/ijw9s4roRME5LLRxjsRb8A0gKPSWq4BbDmHHu6j2pEtUJzZWby_Cy1c5.woff2",latin:"https://fonts.gstatic.com/s/notosansanatolianhieroglyphs/v16/ijw9s4roRME5LLRxjsRb8A0gKPSWq4BbDmHHu6j2pEtUJzZWbyHCyw.woff2"}}}}),i="Noto Sans Anatolian Hieroglyphs",f=(o,t)=>((o,t,n)=>{const a=[],i=t?[t]:Object.keys(o.fonts);for(const f of i){if("undefined"===typeof FontFace)continue;if(!o.fonts[f])throw new Error(`The font ${o.fontFamily} does not have a style ${f}`);const t=n?.weights??Object.keys(o.fonts[f]);for(const i of t){if(!o.fonts[f][i])throw new Error(`The font ${o.fontFamily} does not  have a weight ${i} in style ${f}`);const t=n?.subsets??Object.keys(o.fonts[f][i]);for(const l of t){let t=o.fonts[f]?.[i]?.[l];if(!t)throw new Error(`weight: ${i} subset: ${l} is not available for '${o.fontFamily}'`);let r=`${o.fontFamily}-${f}-${i}-${l}`;const h=e[r];if(h){a.push(h);continue}const c=(0,s.IH)(`Fetching ${o.fontFamily} font ${JSON.stringify({style:f,weight:i,subset:l})}`),U=new FontFace(o.fontFamily,`url(${t}) format('woff2')`,{weight:i,style:f,unicodeRange:o.unicodeRanges[l]}),g=U.load().then((()=>{(n?.document??document).fonts.add(U),(0,s._8)(c)})).catch((o=>{throw e[r]=void 0,o}));e[r]=g,a.push(g)}}}return{fontFamily:o.fontFamily,fonts:o.fonts,unicodeRanges:o.unicodeRanges,waitUntilDone:()=>Promise.all(a).then((()=>{}))}})(a(),o,t)}}]);
//# sourceMappingURL=836397.ecb34840.chunk.js.map