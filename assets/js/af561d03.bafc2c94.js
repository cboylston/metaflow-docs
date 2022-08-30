"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2299],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),l=p(r),d=o,h=l["".concat(c,".").concat(d)]||l[d]||u[d]||n;return r?a.createElement(h,s(s({ref:t},m),{},{components:r})):a.createElement(h,s({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=l;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<n;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},6593:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var a=r(7462),o=(r(7294),r(3905));const n={},s="@batch",i={unversionedId:"api/step-decorators/batch",id:"api/step-decorators/batch",title:"@batch",description:"The @batch decorator sends a step for execution on the AWS Batch compute layer. For more information, see Effortless Scaling with AWS Batch.",source:"@site/docs/api/step-decorators/batch.md",sourceDirName:"api/step-decorators",slug:"/api/step-decorators/batch",permalink:"/api/step-decorators/batch",draft:!1,editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/api/step-decorators/batch.md",tags:[],version:"current",frontMatter:{},sidebar:"python",previous:{title:"@environment",permalink:"/api/step-decorators/environment"},next:{title:"@card",permalink:"/api/step-decorators/card"}},c={},p=[],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},u=m("DocSection"),l=m("SigArgSection"),d=m("SigArg"),h=m("Description"),f=m("ParamSection"),y=m("Parameter"),b={toc:p};function g(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"batch"},"@batch"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@batch")," decorator sends a step for execution on the ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/batch/"},"AWS Batch")," compute layer. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"/metaflow/scaling-out-and-up/effortless-scaling-with-aws-batch"},"Effortless Scaling with AWS Batch"),"."),(0,o.kt)(u,{type:"decorator",name:"batch",module:"metaflow",show_import:"True",heading_level:"3",link:"https://github.com/Netflix/metaflow/tree/master/metaflow/plugins/aws/batch/batch_decorator.py#L30",mdxType:"DocSection"},(0,o.kt)(l,{mdxType:"SigArgSection"},(0,o.kt)(d,{name:"...",mdxType:"SigArg"})),(0,o.kt)(h,{summary:"Specifies that this step should execute on [AWS Batch](https://aws.amazon.com/batch/).",mdxType:"Description"}),(0,o.kt)(f,{name:"Parameters",mdxType:"ParamSection"},(0,o.kt)(y,{name:"cpu",type:"int",desc:"Number of CPUs required for this step. Defaults to 1. If `@resources` is\\nalso present, the maximum value from all decorators is used.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"gpu",type:"int",desc:"Number of GPUs required for this step. Defaults to 0. If `@resources` is\\nalso present, the maximum value from all decorators is used.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"memory",type:"int",desc:"Memory size (in MB) required for this step. Defaults to 4096 (4GB). If\\n`@resources` is also present, the maximum value from all decorators is\\nused.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"image",type:"string",desc:"Docker image to use when launching on AWS Batch. If not specified, a\\ndefault Docker image mapping to the current version of Python is used.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"queue",type:"string",desc:"AWS Batch Job Queue to submit the job to. Defaults to the one\\nspecified by the configuration variable `METAFLOW_BATCH_JOB_QUEUE`.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"iam_role",type:"string",desc:"AWS IAM role that AWS Batch container uses to access AWS cloud resources.\\nDefaults to the one specified by the configuration variable `METAFLOW_ECS_S3_ACCESS_IAM_ROLE`.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"execution_role",type:"string",desc:"AWS IAM role that AWS Batch can use [to trigger AWS Fargate tasks]\\n(https://docs.aws.amazon.com/batch/latest/userguide/execution-IAM-role.html).\\nDefaults to the one determined by the configuration variable\\n`METAFLOW_ECS_FARGATE_EXECUTION_ROLE`.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"shared_memory",type:"int",desc:"The value for the size (in MiB) of the /dev/shm volume for this step.\\nThis parameter maps to the `--shm-size` option in Docker.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"max_swap",type:"int",desc:"The total amount of swap memory (in MiB) a container can use for this\\nstep. This parameter is translated to the `--memory-swap` option in\\nDocker where the value is the sum of the container memory plus the\\n`max_swap` value.",mdxType:"Parameter"}),(0,o.kt)(y,{name:"swappiness",type:"int",desc:"This allows you to tune memory swappiness behavior for this step.\\nA swappiness value of 0 causes swapping not to happen unless absolutely\\nnecessary. A swappiness value of 100 causes pages to be swapped very\\naggressively. Accepted values are whole numbers between 0 and 100.",mdxType:"Parameter"}))))}g.isMDXComponent=!0}}]);