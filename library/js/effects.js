$('section#products .col-md-2, section#products .col-md-4').each(function(){
    var parentHeight = $(this).parent().height();
    $(this).height(parentHeight);    
});