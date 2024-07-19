'use strict'
let resp = document.querySelector('#responsive-menu')
let ham__btn = document.querySelector('#hamburger-menu')
let close__btn = document.querySelector('#close-menu')
let body = document.querySelector('body')
let box = document.querySelectorAll('#box')
let close_nav_btn = document.querySelectorAll('#close-nav-btn')
let filter_box = document.querySelectorAll('#filter-box')
let rating_boxes = document.querySelectorAll('#rating_boxes')
let header_btn = document.querySelector('#header-menus-btn')
let header_menu = document.querySelector('#header-menus')


if (document.querySelector('#responsive-menu')) {
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
}

close_nav_btn.forEach(function (item, index) {
    item.addEventListener('click', function () {
        filter_box[index].classList.toggle('hidden')
        item.classList.toggle('rotate-180')

    })
})


header_btn.addEventListener('click' , function(){
    header_menu.classList.toggle('hidden')
})



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
rating_boxes.forEach(function (item, index) {
    item.addEventListener('click', function () {
        rating_boxes.forEach(function (item, index) {
            item.classList.remove('active')
        })
        item.classList.add('active')
    })
})

const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
let priceGap = 0;
priceInput.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "input-min") {
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 0) + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 0 - (maxPrice / rangeInput[1].max) * 0 + "%";
            }
        }
    });
});
rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);
        if ((maxVal - minVal) < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 0) + "%";
            range.style.right = 0 - (maxVal / rangeInput[1].max) * 0 + "%";
        }
    });
});
const rangeInput1 = document.querySelectorAll(".range-input1 input"),
    priceInput1 = document.querySelectorAll(".price-input1 input"),
    range1 = document.querySelector(".slider1 .progress1");
let priceGap1 = 0;
priceInput1.forEach(input => {
    input.addEventListener("input1", e => {
        let minPrice1 = parseInt(priceInput1[0].value),
            maxPrice1 = parseInt(priceInput1[1].value);

        if ((maxPrice1 - minPrice1 >= priceGap1) && maxPrice1 <= rangeInput1[1].max) {
            if (e.target.className === "input-min1") {
                rangeInput1[0].value = minPrice1;
                range.style.left = ((minPrice1 / rangeInput1[0].max) * 0) + "%";
            } else {
                rangeInput1[1].value = maxPrice1;
                range.style.right = 0 - (maxPrice1 / rangeInput1[1].max) * 0 + "%";
            }
        }
    });
});
rangeInput1.forEach(input => {
    input.addEventListener("input", e => {
        let minVal1 = parseInt(rangeInput1[0].value),
            maxVal1 = parseInt(rangeInput1[1].value);
        if ((maxVal1 - minVal1) < priceGap1) {
            if (e.target.className === "range-min1") {
                rangeInput1[0].value = maxVal1 - priceGap1
            } else {
                rangeInput1[1].value = minVal1 + priceGap1;
            }
        } else {
            priceInput1[0].value = minVal1;
            priceInput1[1].value = maxVal1;
            range.style.left = ((minVal1 / rangeInput[0].max) * 0) + "%";
            range.style.right = 0 - (maxVal1 / rangeInput[1].max) * 0 + "%";
        }
    });
});