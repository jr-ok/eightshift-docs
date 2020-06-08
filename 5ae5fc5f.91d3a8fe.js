(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var i=n(1),r=(n(0),n(158));const a={id:"manifest",title:"Manifest"},o={id:"guides/manifest",title:"Manifest",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/tree/develop/src/manifest)",source:"@site/docs/guides/manifest.md",permalink:"/eightshift-docs/docs/guides/manifest",sidebar:"docs",previous:{title:"Project Config",permalink:"/eightshift-docs/docs/guides/config"},next:{title:"Enqueue",permalink:"/eightshift-docs/docs/guides/enqueue"}},s=[{value:"How to use it?",id:"how-to-use-it",children:[]},{value:"Example",id:"example",children:[]}],c={rightToc:s};function l({components:e,...t}){return Object(r.b)("wrapper",Object(i.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-libs/tree/develop/src/manifest"}),Object(r.b)("img",Object(i.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"})))),Object(r.b)("p",null,"Manifest class is located in ",Object(r.b)("inlineCode",{parentName:"p"},"Eightshift Libs"),". To extend it, use ",Object(r.b)("inlineCode",{parentName:"p"},"Eightshift_Libs\\Manifest\\Manifest")," class."),Object(r.b)("p",null,"In the build process, Webpack creates all static files and also ",Object(r.b)("inlineCode",{parentName:"p"},"manifest.json")," inside the ",Object(r.b)("inlineCode",{parentName:"p"},"public")," folder. The manifest file contains a key/value list that we use to call the location of the assets dynamically."),Object(r.b)("p",null,"This class is used to provide ",Object(r.b)("inlineCode",{parentName:"p"},"manifest.json")," file location and helpers to return the full path for a specific asset."),Object(r.b)("h2",{id:"how-to-use-it"},"How to use it?"),Object(r.b)("p",null,"The manifest class provides a filter name that is defined in the lib as a class constant. To apply/call this filter you need to provide ",Object(r.b)("inlineCode",{parentName:"p"},"Manifest::MANIFEST_ITEM_FILTER_NAME")," filter name inside the project config helper. ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"config"}),"Config helper")," is used to append project prefix to a filter name."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("p",null,"Manifest.json:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "logo.svg": "/wp-content/themes/eightshift-boilerplate/public/logo.svg"\n}\n')),Object(r.b)("p",null,"Usage:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"use Eightshift_Libs\\Manifest\\Manifest;\n\n$logo_img = apply_filters( Config::get_config( Manifest::MANIFEST_ITEM_FILTER_NAME ), 'logo.svg' );\n")),Object(r.b)("p",null,"Output:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"https://domain.com/wp-content/themes/eightshift-boilerplate/public/logo.svg\n")))}l.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=i,d=u["".concat(o,".").concat(f)]||u[f]||b[f]||a;return n?r.a.createElement(d,s({ref:t},l,{components:n})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);