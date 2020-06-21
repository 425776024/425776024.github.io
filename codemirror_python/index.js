//function mdSwitch() {
//        var mdValue = document.getElementById("md_v").innerText;
//        var converter = new showdown.Converter();
//        var html = converter.makeHtml(mdValue);
//        document.getElementById("show-area").innerHTML = html;
//};

code_names=['Leetcode_001_Two_Sum.py']

function load_py_codes(path){


};

window.onload = function () {
//    mdSwitch();
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
        indentWithTabs: true,
        lineWrapping: true,
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
};