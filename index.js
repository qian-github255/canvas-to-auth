

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (var i = 65; i <= 122; i++) {
    if (i > 90 && i < 97) {
        continue;
    }
    arr.push(String.fromCharCode(i))
}

// console.log(arr)

// var a ;
var str = '';


function createCanvas() {
    var canvasStr = '';
    for (var i = 0; i < 6; i++) {
        a = arr[Math.floor(Math.random() * arr.length)];
        str += a;
        canvasStr += a + ' ';
    }
    // console.log(canvasStr);
    console.log(str)

    // 生成canvas区域内容
    var myCanvas = document.getElementById('canvasPage');
    // console.log(myCanvas)
    // console.log(myCanvas.width)
    // console.log(myCanvas.height)
    var ctx = myCanvas.getContext('2d');
    
    var oImg = new Image();
    oImg.src = './img/beijing.png';
    oImg.onload = function () {
        ctx.clearRect(0, 0, myCanvas.width,myCanvas.height);//清除画布上的指定区域；
        var pattern = ctx.createPattern(oImg, 'repeat');
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
        ctx.textAlign = 'center';
        ctx.fillStyle = '#000';
        ctx.font = '45px Roboto Slab';
        ctx.setTransform(1, -0.12, 0.3, 1, 0, 12);
        ctx.fillText(canvasStr, myCanvas.width / 2, 80)
    }

    // return canvasStr;
}

var canvasStr = createCanvas();

function showResult () {

    var inp = document.getElementById('inp');
    var val = inp.value;
    // console.log(val);
    if(val === str){
        // console.log(true)
        $('.right').css({
            backgroundImage:'url("./img/zhengque.png")',
            display : 'inline-block'
        })
    }else{
        // console.log(false)
        $('.right').css({
            backgroundImage:'url("./img/cuo.png")',
            display : 'inline-block'
        })
    }
    str = '';
}

$('.submit').on('click', function () {
    showResult();
    createCanvas();
});

$('.refresh').on('click', function () {
    str = ''
    createCanvas();
   
})