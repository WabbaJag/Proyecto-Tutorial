window.onload = function () {
  //Variables
  let name = "Jaime"; //string - texto
  const age = 25; //int - entero
  let isStudent = true; //boolean - true/false

  console.log("Hola, soy la consola.");
  console.log("Nombre: ", name);
  console.log("Edad: ", age);
  console.log("¿Es estudiante? ", isStudent);

  let message = "El/la estudiante " + name + " tiene " + age + " años.";

  if (age > 25) {
    console.log(name + " está muy roco!");
  } else if (age === 25) {
    console.log(name + " es la edad justa.");
  } else {
    //age < 25
    console.log(name + " está en la flor de la juventú.");
  }
  console.log("Ya terminé, soy la consola.");

  let arregloPersonas = [
    "Jagdish",
    "Angie",
    "Dereck",
    "Allan",
    "Vale",
    "Alexa",
    "Errol",
    "Chespirito",
    "Laura",
  ];
  console.log("Mi lista de personas: ", arregloPersonas[6]);

  //Loop 'for' - iteracion sobre arreglos
  for (let i = 0; i < arregloPersonas.length; i++) {
    console.log("i va por " + i);
    console.log(arregloPersonas[i] + " está presente.");
  } //para
  //array : lista de objetos que puedo iterar

  //manipulación del DOM
  const cajaUno = document.getElementById("caja1");

  cajaUno.textContent = message;
};

// BACKEND -> Todo lo que funciona detrás de mi aplicación (con lo cual mi usuario
// NO puede interactuar)

// FRONTEND -> Todo con lo cual el usuario puede interactuar

const themeButton = document.getElementById("theme-toggle");

//MANIPULACION DEL DOM
themeButton.addEventListener("click", cambieTema);

let temaClaro = true;
function cambieTema() {
  const cajaPadre = document.getElementById("caja-padre");
  cajaPadre.style.backgroundColor = "black";
}
