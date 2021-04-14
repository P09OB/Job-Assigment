
let pantalla = 0;
let postulante;
let cargo = 'original';

let characters = [];

let erroresNivel1 = 0;
let erroresNivel2 = 0;
let totalErrores = 0;
let repeticionesNivel1 = 0;
let repeticionesNivel2 = 0;
let totalRepeticiones = 0;

let analista;
let diplomatico;
let prueba;
let centinela;
let explorador;

let timer;
let counter = 420;
let seconds, minutes;

let send = false;
let wrong = false;
let timeAd = false;
let locked = false;
let nivel2 = false;


function setup() {

    createCanvas(1280, 720);
    addCharacters();
    preload();
}

function addCharacters(){

    if(pantalla === 10){
        characters.splice(0);
    }
    characters.push(new Personaje1(279, 281, false));
    characters.push(new Personaje2(457, 281, false));
    characters.push(new Personaje3(635, 281, false));
    characters.push(new Personaje4(813, 281, false));
    characters.push(new Personaje5(995, 281, false));
    
}

function preload() {

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
    btnVolver = loadImage('resources/btnVolver.png');
    btnConfirmar = loadImage('resources/confirmar.png');
    cargoFondo = loadImage('resources/fondoTrabajo.png');
    okBtn = loadImage('resources/okBtn.png');

    cargoAdmin = loadImage('resources/cargoAdmin.png');
    cargoCalidad = loadImage('resources/cargoCalid.png');
    cargoMercadotecnia = loadImage('resources/cargoMerca.png');
    cargoProduccion = loadImage('resources/cargoProd.png');

    backgroundArquetipo = loadImage('resources/fondoArquetipo.png');
    backgroundJobs = loadImage('resources/fondoCargo.png');
    boxes = loadImage('resources/arqueotiposcasillas.png');
    buttonContinue = loadImage('resources/botonOscuro.png');
    buttonContinue2 = loadImage('resources/botonClaro.png');
    buttonEntendido = loadImage('resources/botonEntendido.png');
    EquisNormal = loadImage('resources/EquisNormal.png');
    EquisPresionado = loadImage('resources/EquisPresionado.png');
    btnContratar = loadImage('resources/contratarBtn.png');

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
    candidatesButton = loadImage('resources/botonCandidatos.png');
    cargos = loadImage('resources/Cargos.png');
    davidCargo = loadImage('resources/DavidCargo.png');
    camilaCargo = loadImage('resources/CamilaCargo.png');
    estefaniaCargo = loadImage('resources/EstefaniaCargo.png');
    jhonCargo = loadImage('resources/JhonCargo.png');
    luisCargo = loadImage('resources/LuisCargo.png');
    summary = loadImage('resources/resultados.png');
    thanks = loadImage('resources/fondoFinal.png');
    confirmation = loadImage('resources/Confirmacion.png');
    bug = loadImage('resources/Error.png');

    camilaCarnet = loadImage('resources/CamilaCarnet.png');
    davidCarnet = loadImage('resources/DavidCarnet.png');
    estefaniaCarnet = loadImage('resources/EstefaniaCarnet.png');
    jhonCarnet = loadImage('resources/JhonCarnet.png');
    luisCarnet = loadImage('resources/LuisCarnet.png');

    camila = loadImage('resources/CamilaCompleta.png');
    david = loadImage('resources/DavidCompleto.png');
    estefania = loadImage('resources/EstefaniaCompleta.png');
    jhon = loadImage('resources/JhonCompleta.png');
    luis = loadImage('resources/LuisCompleto.png');
    carnetMesa = loadImage('resources/mesa.png');
    carnets = loadImage('resources/carnet.png');
    avisoTiempo = loadImage('resources/avisoTiempo.png');

}

function draw() {

    switch (pantalla) {
        case 0:
            image(fondoInicio1, 0, 0, 1280, 720);
            image(btoInicioNormal, 510, 500);
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
            image(backgroundArquetipo, 0, 0);
            image(boxes, 235, 421);

            for (let i = 0; i < characters.length; i++) {
                characters[i].pintar();
            }

            if(send){
                imageMode(CORNER);
                image(confirmation, 0, 0);
            }

            if(wrong){
                imageMode(CORNER);
                image(bug, 0, 0);
            }

            break;

        //Hojas de vidas 

        case 8:
            imageMode(CENTER);

            image(fondoCandidatos, 640, 360, 1280, 720);
            switch (postulante) {
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

     //ASIGNAR TRABAJOS   
        case 10:
            imageMode(CORNER);
            nivel2 = true;
            image(cargoFondo, 0, 0);
            image(carnetMesa,0,437);
            image(carnets,123,452);
            for (let i = 0; i < characters.length; i++) {
                characters[i].jobs();
            }

            imageMode(CORNER);

            
            switch(cargo){
                case 'mercadotecnia':
                    image(cargoMercadotecnia, 0, 0);
                    break;
                
                case 'calidad':
                    image(cargoCalidad, 0, 0);
                    break;

                case 'administrativo':
                    image(cargoAdmin, 0, 0);
                    break;

                case 'produccion':
                    image(cargoProduccion, 0, 0);
                    break;

                case 'original':
                    break;
            }

            if(send){
                imageMode(CORNER);
                image(confirmation, 0, 0);
            }

            if(wrong){
                imageMode(CORNER);
                image(bug, 0, 0);
            }
            break;
        case 11:
            imageMode(CORNER);
            image(thanks, 0, 0);
            
            break;
        case 12:
            image(summary, 0, 0);
            fill(0);
            textSize(28);
            totalErrores = erroresNivel1+erroresNivel2;
            totalRepeticiones = repeticionesNivel1+repeticionesNivel2;
            text("Errores Nivel 1: "+erroresNivel1, 680, 294);
            text("Errores Nivel 2: "+erroresNivel2, 680, 339);
            text("Total errores: "+totalErrores,680,384);
            text("Repeticiones Nivel 1: "+repeticionesNivel1,680,429);
            text("Repeticiones Nivel 2: "+repeticionesNivel2,680,474);
            text("Total Repeticiones: "+totalRepeticiones,680,519);
            break;


    }

    if (pantalla === 7 || pantalla === 8 || pantalla === 10) {
        // rectangulo de tiempo
        noStroke();
        fill('#9AEDFF');
        rect(1079, 35, 145, 57, 15);
        fill(0);
        textSize(28);

        text(minutes + ":" + seconds, 1125, 70);
    }

    if (minutes === 0 && seconds === 0) {
        if (pantalla === 7) {
            matchArqueotipo();
        }
        pantalla = 12;
    }

    if (minutes === 6 && seconds === 0) {
        timeAd = true;
        locked = true;
    }

    if(timeAd){
        imageMode(CORNER);
        image(avisoTiempo,0,0);
    }

    fill(0);
    text('X: '+mouseX+'Y: '+mouseY,mouseX,mouseY);
    //ubicacion de los botones
    mouseMoved();


}

function mouseClicked() {

    switch (pantalla) {
        case 0:
            if (mouseX > 510 && mouseX < 726 && mouseY > 500 && mouseY < 576) {
                pantalla = 1;
            }
            break;

        case 1:
            if (mouseX > 520 && mouseX < 735 && mouseY > 555 && mouseY < 630) {
                image(btnEntiendoPresionado, 520, 555);
                pantalla = 2;
            }
            break;

        case 2:
            if (mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675) {
                image(btnContinuarPresionado, 1000, 600);
                pantalla = 3;
            }
            break;

        case 3:
            if (mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675) {
                image(btnContinuarPresionado, 1000, 600);
                pantalla = 4;
            }
            break;

        case 4:
            if (mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675) {
                image(btnContinuarPresionado, 1000, 600);
                pantalla = 5;
            }
            break;

        case 5:
            if (mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675) {
                image(btnContinuarPresionado, 1000, 600);
                pantalla = 6;
            }
            break;

        case 6:
            if (mouseX > 520 && mouseX < 735 && mouseY > 600 && mouseY < 675) {
                image(btnEmpezarPresionado, 520, 600);
                pantalla = 8;
                setInterval(timeIt, 1000);
            }
            break;

        case 7:
            if(!locked){
            if (mouseX > 36 && mouseX < 197 && mouseY > 35 && mouseY < 82) pantalla = 8;
            if (mouseX > 36 && mouseX < 197 && mouseY > 108 && mouseY < 168) pantalla = 9;
            } 
            if (mouseX > 538 && mouseX < 742 && mouseY > 625 && mouseY < 699) send = true;
            
            if(send){
                if (mouseX > 378 && mouseX < 586 && mouseY > 359 && mouseY < 434) {
                    pantalla = 7;
                    send = false;                
                }
                if(mouseX > 672 && mouseX < 878 && mouseY > 360 && mouseY < 434) {
                    matchArqueotipo();
                    send = false;                
                }
            }

            if(wrong){
                if (mouseX > 538 && mouseX < 739 && mouseY > 545 && mouseY < 620){
                    repeticionesNivel1 += 1;
                    pantalla = 7;
                    wrong = false;
                } 
            }
            break;

        case 8:
            if (mouseX > 1030 && mouseX < 1235 && mouseY > 622 && mouseY < 698){
                if(!nivel2){
                    pantalla = 7;
                }else {
                    pantalla = 10;
                }
            }
            
            break;

        case 9:
            if (mouseX > 1140 && mouseX < 1205 && mouseY > 55 && mouseY < 118) {
                if(!nivel2){
                    pantalla = 7;
                }else {
                    pantalla = 10;
                }
            }

            break;

        case 10:

            if(!locked){
                if (mouseX > 36 && mouseX < 197 && mouseY > 35 && mouseY < 82) pantalla = 8;
                if (mouseX > 36 && mouseX < 197 && mouseY > 108 && mouseY < 168) pantalla = 9;
            } 
            if (mouseX > 538 && mouseX < 742 && mouseY > 625 && mouseY < 699) send = true;
            
            if(send){
                if (mouseX > 378 && mouseX < 586 && mouseY > 359 && mouseY < 434) {
                    pantalla = 10;
                    send = false;                
                }
                if(mouseX > 672 && mouseX < 878 && mouseY > 360 && mouseY < 434) {
                    matchJobs();
                    send = false;                
                }
            }

            if(wrong){
                if (mouseX > 538 && mouseX < 739 && mouseY > 545 && mouseY < 620){
                    repeticionesNivel1 += 1;
                    pantalla = 10;
                    wrong = false;
                } 
            }
            if(mouseX > 128 && mouseX < 342 && mouseY > 458 && mouseY < 604){
                cargo = 'mercadotecnia';
            }
            if(mouseX > 402 && mouseX < 616 && mouseY > 458 && mouseY < 602){
                cargo = 'calidad';
            }
            if(mouseX > 676 && mouseX < 890 && mouseY > 458 && mouseY < 604){
                cargo = 'administrativo';
            }
            if(mouseX > 950 && mouseX < 1166 && mouseY > 458 && mouseY < 604){
                cargo = 'produccion';
            }
            if(mouseX > 536 && mouseX < 742 && mouseY > 520 && mouseY < 596){
                cargo = 'original';
            }
            break;

        case 11:
            if (mouseX > 539 && mouseX < 743 && mouseY > 453 && mouseY < 527) pantalla = 12;  
            break;

        case 12:
            pantalla = 0;
            break;

    }

    if(timeAd){
        if (mouseX > 538 && mouseX < 739 && mouseY > 545 && mouseY < 620) timeAd = false; 
        
    }

}

function mouseMoved() {
    if (pantalla == 0) {
        if (mouseX > 510 && mouseX < 726 && mouseY > 500 && mouseY < 576) image(btoInicioPresionado, 510, 500);
    }
    if (pantalla == 1) {
        if (mouseX > 520 && mouseX < 735 && mouseY > 555 && mouseY < 630) image(btnEntiendoNormal, 524, 557);
    }
    if (pantalla == 2) {
        if (mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675) image(btnContinuarNormal, 1005, 598);
    }
    if (pantalla == 3) {
        if (mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675) image(btnContinuarNormal, 1000, 598);
    }
    if (pantalla == 4) {
        if (mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675) image(btnContinuarNormal, 1010, 598);
    }
    if (pantalla == 5) {
        if (mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675) image(btnContinuarNormal, 1000, 598);
    }
    if (pantalla == 6) {
        if (mouseX > 520 && mouseX < 735 && mouseY > 600 && mouseY < 675) image(btnEmpezarNormal, 525, 603);
    }
    if (pantalla == 7) {

            if (mouseX > 538 && mouseX < 745 && mouseY > 626 && mouseY < 700) image(buttonContinue2, 640, 670);
        
            if (mouseX > 36 && mouseX < 197 && mouseY > 35 && mouseY < 82) image(candidatesButton, 118, 64);

            if (mouseX > 36 && mouseX < 197 && mouseY > 106 && mouseY < 165) image(ArchetypeButton, 117, 135);
    }

    if (pantalla == 8) {
        if (mouseX > 1030 && mouseX < 1235 && mouseY > 622 && mouseY < 698) {
            image(btnEntiendoNormal, 1130, 664);
        }

        if (mouseX > 76 && mouseX < 240 && mouseY > 75 && mouseY < 242) {
            postulante = 'David';
            noFill();
            stroke(207, 60, 9);
            strokeWeight(7);
            circle(156, 157, 174);
        }

        if (mouseX > 260 && mouseX < 425 && mouseY > 75 && mouseY < 242) {
            postulante = 'Luis';
            noFill();
            stroke(207, 60, 9);
            strokeWeight(7);
            circle(342, 157, 174);
        }

        if (mouseX > 446 && mouseX < 612 && mouseY > 75 && mouseY < 242) {
            postulante = 'Camila';
            noFill();
            stroke(207, 60, 9);
            strokeWeight(7);
            circle(528, 161, 174);
        }

        if (mouseX > 632 && mouseX < 796 && mouseY > 75 && mouseY < 242) {
            postulante = 'Jhon';
            noFill();
            stroke(207, 60, 9);
            strokeWeight(7);
            circle(714, 157, 174);
        }

        if (mouseX > 825 && mouseX < 998 && mouseY > 75 && mouseY < 242) {
            postulante = 'Estefania';
            noFill();
            stroke(207, 60, 9);
            strokeWeight(7);
            circle(910, 160, 174);
        }
    }

    if (pantalla == 9) if (mouseX > 1140 && mouseX < 1205 && mouseY > 55 && mouseY < 118) image(EquisNormal, 1184, 95);

    if(pantalla == 10){
        if(mouseX > 540 && mouseX < 744 && mouseY > 626 && mouseY < 700) image(btnContratar, 527, 621);  
    
        if(mouseX > 536 && mouseX < 742 && mouseY > 520 && mouseY < 596){
            if(cargo == 'mercadotecnia' || cargo == 'calidad' || cargo == 'administrativo' || cargo == 'produccion'){
                image(okBtn,526,520);
            }
        }
imageMode(CENTER);
        if (mouseX > 36 && mouseX < 197 && mouseY > 35 && mouseY < 82) image(candidatesButton, 118, 64);

        if (mouseX > 36 && mouseX < 197 && mouseY > 106 && mouseY < 165) image(ArchetypeButton, 117, 135);
        

    }
    

    if(send){
        if(mouseX > 380, mouseX < 585 && mouseY > 360 && mouseY < 434) {
            image(btnVolver, 370, 358);
        }
        if(mouseX > 672 && mouseX < 878 && mouseY > 360 && mouseY < 434){
            image(btnConfirmar, 663, 358);
        }
    }

    if(wrong){
        if(mouseX > 538, mouseX < 739 && mouseY > 545 && mouseY < 620) {
            image(buttonEntendido, 528, 545);
        }

    }

}

function mouseDragged() {

    if (pantalla === 7) {

        for (let i = 0; i < characters.length; i++) {

            characters[i].dragged();
        }

    }

    if (pantalla === 10) {

        for (let i = 0; i < characters.length; i++) {

            characters[i].dragJob();
        }

    }

}

function mouseReleased() {

    if (pantalla === 7 || pantalla === 10) {
        for (let i = 0; i < characters.length; i++) {
            characters[i].nodrag();
        }

    }
}

function matchArqueotipo() {

    for (let i = 0; i < characters.length; i++) {

        //Luis Ninguno 
        if (characters[1].getPosX() > 375 && characters[1].getPosX() < 538 && characters[1].getPosY() > 181 && characters[1].getPosY() < 383) {
            prueba = true;

        } else {
            prueba = false;
        }
        // Estefania ANALISTA
        if (characters[4].getPosX() > 235 && characters[4].getPosX() < 418 && characters[4].getPosY() > 421 && characters[4].getPosY() < 596) {
            analista = true;

        } else {
            analista = false;
        }

        // David DIPLOMATICO

        if (characters[0].getPosX() > 442 && characters[0].getPosX() < 626 && characters[0].getPosY() > 421 && characters[0].getPosY() < 596) {
            diplomatico = true;

        } else {
            diplomatico = false;
        }

        //Jhon CENTINELA

        if (characters[3].getPosX() > 652 && characters[3].getPosX() < 836 && characters[3].getPosY() > 421 && characters[3].getPosY() < 596) {
            centinela = true;

        } else {
            centinela = false;
        }

        //Camila EXPLORADOR

        if (characters[2].getPosX() > 861 && characters[2].getPosX() < 1045 && characters[2].getPosY() > 421 && characters[2].getPosY() < 596) {
            explorador = true;

        } else {
            explorador = false;
        }

    }

    if (!analista) erroresNivel1 += 1;
    if (!diplomatico) erroresNivel1 += 1;
    if (!centinela) erroresNivel1 += 1;
    if (!explorador) erroresNivel1 += 1;
    if (!prueba) erroresNivel1 += 1;


    if (!analista || !diplomatico || !explorador || !centinela || !prueba) {
        wrong = true;
        console.log("Numero de erroresNivel1: " + erroresNivel1);
    } else {
        pantalla = 10;
        addCharacters();
    }
}

function matchJobs() {


    for (let i = 0; i < characters.length; i++) {
        console.log(i);

        //Luis Ninguno 
        if (characters[1].getPosX() > 375 && characters[1].getPosX() < 538 && characters[1].getPosY() > 181 && characters[1].getPosY() < 383) {
            prueba = true;

        } else {
            prueba = false;
        }
        // Estefania ANALISTA
        if (characters[4].getPosX() > 951 && characters[4].getPosX() < 1165 && characters[4].getPosY() > 496 && characters[4].getPosY() < 660) {
            analista = true;

        } else {
            analista = false;
        }

        // David INSPECTOR DE CALIDAD

        if (characters[0].getPosX() > 402 && characters[0].getPosX() < 615 && characters[0].getPosY() > 496 && characters[0].getPosY() < 660) {
            diplomatico = true;

        } else {
            diplomatico = false;
        }

        //Jhon GERENTE ADMI

        if (characters[3].getPosX() > 677 && characters[3].getPosX() < 890 && characters[3].getPosY() > 496 && characters[3].getPosY() < 660) {
            centinela = true;

        } else {
            centinela = false;
        }

        //Camila MERCADOTECNIA

        if (characters[2].getPosX() > 128 && characters[2].getPosX() < 341 && characters[2].getPosY() > 341 && characters[2].getPosY() < 660) {
            explorador = true;

        } else {
            explorador = false;
        }

    }
    console.log("entre"+analista+diplomatico+explorador+centinela+prueba);

    if (!analista) erroresNivel2 += 1;
    if (!diplomatico) erroresNivel2 += 1;
    if (!centinela) erroresNivel2 += 1;
    if (!explorador) erroresNivel2 += 1;
    if (!prueba) erroresNivel2 += 1;


    if (!analista || !diplomatico || !explorador || !centinela || !prueba) {
        wrong = true;
        console.log("Numero de erroresNivel2: " + erroresNivel2);
    } else {
        pantalla = 11;
    }
}

function timeIt() {
    if (counter > 0) {
        counter--;
    }

    minutes = floor(counter / 60);
    seconds = counter % 60;

}