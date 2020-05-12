// btn : menu
const btn__menu = document.querySelector('#btn__menu');
// event : menu
btn__menu.addEventListener('click', ()=>{
    let nav = document.querySelector('#nav');
    let header = document.querySelector('#header');    
    let menu = document.querySelector('#btn__menu i');
    
    if (nav.style.top == '-200px') {
        btn__menu.style.zIndex = '100';
        nav.style.top = '0';
        header.style.paddingTop = '200px';
    }
    if (menu.classList == 'fas fa-bars') {
        menu.classList = 'fas fa-times';
        btn__menu.style.top = '0';
        btn__menu.style.left = '0';
        btn__menu.style.background =  '#042331';
        btn__menu.style.borderRadius = '0px';
        btn__menu.style.color = '#FFF';
    }
    else {
        menu.classList = 'fas fa-bars';
        btn__menu.style.top = '10px';
        btn__menu.style.left = '10px';
        btn__menu.style.background = 'transparent';
        btn__menu.style.borderRadius = '10px';
        btn__menu.style.color = '#042331';
        nav.style.top = '-200px';
        header.style.paddingTop = '0';
    }
});