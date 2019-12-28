// *IMAGE CAROUSEL*

// initialising variables

const images = document.querySelectorAll(".image") // select multiple elements with specfied class and put them in a node list
const nextArrow = document.querySelector("#arrow-right"); // select element with specified id
const previousArrow = document.querySelector("#arrow-left");
const playPause = document.querySelector("#play-button");
let auto = false; // automatic scroll option
const intervalTime = 5000; // time between images in milliseconds
let imageInterval; // keep track of intervals

// defining functions

function nextImage(){
  const current = document.querySelector(".current"); // select the element with class .current
  current.classList.remove("current"); // remove current class
  if(current.nextElementSibling){ // if the next element is a sibling
    current.nextElementSibling.classList.add("current"); // add current class to next sibling
  } else { // when the next element is not a sibling, i.e. the end of the list
    images[0].classList.add("current"); // add current to the first element
  }
  setTimeout(function(){ current.classList.remove("current") }); // remove the current class after a delay
};

function prevImage(){
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if(current.previousElementSibling){ // if the previous element is a sibling
    current.previousElementSibling.classList.add("current"); // add current class to previous sibling
  } else { // when the previous element is not a sibling, i.e. the start of the list
    images[images.length-1].classList.add("current"); // add current to the last element
  }
  setTimeout(function(){ current.classList.remove("current") });
};

function playImages(){
  const playButton = document.getElementById("play-button");
  playButton.classList.remove("button");
  playButton.classList.add("pause-button");
  imageInterval = setInterval(nextImage, intervalTime); // run next image at interval time
};

function pauseImages(){
  const playButton = document.getElementById("play-button");
  playButton.classList.remove("pause-button");
  playButton.classList.add("button");
  clearInterval(imageInterval);
};

// event listeners

nextArrow.addEventListener("click", function(){
  nextImage();
  if(auto){
    clearInterval(imageInterval); // make interval count start again
    imageInterval = setInterval(nextImage, intervalTime);
  }
});

previousArrow.addEventListener("click", function(){
  prevImage();
  if(auto){
    clearInterval(imageInterval);
    imageInterval = setInterval(nextImage, intervalTime);
  }
});

playPause.addEventListener("click", function(){
  if(auto) {
    pauseImages();
    auto = false;
  } else {
    playImages();
    auto = true;
  }
});

// keyboard navigation

document.onkeydown = function(e){
  switch(e.keyCode){
    case 37: // left arrow key
      prevImage();
      break;
    case 39: // right arrow key
      nextImage();
      break;
  }
};


// * ACCORDION *

// initialise variable
const accordions = document.getElementsByClassName("tab-title"); // select elements with class name tab-title and put them into an array

// set up for loop to loop through accordions array
for (let i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function () {
    const content = this.nextElementSibling; // check the next element which is the tab-content
    if (content.style.maxHeight) { // if the maxheight has a value then the accordion is open
      content.style.maxHeight = null; // then we close it
    } else { // if the maxheight does not have a value then the accordion is closed
      content.style.maxHeight = content.scrollHeight + "px"; // set maxheight to the height of the actual content in pixels
    }
  }
}
