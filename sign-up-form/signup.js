var passMatch = function() {
    var password = document.getElementById("password-input").value;
    var confirmPw = document.getElementById("confirm-pw-input").value;
    var errorMsg = document.getElementById("not-match");
    if (password == confirmPw) {
        errorMsg.innerHTML = "";
    } else {
        errorMsg.innerHTML = "Passwords don't match!";
        errorMsg.style.color = "red";
    }
}