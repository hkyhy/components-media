(self.webpackChunk_hkyhy_components_media=self.webpackChunk_hkyhy_components_media||[]).push([[675],{5764:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=5764,e.exports=t},6635:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var r=n(5909),o=n(5199);const a={name:"Speech",summary:"<p>\u7528\u6237\u5904\u7406\u8bed\u97f3\u8bc6\u522b\u3001\u8bed\u97f3\u8f6c\u6587\u5b57\u7b49\uff0c\u5bf9\u63a5\u963f\u91cc\u7684\u667a\u80fd\u8bed\u97f3\u4ea4\u4e92\u670d\u52a1</p>",api:"<table>\n<thead>\n<tr>\n<th>\u5c5e\u6027\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n</table>",example:{isFull:!1,className:"Speech_04a83",style:"",list:[{title:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u6807\u9898",description:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u8bf4\u660e",code:"const { AudioRecordButton, AudioPlayerButton, useAudioPlayer } = _Speech;\nconst { useState } = React;\nconst { Button } = antd;\n\nconst DurationButton = ({ src }) => {\n  const { getDuration } = useAudioPlayer({ src });\n  return (\n    <Button\n      onClick={() => {\n        getDuration().then(time => console.log(time));\n      }}\n    >\n      \u83b7\u53d6\u65f6\u957f\n    </Button>\n  );\n};\n\nconst BaseExample = () => {\n  const [record, setRecord] = useState(null);\n  return (\n    <>\n      <AudioRecordButton\n        onStart={() => {\n          setRecord(null);\n        }}\n        onComplete={chunks => {\n          setRecord(new Blob(chunks, { type: chunks[0].type }));\n        }}\n      />\n      {record && (\n        <>\n          <AudioPlayerButton src={record} />\n          <DurationButton src={record} />\n        </>\n      )}\n    </>\n  );\n};\n\nrender(<BaseExample />);\n\n",scope:[{name:"_Speech",packageName:"@components/Speech",component:r},{name:"antd",packageName:"antd",component:o}]}]}}},1448:(e,t,n)=>{"use strict";var r=n(3884),o=n.n(r),a=n(7558),s=n(5199),c=n(9946),d=n.n(c),u=n(3050),i=n(1488),l=n.n(i),m=n(579);window.PUBLIC_URL=window.runtimePublicUrl||"/ui_components/components-media/0.1.1";var p=n(4391),h=n(4679),y=n(4152),g=n.n(y),f=(n(1296),n(6446));const k=g().ExampleRoutes,w=e=>{let{globalPreset:t,...n}=e;return(0,m.jsx)(h.HashRouter,{children:(0,m.jsx)(k,{...n,paths:[{key:"components",path:"/",title:"\u9996\u9875"}],preset:t,themeToken:t.themeToken,readme:f.default})})},v=p.createRoot(document.getElementById("root"));(async e=>{const t=await(async()=>{const e=(()=>{const e=d().create({validateStatus:function(){return!0}});return e.interceptors.response.use((e=>{var t;return 200!==e.status&&!1!==e.showError&&!1!==e.config.showError&&s.message.error((null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.msg)||"\u8bf7\u6c42\u53d1\u751f\u9519\u8bef"),e}),(e=>(s.message.error(e.message||"\u8bf7\u6c42\u53d1\u751f\u9519\u8bef"),Promise.reject(e)))),t=>t.hasOwnProperty("loader")&&"function"===typeof t.loader?Promise.resolve(t.loader(l()(t,["loader"]))).then((e=>({data:{code:0,data:e}}))).catch((e=>(s.message.error(e.message||"\u8bf7\u6c42\u53d1\u751f\u9519\u8bef"),{data:{code:500,msg:e.message}}))):e(t)})();(0,a.preset)({ajax:e,loading:(0,m.jsx)(s.Spin,{delay:500,style:{position:"absolute",left:"50%",padding:"10px",transform:"translateX(-50%)"}}),error:null,empty:(0,m.jsx)(s.Empty,{}),transformResponse:e=>{const{data:t}=e;return e.data={code:0===t.code?200:t.code,msg:t.msg,results:t.data},e}});const t={url:"https://uc.fatalent.cn",tpl:"{{url}}/packages/@kne-components/{{remote}}/{{version}}/build"},n={...t,remote:"components-core",defaultVersion:"0.2.81"};return(0,u.preset)({remotes:{default:n,"components-core":n,"components-iconfont":{...t,remote:"components-iconfont",defaultVersion:"0.1.8"},"components-media":{...t,remote:"components-media",defaultVersion:"0.1.1"}}}),{ajax:e,themeToken:{colorPrimary:"#4F185A",colorPrimaryHover:"#702280"}}})();v.render((0,m.jsx)(o().StrictMode,{children:(0,m.jsx)(e,{themeToken:t.themeToken,globalPreset:t})}))})(w)},5909:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AudioPlayerButton:()=>y,AudioPlayerRender:()=>h,AudioRecordButton:()=>l,AudioRecordRender:()=>i,useAudioPlayer:()=>m,useAudioRecord:()=>d,withAudioPlayer:()=>p,withAudioRecord:()=>u});var r=n(3884),o=n(5199),a=n(1400),s=n(3050),c=n(579);const d=e=>{const{onComplete:t,onData:n,onStart:s}=Object.assign({},e),[c,d]=(0,r.useState)(!1),u=(0,r.useRef)([]),{message:i}=o.App.useApp(),l=(0,a.A)(t),m=(0,a.A)(n),p=(0,a.A)(s),h=(0,a.A)((async()=>{const e=await window.navigator.mediaDevices.getUserMedia({audio:!0}).catch((e=>{throw i.error("\u51fa\u9519\uff0c\u8bf7\u786e\u4fdd\u5df2\u5141\u8bb8\u6d4f\u89c8\u5668\u83b7\u53d6\u5f55\u97f3\u6743\u9650"),e})),t=new window.MediaRecorder(e);u.current={stream:e,recorder:t};const n=[["start",()=>{u.current.chunks=[],p({stream:e,recorder:t})}],["dataavailable",e=>{m(e.data),u.current.chunks.push(e.data)}]];return u.current.events=n,n.forEach((e=>{let[n,r]=e;return t.addEventListener(n,r)})),t.start(1e3),d(!0),{stream:e,recorder:t}})),y=(0,a.A)((async e=>{if(!e&&d(!1),!u.current)return[];const{events:t,recorder:n,stream:r,chunks:o}=u.current;return t.forEach((e=>{let[t,r]=e;return n.removeEventListener(t,r)})),r.getTracks().forEach((e=>e.stop())),u.current=null,await l(o),o})),g=(0,a.A)((async()=>{c?await y():await h()}));return{recording:c,start:h,stop:y,change:g}},u=e=>t=>{let{onComplete:n,onData:r,onStart:o,...a}=t;const{recording:s,start:u,stop:i,change:l}=d({onComplete:n,onData:r,onStart:o});return(0,c.jsx)(e,{...a,recording:s,start:u,stop:i,onClick:l})},i=e=>{let{children:t,...n}=e;return t(n)},l=u((0,s.createWithRemoteLoader)({modules:["components-core:LoadingButton"]})((e=>{let{remoteModules:t,recording:n,children:r,start:o,stop:a,...s}=e;const[d]=t;return(0,c.jsx)(d,{...s,children:r?r(n):n?"\u6b63\u5728\u5f55\u5236":"\u70b9\u51fb\u5f00\u59cb"})}))),m=e=>{let{src:t}=e;const[n,o]=(0,r.useState)(!1),a=(0,r.useMemo)((()=>{if(t)return new Audio(t instanceof Blob?URL.createObjectURL(t):t)}),[t]);return(0,r.useEffect)((()=>(a.addEventListener("ended",(()=>{o(!1)})),()=>{t instanceof Blob&&URL.revokeObjectURL(a.src)})),[a,t]),{playing:n,play:async()=>{a.currentTime=0,await a.play(),o(!0)},pause:()=>{a.pause(),o(!1)},getDuration:async()=>a.duration?1e3*a.duration:new Promise(((e,t)=>{a.addEventListener("loadedmetadata",(()=>{e()})),a.addEventListener("error",(e=>{t(e)}))}))}},p=e=>t=>{let{src:n,...r}=t;const{playing:o,play:a,pause:s}=m({src:n});return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(e,{...r,playing:o,onClick:()=>{o?s():a()}})})},h=p((e=>{let{children:t,...n}=e;return t(n)})),y=p((e=>{let{playing:t,...n}=e;return(0,c.jsx)(o.Button,{...n,children:t?"\u6b63\u5728\u64ad\u653e...":"\u70b9\u51fb\u64ad\u653e"})}))}}]);
//# sourceMappingURL=675.d6a8d779.chunk.js.map