const img=document.querySelector('.image')
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {

    setInterval(() => {
    setTimeout(() => {
        img.innerHTML = '<i class="fa-solid fa-temperature-empty fa-4x"></i>';

    },1000)
    setTimeout(() => {
        img.innerHTML = '<i class="fa-solid fa-temperature-low fa-4x"></i>';

    },2000)
    setTimeout(() => {
        img.innerHTML = '<i class="fa-solid fa-temperature-quarter fa-4x"></i>';

    },3000)
    setTimeout(() => {
        img.innerHTML = '<i class="fa-solid fa-temperature-half fa-4x"></i>';

    },4000)
    setTimeout(() => {
        img.innerHTML = '<i class="fa-solid fa-temperature-three-quarters fa-4x"></i>';

    },5000)
    setTimeout(() => {
        img.innerHTML = '<i class="fa-solid fa-temperature-full fa-4x"></i>';

    },6000)

    }, 7000)
})


