function mdSwitch() {
        var mdValue = document.getElementById("md_v").innerText;
        var converter = new showdown.Converter();
        var html = converter.makeHtml(mdValue);
        document.getElementById("show-area").innerHTML = html;
};


function getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
}
        // 返回我们要的颜色
function getRandomColor() {
            var c1 = 'rgb(50, 222, 61)'
            var c2 = 'rgb(195, 229, 14)'
            var c3 = 'rgb(16 142 255 / 34%)'
            var c4 = 'rgb(203, 149, 216)'
            var c5 = 'rgb(44, 141, 211)'
            var c6 = 'rgb(158, 188, 210)'
            var c=[c1,c2,c3,c4,c5,c6]
            var i=getRandom(0,5)
            return c[i]
}


window.onload = function () {

    document.body.style.backgroundColor = getRandomColor();
    mdSwitch();
    var el = document.getElementById("editor");
	var version = "# version: Python3\n";
	var codeAreaTip = "# Edit your code here:\n \n";
	var code = "print('hello world')";
//    var initValue = version + codeAreaTip  + code;
     var myCodeMirror = CodeMirror.fromTextArea(el, {
        mode: "python",
        theme: "leetcode",
        keyMap: "sublime",
        lineNumbers: true,
        smartIndent: true,
        indentUnit: 4,
        indentWithTabs: false,
        coverGutterNextToScrollbar: false,
        lineWrapping: true,
        extraKeys: {"Ctrl": "autocomplete"},
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
        foldGutter: true,
        autofocus: true,
        matchBrackets: true,
        autoCloseBrackets: true,
        styleActiveLine: true,
    });
//    myCodeMirror.setOption("value", initValue);
    myCodeMirror.on("keypress", function() {
        myCodeMirror.showHint(); // 注意，注释了CodeMirror库中show-hint.js第131行的代码（阻止了代码补全，同时提供智能提示）
    });
    var run_btn = document.getElementById("run_btn");

    run_btn.onclick = function() {
        var value = myCodeMirror.getValue();
        runit(value);
    };
    var value = myCodeMirror.getValue();
    runit(value);

};