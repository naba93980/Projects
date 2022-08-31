var containers = document.querySelectorAll('.counter-container')
containers.forEach((element) => {

    // console.log(element.children[1].innerHTML);
    // console.log(element.getAttribute("data-target") );
    // console.log(element.attributes );
    // console.log(element.attributes.getNamedItem("data-target"));
    // element.children[1].innerHTML = element.attributes.getNamedItem("data-target").value;

    updateCount = () => {
        let val = 0;
        let interval_Id = null;
        interval_Id = setInterval(() => {
            if (parseInt(element.children[1].innerHTML) < parseInt(element.attributes.getNamedItem("data-target").value)) {
                element.children[1].innerHTML = val.toString();
                val += 100;
                return;
            }
            clearInterval(interval_Id);
        }, 1)
    }
    updateCount();
})
