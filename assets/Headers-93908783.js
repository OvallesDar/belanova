import{o as m,s as x,j as r,C as h,G as n,T as i,t as y,L as g}from"./index-aeaccf77.js";var c={exports:{}},f="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",b=f,T=b;function l(){}function u(){}u.resetWarningCache=l;var j=function(){function e(s,S,k,P,_,d){if(d!==T){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}e.isRequired=e;function t(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:l};return o.PropTypes=o,o};c.exports=j();var v=c.exports;const p=m(v);function R({left:e=Boolean,data:t}){const o=x("section")(({theme:s})=>({paddingTop:"100px",display:"flex",alignItems:"center",minHeight:"calc(100vh - 100px)",backgroundImage:`url(${t.image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"relative",[s.breakpoints.up("lg")]:{backgroundAttachment:"fixed"},"&:before":{content:'""',position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"#000000a0"}}));return r.jsx(o,{id:"header",children:r.jsx(h,{maxWidth:"lg",sx:{zIndex:1},children:r.jsx(n,{container:!0,justifyContent:e?"start":"end",direction:"row",spacing:0,children:r.jsx(n,{item:!0,xs:12,lg:6,alignSelf:"center",textAlign:{xs:"center",lg:"justify"},children:r.jsxs(n,{container:!0,color:"primary.contrastText",direction:"column",spacing:3,children:[r.jsx(n,{item:!0,xs:!0,children:r.jsx(i,{variant:"h1",sx:{fontSize:{xs:"2em",lg:"2.5em"}},children:t.title})}),r.jsxs(n,{item:!0,xs:!0,children:[r.jsx(i,{variant:"h3",sx:{fontSize:{xs:"1em",lg:"1.5em"}},children:t.subtitle}),r.jsx("br",{}),r.jsx(i,{variant:"body3",sx:{fontSize:{xs:"0.9em",lg:"1.4em"}},children:t.subtitle1})]}),r.jsx(n,{item:!0,xs:!0,children:r.jsx(y,{component:g,to:t.link,variant:"contained",color:"secondary",size:"medium",sx:{paddingY:"0.6em"},children:t.button})})]})})})})})}R.propTypes={left:p.bool.isRequired,data:p.object.isRequired};export{R as H,p as P};
