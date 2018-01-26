jQuery('#cliFirName').keypress(function (tecla) {
    this.value = this.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/, '');
});
jQuery('#cliLasName').keypress(function (tecla) {
    this.value = this.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/, '');
});
jQuery('#cliRegAdrLn1').keypress(function (tecla) {
    this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.-\s]*$/, '');
});
jQuery('#cliRegAdrLn2').keypress(function (tecla) {
    this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.-\s]*$/, '');
});
jQuery('#cliRegCity').keypress(function (tecla) {
    this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s]*$/, '');
});
jQuery('#cliRegZipCode').keypress(function (tecla) {
    this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s]*$/, '');
});
jQuery('#cliRegPhone').keypress(function (tecla) {
    this.value = this.value.replace(/[^0-9]/g, '');
});

jQuery('#cliBFirName').keypress(function (tecla) {
    this.value = this.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/, '');
});
jQuery('#cliBLasName').keypress(function (tecla) {
    this.value = this.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/, '');
});
jQuery('#cliBRegAdrLn1').keypress(function (tecla) {
    this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.-\s]*$/, '');
});
jQuery('#cliBRegAdrLn2').keypress(function (tecla) {
    this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.-\s]*$/, '');
});
jQuery('#cliBRegCity').keypress(function (tecla) {
    this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s]*$/, '');
});
jQuery('#cliBRegZipCode').keypress(function (tecla) {
    this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s]*$/, '');
});
jQuery('#cliBRegPhone').keypress(function (tecla) {
    this.value = this.value.replace(/[^0-9]/g, '');
});
jQuery('#cliBRazSoc').keypress(function (tecla) {
    this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.-\s]*$/, '');
});

jQuery('#cliBNumRuc').keypress(function (tecla) {
    this.value = this.value.replace(/[^0-9]/g, '');
});

/*mobil*/
jQuery('#cliFirName').keyup(function () {
    this.value = this.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/, '');
});
jQuery('#cliLasName').keyup(function () {
    this.value = this.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/, '');
});
jQuery('#cliRegAdrLn1').keyup(function () {
    this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.-\s]*$/, '');
});
jQuery('#cliRegAdrLn2').keyup(function () {
    this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.-\s]*$/, '');
});
jQuery('#cliRegCity').keyup(function () {
    this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s]*$/, '');
});
jQuery('#cliRegZipCode').keyup(function () {
    this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s]*$/, '');
});
jQuery('#cliRegPhone').keyup(function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});

/***************************************************/
jQuery('#cliBFirName').keyup(function () {
    this.value = this.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/, '');
});
jQuery('#cliBLasName').keyup(function () {
    this.value = this.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/, '');
});
jQuery('#cliBRegAdrLn1').keyup(function () {
    this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.-\s]*$/, '');
});
jQuery('#cliBRegAdrLn2').keyup(function () {
    this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ.-\s]*$/, '');
});
jQuery('#cliBRegCity').keyup(function () {
    this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s]*$/, '');
});
jQuery('#cliBRegZipCode').keyup(function () {
    this.value = this.value.replace(/[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s]*$/, '');
});
jQuery('#cliBRegPhone').keyup(function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});
jQuery('#cliBNumRuc').keyup(function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});

jQuery('#cliBRegBirthD').keypress(function (tecla) {
    this.value = this.value.replace(/[^0-9]/g, '');
});
jQuery('#clcliBRegBirthM').keypress(function (tecla) {
    this.value = this.value.replace(/[^0-9]/g, '');
});
jQuery('#clcliBRegBirthY').keypress(function (tecla) {
    this.value = this.value.replace(/[^0-9]/g, '');
});

jQuery('#cliBRegBirthD').focusout(function () {
    var num = $('#cliBRegBirthD').val();
    if (num != '') {
        if (num < 1 || num > 31) {
            $('#cliBRegBirthD').val('');
            $('#cliBRegBirthD').colorValidate(0);
            $('#lcliBRegBirthD').css({
                'color': 'red'
            })
        } else {
            $('#cliBRegBirthD').colorValidate(1);
            $('#lcliBRegBirthD').css({
                'color': '#282828'
            });
            valYear();
        }
    }
});
jQuery('#cliBRegBirthM').focusout(function () {
    var num = $('#cliBRegBirthM').val();
    if (num != '') {
        if (num < 1 || num > 12) {
            $('#cliBRegBirthM').val('');
            $('#cliBRegBirthM').css({
                'border-color': 'red'
            });
            $('#lcliBRegBirthM').css({
                'color': 'red'
            })
        } else {
            $('#cliBRegBirthM').css({
                'border-color': '#ccc'
            });
            $('#lcliBRegBirthM').css({
                'color': '#282828'
            });
            valYear();
        }
    }
});
jQuery('#cliBRegBirthY').focusout(function () {
    var num = $('#cliBRegBirthY').val();
    if (num != '') {
        if (num < 1896 || num > 2016) {
            $('#cliBRegBirthY').val('');
            $('#cliBRegBirthY').css({
                'border-color': 'red'
            });
            $('#lcliBRegBirthY').css({
                'color': 'red'
            })
        } else {
            $('#cliBRegBirthY').css({
                'border-color': '#ccc'
            });
            $('#lcliBRegBirthY').css({
                'color': '#282828'
            });
            valYear();
        }
    }
});

jQuery('#cliBRegBirthD').keyup(function () {
    this.value = (this.value + '').replace(/[^0-9]/g, '');
    if (this.value.length == 2) {
        $('#cliBRegBirthM').focus();
    }
});
jQuery('#cliBRegBirthM').keyup(function () {
    this.value = (this.value + '').replace(/[^0-9]/g, '');
    if (this.value.length == 2) {
        $('#cliBRegBirthY').focus();
    }
});
jQuery('#cliBRegBirthY').keyup(function () {
    this.value = this.value.replace(/[^0-9]/g, '');
    if (this.value.length == 4) {
        $('#cliBRegTM').focus();
    }
});

function validaFromulario() {
    var sw = true;
    var cliFirName = $('#cliFirName').val();
    if ($('#chkrcjotnda:checked').length == 0) {
        if (cliFirName.length < 2) {
            $('#cliFirName').css({
                'border-color': 'red'
            });
            $('#lcliFirName').css({
                'color': 'red'
            })
            sw = false;
        } else {
            $('#cliFirName').css({
                'border-color': '#ccc'
            });
            $('#lcliFirName').css({
                'color': '#282828'
            });
        }
    }

    var cliLasName = $('#cliLasName').val();
    if ($('#chkrcjotnda:checked').length == 0) {
        if (cliLasName.length < 2) {
            $('#cliLasName').css({
                'border-color': 'red'
            });
            $('#lcliLasName').css({
                'color': 'red'
            });
            sw = false;
        } else {
            $('#cliLasName').css({
                'border-color': '#ccc'
            });
            $('#lcliLasName').css({
                'color': '#282828'
            });
        }
    }

    var cliRegAdrLn1 = $('#cliRegAdrLn1').val();
    if ($('#chkrcjotnda:checked').length == 0) {
        if (cliRegAdrLn1.length < 5) {
            $('#cliRegAdrLn1').css({
                'border-color': 'red'
            });
            $('#lcliRegAdrLn1').css({
                'color': 'red'
            });
            sw = false;
        } else {
            $('#cliRegAdrLn1').css({
                'border-color': '#ccc'
            });
            $('#lcliRegAdrLn1').css({
                'color': '#282828'
            });
        }
    }

    var cliRegAdrLn2 = $('#cliRegAdrLn2').val();
    if ($('#chkrcjotnda:checked').length == 0) {
        if (cliRegAdrLn2.length > 0) {
            if (cliRegAdrLn2.length < 5) {
                $('#cliRegAdrLn2').css({
                    'border-color': 'red'
                });
                $('#lcliRegAdrLn2').css({
                    'color': 'red'
                });
                sw = false;
            } else {
                $('#cliRegAdrLn2').css({
                    'border-color': '#ccc'
                });
                $('#lcliRegAdrLn2').css({
                    'color': '#282828'
                });
            }
        }
    }
    var cliRegCity = $('#cliRegCity').val();
    if (cliRegCity.length < 2) {
        $('#cliRegCity').css({
            'border-color': 'red'
        });
        $('#lcliRegCity').css({
            'color': 'red'
        });
        sw = false;
    } else {
        $('#cliRegCity').css({
            'border-color': '#ccc'
        });
        $('#lcliRegCity').css({
            'color': '#282828'
        });
    }

    var cliRegZipCode = $('#cliRegZipCode').val();
    if (cliRegZipCode.length < 5) {
        $('#cliRegZipCode').css({
            'border-color': 'red'
        });
        $('#lcliRegZipCode').css({
            'color': 'red'
        });
        sw = false;
    } else {
        $('#cliRegZipCode').css({
            'border-color': '#ccc'
        });
        $('#lcliRegZipCode').css({
            'color': '#282828'
        });
    }

    var cliRegPhone = $('#cliRegPhone').val();
    if ($('#chkrcjotnda:checked').length == 0) {
        if (cliRegPhone.length < 5) {
            $('#cliRegPhone').css({
                'border-color': 'red'
            });
            $('#lcliRegPhone').css({
                'color': 'red'
            });
            sw = false;
        } else {
            $('#cliRegPhone').css({
                'border-color': '#ccc'
            });
            $('#lcliRegPhone').css({
                'color': '#282828'
            });
        }
    }

    let long = 8;

    if ($('#cliOpcTypeDoc option:selected').val() == 0) {
        sw = false
        $('#cmb_type_doc').css({
            'border-color': 'red'
        });
    } else {
        if ($('#cliOpcTypeDoc option:selected').val() != 1) {
            long = 12;
        }
        $('#cliOpcTypeDoc').css({
            'border-color': '#ccc'
        });
    }

    if (long == 8) {
        $('#cliNumDoc').attr('onkeypress', "return soloNumeros(event);");
    } else {
        $('#cliNumDoc').removeAttr('onkeypress');
    }

    $('#cliNumDoc').attr('maxlength', long)

    if ($('#cliNumDoc').val() == '') {
        sw = false
        $('#cliNumDoc').css({
            'border-color': 'red'
        });
    } else {
        if ($('#cliNumDoc').val().length != long) {
            sw = false
            $('#cliNumDoc').css({
                'border-color': 'red'
            });
        } else {
            $('#cliNumDoc').css({
                'border-color': '#ccc'
            });
        }
    }

    if ($('#cliRegState').is(":visible")) {
        if ($('#cliRegState').val() == "") {
            $('#cliRegState').css({
                'border-color': 'red'
            });
            $('#lcliRegState').css({
                'color': 'red'
            });
            sw = false;
        } else {
            $('#cliRegState').css({
                'border-color': '#ccc'
            });
            $('#lcliRegState').css({
                'color': '#282828'
            });
        }
    } else {
        var cliOpcState = $('#cliOpcState option:selected').text();
        if ($('#chkrcjotnda:checked').length == 0) {
            if (cliOpcState == "—" && $('#vld_shp').val() == 0) {
                $('#cliOpcState').css({
                    'border-color': 'red'
                });
                $('#lcliRegState').css({
                    'color': 'red'
                });
                sw = false;
            } else {
                $('#cliOpcState').css({
                    'border-color': '#ccc'
                });
                $('#lcliRegState').css({
                    'color': '#282828'
                });
            }
        }
    }

    var cliFirName = $('#cliFirName').val();
    if (cliFirName.length < 2) {
        $('#cliFirName').css({
            'border-color': 'red'
        });
        $('#lcliFirName').css({
            'color': 'red'
        })
        sw = false;
    } else {
        $('#cliFirName').css({
            'border-color': '#ccc'
        });
        $('#lcliFirName').css({
            'color': '#282828'
        });
    }

    var cliLasName = $('#cliLasName').val();
    if ($('#chkrcjotnda:checked').length == 0) {
        if (cliLasName.length < 2) {
            $('#cliLasName').css({
                'border-color': 'red'
            });
            $('#lcliLasName').css({
                'color': 'red'
            });
            sw = false;
        } else {
            $('#cliLasName').css({
                'border-color': '#ccc'
            });
            $('#lcliLasName').css({
                'color': '#282828'
            });
        }
    }

    var cliRegAdrLn2 = $('#cliRegAdrLn2').val();
    if ($('#chkrcjotnda:checked').length == 0) {
        if (cliRegAdrLn2.length > 0) {
            if (cliRegAdrLn2.length < 5) {
                $('#cliRegAdrLn2').css({
                    'border-color': 'red'
                });
                $('#lcliRegAdrLn2').css({
                    'color': 'red'
                });
                sw = false;
            } else {
                $('#cliRegAdrLn2').css({
                    'border-color': '#ccc'
                });
                $('#lcliRegAdrLn2').css({
                    'color': '#282828'
                });
            }
        }
    }

    var cliRegCity = $('#cliRegCity').val();
    if (cliRegCity.length < 2) {
        $('#cliRegCity').css({
            'border-color': 'red'
        });
        $('#lcliRegCity').css({
            'color': 'red'
        });
        sw = false;
    } else {
        $('#cliRegCity').css({
            'border-color': '#ccc'
        });
        $('#lcliRegCity').css({
            'color': '#282828'
        });
    }
    var cliRegZipCode = $('#cliRegZipCode').val();
    if (cliRegZipCode.length < 5) {
        $('#cliRegZipCode').css({
            'border-color': 'red'
        });
        $('#lcliRegZipCode').css({
            'color': 'red'
        });
        sw = false;
    } else {
        $('#cliRegZipCode').css({
            'border-color': '#ccc'
        });
        $('#lcliRegZipCode').css({
            'color': '#282828'
        });
    }
    var cliRegPhone = $('#cliRegPhone').val();
    if ($('#chkrcjotnda:checked').length == 0) {
        if (cliRegPhone.length < 5) {
            $('#cliRegPhone').css({
                'border-color': 'red'
            });
            $('#lcliRegPhone').css({
                'color': 'red'
            });
            sw = false;
        } else {
            $('#cliRegPhone').css({
                'border-color': '#ccc'
            });
            $('#lcliRegPhone').css({
                'color': '#282828'
            });
        }
    }

    if ($('#cliRegState').is(":visible")) {
        if ($('#cliRegState').val() == "") {
            $('#cliRegState').css({
                'border-color': 'red'
            });
            $('#lcliRegState').css({
                'color': 'red'
            });
            sw = false;
        } else {
            $('#cliRegState').css({
                'border-color': '#ccc'
            });
            $('#lcliRegState').css({
                'color': '#282828'
            });
        }
    } else {
        var cliOpcState = $('#cliOpcState option:selected').text();
        if ($('#chkrcjotnda:checked').length == 0) {
            if (cliOpcState == "—" && $('#vld_shp').val() == 0) {
                $('#cliOpcState').css({
                    'border-color': 'red'
                });
                $('#lcliRegState').css({
                    'color': 'red'
                });
                sw = false;
            } else {
                $('#cliOpcState').css({
                    'border-color': '#ccc'
                });
                $('#lcliRegState').css({
                    'color': '#282828'
                });
            }
        }
    }
    /****************************************/
    var cliBFirName = $('#cliBFirName').val();
    if (cliBFirName.length < 2) {
        $('#cliBFirName').css({
            'border-color': 'red'
        });
        $('#lcliBFirName').css({
            'color': 'red'
        })
        sw = false;
    } else {
        $('#cliBFirName').css({
            'border-color': '#ccc'
        });
        $('#lcliBFirName').css({
            'color': '#282828'
        });
    }

    var cliBLasName = $('#cliBLasName').val();
    if (cliBLasName.length < 2) {
        $('#cliBLasName').css({
            'border-color': 'red'
        });
        $('#lcliBLasName').css({
            'color': 'red'
        });
        sw = false;
    } else {
        $('#cliBLasName').css({
            'border-color': '#ccc'
        });
        $('#lcliBLasName').css({
            'color': '#282828'
        });
    }

    var cliBRegAdrLn1 = $('#cliBRegAdrLn1').val();
    if (cliBRegAdrLn1.length < 5) {
        $('#cliBRegAdrLn1').css({
            'border-color': 'red'
        });
        $('#lcliBRegAdrLn1').css({
            'color': 'red'
        });
        sw = false;
    } else {
        $('#cliBRegAdrLn1').css({
            'border-color': '#ccc'
        });
        $('#lcliBRegAdrLn1').css({
            'color': '#282828'
        });
    }

    var cliBRegAdrLn2 = $('#cliBRegAdrLn2').val();
    if (cliBRegAdrLn2.length > 0) {
        if (cliBRegAdrLn2.length < 5) {
            $('#cliBRegAdrLn2').css({
                'border-color': 'red'
            });
            $('#lcliBRegAdrLn2').css({
                'color': 'red'
            });
            sw = false;
        } else {
            $('#cliBRegAdrLn2').css({
                'border-color': '#ccc'
            });
            $('#lcliBRegAdrLn2').css({
                'color': '#282828'
            });
        }
    }
    var cliBRegCity = $('#cliBRegCity').val();
    if (cliBRegCity.length < 2) {
        $('#cliBRegCity').css({
            'border-color': 'red'
        });
        $('#lcliBRegCity').css({
            'color': 'red'
        });
        sw = false;
    } else {
        $('#cliBRegCity').css({
            'border-color': '#ccc'
        });
        $('#lcliBRegCity').css({
            'color': '#282828'
        });
    }

    var cliBRegZipCode = $('#cliBRegZipCode').val();
    if (cliBRegZipCode.length < 5) {
        $('#cliBRegZipCode').css({
            'border-color': 'red'
        });
        $('#lcliBRegZipCode').css({
            'color': 'red'
        });
        sw = false;
    } else {
        $('#cliBRegZipCode').css({
            'border-color': '#ccc'
        });
        $('#lcliBRegZipCode').css({
            'color': '#282828'
        });
    }

    var cliBRegPhone = $('#cliBRegPhone').val();
    if (cliBRegPhone.length < 5) {
        $('#cliBRegPhone').css({
            'border-color': 'red'
        });
        $('#lcliBRegPhone').css({
            'color': 'red'
        });
        sw = false;
    } else {
        $('#cliBRegPhone').css({
            'border-color': '#ccc'
        });
        $('#lcliBRegPhone').css({
            'color': '#282828'
        });
    }
    if ($('#cliBRegState').is(":visible")) {
        if ($('#cliBRegState').val() == "") {
            $('#cliBRegState').css({
                'border-color': 'red'
            });
            $('#lcliBRegState').css({
                'color': 'red'
            });
            sw = false;
        } else {
            $('#cliBRegState').css({
                'border-color': '#ccc'
            });
            $('#lcliBRegState').css({
                'color': '#282828'
            });
        }
    } else {
        var cliOpcState = $('#cliOpcState option:selected').text();
        if ($('#chkrcjotnda:checked').length == 0) {
            if (cliOpcState == "—" && $('#vld_shp').val() == 0) {
                $('#cliBOpcState').css({
                    'border-color': 'red'
                });
                console.log('x3');
                $('#lcliBRegState').css({
                    'color': 'red'
                });
                sw = false;
            } else {
                $('#cliBOpcState').css({
                    'border-color': '#ccc'
                });
                $('#lcliBRegState').css({
                    'color': '#282828'
                });
            }
        }
    }
    var cliBRegEmail = $("#cliBRegEmail").val();
    if ($("#cliBRegEmail")[0]) {
        var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
        if (regex.test(cliBRegEmail)) {
            $('#cliBRegEmail').css({
                'border-color': '#ccc'
            });
            $('#lcliBRegEmail').css({
                'color': '#282828'
            });
        } else {
            $('#cliBRegEmail').css({
                'border-color': 'red'
            });
            $('#lcliBRegEmail').css({
                'color': 'red'
            });
            sw = false;
        }
    }
    if ($("#ftcn2").is(':checked')) {
        var cliBNumRuc = $("#cliBNumRuc").val();
        if (cliBNumRuc.length != 11) {
            $('#cliBNumRuc').css({
                'border-color': 'red'
            });
            $('#lcliBNumRuc').css({
                'color': 'red'
            });
            sw = false;
        } else {
            $('#cliBNumRuc').css({
                'border-color': '#ccc'
            });
            $('#lcliBNumRuc').css({
                'color': '#282828'
            });
        }
        var cliBRazSoc = $("#cliBRazSoc").val();
        if (cliBRazSoc.length < 2) {
            $('#cliBRazSoc').css({
                'border-color': 'red'
            });
            $('#lcliBRazSoc').css({
                'color': 'red'
            });
            sw = false;
        } else {
            $('#cliBRazSoc').css({
                'border-color': '#ccc'
            });
            $('#lcliBRazSoc').css({
                'color': '#282828'
            });
        }
    }
    
    if ($('#cliBRegState').is(":visible")) {
        if ($('#cliBRegState').val() == "") {
            $('#cliBRegState').css({
                'border-color': 'red'
            });
            $('#lcliBRegState').css({
                'color': 'red'
            });
            sw = false;
        } else {
            $('#cliBRegState').css({
                'border-color': '#ccc'
            });
            $('#lcliBRegState').css({
                'color': '#282828'
            });
        }
    } else {
        if ($('#cliOpcState')[0]) {
            var cliOpcState = $('#cliOpcState option:selected').text();
            if ($('#chkrcjotnda:checked').length == 0) {
                if (cliOpcState == "—" && $('#vld_shp').val() == 0) {
                    $('#cliBOpcState').css({
                        'border-color': 'red'
                    });
                    console.log('x1');
                    $('#lcliBRegState').css({
                        'color': 'red'
                    });
                    sw = false;
                } else {
                    $('#cliBOpcState').css({
                        'border-color': '#ccc'
                    });
                    $('#lcliBRegState').css({
                        'color': '#282828'
                    });
                }
            }
        }
    }
    /***vmb**/
    if ($('#cliOpcCity')) {
        if ($('#cliOpcCity').css('display') == 'block') {
            var indx_cliOpcCity = $('#cliOpcCity option:selected').index();
            if ($('#chkrcjotnda:checked').length == 0) {
                if (indx_cliOpcCity == 0) {
                    $('#cliOpcCity').css({
                        'border-color': 'red'
                    });
                    $('#lcliOpcCity').css({
                        'color': 'red'
                    });
                    sw = false;
                } else {
                    $('#cliOpcCity').css({
                        'border-color': '#ccc'
                    });
                    $('#lcliOpcCity').css({
                        'color': '#282828'
                    });
                }
            }
        }
    }
    if ($('#cliOpcZipCode')) {
        if ($('#cliOpcZipCode').css('display') == 'block') {
            var indx_cliOpcZipCode = $('#cliOpcZipCode option:selected').index();
            if ($('#chkrcjotnda:checked').length == 0) {
                if (indx_cliOpcZipCode == 0) {
                    $('#cliOpcZipCode').css({
                        'border-color': 'red'
                    });
                    $('#lcliOpcZipCode').css({
                        'color': 'red'
                    });
                    sw = false;
                } else {
                    $('#cliOpcZipCode').css({
                        'border-color': '#ccc'
                    });
                    $('#lcliOpcZipCode').css({
                        'color': '#282828'
                    });
                }
            }
        }
    }

    //Fecha de entrega

    if ($('#dod_modal_contnt').is(':visible') && getLS() == '') {
        $('#btn_dod_modal_show').focus();
        sw = false;
    }

    //fin fecha de entrega

    if ($('#cliBOpcCity')) {
        if ($('#cliBOpcCity').css('display') == 'block') {
            var indx_cliBOpcCity = $('#cliBOpcCity option:selected').index();
            if (indx_cliBOpcCity == 0) {
                $('#cliBOpcCity').css({
                    'border-color': 'red'
                });
                $('#lcliBOpcCity').css({
                    'color': 'red'
                });
                sw = false;
            } else {
                $('#cliBOpcCity').css({
                    'border-color': '#ccc'
                });
                $('#lcliBOpcCity').css({
                    'color': '#282828'
                });
            }
        }
    }
    if ($('#cliBOpcZipCode')) {
        if ($('#cliBOpcZipCode').css('display') == 'block') {
            var indx_cliBOpcZipCode = $('#cliBOpcZipCode option:selected').index();
            if (indx_cliBOpcZipCode == 0) {
                $('#cliBOpcZipCode').css({
                    'border-color': 'red'
                });
                $('#lcliBOpcZipCode').css({
                    'color': 'red'
                });
                sw = false;
            } else {
                $('#cliBOpcZipCode').css({
                    'border-color': '#ccc'
                });
                $('#lcliBOpcZipCode').css({
                    'color': '#282828'
                });
            }
        }
    }
    /****fin vmb*/
    if ($('#cliBRegBirthY')[0]) {
        var cliBRegBirthY = $('#cliBRegBirthY').val();
        if (cliBRegBirthY.length < 4) {
            $('#cliBRegBirthY').css({
                'border-color': 'red'
            });
            $('#lcliBRegBirthY').css({
                'color': 'red'
            });
            sw = false;
        } else {
            $('#cliBRegBirthY').css({
                'border-color': '#ccc'
            });
            $('#lcliBRegBirthY').css({
                'color': '#282828'
            });
        }
    }
    if ($('#cliBRegBirthD')[0]) {
        var cliBRegBirthD = $('#cliBRegBirthD').val();
        if (cliBRegBirthD.length < 2) {
            $('#cliBRegBirthD').css({
                'border-color': 'red'
            });
            $('#lcliBRegBirthD').css({
                'color': 'red'
            });
            sw = false;
        } else {
            $('#cliBRegBirthD').css({
                'border-color': '#ccc'
            });
            $('#lcliBRegBirthD').css({
                'color': '#282828'
            });
        }
    }
    if ($('#cliBRegBirthM')[0]) {
        var cliBRegBirthM = $('#cliBRegBirthM').val();
        if (cliBRegBirthM.length < 2) {
            $('#cliBRegBirthM').css({
                'border-color': 'red'
            });
            $('#lcliBRegBirthM').css({
                'color': 'red'
            });
            sw = false;
        } else {
            $('#cliBRegBirthM').css({
                'border-color': '#ccc'
            });
            $('#lcliBRegBirthM').css({
                'color': '#282828'
            });
        }
    }
    /*radio de metos de pago*/
    var mp = parseInt($("#hdfpymnselc").val());
    if (mp === 6) {
            var mn = $("#nsp_pay_money").val();
            if ($.isNumeric(mn)) {
                $("#nsp_pay_money").removeAttr("style");
                var total = $("#spnsummtotal").html();
                total = total.replace($("#money_simbl_type").val(), "");   
                var money = parseFloat(total);
                if (mn < money) {
                    $("#nsp_pay_money").css("border-color", "red");
                    $("#alert_money_first").show();
                    sw = false;
                } else {
                    $("#alert_money_first").hide();
                    sw = true;
                }               
            } else {
                $("#nsp_pay_money").css("border-color", "red");
                 $("#alert_money_first").hide();
                sw = false;
            }       
    }

    if ($("#cliBRegTM").length > 0) {
        if ($("#cliBRegTM")[0]) {
            if ($("#cliBRegTM").is(':checked')) {
                $('#cliBRegTM').css({
                    'border-color': '#ccc'
                });
                $('#lcliBRegTM').css({
                    'color': '#282828'
                });
            } else {
                $('#cliBRegTM').css({
                    'border-color': 'red'
                });
                $('#lcliBRegTM').css({
                    'color': 'red'
                });

                $('html, body').animate({
                    scrollTop: '400px'
                }, 400);

                sw = false;
            }
        }
    }
    return sw;
}

function validaFromulariopos() {
    var sw = true;

    var cliFirName = $('#cliFirName').val();
    if (cliFirName.length < 2) {
        $('#cliFirName').css({
            'border-color': 'red'
        });
        $('#lcliFirName').css({
            'color': 'red'
        })
        sw = false;
    } else {
        $('#cliFirName').css({
            'border-color': '#ccc'
        });
        $('#lcliFirName').css({
            'color': '#282828'
        });
    }

    var cliLasName = $('#cliLasName').val();
    if ($('#chkrcjotnda:checked').length == 0) {
        if (cliLasName.length < 2) {
            $('#cliLasName').css({
                'border-color': 'red'
            });
            $('#lcliLasName').css({
                'color': 'red'
            });
            sw = false;
        } else {
            $('#cliLasName').css({
                'border-color': '#ccc'
            });
            $('#lcliLasName').css({
                'color': '#282828'
            });
        }
    }

    var cliRegAdrLn1 = $('#cliRegAdrLn1').val();
    if ($('#chkrcjotnda:checked').length == 0) {
        if (cliRegAdrLn1.length < 5) {
            $('#cliRegAdrLn1').css({
                'border-color': 'red'
            });
            $('#lcliRegAdrLn1').css({
                'color': 'red'
            });
            sw = false;
        } else {
            $('#cliRegAdrLn1').css({
                'border-color': '#ccc'
            });
            $('#lcliRegAdrLn1').css({
                'color': '#282828'
            });
        }
    }
    var cliRegAdrLn2 = $('#cliRegAdrLn2').val();
    if ($('#chkrcjotnda:checked').length == 0) {
        if (cliRegAdrLn2.length > 0) {
            if (cliRegAdrLn2.length < 5) {
                $('#cliRegAdrLn2').css({
                    'border-color': 'red'
                });
                $('#lcliRegAdrLn2').css({
                    'color': 'red'
                });
                sw = false;
            } else {
                $('#cliRegAdrLn2').css({
                    'border-color': '#ccc'
                });
                $('#lcliRegAdrLn2').css({
                    'color': '#282828'
                });
            }
        }
    }

    var cliRegCity = $('#cliRegCity').val();
    if (cliRegCity.length < 2) {
        $('#cliRegCity').css({
            'border-color': 'red'
        });
        $('#lcliRegCity').css({
            'color': 'red'
        });
        sw = false;
    } else {
        $('#cliRegCity').css({
            'border-color': '#ccc'
        });
        $('#lcliRegCity').css({
            'color': '#282828'
        });
    }

    var cliRegZipCode = $('#cliRegZipCode').val();
    if (cliRegZipCode.length < 5) {
        $('#cliRegZipCode').css({
            'border-color': 'red'
        });
        $('#lcliRegZipCode').css({
            'color': 'red'
        });
        sw = false;
    } else {
        $('#cliRegZipCode').css({
            'border-color': '#ccc'
        });
        $('#lcliRegZipCode').css({
            'color': '#282828'
        });
    }

    var cliRegPhone = $('#cliRegPhone').val();
    if ($('#chkrcjotnda:checked').length == 0) {
        if (cliRegPhone.length < 5) {
            $('#cliRegPhone').css({
                'border-color': 'red'
            });
            $('#lcliRegPhone').css({
                'color': 'red'
            });
            sw = false;
        } else {
            $('#cliRegPhone').css({
                'border-color': '#ccc'
            });
            $('#lcliRegPhone').css({
                'color': '#282828'
            });
        }
    }

    if ($('#cliRegState').is(":visible")) {
        if ($('#cliRegState').val() == "") {
            $('#cliRegState').css({
                'border-color': 'red'
            });
            $('#lcliRegState').css({
                'color': 'red'
            });
            sw = false;
        } else {
            $('#cliRegState').css({
                'border-color': '#ccc'
            });
            $('#lcliRegState').css({
                'color': '#282828'
            });
        }
    } else {
        var cliOpcState = $('#cliOpcState option:selected').text();
        if ($('#chkrcjotnda:checked').length == 0) {
            if (cliOpcState == "—" && $('#vld_shp').val() == 0) {
                $('#cliOpcState').css({
                    'border-color': 'red'
                });
                $('#lcliRegState').css({
                    'color': 'red'
                });
                sw = false;
            } else {
                $('#cliOpcState').css({
                    'border-color': '#ccc'
                });
                $('#lcliRegState').css({
                    'color': '#282828'
                });
            }
        }
    }

    var cliFirName = $('#cliFirName').val();
    if ($('#chkrcjotnda:checked').length == 0) {
        if (cliFirName.length < 2) {
            $('#cliFirName').css({
                'border-color': 'red'
            });
            $('#lcliFirName').css({
                'color': 'red'
            })
            sw = false;
        } else {
            $('#cliFirName').css({
                'border-color': '#ccc'
            });
            $('#lcliFirName').css({
                'color': '#282828'
            });
        }
    }

    var cliLasName = $('#cliLasName').val();
    if ($('#chkrcjotnda:checked').length == 0) {
        if (cliLasName.length < 2) {
            $('#cliLasName').css({
                'border-color': 'red'
            });
            $('#lcliLasName').css({
                'color': 'red'
            });
            sw = false;
        } else {
            $('#cliLasName').css({
                'border-color': '#ccc'
            });
            $('#lcliLasName').css({
                'color': '#282828'
            });
        }
    }

    var cliRegAdrLn1 = $('#cliRegAdrLn1').val();
    if ($('#chkrcjotnda:checked').length == 0) {
        if (cliRegAdrLn1.length < 5) {
            $('#cliRegAdrLn1').css({
                'border-color': 'red'
            });
            $('#lcliRegAdrLn1').css({
                'color': 'red'
            });
            sw = false;
        } else {
            $('#cliRegAdrLn1').css({
                'border-color': '#ccc'
            });
            $('#lcliRegAdrLn1').css({
                'color': '#282828'
            });
        }
    }

    var cliRegAdrLn2 = $('#cliRegAdrLn2').val();
    if ($('#chkrcjotnda:checked').length == 0) {
        if (cliRegAdrLn2.length > 0) {
            if (cliRegAdrLn2.length < 5) {
                $('#cliRegAdrLn2').css({
                    'border-color': 'red'
                });
                $('#lcliRegAdrLn2').css({
                    'color': 'red'
                });
                sw = false;
            } else {
                $('#cliRegAdrLn2').css({
                    'border-color': '#ccc'
                });
                $('#lcliRegAdrLn2').css({
                    'color': '#282828'
                });
            }
        }
    }
    var cliRegCity = $('#cliRegCity').val();
    if (cliRegCity.length < 2) {
        $('#cliRegCity').css({
            'border-color': 'red'
        });
        $('#lcliRegCity').css({
            'color': 'red'
        });
        sw = false;
    } else {
        $('#cliRegCity').css({
            'border-color': '#ccc'
        });
        $('#lcliRegCity').css({
            'color': '#282828'
        });
    }
    var cliRegZipCode = $('#cliRegZipCode').val();
    if (cliRegZipCode.length < 5) {
        $('#cliRegZipCode').css({
            'border-color': 'red'
        });
        $('#lcliRegZipCode').css({
            'color': 'red'
        });
        sw = false;
    } else {
        $('#cliRegZipCode').css({
            'border-color': '#ccc'
        });
        $('#lcliRegZipCode').css({
            'color': '#282828'
        });
    }
    var cliRegPhone = $('#cliRegPhone').val();
    if ($('#chkrcjotnda:checked').length == 0) {
        if (cliRegPhone.length < 5) {
            $('#cliRegPhone').css({
                'border-color': 'red'
            });
            $('#lcliRegPhone').css({
                'color': 'red'
            });
            sw = false;
        } else {
            $('#cliRegPhone').css({
                'border-color': '#ccc'
            });
            $('#lcliRegPhone').css({
                'color': '#282828'
            });
        }
    }
    if ($('#cliRegState').is(":visible")) {
        if ($('#cliRegState').val() == "") {
            $('#cliRegState').css({
                'border-color': 'red'
            });
            $('#lcliRegState').css({
                'color': 'red'
            });
            sw = false;
        } else {
            $('#cliRegState').css({
                'border-color': '#ccc'
            });
            $('#lcliRegState').css({
                'color': '#282828'
            });
        }
    } else {
        var cliOpcState = $('#cliOpcState option:selected').text();
        if ($('#chkrcjotnda:checked').length == 0) {
            if (cliOpcState == "—" && $('#vld_shp').val() == 0) {
                $('#cliOpcState').css({
                    'border-color': 'red'
                });
                $('#lcliRegState').css({
                    'color': 'red'
                });
                sw = false;
            } else {
                $('#cliOpcState').css({
                    'border-color': '#ccc'
                });
                $('#lcliRegState').css({
                    'color': '#282828'
                });
            }
        }
    }

    /****************************************/
    var cliBFirName = $('#cliBFirName').val();
    if (cliBFirName.length < 2) {
        $('#cliBFirName').css({
            'border-color': 'red'
        });
        $('#lcliBFirName').css({
            'color': 'red'
        })
        sw = false;
    } else {
        $('#cliBFirName').css({
            'border-color': '#ccc'
        });
        $('#lcliBFirName').css({
            'color': '#282828'
        });
    }

    var cliBLasName = $('#cliBLasName').val();
    if (cliBLasName.length < 2) {
        $('#cliBLasName').css({
            'border-color': 'red'
        });
        $('#lcliBLasName').css({
            'color': 'red'
        });
        sw = false;
    } else {
        $('#cliBLasName').css({
            'border-color': '#ccc'
        });
        $('#lcliBLasName').css({
            'color': '#282828'
        });
    }

    var cliBRegAdrLn1 = $('#cliBRegAdrLn1').val();
    if (cliBRegAdrLn1.length < 5) {
        $('#cliBRegAdrLn1').css({
            'border-color': 'red'
        });
        $('#lcliBRegAdrLn1').css({
            'color': 'red'
        });
        sw = false;
    } else {
        $('#cliBRegAdrLn1').css({
            'border-color': '#ccc'
        });
        $('#lcliBRegAdrLn1').css({
            'color': '#282828'
        });
    }

    var cliBRegAdrLn2 = $('#cliBRegAdrLn2').val();
    if (cliBRegAdrLn2.length > 0) {
        if (cliBRegAdrLn2.length < 5) {
            $('#cliBRegAdrLn2').css({
                'border-color': 'red'
            });
            $('#lcliBRegAdrLn2').css({
                'color': 'red'
            });
            sw = false;
        } else {
            $('#cliBRegAdrLn2').css({
                'border-color': '#ccc'
            });
            $('#lcliBRegAdrLn2').css({
                'color': '#282828'
            });
        }
    }
    var cliBRegCity = $('#cliBRegCity').val();
    if (cliBRegCity.length < 2) {
        $('#cliBRegCity').css({
            'border-color': 'red'
        });
        $('#lcliBRegCity').css({
            'color': 'red'
        });
        sw = false;
    } else {
        $('#cliBRegCity').css({
            'border-color': '#ccc'
        });
        $('#lcliBRegCity').css({
            'color': '#282828'
        });
    }

    var cliBRegZipCode = $('#cliBRegZipCode').val();
    if (cliBRegZipCode.length < 5) {
        $('#cliBRegZipCode').css({
            'border-color': 'red'
        });
        $('#lcliBRegZipCode').css({
            'color': 'red'
        });
        sw = false;
    } else {
        $('#cliBRegZipCode').css({
            'border-color': '#ccc'
        });
        $('#lcliBRegZipCode').css({
            'color': '#282828'
        });
    }

    var cliBRegPhone = $('#cliBRegPhone').val();
    if (cliBRegPhone.length < 5) {
        $('#cliBRegPhone').css({
            'border-color': 'red'
        });
        $('#lcliBRegPhone').css({
            'color': 'red'
        });
        sw = false;
    } else {
        $('#cliBRegPhone').css({
            'border-color': '#ccc'
        });
        $('#lcliBRegPhone').css({
            'color': '#282828'
        });
    }

    if ($('#cliBRegState').is(":visible")) {
        if ($('#cliBRegState').val() == "") {
            $('#cliBRegState').css({
                'border-color': 'red'
            });
            $('#lcliBRegState').css({
                'color': 'red'
            });
            sw = false;
        } else {
            $('#cliBRegState').css({
                'border-color': '#ccc'
            });
            $('#lcliBRegState').css({
                'color': '#282828'
            });
        }
    } else {
        if ($('#cliOpcState')[0]) {
            var cliOpcState = $('#cliOpcState option:selected').text();
            if ($('#chkrcjotnda:checked').length == 0) {
                if (cliOpcState == "—" && $('#vld_shp').val() == 0) {
                    $('#cliBOpcState').css({
                        'border-color': 'red'
                    });
                    console.log('x2: ' + cliOpcState);
                    $('#lcliBRegState').css({
                        'color': 'red'
                    });
                    sw = false;
                } else {
                    $('#cliBOpcState').css({
                        'border-color': '#ccc'
                    });
                    $('#lcliBRegState').css({
                        'color': '#282828'
                    });
                }
            }
        }
    }

    /***vmb**/
    if ($('#cliOpcCity')) {
        if ($('#cliOpcCity').css('display') == 'block') {
            var indx_cliOpcCity = $('#cliOpcCity option:selected').index();
            if ($('#chkrcjotnda:checked').length == 0) {
                if (indx_cliOpcCity == 0) {
                    $('#cliOpcCity').css({
                        'border-color': 'red'
                    });
                    $('#lcliOpcCity').css({
                        'color': 'red'
                    });
                    sw = false;
                } else {
                    $('#cliOpcCity').css({
                        'border-color': '#ccc'
                    });
                    $('#lcliOpcCity').css({
                        'color': '#282828'
                    });
                }
            }
        }
    }
    if ($('#cliOpcZipCode')) {
        if ($('#cliOpcZipCode').css('display') == 'block') {
            var indx_cliOpcZipCode = $('#cliOpcZipCode option:selected').index();
            if ($('#chkrcjotnda:checked').length == 0) {
                if (indx_cliOpcZipCode == 0) {
                    $('#cliOpcZipCode').css({
                        'border-color': 'red'
                    });
                    $('#lcliOpcZipCode').css({
                        'color': 'red'
                    });
                    sw = false;
                } else {
                    $('#cliOpcZipCode').css({
                        'border-color': '#ccc'
                    });
                    $('#lcliOpcZipCode').css({
                        'color': '#282828'
                    });
                }
            }
        }
    }
    if ($('#cliBOpcCity')) {
        if ($('#cliBOpcCity').css('display') == 'block') {
            var indx_cliBOpcCity = $('#cliBOpcCity option:selected').index();
            if (indx_cliBOpcCity == 0) {
                $('#cliBOpcCity').css({
                    'border-color': 'red'
                });
                $('#lcliBOpcCity').css({
                    'color': 'red'
                });
                sw = false;
            } else {
                $('#cliBOpcCity').css({
                    'border-color': '#ccc'
                });
                $('#lcliBOpcCity').css({
                    'color': '#282828'
                });
            }
        }
    }
    if ($('#cliBOpcZipCode')) {
        if ($('#cliBOpcZipCode').css('display') == 'block') {
            var indx_cliBOpcZipCode = $('#cliBOpcZipCode option:selected').index();
            if (indx_cliBOpcZipCode == 0) {
                $('#cliBOpcZipCode').css({
                    'border-color': 'red'
                });
                $('#lcliBOpcZipCode').css({
                    'color': 'red'
                });
                sw = false;
            } else {
                $('#cliBOpcZipCode').css({
                    'border-color': '#ccc'
                });
                $('#lcliBOpcZipCode').css({
                    'color': '#282828'
                });
            }
        }
    }
    /****fin vmb*/
    return sw;
}

function valYear() {
    var dia = $('#cliBRegBirthD').val();
    var mes = $('#cliBRegBirthM').val();
    var anio = $('#cliBRegBirthY').val();

    if (dia.length > 0 && mes.length > 0 && anio > 0) {
        var fecha = new Date(anio, mes, dia)
        var _fecha = new Date();
        if (calage_validate()) {
            var dia = restaFechas(_fecha, fecha);
            var tano = (dia / 363.555555555556);

            if (isNaN(tano)) {
                return;
            } else {
                if (tano <= 17.99999999999998) {
                    $('#pfecha').remove()
                    $("#divfecha").append("<p id='pfecha'> Lo sentimos  no eres mayor de edad </p>");
                    $('#pfecha').css({
                        'color': 'red'
                    });
                    $('#cliBRegBirthD').val('');
                    $('#cliBRegBirthM').val('');
                    $('#cliBRegBirthY').val('');
                } else {
                    $('#pfecha').remove()
                }
            }
        } else {
            $('#pfecha').remove()
            var dm = DaysInMonth(anio, mes);
            var sms = mes + '-' + anio + ' tiene solamente ' + dm + ' dias ';
            $("#divfecha").append("<p id='pfecha'> La fecha ingresada es incorrecta  </p>");
            $('#pfecha').css({
                'color': 'red'
            });
            $('#cliBRegBirthD').val('');
            $('#cliBRegBirthM').val('');
            $('#cliBRegBirthY').val('');
        }
    }
}

restaFechas = function (f1, f2) {
    var dif = f1 - f2;
    var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
    return dias;
}

function calage_validate() {
    var curday = $('#cliBRegBirthD').val();
    var curmon = $('#cliBRegBirthM').val();
    var curyear = $('#cliBRegBirthY').val();
    if (curday == '' || curmon == '' || curyear == '') {
        return false;
    } else {
        var curd = new Date(curyear, curmon - 1, curday);
        var res = curd.getDay();
        var res2 = curd.getMonth();
        if (res2 == (curmon - 1)) {
            return true;
        } else {
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