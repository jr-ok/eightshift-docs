(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{138:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return i})),o.d(t,"rightToc",(function(){return l})),o.d(t,"default",(function(){return b}));var n=o(1),r=o(9),a=(o(0),o(251)),s={id:"blocks-storybook",title:"Storybook",sidebar_label:"Storybook"},i={id:"basics/blocks-storybook",title:"Storybook",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)",source:"@site/docs/basics/blocks-storybook.md",permalink:"/eightshift-docs/docs/basics/blocks-storybook",sidebar_label:"Storybook",sidebar:"docs",previous:{title:"Reusable Blocks",permalink:"/eightshift-docs/docs/basics/blocks-reusable"},next:{title:"Helpers",permalink:"/eightshift-docs/docs/basics/helpers"}},l=[{value:"Create my custom story",id:"create-my-custom-story",children:[{value:"Block story",id:"block-story",children:[]},{value:"Variation story",id:"variation-story",children:[]},{value:"Component story",id:"component-story",children:[]}]}],c={rightToc:l};function b(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/"}),Object(a.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a",alt:"docs-source"})))),Object(a.b)("p",null,"We have created a full storybook that hosts all our blocks/components/variations with a fully functional block editor, where you can try out how blocks work and behave."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Visit ",Object(a.b)("a",Object(n.a)({parentName:"strong"},{href:"eightshift-docs/storybook/"}),"Storybook")," for more details.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"To speed up project build time, Eightshift Boilerplate doesn't come with the storybook out of the box; you need to install it. To install Storybook to your project, just type this command in you terminal and follow the instructions:")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"wp boilerplate create_blocks_storybook\n")),Object(a.b)("h2",{id:"create-my-custom-story"},"Create my custom story"),Object(a.b)("p",null,"You don't need to have stories in your block/component, but we provided you with the ability to use the Storybook for all of your blocks and components. Why not use it? It will speed up your development time. Trust us."),Object(a.b)("p",null,"If you used our way to set up your project, you already have Storybook ready to use. To start the Storybook, run this command:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm run Storybook\n")),Object(a.b)("p",null,"In your project, you also have the ",Object(a.b)("inlineCode",{parentName:"p"},".storybook")," folder, where all the configuration for Storybook is defined."),Object(a.b)("p",null,"For your blocks/components/variation to be seen in the Storybook, you must have the ",Object(a.b)("inlineCode",{parentName:"p"},"docs")," folder and the ",Object(a.b)("inlineCode",{parentName:"p"},"story.js")," file in it."),Object(a.b)("h3",{id:"block-story"},"Block story"),Object(a.b)("p",null,"For all blocks, you don't need to write anything because all blocks stories look the same:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { Gutenberg, blockDetails } from '@eightshift/frontend-libs/scripts/storybook';\nimport manifest from './../manifest.json';\nimport globalManifest from './../../../manifest.json';\nimport readme from './readme.mdx';\n\nexport default {\n    title: `Blocks/${manifest.title}`,\n    parameters: {\n        docs: {\n            page: readme\n        }\n    },\n};\n\nexport const block = () => (\n    <Gutenberg props={blockDetails(manifest, globalManifest)} />\n);\n")),Object(a.b)("p",null,"We pull all the data from the manifest.json file and all the attribute values from the ",Object(a.b)("inlineCode",{parentName:"p"},"example")," key."),Object(a.b)("h3",{id:"variation-story"},"Variation story"),Object(a.b)("p",null,"The same as the block's story."),Object(a.b)("h3",{id:"component-story"},"Component story"),Object(a.b)("p",null,"Components are not smart and can't be automatically built into the story. This is why you must create a story of all your components and mock the data.\nYou should set all the mock data in the component ",Object(a.b)("inlineCode",{parentName:"p"},"manifest.json")," and just provide the story's implementation."),Object(a.b)("p",null,"Button block editor component:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { Fragment } from '@wordpress/element';\nimport readme from './readme.mdx';\nimport manifest from './../manifest.json';\nimport { ButtonEditor } from '../components/button-editor';\nimport { ButtonOptions } from '../components/button-options';\nimport { ButtonToolbar } from '../components/button-toolbar';\n\nexport default {\n    title: `Components/${manifest.title}`,\n    parameters: {\n        docs: {\n            page: readme\n        }\n    },\n};\n\nconst props = manifest.example.attributes;\n\nexport const editor = () => (\n    <ButtonEditor {...props} />\n);\n")),Object(a.b)("p",null,"Button block editor size variation:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport { Fragment } from '@wordpress/element';\nimport readme from './readme.mdx';\nimport manifest from './../manifest.json';\nimport { ButtonEditor } from '../components/button-editor';\nimport { ButtonOptions } from '../components/button-options';\nimport { ButtonToolbar } from '../components/button-toolbar';\n\nexport default {\n    title: `Components/${manifest.title}`,\n    parameters: {\n        docs: {\n            page: readme\n        }\n    },\n};\n\nconst props = manifest.example.attributes;\n\nexport const size = () => (\n    <Fragment>\n        {manifest.options.sizes.map((values, index) => (\n            <Fragment key={index}>\n                <ButtonEditor\n                    {...props}\n                    buttonContent={values.label}\n                    buttonSize={values.value}\n                />\n                <br />\n            </Fragment>\n        ))}\n    </Fragment>\n);\n")))}b.isMDXComponent=!0},251:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return d}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i({},t,{},e)),o},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(o),u=n,d=p["".concat(s,".").concat(u)]||p[u]||m[u]||a;return o?r.a.createElement(d,i({ref:t},c,{components:o})):r.a.createElement(d,i({ref:t},c))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=o[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"}}]);