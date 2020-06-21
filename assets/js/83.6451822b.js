(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{438:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"python布隆过滤器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python布隆过滤器"}},[t._v("#")]),t._v(" python布隆过滤器")]),t._v(" "),a("h2",{attrs:{id:"bloomfilter的应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bloomfilter的应用"}},[t._v("#")]),t._v(" BloomFilter的应用")]),t._v(" "),a("blockquote",[a("ul",[a("li",[a("p",[t._v("黑名单")]),t._v(" "),a("blockquote",[a("p",[t._v("比如邮件黑名单过滤器，判断邮件地址是否在黑名单中")])])]),t._v(" "),a("li",[a("p",[t._v("排序(仅限于BitSet)")]),t._v(" "),a("blockquote",[a("p",[t._v("仔细想想，其实BitSet在set(int value)的时候，“顺便”把value也给排序了。")])])]),t._v(" "),a("li",[a("p",[t._v("网络爬虫")]),t._v(" "),a("blockquote",[a("p",[t._v("判断某个URL是否已经被爬取过")])])]),t._v(" "),a("li",[a("p",[t._v("K-V系统快速判断某个key是否存在")]),t._v(" "),a("blockquote",[a("p",[t._v("典型的例子有Hbase，Hbase的每个Region中都包含一个BloomFilter，用于在查询时快速判断某个key在该region中是否存在，如果不存在，直接返回，节省掉后续的查询。")])])])])]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("实习经历过的例子：如何判断右边👉1000万条数据id中，有多少条在左边👈50万条数据中。当然，反过来也一样")]),t._v(" "),a("p",[t._v("显然可能会想到用set数据结构，或者bitset")]),t._v(" "),a("p",[t._v("参考了：https://blog.csdn.net/xinzhongtianxia/article/details/81294922")]),t._v(" "),a("p",[t._v("总之之前的想法都躺枪试过，不尽完美。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("BloomFiler又叫布隆过滤器，下面举例说明BlooFilter的实现原理：")]),t._v(" "),a("blockquote",[a("p",[t._v("比如你有10个Url，你完全可以创建一长度是100bit的数组，然后对url分别用5个不同的hash函数进行hash，得到5个hash后的值，这5个值尽可能的保证均匀分布在100个bit的范围内。然后把5个hash值对应的bit位都置为1，判断一个url是否已经存在时，一次看5个bit位是否为1就可以了，如果有任何一个不为1，那么说明这个url不存在。这里需要注意的是，如果对应的bit位值都为1，那么也不能肯定这个url一定存在，这个是BloomFilter的特点之一")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/Users/jiang/Desktop/easyToBAT/docs/imgs/d2fb6f30cbe3430db4eeb6bb7752c0be-image.png",alt:""}})]),t._v(" "),a("p",[t._v("BloomFilter的核心思想有两点：")]),t._v(" "),a("ol",[a("li",[t._v("多个hash，增大随机性，减少hash碰撞的概率")]),t._v(" "),a("li",[t._v("扩大数组范围，使hash值均匀分布，进一步减少hash碰撞的概率。")])]),t._v(" "),a("h2",{attrs:{id:"安装使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装使用"}},[t._v("#")]),t._v(" 安装使用")]),t._v(" "),a("p",[a("code",[t._v("pip install pybloom")])]),t._v(" "),a("h2",{attrs:{id:"bloomfilter-定容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bloomfilter-定容"}},[t._v("#")]),t._v(" BloomFilter:定容")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pybloom "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" BloomFilter\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# capacity是容量, error_rate 是能容忍的误报率")]),t._v("\nf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BloomFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("capacity"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error_rate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 返回False，一定不存在/返回True，则有可能存在")]),t._v("\nstate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'你好'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h2",{attrs:{id:"scalablebloomfilter-自动扩容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scalablebloomfilter-自动扩容"}},[t._v("#")]),t._v(" ScalableBloomFilter:自动扩容")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" pybloom "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ScalableBloomFilter\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#SMALL_SET_GROWTH，扩容规则")]),t._v("\nsbf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ScalableBloomFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ScalableBloomFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SMALL_SET_GROWTH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsbf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#与BloomFilter 同")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);