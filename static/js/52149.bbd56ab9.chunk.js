"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[52149],{52149:(t,s,a)=>{a.r(s),a.d(s,{fontFamily:()=>e,getInfo:()=>f,loadFont:()=>i});var n=a(662166),o={},f=()=>({fontFamily:"Martel Sans",importName:"MartelSans",version:"v12",url:"https://fonts.googleapis.com/css2?family=Martel+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900",unicodeRanges:{devanagari:"U+0900-097F, U+1CD0-1CF9, U+200C-200D, U+20A8, U+20B9, U+20F0, U+25CC, U+A830-A839, U+A8E0-A8FF, U+11B00-11B09","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{200:{devanagari:"https://fonts.gstatic.com/s/martelsans/v13/h0GxssGi7VdzDgKjM-4d8hAX5vuBH0gXqA.woff2","latin-ext":"https://fonts.gstatic.com/s/martelsans/v13/h0GxssGi7VdzDgKjM-4d8hAX5vuOH0gXqA.woff2",latin:"https://fonts.gstatic.com/s/martelsans/v13/h0GxssGi7VdzDgKjM-4d8hAX5vuAH0g.woff2"},300:{devanagari:"https://fonts.gstatic.com/s/martelsans/v13/h0GxssGi7VdzDgKjM-4d8hBz5fuBH0gXqA.woff2","latin-ext":"https://fonts.gstatic.com/s/martelsans/v13/h0GxssGi7VdzDgKjM-4d8hBz5fuOH0gXqA.woff2",latin:"https://fonts.gstatic.com/s/martelsans/v13/h0GxssGi7VdzDgKjM-4d8hBz5fuAH0g.woff2"},400:{devanagari:"https://fonts.gstatic.com/s/martelsans/v13/h0GsssGi7VdzDgKjM-4d8hjZx-6_Pg.woff2","latin-ext":"https://fonts.gstatic.com/s/martelsans/v13/h0GsssGi7VdzDgKjM-4d8hjWx-6_Pg.woff2",latin:"https://fonts.gstatic.com/s/martelsans/v13/h0GsssGi7VdzDgKjM-4d8hjYx-4.woff2"},600:{devanagari:"https://fonts.gstatic.com/s/martelsans/v13/h0GxssGi7VdzDgKjM-4d8hAH4_uBH0gXqA.woff2","latin-ext":"https://fonts.gstatic.com/s/martelsans/v13/h0GxssGi7VdzDgKjM-4d8hAH4_uOH0gXqA.woff2",latin:"https://fonts.gstatic.com/s/martelsans/v13/h0GxssGi7VdzDgKjM-4d8hAH4_uAH0g.woff2"},700:{devanagari:"https://fonts.gstatic.com/s/martelsans/v13/h0GxssGi7VdzDgKjM-4d8hBj4vuBH0gXqA.woff2","latin-ext":"https://fonts.gstatic.com/s/martelsans/v13/h0GxssGi7VdzDgKjM-4d8hBj4vuOH0gXqA.woff2",latin:"https://fonts.gstatic.com/s/martelsans/v13/h0GxssGi7VdzDgKjM-4d8hBj4vuAH0g.woff2"},800:{devanagari:"https://fonts.gstatic.com/s/martelsans/v13/h0GxssGi7VdzDgKjM-4d8hB_4fuBH0gXqA.woff2","latin-ext":"https://fonts.gstatic.com/s/martelsans/v13/h0GxssGi7VdzDgKjM-4d8hB_4fuOH0gXqA.woff2",latin:"https://fonts.gstatic.com/s/martelsans/v13/h0GxssGi7VdzDgKjM-4d8hB_4fuAH0g.woff2"},900:{devanagari:"https://fonts.gstatic.com/s/martelsans/v13/h0GxssGi7VdzDgKjM-4d8hBb4PuBH0gXqA.woff2","latin-ext":"https://fonts.gstatic.com/s/martelsans/v13/h0GxssGi7VdzDgKjM-4d8hBb4PuOH0gXqA.woff2",latin:"https://fonts.gstatic.com/s/martelsans/v13/h0GxssGi7VdzDgKjM-4d8hBb4PuAH0g.woff2"}}}}),e="Martel Sans",i=(t,s)=>((t,s,a)=>{const f=[],e=s?[s]:Object.keys(t.fonts);for(const i of e){if("undefined"===typeof FontFace)continue;if(!t.fonts[i])throw new Error(`The font ${t.fontFamily} does not have a style ${i}`);const s=a?.weights??Object.keys(t.fonts[i]);for(const e of s){if(!t.fonts[i][e])throw new Error(`The font ${t.fontFamily} does not  have a weight ${e} in style ${i}`);const s=a?.subsets??Object.keys(t.fonts[i][e]);for(const g of s){let s=t.fonts[i]?.[e]?.[g];if(!s)throw new Error(`weight: ${e} subset: ${g} is not available for '${t.fontFamily}'`);let h=`${t.fontFamily}-${i}-${e}-${g}`;const c=o[h];if(c){f.push(c);continue}const l=(0,n.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:i,weight:e,subset:g})}`),d=new FontFace(t.fontFamily,`url(${s}) format('woff2')`,{weight:e,style:i,unicodeRange:t.unicodeRanges[g]}),r=d.load().then((()=>{(a?.document??document).fonts.add(d),(0,n._8)(l)})).catch((t=>{throw o[h]=void 0,t}));o[h]=r,f.push(r)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(f).then((()=>{}))}})(f(),t,s)}}]);
//# sourceMappingURL=52149.bbd56ab9.chunk.js.map