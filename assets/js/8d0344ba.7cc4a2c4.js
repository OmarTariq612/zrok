"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[218],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),k=r,h=m["".concat(s,".").concat(k)]||m[k]||c[k]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:0},i="Getting Started with zrok",l={unversionedId:"getting-started",id:"getting-started",title:"Getting Started with zrok",description:"zrok is a next-generation sharing platform built on top of OpenZiti, a programmable zero trust network overlay. zrok is an OpenZiti Native Application.",source:"@site/../docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/openziti/zrok/tree/main/../docs/getting-started.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Guides",permalink:"/docs/category/guides"}},s={},p=[{value:"Downloading zrok",id:"downloading-zrok",level:2},{value:"Extract zrok Distribution",id:"extract-zrok-distribution",level:3},{value:"Configure Your zrok Service Instance",id:"configure-your-zrok-service-instance",level:2},{value:"Generating an Invitation",id:"generating-an-invitation",level:2},{value:"Enabling Your zrok Environment",id:"enabling-your-zrok-environment",level:2},{value:"Sharing",id:"sharing",level:2},{value:"Ephemeral by Default",id:"ephemeral-by-default",level:3},{value:"Public Shares and Frontends",id:"public-shares-and-frontends",level:3},{value:"Private Shares",id:"private-shares",level:3},{value:"Proxy Backend Mode",id:"proxy-backend-mode",level:3},{value:"Web Backend Mode",id:"web-backend-mode",level:3},{value:"Reserved Shares",id:"reserved-shares",level:3},{value:"Concepts Review",id:"concepts-review",level:2},{value:"Service Instance and Account",id:"service-instance-and-account",level:3},{value:"Environment",id:"environment",level:3},{value:"Shares",id:"shares",level:3},{value:"Reserved Shares",id:"reserved-shares-1",level:3},{value:"Self-Hosting a Service Instance",id:"self-hosting-a-service-instance",level:2}],d={toc:p};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-with-zrok"},"Getting Started with zrok"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," is a next-generation sharing platform built on top of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openziti/ziti/stargazers"},"OpenZiti"),", a programmable zero trust network overlay. ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," is an ",(0,r.kt)("em",{parentName:"p"},"OpenZiti Native Application"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," facilitates sharing resources publicly and privately with an audience of your choosing."),(0,r.kt)("p",null,"As of version ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.3.0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," provides users the ability to publicly proxy local HTTP endpoints (similar to other offerings in this space). Additionally, ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," provides the ability to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"privately")," share resources with other ",(0,r.kt)("inlineCode",{parentName:"li"},"zrok")," users; in ",(0,r.kt)("em",{parentName:"li"},"private")," usage scenarios, your private resources are not exposed to any public endpoints, and all communication is securely and privately transported between ",(0,r.kt)("inlineCode",{parentName:"li"},"zrok")," clients"),(0,r.kt)("li",{parentName:"ul"},"use ",(0,r.kt)("inlineCode",{parentName:"li"},"web")," sharing; easily share files with others using a single ",(0,r.kt)("inlineCode",{parentName:"li"},"zrok")," command")),(0,r.kt)("p",null,"Let's take a look at how to get started with ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok"),"."),(0,r.kt)("h2",{id:"downloading-zrok"},"Downloading zrok"),(0,r.kt)("p",null,"Releases are also available from the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," project repository on GitHub at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openziti/zrok/releases/latest"},"https://github.com/openziti/zrok/releases/latest")),(0,r.kt)("h3",{id:"extract-zrok-distribution"},"Extract zrok Distribution"),(0,r.kt)("p",null,"Move the downloaded ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," distribution into a directory on your system. In my case, I've placed it in my home directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ ls -lF zrok*\n-rwxr-xr-x 1 michael michael 12724747 Jan 17 12:57 zrok_0.3.0-rc1_linux_amd64.tar.gz*\n")),(0,r.kt)("p",null,"Create a directory where the extracted distribution will sit:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ mkdir zrok\n$ cd zrok/\n")),(0,r.kt)("p",null,"Extract the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," distribution:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ tar zxvf ../zrok_0.3.0-rc1_linux_amd64.tar.gz\nCHANGELOG.md\nREADME.md\nzrok\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: On Windows platforms the distribution is shipped as a ",(0,r.kt)("inlineCode",{parentName:"p"},"zip")," archive. Windows Explorer includes support for extracting ",(0,r.kt)("inlineCode",{parentName:"p"},"zip")," archives natively.")),(0,r.kt)("p",null,"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," to your shell's environment."),(0,r.kt)("p",null,"For Linux or macos:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ export PATH=`pwd`:$PATH\n")),(0,r.kt)("p",null,"For Windows (using Command Prompt):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> set PATH=%CD%;%PATH%\n")),(0,r.kt)("p",null,"For Windows (using PowerShell):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$env:path += ";"+$pwd.Path\n')),(0,r.kt)("p",null,"With the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," executable in your path, you can then execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," command from your shell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ zrok version\n               _    \n _____ __ ___ | | __\n|_  / '__/ _ \\| |/ /\n / /| | | (_) |   < \n/___|_|  \\___/|_|\\_\\\n\nv0.3.0-rc1 [0d43b55]\n")),(0,r.kt)("h2",{id:"configure-your-zrok-service-instance"},"Configure Your zrok Service Instance"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'Most users can safely skip this section and proceed to "Generating an Invitation" below.'),(0,r.kt)("p",{parentName:"admonition"},"This section is relevant if you want to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," CLI with an alternate service instance (in the case of self-hosting, etc.).")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," is both an installable utility that you interact with from your local computer, and also a ",(0,r.kt)("em",{parentName:"p"},"service")," that exists on the network. NetFoundry operates the public ",(0,r.kt)("em",{parentName:"p"},"service instance")," that is available at ",(0,r.kt)("inlineCode",{parentName:"p"},"api.zrok.io"),", but because ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," is open source and self-hostable, you're free to create your own ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," service instance."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," executable defaults to using the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," service instance at ",(0,r.kt)("inlineCode",{parentName:"p"},"api.zrok.io"),". Should you need to change the endpoint to use a different service instance, you can do that with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ zrok config set apiEndpoint https://zrok.mydomain.com\n[WARNING]: unable to open zrokdir metadata; ignoring\n\nzrok configuration updated\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"WARNING")," about ",(0,r.kt)("inlineCode",{parentName:"p"},"zrokdir metadata")," is ignorable. Running the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok config set")," command writes a small piece of metadata into a ",(0,r.kt)("inlineCode",{parentName:"p"},".zrok")," folder inside your home directory. This allows ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," to identify the version of its settings, providing a mechanism to upgrade your installation as new versions are released. This ",(0,r.kt)("inlineCode",{parentName:"p"},"WARNING")," is letting you know that your current environment has not be initialized by ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok"),"."),(0,r.kt)("p",{parentName:"admonition"},"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok status")," command to inspect the state of your local ",(0,r.kt)("em",{parentName:"p"},"environment"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," refers to each shell where you install and ",(0,r.kt)("inlineCode",{parentName:"p"},"enable")," a copy of ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," as as an ",(0,r.kt)("em",{parentName:"p"},"environment"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ zrok status\n\nConfig:\n\n CONFIG       VALUE                      SOURCE \n apiEndpoint  https://zrok.mydomain.com  config \n\n[WARNING]: Unable to load your local environment!\n\nTo create a local environment use the zrok enable command.\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"WARNING")," about being ",(0,r.kt)("inlineCode",{parentName:"p"},"unable to load your local environment")," will go away once you've successfully enabled (",(0,r.kt)("inlineCode",{parentName:"p"},"zrok enable"),") for your shell (we'll get to that below). For now, this warning is ignorable.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok status")," command shows the configured API service that your environment is using, as well as the ",(0,r.kt)("inlineCode",{parentName:"p"},"SOURCE")," where the setting was retrieved. In this case, ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," means that the setting was set into the environment using the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok config")," command."),(0,r.kt)("h2",{id:"generating-an-invitation"},"Generating an Invitation"),(0,r.kt)("p",null,"In order to create an account with the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," service instance, you will need to create an invitation. "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Some environments take advantage of ",(0,r.kt)("em",{parentName:"p"},"invitation tokens"),", which limit who is able to request an invitation on the service instance. If your service uses invitation tokens, the administrator of your instance will include details about how to use your token to generate your invitation.")),(0,r.kt)("p",null,"We generate an invitation with the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok invite")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ zrok invite\n\nenter and confirm your email address...\n\n> user@domain.com\n> user@domain.com\n\n[ Submit ]\n\ninvitation sent to 'user@domain.com'!\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok invite")," command presents a small form that allows you to enter (and then confirm) your email address. Tabbing to the ",(0,r.kt)("inlineCode",{parentName:"p"},"[ Submit ]")," button will send the request to your configured ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," service."),(0,r.kt)("p",null,"Next, check the email where you sent the invite. You should receive a message asking you to click a link to create your ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," account. When you click that link, you will be brought to a web page that will allow you to set a password for your new account:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Enter a Password",src:n(9744).Z,width:"1556",height:"1229"})),(0,r.kt)("p",null,"Enter a password and it's confirmation, and click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Register Account")," button. You'll see the following:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Successful Registration",src:n(242).Z,width:"1556",height:"1229"})),(0,r.kt)("p",null,'For now, we\'ll ignore the "enable your shell for zrok" section. Just click the ',(0,r.kt)("inlineCode",{parentName:"p"},"zrok web portal")," link:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Web Login",src:n(9509).Z,width:"1556",height:"1229"})),(0,r.kt)("p",null,"After clicking the ",(0,r.kt)("inlineCode",{parentName:"p"},"Log In")," button, you'll be brought into the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," ",(0,r.kt)("em",{parentName:"p"},"web console"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Web Console; Empty",src:n(2945).Z,width:"1556",height:"1229"})),(0,r.kt)("p",null,"Congratulations! Your ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," account is ready to go!"),(0,r.kt)("h2",{id:"enabling-your-zrok-environment"},"Enabling Your zrok Environment"),(0,r.kt)("p",null,"When your ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," account was created, the service generated a ",(0,r.kt)("em",{parentName:"p"},"secret token")," that identifies and authenticates in a single step. Protect your secret token as if it were a password, or an important account number; it's a ",(0,r.kt)("em",{parentName:"p"},"secret"),", protect it."),(0,r.kt)("p",null,"When we left off you had downloaded, extracted, and configured your ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," environment. In order to use that environment with your account, you'll need to ",(0,r.kt)("inlineCode",{parentName:"p"},"enable")," it. Enabling an environment generates a secure identity and the necessary underlying security policies with the OpenZiti network hosting the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," service."),(0,r.kt)("p",null,"From the web console, click on your email address in the upper right corner of the header. That drop down menu contains an ",(0,r.kt)("inlineCode",{parentName:"p"},"Enable Your Environment")," link. Click that link and a modal dialog will be shown like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Enable Modal Dialog",src:n(9042).Z,width:"1556",height:"1229"})),(0,r.kt)("p",null,"This dialog box shows you the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok enable")," command that you can use to enable any shell to work with your ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," account with a single command."),(0,r.kt)("p",null,"Let's copy that command and paste it into your shell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ zrok enable klFEoIi0QAg7 \n\u28fb  contacting the zrok service...\n")),(0,r.kt)("p",null,"After a few seconds, the message will change and indicate that the enable operation suceeded:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ zrok enable klFEoIi0QAg7 \n\u28fb  the zrok environment was successfully enabled...\n")),(0,r.kt)("p",null,"Now, if we run a ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok status")," command, you will see the details of your environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ zrok status\n\nConfig:\n\n CONFIG       VALUE                SOURCE \n apiEndpoint  https://api.zrok.io  env    \n\nEnvironment:\n\n PROPERTY       VALUE        \n Secret Token   klFEoIi0QAg7 \n Ziti Identity  FTpvelYD6h   \n")),(0,r.kt)("p",null,"Excellent... our environment is now fully enabled."),(0,r.kt)("p",null,"If we return to the ",(0,r.kt)("em",{parentName:"p"},"web console"),", we'll now see the new environment reflected in the explorer view:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"New Environment in Web UI",src:n(5546).Z,width:"1556",height:"1229"})),(0,r.kt)("p",null,"In my case, the environment is named ",(0,r.kt)("inlineCode",{parentName:"p"},"michael@ziti-lx"),", which is the username of my shell and the hostname of the system the shell is running on."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Should you want to use a non-default name for your environment, you can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"-d")," option to the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok enable")," command. See ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok enable --help")," for details.")),(0,r.kt)("p",null,"If you click on the environment node in the explorer in the ",(0,r.kt)("em",{parentName:"p"},"web console"),", the details panel shown at the bottom of the page will change:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Empty Environment",src:n(3858).Z,width:"1556",height:"1229"})),(0,r.kt)("p",null,"The explorer supports clicking, dragging, mouse wheel zooming, and selecting the nodes in the graph for more information (and available actions) for the selected node. If you ever get lost in the explorer, click the ",(0,r.kt)("img",{alt:"Zoom to Fit",src:n(3843).Z,width:"30",height:"25"})," ",(0,r.kt)("em",{parentName:"p"},"zoom to fit")," icon in the lower right corner of the explorer."),(0,r.kt)("p",null,"If we click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Detail")," tab for our environment, we'll see something like:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Environment Detail",src:n(2534).Z,width:"1556",height:"1229"})),(0,r.kt)("p",null,"Your environment is fully ready to go. Now we can move on to the fun stuff..."),(0,r.kt)("h2",{id:"sharing"},"Sharing"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," is designed to make sharing resources as effortless as possible, while providing a high degree of security and control."),(0,r.kt)("h3",{id:"ephemeral-by-default"},"Ephemeral by Default"),(0,r.kt)("p",null,"Shared resources are ",(0,r.kt)("em",{parentName:"p"},"ephemeral")," by default; as soon as you terminate the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok share")," command, the entire share is removed and is no longer available to any users. Identifiers for shared resources are randomly allocated when the share is created."),(0,r.kt)("h3",{id:"public-shares-and-frontends"},"Public Shares and Frontends"),(0,r.kt)("p",null,"Resources that are shared ",(0,r.kt)("em",{parentName:"p"},"publicly")," are exposed to any users on the internet who have access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok"),' service instance\'s "frontend".'),(0,r.kt)("p",null,"A frontend is an HTTPS listener exposed to the internet, that lets any user with your ephemeral share token access your publicly shared resources."),(0,r.kt)("p",null,"For example, I might create a public share using the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok share public")," command, which results in my ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," service instance exposing the following URL to access my resources:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://h0fz2ts9c84t.share.zrok.io"},"https://h0fz2ts9c84t.share.zrok.io")),(0,r.kt)("p",null,'In this case my share was given the "share token" of ',(0,r.kt)("inlineCode",{parentName:"p"},"h0fz2ts9c84t"),". That URL can be given to any user, allowing them to immediately access the shared resources directly from my local environment, all without exposing any access to my private, secure environment. The physical network location of my environment is not exposed to anonymous consumers of my resources."),(0,r.kt)("p",null,"If we return to the web console, we see our share in the explorer:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Web Console Share",src:n(6097).Z,width:"1556",height:"1229"})),(0,r.kt)("p",null,"If we click on our new share in the explorer, we can see the share details:\n",(0,r.kt)("img",{alt:"Share Details",src:n(4647).Z,width:"1556",height:"1229"})),(0,r.kt)("p",null,"If we click on the ",(0,r.kt)("em",{parentName:"p"},"frontend endpoint")," a new browser tab opens and we see the content of our share:\n",(0,r.kt)("img",{alt:"Share Frontend",src:n(6254).Z,width:"1556",height:"1229"})),(0,r.kt)("p",null,"If we click on the environment in the explorer, we're shown all of the shares for that environment (including our new share), along with a spark line that shows the activity:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Environment Spark Line",src:n(9737).Z,width:"1556",height:"1229"})),(0,r.kt)("p",null,"And as soon as I terminate the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok share")," client, the resources are removed from the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," environment."),(0,r.kt)("p",null,"If we try to reload the frontend endpoing in our web browser, we'll see:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Not Found",src:n(5724).Z,width:"1556",height:"1229"})),(0,r.kt)("h3",{id:"private-shares"},"Private Shares"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," also provides a powerful ",(0,r.kt)("em",{parentName:"p"},"private")," sharing model. If I execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ zrok share private http://localhost:8080\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," service will respond with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"access your share with: zrok access private wvszln4dyz9q\n")),(0,r.kt)("p",null,"Rather than allowing access to your service through a public frontend, a ",(0,r.kt)("em",{parentName:"p"},"private")," share is only exposed to the underlying OpenZiti network, and can only be accessed using the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok access")," command."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok access private wvszln4dyz9q")," command can be run by any ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," user, allowing them to create and bind a local HTTP listener, that allows for private access to your shared resources."),(0,r.kt)("h3",{id:"proxy-backend-mode"},"Proxy Backend Mode"),(0,r.kt)("p",null,"Without specifying a ",(0,r.kt)("em",{parentName:"p"},"backend mode"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok share")," command will assume that you're trying to share a ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy")," resource. A ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy")," resource is usually some private HTTP/HTTPS endpoint (like a development server, or a private application) running in your local environment. Usually such an endpoint would have no inbound connectivity except for however it is reachable from your local environment. It might be running on ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost"),", or only listening on a private LAN segment behind a firewall. "),(0,r.kt)("p",null,"For these services a ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy")," share will allow those endpoints to be reached, either ",(0,r.kt)("em",{parentName:"p"},"publicly")," or ",(0,r.kt)("em",{parentName:"p"},"privately")," through the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," service."),(0,r.kt)("h3",{id:"web-backend-mode"},"Web Backend Mode"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok share")," command accepts a ",(0,r.kt)("inlineCode",{parentName:"p"},"--backend-mode")," option. Besides ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy"),", the current ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.3")," release (as of this writing) also supports a ",(0,r.kt)("inlineCode",{parentName:"p"},"web")," mode. The ",(0,r.kt)("inlineCode",{parentName:"p"},"web")," mode allows you to specify a local folder on your filesystem, and instantly turns your ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," client into a web server, exposing your web content either ",(0,r.kt)("em",{parentName:"p"},"publicly")," or ",(0,r.kt)("em",{parentName:"p"},"privately")," without having to a configure a web server."),(0,r.kt)("h3",{id:"reserved-shares"},"Reserved Shares"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," shares are ",(0,r.kt)("em",{parentName:"p"},"ephemeral"),' unless you specifically create a "reserved" share.'),(0,r.kt)("p",null,"A reserved share can be re-used multiple times; it will survive termination of the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok share")," command, allowing for longer-lasting semi-permanent access to shared resources."),(0,r.kt)("p",null,"The first step is to create the reserved share:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ zrok reserve public --backend-mode web v0.3_getting_started\n[   0.275]    INFO main.(*reserveCommand).run: your reserved share token is 'mltwsinym1s2'\n[   0.275]    INFO main.(*reserveCommand).run: reserved frontend endpoint: https://mltwsinym1s2.share.zrok.io\n")),(0,r.kt)("p",null,"I'm asking the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," service to reserve a share with a ",(0,r.kt)("inlineCode",{parentName:"p"},"web")," backend mode, pointing at my local ",(0,r.kt)("inlineCode",{parentName:"p"},"docs")," folder."),(0,r.kt)("p",null,"You'll want to remember the share token (",(0,r.kt)("inlineCode",{parentName:"p"},"mltwsinym1s2")," in this case), and the frontend endpoint URL. If this were a ",(0,r.kt)("em",{parentName:"p"},"private")," reserved share, there would not be a frontend URL."),(0,r.kt)("p",null,"If we do nothing else, and then point a web browser at the frontend endpoint, we get:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Not Found",src:n(7369).Z,width:"1556",height:"1229"})),(0,r.kt)("p",null,"This is the ",(0,r.kt)("inlineCode",{parentName:"p"},"404")," error message returned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," frontend. We're getting this because we haven't yet started up a ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok share")," for the service. Let's do that:"),(0,r.kt)("p",null,"This command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ zrok share reserved mltwsinym1s2\n")),(0,r.kt)("p",null,"...results in a new share backend starting up and connecting to the existing reserved share:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"zrok share reserved",src:n(1577).Z,width:"951",height:"706"})),(0,r.kt)("p",null,"And now if we refresh the frontend endpoint URL in the web browser, we'll see an index of the ",(0,r.kt)("inlineCode",{parentName:"p"},"docs")," directory:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"zrok docs share",src:n(6377).Z,width:"1556",height:"1229"})),(0,r.kt)("p",null,"With the reserved share, we're free to stop and restart the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok share reserved")," command as many times as we want, without losing the token for our share."),(0,r.kt)("p",null,"When we're done with the reserved share, we can ",(0,r.kt)("em",{parentName:"p"},"release")," it using this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ zrok release mltwsinym1s2\n[   0.230]    INFO main.(*releaseCommand).run: reserved share 'mltwsinym1s2' released\n")),(0,r.kt)("h2",{id:"concepts-review"},"Concepts Review"),(0,r.kt)("p",null,"In summary, ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," lets you easily and securely share resources with both general internet users (through ",(0,r.kt)("em",{parentName:"p"},"public")," sharing) and also with other ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," users (through ",(0,r.kt)("em",{parentName:"p"},"private")," sharing)."),(0,r.kt)("p",null,"Here's a quick review of the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," mental model and the vocabulary."),(0,r.kt)("h3",{id:"service-instance-and-account"},"Service Instance and Account"),(0,r.kt)("p",null,"You create an ",(0,r.kt)("em",{parentName:"p"},"account")," with a ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," ",(0,r.kt)("em",{parentName:"p"},"service instance"),". Your account is identified by a username and a password, which you use to log into the ",(0,r.kt)("em",{parentName:"p"},"web console"),". Your account also has a ",(0,r.kt)("em",{parentName:"p"},"secret token"),", which you will use to authenticate from the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," command-line to interact with the ",(0,r.kt)("em",{parentName:"p"},"service instance"),"."),(0,r.kt)("p",null,"You create a new ",(0,r.kt)("em",{parentName:"p"},"account")," with a ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," ",(0,r.kt)("em",{parentName:"p"},"service instance")," through the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok invite")," command."),(0,r.kt)("h3",{id:"environment"},"Environment"),(0,r.kt)("p",null,"Using your ",(0,r.kt)("em",{parentName:"p"},"secret token")," you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," command-line interface to create an ",(0,r.kt)("em",{parentName:"p"},"environment"),". An ",(0,r.kt)("em",{parentName:"p"},"environment")," corresponds to a single command-line user on a specific ",(0,r.kt)("em",{parentName:"p"},"host system"),". "),(0,r.kt)("p",null,"You create a new ",(0,r.kt)("em",{parentName:"p"},"environment")," by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok enable")," command."),(0,r.kt)("h3",{id:"shares"},"Shares"),(0,r.kt)("p",null,"Once you've enabled an ",(0,r.kt)("em",{parentName:"p"},"environment"),", you then create one or more ",(0,r.kt)("em",{parentName:"p"},"shares"),". Shares have either a ",(0,r.kt)("em",{parentName:"p"},"public")," or ",(0,r.kt)("em",{parentName:"p"},"private")," ",(0,r.kt)("em",{parentName:"p"},"sharing mode"),". ",(0,r.kt)("em",{parentName:"p"},"Shares")," share a specific type of resource using a ",(0,r.kt)("em",{parentName:"p"},"backend mode"),". As of this writing ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," supports a ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy")," ",(0,r.kt)("em",{parentName:"p"},"backend mode")," to share local HTTP resources as a ",(0,r.kt)("em",{parentName:"p"},"reverse proxy"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," also supports a ",(0,r.kt)("inlineCode",{parentName:"p"},"web")," ",(0,r.kt)("em",{parentName:"p"},"backend mode")," to share local file and HTML resources by enabling a basic HTTP server."),(0,r.kt)("p",null,"Every ",(0,r.kt)("em",{parentName:"p"},"share")," is identified by a ",(0,r.kt)("em",{parentName:"p"},"share token"),". ",(0,r.kt)("em",{parentName:"p"},"Public shares")," can be accessed through either a ",(0,r.kt)("em",{parentName:"p"},"frontend")," instance offered through the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," ",(0,r.kt)("em",{parentName:"p"},"service instance"),", or through the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok access")," command. ",(0,r.kt)("em",{parentName:"p"},"Private shares")," can only be accessed through the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok access")," command."),(0,r.kt)("p",null,"You use the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok share")," command to create and enable ",(0,r.kt)("em",{parentName:"p"},"ephemeral shares"),"."),(0,r.kt)("h3",{id:"reserved-shares-1"},"Reserved Shares"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," supports creating ",(0,r.kt)("em",{parentName:"p"},"shares")," that have a consistent ",(0,r.kt)("em",{parentName:"p"},"share token")," that survives restarts of the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok share")," command. These are considered ",(0,r.kt)("em",{parentName:"p"},"non-ephemeral"),", and is callled a ",(0,r.kt)("em",{parentName:"p"},"reserved share"),"."),(0,r.kt)("p",null,"You use the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok reserve")," command to create ",(0,r.kt)("em",{parentName:"p"},"reserved shares"),". Reserved shares last until you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok release")," command to delete them."),(0,r.kt)("h2",{id:"self-hosting-a-service-instance"},"Self-Hosting a Service Instance"),(0,r.kt)("p",null,"Interested in self-hosting your own ",(0,r.kt)("inlineCode",{parentName:"p"},"zrok")," service instance? See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/v0.3_self_hosting_guide"},"self-hosting guide")," for details."))}m.isMDXComponent=!0},6377:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/zrok_docs_share-1c87532d471ab25aaa1590d6215a1427.png"},9042:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/zrok_enable_modal-c62345bd12e17ec9dac2df2f46fc05e8.png"},5724:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/zrok_not_found-fa3415937c341eb10e1eb98c9b063583.png"},242:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/zrok_registration_success-3f3689bf6d7e28d4f4ec8081e94cd835.png"},7369:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/zrok_reserved_not_found-2519707e5cc3e635b7a6feb381c1d040.png"},1577:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/zrok_share_reserved-6bce67775ce2c41abb0ef13ee1fad972.png"},9744:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/zrok_verify-9c83189dde04c6fbab19b62ace653319.png"},2945:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/zrok_web_console_empty-863f7acf00cc43148999a937deb19830.png"},9737:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/zrok_web_console_environment_spark-eeea921884089d320f4b9b2ba2038a1d.png"},6097:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/zrok_web_console_explorer_share-7e6430b99ed60358da14491a97f153ae.png"},4647:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/zrok_web_console_share_detail-9c3f99ededaba7d1225cacd5ec81a06d.png"},6254:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/zrok_web_console_share_frontend-d36b169cea46f834e74af4aa456d0b89.png"},9509:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/zrok_web_login-2d339ab0b7c1e0aad4710d928b511cb0.png"},2534:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/zrok_web_ui_empty_environment_detail-1a3a35ddab829e3a9b951ef57cecde45.png"},3858:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/zrok_web_ui_empty_shares-a2ecccae2bbb1c006ea2a0ba1e85e335.png"},5546:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/zrok_web_ui_new_environment-a2745e4475025446ae38e5bd7708a9bf.png"},3843:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAZCAIAAACpVwlNAAAEr2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMjUiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iMzAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249Ijk2LzEiCiAgIHRpZmY6WVJlc29sdXRpb249Ijk2LzEiCiAgIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIzMCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjI1IgogICBleGlmOkNvbG9yU3BhY2U9IjEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDEtMTlUMTA6NTY6NTYtMDU6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDEtMTlUMTA6NTY6NTYtMDU6MDAiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgUGhvdG8gMi4wLjMiCiAgICAgIHN0RXZ0OndoZW49IjIwMjMtMDEtMTlUMTA6NTY6NTYtMDU6MDAiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0iciI/Pq+HLHgAAAGBaUNDUHNSR0IgSUVDNjE5NjYtMi4xAAAokXWRy0tCQRSHP7UwemBQixYtJKyVRg8Q27RQyoJqYQZZbfTmI/BxuVcJaRu0FQqiNr0W9RfUNmgdBEURRNtaF7UpuZ2rghF5hjnzzW/OOcycAWs4rWT0piHIZPNaKOh3LkaWnPYXLHThwIclqujq7PxkmIb2eS/RYrces1bjuH+tbTWuK2BpER5XVC0vPCU8s55XTd4R7lZS0VXhM2G3JhcUvjP1WJVfTU5W+dtkLRwKgLVT2Jn8xbFfrKS0jLC8HFcmXVBq9zFf0h7PLszL2iezF50QQfw4mWaCAF6GGRPvxcMIg7KjQf5QJX+OnOQq4lWKaKyRJEUet6gFqR6XNSF6XEaaotn/v33VE6Mj1ertfmh+Noz3frBvQ7lkGF9HhlE+BtsTXGbr+blD8H2IXqprrgNwbML5VV2L7cLFFvQ8qlEtWpFsMq2JBLydQkcEum6gdbnas9o5Jw8Q3pCvuoa9fRiQeMfKD2DYZ+PDGzxnAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABZklEQVRIie2VvW7CMBDHr1UfwE5fII7lvahIWUEiQ7qxMLEwsVQMSB0YKsTExsDGxFs0QyqlYyMVld3k4wWw/QgMlqp+JXFQGZB649n3k+9/f9sX9w+PcJq4PBH3H/0zrkrWfK99jVF5/V6qIIzqod1m485rC6nK0S5GAPArvRDNHFtINZ0vviQp4Un2OTObjIs6q6G122yMhgPfaxvuN0VbGDHHBgDm2FbVAGqgLYyEVPFmCwDB84uQilHyB2i32ej3uoySvZDT+YInGaPE77QqlSkznz5vv9cFAEbJdL4QUlkYjYYDnYnf3o9HC6mewog5ttZBq7xcrf1OK95sy61ZgQaAIIx2lGgdRsPBcrXmSbYXstLyRmPkSWZh5HdaAODe3uipVlaZmk9IxdMcAHiam3DBRJCPCMJol+bfbuMxaJ7mjJLZZFxeb2Gku6mDTrJXjExeviILFqJF8WtpGOf5y5wn+gBcXI4F9z6rgwAAAABJRU5ErkJggg=="}}]);