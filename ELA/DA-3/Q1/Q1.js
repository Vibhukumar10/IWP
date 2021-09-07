var pno = window.prompt("Enter product numbe(1 to 5), -1 to Quit");
var p = parseInt(pno);
var s1 = 0,
  s2 = 0,
  s3 = 0,
  s4 = 0,
  s5 = 0;
var c1 = document.getElementById("pr1");
var c2 = document.getElementById("pr2");
var c3 = document.getElementById("pr3");
var c4 = document.getElementById("pr4");
var c5 = document.getElementById("pr5");

var price;
var q;
var qty;
while (pno != -1) {
  switch (p) {
    case 1:
      price = 2.98;
      q = window.prompt("Enter number of quantities sold for product 1:");
      qty = parseInt(q);
      s1 += price * qty;
      break;
    case 2:
      price = 4.5;
      q = window.prompt("Enter number of quantities sold for product 2:");
      qty = parseInt(q);
      s2 += price * qty;
      break;
    case 3:
      price = 9.98;
      q = window.prompt("Enter number of quantities sold for product 3:");
      qty = parseInt(q);
      s3 += price * qty;
      break;
    case 4:
      price = 4.49;
      q = window.prompt("Enter number of quantities sold for product 4:");
      qty = parseInt(q);
      s4 += price * qty;
      break;
    case 5:
      price = 6.87;
      q = window.prompt("Enter number of quantities sold for product 5:");
      qty = parseInt(q);
      s5 += price * qty;
      break;
    default:
      window.alert("No proper input, Please try Again");
      break;
  }
  //  counter = counter + 1;

  pno = window.prompt("Enter product number, -1 to Quit");
  p = parseInt(pno);
}
c1.innerHTML = s1;
c2.innerHTML = s2;
c3.innerHTML = s3;
c4.innerHTML = s4;
c5.innerHTML = s5;
