"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[911762],{911762:(t,o,s)=>{s.r(o),s.d(o,{fontFamily:()=>f,getInfo:()=>e,loadFont:()=>n});var l=s(662166),i={},e=()=>({fontFamily:"Bellota",importName:"Bellota",version:"v16",url:"https://fonts.googleapis.com/css2?family=Bellota:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700",unicodeRanges:{cyrillic:"U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",vietnamese:"U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{italic:{300:{cyrillic:"https://fonts.gstatic.com/s/bellota/v16/MwQxbhXl3_qEpiwAKJBjHGEvjpFLlXs.woff2",vietnamese:"https://fonts.gstatic.com/s/bellota/v16/MwQxbhXl3_qEpiwAKJBjHGEvhZFLlXs.woff2","latin-ext":"https://fonts.gstatic.com/s/bellota/v16/MwQxbhXl3_qEpiwAKJBjHGEvhJFLlXs.woff2",latin:"https://fonts.gstatic.com/s/bellota/v16/MwQxbhXl3_qEpiwAKJBjHGEvipFL.woff2"},400:{cyrillic:"https://fonts.gstatic.com/s/bellota/v16/MwQ0bhXl3_qEpiwAKJBrs0M6tbA.woff2",vietnamese:"https://fonts.gstatic.com/s/bellota/v16/MwQ0bhXl3_qEpiwAKJBruEM6tbA.woff2","latin-ext":"https://fonts.gstatic.com/s/bellota/v16/MwQ0bhXl3_qEpiwAKJBruUM6tbA.woff2",latin:"https://fonts.gstatic.com/s/bellota/v16/MwQ0bhXl3_qEpiwAKJBrt0M6.woff2"},700:{cyrillic:"https://fonts.gstatic.com/s/bellota/v16/MwQxbhXl3_qEpiwAKJBjDGYvjpFLlXs.woff2",vietnamese:"https://fonts.gstatic.com/s/bellota/v16/MwQxbhXl3_qEpiwAKJBjDGYvhZFLlXs.woff2","latin-ext":"https://fonts.gstatic.com/s/bellota/v16/MwQxbhXl3_qEpiwAKJBjDGYvhJFLlXs.woff2",latin:"https://fonts.gstatic.com/s/bellota/v16/MwQxbhXl3_qEpiwAKJBjDGYvipFL.woff2"}},normal:{300:{cyrillic:"https://fonts.gstatic.com/s/bellota/v16/MwQzbhXl3_qEpiwAID55oGAfiIlP.woff2",vietnamese:"https://fonts.gstatic.com/s/bellota/v16/MwQzbhXl3_qEpiwAID55oGsfiIlP.woff2","latin-ext":"https://fonts.gstatic.com/s/bellota/v16/MwQzbhXl3_qEpiwAID55oGofiIlP.woff2",latin:"https://fonts.gstatic.com/s/bellota/v16/MwQzbhXl3_qEpiwAID55oGQfiA.woff2"},400:{cyrillic:"https://fonts.gstatic.com/s/bellota/v16/MwQ2bhXl3_qEpiwAKJFbtVs-.woff2",vietnamese:"https://fonts.gstatic.com/s/bellota/v16/MwQ2bhXl3_qEpiwAKJpbtVs-.woff2","latin-ext":"https://fonts.gstatic.com/s/bellota/v16/MwQ2bhXl3_qEpiwAKJtbtVs-.woff2",latin:"https://fonts.gstatic.com/s/bellota/v16/MwQ2bhXl3_qEpiwAKJVbtQ.woff2"},700:{cyrillic:"https://fonts.gstatic.com/s/bellota/v16/MwQzbhXl3_qEpiwAIC5-oGAfiIlP.woff2",vietnamese:"https://fonts.gstatic.com/s/bellota/v16/MwQzbhXl3_qEpiwAIC5-oGsfiIlP.woff2","latin-ext":"https://fonts.gstatic.com/s/bellota/v16/MwQzbhXl3_qEpiwAIC5-oGofiIlP.woff2",latin:"https://fonts.gstatic.com/s/bellota/v16/MwQzbhXl3_qEpiwAIC5-oGQfiA.woff2"}}}}),f="Bellota",n=(t,o)=>((t,o,s)=>{const e=[],f=o?[o]:Object.keys(t.fonts);for(const n of f){if("undefined"===typeof FontFace)continue;if(!t.fonts[n])throw new Error(`The font ${t.fontFamily} does not have a style ${n}`);const o=s?.weights??Object.keys(t.fonts[n]);for(const f of o){if(!t.fonts[n][f])throw new Error(`The font ${t.fontFamily} does not  have a weight ${f} in style ${n}`);const o=s?.subsets??Object.keys(t.fonts[n][f]);for(const a of o){let o=t.fonts[n]?.[f]?.[a];if(!o)throw new Error(`weight: ${f} subset: ${a} is not available for '${t.fontFamily}'`);let c=`${t.fontFamily}-${n}-${f}-${a}`;const w=i[c];if(w){e.push(w);continue}const h=(0,l.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:n,weight:f,subset:a})}`),b=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:f,style:n,unicodeRange:t.unicodeRanges[a]}),p=b.load().then((()=>{(s?.document??document).fonts.add(b),(0,l._8)(h)})).catch((t=>{throw i[c]=void 0,t}));i[c]=p,e.push(p)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(e).then((()=>{}))}})(e(),t,o)}}]);
//# sourceMappingURL=911762.aaf28d7d.chunk.js.map