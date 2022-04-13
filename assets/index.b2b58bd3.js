import{o as a,c as d,a as p,b as e,d as l,e as A,j as D,R as j,f as R}from"./vendor.7a73c8a6.js";const N=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const _ of t.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&c(_)}).observe(document,{childList:!0,subtree:!0});function i(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerpolicy&&(t.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?t.credentials="include":s.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(s){if(s.ep)return;s.ep=!0;const t=i(s);fetch(s.href,t)}};N();var P="/snow-shop-slides/assets/manfred_steyer_avatar.204c1caa.png",h="/snow-shop-slides/assets/twitter.b604a49d.png",q="/snow-shop-slides/assets/mike_avatar.0dce0456.png",O="/snow-shop-slides/assets/marine_brothier_avatar.f8732a73.png",B="/snow-shop-slides/assets/linkedin.25794e1f.png",F="/snow-shop-slides/assets/kzn_avatar.e13594be.png",r=(o,n)=>{const i=o.__vccOpts||o;for(const[c,s]of n)i[c]=s;return i};const S={name:"SpecialThanks"},z={class:"slide-content"},L=p('<div class="slide-title"><h5>REMERCIEMENTS</h5></div><div class="grid grid-cols-1 md:grid-cols-2 grow mx-4 lg:mx-12 pb-12"><div class="flex flex-row items-center justify-evenly"><img class="m0 w-16 md:w-24" src="'+P+'"><a class="flex flex-row items-center" href="https://twitter.com/ManfredSteyer"><img src="'+h+'" class="w-8 md:w-16"><div class="ml-2 text-sky-500 font-bold text-xl md:text-4xl">@ManfredSteyer</div></a></div><div class="flex flex-row items-center justify-evenly"><img class="m0 w-16 md:w-24" src="'+q+'"><a class="flex flex-row items-center" href="https://twitter.com/MikeZks"><img src="'+h+'" class="w-8 md:w-16"><div class="ml-8 text-sky-500 font-bold text-xl md:text-4xl">@MikeZks</div></a></div><div class="flex flex-row items-center justify-evenly"><img class="m0 w-16 md:w-24" src="'+O+'"><a class="flex flex-row items-center" href="https://www.linkedin.com/in/marine-brothier-4766a380/"><img src="'+B+'" class="w-8 md:w-16"><div class="ml-8 text-sky-700 font-bold text-xl md:text-4xl">Marine Brothier</div></a></div><div class="flex flex-row items-center justify-evenly"><img class="m0 w-32 md:w-72" src="'+F+'"><a class="flex flex-row items-center" href="https://twitter.com/Kaizen_Sln"><img src="'+h+'" class="w-8 md:w-16"><div class="ml-8 text-sky-500 font-bold text-xl md:text-4xl">@Kaizen_Sln</div></a></div></div>',2),T=[L];function I(o,n,i,c,s,t){return a(),d("div",z,T)}var V=r(S,[["render",I]]);const W={name:"Thanks"},U={class:"slide-content"},H=e("div",{class:"slide-title"},[e("h5",null,"MERCI !")],-1),K=e("div",{class:"cover-container thanks"},null,-1),J=[H,K];function X(o,n,i,c,s,t){return a(),d("div",U,J)}var G=r(W,[["render",X]]);const Z={name:"Thankings"},Q={id:"thankings"},Y={id:"thanks"},ee={id:"special-thank"};function se(o,n,i,c,s,t){const _=G,m=V;return a(),d("section",Q,[e("section",Y,[l(_)]),e("section",ee,[l(m)])])}var te=r(Z,[["render",se]]);const ne={name:"AngularJsDemoCodeNativeElement"},oe={class:"slide-content"},ie=p(`<div class="slide-title"><h5>ENCAPSULATION EN WEBCOMPONENT</h5></div><div class="code-col-grid"><div class="code-col"><div class="text-base self-start"># main.js</div><pre>        <code class="js">
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
        </pre></div></div>`,2),ce=[ie];function ae(o,n,i,c,s,t){return a(),d("div",oe,ce)}var de=r(ne,[["render",ae]]),re="/snow-shop-slides/assets/angularjs-logo.59fa2b69.png";const le={name:"AngularJsDemoCover"},_e={class:"slide-content"},me=e("div",{class:"slide-title"},[e("h5",null,"EXEMPLE AVEC ANGULARJS")],-1),pe=e("div",{class:"cover-container"},[e("img",{src:re,alt:"AngularJS Logo"})],-1),ue=[me,pe];function ve(o,n,i,c,s,t){return a(),d("div",_e,ue)}var he=r(le,[["render",ve]]);const fe={name:"AngularJsDemo"},$e={id:"angularjs-demo"},ge={id:"cover"},xe={id:"code-native-element"};function we(o,n,i,c,s,t){const _=he,m=de;return a(),d("section",$e,[e("section",ge,[l(_)]),e("section",xe,[l(m)])])}var be=r(fe,[["render",we]]);const Me={name:"ReactDemoCodeNativeElement"},ye={class:"slide-content"},Ee=p(`<div class="slide-title"><h5>ENCAPSULATION EN WEBCOMPONENT</h5></div><div class="code-col-grid"><div class="code-col"><div class="text-base self-start"># main.js</div><pre>        <code class="js">
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
        </pre></div></div>`,2),ke=[Ee];function Ce(o,n,i,c,s,t){return a(),d("div",ye,ke)}var Ae=r(Me,[["render",Ce]]),De="/snow-shop-slides/assets/react-logo.10f41377.png";const je={name:"ReactDemoCover"},Re={class:"slide-content"},Ne=e("div",{class:"slide-title"},[e("h5",null,"EXEMPLE AVEC REACT")],-1),Pe=e("div",{class:"cover-container"},[e("img",{src:De,alt:"React Logo"})],-1),qe=[Ne,Pe];function Oe(o,n,i,c,s,t){return a(),d("div",Re,qe)}var Be=r(je,[["render",Oe]]);const Fe={name:"ReactDemo"},Se={id:"react-demo"},ze={id:"cover"},Le={id:"code-native-element"};function Te(o,n,i,c,s,t){const _=Be,m=Ae;return a(),d("section",Se,[e("section",ze,[l(_)]),e("section",Le,[l(m)])])}var Ie=r(Fe,[["render",Te]]);const Ve={name:"VueDemoCodeHostWrapper"},We={class:"slide-content"},Ue=p(`<div class="slide-title"><h5>COMPOSANT WRAPPER</h5></div><div class="code-col-grid single-col"><div class="code-col"><div class="text-base self-start"># app-routing.module.ts</div><pre>        <code class="js">
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
        </pre></div></div>`,2),He=[Ue];function Ke(o,n,i,c,s,t){return a(),d("div",We,He)}var Je=r(Ve,[["render",Ke]]);const Xe={name:"VueDemoCodeHostRouter"},Ge={class:"slide-content"},Ze=p(`<div class="slide-title"><h5>ADAPTATION DU ROUTER</h5></div><div class="code-col-grid"><div class="code-col"><div class="text-base"># app-routing.module.ts</div><pre>        <code class="js">
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
        </pre></div></div>`,2),Qe=[Ze];function Ye(o,n,i,c,s,t){return a(),d("div",Ge,Qe)}var es=r(Xe,[["render",Ye]]);const ss={name:"VueDemoCodeNativeElement"},ts={class:"slide-content"},ns=p(`<div class="slide-title"><h5>ENCAPSULATION EN WEBCOMPONENT</h5></div><div class="code-col-grid"><div class="code-col"><div class="text-base self-start"># main.js</div><pre>        <code class="js">
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
        </pre></div></div>`,2),os=[ns];function is(o,n,i,c,s,t){return a(),d("div",ts,os)}var cs=r(ss,[["render",is]]),as="/snow-shop-slides/assets/vue-logo.32e41e2e.png";const ds={name:"VueDemoCover"},rs={class:"slide-content"},ls=e("div",{class:"slide-title"},[e("h5",null,"EXEMPLE AVEC VUE")],-1),_s=e("div",{class:"cover-container"},[e("img",{src:as,alt:"VueJS Logo"})],-1),ms=[ls,_s];function ps(o,n,i,c,s,t){return a(),d("div",rs,ms)}var us=r(ds,[["render",ps]]);const vs={name:"VueDemo"},hs={id:"vue-demo"},fs={id:"cover"},$s={id:"code-native-element"},gs={id:"code-host-router"},xs={id:"code-host-wrapper"};function ws(o,n,i,c,s,t){const _=us,m=cs,u=es,v=Je;return a(),d("section",hs,[e("section",fs,[l(_)]),e("section",$s,[l(m)]),e("section",gs,[l(u)]),e("section",xs,[l(v)])])}var bs=r(vs,[["render",ws]]);const Ms={name:"AngularDemoCode"},ys={class:"slide-content"},Es=p(`<div class="slide-title"><h5>ADAPTATION DU ROUTER</h5></div><div class="code-col-grid"><div class="code-col"><div class="text-base"># app-routing.module.ts</div><pre>        <code class="js">
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
        </pre></div></div>`,2),ks=[Es];function Cs(o,n,i,c,s,t){return a(),d("div",ys,ks)}var As=r(Ms,[["render",Cs]]),Ds="/snow-shop-slides/assets/angular-logo.f7f4c735.png";const js={name:"AngularDemoCover"},Rs={class:"slide-content"},Ns=e("div",{class:"slide-title"},[e("h5",null,"EXEMPLE AVEC ANGULAR")],-1),Ps=e("div",{class:"cover-container"},[e("img",{src:Ds,alt:"Angular Logo"})],-1),qs=[Ns,Ps];function Os(o,n,i,c,s,t){return a(),d("div",Rs,qs)}var Bs=r(js,[["render",Os]]);const Fs={name:"AngularDemo"},Ss={id:"angular-demo"},zs={id:"cover"},Ls={id:"code"};function Ts(o,n,i,c,s,t){const _=Bs,m=As;return a(),d("section",Ss,[e("section",zs,[l(_)]),e("section",Ls,[l(m)])])}var Is=r(Fs,[["render",Ts]]);const Vs={name:"Config"},Ws={class:"slide-content"},Us=p(`<div class="slide-title"><h5>WEBPACK MODULE FEDERATION</h5></div><div class="code-col-grid"><div class="code-col"><h4>Remote</h4><div class="text-base self-start"># webpack.config.js</div><pre>        <code class="js">
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
        </pre></div></div>`,2),Hs=[Us];function Ks(o,n,i,c,s,t){return a(),d("div",Ws,Hs)}var Js=r(Vs,[["render",Ks]]),f="/snow-shop-slides/assets/closed-box.1c7bc185.png",x="/snow-shop-slides/assets/remote-chunk.55459765.png",g="/snow-shop-slides/assets/webpack-arrow.6e632b2c.png",w="/snow-shop-slides/assets/bundle.84227b42.png";const Xs={name:"RemoteChunk"},Gs={class:"slide-content"},Zs=p('<div class="slide-title"><h5>WEBPACK MODULE FEDERATION</h5></div><div class="flex flex-col grow items-center justify-evenly bg-top bg-bundleyourscript bg-no-repeat bg-contain"><div class="h-full w-full flex flex-row items-end justify-evenly pb-14"><div class="relative h-52 w-52 flex flex-row items-end justify-center"><img class="m0 h-24 absolute bottom-0 left-5 z-30" src="'+f+'" alt="Box"><img class="m0 h-52 absolute bottom-16 left-0 z-0" src="'+x+'" alt="Remote Chunk"><img class="m0 h-52 absolute bottom-14 left-24 z-0" src="'+x+'" alt="Remote Chunk"></div><img class="m0 h-32" src="'+g+'" alt="Arrow"><img class="m0 h-32" src="'+w+'" alt="Bundle"></div></div>',2),Qs=[Zs];function Ys(o,n,i,c,s,t){return a(),d("div",Gs,Qs)}var et=r(Xs,[["render",Ys]]);const st={name:"Bundle"},tt={class:"slide-content"},nt=p('<div class="slide-title"><h5>WEBPACK</h5></div><div class="flex flex-col grow items-center justify-evenly bg-top bg-bundleyourscript bg-no-repeat bg-contain"><div class="h-full w-full flex flex-row items-end justify-evenly pb-14"><div class="relative h-52 w-52 flex flex-row items-end justify-center"><img class="m0 h-24 absolute bottom-0 left-0 z-30" src="'+f+'" alt="Box"><img class="m0 h-24 absolute bottom-10 left-12 z-10" src="'+f+'" alt="Box"><img class="m0 h-24 absolute bottom-5 left-20 z-20" src="'+f+'" alt="Box"></div><img class="m0 h-32" src="'+g+'" alt="Arrow"><img class="m0 h-32" src="'+w+'" alt="Bundle"></div></div>',2),ot=[nt];function it(o,n,i,c,s,t){return a(),d("div",tt,ot)}var ct=r(st,[["render",it]]);const at={name:"Chunk"},dt={class:"slide-content"},rt=p('<div class="slide-title" data-v-511e6867><h5 data-v-511e6867>WEBPACK</h5></div><div class="flex flex-col grow justify-end items-evenly bg-top bg-bundleyourscript bg-no-repeat bg-contain" data-v-511e6867><div class="h-full w-full flex flex-row items-end justify-evenly pb-14" data-v-511e6867><div class="relative w-52 h-52" data-v-511e6867><div class="absolute module bottom-1 left-12 z-30" data-v-511e6867>Module 1</div><div class="absolute module bottom-3 left-14 z-20" data-v-511e6867>Module 2</div><div class="absolute module bottom-5 left-16 z-10" data-v-511e6867>Module 3</div></div><img class="m0 h-32" src="'+g+'" alt="Arrow" data-v-511e6867><img class="m0 h-32" src="'+f+'" alt="Box" data-v-511e6867></div></div>',2),lt=[rt];function _t(o,n,i,c,s,t){return a(),d("div",dt,lt)}var mt=r(at,[["render",_t],["__scopeId","data-v-511e6867"]]),pt="/snow-shop-slides/assets/webpack-logo.33e16aff.png";const ut={name:"WebPackCover"},vt={class:"slide-content"},ht=e("div",{class:"slide-title"},[e("h5",null,"WEBPACK")],-1),ft=e("div",{class:"cover-container"},[e("img",{src:pt,alt:"Webpack Logo"})],-1),$t=[ht,ft];function gt(o,n,i,c,s,t){return a(),d("div",vt,$t)}var xt=r(ut,[["render",gt]]);const wt={name:"WebpackModuleFederation"},bt={id:"webpack-module-federation"},Mt={id:"cover"},yt={id:"chunk","data-auto-animate":""},Et={id:"bundle","data-auto-animate":""},kt={id:"remote-chunk","data-auto-animate":""},Ct={id:"config"};function At(o,n,i,c,s,t){const _=xt,m=mt,u=ct,v=et,$=Js;return a(),d("section",bt,[e("section",Mt,[l(_)]),e("section",yt,[l(m)]),e("section",Et,[l(u)]),e("section",kt,[l(v)]),e("section",Ct,[l($)])])}var Dt=r(wt,[["render",At]]),jt="/snow-shop-slides/assets/domain_driven_design.45dada24.png",Rt="/snow-shop-slides/assets/ddd_eric_evans.989a0c9c.jpeg",Nt="/snow-shop-slides/assets/enterprise_angular_microfrontends.ae75ece6.webp";const Pt={name:"DDD"},qt={class:"slide-content"},Ot=p('<div class="slide-title"><h5>LE DOMAIN DRIVEN DESIGN (DDD)</h5></div><div class="grid grow md:gap-4 grid-cols-3"><div class="col-span-2 p-1 md:p-4 flex flex-row items-center justify-center"><img class="w-full md:w-3/4" src="'+jt+'" alt="Domain Driven Design"></div><div class="relative p-1 md:p-12 flex flex-row items-center justify-center"><img class="w-full md:w-3/4" src="'+Rt+'" alt="Domain Driven Design - Eric Evans"><img class="absolute left-0 bottom-8 md:bottom-0 w-2/3 md:w-1/2" src="'+Nt+'" alt="Enterprise Angular Mucrofrontends - Manfred Steyer"></div></div><div class="absolute bottom-2 left-24 text-sm text-devoxx-cyan"> Sch\xE9ma tir\xE9 du livre &quot;DDD, Nx Monorepos and Micro Frontends&quot; \u2013 Manfred Steyer </div>',3),Bt=[Ot];function Ft(o,n,i,c,s,t){return a(),d("div",qt,Bt)}var St=r(Pt,[["render",Ft]]),zt="/snow-shop-slides/assets/mf_principles.4e3ad6e0.png",Lt="/snow-shop-slides/assets/luca_mezzalira_building_mf.232a9c39.jpeg";const Tt={name:"FundamentalPrinciples"},It={class:"slide-content"},Vt=p('<div class="slide-title"><h5>LES PRINCIPES FONDAMENTAUX</h5></div><div class="grid grow md:gap-4 grid-cols-3"><div class="col-span-2 p-1 md:p-4 flex flex-row items-center justify-center"><img class="w-full md:w-3/4" src="'+zt+'" alt="Microfrontends principles"></div><div class="p-1 md:p-12 flex flex-row items-center justify-center"><img class="w-full md:w-3/4" src="'+Lt+'" alt="Building Microfrontends - Luca Mezzalira"></div></div><div class="absolute bottom-2 left-24 text-sm text-devoxx-cyan"> Sch\xE9ma tir\xE9 du livre &quot;Building Micro-frontends&quot; \u2013 Luca Mezzalira </div>',3),Wt=[Vt];function Ut(o,n,i,c,s,t){return a(),d("div",It,Wt)}var Ht=r(Tt,[["render",Ut]]),Kt="/snow-shop-slides/assets/with_microfrontends.b2a37878.png";const Jt={name:"WithMicroFrontends"},Xt={class:"slide-content"},Gt=e("div",{class:"slide-title"},[e("h5",null,"ARCHITECTURE MICROFRONTEND")],-1),Zt=e("div",{class:"flex flex-col grow items-center justify-center"},[e("img",{class:"schema-full-screen sized",src:Kt,alt:"Microfrontends architecture"}),e("div",{class:"absolute bottom-2 right-2 text-sm text-devoxx-cyan"},' Sch\xE9ma tir\xE9 du livre "Building Micro-frontends" \u2013 Luca Mezzalira ')],-1),Qt=[Gt,Zt];function Yt(o,n,i,c,s,t){return a(),d("div",Xt,Qt)}var en=r(Jt,[["render",Yt]]),sn="/snow-shop-slides/assets/without_microfrontends.547cc714.png";const tn={name:"WithoutMicroFrontends"},nn={class:"slide-content"},on=e("div",{class:"slide-title"},[e("h5",null,"ARCHITECTURE MICROSERVICE")],-1),cn=e("div",{class:"flex flex-col grow items-center justify-center"},[e("img",{class:"schema-full-screen sized",src:sn,alt:"Microservices architecture"}),e("div",{class:"absolute bottom-2 right-2 text-sm text-devoxx-cyan"},' Sch\xE9ma tir\xE9 du livre "Building Micro-frontends" \u2013 Luca Mezzalira ')],-1),an=[on,cn];function dn(o,n,i,c,s,t){return a(),d("div",nn,an)}var rn=r(tn,[["render",dn]]);const ln={name:"Microfrontends"},_n={id:"microservices"},mn={id:"without-microfrontends","data-auto-animate":""},pn={id:"with-microfrontends","data-auto-animate":""},un={id:"fundamental-principles","data-auto-animate":""},vn={id:"ddd","data-auto-animate":""};function hn(o,n,i,c,s,t){const _=rn,m=en,u=Ht,v=St;return a(),d("section",_n,[e("section",mn,[l(_)]),e("section",pn,[l(m)]),e("section",un,[l(u)]),e("section",vn,[l(v)])])}var fn=r(ln,[["render",hn]]),$n="/snow-shop-slides/assets/manfred_steyer.997dd0a5.png",b="/snow-shop-slides/assets/github.d83ddf4e.png",gn="/snow-shop-slides/assets/angular-architect.50fcfe7a.png";const xn={name:"MyBio"},wn={class:"slide-content"},bn=p('<div class="slide-title" data-v-7880a06c><h5 data-v-7880a06c>MANFRED THE MAN</h5></div><div class="grow grid grid-cols-4 gap-2 pb-24 mx-4" data-v-7880a06c><div class="col-span-4 md:col-span-1 flex flex-col justify-center items-center" data-v-7880a06c><img src="'+$n+'" class="m0 w-1/3 md:w-1/2" data-v-7880a06c></div><div class="col-span-4 md:col-span-3 flex flex-col justify-evenly items-start" data-v-7880a06c><a class="flex flex-row items-center mx-auto md:mx-0" href="https://twitter.com/ManfredSteyer" data-v-7880a06c><img src="'+h+'" class="w-8 md:w-16" data-v-7880a06c><div class="ml-2 md:ml-8 break-all text-sky-500 text-xl md:text-4xl font-bold" data-v-7880a06c> @ManfredSteyer </div></a><a class="flex flex-row items-center mx-auto md:mx-0" href="https://github.com/manfredsteyer" data-v-7880a06c><img src="'+b+'" class="w-8 md:w-16" data-v-7880a06c><div class="ml-2 md:ml-8 break-all text-black text-xl md:text-4xl font-bold" data-v-7880a06c> https://github.com/manfredsteyer </div></a><a class="flex flex-row items-center mx-auto md:mx-0" href="https://www.angulararchitects.io/en/" data-v-7880a06c><img src="'+gn+'" class="w-24 md:w-56" data-v-7880a06c><div class="ml-2 md:ml-8 break-all text-3xl text-kzn-teal text-xl md:text-4xl font-bold" data-v-7880a06c> https://www.angulararchitects.io/en/ </div></a></div></div>',2),Mn=[bn];function yn(o,n,i,c,s,t){return a(),d("div",wn,Mn)}var En=r(xn,[["render",yn],["__scopeId","data-v-7880a06c"]]),kn="/snow-shop-slides/assets/me.37038484.png",M="/snow-shop-slides/assets/Logo-Kaizen-black.342c971d.png";const Cn={name:"MyBio"},An={class:"slide-content"},Dn=p('<div class="slide-title" data-v-68412a5d><h5 data-v-68412a5d>VOTRE H\xD4TE</h5></div><div class="grow grid grid-cols-4 md:col-span-1 gap-2 pb-24 mx-4" data-v-68412a5d><div class="md:col-span-1 col-span-4 flex flex-col justify-center items-center" data-v-68412a5d><div class="centered-column" data-v-68412a5d><div class="card" data-v-68412a5d><img src="'+kn+'" class="profil-img" data-v-68412a5d><div class="text-lg font-bold text-black text-center" data-v-68412a5d> SYLVAIN DEDIEU </div></div><div class="md:mt-4 text-base font-bold text-black text-center" data-v-68412a5d> Domaines d&#39;expertises </div><p class="text-sm my-0 md:px-4 text-devoxx-cyan" data-v-68412a5d> Angular - Vue - AnularJS - Ionic - Flutter - Firebase - Node - React </p></div></div><div class="col-span-4 md:col-span-3 flex flex-col justify-evenly items-start" data-v-68412a5d><a class="flex flex-row items-center mx-auto md:mx-0" href="https://twitter.com/DedieuS" data-v-68412a5d><img src="'+h+'" class="m0 w-8 md:w-16" data-v-68412a5d><div class="ml-8 text-sky-500 text-xl md:text-4xl font-bold" data-v-68412a5d>@DedieuS</div></a><a class="flex flex-row items-center mx-auto md:mx-0" href="https://github.com/sdedieu" data-v-68412a5d><img src="'+b+'" class="m0 w-8 md:w-16" data-v-68412a5d><div class="ml-8 text-black text-xl md:text-4xl font-bold" data-v-68412a5d> https://github.com/sdedieu </div></a><a class="flex flex-row items-center mx-auto md:mx-0" href="mailto:sylvain.dedieu@kaizen-solutions.net" data-v-68412a5d><img src="'+M+'" class="m0 w-8 md:w-16" data-v-68412a5d><div class="ml-8 text-kzn-teal text-xl md:text-4xl font-bold" data-v-68412a5d> sylvain.dedieu@kaizen-solutions.net </div></a></div></div>',2),jn=[Dn];function Rn(o,n,i,c,s,t){return a(),d("div",An,jn)}var Nn=r(Cn,[["render",Rn],["__scopeId","data-v-68412a5d"]]);const Pn={name:"Bio"},qn={id:"bio"},On={id:"my-bio"},Bn={id:"manfred-bio"};function Fn(o,n,i,c,s,t){const _=Nn,m=En;return a(),d("section",qn,[e("section",On,[l(_)]),e("section",Bn,[l(m)])])}var Sn=r(Pn,[["render",Fn]]),zn="/snow-shop-slides/assets/Logo-Kaizen-couleurs.9dd46d18.png",Ln="/snow-shop-slides/assets/qrc.ba8bc7a9.png";const Tn={},In={id:"cover"},Vn=p('<div class="slide-cover"><div class="slide-title"><h2>Micro-frontend via Webpack 5 Module F\xE9d\xE9ration</h2></div><div><img class="kaizen-logo" src="'+zn+'" alt="Logo Kaizen Blanc"></div><div class="qr-code"><img class="m0" src="'+Ln+'" alt="QR Code Slides"></div></div>',1),Wn=[Vn];function Un(o,n){return a(),d("section",In,Wn)}var Hn=r(Tn,[["render",Un]]);const Kn={name:"App"},Jn={id:"app"},Xn={class:"reveal"},Gn={class:"slides"},Zn=e("img",{class:"absolute bottom-0 left-4 w-16 z-50",src:M,alt:"Kaizen Logo Black"},null,-1);function Qn(o,n,i,c,s,t){const _=Hn,m=Sn,u=fn,v=Dt,$=Is,y=bs,E=Ie,k=be,C=te;return a(),d("div",Jn,[e("div",Xn,[e("div",Gn,[Zn,l(_),l(m),l(u),l(v),l($),l(y),l(E),l(k),l(C)])])])}var Yn=r(Kn,[["render",Qn]]);A(Yn).mount("#app");D.initialize({history:!0,width:"100%",height:"80%",margin:0,plugins:[j,R]});
