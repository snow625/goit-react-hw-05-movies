"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[241],{7241:function(r,e,t){t.r(e),t.d(e,{default:function(){return l}});var n=t(8214),a=t(1413),c=t(5861),s=t(885),u=t(2791),i=t(6871),o=t(2349),p={error:"castsPage_error__owzXG",castWrapper:"castsPage_castWrapper__Rmyq8",list:"castsPage_list__QAl9g",nameReal:"castsPage_nameReal__85WJr",item:"castsPage_item__D4Ghc"},f=t(184),l=function(){var r=(0,u.useState)({items:[],error:null,loading:!1}),e=(0,s.Z)(r,2),t=e[0],l=e[1],d=(0,i.UO)().id,m=Number(d);(0,u.useEffect)((function(){var r=function(){var r=(0,c.Z)((0,n.Z)().mark((function r(){var e,t,c;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return l((function(r){return(0,a.Z)((0,a.Z)({},r),{},{loading:!0,error:!1})})),r.prev=1,r.next=4,(0,o.gI)(m);case 4:e=r.sent,t=e.cast,c=t.length>11?t.slice(0,10):t,l((function(r){return(0,a.Z)((0,a.Z)({},r),{},{loading:!1,items:c})})),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(1),l((function(e){return(0,a.Z)((0,a.Z)({},e),{},{loading:!1,error:r.t0})}));case 13:case"end":return r.stop()}}),r,null,[[1,10]])})));return function(){return r.apply(this,arguments)}}();m&&r()}),[m]);var h=t.items,v=t.error,g=t.loading,_=h.map((function(r){var e=r.id,t=r.name,n=r.profile_path,a=r.character,c=n||"/xcaHWHQZsqxFDig9Qw6CYRVXtW2.jpg";return(0,f.jsxs)("li",{className:p.item,children:[(0,f.jsx)("img",{className:p.icon,src:"https://image.tmdb.org/t/p/w600_and_h900_bestv2".concat(c),alt:t,width:"100",height:"150"}),(0,f.jsx)("p",{className:p.nameReal,children:t}),(0,f.jsx)("p",{className:p.name,children:a})," "]},e)}));return(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{children:"Cast"}),v&&(0,f.jsx)("p",{className:p.error,children:"We are sorry, a server error occurred"}),g&&(0,f.jsx)("p",{className:p.error,children:"loading..."}),_.length>0&&(0,f.jsx)("ul",{className:p.list,children:_})]})}},2349:function(r,e,t){t.d(e,{Df:function(){return i},Pg:function(){return p},Xj:function(){return l},gI:function(){return f},vN:function(){return o}});var n=t(8214),a=t(5861),c=t(4569),s=t.n(c)().create({baseURL:"https://api.themoviedb.org/3/"}),u="1cfe036866fd8b692888cb79d359ab5e",i=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){var e,t,a,c=arguments;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:1,r.next=3,s.get("trending/movie/day",{params:{api_key:u,page:e}});case 3:return t=r.sent,a=t.data.results,r.abrupt("return",a);case 6:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(e){var t,a,c,i=arguments;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:1,r.next=3,s.get("search/movie",{params:{api_key:u,page:t,query:e}});case 3:return a=r.sent,c=a.data,r.abrupt("return",c);case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(e){var t,a;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("movie/".concat(e),{params:{api_key:u}});case 2:return t=r.sent,a=t.data,r.abrupt("return",a);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(e){var t,a;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("movie/".concat(e,"/credits"),{params:{api_key:u}});case 2:return t=r.sent,a=t.data,r.abrupt("return",a);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(e){var t,a;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.get("movie/".concat(e,"/reviews"),{params:{api_key:u}});case 2:return t=r.sent,a=t.data,r.abrupt("return",a);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=241.a2a3d860.chunk.js.map