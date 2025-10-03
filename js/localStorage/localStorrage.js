var form  = document.querySelector('form')
var input  = document.querySelector('input')


var tasks = JSON.parse(localStorage.getItem('items')) || []
form.addEventListener('submit' , (e)=>{
    e.preventDefault()
    console.log(input.value);
    let newVal = input.value.trim()  
    if(newVal === '') return  

    tasks.push(newVal)
    localStorage.setItem('items' , JSON.stringify(tasks))
    let ul = document.createElement('ul')
    let li = document.createElement('li')
    li.textContent = newVal
    ul.appendChild(li)
    document.body.appendChild(ul)
    console.log(tasks);

    input.value= ''
})

window.addEventListener('load', () => {

     tasks = JSON.parse(localStorage.getItem('items')) || []
    console.log(tasks);
})

