function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const image = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    image.setAttribute("src", "./assets/macaco-branco.png")
  } else {
    image.setAttribute(
      "src",
      "./assets/Design_sem_nome__7_-removebg-preview (2).png"
    )
  }
}
