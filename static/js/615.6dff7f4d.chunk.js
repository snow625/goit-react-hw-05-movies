"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[615],{4615:function(e,r,n){n.r(r),n.d(r,{default:function(){return C}});var t=n(8214),a=n(1413),s=n(5861),c=n(885),i=n(501),o=n(6871),u=n(2791),v="movieCard_wrapper__t3qay",p="movieCard_poster__WP1ri",l="movieCard_wraperDescripton__MkSqg",d="movieCard_title__n-l3c",f="movieCard_userScore__89n0w",m="movieCard_Overviev__abEeh",_="movieCard_OvervievText__XzEwl",h=n(184),g=function(e){var r=e.item,n=r.title,t=r.poster_path,a=r.genres,s=r.release_date,c=r.vote_average,i=r.overview,o="https://image.tmdb.org/t/p/w600_and_h900_bestv2".concat(t),u=s.slice(0,4),g=10*c,x=a.length>0?a.map((function(e){return e.name})).join(", "):"no Ganres",w=i||"no overview ";return(0,h.jsxs)("div",{className:v,children:[(0,h.jsx)("img",{className:p,src:o,alt:n,width:"360",height:"540"}),(0,h.jsxs)("div",{className:l,children:[(0,h.jsx)("p",{className:d,children:"".concat(n," (").concat(u,")")}),(0,h.jsx)("p",{className:f,children:"User Score: ".concat(g,"%")}),(0,h.jsx)("p",{className:m,children:"Overviev"}),(0,h.jsx)("p",{className:_,children:w}),(0,h.jsx)("p",{className:m,children:"Genres"}),(0,h.jsx)("p",{className:_,children:x})]})]})};g.defaultProps={item:{genres:[{name:""}]}};var x=g,w=n(2349),Z="singlePage_wrapper__zs5XB",k="singlePage_error__dnVG-",j="singlePage_linkWrapper__pcb66",b="singlePage_link__d35l2",N="singlePage_activeLink__PjoN6",y="singlePage_btnBack__WqnLV",C=function(){var e,r=(0,o.UO)().id,n=Number(r),v=(0,u.useState)({item:{},error:null,loading:!1}),p=(0,c.Z)(v,2),l=p[0],d=p[1];(0,u.useEffect)((function(){var e=function(){var e=(0,s.Z)((0,t.Z)().mark((function e(){var r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d((function(e){return(0,a.Z)((0,a.Z)({},e),{},{loading:!0,error:!1})})),e.prev=1,e.next=4,(0,w.Pg)(n);case 4:r=e.sent,d((function(e){return(0,a.Z)((0,a.Z)({},e),{},{loading:!1,item:(0,a.Z)({},r)})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),d((function(r){return(0,a.Z)((0,a.Z)({},r),{},{loading:!1,error:e.t0})}));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();n&&e()}),[n]);var f=(0,o.s0)(),m=(null===(e=(0,o.TH)().state)||void 0===e?void 0:e.from)||"/",_=l.item,g=l.error,C=l.loading;return(0,h.jsxs)("div",{className:Z,children:[(0,h.jsx)("button",{className:y,type:"button",onClick:function(){return f(m)},children:"Back"}),g&&(0,h.jsx)("p",{className:k,children:"We are sorry, a server error occurred"}),C&&(0,h.jsx)("p",{className:k,children:"loading..."}),(null===_||void 0===_?void 0:_.id)&&(0,h.jsx)(x,{item:_}),(0,h.jsxs)("div",{className:j,children:[(0,h.jsx)(i.OL,{className:function(e){var r=e.isActive;return"".concat(r?N:b)},to:"/movies/".concat(n,"/reviews"),children:"Reviews"}),(0,h.jsx)(i.OL,{className:function(e){var r=e.isActive;return"".concat(r?N:b)},to:"/movies/".concat(n,"/cast"),children:"Cast"})]}),(0,h.jsx)(o.j3,{})]})}},2349:function(e,r,n){n.d(r,{Df:function(){return o},Pg:function(){return v},Xj:function(){return l},gI:function(){return p},vN:function(){return u}});var t=n(8214),a=n(5861),s=n(4569),c=n.n(s)().create({baseURL:"https://api.themoviedb.org/3/"}),i="1cfe036866fd8b692888cb79d359ab5e",o=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var r,n,a,s=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>0&&void 0!==s[0]?s[0]:1,e.next=3,c.get("trending/movie/day",{params:{api_key:i,page:r}});case 3:return n=e.sent,a=n.data.results,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n,a,s,o=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:1,e.next=3,c.get("search/movie",{params:{api_key:i,page:n,query:r}});case 3:return a=e.sent,s=a.data,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(r),{params:{api_key:i}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(r,"/credits"),{params:{api_key:i}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(r,"/reviews"),{params:{api_key:i}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=615.6dff7f4d.chunk.js.map