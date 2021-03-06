//get search text
const search = () => {
    const search = document.getElementById('search-text');
    const searchText = search.value;
    // console.log(searchText);


    // manage book api
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => searchResult(data.docs))
    search.value = '';
};

const searchResult = (books) => {

    const showResult = document.getElementById('search-result');
    const length = books.length;
    // console.log(books.length);
    const resultNo = document.getElementById('result-no');
    resultNo.innerText = `search result found ${length}`;
    showResult.textContent = '';


    if (books.length === 0) {
        const error = document.getElementById('error');
        error.style.display = 'block';
    }


    else {
        const error = document.getElementById('error');
        error.style.display = 'none';

        books.forEach(book => {

            // console.log(book);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
        <div class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">Author: ${book.author_name}</p>
                <p class="card-text">Publisher: ${book.publisher[0]}</p>
                <p class="card-text">First publish year: ${book.first_publish_year}</p>
            </div>
        </div>
        `;
            showResult.appendChild(div);
        })

    }


}

