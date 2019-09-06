$('#calcularComision').click(function (e) {
  var monto = $('#amount').val();
  if (monto == '' || monto == 0) {
    alert ("Por favor, colocar un monto");
    e.preventDefault();
  } else {
    var comisionCulqi= (monto * 0.0420) + 1.00;
    var comisionIgv = comisionCulqi * 0.18;
    var comisionTotal = comisionCulqi + comisionIgv;
    $('#comisionDesc').val(comisionTotal);
    e.preventDefault();
  }
});

$('#resumen').click(function (e) {
  var name = $('#name').val();
  console.log("hola " + name);
  $('#r_name').text(name);
  e.preventDefault()
});


// $("#response-panel").hide();
// Culqi.publicKey = 'pk_test_LlPkJ6CtgcJ946m9';
// // Culqi.container = "check";
// Culqi.options({
//   style: {
//     logo: 'https://www.culqi.com/LogoCulqi.png',
//     maincolor: '#604687'
//   }
// });
// Culqi.settings({
//   title: 'Scooter Electrico',
//   currency: 'PEN',
//   description: 'Modelo L8F',
//   amount: 300000
//  });
// $('#pagar').on('click', function () {
//   Culqi.open();
//   e.preventDefault();
// });
// function culqi() {
//   if (Culqi.token) {
//     console.log(Culqi.token.id)
//     $(document).ajaxStart(function(){
//       run_waitMe();
//     });
//     $.ajax({
//          type: 'POST',
//          url: 'http://localhost:8083/cargo_unico/culqi-php-develop/examples/02-create-charge.php',
//          data: { token: Culqi.token.id  , email: Culqi.token.email , cuotas: Culqi.token.metadata.installments },
//          datatype: 'json',
//          success: function(data) {
//            var result = "";
//              if(data.constructor == String){
//                  result = JSON.parse(data);
//              }
//              if(data.constructor == Object){
//                  result = JSON.parse(JSON.stringify(data));
//              }
//            if(result.object === 'charge'){
//             resultdiv(result.outcome.user_message);
//            }
//            if(result.object === 'error'){
//                resultdiv(result.user_message);
//                alert(result.merchant_message);
//            }
//          },
//          error: function(error) {
//            resultdiv(error)
//          }
//       });
//   } else {
//     $('#response-panel').show();
//     $('#response').html(Culqi.error.merchant_message);
//     $('body').waitMe('hide');
//   }
// };

// function run_waitMe(){
//   $('body').waitMe({
//     effect: 'orbit',
//     text: 'Procesando pago...',
//     bg: 'rgba(255,255,255,0.7)',
//     color:'#28d2c8'
//   });
// }

// function resultdiv(message){
//   $('#response-panel').show();
//   $('#response').html(message);
//   $('body').waitMe('hide');
// }
