(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{137:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(145);n(144);e.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null),r.a.createElement("main",{style:{maxWidth:"600px",width:"100%",minWidth:"400px",height:"100vh",padding:"2rem 1rem",display:"flex",flexDirection:"column"}},r.a.createElement("h1",null,"Алексей Никитин"),r.a.createElement("p",null,"Дизайнер, последние годы помогаю создавать приложения для профессиональных пользователей, инструменты автоматизации бизнеса и внутренних процессов."),r.a.createElement("p",null,"Работодатели: Сбербанк, ПИК-Комфорт, Руцентер, Актион-МЦФЭР, Студия Лебедева."),r.a.createElement("p",null,"Позже здесь будет мой сайт."),r.a.createElement("div",{className:"contacts"},r.a.createElement("button",{type:"button",onClick:function(){window.location.href="mailto:nikitin010@gmail.com?subject=Письмо с сайта"}},"Написать письмо"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{title:"Facebook",href:"https://www.facebook.com/threefingaz"},"fb")),r.a.createElement("li",null,r.a.createElement("a",{title:"Instagram",href:"https://www.instagram.com/al_nikitin/"},"ig")),r.a.createElement("li",null,r.a.createElement("a",{title:"Twitter",href:"https://twitter.com/_alnikitin_"},"tw")),r.a.createElement("li",null,r.a.createElement("a",{title:"GitHub",href:"https://github.com/threefingaz"},"gh"))))))}},141:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return m}),n.d(e,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(140),l=n.n(c);n.d(e,"Link",function(){return l.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var u=n(142),s=n.n(u);n.d(e,"PageRenderer",function(){return s.a});var d=n(33);n.d(e,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(t){return r.a.createElement(m.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},142:function(t,e,n){var a;t.exports=(a=n(143))&&a.default||a},143:function(t,e,n){"use strict";n.r(e);n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(54),l=n(2),u=function(t){var e=t.location,n=l.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},144:function(t,e,n){},145:function(t,e,n){"use strict";var a=n(146),r=n(0),i=n.n(r),o=n(4),c=n.n(o),l=n(147),u=n.n(l),s=n(141);function d(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,c=t.title;return i.a.createElement(s.StaticQuery,{query:m,render:function(t){var a=e||t.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=d;var m="1025518380"},146:function(t){t.exports={data:{site:{siteMetadata:{title:"Алексей Никитин",description:"Дизайнер",author:"@_alnikitin_"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-4f179fa0e0df800de4d7.js.map