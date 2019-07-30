import $ from 'jquery';

$(document).ready(function(){
    function click(click, item) {
        $(click).click(function(){
            $(item).toggle("slow");
        });
    }
    click(".helmet", ".block-helmet");
    click(".bike", ".block-bike");
    click(".jacket", ".block-jacket");
});