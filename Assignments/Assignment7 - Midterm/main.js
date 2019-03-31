$(document).ready(function(){
    $('.carousel').carousel({
        interval:   4000, 
        keyboard:   false,
    });

    $('.carousel').on('slid.bs.carousel', function(event){
        // console.log(event);
    });

    $('.modal-popper').click(function(){
        $('.modal').modal({
            backdrop: 'static',
        });
    });

});
