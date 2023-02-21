"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8514],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(a),f=r,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return a?n.createElement(d,i(i({ref:t},u),{},{components:a})):n.createElement(d,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3747:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={},i="Metaflow Resources",l={unversionedId:"introduction/metaflow-resources",id:"introduction/metaflow-resources",title:"Metaflow Resources",description:"Here's an incomplete overview of Metaflow resources outside this documentation. Let us know on Slack or open a pull request if you find or, even better, create a resource that should be listed here \ud83e\udd17",source:"@site/docs/introduction/metaflow-resources.md",sourceDirName:"introduction",slug:"/introduction/metaflow-resources",permalink:"/introduction/metaflow-resources",draft:!1,editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/introduction/metaflow-resources.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"What is Metaflow",permalink:"/introduction/what-is-metaflow"},next:{title:"Installing Metaflow",permalink:"/getting-started/install"}},s={},c=[{value:"Community",id:"community",level:2},{value:"Deployment &amp; Operations",id:"deployment--operations",level:2},{value:"Tutorials",id:"tutorials",level:2},{value:"Books",id:"books",level:2},{value:"Videos",id:"videos",level:2},{value:"Blogs",id:"blogs",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"metaflow-resources"},"Metaflow Resources"),(0,r.kt)("p",null,"Here's an incomplete overview of Metaflow resources outside this documentation. ",(0,r.kt)("a",{parentName:"p",href:"http://slack.outerbounds.co"},"Let us know on Slack")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/netflix/metaflow-docs"},"open a pull request")," if you find or, even better, create a resource that should be listed here \ud83e\udd17"),(0,r.kt)("h2",{id:"community"},"Community"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Join ",(0,r.kt)("a",{parentName:"li",href:"http://slack.outerbounds.co"},"the Metaflow Slack")," to meet the developers and users of Metaflow across hundreds of companies."),(0,r.kt)("li",{parentName:"ul"},"Report ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/netflix/metaflow/issues"},"issues on GitHub"),"."),(0,r.kt)("li",{parentName:"ul"},"You can also email us at ",(0,r.kt)("a",{parentName:"li",href:"mailto://help@metaflow.org"},"help@metaflow.org"),".")),(0,r.kt)("h2",{id:"deployment--operations"},"Deployment & Operations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A comprehensive guide to ",(0,r.kt)("a",{parentName:"li",href:"https://outerbounds.com/docs/engineering-welcome/"},"deploying and operating the infrastructure for Metaflow"),".")),(0,r.kt)("h2",{id:"tutorials"},"Tutorials"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/getting-started/tutorials"},"Getting started with Metaflow tutorial"),", a part of this documentation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://outerbounds.com/docs/intro-tutorial-overview/"},"Additional tutorials"),", provided by Outerbounds."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://outerbounds.com/docs/data-science-welcome/"},"Metaflow how-to guides")," for tips & tricks.")),(0,r.kt)("h2",{id:"books"},"Books"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.manning.com/books/effective-data-science-infrastructure"},"Effective Data Science Infrastructure"),": Learn to design and develop the full infrastructure stack for data science using Metaflow.")),(0,r.kt)("h2",{id:"videos"},"Videos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/results?search_query=metaflow+ml"},"Metaflow on YouTube"),"."),(0,r.kt)("li",{parentName:"ul"},"You can start with ",(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=gZnhSHvhuFQ"},"this recent overview"),".")),(0,r.kt)("h2",{id:"blogs"},"Blogs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"23andMe: ",(0,r.kt)("a",{parentName:"li",href:"https://medium.com/23andme-engineering/machine-learning-eeee69d40736"},"Developing safe and reliable ML products at 23andMe")),(0,r.kt)("li",{parentName:"ul"},"AWS: ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/blogs/opensource/getting-started-with-the-open-source-data-science-tool-metaflow-on-aws/"},"Getting started with the open source data science tool Metaflow on AWS")),(0,r.kt)("li",{parentName:"ul"},"CNN: ",(0,r.kt)("a",{parentName:"li",href:"https://medium.com/cnn-digital/accelerating-ml-within-cnn-983f6b7bd2eb"},"Accelerating ML within CNN")),(0,r.kt)("li",{parentName:"ul"},"Latana: ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/blogs/startups/brand-tracking-with-bayesian-statistics-and-aws-batch/"},"Brand Tracking with Bayesian Statistics and AWS Batch")),(0,r.kt)("li",{parentName:"ul"},"Netflix: ",(0,r.kt)("a",{parentName:"li",href:"https://netflixtechblog.com/open-sourcing-metaflow-a-human-centric-framework-for-data-science-fa72e04a5d9"},"Open-Sourcing Metaflow, a Human-Centric Framework for Data Science")),(0,r.kt)("li",{parentName:"ul"},"Netflix: ",(0,r.kt)("a",{parentName:"li",href:"https://netflixtechblog.com/unbundling-data-science-workflows-with-metaflow-and-aws-step-functions-d454780c6280"},"Unbundling Data Science Workflows with Metaflow and AWS Step Functions")),(0,r.kt)("li",{parentName:"ul"},"Netflix: ",(0,r.kt)("a",{parentName:"li",href:"https://netflixtechblog.com/open-sourcing-a-monitoring-gui-for-metaflow-75ff465f0d60"},"Open-Sourcing a Monitoring GUI for Metaflow, Netflix\u2019s ML Platform")),(0,r.kt)("li",{parentName:"ul"},"Netflix: ",(0,r.kt)("a",{parentName:"li",href:"https://netflixtechblog.com/supporting-content-decision-makers-with-machine-learning-995b7b76006f"},"Supporting content decision makers with machine learning")),(0,r.kt)("li",{parentName:"ul"},"Netflix: ",(0,r.kt)("a",{parentName:"li",href:"https://netflixtechblog.com/scaling-media-machine-learning-at-netflix-f19b400243"},"Scaling Media Machine Learning at Netflix")),(0,r.kt)("li",{parentName:"ul"},"Outerbounds: ",(0,r.kt)("a",{parentName:"li",href:"https://outerbounds.com/blog/"},"Various articles about Metaflow")),(0,r.kt)("li",{parentName:"ul"},"REA: ",(0,r.kt)("a",{parentName:"li",href:"https://www.rea-group.com/about-us/news-and-insights/blog/accelerating-experimentation-with-mlops/"},"Accelerating experimentation with MLOps")),(0,r.kt)("li",{parentName:"ul"},"Realtor.com: ",(0,r.kt)("a",{parentName:"li",href:"https://medium.com/realtor-com-innovation-blog/improving-data-science-processes-to-speed-innovation-at-realtor-com-b6b90fa530dc"},"Improving Data Science Processes to Speed Innovation at Realtor.com")),(0,r.kt)("li",{parentName:"ul"},"SAP: ",(0,r.kt)("a",{parentName:"li",href:"https://blogs.sap.com/2022/04/20/train-your-model-in-sap-ai-core-using-the-metaflow-argo-plugin/"},"Train your model in SAP AI Core using the Metaflow-Argo plugin")),(0,r.kt)("li",{parentName:"ul"},"Softlandia: ",(0,r.kt)("a",{parentName:"li",href:"https://softlandia.fi/en/blog/distributed-data-science-with-metaflow-and-dask"},"Distributed data science with Metaflow and Dask in Azure Kubernetes Service"))))}p.isMDXComponent=!0}}]);