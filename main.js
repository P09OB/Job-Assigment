
let pantalla = 7;
let opcion;
let bx;
let by;
let boxSize = 70;
let overBox = false;
let locked = false;
let characters = [];

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

  backgroundImag = loadImage('resources/fondo.png');
  boxes = loadImage('resources/arqueotiposcasillas.png');
  buttonContinue = loadImage('resources/botonOscuro.png');
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

    case 7:
        /*image(backgroundImag, 0, 0);
        image(boxes,235,421);
        image(signboard,335,28);
        image(optionsButton,36,35);*/

        
    //COLOCA TODO ESTO EN UN CASE ES DECIR SWITCH
        imageMode(CORNER);
        image(backgroundImag, 0, 0);
        image(boxes,235,421);
        image(signboard,335,28);

  // rectangulo de tiempo
        noStroke();
        fill('#9AEDFF');
        rect(1079,35,145,57,15);

  //botones de candidatos y arquetiposs
        image(optionsButton,36,35);

        if(mouseX > 36 && mouseX < 197 && mouseY > 35 && mouseY <82){
            //image(candidatesButton,38,35);
        }

        if(mouseX > 36 && mouseX < 197 && mouseY > 106 && mouseY <165){
            //image(ArchetypeButton,37,106);
        }

  //boolean aparece cuando se coloquen todos los personajes
        for (let i = 0; i < characters.length; i++) {
            characters[i].pintar();
        }
    break;

    case 8:
        image(resumenArquetipos, 640, 360, 1280, 720);
    break;

    case 9:

    break;

    
}

fill(0);
text('X: '+mouseX+'Y: '+mouseY,mouseX,mouseY);
 //ubicacion de los botones
 mouseMoved();

 
}

function mouseClicked(){
  console.log(+pantalla+'en total');
  if(pantalla == 0){
    if(mouseX > 510 && mouseX < 726 && mouseY > 500 && mouseY < 576 ){
        console.log('hola');
        pantalla++;
    }
}

if(pantalla == 1){
    if(mouseX > 520 && mouseX < 735 && mouseY > 555 && mouseY < 630){
        image(btnEntiendoPresionado, 520, 555);
        pantalla++;
    }
}

if(pantalla == 2){
    if(mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675){
        image(btnContinuarPresionado, 1000, 600);
        pantalla++;
    }
}

if(pantalla == 3){
    if(mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675){
        image(btnContinuarPresionado, 1000, 600);
        pantalla++;
    }
}

if(pantalla == 4){
    if(mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675){
        image(btnContinuarPresionado, 1000, 600);
        pantalla++;
    }
}

if(pantalla == 5){
    if(mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675){
        image(btnContinuarPresionado, 1000, 600);
        pantalla++;
    }
}

if(pantalla == 6){
    if(mouseX > 520 && mouseX < 735 && mouseY > 600 && mouseY < 675){
        image(btnEmpezarPresionado, 520, 600);
        pantalla++;
    }
}

if(pantalla == 7){
    if(mouseX > 36 && mouseX < 197 && mouseY > 35 && mouseY <82){
        pantalla = 8;
    }
}

if(pantalla == 8){
    if(mouseX > 1140 && mouseX < 1205 && mouseY > 55 && mouseY < 118){
      pantalla = 7;
    }
}

  
}


//-------
function mouseMoved(){
  if(pantalla == 0){
      if(mouseX > 510 && mouseX < 726 && mouseY > 500 && mouseY < 576 ){
          console.log('hola');
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
        image(buttonContinue,640,670);
    }

    if(mouseX > 36 && mouseX < 197 && mouseY > 35 && mouseY <82){
        image(candidatesButton,118,64);
    }

    if(mouseX > 36 && mouseX < 197 && mouseY > 106 && mouseY <165){
        image(ArchetypeButton,117,135);
    }
  }

  if(pantalla == 8){
      if(mouseX > 1140 && mouseX < 1205 && mouseY > 55 && mouseY < 118){
        image(EquisPresionado, 1180, 90);
      }else{
        image(EquisNormal, 1180, 90);
      }
  }
}

function mouseDragged() {

  for (let i = 0; i < characters.length; i++) {
    characters[i].dragged();
  }
  
}

function mouseReleased() {
  console.log('ya');

  for (let i = 0; i < characters.length; i++) {
    characters[i].nodrag();
  }

}
