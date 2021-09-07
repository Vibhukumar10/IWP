function isPrime(num) {
  if (num === 2) {
    return true;
  } else if (num > 1) {
    for (var i = 2; i < num; i++) {
      if (num % i !== 0) {
        return true;
      } else if (num === i * i) {
        return false;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}

var counter = 0;
function incfn() {
  var incResult = document.getElementById("incResult");
  counter += 1;
  incResult.value = counter;
}
function addfn() {
  let addInp1 = parseInt(document.getElementById("addInp1").value);
  let addInp2 = parseInt(document.getElementById("addInp2").value);
  if (!addInp1 || !addInp2) {
    return null;
  }
  let addResult = document.getElementById("addResult");
  addResult.value = addInp1 + addInp2;
}

function primefn() {
  let primeInp = document.getElementById("primeInp").value;
  if (primeInp.length === 0) {
    return null;
  }
  let primeResult = document.getElementById("primeResult");
  if (isPrime(primeInp)) primeResult.value = "Yes";
  else primeResult.value = "No";
}

const rnum = parseInt(Math.floor(Math.random() * 10) + 1);
console.log(rnum);

function guessfn() {
  let guessInp = document.getElementById("guessInp").value;
  if (guessInp.length === 0) {
    return null;
  }
  let guessResult = document.getElementById("guessResult");
  if (rnum == guessInp) guessResult.value = "Yes";
  else guessResult.value = "No";
}
