
let pantalla = 0;
let opcion;
let postulante;

let bx;
let by;
let boxSize = 70;
let overBox = false;
let locked = false;
let characters = [];

let timer;
let counter = 240;
let seconds, minutes;

function setup() {

  createCanvas(1280, 720);
  bx = 45;
  by = 45;
  characters.push(new Personaje1(279,281,false));
  characters.push(new Personaje2(457,281,false));
  characters.push(new Personaje3(635,281,false));
  characters.push(new Personaje4(813,281,false));
  characters.push(new Personaje5(995,281,false));
  preload();
  

}

function preload(){

  fondoInicio1 = loadImage('resources/inicio.png');
  btoInicioNormal = loadImage('resources/btnInicio1.png');
  btoInicioPresionado = loadImage('resources/btnInicio2.png');
  fondoInstrucciones = loadImage('resources/instrucciones.png');
  btnEntiendoNormal = loadImage('resources/btnEntiendo1.png');
  btnEntiendoPresionado = loadImage('resources/btnEntiendo2.png');
  fondoAnalista = loadImage('resources/Analistas.png');
  fondoDiplomatico = loadImage('resources/Diplomaticos.png');
  fondoCentinela = loadImage('resources/Centinelas.png');
  fondoExplorador = loadImage('resources/Exploradores.png');
  btnContinuarNormal = loadImage('resources/btnContinuar1.png');
  btnContinuarPresionado = loadImage('resources/btnContinuar2.png');
  fondoInstrucciones2 = loadImage('resources/instrucciones2.png');
  btnEmpezarNormal = loadImage('resources/btnEmpezar1.png');
  btnEmpezarPresionado = loadImage('resources/btnEmpezar2.png');
  resumenArquetipos = loadImage('resources/resumenArquetipos.png');
  fondoCandidatos = loadImage('resources/Candidatos.png');
  estefaniaInfo = loadImage('resources/Estefania.png');
  jhonInfo = loadImage('resources/Jhon.png');
  davidInfo = loadImage('resources/David.png');
  camilaInfo = loadImage('resources/Camila.png');
  luisInfo = loadImage('resources/Luis.png');

  backgroundImag = loadImage('resources/fondo.png');
  boxes = loadImage('resources/arqueotiposcasillas.png');
  //buttonContinue = loadImage('resources/botonOscuro.png');
  buttonContinue2 = loadImage('resources/botonClaro.png');
  EquisNormal = loadImage('resources/EquisNormal.png');
  EquisPresionado = loadImage('resources/EquisPresionado.png');

  circleDavid = loadImage('resources/DavidCirculo.png');
  circleLuis = loadImage('resources/LuisCirculo.png');
  circleCamila = loadImage('resources/CamilaCirculo.png');
  circleJhon = loadImage('resources/JhonCirculo.png');
  circleEstefania = loadImage('resources/EstefaniaCirculo.png');
  DSmallCircle = loadImage('resources/DavidCirculoMini.png');
  LSmallCircle = loadImage('resources/LuisCirculoMini.png');
  CSmallCircle = loadImage('resources/CamilaCirculoMini.png');
  JSmallCircle = loadImage('resources/JhonCirculoMini.png');
  ESmallCircle = loadImage('resources/EstefaniaCirculoMini.png');

  signboard = loadImage('resources/InstruccionUnir1.png');
  optionsButton = loadImage('resources/opcionesBotones.png');
  ArchetypeButton = loadImage('resources/BotonArqueotipo.png');
  candidatesButton = loadImage ('resources/botonCandidatos.png');

}

function draw() {

  switch(pantalla){
    case 0:
        image(fondoInicio1, 0, 0, 1280, 720);
    break;

    case 1:
        image(fondoInstrucciones, 0, 0, 1280, 720);
    break;

    case 2:
        image(fondoAnalista, 0, 0, 1280, 720);
    break;

    case 3:
        image(fondoDiplomatico, 0, 0, 1280, 720);
    break;

    case 4:
        image(fondoCentinela, 0, 0, 1280, 720);
    break;

    case 5:
        image(fondoExplorador, 0, 0, 1280, 720);
    break;

    case 6:
        image(fondoInstrucciones2, 0, 0, 1280, 720);
    break;

    // MATCH CON ARQUEOTIPOS 

    case 7:
        
        imageMode(CORNER);
        image(backgroundImag, 0, 0);
        image(boxes,235,421);
        image(signboard,335,28);
        image(optionsButton,36,35);

        for (let i = 0; i < characters.length; i++) {
            characters[i].pintar();
        }

    break;

    //Hojas de vidas 

    case 8:
        imageMode(CENTER);

        image(fondoCandidatos, 640, 360, 1280, 720);
        switch(postulante){
            case 'Estefania':
                image(estefaniaInfo, 500, 520);
            break;

            case 'Jhon':
                image(jhonInfo, 500, 520);
            break;

            case 'David':
                image(davidInfo, 500, 520);
            break;

            case 'Camila':
                image(camilaInfo, 500, 520);
            break;

            case 'Luis':
                image(luisInfo, 500, 520);
            break;

            default:
            
        }
    break;

    //Arqueotipos

    case 9:
        image(resumenArquetipos, 640, 360, 1280, 720);
    break;

    case 10:

    break;
    
}

if(pantalla === 7 || pantalla === 8 || pantalla === 10){
    // rectangulo de tiempo
    noStroke();
    fill('#9AEDFF');
    rect(1079,35,145,57,15);
    fill(0);
    textSize(28);

    text(minutes + ":" + seconds,1125,70);
}

if (minutes === 0 && seconds === 0){
}

fill(0);
text('X: '+mouseX+'Y: '+mouseY,mouseX,mouseY);
 //ubicacion de los botones
 mouseMoved();

 
}

function mouseClicked(){

    switch(pantalla){
        case 0:
            if(mouseX > 510 && mouseX < 726 && mouseY > 500 && mouseY < 576 ){
                pantalla = 1;
            }
        break;
    
        case 1:
            if(mouseX > 520 && mouseX < 735 && mouseY > 555 && mouseY < 630){
                image(btnEntiendoPresionado, 520, 555);
                pantalla = 2;
            }
        break;
    
        case 2:
            if(mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675){
                image(btnContinuarPresionado, 1000, 600);
                pantalla = 3;
            }
        break;
    
        case 3:
            if(mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675){
                image(btnContinuarPresionado, 1000, 600);
                pantalla = 4;
            }
        break;
    
        case 4:
            if(mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675){
                image(btnContinuarPresionado, 1000, 600);
                pantalla = 5;
            }
        break;
    
        case 5:
            if(mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675){
                image(btnContinuarPresionado, 1000, 600);
                pantalla = 6;
            }
        break;
    
        case 6:
            if(mouseX > 520 && mouseX < 735 && mouseY > 600 && mouseY < 675){
                image(btnEmpezarPresionado, 520, 600);
                pantalla = 8;
                setInterval(timeIt, 1000);
            }
        break;
    
        case 7:
            if(mouseX > 36 && mouseX < 197 && mouseY > 35 && mouseY <82){
                pantalla = 8;
            }
            if(mouseX > 36 && mouseX < 197 && mouseY > 108 && mouseY < 168){
                pantalla = 9;
            }
            if(mouseX> 538 && mouseX<742 && mouseY > 625 && mouseY < 699){
                matchArqueotipo();
            }
           
        break;
    
        case 8:
            if(mouseX > 1030 && mouseX < 1235 && mouseY > 622 && mouseY < 698){
                pantalla = 7;
            }
        break;
    
        case 9:
            if(mouseX > 1140 && mouseX < 1205 && mouseY > 55 && mouseY < 118){
                pantalla = 7;
            }
        break;

 }
  
}
//-------
function mouseMoved(){
  if(pantalla == 0){
      if(mouseX > 510 && mouseX < 726 && mouseY > 500 && mouseY < 576 ){
          image(btoInicioPresionado, 510, 500); 
      }else{
          image(btoInicioNormal, 510, 500);
      }
  }

  if(pantalla == 1){
      if(mouseX > 520 && mouseX < 735 && mouseY > 555 && mouseY < 630){
          image(btnEntiendoPresionado, 520, 555);
      }else{
          image(btnEntiendoNormal, 520, 555);
      }
  }

  if(pantalla == 2){
      if(mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675){
          image(btnContinuarPresionado, 1000, 600);
      }else{
          image(btnContinuarNormal, 1000, 600);
      }
  }

  if(pantalla == 3){
      if(mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675){
          image(btnContinuarPresionado, 1000, 600);
      }else{
          image(btnContinuarNormal, 1000, 600);
      }
  }

  if(pantalla == 4){
      if(mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675){
          image(btnContinuarPresionado, 1000, 600);
      }else{
          image(btnContinuarNormal, 1000, 600);
      }
  }

  if(pantalla == 5){
      if(mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675){
          image(btnContinuarPresionado, 1000, 600);
      }else{
          image(btnContinuarNormal, 1000, 600);
      }
  }

  if(pantalla == 6){
      if(mouseX > 520 && mouseX < 735 && mouseY > 600 && mouseY < 675){
          image(btnEmpezarPresionado, 520, 600);
      }else{
          image(btnEmpezarNormal, 520, 600);
      }
  }

  if(pantalla == 7){
    if(mouseX > 538 && mouseX < 745 && mouseY > 626 && mouseY <700){
        image(buttonContinue2,640,670);
    }else{
        //image(buttonContinue,640,670);
    }

    if(mouseX > 36 && mouseX < 197 && mouseY > 35 && mouseY <82){
        image(candidatesButton,118,64);
    }

    if(mouseX > 36 && mouseX < 197 && mouseY > 106 && mouseY <165){
        image(ArchetypeButton,117,135);
    }
  }

  if(pantalla == 8){
    if(mouseX > 1030 && mouseX < 1235 && mouseY > 622 && mouseY < 698){
        image(btnEntiendoNormal, 1130, 664);
    }

    if(mouseX > 76 && mouseX < 240 && mouseY > 75 && mouseY < 242){
        postulante = 'David';
        noFill();
        stroke(207, 60, 9);
        strokeWeight(7);
        circle(156, 157, 174);
    }

    if(mouseX > 260 && mouseX < 425 && mouseY > 75 && mouseY < 242){
        postulante = 'Luis';
        noFill();
        stroke(207, 60, 9);
        strokeWeight(7);
        circle(342, 157, 174);
    }

    if(mouseX > 446 && mouseX < 612 && mouseY > 75 && mouseY < 242){
        postulante = 'Camila';
        noFill();
        stroke(207, 60, 9);
        strokeWeight(7);
        circle(528, 161, 174);
    }

    if(mouseX > 632 && mouseX < 796 && mouseY > 75 && mouseY < 242){
        postulante = 'Jhon';
        noFill();
        stroke(207, 60, 9);
        strokeWeight(7);
        circle(714, 157, 174);
    }

    if(mouseX > 825 && mouseX < 998 && mouseY > 75 && mouseY < 242){
        postulante = 'Estefania';
        noFill();
        stroke(207, 60, 9);
        strokeWeight(7);
        circle(910, 160, 174);
    } 

      

    }

  if(pantalla == 9){
    if(mouseX > 1140 && mouseX < 1205 && mouseY > 55 && mouseY < 118){
        image(EquisPresionado, 1180, 90);
    }else{
        image(EquisNormal, 1180, 90);
    }
}
}

function mouseDragged() {

    if(pantalla === 7){

        for (let i = 0; i < characters.length; i++) {
            characters[i].dragged();
          }

    }
  
}

function mouseReleased() {

    if(pantalla === 7){
        for (let i = 0; i < characters.length; i++) {
            characters[i].nodrag();
          }

    }

  

}
function matchArqueotipo(){

    var prueba = false;
    let errores = 0;

    for (let i = 0; i < characters.length; i++) {

        //Prueba luis explorador 

        if(characters[1].getPosX() > 861 && characters[1].getPosX() < 1045 && characters[1].getPosY() > 421 && characters[1].getPosY() < 596){
            prueba = true;

        } else {
            prueba = false;
            errores += 1;
        }
        
      }

      console.log(prueba);

}
function timeIt() {
    // 1 counter = 1 second
  if (counter > 0) {
    counter--;
  }
  
	minutes = floor(counter/60);
  seconds = counter % 60;
  
  // if (counter < 60)
  
    
  }