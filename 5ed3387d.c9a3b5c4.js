(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),a=(n(0),n(251)),i={id:"requirements",title:"Requirements",sidebar_label:"Requirements"},c={id:"requirements",title:"Requirements",description:"To have the smoothest development and setup experience, you need to install some things on your computer.",source:"@site/docs/requirements.md",permalink:"/eightshift-docs/docs/requirements",sidebar_label:"Requirements",sidebar:"docs",previous:{title:"Eightshift Frontend Libs",permalink:"/eightshift-docs/docs/eightshift-frontend-libs"},next:{title:"Create a new WordPress theme",permalink:"/eightshift-docs/docs/theme"}},l=[],u={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To have the smoothest development and setup experience, you need to install some things on your computer.\nPlease install these packages before you start the setup:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/en/"}),"Node.js")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://getcomposer.org/"}),"Composer")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://wp-cli.org/"}),"WP-CLI")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://git-scm.com/"}),"Git"))),Object(a.b)("p",null,"Make sure that you have all these packages installed and ready to use on your system. To make sure that they work, run these commands:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"node -v")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"composer -v")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"wp --info")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"git --version"))),Object(a.b)("p",null,"If it doesn't return any errors, you are good to go."),Object(a.b)("h1",{id:"now-you-must-decide"},"Now you must decide!"),Object(a.b)("p",null,"We have prepared you for all your development needs. Now, you must decide what you are going to develop next:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"theme"}),"New Theme")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"plugin"}),"New Plugin"))))}p.isMDXComponent=!0},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,d=s["".concat(i,".").concat(m)]||s[m]||b[m]||a;return n?o.a.createElement(d,c({ref:t},u,{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);