
    let ul = document.querySelector(".ul");
    let button = document.querySelector("button");

    button.addEventListener("click", function (val) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
console.log(r, g, b);

        ul.style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
    });

