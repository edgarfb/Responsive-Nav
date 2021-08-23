var dark = false;
console.log(false);

var icon = document.getElementById("icon");

const iconMoon = document.querySelector(".fa-moon");

iconMoon.addEventListener("click", (event) =>
  event.target.classList.toggle("fa-sun")
);

function toggle() {
  if (dark) {
    document.body.className = "";
    dark = false;
    console.log(dark);
  } else {
    document.body.className = "dark-theme";
    dark = true;
    console.log(true);
  }
}
//   dark==true ? function(){
//     document.body.className = "";
//     dark = false;
//     console.log(dark);
//   }:function(){
//     document.body.className = "dark-theme";
//     dark = true;
//     console.log(true);
//   }
// }

// var dark = false;
// icon.onclick = function(){
//   dark ? function(){
//     document.body.className = "";
//     dark = false;
//     console.log(dark);
//   }:function(){
//     document.body.className = "dark-theme";
//     dark = true;
//     console.log(true);
//   }
// };
