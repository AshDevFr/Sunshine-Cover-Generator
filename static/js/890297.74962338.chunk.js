"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[890297],{890297:(t,o,n)=>{n.r(o),n.d(o,{fontFamily:()=>a,getInfo:()=>i,loadFont:()=>f});var s=n(662166),e={},i=()=>({fontFamily:"Noto Sans Limbu",importName:"NotoSansLimbu",version:"v22",url:"https://fonts.googleapis.com/css2?family=Noto+Sans+Limbu:ital,wght@0,400",unicodeRanges:{limbu:"U+0964-0965, U+1900-194F, U+200C-200D, U+25CC","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{limbu:"https://fonts.gstatic.com/s/notosanslimbu/v22/3JnlSDv90Gmq2mrzckOBBRRoNJVT4st2CHQ.woff2","latin-ext":"https://fonts.gstatic.com/s/notosanslimbu/v22/3JnlSDv90Gmq2mrzckOBBRRoNJVT2ct2CHQ.woff2",latin:"https://fonts.gstatic.com/s/notosanslimbu/v22/3JnlSDv90Gmq2mrzckOBBRRoNJVT18t2.woff2"}}}}),a="Noto Sans Limbu",f=(t,o)=>((t,o,n)=>{const i=[],a=o?[o]:Object.keys(t.fonts);for(const f of a){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const o=n?.weights??Object.keys(t.fonts[f]);for(const a of o){if(!t.fonts[f][a])throw new Error(`The font ${t.fontFamily} does not  have a weight ${a} in style ${f}`);const o=n?.subsets??Object.keys(t.fonts[f][a]);for(const l of o){let o=t.fonts[f]?.[a]?.[l];if(!o)throw new Error(`weight: ${a} subset: ${l} is not available for '${t.fontFamily}'`);let c=`${t.fontFamily}-${f}-${a}-${l}`;const m=e[c];if(m){i.push(m);continue}const r=(0,s.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:a,subset:l})}`),U=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:a,style:f,unicodeRange:t.unicodeRanges[l]}),F=U.load().then((()=>{(n?.document??document).fonts.add(U),(0,s._8)(r)})).catch((t=>{throw e[c]=void 0,t}));e[c]=F,i.push(F)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,o)}}]);
//# sourceMappingURL=890297.74962338.chunk.js.map