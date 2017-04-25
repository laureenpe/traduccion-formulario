function translate () { // Esta funcion traducira el formulario cuando la ejecutemos
  var title = document.getElementById('form-signin-heading'); // traducira el titulo del formulario 
  var email = document.getElementById('inputEmail'); // traducira el texto del placeholder del primer input que corresponde al email
  var password = document.getElementById('inputPassword'); // traducira el texto del placeholder del primer input que corresponde al password
  // se usa getElementById para especificar cual nodo sera modificado

  var remember = document.getElementsByTagName('span')[0]; // traducira el texto junto al checkbox
  var button = document.getElementsByClassName('btn')[0]; // traducira el texto del boton 
  // getElementsByTagName = devuelve un array todos los elementos span del sitio . al escribir [0], accedemos a este array
  // y escogemos el primer elemento

  // getElementsByClassName, devuelve un array con todos los elementos de la clase especificada . al escribir [0], accedemos a 
  // ese array y escogemos el primer elemento

  title.innerHTML = 'Por favor inicia sesión'; // innerHTML se usa para cambiar el título 
  email.placeholder = 'correo electrónico'; // placeHholder, modifica el texto del atributo placeHolder de los inputs correspondientes al email y password
  password.placeholder = 'Contraseña';
  remember.innerHTML = 'Recordar datos';
  button.innerHTML = 'Iniciar Sesión';
}

translate();

//creo una funcion que me imprima lo que el usuario ingrese
function resultado(){
var arroba = document.getElementById("inputEmail").value;
var contrasenia = document.getElementById("inputPassword").value;



var res = document.getElementById("email"); // busco el id email en el html
res.innerHTML = arroba //imprimo lo que el usuario ingresa como e-mail
var res2 = document.getElementById("contrasenia"); //busco el id de contrasenia en el html
res2.innerHTML = contrasenia; //imprimo la contraseña que ingrese el usuario

var titulo = document.getElementById("titulo");
titulo.innerHTML= "Datos de formulario";


}

