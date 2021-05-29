class Fetch {
    constructor() {
        this.prodFetch(this.limits,this.descs,'col-md-3');
        this.eventList();
    }
    prodFetch(limit,desc,col) {
        this.limits=limit;
        this.descs=desc;
        this.cols=col;
        const url = `https://fakestoreapi.com/products?limit=${this.limits}&sort=${this.descs}`;
        fetch(url)
            .then(resp => resp.json())
            .then((data) => {
                let result = data.map(el => {
                    return {
                        image: el.image,
                        title:el.title,
                        description:el.description,
                        price: el.price
                    }
                });
                console.log(result);

                let tmp = ``;
                for(let i=0; i< result.length; i++) {
                    tmp+=` 
            <div class=${this.cols}>
                <img src="${result[i].image}" class="card-img-top " style="height: 200px;width: 180px" alt="...">
                <div class="card-body ">
                    <div class="raiting"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></div>
                    <h5 class="product display-9 text-secondary">${result[i].title}</h5>
                    <p class="product_price fw-bold display-9 text-secondary d-flex d-md-none">${result[i].description}</p>
                    <p class="product_price fw-bold display-8">$${result[i].price}</p>
                    <div class="d-flex">
                        <div class="color_circles color_circles1 "></div>
                        <div class="color_circles color_circles2 "></div>
                        <div class="color_circles color_circles3 "></div>
                    </div>
                </div>
            </div>`
                }
                document.getElementById('output').innerHTML+=tmp;
            })
    }
    clearBody() {
        document.getElementById('output').innerHTML='';
    }
    eventList(){
        document.getElementById('result_btn_1').addEventListener('click',(e)=>{
            e.preventDefault();
            this.clearBody();
            product.prodFetch(this.limits,this.descs,'col-md-3');
        });

        document.getElementById('result_btn_2').addEventListener('click',(e)=>{
            e.preventDefault();
            this.clearBody();
            product.prodFetch(this.limits,this.descs,'col-12');
        });

        document.getElementById('result_btn_3').addEventListener('click',(e)=>{
            e.preventDefault();
            this.clearBody();
            product.prodFetch(this.limits,this.descs,'col-md-6');
        });

        document.getElementById('result_btn_4').addEventListener('click',(e)=>{
            e.preventDefault();
            this.clearBody();
            product.prodFetch(this.limits,this.descs,'col-md-4');
        });

        document.getElementById('result_btn_5').addEventListener('click',(e)=>{
            e.preventDefault();
            this.clearBody();
            product.prodFetch(this.limits,this.descs,'col-md-3');
        });

        document.querySelector('#par-select').addEventListener('change',(e)=>{
            e.preventDefault();
            this.clearBody();
            this.limits=document.querySelector('#par-select').value;
            product.prodFetch(this.limits,this.descs,'col-md-4');
        });

        document.querySelector('#sort-select').addEventListener('change',(e)=>{
            e.preventDefault();
            this.clearBody();
            this.descs=document.querySelector('#sort-select').value;
            product.prodFetch(this.limits,this.descs,'col-md-4');
        });

    }

}

let product=new Fetch();

/*  dropdown menus scripts start */
document.querySelector('.nav-button').addEventListener('click', function() {
    this.parentNode.parentNode.classList.toggle('closed') }, false);

document.querySelector('.size-button').addEventListener('click', function () {
    this.parentNode.parentNode.classList.toggle('size') }, false);

document.querySelector('.price-button').addEventListener('click', function() {
    this.parentNode.parentNode.classList.toggle('price') }, false);

document.querySelector('.color-button').addEventListener('click', function() {
    this.parentNode.parentNode.classList.toggle('color') }, false);

/*  dropdown menus scripts end */