/// <reference path="../Object.inherit.js" />

var elemtParent = $("#cont_atrb_group");
var salefrom = [];
var index = 0;
$(document).ready(function () {
    $("#objt_ctrl").hide();
    try {
        ShopcartSumm();
    } catch (e) {
    }
    if ($("#btnAddToCart")[0]) {
        $("#btnAddToCart").attr("disabled", "disabled");
        var AddToCart = document.getElementById("btnAddToCart");
        if (AddToCart.addEventListener) AddToCart.addEventListener('click', addtocartSku, false);

    }
    if ($("#SelcItemQty")[0]) {
        $("#inpReqsQty").hide();
        document.getElementById("SelcItemQty").addEventListener("change", function () {
            if ($(this).val() == "10") {
                $("#inpReqsQty").show();
                $("#inpReqsQty").val(10);
            } else {
                $("#inpReqsQty").val(0);
                $("#inpReqsQty").hide();
            }
        });
    }
});
function EventElement() {
    $("#btnAddToCart").attr("disabled", "disabled");
    $("#inpReqsQty").hide();
    $("#objt_ctrl").hide();
    try {
        ShopcartSumm();
    } catch (e) {
    }
    var AddToCart = document.getElementById("btnAddToCart");
    if (AddToCart.addEventListener) AddToCart.addEventListener('click', addtocartSku, false);
   
    document.getElementById("SelcItemQty").addEventListener("change", function () {
        if ($(this).val() == "10") {
            $("#inpReqsQty").show();
            $("#inpReqsQty").val(10);
        } else {
            $("#inpReqsQty").val(0);
            $("#inpReqsQty").hide();
        }
    });
}
function ItemDetail(i) {
    clearmodal();
    EventElement();
    $("#btnAddToCart").attr("disabled", "disabled");
    $("#cntnImgThumb").empty();
    index = 0;
    var parametros = {
        ctrl: i
    };
    $.ajax({
        type: "POST",
        data: JSON.stringify(parametros),
        url: "/store/pg_catalog/catalog_001.aspx/GetSalefrom",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            elemtParent.empty();
            salefrom = $.parseJSON(response.d);
            if (salefrom.length > 0) {
                var min = 100000000;
                var max = 0;
                for (var p in salefrom) {
                    if (salefrom[p].ivarc_sale_price > max) {
                        max = salefrom[p].ivarc_sale_price;
                    }
                    if (salefrom[p].ivarc_sale_price < min) {
                        min = salefrom[p].ivarc_sale_price;
                    }
                }
           

                for (var j in salefrom) {
                    if (salefrom[j].ivarc_reg_ctrl != undefined) {
                        $("#saleform_prices").empty();
                        var array = [salefrom[j].item_price_min, salefrom[j].item_price_max, min, max];
                 
                        $("#saleform_prices").html(getPrecioItem(array));
                        $("#spnMainTitle").html(salefrom[j].item_title);
                        if (salefrom[j].atrb_title != null) {
                            AddItem(salefrom[j].atrb_name.trim(), salefrom[j].atrb_title.trim(), salefrom[j].adetl_title.trim(), salefrom[j].ivarc_reg_ctrl);
                        }

                        var img = salefrom[j].ivarc_image.split(",");
                        $("#itmImgMain").html(printImgSku(img[0]));
                        loadZoom();
                    }
                }
                if ($("#cont_atrb_group div").length == 0) {
                    $("#btnAddToCart").removeAttr("disabled");
              
                    for (var k in salefrom) {
                        if (salefrom[k].ivarc_image != undefined) {
                            $("#cntnImgThumb").html(printImgChildren(salefrom[k].ivarc_image, salefrom[k].item_title));
                        }
                       
                    }
                }
                $("#hdfItemIndex").val(i);
                Setthisprodinck();
                ElementID();
            } else {
                $(".container_saleform").empty();
                $(".no_product").show();
            }
            
        }
    });
}
function AddItem(element, element_title, title, value) {
    obj = $("#" + element);
    if (obj[0]) {
        var sw = false;
        obj.each(function () {
            $(this).children().each(function () {
                var objVal = $(this).val();
                if ($(this).text() == title) {
                    sw = true;
                    if (objVal.includes(value) == false) {
                        $(this).val(objVal + "|" + value);
                    }
                };
            });
        });
        if (sw == false) {
            obj.append('<option value="' + value + '">' + title + '</option>')
        }
    } else {
        elemtParent.append(SetHtml(element, element_title, title, value));
        switch ($("#cont_atrb_group div").length) {
            case 1:
                $("#" + element).attr("data", "0");
                document.getElementById(element).addEventListener("change", function () {
                    var objVal = ElementID();
                    for (i in salefrom) {
                        if (salefrom[i].ivarc_reg_ctrl != undefined) {
                            if (objVal.includes(salefrom[i].ivarc_reg_ctrl)) {
                                AddItem(salefrom[i].atrb_name.trim(), salefrom[i].atrb_title.trim(), salefrom[i].adetl_title.trim(), salefrom[i].ivarc_reg_ctrl);
                            }
                        }
                    }
                    callDataSalefrom();
                });
                break;
            default:
                document.getElementById(element).addEventListener("change", function () {
                    AddElemtCascada($(this));
                    callDataSalefrom();
                });
                break;
        }
    }
}
function chekElemtsSelect() {
    var sw = true;
    elemtParent.children("div").each(function () {
        $(this).children("select").each(function () {
            if ($(this).find('option:selected').val() == "0") {
                sw = false;
            }
        });
    });
    return sw;
}
function callDataSalefrom() {
    var array_1 = ElementIDParent();
    var array_2 = [];
    if (chekElemtsSelect()) {
        elemtParent.children("div").each(function () {
            $(this).children("select").each(function () {
                array_2 = $(this).val().split("|");
                array_1 = ElemtComun(array_1, array_2);
            });
        });
        if (array_1.length > 0) {
            printDataSku(array_1[0]);
        }
    } else {
        $("#btnAddToCart").attr("disabled", "disabled");
        $("#cntnImgThumb").empty();
        var min = 100000000;
        var max = 0;
        for (var p in salefrom) {
            if (salefrom[p].ivarc_sale_price > max) {
                max = salefrom[p].ivarc_sale_price;
            }
            if (salefrom[p].ivarc_sale_price < min) {
                min = salefrom[p].ivarc_sale_price;
            }
        }

        for (var j in salefrom) {
            if (salefrom[j].ivarc_reg_ctrl != undefined) {
                $("#saleform_prices").empty();
                var array = [salefrom[j].item_price_min, salefrom[j].item_price_max, min, max];
                $("#saleform_prices").html(getPrecioItem(array));
                $("#spnMainTitle").html(salefrom[j].item_title);
                if (salefrom[j].atrb_title != null) {
                    if (salefrom[i].atrb_name != undefined) {
                        AddItem(salefrom[i].atrb_name, salefrom[j].atrb_title, salefrom[j].adetl_title, salefrom[j].ivarc_reg_ctrl);
                    }
                }
                var img = salefrom[j].ivarc_image.split(",");
                 $("#itmImgMain").html(printImgSku(img[0]));
                try {
                    loadZoom();
                } catch (e) {
                }
                
            }
        }
    }
}
function ElemtComun(a, b) {
    var array = [];
    for (i in a) {
        for (j in b) {
            if (a[i] == b[j]) {
                array.push(b[j]);
            }
        }
    }
    return array;
}
function ElementID() {
    var obj = "";
    elemtParent.children("div").each(function () {
        $(this).children("select").each(function () {
            if ($(this).attr("data") != null) {
                obj = $(this).val();
            } else {
                $(this).children().each(function () {
                    if ($(this).val() != "0") {
                        $(this).remove();
                    }
                })
            }
        });
    });
    return obj;
}
function ElementIDParent() {
    var obj = "";
    elemtParent.children("div").each(function () {
        $(this).children("select").each(function () {
            if ($(this).attr("data") != null) {
                obj = $(this).val().split("|");
            }
        });
    });
    return obj;
}
function SetHtml(a, d, b, c) {
    index++;
    var html = '<div ><span>';
    html += d + ': </span><select index="' + index + '"  id="';
    html += a + '"><option value="0">Seleccione</option>';
    html += ' <option value="';
    html += c + '">';
    html += b + '</option></select></div>';
    return html;
}
function printDataSku(ivarc_reg_ctrl) {
    for (j in salefrom) {
        if (salefrom[j].ivarc_reg_ctrl != undefined) {
            if (salefrom[j].ivarc_reg_ctrl == ivarc_reg_ctrl) {
                var img = salefrom[j].ivarc_image.split(",");
                $("#itmImgMain").html(printImgSku(img[0]));
                $("#saleform_prices").empty();
                if (parseFloat(salefrom[j].ivarc_sale_price) > parseFloat(salefrom[j].ivarc_off_price)) {
                    $("#saleform_prices").append('<b id="spnPricesInitBef">' + $("#b_domn_mony_smbl").val() + FormatMonto(salefrom[j].ivarc_sale_price) + '</b>');
                    $("#saleform_prices").append(' <strong id="spnItmPrice">' + $("#b_domn_mony_smbl").val() + FormatMonto(salefrom[j].ivarc_off_price) + '</strong>');
                } else {
                    $("#saleform_prices").append('<span id="spnItmPrice">' + $("#b_domn_mony_smbl").val() + FormatMonto(salefrom[j].ivarc_sale_price) + ' </span>');
                }
                $("#spnMainTitle").html(salefrom[j].item_title);
                $("#btnAddToCart").removeAttr("disabled");
                $("#cntnImgThumb").html(printImgChildren(salefrom[j].ivarc_image, salefrom[j].item_title));
                ValidCuantity(salefrom[j].ivarc_item_units);
                  loadZoom();
                
            }
        }
    }
}
function printImgSku(img) {
    var html = "";
    html += '<a href="' + img + '" id="aimgzoom">';
    html += '<img id="imgProdMainImage" src="' + img + '" class="img-responsive" alt="" width="auto" height="auto">';
    html += '</a>';
    return html;
}
function printImgChildren(img, alt) {
    var html = "";
  
        var _img = img.split(",");

        for (var j = 0; j < _img.length; j++) {
            html += ' <img src=" ' + _img[j] + '" class="img-responsive" alt="' + alt + '" width="auto" height="auto" onclick="imgpost(this)">';
        }
    
    
    return html;
}
function AddElemtCascada(element) {
    var index = $(element).attr("index");
    var array = [];
    elemtParent.children("div").each(function () {
        $(this).children("select").each(function () {
            if (parseInt($(this).attr("index")) <= index) {
                array.push($(this).val().split("|"));
            } else {
                $(this).children().each(function () {
                    if ($(this).val() != "0") {
                        $(this).remove();
                    }
                })
            }
        });
    });
    for (var i in salefrom) {
        if (salefrom[i].ivarc_reg_ctrl != undefined) {
            var sw = false;
            for (j in array) {
                for (k in array[j]) {
                    if (array[j][k] == salefrom[i].ivarc_reg_ctrl) {
                        sw = true;
                        break;
                    } else {
                        sw = false;
                    }
                }
            }
        }
        if (sw) {
            if (salefrom[i].ivarc_reg_ctrl != undefined) {
                AddItem(salefrom[i].atrb_name.trim(), salefrom[i].atrb_title, salefrom[i].adetl_title, salefrom[i].ivarc_reg_ctrl);
            }
        }
    }
}
function addtocartSku() {
    var ivarc_reg_ctrl = VarSelect();
    var html = "";
    var pre = 0;
    var cant = 0;
    var sku = "";
    if ($("#cont_atrb_group div").length == 0) {
        for (var j in salefrom) {
            if (salefrom[j].ivarc_reg_ctrl != undefined) {
                $("#spnSummSku").html(salefrom[j].ivarc_sku_child.trim());
                $("#imgSummImage").attr("src", salefrom[j].ivarc_image_thumb);
                var cuantity = 1;
                if ($("#inpReqsQty").css("display") == "block") {
                    cuantity = parseInt($("#inpReqsQty").val());
                    $("#spnSummTotQty").html($("#inpReqsQty").val());
                } else {
                    $("#spnSummTotQty").html($("#SelcItemQty").val());
                    cuantity = parseInt($("#SelcItemQty").val());
                }
                $("#spnMainTitle").html(salefrom[j].item_title);
                var mont = 0;
                mont = cuantity * salefrom[j].ivarc_off_price;
                mont = FormatMonto(mont);
                $("#spnSummItemDet").html(salefrom[j].item_title);
                $("#spnSummTotVal").html($("#b_domn_mony_smbl").val() + mont);
                $("#objt_ctrl").html(ivarc_reg_ctrl);
                pre = salefrom[j].ivarc_off_price;
                cant = cuantity;
                sku = salefrom[j].ivarc_sku_child.trim();
            }
        }
    } else {
        for (var j in salefrom) {
            if (salefrom[j].ivarc_reg_ctrl != undefined) {
                if (salefrom[j].ivarc_reg_ctrl == ivarc_reg_ctrl) {
                    html += "<p><span>" + salefrom[j].atrb_title + ": </span><i>" + salefrom[j].adetl_title + "</i></p>";
                    $("#spnSummSku").html(salefrom[j].ivarc_sku_child.trim());
                    $("#imgSummImage").attr("src", salefrom[j].ivarc_image_thumb);
                    var cuantity = 1;
                    if ($("#inpReqsQty").css("display") == "block") {
                        cuantity = parseInt($("#inpReqsQty").val());
                        $("#spnSummTotQty").html($("#inpReqsQty").val());
                    } else {
                        $("#spnSummTotQty").html($("#SelcItemQty").val());
                        cuantity = parseInt($("#SelcItemQty").val());
                    }
                    $("#spnMainTitle").html(salefrom[j].item_title);
                    $("#spnSummItemDet").html(salefrom[j].item_title);
                    var mont = 0;
                    mont = cuantity * salefrom[j].ivarc_off_price;
                    mont = FormatMonto(mont);
                    $("#spnSummTotVal").html($("#b_domn_mony_smbl").val() + mont);
                    $("#objt_ctrl").html(ivarc_reg_ctrl);
                    pre = salefrom[j].ivarc_off_price;
                    cant = cuantity;
                    sku = salefrom[j].ivarc_sku_child.trim();
                }
            }
        }
    }

    $("#idatrib").html(html);

    SetCokis(pre, cant, sku);
}
function VarSelect() {
    var ctrl = "";

    var array_1 = ElementIDParent();
    var array_2 = [];
    if (chekElemtsSelect()) {
        elemtParent.children("div").each(function () {
            $(this).children("select").each(function () {
                array_2 = $(this).val().split("|");
                array_1 = ElemtComun(array_1, array_2);
            });
        });
        if (array_1.length > 0) {
            ctrl = array_1[0];
        }
    }
    return ctrl;
}
function FormatMonto(num) {
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10)
        cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3) ; i++) {
        num = num.substring(0, num.length - (4 * i + 3)) + ',' +
            num.substring(num.length - (4 * i + 3));
    }
    return (((sign) ? '' : '-') + num + '.' + cents);
}
function SetCokis(pre, cant, sku) {
    var _av = '';
    var _p = 0;
    var _f = 0;
    if (document.cookie.length > 0) {
        _p = document.cookie.indexOf('_ecmm_shpc=');
        if (_p != -1) {
            _p += 11;
            _f = document.cookie.indexOf(";", _p);
            if (_f == -1) {
                _f = document.cookie.length
            }
            _av = document.cookie.substring(_p, _f);
            _av = _av.replace(/\|{2,}/g, '~');
            _av = (_av != '') ? _av + '~' : _av;
        }
    }
    var _ed = new Date();
    _ed.setTime(_ed.getTime() + (24 * 60 * 60 * 1000 * 90));
    var _nv = sku + '|' + cant + '|' + pre;
    var _ec = '_ecmm_shpc=' + _av + _nv + ';expires=' + _ed.toGMTString() + ';path=/';
    document.cookie = _ec;
    ShopcartSumm();
}
function ValidCuantity(cant) {
    if (cant < 10) {
        $("#SelcItemQty").empty();
        for (var i = 1; i <= cant; i++) {
            $("#SelcItemQty").append('<option value=' + i + '>' + i + '</option>');
        }
    } else {
        document.getElementById("inpReqsQty").addEventListener("change", function () {
            var value = parseInt($(this).val());
            if (value > cant) {
                $(this).val(cant);
            }
        });
    }
}
function clearmodal() {
    $("#cntnImgThumb").empty();
    $("#itmImgMain").empty();
    $("#ltrImgThumbVarts").empty();
    $("#spnMainTitle").empty();
    $("#spnPricesInit").empty();;
    $("#cont_atrb_group").empty();
    $("#saleform_prices").empty();
}
function imgpost(e) {
    var img = $(e).attr("src");
    $("#aimgzoom").attr("href", img);
    $("#imgProdMainImage").attr("src", img);    
        loadZoom();
    
}
function loadZoom() {
    if (screen.width >= 767) {
        var $easyzoom = $('.easyzoom').easyZoom();
        var api = $easyzoom.data('easyZoom');
        api.teardown();
        api._init();
    }
}
Array.prototype.unique = function (a) {
    return function () { return this.filter(a) }
}(function (a, b, c) {
    return c.indexOf(a, b + 1) < 0
});
if ($("#hdfItemIndex")[0]) {
    ItemDetail(parseInt($("#hdfItemIndex").val()));
}


function Setthisprodinck() {
    var _ckps = getCookie('_ecmm_itms').split(','); var _itm = ''; _itm = $('#hdfItemIndex').val(); var _itml = '';
    for(i=0;i<_ckps.length;i++){
        if(_ckps[i]!='' && _ckps[i]!=_itm){
            _itml += ','+_ckps[i];
        }
    }
    _itml = _itm +_itml;
    setCookie('_ecmm_itms',_itml,90);
}
function getPrecioItem(array) {
    var _ltr_prop_item = "";
    var mony = $("#b_domn_mony_smbl").val();
    if( parseFloat( array[2]) != parseFloat( array[3] )){    
        if( array[2] == array[0] ){
            _ltr_prop_item += "<span>" + mony + FormatMonto(array[0]) + " - " + mony + FormatMonto(array[1]) + "</span>"
        }else{
            _ltr_prop_item += "<b>" + mony + FormatMonto(array[2]) + " - " + mony + FormatMonto(array[3]) + "</b>"
            if (parseFloat(array[0]) !=parseFloat(array[1])) {
                _ltr_prop_item += "<strong>" + mony + FormatMonto(array[0]) + " - " + mony + FormatMonto(array[1]) + "</strong>"
            }else{
                _ltr_prop_item += "<strong>" + mony + FormatMonto(array[0]) + "</strong>"
            }
        }
    }else{    
        if (parseFloat(array[2]) ==parseFloat( array[0]) ){
            _ltr_prop_item += "<span>" + mony + FormatMonto(array[0]) + "</span>"
        } else {
            _ltr_prop_item += "<b>" + mony + FormatMonto(array[2]) + "</b>"

            if (parseFloat((array[0])) !=parseFloat( array[1])) {
                _ltr_prop_item += "<strong>" + mony + FormatMonto(array[0]) + " - " + mony + FormatMonto(array[1]) + "</strong>"
            } else {
                _ltr_prop_item += "<strong>" + mony + FormatMonto(array[0]) + "</strong>"
            }
        }
    }
    return  _ltr_prop_item;
}
if ($("#hdfItemIndex")[0]){
    ItemDetail(parseInt($("#hdfItemIndex").val()));
}