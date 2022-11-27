let cafesArray = null
let placesArray = null
let tableBody = document.querySelector('table').getElementsByTagName('tbody')[0];


let places = fetch('https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json')
    .then(res => {
        return res.json();
    }).then(body => {
        placesArray = body.places;
        let cafes = fetch('https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json')
            .then(res => {
                return res.json();
            })
            .then(body => {
                cafesArray = body.cafes;
                let newObject = cafesArray.map((ele) => {
                    let place = placesArray.filter(e => e.id == ele.location_id);
                    let dataObj = {
                        address: place[0].locality,
                        postalCode: place[0].postal_code,
                        lat: place[0].lat,
                        long: place[0].long
                    };
                    return dataObj;
                })
                for (let i = 0; i < cafesArray.length; i++) {
                    let row = tableBody.insertRow(i);
                    let col1 = row.insertCell(0);
                    col1.classList.add("column1");
                    col1.innerText = `${i + 1}`;

                    let col2 = row.insertCell(1);
                    col2.classList.add("column2");
                    col2.innerText = cafesArray[i].name;

                    let col3 = row.insertCell(2);
                    col3.classList.add("column3");
                    col3.innerText = newObject[i].address;

                    let col4 = row.insertCell(3);
                    col4.classList.add("column4");
                    col4.innerText = newObject[i].postalCode;

                    let col5 = row.insertCell(4);
                    col5.classList.add("column5");
                    col5.innerText = newObject[i].lat;

                    let col6 = row.insertCell(5);
                    col6.classList.add("column6");
                    col6.innerText = newObject[i].long;
                }
                const searchInput = document.getElementById("search-wrapper");
                const rows = document.querySelectorAll("tbody tr");
                searchInput.addEventListener("keyup", function (event) {
                    const q = event.target.value.toLowerCase();
                    rows.forEach((row) => {
                        console.log(row.querySelector(".column2"));
                        row.querySelector(".column2").innerHTML.toLowerCase().startsWith(q)
                            ? (row.style.display = "table-row")
                            : (row.style.display = "none");
                    });
                });
            }).catch((err) => {
                console.log(err);
            })

    }).catch((err) => {
        console.log(err);
    })

