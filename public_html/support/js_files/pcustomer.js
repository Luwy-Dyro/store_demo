jQuery('#txtNombs').keyup(function (tecla) {
    this.value = this.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/, '');
});
jQuery('#txtApePat').keyup(function (tecla) {
    this.value = this.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/, '');
});
jQuery('#txtApeMat').keyup(function (tecla) {
    this.value = this.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/, '');
});
jQuery('#txtDocStr').keyup(function (tecla) {
    this.value = this.value.replace(/[^0-9]/g, '');
});
jQuery('#txt_telf').keyup(function (tecla) {
    this.value = this.value.replace(/[^0-9]/g, '');
});
jQuery('#txt_celphone').keyup(function (tecla) {
    this.value = this.value.replace(/[^0-9]/g, '');
});
jQuery('#txt_direcc').keyup(function (tecla) {
    this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.-\s]*$/, '');
});
jQuery('#txt_reg_city').keyup(function (tecla) {
    this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.-\s]*$/, '');
});
jQuery('#txt_email').keyup(function (tecla) {
    this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ@_.\s]*$/, '');
});
jQuery('#txt_reg_prov').keyup(function (tecla) {
    this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.-\s]*$/, '');
});
jQuery('#txt_reg_distr').keyup(function (tecla) {
    this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.-\s]*$/, '');
});


function initControl() {
   
    $("#txtNombs").attr('maxlength', '50');
    $("#txtApePat").attr('maxlength', '50');
    $("#txtApeMat").attr('maxlength', '50');
    $("#txtDocStr").attr('maxlength', '8');
    $("#txt_telf").attr('maxlength', '8');
    $("#txt_celphone").attr('maxlength', '10');
    $("#txt_email").attr('maxlength', '34');
    $("#txt_direcc").attr('maxlength', '150');
    $("#txt_reg_city").attr('maxlength', '30');
    $("#txt_reg_prov").attr('maxlength', '30');
    $("#txt_reg_distr").attr('maxlength', '25');
    $("#ctype_rclm").prop("checked", true);
}
function validafrmPcustomer() {
    var sw = true;
    if ($("#txtNombs")[0]) {
        if ($("#txtNombs").val().length < 2) {
            sw = false;
            $('#txtNombs').css({ 'border-color': 'red' });
            //$('#ltxtNombs').css({ 'color': 'red' });
        }
        else {
            $('#txtNombs').css({ 'border-color': '#ccc' });
           // $('#ltxtNombs').css({ 'color': '#282828' });
        }
    }
    if ($("#txtApePat")[0]) {
        if ($("#txtApePat").val().length < 2) {
            sw = false;
            $('#txtApePat').css({ 'border-color': 'red' });
            $('#ltxtApePat').css({ 'color': 'red' });
        }
        else {
            $('#txtApePat').css({ 'border-color': '#ccc' });
            $('#ltxtApePat').css({ 'color': '#282828' });
        }
    }
    if ($("#txtApeMat")[0]) {
        if ($("#txtApeMat").val().length < 2) {
            sw = false;
            $('#txtApeMat').css({ 'border-color': 'red' });
            $('#ltxtApeMat').css({ 'color': 'red' });
        }
        else {
            $('#txtApeMat').css({ 'border-color': '#ccc' });
            $('#ltxtApeMat').css({ 'color': '#282828' });
        }
    }
        if ($("#txtDocStr")[0]) {
        if ($("#txtDocStr").val().length < 8) {
            sw = false;
            $('#txtDocStr').css({ 'border-color': 'red' });
            $('#ltxtDocStr').css({ 'color': 'red' })
        }
        else {
            $('#txtDocStr').css({ 'border-color': '#ccc' });
            $('#ltxtDocStr').css({ 'color': '#282828' });
        }
        }

        var cmb_day = $('#cmb_day option:selected').val();
        if (cmb_day == 0) {
            $('#cmb_day').css({ 'border-color': 'red' });
            sw = false;
        } else {
            $('#cmb_day').css({ 'border-color': '#ccc' });
        }

        var cmb_mnth = $('#cmb_mnth option:selected').val();
        if (cmb_mnth == 0) {
            $('#cmb_mnth').css({ 'border-color': 'red' });
            sw = false;
        } else {
            $('#cmb_mnth').css({ 'border-color': '#ccc' });
        }

        var cmb_year = $('#cmb_year option:selected').val();
        if (cmb_year == 0) {
            $('#cmb_year').css({ 'border-color': 'red' });
            sw = false;
        } else {
            $('#cmb_year').css({ 'border-color': '#ccc' });
        }

   
        if ($("#txt_telf")[0]) {
            if ($("#txt_telf").val().length < 8) {
                sw = false;
                $('#txt_telf').css({ 'border-color': 'red' });
                $('#ltxt_telf').css({ 'color': 'red' })
            }
            else {
                $('#txt_telf').css({ 'border-color': '#ccc' });
                $('#ltxt_telf').css({ 'color': '#282828' });
            }
        }


        if ($("#txt_celphone")[0]) {
            if ($("#txt_celphone").val().length < 9) {
                sw = false;
                $('#txt_celphone').css({ 'border-color': 'red' });
                $('#ltxt_celphone').css({ 'color': 'red' });
            }
            else {
                $('#txt_celphone').css({ 'border-color': '#ccc' });
                $('#ltxt_celphone').css({ 'color': '#282828' });
            }
        }
       
        if ($("#txt_email")[0]) {
            if ($("#txt_email").val().length < 5) {
                sw = false;
                $('#txt_email').css({ 'border-color': 'red' });
                $('#ltxt_email').css({ 'color': 'red' });
            }
            else {
                $('#txt_email').css({ 'border-color': '#ccc' });
                $('#ltxt_email').css({ 'color': '#282828' });
            }
        }

        var txt_email = $("#txt_email").val();
        if ($("#txt_email")[0]) {
            var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
            if (regex.test(txt_email)) {
                $('#txt_email').css({ 'border-color': '#ccc' });
                $('#ltxt_email').css({ 'color': '#282828' });
                sw = true;
            } else {
                $('#txt_email').css({ 'border-color': 'red' });
                $('#ltxt_email').css({ 'color': 'red' });
                sw = false;
            }
        }
    
        var cmb_ctry = $('#cmb_year option:selected').val();
        if (cmb_ctry == 0) {
            $('#cmb_ctry').css({ 'border-color': 'red' });
            sw = false;
        } else {
            $('#cmb_ctry').css({ 'border-color': '#ccc' });
        }
    
        var cmb_state = $('#cmb_state option:selected').val();
        if (cmb_state == 0) {
            $('#cmb_state').css({ 'border-color': 'red' });
            sw = false;
        } else {
            $('#cmb_state').css({ 'border-color': '#ccc' });
        }

    if ($("#txt_reg_prov")[0]) {
        if ($("#txt_reg_prov").val().length < 3) {
            sw = false;
            $('#txt_reg_prov').css({ 'border-color': 'red' });
            $('#txt_reg_prov').css({ 'color': 'red' });
        }
        else {
            $('#txt_reg_prov').css({ 'border-color': '#ccc' });
            $('#txt_reg_prov').css({ 'color': '#282828' });
        }
    }
    if ($("#txt_reg_distr")[0]) {
        if ($("#txt_reg_distr").val().length < 3) {
            sw = false;
            $('#txt_reg_distr').css({ 'border-color': 'red' });
            $('#txt_reg_distr').css({ 'color': 'red' });
        }
        else {
            $('#txt_reg_distr').css({ 'border-color': '#ccc' });
            $('#txt_reg_distr').css({ 'color': '#282828' });
        }
    }
 
    if ($("#txt_direcc")[0]) {
        if ($("#txt_direcc").val().length < 5) {
            sw = false;
            $('#txt_direcc').css({ 'border-color': 'red' });
            $('#ltxt_direcc').css({ 'color': 'red' });
        }
        else {
            $('#txt_direcc').css({ 'border-color': '#ccc' });
            $('#ltxt_direcc').css({ 'color': '#282828' });
        }
    }
   
    if ($("#acepttermns")[0]) {
        if ($("#acepttermns").is(':checked')) {
            $('#acepttermns').css({ 'border-color': '#ccc' });
            $('#validateacept').css({ 'color': '#282828' });
        } else {
            $('#acepttermns').css({ 'border-color': 'red' });
            $('#validateacept').css({ 'color': 'red' });
            sw = false;
        }
    }

  
    return sw;
}


initControl();

function prf_cstmr_save() {
    //console.log(validafrmPcustomer());

    if (validafrmPcustomer()) {

        var _AceptTerms = jQuery("input[id=acepttermns]:checked").val();

        if (_AceptTerms == undefined) _AceptTerms = 0;

        if (_AceptTerms != 1) {
            alert('Es necesario que aceptes los terminos.');
            return false;
        }

        var _dia = $('#cmb_day option:selected').val();
        var _mes = $('#cmb_mnth option:selected').val();
        var anio = $('#cmb_year option:selected').val();

        var _dmn = 0;
        var _fname = $('#txtNombs').val();
        var _lnme = $('#txtApePat').val() + ' ' + $('#txtApeMat').val();
        var _doc = $('#txtDocStr').val();
        var _gnr = $('input[name=clms_type]:checked', '#form1').val();
        var _brt = _dia + '|' + _mes + '|' + anio;
        var _rphon = $('#txt_telf').val();
        var _clphne = $('#txt_celphone').val();
        var _eml = $('#txt_email').val();
        var _ctry = $('#cmb_ctry option:selected').val();
        var _stte = $('#cmb_state option:selected').val();
        var _prov = $('#txt_reg_prov').val();
        var _dstri = $('#txt_reg_distr').val();
        var _direcc = $('#txt_direcc').val();

        $.ajax({
            dataType: "json", type: "POST", contentType: "application/json; charset=utf-8",
            async: false,
            url: "/transdata/wmet_stre_pfrd_customer.aspx/pcustomer_create",
            data: "{'dmn':'" + _dmn + "','fname':'" + _fname +
                   "','lnme':'" + _lnme +
                    "','doc':'" + _doc + "','gnr':'" + _gnr +
                    "','brt':'" + _brt + "','rphon':'" + _rphon +
                    "','clphne':'" + _clphne + "','eml':'" + _eml +
                    "','ctry':'" + _ctry + "','stte':'" + _stte +
                    "','prov':'" + _prov + "','dstri':'" + _dstri +
                    "','direcc':'" + _direcc + "'}",


            error: function (xhr) {
                alert(xhr);
            },
            success: function (data) {
                if (data != '') {
                    alert("Registro exitoso!");
                    location.reload();
                }
            }
        })
    } 
}