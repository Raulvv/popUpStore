/*var varCounter = 0;
var varName = function(){
     if(varCounter <= 6) {
          varCounter++;
          
     } else {
          clearInterval(varName);
     }
};*/

window.onload= function(){
    var contador=1;

    document.getElementById("img1").style.display="inline";

    function pasarImagen(){
        var img=document.getElementById("img"+contador);
        img.style.zIndex= "0"
        img.style.animation= "slide 1s ease infinite normal";
        
        if(contador<6){
            contador++;
        }
        else{
            contador=1;
        }
        var imgNext=document.getElementById("img"+contador)
        imgNext.style.zIndex= "-3"
        imgNext.style.display= "inline";
        setTimeout(function(){img.style.display= "none";
        img.style.animation= "";},1000);
        /*document.getElementById("img"+contador).style.display= "none";
        contador++;
        $("#img"+contador).fadeIn();

        if(contador==6){
            $("#img"+contador).hide();
            contador=1;   
            $("#img"+contador).fadeIn();
        }*/
    }

    window.setInterval(pasarImagen, 5000);
}