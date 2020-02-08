if (!$.cookie('userID') || $.cookie('userID') == "null") //1
{//2
    $('#login').show();
    $('#changePass').hide();
    $('#username').hide();
    $('#logout').hide();
}//2
else {//3
    $('#login').hide();
    $('#changePass').show();
    $('#username').show();
    $('#username').text("UserName : " + $.cookie('userName'));
    $('#logout').show();
}//3

//登出功能
function logout() {//4
    $.removeCookie("userID");
    $.removeCookie("userName");
    history.go(0);
}//4
