jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><i class="updown fa fa-angle-up"></i></div></div>').insertBefore('.quantity input');
jQuery('<div class="quantity-nav"><div class="quantity-button quantity-down"><i class="updown down fa fa-angle-down"></i></div></div>').insertAfter('.quantity input');

jQuery('.quantity').each(function() {
  var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var newVal;
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      newVal = oldValue;
    } else {
      newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var newVal;
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      newVal = oldValue;
    } else {
      newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});

(function(){
  $('#sprachen').bind('click', function() {
    $('.sprachen').addClass('open-r');
    return false;
  });
  $('#alter').bind('click', function() {
    $('.alter').addClass('open-r');
    return false;
  });

  var bike_btn = false;
  $('#fahrrad').bind('click', function() {
    if (bike_btn == false){
      $('.fa-bicycle').css({'opacity':'0.5'});
      bike_btn = true;}
    else {
      $('.fa-bicycle').css({'opacity':'1'});
        bike_btn = false;}
  });

  var tourist_btn = false;
  $('#tourist').bind('click', function() {
    if (tourist_btn == false){
      $('#sights').css({'display':'block'});
      tourist_btn = true;}
    else {
      $('#sights').css({'display':'none'});
        tourist_btn = false;}
    //return false;
  });

  $('#info').bind('click', function() {
    $('.info').addClass('open-r');
    return false;
  });
  $('.map').bind('click', function() {
    $('.sprachen').removeClass('open-r');
    $('.alter').removeClass('open-r');
    $('.info').removeClass('open-r');
    $('.tourist').removeClass('open-r');
    return false;
  });

})();



$('.nach').on('keydown', function(e) {
    if (e.which === 13) {
      var to = document.getElementById('to').value;
      var from = document.getElementById('from').value;
      if (to === "Hauptbahnhof") {
        $('#aktiv').css({'display':'block'});
      }
      if (to === "Alexanderplatz") {
        $('#aktiv2').css({'display':'block'});
      }
    }
});

function rout(x){
  if (x === "Hauptbahnhof") {
    $('#aktiv').css({'display':'block'});
  }
  if (x === "Alexanderplatz") {
    $('#aktiv2').css({'display':'block'});
  }
}


(function(){
  $('.buy').bind('click', function() {
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var person = document.getElementById('person').value;
    var days = document.getElementById('days').value;
    var age = $('input[name="age"]:checked').val();
    var price_adult = 2.80;
    var price_child = 1.70;
    console.log(from, to, person, days, age);
    if (person === "4") {
      if (days === "20") {
        jQuery('<div class="snoop"><img src="http://cloud-3.steamusercontent.com/ugc/388794500582826791/C76D63ED30DD47CF448B28E11EA02A34F1749DC0/"></div><audio autoplay><source src="css/1-tools/neat/snoop.ogg" type="audio/ogg"><source src="css/1-tools/neat/snoop.mp3" type="audio/mpeg"></audio>').insertBefore('.buy');
      }
    }
    else {
      $('.kaufen').addClass('open-d');
      var route = '<h3>Von: ' +from+  '  -  Nach: ' +to+ '</h3>';
      $(".rout").append(route);
      if (age === "adult") {
        var price = (price_adult * person).toFixed(2);
        var dis = '<div class="price"><h1>' +price+ '€</h1></div>';
        jQuery(dis).insertBefore('.payment');
        var info = '<p>'+person+' x Einzelfahrschein Regeltarif AB</p>';
        $(".price").append(info);
      }
      if (age === "child") {
        var price2 = (price_child * person).toFixed(2);
        var dis2 = '<div class="price"><h1>' +price2+ '€</h1></div>';
        jQuery(dis2).insertBefore('.payment');
        var info2 = '<p>'+person+' x Einzelfahrschein ermäßigt AB</p>';
        $(".price").append(info2);
      }

    }
    return false;
  });
})();
