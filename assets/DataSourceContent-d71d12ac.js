import{j as l,a as g}from"./index-4d6f3fce.js";import{G as h,r as u,D as _,a as e}from"./react-common-lib-5d0951d0.js";import{d as b,e as D,h as x,j as k,c as O,u as v,o as y}from"./vue-common-lib-ea72eab0.js";import{_ as C}from"./index-b130e6c5.js";const E=new Array(1e6).fill(0),R=[{id:"001",name:"小葱",age:"22",isOpen:!0,hobby:["Basketball🏀","Swimming🏊"],avatar:["https://i.pravatar.cc/300?img=3"],notes:"This is very cool 😀"},{id:"002",name:"大蒜",age:"18",isOpen:!0,hobby:["Food🍜","Swimming🏊"],avatar:["https://i.pravatar.cc/300?img=1"],notes:"我是笔记我是笔记我是笔记我是笔记我是笔记我是笔记我是笔记我是笔记"},{id:"003",name:"香菜",age:"16",isOpen:!1,hobby:["Vegetable🥬"],avatar:["https://i.pravatar.cc/300?img=4"],notes:"心有猛虎，细嗅蔷薇"},{id:"004",name:"小七",age:"22",isOpen:!0,hobby:["Badminton🏸"],avatar:["https://i.pravatar.cc/300?img=5"],notes:" True "}],p=E.map((r,a)=>{const t=Math.floor(Math.random()*4),o=R[t];return{...o,id:`00${a}`,avatar:o.avatar}}),B=[{title:"ID",width:100,icon:h.HeaderString},{title:"姓名",width:100,icon:h.Text},{title:"年龄",width:100},{title:"状态",width:50},{title:"爱好",width:250},{title:"头像",width:50},{title:"笔记",width:500}];function I([r,a]){const t=p[a];switch(r){case 0:return{kind:e.RowID,data:t.id,allowOverlay:!1,displayData:t.id};case 1:return{kind:e.Text,data:t.name,allowOverlay:!0,displayData:t.name};case 2:return{kind:e.Number,data:t.age,allowOverlay:!0,displayData:t.age};case 3:return{kind:e.Boolean,data:t.isOpen,allowOverlay:!0,displayData:t.isOpen};case 4:return{kind:e.Bubble,data:t.hobby,allowOverlay:!0,displayData:t.hobby};case 5:return{kind:e.Image,data:t.avatar,allowOverlay:!0,displayData:t.avatar};case 6:return{kind:e.Text,data:t.notes,allowOverlay:!0,displayData:t.notes};default:return{}}}function S(){const r=u.useRef(null),[a,t]=u.useState({width:400,height:300}),{width:o,height:n}=a;u.useEffect(()=>{const i=()=>{const s=r.current.parentElement.parentElement;if(s){const{width:c,height:d}=s.getBoundingClientRect();t({width:c-12,height:d-12})}};return i(),window.addEventListener("resize",i,!1),()=>{window.removeEventListener("resize",i,!1)}},[]);const m=(i,s)=>{if(s.kind!==e.Text&&s.kind!==e.Boolean)return;const c=["id","name","age","isOpen","hobby","avatar","notes"],[d,f]=i,w=c[d];p[f][w]=s.data};return l.jsxs("div",{ref:r,children:[l.jsx(_,{width:o,height:n,columns:B,getCellContent:I,rows:p.length,onCellEdited:m,rowMarkers:"both"}),l.jsx("div",{id:"portal",style:{position:"fixed",left:0,top:0,zIndex:9999}})]})}const j={class:"data-source-content-wrapper"},T={class:"data-source-render"},z=b({__name:"DataSourceContent",setup(r){const a=D(),t=g(S);function o(n){return Array.isArray(n)?n.length>0?n[0]:void 0:n}return(n,m)=>(y(),x("div",j,[k("div",T,[(y(),O(v(t),{key:o(v(a).params.id)}))])]))}});const N=C(z,[["__scopeId","data-v-39c270fb"]]);export{N as default};