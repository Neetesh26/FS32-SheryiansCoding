const text = document.querySelector("#search")

function debounce(fn , delay){
    let timer;
    return function (...args){
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn(...args)
        }, delay);
    }
}

function eventHandler(e){
    let ipt = e.target.value
    console.log(ipt);
    
}
text.addEventListener('input' , debounce(eventHandler , 500))