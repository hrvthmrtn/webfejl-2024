import{$ as f,A as te,Aa as A,Ba as R,E as P,G as W,Ga as Me,Ha as ie,I as ke,Ia as Ce,R as $,S as xe,V as z,Wa as y,_ as h,ba as D,c as K,da as c,dc as Z,ea as E,eb as G,f as x,g as Ae,ia as v,jb as g,jc as I,ka as p,la as F,n as we,nb as Ne,r as O,s as De,v as Te,vc as Oe}from"./chunk-3S4G5SJL.js";import{a as u}from"./chunk-CQCHLVVT.js";var se;try{se=typeof Intl<"u"&&Intl.v8BreakIterator}catch{se=!1}var _=(()=>{let e=class e{constructor(t){this._platformId=t,this.isBrowser=this._platformId?Oe(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||se)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};e.\u0275fac=function(n){return new(n||e)(c(Me))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var L,Fe=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function zt(){if(L)return L;if(typeof document!="object"||!document)return L=new Set(Fe),L;let i=document.createElement("input");return L=new Set(Fe.filter(e=>(i.setAttribute("type",e),i.type===e))),L}var B;function nt(){if(B==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>B=!0}))}finally{B=B||!1}return B}function S(i){return nt()?i:!!i.capture}var U=function(i){return i[i.NORMAL=0]="NORMAL",i[i.NEGATED=1]="NEGATED",i[i.INVERTED=2]="INVERTED",i}(U||{}),Y,M;function Gt(){if(M==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return M=!1,M;if("scrollBehavior"in document.documentElement.style)M=!0;else{let i=Element.prototype.scrollTo;i?M=!/\{\s*\[native code\]\s*\}/.test(i.toString()):M=!1}}return M}function Zt(){if(typeof document!="object"||!document)return U.NORMAL;if(Y==null){let i=document.createElement("div"),e=i.style;i.dir="rtl",e.width="1px",e.overflow="auto",e.visibility="hidden",e.pointerEvents="none",e.position="absolute";let s=document.createElement("div"),t=s.style;t.width="2px",t.height="1px",i.appendChild(s),document.body.appendChild(i),Y=U.NORMAL,i.scrollLeft===0&&(i.scrollLeft=1,Y=i.scrollLeft===0?U.NEGATED:U.INVERTED),i.remove()}return Y}var ne;function st(){if(ne==null){let i=typeof document<"u"?document.head:null;ne=!!(i&&(i.createShadowRoot||i.attachShadow))}return ne}function Re(i){if(st()){let e=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&e instanceof ShadowRoot)return e}return null}function T(i){return i.composedPath?i.composedPath()[0]:i.target}function Le(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function Yt(i,...e){return e.length?e.some(s=>i[s]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}function ot(i){return i!=null&&`${i}`!="false"}function re(i,e=0){return rt(i)?Number(i):e}function rt(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}function ae(i){return Array.isArray(i)?i:[i]}function qt(i){return i==null?"":typeof i=="string"?i:`${i}px`}function w(i){return i instanceof A?i.nativeElement:i}function at(i){if(i.type==="characterData"&&i.target instanceof Comment)return!0;if(i.type==="childList"){for(let e=0;e<i.addedNodes.length;e++)if(!(i.addedNodes[e]instanceof Comment))return!1;for(let e=0;e<i.removedNodes.length;e++)if(!(i.removedNodes[e]instanceof Comment))return!1;return!0}return!1}var Se=(()=>{let e=class e{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),ct=(()=>{let e=class e{constructor(t){this._mutationObserverFactory=t,this._observedElements=new Map}ngOnDestroy(){this._observedElements.forEach((t,n)=>this._cleanupObserver(n))}observe(t){let n=w(t);return new K(o=>{let a=this._observeElement(n).pipe(O(d=>d.filter(m=>!at(m))),te(d=>!!d.length)).subscribe(o);return()=>{a.unsubscribe(),this._unobserveElement(n)}})}_observeElement(t){if(this._observedElements.has(t))this._observedElements.get(t).count++;else{let n=new x,o=this._mutationObserverFactory.create(r=>n.next(r));o&&o.observe(t,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(t,{observer:o,stream:n,count:1})}return this._observedElements.get(t).stream}_unobserveElement(t){this._observedElements.has(t)&&(this._observedElements.get(t).count--,this._observedElements.get(t).count||this._cleanupObserver(t))}_cleanupObserver(t){if(this._observedElements.has(t)){let{observer:n,stream:o}=this._observedElements.get(t);n&&n.disconnect(),o.complete(),this._observedElements.delete(t)}}};e.\u0275fac=function(n){return new(n||e)(c(Se))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),di=(()=>{let e=class e{get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._disabled?this._unsubscribe():this._subscribe()}get debounce(){return this._debounce}set debounce(t){this._debounce=re(t),this._subscribe()}constructor(t,n,o){this._contentObserver=t,this._elementRef=n,this._ngZone=o,this.event=new R,this._disabled=!1,this._currentSubscription=null}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let t=this._contentObserver.observe(this._elementRef);this._ngZone.runOutsideAngular(()=>{this._currentSubscription=(this.debounce?t.pipe(P(this.debounce)):t).subscribe(this.event)})}_unsubscribe(){this._currentSubscription?.unsubscribe()}};e.\u0275fac=function(n){return new(n||e)(y(ct),y(A),y(g))},e.\u0275dir=F({type:e,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[v.HasDecoratorInputTransform,"cdkObserveContentDisabled","disabled",Z],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"],standalone:!0,features:[G]});let i=e;return i})(),li=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=p({type:e}),e.\u0275inj=f({providers:[Se]});let i=e;return i})();var je=new Set,C,dt=(()=>{let e=class e{constructor(t,n){this._platform=t,this._nonce=n,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):ht}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&lt(t,this._nonce),this._matchMedia(t)}};e.\u0275fac=function(n){return new(n||e)(c(_),c(Ce,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function lt(i,e){if(!je.has(i))try{C||(C=document.createElement("style"),e&&C.setAttribute("nonce",e),C.setAttribute("type","text/css"),document.head.appendChild(C)),C.sheet&&(C.sheet.insertRule(`@media ${i} {body{ }}`,0),je.add(i))}catch(s){console.error(s)}}function ht(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var Be=(()=>{let e=class e{constructor(t,n){this._mediaMatcher=t,this._zone=n,this._queries=new Map,this._destroySubject=new x}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return Pe(ae(t)).some(o=>this._registerQuery(o).mql.matches)}observe(t){let o=Pe(ae(t)).map(a=>this._registerQuery(a).observable),r=De(o);return r=Te(r.pipe(W(1)),r.pipe($(1),P(0))),r.pipe(O(a=>{let d={matches:!1,breakpoints:{}};return a.forEach(({matches:m,query:l})=>{d.matches=d.matches||m,d.breakpoints[l]=m}),d}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let n=this._mediaMatcher.matchMedia(t),r={observable:new K(a=>{let d=m=>this._zone.run(()=>a.next(m));return n.addListener(d),()=>{n.removeListener(d)}}).pipe(xe(n),O(({matches:a})=>({query:t,matches:a})),z(this._destroySubject)),mql:n};return this._queries.set(t,r),r}};e.\u0275fac=function(n){return new(n||e)(c(dt),c(g))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function Pe(i){return i.map(e=>e.split(",")).reduce((e,s)=>e.concat(s)).map(e=>e.trim())}var ut=(()=>{let e=class e{constructor(t){this._platform=t}isDisabled(t){return t.hasAttribute("disabled")}isVisible(t){return ft(t)&&getComputedStyle(t).visibility==="visible"}isTabbable(t){if(!this._platform.isBrowser)return!1;let n=mt(It(t));if(n&&(Ue(n)===-1||!this.isVisible(n)))return!1;let o=t.nodeName.toLowerCase(),r=Ue(t);return t.hasAttribute("contenteditable")?r!==-1:o==="iframe"||o==="object"||this._platform.WEBKIT&&this._platform.IOS&&!yt(t)?!1:o==="audio"?t.hasAttribute("controls")?r!==-1:!1:o==="video"?r===-1?!1:r!==null?!0:this._platform.FIREFOX||t.hasAttribute("controls"):t.tabIndex>=0}isFocusable(t,n){return Et(t)&&!this.isDisabled(t)&&(n?.ignoreVisibility||this.isVisible(t))}};e.\u0275fac=function(n){return new(n||e)(c(_))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function mt(i){try{return i.frameElement}catch{return null}}function ft(i){return!!(i.offsetWidth||i.offsetHeight||typeof i.getClientRects=="function"&&i.getClientRects().length)}function pt(i){let e=i.nodeName.toLowerCase();return e==="input"||e==="select"||e==="button"||e==="textarea"}function gt(i){return bt(i)&&i.type=="hidden"}function _t(i){return vt(i)&&i.hasAttribute("href")}function bt(i){return i.nodeName.toLowerCase()=="input"}function vt(i){return i.nodeName.toLowerCase()=="a"}function Ke(i){if(!i.hasAttribute("tabindex")||i.tabIndex===void 0)return!1;let e=i.getAttribute("tabindex");return!!(e&&!isNaN(parseInt(e,10)))}function Ue(i){if(!Ke(i))return null;let e=parseInt(i.getAttribute("tabindex")||"",10);return isNaN(e)?-1:e}function yt(i){let e=i.nodeName.toLowerCase(),s=e==="input"&&i.type;return s==="text"||s==="password"||e==="select"||e==="textarea"}function Et(i){return gt(i)?!1:pt(i)||_t(i)||i.hasAttribute("contenteditable")||Ke(i)}function It(i){return i.ownerDocument&&i.ownerDocument.defaultView||window}var de=class{get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}constructor(e,s,t,n,o=!1){this._element=e,this._checker=s,this._ngZone=t,this._document=n,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,o||this.attachAnchors()}destroy(){let e=this._startAnchor,s=this._endAnchor;e&&(e.removeEventListener("focus",this.startAnchorListener),e.remove()),s&&(s.removeEventListener("focus",this.endAnchorListener),s.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(e){return new Promise(s=>{this._executeOnStable(()=>s(this.focusInitialElement(e)))})}focusFirstTabbableElementWhenReady(e){return new Promise(s=>{this._executeOnStable(()=>s(this.focusFirstTabbableElement(e)))})}focusLastTabbableElementWhenReady(e){return new Promise(s=>{this._executeOnStable(()=>s(this.focusLastTabbableElement(e)))})}_getRegionBoundary(e){let s=this._element.querySelectorAll(`[cdk-focus-region-${e}], [cdkFocusRegion${e}], [cdk-focus-${e}]`);return e=="start"?s.length?s[0]:this._getFirstTabbableElement(this._element):s.length?s[s.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(e){let s=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(s){if(!this._checker.isFocusable(s)){let t=this._getFirstTabbableElement(s);return t?.focus(e),!!t}return s.focus(e),!0}return this.focusFirstTabbableElement(e)}focusFirstTabbableElement(e){let s=this._getRegionBoundary("start");return s&&s.focus(e),!!s}focusLastTabbableElement(e){let s=this._getRegionBoundary("end");return s&&s.focus(e),!!s}hasAttached(){return this._hasAttached}_getFirstTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let s=e.children;for(let t=0;t<s.length;t++){let n=s[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(s[t]):null;if(n)return n}return null}_getLastTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let s=e.children;for(let t=s.length-1;t>=0;t--){let n=s[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(s[t]):null;if(n)return n}return null}_createAnchor(){let e=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,e),e.classList.add("cdk-visually-hidden"),e.classList.add("cdk-focus-trap-anchor"),e.setAttribute("aria-hidden","true"),e}_toggleAnchorTabIndex(e,s){e?s.setAttribute("tabindex","0"):s.removeAttribute("tabindex")}toggleAnchors(e){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_executeOnStable(e){this._ngZone.isStable?e():this._ngZone.onStable.pipe(W(1)).subscribe(e)}},Zi=(()=>{let e=class e{constructor(t,n,o){this._checker=t,this._ngZone=n,this._document=o}create(t,n=!1){return new de(t,this._checker,this._ngZone,this._document,n)}};e.\u0275fac=function(n){return new(n||e)(c(ut),c(g),c(I))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function le(i){return i.buttons===0||i.detail===0}function he(i){let e=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!e&&e.identifier===-1&&(e.radiusX==null||e.radiusX===1)&&(e.radiusY==null||e.radiusY===1)}var At=new D("cdk-input-modality-detector-options"),wt={ignoreKeys:[18,17,224,91,16]},We=650,j=S({passive:!0,capture:!0}),Dt=(()=>{let e=class e{get mostRecentModality(){return this._modality.value}constructor(t,n,o,r){this._platform=t,this._mostRecentTarget=null,this._modality=new Ae(null),this._lastTouchMs=0,this._onKeydown=a=>{this._options?.ignoreKeys?.some(d=>d===a.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=T(a))},this._onMousedown=a=>{Date.now()-this._lastTouchMs<We||(this._modality.next(le(a)?"keyboard":"mouse"),this._mostRecentTarget=T(a))},this._onTouchstart=a=>{if(he(a)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=T(a)},this._options=u(u({},wt),r),this.modalityDetected=this._modality.pipe($(1)),this.modalityChanged=this.modalityDetected.pipe(ke()),t.isBrowser&&n.runOutsideAngular(()=>{o.addEventListener("keydown",this._onKeydown,j),o.addEventListener("mousedown",this._onMousedown,j),o.addEventListener("touchstart",this._onTouchstart,j)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,j),document.removeEventListener("mousedown",this._onMousedown,j),document.removeEventListener("touchstart",this._onTouchstart,j))}};e.\u0275fac=function(n){return new(n||e)(c(_),c(g),c(I),c(At,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var X=function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i}(X||{}),Tt=new D("cdk-focus-monitor-default-options"),Q=S({passive:!0,capture:!0}),Yi=(()=>{let e=class e{constructor(t,n,o,r,a){this._ngZone=t,this._platform=n,this._inputModalityDetector=o,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new x,this._rootNodeFocusAndBlurListener=d=>{let m=T(d);for(let l=m;l;l=l.parentElement)d.type==="focus"?this._onFocus(d,l):this._onBlur(d,l)},this._document=r,this._detectionMode=a?.detectionMode||X.IMMEDIATE}monitor(t,n=!1){let o=w(t);if(!this._platform.isBrowser||o.nodeType!==1)return we();let r=Re(o)||this._getDocument(),a=this._elementInfo.get(o);if(a)return n&&(a.checkChildren=!0),a.subject;let d={checkChildren:n,subject:new x,rootNode:r};return this._elementInfo.set(o,d),this._registerGlobalListeners(d),d.subject}stopMonitoring(t){let n=w(t),o=this._elementInfo.get(n);o&&(o.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(o))}focusVia(t,n,o){let r=w(t),a=this._getDocument().activeElement;r===a?this._getClosestElementsInfo(r).forEach(([d,m])=>this._originChanged(d,n,m)):(this._setOrigin(n),typeof r.focus=="function"&&r.focus(o))}ngOnDestroy(){this._elementInfo.forEach((t,n)=>this.stopMonitoring(n))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===X.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,n){t.classList.toggle("cdk-focused",!!n),t.classList.toggle("cdk-touch-focused",n==="touch"),t.classList.toggle("cdk-keyboard-focused",n==="keyboard"),t.classList.toggle("cdk-mouse-focused",n==="mouse"),t.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(t,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&n,this._detectionMode===X.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?We:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(t,n){let o=this._elementInfo.get(n),r=T(t);!o||!o.checkChildren&&n!==r||this._originChanged(n,this._getFocusOrigin(r),o)}_onBlur(t,n){let o=this._elementInfo.get(n);!o||o.checkChildren&&t.relatedTarget instanceof Node&&n.contains(t.relatedTarget)||(this._setClasses(n),this._emitOrigin(o,null))}_emitOrigin(t,n){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(n))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let n=t.rootNode,o=this._rootNodeFocusListenerCount.get(n)||0;o||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,Q),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,Q)}),this._rootNodeFocusListenerCount.set(n,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(z(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(t){let n=t.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let o=this._rootNodeFocusListenerCount.get(n);o>1?this._rootNodeFocusListenerCount.set(n,o-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Q),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Q),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,n,o){this._setClasses(t,n),this._emitOrigin(o,n),this._lastFocusOrigin=n}_getClosestElementsInfo(t){let n=[];return this._elementInfo.forEach((o,r)=>{(r===t||o.checkChildren&&r.contains(t))&&n.push([r,o])}),n}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:n,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!n||n===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let r=t.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(n))return!0}return!1}};e.\u0275fac=function(n){return new(n||e)(c(g),c(_),c(Dt),c(I,8),c(Tt,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var N=function(i){return i[i.NONE=0]="NONE",i[i.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",i[i.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",i}(N||{}),Ve="cdk-high-contrast-black-on-white",He="cdk-high-contrast-white-on-black",ce="cdk-high-contrast-active",$e=(()=>{let e=class e{constructor(t,n){this._platform=t,this._document=n,this._breakpointSubscription=E(Be).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return N.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let n=this._document.defaultView||window,o=n&&n.getComputedStyle?n.getComputedStyle(t):null,r=(o&&o.backgroundColor||"").replace(/ /g,"");switch(t.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return N.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return N.BLACK_ON_WHITE}return N.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(ce,Ve,He),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===N.BLACK_ON_WHITE?t.add(ce,Ve):n===N.WHITE_ON_BLACK&&t.add(ce,He)}}};e.\u0275fac=function(n){return new(n||e)(c(_),c(I))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var Ct=new D("cdk-dir-doc",{providedIn:"root",factory:Nt});function Nt(){return E(I)}var Ot=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Ft(i){let e=i?.toLowerCase()||"";return e==="auto"&&typeof navigator<"u"&&navigator?.language?Ot.test(navigator.language)?"rtl":"ltr":e==="rtl"?"rtl":"ltr"}var an=(()=>{let e=class e{constructor(t){if(this.value="ltr",this.change=new R,t){let n=t.body?t.body.dir:null,o=t.documentElement?t.documentElement.dir:null;this.value=Ft(n||o||"ltr")}}ngOnDestroy(){this.change.complete()}};e.\u0275fac=function(n){return new(n||e)(c(Ct,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var ue=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=p({type:e}),e.\u0275inj=f({});let i=e;return i})();function Rt(){return!0}var Lt=new D("mat-sanity-checks",{providedIn:"root",factory:Rt}),J=(()=>{let e=class e{constructor(t,n,o){this._sanityChecks=n,this._document=o,this._hasDoneGlobalChecks=!1,t._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(t){return Le()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[t]}};e.\u0275fac=function(n){return new(n||e)(c($e),c(Lt,8),c(I))},e.\u0275mod=p({type:e}),e.\u0275inj=f({imports:[ue,ue]});let i=e;return i})();var ze=class{constructor(e,s,t,n,o){this._defaultMatcher=e,this.ngControl=s,this._parentFormGroup=t,this._parentForm=n,this._stateChanges=o,this.errorState=!1}updateErrorState(){let e=this.errorState,s=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,n=this.ngControl?this.ngControl.control:null,o=t?.isErrorState(n,s)??!1;o!==e&&(this.errorState=o,this._stateChanges.next())}};var Yn=(()=>{let e=class e{isErrorState(t,n){return!!(t&&t.invalid&&(t.touched||n&&n.submitted))}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var b=function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i}(b||{}),pe=class{constructor(e,s,t,n=!1){this._renderer=e,this.element=s,this.config=t,this._animationForciblyDisabledThroughCss=n,this.state=b.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}},Ge=S({passive:!0,capture:!0}),ge=class{constructor(){this._events=new Map,this._delegateEventHandler=e=>{let s=T(e);s&&this._events.get(e.type)?.forEach((t,n)=>{(n===s||n.contains(s))&&t.forEach(o=>o.handleEvent(e))})}}addHandler(e,s,t,n){let o=this._events.get(s);if(o){let r=o.get(t);r?r.add(n):o.set(t,new Set([n]))}else this._events.set(s,new Map([[t,new Set([n])]])),e.runOutsideAngular(()=>{document.addEventListener(s,this._delegateEventHandler,Ge)})}removeHandler(e,s,t){let n=this._events.get(e);if(!n)return;let o=n.get(s);o&&(o.delete(t),o.size===0&&n.delete(s),n.size===0&&(this._events.delete(e),document.removeEventListener(e,this._delegateEventHandler,Ge)))}},Ze={enterDuration:225,exitDuration:150},St=800,Ye=S({passive:!0,capture:!0}),Qe=["mousedown","touchstart"],Xe=["mouseup","mouseleave","touchend","touchcancel"],H=class H{constructor(e,s,t,n){this._target=e,this._ngZone=s,this._platform=n,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,n.isBrowser&&(this._containerElement=w(t))}fadeInRipple(e,s,t={}){let n=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=u(u({},Ze),t.animation);t.centered&&(e=n.left+n.width/2,s=n.top+n.height/2);let r=t.radius||jt(e,s,n),a=e-n.left,d=s-n.top,m=o.enterDuration,l=document.createElement("div");l.classList.add("mat-ripple-element"),l.style.left=`${a-r}px`,l.style.top=`${d-r}px`,l.style.height=`${r*2}px`,l.style.width=`${r*2}px`,t.color!=null&&(l.style.backgroundColor=t.color),l.style.transitionDuration=`${m}ms`,this._containerElement.appendChild(l);let be=window.getComputedStyle(l),it=be.transitionProperty,ve=be.transitionDuration,ee=it==="none"||ve==="0s"||ve==="0s, 0s"||n.width===0&&n.height===0,k=new pe(this,l,t,ee);l.style.transform="scale3d(1, 1, 1)",k.state=b.FADING_IN,t.persistent||(this._mostRecentTransientRipple=k);let ye=null;return!ee&&(m||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Ee=()=>this._finishRippleTransition(k),Ie=()=>this._destroyRipple(k);l.addEventListener("transitionend",Ee),l.addEventListener("transitioncancel",Ie),ye={onTransitionEnd:Ee,onTransitionCancel:Ie}}),this._activeRipples.set(k,ye),(ee||!m)&&this._finishRippleTransition(k),k}fadeOutRipple(e){if(e.state===b.FADING_OUT||e.state===b.HIDDEN)return;let s=e.element,t=u(u({},Ze),e.config.animation);s.style.transitionDuration=`${t.exitDuration}ms`,s.style.opacity="0",e.state=b.FADING_OUT,(e._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){let s=w(e);!this._platform.isBrowser||!s||s===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=s,Qe.forEach(t=>{H._eventManager.addHandler(this._ngZone,t,s,this)}))}handleEvent(e){e.type==="mousedown"?this._onMousedown(e):e.type==="touchstart"?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Xe.forEach(s=>{this._triggerElement.addEventListener(s,this,Ye)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(e){e.state===b.FADING_IN?this._startFadeOutTransition(e):e.state===b.FADING_OUT&&this._destroyRipple(e)}_startFadeOutTransition(e){let s=e===this._mostRecentTransientRipple,{persistent:t}=e.config;e.state=b.VISIBLE,!t&&(!s||!this._isPointerDown)&&e.fadeOut()}_destroyRipple(e){let s=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=b.HIDDEN,s!==null&&(e.element.removeEventListener("transitionend",s.onTransitionEnd),e.element.removeEventListener("transitioncancel",s.onTransitionCancel)),e.element.remove()}_onMousedown(e){let s=le(e),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+St;!this._target.rippleDisabled&&!s&&!t&&(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!he(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let s=e.changedTouches;if(s)for(let t=0;t<s.length;t++)this.fadeInRipple(s[t].clientX,s[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{let s=e.state===b.VISIBLE||e.config.terminateOnPointerUp&&e.state===b.FADING_IN;!e.config.persistent&&s&&e.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let e=this._triggerElement;e&&(Qe.forEach(s=>H._eventManager.removeHandler(s,e,this)),this._pointerUpEventsRegistered&&Xe.forEach(s=>e.removeEventListener(s,this,Ye)))}};H._eventManager=new ge;var _e=H;function jt(i,e,s){let t=Math.max(Math.abs(i-s.left),Math.abs(i-s.right)),n=Math.max(Math.abs(e-s.top),Math.abs(e-s.bottom));return Math.sqrt(t*t+n*n)}var tt=new D("mat-ripple-global-options"),Pt=(()=>{let e=class e{get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}constructor(t,n,o,r,a){this._elementRef=t,this._animationMode=a,this.radius=0,this._disabled=!1,this._isInitialized=!1,this._globalOptions=r||{},this._rippleRenderer=new _e(this,n,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:u(u(u({},this._globalOptions.animation),this._animationMode==="NoopAnimations"?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,n=0,o){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,n,u(u({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,u(u({},this.rippleConfig),t))}};e.\u0275fac=function(n){return new(n||e)(y(A),y(g),y(_),y(tt,8),y(ie,8))},e.\u0275dir=F({type:e,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(n,o){n&2&&Ne("mat-ripple-unbounded",o.unbounded)},inputs:{color:[v.None,"matRippleColor","color"],unbounded:[v.None,"matRippleUnbounded","unbounded"],centered:[v.None,"matRippleCentered","centered"],radius:[v.None,"matRippleRadius","radius"],animation:[v.None,"matRippleAnimation","animation"],disabled:[v.None,"matRippleDisabled","disabled"],trigger:[v.None,"matRippleTrigger","trigger"]},exportAs:["matRipple"],standalone:!0});let i=e;return i})(),Bt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=p({type:e}),e.\u0275inj=f({imports:[J,J]});let i=e;return i})();var Ut=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=p({type:e}),e.\u0275inj=f({imports:[J]});let i=e;return i})();var Qn=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=p({type:e}),e.\u0275inj=f({imports:[Bt,J,Ut]});let i=e;return i})(),qe={capture:!0},Je=["focus","click","mouseenter","touchstart"],me="mat-ripple-loader-uninitialized",fe="mat-ripple-loader-class-name",et="mat-ripple-loader-centered",q="mat-ripple-loader-disabled",Xn=(()=>{let e=class e{constructor(){this._document=E(I,{optional:!0}),this._animationMode=E(ie,{optional:!0}),this._globalRippleOptions=E(tt,{optional:!0}),this._platform=E(_),this._ngZone=E(g),this._hosts=new Map,this._onInteraction=t=>{if(!(t.target instanceof HTMLElement))return;let o=t.target.closest(`[${me}]`);o&&this._createRipple(o)},this._ngZone.runOutsideAngular(()=>{for(let t of Je)this._document?.addEventListener(t,this._onInteraction,qe)})}ngOnDestroy(){let t=this._hosts.keys();for(let n of t)this.destroyRipple(n);for(let n of Je)this._document?.removeEventListener(n,this._onInteraction,qe)}configureRipple(t,n){t.setAttribute(me,""),(n.className||!t.hasAttribute(fe))&&t.setAttribute(fe,n.className||""),n.centered&&t.setAttribute(et,""),n.disabled&&t.setAttribute(q,"")}getRipple(t){return this._hosts.get(t)||this._createRipple(t)}setDisabled(t,n){let o=this._hosts.get(t);if(o){o.disabled=n;return}n?t.setAttribute(q,""):t.removeAttribute(q)}_createRipple(t){if(!this._document)return;let n=this._hosts.get(t);if(n)return n;t.querySelector(".mat-ripple")?.remove();let o=this._document.createElement("span");o.classList.add("mat-ripple",t.getAttribute(fe)),t.append(o);let r=new Pt(new A(o),this._ngZone,this._platform,this._globalRippleOptions?this._globalRippleOptions:void 0,this._animationMode?this._animationMode:void 0);return r._isInitialized=!0,r.trigger=t,r.centered=t.hasAttribute(et),r.disabled=t.hasAttribute(q),this.attachRipple(t,r),r}attachRipple(t,n){t.removeAttribute(me),this._hosts.set(t,n)}destroyRipple(t){let n=this._hosts.get(t);n&&(n.ngOnDestroy(),this._hosts.delete(t))}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();export{an as a,ue as b,_ as c,zt as d,S as e,U as f,Gt as g,Zt as h,T as i,Le as j,ot as k,re as l,ae as m,qt as n,w as o,di as p,li as q,Yt as r,ut as s,Zi as t,Yi as u,J as v,ze as w,Yn as x,_e as y,tt as z,Bt as A,Ut as B,Qn as C,Xn as D};
