let htmlTag = document.querySelector("html")
let divIdSwitch = document.querySelector("#switch")
let img = document.querySelector("#profile img")

function toogleMode() {
  divIdSwitch.addEventListener("click", () => {
    if (htmlTag.classList.contains("light")) {
      htmlTag.classList.remove("light")
      img.setAttribute("src", "./assets/Avatar.png")
    } else {
      htmlTag.classList.add("light")
      img.setAttribute("src", "./assets/Avatar-light.png")
    }
  })
}

toogleMode()
