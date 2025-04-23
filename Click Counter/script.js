const btnI = document.getElementById("btnI");
const btnD = document.getElementById("btnD");
const btnR = document.getElementById("btnR");
const numCtr = document.getElementById("numCtr");

numCtr.innerText = localStorage.getItem("counts") || 0;

function cnumColor() {
  if (Number(numCtr.innerText) == 0) {
    numCtr.style.color = "red";
  } else {
    numCtr.style.color = "white";
  }
  if (Number(numCtr.innerText) < 0) {
    numCtr.style.color = "black";
  }
}

btnI.addEventListener("click", () => {
  numCtr.innerText = Number(numCtr.innerText) + 1;
  localStorage.setItem("counts", numCtr.innerText);
  cnumColor();
});

// To make it dubble click just change click to dbclick
btnD.addEventListener("click", () => {
  // Add a feature where double-clicking the button decreases the count by 1 (but don’t let it go below 0) //
  // if (Number(numCtr.innerText) > 0) {
  //   numCtr.innerText = Number(numCtr.innerText) - 1;
  //   localStorage.setItem("counts", numCtr.innerText);
  // }

  numCtr.innerText = Number(numCtr.innerText) - 1;
  localStorage.setItem("counts", numCtr.innerText);
  cnumColor();
});

btnR.addEventListener("click", () => {
  numCtr.innerText = 0;
  localStorage.setItem("counts", numCtr.innerText);
  cnumColor();
});
