function mdSwitch() {
        var mdValue = document.getElementById("md_v").innerText;
        var converter = new showdown.Converter();
        var html = converter.makeHtml(mdValue);
        document.getElementById("show-area").innerHTML = html;
};



window.onload = function () {
    const gitalk = new Gitalk({
      clientID: '15813cf70c4a1eecc532',
      clientSecret: 'ec6da806f2e8b1af41b47fe073aa555cc36d6c0d',
      repo: '425776024.github.io',      // The repository of store comments,
      owner: '425776024',
      admin: ['425776024'],
      id: md5(location.pathname),
      distractionFreeMode: '{{ theme.gitalk.distractionFreeMode }}'
    });

    gitalk.render('gitalk-container');

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
    var value = myCodeMirror.getValue();
    runit(value);

};