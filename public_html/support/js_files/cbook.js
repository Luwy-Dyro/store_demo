
$(document).ready(function() {

  $('#cmb_ctry').change(function() {
    var _estl = $('#hdf_cstts').val();
    var _sc = $(this);
    var _sts = $('#cmb_state');
    var _tst = $('#cliRegState');
    var _fzn = '00';
    _sts.children().remove();
    if (_estl.indexOf(';' + _sc.val() + ',') >= 0) {
      _sts.children().remove();

      var _este = _estl.split(';');
      var _estel = '';
      var _esta = '';
      var _jsnp = [];
      var _jsni = {};
      _esta = '"0":"—"';

      for (i = 0; i < _este.length; i++) {
        _estel = _este[i].split(',');
        if (_estel[0] == _sc.val()) {
          _esta += ',"' + _estel[1] + '":"' + _estel[2] + '"';
        }
      }

      _jsnp = JSON.parse("{" + _esta + "}");

      $.each(_jsnp, function(key, value) {
        _sts
          .append($("<option></option>")
            .attr('value', key)
            .text(value));
      });

      _sts.css({
        'display': 'block',
        'float': 'left'
      });
      _tst.css({
        'display': 'none'
      });
    }

  });

  $('#txt_NomApodrd').hide();
  $('#lbl_nomapor').hide();

  $('#chk_mnrage').click(function() {
    if (!$(this).is(':checked')) {
      $('#txt_NomApodrd').hide();
      $('#lbl_nomapor').hide();
    } else {
      $('#txt_NomApodrd').show();
      $('#lbl_nomapor').show();
    }
  });

  $('input[type=radio][name=clms_type]').change(function() {
    if (this.value == 2) {
      $('#EmpresaCtrls').show();
    } else {
      $('#EmpresaCtrls').hide();
    }

  });

});

jQuery('#txtNombs').keyup(function(tecla) {
  this.value = this.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/, '');
});
jQuery('#txtApePat').keyup(function(tecla) {
  this.value = this.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/, '');
});
jQuery('#txtApeMat').keyup(function(tecla) {
  this.value = this.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/, '');
});
jQuery('#txtDocStr').keyup(function(tecla) {
  this.value = this.value.replace(/[^0-9]/g, '');
});
jQuery('#txt_telf').keyup(function(tecla) {
  this.value = this.value.replace(/[^0-9]/g, '');
});
jQuery('#txt_celphone').keyup(function(tecla) {
  this.value = this.value.replace(/[^0-9]/g, '');
});
jQuery('#txt_direcc').keyup(function(tecla) {
  this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.-\s]*$/, '');
});
jQuery('#txt_reg_city').keyup(function(tecla) {
  this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.-\s]*$/, '');
});
jQuery('#txt_dscr_prdsrv').keyup(function(tecla) {
  this.value = this.value.replace(/[`~!@#$%^&*()_°¬|+\=?¨'´<>\{\}\[\]\\\/]/gi, '');
});
jQuery('#txt_dtl_clm').keyup(function(tecla) {
  this.value = this.value.replace(/[`~!@#$%^&*()_°¬|+\=?¨'´<>\{\}\[\]\\\/]/gi, '');
});
jQuery('#txt_razn_social').keyup(function(tecla) {
  this.value = this.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/, '');
});
jQuery('#txtRuc').keyup(function(tecla) {
  this.value = this.value.replace(/[^0-9]/g, '');
});
jQuery('#txt_NomApodrd').keyup(function(tecla) {
  this.value = this.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/, '');
});
jQuery('#txt_email').keyup(function(tecla) {
  this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ@_.\s]*$/, '');
});

function initControl() {
  $("#txtNombs").attr('maxlength', '50');
  $("#txtApePat").attr('maxlength', '50');
  $("#txtApeMat").attr('maxlength', '50');
  $("#txtDocStr").attr('maxlength', '15');
  $("#txt_telf").attr('maxlength', '15');
  $("#txt_celphone").attr('maxlength', '15');
  $("#txt_email").attr('maxlength', '100');
  $("#txt_direcc").attr('maxlength', '150');
  $("#txt_reg_city").attr('maxlength', '30');
  $("#txt_dscr_prdsrv").attr('maxlength', '500');
  $("#txt_dtl_clm").attr('maxlength', '4000');
  $("#txt_razn_social").attr('maxlength', '120');
  $("#txtRuc").attr('maxlength', '15');
  $("#txt_NomApodrd").attr('maxlength', '150');

  $("#ctype_rclm").prop("checked", true);
}

function validacbook() {
  var sw = true;

  if ($("#txt_razn_social")[0]) {
    if ($('#txt_razn_social').is(':visible')) {
      if ($("#txt_razn_social").val().length < 10) {
        sw = false;
        $('#txt_razn_social').css({
          'border-color': 'red'
        });
        $('#ltxt_razn_social').css({
          'color': 'red'
        });
      } else {
        $('#txt_razn_social').css({
          'border-color': '#ccc'
        });
        $('#ltxt_razn_social').css({
          'color': '#282828'
        });
      }
    }
  }
  if ($("#txtRuc")[0]) {
    if ($('#txt_razn_social').is(':visible')) {
      if ($("#txtRuc").val().length != 11) {
        sw = false;
        $('#txtRuc').css({
          'border-color': 'red'
        });
        $('#ltxtRuc').css({
          'color': 'red'
        });
      } else {
        $('#txtRuc').css({
          'border-color': '#ccc'
        });
        $('#ltxtRuc').css({
          'color': '#282828'
        });
      }
    }
  }

  if ($("#txtNombs")[0]) {
    if ($("#txtNombs").val().length < 2) {
      sw = false;
      $('#txtNombs').css({
        'border-color': 'red'
      });
      //$('#ltxtNombs').css({ 'color': 'red' });
    } else {
      $('#txtNombs').css({
        'border-color': '#ccc'
      });
      // $('#ltxtNombs').css({ 'color': '#282828' });
    }
  }
  if ($("#txtApePat")[0]) {
    if ($("#txtApePat").val().length < 2) {
      sw = false;
      $('#txtApePat').css({
        'border-color': 'red'
      });
      $('#ltxtApePat').css({
        'color': 'red'
      });
    } else {
      $('#txtApePat').css({
        'border-color': '#ccc'
      });
      $('#ltxtApePat').css({
        'color': '#282828'
      });
    }
  }
  if ($("#txtApeMat")[0]) {
    if ($("#txtApeMat").val().length < 2) {
      sw = false;
      $('#txtApeMat').css({
        'border-color': 'red'
      });
      $('#ltxtApeMat').css({
        'color': 'red'
      });
    } else {
      $('#txtApeMat').css({
        'border-color': '#ccc'
      });
      $('#ltxtApeMat').css({
        'color': '#282828'
      });
    }
  }
  if ($("#txtDocStr")[0]) {
    if ($("#txtDocStr").val().length < 8) {
      sw = false;
      $('#txtDocStr').css({
        'border-color': 'red'
      });
      $('#ltxtDocStr').css({
        'color': 'red'
      })
    } else {
      $('#txtDocStr').css({
        'border-color': '#ccc'
      });
      $('#ltxtDocStr').css({
        'color': '#282828'
      });
    }
  }
  if ($("#txt_NomApodrd")[0]) {
    if ($('#txt_NomApodrd').is(':visible')) {
      if ($("#txt_NomApodrd").val().length < 10) {
        sw = false;
        $('#txt_NomApodrd').css({
          'border-color': 'red'
        });
        $('#lbl_nomapor').css({
          'color': 'red'
        });
      } else {
        $('#txt_NomApodrd').css({
          'border-color': '#ccc'
        });
        $('#lbl_nomapor').css({
          'color': '#282828'
        });
      }
    }
  }

  if ($("#txt_telf")[0]) {
    if ($("#txt_telf").val().length < 5) {
      sw = false;
    }
  }

  if ($("#txt_telf")[0]) {
    if ($("#txt_telf").val().length < 9) {
      sw = false;
      $('#txt_telf').css({
        'border-color': 'red'
      });
      $('#ltxt_telf').css({
        'color': 'red'
      })
    } else {
      $('#txt_telf').css({
        'border-color': '#ccc'
      });
      $('#ltxt_telf').css({
        'color': '#282828'
      });
    }
  }
  if ($("#txt_celphone")[0]) {
    if ($("#txt_celphone").val().length < 9) {
      sw = false;
      $('#txt_celphone').css({
        'border-color': 'red'
      });
      $('#ltxt_celphone').css({
        'color': 'red'
      });
    } else {
      $('#txt_celphone').css({
        'border-color': '#ccc'
      });
      $('#ltxt_celphone').css({
        'color': '#282828'
      });
    }
  }
  if ($("#txt_email")[0]) {
    if ($("#txt_email").val().length < 5) {
      sw = false;
      $('#txt_email').css({
        'border-color': 'red'
      });
      $('#ltxt_email').css({
        'color': 'red'
      });
    } else {
      $('#txt_email').css({
        'border-color': '#ccc'
      });
      $('#ltxt_email').css({
        'color': '#282828'
      });
    }
  }

  var txt_email = $("#txt_email").val();
  if ($("#txt_email")[0]) {
    var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    if (regex.test(txt_email)) {
      $('#txt_email').css({
        'border-color': '#ccc'
      });
      $('#ltxt_email').css({
        'color': '#282828'
      });
      sw = true;
    } else {
      $('#txt_email').css({
        'border-color': 'red'
      });
      $('#ltxt_email').css({
        'color': 'red'
      });
      sw = false;
    }
  }

  if ($("#txt_direcc")[0]) {
    if ($("#txt_direcc").val().length < 5) {
      sw = false;
      $('#txt_direcc').css({
        'border-color': 'red'
      });
      $('#ltxt_direcc').css({
        'color': 'red'
      });
    } else {
      $('#txt_direcc').css({
        'border-color': '#ccc'
      });
      $('#ltxt_direcc').css({
        'color': '#282828'
      });
    }
  }
  if ($("#txt_dscr_prdsrv")[0]) {
    if ($("#txt_dscr_prdsrv").val().length < 10) {
      sw = false;
      $('#txt_dscr_prdsrv').css({
        'border-color': 'red'
      });
      $('#ltxt_dscr_prdsrv').css({
        'color': 'red'
      });
    } else {
      $('#txt_dscr_prdsrv').css({
        'border-color': '#ccc'
      });
      $('#ltxt_dscr_prdsrv').css({
        'color': '#282828'
      });
    }
  }
  if ($("#txt_dscr_prdsrv")[0]) {
    if ($("#txt_dscr_prdsrv").val().length < 10) {
      sw = false;
      $('#txt_dscr_prdsrv').css({
        'border-color': 'red'
      });
      $('#ltxt_dscr_prdsrv').css({
        'color': 'red'
      });
    } else {
      $('#txt_dscr_prdsrv').css({
        'border-color': '#ccc'
      });
      $('#ltxt_dscr_prdsrv').css({
        'color': '#282828'
      });
    }
  }

  if ($("#txt_reg_city")[0]) {
    if ($("#txt_reg_city").val().length < 2) {
      sw = false;
      $('#txt_reg_city').css({
        'border-color': 'red'
      });
      $('#ltxt_reg_city').css({
        'color': 'red'
      });
    } else {
      $('#txt_reg_city').css({
        'border-color': '#ccc'
      });
      $('#ltxt_reg_city').css({
        'color': '#282828'
      });
    }
  }

  if ($("#txt_dtl_clm")[0]) {
    if ($("#txt_dtl_clm").val().length < 10) {
      sw = false;
      $('#txt_dtl_clm').css({
        'border-color': 'red'
      });
      $('#ltxt_dtl_clm').css({
        'color': 'red'
      });
    } else {
      $('#txt_dtl_clm').css({
        'border-color': '#ccc'
      });
      $('#ltxt_dtl_clm').css({
        'color': '#282828'
      });
    }
  }

  return sw;
}

initControl();

function guardarReclamo() {

  $('html, body').animate({
    scrollTop: '40px'
  }, 40);

  if (validacbook()) {

    $('#loaderreg').show();
    $('#frm_cbook').addClass('disableAll');

    var _dmn = 0;
    var _tyclms = $('input[name=clms_type]:checked', '#form1').val();
    var _rzsc = $('#txt_razn_social').val();
    var _ruc = $('#txtRuc').val();
    var _nme = $('#txtNombs').val();
    var _lnme = $('#txtApePat').val() + ' ' + $('#txtApeMat').val();
    var _doc = $("#cmb_typeDoc option:selected").val();
    var _ndoc = $('#txtDocStr').val();
    var _attnt = $('#txt_NomApodrd').val();
    var _phne = $('#txt_telf').val();
    var _cphne = $('#txt_celphone').val();
    var _eml = $('#txt_email').val();
    var _drcc = $('#txt_direcc').val();
    var _ctry = $('#cmb_ctry option:selected').val();
    var _ctryTXT = $('#cmb_ctry option:selected').text();
    var _stte = $('#cmb_state option:selected').val();
    var _stteTXT = $('#cmb_state option:selected').text();
    var _cty = $('#txt_reg_city').val();
    var _tclm = $('input[name=cl_type]:checked', '#form1').val();
    var _dscrp = $('#txt_dscr_prdsrv').val();
    var _detll = $('#txt_dtl_clm').val();

    let datos = {
      dmn: _dmn,
      tyclms: _tyclms,
      rznsc: _rzsc,
      ruc: _ruc,
      nme: _nme,
      lnme: _lnme,
      doc: _doc,
      ndoc: _ndoc,
      attnt: _attnt,
      phne: _phne,
      cphne: _cphne,
      eml: _eml,
      drcc: _drcc,
      ctry: _ctry,
      stte: _stte,
      cty: _cty,
      tclm: _tclm,
      dscrp: _dscrp,
      detll: _detll,
      ctryTxt: _ctryTXT,
      sttTXT: _stteTXT
    };

    $.ajax({
      dataType: "json",
      type: "POST",
      contentType: "application/json; charset=utf-8",
      url: "/transdata/wmet_stre_claims_book.aspx/cbook_create",
      data: JSON.stringify(datos),
      error: function(xhr) {
        console.log(xhr);
      },
      success: function(data) {
        if (data.d.toString().includes('OK')) {

          $('#loaderreg').hide();
          $('#frm_cbook').removeClass('disableAll');

          let result = data.d.toString().split('_')[1];

          $('#msg_db').html('').append(`Hola ${_nme} ${_lnme},
            tu reclamo fue registrado exitosamente con el nro: <b>${result}</b>
            te mantendremos informado a la brevedad.`);

          $('#mdl_thnks').modal('show');

          $('#form1')[0].reset();
          $('#form1').trigger("reset");

        }
      }
    });
  } else {
    $('#loaderreg').hide();
    $('#frm_cbook').removeClass('disableAll');
  }
}
