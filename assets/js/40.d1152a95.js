(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{494:function(t,s,a){"use strict";a.r(s);var m=a(0),c=Object(m.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"gru"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gru"}},[t._v("#")]),t._v(" GRU")]),t._v(" "),a("p",[t._v("门控循环单元 Gated Recurrent Units，简称GRU 也是通过门来控制信息的流动。")]),t._v(" "),a("p",[t._v("和LSTM不同的是，GRU只使用了两个门，把LSTM的"),a("strong",[t._v("输入门和遗忘门合并成更新门")]),t._v(".")]),t._v(" "),a("p",[a("img",{attrs:{src:"/imgs/image-20191003025627394.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"更新门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新门"}},[t._v("#")]),t._v(" 更新门")]),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"z"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"t"}})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"3C3"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"W"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"z"}})],1)],1)],1)],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"t"}})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-msub",{attrs:{space:"3"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"W"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"h"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"z"}})],1)],1)],1)],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"h"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2212"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),a("p"),t._v(" "),a("h2",{attrs:{id:"重置门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重置门"}},[t._v("#")]),t._v(" 重置门")]),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"r"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"t"}})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"3C3"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"W"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"r"}})],1)],1)],1)],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"t"}})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-msub",{attrs:{space:"3"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"W"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"h"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"r"}})],1)],1)],1)],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"h"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2212"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),a("p"),t._v(" "),a("h2",{attrs:{id:"记忆单元"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#记忆单元"}},[t._v("#")]),t._v(" 记忆单元")]),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-TeXAtom",[a("mjx-mover",[a("mjx-over",{staticStyle:{"padding-bottom":"0.06em","padding-left":"0.163em","margin-bottom":"-0.531em"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"^"}})],1)],1),a("mjx-base",[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"h"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"t"}})],1)],1)],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-msub",{attrs:{space:"4"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"c"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"t"}})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"a"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"h"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"W"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1)],1)],1)],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"t"}})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-msub",{attrs:{space:"3"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"W"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"r"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"h"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2212"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"."}})],1),a("mjx-msub",{attrs:{space:"2"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"r"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"t"}})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),a("p"),t._v(" "),a("h2",{attrs:{id:"隐藏层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隐藏层"}},[t._v("#")]),t._v(" 隐藏层")]),t._v(" "),a("p",[t._v("也就是，有1-zt比重接受记忆、zt比重保留原来t-1轮的隐藏值")]),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"h"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"t"}})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"2212"}})],1),a("mjx-msub",{attrs:{space:"3"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"z"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"t"}})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"."}})],1),a("mjx-msub",{attrs:{space:"2"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"h"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"2212"}})],1),a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"+"}})],1),a("mjx-msub",{attrs:{space:"3"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"z"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"t"}})],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"."}})],1),a("mjx-TeXAtom",{attrs:{space:"2"}},[a("mjx-mover",[a("mjx-over",{staticStyle:{"padding-bottom":"0.06em","padding-left":"0.163em","margin-bottom":"-0.531em"}},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"^"}})],1)],1),a("mjx-base",[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"h"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"t"}})],1)],1)],1)],1)],1)],1)],1)],1)],1),a("p")])}),[],!1,null,null,null);s.default=c.exports}}]);