//JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

// Menu _last iccon

let user_iccon = document.querySelector('.user-header__iccon');
user_iccon.addEventListener("click", function(e){
    let user_menu = document.querySelector('.user-header__menu');
    user_menu.classList.toggle('_active');
});

// Close podmain menu

document.documentElement.addEventListener("click",function(e){
    if(!e.target.closest('.user-header')){
        let user_menu = document.querySelector('.user-header__menu');
        user_menu.classList.remove('_active');
    }
});

$(function(){
    // Burger menu
    $("#burger").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("_active");
        $(".header-menu_body").toggleClass("_active");
    });
});