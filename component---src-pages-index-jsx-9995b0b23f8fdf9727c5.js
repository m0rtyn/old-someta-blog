(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Dtc0:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),i=n.n(r),o=n("txSG"),c=n("izhR"),a=n("rowI"),l=n("4hcz"),s=(n("qKvR"),function(){return Object(o.k)(a.d,{sx:{mb:"32px",flexDirection:"column",bg:"transparent",boxShadow:"initial"}},Object(o.k)(c.c,{sx:{width:160,mt:2,mb:4,borderRadius:"0"},title:"So Meta — Такая Мета"},Object(o.k)(l.a,{withTitle:!0})))}),u=n("rePB"),p=n("Wbzz"),b=n("snnr"),d=n.n(b),h=n("EqiM"),v=n.n(h),m=n("V8rG"),f=n.n(m);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){Object(u.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var k=o.h.h2,j=o.h.p,x={paddingTop:[2],paddingBottom:[4],paddingLeft:[4],paddingRight:[4],margin:"32px 0",border:"2px solid var(--color-dark)",borderRadius:"4px",position:"relative"},w={display:"block",color:"initial",textDecoration:"none",borderRadius:"4px",boxShadow:"4px 4px 0px 0px var(--color-gray)"},y={transitionDuration:"0.3s",transitionProperty:"box-shadow, transform, opacity",transitionTimingFunction:"ease-out",":hover, :focus, :active":{opacity:"0.9",transform:"translate(-4px)",boxShadow:"12px 12px 0px 0px var(--color-gray)"}},z={display:"inline-block",padding:[1],marginRight:[2]},E={objectFit:"cover",maxHeight:"300px"},H=function(t){var e=t.description;return e?Object(o.k)(j,null,e):null},V={article:Object(o.k)(d.a,{title:"статья"}),note:Object(o.k)(v.a,{title:"заметка"}),sequence:Object(o.k)(f.a,{title:"цепочка"})},P=function(t){var e=t.type;return e?Object(o.k)("span",{title:e,sx:{position:"absolute",top:"0",left:"0",margin:"1em",color:"var(--color-gray)"}},V[e]):null},M=function(t){var e=t.title;return Object(o.k)(k,{sx:{maxWidth:"600px"}},e)},D=function(t){var e=t.date;return e?Object(o.k)("span",{sx:{position:"absolute",right:0,top:0,margin:"1em",color:"var(--color-gray)"}},e):null},q=function(t){var e=t.tags;if(!e||0===e.length)return null;var n=e&&e.map((function(t){return"#"+t}));return Object(o.k)("div",{sx:{margin:"1em 0"}},n.map((function(t){return Object(o.k)("span",{sx:z},t)})))},R=function(t){var e=t.image,n=t.slug;if(!e)return null;var r=function(t,e,n){var r;if(t.startsWith("https://s3")){var i=t.split("?")[0];r="https://www.notion.so/image/"+encodeURIComponent(i).replace("s3.us-west","s3-us-west")}else r=t.startsWith("/image")?"https://www.notion.so"+t:t;var o=n.slice(0,8)+"-"+n.slice(8,12)+"-"+n.slice(12,16)+"-"+n.slice(16,20)+"-"+n.slice(20,32);return e?r+"?width="+e+"&table=block&id="+o:r}(e[0],1e3,n);return Object(o.k)("div",{sx:{display:"flex",justifyContent:"center"}},Object(o.k)("img",{src:r,alt:e,sx:E}))},_=function(t){var e=t.item,n=e.name,r=e.tags,i=e.publish_date,c=e.cover_image,a=e.slug,l=e.content_type,s=e.html;return Object(o.k)("article",{sx:x},Object(o.k)(R,{image:c,slug:a}),Object(o.k)(D,{date:null==i?void 0:i.startDate}),Object(o.k)(P,{type:l}),Object(o.k)("div",null,s),Object(o.k)(M,{title:n}),Object(o.k)(q,{tags:r}))},B=function(t){var e=t.item,n=e.name,r=e.tags,i=e.url,a=e.desc,l=e.publish_date,s=e.content_type,u=e.cover_image,b=e.slug;return Object(o.k)(p.Link,{to:"/"+i,sx:O(O({},w),y)},Object(o.k)(c.h,{sx:y},Object(o.k)("article",{sx:x},Object(o.k)(R,{image:u,slug:b}),Object(o.k)(D,{date:null==l?void 0:l.startDate}),Object(o.k)(P,{type:s}),Object(o.k)(M,{title:n}),Object(o.k)(H,{description:a}),Object(o.k)(q,{tags:r}))))},C=function(t){var e=t.item;return console.log("🚀 ~ BlogItem ~ item",e),"article"===e.content_type?Object(o.k)(B,{item:e}):"note"===e.content_type?Object(o.k)(_,{item:e}):null},I=function(t){var e=t.items;return e?Object(o.k)(i.a.Fragment,null,e.nodes.map((function(t){return Object(o.k)(C,{item:t})}))):null},S=(n("nq/E"),n("zzhW"));e.default=function(t){var e=t.data.allPosts;return Object(o.k)(S.a,null,Object(o.k)(s,null),Object(o.k)(I,{items:e}))}},EqiM:function(t,e,n){var r=n("q1tI");function i(t){return r.createElement("svg",t,[r.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none",key:0}),r.createElement("path",{d:"M16 4H4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99h16c1.1 0 2-.9 2-2v-8l-6-6zM4 18.01V6h11v5h5v7.01H4z",key:1})])}i.defaultProps={fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24"},t.exports=i,i.default=i},V8rG:function(t,e,n){var r=n("q1tI");function i(t){return r.createElement("svg",t,[r.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none",key:0}),r.createElement("path",{d:"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-7-1h2v-4h4V9h-4V5h-2v4H9v2h4z",key:1})])}i.defaultProps={fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24"},t.exports=i,i.default=i},snnr:function(t,e,n){var r=n("q1tI");function i(t){return r.createElement("svg",t,r.createElement("g",null,[r.createElement("rect",{fill:"none",height:"24",width:"24",key:0}),r.createElement("g",{key:1},r.createElement("path",{d:"M19,5v14H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3L19,3z"})),r.createElement("path",{d:"M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z",key:2})]))}i.defaultProps={fill:"currentColor",enableBackground:"new 0 0 24 24",height:"24",viewBox:"0 0 24 24",width:"24"},t.exports=i,i.default=i}}]);
//# sourceMappingURL=component---src-pages-index-jsx-9995b0b23f8fdf9727c5.js.map