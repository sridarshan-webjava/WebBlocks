import{r as t,h as e,H as o,g as n}from"./p-34096178.js";const s=class{constructor(e){t(this,e),this.size="medium",this.variant="rounded"}render(){var t;const n=`avatar${this.className?" "+this.className:""} ${this.size} ${this.variant}`,s=this.src||!this.src&&!this.alt?e("img",{class:n,src:null!==(t=this.src)&&void 0!==t?t:"assets/img/user_fallback_img.svg",alt:this.alt,title:this.title}):e("div",{class:`${n} initials-text default-color`,title:this.title},this.alt[0].toUpperCase());return e(o,null,s)}static get assetsDirs(){return["assets"]}};s.style=":host{display:block}.avatar{display:flex;color:#fff;justify-content:center}.avatar.initials-text{font-size:18px;font-weight:bold;align-items:center}.avatar.default-color{background-color:#bdbdbd}.small{width:24px;height:24px}.medium{width:40px;height:40px}.large{width:56px;height:56px}.circular{border-radius:50%}.rounded{border-radius:4px}.square{border-radius:0}";const r=class{constructor(e){t(this,e),this.checked=!1}componentDidLoad(){this.el.style.setProperty("--checkTrue",`"${this.checkTrue}"`),this.el.style.setProperty("--checkFalse",`"${this.checkFalse}"`)}render(){return e(o,null,e("span",{class:this.checked?"check-true":"check-false"}))}get el(){return n(this)}};r.style=":host{--checkFalse:'';--checkTrue:'';display:inline-block}span.check-true::after{content:var(--checkTrue)}span.check-false::after{content:var(--checkFalse)}";const i=class{constructor(e){t(this,e),this.checked=!1,this.handleClick=()=>{this.checked=!this.checked,this.passStateToChildren()}}passStateToChildren(){this.el.childNodes.forEach((t=>{t.checked=this.checked}))}componentWillLoad(){this.passStateToChildren()}render(){return e(o,{onClick:this.handleClick},e("slot",null))}get el(){return n(this)}};i.style=":host{display:block;position:relative}";const a=({vchildren:t})=>Array.isArray(t),l=({vattrs:t},e=[])=>{return o=t,!Array.isArray(o)&&null!==o&&"object"==typeof o&&e.every(t.hasOwnProperty.bind(t));var o},c=({vtext:t})=>"string"==typeof t,d=t=>"object"==typeof t&&1===t.nodeType&&"object"==typeof t.ownerDocument,h=t=>({vattrs:t.t,vchildren:t.o,vkey:t.i,vname:t.l,vtag:t.h,vtext:t.u}),u=({vtag:t,vattrs:e,vchildren:o,vtext:n})=>{if(null!=n)return document.createTextNode(n);const s=document.createElement(t);if(null!=e)for(const t in e)s.setAttribute(t,e[t]);if(null!=o)for(const t of o)s.appendChild(u(h(t)));return s},p=t=>d(t)||(t=>Array.isArray(t)&&t.every(d))(t)&&2===t.length,m=t=>Array.isArray(t)?document.head.replaceChild(t[0],t[1]):document.head.appendChild(t),b={title:function(t,e){const o=(t.vchildren||[])[0];if(a(t)&&c(h(o)))return[u(t),e.querySelector("title")]},meta:function(t,e){var o,n,s;const r=(null===(o=t.vattrs)||void 0===o?void 0:o.property)?"property":"name",i=(null===(n=t.vattrs)||void 0===n?void 0:n.property)||(null===(s=t.vattrs)||void 0===s?void 0:s.name),a=e.querySelector(`meta[${r}="${i}"]`);return null!==a?[u(t),a]:u(t)},link:function(t){if(!a(t))return u(t)},style:function(t){const e=(t.vchildren||[])[0];if(a(t)&&c(h(e)))return u(t)},script:function(t){if(a(t)||l(t))return u(t)},base:function(t){if(!a(t)&&l(t))return u(t)},template:u,noscript:u},f=document&&document.head,g=Object.keys(b),x=t=>g.indexOf(t.h)>-1,y=(t,e,o)=>{if(!f)return null;const n=e.filter(x),s=[];return o.forEach(n,(t=>{var e;s.push(b[(e=t).vtag](e,document.head))})),s.filter(p).forEach(m),null},v=class{constructor(e){t(this,e)}render(){return e(y,null,e("script",null,function(t,e,o,n,s){t[n]=t[n]||[],t[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var r=e.getElementsByTagName(o)[0],i=e.createElement(o);i.async=!0,i.src="https://www.googletagmanager.com/gtm.js?id="+s,r.parentNode.insertBefore(i,r)}(window,document,"script","dataLayer",this.containerId)))}},w=class{constructor(e){t(this,e),this.checked=!1}render(){return e(o,null,e("label",null,e("slot",null)))}};w.style=":host{display:inline-block}";const k=class{constructor(e){t(this,e)}render(){return e(o,null,e("div",{class:"modal-window"},e("div",{class:"modal-title"},this.title),e("slot",null),e("div",{class:"modal-btns"},e("button",{class:"modal-cancel-btn modal-btn"},this.cancelText),e("button",{class:"modal-confirm-btn modal-btn"},this.confirmText))),e("div",{id:"overlay",style:{"pointer-events":this.pointerEvents?"all":"none"}}))}};k.style="@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@600&display=swap');:host{display:block}*{box-sizing:border-box}.modal-window{z-index:1;padding:20px 0.8rem;border:none;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);width:36em;max-width:80rem;display:flex;flex-direction:column;justify-content:space-between;background-color:#fffbfb;border-radius:1px;box-shadow:1px 0px 8px 1.5px rgb(199, 198, 198);height:15rem}.modal-title{padding:0.4rem 12px;border-bottom:2px solid #0074d9;font-family:'Rubik', sans-serif;font-size:2rem;font-weight:600;letter-spacing:1px;color:#001f3f;cursor:pointer}.modal-btns{display:flex;justify-content:flex-end;padding-top:0.3rem}.modal-btn{margin-right:1rem;font-family:'Roboto', sans-serif;font-size:1.2rem;letter-spacing:1.5px;outline:none;border:none;padding:10px;border-radius:5px;cursor:pointer}.modal-cancel-btn{background-color:#dddddd}.modal-confirm-btn{background-color:#fb7200;color:white}.modal-btn:hover{opacity:0.7}::slotted(p){font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;font-size:1.3rem;padding:0 1rem;word-wrap:break-word}#overlay{position:fixed;left:0;right:0;top:0;bottom:0;background-color:rgba(0, 0, 0, 0.3)}@media screen and (max-width: 576px){.modal-window{width:18rem}.modal-title{padding:0 0.2rem;font-size:1.8rem}.modal-btns{padding-top:1rem;margin-top:20px}.modal-btn{font-size:1rem;padding:8px}}";const $=class{constructor(e){t(this,e)}render(){switch(this.typeButtton){case"primary":return e(o,null,e("button",{color:this.color,class:`btn btn-primary ${this.icon}`,style:{width:this.width,height:"auto"},name:this.name,type:this.type}));case"warning":return e(o,null,e("button",{color:this.color,class:`btn btn-warning ${this.icon}`,style:{width:this.width,height:"auto"},name:this.name,type:this.type}));case"black":return e(o,null,e("button",{color:this.color,class:`btn btn-black ${this.icon}`,style:{width:this.width,height:"auto"},name:this.name,type:this.type}));default:return e(o,null,e("button",{color:this.color,class:`btn btn-default ${this.icon}`,style:{width:this.width,height:"auto"},name:this.name,type:this.type}))}}};$.style="@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');:host{display:block}.btn{font:600;border:1px solid black;color:white}.btn-primary{background-color:blue}.btn-black{background-color:black}.btn-warning{background-color:orange}.btn-default{background-color:lightblue}";const j=class{constructor(e){t(this,e)}getText(){return(this.first||"")+((t=this.middle)?` ${t}`:"")+((e=this.last)?` ${e}`:"");var t,e}returnJsx(){return e("h1",void 0!==this.color?{style:{"--text-color":`${this.color}`}}:null,"Hello, World! I'm ",this.getText())}render(){return this.returnJsx()}};j.style=":host{display:block;font-size:x-large;text-align:center;--text-color:#1e1e1e}h1{color:var(--text-color)}";const _=class{constructor(e){t(this,e)}onInputChange(t){new RegExp(this.pattern,"i").test(t.value)?alert("Input match!"):alert("Input not match!")}render(){return e(o,null,e("input",{type:"text",defaultValue:this.defaultValue,placeholder:this.placeholder,disabled:this.disabled||!1,pattern:this.pattern,style:{height:this.size?"small"===this.size?"20px":"40px":"30px",outline:"none",border:"none",background:"lightgray","border-radius":" 4px",padding:"2px 10px"},onChange:t=>this.onInputChange(t.target)}))}};export{s as avatar_component,r as checkmark_component,i as emoji_checkbox_component,v as google_tag_manager,w as label_component,k as modal_window,$ as my_button,j as my_component,_ as my_input}