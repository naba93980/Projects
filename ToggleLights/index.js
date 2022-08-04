const on = document.getElementById('on');
const off = document.getElementById('off');
const img = document.getElementById('image');
on.addEventListener('click', () => {
    const src = img.getAttribute('src');
    if (src == './lighton.png') {
        alert('already on');
    }
    else {
        img.setAttribute('src', './lighton.png');
    }
})
off.addEventListener('click', () => {
    const src = img.getAttribute('src');
    if (src == './lightoff.png') {
        alert('already off');
    }
    else {
        img.src = "./lightoff.png";  //this technique is good
    }
})