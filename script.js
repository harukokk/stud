function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

//pegar tag img
const img = document.querySelector("#profile img")

// substituir a imagem
if (html.classList.contains("light")) {
// se tiver lightmode adicionar a imagem light
   img.setAttribute("src", "./assets/avatar-light.png")
}  else {
// se tiver sem lightmode manter a imagem normal
   img.setAttribute("src", "./assets/avatar.png")
}

if (html.classList.contains("light")) {
    // se tiver lightmode adicionar a imagem light
    img.setAttribute("alt", "maykbrito sorrindo usando jaqueta preta, camisa preta e oculos escuro")
    } else {
    // se tiver sem lightmode manter a imagem normal
    img.setAttribute("alt", "foto de maykbrito sorrindo usando camisa preta, barba e fundo amarelo")
    }
    
    
}