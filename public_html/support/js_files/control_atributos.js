function al_cambiar_item_cbo() {
    var j = 0;
    j = $('#cont_atrb_group > div').length;
    if (j == 2) {
     si_el_combo_es_0();           
        
    } else {
        if (j == 3) {
            switch (u) {
                case 0:
                    si_el_combo_es_3_0(u);
                    break;
                case 1:
                    si_el_combo_es_3_1(u);
                    break;
                case 2:
                    si_el_combo_es_3_2(u);
                    break;
            }
        }
    }
    var x = 0;
 
}
function si_el_combo_es_0() {
    ctrl_a = 1;
    ctrl_b = 0;
    var constante = $("#hdfcboself").val().split("|");
    var filtro = $("#cmb_" + ctrl_b + " option:selected").text();
    var const_filt = [];
    var h = 0;
    for (var k = 0; k < constante.length ; k += 2) {
        if (constante[k].trim().toLowerCase() == filtro.trim().toLowerCase()) {
            const_filt[h] = constante[k];
            h++;
            const_filt[h] = constante[k + 1];
            h++;
        }
    }   
    array = matrix(1, const_filt.length, const_filt);
     for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            $("#cmb_" + ctrl_a).children().each(function () {
                if (array[i][j].trim().toLowerCase() == $(this).text().trim().toLowerCase()) {
                    $(this).removeAttr("disabled");
                    $(this).removeAttr("style");
                }
            });
        }
    }

    filtro = $("#cmb_" + ctrl_a + " option:selected").text();
    var const_filt_1 = [];
    h = 0;
    for (var k = 1; k < constante.length ; k += 2) {
        if (constante[k].trim() == filtro.trim()) {
            const_filt_1[h] = constante[k - 1];
            h++;
            const_filt_1[h] = constante[k];
            h++;
        }
    }
 
    array1 = matrix(1, const_filt_1.length, const_filt_1);
  
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array1[i].length; j++) {
            $("#cmb_" + ctrl_b).children().each(function () {
                if (array1[i][j] != undefined) {
                    if (array1[i][j].trim().toLowerCase() == $(this).text().trim().toLowerCase()) {
                        $(this).removeAttr("disabled");
                        $(this).removeAttr("style");
                    }
                }
                
            });
        }
    }
}
function si_el_combo_es_1(u) {
    ctrl_a = 0;
    ctrl_b = 1;
    var constante = $("#hdfcboself").val().split("|");
    var filtro = $("#cmb_" + u + " option:selected").text();
    var const_filt = [];
    var h = 0;
    for (var k = 1; k < constante.length - 1; k += 2) {
        if (constante[k].trim() == filtro.trim()) {
            const_filt[h] = constante[k - 1];
            h++;
            const_filt[h] = constante[k];
            h++;
        }
    }
    array = matrix(1, const_filt.length, const_filt);

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            $("#cmb_" + ctrl_a).children().each(function () {
                if (array[i][j].trim().toLowerCase() == $(this).text().trim().toLowerCase()) {
                    $(this).removeAttr("disabled");
                    $(this).removeAttr("style");
                }
            });
        }
    }
    filtro = $("#cmb_" + ctrl_b + " option:selected").text();
}
function si_el_combo_es_3_0(u) {
    ctrl_1 = 1;
    ctrl_2 = 2;
  
    var constante = $("#hdfcboself").val().split("|");
    var filtro = $("#cmb_" + u + " option:selected").text();

    var const_filt = [];
    var h = 0;

    for (var k = 0; k < constante.length ; k += 3) {
        if (constante[k].trim().toLowerCase() == filtro.trim().toLowerCase()) {

            const_filt[h] = constante[k];
            h++;

            const_filt[h] = constante[k + 1];
            h++;

            const_filt[h] = constante[k + 2];
            h++;
        }
    }

    array = matrix(1, const_filt.length, const_filt);
    
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            $("#cmb_" + ctrl_1).children().each(function () {
                if (array[i][j].trim().toLowerCase() == $(this).text().trim().toLowerCase()) {
                    $(this).removeAttr("disabled");
                    $(this).removeAttr("style");
                }
            });
            $("#cmb_" + ctrl_2).children().each(function () {
                if (array[i][j].trim().toLowerCase() == $(this).text().trim().toLowerCase()) {
                    $(this).removeAttr("disabled");
                    $(this).removeAttr("style");
                }
            });
        }
    }
}
function si_el_combo_es_3_1(u) {
    ctrl_1 = 0;
    ctrl_2 = 2;
  
    var constante = $("#hdfcboself").val().split("|");
    var filtro = $("#cmb_" + u + " option:selected").text();

    var const_filt = [];
    var h = 0;

    for (var k = 1; k < constante.length ; k += 3) {
        if (constante[k].trim().toLowerCase() == filtro.trim().toLowerCase()) {

            const_filt[h] = constante[k - 1];
            h++;

            const_filt[h] = constante[k];
            h++;

            const_filt[h] = constante[k + 1];
            h++;
        }
    }

    array = matrix(1, const_filt.length, const_filt);

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            $("#cmb_" + ctrl_1).children().each(function () {
                if (array[i][j].trim().toLowerCase() == $(this).text().trim().toLowerCase()) {
                    $(this).removeAttr("disabled");
                    $(this).removeAttr("style");
                }
            });
            $("#cmb_" + ctrl_2).children().each(function () {
                if (array[i][j].trim().toLowerCase() == $(this).text().trim().toLowerCase()) {
                    $(this).removeAttr("disabled");
                    $(this).removeAttr("style");
                }
            });
        }
    }
}
function si_el_combo_es_3_2(u) {
    ctrl_1 = 0;
    ctrl_2 = 1;
  
    var constante = $("#hdfcboself").val().split("|");
    var filtro = $("#cmb_" + u + " option:selected").text();

    var const_filt = [];
    var h = 0;

    for (var k = 2; k < constante.length ; k += 3) {
        if (constante[k].trim().toLowerCase() == filtro.trim().toLowerCase()) {

            const_filt[h] = constante[k - 2];
            h++;

            const_filt[h] = constante[k - 1];
            h++;

            const_filt[h] = constante[k];
            h++;
        }
    }

    array = matrix(1, const_filt.length, const_filt);

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            $("#cmb_" + ctrl_1).children().each(function () {
                if (array[i][j].trim().toLowerCase() == $(this).text().trim().toLowerCase()) {
                    $(this).removeAttr("disabled");
                    $(this).removeAttr("style");
                }
            });
            $("#cmb_" + ctrl_2).children().each(function () {
                if (array[i][j].trim().toLowerCase() == $(this).text().trim().toLowerCase()) {
                    $(this).removeAttr("disabled");
                    $(this).removeAttr("style");
                }
            });
        }
    }
}
function matrix(rows, cols, defaultValue) {

    var arr = [];

    for (var i = 0; i < rows; i++) {
        arr.push([]);
        arr[i].push(new Array(cols));
        for (var j = 0; j < cols; j++) {
            arr[i][j] = defaultValue[j];
        }
    }

    return arr;
}