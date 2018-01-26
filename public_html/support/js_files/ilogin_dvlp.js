
$(document).ready(function () {

    $('#btn-login').click(function (event) {
        event.preventDefault();
        if (validate()) {

            ilogin();
        }

    });

});


function ilogin() {

    $('#alert_db').hide();

    $('#loader_pcs').show();
    $('#loginbox').addClass('disableAll');

    let obj = {
        u: $('#login-username').val(),
        p: $('#login-password').val(),
        h: window.location.search
    }

    $.ajax({
        dataType: "json",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "/transdata/wmet_stre_cart.aspx/Ilogin",
        data: JSON.stringify(obj),
        success: function (data) {

            let msg = data.d;

            if (msg.includes('OK')) {
                let url = msg.split('`');
                console.log(url, url[1]);
                location.href = url[1];

            } else {
                $('#alert_db').show();
                if (msg != '') {
                    $('#msg_db').text(data.d)
                } else {
                    $('#msg_db').text('Ocurrió un error, espere un momento por favor.')
                }

                $('#loader_pcs').hide();
                $('#loginbox').removeClass('disableAll');

            }

        }
    });

}


function validate() {

    let sw = true;

    var txtemail = $("#login-username").val();
    if ($("#login-username")[0]) {
        var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
        if (regex.test(txtemail)) {
            $('#login-username').css({
                'border-color': '#ccc'
            });
        } else {
            $('#login-username').css({
                'border-color': '#bd7e7e'
            });
            sw = false;

        }
    }

    let pwd = $.trim($('#login-password').val().trim());
    if (pwd == '') {
        $('#login-password').css({
            'border-color': '#bd7e7e'
        });
        sw = false;

    }

    return sw;

}
