// var c = window.location.search
//     .slice(1)
//     .replace(/=/g, '":"')
//     .replace("id", "")
//     .replace(":", "")
//     .replace('""', "");
// var b = parseInt(c, 10);
// window.localStorage.setItem(b, b);
var totalofall = 0;
// var arr = [];
let price_ = [];
let newprice_ = []
fetch("https://fakestoreapi.com/products")
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        for (var i = 0; i <= myJson.length; i++) {
            if (localStorage.getItem(`${i}`) !== null) {
                for (var j = 0; j <= myJson.length; j++) {
                    if (myJson[j].id == i) {
                        document.getElementById("main").innerHTML += `<div class="inside" id="main${i}">
                            <img id="myImg" src="${myJson[j].image}" id="image" alt="Trulli" width="300" height="300"><br>
                         <div class="tittle">
                                   <h4 id="tittleof"></h4>
                                   <h5 id="till">${myJson[j].title}</h5>
                                   <div id="price">
                                    <h5 id="till">price</h5>
                                    <h4 class="price1" id="price${i}">${myJson[j].price}₹</h4>                                 
                                  </div>
                                  <div id="button">
                                    <h4 id="till">Quantity</h4>
                                    <button id="till" class="buttonminpls" onclick="addbutton(this.nextElementSibling.id, ${i},${myJson[j].price})"><i class="fas fa-plus-square"></i></button>
                                    <input onkeyup="keyprss(this.value,${i},${myJson[j].price})" type="number" id="till${i}" class="till2"  value="1">
                                    <button id="till" class="buttonminpls" onclick="minbutton(this.previousElementSibling.id, ${i},${myJson[j].price})"><i class="fas fa-minus-square"></i></button>
                                </div>   
                                <div class ="deletebutton"> <button onclick="removecart(this.parentNode.parentNode.parentNode.id,${i})" class="btn-hover color-2">DELETE FROM CART</button></div>              
                            </div>
                        </div>`;
                        price_.push(myJson[j].price);

                        newprice_ = Object.values(price_);

                        var sum = newprice_.reduce(function(a, b) {
                            return a + b;
                        }, 0);

                        totalofall = sum;
                        document.getElementById('totalofall').innerHTML = totalofall;
                        break;
                    }
                }
            }
        }
    });


const addbutton = (siblingid, index, price) => {
    document.getElementById(`price${index}`).innerHTML = price * (document.getElementById(`${siblingid}`).value++ + 1);
    document.getElementById('totalofall').innerHTML = totalofall + parseFloat(document.getElementById(`price${index}`).innerHTML) - price;

};

const minbutton = (psiblingid, index, price) => {

    if (!(document.getElementById(`till${index}`).value == 1)) {
        document.getElementById(`price${index}`).innerHTML = price * (document.getElementById(`${psiblingid}`).value-- - 1);
        document.getElementById('totalofall').innerHTML = totalofall + parseFloat(document.getElementById(`price${index}`).innerHTML) - price;
    }
};

const keyprss = (inputvalue, index, price) => {
    document.getElementById(`price${index}`).innerHTML = price * inputvalue;
    document.getElementById('totalofall').innerHTML = totalofall + parseFloat(document.getElementById(`price${index}`).innerHTML) - price;
};

const removecart = (parentdiv, index) => {
    // alert("hello i am in remove cart");
    // alert(price);
    // alert(parentdiv);
    // alert(index);
    localStorage.removeItem(index);
    document.getElementById(`${parentdiv}`).remove();
}