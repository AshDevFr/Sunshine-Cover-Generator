"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[668783],{668783:(t,o,e)=>{e.r(o),e.d(o,{fontFamily:()=>a,getInfo:()=>i,loadFont:()=>f});var n=e(662166),s={},i=()=>({fontFamily:"Comic Neue",importName:"ComicNeue",version:"v8",url:"https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700",unicodeRanges:{latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{italic:{300:{latin:"https://fonts.gstatic.com/s/comicneue/v8/4UaarEJDsxBrF37olUeD96_RTplkLCND.woff2"},400:{latin:"https://fonts.gstatic.com/s/comicneue/v8/4UaFrEJDsxBrF37olUeD96_Z5btx.woff2"},700:{latin:"https://fonts.gstatic.com/s/comicneue/v8/4UaarEJDsxBrF37olUeD96_RXp5kLCND.woff2"}},normal:{300:{latin:"https://fonts.gstatic.com/s/comicneue/v8/4UaErEJDsxBrF37olUeD_wHL8pxULg.woff2"},400:{latin:"https://fonts.gstatic.com/s/comicneue/v8/4UaHrEJDsxBrF37olUeD96rp5w.woff2"},700:{latin:"https://fonts.gstatic.com/s/comicneue/v8/4UaErEJDsxBrF37olUeD_xHM8pxULg.woff2"}}}}),a="Comic Neue",f=(t,o)=>((t,o,e)=>{const i=[],a=o?[o]:Object.keys(t.fonts);for(const f of a){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const o=e?.weights??Object.keys(t.fonts[f]);for(const a of o){if(!t.fonts[f][a])throw new Error(`The font ${t.fontFamily} does not  have a weight ${a} in style ${f}`);const o=e?.subsets??Object.keys(t.fonts[f][a]);for(const c of o){let o=t.fonts[f]?.[a]?.[c];if(!o)throw new Error(`weight: ${a} subset: ${c} is not available for '${t.fontFamily}'`);let r=`${t.fontFamily}-${f}-${a}-${c}`;const l=s[r];if(l){i.push(l);continue}const m=(0,n.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:a,subset:c})}`),U=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:a,style:f,unicodeRange:t.unicodeRanges[c]}),u=U.load().then((()=>{(e?.document??document).fonts.add(U),(0,n._8)(m)})).catch((t=>{throw s[r]=void 0,t}));s[r]=u,i.push(u)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,o)}}]);
//# sourceMappingURL=668783.96183b95.chunk.js.map