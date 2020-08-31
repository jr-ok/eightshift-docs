(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),o=n(6),a=(n(0),n(159)),i={id:"webpack",title:"Webpack"},c={id:"advanced/webpack",title:"Webpack",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--boilerplate-red?style=for-the-badge&logo=wordpress&labelColor=2a2a2a)](https://github.com/infinum/eightshift-boilerplate/blob/develop/webpack.config.js)",source:"@site/docs/advanced/webpack.md",permalink:"/eightshift-docs/docs/advanced/webpack",sidebar:"docs",previous:{title:"Sass",permalink:"/eightshift-docs/docs/advanced/docs-sass"},next:{title:"Aliases",permalink:"/eightshift-docs/docs/advanced/helpers-aliases-helpers"}},l=[{value:"Override built-in functionality",id:"override-built-in-functionality",children:[]},{value:"Add Custom build",id:"add-custom-build",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-boilerplate/blob/develop/webpack.config.js"}),Object(a.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--boilerplate-red?style=for-the-badge&logo=wordpress&labelColor=2a2a2a",alt:"docs-source"})))),Object(a.b)("p",null,"At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles. Learn more about webpack ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://webpack.js.org/concepts/"}),"here"),"."),Object(a.b)("p",null,"Look at how the config is set up on ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-boilerplate/blob/develop/webpack.config.js"}),"Eightshift Boilerplate repo"),"."),Object(a.b)("p",null,"In order to use this library, you'll need to have a ",Object(a.b)("inlineCode",{parentName:"p"},"webpack.config.js")," file in the root of your project."),Object(a.b)("p",null,"This file holds basic configuration that will build your assets correctly and provide browsersync functionality."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"webpack.config.js")," is a main entrypoint for webpack config and looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"/* eslint-disable import/no-dynamic-require, global-require */\n\nmodule.exports = (env, argv) => {\n\n  const projectConfig = {\n    config: {\n      projectDir: __dirname, // Current project directory absolute path.\n      projectUrl: 'local-url.test', // Used for providing browsersync functionality.\n      projectPath: 'wp-content/themes/your-theme-name', // Project path relative to project root.\n      assetsPath: 'src/blocks/assets', // Assets path after projectPath location. (add this key only to override the default value.)\n      blocksAssetsPathConfig: 'src/blocks/assets', // Blocks assets path after projectPath location. (add this key only to override the default value.)\n      outputPath: 'public', // Public output path after projectPath location. (add this key only to override the default value.)\n    },\n  };\n\n  // Generate webpack config for this project using options object.\n  const project = require('./node_modules/@eightshift/frontend-libs/webpack')(argv.mode, projectConfig);\n\n  return {\n    ...project,\n  };\n};\n")),Object(a.b)("h2",{id:"override-built-in-functionality"},"Override built-in functionality"),Object(a.b)("p",null,"To remove built-in functionality, add a new array to the config called ",Object(a.b)("inlineCode",{parentName:"p"},"overrides"),".\nIf you provide any of the ",Object(a.b)("inlineCode",{parentName:"p"},"overrides keys"),", it will remove that config from the build.\nHere is a list of all the features that we use and how to remove them."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"\nconst projectConfig = {\n  config: {\n    ...\n  },\n  overrides: [\n    'application',\n    'applicationAdmin',\n    'applicationBlocks',\n    'applicationBlocksEditor',\n    'filename',\n    'cleanWebpackPlugin',\n    'terserPlugin',\n    'browserSyncPlugin',\n    'providePlugin',\n    'manifestPlugin',\n    'miniCssExtractPlugin',\n    'copyWebpackPlugin',\n    'optimizeCSSAssetsPlugin',\n    'js',\n    'scss',\n    'images',\n    'fonts',\n    'runtimeChunk',\n  ],\n}\n")),Object(a.b)("h2",{id:"add-custom-build"},"Add Custom build"),Object(a.b)("p",null,"If you want to add something custom to your build, you can simply use all the native ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://webpack.js.org/guides/"}),"webpack features")," by providing it like in the example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"/* eslint-disable import/no-dynamic-require, global-require */\n\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\n\nmodule.exports = (env, argv) => {\n\n  ...\n\n  return {\n    ...project,\n    plugin: [\n      new HtmlWebpackPlugin(),\n    ]\n  };\n};\n\n")))}p.isMDXComponent=!0},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(f,c({ref:t},s,{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);