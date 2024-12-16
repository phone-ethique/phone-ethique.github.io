window.addEventListener('DOMContentLoaded', () => {

const lang = localStorage.getItem("lang");
if (lang == "as") {
    const as = document.querySelectorAll('.as');
    as.forEach(element => {
        element.style.display = "block"
    });
    
    const fr = document.querySelectorAll(".fr") ;
    console.log(fr)
    fr.forEach(element => {
        console.log(element)
        element.style.display = "none"
    });

    const lang_text = document.querySelector(".langue p")
    lang_text.innerText = "AS"

    const lang_option = document.querySelector("#localisation")
    lang_option.value = "as"

}


var body = document.getElementById('lang');
var except = document.getElementById('inside');

body.addEventListener("click", function () {
    body.style.display = "none"
}, false);
except.addEventListener("click", function (ev) {
    ev.stopPropagation(); //this is important! If removed, you'll get both alerts
}, false);


const langue = document.querySelector(".langue") ;
langue.addEventListener("click", function(e) {
    e.preventDefault()
    body.style.display = "block"
}, false)


var bodypanier = document.getElementById('panierdehors');
var exceptpanier = document.getElementById('bla');

bodypanier.addEventListener("click", function () {
    bodypanier.style.display = "none"
}, false);
exceptpanier.addEventListener("click", function (ev) {
    ev.stopPropagation(); //this is important! If removed, you'll get both alerts
}, false);

const panier = document.querySelector(".panier") ;
panier.addEventListener("click", function(e) {
    e.preventDefault()
    bodypanier.style.display = "block"
}, false)

var croix = document.querySelector("#croix")
croix.addEventListener("click", function(e) {
    e.preventDefault()
    bodypanier.style.display = "none"
}, false)




// add_article('coque-eco-phone')
refresh_cart()

});


function updatelang() {
    var localisation = document.getElementById("localisation");
    var localisationValue = localisation.options[localisation.selectedIndex].value;
    localStorage.setItem("lang", localisationValue)
    window.location.reload();
}

var articles = {}
var total_articles = 0


function init_cart() {
    articles = JSON.parse(localStorage.getItem('articles'))
    if (!articles) {
        articles = {
            'green-phone': {
                'name': 'Green Phone',
                'price': 388.99,
                "number": 0
            },
            'e-phone-fr': {
                'name': 'E-Phone',
                'price': 299.99,
                "number": 0
            },
            'e-phone-as': {
                'name': 'E-Phone',
                'price': 259.99,
                "number": 0
            },
            'phone-plus': {
                'name': 'Phone Plus',
                'price': 689.99,
                "number": 0
            },
            's-phone': {
                'name': 'S-Phone',
                'price': 429.99,
                "number": 0
            },
            'nea-phone': {
                'name': 'Nea Phone',
                'price': 579.99,
                "number": 0
            },
            'eco-phone': {
                'name': 'Eco+ Phone',
                'price': 329.99,
                "number": 0
            },
            'chargeur': {
                'name': 'Chargeur',
                'price': 49.99,
                "number": 0
            },
            'coque-e-phone': {
                'name': 'Coque E-Phone',
                'price': 69.99,
                "number": 0
            },
            'coque-green-phone': {
                'name': 'Coque Green Phone',
                'price': 69.99,
                "number": 0
            },
            'coque-phone-plus': {
                'name': 'Coque Phone plus',
                'price': 69.99,
                "number": 0
            },
            'coque-s-phone': {
                'name': 'Coque S-Phone',
                'price': 69.99,
                "number": 0
            },
            'coque-nea-phone': {
                'name': 'Coque Nea Phone',
                'price': 69.99,
                "number": 0
            },
            'coque-eco-phone': {
                'name': 'Coque Eco+ Phone',
                'price': 69.99,
                "number": 0
            },
        }
    }


    for (const [key, value] of Object.entries(articles)) {
        total_articles += value.number;
    }


    save_cart()
}

function save_cart(){
    localStorage.setItem('articles', JSON.stringify(articles));
}

function new_article (name, price, number) {
    const article = document.createElement("div");
    const title = document.createElement("h2")
    const price_text = document.createElement("p")
    const input_number = document.createElement("input")

    article.classList.add("article")
    title.innerText = name
    article.appendChild(title)
    price_text.innerText = price
    article.appendChild(price_text)
    input_number.value = number
    input_number.type="number"
    article.appendChild(input_number)

    var liste_panier = document.querySelector(".liste_panier")
    liste_panier.appendChild(article)
}

function refresh_cart() {
    var total_price = 0
    for (const [key, value] of Object.entries(articles)) {
        if (value.number) {
            new_article (value.name, value.price, value.number)
            total_price += value.price * value.number
        }
    }
    document.querySelector("#priceqwe").innerText = total_price
}

function set_article(article_name, number) {
    articles[article_name].number = number
    refresh_cart()
    save_cart()
}

function add_article(name) {
    articles[name].number += 1
    refresh_cart()
    save_cart()
}

function remove_article(name) {
    if (articles[name].number > 0) {
        articles[name].number -= 1
        refresh_cart()
        save_cart()
    }
}

init_cart()
