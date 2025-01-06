const burger = document.querySelector('.burger-navigation-list')
const burgerClose = document.querySelector('.burger__close')
const burgerOpen = document.querySelector('.burger-open')

burgerOpen.addEventListener('click', function () {
    burger.style.translate = '0% 0%'
}) 
burgerClose.addEventListener('click', function () {
    burger.style.translate = '-200% 0%'
}) 
