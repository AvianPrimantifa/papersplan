$(document).ready(function(){
    if($(window).width() >= 992) {
        var s = skrollr.init({
            render: function(data) {
                //Log the current scroll position.
                console.log(data.curTop);
            }

        });
    }
    window.sr = new scrollReveal();

});
