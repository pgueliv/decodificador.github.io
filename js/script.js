let botonEncriptar = document.getElementById('encriptar');
let botonDesencriptar = document.getElementById('desencriptar');
let resultado = document.getElementById('resultado');
let encriptacion = document.getElementById('textbox');
let modeDark = document.getElementById('modeDark');
let body = document.getElementsByTagName('body')[0]
var botonCopiar = document.getElementById("copy");

function animateTitle() {
  let text = document.title;
  let position = 0;
  let easingFactor = 0.1;

  let spacedText = text + ' ';

  function updatePosition() {
    position++;
    if (position > text.length) {
      position = 0;
    }

    let progress = Math.sin((position / text.length) * Math.PI);

    let smoothedPosition = Math.floor(progress * text.length * easingFactor);

    document.title = spacedText.substring(smoothedPosition) + spacedText.substring(0, smoothedPosition);
  }

  setInterval(updatePosition, 100); 

}

animateTitle();

encriptacion.addEventListener("input", function(event) {
  const inputValue = event.target.value;
  const sanitizedValue = inputValue.replace(/[^a-z\s¿?]/g, "");

  if (inputValue !== sanitizedValue) {
    alert("¡Solo se permiten letras minúsculas sin tildes y espacios!");
  }

  event.target.value = sanitizedValue;
});

encriptacion.addEventListener("paste", function(event) {
  const clipboardData = event.clipboardData || window.clipboardData;
  const pastedText = clipboardData.getData("text");

  const sanitizedText = pastedText.replace(/[^a-z\s¿?]/g, "");

  if (pastedText !== sanitizedText) {
    alert("¡Solo se permiten letras minúsculas sin tildes y espacios!");
    event.preventDefault();
    const currentValue = event.target.value;
    const newValue = currentValue + sanitizedText;
    event.target.value = newValue;
  }
});




function encriptar (){
    var mensaje = encriptacion.value.trim();

    if (mensaje === "") {

      alert("No hay contenido escrito.");

    } else {

      let cardContent = document.querySelector(".card__box__content")
      let cardResult = document.querySelector(".card__box__result")
      
      cardContent.classList.add("card__box__none");
      cardResult.classList.remove("card__box__none");

    }

    var mensaje = encriptacion.value;
    var mensajeEncriptado = mensaje
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");

    resultado.innerHTML = mensajeEncriptado;
  
}

function desencriptar (){

  var mensaje = encriptacion.value.trim();

    if (mensaje === "") {

      alert("No hay contenido escrito.");

    } else {

      let cardContent = document.querySelector(".card__box__content")
      let cardResult = document.querySelector(".card__box__result")
      
      cardContent.classList.add("card__box__none");
      cardResult.classList.remove("card__box__none");
      
    }

    var mensajeEncriptado = encriptacion.value;
    var mensaje = mensajeEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

    resultado.innerHTML = mensaje;
    
}

    function copiar() {
      var contenido = document.getElementById('resultado').innerText;
      navigator.clipboard.writeText(contenido)
      alert("Texto copiado!");
    }

    function mododark() {
      
      body.classList.toggle("dark");
      
      modeDark.classList.toggle("encriptador__header__button");
      modeDark.classList.toggle("mode__dark");

      var colorCard = document.getElementById("card");
      colorCard.classList.toggle("card__bcolor");
      colorCard.classList.toggle("dark__card");
    
      botonCopiar.classList.toggle("card__box__result__color");
      botonCopiar.classList.toggle("button__dark");
    
      var letraDark = document.getElementById("resultado");
      letraDark.classList.toggle("card__box__result__text");
      letraDark.classList.toggle("dark__text");

      var tituloDark = document.getElementById("tituloDark")
      tituloDark.classList.toggle("card__box__content__title");
      tituloDark.classList.toggle("dark__titulo");

      var tituloDark = document.getElementById("textoDark")
      tituloDark.classList.toggle("card__box__content__text");
      tituloDark.classList.toggle("dark__texto");

      encriptacion.classList.toggle("textarea__color")
      encriptacion.classList.toggle("textarea__dark")
    }

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;
modeDark.onclick = mododark;