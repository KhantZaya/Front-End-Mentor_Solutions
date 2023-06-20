const nextBtn = document.querySelector('.next-icon')
const prevBtn = document.querySelector('.prev-icon')

const img = document.querySelector('.ppl-img')
const content = document.querySelector('.content')
const name = document.querySelector('.name')
const job = document.querySelector('.job')

let index = 0
nextBtn.addEventListener('click', () => {
    index++
    loadContent(index)
})
prevBtn.addEventListener('click', () => {
    index--
    loadContent(index)
})

function loadContent () {
    if (index > datas.length-1) {
        index = 0
    }else if ( index < 0){
        index = datas.length-1
    }
    console.log(index);
    let data = datas[index]
    img.src = data.image
    content.innerText = data.content
    name.innerText = data.name
    job.innerText = data.job
}


const datas = [
    {
        name : "Tanya Sinclair",
        job: "UX Engineer",
        content: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
                    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
                    excited about the future. ”`,
        image: "./images/image-tanya.jpg"
    },
    {
        name : "John Tarkpor",
        job: "Junior Front-end Developer",
        content: ` “ If you want to lay the best foundation possible I’d recommend taking this course. 
                    The depth the instructors go into is incredible. I now feel so confident about 
                    starting up as a professional developer. ”`,
        image: "./images/image-john.jpg"
    }
]