restaFechas = function (f1, f2) {
    var dif = f1 - f2;
    var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
    return dias;
}
Date.prototype.addDays = function (days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}
$.date = function (dateObject) {
    var d = new Date(dateObject);
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
    var date = day + "/" + month + "/" + year;

    return date;
};
function diaonclick(e) {
    if (e.value == 'Día') { e.value = '' }
}
function diaononblur(e) {
    if (e.value == '') { e.value = 'Día' }
}
function mesonclick(e) {
    if (e.value == 'Mes') { e.value = '' }
}
function mesononblur(e) {
    if (e.value == '') { e.value = 'Mes' }
}
function anoonclick(e) {
    if (e.value == 'Año') { e.value = '' }
}
function anoononblur(e) {
    if (e.value == '') { e.value = 'Año' }
}
function calanio() {
    var dia = $('#txtdia').val();
    var mes = $('#txtmes').val();
    var anio = $('#txtano').val();
    var pais = $('#txtpais option:selected').text();
    if ($('#txtano').val() != '' && $('#txtmes').val() != '' && $('#txtdia').val() != '') {
        if (calage()) {
            var fecha = new Date(anio, mes, dia);

            var _fecha = new Date();
            var dia = restaFechas(_fecha, fecha);
            var tano = (dia / 363.555555555556);
                      if (isNaN(tano)) {
                return;
            } else {
                if (tano >= 17.99999999999998) {
                    var value = 'pais=' + pais + ',fecha=' + fecha;
                    $('#msg_prcs_cntn').hide();
                    $('#msg_page_base').hide();
                    if ($('#checkboxG4').prop('checked')) {
                        setCookie('_ecmm_ageg', value, 360);
                    }
                    else {
                        setCookie('_ecmm_ageg', value, 1);
                    }
                    location.reload();
                }
                else {
                    $(location).attr('href', 'http://www.talkingalcohol.com/espanol/')
                    $('#txtdia').val('');
                    $('#txtmes').val('');
                    $('#txtano').val('');
                }
            }
        }else{
            $('#txtdia').val('');
            $('#txtmes').val('');
            $('#txtano').val('');
        }

    } else {
        $('#txtdia').val('');
        $('#txtmes').val('');
        $('#txtano').val('');
    }
}
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + '=');
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(';', c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return null;
}

/*validacion*/
(function ($) {
    $.get = function (key) {
        key = key.replace(/[\[]/, '\\[');
        key = key.replace(/[\]]/, '\\]');
        var pattern = "[\\?&]" + key + "=([^&#]*)";
        var regex = new RegExp(pattern);
        var url = unescape(window.location.href);
        var results = regex.exec(url);
        if (results === null) {
            return null;
        } else {
            return results[1];
        }
    }
})(jQuery);

function getSeconds(timestamp) {
    var date = new Date(timestamp);
    var seconds = date.getSeconds();
    return seconds;
}
function getMinutes(timestamp) {
    var date = new Date(timestamp);
    var minute = date.getMinutes();
    return minute;
}
function init() {
    var cokis = getCookie('_ecmm_ageg');
    if (cokis == null) {
        var ps = $("#commContentHeader_hddpais").val().split(',');
        var divpais = "<div class='agegate_country'>";
        divpais = divpais + "<select id='txtpais'>";
        for (var i = 0; i < ps.length; i++) {
            divpais = divpais + '<option>' + ps[i] + '</option>';
        }
        divpais = divpais + '</select>';
        divpais = divpais + ' </div>';
        var html = "<div class='container-fluid'>";
        html = html + "<div class='row'>";
        html = html + "<div class='agegate'>";
        html = html + " <div class='age_header'>";
        html = html + " </div>";
        html = html + " <div class='age_body'>";
        html = html + "   <div class='age_logo'>";
        html = html + "  <img width='auto' height='auto' class='img-responsive' src='/centralfile/00000002/es-PE/images/logo/logo_agegate.png' alt='Tienda Pilsen'>";
        html = html + " </div>";
        html = html + " <div class='title'><strong>INGRESA TUS DATOS</strong> </div>";
        html = html + " <p>Para ingresar a la Tienda Pilsen <span>debes ser mayor de 18 años.</span></p>";
        html = html + "<div id='divpais'></div>";
        html = html + "<div id='diverror'></div>";
        html = html + " <b>Fecha de Nacimiento</b>";
        html = html + " <div id='divdate'>";
        html = html + " <input id='txtdia' type='text' maxlength='2' class='form-text' size='2' value='Día' onfocus='diaonclick(this)' onblur='diaononblur(this)'  >";
        html = html + " <input id='txtmes' type='text'  class='form-text' maxlength='2' size='2' value='Mes' onfocus='mesonclick(this)' onblur='mesononblur(this)' >";
        html = html + "<input id='txtano' type='text' class='form-text' maxlength='4' size='4' value='Año' onfocus='anoonclick(this)' onblur='anoononblur(this)'  >";
        html = html + " </div>";
        html = html + "<div class='recordar_datos'>";
        html = html + "<b>Recordar mis datos</b>";
        html = html + "<span class='checkbox-custom'>";
        html = html + " <input type='checkbox' name='checkboxG4' id='checkboxG4' class='css-checkbox' />";
        html = html + " <label for='checkboxG4' class='css-label'></label>";
        html = html + " </span>";
        html = html + "</div>";
        html = html + " </div>";
        html = html + "<div class='age_footer'>";
        html = html + "   <p>Al suministrar su edad, usted está dando su consentimiento expreso al dueño de la pagina para recopilar cierta información no personal y almacenar información en su computador en forma de 'cookie' o un archivo similar.</p>";
        html = html + "</div>";
        html = html + "<div class='warning'>";
        html = html + "   <b>TOMAR BEBIDAS ALCOHÓLICAS EN EXCESO ES DAÑINO</b>";
        html = html + "</div>";
        html = html + "</div>";
        html = html + "</div>";
        html = html + "</div>";

        $('body').empty();
        $('body').append(html);
        $("#divpais").append(divpais);
        $('#divdate').append("<input id='btningre'  type='button' value='INGRESAR' onclick='calanio()' /> ");
    }
}

if (document.domain == 'demo1.samishop.pe' || document.domain == 'www.demo1.samishop.pe' || document.domain == 'tiendapilsencallao.com' || document.domain == 'www.tiendapilsencallao.com') {
    var ts = $.get("ts");
 
    if (ts != null) {
     
        if (!isNaN(ts)) {
            var timestamp = Number(new Date());
            var segunds = getSeconds(timestamp);
            var minute = getMinutes(timestamp);
            var segund_ts = getSeconds(parseFloat(ts));
            var minute_ts = getMinutes(parseFloat(ts));
          
            var rest_se = segunds - segund_ts;
          
            if ((minute == minute_ts) && rest_se <= 20) {
                var cokis = getCookie('_ecmm_ageg');
                if (cokis == null) {
                    setCookie('_ecmm_ageg', ts, 1);
                    location.reload();
                }
            } else {
                init();
            }
        } else {
            init();
        }
    } else {
        init();
    }
}
var timestamp = Number(new Date());



$(document).ready(function () {
    jQuery('#txtdia').keypress(function (tecla) {
        if ((tecla.charCode < 48 || tecla.charCode > 57) && (tecla.charCode != 0)) return false;
    });
    jQuery('#txtmes').keypress(function (tecla) {
        if ((tecla.charCode < 48 || tecla.charCode > 57) && (tecla.charCode != 0)) return false;
    });
    jQuery('#txtano').keypress(function (tecla) {
        if ((tecla.charCode < 48 || tecla.charCode > 57) && (tecla.charCode != 0)) return false;
    });
    jQuery('#txtdia').focusout(function () {
        var num = $('#txtdia').val();
        if (num != '') {
            if (num < 1 || num > 31) {
                $('#txtdia').val('');
            }
        }
    });
    jQuery('#txtmes').focusout(function () {
        var num = $('#txtmes').val();
        if (num != '') {
            if (num < 1 || num > 12) {
                $('#txtmes').val('');
            }
        }
    });
    jQuery('#txtano').focusout(function () {
        var num = $('#txtano').val();
        if (num != '') {
            if (num < 1896 || num > 2016) {
                $('#txtano').val('');
            }
        }
    });
    jQuery('#txtdia').keyup(function () {
        this.value = (this.value + '').replace(/[^0-9]/g, '');
        if (this.value.length == 2) {
            $('#txtmes').focus();
        }
    });
    jQuery('#txtmes').keyup(function () {
        this.value = (this.value + '').replace(/[^0-9]/g, '');
        if (this.value.length == 2) {
            $('#txtano').focus();
        }
    });
    jQuery('#txtano').keyup(function () {
        this.value = this.value.replace(/[^0-9]/g, '');
        if (this.value.length == 4) {
            $('#btningre').focus();
        }
    });
    jQuery('#drop1').click(function () {
        menui9_ropa();
    });

    jQuery('#drop2').click(function () {
        menui9_acc();
    });
});
var IEversion = detectIE();

if (IEversion !== false) {
    $("#menu_allbrower").remove();
    $("#menu_allbrower").remove();
   
} else {
    $("#menui9_ropa").remove();
    $("#menui9_acc").remove();
   
}

function detectIE() {
    var ua = window.navigator.userAgent;

   
    // IE 10
    // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

    // IE 11
    // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

    // IE 12 / Spartan
    // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

    // Edge (IE 12+)
    // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
              return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
   
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
 
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    return false;
}
function menui9_ropa() {
    $('#menui9_ropa').show();
}
function menui9_acc() {
    $('#menui9_acc').show();
}

function calage() {
   
    var curday = $('#txtdia').val();
    var curmon = $('#txtmes').val();
    var curyear = $('#txtano').val();
    if (curday == '' || curmon == '' || curyear == '') {
        return false;
    }
    else {
        var curd = new Date(curyear, curmon - 1, curday);
        var res = curd.getDay();
        var res2 = curd.getMonth();
        if (res2 == (curmon - 1)) {
            return true;
        }
        else {
            return false;
        }
    }
}
function DaysInMonth(Y, M) {
    with (new Date(Y, M, 1, 12)) {
        setDate(0);
        return getDate();
    }
}