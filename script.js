const box = document.querySelector(".box")




document.addEventListener("mousemove", (event)=>{
    box.style.top = `${event.clientY}px`
    box.style.left = `${event.clientX}px`
    box.style.transform = "translate(50%, 50%)"
})