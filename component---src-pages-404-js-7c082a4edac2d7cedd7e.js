(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(153);t.default=function(){return l.a.createElement(r.a,{fullMenu:!0},l.a.createElement("article",{id:"main"},l.a.createElement("header",null,l.a.createElement("h2",null,"Not Found"),l.a.createElement("p",null,"Not a Valid URL"))))}},148:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},149:function(e,t){e.exports={siteTitle:"Personal Portfolio",manifestName:"Portfolio",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/new-portfolio/",heading:"Hi, I'm Tom",subHeading:"Full Stack Developer. Spicy food and Sushi lover",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/tnathalang/"},{icon:"fa-instagram",name:"Instagram",url:"https://www.instagram.com/itsdrunksushi/"},{icon:"fa-linkedin",name:"Facebook",url:"https://facebook.com/nt.akira"}]}},150:function(e,t,n){"use strict";var a=n(35),l=n.n(a),r=n(7),i=n.n(r),o=n(157),c=n.n(o),s=n(0),u=n.n(s),m=n(4),d=n.n(m),f=function(e){return e.children},p=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(l()(t)),t}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){c.a.polyfill()},n.handleClick=function(e){e.preventDefault();var t=0,n=!0,a=this.props,l=a.type,r=a.element,i=a.offset,o=a.timeout;if(l&&r)switch(l){case"class":n=!!(t=document.getElementsByClassName(r)[0]);break;case"id":n=!!(t=document.getElementById(r))}n?this.scrollTo(t,i,o):console.log("Element not found: "+r)},n.scrollTo=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=null);var a=e?e.getBoundingClientRect().top+window.pageYOffset:0;n?setTimeout(function(){window.scroll({top:a+t,left:0,behavior:"smooth"})},n):window.scroll({top:a+t,left:0,behavior:"smooth"})},n.render=function(){return u.a.createElement(f,null,"object"==typeof this.props.children?u.a.cloneElement(this.props.children,{onClick:this.handleClick}):u.a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(u.a.Component);p.propTypes={type:d.a.string,element:d.a.string,offset:d.a.number,timeout:d.a.number,children:d.a.node.isRequired},t.a=p},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Personal Portfolio"}}}}},152:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),l=n.n(a),r=n(4),i=n.n(r),o=n(55),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?l.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},153:function(e,t,n){"use strict";var a=n(7),l=n.n(a),r=n(151),i=n(0),o=n.n(i),c=n(4),s=n.n(c),u=n(154),m=n.n(u),d=n(33),f=n.n(d),p=(n(148),o.a.createContext({})),h=function(e){return o.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};h.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};n(155),n(156);var E=n(149),g=n.n(E);function v(){return o.a.createElement("footer",{id:"footer"},o.a.createElement("ul",{className:"icons"},g.a.socialLinks.map(function(e){var t=e.icon,n=e.name,a=e.url;return o.a.createElement("li",{key:a},o.a.createElement("a",{href:a,className:"icon brands "+t},o.a.createElement("span",{className:"label"},n)))})),o.a.createElement("ul",{className:"copyright"},o.a.createElement("li",null,"Made with passion"),o.a.createElement("li",null,"Montreal, QC"),o.a.createElement("li",null,"© Spectral")))}var w=n(150);function k(e){var t=e.onMenuToggle,n=void 0===t?function(){}:t;return o.a.createElement("nav",{id:"nav"},o.a.createElement("ul",null,o.a.createElement("li",{className:"special"},o.a.createElement("a",{href:"#menu",onClick:function(e){e.preventDefault(),n()},className:"menuToggle"},o.a.createElement("span",null,"Menu")),o.a.createElement("div",{id:"menu"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(f.a,{to:"/"},"Home")),o.a.createElement(w.a,{type:"id",element:"two"},o.a.createElement("li",null,o.a.createElement("a",{href:"#two"},"My Stacks"))),o.a.createElement(w.a,{type:"id",element:"three"},o.a.createElement("li",null,o.a.createElement("a",{href:"#three"},"Portfolio"))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.linkedin.com/in/tnathalang/",target:"_blank"},"LinkedIn")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.instagram.com/itsdrunksushi/",target:"_blank"},"Instagram"))),o.a.createElement("a",{className:"close",onClick:function(e){e.preventDefault(),n()},href:"#menu"},"")))))}function y(e){var t=e.fullMenu,n=Object(i.useState)(!1),a=n[0],l=n[1];return o.a.createElement("header",{id:"header",className:t?"":"alt"},o.a.createElement("h1",null,o.a.createElement(f.a,{to:"/"},"Spectral")),o.a.createElement("div",{className:a?"is-menu-visible":" "},o.a.createElement(k,{onMenuToggle:function(){return l(!a)}})))}var b=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isPreloaded:!0},n}l()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({isPreloaded:!1})},100)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},n.render=function(){var e=this.props,t=e.children,n=e.fullMenu,a=this.state.isPreloaded;return o.a.createElement(h,{query:"1044757290",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Spectral"},{name:"keywords",content:"site, web"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement("div",{className:a?"landing main-body landing is-preload":"landing main-body"},o.a.createElement("div",{id:"page-wrapper"},o.a.createElement(y,{fullMenu:n}),t,o.a.createElement(v,null))))},data:r})},t}(i.Component);b.propTypes={children:s.a.node.isRequired};t.a=b}}]);
//# sourceMappingURL=component---src-pages-404-js-7c082a4edac2d7cedd7e.js.map