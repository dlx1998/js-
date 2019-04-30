window.onload = function () {
    show(); del(); je(); counts(); jf(); zje();jiesuan();
}

function show() {
    var img = document.getElementById('art-p1-img');
    var tab1 = document.getElementById('tab1');
    var flag = true;
    img.onclick = function () {
        if (flag) {
            tab1.className = "tab1-1";
            flag = false;
        } else {
            tab1.className = "tab1";
            flag = true;
        }
    }
}



function del() {
    var tab2 = document.getElementById('tab2');
    var del = document.getElementsByClassName('del');
    for (var i = 0; i < del.length; i++) {
        del[i].onclick = function () {
            var tr = this.parentNode;
            tab2.deleteRow(tr.rowIndex);
            je(); jf(); zje();
        }
    }
}

function counts() {
    var count = document.getElementsByClassName('count');
    for (var i = 0; i < count.length; i++) {
        count[i].onchange = function () {
            je(); jf(); zje();
        }
    }
}

function je() {
    var content = 0;
    var scj = document.getElementsByClassName('scj');           //scj：市场价
    var zkj = document.getElementsByClassName('zkj');           //zkj：折扣价
    var count = document.getElementsByClassName('count');
    var je = document.getElementById('je');
    for (var i = 0; i < scj.length; i++) {
        var s = parseFloat(scj[i].innerHTML);
        var z = parseFloat(zkj[i].innerHTML);
        var c = parseFloat(count[i].value);
        var result = (s - z) * c;
        content += result;
    }
    console.log(content);
    je.innerHTML = content;
}

function jf() {
    var content = 0;
    var jfs = document.getElementsByClassName('jf');
    var count = document.getElementsByClassName('count');
    var jf = document.getElementById('jf');
    for (var i = 0; i < jfs.length; i++) {
        var j = parseFloat(jfs[i].innerHTML);
        var c = parseFloat(count[i].value);
        var result = j * c;
        content += result;
    }
    console.log(content);
    jf.innerHTML = content;
}

function zje() {
    var content = 0;
    var count = document.getElementsByClassName('count');
    var zkj = document.getElementsByClassName('zkj');
    var zje = document.getElementById('zje');
    for (var i = 0; i < zkj.length; i++) {
        var z = parseFloat(zkj[i].innerHTML);
        var c = parseFloat(count[i].value);
        var result = z * c;
        content += result;
    }
    zje.innerHTML = content;
}

function jiesuan() {
    var count = document.getElementsByClassName('count');
    var je = document.getElementById('je');
    var jf = document.getElementById('jf');
    var zje = document.getElementById('zje');
    var jiesuan = document.getElementById('jiesuan');
    jiesuan.onclick = function () {
        for (var i = 0; i < count.length; i++) {
            count[i].value = 0;
            je.innerHTML=0;
            jf.innerHTML=0;
            zje.innerHTML=0;
        }
    }
}