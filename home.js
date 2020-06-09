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
  camara.play();
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
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  document.getElementById("goHome").style.display = 'block';
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
  
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
function mostrarSeccionBook(){
    document.getElementById("seccionBooks").style.display='block';
	document.getElementById("comumnionBook").style.display='block';
    document.getElementById("InfantilBook").style.display='none';
	document.getElementById("previsualizacionBooks").style.display='none';
	document.getElementById("left").style.display='none';
    document.getElementById("right").style.display='block';
    document.getElementById("flechasSwitch2").style.visibility='visible';
    document.getElementById("flechasSwitch").style.visibility='hidden';
	document.getElementById("avisoAPB").style.display='none';
	
}
function mostrarSeccionBookinf(){
    document.getElementById("seccionBooks").style.display='block';
	document.getElementById("InfantilBook").style.display='block';
    document.getElementById("comumnionBook").style.display='none';
    document.getElementById("previsualizacionBooks").style.display='none';
	document.getElementById("right").style.display='none';
    document.getElementById("left").style.display='block';
    document.getElementById("flechasSwitch").style.visibility='visible';
	document.getElementById("flechasSwitch2").style.visibility='hidden';
	document.getElementById("avisoAPB").style.display='none';
	
}
function mostrarSeccionBookcomu(){
    document.getElementById("seccionBooks").style.display='block';
	document.getElementById("comumnionBook").style.display='block';
    document.getElementById("InfantilBook").style.display='none';
	document.getElementById("previsualizacionBooks").style.display='none';
	document.getElementById("left").style.display='none';
    document.getElementById("right").style.display='block';
    document.getElementById("flechasSwitch2").style.visibility='visible';
    document.getElementById("flechasSwitch").style.visibility='hidden';
	document.getElementById("avisoAPB").style.display='none';
}


function irComunion(){
    document.getElementById("comumnionBook").style.display='block';
    document.getElementById("InfantilBook").style.display='none';
    document.getElementById("left").style.display='none';
    document.getElementById("right").style.display='block';
    document.getElementById("flechasSwitch2").style.visibility='visible';
    document.getElementById("flechasSwitch").style.visibility='hidden';
}
function irQuinces(){
    document.getElementById("InfantilBook").style.display='block';
    document.getElementById("comumnionBook").style.display='none';
    document.getElementById("right").style.display='none';
    document.getElementById("left").style.display='block';
    document.getElementById("flechasSwitch").style.visibility='visible';
	document.getElementById("flechasSwitch2").style.visibility='hidden';
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
	
	 
	
	/*
	function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

function myFunction() {
   var element = document.querySelector('#dark'); id es el elemento al que se aplicara
   element.classList.toggle("dark-mode");
}

.dark-mode {
  background-color: black;
  color: white;
}
	*/	
	
	
	var a, b, c, d, e, f, g, textos;
	var i;
	
	//estilos parrafos titulos y fondos generales
	 /*
	 .h360, .h3sobremi, .h3Contacto
	.p360, .pSobremi, .pContacto
			
	.container360text, .containersobremitext, .containersContactotext
	
	*/
	titulos = document.getElementsByClassName('h360');
	var i;
	for(i = 0; i < titulos.length; i++){
		titulos[i].classList.add ("vintageH");
	}
	titulos1 = document.getElementsByClassName('h3sobremi');
	var i;
	for(i = 0; i < titulos1.length; i++){
		titulos1[i].classList.add ("vintageH");
	}
	titulos2 = document.getElementsByClassName('h3Contacto');
	var i;
	for(i = 0; i < titulos2.length; i++){
		titulos2[i].classList.add ("vintageH");
	}
	titulos3 = document.getElementsByClassName('h3Servicios');
	var i;
	for(i = 0; i < titulos3.length; i++){
		titulos3[i].classList.add ("vintageH");
	}
	
	textos = document.getElementsByClassName('p360');
	var i;
	for(i = 0; i < textos.length; i++){
		textos[i].classList.add ("vintageP");
	}
	textos1 = document.getElementsByClassName('pSobremi');
	var i;
	for(i = 0; i < textos1.length; i++){
		textos1[i].classList.add ("vintageP");
	}
	textos2 = document.getElementsByClassName('pContacto');
	var i;
	for(i = 0; i < textos2.length; i++){
		textos2[i].classList.add ("vintageP");
	}
	textos5 = document.getElementsByClassName('pServicios');
	var i;
	for(i = 0; i < textos5.length; i++){
		textos5[i].classList.add ("vintageP");
	}
	textos4 = document.getElementsByClassName('textocontacto');
	var i;
	for(i = 0; i < textos4.length; i++){
		textos4[i].classList.add ("vintageP");
	}
	textos3 = document.getElementsByClassName('Enlaces');
	var i;
	for(i = 0; i < textos3.length; i++){
		textos3[i].classList.add ('vintagebotonContacto');
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
	document.querySelector('#perro').style.background = 'linear-gradient(to top, rgba(0,0,0,.6), rgba(0,0,0,.8), #000,  #000,  #000,  #000,  #000)';
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
	titulos = document.getElementsByClassName('h360');
	var i;
	for(i = 0; i < titulos.length; i++){
		titulos[i].classList.remove("vintageH");
	}
	titulos1 = document.getElementsByClassName('h3sobremi');
	var i;
	for(i = 0; i < titulos1.length; i++){
		titulos1[i].classList.remove("vintageH");
	}
	titulos2 = document.getElementsByClassName('h3Contacto');
	var i;
	for(i = 0; i < titulos2.length; i++){
		titulos2[i].classList.remove("vintageH");
	}
	titulos3 = document.getElementsByClassName('h3Servicios');
	var i;
	for(i = 0; i < titulos3.length; i++){
		titulos3[i].classList.remove("vintageH");
	}
	
	textos = document.getElementsByClassName('p360');
	var i;
	for(i = 0; i < textos.length; i++){
		textos[i].classList.remove("vintageP");
	}
	textos1 = document.getElementsByClassName('pSobremi');
	var i;
	for(i = 0; i < textos1.length; i++){
		textos1[i].classList.remove ("vintageP");
	}
	textos2 = document.getElementsByClassName('pContacto');
	var i;
	for(i = 0; i < textos2.length; i++){
		textos2[i].classList.remove ("vintageP");
	}
	textos5 = document.getElementsByClassName('pServicios');
	var i;
	for(i = 0; i < textos5.length; i++){
		textos5[i].classList.remove ("vintageP");
	}
	textos4 = document.getElementsByClassName('textocontacto');
	var i;
	for(i = 0; i < textos4.length; i++){
		textos4[i].classList.remove ("vintageP");
	}
	textos3 = document.getElementsByClassName('Enlaces');
	var i;
	for(i = 0; i < textos3.length; i++){
		textos3[i].classList.remove ("vintagebotonContacto");
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
	
	// fin estilos parrafos titulos y fondos generales
	c = document.getElementsByClassName('pbook', );
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
	document.querySelector('.menuMovil1').style.background = 'linear-gradient(to bottom, rgba(0,0,0,.6), rgba(0,0,0,.8), #000,  #000,  #000,  #000,  #000)';	
	
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
		

/*cambiar temas*/
/*cambiar temas*/
/*cambiar temas*/

/*lightbox*/
/*lightbox*/
//abrir y cerrar en cada seccion

/*lightbox*/
/*lightbox*/