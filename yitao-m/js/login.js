window.onload = function () {
    loginVerification();
    function loginVerification() {
        var user;
        var password;
        var loginBut = document.querySelector("#loginBut");
        loginBut.addEventListener("touchstart",function () {
            user = document.querySelector("#user").value;
            password = document.querySelector("#password").value;
            Ajax("POST","api_user.php","status=login&username="+user+"&password="+password,function(response){
                if(response.code === 0){
                    localStorage.setItem("token",response.data.token) ;
                    localStorage.setItem("username",response.data.username);
                    window.history.go(-1);
                }else if(response.code === 2003){
                    alert("用户不存在或密码错误!");
                    window.location.reload();
                }
            });
        })
    }
};