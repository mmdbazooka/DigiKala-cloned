let slider = document.querySelector(".content > .container > .slider")
let gal = document.querySelector(".content > .container > .slider > .gal")
let gal2 = document.querySelector(".slider-2 > .left > .gal-2")
let gal3 = document.querySelector(".favorite-brands > .slider-3 > .gal-3")
let right = document.querySelector(".content > .container > .slider > .right")
let left = document.querySelector(".content > .container > .slider > .left")
let right2 = document.querySelector(".slider-2 > .left > .right-2")
let left2 = document.querySelector(".slider-2 > .left > .left-2")
let right3 = document.querySelector(".favorite-brands > .slider-3 > .right-3")
let left3 = document.querySelector(".favorite-brands > .slider-3 > .left-3")
let buts = document.querySelectorAll(".content > .container > .slider > ul > li")
let pos = [0,0,0]

slider.onmouseover = function() {
    left.style.opacity = "1"
    right.style.opacity = "1"
}
slider.onmouseout = function() {
    left.style.opacity = "0"
    right.style.opacity = "0"
}

right.onclick = function(){goRight(0,100,1000,gal)}
left.onclick = function(){goLeft(0,100,100,gal)}

function goRight(i,step,limit,gallery) {
    pos[i] = pos[i] - step
    gallery.style.left = pos[i] + "%"
    if(pos[i] == -limit) {
        pos[i] = 0
        gallery.style.left = pos[i] + "%"
    }
    changeTab(pos[i] / -step)
}
function goLeft(i,step,limit,gallery) {
    pos[i] = pos[i] + step
    gallery.style.left = pos[i] + "%"
    if(pos[i] == limit) {
        pos[i] = -900
        gallery.style.left = pos[i] + "%"
    }
    changeTab(pos[i] / -step)
}
setInterval(() => {
    pos[0] = pos[0] + 100
    gal.style.left = pos[0] + "%"
    if(pos[0] == 100) {
        pos[0] = -900
        gal.style.left = pos[0] + "%"
    }
    changeTab(pos[0] / -100)
}, 5000);
function changeTab(num) {
    pos[0] = -100*num
    gal.style.left = pos[0] + "%"
    for (let i = 0; i < buts.length; i++) {
        buts[i].style.background = "#ccc"
        buts[i].style.width = "5px"
    }
    buts[num].style.background = "#fff"
    buts[num].style.width = "20px"
}
right2.onclick = function() {
    pos[1] = pos[1] - 20
    gal2.style.left = pos[1] + "%"
    if(pos[1] == 0) right2.style.visibility = "hidden"
    if(pos[1] == 60) left2.style.visibility = "visible"
}
left2.onclick = function() {
    pos[1] = pos[1] + 20
    gal2.style.left = pos[1] + "%"
    if(pos[1] == 20) right2.style.visibility = "visible"
    if(pos[1] == 80) left2.style.visibility = "hidden"
}
right3.onclick = function() {
    pos[2] = pos[2] - 170
    gal3.style.left = pos[2] + "px"
    if(pos[2] == 0) right3.style.visibility = "hidden"
    if(pos[2] == 510) left3.style.visibility = "visible"
}
left3.onclick = function() {
    pos[2] = pos[2] + 170
    gal3.style.left = pos[2] + "px"
    if(pos[2] == 170) right3.style.visibility = "visible"
    if(pos[2] == 680) left3.style.visibility = "hidden"
}