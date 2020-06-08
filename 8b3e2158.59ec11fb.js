(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var a=n(1),s=n(6),i=(n(0),n(158)),c={id:"enqueue",title:"Enqueue"},r={id:"guides/enqueue",title:"Enqueue",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/tree/develop/src/enqueue)",source:"@site/docs/guides/enqueue.md",permalink:"/eightshift-docs/docs/guides/enqueue",sidebar:"docs",previous:{title:"Manifest",permalink:"/eightshift-docs/docs/guides/manifest"},next:{title:"Post Type",permalink:"/eightshift-docs/docs/guides/post-type"}},o=[{value:"Enqueue_Admin",id:"enqueue_admin",children:[]},{value:"Enqueue_Blocks",id:"enqueue_blocks",children:[]},{value:"Enqueue_Theme",id:"enqueue_theme",children:[]},{value:"Additional",id:"additional",children:[]}],l={rightToc:o};function u(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-libs/tree/develop/src/enqueue"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"})))),Object(i.b)("p",null,"When enqueuing assets you can either use ready made classes from the libs:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Eightshift_Libs\\Enqueue\\Enqueue_Admin")," class."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Eightshift_Libs\\Enqueue\\Enqueue_Blocks")," class."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Eightshift_Libs\\Enqueue\\Enqueue_Theme")," class.")),Object(i.b)("p",null,"or you can modify their functionalities by extending them."),Object(i.b)("p",null,"These classes will handle JavaScript and CSS files of the project for different parts like: Admin area, Block Editor area of Theme area (front end)."),Object(i.b)("p",null,"The usage of any of these classes is optional, and you can use only what you need. Eightshift Boilerplate comes with all three classes already implemented."),Object(i.b)("p",null,"Each of these classes implement actions that can be deregistered using the standard ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.wordpress.org/reference/functions/remove_action/"}),"WordPress way"),"."),Object(i.b)("p",null,"Enqueue classes work in combination with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/eightshift-docs/docs/advanced/webpack"}),"webpack build")," of your project."),Object(i.b)("p",null,"File names are defined inside class constants that can be changed by extending the class and providing the overrides for the constants. If you change the file names, you must provide changes to the webpack build process as well."),Object(i.b)("h2",{id:"enqueue_admin"},"Enqueue_Admin"),Object(i.b)("p",null,"This class provides way to enqueue assets for the ",Object(i.b)("strong",{parentName:"p"},"Admin")," part of the project."),Object(i.b)("p",null,"It implements these hooks in the register method:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"\n// Login only style.\nadd_action( 'login_enqueue_scripts', [ $this, 'enqueue_styles' ] );\n\n// Admin only style.\nadd_action( 'admin_enqueue_scripts', [ $this, 'enqueue_styles' ], 50 );\n\n// Admin only script.\nadd_action( 'admin_enqueue_scripts', [ $this, 'enqueue_scripts' ] );\n")),Object(i.b)("p",null,"Class constants:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"\n  const ADMIN_SCRIPT_URI = 'applicationAdmin.js';\n\n  const ADMIN_STYLE_URI  = 'applicationAdmin.css';\n")),Object(i.b)("h2",{id:"enqueue_blocks"},"Enqueue_Blocks"),Object(i.b)("p",null,"This class provides assets for ",Object(i.b)("strong",{parentName:"p"},"Block Editor")," part of the project."),Object(i.b)("p",null,"It implements these hooks:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"\n// Editor only script.\nadd_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_block_editor_script' ] );\n\n// Editor only style.\nadd_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_block_editor_style' ], 50 );\n\n// Editor and frontend style.\nadd_action( 'enqueue_block_assets', [ $this, 'enqueue_block_style' ], 50 );\n\n// Frontend only script.\nadd_action( 'wp_enqueue_scripts', [ $this, 'enqueue_block_script' ] );\n")),Object(i.b)("p",null,"Class constants:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"\n  const BLOCKS_EDITOR_SCRIPT_URI = 'applicationBlocksEditor.js';\n  const BLOCKS_EDITOR_STYLE_URI  = 'applicationBlocksEditor.css';\n\n  const BLOCKS_STYLE_URI  = 'applicationBlocks.css';\n  const BLOCKS_SCRIPT_URI = 'applicationBlocks.js';\n")),Object(i.b)("h2",{id:"enqueue_theme"},"Enqueue_Theme"),Object(i.b)("p",null,"This class provides assets for ",Object(i.b)("strong",{parentName:"p"},"Theme")," part of the project."),Object(i.b)("p",null,"It implements these hooks:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"\n// Theme only style.\nadd_action( 'wp_enqueue_scripts', [ $this, 'enqueue_styles' ], 10 );\n\n// Theme only script.\nadd_action( 'wp_enqueue_scripts', [ $this, 'enqueue_scripts' ] );\n")),Object(i.b)("p",null,"Class constants:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"\n  const THEME_SCRIPT_URI = 'application.js';\n  const THEME_STYLE_URI  = 'application.css';\n")),Object(i.b)("h2",{id:"additional"},"Additional"),Object(i.b)("p",null,"Each of these 3 classes extends ",Object(i.b)("inlineCode",{parentName:"p"},"Eightshift_Libs\\Enqueue\\Assets")," class that holds some useful methods that you can extend. These methods can be used in all enqueue classes."),Object(i.b)("p",null,"You can find the Assets class ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-libs/tree/develop/src/enqueue"}),"here"),"."),Object(i.b)("p",null,"Provided methods:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"get_frontend_script_dependencies()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"get_admin_script_dependencies()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"get_localizations()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"get_frontend_style_dependencies()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"get_admin_style_dependencies()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"get_media()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"script_in_footer()"))))}u.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),s=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=s.a.createContext({}),u=function(e){var t=s.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r({},t,{},e)),n},p=function(e){var t=u(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,h=p["".concat(c,".").concat(d)]||p[d]||b[d]||i;return n?s.a.createElement(h,r({ref:t},l,{components:n})):s.a.createElement(h,r({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:a,c[1]=r;for(var l=2;l<i;l++)c[l]=n[l];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);