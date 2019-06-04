// carousel
$(document).ready(function(){
    $('.carousel').carousel({
        interval:   2000, 
    });

    $('.carousel').on('slid.bs.carousel', function(event){
        // console.log(event);
    });

});
// form
function checkform()
{
    var f = document.forms["theform"].elements;
    var cansubmit = true;

    for (var i = 0; i < f.length; i++) {
        if (f[i].value.length == 0) cansubmit = false;
    }

    if (cansubmit) {
        document.getElementById('submitbutton').disabled = false;
    }
    else {
        document.getElementById('submitbutton').disabled = 'disabled';
    }
}

var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
  })();
  
  function myFunction(){
    document.getElementById("demo").innerHTML = add();
  }