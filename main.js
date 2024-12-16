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

});


function updatelang() {
    var localisation = document.getElementById("localisation");
    var localisationValue = localisation.options[localisation.selectedIndex].value;
    localStorage.setItem("lang", localisationValue)
    window.location.reload();
}