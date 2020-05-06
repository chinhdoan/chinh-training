var i = 0;
var images = [];
var time = 1200;

// Image list
images[0] = 'images/slider/1.jpg';
images[1] = 'images/slider/2.jpg';
images[2] = 'images/slider/3.jpg';


function changeImage(){

  document.slide.src = images[i];

  if(i <images.length - 1){
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImage()", time);
}

window.onload = changeImage;
