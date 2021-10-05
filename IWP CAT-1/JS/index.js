function handleSubmit() {
  var date = document.getElementById("date");
  var print = document.getElementById("print");
  var iff = document.getElementById("if");

  if (!validateDate(date.value)) {
    alert("The date is not in the given format");
  }
  if (!validatePrint(print.value)) {
    alert("Invalid Print Statement in Python");
  }
  //   if (!validateIf(iff.value)) {
  //     alert("Invalid IF Statement in Python");
  //   }
}

function validateDate(date) {
  let dateReg = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  return dateReg.test(date);
}
function validatePrint(print) {
  let printReg = /^(print\(')+([^\']*)+('\))$/;
  return printReg.test(print);
}

document.getElementById("btn").addEventListener("click", handleSubmit);
