"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[133],{3330:function(t,e,i){i.r(e),i.d(e,{default:function(){return k}});var a=i(1008),n=i(7294),r=i(7235),o=i(7462),l=i(6296),d=i(3431);var s=(0,a.Z)("div",{target:"e1st1jau3"})({name:"pi0ogl",styles:"display:flex;flex-direction:column;justify-content:center;height:100%;padding:60px 0;color:#ffffff;padding:0 20px;@media (max-width: 768px){width:100%;padding:40px 20px;}"}),p=(0,a.Z)("div",{target:"e1st1jau1"})({name:"1uhxa3t",styles:"display:-webkit-box;overflow:hidden;overflow-wrap:break-word;text-overflow:ellipsis;white-space:normal;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:35px;font-weight:800;@media (max-width: 768px){font-size:30px;}"}),h=(0,a.Z)("div",{target:"e1st1jau0"})({name:"1ywcxr",styles:"display:flex;justify-content:space-between;align-items:center;margin-top:10px;font-size:16px;font-weight:700;@media (max-width: 768px){flex-direction:column;align-items:flex-start;font-size:15px;font-weight:400;}"}),g=function(t){var e=t.title,i=t.date,a=t.categories;return(0,d.tZ)(s,null,(0,d.tZ)(p,null,e),(0,d.tZ)(h,null,(0,d.tZ)("div",null,a.join(" / ")),(0,d.tZ)("div",null,i)))};var x=(0,a.Z)("div",{target:"e1opi4mu1"})({name:"xkc4d2",styles:"position:relative;width:100%;height:300px;margin-top:80px;box-sizing:border-box;overflow:hidden;@media (max-width: 1200px){}@media (max-width: 768px){height:20vh;margin-top:12px;}"}),m=(0,a.Z)((function(t){return(0,d.tZ)(l.G,(0,o.Z)({},t,{style:{position:"absolute"}}))}),{target:"e1opi4mu0"})({name:"1hvpgow",styles:"z-index:-1;width:100%;height:22vh;object-fit:cover;@media (max-width: 768px){height:100%;}"}),u=function(t){var e=t.title,i=t.date,a=t.categories,n=t.thumbnail;return(0,d.tZ)(x,null,(0,d.tZ)(m,{image:n,alt:"thumbnail"}),(0,d.tZ)(g,{title:e,date:i,categories:a}))};var c=(0,a.Z)("div",{target:"e1ijh0y11"})({name:"145yynq",styles:"display:flex;flex-direction:column;width:100%;word-break:break-all;box-sizing:border-box;img{width:100%;padding:0 5vw;object-fit:cover;}.language-swift{border-radius:8px;font-size:12px;}.language-text{border-radius:8px;font-size:12px;}line-height:2;font-size:16px;font-weight:500;p{padding:3px 0;}h1,h2,h3,h4{font-weight:600;margin-bottom:30px;}*+h1,*+h2,*+h3,*+h3{margin-top:80px;}hr+h1,hr+h2,hr+h3,hr+h3{margin-top:0;}h1{font-size:26px;}h2{font-weight:800;font-size:23px;}h3{font-weight:800;font-size:20px;}h4{font-weight:600;font-size:18px;}blockquote{margin:30px 0;padding:5px 15px;border-left:1px solid #000000;font-weight:800;}ol,ul{margin-left:20px;padding:30px 0;}hr{border:1px solid #000000;margin:100px 0;}a{color:#4263eb;text-decoration:underline;}pre[class*='language-']{margin:30px 0;padding:15px;font-size:14px;::-webkit-scrollbar-thumb{background:rgba(255, 255, 255, 0.5);border-radius:3px;}}code[class*='language-'],pre[class*='language-']{tab-size:2;}@media (max-width: 768px){width:100%;padding:80px 20px;line-height:1.6;font-size:16px;h1{font-size:23px;}h2{font-weight:800;font-size:20px;}h3{font-weight:800;font-size:18px;}h4{font-weight:600;font-size:16px;}img{width:100%;padding:0 10vw;object-fit:cover;}hr{margin:50px 0;}}"}),f=function(t){var e=t.html;return(0,d.tZ)(c,{dangerouslySetInnerHTML:{__html:e}})};var w=(0,a.Z)("div",{target:"e1gqsjds0"})({name:"124boz7",styles:"padding:120px 0;@media (max-width: 768px){padding:0 20px;}"}),b=function(){var t=(0,n.createRef)();return(0,n.useEffect)((function(){if(null!==t.current){var e=document.createElement("script"),i={src:"https://utteranc.es/client.js",repo:"comtrial/comtrial.github.io","issue-term":"pathname",label:"Comment",theme:"github-light",crossorigin:"anonymous",async:"true"};Object.entries(i).forEach((function(t){var i=t[0],a=t[1];e.setAttribute(i,a)})),t.current.appendChild(e)}}),[]),(0,d.tZ)(w,{ref:t})},v=i(8663),y=i(7221),Z=i(2203);var z=(0,a.Z)("div",{target:"e6b6ljm0"})({name:"mzcnd4",styles:"grid-column-start:9;grid-column-end:17;min-width:650px;max-width:800px;width:100%;overflow:scroll;@media (max-width: 1200px){margin:0 auto;padding:0 80px;overflow:visible;.Introduction{height:0;}}@media (max-width: 768px){min-width:100%;padding:0;}"}),k=function(t){var e=t.data.allMarkdownRemark.edges,i=t.location.href,a=e[0].node,o=a.html,l=a.frontmatter,s=l.title,p=l.summary,h=l.date,g=l.categories,x=l.thumbnail,m=x.childImageSharp.gatsbyImageData,c=x.publicURL,w=Z.parse(i),k="string"==typeof w.category&&w.category?w.category:"All",j=(0,n.useMemo)((function(){return e.reduce((function(t,e){return e.node.frontmatter.categories.forEach((function(e){void 0===t[e]?t[e]=1:t[e]++})),t.All++,t}),{All:0})}),[]);return(0,d.tZ)(r.Z,{title:s,description:p,url:i,image:c},(0,d.tZ)(v.Z,{profileImage:m}),(0,d.tZ)(z,null,(0,d.tZ)(y.Z,{selectedCategory:k,categoryList:j}),(0,d.tZ)(u,{title:s,date:h,categories:g,thumbnail:m}),(0,d.tZ)(f,{html:o}),(0,d.tZ)(b,null)))}}}]);
//# sourceMappingURL=component---src-templates-post-template-tsx-054e327f19446beba888.js.map