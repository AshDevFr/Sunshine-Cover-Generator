"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[543951],{543951:(t,o,n)=>{n.r(o),n.d(o,{fontFamily:()=>f,getInfo:()=>i,loadFont:()=>a});var e=n(662166),s={},i=()=>({fontFamily:"GFS Didot",importName:"GFSDidot",version:"v15",url:"https://fonts.googleapis.com/css2?family=GFS+Didot:ital,wght@0,400",unicodeRanges:{greek:"U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF, U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{400:{greek:"https://fonts.gstatic.com/s/gfsdidot/v16/Jqzh5TybZ9vZMWFssvwSE-3H.woff2"}}}}),f="GFS Didot",a=(t,o)=>((t,o,n)=>{const i=[],f=o?[o]:Object.keys(t.fonts);for(const a of f){if("undefined"===typeof FontFace)continue;if(!t.fonts[a])throw new Error(`The font ${t.fontFamily} does not have a style ${a}`);const o=n?.weights??Object.keys(t.fonts[a]);for(const f of o){if(!t.fonts[a][f])throw new Error(`The font ${t.fontFamily} does not  have a weight ${f} in style ${a}`);const o=n?.subsets??Object.keys(t.fonts[a][f]);for(const r of o){let o=t.fonts[a]?.[f]?.[r];if(!o)throw new Error(`weight: ${f} subset: ${r} is not available for '${t.fontFamily}'`);let F=`${t.fontFamily}-${a}-${f}-${r}`;const c=s[F];if(c){i.push(c);continue}const l=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:a,weight:f,subset:r})}`),h=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:f,style:a,unicodeRange:t.unicodeRanges[r]}),U=h.load().then((()=>{(n?.document??document).fonts.add(h),(0,e._8)(l)})).catch((t=>{throw s[F]=void 0,t}));s[F]=U,i.push(U)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,o)}}]);
//# sourceMappingURL=543951.6af9219e.chunk.js.map