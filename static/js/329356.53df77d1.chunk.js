"use strict";(self.webpackChunksunshine_image_generator=self.webpackChunksunshine_image_generator||[]).push([[329356],{329356:(t,n,f)=>{f.r(n),f.d(n,{fontFamily:()=>l,getInfo:()=>a,loadFont:()=>r});var o=f(662166),s={},a=()=>({fontFamily:"Frank Ruhl Libre",importName:"FrankRuhlLibre",version:"v20",url:"https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900",unicodeRanges:{hebrew:"U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F","latin-ext":"U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",latin:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},fonts:{normal:{300:{hebrew:"https://fonts.gstatic.com/s/frankruhllibre/v21/j8_w6_fAw7jrcalD7oKYNX0QfAnPW7Ll4ajn.woff2","latin-ext":"https://fonts.gstatic.com/s/frankruhllibre/v21/j8_w6_fAw7jrcalD7oKYNX0QfAnPW77l4ajn.woff2",latin:"https://fonts.gstatic.com/s/frankruhllibre/v21/j8_w6_fAw7jrcalD7oKYNX0QfAnPW7Dl4Q.woff2"},400:{hebrew:"https://fonts.gstatic.com/s/frankruhllibre/v21/j8_w6_fAw7jrcalD7oKYNX0QfAnPW7Ll4ajn.woff2","latin-ext":"https://fonts.gstatic.com/s/frankruhllibre/v21/j8_w6_fAw7jrcalD7oKYNX0QfAnPW77l4ajn.woff2",latin:"https://fonts.gstatic.com/s/frankruhllibre/v21/j8_w6_fAw7jrcalD7oKYNX0QfAnPW7Dl4Q.woff2"},500:{hebrew:"https://fonts.gstatic.com/s/frankruhllibre/v21/j8_w6_fAw7jrcalD7oKYNX0QfAnPW7Ll4ajn.woff2","latin-ext":"https://fonts.gstatic.com/s/frankruhllibre/v21/j8_w6_fAw7jrcalD7oKYNX0QfAnPW77l4ajn.woff2",latin:"https://fonts.gstatic.com/s/frankruhllibre/v21/j8_w6_fAw7jrcalD7oKYNX0QfAnPW7Dl4Q.woff2"},600:{hebrew:"https://fonts.gstatic.com/s/frankruhllibre/v21/j8_w6_fAw7jrcalD7oKYNX0QfAnPW7Ll4ajn.woff2","latin-ext":"https://fonts.gstatic.com/s/frankruhllibre/v21/j8_w6_fAw7jrcalD7oKYNX0QfAnPW77l4ajn.woff2",latin:"https://fonts.gstatic.com/s/frankruhllibre/v21/j8_w6_fAw7jrcalD7oKYNX0QfAnPW7Dl4Q.woff2"},700:{hebrew:"https://fonts.gstatic.com/s/frankruhllibre/v21/j8_w6_fAw7jrcalD7oKYNX0QfAnPW7Ll4ajn.woff2","latin-ext":"https://fonts.gstatic.com/s/frankruhllibre/v21/j8_w6_fAw7jrcalD7oKYNX0QfAnPW77l4ajn.woff2",latin:"https://fonts.gstatic.com/s/frankruhllibre/v21/j8_w6_fAw7jrcalD7oKYNX0QfAnPW7Dl4Q.woff2"},800:{hebrew:"https://fonts.gstatic.com/s/frankruhllibre/v21/j8_w6_fAw7jrcalD7oKYNX0QfAnPW7Ll4ajn.woff2","latin-ext":"https://fonts.gstatic.com/s/frankruhllibre/v21/j8_w6_fAw7jrcalD7oKYNX0QfAnPW77l4ajn.woff2",latin:"https://fonts.gstatic.com/s/frankruhllibre/v21/j8_w6_fAw7jrcalD7oKYNX0QfAnPW7Dl4Q.woff2"},900:{hebrew:"https://fonts.gstatic.com/s/frankruhllibre/v21/j8_w6_fAw7jrcalD7oKYNX0QfAnPW7Ll4ajn.woff2","latin-ext":"https://fonts.gstatic.com/s/frankruhllibre/v21/j8_w6_fAw7jrcalD7oKYNX0QfAnPW77l4ajn.woff2",latin:"https://fonts.gstatic.com/s/frankruhllibre/v21/j8_w6_fAw7jrcalD7oKYNX0QfAnPW7Dl4Q.woff2"}}}}),l="Frank Ruhl Libre",r=(t,n)=>((t,n,f)=>{const a=[],l=n?[n]:Object.keys(t.fonts);for(const r of l){if("undefined"===typeof FontFace)continue;if(!t.fonts[r])throw new Error(`The font ${t.fontFamily} does not have a style ${r}`);const n=f?.weights??Object.keys(t.fonts[r]);for(const l of n){if(!t.fonts[r][l])throw new Error(`The font ${t.fontFamily} does not  have a weight ${l} in style ${r}`);const n=f?.subsets??Object.keys(t.fonts[r][l]);for(const e of n){let n=t.fonts[r]?.[l]?.[e];if(!n)throw new Error(`weight: ${l} subset: ${e} is not available for '${t.fontFamily}'`);let i=`${t.fontFamily}-${r}-${l}-${e}`;const c=s[i];if(c){a.push(c);continue}const w=(0,o.IH)(`Fetching ${t.fontFamily} font ${JSON.stringify({style:r,weight:l,subset:e})}`),h=new FontFace(t.fontFamily,`url(${n}) format('woff2')`,{weight:l,style:r,unicodeRange:t.unicodeRanges[e]}),j=h.load().then((()=>{(f?.document??document).fonts.add(h),(0,o._8)(w)})).catch((t=>{throw s[i]=void 0,t}));s[i]=j,a.push(j)}}}return{fontFamily:t.fontFamily,fonts:t.fonts,unicodeRanges:t.unicodeRanges,waitUntilDone:()=>Promise.all(a).then((()=>{}))}})(a(),t,n)}}]);
//# sourceMappingURL=329356.53df77d1.chunk.js.map