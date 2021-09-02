const searchBook = () => {
    const searchField = document.getElementById('searchItem')
    const searchText = searchField.value;
    const error = document.getElementById('error')
    if (searchText === '') {
        error.innerText = 'Search Input Can not be Empty'
    };
    const url = `https://openlibrary.org/search.json?q=${searchText}`;

    fetch(url)
        .then(res => res.json())
        .then(data => getBooks(data.docs))


};


const getBooks = books => {
    console.log(books)
    if (books.length === 0) {
        document.getElementById('error').innerText = 'Result Not Found';
    }
    const searchResult = document.getElementById('result');

    searchResult.innerHTML = '';

    document.getElementById('searchItem').value = '';
    books.forEach(book => {
        console.log(book)
        document.getElementById('error').innerText = '';
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        
            <div class="col">
                <div class="card">
                    <img class="image" src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-title">${book?.author_name}</p>
                        <p class="card-title">Publisher:${book?.publisher?.slice(0, 2)}</p>
                        <p class="card-title">First Pusbished: ${book.first_publish_year}</p>
                        <p class="card-text"></p>
                    </div>
                </div>
            </div>
            `;
        searchResult.appendChild(div)
    });
}
