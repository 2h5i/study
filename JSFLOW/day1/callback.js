setInterval(function () {
  console.log('1초마다 실행됩니다.');
}, 1000);

var cb = function () {
  console.log('1초마다 실행됩니다.');
};

setInterval(cb, 1000);

////////////

var arr = [1, 2, 3, 4, 5];
var entries = [];
arr.forEach(
  function (v, i) {
    entries.push([i, v, this[i]]);
  },
  [10, 20, 30, 40, 50] //this로 인식할 대상(생략 가능)
);
console.log(entries);

//[[0,1,10],[1,2,20],[2,3,30],[3,4,40],[4,5,50]]

//forEach처럼 동작하게 만들어보기
Array.prototype.forEach = function (callback, thisArg) {
  var self = thisArg || this;
  for (var i = 0; i < this.length; i++) {
    callback.call(self, this[i], i, this);
  }
};

///////////////

document.body.innerHTML = '<div id="a">abc</div>';
function cbFunc(x) {
  console.log(this, x);
}

document.getElementById('a').addEventListener('click', cbFunc);
$('#a').on('click', cbFunc);
