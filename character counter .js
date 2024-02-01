const textArea = document.getElementById("textarea")
const totalcharacters = document.getElementById("total-characters")
const remainingCharacters=document.getElementById("remaining-characters")

textArea.addEventListener("keydown", () => {
    // console.log("hello")
    counter()
})

function counter() {
    totalcharacters.innerText = textArea.value.length
    remainingCharacters.innerText=textArea.getAttribute("maxlength")-textArea.value.length
}
// counter()