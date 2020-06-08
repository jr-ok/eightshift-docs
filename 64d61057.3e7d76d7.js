(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(6),a=(n(0),n(158)),i={id:"blocks-structure-manifest",title:"Manifest Structure"},c={id:"guides/blocks-structure-manifest",title:"Manifest Structure",description:"This file contains all the configuration required for a block to work. It's used in WordPress [`registerBlockType`](https://developer.wordpress.org/block-editor/developers/block-api/block-registration/) method to register a block. Using `manifest.json` we can provide a configuration in JavaScript and PHP part of the block in one file.",source:"@site/docs/guides/blocks-structure-manifest.md",permalink:"/eightshift-docs/docs/guides/blocks-structure-manifest",sidebar:"docs",previous:{title:"Component Structure",permalink:"/eightshift-docs/docs/guides/blocks-structure-component"},next:{title:"Creating Block from Components",permalink:"/eightshift-docs/docs/guides/blocks-block-from-components"}},s=[{value:"Example",id:"example",children:[]},{value:"attributes",id:"attributes",children:[]},{value:"hasInnerBlocks",id:"hasinnerblocks",children:[]},{value:"hasWrapper",id:"haswrapper",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This file contains all the configuration required for a block to work. It's used in WordPress ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.wordpress.org/block-editor/developers/block-api/block-registration/"}),Object(a.b)("inlineCode",{parentName:"a"},"registerBlockType"))," method to register a block. Using ",Object(a.b)("inlineCode",{parentName:"p"},"manifest.json")," we can provide a configuration in JavaScript and PHP part of the block in one file."),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "blockName": "heading",\n  "title": "Heading",\n  "description" : "Heading block with custom settings.",\n  "category": "common",\n  "icon": {\n    "src": "heading"\n  },\n  "keywords": [\n    "Header",\n    "Title"\n  ],\n  "attributes": {\n    "content": {\n      "type": "string"\n    },\n    "level": {\n      "type": "number",\n      "default": 2\n    }\n  }\n}\n')),Object(a.b)("p",null,"Most of the keys are the same as ",Object(a.b)("inlineCode",{parentName:"p"},"registerBlockType")," method, but we also have some custom attributes here:"),Object(a.b)("h3",{id:"attributes"},"attributes"),Object(a.b)("p",null,"Attributes key is an object of attributes that you define and where you set up default values for a block. These attributes are then provided for you in the editor as props, and the PHP view part in the ",Object(a.b)("inlineCode",{parentName:"p"},"$attributes")," variable.\nWe are using the same structure as described in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.wordpress.org/block-editor/developers/block-api/block-attributes/"}),"Block Editor documentation"),"."),Object(a.b)("h3",{id:"hasinnerblocks"},"hasInnerBlocks"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"default: false")),Object(a.b)("p",null,"If the ",Object(a.b)("inlineCode",{parentName:"p"},"hasInnerBlocks")," key is set to true, blocks ",Object(a.b)("inlineCode",{parentName:"p"},"save")," method for inner blocks will be used. This method is used if the block has ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/WordPress/gutenberg/tree/master/packages/block-editor/src/components/inner-blocks"}),Object(a.b)("inlineCode",{parentName:"a"},"InnerBlocks")),". In PHP you now have ",Object(a.b)("inlineCode",{parentName:"p"},"$inner_block_content")," variable available. Here is an example of what happens in the back: "),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"  save = () => createElement(InnerBlocks.Content);\n")),Object(a.b)("h3",{id:"haswrapper"},"hasWrapper"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"default: true")),Object(a.b)("p",null,"If the ",Object(a.b)("inlineCode",{parentName:"p"},"hasWrapper")," key is set to false, blocks PHP render method will not be passed to the wrapper component."))}p.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,f=b["".concat(i,".").concat(d)]||b[d]||u[d]||a;return n?o.a.createElement(f,c({ref:t},l,{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);