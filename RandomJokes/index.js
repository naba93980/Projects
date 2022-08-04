const btn = document.querySelector('button')
const para = document.querySelector('p');
btn.addEventListener('click', () => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => {
            console.log( response );   
            return response.json();
        }).then((res) => {
            para.innerText = res.value;
        console.log( res.value ); 
    })
})

//the last callback function with res as argument in line 8 creates closures with callback function of addeventlistener in line 3 which in turn creates closure with the global scope

//https://itnext.io/javascript-event-listeners-delegation-vs-closures-8fe52ac49872