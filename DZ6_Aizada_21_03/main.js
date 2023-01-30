
const btn = document.querySelector('.btn')
const btnPrev = document.querySelector('.btn-prev')
const block = document.querySelector('.block')
let num = 1

btn.onclick = () => {
    num++
    fetch(`https://jsonplaceholder.typicode.com/todos/${num}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(todoItem => {
            console.log(todoItem)
            block.innerHTML = `
                <div class="card">
                    <h3>${todoItem.title}</h3>
                    <h3>${todoItem.completed}</h3>
                    <h3>${todoItem.id}</h3>
                </div>            
            `
        })
}

btnPrev.onclick=()=>{
    num--
    fetch(`https://jsonplaceholder.typicode.com/todos/${num}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(todoItem => {
            console.log(todoItem)
            block.innerHTML = `
                <div class="card">
                    <h3>${todoItem.title}</h3>
                    <h3>${todoItem.completed}</h3>
                    <h3>${todoItem.id}</h3>
                </div>            
            `
        })
}
//////////////////////////////////////

const data =() => {
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'GET',
        headers:{
            'Content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(result => console.log(result))
}
data()

