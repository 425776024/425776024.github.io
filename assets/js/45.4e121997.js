(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{397:function(t,v,_){"use strict";_.r(v);var e=_(0),s=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"sqe2seq"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sqe2seq"}},[t._v("#")]),t._v(" sqe2seq")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("标准的RNN"),_("strong",[t._v("没法处理这种输入序列和输出序列长度不相等的情况")]),t._v("，解决这类问题的一种方法是序列到序列学习技术")])]),t._v(" "),_("li",[_("p",[t._v("对有些问题，输入序列的长度和输出序列不一定相等，而且我们事先并不知道输出序列的长度，典型的是语音 识别和"),_("strong",[t._v("机器翻译")]),t._v("问题")])]),t._v(" "),_("li",[_("p",[t._v("seq2seq是用循环神经网络构建的一种框架，它能实现从"),_("strong",[t._v("一个序列到另外一个序列的映射")]),t._v("，两个序列的长度可以不相等")])])]),t._v(" "),_("p",[t._v("训练样本是成对的序列(A, B)，训练的目标是让序列A编码之后解码得到序列B的概率最大，即最大化如下的 条件对数似然函数")]),t._v(" "),_("p",[t._v("这种结构又叫Encoder-Decoder模型。")]),t._v(" "),_("p",[_("strong",[t._v("Encoder-Decoder结构先将输入数据编码成一个上下文向量c：")])]),t._v(" "),_("p",[t._v("有1、2、3种方式得到上下文向量")]),t._v(" "),_("p",[_("img",{attrs:{src:"/imgs/image-20191003141052029.png",alt:""}})]),t._v(" "),_("p",[_("strong",[t._v("拿到c之后，就用另一个RNN网络对其进行解码")]),t._v("，这部分RNN网络被称为Decoder。具体做法就是将c当做之前的初始状态h0输入到Decoder中：")]),t._v(" "),_("p",[_("img",{attrs:{src:"/imgs/image-20191003141135464.png",alt:""}})]),t._v(" "),_("p",[t._v("还有一种做法是将c当做每一步的输入：")]),t._v(" "),_("p",[_("img",{attrs:{src:"/imgs/image-20191003141207115.png",alt:""}})]),t._v(" "),_("p",[t._v("机器翻译：")]),t._v(" "),_("p",[_("img",{attrs:{src:"/imgs/70-seq2seq.png",alt:""}})]),t._v(" "),_("p",[t._v("以此类推，直到某个时刻预测输出特殊符号"),_("code",[t._v("<END>")]),t._v(" 结束。")]),t._v(" "),_("hr"),t._v(" "),_("p",[t._v("由于这种Encoder-Decoder结构不限制输入和输出的序列长度，因此应用的范围非常广泛，比如：")]),t._v(" "),_("p",[_("strong",[t._v("机器翻译")]),t._v("：Encoder-Decoder的最经典应用，事实上这一结构就是在机器翻译领域最先提出的")]),t._v(" "),_("p",[_("strong",[t._v("文本摘要")]),t._v("：输入是一段文本序列，输出是这段文本序列的摘要序列。")]),t._v(" "),_("p",[_("strong",[t._v("阅读理解")]),t._v("：将输入的文章和问题分别编码，再对其进行解码得到问题的答案。")]),t._v(" "),_("p",[_("strong",[t._v("语音识别")]),t._v("：输入是语音信号序列，输出是文字序列。")]),t._v(" "),_("h2",{attrs:{id:"attention"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#attention"}},[t._v("#")]),t._v(" Attention")]),t._v(" "),_("blockquote",[_("p",[t._v("encoder-decoder模型虽然非常经典，但是局限性也非常大。")]),t._v(" "),_("p",[t._v("最大的局限性就在于编码和解码之间的唯一联系就是一个固定长度的语义向量C。")]),t._v(" "),_("p",[t._v("也就是说，编码器要将整个序列的信息压缩进一个固定长度的向量中去。")]),t._v(" "),_("p",[t._v("但是这样做有两个弊端：一是语义向量无法完全表示整个序列的信息、二是先输入的内容携带的信息会被后输入的信息稀释掉。")]),t._v(" "),_("p",[t._v("输入序列越长，这个现象就越严重，这就使得在解码的时候一开始就没有获得输入序列足够的信息， 那么解码时准确率就要打一定折扣。\n为了解决上述问题，在 Seq2Seq出现一年之后，Attention模型被提出了。")]),t._v(" "),_("p",[t._v("该模型在产生输出的时候，会产生一个注意力范围来表示接下来输出的时候要重点关注输入序列的哪些部分，然后根据关注的区域来产生下一个输出，如此反复。")]),t._v(" "),_("p",[t._v("attention 和人的一些行为特征有一定相似之处，人在看一段话的时候，通常只会重点注意具有信息量的词，而非全部词，即人会赋予每个词的注意力权重不同。")]),t._v(" "),_("p",[t._v("attention 模型虽然增加了模型的训练难度，但提升了文本生成的效果。")])]),t._v(" "),_("p",[t._v("模型的大概示意图如下：")]),t._v(" "),_("p",[_("img",{attrs:{src:"/imgs/image-20191003143229886.png",alt:""}})]),t._v(" "),_("p",[_("strong",[t._v("用aij代表注意前面Encoder不同的hi的权重")]),t._v("，得到中间向量ci，然后作为Decoder去解码")]),t._v(" "),_("p",[_("img",{attrs:{src:"/imgs/image-20191003143328338.png",alt:""}})])])}),[],!1,null,null,null);v.default=s.exports}}]);