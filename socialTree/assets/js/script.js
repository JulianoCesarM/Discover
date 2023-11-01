function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    return img.setAttribute("src", "./assets/img/avatar-light.png")
  } else {
    return img.setAttribute("src", "./assets/img/avatar.png")
  }
}
