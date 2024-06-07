const sliderItem = document.querySelectorAll('.slider-item')
for (let index = 0; index < sliderItem.length; index++) {
    sliderItem[index].style.left = index * 100 + "%"
}

// Click chuyển ảnh 
function silderMove(i){
    sliderItems.style.transform = `translateX(-${i * 100}%)`
}
const sliderItems = document.querySelector('.slider-items')
const arrowRight = document.querySelector('.ri-arrow-right-line')
const arrowLeft = document.querySelector('.ri-arrow-left-line')
let i = 0
arrowRight.addEventListener('click',()=>{
    i++
    if(i < sliderItem.length){
        silderMove(i)
    }else{
        i = sliderItem.length - 1 
    }
})
arrowLeft.addEventListener('click',()=>{
    if(i > 0){
        i--
        silderMove(i)
    }else{
        i = 0 
    }
})

// Di chuyển ảnh tự động
function autoSlider(){
    if(i<sliderItem.length-1)
    {
        i++
        silderMove(i)
    }else{
        i = 0
        silderMove(i)
    }
}
setInterval(autoSlider,5000)
// Menubar responsive
const Menubar = document.querySelector('.header-bar-icon')
const headerNav = document.querySelector('.header-nav')
Menubar.addEventListener('click',()=>{
    headerNav.classList.toggle('active')
})