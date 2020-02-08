function login() {//8
    var _account = $('#account').val();
    var _password = $('#password').val();

    if (!_account || !_password) {//7
        $('#errormsg').text('請輸入帳號密碼!');
    }//7
    else {//6
        $.post("/member/login",//5
            { 'account': _account, 'password': _password }, //4
            
            function (res) {//3
                if (res.status == 1) {//1
                    $('#errormsg').text(res.msg);
                }//1
                else {//2
                    $.cookie('userName', res.data.name);
                    $.cookie('userID', res.data.account);
                    alert('登入成功!');
                    location.href = '/public/index.html';
                }//2
            }//3
            );//5
    }//6
}//8
function register() {//9
    location.href = '/public/register.html';
}//9
