<?php
header('Content-Type: application/json');

  require '../Requests-master/library/Requests.php';
  Requests::register_autoloader();
  require '../lib/culqi.php';

use Culqi\Culqi;
// $PUBLIC = $_POST["publica"];
// if ($PUBLIC = "pk_test_LlPkJ6CtgcJ946m9") {
//   echo $SECRET_API_KEY = "sk_test_F3wDa6xwYfrYoIXi";
// } elseif ($PUBLIC = "pk_test_p6nYVGxww8ZdUfCL") {
//   echo $SECRET_API_KEY = "sk_test_tGg70Nxa1NvzebK2";
// } elseif ($PUBLIC = "pk_test_Rp2uV5dXI3quFq2X") {
//  echo $SECRET_API_KEY = "sk_test_jb4bNxYst1HBvgy1";
// }
$PUBLIC = $_POST["publica"];
switch ($PUBLIC) {
  case "pk_test_LlPkJ6CtgcJ946m9":
    $SECRET_API_KEY = "sk_test_F3wDa6xwYfrYoIXi";
    break;
  case "pk_test_p6nYVGxww8ZdUfCL":
    $SECRET_API_KEY = "sk_test_tGg70Nxa1NvzebK2";
    break;
  case "pk_test_Rp2uV5dXI3quFq2X":
    $SECRET_API_KEY = "sk_test_jb4bNxYst1HBvgy1";
    break;
}

$culqi = new Culqi(array('api_key' => $SECRET_API_KEY));
try {
  // Creando Cargo a una tarjeta
  $charge = $culqi->Charges->create(
      array(
        "amount" => $_POST["monto_back"],
        "currency_code" => "PEN",
        "email" => $_POST["email"],
        "source_id" => $_POST["token"]
      )
  );
  // Response
  echo json_encode($charge);

} catch (Exception $e) {
  echo json_encode($e->getMessage());
}
?>


