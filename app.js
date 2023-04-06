
const btn = document.querySelector("#button")
const colorName = document.querySelector("#colorName")


btn.addEventListener('click',function(){
   const body = document.querySelector("body")
   const colors = ["red" ,"#00FF00", "rgb(0,0,255)", "yellow"]
   const changeColor = Math.floor(Math.random() * colors.length)
   const selectedColor = colors[changeColor]
   body.style.backgroundColor=selectedColor
   colorName.innerHTML = `: ${selectedColor} `

})
