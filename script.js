let errorMsg = "";
let missingField = "";
let submitBtn = document.getElementById("submitInput");
let messageBox = document.getElementById("message");
let emailVal = document.getElementById("emailInput").value;
let phoneVal = document.getElementById("phoneNumberInput").value;
var passVal = document.getElementById("passInput").value;
var confirmVal = document.getElementById("confirmInput").value;

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

submitBtn.onclick = function() {
  // if (isEmail(emailVal) == false) {
  //   errorMsg += "Email id is not Valid."
  // }
  // if (isNumber(phoneVal) == false) {
  //   errorMsg += "Phone Number is not Valid"
  // }
  if (passVal != confirmVal) {
    errorMsg += "Password does not match"
  }
  console.log(errorMsg);
}
