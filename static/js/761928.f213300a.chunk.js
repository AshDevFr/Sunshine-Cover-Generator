"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[761928],{761928:(t,e,o)=>{o.r(e),o.d(e,{fontFamily:()=>a,getInfo:()=>i,loadFont:()=>f});var n=o(662166),s={},i=()=>({fontFamily:"ABeeZee",importName:"ABeeZee",version:"v22",url:"https://fonts.googleapis.com/css2?family=ABeeZee:ital,wght@0,400;1,400",unicodeRanges:{"latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{italic:{400:{"latin-ext":"https://fonts.gstatic.com/s/abeezee/v22/esDT31xSG-6AGleN2tCUnJ8DKpE.woff2",latin:"https://fonts.gstatic.com/s/abeezee/v22/esDT31xSG-6AGleN2tCUkp8D.woff2"}},normal:{400:{"latin-ext":"https://fonts.gstatic.com/s/abeezee/v22/esDR31xSG-6AGleN2tukkIcH.woff2",latin:"https://fonts.gstatic.com/s/abeezee/v22/esDR31xSG-6AGleN2tWkkA.woff2"}}}}),a="ABeeZee",f=(t,e)=>((t,e,o)=>{const i=[],a=e?[e]:Object.keys(t.fonts);for(const f of a){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const e=o?.weights??Object.keys(t.fonts[f]);for(const a of e){if(!t.fonts[f][a])throw new Error(`The font ${t.fontFamily} does not  have a weight ${a} in style ${f}`);const e=o?.subsets??Object.keys(t.fonts[f][a]);for(const l of e){let e=t.fonts[f]?.[a]?.[l];if(!e)throw new Error(`weight: ${a} subset: ${l} is not available for '${t.fontFamily}'`);let c=`${t.fontFamily}-${f}-${a}-${l}`;const U=s[c];if(U){i.push(U);continue}const r=(0,n.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:a,subset:l})}`),F=new FontFace(t.fontFamily,`url(${e}) format('woff2')`,{weight:a,style:f,unicodeRange:t.unicodeRanges[l]}),h=F.load().then((()=>{(o?.document??document).fonts.add(F),(0,n._8)(r)})).catch((t=>{throw s[c]=void 0,t}));s[c]=h,i.push(h)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,e)}}]);
//# sourceMappingURL=761928.f213300a.chunk.js.map