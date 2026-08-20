import{a as ms}from"./chunk-AAGPM5YJ.js";import{d as In}from"./chunk-WWTHOZRW.js";import"./chunk-FK6H3RFT.js";import{a as ur,b as br,c as _r,d as kn,e as Mn,f as yr}from"./chunk-T42CINRN.js";import{a as Ya,b as ir,c as _i,d as wn,e as gr,f as fr,g as vr}from"./chunk-HMV5GVJV.js";import{$ as vn,$a as Ce,$b as Za,A as z,Aa as F,Ab as We,B as G,Ba as pe,Bb as qa,C as kt,Ca as U,Cc as lr,D as Sa,Da as Ae,E as _t,Ea as ge,Eb as Qa,F as it,Fa as I,G as $,Ga as A,Gb as Wa,Gc as dr,H as de,Ha as Xt,Hb as xn,Hc as mr,I as me,Ia as At,Ic as st,J as Ta,Ja as B,Jb as en,Jc as ct,K as Oe,Ka as Ne,Kb as De,Kc as pr,L as at,La as m,Lc as hr,M as ue,Ma as _,N as qt,Na as O,O as bn,Oa as Da,P as hi,Pa as Dt,Pb as qe,Q as p,Qa as Rt,Qb as tn,R as wa,Ra as Pt,Rb as be,S as Qt,Sa as Me,T as Mt,Ta as fe,Tb as bi,U as ka,Ua as u,Ub as nn,V as It,Va as g,Vb as Ka,W as ee,Wa as yn,Wb as Ke,X as _n,Xa as Yt,Xb as Cn,Y as V,Ya as Ra,Yb as Sn,Z as te,Za as Pa,Zb as Xa,_ as H,_a as Oa,_b as Ot,a as Pe,aa as Le,ab as N,b as wt,ba as Wt,bb as $e,bc as Ja,c as se,ca as ui,cb as La,cc as er,d as fn,db as ot,dc as tr,e as _a,ea as Ma,eb as En,f as gt,fa as gi,fb as Na,ga as Ia,gb as Fa,gc as nr,h as va,ha as ne,hb as Ba,i as et,ia as Y,ib as za,ic as ar,j as tt,ja as Z,jb as Ga,jc as vi,k as He,ka as fi,kb as Va,kc as rr,l as ya,la as Ue,m as nt,ma as je,mc as Tn,n as Ea,na as D,nb as Ha,o as ft,oa as c,oc as or,p as bt,pa as l,pb as Ua,pc as an,q as $t,qa as ie,qc as sr,r as R,ra as rt,s as xa,sa as vt,t as pi,ta as Aa,u as K,ub as ja,v as J,w as j,wa as Ee,wb as Zt,x as ke,xa as Kt,y as b,ya as w,yb as Jt,z as Ca,zb as $a,zc as cr}from"./chunk-DKCQ5XZX.js";import{a as le,b as Je,c as ba,e as ds,f as ut}from"./chunk-OSQMNGTH.js";var P=(function(a){return a[a.State=0]="State",a[a.Transition=1]="Transition",a[a.Sequence=2]="Sequence",a[a.Group=3]="Group",a[a.Animate=4]="Animate",a[a.Keyframes=5]="Keyframes",a[a.Style=6]="Style",a[a.Trigger=7]="Trigger",a[a.Reference=8]="Reference",a[a.AnimateChild=9]="AnimateChild",a[a.AnimateRef=10]="AnimateRef",a[a.Query=11]="Query",a[a.Stagger=12]="Stagger",a})(P||{}),Fe="*";function Er(a,t=null){return{type:P.Sequence,steps:a,options:t}}function yi(a){return{type:P.Style,styles:a,offset:null}}var Xe=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(t=0,e=0){this.totalTime=t+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}onStart(t){this._originalOnStartFns.push(t),this._onStartFns.push(t)}onDone(t){this._originalOnDoneFns.push(t),this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(t=>t()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(t){this._position=this.totalTime?t*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(t){let e=t=="start"?this._onStartFns:this._onDoneFns;e.forEach(n=>n()),e.length=0}},Lt=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(t){this.players=t;let e=0,n=0,i=0,r=this.players.length;r==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(o=>{o.onDone(()=>{++e==r&&this._onFinish()}),o.onDestroy(()=>{++n==r&&this._onDestroy()}),o.onStart(()=>{++i==r&&this._onStart()})}),this.totalTime=this.players.reduce((o,s)=>Math.max(o,s.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}init(){this.players.forEach(t=>t.init())}onStart(t){this._onStartFns.push(t)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(t=>t()),this._onStartFns=[])}onDone(t){this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(t=>t.play())}pause(){this.players.forEach(t=>t.pause())}restart(){this.players.forEach(t=>t.restart())}finish(){this._onFinish(),this.players.forEach(t=>t.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(t=>t.destroy()),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}reset(){this.players.forEach(t=>t.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(t){let e=t*this.totalTime;this.players.forEach(n=>{let i=n.totalTime?Math.min(1,e/n.totalTime):1;n.setPosition(i)})}getPosition(){let t=this.players.reduce((e,n)=>e===null||n.totalTime>e.totalTime?n:e,null);return t!=null?t.getPosition():0}beforeDestroy(){this.players.forEach(t=>{t.beforeDestroy&&t.beforeDestroy()})}triggerCallback(t){let e=t=="start"?this._onStartFns:this._onDoneFns;e.forEach(n=>n()),e.length=0}},rn="!";function xr(a){return new R(3e3,!1)}function ps(){return new R(3100,!1)}function hs(){return new R(3101,!1)}function us(a){return new R(3001,!1)}function gs(a){return new R(3003,!1)}function fs(a){return new R(3004,!1)}function Sr(a,t){return new R(3005,!1)}function Tr(){return new R(3006,!1)}function wr(){return new R(3007,!1)}function kr(a,t){return new R(3008,!1)}function Mr(a){return new R(3002,!1)}function Ir(a,t,e,n,i){return new R(3010,!1)}function Ar(){return new R(3011,!1)}function Dr(){return new R(3012,!1)}function Rr(){return new R(3200,!1)}function Pr(){return new R(3202,!1)}function Or(){return new R(3013,!1)}function Lr(a){return new R(3014,!1)}function Nr(a){return new R(3015,!1)}function Fr(a){return new R(3016,!1)}function Br(a,t){return new R(3404,!1)}function bs(a){return new R(3502,!1)}function zr(a){return new R(3503,!1)}function Gr(){return new R(3300,!1)}function Vr(a){return new R(3504,!1)}function Hr(a){return new R(3301,!1)}function Ur(a,t){return new R(3302,!1)}function jr(a){return new R(3303,!1)}function $r(a,t){return new R(3400,!1)}function qr(a){return new R(3401,!1)}function Qr(a){return new R(3402,!1)}function Wr(a,t){return new R(3505,!1)}function Ye(a){switch(a.length){case 0:return new Xe;case 1:return a[0];default:return new Lt(a)}}function Si(a,t,e=new Map,n=new Map){let i=[],r=[],o=-1,s=null;if(t.forEach(d=>{let h=d.get("offset"),f=h==o,v=f&&s||new Map;d.forEach((k,C)=>{let y=C,M=k;if(C!=="offset")switch(y=a.normalizePropertyName(y,i),M){case rn:M=e.get(C);break;case Fe:M=n.get(C);break;default:M=a.normalizeStyleValue(C,y,M,i);break}v.set(y,M)}),f||r.push(v),s=v,o=h}),i.length)throw bs(i);return r}function An(a,t,e,n){switch(t){case"start":a.onStart(()=>n(e&&Ei(e,"start",a)));break;case"done":a.onDone(()=>n(e&&Ei(e,"done",a)));break;case"destroy":a.onDestroy(()=>n(e&&Ei(e,"destroy",a)));break}}function Ei(a,t,e){let n=e.totalTime,i=!!e.disabled,r=Dn(a.element,a.triggerName,a.fromState,a.toState,t||a.phaseName,n??a.totalTime,i),o=a._data;return o!=null&&(r._data=o),r}function Dn(a,t,e,n,i="",r=0,o){return{element:a,triggerName:t,fromState:e,toState:n,phaseName:i,totalTime:r,disabled:!!o}}function Se(a,t,e){let n=a.get(t);return n||a.set(t,n=e),n}function Ti(a){let t=a.indexOf(":"),e=a.substring(1,t),n=a.slice(t+1);return[e,n]}var _s=typeof document>"u"?null:document.documentElement;function Rn(a){let t=a.parentNode||a.host||null;return t===_s?null:t}function vs(a){return a.substring(1,6)=="ebkit"}var yt=null,Cr=!1;function Kr(a){yt||(yt=ys()||{},Cr=yt.style?"WebkitAppearance"in yt.style:!1);let t=!0;return yt.style&&!vs(a)&&(t=a in yt.style,!t&&Cr&&(t="Webkit"+a.charAt(0).toUpperCase()+a.slice(1)in yt.style)),t}function ys(){return typeof document<"u"?document.body:null}function wi(a,t){for(;t;){if(t===a)return!0;t=Rn(t)}return!1}function ki(a,t,e){if(e)return Array.from(a.querySelectorAll(t));let n=a.querySelector(t);return n?[n]:[]}var Es=1e3,Mi="{{",xs="}}",Ii="ng-enter",Pn="ng-leave",on="ng-trigger",sn=".ng-trigger",Ai="ng-animating",On=".ng-animating";function Qe(a){if(typeof a=="number")return a;let t=a.match(/^(-?[\.\d]+)(m?s)/);return!t||t.length<2?0:xi(parseFloat(t[1]),t[2])}function xi(a,t){return t==="s"?a*Es:a}function cn(a,t,e){return a.hasOwnProperty("duration")?a:Ss(a,t,e)}var Cs=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;function Ss(a,t,e){let n,i=0,r="";if(typeof a=="string"){let o=a.match(Cs);if(o===null)return t.push(xr(a)),{duration:0,delay:0,easing:""};n=xi(parseFloat(o[1]),o[2]);let s=o[3];s!=null&&(i=xi(parseFloat(s),o[4]));let d=o[5];d&&(r=d)}else n=a;if(!e){let o=!1,s=t.length;n<0&&(t.push(ps()),o=!0),i<0&&(t.push(hs()),o=!0),o&&t.splice(s,0,xr(a))}return{duration:n,delay:i,easing:r}}function Xr(a){return a.length?a[0]instanceof Map?a:a.map(t=>new Map(Object.entries(t))):[]}function Be(a,t,e){t.forEach((n,i)=>{let r=Ln(i);e&&!e.has(i)&&e.set(i,a.style[r]),a.style[r]=n})}function lt(a,t){t.forEach((e,n)=>{let i=Ln(n);a.style[i]=""})}function Nt(a){return Array.isArray(a)?a.length==1?a[0]:Er(a):a}function Yr(a,t,e){let n=t.params||{},i=Di(a);i.length&&i.forEach(r=>{n.hasOwnProperty(r)||e.push(us(r))})}var Ci=new RegExp(`${Mi}\\s*(.+?)\\s*${xs}`,"g");function Di(a){let t=[];if(typeof a=="string"){let e;for(;e=Ci.exec(a);)t.push(e[1]);Ci.lastIndex=0}return t}function Ft(a,t,e){let n=`${a}`,i=n.replace(Ci,(r,o)=>{let s=t[o];return s==null&&(e.push(gs(o)),s=""),s.toString()});return i==n?a:i}var Ts=/-+([a-z0-9])/g;function Ln(a){return a.replace(Ts,(...t)=>t[1].toUpperCase())}function Zr(a,t){return a===0||t===0}function Jr(a,t,e){if(e.size&&t.length){let n=t[0],i=[];if(e.forEach((r,o)=>{n.has(o)||i.push(o),n.set(o,r)}),i.length)for(let r=1;r<t.length;r++){let o=t[r];i.forEach(s=>o.set(s,Nn(a,s)))}}return t}function Te(a,t,e){switch(t.type){case P.Trigger:return a.visitTrigger(t,e);case P.State:return a.visitState(t,e);case P.Transition:return a.visitTransition(t,e);case P.Sequence:return a.visitSequence(t,e);case P.Group:return a.visitGroup(t,e);case P.Animate:return a.visitAnimate(t,e);case P.Keyframes:return a.visitKeyframes(t,e);case P.Style:return a.visitStyle(t,e);case P.Reference:return a.visitReference(t,e);case P.AnimateChild:return a.visitAnimateChild(t,e);case P.AnimateRef:return a.visitAnimateRef(t,e);case P.Query:return a.visitQuery(t,e);case P.Stagger:return a.visitStagger(t,e);default:throw fs(t.type)}}function Nn(a,t){return window.getComputedStyle(a)[t]}var Wi=(()=>{class a{validateStyleProperty(e){return Kr(e)}containsElement(e,n){return wi(e,n)}getParentElement(e){return Rn(e)}query(e,n,i){return ki(e,n,i)}computeStyle(e,n,i){return i||""}animate(e,n,i,r,o,s=[],d){return new Xe(i,r)}static \u0275fac=function(n){return new(n||a)};static \u0275prov=K({token:a,factory:a.\u0275fac})}return a})(),xt=class{static NOOP=new Wi},Ct=class{};var ws=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),Vn=class extends Ct{normalizePropertyName(t,e){return Ln(t)}normalizeStyleValue(t,e,n,i){let r="",o=n.toString().trim();if(ws.has(e)&&n!==0&&n!=="0")if(typeof n=="number")r="px";else{let s=n.match(/^[+-]?[\d\.]+([a-z]*)$/);s&&s[1].length==0&&i.push(Sr(t,n))}return o+r}};var Hn="*";function ks(a,t){let e=[];return typeof a=="string"?a.split(/\s*,\s*/).forEach(n=>Ms(n,e,t)):e.push(a),e}function Ms(a,t,e){if(a[0]==":"){let d=Is(a,e);if(typeof d=="function"){t.push(d);return}a=d}let n=a.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(n==null||n.length<4)return e.push(Nr(a)),t;let i=n[1],r=n[2],o=n[3];t.push(eo(i,o));let s=i==Hn&&o==Hn;r[0]=="<"&&!s&&t.push(eo(o,i))}function Is(a,t){switch(a){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(e,n)=>parseFloat(n)>parseFloat(e);case":decrement":return(e,n)=>parseFloat(n)<parseFloat(e);default:return t.push(Fr(a)),"* => *"}}var Fn=new Set(["true","1"]),Bn=new Set(["false","0"]);function eo(a,t){let e=Fn.has(a)||Bn.has(a),n=Fn.has(t)||Bn.has(t);return(i,r)=>{let o=a==Hn||a==i,s=t==Hn||t==r;return!o&&e&&typeof i=="boolean"&&(o=i?Fn.has(a):Bn.has(a)),!s&&n&&typeof r=="boolean"&&(s=r?Fn.has(t):Bn.has(t)),o&&s}}var mo=":self",As=new RegExp(`s*${mo}s*,?`,"g");function po(a,t,e,n){return new Fi(a).build(t,e,n)}var to="",Fi=class{_driver;constructor(t){this._driver=t}build(t,e,n){let i=new Bi(e);return this._resetContextStyleTimingState(i),Te(this,Nt(t),i)}_resetContextStyleTimingState(t){t.currentQuerySelector=to,t.collectedStyles=new Map,t.collectedStyles.set(to,new Map),t.currentTime=0}visitTrigger(t,e){let n=e.queryCount=0,i=e.depCount=0,r=[],o=[];return t.name.charAt(0)=="@"&&e.errors.push(Tr()),t.definitions.forEach(s=>{if(this._resetContextStyleTimingState(e),s.type==P.State){let d=s,h=d.name;h.toString().split(/\s*,\s*/).forEach(f=>{d.name=f,r.push(this.visitState(d,e))}),d.name=h}else if(s.type==P.Transition){let d=this.visitTransition(s,e);n+=d.queryCount,i+=d.depCount,o.push(d)}else e.errors.push(wr())}),{type:P.Trigger,name:t.name,states:r,transitions:o,queryCount:n,depCount:i,options:null}}visitState(t,e){let n=this.visitStyle(t.styles,e),i=t.options&&t.options.params||null;if(n.containsDynamicStyles){let r=new Set,o=i||{};n.styles.forEach(s=>{s instanceof Map&&s.forEach(d=>{Di(d).forEach(h=>{o.hasOwnProperty(h)||r.add(h)})})}),r.size&&e.errors.push(kr(t.name,[...r.values()]))}return{type:P.State,name:t.name,style:n,options:i?{params:i}:null}}visitTransition(t,e){e.queryCount=0,e.depCount=0;let n=Te(this,Nt(t.animation),e),i=ks(t.expr,e.errors);return{type:P.Transition,matchers:i,animation:n,queryCount:e.queryCount,depCount:e.depCount,options:Et(t.options)}}visitSequence(t,e){return{type:P.Sequence,steps:t.steps.map(n=>Te(this,n,e)),options:Et(t.options)}}visitGroup(t,e){let n=e.currentTime,i=0,r=t.steps.map(o=>{e.currentTime=n;let s=Te(this,o,e);return i=Math.max(i,e.currentTime),s});return e.currentTime=i,{type:P.Group,steps:r,options:Et(t.options)}}visitAnimate(t,e){let n=Os(t.timings,e.errors);e.currentAnimateTimings=n;let i,r=t.styles?t.styles:yi({});if(r.type==P.Keyframes)i=this.visitKeyframes(r,e);else{let o=t.styles,s=!1;if(!o){s=!0;let h={};n.easing&&(h.easing=n.easing),o=yi(h)}e.currentTime+=n.duration+n.delay;let d=this.visitStyle(o,e);d.isEmptyStep=s,i=d}return e.currentAnimateTimings=null,{type:P.Animate,timings:n,style:i,options:null}}visitStyle(t,e){let n=this._makeStyleAst(t,e);return this._validateStyleAst(n,e),n}_makeStyleAst(t,e){let n=[],i=Array.isArray(t.styles)?t.styles:[t.styles];for(let s of i)typeof s=="string"?s===Fe?n.push(s):e.errors.push(Mr(s)):n.push(new Map(Object.entries(s)));let r=!1,o=null;return n.forEach(s=>{if(s instanceof Map&&(s.has("easing")&&(o=s.get("easing"),s.delete("easing")),!r)){for(let d of s.values())if(d.toString().indexOf(Mi)>=0){r=!0;break}}}),{type:P.Style,styles:n,easing:o,offset:t.offset,containsDynamicStyles:r,options:null}}_validateStyleAst(t,e){let n=e.currentAnimateTimings,i=e.currentTime,r=e.currentTime;n&&r>0&&(r-=n.duration+n.delay),t.styles.forEach(o=>{typeof o!="string"&&o.forEach((s,d)=>{let h=e.collectedStyles.get(e.currentQuerySelector),f=h.get(d),v=!0;f&&(r!=i&&r>=f.startTime&&i<=f.endTime&&(e.errors.push(Ir(d,f.startTime,f.endTime,r,i)),v=!1),r=f.startTime),v&&h.set(d,{startTime:r,endTime:i}),e.options&&Yr(s,e.options,e.errors)})})}visitKeyframes(t,e){let n={type:P.Keyframes,styles:[],options:null};if(!e.currentAnimateTimings)return e.errors.push(Ar()),n;let i=1,r=0,o=[],s=!1,d=!1,h=0,f=t.steps.map(ae=>{let re=this._makeStyleAst(ae,e),ve=re.offset!=null?re.offset:Ps(re.styles),ce=0;return ve!=null&&(r++,ce=re.offset=ve),d=d||ce<0||ce>1,s=s||ce<h,h=ce,o.push(ce),re});d&&e.errors.push(Dr()),s&&e.errors.push(Rr());let v=t.steps.length,k=0;r>0&&r<v?e.errors.push(Pr()):r==0&&(k=i/(v-1));let C=v-1,y=e.currentTime,M=e.currentAnimateTimings,Q=M.duration;return f.forEach((ae,re)=>{let ve=k>0?re==C?1:k*re:o[re],ce=ve*Q;e.currentTime=y+M.delay+ce,M.duration=ce,this._validateStyleAst(ae,e),ae.offset=ve,n.styles.push(ae)}),n}visitReference(t,e){return{type:P.Reference,animation:Te(this,Nt(t.animation),e),options:Et(t.options)}}visitAnimateChild(t,e){return e.depCount++,{type:P.AnimateChild,options:Et(t.options)}}visitAnimateRef(t,e){return{type:P.AnimateRef,animation:this.visitReference(t.animation,e),options:Et(t.options)}}visitQuery(t,e){let n=e.currentQuerySelector,i=t.options||{};e.queryCount++,e.currentQuery=t;let[r,o]=Ds(t.selector);e.currentQuerySelector=n.length?n+" "+r:r,Se(e.collectedStyles,e.currentQuerySelector,new Map);let s=Te(this,Nt(t.animation),e);return e.currentQuery=null,e.currentQuerySelector=n,{type:P.Query,selector:r,limit:i.limit||0,optional:!!i.optional,includeSelf:o,animation:s,originalSelector:t.selector,options:Et(t.options)}}visitStagger(t,e){e.currentQuery||e.errors.push(Or());let n=t.timings==="full"?{duration:0,delay:0,easing:"full"}:cn(t.timings,e.errors,!0);return{type:P.Stagger,animation:Te(this,Nt(t.animation),e),timings:n,options:null}}};function Ds(a){let t=!!a.split(/\s*,\s*/).find(e=>e==mo);return t&&(a=a.replace(As,"")),a=a.replace(/@\*/g,sn).replace(/@\w+/g,e=>sn+"-"+e.slice(1)).replace(/:animating/g,On),[a,t]}function Rs(a){return a?le({},a):null}var Bi=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(t){this.errors=t}};function Ps(a){if(typeof a=="string")return null;let t=null;if(Array.isArray(a))a.forEach(e=>{if(e instanceof Map&&e.has("offset")){let n=e;t=parseFloat(n.get("offset")),n.delete("offset")}});else if(a instanceof Map&&a.has("offset")){let e=a;t=parseFloat(e.get("offset")),e.delete("offset")}return t}function Os(a,t){if(a.hasOwnProperty("duration"))return a;if(typeof a=="number"){let r=cn(a,t).duration;return Ri(r,0,"")}let e=a;if(e.split(/\s+/).some(r=>r.charAt(0)=="{"&&r.charAt(1)=="{")){let r=Ri(0,0,"");return r.dynamic=!0,r.strValue=e,r}let i=cn(e,t);return Ri(i.duration,i.delay,i.easing)}function Et(a){return a?(a=le({},a),a.params&&(a.params=Rs(a.params))):a={},a}function Ri(a,t,e){return{duration:a,delay:t,easing:e}}function Ki(a,t,e,n,i,r,o=null,s=!1){return{type:1,element:a,keyframes:t,preStyleProps:e,postStyleProps:n,duration:i,delay:r,totalTime:i+r,easing:o,subTimeline:s}}var dn=class{_map=new Map;get(t){return this._map.get(t)||[]}append(t,e){let n=this._map.get(t);n||this._map.set(t,n=[]),n.push(...e)}has(t){return this._map.has(t)}clear(){this._map.clear()}},Ls=1,Ns=":enter",Fs=new RegExp(Ns,"g"),Bs=":leave",zs=new RegExp(Bs,"g");function ho(a,t,e,n,i,r=new Map,o=new Map,s,d,h=[]){return new zi().buildKeyframes(a,t,e,n,i,r,o,s,d,h)}var zi=class{buildKeyframes(t,e,n,i,r,o,s,d,h,f=[]){h=h||new dn;let v=new Gi(t,e,h,i,r,f,[]);v.options=d;let k=d.delay?Qe(d.delay):0;v.currentTimeline.delayNextStep(k),v.currentTimeline.setStyles([o],null,v.errors,d),Te(this,n,v);let C=v.timelines.filter(y=>y.containsAnimation());if(C.length&&s.size){let y;for(let M=C.length-1;M>=0;M--){let Q=C[M];if(Q.element===e){y=Q;break}}y&&!y.allowOnlyTimelineStyles()&&y.setStyles([s],null,v.errors,d)}return C.length?C.map(y=>y.buildKeyframes()):[Ki(e,[],[],[],0,k,"",!1)]}visitTrigger(t,e){}visitState(t,e){}visitTransition(t,e){}visitAnimateChild(t,e){let n=e.subInstructions.get(e.element);if(n){let i=e.createSubContext(t.options),r=e.currentTimeline.currentTime,o=this._visitSubInstructions(n,i,i.options);r!=o&&e.transformIntoNewTimeline(o)}e.previousNode=t}visitAnimateRef(t,e){let n=e.createSubContext(t.options);n.transformIntoNewTimeline(),this._applyAnimationRefDelays([t.options,t.animation.options],e,n),this.visitReference(t.animation,n),e.transformIntoNewTimeline(n.currentTimeline.currentTime),e.previousNode=t}_applyAnimationRefDelays(t,e,n){for(let i of t){let r=i?.delay;if(r){let o=typeof r=="number"?r:Qe(Ft(r,i?.params??{},e.errors));n.delayNextStep(o)}}}_visitSubInstructions(t,e,n){let r=e.currentTimeline.currentTime,o=n.duration!=null?Qe(n.duration):null,s=n.delay!=null?Qe(n.delay):null;return o!==0&&t.forEach(d=>{let h=e.appendInstructionToTimeline(d,o,s);r=Math.max(r,h.duration+h.delay)}),r}visitReference(t,e){e.updateOptions(t.options,!0),Te(this,t.animation,e),e.previousNode=t}visitSequence(t,e){let n=e.subContextCount,i=e,r=t.options;if(r&&(r.params||r.delay)&&(i=e.createSubContext(r),i.transformIntoNewTimeline(),r.delay!=null)){i.previousNode.type==P.Style&&(i.currentTimeline.snapshotCurrentStyles(),i.previousNode=Un);let o=Qe(r.delay);i.delayNextStep(o)}t.steps.length&&(t.steps.forEach(o=>Te(this,o,i)),i.currentTimeline.applyStylesToKeyframe(),i.subContextCount>n&&i.transformIntoNewTimeline()),e.previousNode=t}visitGroup(t,e){let n=[],i=e.currentTimeline.currentTime,r=t.options&&t.options.delay?Qe(t.options.delay):0;t.steps.forEach(o=>{let s=e.createSubContext(t.options);r&&s.delayNextStep(r),Te(this,o,s),i=Math.max(i,s.currentTimeline.currentTime),n.push(s.currentTimeline)}),n.forEach(o=>e.currentTimeline.mergeTimelineCollectedStyles(o)),e.transformIntoNewTimeline(i),e.previousNode=t}_visitTiming(t,e){if(t.dynamic){let n=t.strValue,i=e.params?Ft(n,e.params,e.errors):n;return cn(i,e.errors)}else return{duration:t.duration,delay:t.delay,easing:t.easing}}visitAnimate(t,e){let n=e.currentAnimateTimings=this._visitTiming(t.timings,e),i=e.currentTimeline;n.delay&&(e.incrementTime(n.delay),i.snapshotCurrentStyles());let r=t.style;r.type==P.Keyframes?this.visitKeyframes(r,e):(e.incrementTime(n.duration),this.visitStyle(r,e),i.applyStylesToKeyframe()),e.currentAnimateTimings=null,e.previousNode=t}visitStyle(t,e){let n=e.currentTimeline,i=e.currentAnimateTimings;!i&&n.hasCurrentStyleProperties()&&n.forwardFrame();let r=i&&i.easing||t.easing;t.isEmptyStep?n.applyEmptyStep(r):n.setStyles(t.styles,r,e.errors,e.options),e.previousNode=t}visitKeyframes(t,e){let n=e.currentAnimateTimings,i=e.currentTimeline.duration,r=n.duration,s=e.createSubContext().currentTimeline;s.easing=n.easing,t.styles.forEach(d=>{let h=d.offset||0;s.forwardTime(h*r),s.setStyles(d.styles,d.easing,e.errors,e.options),s.applyStylesToKeyframe()}),e.currentTimeline.mergeTimelineCollectedStyles(s),e.transformIntoNewTimeline(i+r),e.previousNode=t}visitQuery(t,e){let n=e.currentTimeline.currentTime,i=t.options||{},r=i.delay?Qe(i.delay):0;r&&(e.previousNode.type===P.Style||n==0&&e.currentTimeline.hasCurrentStyleProperties())&&(e.currentTimeline.snapshotCurrentStyles(),e.previousNode=Un);let o=n,s=e.invokeQuery(t.selector,t.originalSelector,t.limit,t.includeSelf,!!i.optional,e.errors);e.currentQueryTotal=s.length;let d=null;s.forEach((h,f)=>{e.currentQueryIndex=f;let v=e.createSubContext(t.options,h);r&&v.delayNextStep(r),h===e.element&&(d=v.currentTimeline),Te(this,t.animation,v),v.currentTimeline.applyStylesToKeyframe();let k=v.currentTimeline.currentTime;o=Math.max(o,k)}),e.currentQueryIndex=0,e.currentQueryTotal=0,e.transformIntoNewTimeline(o),d&&(e.currentTimeline.mergeTimelineCollectedStyles(d),e.currentTimeline.snapshotCurrentStyles()),e.previousNode=t}visitStagger(t,e){let n=e.parentContext,i=e.currentTimeline,r=t.timings,o=Math.abs(r.duration),s=o*(e.currentQueryTotal-1),d=o*e.currentQueryIndex;switch(r.duration<0?"reverse":r.easing){case"reverse":d=s-d;break;case"full":d=n.currentStaggerTime;break}let f=e.currentTimeline;d&&f.delayNextStep(d);let v=f.currentTime;Te(this,t.animation,e),e.previousNode=t,n.currentStaggerTime=i.currentTime-v+(i.startTime-n.currentTimeline.startTime)}},Un={},Gi=class a{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=Un;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(t,e,n,i,r,o,s,d){this._driver=t,this.element=e,this.subInstructions=n,this._enterClassName=i,this._leaveClassName=r,this.errors=o,this.timelines=s,this.currentTimeline=d||new jn(this._driver,e,0),s.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(t,e){if(!t)return;let n=t,i=this.options;n.duration!=null&&(i.duration=Qe(n.duration)),n.delay!=null&&(i.delay=Qe(n.delay));let r=n.params;if(r){let o=i.params;o||(o=this.options.params={}),Object.keys(r).forEach(s=>{(!e||!o.hasOwnProperty(s))&&(o[s]=Ft(r[s],o,this.errors))})}}_copyOptions(){let t={};if(this.options){let e=this.options.params;if(e){let n=t.params={};Object.keys(e).forEach(i=>{n[i]=e[i]})}}return t}createSubContext(t=null,e,n){let i=e||this.element,r=new a(this._driver,i,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(i,n||0));return r.previousNode=this.previousNode,r.currentAnimateTimings=this.currentAnimateTimings,r.options=this._copyOptions(),r.updateOptions(t),r.currentQueryIndex=this.currentQueryIndex,r.currentQueryTotal=this.currentQueryTotal,r.parentContext=this,this.subContextCount++,r}transformIntoNewTimeline(t){return this.previousNode=Un,this.currentTimeline=this.currentTimeline.fork(this.element,t),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(t,e,n){let i={duration:e??t.duration,delay:this.currentTimeline.currentTime+(n??0)+t.delay,easing:""},r=new Vi(this._driver,t.element,t.keyframes,t.preStyleProps,t.postStyleProps,i,t.stretchStartingKeyframe);return this.timelines.push(r),i}incrementTime(t){this.currentTimeline.forwardTime(this.currentTimeline.duration+t)}delayNextStep(t){t>0&&this.currentTimeline.delayNextStep(t)}invokeQuery(t,e,n,i,r,o){let s=[];if(i&&s.push(this.element),t.length>0){t=t.replace(Fs,"."+this._enterClassName),t=t.replace(zs,"."+this._leaveClassName);let d=n!=1,h=this._driver.query(this.element,t,d);n!==0&&(h=n<0?h.slice(h.length+n,h.length):h.slice(0,n)),s.push(...h)}return!r&&s.length==0&&o.push(Lr(e)),s}},jn=class a{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(t,e,n,i){this._driver=t,this.element=e,this.startTime=n,this._elementTimelineStylesLookup=i,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(e),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(e,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(t){let e=this._keyframes.size===1&&this._pendingStyles.size;this.duration||e?(this.forwardTime(this.currentTime+t),e&&this.snapshotCurrentStyles()):this.startTime+=t}fork(t,e){return this.applyStylesToKeyframe(),new a(this._driver,t,e||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=Ls,this._loadKeyframe()}forwardTime(t){this.applyStylesToKeyframe(),this.duration=t,this._loadKeyframe()}_updateStyle(t,e){this._localTimelineStyles.set(t,e),this._globalTimelineStyles.set(t,e),this._styleSummary.set(t,{time:this.currentTime,value:e})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(t){t&&this._previousKeyframe.set("easing",t);for(let[e,n]of this._globalTimelineStyles)this._backFill.set(e,n||Fe),this._currentKeyframe.set(e,Fe);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(t,e,n,i){e&&this._previousKeyframe.set("easing",e);let r=i&&i.params||{},o=Gs(t,this._globalTimelineStyles);for(let[s,d]of o){let h=Ft(d,r,n);this._pendingStyles.set(s,h),this._localTimelineStyles.has(s)||this._backFill.set(s,this._globalTimelineStyles.get(s)??Fe),this._updateStyle(s,h)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((t,e)=>{this._currentKeyframe.set(e,t)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((t,e)=>{this._currentKeyframe.has(e)||this._currentKeyframe.set(e,t)}))}snapshotCurrentStyles(){for(let[t,e]of this._localTimelineStyles)this._pendingStyles.set(t,e),this._updateStyle(t,e)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let t=[];for(let e in this._currentKeyframe)t.push(e);return t}mergeTimelineCollectedStyles(t){t._styleSummary.forEach((e,n)=>{let i=this._styleSummary.get(n);(!i||e.time>i.time)&&this._updateStyle(n,e.value)})}buildKeyframes(){this.applyStylesToKeyframe();let t=new Set,e=new Set,n=this._keyframes.size===1&&this.duration===0,i=[];this._keyframes.forEach((s,d)=>{let h=new Map([...this._backFill,...s]);h.forEach((f,v)=>{f===rn?t.add(v):f===Fe&&e.add(v)}),n||h.set("offset",d/this.duration),i.push(h)});let r=[...t.values()],o=[...e.values()];if(n){let s=i[0],d=new Map(s);s.set("offset",0),d.set("offset",1),i=[s,d]}return Ki(this.element,i,r,o,this.duration,this.startTime,this.easing,!1)}},Vi=class extends jn{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(t,e,n,i,r,o,s=!1){super(t,e,o.delay),this.keyframes=n,this.preStyleProps=i,this.postStyleProps=r,this._stretchStartingKeyframe=s,this.timings={duration:o.duration,delay:o.delay,easing:o.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let t=this.keyframes,{delay:e,duration:n,easing:i}=this.timings;if(this._stretchStartingKeyframe&&e){let r=[],o=n+e,s=e/o,d=new Map(t[0]);d.set("offset",0),r.push(d);let h=new Map(t[0]);h.set("offset",no(s)),r.push(h);let f=t.length-1;for(let v=1;v<=f;v++){let k=new Map(t[v]),C=k.get("offset"),y=e+C*n;k.set("offset",no(y/o)),r.push(k)}n=o,e=0,i="",t=r}return Ki(this.element,t,this.preStyleProps,this.postStyleProps,n,e,i,!0)}};function no(a,t=3){let e=Math.pow(10,t-1);return Math.round(a*e)/e}function Gs(a,t){let e=new Map,n;return a.forEach(i=>{if(i==="*"){n??=t.keys();for(let r of n)e.set(r,Fe)}else for(let[r,o]of i)e.set(r,o)}),e}function io(a,t,e,n,i,r,o,s,d,h,f,v,k){return{type:0,element:a,triggerName:t,isRemovalTransition:i,fromState:e,fromStyles:r,toState:n,toStyles:o,timelines:s,queriedElements:d,preStyleProps:h,postStyleProps:f,totalTime:v,errors:k}}var Pi={},$n=class{_triggerName;ast;_stateStyles;constructor(t,e,n){this._triggerName=t,this.ast=e,this._stateStyles=n}match(t,e,n,i){return Vs(this.ast.matchers,t,e,n,i)}buildStyles(t,e,n){let i=this._stateStyles.get("*");return t!==void 0&&(i=this._stateStyles.get(t?.toString())||i),i?i.buildStyles(e,n):new Map}build(t,e,n,i,r,o,s,d,h,f){let v=[],k=this.ast.options&&this.ast.options.params||Pi,C=s&&s.params||Pi,y=this.buildStyles(n,C,v),M=d&&d.params||Pi,Q=this.buildStyles(i,M,v),ae=new Set,re=new Map,ve=new Map,ce=i==="void",St={params:uo(M,k),delay:this.ast.options?.delay},Ge=f?[]:ho(t,e,this.ast.animation,r,o,y,Q,St,h,v),ye=0;return Ge.forEach(xe=>{ye=Math.max(xe.duration+xe.delay,ye)}),v.length?io(e,this._triggerName,n,i,ce,y,Q,[],[],re,ve,ye,v):(Ge.forEach(xe=>{let mt=xe.element,Tt=Se(re,mt,new Set);xe.preStyleProps.forEach(pt=>Tt.add(pt));let ha=Se(ve,mt,new Set);xe.postStyleProps.forEach(pt=>ha.add(pt)),mt!==e&&ae.add(mt)}),io(e,this._triggerName,n,i,ce,y,Q,Ge,[...ae.values()],re,ve,ye))}};function Vs(a,t,e,n,i){return a.some(r=>r(t,e,n,i))}function uo(a,t){let e=le({},t);return Object.entries(a).forEach(([n,i])=>{i!=null&&(e[n]=i)}),e}var Hi=class{styles;defaultParams;normalizer;constructor(t,e,n){this.styles=t,this.defaultParams=e,this.normalizer=n}buildStyles(t,e){let n=new Map,i=uo(t,this.defaultParams);return this.styles.styles.forEach(r=>{typeof r!="string"&&r.forEach((o,s)=>{o&&(o=Ft(o,i,e));let d=this.normalizer.normalizePropertyName(s,e);o=this.normalizer.normalizeStyleValue(s,d,o,e),n.set(s,o)})}),n}};function Hs(a,t,e){return new Ui(a,t,e)}var Ui=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(t,e,n){this.name=t,this.ast=e,this._normalizer=n,e.states.forEach(i=>{let r=i.options&&i.options.params||{};this.states.set(i.name,new Hi(i.style,r,n))}),ao(this.states,"true","1"),ao(this.states,"false","0"),e.transitions.forEach(i=>{this.transitionFactories.push(new $n(t,i,this.states))}),this.fallbackTransition=Us(t,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(t,e,n,i){return this.transitionFactories.find(o=>o.match(t,e,n,i))||null}matchStyles(t,e,n){return this.fallbackTransition.buildStyles(t,e,n)}};function Us(a,t,e){let n=[(o,s)=>!0],i={type:P.Sequence,steps:[],options:null},r={type:P.Transition,animation:i,matchers:n,options:null,queryCount:0,depCount:0};return new $n(a,r,t)}function ao(a,t,e){a.has(t)?a.has(e)||a.set(e,a.get(t)):a.has(e)&&a.set(t,a.get(e))}var js=new dn,ji=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(t,e,n){this.bodyNode=t,this._driver=e,this._normalizer=n}register(t,e){let n=[],i=[],r=po(this._driver,e,n,i);if(n.length)throw zr(n);this._animations.set(t,r)}_buildPlayer(t,e,n){let i=t.element,r=Si(this._normalizer,t.keyframes,e,n);return this._driver.animate(i,r,t.duration,t.delay,t.easing,[],!0)}create(t,e,n={}){let i=[],r=this._animations.get(t),o,s=new Map;if(r?(o=ho(this._driver,e,r,Ii,Pn,new Map,new Map,n,js,i),o.forEach(f=>{let v=Se(s,f.element,new Map);f.postStyleProps.forEach(k=>v.set(k,null))})):(i.push(Gr()),o=[]),i.length)throw Vr(i);s.forEach((f,v)=>{f.forEach((k,C)=>{f.set(C,this._driver.computeStyle(v,C,Fe))})});let d=o.map(f=>{let v=s.get(f.element);return this._buildPlayer(f,new Map,v)}),h=Ye(d);return this._playersById.set(t,h),h.onDestroy(()=>this.destroy(t)),this.players.push(h),h}destroy(t){let e=this._getPlayer(t);e.destroy(),this._playersById.delete(t);let n=this.players.indexOf(e);n>=0&&this.players.splice(n,1)}_getPlayer(t){let e=this._playersById.get(t);if(!e)throw Hr(t);return e}listen(t,e,n,i){let r=Dn(e,"","","");return An(this._getPlayer(t),n,r,i),()=>{}}command(t,e,n,i){if(n=="register"){this.register(t,i[0]);return}if(n=="create"){let o=i[0]||{};this.create(t,e,o);return}let r=this._getPlayer(t);switch(n){case"play":r.play();break;case"pause":r.pause();break;case"reset":r.reset();break;case"restart":r.restart();break;case"finish":r.finish();break;case"init":r.init();break;case"setPosition":r.setPosition(parseFloat(i[0]));break;case"destroy":this.destroy(t);break}}},ro="ng-animate-queued",$s=".ng-animate-queued",Oi="ng-animate-disabled",qs=".ng-animate-disabled",Qs="ng-star-inserted",Ws=".ng-star-inserted",Ks=[],go={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},Xs={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},ze="__ng_removed",mn=class{namespaceId;value;options;get params(){return this.options.params}constructor(t,e=""){this.namespaceId=e;let n=t&&t.hasOwnProperty("value"),i=n?t.value:t;if(this.value=Zs(i),n){let r=t,{value:o}=r,s=ba(r,["value"]);this.options=s}else this.options={};this.options.params||(this.options.params={})}absorbOptions(t){let e=t.params;if(e){let n=this.options.params;Object.keys(e).forEach(i=>{n[i]==null&&(n[i]=e[i])})}}},ln="void",Li=new mn(ln),$i=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(t,e,n){this.id=t,this.hostElement=e,this._engine=n,this._hostClassName="ng-tns-"+t,Re(e,this._hostClassName)}listen(t,e,n,i){if(!this._triggers.has(e))throw Ur(n,e);if(n==null||n.length==0)throw jr(e);if(!Js(n))throw $r(n,e);let r=Se(this._elementListeners,t,[]),o={name:e,phase:n,callback:i};r.push(o);let s=Se(this._engine.statesByElement,t,new Map);return s.has(e)||(Re(t,on),Re(t,on+"-"+e),s.set(e,Li)),()=>{this._engine.afterFlush(()=>{let d=r.indexOf(o);d>=0&&r.splice(d,1),this._triggers.has(e)||s.delete(e)})}}register(t,e){return this._triggers.has(t)?!1:(this._triggers.set(t,e),!0)}_getTrigger(t){let e=this._triggers.get(t);if(!e)throw qr(t);return e}trigger(t,e,n,i=!0){let r=this._getTrigger(e),o=new pn(this.id,e,t),s=this._engine.statesByElement.get(t);s||(Re(t,on),Re(t,on+"-"+e),this._engine.statesByElement.set(t,s=new Map));let d=s.get(e),h=new mn(n,this.id);if(!(n&&n.hasOwnProperty("value"))&&d&&h.absorbOptions(d.options),s.set(e,h),d||(d=Li),!(h.value===ln)&&d.value===h.value){if(!nc(d.params,h.params)){let M=[],Q=r.matchStyles(d.value,d.params,M),ae=r.matchStyles(h.value,h.params,M);M.length?this._engine.reportError(M):this._engine.afterFlush(()=>{lt(t,Q),Be(t,ae)})}return}let k=Se(this._engine.playersByElement,t,[]);k.forEach(M=>{M.namespaceId==this.id&&M.triggerName==e&&M.queued&&M.destroy()});let C=r.matchTransition(d.value,h.value,t,h.params),y=!1;if(!C){if(!i)return;C=r.fallbackTransition,y=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:t,triggerName:e,transition:C,fromState:d,toState:h,player:o,isFallbackTransition:y}),y||(Re(t,ro),o.onStart(()=>{Bt(t,ro)})),o.onDone(()=>{let M=this.players.indexOf(o);M>=0&&this.players.splice(M,1);let Q=this._engine.playersByElement.get(t);if(Q){let ae=Q.indexOf(o);ae>=0&&Q.splice(ae,1)}}),this.players.push(o),k.push(o),o}deregister(t){this._triggers.delete(t),this._engine.statesByElement.forEach(e=>e.delete(t)),this._elementListeners.forEach((e,n)=>{this._elementListeners.set(n,e.filter(i=>i.name!=t))})}clearElementCache(t){this._engine.statesByElement.delete(t),this._elementListeners.delete(t);let e=this._engine.playersByElement.get(t);e&&(e.forEach(n=>n.destroy()),this._engine.playersByElement.delete(t))}_signalRemovalForInnerTriggers(t,e){let n=this._engine.driver.query(t,sn,!0);n.forEach(i=>{if(i[ze])return;let r=this._engine.fetchNamespacesByElement(i);r.size?r.forEach(o=>o.triggerLeaveAnimation(i,e,!1,!0)):this.clearElementCache(i)}),this._engine.afterFlushAnimationsDone(()=>n.forEach(i=>this.clearElementCache(i)))}triggerLeaveAnimation(t,e,n,i){let r=this._engine.statesByElement.get(t),o=new Map;if(r){let s=[];if(r.forEach((d,h)=>{if(o.set(h,d.value),this._triggers.has(h)){let f=this.trigger(t,h,ln,i);f&&s.push(f)}}),s.length)return this._engine.markElementAsRemoved(this.id,t,!0,e,o),n&&Ye(s).onDone(()=>this._engine.processLeaveNode(t)),!0}return!1}prepareLeaveAnimationListeners(t){let e=this._elementListeners.get(t),n=this._engine.statesByElement.get(t);if(e&&n){let i=new Set;e.forEach(r=>{let o=r.name;if(i.has(o))return;i.add(o);let d=this._triggers.get(o).fallbackTransition,h=n.get(o)||Li,f=new mn(ln),v=new pn(this.id,o,t);this._engine.totalQueuedPlayers++,this._queue.push({element:t,triggerName:o,transition:d,fromState:h,toState:f,player:v,isFallbackTransition:!0})})}}removeNode(t,e){let n=this._engine;if(t.childElementCount&&this._signalRemovalForInnerTriggers(t,e),this.triggerLeaveAnimation(t,e,!0))return;let i=!1;if(n.totalAnimations){let r=n.players.length?n.playersByQueriedElement.get(t):[];if(r&&r.length)i=!0;else{let o=t;for(;o=o.parentNode;)if(n.statesByElement.get(o)){i=!0;break}}}if(this.prepareLeaveAnimationListeners(t),i)n.markElementAsRemoved(this.id,t,!1,e);else{let r=t[ze];(!r||r===go)&&(n.afterFlush(()=>this.clearElementCache(t)),n.destroyInnerAnimations(t),n._onRemovalComplete(t,e))}}insertNode(t,e){Re(t,this._hostClassName)}drainQueuedTransitions(t){let e=[];return this._queue.forEach(n=>{let i=n.player;if(i.destroyed)return;let r=n.element,o=this._elementListeners.get(r);o&&o.forEach(s=>{if(s.name==n.triggerName){let d=Dn(r,n.triggerName,n.fromState.value,n.toState.value);d._data=t,An(n.player,s.phase,d,s.callback)}}),i.markedForDestroy?this._engine.afterFlush(()=>{i.destroy()}):e.push(n)}),this._queue=[],e.sort((n,i)=>{let r=n.transition.ast.depCount,o=i.transition.ast.depCount;return r==0||o==0?r-o:this._engine.driver.containsElement(n.element,i.element)?1:-1})}destroy(t){this.players.forEach(e=>e.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,t)}},qi=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(t,e)=>{};_onRemovalComplete(t,e){this.onRemovalComplete(t,e)}constructor(t,e,n){this.bodyNode=t,this.driver=e,this._normalizer=n}get queuedPlayers(){let t=[];return this._namespaceList.forEach(e=>{e.players.forEach(n=>{n.queued&&t.push(n)})}),t}createNamespace(t,e){let n=new $i(t,e,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,e)?this._balanceNamespaceList(n,e):(this.newHostElements.set(e,n),this.collectEnterElement(e)),this._namespaceLookup[t]=n}_balanceNamespaceList(t,e){let n=this._namespaceList,i=this.namespacesByHostElement;if(n.length-1>=0){let o=!1,s=this.driver.getParentElement(e);for(;s;){let d=i.get(s);if(d){let h=n.indexOf(d);n.splice(h+1,0,t),o=!0;break}s=this.driver.getParentElement(s)}o||n.unshift(t)}else n.push(t);return i.set(e,t),t}register(t,e){let n=this._namespaceLookup[t];return n||(n=this.createNamespace(t,e)),n}registerTrigger(t,e,n){let i=this._namespaceLookup[t];i&&i.register(e,n)&&this.totalAnimations++}destroy(t,e){t&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let n=this._fetchNamespace(t);this.namespacesByHostElement.delete(n.hostElement);let i=this._namespaceList.indexOf(n);i>=0&&this._namespaceList.splice(i,1),n.destroy(e),delete this._namespaceLookup[t]}))}_fetchNamespace(t){return this._namespaceLookup[t]}fetchNamespacesByElement(t){let e=new Set,n=this.statesByElement.get(t);if(n){for(let i of n.values())if(i.namespaceId){let r=this._fetchNamespace(i.namespaceId);r&&e.add(r)}}return e}trigger(t,e,n,i){if(zn(e)){let r=this._fetchNamespace(t);if(r)return r.trigger(e,n,i),!0}return!1}insertNode(t,e,n,i){if(!zn(e))return;let r=e[ze];if(r&&r.setForRemoval){r.setForRemoval=!1,r.setForMove=!0;let o=this.collectedLeaveElements.indexOf(e);o>=0&&this.collectedLeaveElements.splice(o,1)}if(t){let o=this._fetchNamespace(t);o&&o.insertNode(e,n)}i&&this.collectEnterElement(e)}collectEnterElement(t){this.collectedEnterElements.push(t)}markElementAsDisabled(t,e){e?this.disabledNodes.has(t)||(this.disabledNodes.add(t),Re(t,Oi)):this.disabledNodes.has(t)&&(this.disabledNodes.delete(t),Bt(t,Oi))}removeNode(t,e,n){if(zn(e)){let i=t?this._fetchNamespace(t):null;i?i.removeNode(e,n):this.markElementAsRemoved(t,e,!1,n);let r=this.namespacesByHostElement.get(e);r&&r.id!==t&&r.removeNode(e,n)}else this._onRemovalComplete(e,n)}markElementAsRemoved(t,e,n,i,r){this.collectedLeaveElements.push(e),e[ze]={namespaceId:t,setForRemoval:i,hasAnimation:n,removedBeforeQueried:!1,previousTriggersValues:r}}listen(t,e,n,i,r){return zn(e)?this._fetchNamespace(t).listen(e,n,i,r):()=>{}}_buildInstruction(t,e,n,i,r){return t.transition.build(this.driver,t.element,t.fromState.value,t.toState.value,n,i,t.fromState.options,t.toState.options,e,r)}destroyInnerAnimations(t){let e=this.driver.query(t,sn,!0);e.forEach(n=>this.destroyActiveAnimationsForElement(n)),this.playersByQueriedElement.size!=0&&(e=this.driver.query(t,On,!0),e.forEach(n=>this.finishActiveQueriedAnimationOnElement(n)))}destroyActiveAnimationsForElement(t){let e=this.playersByElement.get(t);e&&e.forEach(n=>{n.queued?n.markedForDestroy=!0:n.destroy()})}finishActiveQueriedAnimationOnElement(t){let e=this.playersByQueriedElement.get(t);e&&e.forEach(n=>n.finish())}whenRenderingDone(){return new Promise(t=>{if(this.players.length)return Ye(this.players).onDone(()=>t());t()})}processLeaveNode(t){let e=t[ze];if(e&&e.setForRemoval){if(t[ze]=go,e.namespaceId){this.destroyInnerAnimations(t);let n=this._fetchNamespace(e.namespaceId);n&&n.clearElementCache(t)}this._onRemovalComplete(t,e.setForRemoval)}t.classList?.contains(Oi)&&this.markElementAsDisabled(t,!1),this.driver.query(t,qs,!0).forEach(n=>{this.markElementAsDisabled(n,!1)})}flush(t=-1){let e=[];if(this.newHostElements.size&&(this.newHostElements.forEach((n,i)=>this._balanceNamespaceList(n,i)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let n=0;n<this.collectedEnterElements.length;n++){let i=this.collectedEnterElements[n];Re(i,Qs)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let n=[];try{e=this._flushAnimations(n,t)}finally{for(let i=0;i<n.length;i++)n[i]()}}else for(let n=0;n<this.collectedLeaveElements.length;n++){let i=this.collectedLeaveElements[n];this.processLeaveNode(i)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(n=>n()),this._flushFns=[],this._whenQuietFns.length){let n=this._whenQuietFns;this._whenQuietFns=[],e.length?Ye(e).onDone(()=>{n.forEach(i=>i())}):n.forEach(i=>i())}}reportError(t){throw Qr(t)}_flushAnimations(t,e){let n=new dn,i=[],r=new Map,o=[],s=new Map,d=new Map,h=new Map,f=new Set;this.disabledNodes.forEach(E=>{f.add(E);let x=this.driver.query(E,$s,!0);for(let T=0;T<x.length;T++)f.add(x[T])});let v=this.bodyNode,k=Array.from(this.statesByElement.keys()),C=co(k,this.collectedEnterElements),y=new Map,M=0;C.forEach((E,x)=>{let T=Ii+M++;y.set(x,T),E.forEach(L=>Re(L,T))});let Q=[],ae=new Set,re=new Set;for(let E=0;E<this.collectedLeaveElements.length;E++){let x=this.collectedLeaveElements[E],T=x[ze];T&&T.setForRemoval&&(Q.push(x),ae.add(x),T.hasAnimation?this.driver.query(x,Ws,!0).forEach(L=>ae.add(L)):re.add(x))}let ve=new Map,ce=co(k,Array.from(ae));ce.forEach((E,x)=>{let T=Pn+M++;ve.set(x,T),E.forEach(L=>Re(L,T))}),t.push(()=>{C.forEach((E,x)=>{let T=y.get(x);E.forEach(L=>Bt(L,T))}),ce.forEach((E,x)=>{let T=ve.get(x);E.forEach(L=>Bt(L,T))}),Q.forEach(E=>{this.processLeaveNode(E)})});let St=[],Ge=[];for(let E=this._namespaceList.length-1;E>=0;E--)this._namespaceList[E].drainQueuedTransitions(e).forEach(T=>{let L=T.player,oe=T.element;if(St.push(L),this.collectedEnterElements.length){let he=oe[ze];if(he&&he.setForMove){if(he.previousTriggersValues&&he.previousTriggersValues.has(T.triggerName)){let ht=he.previousTriggersValues.get(T.triggerName),Ie=this.statesByElement.get(T.element);if(Ie&&Ie.has(T.triggerName)){let gn=Ie.get(T.triggerName);gn.value=ht,Ie.set(T.triggerName,gn)}}L.destroy();return}}let Ve=!v||!this.driver.containsElement(v,oe),we=ve.get(oe),Ze=y.get(oe),W=this._buildInstruction(T,n,Ze,we,Ve);if(W.errors&&W.errors.length){Ge.push(W);return}if(Ve){L.onStart(()=>lt(oe,W.fromStyles)),L.onDestroy(()=>Be(oe,W.toStyles)),i.push(L);return}if(T.isFallbackTransition){L.onStart(()=>lt(oe,W.fromStyles)),L.onDestroy(()=>Be(oe,W.toStyles)),i.push(L);return}let fa=[];W.timelines.forEach(he=>{he.stretchStartingKeyframe=!0,this.disabledNodes.has(he.element)||fa.push(he)}),W.timelines=fa,n.append(oe,W.timelines);let ls={instruction:W,player:L,element:oe};o.push(ls),W.queriedElements.forEach(he=>Se(s,he,[]).push(L)),W.preStyleProps.forEach((he,ht)=>{if(he.size){let Ie=d.get(ht);Ie||d.set(ht,Ie=new Set),he.forEach((gn,S)=>Ie.add(S))}}),W.postStyleProps.forEach((he,ht)=>{let Ie=h.get(ht);Ie||h.set(ht,Ie=new Set),he.forEach((gn,S)=>Ie.add(S))})});if(Ge.length){let E=[];Ge.forEach(x=>{E.push(Wr(x.triggerName,x.errors))}),St.forEach(x=>x.destroy()),this.reportError(E)}let ye=new Map,xe=new Map;o.forEach(E=>{let x=E.element;n.has(x)&&(xe.set(x,x),this._beforeAnimationBuild(E.player.namespaceId,E.instruction,ye))}),i.forEach(E=>{let x=E.element;this._getPreviousPlayers(x,!1,E.namespaceId,E.triggerName,null).forEach(L=>{Se(ye,x,[]).push(L),L.destroy()})});let mt=Q.filter(E=>lo(E,d,h)),Tt=new Map;so(Tt,this.driver,re,h,Fe).forEach(E=>{lo(E,d,h)&&mt.push(E)});let pt=new Map;C.forEach((E,x)=>{so(pt,this.driver,new Set(E),d,rn)}),mt.forEach(E=>{let x=Tt.get(E),T=pt.get(E);Tt.set(E,new Map([...x?.entries()??[],...T?.entries()??[]]))});let mi=[],ua=[],ga={};o.forEach(E=>{let{element:x,player:T,instruction:L}=E;if(n.has(x)){if(f.has(x)){T.onDestroy(()=>Be(x,L.toStyles)),T.disabled=!0,T.overrideTotalTime(L.totalTime),i.push(T);return}let oe=ga;if(xe.size>1){let we=x,Ze=[];for(;we=we.parentNode;){let W=xe.get(we);if(W){oe=W;break}Ze.push(we)}Ze.forEach(W=>xe.set(W,oe))}let Ve=this._buildAnimation(T.namespaceId,L,ye,r,pt,Tt);if(T.setRealPlayer(Ve),oe===ga)mi.push(T);else{let we=this.playersByElement.get(oe);we&&we.length&&(T.parentPlayer=Ye(we)),i.push(T)}}else lt(x,L.fromStyles),T.onDestroy(()=>Be(x,L.toStyles)),ua.push(T),f.has(x)&&i.push(T)}),ua.forEach(E=>{let x=r.get(E.element);if(x&&x.length){let T=Ye(x);E.setRealPlayer(T)}}),i.forEach(E=>{E.parentPlayer?E.syncPlayerEvents(E.parentPlayer):E.destroy()});for(let E=0;E<Q.length;E++){let x=Q[E],T=x[ze];if(Bt(x,Pn),T&&T.hasAnimation)continue;let L=[];if(s.size){let Ve=s.get(x);Ve&&Ve.length&&L.push(...Ve);let we=this.driver.query(x,On,!0);for(let Ze=0;Ze<we.length;Ze++){let W=s.get(we[Ze]);W&&W.length&&L.push(...W)}}let oe=L.filter(Ve=>!Ve.destroyed);oe.length?ec(this,x,oe):this.processLeaveNode(x)}return Q.length=0,mi.forEach(E=>{this.players.push(E),E.onDone(()=>{E.destroy();let x=this.players.indexOf(E);this.players.splice(x,1)}),E.play()}),mi}afterFlush(t){this._flushFns.push(t)}afterFlushAnimationsDone(t){this._whenQuietFns.push(t)}_getPreviousPlayers(t,e,n,i,r){let o=[];if(e){let s=this.playersByQueriedElement.get(t);s&&(o=s)}else{let s=this.playersByElement.get(t);if(s){let d=!r||r==ln;s.forEach(h=>{h.queued||!d&&h.triggerName!=i||o.push(h)})}}return(n||i)&&(o=o.filter(s=>!(n&&n!=s.namespaceId||i&&i!=s.triggerName))),o}_beforeAnimationBuild(t,e,n){let i=e.triggerName,r=e.element,o=e.isRemovalTransition?void 0:t,s=e.isRemovalTransition?void 0:i;for(let d of e.timelines){let h=d.element,f=h!==r,v=Se(n,h,[]);this._getPreviousPlayers(h,f,o,s,e.toState).forEach(C=>{let y=C.getRealPlayer();y.beforeDestroy&&y.beforeDestroy(),C.destroy(),v.push(C)})}lt(r,e.fromStyles)}_buildAnimation(t,e,n,i,r,o){let s=e.triggerName,d=e.element,h=[],f=new Set,v=new Set,k=e.timelines.map(y=>{let M=y.element;f.add(M);let Q=M[ze];if(Q&&Q.removedBeforeQueried)return new Xe(y.duration,y.delay);let ae=M!==d,re=tc((n.get(M)||Ks).map(ye=>ye.getRealPlayer())).filter(ye=>{let xe=ye;return xe.element?xe.element===M:!1}),ve=r.get(M),ce=o.get(M),St=Si(this._normalizer,y.keyframes,ve,ce),Ge=this._buildPlayer(y,St,re);if(y.subTimeline&&i&&v.add(M),ae){let ye=new pn(t,s,M);ye.setRealPlayer(Ge),h.push(ye)}return Ge});h.forEach(y=>{Se(this.playersByQueriedElement,y.element,[]).push(y),y.onDone(()=>Ys(this.playersByQueriedElement,y.element,y))}),f.forEach(y=>Re(y,Ai));let C=Ye(k);return C.onDestroy(()=>{f.forEach(y=>Bt(y,Ai)),Be(d,e.toStyles)}),v.forEach(y=>{Se(i,y,[]).push(C)}),C}_buildPlayer(t,e,n){return e.length>0?this.driver.animate(t.element,e,t.duration,t.delay,t.easing,n):new Xe(t.duration,t.delay)}},pn=class{namespaceId;triggerName;element;_player=new Xe;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(t,e,n){this.namespaceId=t,this.triggerName=e,this.element=n}setRealPlayer(t){this._containsRealPlayer||(this._player=t,this._queuedCallbacks.forEach((e,n)=>{e.forEach(i=>An(t,n,void 0,i))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(t.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(t){this.totalTime=t}syncPlayerEvents(t){let e=this._player;e.triggerCallback&&t.onStart(()=>e.triggerCallback("start")),t.onDone(()=>this.finish()),t.onDestroy(()=>this.destroy())}_queueEvent(t,e){Se(this._queuedCallbacks,t,[]).push(e)}onDone(t){this.queued&&this._queueEvent("done",t),this._player.onDone(t)}onStart(t){this.queued&&this._queueEvent("start",t),this._player.onStart(t)}onDestroy(t){this.queued&&this._queueEvent("destroy",t),this._player.onDestroy(t)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(t){this.queued||this._player.setPosition(t)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(t){let e=this._player;e.triggerCallback&&e.triggerCallback(t)}};function Ys(a,t,e){let n=a.get(t);if(n){if(n.length){let i=n.indexOf(e);n.splice(i,1)}n.length==0&&a.delete(t)}return n}function Zs(a){return a??null}function zn(a){return a&&a.nodeType===1}function Js(a){return a=="start"||a=="done"}function oo(a,t){let e=a.style.display;return a.style.display=t??"none",e}function so(a,t,e,n,i){let r=[];e.forEach(d=>r.push(oo(d)));let o=[];n.forEach((d,h)=>{let f=new Map;d.forEach(v=>{let k=t.computeStyle(h,v,i);f.set(v,k),(!k||k.length==0)&&(h[ze]=Xs,o.push(h))}),a.set(h,f)});let s=0;return e.forEach(d=>oo(d,r[s++])),o}function co(a,t){let e=new Map;if(a.forEach(s=>e.set(s,[])),t.length==0)return e;let n=1,i=new Set(t),r=new Map;function o(s){if(!s)return n;let d=r.get(s);if(d)return d;let h=s.parentNode;return e.has(h)?d=h:i.has(h)?d=n:d=o(h),r.set(s,d),d}return t.forEach(s=>{let d=o(s);d!==n&&e.get(d).push(s)}),e}function Re(a,t){a.classList?.add(t)}function Bt(a,t){a.classList?.remove(t)}function ec(a,t,e){Ye(e).onDone(()=>a.processLeaveNode(t))}function tc(a){let t=[];return fo(a,t),t}function fo(a,t){for(let e=0;e<a.length;e++){let n=a[e];n instanceof Lt?fo(n.players,t):t.push(n)}}function nc(a,t){let e=Object.keys(a),n=Object.keys(t);if(e.length!=n.length)return!1;for(let i=0;i<e.length;i++){let r=e[i];if(!t.hasOwnProperty(r)||a[r]!==t[r])return!1}return!0}function lo(a,t,e){let n=e.get(a);if(!n)return!1;let i=t.get(a);return i?n.forEach(r=>i.add(r)):t.set(a,n),e.delete(a),!0}var zt=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(t,e)=>{};constructor(t,e,n){this._driver=e,this._normalizer=n,this._transitionEngine=new qi(t.body,e,n),this._timelineEngine=new ji(t.body,e,n),this._transitionEngine.onRemovalComplete=(i,r)=>this.onRemovalComplete(i,r)}registerTrigger(t,e,n,i,r){let o=t+"-"+i,s=this._triggerCache[o];if(!s){let d=[],h=[],f=po(this._driver,r,d,h);if(d.length)throw Br(i,d);s=Hs(i,f,this._normalizer),this._triggerCache[o]=s}this._transitionEngine.registerTrigger(e,i,s)}register(t,e){this._transitionEngine.register(t,e)}destroy(t,e){this._transitionEngine.destroy(t,e)}onInsert(t,e,n,i){this._transitionEngine.insertNode(t,e,n,i)}onRemove(t,e,n){this._transitionEngine.removeNode(t,e,n)}disableAnimations(t,e){this._transitionEngine.markElementAsDisabled(t,e)}process(t,e,n,i){if(n.charAt(0)=="@"){let[r,o]=Ti(n),s=i;this._timelineEngine.command(r,e,o,s)}else this._transitionEngine.trigger(t,e,n,i)}listen(t,e,n,i,r){if(n.charAt(0)=="@"){let[o,s]=Ti(n);return this._timelineEngine.listen(o,e,s,r)}return this._transitionEngine.listen(t,e,n,i,r)}flush(t=-1){this._transitionEngine.flush(t)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(t){this._transitionEngine.afterFlushAnimationsDone(t)}};function ic(a,t){let e=null,n=null;return Array.isArray(t)&&t.length?(e=Ni(t[0]),t.length>1&&(n=Ni(t[t.length-1]))):t instanceof Map&&(e=Ni(t)),e||n?new ac(a,e,n):null}var ac=(()=>{class a{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(e,n,i){this._element=e,this._startStyles=n,this._endStyles=i;let r=a.initialStylesByElement.get(e);r||a.initialStylesByElement.set(e,r=new Map),this._initialStyles=r}start(){this._state<1&&(this._startStyles&&Be(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(Be(this._element,this._initialStyles),this._endStyles&&(Be(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(a.initialStylesByElement.delete(this._element),this._startStyles&&(lt(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(lt(this._element,this._endStyles),this._endStyles=null),Be(this._element,this._initialStyles),this._state=3)}}return a})();function Ni(a){let t=null;return a.forEach((e,n)=>{rc(n)&&(t=t||new Map,t.set(n,e))}),t}function rc(a){return a==="display"||a==="position"}var qn=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer=null;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(t,e,n,i){this.element=t,this.keyframes=e,this.options=n,this._specialStyles=i,this._duration=n.duration,this._delay=n.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(t=>t()),this._onDoneFns=[])}init(){this._buildPlayer()&&this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return this.domPlayer;this._initialized=!0;let t=this.keyframes,e=this._triggerWebAnimation(this.element,t,this.options);if(!e)return this._onFinish(),null;this.domPlayer=e,this._finalKeyframe=t.length?t[t.length-1]:new Map;let n=()=>this._onFinish();return e.addEventListener("finish",n),this.onDestroy(()=>{e.removeEventListener("finish",n)}),e}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer?.pause()}_convertKeyframesToObject(t){let e=[];return t.forEach(n=>{e.push(Object.fromEntries(n))}),e}_triggerWebAnimation(t,e,n){let i=this._convertKeyframesToObject(e);try{return t.animate(i,n)}catch(r){return null}}onStart(t){this._originalOnStartFns.push(t),this._onStartFns.push(t)}onDone(t){this._originalOnDoneFns.push(t),this._onDoneFns.push(t)}onDestroy(t){this._onDestroyFns.push(t)}play(){let t=this._buildPlayer();t&&(this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),t.play())}pause(){this.init(),this.domPlayer?.pause()}finish(){this.init(),this.domPlayer&&(this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish())}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer?.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(t=>t()),this._onDestroyFns=[])}setPosition(t){this.domPlayer||this.init(),this.domPlayer&&(this.domPlayer.currentTime=t*this.time)}getPosition(){return this.domPlayer?+(this.domPlayer.currentTime??0)/this.time:this._initialized?1:0}get totalTime(){return this._delay+this._duration}beforeDestroy(){let t=new Map;this.hasStarted()&&this._finalKeyframe.forEach((n,i)=>{i!=="offset"&&t.set(i,this._finished?n:Nn(this.element,i))}),this.currentSnapshot=t}triggerCallback(t){let e=t==="start"?this._onStartFns:this._onDoneFns;e.forEach(n=>n()),e.length=0}},Qn=class{validateStyleProperty(t){return!0}validateAnimatableStyleProperty(t){return!0}containsElement(t,e){return wi(t,e)}getParentElement(t){return Rn(t)}query(t,e,n){return ki(t,e,n)}computeStyle(t,e,n){return Nn(t,e)}animate(t,e,n,i,r,o=[]){let s=i==0?"both":"forwards",d={duration:n,delay:i,fill:s};r&&(d.easing=r);let h=new Map,f=o.filter(C=>C instanceof qn);Zr(n,i)&&f.forEach(C=>{C.currentSnapshot.forEach((y,M)=>h.set(M,y))});let v=Xr(e).map(C=>new Map(C));v=Jr(t,v,h);let k=ic(t,v);return new qn(t,v,d,k)}};var Gn="@",bo="@.disabled",Wn=class{namespaceId;delegate;engine;_onDestroy;\u0275type=0;constructor(t,e,n,i){this.namespaceId=t,this.delegate=e,this.engine=n,this._onDestroy=i}get data(){return this.delegate.data}destroyNode(t){this.delegate.destroyNode?.(t)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}appendChild(t,e){this.delegate.appendChild(t,e),this.engine.onInsert(this.namespaceId,e,t,!1)}insertBefore(t,e,n,i=!0){this.delegate.insertBefore(t,e,n),this.engine.onInsert(this.namespaceId,e,t,i)}removeChild(t,e,n,i){if(i){this.delegate.removeChild(t,e,n,i);return}this.parentNode(e)&&this.engine.onRemove(this.namespaceId,e,this.delegate)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,n,i){this.delegate.setAttribute(t,e,n,i)}removeAttribute(t,e,n){this.delegate.removeAttribute(t,e,n)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,n,i){this.delegate.setStyle(t,e,n,i)}removeStyle(t,e,n){this.delegate.removeStyle(t,e,n)}setProperty(t,e,n){e.charAt(0)==Gn&&e==bo?this.disableAnimations(t,!!n):this.delegate.setProperty(t,e,n)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,n,i){return this.delegate.listen(t,e,n,i)}disableAnimations(t,e){this.engine.disableAnimations(t,e)}},Qi=class extends Wn{factory;constructor(t,e,n,i,r){super(e,n,i,r),this.factory=t,this.namespaceId=e}setProperty(t,e,n){e.charAt(0)==Gn?e.charAt(1)=="."&&e==bo?(n=n===void 0?!0:!!n,this.disableAnimations(t,n)):this.engine.process(this.namespaceId,t,e.slice(1),n):this.delegate.setProperty(t,e,n)}listen(t,e,n,i){if(e.charAt(0)==Gn){let r=oc(t),o=e.slice(1),s="";return o.charAt(0)!=Gn&&([o,s]=sc(o)),this.engine.listen(this.namespaceId,r,o,s,d=>{let h=d._data||-1;this.factory.scheduleListenerCallback(h,n,d)})}return this.delegate.listen(t,e,n,i)}};function oc(a){switch(a){case"body":return document.body;case"document":return document;case"window":return window;default:return a}}function sc(a){let t=a.indexOf("."),e=a.substring(0,t),n=a.slice(t+1);return[e,n]}var Kn=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(t,e,n){this.delegate=t,this.engine=e,this._zone=n,e.onRemovalComplete=(i,r)=>{r?.removeChild(null,i)}}createRenderer(t,e){let i=this.delegate.createRenderer(t,e);if(!t||!e?.data?.animation){let h=this._rendererCache,f=h.get(i);if(!f){let v=()=>h.delete(i);f=new Wn("",i,this.engine,v),h.set(i,f)}return f}let r=e.id,o=e.id+"-"+this._currentId;this._currentId++,this.engine.register(o,t);let s=h=>{Array.isArray(h)?h.forEach(s):this.engine.registerTrigger(r,o,t,h.name,h)};return e.data.animation.forEach(s),new Qi(this,o,i,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(t,e,n){if(t>=0&&t<this._microtaskId){this._zone.run(()=>e(n));return}let i=this._animationCallbacksBuffer;i.length==0&&queueMicrotask(()=>{this._zone.run(()=>{i.forEach(r=>{let[o,s]=r;o(s)}),this._animationCallbacksBuffer=[]})}),i.push([e,n])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(t){this.engine.flush(),this.delegate.componentReplaced?.(t)}};var lc=(()=>{class a extends zt{constructor(e,n,i){super(e,n,i)}ngOnDestroy(){this.flush()}static \u0275fac=function(n){return new(n||a)(ke(it),ke(xt),ke(Ct))};static \u0275prov=K({token:a,factory:a.\u0275fac})}return a})();function dc(){return new Vn}function mc(){return new Kn(b(Na),b(zt),b(de))}var _o=[{provide:Ct,useFactory:dc},{provide:zt,useClass:lc},{provide:ka,useFactory:mc}],bd=[{provide:xt,useClass:Wi},{provide:hi,useValue:"NoopAnimations"},..._o],pc=[{provide:xt,useFactory:()=>new Qn},{provide:hi,useFactory:()=>"BrowserAnimations"},..._o];function vo(){return wa("NgEagerAnimations"),[...pc]}var yo=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=te({type:a});static \u0275inj=J({imports:[Wa,be]})}return a})();var hc=["*"];var uc=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],gc=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],fc=new j("MAT_CARD_CONFIG"),Xn=(()=>{class a{appearance;constructor(){let e=b(fc,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=V({type:a,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(n,i){n&2&&B("mat-mdc-card-outlined",i.appearance==="outlined")("mdc-card--outlined",i.appearance==="outlined")("mat-mdc-card-filled",i.appearance==="filled")("mdc-card--filled",i.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:hc,decls:1,vars:0,template:function(n,i){n&1&&(pe(),U(0))},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0})}return a})(),Eo=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275dir=H({type:a,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return a})();var Yn=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275dir=H({type:a,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return a})(),xo=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275dir=H({type:a,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return a})(),Co=(()=>{class a{align="start";static \u0275fac=function(n){return new(n||a)};static \u0275dir=H({type:a,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(n,i){n&2&&B("mat-mdc-card-actions-align-end",i.align==="end")},inputs:{align:"align"},exportAs:["matCardActions"]})}return a})(),So=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275cmp=V({type:a,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:gc,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(n,i){n&1&&(pe(uc),U(0),rt(1,"div",0),U(2,1),vt(),U(3,2))},encapsulation:2,changeDetection:0})}return a})();var Gt=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=te({type:a});static \u0275inj=J({imports:[be]})}return a})();var bc=["input"],_c=["label"],vc=["*"],Xi={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},yc=new j("mat-checkbox-default-options",{providedIn:"root",factory:()=>Xi}),_e=(function(a){return a[a.Init=0]="Init",a[a.Checked=1]="Checked",a[a.Unchecked=2]="Unchecked",a[a.Indeterminate=3]="Indeterminate",a})(_e||{}),Yi=class{source;checked},Ec=(()=>{class a{_elementRef=b(ue);_changeDetectorRef=b(Ce);_ngZone=b(de);_animationsDisabled=qe();_options=b(yc,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let n=new Yi;return n.source=this,n.checked=e,n}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new $;indeterminateChange=new $;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=_e.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){b(We).load(Ke);let e=b(new Yt("tabindex"),{optional:!0});this._options=this._options||Xi,this.color=this._options.color||Xi.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=b(De).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let n=e!=this._indeterminate();this._indeterminate.set(e),n&&(e?this._transitionCheckState(_e.Indeterminate):this._transitionCheckState(this.checked?_e.Checked:_e.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=me(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let n=this._currentCheckState,i=this._getAnimationTargetElement();if(!(n===e||!i)&&(this._currentAnimationClass&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(n,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);let r=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(r)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?_e.Checked:_e.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,n){if(this._animationsDisabled)return"";switch(e){case _e.Init:if(n===_e.Checked)return this._animationClasses.uncheckedToChecked;if(n==_e.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case _e.Unchecked:return n===_e.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case _e.Checked:return n===_e.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case _e.Indeterminate:return n===_e.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let n=this._inputElement;n&&(n.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=V({type:a,selectors:[["mat-checkbox"]],viewQuery:function(n,i){if(n&1&&ge(bc,5)(_c,5),n&2){let r;I(r=A())&&(i._inputElement=r.first),I(r=A())&&(i._labelElement=r.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(n,i){n&2&&(Kt("id",i.id),ne("tabindex",null)("aria-label",null)("aria-labelledby",null),Ne(i.color?"mat-"+i.color:"mat-accent"),B("_mat-animation-noopable",i._animationsDisabled)("mdc-checkbox--disabled",i.disabled)("mat-mdc-checkbox-disabled",i.disabled)("mat-mdc-checkbox-checked",i.checked)("mat-mdc-checkbox-disabled-interactive",i.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",N],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",N],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",N],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:$e(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",N],checked:[2,"checked","checked",N],disabled:[2,"disabled","disabled",N],indeterminate:[2,"indeterminate","indeterminate",N]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[fe([{provide:za,useExisting:pi(()=>a),multi:!0},{provide:Va,useExisting:a,multi:!0}]),Oe],ngContentSelectors:vc,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(n,i){if(n&1&&(pe(),c(0,"div",3),w("click",function(o){return i._preventBubblingFromLabel(o)}),c(1,"div",4,0)(3,"div",5),w("click",function(){return i._onTouchTargetClick()}),l(),c(4,"input",6,1),w("blur",function(){return i._onBlur()})("click",function(){return i._onInputClick()})("change",function(o){return i._onInteractionEvent(o)}),l(),ie(6,"div",7),c(7,"div",8),kt(),c(8,"svg",9),ie(9,"path",10),l(),Sa(),ie(10,"div",11),l(),ie(11,"div",12),l(),c(12,"label",13,2),U(14),l()()),n&2){let r=Xt(2);D("labelPosition",i.labelPosition),p(4),B("mdc-checkbox--selected",i.checked),D("checked",i.checked)("indeterminate",i.indeterminate)("disabled",i.disabled&&!i.disabledInteractive)("id",i.inputId)("required",i.required)("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex),ne("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby)("aria-describedby",i.ariaDescribedby)("aria-checked",i.indeterminate?"mixed":null)("aria-controls",i.ariaControls)("aria-disabled",i.disabled&&i.disabledInteractive?!0:null)("aria-expanded",i.ariaExpanded)("aria-owns",i.ariaOwns)("name",i.name)("value",i.value),p(7),D("matRippleTrigger",r)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",!0),p(),D("for",i.inputId)}},dependencies:[nn,Ya],styles:[`.mdc-checkbox {
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
`],encapsulation:2,changeDetection:0})}return a})(),wo=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=te({type:a});static \u0275inj=J({imports:[Ec,be]})}return a})();var xc=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],Cc=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function Sc(a,t){a&1&&(c(0,"span",3),U(1,1),l())}function Tc(a,t){a&1&&(c(0,"span",6),U(1,2),l())}var wc=new j("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),ko=new j("MatChipAvatar"),Mo=new j("MatChipTrailingIcon"),Io=new j("MatChipEdit"),Ao=new j("MatChipRemove"),Do=new j("MatChip"),Ro=(()=>{class a{_elementRef=b(ue);_parentChip=b(Do);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){b(We).load(Ke),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(n){return new(n||a)};static \u0275dir=H({type:a,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(n,i){n&2&&(ne("disabled",i._getDisabledAttribute())("aria-disabled",i.disabled),B("mdc-evolution-chip__action--primary",i._isPrimary)("mdc-evolution-chip__action--secondary",!i._isPrimary)("mdc-evolution-chip__action--trailing",!i._isPrimary&&!i._isLeading))},inputs:{disabled:[2,"disabled","disabled",N],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:$e(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return a})(),kc=(()=>{class a extends Ro{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(i){return(e||(e=at(a)))(i||a)}})();static \u0275dir=H({type:a,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(n,i){n&1&&w("click",function(o){return i._handleClick(o)})("keydown",function(o){return i._handleKeydown(o)}),n&2&&(ne("tabindex",i._getTabindex()),B("mdc-evolution-chip__action--presentational",!1))},features:[Le]})}return a})();var Po=(()=>{class a{_changeDetectorRef=b(Ce);_elementRef=b(ue);_tagName=b(Ra);_ngZone=b(de);_focusMonitor=b(Jt);_globalRippleOptions=b(bi,{optional:!0});_document=b(it);_onFocus=new se;_onBlur=new se;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=qe();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=b(De).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new $;destroyed=new $;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=b(Ka);_injector=b(_t);constructor(){let e=b(We);e.load(Ke),e.load(qa),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=et(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(n=>{let i=n._elementRef.nativeElement;return i===e||i.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let n=e!==null;n!==this._hasFocusInternal&&(this._hasFocusInternal=n,n?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=V({type:a,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(n,i,r){if(n&1&&Ae(r,ko,5)(r,Io,5)(r,Mo,5)(r,Ao,5)(r,ko,5)(r,Mo,5)(r,Io,5)(r,Ao,5),n&2){let o;I(o=A())&&(i.leadingIcon=o.first),I(o=A())&&(i.editIcon=o.first),I(o=A())&&(i.trailingIcon=o.first),I(o=A())&&(i.removeIcon=o.first),I(o=A())&&(i._allLeadingIcons=o),I(o=A())&&(i._allTrailingIcons=o),I(o=A())&&(i._allEditIcons=o),I(o=A())&&(i._allRemoveIcons=o)}},viewQuery:function(n,i){if(n&1&&ge(kc,5),n&2){let r;I(r=A())&&(i.primaryAction=r.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(n,i){n&1&&w("keydown",function(o){return i._handleKeydown(o)}),n&2&&(Kt("id",i.id),ne("role",i.role)("aria-label",i.ariaLabel),Ne("mat-"+(i.color||"primary")),B("mdc-evolution-chip",!i._isBasicChip)("mdc-evolution-chip--disabled",i.disabled)("mdc-evolution-chip--with-trailing-action",i._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",i.leadingIcon)("mdc-evolution-chip--with-primary-icon",i.leadingIcon)("mdc-evolution-chip--with-avatar",i.leadingIcon)("mat-mdc-chip-with-avatar",i.leadingIcon)("mat-mdc-chip-highlighted",i.highlighted)("mat-mdc-chip-disabled",i.disabled)("mat-mdc-basic-chip",i._isBasicChip)("mat-mdc-standard-chip",!i._isBasicChip)("mat-mdc-chip-with-trailing-icon",i._hasTrailingIcon())("_mat-animation-noopable",i._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",N],highlighted:[2,"highlighted","highlighted",N],disableRipple:[2,"disableRipple","disableRipple",N],disabled:[2,"disabled","disabled",N]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[fe([{provide:Do,useExisting:a}])],ngContentSelectors:Cc,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(n,i){n&1&&(pe(xc),ie(0,"span",0),c(1,"span",1)(2,"span",2),Y(3,Sc,2,0,"span",3),c(4,"span",4),U(5),ie(6,"span",5),l()()(),Y(7,Tc,2,0,"span",6)),n&2&&(p(3),Z(i.leadingIcon?3:-1),p(4),Z(i._hasTrailingIcon()?7:-1))},dependencies:[Ro],styles:[`.mdc-evolution-chip,
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
`],encapsulation:2,changeDetection:0})}return a})();var Oo=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=te({type:a});static \u0275inj=J({providers:[Za,{provide:wc,useValue:{separatorKeyCodes:[13]}}],imports:[Sn,be]})}return a})();var Zi=new j("CdkAccordion"),Lo=(()=>{class a{_stateChanges=new se;_openCloseAllActions=new se;id=b(De).getId("cdk-accordion-");multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static \u0275fac=function(n){return new(n||a)};static \u0275dir=H({type:a,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",N]},exportAs:["cdkAccordion"],features:[fe([{provide:Zi,useExisting:a}]),Oe]})}return a})(),No=(()=>{class a{accordion=b(Zi,{optional:!0,skipSelf:!0});_changeDetectorRef=b(Ce);_expansionDispatcher=b(wn);_openCloseAllSubscription=Pe.EMPTY;closed=new $;opened=new $;destroyed=new $;expandedChange=new $;id=b(De).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let n=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,n)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=me(!1);_removeUniqueSelectionListener=()=>{};constructor(){}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,n)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===n&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(n){return new(n||a)};static \u0275dir=H({type:a,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",N],disabled:[2,"disabled","disabled",N]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[fe([{provide:Zi,useValue:void 0}])]})}return a})(),Fo=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=te({type:a});static \u0275inj=J({})}return a})();var Ic=["body"],Ac=["bodyWrapper"],Dc=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],Rc=["mat-expansion-panel-header","*","mat-action-row"];function Pc(a,t){}var Oc=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Lc=["mat-panel-title","mat-panel-description","*"];function Nc(a,t){a&1&&(rt(0,"span",1),kt(),rt(1,"svg",2),Aa(2,"path",3),vt()())}var Ji=new j("MAT_ACCORDION"),Bo=new j("MAT_EXPANSION_PANEL"),Fc=(()=>{class a{_template=b(Mt);_expansionPanel=b(Bo,{optional:!0});constructor(){}static \u0275fac=function(n){return new(n||a)};static \u0275dir=H({type:a,selectors:[["ng-template","matExpansionPanelContent",""]]})}return a})(),zo=new j("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),ea=(()=>{class a extends No{_viewContainerRef=b(_n);_animationsDisabled=qe();_document=b(it);_ngZone=b(de);_elementRef=b(ue);_renderer=b(It);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new $;afterCollapse=new $;_inputChanges=new se;accordion=b(Ji,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=b(De).getId("mat-expansion-panel-header-");constructor(){super();let e=b(zo,{optional:!0});this._expansionDispatcher=b(wn),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(ft(null),He(()=>this.expanded&&!this._portal),nt(1)).subscribe(()=>{this._portal=new Tn(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,n=this._body.nativeElement;return e===n||n.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:n})=>{e===this._bodyWrapper?.nativeElement&&n==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=V({type:a,selectors:[["mat-expansion-panel"]],contentQueries:function(n,i,r){if(n&1&&Ae(r,Fc,5),n&2){let o;I(o=A())&&(i._lazyContent=o.first)}},viewQuery:function(n,i){if(n&1&&ge(Ic,5)(Ac,5),n&2){let r;I(r=A())&&(i._body=r.first),I(r=A())&&(i._bodyWrapper=r.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(n,i){n&2&&B("mat-expanded",i.expanded)("mat-expansion-panel-spacing",i._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",N],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[fe([{provide:Ji,useValue:void 0},{provide:Bo,useExisting:a}]),Le,Oe],ngContentSelectors:Rc,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(n,i){n&1&&(pe(Dc),U(0),c(1,"div",2,0)(3,"div",3,1)(5,"div",4),U(6,1),Wt(7,Pc,0,0,"ng-template",5),l(),U(8,2),l()()),n&2&&(p(),ne("inert",i.expanded?null:""),p(2),D("id",i.id),ne("aria-labelledby",i._headerId),p(4),D("cdkPortalOutlet",i._portal))},dependencies:[an],styles:[`.mat-expansion-panel {
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
`],encapsulation:2,changeDetection:0})}return a})();var ta=(()=>{class a{panel=b(ea,{host:!0});_element=b(ue);_focusMonitor=b(Jt);_changeDetectorRef=b(Ce);_parentChangeSubscription=Pe.EMPTY;constructor(){b(We).load(Ke);let e=this.panel,n=b(zo,{optional:!0}),i=b(new Yt("tabindex"),{optional:!0}),r=e.accordion?e.accordion._stateChanges.pipe(He(o=>!!(o.hideToggle||o.togglePosition))):fn;this.tabIndex=parseInt(i||"")||0,this._parentChangeSubscription=et(e.opened,e.closed,r,e._inputChanges.pipe(He(o=>!!(o.hideToggle||o.disabled||o.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(He(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),n&&(this.expandedHeight=n.expandedHeight,this.collapsedHeight=n.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:xn(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,n){e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=V({type:a,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(n,i){n&1&&w("click",function(){return i._toggle()})("keydown",function(o){return i._keydown(o)}),n&2&&(ne("id",i.panel._headerId)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i._getPanelId())("aria-expanded",i._isExpanded())("aria-disabled",i.panel.disabled),At("height",i._getHeaderHeight()),B("mat-expanded",i._isExpanded())("mat-expansion-toggle-indicator-after",i._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",i._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:$e(e)]},ngContentSelectors:Lc,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(n,i){n&1&&(pe(Oc),rt(0,"span",0),U(1),U(2,1),U(3,2),vt(),Y(4,Nc,3,0,"span",1)),n&2&&(B("mat-content-hide-toggle",!i._showToggle()),p(4),Z(i._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
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
`],encapsulation:2,changeDetection:0})}return a})();var Go=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275dir=H({type:a,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return a})(),Vo=(()=>{class a extends Lo{_keyManager;_ownHeaders=new qt;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(ft(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(n=>n.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new en(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=at(a)))(i||a)}})();static \u0275dir=H({type:a,selectors:[["mat-accordion"]],contentQueries:function(n,i,r){if(n&1&&Ae(r,ta,5),n&2){let o;I(o=A())&&(i._headers=o)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(n,i){n&2&&B("mat-accordion-multi",i.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",N],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[fe([{provide:Ji,useExisting:a}]),Le]})}return a})(),Jn=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=te({type:a});static \u0275inj=J({imports:[Fo,sr,be]})}return a})();var Ho=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=te({type:a});static \u0275inj=J({imports:[Sn,cr,be,rr]})}return a})();var oa=["*"];function zc(a,t){a&1&&U(0)}var Gc=["tabListContainer"],Vc=["tabList"],Hc=["tabListInner"],Uc=["nextPaginator"],jc=["previousPaginator"],$c=["content"];function qc(a,t){}var Qc=["tabBodyWrapper"],Wc=["tabHeader"];function Kc(a,t){}function Xc(a,t){if(a&1&&Wt(0,Kc,0,0,"ng-template",12),a&2){let e=F().$implicit;D("cdkPortalOutlet",e.templateLabel)}}function Yc(a,t){if(a&1&&m(0),a&2){let e=F().$implicit;_(e.textLabel)}}function Zc(a,t){if(a&1){let e=Ee();c(0,"div",7,2),w("click",function(){let i=z(e),r=i.$implicit,o=i.$index,s=F(),d=Xt(1);return G(s._handleClick(r,d,o))})("cdkFocusChange",function(i){let r=z(e).$index,o=F();return G(o._tabFocusChanged(i,r))}),ie(2,"span",8)(3,"div",9),c(4,"span",10)(5,"span",11),Y(6,Xc,1,1,null,12)(7,Yc,1,1),l()()()}if(a&2){let e=t.$implicit,n=t.$index,i=Xt(1),r=F();Ne(e.labelClass),B("mdc-tab--active",r.selectedIndex===n),D("id",r._getTabLabelId(e,n))("disabled",e.disabled)("fitInkBarToContent",r.fitInkBarToContent),ne("tabIndex",r._getTabIndex(n))("aria-posinset",n+1)("aria-setsize",r._tabs.length)("aria-controls",r._getTabContentId(n))("aria-selected",r.selectedIndex===n)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),p(3),D("matRippleTrigger",i)("matRippleDisabled",e.disabled||r.disableRipple),p(3),Z(e.templateLabel?6:7)}}function Jc(a,t){a&1&&U(0)}function el(a,t){if(a&1){let e=Ee();c(0,"mat-tab-body",13),w("_onCentered",function(){z(e);let i=F();return G(i._removeTabBodyWrapperHeight())})("_onCentering",function(i){z(e);let r=F();return G(r._setTabBodyWrapperHeight(i))})("_beforeCentering",function(i){z(e);let r=F();return G(r._bodyCentered(i))}),l()}if(a&2){let e=t.$implicit,n=t.$index,i=F();Ne(e.bodyClass),D("id",i._getTabContentId(n))("content",e.content)("position",e.position)("animationDuration",i.animationDuration)("preserveContent",i.preserveContent),ne("tabindex",i.contentTabIndex!=null&&i.selectedIndex===n?i.contentTabIndex:null)("aria-labelledby",i._getTabLabelId(e,n))("aria-hidden",i.selectedIndex!==n)}}var tl=new j("MatTabContent"),nl=(()=>{class a{template=b(Mt);constructor(){}static \u0275fac=function(n){return new(n||a)};static \u0275dir=H({type:a,selectors:[["","matTabContent",""]],features:[fe([{provide:tl,useExisting:a}])]})}return a})(),il=new j("MatTabLabel"),qo=new j("MAT_TAB"),al=(()=>{class a extends or{_closestTab=b(qo,{optional:!0});static \u0275fac=(()=>{let e;return function(i){return(e||(e=at(a)))(i||a)}})();static \u0275dir=H({type:a,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[fe([{provide:il,useExisting:a}]),Le]})}return a})(),Qo=new j("MAT_TAB_GROUP"),sa=(()=>{class a{_viewContainerRef=b(_n);_closestTabGroup=b(Qo,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new se;position=null;origin=null;isActive=!1;constructor(){b(We).load(Ke)}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new Tn(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=V({type:a,selectors:[["mat-tab"]],contentQueries:function(n,i,r){if(n&1&&Ae(r,al,5)(r,nl,7,Mt),n&2){let o;I(o=A())&&(i.templateLabel=o.first),I(o=A())&&(i._explicitContent=o.first)}},viewQuery:function(n,i){if(n&1&&ge(Mt,7),n&2){let r;I(r=A())&&(i._implicitContent=r.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(n,i){n&2&&ne("id",null)},inputs:{disabled:[2,"disabled","disabled",N],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[fe([{provide:qo,useExisting:a}]),Oe],ngContentSelectors:oa,decls:1,vars:0,template:function(n,i){n&1&&(pe(),ui(0,zc,1,0,"ng-template"))},encapsulation:2})}return a})(),na="mdc-tab-indicator--active",Uo="mdc-tab-indicator--no-transition",ia=class{_items;_currentItem;constructor(t){this._items=t}hide(){this._items.forEach(t=>t.deactivateInkBar()),this._currentItem=void 0}alignToElement(t){let e=this._items.find(i=>i.elementRef.nativeElement===t),n=this._currentItem;if(e!==n&&(n?.deactivateInkBar(),e)){let i=n?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(i),this._currentItem=e}}},rl=(()=>{class a{_elementRef=b(ue);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let n=this._elementRef.nativeElement;if(!e||!n.getBoundingClientRect||!this._inkBarContentElement){n.classList.add(na);return}let i=n.getBoundingClientRect(),r=e.width/i.width,o=e.left-i.left;n.classList.add(Uo),this._inkBarContentElement.style.setProperty("transform",`translateX(${o}px) scaleX(${r})`),n.getBoundingClientRect(),n.classList.remove(Uo),n.classList.add(na),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(na)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,n=this._inkBarElement=e.createElement("span"),i=this._inkBarContentElement=e.createElement("span");n.className="mdc-tab-indicator",i.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",n.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(n){return new(n||a)};static \u0275dir=H({type:a,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",N]}})}return a})();var Wo=(()=>{class a extends rl{elementRef=b(ue);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(i){return(e||(e=at(a)))(i||a)}})();static \u0275dir=H({type:a,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(n,i){n&2&&(ne("aria-disabled",!!i.disabled),B("mat-mdc-tab-disabled",i.disabled))},inputs:{disabled:[2,"disabled","disabled",N]},features:[Le]})}return a})(),jo={passive:!0},ol=650,sl=100,cl=(()=>{class a{_elementRef=b(ue);_changeDetectorRef=b(Ce);_viewportRuler=b(vi);_dir=b(tn,{optional:!0});_ngZone=b(de);_platform=b(Zt);_sharedResizeObserver=b(Ja);_injector=b(_t);_renderer=b(It);_animationsDisabled=qe();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new se;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new se;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let n=isNaN(e)?0:e;this._selectedIndex!=n&&(this._selectedIndexChanged=!0,this._selectedIndex=n,this._keyManager&&this._keyManager.updateActiveItem(n))}_selectedIndex=0;selectFocusedIndex=new $;indexFocused=new $;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),jo),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),jo))}ngAfterContentInit(){let e=this._dir?this._dir.change:_a("ltr"),n=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(ya(32),$t(this._destroyed)),i=this._viewportRuler.change(150).pipe($t(this._destroyed)),r=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new en(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Qt(r,{injector:this._injector}),et(e,i,n,this._items.changes,this._itemsResized()).pipe($t(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),r()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(o=>{this.indexFocused.emit(o),this._setTabFocus(o)})}_itemsResized(){return typeof ResizeObserver!="function"?fn:this._items.changes.pipe(ft(this._items),bt(e=>new wt(n=>this._ngZone.runOutsideAngular(()=>{let i=new ResizeObserver(r=>n.next(r));return e.forEach(r=>i.observe(r.elementRef.nativeElement)),()=>{i.disconnect()}}))),Ea(1),He(e=>e.some(n=>n.contentRect.width>0&&n.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!xn(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let n=this._items.get(this.focusIndex);n&&!n.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let n=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?n.scrollLeft=0:n.scrollLeft=n.scrollWidth-n.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,n=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(n)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let n=this._tabListContainer.nativeElement.offsetWidth,i=(e=="before"?-1:1)*n/3;return this._scrollTo(this._scrollDistance+i)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let n=this._items?this._items.toArray()[e]:null;if(!n)return;let i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:r,offsetWidth:o}=n.elementRef.nativeElement,s,d;this._getLayoutDirection()=="ltr"?(s=r,d=s+o):(d=this._tabListInner.nativeElement.offsetWidth-r,s=d-o);let h=this.scrollDistance,f=this.scrollDistance+i;s<h?this.scrollDistance-=h-s:d>f&&(this.scrollDistance+=Math.min(d-f,s-h))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,n=this._elementRef.nativeElement.offsetWidth,i=e-n>=5;i||(this.scrollDistance=0),i!==this._showPaginationControls&&(this._showPaginationControls=i,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,n=this._tabListContainer.nativeElement.offsetWidth;return e-n||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,n=e?e.elementRef.nativeElement:null;n?this._inkBar.alignToElement(n):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,n){n&&n.button!=null&&n.button!==0||(this._stopInterval(),va(ol,sl).pipe($t(et(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:i,distance:r}=this._scrollHeader(e);(r===0||r>=i)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let n=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(n,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:n,distance:this._scrollDistance}}static \u0275fac=function(n){return new(n||a)};static \u0275dir=H({type:a,inputs:{disablePagination:[2,"disablePagination","disablePagination",N],selectedIndex:[2,"selectedIndex","selectedIndex",$e]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return a})(),ll=(()=>{class a extends cl{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new ia(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=at(a)))(i||a)}})();static \u0275cmp=V({type:a,selectors:[["mat-tab-header"]],contentQueries:function(n,i,r){if(n&1&&Ae(r,Wo,4),n&2){let o;I(o=A())&&(i._items=o)}},viewQuery:function(n,i){if(n&1&&ge(Gc,7)(Vc,7)(Hc,7)(Uc,5)(jc,5),n&2){let r;I(r=A())&&(i._tabListContainer=r.first),I(r=A())&&(i._tabList=r.first),I(r=A())&&(i._tabListInner=r.first),I(r=A())&&(i._nextPaginator=r.first),I(r=A())&&(i._previousPaginator=r.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(n,i){n&2&&B("mat-mdc-tab-header-pagination-controls-enabled",i._showPaginationControls)("mat-mdc-tab-header-rtl",i._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",N]},features:[Le],ngContentSelectors:oa,decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(n,i){n&1&&(pe(),c(0,"div",5,0),w("click",function(){return i._handlePaginatorClick("before")})("mousedown",function(o){return i._handlePaginatorPress("before",o)})("touchend",function(){return i._stopInterval()}),ie(2,"div",6),l(),c(3,"div",7,1),w("keydown",function(o){return i._handleKeydown(o)}),c(5,"div",8,2),w("cdkObserveContent",function(){return i._onContentChanges()}),c(7,"div",9,3),U(9),l()()(),c(10,"div",10,4),w("mousedown",function(o){return i._handlePaginatorPress("after",o)})("click",function(){return i._handlePaginatorClick("after")})("touchend",function(){return i._stopInterval()}),ie(12,"div",6),l()),n&2&&(B("mat-mdc-tab-header-pagination-disabled",i._disableScrollBefore),D("matRippleDisabled",i._disableScrollBefore||i.disableRipple),p(3),B("_mat-animation-noopable",i._animationsDisabled),p(2),ne("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby||null),p(5),B("mat-mdc-tab-header-pagination-disabled",i._disableScrollAfter),D("matRippleDisabled",i._disableScrollAfter||i.disableRipple))},dependencies:[nn,Qa],styles:[`.mat-mdc-tab-header {
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
`],encapsulation:2})}return a})(),dl=new j("MAT_TABS_CONFIG"),$o=(()=>{class a extends an{_host=b(aa);_ngZone=b(de);_centeringSub=Pe.EMPTY;_leavingSub=Pe.EMPTY;constructor(){super()}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(ft(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=function(n){return new(n||a)};static \u0275dir=H({type:a,selectors:[["","matTabBodyHost",""]],features:[Le]})}return a})(),aa=(()=>{class a{_elementRef=b(ue);_dir=b(tn,{optional:!0});_ngZone=b(de);_injector=b(_t);_renderer=b(It);_diAnimationsDisabled=qe();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=Pe.EMPTY;_position;_previousPosition;_onCentering=new $;_beforeCentering=new $;_afterLeavingCenter=new $;_onCentered=new $(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=b(Ce);this._dirChangeSubscription=this._dir.change.subscribe(n=>{this._computePositionAnimationState(n),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Qt(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,n=i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),i.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",i=>{i.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",n),this._renderer.listen(e,"transitioncancel",n)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Qt(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=V({type:a,selectors:[["mat-tab-body"]],viewQuery:function(n,i){if(n&1&&ge($o,5)($c,5),n&2){let r;I(r=A())&&(i._portalHost=r.first),I(r=A())&&(i._contentElement=r.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(n,i){n&2&&ne("inert",i._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(n,i){n&1&&(c(0,"div",1,0),Wt(2,qc,0,0,"ng-template",2),l()),n&2&&B("mat-tab-body-content-left",i._position==="left")("mat-tab-body-content-right",i._position==="right")("mat-tab-body-content-can-animate",i._position==="center"||i._previousPosition==="center")},dependencies:[$o,ar],styles:[`.mat-mdc-tab-body {
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
`],encapsulation:2})}return a})(),Ko=(()=>{class a{_elementRef=b(ue);_changeDetectorRef=b(Ce);_ngZone=b(de);_tabsSubscription=Pe.EMPTY;_tabLabelSubscription=Pe.EMPTY;_tabBodySubscription=Pe.EMPTY;_diAnimationsDisabled=qe();_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new qt;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){let n=e+"";this._animationDuration=/^\d+$/.test(n)?e+"ms":n}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let n=this._elementRef.nativeElement.classList;n.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&n.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new $;focusChange=new $;animationDone=new $;selectedTabChange=new $(!0);_groupId;_isServer=!b(Zt).isBrowser;constructor(){let e=b(dl,{optional:!0});this._groupId=b(De).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let n=this._selectedIndex==null;if(!n){this.selectedTabChange.emit(this._createChangeEvent(e));let i=this._tabBodyWrapper.nativeElement;i.style.minHeight=i.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((i,r)=>i.isActive=r===e),n||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((n,i)=>{n.position=i-e,this._selectedIndex!=null&&n.position==0&&!n.origin&&(n.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let n=this._tabs.toArray(),i;for(let r=0;r<n.length;r++)if(n[r].isActive){this._indexToSelect=this._selectedIndex=r,this._lastFocusedTabIndex=null,i=n[r];break}!i&&n[e]&&Promise.resolve().then(()=>{n[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(ft(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(n=>n._closestTabGroup===this||!n._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let n=this._tabHeader;n&&(n.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let n=new ra;return n.index=e,this._tabs&&this._tabs.length&&(n.tab=this._tabs.toArray()[e]),n}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=et(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,n){return e.id||`${this._groupId}-label-${n}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let n=this._tabBodyWrapper.nativeElement;n.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(n.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,n,i){n.focusIndex=i,e.disabled||(this.selectedIndex=i)}_getTabIndex(e){let n=this._lastFocusedTabIndex??this.selectedIndex;return e===n?0:-1}_tabFocusChanged(e,n){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=n)}_bodyCentered(e){e&&this._tabBodies?.forEach((n,i)=>n._setActiveClass(i===this._selectedIndex))}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0"||this.animationDuration==="0ms"}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=V({type:a,selectors:[["mat-tab-group"]],contentQueries:function(n,i,r){if(n&1&&Ae(r,sa,5),n&2){let o;I(o=A())&&(i._allTabs=o)}},viewQuery:function(n,i){if(n&1&&ge(Qc,5)(Wc,5)(aa,5),n&2){let r;I(r=A())&&(i._tabBodyWrapper=r.first),I(r=A())&&(i._tabHeader=r.first),I(r=A())&&(i._tabBodies=r)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:11,hostBindings:function(n,i){n&2&&(ne("mat-align-tabs",i.alignTabs),Ne("mat-"+(i.color||"primary")),At("--mat-tab-animation-duration",i.animationDuration),B("mat-mdc-tab-group-dynamic-height",i.dynamicHeight)("mat-mdc-tab-group-inverted-header",i.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",i.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",N],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",N],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",N],selectedIndex:[2,"selectedIndex","selectedIndex",$e],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",$e],disablePagination:[2,"disablePagination","disablePagination",N],disableRipple:[2,"disableRipple","disableRipple",N],preserveContent:[2,"preserveContent","preserveContent",N],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[fe([{provide:Qo,useExisting:a}])],ngContentSelectors:oa,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(n,i){n&1&&(pe(),c(0,"mat-tab-header",3,0),w("indexFocused",function(o){return i._focusChanged(o)})("selectFocusedIndex",function(o){return i.selectedIndex=o}),Ue(2,Zc,8,17,"div",4,fi),l(),Y(4,Jc,1,0),c(5,"div",5,1),Ue(7,el,1,10,"mat-tab-body",6,fi),l()),n&2&&(D("selectedIndex",i.selectedIndex||0)("disableRipple",i.disableRipple)("disablePagination",i.disablePagination),Ia("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby),p(2),je(i._tabs),p(2),Z(i._isServer?4:-1),p(),B("_mat-animation-noopable",i._animationsDisabled()),p(2),je(i._tabs))},dependencies:[ll,Wo,$a,nn,an,aa],styles:[`.mdc-tab {
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
`],encapsulation:2})}return a})(),ra=class{index;tab};var Xo=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=te({type:a});static \u0275inj=J({imports:[be]})}return a})();var pl=["*",[["mat-toolbar-row"]]],hl=["*","mat-toolbar-row"],ul=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275dir=H({type:a,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return a})(),Yo=(()=>{class a{_elementRef=b(ue);_platform=b(Zt);_document=b(it);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(n){return new(n||a)};static \u0275cmp=V({type:a,selectors:[["mat-toolbar"]],contentQueries:function(n,i,r){if(n&1&&Ae(r,ul,5),n&2){let o;I(o=A())&&(i._toolbarRows=o)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(n,i){n&2&&(Ne(i.color?"mat-"+i.color:""),B("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",i._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:hl,decls:2,vars:0,template:function(n,i){n&1&&(pe(pl),U(0),U(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return a})();var Zo=(()=>{class a{static \u0275fac=function(n){return new(n||a)};static \u0275mod=te({type:a});static \u0275inj=J({imports:[be]})}return a})();var hn=(S=>(S.STANDALONE_COMPONENT="standalone-component",S.SMART_COMPONENT="smart-component",S.PRESENTATIONAL_COMPONENT="presentational-component",S.SIGNAL_COMPONENT="signal-component",S.LAYOUT_COMPONENT="layout-component",S.FEATURE_COMPONENT="feature-component",S.INJECTABLE_SERVICE="injectable-service",S.HTTP_SERVICE="http-service",S.FACADE_SERVICE="facade-service",S.REPOSITORY_SERVICE="repository-service",S.UTILITY_SERVICE="utility-service",S.ROUTE_NODE="route-node",S.CHILD_ROUTE="child-route",S.LAZY_LOADED_ROUTE="lazy-loaded-route",S.ROUTE_GUARD="route-guard",S.ROUTE_RESOLVER="route-resolver",S.ROUTER_OUTLET="router-outlet",S.SIGNAL="signal",S.COMPUTED_SIGNAL="computed-signal",S.LINKED_SIGNAL="linked-signal",S.SIGNAL_EFFECT="signal-effect",S.SIGNAL_RESOURCE="signal-resource",S.OBSERVABLE="observable",S.SUBJECT="subject",S.BEHAVIOR_SUBJECT="behavior-subject",S.REPLAY_SUBJECT="replay-subject",S.RXJS_OPERATOR="rxjs-operator",S.NGRX_STORE="ngrx-store",S.NGRX_ACTION="ngrx-action",S.NGRX_REDUCER="ngrx-reducer",S.NGRX_EFFECT="ngrx-effect",S.NGRX_SELECTOR="ngrx-selector",S.SIGNAL_STORE="signal-store",S.MATERIAL_TOOLBAR="material-toolbar",S.MATERIAL_SIDENAV="material-sidenav",S.MATERIAL_TABLE="material-table",S.MATERIAL_DIALOG="material-dialog",S.MATERIAL_CARD="material-card",S.MATERIAL_FORM_FIELD="material-form-field",S.MODULE="module",S.MICRO_FRONTEND="micro-frontend",S.CLEAN_ARCHITECTURE_LAYER="clean-architecture-layer",S.HEXAGONAL_ARCHITECTURE="hexagonal-architecture",S.REST_API="rest-api",S.GRAPHQL_API="graphql-api",S.DATABASE="database",S.DEVOPS_PIPELINE="devops-pipeline",S))(hn||{}),ca=(h=>(h.COMPONENTS="Components",h.SERVICES="Services",h.ROUTING="Routing",h.SIGNALS="Signals",h.RXJS="RxJS",h.STATE_MANAGEMENT="State Management",h.UI_KIT="UI Kit",h.ARCHITECTURE="Architecture",h.ECOSYSTEM="Ecosystem",h))(ca||{});function la(a){return a.startsWith("standalone")||a.startsWith("smart")||a.startsWith("presentational")||a.startsWith("signal-component")||a.startsWith("layout")||a.startsWith("feature")?"Components":a.includes("service")?"Services":a.includes("route")||a.includes("router")?"Routing":a.includes("signal")?"Signals":a.includes("subject")||a.includes("observable")||a.includes("rxjs")?"RxJS":a.includes("ngrx")||a.includes("store")?"State Management":a.includes("material")?"UI Kit":a.includes("architecture")||a.includes("module")||a.includes("micro")?"Architecture":"Ecosystem"}var Jo=[{type:"standalone-component",category:"Components",icon:"\u{1F4E6}",defaultName:"Standalone Component",description:"Composant autonome moderne",supportedShapes:["rectangle","text"]},{type:"smart-component",category:"Components",icon:"\u{1F9E0}",defaultName:"Smart Component",description:"Composant avec logique m\xE9tier",supportedShapes:["rectangle","text"]},{type:"presentational-component",category:"Components",icon:"\u{1F3A8}",defaultName:"Presentational Component",description:"Composant de pr\xE9sentation pure",supportedShapes:["rectangle","text"]},{type:"signal-component",category:"Signals",icon:"\u26A1",defaultName:"Signal Component",description:"Composant avec Signals",supportedShapes:["rectangle","text"]},{type:"injectable-service",category:"Services",icon:"\u{1F527}",defaultName:"Angular Service",description:"Service injectable",supportedShapes:["rectangle","text"]},{type:"http-service",category:"Services",icon:"\u{1F310}",defaultName:"HTTP Service",description:"Service HTTP avec HttpClient",supportedShapes:["rectangle","text"]},{type:"route-node",category:"Routing",icon:"\u{1F6E3}\uFE0F",defaultName:"Route Angular",description:"Route Angular standard",supportedShapes:["rectangle","text"]},{type:"route-guard",category:"Routing",icon:"\u{1F6E1}\uFE0F",defaultName:"Route Guard",description:"Protection de route",supportedShapes:["rectangle","text"]},{type:"signal",category:"Signals",icon:"\u26A1",defaultName:"Signal",description:"Signal Angular r\xE9actif",supportedShapes:["ellipse","text"]},{type:"subject",category:"RxJS",icon:"\u{1F4E2}",defaultName:"Subject RxJS",description:"Subject pour flux de donn\xE9es",supportedShapes:["rectangle","text"]},{type:"ngrx-store",category:"State Management",icon:"\u{1F3EA}",defaultName:"NgRx Store",description:"Store pour la gestion d'\xE9tat",supportedShapes:["rectangle","text"]},{type:"material-card",category:"UI Kit",icon:"\u{1F0CF}",defaultName:"Material Card",description:"Carte Material Design",supportedShapes:["rectangle","text"]},{type:"module",category:"Architecture",icon:"\u{1F4E6}",defaultName:"Angular Module",description:"Module Angular (NgModule)",supportedShapes:["rectangle","text"]},{type:"micro-frontend",category:"Architecture",icon:"\u{1F9E9}",defaultName:"Micro Frontend",description:"Architecture micro-frontend",supportedShapes:["rectangle","text"]},{type:"rest-api",category:"Ecosystem",icon:"\u{1F50C}",defaultName:"REST API",description:"API RESTful",supportedShapes:["rectangle","text"]},{type:"database",category:"Ecosystem",icon:"\u{1F5C3}\uFE0F",defaultName:"Database",description:"Base de donn\xE9es",supportedShapes:["rectangle","text"]},{type:"devops-pipeline",category:"Ecosystem",icon:"\u{1F680}",defaultName:"DevOps Pipeline",description:"Pipeline CI/CD",supportedShapes:["rectangle","text"]}];var es=[{id:"ecommerce",name:"E-commerce Architecture",description:"Architecture compl\xE8te pour application e-commerce avec panier, catalogue et paiement",icon:"\u{1F6D2}",category:"Business",components:["standalone-component","smart-component","injectable-service","ngrx-store","route-node"]},{id:"dashboard",name:"Dashboard Analytics",description:"Architecture pour tableau de bord avec visualisation de donn\xE9es en temps r\xE9el",icon:"\u{1F4CA}",category:"Analytics",components:["standalone-component","signal-component","route-node","injectable-service","signal"]},{id:"micro-frontend",name:"Micro-Frontend",description:"Architecture micro-frontend avec Module Federation",icon:"\u{1F9E9}",category:"Enterprise",components:["standalone-component","injectable-service","route-node","micro-frontend"]},{id:"reactive-forms",name:"Reactive Forms",description:"Architecture pour formulaires r\xE9actifs complexes",icon:"\u{1F4DD}",category:"Forms",components:["standalone-component","injectable-service","subject"]},{id:"real-time",name:"Real-Time Application",description:"Architecture temps r\xE9el avec WebSocket et RxJS",icon:"\u26A1",category:"Real-Time",components:["signal-component","subject","injectable-service","signal"]}];var Ht=class a{constructor(t){this.http=t;console.log("=== LanguageService initialis\xE9 ===");let e=localStorage.getItem("language");this.loadTranslations(e||"en")}http;_currentLanguage=me("en");_translations=me({});currentLanguage=this._currentLanguage.asReadonly();translations=this._translations.asReadonly();loadTranslations(t){console.log(`\u{1F30D} Chargement des traductions: ${t}`),this.http.get(`assets/i18n/${t}.json`).subscribe({next:e=>{this._translations.set(e),this._currentLanguage.set(t),localStorage.setItem("language",t),console.log(`\u2705 Traductions charg\xE9es: ${t}`)},error:e=>{console.error("\u274C Erreur de chargement:",e),t!=="en"&&this.loadTranslations("en")}})}setLanguage(t){this.loadTranslations(t)}toggleLanguage(){let t=this._currentLanguage()==="en"?"fr":"en";this.setLanguage(t)}translate(t){let e=this._translations(),n=t.split("."),i=e;for(let r of n)if(i&&typeof i=="object"&&r in i)i=i[r];else return t;return typeof i=="string"?i:t}translateWithParams(t,e){let n=this.translate(t);return Object.keys(e).forEach(i=>{n=n.replace(`{{${i}}}`,e[i])}),n}static \u0275fac=function(e){return new(e||a)(ke(Ba))};static \u0275prov=K({token:a,factory:a.\u0275fac,providedIn:"root"})};var dt=class a{constructor(t){this.languageService=t}languageService;transform(t){return this.languageService.translate(t)}static \u0275fac=function(e){return new(e||a)(ee(Ht,16))};static \u0275pipe=vn({name:"t",type:a,pure:!1})};var ei=class a{static \u0275fac=function(e){return new(e||a)};static \u0275cmp=V({type:a,selectors:[["app-docs"]],decls:262,vars:165,consts:[[1,"docs-container"],[1,"docs-header"],["expanded",""],[1,"doc-content"],[1,"shortcuts-table"]],template:function(e,n){e&1&&(c(0,"div",0)(1,"div",1)(2,"h1"),m(3),u(4,"t"),l(),c(5,"p"),m(6),u(7,"t"),l()(),c(8,"mat-accordion")(9,"mat-expansion-panel",2)(10,"mat-expansion-panel-header")(11,"mat-panel-title")(12,"mat-icon"),m(13,"info"),l(),m(14),u(15,"t"),l()(),c(16,"div",3)(17,"h3"),m(18),u(19,"t"),l(),c(20,"p"),m(21),u(22,"t"),l(),c(23,"h4"),m(24),u(25,"t"),l(),c(26,"ul")(27,"li"),m(28),u(29,"t"),l(),c(30,"li"),m(31),u(32,"t"),l(),c(33,"li"),m(34),u(35,"t"),l(),c(36,"li"),m(37),u(38,"t"),l(),c(39,"li"),m(40),u(41,"t"),l(),c(42,"li"),m(43),u(44,"t"),l(),c(45,"li"),m(46),u(47,"t"),l()()()(),c(48,"mat-expansion-panel")(49,"mat-expansion-panel-header")(50,"mat-panel-title")(51,"mat-icon"),m(52,"build"),l(),m(53),u(54,"t"),l()(),c(55,"div",3)(56,"h4"),m(57),u(58,"t"),l(),c(59,"ol")(60,"li"),m(61),u(62,"t"),l(),c(63,"li"),m(64),u(65,"t"),l(),c(66,"li"),m(67),u(68,"t"),l(),c(69,"li"),m(70),u(71,"t"),l(),c(72,"li"),m(73),u(74,"t"),l()(),c(75,"h4"),m(76),u(77,"t"),l(),c(78,"ul")(79,"li"),m(80),u(81,"t"),l(),c(82,"li"),m(83),u(84,"t"),l(),c(85,"li"),m(86),u(87,"t"),l(),c(88,"li"),m(89),u(90,"t"),l()()()(),c(91,"mat-expansion-panel")(92,"mat-expansion-panel-header")(93,"mat-panel-title")(94,"mat-icon"),m(95,"keyboard"),l(),m(96),u(97,"t"),l()(),c(98,"div",3)(99,"table",4)(100,"tr")(101,"th"),m(102,"Raccourci"),l(),c(103,"th"),m(104,"Action"),l()(),c(105,"tr")(106,"td")(107,"kbd"),m(108,"Ctrl"),l(),m(109," + "),c(110,"kbd"),m(111,"G"),l()(),c(112,"td"),m(113),u(114,"t"),l()(),c(115,"tr")(116,"td")(117,"kbd"),m(118,"Ctrl"),l(),m(119," + "),c(120,"kbd"),m(121,"E"),l()(),c(122,"td"),m(123),u(124,"t"),l()(),c(125,"tr")(126,"td")(127,"kbd"),m(128,"Ctrl"),l(),m(129," + "),c(130,"kbd"),m(131,"S"),l()(),c(132,"td"),m(133),u(134,"t"),l()(),c(135,"tr")(136,"td")(137,"kbd"),m(138,"Ctrl"),l(),m(139," + "),c(140,"kbd"),m(141,"P"),l()(),c(142,"td"),m(143),u(144,"t"),l()(),c(145,"tr")(146,"td")(147,"kbd"),m(148,"Ctrl"),l(),m(149," + "),c(150,"kbd"),m(151,"Shift"),l(),m(152," + "),c(153,"kbd"),m(154,"S"),l()(),c(155,"td"),m(156),u(157,"t"),l()(),c(158,"tr")(159,"td")(160,"kbd"),m(161,"Ctrl"),l(),m(162," + "),c(163,"kbd"),m(164,"Shift"),l(),m(165," + "),c(166,"kbd"),m(167,"C"),l()(),c(168,"td"),m(169),u(170,"t"),l()(),c(171,"tr")(172,"td")(173,"kbd"),m(174,"F1"),l()(),c(175,"td"),m(176),u(177,"t"),l()()()()(),c(178,"mat-expansion-panel")(179,"mat-expansion-panel-header")(180,"mat-panel-title")(181,"mat-icon"),m(182,"code"),l(),m(183),u(184,"t"),l()(),c(185,"div",3)(186,"h4"),m(187),u(188,"t"),l(),c(189,"p"),m(190),u(191,"t"),l(),c(192,"h5"),m(193),u(194,"t"),l(),c(195,"ul")(196,"li")(197,"code"),m(198),u(199,"t"),l()(),c(200,"li")(201,"code"),m(202),u(203,"t"),l()(),c(204,"li")(205,"code"),m(206),u(207,"t"),l()(),c(208,"li")(209,"code"),m(210),u(211,"t"),l()(),c(212,"li")(213,"code"),m(214),u(215,"t"),l()(),c(216,"li")(217,"code"),m(218),u(219,"t"),l()(),c(220,"li")(221,"code"),m(222),u(223,"t"),l()()(),c(224,"h4"),m(225),u(226,"t"),l(),c(227,"p"),m(228),u(229,"t"),l(),c(230,"h4"),m(231),u(232,"t"),l(),c(233,"p"),m(234),u(235,"t"),l()()(),c(236,"mat-expansion-panel")(237,"mat-expansion-panel-header")(238,"mat-panel-title")(239,"mat-icon"),m(240,"warning"),l(),m(241),u(242,"t"),l()(),c(243,"div",3)(244,"h4"),m(245),u(246,"t"),l(),c(247,"p"),m(248),u(249,"t"),l(),c(250,"h4"),m(251),u(252,"t"),l(),c(253,"p"),m(254),u(255,"t"),l(),c(256,"h4"),m(257),u(258,"t"),l(),c(259,"p"),m(260),u(261,"t"),l()()()()()),e&2&&(p(3),_(g(4,55,"DOCS.TITLE")),p(3),_(g(7,57,"DOCS.SUBTITLE")),p(8),O(" ",g(15,59,"DOCS.INTRODUCTION.TITLE")," "),p(4),_(g(19,61,"DOCS.INTRODUCTION.WELCOME")),p(3),_(g(22,63,"DOCS.INTRODUCTION.DESCRIPTION")),p(3),_(g(25,65,"DOCS.INTRODUCTION.FEATURES_TITLE")),p(4),O("\u2705 ",g(29,67,"DOCS.INTRODUCTION.FEATURE_1")),p(3),O("\u2705 ",g(32,69,"DOCS.INTRODUCTION.FEATURE_2")),p(3),O("\u2705 ",g(35,71,"DOCS.INTRODUCTION.FEATURE_3")),p(3),O("\u2705 ",g(38,73,"DOCS.INTRODUCTION.FEATURE_4")),p(3),O("\u2705 ",g(41,75,"DOCS.INTRODUCTION.FEATURE_5")),p(3),O("\u2705 ",g(44,77,"DOCS.INTRODUCTION.FEATURE_6")),p(3),O("\u2705 ",g(47,79,"DOCS.INTRODUCTION.FEATURE_7")),p(7),O(" ",g(54,81,"DOCS.QUICK_START.TITLE")," "),p(4),O("\u{1F680} ",g(58,83,"DOCS.QUICK_START.TITLE")),p(4),_(g(62,85,"DOCS.QUICK_START.STEP_1")),p(3),_(g(65,87,"DOCS.QUICK_START.STEP_2")),p(3),_(g(68,89,"DOCS.QUICK_START.STEP_3")),p(3),_(g(71,91,"DOCS.QUICK_START.STEP_4")),p(3),_(g(74,93,"DOCS.QUICK_START.STEP_5")),p(3),O("\u{1F3A8} ",g(77,95,"DOCS.QUICK_START.CUSTOMIZATION_TITLE")),p(4),_(g(81,97,"DOCS.QUICK_START.CUSTOMIZATION_1")),p(3),_(g(84,99,"DOCS.QUICK_START.CUSTOMIZATION_2")),p(3),_(g(87,101,"DOCS.QUICK_START.CUSTOMIZATION_3")),p(3),_(g(90,103,"DOCS.QUICK_START.CUSTOMIZATION_4")),p(7),O(" ",g(97,105,"DOCS.SHORTCUTS.TITLE")," "),p(17),_(g(114,107,"DOCS.SHORTCUTS.GENERATE")),p(10),_(g(124,109,"DOCS.SHORTCUTS.EXPORT")),p(10),_(g(134,111,"DOCS.SHORTCUTS.SAVE")),p(10),_(g(144,113,"DOCS.SHORTCUTS.EXPORT_PDF")),p(13),_(g(157,115,"DOCS.SHORTCUTS.EXPORT_SVG")),p(13),_(g(170,117,"DOCS.SHORTCUTS.COPY_LINK")),p(7),_(g(177,119,"DOCS.SHORTCUTS.OPEN_DOCS")),p(7),O(" ",g(184,121,"DOCS.API_REFERENCE.TITLE")," "),p(4),_(g(188,123,"DOCS.API_REFERENCE.LIBRARY_SERVICE")),p(3),_(g(191,125,"DOCS.API_REFERENCE.LIBRARY_SERVICE_DESC")),p(3),_(g(194,127,"DOCS.API_REFERENCE.METHODS_TITLE")),p(5),_(g(199,129,"DOCS.API_REFERENCE.METHOD_1")),p(4),_(g(203,131,"DOCS.API_REFERENCE.METHOD_2")),p(4),_(g(207,133,"DOCS.API_REFERENCE.METHOD_3")),p(4),_(g(211,135,"DOCS.API_REFERENCE.METHOD_4")),p(4),_(g(215,137,"DOCS.API_REFERENCE.METHOD_5")),p(4),_(g(219,139,"DOCS.API_REFERENCE.METHOD_6")),p(4),_(g(223,141,"DOCS.API_REFERENCE.METHOD_7")),p(3),_(g(226,143,"DOCS.API_REFERENCE.CANVAS_SERVICE")),p(3),_(g(229,145,"DOCS.API_REFERENCE.CANVAS_SERVICE_DESC")),p(3),_(g(232,147,"DOCS.API_REFERENCE.FILE_SERVICE")),p(3),_(g(235,149,"DOCS.API_REFERENCE.FILE_SERVICE_DESC")),p(7),O(" ",g(242,151,"DOCS.TROUBLESHOOTING.TITLE")," "),p(4),_(g(246,153,"DOCS.TROUBLESHOOTING.PROBLEM_1_TITLE")),p(3),_(g(249,155,"DOCS.TROUBLESHOOTING.PROBLEM_1_SOLUTION")),p(3),_(g(252,157,"DOCS.TROUBLESHOOTING.PROBLEM_2_TITLE")),p(3),_(g(255,159,"DOCS.TROUBLESHOOTING.PROBLEM_2_SOLUTION")),p(3),_(g(258,161,"DOCS.TROUBLESHOOTING.PROBLEM_3_TITLE")),p(3),_(g(261,163,"DOCS.TROUBLESHOOTING.PROBLEM_3_SOLUTION")))},dependencies:[ot,Gt,Jn,Vo,ea,ta,Go,ct,st,Ot,dt],styles:[".docs-container[_ngcontent-%COMP%]{padding:24px;max-width:900px;margin:0 auto}.docs-header[_ngcontent-%COMP%]{text-align:center;margin-bottom:32px}.docs-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem;color:#1976d2}.docs-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#666}.doc-content[_ngcontent-%COMP%]{padding:16px}.doc-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .doc-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .doc-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-top:16px;color:#333}.doc-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .doc-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:24px}.doc-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:8px 0}.doc-content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f5f5f5;padding:2px 6px;border-radius:4px;font-family:monospace}.doc-content[_ngcontent-%COMP%]   kbd[_ngcontent-%COMP%]{background:#f5f5f5;border:1px solid #ddd;border-radius:4px;padding:2px 6px;font-size:.9em}.shortcuts-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.shortcuts-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .shortcuts-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:8px;text-align:left;border-bottom:1px solid #eee}.shortcuts-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#f5f5f5}"]})};var X={components:{primary:"#DD0031",dark:"#C3002F",light:"#FFF5F5",border:"#DD0031",text:"#0F0F11"},services:{primary:"#43A047",dark:"#2E7D32",light:"#E8F5E9",border:"#43A047",text:"#1B5E20"},signals:{primary:"#7C4DFF",dark:"#5E35B1",light:"#F3E5F5",border:"#7C4DFF",text:"#4A148C"},rxjs:{primary:"#E91E63",dark:"#C2185B",light:"#FCE4EC",border:"#E91E63",text:"#880E4F"},routing:{primary:"#2196F3",dark:"#1565C0",light:"#E3F2FD",border:"#2196F3",text:"#0D47A1"},architecture:{primary:"#FB8C00",dark:"#E65100",light:"#FFF3E0",border:"#FB8C00",text:"#E65100"}};var Ut=class a{_currentLibrary=me(null);_selectedCategory=me("all");_isGenerating=me(!1);_elementCounter=me(0);currentLibrary=this._currentLibrary.asReadonly();selectedCategory=this._selectedCategory.asReadonly();isGenerating=this._isGenerating.asReadonly();totalElements=yn(()=>{let t=this._currentLibrary();return t?t.libraryItems.length:0});categories=yn(()=>{let t=this._currentLibrary();if(!t)return[];let e=new Set(t.libraryItems.map(n=>n.id.split("-")[0]||"other"));return Array.from(e)});constructor(){}createElement(t,e,n,i={}){let r=this._elementCounter();return this._elementCounter.set(r+1),le({id:`element-${r}-${Date.now()}`,type:t,x:e,y:n,width:i.width||100,height:i.height||50,angle:0,strokeColor:i.strokeColor||"#000000",backgroundColor:i.backgroundColor||"transparent",fillStyle:i.fillStyle||"solid",strokeWidth:i.strokeWidth||2,strokeStyle:i.strokeStyle||"solid",roughness:i.roughness||1,opacity:i.opacity||100,groupIds:i.groupIds||[],roundness:i.roundness||null,boundElements:i.boundElements||null,updated:Date.now(),link:i.link||null,locked:i.locked||!1},i)}createRectangle(t,e,n,i,r,o={}){let s=X[r];return this.createElement("rectangle",t,e,le({width:n,height:i,strokeColor:s.primary,backgroundColor:s.light,fillStyle:"solid",strokeWidth:2,roughness:1,roundness:{type:3,value:8}},o))}createText(t,e,n,i={}){let r=i.fontSize||20,o=n.length*r*.6;return this.createElement("text",t,e,le({width:i.width||o,height:i.height||r*1.5,text:n,fontSize:r,fontFamily:i.fontFamily||1,textAlign:i.textAlign||"left",verticalAlign:i.verticalAlign||"top",strokeColor:i.strokeColor||"#000000",backgroundColor:"transparent",fillStyle:"solid",strokeWidth:2,roughness:1,opacity:100},i))}createGroup(t,e){let n=`group-${t.toLowerCase().replace(/\s+/g,"-")}`,i=e.map(r=>Je(le({},r),{groupIds:[n]}));return{name:t,elements:i,boundElements:null}}generateStandaloneComponent(){let t=[];return t.push(this.createRectangle(0,0,250,180,"components")),t.push(this.createText(20,10,"Standalone Component",{fontSize:20,strokeColor:X.components.dark})),t.push(this.createText(200,10,"\u{1F4E6}",{fontSize:24})),t.push(this.createRectangle(20,50,210,30,"components",{backgroundColor:"#E8F5E9",strokeColor:"#4CAF50",roundness:{type:3,value:4},strokeWidth:1})),t.push(this.createText(30,55,"standalone: true",{fontSize:14,strokeColor:"#2E7D32"})),[{label:"template.html",y:90},{label:"styles.scss",y:115},{label:"component.ts",y:140}].forEach(o=>{t.push(this.createText(20,o.y,o.label,{fontSize:12,strokeColor:"#555555"}))}),this.createGroup("Standalone Component",t)}generateSignalComponent(){let t=[];return t.push(this.createRectangle(0,0,250,150,"signals")),t.push(this.createText(20,10,"Signal Component",{fontSize:20,strokeColor:X.signals.dark})),t.push(this.createText(200,10,"\u26A1",{fontSize:24})),[{name:"count: signal<number>",y:50},{name:"user: signal<User>",y:75},{name:"loading: signal<boolean>",y:100}].forEach(o=>{t.push(this.createText(20,o.y,o.name,{fontSize:14,strokeColor:X.signals.dark}))}),this.createGroup("Signal Component",t)}generateSmartComponent(){let t=[];return t.push(this.createRectangle(0,0,250,150,"components",{strokeWidth:3,backgroundColor:"#FFF0F0"})),t.push(this.createText(20,10,"Smart Component",{fontSize:20,strokeColor:X.components.dark})),t.push(this.createText(200,10,"\u{1F9E0}",{fontSize:24})),t.push(this.createText(20,50,"@Input() data",{fontSize:14,strokeColor:"#1565C0"})),t.push(this.createText(20,80,"UserService",{fontSize:14,strokeColor:"#2E7D32"})),this.createGroup("Smart Component",t)}generatePresentationalComponent(){let t=[];return t.push(this.createRectangle(0,0,250,150,"components",{strokeColor:"#78909C",backgroundColor:"#FAFAFA",strokeStyle:"dashed"})),t.push(this.createText(20,10,"Presentational",{fontSize:20,strokeColor:"#546E7A"})),t.push(this.createText(200,10,"\u{1F3A8}",{fontSize:24})),t.push(this.createText(20,50,"Pure UI Component",{fontSize:16,strokeColor:"#78909C"})),t.push(this.createText(20,80,"@Input() data",{fontSize:14,strokeColor:"#546E7A"})),this.createGroup("Presentational Component",t)}generateService(){let t=[];return t.push(this.createRectangle(0,0,200,100,"services")),t.push(this.createText(20,10,"Angular Service",{fontSize:18,strokeColor:X.services.dark})),t.push(this.createText(155,10,"\u{1F527}",{fontSize:20})),t.push(this.createRectangle(20,50,160,25,"services",{backgroundColor:"#E8F5E9",strokeColor:"#4CAF50",roundness:{type:3,value:4},strokeWidth:1})),t.push(this.createText(30,53,"@Injectable()",{fontSize:12,strokeColor:"#2E7D32"})),this.createGroup("Angular Service",t)}generateLibrary(){this._isGenerating.set(!0);try{let e={type:"excalidrawlib",version:2,source:"https://github.com/votre-repo/angular-architecture-kit",libraryItems:[{id:"components-standalone",status:"published",elements:this.generateStandaloneComponent().elements,created:Date.now()},{id:"components-smart",status:"published",elements:this.generateSmartComponent().elements,created:Date.now()},{id:"components-presentational",status:"published",elements:this.generatePresentationalComponent().elements,created:Date.now()},{id:"signals-component",status:"published",elements:this.generateSignalComponent().elements,created:Date.now()},{id:"services-injectable",status:"published",elements:this.generateService().elements,created:Date.now()}]};return this._currentLibrary.set(e),console.log("\u2705 Biblioth\xE8que g\xE9n\xE9r\xE9e avec succ\xE8s"),e}catch(t){throw console.error("\u274C Erreur lors de la g\xE9n\xE9ration:",t),t}finally{this._isGenerating.set(!1)}}generateFullLibrary(){this._isGenerating.set(!0);try{let t=[];Object.values(ca).forEach(n=>{try{this.generateByCategory(n).forEach(r=>{t.push({id:`${n.toLowerCase()}-${r.name.toLowerCase().replace(/\s+/g,"-")}`,status:"published",elements:r.elements,created:Date.now()})})}catch(i){console.warn(`Impossible de g\xE9n\xE9rer la cat\xE9gorie ${n}:`,i)}});let e={type:"excalidrawlib",version:2,source:"https://github.com/votre-repo/angular-architecture-kit",libraryItems:t};return this._currentLibrary.set(e),console.log(`\u2705 Biblioth\xE8que compl\xE8te g\xE9n\xE9r\xE9e: ${t.length} \xE9l\xE9ments`),e}catch(t){throw console.error("\u274C Erreur lors de la g\xE9n\xE9ration compl\xE8te:",t),t}finally{this._isGenerating.set(!1)}}generateArchitectureTemplate(t){this._isGenerating.set(!0);try{let n={ecommerce:()=>[this.generateStandaloneComponent(),this.generateSmartComponent(),this.generateService()],dashboard:()=>[this.generateStandaloneComponent(),this.generateSignalComponent(),this.generateService()],"micro-frontend":()=>[this.generateStandaloneComponent(),this.generateService()],"reactive-forms":()=>[this.generateStandaloneComponent(),this.generateService()],"real-time":()=>[this.generateSignalComponent(),this.generateService()]}[t];if(!n)throw new Error(`Template inconnu: ${t}`);let r=n().map((s,d)=>({id:`${t}-${d}-${s.name.toLowerCase().replace(/\s+/g,"-")}`,status:"published",elements:s.elements,created:Date.now()})),o={type:"excalidrawlib",version:2,source:"https://github.com/votre-repo/angular-architecture-kit",libraryItems:r};return this._currentLibrary.set(o),console.log(`\u2705 Template "${t}" g\xE9n\xE9r\xE9 avec ${r.length} \xE9l\xE9ments`),o}catch(e){throw console.error("\u274C Erreur lors de la g\xE9n\xE9ration du template:",e),e}finally{this._isGenerating.set(!1)}}generateComponentByType(t){switch(t){case"standalone-component":return this.generateStandaloneComponent();case"smart-component":return this.generateSmartComponent();case"presentational-component":return this.generatePresentationalComponent();case"signal-component":return this.generateSignalComponent();case"layout-component":return this.generateLayoutComponent();case"feature-component":return this.generateFeatureComponent();case"injectable-service":return this.generateService();case"http-service":return this.generateHttpService();case"facade-service":return this.generateFacadeService();case"repository-service":return this.generateRepositoryService();case"utility-service":return this.generateService();case"route-node":return this.generateRoute();case"child-route":return this.generateRoute();case"lazy-loaded-route":return this.generateRoute();case"route-guard":return this.generateRouteGuard();case"route-resolver":return this.generateRouteGuard();case"router-outlet":return this.generateRoute();case"signal":return this.generateSignal();case"computed-signal":return this.generateSignal();case"linked-signal":return this.generateSignal();case"signal-effect":return this.generateSignal();case"signal-resource":return this.generateSignal();case"observable":return this.generateObservable();case"subject":return this.generateSubject();case"behavior-subject":return this.generateBehaviorSubject();case"replay-subject":return this.generateBehaviorSubject();case"rxjs-operator":return this.generateSubject();case"ngrx-store":return this.generateNgRxStore();case"ngrx-action":return this.generateNgRxStore();case"ngrx-reducer":return this.generateNgRxStore();case"ngrx-effect":return this.generateNgRxStore();case"ngrx-selector":return this.generateNgRxStore();case"signal-store":return this.generateNgRxStore();case"material-toolbar":return this.generateMaterialToolbar();case"material-sidenav":return this.generateMaterialToolbar();case"material-table":return this.generateMaterialCard();case"material-dialog":return this.generateMaterialCard();case"material-card":return this.generateMaterialCard();case"material-form-field":return this.generateMaterialCard();case"module":return this.generateModule();case"micro-frontend":return this.generateMicroFrontend();case"clean-architecture-layer":return this.generateModule();case"hexagonal-architecture":return this.generateModule();case"rest-api":return this.generateRestApi();case"graphql-api":return this.generateRestApi();case"database":return this.generateDatabase();case"devops-pipeline":return this.generateDevOpsPipeline();default:return console.warn(`Type non sp\xE9cifiquement impl\xE9ment\xE9, utilisation du g\xE9n\xE9rateur par d\xE9faut: ${t}`),this.generateStandaloneComponent()}}generateByCategory(t){let e=[];return Object.values(hn).filter(i=>la(i)===t).forEach(i=>{try{e.push(this.generateComponentByType(i))}catch(r){console.warn(`Impossible de g\xE9n\xE9rer ${i}:`,r)}}),e}filterByCategory(t){this._selectedCategory.set(t)}exportLibrary(){let t=this._currentLibrary();if(!t)return console.warn("\u26A0\uFE0F Aucune biblioth\xE8que \xE0 exporter"),"";try{return JSON.stringify(t,null,2)}catch(e){return console.error("\u274C Erreur lors de l'export:",e),""}}downloadLibrary(t){let e=this.exportLibrary();if(e)try{let n=new Blob([e],{type:"application/json"}),i=window.URL.createObjectURL(n),r=document.createElement("a");r.href=i,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(i),console.log("\u2705 Biblioth\xE8que t\xE9l\xE9charg\xE9e:",t)}catch(n){console.error("\u274C Erreur lors du t\xE9l\xE9chargement:",n)}}addComponentToLibrary(t){let e=this._currentLibrary();try{let n=this.generateComponentByType(t),i={id:`${la(t).toLowerCase()}-${n.name.toLowerCase().replace(/\s+/g,"-")}-${Date.now()}`,status:"published",elements:n.elements,created:Date.now()};if(e){let r=Je(le({},e),{libraryItems:[...e.libraryItems,i]});this._currentLibrary.set(r),console.log(`\u2705 Composant ajout\xE9 \xE0 la biblioth\xE8que: ${n.name}`)}else{let r={type:"excalidrawlib",version:2,source:"https://github.com/votre-repo/angular-architecture-kit",libraryItems:[i]};this._currentLibrary.set(r),console.log(`\u2705 Nouvelle biblioth\xE8que cr\xE9\xE9e avec: ${n.name}`)}}catch(n){throw console.error("\u274C Erreur lors de l'ajout du composant:",n),n}}removeComponentFromLibrary(t){let e=this._currentLibrary();if(!e)return;let n=e.libraryItems.filter(r=>r.id!==t),i=Je(le({},e),{libraryItems:n});this._currentLibrary.set(i),console.log(`\u{1F5D1}\uFE0F Composant supprim\xE9: ${t}`)}generateLayoutComponent(){let t=[];return t.push(this.createRectangle(0,0,250,180,"components")),t.push(this.createText(20,10,"Layout Component",{fontSize:20,strokeColor:X.components.dark})),t.push(this.createText(200,10,"\u{1F4D0}",{fontSize:24})),[{label:"Header",y:50},{label:"Sidebar",y:75},{label:"Content",y:100},{label:"Footer",y:125}].forEach(o=>{t.push(this.createText(20,o.y,o.label,{fontSize:14,strokeColor:"#555555"}))}),this.createGroup("Layout Component",t)}generateFeatureComponent(){let t=[];return t.push(this.createRectangle(0,0,250,120,"components")),t.push(this.createText(20,10,"Feature Component",{fontSize:20,strokeColor:X.components.dark})),t.push(this.createText(200,10,"\u{1F4C1}",{fontSize:24})),t.push(this.createText(20,50,"Feature Module",{fontSize:14,strokeColor:"#555555"})),this.createGroup("Feature Component",t)}generateHttpService(){let t=[];return t.push(this.createRectangle(0,0,200,100,"services")),t.push(this.createText(20,10,"HTTP Service",{fontSize:18,strokeColor:X.services.dark})),t.push(this.createText(155,10,"\u{1F310}",{fontSize:20})),t.push(this.createText(20,50,"HttpClient",{fontSize:14,strokeColor:"#1565C0"})),this.createGroup("HTTP Service",t)}generateFacadeService(){let t=[];return t.push(this.createRectangle(0,0,200,100,"services")),t.push(this.createText(20,10,"Facade Service",{fontSize:18,strokeColor:X.services.dark})),t.push(this.createText(155,10,"\u{1F3D7}\uFE0F",{fontSize:20})),t.push(this.createText(20,50,"Facade Pattern",{fontSize:14,strokeColor:"#555555"})),this.createGroup("Facade Service",t)}generateRepositoryService(){let t=[];return t.push(this.createRectangle(0,0,200,100,"services")),t.push(this.createText(20,10,"Repository",{fontSize:18,strokeColor:X.services.dark})),t.push(this.createText(155,10,"\u{1F5C4}\uFE0F",{fontSize:20})),t.push(this.createText(20,50,"Data Access",{fontSize:14,strokeColor:"#555555"})),this.createGroup("Repository Service",t)}generateRoute(){let t=[];return t.push(this.createRectangle(0,0,200,80,"routing")),t.push(this.createText(20,10,"Route",{fontSize:18,strokeColor:X.routing.dark})),t.push(this.createText(155,10,"\u{1F6E3}\uFE0F",{fontSize:20})),t.push(this.createText(20,45,"/dashboard",{fontSize:14,strokeColor:"#1565C0"})),this.createGroup("Route Angular",t)}generateRouteGuard(){let t=[];return t.push(this.createRectangle(0,0,200,80,"routing")),t.push(this.createText(20,10,"Route Guard",{fontSize:18,strokeColor:X.routing.dark})),t.push(this.createText(155,10,"\u{1F6E1}\uFE0F",{fontSize:20})),t.push(this.createText(20,45,"CanActivate",{fontSize:14,strokeColor:"#E65100"})),this.createGroup("Route Guard",t)}generateSignal(){let t=[];return t.push(this.createElement("ellipse",0,0,{width:150,height:60,strokeColor:X.signals.primary,backgroundColor:X.signals.light,fillStyle:"solid",strokeWidth:2})),t.push(this.createText(150/2-20,60/2-15,"\u26A1",{fontSize:20})),t.push(this.createText(150/2-30,60/2+5,"signal()",{fontSize:12,strokeColor:X.signals.dark})),this.createGroup("Signal",t)}generateSubject(){let t=[];return t.push(this.createRectangle(0,0,120,40,"rxjs",{roundness:{type:3,value:12}})),t.push(this.createText(10,10,"Subject",{fontSize:14,strokeColor:X.rxjs.dark})),this.createGroup("RxJS Subject",t)}generateObservable(){let t=[];return t.push(this.createRectangle(0,0,120,40,"rxjs",{roundness:{type:3,value:12}})),t.push(this.createText(10,10,"Observable",{fontSize:14,strokeColor:X.rxjs.dark})),this.createGroup("RxJS Observable",t)}generateBehaviorSubject(){let t=[];return t.push(this.createRectangle(0,0,150,40,"rxjs",{roundness:{type:3,value:12}})),t.push(this.createText(10,10,"BehaviorSubject",{fontSize:12,strokeColor:X.rxjs.dark})),this.createGroup("BehaviorSubject",t)}generateNgRxStore(){let t=[];return t.push(this.createRectangle(0,0,250,150,"architecture",{backgroundColor:"#FFF3E0"})),t.push(this.createText(20,10,"NgRx Store",{fontSize:20,strokeColor:X.architecture.dark})),t.push(this.createText(200,10,"\u{1F3EA}",{fontSize:24})),[{label:"Actions",y:50},{label:"Reducers",y:75},{label:"Effects",y:100},{label:"Selectors",y:125}].forEach(o=>{t.push(this.createText(20,o.y,o.label,{fontSize:14,strokeColor:"#E65100"}))}),this.createGroup("NgRx Store",t)}generateModule(){let t=[];return t.push(this.createRectangle(0,0,200,100,"architecture")),t.push(this.createText(20,10,"Angular Module",{fontSize:18,strokeColor:X.architecture.dark})),t.push(this.createText(155,10,"\u{1F4E6}",{fontSize:20})),t.push(this.createText(20,50,"@NgModule()",{fontSize:14,strokeColor:"#E65100"})),this.createGroup("Angular Module",t)}generateMicroFrontend(){let t=[];return t.push(this.createRectangle(0,0,200,100,"architecture",{strokeStyle:"dashed"})),t.push(this.createText(20,10,"Micro Frontend",{fontSize:18,strokeColor:X.architecture.dark})),t.push(this.createText(155,10,"\u{1F9E9}",{fontSize:20})),t.push(this.createText(20,50,"Module Federation",{fontSize:14,strokeColor:"#E65100"})),this.createGroup("Micro Frontend",t)}generateRestApi(){let t=[];return t.push(this.createRectangle(0,0,150,60,"architecture")),t.push(this.createText(10,10,"REST API",{fontSize:14,strokeColor:"#E65100"})),t.push(this.createText(110,10,"\u{1F50C}",{fontSize:16})),this.createGroup("REST API",t)}generateDatabase(){let t=[];return t.push(this.createRectangle(0,0,150,60,"architecture")),t.push(this.createText(10,10,"Database",{fontSize:14,strokeColor:"#E65100"})),t.push(this.createText(110,10,"\u{1F5C3}\uFE0F",{fontSize:16})),this.createGroup("Database",t)}generateDevOpsPipeline(){let t=[];return t.push(this.createRectangle(0,0,250,100,"architecture",{backgroundColor:"#E3F2FD"})),t.push(this.createText(20,10,"DevOps Pipeline",{fontSize:18,strokeColor:"#1565C0"})),t.push(this.createText(200,10,"\u{1F680}",{fontSize:24})),[{label:"Build \u2192 Test \u2192 Deploy",y:50},{label:"CI/CD",y:75}].forEach(o=>{t.push(this.createText(20,o.y,o.label,{fontSize:14,strokeColor:"#1565C0"}))}),this.createGroup("DevOps Pipeline",t)}generateMaterialToolbar(){let t=[];return t.push(this.createRectangle(0,0,250,60,"architecture",{backgroundColor:"#F5F5F5"})),t.push(this.createText(20,15,"Toolbar",{fontSize:18,strokeColor:"#424242"})),t.push(this.createText(200,15,"\u{1F4CA}",{fontSize:20})),this.createGroup("Material Toolbar",t)}generateMaterialCard(){let t=[];return t.push(this.createRectangle(0,0,200,120,"architecture",{backgroundColor:"#FAFAFA"})),t.push(this.createText(20,10,"Card",{fontSize:18,strokeColor:"#424242"})),t.push(this.createText(155,10,"\u{1F0CF}",{fontSize:20})),t.push(this.createText(20,50,"Title",{fontSize:14,strokeColor:"#424242"})),t.push(this.createText(20,75,"Content",{fontSize:12,strokeColor:"#757575"})),this.createGroup("Material Card",t)}static \u0275fac=function(e){return new(e||a)};static \u0275prov=K({token:a,factory:a.\u0275fac,providedIn:"root"})};var fl=(a,t)=>t.name;function bl(a,t){if(a&1&&(c(0,"mat-card",5)(1,"mat-card-content")(2,"div",6)(3,"h4"),m(4),l(),c(5,"span",7),m(6),l()(),c(7,"div",8),ie(8,"div",9),l(),c(9,"p",10),m(10),l()()()),a&2){let e=t.$implicit;p(4),_(e.name),p(2),_(e.count),p(2),At("width",e.percentage,"%")("background-color",e.color),p(2),O("",e.percentage.toFixed(1),"%")}}function _l(a,t){if(a&1&&(c(0,"div",2)(1,"mat-card",3)(2,"mat-card-content")(3,"mat-icon"),m(4,"widgets"),l(),c(5,"h3"),m(6),l(),c(7,"p"),m(8),u(9,"t"),l()()(),c(10,"mat-card",3)(11,"mat-card-content")(12,"mat-icon"),m(13,"category"),l(),c(14,"h3"),m(15),l(),c(16,"p"),m(17,"Cat\xE9gories"),l()()(),c(18,"mat-card",3)(19,"mat-card-content")(20,"mat-icon"),m(21,"graphic_eq"),l(),c(22,"h3"),m(23),l(),c(24,"p"),m(25,"\xC9l\xE9ments graphiques"),l()()()(),c(26,"h3"),m(27),u(28,"t"),l(),c(29,"div",4),Ue(30,bl,11,7,"mat-card",5,fl),l()),a&2){let e=F();p(6),_(e.totalComponents()),p(2),_(g(9,5,"STATISTICS.TOTAL_COMPONENTS")),p(7),_(e.totalCategories()),p(8),_(e.totalElements()),p(4),_(g(28,7,"STATISTICS.BY_CATEGORY")),p(3),je(e.getCategoryStats())}}function vl(a,t){a&1&&(c(0,"div",1)(1,"mat-icon"),m(2,"bar_chart"),l(),c(3,"p"),m(4),u(5,"t"),l(),c(6,"p"),m(7),u(8,"t"),l()()),a&2&&(p(4),_(g(5,2,"STATISTICS.NO_DATA")),p(3),_(g(8,4,"STATISTICS.NO_DATA_DESC")))}var ti=class a{constructor(t){this.generatorService=t}generatorService;hasLibrary(){let t=this.generatorService.currentLibrary();return t!==null&&t.libraryItems.length>0}totalComponents(){let t=this.generatorService.currentLibrary();return t?t.libraryItems.length:0}totalCategories(){return this.generatorService.categories().length}totalElements(){let t=this.generatorService.currentLibrary();return t?t.libraryItems.reduce((e,n)=>e+n.elements.length,0):0}getCategoryStats(){let t=this.generatorService.currentLibrary();if(!t)return[];let e=new Map,n={Components:"#DD0031",Services:"#43A047",Routing:"#2196F3",Signals:"#7C4DFF",RxJS:"#E91E63","State Management":"#FB8C00","UI Kit":"#00BCD4",Architecture:"#607D8B",Ecosystem:"#8BC34A"};t.libraryItems.forEach(o=>{let s=this.extractCategory(o.id),d=e.get(s);d?d.count++:e.set(s,{count:1,color:n[s]||"#607D8B"})});let i=[],r=this.totalComponents();return e.forEach((o,s)=>{i.push({name:s,count:o.count,percentage:r>0?o.count/r*100:0,color:o.color})}),i.sort((o,s)=>s.count-o.count),console.log("Statistiques par cat\xE9gorie:",i),i}extractCategory(t){let n=t.split("-")[0]||"other";return{components:"Components",services:"Services",routing:"Routing",signals:"Signals",rxjs:"RxJS",state:"State Management",ui:"UI Kit",architecture:"Architecture",ecosystem:"Ecosystem"}[n.toLowerCase()]||n}static \u0275fac=function(e){return new(e||a)(ee(Ut))};static \u0275cmp=V({type:a,selectors:[["app-statistics"]],decls:6,vars:4,consts:[[1,"statistics-container"],[1,"empty-statistics"],[1,"stats-grid"],[1,"stat-card"],[1,"category-stats"],[1,"category-stat-card"],[1,"category-header"],[1,"badge"],[1,"progress-bar"],[1,"progress-fill"],[1,"percentage"]],template:function(e,n){e&1&&(c(0,"div",0)(1,"h2"),m(2),u(3,"t"),l(),Y(4,_l,32,9)(5,vl,9,6,"div",1),l()),e&2&&(p(2),_(g(3,2,"STATISTICS.TITLE")),p(2),Z(n.hasLibrary()?4:5))},dependencies:[ot,Gt,Xn,Yn,ct,st,dt],styles:[".statistics-container[_ngcontent-%COMP%]{padding:24px;max-width:900px;margin:0 auto}h2[_ngcontent-%COMP%]{color:#333;margin-bottom:24px}h3[_ngcontent-%COMP%]{color:#555;margin:24px 0 16px}.stats-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-bottom:32px}.stat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{text-align:center;padding:24px}.stat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:36px;width:36px;height:36px;color:#1976d2;margin-bottom:8px}.stat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:2rem;margin:8px 0;color:#1976d2}.stat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#666;margin:0}.category-stats[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:16px}.category-stat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{padding:16px}.category-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}.category-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;color:#333}.category-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]{background:#1976d2;color:#fff;padding:4px 8px;border-radius:12px;font-size:.9rem;font-weight:500}.progress-bar[_ngcontent-%COMP%]{height:8px;background:#f0f0f0;border-radius:4px;overflow:hidden;margin-bottom:8px}.progress-fill[_ngcontent-%COMP%]{height:100%;border-radius:4px;transition:width .3s ease}.percentage[_ngcontent-%COMP%]{text-align:right;color:#666;font-size:.9rem;margin:0}.empty-statistics[_ngcontent-%COMP%]{text-align:center;padding:48px;color:#999}.empty-statistics[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px;margin-bottom:16px}.empty-statistics[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:8px 0;font-size:1.1rem}"]})};var ni=class a{constructor(t){this.platformId=t;this.isBrowser=En(this.platformId)}platformId;canvas;ctx;offsetX=0;offsetY=0;isBrowser;initializeCanvas(t){if(!this.isBrowser){console.warn("Canvas non disponible c\xF4t\xE9 serveur");return}this.canvas=t.nativeElement;let e=this.canvas.parentElement;if(e){let i=e.getBoundingClientRect();console.log("Dimensions du parent:",i.width,"x",i.height),this.canvas.width=i.width||800,this.canvas.height=i.height||600,this.canvas.style.width=`${this.canvas.width}px`,this.canvas.style.height=`${this.canvas.height}px`}else this.canvas.width=800,this.canvas.height=600,this.canvas.style.width="800px",this.canvas.style.height="600px";let n=this.canvas.getContext("2d");if(!n){console.error("Impossible d'obtenir le contexte 2D");return}this.ctx=n,console.log("Canvas initialis\xE9 avec dimensions:",this.canvas.width,"x",this.canvas.height)}renderGroup(t){if(!this.isBrowser||!this.ctx||!this.canvas){console.error("Canvas non initialis\xE9 pour le rendu");return}console.log("Rendu du groupe:",t.name),this.clearCanvas(),this.ctx.fillStyle="#ffffff",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let e=this.calculateBounds(t.elements);console.log("Bounds du groupe:",e);let n=(this.canvas.width-100)/e.width,i=(this.canvas.height-100)/e.height,r=Math.min(n,i,2);console.log("\xC9chelle de rendu:",r),this.offsetX=(this.canvas.width-e.width*r)/2-e.minX*r,this.offsetY=(this.canvas.height-e.height*r)/2-e.minY*r,t.elements.forEach(o=>{this.drawElement(o,r)}),console.log("Rendu termin\xE9")}renderLibrary(t){if(!this.isBrowser||!this.ctx||!this.canvas)return;this.clearCanvas();let e=50,n=20,i=20,r=this.canvas.width-40;t.forEach(o=>{let s=this.calculateBounds(o.elements),d=Math.min(1,r/s.width);this.offsetX=i-s.minX*d,this.offsetY=n-s.minY*d,o.elements.forEach(h=>{this.drawElement(h,d)}),this.drawLabel(o.name,i,n-10),n+=s.height*d+e})}drawElement(t,e=1){if(!this.ctx)return;let n=this.ctx,i=t.x*e+this.offsetX,r=t.y*e+this.offsetY;switch(n.save(),n.strokeStyle=t.strokeColor,n.lineWidth=(t.strokeWidth||2)*e,n.globalAlpha=(t.opacity||100)/100,t.strokeStyle==="dashed"?n.setLineDash([5*e,5*e]):t.strokeStyle==="dotted"&&n.setLineDash([2*e,2*e]),t.type){case"rectangle":this.drawRectangle(i,r,t,e);break;case"ellipse":this.drawEllipse(i,r,t,e);break;case"diamond":this.drawDiamond(i,r,t,e);break;case"text":this.drawText(i,r,t,e);break;case"arrow":this.drawArrow(i,r,t,e);break;case"line":this.drawLine(i,r,t,e);break}n.restore()}drawRectangle(t,e,n,i){if(!this.ctx||!n.width||!n.height)return;let r=this.ctx,o=n.width*i,s=n.height*i,d=(n.roundness?.value||0)*i;r.beginPath(),d>0?this.roundRect(r,t,e,o,s,d):r.rect(t,e,o,s),n.backgroundColor&&(r.fillStyle=n.backgroundColor,r.fill()),r.stroke()}roundRect(t,e,n,i,r,o){t.moveTo(e+o,n),t.lineTo(e+i-o,n),t.quadraticCurveTo(e+i,n,e+i,n+o),t.lineTo(e+i,n+r-o),t.quadraticCurveTo(e+i,n+r,e+i-o,n+r),t.lineTo(e+o,n+r),t.quadraticCurveTo(e,n+r,e,n+r-o),t.lineTo(e,n+o),t.quadraticCurveTo(e,n,e+o,n)}drawEllipse(t,e,n,i){if(!this.ctx||!n.width||!n.height)return;let r=this.ctx,o=n.width*i,s=n.height*i;r.beginPath(),r.ellipse(t+o/2,e+s/2,o/2,s/2,0,0,Math.PI*2),n.backgroundColor&&(r.fillStyle=n.backgroundColor,r.fill()),r.stroke()}drawDiamond(t,e,n,i){if(!this.ctx||!n.width||!n.height)return;let r=this.ctx,o=n.width*i,s=n.height*i;r.beginPath(),r.moveTo(t+o/2,e),r.lineTo(t+o,e+s/2),r.lineTo(t+o/2,e+s),r.lineTo(t,e+s/2),r.closePath(),n.backgroundColor&&(r.fillStyle=n.backgroundColor,r.fill()),r.stroke()}drawText(t,e,n,i){if(!this.ctx||!n.text)return;let r=this.ctx,o=(n.fontSize||14)*i;r.font=`${o}px "Virgil", "Segoe UI", sans-serif`,r.fillStyle=n.strokeColor,r.textBaseline="top",r.fillText(n.text,t,e)}drawArrow(t,e,n,i){if(!this.ctx||!n.points)return;let r=this.ctx;r.beginPath(),r.moveTo(t,e),n.points.forEach(f=>{r.lineTo(t+f[0]*i,e+f[1]*i)}),r.stroke();let o=n.points[n.points.length-1],s=n.points[n.points.length-2]||[0,0],d=Math.atan2((o[1]-s[1])*i,(o[0]-s[0])*i),h=10*i;r.beginPath(),r.moveTo(t+o[0]*i,e+o[1]*i),r.lineTo(t+o[0]*i-h*Math.cos(d-Math.PI/6),e+o[1]*i-h*Math.sin(d-Math.PI/6)),r.lineTo(t+o[0]*i-h*Math.cos(d+Math.PI/6),e+o[1]*i-h*Math.sin(d+Math.PI/6)),r.closePath(),r.fillStyle=n.strokeColor,r.fill()}drawLine(t,e,n,i){if(!this.ctx||!n.points)return;let r=this.ctx;r.beginPath(),r.moveTo(t,e),n.points.forEach(o=>{r.lineTo(t+o[0]*i,e+o[1]*i)}),r.stroke()}drawGrid(){if(!this.ctx||!this.canvas)return;let t=this.ctx,e=20;t.save(),t.strokeStyle="#e0e0e0",t.lineWidth=.5;for(let n=0;n<this.canvas.width;n+=e)t.beginPath(),t.moveTo(n,0),t.lineTo(n,this.canvas.height),t.stroke();for(let n=0;n<this.canvas.height;n+=e)t.beginPath(),t.moveTo(0,n),t.lineTo(this.canvas.width,n),t.stroke();t.restore()}drawLabel(t,e,n){if(!this.ctx)return;let i=this.ctx;i.save(),i.font='bold 16px "Virgil", "Segoe UI", sans-serif',i.fillStyle="#333",i.textBaseline="bottom",i.fillText(t,e,n),i.restore()}calculateBounds(t){let e=1/0,n=1/0,i=-1/0,r=-1/0;return t.forEach(o=>{let s=o.width||0,d=o.height||0;e=Math.min(e,o.x),n=Math.min(n,o.y),i=Math.max(i,o.x+s),r=Math.max(r,o.y+d)}),{minX:e,minY:n,maxX:i,maxY:r,width:i-e,height:r-n}}clearCanvas(){!this.ctx||!this.canvas||(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#ffffff",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height))}exportToPNG(){return!this.isBrowser||!this.canvas?"":this.canvas.toDataURL("image/png")}static \u0275fac=function(e){return new(e||a)(ke(bn))};static \u0275prov=K({token:a,factory:a.\u0275fac,providedIn:"root"})};var Cl=["previewCanvas"],Sl=["canvasWrapper"],Tl=["scrollContainer"];function wl(a,t){if(a&1&&m(0),a&2){let e=F();O(" ",e.previewTitle," ")}}function kl(a,t){a&1&&m(0," Pr\xE9visualisation ")}function Ml(a,t){if(a&1){let e=Ee();c(0,"canvas",15,2),w("mousedown",function(i){z(e);let r=F();return G(r.onMouseDown(i))})("mousemove",function(i){z(e);let r=F();return G(r.onMouseMove(i))})("mouseup",function(){z(e);let i=F();return G(i.onMouseUp())})("mouseleave",function(){z(e);let i=F();return G(i.onMouseUp())}),l()}}function Il(a,t){a&1&&(c(0,"div",14)(1,"mat-icon"),m(2,"image"),l(),c(3,"p"),m(4,"S\xE9lectionnez un composant ou g\xE9n\xE9rez une biblioth\xE8que"),l()())}var ii=class a{constructor(t,e,n){this.canvasRenderer=t;this.platformId=e;this.cdr=n;this.isBrowser=En(this.platformId)}canvasRenderer;platformId;cdr;canvasRef;canvasWrapper;scrollContainer;group=null;library=null;groups=[];hasContent=!1;previewTitle="Pr\xE9visualisation";isBrowser;zoomLevel=1;zoomStep=.1;minZoom=.2;maxZoom=3;isDragging=!1;dragStartX=0;dragStartY=0;elementStartX=0;elementStartY=0;selectedElement=null;ngAfterViewInit(){this.isBrowser&&this.canvasRef&&setTimeout(()=>{this.canvasRenderer.initializeCanvas(this.canvasRef),this.renderContent(),this.cdr.detectChanges()},300)}ngOnChanges(t){(t.group||t.library||t.groups)&&this.isBrowser&&this.canvasRef&&setTimeout(()=>{this.canvasRenderer.initializeCanvas(this.canvasRef),this.renderContent(),this.cdr.detectChanges(),this.cdr.markForCheck()},200)}findElementAtPosition(t,e){console.log("Recherche d'\xE9l\xE9ment \xE0 la position:",t,e);let n=this.getAllElements();for(let i=n.length-1;i>=0;i--){let r=n[i];if(this.isPointInElement(t,e,r))return console.log("\u2705 \xC9l\xE9ment trouv\xE9:",r.type,"\xE0",r.x,r.y),r}return console.log("\u274C Aucun \xE9l\xE9ment trouv\xE9"),null}getAllElements(){return this.group?this.group.elements:this.groups.length>0?this.groups.flatMap(t=>t.elements):this.library?this.library.libraryItems.flatMap(t=>t.elements):[]}isPointInElement(t,e,n){let i=n.x,r=n.y,o=n.width||0,s=n.height||0;return t>=i&&t<=i+o&&e>=r&&e<=r+s}onMouseDown(t){if(!this.isBrowser||!this.hasContent)return;let n=this.canvasRef.nativeElement.getBoundingClientRect(),i=t.clientX-n.left,r=t.clientY-n.top;console.log("Mouse down \xE0:",i,r);let o=this.findElementAtPosition(i,r);o&&(this.isDragging=!0,this.selectedElement=o,this.dragStartX=i,this.dragStartY=r,this.elementStartX=o.x,this.elementStartY=o.y,console.log("\u2705 D\xE9but du drag sur:",o.type))}onMouseUp(){this.isDragging&&(console.log("\u2705 Fin du drag"),console.log("Position finale:",this.selectedElement?.x,this.selectedElement?.y)),this.isDragging=!1,this.selectedElement=null}zoomIn(){!this.isBrowser||!this.hasContent||(this.zoomLevel=Math.min(this.zoomLevel+this.zoomStep,this.maxZoom),this.applyZoom())}zoomOut(){!this.isBrowser||!this.hasContent||(this.zoomLevel=Math.max(this.zoomLevel-this.zoomStep,this.minZoom),this.applyZoom())}resetZoom(){!this.isBrowser||!this.hasContent||(this.zoomLevel=1,this.applyZoom(),this.centerContent())}centerContent(){if(!this.scrollContainer||!this.canvasWrapper)return;let t=this.scrollContainer.nativeElement,e=this.canvasWrapper.nativeElement,n=(e.scrollWidth-t.clientWidth)/2,i=(e.scrollHeight-t.clientHeight)/2;t.scrollTo({left:Math.max(0,n),top:Math.max(0,i),behavior:"smooth"})}applyZoom(){if(!this.isBrowser||!this.canvasRef)return;let t=this.canvasRef.nativeElement;if(t.style.transform=`scale(${this.zoomLevel})`,t.style.transformOrigin="top left",t.style.transition="transform 0.2s ease",this.canvasWrapper){let e=this.canvasWrapper.nativeElement;e.style.width=t.width*this.zoomLevel+"px",e.style.height=t.height*this.zoomLevel+"px"}}exportPNG(){if(!this.isBrowser||!this.hasContent)return;let t=this.canvasRenderer.exportToPNG();if(!t)return;let e=document.createElement("a");e.href=t,e.download="preview.png",e.click()}renderContent(){requestAnimationFrame(()=>{if(this.group)this.canvasRenderer.renderGroup(this.group),this.hasContent=!0;else if(this.groups&&this.groups.length>0)this.canvasRenderer.renderLibrary(this.groups),this.hasContent=!0;else if(this.library&&this.library.libraryItems.length>0){let t=this.library.libraryItems.map(e=>({name:e.id,elements:e.elements,boundElements:null}));this.canvasRenderer.renderLibrary(t),this.hasContent=!0}else this.hasContent=!1})}debounceTimer;onMouseMove(t){if(!this.isDragging||!this.selectedElement)return;let e=this.selectedElement,n=t.clientX-this.dragStartX,i=t.clientY-this.dragStartY,r=this.elementStartX+n,o=this.elementStartY+i;clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout(()=>{e&&(e.x=r,e.y=o,this.renderContent())},16)}static \u0275fac=function(e){return new(e||a)(ee(ni),ee(bn),ee(Ce))};static \u0275cmp=V({type:a,selectors:[["app-excalidraw-preview"]],viewQuery:function(e,n){if(e&1&&ge(Cl,5)(Sl,5)(Tl,5),e&2){let i;I(i=A())&&(n.canvasRef=i.first),I(i=A())&&(n.canvasWrapper=i.first),I(i=A())&&(n.scrollContainer=i.first)}},inputs:{group:"group",library:"library",groups:"groups"},features:[Oe],decls:27,vars:8,consts:[["scrollContainer",""],["canvasWrapper",""],["previewCanvas",""],[1,"preview-container"],[1,"preview-toolbar"],[1,"preview-title"],[1,"preview-actions"],["mat-icon-button","","matTooltip","Zoom avant",3,"click","disabled"],["mat-icon-button","","matTooltip","Zoom arri\xE8re",3,"click","disabled"],["mat-icon-button","","matTooltip","R\xE9initialiser le zoom",3,"click","disabled"],["mat-icon-button","","matTooltip","Centrer",3,"click","disabled"],["mat-icon-button","","matTooltip","Exporter en PNG",3,"click","disabled"],[1,"canvas-scroll-container"],[1,"canvas-wrapper"],[1,"empty-preview"],[3,"mousedown","mousemove","mouseup","mouseleave"]],template:function(e,n){e&1&&(c(0,"div",3)(1,"div",4)(2,"span",5),Y(3,wl,1,1)(4,kl,1,0),l(),c(5,"div",6)(6,"button",7),w("click",function(){return n.zoomIn()}),c(7,"mat-icon"),m(8,"zoom_in"),l()(),c(9,"button",8),w("click",function(){return n.zoomOut()}),c(10,"mat-icon"),m(11,"zoom_out"),l()(),c(12,"button",9),w("click",function(){return n.resetZoom()}),c(13,"mat-icon"),m(14,"fit_screen"),l()(),c(15,"button",10),w("click",function(){return n.centerContent()}),c(16,"mat-icon"),m(17,"center_focus_strong"),l()(),c(18,"button",11),w("click",function(){return n.exportPNG()}),c(19,"mat-icon"),m(20,"image"),l()()()(),c(21,"div",12,0)(23,"div",13,1),Y(25,Ml,2,0,"canvas"),Y(26,Il,5,0,"div",14),l()()()),e&2&&(p(3),Z(n.hasContent?3:4),p(3),D("disabled",!n.isBrowser||!n.hasContent),p(3),D("disabled",!n.isBrowser||!n.hasContent),p(3),D("disabled",!n.isBrowser||!n.hasContent),p(3),D("disabled",!n.isBrowser||!n.hasContent),p(3),D("disabled",!n.isBrowser||!n.hasContent),p(7),Z(n.isBrowser?25:-1),p(),Z(n.hasContent?-1:26))},dependencies:[ot,Ot,Cn,ct,st,Mn,kn],styles:["[_nghost-%COMP%]{display:block;height:100%}.preview-container[_ngcontent-%COMP%]{position:relative;height:100%;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px #0000001a;display:flex;flex-direction:column}.preview-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:8px 16px;background:#f5f5f5;border-bottom:1px solid #e0e0e0;flex-shrink:0}.preview-title[_ngcontent-%COMP%]{font-weight:500;color:#333}.preview-actions[_ngcontent-%COMP%]{display:flex;gap:4px}.canvas-scroll-container[_ngcontent-%COMP%]{flex:1;overflow:auto;position:relative;background:#fafafa;min-height:0}.canvas-scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:12px;height:12px}.canvas-scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#f1f1f1;border-radius:6px}.canvas-scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#c1c1c1;border-radius:6px}.canvas-wrapper[_ngcontent-%COMP%]{min-width:100%;min-height:100%;position:relative;display:flex;align-items:flex-start;justify-content:flex-start;padding:20px}canvas[_ngcontent-%COMP%]{display:block;transition:transform .2s ease;cursor:grab}canvas[_ngcontent-%COMP%]:active{cursor:grabbing}.empty-preview[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;color:#999;pointer-events:none}.empty-preview[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:48px;width:48px;height:48px;margin-bottom:16px}.empty-preview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:1.1rem}"],changeDetection:0})};var ai=class a{transform(t){return t.split("-").slice(1).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}static \u0275fac=function(e){return new(e||a)};static \u0275pipe=vn({name:"formatItemName",type:a,pure:!0})};var ri=class a{STORAGE_KEY="angular-architecture-kit-library";constructor(){}saveLibrary(t){try{let e=JSON.stringify(t);localStorage.setItem(this.STORAGE_KEY,e),console.log("\u2705 Biblioth\xE8que sauvegard\xE9e localement")}catch(e){console.error("\u274C Erreur lors de la sauvegarde:",e)}}loadLibrary(){try{let t=localStorage.getItem(this.STORAGE_KEY);if(!t)return null;let e=JSON.parse(t);return console.log("\u2705 Biblioth\xE8que charg\xE9e depuis le stockage local"),e}catch(t){return console.error("\u274C Erreur lors du chargement:",t),null}}clearLibrary(){localStorage.removeItem(this.STORAGE_KEY),console.log("\u{1F5D1}\uFE0F Biblioth\xE8que supprim\xE9e du stockage local")}hasSavedLibrary(){return localStorage.getItem(this.STORAGE_KEY)!==null}static \u0275fac=function(e){return new(e||a)};static \u0275prov=K({token:a,factory:a.\u0275fac,providedIn:"root"})};var oi=class a{_theme=me("light");theme=this._theme.asReadonly();constructor(){let t=localStorage.getItem("theme");(t==="light"||t==="dark")&&this._theme.set(t),this.applyTheme(),console.log("Th\xE8me initialis\xE9:",this._theme())}toggleTheme(){let t=this._theme()==="light"?"dark":"light";console.log("Basculement du th\xE8me:",this._theme(),"->",t),this._theme.set(t),localStorage.setItem("theme",t),this.applyTheme()}applyTheme(){let t=this._theme();console.log("Application du th\xE8me:",t),document.body.classList.remove("light-theme","dark-theme"),document.body.classList.add(`${t}-theme`),t==="dark"?(document.body.style.backgroundColor="#1e1e1e",document.body.style.color="#ffffff",document.documentElement.style.setProperty("--mat-app-background-color","#1e1e1e"),document.documentElement.style.setProperty("--mat-app-text-color","#ffffff")):(document.body.style.backgroundColor="#fafafa",document.body.style.color="#333333",document.documentElement.style.setProperty("--mat-app-background-color","#fafafa"),document.documentElement.style.setProperty("--mat-app-text-color","#333333"))}static \u0275fac=function(e){return new(e||a)};static \u0275prov=K({token:a,factory:a.\u0275fac,providedIn:"root"})};var si=class a{constructor(t){this.ngZone=t;console.log("=== KeyboardShortcutsService initialis\xE9 ==="),this.setupListener()}ngZone;shortcuts=new se;shortcuts$=this.shortcuts.asObservable();setupListener(){this.ngZone.runOutsideAngular(()=>{document.addEventListener("keydown",t=>{this.ngZone.run(()=>{this.handleKeyDown(t)})})}),console.log("\u2705 \xC9couteur de raccourcis clavier configur\xE9")}handleKeyDown(t){let e=t.key.toLowerCase(),n=t.ctrlKey||t.metaKey,i=t.shiftKey,r=t.altKey;if(!this.isTypingInInput(t)){if(console.log(`\u2328\uFE0F Touche press\xE9e: ${n?"Ctrl+":""}${i?"Shift+":""}${r?"Alt+":""}${e}`),n&&!i&&e==="g"){t.preventDefault(),console.log("\u2192 D\xE9clenchement: generate"),this.shortcuts.next("generate");return}if(n&&!i&&e==="e"){t.preventDefault(),console.log("\u2192 D\xE9clenchement: export"),this.shortcuts.next("export");return}if(n&&!i&&e==="s"){t.preventDefault(),console.log("\u2192 D\xE9clenchement: save"),this.shortcuts.next("save");return}if(n&&!i&&e==="p"){t.preventDefault(),console.log("\u2192 D\xE9clenchement: export-pdf"),this.shortcuts.next("export-pdf");return}if(n&&i&&e==="s"){t.preventDefault(),console.log("\u2192 D\xE9clenchement: export-svg"),this.shortcuts.next("export-svg");return}if(n&&i&&e==="c"){t.preventDefault(),console.log("\u2192 D\xE9clenchement: share-link"),this.shortcuts.next("share-link");return}if(!n&&!i&&e==="f1"){t.preventDefault(),console.log("\u2192 D\xE9clenchement: docs"),this.shortcuts.next("docs");return}}}isTypingInInput(t){let e=t.target,n=e.tagName?.toLowerCase(),i=n==="input"||n==="textarea"||n==="select"||e.isContentEditable;return i&&console.log("\u23ED\uFE0F Ignor\xE9: saisie dans un champ"),i}static \u0275fac=function(e){return new(e||a)(ke(de))};static \u0275prov=K({token:a,factory:a.\u0275fac,providedIn:"root"})};var ci=class a{convertGroupToSVG(t,e,n){let i="";return t.forEach(r=>{let o=r.x+e,s=r.y+n;switch(r.type){case"rectangle":i+=`<rect x="${o}" y="${s}" width="${r.width}" height="${r.height}"
                        fill="${r.backgroundColor}" stroke="${r.strokeColor}"
                        stroke-width="${r.strokeWidth}" rx="8"/>`;break;case"text":i+=`<text x="${o}" y="${s+r.fontSize}" font-size="${r.fontSize}"
                        fill="${r.strokeColor}">${r.text}</text>`;break;case"ellipse":i+=`<ellipse cx="${o+r.width/2}" cy="${s+r.height/2}"
                           rx="${r.width/2}" ry="${r.height/2}"
                           fill="${r.backgroundColor}" stroke="${r.strokeColor}"/>`;break}}),i}exportGroupToSVG(t){let e=t.elements,n=this.calculateBounds(e),i=`<?xml version="1.0" encoding="UTF-8"?>
`;return i+=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${n.minX} ${n.minY} ${n.width} ${n.height}" width="${n.width}" height="${n.height}">
`,i+=`  <rect x="${n.minX}" y="${n.minY}" width="${n.width}" height="${n.height}" fill="white"/>
`,e.forEach(r=>{i+=this.elementToSVG(r)}),i+="</svg>",i}exportLibraryToSVG(t){let i=20,r=20,o=0,s=[];t.libraryItems.forEach((v,k)=>{let C=this.calculateBounds(v.elements);i+C.width>800&&(i=20,r+=o+50,o=0),v.elements.forEach(y=>{s.push({element:y,x:y.x+i-C.minX,y:y.y+r-C.minY})}),i+=C.width+50,o=Math.max(o,C.height)});let d=Math.max(800,i+20),h=r+o+20,f=`<?xml version="1.0" encoding="UTF-8"?>
`;return f+=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${d} ${h}" width="${d}" height="${h}">
`,f+=`  <rect x="0" y="0" width="${d}" height="${h}" fill="white"/>
`,s.forEach(({element:v,x:k,y:C})=>{let y=Je(le({},v),{x:k,y:C});f+=this.elementToSVG(y)}),f+="</svg>",f}elementToSVG(t){switch(t.type){case"rectangle":return this.rectangleToSVG(t);case"text":return this.textToSVG(t);case"ellipse":return this.ellipseToSVG(t);case"diamond":return this.diamondToSVG(t);case"arrow":return this.arrowToSVG(t);case"line":return this.lineToSVG(t);default:return""}}rectangleToSVG(t){let e=t.x,n=t.y,i=t.width||0,r=t.height||0,o=t.roundness?.value||0,s=t.backgroundColor||"transparent",d=t.strokeColor,h=t.strokeWidth||2,f=t.strokeStyle==="dashed"?"5,5":t.strokeStyle==="dotted"?"2,2":"";return`  <rect x="${e}" y="${n}" width="${i}" height="${r}" rx="${o}" fill="${s}" stroke="${d}" stroke-width="${h}"${f?` stroke-dasharray="${f}"`:""}/>
`}textToSVG(t){let e=t.x,n=t.y,i=t.fontSize||20,r=this.escapeXML(t.text||""),o=t.strokeColor,s=t.textAlign==="center"?"middle":t.textAlign==="right"?"end":"start";return`  <text x="${e}" y="${n+i}" font-size="${i}" fill="${o}" text-anchor="${s}" font-family="Virgil, sans-serif">${r}</text>
`}ellipseToSVG(t){let e=t.x+(t.width||0)/2,n=t.y+(t.height||0)/2,i=(t.width||0)/2,r=(t.height||0)/2,o=t.backgroundColor||"transparent",s=t.strokeColor,d=t.strokeWidth||2;return`  <ellipse cx="${e}" cy="${n}" rx="${i}" ry="${r}" fill="${o}" stroke="${s}" stroke-width="${d}"/>
`}diamondToSVG(t){let e=t.x,n=t.y,i=t.width||0,r=t.height||0,o=t.backgroundColor||"transparent",s=t.strokeColor,d=t.strokeWidth||2;return`  <polygon points="${`${e+i/2},${n} ${e+i},${n+r/2} ${e+i/2},${n+r} ${e},${n+r/2}`}" fill="${o}" stroke="${s}" stroke-width="${d}"/>
`}arrowToSVG(t){if(!t.points||t.points.length<2)return"";let e=t.x,n=t.y,i=t.strokeColor,r=t.strokeWidth||2,o=`M ${e} ${n}`;t.points.forEach(y=>{o+=` L ${e+y[0]} ${n+y[1]}`});let s=t.points[t.points.length-1],d=t.points[t.points.length-2]||[0,0],h=Math.atan2(s[1]-d[1],s[0]-d[0]),f=10,v=e+s[0],k=n+s[1],C=` M ${v} ${k} L ${v-f*Math.cos(h-Math.PI/6)} ${k-f*Math.sin(h-Math.PI/6)} L ${v-f*Math.cos(h+Math.PI/6)} ${k-f*Math.sin(h+Math.PI/6)} Z`;return`  <path d="${o}" stroke="${i}" stroke-width="${r}" fill="none"/>
  <path d="${C}" fill="${i}"/>
`}lineToSVG(t){if(!t.points||t.points.length<2)return"";let e=t.x,n=t.y,i=t.strokeColor,r=t.strokeWidth||2,o=`M ${e} ${n}`;return t.points.forEach(s=>{o+=` L ${e+s[0]} ${n+s[1]}`}),`  <path d="${o}" stroke="${i}" stroke-width="${r}" fill="none"/>
`}calculateBounds(t){let e=1/0,n=1/0,i=-1/0,r=-1/0;return t.forEach(o=>{e=Math.min(e,o.x),n=Math.min(n,o.y),i=Math.max(i,o.x+(o.width||0)),r=Math.max(r,o.y+(o.height||0))}),{minX:e,minY:n,maxX:i,maxY:r,width:i-e,height:r-n}}escapeXML(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}downloadSVG(t,e){let n=new Blob([t],{type:"image/svg+xml"}),i=window.URL.createObjectURL(n),r=document.createElement("a");r.href=i,r.download=e,document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(i)}static \u0275fac=function(e){return new(e||a)};static \u0275prov=K({token:a,factory:a.\u0275fac,providedIn:"root"})};var is=ds(ms());var li=class a{constructor(){}exportElementToPDF(t,e){return ut(this,null,function*(){console.log("=== Export PDF ==="),console.log("Element ID:",t);let n=document.getElementById(t);if(!n)throw console.error("\xC9l\xE9ment non trouv\xE9:",t),new Error("\xC9l\xE9ment non trouv\xE9");try{let i=yield(0,is.default)(n,{scale:2,backgroundColor:"#ffffff",allowTaint:!0,useCORS:!0});console.log("Canvas cr\xE9\xE9:",i.width,"x",i.height);let r=i.toDataURL("image/png"),o=new In({orientation:i.width>i.height?"landscape":"portrait",unit:"px",format:[i.width,i.height]});o.addImage(r,"PNG",0,0,i.width,i.height),o.save(e),console.log("\u2705 PDF export\xE9:",e)}catch(i){throw console.error("\u274C Erreur lors de l'export PDF:",i),i}})}exportCanvasToPDF(t,e){return ut(this,null,function*(){console.log("=== Export Canvas PDF ===");let n=document.getElementById(t);if(!n)throw console.error("Canvas non trouv\xE9:",t),new Error("Canvas non trouv\xE9");try{let i=n.toDataURL("image/png"),r=new In({orientation:n.width>n.height?"landscape":"portrait",unit:"px",format:[n.width,n.height]});r.addImage(i,"PNG",0,0,n.width,n.height),r.save(e),console.log("\u2705 PDF export\xE9:",e)}catch(i){throw console.error("\u274C Erreur lors de l'export PDF:",i),i}})}exportLibraryToPDF(t,e){return ut(this,null,function*(){console.log("=== Export Biblioth\xE8que PDF ==="),console.log("Items:",t.libraryItems.length);let n=new In({orientation:"landscape",unit:"px",format:"a4"}),i=n.internal.pageSize.getWidth(),r=n.internal.pageSize.getHeight();t.libraryItems.forEach((o,s)=>{s>0&&n.addPage(),n.setFontSize(16),n.text(`Composant: ${o.id}`,20,20),n.setFontSize(10),n.text(`\xC9l\xE9ments: ${o.elements.length}`,20,30),n.text(`Cr\xE9\xE9 le: ${new Date(o.created).toLocaleDateString()}`,20,40),o.elements.forEach((d,h)=>{let f=60+h*30;switch(n.setFontSize(8),d.type){case"rectangle":n.rect(d.x/2,f,(d.width||100)/2,(d.height||50)/2);break;case"text":n.text(d.text||"",d.x/2,f);break;case"ellipse":n.ellipse(d.x/2+(d.width||100)/4,f+(d.height||50)/4,(d.width||100)/4,(d.height||50)/4);break}})}),n.save(e),console.log("\u2705 PDF biblioth\xE8que export\xE9:",e)})}static \u0275fac=function(e){return new(e||a)};static \u0275prov=K({token:a,factory:a.\u0275fac,providedIn:"root"})};var Ll=["tabGroup"],as=(a,t)=>t.type,rs=(a,t)=>t.id;function Nl(a,t){a&1&&(m(0),u(1,"t")),a&2&&O(" ",g(1,1,"TOOLBAR.GENERATING")," ")}function Fl(a,t){a&1&&(m(0),u(1,"t")),a&2&&O(" ",g(1,1,"TOOLBAR.GENERATE")," ")}function Bl(a,t){if(a&1){let e=Ee();c(0,"mat-card",28)(1,"mat-card-header")(2,"mat-card-title")(3,"span",48),m(4),l(),m(5),l(),c(6,"mat-card-subtitle"),m(7),l()(),c(8,"mat-card-content")(9,"mat-chip"),m(10),l()(),c(11,"mat-card-actions")(12,"button",43),w("click",function(){let i=z(e).$implicit,r=F();return G(r.addComponent(i))}),c(13,"mat-icon"),m(14,"add"),l(),m(15),u(16,"t"),l(),c(17,"button",49),w("click",function(){let i=z(e).$implicit,r=F();return G(r.previewComponent(i))}),c(18,"mat-icon"),m(19,"visibility"),l(),m(20),u(21,"t"),l()()()}if(a&2){let e=t.$implicit;p(4),_(e.icon),p(),O(" ",e.defaultName," "),p(2),_(e.description),p(3),_(e.category),p(5),O(" ",g(16,6,"COMPONENTS.ADD")," "),p(5),O(" ",g(21,8,"COMPONENTS.PREVIEW")," ")}}function zl(a,t){if(a&1){let e=Ee();c(0,"mat-card",30)(1,"mat-card-header")(2,"div",50),m(3),l(),c(4,"mat-card-title"),m(5),l(),c(6,"mat-card-subtitle"),m(7),l()(),c(8,"mat-card-content")(9,"p"),m(10),l()(),c(11,"mat-card-actions")(12,"button",43),w("click",function(){let i=z(e).$implicit,r=F();return G(r.generateTemplate(i))}),c(13,"mat-icon"),m(14,"play_arrow"),l(),m(15),u(16,"t"),l()()()}if(a&2){let e=t.$implicit;p(3),_(e.icon),p(2),_(e.name),p(2),_(e.category),p(3),_(e.description),p(5),O(" ",g(16,5,"TOOLBAR.GENERATE")," ")}}function Gl(a,t){if(a&1&&(c(0,"mat-option",51),m(1),l()),a&2){let e=t.$implicit;D("value",e.type),p(),Da(" ",e.icon," ",e.defaultName," ")}}function Vl(a,t){if(a&1){let e=Ee();c(0,"mat-form-field",32)(1,"mat-label"),m(2,"Composant"),l(),c(3,"mat-select",19),Pt("ngModelChange",function(i){z(e);let r=F();return Rt(r.selectedPreviewComponent,i)||(r.selectedPreviewComponent=i),G(i)}),w("ngModelChange",function(i){z(e);let r=F();return G(r.onPreviewComponentChange(i))}),Ue(4,Gl,2,3,"mat-option",51,as),l()()}if(a&2){let e=F();p(3),Dt("ngModel",e.selectedPreviewComponent),p(),je(e.availableComponents)}}function Hl(a,t){if(a&1){let e=Ee();c(0,"button",45),w("click",function(){z(e);let i=F();return G(i.clearLibrary())}),c(1,"mat-icon"),m(2,"delete"),l(),m(3),u(4,"t"),l()}a&2&&(p(3),O(" ",g(4,1,"LIBRARY.CLEAR")," "))}function Ul(a,t){if(a&1){let e=Ee();c(0,"mat-card",54)(1,"mat-card-header")(2,"mat-card-title"),m(3),u(4,"formatItemName"),l(),c(5,"mat-card-subtitle"),m(6),l()(),c(7,"mat-card-actions")(8,"button",5),w("click",function(){let i=z(e).$implicit,r=F(2);return G(r.previewLibraryItem(i))}),c(9,"mat-icon"),m(10,"visibility"),l()(),c(11,"button",5),w("click",function(){let i=z(e).$implicit,r=F(2);return G(r.removeItem(i.id))}),c(12,"mat-icon"),m(13),u(14,"t"),l()()()()}if(a&2){let e=t.$implicit;p(3),_(g(4,3,e.id)),p(3),O("",e.elements.length," \xE9l\xE9ments"),p(7),_(g(14,5,"LIBRARY.DELETE"))}}function jl(a,t){if(a&1&&(c(0,"div",52)(1,"mat-card")(2,"mat-card-content")(3,"h3"),m(4),l(),c(5,"p"),m(6,"\xC9l\xE9ments totaux"),l()()()(),c(7,"p"),m(8),l(),c(9,"div",53),Ue(10,Ul,15,7,"mat-card",54,rs),l()),a&2){let e=t;p(4),_(e.libraryItems.length),p(4),O("Nombre d'\xE9l\xE9ments: ",e.libraryItems.length),p(2),je(e.libraryItems)}}function $l(a,t){a&1&&(c(0,"p",38),m(1),u(2,"t"),l()),a&2&&(p(),O(" ",g(2,1,"LIBRARY.EMPTY")," "))}function ql(a,t){if(a&1){let e=Ee();c(0,"button",47),w("click",function(){z(e);let i=F();return G(i.exportPreviewToPDF())}),c(1,"mat-icon"),m(2,"picture_as_pdf"),l(),m(3," Exporter l'aper\xE7u en PDF "),l()}}function Ql(a,t){if(a&1){let e=Ee();c(0,"button",47),w("click",function(){z(e);let i=F();return G(i.exportGroupToSVG())}),c(1,"mat-icon"),m(2,"image"),l(),m(3," Exporter le groupe en SVG "),l()}}var di=class a{constructor(t,e,n,i,r,o,s,d,h,f,v){this.generatorService=t;this.fileExportService=e;this.storageService=n;this.dialog=i;this.snackBar=r;this.themeService=o;this.keyboardShortcuts=s;this.svgExportService=d;this.pdfExportService=h;this.shareService=f;this.languageService=v;console.log("=== AppComponent initialis\xE9 ==="),console.log("Composants:",this.availableComponents.length),console.log("Templates:",this.architectureTemplates.length),Ta(()=>{let k=this.generatorService.currentLibrary();k&&(console.log("\u{1F4DA} Biblioth\xE8que mise \xE0 jour:",k.libraryItems.length,"items"),this.previewLibrary=k)}),this.setupKeyboardShortcuts(),this.loadLibraryFromUrl()}generatorService;fileExportService;storageService;dialog;snackBar;themeService;keyboardShortcuts;svgExportService;pdfExportService;shareService;languageService;tabGroup;exportFilename="angular-architecture-kit.excalidrawlib";searchTerm="";selectedFilterCategory="all";previewMode="library";selectedPreviewComponent="standalone-component";availableComponents=Jo;architectureTemplates=es;previewGroup=null;previewGroups=[];previewLibrary=null;favorites=me([]);ngOnInit(){console.log("=== ngOnInit ==="),console.log("availableComponents:",this.availableComponents),console.log("architectureTemplates:",this.architectureTemplates);let t=this.storageService.loadLibrary();t&&this.generatorService._currentLibrary.set(t)}getFilteredComponents(){let t=this.searchTerm.toLowerCase().trim(),e=this.selectedFilterCategory,n=this.availableComponents.filter(i=>{let r=!t||i.defaultName.toLowerCase().includes(t)||i.description.toLowerCase().includes(t),o=e==="all"||i.category===e;return r&&o});return console.log(`Filtrage: ${n.length}/${this.availableComponents.length} composants`),n}generateLibrary(){console.log("G\xE9n\xE9ration de la biblioth\xE8que..."),this.generatorService.generateLibrary(),this.showSnackBar(this.languageService.translate("MESSAGES.LIBRARY_GENERATED"))}generateFullLibrary(){console.log("G\xE9n\xE9ration compl\xE8te..."),this.generatorService.generateFullLibrary(),this.showSnackBar("\u2705 Biblioth\xE8que compl\xE8te g\xE9n\xE9r\xE9e")}generateTemplate(t){console.log("G\xE9n\xE9ration du template:",t.name);try{this.generatorService.generateArchitectureTemplate(t.id),this.showSnackBar(`\u2705 Template "${t.name}" g\xE9n\xE9r\xE9`)}catch(e){console.error("Erreur template:",e),this.showSnackBar("\u274C Erreur lors de la g\xE9n\xE9ration","error")}}addComponent(t){console.log("Ajout du composant:",t.defaultName);try{this.generatorService.addComponentToLibrary(t.type),this.showSnackBar(`\u2705 ${t.defaultName} ajout\xE9`)}catch(e){console.error("Erreur ajout:",e),this.showSnackBar("\u274C Erreur lors de l'ajout","error")}}previewComponent(t){console.log("Pr\xE9visualisation:",t.defaultName);try{this.previewGroup=this.generatorService.generateComponentByType(t.type),this.previewMode="single",this.selectedPreviewComponent=t.type,this.showSnackBar(`\u{1F441}\uFE0F Aper\xE7u: ${t.defaultName}`)}catch(e){console.error("Erreur pr\xE9visualisation:",e),this.showSnackBar("\u274C Erreur de pr\xE9visualisation","error")}}exportLibrary(){console.log("Export de la biblioth\xE8que..."),this.generatorService.downloadLibrary(this.exportFilename),this.showSnackBar("\u2705 Biblioth\xE8que export\xE9e")}copyToClipboard(){let t=this.generatorService.exportLibrary();navigator.clipboard.writeText(t).then(()=>{this.showSnackBar("\u2705 Copi\xE9 dans le presse-papier")})}openDocs(){console.log("Ouverture documentation"),this.tabGroup&&(this.tabGroup.selectedIndex=5)}toggleTheme(){console.log("Basculement th\xE8me"),this.themeService.toggleTheme(),this.showSnackBar(`\u{1F313} Th\xE8me: ${this.themeService.theme()}`)}openElementEditor(){console.log("Ouverture \xE9diteur"),import("./chunk-OX3UTH3O.js").then(t=>{this.dialog.open(t.ElementEditorComponent,{width:"400px",data:{elementName:"Nouveau composant",elementColor:"#DD0031",fontSize:20}}).afterClosed().subscribe(n=>{n&&(console.log("R\xE9sultat \xE9dition:",n),this.showSnackBar("\u2705 \xC9l\xE9ment modifi\xE9"))})})}isFavorite(t){return this.favorites().includes(t.type)}addToFavorites(t){let e=this.favorites();e.indexOf(t.type)>-1?this.favorites.set(e.filter(i=>i!==t.type)):this.favorites.set([...e,t.type])}getCategoryColor(t){return{Components:"#DD0031",Services:"#43A047",Routing:"#2196F3",Signals:"#7C4DFF",RxJS:"#E91E63","State Management":"#FB8C00","UI Kit":"#00BCD4",Architecture:"#607D8B",Ecosystem:"#8BC34A"}[t]||"#607D8B"}showSnackBar(t,e="success"){this.snackBar.open(t,"Fermer",{duration:3e3,panelClass:`snackbar-${e}`})}onPreviewModeChange(t){console.log("=== Changement de mode ==="),console.log("Nouveau mode:",t),this.previewMode=t,this.updatePreview()}onPreviewComponentChange(t){console.log("=== Changement de composant ==="),console.log("Nouveau type:",t),this.selectedPreviewComponent=t,this.updatePreview()}updatePreview(){if(console.log("=== Mise \xE0 jour de la pr\xE9visualisation ==="),console.log("Mode:",this.previewMode),console.log("Composant s\xE9lectionn\xE9:",this.selectedPreviewComponent),this.previewMode==="single")try{let t=this.generatorService.generateComponentByType(this.selectedPreviewComponent);this.previewGroup=t,this.previewGroups=[],this.previewLibrary=null,console.log("\u2705 Groupe g\xE9n\xE9r\xE9:",t.name)}catch(t){console.error("\u274C Erreur g\xE9n\xE9ration:",t),this.previewGroup=null}else if(this.previewMode==="library"){let t=this.generatorService.currentLibrary();this.previewLibrary=t,this.previewGroup=null,this.previewGroups=[],console.log("\u2705 Biblioth\xE8que:",t?t.libraryItems.length:0,"items")}}clearLibrary(){console.log("=== Vider la biblioth\xE8que ==="),confirm("Voulez-vous vraiment vider la biblioth\xE8que ?")&&(this.storageService.clearLibrary(),this.generatorService._currentLibrary.set(null),this.previewLibrary=null,this.previewGroup=null,this.previewGroups=[],this.showSnackBar(this.languageService.translate("MESSAGES.LIBRARY_CLEARED")))}removeItem(t){console.log("=== Suppression ==="),console.log("Item:",t),this.generatorService.removeComponentFromLibrary(t),this.showSnackBar("\u{1F5D1}\uFE0F \xC9l\xE9ment supprim\xE9")}previewLibraryItem(t){console.log("=== Pr\xE9visualisation item ==="),console.log("Item:",t);let e={name:this.formatItemName(t.id),elements:t.elements,boundElements:null};this.previewGroup=e,this.previewMode="single",this.showSnackBar(`\u{1F441}\uFE0F Aper\xE7u: ${this.formatItemName(t.id)}`)}formatItemName(t){return t.split("-").slice(1).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}exportToSVG(){console.log("=== Export SVG ===");let t=this.generatorService.currentLibrary();if(!t){this.showSnackBar("\u274C Aucune biblioth\xE8que \xE0 exporter","error");return}try{let e=this.svgExportService.exportLibraryToSVG(t);this.svgExportService.downloadSVG(e,"angular-architecture.svg"),this.showSnackBar("\u2705 Export SVG r\xE9ussi")}catch(e){console.error("Erreur export SVG:",e),this.showSnackBar("\u274C Erreur lors de l'export SVG","error")}}exportGroupToSVG(){if(console.log("=== Export SVG du groupe ==="),!this.previewGroup){this.showSnackBar("\u274C Aucun groupe \xE0 exporter","error");return}try{let t=this.svgExportService.exportGroupToSVG(this.previewGroup);this.svgExportService.downloadSVG(t,`${this.previewGroup.name}.svg`),this.showSnackBar("\u2705 Export SVG du groupe r\xE9ussi")}catch(t){console.error("Erreur export SVG:",t),this.showSnackBar("\u274C Erreur lors de l'export SVG","error")}}exportPreviewToPDF(){return ut(this,null,function*(){if(console.log("=== Export Pr\xE9visualisation PDF ==="),!this.previewGroup&&!this.generatorService.currentLibrary()){this.showSnackBar("\u274C Aucun contenu \xE0 exporter","error");return}try{let t=document.querySelector("app-excalidraw-preview canvas");if(t){let e=t.toDataURL("image/png"),{jsPDF:n}=yield import("./chunk-RFWUU32M.js"),i=new n({orientation:"landscape",unit:"px",format:[t.clientWidth,t.clientHeight]});i.addImage(e,"PNG",0,0,t.clientWidth,t.clientHeight),i.save("preview.pdf"),this.showSnackBar("\u2705 Export PDF r\xE9ussi")}else throw new Error("Canvas non trouv\xE9")}catch(t){console.error("\u274C Erreur export PDF:",t),this.showSnackBar("\u274C Erreur lors de l'export PDF","error")}})}exportLibraryToPDF(){return ut(this,null,function*(){console.log("=== Export Biblioth\xE8que PDF ===");let t=this.generatorService.currentLibrary();if(!t){this.showSnackBar("\u274C Aucune biblioth\xE8que \xE0 exporter","error");return}try{yield this.pdfExportService.exportLibraryToPDF(t,"angular-architecture.pdf"),this.showSnackBar("\u2705 Export PDF r\xE9ussi")}catch(e){console.error("\u274C Erreur export PDF:",e),this.showSnackBar("\u274C Erreur lors de l'export PDF","error")}})}openShareDialog(){console.log("=== Ouverture du dialogue de partage ===");let t=this.generatorService.currentLibrary();if(!t){this.showSnackBar("\u274C Aucune biblioth\xE8que \xE0 partager","error");return}import("./chunk-FGZ5WN3L.js").then(e=>{this.dialog.open(e.ShareDialogComponent,{width:"500px",data:t}).afterClosed().subscribe(i=>{console.log("Dialogue de partage ferm\xE9:",i)})}).catch(e=>{console.error("\u274C Erreur lors de l'ouverture du dialogue:",e),this.showSnackBar("\u274C Erreur lors de l'ouverture du dialogue","error")})}copyShareLink(){console.log("=== Copie du lien de partage ===");let t=this.generatorService.currentLibrary();if(!t){this.showSnackBar("\u274C Aucune biblioth\xE8que \xE0 partager","error");return}this.shareService.copyShareLink(t).then(()=>{this.showSnackBar(this.languageService.translate("MESSAGES.LINK_COPIED"))})}loadLibraryFromUrl(){let t=this.shareService.loadFromUrl();t&&(console.log("\u{1F4DA} Biblioth\xE8que charg\xE9e depuis l'URL"),this.generatorService._currentLibrary.set(t),this.showSnackBar("\u{1F4DA} Biblioth\xE8que charg\xE9e depuis le lien"))}setupKeyboardShortcuts(){if(console.log("=== Configuration des raccourcis clavier ==="),!this.keyboardShortcuts){console.error("\u274C KeyboardShortcutsService non disponible");return}this.keyboardShortcuts.shortcuts$.subscribe({next:t=>{console.log("\u{1F3AF} Raccourci re\xE7u:",t),this.handleShortcut(t)},error:t=>{console.error("\u274C Erreur dans les raccourcis:",t)}}),console.log("\u2705 Abonnement aux raccourcis configur\xE9")}handleShortcut(t){switch(console.log("=== Ex\xE9cution du raccourci:",t,"==="),t){case"generate":this.generateLibrary();break;case"export":this.openExportDialog();break;case"save":this.saveLibrary();break;case"export-pdf":this.exportLibraryToPDF();break;case"export-svg":this.exportToSVG();break;case"share-link":this.copyShareLink();break;case"docs":this.openDocs();break;default:console.warn("\u26A0\uFE0F Action inconnue:",t)}}saveLibrary(){let t=this.generatorService.currentLibrary();t?(this.storageService.saveLibrary(t),this.showSnackBar("\u{1F4BE} Biblioth\xE8que sauvegard\xE9e")):this.showSnackBar("\u274C Aucune biblioth\xE8que \xE0 sauvegarder","error")}openExportDialog(){console.log("=== Ouverture du dialogue d'export ===");let t=this.generatorService.currentLibrary();if(!t){this.showSnackBar("\u274C Aucune biblioth\xE8que \xE0 exporter","error");return}import("./chunk-AIFAI433.js").then(e=>{this.dialog.open(e.ExportDialogComponent,{width:"500px",data:t}).afterClosed().subscribe(i=>{i&&(console.log("Export effectu\xE9:",i),this.showSnackBar(`\u2705 Export\xE9 en ${i.format.toUpperCase()}`))})}).catch(e=>{console.error("\u274C Erreur lors de l'ouverture du dialogue:",e),this.showSnackBar("\u274C Erreur lors de l'ouverture du dialogue","error")})}toggleLanguage(){this.languageService.toggleLanguage();let t=this.languageService.currentLanguage();console.log(`\u{1F30D} Langue chang\xE9e: ${t}`)}t(t){return this.languageService.translate(t)}tp(t,e){return this.languageService.translateWithParams(t,e)}static \u0275fac=function(e){return new(e||a)(ee(Ut),ee(vr),ee(ri),ee(lr),ee(br),ee(oi),ee(si),ee(ci),ee(li),ee(yr),ee(Ht))};static \u0275cmp=V({type:a,selectors:[["app-root"]],viewQuery:function(e,n){if(e&1&&ge(Ll,5),e&2){let i;I(i=A())&&(n.tabGroup=i.first)}},decls:165,vars:117,consts:[["tabGroup",""],[1,"app-container"],["color","primary"],[1,"logo"],[1,"spacer"],["mat-icon-button","",3,"click"],["mat-icon-button","",3,"click","matTooltip","disabled"],["mat-icon-button","",3,"click","matTooltip"],["mat-icon-button","","matTooltip","Th\xE8me",3,"click"],["mat-raised-button","","matTooltip","G\xE9n\xE9rer (Ctrl+G)",3,"click","disabled"],["mat-raised-button","","matTooltip","Exporter (Ctrl+E)",3,"click","disabled"],[1,"content"],[3,"label"],[1,"tab-content"],[1,"component-header"],["appearance","outline",1,"search-field"],["matInput","","placeholder","Rechercher un composant...",3,"ngModelChange","ngModel"],["matSuffix",""],["appearance","outline",1,"category-field"],[3,"ngModelChange","ngModel"],["value","all"],["value","Components"],["value","Services"],["value","Routing"],["value","Signals"],["value","State Management"],["value","Ecosystem"],[1,"component-grid"],[1,"component-card"],[1,"templates-grid"],[1,"template-card"],[1,"preview-controls"],["appearance","fill"],["value","single"],["value","library"],[3,"group","library","groups"],[1,"library-header"],["mat-raised-button","","color","warn"],[1,"empty-state"],[1,"export-options"],["appearance","fill",1,"full-width"],["matInput","",3,"ngModelChange","ngModel"],[1,"export-actions"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","accent",3,"click"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button",""],["mat-raised-button","",3,"click"],[1,"component-icon"],["mat-button","",3,"click"],[1,"template-icon"],[3,"value"],[1,"library-stats"],[1,"library-items"],[1,"library-item"]],template:function(e,n){if(e&1){let i=Ee();c(0,"div",1)(1,"mat-toolbar",2)(2,"span",3),m(3,"\u{1F680} Angular Architecture Kit"),l(),ie(4,"span",4),c(5,"button",5),w("click",function(){return n.toggleLanguage()}),c(6,"mat-icon"),m(7,"language"),l(),c(8,"span"),m(9),u(10,"uppercase"),l()(),c(11,"button",6),u(12,"t"),w("click",function(){return n.openShareDialog()}),c(13,"mat-icon"),m(14,"share"),l()(),c(15,"button",6),u(16,"t"),w("click",function(){return n.copyShareLink()}),c(17,"mat-icon"),m(18,"link"),l()(),c(19,"button",7),u(20,"t"),w("click",function(){return n.openDocs()}),c(21,"mat-icon"),m(22,"help"),l()(),c(23,"button",7),u(24,"t"),w("click",function(){return n.openDocs()}),c(25,"mat-icon"),m(26,"help"),l()(),c(27,"button",7),u(28,"t"),w("click",function(){return n.openElementEditor()}),c(29,"mat-icon"),m(30,"edit"),l()(),c(31,"button",8),w("click",function(){return n.toggleTheme()}),c(32,"mat-icon"),m(33),l()(),c(34,"button",9),w("click",function(){return n.generateLibrary()}),c(35,"mat-icon"),m(36,"refresh"),l(),Y(37,Nl,2,3)(38,Fl,2,3),l(),c(39,"button",10),w("click",function(){return n.exportLibrary()}),c(40,"mat-icon"),m(41,"download"),l(),m(42),u(43,"t"),l()(),c(44,"main",11)(45,"mat-tab-group",null,0)(47,"mat-tab",12),u(48,"t"),c(49,"div",13)(50,"h2"),m(51),u(52,"t"),l(),c(53,"div",14)(54,"mat-form-field",15)(55,"mat-label"),m(56),u(57,"t"),l(),c(58,"input",16),Pt("ngModelChange",function(o){return z(i),Rt(n.searchTerm,o)||(n.searchTerm=o),G(o)}),l(),c(59,"mat-icon",17),m(60,"search"),l()(),c(61,"mat-form-field",18)(62,"mat-label"),m(63,"Cat\xE9gorie"),l(),c(64,"mat-select",19),Pt("ngModelChange",function(o){return z(i),Rt(n.selectedFilterCategory,o)||(n.selectedFilterCategory=o),G(o)}),c(65,"mat-option",20),m(66),u(67,"t"),l(),c(68,"mat-option",21),m(69,"Components"),l(),c(70,"mat-option",22),m(71,"Services"),l(),c(72,"mat-option",23),m(73,"Routing"),l(),c(74,"mat-option",24),m(75,"Signals"),l(),c(76,"mat-option",25),m(77,"State Management"),l(),c(78,"mat-option",26),m(79,"Ecosystem"),l()()()(),c(80,"div",27),Ue(81,Bl,22,10,"mat-card",28,as),l()()(),c(83,"mat-tab",12),u(84,"t"),c(85,"div",13)(86,"h2"),m(87,"\u{1F3D7}\uFE0F Templates d'architecture"),l(),c(88,"div",29),Ue(89,zl,17,7,"mat-card",30,rs),l()()(),c(91,"mat-tab",12),u(92,"t"),c(93,"div",13)(94,"h2"),m(95),u(96,"t"),l(),c(97,"div",31)(98,"mat-form-field",32)(99,"mat-label"),m(100),u(101,"t"),l(),c(102,"mat-select",19),Pt("ngModelChange",function(o){return z(i),Rt(n.previewMode,o)||(n.previewMode=o),G(o)}),w("ngModelChange",function(o){return n.onPreviewModeChange(o)}),c(103,"mat-option",33),m(104),u(105,"t"),l(),c(106,"mat-option",34),m(107),u(108,"t"),l()()(),Y(109,Vl,6,1,"mat-form-field",32),l(),ie(110,"app-excalidraw-preview",35),l()(),c(111,"mat-tab",12),u(112,"t"),c(113,"div",13)(114,"div",36)(115,"h2"),m(116),u(117,"t"),l(),Y(118,Hl,5,3,"button",37),l(),Y(119,jl,12,2)(120,$l,3,3,"p",38),l()(),c(121,"mat-tab",12),u(122,"t"),c(123,"div",13)(124,"h2"),m(125),u(126,"t"),l(),c(127,"div",39)(128,"mat-form-field",40)(129,"mat-label"),m(130),u(131,"t"),l(),c(132,"input",41),Pt("ngModelChange",function(o){return z(i),Rt(n.exportFilename,o)||(n.exportFilename=o),G(o)}),l()(),c(133,"h3"),m(134),u(135,"t"),l(),c(136,"div",42)(137,"button",43),w("click",function(){return n.exportLibrary()}),c(138,"mat-icon"),m(139,"download"),l(),m(140),u(141,"t"),l(),c(142,"button",44),w("click",function(){return n.exportToSVG()}),c(143,"mat-icon"),m(144,"brush"),l(),m(145),u(146,"t"),l(),c(147,"button",45),w("click",function(){return n.exportLibraryToPDF()}),c(148,"mat-icon"),m(149,"picture_as_pdf"),l(),m(150),u(151,"t"),l(),Y(152,ql,4,0,"button",46),Y(153,Ql,4,0,"button",46),c(154,"button",47),w("click",function(){return n.copyToClipboard()}),c(155,"mat-icon"),m(156,"content_copy"),l(),m(157),u(158,"t"),l()()()()(),c(159,"mat-tab",12),u(160,"t"),ie(161,"app-docs"),l(),c(162,"mat-tab",12),u(163,"t"),ie(164,"app-statistics"),l()()()()}if(e&2){let i;p(9),_(g(10,59,n.languageService.currentLanguage())),p(2),D("matTooltip",Me(g(12,61,"TOOLBAR.SHARE")))("disabled",!n.generatorService.currentLibrary()),p(4),D("matTooltip",Me(g(16,63,"TOOLBAR.COPY_LINK")))("disabled",!n.generatorService.currentLibrary()),p(4),D("matTooltip",Me(g(20,65,"TOOLBAR.DOCUMENTATION"))),p(4),D("matTooltip",Me(g(24,67,"TOOLBAR.DOCUMENTATION"))),p(4),D("matTooltip",Me(g(28,69,"TOOLBAR.EDITOR"))),p(6),_(n.themeService.theme()==="dark"?"light_mode":"dark_mode"),p(),D("disabled",n.generatorService.isGenerating()),p(3),Z(n.generatorService.isGenerating()?37:38),p(2),D("disabled",!n.generatorService.currentLibrary()),p(3),O(" ",g(43,71,"TOOLBAR.EXPORT")," "),p(5),D("label",Me(g(48,73,"TABS.COMPONENTS"))),p(4),_(g(52,75,"COMPONENTS.TITLE")),p(5),_(g(57,77,"COMPONENTS.SEARCH_PLACEHOLDER")),p(2),Dt("ngModel",n.searchTerm),p(6),Dt("ngModel",n.selectedFilterCategory),p(2),_(g(67,79,"COMPONENTS.ALL_CATEGORIES")),p(15),je(n.getFilteredComponents()),p(2),D("label",Me(g(84,81,"TABS.TEMPLATES"))),p(6),je(n.architectureTemplates),p(2),D("label",Me(g(92,83,"TABS.PREVIEW"))),p(4),_(g(96,85,"PREVIEW.TITLE")),p(5),_(g(101,87,"PREVIEW.TYPE")),p(2),Dt("ngModel",n.previewMode),p(2),_(g(105,89,"PREVIEW.SINGLE_ELEMENT")),p(3),_(g(108,91,"PREVIEW.FULL_LIBRARY")),p(2),Z(n.previewMode==="single"?109:-1),p(),D("group",n.previewGroup)("library",n.previewLibrary)("groups",n.previewGroups),p(),D("label",Me(g(112,93,"TABS.LIBRARY"))),p(5),_(g(117,95,"LIBRARY.TITLE")),p(2),Z(n.generatorService.currentLibrary()?118:-1),p(),Z((i=n.generatorService.currentLibrary())?119:120,i),p(2),D("label",Me(g(122,97,"TABS.EXPORT"))),p(4),_(g(126,99,"EXPORT.TITLE")),p(5),_(g(131,101,"EXPORT.FILENAME")),p(2),Dt("ngModel",n.exportFilename),p(2),_(g(135,103,"EXPORT.FORMATS_TITLE")),p(6),O(" ",g(141,105,"EXPORT.DOWNLOAD_EXCALIDRAW")," "),p(5),O(" ",g(146,107,"EXPORT.EXPORT_SVG")," "),p(5),O(" ",g(151,109,"EXPORT.EXPORT_PDF")," "),p(2),Z(n.previewGroup?152:-1),p(),Z(n.previewGroup?153:-1),p(4),O(" ",g(158,111,"EXPORT.COPY_JSON")," "),p(2),D("label",Me(g(160,113,"TABS.DOCUMENTATION"))),p(3),D("label",Me(g(163,115,"TABS.STATISTICS")))}},dependencies:[ot,ja,Ga,Ha,Ua,Zo,Yo,Ot,Xa,Cn,ct,st,Gt,Xn,Co,Yn,So,xo,Eo,Xo,sa,Ko,mr,nr,er,tr,hr,pr,wo,Oo,Po,ur,_r,fr,gr,ir,_i,dr,Ho,yo,Mn,kn,Jn,ii,ei,ti,La,ai,dt],styles:["[_nghost-%COMP%]{display:block;height:100vh}.app-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.spacer[_ngcontent-%COMP%]{flex:1}.logo[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:500}.content[_ngcontent-%COMP%]{flex:1;overflow-y:auto;padding:24px;background:#fafafa}.tab-content[_ngcontent-%COMP%]{padding:24px;min-height:400px}h2[_ngcontent-%COMP%]{margin-top:0;color:#333}.component-header[_ngcontent-%COMP%]{display:flex;gap:16px;margin-bottom:24px}.component-header[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%]{flex:2}.component-header[_ngcontent-%COMP%]   .category-field[_ngcontent-%COMP%]{flex:1}.component-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px}.component-card[_ngcontent-%COMP%]{transition:transform .2s,box-shadow .2s}.component-card[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 4px 12px #00000026}.component-icon[_ngcontent-%COMP%]{font-size:24px;margin-right:8px}.templates-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:24px}.template-icon[_ngcontent-%COMP%]{font-size:48px;margin:16px;text-align:center}.library-items[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:16px;margin-top:16px}.empty-state[_ngcontent-%COMP%]{text-align:center;padding:48px;color:#999;font-size:1.1rem}.full-width[_ngcontent-%COMP%]{width:100%}.export-actions[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;margin-top:24px}.preview-controls[_ngcontent-%COMP%]{display:flex;gap:16px;margin-bottom:16px}.preview-controls[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{min-width:200px}.language-indicator[_ngcontent-%COMP%]{font-size:.7rem;font-weight:700;margin-left:2px}"],changeDetection:0})};var pa="Service workers are disabled or not supported by this browser",jt=class{serviceWorker;worker;registration;events;constructor(t,e){if(this.serviceWorker=t,!t)this.worker=this.events=this.registration=new wt(n=>n.error(new R(5601,!1)));else{let n=null,i=new se;this.worker=new wt(h=>(n!==null&&h.next(n),i.subscribe(f=>h.next(f))));let r=()=>{let{controller:h}=t;h!==null&&(n=h,i.next(n))};t.addEventListener("controllerchange",r),r(),this.registration=this.worker.pipe(bt(()=>t.getRegistration().then(h=>{if(!h)throw new R(5601,!1);return h})));let o=new se;this.events=o.asObservable();let s=h=>{let{data:f}=h;f?.type&&o.next(f)};t.addEventListener("message",s),e?.get(gi,null,{optional:!0})?.onDestroy(()=>{t.removeEventListener("controllerchange",r),t.removeEventListener("message",s)})}}postMessage(t,e){return new Promise(n=>{this.worker.pipe(nt(1)).subscribe(i=>{i.postMessage(le({action:t},e)),n()})})}postMessageWithOperation(t,e,n){let i=this.waitForOperationCompleted(n),r=this.postMessage(t,e);return Promise.all([r,i]).then(([,o])=>o)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(t){let e;return typeof t=="string"?e=n=>n.type===t:e=n=>t.includes(n.type),this.events.pipe(He(e))}nextEventOfType(t){return this.eventsOfType(t).pipe(nt(1))}waitForOperationCompleted(t){return new Promise((e,n)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(He(i=>i.nonce===t),nt(1),gt(i=>{if(i.result!==void 0)return i.result;throw new Error(i.error)})).subscribe({next:e,error:n})})}get isEnabled(){return!!this.serviceWorker}},Wl=(()=>{class a{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new se;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=tt,this.notificationClicks=tt,this.notificationCloses=tt,this.pushSubscriptionChanges=tt,this.subscription=tt;return}this.messages=this.sw.eventsOfType("PUSH").pipe(gt(i=>i.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(gt(i=>i.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(gt(i=>i.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(gt(i=>i.data)),this.pushManager=this.sw.registration.pipe(gt(i=>i.pushManager));let n=this.pushManager.pipe(bt(i=>i.getSubscription()));this.subscription=new wt(i=>{let r=n.subscribe(i),o=this.subscriptionChanges.subscribe(i);return()=>{r.unsubscribe(),o.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(pa));let n={userVisibleOnly:!0},i=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),r=new Uint8Array(new ArrayBuffer(i.length));for(let o=0;o<i.length;o++)r[o]=i.charCodeAt(o);return n.applicationServerKey=r,new Promise((o,s)=>{this.pushManager.pipe(bt(d=>d.subscribe(n)),nt(1)).subscribe({next:d=>{this.subscriptionChanges.next(d),o(d)},error:s})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(pa));let e=n=>{if(n===null)throw new R(5602,!1);return n.unsubscribe().then(i=>{if(!i)throw new R(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((n,i)=>{this.subscription.pipe(nt(1),bt(e)).subscribe({next:n,error:i})})}decodeBase64(e){return atob(e)}static \u0275fac=function(n){return new(n||a)(ke(jt))};static \u0275prov=K({token:a,factory:a.\u0275fac})}return a})(),Kl=(()=>{class a{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=tt,this.unrecoverable=tt;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(pa));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let e=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new R(5601,!1));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(n){return new(n||a)(ke(jt))};static \u0275prov=K({token:a,factory:a.\u0275fac})}return a})(),ss=new j("");function Xl(){let a=b(un);if(!("serviceWorker"in navigator&&a.enabled!==!1))return;let t=b(ss),e=b(de),n=b(gi);e.runOutsideAngular(()=>{let i=navigator.serviceWorker,r=()=>i.controller?.postMessage({action:"INITIALIZE"});i.addEventListener("controllerchange",r),n.onDestroy(()=>{i.removeEventListener("controllerchange",r)})}),e.runOutsideAngular(()=>{let i,{registrationStrategy:r}=a;if(typeof r=="function")i=new Promise(o=>r().subscribe(()=>o()));else{let[o,...s]=(r||"registerWhenStable:30000").split(":");switch(o){case"registerImmediately":i=Promise.resolve();break;case"registerWithDelay":i=os(+s[0]||0);break;case"registerWhenStable":i=Promise.race([n.whenStable(),os(+s[0])]);break;default:throw new R(5600,!1)}}i.then(()=>{n.destroyed||navigator.serviceWorker.register(t,{scope:a.scope,updateViaCache:a.updateViaCache,type:a.type}).catch(o=>console.error(xa(5604,!1)))})})}function os(a){return new Promise(t=>setTimeout(t,a))}function Yl(){let a=b(un),t=b(_t),e=!0;return new jt(e&&a.enabled!==!1?navigator.serviceWorker:void 0,t)}var un=class{enabled;updateViaCache;type;scope;registrationStrategy};function cs(a,t={}){return Ca([Wl,Kl,{provide:ss,useValue:a},{provide:un,useValue:t},{provide:jt,useFactory:Yl},Ma(Xl)])}Fa(di,{providers:[Pa({eventCoalescing:!0}),vo(),cs("ngsw-worker.js",{enabled:!Oa(),registrationStrategy:"registerWhenStable:30000"})]}).catch(a=>console.error(a));
