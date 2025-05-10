
const productContainer = document.querySelector('.products-container');
const btnContainerEl = document.querySelector('.companies');
const formEl = document.querySelector('.input-form');
const searchEl = document.querySelector('.search-input');


formEl.addEventListener('keyup',() =>{
    let serchValue = searchEl.value;

    let serchProduct = products.filter((product)=>{
        return product.title.toLowerCase().includes(serchValue.toLowerCase());
    })

    console.log("serchProduct",serchProduct);
    displayProducts(serchProduct);
})

window.addEventListener('DOMContentLoaded', ()=>{
    displayProducts(products);
    displayBtnItem();
    filterBtn();
})

function displayProducts(products) {

    productContainer.innerHTML = products.map((product)=>{
        const {id, title, image, price} = product;
        return `
            <article class="product" data-id="${id}"> 
                    <img src="${image}" 
                        alt="product-img"
                        class="product-img img">
                        <div>
                            <h5 class="product-name">${title}</h5>
                            <span class="product-price">${price}</span>
                        </div>
            </article>
        `;
    }).join("");
}

function displayBtnItem(menu){
    const categories = products.reduce((acc, curr)=>{
        if(!acc.includes(curr.company)){
            acc.push(curr.company);
        }
        return acc;
    },["all"])

    console.log('카테고리', categories)
    const categoryBtn = categories.map((category)=>{
        return `
            <button class="company-btn" data-id="${category}">${category} </button>
        `
    }).join("");
    btnContainerEl.innerHTML = categoryBtn;
}

function filterBtn() {
    const categoryBtn = document.querySelectorAll(".company-btn");

    categoryBtn.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            console.log("눌린 타이틀틀",e.currentTarget.dataset.id);
            const category = e.currentTarget.dataset.id;
            let filterMenu = products.filter((item)=>{
                if(category === 'all'){
                    return true; // 'all'이면 모든 항목을 반환
                }
                return item.company === category;
            })

            console.log("필터된 결과",filterMenu )

            // 필터링된 메뉴를 화면에 표시
            displayProducts(filterMenu);
        })
    })
}

