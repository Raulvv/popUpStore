$(document).ready(function(){
    var contador=1;

    for (var i = 1; i <= 6; i++) {
        $("#img"+i).hide();
    };
    
    $("#img1").show()

    $(".control-next").click(function(){
        pasarImagen();
    })

    function pasarImagen(){
        $("#img"+contador).hide();
        contador++;
        $("#img"+contador).fadeIn();

        if(contador==6){
            $("#img"+contador).hide();
            contador=1;   
            $("#img"+contador).fadeIn();
        }
    }

    window.setInterval(pasarImagen, 5000);
});