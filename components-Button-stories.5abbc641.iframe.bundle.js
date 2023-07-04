/*! For license information please see components-Button-stories.5abbc641.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkspoutible_storybook=self.webpackChunkspoutible_storybook||[]).push([[706],{"./stories/components/Button.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:()=>Large,Primary:()=>Primary,Secondary:()=>Secondary,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Components/Button",component:__webpack_require__("./stories/components/Button.jsx").z,tags:["autodocs"],argTypes:{}},Primary={args:{primary:!0,label:"Button"}},Secondary={args:{label:"Button"}},Large={args:{size:"large",label:"Button"}},Small={args:{size:"small",label:"Button"}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    primary: true,\n    label: 'Button'\n  }\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Button'\n  }\n}",...Secondary.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'large',\n    label: 'Button'\n  }\n}",...Large.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'small',\n    label: 'Button'\n  }\n}",...Small.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary","Large","Small"]},"./stories/components/Button.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});__webpack_require__("./node_modules/react/index.js");var prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=({icon,primary,size,label,...props})=>{const buttonMode=primary?"bg-blue hover:bg-sky-600 text-white":"outline outline-2 outline-blue text-blue",buttonSize=(()=>{switch(size){case"small":return"text-xs\tpy-1 px-2";case"large":return"text-sm\tpy-2 px-4";default:return"text-sm\tpy-1 px-3"}})();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button",{type:"button",className:["flex place-items-center justify-center rounded-xl font-bold uppercase",buttonSize,buttonMode].join(" "),...props,children:[icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{className:"inline h-4 mr-2 fill-white",xmlns:"http://www.w3.org/2000/svg",version:"1.1",id:"sptbl-icon",viewBox:"0 0 294.649 294.649",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M158.116,6.916c-1.938-4.214-6.151-6.915-10.789-6.916c-4.639-0.001-8.855,2.697-10.793,6.911  c-29.875,64.975-82.858,148.605-82.858,194.09c0,51.721,41.927,93.648,93.648,93.648s93.649-41.928,93.649-93.648  C240.974,155.519,187.992,71.891,158.116,6.916z M143.324,264.816c-34.601,0-62.75-28.149-62.75-62.75c0-6.903,5.597-12.5,12.5-12.5  c6.903,0,12.5,5.597,12.5,12.5c0,20.815,16.935,37.75,37.75,37.75c6.903,0,12.5,5.597,12.5,12.5  C155.824,259.22,150.227,264.816,143.324,264.816z"})}),label]})};Button.displayName="Button",Button.propTypes={icon:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,primary:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,size:prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["small","medium","large"]),label:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired,onClick:prop_types__WEBPACK_IMPORTED_MODULE_2___default().func},Button.defaultProps={icon:!1,primary:!1,size:"medium",onClick:void 0},Button.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{icon:{defaultValue:{value:"false",computed:!1},description:"Is this the principal call to action on the page?",type:{name:"bool"},required:!1},primary:{defaultValue:{value:"false",computed:!1},description:"Is this the principal call to action on the page?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"How large should the button be?",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"Optional click handler",type:{name:"func"},required:!1},label:{description:"Button contents",type:{name:"string"},required:!0}}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);