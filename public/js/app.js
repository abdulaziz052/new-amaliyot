'use strict'
let resp = document.querySelector('#responsive-menu')
let ham__btn = document.querySelector('#hamburger-menu')
let close__btn = document.querySelector('#close-menu')
let body = document.querySelector('body')
let box = document.querySelectorAll('#box')


ham__btn.addEventListener('click', function () {
    resp.classList.remove('-left-full')
    resp.classList.add('left-0')
    body.classList.add('overflow-hidden')
})
close__btn.addEventListener('click', function () {
    resp.classList.remove('left-0')
    resp.classList.add('-left-full')
    body.classList.remove('overflow-hidden')
})
box.forEach(function (item, index) {
    item.addEventListener('click', function () {
        box.forEach(function (item, index) {
            item.classList.remove('active')
        })
        item.classList.add('active')
    })
})

const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 0;
priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 0) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 0 - (maxPrice / rangeInput[1].max) * 0 + "%";
            }
        }
    });
});
rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 0) + "%";
            range.style.right = 0 - (maxVal / rangeInput[1].max) * 0 + "%";
        }
    });
});