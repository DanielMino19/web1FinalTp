const buttonNav = document.querySelector('.button-nav');
const ulMenu = document.querySelector('.ul-menu');

buttonNav.addEventListener('click', function() {
  ulMenu.classList.toggle('show-menu');
});


document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const increaseTextBtn = document.getElementById('increase-text');
  const decreaseTextBtn = document.getElementById('decrease-text');
  const toggleContrastBtn = document.getElementById('toggle-contrast');


  // Settings 
  const readTextBtn = document.getElementById('read-text');
  const textToRead = document.getElementById('text-to-read');

  
  let fontSize = parseFloat(getComputedStyle(root).getPropertyValue('--font-size'));
  const step = 2; 

  increaseTextBtn.addEventListener('click', () => {
      fontSize += step;
      root.style.setProperty('--font-size', `${fontSize}px`);
  });

  decreaseTextBtn.addEventListener('click', () => {
      fontSize -= step;
      root.style.setProperty('--font-size', `${fontSize}px`);
  });

  toggleContrastBtn.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
      
  });


      //  -----Read speach api----- // 
  readTextBtn.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textToRead.textContent);
    utterance.lang = 'es-ES';
    speechSynthesis.speak(utterance);
});
});




// ------------- fomularios -------- //


function validarFormulario(event) {
    event.preventDefault(); 
    var nombre = document.getElementById("name");
    var email = document.getElementById("email");
    var edad = document.getElementById("age");
    var mensaje = document.getElementById("message");
  
    var errores = [];
  
    if (nombre.value.trim() === "") {
        nombre.classList.add("error-border");
        errores.push("El nombre es obligatorio.");
        document.getElementById("nombreError").textContent = "El nombre es obligatorio.";
    } else if (nombre.value.length > 30) {
        errores.push("El nombre debe tener máximo 30 caracteres.");
        document.getElementById("nombreError").textContent = "El nombre debe tener máximo 30 caracteres.";
        nombre.classList.add("error-border");
    } else {
        document.getElementById("nombreError").textContent = "";
        nombre.classList.remove("error-border");
    }
  
    if (email.value.trim() === "") {
        errores.push("El formato del email no es válido.");
        document.getElementById("emailError").textContent = "El formato del email no es válido.";
        email.classList.add("error-border");
    } else {
        document.getElementById("emailError").textContent = "";
        email.classList.remove("error-border");
    }
  
    if (isNaN(edad.value) || edad.value < 16 || edad.value >= 100) {
        errores.push("La edad debe ser un número válido entre 16 y 99.");
        document.getElementById("ageError").textContent = "La edad debe ser un número válido entre 16 y 99.";
        edad.classList.add("error-border");
    } else {
        document.getElementById("ageError").textContent = "";
        edad.classList.remove("error-border");
    }
  
    if (mensaje.value.trim() === "") {
        errores.push("El mensaje es obligatorio.");
        document.getElementById("mensajeError").textContent = "El mensaje es obligatorio.";
        mensaje.classList.add("error-border");
    } else if (mensaje.value.length > 200) {
        errores.push("El mensaje debe tener máximo 200 caracteres.");
        document.getElementById("mensajeError").textContent = "El mensaje debe tener máximo 200 caracteres.";
        mensaje.classList.add("error-border");
    } else {
        document.getElementById("mensajeError").textContent = "";
        mensaje.classList.remove("error-border");
    }
  
    if (errores.length > 0) {
        mostrarErrores(errores);
        return false;
    } else {
        mostrarMensaje();
        return true;
    }
  }


  function validarFormularioDeVisitas (event)  {
    event.preventDefault(); 
    var nombre = document.getElementById("nameVisit");
    var email = document.getElementById("emailVisit");
    var date = document.getElementById("dateVisit");
    var time = document.getElementById("timeVisit");
  
    var errores = [];

    
    if (nombre.value.trim() === "") {
        nombre.classList.add("error-border");
        errores.push("El nombre es obligatorio.");
        document.getElementById("nombreError").textContent = "El nombre es obligatorio.";
    } else if (nombre.value.length > 30) {
        errores.push("El nombre debe tener máximo 30 caracteres.");
        document.getElementById("nombreError").textContent = "El nombre debe tener máximo 30 caracteres.";
        nombre.classList.add("error-border");
    } else {
        document.getElementById("nombreError").textContent = "";
        nombre.classList.remove("error-border");
    }
  
   
    if (email.value.trim() === "") {
        errores.push("El formato del email no es válido.");
        document.getElementById("emailError").textContent = "El formato del email no es válido.";
        email.classList.add("error-border");
    } else {
        document.getElementById("emailError").textContent = "";
        email.classList.remove("error-border");
    }
  
    var hoy = new Date();
    hoy.setUTCHours(0, 0, 0, 0);

    var fechaVisita = new Date(date.value + "T00:00:00Z");
   
    if (fechaVisita  <= hoy ) {
        errores.push("La fecha de la visita debe ser a partir de hoy.");
        document.getElementById("dateError").textContent = "La fecha de la visita debe ser a partir de hoy.";
        date.classList.add("error-border");
    } else {
        document.getElementById("dateError").textContent = "";
        date.classList.remove("error-border");
    }

  
    if (time.value === "") {
        errores.push("Debe seleccionar una hora de visita válida.");
        document.getElementById("timeError").textContent = "Debe seleccionar una hora de visita válida.";
        time.classList.add("error-border");
    } else {
        document.getElementById("timeError").textContent = "";
        time.classList.remove("error-border");
    }
  
    if (errores.length > 0) {
        mostrarErrores(errores);
        return false;
    } else {
        mostrarMensaje();
        return true;
    }
}


function mostrarErrores(errores) {
    var mensaje = "Por favor, corrija los siguientes errores:\n";
    for (var i = 0; i < errores.length; i++) {
        mensaje += "- " + errores[i] + "\n";
    }
    alert(mensaje);
}

function mostrarMensaje() {
    alert("Mensaje enviado");
}
