document.querySelector('#reload').addEventListener('click', function (){location.reload()});

function prodFetch() {
    const url = `https://fakestoreapi.com/products`;
    fetch(url)
        .then(resp => resp.json())
        .then((data) => {
            const result = data.map(movie => {
                return {
                    image: movie.image,
                    title:movie.title,
                    price: movie.price
                }
            });
            console.log(result);

            let tmp=``;
            for(let i=0; i< result.length; i++) {
                tmp+= `<div>
                    <img src="${result[i].image}" alt="image"/>
                    <div class="star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></div>
                    <h5>${result[i].title}</h5>
                    <h4>$${result[i].price}</h4>
               </div>`
            }
            document.getElementById('output').innerHTML+=tmp;
        })
}
document.getElementById('many').addEventListener('click',myFunction);
function myFunction(e) {
    e.preventDefault();
    prodFetch();
}