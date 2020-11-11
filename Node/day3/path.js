const path = require('path');

//linux 와 window 등 경로 표현에 차이가 있음 , 이때 경로 처리를 하기 위한 모듈

path.join(__dirname, 'var.js');
path.resolve(); // join과 비슷 , join 은 절대경로 무시함, resovle는 절대경로가 있으면 앞에 있는것을 무시함
