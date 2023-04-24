

function N() {
    var imagen = document.getElementById("img");
    let body = document.querySelector('body')
    if (imagen.src.match("img/moon.png")) {
      imagen.src = "img/sunny.png";
      body.style.background = " black";
      body.style.transition = "1s"
      
    } else {
      imagen.src = "img/moon.png";
      body.style.background = "white";
      
    }

   



  }
  
 