"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[298052],{298052:(t,o,a)=>{a.r(o),a.d(o,{fontFamily:()=>i,getInfo:()=>f,loadFont:()=>e});var s=a(662166),n={},f=()=>({fontFamily:"Sono",importName:"Sono",version:"v6",url:"https://fonts.googleapis.com/css2?family=Sono:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800",unicodeRanges:{vietnamese:"U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{200:{vietnamese:"https://fonts.gstatic.com/s/sono/v6/aFTO7PNiY3U2Cqf_aYEN64CYaK18YUhHma9GZQ.woff2","latin-ext":"https://fonts.gstatic.com/s/sono/v6/aFTO7PNiY3U2Cqf_aYEN64CYaK18YUhGma9GZQ.woff2",latin:"https://fonts.gstatic.com/s/sono/v6/aFTO7PNiY3U2Cqf_aYEN64CYaK18YUhIma8.woff2"},300:{vietnamese:"https://fonts.gstatic.com/s/sono/v6/aFTO7PNiY3U2Cqf_aYEN64CYaK18YUhHma9GZQ.woff2","latin-ext":"https://fonts.gstatic.com/s/sono/v6/aFTO7PNiY3U2Cqf_aYEN64CYaK18YUhGma9GZQ.woff2",latin:"https://fonts.gstatic.com/s/sono/v6/aFTO7PNiY3U2Cqf_aYEN64CYaK18YUhIma8.woff2"},400:{vietnamese:"https://fonts.gstatic.com/s/sono/v6/aFTO7PNiY3U2Cqf_aYEN64CYaK18YUhHma9GZQ.woff2","latin-ext":"https://fonts.gstatic.com/s/sono/v6/aFTO7PNiY3U2Cqf_aYEN64CYaK18YUhGma9GZQ.woff2",latin:"https://fonts.gstatic.com/s/sono/v6/aFTO7PNiY3U2Cqf_aYEN64CYaK18YUhIma8.woff2"},500:{vietnamese:"https://fonts.gstatic.com/s/sono/v6/aFTO7PNiY3U2Cqf_aYEN64CYaK18YUhHma9GZQ.woff2","latin-ext":"https://fonts.gstatic.com/s/sono/v6/aFTO7PNiY3U2Cqf_aYEN64CYaK18YUhGma9GZQ.woff2",latin:"https://fonts.gstatic.com/s/sono/v6/aFTO7PNiY3U2Cqf_aYEN64CYaK18YUhIma8.woff2"},600:{vietnamese:"https://fonts.gstatic.com/s/sono/v6/aFTO7PNiY3U2Cqf_aYEN64CYaK18YUhHma9GZQ.woff2","latin-ext":"https://fonts.gstatic.com/s/sono/v6/aFTO7PNiY3U2Cqf_aYEN64CYaK18YUhGma9GZQ.woff2",latin:"https://fonts.gstatic.com/s/sono/v6/aFTO7PNiY3U2Cqf_aYEN64CYaK18YUhIma8.woff2"},700:{vietnamese:"https://fonts.gstatic.com/s/sono/v6/aFTO7PNiY3U2Cqf_aYEN64CYaK18YUhHma9GZQ.woff2","latin-ext":"https://fonts.gstatic.com/s/sono/v6/aFTO7PNiY3U2Cqf_aYEN64CYaK18YUhGma9GZQ.woff2",latin:"https://fonts.gstatic.com/s/sono/v6/aFTO7PNiY3U2Cqf_aYEN64CYaK18YUhIma8.woff2"},800:{vietnamese:"https://fonts.gstatic.com/s/sono/v6/aFTO7PNiY3U2Cqf_aYEN64CYaK18YUhHma9GZQ.woff2","latin-ext":"https://fonts.gstatic.com/s/sono/v6/aFTO7PNiY3U2Cqf_aYEN64CYaK18YUhGma9GZQ.woff2",latin:"https://fonts.gstatic.com/s/sono/v6/aFTO7PNiY3U2Cqf_aYEN64CYaK18YUhIma8.woff2"}}}}),i="Sono",e=(t,o)=>((t,o,a)=>{const f=[],i=o?[o]:Object.keys(t.fonts);for(const e of i){if("undefined"===typeof FontFace)continue;if(!t.fonts[e])throw new Error(`The font ${t.fontFamily} does not have a style ${e}`);const o=a?.weights??Object.keys(t.fonts[e]);for(const i of o){if(!t.fonts[e][i])throw new Error(`The font ${t.fontFamily} does not  have a weight ${i} in style ${e}`);const o=a?.subsets??Object.keys(t.fonts[e][i]);for(const U of o){let o=t.fonts[e]?.[i]?.[U];if(!o)throw new Error(`weight: ${i} subset: ${U} is not available for '${t.fontFamily}'`);let Y=`${t.fontFamily}-${e}-${i}-${U}`;const c=n[Y];if(c){f.push(c);continue}const m=(0,s.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:e,weight:i,subset:U})}`),h=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:i,style:e,unicodeRange:t.unicodeRanges[U]}),F=h.load().then((()=>{(a?.document??document).fonts.add(h),(0,s._8)(m)})).catch((t=>{throw n[Y]=void 0,t}));n[Y]=F,f.push(F)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(f).then((()=>{}))}})(f(),t,o)}}]);
//# sourceMappingURL=298052.89019b96.chunk.js.map