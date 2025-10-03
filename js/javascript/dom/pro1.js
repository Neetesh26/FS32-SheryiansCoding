let button = document.querySelector('button')
let h5 = document.querySelector('h5')

button.addEventListener('click', function() {
    h5.innerHTML='sending...'
    setTimeout(function() {
        h5.innerHTML = 'done'
        h5.style.color = 'green'
    }, 2000)
})