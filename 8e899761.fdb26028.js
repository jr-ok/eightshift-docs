(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),i=(n(0),n(158));const a={id:"installation-libs",title:"Eightshift Libs"},o={id:"advanced/installation-libs",title:"Eightshift Libs",description:"Implementing backend library inside your existing project is simple.",source:"@site/docs/advanced/installation-libs.md",permalink:"/eightshift-docs/docs/advanced/installation-libs",sidebar:"docs",previous:{title:"Integrating Boilerplate in existing project",permalink:"/eightshift-docs/docs/advanced/installation-boilerplate-custom"},next:{title:"Eightshift Frontend Libs",permalink:"/eightshift-docs/docs/advanced/installation-frontend-libs"}},c=[],l={rightToc:c};function p({components:e,...t}){return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Implementing backend library inside your existing project is simple."),Object(i.b)("p",null,"Here is an example of our boilerplate repository that incorporates this library. To see the detailed implementation and how it works in action check the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-boilerplate"}),"Eightshift Boilerplate")," repo."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"To incorporate this lib inside your project you need to have:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://getcomposer.org/"}),"Composer")," installed in your project.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Implementation process:"),"\n1. Run the following command for installation."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"composer require infinum/eightshift-libs\n")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You need to have autoloader installed and required in the project. The best way is to use ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://getcomposer.org/doc/04-schema.md#classmap"}),"classmap autoloading")," provided by the Composer. You can check the implementation ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-boilerplate/blob/develop/functions.php#L33"}),"here"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The main project entry point must extend ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-libs/blob/develop/src/class-main.php"}),"eightshift libs main entry point file"),". Here you can find an ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-boilerplate/blob/develop/src/class-main.php"}),"example")," how we did it.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Also, you must run that main class using function.php in your theme or plugin main entry point file. Here you can find an ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-boilerplate/blob/develop/functions.php"}),"example")," how we did it.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Next thing is to extend class-config.php just like you did with the main class. Here you can find an ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-boilerplate/blob/develop/src/class-config.php"}),"example")," how we did it.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You are good to go. Just run ",Object(i.b)("inlineCode",{parentName:"p"},"composer dump-autoload")," and start extending all our features."))))}p.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,h=b["".concat(o,".").concat(m)]||b[m]||u[m]||a;return n?i.a.createElement(h,c({ref:t},p,{components:n})):i.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);