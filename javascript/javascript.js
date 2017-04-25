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
  email.placeHolder = 'correo electrónico'; // placeHolder, modifica el texto del atributo placeHolder de los inputs correspondientes al email y password
  password.placeHolder = 'Contraseña';
  remember.innerHTML = 'Recordar datos';
  button.innerHTML = 'Iniciar Sesión';
}

translate();