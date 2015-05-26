var myArray = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
  var arraylen = myArray.length;
  var mm = document.getElementById('main');
  for(var i=0; i<arraylen; i++){
    //for(var j=0; j<arraylen; j++){
     mm.innerHTML+="<img src="+"'"+'img/'+myArray[i]+"'"+">";
    //}
  }

var tr = document.getElementById('main');
function whatClicked(evt) {
  if(evt.target.nodeName=="IMG"){
    alert('df');
  var ss = evt.target.getAttribute('src');
  var spl = ss.split('/');
    alert(spl);
  }
  var el = event.target;



    if (el.nodeName == "IMG"){
    var pp = document.getElementsByClassName('pop');
    var shad = document.getElementsByClassName('shadow');
    if(shad.length<1 && pp.length<1){
      var box = document.createElement('div');
      var shadow = document.createElement('div');
      box.className+='pop';
      shadow.className+='shadow';
      box.innerHTML+="<img src="+"large/"+spl[0,1]+">";
      mm.appendChild(box);
      mm.appendChild(shadow);
    }
    }
  else if(el.nodeName == "DIV" && el.className == "shadow"){
    //alert('remove');
    var ss = document.getElementsByClassName("shadow")[0];
    var pp = document.getElementsByClassName("pop")[0];
    mm.removeChild(ss);
    mm.removeChild(pp);
    }
}
  tr.addEventListener('click', whatClicked, false);
