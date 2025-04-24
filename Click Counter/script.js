// const btnI = document.getElementById("btnI");
// const btnD = document.getElementById("btnD");
// const btnR = document.getElementById("btnR");
// const numCtr = document.getElementById("numCtr");

// numCtr.innerText = localStorage.getItem("counts") || 0;

// function cnumColor() {
//   if (Number(numCtr.innerText) == 0) {
//     numCtr.style.color = "red";
//   } else {
//     numCtr.style.color = "white";
//   }
//   if (Number(numCtr.innerText) < 0) {
//     numCtr.style.color = "black";
//   }
// }

// btnI.addEventListener("click", () => {
//   numCtr.innerText = Number(numCtr.innerText) + 1;
//   localStorage.setItem("counts", numCtr.innerText);
//   cnumColor();
// });

// To make it dubble click just change click to dbclick
// btnD.addEventListener("click", () => {
//   Add a feature where double-clicking the button decreases the count by 1 (but don’t let it go below 0) //
//   if (Number(numCtr.innerText) > 0) {
//     numCtr.innerText = Number(numCtr.innerText) - 1;
//     localStorage.setItem("counts", numCtr.innerText);
//   }

//   numCtr.innerText = Number(numCtr.innerText) - 1;
//   localStorage.setItem("counts", numCtr.innerText);
//   cnumColor();
// });

// btnR.addEventListener("click", () => {
//   numCtr.innerText = 0;
//   localStorage.setItem("counts", numCtr.innerText);
//   cnumColor();
// });

// MORE OPTIMIZED CODE
const numCtr = document.getElementById("numCtr");
const btnI = document.getElementById("btnI");
const btnD = document.getElementById("btnD");
const btnR = document.getElementById("btnR");

numCtr.innerText = localStorage.getItem("numStr") || 0;
numCtr.style.color = localStorage.getItem("colrStr");
function colrAndStr() {
  localStorage.setItem("numStr", numCtr.innerText);
  if (numCtr.innerText > 0) {
    numCtr.style.color = "white";
  } else {
    numCtr.style.color = "red";
  }
  if (numCtr.innerText < 0) {
    numCtr.style.color = "black";
  }
  localStorage.setItem("colrStr", numCtr.style.color);
}
function inc() {
  numCtr.innerText = Number(numCtr.innerText) + 1;
  colrAndStr();
}

function dic() {
  numCtr.innerText = Number(numCtr.innerText) - 1;
  colrAndStr();
}

function rst() {
  numCtr.innerText = 0;
  colrAndStr();
}

btnI.addEventListener("click", inc);
btnD.addEventListener("click", dic);
btnR.addEventListener("click", rst);
