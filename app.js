const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function checkBirthDateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum&&dob&&luckyNumber.value)
    compareValues(sum, luckyNumber.value);
    else
    outputBox.innerText ="Please Enter Both The Fields😓";
} 



function compareValues (sum, luckyNumber){
    if(sum%luckyNumber===0){
        outputBox.innerText = "Your Birthday is Lucky🚀";
    }else {
        outputBox.innerText = "Your Birthday is not Lucky😥";
    
    }
}



function calculateSum(dob){
    dob = dob.replaceAll("-","0");
    let sum=0;
    for(let index=0; index<dob.length; index++){
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}

checkNumberButton.addEventListener("click", checkBirthDateIsLucky);