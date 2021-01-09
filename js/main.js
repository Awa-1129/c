console.log("就是因为你们这些人不相信光" + "所以奥特曼才不会出现");

window.onload = function () {
    //第一屏侧边导航半出
    $(".nav-nr").css("left", "0");
    $(".nav").css("left", "-130px")
    //第一屏侧边导航半出
    $(".nav-nr-2").css("left", "0");
    $(".nav-2").css("left", "-130px")
    //第一屏侧边导航半出
    $(".page").css("right", "-1900px");
    $(".jt-2").css("left", "0")
    //一言下落
    $("#hitokoto").css("top", "300px");
    $("#hitokoto").css("opacity", "1");
    //时间变不透明度
    $("#sj").css("opacity", "1");
    $(".me").css("opacity","1")
}
//看板娘
// document.write("<script src='https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/autoload.js'></script>");

//获取时间
function showTime() {
    var curTime = new Date();
    $("#sj").html(curTime.toLocaleString());
    setTimeout("showTime()", 1000);
}
$(function () {
    showTime()
})

//请求一言
fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
        const hitokoto = document.getElementById('hitokoto_text')
        hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
        hitokoto.innerText = data.hitokoto
    })
    .catch(console.error)


//鼠标滚轮上下滑动出现和消失
var scrollFunc = function (e) {
    var direct = 0;
    e = e || window.event;
    if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件             
        if (e.wheelDelta < 0) { //当滑轮向下滚动时
            $(".nav").css("left", "-200px")
            $(".nav-2").css("left", "-130px")
            $("#hitokoto").css("top", "-300px");
            $("#hitokoto").css("opacity", "0");
            $("#sj").css("opacity", "0");
            $(".jt").css("left", "135px")
            $(".page").css("right", "-2000px")
            $(".jt-2").css("left", "0")
            $(".jt-2").css("-moz-transform", "matrix(1, 0, 0, 1, 0, 0)")
            $(".jt-2").css("-webkit-transform", "matrix(1, 0, 0, 1, 0, 0)")
            $(".jt-2").css("-o-transform", "matrix(1,0,0,1,0,0)")
            $(".cl").css("left", "1500px")

        } if (e.wheelDelta > 0) { //当滑轮向上滚动时
            $(".nav").css("left", "-130px")
            $(".nav-2").css("left", "-200px")
            $("#hitokoto").css("top", "300px");
            $("#hitokoto").css("opacity", "1");
            $("#sj").css("opacity", "1");
            $(".jt").css("left", "135px")
            $(".page").css("right", "-1900px")
            $(".banner").css("display", "block")
            $(".jt-2").css("left", "0")
            $(".jt-2").css("-moz-transform", "matrix(1, 0, 0, 1, 0, 0)")
            $(".jt-2").css("-webkit-transform", "matrix(1, 0, 0, 1, 0, 0)")
            $(".jt-2").css("-o-transform", "matrix(1,0,0,1,0,0)")
            $(".cl").css("left", "1500px")

        }
    }
}
//给页面绑定滑轮滚动事件
if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
//滚动滑轮触发scrollFunc方法
window.onmousewheel = document.onmousewheel = scrollFunc;


//鼠标点击事件
$(".nav").click(function () {
    $(".nav").css("left", "0px");
    $(".jt").css("left", "150px")
    $("#z").css("right", "0")
    $("#x").css("right", "0")
    $("#v").css("right", "0")
});

$(".nva-2").mouseover(function () {
    $(".nav-2").css("left", "0px");
})


//点击跳转
$("#z").click(function () {
    window.location.href = '插件/202001083698/index.html';
});

//点击事件
$(".slide__img slide__img--proxy").click(function () {
    window.location.href = "插件/202001083698/index.html"
})

$(".page").click(function () {
    $(".page").css("right", "0px")
    $(".banner").css("display", "none")
    $(".jt-2").css("left", "33px")
    $(".jt-2").css("-moz-transform", "matrix(-1, 0, 0, 1, 0, 0)")
    $(".jt-2").css("-webkit-transform", "matrix(-1, 0, 0, 1, 0, 0)")
    $(".jt-2").css("-o-transform", "matrix(-1,0,0,1,0,0)")
    //延时器
    var setTime = setTimeout(function () {
        $(".cl").css("left", "900px")
    }, 1000);
})

$(".me").click(function () {
    $(".page").css("right", "0px")
    $(".banner").css("display", "none")
})

$(".page").dblclick(function () {
    $(".page").css("right", "-1900px")
    $(".jt-2").css("-moz-transform", "matrix(1, 0, 0, 1, 0, 0)")
    $(".jt-2").css("-webkit-transform", "matrix(1, 0, 0, 1, 0, 0)")
    $(".jt-2").css("-o-transform", "matrix(1,0,0,1,0,0)")

    //延时器
    var setTime = setTimeout(function () {
        $(".cl").css("left", "1500px")
    }, 1000);

    //延时器
    var setTime = setTimeout(function () {
        $(".banner").css("display", "block")
    }, 1000);
    $(".jt-2").css("left", "0px")
});

$(".nav").dblclick(function () {
    $(".nav").css("left", "-130px");
    $(".jt").css("left", "135px")
})

$(".nav-2").click(function () {
    $(".nav-2").css("left", "0px");
    $(".jt").css("left", "150px")
    $("#a").css("right", "0")
    $("#b").css("right", "0")
    $("#c").css("right", "0")
});

$(".nav-2").dblclick(function () {
    $(".nav-2").css("left", "-130px");
    $(".jt").css("left", "135px")
})

//鼠标移入
$(".txk").mouseover(function () {
    $(".tx").css("left", "0")
})

//鼠标移出
$(".txk").mouseout(function () {
    $(".tx").css("left", "-200px")
})