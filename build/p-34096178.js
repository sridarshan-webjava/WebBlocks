let t,e,n=!1;const l="undefined"!=typeof window?window:{},o=l.document||{head:{}},s={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l),ce:(t,e)=>new CustomEvent(t,e)},r=t=>Promise.resolve(t),c=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(t){}return!1})(),i=new WeakMap,u=t=>"sc-"+t.o,a={},f=t=>"object"==(t=typeof t)||"function"===t,y=(t,e,...n)=>{let l=null,o=!1,s=!1,r=[];const c=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof t&&!f(l))&&(l+=""),o&&s?r[r.length-1].i+=l:r.push(o?$(null,l):l),s=o)};if(c(n),e){const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter((e=>t[e])).join(" "))}if("function"==typeof t)return t(null===e?{}:e,r,h);const i=$(t,null);return i.u=e,r.length>0&&(i.$=r),i},$=(t,e)=>({t:0,h:t,i:e,p:null,$:null,u:null}),d={},h={forEach:(t,e)=>t.map(p).forEach(e),map:(t,e)=>t.map(p).map(e).map(m)},p=t=>({vattrs:t.u,vchildren:t.$,vkey:t.m,vname:t.v,vtag:t.h,vtext:t.i}),m=t=>{if("function"==typeof t.vtag){const e=Object.assign({},t.vattrs);return t.vkey&&(e.key=t.vkey),t.vname&&(e.name=t.vname),y(t.vtag,e,...t.vchildren||[])}const e=$(t.vtag,t.vtext);return e.u=t.vattrs,e.$=t.vchildren,e.m=t.vkey,e.v=t.vname,e},b=(t,e,n,o,r,c)=>{if(n!==o){let i=z(t,e),u=e.toLowerCase();if("class"===e){const e=t.classList,l=v(n),s=v(o);e.remove(...l.filter((t=>t&&!s.includes(t)))),e.add(...s.filter((t=>t&&!l.includes(t))))}else if("style"===e){for(const e in n)o&&null!=o[e]||(e.includes("-")?t.style.removeProperty(e):t.style[e]="");for(const e in o)n&&o[e]===n[e]||(e.includes("-")?t.style.setProperty(e,o[e]):t.style[e]=o[e])}else if(i||"o"!==e[0]||"n"!==e[1]){const l=f(o);if((i||l&&null!==o)&&!r)try{if(t.tagName.includes("-"))t[e]=o;else{let l=null==o?"":o;"list"===e?i=!1:null!=n&&t[e]==l||(t[e]=l)}}catch(t){}null==o||!1===o?!1===o&&""!==t.getAttribute(e)||t.removeAttribute(e):(!i||4&c||r)&&!l&&t.setAttribute(e,o=!0===o?"":o)}else e="-"===e[2]?e.slice(3):z(l,u)?u.slice(2):u[2]+e.slice(3),n&&s.rel(t,e,n,!1),o&&s.ael(t,e,o,!1)}},w=/\s/,v=t=>t?t.split(w):[],S=(t,e,n,l)=>{const o=11===e.p.nodeType&&e.p.host?e.p.host:e.p,s=t&&t.u||a,r=e.u||a;for(l in s)l in r||b(o,l,s[l],void 0,n,e.t);for(l in r)b(o,l,s[l],r[l],n,e.t)},g=(e,n,l)=>{let s,r,c=n.$[l],i=0;if(null!==c.i)s=c.p=o.createTextNode(c.i);else if(s=c.p=o.createElement(c.h),S(null,c,!1),null!=t&&s["s-si"]!==t&&s.classList.add(s["s-si"]=t),c.$)for(i=0;i<c.$.length;++i)r=g(e,c,i),r&&s.appendChild(r);return s},j=(t,n,l,o,s,r)=>{let c,i=t;for(i.shadowRoot&&i.tagName===e&&(i=i.shadowRoot);s<=r;++s)o[s]&&(c=g(null,l,s),c&&(o[s].p=c,i.insertBefore(c,n)))},k=(t,e,n,l)=>{for(;e<=n;++e)(l=t[e])&&l.p.remove()},M=(t,e)=>t.h===e.h,O=(t,e)=>{const n=e.p=t.p,l=t.$,o=e.$,s=e.i;null===s?("slot"===e.h||S(t,e,!1),null!==l&&null!==o?((t,e,n,l)=>{let o,s=0,r=0,c=e.length-1,i=e[0],u=e[c],a=l.length-1,f=l[0],y=l[a];for(;s<=c&&r<=a;)null==i?i=e[++s]:null==u?u=e[--c]:null==f?f=l[++r]:null==y?y=l[--a]:M(i,f)?(O(i,f),i=e[++s],f=l[++r]):M(u,y)?(O(u,y),u=e[--c],y=l[--a]):M(i,y)?(O(i,y),t.insertBefore(i.p,u.p.nextSibling),i=e[++s],y=l[--a]):M(u,f)?(O(u,f),t.insertBefore(u.p,i.p),u=e[--c],f=l[++r]):(o=g(e&&e[r],n,r),f=l[++r],o&&i.p.parentNode.insertBefore(o,i.p));s>c?j(t,null==l[a+1]?null:l[a+1].p,n,l,r,a):r>a&&k(e,s,c)})(n,l,e,o):null!==o?(null!==t.i&&(n.textContent=""),j(n,null,e,o,0,o.length-1)):null!==l&&k(l,0,l.length-1)):t.i!==s&&(n.data=s)},C=t=>N(t).S,x=(t,e)=>{e&&!t.g&&e["s-p"]&&e["s-p"].push(new Promise((e=>t.g=e)))},E=(t,e)=>{if(t.t|=16,!(4&t.t))return x(t,t.j),et((()=>L(t,e)));t.t|=512},L=(t,e)=>{const n=t.k;let l;return e&&(l=H(n,"componentWillLoad")),R(l,(()=>P(t,n,e)))},P=async(t,e,n)=>{const l=t.S,s=l["s-rc"];n&&(t=>{const e=t.M,n=t.S,l=e.t,s=((t,e)=>{let n=u(e),l=J.get(n);if(t=11===t.nodeType?t:o,l)if("string"==typeof l){let e,s=i.get(t=t.head||t);s||i.set(t,s=new Set),s.has(n)||(e=o.createElement("style"),e.innerHTML=l,t.insertBefore(e,t.querySelector("link")),s&&s.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),e);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(t);T(t,e),s&&(s.map((t=>t())),l["s-rc"]=void 0);{const e=l["s-p"],n=()=>W(t);0===e.length?n():(Promise.all(e).then(n),t.t|=4,e.length=0)}},T=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const o=n.S,s=n.O||$(null,null),r=(t=>t&&t.h===d)(l)?l:y(null,null,l);e=o.tagName,r.h=null,r.t|=4,n.O=r,r.p=s.p=o.shadowRoot||o,t=o["s-sc"],O(s,r)})(n,l)}catch(t){B(t,n.S)}return null},W=t=>{const e=t.S,n=t.k,l=t.j;64&t.t||(t.t|=64,U(e),H(n,"componentDidLoad"),t.C(e),l||A()),t.g&&(t.g(),t.g=void 0),512&t.t&&tt((()=>E(t,!1))),t.t&=-517},A=()=>{U(o.documentElement),tt((()=>(t=>{const e=s.ce("appload",{detail:{namespace:"webblocks"}});return t.dispatchEvent(e),e})(l)))},H=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(t){B(t)}},R=(t,e)=>t&&t.then?t.then(e):e(),U=t=>t.classList.add("hydrated"),q=(t,e,n)=>{if(e.L){const l=Object.entries(e.L),o=t.prototype;if(l.map((([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,t,{get(){return((t,e)=>N(this).P.get(e))(0,t)},set(n){((t,e,n,l)=>{const o=N(t),s=o.P.get(e),r=o.t,c=o.k;n=((t,e)=>null==t||f(t)?t:4&e?"false"!==t&&(""===t||!!t):1&e?t+"":t)(n,l.L[e][0]),8&r&&void 0!==s||n===s||(o.P.set(e,n),c&&2==(18&r)&&E(o,!1))})(this,t,n,e)},configurable:!0,enumerable:!0})})),1&n){const e=new Map;o.attributeChangedCallback=function(t,n,l){s.jmp((()=>{const n=e.get(t);this.hasOwnProperty(n)&&(l=this[n],delete this[n]),this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},t.observedAttributes=l.filter((([t,e])=>15&e[0])).map((([t,n])=>{const l=n[1]||t;return e.set(l,t),l}))}}return t},D=(t,e={})=>{const n=[],r=e.exclude||[],i=l.customElements,a=o.head,f=a.querySelector("meta[charset]"),y=o.createElement("style"),$=[];let d,h=!0;Object.assign(s,e),s.l=new URL(e.resourcesUrl||"./",o.baseURI).href,t.map((t=>t[1].map((e=>{const l={t:e[0],o:e[1],L:e[2],T:e[3]};l.L=e[2];const o=l.o,a=class extends HTMLElement{constructor(t){super(t),_(t=this,l),1&l.t&&t.attachShadow({mode:"open"})}connectedCallback(){d&&(clearTimeout(d),d=null),h?$.push(this):s.jmp((()=>(t=>{if(0==(1&s.t)){const e=N(t),n=e.M,l=()=>{};if(!(1&e.t)){e.t|=1;{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){x(e,e.j=n);break}}n.L&&Object.entries(n.L).map((([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}})),(async(t,e,n,l,o)=>{if(0==(32&e.t)){{if(e.t|=32,(o=I(n)).then){const t=()=>{};o=await o,t()}o.isProxied||(q(o,n,2),o.isProxied=!0);const t=()=>{};e.t|=8;try{new o(e)}catch(t){B(t)}e.t&=-9,t()}if(o.style){let t=o.style;const e=u(n);if(!J.has(e)){const l=()=>{};((t,e,n)=>{let l=J.get(t);c&&n?(l=l||new CSSStyleSheet,l.replace(e)):l=e,J.set(t,l)})(e,t,!!(1&n.t)),l()}}}const s=e.j,r=()=>E(e,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(0,e,n)}l()}})(this)))}disconnectedCallback(){s.jmp((()=>{}))}componentOnReady(){return N(this).W}};l.A=t[0],r.includes(o)||i.get(o)||(n.push(o),i.define(o,q(a,l,1)))})))),y.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",y.setAttribute("data-styles",""),a.insertBefore(y,f?f.nextSibling:a.firstChild),h=!1,$.length?$.map((t=>t.connectedCallback())):s.jmp((()=>d=setTimeout(A,30)))},F=new WeakMap,N=t=>F.get(t),V=(t,e)=>F.set(e.k=t,e),_=(t,e)=>{const n={t:0,S:t,M:e,P:new Map};return n.W=new Promise((t=>n.C=t)),t["s-p"]=[],t["s-rc"]=[],F.set(t,n)},z=(t,e)=>e in t,B=(t,e)=>(0,console.error)(t,e),G=new Map,I=t=>{const e=t.o.replace(/-/g,"_"),n=t.A,l=G.get(n);return l?l[e]:import(`./${n}.entry.js`).then((t=>(G.set(n,t),t[e])),B)},J=new Map,K=[],Q=[],X=(t,e)=>l=>{t.push(l),n||(n=!0,e&&4&s.t?tt(Z):s.raf(Z))},Y=t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(t){B(t)}t.length=0},Z=()=>{Y(K),Y(Q),(n=K.length>0)&&s.raf(Z)},tt=t=>r().then(t),et=X(Q,!0);export{d as H,D as b,C as g,y as h,r as p,V as r}