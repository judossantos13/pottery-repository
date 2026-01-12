function changeTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("themeDark");
}

function findClass() {
  window.open(
    "https://www.meetup.com/topics/ceramic-arts-pottery-classes/",
    "_blank"
  );
}
let classButton = document.querySelector(".classButton");
classButton.addEventListener("click", findClass);

let themeButton = document.querySelector(".themeButton");
themeButton.addEventListener("click", changeTheme);
