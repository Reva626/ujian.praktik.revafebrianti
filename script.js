function LoginVerification ()
let username = document.getElementById("Username").value;
let password = document.getElementById("Password").value;

if(username=="admin" && password=="admin"){
    window.alert("Login Berhasil");
    window.location="index.html";
}
else if (username==""|| password==""){
    window.alert("Masukan Email Atau Password");
}
else{
    window.alert("Login Gagal");
}
}