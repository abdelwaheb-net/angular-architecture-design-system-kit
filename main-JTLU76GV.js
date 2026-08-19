import{a as rs}from"./chunk-AAGPM5YJ.js";import{d as Cn}from"./chunk-WWTHOZRW.js";import"./chunk-FK6H3RFT.js";import{a as lr,b as hr,c as pr,d as xn,e as En,f as gr}from"./chunk-BLU6SKGV.js";import{a as $a,b as Za,c as hi,d as yn,e as dr,f as mr,g as ur}from"./chunk-5NHWD7TX.js";import{$ as Ea,$a as D,$b as Ka,A as L,Aa as R,B as N,Ba as ce,Bb as ja,C as Ct,Ca as z,D as _a,Da as ke,Db as Ha,Dc as rr,E as ut,Ea as me,Eb as fn,Ec as or,F as Je,Fa as S,Fc as at,G as V,Ga as T,Gb as Kt,Gc as rt,H as oe,Ha as qt,Hb as Se,Hc as sr,I as ve,Ia as St,Ic as cr,J as va,Ja as O,K as Ae,Ka as Re,L as et,La as m,M as de,Ma as ee,Mb as je,N as Vt,Na as nt,Nb as Xt,O as hn,Oa as Sa,Ob as pe,P as si,Pa as Tt,Q as f,Qa as Mt,Qb as mi,R as ya,Ra as It,Rb as Yt,S as jt,Sa as he,Sb as Ua,T as wt,Ta,Tb as qe,U as xa,Ua as Ma,Ub as bn,V as kt,Va as un,Vb as _n,W as se,Wa as $t,Wb as qa,X as pn,Xa as Ia,Xb as At,Y as F,Ya as Aa,Yb as Qa,Z as X,Za as Da,_ as B,_a as ye,_b as Wa,a as Me,aa as De,ab as Ve,ac as Xa,b as Et,ba as Ht,bb as it,c as ie,ca as ci,cb as gn,d as mn,db as Ra,dc as Ya,e as ha,ea as Ca,eb as Pa,f as mt,fa as li,fb as Oa,fc as Ja,ga as wa,gb as La,gc as pi,h as pa,ha as Y,hb as Na,hc as er,i as Xe,ia as $,j as Ye,ja as Q,jc as vn,k as Be,ka as di,kb as Fa,l as ua,la as ze,lc as tr,m as Ze,ma as Ge,mb as Ba,mc as Zt,n as ga,na as P,nc as nr,o as ht,oa as c,p as pt,pa as l,q as Gt,qa as Z,r as M,ra as tt,rb as za,s as fa,sa as gt,t as oi,ta as ka,tb as Qt,u as W,v as K,vb as Wt,w as G,wa as be,wb as Ga,wc as ir,x as Ie,xa as Ut,xb as Ue,y as u,ya as C,yb as Va,z as ba,zc as ar}from"./chunk-7RAQDPE2.js";import{a as re,b as Ke,c as ma,e as as,f as dt}from"./chunk-OSQMNGTH.js";var I=(function(a){return a[a.State=0]="State",a[a.Transition=1]="Transition",a[a.Sequence=2]="Sequence",a[a.Group=3]="Group",a[a.Animate=4]="Animate",a[a.Keyframes=5]="Keyframes",a[a.Style=6]="Style",a[a.Trigger=7]="Trigger",a[a.Reference=8]="Reference",a[a.AnimateChild=9]="AnimateChild",a[a.AnimateRef=10]="AnimateRef",a[a.Query=11]="Query",a[a.Stagger=12]="Stagger",a})(I||{}),Pe="*";function fr(a,t=null){return{type:I.Sequence,steps:a,options:t}}function ui(a){return{type:I.Style,styles:a,offset:null}}var $e=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(t=0,e=0){this.totalTime=t+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}onStart(t){this._originalOnStartFns.push(t),this._onStartFns.push(t)}onDone(t){this._originalOnDoneFns.push(t),this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(t=>t()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(t){this._position=this.totalTime?t*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(t){let e=t=="start"?this._onStartFns:this._onDoneFns;e.forEach(n=>n()),e.length=0}},Dt=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(t){this.players=t;let e=0,n=0,i=0,r=this.players.length;r==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(o=>{o.onDone(()=>{++e==r&&this._onFinish()}),o.onDestroy(()=>{++n==r&&this._onDestroy()}),o.onStart(()=>{++i==r&&this._onStart()})}),this.totalTime=this.players.reduce((o,s)=>Math.max(o,s.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}init(){this.players.forEach(t=>t.init())}onStart(t){this._onStartFns.push(t)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(t=>t()),this._onStartFns=[])}onDone(t){this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(t=>t.play())}pause(){this.players.forEach(t=>t.pause())}restart(){this.players.forEach(t=>t.restart())}finish(){this._onFinish(),this.players.forEach(t=>t.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(t=>t.destroy()),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this.players.forEach(t=>t.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(t){let e=t*this.totalTime;this.players.forEach(n=>{let i=n.totalTime?Math.min(1,e/n.totalTime):1;n.setPosition(i)})}getPosition(){let t=this.players.reduce((e,n)=>e===null||n.totalTime>e.totalTime?n:e,null);return t!=null?t.getPosition():0}beforeDestroy(){this.players.forEach(t=>{t.beforeDestroy&&t.beforeDestroy()})}triggerCallback(t){let e=t=="start"?this._onStartFns:this._onDoneFns;e.forEach(n=>n()),e.length=0}},Jt="!";function br(a){return new M(3e3,!1)}function os(){return new M(3100,!1)}function ss(){return new M(3101,!1)}function cs(a){return new M(3001,!1)}function ls(a){return new M(3003,!1)}function ds(a){return new M(3004,!1)}function vr(a,t){return new M(3005,!1)}function yr(){return new M(3006,!1)}function xr(){return new M(3007,!1)}function Er(a,t){return new M(3008,!1)}function Cr(a){return new M(3002,!1)}function wr(a,t,e,n,i){return new M(3010,!1)}function kr(){return new M(3011,!1)}function Sr(){return new M(3012,!1)}function Tr(){return new M(3200,!1)}function Mr(){return new M(3202,!1)}function Ir(){return new M(3013,!1)}function Ar(a){return new M(3014,!1)}function Dr(a){return new M(3015,!1)}function Rr(a){return new M(3016,!1)}function Pr(a,t){return new M(3404,!1)}function ms(a){return new M(3502,!1)}function Or(a){return new M(3503,!1)}function Lr(){return new M(3300,!1)}function Nr(a){return new M(3504,!1)}function Fr(a){return new M(3301,!1)}function Br(a,t){return new M(3302,!1)}function zr(a){return new M(3303,!1)}function Gr(a,t){return new M(3400,!1)}function Vr(a){return new M(3401,!1)}function jr(a){return new M(3402,!1)}function Hr(a,t){return new M(3505,!1)}function Qe(a){switch(a.length){case 0:return new $e;case 1:return a[0];default:return new Dt(a)}}function _i(a,t,e=new Map,n=new Map){let i=[],r=[],o=-1,s=null;if(t.forEach(d=>{let h=d.get("offset"),p=h==o,g=p&&s||new Map;d.forEach((k,y)=>{let b=y,w=k;if(y!=="offset")switch(b=a.normalizePropertyName(b,i),w){case Jt:w=e.get(y);break;case Pe:w=n.get(y);break;default:w=a.normalizeStyleValue(y,b,w,i);break}g.set(b,w)}),p||r.push(g),s=g,o=h}),i.length)throw ms(i);return r}function wn(a,t,e,n){switch(t){case"start":a.onStart(()=>n(e&&gi(e,"start",a)));break;case"done":a.onDone(()=>n(e&&gi(e,"done",a)));break;case"destroy":a.onDestroy(()=>n(e&&gi(e,"destroy",a)));break}}function gi(a,t,e){let n=e.totalTime,i=!!e.disabled,r=kn(a.element,a.triggerName,a.fromState,a.toState,t||a.phaseName,n??a.totalTime,i),o=a._data;return o!=null&&(r._data=o),r}function kn(a,t,e,n,i="",r=0,o){return{element:a,triggerName:t,fromState:e,toState:n,phaseName:i,totalTime:r,disabled:!!o}}function xe(a,t,e){let n=a.get(t);return n||a.set(t,n=e),n}function vi(a){let t=a.indexOf(":"),e=a.substring(1,t),n=a.slice(t+1);return[e,n]}var hs=typeof document>"u"?null:document.documentElement;function Sn(a){let t=a.parentNode||a.host||null;return t===hs?null:t}function ps(a){return a.substring(1,6)=="ebkit"}var ft=null,_r=!1;function Ur(a){ft||(ft=us()||{},_r=ft.style?"WebkitAppearance"in ft.style:!1);let t=!0;return ft.style&&!ps(a)&&(t=a in ft.style,!t&&_r&&(t="Webkit"+a.charAt(0).toUpperCase()+a.slice(1)in ft.style)),t}function us(){return typeof document<"u"?document.body:null}function yi(a,t){for(;t;){if(t===a)return!0;t=Sn(t)}return!1}function xi(a,t,e){if(e)return Array.from(a.querySelectorAll(t));let n=a.querySelector(t);return n?[n]:[]}var gs=1e3,Ei="{{",fs="}}",Ci="ng-enter",Tn="ng-leave",en="ng-trigger",tn=".ng-trigger",wi="ng-animating",Mn=".ng-animating";function He(a){if(typeof a=="number")return a;let t=a.match(/^(-?[\.\d]+)(m?s)/);return!t||t.length<2?0:fi(parseFloat(t[1]),t[2])}function fi(a,t){return t==="s"?a*gs:a}function nn(a,t,e){return a.hasOwnProperty("duration")?a:_s(a,t,e)}var bs=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;function _s(a,t,e){let n,i=0,r="";if(typeof a=="string"){let o=a.match(bs);if(o===null)return t.push(br(a)),{duration:0,delay:0,easing:""};n=fi(parseFloat(o[1]),o[2]);let s=o[3];s!=null&&(i=fi(parseFloat(s),o[4]));let d=o[5];d&&(r=d)}else n=a;if(!e){let o=!1,s=t.length;n<0&&(t.push(os()),o=!0),i<0&&(t.push(ss()),o=!0),o&&t.splice(s,0,br(a))}return{duration:n,delay:i,easing:r}}function qr(a){return a.length?a[0]instanceof Map?a:a.map(t=>new Map(Object.entries(t))):[]}function Oe(a,t,e){t.forEach((n,i)=>{let r=In(i);e&&!e.has(i)&&e.set(i,a.style[r]),a.style[r]=n})}function ot(a,t){t.forEach((e,n)=>{let i=In(n);a.style[i]=""})}function Rt(a){return Array.isArray(a)?a.length==1?a[0]:fr(a):a}function $r(a,t,e){let n=t.params||{},i=ki(a);i.length&&i.forEach(r=>{n.hasOwnProperty(r)||e.push(cs(r))})}var bi=new RegExp(`${Ei}\\s*(.+?)\\s*${fs}`,"g");function ki(a){let t=[];if(typeof a=="string"){let e;for(;e=bi.exec(a);)t.push(e[1]);bi.lastIndex=0}return t}function Pt(a,t,e){let n=`${a}`,i=n.replace(bi,(r,o)=>{let s=t[o];return s==null&&(e.push(ls(o)),s=""),s.toString()});return i==n?a:i}var vs=/-+([a-z0-9])/g;function In(a){return a.replace(vs,(...t)=>t[1].toUpperCase())}function Qr(a,t){return a===0||t===0}function Wr(a,t,e){if(e.size&&t.length){let n=t[0],i=[];if(e.forEach((r,o)=>{n.has(o)||i.push(o),n.set(o,r)}),i.length)for(let r=1;r<t.length;r++){let o=t[r];i.forEach(s=>o.set(s,An(a,s)))}}return t}function Ee(a,t,e){switch(t.type){case I.Trigger:return a.visitTrigger(t,e);case I.State:return a.visitState(t,e);case I.Transition:return a.visitTransition(t,e);case I.Sequence:return a.visitSequence(t,e);case I.Group:return a.visitGroup(t,e);case I.Animate:return a.visitAnimate(t,e);case I.Keyframes:return a.visitKeyframes(t,e);case I.Style:return a.visitStyle(t,e);case I.Reference:return a.visitReference(t,e);case I.AnimateChild:return a.visitAnimateChild(t,e);case I.AnimateRef:return a.visitAnimateRef(t,e);case I.Query:return a.visitQuery(t,e);case I.Stagger:return a.visitStagger(t,e);default:throw ds(t.type)}}function An(a,t){return window.getComputedStyle(a)[t]}var ji=(()=>{class a{validateStyleProperty(e){return Ur(e)}containsElement(e,n){return yi(e,n)}getParentElement(e){return Sn(e)}query(e,n,i){return xi(e,n,i)}computeStyle(e,n,i){return i||""}animate(e,n,i,r,o,s=[],d){return new $e(i,r)}static \u0275fac=function(n){return new(n||a)};static \u0275prov=W({token:a,factory:a.\u0275fac})}return a})(),_t=class{static NOOP=new ji},vt=class{};var ys=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),Ln=class extends vt{normalizePropertyName(t,e){return In(t)}normalizeStyleValue(t,e,n,i){let r="",o=n.toString().trim();if(ys.has(e)&&n!==0&&n!=="0")if(typeof n=="number")r="px";else{let s=n.match(/^[+-]?[\d\.]+([a-z]*)$/);s&&s[1].length==0&&i.push(vr(t,n))}return o+r}};var Nn="*";function xs(a,t){let e=[];return typeof a=="string"?a.split(/\s*,\s*/).forEach(n=>Es(n,e,t)):e.push(a),e}function Es(a,t,e){if(a[0]==":"){let d=Cs(a,e);if(typeof d=="function"){t.push(d);return}a=d}let n=a.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(n==null||n.length<4)return e.push(Dr(a)),t;let i=n[1],r=n[2],o=n[3];t.push(Kr(i,o));let s=i==Nn&&o==Nn;r[0]=="<"&&!s&&t.push(Kr(o,i))}function Cs(a,t){switch(a){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(e,n)=>parseFloat(n)>parseFloat(e);case":decrement":return(e,n)=>parseFloat(n)<parseFloat(e);default:return t.push(Rr(a)),"* => *"}}var Dn=new Set(["true","1"]),Rn=new Set(["false","0"]);function Kr(a,t){let e=Dn.has(a)||Rn.has(a),n=Dn.has(t)||Rn.has(t);return(i,r)=>{let o=a==Nn||a==i,s=t==Nn||t==r;return!o&&e&&typeof i=="boolean"&&(o=i?Dn.has(a):Rn.has(a)),!s&&n&&typeof r=="boolean"&&(s=r?Dn.has(t):Rn.has(t)),o&&s}}var ro=":self",ws=new RegExp(`s*${ro}s*,?`,"g");function oo(a,t,e,n){return new Di(a).build(t,e,n)}var Xr="",Di=class{_driver;constructor(t){this._driver=t}build(t,e,n){let i=new Ri(e);return this._resetContextStyleTimingState(i),Ee(this,Rt(t),i)}_resetContextStyleTimingState(t){t.currentQuerySelector=Xr,t.collectedStyles=new Map,t.collectedStyles.set(Xr,new Map),t.currentTime=0}visitTrigger(t,e){let n=e.queryCount=0,i=e.depCount=0,r=[],o=[];return t.name.charAt(0)=="@"&&e.errors.push(yr()),t.definitions.forEach(s=>{if(this._resetContextStyleTimingState(e),s.type==I.State){let d=s,h=d.name;h.toString().split(/\s*,\s*/).forEach(p=>{d.name=p,r.push(this.visitState(d,e))}),d.name=h}else if(s.type==I.Transition){let d=this.visitTransition(s,e);n+=d.queryCount,i+=d.depCount,o.push(d)}else e.errors.push(xr())}),{type:I.Trigger,name:t.name,states:r,transitions:o,queryCount:n,depCount:i,options:null}}visitState(t,e){let n=this.visitStyle(t.styles,e),i=t.options&&t.options.params||null;if(n.containsDynamicStyles){let r=new Set,o=i||{};n.styles.forEach(s=>{s instanceof Map&&s.forEach(d=>{ki(d).forEach(h=>{o.hasOwnProperty(h)||r.add(h)})})}),r.size&&e.errors.push(Er(t.name,[...r.values()]))}return{type:I.State,name:t.name,style:n,options:i?{params:i}:null}}visitTransition(t,e){e.queryCount=0,e.depCount=0;let n=Ee(this,Rt(t.animation),e),i=xs(t.expr,e.errors);return{type:I.Transition,matchers:i,animation:n,queryCount:e.queryCount,depCount:e.depCount,options:bt(t.options)}}visitSequence(t,e){return{type:I.Sequence,steps:t.steps.map(n=>Ee(this,n,e)),options:bt(t.options)}}visitGroup(t,e){let n=e.currentTime,i=0,r=t.steps.map(o=>{e.currentTime=n;let s=Ee(this,o,e);return i=Math.max(i,e.currentTime),s});return e.currentTime=i,{type:I.Group,steps:r,options:bt(t.options)}}visitAnimate(t,e){let n=Ms(t.timings,e.errors);e.currentAnimateTimings=n;let i,r=t.styles?t.styles:ui({});if(r.type==I.Keyframes)i=this.visitKeyframes(r,e);else{let o=t.styles,s=!1;if(!o){s=!0;let h={};n.easing&&(h.easing=n.easing),o=ui(h)}e.currentTime+=n.duration+n.delay;let d=this.visitStyle(o,e);d.isEmptyStep=s,i=d}return e.currentAnimateTimings=null,{type:I.Animate,timings:n,style:i,options:null}}visitStyle(t,e){let n=this._makeStyleAst(t,e);return this._validateStyleAst(n,e),n}_makeStyleAst(t,e){let n=[],i=Array.isArray(t.styles)?t.styles:[t.styles];for(let s of i)typeof s=="string"?s===Pe?n.push(s):e.errors.push(Cr(s)):n.push(new Map(Object.entries(s)));let r=!1,o=null;return n.forEach(s=>{if(s instanceof Map&&(s.has("easing")&&(o=s.get("easing"),s.delete("easing")),!r)){for(let d of s.values())if(d.toString().indexOf(Ei)>=0){r=!0;break}}}),{type:I.Style,styles:n,easing:o,offset:t.offset,containsDynamicStyles:r,options:null}}_validateStyleAst(t,e){let n=e.currentAnimateTimings,i=e.currentTime,r=e.currentTime;n&&r>0&&(r-=n.duration+n.delay),t.styles.forEach(o=>{typeof o!="string"&&o.forEach((s,d)=>{let h=e.collectedStyles.get(e.currentQuerySelector),p=h.get(d),g=!0;p&&(r!=i&&r>=p.startTime&&i<=p.endTime&&(e.errors.push(wr(d,p.startTime,p.endTime,r,i)),g=!1),r=p.startTime),g&&h.set(d,{startTime:r,endTime:i}),e.options&&$r(s,e.options,e.errors)})})}visitKeyframes(t,e){let n={type:I.Keyframes,styles:[],options:null};if(!e.currentAnimateTimings)return e.errors.push(kr()),n;let i=1,r=0,o=[],s=!1,d=!1,h=0,p=t.steps.map(J=>{let te=this._makeStyleAst(J,e),ge=te.offset!=null?te.offset:Ts(te.styles),ae=0;return ge!=null&&(r++,ae=te.offset=ge),d=d||ae<0||ae>1,s=s||ae<h,h=ae,o.push(ae),te});d&&e.errors.push(Sr()),s&&e.errors.push(Tr());let g=t.steps.length,k=0;r>0&&r<g?e.errors.push(Mr()):r==0&&(k=i/(g-1));let y=g-1,b=e.currentTime,w=e.currentAnimateTimings,j=w.duration;return p.forEach((J,te)=>{let ge=k>0?te==y?1:k*te:o[te],ae=ge*j;e.currentTime=b+w.delay+ae,w.duration=ae,this._validateStyleAst(J,e),J.offset=ge,n.styles.push(J)}),n}visitReference(t,e){return{type:I.Reference,animation:Ee(this,Rt(t.animation),e),options:bt(t.options)}}visitAnimateChild(t,e){return e.depCount++,{type:I.AnimateChild,options:bt(t.options)}}visitAnimateRef(t,e){return{type:I.AnimateRef,animation:this.visitReference(t.animation,e),options:bt(t.options)}}visitQuery(t,e){let n=e.currentQuerySelector,i=t.options||{};e.queryCount++,e.currentQuery=t;let[r,o]=ks(t.selector);e.currentQuerySelector=n.length?n+" "+r:r,xe(e.collectedStyles,e.currentQuerySelector,new Map);let s=Ee(this,Rt(t.animation),e);return e.currentQuery=null,e.currentQuerySelector=n,{type:I.Query,selector:r,limit:i.limit||0,optional:!!i.optional,includeSelf:o,animation:s,originalSelector:t.selector,options:bt(t.options)}}visitStagger(t,e){e.currentQuery||e.errors.push(Ir());let n=t.timings==="full"?{duration:0,delay:0,easing:"full"}:nn(t.timings,e.errors,!0);return{type:I.Stagger,animation:Ee(this,Rt(t.animation),e),timings:n,options:null}}};function ks(a){let t=!!a.split(/\s*,\s*/).find(e=>e==ro);return t&&(a=a.replace(ws,"")),a=a.replace(/@\*/g,tn).replace(/@\w+/g,e=>tn+"-"+e.slice(1)).replace(/:animating/g,Mn),[a,t]}function Ss(a){return a?re({},a):null}var Ri=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(t){this.errors=t}};function Ts(a){if(typeof a=="string")return null;let t=null;if(Array.isArray(a))a.forEach(e=>{if(e instanceof Map&&e.has("offset")){let n=e;t=parseFloat(n.get("offset")),n.delete("offset")}});else if(a instanceof Map&&a.has("offset")){let e=a;t=parseFloat(e.get("offset")),e.delete("offset")}return t}function Ms(a,t){if(a.hasOwnProperty("duration"))return a;if(typeof a=="number"){let r=nn(a,t).duration;return Si(r,0,"")}let e=a;if(e.split(/\s+/).some(r=>r.charAt(0)=="{"&&r.charAt(1)=="{")){let r=Si(0,0,"");return r.dynamic=!0,r.strValue=e,r}let i=nn(e,t);return Si(i.duration,i.delay,i.easing)}function bt(a){return a?(a=re({},a),a.params&&(a.params=Ss(a.params))):a={},a}function Si(a,t,e){return{duration:a,delay:t,easing:e}}function Hi(a,t,e,n,i,r,o=null,s=!1){return{type:1,element:a,keyframes:t,preStyleProps:e,postStyleProps:n,duration:i,delay:r,totalTime:i+r,easing:o,subTimeline:s}}var rn=class{_map=new Map;get(t){return this._map.get(t)||[]}append(t,e){let n=this._map.get(t);n||this._map.set(t,n=[]),n.push(...e)}has(t){return this._map.has(t)}clear(){this._map.clear()}},Is=1,As=":enter",Ds=new RegExp(As,"g"),Rs=":leave",Ps=new RegExp(Rs,"g");function so(a,t,e,n,i,r=new Map,o=new Map,s,d,h=[]){return new Pi().buildKeyframes(a,t,e,n,i,r,o,s,d,h)}var Pi=class{buildKeyframes(t,e,n,i,r,o,s,d,h,p=[]){h=h||new rn;let g=new Oi(t,e,h,i,r,p,[]);g.options=d;let k=d.delay?He(d.delay):0;g.currentTimeline.delayNextStep(k),g.currentTimeline.setStyles([o],null,g.errors,d),Ee(this,n,g);let y=g.timelines.filter(b=>b.containsAnimation());if(y.length&&s.size){let b;for(let w=y.length-1;w>=0;w--){let j=y[w];if(j.element===e){b=j;break}}b&&!b.allowOnlyTimelineStyles()&&b.setStyles([s],null,g.errors,d)}return y.length?y.map(b=>b.buildKeyframes()):[Hi(e,[],[],[],0,k,"",!1)]}visitTrigger(t,e){}visitState(t,e){}visitTransition(t,e){}visitAnimateChild(t,e){let n=e.subInstructions.get(e.element);if(n){let i=e.createSubContext(t.options),r=e.currentTimeline.currentTime,o=this._visitSubInstructions(n,i,i.options);r!=o&&e.transformIntoNewTimeline(o)}e.previousNode=t}visitAnimateRef(t,e){let n=e.createSubContext(t.options);n.transformIntoNewTimeline(),this._applyAnimationRefDelays([t.options,t.animation.options],e,n),this.visitReference(t.animation,n),e.transformIntoNewTimeline(n.currentTimeline.currentTime),e.previousNode=t}_applyAnimationRefDelays(t,e,n){for(let i of t){let r=i?.delay;if(r){let o=typeof r=="number"?r:He(Pt(r,i?.params??{},e.errors));n.delayNextStep(o)}}}_visitSubInstructions(t,e,n){let r=e.currentTimeline.currentTime,o=n.duration!=null?He(n.duration):null,s=n.delay!=null?He(n.delay):null;return o!==0&&t.forEach(d=>{let h=e.appendInstructionToTimeline(d,o,s);r=Math.max(r,h.duration+h.delay)}),r}visitReference(t,e){e.updateOptions(t.options,!0),Ee(this,t.animation,e),e.previousNode=t}visitSequence(t,e){let n=e.subContextCount,i=e,r=t.options;if(r&&(r.params||r.delay)&&(i=e.createSubContext(r),i.transformIntoNewTimeline(),r.delay!=null)){i.previousNode.type==I.Style&&(i.currentTimeline.snapshotCurrentStyles(),i.previousNode=Fn);let o=He(r.delay);i.delayNextStep(o)}t.steps.length&&(t.steps.forEach(o=>Ee(this,o,i)),i.currentTimeline.applyStylesToKeyframe(),i.subContextCount>n&&i.transformIntoNewTimeline()),e.previousNode=t}visitGroup(t,e){let n=[],i=e.currentTimeline.currentTime,r=t.options&&t.options.delay?He(t.options.delay):0;t.steps.forEach(o=>{let s=e.createSubContext(t.options);r&&s.delayNextStep(r),Ee(this,o,s),i=Math.max(i,s.currentTimeline.currentTime),n.push(s.currentTimeline)}),n.forEach(o=>e.currentTimeline.mergeTimelineCollectedStyles(o)),e.transformIntoNewTimeline(i),e.previousNode=t}_visitTiming(t,e){if(t.dynamic){let n=t.strValue,i=e.params?Pt(n,e.params,e.errors):n;return nn(i,e.errors)}else return{duration:t.duration,delay:t.delay,easing:t.easing}}visitAnimate(t,e){let n=e.currentAnimateTimings=this._visitTiming(t.timings,e),i=e.currentTimeline;n.delay&&(e.incrementTime(n.delay),i.snapshotCurrentStyles());let r=t.style;r.type==I.Keyframes?this.visitKeyframes(r,e):(e.incrementTime(n.duration),this.visitStyle(r,e),i.applyStylesToKeyframe()),e.currentAnimateTimings=null,e.previousNode=t}visitStyle(t,e){let n=e.currentTimeline,i=e.currentAnimateTimings;!i&&n.hasCurrentStyleProperties()&&n.forwardFrame();let r=i&&i.easing||t.easing;t.isEmptyStep?n.applyEmptyStep(r):n.setStyles(t.styles,r,e.errors,e.options),e.previousNode=t}visitKeyframes(t,e){let n=e.currentAnimateTimings,i=e.currentTimeline.duration,r=n.duration,s=e.createSubContext().currentTimeline;s.easing=n.easing,t.styles.forEach(d=>{let h=d.offset||0;s.forwardTime(h*r),s.setStyles(d.styles,d.easing,e.errors,e.options),s.applyStylesToKeyframe()}),e.currentTimeline.mergeTimelineCollectedStyles(s),e.transformIntoNewTimeline(i+r),e.previousNode=t}visitQuery(t,e){let n=e.currentTimeline.currentTime,i=t.options||{},r=i.delay?He(i.delay):0;r&&(e.previousNode.type===I.Style||n==0&&e.currentTimeline.hasCurrentStyleProperties())&&(e.currentTimeline.snapshotCurrentStyles(),e.previousNode=Fn);let o=n,s=e.invokeQuery(t.selector,t.originalSelector,t.limit,t.includeSelf,!!i.optional,e.errors);e.currentQueryTotal=s.length;let d=null;s.forEach((h,p)=>{e.currentQueryIndex=p;let g=e.createSubContext(t.options,h);r&&g.delayNextStep(r),h===e.element&&(d=g.currentTimeline),Ee(this,t.animation,g),g.currentTimeline.applyStylesToKeyframe();let k=g.currentTimeline.currentTime;o=Math.max(o,k)}),e.currentQueryIndex=0,e.currentQueryTotal=0,e.transformIntoNewTimeline(o),d&&(e.currentTimeline.mergeTimelineCollectedStyles(d),e.currentTimeline.snapshotCurrentStyles()),e.previousNode=t}visitStagger(t,e){let n=e.parentContext,i=e.currentTimeline,r=t.timings,o=Math.abs(r.duration),s=o*(e.currentQueryTotal-1),d=o*e.currentQueryIndex;switch(r.duration<0?"reverse":r.easing){case"reverse":d=s-d;break;case"full":d=n.currentStaggerTime;break}let p=e.currentTimeline;d&&p.delayNextStep(d);let g=p.currentTime;Ee(this,t.animation,e),e.previousNode=t,n.currentStaggerTime=i.currentTime-g+(i.startTime-n.currentTimeline.startTime)}},Fn={},Oi=class a{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=Fn;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(t,e,n,i,r,o,s,d){this._driver=t,this.element=e,this.subInstructions=n,this._enterClassName=i,this._leaveClassName=r,this.errors=o,this.timelines=s,this.currentTimeline=d||new Bn(this._driver,e,0),s.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(t,e){if(!t)return;let n=t,i=this.options;n.duration!=null&&(i.duration=He(n.duration)),n.delay!=null&&(i.delay=He(n.delay));let r=n.params;if(r){let o=i.params;o||(o=this.options.params={}),Object.keys(r).forEach(s=>{(!e||!o.hasOwnProperty(s))&&(o[s]=Pt(r[s],o,this.errors))})}}_copyOptions(){let t={};if(this.options){let e=this.options.params;if(e){let n=t.params={};Object.keys(e).forEach(i=>{n[i]=e[i]})}}return t}createSubContext(t=null,e,n){let i=e||this.element,r=new a(this._driver,i,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(i,n||0));return r.previousNode=this.previousNode,r.currentAnimateTimings=this.currentAnimateTimings,r.options=this._copyOptions(),r.updateOptions(t),r.currentQueryIndex=this.currentQueryIndex,r.currentQueryTotal=this.currentQueryTotal,r.parentContext=this,this.subContextCount++,r}transformIntoNewTimeline(t){return this.previousNode=Fn,this.currentTimeline=this.currentTimeline.fork(this.element,t),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(t,e,n){let i={duration:e??t.duration,delay:this.currentTimeline.currentTime+(n??0)+t.delay,easing:""},r=new Li(this._driver,t.element,t.keyframes,t.preStyleProps,t.postStyleProps,i,t.stretchStartingKeyframe);return this.timelines.push(r),i}incrementTime(t){this.currentTimeline.forwardTime(this.currentTimeline.duration+t)}delayNextStep(t){t>0&&this.currentTimeline.delayNextStep(t)}invokeQuery(t,e,n,i,r,o){let s=[];if(i&&s.push(this.element),t.length>0){t=t.replace(Ds,"."+this._enterClassName),t=t.replace(Ps,"."+this._leaveClassName);let d=n!=1,h=this._driver.query(this.element,t,d);n!==0&&(h=n<0?h.slice(h.length+n,h.length):h.slice(0,n)),s.push(...h)}return!r&&s.length==0&&o.push(Ar(e)),s}},Bn=class a{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(t,e,n,i){this._driver=t,this.element=e,this.startTime=n,this._elementTimelineStylesLookup=i,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(e),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(e,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(t){let e=this._keyframes.size===1&&this._pendingStyles.size;this.duration||e?(this.forwardTime(this.currentTime+t),e&&this.snapshotCurrentStyles()):this.startTime+=t}fork(t,e){return this.applyStylesToKeyframe(),new a(this._driver,t,e||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=Is,this._loadKeyframe()}forwardTime(t){this.applyStylesToKeyframe(),this.duration=t,this._loadKeyframe()}_updateStyle(t,e){this._localTimelineStyles.set(t,e),this._globalTimelineStyles.set(t,e),this._styleSummary.set(t,{time:this.currentTime,value:e})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(t){t&&this._previousKeyframe.set("easing",t);for(let[e,n]of this._globalTimelineStyles)this._backFill.set(e,n||Pe),this._currentKeyframe.set(e,Pe);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(t,e,n,i){e&&this._previousKeyframe.set("easing",e);let r=i&&i.params||{},o=Os(t,this._globalTimelineStyles);for(let[s,d]of o){let h=Pt(d,r,n);this._pendingStyles.set(s,h),this._localTimelineStyles.has(s)||this._backFill.set(s,this._globalTimelineStyles.get(s)??Pe),this._updateStyle(s,h)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((t,e)=>{this._currentKeyframe.set(e,t)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((t,e)=>{this._currentKeyframe.has(e)||this._currentKeyframe.set(e,t)}))}snapshotCurrentStyles(){for(let[t,e]of this._localTimelineStyles)this._pendingStyles.set(t,e),this._updateStyle(t,e)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let t=[];for(let e in this._currentKeyframe)t.push(e);return t}mergeTimelineCollectedStyles(t){t._styleSummary.forEach((e,n)=>{let i=this._styleSummary.get(n);(!i||e.time>i.time)&&this._updateStyle(n,e.value)})}buildKeyframes(){this.applyStylesToKeyframe();let t=new Set,e=new Set,n=this._keyframes.size===1&&this.duration===0,i=[];this._keyframes.forEach((s,d)=>{let h=new Map([...this._backFill,...s]);h.forEach((p,g)=>{p===Jt?t.add(g):p===Pe&&e.add(g)}),n||h.set("offset",d/this.duration),i.push(h)});let r=[...t.values()],o=[...e.values()];if(n){let s=i[0],d=new Map(s);s.set("offset",0),d.set("offset",1),i=[s,d]}return Hi(this.element,i,r,o,this.duration,this.startTime,this.easing,!1)}},Li=class extends Bn{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(t,e,n,i,r,o,s=!1){super(t,e,o.delay),this.keyframes=n,this.preStyleProps=i,this.postStyleProps=r,this._stretchStartingKeyframe=s,this.timings={duration:o.duration,delay:o.delay,easing:o.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let t=this.keyframes,{delay:e,duration:n,easing:i}=this.timings;if(this._stretchStartingKeyframe&&e){let r=[],o=n+e,s=e/o,d=new Map(t[0]);d.set("offset",0),r.push(d);let h=new Map(t[0]);h.set("offset",Yr(s)),r.push(h);let p=t.length-1;for(let g=1;g<=p;g++){let k=new Map(t[g]),y=k.get("offset"),b=e+y*n;k.set("offset",Yr(b/o)),r.push(k)}n=o,e=0,i="",t=r}return Hi(this.element,t,this.preStyleProps,this.postStyleProps,n,e,i,!0)}};function Yr(a,t=3){let e=Math.pow(10,t-1);return Math.round(a*e)/e}function Os(a,t){let e=new Map,n;return a.forEach(i=>{if(i==="*"){n??=t.keys();for(let r of n)e.set(r,Pe)}else for(let[r,o]of i)e.set(r,o)}),e}function Zr(a,t,e,n,i,r,o,s,d,h,p,g,k){return{type:0,element:a,triggerName:t,isRemovalTransition:i,fromState:e,fromStyles:r,toState:n,toStyles:o,timelines:s,queriedElements:d,preStyleProps:h,postStyleProps:p,totalTime:g,errors:k}}var Ti={},zn=class{_triggerName;ast;_stateStyles;constructor(t,e,n){this._triggerName=t,this.ast=e,this._stateStyles=n}match(t,e,n,i){return Ls(this.ast.matchers,t,e,n,i)}buildStyles(t,e,n){let i=this._stateStyles.get("*");return t!==void 0&&(i=this._stateStyles.get(t?.toString())||i),i?i.buildStyles(e,n):new Map}build(t,e,n,i,r,o,s,d,h,p){let g=[],k=this.ast.options&&this.ast.options.params||Ti,y=s&&s.params||Ti,b=this.buildStyles(n,y,g),w=d&&d.params||Ti,j=this.buildStyles(i,w,g),J=new Set,te=new Map,ge=new Map,ae=i==="void",yt={params:co(w,k),delay:this.ast.options?.delay},Ne=p?[]:so(t,e,this.ast.animation,r,o,b,j,yt,h,g),fe=0;return Ne.forEach(_e=>{fe=Math.max(_e.duration+_e.delay,fe)}),g.length?Zr(e,this._triggerName,n,i,ae,b,j,[],[],te,ge,fe,g):(Ne.forEach(_e=>{let st=_e.element,xt=xe(te,st,new Set);_e.preStyleProps.forEach(ct=>xt.add(ct));let sa=xe(ge,st,new Set);_e.postStyleProps.forEach(ct=>sa.add(ct)),st!==e&&J.add(st)}),Zr(e,this._triggerName,n,i,ae,b,j,Ne,[...J.values()],te,ge,fe))}};function Ls(a,t,e,n,i){return a.some(r=>r(t,e,n,i))}function co(a,t){let e=re({},t);return Object.entries(a).forEach(([n,i])=>{i!=null&&(e[n]=i)}),e}var Ni=class{styles;defaultParams;normalizer;constructor(t,e,n){this.styles=t,this.defaultParams=e,this.normalizer=n}buildStyles(t,e){let n=new Map,i=co(t,this.defaultParams);return this.styles.styles.forEach(r=>{typeof r!="string"&&r.forEach((o,s)=>{o&&(o=Pt(o,i,e));let d=this.normalizer.normalizePropertyName(s,e);o=this.normalizer.normalizeStyleValue(s,d,o,e),n.set(s,o)})}),n}};function Ns(a,t,e){return new Fi(a,t,e)}var Fi=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(t,e,n){this.name=t,this.ast=e,this._normalizer=n,e.states.forEach(i=>{let r=i.options&&i.options.params||{};this.states.set(i.name,new Ni(i.style,r,n))}),Jr(this.states,"true","1"),Jr(this.states,"false","0"),e.transitions.forEach(i=>{this.transitionFactories.push(new zn(t,i,this.states))}),this.fallbackTransition=Fs(t,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(t,e,n,i){return this.transitionFactories.find(o=>o.match(t,e,n,i))||null}matchStyles(t,e,n){return this.fallbackTransition.buildStyles(t,e,n)}};function Fs(a,t,e){let n=[(o,s)=>!0],i={type:I.Sequence,steps:[],options:null},r={type:I.Transition,animation:i,matchers:n,options:null,queryCount:0,depCount:0};return new zn(a,r,t)}function Jr(a,t,e){a.has(t)?a.has(e)||a.set(e,a.get(t)):a.has(e)&&a.set(t,a.get(e))}var Bs=new rn,Bi=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(t,e,n){this.bodyNode=t,this._driver=e,this._normalizer=n}register(t,e){let n=[],i=[],r=oo(this._driver,e,n,i);if(n.length)throw Or(n);this._animations.set(t,r)}_buildPlayer(t,e,n){let i=t.element,r=_i(this._normalizer,t.keyframes,e,n);return this._driver.animate(i,r,t.duration,t.delay,t.easing,[],!0)}create(t,e,n={}){let i=[],r=this._animations.get(t),o,s=new Map;if(r?(o=so(this._driver,e,r,Ci,Tn,new Map,new Map,n,Bs,i),o.forEach(p=>{let g=xe(s,p.element,new Map);p.postStyleProps.forEach(k=>g.set(k,null))})):(i.push(Lr()),o=[]),i.length)throw Nr(i);s.forEach((p,g)=>{p.forEach((k,y)=>{p.set(y,this._driver.computeStyle(g,y,Pe))})});let d=o.map(p=>{let g=s.get(p.element);return this._buildPlayer(p,new Map,g)}),h=Qe(d);return this._playersById.set(t,h),h.onDestroy(()=>this.destroy(t)),this.players.push(h),h}destroy(t){let e=this._getPlayer(t);e.destroy(),this._playersById.delete(t);let n=this.players.indexOf(e);n>=0&&this.players.splice(n,1)}_getPlayer(t){let e=this._playersById.get(t);if(!e)throw Fr(t);return e}listen(t,e,n,i){let r=kn(e,"","","");return wn(this._getPlayer(t),n,r,i),()=>{}}command(t,e,n,i){if(n=="register"){this.register(t,i[0]);return}if(n=="create"){let o=i[0]||{};this.create(t,e,o);return}let r=this._getPlayer(t);switch(n){case"play":r.play();break;case"pause":r.pause();break;case"reset":r.reset();break;case"restart":r.restart();break;case"finish":r.finish();break;case"init":r.init();break;case"setPosition":r.setPosition(parseFloat(i[0]));break;case"destroy":this.destroy(t);break}}},eo="ng-animate-queued",zs=".ng-animate-queued",Mi="ng-animate-disabled",Gs=".ng-animate-disabled",Vs="ng-star-inserted",js=".ng-star-inserted",Hs=[],lo={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},Us={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},Le="__ng_removed",on=class{namespaceId;value;options;get params(){return this.options.params}constructor(t,e=""){this.namespaceId=e;let n=t&&t.hasOwnProperty("value"),i=n?t.value:t;if(this.value=$s(i),n){let r=t,{value:o}=r,s=ma(r,["value"]);this.options=s}else this.options={};this.options.params||(this.options.params={})}absorbOptions(t){let e=t.params;if(e){let n=this.options.params;Object.keys(e).forEach(i=>{n[i]==null&&(n[i]=e[i])})}}},an="void",Ii=new on(an),zi=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(t,e,n){this.id=t,this.hostElement=e,this._engine=n,this._hostClassName="ng-tns-"+t,Te(e,this._hostClassName)}listen(t,e,n,i){if(!this._triggers.has(e))throw Br(n,e);if(n==null||n.length==0)throw zr(e);if(!Qs(n))throw Gr(n,e);let r=xe(this._elementListeners,t,[]),o={name:e,phase:n,callback:i};r.push(o);let s=xe(this._engine.statesByElement,t,new Map);return s.has(e)||(Te(t,en),Te(t,en+"-"+e),s.set(e,Ii)),()=>{this._engine.afterFlush(()=>{let d=r.indexOf(o);d>=0&&r.splice(d,1),this._triggers.has(e)||s.delete(e)})}}register(t,e){return this._triggers.has(t)?!1:(this._triggers.set(t,e),!0)}_getTrigger(t){let e=this._triggers.get(t);if(!e)throw Vr(t);return e}trigger(t,e,n,i=!0){let r=this._getTrigger(e),o=new sn(this.id,e,t),s=this._engine.statesByElement.get(t);s||(Te(t,en),Te(t,en+"-"+e),this._engine.statesByElement.set(t,s=new Map));let d=s.get(e),h=new on(n,this.id);if(!(n&&n.hasOwnProperty("value"))&&d&&h.absorbOptions(d.options),s.set(e,h),d||(d=Ii),!(h.value===an)&&d.value===h.value){if(!Xs(d.params,h.params)){let w=[],j=r.matchStyles(d.value,d.params,w),J=r.matchStyles(h.value,h.params,w);w.length?this._engine.reportError(w):this._engine.afterFlush(()=>{ot(t,j),Oe(t,J)})}return}let k=xe(this._engine.playersByElement,t,[]);k.forEach(w=>{w.namespaceId==this.id&&w.triggerName==e&&w.queued&&w.destroy()});let y=r.matchTransition(d.value,h.value,t,h.params),b=!1;if(!y){if(!i)return;y=r.fallbackTransition,b=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:t,triggerName:e,transition:y,fromState:d,toState:h,player:o,isFallbackTransition:b}),b||(Te(t,eo),o.onStart(()=>{Ot(t,eo)})),o.onDone(()=>{let w=this.players.indexOf(o);w>=0&&this.players.splice(w,1);let j=this._engine.playersByElement.get(t);if(j){let J=j.indexOf(o);J>=0&&j.splice(J,1)}}),this.players.push(o),k.push(o),o}deregister(t){this._triggers.delete(t),this._engine.statesByElement.forEach(e=>e.delete(t)),this._elementListeners.forEach((e,n)=>{this._elementListeners.set(n,e.filter(i=>i.name!=t))})}clearElementCache(t){this._engine.statesByElement.delete(t),this._elementListeners.delete(t);let e=this._engine.playersByElement.get(t);e&&(e.forEach(n=>n.destroy()),this._engine.playersByElement.delete(t))}_signalRemovalForInnerTriggers(t,e){let n=this._engine.driver.query(t,tn,!0);n.forEach(i=>{if(i[Le])return;let r=this._engine.fetchNamespacesByElement(i);r.size?r.forEach(o=>o.triggerLeaveAnimation(i,e,!1,!0)):this.clearElementCache(i)}),this._engine.afterFlushAnimationsDone(()=>n.forEach(i=>this.clearElementCache(i)))}triggerLeaveAnimation(t,e,n,i){let r=this._engine.statesByElement.get(t),o=new Map;if(r){let s=[];if(r.forEach((d,h)=>{if(o.set(h,d.value),this._triggers.has(h)){let p=this.trigger(t,h,an,i);p&&s.push(p)}}),s.length)return this._engine.markElementAsRemoved(this.id,t,!0,e,o),n&&Qe(s).onDone(()=>this._engine.processLeaveNode(t)),!0}return!1}prepareLeaveAnimationListeners(t){let e=this._elementListeners.get(t),n=this._engine.statesByElement.get(t);if(e&&n){let i=new Set;e.forEach(r=>{let o=r.name;if(i.has(o))return;i.add(o);let d=this._triggers.get(o).fallbackTransition,h=n.get(o)||Ii,p=new on(an),g=new sn(this.id,o,t);this._engine.totalQueuedPlayers++,this._queue.push({element:t,triggerName:o,transition:d,fromState:h,toState:p,player:g,isFallbackTransition:!0})})}}removeNode(t,e){let n=this._engine;if(t.childElementCount&&this._signalRemovalForInnerTriggers(t,e),this.triggerLeaveAnimation(t,e,!0))return;let i=!1;if(n.totalAnimations){let r=n.players.length?n.playersByQueriedElement.get(t):[];if(r&&r.length)i=!0;else{let o=t;for(;o=o.parentNode;)if(n.statesByElement.get(o)){i=!0;break}}}if(this.prepareLeaveAnimationListeners(t),i)n.markElementAsRemoved(this.id,t,!1,e);else{let r=t[Le];(!r||r===lo)&&(n.afterFlush(()=>this.clearElementCache(t)),n.destroyInnerAnimations(t),n._onRemovalComplete(t,e))}}insertNode(t,e){Te(t,this._hostClassName)}drainQueuedTransitions(t){let e=[];return this._queue.forEach(n=>{let i=n.player;if(i.destroyed)return;let r=n.element,o=this._elementListeners.get(r);o&&o.forEach(s=>{if(s.name==n.triggerName){let d=kn(r,n.triggerName,n.fromState.value,n.toState.value);d._data=t,wn(n.player,s.phase,d,s.callback)}}),i.markedForDestroy?this._engine.afterFlush(()=>{i.destroy()}):e.push(n)}),this._queue=[],e.sort((n,i)=>{let r=n.transition.ast.depCount,o=i.transition.ast.depCount;return r==0||o==0?r-o:this._engine.driver.containsElement(n.element,i.element)?1:-1})}destroy(t){this.players.forEach(e=>e.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,t)}},Gi=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(t,e)=>{};_onRemovalComplete(t,e){this.onRemovalComplete(t,e)}constructor(t,e,n){this.bodyNode=t,this.driver=e,this._normalizer=n}get queuedPlayers(){let t=[];return this._namespaceList.forEach(e=>{e.players.forEach(n=>{n.queued&&t.push(n)})}),t}createNamespace(t,e){let n=new zi(t,e,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,e)?this._balanceNamespaceList(n,e):(this.newHostElements.set(e,n),this.collectEnterElement(e)),this._namespaceLookup[t]=n}_balanceNamespaceList(t,e){let n=this._namespaceList,i=this.namespacesByHostElement;if(n.length-1>=0){let o=!1,s=this.driver.getParentElement(e);for(;s;){let d=i.get(s);if(d){let h=n.indexOf(d);n.splice(h+1,0,t),o=!0;break}s=this.driver.getParentElement(s)}o||n.unshift(t)}else n.push(t);return i.set(e,t),t}register(t,e){let n=this._namespaceLookup[t];return n||(n=this.createNamespace(t,e)),n}registerTrigger(t,e,n){let i=this._namespaceLookup[t];i&&i.register(e,n)&&this.totalAnimations++}destroy(t,e){t&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let n=this._fetchNamespace(t);this.namespacesByHostElement.delete(n.hostElement);let i=this._namespaceList.indexOf(n);i>=0&&this._namespaceList.splice(i,1),n.destroy(e),delete this._namespaceLookup[t]}))}_fetchNamespace(t){return this._namespaceLookup[t]}fetchNamespacesByElement(t){let e=new Set,n=this.statesByElement.get(t);if(n){for(let i of n.values())if(i.namespaceId){let r=this._fetchNamespace(i.namespaceId);r&&e.add(r)}}return e}trigger(t,e,n,i){if(Pn(e)){let r=this._fetchNamespace(t);if(r)return r.trigger(e,n,i),!0}return!1}insertNode(t,e,n,i){if(!Pn(e))return;let r=e[Le];if(r&&r.setForRemoval){r.setForRemoval=!1,r.setForMove=!0;let o=this.collectedLeaveElements.indexOf(e);o>=0&&this.collectedLeaveElements.splice(o,1)}if(t){let o=this._fetchNamespace(t);o&&o.insertNode(e,n)}i&&this.collectEnterElement(e)}collectEnterElement(t){this.collectedEnterElements.push(t)}markElementAsDisabled(t,e){e?this.disabledNodes.has(t)||(this.disabledNodes.add(t),Te(t,Mi)):this.disabledNodes.has(t)&&(this.disabledNodes.delete(t),Ot(t,Mi))}removeNode(t,e,n){if(Pn(e)){let i=t?this._fetchNamespace(t):null;i?i.removeNode(e,n):this.markElementAsRemoved(t,e,!1,n);let r=this.namespacesByHostElement.get(e);r&&r.id!==t&&r.removeNode(e,n)}else this._onRemovalComplete(e,n)}markElementAsRemoved(t,e,n,i,r){this.collectedLeaveElements.push(e),e[Le]={namespaceId:t,setForRemoval:i,hasAnimation:n,removedBeforeQueried:!1,previousTriggersValues:r}}listen(t,e,n,i,r){return Pn(e)?this._fetchNamespace(t).listen(e,n,i,r):()=>{}}_buildInstruction(t,e,n,i,r){return t.transition.build(this.driver,t.element,t.fromState.value,t.toState.value,n,i,t.fromState.options,t.toState.options,e,r)}destroyInnerAnimations(t){let e=this.driver.query(t,tn,!0);e.forEach(n=>this.destroyActiveAnimationsForElement(n)),this.playersByQueriedElement.size!=0&&(e=this.driver.query(t,Mn,!0),e.forEach(n=>this.finishActiveQueriedAnimationOnElement(n)))}destroyActiveAnimationsForElement(t){let e=this.playersByElement.get(t);e&&e.forEach(n=>{n.queued?n.markedForDestroy=!0:n.destroy()})}finishActiveQueriedAnimationOnElement(t){let e=this.playersByQueriedElement.get(t);e&&e.forEach(n=>n.finish())}whenRenderingDone(){return new Promise(t=>{if(this.players.length)return Qe(this.players).onDone(()=>t());t()})}processLeaveNode(t){let e=t[Le];if(e&&e.setForRemoval){if(t[Le]=lo,e.namespaceId){this.destroyInnerAnimations(t);let n=this._fetchNamespace(e.namespaceId);n&&n.clearElementCache(t)}this._onRemovalComplete(t,e.setForRemoval)}t.classList?.contains(Mi)&&this.markElementAsDisabled(t,!1),this.driver.query(t,Gs,!0).forEach(n=>{this.markElementAsDisabled(n,!1)})}flush(t=-1){let e=[];if(this.newHostElements.size&&(this.newHostElements.forEach((n,i)=>this._balanceNamespaceList(n,i)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let n=0;n<this.collectedEnterElements.length;n++){let i=this.collectedEnterElements[n];Te(i,Vs)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let n=[];try{e=this._flushAnimations(n,t)}finally{for(let i=0;i<n.length;i++)n[i]()}}else for(let n=0;n<this.collectedLeaveElements.length;n++){let i=this.collectedLeaveElements[n];this.processLeaveNode(i)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(n=>n()),this._flushFns=[],this._whenQuietFns.length){let n=this._whenQuietFns;this._whenQuietFns=[],e.length?Qe(e).onDone(()=>{n.forEach(i=>i())}):n.forEach(i=>i())}}reportError(t){throw jr(t)}_flushAnimations(t,e){let n=new rn,i=[],r=new Map,o=[],s=new Map,d=new Map,h=new Map,p=new Set;this.disabledNodes.forEach(_=>{p.add(_);let v=this.driver.query(_,zs,!0);for(let E=0;E<v.length;E++)p.add(v[E])});let g=this.bodyNode,k=Array.from(this.statesByElement.keys()),y=io(k,this.collectedEnterElements),b=new Map,w=0;y.forEach((_,v)=>{let E=Ci+w++;b.set(v,E),_.forEach(A=>Te(A,E))});let j=[],J=new Set,te=new Set;for(let _=0;_<this.collectedLeaveElements.length;_++){let v=this.collectedLeaveElements[_],E=v[Le];E&&E.setForRemoval&&(j.push(v),J.add(v),E.hasAnimation?this.driver.query(v,js,!0).forEach(A=>J.add(A)):te.add(v))}let ge=new Map,ae=io(k,Array.from(J));ae.forEach((_,v)=>{let E=Tn+w++;ge.set(v,E),_.forEach(A=>Te(A,E))}),t.push(()=>{y.forEach((_,v)=>{let E=b.get(v);_.forEach(A=>Ot(A,E))}),ae.forEach((_,v)=>{let E=ge.get(v);_.forEach(A=>Ot(A,E))}),j.forEach(_=>{this.processLeaveNode(_)})});let yt=[],Ne=[];for(let _=this._namespaceList.length-1;_>=0;_--)this._namespaceList[_].drainQueuedTransitions(e).forEach(E=>{let A=E.player,ne=E.element;if(yt.push(A),this.collectedEnterElements.length){let le=ne[Le];if(le&&le.setForMove){if(le.previousTriggersValues&&le.previousTriggersValues.has(E.triggerName)){let lt=le.previousTriggersValues.get(E.triggerName),we=this.statesByElement.get(E.element);if(we&&we.has(E.triggerName)){let dn=we.get(E.triggerName);dn.value=lt,we.set(E.triggerName,dn)}}A.destroy();return}}let Fe=!g||!this.driver.containsElement(g,ne),Ce=ge.get(ne),We=b.get(ne),H=this._buildInstruction(E,n,We,Ce,Fe);if(H.errors&&H.errors.length){Ne.push(H);return}if(Fe){A.onStart(()=>ot(ne,H.fromStyles)),A.onDestroy(()=>Oe(ne,H.toStyles)),i.push(A);return}if(E.isFallbackTransition){A.onStart(()=>ot(ne,H.fromStyles)),A.onDestroy(()=>Oe(ne,H.toStyles)),i.push(A);return}let da=[];H.timelines.forEach(le=>{le.stretchStartingKeyframe=!0,this.disabledNodes.has(le.element)||da.push(le)}),H.timelines=da,n.append(ne,H.timelines);let is={instruction:H,player:A,element:ne};o.push(is),H.queriedElements.forEach(le=>xe(s,le,[]).push(A)),H.preStyleProps.forEach((le,lt)=>{if(le.size){let we=d.get(lt);we||d.set(lt,we=new Set),le.forEach((dn,x)=>we.add(x))}}),H.postStyleProps.forEach((le,lt)=>{let we=h.get(lt);we||h.set(lt,we=new Set),le.forEach((dn,x)=>we.add(x))})});if(Ne.length){let _=[];Ne.forEach(v=>{_.push(Hr(v.triggerName,v.errors))}),yt.forEach(v=>v.destroy()),this.reportError(_)}let fe=new Map,_e=new Map;o.forEach(_=>{let v=_.element;n.has(v)&&(_e.set(v,v),this._beforeAnimationBuild(_.player.namespaceId,_.instruction,fe))}),i.forEach(_=>{let v=_.element;this._getPreviousPlayers(v,!1,_.namespaceId,_.triggerName,null).forEach(A=>{xe(fe,v,[]).push(A),A.destroy()})});let st=j.filter(_=>ao(_,d,h)),xt=new Map;no(xt,this.driver,te,h,Pe).forEach(_=>{ao(_,d,h)&&st.push(_)});let ct=new Map;y.forEach((_,v)=>{no(ct,this.driver,new Set(_),d,Jt)}),st.forEach(_=>{let v=xt.get(_),E=ct.get(_);xt.set(_,new Map([...v?.entries()??[],...E?.entries()??[]]))});let ri=[],ca=[],la={};o.forEach(_=>{let{element:v,player:E,instruction:A}=_;if(n.has(v)){if(p.has(v)){E.onDestroy(()=>Oe(v,A.toStyles)),E.disabled=!0,E.overrideTotalTime(A.totalTime),i.push(E);return}let ne=la;if(_e.size>1){let Ce=v,We=[];for(;Ce=Ce.parentNode;){let H=_e.get(Ce);if(H){ne=H;break}We.push(Ce)}We.forEach(H=>_e.set(H,ne))}let Fe=this._buildAnimation(E.namespaceId,A,fe,r,ct,xt);if(E.setRealPlayer(Fe),ne===la)ri.push(E);else{let Ce=this.playersByElement.get(ne);Ce&&Ce.length&&(E.parentPlayer=Qe(Ce)),i.push(E)}}else ot(v,A.fromStyles),E.onDestroy(()=>Oe(v,A.toStyles)),ca.push(E),p.has(v)&&i.push(E)}),ca.forEach(_=>{let v=r.get(_.element);if(v&&v.length){let E=Qe(v);_.setRealPlayer(E)}}),i.forEach(_=>{_.parentPlayer?_.syncPlayerEvents(_.parentPlayer):_.destroy()});for(let _=0;_<j.length;_++){let v=j[_],E=v[Le];if(Ot(v,Tn),E&&E.hasAnimation)continue;let A=[];if(s.size){let Fe=s.get(v);Fe&&Fe.length&&A.push(...Fe);let Ce=this.driver.query(v,Mn,!0);for(let We=0;We<Ce.length;We++){let H=s.get(Ce[We]);H&&H.length&&A.push(...H)}}let ne=A.filter(Fe=>!Fe.destroyed);ne.length?Ws(this,v,ne):this.processLeaveNode(v)}return j.length=0,ri.forEach(_=>{this.players.push(_),_.onDone(()=>{_.destroy();let v=this.players.indexOf(_);this.players.splice(v,1)}),_.play()}),ri}afterFlush(t){this._flushFns.push(t)}afterFlushAnimationsDone(t){this._whenQuietFns.push(t)}_getPreviousPlayers(t,e,n,i,r){let o=[];if(e){let s=this.playersByQueriedElement.get(t);s&&(o=s)}else{let s=this.playersByElement.get(t);if(s){let d=!r||r==an;s.forEach(h=>{h.queued||!d&&h.triggerName!=i||o.push(h)})}}return(n||i)&&(o=o.filter(s=>!(n&&n!=s.namespaceId||i&&i!=s.triggerName))),o}_beforeAnimationBuild(t,e,n){let i=e.triggerName,r=e.element,o=e.isRemovalTransition?void 0:t,s=e.isRemovalTransition?void 0:i;for(let d of e.timelines){let h=d.element,p=h!==r,g=xe(n,h,[]);this._getPreviousPlayers(h,p,o,s,e.toState).forEach(y=>{let b=y.getRealPlayer();b.beforeDestroy&&b.beforeDestroy(),y.destroy(),g.push(y)})}ot(r,e.fromStyles)}_buildAnimation(t,e,n,i,r,o){let s=e.triggerName,d=e.element,h=[],p=new Set,g=new Set,k=e.timelines.map(b=>{let w=b.element;p.add(w);let j=w[Le];if(j&&j.removedBeforeQueried)return new $e(b.duration,b.delay);let J=w!==d,te=Ks((n.get(w)||Hs).map(fe=>fe.getRealPlayer())).filter(fe=>{let _e=fe;return _e.element?_e.element===w:!1}),ge=r.get(w),ae=o.get(w),yt=_i(this._normalizer,b.keyframes,ge,ae),Ne=this._buildPlayer(b,yt,te);if(b.subTimeline&&i&&g.add(w),J){let fe=new sn(t,s,w);fe.setRealPlayer(Ne),h.push(fe)}return Ne});h.forEach(b=>{xe(this.playersByQueriedElement,b.element,[]).push(b),b.onDone(()=>qs(this.playersByQueriedElement,b.element,b))}),p.forEach(b=>Te(b,wi));let y=Qe(k);return y.onDestroy(()=>{p.forEach(b=>Ot(b,wi)),Oe(d,e.toStyles)}),g.forEach(b=>{xe(i,b,[]).push(y)}),y}_buildPlayer(t,e,n){return e.length>0?this.driver.animate(t.element,e,t.duration,t.delay,t.easing,n):new $e(t.duration,t.delay)}},sn=class{namespaceId;triggerName;element;_player=new $e;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(t,e,n){this.namespaceId=t,this.triggerName=e,this.element=n}setRealPlayer(t){this._containsRealPlayer||(this._player=t,this._queuedCallbacks.forEach((e,n)=>{e.forEach(i=>wn(t,n,void 0,i))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(t.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(t){this.totalTime=t}syncPlayerEvents(t){let e=this._player;e.triggerCallback&&t.onStart(()=>e.triggerCallback("start")),t.onDone(()=>this.finish()),t.onDestroy(()=>this.destroy())}_queueEvent(t,e){xe(this._queuedCallbacks,t,[]).push(e)}onDone(t){this.queued&&this._queueEvent("done",t),this._player.onDone(t)}onStart(t){this.queued&&this._queueEvent("start",t),this._player.onStart(t)}onDestroy(t){this.queued&&this._queueEvent("destroy",t),this._player.onDestroy(t)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(t){this.queued||this._player.setPosition(t)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(t){let e=this._player;e.triggerCallback&&e.triggerCallback(t)}};function qs(a,t,e){let n=a.get(t);if(n){if(n.length){let i=n.indexOf(e);n.splice(i,1)}n.length==0&&a.delete(t)}return n}function $s(a){return a??null}function Pn(a){return a&&a.nodeType===1}function Qs(a){return a=="start"||a=="done"}function to(a,t){let e=a.style.display;return a.style.display=t??"none",e}function no(a,t,e,n,i){let r=[];e.forEach(d=>r.push(to(d)));let o=[];n.forEach((d,h)=>{let p=new Map;d.forEach(g=>{let k=t.computeStyle(h,g,i);p.set(g,k),(!k||k.length==0)&&(h[Le]=Us,o.push(h))}),a.set(h,p)});let s=0;return e.forEach(d=>to(d,r[s++])),o}function io(a,t){let e=new Map;if(a.forEach(s=>e.set(s,[])),t.length==0)return e;let n=1,i=new Set(t),r=new Map;function o(s){if(!s)return n;let d=r.get(s);if(d)return d;let h=s.parentNode;return e.has(h)?d=h:i.has(h)?d=n:d=o(h),r.set(s,d),d}return t.forEach(s=>{let d=o(s);d!==n&&e.get(d).push(s)}),e}function Te(a,t){a.classList?.add(t)}function Ot(a,t){a.classList?.remove(t)}function Ws(a,t,e){Qe(e).onDone(()=>a.processLeaveNode(t))}function Ks(a){let t=[];return mo(a,t),t}function mo(a,t){for(let e=0;e<a.length;e++){let n=a[e];n instanceof Dt?mo(n.players,t):t.push(n)}}function Xs(a,t){let e=Object.keys(a),n=Object.keys(t);if(e.length!=n.length)return!1;for(let i=0;i<e.length;i++){let r=e[i];if(!t.hasOwnProperty(r)||a[r]!==t[r])return!1}return!0}function ao(a,t,e){let n=e.get(a);if(!n)return!1;let i=t.get(a);return i?n.forEach(r=>i.add(r)):t.set(a,n),e.delete(a),!0}var Lt=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(t,e)=>{};constructor(t,e,n){this._driver=e,this._normalizer=n,this._transitionEngine=new Gi(t.body,e,n),this._timelineEngine=new Bi(t.body,e,n),this._transitionEngine.onRemovalComplete=(i,r)=>this.onRemovalComplete(i,r)}registerTrigger(t,e,n,i,r){let o=t+"-"+i,s=this._triggerCache[o];if(!s){let d=[],h=[],p=oo(this._driver,r,d,h);if(d.length)throw Pr(i,d);s=Ns(i,p,this._normalizer),this._triggerCache[o]=s}this._transitionEngine.registerTrigger(e,i,s)}register(t,e){this._transitionEngine.register(t,e)}destroy(t,e){this._transitionEngine.destroy(t,e)}onInsert(t,e,n,i){this._transitionEngine.insertNode(t,e,n,i)}onRemove(t,e,n){this._transitionEngine.removeNode(t,e,n)}disableAnimations(t,e){this._transitionEngine.markElementAsDisabled(t,e)}process(t,e,n,i){if(n.charAt(0)=="@"){let[r,o]=vi(n),s=i;this._timelineEngine.command(r,e,o,s)}else this._transitionEngine.trigger(t,e,n,i)}listen(t,e,n,i,r){if(n.charAt(0)=="@"){let[o,s]=vi(n);return this._timelineEngine.listen(o,e,s,r)}return this._transitionEngine.listen(t,e,n,i,r)}flush(t=-1){this._transitionEngine.flush(t)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(t){this._transitionEngine.afterFlushAnimationsDone(t)}};function Ys(a,t){let e=null,n=null;return Array.isArray(t)&&t.length?(e=Ai(t[0]),t.length>1&&(n=Ai(t[t.length-1]))):t instanceof Map&&(e=Ai(t)),e||n?new Zs(a,e,n):null}var Zs=(()=>{class a{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(e,n,i){this._element=e,this._startStyles=n,this._endStyles=i;let r=a.initialStylesByElement.get(e);r||a.initialStylesByElement.set(e,r=new Map),this._initialStyles=r}start(){this._state<1&&(this._startStyles&&Oe(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(Oe(this._element,this._initialStyles),this._endStyles&&(Oe(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(a.initialStylesByElement.delete(this._element),this._startStyles&&(ot(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(ot(this._element,this._endStyles),this._endStyles=null),Oe(this._element,this._initialStyles),this._state=3)}}return a})();function Ai(a){let t=null;return a.forEach((e,n)=>{Js(n)&&(t=t||new Map,t.set(n,e))}),t}function Js(a){return a==="display"||a==="position"}var Gn=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer=null;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(t,e,n,i){this.element=t,this.keyframes=e,this.options=n,this._specialStyles=i,this._duration=n.duration,this._delay=n.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}init(){this._buildPlayer()&&this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return this.domPlayer;this._initialized=!0;let t=this.keyframes,e=this._triggerWebAnimation(this.element,t,this.options);if(!e)return this._onFinish(),null;this.domPlayer=e,this._finalKeyframe=t.length?t[t.length-1]:new Map;let n=()=>this._onFinish();return e.addEventListener("finish",n),this.onDestroy(()=>{e.removeEventListener("finish",n)}),e}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer?.pause()}_convertKeyframesToObject(t){let e=[];return t.forEach(n=>{e.push(Object.fromEntries(n))}),e}_triggerWebAnimation(t,e,n){let i=this._convertKeyframesToObject(e);try{return t.animate(i,n)}catch(r){return null}}onStart(t){this._originalOnStartFns.push(t),this._onStartFns.push(t)}onDone(t){this._originalOnDoneFns.push(t),this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}play(){let t=this._buildPlayer();t&&(this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),t.play())}pause(){this.init(),this.domPlayer?.pause()}finish(){this.init(),this.domPlayer&&(this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish())}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer?.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}setPosition(t){this.domPlayer||this.init(),this.domPlayer&&(this.domPlayer.currentTime=t*this.time)}getPosition(){return this.domPlayer?+(this.domPlayer.currentTime??0)/this.time:this._initialized?1:0}get totalTime(){return this._delay+this._duration}beforeDestroy(){let t=new Map;this.hasStarted()&&this._finalKeyframe.forEach((n,i)=>{i!=="offset"&&t.set(i,this._finished?n:An(this.element,i))}),this.currentSnapshot=t}triggerCallback(t){let e=t==="start"?this._onStartFns:this._onDoneFns;e.forEach(n=>n()),e.length=0}},Vn=class{validateStyleProperty(t){return!0}validateAnimatableStyleProperty(t){return!0}containsElement(t,e){return yi(t,e)}getParentElement(t){return Sn(t)}query(t,e,n){return xi(t,e,n)}computeStyle(t,e,n){return An(t,e)}animate(t,e,n,i,r,o=[]){let s=i==0?"both":"forwards",d={duration:n,delay:i,fill:s};r&&(d.easing=r);let h=new Map,p=o.filter(y=>y instanceof Gn);Qr(n,i)&&p.forEach(y=>{y.currentSnapshot.forEach((b,w)=>h.set(w,b))});let g=qr(e).map(y=>new Map(y));g=Wr(t,g,h);let k=Ys(t,g);return new Gn(t,g,d,k)}};var On="@",ho="@.disabled",jn=class{namespaceId;delegate;engine;_onDestroy;\u0275type=0;constructor(t,e,n,i){this.namespaceId=t,this.delegate=e,this.engine=n,this._onDestroy=i}get data(){return this.delegate.data}destroyNode(t){this.delegate.destroyNode?.(t)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}appendChild(t,e){this.delegate.appendChild(t,e),this.engine.onInsert(this.namespaceId,e,t,!1)}insertBefore(t,e,n,i=!0){this.delegate.insertBefore(t,e,n),this.engine.onInsert(this.namespaceId,e,t,i)}removeChild(t,e,n,i){if(i){this.delegate.removeChild(t,e,n,i);return}this.parentNode(e)&&this.engine.onRemove(this.namespaceId,e,this.delegate)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,n,i){this.delegate.setAttribute(t,e,n,i)}removeAttribute(t,e,n){this.delegate.removeAttribute(t,e,n)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,n,i){this.delegate.setStyle(t,e,n,i)}removeStyle(t,e,n){this.delegate.removeStyle(t,e,n)}setProperty(t,e,n){e.charAt(0)==On&&e==ho?this.disableAnimations(t,!!n):this.delegate.setProperty(t,e,n)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,n,i){return this.delegate.listen(t,e,n,i)}disableAnimations(t,e){this.engine.disableAnimations(t,e)}},Vi=class extends jn{factory;constructor(t,e,n,i,r){super(e,n,i,r),this.factory=t,this.namespaceId=e}setProperty(t,e,n){e.charAt(0)==On?e.charAt(1)=="."&&e==ho?(n=n===void 0?!0:!!n,this.disableAnimations(t,n)):this.engine.process(this.namespaceId,t,e.slice(1),n):this.delegate.setProperty(t,e,n)}listen(t,e,n,i){if(e.charAt(0)==On){let r=ec(t),o=e.slice(1),s="";return o.charAt(0)!=On&&([o,s]=tc(o)),this.engine.listen(this.namespaceId,r,o,s,d=>{let h=d._data||-1;this.factory.scheduleListenerCallback(h,n,d)})}return this.delegate.listen(t,e,n,i)}};function ec(a){switch(a){case"body":return document.body;case"document":return document;case"window":return window;default:return a}}function tc(a){let t=a.indexOf("."),e=a.substring(0,t),n=a.slice(t+1);return[e,n]}var Hn=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(t,e,n){this.delegate=t,this.engine=e,this._zone=n,e.onRemovalComplete=(i,r)=>{r?.removeChild(null,i)}}createRenderer(t,e){let i=this.delegate.createRenderer(t,e);if(!t||!e?.data?.animation){let h=this._rendererCache,p=h.get(i);if(!p){let g=()=>h.delete(i);p=new jn("",i,this.engine,g),h.set(i,p)}return p}let r=e.id,o=e.id+"-"+this._currentId;this._currentId++,this.engine.register(o,t);let s=h=>{Array.isArray(h)?h.forEach(s):this.engine.registerTrigger(r,o,t,h.name,h)};return e.data.animation.forEach(s),new Vi(this,o,i,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(t,e,n){if(t>=0&&t<this._microtaskId){this._zone.run(()=>e(n));return}let i=this._animationCallbacksBuffer;i.length==0&&queueMicrotask(()=>{this._zone.run(()=>{i.forEach(r=>{let[o,s]=r;o(s)}),this._animationCallbacksBuffer=[]})}),i.push([e,n])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(t){this.engine.flush(),this.delegate.componentReplaced?.(t)}};var ic=(()=>{class a extends Lt{constructor(e,n,i){super(e,n,i)}ngOnDestroy(){this.flush()}static \u0275fac=function(n){return new(n||a)(Ie(Je),Ie(_t),Ie(vt))};static \u0275prov=W({token:a,factory:a.\u0275fac})}return a})();function ac(){return new Ln}function rc(){return new Hn(u(Ra),u(Lt),u(oe))}var po=[{provide:vt,useFactory:ac},{provide:Lt,useClass:ic},{provide:xa,useFactory:rc}],md=[{provide:_t,useClass:ji},{provide:si,useValue:"NoopAnimations"},...po],oc=[{provide:_t,useFactory:()=>new Vn},{provide:si,useFactory:()=>"BrowserAnimations"},...po];function uo(){return ya("NgEagerAnimations"),[...oc]}var go=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=X({type:a});static \u0275inj=K({imports:[Ha,pe]})}return a})();var sc=["*"];var cc=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],lc=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],dc=new G("MAT_CARD_CONFIG"),Un=(()=>{class a{appearance;constructor(){let e=u(dc,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=F({type:a,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,i){n&2&&O("mat-mdc-card-outlined",i.appearance==="outlined")("mdc-card--outlined",i.appearance==="outlined")("mat-mdc-card-filled",i.appearance==="filled")("mdc-card--filled",i.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:sc,decls:1,vars:0,template:function(n,i){n&1&&(ce(),z(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return a})(),fo=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275dir=B({type:a,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return a})();var qn=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275dir=B({type:a,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return a})(),bo=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275dir=B({type:a,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return a})(),_o=(()=>{class a{align="start";static \u0275fac=function(n){return new(n||a)};static \u0275dir=B({type:a,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(n,i){n&2&&O("mat-mdc-card-actions-align-end",i.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return a})(),vo=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275cmp=F({type:a,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:lc,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(n,i){n&1&&(ce(cc),z(0),tt(1,"div",0),z(2,1),gt(),z(3,2))},encapsulation:2,changeDetection:0})}return a})();var Nt=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=X({type:a});static \u0275inj=K({imports:[pe]})}return a})();var mc=["input"],hc=["label"],pc=["*"],Ui={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},uc=new G("mat-checkbox-default-options",{providedIn:"root",factory:()=>Ui}),ue=(function(a){return a[a.Init=0]="Init",a[a.Checked=1]="Checked",a[a.Unchecked=2]="Unchecked",a[a.Indeterminate=3]="Indeterminate",a})(ue||{}),qi=class{source;checked},gc=(()=>{class a{_elementRef=u(de);_changeDetectorRef=u(ye);_ngZone=u(oe);_animationsDisabled=je();_options=u(uc,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let n=new qi;return n.source=this,n.checked=e,n}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new V;indeterminateChange=new V;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=ue.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){u(Ue).load(qe);let e=u(new $t("tabindex"),{optional:!0});this._options=this._options||Ui,this.color=this._options.color||Ui.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=u(Se).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let n=e!=this._indeterminate();this._indeterminate.set(e),n&&(e?this._transitionCheckState(ue.Indeterminate):this._transitionCheckState(this.checked?ue.Checked:ue.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=ve(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let n=this._currentCheckState,i=this._getAnimationTargetElement();if(!(n===e||!i)&&(this._currentAnimationClass&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(n,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);let r=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(r)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?ue.Checked:ue.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,n){if(this._animationsDisabled)return"";switch(e){case ue.Init:if(n===ue.Checked)return this._animationClasses.uncheckedToChecked;if(n==ue.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case ue.Unchecked:return n===ue.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case ue.Checked:return n===ue.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case ue.Indeterminate:return n===ue.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let n=this._inputElement;n&&(n.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=F({type:a,selectors:[["mat-checkbox"]],viewQuery:function(n,i){if(n&1&&me(mc,5)(hc,5),n&2){let r;S(r=T())&&(i._inputElement=r.first),S(r=T())&&(i._labelElement=r.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(n,i){n&2&&(Ut("id",i.id),Y("tabindex",null)("aria-label",null)("aria-labelledby",null),Re(i.color?"mat-"+i.color:"mat-accent"),O("_mat-animation-noopable",i._animationsDisabled)("mdc-checkbox--disabled",i.disabled)("mat-mdc-checkbox-disabled",i.disabled)("mat-mdc-checkbox-checked",i.checked)("mat-mdc-checkbox-disabled-interactive",i.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",D],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",D],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",D],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:Ve(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",D],checked:[2,"checked","checked",D],disabled:[2,"disabled","disabled",D],indeterminate:[2,"indeterminate","indeterminate",D]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[he([{provide:Oa,useExisting:oi(()=>a),multi:!0},{provide:Na,useExisting:a,multi:!0}]),Ae],ngContentSelectors:pc,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(n,i){if(n&1&&(ce(),c(0,"div",3),C("click",function(o){return i._preventBubblingFromLabel(o)}),c(1,"div",4,0)(3,"div",5),C("click",function(){return i._onTouchTargetClick()}),l(),c(4,"input",6,1),C("blur",function(){return i._onBlur()})("click",function(){return i._onInputClick()})("change",function(o){return i._onInteractionEvent(o)}),l(),Z(6,"div",7),c(7,"div",8),Ct(),c(8,"svg",9),Z(9,"path",10),l(),_a(),Z(10,"div",11),l(),Z(11,"div",12),l(),c(12,"label",13,2),z(14),l()()),n&2){let r=qt(2);P("labelPosition",i.labelPosition),f(4),O("mdc-checkbox--selected",i.checked),P("checked",i.checked)("indeterminate",i.indeterminate)("disabled",i.disabled&&!i.disabledInteractive)("id",i.inputId)("required",i.required)("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex),Y("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby)("aria-describedby",i.ariaDescribedby)("aria-checked",i.indeterminate?"mixed":null)("aria-controls",i.ariaControls)("aria-disabled",i.disabled&&i.disabledInteractive?!0:null)("aria-expanded",i.ariaExpanded)("aria-owns",i.ariaOwns)("name",i.name)("value",i.value),f(7),P("matRippleTrigger",r)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",!0),f(),P("for",i.inputId)}},dependencies:[Yt,$a],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return a})(),xo=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=X({type:a});static \u0275inj=K({imports:[gc,pe]})}return a})();var fc=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],bc=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function _c(a,t){a&1&&(c(0,"span",3),z(1,1),l())}function vc(a,t){a&1&&(c(0,"span",6),z(1,2),l())}var yc=new G("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),Eo=new G("MatChipAvatar"),Co=new G("MatChipTrailingIcon"),wo=new G("MatChipEdit"),ko=new G("MatChipRemove"),So=new G("MatChip"),To=(()=>{class a{_elementRef=u(de);_parentChip=u(So);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){u(Ue).load(qe),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(n){return new(n||a)};static \u0275dir=B({type:a,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(n,i){n&2&&(Y("disabled",i._getDisabledAttribute())("aria-disabled",i.disabled),O("mdc-evolution-chip__action--primary",i._isPrimary)("mdc-evolution-chip__action--secondary",!i._isPrimary)("mdc-evolution-chip__action--trailing",!i._isPrimary&&!i._isLeading))},inputs:{disabled:[2,"disabled","disabled",D],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:Ve(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return a})(),xc=(()=>{class a extends To{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(i){return(e||(e=et(a)))(i||a)}})();static \u0275dir=B({type:a,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(n,i){n&1&&C("click",function(o){return i._handleClick(o)})("keydown",function(o){return i._handleKeydown(o)}),n&2&&(Y("tabindex",i._getTabindex()),O("mdc-evolution-chip__action--presentational",!1))},features:[De]})}return a})();var Mo=(()=>{class a{_changeDetectorRef=u(ye);_elementRef=u(de);_tagName=u(Ia);_ngZone=u(oe);_focusMonitor=u(Wt);_globalRippleOptions=u(mi,{optional:!0});_document=u(Je);_onFocus=new ie;_onBlur=new ie;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=je();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=u(Se).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new V;destroyed=new V;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=u(Ua);_injector=u(ut);constructor(){let e=u(Ue);e.load(qe),e.load(Va),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=Xe(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(n=>{let i=n._elementRef.nativeElement;return i===e||i.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let n=e!==null;n!==this._hasFocusInternal&&(this._hasFocusInternal=n,n?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=F({type:a,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(n,i,r){if(n&1&&ke(r,Eo,5)(r,wo,5)(r,Co,5)(r,ko,5)(r,Eo,5)(r,Co,5)(r,wo,5)(r,ko,5),n&2){let o;S(o=T())&&(i.leadingIcon=o.first),S(o=T())&&(i.editIcon=o.first),S(o=T())&&(i.trailingIcon=o.first),S(o=T())&&(i.removeIcon=o.first),S(o=T())&&(i._allLeadingIcons=o),S(o=T())&&(i._allTrailingIcons=o),S(o=T())&&(i._allEditIcons=o),S(o=T())&&(i._allRemoveIcons=o)}},viewQuery:function(n,i){if(n&1&&me(xc,5),n&2){let r;S(r=T())&&(i.primaryAction=r.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(n,i){n&1&&C("keydown",function(o){return i._handleKeydown(o)}),n&2&&(Ut("id",i.id),Y("role",i.role)("aria-label",i.ariaLabel),Re("mat-"+(i.color||"primary")),O("mdc-evolution-chip",!i._isBasicChip)("mdc-evolution-chip--disabled",i.disabled)("mdc-evolution-chip--with-trailing-action",i._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",i.leadingIcon)("mdc-evolution-chip--with-primary-icon",i.leadingIcon)("mdc-evolution-chip--with-avatar",i.leadingIcon)("mat-mdc-chip-with-avatar",i.leadingIcon)("mat-mdc-chip-highlighted",i.highlighted)("mat-mdc-chip-disabled",i.disabled)("mat-mdc-basic-chip",i._isBasicChip)("mat-mdc-standard-chip",!i._isBasicChip)("mat-mdc-chip-with-trailing-icon",i._hasTrailingIcon())("_mat-animation-noopable",i._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",D],highlighted:[2,"highlighted","highlighted",D],disableRipple:[2,"disableRipple","disableRipple",D],disabled:[2,"disabled","disabled",D]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[he([{provide:So,useExisting:a}])],ngContentSelectors:bc,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(n,i){n&1&&(ce(fc),Z(0,"span",0),c(1,"span",1)(2,"span",2),$(3,_c,2,0,"span",3),c(4,"span",4),z(5),Z(6,"span",5),l()()(),$(7,vc,2,0,"span",6)),n&2&&(f(3),Q(i.leadingIcon?3:-1),f(4),Q(i._hasTrailingIcon()?7:-1))},dependencies:[To],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2,changeDetection:0})}return a})();var Io=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=X({type:a});static \u0275inj=K({providers:[Qa,{provide:yc,useValue:{separatorKeyCodes:[13]}}],imports:[_n,pe]})}return a})();var $i=new G("CdkAccordion"),Ao=(()=>{class a{_stateChanges=new ie;_openCloseAllActions=new ie;id=u(Se).getId("cdk-accordion-");multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static \u0275fac=function(n){return new(n||a)};static \u0275dir=B({type:a,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",D]},exportAs:["cdkAccordion"],features:[he([{provide:$i,useExisting:a}]),Ae]})}return a})(),Do=(()=>{class a{accordion=u($i,{optional:!0,skipSelf:!0});_changeDetectorRef=u(ye);_expansionDispatcher=u(yn);_openCloseAllSubscription=Me.EMPTY;closed=new V;opened=new V;destroyed=new V;expandedChange=new V;id=u(Se).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let n=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,n)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=ve(!1);_removeUniqueSelectionListener=()=>{};constructor(){}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,n)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===n&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(n){return new(n||a)};static \u0275dir=B({type:a,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",D],disabled:[2,"disabled","disabled",D]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[he([{provide:$i,useValue:void 0}])]})}return a})(),Ro=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=X({type:a});static \u0275inj=K({})}return a})();var Cc=["body"],wc=["bodyWrapper"],kc=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],Sc=["mat-expansion-panel-header","*","mat-action-row"];function Tc(a,t){}var Mc=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Ic=["mat-panel-title","mat-panel-description","*"];function Ac(a,t){a&1&&(tt(0,"span",1),Ct(),tt(1,"svg",2),ka(2,"path",3),gt()())}var Qi=new G("MAT_ACCORDION"),Po=new G("MAT_EXPANSION_PANEL"),Dc=(()=>{class a{_template=u(wt);_expansionPanel=u(Po,{optional:!0});constructor(){}static \u0275fac=function(n){return new(n||a)};static \u0275dir=B({type:a,selectors:[["ng-template","matExpansionPanelContent",""]]})}return a})(),Oo=new G("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),Wi=(()=>{class a extends Do{_viewContainerRef=u(pn);_animationsDisabled=je();_document=u(Je);_ngZone=u(oe);_elementRef=u(de);_renderer=u(kt);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new V;afterCollapse=new V;_inputChanges=new ie;accordion=u(Qi,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=u(Se).getId("mat-expansion-panel-header-");constructor(){super();let e=u(Oo,{optional:!0});this._expansionDispatcher=u(yn),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(ht(null),Be(()=>this.expanded&&!this._portal),Ze(1)).subscribe(()=>{this._portal=new vn(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,n=this._body.nativeElement;return e===n||n.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:n})=>{e===this._bodyWrapper?.nativeElement&&n==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=F({type:a,selectors:[["mat-expansion-panel"]],contentQueries:function(n,i,r){if(n&1&&ke(r,Dc,5),n&2){let o;S(o=T())&&(i._lazyContent=o.first)}},viewQuery:function(n,i){if(n&1&&me(Cc,5)(wc,5),n&2){let r;S(r=T())&&(i._body=r.first),S(r=T())&&(i._bodyWrapper=r.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(n,i){n&2&&O("mat-expanded",i.expanded)("mat-expansion-panel-spacing",i._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",D],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[he([{provide:Qi,useValue:void 0},{provide:Po,useExisting:a}]),De,Ae],ngContentSelectors:Sc,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(n,i){n&1&&(ce(kc),z(0),c(1,"div",2,0)(3,"div",3,1)(5,"div",4),z(6,1),Ht(7,Tc,0,0,"ng-template",5),l(),z(8,2),l()()),n&2&&(f(),Y("inert",i.expanded?null:""),f(2),P("id",i.id),Y("aria-labelledby",i._headerId),f(4),P("cdkPortalOutlet",i._portal))},dependencies:[Zt],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));
  border-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));
  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));
  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2,changeDetection:0})}return a})();var Ki=(()=>{class a{panel=u(Wi,{host:!0});_element=u(de);_focusMonitor=u(Wt);_changeDetectorRef=u(ye);_parentChangeSubscription=Me.EMPTY;constructor(){u(Ue).load(qe);let e=this.panel,n=u(Oo,{optional:!0}),i=u(new $t("tabindex"),{optional:!0}),r=e.accordion?e.accordion._stateChanges.pipe(Be(o=>!!(o.hideToggle||o.togglePosition))):mn;this.tabIndex=parseInt(i||"")||0,this._parentChangeSubscription=Xe(e.opened,e.closed,r,e._inputChanges.pipe(Be(o=>!!(o.hideToggle||o.disabled||o.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(Be(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),n&&(this.expandedHeight=n.expandedHeight,this.collapsedHeight=n.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:fn(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,n){e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=F({type:a,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(n,i){n&1&&C("click",function(){return i._toggle()})("keydown",function(o){return i._keydown(o)}),n&2&&(Y("id",i.panel._headerId)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i._getPanelId())("aria-expanded",i._isExpanded())("aria-disabled",i.panel.disabled),St("height",i._getHeaderHeight()),O("mat-expanded",i._isExpanded())("mat-expansion-toggle-indicator-after",i._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",i._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ve(e)]},ngContentSelectors:Ic,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(n,i){n&1&&(ce(Mc),tt(0,"span",0),z(1),z(2,1),z(3,2),gt(),$(4,Ac,3,0,"span",1)),n&2&&(O("mat-content-hide-toggle",!i._showToggle()),f(4),Q(i._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));
  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));
  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));
  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));
  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {
  outline: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2,changeDetection:0})}return a})();var Lo=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275dir=B({type:a,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return a})(),No=(()=>{class a extends Ao{_keyManager;_ownHeaders=new Vt;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(ht(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(n=>n.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new Kt(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=et(a)))(i||a)}})();static \u0275dir=B({type:a,selectors:[["mat-accordion"]],contentQueries:function(n,i,r){if(n&1&&ke(r,Ki,5),n&2){let o;S(o=T())&&(i._headers=o)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(n,i){n&2&&O("mat-accordion-multi",i.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",D],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[he([{provide:Qi,useExisting:a}]),De]})}return a})(),Qn=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=X({type:a});static \u0275inj=K({imports:[Ro,nr,pe]})}return a})();var Fo=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=X({type:a});static \u0275inj=K({imports:[_n,ir,pe,er]})}return a})();var ea=["*"];function Pc(a,t){a&1&&z(0)}var Oc=["tabListContainer"],Lc=["tabList"],Nc=["tabListInner"],Fc=["nextPaginator"],Bc=["previousPaginator"],zc=["content"];function Gc(a,t){}var Vc=["tabBodyWrapper"],jc=["tabHeader"];function Hc(a,t){}function Uc(a,t){if(a&1&&Ht(0,Hc,0,0,"ng-template",12),a&2){let e=R().$implicit;P("cdkPortalOutlet",e.templateLabel)}}function qc(a,t){if(a&1&&m(0),a&2){let e=R().$implicit;ee(e.textLabel)}}function $c(a,t){if(a&1){let e=be();c(0,"div",7,2),C("click",function(){let i=L(e),r=i.$implicit,o=i.$index,s=R(),d=qt(1);return N(s._handleClick(r,d,o))})("cdkFocusChange",function(i){let r=L(e).$index,o=R();return N(o._tabFocusChanged(i,r))}),Z(2,"span",8)(3,"div",9),c(4,"span",10)(5,"span",11),$(6,Uc,1,1,null,12)(7,qc,1,1),l()()()}if(a&2){let e=t.$implicit,n=t.$index,i=qt(1),r=R();Re(e.labelClass),O("mdc-tab--active",r.selectedIndex===n),P("id",r._getTabLabelId(e,n))("disabled",e.disabled)("fitInkBarToContent",r.fitInkBarToContent),Y("tabIndex",r._getTabIndex(n))("aria-posinset",n+1)("aria-setsize",r._tabs.length)("aria-controls",r._getTabContentId(n))("aria-selected",r.selectedIndex===n)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),f(3),P("matRippleTrigger",i)("matRippleDisabled",e.disabled||r.disableRipple),f(3),Q(e.templateLabel?6:7)}}function Qc(a,t){a&1&&z(0)}function Wc(a,t){if(a&1){let e=be();c(0,"mat-tab-body",13),C("_onCentered",function(){L(e);let i=R();return N(i._removeTabBodyWrapperHeight())})("_onCentering",function(i){L(e);let r=R();return N(r._setTabBodyWrapperHeight(i))})("_beforeCentering",function(i){L(e);let r=R();return N(r._bodyCentered(i))}),l()}if(a&2){let e=t.$implicit,n=t.$index,i=R();Re(e.bodyClass),P("id",i._getTabContentId(n))("content",e.content)("position",e.position)("animationDuration",i.animationDuration)("preserveContent",i.preserveContent),Y("tabindex",i.contentTabIndex!=null&&i.selectedIndex===n?i.contentTabIndex:null)("aria-labelledby",i._getTabLabelId(e,n))("aria-hidden",i.selectedIndex!==n)}}var Kc=new G("MatTabContent"),Xc=(()=>{class a{template=u(wt);constructor(){}static \u0275fac=function(n){return new(n||a)};static \u0275dir=B({type:a,selectors:[["","matTabContent",""]],features:[he([{provide:Kc,useExisting:a}])]})}return a})(),Yc=new G("MatTabLabel"),Vo=new G("MAT_TAB"),Zc=(()=>{class a extends tr{_closestTab=u(Vo,{optional:!0});static \u0275fac=(()=>{let e;return function(i){return(e||(e=et(a)))(i||a)}})();static \u0275dir=B({type:a,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[he([{provide:Yc,useExisting:a}]),De]})}return a})(),jo=new G("MAT_TAB_GROUP"),ta=(()=>{class a{_viewContainerRef=u(pn);_closestTabGroup=u(jo,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new ie;position=null;origin=null;isActive=!1;constructor(){u(Ue).load(qe)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new vn(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=F({type:a,selectors:[["mat-tab"]],contentQueries:function(n,i,r){if(n&1&&ke(r,Zc,5)(r,Xc,7,wt),n&2){let o;S(o=T())&&(i.templateLabel=o.first),S(o=T())&&(i._explicitContent=o.first)}},viewQuery:function(n,i){if(n&1&&me(wt,7),n&2){let r;S(r=T())&&(i._implicitContent=r.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(n,i){n&2&&Y("id",null)},inputs:{disabled:[2,"disabled","disabled",D],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[he([{provide:Vo,useExisting:a}]),Ae],ngContentSelectors:ea,decls:1,vars:0,template:function(n,i){n&1&&(ce(),ci(0,Pc,1,0,"ng-template"))},encapsulation:2})}return a})(),Xi="mdc-tab-indicator--active",Bo="mdc-tab-indicator--no-transition",Yi=class{_items;_currentItem;constructor(t){this._items=t}hide(){this._items.forEach(t=>t.deactivateInkBar()),this._currentItem=void 0}alignToElement(t){let e=this._items.find(i=>i.elementRef.nativeElement===t),n=this._currentItem;if(e!==n&&(n?.deactivateInkBar(),e)){let i=n?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(i),this._currentItem=e}}},Jc=(()=>{class a{_elementRef=u(de);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let n=this._elementRef.nativeElement;if(!e||!n.getBoundingClientRect||!this._inkBarContentElement){n.classList.add(Xi);return}let i=n.getBoundingClientRect(),r=e.width/i.width,o=e.left-i.left;n.classList.add(Bo),this._inkBarContentElement.style.setProperty("transform",`translateX(${o}px) scaleX(${r})`),n.getBoundingClientRect(),n.classList.remove(Bo),n.classList.add(Xi),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Xi)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,n=this._inkBarElement=e.createElement("span"),i=this._inkBarContentElement=e.createElement("span");n.className="mdc-tab-indicator",i.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",n.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(n){return new(n||a)};static \u0275dir=B({type:a,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",D]}})}return a})();var Ho=(()=>{class a extends Jc{elementRef=u(de);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(i){return(e||(e=et(a)))(i||a)}})();static \u0275dir=B({type:a,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(n,i){n&2&&(Y("aria-disabled",!!i.disabled),O("mat-mdc-tab-disabled",i.disabled))},inputs:{disabled:[2,"disabled","disabled",D]},features:[De]})}return a})(),zo={passive:!0},el=650,tl=100,nl=(()=>{class a{_elementRef=u(de);_changeDetectorRef=u(ye);_viewportRuler=u(pi);_dir=u(Xt,{optional:!0});_ngZone=u(oe);_platform=u(Qt);_sharedResizeObserver=u(Wa);_injector=u(ut);_renderer=u(kt);_animationsDisabled=je();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new ie;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new ie;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let n=isNaN(e)?0:e;this._selectedIndex!=n&&(this._selectedIndexChanged=!0,this._selectedIndex=n,this._keyManager&&this._keyManager.updateActiveItem(n))}_selectedIndex=0;selectFocusedIndex=new V;indexFocused=new V;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),zo),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),zo))}ngAfterContentInit(){let e=this._dir?this._dir.change:ha("ltr"),n=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(ua(32),Gt(this._destroyed)),i=this._viewportRuler.change(150).pipe(Gt(this._destroyed)),r=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Kt(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),jt(r,{injector:this._injector}),Xe(e,i,n,this._items.changes,this._itemsResized()).pipe(Gt(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),r()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(o=>{this.indexFocused.emit(o),this._setTabFocus(o)})}_itemsResized(){return typeof ResizeObserver!="function"?mn:this._items.changes.pipe(ht(this._items),pt(e=>new Et(n=>this._ngZone.runOutsideAngular(()=>{let i=new ResizeObserver(r=>n.next(r));return e.forEach(r=>i.observe(r.elementRef.nativeElement)),()=>{i.disconnect()}}))),ga(1),Be(e=>e.some(n=>n.contentRect.width>0&&n.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!fn(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let n=this._items.get(this.focusIndex);n&&!n.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let n=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?n.scrollLeft=0:n.scrollLeft=n.scrollWidth-n.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,n=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(n)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let n=this._tabListContainer.nativeElement.offsetWidth,i=(e=="before"?-1:1)*n/3;return this._scrollTo(this._scrollDistance+i)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let n=this._items?this._items.toArray()[e]:null;if(!n)return;let i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:r,offsetWidth:o}=n.elementRef.nativeElement,s,d;this._getLayoutDirection()=="ltr"?(s=r,d=s+o):(d=this._tabListInner.nativeElement.offsetWidth-r,s=d-o);let h=this.scrollDistance,p=this.scrollDistance+i;s<h?this.scrollDistance-=h-s:d>p&&(this.scrollDistance+=Math.min(d-p,s-h))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,n=this._elementRef.nativeElement.offsetWidth,i=e-n>=5;i||(this.scrollDistance=0),i!==this._showPaginationControls&&(this._showPaginationControls=i,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,n=this._tabListContainer.nativeElement.offsetWidth;return e-n||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,n=e?e.elementRef.nativeElement:null;n?this._inkBar.alignToElement(n):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,n){n&&n.button!=null&&n.button!==0||(this._stopInterval(),pa(el,tl).pipe(Gt(Xe(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:i,distance:r}=this._scrollHeader(e);(r===0||r>=i)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let n=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(n,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:n,distance:this._scrollDistance}}static \u0275fac=function(n){return new(n||a)};static \u0275dir=B({type:a,inputs:{disablePagination:[2,"disablePagination","disablePagination",D],selectedIndex:[2,"selectedIndex","selectedIndex",Ve]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return a})(),il=(()=>{class a extends nl{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new Yi(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=et(a)))(i||a)}})();static \u0275cmp=F({type:a,selectors:[["mat-tab-header"]],contentQueries:function(n,i,r){if(n&1&&ke(r,Ho,4),n&2){let o;S(o=T())&&(i._items=o)}},viewQuery:function(n,i){if(n&1&&me(Oc,7)(Lc,7)(Nc,7)(Fc,5)(Bc,5),n&2){let r;S(r=T())&&(i._tabListContainer=r.first),S(r=T())&&(i._tabList=r.first),S(r=T())&&(i._tabListInner=r.first),S(r=T())&&(i._nextPaginator=r.first),S(r=T())&&(i._previousPaginator=r.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(n,i){n&2&&O("mat-mdc-tab-header-pagination-controls-enabled",i._showPaginationControls)("mat-mdc-tab-header-rtl",i._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",D]},features:[De],ngContentSelectors:ea,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(n,i){n&1&&(ce(),c(0,"div",5,0),C("click",function(){return i._handlePaginatorClick("before")})("mousedown",function(o){return i._handlePaginatorPress("before",o)})("touchend",function(){return i._stopInterval()}),Z(2,"div",6),l(),c(3,"div",7,1),C("keydown",function(o){return i._handleKeydown(o)}),c(5,"div",8,2),C("cdkObserveContent",function(){return i._onContentChanges()}),c(7,"div",9,3),z(9),l()()(),c(10,"div",10,4),C("mousedown",function(o){return i._handlePaginatorPress("after",o)})("click",function(){return i._handlePaginatorClick("after")})("touchend",function(){return i._stopInterval()}),Z(12,"div",6),l()),n&2&&(O("mat-mdc-tab-header-pagination-disabled",i._disableScrollBefore),P("matRippleDisabled",i._disableScrollBefore||i.disableRipple),f(3),O("_mat-animation-noopable",i._animationsDisabled),f(2),Y("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby||null),f(5),O("mat-mdc-tab-header-pagination-disabled",i._disableScrollAfter),P("matRippleDisabled",i._disableScrollAfter||i.disableRipple))},dependencies:[Yt,ja],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--mat-tab-divider-height, 1px);
  border-top-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2})}return a})(),al=new G("MAT_TABS_CONFIG"),Go=(()=>{class a extends Zt{_host=u(Zi);_ngZone=u(oe);_centeringSub=Me.EMPTY;_leavingSub=Me.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(ht(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(n){return new(n||a)};static \u0275dir=B({type:a,selectors:[["","matTabBodyHost",""]],features:[De]})}return a})(),Zi=(()=>{class a{_elementRef=u(de);_dir=u(Xt,{optional:!0});_ngZone=u(oe);_injector=u(ut);_renderer=u(kt);_diAnimationsDisabled=je();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=Me.EMPTY;_position;_previousPosition;_onCentering=new V;_beforeCentering=new V;_afterLeavingCenter=new V;_onCentered=new V(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=u(ye);this._dirChangeSubscription=this._dir.change.subscribe(n=>{this._computePositionAnimationState(n),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),jt(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,n=i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),i.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",n),this._renderer.listen(e,"transitioncancel",n)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),jt(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=F({type:a,selectors:[["mat-tab-body"]],viewQuery:function(n,i){if(n&1&&me(Go,5)(zc,5),n&2){let r;S(r=T())&&(i._portalHost=r.first),S(r=T())&&(i._contentElement=r.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(n,i){n&2&&Y("inert",i._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(n,i){n&1&&(c(0,"div",1,0),Ht(2,Gc,0,0,"ng-template",2),l()),n&2&&O("mat-tab-body-content-left",i._position==="left")("mat-tab-body-content-right",i._position==="right")("mat-tab-body-content-can-animate",i._position==="center"||i._previousPosition==="center")},dependencies:[Go,Ja],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2})}return a})(),Uo=(()=>{class a{_elementRef=u(de);_changeDetectorRef=u(ye);_ngZone=u(oe);_tabsSubscription=Me.EMPTY;_tabLabelSubscription=Me.EMPTY;_tabBodySubscription=Me.EMPTY;_diAnimationsDisabled=je();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Vt;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let n=e+"";this._animationDuration=/^\d+$/.test(n)?e+"ms":n}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let n=this._elementRef.nativeElement.classList;n.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&n.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new V;focusChange=new V;animationDone=new V;selectedTabChange=new V(!0);_groupId;_isServer=!u(Qt).isBrowser;constructor(){let e=u(al,{optional:!0});this._groupId=u(Se).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let n=this._selectedIndex==null;if(!n){this.selectedTabChange.emit(this._createChangeEvent(e));let i=this._tabBodyWrapper.nativeElement;i.style.minHeight=i.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((i,r)=>i.isActive=r===e),n||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((n,i)=>{n.position=i-e,this._selectedIndex!=null&&n.position==0&&!n.origin&&(n.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let n=this._tabs.toArray(),i;for(let r=0;r<n.length;r++)if(n[r].isActive){this._indexToSelect=this._selectedIndex=r,this._lastFocusedTabIndex=null,i=n[r];break}!i&&n[e]&&Promise.resolve().then(()=>{n[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(ht(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(n=>n._closestTabGroup===this||!n._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let n=this._tabHeader;n&&(n.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let n=new Ji;return n.index=e,this._tabs&&this._tabs.length&&(n.tab=this._tabs.toArray()[e]),n}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Xe(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,n){return e.id||`${this._groupId}-label-${n}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let n=this._tabBodyWrapper.nativeElement;n.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(n.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,n,i){n.focusIndex=i,e.disabled||(this.selectedIndex=i)}_getTabIndex(e){let n=this._lastFocusedTabIndex??this.selectedIndex;return e===n?0:-1}_tabFocusChanged(e,n){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=n)}_bodyCentered(e){e&&this._tabBodies?.forEach((n,i)=>n._setActiveClass(i===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=F({type:a,selectors:[["mat-tab-group"]],contentQueries:function(n,i,r){if(n&1&&ke(r,ta,5),n&2){let o;S(o=T())&&(i._allTabs=o)}},viewQuery:function(n,i){if(n&1&&me(Vc,5)(jc,5)(Zi,5),n&2){let r;S(r=T())&&(i._tabBodyWrapper=r.first),S(r=T())&&(i._tabHeader=r.first),S(r=T())&&(i._tabBodies=r)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(n,i){n&2&&(Y("mat-align-tabs",i.alignTabs),Re("mat-"+(i.color||"primary")),St("--mat-tab-animation-duration",i.animationDuration),O("mat-mdc-tab-group-dynamic-height",i.dynamicHeight)("mat-mdc-tab-group-inverted-header",i.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",i.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",D],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",D],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",D],selectedIndex:[2,"selectedIndex","selectedIndex",Ve],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",Ve],disablePagination:[2,"disablePagination","disablePagination",D],disableRipple:[2,"disableRipple","disableRipple",D],preserveContent:[2,"preserveContent","preserveContent",D],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[he([{provide:jo,useExisting:a}])],ngContentSelectors:ea,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(n,i){n&1&&(ce(),c(0,"mat-tab-header",3,0),C("indexFocused",function(o){return i._focusChanged(o)})("selectFocusedIndex",function(o){return i.selectedIndex=o}),ze(2,$c,8,17,"div",4,di),l(),$(4,Qc,1,0),c(5,"div",5,1),ze(7,Wc,1,10,"mat-tab-body",6,di),l()),n&2&&(P("selectedIndex",i.selectedIndex||0)("disableRipple",i.disableRipple)("disablePagination",i.disablePagination),wa("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby),f(2),Ge(i._tabs),f(2),Q(i._isServer?4:-1),f(),O("_mat-animation-noopable",i._animationsDisabled()),f(2),Ge(i._tabs))},dependencies:[il,Ho,Ga,Yt,Zt,Zi],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2})}return a})(),Ji=class{index;tab};var qo=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=X({type:a});static \u0275inj=K({imports:[pe]})}return a})();var ol=["*",[["mat-toolbar-row"]]],sl=["*","mat-toolbar-row"],cl=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275dir=B({type:a,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return a})(),$o=(()=>{class a{_elementRef=u(de);_platform=u(Qt);_document=u(Je);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=F({type:a,selectors:[["mat-toolbar"]],contentQueries:function(n,i,r){if(n&1&&ke(r,cl,5),n&2){let o;S(o=T())&&(i._toolbarRows=o)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(n,i){n&2&&(Re(i.color?"mat-"+i.color:""),O("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",i._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:sl,decls:2,vars:0,template:function(n,i){n&1&&(ce(ol),z(0),z(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return a})();var Qo=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=X({type:a});static \u0275inj=K({imports:[pe]})}return a})();var cn=(x=>(x.STANDALONE_COMPONENT="standalone-component",x.SMART_COMPONENT="smart-component",x.PRESENTATIONAL_COMPONENT="presentational-component",x.SIGNAL_COMPONENT="signal-component",x.LAYOUT_COMPONENT="layout-component",x.FEATURE_COMPONENT="feature-component",x.INJECTABLE_SERVICE="injectable-service",x.HTTP_SERVICE="http-service",x.FACADE_SERVICE="facade-service",x.REPOSITORY_SERVICE="repository-service",x.UTILITY_SERVICE="utility-service",x.ROUTE_NODE="route-node",x.CHILD_ROUTE="child-route",x.LAZY_LOADED_ROUTE="lazy-loaded-route",x.ROUTE_GUARD="route-guard",x.ROUTE_RESOLVER="route-resolver",x.ROUTER_OUTLET="router-outlet",x.SIGNAL="signal",x.COMPUTED_SIGNAL="computed-signal",x.LINKED_SIGNAL="linked-signal",x.SIGNAL_EFFECT="signal-effect",x.SIGNAL_RESOURCE="signal-resource",x.OBSERVABLE="observable",x.SUBJECT="subject",x.BEHAVIOR_SUBJECT="behavior-subject",x.REPLAY_SUBJECT="replay-subject",x.RXJS_OPERATOR="rxjs-operator",x.NGRX_STORE="ngrx-store",x.NGRX_ACTION="ngrx-action",x.NGRX_REDUCER="ngrx-reducer",x.NGRX_EFFECT="ngrx-effect",x.NGRX_SELECTOR="ngrx-selector",x.SIGNAL_STORE="signal-store",x.MATERIAL_TOOLBAR="material-toolbar",x.MATERIAL_SIDENAV="material-sidenav",x.MATERIAL_TABLE="material-table",x.MATERIAL_DIALOG="material-dialog",x.MATERIAL_CARD="material-card",x.MATERIAL_FORM_FIELD="material-form-field",x.MODULE="module",x.MICRO_FRONTEND="micro-frontend",x.CLEAN_ARCHITECTURE_LAYER="clean-architecture-layer",x.HEXAGONAL_ARCHITECTURE="hexagonal-architecture",x.REST_API="rest-api",x.GRAPHQL_API="graphql-api",x.DATABASE="database",x.DEVOPS_PIPELINE="devops-pipeline",x))(cn||{}),na=(h=>(h.COMPONENTS="Components",h.SERVICES="Services",h.ROUTING="Routing",h.SIGNALS="Signals",h.RXJS="RxJS",h.STATE_MANAGEMENT="State Management",h.UI_KIT="UI Kit",h.ARCHITECTURE="Architecture",h.ECOSYSTEM="Ecosystem",h))(na||{});function ia(a){return a.startsWith("standalone")||a.startsWith("smart")||a.startsWith("presentational")||a.startsWith("signal-component")||a.startsWith("layout")||a.startsWith("feature")?"Components":a.includes("service")?"Services":a.includes("route")||a.includes("router")?"Routing":a.includes("signal")?"Signals":a.includes("subject")||a.includes("observable")||a.includes("rxjs")?"RxJS":a.includes("ngrx")||a.includes("store")?"State Management":a.includes("material")?"UI Kit":a.includes("architecture")||a.includes("module")||a.includes("micro")?"Architecture":"Ecosystem"}var Wo=[{type:"standalone-component",category:"Components",icon:"\u{1F4E6}",defaultName:"Standalone Component",description:"Composant autonome moderne",supportedShapes:["rectangle","text"]},{type:"smart-component",category:"Components",icon:"\u{1F9E0}",defaultName:"Smart Component",description:"Composant avec logique m\xE9tier",supportedShapes:["rectangle","text"]},{type:"presentational-component",category:"Components",icon:"\u{1F3A8}",defaultName:"Presentational Component",description:"Composant de pr\xE9sentation pure",supportedShapes:["rectangle","text"]},{type:"signal-component",category:"Signals",icon:"\u26A1",defaultName:"Signal Component",description:"Composant avec Signals",supportedShapes:["rectangle","text"]},{type:"injectable-service",category:"Services",icon:"\u{1F527}",defaultName:"Angular Service",description:"Service injectable",supportedShapes:["rectangle","text"]},{type:"http-service",category:"Services",icon:"\u{1F310}",defaultName:"HTTP Service",description:"Service HTTP avec HttpClient",supportedShapes:["rectangle","text"]},{type:"route-node",category:"Routing",icon:"\u{1F6E3}\uFE0F",defaultName:"Route Angular",description:"Route Angular standard",supportedShapes:["rectangle","text"]},{type:"route-guard",category:"Routing",icon:"\u{1F6E1}\uFE0F",defaultName:"Route Guard",description:"Protection de route",supportedShapes:["rectangle","text"]},{type:"signal",category:"Signals",icon:"\u26A1",defaultName:"Signal",description:"Signal Angular r\xE9actif",supportedShapes:["ellipse","text"]},{type:"subject",category:"RxJS",icon:"\u{1F4E2}",defaultName:"Subject RxJS",description:"Subject pour flux de donn\xE9es",supportedShapes:["rectangle","text"]},{type:"ngrx-store",category:"State Management",icon:"\u{1F3EA}",defaultName:"NgRx Store",description:"Store pour la gestion d'\xE9tat",supportedShapes:["rectangle","text"]},{type:"material-card",category:"UI Kit",icon:"\u{1F0CF}",defaultName:"Material Card",description:"Carte Material Design",supportedShapes:["rectangle","text"]},{type:"module",category:"Architecture",icon:"\u{1F4E6}",defaultName:"Angular Module",description:"Module Angular (NgModule)",supportedShapes:["rectangle","text"]},{type:"micro-frontend",category:"Architecture",icon:"\u{1F9E9}",defaultName:"Micro Frontend",description:"Architecture micro-frontend",supportedShapes:["rectangle","text"]},{type:"rest-api",category:"Ecosystem",icon:"\u{1F50C}",defaultName:"REST API",description:"API RESTful",supportedShapes:["rectangle","text"]},{type:"database",category:"Ecosystem",icon:"\u{1F5C3}\uFE0F",defaultName:"Database",description:"Base de donn\xE9es",supportedShapes:["rectangle","text"]},{type:"devops-pipeline",category:"Ecosystem",icon:"\u{1F680}",defaultName:"DevOps Pipeline",description:"Pipeline CI/CD",supportedShapes:["rectangle","text"]}];var Ko=[{id:"ecommerce",name:"E-commerce Architecture",description:"Architecture compl\xE8te pour application e-commerce avec panier, catalogue et paiement",icon:"\u{1F6D2}",category:"Business",components:["standalone-component","smart-component","injectable-service","ngrx-store","route-node"]},{id:"dashboard",name:"Dashboard Analytics",description:"Architecture pour tableau de bord avec visualisation de donn\xE9es en temps r\xE9el",icon:"\u{1F4CA}",category:"Analytics",components:["standalone-component","signal-component","route-node","injectable-service","signal"]},{id:"micro-frontend",name:"Micro-Frontend",description:"Architecture micro-frontend avec Module Federation",icon:"\u{1F9E9}",category:"Enterprise",components:["standalone-component","injectable-service","route-node","micro-frontend"]},{id:"reactive-forms",name:"Reactive Forms",description:"Architecture pour formulaires r\xE9actifs complexes",icon:"\u{1F4DD}",category:"Forms",components:["standalone-component","injectable-service","subject"]},{id:"real-time",name:"Real-Time Application",description:"Architecture temps r\xE9el avec WebSocket et RxJS",icon:"\u26A1",category:"Real-Time",components:["signal-component","subject","injectable-service","signal"]}];var Wn=class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=F({type:a,selectors:[["app-docs"]],decls:216,vars:0,consts:[[1,"docs-container"],[1,"docs-header"],["expanded",""],[1,"doc-content"],[1,"shortcuts-table"]],template:function(e,n){e&1&&(c(0,"div",0)(1,"div",1)(2,"h1"),m(3,"\u{1F4DA} Documentation"),l(),c(4,"p"),m(5,"Guide complet pour utiliser l'Angular Architecture Kit"),l()(),c(6,"mat-accordion")(7,"mat-expansion-panel",2)(8,"mat-expansion-panel-header")(9,"mat-panel-title")(10,"mat-icon"),m(11,"info"),l(),m(12," Introduction "),l()(),c(13,"div",3)(14,"h3"),m(15,"Bienvenue dans Angular Architecture Kit"),l(),c(16,"p"),m(17," Cette application vous permet de cr\xE9er facilement des diagrammes d'architecture Angular pour vos projets. "),l(),c(18,"h4"),m(19,"Fonctionnalit\xE9s :"),l(),c(20,"ul")(21,"li"),m(22,"\u2705 G\xE9n\xE9ration de composants Angular"),l(),c(23,"li"),m(24,"\u2705 Pr\xE9visualisation en temps r\xE9el"),l(),c(25,"li"),m(26,"\u2705 Templates d'architecture pr\xE9d\xE9finis"),l(),c(27,"li"),m(28,"\u2705 Export vers Excalidraw"),l(),c(29,"li"),m(30,"\u2705 Sauvegarde automatique"),l(),c(31,"li"),m(32,"\u2705 Mode sombre"),l(),c(33,"li"),m(34,"\u2705 Raccourcis clavier"),l()()()(),c(35,"mat-expansion-panel")(36,"mat-expansion-panel-header")(37,"mat-panel-title")(38,"mat-icon"),m(39,"build"),l(),m(40," Guide d'utilisation rapide "),l()(),c(41,"div",3)(42,"h4"),m(43,"\u{1F680} D\xE9marrage rapide"),l(),c(44,"ol")(45,"li"),m(46,'Cliquez sur "G\xE9n\xE9rer" pour cr\xE9er une biblioth\xE8que de base'),l(),c(47,"li"),m(48,`Parcourez les composants dans l'onglet "Composants"`),l(),c(49,"li"),m(50,'Ajoutez des composants avec le bouton "Ajouter"'),l(),c(51,"li"),m(52,`Pr\xE9visualisez dans l'onglet "Pr\xE9visualisation"`),l(),c(53,"li"),m(54,"Exportez votre biblioth\xE8que"),l()(),c(55,"h4"),m(56,"\u{1F3A8} Personnalisation"),l(),c(57,"ul")(58,"li"),m(59,"Utilisez la recherche pour trouver des composants"),l(),c(60,"li"),m(61,"Filtrez par cat\xE9gorie"),l(),c(62,"li"),m(63,"Ajoutez des favoris avec l'\xE9toile \u2B50"),l(),c(64,"li"),m(65,"G\xE9n\xE9rez des templates complets"),l()()()(),c(66,"mat-expansion-panel")(67,"mat-expansion-panel-header")(68,"mat-panel-title")(69,"mat-icon"),m(70,"keyboard"),l(),m(71," Raccourcis clavier "),l()(),c(72,"div",3)(73,"table",4)(74,"tr")(75,"th"),m(76,"Raccourci"),l(),c(77,"th"),m(78,"Action"),l()(),c(79,"tr")(80,"td")(81,"kbd"),m(82,"Ctrl"),l(),m(83," + "),c(84,"kbd"),m(85,"G"),l()(),c(86,"td"),m(87,"G\xE9n\xE9rer la biblioth\xE8que"),l()(),c(88,"tr")(89,"td")(90,"kbd"),m(91,"Ctrl"),l(),m(92," + "),c(93,"kbd"),m(94,"E"),l()(),c(95,"td"),m(96,"Ouvrir le dialogue d'export"),l()(),c(97,"tr")(98,"td")(99,"kbd"),m(100,"Ctrl"),l(),m(101," + "),c(102,"kbd"),m(103,"S"),l()(),c(104,"td"),m(105,"Sauvegarder la biblioth\xE8que"),l()(),c(106,"tr")(107,"td")(108,"kbd"),m(109,"Ctrl"),l(),m(110," + "),c(111,"kbd"),m(112,"P"),l()(),c(113,"td"),m(114,"Exporter en PDF"),l()(),c(115,"tr")(116,"td")(117,"kbd"),m(118,"Ctrl"),l(),m(119," + "),c(120,"kbd"),m(121,"Shift"),l(),m(122," + "),c(123,"kbd"),m(124,"S"),l()(),c(125,"td"),m(126,"Exporter en SVG"),l()(),c(127,"tr")(128,"td")(129,"kbd"),m(130,"Ctrl"),l(),m(131," + "),c(132,"kbd"),m(133,"Shift"),l(),m(134," + "),c(135,"kbd"),m(136,"C"),l()(),c(137,"td"),m(138,"Copier le lien de partage"),l()(),c(139,"tr")(140,"td")(141,"kbd"),m(142,"F1"),l()(),c(143,"td"),m(144,"Ouvrir la documentation"),l()()()()(),c(145,"mat-expansion-panel")(146,"mat-expansion-panel-header")(147,"mat-panel-title")(148,"mat-icon"),m(149,"code"),l(),m(150," API Reference "),l()(),c(151,"div",3)(152,"h4"),m(153,"LibraryGeneratorService"),l(),c(154,"p"),m(155,"Service principal pour la g\xE9n\xE9ration de biblioth\xE8ques."),l(),c(156,"h5"),m(157,"M\xE9thodes principales :"),l(),c(158,"ul")(159,"li")(160,"code"),m(161,"generateLibrary()"),l(),m(162," - G\xE9n\xE8re la biblioth\xE8que de base"),l(),c(163,"li")(164,"code"),m(165,"generateFullLibrary()"),l(),m(166," - G\xE9n\xE8re tous les composants"),l(),c(167,"li")(168,"code"),m(169,"generateArchitectureTemplate(name)"),l(),m(170," - G\xE9n\xE8re un template sp\xE9cifique "),l(),c(171,"li")(172,"code"),m(173,"addComponentToLibrary(type)"),l(),m(174," - Ajoute un composant"),l(),c(175,"li")(176,"code"),m(177,"removeComponentFromLibrary(id)"),l(),m(178," - Supprime un composant"),l(),c(179,"li")(180,"code"),m(181,"exportLibrary()"),l(),m(182," - Exporte en JSON"),l(),c(183,"li")(184,"code"),m(185,"downloadLibrary(filename)"),l(),m(186," - T\xE9l\xE9charge le fichier"),l()(),c(187,"h4"),m(188,"CanvasRendererService"),l(),c(189,"p"),m(190,"Service pour le rendu des \xE9l\xE9ments sur canvas."),l(),c(191,"h4"),m(192,"FileExportService"),l(),c(193,"p"),m(194,"Service pour l'export/import de fichiers."),l()()(),c(195,"mat-expansion-panel")(196,"mat-expansion-panel-header")(197,"mat-panel-title")(198,"mat-icon"),m(199,"warning"),l(),m(200," D\xE9pannage "),l()(),c(201,"div",3)(202,"h4"),m(203,"Probl\xE8mes courants"),l(),c(204,"h5"),m(205,"Les composants ne s'affichent pas dans Excalidraw"),l(),c(206,"p"),m(207,"V\xE9rifiez que vous importez correctement le fichier .excalidrawlib."),l(),c(208,"h5"),m(209,"La pr\xE9visualisation est vide"),l(),c(210,"p"),m(211,'Cliquez sur "G\xE9n\xE9rer" ou "Ajouter" pour cr\xE9er des composants.'),l(),c(212,"h5"),m(213,"Le zoom ne fonctionne pas"),l(),c(214,"p"),m(215,"Utilisez la molette de la souris ou les boutons de zoom."),l()()()()())},dependencies:[it,Nt,Qn,No,Wi,Ki,Lo,rt,at,At],styles:[".docs-container[_ngcontent-%COMP%]{padding:24px;max-width:900px;margin:0 auto}.docs-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:32px}.docs-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem;color:#1976d2}.docs-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#666}.doc-content[_ngcontent-%COMP%]{padding:16px}.doc-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .doc-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .doc-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-top:16px;color:#333}.doc-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .doc-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:24px}.doc-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:8px 0}.doc-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f5f5f5;padding:2px 6px;border-radius:4px;font-family:monospace}.doc-content[_ngcontent-%COMP%]   kbd[_ngcontent-%COMP%]{background:#f5f5f5;border:1px solid #ddd;border-radius:4px;padding:2px 6px;font-size:.9em}.shortcuts-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.shortcuts-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .shortcuts-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:8px;text-align:left;border-bottom:1px solid #eee}.shortcuts-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#f5f5f5}"],changeDetection:0})};var q={components:{primary:"#DD0031",dark:"#C3002F",light:"#FFF5F5",border:"#DD0031",text:"#0F0F11"},services:{primary:"#43A047",dark:"#2E7D32",light:"#E8F5E9",border:"#43A047",text:"#1B5E20"},signals:{primary:"#7C4DFF",dark:"#5E35B1",light:"#F3E5F5",border:"#7C4DFF",text:"#4A148C"},rxjs:{primary:"#E91E63",dark:"#C2185B",light:"#FCE4EC",border:"#E91E63",text:"#880E4F"},routing:{primary:"#2196F3",dark:"#1565C0",light:"#E3F2FD",border:"#2196F3",text:"#0D47A1"},architecture:{primary:"#FB8C00",dark:"#E65100",light:"#FFF3E0",border:"#FB8C00",text:"#E65100"}};var Bt=class a{_currentLibrary=ve(null);_selectedCategory=ve("all");_isGenerating=ve(!1);_elementCounter=ve(0);currentLibrary=this._currentLibrary.asReadonly();selectedCategory=this._selectedCategory.asReadonly();isGenerating=this._isGenerating.asReadonly();totalElements=un(()=>{let t=this._currentLibrary();return t?t.libraryItems.length:0});categories=un(()=>{let t=this._currentLibrary();if(!t)return[];let e=new Set(t.libraryItems.map(n=>n.id.split("-")[0]||"other"));return Array.from(e)});constructor(){}createElement(t,e,n,i={}){let r=this._elementCounter();return this._elementCounter.set(r+1),re({id:`element-${r}-${Date.now()}`,type:t,x:e,y:n,width:i.width||100,height:i.height||50,angle:0,strokeColor:i.strokeColor||"#000000",backgroundColor:i.backgroundColor||"transparent",fillStyle:i.fillStyle||"solid",strokeWidth:i.strokeWidth||2,strokeStyle:i.strokeStyle||"solid",roughness:i.roughness||1,opacity:i.opacity||100,groupIds:i.groupIds||[],roundness:i.roundness||null,boundElements:i.boundElements||null,updated:Date.now(),link:i.link||null,locked:i.locked||!1},i)}createRectangle(t,e,n,i,r,o={}){let s=q[r];return this.createElement("rectangle",t,e,re({width:n,height:i,strokeColor:s.primary,backgroundColor:s.light,fillStyle:"solid",strokeWidth:2,roughness:1,roundness:{type:3,value:8}},o))}createText(t,e,n,i={}){let r=i.fontSize||20,o=n.length*r*.6;return this.createElement("text",t,e,re({width:i.width||o,height:i.height||r*1.5,text:n,fontSize:r,fontFamily:i.fontFamily||1,textAlign:i.textAlign||"left",verticalAlign:i.verticalAlign||"top",strokeColor:i.strokeColor||"#000000",backgroundColor:"transparent",fillStyle:"solid",strokeWidth:2,roughness:1,opacity:100},i))}createGroup(t,e){let n=`group-${t.toLowerCase().replace(/\s+/g,"-")}`,i=e.map(r=>Ke(re({},r),{groupIds:[n]}));return{name:t,elements:i,boundElements:null}}generateStandaloneComponent(){let t=[];return t.push(this.createRectangle(0,0,250,180,"components")),t.push(this.createText(20,10,"Standalone Component",{fontSize:20,strokeColor:q.components.dark})),t.push(this.createText(200,10,"\u{1F4E6}",{fontSize:24})),t.push(this.createRectangle(20,50,210,30,"components",{backgroundColor:"#E8F5E9",strokeColor:"#4CAF50",roundness:{type:3,value:4},strokeWidth:1})),t.push(this.createText(30,55,"standalone: true",{fontSize:14,strokeColor:"#2E7D32"})),[{label:"template.html",y:90},{label:"styles.scss",y:115},{label:"component.ts",y:140}].forEach(o=>{t.push(this.createText(20,o.y,o.label,{fontSize:12,strokeColor:"#555555"}))}),this.createGroup("Standalone Component",t)}generateSignalComponent(){let t=[];return t.push(this.createRectangle(0,0,250,150,"signals")),t.push(this.createText(20,10,"Signal Component",{fontSize:20,strokeColor:q.signals.dark})),t.push(this.createText(200,10,"\u26A1",{fontSize:24})),[{name:"count: signal<number>",y:50},{name:"user: signal<User>",y:75},{name:"loading: signal<boolean>",y:100}].forEach(o=>{t.push(this.createText(20,o.y,o.name,{fontSize:14,strokeColor:q.signals.dark}))}),this.createGroup("Signal Component",t)}generateSmartComponent(){let t=[];return t.push(this.createRectangle(0,0,250,150,"components",{strokeWidth:3,backgroundColor:"#FFF0F0"})),t.push(this.createText(20,10,"Smart Component",{fontSize:20,strokeColor:q.components.dark})),t.push(this.createText(200,10,"\u{1F9E0}",{fontSize:24})),t.push(this.createText(20,50,"@Input() data",{fontSize:14,strokeColor:"#1565C0"})),t.push(this.createText(20,80,"UserService",{fontSize:14,strokeColor:"#2E7D32"})),this.createGroup("Smart Component",t)}generatePresentationalComponent(){let t=[];return t.push(this.createRectangle(0,0,250,150,"components",{strokeColor:"#78909C",backgroundColor:"#FAFAFA",strokeStyle:"dashed"})),t.push(this.createText(20,10,"Presentational",{fontSize:20,strokeColor:"#546E7A"})),t.push(this.createText(200,10,"\u{1F3A8}",{fontSize:24})),t.push(this.createText(20,50,"Pure UI Component",{fontSize:16,strokeColor:"#78909C"})),t.push(this.createText(20,80,"@Input() data",{fontSize:14,strokeColor:"#546E7A"})),this.createGroup("Presentational Component",t)}generateService(){let t=[];return t.push(this.createRectangle(0,0,200,100,"services")),t.push(this.createText(20,10,"Angular Service",{fontSize:18,strokeColor:q.services.dark})),t.push(this.createText(155,10,"\u{1F527}",{fontSize:20})),t.push(this.createRectangle(20,50,160,25,"services",{backgroundColor:"#E8F5E9",strokeColor:"#4CAF50",roundness:{type:3,value:4},strokeWidth:1})),t.push(this.createText(30,53,"@Injectable()",{fontSize:12,strokeColor:"#2E7D32"})),this.createGroup("Angular Service",t)}generateLibrary(){this._isGenerating.set(!0);try{let e={type:"excalidrawlib",version:2,source:"https://github.com/votre-repo/angular-architecture-kit",libraryItems:[{id:"components-standalone",status:"published",elements:this.generateStandaloneComponent().elements,created:Date.now()},{id:"components-smart",status:"published",elements:this.generateSmartComponent().elements,created:Date.now()},{id:"components-presentational",status:"published",elements:this.generatePresentationalComponent().elements,created:Date.now()},{id:"signals-component",status:"published",elements:this.generateSignalComponent().elements,created:Date.now()},{id:"services-injectable",status:"published",elements:this.generateService().elements,created:Date.now()}]};return this._currentLibrary.set(e),console.log("\u2705 Biblioth\xE8que g\xE9n\xE9r\xE9e avec succ\xE8s"),e}catch(t){throw console.error("\u274C Erreur lors de la g\xE9n\xE9ration:",t),t}finally{this._isGenerating.set(!1)}}generateFullLibrary(){this._isGenerating.set(!0);try{let t=[];Object.values(na).forEach(n=>{try{this.generateByCategory(n).forEach(r=>{t.push({id:`${n.toLowerCase()}-${r.name.toLowerCase().replace(/\s+/g,"-")}`,status:"published",elements:r.elements,created:Date.now()})})}catch(i){console.warn(`Impossible de g\xE9n\xE9rer la cat\xE9gorie ${n}:`,i)}});let e={type:"excalidrawlib",version:2,source:"https://github.com/votre-repo/angular-architecture-kit",libraryItems:t};return this._currentLibrary.set(e),console.log(`\u2705 Biblioth\xE8que compl\xE8te g\xE9n\xE9r\xE9e: ${t.length} \xE9l\xE9ments`),e}catch(t){throw console.error("\u274C Erreur lors de la g\xE9n\xE9ration compl\xE8te:",t),t}finally{this._isGenerating.set(!1)}}generateArchitectureTemplate(t){this._isGenerating.set(!0);try{let n={ecommerce:()=>[this.generateStandaloneComponent(),this.generateSmartComponent(),this.generateService()],dashboard:()=>[this.generateStandaloneComponent(),this.generateSignalComponent(),this.generateService()],"micro-frontend":()=>[this.generateStandaloneComponent(),this.generateService()],"reactive-forms":()=>[this.generateStandaloneComponent(),this.generateService()],"real-time":()=>[this.generateSignalComponent(),this.generateService()]}[t];if(!n)throw new Error(`Template inconnu: ${t}`);let r=n().map((s,d)=>({id:`${t}-${d}-${s.name.toLowerCase().replace(/\s+/g,"-")}`,status:"published",elements:s.elements,created:Date.now()})),o={type:"excalidrawlib",version:2,source:"https://github.com/votre-repo/angular-architecture-kit",libraryItems:r};return this._currentLibrary.set(o),console.log(`\u2705 Template "${t}" g\xE9n\xE9r\xE9 avec ${r.length} \xE9l\xE9ments`),o}catch(e){throw console.error("\u274C Erreur lors de la g\xE9n\xE9ration du template:",e),e}finally{this._isGenerating.set(!1)}}generateComponentByType(t){switch(t){case"standalone-component":return this.generateStandaloneComponent();case"smart-component":return this.generateSmartComponent();case"presentational-component":return this.generatePresentationalComponent();case"signal-component":return this.generateSignalComponent();case"layout-component":return this.generateLayoutComponent();case"feature-component":return this.generateFeatureComponent();case"injectable-service":return this.generateService();case"http-service":return this.generateHttpService();case"facade-service":return this.generateFacadeService();case"repository-service":return this.generateRepositoryService();case"utility-service":return this.generateService();case"route-node":return this.generateRoute();case"child-route":return this.generateRoute();case"lazy-loaded-route":return this.generateRoute();case"route-guard":return this.generateRouteGuard();case"route-resolver":return this.generateRouteGuard();case"router-outlet":return this.generateRoute();case"signal":return this.generateSignal();case"computed-signal":return this.generateSignal();case"linked-signal":return this.generateSignal();case"signal-effect":return this.generateSignal();case"signal-resource":return this.generateSignal();case"observable":return this.generateObservable();case"subject":return this.generateSubject();case"behavior-subject":return this.generateBehaviorSubject();case"replay-subject":return this.generateBehaviorSubject();case"rxjs-operator":return this.generateSubject();case"ngrx-store":return this.generateNgRxStore();case"ngrx-action":return this.generateNgRxStore();case"ngrx-reducer":return this.generateNgRxStore();case"ngrx-effect":return this.generateNgRxStore();case"ngrx-selector":return this.generateNgRxStore();case"signal-store":return this.generateNgRxStore();case"material-toolbar":return this.generateMaterialToolbar();case"material-sidenav":return this.generateMaterialToolbar();case"material-table":return this.generateMaterialCard();case"material-dialog":return this.generateMaterialCard();case"material-card":return this.generateMaterialCard();case"material-form-field":return this.generateMaterialCard();case"module":return this.generateModule();case"micro-frontend":return this.generateMicroFrontend();case"clean-architecture-layer":return this.generateModule();case"hexagonal-architecture":return this.generateModule();case"rest-api":return this.generateRestApi();case"graphql-api":return this.generateRestApi();case"database":return this.generateDatabase();case"devops-pipeline":return this.generateDevOpsPipeline();default:return console.warn(`Type non sp\xE9cifiquement impl\xE9ment\xE9, utilisation du g\xE9n\xE9rateur par d\xE9faut: ${t}`),this.generateStandaloneComponent()}}generateByCategory(t){let e=[];return Object.values(cn).filter(i=>ia(i)===t).forEach(i=>{try{e.push(this.generateComponentByType(i))}catch(r){console.warn(`Impossible de g\xE9n\xE9rer ${i}:`,r)}}),e}filterByCategory(t){this._selectedCategory.set(t)}exportLibrary(){let t=this._currentLibrary();if(!t)return console.warn("\u26A0\uFE0F Aucune biblioth\xE8que \xE0 exporter"),"";try{return JSON.stringify(t,null,2)}catch(e){return console.error("\u274C Erreur lors de l'export:",e),""}}downloadLibrary(t){let e=this.exportLibrary();if(e)try{let n=new Blob([e],{type:"application/json"}),i=window.URL.createObjectURL(n),r=document.createElement("a");r.href=i,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(i),console.log("\u2705 Biblioth\xE8que t\xE9l\xE9charg\xE9e:",t)}catch(n){console.error("\u274C Erreur lors du t\xE9l\xE9chargement:",n)}}addComponentToLibrary(t){let e=this._currentLibrary();try{let n=this.generateComponentByType(t),i={id:`${ia(t).toLowerCase()}-${n.name.toLowerCase().replace(/\s+/g,"-")}-${Date.now()}`,status:"published",elements:n.elements,created:Date.now()};if(e){let r=Ke(re({},e),{libraryItems:[...e.libraryItems,i]});this._currentLibrary.set(r),console.log(`\u2705 Composant ajout\xE9 \xE0 la biblioth\xE8que: ${n.name}`)}else{let r={type:"excalidrawlib",version:2,source:"https://github.com/votre-repo/angular-architecture-kit",libraryItems:[i]};this._currentLibrary.set(r),console.log(`\u2705 Nouvelle biblioth\xE8que cr\xE9\xE9e avec: ${n.name}`)}}catch(n){throw console.error("\u274C Erreur lors de l'ajout du composant:",n),n}}removeComponentFromLibrary(t){let e=this._currentLibrary();if(!e)return;let n=e.libraryItems.filter(r=>r.id!==t),i=Ke(re({},e),{libraryItems:n});this._currentLibrary.set(i),console.log(`\u{1F5D1}\uFE0F Composant supprim\xE9: ${t}`)}generateLayoutComponent(){let t=[];return t.push(this.createRectangle(0,0,250,180,"components")),t.push(this.createText(20,10,"Layout Component",{fontSize:20,strokeColor:q.components.dark})),t.push(this.createText(200,10,"\u{1F4D0}",{fontSize:24})),[{label:"Header",y:50},{label:"Sidebar",y:75},{label:"Content",y:100},{label:"Footer",y:125}].forEach(o=>{t.push(this.createText(20,o.y,o.label,{fontSize:14,strokeColor:"#555555"}))}),this.createGroup("Layout Component",t)}generateFeatureComponent(){let t=[];return t.push(this.createRectangle(0,0,250,120,"components")),t.push(this.createText(20,10,"Feature Component",{fontSize:20,strokeColor:q.components.dark})),t.push(this.createText(200,10,"\u{1F4C1}",{fontSize:24})),t.push(this.createText(20,50,"Feature Module",{fontSize:14,strokeColor:"#555555"})),this.createGroup("Feature Component",t)}generateHttpService(){let t=[];return t.push(this.createRectangle(0,0,200,100,"services")),t.push(this.createText(20,10,"HTTP Service",{fontSize:18,strokeColor:q.services.dark})),t.push(this.createText(155,10,"\u{1F310}",{fontSize:20})),t.push(this.createText(20,50,"HttpClient",{fontSize:14,strokeColor:"#1565C0"})),this.createGroup("HTTP Service",t)}generateFacadeService(){let t=[];return t.push(this.createRectangle(0,0,200,100,"services")),t.push(this.createText(20,10,"Facade Service",{fontSize:18,strokeColor:q.services.dark})),t.push(this.createText(155,10,"\u{1F3D7}\uFE0F",{fontSize:20})),t.push(this.createText(20,50,"Facade Pattern",{fontSize:14,strokeColor:"#555555"})),this.createGroup("Facade Service",t)}generateRepositoryService(){let t=[];return t.push(this.createRectangle(0,0,200,100,"services")),t.push(this.createText(20,10,"Repository",{fontSize:18,strokeColor:q.services.dark})),t.push(this.createText(155,10,"\u{1F5C4}\uFE0F",{fontSize:20})),t.push(this.createText(20,50,"Data Access",{fontSize:14,strokeColor:"#555555"})),this.createGroup("Repository Service",t)}generateRoute(){let t=[];return t.push(this.createRectangle(0,0,200,80,"routing")),t.push(this.createText(20,10,"Route",{fontSize:18,strokeColor:q.routing.dark})),t.push(this.createText(155,10,"\u{1F6E3}\uFE0F",{fontSize:20})),t.push(this.createText(20,45,"/dashboard",{fontSize:14,strokeColor:"#1565C0"})),this.createGroup("Route Angular",t)}generateRouteGuard(){let t=[];return t.push(this.createRectangle(0,0,200,80,"routing")),t.push(this.createText(20,10,"Route Guard",{fontSize:18,strokeColor:q.routing.dark})),t.push(this.createText(155,10,"\u{1F6E1}\uFE0F",{fontSize:20})),t.push(this.createText(20,45,"CanActivate",{fontSize:14,strokeColor:"#E65100"})),this.createGroup("Route Guard",t)}generateSignal(){let t=[];return t.push(this.createElement("ellipse",0,0,{width:150,height:60,strokeColor:q.signals.primary,backgroundColor:q.signals.light,fillStyle:"solid",strokeWidth:2})),t.push(this.createText(150/2-20,60/2-15,"\u26A1",{fontSize:20})),t.push(this.createText(150/2-30,60/2+5,"signal()",{fontSize:12,strokeColor:q.signals.dark})),this.createGroup("Signal",t)}generateSubject(){let t=[];return t.push(this.createRectangle(0,0,120,40,"rxjs",{roundness:{type:3,value:12}})),t.push(this.createText(10,10,"Subject",{fontSize:14,strokeColor:q.rxjs.dark})),this.createGroup("RxJS Subject",t)}generateObservable(){let t=[];return t.push(this.createRectangle(0,0,120,40,"rxjs",{roundness:{type:3,value:12}})),t.push(this.createText(10,10,"Observable",{fontSize:14,strokeColor:q.rxjs.dark})),this.createGroup("RxJS Observable",t)}generateBehaviorSubject(){let t=[];return t.push(this.createRectangle(0,0,150,40,"rxjs",{roundness:{type:3,value:12}})),t.push(this.createText(10,10,"BehaviorSubject",{fontSize:12,strokeColor:q.rxjs.dark})),this.createGroup("BehaviorSubject",t)}generateNgRxStore(){let t=[];return t.push(this.createRectangle(0,0,250,150,"architecture",{backgroundColor:"#FFF3E0"})),t.push(this.createText(20,10,"NgRx Store",{fontSize:20,strokeColor:q.architecture.dark})),t.push(this.createText(200,10,"\u{1F3EA}",{fontSize:24})),[{label:"Actions",y:50},{label:"Reducers",y:75},{label:"Effects",y:100},{label:"Selectors",y:125}].forEach(o=>{t.push(this.createText(20,o.y,o.label,{fontSize:14,strokeColor:"#E65100"}))}),this.createGroup("NgRx Store",t)}generateModule(){let t=[];return t.push(this.createRectangle(0,0,200,100,"architecture")),t.push(this.createText(20,10,"Angular Module",{fontSize:18,strokeColor:q.architecture.dark})),t.push(this.createText(155,10,"\u{1F4E6}",{fontSize:20})),t.push(this.createText(20,50,"@NgModule()",{fontSize:14,strokeColor:"#E65100"})),this.createGroup("Angular Module",t)}generateMicroFrontend(){let t=[];return t.push(this.createRectangle(0,0,200,100,"architecture",{strokeStyle:"dashed"})),t.push(this.createText(20,10,"Micro Frontend",{fontSize:18,strokeColor:q.architecture.dark})),t.push(this.createText(155,10,"\u{1F9E9}",{fontSize:20})),t.push(this.createText(20,50,"Module Federation",{fontSize:14,strokeColor:"#E65100"})),this.createGroup("Micro Frontend",t)}generateRestApi(){let t=[];return t.push(this.createRectangle(0,0,150,60,"architecture")),t.push(this.createText(10,10,"REST API",{fontSize:14,strokeColor:"#E65100"})),t.push(this.createText(110,10,"\u{1F50C}",{fontSize:16})),this.createGroup("REST API",t)}generateDatabase(){let t=[];return t.push(this.createRectangle(0,0,150,60,"architecture")),t.push(this.createText(10,10,"Database",{fontSize:14,strokeColor:"#E65100"})),t.push(this.createText(110,10,"\u{1F5C3}\uFE0F",{fontSize:16})),this.createGroup("Database",t)}generateDevOpsPipeline(){let t=[];return t.push(this.createRectangle(0,0,250,100,"architecture",{backgroundColor:"#E3F2FD"})),t.push(this.createText(20,10,"DevOps Pipeline",{fontSize:18,strokeColor:"#1565C0"})),t.push(this.createText(200,10,"\u{1F680}",{fontSize:24})),[{label:"Build \u2192 Test \u2192 Deploy",y:50},{label:"CI/CD",y:75}].forEach(o=>{t.push(this.createText(20,o.y,o.label,{fontSize:14,strokeColor:"#1565C0"}))}),this.createGroup("DevOps Pipeline",t)}generateMaterialToolbar(){let t=[];return t.push(this.createRectangle(0,0,250,60,"architecture",{backgroundColor:"#F5F5F5"})),t.push(this.createText(20,15,"Toolbar",{fontSize:18,strokeColor:"#424242"})),t.push(this.createText(200,15,"\u{1F4CA}",{fontSize:20})),this.createGroup("Material Toolbar",t)}generateMaterialCard(){let t=[];return t.push(this.createRectangle(0,0,200,120,"architecture",{backgroundColor:"#FAFAFA"})),t.push(this.createText(20,10,"Card",{fontSize:18,strokeColor:"#424242"})),t.push(this.createText(155,10,"\u{1F0CF}",{fontSize:20})),t.push(this.createText(20,50,"Title",{fontSize:14,strokeColor:"#424242"})),t.push(this.createText(20,75,"Content",{fontSize:12,strokeColor:"#757575"})),this.createGroup("Material Card",t)}static \u0275fac=function(e){return new(e||a)};static \u0275prov=W({token:a,factory:a.\u0275fac,providedIn:"root"})};var dl=(a,t)=>t.name;function ml(a,t){if(a&1&&(c(0,"mat-card",5)(1,"mat-card-content")(2,"div",6)(3,"h4"),m(4),l(),c(5,"span",7),m(6),l()(),c(7,"div",8),Z(8,"div",9),l(),c(9,"p",10),m(10),l()()()),a&2){let e=t.$implicit;f(4),ee(e.name),f(2),ee(e.count),f(2),St("width",e.percentage,"%")("background-color",e.color),f(2),nt("",e.percentage.toFixed(1),"%")}}function hl(a,t){if(a&1&&(c(0,"div",2)(1,"mat-card",3)(2,"mat-card-content")(3,"mat-icon"),m(4,"widgets"),l(),c(5,"h3"),m(6),l(),c(7,"p"),m(8,"Composants totaux"),l()()(),c(9,"mat-card",3)(10,"mat-card-content")(11,"mat-icon"),m(12,"category"),l(),c(13,"h3"),m(14),l(),c(15,"p"),m(16,"Cat\xE9gories"),l()()(),c(17,"mat-card",3)(18,"mat-card-content")(19,"mat-icon"),m(20,"graphic_eq"),l(),c(21,"h3"),m(22),l(),c(23,"p"),m(24,"\xC9l\xE9ments graphiques"),l()()()(),c(25,"h3"),m(26,"R\xE9partition par cat\xE9gorie"),l(),c(27,"div",4),ze(28,ml,11,7,"mat-card",5,dl),l()),a&2){let e=R();f(6),ee(e.totalComponents()),f(8),ee(e.totalCategories()),f(8),ee(e.totalElements()),f(6),Ge(e.getCategoryStats())}}function pl(a,t){a&1&&(c(0,"div",1)(1,"mat-icon"),m(2,"bar_chart"),l(),c(3,"p"),m(4,"Aucune biblioth\xE8que g\xE9n\xE9r\xE9e"),l(),c(5,"p"),m(6,'Cliquez sur "G\xE9n\xE9rer" pour cr\xE9er des composants'),l()())}var Kn=class a{constructor(t){this.generatorService=t}generatorService;hasLibrary(){let t=this.generatorService.currentLibrary();return t!==null&&t.libraryItems.length>0}totalComponents(){let t=this.generatorService.currentLibrary();return t?t.libraryItems.length:0}totalCategories(){return this.generatorService.categories().length}totalElements(){let t=this.generatorService.currentLibrary();return t?t.libraryItems.reduce((e,n)=>e+n.elements.length,0):0}getCategoryStats(){let t=this.generatorService.currentLibrary();if(!t)return[];let e=new Map,n={Components:"#DD0031",Services:"#43A047",Routing:"#2196F3",Signals:"#7C4DFF",RxJS:"#E91E63","State Management":"#FB8C00","UI Kit":"#00BCD4",Architecture:"#607D8B",Ecosystem:"#8BC34A"};t.libraryItems.forEach(o=>{let s=this.extractCategory(o.id),d=e.get(s);d?d.count++:e.set(s,{count:1,color:n[s]||"#607D8B"})});let i=[],r=this.totalComponents();return e.forEach((o,s)=>{i.push({name:s,count:o.count,percentage:r>0?o.count/r*100:0,color:o.color})}),i.sort((o,s)=>s.count-o.count),console.log("Statistiques par cat\xE9gorie:",i),i}extractCategory(t){let n=t.split("-")[0]||"other";return{components:"Components",services:"Services",routing:"Routing",signals:"Signals",rxjs:"RxJS",state:"State Management",ui:"UI Kit",architecture:"Architecture",ecosystem:"Ecosystem"}[n.toLowerCase()]||n}static \u0275fac=function(e){return new(e||a)(se(Bt))};static \u0275cmp=F({type:a,selectors:[["app-statistics"]],decls:5,vars:1,consts:[[1,"statistics-container"],[1,"empty-statistics"],[1,"stats-grid"],[1,"stat-card"],[1,"category-stats"],[1,"category-stat-card"],[1,"category-header"],[1,"badge"],[1,"progress-bar"],[1,"progress-fill"],[1,"percentage"]],template:function(e,n){e&1&&(c(0,"div",0)(1,"h2"),m(2,"\u{1F4CA} Statistiques de la biblioth\xE8que"),l(),$(3,hl,30,3)(4,pl,7,0,"div",1),l()),e&2&&(f(3),Q(n.hasLibrary()?3:4))},dependencies:[it,Nt,Un,qn,rt,at],styles:[".statistics-container[_ngcontent-%COMP%]{padding:24px;max-width:900px;margin:0 auto}h2[_ngcontent-%COMP%]{color:#333;margin-bottom:24px}h3[_ngcontent-%COMP%]{color:#555;margin:24px 0 16px}.stats-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-bottom:32px}.stat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{text-align:center;padding:24px}.stat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:36px;width:36px;height:36px;color:#1976d2;margin-bottom:8px}.stat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:2rem;margin:8px 0;color:#1976d2}.stat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#666;margin:0}.category-stats[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px}.category-stat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:16px}.category-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}.category-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;color:#333}.category-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{background:#1976d2;color:#fff;padding:4px 8px;border-radius:12px;font-size:.9rem;font-weight:500}.progress-bar[_ngcontent-%COMP%]{height:8px;background:#f0f0f0;border-radius:4px;overflow:hidden;margin-bottom:8px}.progress-fill[_ngcontent-%COMP%]{height:100%;border-radius:4px;transition:width .3s ease}.percentage[_ngcontent-%COMP%]{text-align:right;color:#666;font-size:.9rem;margin:0}.empty-statistics[_ngcontent-%COMP%]{text-align:center;padding:48px;color:#999}.empty-statistics[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px;margin-bottom:16px}.empty-statistics[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:8px 0;font-size:1.1rem}"]})};var Xn=class a{constructor(t){this.platformId=t;this.isBrowser=gn(this.platformId)}platformId;canvas;ctx;offsetX=0;offsetY=0;isBrowser;initializeCanvas(t){if(!this.isBrowser){console.warn("Canvas non disponible c\xF4t\xE9 serveur");return}this.canvas=t.nativeElement;let e=this.canvas.parentElement;if(e){let i=e.getBoundingClientRect();console.log("Dimensions du parent:",i.width,"x",i.height),this.canvas.width=i.width||800,this.canvas.height=i.height||600,this.canvas.style.width=`${this.canvas.width}px`,this.canvas.style.height=`${this.canvas.height}px`}else this.canvas.width=800,this.canvas.height=600,this.canvas.style.width="800px",this.canvas.style.height="600px";let n=this.canvas.getContext("2d");if(!n){console.error("Impossible d'obtenir le contexte 2D");return}this.ctx=n,console.log("Canvas initialis\xE9 avec dimensions:",this.canvas.width,"x",this.canvas.height)}renderGroup(t){if(!this.isBrowser||!this.ctx||!this.canvas){console.error("Canvas non initialis\xE9 pour le rendu");return}console.log("Rendu du groupe:",t.name),this.clearCanvas(),this.ctx.fillStyle="#ffffff",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let e=this.calculateBounds(t.elements);console.log("Bounds du groupe:",e);let n=(this.canvas.width-100)/e.width,i=(this.canvas.height-100)/e.height,r=Math.min(n,i,2);console.log("\xC9chelle de rendu:",r),this.offsetX=(this.canvas.width-e.width*r)/2-e.minX*r,this.offsetY=(this.canvas.height-e.height*r)/2-e.minY*r,t.elements.forEach(o=>{this.drawElement(o,r)}),console.log("Rendu termin\xE9")}renderLibrary(t){if(!this.isBrowser||!this.ctx||!this.canvas)return;this.clearCanvas();let e=50,n=20,i=20,r=this.canvas.width-40;t.forEach(o=>{let s=this.calculateBounds(o.elements),d=Math.min(1,r/s.width);this.offsetX=i-s.minX*d,this.offsetY=n-s.minY*d,o.elements.forEach(h=>{this.drawElement(h,d)}),this.drawLabel(o.name,i,n-10),n+=s.height*d+e})}drawElement(t,e=1){if(!this.ctx)return;let n=this.ctx,i=t.x*e+this.offsetX,r=t.y*e+this.offsetY;switch(n.save(),n.strokeStyle=t.strokeColor,n.lineWidth=(t.strokeWidth||2)*e,n.globalAlpha=(t.opacity||100)/100,t.strokeStyle==="dashed"?n.setLineDash([5*e,5*e]):t.strokeStyle==="dotted"&&n.setLineDash([2*e,2*e]),t.type){case"rectangle":this.drawRectangle(i,r,t,e);break;case"ellipse":this.drawEllipse(i,r,t,e);break;case"diamond":this.drawDiamond(i,r,t,e);break;case"text":this.drawText(i,r,t,e);break;case"arrow":this.drawArrow(i,r,t,e);break;case"line":this.drawLine(i,r,t,e);break}n.restore()}drawRectangle(t,e,n,i){if(!this.ctx||!n.width||!n.height)return;let r=this.ctx,o=n.width*i,s=n.height*i,d=(n.roundness?.value||0)*i;r.beginPath(),d>0?this.roundRect(r,t,e,o,s,d):r.rect(t,e,o,s),n.backgroundColor&&(r.fillStyle=n.backgroundColor,r.fill()),r.stroke()}roundRect(t,e,n,i,r,o){t.moveTo(e+o,n),t.lineTo(e+i-o,n),t.quadraticCurveTo(e+i,n,e+i,n+o),t.lineTo(e+i,n+r-o),t.quadraticCurveTo(e+i,n+r,e+i-o,n+r),t.lineTo(e+o,n+r),t.quadraticCurveTo(e,n+r,e,n+r-o),t.lineTo(e,n+o),t.quadraticCurveTo(e,n,e+o,n)}drawEllipse(t,e,n,i){if(!this.ctx||!n.width||!n.height)return;let r=this.ctx,o=n.width*i,s=n.height*i;r.beginPath(),r.ellipse(t+o/2,e+s/2,o/2,s/2,0,0,Math.PI*2),n.backgroundColor&&(r.fillStyle=n.backgroundColor,r.fill()),r.stroke()}drawDiamond(t,e,n,i){if(!this.ctx||!n.width||!n.height)return;let r=this.ctx,o=n.width*i,s=n.height*i;r.beginPath(),r.moveTo(t+o/2,e),r.lineTo(t+o,e+s/2),r.lineTo(t+o/2,e+s),r.lineTo(t,e+s/2),r.closePath(),n.backgroundColor&&(r.fillStyle=n.backgroundColor,r.fill()),r.stroke()}drawText(t,e,n,i){if(!this.ctx||!n.text)return;let r=this.ctx,o=(n.fontSize||14)*i;r.font=`${o}px "Virgil", "Segoe UI", sans-serif`,r.fillStyle=n.strokeColor,r.textBaseline="top",r.fillText(n.text,t,e)}drawArrow(t,e,n,i){if(!this.ctx||!n.points)return;let r=this.ctx;r.beginPath(),r.moveTo(t,e),n.points.forEach(p=>{r.lineTo(t+p[0]*i,e+p[1]*i)}),r.stroke();let o=n.points[n.points.length-1],s=n.points[n.points.length-2]||[0,0],d=Math.atan2((o[1]-s[1])*i,(o[0]-s[0])*i),h=10*i;r.beginPath(),r.moveTo(t+o[0]*i,e+o[1]*i),r.lineTo(t+o[0]*i-h*Math.cos(d-Math.PI/6),e+o[1]*i-h*Math.sin(d-Math.PI/6)),r.lineTo(t+o[0]*i-h*Math.cos(d+Math.PI/6),e+o[1]*i-h*Math.sin(d+Math.PI/6)),r.closePath(),r.fillStyle=n.strokeColor,r.fill()}drawLine(t,e,n,i){if(!this.ctx||!n.points)return;let r=this.ctx;r.beginPath(),r.moveTo(t,e),n.points.forEach(o=>{r.lineTo(t+o[0]*i,e+o[1]*i)}),r.stroke()}drawGrid(){if(!this.ctx||!this.canvas)return;let t=this.ctx,e=20;t.save(),t.strokeStyle="#e0e0e0",t.lineWidth=.5;for(let n=0;n<this.canvas.width;n+=e)t.beginPath(),t.moveTo(n,0),t.lineTo(n,this.canvas.height),t.stroke();for(let n=0;n<this.canvas.height;n+=e)t.beginPath(),t.moveTo(0,n),t.lineTo(this.canvas.width,n),t.stroke();t.restore()}drawLabel(t,e,n){if(!this.ctx)return;let i=this.ctx;i.save(),i.font='bold 16px "Virgil", "Segoe UI", sans-serif',i.fillStyle="#333",i.textBaseline="bottom",i.fillText(t,e,n),i.restore()}calculateBounds(t){let e=1/0,n=1/0,i=-1/0,r=-1/0;return t.forEach(o=>{let s=o.width||0,d=o.height||0;e=Math.min(e,o.x),n=Math.min(n,o.y),i=Math.max(i,o.x+s),r=Math.max(r,o.y+d)}),{minX:e,minY:n,maxX:i,maxY:r,width:i-e,height:r-n}}clearCanvas(){!this.ctx||!this.canvas||(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#ffffff",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height))}exportToPNG(){return!this.isBrowser||!this.canvas?"":this.canvas.toDataURL("image/png")}static \u0275fac=function(e){return new(e||a)(Ie(hn))};static \u0275prov=W({token:a,factory:a.\u0275fac,providedIn:"root"})};var bl=["previewCanvas"],_l=["canvasWrapper"],vl=["scrollContainer"];function yl(a,t){if(a&1&&m(0),a&2){let e=R();nt(" ",e.previewTitle," ")}}function xl(a,t){a&1&&m(0," Pr\xE9visualisation ")}function El(a,t){if(a&1){let e=be();c(0,"canvas",15,2),C("mousedown",function(i){L(e);let r=R();return N(r.onMouseDown(i))})("mousemove",function(i){L(e);let r=R();return N(r.onMouseMove(i))})("mouseup",function(){L(e);let i=R();return N(i.onMouseUp())})("mouseleave",function(){L(e);let i=R();return N(i.onMouseUp())}),l()}}function Cl(a,t){a&1&&(c(0,"div",14)(1,"mat-icon"),m(2,"image"),l(),c(3,"p"),m(4,"S\xE9lectionnez un composant ou g\xE9n\xE9rez une biblioth\xE8que"),l()())}var Yn=class a{constructor(t,e,n){this.canvasRenderer=t;this.platformId=e;this.cdr=n;this.isBrowser=gn(this.platformId)}canvasRenderer;platformId;cdr;canvasRef;canvasWrapper;scrollContainer;group=null;library=null;groups=[];hasContent=!1;previewTitle="Pr\xE9visualisation";isBrowser;zoomLevel=1;zoomStep=.1;minZoom=.2;maxZoom=3;isDragging=!1;dragStartX=0;dragStartY=0;elementStartX=0;elementStartY=0;selectedElement=null;ngAfterViewInit(){this.isBrowser&&this.canvasRef&&setTimeout(()=>{this.canvasRenderer.initializeCanvas(this.canvasRef),this.renderContent(),this.cdr.detectChanges()},300)}ngOnChanges(t){(t.group||t.library||t.groups)&&this.isBrowser&&this.canvasRef&&setTimeout(()=>{this.canvasRenderer.initializeCanvas(this.canvasRef),this.renderContent(),this.cdr.detectChanges(),this.cdr.markForCheck()},200)}findElementAtPosition(t,e){console.log("Recherche d'\xE9l\xE9ment \xE0 la position:",t,e);let n=this.getAllElements();for(let i=n.length-1;i>=0;i--){let r=n[i];if(this.isPointInElement(t,e,r))return console.log("\u2705 \xC9l\xE9ment trouv\xE9:",r.type,"\xE0",r.x,r.y),r}return console.log("\u274C Aucun \xE9l\xE9ment trouv\xE9"),null}getAllElements(){return this.group?this.group.elements:this.groups.length>0?this.groups.flatMap(t=>t.elements):this.library?this.library.libraryItems.flatMap(t=>t.elements):[]}isPointInElement(t,e,n){let i=n.x,r=n.y,o=n.width||0,s=n.height||0;return t>=i&&t<=i+o&&e>=r&&e<=r+s}onMouseDown(t){if(!this.isBrowser||!this.hasContent)return;let n=this.canvasRef.nativeElement.getBoundingClientRect(),i=t.clientX-n.left,r=t.clientY-n.top;console.log("Mouse down \xE0:",i,r);let o=this.findElementAtPosition(i,r);o&&(this.isDragging=!0,this.selectedElement=o,this.dragStartX=i,this.dragStartY=r,this.elementStartX=o.x,this.elementStartY=o.y,console.log("\u2705 D\xE9but du drag sur:",o.type))}onMouseUp(){this.isDragging&&(console.log("\u2705 Fin du drag"),console.log("Position finale:",this.selectedElement?.x,this.selectedElement?.y)),this.isDragging=!1,this.selectedElement=null}zoomIn(){!this.isBrowser||!this.hasContent||(this.zoomLevel=Math.min(this.zoomLevel+this.zoomStep,this.maxZoom),this.applyZoom())}zoomOut(){!this.isBrowser||!this.hasContent||(this.zoomLevel=Math.max(this.zoomLevel-this.zoomStep,this.minZoom),this.applyZoom())}resetZoom(){!this.isBrowser||!this.hasContent||(this.zoomLevel=1,this.applyZoom(),this.centerContent())}centerContent(){if(!this.scrollContainer||!this.canvasWrapper)return;let t=this.scrollContainer.nativeElement,e=this.canvasWrapper.nativeElement,n=(e.scrollWidth-t.clientWidth)/2,i=(e.scrollHeight-t.clientHeight)/2;t.scrollTo({left:Math.max(0,n),top:Math.max(0,i),behavior:"smooth"})}applyZoom(){if(!this.isBrowser||!this.canvasRef)return;let t=this.canvasRef.nativeElement;if(t.style.transform=`scale(${this.zoomLevel})`,t.style.transformOrigin="top left",t.style.transition="transform 0.2s ease",this.canvasWrapper){let e=this.canvasWrapper.nativeElement;e.style.width=t.width*this.zoomLevel+"px",e.style.height=t.height*this.zoomLevel+"px"}}exportPNG(){if(!this.isBrowser||!this.hasContent)return;let t=this.canvasRenderer.exportToPNG();if(!t)return;let e=document.createElement("a");e.href=t,e.download="preview.png",e.click()}renderContent(){requestAnimationFrame(()=>{if(this.group)this.canvasRenderer.renderGroup(this.group),this.hasContent=!0;else if(this.groups&&this.groups.length>0)this.canvasRenderer.renderLibrary(this.groups),this.hasContent=!0;else if(this.library&&this.library.libraryItems.length>0){let t=this.library.libraryItems.map(e=>({name:e.id,elements:e.elements,boundElements:null}));this.canvasRenderer.renderLibrary(t),this.hasContent=!0}else this.hasContent=!1})}debounceTimer;onMouseMove(t){if(!this.isDragging||!this.selectedElement)return;let e=this.selectedElement,n=t.clientX-this.dragStartX,i=t.clientY-this.dragStartY,r=this.elementStartX+n,o=this.elementStartY+i;clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout(()=>{e&&(e.x=r,e.y=o,this.renderContent())},16)}static \u0275fac=function(e){return new(e||a)(se(Xn),se(hn),se(ye))};static \u0275cmp=F({type:a,selectors:[["app-excalidraw-preview"]],viewQuery:function(e,n){if(e&1&&me(bl,5)(_l,5)(vl,5),e&2){let i;S(i=T())&&(n.canvasRef=i.first),S(i=T())&&(n.canvasWrapper=i.first),S(i=T())&&(n.scrollContainer=i.first)}},inputs:{group:"group",library:"library",groups:"groups"},features:[Ae],decls:27,vars:8,consts:[["scrollContainer",""],["canvasWrapper",""],["previewCanvas",""],[1,"preview-container"],[1,"preview-toolbar"],[1,"preview-title"],[1,"preview-actions"],["mat-icon-button","","matTooltip","Zoom avant",3,"click","disabled"],["mat-icon-button","","matTooltip","Zoom arri\xE8re",3,"click","disabled"],["mat-icon-button","","matTooltip","R\xE9initialiser le zoom",3,"click","disabled"],["mat-icon-button","","matTooltip","Centrer",3,"click","disabled"],["mat-icon-button","","matTooltip","Exporter en PNG",3,"click","disabled"],[1,"canvas-scroll-container"],[1,"canvas-wrapper"],[1,"empty-preview"],[3,"mousedown","mousemove","mouseup","mouseleave"]],template:function(e,n){e&1&&(c(0,"div",3)(1,"div",4)(2,"span",5),$(3,yl,1,1)(4,xl,1,0),l(),c(5,"div",6)(6,"button",7),C("click",function(){return n.zoomIn()}),c(7,"mat-icon"),m(8,"zoom_in"),l()(),c(9,"button",8),C("click",function(){return n.zoomOut()}),c(10,"mat-icon"),m(11,"zoom_out"),l()(),c(12,"button",9),C("click",function(){return n.resetZoom()}),c(13,"mat-icon"),m(14,"fit_screen"),l()(),c(15,"button",10),C("click",function(){return n.centerContent()}),c(16,"mat-icon"),m(17,"center_focus_strong"),l()(),c(18,"button",11),C("click",function(){return n.exportPNG()}),c(19,"mat-icon"),m(20,"image"),l()()()(),c(21,"div",12,0)(23,"div",13,1),$(25,El,2,0,"canvas"),$(26,Cl,5,0,"div",14),l()()()),e&2&&(f(3),Q(n.hasContent?3:4),f(3),P("disabled",!n.isBrowser||!n.hasContent),f(3),P("disabled",!n.isBrowser||!n.hasContent),f(3),P("disabled",!n.isBrowser||!n.hasContent),f(3),P("disabled",!n.isBrowser||!n.hasContent),f(3),P("disabled",!n.isBrowser||!n.hasContent),f(7),Q(n.isBrowser?25:-1),f(),Q(n.hasContent?-1:26))},dependencies:[it,At,bn,rt,at,En,xn],styles:["[_nghost-%COMP%]{display:block;height:100%}.preview-container[_ngcontent-%COMP%]{position:relative;height:100%;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px #0000001a;display:flex;flex-direction:column}.preview-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:8px 16px;background:#f5f5f5;border-bottom:1px solid #e0e0e0;flex-shrink:0}.preview-title[_ngcontent-%COMP%]{font-weight:500;color:#333}.preview-actions[_ngcontent-%COMP%]{display:flex;gap:4px}.canvas-scroll-container[_ngcontent-%COMP%]{flex:1;overflow:auto;position:relative;background:#fafafa;min-height:0}.canvas-scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:12px;height:12px}.canvas-scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:6px}.canvas-scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:6px}.canvas-wrapper[_ngcontent-%COMP%]{min-width:100%;min-height:100%;position:relative;display:flex;align-items:flex-start;justify-content:flex-start;padding:20px}canvas[_ngcontent-%COMP%]{display:block;transition:transform .2s ease;cursor:grab}canvas[_ngcontent-%COMP%]:active{cursor:grabbing}.empty-preview[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;color:#999;pointer-events:none}.empty-preview[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px;margin-bottom:16px}.empty-preview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:1.1rem}"],changeDetection:0})};var Zn=class a{transform(t){return t.split("-").slice(1).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}static \u0275fac=function(e){return new(e||a)};static \u0275pipe=Ea({name:"formatItemName",type:a,pure:!0})};var Jn=class a{STORAGE_KEY="angular-architecture-kit-library";constructor(){}saveLibrary(t){try{let e=JSON.stringify(t);localStorage.setItem(this.STORAGE_KEY,e),console.log("\u2705 Biblioth\xE8que sauvegard\xE9e localement")}catch(e){console.error("\u274C Erreur lors de la sauvegarde:",e)}}loadLibrary(){try{let t=localStorage.getItem(this.STORAGE_KEY);if(!t)return null;let e=JSON.parse(t);return console.log("\u2705 Biblioth\xE8que charg\xE9e depuis le stockage local"),e}catch(t){return console.error("\u274C Erreur lors du chargement:",t),null}}clearLibrary(){localStorage.removeItem(this.STORAGE_KEY),console.log("\u{1F5D1}\uFE0F Biblioth\xE8que supprim\xE9e du stockage local")}hasSavedLibrary(){return localStorage.getItem(this.STORAGE_KEY)!==null}static \u0275fac=function(e){return new(e||a)};static \u0275prov=W({token:a,factory:a.\u0275fac,providedIn:"root"})};var ei=class a{_theme=ve("light");theme=this._theme.asReadonly();constructor(){let t=localStorage.getItem("theme");(t==="light"||t==="dark")&&this._theme.set(t),this.applyTheme(),console.log("Th\xE8me initialis\xE9:",this._theme())}toggleTheme(){let t=this._theme()==="light"?"dark":"light";console.log("Basculement du th\xE8me:",this._theme(),"->",t),this._theme.set(t),localStorage.setItem("theme",t),this.applyTheme()}applyTheme(){let t=this._theme();console.log("Application du th\xE8me:",t),document.body.classList.remove("light-theme","dark-theme"),document.body.classList.add(`${t}-theme`),t==="dark"?(document.body.style.backgroundColor="#1e1e1e",document.body.style.color="#ffffff",document.documentElement.style.setProperty("--mat-app-background-color","#1e1e1e"),document.documentElement.style.setProperty("--mat-app-text-color","#ffffff")):(document.body.style.backgroundColor="#fafafa",document.body.style.color="#333333",document.documentElement.style.setProperty("--mat-app-background-color","#fafafa"),document.documentElement.style.setProperty("--mat-app-text-color","#333333"))}static \u0275fac=function(e){return new(e||a)};static \u0275prov=W({token:a,factory:a.\u0275fac,providedIn:"root"})};var ti=class a{constructor(t){this.ngZone=t;console.log("=== KeyboardShortcutsService initialis\xE9 ==="),this.setupListener()}ngZone;shortcuts=new ie;shortcuts$=this.shortcuts.asObservable();setupListener(){this.ngZone.runOutsideAngular(()=>{document.addEventListener("keydown",t=>{this.ngZone.run(()=>{this.handleKeyDown(t)})})}),console.log("\u2705 \xC9couteur de raccourcis clavier configur\xE9")}handleKeyDown(t){let e=t.key.toLowerCase(),n=t.ctrlKey||t.metaKey,i=t.shiftKey,r=t.altKey;if(!this.isTypingInInput(t)){if(console.log(`\u2328\uFE0F Touche press\xE9e: ${n?"Ctrl+":""}${i?"Shift+":""}${r?"Alt+":""}${e}`),n&&!i&&e==="g"){t.preventDefault(),console.log("\u2192 D\xE9clenchement: generate"),this.shortcuts.next("generate");return}if(n&&!i&&e==="e"){t.preventDefault(),console.log("\u2192 D\xE9clenchement: export"),this.shortcuts.next("export");return}if(n&&!i&&e==="s"){t.preventDefault(),console.log("\u2192 D\xE9clenchement: save"),this.shortcuts.next("save");return}if(n&&!i&&e==="p"){t.preventDefault(),console.log("\u2192 D\xE9clenchement: export-pdf"),this.shortcuts.next("export-pdf");return}if(n&&i&&e==="s"){t.preventDefault(),console.log("\u2192 D\xE9clenchement: export-svg"),this.shortcuts.next("export-svg");return}if(n&&i&&e==="c"){t.preventDefault(),console.log("\u2192 D\xE9clenchement: share-link"),this.shortcuts.next("share-link");return}if(!n&&!i&&e==="f1"){t.preventDefault(),console.log("\u2192 D\xE9clenchement: docs"),this.shortcuts.next("docs");return}}}isTypingInInput(t){let e=t.target,n=e.tagName?.toLowerCase(),i=n==="input"||n==="textarea"||n==="select"||e.isContentEditable;return i&&console.log("\u23ED\uFE0F Ignor\xE9: saisie dans un champ"),i}static \u0275fac=function(e){return new(e||a)(Ie(oe))};static \u0275prov=W({token:a,factory:a.\u0275fac,providedIn:"root"})};var ni=class a{convertGroupToSVG(t,e,n){let i="";return t.forEach(r=>{let o=r.x+e,s=r.y+n;switch(r.type){case"rectangle":i+=`<rect x="${o}" y="${s}" width="${r.width}" height="${r.height}"
                        fill="${r.backgroundColor}" stroke="${r.strokeColor}"
                        stroke-width="${r.strokeWidth}" rx="8"/>`;break;case"text":i+=`<text x="${o}" y="${s+r.fontSize}" font-size="${r.fontSize}"
                        fill="${r.strokeColor}">${r.text}</text>`;break;case"ellipse":i+=`<ellipse cx="${o+r.width/2}" cy="${s+r.height/2}"
                           rx="${r.width/2}" ry="${r.height/2}"
                           fill="${r.backgroundColor}" stroke="${r.strokeColor}"/>`;break}}),i}exportGroupToSVG(t){let e=t.elements,n=this.calculateBounds(e),i=`<?xml version="1.0" encoding="UTF-8"?>
`;return i+=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${n.minX} ${n.minY} ${n.width} ${n.height}" width="${n.width}" height="${n.height}">
`,i+=`  <rect x="${n.minX}" y="${n.minY}" width="${n.width}" height="${n.height}" fill="white"/>
`,e.forEach(r=>{i+=this.elementToSVG(r)}),i+="</svg>",i}exportLibraryToSVG(t){let i=20,r=20,o=0,s=[];t.libraryItems.forEach((g,k)=>{let y=this.calculateBounds(g.elements);i+y.width>800&&(i=20,r+=o+50,o=0),g.elements.forEach(b=>{s.push({element:b,x:b.x+i-y.minX,y:b.y+r-y.minY})}),i+=y.width+50,o=Math.max(o,y.height)});let d=Math.max(800,i+20),h=r+o+20,p=`<?xml version="1.0" encoding="UTF-8"?>
`;return p+=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${d} ${h}" width="${d}" height="${h}">
`,p+=`  <rect x="0" y="0" width="${d}" height="${h}" fill="white"/>
`,s.forEach(({element:g,x:k,y})=>{let b=Ke(re({},g),{x:k,y});p+=this.elementToSVG(b)}),p+="</svg>",p}elementToSVG(t){switch(t.type){case"rectangle":return this.rectangleToSVG(t);case"text":return this.textToSVG(t);case"ellipse":return this.ellipseToSVG(t);case"diamond":return this.diamondToSVG(t);case"arrow":return this.arrowToSVG(t);case"line":return this.lineToSVG(t);default:return""}}rectangleToSVG(t){let e=t.x,n=t.y,i=t.width||0,r=t.height||0,o=t.roundness?.value||0,s=t.backgroundColor||"transparent",d=t.strokeColor,h=t.strokeWidth||2,p=t.strokeStyle==="dashed"?"5,5":t.strokeStyle==="dotted"?"2,2":"";return`  <rect x="${e}" y="${n}" width="${i}" height="${r}" rx="${o}" fill="${s}" stroke="${d}" stroke-width="${h}"${p?` stroke-dasharray="${p}"`:""}/>
`}textToSVG(t){let e=t.x,n=t.y,i=t.fontSize||20,r=this.escapeXML(t.text||""),o=t.strokeColor,s=t.textAlign==="center"?"middle":t.textAlign==="right"?"end":"start";return`  <text x="${e}" y="${n+i}" font-size="${i}" fill="${o}" text-anchor="${s}" font-family="Virgil, sans-serif">${r}</text>
`}ellipseToSVG(t){let e=t.x+(t.width||0)/2,n=t.y+(t.height||0)/2,i=(t.width||0)/2,r=(t.height||0)/2,o=t.backgroundColor||"transparent",s=t.strokeColor,d=t.strokeWidth||2;return`  <ellipse cx="${e}" cy="${n}" rx="${i}" ry="${r}" fill="${o}" stroke="${s}" stroke-width="${d}"/>
`}diamondToSVG(t){let e=t.x,n=t.y,i=t.width||0,r=t.height||0,o=t.backgroundColor||"transparent",s=t.strokeColor,d=t.strokeWidth||2;return`  <polygon points="${`${e+i/2},${n} ${e+i},${n+r/2} ${e+i/2},${n+r} ${e},${n+r/2}`}" fill="${o}" stroke="${s}" stroke-width="${d}"/>
`}arrowToSVG(t){if(!t.points||t.points.length<2)return"";let e=t.x,n=t.y,i=t.strokeColor,r=t.strokeWidth||2,o=`M ${e} ${n}`;t.points.forEach(b=>{o+=` L ${e+b[0]} ${n+b[1]}`});let s=t.points[t.points.length-1],d=t.points[t.points.length-2]||[0,0],h=Math.atan2(s[1]-d[1],s[0]-d[0]),p=10,g=e+s[0],k=n+s[1],y=` M ${g} ${k} L ${g-p*Math.cos(h-Math.PI/6)} ${k-p*Math.sin(h-Math.PI/6)} L ${g-p*Math.cos(h+Math.PI/6)} ${k-p*Math.sin(h+Math.PI/6)} Z`;return`  <path d="${o}" stroke="${i}" stroke-width="${r}" fill="none"/>
  <path d="${y}" fill="${i}"/>
`}lineToSVG(t){if(!t.points||t.points.length<2)return"";let e=t.x,n=t.y,i=t.strokeColor,r=t.strokeWidth||2,o=`M ${e} ${n}`;return t.points.forEach(s=>{o+=` L ${e+s[0]} ${n+s[1]}`}),`  <path d="${o}" stroke="${i}" stroke-width="${r}" fill="none"/>
`}calculateBounds(t){let e=1/0,n=1/0,i=-1/0,r=-1/0;return t.forEach(o=>{e=Math.min(e,o.x),n=Math.min(n,o.y),i=Math.max(i,o.x+(o.width||0)),r=Math.max(r,o.y+(o.height||0))}),{minX:e,minY:n,maxX:i,maxY:r,width:i-e,height:r-n}}escapeXML(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}downloadSVG(t,e){let n=new Blob([t],{type:"image/svg+xml"}),i=window.URL.createObjectURL(n),r=document.createElement("a");r.href=i,r.download=e,document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(i)}static \u0275fac=function(e){return new(e||a)};static \u0275prov=W({token:a,factory:a.\u0275fac,providedIn:"root"})};var Yo=as(rs());var ii=class a{constructor(){}exportElementToPDF(t,e){return dt(this,null,function*(){console.log("=== Export PDF ==="),console.log("Element ID:",t);let n=document.getElementById(t);if(!n)throw console.error("\xC9l\xE9ment non trouv\xE9:",t),new Error("\xC9l\xE9ment non trouv\xE9");try{let i=yield(0,Yo.default)(n,{scale:2,backgroundColor:"#ffffff",allowTaint:!0,useCORS:!0});console.log("Canvas cr\xE9\xE9:",i.width,"x",i.height);let r=i.toDataURL("image/png"),o=new Cn({orientation:i.width>i.height?"landscape":"portrait",unit:"px",format:[i.width,i.height]});o.addImage(r,"PNG",0,0,i.width,i.height),o.save(e),console.log("\u2705 PDF export\xE9:",e)}catch(i){throw console.error("\u274C Erreur lors de l'export PDF:",i),i}})}exportCanvasToPDF(t,e){return dt(this,null,function*(){console.log("=== Export Canvas PDF ===");let n=document.getElementById(t);if(!n)throw console.error("Canvas non trouv\xE9:",t),new Error("Canvas non trouv\xE9");try{let i=n.toDataURL("image/png"),r=new Cn({orientation:n.width>n.height?"landscape":"portrait",unit:"px",format:[n.width,n.height]});r.addImage(i,"PNG",0,0,n.width,n.height),r.save(e),console.log("\u2705 PDF export\xE9:",e)}catch(i){throw console.error("\u274C Erreur lors de l'export PDF:",i),i}})}exportLibraryToPDF(t,e){return dt(this,null,function*(){console.log("=== Export Biblioth\xE8que PDF ==="),console.log("Items:",t.libraryItems.length);let n=new Cn({orientation:"landscape",unit:"px",format:"a4"}),i=n.internal.pageSize.getWidth(),r=n.internal.pageSize.getHeight();t.libraryItems.forEach((o,s)=>{s>0&&n.addPage(),n.setFontSize(16),n.text(`Composant: ${o.id}`,20,20),n.setFontSize(10),n.text(`\xC9l\xE9ments: ${o.elements.length}`,20,30),n.text(`Cr\xE9\xE9 le: ${new Date(o.created).toLocaleDateString()}`,20,40),o.elements.forEach((d,h)=>{let p=60+h*30;switch(n.setFontSize(8),d.type){case"rectangle":n.rect(d.x/2,p,(d.width||100)/2,(d.height||50)/2);break;case"text":n.text(d.text||"",d.x/2,p);break;case"ellipse":n.ellipse(d.x/2+(d.width||100)/4,p+(d.height||50)/4,(d.width||100)/4,(d.height||50)/4);break}})}),n.save(e),console.log("\u2705 PDF biblioth\xE8que export\xE9:",e)})}static \u0275fac=function(e){return new(e||a)};static \u0275prov=W({token:a,factory:a.\u0275fac,providedIn:"root"})};var Il=["tabGroup"],Zo=(a,t)=>t.type,Jo=(a,t)=>t.id;function Al(a,t){a&1&&m(0," G\xE9n\xE9ration... ")}function Dl(a,t){a&1&&m(0," G\xE9n\xE9rer ")}function Rl(a,t){if(a&1){let e=be();c(0,"mat-card",29)(1,"mat-card-header")(2,"mat-card-title")(3,"span",55),m(4),l(),m(5),l(),c(6,"mat-card-subtitle"),m(7),l()(),c(8,"mat-card-content")(9,"mat-chip"),m(10),l()(),c(11,"mat-card-actions")(12,"button",48),C("click",function(){let i=L(e).$implicit,r=R();return N(r.addComponent(i))}),c(13,"mat-icon"),m(14,"add"),l(),m(15," Ajouter "),l(),c(16,"button",56),C("click",function(){let i=L(e).$implicit,r=R();return N(r.previewComponent(i))}),c(17,"mat-icon"),m(18,"visibility"),l(),m(19," Aper\xE7u "),l()()()}if(a&2){let e=t.$implicit;f(4),ee(e.icon),f(),nt(" ",e.defaultName," "),f(2),ee(e.description),f(3),ee(e.category)}}function Pl(a,t){if(a&1){let e=be();c(0,"mat-card",32)(1,"mat-card-header")(2,"div",57),m(3),l(),c(4,"mat-card-title"),m(5),l(),c(6,"mat-card-subtitle"),m(7),l()(),c(8,"mat-card-content")(9,"p"),m(10),l()(),c(11,"mat-card-actions")(12,"button",48),C("click",function(){let i=L(e).$implicit,r=R();return N(r.generateTemplate(i))}),c(13,"mat-icon"),m(14,"play_arrow"),l(),m(15," G\xE9n\xE9rer "),l()()()}if(a&2){let e=t.$implicit;f(3),ee(e.icon),f(2),ee(e.name),f(2),ee(e.category),f(3),ee(e.description)}}function Ol(a,t){if(a&1&&(c(0,"mat-option",58),m(1),l()),a&2){let e=t.$implicit;P("value",e.type),f(),Sa(" ",e.icon," ",e.defaultName," ")}}function Ll(a,t){if(a&1){let e=be();c(0,"mat-form-field",35)(1,"mat-label"),m(2,"Composant"),l(),c(3,"mat-select",20),It("ngModelChange",function(i){L(e);let r=R();return Mt(r.selectedPreviewComponent,i)||(r.selectedPreviewComponent=i),N(i)}),C("ngModelChange",function(i){L(e);let r=R();return N(r.onPreviewComponentChange(i))}),ze(4,Ol,2,3,"mat-option",58,Zo),l()()}if(a&2){let e=R();f(3),Tt("ngModel",e.selectedPreviewComponent),f(),Ge(e.availableComponents)}}function Nl(a,t){if(a&1){let e=be();c(0,"button",50),C("click",function(){L(e);let i=R();return N(i.clearLibrary())}),c(1,"mat-icon"),m(2,"delete"),l(),m(3," Vider la biblioth\xE8que "),l()}}function Fl(a,t){if(a&1){let e=be();c(0,"mat-card",61)(1,"mat-card-header")(2,"mat-card-title"),m(3),Ta(4,"formatItemName"),l(),c(5,"mat-card-subtitle"),m(6),l()(),c(7,"mat-card-actions")(8,"button",62),C("click",function(){let i=L(e).$implicit,r=R(2);return N(r.previewLibraryItem(i))}),c(9,"mat-icon"),m(10,"visibility"),l()(),c(11,"button",62),C("click",function(){let i=L(e).$implicit,r=R(2);return N(r.removeItem(i.id))}),c(12,"mat-icon"),m(13,"delete"),l()()()()}if(a&2){let e=t.$implicit;f(3),ee(Ma(4,2,e.id)),f(3),nt("",e.elements.length," \xE9l\xE9ments")}}function Bl(a,t){if(a&1&&(c(0,"div",59)(1,"mat-card")(2,"mat-card-content")(3,"h3"),m(4),l(),c(5,"p"),m(6,"\xC9l\xE9ments totaux"),l()()()(),c(7,"p"),m(8),l(),c(9,"div",60),ze(10,Fl,14,4,"mat-card",61,Jo),l()),a&2){let e=t;f(4),ee(e.libraryItems.length),f(4),nt("Nombre d'\xE9l\xE9ments: ",e.libraryItems.length),f(2),Ge(e.libraryItems)}}function zl(a,t){a&1&&(c(0,"p",42),m(1,' Aucune biblioth\xE8que g\xE9n\xE9r\xE9e. Cliquez sur "G\xE9n\xE9rer" pour commencer. '),l())}function Gl(a,t){if(a&1){let e=be();c(0,"button",52),C("click",function(){L(e);let i=R();return N(i.exportPreviewToPDF())}),c(1,"mat-icon"),m(2,"picture_as_pdf"),l(),m(3," Exporter l'aper\xE7u en PDF "),l()}}function Vl(a,t){if(a&1){let e=be();c(0,"button",52),C("click",function(){L(e);let i=R();return N(i.exportGroupToSVG())}),c(1,"mat-icon"),m(2,"image"),l(),m(3," Exporter le groupe en SVG "),l()}}var ai=class a{constructor(t,e,n,i,r,o,s,d,h,p){this.generatorService=t;this.fileExportService=e;this.storageService=n;this.dialog=i;this.snackBar=r;this.themeService=o;this.keyboardShortcuts=s;this.svgExportService=d;this.pdfExportService=h;this.shareService=p;console.log("=== AppComponent initialis\xE9 ==="),console.log("Composants:",this.availableComponents.length),console.log("Templates:",this.architectureTemplates.length),va(()=>{let g=this.generatorService.currentLibrary();g&&(console.log("\u{1F4DA} Biblioth\xE8que mise \xE0 jour:",g.libraryItems.length,"items"),this.previewLibrary=g)}),this.setupKeyboardShortcuts(),this.loadLibraryFromUrl()}generatorService;fileExportService;storageService;dialog;snackBar;themeService;keyboardShortcuts;svgExportService;pdfExportService;shareService;tabGroup;exportFilename="angular-architecture-kit.excalidrawlib";searchTerm="";selectedFilterCategory="all";previewMode="library";selectedPreviewComponent="standalone-component";availableComponents=Wo;architectureTemplates=Ko;previewGroup=null;previewGroups=[];previewLibrary=null;favorites=ve([]);ngOnInit(){console.log("=== ngOnInit ==="),console.log("availableComponents:",this.availableComponents),console.log("architectureTemplates:",this.architectureTemplates);let t=this.storageService.loadLibrary();t&&this.generatorService._currentLibrary.set(t)}getFilteredComponents(){let t=this.searchTerm.toLowerCase().trim(),e=this.selectedFilterCategory,n=this.availableComponents.filter(i=>{let r=!t||i.defaultName.toLowerCase().includes(t)||i.description.toLowerCase().includes(t),o=e==="all"||i.category===e;return r&&o});return console.log(`Filtrage: ${n.length}/${this.availableComponents.length} composants`),n}generateLibrary(){console.log("G\xE9n\xE9ration de la biblioth\xE8que..."),this.generatorService.generateLibrary(),this.showSnackBar("\u2705 Biblioth\xE8que g\xE9n\xE9r\xE9e")}generateFullLibrary(){console.log("G\xE9n\xE9ration compl\xE8te..."),this.generatorService.generateFullLibrary(),this.showSnackBar("\u2705 Biblioth\xE8que compl\xE8te g\xE9n\xE9r\xE9e")}generateTemplate(t){console.log("G\xE9n\xE9ration du template:",t.name);try{this.generatorService.generateArchitectureTemplate(t.id),this.showSnackBar(`\u2705 Template "${t.name}" g\xE9n\xE9r\xE9`)}catch(e){console.error("Erreur template:",e),this.showSnackBar("\u274C Erreur lors de la g\xE9n\xE9ration","error")}}addComponent(t){console.log("Ajout du composant:",t.defaultName);try{this.generatorService.addComponentToLibrary(t.type),this.showSnackBar(`\u2705 ${t.defaultName} ajout\xE9`)}catch(e){console.error("Erreur ajout:",e),this.showSnackBar("\u274C Erreur lors de l'ajout","error")}}previewComponent(t){console.log("Pr\xE9visualisation:",t.defaultName);try{this.previewGroup=this.generatorService.generateComponentByType(t.type),this.previewMode="single",this.selectedPreviewComponent=t.type,this.showSnackBar(`\u{1F441}\uFE0F Aper\xE7u: ${t.defaultName}`)}catch(e){console.error("Erreur pr\xE9visualisation:",e),this.showSnackBar("\u274C Erreur de pr\xE9visualisation","error")}}exportLibrary(){console.log("Export de la biblioth\xE8que..."),this.generatorService.downloadLibrary(this.exportFilename),this.showSnackBar("\u2705 Biblioth\xE8que export\xE9e")}copyToClipboard(){let t=this.generatorService.exportLibrary();navigator.clipboard.writeText(t).then(()=>{this.showSnackBar("\u2705 Copi\xE9 dans le presse-papier")})}openDocs(){console.log("Ouverture documentation"),this.tabGroup&&(this.tabGroup.selectedIndex=5)}toggleTheme(){console.log("Basculement th\xE8me"),this.themeService.toggleTheme(),this.showSnackBar(`\u{1F313} Th\xE8me: ${this.themeService.theme()}`)}openElementEditor(){console.log("Ouverture \xE9diteur"),import("./chunk-K2RL6AT2.js").then(t=>{this.dialog.open(t.ElementEditorComponent,{width:"400px",data:{elementName:"Nouveau composant",elementColor:"#DD0031",fontSize:20}}).afterClosed().subscribe(n=>{n&&(console.log("R\xE9sultat \xE9dition:",n),this.showSnackBar("\u2705 \xC9l\xE9ment modifi\xE9"))})})}isFavorite(t){return this.favorites().includes(t.type)}addToFavorites(t){let e=this.favorites();e.indexOf(t.type)>-1?this.favorites.set(e.filter(i=>i!==t.type)):this.favorites.set([...e,t.type])}getCategoryColor(t){return{Components:"#DD0031",Services:"#43A047",Routing:"#2196F3",Signals:"#7C4DFF",RxJS:"#E91E63","State Management":"#FB8C00","UI Kit":"#00BCD4",Architecture:"#607D8B",Ecosystem:"#8BC34A"}[t]||"#607D8B"}showSnackBar(t,e="success"){this.snackBar.open(t,"Fermer",{duration:3e3,panelClass:`snackbar-${e}`})}onPreviewModeChange(t){console.log("=== Changement de mode ==="),console.log("Nouveau mode:",t),this.previewMode=t,this.updatePreview()}onPreviewComponentChange(t){console.log("=== Changement de composant ==="),console.log("Nouveau type:",t),this.selectedPreviewComponent=t,this.updatePreview()}updatePreview(){if(console.log("=== Mise \xE0 jour de la pr\xE9visualisation ==="),console.log("Mode:",this.previewMode),console.log("Composant s\xE9lectionn\xE9:",this.selectedPreviewComponent),this.previewMode==="single")try{let t=this.generatorService.generateComponentByType(this.selectedPreviewComponent);this.previewGroup=t,this.previewGroups=[],this.previewLibrary=null,console.log("\u2705 Groupe g\xE9n\xE9r\xE9:",t.name)}catch(t){console.error("\u274C Erreur g\xE9n\xE9ration:",t),this.previewGroup=null}else if(this.previewMode==="library"){let t=this.generatorService.currentLibrary();this.previewLibrary=t,this.previewGroup=null,this.previewGroups=[],console.log("\u2705 Biblioth\xE8que:",t?t.libraryItems.length:0,"items")}}clearLibrary(){console.log("=== Vider la biblioth\xE8que ==="),confirm("Voulez-vous vraiment vider la biblioth\xE8que ?")&&(this.storageService.clearLibrary(),this.generatorService._currentLibrary.set(null),this.previewLibrary=null,this.previewGroup=null,this.previewGroups=[],this.showSnackBar("\u{1F5D1}\uFE0F Biblioth\xE8que vid\xE9e"))}removeItem(t){console.log("=== Suppression ==="),console.log("Item:",t),this.generatorService.removeComponentFromLibrary(t),this.showSnackBar("\u{1F5D1}\uFE0F \xC9l\xE9ment supprim\xE9")}previewLibraryItem(t){console.log("=== Pr\xE9visualisation item ==="),console.log("Item:",t);let e={name:this.formatItemName(t.id),elements:t.elements,boundElements:null};this.previewGroup=e,this.previewMode="single",this.showSnackBar(`\u{1F441}\uFE0F Aper\xE7u: ${this.formatItemName(t.id)}`)}formatItemName(t){return t.split("-").slice(1).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}exportToSVG(){console.log("=== Export SVG ===");let t=this.generatorService.currentLibrary();if(!t){this.showSnackBar("\u274C Aucune biblioth\xE8que \xE0 exporter","error");return}try{let e=this.svgExportService.exportLibraryToSVG(t);this.svgExportService.downloadSVG(e,"angular-architecture.svg"),this.showSnackBar("\u2705 Export SVG r\xE9ussi")}catch(e){console.error("Erreur export SVG:",e),this.showSnackBar("\u274C Erreur lors de l'export SVG","error")}}exportGroupToSVG(){if(console.log("=== Export SVG du groupe ==="),!this.previewGroup){this.showSnackBar("\u274C Aucun groupe \xE0 exporter","error");return}try{let t=this.svgExportService.exportGroupToSVG(this.previewGroup);this.svgExportService.downloadSVG(t,`${this.previewGroup.name}.svg`),this.showSnackBar("\u2705 Export SVG du groupe r\xE9ussi")}catch(t){console.error("Erreur export SVG:",t),this.showSnackBar("\u274C Erreur lors de l'export SVG","error")}}exportPreviewToPDF(){return dt(this,null,function*(){if(console.log("=== Export Pr\xE9visualisation PDF ==="),!this.previewGroup&&!this.generatorService.currentLibrary()){this.showSnackBar("\u274C Aucun contenu \xE0 exporter","error");return}try{let t=document.querySelector("app-excalidraw-preview canvas");if(t){let e=t.toDataURL("image/png"),{jsPDF:n}=yield import("./chunk-RFWUU32M.js"),i=new n({orientation:"landscape",unit:"px",format:[t.clientWidth,t.clientHeight]});i.addImage(e,"PNG",0,0,t.clientWidth,t.clientHeight),i.save("preview.pdf"),this.showSnackBar("\u2705 Export PDF r\xE9ussi")}else throw new Error("Canvas non trouv\xE9")}catch(t){console.error("\u274C Erreur export PDF:",t),this.showSnackBar("\u274C Erreur lors de l'export PDF","error")}})}exportLibraryToPDF(){return dt(this,null,function*(){console.log("=== Export Biblioth\xE8que PDF ===");let t=this.generatorService.currentLibrary();if(!t){this.showSnackBar("\u274C Aucune biblioth\xE8que \xE0 exporter","error");return}try{yield this.pdfExportService.exportLibraryToPDF(t,"angular-architecture.pdf"),this.showSnackBar("\u2705 Export PDF r\xE9ussi")}catch(e){console.error("\u274C Erreur export PDF:",e),this.showSnackBar("\u274C Erreur lors de l'export PDF","error")}})}openShareDialog(){console.log("=== Ouverture du dialogue de partage ===");let t=this.generatorService.currentLibrary();if(!t){this.showSnackBar("\u274C Aucune biblioth\xE8que \xE0 partager","error");return}import("./chunk-ZSUKVPO3.js").then(e=>{this.dialog.open(e.ShareDialogComponent,{width:"500px",data:t}).afterClosed().subscribe(i=>{console.log("Dialogue de partage ferm\xE9:",i)})}).catch(e=>{console.error("\u274C Erreur lors de l'ouverture du dialogue:",e),this.showSnackBar("\u274C Erreur lors de l'ouverture du dialogue","error")})}copyShareLink(){console.log("=== Copie du lien de partage ===");let t=this.generatorService.currentLibrary();if(!t){this.showSnackBar("\u274C Aucune biblioth\xE8que \xE0 partager","error");return}this.shareService.copyShareLink(t).then(()=>{this.showSnackBar("\u2705 Lien copi\xE9 dans le presse-papier")})}loadLibraryFromUrl(){let t=this.shareService.loadFromUrl();t&&(console.log("\u{1F4DA} Biblioth\xE8que charg\xE9e depuis l'URL"),this.generatorService._currentLibrary.set(t),this.showSnackBar("\u{1F4DA} Biblioth\xE8que charg\xE9e depuis le lien"))}setupKeyboardShortcuts(){if(console.log("=== Configuration des raccourcis clavier ==="),!this.keyboardShortcuts){console.error("\u274C KeyboardShortcutsService non disponible");return}this.keyboardShortcuts.shortcuts$.subscribe({next:t=>{console.log("\u{1F3AF} Raccourci re\xE7u:",t),this.handleShortcut(t)},error:t=>{console.error("\u274C Erreur dans les raccourcis:",t)}}),console.log("\u2705 Abonnement aux raccourcis configur\xE9")}handleShortcut(t){switch(console.log("=== Ex\xE9cution du raccourci:",t,"==="),t){case"generate":this.generateLibrary();break;case"export":this.openExportDialog();break;case"save":this.saveLibrary();break;case"export-pdf":this.exportLibraryToPDF();break;case"export-svg":this.exportToSVG();break;case"share-link":this.copyShareLink();break;case"docs":this.openDocs();break;default:console.warn("\u26A0\uFE0F Action inconnue:",t)}}saveLibrary(){let t=this.generatorService.currentLibrary();t?(this.storageService.saveLibrary(t),this.showSnackBar("\u{1F4BE} Biblioth\xE8que sauvegard\xE9e")):this.showSnackBar("\u274C Aucune biblioth\xE8que \xE0 sauvegarder","error")}openExportDialog(){console.log("=== Ouverture du dialogue d'export ===");let t=this.generatorService.currentLibrary();if(!t){this.showSnackBar("\u274C Aucune biblioth\xE8que \xE0 exporter","error");return}import("./chunk-UBSXUXML.js").then(e=>{this.dialog.open(e.ExportDialogComponent,{width:"500px",data:t}).afterClosed().subscribe(i=>{i&&(console.log("Export effectu\xE9:",i),this.showSnackBar(`\u2705 Export\xE9 en ${i.format.toUpperCase()}`))})}).catch(e=>{console.error("\u274C Erreur lors de l'ouverture du dialogue:",e),this.showSnackBar("\u274C Erreur lors de l'ouverture du dialogue","error")})}static \u0275fac=function(e){return new(e||a)(se(Bt),se(ur),se(Jn),se(ar),se(hr),se(ei),se(ti),se(ni),se(ii),se(gr))};static \u0275cmp=F({type:a,selectors:[["app-root"]],viewQuery:function(e,n){if(e&1&&me(Il,5),e&2){let i;S(i=T())&&(n.tabGroup=i.first)}},decls:131,vars:18,consts:[["tabGroup",""],[1,"app-container"],["color","primary"],[1,"logo"],[1,"spacer"],["mat-icon-button","","matTooltip","Partager",3,"click","disabled"],["mat-icon-button","","matTooltip","Copier le lien",3,"click","disabled"],["mat-icon-button","","matTooltip","Documentation",3,"click"],["mat-icon-button","","matTooltip","\xC9diteur",3,"click"],["mat-icon-button","","matTooltip","Th\xE8me",3,"click"],["mat-raised-button","","matTooltip","G\xE9n\xE9rer (Ctrl+G)",3,"click","disabled"],["mat-raised-button","","matTooltip","Exporter (Ctrl+E)",3,"click","disabled"],[1,"content"],["label","Composants"],[1,"tab-content"],[1,"component-header"],["appearance","outline",1,"search-field"],["matInput","","placeholder","Rechercher un composant...",3,"ngModelChange","ngModel"],["matSuffix",""],["appearance","outline",1,"category-field"],[3,"ngModelChange","ngModel"],["value","all"],["value","Components"],["value","Services"],["value","Routing"],["value","Signals"],["value","State Management"],["value","Ecosystem"],[1,"component-grid"],[1,"component-card"],["label","Templates"],[1,"templates-grid"],[1,"template-card"],["label","Pr\xE9visualisation"],[1,"preview-controls"],["appearance","fill"],["value","single"],["value","library"],[3,"group","library","groups"],["label","Biblioth\xE8que"],[1,"library-header"],["mat-raised-button","","color","warn"],[1,"empty-state"],["label","Export"],[1,"export-options"],["appearance","fill",1,"full-width"],["matInput","",3,"ngModelChange","ngModel"],[1,"export-actions"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","accent",3,"click"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button",""],["mat-raised-button","",3,"click"],["label","Documentation"],["label","Statistiques"],[1,"component-icon"],["mat-button","",3,"click"],[1,"template-icon"],[3,"value"],[1,"library-stats"],[1,"library-items"],[1,"library-item"],["mat-icon-button","",3,"click"]],template:function(e,n){if(e&1){let i=be();c(0,"div",1)(1,"mat-toolbar",2)(2,"span",3),m(3,"\u{1F680} Angular Architecture Kit"),l(),Z(4,"span",4),c(5,"button",5),C("click",function(){return n.openShareDialog()}),c(6,"mat-icon"),m(7,"share"),l()(),c(8,"button",6),C("click",function(){return n.copyShareLink()}),c(9,"mat-icon"),m(10,"link"),l()(),c(11,"button",7),C("click",function(){return n.openDocs()}),c(12,"mat-icon"),m(13,"help"),l()(),c(14,"button",7),C("click",function(){return n.openDocs()}),c(15,"mat-icon"),m(16,"help"),l()(),c(17,"button",8),C("click",function(){return n.openElementEditor()}),c(18,"mat-icon"),m(19,"edit"),l()(),c(20,"button",9),C("click",function(){return n.toggleTheme()}),c(21,"mat-icon"),m(22),l()(),c(23,"button",10),C("click",function(){return n.generateLibrary()}),c(24,"mat-icon"),m(25,"refresh"),l(),$(26,Al,1,0)(27,Dl,1,0),l(),c(28,"button",11),C("click",function(){return n.exportLibrary()}),c(29,"mat-icon"),m(30,"download"),l(),m(31," Exporter "),l()(),c(32,"main",12)(33,"mat-tab-group",null,0)(35,"mat-tab",13)(36,"div",14)(37,"h2"),m(38,"\u{1F4E6} Composants disponibles"),l(),c(39,"div",15)(40,"mat-form-field",16)(41,"mat-label"),m(42,"Rechercher"),l(),c(43,"input",17),It("ngModelChange",function(o){return L(i),Mt(n.searchTerm,o)||(n.searchTerm=o),N(o)}),l(),c(44,"mat-icon",18),m(45,"search"),l()(),c(46,"mat-form-field",19)(47,"mat-label"),m(48,"Cat\xE9gorie"),l(),c(49,"mat-select",20),It("ngModelChange",function(o){return L(i),Mt(n.selectedFilterCategory,o)||(n.selectedFilterCategory=o),N(o)}),c(50,"mat-option",21),m(51,"Toutes les cat\xE9gories"),l(),c(52,"mat-option",22),m(53,"Components"),l(),c(54,"mat-option",23),m(55,"Services"),l(),c(56,"mat-option",24),m(57,"Routing"),l(),c(58,"mat-option",25),m(59,"Signals"),l(),c(60,"mat-option",26),m(61,"State Management"),l(),c(62,"mat-option",27),m(63,"Ecosystem"),l()()()(),c(64,"div",28),ze(65,Rl,20,4,"mat-card",29,Zo),l()()(),c(67,"mat-tab",30)(68,"div",14)(69,"h2"),m(70,"\u{1F3D7}\uFE0F Templates d'architecture"),l(),c(71,"div",31),ze(72,Pl,16,4,"mat-card",32,Jo),l()()(),c(74,"mat-tab",33)(75,"div",14)(76,"h2"),m(77,"\u{1F441}\uFE0F Pr\xE9visualisation"),l(),c(78,"div",34)(79,"mat-form-field",35)(80,"mat-label"),m(81,"Type"),l(),c(82,"mat-select",20),It("ngModelChange",function(o){return L(i),Mt(n.previewMode,o)||(n.previewMode=o),N(o)}),C("ngModelChange",function(o){return n.onPreviewModeChange(o)}),c(83,"mat-option",36),m(84,"\xC9l\xE9ment unique"),l(),c(85,"mat-option",37),m(86,"Biblioth\xE8que compl\xE8te"),l()()(),$(87,Ll,6,1,"mat-form-field",35),l(),Z(88,"app-excalidraw-preview",38),l()(),c(89,"mat-tab",39)(90,"div",14)(91,"div",40)(92,"h2"),m(93,"\u{1F4DA} Biblioth\xE8que"),l(),$(94,Nl,4,0,"button",41),l(),$(95,Bl,12,2)(96,zl,2,0,"p",42),l()(),c(97,"mat-tab",43)(98,"div",14)(99,"h2"),m(100,"\u{1F4BE} Export de la biblioth\xE8que"),l(),c(101,"div",44)(102,"mat-form-field",45)(103,"mat-label"),m(104,"Nom du fichier"),l(),c(105,"input",46),It("ngModelChange",function(o){return L(i),Mt(n.exportFilename,o)||(n.exportFilename=o),N(o)}),l()(),c(106,"h3"),m(107,"Formats disponibles :"),l(),c(108,"div",47)(109,"button",48),C("click",function(){return n.exportLibrary()}),c(110,"mat-icon"),m(111,"download"),l(),m(112," T\xE9l\xE9charger .excalidrawlib "),l(),c(113,"button",49),C("click",function(){return n.exportToSVG()}),c(114,"mat-icon"),m(115,"brush"),l(),m(116," Exporter en SVG "),l(),c(117,"button",50),C("click",function(){return n.exportLibraryToPDF()}),c(118,"mat-icon"),m(119,"picture_as_pdf"),l(),m(120," Exporter en PDF "),l(),$(121,Gl,4,0,"button",51),$(122,Vl,4,0,"button",51),c(123,"button",52),C("click",function(){return n.copyToClipboard()}),c(124,"mat-icon"),m(125,"content_copy"),l(),m(126," Copier JSON "),l()()()()(),c(127,"mat-tab",53),Z(128,"app-docs"),l(),c(129,"mat-tab",54),Z(130,"app-statistics"),l()()()()}if(e&2){let i;f(5),P("disabled",!n.generatorService.currentLibrary()),f(3),P("disabled",!n.generatorService.currentLibrary()),f(14),ee(n.themeService.theme()==="dark"?"light_mode":"dark_mode"),f(),P("disabled",n.generatorService.isGenerating()),f(3),Q(n.generatorService.isGenerating()?26:27),f(2),P("disabled",!n.generatorService.currentLibrary()),f(15),Tt("ngModel",n.searchTerm),f(6),Tt("ngModel",n.selectedFilterCategory),f(16),Ge(n.getFilteredComponents()),f(7),Ge(n.architectureTemplates),f(10),Tt("ngModel",n.previewMode),f(5),Q(n.previewMode==="single"?87:-1),f(),P("group",n.previewGroup)("library",n.previewLibrary)("groups",n.previewGroups),f(6),Q(n.generatorService.currentLibrary()?94:-1),f(),Q((i=n.generatorService.currentLibrary())?95:96,i),f(10),Tt("ngModel",n.exportFilename),f(16),Q(n.previewGroup?121:-1),f(),Q(n.previewGroup?122:-1)}},dependencies:[it,za,La,Fa,Ba,Qo,$o,At,qa,bn,rt,at,Nt,Un,_o,qn,vo,bo,fo,qo,ta,Uo,or,Ya,Ka,Xa,cr,sr,xo,Io,Mo,lr,pr,mr,dr,Za,hi,rr,Fo,go,En,xn,Qn,Yn,Wn,Kn,Zn],styles:["[_nghost-%COMP%]{display:block;height:100vh}.app-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.spacer[_ngcontent-%COMP%]{flex:1}.logo[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:500}.content[_ngcontent-%COMP%]{flex:1;overflow-y:auto;padding:24px;background:#fafafa}.tab-content[_ngcontent-%COMP%]{padding:24px;min-height:400px}h2[_ngcontent-%COMP%]{margin-top:0;color:#333}.component-header[_ngcontent-%COMP%]{display:flex;gap:16px;margin-bottom:24px}.component-header[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%]{flex:2}.component-header[_ngcontent-%COMP%]   .category-field[_ngcontent-%COMP%]{flex:1}.component-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px}.component-card[_ngcontent-%COMP%]{transition:transform .2s,box-shadow .2s}.component-card[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 4px 12px #00000026}.component-icon[_ngcontent-%COMP%]{font-size:24px;margin-right:8px}.templates-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:24px}.template-icon[_ngcontent-%COMP%]{font-size:48px;margin:16px;text-align:center}.library-items[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:16px;margin-top:16px}.empty-state[_ngcontent-%COMP%]{text-align:center;padding:48px;color:#999;font-size:1.1rem}.full-width[_ngcontent-%COMP%]{width:100%}.export-actions[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;margin-top:24px}.preview-controls[_ngcontent-%COMP%]{display:flex;gap:16px;margin-bottom:16px}.preview-controls[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{min-width:200px}"],changeDetection:0})};var oa="Service workers are disabled or not supported by this browser",zt=class{serviceWorker;worker;registration;events;constructor(t,e){if(this.serviceWorker=t,!t)this.worker=this.events=this.registration=new Et(n=>n.error(new M(5601,!1)));else{let n=null,i=new ie;this.worker=new Et(h=>(n!==null&&h.next(n),i.subscribe(p=>h.next(p))));let r=()=>{let{controller:h}=t;h!==null&&(n=h,i.next(n))};t.addEventListener("controllerchange",r),r(),this.registration=this.worker.pipe(pt(()=>t.getRegistration().then(h=>{if(!h)throw new M(5601,!1);return h})));let o=new ie;this.events=o.asObservable();let s=h=>{let{data:p}=h;p?.type&&o.next(p)};t.addEventListener("message",s),e?.get(li,null,{optional:!0})?.onDestroy(()=>{t.removeEventListener("controllerchange",r),t.removeEventListener("message",s)})}}postMessage(t,e){return new Promise(n=>{this.worker.pipe(Ze(1)).subscribe(i=>{i.postMessage(re({action:t},e)),n()})})}postMessageWithOperation(t,e,n){let i=this.waitForOperationCompleted(n),r=this.postMessage(t,e);return Promise.all([r,i]).then(([,o])=>o)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(t){let e;return typeof t=="string"?e=n=>n.type===t:e=n=>t.includes(n.type),this.events.pipe(Be(e))}nextEventOfType(t){return this.eventsOfType(t).pipe(Ze(1))}waitForOperationCompleted(t){return new Promise((e,n)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(Be(i=>i.nonce===t),Ze(1),mt(i=>{if(i.result!==void 0)return i.result;throw new Error(i.error)})).subscribe({next:e,error:n})})}get isEnabled(){return!!this.serviceWorker}},jl=(()=>{class a{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new ie;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=Ye,this.notificationClicks=Ye,this.notificationCloses=Ye,this.pushSubscriptionChanges=Ye,this.subscription=Ye;return}this.messages=this.sw.eventsOfType("PUSH").pipe(mt(i=>i.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(mt(i=>i.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(mt(i=>i.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(mt(i=>i.data)),this.pushManager=this.sw.registration.pipe(mt(i=>i.pushManager));let n=this.pushManager.pipe(pt(i=>i.getSubscription()));this.subscription=new Et(i=>{let r=n.subscribe(i),o=this.subscriptionChanges.subscribe(i);return()=>{r.unsubscribe(),o.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(oa));let n={userVisibleOnly:!0},i=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),r=new Uint8Array(new ArrayBuffer(i.length));for(let o=0;o<i.length;o++)r[o]=i.charCodeAt(o);return n.applicationServerKey=r,new Promise((o,s)=>{this.pushManager.pipe(pt(d=>d.subscribe(n)),Ze(1)).subscribe({next:d=>{this.subscriptionChanges.next(d),o(d)},error:s})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(oa));let e=n=>{if(n===null)throw new M(5602,!1);return n.unsubscribe().then(i=>{if(!i)throw new M(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((n,i)=>{this.subscription.pipe(Ze(1),pt(e)).subscribe({next:n,error:i})})}decodeBase64(e){return atob(e)}static \u0275fac=function(n){return new(n||a)(Ie(zt))};static \u0275prov=W({token:a,factory:a.\u0275fac})}return a})(),Hl=(()=>{class a{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=Ye,this.unrecoverable=Ye;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(oa));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let e=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new M(5601,!1));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(n){return new(n||a)(Ie(zt))};static \u0275prov=W({token:a,factory:a.\u0275fac})}return a})(),ts=new G("");function Ul(){let a=u(ln);if(!("serviceWorker"in navigator&&a.enabled!==!1))return;let t=u(ts),e=u(oe),n=u(li);e.runOutsideAngular(()=>{let i=navigator.serviceWorker,r=()=>i.controller?.postMessage({action:"INITIALIZE"});i.addEventListener("controllerchange",r),n.onDestroy(()=>{i.removeEventListener("controllerchange",r)})}),e.runOutsideAngular(()=>{let i,{registrationStrategy:r}=a;if(typeof r=="function")i=new Promise(o=>r().subscribe(()=>o()));else{let[o,...s]=(r||"registerWhenStable:30000").split(":");switch(o){case"registerImmediately":i=Promise.resolve();break;case"registerWithDelay":i=es(+s[0]||0);break;case"registerWhenStable":i=Promise.race([n.whenStable(),es(+s[0])]);break;default:throw new M(5600,!1)}}i.then(()=>{n.destroyed||navigator.serviceWorker.register(t,{scope:a.scope,updateViaCache:a.updateViaCache,type:a.type}).catch(o=>console.error(fa(5604,!1)))})})}function es(a){return new Promise(t=>setTimeout(t,a))}function ql(){let a=u(ln),t=u(ut),e=!0;return new zt(e&&a.enabled!==!1?navigator.serviceWorker:void 0,t)}var ln=class{enabled;updateViaCache;type;scope;registrationStrategy};function ns(a,t={}){return ba([jl,Hl,{provide:ts,useValue:a},{provide:ln,useValue:t},{provide:zt,useFactory:ql},Ca(Ul)])}Pa(ai,{providers:[Aa({eventCoalescing:!0}),uo(),ns("ngsw-worker.js",{enabled:!Da(),registrationStrategy:"registerWhenStable:30000"})]}).catch(a=>console.error(a));
