var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270';

/* ... more images ... */

imgArray[2] = new Image();
imgArray[2].src = 'https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687';

console.log(imgArray);

/*------------------------------------*/

function nextImage(element)
{
    var img = document.getElementById(element);

    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == img.src) // << check this
        {
            if(i === imgArray.length){
                document.getElementById(element).src = imgArray[0].src;
                break;
            }
            document.getElementById(element).src = imgArray[i+1].src;
            break;
        }
    }
}

var iterator=0;

var img=document.getElementById("next-btn");
img.addEventListener("click", function() {
    var img = document.getElementById("image");

    iterator=iterator+1;
    

    // for(var i = iterator; i < imgArray.length;i++)
    // {
    //     if(imgArray[i].src == img.src) // << check this
    //     {
    //         if(i === imgArray.length){
    //             document.getElementById("image").src = imgArray[0].src;
    //             break;
    //         }
    //         document.getElementById("image").src = imgArray[i+1].src;
    //         break;
    //     }
    // }
})