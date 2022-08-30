"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9788],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?o.createElement(f,r(r({ref:t},u),{},{components:n})):o.createElement(f,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const i={},r="Episode 8: Autopilot",l={unversionedId:"getting-started/tutorials/season-2-scaling-out-and-up/episode-8-autopilot",id:"getting-started/tutorials/season-2-scaling-out-and-up/episode-8-autopilot",title:"Episode 8: Autopilot",description:"Scheduling Compute in the Cloud.",source:"@site/docs/getting-started/tutorials/season-2-scaling-out-and-up/episode-8-autopilot.md",sourceDirName:"getting-started/tutorials/season-2-scaling-out-and-up",slug:"/getting-started/tutorials/season-2-scaling-out-and-up/episode-8-autopilot",permalink:"/getting-started/tutorials/season-2-scaling-out-and-up/episode-8-autopilot",draft:!1,editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/getting-started/tutorials/season-2-scaling-out-and-up/episode-8-autopilot.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"Episode 7: Worldview",permalink:"/getting-started/tutorials/season-2-scaling-out-and-up/episode07"},next:{title:"Basics of Metaflow",permalink:"/metaflow/basics"}},s={},p=[{value:"Scheduling Compute in the Cloud.",id:"scheduling-compute-in-the-cloud",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"episode-8-autopilot"},"Episode 8: Autopilot"),(0,a.kt)("h2",{id:"scheduling-compute-in-the-cloud"},"Scheduling Compute in the Cloud."),(0,a.kt)("p",null,"This example revisits '",(0,a.kt)("a",{parentName:"p",href:"/getting-started/tutorials/season-2-scaling-out-and-up/episode06"},"Episode 06-statistics-redux: Computing in the Cloud"),"'. With Metaflow, you don't need to make any code changes to schedule your flow in the cloud. In this example, we will schedule the ",(0,a.kt)("inlineCode",{parentName:"p"},"stats.py")," workflow using the ",(0,a.kt)("inlineCode",{parentName:"p"},"step-functions create")," command-line argument. This instructs Metaflow to schedule your flow on AWS Step Functions without changing any code. You can execute your flow on AWS Step Functions by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"step-functions trigger")," command-line argument. You can use a notebook to set up a simple dashboard to monitor all of your Metaflow flows."),(0,a.kt)("p",null,"You can find the tutorial code on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Netflix/metaflow/tree/master/metaflow/tutorials/08-autopilot"},"GitHub"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Showcasing:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"step-functions create")," command-line option"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"step-functions trigger")," command-line option"),(0,a.kt)("li",{parentName:"ul"},"Accessing data locally or remotely through the Metaflow ",(0,a.kt)("a",{parentName:"li",href:"/metaflow/client"},"Client API"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Before playing this episode:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"python -m pip install notebook")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"python -m pip install plotly")),(0,a.kt)("li",{parentName:"ol"},"This tutorial requires access to compute and storage resources on AWS, which can be configured by",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Following the instructions ",(0,a.kt)("a",{parentName:"li",href:"https://outerbounds.com/docs/admin/metaflow-on-aws/deployment-guide"},"here")," or"),(0,a.kt)("li",{parentName:"ol"},"Requesting a ",(0,a.kt)("a",{parentName:"li",href:"../../../metaflow-on-aws/metaflow-sandbox"},"sandbox"),".")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To play this episode:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"cd metaflow-tutorials")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},'python 02-statistics/stats.py --environment=conda --with conda:python=3.7,libraries="{pandas:0.24.2}" step-functions create --max-workers 4')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"python 02-statistics/stats.py step-functions trigger")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"jupyter-notebook 08-autopilot/autopilot.ipynb")),(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"autopilot.ipynb"))," in your remote Sagemaker notebook.")))}c.isMDXComponent=!0}}]);