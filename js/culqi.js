$('#calcularComision').click(function (e) {
  var monto = parseFloat($('#amount').val());

    var comisionFija = monto * 4.20 / 100;
    var comisionVariable = 0.30 * 3.40
    var sumaComisiones = comisionFija + comisionVariable; 
    var comisionIgv = sumaComisiones * 18 / 100;
    var comisionTotal = sumaComisiones + comisionIgv;
    var comisionCulqi= comisionTotal.toFixed(2);
    $('#comisionDesc').val(comisionCulqi);
    e.preventDefault();


  $('#resumen').click(function (e) {
    var name = $('#name').val();
    var proveedor = $('.product_select').val();
    var comision = parseFloat(comisionTotal.toFixed(2));
    var total = comision + monto

    $('#r_name').text(name);
    if (proveedor == 0 ) {
      $('#r_prov').text("----------");
    } else if (proveedor == "pk_live_YGwMe6MLzVIEZGFG") {
      $('#r_prov').text("Coffee Break");
    } else if (proveedor == "pk_live_ByCROQbFo9zGLERv") {
      $('#r_prov').text("Pizzas y Bebidas");
    } else if (proveedor == "pk_live_me3icufvx2I1AyGv"){
      $('#r_prov').text("Letras corporeas volumetricas"); 
    }
    $('#r_montoTotal').text(total)
    $('#r_montoTotal').val(total)  
  });
});

$('#culqi').on('click', function (e) {
  var totalCheckout = $('#r_montoTotal').val()
  Culqi.publicKey = $('.product_select').val();
  console.log(Culqi.publicKey)
  Culqi.options({
    style: {
      logo: 'https://www.culqi.com/LogoCulqi.png',
      maincolor: '#6364F0'
    }
  });
  Culqi.settings({
    title: 'AWS COMMUNITY DAY 2019',
    currency: 'PEN',
    description: $('#r_prov').text(),
    amount: totalCheckout * 100
  });
  Culqi.open();
  e.preventDefault();
}); 


function culqi() {
  var totalCheckout = $('#r_montoTotal').val()
  var monto_back = totalCheckout * 100;
  var publica = Culqi.publicKey;

  if (Culqi.token) {
    console.log(Culqi.token.id)
    $(document).ajaxStart(function(){
      run_waitMe();
    });
    $.ajax({
      type: 'POST',
      url: 'http://localhost:8081/culqi-php-develop/examples/02-create-charge.php',
      data: { token: Culqi.token.id  , email: Culqi.token.email , monto_back , publica },
      datatype: 'json',
      success: function(data) {
        var result = "";
          if(data.constructor == String){
              result = JSON.parse(data);
          }
          if(data.constructor == Object){
              result = JSON.parse(JSON.stringify(data));
          }
        if(result.object === 'charge'){
          alert(result.outcome.user_message);
          window.location.replace("https://communityday.aws.pe/");
        }
        if(result.object === 'error'){
            alert(result.user_message);
            $('body').waitMe('hide');
        }
      },
      error: function(error) {
        resultdiv(error)
      }
    });
  } else {
    alert(Culqi.error.merchant_message);
    $('body').waitMe('hide');
  }
};
  
function run_waitMe(){
  $('body').waitMe({
    effect: 'orbit',
    text: 'Procesando pago ...',
    bg: 'rgba(255,255,255,0.7)',
    color:'#6364F0'
  });
}


