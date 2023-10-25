"use strict";(self.webpackChunkmantis_react_ts=self.webpackChunkmantis_react_ts||[]).push([[5061],{19316:function(e,t,n){var o=n(36222),r=n(31303),i=n(1048),a=n(32793),l=n(88391),s=n(92768),u=n(47792),c=n(6408),d=n(34684),p=n(17344),v=n(79314),f=n(23712),m=["disableUnderline","components","componentsProps","fullWidth","hiddenLabel","inputComponent","multiline","slotProps","slots","type"],h=(0,d.ZP)(c.Ej,{shouldForwardProp:function(e){return(0,d.FO)(e)||"classes"===e},name:"MuiFilledInput",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[].concat((0,r.Z)((0,c.Gx)(e,t)),[!n.disableUnderline&&t.underline])}})((function(e){var t,n,r,i=e.theme,l=e.ownerState,s="light"===i.palette.mode,u=s?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)",c=s?"rgba(0, 0, 0, 0.06)":"rgba(255, 255, 255, 0.09)",d=s?"rgba(0, 0, 0, 0.09)":"rgba(255, 255, 255, 0.13)",p=s?"rgba(0, 0, 0, 0.12)":"rgba(255, 255, 255, 0.12)";return(0,a.Z)((t={position:"relative",backgroundColor:i.vars?i.vars.palette.FilledInput.bg:c,borderTopLeftRadius:(i.vars||i).shape.borderRadius,borderTopRightRadius:(i.vars||i).shape.borderRadius,transition:i.transitions.create("background-color",{duration:i.transitions.duration.shorter,easing:i.transitions.easing.easeOut}),"&:hover":{backgroundColor:i.vars?i.vars.palette.FilledInput.hoverBg:d,"@media (hover: none)":{backgroundColor:i.vars?i.vars.palette.FilledInput.bg:c}}},(0,o.Z)(t,"&.".concat(v.Z.focused),{backgroundColor:i.vars?i.vars.palette.FilledInput.bg:c}),(0,o.Z)(t,"&.".concat(v.Z.disabled),{backgroundColor:i.vars?i.vars.palette.FilledInput.disabledBg:p}),t),!l.disableUnderline&&(n={"&:after":{borderBottom:"2px solid ".concat(null==(r=(i.vars||i).palette[l.color||"primary"])?void 0:r.main),left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:i.transitions.create("transform",{duration:i.transitions.duration.shorter,easing:i.transitions.easing.easeOut}),pointerEvents:"none"}},(0,o.Z)(n,"&.".concat(v.Z.focused,":after"),{transform:"scaleX(1) translateX(0)"}),(0,o.Z)(n,"&.".concat(v.Z.error),{"&:before, &:after":{borderBottomColor:(i.vars||i).palette.error.main}}),(0,o.Z)(n,"&:before",{borderBottom:"1px solid ".concat(i.vars?"rgba(".concat(i.vars.palette.common.onBackgroundChannel," / ").concat(i.vars.opacity.inputUnderline,")"):u),left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:i.transitions.create("border-bottom-color",{duration:i.transitions.duration.shorter}),pointerEvents:"none"}),(0,o.Z)(n,"&:hover:not(.".concat(v.Z.disabled,", .").concat(v.Z.error,"):before"),{borderBottom:"1px solid ".concat((i.vars||i).palette.text.primary)}),(0,o.Z)(n,"&.".concat(v.Z.disabled,":before"),{borderBottomStyle:"dotted"}),n),l.startAdornment&&{paddingLeft:12},l.endAdornment&&{paddingRight:12},l.multiline&&(0,a.Z)({padding:"25px 12px 8px"},"small"===l.size&&{paddingTop:21,paddingBottom:4},l.hiddenLabel&&{paddingTop:16,paddingBottom:17}))})),b=(0,d.ZP)(c.rA,{name:"MuiFilledInput",slot:"Input",overridesResolver:c._o})((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({paddingTop:25,paddingRight:12,paddingBottom:8,paddingLeft:12},!t.vars&&{"&:-webkit-autofill":{WebkitBoxShadow:"light"===t.palette.mode?null:"0 0 0 100px #266798 inset",WebkitTextFillColor:"light"===t.palette.mode?null:"#fff",caretColor:"light"===t.palette.mode?null:"#fff",borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},t.vars&&(0,o.Z)({"&:-webkit-autofill":{borderTopLeftRadius:"inherit",borderTopRightRadius:"inherit"}},t.getColorSchemeSelector("dark"),{"&:-webkit-autofill":{WebkitBoxShadow:"0 0 0 100px #266798 inset",WebkitTextFillColor:"#fff",caretColor:"#fff"}}),"small"===n.size&&{paddingTop:21,paddingBottom:4},n.hiddenLabel&&{paddingTop:16,paddingBottom:17},n.multiline&&{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0},n.startAdornment&&{paddingLeft:0},n.endAdornment&&{paddingRight:0},n.hiddenLabel&&"small"===n.size&&{paddingTop:8,paddingBottom:9})})),Z=l.forwardRef((function(e,t){var n,o,r,l,d=(0,p.Z)({props:e,name:"MuiFilledInput"}),Z=d.components,g=void 0===Z?{}:Z,P=d.componentsProps,y=d.fullWidth,w=void 0!==y&&y,x=d.inputComponent,C=void 0===x?"input":x,S=d.multiline,R=void 0!==S&&S,M=d.slotProps,I=d.slots,F=void 0===I?{}:I,k=d.type,E=void 0===k?"text":k,O=(0,i.Z)(d,m),T=(0,a.Z)({},d,{fullWidth:w,inputComponent:C,multiline:R,type:E}),N=function(e){var t=e.classes,n={root:["root",!e.disableUnderline&&"underline"],input:["input"]},o=(0,u.Z)(n,v._,t);return(0,a.Z)({},t,o)}(d),j={root:{ownerState:T},input:{ownerState:T}},D=(null!=M?M:P)?(0,s.Z)(null!=M?M:P,j):j,B=null!=(n=null!=(o=F.root)?o:g.Root)?n:h,W=null!=(r=null!=(l=F.input)?l:g.Input)?r:b;return(0,f.jsx)(c.ZP,(0,a.Z)({slots:{root:B,input:W},componentsProps:D,fullWidth:w,inputComponent:C,multiline:R,ref:t,type:E},O,{classes:N}))}));Z.muiName="Input",t.Z=Z},79314:function(e,t,n){n.d(t,{_:function(){return l}});var o=n(32793),r=n(16625),i=n(19812),a=n(48914);function l(e){return(0,i.Z)("MuiFilledInput",e)}var s=(0,o.Z)({},a.Z,(0,r.Z)("MuiFilledInput",["root","underline","input"]));t.Z=s},90951:function(e,t,n){var o=n(36222),r=n(31303),i=n(1048),a=n(32793),l=n(88391),s=n(47792),u=n(92768),c=n(6408),d=n(34684),p=n(17344),v=n(20009),f=n(23712),m=["disableUnderline","components","componentsProps","fullWidth","inputComponent","multiline","slotProps","slots","type"],h=(0,d.ZP)(c.Ej,{shouldForwardProp:function(e){return(0,d.FO)(e)||"classes"===e},name:"MuiInput",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[].concat((0,r.Z)((0,c.Gx)(e,t)),[!n.disableUnderline&&t.underline])}})((function(e){var t,n=e.theme,r=e.ownerState,i="light"===n.palette.mode?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return n.vars&&(i="rgba(".concat(n.vars.palette.common.onBackgroundChannel," / ").concat(n.vars.opacity.inputUnderline,")")),(0,a.Z)({position:"relative"},r.formControl&&{"label + &":{marginTop:16}},!r.disableUnderline&&(t={"&:after":{borderBottom:"2px solid ".concat((n.vars||n).palette[r.color].main),left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:n.transitions.create("transform",{duration:n.transitions.duration.shorter,easing:n.transitions.easing.easeOut}),pointerEvents:"none"}},(0,o.Z)(t,"&.".concat(v.Z.focused,":after"),{transform:"scaleX(1) translateX(0)"}),(0,o.Z)(t,"&.".concat(v.Z.error),{"&:before, &:after":{borderBottomColor:(n.vars||n).palette.error.main}}),(0,o.Z)(t,"&:before",{borderBottom:"1px solid ".concat(i),left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:n.transitions.create("border-bottom-color",{duration:n.transitions.duration.shorter}),pointerEvents:"none"}),(0,o.Z)(t,"&:hover:not(.".concat(v.Z.disabled,", .").concat(v.Z.error,"):before"),{borderBottom:"2px solid ".concat((n.vars||n).palette.text.primary),"@media (hover: none)":{borderBottom:"1px solid ".concat(i)}}),(0,o.Z)(t,"&.".concat(v.Z.disabled,":before"),{borderBottomStyle:"dotted"}),t))})),b=(0,d.ZP)(c.rA,{name:"MuiInput",slot:"Input",overridesResolver:c._o})({}),Z=l.forwardRef((function(e,t){var n,o,r,l,d=(0,p.Z)({props:e,name:"MuiInput"}),Z=d.disableUnderline,g=d.components,P=void 0===g?{}:g,y=d.componentsProps,w=d.fullWidth,x=void 0!==w&&w,C=d.inputComponent,S=void 0===C?"input":C,R=d.multiline,M=void 0!==R&&R,I=d.slotProps,F=d.slots,k=void 0===F?{}:F,E=d.type,O=void 0===E?"text":E,T=(0,i.Z)(d,m),N=function(e){var t=e.classes,n={root:["root",!e.disableUnderline&&"underline"],input:["input"]},o=(0,s.Z)(n,v.l,t);return(0,a.Z)({},t,o)}(d),j={root:{ownerState:{disableUnderline:Z}}},D=(null!=I?I:y)?(0,u.Z)(null!=I?I:y,j):j,B=null!=(n=null!=(o=k.root)?o:P.Root)?n:h,W=null!=(r=null!=(l=k.input)?l:P.Input)?r:b;return(0,f.jsx)(c.ZP,(0,a.Z)({slots:{root:B,input:W},slotProps:D,fullWidth:x,inputComponent:S,multiline:M,ref:t,type:O},T,{classes:N}))}));Z.muiName="Input",t.Z=Z},20009:function(e,t,n){n.d(t,{l:function(){return l}});var o=n(32793),r=n(16625),i=n(19812),a=n(48914);function l(e){return(0,i.Z)("MuiInput",e)}var s=(0,o.Z)({},a.Z,(0,r.Z)("MuiInput",["root","underline","input"]));t.Z=s},85061:function(e,t,n){n.d(t,{Z:function(){return Oe}});var o=n(32793),r=n(1048),i=n(88391),a=n(29595),l=n(92768),s=n(50678),u=n(36222),c=n(73513),d=(n(94271),n(47792)),p=n(67513),v=n(78641),f=n(31417),m=n(88653).Z,h=n(65991),b=n(86899),Z=n(23712),g=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function P(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function y(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function w(e,t){if(void 0===t)return!0;var n=e.innerText;return void 0===n&&(n=e.textContent),0!==(n=n.trim().toLowerCase()).length&&(t.repeating?n[0]===t.keys[0]:0===n.indexOf(t.keys.join("")))}function x(e,t,n,o,r,i){for(var a=!1,l=r(e,t,!!t&&n);l;){if(l===e.firstChild){if(a)return!1;a=!0}var s=!o&&(l.disabled||"true"===l.getAttribute("aria-disabled"));if(l.hasAttribute("tabindex")&&w(l,i)&&!s)return l.focus(),!0;l=r(e,l,n)}return!1}var C=i.forwardRef((function(e,t){var n=e.actions,a=e.autoFocus,l=void 0!==a&&a,s=e.autoFocusItem,u=void 0!==s&&s,c=e.children,d=e.className,v=e.disabledItemsFocusable,C=void 0!==v&&v,S=e.disableListWrap,R=void 0!==S&&S,M=e.onKeyDown,I=e.variant,F=void 0===I?"selectedMenu":I,k=(0,r.Z)(e,g),E=i.useRef(null),O=i.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});(0,b.Z)((function(){l&&E.current.focus()}),[l]),i.useImperativeHandle(n,(function(){return{adjustStyleForScrollbar:function(e,t){var n=!E.current.style.width;if(e.clientHeight<E.current.clientHeight&&n){var o="".concat(m((0,p.Z)(e)),"px");E.current.style["rtl"===t.direction?"paddingLeft":"paddingRight"]=o,E.current.style.width="calc(100% + ".concat(o,")")}return E.current}}}),[]);var T=(0,h.Z)(E,t),N=-1;i.Children.forEach(c,(function(e,t){i.isValidElement(e)&&(e.props.disabled||("selectedMenu"===F&&e.props.selected||-1===N)&&(N=t),N===t&&(e.props.disabled||e.props.muiSkipListHighlight||e.type.muiSkipListHighlight)&&(N+=1)>=c.length&&(N=-1))}));var j=i.Children.map(c,(function(e,t){if(t===N){var n={};return u&&(n.autoFocus=!0),void 0===e.props.tabIndex&&"selectedMenu"===F&&(n.tabIndex=0),i.cloneElement(e,n)}return e}));return(0,Z.jsx)(f.Z,(0,o.Z)({role:"menu",ref:T,className:d,onKeyDown:function(e){var t=E.current,n=e.key,o=(0,p.Z)(t).activeElement;if("ArrowDown"===n)e.preventDefault(),x(t,o,R,C,P);else if("ArrowUp"===n)e.preventDefault(),x(t,o,R,C,y);else if("Home"===n)e.preventDefault(),x(t,null,R,C,P);else if("End"===n)e.preventDefault(),x(t,null,R,C,y);else if(1===n.length){var r=O.current,i=n.toLowerCase(),a=performance.now();r.keys.length>0&&(a-r.lastTime>500?(r.keys=[],r.repeating=!0,r.previousKeyMatched=!0):r.repeating&&i!==r.keys[0]&&(r.repeating=!1)),r.lastTime=a,r.keys.push(i);var l=o&&!r.repeating&&w(o,r);r.previousKeyMatched&&(l||x(t,o,!1,C,P,r))?e.preventDefault():r.previousKeyMatched=!1}M&&M(e)},tabIndex:l?0:-1},k,{children:j}))})),S=n(47089),R=n(34684),M=n(17344),I=n(96187),F=n(52827),k=n(74853),E=n(71626),O=n(16625),T=n(19812);function N(e){return(0,T.Z)("MuiPopover",e)}(0,O.Z)("MuiPopover",["root","paper"]);var j=["onEntering"],D=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"];function B(e,t){var n=0;return"number"===typeof t?n=t:"center"===t?n=e.height/2:"bottom"===t&&(n=e.height),n}function W(e,t){var n=0;return"number"===typeof t?n=t:"center"===t?n=e.width/2:"right"===t&&(n=e.width),n}function L(e){return[e.horizontal,e.vertical].map((function(e){return"number"===typeof e?"".concat(e,"px"):e})).join(" ")}function A(e){return"function"===typeof e?e():e}var z=(0,R.ZP)(E.Z,{name:"MuiPopover",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),U=(0,R.ZP)(S.Z,{name:"MuiPopover",slot:"Paper",overridesResolver:function(e,t){return t.paper}})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),H=i.forwardRef((function(e,t){var n=(0,M.Z)({props:e,name:"MuiPopover"}),l=n.action,u=n.anchorEl,c=n.anchorOrigin,v=void 0===c?{vertical:"top",horizontal:"left"}:c,f=n.anchorPosition,m=n.anchorReference,b=void 0===m?"anchorEl":m,g=n.children,P=n.className,y=n.container,w=n.elevation,x=void 0===w?8:w,C=n.marginThreshold,S=void 0===C?16:C,R=n.open,E=n.PaperProps,O=void 0===E?{}:E,T=n.transformOrigin,H=void 0===T?{vertical:"top",horizontal:"left"}:T,K=n.TransitionComponent,V=void 0===K?k.Z:K,_=n.transitionDuration,X=void 0===_?"auto":_,G=n.TransitionProps,Y=(void 0===G?{}:G).onEntering,q=(0,r.Z)(n.TransitionProps,j),J=(0,r.Z)(n,D),Q=i.useRef(),$=(0,h.Z)(Q,O.ref),ee=(0,o.Z)({},n,{anchorOrigin:v,anchorReference:b,elevation:x,marginThreshold:S,PaperProps:O,transformOrigin:H,TransitionComponent:V,transitionDuration:X,TransitionProps:q}),te=function(e){var t=e.classes;return(0,d.Z)({root:["root"],paper:["paper"]},N,t)}(ee),ne=i.useCallback((function(){if("anchorPosition"===b)return f;var e=A(u),t=(e&&1===e.nodeType?e:(0,p.Z)(Q.current).body).getBoundingClientRect();return{top:t.top+B(t,v.vertical),left:t.left+W(t,v.horizontal)}}),[u,v.horizontal,v.vertical,f,b]),oe=i.useCallback((function(e){return{vertical:B(e,H.vertical),horizontal:W(e,H.horizontal)}}),[H.horizontal,H.vertical]),re=i.useCallback((function(e){var t={width:e.offsetWidth,height:e.offsetHeight},n=oe(t);if("none"===b)return{top:null,left:null,transformOrigin:L(n)};var o=ne(),r=o.top-n.vertical,i=o.left-n.horizontal,a=r+t.height,l=i+t.width,s=(0,F.Z)(A(u)),c=s.innerHeight-S,d=s.innerWidth-S;if(r<S){var p=r-S;r-=p,n.vertical+=p}else if(a>c){var v=a-c;r-=v,n.vertical+=v}if(i<S){var f=i-S;i-=f,n.horizontal+=f}else if(l>d){var m=l-d;i-=m,n.horizontal+=m}return{top:"".concat(Math.round(r),"px"),left:"".concat(Math.round(i),"px"),transformOrigin:L(n)}}),[u,b,ne,oe,S]),ie=i.useState(R),ae=(0,s.Z)(ie,2),le=ae[0],se=ae[1],ue=i.useCallback((function(){var e=Q.current;if(e){var t=re(e);null!==t.top&&(e.style.top=t.top),null!==t.left&&(e.style.left=t.left),e.style.transformOrigin=t.transformOrigin,se(!0)}}),[re]);i.useEffect((function(){R&&ue()})),i.useImperativeHandle(l,(function(){return R?{updatePosition:function(){ue()}}:null}),[R,ue]),i.useEffect((function(){if(R){var e=(0,I.Z)((function(){ue()})),t=(0,F.Z)(u);return t.addEventListener("resize",e),function(){e.clear(),t.removeEventListener("resize",e)}}}),[u,R,ue]);var ce=X;"auto"!==X||V.muiSupportAuto||(ce=void 0);var de=y||(u?(0,p.Z)(A(u)).body:void 0);return(0,Z.jsx)(z,(0,o.Z)({BackdropProps:{invisible:!0},className:(0,a.Z)(te.root,P),container:de,open:R,ref:t,ownerState:ee},J,{children:(0,Z.jsx)(V,(0,o.Z)({appear:!0,in:R,onEntering:function(e,t){Y&&Y(e,t),ue()},onExited:function(){se(!1)},timeout:ce},q,{children:(0,Z.jsx)(U,(0,o.Z)({elevation:x},O,{ref:$,className:(0,a.Z)(te.paper,O.className)},le?void 0:{style:(0,o.Z)({},O.style,{opacity:0})},{ownerState:ee,children:g}))}))}))})),K=n(83182);function V(e){return(0,T.Z)("MuiMenu",e)}(0,O.Z)("MuiMenu",["root","paper","list"]);var _=["onEntering"],X=["autoFocus","children","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant"],G={vertical:"top",horizontal:"right"},Y={vertical:"top",horizontal:"left"},q=(0,R.ZP)(H,{shouldForwardProp:function(e){return(0,R.FO)(e)||"classes"===e},name:"MuiMenu",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),J=(0,R.ZP)(S.Z,{name:"MuiMenu",slot:"Paper",overridesResolver:function(e,t){return t.paper}})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),Q=(0,R.ZP)(C,{name:"MuiMenu",slot:"List",overridesResolver:function(e,t){return t.list}})({outline:0}),$=i.forwardRef((function(e,t){var n=(0,M.Z)({props:e,name:"MuiMenu"}),l=n.autoFocus,s=void 0===l||l,u=n.children,c=n.disableAutoFocusItem,p=void 0!==c&&c,v=n.MenuListProps,f=void 0===v?{}:v,m=n.onClose,h=n.open,b=n.PaperProps,g=void 0===b?{}:b,P=n.PopoverClasses,y=n.transitionDuration,w=void 0===y?"auto":y,x=n.TransitionProps,C=(void 0===x?{}:x).onEntering,S=n.variant,R=void 0===S?"selectedMenu":S,I=(0,r.Z)(n.TransitionProps,_),F=(0,r.Z)(n,X),k=(0,K.Z)(),E="rtl"===k.direction,O=(0,o.Z)({},n,{autoFocus:s,disableAutoFocusItem:p,MenuListProps:f,onEntering:C,PaperProps:g,transitionDuration:w,TransitionProps:I,variant:R}),T=function(e){var t=e.classes;return(0,d.Z)({root:["root"],paper:["paper"],list:["list"]},V,t)}(O),N=s&&!p&&h,j=i.useRef(null),D=-1;return i.Children.map(u,(function(e,t){i.isValidElement(e)&&(e.props.disabled||("selectedMenu"===R&&e.props.selected||-1===D)&&(D=t))})),(0,Z.jsx)(q,(0,o.Z)({onClose:m,anchorOrigin:{vertical:"bottom",horizontal:E?"right":"left"},transformOrigin:E?G:Y,PaperProps:(0,o.Z)({as:J},g,{classes:(0,o.Z)({},g.classes,{root:T.paper})}),className:T.root,open:h,ref:t,transitionDuration:w,TransitionProps:(0,o.Z)({onEntering:function(e,t){j.current&&j.current.adjustStyleForScrollbar(e,k),C&&C(e,t)}},I),ownerState:O},F,{classes:P,children:(0,Z.jsx)(Q,(0,o.Z)({onKeyDown:function(e){"Tab"===e.key&&(e.preventDefault(),m&&m(e,"tabKeyDown"))},actions:j,autoFocus:s&&(-1===D||p),autoFocusItem:N,variant:R},f,{className:(0,a.Z)(T.list,f.className),children:u}))}))}));function ee(e){return(0,T.Z)("MuiNativeSelect",e)}var te=(0,O.Z)("MuiNativeSelect",["root","select","multiple","filled","outlined","standard","disabled","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),ne=["className","disabled","error","IconComponent","inputRef","variant"],oe=function(e){var t,n=e.ownerState,r=e.theme;return(0,o.Z)((t={MozAppearance:"none",WebkitAppearance:"none",userSelect:"none",borderRadius:0,cursor:"pointer","&:focus":(0,o.Z)({},r.vars?{backgroundColor:"rgba(".concat(r.vars.palette.common.onBackgroundChannel," / 0.05)")}:{backgroundColor:"light"===r.palette.mode?"rgba(0, 0, 0, 0.05)":"rgba(255, 255, 255, 0.05)"},{borderRadius:0}),"&::-ms-expand":{display:"none"}},(0,u.Z)(t,"&.".concat(te.disabled),{cursor:"default"}),(0,u.Z)(t,"&[multiple]",{height:"auto"}),(0,u.Z)(t,"&:not([multiple]) option, &:not([multiple]) optgroup",{backgroundColor:(r.vars||r).palette.background.paper}),(0,u.Z)(t,"&&&",{paddingRight:24,minWidth:16}),t),"filled"===n.variant&&{"&&&":{paddingRight:32}},"outlined"===n.variant&&{borderRadius:(r.vars||r).shape.borderRadius,"&:focus":{borderRadius:(r.vars||r).shape.borderRadius},"&&&":{paddingRight:32}})},re=(0,R.ZP)("select",{name:"MuiNativeSelect",slot:"Select",shouldForwardProp:R.FO,overridesResolver:function(e,t){var n=e.ownerState;return[t.select,t[n.variant],n.error&&t.error,(0,u.Z)({},"&.".concat(te.multiple),t.multiple)]}})(oe),ie=function(e){var t=e.ownerState,n=e.theme;return(0,o.Z)((0,u.Z)({position:"absolute",right:0,top:"calc(50% - .5em)",pointerEvents:"none",color:(n.vars||n).palette.action.active},"&.".concat(te.disabled),{color:(n.vars||n).palette.action.disabled}),t.open&&{transform:"rotate(180deg)"},"filled"===t.variant&&{right:7},"outlined"===t.variant&&{right:7})},ae=(0,R.ZP)("svg",{name:"MuiNativeSelect",slot:"Icon",overridesResolver:function(e,t){var n=e.ownerState;return[t.icon,n.variant&&t["icon".concat((0,v.Z)(n.variant))],n.open&&t.iconOpen]}})(ie),le=i.forwardRef((function(e,t){var n=e.className,l=e.disabled,s=e.error,u=e.IconComponent,c=e.inputRef,p=e.variant,f=void 0===p?"standard":p,m=(0,r.Z)(e,ne),h=(0,o.Z)({},e,{disabled:l,variant:f,error:s}),b=function(e){var t=e.classes,n=e.variant,o=e.disabled,r=e.multiple,i=e.open,a={select:["select",n,o&&"disabled",r&&"multiple",e.error&&"error"],icon:["icon","icon".concat((0,v.Z)(n)),i&&"iconOpen",o&&"disabled"]};return(0,d.Z)(a,ee,t)}(h);return(0,Z.jsxs)(i.Fragment,{children:[(0,Z.jsx)(re,(0,o.Z)({ownerState:h,className:(0,a.Z)(b.select,n),disabled:l,ref:c||t},m)),e.multiple?null:(0,Z.jsx)(ae,{as:u,ownerState:h,className:b.icon})]})})),se=n(94932),ue=n(58862);function ce(e){return(0,T.Z)("MuiSelect",e)}var de,pe=(0,O.Z)("MuiSelect",["select","multiple","filled","outlined","standard","disabled","focused","icon","iconOpen","iconFilled","iconOutlined","iconStandard","nativeInput","error"]),ve=["aria-describedby","aria-label","autoFocus","autoWidth","children","className","defaultOpen","defaultValue","disabled","displayEmpty","error","IconComponent","inputRef","labelId","MenuProps","multiple","name","onBlur","onChange","onClose","onFocus","onOpen","open","readOnly","renderValue","SelectDisplayProps","tabIndex","type","value","variant"],fe=(0,R.ZP)("div",{name:"MuiSelect",slot:"Select",overridesResolver:function(e,t){var n=e.ownerState;return[(0,u.Z)({},"&.".concat(pe.select),t.select),(0,u.Z)({},"&.".concat(pe.select),t[n.variant]),(0,u.Z)({},"&.".concat(pe.error),t.error),(0,u.Z)({},"&.".concat(pe.multiple),t.multiple)]}})(oe,(0,u.Z)({},"&.".concat(pe.select),{height:"auto",minHeight:"1.4375em",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"})),me=(0,R.ZP)("svg",{name:"MuiSelect",slot:"Icon",overridesResolver:function(e,t){var n=e.ownerState;return[t.icon,n.variant&&t["icon".concat((0,v.Z)(n.variant))],n.open&&t.iconOpen]}})(ie),he=(0,R.ZP)("input",{shouldForwardProp:function(e){return(0,R.Dz)(e)&&"classes"!==e},name:"MuiSelect",slot:"NativeInput",overridesResolver:function(e,t){return t.nativeInput}})({bottom:0,left:0,position:"absolute",opacity:0,pointerEvents:"none",width:"100%",boxSizing:"border-box"});function be(e,t){return"object"===typeof t&&null!==t?e===t:String(e)===String(t)}function Ze(e){return null==e||"string"===typeof e&&!e.trim()}var ge=i.forwardRef((function(e,t){var n=e["aria-describedby"],l=e["aria-label"],u=e.autoFocus,f=e.autoWidth,m=e.children,b=e.className,g=e.defaultOpen,P=e.defaultValue,y=e.disabled,w=e.displayEmpty,x=e.error,C=void 0!==x&&x,S=e.IconComponent,R=e.inputRef,M=e.labelId,I=e.MenuProps,F=void 0===I?{}:I,k=e.multiple,E=e.name,O=e.onBlur,T=e.onChange,N=e.onClose,j=e.onFocus,D=e.onOpen,B=e.open,W=e.readOnly,L=e.renderValue,A=e.SelectDisplayProps,z=void 0===A?{}:A,U=e.tabIndex,H=e.value,K=e.variant,V=void 0===K?"standard":K,_=(0,r.Z)(e,ve),X=(0,ue.Z)({controlled:H,default:P,name:"Select"}),G=(0,s.Z)(X,2),Y=G[0],q=G[1],J=(0,ue.Z)({controlled:B,default:g,name:"Select"}),Q=(0,s.Z)(J,2),ee=Q[0],te=Q[1],ne=i.useRef(null),oe=i.useRef(null),re=i.useState(null),ie=(0,s.Z)(re,2),ae=ie[0],le=ie[1],pe=i.useRef(null!=B).current,ge=i.useState(),Pe=(0,s.Z)(ge,2),ye=Pe[0],we=Pe[1],xe=(0,h.Z)(t,R),Ce=i.useCallback((function(e){oe.current=e,e&&le(e)}),[]),Se=null==ae?void 0:ae.parentNode;i.useImperativeHandle(xe,(function(){return{focus:function(){oe.current.focus()},node:ne.current,value:Y}}),[Y]),i.useEffect((function(){g&&ee&&ae&&!pe&&(we(f?null:Se.clientWidth),oe.current.focus())}),[ae,f]),i.useEffect((function(){u&&oe.current.focus()}),[u]),i.useEffect((function(){if(M){var e=(0,p.Z)(oe.current).getElementById(M);if(e){var t=function(){getSelection().isCollapsed&&oe.current.focus()};return e.addEventListener("click",t),function(){e.removeEventListener("click",t)}}}}),[M]);var Re,Me,Ie=function(e,t){e?D&&D(t):N&&N(t),pe||(we(f?null:Se.clientWidth),te(e))},Fe=i.Children.toArray(m),ke=function(e){return function(t){var n;if(t.currentTarget.hasAttribute("tabindex")){if(k){n=Array.isArray(Y)?Y.slice():[];var o=Y.indexOf(e.props.value);-1===o?n.push(e.props.value):n.splice(o,1)}else n=e.props.value;if(e.props.onClick&&e.props.onClick(t),Y!==n&&(q(n),T)){var r=t.nativeEvent||t,i=new r.constructor(r.type,r);Object.defineProperty(i,"target",{writable:!0,value:{value:n,name:E}}),T(i,e)}k||Ie(!1,t)}}},Ee=null!==ae&&ee;delete _["aria-invalid"];var Oe=[],Te=!1;((0,se.vd)({value:Y})||w)&&(L?Re=L(Y):Te=!0);var Ne=Fe.map((function(e){if(!i.isValidElement(e))return null;var t;if(k){if(!Array.isArray(Y))throw new Error((0,c.Z)(2));(t=Y.some((function(t){return be(t,e.props.value)})))&&Te&&Oe.push(e.props.children)}else(t=be(Y,e.props.value))&&Te&&(Me=e.props.children);return t&&!0,i.cloneElement(e,{"aria-selected":t?"true":"false",onClick:ke(e),onKeyUp:function(t){" "===t.key&&t.preventDefault(),e.props.onKeyUp&&e.props.onKeyUp(t)},role:"option",selected:t,value:void 0,"data-value":e.props.value})}));Te&&(Re=k?0===Oe.length?null:Oe.reduce((function(e,t,n){return e.push(t),n<Oe.length-1&&e.push(", "),e}),[]):Me);var je,De=ye;!f&&pe&&ae&&(De=Se.clientWidth),je="undefined"!==typeof U?U:y?null:0;var Be=z.id||(E?"mui-component-select-".concat(E):void 0),We=(0,o.Z)({},e,{variant:V,value:Y,open:Ee,error:C}),Le=function(e){var t=e.classes,n=e.variant,o=e.disabled,r=e.multiple,i=e.open,a={select:["select",n,o&&"disabled",r&&"multiple",e.error&&"error"],icon:["icon","icon".concat((0,v.Z)(n)),i&&"iconOpen",o&&"disabled"],nativeInput:["nativeInput"]};return(0,d.Z)(a,ce,t)}(We);return(0,Z.jsxs)(i.Fragment,{children:[(0,Z.jsx)(fe,(0,o.Z)({ref:Ce,tabIndex:je,role:"button","aria-disabled":y?"true":void 0,"aria-expanded":Ee?"true":"false","aria-haspopup":"listbox","aria-label":l,"aria-labelledby":[M,Be].filter(Boolean).join(" ")||void 0,"aria-describedby":n,onKeyDown:function(e){if(!W){-1!==[" ","ArrowUp","ArrowDown","Enter"].indexOf(e.key)&&(e.preventDefault(),Ie(!0,e))}},onMouseDown:y||W?null:function(e){0===e.button&&(e.preventDefault(),oe.current.focus(),Ie(!0,e))},onBlur:function(e){!Ee&&O&&(Object.defineProperty(e,"target",{writable:!0,value:{value:Y,name:E}}),O(e))},onFocus:j},z,{ownerState:We,className:(0,a.Z)(z.className,Le.select,b),id:Be,children:Ze(Re)?de||(de=(0,Z.jsx)("span",{className:"notranslate",children:"\u200b"})):Re})),(0,Z.jsx)(he,(0,o.Z)({"aria-invalid":C,value:Array.isArray(Y)?Y.join(","):Y,name:E,ref:ne,"aria-hidden":!0,onChange:function(e){var t=Fe.map((function(e){return e.props.value})).indexOf(e.target.value);if(-1!==t){var n=Fe[t];q(n.props.value),T&&T(e,n)}},tabIndex:-1,disabled:y,className:Le.nativeInput,autoFocus:u,ownerState:We},_)),(0,Z.jsx)(me,{as:S,className:Le.icon,ownerState:We}),(0,Z.jsx)($,(0,o.Z)({id:"menu-".concat(E||""),anchorEl:Se,open:Ee,onClose:function(e){Ie(!1,e)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},F,{MenuListProps:(0,o.Z)({"aria-labelledby":M,role:"listbox",disableListWrap:!0},F.MenuListProps),PaperProps:(0,o.Z)({},F.PaperProps,{style:(0,o.Z)({minWidth:De},null!=F.PaperProps?F.PaperProps.style:null)}),children:Ne}))]})})),Pe=n(21990),ye=n(70831),we=n(33076),xe=n(90951),Ce=n(19316),Se=n(62739),Re=["autoWidth","children","classes","className","defaultOpen","displayEmpty","IconComponent","id","input","inputProps","label","labelId","MenuProps","multiple","native","onClose","onOpen","open","renderValue","SelectDisplayProps","variant"],Me={name:"MuiSelect",overridesResolver:function(e,t){return t.root},shouldForwardProp:function(e){return(0,R.FO)(e)&&"variant"!==e},slot:"Root"},Ie=(0,R.ZP)(xe.Z,Me)(""),Fe=(0,R.ZP)(Se.Z,Me)(""),ke=(0,R.ZP)(Ce.Z,Me)(""),Ee=i.forwardRef((function(e,t){var n=(0,M.Z)({name:"MuiSelect",props:e}),s=n.autoWidth,u=void 0!==s&&s,c=n.children,d=n.classes,p=void 0===d?{}:d,v=n.className,f=n.defaultOpen,m=void 0!==f&&f,b=n.displayEmpty,g=void 0!==b&&b,P=n.IconComponent,y=void 0===P?we.Z:P,w=n.id,x=n.input,C=n.inputProps,S=n.label,R=n.labelId,I=n.MenuProps,F=n.multiple,k=void 0!==F&&F,E=n.native,O=void 0!==E&&E,T=n.onClose,N=n.onOpen,j=n.open,D=n.renderValue,B=n.SelectDisplayProps,W=n.variant,L=void 0===W?"outlined":W,A=(0,r.Z)(n,Re),z=O?le:ge,U=(0,ye.Z)(),H=(0,Pe.Z)({props:n,muiFormControl:U,states:["variant","error"]}),K=H.variant||L,V=(0,o.Z)({},n,{variant:K,classes:p}),_=function(e){return e.classes}(V),X=x||{standard:(0,Z.jsx)(Ie,{ownerState:V}),outlined:(0,Z.jsx)(Fe,{label:S,ownerState:V}),filled:(0,Z.jsx)(ke,{ownerState:V})}[K],G=(0,h.Z)(t,X.ref);return(0,Z.jsx)(i.Fragment,{children:i.cloneElement(X,(0,o.Z)({inputComponent:z,inputProps:(0,o.Z)({children:c,error:H.error,IconComponent:y,variant:K,type:void 0,multiple:k},O?{id:w}:{autoWidth:u,defaultOpen:m,displayEmpty:g,labelId:R,MenuProps:I,onClose:T,onOpen:N,open:j,renderValue:D,SelectDisplayProps:(0,o.Z)({id:w},B)},C,{classes:C?(0,l.Z)(_,C.classes):_},x?x.props.inputProps:{})},k&&O&&"outlined"===K?{notched:!0}:{},{ref:G,className:(0,a.Z)(X.props.className,v)},!x&&{variant:K},A))})}));Ee.muiName="Select";var Oe=Ee},33076:function(e,t,n){n(88391);var o=n(75918),r=n(23712);t.Z=(0,o.Z)((0,r.jsx)("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown")}}]);