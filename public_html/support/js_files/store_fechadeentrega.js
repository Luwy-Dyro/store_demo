//variables principales
let DATA, WINDX = 1,
  MAXROW = 1,
  ACTIVE = 0;
let TSERVICE = '';

$(document).ready(function() {

  //limpiar LS cuando se seleccione Recojo en Tienda:

  $('#chkrcjotnda').on('change', function() {
    localStorage.clear();
    $('#txt_fcha_selct').text(DodCheckoutText());
  });

  //limpiar el LS, aunque creo que lo debería limpiar por el key, por si mas adelante se usa en otra pagina de la misma app
  localStorage.clear();

  $('#AceptConfig').on('click', function() {

    //se verifica si hay data en la variable
    if (!$.isEmptyObject(DATA)) {
      //se verifica la seleccion de una fecha
      if (getLS() != '') {

        $('#dod_modal').modal('hide');
        $('#txt_fcha_selct').text(DodCheckoutText());

      } else {
        $('#configModal').show();
        $('#configModal').text('Selecciona una fecha');
      }
    } else {
      $('#dod_modal').modal('hide');
    }

  });

  //boton que levantara el Modal
  $('#btn_dod_modal_show').on('click', function() {
    //seteando titulos de algunos elementos html dentro del modal.
    $('#dod_modal_title').text(GetModalText(0));
    $('#btn_text_confirm').text(' ' + GetModalText(4));

    //reiniciando variables globales.
    WINDX = 1, MAXROW = 1, ACTIVE = 0;

    //levantando el modal
    $('#dod_modal').modal('show');

    //cargando la data principal del modal
    loadDod();

  });

});
//Devuelve un JSON con las fechas de entrega registradas
function loadDod() {

  DATA = undefined;

  $('#loaderTable, #AceptConfig').show();

  //si el servicio seleccionado ah cambiado, se limpia la propiedad loscalStorage
  if ($('#hdfRT').val() != TSERVICE) {
    localStorage.clear();
  }
  //asignando el valor del servicio seleccionado a la variable
  TSERVICE = $('#hdfRT').val();

  let _ts = $('#hdfRT').val(); //El CTRL del servicio que sera obtenido por medio de el radio button que viene por Ubigeo.
  // let _ts = '1wLVTMpvNto='; //pruebas
  let _dc = ''; //filtro por fecha. por el momento no se usa.

  $('#content_dod').html('');

  $.ajax({
    dataType: "json",
    type: "POST",
    contentType: "application/json; charset=utf-8",
    url: "/transdata/wmet_sales_order.aspx/loadDod",
    data: "{'ts':'" + _ts + "','dc':'" + _dc + "'}",
    success: function(data) {

      $('#loaderTable').fadeOut(1000);

      if (!$.isEmptyObject(data.d)) {

        DATA = $.parseJSON(data.d)
        loadData($.parseJSON(data.d));

      } else {
        $('#loaderTable').fadeOut(1000);
        $('#content_dod').append(`<br><br><br><h3 class="text-center"><i class="fa fa-frown-o" aria-hidden="true"></i> Oops!</h3><h5 class="text-center"> ${GetModalText(6)} </h3>`);
        $('#AceptConfig').hide();
      }

    }
  });

  $('#configModal').hide();
  $('#configModal').text('');

}
//generar dias de la semana basado en fechas y tomando como limite el valor de la BD
function GetHeadDate(d_min = 1, d_max = 7) {

  let return_html = '';

  let min = d_min;
  let max = d_max;

  /*Configuración de la fecha a mostrar*/
  let fecha = new Date();
  fecha.setHours(fecha.getHours() + (fecha.getTimezoneOffset() / -60));
  let hoy = fecha.getDay();

  //se suma el dia actual mas el minimo del dia configurado para saber la fecha en la que debe iniciar a mostrarse
  let totalDays = parseInt(hoy + min);

  if (totalDays > 7) {
    fecha.setDate(fecha.getDate() + min);
    hoy = fecha.getDay();
    min = 0;
    max = parseInt(d_max - d_min);
  }

  let fechaStr = fecha.toJSON().slice(0, 10).toString();
  let anio = fechaStr.split('-')[0];
  let mes = fechaStr.split('-')[1];
  let dia = fechaStr.split('-')[2];

  let primerdia = (parseInt(dia) - (hoy - 1));
  let ultimoDia = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0).toJSON().slice(0, 10).toString().split('-')[2];

  let thDate1 = '';
  let thDate2 = '';
  let diplay = 'class="text-center cwk_1"';
  let wclass = 2;
  //nuevas variables para calculos en la generacion de dias
  let filtro = hoy + min;
  let limite = filtro + max;
  let aplica = limite - 1;

  let ndia = 0;
  let semana = 1;
  let dx = 0;

  //si el total del recorrido es menor a una semana o sobre pasa un solo dia mas, se le asigna X equivalente a...
  limite = (limite <= 8) ? 7 : (limite > 13 && limite <= 15) ? 14 : (limite > 20 && limite <= 22) ? 21 : (limite > 27 && limite <= 29) ? 28 : limite;

  for (var i = 0; i < limite; i++) {

    dx = (i + 1);

    thDate1 = dayName(ndia);
    thDate2 = pad(primerdia, 2) + '/' + pad(mes, 2);

    return_html += `<th ${diplay} ${(dx >= filtro && dx <= aplica) ? '':'name="aux"'}>${thDate1} ${thDate2}</th>`;

    primerdia++, ndia++;

    if (primerdia > ultimoDia) {
      primerdia = 1;
      mes++;
    }

    if (ndia > 6) {

      ndia = 0, semana++;
      diplay = `class='text-center cwk_${wclass}' style='display:none;'`;
      wclass++;

    }

  }

  if (ndia != 0 && aplica > 7) {

    for (var i = ndia; i < 7; i++) {

      if (primerdia > ultimoDia) {
        primerdia = 1, mes++;
      }

      return_html += `<th ${diplay} name='aux'>${dayName((ndia))} ${pad(primerdia, 2)}/${pad(mes, 2)}</th>`;

      primerdia++, ndia++;
      limite++;

    }

  }

  //se divide el total de columnas generadas entre los dias de la semana
  MAXROW = parseInt(limite / 7);

  return return_html;

}

/*funcion principal para cargar la primera vez la configuración.*/
function loadData(data) {

  let _div_cont = '';

  _div_cont += `<div class="row">
  <div class="col-xs-60 col-sm-20 col-md-20 col-lg-20"></div>
  <div class="col-xs-60 col-sm-40 col-md-40 col-lg-40">
    <div class="btn-options pull-right" id="btn_pgn_grid">
      <a id="btnBacktWeek" style="display:none"><span class="glyphicon glyphicon-chevron-left"></span></a>
        ${GetModalText(1)}
      <a id="btnNextWeek"><span class="glyphicon glyphicon-chevron-right"></span></a>
    </div><br><br>
  </div>`;

  let _rows = '';

  let cnt = 2;
  let day_week_ctrl = 0;
  let day_min_conf = 0;
  let day_max_conf = 0;

  let lu, ma, mi, ju, vi, sa, dm;

  $.each(data, function(idx, val) {

    day_week_ctrl = parseInt(this['day_week_ctrl']);
    day_min_conf = parseInt(this['day_min_conf']);
    day_max_conf = parseInt(this['day_max_conf']);

    _rows += '<tr id="week_' + this['ctrl'] + '">';
    _rows += ' <td class="turno" id="turn_' + this['ctrl'] + '">' + this['turno'] + '</td>';
    _rows += ' <td class="hours" id="hours_' + this['ctrl'] + '">' + this['hi'] + ' a ' + this['hf'] + '</td>';

    lu = (1 < day_week_ctrl) ? 0 : this['lunes'];
    ma = (2 < day_week_ctrl) ? 0 : this['martes'];
    mi = (3 < day_week_ctrl) ? 0 : this['miercoles'];
    ju = (4 < day_week_ctrl) ? 0 : this['jueves'];
    vi = (5 < day_week_ctrl) ? 0 : this['viernes'];
    sa = (6 < day_week_ctrl) ? 0 : this['sabado'];
    dm = (7 < day_week_ctrl) ? 0 : this['domingo'];

    _rows += ' <td class="' + (lu != 0 ? 'true' : 'null') + '">' + (lu != 0 ? '<input type="radio" class="dod_radio" value="' + this['ctrl'] + ',' + (cnt) + '" name="dod_sel_radio">' : '-') + '</td>';
    _rows += ' <td class="' + (ma != 0 ? 'true' : 'null') + '">' + (ma != 0 ? '<input type="radio" class="dod_radio" value="' + this['ctrl'] + ',' + (cnt + 1) + '" name="dod_sel_radio">' : '-') + '</td>';
    _rows += ' <td class="' + (mi != 0 ? 'true' : 'null') + '">' + (mi != 0 ? '<input type="radio" class="dod_radio" value="' + this['ctrl'] + ',' + (cnt + 2) + '" name="dod_sel_radio">' : '-') + '</td>';
    _rows += ' <td class="' + (ju != 0 ? 'true' : 'null') + '">' + (ju != 0 ? '<input type="radio" class="dod_radio" value="' + this['ctrl'] + ',' + (cnt + 3) + '" name="dod_sel_radio">' : '-') + '</td>';
    _rows += ' <td class="' + (vi != 0 ? 'true' : 'null') + '">' + (vi != 0 ? '<input type="radio" class="dod_radio" value="' + this['ctrl'] + ',' + (cnt + 4) + '" name="dod_sel_radio">' : '-') + '</td>';
    _rows += ' <td class="' + (sa != 0 ? 'true' : 'null') + '">' + (sa != 0 ? '<input type="radio" class="dod_radio" value="' + this['ctrl'] + ',' + (cnt + 5) + '" name="dod_sel_radio">' : '-') + '</td>';
    _rows += ' <td class="' + (dm != 0 ? 'true' : 'null') + '">' + (dm != 0 ? '<input type="radio" class="dod_radio" value="' + this['ctrl'] + ',' + (cnt + 6) + '" name="dod_sel_radio">' : '-') + '</td>';

    _rows += '</tr>';

    cnt = 2;

  });

  let _head = `<table class="table table-bordered table_date animate-bottom" id="weeks_dod" style="display:none;">
  <thead>
    <tr>
     <th class='text-center'>${GetModalText(2)}</th>
     <th class='text-center'>${GetModalText(3)}</th>
      ${GetHeadDate(day_min_conf, day_max_conf)}
    </tr>
    </thead>
  <tbody>`;

  let _foot = '</tbody></table>';
  let tabla = _head + _rows + _foot;

  _div_cont += tabla + '</div>';

  $('#content_dod').append(_div_cont);

  $('#weeks_dod').show();

  //si el numero de columnas no cumple la semana completa, se oculta las flechas
  if (parseInt($("#weeks_dod > thead > tr > th").length) <= 9) {
    $('#btn_pgn_grid').hide();
  }

  //boton para adelantar la siguente semana
  $('#btnNextWeek').click(function() {

    if (WINDX < MAXROW) {

      WINDX++;
      ACTIVE = WINDX == 1 ? 1 : 0;

      if (WINDX == MAXROW) {

        $('#btnNextWeek').hide();
        // $('#btnBacktWeek').show();
      }
      if (WINDX > 1) {
        $('#btnBacktWeek').show();
      }

      setClassWeek(WINDX);
      getNewWeek(DATA);

    } else {
      $('#btnNextWeek').hide();
    }

    /*Funciones en la carga principal del modal*/

    //eliminar radios en celdas auxiliares de la tabla y reemplazarlo por "-."
    deleteCols();
    //cargar la seleccion del radio anteriormente seleccionado, siempre y cuando esto exista.
    ModalSetConf();


  });
  //boton para retroceder
  $('#btnBacktWeek').on('click', function() {

    WINDX--;
    ACTIVE = WINDX == 1 ? 1 : 0;

    setClassWeek(WINDX);
    getNewWeek(DATA);

    if (WINDX < 2) {
      $('#btnBacktWeek').hide();
    }
    if (WINDX < MAXROW) {
      $('#btnNextWeek').show();
    }

    deleteCols();
    ModalSetConf();
  });

  //creando evento para los radios
  $('.dod_radio').click(function() {
    DodCreaConf();
  });

  //a primera carga se elimina las columnas que no van, en caso existan.
  // deleteCols();

  let pp = 0;

  let control = setInterval(() => {
    $('#weeks_dod th').filter(':visible').each(function(index, value) {
      pp++;
    });
    if (pp != 0) {
      deleteCols();

      clearInterval(control);
    }
  }, 20);


  //si es que ya hay data registrada en el localStorage, se carga esa DATA
  ModalSetConf();
  //Mostrar como primera vista la semana en donde se selecciono el turno.
  viewWeekConfig();

}
/*funcion que traera la informacion de las fechas configuras, se accionara
cada vez que se presionen los botones direccionales*/
function getNewWeek(data) {

  $("#weeks_dod > tbody").html("");

  let _rows = '';
  let day_week_ctrl = 0;
  let day_max_conf = 0;

  let lu, ma, mi, ju, vi, sa, dm;

  let cnt = 2;

  $.each(data, function(idx, val) {

    day_week_ctrl = parseInt(this['day_week_ctrl']);
    day_max_conf = parseInt(this['day_max_conf']);

    _rows += '<tr id="week_' + this['ctrl'] + '">';
    _rows += ' <td class="turno" id="turn_' + this['ctrl'] + '">' + this['turno'] + '</td>';
    _rows += ' <td class="hours" scope="row" id="hours_' + this['ctrl'] + '">' + this['hi'] + ' a ' + this['hf'] + '</td>';

    if (ACTIVE == 1) {
      lu = (1 < day_week_ctrl) ? 0 : this['lunes'];
      ma = (2 < day_week_ctrl) ? 0 : this['martes'];
      mi = (3 < day_week_ctrl) ? 0 : this['miercoles'];
      ju = (4 < day_week_ctrl) ? 0 : this['jueves'];
      vi = (5 < day_week_ctrl) ? 0 : this['viernes'];
      sa = (6 < day_week_ctrl) ? 0 : this['sabado'];
      dm = (7 < day_week_ctrl) ? 0 : this['domingo'];
    } else {
      lu = this['lunes'];
      ma = this['martes'];
      mi = this['miercoles'];
      ju = this['jueves'];
      vi = this['viernes'];
      sa = this['sabado'];
      dm = this['domingo'];
    }

    _rows += ' <td class="' + (lu != 0 ? 'true' : 'null') + '">' + (lu != 0 ? '<input type="radio" class="dod_radio" value="' + this['ctrl'] + ',' + (cnt) + '" name="dod_sel_radio">' : '-') + '</td>';
    _rows += ' <td class="' + (ma != 0 ? 'true' : 'null') + '">' + (ma != 0 ? '<input type="radio" class="dod_radio" value="' + this['ctrl'] + ',' + (cnt + 1) + '" name="dod_sel_radio">' : '-') + '</td>';
    _rows += ' <td class="' + (mi != 0 ? 'true' : 'null') + '">' + (mi != 0 ? '<input type="radio" class="dod_radio" value="' + this['ctrl'] + ',' + (cnt + 2) + '" name="dod_sel_radio">' : '-') + '</td>';
    _rows += ' <td class="' + (ju != 0 ? 'true' : 'null') + '">' + (ju != 0 ? '<input type="radio" class="dod_radio" value="' + this['ctrl'] + ',' + (cnt + 3) + '" name="dod_sel_radio">' : '-') + '</td>';
    _rows += ' <td class="' + (vi != 0 ? 'true' : 'null') + '">' + (vi != 0 ? '<input type="radio" class="dod_radio" value="' + this['ctrl'] + ',' + (cnt + 4) + '" name="dod_sel_radio">' : '-') + '</td>';
    _rows += ' <td class="' + (sa != 0 ? 'true' : 'null') + '">' + (sa != 0 ? '<input type="radio" class="dod_radio" value="' + this['ctrl'] + ',' + (cnt + 5) + '" name="dod_sel_radio">' : '-') + '</td>';
    _rows += ' <td class="' + (dm != 0 ? 'true' : 'null') + '">' + (dm != 0 ? '<input type="radio" class="dod_radio" value="' + this['ctrl'] + ',' + (cnt + 6) + '" name="dod_sel_radio">' : '-') + '</td>';

    _rows += '</tr>';

    cnt = 2;

  });

  //se añaden las filas a la tabla
  $('#weeks_dod').fadeOut(10);
  $('#weeks_dod').append(_rows);
  $('#weeks_dod').fadeIn(350);

  //creando evento para los radios
  $('.dod_radio').click(function() {
    DodCreaConf();
  });

}

/*cuando se de click en las flechas para ver los demas dias, esta function
mostrara y/o ocultara lo necesario
*/
function setClassWeek(idx) {

  let _class = 'cwk_' + idx.toString();

  $('#weeks_dod th').each(function() {

    if ($(this).attr('class').split(' ')[1] != _class && $(this).attr('class').split(' ')[1] != undefined) {
      $(this).hide();
    } else {
      $(this).show();
    }

  });
}

//devuelve el dia de la semana basado en el numero de dia de la semana
function dayName(dayIdx) {

  let dias = [];

  if ($('#idm_store').val() == 'es-PE') {
    dias = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
  } else {
    dias = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  }

  return dias[dayIdx];
}
//devuelve los texto de los titulos que iran en el modal, esto dependiendo del idioma de la tienda.
function GetModalText(nameIdx) {

  let names = [];

  if ($('#idm_store').val() == 'es-PE') {
    names = ["Fecha de entrega", "Semana", "Turno", "Horario", "Confirmar", "Servicio", "No hay fechas disponibles."];
  } else {
    names = ["Date of delivery", "Week", "Turn", "Schedule", "Confirm", "Service", "No dates available."];
  }

  return names[nameIdx];

}

//agrega 0 delante de un numero
function pad(str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}
/*recorrer la tabla para extraer los valores de la seleccion al radios
recorrer los th visibles para extraer el dia y fecha escogida.
*/
function DodCreaConf() {

  let posicionX = 0;
  let posicionY = 0;
  let radioVal;
  let config;

  $('#configModal').fadeOut(120);
  //limpiando el LS
  localStorage.clear();

  $('#weeks_dod input[type=radio]').each(function(index, value) {

    if ($(this).is(':checked')) {
      //Obteniendo el value del radio y separandolo por Coma
      radioVal = $(this).val().toString().split(',');

      posicionX = radioVal[0];
      posicionY = radioVal[1];

      //recorrer los tr para obtener el texto, que contiene el dia y la fecha
      $('#weeks_dod th').filter(':visible').each(function(idx, val) {

        if ($(this).attr('class').split(' ')[1] != undefined) {

          if (posicionY == idx) {
            //creando el obj literal
            config = {
              'servicio': $('#hdfRT').val(),
              'turno': $('#turn_' + posicionX).text().trim(),
              'horario': $('#hours_' + posicionX).text(),
              'fecha': $(this).text(),
              'posX': posicionX,
              'posY': posicionY,
              'tabview': WINDX
            };

          }

        }

      });

      return false;

    }

  });

  if (!$.isEmptyObject(config)) {
    //insertando la info del literal al LS
    localStorage.setItem($('#hdfRT').val(), JSON.stringify(config))

    $('#configModal').text(getLS());
    $('#configModal').fadeIn(120);

  }

}

//Se usara para quitar los radiobutton innecesarios y reemplazarlo por guiones.
function deleteCols() {

  let radio;

  //se Busca la posición del primer elemento con nombre Auxiliar, para eliminar posteriormnete los radios si en caso tuviese
  $('#weeks_dod th').filter(':visible').each(function(index, value) {

    if ($(this).attr('name') == 'aux') {

      $("#weeks_dod > tbody").find('tr').each(function(x, y) {

        $(this).find('td').each(function(idx, val) {

          if (index == idx) {

            if ($(this).attr('class') == 'true') {

              radio = $(this).children();

              if (radio.attr('value').toString().split(',')[1] >= index) {

                $(this).removeClass('true').addClass('null').text('-');
                //se elimina el radiobutton
                $(radio).remove();

              }

            }
          }

        })

      });

    }

  });

}

//obtner los datos de la configuración de la fecha seleccionada
function getLS() {

  let _ls = localStorage.getItem($('#hdfRT').val());
  let jsnData;
  let _rfn = '';

  if (_ls != null) {

    jsnData = JSON.parse(_ls);

    if (!$.isEmptyObject(jsnData)) {

      //obteniendo el texto del servicio seleccionado
      let span;

      $('#shipratetypecont input[type=radio]').filter(':checked').each(function() {
        span = $(this).next().text();
      });
      //armando la cadena con los datos seleccionados
      _rfn = `${GetModalText(0)}: ${jsnData.fecha}, ${GetModalText(5)}: ${span}, ${GetModalText(2)}: ${ jsnData.turno }, ${GetModalText(3)}: ${jsnData.horario}`;

    }

  }

  return _rfn
}

/*cuando ya se selecciono un radio y se vuelve a cargar la data, esta seleccion se pierde
por lo tanto se tiene que volver a seleccionar por un método
*/
function ModalSetConf() {

  let _ls = localStorage.getItem($('#hdfRT').val());
  let jsnData;

  if (_ls != null) {

    jsnData = JSON.parse(_ls);

    if (!$.isEmptyObject(jsnData)) {

      let {
        posX,
        posY,
        tabview
      } = jsnData;

      let _posX = posX;
      let _posY = posY;
      let _vwTb = tabview;
      //si la pagina donde se selecciono el radio es igual a la que se registro en LS
      if (WINDX == _vwTb) {

        let tdChilds = $('#week_' + _posX).children();
        let radio;

        for (let i = 0; i <= tdChilds.length; i++) {

          if (_posY == i) {

            radio = $(tdChilds[i]).children();

            $(radio).attr('checked', 'checked');

            break;
          }

        }

      }

    }

  }

}

//funcion para posicionar en visible la tabla donde se configuro el turno seleccionado
function viewWeekConfig() {

  let _ls = localStorage.getItem($('#hdfRT').val());
  let jsnData;

  if (_ls != null) {

    jsnData = JSON.parse(_ls);

    if (!$.isEmptyObject(jsnData)) {

      let {
        posX,
        posY,
        tabview
      } = jsnData;

      let _posX = posX;
      let _posY = posY;
      let _vwTb = tabview;

      //haciendo bucle hasta encontrar la semana seleccionada
      while (WINDX != _vwTb) {

        $('#btnNextWeek').click();

      }

      //obteniendo el nombre de la feceha seleccionada
      $('#configModal').text(getLS());
      $('#configModal').fadeIn(120);

    }

  }

}

//function que devuelve solo datos basicos a mostrar en el checkout
let DodCheckoutText = () => {

  let _ls = localStorage.getItem($('#hdfRT').val());
  let jd = JSON.parse(_ls);

  return _ls != null ? !$.isEmptyObject(JSON.parse(_ls)) ? `${GetModalText(0)}: ${ jd.fecha }, ${GetModalText(2)}: ${ jd.turno }, ${GetModalText(3)}: ${ jd.horario }` : '' : '';

};
