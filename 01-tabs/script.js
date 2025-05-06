const tabs = document.querySelector('.btn-container');
const btns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.about-info');


tabs.addEventListener('click',(e)=>{
    console.log(e.target);
    btns.forEach((btn)=>{
        btn.classList.remove('active');
    })
    e.target.classList.add('active');

    console.log(btns)
    const id = e.target.dataset.id;

    contents.forEach((content)=>{
        content.classList.remove('active');

        if(content.id === id){
            content.classList.add('active');
            content.computedStyleMap.display = 'block';

        }

        console.log("contents",contents)
    })
    
})






