(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(1),r=(n(0),n(158));const i={id:"extending-classes",title:"Extending Classes"},o={id:"guides/extending-classes",title:"Extending Classes",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs)",source:"@site/docs/guides/extending-classes.md",permalink:"/eightshift-docs/docs/guides/extending-classes",sidebar:"docs",previous:{title:"Eightshift Frontend Libs",permalink:"/eightshift-docs/docs/frontend-libs"},next:{title:"Dependency injection container",permalink:"/eightshift-docs/docs/guides/di-container"}},c=[{value:"Important notes",id:"important-notes",children:[]},{value:"Example",id:"example",children:[]}],s={rightToc:c};function l({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-libs"}),Object(r.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"})))),Object(r.b)("p",null,"We are providing abstract classes, interfaces, helpers, dependency injection and namespaces for your project. In general, you can use anything as-is from the vendor library, or you can modify/add the functionality of existing classes by extending them in your project."),Object(r.b)("p",null,"If you are familiar with the extending classes (object inheritance) in PHP language then you can just skip this chapter but for the rest of you here is an awesome description on how it works:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.php.net/manual/en/language.oop5.interfaces.php"}),"Interfaces")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Dependency_injection"}),"Dependency Injection")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.php.net/manual/en/language.oop5.abstract.php"}),"Abstract Classes")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.php.net/manual/en/language.oop5.inheritance.php"}),"Object Inheritance")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.php.net/manual/en/language.namespaces.php"}),"Namespaces")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.php.net/manual/en/language.oop5.traits.php"}),"Traits"))),Object(r.b)("p",null,"Please get acquainted with these concepts before you continue because they will help you in the later chapters."),Object(r.b)("h2",{id:"important-notes"},"Important notes"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"PHP part of this project lives in ",Object(r.b)("inlineCode",{parentName:"p"},"Eightshift_Libs")," namespace.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"When adding a new class, changing the class name or changing the class file name, don't forget to run ",Object(r.b)("inlineCode",{parentName:"p"},"composer dump-autoload")," to rebuild the autoload map.")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("p",null,"Every class in the lib can be extended and certain parts of it can be overriden or removed. For example, let's look at a way to remove loading of the admin style CSS assets."),Object(r.b)("p",null,"In order to override the ",Object(r.b)("inlineCode",{parentName:"p"},"Eightshift_Lib\\Enqueue_Admin")," class, you should create a new class, preferably in the ",Object(r.b)("inlineCode",{parentName:"p"},"enqueue")," folder in your project.\nIn your ",Object(r.b)("inlineCode",{parentName:"p"},"enqueue\\class-admin-enqueue.php")," file you'd do:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<?php\n/**\n * The Admin Enqueue specific functionality.\n *\n * @package Your_Project\\Enqueue\n */\n\ndeclare( strict_types=1 );\n\nnamespace Your_Project\\Enqueue;\n\nuse Eightshift_Libs\\Enqueue\\Enqueue_Admin;\n\nclass Admin_Enqueue extends Enqueue_Admin {\n  /**\n   * Register all the hooks\n   *\n   * @return void\n   *\n   * @since 2.0.0\n   */\n  public function register() {\n    parent::register();\n\n    // We do not want to load the login and admin styles.\n    remove_action( 'login_enqueue_scripts', [ $this, 'enqueue_styles' ] );\n    remove_action( 'admin_enqueue_scripts', [ $this, 'enqueue_styles' ], 50 );\n  }\n}\n")),Object(r.b)("p",null,"This way, only ",Object(r.b)("inlineCode",{parentName:"p"},"add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_scripts' ] );")," hook will run, and only admin scripts will be loaded. You just need to be sure to modify your webpack settings so that admin CSS scripts are not bundled."),Object(r.b)("p",null,"You can do this with other classess in the lib - ",Object(r.b)("inlineCode",{parentName:"p"},"Blocks"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Columns"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Manifest"),", etc. in the same way."))}l.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?r.a.createElement(h,c({ref:t},l,{components:n})):r.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);