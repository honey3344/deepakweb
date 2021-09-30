var globalaa = 0;
var objectss = {};
var a = 0;
var globaler = " ";

function mainnn(returnvalues) {
    fetch('https://fakestoreapi.com/products')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            const sortedResponse = myJson.sort(function(a, b) { return parseInt(a.price) - parseInt(b.price) });
            // var mainslide = document.getElementById('mySelect');
            debugger;
            // if all the vlaues is default then  this will run
            var lowhigh = document.getElementById('lowhigh');
            if (!(document.getElementById('mySelect').value == "default")) {
                document.getElementById('allthings').innerHTML = " ";
                for (var i = 0; i <= myJson.length; i++) {
                    var images = myJson[i].image;
                    var tittle = myJson[i].title;
                    var money = myJson[i].price;
                    if (document.getElementById('lowhigh').value == "low to high") {
                        if (document.getElementById('mySelect').value === myJson[i].category) {
                            document.getElementById('allthings').innerHTML += `<div class="inside">
                    <img id="myImg" src="${images}" id="image" alt="Trulli" width="200" height="200"><br>
                    <div class="tittle">
                        <h5 id="tittleof">${tittle}</h5>
                    </div>
                    <div class="price"><span class="price">price is =></span>
                        <h5 class="price" id="money">${money}</h5>
                    </div>
                </div>`;
                        }
                    } else {

                        // i = 1;
                        const sortedResponsehigh = myJson.sort(function(a, b) { return parseInt(b.price) - parseInt(a.price) });
                        // i am at here;
                        if ((document.getElementById('mySelect').value === myJson[i].category)) {
                            document.getElementById('allthings').innerHTML += `<div class="inside">
                    <img id="myImg" src="${sortedResponsehigh[i].image}" id="image" alt="Trulli" width="200" height="200"><br>
                    <div class="tittle">
                        <h5 id="tittleof">${sortedResponsehigh[i].title}</h5>
                    </div>
                    <div class="price"><span class="price">price is =></span>
                        <h5 class="price" id="money">${money}</h5>
                    </div>
                </div>`;
                        }
                        // alert(" the value is high to low");
                    }
                }
            }

            // this line is for  category low to high;
            else {
                if (document.getElementById('inputbox').value.length !== 0) {
                    document.getElementById('allthings').innerHTML = "";
                    for (var c = 0; c <= myJson.length; c++) {
                        debugger;
                        var b = (myJson[c].title).toUpperCase();
                        var x = (document.getElementById('inputbox').value).toUpperCase();
                        if ((b.includes(x))) {
                            if (document.getElementById('lowhigh').value == "low to high") {
                                document.getElementById('allthings').innerHTML += `<div  class="inside , box">
                            <img onclick="iamnewwindow()" id="myImg" src="${myJson[c].image}" id="image" alt="Trulli" width="200" height="200"><br>
                            <div class="tittle">
                                <h5 id="tittleof">${myJson[c].title}</h5>
                            </div>
                            <div class="price"><span class="price">price is =></span>
                                <h5 class="price" id="money">${myJson[c].price}</h5>
                            </div>
                        </div>`;
                            } else {
                                if (b) {
                                    const sortedResponsehigh = myJson.sort(function(a, b) { return parseInt(b.price) - parseInt(a.price) });
                                    // currently working at here tie 12 52;                                const sortedResponsehigh = myJson.sort(function(a, b) { return parseInt(b.price) - parseInt(a.price) });
                                    document.getElementById('allthings').innerHTML += `<div  class="inside , box">
                                <img onclick="iamnewwindow()" id="myImg" src="${sortedResponse[c].image}" id="image" alt="Trulli" width="200" height="200"><br>
                                <div class="tittle">
                                    <h5 id="tittleof">${sortedResponse[c].title}</h5>
                                </div>
                                <div class="price"><span class="price">price is =></span>
                                    <h5 class="price" id="money">${sortedResponse[c].price}</h5>
                                </div>
                            </div>`;
                                }

                            }
                        }
                    }
                }
                var inputbox = document.getElementById('inputbox').value;
                if (document.getElementById("inputbox").value.length == 0) {
                    if (lowhigh.value == "low to high") {
                        document.getElementById('allthings').innerHTML = " ";
                        for (var i = 0; i <= sortedResponse.length; i++) {
                            var image4 = sortedResponse[i].image;
                            var tittle4 = sortedResponse[i].title;
                            var money4 = sortedResponse[i].price;
                            var description = sortedResponse[i].description;
                            document.getElementById('allthings').innerHTML += `<div  class="inside , box"  >
                <img onclick="iamnewwindow(${sortedResponse[i].id})" id="myImg" src="${image4}" id="image" alt="Trulli" width="200" height="200"><br>
                <div class="tittle">
                    <h5 id="tittleof">${tittle4}</h5>
                </div>
                <div class="price"><span class="price">price is =></span>
                    <h5 class="price" id="money">${money4}</h5>
                </div>
                <h1 class="hidden">description = ${description}</h1>
                <div class="addtocart"><button onclick="addtocart(${sortedResponse[i].id})" class="button button2">ADD TO CART</button></div>
             </div>`;
                        }
                    }
                }
                const sortedResponsehigh = myJson.sort(function(a, b) { return parseInt(b.price) - parseInt(a.price) });
                // i am working at here';



                if (lowhigh.value == "high to low") {
                    document.getElementById('allthings').innerHTML = " ";
                    if (document.getElementById('mySelect').value == "default") {
                        // alert("i am in the default");
                        for (var i = 0; i <= sortedResponsehigh.length; i++) {
                            var image5 = sortedResponsehigh[i].image;
                            var tittle5 = sortedResponsehigh[i].title;
                            var money5 = sortedResponsehigh[i].price;
                            document.getElementById('allthings').innerHTML += `<div  class="inside">
                    <img onclick="iamnewwindow(${sortedResponse[i].id})" id="myImg" src="${image5}" id="image" alt="Trulli" width="200" height="200"><br>
                    <div class="tittle">
                        <h5 id="tittleof">${tittle5}</h5>
                    </div>
                    <div class="price"><span class="price">price is =></span>
                        <h5 class="price" id="money">${money5}</h5>
                        <div class="addtocart"><button  onclick="addtocart(${sortedResponse[i].id})" class="button button2">ADD TO CART</button></div>
                    </div>
                </div>`;


                        }
                    }
                }
            }
        })
}

function myFunction(thisis) {
    mainnn(thisis);
}

function lowhigh(sfsfjk) {
    mainnn();
}

function keyprss(sdgjskj) {
    debugger;
    mainnn(sdgjskj);
}

function hellobtn() {
    alert("i m btn");
}

function iamnewwindow(rrrrrr) {
    // var newWindow = window.open("newtab", "Test", "")
    // newWindow.document.write(rrrrrr);
    // alert(rrrrrr);
    window.open(`seccond.html?${rrrrrr}`, '_blank').focus()
        // document.getElementById('second').href = `https://fakestoreapi.com/products?${a}`;
}
const addtocart = (s) => {
        // alert(" i am add to cart");
        window.open(`addtocart.html?${s}`).focus()
        window.localStorage.setItem(s, s);
    }
    // var a = 90;

mainnn();