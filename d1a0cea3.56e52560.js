(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{227:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(9),a=(n(0),n(251)),c={id:"browser-sync",title:"Browser Sync",sidebar_label:"Browser Sync"},s={id:"basics/browser-sync",title:"Browser Sync",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs)",source:"@site/docs/basics/browser-sync.md",permalink:"/eightshift-docs/docs/basics/browser-sync",sidebar_label:"Browser Sync",sidebar:"docs",previous:{title:"Fonts",permalink:"/eightshift-docs/docs/basics/fonts"},next:{title:"Dynamic Import",permalink:"/eightshift-docs/docs/basics/dynamic-import"}},i=[{value:"Using SSL for local development",id:"using-ssl-for-local-development",children:[]}],l={rightToc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-frontend-libs"}),Object(a.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})))),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://browsersync.io/docs"}),"Browsersync")," is a Node module that enables you to develop sites faster. It will react to any code change and 'refresh' the site without you needing to refresh it. In the background, it runs a small local server. When configured, it will inject a script on your web page to react to any code change."),Object(a.b)("p",null,"Besides that, you can test your site on various devices on the same network."),Object(a.b)("p",null,"If comes with the boilerplate by default. When you run:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm start\n")),Object(a.b)("p",null,"it will proxy the page you've specified in the ",Object(a.b)("inlineCode",{parentName:"p"},"projectUrl")," to your local server."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"[Browsersync] Proxying: https://local-url.test\n[Browsersync] Access URLs:\n--------------------------------------\nLocal: https://localhost:3000\nExternal: https://192.168.0.25:3000\n--------------------------------------\nUI: http://localhost:3001\nUI External: http://localhost:3001\n--------------------------------------\n")),Object(a.b)("p",null,"Using the IP address, you can open it on any device (mobile phone or tablet) that is connected to the same network, and see how your site looks on that device."),Object(a.b)("h2",{id:"using-ssl-for-local-development"},"Using SSL for local development"),Object(a.b)("p",null,"By default BrowserSync does not work with https urls but if you use HTTPS in your local environment you can simply provide additional key to the Webpack config to make it work."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"module.exports = (env, argv) => {\n    const projectConfig = {\n        config: {\n            projectDir: __dirname, // Current project directory absolute path.\n            projectUrl: 'local-url.test', // Used for providing browsersync functionality.\n            projectPath: 'wp-content/themes/your-theme-name', // Project path relative to project root.\n            useSsl: true,\n        },\n    };\n\n    // Generate webpack config for this project using options object.\n    return require('./node_modules/@eightshift/frontend-libs/webpack')(argv.mode, projectConfig);\n};\n")))}p.isMDXComponent=!0},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(f,s({ref:t},l,{components:n})):o.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);