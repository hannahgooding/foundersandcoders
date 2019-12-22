// initialising variables

const images = document.querySelectorAll(".image") // select multiple elements with specfied class and put them in a node list
const nextArrow = document.querySelector("#arrow-right"); // select element with specified id
const previousArrow = document.querySelector("#arrow-left");
const playPause = document.querySelector("#play-button");
let auto = false; // automatic scroll option
const intervalTime = 5000; // time between images in milliseconds
let imageInterval; // keep track of intervals
