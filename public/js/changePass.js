if (!$.cookie('userID') || $.cookie('userID') == "null")//9
 {//8
    alert("請先登入會員");
    location.href = '/public/login.html';
}//8
function changePass() {//7
    var _oldPass = $('#oldPass').val();
    var _newPass = $('#newPass').val();
    if (!_oldPass || !_newPass) {//6
        $('#errormsg').text('請輸入密碼!');
    }//6
    else {//5
        $.post("/member/changePass", {//4
            'account': $.cookie('userID'), 'oldPass': _oldPass, 'newPass': _newPass
        },
        function (res) {//3
            if (res.status == 1) {//2
                $('#errormsg').text(res.msg);
            }//2
            else {//1
                alert('修改成功!');
                location.href = '/public/index.html';
            }//1
        });//4
    }//5
}//7
