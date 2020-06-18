var camara = document.getElementById("burbujas"); 
//Cambiar ventanas principales con botones del header
function cambiarVentana(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("Ventanas");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active2", "");
  }
 
  // esta linea para agrear el borde al menu header... document.getElementById("perro").style.borderBottom = '1px solid #303030';
 
  
  document.getElementById("goHome").style.display = 'none';
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active2"; 
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function cambiarVentana2(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("Ventanas2");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");

  }
  
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen2").click();

//Funcion para navegar con las opciones de galerias del mneú principal

function cambiarVentana3(evt, cityName) {
  var i, tabcontent, tablinks, ocultarul;
  tabcontent = document.getElementsByClassName("Ventanas2");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks3");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active3", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active3";
  
   document.querySelector('#Retratosmov').style.height = '0%';
	document.querySelector('#Retratosmov').style.opacity = '0';
	document.querySelector('#Quincesmov').style.height = '0%';
	document.querySelector('#Quincesmov').style.opacity = '0';
	document.querySelector('#Paisajesmov').style.height = '0%';
	document.querySelector('#Paisajesmov').style.opacity = '0';
	
  ocultarul = document.getElementsByClassName("1");
  for(i = 0; 1 < ocultarul.length; i++) {
	  ocultarul[i].style.display = 'none';
  }

  
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen2").click();

function mostrarUl1(){
	document.getElementsByClassName("1")[0].style.display = 'block';
	document.getElementsByClassName("1")[1].style.display = 'none';
	document.getElementsByClassName("1")[2].style.display = 'none';
	document.getElementsByClassName("filter")[0].style.filter = 'grayscale(0%)';
	
	
}
function mostrarUl2(){
	document.getElementsByClassName("1")[1].style.display = 'block';
	document.getElementsByClassName("1")[0].style.display = 'none';
	document.getElementsByClassName("1")[2].style.display = 'none';
	document.getElementsByClassName("filter")[1].style.filter = 'grayscale(0%)';
}
function mostrarUl3(){
	document.getElementsByClassName("1")[2].style.display = 'block';
	document.getElementsByClassName("1")[0].style.display = 'none';
	document.getElementsByClassName("1")[1].style.display = 'none';
	document.getElementsByClassName("filter")[2].style.filter = 'grayscale(0%)';
}
/*navegar por los books*/
/*navegar por los books*/
document.getElementById('dim1').click();
function bookComunion(evt){
    
	document.getElementById('libroInfantil').style.display = 'none'; 
    document.getElementById('libroComunion').style.display = 'flex'; 
	
	tablinks = document.getElementsByClassName("activemedidas");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activeBook", "");
	
  }
	evt.currentTarget.className += " activeBook"; 
	
	var textos3 = document.getElementsByClassName('containerh');
	var i;
	for(i = 0; i < textos3.length; i++){
		textos3[i].classList.remove('containerhnuevo');
	}
}
function bookInfantil(evt){
    document.getElementById('libroInfantil').style.display = 'flex';
    document.getElementById('libroComunion').style.display = 'none';

    tablinks = document.getElementsByClassName("activemedidas");
     for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activeBook", "");
	
  }	
	evt.currentTarget.className += " activeBook"; 
	
	var textos3 = document.getElementsByClassName('containerh');
	var i;
	for(i = 0; i < textos3.length; i++){
		textos3[i].classList.remove('containerhnuevo');
	}
}
function bookInfantilDimensiones(evt){
    document.getElementById('libroInfantil').style.display = 'flex'; 
    document.getElementById('libroComunion').style.display = 'none'; 
   
	
	tablinks = document.getElementsByClassName("activemedidas");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activeBook", "");
	
  }
	evt.currentTarget.className += " activeBook"; 

	var textos3 = document.getElementsByClassName('containerh');
	var i;
	for(i = 0; i < textos3.length; i++){
		textos3[i].classList.add ('containerhnuevo');
	}
	
}
/*navegar por los books*/
/*navegar por los books*/

/*navegar menu galerias movil*/
/*navegar menu galerias movil*/
function MostrarRetratos(){
    document.querySelector('#Retratosmov').style.height = 'auto';
    document.querySelector('#Retratosmov').style.opacity = '1';
	document.querySelector('#Quincesmov').style.height = '0%';
	document.querySelector('#Quincesmov').style.opacity = '0';
	document.querySelector('#Paisajesmov').style.height = '0%';
	document.querySelector('#Paisajesmov').style.opacity = '0';
}
function MostrarQuinces(){
    document.querySelector('#Quincesmov').style.height = 'auto';
    document.querySelector('#Quincesmov').style.opacity = '1';
	document.querySelector('#Retratosmov').style.height = '0%';
	document.querySelector('#Retratosmov').style.opacity = '0';
	document.querySelector('#Paisajesmov').style.height = '0%';
	document.querySelector('#Paisajesmov').style.opacity = '0';
}
function MostrarPaisajes(){
    document.querySelector('#Paisajesmov').style.height = 'auto';
    document.querySelector('#Paisajesmov').style.opacity = '1';
	document.querySelector('#Retratosmov').style.height = '0%';
	document.querySelector('#Retratosmov').style.opacity = '0';
	document.querySelector('#Quincesmov').style.height = '0%';
	document.querySelector('#Quincesmov').style.opacity = '0';
}
function ocultarventanas(){
    document.querySelector('#Retratosmov').style.height = '0%';
	document.querySelector('#Retratosmov').style.opacity = '0';
	document.querySelector('#Quincesmov').style.height = '0%';
	document.querySelector('#Quincesmov').style.opacity = '0';
	document.querySelector('#Paisajesmov').style.height = '0%';
	document.querySelector('#Paisajesmov').style.opacity = '0';
}
/*navegar menu galerias movil*/
/*navegar menu galerias movil*/
/*cambiar temas*/
/*cambiar temas*/
/*cambiar temas*/
function mostrarCambiosTema(){
    document.querySelector('#botonesCambiarTema').style.width= '100%'
    document.querySelector('#botonesCambiarTema').style.opacity= '1'
}
function ocultarCambiosTema(){
    document.querySelector('#botonesCambiarTema').style.width= '0%'
    document.querySelector('#botonesCambiarTema').style.opacity= '0'
}
function cambiarTema(){	
    document.querySelector('#dark').style.transform = 'rotate(180deg)';
	document.querySelector('#dark').style.filter = 'grayscale(100%)';
    document.querySelector('#vintage').style.transform = 'rotate(0deg)';
    document.querySelector('#vintage').style.filter = 'grayscale(0%)';
    document.querySelector('#desplegable').style.color = '#000';
	
	
    document.body.style.background = '#e8e8e8';	
	document.querySelector('footer').style.background = '#c1c1c1';
	document.querySelector('footer').style.color = '#151515';
	document.querySelector('#perro').style.background = 'linear-gradient(#fff,rgba(255,255,255, 0.7))';
	document.querySelector('#h1').style.color = '#c5c5c5';
	
	var a, b, c, d, e, f, g, textos;
	var i;
	
	//estilos parrafos titulos y fondos generales
	 /*
	 .h360, .h3sobremi, .h3Contacto
	.p360, .pSobremi, .pContacto
			
	.container360text, .containersobremitext, .containersContactotext
	
	*/
	titulos = document.getElementsByClassName('titulosall');
	var i;
	for(i = 0; i < titulos.length; i++){
		titulos[i].classList.add ("vintageH");
	}
	
	textos = document.getElementsByClassName('parrafosAll');
	var i;
	for(i = 0; i < textos.length; i++){
		textos[i].classList.add ("vintageP");
	}
	textos2 = document.getElementsByClassName('textocontacto');
	var i;
	for(i = 0; i < textos2.length; i++){
		textos2[i].classList.add ("vintageP");
	}
	
	textos3 = document.getElementsByClassName('Enlaces');
	var i;
	for(i = 0; i < textos3.length; i++){
		textos3[i].classList.add ('EnlacesActive');
	}
	
	
	
	fondos = document.getElementsByClassName('container360text');
	var i;
	for(i = 0; i < fondos.length; i++){
		fondos[i].classList.add ("vintageBackground");
	}
	fondos1 = document.getElementsByClassName('containersobremitext');
	var i;
	for(i = 0; i < fondos1.length; i++){
		fondos1[i].classList.add ("vintageBackground");
	}
	fondos2 = document.getElementsByClassName('containerContactotext');
	var i;
	for(i = 0; i < fondos2.length; i++){
		fondos2[i].classList.add ("vintageBackground");
	}
	fondos3 = document.getElementsByClassName('containerServiciostext');
	var i;
	for(i = 0; i < fondos3.length; i++){
		fondos3[i].classList.add ("vintageBackground");
	}
	fondos4 = document.getElementsByClassName('tituloParrafo');
	var i;
	for(i = 0; i < fondos4.length; i++){
		fondos4[i].classList.add("vintageBackground");
	}
	
	document.getElementById('login').style.background = 'rgba(255, 255, 255, 0.9)';
		
	document.getElementById('libroInfantil').style.background = 'rgba(255, 255, 255, 0.9)';
	document.getElementById('libroComunion').style.background = 'rgba(255, 255, 255, 0.9)';
	// fin estilos parrafos titulos y fondos generales
	
	
	
	a = document.getElementById('tabs').querySelectorAll('a');
	for(i = 0; i < a.length; i++){
	    a[i].style.color = '#000';
	}
	b = document.getElementsByClassName('text3');
	var i;
	for(i = 0; i < b.length; i++){
	    b[i].style.color = '#303030';
	}
/*estilos de los parrafos y sus titulos*/
	c = document.getElementsByClassName('pbook');
	var i;
	for(i = 0; i < c.length; i++){
	    c[i].style.color = '#303030';
	}
	d = document.getElementsByClassName('psobremi');
	var i;
	for(i = 0; i < d.length; i++){
	    d[i].style.color = '#303030';
	}
	e = document.getElementsByClassName('h6sobremi');
	var i;
	for(i = 0; i < e.length; i++){
	    e[i].style.color = '#600000';
	}
	
	
	
	
	
	
	
	f = document.getElementsByClassName('botonesBooksp');
	var i;
	for(i = 0; i < f.length; i++){
	    f[i].style.color = '#303030';
	}
	
	/*menu galerias para movil*/
	document.querySelector('.menuMovil1').style.background = 'linear-gradient(rgba(255,255,255,.9), #d5d5d5)';	
	
    g = document.getElementsByClassName('menuMovil2');
	var i;
	for(i = 0; i < g.length; i++){
	    g[i].style.background = 'linear-gradient(rgba(255,255,255,.7), #d5d5d5)';
	}
	h = document.getElementsByClassName('botonesMovil');
	var i;
	for(i = 0; i < h.length; i++){	    
		h[i].style.color = '#000';
		h[i].style.borderBottom = '1px solid #fff';
	}
}

function defaultTema(){
	document.querySelector('#dark').style.transform = 'rotate(0deg)';
	document.querySelector('#dark').style.filter = 'grayscale(0%)';
    document.querySelector('#vintage').style.transform = 'rotate(180deg)';
    document.querySelector('#vintage').style.filter = 'grayscale(100%)';
	document.querySelector('#desplegable').style.color = '#fff';
	
	
    document.body.style.background = '#000';	
	document.querySelector('footer').style.background = 'none';
	document.querySelector('footer').style.color = '#909090';
	document.querySelector('#perro').style.background = 'linear-gradient(to top, rgba(0,0,0, 0.6), rgba(0,0,0, 0.6), #000,  #000,  #000,  #000,  #000)';
	document.querySelector('#h1').style.color = '#a5a5a5';
	
    var a, b, c, d, e, f, g, h;
	var i;
	a = document.getElementById('tabs').querySelectorAll('a');
	for(i = 0; i < a.length; i++){
	    a[i].style.color = '#999999';
	}
	b = document.getElementsByClassName('text3');
	var i;
	for(i = 0; i < b.length; i++){
	    b[i].style.color = '#fff';
	}
	/*estilos de los parrafos y sus titulos*/
	
	
	//estilos parrafos titulos y fondos generales
	 /*
	 .h360, .h3sobremi, .h3Contacto
	.p360, .pSobremi, .pContacto
			
	.container360text, .containersobremitext, .containersContactotext
	
	*/
	titulos = document.getElementsByClassName('titulosall');
	var i;
	for(i = 0; i < titulos.length; i++){
		titulos[i].classList.remove("vintageH");
	}
		
	textos = document.getElementsByClassName('parrafosAll');
	var i;
	for(i = 0; i < textos.length; i++){
		textos[i].classList.remove("vintageP");
	}
	textos2 = document.getElementsByClassName('textocontacto');
	var i;
	for(i = 0; i < textos2.length; i++){
		textos2[i].classList.remove("vintageP");
	}
		textos3 = document.getElementsByClassName('Enlaces');
	var i;
	for(i = 0; i < textos3.length; i++){
		textos3[i].classList.remove ('EnlacesActive');
	}
	
	
	fondos = document.getElementsByClassName('container360text');
	var i;
	for(i = 0; i < fondos.length; i++){
		fondos[i].classList.remove ("vintageBackground");
	}
	fondos1 = document.getElementsByClassName('containersobremitext');
	var i;
	for(i = 0; i < fondos1.length; i++){
		fondos1[i].classList.remove ("vintageBackground");
	}
	fondos2 = document.getElementsByClassName('containerContactotext');
	var i;
	for(i = 0; i < fondos2.length; i++){
		fondos2[i].classList.remove ("vintageBackground");
	}
	fondos3 = document.getElementsByClassName('containerServiciostext');
	var i;
	for(i = 0; i < fondos3.length; i++){
		fondos3[i].classList.remove ("vintageBackground");
	}
	fondos4 = document.getElementsByClassName('tituloParrafo');
	var i;
	for(i = 0; i < fondos4.length; i++){
		fondos4[i].classList.remove ("vintageBackground");
	}
	
	document.getElementById('login').style.background = 'rgba(0, 0, 0, 0.9)';
	document.getElementById('libroInfantil').style.background = 'rgba(0,0,0,0.9)';
	document.getElementById('libroComunion').style.background = 'rgba(0,0,0,0.9)';
	// fin estilos parrafos titulos y fondos generales
	c = document.getElementsByClassName('pbook');
	var i;
	for(i = 0; i < c.length; i++){
	    c[i].style.color = '#c1c1c1';
	}
	d = document.getElementsByClassName('psobremi');
	var i;
	for(i = 0; i < d.length; i++){
	    d[i].style.color = '#c1c1c1';
	}
	e = document.getElementsByClassName('h6sobremi');
	var i;
	for(i = 0; i < e.length; i++){
	    e[i].style.color = '#d1d1d1';
	}
	f = document.getElementsByClassName('botonesBooksp');
	var i;
	for(i = 0; i < f.length; i++){
	    f[i].style.color = '#d1d1d1';
	}
	/*menu galerias para movil*/
	document.querySelector('.menuMovil1').style.background = '#000';	
	
    g = document.getElementsByClassName('menuMovil2');
	var i;
	for(i = 0; i < g.length; i++){
	    g[i].style.background = 'linear-gradient(to bottom, rgba(0,0,0,.6), rgba(0,0,0,.8), #000,  #000,  #000,  #000,  #000)';

	}
	h = document.getElementsByClassName('botonesMovil');
	var i;
	for(i = 0; i < h.length; i++){	    
		h[i].style.color = '#d1d1d1';
		h[i].style.borderBottom = '1px solid #151515';
	}
}
/*seccion login*/
/*seccion login*/
function mostrarlogin(){
        document.getElementById('login').style.display = 'flex';
}
function loginuser(){
var documentoUsuario= document.getElementById('documento').value;
    switch(documentoUsuario){
	case '1':
	    document.getElementById('nombreUsuario').innerHTML = 'Violeta Golosa';
		alert('Bienvenida Violeta Golosa, tus fotografías se encuentran publicadas en la pestaña Sesiones/Retratos');
		document.getElementById('Iniciarsesiondiv').style.display = 'none';
		document.getElementById('Cerrarsesiondiv').style.display = 'flex';
		document.getElementById('login').style.display = 'none';
		break;
	case '2':
	    document.getElementById('nombreUsuario').innerHTML = 'Gaby Lala';
		alert('Bienvenida Gaby Lalaa, tus fotografías se encuentran publicadas en la pestaña sesiones/Retratos');
		document.getElementById('Iniciarsesiondiv').style.display = 'none';
		document.getElementById('Cerrarsesiondiv').style.display = 'flex';
		document.getElementById('login').style.display = 'none';
		break;	
	case '123456':
	    document.getElementById('nombreUsuario').innerHTML = 'Alejandra Castaño';
		alert('Bienvenida Alejandra Castaño, tus fotografías se encuentran publicadas en la pestaña Sesiones/Retratos');
		document.getElementById('Iniciarsesiondiv').style.display = 'none';
		document.getElementById('Cerrarsesiondiv').style.display = 'flex';
		document.getElementById('login').style.display = 'none';
		document.getElementById('menu2Alejandra').style.display = 'block';
		document.getElementById('menu1Alejandra').style.display = 'block';
		document.getElementById('AlejandraCastano').style.display = 'block';
		document.getElementById("menu2Alejandra").click();
		document.getElementById("menu1Alejandra").click();
		break;
    
	
		
    default:
	     document.getElementById('escribir').innerHTML = 'El número de documento ingresado no existe en nuestra base de datos, por favor verificalo o contactanos para más información.' ;
	}
    

}
/*seccion login*/
/*seccion login*/
/*seccion lightbox*/
//abrir y cerrar lightbox
function abrirlight(abrirgaleria){
    document.getElementById(abrirgaleria).style.display = 'block';}
function cerrarlight(cerrargaleria){
    document.getElementById(cerrargaleria).style.display = 'none';}
/*seccion lightbox*/
/*seccion lightbox*/
var num = 1;
function next(cambiar, numeroT, numerofoto, carpeta) {
    num++;
	var carpetafotos = document.getElementById(carpeta).value; 
	var indexMain = document.getElementById(numeroT).value; 
	if(num > indexMain) { //valor del ultimo elemento
	    num = 1}
		var fotos = document.getElementById(cambiar);
		    fotos.src =carpetafotos+'/img'+num+'.jpg';
			document.getElementById(numerofoto).innerHTML= num ;
	var numopaci = 60;
	var opacidadFoto = setInterval(opacidad, 10);
	function opacidad(){
	    if(numopaci == 100){
		    clearInterval(opacidadFoto);
		}
		else{
		   numopaci++;
		   document.getElementById(cambiar).style.opacity =  numopaci+'%';
		}
	}
}
//**************************************//
function prev(cambiar, numeroT, numerofoto, carpeta){
    num--;
	var carpetafotos = document.getElementById(carpeta).value; 
	var indexMain = document.getElementById(numeroT).value; 
	if(num < 1) { //valor del ultimo elemento
	    num = indexMain}
		var fotos = document.getElementById(cambiar);
		    fotos.src = carpetafotos+'/img'+num+'.jpg';
			document.getElementById(numerofoto).innerHTML= num;
    var numopaci = 60;
	var opacidadFoto = setInterval(opacidad, 10);
	function opacidad(){
	    if(numopaci == 100){
		    clearInterval(opacidadFoto);
			document.getElementById(cambiar).style.opacity =  numopaci+'%'
		}
		else{
		   numopaci++;
		   document.getElementById(cambiar).style.opacity =  numopaci+'%';
		}
	}
}

//cambiar foto automaticamente
var automatico; //para controlar que las imagenes cambien automaticamente.
var barraestado; // para controlar la barra de estado.
function playfotos(totalfotos, cambiar){
   var total= document.getElementById(totalfotos).value;
   var num = 0;
   var activecambiar;
    
   automatico = setInterval(cambiarSola, 2500);
   
   activecambiar =  document.getElementsByClassName('cambiarsola');
   for(var i = 0; i < activecambiar.length; i++){
       activecambiar[i].classList.add("playplay");
   }
   var activecambiar2 =  document.getElementsByClassName('cambiarsola2');
   for(var i = 0; i < activecambiar2.length; i++){
       activecambiar2[i].classList.remove("playplay");
   }
   function cambiarSola(){
       if( num == total){
	      clearInterval(automatico);
		  activecambiar =  document.getElementsByClassName('cambiarsola2');
		      for(var i = 0; i < activecambiar.length; i++){
				 activecambiar[i].click(); 
			  }
		  var cerrarautomatico = document.getElementsByClassName('cerrarLight');
		      for(var i = 0; i < cerrarautomatico.length; i++){
				 cerrarautomatico[i].click(); 
			  }
              for(var i = 0; i < activecambiar.length; i++){
                 activecambiar[i].classList.remove("playplay");
              }
		  var porcentajedebarra =  document.getElementsByClassName('barrausuario');
              for(var i = 0; i < porcentajedebarra.length; i++){
                 porcentajedebarra[i].style.width = '0%'; 
   			}	
	   }
	   else{
	   num++;
	   document.getElementById(cambiar).click();
	   }
   }
/*  funcion para completar la barra de estado de 0 a 100 */ 
   var porcentaje = total * 2500;
   var porcentaje2 =  porcentaje / 1000; //para que le tiempo de intervalo sea menor y la barra avance con mas normalidad
   var numPorcentaje = 0; 
   barraestado = setInterval(estadodelabarra, porcentaje2);
   
   function estadodelabarra(){
       if(numPorcentaje == 100){
		   clearInterval(automatico); 
	    }
	   else{
	        numPorcentaje = numPorcentaje+ 0.1;
	       
			var porcentajedebarra =  document.getElementsByClassName('barrausuario');
            for(var i = 0; i < porcentajedebarra.length; i++){
            porcentajedebarra[i].style.width = numPorcentaje+'%'; 
            }
	    }
   }
 /*    */ 
   
   
  
}
function Stopfotos(){  
    clearInterval(barraestado); 
    clearInterval(automatico);
	var activecambiar =  document.getElementsByClassName('cambiarsola');
   for(var i = 0; i < activecambiar.length; i++){
       activecambiar[i].classList.remove("playplay");
   }
   var activecambiar2 =  document.getElementsByClassName('cambiarsola2');
   for(var i = 0; i < activecambiar2.length; i++){
       activecambiar2[i].classList.add("playplay");
   }
   var defatulbarra =  document.getElementsByClassName('barrausuario');
   for(var i = 0; i < defatulbarra.length; i++){
       defatulbarra[i].style.width = '1px';
   }
  
}

/*seccion lightbox*/
/*seccion lightbox*/
/*Funcion para Slider*/
/*Funcion para Slider*/
function myFunction() {
  var setSlider = setTimeout(sliderAuto, 2000);
}
var imagenSlider;
function opacidadSlider(){
   imagenSlider = document.getElementById('ImagenSlider');
   var nummopa = 40;
   var animacionOpacidad = setInterval(OpacidadSlider2, 7);
	function OpacidadSlider2(){
	    if(nummopa == 100){
		    clearInterval(OpacidadSlider2);
		}
		else{
		    nummopa++;
			imagenSlider.style.opacity = nummopa+'%';			
		}
	}
	
}
function sliderAuto(){
    var numm = 0;
	var animacion = setInterval(SliderAutomatico, 5000);
	imagenSlider = document.getElementById('ImagenSlider');
	function SliderAutomatico(){
	    if(numm == 8){
		    numm = 0;
		}
		else{
		    numm++;
			imagenSlider.src = 'Slider/img'+numm+'.jpg';
			opacidadSlider();
			
		}
	}
}
myFunction();
/*Funcion para Slider*/
/*Funcion para Slider*/


