(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{168:function(e,a,n){"use strict";n(12);var c=n(0),r=n.n(c),s=n(160),t=n.n(s),o=n(159),l=n(163);a.a=e=>{const[a,s]=Object(c.useState)(!1),d=Object(c.useRef)(null),{siteConfig:h={}}=Object(o.a)(),{themeConfig:{algolia:i}}=h,p=Object(l.b)();const u=(e=!0)=>{a||Promise.all([n.e(59).then(n.t.bind(null,170,7)),n.e(43).then(n.t.bind(null,173,7))]).then(([{default:a}])=>{s(!0),window.docsearch=a,function(e){window.docsearch({appId:i.appId,apiKey:i.apiKey,indexName:i.indexName,inputSelector:"#search_input_react",algoliaOptions:i.algoliaOptions,handleSelected:(e,a,n)=>{const c=document.createElement("a");c.href=n.url;const r="#__docusaurus"===c.hash?""+c.pathname:`${c.pathname}${c.hash}`;p.push(r)}}),e&&d.current.focus()}(e)})},b=Object(c.useCallback)(()=>{u(),a&&d.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]),m=Object(c.useCallback)(()=>{e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]),S=Object(c.useCallback)(e=>{const a="mouseover"!==e.type;u(a)});return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:t()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:b,onKeyDown:b,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:t()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:S,onFocus:S,onBlur:m,ref:d}))}}}]);