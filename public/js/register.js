//public/javascripts/register.js
function register() {//8
    var _account = $('#account').val();
    var _password = $('#password').val();
    var _confirmpsd = $('#confirmpsd').val();
    var _name = $('#name').val();


    if (!_account || !_password || !_confirmpsd || !_name) {//7
        $('#errormsg').text('請輸入未填欄位!');
    }//7
    else if (_password != _confirmpsd) {//6
        $('#errormsg').text('確認密碼不相同!');
    }//6
    else {//5
        $.post("/member/register",//4
         { 'name': _name, 'account': _account, 'password': _password }, //3
        function (res) {//2
            if (res.status == 0) {//1
                location.href = '/public/login.html';
                alert('註冊成功!');
            }//1
        }//2
        );//4
    }//5
}//8
function login() {//9
    location.href = '/public/login.html';
}