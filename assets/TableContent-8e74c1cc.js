import{j as o,a as _}from"./index-794df9b6.js";import{G as c,r as d,D as h,a as s}from"./react-common-lib-39001c55.js";import{d as w,h as f,j as y,a as v,u as x,o as k}from"./vue-common-lib-ea72eab0.js";import{_ as D}from"./index-d00075fa.js";const g=new Array(100).fill(0);let C=[{id:"1",event:"click",name:"index_1",title:"title_car",module:"module_car_item",key1:"key1"}],r=g.map((i,n)=>({...C[0],id:`00${n+1}`}));const E=[{title:"埋点ID",width:100,icon:c.HeaderNumber},{title:"event_name",width:200,icon:c.HeaderString},{title:"page_name",width:200},{title:"page_title",width:200},{title:"module_name",width:200},{title:"key1",width:200}];function R([i,n]){const e=r[n];switch(i){case 0:return{kind:s.RowID,data:e.id,allowOverlay:!1,displayData:e.id};case 1:return{kind:s.Text,data:e.event,allowOverlay:!0,displayData:e.event,hasMenu:!0};case 2:return{kind:s.Text,data:e.name,allowOverlay:!0,displayData:e.name};case 3:return{kind:s.Text,data:e.title,allowOverlay:!0,displayData:e.title};case 4:return{kind:s.Text,data:e.module,allowOverlay:!0,displayData:e.module};case 5:return{kind:s.Text,data:e.key1,allowOverlay:!0,displayData:e.key1};default:return{}}}function T(){const i=d.useRef(null),[n,e]=d.useState({width:500,height:300}),{width:l,height:u}=n;return d.useEffect(()=>{const t=()=>{const a=i.current.parentElement.parentElement;if(a){const{width:m,height:p}=a.getBoundingClientRect();e({width:m-12,height:p-12})}};return t(),window.addEventListener("resize",t,!1),()=>{window.removeEventListener("resize",t,!1)}},[]),o.jsxs("div",{ref:i,children:[o.jsx(h,{width:l,height:u,columns:E,getCellContent:R,rows:r.length,rowMarkers:"both",onCellEdited:(t,a)=>{switch(t[0]){case 1:return r[t[1]].event=a.data;case 2:return r[t[1]].name=a.data;case 3:return r[t[1]].title=a.data;case 4:return r[t[1]].module=a.data;case 5:return r[t[1]].key1=a.data}}}),o.jsx("div",{id:"portal",style:{position:"fixed",left:0,top:0,zIndex:9999}})]})}const I={class:"data-source-content-wrapper"},O={class:"data-source-render"},B=w({__name:"TableContent",setup(i){const n=_(T);return(e,l)=>(k(),f("div",I,[y("div",O,[v(x(n))])]))}});const S=D(B,[["__scopeId","data-v-a23e654c"]]);export{S as default};
