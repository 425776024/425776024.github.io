function outf(text) {
    var mypre = document.getElementById("output");
    mypre.innerHTML = mypre.innerHTML + text;
}

//  "./numpy/__init__.js": "https://cdn.jsdelivr.net/gh/ebertmi/skulpt_numpy@master/numpy/__init__.js",
// for numpy
var externalLibs = {
    "./numpy/__init__.js": "https://pyleetcode.gitee.io/Skulpt/external/numpy/__init__.js",
    "./math/__init__.js": "https://pyleetcode.gitee.io/Skulpt/external/math/math.js",
    "./matplotlib/__init__.js": "https://pyleetcode.gitee.io/Skulpt/external/matplotlib/__init__.js",
    "./numpy/random/__init__.js": "https://pyleetcode.gitee.io/Skulpt/external/numpy/__init__.js",
    "./matplotlib/pyplot/__init__.js":"https://pyleetcode.gitee.io/Skulpt/external/matplotlib/pyplot/__init__.js",

};




function builtinRead(file) {
  console.log("Attempting file: " + Sk.ffi.remapToJs(file));

  if (externalLibs[file] !== undefined) {
    return Sk.misceval.promiseToSuspension(
      fetch(externalLibs[file]).then(
        function (resp){ return resp.text(); }
      ));
  }

  if (Sk.builtinFiles === undefined || Sk.builtinFiles.files[file] === undefined) {
    throw "File not found: '" + file + "'";
  }

  return Sk.builtinFiles.files[file];
}

function runit(value) {

   var mypre = document.getElementById("output");
   mypre.innerHTML = '';
   Sk.pre = "output";
   Sk.configure({output:outf, read:builtinRead,__future__: Sk.python3});
   Sk.canvas = 'mycanvas';
   (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'mycanvas';
   var myPromise = Sk.misceval.asyncToPromise(function() {
       return Sk.importMainWithBody("<stdin>", false, value, true);
   });
   myPromise.then(function(mod) {
       console.log('success');
   },
       function(err) {
//       console.log(err.toString());
       mypre.innerHTML=err.toString();
   });
}

