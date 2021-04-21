let pantalla = 0;
let postulante = '';
let cargo = 'original';

let characters = [];

let erroresNivel1 = 0;
let erroresNivel2 = 0;
let totalErrores = 0;
let repeticionesNivel1 = 0;
let puntaje1 = 100;
let puntaje2 = 0;
let totalPuntaje = 0;

let analista;
let diplomatico;
let centinela = false;
let explorador = false;

let viewDavid = false;
let viewCamila = false;
let viewJhon = false;
let viewEstefania = false;

let timer;
let counter = 300;
let seconds, minutes;
let tiempo;

let send = false;
let wrong = false;
let adBoolean = false;
let timeAd = false;
let locked = false;
let nivel2 = false;
let nivel1 = false;
let start = true;
let btnLocked = false;
let zoneAdmi = false;
let finish = false;
let validar = true;
let estado = '';
let logic = new Logic();

function setup() {

    createCanvas(1280, 720);
    logic.addCharacters();
    preload();
}

function preload() {
    //FONDOS
    fondoInicio = loadImage('./resources/fondoInicio.png');
    fondoInstrucciones = loadImage('./resources/instrucciones.png');
    fondoCandidatos = loadImage('./resources/fondoCandidatos.png');
    fondoArquetipo = loadImage('./resources/fondoArquetipo.png');
    fondoTiempo = loadImage('./resources/tiempoAgotado.png');

    instruccionGeneral = loadImage('./resources/instruccionesGeneral.png');
    instruccionTiempo = loadImage('./resources/instruccionesTiempo.png');
    instruccionOpciones = loadImage('./resources/instruccionesOpciones.png');
    instruccionArquetipo = loadImage('./resources/arqInt.png');
    instruccionPuesto = loadImage('./resources/puestoInt.png');
    instrucconError = loadImage('./resources/instruccionesError.png');
    instruccionInfo = loadImage('./resources/instruccionInfo.png');
    gif1 = loadImage('./resources/nuevoGifDef1.gif');
    gif2 = loadImage('./resources/nuevoGifDef2.gif');

    //BOTONES
    btoInicio = loadImage('./resources/btnInicio1.png');
    btnEntiendo = loadImage('./resources/btnEntiendo1.png');
    btnContinuar = loadImage('resources/btnContinuar1.png');
    btnEmpezar = loadImage('resources/btnEmpezar1.png');
    btnVer = loadImage('./resources/btnVer.png');
    btnAsignar = loadImage('./resources/btnAsignar.png');
    btnOk = loadImage('./resources/btnOk.png');
    btnEquis = loadImage('./resources/EquisNormal.png');
    btnVolver = loadImage('./resources/btnVolver.png');
    btnVolverNormal = loadImage('./resources/btnVolverNormal.png')
    btnConfirmar = loadImage('./resources/confirmar.png');
    buttonEntendido = loadImage('./resources/botonEntendido.png');
    btnContratar = loadImage('./resources/contratarBtn.png');
    btnInfo = loadImage('./resources/btnInfo.png');
    btnResultados = loadImage('./resources/btnResultados.png');
    btnContratar2 = loadImage('./resources/btnContratarGris.png');
    btnContinuar2 = loadImage('./resources/btnContinuarGris.png');
    btnContinuarPresionado = loadImage('./resources/contPres.png');
    btnFinalizar = loadImage('./resources/btnFinalizar.png');
    btnAtras = loadImage('./resources/btnAtras.png');

    btnArquetipo = loadImage('./resources/BotonArqueotipo.png');
    btnCandidatos = loadImage('./resources/botonCandidatos.png');

    //ARQUEOTIPOS
    fondoAnalista = loadImage('./resources/Analistas.png');
    fondoDiplomatico = loadImage('./resources/Diplomaticos.png');
    fondoCentinela = loadImage('./resources/Centinelas.png');
    fondoExplorador = loadImage('./resources/Exploradores.png');

    //CV 
    estefaniaInfo = loadImage('./resources/Estefania.png');
    jhonInfo = loadImage('./resources/Jhon.png');
    davidInfo = loadImage('./resources/David.png');
    camilaInfo = loadImage('./resources/Camila.png');

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
    adCv = loadImage ('resources/viewCandidatos.png');

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
            image(fondoCandidatos, 0, 0);
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
            if (nivel2) image(btnVolverNormal, 1022, 610);
            if(adBoolean) image(adCv,0,0);
            break;
        //INSTRUCCIONES DE TIEMPO
        case 8:
            image(instruccionTiempo, 0, 0);
            break;
        //INSTRUCCIONES DE OPCIONES
        case 9:
            image(instruccionOpciones, 0, 0);
            break;
        //INSTRUCCIONES DE ARRASTRE
        case 10:
            //GIF
            image(gif1, 0, 0,1280, 720);
            image(instruccionArquetipo, 400, 20);
            image(btnContinuar, 1030, 620);
            break;
        //NIVEL 1 MATCH ARQUETIPO
        case 11:
            image(fondoArquetipo, 0, 0);
            nivel1 = true;
            image(boxes, 235, 421);
            logic.zone();
            if(!zoneAdmi){
                image(btnContinuar2,527, 625);
            }
            logic.paintCharacter();
            fill(255);
            noStroke();
            text(erroresNivel1, 1211, 152);
            break;
        //RESUMEN ARQUETIPO
        case 12:
            image(resumenArquetipo, 0, 0);
            break;
        case 13:
            //GIF2
            image(gif2, 0, 0,1280, 720);
            image(instruccionPuesto, 400, 20);
            image(btnContinuar, 1030, 630);
            break;
        //NIVEL 2 MATCH TRABAJOS
        case 14:
            imageMode(CORNER);
            nivel2 = true;
            image(cargoFondo, 0, 0);
            image(carnetMesa, 0, 437);
            image(carnets, 123, 452);
            logic.paint2Character();
            imageMode(CORNER);
            logic.zone();
            if(!zoneAdmi){
                image(btnContratar2,527, 617);
            }
            if (send) {
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
            results();
            image(btnContinuar, 515, 550);
            
            break;
        case 17:
            image(instrucconError,0,0);

            break;
        case 18:
            image(instruccionInfo,0,0);
            break;

    }

    time();
    mouseMoved();
    ad();
}

function mouseClicked() {
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
            if (mouseX > 60 && mouseX < 264 && mouseY > 598 && mouseY < 672) pantalla = 2;
            break;

        case 4:
            if (mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675) pantalla = 5;
            if (mouseX > 60 && mouseX < 264 && mouseY > 598 && mouseY < 672) pantalla = 3;
            break;

        case 5:
            if (mouseX > 1000 && mouseX < 1215 && mouseY > 600 && mouseY < 675) pantalla = 6;
            if (mouseX > 60 && mouseX < 264 && mouseY > 598 && mouseY < 672) pantalla = 4;
            break;
        case 6:
            if (mouseX > 520 && mouseX < 735 && mouseY > 600 && mouseY < 675) pantalla = 7;
            break;
        case 7:
            if (mouseX > 1030 && mouseX < 1235 && mouseY > 622 && mouseY < 698) {
                
                if (nivel1) {
                    pantalla = 11;

                } else {
                    if(viewEstefania && viewJhon && viewCamila && viewDavid){
                        pantalla = 8;
                    }else{
                        adBoolean = true;
                    }
                }
                if (nivel2) {
                    pantalla = 14;
                }
            }
        if(adBoolean){
            if (mouseX > 538, mouseX < 739 && mouseY > 545 && mouseY < 620) {
                adBoolean = false;
            }
        }
            break;
        case 8:
            if (mouseX > 538 && mouseX < 742 && mouseY > 496 && mouseY < 570) pantalla = 9;
            break;
        case 9:
            if (mouseX > 538 && mouseX < 742 && mouseY > 496 && mouseY < 570) pantalla = 17;
            break;
        case 10:
            if(mouseX > 1040 && mouseX < 1245 && mouseY > 620 && mouseY < 696){
                pantalla = 11;
            }
            setInterval(timeIt, 1000);
            break;
        case 11:
            if (!locked) {
                if (mouseX > 36 && mouseX < 197 && mouseY > 35 && mouseY < 82) pantalla = 7;

                if (mouseX > 36 && mouseX < 197 && mouseY > 108 && mouseY < 168) pantalla = 12;
            }
            if(zoneAdmi)if (mouseX > 538 && mouseX < 742 && mouseY > 625 && mouseY < 699) send = true;

            if (send) {
                if (mouseX > 378 && mouseX < 586 && mouseY > 359 && mouseY < 434) {
                    pantalla = 11;
                    send = false;
                }
                if (mouseX > 672 && mouseX < 878 && mouseY > 360 && mouseY < 434) {
                    send = false;
                    if (!diplomatico || !analista || !explorador || !centinela) {
                        wrong = true;
                    } else {
                        let operacion = erroresNivel1 * 10;
                        if(erroresNivel1 <= 10){
                            puntaje1 -= operacion;
                        } else{
                            puntaje1 = 0;
                        }
                        zoneAdmi = false;
                        pantalla = 18;
                        nivel1 = false;
                    }
                }
            }

            if (wrong) {
                if (mouseX > 538 && mouseX < 739 && mouseY > 545 && mouseY < 620) {
                    repeticionesNivel1 += 1;
                    pantalla = 11;
                    wrong = false;
                }
            }

            break;
        case 12:
            if (mouseX > 1140 && mouseX < 1205 && mouseY > 55 && mouseY < 118) {
                if (!nivel2) {
                    pantalla = 11;
                } else {
                    pantalla = 14;
                }
            }

            break;
        case 13:
            logic.addCharacters();
            if(mouseX > 1040 && mouseX < 1245 && mouseY > 630 && mouseY < 706){
                pantalla = 14;
            }
            break;
        case 14:
            if (!locked) {
                if (mouseX > 36 && mouseX < 197 && mouseY > 35 && mouseY < 82) pantalla = 7;
                if (mouseX > 36 && mouseX < 197 && mouseY > 108 && mouseY < 168) pantalla = 12;
            }
            if (btnLocked) {
                if(zoneAdmi) if (mouseX > 538 && mouseX < 742 && mouseY > 625 && mouseY < 699) send = true;
                if (send) {
                    if (mouseX > 378 && mouseX < 586 && mouseY > 359 && mouseY < 434) {
                        pantalla = 14;
                        send = false;
                    }
                    if (mouseX > 672 && mouseX < 878 && mouseY > 360 && mouseY < 434) {
                        if (!zoneAdmi) {
                            wrong = true;
                            send = false;

                        } else{
                            logic.matchJobs();
                        estado = "COMPLETADO";
                        start = false;
                        send = false;
                        nivel2 = false;

                        } 
                    }
                }
            }
            if (wrong) {
                if (mouseX > 538 && mouseX < 739 && mouseY > 545 && mouseY < 620) {
                    pantalla = 14;
                    wrong = false;
                }
            }

            if (mouseX > 282 && mouseX < 320 && mouseY > 553 && mouseY < 587) cargo = 'mercadotecnia'; btnLocked = false;
            if (mouseX > 556 && mouseX < 594 && mouseY > 553 && mouseY < 587) cargo = 'calidad'; btnLocked = false;
            if (mouseX > 830 && mouseX < 868 && mouseY > 553 && mouseY < 587) cargo = 'administrativo'; btnLocked = false;
            if (mouseX > 1106 && mouseX < 1144 && mouseY > 553 && mouseY < 587) cargo = 'produccion'; btnLocked = false;

            switch (cargo) {
                case 'mercadotecnia':
                    if (mouseX > 538 && mouseX < 742 && mouseY > 584 && mouseY < 656) cargo = 'original';
                    break;

                case 'calidad':
                    if (mouseX > 538 && mouseX < 742 && mouseY > 584 && mouseY < 656) cargo = 'original';
                    break;

                case 'administrativo':
                    if (mouseX > 538 && mouseX < 742 && mouseY > 584 && mouseY < 656) cargo = 'original';
                    break;

                case 'produccion':
                    if (mouseX > 538 && mouseX < 742 && mouseY > 584 && mouseY < 656) cargo = 'original';
                    break;
                case 'original':
                    btnLocked = true;
                    break;

            }

            break;
        case 15:
            
            if (mouseX > 539 && mouseX < 743 && mouseY > 453 && mouseY < 527) pantalla = 16;

            break;
        case 16:
            //Reiniciar valores 
            break;
        case 17:
            if (mouseX > 538 && mouseX < 742 && mouseY > 496 && mouseY < 570) pantalla = 10;
            break;
        case 18:
            if (mouseX > 538 && mouseX < 742 && mouseY > 496 && mouseY < 570) pantalla = 13;
            break;
    }

    if (timeAd) {
        if (mouseX > 538 && mouseX < 739 && mouseY > 545 && mouseY < 620) timeAd = false;

    }
    if(finish){
        if (mouseX > 538 && mouseX < 739 && mouseY > 545 && mouseY < 620){
            validar = false;
            finish = false;
        if (nivel1) {
            let operacion = erroresNivel1 * 10;
                if(erroresNivel1 <= 10){
                    puntaje1 -= operacion;
                } else{
                    puntaje1 = 0;
                }
                estado = "TIEMPO TERMINADO";
        }
        if (nivel2){
            logic.matchJobs();
            estado = "TIEMPO TERMINADO";
        }
        pantalla = 15;

        } 
    }

}

function mouseMoved() {

    switch (pantalla) {
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
            if (mouseX > 1032 && mouseX < 1235 && mouseY > 610 && mouseY < 684) {
                if (!nivel2) {
                    image(btnAsignar, 1020, 610);
                } else {
                    image(btnVolver, 1020, 610);
                }
            }
            if (mouseX > 162 && mouseX < 325 && mouseY > 75 && mouseY < 242) {
                viewDavid = true
                logic.select('David', 244) 
            } 
            if (mouseX > 366 && mouseX < 529 && mouseY > 75 && mouseY < 242){
                viewCamila = true;
                logic.select('Camila', 448);
            } 
            if (mouseX > 522 && mouseX < 715 && mouseY > 75 && mouseY < 242) {
                viewJhon = true;
                logic.select('Jhon', 633);
            }
            if (mouseX > 745 && mouseX < 908 && mouseY > 75 && mouseY < 242){
                viewEstefania = true;
                logic.select('Estefania', 826);
            } 
            break;
        case 8:
            if (mouseX > 538 && mouseX < 742 && mouseY > 496 && mouseY < 570) image(btnOk, 528, 496);
            break;
        case 9:
            if (mouseX > 538 && mouseX < 742 && mouseY > 496 && mouseY < 570) image(btnOk, 528, 496);
            break;
        case 10:
            if(mouseX > 1040 && mouseX < 1245 && mouseY > 620 && mouseY < 696){
                image(btnContinuarPresionado, 1030, 620);
            }
            break;
        case 11:
            if(zoneAdmi) if (mouseX > 538 && mouseX < 745 && mouseY > 626 && mouseY < 700) image(btnContinuar, 640, 670);
            if (mouseX > 36 && mouseX < 197 && mouseY > 35 && mouseY < 82) image(btnCandidatos, 118, 64);
            if (mouseX > 36 && mouseX < 197 && mouseY > 106 && mouseY < 165) image(btnArquetipo, 117, 135);
            break;
        case 12:
            if (mouseX > 1140 && mouseX < 1205 && mouseY > 55 && mouseY < 118) image(btnEquis, 1148, 59);
            break;
        case 13:
            if(mouseX > 1040 && mouseX < 1245 && mouseY > 630 && mouseY < 706){
                image(btnContinuarPresionado, 1030, 630);
            }
            break;
        case 14:
            imageMode(CORNER);
            if(zoneAdmi) if (mouseX > 540 && mouseX < 744 && mouseY > 626 && mouseY < 700) image(btnContratar, 527, 617);
            if (mouseX > 36 && mouseX < 197 && mouseY > 35 && mouseY < 82) image(btnCandidatos, 36, 35);
            if (mouseX > 36 && mouseX < 197 && mouseY > 106 && mouseY < 165) image(btnArquetipo, 34, 106);
            if (mouseX > 282 && mouseX < 320 && mouseY > 553 && mouseY < 587) image(btnInfo, 270, 546);
            if (mouseX > 556 && mouseX < 594 && mouseY > 553 && mouseY < 587) image(btnInfo, 545, 546);
            if (mouseX > 830 && mouseX < 868 && mouseY > 553 && mouseY < 587) image(btnInfo, 820, 546);
            if (mouseX > 1106 && mouseX < 1144 && mouseY > 553 && mouseY < 587) image(btnInfo, 1096, 546);
            break;
        case 15:
            if (mouseX > 539 && mouseX < 743 && mouseY > 453 && mouseY < 527) image(btnResultados, 530, 453);
            break;
        case 16:
            if(mouseX > 526 && mouseX < 730 && mouseY > 550 && mouseY < 626){
                image(btnContinuarPresionado, 515, 550);
            }
            break;
        case 17:
            if (mouseX > 538 && mouseX < 742 && mouseY > 496 && mouseY < 570) image(btnOk, 528, 493);
            break;
        case 18:
            if (mouseX > 538 && mouseX < 742 && mouseY > 496 && mouseY < 570) image(btnOk, 528, 493);
            break;

    }

    if(pantalla === 3 || pantalla === 4 || pantalla === 5){
        if (mouseX > 60 && mouseX < 264 && mouseY > 598 && mouseY < 672){
            image(btnAtras,50,598);
        }
    }

}

function mouseDragged() {

    if (pantalla === 11) {

        for (let i = 0; i < characters.length; i++) {
            characters[i].dragged();
            //DAVID
            if (characters[0].getPosX() === mouseX && mouseY) {
                posicion = 1;
            }
            //CAMILA
            if (characters[1].getPosX() === mouseX && mouseY) {
                posicion = 2;
            }
            //JHON
            if (characters[2].getPosX() === mouseX && mouseY) {
                posicion = 3;
            }
            //ESTEFANIA
            if (characters[3].getPosX() === mouseX && mouseY) {
                posicion = 4;
            }
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

    logic.matchArqueotipo();
}

function timeIt() {

    if (counter > 0) {

        if (start) {
            counter--;
        }
    }

    minutes = floor(counter / 60);
    seconds = counter % 60;


}

function time() {
    //TERMINO EL TIEMPO
    if(validar){
    if (minutes === 0 && seconds === 0) {
        finish = true;
    }
}
    //FALTAN 5 MINUTOS

    if (minutes === 1 && seconds === 0) {
        timeAd = true;
        locked = true;
    }
    if (minutes >= 1) {
        stroke('#CF0909');
        fill('#E13E3E');

    }

    if (minutes >= 2) {
        stroke('#CF3C09');
        fill('#F47236');
    }

    if (pantalla === 11 || pantalla === 13 || pantalla === 14 || (pantalla === 7 && nivel1 || nivel2)) {
        // rectangulo de tiempo
        if (minutes >= 3) {
            strokeWeight(4);
            stroke(255);
            fill('#9AEDFF');

        }
        rect(1079, 35, 145, 57, 15);
        textSize(28);
        strokeWeight(3);
        stroke('#276674');
        fill(255);
        let cero = " ";
        if (seconds <= 9) {
            cero = "0";
        }
        text(minutes + " " + ":" + cero + seconds, 1118, 70);
    }
}

function ad() {

    if (pantalla == 14) {
        switch (cargo) {

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
        if (mouseX > 538 && mouseX < 742 && mouseY > 584 && mouseY < 656) {
            if (cargo === 'mercadotecnia' || cargo === 'calidad' || cargo === 'administrativo' || cargo === 'produccion') {
                image(btnOk, 528, 584);
            }
        }
    }
    imageMode(CORNER);

    if (locked) {
        if (pantalla === 14 || pantalla === 11) {
            image(candidatosBloqueado, 34, 35);
            image(arqueotiposBloqueado, 34, 106);
        }

    }

    if(adBoolean){
        if (mouseX > 538, mouseX < 739 && mouseY > 545 && mouseY < 620) {
        image(buttonEntendido,528, 545);
        }
    }

    if (send) {
        image(confirmation, 0, 0);
        if (mouseX > 380, mouseX < 585 && mouseY > 360 && mouseY < 434) {
            image(btnVolver, 370, 358);
        }
        if (mouseX > 672 && mouseX < 878 && mouseY > 360 && mouseY < 434) {
            image(btnConfirmar, 663, 358);
        }
    }

    if (wrong) {
        image(bug, 0, 0);
        if (mouseX > 538, mouseX < 739 && mouseY > 545 && mouseY < 620) {
            image(buttonEntendido, 528, 545);
        }
    }

    if(finish){
        image(fondoTiempo,0,0);
        if (mouseX > 538 && mouseX < 739 && mouseY > 545 && mouseY < 620) image(btnFinalizar,530,545);

    }

    imageMode(CORNER);
    if (timeAd) {
        image(avisoTiempo, 0, 0);
        if (mouseX > 538 && mouseX < 739 && mouseY > 545 && mouseY < 620) image(buttonEntendido, 528, 547);
    }

}

function results(){

    fill(0);
    noStroke();
    textSize(28);

    totalErrores = erroresNivel1 + erroresNivel2;
    totalPuntaje = puntaje1 + puntaje2;
    tiempo = counter;
    text(totalErrores, 660, 337);
    //text(totalPuntaje+"/200", 496, 281);
    //text(minutes+" : "+seconds,512,389);
    //text("Repeticiones Nivel1: " + repeticionesNivel1, 680, 429);
    //text("Estado: "+estado,680,500);
}

