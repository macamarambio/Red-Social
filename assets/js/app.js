$(document).ready(()=> {
  $('.language').hide();
  $('.login').hide();
  $('.principal').hide();
  $('.profile').hide();

  /*Vista splash con duración de 2 a 5 segundos*/
  setTimeout(()=> {
    $(".content").fadeOut(500);
  },3000);
  setTimeout(()=> {
    $(".language").fadeIn(500);
  });

  /*login*/
  $('#btn1').click(()=>{
    $('.language').hide();
    $('.login').show();
    $('.principal').hide();
  });
  $('#btnback').click(()=>{
    $('.language').show();
    $('.login').hide();
  });

  $('#btnprofile').click(()=>{
    $('.profile').hide();
    $('.principal').show();
  });

/*Seccion Principal*/
  $('#iniciar').click(()=>{
    $('.language').hide();
    $('.login').hide();
    $('.principal').show();
    $('#comentarios').hide();
    $('#agregar').hide();
    $('.profile').hide();
  });
});

/*Filtrar Restaurantes*/

function filter(id) {
  var filt = $('#selector').val();
  $('#comida').val('');
  if(id == 'comida'){
    $('#comida').show();
    $('#mexico').hide();
    $('#japon').hide();
    $('#thai').hide();
  }
  if(id == 'mexico'){
    $('#comida').hide();
    $('#mexico').show();
    $('#japon').hide();
    $('#thai').hide();
  }
  if(id == 'japon'){
    $('#comida').hide();
    $('#mexico').hide();
    $('#japon').show();
    $('#thai').hide();
  }
  if(id == 'thai'){
    $('#comida').hide();
    $('#mexico').hide();
    $('#japon').hide();
    $('#thai').show();
  }
}

/*AGREGAR UN COMENTARIO*/

  $('.timeline-footer').click(()=>{
    $('.timeline-panel1').show();
    $('.timeline-panel2').hide();
    $('#japon').hide();
    $('#thai').hide();
    $('#agregar').show();
    $('#comentarios').show();
  });

  /* PERFIL */
  $('#perfil').click(()=>{
    $('.language').hide();
    $('.login').hide();
    $('.principal').hide();
    $('.profile').show();
  })
