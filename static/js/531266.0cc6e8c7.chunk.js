"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[531266],{531266:(t,o,e)=>{e.r(o),e.d(o,{fontFamily:()=>i,getInfo:()=>f,loadFont:()=>a});var s=e(662166),n={},f=()=>({fontFamily:"Merienda",importName:"Merienda",version:"v19",url:"https://fonts.googleapis.com/css2?family=Merienda:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900",unicodeRanges:{vietnamese:"U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{300:{vietnamese:"https://fonts.gstatic.com/s/merienda/v19/gNMHW3x8Qoy5_mf8uWMKMIqK_Q.woff2","latin-ext":"https://fonts.gstatic.com/s/merienda/v19/gNMHW3x8Qoy5_mf8uWMLMIqK_Q.woff2",latin:"https://fonts.gstatic.com/s/merienda/v19/gNMHW3x8Qoy5_mf8uWMFMIo.woff2"},400:{vietnamese:"https://fonts.gstatic.com/s/merienda/v19/gNMHW3x8Qoy5_mf8uWMKMIqK_Q.woff2","latin-ext":"https://fonts.gstatic.com/s/merienda/v19/gNMHW3x8Qoy5_mf8uWMLMIqK_Q.woff2",latin:"https://fonts.gstatic.com/s/merienda/v19/gNMHW3x8Qoy5_mf8uWMFMIo.woff2"},500:{vietnamese:"https://fonts.gstatic.com/s/merienda/v19/gNMHW3x8Qoy5_mf8uWMKMIqK_Q.woff2","latin-ext":"https://fonts.gstatic.com/s/merienda/v19/gNMHW3x8Qoy5_mf8uWMLMIqK_Q.woff2",latin:"https://fonts.gstatic.com/s/merienda/v19/gNMHW3x8Qoy5_mf8uWMFMIo.woff2"},600:{vietnamese:"https://fonts.gstatic.com/s/merienda/v19/gNMHW3x8Qoy5_mf8uWMKMIqK_Q.woff2","latin-ext":"https://fonts.gstatic.com/s/merienda/v19/gNMHW3x8Qoy5_mf8uWMLMIqK_Q.woff2",latin:"https://fonts.gstatic.com/s/merienda/v19/gNMHW3x8Qoy5_mf8uWMFMIo.woff2"},700:{vietnamese:"https://fonts.gstatic.com/s/merienda/v19/gNMHW3x8Qoy5_mf8uWMKMIqK_Q.woff2","latin-ext":"https://fonts.gstatic.com/s/merienda/v19/gNMHW3x8Qoy5_mf8uWMLMIqK_Q.woff2",latin:"https://fonts.gstatic.com/s/merienda/v19/gNMHW3x8Qoy5_mf8uWMFMIo.woff2"},800:{vietnamese:"https://fonts.gstatic.com/s/merienda/v19/gNMHW3x8Qoy5_mf8uWMKMIqK_Q.woff2","latin-ext":"https://fonts.gstatic.com/s/merienda/v19/gNMHW3x8Qoy5_mf8uWMLMIqK_Q.woff2",latin:"https://fonts.gstatic.com/s/merienda/v19/gNMHW3x8Qoy5_mf8uWMFMIo.woff2"},900:{vietnamese:"https://fonts.gstatic.com/s/merienda/v19/gNMHW3x8Qoy5_mf8uWMKMIqK_Q.woff2","latin-ext":"https://fonts.gstatic.com/s/merienda/v19/gNMHW3x8Qoy5_mf8uWMLMIqK_Q.woff2",latin:"https://fonts.gstatic.com/s/merienda/v19/gNMHW3x8Qoy5_mf8uWMFMIo.woff2"}}}}),i="Merienda",a=(t,o)=>((t,o,e)=>{const f=[],i=o?[o]:Object.keys(t.fonts);for(const a of i){if("undefined"===typeof FontFace)continue;if(!t.fonts[a])throw new Error(`The font ${t.fontFamily} does not have a style ${a}`);const o=e?.weights??Object.keys(t.fonts[a]);for(const i of o){if(!t.fonts[a][i])throw new Error(`The font ${t.fontFamily} does not  have a weight ${i} in style ${a}`);const o=e?.subsets??Object.keys(t.fonts[a][i]);for(const m of o){let o=t.fonts[a]?.[i]?.[m];if(!o)throw new Error(`weight: ${i} subset: ${m} is not available for '${t.fontFamily}'`);let c=`${t.fontFamily}-${a}-${i}-${m}`;const M=n[c];if(M){f.push(M);continue}const g=(0,s.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:a,weight:i,subset:m})}`),r=new FontFace(t.fontFamily,`url(${o}) format('woff2')`,{weight:i,style:a,unicodeRange:t.unicodeRanges[m]}),h=r.load().then((()=>{(e?.document??document).fonts.add(r),(0,s._8)(g)})).catch((t=>{throw n[c]=void 0,t}));n[c]=h,f.push(h)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(f).then((()=>{}))}})(f(),t,o)}}]);
//# sourceMappingURL=531266.0cc6e8c7.chunk.js.map