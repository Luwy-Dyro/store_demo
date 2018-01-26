var CATALOG = {
    domn: 0,
    catg: "",
    subs: "",
    atrb: "",
    p_min: 0.0,
    p_max: 0.0,
    filt: 1,
    seach: "",
    page: 1,
    item: 40,
    mny: $("#hdentmoney").val(),
    por: $("#hdentporct").val(),
};
var MNSP_USER_ROOT = 0;
var MNSP_PAGE_ROOT = 0;
let x = location.pathname.toLowerCase();

if (x.includes("/f/")) {
    CATALOG.seach = $('#hdensearch').val();
} else {
    CATALOG.catg = $('#hdensearch').val();
}
if (parseInt($("#conf_item_view").val()) === 0) {
    Ups();
}
function KVF_catalog_prec() {
    /* if (parseInt($("#conf_item_view").val()) === 1) {
         $.ajax({
             type: "POST",
             data: JSON.stringify(CATALOG),
             url: "/transdata/wmet_stre_catalog.aspx/category_sub_atrb_prece",
             contentType: "application/json; charset=utf-8",
             dataType: "json",
             error: function () {
                 console.log("error al cargar")
             },
             success: function (a) {
                 let data = JSON.parse(a.d);
                 print_atribute(data.list_atrb);
                 print_product_item_all(data.list_item);
                 print_item_show(data.list_count);
                 if (MNSP_USER_ROOT === 1) {
                     print_item_prece(data.list_prece);
                 }
                 //console.log(MNSP_PAGE_ROOT);
                 if (MNSP_PAGE_ROOT === 1) {
                     print_paginate(data.list_count.total);
                 }
                 MNSP_USER_ROOT = 0;
                 MNSP_PAGE_ROOT = 0;
             }
         });
     } else {
         Ups();
     }
     */
}
function print_category(arr, i) {
    $("#filter_sub").empty();
    arr.forEach(function (item) {
        $("#filter_sub").append("<div class='item-check-flex checkbox'> <label class='label-checkboxGigante-sidebar'>  <input checked value='" + item.name.trim() + "' onclick='filtrosubcat()' type='checkbox'><span class='cr'><i class='cr-icon fa fa-check'></i></span>" + item.title.trim() + "</label></div>");
    })
}
function print_atribute(arr) {
    $("#filtro-atrib").empty();

    let _arr = arr_atrb_all(arr);
    let html_atrb = "";
    _arr.forEach(function (o) {
        let _arb_id = o;
        let title = _arb_id.split("|");

        let _title = "";
        let _type = 2;
        if (title.length > 0) {
            _title = title[0]
        }
        if (title.length > 1) {
            if (title[1] != "") {
                _type = parseInt(title[1]);
            }
        }
        let i = 0;
        switch (_type) {
            case 0:
                html_atrb += "  <div class='box-filtro-tallas'>";
                html_atrb += "        <div class='title-togle togle-special siderbar-filtro-title'>";
                html_atrb += "            <h3> <i class='glyphicon glyphicon-chevron-down'></i >" + _title + "</h3>";
                html_atrb += "        </div> ";
                html_atrb += "        <div class='filtro-tallas-items'>";
                arr.forEach(function (item) {
                    if (item.atrb == _arb_id) {
                        html_atrb += "          <div class='radio-size'>";
                        html_atrb += "               <label>";
                        switch (item.type) {
                            case 0:
                                html_atrb += "                   <input type='radio' name='b" + i + "' value='" + item.name.trim() + "' onclick=filteratrb(this) > ";
                                html_atrb += "                   <span Class='cr'><i class='cr-icon fa fa-check'></i>" + item.title + "</span>"
                                break;
                            case 1:
                                html_atrb += "           <input type='radio'  name='b" + i + "' value= '" + item.name.trim() + "' onclick=filteratrb(this)>"
                                html_atrb += "           <span style='background:#" + item.color + " ' class='cr'> <i class='cr-icon fa fa-check'></i ></span >";
                                break;
                            case 2:
                                html_atrb += "       <input type='radio' name='X" + i + "' value='" + item.name.trim() + "' onclick=filteratrb(this)>";
                                html_atrb += "          <span style=background-image:url('" + item.img + "');background-size:contain;background-repeat:no-repeat;background-position:center; class='cr'><i class='cr-icon fa fa-check'></i>";
                                html_atrb += "          </span>";
                                break;
                            default:
                                html_atrb += "    ";
                                break;
                        }

                        html_atrb += "               </label>";
                        html_atrb += "           </div>";
                    }
                });
                i++;
                html_atrb += "        </div>";
                html_atrb += " </div>";
                break;
            case 1:
                html_atrb += "<div class='box-filtro-color'>";
                html_atrb += "     <div Class='title-togle togle-special siderbar-filtro-title'>";
                html_atrb += "         <h3> <i Class='glyphicon glyphicon-chevron-down'></i>" + _title + "</h3>";
                html_atrb += "     </div>";
                html_atrb += "     <div Class='filtro-color-items'>";
                arr.forEach(function (item) {
                    if (item.atrb == _arb_id) {
                        html_atrb += "   <div class='radio-color'>";
                        html_atrb += "       <label>"
                        switch (item.type) {
                            case 0:
                                html_atrb += "                   <input type='radio' name='b" + i + "' value='" + item.name.trim() + "' onclick=filteratrb(this) > ";
                                html_atrb += "                   <span Class='cr'><i class='cr-icon fa fa-check'></i>" + item.title + "</span>"
                                break;
                            case 1:
                                html_atrb += "           <input type='radio'  name='b" + i + "' value= '" + item.name.trim() + "' onclick=filteratrb(this)>"
                                html_atrb += "           <span style='background:#" + item.color + " ' class='cr'> <i class='cr-icon fa fa-check'></i ></span >";
                                break;
                            case 2:
                                html_atrb += "       <input type='radio' name='X" + i + "' value='" + item.name.trim() + "' onclick=filteratrb(this)>";
                                html_atrb += "          <span style=background-image:url('" + item.img + "');background-size:contain;background-repeat:no-repeat;background-position:center; class='cr'><i class='cr-icon fa fa-check'></i>";
                                html_atrb += "          </span>";
                                break;
                            default:
                                html_atrb += "    ";
                                break;
                        }
                        html_atrb += "       </label>"
                        html_atrb += "   </div> "
                    }
                    i++;
                });
                html_atrb += "      </div>";
                html_atrb += " </div>";
                break;
            case 2:
                html_atrb += "  <div class='box-filtro-img'>";
                html_atrb += "     <div class='title-togle  togle-special siderbar-filtro-title'>";
                html_atrb += "        <h3><i class='glyphicon glyphicon-chevron-down'></i>" + _title + "</h3>";
                html_atrb += "    </div>";
                html_atrb += " <div class='filtro-img-items'>";
                arr.forEach(function (item) {
                    if (item.atrb == _arb_id) {
                        html_atrb += " <div class='radio-img'>";
                        html_atrb += "     <label>";
                        switch (item.type) {
                            case 0:
                                html_atrb += "                   <input type='radio' name='b" + i + "' value='" + item.name.trim() + "' onclick=filteratrb(this) > ";
                                html_atrb += "                   <span Class='cr'><i class='cr-icon fa fa-check'></i>" + item.title + "</span>"
                                break;
                            case 1:
                                html_atrb += "           <input type='radio'  name='b" + i + "' value= '" + item.name.trim() + "' onclick=filteratrb(this)>"
                                html_atrb += "           <span style='background:#" + item.color + " ' class='cr'> <i class='cr-icon fa fa-check'></i ></span >";
                                break;
                            case 2:
                                html_atrb += "       <input type='radio' name='X" + i + "' value='" + item.name.trim() + "' onclick=filteratrb(this)>";
                                html_atrb += "          <span style=background-image:url('" + item.img + "');background-size:contain;background-repeat:no-repeat;background-position:center; class='cr'><i class='cr-icon fa fa-check'></i>";
                                html_atrb += "          </span>";
                                break;
                            default:
                                html_atrb += "    ";
                                break;
                        }
                        html_atrb += "      </label>";
                        html_atrb += " </div>";
                    }
                });
                html_atrb += " </div>";
                html_atrb += " </div>";
                break;
            case 3:
                html_atrb += " <div class='box-filtro-subcat'>";
                html_atrb += "    <div class='title-togle siderbar-filtro-title'>";
                html_atrb += "       <h3><i class='glyphicon glyphicon-chevron-down'></i>" + _title + "</h3>";
                html_atrb += "    </div>";
                html_atrb += "    <div class='filtro-subcat-items'>";
                arr.forEach(function (item) {
                    if (item.atrb == _arb_id) {
                        html_atrb += " <div class='item-check-flex checkbox'>";
                        html_atrb += "     <label  value='" + item.name.trim() + "' onclick=filteratrb(this)   class='label-checkboxGigante-sidebar'>";
                        html_atrb += item.title;
                        html_atrb += "      </label>";
                        html_atrb += " </div>";
                    }
                });

                html_atrb += "  </div>";
                html_atrb += "   </div>";
                break;
            default:
                break;
        }
    });
    $("#filtro-atrib").html(html_atrb);

}
function print_item_all(arr) {
    let html_item = "";
    arr.forEach(function (row) {
        html_item += " <div class='col-xs-60 col-sm-20 col-md-20 col-lg-15' itemscope='' itemtype='http://schema.org/Product'>";
        html_item += "       <div class='box_design_full'>";
        html_item += "            <div class='img_static'>";
        html_item += "                <div  class='preview'><a href='#' data-target='.msg_prod_catalog' data-toggle='modal' target='_blank' rel='nofollow' >vista previa</a></div>";
        html_item += "                <a href='/" + row.url.trim() + "'>";
        html_item += "                    <img class='img-responsive' alt='" + row.title.trim() + "' title='" + row.title.trim() + "' src='" + row.img.trim() + "' itemprop='image'></a>";
        html_item += "            </div>";
        html_item += "            <div class='design_name'><a href='/" + row.url.trim() + "' itemprop='url' title='" + row.title.trim() + "'><span itemprop='name' content=''></span>" + row.title.trim() + "</a></div>";
        html_item += "            <div class='design_price'>";

        html_item += "                <span itemprop='Offers' itemscope='' itemtype='http://schema.org/Offer'>" + row.html_prece + "<span itemprop='price' content='39.90'></span><span itemprop='priceCurrency' content='PEN'></span></span>";
        html_item += "             </div>";
        html_item += "       </div>";
        html_item += "</div>";
    });
    $("#catalog_item").html(html_item);
}
function print_item_prece(arr) {
    $("#print_html_prece").empty();
    let html = "";
    html += '<div class="filtro-precio-slider">'
    html += '      <section class="range-slider">'
    html += '         <div class="box-rangos-text">'
    html += '            <span class="rango-min-izq" id="rango-min-izq">' + CATALOG.mny + arr.p_mim + '</span>'
    html += '           <span class="rango-min-der" id="rango-min-der">' + CATALOG.mny + arr.p_max + '</span>'
    html += '         </div>'
    html += '     <div id="slider-prece" > </div>'
    html += '  </section>'
    html += ' </div>'
    $("#print_html_prece").html(html);
    $('#slider-prece').slider({
        range: true,
        min: arr.p_mim,
        max: arr.p_max,
        step: 0.1,
        values: [arr.p_mim, arr.p_max],
        slide: function (event, ui) {
            $('#rango-min-izq').html(CATALOG.mny + "" + ui.values[0]);
            $('#rango-min-der').html(CATALOG.mny + "" + ui.values[1]);
        },
        stop: function (event, ui) {
            CATALOG.p_min = ui.values[0];
            CATALOG.p_max = ui.values[1];
            window.location.href = UrlConfig(0, ui.values[0] + "_" + ui.values[1]);

        }
    });
}
function print_product_item_all(arr) {
    //console.table(arr);
    let html_item = "";
    arr.forEach(function (row) {
        html_item += '<div  onmouseover=ShowDiv("c' + row.ctrl + '") onmouseout=HideDiv("c' + row.ctrl + '") class="col-xs-60 col-sm-20 col-md-20 col-lg-15 flexcol3-item" itemscope itemtype="http://schema.org/Product">';
        html_item += ' <div class="box_design_full">';
        html_item += '  <div class="img_static">';
        html_item += '      <div id="c' + row.ctrl + '" class="preview"> <a href="#" data-target=".msg_prod_catalog" data-toggle="modal" target="_blank" rel="nofollow" onclick="ItemDetail(' + row.ctrl + ')">vista previa</a></div>';
        html_item += '       <a href="/' + row.url.trim() + '"><img class="img-responsive" alt="' + row.title + '" title="' + row.title + '" src="' + row.img.trim() + '" itemprop="image" /></a>';
        html_item += '    </div>';
        html_item += '    <div class="design_name"><a href="/' + row.url.trim() + '" itemprop="url" title="' + row.title + '">';
        html_item += '        <span itemprop="name" content="' + row.title + '"></span>' + row.title + '</a></div>';
        html_item += '     <div class="design_price"><span itemprop="Offers" itemscope itemtype="http://schema.org/Offer">' + row.html_prece + '</span>';
        html_item += '     </div>';
        html_item += '  </div>';
        html_item += '  </div>';
    });
    $("#catalog_item").html(html_item);
}
function arr_atrb_all(arr) {
    let _arr = [];
    arr.forEach(function (item) {
        if (_arr.length <= 0) {
            _arr.push(item.atrb);
        } else {
            let sw = false;
            _arr.forEach(function (o) {
                if (o === item.atrb) {
                    sw = true;
                }
            });
            if (sw === false) {
                _arr.push(item.atrb);
            }
        }
    })
    return _arr;
}
function print_item_show(o) {
    $("#item_count_view").html("Mostrando<span>" + o.init + " - " + o.fin + " de  " + o.total + "</span> Productos");
}

function print_paginate(total) {
    $("#page_parente").empty();
    $("#page_parente").html("<ul class='pagination' id='pagination'></ul>");
    let item = parseInt(total / 40);
    if (total % 40 !== 0) {
        item++;
    }
    if (item > 1) {
        var ini = $.urlParam("pg");
        if (ini == undefined || ini == null) {
            ini = 1;
        }
        if (item < ini) {
            ini = 1;
        }

        $('#pagination').twbsPagination({
            totalPages: item,
            visiblePages: 10,
            startPage: ini,
            activeClass: 'active',
            initiateStartPageClick: false,
            onPageClick: function (event, page) {
                window.location.href = UrlConfig(1, page);
            }
        });

    } else {
        ConfigPage();
    }
    SetCalsePage(ini);
    if (ini == 1) {
        ConfigPage();
    }
}

function SetCalsePage(a) {
    $("#pagination li").each(function () {
        if ($(this).children("a").html().trim() ==a) {
            $(this).addClass("active");

        } else {
            $(this).removeClass("active")
        }
    })
}
function GetUrl() {
    var url = window.location.href.split("?");
    var pre = "";
    if (url.length > 1) {
        var arr = url[1].split("&");
        var sw = false;
        if (arr.length > 0) {
            arr.forEach(function (item) {
                var o = item.split("=");
                if (o[0] == "pre") {
                    pre = o[1];
                }
            });
        }
    }
    return pre;
}
$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    }
    else {
        return decodeURI(results[1]) || 0;
    }
}
/*********************************************************************/
/*************************Filtro por Atributo**************************/
/*********************************************************************/
function filtrosubcat(p, e) {
    window.location.href = UrlConfig(-1);

}
function filteratrb(p, e) {
    window.location.href = UrlConfig();
}
function GetParama(t, p) {
    var data = window.location.href.split("?");
    var arr = [];
    if (data.length > 1) {
        data[1].split("&").forEach(function (itrm) {
            var json = itrm.split("=");
            if (json[0] == "pre") {
                arr.push(itrm);
            }
            if (json[0] == "pg") {
              //  arr.push(itrm);
            }
            if (json[0] == "ord") {
                arr.push(itrm);
            }
        });
    }
    var json = [];
    if (Existe(arr, "pre")==false & t==0) {
        arr.push("pre=" + p);
    }
    if (Existe(arr, "pg") == false & t == 1) {
        arr.push("pg=" + p);
    }
    if (Existe(arr, "ord") == false & t == 2) {
        arr.push("ord=" + p);
    }
    if (arr.length > 0) {
        arr.forEach(function (a) {
            var b = a.split("=");
            if (b[0] == "pre") {
                if (p !== undefined & t == 0) {
                    json.push("pre=" + p);
                } else {
                    json.push(a);
                }
            }
            if (b[0] == "pg") {
                if (p !== undefined & t == 1) {
                    json.push("pg=" + p);
                } else {
                    json.push(a);
                }
            }
            if (b[0] == "ord") {
                if (p !== undefined & t == 2) {
                    json.push("ord=" + p);
                } else {
                    json.push(a);
                }

            }
        })
    }
    return json.join("&");
}
function Existe(arry, v) {
    sw = false;
    arry.forEach(function (x) {
        var s = x.split("=");
        if (s[0] == v) {
            sw = true;
        }
    });
    return sw;
}
function UrlConfig(t, p) {

    let sub_cat = [];
    $("#filtro-subcat input").each(function () {
        if ($(this).is(":checked")) {
            sub_cat.push($(this).val());
        }
    });
    var _url = [];
    if (sub_cat.length > 0) {
        _url.push("sub=" + sub_cat.join("_"));

    }
    var _exi = "";
    if (t !== -1) {
        let filter = [];
        $("#filtro-atrib input").each(function () {
            if ($(this).is(":checked")) {
                filter.push($(this).val());
            }
        });


        if (filter.length > 0) {
            _url.push("atb=" + filter.join("_"));
        }

         _exi = GetParama(t, p);
    }

    if (_exi !== "") {
        return window.location.href.split("?")[0] + "?" + _url.join("&") + "&" + _exi;
    } else {
        if (_url.join("&")!=="") {
            return window.location.href.split("?")[0] + "?" + _url.join("&");
        } else {
            return window.location.href.split("?")[0] ;
        }

    }

}
function reloadordered(e) {
    window.location.href = UrlConfig(2, $(e).val());
}
function showFilterall(num) {
    CATALOG.filt = num;
    $("#filtroorderby input").each(function () {
        if (parseInt($(this).attr("value")) !== parseInt(num)) {
            $(this).removeAttr("checked");
        }
    });
    MNSP_USER_ROOT = 1
    KVF_catalog_prec(1, 1);
}

function Ups() {
    let html_ups = "";
    html_ups += "<div class='row'>";
    html_ups += " <div class='col-xs-60 col-sm-18 col-md-11 col-lg-9'>";
    html_ups += "<strong><i class='ico-opps'></i>Oops!<i class='ico-opps'></i></strong>";
    html_ups += "</div>";
    html_ups += "<div class='col-xs-60 col-sm-42 col-md-27 col-lg-32'>";
    html_ups += "<p>";
    html_ups += " Lo sentimos, pero no encontramos resultado para:";
    html_ups += " </p>";
    html_ups += "<b>" + CATALOG.seach + "</b>";
    html_ups += "</div>";
    html_ups += " </div>";
    $("#container_body").html(html_ups);
}
$("#allreset").click(function () {
    var url = window.location.href.split("?");
    window.location.href = url[0];
});
$("#allreset_2").click(function () {
    var url = window.location.href.split("?");
    window.location.href = url[0];
});
String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function ShowDiv(e) {
    $("#" + e).show();
}
function HideDiv(e) {
    $("#" + e).hide();
}
function ConfigPage() {
    var url = window.location.href.split("?");
    var pre = "";
    var json = [];
    if (url.length > 1) {
        var arr = url[1].split("&");
        var sw = false;
        if (arr.length > 0) {
            arr.forEach(function (item) {
                var o = item.split("=");
                if (o[0] != "pg") {
                    json.push(item);
                }
            });
        }
    }
    var data = url[0].split("/");
    if (json.join("&") !== "") {
        history.pushState(null, "", data[data.length - 1] + "?" + json.join("&"));
    } else {
        history.pushState(null, "", data[data.length - 1] );
    }

}
$(document).ready(function () {
//   SetCalsePage();
})
 