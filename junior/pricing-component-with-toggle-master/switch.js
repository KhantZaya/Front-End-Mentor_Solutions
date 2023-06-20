const checkBox = document.querySelector('.check-box')
const priceOne= document.querySelector('.price-1')
const priceTwo= document.querySelector('.price-2')
const priceThree= document.querySelector('.price-3')

checkBox.addEventListener('click',() => {
    if (checkBox.checked) {
        priceOne.innerHTML = "$ 19.99"
        priceTwo.innerHTML = "$ 24.99"
        priceThree.innerHTML = "$ 39.99"
    }else {
        priceOne.innerHTML = "$ 199.99"
        priceTwo.innerHTML = "$ 249.99"
        priceThree.innerHTML = "$ 399.99"
    }
})

