import{_ as t,o,c as a,k as e,a as s}from"./chunks/framework.8801f029.js";const f=JSON.parse('{"title":"NestJS","description":"","frontmatter":{},"headers":[],"relativePath":"documents/backend/nodejs/nestjs.md","filePath":"documents/backend/nodejs/nestjs.md","lastUpdated":1714807960000}'),l={name:"documents/backend/nodejs/nestjs.md"},d=e("h1",{id:"nestjs",tabindex:"-1"},[s("NestJS "),e("a",{class:"header-anchor",href:"#nestjs","aria-label":'Permalink to "NestJS"'},"​")],-1),r=e("h2",{id:"有两个-module-一个是-amodule-一个是-bmodule-如果想在-a-controler-ts-中使用-b-service-ts-中的方法-可以这样做",tabindex:"-1"},[s("有两个 module，一个是 AModule, 一个是 BModule, 如果想在 a.controler.ts 中使用 b.service.ts 中的方法，可以这样做： "),e("a",{class:"header-anchor",href:"#有两个-module-一个是-amodule-一个是-bmodule-如果想在-a-controler-ts-中使用-b-service-ts-中的方法-可以这样做","aria-label":'Permalink to "有两个 module，一个是 AModule, 一个是 BModule, 如果想在 a.controler.ts 中使用 b.service.ts 中的方法，可以这样做："'},"​")],-1),n=e("ol",null,[e("li",null,"在 a.module.ts 的 providers 数组中添加 BService"),e("li",null,"在 a.module.ts 的 imports 数组中添加 BModule, 同时在 BModule 的 exports 数组中添加 BService"),e("li",null,"给 a.module.ts 的添加 @Global() 装饰器, 同时在 BModule 的 exports 数组中添加 BService")],-1),c=[d,r,n];function i(u,m,_,h,p,b){return o(),a("div",null,c)}const v=t(l,[["render",i]]);export{f as __pageData,v as default};