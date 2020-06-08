(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(1),a=(n(0),n(158));const o={id:"rest-route-example",title:"Route Example"},s={id:"guides/rest-route-example",title:"Route Example",description:"[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/tree/master/src/rest)",source:"@site/docs/guides/rest-routes-example.md",permalink:"/eightshift-docs/docs/guides/rest-route-example",sidebar:"docs",previous:{title:"Field Example",permalink:"/eightshift-docs/docs/guides/rest-field-example"},next:{title:"Post Type",permalink:"/eightshift-docs/docs/guides/columns-post-type"}},i=[{value:"Example:",id:"example",children:[{value:"Test in action",id:"test-in-action",children:[]}]}],c={rightToc:i};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/infinum/eightshift-libs/tree/master/src/rest"}),Object(a.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a",alt:"docs-source"})))),Object(a.b)("p",null,"To implement the new Rest API Route, you would need to do a few things, but for this example, we will use this folder structure:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"\n* src\n  * class-main.php\n  * rest\n    * class-example-route.php\n\n")),Object(a.b)("p",null,"REST Route class is located in ",Object(a.b)("inlineCode",{parentName:"p"},"Eightshift Libs"),". To extend it, use ",Object(a.b)("inlineCode",{parentName:"p"},"use Eightshift_Libs\\Rest\\Base_Route")," class. This is an abstract class."),Object(a.b)("h2",{id:"example"},"Example:"),Object(a.b)("p",null,"To create custom REST Route:\n1. make a new class ",Object(a.b)("inlineCode",{parentName:"p"},"src/rest-routes/routes/class-example-route.php"),".\n2. implement all the methods provided in the example.\n3. register the class inside the ",Object(a.b)("inlineCode",{parentName:"p"},"class-main.php")," file.\n4. dump autoload."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"<?php\n/**\n * The class register route for example endpoint\n *\n * @package Eightshift_Boilerplate\\Rest\n */\n\nnamespace Eightshift_Boilerplate\\Rest;\n\nuse Eightshift_Libs\\Rest\\Base_Route;\nuse Eightshift_Libs\\Rest\\Callable_Route;\nuse Eightshift_Libs\\Core\\Config_Data;\n\n/**\n * Class Example_Route\n */\nclass Example_Route extends Base_Route implements Callable_Route {\n\n  /**\n   * Route slug\n   *\n   * @var string\n   */\n  const ENDPOINT_SLUG = '/custom-route-slug';\n\n  /**\n   * Instance variable of project config data.\n   *\n   * @var object\n   */\n  protected $config;\n\n  /**\n   * Create a new instance that injects classes\n   *\n   * @param Config_Data $config Inject config which holds data regarding project details.\n   */\n  public function __construct( Config_Data $config ) {\n    $this->config = $config;\n  }\n\n  /**\n   * Method that returns project Route namespace.\n   *\n   * @return string Project namespace for REST route.\n   */\n  protected function get_namespace() : string {\n    return $this->config->get_project_routes_namespace();\n  }\n\n  /**\n   * Method that returns project route version.\n   *\n   * @return string Route version as a string.\n   */\n  protected function get_version() : string {\n    return $this->config->get_project_routes_version();\n  }\n\n  /**\n   * Get the base url of the route\n   *\n   * @return string The base URL for route you are adding.\n   */\n  protected function get_route_name() : string {\n    return static::ENDPOINT_SLUG;\n  }\n\n  /**\n   * Get callback arguments array\n   *\n   * @return array Either an array of options for the endpoint, or an array of arrays for multiple methods.\n   */\n  protected function get_callback_arguments() : array {\n    return [\n      'methods'  => static::READABLE,\n      'callback' => [ $this, 'route_callback' ],\n    ];\n  }\n\n  /**\n   * Method that returns rest response\n   *\n   * @param  \\WP_REST_Request $request Data got from enpoint url.\n   *\n   * @return WP_REST_Response|mixed If response generated an error, WP_Error, if response\n   *                                is already an instance, WP_HTTP_Response, otherwise\n   *                                returns a new WP_REST_Response instance.\n   */\n  public function route_callback( \\WP_REST_Request $request ) {\n\n    return \\rest_ensure_response( 'output data' );\n  }\n}\n\n")),Object(a.b)("h3",{id:"test-in-action"},"Test in action"),Object(a.b)("p",null,"To test it in action for default boilerplate the link would be:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"domain.ext/wp-json/eightshift-boilerplate/v1/custom-route-slug"),"."),Object(a.b)("p",null,"This link will be different based on your project implementation inside ",Object(a.b)("inlineCode",{parentName:"p"},"src/class-config.php"),"."))}l.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(f,i({ref:t},l,{components:n})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);