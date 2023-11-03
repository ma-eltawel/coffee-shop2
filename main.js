let header = document.querySelector("header"), nav = document.querySelector("nav"), search = 
    document.querySelector(".search-box");

window.onscroll = () => {
    nav.classList.remove('active');
    search.classList.remove('active');
}

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 20);
});

document.querySelector("#menu-but").onclick = () => {
    nav.classList.toggle('active');
    search.classList.remove('active');
}

document.querySelector("#search-but").onclick = () => {
    search.classList.toggle('active');
    nav.classList.remove('active');
}