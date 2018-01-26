let _mf_ = 'S/.';

$(document).ready(function() {

  _mf_ = $('#mony_smbl').val() == '' ? 'S/.' : $('#mony_smbl').val();

  recalculateshopcart();

  // '--Cick en el submit del formulario, cargamos info de la cookie para enviarlo al create your own
  $('#btnGoPayment').click(function() {

    let itms_cart = $('#itms_cart').val().slice(1);
    let monycode = $('#mony_code').val();
    let totalcart = $('#totalcart').val();

    recalculateshopcart();

    //si la funcion existe y sus referencias, se ejecuta.
    if (typeof fbq !== 'undefined' && $.isFunction(fbq)) {
      // FCB pixel
      fbq('track', 'AddToCart', {
        content_ids: itms_cart == '' ? "['']" : "[" + itms_cart + "]",
        content_type: 'product',
        value: mfmt(totalcart).replace(',', ''), //OPTIONAL, but highly recommended
        currency: monycode //REQUIRED if you pass a value
      });
      // Fin FCB pixel
    }

  });

});

let getItemsCart = () => {

  let qty = 0,
    price = 0,
    sku = '',
    gwrap = 0,
    fto = '';

  let cdata = ''; //cadena para la cookie y consulta

  $('.i_prod').each(function() {

    let idx = $(this).attr('id');

    if (idx.startsWith('prod_sku')) {

      sku = $.trim($(this).attr('value'));

    } else if (idx.startsWith('prod_qty')) {

      qty = $.trim($(this).attr('value'));

    } else if (idx.startsWith('prod_pric')) {

      price = $.trim($(this).text().replace(_mf_, ''));

    } else if (idx.startsWith('prod_giftWrapT_')) {

      gwrap = $.trim($(this).attr('value'));

    } else if (idx.startsWith('prod_from_to_')) {

      fto = $.trim($(this).attr('value'));

    }

    if (sku != '' && qty != 0 && price != 0) {
      cdata += `${sku}|${qty}|${price}|${gwrap}|${fto}~`;
      sku = '', qty = 0, price = 0, gwrap = 0, fto = '';
    }

  });

  return cdata;

}

function dcart(t = null) {

  let cdata = (t !== undefined && t !== null) ? $.cookie('_ecmm_shpc') : getItemsCart();

  $('#loadcart').fadeIn(20);

  //console.log('cdata', cdata);

  $.ajax({
    dataType: "json",
    type: "POST",
    contentType: "application/json; charset=utf-8",
    url: "/transdata/wmet_stre_cart.aspx/dcart",
    data: "{'str':'" + cdata + "'}",
    error: function(xhr) {},
    success: function(data) {

      if (data.d != '') {

        $('#dcart').html(data.d);
        $('#loadcart').fadeOut(50);

        $('#wgt_secure').hide();

        $('#wgt_secure').fadeIn(200, function() {
          $('#wgt_secure').html($('#itm_ltr_wdgt_01').val());
        });

        recalculateshopcart();

         if (typeof GetBolsa === 'function') {
            GetBolsa();
            if (typeof ShopcartSumm === 'function') ShopcartSumm();
        }

      } else {
        $('#loadcart').fadeOut(50);
      }
    }

  });
}

function recalculateshopcart() {

  let _p_sku = ''; //codigo de sku del producto
  let _p_price = 0; //precio del producto
  let _p_qty = 0.0; //cantidad seleccionada del producto
  let _p_inv = 0.0; //inventario, stock actual del producto
  let _p_gw = 0; //papel de regalo, activo o no
  let _p_ft = ''; //valor del papel de regalo: de - para

  //coockie cotenido
  let _ckcnt = '';

  //recorriendo los items del carro
  $('.row_item').each(function(idx, value) {

    //capturando los valores principales
    _p_sku = $.trim($('#prod_sku' + idx).val());
    _p_qty = $.trim($('#prod_qty' + idx).val());
    _p_inv = $.trim($('#prod_e_qty' + idx).val());
    _p_price = $.trim($('#prod_pric' + idx).text().replace(_mf_, ''));
    _p_gw = $.trim($('#prod_giftWrapT_' + idx).val());
    _p_ft = $.trim($('#prod_from_to_' + idx).val());

    //si el precio ingresado es mayor a lo que existe en el iventario...se muestra mensaje
    if (parseInt(_p_qty) > parseInt(_p_inv)) {
      $('#msg_stock' + idx).fadeIn(600);
      return;
    } else {
      $('#msg_stock' + idx).fadeOut(250);
    }

    $('#prod_qty' + idx).attr('value', _p_qty);

    //armando cadena de la cookie
    _ckcnt += `${_p_sku}|${_p_qty}|${_p_price}|${_p_gw}|${_p_ft}~`;

    $('#coockshop').val(_ckcnt);

  });

  //creando actualizando la cookie
  $.cookie('_ecmm_shpc', _ckcnt.slice(0, -1), {
    expires: 30,
    path: '/'
  });

}

function noempty(i) {

  let qtyAtrb = $('#prod_qty' + i); //se almacena el elemento(input:qty)
  let qtyInvt = parseInt($.trim($('#prod_e_qty' + i).val())); //se extrae la cantidad actual del inventario del producto
  let qtyO = qtyAtrb.val(); //se obtiene el valor de la cantidad ingresada
  let qtyN = parseInt(qtyO); //se parsea a entero, puede que contenga 0 adelante o este vacio

  qtyN = isNaN(qtyN) ? 1 : qtyN; //se evalua, si no es un numero por default=1 caso contrario la cantidad ingresada
  qtyN = (qtyN == 0) ? 1 : qtyN; //si lo ingresado es 0(cero) se setea = 1 o de lo contrario la cantidad ingresada
  qtyN = (qtyN > qtyInvt) ? qtyInvt : qtyN; //si la cantidad del carro es mayor a lo del inventario, se le da el stock maximo del producto

  qtyAtrb.attr('value', parseInt(qtyN)).val(parseInt(qtyN));
  dcart();

}

function deleteitem(p, sku) {

  let cnt = 0;
  let row2 = $(p).parent().parent().parent();

  $(row2).fadeOut(400, function() {

    //eliminando el item row
    $(row2).remove();

    //recorrer los items para saber si queda algun elemento
    $('.row_item').each(function(indice, valor) {
      cnt++;
    });

    //si no hay elementos disponibles se elimina la cookie
    if (cnt == 0) {
      $.removeCookie('_ecmm_shpc', {
        path: '/'
      });
    }

    dcart();

  });


}

function OnlyNumbers(ev) {

  let currCode = (ev.which) ? ev.which : ev.keyCode;

  if (currCode == 8 || (currCode >= 48 && currCode <= 57)) {
    return true;
  } else {
    return false;
  }

}

function mfmt(num) {
  num = num.toString().replace(/\$|\,/g, '');

  if (isNaN(num))
    num = "0";

  sign = (num == (num = Math.abs(num)));
  num = Math.floor(num * 100 + 0.50000000001);
  cents = num % 100;
  num = Math.floor(num / 100).toString();

  if (cents < 10)
    cents = "0" + cents;

  for (let i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
    num = num.substring(0, num.length - (4 * i + 3)) + ',' +
    num.substring(num.length - (4 * i + 3));

  return (((sign) ? '' : '-') + _mf_ + num + '.' + cents);
}

function validateSpecialChars(_val, idImp) {

  let characterReg = /[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.-\s]*$/;

  let inputVal = $('#' + idImp).val();

  $('#' + idImp).val(inputVal.replace(characterReg, ''));
}

function closeLb() {

  $('#prod_gift_wrap_' + $('#itm_prod_act').val()).attr('checked', false);

  $('#itm_prod_act').val(0);

}

function chk_gift_wp(elm, ctrl, txt) {

  let _ichk = false;

  _ichk = $('#' + elm.id).is(':checked');

  $('#gift_wrap_from').val('');
  $('#gift_wrap_to').val('');
  $('#title_giftW').text('');

  $('#gift_wrap_from').css({
    'border-color': '#ccc'
  });
  $('#gift_wrap_to').css({
    'border-color': '#ccc'
  });

  if (_ichk == true) {

    $('#cntnt_gw_f_' + ctrl).show();
    $('#cntnt_gw_t_' + ctrl).show();
    recalculateshopcart();
  } else {

    $('#itm_prod_act').val('');
    $('#prod_from_to_' + ctrl).val('');
    $('#prod_giftWrapT_' + ctrl).val(0);
    $('#lblFgiftFrom_' + ctrl).val('');
    $('#lblFgiftTo_' + ctrl).val('');

    $('#cntnt_gw_f_' + ctrl).hide();
    $('#cntnt_gw_t_' + ctrl).hide();

    recalculateshopcart();

  }

}

function saveGiftWCk(ctrl) {

  let _from = $('#lblFgiftFrom_' + ctrl).val();
  let _to = $('#lblFgiftTo_' + ctrl).val();
  let _pact = ctrl;

  $('#prod_giftWrapT_' + _pact).val(0);

  if (_from == '' || _to == '') {

    if (_from == '') {
      $('#gift_wrap_from').css({
        'border-color': 'red'
      });
    } else {
      $('#gift_wrap_from').css({
        'border-color': '#ccc'
      });
    }

    if (_to == '') {
      $('#gift_wrap_to').css({
        'border-color': 'red'
      });
    } else {
      $('#gift_wrap_to').css({
        'border-color': '#ccc'
      });
    }

    return false;
  }

  let _setInp = _from + '^' + _to;

  $('#prod_from_to_' + _pact).val(_setInp);
  $('#prod_giftWrapT_' + _pact).val(1);

  recalculateshopcart();
}


(function() {
  $('.cart_item_dsbl').prop('disabled', true);

  jQuery('.vldt').keypress(function(tecla) {
    this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.-\s]*$/, '');
  });

  jQuery('.vldt').keyup(function() {
    this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.-\s]*$/, '');
  });
})
