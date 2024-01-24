// const button = document.querySelector(".btn");
// const myli = document.querySelector(".listers");

// myli.addEventListener(
//   "click",
//   (e) => {
//     //e.preventDefault();
//     console.log(e.target);
//   },
//   false
// );

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY, event propagation

// button.addEventListener("click", (e) => {
//   console.log(e.target);
// });

// console.log(myli.children.);
// myli.addEventListener('click',(e)=>{

// })

// document.querySelector("li").addEventListener("click", (e) => {
//   //console.log(e.target.parentNode);
//   //   let removeIt = e.target.parentNode;
//   //   removeIt.remove();
//   setTimeout(console.log("restar"), 5000);
// });

// const changeText = function () {
//   document.querySelector("#title").innerHTML =
//     "Machine learning and artificial intelligence";
// };

// setTimeout(changeText, 2000);
// const sayDate = function (str) {
//   console.log(str, Date.now());
// };
// const intervalID = setInterval(sayDate, 10, "ahoyy!");

// clearInterval(intervalID);

// will change the color of the headiing in every constant amount of time which is fixed.

const symbols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const title = document.querySelector(".title");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
function rc() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let x = Math.floor(Math.random() * 16);
    color += symbols[x];
  }
  return color;
  // a hexcode for balck #000000
  // in hexadecimal we have 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
}

function chngColor() {
  const tempColor = rc();
  title.style.color = tempColor;
  console.log(tempColor);
}

// when start button is clicked then start changing the heading color in fixed interval if tinme
startBtn.addEventListener("click", function () {
  const setColor = setInterval(chngColor, 1000);

  // when the user clicks stop button stop changing the color
  stopBtn.addEventListener("click", function () {
    clearInterval(setColor);
  });
});
