let h1 = document.querySelectorAll("h1")

h1.forEach(function(h1s) {
    h1s.addEventListener("click", function() {
        h1s.style.color = "red"
        // h1s.style.
    })
})


let imgs = document.querySelectorAll("img")

imgs.forEach(function(imgs) {
    imgs.addEventListener("click", function(){
        imgs.setAttribute("src", "https://images.unsplash.com/photo-1743376272672-c130603a3af2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D")
    })
})