const btn = document.querySelector('.btn')

btn.onclick = () => {
    const reg = new XMLHttpRequest()
    reg.open("GET", "peoples.json")
    reg.setRequestHeader("Content-type","application/json")
    reg.send()
    reg.onload = () => {
        // console.log(reg.response)
        const data = JSON.parse(reg.response)
        data.forEach(people => {
            const div = document.createElement("div")
            const span = document.createElement("span")
            div.innerHTML = people.name
            span.innerHTML = people.age
            document.body.append(div)
            document.body.append(span)
        })
    }
}