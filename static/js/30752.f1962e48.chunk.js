"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[30752],{30752:(o,t,n)=>{n.r(t),n.d(t,{fontFamily:()=>a,getInfo:()=>i,loadFont:()=>f});var e=n(662166),s={},i=()=>({fontFamily:"Nova Mono",importName:"NovaMono",version:"v20",url:"https://fonts.googleapis.com/css2?family=Nova+Mono:ital,wght@0,400",unicodeRanges:{greek:"U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{greek:"https://fonts.gstatic.com/s/novamono/v20/Cn-0JtiGWQ5Ajb--MRKvZGZZndM.woff2",latin:"https://fonts.gstatic.com/s/novamono/v20/Cn-0JtiGWQ5Ajb--MRKvZ2ZZ.woff2"}}}}),a="Nova Mono",f=(o,t)=>((o,t,n)=>{const i=[],a=t?[t]:Object.keys(o.fonts);for(const f of a){if("undefined"===typeof FontFace)continue;if(!o.fonts[f])throw new Error(`The font ${o.fontFamily} does not have a style ${f}`);const t=n?.weights??Object.keys(o.fonts[f]);for(const a of t){if(!o.fonts[f][a])throw new Error(`The font ${o.fontFamily} does not  have a weight ${a} in style ${f}`);const t=n?.subsets??Object.keys(o.fonts[f][a]);for(const r of t){let t=o.fonts[f]?.[a]?.[r];if(!t)throw new Error(`weight: ${a} subset: ${r} is not available for '${o.fontFamily}'`);let c=`${o.fontFamily}-${f}-${a}-${r}`;const l=s[c];if(l){i.push(l);continue}const h=(0,e.IH)(`Fetching ${o.fontFamily} font ${JSON.stringify({style:f,weight:a,subset:r})}`),F=new FontFace(o.fontFamily,`url(${t}) format('woff2')`,{weight:a,style:f,unicodeRange:o.unicodeRanges[r]}),U=F.load().then((()=>{(n?.document??document).fonts.add(F),(0,e._8)(h)})).catch((o=>{throw s[c]=void 0,o}));s[c]=U,i.push(U)}}}return{fontFamily:o.fontFamily,fonts:o.fonts,unicodeRanges:o.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),o,t)}}]);
//# sourceMappingURL=30752.f1962e48.chunk.js.map