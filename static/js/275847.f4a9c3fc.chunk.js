"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[275847],{275847:(e,t,o)=>{o.r(t),o.d(t,{fontFamily:()=>f,getInfo:()=>i,loadFont:()=>c});var n=o(662166),s={},i=()=>({fontFamily:"GFS Neohellenic",importName:"GFSNeohellenic",version:"v25",url:"https://fonts.googleapis.com/css2?family=GFS+Neohellenic:ital,wght@0,400;0,700;1,400;1,700",unicodeRanges:{greek:"U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF, U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{italic:{400:{greek:"https://fonts.gstatic.com/s/gfsneohellenic/v25/8QITdiDOrfiq0b7R8O1Iw9WLcY5jL5JPy6E.woff2"},700:{greek:"https://fonts.gstatic.com/s/gfsneohellenic/v25/8QIWdiDOrfiq0b7R8O1Iw9WLcY5jL5r37rQfcsA.woff2"}},normal:{400:{greek:"https://fonts.gstatic.com/s/gfsneohellenic/v25/8QIRdiDOrfiq0b7R8O1Iw9WLcY5jKaJO.woff2"},700:{greek:"https://fonts.gstatic.com/s/gfsneohellenic/v25/8QIUdiDOrfiq0b7R8O1Iw9WLcY5rkYdb74Qe.woff2"}}}}),f="GFS Neohellenic",c=(e,t)=>((e,t,o)=>{const i=[],f=t?[t]:Object.keys(e.fonts);for(const c of f){if("undefined"===typeof FontFace)continue;if(!e.fonts[c])throw new Error(`The font ${e.fontFamily} does not have a style ${c}`);const t=o?.weights??Object.keys(e.fonts[c]);for(const f of t){if(!e.fonts[c][f])throw new Error(`The font ${e.fontFamily} does not  have a weight ${f} in style ${c}`);const t=o?.subsets??Object.keys(e.fonts[c][f]);for(const a of t){let t=e.fonts[c]?.[f]?.[a];if(!t)throw new Error(`weight: ${f} subset: ${a} is not available for '${e.fontFamily}'`);let l=`${e.fontFamily}-${c}-${f}-${a}`;const r=s[l];if(r){i.push(r);continue}const h=(0,n.IH)(`Fetching ${e.fontFamily} font ${JSON.stringify({style:c,weight:f,subset:a})}`),g=new FontFace(e.fontFamily,`url(${t}) format('woff2')`,{weight:f,style:c,unicodeRange:e.unicodeRanges[a]}),F=g.load().then((()=>{(o?.document??document).fonts.add(g),(0,n._8)(h)})).catch((e=>{throw s[l]=void 0,e}));s[l]=F,i.push(F)}}}return{fontFamily:e.fontFamily,fonts:e.fonts,unicodeRanges:e.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),e,t)}}]);
//# sourceMappingURL=275847.f4a9c3fc.chunk.js.map