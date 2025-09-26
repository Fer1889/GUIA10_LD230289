//Verificar si el navegador utilizado posee soporte para usar localStorage.
//Si no lo es advertir al usuario enviando una advertencia de no compatibilidad.
if(typeof(localStorage) == "undefined") {
 document.getElementById("notCompatibleMsg").style.display = 'block';
}
else {
 document.getElementById("isCompatibleMsg").style.display = 'block';
}
//Obtener todos los elementos del documento que se requieren
//utilizando el modelo del DOM Nivel 2.
var storedTextContainer = document.getElementById("webStorageStoredText");
//Acceder al dato almacenado previamente con localStorage.
var storedText = localStorage.getItem('webStorageTestInput');
var inputBox = document.getElementById("webStorageInput");
var saveBtn = document.getElementById("webStorageSaveBtn");
var clearBtn = document.getElementById("clearWebStorage");
//Verificar si el dato almacenado en el objeto localStorage es nulo.
if(storedText != null){
 //Si estamos aquí significa que existe un dato almacenado en localStorage.
 //Colocamos el datos almacenado en el elemento de la página con id
storedTextContainer.
 storedTextContainer.innerHTML = "<strong>Dato cargado desde almacenamiento local:</strong> " + storedText;
 //Volver a cargar el dato almacenado en el campo de texto
 inputBox.value = storedText;
}
//Usamos el manejador de evento onclick sobre el botón Guardar para almacenar
//el dato ingresado hasta el momento en el objeto localStorage.
saveBtn.onclick = function(){
 //Before we save this data, let's escape it so you "hackers" out there don't
//try anything funny!

 var valueToSave =inputBox.value.replace(/<\/?[^>]+>/gi, '');
 //This is the way we store things in localStorage
 localStorage.setItem('webStorageTestInput',valueToSave);
 //Let the user know the text was saved.
 storedTextContainer.innerHTML = "Se ha almacenado correctamente '" +
valueToSave + ".' Actualice la página para que observe que el dato almacenado es mostrado en el campo de formulario.";
}

//Borramos todo el contenido (clave y valor) almacenado en el objeto localStorage
clearBtn.onclick = function(){
 //Verificamos que exista dato almacenado en localStorage
 if(storedText != null){
 localStorage.clear();
 //Limpiar la caja de texto
 inputBox.value = "";
 storedTextContainer.innerHTML = "Almacenamiento local liberado.";
 }
}

