"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[906644],{906644:(t,e,n)=>{n.r(e),n.d(e,{fontFamily:()=>i,getInfo:()=>a,loadFont:()=>f});var o=n(662166),s={},a=()=>({fontFamily:"Secular One",importName:"SecularOne",version:"v12",url:"https://fonts.googleapis.com/css2?family=Secular+One:ital,wght@0,400",unicodeRanges:{hebrew:"U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{hebrew:"https://fonts.gstatic.com/s/secularone/v12/8QINdiTajsj_87rMuMdKyqDgOOhLLA.woff2","latin-ext":"https://fonts.gstatic.com/s/secularone/v12/8QINdiTajsj_87rMuMdKyqDsOOhLLA.woff2",latin:"https://fonts.gstatic.com/s/secularone/v12/8QINdiTajsj_87rMuMdKyqDiOOg.woff2"}}}}),i="Secular One",f=(t,e)=>((t,e,n)=>{const a=[],i=e?[e]:Object.keys(t.fonts);for(const f of i){if("undefined"===typeof FontFace)continue;if(!t.fonts[f])throw new Error(`The font ${t.fontFamily} does not have a style ${f}`);const e=n?.weights??Object.keys(t.fonts[f]);for(const i of e){if(!t.fonts[f][i])throw new Error(`The font ${t.fontFamily} does not  have a weight ${i} in style ${f}`);const e=n?.subsets??Object.keys(t.fonts[f][i]);for(const r of e){let e=t.fonts[f]?.[i]?.[r];if(!e)throw new Error(`weight: ${i} subset: ${r} is not available for '${t.fontFamily}'`);let c=`${t.fontFamily}-${f}-${i}-${r}`;const l=s[c];if(l){a.push(l);continue}const F=(0,o.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:f,weight:i,subset:r})}`),U=new FontFace(t.fontFamily,`url(${e}) format('woff2')`,{weight:i,style:f,unicodeRange:t.unicodeRanges[r]}),u=U.load().then((()=>{(n?.document??document).fonts.add(U),(0,o._8)(F)})).catch((t=>{throw s[c]=void 0,t}));s[c]=u,a.push(u)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(a).then((()=>{}))}})(a(),t,e)}}]);
//# sourceMappingURL=906644.6689e04f.chunk.js.map