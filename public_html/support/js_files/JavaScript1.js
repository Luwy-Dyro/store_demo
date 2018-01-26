function validaFromulario() {
    var sw = true;
    var cliFirName = $('#cliFirName').val();
    if (cliFirName.length < 2) {
        $('#cliFirName').css({ 'border-color': 'red' });
        $('#lcliFirName').css({ 'color': 'red' })
        sw = false;
    } else {
        $('#cliFirName').css({ 'border-color': '#ccc' });
        $('#lcliFirName').css({ 'color': '#282828' });
    }

    var cliLasName = $('#cliLasName').val();
    if (cliLasName.length < 2) {
        $('#cliLasName').css({ 'border-color': 'red' });
        $('#lcliLasName').css({ 'color': 'red' });
        sw = false;
    } else {
        $('#cliLasName').css({ 'border-color': '#ccc' });
        $('#lcliLasName').css({ 'color': '#282828' });
    }

    var cliRegAdrLn1 = $('#cliRegAdrLn1').val();
    if (cliRegAdrLn1.length < 5) {
        $('#cliRegAdrLn1').css({ 'border-color': 'red' });
        $('#lcliRegAdrLn1').css({ 'color': 'red' });
        sw = false;
    } else {
        $('#cliRegAdrLn1').css({ 'border-color': '#ccc' });
        $('#lcliRegAdrLn1').css({ 'color': '#282828' });
    }

    var cliRegAdrLn2 = $('#cliRegAdrLn2').val();
    if (cliRegAdrLn2.length > 0) {
        if (cliRegAdrLn2.length < 5) {
            $('#cliRegAdrLn2').css({ 'border-color': 'red' });
            $('#lcliRegAdrLn2').css({ 'color': 'red' });
            sw = false;
        } else {
            $('#cliRegAdrLn2').css({ 'border-color': '#ccc' });
            $('#lcliRegAdrLn2').css({ 'color': '#282828' });
        }
    }
    var cliRegCity = $('#cliRegCity').val();
    if (cliRegCity.length < 2) {
        $('#cliRegCity').css({ 'border-color': 'red' });
        $('#lcliRegCity').css({ 'color': 'red' });
        sw = false;
    } else {
        $('#cliRegCity').css({ 'border-color': '#ccc' });
        $('#lcliRegCity').css({ 'color': '#282828' });
    }

    var cliRegZipCode = $('#cliRegZipCode').val();
    if (cliRegZipCode.length < 5) {
        $('#cliRegZipCode').css({ 'border-color': 'red' });
        $('#lcliRegZipCode').css({ 'color': 'red' });
        sw = false;
    } else {
        $('#cliRegZipCode').css({ 'border-color': '#ccc' });
        $('#lcliRegZipCode').css({ 'color': '#282828' });
    }

    var cliRegPhone = $('#cliRegPhone').val();
    if (cliRegPhone.length < 5) {
        $('#cliRegPhone').css({ 'border-color': 'red' });
        $('#lcliRegPhone').css({ 'color': 'red' });
        sw = false;
    } else {
        $('#cliRegPhone').css({ 'border-color': '#ccc' });
        $('#lcliRegPhone').css({ 'color': '#282828' });
    }

    var cliOpcState = $('#cliOpcState option:selected').text();
    if (cliOpcState == "—") {
        $('#cliOpcState').css({ 'border-color': 'red' });
        $('#lcliRegState').css({ 'color': 'red' });
        sw = false;
    } else {
        $('#cliOpcState').css({ 'border-color': '#ccc' });
        $('#lcliRegState').css({ 'color': '#282828' });
    }

    var cliFirName = $('#cliFirName').val();
    if (cliFirName.length < 2) {
        $('#cliFirName').css({ 'border-color': 'red' });
        $('#lcliFirName').css({ 'color': 'red' })
        sw = false;
    } else {
        $('#cliFirName').css({ 'border-color': '#ccc' });
        $('#lcliFirName').css({ 'color': '#282828' });
    }

    var cliLasName = $('#cliLasName').val();
    if (cliLasName.length < 2) {
        $('#cliLasName').css({ 'border-color': 'red' });
        $('#lcliLasName').css({ 'color': 'red' });
        sw = false;
    } else {
        $('#cliLasName').css({ 'border-color': '#ccc' });
        $('#lcliLasName').css({ 'color': '#282828' });
    }

    var cliRegAdrLn2 = $('#cliRegAdrLn2').val();
    if (cliRegAdrLn2.length > 0) {
        if (cliRegAdrLn2.length < 5) {
            $('#cliRegAdrLn2').css({ 'border-color': 'red' });
            $('#lcliRegAdrLn2').css({ 'color': 'red' });
            sw = false;
        } else {
            $('#cliRegAdrLn2').css({ 'border-color': '#ccc' });
            $('#lcliRegAdrLn2').css({ 'color': '#282828' });
        }
    }
    var cliRegCity = $('#cliRegCity').val();
    if (cliRegCity.length < 2) {
        $('#cliRegCity').css({ 'border-color': 'red' });
        $('#lcliRegCity').css({ 'color': 'red' });
        sw = false;
    } else {
        $('#cliRegCity').css({ 'border-color': '#ccc' });
        $('#lcliRegCity').css({ 'color': '#282828' });
    }
    var cliRegZipCode = $('#cliRegZipCode').val();
    if (cliRegZipCode.length < 5) {
        $('#cliRegZipCode').css({ 'border-color': 'red' });
        $('#lcliRegZipCode').css({ 'color': 'red' });
        sw = false;
    } else {
        $('#cliRegZipCode').css({ 'border-color': '#ccc' });
        $('#lcliRegZipCode').css({ 'color': '#282828' });
    }
    var cliRegPhone = $('#cliRegPhone').val();
    if (cliRegPhone.length < 5) {
        $('#cliRegPhone').css({ 'border-color': 'red' });
        $('#lcliRegPhone').css({ 'color': 'red' });
        sw = false;
    } else {
        $('#cliRegPhone').css({ 'border-color': '#ccc' });
        $('#lcliRegPhone').css({ 'color': '#282828' });
    }
    var cliOpcState = $('#cliOpcState option:selected').text();
    if (cliOpcState == "—") {
        $('#cliOpcState').css({ 'border-color': 'red' });
        $('#lcliRegState').css({ 'color': 'red' });
        sw = false;
    } else {
        $('#cliOpcState').css({ 'border-color': '#ccc' });
        $('#lcliRegState').css({ 'color': '#282828' });
    }
    /****************************************/
    var cliBFirName = $('#cliBFirName').val();
    if (cliBFirName.length < 2) {
        $('#cliBFirName').css({ 'border-color': 'red' });
        $('#lcliBFirName').css({ 'color': 'red' })
        sw = false;
    } else {
        $('#cliBFirName').css({ 'border-color': '#ccc' });
        $('#lcliBFirName').css({ 'color': '#282828' });
    }

    var cliBLasName = $('#cliBLasName').val();
    if (cliBLasName.length < 2) {
        $('#cliBLasName').css({ 'border-color': 'red' });
        $('#lcliBLasName').css({ 'color': 'red' });
        sw = false;
    } else {
        $('#cliBLasName').css({ 'border-color': '#ccc' });
        $('#lcliBLasName').css({ 'color': '#282828' });
    }

    var cliBRegAdrLn1 = $('#cliBRegAdrLn1').val();
    if (cliBRegAdrLn1.length < 5) {
        $('#cliBRegAdrLn1').css({ 'border-color': 'red' });
        $('#lcliBRegAdrLn1').css({ 'color': 'red' });
        sw = false;
    } else {
        $('#cliBRegAdrLn1').css({ 'border-color': '#ccc' });
        $('#lcliBRegAdrLn1').css({ 'color': '#282828' });
    }

    var cliBRegAdrLn2 = $('#cliBRegAdrLn2').val();
    if (cliBRegAdrLn2.length > 0) {
        if (cliBRegAdrLn2.length < 5) {
            $('#cliBRegAdrLn2').css({ 'border-color': 'red' });
            $('#lcliBRegAdrLn2').css({ 'color': 'red' });
            sw = false;
        } else {
            $('#cliBRegAdrLn2').css({ 'border-color': '#ccc' });
            $('#lcliBRegAdrLn2').css({ 'color': '#282828' });
        }
    }
    var cliBRegCity = $('#cliBRegCity').val();
    if (cliBRegCity.length < 2) {
        $('#cliBRegCity').css({ 'border-color': 'red' });
        $('#lcliBRegCity').css({ 'color': 'red' });
        sw = false;
    } else {
        $('#cliBRegCity').css({ 'border-color': '#ccc' });
        $('#lcliBRegCity').css({ 'color': '#282828' });
    }

    var cliBRegZipCode = $('#cliBRegZipCode').val();
    if (cliBRegZipCode.length < 5) {
        $('#cliBRegZipCode').css({ 'border-color': 'red' });
        $('#lcliBRegZipCode').css({ 'color': 'red' });
        sw = false;
    } else {
        $('#cliBRegZipCode').css({ 'border-color': '#ccc' });
        $('#lcliBRegZipCode').css({ 'color': '#282828' });
    }

    var cliBRegPhone = $('#cliBRegPhone').val();
    if (cliBRegPhone.length < 5) {
        $('#cliBRegPhone').css({ 'border-color': 'red' });
        $('#lcliBRegPhone').css({ 'color': 'red' });
        sw = false;
    } else {
        $('#cliBRegPhone').css({ 'border-color': '#ccc' });
        $('#lcliBRegPhone').css({ 'color': '#282828' });
    }

    var cliOpcState = $('#cliOpcState option:selected').text();
    if (cliOpcState == "—") {
        $('#cliBOpcState').css({ 'border-color': 'red' });
        $('#lcliBRegState').css({ 'color': 'red' });
        sw = false;
    } else {
        $('#cliBOpcState').css({ 'border-color': '#ccc' });
        $('#lcliBRegState').css({ 'color': '#282828' });
    }

    var cliBRegEmail = $("#cliBRegEmail").val();
    if ($("#cliBRegEmail")[0]) {
        var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
        if (regex.test(cliBRegEmail)) {
            $('#cliBRegEmail').css({ 'border-color': '#ccc' });
            $('#lcliBRegEmail').css({ 'color': '#282828' });
        } else {
            $('#cliBRegEmail').css({ 'border-color': 'red' });
            $('#lcliBRegEmail').css({ 'color': 'red' });
            sw = false;
        }
    }
    if ($("#ftcn2").is(':checked')) {
        var cliBNumRuc = $("#cliBNumRuc").val();
        if (cliBNumRuc.length != 11) {
            $('#cliBNumRuc').css({ 'border-color': 'red' });
            $('#lcliBNumRuc').css({ 'color': 'red' });
            sw = false;
        } else {
            $('#cliBNumRuc').css({ 'border-color': '#ccc' });
            $('#lcliBNumRuc').css({ 'color': '#282828' });
        }
        var cliBRazSoc = $("#cliBRazSoc").val();
        if (cliBRazSoc.length < 2) {
            $('#cliBRazSoc').css({ 'border-color': 'red' });
            $('#lcliBRazSoc').css({ 'color': 'red' });
            sw = false;
        } else {
            $('#cliBRazSoc').css({ 'border-color': '#ccc' });
            $('#lcliBRazSoc').css({ 'color': '#282828' });
        }
    }

        if ($("#cliBRegTM")[0]) {
            if ($("#cliBRegTM").is(':checked')) {
                $('#cliBRegTM').css({ 'border-color': '#ccc' });
                $('#lcliBRegTM').css({ 'color': '#282828' });
            } else {
                $('#cliBRegTM').css({ 'border-color': 'red' });
                $('#lcliBRegTM').css({ 'color': 'red' });
                sw = false;
            }
        }
    
    if ($('#cliOpcState')[0]) {
        var cliOpcState = $('#cliOpcState option:selected').text();
        if (cliOpcState == "—") {
            $('#cliBOpcState').css({ 'border-color': 'red' });
            $('#lcliBRegState').css({ 'color': 'red' });
            sw = false;
        } else {
            $('#cliBOpcState').css({ 'border-color': '#ccc' });
            $('#lcliBRegState').css({ 'color': '#282828' });
        }
    }
    if ($('#cliBRegBirthY')[0]) {
        var cliBRegBirthY = $('#cliBRegBirthY').val();
        if (cliBRegBirthY.length < 4) {
            $('#cliBRegBirthY').css({ 'border-color': 'red' });
            $('#lcliBRegBirthY').css({ 'color': 'red' });
            sw = false;
        } else {
            $('#cliBRegBirthY').css({ 'border-color': '#ccc' });
            $('#lcliBRegBirthY').css({ 'color': '#282828' });
        }
    }
    if ($('#cliBRegBirthD')[0]) {
        var cliBRegBirthD = $('#cliBRegBirthD').val();
        if (cliBRegBirthD.length < 2) {
            $('#cliBRegBirthD').css({ 'border-color': 'red' });
            $('#lcliBRegBirthD').css({ 'color': 'red' });
            sw = false;
        } else {
            $('#cliBRegBirthD').css({ 'border-color': '#ccc' });
            $('#lcliBRegBirthD').css({ 'color': '#282828' });
        }
    }
    if ($('#cliBRegBirthM')[0]) {
        var cliBRegBirthM = $('#cliBRegBirthM').val();
        if (cliBRegBirthM.length < 2) {
            $('#cliBRegBirthM').css({ 'border-color': 'red' });
            $('#lcliBRegBirthM').css({ 'color': 'red' });
            sw = false;
        } else {
            $('#cliBRegBirthM').css({ 'border-color': '#ccc' });
            $('#lcliBRegBirthM').css({ 'color': '#282828' });
        }
    }
    return sw;
}