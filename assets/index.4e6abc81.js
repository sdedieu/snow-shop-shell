import{o as a,c as d,a as p,b as e,d as l,e as T,j as N,R as P,f as F}from"./vendor.7a73c8a6.js";const O=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const _ of t.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&c(_)}).observe(document,{childList:!0,subtree:!0});function i(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerpolicy&&(t.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?t.credentials="include":s.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(s){if(s.ep)return;s.ep=!0;const t=i(s);fetch(s.href,t)}};O();var H="/snow-shop-slides/assets/manfred_steyer_avatar.204c1caa.png",w="/snow-shop-slides/assets/twitter.b604a49d.png",q="/snow-shop-slides/assets/mike_avatar.0dce0456.png",z="/snow-shop-slides/assets/marine_brothier_avatar.f8732a73.png",V="/snow-shop-slides/assets/linkedin.25794e1f.png",U="/snow-shop-slides/assets/kzn_avatar.e13594be.png",r=(n,o)=>{const i=n.__vccOpts||n;for(const[c,s]of o)i[c]=s;return i};const G={name:"SpecialThanks"},J={class:"slide-content"},W=p('<div class="slide-title"><h5>REMERCIEMENTS</h5></div><div class="grid grid-cols-1 md:grid-cols-2 grow mx-4 lg:mx-12 pb-12"><div class="flex flex-row items-center justify-evenly"><img class="m0 w-16 md:w-24" src="'+H+'"><a class="flex flex-row items-center" href="https://twitter.com/ManfredSteyer"><img src="'+w+'" class="w-8 md:w-16"><div class="ml-2 text-sky-500 font-bold text-xl md:text-4xl">@ManfredSteyer</div></a></div><div class="flex flex-row items-center justify-evenly"><img class="m0 w-16 md:w-24" src="'+q+'"><a class="flex flex-row items-center" href="https://twitter.com/MikeZks"><img src="'+w+'" class="w-8 md:w-16"><div class="ml-8 text-sky-500 font-bold text-xl md:text-4xl">@MikeZks</div></a></div><div class="flex flex-row items-center justify-evenly"><img class="m0 w-16 md:w-24" src="'+z+'"><a class="flex flex-row items-center" href="https://www.linkedin.com/in/marine-brothier-4766a380/"><img src="'+V+'" class="w-8 md:w-16"><div class="ml-8 text-sky-700 font-bold text-xl md:text-4xl">Marine Brothier</div></a></div><div class="flex flex-row items-center justify-evenly"><img class="m0 w-32 md:w-72" src="'+U+'"><a class="flex flex-row items-center" href="https://twitter.com/Kaizen_Sln"><img src="'+w+'" class="w-8 md:w-16"><div class="ml-8 text-sky-500 font-bold text-xl md:text-4xl">@Kaizen_Sln</div></a></div></div>',2),L=[W];function Q(n,o,i,c,s,t){return a(),d("div",J,L)}var Y=r(G,[["render",Q]]);const K={name:"Thanks"},Z={class:"slide-content"},X=e("div",{class:"slide-title"},[e("h5",null,"MERCI !")],-1),ee=e("div",{class:"cover-container thanks"},null,-1),se=[X,ee];function te(n,o,i,c,s,t){return a(),d("div",Z,se)}var oe=r(K,[["render",te]]);const ne={name:"Thankings"},ie={id:"thankings"},ce={id:"thanks"},ae={id:"special-thank"};function de(n,o,i,c,s,t){const _=oe,m=Y;return a(),d("section",ie,[e("section",ce,[l(_)]),e("section",ae,[l(m)])])}var re=r(ne,[["render",de]]);const le={name:"AngularJsDemoCodeNativeElement"},_e={class:"slide-content"},me=p(`<div class="slide-title"><h5>ENCAPSULATION EN WEBCOMPONENT</h5></div><div class="code-col-grid"><div class="code-col"><div class="text-base self-start"># main.js</div><pre>        <code class="js">
export class Mfe extends HTMLElement {
  connectedCallBack() {
    const root = document.createElement(&#39;mfe-component&#39;);
    this.appendChild(root);
    angular.bootstrap(root, [&#39;app&#39;]);
  }
}
customElements.define(&#39;mfe-web-component&#39;, Mfe);
        </code>
        </pre></div><div class="code-col"><div class="text-base self-start"># webpack.config.js</div><pre>        <code class="js">
const ModuleFederationPlugin = require(&quot;webpack/lib/container/ModuleFederationPlugin&quot;);

// Other config goes here

plugins: [
  new ModuleFederationPlugin({

    // For remotes (please adjust)
    name: &quot;mfe&quot;,
    library: {type: &#39;var&#39;, name: &#39;mfe&#39;},
    filename: &quot;remoteEntry.js&quot;,
    exposes: {
      &#39;./module&#39;: &#39;.//src/index.js&#39;,
    },
    shared: share({
      // Shared libs goes there
      ...sharedMappings.getDescriptors()
    })
  }),
  sharedMappings.getPlugin()
],
        </code>
        </pre></div></div>`,2),pe=[me];function ue(n,o,i,c,s,t){return a(),d("div",_e,pe)}var ve=r(le,[["render",ue]]),he="/snow-shop-slides/assets/angularjs-logo.59fa2b69.png";const fe={name:"AngularJsDemoCover"},ge={class:"slide-content"},$e=e("div",{class:"slide-title"},[e("h5",null,"EXEMPLE AVEC ANGULARJS")],-1),xe=e("div",{class:"cover-container"},[e("img",{src:he,alt:""})],-1),we=[$e,xe];function Ee(n,o,i,c,s,t){return a(),d("div",ge,we)}var be=r(fe,[["render",Ee]]);const Ae={name:"AngularJsDemo"},Ce={id:"angularjs-demo"},Me={id:"cover"},ye={id:"code-native-element"};function Re(n,o,i,c,s,t){const _=be,m=ve;return a(),d("section",Ce,[e("section",Me,[l(_)]),e("section",ye,[l(m)])])}var Ie=r(Ae,[["render",Re]]);const Se={name:"ReactDemoCodeNativeElement"},je={class:"slide-content"},Be=p(`<div class="slide-title"><h5>ENCAPSULATION EN WEBCOMPONENT</h5></div><div class="code-col-grid"><div class="code-col"><div class="text-base self-start"># main.js</div><pre>        <code class="js">
export class Mfe extends HTMLElement {
  connectedCallBack() {
    ReactDOM.render(
	    &lt;React.StritctMode&gt;
	      &lt;App /&gt;
      &lt;/React.StrictMode&gt;,
    this)
  }
}
customElements.define(&#39;mfe-web-component&#39;, Mfe);
        </code>
        </pre></div><div class="code-col"><div class="text-base self-start"># webpack.config.js</div><pre>        <code class="js">
const ModuleFederationPlugin = require(&quot;webpack/lib/container/ModuleFederationPlugin&quot;);

// Other config goes here

plugins: [
  new ModuleFederationPlugin({

    // For remotes (please adjust)
    name: &quot;mfe&quot;,
    library: {type: &#39;var&#39;, name: &#39;mfe&#39;},
    filename: &quot;remoteEntry.js&quot;,
    exposes: {
      &#39;./module&#39;: &#39;.//src/index.js&#39;,
    },
    shared: [&#39;react&#39;, &#39;react-dom&#39;, &#39;axios&#39;]
  }),
  sharedMappings.getPlugin()
],
        </code>
        </pre></div></div>`,2),ke=[Be];function De(n,o,i,c,s,t){return a(),d("div",je,ke)}var Te=r(Se,[["render",De]]),Ne="/snow-shop-slides/assets/react-logo.10f41377.png";const Pe={name:"ReactDemoCover"},Fe={class:"slide-content"},Oe=e("div",{class:"slide-title"},[e("h5",null,"EXEMPLE AVEC REACT")],-1),He=e("div",{class:"cover-container"},[e("img",{src:Ne,alt:""})],-1),qe=[Oe,He];function ze(n,o,i,c,s,t){return a(),d("div",Fe,qe)}var Ve=r(Pe,[["render",ze]]);const Ue={name:"ReactDemo"},Ge={id:"react-demo"},Je={id:"cover"},We={id:"code-native-element"};function Le(n,o,i,c,s,t){const _=Ve,m=Te;return a(),d("section",Ge,[e("section",Je,[l(_)]),e("section",We,[l(m)])])}var Qe=r(Ue,[["render",Le]]);const Ye={name:"VueDemoCodeHostWrapper"},Ke={class:"slide-content"},Ze=p(`<div class="slide-title"><h5>COMPOSANT WRAPPER</h5></div><div class="code-col-grid single-col"><div class="code-col"><div class="text-base self-start"># app-routing.module.ts</div><pre>        <code class="js">
import { AfterContentInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from &#39;@angular/core&#39;;
import { ActivatedRoute } from &#39;@angular/router&#39;;
@Component({
  template: \`&lt;div #vc&gt;&lt;/div&gt;\`,
})
export class WrapperComponent implements AfterContentInit {
  @ViewChild(&#39;vc&#39;, { read: ElementRef, static: true })
  vc!: ElementRef;

  constructor(private route: ActivatedRoute) { }

  async ngAfterContentInit(): Promise&lt;void&gt; {
    const elementName = this.route.snapshot.data[&#39;elementName&#39;];
    const loader = this.route.snapshot.data[&#39;loadChildren&#39;];

    await loader();
    const element = document.createElement(elementName);
    this.vc.nativeElement.appendChild(element);
  }
}
        </code>
        </pre></div></div>`,2),Xe=[Ze];function es(n,o,i,c,s,t){return a(),d("div",Ke,Xe)}var ss=r(Ye,[["render",es]]);const ts={name:"VueDemoCodeHostRouter"},os={class:"slide-content"},ns=p(`<div class="slide-title"><h5>ADAPTATION DU ROUTER</h5></div><div class="code-col-grid"><div class="code-col"><div class="text-base"># app-routing.module.ts</div><pre>        <code class="js">
const routes: Routes = [
  // Others routes goes there
  { 
    path:&#39;mfe&#39;, 
    component: WrapperComponent,
    data: { 
      loadChildren: () =&gt; import(&#39;mfe/module&#39;),
      elementName: &#39;mfe-web-component&#39; 
    }
  }];
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
        </code>
        </pre></div><div class="code-col"><div class="text-base"># decl.d.ts</div><pre>        <code class="js">
declare module &#39;mfe/module&#39;;
        </code>
        </pre></div></div>`,2),is=[ns];function cs(n,o,i,c,s,t){return a(),d("div",os,is)}var as=r(ts,[["render",cs]]);const ds={name:"VueDemoCodeNativeElement"},rs={class:"slide-content"},ls=p(`<div class="slide-title"><h5>ENCAPSULATION EN WEBCOMPONENT</h5></div><div class="code-col-grid"><div class="code-col"><div class="text-base self-start"># main.js</div><pre>        <code class="js">
export class Mfe extends HTMLElement {
  connectedCallBack() {
    createApp(App).use(router).mount(this)
  }
}
customElements.define(&#39;mfe-web-component&#39;, Mfe);

        </code>
        </pre></div><div class="code-col"><div class="text-base self-start"># webpack.config.js</div><pre>        <code class="js">
const ModuleFederationPlugin = require(&quot;webpack/lib/container/ModuleFederationPlugin&quot;);

// Other config goes here

plugins: [
  new ModuleFederationPlugin({

    // For remotes (please adjust)
    name: &quot;mfe&quot;,
    library: {type: &#39;var&#39;, name: &#39;mfe&#39;},
    filename: &quot;remoteEntry.js&quot;,
    exposes: {
      &#39;./module&#39;: &#39;.//src/index.js&#39;,
    },  
    shared: [&#39;vue&#39;, &#39;core-js&#39;, &#39;axios&#39;]
  }),
  sharedMappings.getPlugin()
],
        </code>
        </pre></div></div>`,2),_s=[ls];function ms(n,o,i,c,s,t){return a(),d("div",rs,_s)}var ps=r(ds,[["render",ms]]),us="/snow-shop-slides/assets/vue-logo.32e41e2e.png";const vs={name:"VueDemoCover"},hs={class:"slide-content"},fs=e("div",{class:"slide-title"},[e("h5",null,"EXEMPLE AVEC VUE")],-1),gs=e("div",{class:"cover-container"},[e("img",{src:us,alt:""})],-1),$s=[fs,gs];function xs(n,o,i,c,s,t){return a(),d("div",hs,$s)}var ws=r(vs,[["render",xs]]);const Es={name:"VueDemo"},bs={id:"vue-demo"},As={id:"cover"},Cs={id:"code-native-element"},Ms={id:"code-host-router"},ys={id:"code-host-wrapper"};function Rs(n,o,i,c,s,t){const _=ws,m=ps,u=as,v=ss;return a(),d("section",bs,[e("section",As,[l(_)]),e("section",Cs,[l(m)]),e("section",Ms,[l(u)]),e("section",ys,[l(v)])])}var Is=r(Es,[["render",Rs]]);const Ss={name:"AngularDemoCode"},js={class:"slide-content"},Bs=p(`<div class="slide-title"><h5>ADAPTATION DU ROUTER</h5></div><div class="code-col-grid"><div class="code-col"><div class="text-base"># app-routing.module.ts</div><pre>        <code class="js">
const routes: Routes = [
  // Others routes goes there
  { 
    path:&#39;mfe&#39;, 
    loadChildren: () =&gt; import(&#39;mfe/module&#39;).then(m =&gt; m.MfeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
        </code>
        </pre></div><div class="code-col"><div class="text-base"># decl.d.ts</div><pre>        <code class="js">
declare module &#39;mfe/module&#39;;
        </code>
        </pre></div></div>`,2),ks=[Bs];function Ds(n,o,i,c,s,t){return a(),d("div",js,ks)}var Ts=r(Ss,[["render",Ds]]),Ns="/snow-shop-slides/assets/angular-logo.f7f4c735.png";const Ps={name:"AngularDemoCover"},Fs={class:"slide-content"},Os=e("div",{class:"slide-title"},[e("h5",null,"EXEMPLE AVEC ANGULAR")],-1),Hs=e("div",{class:"cover-container"},[e("img",{src:Ns,alt:""})],-1),qs=[Os,Hs];function zs(n,o,i,c,s,t){return a(),d("div",Fs,qs)}var Vs=r(Ps,[["render",zs]]);const Us={name:"AngularDemo"},Gs={id:"angular-demo"},Js={id:"cover"},Ws={id:"code"};function Ls(n,o,i,c,s,t){const _=Vs,m=Ts;return a(),d("section",Gs,[e("section",Js,[l(_)]),e("section",Ws,[l(m)])])}var Qs=r(Us,[["render",Ls]]),Ys="/snow-shop-slides/assets/when-to-use-it.d6bcd387.png";const Ks={name:"WhenToUseIt"},Zs={class:"slide-content"},Xs=e("div",{class:"slide-title"},[e("h5",null,"QUAND L'UTILISER ?")],-1),et=e("div",{class:"flex flex-col grow items-center justify-center"},[e("img",{class:"schema-full-screen",src:Ys,alt:""})],-1),st=[Xs,et];function tt(n,o,i,c,s,t){return a(),d("div",Zs,st)}var ot=r(Ks,[["render",tt]]);const nt={name:"Config"},it={class:"slide-content"},ct=p(`<div class="slide-title"><h5>WEBPACK MODULE FEDERATION</h5></div><div class="code-col-grid"><div class="code-col"><h4>Remote</h4><div class="text-base self-start"># webpack.config.js</div><pre>        <code class="js">
const ModuleFederationPlugin = require(&quot;webpack/lib/container/ModuleFederationPlugin&quot;); 
// Other config goes here 
plugins: [ 
  new ModuleFederationPlugin({ 
    // For remotes (please adjust) 
    name: &quot;mfe&quot;, 
    filename: &quot;remoteEntry.js&quot;,
    exposes: { &#39;./module&#39;: &#39;.//src/app/app.module.ts&#39;, }, 
    shared: share({
      // Shared libs goes there 
      ...sharedMappings.getDescriptors() 
    }) 
  }),
  sharedMappings.getPlugin() 
],
        </code>
        </pre></div><div class="code-col"><h4>Host</h4><div class="text-base self-start"># webpack.config.js</div><pre>        <code class="js">
const ModuleFederationPlugin = require(&quot;webpack/lib/container/ModuleFederationPlugin&quot;);
// Other config goes here
plugins: [
  new ModuleFederationPlugin({
    // For hosts (please adjust)
    remotes: {
      &#39;mfe&#39;:&#39;mfe@http://localhost:4201/remoteEntry.js&#39;
    },
    shared: share({
      // Shared libs goes there
      ...sharedMappings.getDescriptors()
    })
  }),
  ...sharedMappings.getPlugin()
],  
        </code>
        </pre></div></div>`,2),at=[ct];function dt(n,o,i,c,s,t){return a(),d("div",it,at)}var rt=r(nt,[["render",dt]]),E="/snow-shop-slides/assets/closed-box.1c7bc185.png",C="/snow-shop-slides/assets/remote-chunk.55459765.png",A="/snow-shop-slides/assets/webpack-arrow.6e632b2c.png",M="/snow-shop-slides/assets/bundle.84227b42.png";const lt={name:"RemoteChunk"},_t={class:"slide-content"},mt=p('<div class="slide-title"><h5>WEBPACK MODULE FEDERATION</h5></div><div class="flex flex-col grow items-center justify-evenly bg-top bg-bundleyourscript bg-no-repeat bg-contain"><div class="h-full w-full flex flex-row items-end justify-evenly pb-14"><div class="relative h-52 w-52 flex flex-row items-end justify-center"><img class="m0 h-24 absolute bottom-0 left-5 z-30" src="'+E+'" alt=""><img class="m0 h-52 absolute bottom-16 left-0 z-0" src="'+C+'" alt=""><img class="m0 h-52 absolute bottom-14 left-24 z-0" src="'+C+'" alt=""></div><img class="m0 h-32" src="'+A+'" alt=""><img class="m0 h-32" src="'+M+'" alt=""></div></div>',2),pt=[mt];function ut(n,o,i,c,s,t){return a(),d("div",_t,pt)}var vt=r(lt,[["render",ut]]);const ht={name:"Bundle"},ft={class:"slide-content"},gt=p('<div class="slide-title"><h5>WEBPACK</h5></div><div class="flex flex-col grow items-center justify-evenly bg-top bg-bundleyourscript bg-no-repeat bg-contain"><div class="h-full w-full flex flex-row items-end justify-evenly pb-14"><div class="relative h-52 w-52 flex flex-row items-end justify-center"><img class="m0 h-24 absolute bottom-0 left-0 z-30" src="'+E+'" alt=""><img class="m0 h-24 absolute bottom-10 left-12 z-10" src="'+E+'" alt=""><img class="m0 h-24 absolute bottom-5 left-20 z-20" src="'+E+'" alt=""></div><img class="m0 h-32" src="'+A+'" alt=""><img class="m0 h-32" src="'+M+'" alt=""></div></div>',2),$t=[gt];function xt(n,o,i,c,s,t){return a(),d("div",ft,$t)}var wt=r(ht,[["render",xt]]);const Et={name:"Chunk"},bt={class:"slide-content"},At=p('<div class="slide-title" data-v-5f178226><h5 data-v-5f178226>WEBPACK</h5></div><div class="flex flex-col grow justify-end items-evenly bg-top bg-bundleyourscript bg-no-repeat bg-contain" data-v-5f178226><div class="h-full w-full flex flex-row items-end justify-evenly pb-14" data-v-5f178226><div class="relative w-52 h-52" data-v-5f178226><div class="absolute module bottom-1 left-12 z-30" data-v-5f178226>Module 1</div><div class="absolute module bottom-3 left-14 z-20" data-v-5f178226>Module 2</div><div class="absolute module bottom-5 left-16 z-10" data-v-5f178226>Module 3</div></div><img class="m0 h-32" src="'+A+'" alt="" data-v-5f178226><img class="m0 h-32" src="'+E+'" alt="" data-v-5f178226></div></div>',2),Ct=[At];function Mt(n,o,i,c,s,t){return a(),d("div",bt,Ct)}var yt=r(Et,[["render",Mt],["__scopeId","data-v-5f178226"]]),Rt="/snow-shop-slides/assets/webpack-logo.33e16aff.png";const It={name:"WebPackCover"},St={class:"slide-content"},jt=e("div",{class:"slide-title"},[e("h5",null,"WEBPACK")],-1),Bt=e("div",{class:"cover-container"},[e("img",{src:Rt,alt:""})],-1),kt=[jt,Bt];function Dt(n,o,i,c,s,t){return a(),d("div",St,kt)}var Tt=r(It,[["render",Dt]]);const Nt={name:"WebpackModuleFederation"},Pt={id:"webpack-module-federation"},Ft={id:"cover"},Ot={id:"chunk","data-auto-animate":""},Ht={id:"bundle","data-auto-animate":""},qt={id:"remote-chunk","data-auto-animate":""},zt={id:"config"},Vt={id:"when-to-use-it"};function Ut(n,o,i,c,s,t){const _=Tt,m=yt,u=wt,v=vt,x=rt,b=ot;return a(),d("section",Pt,[e("section",Ft,[l(_)]),e("section",Ot,[l(m)]),e("section",Ht,[l(u)]),e("section",qt,[l(v)]),e("section",zt,[l(x)]),e("section",Vt,[l(b)])])}var Gt=r(Nt,[["render",Ut]]),f="/snow-shop-slides/assets/html.5e6c52cd.png",g="/snow-shop-slides/assets/javascript.efb94369.png",$="/snow-shop-slides/assets/css.864ca8e4.png";const Jt={name:"ModuleGrouped"},Wt={class:"slide-content"},Lt=p('<div class="slide-title"><h5>ARCHITECTURE MICROSERVICE</h5></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4 grow mx-4 md:mx-32 lg:mx-52 relative"><div class="flex-1 flex flex-row items-center justify-evenly relative"><img class="w-14" src="'+f+'" alt=""><img class="w-14" src="'+g+'" alt=""><img class="w-14" src="'+$+'" alt=""><div class="absolute bg-devoxx-orange flex flex-row items-center border-dashed border-2 border-devoxx-orange justify-center h-1/2 w-5/6 rounded-md bg-opacity-50"> Component A </div></div><div class="flex-1 flex flex-row items-center justify-evenly relative"><img class="w-14" src="'+f+'" alt=""><img class="w-14" src="'+g+'" alt=""><img class="w-14" src="'+$+'" alt=""><div class="absolute bg-devoxx-orange flex flex-row items-center border-dashed border-2 border-devoxx-orange justify-center h-1/2 w-5/6 rounded-md bg-opacity-50"> Component B </div></div><div class="absolute bg-devoxx-cyan flex flex-row items-center border-dashed border-2 border-devoxx-cyan justify-center h-5/6 md:h-2/3 md:top-1/6 top-25/2 w-full rounded-md bg-opacity-50"> Module </div></div>',2),Qt=[Lt];function Yt(n,o,i,c,s,t){return a(),d("div",Wt,Qt)}var Kt=r(Jt,[["render",Yt]]);const Zt={name:"ModuleSplited"},Xt={class:"slide-content"},eo=p('<div class="slide-title"><h5>ARCHITECTURE MICROSERVICE</h5></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4 grow mx-4 md:mx-32 lg:mx-52"><div class="flex-1 flex flex-row items-center justify-evenly relative"><img class="w-14" src="'+f+'" alt=""><img class="w-14" src="'+g+'" alt=""><img class="w-14" src="'+$+'" alt=""><div class="absolute bg-devoxx-orange flex flex-row items-center border-dashed border-2 border-devoxx-orange justify-center h-1/2 w-full rounded-md bg-opacity-50"> Component A </div></div><div class="flex-1 flex flex-row items-center justify-evenly relative"><img class="w-14" src="'+f+'" alt=""><img class="w-14" src="'+g+'" alt=""><img class="w-14" src="'+$+'" alt=""><div class="absolute bg-devoxx-orange flex flex-row items-center border-dashed border-2 border-devoxx-orange justify-center h-1/2 w-full rounded-md bg-opacity-50"> Component B </div></div></div>',2),so=[eo];function to(n,o,i,c,s,t){return a(),d("div",Xt,so)}var oo=r(Zt,[["render",to]]);const no={name:"ComponentGrouped"},io={class:"slide-content"},co=p('<div class="slide-title"><h5>ARCHITECTURE MICROSERVICE</h5></div><div class="flex flex-row grow items-center justify-evenly mx-4 md:mx-32 lg:mx-80 relative"><img class="w-14" src="'+f+'" alt=""><img class="w-14" src="'+g+'" alt=""><img class="w-14" src="'+$+'" alt=""><div class="absolute bg-devoxx-orange flex flex-row items-center border-dashed border-2 border-devoxx-orange justify-center h-1/2 w-full rounded-md bg-opacity-50"> Component </div></div>',2),ao=[co];function ro(n,o,i,c,s,t){return a(),d("div",io,ao)}var lo=r(no,[["render",ro]]);const _o={name:"ComponentSplited"},mo={class:"slide-content"},po=p('<div class="slide-title"><h5>ARCHITECTURE MICROSERVICE</h5></div><div class="flex flex-row grow items-center justify-evenly mx-4 md:mx-32 lg:mx-80 relative"><img class="w-14" src="'+f+'" alt=""><img class="w-14" src="'+g+'" alt=""><img class="w-14" src="'+$+'" alt=""><div class="hidden absolute bg-devoxx-orange flex flex-row items-center border-dashed border-2 border-devoxx-orange justify-center h-1/2 w-full rounded-md bg-opacity-50"> Component </div></div>',2),uo=[po];function vo(n,o,i,c,s,t){return a(),d("div",mo,uo)}var ho=r(_o,[["render",vo]]);const fo={name:"Modules"},go={id:"modules"},$o={id:"component-splited","data-auto-animate":""},xo={id:"component-grouped","data-auto-animate":""},wo={id:"module-splited","data-auto-animate":""},Eo={id:"module-grouped","data-auto-animate":""};function bo(n,o,i,c,s,t){const _=ho,m=lo,u=oo,v=Kt;return a(),d("section",go,[e("section",$o,[l(_)]),e("section",xo,[l(m)]),e("section",wo,[l(u)]),e("section",Eo,[l(v)])])}var Ao=r(fo,[["render",bo]]),Co="/snow-shop-slides/assets/vertical_split.a33d19ff.png";const Mo={name:"OurChallenge"},yo={class:"slide-content"},Ro=e("div",{class:"slide-title"},[e("h5",null,"D\xC9COUPAGE VERTICAL VS HORIZONTAL")],-1),Io=e("div",{class:"flex flex-col grow items-center justify-center"},[e("img",{class:"schema-full-screen",src:Co,alt:""})],-1),So=[Ro,Io];function jo(n,o,i,c,s,t){return a(),d("div",yo,So)}var Bo=r(Mo,[["render",jo]]),ko="/snow-shop-slides/assets/snowshop.724cdbe1.png";const Do={name:"SnowShop"},To={class:"slide-content"},No=e("div",{class:"slide-title"},[e("h5",null,"ARCHITECTURE MICRO-FRONTEND \u2013 CHALLENGE")],-1),Po=e("div",{class:"flex flex-col grow items-center justify-center"},[e("img",{class:"schema-full-screen",src:ko,alt:""})],-1),Fo=[No,Po];function Oo(n,o,i,c,s,t){return a(),d("div",To,Fo)}var Ho=r(Do,[["render",Oo]]);const qo={name:"OurChallenge"},zo={id:"challenge"},Vo={id:"snow-shop"},Uo={id:"vertical-split"};function Go(n,o,i,c,s,t){const _=Ho,m=Bo;return a(),d("section",zo,[e("section",Vo,[l(_)]),e("section",Uo,[l(m)])])}var Jo=r(qo,[["render",Go]]),Wo="/snow-shop-slides/assets/mf_principles.4e3ad6e0.png",Lo="/snow-shop-slides/assets/luca_mezzalira_building_mf.232a9c39.jpeg";const Qo={name:"FundamentalPrinciples"},Yo={class:"slide-content"},Ko=p('<div class="slide-title"><h5>LES PRINCIPES FONDAMENTAUX</h5></div><div class="grid grow md:gap-4 grid-cols-3"><div class="col-span-2 p-1 md:p-4 flex flex-row items-center justify-center"><img class="w-full md:w-3/4" src="'+Wo+'" alt=""></div><div class="p-1 md:p-12 flex flex-row items-center justify-center"><img class="w-full md:w-3/4" src="'+Lo+'" alt=""></div></div><div class="absolute bottom-2 left-24 text-sm text-devoxx-cyan"> Sch\xE9ma tir\xE9 du livre &quot;Building Micro-frontends&quot; \u2013 Luca Mezzalira </div>',3),Zo=[Ko];function Xo(n,o,i,c,s,t){return a(),d("div",Yo,Zo)}var en=r(Qo,[["render",Xo]]),sn="/snow-shop-slides/assets/with_microfrontends.b2a37878.png";const tn={name:"WithMicroFrontends"},on={class:"slide-content"},nn=e("div",{class:"slide-title"},[e("h5",null,"ARCHITECTURE MICROFRONTEND")],-1),cn=e("div",{class:"flex flex-col grow items-center justify-center"},[e("img",{class:"schema-full-screen sized",src:sn,alt:""}),e("div",{class:"absolute bottom-2 right-2 text-sm text-devoxx-cyan"},' Sch\xE9ma tir\xE9 du livre "Building Micro-frontends" \u2013 Luca Mezzalira ')],-1),an=[nn,cn];function dn(n,o,i,c,s,t){return a(),d("div",on,an)}var rn=r(tn,[["render",dn]]),ln="/snow-shop-slides/assets/without_microfrontends.547cc714.png";const _n={name:"WithoutMicroFrontends"},mn={class:"slide-content"},pn=e("div",{class:"slide-title"},[e("h5",null,"ARCHITECTURE MICROSERVICE")],-1),un=e("div",{class:"flex flex-col grow items-center justify-center"},[e("img",{class:"schema-full-screen sized",src:ln,alt:""}),e("div",{class:"absolute bottom-2 right-2 text-sm text-devoxx-cyan"},' Sch\xE9ma tir\xE9 du livre "Building Micro-frontends" \u2013 Luca Mezzalira ')],-1),vn=[pn,un];function hn(n,o,i,c,s,t){return a(),d("div",mn,vn)}var fn=r(_n,[["render",hn]]);const gn={name:"Microfrontends"},$n={id:"microservices"},xn={id:"without-microfrontends","data-auto-animate":""},wn={id:"with-microfrontends","data-auto-animate":""},En={id:"fundamental-principles","data-auto-animate":""};function bn(n,o,i,c,s,t){const _=fn,m=rn,u=en;return a(),d("section",$n,[e("section",xn,[l(_)]),e("section",wn,[l(m)]),e("section",En,[l(u)])])}var An=r(gn,[["render",bn]]),Cn="/snow-shop-slides/assets/domain_driven_design.45dada24.png",Mn="/snow-shop-slides/assets/ddd_eric_evans.989a0c9c.jpeg",yn="/snow-shop-slides/assets/enterprise_angular_microfrontends.ae75ece6.webp";const Rn={name:"DDD"},In={class:"slide-content"},Sn=p('<div class="slide-title"><h5>LE DOMAIN DRIVEN DESIGN (DDD)</h5></div><div class="grid grow md:gap-4 grid-cols-3"><div class="col-span-2 p-1 md:p-4 flex flex-row items-center justify-center"><img class="w-full md:w-3/4" src="'+Cn+'" alt=""></div><div class="relative p-1 md:p-12 flex flex-row items-center justify-center"><img class="w-full md:w-3/4" src="'+Mn+'" alt=""><img class="absolute left-0 bottom-8 md:bottom-0 w-2/3 md:w-1/2" src="'+yn+'" alt=""></div></div><div class="absolute bottom-2 left-24 text-sm text-devoxx-cyan"> Sch\xE9ma tir\xE9 du livre &quot;DDD, Nx Monorepos and Micro Frontends&quot; \u2013 Manfred Steyer </div>',3),jn=[Sn];function Bn(n,o,i,c,s,t){return a(),d("div",In,jn)}var kn=r(Rn,[["render",Bn]]),h="data:image/png;base64,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";const Dn={name:"ToMicroService2"},Tn={class:"slide-content"},Nn=p('<div class="slide-title" data-v-64040e6d><h5 data-v-64040e6d>VERS UNE ARCHITECTURE MICROSERVICE</h5></div><div class="flex flex-row grow items-center justify-center" data-v-64040e6d><img class="bloc" src="'+h+'" alt="" data-v-64040e6d><img class="bloc" src="'+h+'" alt="" data-v-64040e6d><img class="bloc" src="'+h+'" alt="" data-v-64040e6d></div>',2),Pn=[Nn];function Fn(n,o,i,c,s,t){return a(),d("div",Tn,Pn)}var On=r(Dn,[["render",Fn],["__scopeId","data-v-64040e6d"]]);const Hn={name:"ToMicroService2"},qn={class:"slide-content"},zn=p('<div class="slide-title"><h5>VERS UNE ARCHITECTURE MICROSERVICE</h5></div><div class="flex flex-row grow items-center justify-center"><img class="w-16 md:w-32" src="'+h+'" alt=""><img class="w-16 md:w-32" src="'+h+'" alt=""><img class="w-16 md:w-32" src="'+h+'" alt=""></div>',2),Vn=[zn];function Un(n,o,i,c,s,t){return a(),d("div",qn,Vn)}var Gn=r(Hn,[["render",Un]]),Jn="/snow-shop-slides/assets/monolith_bloc.51dbdda2.png";const Wn={name:"ToMicroService1"},Ln={class:"slide-content"},Qn=e("div",{class:"slide-title"},[e("h5",null,"VERS UNE ARCHITECTURE MICROSERVICE")],-1),Yn=e("div",{class:"flex flex-row grow items-center justify-center"},[e("img",{class:"w-48 md:w-96 absolute",src:Jn,alt:""})],-1),Kn=[Qn,Yn];function Zn(n,o,i,c,s,t){return a(),d("div",Ln,Kn)}var Xn=r(Wn,[["render",Zn]]),ei="/snow-shop-slides/assets/monolithic.b70f2020.png";const si={name:"Monolithic"},ti={class:"slide-content"},oi=e("div",{class:"slide-title"},[e("h5",null,"ARCHITECTURE MONOLITHIQUE")],-1),ni=e("div",{class:"flex flex-col grow items-center justify-center"},[e("img",{class:"schema-full-screen",src:ei,alt:""}),e("div",{class:"absolute bottom-2 right-2 text-sm text-devoxx-cyan"},' Sch\xE9ma tir\xE9 du livre "Building Micro-frontends" \u2013 Luca Mezzalira ')],-1),ii=[oi,ni];function ci(n,o,i,c,s,t){return a(),d("div",ti,ii)}var ai=r(si,[["render",ci]]);const di={name:"FromMonolithicToMicroservice"},ri={id:"from-monolithic-to-microservice"},li={id:"monolithic"},_i={id:"microservice1","data-auto-animate":""},mi={id:"microservice2","data-auto-animate":""},pi={id:"microservice3","data-auto-animate":""},ui={id:"ddd","data-auto-animate":""};function vi(n,o,i,c,s,t){const _=ai,m=Xn,u=Gn,v=On,x=kn;return a(),d("section",ri,[e("section",li,[l(_)]),e("section",_i,[l(m)]),e("section",mi,[l(u)]),e("section",pi,[l(v)]),e("section",ui,[l(x)])])}var hi=r(di,[["render",vi]]),fi="/snow-shop-slides/assets/manfred_steyer.997dd0a5.png",y="/snow-shop-slides/assets/github.d83ddf4e.png",gi="/snow-shop-slides/assets/angular-architect.50fcfe7a.png";const $i={name:"MyBio"},xi={class:"slide-content"},wi=p('<div class="slide-title" data-v-7880a06c><h5 data-v-7880a06c>MANFRED THE MAN</h5></div><div class="grow grid grid-cols-4 gap-2 pb-24 mx-4" data-v-7880a06c><div class="col-span-4 md:col-span-1 flex flex-col justify-center items-center" data-v-7880a06c><img src="'+fi+'" class="m0 w-1/3 md:w-1/2" data-v-7880a06c></div><div class="col-span-4 md:col-span-3 flex flex-col justify-evenly items-start" data-v-7880a06c><a class="flex flex-row items-center mx-auto md:mx-0" href="https://twitter.com/ManfredSteyer" data-v-7880a06c><img src="'+w+'" class="w-8 md:w-16" data-v-7880a06c><div class="ml-2 md:ml-8 break-all text-sky-500 text-xl md:text-4xl font-bold" data-v-7880a06c> @ManfredSteyer </div></a><a class="flex flex-row items-center mx-auto md:mx-0" href="https://github.com/manfredsteyer" data-v-7880a06c><img src="'+y+'" class="w-8 md:w-16" data-v-7880a06c><div class="ml-2 md:ml-8 break-all text-black text-xl md:text-4xl font-bold" data-v-7880a06c> https://github.com/manfredsteyer </div></a><a class="flex flex-row items-center mx-auto md:mx-0" href="https://www.angulararchitects.io/en/" data-v-7880a06c><img src="'+gi+'" class="w-24 md:w-56" data-v-7880a06c><div class="ml-2 md:ml-8 break-all text-3xl text-kzn-teal text-xl md:text-4xl font-bold" data-v-7880a06c> https://www.angulararchitects.io/en/ </div></a></div></div>',2),Ei=[wi];function bi(n,o,i,c,s,t){return a(),d("div",xi,Ei)}var Ai=r($i,[["render",bi],["__scopeId","data-v-7880a06c"]]),Ci="/snow-shop-slides/assets/me.37038484.png",R="/snow-shop-slides/assets/Logo-Kaizen-black.342c971d.png";const Mi={name:"MyBio"},yi={class:"slide-content"},Ri=p('<div class="slide-title" data-v-68412a5d><h5 data-v-68412a5d>VOTRE H\xD4TE</h5></div><div class="grow grid grid-cols-4 md:col-span-1 gap-2 pb-24 mx-4" data-v-68412a5d><div class="md:col-span-1 col-span-4 flex flex-col justify-center items-center" data-v-68412a5d><div class="centered-column" data-v-68412a5d><div class="card" data-v-68412a5d><img src="'+Ci+'" class="profil-img" data-v-68412a5d><div class="text-lg font-bold text-black text-center" data-v-68412a5d> SYLVAIN DEDIEU </div></div><div class="md:mt-4 text-base font-bold text-black text-center" data-v-68412a5d> Domaines d&#39;expertises </div><p class="text-sm my-0 md:px-4 text-devoxx-cyan" data-v-68412a5d> Angular - Vue - AnularJS - Ionic - Flutter - Firebase - Node - React </p></div></div><div class="col-span-4 md:col-span-3 flex flex-col justify-evenly items-start" data-v-68412a5d><a class="flex flex-row items-center mx-auto md:mx-0" href="https://twitter.com/DedieuS" data-v-68412a5d><img src="'+w+'" class="m0 w-8 md:w-16" data-v-68412a5d><div class="ml-8 text-sky-500 text-xl md:text-4xl font-bold" data-v-68412a5d>@DedieuS</div></a><a class="flex flex-row items-center mx-auto md:mx-0" href="https://github.com/sdedieu" data-v-68412a5d><img src="'+y+'" class="m0 w-8 md:w-16" data-v-68412a5d><div class="ml-8 text-black text-xl md:text-4xl font-bold" data-v-68412a5d> https://github.com/sdedieu </div></a><a class="flex flex-row items-center mx-auto md:mx-0" href="mailto:sylvain.dedieu@kaizen-solutions.net" data-v-68412a5d><img src="'+R+'" class="m0 w-8 md:w-16" data-v-68412a5d><div class="ml-8 text-kzn-teal text-xl md:text-4xl font-bold" data-v-68412a5d> sylvain.dedieu@kaizen-solutions.net </div></a></div></div>',2),Ii=[Ri];function Si(n,o,i,c,s,t){return a(),d("div",yi,Ii)}var ji=r(Mi,[["render",Si],["__scopeId","data-v-68412a5d"]]);const Bi={name:"Bio"},ki={id:"bio"},Di={id:"my-bio"},Ti={id:"manfred-bio"};function Ni(n,o,i,c,s,t){const _=ji,m=Ai;return a(),d("section",ki,[e("section",Di,[l(_)]),e("section",Ti,[l(m)])])}var Pi=r(Bi,[["render",Ni]]),Fi="/snow-shop-slides/assets/Logo-Kaizen-couleurs.9dd46d18.png";const Oi={},Hi={id:"cover"},qi=e("div",{class:"slide-cover"},[e("div",{class:"slide-title"},[e("h2",null,"Micro-frontend via Webpack 5 Module F\xE9d\xE9ration")]),e("div",null,[e("img",{class:"kaizen-logo",src:Fi,alt:"Logo Kaizen Blanc"})])],-1),zi=[qi];function Vi(n,o){return a(),d("section",Hi,zi)}var Ui=r(Oi,[["render",Vi]]);const Gi={name:"App"},Ji={id:"app"},Wi={class:"reveal"},Li={class:"slides"},Qi=e("img",{class:"absolute bottom-0 left-4 w-16 z-50",src:R,alt:"Kaizen Logo Black"},null,-1);function Yi(n,o,i,c,s,t){const _=Ui,m=Pi,u=hi,v=An,x=Jo,b=Ao,I=Gt,S=Qs,j=Is,B=Qe,k=Ie,D=re;return a(),d("div",Ji,[e("div",Wi,[e("div",Li,[Qi,l(_),l(m),l(u),l(v),l(x),l(b),l(I),l(S),l(j),l(B),l(k),l(D)])])])}var Ki=r(Gi,[["render",Yi]]);T(Ki).mount("#app");N.initialize({history:!0,width:"100%",height:"80%",margin:0,plugins:[P,F]});
