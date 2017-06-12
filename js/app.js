var cargarPagina = function(){
  cargarPersonajes();
  $(document).on("click", ".personaje", mostrarDetallePersonaje);
    //cuando los elementos son creados dinamicamente utilizar el evento on click
}

var cargarPersonajes = function(){
  var url ="http://swapi.co/api/people/";
  $.getJSON(url,function(response){
    var personajes = response.results;
    var total = response.count;
    mostrarTotalPersonajes(total);
    mostrarPersonajes(personajes);
  });
};
var mostrarTotalPersonajes = function(total){
  $("#total").text(total)
}

var mostrarPersonajes = function(personajes){
  var $ul= $("#personajes");
    //console.log(personajes);
  // crear un li que se muestre en el html
  personajes.forEach(function(personaje){//por defecto nos va a dar una unidad, obtiene el valor de cada objeto
      console.log(personaje);
    var $li = $("<li/>");
   // $li.text(personaje.name);
    $li.addClass("personaje");
    $li.attr("data-url",personaje.homeworld);//le da el atributo de data-url a cada personaje
    $li.text(personaje.name + " - " + personaje.height + "cm");   //crea un elemento li para cada nombre de personaje
    $ul.append($li);       //agrega cada personaje a la lista
      //console.log(personaje.name);  //obtenemos solo el nombre de los personajes.
  });
    
}
var plantillaPlaneta =  '<h2>Planeta:</h2>' +
   '<p><strong>Nombre:</strong>__nombre__</p>' +
   '<p><strong>Clima:</strong>__clima__</p>';

var mostrarDetallePersonaje=function(){
    var url=$(this).data("url");
    console.log(url);
    var $planetaContenedor = $("#planeta");
    $.getJSON(url,function(response){
     $planetaContenedor.html(
     plantillaPlaneta.replace('__nombre__',response.name).replace('__clima__',response.climate)
        );
    });
};
$(document).ready(cargarPagina);  //es mejor colocarlo despues de haber declarado la función cargarPagina p/hoisting

//si usamos un JSON que está en la web no es necesario que levantemos un servidor, si consumimos uno que nosotros creamos sí es necesario levantarlo.
//si usamos  un framework de css es mejor que utilicemos una plantilla para cambiar valores.