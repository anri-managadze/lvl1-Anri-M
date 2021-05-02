function searchShow(query) {
    const url = `https://itunes.apple.com/search?term=${query}`;
    fetch(url)
        .then(resp => resp.json())
        .then((data) => {
            console.log(data);
        })
}
function myFunction() {
    const field = document.getElementById("myForm").querySelector('#text');
    searchShow(field.value);
}
