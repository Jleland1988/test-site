var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/MarioSMBW.png') {
      myImage.setAttribute ('src','images/LuigiSMBW.png');
    } else {
      myImage.setAttribute ('src','images/MarioSMBW.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = "The Mario Brothers!," + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name")
  myHeading.textContent = "The Mario Brothers!," + storedName;
}

myButton.onclick = function() {
  setUserName();
}
