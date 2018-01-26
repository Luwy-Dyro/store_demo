function imgpost_sf(a) {
    var b = $(a).attr("src");
    $("#aimgzoom_sf").attr("href", b), $("#imgProdMainImage_sf").attr("src", b);
    try {
        loadZoom_sf()
    } catch (a) { }
}

function clearmodal_sf() {
    $("#cntnImgThumb_sf").empty(), $("#itmImgMain_sf").empty(), $("#ltrImgThumbVarts_sf").empty(), $("#spnMainTitle_sf").empty(), $("#spnPricesInit_sf").empty(), $("#cont_atrb_group_sf").empty(), $("#saleform_prices_sf").empty()
}

function loadZoom_sf() {
    if (screen.width >= 767) {
        var a = $(".easyzoom").easyZoom(),
            b = a.data("easyZoom");
        b.teardown(), b._init()
    } else $("#aimgzoom_sf_").removeAttr("href")
}
$("#msg_user_sf").hide(), $("#msg_user_sf").hide(), Module.create("addcart_sf", {
    name: "addcart_sf",
    description: "Módulo que agrega item al carro"

});
var DITEM_sf = DITEM_sf || {},
    DVARC_sf = DVARC_sf || {},
    cart_sf = Module.get("addcart_sf"),
    server = {
        type: "POST",
        url: "/transdata/wmet_stre_saleform.aspx/GetSalefrom",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        error: "Error al cargar"
    };
Module.append("addcart_sf", {
    Init: function (a) {
        if (a > 0) {
            cart_sf.CokisVisit(a);
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
                    o = $.parseJSON(a.d), o[0] && (DITEM_sf = o[0]), o[1] && (DVARC_sf = o[1]), cart_sf.Load()
                }
            })
        }
    },
    Img: function (a, b, c) {
        var d = document.createElement("img");
        return d.setAttribute("src", a), d.setAttribute("class", "img-responsive"), d.setAttribute("alt", b), d.setAttribute("alt", "auto"), d.setAttribute("height", "auto"), 1 == c ? d.setAttribute("onmouseover", "imgpost_sf(this)") : d.setAttribute("id", "imgProdMainImage_sf"), d
    },
    F: function (a) {
        a = a.toString().replace(/\$|\,/g, ""), isNaN(a) && (a = "0"), sign = a == (a = Math.abs(a)), a = Math.floor(100 * a + .50000000001), cents = a % 100, a = Math.floor(a / 100).toString(), cents < 10 && (cents = "0" + cents);
        for (var b = 0; b < Math.floor((a.length - (1 + b)) / 3); b++) a = a.substring(0, a.length - (4 * b + 3)) + "," + a.substring(a.length - (4 * b + 3));
        return (sign ? "" : "-") + a + "." + cents
    },
    Load: function () {
        if (DVARC_sf.length > 0)
            if (DVARC_sf.length <= 1 && "" === DVARC_sf[0][2]) a = DVARC_sf[0], void 0 !== a && cart_sf.Info(a);
            else
                for (j in DVARC_sf)
                    for (var a = DVARC_sf[j], b = a[2].split("|"), c = 0; c < b.length; c++) {
                        var d = b[c].split(":");
                        var elemto = d[0] + "sf";
                        if (document.getElementById(elemto)) {
                            var e = !1,
                                f = "";
                            $("#" + elemto).children().each(function () {
                                $(this).html() == d[2] && (e = !0, f = $(this).val(), $(this).val(f + "|" + a[1]))
                            }), 0 == e && $("#" + elemto).append('<option value="' + a[1] + '">' + d[2] + "</option>")
                        } else {
                            $("#cont_atrb_group_sf").append("<div><span>" + d[1] + '</span><select id="' + elemto + '"><option value="' + a[1] + '">' + d[2] + "</option></select ></div>");
                            var g = document.getElementById(elemto);
                            g.addEventListener("change", function () {
                                cart_sf.Ajent(1), cart_sf.Deni(this)
                            }, !1)
                        }
                    }
        cart_sf.Ajent(1), $("#cont_atrb_group_sf").children("div").each(function () {
            $(this).children("select").each(function () {
                cart_sf.Deni(this)
            })
        })
    },
    Clear: function () {
        $("#prodTitle_sf").empty(), $("#prodSortDesc_sf").empty(), $("#prodLongdesc_sf").empty(), $("#saleform_prices_sf").empty(), $("#Info_title_sf").empty(), $("#Info_desc_sf").empty(), $("#itmImgMain_sf").empty()
    },
    Timg: function (a) {
        var b = a[4].split(",");
        $("#cntnImgThumb_sf").empty();
        for (var c = 0; c < b.length; c++) $("#cntnImgThumb_sf").append(cart_sf.Img(b[c], a.item_title, 1))
    },
    Info: function (a) {
        var b = a[4].split(",");
        d = document.createElement("a"),
            d.setAttribute("id", "aimgzoom_sf"),
            d.setAttribute("href", b[0]), cart_sf.Timg(a);
        var c = DITEM_sf[0];
        if (void 0 !== c) {
            d.appendChild(cart_sf.Img(b[0], c[1])),
                cart_sf.Clear(), $("#spnSummItemDet_sf").html(c[1]),
                $("#itmImgMain_sf").append(d),
                $("#prodTitle_sf").html(c[1]),
                $("#prodSortDesc_sf").html(c[3]),
                $("#prodLongdesc_sf").html(c[4]),
                $("#spnMainTitle_sf").html(c[1]);
            var e = $("#h_domn_mony_smbl").val();

            if (c[13] === false) {
                parseFloat(a[6]) > parseFloat(a[7]) && parseFloat(a[7]) < parseFloat(a[6]) ? $("#saleform_prices_sf").append("<b>" + e + cart_sf.F(parseFloat(a[6])) + "</b><strong>" + e + cart_sf.F(parseFloat(a[7])) + "</strong>") : $("#saleform_prices_sf").append("<span>" + e + cart_sf.F(parseFloat(a[6])) + "</span>"), $("#btnAddToCart").removeAttr("disabled")
            }
            else {
                var h_min = a[7];
                var h_max = a[6];
                var html = "";
                if (parseFloat(h_min) < parseFloat(h_max)) {
                    /*existe oferta*/
                    var por = Math.round(a[8] * 100);
                    html += "<b>" + e + cart_sf.F(parseFloat(h_max)) + "</b><i> -" + por.toFixed(0) + "% </i><strong> Ahora " + e + cart_sf.F(parseFloat(h_min)) + "</strong>"
                } else {
                    html += "<span>" + e + cart_sf.F(parseFloat(h_min)) + "</span>";
                }

                $("#saleform_prices_sf").append(html);
            }
        }
        try {
            loadZoom_sf()
        } catch (a) { }


    },
    Ajent: function (a) {
        if ($("#cont_atrb_group_sf div").length > 0) {
            var b = [];
            if ($("#cont_atrb_group_sf").children("div").each(function () {
                $(this).children("select").each(function () {
                    if (void 0 !== $(this).val() && null !== $(this).val() && "" !== $(this).val()) {
                        var a = $(this).val().split("|");
                        b.push(a)
                    }
                })
            }), 1 == b.length) {
                var c = b[0][0];
                for (j in DVARC_sf) {
                    var d = DVARC_sf[j];
                    void 0 !== d && d[1] === c && ($("#btnAddToCart_sf").removeAttr("disabled"), cart_sf.Info(d, a), cart_sf.Timg(d), $("#msg_user_sf").hide())
                }
            } else if (b.length > 1) {
                var e = b[0];
                for (j in b) e = cart_sf.Cm(e, b[j]);
                if (1 == e.length) {
                    var c = e[0];
                    for (j in DVARC_sf) {
                        var d = DVARC_sf[j];
                        if (void 0 !== d && d[1] === c) {
                            cart_sf.Info(d, a), cart_sf.Timg(d), $("#btnAddToCart_sf").removeAttr("disabled", "disabled"), $("#msg_user_sf").hide();
                            break
                        }
                    }
                } else $("#btnAddToCart").attr("disabled", "disabled"), $("#msg_user_sf").html("La combinación que seleccionaste no la tenemos disponible"), $("#msg_user_sf").show()
            }
        } else $("#btnAddToCart_sf").removeAttr("disabled", "disabled")
    },
    Cm: function (a, b) {

        var c = [];
        for (i in a)
            for (j in b) a[i] == b[j] && c.push(b[j]);
        return c
    },
    Prodc: function () {

        if (!($("#cont_atrb_group_sf div").length > 0)) {
            var a = DVARC_sf[0];
            return void 0 !== a ? a[1] : void 0
        }
        var b = [];
        if ($("#cont_atrb_group_sf").children("div").each(function () {
            $(this).children("select").each(function () {
                var a = $(this).val().split("|");
                b.push(a)
            })

        }), 1 == b.length) {
            var c = b[0][0];
            return c;
        }
        for (j in b) {
            var d = b[0];
            for (j in b) d = cart_sf.Cm(d, b[j]);
            return 1 == d.length ? d[0] : void 0
        }
    },
    Deni: function (a) {
        var b = [];
        b = $(a).val().split("|"), $("#cont_atrb_group_sf").children("div").each(function () {
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
    },
    Add: function () {

        var a = cart_sf.Prodc();

        if (void 0 !== a) {
            var b = "",
                c = 0,
                d = 0,
                e = "";
            for (var f in DVARC_sf) {
                var g = DVARC_sf[f];
                if (void 0 !== g && g[1] === a) {
                    if ("" !== g[2] && null !== g[2] && void 0 !== g[2])
                        for (var h = g[2].split("|"), i = 0; i < h.length; i++) {
                            var j = h[i].split(":");
                            b += "<p><span>" + j[1] + ": </span><i>" + j[2] + "</i></p>"
                        }
                    $("#spnSummSku").html(g[1]), $("#imgSummImage").attr("src", g[3]);
                    var k = 1;
                    "block" == $("#inpReqsQty_sf").css("display") ? (k = parseInt($("#inpReqsQty_sf").val()), $("#spnSummTotQty").html($("#inpReqsQty_sf").val())) : ($("#spnSummTotQty").html($("#SelcItemQty_sf").val()), k = parseInt($("#SelcItemQty_sf").val())), $("#spnMainTitle").html(DITEM_sf[1]), $("#spnSummItemDet").html(DITEM_sf[1]);
                    var i = 0;
                    i = k * parseFloat(g[7]), i = cart_sf.F(i), $("#spnSummTotVal").html($("#h_domn_mony_smbl").val() + i), c = g[7], d = k, e = g[1]
                }
            }
            $("#idatrib").html(b), cart_sf.Cokis(c, d, e)
        }
    },
    Cokis: function (a, b, c) {
        var d = "",
            e = 0,
            f = 0;
        document.cookie.length > 0 && (e = document.cookie.indexOf("_ecmm_shpc="), -1 !== e && (e += 11, f = document.cookie.indexOf(";", e), -1 == f && (f = document.cookie.length), d = document.cookie.substring(e, f), d = d.replace(/\|{2,}/g, "~"), d = "" !== d ? d + "~" : d));
        var g = new Date;
        g.setTime(g.getTime() + 7776e6);
        var h = c + "|" + b + "|" + a,
            i = "_ecmm_shpc=" + d + h + ";expires=" + g.toGMTString() + ";path=/";
        document.cookie = i, ShopcartSumm()
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
    }
}),
    function (a, b) {
        var c = Object.inherit({
            initialize: function (a, b, c, d) {
                this.buttonElement = a, this.selectElemet = b, this.inputElement = c, this.modalelement = d, this.buttonElement.addEventListener("click", this.handleClick.bind(this), !1), this.selectElemet.addEventListener("change", this.handleChange.bind(this), !1), this.inputElement.style.display = "none", this.buttonElement.setAttribute("disabled", "disabled");
            },
            handleClick: function (a) {
                a.preventDefault(), cart_sf.Add()
            },
            handleChange: function (a) {
                a.stopPropagation(), a.preventDefault(), a.target.value >= 10 ? (this.inputElement.style.display = "inline-block", this.inputElement.className = "", this.inputElement.value = 10, this.inputElement.className = "product_qty_10 input10", this.selectElemet.className = "select select10") : (this.inputElement.style.display = "none", this.inputElement.className = "product_qty_10", this.inputElement.value = "", this.selectElemet.className = "select")
            }
        }),
            d = document.getElementById("btnAddToCart_sf"),
            e = document.getElementById("SelcItemQty_sf"),
            f = document.getElementById("inpReqsQty_sf"),
            g = document.getElementById("msg_prod_summ_cntn");
        d !== b && e !== b && f !== b && g !== b && c.create(d, e, f, g)
    }(window), ShopcartSumm(), ItemDetail_sf = function (a) {
        clearmodal_sf(), cart_sf.Init(a)
    }, String.prototype.includes || (String.prototype.includes = function (a, b) {
        "use strict";
        return "number" != typeof b && (b = 0), !(b + a.length > this.length) && -1 !== this.indexOf(a, b)
    })
$("#itmImgMain_sf").on("click", function () {
    $("#cntnImgThumb_sf").children("img").each(function () {
        $(this).attr("onmouseover", "imgpostSf(this)");
        $(this).attr("onchange", "imgpostSf(this)");
    })
})
