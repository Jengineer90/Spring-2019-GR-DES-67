$(document).ready(function(){
    $('.carousel').carousel({
        interval:   10000, 
        keyboard:   false,
    });

    $('.carousel-pauser').click(function(){
        $('.carousel').carousel('pause');
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
