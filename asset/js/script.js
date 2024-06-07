const sliderItem = document.querySelectorAll('.slider-item')
for (let index = 0; index < sliderItem.length; index++) {
    sliderItem[index].style.left = index * 100 + "%"
}

const sliderItems = document.querySelector('.slider-items')
const arrowRight = document.querySelector('.ri-arrow-right-line')
const arrowLeft = document.querySelector('.ri-arrow-left-line')
let i = 0
arrowRight.addEventListener('click',()=>{
    i++
    if(i < sliderItem.length){
        sliderItems.style.transform = `translateX(-${i * 100}%)`
    }else{
        i = sliderItem.length - 1 //Giữ i ở giới hạn trên
    }
})
arrowLeft.addEventListener('click',()=>{
    if(i > 0){
        i--
        sliderItems.style.transform = `translateX(-${i * 100}%)`
    }else{
        i = 0 // Giữ i ở giới hạn dưới
    }
})