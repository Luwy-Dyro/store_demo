jQuery.fn.colorValidate = function(p) {
  //p=tipo de validacion: 0:error, 1:Ok!
  this.each(function() {
    let color = p == 0 ? 'red' : '#282828';
    jQuery(this).css("border-color", color);
  });
}
