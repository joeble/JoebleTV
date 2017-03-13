//By clicking the image, it changes back and forth with an alet.
var myImage = document.querySelector('img');

myImage.onclick = function () {
    'use strict';
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/obama.png') {
        myImage.setAttribute('src', 'images/donald.png');
    } else {
        myImage.setAttribute('src', 'images/obama.png');
    }
};

//Adds a personalized welcome message for a user
