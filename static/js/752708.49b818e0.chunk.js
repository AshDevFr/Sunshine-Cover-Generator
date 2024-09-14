"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[752708],{752708:(t,s,i)=>{i.r(s),i.d(s,{fontFamily:()=>n,getInfo:()=>f,loadFont:()=>a});var o=i(662166),e={},f=()=>({fontFamily:"Athiti",importName:"Athiti",version:"v12",url:"https://fonts.googleapis.com/css2?family=Athiti:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700",unicodeRanges:{thai:"U+0E01-0E5B, U+200C-200D, U+25CC",vietnamese:"U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{200:{thai:"https://fonts.gstatic.com/s/athiti/v12/pe0sMISdLIZIv1wAxDNCEfe_O98.woff2",vietnamese:"https://fonts.gstatic.com/s/athiti/v12/pe0sMISdLIZIv1wAxDNCCve_O98.woff2","latin-ext":"https://fonts.gstatic.com/s/athiti/v12/pe0sMISdLIZIv1wAxDNCC_e_O98.woff2",latin:"https://fonts.gstatic.com/s/athiti/v12/pe0sMISdLIZIv1wAxDNCBfe_.woff2"},300:{thai:"https://fonts.gstatic.com/s/athiti/v12/pe0sMISdLIZIv1wAoDBCEfe_O98.woff2",vietnamese:"https://fonts.gstatic.com/s/athiti/v12/pe0sMISdLIZIv1wAoDBCCve_O98.woff2","latin-ext":"https://fonts.gstatic.com/s/athiti/v12/pe0sMISdLIZIv1wAoDBCC_e_O98.woff2",latin:"https://fonts.gstatic.com/s/athiti/v12/pe0sMISdLIZIv1wAoDBCBfe_.woff2"},400:{thai:"https://fonts.gstatic.com/s/athiti/v12/pe0vMISdLIZIv1wIHxJXOtY.woff2",vietnamese:"https://fonts.gstatic.com/s/athiti/v12/pe0vMISdLIZIv1wIBBJXOtY.woff2","latin-ext":"https://fonts.gstatic.com/s/athiti/v12/pe0vMISdLIZIv1wIBRJXOtY.woff2",latin:"https://fonts.gstatic.com/s/athiti/v12/pe0vMISdLIZIv1wICxJX.woff2"},500:{thai:"https://fonts.gstatic.com/s/athiti/v12/pe0sMISdLIZIv1wA-DFCEfe_O98.woff2",vietnamese:"https://fonts.gstatic.com/s/athiti/v12/pe0sMISdLIZIv1wA-DFCCve_O98.woff2","latin-ext":"https://fonts.gstatic.com/s/athiti/v12/pe0sMISdLIZIv1wA-DFCC_e_O98.woff2",latin:"https://fonts.gstatic.com/s/athiti/v12/pe0sMISdLIZIv1wA-DFCBfe_.woff2"},600:{thai:"https://fonts.gstatic.com/s/athiti/v12/pe0sMISdLIZIv1wA1DZCEfe_O98.woff2",vietnamese:"https://fonts.gstatic.com/s/athiti/v12/pe0sMISdLIZIv1wA1DZCCve_O98.woff2","latin-ext":"https://fonts.gstatic.com/s/athiti/v12/pe0sMISdLIZIv1wA1DZCC_e_O98.woff2",latin:"https://fonts.gstatic.com/s/athiti/v12/pe0sMISdLIZIv1wA1DZCBfe_.woff2"},700:{thai:"https://fonts.gstatic.com/s/athiti/v12/pe0sMISdLIZIv1wAsDdCEfe_O98.woff2",vietnamese:"https://fonts.gstatic.com/s/athiti/v12/pe0sMISdLIZIv1wAsDdCCve_O98.woff2","latin-ext":"https://fonts.gstatic.com/s/athiti/v12/pe0sMISdLIZIv1wAsDdCC_e_O98.woff2",latin:"https://fonts.gstatic.com/s/athiti/v12/pe0sMISdLIZIv1wAsDdCBfe_.woff2"}}}}),n="Athiti",a=(t,s)=>((t,s,i)=>{const f=[],n=s?[s]:Object.keys(t.fonts);for(const a of n){if("undefined"===typeof FontFace)continue;if(!t.fonts[a])throw new Error(`The font ${t.fontFamily} does not have a style ${a}`);const s=i?.weights??Object.keys(t.fonts[a]);for(const n of s){if(!t.fonts[a][n])throw new Error(`The font ${t.fontFamily} does not  have a weight ${n} in style ${a}`);const s=i?.subsets??Object.keys(t.fonts[a][n]);for(const h of s){let s=t.fonts[a]?.[n]?.[h];if(!s)throw new Error(`weight: ${n} subset: ${h} is not available for '${t.fontFamily}'`);let c=`${t.fontFamily}-${a}-${n}-${h}`;const I=e[c];if(I){f.push(I);continue}const v=(0,o.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:a,weight:n,subset:h})}`),w=new FontFace(t.fontFamily,`url(${s}) format('woff2')`,{weight:n,style:a,unicodeRange:t.unicodeRanges[h]}),p=w.load().then((()=>{(i?.document??document).fonts.add(w),(0,o._8)(v)})).catch((t=>{throw e[c]=void 0,t}));e[c]=p,f.push(p)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(f).then((()=>{}))}})(f(),t,s)}}]);
//# sourceMappingURL=752708.49b818e0.chunk.js.map