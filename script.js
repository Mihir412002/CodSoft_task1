const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY>0);
});


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('activate')
}