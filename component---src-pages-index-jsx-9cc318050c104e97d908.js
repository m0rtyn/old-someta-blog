(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"4XAo":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("txSG"),a=(n("qKvR"),function(t){var e=t.date;return e?Object(r.k)("span",{sx:{position:"absolute",display:"inline-block",right:0,top:0,m:2,color:"#000a",backgroundColor:"#fffa",borderRadius:"card",px:1}},e):null})},"6bf1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("txSG"),a=n("nere"),c=(n("qKvR"),{display:"inline-block",padding:[1],marginRight:[2],fontSize:[2]}),i=function(t){var e=t.tags;if(!e||0===e.length)return null;var n=e&&e.map((function(t){return"#"+t}));return Object(r.k)("div",{sx:{margin:"1em 0"}},n.map((function(t){var e=Object(a.a)(t);return Object(r.k)("span",{key:e,sx:c},t)})))}},"8W3x":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t,e,n){var r;if(t.startsWith("https://s3")){var a=t.split("?")[0];r="https://www.notion.so/image/"+encodeURIComponent(a).replace("s3.us-west","s3-us-west")}else r=t.startsWith("/image")?"https://www.notion.so"+t:t;var c=n.slice(0,8)+"-"+n.slice(8,12)+"-"+n.slice(12,16)+"-"+n.slice(16,20)+"-"+n.slice(20,32);return e?r+"?width="+e+"&table=block&id="+c:r}},Dtc0:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n.n(r),c=n("txSG"),i=n("izhR"),o=n("rowI"),l=n("4hcz"),u=(n("qKvR"),function(){return Object(c.k)(o.d,{sx:{mb:"32px",flexDirection:"column",bg:"transparent",boxShadow:"initial"}},Object(c.k)(i.c,{sx:{width:160,mt:2,mb:4,borderRadius:"0"},title:"So Meta — Такая Мета"},Object(c.k)(l.a,{withTitle:!0})))}),s=c.h.p,b=function(t){var e=t.description;return e?Object(c.k)(s,null,e):null},p=(n("9eSz"),n("mwIZ"),n("8W3x")),d=[183,366],f={width:"100%",backdropFilter:"blur(9px) contrast(100%)",WebkitBackdropFilter:"blur(9px) contrast(100%)",maxHeight:d,minHeight:d,objectFit:"scale-down",objectPosition:"50% 50%"},k=function(t){var e=t.image,n=t.slug;if(!e)return null;var r=Object(p.a)(e[0],549,n),a=Object(p.a)(e[0],100,n);return Object(c.k)("div",{css:"\n        @supports (backdrop-filter: blur(5px)) {\n          background-color: rgba(255, 255, 255, 0);\n        }\n        background-color: rgba(40, 40, 40, 0.7);\n      ",sx:{display:"flex",justifyContent:"center",backdropFilter:"blur(9px) contrast(100%)",WebkitBackdropFilter:"blur(9px) contrast(100%)",backgroundImage:"url("+a+")",backgroundSize:"cover",backgroundPosition:"center",maxHeight:d,mt:-2,mx:-4}},Object(c.k)("img",{src:r,alt:e,sx:f}))},h=n("4XAo"),v=n("snnr"),m=n.n(v),g=n("EqiM"),O=n.n(g),j=n("V8rG"),x=n.n(j),y=n("Wvep"),w=n.n(y),E={article:Object(c.k)(m.a,null),note:Object(c.k)(O.a,null),sequence:Object(c.k)(x.a,null),media:Object(c.k)(w.a,null)},z={article:"Статья — длинный текст с картинками",note:"Заметка — небольше 100 слов",sequence:"Цепочка — серия связанных текстов",media:"Медиа — видео, аудио или что-то не текстовое"},H=function(t){var e=t.type;return e?Object(c.k)("span",{title:z[e],sx:{position:"absolute",display:"flex",top:"0",left:"0",m:2,cursor:"help",color:"#000a",backgroundColor:"#fffa",borderRadius:"card",px:1,"&:hover":{opacity:.6}}},E[e]):null},V=c.h.h2,M=function(t){var e=t.title;return Object(c.k)(V,{sx:{maxWidth:"600px"}},e)},P=n("6bf1"),S=n("rePB"),C=n("Wbzz");function q(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?q(Object(n),!0).forEach((function(e){Object(S.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var _={p:[4],pt:[2],my:[4],border:"2px solid var(--color-dark)",borderRadius:"card",position:"relative"},I={display:"block",color:"initial",textDecoration:"none",borderRadius:"card",boxShadow:"-4px 4px 0px 0px var(--color-gray)"},R={transitionDuration:"0.3s",transitionProperty:"box-shadow, transform, opacity",transitionTimingFunction:"ease-out",":hover, :focus, :active":{opacity:"0.9",transform:"translate(8px,-8px)",boxShadow:"-12px 12px 0px 0px var(--color-gray)"}},W=function(t){var e=t.children,n=t.url,r=t.type;return!["note","media"].includes(r)&&n?Object(c.k)(C.Link,{to:"/"+n,sx:D(D({},I),R)},Object(c.k)("article",{sx:_},e)):Object(c.k)("article",{sx:_},e)},B={article:function(t){var e=t.item,n=e.name,r=e.tags,i=e.desc,o=e.publish_date,l=e.content_type,u=e.cover_image,s=e.slug;return Object(c.k)(a.a.Fragment,null,Object(c.k)(k,{image:u,slug:s}),Object(c.k)(h.a,{date:null==o?void 0:o.startDate}),Object(c.k)(H,{type:l}),Object(c.k)(M,{title:n}),Object(c.k)(b,{description:i}),Object(c.k)(P.a,{tags:r}))},note:function(t){var e=t.item,n=e.name,r=e.tags,i=e.publish_date,o=e.content_type,l=e.html;return Object(c.k)(a.a.Fragment,null,Object(c.k)(h.a,{date:null==i?void 0:i.startDate}),Object(c.k)(H,{type:o}),Object(c.k)(M,{title:n}),Object(c.k)("div",{dangerouslySetInnerHTML:{__html:l}}),Object(c.k)(P.a,{tags:r}))},media:function(t){var e=t.item,n=e.name,r=e.tags,a=e.publish_date,i=e.content_type,o=e.desc,l=e.cover_image,u=e.slug,s=e.url;return Object(c.k)("a",{className:"hover-on",rel:"noopener noreferrer",target:"_blank",href:s,sx:{display:"block",textDecoration:"none",color:"inherit"}},Object(c.k)(k,{image:l,slug:u}),Object(c.k)(h.a,{date:null==a?void 0:a.startDate}),Object(c.k)(H,{type:i}),Object(c.k)(M,{title:n}),Object(c.k)(b,{description:o}),Object(c.k)(P.a,{tags:r}))}},F=function(t){var e=t.item,n=e.content_type;if(""===n)return null;var r=B[n];return Object(c.k)(W,{type:n,url:e.url},Object(c.k)(r,{item:e}))},G=n("nere"),K=function(t){var e=t.items,n=t.limit;return e?Object(c.k)(a.a.Fragment,null,e.nodes.map((function(t,e){if(e>=n)return null;var r=Object(G.a)(t);return Object(c.k)(F,{key:r,item:t})}))):null},L=n("IcXi"),T=n("wvU8");e.default=function(t){var e=t.data.allPosts,n=a.a.useState(13),r=n[0],i=n[1],o=a.a.useCallback((function(){return i(130)}),[]);return Object(c.k)(L.a,null,Object(c.k)(u,null),Object(c.k)(K,{items:e,limit:r}),13===r?Object(c.k)(T.a,{onClick:o,sx:{fontSize:[3,4],mx:"auto",my:[3,4],display:"block"},type:"button"},"Показать больше постов"):null)}},EqiM:function(t,e,n){var r=n("q1tI");function a(t){return r.createElement("svg",t,[r.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none",key:0}),r.createElement("path",{d:"M16 4H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99h16c1.1 0 2-.9 2-2v-8l-6-6zM4 18.01V6h11v5h5v7.01H4z",key:1})])}a.defaultProps={fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24"},t.exports=a,a.default=a},V8rG:function(t,e,n){var r=n("q1tI");function a(t){return r.createElement("svg",t,[r.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none",key:0}),r.createElement("path",{d:"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-7-1h2v-4h4V9h-4V5h-2v4H9v2h4z",key:1})])}a.defaultProps={fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24"},t.exports=a,a.default=a},Wvep:function(t,e,n){var r=n("q1tI");function a(t){return r.createElement("svg",t,[r.createElement("g",{key:0},r.createElement("rect",{fill:"none",height:"24",width:"24",y:"0"})),r.createElement("g",{key:1},r.createElement("g",null,[r.createElement("polygon",{points:"9.5,7.5 9.5,16.5 16.5,12",key:0}),r.createElement("path",{d:"M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18.01H4V5.99h16V18.01z",key:1})]))])}a.defaultProps={enableBackground:"new 0 0 24 24",height:"24",viewBox:"0 0 24 24",width:"24"},t.exports=a,a.default=a},nere:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r,a,c=(r=1,a=new WeakMap,function t(e,n){return"number"==typeof e||"string"==typeof e?n?"idx-"+n:"val-"+e:a.has(e)?"uid"+a.get(e):(a.set(e,r++),t(e))})},snnr:function(t,e,n){var r=n("q1tI");function a(t){return r.createElement("svg",t,r.createElement("g",null,[r.createElement("rect",{fill:"none",height:"24",width:"24",key:0}),r.createElement("g",{key:1},r.createElement("path",{d:"M19,5v14H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3L19,3z"})),r.createElement("path",{d:"M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z",key:2})]))}a.defaultProps={fill:"currentColor",enableBackground:"new 0 0 24 24",height:"24",viewBox:"0 0 24 24",width:"24"},t.exports=a,a.default=a}}]);
//# sourceMappingURL=component---src-pages-index-jsx-9cc318050c104e97d908.js.map