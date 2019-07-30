import $ from 'jquery';

$(document).ready(function(){
    $(".header-menu__items").on("click","a", function (event) {
        event.preventDefault();
        const id  = $(this).attr('href'),
            top = $(id).offset().top-100;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $(document).scroll(function () {
        const nav = $(".header-menu");
        nav.toggleClass('scrolled', $(this).scrollTop() > nav.height());
    });
});