

function email() {
    var email = document.getElementById('inp1');
    var span = document.getElementById('email-s');
    var reg = /^([a-z]|[A-Z])\w{2,17}@([a-z]|[A-Z])+\.com$/;
    if (reg.test(email.value)) {
        span.innerHTML = "√";
        span.style.color = "green";
        return true;
    } else {
        span.innerHTML = "格式错误，请重新填写";
        span.style.color = "brown";
        return false;
    }
}

function nic() {
    var nic = document.getElementById('inp2');
    var span = document.getElementById('nic-s');
    if (nic.value !== "") {
        span.innerHTML = "√";
        span.style.color = "green";
        return true;
    } else {
        span.innerHTML = "请输入昵称";
        span.style.color = "brown";
        return false;
    }
}
function pwd() {
    var pwd = document.getElementById('inp3');
    var span = document.getElementById('pwd-s');
    if (pwd.value !== "") {
        span.innerHTML = "√";
        span.style.color = "green";
        return true;
    } else {
        span.innerHTML = "请输入密码";
        span.style.color = "brown";
        return false;
    }
}
function pwds() {
    var pwds = document.getElementById('inp4');
    var span = document.getElementById('pwds-s');
    var pwd = document.getElementById('inp3');
    if (pwds.value === pwd.value && pwds.value !== "") {
        span.innerHTML = "√";
        span.style.color = "green";
        return true;
    } else {
        span.innerHTML = "输入的密码要一致";
        span.style.color = "brown";
        return false;
    }
}

function register() {
    var result = email();
    if (!result) {
        alert('email有误');
        return;
    }
    result = nic();
    if (!result) {
        alert('昵称有误');
        return;
    }
    result = pwd();
    if (!result) {
        alert('密码有误');
        return;
    }
    result = pwds();
    if (!result) {
        alert('再次输入的密码有误');
        return;
    }
    document.getElementById('login').submit();
}

function province() {
    var province = document.getElementById('province');
    var proArray = ['浙江省', '广东省', '江苏省'];
    for (var i = 0; i < proArray.length; i++) {
        var op = document.createElement('option');
        op.innerHTML = proArray[i];
        op.value = proArray[i];
        province.appendChild(op);
    }
}
province();
function changecity(proselect) {
    var city = document.getElementById('city');
    console.log(city.options);
    city.options.length = 0;
    var cityArray = new Array();
    cityArray['浙江省'] = ['杭州市', '丽水市', '温州市', '金华市'];
    cityArray['广东省'] = ['江门市', '深圳市', '台州市'];
    cityArray['江苏省'] = ['南京市', '苏州市', '常州市'];
    var province = proselect.value;
    var citys = cityArray[province];
    for (var i = 0; i < citys.length; i++) {
        var op = document.createElement('option');
        op.innerHTML = citys[i];
        op.value = citys[i];
        city.appendChild(op);
    }
}