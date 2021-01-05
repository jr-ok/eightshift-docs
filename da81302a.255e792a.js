(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{228:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(9),i=(n(0),n(249)),o={id:"manifest",title:"Manifest",sidebar_label:"Manifest"},s={id:"basics/manifest",title:"Manifest",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs)",source:"@site/docs/basics/manifest.md",permalink:"/eightshift-docs/docs/basics/manifest",sidebar_label:"Manifest",sidebar:"docs",previous:{title:"The Structure",permalink:"/eightshift-docs/docs/basics/the-structure"},next:{title:"Rest Intro",permalink:"/eightshift-docs/docs/basics/rest"}},l=[{value:"How to use it?",id:"how-to-use-it",children:[]},{value:"Why not just fetch the asset the old fashioned way?",id:"why-not-just-fetch-the-asset-the-old-fashioned-way",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-libs"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"})))),Object(i.b)("p",null,"In the build process, Webpack creates all the static files from your assets folder and also ",Object(i.b)("inlineCode",{parentName:"p"},"manifest.json")," inside the public folder. The manifest file contains a key/value list that we use to call the location of the assets dynamically."),Object(i.b)("p",null,"This class provides ",Object(i.b)("inlineCode",{parentName:"p"},"manifest.json")," file location and helpers to return the full path for a specific asset."),Object(i.b)("h2",{id:"how-to-use-it"},"How to use it?"),Object(i.b)("p",null,"First, install the manifest class if you didn't use the default project installation using this command:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"wp boilerplate create_manifest")),Object(i.b)("p",null,"You will see a custom filter that you can use to fetch the item from the public folder in your class. This is the custom filter:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/**\n * Manifest item filter name constant.\n *\n * @var string\n */\npublic const MANIFEST_ITEM = 'manifest-item';\n\n/**\n * Register all hooks. Changed filter name to manifest.\n *\n * @return void\n */\npublic function register(): void\n{\n    \\add_filter(static::MANIFEST_ITEM, [ $this, 'getAssetsManifestItem' ]);\n}\n")),Object(i.b)("p",null,"To use this filter, add this code and provide the correct name of your asset:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"use CoolProject\\Manifest\\Manifest;\n\n$logo = \\apply_filters(Manifest::MANIFEST_ITEM, 'logo.svg');\n")),Object(i.b)("p",null,"And that is it. This filter will check the public folder for the ",Object(i.b)("inlineCode",{parentName:"p"},"manifest.json")," file, parse it and return the value of the provided key."),Object(i.b)("p",null,"If there is no ",Object(i.b)("inlineCode",{parentName:"p"},"manifest.json")," file or you provided the wrong asset name, there will be a descriptive message for you."),Object(i.b)("h2",{id:"why-not-just-fetch-the-asset-the-old-fashioned-way"},"Why not just fetch the asset the old fashioned way?"),Object(i.b)("p",null,"By old fashioned way we mean running something like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"$logo = get_template_directory_uri() . 'public/logo.svg';\n")),Object(i.b)("p",null,"You can definitely do this. But with our filter, if you want to change the public folder location or public folder name for some reason, you can change it in one place, and you are done."),Object(i.b)("p",null,"If you are using the old fashioned way, you would need to search and replace the whole project and implement the change. There is always a chance you would miss something, break the project, etc."))}u.isMDXComponent=!0},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,h=p["".concat(o,".").concat(b)]||p[b]||f[b]||i;return n?r.a.createElement(h,s({ref:t},c,{components:n})):r.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);