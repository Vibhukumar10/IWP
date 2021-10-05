const validateUsername = (username) => {
  var regex = /.*/;
  return regex.test(username);
};
const validateBirthday = (birthday) => {
  var regex = /[0-9]{2}[-|\/]{1}[0-9]{2}[-|\/]{1}[0-9]{2}/;
  return regex.test(birthday);
};
const validatePhone = (phone) => {
  var regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{10})$/;
  return regex.test(phone);
};

const submit = () => {
  var username = document.getElementById("username").value;
  var birthday = document.getElementById("birthday").value;
  var phone = document.getElementById("phone").value;

  if (!validateUsername(username)) {
    alert("Invalid Username!");
  } else if (!validateBirthday(birthday)) {
    alert("Invalid Birthday!");
  } else if (!validatePhone(phone)) {
    alert("Invalid Phone!");
  } else {
    alert("Sucess!");
  }
};
