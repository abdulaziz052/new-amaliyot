'use strict'
let resp = document.querySelector('#responsive-menu')
let ham__btn = document.querySelector('#hamburger-menu')
let close__btn = document.querySelector('#close-menu')
let body = document.querySelector('body')

ham__btn.addEventListener('click' , function() {
    resp.classList.remove('-left-full')
    resp.classList.add('left-0')
    body.classList.add('overflow-hidden')
})
close__btn.addEventListener('click' , function() {
    resp.classList.remove('left-0')
    resp.classList.add('-left-full')
    body.classList.remove('overflow-hidden')

    
})