var topLayer = "stack3";
var counter1 = 0;
var counter2 = 0;
var counter3 = 1;

//function to place the choosen layer on the top
function mover(toTop) {
  document.getElementById(topLayer).style.zIndex = "0";
  document.getElementById(toTop).style.zIndex = "1";
  topLayer = toTop;
  var child = document.getElementById(topLayer).children[0];
  var id = child.id;
  var render = 0;
  switch (id) {
    case "counter1":
      counter1++;
      render = counter1;
      break;
    case "counter2":
      counter2++;
      render = counter2;
      break;
    case "counter3":
      counter3++;
      render = counter3;
      break;
  }
  child.innerHTML = render;
}
