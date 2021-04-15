
let pantalla = 14;
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
let nivel1 = false;
let start = true;
let logic = new Logic();



function setup() {

    createCanvas(1280, 720);
    logic.addCharacters();
    preload();
}

function preload() {
    //FONDOS
    fondoInicio = loadImage('resources/fondoInicio.png');
    fondoInstrucciones = loadImage('resources/instrucciones.png');
    fondoCandidatos = loadImage('resources/FondoCandidatos.png');
    fondoArquetipo = loadImage('resources/fondoArquetipo.png');

    instruccionGeneral = loadImage('resources/instruccionesGeneral.png');
    instruccionTiempo = loadImage('resources/instruccionesTiempo.png');
    instruccionOpciones = loadImage('resources/instruccionesOpciones.png');

    //BOTONES
    btoInicio = loadImage('resources/btnInicio1.png');
    btnEntiendo = loadImage('resources/btnEntiendo1.png');
    btnContinuar = loadImage('resources/btnContinuar1.png');
    btnEmpezar = loadImage('resources/btnEmpezar1.png');
    btnVer = loadImage ('resources/btnVer.png');
    btnAsignar = loadImage ('resources/btnAsignar.png');
    btnOk = loadImage ('resources/btnOk.png');
    btnEquis= loadImage('resources/EquisNormal.png');
    btnVolver = loadImage('resources/btnVolver.png');
    btnConfirmar = loadImage('resources/confirmar.png');
    buttonEntendido = loadImage('resources/botonEntendido.png');
    btnContratar = loadImage('resources/contratarBtn.png');


    btnArquetipo = loadImage('resources/BotonArqueotipo.png');
    btnCandidatos = loadImage('resources/botonCandidatos.png');


    //ARQUEOTIPOS
    fondoAnalista = loadImage('resources/Analistas.png');
    fondoDiplomatico = loadImage('resources/Diplomaticos.png');
    fondoCentinela = loadImage('resources/Centinelas.png');
    fondoExplorador = loadImage('resources/Exploradores.png');

    //CV 
    estefaniaInfo = loadImage('resources/Estefania.png');
    jhonInfo = loadImage('resources/Jhon.png');
    davidInfo = loadImage('resources/David.png');
    camilaInfo = loadImage('resources/Camila.png');

    //ELEMENTOS NIVEL 1

    circleDavid = loadImage('resources/DavidCirculo.png');
    circleCamila = loadImage('resources/CamilaCirculo.png');
    circleJhon = loadImage('resources/JhonCirculo.png');
    circleEstefania = loadImage('resources/EstefaniaCirculo.png');
    DSmallCircle = loadImage('resources/DavidCirculoMini.png');
    CSmallCircle = loadImage('resources/CamilaCirculoMini.png');
    JSmallCircle = loadImage('resources/JhonCirculoMini.png');
    ESmallCircle = loadImage('resources/EstefaniaCirculoMini.png');

    boxes = loadImage('resources/arqueotiposcasillas.png');
    resumenArquetipo = loadImage('resources/resumenArquetipo.png');

    //ELEMENTOS NIVEL 2

    camila = loadImage('resources/CamilaCompleta.png');
    david = loadImage('resources/DavidCompleto.png');
    estefania = loadImage('resources/EstefaniaCompleta.png');
    jhon = loadImage('resources/JhonCompleta.png');
    carnetMesa = loadImage('resources/mesa.png');
    carnets = loadImage('resources/carnet.png');

    camilaCarnet = loadImage('resources/CamilaCarnet.png');
    davidCarnet = loadImage('resources/DavidCarnet.png');
    estefaniaCarnet = loadImage('resources/EstefaniaCarnet.png');
    jhonCarnet = loadImage('resources/JhonCarnet.png');

    cargoAdmin = loadImage('resources/cargoAdmin.png');
    cargoCalidad = loadImage('resources/cargoCalid.png');
    cargoMercadotecnia = loadImage('resources/cargoMerca.png');
    cargoProduccion = loadImage('resources/cargoProd.png');

    cargoFondo = loadImage('resources/fondoTrabajo.png');

    //ULTIMAS PANTALLAS
    thanks = loadImage('resources/fondoFinal.png');
    summary = loadImage('resources/resultados.png');

    //AVISOS

    avisoTiempo = loadImage('resources/avisoTiempo.png');
    bug = loadImage('resources/Error.png');
    confirmation = loadImage('resources/Confirmacion.png');
    candidatosBloqueado = loadImage('resources/candidatosBloqueado.png');
    arqueotiposBloqueado = loadImage('resources/arqueotiposBloqueado.png');




/*
    
    okBtn = loadImage('resources/okBtn.png');

    backgroundJobs = loadImage('resources/fondoCargo.png');
    buttonContinue = loadImage('resources/botonOscuro.png');
    buttonContinue2 = loadImage('resources/botonClaro.png');
    
    signboard = loadImage('resources/InstruccionUnir1.png');
    optionsButton = loadImage('resources/opcionesBotones.png');

*/

}

function draw() {
    imageMode(CORNER);
    switch (pantalla) {
        //INICIO
        case 0:
            image(fondoInicio, 0, 0);
            break;
        //INSTRUCCIONES ARQUEOTIPOS
        case 1:
            image(fondoInstrucciones, 0, 0);
            break;
        //ANALISTA
        case 2:
            image(fondoAnalista, 0, 0);
            break;
        //DIPLOMATICO
        case 3:
            image(fondoDiplomatico, 0, 0);
            break;
        //CENTINELA
        case 4:
            image(fondoCentinela, 0, 0);
            break;
        //EXPLORADOR
        case 5:
            image(fondoExplorador, 0, 0);
            break;
        //INSTRUCCIONES GENERALES
        case 6:
            image(instruccionGeneral, 0, 0);
            break;
        //CV
        case 7:
            image(fondoCandidatos, 0,0);
            switch (postulante) {
                case 'Estefania':
                    image(estefaniaInfo, 96, 273);
                    break;

                case 'Jhon':
                    image(jhonInfo, 96, 273);
                    break;

                case 'David':
                    image(davidInfo, 96, 273);
                    break;

                case 'Camila':
                    image(camilaInfo, 96, 273);
                    break;
            }
            break;
        //INSTRUCCIONES DE TIEMPO
        case 8:
            image(instruccionTiempo,0,0);
            break;
        //INSTRUCCIONES DE OPCIONES
        case 9:
            image(instruccionOpciones,0,0);
            break;
        //INSTRUCCIONES DE ARRASTRE
        case 10:
            //GIF
            background(0);
            break;
        //NIVEL 1 MATCH ARQUETIPO
         case 11:
            image(fondoArquetipo, 0, 0);
            nivel1 = true;
            image(boxes, 235, 421);
            logic.paintCharacter();

             break;
        //RESUMEN ARQUETIPO
        case 12:
            image(resumenArquetipo,0,0);
            break;
        case 13:
            //GIF2
            background(255,0,0);
            break;
        //NIVEL 2 MATCH TRABAJOS
        case 14:
            imageMode(CORNER);
            nivel2 = true;
            image(cargoFondo, 0, 0);
            image(carnetMesa,0,437);
            image(carnets,123,452);
            logic.paint2Character();

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

            }
            if(locked){
                imageMode(CORNER);
                image(candidatosBloqueado,37,35);
                image(arqueotiposBloqueado,36,106);
            }

            if(send){
                imageMode(CORNER);
                image(confirmation, 0, 0);
            }
            break;
        //AGRADECIMIENTOS PARTICIPACIÓN
        case 15:
            imageMode(CORNER);
            image(thanks, 0, 0);
            break;
        //RESULTADOS
        case 16:
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

time();
mouseMoved();
ad();

}

function mouseClicked() {
console.log(pantalla);
    switch (pantalla) {
        case 0:
            if (mouseX > 495 && mouseX < 709 && mouseY > 453 && mouseY < 527) pantalla = 1;
            break;

        case 1:
            if (mouseX > 520 && mouseX < 735 && mouseY > 555 && mouseY < 630) pantalla = 2;
            break;

        case 2:
            if (mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675) pantalla = 3;
            break;

        case 3:
            if (mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675) pantalla = 4;
            break;

        case 4:
            if (mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675) pantalla = 5;
            break;

        case 5:
            if (mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675) pantalla = 6;
            break;
        case 6:
            if (mouseX > 520 && mouseX < 735 && mouseY > 600 && mouseY < 675) pantalla = 7;
            break;
        case 7:
            if (mouseX > 1030 && mouseX < 1235 && mouseY > 622 && mouseY < 698){
                if(nivel1) {
                    pantalla = 11;

                } else{
                    pantalla = 8;
                }
                if(nivel2){
                    pantalla = 14;
                }
            }
            break;
        case 8:
            if (mouseX > 538 && mouseX < 742 && mouseY > 496 && mouseY < 570) pantalla = 9;
            break;
        case 9:
            if (mouseX > 538 && mouseX < 742 && mouseY > 496 && mouseY < 570) pantalla = 10;
            break;
        case 10:
            pantalla = 11;
            break;
        case 11:
            if(!locked){
                if (mouseX > 36 && mouseX < 197 && mouseY > 35 && mouseY < 82) pantalla = 7; 

                if (mouseX > 36 && mouseX < 197 && mouseY > 108 && mouseY < 168) pantalla = 12;
            } 
                if (mouseX > 538 && mouseX < 742 && mouseY > 625 && mouseY < 699) send = true;
                
                if(send){
                    if (mouseX > 378 && mouseX < 586 && mouseY > 359 && mouseY < 434) {
                        pantalla = 11;
                        send = false;                
                    }
                    if(mouseX > 672 && mouseX < 878 && mouseY > 360 && mouseY < 434) {
                        logic.matchArqueotipo();
                        send = false;                
                    }
                }
    
                if(wrong){
                    if (mouseX > 538 && mouseX < 739 && mouseY > 545 && mouseY < 620){
                        repeticionesNivel1 += 1;
                        pantalla = 11;
                        wrong = false;
                    } 
                }

            break;
        case 12:
            if (mouseX > 1140 && mouseX < 1205 && mouseY > 55 && mouseY < 118) {
                if(!nivel2){
                    pantalla = 11;
                }else {
                    pantalla = 14;
                }
            }

            break;
        case 13:
            pantalla = 14;
            logic.addCharacters();
            break;
        case 14:
            if(!locked){
                if (mouseX > 36 && mouseX < 197 && mouseY > 35 && mouseY < 82) pantalla = 7;
                if (mouseX > 36 && mouseX < 197 && mouseY > 108 && mouseY < 168) pantalla = 12;
            } 
            
            if (mouseX > 538 && mouseX < 742 && mouseY > 625 && mouseY < 699) send = true;
            if(send){
                if (mouseX > 378 && mouseX < 586 && mouseY > 359 && mouseY < 434) {
                    pantalla = 14;
                    send = false;                
                }
                if(mouseX > 672 && mouseX < 878 && mouseY > 360 && mouseY < 434) {
                    logic.matchJobs();
                    send = false;                
                }
            }

            if(mouseX > 282 && mouseX < 320 && mouseY > 553 && mouseY < 587){
                cargo = 'mercadotecnia';
            }
            if(mouseX > 556 && mouseX < 594 && mouseY > 553 && mouseY < 587){
                cargo = 'calidad';
            }
            if(mouseX > 830 && mouseX < 868 && mouseY > 553 && mouseY < 587){
                cargo = 'administrativo';
            }
            if(mouseX > 1106 && mouseX < 1144 && mouseY > 553 && mouseY < 587){
                cargo = 'produccion';
            }
            if(mouseX > 536 && mouseX < 742 && mouseY > 623 && mouseY < 697){
                cargo = 'original';
            }
            break;
        case 15:
            if (mouseX > 539 && mouseX < 743 && mouseY > 453 && mouseY < 527) pantalla = 16;  

            break;
        case 16:
            //Reiniciar valores 
            if (mouseX > 539 && mouseX < 743 && mouseY > 606 && mouseY < 680) {
                logic.addCharacters();
                erroresNivel1 = 0;
                erroresNivel2 = 0;
                totalErrores = 0;
                repeticionesNivel1 = 0;
                repeticionesNivel2 = 0;
                totalRepeticiones = 0;
                }
            break;
}
if(timeAd){
    if (mouseX > 538 && mouseX < 739 && mouseY > 545 && mouseY < 620) timeAd = false; 
    
}
}

function mouseMoved() {
    
    switch(pantalla){
        case 0:
            if (mouseX > 495 && mouseX < 709 && mouseY > 453 && mouseY < 527) image(btoInicio, 495, 453);
            break;
        case 1:
            if (mouseX > 520 && mouseX < 735 && mouseY > 555 && mouseY < 630) image(btnEntiendo, 524, 557);
            break;
        case 2:
             if (mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675) image(btnContinuar, 1005, 598);
            break;
        case 3:
            if (mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675) image(btnContinuar, 1000, 598);
            break;
        case 4:
            if (mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675) image(btnContinuar, 1010, 598);
            break;
        case 5:
            if (mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675) image(btnContinuar, 1000, 598);
            break;
        case 6:
            if (mouseX > 520 && mouseX < 735 && mouseY > 600 && mouseY < 675) image(btnVer, 525, 603);
            break;
        case 7:
            if (mouseX > 1032&& mouseX < 1235 && mouseY > 610 && mouseY < 684) image(btnAsignar, 1020, 610);
            if (mouseX > 162 && mouseX < 325 && mouseY > 75 && mouseY < 242) logic.select('David',244);
            if (mouseX > 366 && mouseX < 529 && mouseY > 75 && mouseY < 242) logic.select('Camila',448);
            if (mouseX > 522 && mouseX < 715 && mouseY > 75 && mouseY < 242) logic.select('Jhon',633);
            if (mouseX > 745 && mouseX < 908 && mouseY > 75 && mouseY < 242) logic.select('Estefania',826);
            break;
        case 8:
            if (mouseX > 538 && mouseX < 742 && mouseY > 496 && mouseY < 570) image(btnOk,528,496);
            break;
        case 9:
            if (mouseX > 538 && mouseX < 742 && mouseY > 496 && mouseY < 570) image(btnOk,528,496);
            break;
        case 10:
            break;
        case 11:
            if (mouseX > 538 && mouseX < 745 && mouseY > 626 && mouseY < 700) image(btnContinuar, 640, 670);
            if (mouseX > 36 && mouseX < 197 && mouseY > 35 && mouseY < 82) image(btnCandidatos, 118, 64);
            if (mouseX > 36 && mouseX < 197 && mouseY > 106 && mouseY < 165) image(btnArquetipo, 117, 135);
            break;
        case 12:
            if (mouseX > 1140 && mouseX < 1205 && mouseY > 55 && mouseY < 118) image(btnEquis, 1148, 59);
            break;
        case 13:
            break;
        case 14:
        if(mouseX > 536 && mouseX < 742 && mouseY > 520 && mouseY < 596){
            if(cargo == 'mercadotecnia' || cargo == 'calidad' || cargo == 'administrativo' || cargo == 'produccion'){
                image(btnOk,526,520);
            }
        }
        if(mouseX > 540 && mouseX < 744 && mouseY > 626 && mouseY < 700) image(btnContratar, 640, 660);  
        if (mouseX > 36 && mouseX < 197 && mouseY > 35 && mouseY < 82) image(btnCandidatos, 114, 64);
        if (mouseX > 36 && mouseX < 197 && mouseY > 106 && mouseY < 165) image(btnArquetipo, 114, 135);
        break;

    }
               
}




function mouseDragged() {

    if (pantalla === 11) {

        for (let i = 0; i < characters.length; i++) {

            characters[i].dragged();
        }

    }

    if (pantalla === 14) {

        for (let i = 0; i < characters.length; i++) {

            characters[i].dragJob();
        }

    }

}

function mouseReleased() {

    if (pantalla === 11 || pantalla === 14) {
        for (let i = 0; i < characters.length; i++) {
            characters[i].nodrag();
        }

    }
}



function timeIt() {

    if (counter > 0) {

        if(start){
            counter--;
        }
        }


    console.log('conter'+counter);    

    minutes = floor(counter / 60);
    seconds = counter % 60;

}

function time(){
    if (minutes === 0 && seconds === 0) {
        if (pantalla === 7) {
            logic.matchArqueotipo();
        }
        pantalla = 16;
    }

    if (minutes === 5 && seconds === 0) {
        timeAd = true;
        locked = true;
    }
    if(minutes >= 2){
        stroke('#CF0909');
        fill('#E13E3E');
        
    }

    if(minutes >= 4){
        stroke('#CF3C09');
        fill('#F47236');
    }
    
    if (pantalla === 11 || pantalla === 13 || pantalla === 14) {
        // rectangulo de tiempo
        if(minutes >= 6){
            strokeWeight(4);
            stroke(255);
            fill('#9AEDFF');

        }
        rect(1079, 35, 145, 57, 15);
        textSize(28);
        strokeWeight(3);
        stroke('#276674');
        fill(255);
        text(minutes + ":" + seconds, 1125, 70);
    }

    if(timeAd){
        imageMode(CORNER);
        image(avisoTiempo,0,0);
    }
}

function ad(){
    imageMode(CORNER);
            if(locked){
                image(candidatosBloqueado,37,35);
                image(arqueotiposBloqueado,36,106);
            }

            if(send){
                image(confirmation, 0, 0);
                if(mouseX > 380, mouseX < 585 && mouseY > 360 && mouseY < 434) {
                    image(btnVolver, 370, 358);
                }
                if(mouseX > 672 && mouseX < 878 && mouseY > 360 && mouseY < 434){
                    image(btnConfirmar, 663, 358);
                }
            }

            if(wrong){
                image(bug, 0, 0);
                if(mouseX > 538, mouseX < 739 && mouseY > 545 && mouseY < 620) {
                    image(buttonEntendido, 528, 545);
                }
            }
           
}

