"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[356381],{356381:(t,o,s)=>{s.r(o),s.d(o,{fontFamily:()=>a,getInfo:()=>i,loadFont:()=>e});var n=s(662166),f={},i=()=>({fontFamily:"Foldit",importName:"Foldit",version:"v5",url:"https://fonts.googleapis.com/css2?family=Foldit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900",unicodeRanges:{vietnamese:"U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{100:{vietnamese:"https://fonts.gstatic.com/s/foldit/v5/aFTV7PF3Y3c9Wdjnrj21OYU.woff2","latin-ext":"https://fonts.gstatic.com/s/foldit/v5/aFTV7PF3Y3c9Wdjnrz21OYU.woff2",latin:"https://fonts.gstatic.com/s/foldit/v5/aFTV7PF3Y3c9WdjnoT21.woff2"},200:{vietnamese:"https://fonts.gstatic.com/s/foldit/v5/aFTV7PF3Y3c9Wdjnrj21OYU.woff2","latin-ext":"https://fonts.gstatic.com/s/foldit/v5/aFTV7PF3Y3c9Wdjnrz21OYU.woff2",latin:"https://fonts.gstatic.com/s/foldit/v5/aFTV7PF3Y3c9WdjnoT21.woff2"},300:{vietnamese:"https://fonts.gstatic.com/s/foldit/v5/aFTV7PF3Y3c9Wdjnrj21OYU.woff2","latin-ext":"https://fonts.gstatic.com/s/foldit/v5/aFTV7PF3Y3c9Wdjnrz21OYU.woff2",latin:"https://fonts.gstatic.com/s/foldit/v5/aFTV7PF3Y3c9WdjnoT21.woff2"},400:{vietnamese:"https://fonts.gstatic.com/s/foldit/v5/aFTV7PF3Y3c9Wdjnrj21OYU.woff2","latin-ext":"https://fonts.gstatic.com/s/foldit/v5/aFTV7PF3Y3c9Wdjnrz21OYU.woff2",latin:"https://fonts.gstatic.com/s/foldit/v5/aFTV7PF3Y3c9WdjnoT21.woff2"},500:{vietnamese:"https://fonts.gstatic.com/s/foldit/v5/aFTV7PF3Y3c9Wdjnrj21OYU.woff2","latin-ext":"https://fonts.gstatic.com/s/foldit/v5/aFTV7PF3Y3c9Wdjnrz21OYU.woff2",latin:"https://fonts.gstatic.com/s/foldit/v5/aFTV7PF3Y3c9WdjnoT21.woff2"},600:{vietnamese:"https://fonts.gstatic.com/s/foldit/v5/aFTV7PF3Y3c9Wdjnrj21OYU.woff2","latin-ext":"https://fonts.gstatic.com/s/foldit/v5/aFTV7PF3Y3c9Wdjnrz21OYU.woff2",latin:"https://fonts.gstatic.com/s/foldit/v5/aFTV7PF3Y3c9WdjnoT21.woff2"},700:{vietnamese:"https://fonts.gstatic.com/s/foldit/v5/aFTV7PF3Y3c9Wdjnrj21OYU.woff2","latin-ext":"https://fonts.gstatic.com/s/foldit/v5/aFTV7PF3Y3c9Wdjnrz21OYU.woff2",latin:"https://fonts.gstatic.com/s/foldit/v5/aFTV7PF3Y3c9WdjnoT21.woff2"},800:{vietnamese:"https://fonts.gstatic.com/s/foldit/v5/aFTV7PF3Y3c9Wdjnrj21OYU.woff2","latin-ext":"https://fonts.gstatic.com/s/foldit/v5/aFTV7PF3Y3c9Wdjnrz21OYU.woff2",latin:"https://fonts.gstatic.com/s/foldit/v5/aFTV7PF3Y3c9WdjnoT21.woff2"},900:{vietnamese:"https://fonts.gstatic.com/s/foldit/v5/aFTV7PF3Y3c9Wdjnrj21OYU.woff2","latin-ext":"https://fonts.gstatic.com/s/foldit/v5/aFTV7PF3Y3c9Wdjnrz21OYU.woff2",latin:"https://fonts.gstatic.com/s/foldit/v5/aFTV7PF3Y3c9WdjnoT21.woff2"}}}}),a="Foldit",e=(t,o)=>((t,o,s)=>{const i=[],a=o?[o]:Object.keys(t.fonts);for(const e of a){if("undefined"===typeof FontFace)continue;if(!t.fonts[e])throw new Error(`The font ${t.fontFamily} does not have a style ${e}`);const o=s?.weights??Object.keys(t.fonts[e]);for(const a of o){if(!t.fonts[e][a])throw new Error(`The font ${t.fontFamily} does not  have a weight ${a} in style ${e}`);const o=s?.subsets??Object.keys(t.fonts[e][a]);for(const c of o){let o=t.fonts[e]?.[a]?.[c];if(!o)throw new Error(`weight: ${a} subset: ${c} is not available for '${t.fontFamily}'`);let F=`${t.fontFamily}-${e}-${a}-${c}`;const l=f[F];if(l){i.push(l);continue}const d=(0,n.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:e,weight:a,subset:c})}`),U=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:a,style:e,unicodeRange:t.unicodeRanges[c]}),m=U.load().then((()=>{(s?.document??document).fonts.add(U),(0,n._8)(d)})).catch((t=>{throw f[F]=void 0,t}));f[F]=m,i.push(m)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(i).then((()=>{}))}})(i(),t,o)}}]);
//# sourceMappingURL=356381.34128364.chunk.js.map