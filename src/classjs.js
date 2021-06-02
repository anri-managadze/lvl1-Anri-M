document.querySelector('#reload').addEventListener('click', function (){location.reload()});


class Fetch {
    row=document.querySelector("#output");
    result=[];
    constructor() {
        this.prodFetch();
        this.genCard1(document.querySelector("#output").className='row row-cols-1 row-cols-md-4');
        this.clearBody();
        this.eventList();
    }
    prodFetch(limit,desc) {
        this.limits=limit;
        this.descs=desc;
        const url = `https://fakestoreapi.com/products?limit=${this.limits}&sort=${this.descs}`;
        fetch(url)
            .then(resp => resp.json())
            .then((data) => {
                this.result = data.map(el => {
                    return {
                        image: el.image,
                        title:el.title,
                        description:el.description,
                        price: el.price
                    }
                });
                console.log(this.result);
                this.genCard1(this.row.className='row row-cols-1 row-cols-md-4');
            })
    };
    genCard1 (){
                let tmp = ``;
                for(let i=0; i< this.result.length; i++) {
                    tmp+=` 
            <div class='col'>
                <img src="${this.result[i].image}" class="card-img-top img-fluid"  alt="...">
                <div class="card-body ">
                    <div class="raiting"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></div>
                    <h5 class="product display-9 text-secondary">${this.result[i].title}</h5>
                    <p class="product_price fw-bold display-8">$${this.result[i].price}</p>
                    <div class="d-flex">
                        <div class="color_circles color_circles1 "></div>
                        <div class="color_circles color_circles2 "></div>
                        <div class="color_circles color_circles3 "></div>
                    </div>
                </div>
            </div>`
                }
                document.getElementById('output').innerHTML+=tmp;
            };

    genCard2 (roww,coll){
        this.row.className=`${roww}`
        let tmp = ``;
        for(let i=0; i< this.result.length; i++) {
            tmp+=` 
            <div class=${coll}>
                <img src="${this.result[i].image}" class="card-img-top img-fluid mt-3" style="max-width: 150px; max-height: 200px" alt="...">
                <div class="card-body mt-3">
                    <div class="raiting"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></div>
                    <h5 class="product display-9 text-secondary">${this.result[i].title}</h5>
                    <p class="product_price fw-bold display-9 text-secondary">${this.result[i].description}</p>
                    <p class="product_price fw-bold display-8">$${this.result[i].price}</p>
                    <div class="d-flex">
                        <div class="color_circles color_circles1 "></div>
                        <div class="color_circles color_circles2 "></div>
                        <div class="color_circles color_circles3 "></div>
                    </div>
                </div>
            </div>`
        }
        document.getElementById('output').innerHTML+=tmp;
    }
    clearBody() {
        document.getElementById('output').innerHTML='';
    }

    eventList(){
        document.getElementById('result_btn_1').addEventListener('click',(e)=>{
            e.preventDefault();
            this.clearBody()
            this.genCard1(this.row.className='row row-cols-1 row-cols-md-4');
        });

        document.getElementById('result_btn_2').addEventListener('click',(e)=>{
            e.preventDefault();
            this.clearBody()
            this.genCard2(this.row.className='row row-cols-1','d-flex flex-row ');
        });

        document.getElementById('result_btn_3').addEventListener('click',(e)=>{
            e.preventDefault();
            this.clearBody()
            this.genCard1(this.row.className='row row-cols-2');
        });

        document.getElementById('result_btn_4').addEventListener('click',(e)=>{
            e.preventDefault();
            this.clearBody()
            this.genCard1(this.row.className='row row-cols-3');
        });

        document.getElementById('result_btn_5').addEventListener('click',(e)=>{
            e.preventDefault();
            this.clearBody()
            this.genCard1(this.row.className='row row-cols-4');
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