const searchBook = () => {
    const searchField = document.getElementById('searchItem')
    const searchText = searchField.value;
    const error = document.getElementById('error')
    if (searchText === '') {
        error.innerText = 'Search Input Can not be Empty'
    }
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => getBooks(data.docs))
    if (data.status === 404) {
        error.innerText = 'No Result Found'
    }
};


const getBooks = books => {

    const searchResult = document.getElementById('result');
    searchResult.innerHTML = '';
    document.getElementById('searchItem').value = '';
    books.forEach(book => {
        console.log(book)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="col">
            <div class="card">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-title">${book?.author_name}</p>
                    <p class="card-title">Publisher:${book.publisher}</p>
                    <p class="card-title">First Pusbished: ${book.first_publish_year}</p>
                    <p class="card-text"></p>
                </div>
            </div>
        </div>
        `;
        searchResult.appendChild(div)
    })
}
