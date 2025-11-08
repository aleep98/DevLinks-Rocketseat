function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")
  // toggle method acima é equivalente a esse código comentado abaixo

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light");
  // } else {
  //   html.classList.add("light");
  // }

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
  }

  const altText = img.getAttribute("alt")
  if (html.classList.contains("light")) {
    img.setAttribute("alt", " mayk brito in light mode")
  } else {
    img.setAttribute("alt", " mayk brito in dark mode")
  }
}
