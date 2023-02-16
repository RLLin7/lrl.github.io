// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('我最喜欢巧克力冰激淋了。');
} else {
  alert('但是巧克力才是我的最爱呀……');
}

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

document.querySelector("html").addEventListener("click", function () {
  alert("别戳我，我怕疼。");
});

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'static/img/tzs.jpg') {
      myImage.setAttribute('src', 'static/img/tx.jpg');
    } else {
      myImage.setAttribute('src', 'static/img/tzs.jpg');
    }
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')
function setUserName(){
    let myName = prompt('输入你的姓名')
    localStorage.setItem('name',myName)
    myHeading.textContent = myName + '是傻比'
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}
myButton.onclick= function (){
    setUserName();
}


