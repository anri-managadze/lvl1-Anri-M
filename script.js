function searchShow(query) {
    const url = `https://itunes.apple.com/search?term=${query}`;
    fetch(url)
        .then(resp => resp.json())
        .then((data) => {
            const result = data.results.map(movie => {
                return {
                    artworkUrl100: movie.artworkUrl100,
                    artistName: movie.artistName,
                    trackName:movie.trackName,
                    previewUrl:movie.previewUrl
                }
            });
            console.log(result);

            /*  Table form script
            let tmp=`<thead><tr><th></th><th>Name</th><th>TrackName</th><th>TrackUrl</th></tr></thead>`;
            for(let i=0; i< result.length; i++){
                tmp+=`<tbody><tr><td><img src="${result[i].artworkUrl100}" alt="image"></td><td>${result[i].artistName}</td><td>${result[i].trackName}</td><td><audio controls><source src="${result[i].previewUrl}"></audio></td></tr></tbody>`
            }
            console.log(tmp);
             */

            let tmp=``;
            for(let i=0; i< result.length; i++) {
            tmp+= `<div>
                    <img src="${result[i].artworkUrl100}" alt="image"/>
                    <h4>${result[i].artistName}</h4>
                    <h5>${result[i].trackName}</h5>
                    <audio controls><source src="${result[i].previewUrl}"></audio>
               </div>`
            }
            document.getElementById('output').innerHTML+=tmp;
        })
}

document.getElementById('myForm').addEventListener('submit',myFunction);
function myFunction(e) {
    e.preventDefault();
    const field = document.getElementById("myForm").querySelector('#text');
    searchShow(field.value);
}

//reload
document.getElementById('reload').addEventListener('click',myReload);
function myReload(e) {
    e.preventDefault();
    location.reload();
}

//menu
function toggleMenu() {
    let getMenu = document.querySelector(".mainMenu");
    getMenu.classList.toggle("hamburger");
}
let getHamburger = document.querySelector("#toggle-bar");
getHamburger.addEventListener("click", toggleMenu);



// free music
function freeMusic() {
    const url = `https://itunes.apple.com/search?term=a`;
    fetch(url)
        .then(resp => resp.json())
        .then((data) => {
            const result = data.results.map(movie => {
                return {
                    artworkUrl100: movie.artworkUrl100,
                    artistName: movie.artistName,
                    trackName:movie.trackName,
                    previewUrl:movie.previewUrl
                }
            });
            console.log(result);

            let tmp=``;
            for(let i=0; i< result.length; i++) {
                tmp+= `<div>
                    <img src="${result[i].artworkUrl100}" alt="image"/>
                    <h4>${result[i].artistName}</h4>
                    <h5>${result[i].trackName}</h5>
                    <audio controls><source src="${result[i].previewUrl}"></audio>
               </div>`
            }
            document.getElementById('output').innerHTML+=tmp;
        })

}
document.getElementById('pl_btn').addEventListener('click',myFunction1);
function myFunction1(e) {
    e.preventDefault();
    freeMusic();
}