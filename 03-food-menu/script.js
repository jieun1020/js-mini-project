const menu = [
    {
        id: 1,
        title: "pancakes",
        category: "breakfast",
        price: 3000,
        img: "./images/item-1.jpeg",
        desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
    },
    {
        id: 2,
        title: "diner",
        category: "lunch",
        price: 1000,
        img: "./images/item-2.jpeg",
        desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
    },
    {
        id: 3,
        title: "milkshake",
        category: "shakes",
        price: 2000,
        img: "./images/item-3.jpeg",
        desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 8000,
        img: "./images/item-4.jpeg",
        desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 3000,
        img: "./images/item-5.jpeg",
        desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 7000,
        img: "./images/item-6.jpeg",
        desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 3000,
        img: "./images/item-7.jpeg",
        desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 4000,
        img: "./images/item-8.jpeg",
        desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 1000,
        img: "./images/item-9.jpeg",
        desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
    },
    {
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 2000,
        img: "./images/item-10.jpeg",
        desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil repellendus repellat exercitationem commodi! Cumque perferendis molestias iste aliquam, nulla, qui reprehenderit ea, sequi eveniet dolorem praesentium aliquid aperiam vel libero!`,
    },
];

window.addEventListener('DOMContentLoaded', ()=>{
    displayBtnItem();
    displayMenu(menu);
    filterBtn()
});



const sectionCenterEl = document.querySelector('.section-center');
const btnContainerEl = document.querySelector('.btn-container');


function displayBtnItem(){
    //조건처리
    const categories = menu.reduce((acc, curr) =>{
        if(!acc.includes(curr.category)){
            acc.push(curr.category);
        }
        return acc;
    },['all'])
    //html을 만들어준다
    const categoryBtn = categories.map((category)=>{
        return `
            <button type="button" class="filter-btn" data-id="${category}">${category} </button>
        `
    }).join("");

    console.log('btnContainerEl', btnContainerEl);
    console.log('카테고리', categoryBtn)
    //붙여준다.
    btnContainerEl.innerHTML = categoryBtn;
}


function filterBtn(){
    const menuBtns = document.querySelectorAll(".filter-btn");
    console.log("menuBtns", menuBtns)

    menuBtns.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            const category = e.currentTarget.dataset.id;
                    
            let filterMenu = menu.filter((item) => {
                if (category === 'all') {
                    return true; // 'all'이면 모든 항목을 반환
                }
                return item.category === category;
            });

            console.log("필터된 결과",filterMenu )
            // 필터링된 메뉴를 화면에 표시
            displayMenu(filterMenu);
        })
    })

}

function displayMenu(menu){
    let menuObject = menu.map((menu)=>{
        return `
        <article class="menu-item">
                <img src="${menu.img}" alt="${menu.categories}" class="photo">
                <div class="item-info">
                    <div class="header">
                        <h4>${menu.title}</h4>
                        <h4 class="price">${menu.price}원</h4>
                    </div>
                    <p class="item-text">
                        ${menu.desc}
                    </p>
                </div>
                
            </article>
        `
    }).join("");

    //붙여넣기기
    sectionCenterEl.innerHTML = menuObject
    // console.log(menuObject)
}

