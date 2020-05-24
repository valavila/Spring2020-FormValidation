window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    resetErrMessages();
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name required");
    var dobBox = document.getElementById("dob");
    var dob = dobBox.value;
    if (!isValidateDate(dob)) {
        dobBox.nextElementSibling.innerHTML = "Invalid format. Should be mm/dd/yy";
    }
}
function isValidateDate(input) {
    var pattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/g;
    var result = pattern.test(input);
    return result;
}
function isTextPresent(id, errMsg) {
    var txtBox = document.getElementById(id);
    var txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        var errSpan = txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
function resetErrMessages() {
    var allSpans = document.querySelectorAll("form span");
    for (var i = 0; i < allSpans.length; i++) {
        var currSpan = allSpans[i];
        if (currSpan.hasAttribute("data-required")) {
            currSpan.innerText = "*";
        }
        else {
            currSpan.innerText = "";
        }
    }
}
