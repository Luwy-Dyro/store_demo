
<script type="text/javascript">
$(document).ready(function () {
var _mf_ = '$';
$('#formgochek').attr('action', 'http://www.idakoos.com/s/flirty-monkey/cart');
$('.pa_f').on('click', function() {
$('.product_images img.display_block').removeClass('display_block').addClass('display_none');
$("#img_design_f").addClass('display_block').removeClass('display_none');
$('span.pa_select').removeClass('pa_select');
$(this).closest('span.print_area').addClass('pa_select');
});
$('.pa_b').on('click', function() {
$('.product_images img.display_block').removeClass('display_block').addClass('display_none');
$("#img_design_b").addClass('display_block').removeClass('display_none');
$('span.pa_select').removeClass('pa_select');
$(this).closest('span.print_area').addClass('pa_select');
});
$('.pa_r').on('click', function() {
$('.product_images img.display_block').removeClass('display_block').addClass('display_none');
$("#img_design_r").addClass('display_block').removeClass('display_none');
$('span.pa_select').removeClass('pa_select');
$(this).closest('span.print_area').addClass('pa_select');
});
$('.pa_l').on('click', function() {
$('.product_images img.display_block').removeClass('display_block').addClass('display_none');
$("#img_design_l").addClass('display_block').removeClass('display_none');
$('span.pa_select').removeClass('pa_select');
$(this).closest('span.print_area').addClass('pa_select');
});
$("#product_color_block").css('display','block');
$("#product_size_block").css('display','block');
$("#sel_products").bind("change keyup", function () {
if ($(this).val() != "") {
var pns=$(this).val();
var url='http://www.idakoos.com/s/flirty-monkey/' + pns + '/frosty,2068';
$(location).attr('href', url);
}
else {
$(location).attr('href','http://www.idakoos.com/s/flirty-monkey/gifts/frosty,2068?bc=SA0000');
}
});
$("#sel_quantity").bind("change keyup", function () {
if ($(this).val() != "") {
calculateProductPrice();
}
});
function mfmt(num){
num = num.toString().replace(/\$|\,/g, '');
if (isNaN(num))
num = '0';
sign = (num == (num = Math.abs(num)));
num = Math.floor(num * 100 + 0.50000000001);
cents = num % 100;
num = Math.floor(num / 100).toString();
if (cents < 10)
cents = '0' + cents;
for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
num = num.substring(0, num.length - (4 * i + 3)) + ',' +
num.substring(num.length - (4 * i + 3));
return (((sign) ? '' : '-') + _mf_ + num + '.' + cents);
}
function mlStr(a,b){var _str = '';for (var i=0;i<b-a.toString().length;i++){_str = _str + '0'} return _str + a }
$('#sub_summ_btn').click(function () {
if ($('#product_size_block').css('display') != 'none') {
if ($('#spn_size').html() == '') {
$('#msg_prod_sze_cntn').modal();
return false;
}
}
var _ti = parseInt($('#sel_quantity option:selected').text());
var price = $('#hid_csp_price').val();
var _tpt = (price * _ti).toFixed(2);
var _tp = parseFloat(_tpt);
$('#spnSummTitle').text(mlStr(_ti,2) + ' ' + $('#spnMainTitle').text());
$('#spnSummItemDet').text($('#spn_summ_text').text());
var _cq = $('#spnCartQty');var _cqv = 0; _cqv = parseInt(_cq.text());
var _ct = $('#spnCartTtl'); var _ctt = '';var _ctv = 0;
if(_ct.text() != ''){
_ctt = _ct.text().replace(',','');
_ctv = parseFloat(_ctt.replace(_mf_,''));
}else{
_ctv = 0;
}
_cqv += _ti; _ctv += _tp
_cq.text(_cqv);
_ct.text(mfmt(_ctv));
var _summt = 'Subtotal ([q] item(s))';
$('#spnSummTotQty').text(_summt.replace('[q]',_cqv));
$('#spnSummTotVal').text(mfmt(_ctv));
var _av = '';var _p = 0;var _f = 0;if(document.cookie.length > 0){
_p = document.cookie.indexOf('_idk_shc_s=');if (_p != -1){_p += 11;
_f = document.cookie.indexOf(";",_p);if (_f == -1){_f = document.cookie.length}
_av = document.cookie.substring(_p,_f);_av = (_av != '') ? _av+'[k]' : _av;}}
var _ed = new Date ();_ed.setTime(_ed.getTime() + (24 * 60 * 60 * 1000 * 90));
var _nv = $('#cust_prod_sku').text()+'-[/]'+_ti+'[/]'+_tp;
var _ec = '_idk_shc_s='+_av+_nv+';expires='+_ed.toGMTString()+';path=/';
document.cookie = _ec;
var _tps = _av+_nv; _tps = _tps.split('[k]'); var _tps_e = '';var _tp_q = 0;var _tp_t = 0;
if(_tps.length>0){
for(var l=0;l<=_tps.length-1;l++){
_tps_e = _tps[l].split('[/]');
_tp_q += parseInt(_tps_e[1]);
_tp_t += parseFloat(_tps_e[2]);
_tp_q = (isNaN(_tp_q)) ? 0 : _tp_q;
}
}
$('#spnSummTotVal').text(mfmt(_tp_t));
$('#inpCartCont').val(_av+_nv);
$('#msg_prod_summ_cntn').modal();
return false;
});
$('#sbmContShop').click(function () {
$('#prdIntoSCart').css('display', 'none');
return false;
});
$('.modal').easyModal({
overlayOpacity: 0.5,
overlayColor: '#666',
closeButtonClass: '.close_modal'
});
});
function custumizeProductImage() {
var imgurl = 'http://54.234.189.176:9092/makeimage.ashx?ds=D00000000002068',
csku = '000000';
if ($("#hid_col_sku").val() != "") {
csku = $("#hid_col_sku").val();
}
if ($("#hid_prd_sku").val() != "") {
imgurl = imgurl + '&bs=' + $("#hid_prd_sku").val() + csku;
imgurl = imgurl + '&sl=' + $("#hid_prd_cl").val();
}
var str = $(".product_images img.display_block").attr('src');
var start = str.indexOf('bs=') + 3;
var ibase = str.substr(start,9);
var nbase = 'TC1' + csku;
$(".product_images img, .print_area img").each(function () {
var nsrc = $(this).attr('src').replace(ibase, nbase);
$(this).attr('src', nsrc);
});
}
function calculateProductPrice() {
var dsn_price = parseFloat($("#hid_dsn_price").val());
pro_price = parseFloat($("#hid_prd_price").val()),
col_price = 0,
sze_price = 0
if ($("#hid_col_price").val() != "") {
col_price = parseFloat($("#hid_col_price").val());
}
if ($("#hid_sze_price").val() != "") {
sze_price = parseFloat($("#hid_sze_price").val());
}
var format = '$[n]';
var price = (Math.ceil((dsn_price + pro_price + col_price + sze_price) * 1.0000)).toFixed(2);
var quantity = $('#sel_quantity').val();
var summ_price = (price * quantity).toFixed(2);
$("#hid_csp_price").val(price);
$(".product_price .price").html(format.replace('[n]', price));
}
function custumizeProductSku() {
var dsn_sku = $("#hid_dsn_sku").val();
var dsn_col = 'BR0000';
var pro_sku = '000';
var col_sku = '000000';
var sze_sku = '000'
if ($("#hid_prd_sku").val() != "") {
pro_sku = $("#hid_prd_sku").val();
}
if ($("#hid_col_sku").val() != "") {
col_sku = $("#hid_col_sku").val();
}
if ($("#hid_sze_sku").val() != "") {
sze_sku = $("#hid_sze_sku").val();
}
var csp_sku = (pro_sku + col_sku + dsn_sku + dsn_col + sze_sku);
$("#hid_csp_sku").val(csp_sku);
$("#cust_prod_sku").html(csp_sku);
}
function custumizeProductReview() {
var summ = $('#hid_summ_text').val();
var color = '';
var size = '';
if ($("#product_color_block .color").html() != "") {
color = $("#product_color_block .color").html();
}
if ($("#product_size_block .size").html() != "") {
size = $("#product_size_block .size").html();
}
summ = summ.replace('[c]', color);
summ = summ.replace('[s]', size);
$('#spn_summ_text').html(summ);
}
$('#sel_sizes').change(function() {
var sz_sku = $('#sel_sizes').val();
$('#sze_' + sz_sku).trigger('click');
});