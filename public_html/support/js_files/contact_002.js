jQuery('#txtNomApes').keyup(function (tecla) {
    this.value = this.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/, '');
});
jQuery('#txtEmpresa').keyup(function (tecla) {
    this.value = this.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/, '');
});
jQuery('#txtTlef').keyup(function (tecla) {
    this.value = this.value.replace(/[^0-9]/g, '');
});
jQuery('#txtCelular').keyup(function (tecla) {
    this.value = this.value.replace(/[^0-9]/g, '');
});
jQuery('#txtCiudad').keyup(function (tecla) {
    this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.-\s]*$/, '');
});
jQuery('#txt_prod_type_sls').keyup(function (tecla) {
    this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.-\s]*$/, '');
});
jQuery('#txt_email').keyup(function (tecla) {
    this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ@_.\s]*$/, '');
});
jQuery('#txtQtyProds').keyup(function (tecla) {
    this.value = this.value.replace(/[^0-9]/g, '');
});
jQuery('#txtUbiClient').keyup(function (tecla) {
    this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.-\s]*$/, '');
});


function initControl() {
   
    $("#txtNomApes").attr('maxlength', '50');
    $("#txtEmpresa").attr('maxlength', '50');
    $("#txtCliEmail").attr('maxlength', '34');
    $("#txtTlef").attr('maxlength', '10');
    $("#txtCelular").attr('maxlength', '11');
    $("#txtCiudad").attr('maxlength', '40');
    $("#txt_prod_type_sls").attr('maxlength', '50');
    $("#txtQtyProds").attr('maxlength', '6');
    $("#txtUbiClient").attr('maxlength', '44');
    $("#txtContnt").attr('maxlength', '5000'); 

}

var _pxTop = '88px';
function validafrmContct() {

    var sw = true;

    _pxTop = '88px';

    if ($("#txtNomApes")[0]) {
        if ($("#txtNomApes").val().length < 2) {
            sw = false;
            $('#txtNomApes').css({ 'border-color': 'red' });
            $('#txtNomApes').focus();
            return false;
        }
        else {
            $('#txtNomApes').css({ 'border-color': '#ccc' });
        }
    }

    var txt_email = $("#txtCliEmail").val();
    if ($("#txtCliEmail")[0]) {
        var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
        if (regex.test(txt_email)) {
            $('#txtCliEmail').css({ 'border-color': '#ccc' });

            sw = true;
        } else {
            $('#txtCliEmail').css({ 'border-color': 'red' });

            sw = false;
            $('#txtCliEmail').focus();
            _pxTop = '160px';
            return false;

        }
    }

    if ($("#txtTlef")[0]) {
        if ($("#txtTlef").val().length < 6) {
            sw = false;
            $('#txtTlef').css({ 'border-color': 'red' });
             $('#txtTlef').focus();
            _pxTop = '230px';
            return false;
            
        }
        else {
            $('#txtTlef').css({ 'border-color': '#ccc' });
        }
    }
    
     
    
       if ($('#tngo_tienda').val() == 0) {
            $('#lbl_op1').css({ 'color': 'red' })
            $('#lbl_op2').css({ 'color': 'red' })
            sw = false;
            _pxTop = '480px';
            return false;
        } else {
            $('#lbl_op1').css({ 'color': '#333' });
            $('#lbl_op2').css({ 'color': '#333' });

            if ($('#txtTutienda').val() == '' && $('#txtNameVend').val() == '' && $('#tngo_tienda').val() == 1) {
                $('#txtTutienda').focus();
                sw = false;
                _pxTop = '520px';
                return false;
            }

        }
    
        
    return sw;
}


initControl();

function SendMail() {
    
    if (validafrmContct()) {

        var _nomap = $('#txtNomApes').val();
        var _emp = $('#txtEmpresa').val();
        var _eml = $('#txtCliEmail').val();
        var _tfl = $('#txtTlef').val();
        var _cel = $('#txtCelular').val();
        var _cty = $('#txtCiudad').val();
        var _ctry = $("#txtPais").val();
        var _salsOnln = $("#tngo_tienda").val();
        var _url = $('#txtTutienda').val();
        var _namvnd = $('#txtNameVend').val();
        var _typprod = $('#txt_prod_type_sls').val();
        var _qty_prod = $('#txtQtyProds').val();
        var _ubiCli = $('#txtUbiClient').val();
        var _idm = $("#cmb_idioma option:selected").val();
        var _money = $("#cmb_moneda option:selected").val();
        var _msj = $('#txtContnt').val();

        $.ajax({
            dataType: "json", type: "POST", contentType: "application/json; charset=utf-8",
            async: false,
            url: "/transdata/wmet_stre_claims_book.aspx/contact_us_send_mail",
            data: "{'nom':'" + _nomap + "','empr':'" + _emp +
                    "','mail':'" + _eml + "','tlf':'" + _tfl +
                    "','cel':'" + _cel +
                    "','cty':'" + _cty + "','ctry':'" + _ctry +
                    "','vonl':'" + _salsOnln + "','url':'" + _url +
                    "','nvnd':'" + _namvnd + "','typp':'" + _typprod +
                    "','qtyp':'" + _qty_prod + "','ubicl':'" + _ubiCli +
                    "','idm':'" + _idm + "','mond':'" + _money +
                    "','msnj':'" + _msj + "'}",
            error: function (xhr) {
                alert(xhr);
            },
            success: function (data) {
                if (data != '') {
                    window.location.href = "/process/ctzathanks";
                }
            }
        });
    } else {
        $('html, body').animate({
            scrollTop: _pxTop
        },170);

    }


    /*
    
     $('html, body').animate({
        scrollTop: $(document).height()
    },
        1000);

    */
}