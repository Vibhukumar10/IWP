var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src =
  "https://cdn.vox-cdn.com/thumbor/RQ4emhK1w1QLeWsEjT6QPEQF4zQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22522350/1306016076.jpg";

imgArray[1] = new Image();
imgArray[1].src =
  "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgxMzQwNDIyMzIzMzE1ODE1/sipa_33416270.jpg";

imgArray[2] = new Image();
imgArray[2].src =
  "https://static.independent.co.uk/2021/05/01/19/newFile-1.jpg?width=982&height=726&auto=webp&quality=75";

/*------------------------------------*/

function nextImage() {
  iterator = iterator + 1;
  if (iterator === imgArray.length) {
    iterator = 0;
  }
  document.getElementById("image").src = imgArray[iterator].src;
}

function addImage() {
  var imgURL = prompt("Please enter the URL of the image");
  if (imgURL.length === 0) {
    return null;
  }
  imgItem = new Image();
  imgItem.src = imgURL;
  //   console.log(imgItem);
  imgArray.push(imgItem);
  iterator = imgArray.length - 1;
  document.getElementById("image").src = imgArray[iterator].src;
}

var iterator = 0;
//next-btn
document.getElementById("next-btn").addEventListener("click", nextImage);

//add-img
document.getElementById("add-btn").addEventListener("click", addImage);
