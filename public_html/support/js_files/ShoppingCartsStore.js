function imgpost(a) {
    var b = $(a).attr("src");
    $("#aimgzoom").attr("href", b), $("#imgProdMainImage").attr("src", b);
    try {
        loadZoom()
    } catch (a) { }
}

function clearmodal() {
    $("#cntnImgThumb").empty(), $("#itmImgMain").empty(), $("#ltrImgThumbVarts").empty(), $("#spnMainTitle").empty(), $("#spnPricesInit").empty(), $("#cont_atrb_group").empty(), $("#saleform_prices").empty()
}

function loadZoom() {
    if (screen.width >= 767) {
        var a = $(".easyzoom").easyZoom(),
            b = a.data("easyZoom");
        b.teardown(), b._init()
    } else $("#aimgzoom").removeAttr("href")
}
$("#msg_user").hide(), $("#msg_user").hide(), Module.create("addcart", {
    name: "addcart",
    description: "Módulo que agrega item al carro",
    version: "1.0.2"
});
var DITEM = DITEM || {},
    DVARC = DVARC || {},
    DCATG = DCATG || {},
    STOCK = 0, SKUTMP = null,
    cart = Module.get("addcart"),
    server = {
        type: "POST",
        url: "/transdata/wmet_stre_saleform.aspx/GetSalefrom",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        error: "Error al cargar"
    };
Module.append("addcart", {
    Init: function (a, sku) {
        if (a > 0) {
            cart.CokisVisit(a);
            var b = {
                ctrl: a
            };
            $.ajax({
                type: server.type,
                data: JSON.stringify(b),
                url: server.url,
                contentType: server.contentType,
                dataType: server.dataType,
                error: function () {
                    console.log(server.error)
                },
                success: function (a) {
                    o = $.parseJSON(a.d),
                        o[0] && (DITEM = o[0]),
                        o[1] && (DVARC = o[1]),
                        o[2] && (DCATG = o[2]),
                        cart.Load(sku),
                        cart.BredCrumb();
                }
            })
        }
    },
    BredCrumb: function () {
        if (DCATG.length > 0) {
            $("#divBredCrumb").html('<a href="/' + DCATG[0][3] + '">' + DCATG[0][2] + '</a>/<a href="/' + DCATG[0][3] + '/' + DCATG[0][1] + '">' + DCATG[0][0] + '</a>/<b>' + DITEM[0][1] + '</b>');
        }
    },
    Img: function (a, b, c) {
        //console.log('IMG');
        //console.log(a);
        //console.log(b);
        //console.log(c);
        var d = document.createElement("img");
        return d.setAttribute("src", a), d.setAttribute("class", "img-responsive"), d.setAttribute("alt", b), d.setAttribute("alt", "auto"), d.setAttribute("height", "auto"), 1 == c ? d.setAttribute("onmouseover", "imgpost(this)") : d.setAttribute("id", "imgProdMainImage"), d
    },
    F: function (a) {
        a = a.toString().replace(/\$|\,/g, ""), isNaN(a) && (a = "0"), sign = a == (a = Math.abs(a)), a = Math.floor(100 * a + .50000000001), cents = a % 100, a = Math.floor(a / 100).toString(), cents < 10 && (cents = "0" + cents);
        for (var b = 0; b < Math.floor((a.length - (1 + b)) / 3) ; b++) a = a.substring(0, a.length - (4 * b + 3)) + "," + a.substring(a.length - (4 * b + 3));
        return (sign ? "" : "-") + a + "." + cents
    },
    Load: function () {
        if (DVARC.length > 0) {

            if (DVARC.length <= 1 && "" === DVARC[0][2]) a = DVARC[0], void 0 !== a && cart.Info(a);
            else
                for (j in DVARC)
                    for (var a = DVARC[j], b = a[2].split("|"), c = 0; c < b.length; c++) {
                        var d = b[c].split(":");

                        if (document.getElementById(d[0])) {
                            var e = !1,
                                f = "";
                            $("#" + d[0]).children().each(function () {
                                $(this).html() == d[2] && (e = !0, f = $(this).val(), $(this).val(f + "|" + a[1]))
                            }), 0 == e && $("#" + d[0]).append('<option value="' + a[1] + '">' + d[2] + "</option>")
                        } else {
                            $("#cont_atrb_group").append("<div><span>" + d[1] + '</span><select id="' + d[0] + '"><option value="' + a[1] + '">' + d[2] + "</option></select ></div>");
                            var g = document.getElementById(d[0]);
                            g.addEventListener("change", function () {
                                cart.Ajent(1), cart.Deni(this)
                            }, !1)
                        }


                    }


            if (SKUTMP !== undefined && SKUTMP !== null) {
                cart.EditItem();
            }
            else {
                cart.Ajent(1);
            }

            $("#cont_atrb_group").children("div").each(function () {
                $(this).children("select").each(function () {
                    cart.Deni(this)
                })
            })
        }

    },
    Clear: function () {
        $("#prodTitle").empty(), $("#prodSortDesc").empty(), $("#prodLongdesc").empty(), $("#saleform_prices").empty(), $("#Info_title").empty(), $("#Info_desc").empty(), $("#itmImgMain").empty()
    },
    Timg: function (a) {
        //console.log('TIMG');
        //console.log(a);
        var b = a[4].split(",");
        $("#cntnImgThumb").empty();
        for (var c = 0; c < b.length; c++) $("#cntnImgThumb").append(cart.Img(b[c], a.item_title, 1))
    },
    Info: function (a) {
        //console.log('INFO');
        //console.log(a);
        var _a = a[1];
        var b = a[4].split(",");
        d = document.createElement("a"),
            d.setAttribute("id", "aimgzoom"),
            d.setAttribute("href", b[0]), cart.Timg(a);
        var c = DITEM[0];

        STOCK = a[5];

        if (void 0 !== c) {
            d.appendChild(cart.Img(b[0], c[1])),
                cart.Clear(), $("#spnSummItemDet").html(c[1]),
                $("#itmImgMain").append(d),
                $("#prodTitle").html(c[1]),
                $("#prodSortDesc").html(c[3]),
                $("#spnMainTitle").html(c[1]);
            var str = c[4];
            var decodeHtmlEntity = function (str) {
                return $('<div/>').html(str).text();
            };
            str = decodeHtmlEntity(str);
            str = str.replace(/(<([^>]+)>)/ig, "");

            $("#prodLongdesc").html(str);
            var e = $("#h_domn_mony_smbl").val();

            if (c[13] == 'False') {
                parseFloat(a[6]) > parseFloat(a[7]) && parseFloat(a[7]) < parseFloat(a[6]) ? $("#saleform_prices").append("<b>" + e + cart.F(parseFloat(a[6])) + "</b><p>-</p><strong>" + e + cart.F(parseFloat(a[7])) + "</strong>") : $("#saleform_prices").append("<span>" + e + cart.F(parseFloat(a[6])) + "</span>"), $("#btnAddToCart").removeAttr("disabled")
            }
            else {
                var h_min = a[7];
                var h_max = a[6];
                var html = "";
                if (parseFloat(h_min) < parseFloat(h_max)) {
                    /*existe oferta*/
                    var por = Math.round(a[8] * 100);
                    html += "<b>" + e + cart.F(parseFloat(h_max)) + "</b><i class='label-oferta'> -" + por.toFixed(0) + "% </i><strong> Ahora " + e + cart.F(parseFloat(h_min)) + "</strong>"
                } else {
                    html += "<span>" + e + cart.F(parseFloat(h_min)) + "</span>";
                }

                $("#saleform_prices").append(html);
            }
            cart.Stock(a[5]);
        }
        $("#IdDivSf").html('<input type="hidden" id="sf" />');
        try {
            loadZoom()
        } catch (a) { }

        if (STOCK > 0) {
            $("#htmlStock").html("En stock");
        } else {
            $("#htmlStock").html("Sin stock");
        }
 

        jQuery("#tienda option").each(function(i, e) {

            if ($(this).attr('style') == undefined) {

                   if($(e).val().indexOf(_a) !== -1){
                      $(e).prop('selected', true);
                   }
            }

        });
  
    },
    Ajent: function (a) {
       
        if ($("#cont_atrb_group div").length > 0) {
            var b = [];
            if ($("#cont_atrb_group").children("div").each(function () {
                $(this).children("select").each(function () {

                    if ($(this).prop('id') == 'tienda') {
                       b.push($(this).val().split("|"));
                    }else{

                        if (void 0 !== $(this).val() && null !== $(this).val() && "" !== $(this).val()) {
                            var a = $(this).val().split("|");
                            b.push(a)
                        }
                    }
                   
                     
            })
            })/*, (console.log(b))*/, 1 == b.length) {
                var c = b[0][0];
                for (j in DVARC) {
                    var d = DVARC[j];
                    void 0 !== d && d[1] === c && ($("#btnAddToCart").removeAttr("disabled"), cart.Info(d, a), cart.Timg(d), $("#msg_user").hide())
                }
            } else if (b.length > 1) {
                var e = b[0];
                for (j in b) e = cart.Cm(e, b[j]);
                if (1 == e.length) {
                    var c = e[0];
                    for (j in DVARC) {
                        var d = DVARC[j];
                        if (void 0 !== d && d[1] === c) {
                            cart.Info(d, a), cart.Timg(d), $("#btnAddToCart").removeAttr("disabled", "disabled"), $("#msg_user").hide();
                            break
                        }
                    }
                } else $("#btnAddToCart").attr("disabled", "disabled"), $("#msg_user").html("La combinación que seleccionaste no la tenemos disponible"), $("#msg_user").show()
            }
        } else $("#btnAddToCart").removeAttr("disabled", "disabled")
    },
    Ajent_store: function (a) {

                if ($(a).val().toString().indexOf('online') !== -1) {
                    $('#selectedT').remove();
                }
         

        var _contexto = $(a).val();
        if ($("#cont_atrb_group div").length > 0) {
            var b = [];
            if ($("#cont_atrb_group").children("div").each(function () {
               $(this).children("select").each(function () {
                   //console.log($(this).val());

                   if ($(this).prop('id') == 'tienda') {
                       b.push(_contexto.split("|"));
                    } else {
                       if (void 0 !== $(this).val() && null !== $(this).val() && "" !== $(this).val()) {
                           var a = $(this).val().split("|");
                           b.push(a)
                        }
                    }

            })
            })/*, (console.log(b))*/, 1 == b.length) {
                var c = b[0][0];
                for (j in DVARC) {
                    var d = DVARC[j];
                    void 0 !== d && d[1] === c && ($("#btnAddToCart").removeAttr("disabled"), cart.Info(d, a), cart.Timg(d), $("#msg_user").hide())
                }
            } else if (b.length > 1) {
                var e = b[0];
                for (j in b) e = cart.Cm(e, b[j]);
                if (1 == e.length) {
                    var c = e[0];
                    for (j in DVARC) {
                        var d = DVARC[j];
                        if (void 0 !== d && d[1] === c) {
                            cart.Info(d, a), cart.Timg(d), $("#btnAddToCart").removeAttr("disabled", "disabled"), $("#msg_user").hide();
                            break
                        }
                    }
                } else $("#btnAddToCart").attr("disabled", "disabled"), $("#msg_user").html("La combinación que seleccionaste no la tenemos disponible"), $("#msg_user").show()
            }
        } else $("#btnAddToCart").removeAttr("disabled", "disabled")
    },
    Cm: function (a, b) {
        var c = [];
        for (i in a)
            for (j in b) a[i] == b[j] && c.push(b[j]);
        return c
    },
    Prodc: function () {
        if (!($("#cont_atrb_group div").length > 0)) {
            var a = DVARC[0];
            return void 0 !== a ? a[1] : void 0
        }
        var b = [];
        if ($("#cont_atrb_group").children("div").each(function () {
            $(this).children("select").each(function () {
                var a = $(this).val().split("|");
                b.push(a)
        })
        }), 1 == b.length) {
            var c = b[0][0];
            return c
        }
        for (j in b) {
            var d = b[0];
            for (j in b) d = cart.Cm(d, b[j]);
            return 1 == d.length ? d[0] : void 0
        }
    },Deni: function (a) {
        var b = [];
        b = $(a).val().split("|"), $("#cont_atrb_group").children("div").each(function () {
            $(this).children("select").each(function () {
                $(this).attr("id") !== $(a).attr("id") && $(this).children().each(function () {
                    $(this).removeAttr("style");
                    var a = $(this),
                        c = a.val().split("|");
                    sw = !1;
                    for (j in b)
                        for (i in c) b[j] == c[i] && (sw = !0);
                    0 == sw && a.css("background-color", "#ccc")
                })
            })
        })


        if ($('#tienda')) {

            $('#app2').html('');
            $('#contentBody').html('');
            let _html = '';
            ListStores();
            let _c = 0;
            //console.log('CONSTRUYENDO EL NUEVO CONTENEDOR.');

            jQuery("#tienda option").each(function (i, e) {
                //console.log($(e).attr('style'));
       

                var _texto_activo = false;

                if ($(this).attr('style') == undefined) {

                    if ($('#msg_user').attr('style') == 'display: block;') {
                        _texto_activo = true;
                        //$('#msg_user').hide();
                        $('#btnAddToCart').removeAttr('disabled');
                    }

                    var _idnt = jQuery(this).val().split('|');
                    var _new_idnt = '';

                    //console.log('JQUERY');
                    //console.log(_idnt.length);

                    if(_idnt.length > 1){
                        _new_idnt = _idnt[0].split('-')[0];
                    }else{
                        _new_idnt =  _idnt.toString().split('-')[0];
                    }

                    //console.log('NUEVO valor=> ' + _new_idnt);
                  
                    if (jQuery(this).val().indexOf('online') !== -1) {

                        (jQuery("<input type='radio' name='rbtstore' />")
                       .attr("value", jQuery(this).val())
                       .attr("id", jQuery(this).val())
                       .attr("checked", _texto_activo == true ? i == 1 : $(e).prop('selected') == true)
                       .change(function () {
                           cart.Ajent_store(this)
                       })
                       .add($("<i class='" + (jQuery(this).val().indexOf('online') !== -1 ? 'glyphicon glyphicon-home icons_stores' : 'glyphicon glyphicon-tag icons_stores') + "'></i>"))
                       .add($("<label>" + this.textContent + "</label>"))
                       .add($((jQuery(this).val().indexOf('online') !== -1 ? "<hr class='spaces_stores'>" : "<button class='btn btn-default buttons_stores' onclick='openDetails(" + _new_idnt + ")'>Ver</button><input type='hidden' id='" + _new_idnt + "' value='" + this.textContent + "' /><hr class='spaces_stores'>"))))
                       .appendTo("#app2");

                    } else {
                        let _val = jQuery(this).val();
                        let _ob = this;

                        STORES.forEach(function (arry, i) {

                            if (_val.indexOf(arry.adetl_name) !== -1) {
                                _c++;
                                (jQuery("<input type='radio' name='rbtstore' />")
                               .attr("value", _val)
                               .attr("id", _val)
                               .attr("checked", _texto_activo == true ? i == 1 : $(e).prop('selected') == true)
                               .change(function () {
                                   cart.Ajent_store(_ob)
                               })).appendTo("#rbtn" + i);
                     
                            }
                        });
                    }
                }

            });

            if (_c > 0) {
                $('#app2').append('<i class="glyphicon glyphicon-tag icons_stores" style="margin-left: 25px"></i>');
                $('#app2').append('<label>Retiro en Tiendas</label>');
                $('#app2').append('<button class="btn btn-default buttons_stores" data-toggle="modal" data-target="#modal_sale_punto2">Ver tiendas</button>');
            }
             $('#app2 input').each(function(){
                //console.log($(this).prop('checked'));
                if($(this).prop('checked') == true){
                    $('#tienda').val($(this).val());
                }
            });

            jQuery("#tienda option").each(function(i, e) {

             if($(this).prop('selected') == true){

                //console.log('encontrado2');
                //console.log($(this));
                cart.Ajent_store(this);
             }

        }); 

            $('#tienda').parent().hide();
            //$('#modal_sale_punto2').modal('show');

        }
    },
    Add: function () {
        var a = cart.Prodc();
        if (void 0 !== a) {
            var b = "",
                c = 0,
                d = 0,
                e = "";
            for (var f in DVARC) {
                var g = DVARC[f];
                if (void 0 !== g && g[1] === a) {
                    if ("" !== g[2] && null !== g[2] && void 0 !== g[2])
                        for (var h = g[2].split("|"), i = 0; i < h.length; i++) {
                            var j = h[i].split(":");
                            b += "<p><span>" + j[1] + ": </span><i>" + j[2] + "</i></p>"
                        }
                    $("#spnSummSku").html(g[1]), $("#imgSummImage").attr("src", g[3]);
                    var k = 1;

                    if ($("#inpReqsQty").css("display") === "block" || $("#inpReqsQty").css("display") === "inline-block") {
                        k = parseInt($("#inpReqsQty").val());
                    }
                    else {
                        k = parseInt($("#SelcItemQty").val())
                    }
                    //console.log(k);
                    $("#spnSummTotQty").html(k);
                    $("#spnMainTitle").html(DITEM[1]);
                    $("#spnSummItemDet").html(DITEM[1]);
                    var i = 0;
                    i = k * parseFloat(g[7]),
                        i = cart.F(i),
                        $("#spnSummTotVal").html($("#h_domn_mony_smbl").val() + i), c = g[7], d = k, e = g[1]
                }
            }
            $("#idatrib").html(b), cart.Cokis(c, d, e)
        }
    },
    Stock: function (a) {
        $("#SelcItemQty").empty();
        if (a <= 10) {
            for (var i = 1; i <= a; i++) {
                if (i == 10) {
                    $("#SelcItemQty").append('<option value="' + i + '">' + i + '+</option>');
                } else {
                    $("#SelcItemQty").append('<option value="' + i + '">' + i + '</option>');
                }
            }
        } else {
            for (var i = 1; i <= 10; i++) {
                if (i == 10) {
                    $("#SelcItemQty").append('<option value="' + i + '">' + i + '+</option>');
                } else {
                    $("#SelcItemQty").append('<option value="' + i + '">' + i + '</option>');
                }
            }
        }

        if (a > 10) {
            $("#SelcItemQty").change(function () {
                if (parseInt($(this).val()) == 10) {
                    $("#inpReqsQty").show();
                    $("#inpReqsQty").val(10);

                }
            });
            $("#inpReqsQty").change(function () {
                $("#msp_stock_alert").remove();
                if ($(this).val() !== "") {
                    if (parseInt($(this).val()) > 0) {
                        if (parseInt($(this).val()) > a) {
                            $("#inpReqsQty").val(a);
                            var html = '<div  id="msp_stock_alert"  class="detail_stock" role="alert">'
                            html += ' <strong style="font-size:15px"> Stock disponible  ' + a + '</strong> '
                            html += '</div>'
                            $(".product_select_qty").append(html);
                        }
                    }
                }
            })
        }



    },
    Cokis: function (a, b, c) {
        if (SKUTMP !== undefined && SKUTMP != null) {
            var cok = $.cookie('_ecmm_shpc');
            var node_0 = cok.split("~");
            var new_val = "";
            for (var i = 0; i < node_0.length; i++) {
                var node_1 = node_0[i].split("|");
                if (node_1[0] === SKUTMP) {
                    if (new_val === "") {
                        new_val += c + "|" + b + "|" + a;
                    } else {
                        new_val += '~' + c + "|" + b + "|" + a;
                    }
                } else {
                    if (new_val === "") {
                        new_val += node_0[i];
                    } else {
                        new_val += '~' + node_0[i];
                    }
                }
            }
            $.cookie('_ecmm_shpc', new_val, { expires: 30 });
            ShopcartSumm();
            if (typeof dcart === 'function') {
                var t = 1;
                dcart(t)
            }
        } else {
            var cok = $.cookie('_ecmm_shpc');
            var val = "";
            if (cok !== undefined) {
                val = cok;
            }
            var node_0 = val.split("~");
            var sw = false;
            var new_val = "";
            for (var i = 0; i < node_0.length; i++) {
                var node_1 = node_0[i].split("|");
                if (node_1[0] === c) {
                    sw = true;
                    break;
                }
            }
            if (sw) {
                for (var i = 0; i < node_0.length; i++) {
                    var node_1 = node_0[i].split("|");
                    if (node_1[0] === c) {
                        if (new_val === "") {
                            new_val += node_1[0] + "|" + b + "|" + node_1[2];
                        } else {
                            new_val += "~" + node_1[0] + "|" + b + "|" + node_1[2];
                        }
                    } else {
                        if (new_val === "") {
                            new_val += node_0[i];
                        } else {
                            new_val += "~" + node_0[i];
                        }
                    }
                }
            } else {
                if (val === "") {
                    new_val = c + "|" + b + "|" + a;
                } else {
                    new_val = val + '~' + c + "|" + b + "|" + a;
                }
            }
            $.cookie('_ecmm_shpc', new_val, { expires: 30, path: '/' });
            ShopcartSumm();
            if (typeof dcart === 'function') {
                var t = 1;
                dcart(t)
            }
        }
        $("#spnCartQty").click(function () {
            $(".box-cart").css("display", "block");
        });
        GetBolsa();

    },
    CokisVisit: function (a) {
        try {
            var b = $.cookie("_ecmm_itms");
            if (sw = !1, void 0 !== b && null !== b && "" !== b) {
                var c = b.split(",");
                for (j in c) parseInt(c[j]) == parseInt(a) && (sw = !0)
            } else b = "0";
            0 == sw && (b = a + "," + b, $.cookie("_ecmm_itms", b, {
                expires: 90
            }))


        } catch (a) { }
    },
    EditItem: function () {
        var obj = null;
        var sku = SKUTMP;
        if (sku !== undefined && sku !== null && sku !== "") {
            var data = $.cookie('_ecmm_shpc');
            if (data !== undefined && data !== null && data !== "") {
                var node_1 = data.split("~");
                for (var i = 0; i < node_1.length; i++) {
                    var node_2 = node_1[i].split("|");
                    var cant = node_2[1];
                    if (node_2[0] == sku) {
                        obj = cart.getObject(sku);
                        if (obj !== undefined && obj !== null) {
                            var sku = obj[1];
                            var atrb_0 = obj[2];
                            var atrb_1 = atrb_0.split("|");
                            for (var i = 0; i < atrb_1.length; i++) {
                                var atrb_2 = atrb_1[i].split(":");
                                var name = atrb_2[0];
                                var title = atrb_2[1];
                                var val = atrb_2[2];
                                $("#" + name).children().each(function () {
                                    var node_0 = $(this).val();
                                    var node_1 = node_0.split("|");
                                    for (var i = 0; i < node_1.length; i++) {
                                        var node_2 = node_1[i];
                                        if (node_2 == sku) {
                                            $("#" + name).val(node_0);
                                            break;
                                        }
                                    }
                                });

                            }
                            if (cant >= 10) {
                                $("#SelcItemQty").val(10);
                                $("#inpReqsQty").val(cant);
                                $("#inpReqsQty").show();
                            } else {
                                $("#SelcItemQty").val(cant);
                                $("#inpReqsQty").hide();
                            }
                            cart.Ajent(1);
                        }
                        break;
                    }
                }
            }
        }
        localStorage.removeItem('_mode_item');
    },
    getObject: function (a) {
        var obj = null;
        for (j in DVARC) {
            if (DVARC[j] !== undefined) {
                var O = DVARC[j];
                if (O[1] === a) {
                    obj = O;
                    break;
                }
            }
        }
        return obj;
    }
}),
    function (a, b) {
        var c = Object.inherit({
            initialize: function (a, b, c, d) {

                this.buttonElement = a, this.selectElemet = b, this.inputElement = c, this.modalelement = d,
                    this.buttonElement.addEventListener("click", this.handleClick.bind(this), !1),
                    this.selectElemet.addEventListener("change", this.handleChange.bind(this), !1),
                    this.inputElement.style.display = "none",
                    this.buttonElement.setAttribute("disabled", "disabled"),
                    cart.Init($("#hdfItemIndex").val())
            },
            handleClick: function (a) {
                a.preventDefault(), cart.Add()
            },
            handleChange: function (a) {
                a.stopPropagation(), a.preventDefault(), a.target.value >= 10 ? (this.inputElement.style.display = "inline-block", this.inputElement.className = "", this.inputElement.value = 10, this.inputElement.className = "product_qty_10 input10", this.selectElemet.className = "select select10") : (this.inputElement.style.display = "none", this.inputElement.className = "product_qty_10", this.inputElement.value = "", this.selectElemet.className = "select")
            }
        }),
            d = document.getElementById("btnAddToCart"),
            e = document.getElementById("SelcItemQty"),
            f = document.getElementById("inpReqsQty"),
            g = document.getElementById("msg_prod_summ_cntn");
        d !== b && e !== b && f !== b && g !== b && c.create(d, e, f, g)
    }(window), ShopcartSumm(), ItemDetail = function (a) {
        if ($("#sf")[0]) {
            ItemDetail_sf(a);
        } else {
            clearmodal(), cart.Init(a)
        }
    },
    ItemDetailEdit = function (a, sku) {
        clearmodal(), cart.Init(a);
        SKUTMP = sku;
    }
    , String.prototype.includes || (String.prototype.includes = function (a, b) {
        "use strict";
        return "number" != typeof b && (b = 0), !(b + a.length > this.length) && -1 !== this.indexOf(a, b)
    });
$("#itmImgMain").on("click", function () {
    $("#cntnImgThumb").children("img").each(function () {
        $(this).attr("onmouseover", "imgpost(this)");
        $(this).attr("onchange", "imgpost(this)");
    })
})
function DisplayPreview(i) {

    $(i).mouseover(function () {
        var dis = $(i).children('div').children('div').children('div').children('.preview');
        $(dis).show();
    })
    $(i).mouseout(function () {
        var dis = $(i).children('div').children('div').children('div').children('.preview');
        $(dis).hide();
    })

}


function viweclas(e, v) {
    var div_ancho = $(e).width();
    var altoexacto = "0";
    var anchoexacto = "0";
    if ($(e).parent(".contenedor-box-widgt-pro")[0] !== undefined) {
        altoexacto = $(e).parent(".contenedor-box-widgt-pro")[0].getBoundingClientRect().height;
        anchoexacto = $(e).parent(".contenedor-box-widgt-pro")[0].getBoundingClientRect().width;
    }

    if (v === 1) {
        $(e).parent(".contenedor-box-widgt-pro").css("height", altoexacto);
        $(e).parent(".contenedor-box-widgt-pro").css("width", anchoexacto);
        $(e).addClass("box-widget");
        $(e).children(".img_static").children(".preview").css("display", "block");
        $(e).children(".box-design-info").children(".design_name").css("max-height", "60px");
        $(e).children(".box-design-info").children(".design_name").css("height", "auto");
        $(e).children(".box-design-info").children(".design_name").children().css("-webkit-line-clamp", "3");
        $(e).children(".box-design-info").children(".design_descriptc").css("height", "auto");
        $(e).children(".box-design-info").children(".design_descriptc").children().css("-webkit-line-clamp", "2");
        $(e).children(".box-design-info").css("height", "auto");
    } else {
        $(e).parent(".contenedor-box-widgt-pro").css("height", "auto");
        $(e).parent(".contenedor-box-widgt-pro").css("width", "auto");
        $(e).removeClass("box-widget");
        $(e).children(".img_static").children(".preview").css("display", "none");
        $(e).children(".box-design-info").children(".design_name").css("max-height", "40px");
        $(e).children(".box-design-info").children(".design_name").css("height", "auto");
        $(e).children(".box-design-info").children(".design_name").children().css("-webkit-line-clamp", "2");
        $(e).children(".box-design-info").children(".design_descriptc").css("height", "25px");
        $(e).children(".box-design-info").children(".design_descriptc").children().css("-webkit-line-clamp", "1");
        $(e).children(".box-design-info").css("height", "58");
    }
}