var c = window.location.search.slice(1).replace(/=/g, '":"').replace("id", "").replace(":", "").replace('""', '');

// c;
// alert(c);
var b = parseInt(c, 10);
// alert(b);

fetch('https://fakestoreapi.com/products')
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {

        for (var i = 0; i <= myJson.length; i++) {


            if (myJson[i].id == b) {

                // alert(myJson[i].title);
                // alert(myJson[i].price);
                // alert(myJson[i].description);
                // alert(myJson[i].image);

                // alert(myJson[i].title);
                document.getElementById('output').innerHTML += `<div class="inside"><h5 id="ids">${myJson[i].id}<h5>
               <div class = "image"> <img  id="myImg" src="${myJson[i].image}" id="image" alt="Trulli" width="200" height="200"><div>
                <div class="tittle">
                    <h1 id="tittleof">${myJson[i].title}</h1>
                    <h3>${myJson[i].category}</h3>
                    <h3>${myJson[i].rating.rate}</h3>
                    <h3>${myJson[i].rating.count}</h3>

                </div>
                <div class="price"><h1>price is</h1>
                    <h3 id="money">${myJson[i].price}</h3></br>
                 
                </div>
            </div class="description"> <div class="description">  <p>${myJson[i].description}</p></div>`;






            }



        }


    })