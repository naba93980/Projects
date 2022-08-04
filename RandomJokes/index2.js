const btn = document.querySelector('button')
const para = document.querySelector('p');
btn.addEventListener('click', () => {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then((response) => { 
            return response.json();
        })
        .then((res) => {
            console.log(res.joke);
            para.innerText = res.joke;  
    })
})

