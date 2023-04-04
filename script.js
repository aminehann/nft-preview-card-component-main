const mainImage = document.getElementById("mainImage")
const hoverImage = document.querySelector(".hoverImage")

mainImage.addEventListener('mouseenter', () => {

    hoverImage.classList.remove("hide")
    
})

mainImage.addEventListener('mouseleave', () => {

    hoverImage.classList.add("hide")
    
})
