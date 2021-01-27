
window.onload = iniciar;


let form, username, email, password, password2, boton;  

function iniciar() {
    form = document.getElementById('form');
    username = document.getElementById('username');
    email = document.getElementById('email');
    password = document.getElementById('password');
    password2 = document.getElementById('password2');
    boton= document.getElementById("submitBtn");

    
// Event listeners
boton.addEventListener('click', function(e) {
    e.preventDefault();

    validarUserName();
    validarEmail();

  });
}


function validarUserName(){
    if ( ! username.checkValidity() )
    {
        if(username.validity.valueMissing)
          showError( username, "Campo obligatorio");
        else if (username.validity.tooShort)
          showError( username, "Campo minimo de 3 letras");
        else if (username.validity.tooLong)
          showError( username, "Campo maximo de 15 letras");
    }
    else
    {
        showSuccess(username);
    }
}

function validarEmail(){
  if ( ! email.checkValidity() )
    {
        if(email.validity.valueMissing)
          showError( email, "Campo obligatorio");
        else if (email.validity.patternMismatch)
          showError( email, "Formato de email incorrecto");
    }
    else
    {
        showSuccess(email);
    }
}
 
// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = input.nextElementSibling;
  small.textContent = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// // Check email is valid
// function checkEmail(input) {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (re.test(input.value.trim())) {
//     showSuccess(input);
//   } else {
//     showError(input, 'Email no es válido');
//   }
// }

// // Check required fields
// function checkRequired(inputArr) {
//   inputArr.forEach(function(input) {
//     if (input.value.trim() === '') {
//       showError(input , `${getFieldName(input)} es necesario`);
//     } else {
//       showSuccess(input);
//     }
//   });
// }

// // Check input length
// function checkLength(input, min, max) {
//   if (input.value.length < min) {
//     showError(
//       input,
//       `${getFieldName(input)} debe contener al menos ${min} caracteres`
//     );
//   } else if (input.value.length > max) {
//     showError(
//       input,
//       `${getFieldName(input)} debe ser menor de ${max} caracteres`
//     );
//   } else {
//     showSuccess(input);
//   }
// }

// // Check passwords match
// function checkPasswordsMatch(input1, input2) {
//   if (input1.value !== input2.value) {
//     showError(input2, 'Passwords no son iguales');
//   }
// }
 
// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}



// // Check required fields
// function checkRequired(inputArr) {

//   let username =document.querySelector("#username");
//   if( username.value === "")
//   {
//      let papa = username.parentNode
//      papa.className = "form-control error";
//      username.nextElementSibling.textContent="Esta vacío";
//   }

  // inputArr.forEach(function(input) {
  //   if (input.value.trim() === '') {
  //     showError(input, `${getFieldName(input)} es necesario`);
  //   } else {
  //     showSuccess(input);
  //   }
  // });
//}

// // Show input error message
// function showError(input, message) {
//   // const formControl = input.parentElement;
//   // formControl.className = 'form-control error';
//   // const small = formControl.querySelector('small');
//   // small.innerText = message;
// }

// // Show success outline
// function showSuccess(input) {
//   // const formControl = input.parentElement;
//   // formControl.className = 'form-control success';
// }