
<?php

$cmd = isset($_GET['cmd']) ? $_GET['cmd'] : '';

switch ($cmd) {

    case 'hotspot':
        getMyHotspot();
        break;

    case 'getInfo':
        getInfo();
        break;

    case 'recherche':
        recherche();
        break;

    default:
        break;
}



function getMyHotspot()
{


    require_once './config.php';

    if (isset($_GET["etage_id"]) && isset($_GET["reference"])) {
        $etage_id = urldecode($_GET["etage_id"]);
        $etage_id = htmlspecialchars($_GET["etage_id"]);
        $etage_id = strip_tags($_GET['etage_id']);
        $reference = urldecode($_GET["reference"]);
        $reference = htmlspecialchars($_GET["reference"]);
        $reference = strip_tags($_GET['reference']);
    }

    $result = mysqli_query($link, "SELECT * FROM details_etage WHERE etage_id='$etage_id' AND reference='$reference'");
    if (!$result) {

        printf("Error: %s\n", mysqli_error($link));
        exit();
    }
    while ($row = mysqli_fetch_array($result)) {
        $prix = $row['prix'];
        $lot = $row['lot'];
        $typologie = $row['typologie'];
        $surface = $row['surface'];
        $etat = $row['etat'];
        if ($etat == "reserved")
            $image_path = $row['image_reserver_path'];
        else
            $image_path = $row['image_path'];
    }

    /*   $str = '<img src="./data/'.$image_path.'" alt="" style="width: 100%; cursor: zoom-in;" data-toggle="modal" data-target="#exampleModal">' .
        '   <div class="mb-5" style="margin-top: 25px;">' .
        '     <div class="row">' .
        '       <div class="col-md-6">' .
        '         <h6 class="gry">PRIX</h6>' .
        '       </div>' .
        '       <div class="col-md-6">' .
        '         <strong>'.$prix.'</strong>' .
        '       </div>' .
        '     </div>' .
        '     <hr>' .
        '     <div class="row" style="margin-bottom: 9px;">' .
        '       <div class="col-md-6">' .
        '         <h6 class="gry margin">' .
        '           lot' .
        '         </h6>' .
        '       </div>' .
        '       <div class="col-md-6">' .
        '         <strong>' . $lot .'  </strong>' .
        '       </div>' .
        '     </div>' .
        '     <div class="row" style="margin-bottom: 9px;">' .
        '       <div class="col-md-6">' .
        '         <h6 class="gry margin">' .
        '           typologie' .
        '         </h6 >' .
        '       </div>' .
        '       <div class="col-md-6">' .
        '         <strong >'.$typologie.' </strong>' .
        '       </div>' .
        '       <div class="col-md-6">' .
        '         <h6 class="gry margin">' .
        '           surface hab.' .
        '         </h6>' .
        '       </div>' .
        '       <div class="col-md-6">' .
        '         <strong>' . $surface .' </strong>' .
        '       </div>' .
        '     </div>' .
        '</div>';
 */


    $str = '<img src="./sidebar/img/E173.jpg" alt="" style="width: 100%; cursor: zoom-in;" data-toggle="modal" data-target="#exampleModal">' .
        '   <div class="mb-5" style="margin-top: 25px;">' .
        '     <div class="row">' .
        '       <div class="col-md-6">' .
        '         <h6 class="gry">PRIX</h6>' .
        '       </div>' .
        '       <div class="col-md-6">' .
        '         <strong>N.C</strong>' .
        '       </div>' .
        '     </div>' .
        '     <hr>' .
        '     <div class="row" style="margin-bottom: 9px;">' .
        '       <div class="col-md-6">' .
        '         <h6 class="gry margin">' .
        '           lot' .
        '         </h6>' .
        '       </div>' .
        '       <div class="col-md-6">' .
        '         <strong>T4</strong>' .
        '       </div>' .
        '     </div>' .
        '     <div class="row" style="margin-bottom: 9px;">' .
        '       <div class="col-md-6">' .
        '         <h6 class="gry margin">' .
        '           typologie' .
        '         </h6 >' .
        '       </div>' .
        '       <div class="col-md-6">' .
        '         <strong >T2</strong>' .
        '       </div>' .
        '       <div class="col-md-6">' .
        '         <h6 class="gry margin">' .
        '           surface hab.' .
        '         </h6>' .
        '       </div>' .
        '       <div class="col-md-6">' .
        '         <strong>6.2 </strong>' .
        '       </div>' .
        '     </div>' .
        '</div>';

    die($str);
}


function getInfo()
{
    require_once './config.php';

    if (isset($_GET["etage_id"]) && isset($_GET["reference"])) {
        $etage_id = urldecode($_GET["etage_id"]);
        $etage_id = htmlspecialchars($_GET["etage_id"]);
        $etage_id = strip_tags($_GET['etage_id']);
        $reference = urldecode($_GET["reference"]);
        $reference = htmlspecialchars($_GET["reference"]);
        $reference = strip_tags($_GET['reference']);
    }


    $sql = "SELECT * FROM details_etage WHERE etage_id='$etage_id' AND reference='$reference'";
    $result = mysqli_query($link, $sql);
    if (!$result) {

        printf("Error: %s\n", mysqli_error($link));
        die(null);
        exit();
    }
    $row =  mysqli_fetch_assoc($result);
    die(json_encode($row));
}





function recherche()
{
    require_once './config.php';


    $surface_min = 0;
    if (isset($_POST['surfacemin']))
        $surface_min = htmlspecialchars($_POST['surfacemin']);

    $typologie = array();
    if (isset($_POST['t2']))
        array_push($typologie, "t2");
    if (isset($_POST['t3']))
        array_push($typologie, "t3");
    if (isset($_POST['t4']))
        array_push($typologie, "t4");
    $typologie =  join("','", $typologie);

    $complement = array();
    if (isset($_POST['terrasse']))
        array_push($complement, "terrasse");
    if (isset($_POST['balcon']))
        array_push($complement, "balcon");
    if (isset($_POST['jardin']))
        array_push($complement, "jardin");
    $complement =  join("','", $complement);

    $exposition = array();
    if (isset($_POST['sud']))
        array_push($exposition, "sud");
    if (isset($_POST['ouest']))
        array_push($exposition, "ouest");
    if (isset($_POST['nord']))
        array_push($exposition, "nord");
    if (isset($_POST['est']))
        array_push($exposition, "est");
    $exposition =  join("','", $exposition);


    $sql = "SELECT details_etage.*, etages.nom_etage FROM details_etage , etages
    WHERE surface >= '$surface_min'
    AND typologie IN ('$typologie') 
    AND complement IN ('$complement') 
    AND exposition IN ('$exposition')
    AND details_etage.etage_id = etages.etage_id";



    $result = mysqli_query($link, $sql);
    if (!$result) {

        printf("Error: %s\n", mysqli_error($link));
        die([]);
        exit();
    }
    $records = [];
    while ($row = mysqli_fetch_assoc($result)) {
        extract($row);
        $records[] = array(
            "reference" => $reference,
            "etage_id" => $etage_id,
            "prix" => $prix,
            "lot" => $lot,
            "typologie" => $typologie,
            "surface" => $surface,
            "complement" => $complement,
            "exposition" => $exposition,
            "etat" => $etat,
            "nom_etage"=>$nom_etage
        );
    }
    die(json_encode($records));

}

?>