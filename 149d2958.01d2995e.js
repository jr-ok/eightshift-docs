(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{106:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(1),o=(r(0),r(158));const c={id:"helpers-shortcode-helpers",title:"Shortcode"},a={id:"advanced/helpers-shortcode-helpers",title:"Shortcode",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/blob/develop/src/helpers/class-shortcode.php)",source:"@site/docs/advanced/helpers-shortcode.md",permalink:"/eightshift-docs/docs/advanced/helpers-shortcode-helpers",sidebar:"docs",previous:{title:"Components",permalink:"/eightshift-docs/docs/advanced/helpers-components-helpers"},next:{title:"Error Logger",permalink:"/eightshift-docs/docs/advanced/helpers-error-logger-helpers"}},i=[],s={rightToc:i};function l({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-libs/blob/develop/src/helpers/class-shortcode.php"}),Object(o.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"})))),Object(o.b)("p",null,"Shortcode class is located in ",Object(o.b)("inlineCode",{parentName:"p"},"Eightshift Libs"),". To extend it use ",Object(o.b)("inlineCode",{parentName:"p"},"Eightshift_Libs\\Helpers\\Shortcode")," class."),Object(o.b)("p",null,"This class has a method ",Object(o.b)("inlineCode",{parentName:"p"},"get_shortcode")," that allows programaticall output of specific shortcode. It is more optimized implemetation of ",Object(o.b)("inlineCode",{parentName:"p"},"do_shortcode")," function. Full explanations can be read ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://codesymphony.co/dont-do_shortcode/"}),"in this article")))}l.isMDXComponent=!0},158:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),h=n,b=d["".concat(a,".").concat(h)]||d[h]||u[h]||c;return r?o.a.createElement(b,i({ref:t},l,{components:r})):o.a.createElement(b,i({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);