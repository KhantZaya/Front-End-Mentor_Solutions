const accordions = document.querySelectorAll('.accordion')

accordions.forEach((accordion) => {
    const que = accordion.querySelector('.question-container')
    que.addEventListener('click',() => {
        accordions.forEach((acc) => {
            if(acc != accordion){
                acc.classList.remove('active')
            }
        })
        accordion.classList.toggle('active')
    })
})
