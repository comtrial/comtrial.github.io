"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{6063:function(e,t,r){r.r(t),r.d(t,{default:function(){return R}});var a=r(1008),n=r(7294),i=r(7221),o=r(8663),l=r(7462),s=r(1597),d=r(6296),u=r(3431);var c=(0,a.Z)(s.rU,{target:"e1eg5kak7"})({name:"1mvs6jz",styles:"display:grid;grid-template-columns:3fr 1fr;border-radius:5px;box-shadow:0 0 4px rgba(0, 0, 0, 0.05);transition:0.3s box-shadow;cursor:pointer;&:hover{box-shadow:0 0 5px rgba(0, 0, 0, 0.15);}"}),p=(0,a.Z)(d.G,{target:"e1eg5kak6"})({name:"1ru4zpp",styles:"z-index:-1;object-fit:cover;width:100%;border-radius:0 5px 5px 0;opacity:0.6"}),g=(0,a.Z)("div",{target:"e1eg5kak5"})({name:"1goh00d",styles:"display:flex;flex-direction:column;padding:15px"}),f=(0,a.Z)("div",{target:"e1eg5kak4"})({name:"1apuzzv",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;font-weight:700"}),m=(0,a.Z)("div",{target:"e1eg5kak3"})({name:"12p74lh",styles:"font-size:12px;font-weight:400;opacity:0.7"}),x=(0,a.Z)("div",{target:"e1eg5kak2"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),w=(0,a.Z)("div",{target:"e1eg5kak1"})({name:"1q53kkz",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;font-size:12px;font-weight:700;opacity:0.7"}),h=(0,a.Z)("div",{target:"e1eg5kak0"})({name:"autcgj",styles:"display:-webkit-box;overflow:hidden;margin-top:10px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:4;-webkit-box-orient:vertical;font-size:13px;font-weight:400;opacity:0.7"}),y=function(e){var t=e.title,r=e.date,a=e.categories,n=e.summary,i=e.thumbnail.childImageSharp.gatsbyImageData,o=e.link;return(0,u.tZ)(c,{to:o},(0,u.tZ)(g,null,(0,u.tZ)(f,null,t),(0,u.tZ)(m,null,r),(0,u.tZ)(x,null,a.map((function(e){return(0,u.tZ)(w,{key:e},"#",e)}))),(0,u.tZ)(h,null,n)),(0,u.tZ)(p,{image:i,alt:"Post Item Image"}))},k=function(e,t){var r=(0,n.useRef)(null),a=(0,n.useRef)(null),i=(0,n.useState)(1),o=i[0],l=i[1],s=(0,n.useMemo)((function(){return t.filter((function(t){var r=t.node.frontmatter.categories;return"All"===e||r.includes(e)}))}),[e]);return(0,n.useEffect)((function(){a.current=new IntersectionObserver((function(e,t){e[0].isIntersecting&&(l((function(e){return e+1})),t.unobserve(e[0].target))}))}),[]),(0,n.useEffect)((function(){return l(1)}),[e]),(0,n.useEffect)((function(){10*o>=s.length||null===r.current||0===r.current.children.length||null===a.current||a.current.observe(r.current.children[r.current.children.length-1])}),[o,e]),{containerRef:r,postList:s.slice(0,10*o)}};var v=(0,a.Z)("div",{target:"es8e92y0"})({name:"a2sn42",styles:"display:flex;flex-direction:column;gap:3em;margin:0 auto;padding:50px 0 100px;@media (max-width: 768px){grid-template-columns:1fr;width:100%;}"}),b=function(e){var t=e.selectedCategory,r=e.posts,a=k(t,r),n=a.containerRef,i=a.postList;return(0,u.tZ)(v,{ref:n},i.map((function(e){var t=e.node,r=t.id,a=t.fields.slug,n=t.frontmatter;return(0,u.tZ)(y,(0,l.Z)({},n,{link:a,key:r}))})))},Z=r(2203),z=r(7235);var I=(0,a.Z)("div",{target:"ewcmato0"})({name:"8yturw",styles:"grid-column-start:8;grid-column-end:18;padding:0 80px;max-width:800px;min-width:650px;overflow:scroll;@media (max-width: 1200px){margin:0 auto;padding:0 80px;overflow:visible;}@media (max-width: 768px){min-width:100%;padding:0 8px;}"}),R=function(e){var t=e.location.search,r=e.data,a=r.site.siteMetadata,l=a.title,s=a.description,d=a.siteUrl,c=r.allMarkdownRemark.edges,p=r.file,g=p.childImageSharp.gatsbyImageData,f=p.publicURL,m=Z.parse(t),x="string"==typeof m.category&&m.category?m.category:"All",w=(0,n.useMemo)((function(){return c.reduce((function(e,t){return t.node.frontmatter.categories.forEach((function(t){void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})}),[]);return(0,u.tZ)(z.Z,{title:l,description:s,url:d,image:f},(0,u.tZ)(o.Z,{profileImage:g}),(0,u.tZ)(I,null,(0,u.tZ)(i.Z,{selectedCategory:x,categoryList:w}),(0,u.tZ)(b,{selectedCategory:x,posts:c})))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-7457a2ee2eb217d7ab3c.js.map