(self.webpackChunk_hkyhy_components_media=self.webpackChunk_hkyhy_components_media||[]).push([[327],{5764:e=>{function o(e){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}o.keys=()=>[],o.resolve=o,o.id=5764,e.exports=o},1448:(e,o,t)=>{"use strict";var r=t(3884),n=t.n(r),s=t(9379),a=t(7558),c=t(5199),m=t(9946),l=t.n(m),d=t(3050),i=t(1488),u=t.n(i),p=t(579);window.PUBLIC_URL=window.runtimePublicUrl||"/components-media";var h=t(4391),f=t(3986),g=t(4679),y=t(4152),k=t.n(y),v=(t(1296),t(6446));const w=["globalPreset"],x=k().ExampleRoutes,P=e=>{let{globalPreset:o}=e,t=(0,f.A)(e,w);return(0,p.jsx)(g.HashRouter,{children:(0,p.jsx)(x,(0,s.A)((0,s.A)({},t),{},{paths:[{key:"components",path:"/",title:"\u9996\u9875"}],preset:o,themeToken:o.themeToken,readme:v.default}))})},j=h.createRoot(document.getElementById("root"));(async e=>{const o=await(async()=>{const e=(()=>{const e=l().create({validateStatus:function(){return!0}});return e.interceptors.response.use((e=>{var o;return 200!==e.status&&!1!==e.showError&&!1!==e.config.showError&&c.message.error((null===e||void 0===e||null===(o=e.data)||void 0===o?void 0:o.msg)||"\u8bf7\u6c42\u53d1\u751f\u9519\u8bef"),e}),(e=>(c.message.error(e.message||"\u8bf7\u6c42\u53d1\u751f\u9519\u8bef"),Promise.reject(e)))),o=>o.hasOwnProperty("loader")&&"function"===typeof o.loader?Promise.resolve(o.loader(u()(o,["loader"]))).then((e=>({data:{code:0,data:e}}))).catch((e=>(c.message.error(e.message||"\u8bf7\u6c42\u53d1\u751f\u9519\u8bef"),{data:{code:500,msg:e.message}}))):e(o)})();(0,a.preset)({ajax:e,loading:(0,p.jsx)(c.Spin,{delay:500,style:{position:"absolute",left:"50%",padding:"10px",transform:"translateX(-50%)"}}),error:null,empty:(0,p.jsx)(c.Empty,{}),transformResponse:e=>{const{data:o}=e;return e.data={code:0===o.code?200:o.code,msg:o.msg,results:o.data},e}});const o={url:"https://uc.fatalent.cn",tpl:"{{url}}/packages/@kne-components/{{remote}}/{{version}}/build"},t=(0,s.A)((0,s.A)({},o),{},{remote:"components-core",defaultVersion:"0.2.81"});return(0,d.preset)({remotes:{default:t,"components-core":t,"components-iconfont":(0,s.A)((0,s.A)({},o),{},{remote:"components-iconfont",defaultVersion:"0.1.11"}),"components-media":(0,s.A)((0,s.A)({},o),{},{remote:"components-media",defaultVersion:"0.1.4"})}}),{ajax:e,themeToken:{colorPrimary:"#ff8800",colorPrimaryHover:"#ffaa00"}}})();j.render((0,p.jsx)(n().StrictMode,{children:(0,p.jsx)(e,{themeToken:o.themeToken,globalPreset:o})}))})(P)}}]);
//# sourceMappingURL=327.a08bf36d.chunk.js.map