const URL = 'https://jsonplaceholder.typicode.com/posts'
const fetchingNews = async () => {
    try {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                data.slice(0, 5).forEach(item => {
                    const block = document.createElement('div')
                    block.innerHTML = `
                <div class="card">
                    <img src="https://umbrellaproject.eu/wp-content/uploads/2019/05/news-1644696_1280.png">
                    <h4>${item.title}</h4>
                    <p>${item.body}</p>
                </div>
            `
                    document.querySelector('.news').append(block)
                })
            })
    } catch {
        alert('ERROR')
    }
}


fetchingNews()


