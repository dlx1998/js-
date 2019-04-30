window.onload = function(){
    check();selideimg();foot();
}
var timer = null, index = 0;
var main = document.getElementById('main');
var li = document.getElementsByName('artli');
var img = document.getElementsByName('artimg');
function selideimg(){
    main.onmousemove = function(){
        changeImg();
        stopautoplay();
    }
    main.onmouseout = function(){
        starautoplay();
    }
    main.onmouseout();
}

function changeImg(){
    for(var i=0;i<img.length;i++){
        li[i].index = i;
        li[i].onmousemove = function(){
            for(var l=0;l<img.length;l++){
                img[l].className = 'hidd';
            }
            img[this.index].className = 'active';
            for(var m=0;m<li.length;m++){
                li[m].className = 'li-hidd';
            }
            li[this.index].className = 'li-active';
        }
    }
}
changeImg();
function changeImg1(){                          //改变图片的选择
    for (var l = 0; l < img.length; l++) {
        img[l].className = 'hidd';
    }
    img[this.index].className = 'active';
    for(var m=0;m<li.length;m++){
        li[m].className = 'li-hidd';
    }
    li[this.index].className = 'li-active';
}

function starautoplay() {                           //开始自动轮播
    timer = setInterval(function () {
        index++;
        if (index > 5) {
            index = 0;
        }
        changeImg1();
    }, 1000);
}

function stopautoplay(){                    //结束自动轮播
    if(timer){
        clearInterval(timer);
    }
}




function check() {
    var li = document.getElementsByName('ul2-li');      //改变列表项
    for (var i = 0; i < li.length; i++) {
        li[i].index = i;
        li[i].onmouseover = function () {
            for(var l=0;l<li.length;l++){
                li[l].className = 'ul2-hidd';
            }
            li[this.index].className = 'ul2-active';
        }
    }
}

function foot(){
    var foot = document.getElementById('foot');
    foot.onclick  =function(){
        foot.style.display = "none";
    }
}
