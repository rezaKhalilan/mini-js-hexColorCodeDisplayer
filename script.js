const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F" ];

hexBtn = document.querySelector(".hexBtn");
bodyBackground = document.querySelector("body");
hex = document.querySelector(".hex");

hexBtn.addEventListener('click', changeColor);

function changeColor() {
   let hexCode = "#";

   for(i = 0; i < 6; i++) {
     let random = Math.floor(Math.random() * hexNumbers.length);
     hexCode += hexNumbers[random];
   }

   bodyBackground.style.backgroundColor = hexCode;
   hex.innerHTML = hexCode;
}