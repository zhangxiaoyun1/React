(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},24:function(e,t,a){e.exports=a(34)},34:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(21),l=a.n(r),o=a(2),i=a(3),s=a(5),m=a(4),p=a(6),u=(a(15),a(1));function h(){return c.a.createElement("div",{className:"header"},c.a.createElement("header",null,c.a.createElement("img",{src:"https://static2.cnodejs.org/public/images/cnodejs_light.svg"}),c.a.createElement("div",{style:{float:"right"}},c.a.createElement(u.b,{to:"/home"},"\u9996\u9875"),c.a.createElement(u.b,{to:"/start"},"\u65b0\u624b\u5165\u95e8"),c.a.createElement(u.b,{to:"/api"},"API"),c.a.createElement(u.b,{to:"/about"},"\u5173\u4e8e"),c.a.createElement(u.b,{to:"/login"},"\u767b\u5f55"))))}var d=a(11),E=(a(13),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={data:[]},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://cnodejs.org/api/v1/topics?tab=all&page=".concat(this.props.match.params.page||1);fetch(t,{method:"get"}).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(this.props.match.params.page!==e.match.params.page){var n="https://cnodejs.org/api/v1/topics?tab=all&page=".concat(this.props.match.params.page||1);fetch(n,{method:"get"}).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({data:e.data})}))}}},{key:"render",value:function(){var e=this.props.match.url.slice(0,5);return c.a.createElement("div",null,c.a.createElement("ul",null,this.state.data.map((function(t,a){return c.a.createElement("li",{key:a},c.a.createElement("img",{src:t.author.avatar_url}),c.a.createElement("div",{style:{display:"inline-block",textAlign:"center",width:"80px"}},c.a.createElement("span",null,t.reply_count,"/"),c.a.createElement("span",{style:{fontSize:"10px",marginRight:"10px"}},t.visit_count)),c.a.createElement("div",{className:"top"},"\u7f6e\u9876"),c.a.createElement("span",{style:{fontSize:"10px",marginRight:"10px",float:"right"}},"\u4e09\u5929\u524d"),c.a.createElement(u.b,{className:"jump",to:"".concat(e,"/content/").concat(t.id)},t.title))}))),c.a.createElement("div",null,c.a.createElement("ul",{className:"bot"},c.a.createElement("li",null,"<<"),[1,2,3,4,5,6,7,8,9,10].map((function(t,a){return c.a.createElement("li",{key:a},c.a.createElement(u.b,{to:"".concat(e,"/all/").concat(t)},t))})),c.a.createElement("li",null,">>"))))}}]),t}(n.Component)),b=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={data:[]},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://cnodejs.org/api/v1/topics?tab=good&page=".concat(this.props.match.params.page||1);fetch(t,{method:"get"}).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(this.props.match.params.page!==e.match.params.page){var n="https://cnodejs.org/api/v1/topics?tab=good&page=".concat(this.props.match.params.page||1);fetch(n,{method:"get"}).then((function(e){return e.json()})).then((function(e){a.setState({data:e.data})}))}}},{key:"render",value:function(){var e=this.props.match.url;console.log(e);var t=e.slice(0,5);return c.a.createElement("div",null,c.a.createElement("ul",null,this.state.data.map((function(e,a){return c.a.createElement("li",{key:a},c.a.createElement("img",{src:e.author.avatar_url}),c.a.createElement("div",{style:{display:"inline-block",textAlign:"center",width:"80px"}},c.a.createElement("span",null,e.reply_count,"/"),c.a.createElement("span",{style:{fontSize:"10px",marginRight:"10px"}},e.visit_count)),c.a.createElement("div",{className:"top"},"\u7f6e\u9876"),c.a.createElement("span",{style:{fontSize:"10px",marginRight:"10px",float:"right"}},"\u4e09\u5929\u524d"),c.a.createElement(u.b,{className:"jump",to:"".concat(t,"/content/").concat(e.id)},e.title))}))),c.a.createElement("div",null,c.a.createElement("ul",{className:"bot"},c.a.createElement("li",null,"<<"),[1,2,3,4,5,6,7,8,9,10].map((function(e,a){return c.a.createElement("li",{key:a},c.a.createElement(u.b,{to:"".concat(t,"/good/").concat(e)},e))})),c.a.createElement("li",null,">>"))))}}]),t}(n.Component),g=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={data:[]},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://cnodejs.org/api/v1/topics?tab=share&page=".concat(this.props.match.params.page||1);fetch(t,{method:"get"}).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(console.log(this.props.match),this.props.match.params.page!==e.match.params.page){var n="https://cnodejs.org/api/v1/topics?tab=share&page=".concat(this.props.match.params.page||1);fetch(n,{method:"get"}).then((function(e){return e.json()})).then((function(e){a.setState({data:e.data})}))}}},{key:"render",value:function(){var e=this.props.match.url.slice(0,5);return c.a.createElement("div",null,c.a.createElement("ul",null,this.state.data.map((function(t,a){return c.a.createElement("li",{key:a},c.a.createElement("img",{src:t.author.avatar_url}),c.a.createElement("div",{style:{display:"inline-block",textAlign:"center",width:"80px"}},c.a.createElement("span",null,t.reply_count,"/"),c.a.createElement("span",{style:{fontSize:"10px",marginRight:"10px"}},t.visit_count)),c.a.createElement("div",{className:"top"},"\u7f6e\u9876"),c.a.createElement("span",{style:{fontSize:"10px",marginRight:"10px",float:"right"}},"\u4e09\u5929\u524d"),c.a.createElement(u.b,{className:"jump",to:"".concat(e,"/content/").concat(t.id)},t.title))}))),c.a.createElement("div",null,c.a.createElement("ul",{className:"bot"},c.a.createElement("li",null,"<<"),[1,2,3,4,5,6,7,8,9,10].map((function(t,a){return c.a.createElement("li",{key:a},c.a.createElement(u.b,{to:"".concat(e,"/share/").concat(t)},t))})),c.a.createElement("li",null,">>"))))}}]),t}(n.Component),f=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={data:[]},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://cnodejs.org/api/v1/topics?tab=ask&page=".concat(this.props.match.params.page||1);fetch(t,{method:"get"}).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(this.props.match.params.page!==e.match.params.page){var n="https://cnodejs.org/api/v1/topics?tab=ask&page=".concat(this.props.match.params.page||1);fetch(n,{method:"get"}).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({data:e.data})}))}}},{key:"render",value:function(){var e=this.props.match.url.slice(0,5);return c.a.createElement("div",null,c.a.createElement("ul",null,this.state.data.map((function(t,a){return c.a.createElement("li",{key:a},c.a.createElement("img",{src:t.author.avatar_url}),c.a.createElement("div",{style:{display:"inline-block",textAlign:"center",width:"80px"}},c.a.createElement("span",null,t.reply_count,"/"),c.a.createElement("span",{style:{fontSize:"10px",marginRight:"10px"}},t.visit_count)),c.a.createElement("div",{className:"top"},"\u7f6e\u9876"),c.a.createElement("span",{style:{fontSize:"10px",marginRight:"10px",float:"right"}},"\u4e09\u5929\u524d"),c.a.createElement(u.b,{className:"jump",to:"".concat(e,"/content/").concat(t.id)},t.title))}))),c.a.createElement("div",null,c.a.createElement("ul",{className:"bot"},c.a.createElement("li",null,"<<"),[1,2,3,4,5,6,7,8,9,10].map((function(t,a){return c.a.createElement("li",{key:a},c.a.createElement(u.b,{to:"".concat(e,"/ask/").concat(t)},t))})),c.a.createElement("li",null,">>"))))}}]),t}(n.Component),v=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={data:[]},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://cnodejs.org/api/v1/topics?tab=job&page=".concat(this.props.match.params.page||1);fetch(t,{method:"get"}).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(this.props.match.params.page!==e.match.params.page){var n="https://cnodejs.org/api/v1/topics?tab=job&page=".concat(this.props.match.params.page||1);fetch(n,{method:"get"}).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({data:e.data})}))}}},{key:"render",value:function(){var e=this.props.match.url.slice(0,5);return c.a.createElement("div",null,c.a.createElement("ul",null,this.state.data.map((function(t,a){return c.a.createElement("li",{key:a},c.a.createElement("img",{src:t.author.avatar_url}),c.a.createElement("div",{style:{display:"inline-block",textAlign:"center",width:"80px"}},c.a.createElement("span",null,t.reply_count,"/"),c.a.createElement("span",{style:{fontSize:"10px",marginRight:"10px"}},t.visit_count)),c.a.createElement("div",{className:"top"},"\u7f6e\u9876"),c.a.createElement("span",{style:{fontSize:"10px",marginRight:"10px",float:"right"}},"\u4e09\u5929\u524d"),c.a.createElement(u.b,{className:"jump",to:"".concat(e,"/content/").concat(t.id)},t.title))}))),c.a.createElement("div",null,c.a.createElement("ul",{className:"bot"},c.a.createElement("li",null,"<<"),[1,2,3,4,5,6,7,8,9,10].map((function(t,a){return c.a.createElement("li",{key:a},c.a.createElement(u.b,{to:"".concat(e,"/job/").concat(t)},t))})),c.a.createElement("li",null,">>"))))}}]),t}(n.Component),j=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={data:[]},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://cnodejs.org/api/v1/topic/".concat(this.props.match.params.id);fetch(t,{method:"get"}).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data})}))}},{key:"render",value:function(){return c.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.data.content}})}}]),t}(n.Component),y=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={data:[]},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://cnodejs.org/api/v1/topics?tab=dev&page=".concat(this.props.match.params.page||1);fetch(t,{method:"get"}).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(this.props.match.params.page!==e.match.params.page){var n="https://cnodejs.org/api/v1/topics?tab=dev&page=".concat(this.props.match.params.page||1);fetch(n,{method:"get"}).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({data:e.data})}))}}},{key:"render",value:function(){var e=this.props.match.url.slice(0,5);return c.a.createElement("div",null,c.a.createElement("ul",null,this.state.data.map((function(t,a){return c.a.createElement("li",{key:a},c.a.createElement("img",{src:t.author.avatar_url}),c.a.createElement("div",{style:{display:"inline-block",textAlign:"center",width:"80px"}},c.a.createElement("span",null,t.reply_count,"/"),c.a.createElement("span",{style:{fontSize:"10px",marginRight:"10px"}},t.visit_count)),c.a.createElement("div",{className:"top"},"\u7f6e\u9876"),c.a.createElement("span",{style:{fontSize:"10px",marginRight:"10px",float:"right"}},"\u4e09\u5929\u524d"),c.a.createElement(u.b,{className:"jump",to:"".concat(e,"/content/").concat(t.id)},t.title))}))),c.a.createElement("div",null,c.a.createElement("ul",{className:"bot"},c.a.createElement("li",null,"<<"),[1,2,3,4,5,6,7,8,9,10].map((function(t,a){return c.a.createElement("li",{key:a},c.a.createElement(u.b,{to:"".concat(e,"/dev/").concat(t)},t))})),c.a.createElement("li",null,">>"))))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).change=function(e){for(var t=document.querySelectorAll(".header2 a"),a=0;a<t.length;a++)t[a].className="";e.target.className="top2"},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.match.url;return c.a.createElement("div",null,c.a.createElement("div",{className:"header2"},c.a.createElement(u.b,{to:"".concat(e,"/all"),onClick:this.change},"\u5168\u90e8"),c.a.createElement(u.b,{to:"".concat(e,"/good"),onClick:this.change},"\u7cbe\u534e"),c.a.createElement(u.b,{to:"".concat(e,"/share"),onClick:this.change},"\u5206\u4eab"),c.a.createElement(u.b,{to:"".concat(e,"/ask"),onClick:this.change},"\u95ee\u7b54"),c.a.createElement(u.b,{to:"".concat(e,"/job"),onClick:this.change},"\u62db\u8058"),c.a.createElement(u.b,{to:"".concat(e,"/dev"),onClick:this.change},"\u5ba2\u6237\u7aef\u62db\u8058")),c.a.createElement("div",null,c.a.createElement(d.d,null,c.a.createElement(d.b,{exact:!0,path:"".concat(e,"/all"),component:E}),c.a.createElement(d.b,{path:"".concat(e,"/all/:page"),component:E}),c.a.createElement(d.b,{exact:!0,path:"".concat(e,"/good"),component:b}),c.a.createElement(d.b,{path:"".concat(e,"/good/:page"),component:b}),c.a.createElement(d.b,{exact:!0,path:"".concat(e,"/share"),component:g}),c.a.createElement(d.b,{path:"".concat(e,"/share/:page"),component:g}),c.a.createElement(d.b,{exact:!0,path:"".concat(e,"/ask"),component:f}),c.a.createElement(d.b,{path:"".concat(e,"/ask/:page"),component:f}),c.a.createElement(d.b,{exact:!0,path:"".concat(e,"/job"),component:v}),c.a.createElement(d.b,{path:"".concat(e,"/job/:page"),component:v}),c.a.createElement(d.b,{exact:!0,path:"".concat(e,"/dev"),component:y}),c.a.createElement(d.b,{path:"".concat(e,"/dev/:page"),component:y}),c.a.createElement(d.b,{path:"".concat(e,"/content/:id"),component:j}),c.a.createElement(d.a,{to:"".concat(e,"/all")}))))}}]),t}(n.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"Start")}}]),t}(n.Component),x=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"About")}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{style:{padding:"10px"},className:"left"},c.a.createElement("p",null,c.a.createElement("span",{style:{color:"#80bd01"}},"\u4e3b\u9875"),c.a.createElement("span",null,"/\u767b\u5f55"))),c.a.createElement("div",{className:"login"},"\u7528\u6237\u540d ",c.a.createElement("input",{type:"text",name:"username",id:"",style:{marginLeft:"15px"}}),c.a.createElement("br",null),"\u5bc6\u7801 ",c.a.createElement("input",{type:"passworld",name:"pwd",id:"",style:{marginLeft:"25px"}}),c.a.createElement("br",null),c.a.createElement("button",null,c.a.createElement(u.b,{to:"/home"},"\u767b\u5f55"))))}}]),t}(n.Component),S=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"API")}}]),t}(n.Component),_=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(u.a,{basename:"/React/"},c.a.createElement("div",null,c.a.createElement(h,null)),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"left"},c.a.createElement(d.d,null,c.a.createElement(d.b,{path:"/login",component:N}),c.a.createElement(d.b,{path:"/home",component:O}),c.a.createElement(d.b,{path:"/start",component:k}),c.a.createElement(d.b,{path:"/api",component:S}),c.a.createElement(d.b,{path:"/about",component:x}),c.a.createElement(d.a,{to:"/home"}))),c.a.createElement("div",{className:"right"},"CNode:Node.js \u4e13\u4e1a\u4e2d\u6587\u793e\u533a")))}}]),t}(n.Component);l.a.render(c.a.createElement(_,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.d46f6859.chunk.js.map