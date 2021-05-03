function searchShow(query) {
    const url = `https://itunes.apple.com/search?term=${query}`;
    fetch(url)
        .then(resp => resp.json())
        .then((data) => {
            const result = data.results.map(movie => {
                return {
                    artistName: movie.artistName,
                    trackName:movie.trackName,
                    trackViewUrl:movie.trackViewUrl
                }
            });
            console.log(result);

            let tmp=`<thead><tr><th>Name</th><th>TrackName</th><th>TrackUrl</th></tr></thead>`;
            for(let i=0; i< result.length; i++){
                tmp+=`<tbody><tr><td>${result[i].artistName}</th><td>${result[i].trackName}</td><td><a href="${result[i].trackViewUrl}" target="_blank">Open</a></td></tr></tbody>`
            }
            console.log(tmp);

            document.getElementById('output').innerHTML+=tmp;
        })
}


function myFunction() {
    const field = document.getElementById("myForm").querySelector('#text');
    searchShow(field.value);
}
