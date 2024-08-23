import{c as X,r as _,s as _e}from"./react-common-lib-39001c55.js";function me(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t}var re;(function(e){e.event="event",e.props="prop"})(re||(re={}));function z(){}function Te(e){var r,t=void 0;return function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return r&&n.length===r.length&&n.every(function(i,l){return i===r[l]})||(r=n,t=e.apply(void 0,n)),t}}function te(e){return!!(e||"").match(/\d/)}function Y(e){return e==null}function Be(e){return typeof e=="number"&&isNaN(e)}function he(e){return Y(e)||Be(e)||typeof e=="number"&&!isFinite(e)}function Se(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function Fe(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function je(e,r,t){var n=Fe(t),a=e.search(/[1-9]/);return a=a===-1?e.length:a,e.substring(0,a)+e.substring(a,e.length).replace(n,"$1"+r)}function Le(e){var r=_.useRef(e);r.current=e;var t=_.useRef(function(){for(var n=[],a=arguments.length;a--;)n[a]=arguments[a];return r.current.apply(r,n)});return t.current}function fe(e,r){r===void 0&&(r=!0);var t=e[0]==="-",n=t&&r;e=e.replace("-","");var a=e.split("."),i=a[0],l=a[1]||"";return{beforeDecimal:i,afterDecimal:l,hasNegation:t,addNegation:n}}function Me(e){if(!e)return e;var r=e[0]==="-";r&&(e=e.substring(1,e.length));var t=e.split("."),n=t[0].replace(/^0+/,"")||"0",a=t[1]||"";return(r?"-":"")+n+(a?"."+a:"")}function pe(e,r,t){for(var n="",a=t?"0":"",i=0;i<=r-1;i++)n+=e[i]||a;return n}function ve(e,r){return Array(r+1).join(e)}function xe(e){var r=e+"",t=r[0]==="-"?"-":"";t&&(r=r.substring(1));var n=r.split(/[eE]/g),a=n[0],i=n[1];if(i=Number(i),!i)return t+a;a=a.replace(".","");var l=1+i,d=a.length;return l<0?a="0."+ve("0",Math.abs(l))+a:l>=d?a=a+ve("0",l-d):a=(a.substring(0,l)||"0")+"."+a.substring(l),t+a}function se(e,r,t){if(["","-"].indexOf(e)!==-1)return e;var n=(e.indexOf(".")!==-1||t)&&r,a=fe(e),i=a.beforeDecimal,l=a.afterDecimal,d=a.hasNegation,h=parseFloat("0."+(l||"0")),b=l.length<=r?"0."+l:h.toFixed(r),p=b.split("."),m=i;i&&Number(p[0])&&(m=i.split("").reverse().reduce(function(I,C,g){return I.length>g?(Number(I[0])+Number(C)).toString()+I.substring(1,I.length):C+I},p[0]));var S=pe(p[1]||"",r,t),x=d?"-":"",f=n?".":"";return""+x+m+f+S}function H(e,r){if(e.value=e.value,e!==null){if(e.createTextRange){var t=e.createTextRange();return t.move("character",r),t.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(r,r),!0):(e.focus(),!1)}}var ye=Te(function(e,r){for(var t=0,n=0,a=e.length,i=r.length;e[t]===r[t]&&t<a;)t++;for(;e[a-1-n]===r[i-1-n]&&i-n>t&&a-n>t;)n++;return{from:{start:t,end:a-n},to:{start:t,end:i-n}}}),ke=function(e,r){var t=Math.min(e.selectionStart,r);return{from:{start:t,end:e.selectionEnd},to:{start:t,end:r}}};function Pe(e,r,t){return Math.min(Math.max(e,r),t)}function le(e){return Math.max(e.selectionStart,e.selectionEnd)}function Ke(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function We(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function Ue(e){var r=e.currentValue,t=e.formattedValue,n=e.currentValueIndex,a=e.formattedValueIndex;return r[n]===t[a]}function $e(e,r,t,n,a,i,l){l===void 0&&(l=Ue);var d=a.findIndex(function(k){return k}),h=e.slice(0,d);!r&&!t.startsWith(h)&&(r=h,t=h+t,n=n+h.length);for(var b=t.length,p=e.length,m={},S=new Array(b),x=0;x<b;x++){S[x]=-1;for(var f=0,I=p;f<I;f++){var C=l({currentValue:t,lastValue:r,formattedValue:e,currentValueIndex:x,formattedValueIndex:f});if(C&&m[f]!==!0){S[x]=f,m[f]=!0;break}}}for(var g=n;g<b&&(S[g]===-1||!i(t[g]));)g++;var T=g===b||S[g]===-1?p:S[g];for(g=n-1;g>0&&S[g]===-1;)g--;var B=g===-1||S[g]===-1?0:S[g]+1;return B>T?T:n-B<T-n?B:T}function de(e,r,t,n){var a=e.length;if(r=Pe(r,0,a),n==="left"){for(;r>=0&&!t[r];)r--;r===-1&&(r=t.indexOf(!0))}else{for(;r<=a&&!t[r];)r++;r>a&&(r=t.lastIndexOf(!0))}return r===-1&&(r=a),r}function Ge(e){for(var r=Array.from({length:e.length+1}).map(function(){return!0}),t=0,n=r.length;t<n;t++)r[t]=!!(te(e[t])||te(e[t-1]));return r}function be(e,r,t,n,a,i){i===void 0&&(i=z);var l=Le(function(f,I){var C,g;return he(f)?(g="",C=""):typeof f=="number"||I?(g=typeof f=="number"?xe(f):f,C=n(g)):(g=a(f,void 0),C=n(g)),{formattedValue:C,numAsString:g}}),d=_.useState(function(){return l(Y(e)?r:e,t)}),h=d[0],b=d[1],p=function(f,I){f.formattedValue!==h.formattedValue&&b({formattedValue:f.formattedValue,numAsString:f.value}),i(f,I)},m=e,S=t;Y(e)&&(m=h.numAsString,S=!0);var x=l(m,S);return _.useMemo(function(){b(x)},[x.formattedValue]),[h,p]}function Ze(e){return e.replace(/[^0-9]/g,"")}function ze(e){return e}function qe(e){var r=e.type;r===void 0&&(r="text");var t=e.displayType;t===void 0&&(t="input");var n=e.customInput,a=e.renderText,i=e.getInputRef,l=e.format;l===void 0&&(l=ze);var d=e.removeFormatting;d===void 0&&(d=Ze);var h=e.defaultValue,b=e.valueIsNumericString,p=e.onValueChange,m=e.isAllowed,S=e.onChange;S===void 0&&(S=z);var x=e.onKeyDown;x===void 0&&(x=z);var f=e.onMouseUp;f===void 0&&(f=z);var I=e.onFocus;I===void 0&&(I=z);var C=e.onBlur;C===void 0&&(C=z);var g=e.value,T=e.getCaretBoundary;T===void 0&&(T=Ge);var B=e.isValidInputCharacter;B===void 0&&(B=te);var k=e.isCharacterSame,j=me(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),q=be(g,h,!!b,l,d,p),P=q[0],V=P.formattedValue,L=P.numAsString,W=q[1],M=_.useRef(),U=_.useRef({formattedValue:V,numAsString:L}),$=function(o,u){U.current={formattedValue:o.formattedValue,numAsString:o.value},W(o,u)},J=_.useState(!1),ee=J[0],s=J[1],c=_.useRef(null),N=_.useRef({setCaretTimeout:null,focusTimeout:null});_.useEffect(function(){return s(!0),function(){clearTimeout(N.current.setCaretTimeout),clearTimeout(N.current.focusTimeout)}},[]);var R=l,A=function(o,u){var v=parseFloat(u);return{formattedValue:o,value:u,floatValue:isNaN(v)?void 0:v}},E=function(o,u,v){o.selectionStart===0&&o.selectionEnd===o.value.length||(H(o,u),N.current.setCaretTimeout=setTimeout(function(){o.value===v&&o.selectionStart!==u&&H(o,u)},0))},O=function(o,u,v){return de(o,u,T(o),v)},Q=function(o,u,v){var w=T(u),F=$e(u,V,o,v,w,B,k);return F=de(u,F,w),F},ie=function(o){var u=o.formattedValue;u===void 0&&(u="");var v=o.input,w=o.source,F=o.event,D=o.numAsString,y;if(v){var K=o.inputValue||v.value,G=le(v);v.value=u,y=Q(K,u,G),y!==void 0&&E(v,y,u)}u!==V&&$(A(u,D),{event:F,source:w})};_.useEffect(function(){var o=U.current,u=o.formattedValue,v=o.numAsString;(V!==u||L!==v)&&$(A(V,L),{event:void 0,source:re.props})},[V,L]);var ae=c.current?le(c.current):void 0,Ne=typeof window<"u"?_.useLayoutEffect:_.useEffect;Ne(function(){var o=c.current;if(V!==U.current.formattedValue&&o){var u=Q(U.current.formattedValue,V,ae);o.value=V,E(o,u,V)}},[V]);var we=function(o,u,v){var w=u.target,F=M.current?ke(M.current,w.selectionEnd):ye(V,o),D=Object.assign(Object.assign({},F),{lastValue:V}),y=d(o,D),K=R(y);if(y=d(K,void 0),m&&!m(A(K,y))){var G=u.target,Z=le(G),ue=Q(o,V,Z);return G.value=V,E(G,ue,V),!1}return ie({formattedValue:K,numAsString:y,inputValue:o,event:u,source:v,input:u.target}),!0},oe=function(o,u){u===void 0&&(u=0);var v=o.selectionStart,w=o.selectionEnd;M.current={selectionStart:v,selectionEnd:w+u}},De=function(o){var u=o.target,v=u.value,w=we(v,o,re.event);w&&S(o),M.current=void 0},Ie=function(o){var u=o.target,v=o.key,w=u.selectionStart,F=u.selectionEnd,D=u.value;D===void 0&&(D="");var y;v==="ArrowLeft"||v==="Backspace"?y=Math.max(w-1,0):v==="ArrowRight"?y=Math.min(w+1,D.length):v==="Delete"&&(y=w);var K=0;v==="Delete"&&w===F&&(K=1);var G=v==="ArrowLeft"||v==="ArrowRight";if(y===void 0||w!==F&&!G){x(o),oe(u,K);return}var Z=y;if(G){var ue=v==="ArrowLeft"?"left":"right";Z=O(D,y,ue),Z!==y&&o.preventDefault()}else v==="Delete"&&!B(D[y])?Z=O(D,y,"right"):v==="Backspace"&&!B(D[y])&&(Z=O(D,y,"left"));Z!==y&&E(u,Z,D),x(o),oe(u,K)},Ce=function(o){var u=o.target,v=function(){var w=u.selectionStart,F=u.selectionEnd,D=u.value;if(D===void 0&&(D=""),w===F){var y=O(D,w);y!==w&&E(u,y,D)}};v(),requestAnimationFrame(function(){v()}),f(o),oe(u)},Ee=function(o){o.persist&&o.persist();var u=o.target,v=o.currentTarget;c.current=u,N.current.focusTimeout=setTimeout(function(){var w=u.selectionStart,F=u.selectionEnd,D=u.value;D===void 0&&(D="");var y=O(D,w);y!==w&&!(w===0&&F===D.length)&&E(u,y,D),I(Object.assign(Object.assign({},o),{currentTarget:v}))},0)},Re=function(o){c.current=null,clearTimeout(N.current.focusTimeout),clearTimeout(N.current.setCaretTimeout),C(o)},Ae=ee&&Ke()?"numeric":void 0,ce=Object.assign({inputMode:Ae},j,{type:r,value:V,onChange:De,onKeyDown:Ie,onMouseUp:Ce,onFocus:Ee,onBlur:Re});if(t==="text")return a?X.createElement(X.Fragment,null,a(V,j)||null):X.createElement("span",Object.assign({},j,{ref:i}),V);if(n){var Oe=n;return X.createElement(Oe,Object.assign({},ce,{ref:i}))}return X.createElement("input",Object.assign({},ce,{ref:i}))}function ge(e,r){var t=r.decimalScale,n=r.fixedDecimalScale,a=r.prefix;a===void 0&&(a="");var i=r.suffix;i===void 0&&(i="");var l=r.allowNegative,d=r.thousandsGroupStyle;if(d===void 0&&(d="thousand"),e===""||e==="-")return e;var h=ne(r),b=h.thousandSeparator,p=h.decimalSeparator,m=t!==0&&e.indexOf(".")!==-1||t&&n,S=fe(e,l),x=S.beforeDecimal,f=S.afterDecimal,I=S.addNegation;return t!==void 0&&(f=pe(f,t,!!n)),b&&(x=je(x,b,d)),a&&(x=a+x),i&&(f=f+i),I&&(x="-"+x),e=x+(m&&p||"")+f,e}function ne(e){var r=e.decimalSeparator;r===void 0&&(r=".");var t=e.thousandSeparator,n=e.allowedDecimalSeparators;return t===!0&&(t=","),n||(n=[r,"."]),{decimalSeparator:r,thousandSeparator:t,allowedDecimalSeparators:n}}function He(e,r){e===void 0&&(e="");var t=new RegExp("(-)"),n=new RegExp("(-)(.)*(-)"),a=t.test(e),i=n.test(e);return e=e.replace(/-/g,""),a&&!i&&r&&(e="-"+e),e}function Je(e,r){return new RegExp("(^-)|[0-9]|"+Se(e),r?"g":void 0)}function Qe(e,r,t){return e===""?!0:!(r!=null&&r.match(/\d/))&&!(t!=null&&t.match(/\d/))&&typeof e=="string"&&!isNaN(Number(e))}function Xe(e,r,t){var n;r===void 0&&(r=We(e));var a=t.allowNegative,i=t.prefix;i===void 0&&(i="");var l=t.suffix;l===void 0&&(l="");var d=t.decimalScale,h=r.from,b=r.to,p=b.start,m=b.end,S=ne(t),x=S.allowedDecimalSeparators,f=S.decimalSeparator,I=e[m]===f;if(te(e)&&(e===i||e===l)&&r.lastValue==="")return e;if(m-p===1&&x.indexOf(e[p])!==-1){var C=d===0?"":f;e=e.substring(0,p)+C+e.substring(p+1,e.length)}var g=function(c,N,R){var A=!1,E=!1;i.startsWith("-")?A=!1:c.startsWith("--")?(A=!1,E=!0):l.startsWith("-")&&c.length===l.length?A=!1:c[0]==="-"&&(A=!0);var O=A?1:0;return E&&(O=2),O&&(c=c.substring(O),N-=O,R-=O),{value:c,start:N,end:R,hasNegation:A}},T=g(e,p,m),B=T.hasNegation;n=T,e=n.value,p=n.start,m=n.end;var k=g(r.lastValue,h.start,h.end),j=k.start,q=k.end,P=k.value,V=e.substring(p,m);e.length&&P.length&&(j>P.length-l.length||q<i.length)&&!(V&&l.startsWith(V))&&(e=P);var L=0;e.startsWith(i)?L+=i.length:p<i.length&&(L=p),e=e.substring(L),m-=L;var W=e.length,M=e.length-l.length;e.endsWith(l)?W=M:(m>M||m>e.length-l.length)&&(W=m),e=e.substring(0,W),e=He(B?"-"+e:e,a),e=(e.match(Je(f,!0))||[]).join("");var U=e.indexOf(f);e=e.replace(new RegExp(Se(f),"g"),function(c,N){return N===U?".":""});var $=fe(e,a),J=$.beforeDecimal,ee=$.afterDecimal,s=$.addNegation;return b.end-b.start<h.end-h.start&&J===""&&I&&!parseFloat(ee)&&(e=s?"-":""),e}function Ye(e,r){var t=r.prefix;t===void 0&&(t="");var n=r.suffix;n===void 0&&(n="");var a=Array.from({length:e.length+1}).map(function(){return!0}),i=e[0]==="-";a.fill(!1,0,t.length+(i?1:0));var l=e.length;return a.fill(!1,l-n.length+1,l+1),a}function er(e){var r=ne(e),t=r.thousandSeparator,n=r.decimalSeparator,a=e.prefix;a===void 0&&(a="");var i=e.allowNegative;if(i===void 0&&(i=!0),t===n)throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: `+t+` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: `+n+` (default value for decimalSeparator is .)
     `);return a.startsWith("-")&&i&&(console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: `+a+`
      allowNegative: `+i+`
    `),i=!1),Object.assign(Object.assign({},e),{allowNegative:i})}function rr(e){e=er(e),e.decimalSeparator,e.allowedDecimalSeparators,e.thousandsGroupStyle;var r=e.suffix,t=e.allowNegative,n=e.allowLeadingZeros,a=e.onKeyDown;a===void 0&&(a=z);var i=e.onBlur;i===void 0&&(i=z);var l=e.thousandSeparator,d=e.decimalScale,h=e.fixedDecimalScale,b=e.prefix;b===void 0&&(b="");var p=e.defaultValue,m=e.value,S=e.valueIsNumericString,x=e.onValueChange,f=me(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),I=ne(e),C=I.decimalSeparator,g=I.allowedDecimalSeparators,T=function(s){return ge(s,e)},B=function(s,c){return Xe(s,c,e)},k=Y(m)?p:m,j=S??Qe(k,b,r);Y(m)?Y(p)||(j=j||typeof p=="number"):j=j||typeof m=="number";var q=function(s){return he(s)?s:(typeof s=="number"&&(s=xe(s)),j&&typeof d=="number"?se(s,d,!!h):s)},P=be(q(m),q(p),!!j,T,B,x),V=P[0],L=V.numAsString,W=V.formattedValue,M=P[1],U=function(s){var c=s.target,N=s.key,R=c.selectionStart,A=c.selectionEnd,E=c.value;if(E===void 0&&(E=""),(N==="Backspace"||N==="Delete")&&A<b.length){s.preventDefault();return}if(R!==A){a(s);return}N==="Backspace"&&E[0]==="-"&&R===b.length+1&&t&&H(c,1),d&&h&&(N==="Backspace"&&E[R-1]===C?(H(c,R-1),s.preventDefault()):N==="Delete"&&E[R]===C&&s.preventDefault()),g!=null&&g.includes(N)&&E[R]===C&&H(c,R+1);var O=l===!0?",":l;N==="Backspace"&&E[R-1]===O&&H(c,R-1),N==="Delete"&&E[R]===O&&H(c,R+1),a(s)},$=function(s){var c=L;if(c.match(/\d/g)||(c=""),n||(c=Me(c)),h&&d&&(c=se(c,d,h)),c!==L){var N=ge(c,e);M({formattedValue:N,value:c,floatValue:parseFloat(c)},{event:s,source:re.event})}i(s)},J=function(s){return s===C?!0:te(s)},ee=function(s){var c=s.currentValue,N=s.lastValue,R=s.formattedValue,A=s.currentValueIndex,E=s.formattedValueIndex,O=c[A],Q=R[E],ie=ye(N,c),ae=ie.to;return A>=ae.start&&A<ae.end&&g&&g.includes(O)&&Q===C?!0:O===Q};return Object.assign(Object.assign({},f),{value:W,valueIsNumericString:!1,isValidInputCharacter:J,isCharacterSame:ee,onValueChange:M,format:T,removeFormatting:B,getCaretBoundary:function(s){return Ye(s,e)},onKeyDown:U,onBlur:$})}function tr(e){var r=rr(e);return X.createElement(qe,Object.assign({},r))}var ar=_e("div")({name:"NumberOverlayEditorStyle",class:"n1czszh3"});function Ve(){var e,r,t;const a=(t=(r=(e=Intl.NumberFormat())==null?void 0:e.formatToParts(1.1))==null?void 0:r.find(i=>i.type==="decimal"))==null?void 0:t.value;return a??"."}function nr(){return Ve()==="."?",":"."}var ir=e=>{const{value:r,onChange:t,disabled:n,highlight:a,validatedSelection:i}=e,l=_.useRef();return _.useLayoutEffect(()=>{var d;if(i!==void 0){const h=typeof i=="number"?[i,null]:i;(d=l.current)==null||d.setSelectionRange(h[0],h[1])}},[i]),_.createElement(ar,null,_.createElement(tr,{autoFocus:!0,getInputRef:l,className:"gdg-input",onFocus:d=>d.target.setSelectionRange(a?0:d.target.value.length,d.target.value.length),disabled:n===!0,thousandSeparator:nr(),decimalSeparator:Ve(),value:Object.is(r,-0)?"-":r??"",onValueChange:t}))},ur=ir;export{ur as default};
