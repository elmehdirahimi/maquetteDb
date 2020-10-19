<?php
require_once 'config.php';
require_once 'functions.php';
?>
<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
  <title></title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />

  <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet" />

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
  <link rel="stylesheet" href="./sidebar/css/style.css" />

  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />

  <link rel="stylesheet" href="./navigation-master/css/reset.css" />
  <!-- CSS reset -->
  <link rel="stylesheet" href="./navigation-master/css/style.css" />
  <!-- Resource style -->



  <script src="./navigation-master/js/modernizr.js"></script>
  <!-- Modernizr -->

  <script type="text/javascript">
    // hide URL field on the iPhone/iPod touch
    function hideUrlBar() {
      // hide URL field on the iPhone/iPod touch
      var p = String(navigator.platform);

      container = document.getElementById("container");
      if (p === "iPad" || p === "iPhone" || p === "iPod touch") {
        var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        if (parseInt(v[1], 10) >= 7) {
          // iOS >=7
          if (container) {
            container.style.top = 0 + "px";
            container.style.left = 0 + "px";
            container.style.width = window.innerWidth + "px";
            container.style.height = window.innerHeight + "px";
          }
          if (obj) {
            obj.setViewerSize(window.innerWidth, window.innerHeight);
          }
          window.scrollTo(0, 0);
        } else {
          if (container) {
            var cheight;
            switch (window.innerHeight) {
              case 208:
                cheight = 268;
                break; // landscape
              case 260:
                cheight = 320;
                break; // landscape, fullscreen
              case 336:
                cheight = 396;
                break; // portrait, in call status bar
              case 356:
                cheight = 416;
                break; // portrait
              case 424:
                cheight = 484;
                break; // portrait iPhone5, in call status bar
              case 444:
                cheight = 504;
                break; // portrait iPhone5
              default:
                cheight = window.innerHeight;
            }
            if (
              cheight &&
              (container.offsetHeight != cheight ||
                window.innerHeight != cheight)
            ) {
              container.style.height = cheight + "px";
            }
          }
          document.getElementsByTagName("body")[0].style.marginTop = "1px";
          window.scrollTo(0, 1);
        }
      }
    }
    if (window.addEventListener) {
      window.addEventListener("load", hideUrlBar);
      window.addEventListener("resize", hideUrlBar);
      window.addEventListener("orientationchange", hideUrlBar);
    }
  </script>
  <!-- <style type="text/css" title="Default">
    body,
    div,
    h1,
    h2,
    h3,
    span,
    p {
      font-family: Verdana, Arial, Helvetica, sans-serif;
      color: #000000;
    }

    /* fullscreen */
    html {
      height: 100%;
    }

    body {
      font-size: 10pt;
      background: #ffffff;
    }

    table,
    tr,
    td {
      font-size: 10pt;
      border-color: #777777;
      background: #dddddd;
      color: #000000;
      border-style: solid;
      border-width: 2px;
      padding: 5px;
      border-collapse: collapse;
    }

    h1 {
      font-size: 18pt;
    }

    h2 {
      font-size: 14pt;
    }

    .warning {
      font-weight: bold;
    }
  </style> -->
</head>

<body>

  <script>
    function showSideBar(hotspotId, hotspotTitle) {

      image1 = document.getElementById("image1");
      image2 = document.getElementById("image2");
      prix1 = document.getElementById("prix1");
      lot1 = document.getElementById("lot1");
      etage1 = document.getElementById("image1");
      typologie1 = document.getElementById("typologie1");
      surface1 = document.getElementById("surface1");
      complement1 = document.getElementById("complement1");
      exposition1 = document.getElementById("exposition1");
      pdf1 = document.getElementById("pdf1");

      $.ajax({
        url: './functions.php?cmd=getInfo&etage_id=' + hotspotTitle + '&reference=' + hotspotId,
        success: function(html) {
          data = JSON.parse(html);
          if (data) {
            if (data.etat === "reserved") {
              image1.src = "./data/" + data.image_reserver_path;
              image1.src = "./data/" + data.image_reserver_path;

            } else {
              image1.src = "./data/" + data.image_path;
              image2.src = "./data/" + data.image_path;

            }

            prix1.innerHTML = data.prix;
            lot1.innerHTML = data.lot;
            // etage1.innerHTML = data.;
            typologie1.innerHTML = data.typologie;
            surface1.innerHTML = data.surface;
            complement1.innerHTML = data.complement;
            exposition1.innerHTML = data.exposition;
            pdf1.href = "./data/" + data.pdf_path;
          }
        }
      });





      if ($("#filtres").hasClass("active"))
        $("#filtres").removeClass("active show");
      if (!($("#info").hasClass("active show")))
        $("#info").toggleClass("active show");

      // alert("dsd");

      if ($("#sidebar").hasClass("active"))
        $("#sidebar").toggleClass("active");
    }

    function hideSideBar() {


      if (!$("#sidebar").hasClass("active"))
        $("#sidebar").toggleClass("active");
    }

    function test() {

      if (!$("#filtres").hasClass("active"))
        $("#filtres").toggleClass("active show");

      if ($("#info").hasClass("show"))
        $("#info").removeClass("active show");


      if ($("#sidebar").hasClass("active"))
        $("#sidebar").toggleClass("active");
    }
  </script>
  <!-- Modal and info -->
  <div class="" style="position: absolute; z-index: 6000;">
    <!-- modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              <strong>Plan 2D</strong>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-6 my_col">
                <button type="button" class="btn btn-primary btn_plan">
                  <span>
                    <i class="fa fa-map" style="margin-right: 15px;" aria-hidden="true"></i>
                  </span>
                  <strong>PLAN 2D</strong>
                </button>
              </div>
              <div class="col-6 my_col">
                <button type="button" class="btn btn-primary btn_plan">
                  <span>
                    <i class="fa fa-cube" style="margin-right: 15px;" aria-hidden="true"></i>
                  </span>
                  <strong>PLAN 3D</strong>
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 my_col">
                <img id="image2" src="./sidebar/img/E173.jpg" style="max-width: 100%; max-height: 100%;" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Fermer
            </button>
            <a type="button" class="btn btn-primary" id="pdf1" href="#" target="_blank">
              <span>
                <i class="fa fa-download" aria-hidden="true"></i>
              </span>
              Telecharger PDF
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper d-flex align-items-stretch">
      <nav id="sidebar" class="active">
        <div class="custom-menu" style="margin-right: -80px;">



          <div class="custom-menu">
            <button type="button" onclick="test()" class="btn btn-primary">
              <i class="fa fa-search"></i>
              <span class="sr-only">Toggle Menu</span>
            </button>
          </div>

          <!-- etages -->
          <nav class="cd-stretchy-nav">







            <a class="cd-nav-trigger">
              <span aria-hidden="true"></span>
            </a>
            <ul>
              <li class="my_center"><a onclick="obj.changeViewState(0, 0)" href="#" class="active" title="Plan 3d"><i class="fa fa-cube" style="padding: 16px;"></i></a></li>
              <li class="my_center"><a onclick="obj.changeViewState(1, 0)" href="#">R+2</a></li>
              <li class="my_center"><a onclick="obj.changeViewState(2, 0)" href="#">R+1</a></li>
              <li class="my_center"><a onclick="obj.changeViewState(3, 0)" href="#">RDC</a></li>
              <li class="my_center"><a onclick="obj.changeViewState(4, 0)" href="#">Pieton</a></li>
            </ul>
            <span aria-hidden="true" class="stretchy-nav-bg"></span>

          </nav>
        </div>
        <!-- content -->








        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="info">
            <div class="p-4">
              <img id="image1" src="./sidebar/img/E173.jpg" alt="" style="width: 100%; cursor: zoom-in;" data-toggle="modal" data-target="#exampleModal" />
              <div class="mb-5" style="margin-top: 25px;">
                <button type="button" class="btn btn-primary visiter" data-toggle="modal" data-target="#exampleModal">
                  VISITER
                </button>

                <div class="row">
                  <div class="col-md-6">
                    <h6 class="gry">PRIX</h6>
                  </div>
                  <div class="col-md-6">
                    <strong id="prix1">N.C</strong>
                  </div>
                </div>
                <hr />

                <div class="row" style="margin-bottom: 9px;">
                  <!-- star -->
                  <div class="col-md-6">
                    <h6 class="gry margin">
                      lot
                    </h6>
                    <strong id="lot1">
                      T4
                    </strong>
                  </div>
                  <div class="col-md-6">
                    <h6 class="gry margin">
                      ETAGE
                    </h6>
                    <strong id="etage1">
                      R+7
                    </strong>
                  </div>
                  <!-- end -->
                </div>
                <div class="row" style="margin-bottom: 9px;">
                  <!-- star -->
                  <div class="col-md-6">
                    <h6 class="gry margin">
                      typologie
                    </h6>
                    <strong id="typologie1">
                      T2
                    </strong>
                  </div>
                  <div class="col-md-6">
                    <h6 class="gry margin">
                      surface hab.
                    </h6>
                    <strong id="surface1">
                      43.33 m
                    </strong>
                  </div>
                  <!-- end -->
                </div>
                <div class="row" style="margin-bottom: 9px;">
                  <!-- star -->
                  <div class="col-md-6">
                    <h6 class="gry margin">
                      terrasse
                    </h6>
                    <strong id="terrasse1">
                      6.2 m²
                    </strong>
                  </div>
                  <!-- end -->
                </div>


                <hr />
                <div class="row" style="margin-bottom: 9px;">
                  <!-- star -->
                  <div class="col-md-6">
                    <h6 class="gry margin">
                      complément
                    </h6>
                    <strong id="complement1">
                      terrasse
                    </strong>
                  </div>
                  <!-- end -->
                </div>
                <div class="row" style="margin-bottom: 9px;">
                  <!-- star -->
                  <div class="col-md-12">
                    <h6 class="gry margin">
                      Exposition
                    </h6>
                    <strong id="exposition1">
                      Sud
                    </strong>
                  </div>
                  <!-- end -->
                </div>
              </div>
            </div>
          </div>







          <div class="tab-pane fade" id="filtres">

            <?php include "./filtres.php" ?>
          </div>
        </div>












      </nav>

      <!-- Page Content  -->
      <div id="content" class="p-4 p-md-5 pt-5"></div>
    </div>
  </div>

  <script src="./sidebar/js/jquery.min.js"></script>
  <script src="./sidebar/js/popper.js"></script>
  <script src="./sidebar/js/bootstrap.min.js"></script>
  <script src="./sidebar/js/main.js"></script>

  <script type="text/javascript" src="object2vr_player.js"></script>
  <div id="container" style="width: 100%; height: 100%; position: fixed;">
    This content requires HTML5 &amp; Javascript or Adobe Flash Player Version
    9 or higher.
  </div>
  <script type="text/javascript">
    // create the object player with the container
    obj = new object2vrPlayer("container");
    // obj.readConfigUrl("tarik_out.xml");
    obj.readConfigUrl("images_out.xml");
    // obj.cha
    // hide the URL bar on the iPhone
    setTimeout(function() {
      hideUrlBar();
    }, 10);



    obj.changeViewState(1, 0);
  </script>
  <noscript>
    <p><b>Please enable Javascript!</b></p>
  </noscript>

  <script src="./navigation-master/js/jquery-2.1.4.js"></script>
  <script src="./navigation-master/js/main.js"></script>
  <!-- Resource jQuery -->
</body>

</html>