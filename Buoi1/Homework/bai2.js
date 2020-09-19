let $timer = document.getElementById("timer");
let $contain = document.getElementById("contain");
let $btn = document.getElementById("btn-disabled");
let red, yellow, green;
let timeInterval;

//cach1
// const countTime = () => {
//     --$timer.innerHTML

//     if($timer.innerHTML == "-1"){
//         clearInterval(timeInterval)
//         Run()
//     }
// }

// const controller = () => {
//     if($contain.children[0].classList.contains('red')){
//         $contain.children[0].classList.remove('red')
//         $contain.children[1].classList.toggle('yellow')
//     }else if($contain.children[1].classList.contains('yellow')){
//         $contain.children[1].classList.remove('yellow')
//         $contain.children[2].classList.toggle('green')
//     }else{
//         $contain.children[2].classList.remove('green')
//         $contain.children[0].classList.toggle('red')
//     }
// }

// const Run = () => {
//     $btn.setAttribute("disabled","")
//     //Timer
//     $timer.innerHTML = "3"
//     controller()
//     timeInterval = setInterval(countTime,1000)
// }

//cach2
const countTime = () => {
  --$timer.innerText;

  if ($timer.innerText == "-1") {
    alert("error")
    clearInterval(timeInterval);
    clearTimeout(red);
    clearTimeout(green); 
    clearTimeout(yellow);
  }
};

const redOn = () => {
  $contain.children[0].classList.toggle("red");
  $contain.children[2].classList.remove("green");
  $timer.innerText = "8";
  timeInterval = setInterval(countTime, 1000);
};
const yellowOn = () => {
  $contain.children[1].classList.toggle("yellow");
  $contain.children[0].classList.remove("red");
  $timer.innerText = "3";
  timeInterval = setInterval(countTime, 1000);
};
const greenOn = () => {
  $contain.children[2].classList.toggle("green");
  $contain.children[1].classList.remove("yellow");
  $timer.innerText = "8";
  timeInterval = setInterval(countTime, 1000);
};

const Run = () => {
  $btn.setAttribute("disabled", "");
  red = setTimeout(redOn);
  yellow = setTimeout(yellowOn, 8000);
  green = setTimeout(greenOn, 11000);
  setInterval(Run, 19000);
};
