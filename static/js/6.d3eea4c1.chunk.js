(this["webpackJsonpsocial-network-mui"]=this["webpackJsonpsocial-network-mui"]||[]).push([[6],{536:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var n=i(13),a=i(114),c=(i(1),i(30)),r=i(27),o=i(0),s=function(e){return{isAuth:e.auth.isAuth}};function l(e){return Object(r.b)(s)((function(t){var i=t.isAuth,r=Object(a.a)(t,["isAuth"]);return i?Object(o.jsx)(e,Object(n.a)({},r)):Object(o.jsx)(c.a,{to:"/login"})}))}},566:function(e,t,i){"use strict";i.r(t);var n=i(74),a=i(14),c=i(1),r=i(61),o=i(529),s=i(506),l=i(531),j=i(3),d=i(182),b=i(202),u=i.n(b),h=i(5),p=i(111),x=i(43),O=i(538),g=i.n(O),m=i(539),f=i.n(m),w=i(185),v=i.n(w),y=i(0),C=Object(h.a)("div")((function(e){var t=e.theme;return Object(j.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(p.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(p.a)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0},t.breakpoints.up("sm"),{marginLeft:t.spacing(0),width:"auto"})})),k=Object(h.a)("div")((function(e){return{padding:e.theme.spacing(0,1),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),D=Object(h.a)(x.c)((function(e){var t=e.theme;return{"& .MuiInputBase-input":{padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(3),")"),width:"100%"}}}));var I=function(e){return Object(y.jsxs)(r.a,{container:!0,item:!0,direction:"row",justifyContent:"space-between",alignItems:"center",flexWrap:"nowrap",style:{padding:"10px 15px 10px 15px"},children:[Object(y.jsx)(r.a,{item:!0,flexWrap:"nowrap",boxSizing:"border-box",xs:12,children:Object(y.jsxs)(C,{children:[Object(y.jsx)(k,{children:Object(y.jsx)(g.a,{color:"primary"})}),Object(y.jsx)(D,{onChange:function(t){return function(t){e.setSearchDialogName(t.currentTarget.value)}(t)},fullWidth:!0,placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})]})}),Object(y.jsx)(r.a,{item:!0,children:Object(y.jsxs)(r.a,{container:!0,item:!0,direction:"row",justifyContent:"space-between",flexWrap:"nowrap",alignItems:"center",children:[Object(y.jsx)(r.a,{item:!0,children:Object(y.jsx)(d.a,{size:"small","aria-label":"show 4 new mails",color:"inherit",children:Object(y.jsx)(f.a,{color:"primary"})})}),Object(y.jsx)(r.a,{item:!0,children:Object(y.jsx)(d.a,{size:"small","aria-label":"show 17 new notifications",color:"inherit",children:Object(y.jsx)(v.a,{color:"primary"})})}),Object(y.jsx)(r.a,{item:!0,children:Object(y.jsx)(d.a,{size:"small",edge:"end","aria-label":"account of current user","aria-haspopup":"true",color:"inherit",children:Object(y.jsx)(u.a,{color:"primary"})})})]})})]})},S=i(29),A=i(523),L=i(572),z=i(460),M=i(504),W=i(148),P=i(119),R=i(13),T=i(114),B=i(532),F=i(568),J=i(569),N=i(570),E=i(571),Y=i(540),q=i.n(Y),G=i(541),H=i.n(G),K=Object(h.a)(F.a)((function(e){var t=e.theme;return{"& .MuiDialogContent-root":{padding:t.spacing(2)},"& .MuiDialogActions-root":{padding:t.spacing(1)}}})),Q=function(e){var t=e.children,i=e.onClose,n=Object(T.a)(e,["children","onClose"]);return Object(y.jsxs)(J.a,Object(R.a)(Object(R.a)({sx:{m:0,p:2}},n),{},{children:[t,i?Object(y.jsx)(d.a,{"aria-label":"close",onClick:i,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:Object(y.jsx)(q.a,{})}):null]}))};function U(e){var t=c.useState(!1),i=Object(a.a)(t,2),n=i[0],r=i[1],o=function(){r(!1)};return Object(y.jsxs)("div",{children:[Object(y.jsx)(d.a,{onClick:function(){r(!0)},edge:"end",color:"secondary",children:Object(y.jsx)(H.a,{})}),Object(y.jsxs)(K,{onClose:o,"aria-labelledby":"customized-dialog-title",open:n,children:[Object(y.jsx)(Q,{id:"customized-dialog-title",onClose:o,children:"Delete all messages"}),Object(y.jsxs)(N.a,{dividers:!0,children:[Object(y.jsxs)(W.a,{gutterBottom:!0,children:["Are you sure you want to ",Object(y.jsx)("b",{children:"delete your entire message history"})," with this user?"]}),Object(y.jsx)(W.a,{gutterBottom:!0,children:"This can't be undone."})]}),Object(y.jsxs)(E.a,{children:[Object(y.jsx)(B.a,{autoFocus:!0,onClick:o,children:"Cancel"}),Object(y.jsx)(B.a,{variant:"outlined",color:"secondary",onClick:function(){e.deleteDialog(e.dialogID)},children:"Delete"})]})]})]})}var V=Object(h.a)(A.a)((function(e){e.theme;return{"& .MuiListItemSecondaryAction-root":{visibility:"hidden"},"&:hover":{".MuiListItemSecondaryAction-root":{visibility:"visible"}}}}));var X=function(e){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(V,{secondaryAction:Object(y.jsx)(U,{dialogID:e.id,deleteDialog:e.deleteDialog}),children:Object(y.jsxs)(S.b,{to:"/dialogs/".concat(e.id),style:{textDecoration:"none",color:"inherit",display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[Object(y.jsx)(L.a,{children:Object(y.jsx)(z.a,{alt:"Tony Stark",src:"https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png",sx:{width:50,height:50}})}),Object(y.jsx)(M.a,{style:{paddingLeft:"15px"},primary:e.name,secondary:"Secondary text"}),Object(y.jsx)(W.a,{variant:"caption",children:Object(P.a)()})]})}),Object(y.jsx)(s.a,{})]})},Z=Object(h.a)(r.a)({height:"90vh ",flexDirection:"column",flexWrap:"nowrap",overflow:"auto",overflowY:"visible","&::-webkit-scrollbar":{width:"5px"},"&::-webkit-scrollbar-thumb":{background:"#3f51b5",borderRadius:"5px"}});var $=function(e){var t=Object(c.useState)(""),i=Object(a.a)(t,2),n=i[0],j=i[1],d=e.dialogsPage.dialogs.map((function(t){return Object(y.jsx)(X,{id:t.id,name:t.name,deleteDialog:e.deleteDialog},t.id)})).filter((function(e){return e.props.name.toLowerCase().includes(n.toLowerCase())}));return Object(y.jsx)(r.a,{item:!0,xs:12,md:12,lg:9,children:Object(y.jsx)(o.a,{elevation:4,children:Object(y.jsxs)(Z,{children:[Object(y.jsxs)(r.a,{item:!0,children:[Object(y.jsx)(I,{setSearchDialogName:j}),Object(y.jsx)(s.a,{})]}),Object(y.jsx)(r.a,{item:!0,wrap:"nowrap",children:Object(y.jsx)(l.a,{style:{paddingTop:0},children:d})})]})})})},_=i(27),ee=i(32),te=i(536);t.default=Object(ee.d)(Object(_.b)((function(e){return{dialogsPage:e.dialogPage}}),(function(e){return{sendMessage:function(t){e(Object(n.e)(t))},deleteDialog:function(t){e(Object(n.a)(t))}}})),te.a)($)}}]);
//# sourceMappingURL=6.d3eea4c1.chunk.js.map