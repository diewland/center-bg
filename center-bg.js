function center_bg(clz_name){
  var oo = document.getElementsByClassName(clz_name);
  for(var i=0; i<oo.length; i++){
    var o  = oo[i];
    var bg = o.getAttribute('bg');
    o.style.background     = 'url(' + bg + ') no-repeat center center';
    o.style.backgroundSize = 'cover';
  }
}
