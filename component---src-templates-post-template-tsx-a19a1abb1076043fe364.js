"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[133],{3330:function(t,e,i){i.r(e),i.d(e,{default:function(){return k}});var a=i(1008),n=i(7294),o=i(7235),r=i(6296),d=i(3431);var l=(0,a.Z)("div",{target:"e1st1jau2"})({name:"p5tuz0",styles:"display:flex;flex-direction:column;justify-content:center;height:200px;padding:60px 0;padding:0 20px;@media (max-width: 768px){width:100%;padding:20px 20px;}"}),p=(0,a.Z)("div",{target:"e1st1jau1"})({name:"6l48it",styles:"display:-webkit-box;overflow:hidden;overflow-wrap:break-word;text-overflow:ellipsis;white-space:normal;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:30px;font-weight:700;@media (max-width: 768px){font-size:24px;}"}),s=(0,a.Z)("div",{target:"e1st1jau0"})({name:"1on72x2",styles:"display:flex;justify-content:space-between;align-items:center;margin-top:20px;font-size:14px;font-weight:500;@media (max-width: 768px){flex-direction:column;align-items:flex-start;font-size:12px;font-weight:400;}"}),g=function(t){var e=t.title,i=t.date,a=t.categories;return(0,d.tZ)(l,null,(0,d.tZ)(p,null,e),(0,d.tZ)(s,null,(0,d.tZ)("div",null,a.join(" / ")),(0,d.tZ)("div",null,i)))};var m=(0,a.Z)("div",{target:"e1opi4mu2"})({name:"163yfv7",styles:"display:flex;flex-direction:column;position:relative;width:100%;box-sizing:border-box;overflow:hidden;@media (max-width: 1200px){}@media (max-width: 768px){}"}),c=(0,a.Z)("div",{target:"e1opi4mu1"})({name:"1j4frpp",styles:"width:100%;padding:20px 0;object-fit:cover;overflow:hidden"}),u=(0,a.Z)((function(t){return(0,d.tZ)(r.G,t)}),{target:"e1opi4mu0"})({name:"1pkizp7",styles:"z-index:-1;border-radius:5px;background-size:contain;object-fit:contain;@media (max-width: 768px){}"}),x=function(t){var e=t.title,i=t.date,a=t.categories,n=t.thumbnail;return(0,d.tZ)(m,null,(0,d.tZ)(c,null,(0,d.tZ)(u,{image:n,alt:"thumbnail"})),(0,d.tZ)(g,{title:e,date:i,categories:a}))};var h=(0,a.Z)("div",{target:"e1ijh0y10"})({name:"191i236",styles:"display:flex;flex-direction:column;width:100%;word-break:break-all;box-sizing:border-box;img{display:block;max-height:500px;width:auto;margin:0 auto;padding:0 20px;object-fit:cover;}span+em{display:block;text-align:center;font-size:12px;}line-height:2.4;font-size:14px;font-weight:400;color:#343a40!important;p{padding:3px 0;color:#343a40!important;}h1,h2,h3,h4{font-weight:600;}*+h1,*+h2,*+h3,*+h3{margin-top:40px;}h1{font-size:22px;font-weight:600;}h2{font-size:20px;font-weight:600;}h3{font-size:18px;font-weight:600;}h4{font-size:16px;font-weight:600;}blockquote{margin:30px 0;padding:5px 15px;border-left:1px solid #000000;font-weight:800;}ol,ul{margin-left:20px;padding:24px 0;}hr{border:0.8px solid rgb(210, 210, 210);background:rgb(210, 210, 210);margin-bottom:30px;}a{color:#4263eb;text-decoration:underline;}pre[class*='language-']{margin:30px 0;padding:15px;font-size:13px;font-family:Roboto;background:rgba(240, 240, 240, 0.5);border-radius:4px;::-webkit-scrollbar-thumb{background:rgba(245, 255, 255, 0.5);border-radius:4px;}}@media (max-width: 768px){width:100%;padding:20px 20px;font-size:14px;h1{font-size:20px;}h2{font-weight:700;font-size:18px;}h3{font-weight:600;font-size:16px;}h4{font-weight:600;font-size:14px;}img{width:auto;max-height:300px;padding:0 10vw;object-fit:cover;}hr{margin-bottom:30px;}}"}),f=function(t){var e=t.html;return(0,d.tZ)(h,{dangerouslySetInnerHTML:{__html:e}})};var b=(0,a.Z)("div",{target:"e1gqsjds0"})({name:"124boz7",styles:"padding:120px 0;@media (max-width: 768px){padding:0 20px;}"}),w=function(){var t=(0,n.createRef)();return(0,n.useEffect)((function(){if(null!==t.current){var e=document.createElement("script"),i={src:"https://utteranc.es/client.js",repo:"comtrial/comtrial.github.io","issue-term":"pathname",label:"Comment",theme:"github-light",crossorigin:"anonymous",async:"true"};Object.entries(i).forEach((function(t){var i=t[0],a=t[1];e.setAttribute(i,a)})),t.current.appendChild(e)}}),[]),(0,d.tZ)(b,{ref:t})},v=i(8663),y=i(7221),Z=i(2203);var z=(0,a.Z)("div",{target:"e6b6ljm0"})({name:"484jn9",styles:"grid-column-start:9;grid-column-end:17;min-width:600px;max-width:800px;width:100%;overflow:scroll;@media (max-width: 1200px){margin:0 auto;padding:0 80px;overflow:visible;.Introduction{height:0;}}@media (max-width: 768px){min-width:100%;padding:0;}"}),k=function(t){var e=t.data.allMarkdownRemark.edges,i=t.location.href,a=e[0].node,r=a.html,l=a.frontmatter,p=l.title,s=l.summary,g=l.date,m=l.categories,c=l.thumbnail,u=c.childImageSharp.gatsbyImageData,h=c.publicURL,b=Z.parse(i),k="string"==typeof b.category&&b.category?b.category:"All",j=(0,n.useMemo)((function(){return e.reduce((function(t,e){return e.node.frontmatter.categories.forEach((function(e){void 0===t[e]?t[e]=1:t[e]++})),t.All++,t}),{All:0})}),[]);return(0,d.tZ)(o.Z,{title:p,description:s,url:i,image:h},(0,d.tZ)(v.Z,{profileImage:u}),(0,d.tZ)(z,null,(0,d.tZ)(y.Z,{selectedCategory:k,categoryList:j}),(0,d.tZ)(x,{title:p,date:g,categories:m,thumbnail:u}),(0,d.tZ)(f,{html:r}),(0,d.tZ)(w,null)))}}}]);
//# sourceMappingURL=component---src-templates-post-template-tsx-a19a1abb1076043fe364.js.map