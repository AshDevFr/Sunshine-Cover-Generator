"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[75434],{75434:(t,o,n)=>{n.r(o),n.d(o,{fontFamily:()=>f,getInfo:()=>i,loadFont:()=>a});var e=n(662166),s={},i=()=>({fontFamily:"BSixOneTwo",importName:"B612",version:"v12",url:"https://fonts.googleapis.com/css2?family=B612:ital,wght@0,400;0,700;1,400;1,700",unicodeRanges:{latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{italic:{400:{latin:"https://fonts.gstatic.com/s/b612/v12/3Jn8SDDxiSz36juCGxCk.woff2"},700:{latin:"https://fonts.gstatic.com/s/b612/v12/3Jn_SDDxiSz36juKoDWxTl0A.woff2"}},normal:{400:{latin:"https://fonts.gstatic.com/s/b612/v12/3JnySDDxiSz36j6yGQ.woff2"},700:{latin:"https://fonts.gstatic.com/s/b612/v12/3Jn9SDDxiSz34oWXDDeBTA.woff2"}}}}),f="BSixOneTwo",a=(t,o)=>((t,o,n)=>{const i=[],f=o?[o]:Object.keys(t.fonts);for(const a of f){if("undefined"===typeof FontFace)continue;if(!t.fonts[a])throw new Error(`The font ${t.fontFamily} does not have a style ${a}`);const o=n?.weights??Object.keys(t.fonts[a]);for(const f of o){if(!t.fonts[a][f])throw new Error(`The font ${t.fontFamily} does not  have a weight ${f} in style ${a}`);const o=n?.subsets??Object.keys(t.fonts[a][f]);for(const c of o){let o=t.fonts[a]?.[f]?.[c];if(!o)throw new Error(`weight: ${f} subset: ${c} is not available for '${t.fontFamily}'`);let l=`${t.fontFamily}-${a}-${f}-${c}`;const r=s[l];if(r){i.push(r);continue}const h=(0,e.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:a,weight:f,subset:c})}`),u=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:f,style:a,unicodeRange:t.unicodeRanges[c]}),m=u.load().then((()=>{(n?.document??document).fonts.add(u),(0,e._8)(h)})).catch((t=>{throw s[l]=void 0,t}));s[l]=m,i.push(m)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,o)}}]);
//# sourceMappingURL=75434.31c357f7.chunk.js.map