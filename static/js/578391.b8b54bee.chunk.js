"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[578391],{578391:(t,o,s)=>{s.r(o),s.d(o,{fontFamily:()=>a,getInfo:()=>i,loadFont:()=>f});var n=s(662166),e={},i=()=>({fontFamily:"Proza Libre",importName:"ProzaLibre",version:"v9",url:"https://fonts.googleapis.com/css2?family=Proza+Libre:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800",unicodeRanges:{"latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{italic:{400:{"latin-ext":"https://fonts.gstatic.com/s/prozalibre/v9/LYjEdGHgj0k1DIQRyUEyyEotRNb_Xayz.woff2",latin:"https://fonts.gstatic.com/s/prozalibre/v9/LYjEdGHgj0k1DIQRyUEyyEotRNj_XQ.woff2"},500:{"latin-ext":"https://fonts.gstatic.com/s/prozalibre/v9/LYjZdGHgj0k1DIQRyUEyyEotTCvcSJ2S8g6N.woff2",latin:"https://fonts.gstatic.com/s/prozalibre/v9/LYjZdGHgj0k1DIQRyUEyyEotTCvcSJOS8g.woff2"},600:{"latin-ext":"https://fonts.gstatic.com/s/prozalibre/v9/LYjZdGHgj0k1DIQRyUEyyEotTAfbSJ2S8g6N.woff2",latin:"https://fonts.gstatic.com/s/prozalibre/v9/LYjZdGHgj0k1DIQRyUEyyEotTAfbSJOS8g.woff2"},700:{"latin-ext":"https://fonts.gstatic.com/s/prozalibre/v9/LYjZdGHgj0k1DIQRyUEyyEotTGPaSJ2S8g6N.woff2",latin:"https://fonts.gstatic.com/s/prozalibre/v9/LYjZdGHgj0k1DIQRyUEyyEotTGPaSJOS8g.woff2"},800:{"latin-ext":"https://fonts.gstatic.com/s/prozalibre/v9/LYjZdGHgj0k1DIQRyUEyyEotTH_ZSJ2S8g6N.woff2",latin:"https://fonts.gstatic.com/s/prozalibre/v9/LYjZdGHgj0k1DIQRyUEyyEotTH_ZSJOS8g.woff2"}},normal:{400:{"latin-ext":"https://fonts.gstatic.com/s/prozalibre/v9/LYjGdGHgj0k1DIQRyUEyyEomdNrnWQ.woff2",latin:"https://fonts.gstatic.com/s/prozalibre/v9/LYjGdGHgj0k1DIQRyUEyyEoodNo.woff2"},500:{"latin-ext":"https://fonts.gstatic.com/s/prozalibre/v9/LYjbdGHgj0k1DIQRyUEyyELbV8_WeJGK9g.woff2",latin:"https://fonts.gstatic.com/s/prozalibre/v9/LYjbdGHgj0k1DIQRyUEyyELbV8_YeJE.woff2"},600:{"latin-ext":"https://fonts.gstatic.com/s/prozalibre/v9/LYjbdGHgj0k1DIQRyUEyyEL3UM_WeJGK9g.woff2",latin:"https://fonts.gstatic.com/s/prozalibre/v9/LYjbdGHgj0k1DIQRyUEyyEL3UM_YeJE.woff2"},700:{"latin-ext":"https://fonts.gstatic.com/s/prozalibre/v9/LYjbdGHgj0k1DIQRyUEyyEKTUc_WeJGK9g.woff2",latin:"https://fonts.gstatic.com/s/prozalibre/v9/LYjbdGHgj0k1DIQRyUEyyEKTUc_YeJE.woff2"},800:{"latin-ext":"https://fonts.gstatic.com/s/prozalibre/v9/LYjbdGHgj0k1DIQRyUEyyEKPUs_WeJGK9g.woff2",latin:"https://fonts.gstatic.com/s/prozalibre/v9/LYjbdGHgj0k1DIQRyUEyyEKPUs_YeJE.woff2"}}}}),a="Proza Libre",f=(t,o)=>((t,o,s)=>{const i=[],a=o?[o]:Object.keys(t.fonts);for(const f of a){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const o=s?.weights??Object.keys(t.fonts[f]);for(const a of o){if(!t.fonts[f][a])throw new Error(`The font ${t.fontFamily} does not  have a weight ${a} in style ${f}`);const o=s?.subsets??Object.keys(t.fonts[f][a]);for(const r of o){let o=t.fonts[f]?.[a]?.[r];if(!o)throw new Error(`weight: ${a} subset: ${r} is not available for '${t.fontFamily}'`);let y=`${t.fontFamily}-${f}-${a}-${r}`;const c=e[y];if(c){i.push(c);continue}const l=(0,n.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:a,subset:r})}`),g=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:a,style:f,unicodeRange:t.unicodeRanges[r]}),U=g.load().then((()=>{(s?.document??document).fonts.add(g),(0,n._8)(l)})).catch((t=>{throw e[y]=void 0,t}));e[y]=U,i.push(U)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,o)}}]);
//# sourceMappingURL=578391.b8b54bee.chunk.js.map