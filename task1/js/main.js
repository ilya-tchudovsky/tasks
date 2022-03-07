window.addEventListener('scroll',function() {
    let scroll =document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY>400)
})
function scrollToTop() {
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}