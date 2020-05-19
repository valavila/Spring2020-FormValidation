
window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void{
    isTextPresent("first-name","First name is required");
    isTextPresent("last-name","Last name required");
}

/**
 * Return true if the text box with the given id has some text inside of it
 * @param id the id of the <input type="text"> to validate
 * @param errMsg the message to display in the sibling span of the textbox
 */
function isTextPresent(id:string, errMsg:string):boolean {
    let txtBox = <HTMLInputElement>document.getElementById(id);
    let txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        let errSpan = <HTMLElement>txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}

