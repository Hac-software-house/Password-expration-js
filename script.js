function button() {
    var password3 = document.getElementById("password1").value;
    var password4 = document.getElementById("password2").value;
    if (password3 === "",password4==="") {
        document.getElementById("demo5").innerHTML = "Password is empty"; return false;
    }
    if (password3.length<8,password4.length<8) {
        document.getElementById("demo5").innerHTML = "Password is less then 8 chracter"; return false;
    }
   
    if (password3 == password4) {
        document.getElementById("demo5").innerHTML = "Password match"; return false;
    }
    if (password3 !== password4) {
        document.getElementById("demo5").innerHTML = "Password not match"; return false;
    }
   
}

