import{j as l,a as _}from"./index-2c1a41a5.js";import{G as h,r as u,D as v,a as t}from"./react-common-lib-7b7d9a11.js";import{d as b,e as D,h as x,j as k,c as O,u as g,o as y}from"./vue-common-lib-ea72eab0.js";import{_ as C}from"./index-bbd17af0.js";const E=new Array(1e6).fill(0),R=[{id:"001",name:"小葱",age:"22",isOpen:!0,hobby:["Basketball🏀","Swimming🏊"],avatar:["../../../assets/images/icon-test.png"],notes:"This is very cool 😀"},{id:"002",name:"大蒜",age:"18",isOpen:!0,hobby:["Food🍜","Swimming🏊"],avatar:["../../../assets/images/icon-test_1.png"],notes:"我是笔记我是笔记我是笔记我是笔记我是笔记我是笔记我是笔记我是笔记"},{id:"003",name:"香菜",age:"16",isOpen:!1,hobby:["Vegetable🥬"],avatar:["../../../assets/images/icon-test_2.png"],notes:"心有猛虎，细嗅蔷薇"},{id:"004",name:"小七",age:"22",isOpen:!0,hobby:["Badminton🏸"],avatar:["../../../assets/images/icon-test_4.png"],notes:" True "}],p=E.map((s,a)=>{const e=Math.floor(Math.random()*4),o=R[e];return{...o,id:`00${a}`,avatar:o.avatar}}),B=[{title:"ID",width:100,icon:h.HeaderString},{title:"姓名",width:100,icon:h.Text},{title:"年龄",width:100},{title:"状态",width:50},{title:"爱好",width:250},{title:"头像",width:50},{title:"笔记",width:500}];function I([s,a]){const e=p[a];switch(s){case 0:return{kind:t.RowID,data:e.id,allowOverlay:!1,displayData:e.id};case 1:return{kind:t.Text,data:e.name,allowOverlay:!0,displayData:e.name};case 2:return{kind:t.Number,data:e.age,allowOverlay:!0,displayData:e.age};case 3:return{kind:t.Boolean,data:e.isOpen,allowOverlay:!0,displayData:e.isOpen};case 4:return{kind:t.Bubble,data:e.hobby,allowOverlay:!0,displayData:e.hobby};case 5:return{kind:t.Image,data:e.avatar,allowOverlay:!0,displayData:e.avatar};case 6:return{kind:t.Text,data:e.notes,allowOverlay:!0,displayData:e.notes};default:return{}}}function S(){const s=u.useRef(null),[a,e]=u.useState({width:400,height:300}),{width:o,height:n}=a;u.useEffect(()=>{const i=()=>{const r=s.current.parentElement.parentElement;if(r){const{width:d,height:c}=r.getBoundingClientRect();e({width:d-12,height:c-12})}};return i(),window.addEventListener("resize",i,!1),()=>{window.removeEventListener("resize",i,!1)}},[]);const m=(i,r)=>{if(r.kind!==t.Text&&r.kind!==t.Boolean)return;const d=["id","name","age","isOpen","hobby","avatar","notes"],[c,f]=i,w=d[c];p[f][w]=r.data};return l.jsxs("div",{ref:s,children:[l.jsx(v,{width:o,height:n,columns:B,getCellContent:I,rows:p.length,onCellEdited:m,rowMarkers:"both"}),l.jsx("div",{id:"portal",style:{position:"fixed",left:0,top:0,zIndex:9999}})]})}const j={class:"data-source-content-wrapper"},T={class:"data-source-render"},z=b({__name:"DataSourceContent",setup(s){const a=D(),e=_(S);function o(n){return Array.isArray(n)?n.length>0?n[0]:void 0:n}return(n,m)=>(y(),x("div",j,[k("div",T,[(y(),O(g(e),{key:o(g(a).params.id)}))])]))}});const N=C(z,[["__scopeId","data-v-39c270fb"]]);export{N as default};
