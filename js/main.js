window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function changeHeading() {
    var heading = this;
    var red = Math.floor(Math.random() * 255 + 1);
    var green = Math.floor(Math.random() * 255 + 1);
    var blue = Math.floor(Math.random() * 255 + 1);
    var color = "rgb(" + red + "," + green + "," + blue + ")";
    heading.style.color = color;
}
function main() {
    var msgHeading = document.createElement("h2");
    msgHeading.innerText = "Processing form";
    msgHeading.setAttribute("class", "message");
    msgHeading.onclick = changeHeading;
    var H1 = document.querySelector("h1");
    H1.insertAdjacentElement("afterend", msgHeading);
    setTimeout(function () {
        msgHeading.remove();
    }, 5000);
    resetErrMessages();
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name required");
    isValidDOB();
}
function isValidDOB() {
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
