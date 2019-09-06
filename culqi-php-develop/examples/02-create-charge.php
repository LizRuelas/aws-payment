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
  case "pk_live_YGwMe6MLzVIEZGFG":
    $SECRET_API_KEY = "sk_live_2RhXXtKwi0L1gfAE";
    break;
  case "pk_live_ByCROQbFo9zGLERv":
    $SECRET_API_KEY = "sk_live_pG5LlIgphMEK955N";
    break;
  case "pk_live_me3icufvx2I1AyGv":
    $SECRET_API_KEY = "sk_live_sToFuuFZEPmfMB1C";
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


