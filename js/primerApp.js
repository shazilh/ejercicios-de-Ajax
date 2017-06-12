var cargarPagina = function(){
  cargarPersonajes();
}

var cargarPersonajes = function(){
  $.ajax("https://swapi.co/api/people/",{
    method:"GET",
    dataType:"json",
      // ambos son funciones y reciben un parametro, le pondremos response para acostumbrarse al flujo de peticion
    success: function(response){
        // console.log("respuesta",response

       // para obtener al arreglo de los personajes, varia depende el API,y que tenga propiedad results, chechar en postman
        var personajes = response.results;
        var $ul= $("#personajes");
        // crear un li que se muestre en el html
        personajes.forEach(function(personaje){
          var $li = $("<li/>");
          $li.text(personaje.name);
          $ul.append($li);
        });
    },
    error:function(error){
      console.log("error",error);
    }

 })
}

$(document).ready(cargarPagina);