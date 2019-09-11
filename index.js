var id = "ntdat.104";
var ps = "1042000";
function myfunction() {
    var id_in = document.getElementById("Username").value;
    var ps_in = document.getElementById("Password").value;

    if ((id_in === "") || (ps_in === "")){
        alert("Bạn chưa nhập tài khoản hoặc mật khẩu");
    }
    else if ((id_in === id) && (ps_in === ps)){
    alert("Đăng nhập thành công!");
    document.getElementById("p_1").innerHTML = "Welcome";
    document.getElementById("p_2").innerHTML = "Username: <br />" + id_in;
    document.getElementById("box_1").style.display="none";
    document.getElementById("box_2").style.display="block";
    }
    else alert("Bạn nhập sai tài khoản hoặc mật khẩu");
}