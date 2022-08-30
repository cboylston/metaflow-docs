"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5780],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),l=a(6010),o=a(2389),i=a(7392),s=a(7094),u=a(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,a;const{lazy:o,block:m,defaultValue:d,values:h,groupId:f,className:k}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,i.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===d?d:null!=(t=null!=d?d:null==(a=b.find((e=>e.props.default)))?void 0:a.props.value)?t:b[0].props.value;if(null!==w&&!g.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[T,x]=(0,r.useState)(w),R=[],{blockElementScrollPositionUntilNextRender:S}=(0,u.o5)();if(null!=f){const e=v[f];null!=e&&e!==T&&g.some((t=>t.value===e))&&x(e)}const C=e=>{const t=e.currentTarget,a=R.indexOf(t),n=g[a].value;n!==T&&(S(t),x(n),null!=f&&N(f,String(n)))},I=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=R.indexOf(e.currentTarget)+1;a=null!=(n=R[t])?n:R[0];break}case"ArrowLeft":{var r;const t=R.indexOf(e.currentTarget)-1;a=null!=(r=R[t])?r:R[R.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},k)},g.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>R.push(e),onKeyDown:I,onFocus:C,onClick:C},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,o.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},8719:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),o=a(5162);const i={},s="Scaling Out and Up",u={unversionedId:"v/r/metaflow/scaling",id:"v/r/metaflow/scaling",title:"Scaling Out and Up",description:"From a usability point of view, it is hard to beat the convenience of writing and running a straightforward script in the comfort of your favorite IDE and a local terminal. Since one of the core values of Metaflow is usability, we encourage you to start with this easy approach and not worry about scalability until it becomes an issue.",source:"@site/docs/v/r/metaflow/scaling.md",sourceDirName:"v/r/metaflow",slug:"/v/r/metaflow/scaling",permalink:"/v/r/metaflow/scaling",draft:!1,editUrl:"https://github.dev/Netflix/metaflow-docs/blob/master/docs/v/r/metaflow/scaling.md",tags:[],version:"current",frontMatter:{},sidebar:"r",previous:{title:"Debugging with Metaflow",permalink:"/v/r/metaflow/debugging"},next:{title:"Dealing with Failures",permalink:"/v/r/metaflow/failures"}},c={},p=[{value:"Requesting resources with <code>resources</code> decorator",id:"requesting-resources-with-resources-decorator",level:2},{value:"Using AWS Batch",id:"using-aws-batch",level:2},{value:"Using AWS Batch selectively with <code>batch</code> decorator",id:"using-aws-batch-selectively-with-batch-decorator",level:3},{value:"AWS Batch tips and tricks",id:"aws-batch-tips-and-tricks",level:3},{value:"<strong>How much <code>resources</code> can I request?</strong>",id:"how-much-resources-can-i-request",level:4},{value:"My job is stuck in <code>RUNNABLE</code> state. What do I do?",id:"my-job-is-stuck-in-runnable-state-what-do-i-do",level:4},{value:"<strong>Listing and killing AWS Batch tasks</strong>",id:"listing-and-killing-aws-batch-tasks",level:4},{value:"<strong>Safeguard flags</strong>",id:"safeguard-flags",level:4},{value:"<strong>Accessing AWS Batch logs</strong>",id:"accessing-aws-batch-logs",level:4},{value:"Disk space",id:"disk-space",level:3},{value:"Large data artifacts",id:"large-data-artifacts",level:3}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scaling-out-and-up"},"Scaling Out and Up"),(0,r.kt)("p",null,"From a usability point of view, it is hard to beat the convenience of writing and running a straightforward script in the comfort of your favorite IDE and a local terminal. Since one of the core values of Metaflow is usability, we encourage you to start with this easy approach and not worry about scalability until it becomes an issue."),(0,r.kt)("p",null,"Instead of providing magical abstractions or a new paradigm for scalability, Metaflow provides a set of easy-to-use tools that help you to make your code scalable depending on your specific needs."),(0,r.kt)("p",null,"The scalability tools fall into three categories:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Performance Optimization"),": You can improve performance of your code by utilizing off-the-shelf, high-performance libraries such as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dmlc/xgboost"},"XGboost")," or ",(0,r.kt)("a",{parentName:"p",href:"https://tensorflow.org"},"Tensorflow"),". Sometimes, it is appropriate to implement a custom algorithm in a high-performance language such as C++ which can be called from your Metaflow steps. Or, as a happy medium between low-performance but productive R and a fast but tedious C++, you may be able to use a compiler such as ",(0,r.kt)("a",{parentName:"p",href:"http://www.rcpp.org/"},"Rcpp")," to speed up your code."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Scaling Up"),": One should not underestimate the horsepower of modern large server type machine. It is sometimes worth considering running on a larger machine prior to trying anything else."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Scaling Out"),": Metaflow also integrates with Batch from AWS allowing you to parallelize your steps over an arbitrarily large number of Batch jobs, giving you access to virtually unlimited amount of computing power."),(0,r.kt)("p",null,"It is hard to be prescriptive about which of the three categories is most suitable for your problem. Often, the answer is a combination of the three. In general, start with the approach that is the easiest to implement and keep iterating until the performance is satisfactory."),(0,r.kt)("p",null,"This section focuses specifically on using Batch to scale up and out: you can use Batch to request a larger instance to run your step as well as use it to parallelize your steps over multiple instances. This section requires you to have Metaflow working with AWS. See the ",(0,r.kt)("a",{parentName:"p",href:"/v/r/metaflow-on-aws/"},"AWS section")," for more information on either setting up Metaflow in your ",(0,r.kt)("a",{parentName:"p",href:"/v/r/metaflow-on-aws/deploy-to-aws"},"own AWS environment")," or using the ",(0,r.kt)("a",{parentName:"p",href:"/v/r/metaflow-on-aws/metaflow-sandbox"},"provided sandbox"),"."),(0,r.kt)("p",null,"This section presents the tools available in Metaflow for scaling up and out."),(0,r.kt)("h2",{id:"requesting-resources-with-resources-decorator"},"Requesting resources with ",(0,r.kt)("inlineCode",{parentName:"h2"},"resources")," decorator"),(0,r.kt)("p",null,"Consider the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r",metastring:'title="bigsumflow.R"',title:'"bigsumflow.R"'},'library(metaflow)\n\nstart <- function(self) {\n  big_matrix <- matrix(rexp(80000*80000), 80000)\n  self$sum <- sum(big_matrix)\n}\n\nend <- function(self) {\n  message(\n    "sum is: ", self$sum\n  )\n}\n\nmetaflow("BigSumFlowR") %>%\n  step(\n    decorator("resources", memory=60000, cpu=1),\n    step = "start",\n    r_function = start,\n    next_step = "end"\n  ) %>%\n  step(\n    step = "end",\n    r_function = end\n  ) %>%\n  run()\n')),(0,r.kt)("p",null,"This example creates a huge 80000x80000 random matrix, ",(0,r.kt)("inlineCode",{parentName:"p"},"big_matrix"),". The matrix requires about 80000^2 ","*"," 8 bytes = 48GB of memory."),(0,r.kt)("p",null,"If you attempt to run this on your local machine, it is likely that the following will happen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Evaluation error: vector memory exhausted (limit reached?).\n")),(0,r.kt)("p",null,"This fails quickly due to a ",(0,r.kt)("inlineCode",{parentName:"p"},"MemoryError")," on most laptops as we are unable to allocate 48GB of memory."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," decorator suggests resource requirements for a step. The ",(0,r.kt)("inlineCode",{parentName:"p"},"memory")," argument specifies the amount of RAM in megabytes and ",(0,r.kt)("inlineCode",{parentName:"p"},"cpu")," the number of CPU cores requested. It does not produce the resources magically, which is why the run above failed."),(0,r.kt)("h2",{id:"using-aws-batch"},"Using AWS Batch"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," decorator gains all its power in collaboration with Batch execution. Note that for this section, you will need to have Metaflow working in an AWS cloud environment ","(","either having ",(0,r.kt)("a",{parentName:"p",href:"/v/r/metaflow-on-aws/deploy-to-aws"},"deployed it yourself")," or running in the ",(0,r.kt)("a",{parentName:"p",href:"/v/r/metaflow-on-aws/metaflow-sandbox"},"Metaflow sandbox"),")"),(0,r.kt)("p",null,"With the following command, you instruct Metaflow to run all your steps on AWS Batch:"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Terminal",value:"Terminal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript bigsumflow.R run --with batch\n"))),(0,r.kt)(o.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Replace run() in bigsumflow.R with\n# run(batch = TRUE)\n# and execute in RStudio\n")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--with batch")," option instructs Metaflow to run all tasks as separate AWS Batch jobs, instead of using a local process for each task. It has the same effect as adding ",(0,r.kt)("inlineCode",{parentName:"p"},"@batch")," decorator to all steps in the code."),(0,r.kt)("p",null,"Note that in this case the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," decorator is used as a prescription for the size of the box that Batch should run the job on; please be sure that this resource requirement can be met. See ",(0,r.kt)("a",{parentName:"p",href:"/v/r/metaflow/scaling#my-job-is-stuck-in-runnable-state-what-do-i-do"},"here")," on what can happen if this is not the case."),(0,r.kt)("p",null,"In addition to ",(0,r.kt)("inlineCode",{parentName:"p"},"cpu")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"memory")," you can specify ",(0,r.kt)("inlineCode",{parentName:"p"},"gpu=N")," to request N GPUs for the instance."),(0,r.kt)("h3",{id:"using-aws-batch-selectively-with-batch-decorator"},"Using AWS Batch selectively with ",(0,r.kt)("inlineCode",{parentName:"h3"},"batch")," decorator"),(0,r.kt)("p",null,"A close relative of the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," decorator is ",(0,r.kt)("inlineCode",{parentName:"p"},"batch"),". It takes exactly the same keyword arguments as ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," but instead of being a mere suggestion, it forces the step to be run on AWS Batch."),(0,r.kt)("p",null,"The main benefit of ",(0,r.kt)("inlineCode",{parentName:"p"},"batch")," is that you can selectively run some steps locally and some on AWS Batch. In the example above, try replacing ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"batch")," and run it again."),(0,r.kt)("p",null,"You will see that the ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," step gets executed on an AWS Batch instance but the ",(0,r.kt)("inlineCode",{parentName:"p"},"end")," step, which does not need special resources, is executed locally without the additional latency of launching a AWS Batch job. Executing a ",(0,r.kt)("a",{parentName:"p",href:"/v/r/metaflow/basics#foreach"},(0,r.kt)("inlineCode",{parentName:"a"},"foreach"))," step launches parallel AWS Batch jobs with the specified resources for the step."),(0,r.kt)("h3",{id:"aws-batch-tips-and-tricks"},"AWS Batch tips and tricks"),(0,r.kt)("p",null,"Here are some useful tips and tricks related to running Metaflow on AWS Batch."),(0,r.kt)("h4",{id:"how-much-resources-can-i-request"},(0,r.kt)("strong",{parentName:"h4"},"How much ",(0,r.kt)("inlineCode",{parentName:"strong"},"resources")," can I request?")),(0,r.kt)("p",null,"Here are the current defaults for different resource types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cpu"),": 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"memory"),": 4000 ","(","4GB",")")),(0,r.kt)("p",null,"When setting ",(0,r.kt)("inlineCode",{parentName:"p"},"resources"),", keep in mind the configuration of your AWS Batch Compute Environment. Your job will be stuck in a ",(0,r.kt)("inlineCode",{parentName:"p"},"RUNNABLE")," state if AWS is unable to provision the requested resources. Additionally, as a good measure, don't request more resources than what your workflow actually needs. On the other hand, never optimize resources prematurely."),(0,r.kt)("p",null,"You can place your AWS Batch task in a specific queue by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"queue")," argument. By default, all tasks execute on an appropriate ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/rocker/ml"},"Rocker docker image"),", unless overridden by the ",(0,r.kt)("inlineCode",{parentName:"p"},"image")," argument."),(0,r.kt)("h4",{id:"my-job-is-stuck-in-runnable-state-what-do-i-do"},"My job is stuck in ",(0,r.kt)("inlineCode",{parentName:"h4"},"RUNNABLE")," state. What do I do?"),(0,r.kt)("p",null,"Consult ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/batch/latest/userguide/troubleshooting.html#job_stuck_in_runnable"},"this article"),"."),(0,r.kt)("h4",{id:"listing-and-killing-aws-batch-tasks"},(0,r.kt)("strong",{parentName:"h4"},"Listing and killing AWS Batch tasks")),(0,r.kt)("p",null,"If you interrupt a Metaflow run, any AWS Batch tasks launched by the run get killed by Metaflow automatically. Even if something went wrong during the final cleanup, the tasks will finish and die eventually, at the latest when they hit the maximum time allowed for an AWS Batch task."),(0,r.kt)("p",null,"If you want to make sure you have no AWS Batch tasks running, or you want to manage them manually, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"batch list")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"batch kill")," commands. These commands are disabled in the ",(0,r.kt)("a",{parentName:"p",href:"/v/r/metaflow-on-aws/metaflow-sandbox"},"Metaflow AWS Sandbox"),"."),(0,r.kt)("p",null,"You can easily see what AWS Batch tasks were launched by your latest run with"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Terminal",value:"Terminal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript myflow.R batch list\n"))),(0,r.kt)(o.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Replace run() in myflow.R with\n# run(batch = "list")\n# and execute in RStudio\n')))),(0,r.kt)("p",null,"You can kill the tasks started by the latest run with"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Terminal",value:"Terminal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript myflow.R batch kill\n"))),(0,r.kt)(o.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Replace run() in myflow.R with\n# run(batch = "kill")\n# and execute in RStudio\n')))),(0,r.kt)("p",null,"If you have started multiple runs, you can make sure there are no orphaned tasks still running with"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Terminal",value:"Terminal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript myflow.R batch list --my-runs\n"))),(0,r.kt)(o.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Replace run() in myflow.R with\n# run(batch = "list", my_runs = TRUE)\n# and execute in RStudio\n')))),(0,r.kt)("p",null,"You can kill the tasks started by the latest run with"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Terminal",value:"Terminal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript myflow.R batch kill --my-runs\n"))),(0,r.kt)(o.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Replace run() in myflow.R with\n# run(batch = "kill", my_runs = TRUE)\n# and execute in RStudio\n')))),(0,r.kt)("p",null,"If you see multiple runs running, you can cherry-pick a specific job, e.g. 456, to be killed as follows"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Terminal",value:"Terminal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript myflow.R batch kill --run-id 456\n"))),(0,r.kt)(o.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Replace run() in myflow.R with\n# run(batch = "kill", run_id = "456")\n# and execute in RStudio\n')))),(0,r.kt)("p",null,"If you are working with another person, you can see and kill their tasks related to this flow with"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Terminal",value:"Terminal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript myflow.R batch kill --user savin\n"))),(0,r.kt)(o.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Replace run() in myflow.R with\n# run(batch = "kill", user = "savin")\n# and execute in RStudio\n')))),(0,r.kt)("p",null,"Note that all the above commands only affect the flow defined in your script. You can work on many flows in parallel and be confident that ",(0,r.kt)("inlineCode",{parentName:"p"},"kill")," kills tasks only related to the flow you called ",(0,r.kt)("inlineCode",{parentName:"p"},"kill")," with."),(0,r.kt)("h4",{id:"safeguard-flags"},(0,r.kt)("strong",{parentName:"h4"},"Safeguard flags")),(0,r.kt)("p",null,"It is almost too easy to launch AWS Batch jobs with Metaflow. A foreach branch with ",(0,r.kt)("inlineCode",{parentName:"p"},"1000")," parameters would launch 1000 parallel Batch instances which may turn out to be quite expensive."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="myflow.R"',title:'"myflow.R"'},'a <- function(self) {\n  ...\n  self$params <- range(1,1000)\n  ...\n}\n...\n  step(\n    ...\n    foreach = "params",\n    ...\n  )\n')),(0,r.kt)("p",null,"To safeguard against inadvertent launching of many parallel Batch jobs, the ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"resume")," commands have a flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--max-num-splits")," which fails the task if it attempts to launch more than 100 splits by default. Use the flag to increase the limit if you actually need more tasks."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Terminal",value:"Terminal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript myflow.R run --max-num-splits 200\n"))),(0,r.kt)(o.Z,{value:"RStudio",label:"RStudio",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Replace run() in myflow.R with\n# run(max_num_splits = 200)\n# and execute in RStudio\n")))),(0,r.kt)("p",null,"Another flag, ",(0,r.kt)("inlineCode",{parentName:"p"},"--max-workers"),", limits the number of tasks run in parallel. Even if a foreach launched 100 splits, ",(0,r.kt)("inlineCode",{parentName:"p"},"--max-workers")," would make only 16 ","(","by default",")"," of them run in parallel at any point in time. If you want more parallelism, increase the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"--max-workers"),"."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Terminal",value:"Terminal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript myflow.R run --max-workers 32\n"))),(0,r.kt)(o.Z,{value:"RStudio",label:"RStudio",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Replace run() in myflow.R with\n# run(max_workers = 32)\n# and execute in RStudio\n")))),(0,r.kt)("h4",{id:"accessing-aws-batch-logs"},(0,r.kt)("strong",{parentName:"h4"},"Accessing AWS Batch logs")),(0,r.kt)("p",null,"As a convenience feature, you can also see the logs of any past step as follows:"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Terminal",value:"Terminal",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Rscript bigsumflow.R logs 15/end\n"))),(0,r.kt)(o.Z,{label:"RStudio",value:"RStudio",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Replace run() in bigsumflow.R with\n# run(logs = "15/end")\n# and execute in RStudio\n')))),(0,r.kt)("h3",{id:"disk-space"},"Disk space"),(0,r.kt)("p",null,"You can request higher disk space on AWS Batch instances by using an unmanaged Compute Environment with a custom AMI."),(0,r.kt)("h3",{id:"large-data-artifacts"},"Large data artifacts"),(0,r.kt)("p",null,"Metaflow uses Python's default object serialization format, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/pickle.html"},"Pickle"),", to persist data artifacts."),(0,r.kt)("p",null,"Unfortunately Python was not able to pickle objects larger than 2GB prior to Python 3.5. If you need to store large data artifacts, such as a large data frame, using a recent version of Python 3 is highly recommended."))}d.isMDXComponent=!0}}]);