(()=>{"use strict";function e(e){this.type=e}e.prototype.init=function(){const e=this;this.оbjects=[],this.daClassname="_dynamic_adapt_",this.nodes=document.querySelectorAll("[data-da]");for(let e=0;e<this.nodes.length;e++){const t=this.nodes[e],n=t.dataset.da.trim().split(","),i={};i.element=t,i.parent=t.parentNode,i.destination=document.querySelector(n[0].trim()),i.breakpoint=n[1]?n[1].trim():"767",i.place=n[2]?n[2].trim():"last",i.index=this.indexInParent(i.parent,i.element),this.оbjects.push(i)}this.arraySort(this.оbjects),this.mediaQueries=Array.prototype.map.call(this.оbjects,(function(e){return"("+this.type+"-width: "+e.breakpoint+"px),"+e.breakpoint}),this),this.mediaQueries=Array.prototype.filter.call(this.mediaQueries,(function(e,t,n){return Array.prototype.indexOf.call(n,e)===t}));for(let t=0;t<this.mediaQueries.length;t++){const n=this.mediaQueries[t],i=String.prototype.split.call(n,","),o=window.matchMedia(i[0]),r=i[1],s=Array.prototype.filter.call(this.оbjects,(function(e){return e.breakpoint===r}));o.addListener((function(){e.mediaHandler(o,s)})),this.mediaHandler(o,s)}},e.prototype.mediaHandler=function(e,t){if(e.matches)for(let e=0;e<t.length;e++){const n=t[e];n.index=this.indexInParent(n.parent,n.element),this.moveTo(n.place,n.element,n.destination)}else for(let e=0;e<t.length;e++){const n=t[e];n.element.classList.contains(this.daClassname)&&this.moveBack(n.parent,n.element,n.index)}},e.prototype.moveTo=function(e,t,n){t.classList.add(this.daClassname),"last"===e||e>=n.children.length?n.insertAdjacentElement("beforeend",t):"first"!==e?n.children[e].insertAdjacentElement("beforebegin",t):n.insertAdjacentElement("afterbegin",t)},e.prototype.moveBack=function(e,t,n){t.classList.remove(this.daClassname),void 0!==e.children[n]?e.children[n].insertAdjacentElement("beforebegin",t):e.insertAdjacentElement("beforeend",t)},e.prototype.indexInParent=function(e,t){const n=Array.prototype.slice.call(e.children);return Array.prototype.indexOf.call(n,t)},e.prototype.arraySort=function(e){"min"===this.type?Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?-1:"last"===e.place||"first"===t.place?1:e.place-t.place:e.breakpoint-t.breakpoint})):Array.prototype.sort.call(e,(function(e,t){return e.breakpoint===t.breakpoint?e.place===t.place?0:"first"===e.place||"last"===t.place?1:"last"===e.place||"first"===t.place?-1:t.place-e.place:t.breakpoint-e.breakpoint}))},new e("max").init();const t={h1:{en:"Text",ru:"Teкст",ua:"тeкст"},btn:{ua:"Дізнатись більше",en:"Learn more",ru:"Узнать больше"}};function n(){for(let e in t){let n=document.querySelector(".lng-"+e);n&&(n.innerHTML=t[e][this.value])}}document.querySelectorAll(".lang button").forEach((e=>e.addEventListener("click",n)));const i=document.querySelectorAll("[data-spollers]");if(i.length>0){const d=Array.from(i).filter((function(e,t,n){return!e.dataset.spollers.split(",")[0]}));d.length>0&&u(d);const p=Array.from(i).filter((function(e,t,n){return e.dataset.spollers.split(",")[0]}));if(p.length>0){const f=[];p.forEach((e=>{const t={},n=e.dataset.spollers.split(",");t.value=n[0],t.type=n[1]?n[1].trim():"max",t.item=e,f.push(t)}));let g=f.map((function(e){return"("+e.type+"-width: "+e.value+"px),"+e.value+","+e.type}));g=g.filter((function(e,t,n){return n.indexOf(e)===t})),g.forEach((e=>{const t=e.split(","),n=t[1],i=t[2],o=window.matchMedia(t[0]),r=f.filter((function(e){if(e.value===n&&e.type===i)return!0}));o.addListener((function(){u(r,o)})),u(r,o)}))}function u(e,t=!1){e.forEach((e=>{e=t?e.item:e,t.matches||!t?(e.classList.add("_init"),m(e),e.addEventListener("click",y)):(e.classList.remove("_init"),m(e,!1),e.removeEventListener("click",y))}))}function m(e,t=!0){const n=e.querySelectorAll("[data-spoller]");n.length>0&&n.forEach((e=>{t?(e.removeAttribute("tabindex"),e.classList.contains("_active")||(e.nextElementSibling.hidden=!0)):(e.setAttribute("tabindex","-1"),e.nextElementSibling.hidden=!1)}))}function y(e){const t=e.target;if(t.hasAttribute("data-spoller")||t.closest("[data-spoller]")){const n=t.hasAttribute("data-spoller")?t:t.closest("[data-spoller]"),i=n.closest("[data-spollers]"),r=!!i.hasAttribute("data-one-spoller");i.querySelectorAll("._slide").length||(r&&!n.classList.contains("_active")&&h(i),n.classList.toggle("_active"),o(n.nextElementSibling,500)),e.preventDefault()}}function h(e){const t=e.querySelector("[data-spoller]._active");t&&(t.classList.remove("_active"),o(t.nextElementSibling,500))}}let o=(e,t=500)=>e.hidden?((e,t=500)=>{e.classList.contains("_slide")||(e.classList.add("_slide"),e.hidden&&(e.hidden=!1),e.offsetHeight,e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBotton=0,e.style.marginTop=0,e.style.marginBotton=0,e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=e.offsetHeight+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-botton"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-top"),window.setTimeout((()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("translition-duration"),e.style.removeProperty("translition-property"),e.classList.remove("_slide")}),t))})(e,t):((e,t=500)=>{e.classList.contains("_slide")||(e.classList.add("_slide"),e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBotton=0,e.style.marginTop=0,e.style.marginBotton=0,window.setTimeout((()=>{e.hidden=!0,e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-botton"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-botton"),e.style.removeProperty("overflow"),e.style.removeProperty("translition-duration"),e.style.removeProperty("translition-property"),e.classList.remove("_slide")}),t))})(e,t);window.addEventListener("load",(()=>{document.documentElement.classList.add("loaded")})),function(e){let t=new Image;t.onload=t.onerror=function(){!function(e){let t=!0===e?"webp":"no-webp";document.documentElement.classList.add(t)}(2==t.height)},t.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"}();const r=document.querySelector(".icon-menu");if(r){const v=document.querySelector(".menu-body");r.addEventListener("click",(function(e){r.classList.toggle("menu-open"),v.classList.toggle("menu-open")}))}let s=window.scrollY;const l=document.querySelector("header");window.addEventListener("scroll",(function(){s=window.scrollY,s>=1?l.classList.add("scroll"):l.classList.remove("scroll")})),new Swiper(".swiper",{pagination:{el:".swiper-pagination",clickable:!0},autoplay:!0,speed:500,loop:!0,breakpoints:{320:{slidesPerView:1},480:{slidesPerView:2},650:{slidesPerView:3},992:{slidesPerView:5}}}),window.addEventListener("load",(function(){document.querySelector(".product-slider")&&new Swiper(".product-slider",{loop:!0,speed:1e3,parallax:!0,mousewheel:!0,Keyboard:!0,on:{init:function(){document.documentElement.classList.add("loaded")}}})}));const a=document.querySelector(".header-shop__cart"),c=document.querySelector(".header-shop__cart span");document.addEventListener("click",(function(e){const t=e.target;if(t.closest(".product-btn")){const e=t.closest(".product-slide").querySelector(".product-picture"),n=e.cloneNode(!0),i={left:a.getBoundingClientRect().left,top:a.getBoundingClientRect().top};n.style.cssText=`\n      position:fixed;\n      left: ${e.getBoundingClientRect().left}px;\n      top: ${e.getBoundingClientRect().top}px;\n      width: ${e.offsetWidth}px;\n      height: ${e.offsetHeight}px;\n      transition:all 1000ms ease;      \n    `,document.body.append(n),setTimeout((()=>{n.style.left=`${i.left}px`,n.style.top=`${i.top}px`,n.style.width="0px",n.style.height="0px",n.style.opacity="0.5"}),0),setTimeout((()=>{c.innerHTML=++c.innerHTML,n.remove()}),1e3)}}))})();