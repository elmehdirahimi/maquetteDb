<link href="./vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">
<script src="./vendor/bootstrap/js/bootstrap.bundle.min.js"></script>



<div class="p-1 pt-4">

    <form id="filtreForm" onsubmit="return submitForm();">


        <div class="col-sm-12 row">
            <div class="col-sm-12">
                <h6 class="gry">surface minmum</h6>
            </div>
            <div class="col-sm-12">
                <!-- <div class="col range range-info"> -->
                <!-- <input type="range" name="range" min="1" max="100" value="50" onchange="rangeInfo.value=value"> -->
                <!-- <output id="rangeInfo">50</output> -->

                <!-- </div> -->

                <!-- <div class="col-sm-2vvc "> -->
                <input name="surfacemin" type="number" class="form-control" id="surface_min" value=40>
                <!-- </div> -->
            </div>
        </div>
        <br />

        <div class="col-sm-12">
            <div class="col-sm-12">
                <h6 class="gry">typologie</h6>
            </div>
            <div class="col-sm-12 row">
                <div class="col custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" name="t2" id="t2">
                    <label class="custom-control-label" for="t2">T2</label>
                </div>
                <div class="col custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" name="t3" id="t3">
                    <label class="custom-control-label" for="t3">T3</label>
                </div>
                <div class="col custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" name="t4" id="t4">
                    <label class="custom-control-label" for="t4">T4</label>
                </div>
            </div>
        </div>

        <br />

        <div class="col-sm-12">
            <div class="col-sm-12">
                <h6 class="gry">options</h6>
            </div>
            <div class="col-sm-12 row">
                <div class="col custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" name="terrasse" id="terrasse">
                    <label class="custom-control-label" for="terrasse">Terrasse</label>
                </div>
                <div class="col custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" name="terrasse" id="balcon">
                    <label class="custom-control-label" for="balcon">Balcon</label>
                </div>
                <div class="col custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" name="terrasse" id="jardin">
                    <label class="custom-control-label" for="jardin">Jardin</label>
                </div>
            </div>
        </div>


        <br />
        <div class="col-sm-12">
            <div class="col-sm-12">
                <h6 class="gry">exposition</h6>
            </div>
            <div class="col-sm-12 row">
                <div class="col custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" name="sud" id="sud">
                    <label class="custom-control-label" for="sud">sud</label>
                </div>
                <div class="col custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" name="ouest" id="ouest">
                    <label class="custom-control-label" for="ouest">ouest</label>
                </div>
                <div class="col custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" name="nord" id="nord">
                    <label class="custom-control-label" for="nord">Nord</label>
                </div>
                <div class="col custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" name="est" id="est">
                    <label class="custom-control-label" for="est">Est</label>
                </div>
            </div>



        </div>



        <br />
        <div class="col-sm-11 ">
            <button type="submit" class="btn btn-primary w-100">Rechercher</button>
        </div>

        <br />
        <div class="col-sm-11 ">
            <button type="button" onclick="renitialiser()" class="btn btn-outline-secondary mb-1 w-100">réinitialiser les filtres</button>
        </div>

    </form>


    <div id="results" class="table-responsive pl-1 hidden">
        <button type="button" onclick="showForm()" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <br/>
        <br/>
        <table class="table align-items-center table-flush">
            <thead class="thead-light">
                <tr>
                    <th class="p-0">typ.</th>
                    <th class="p-0">S.H<H</th> <th class="p-0">prix</th>
                    <th class="p-0">exp.</th>
                    <th class="p-0">etage</th>
                </tr>
            </thead>
            <tbody id="tbody">


            </tbody>
        </table>
    </div>
</div>


<style>
    .containerFilter {
        padding: 10px 10px 10px 10px;
    }

    .hidden {
        display: none;
    }
</style>



<script>
    function renitialiser() {
        $('input:checkbox').removeAttr('checked');
        obj.renitialiser();

    }

    function showForm() {
        $("#results").toggleClass("hidden");
        $("#filtreForm").removeClass("hidden");

    }

    function submitForm() {
        var form = document.getElementById("filtreForm");
        formData = new FormData(form);
        $("#results").removeClass("hidden");
        $("#filtreForm").toggleClass("hidden");

        var ajax = new XMLHttpRequest();
        ajax.open("POST", "./functions.php?cmd=recherche", true);
        ajax.send(formData);
        ajax.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {
                // console.log(this.responseText);

                var data2 = JSON.parse(this.responseText);
                // console.log(data2); 
                var tbdy = document.getElementById('tbody');
                tbdy.innerHTML = '';

                obj.init();
                for (var i = 0; i < data2.length; i++) {

                    obj.showAllFilltred(data2[i].reference, data2[i].etage_id);

                    var tr = document.createElement('tr');
                    tr.setAttribute('onclick', 'obj.showFilltred(' + data2[i].reference + ',' + data2[i].etage_id + ')');

                    var td = document.createElement('td');
                    td.appendChild(document.createTextNode(data2[i].typologie))
                    td.classList.add("p-0");
                    tr.appendChild(td)

                    td = document.createElement('td');
                    td.appendChild(document.createTextNode(data2[i].surface))
                    td.classList.add("p-0");
                    tr.appendChild(td)

                    td = document.createElement('td');
                    td.appendChild(document.createTextNode(data2[i].prix))
                    td.classList.add("p-0");
                    tr.appendChild(td)

                    td = document.createElement('td');
                    td.appendChild(document.createTextNode(data2[i].exposition))
                    td.classList.add("p-0");
                    tr.appendChild(td)

                    td = document.createElement('td');
                    td.appendChild(document.createTextNode(data2[i].nom_etage))
                    td.classList.add("p-0");
                    tr.appendChild(td)




                    tbdy.appendChild(tr);
                }
            }
        };
        return false;
    }
</script>