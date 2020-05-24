
window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void{
    resetErrMessages();
    isTextPresent("first-name","First name is required");
    isTextPresent("last-name","Last name required");
    // validate date
    let dobBox = <HTMLInputElement>document.getElementById("dob");
    let dob = dobBox.value;
    if(!isValidateDate(dob)){
        dobBox.nextElementSibling.innerHTML = "Invalid format. Should be mm/dd/yy"
    }
}

function isValidateDate(input: string):boolean{
    // validating mm/dd/yyyy and m/d/yy
    // \d{1,2}\/\d{1,2}\/\d{2,4}
    let pattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/g;
    let result = pattern.test(input);
    return result;
    // can also do:
        // return pattern.test(input); instead of line 17&18
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
/**
 * Resets all spans back to default text
 */
function resetErrMessages():void{
    let allSpans = document.querySelectorAll("form span");
    for(let i = 0; i < allSpans.length; i++){
        let currSpan = <HTMLElement>allSpans[i];
        if(currSpan.hasAttribute("data-required")){
            currSpan.innerText = "*";
        }else{
            currSpan.innerText = "";
        }
    
    }
}
