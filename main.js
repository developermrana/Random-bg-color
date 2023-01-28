const paragraphDiv = document.querySelector("div");

paragraphDiv.classList.add("text");

const paragraph = document.getElementsByClassName("para");
for (let para of paragraph) {
    para.style.fontSize = "20px";
}

const mainSection = document.getElementById("main-section");

const btn = document.getElementById("btn");

let colorList = [
  "#FFF6BD",
  "#FD8A8A",
  "#FEA1BF",
  "#205295",
  "#7286D3",
  "#645CBB",
  "#7286D3",
  "#F55050",
  "#FF8B13",
  "#FFEA20",
  "#B7B78A",
  "#4E6C50",
  "#3D1766",
  "#820000",
];

btn.addEventListener("mousemove", myFunction);

function myFunction() {
  let randomNumber = Math.floor(Math.random() * colorList.length);
  mainSection.style.backgroundColor = colorList[randomNumber];
}




