(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{258:function(e,a,n){"use strict";n(52),n(26),n(21),n(22),n(78);var r=n(0),c=n.n(r),t=n(252),i=n.n(t),s=n(250),o=n(254);a.a=function(e){var a=Object(r.useState)(!1),t=a[0],l=a[1],d=Object(r.useRef)(null),h=Object(s.a)().siteConfig,u=(void 0===h?{}:h).themeConfig.algolia,p=Object(o.b)();var b=function(e){void 0===e&&(e=!0),t||Promise.all([n.e(111).then(n.t.bind(null,259,7)),n.e(79).then(n.t.bind(null,261,7))]).then((function(a){var n=a[0].default;l(!0),window.docsearch=n,function(e){window.docsearch({appId:u.appId,apiKey:u.apiKey,indexName:u.indexName,inputSelector:"#search_input_react",algoliaOptions:u.algoliaOptions,handleSelected:function(e,a,n){var r=document.createElement("a");r.href=n.url;var c="#__docusaurus"===r.hash?""+r.pathname:""+r.pathname+r.hash;p.push(c)}}),e&&d.current.focus()}(e)}))},f=Object(r.useCallback)((function(){b(),t&&d.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),m=Object(r.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),v=Object(r.useCallback)((function(e){var a="mouseover"!==e.type;b(a)}));return c.a.createElement("div",{className:"navbar__search",key:"search-box"},c.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:i()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:f,onKeyDown:f,tabIndex:0}),c.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:i()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:v,onFocus:v,onBlur:m,ref:d}))}}}]);