"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4816],{84816:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var i=s(72791),a=s(79200),r=s(70188),u=s(2703),h=s(80184);class c extends i.Component{constructor(){super(...arguments),this.imageQueue=[],this.state={firstRequest:!1},this.handleImageError=e=>{const t=e.target.getAttribute("data-id");this.imageQueue.includes(t)||(this.imageQueue.push(t),this.state.firstRequest||this.processImageQueue())},this.processImageQueue=async()=>{this.setState({firstRequest:!0});const e=this.imageQueue[0],t=document.getElementsByClassName("imgID".concat(e));e&&(0,u.mg)(e).then((e=>{let{data:s}=e;if((0,a.mi)(),this.imageQueue.shift(),t)for(let i=0;i<t.length;i++)t[i].src=s.media;this.processImageQueue()})).catch((e=>{if(this.imageQueue.shift(),t)for(let s=0;s<t.length;s++)t[s].src=r.V4;this.processImageQueue()}))}}render(){const{postData:e,completeDataObject:t}=this.props;return e?e.map(((e,s)=>{const i=t[e];return 28==i.network.id?(0,h.jsx)("img",{className:"","data-id":i.id,src:i.postFileNew,onError:this.handleImageError,style:{display:"none"},alt:(0,u.P)(i.postFileNew)},s):""})):""}}}}]);
//# sourceMappingURL=4816.7cf2d2dc.chunk.js.map