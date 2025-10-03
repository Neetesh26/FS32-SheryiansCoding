let fullNav = document.querySelector('.full-nav')

let btn = document.querySelector('button')
// console.log(btn);

let flag = 0
btn.addEventListener('click', function () {
    if (flag == 0) {
        btn.innerHTML = '<i class="ri-menu-line"></i>'
        fullNav.style.display = 'flex'
        fullNav.style.right = '-40%'
        flag = 1
    } else {
        btn.innerHTML = '<i class="ri-close-line"></i>'
        fullNav.style.right = '0%'
        flag = 0
    }
})