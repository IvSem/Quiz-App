"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[363],{2363:function(e,t,o){o.r(t),o.d(t,{default:function(){return G}});var a=o(4942),n=o(3366),r=o(7462),i=o(2791),c=o(8182),l=o(2466),s=o(4419),d=o(1217),u=o(3457),p=o(7078),v=o(8519),h=o(5080),m=o(1184),x=o(5682),b=o(184),f=["component","direction","spacing","divider","children","className","useFlexGap"],g=(0,h.Z)(),S=(0,u.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return t.root}});function y(e){return(0,p.Z)({props:e,name:"MuiStack",defaultTheme:g})}function Z(e,t){var o=i.Children.toArray(e).filter(Boolean);return o.reduce((function(e,a,n){return e.push(a),n<o.length-1&&e.push(i.cloneElement(t,{key:"separator-".concat(n)})),e}),[])}var z=function(e){var t=e.ownerState,o=e.theme,n=(0,r.Z)({display:"flex",flexDirection:"column"},(0,m.k9)({theme:o},(0,m.P$)({values:t.direction,breakpoints:o.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var i=(0,x.hB)(o),c=Object.keys(o.breakpoints.values).reduce((function(e,o){return("object"===typeof t.spacing&&null!=t.spacing[o]||"object"===typeof t.direction&&null!=t.direction[o])&&(e[o]=!0),e}),{}),s=(0,m.P$)({values:t.direction,base:c}),d=(0,m.P$)({values:t.spacing,base:c});"object"===typeof s&&Object.keys(s).forEach((function(e,t,o){if(!s[e]){var a=t>0?s[o[t-1]]:"column";s[e]=a}}));n=(0,l.Z)(n,(0,m.k9)({theme:o},d,(function(e,o){return t.useFlexGap?{gap:(0,x.NA)(i,e)}:{"& > :not(style) + :not(style)":(0,a.Z)({margin:0},"margin".concat((n=o?s[o]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[n])),(0,x.NA)(i,e))};var n})))}return n=(0,m.dt)(o.breakpoints,n)};var w=o(6934),k=o(1402),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,o=void 0===t?S:t,a=e.useThemeProps,l=void 0===a?y:a,u=e.componentName,p=void 0===u?"MuiStack":u,h=function(){return(0,s.Z)({root:["root"]},(function(e){return(0,d.Z)(p,e)}),{})},m=o(z),x=i.forwardRef((function(e,t){var o=l(e),a=(0,v.Z)(o),i=a.component,s=void 0===i?"div":i,d=a.direction,u=void 0===d?"column":d,p=a.spacing,x=void 0===p?0:p,g=a.divider,S=a.children,y=a.className,z=a.useFlexGap,w=void 0!==z&&z,k=(0,n.Z)(a,f),C={direction:u,spacing:x,useFlexGap:w},R=h();return(0,b.jsx)(m,(0,r.Z)({as:s,ownerState:C,ref:t,className:(0,c.Z)(R.root,y)},k,{children:g?Z(S,g):S}))}));return x}({createStyledComponent:(0,w.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return t.root}}),useThemeProps:function(e){return(0,k.Z)({props:e,name:"MuiStack"})}}),R=C,I=o(5735),j=o(2065),B=o(8363),M=o(4036);function E(e){return(0,d.Z)("MuiButton",e)}var N=(0,o(5878).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var F=i.createContext({}),P=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],T=function(e){return(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},W=(0,w.ZP)(B.Z,{shouldForwardProp:function(e){return(0,w.FO)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t[o.variant],t["".concat(o.variant).concat((0,M.Z)(o.color))],t["size".concat((0,M.Z)(o.size))],t["".concat(o.variant,"Size").concat((0,M.Z)(o.size))],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})((function(e){var t,o,n,i=e.theme,c=e.ownerState,l="light"===i.palette.mode?i.palette.grey[300]:i.palette.grey[800],s="light"===i.palette.mode?i.palette.grey.A100:i.palette.grey[700];return(0,r.Z)({},i.typography.button,(t={minWidth:64,padding:"6px 16px",borderRadius:(i.vars||i).shape.borderRadius,transition:i.transitions.create(["background-color","box-shadow","border-color","color"],{duration:i.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:i.vars?"rgba(".concat(i.vars.palette.text.primaryChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,j.Fq)(i.palette.text.primary,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===c.variant&&"inherit"!==c.color&&{backgroundColor:i.vars?"rgba(".concat(i.vars.palette[c.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,j.Fq)(i.palette[c.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===c.variant&&"inherit"!==c.color&&{border:"1px solid ".concat((i.vars||i).palette[c.color].main),backgroundColor:i.vars?"rgba(".concat(i.vars.palette[c.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,j.Fq)(i.palette[c.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===c.variant&&{backgroundColor:i.vars?i.vars.palette.Button.inheritContainedHoverBg:s,boxShadow:(i.vars||i).shadows[4],"@media (hover: none)":{boxShadow:(i.vars||i).shadows[2],backgroundColor:(i.vars||i).palette.grey[300]}},"contained"===c.variant&&"inherit"!==c.color&&{backgroundColor:(i.vars||i).palette[c.color].dark,"@media (hover: none)":{backgroundColor:(i.vars||i).palette[c.color].main}}),"&:active":(0,r.Z)({},"contained"===c.variant&&{boxShadow:(i.vars||i).shadows[8]})},(0,a.Z)(t,"&.".concat(N.focusVisible),(0,r.Z)({},"contained"===c.variant&&{boxShadow:(i.vars||i).shadows[6]})),(0,a.Z)(t,"&.".concat(N.disabled),(0,r.Z)({color:(i.vars||i).palette.action.disabled},"outlined"===c.variant&&{border:"1px solid ".concat((i.vars||i).palette.action.disabledBackground)},"contained"===c.variant&&{color:(i.vars||i).palette.action.disabled,boxShadow:(i.vars||i).shadows[0],backgroundColor:(i.vars||i).palette.action.disabledBackground})),t),"text"===c.variant&&{padding:"6px 8px"},"text"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].main},"outlined"===c.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].main,border:i.vars?"1px solid rgba(".concat(i.vars.palette[c.color].mainChannel," / 0.5)"):"1px solid ".concat((0,j.Fq)(i.palette[c.color].main,.5))},"contained"===c.variant&&{color:i.vars?i.vars.palette.text.primary:null==(o=(n=i.palette).getContrastText)?void 0:o.call(n,i.palette.grey[300]),backgroundColor:i.vars?i.vars.palette.Button.inheritContainedBg:l,boxShadow:(i.vars||i).shadows[2]},"contained"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].contrastText,backgroundColor:(i.vars||i).palette[c.color].main},"inherit"===c.color&&{color:"inherit",borderColor:"currentColor"},"small"===c.size&&"text"===c.variant&&{padding:"4px 5px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"text"===c.variant&&{padding:"8px 11px",fontSize:i.typography.pxToRem(15)},"small"===c.size&&"outlined"===c.variant&&{padding:"3px 9px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"outlined"===c.variant&&{padding:"7px 21px",fontSize:i.typography.pxToRem(15)},"small"===c.size&&"contained"===c.variant&&{padding:"4px 10px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"contained"===c.variant&&{padding:"8px 22px",fontSize:i.typography.pxToRem(15)},c.fullWidth&&{width:"100%"})}),(function(e){var t;return e.ownerState.disableElevation&&(t={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,a.Z)(t,"&.".concat(N.focusVisible),{boxShadow:"none"}),(0,a.Z)(t,"&:active",{boxShadow:"none"}),(0,a.Z)(t,"&.".concat(N.disabled),{boxShadow:"none"}),t)})),V=(0,w.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var o=e.ownerState;return[t.startIcon,t["iconSize".concat((0,M.Z)(o.size))]]}})((function(e){var t=e.ownerState;return(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},T(t))})),L=(0,w.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var o=e.ownerState;return[t.endIcon,t["iconSize".concat((0,M.Z)(o.size))]]}})((function(e){var t=e.ownerState;return(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},T(t))})),O=i.forwardRef((function(e,t){var o=i.useContext(F),a=(0,I.Z)(o,e),l=(0,k.Z)({props:a,name:"MuiButton"}),d=l.children,u=l.color,p=void 0===u?"primary":u,v=l.component,h=void 0===v?"button":v,m=l.className,x=l.disabled,f=void 0!==x&&x,g=l.disableElevation,S=void 0!==g&&g,y=l.disableFocusRipple,Z=void 0!==y&&y,z=l.endIcon,w=l.focusVisibleClassName,C=l.fullWidth,R=void 0!==C&&C,j=l.size,B=void 0===j?"medium":j,N=l.startIcon,T=l.type,O=l.variant,A=void 0===O?"text":O,q=(0,n.Z)(l,P),G=(0,r.Z)({},l,{color:p,component:h,disabled:f,disableElevation:S,disableFocusRipple:Z,fullWidth:R,size:B,type:T,variant:A}),D=function(e){var t=e.color,o=e.disableElevation,a=e.fullWidth,n=e.size,i=e.variant,c=e.classes,l={root:["root",i,"".concat(i).concat((0,M.Z)(t)),"size".concat((0,M.Z)(n)),"".concat(i,"Size").concat((0,M.Z)(n)),"inherit"===t&&"colorInherit",o&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,M.Z)(n))],endIcon:["endIcon","iconSize".concat((0,M.Z)(n))]},d=(0,s.Z)(l,E,c);return(0,r.Z)({},c,d)}(G),$=N&&(0,b.jsx)(V,{className:D.startIcon,ownerState:G,children:N}),Q=z&&(0,b.jsx)(L,{className:D.endIcon,ownerState:G,children:z});return(0,b.jsxs)(W,(0,r.Z)({ownerState:G,className:(0,c.Z)(o.className,D.root,m),component:h,disabled:f,focusRipple:!Z,focusVisibleClassName:(0,c.Z)(D.focusVisible,w),ref:t,type:T},q,{classes:D,children:[$,d,Q]}))})),A=o(8870),q=o(890),G=function(){return(0,b.jsxs)(A.Z,{pt:5,textAlign:"center",sx:{height:"100vh"},children:[(0,b.jsx)(q.Z,{variant:"h4",children:"Question 1"}),(0,b.jsx)(q.Z,{mt:3,variant:"h6",children:"Text Question ?"}),(0,b.jsx)(A.Z,{mt:3,width:"50%",mx:"auto",children:(0,b.jsxs)(R,{spacing:3,children:[(0,b.jsx)(O,{sx:{py:2,fontSize:"20px",color:"#2a2a2a\t"},type:"button",variant:"text",children:"Variant 1"}),(0,b.jsx)(O,{sx:{py:2,fontSize:"20px",color:"#2a2a2a\t",borderBottom:"1px solid black"},type:"button",variant:"text",children:"Variant 2"}),(0,b.jsx)(O,{sx:{py:2,fontSize:"20px",color:"#2a2a2a\t"},type:"button",variant:"text",children:"Variant 3Variant 3"})]})}),(0,b.jsx)(q.Z,{mt:5,variant:"h6",children:"Score 2/6"})]})}}}]);
//# sourceMappingURL=363.2555ec04.chunk.js.map