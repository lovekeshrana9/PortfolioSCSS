var element = document.querySelector('.menu-btn');
var hamburger = document.querySelector('.menu-btn-burger');
var nav = document.querySelector('.nav');
var menuNav = document.querySelector('.menu-nav');
var menuNavItem = document.querySelectorAll('.menu-nav-item');
let arr = [hamburger,nav, menuNav ];

let showMenu = false;
element.addEventListener('click',()=>{
    if(showMenu){
        arr.forEach(element=>{
         element.classList.remove('open');   
        })
        menuNavItem.forEach(element=>{
            element.classList.remove('open');
        })
    }    
    else{
        arr.forEach(element=>{
            element.classList.add('open');   
        })
        menuNavItem.forEach(element=>{
            element.classList.add('open');
        })

    }
    showMenu = !showMenu;
})