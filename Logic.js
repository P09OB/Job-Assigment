class Logic {

    constructor(){
        let characters = [];

    }

    paintCharacter(){
        for (let i = 0; i < characters.length; i++) {
            characters[i].pintar();
        }
    }

    paint2Character(){
        for (let i = 0; i < characters.length; i++) {
            characters[i].jobs();
        }
    }

    addCharacters(){

        if(pantalla === 13 || pantalla === 16){
            characters.splice(0);
        }
        if(pantalla < 15){
        characters.push(new Personaje1(377, 281, false));
        characters.push(new Personaje3(554, 281, false));
        characters.push(new Personaje4(733, 281, false));
        characters.push(new Personaje5(917, 281, false));
        }
        
        
    }

    matchJobs() {


        for (let i = 0; i < characters.length; i++) {
            console.log(i);
    
            
            // Estefania ANALISTA
            if (characters[3].getPosX() > 951 && characters[3].getPosX() < 1165 && characters[3].getPosY() > 496 && characters[3].getPosY() < 660) {
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
    
            if (characters[2].getPosX() > 677 && characters[2].getPosX() < 890 && characters[2].getPosY() > 496 && characters[2].getPosY() < 660) {
                centinela = true;
    
            } else {
                centinela = false;
            }
    
            //Camila MERCADOTECNIA
    
            if (characters[1].getPosX() > 128 && characters[1].getPosX() < 341 && characters[1].getPosY() > 341 && characters[1].getPosY() < 660) {
                explorador = true;
    
            } else {
                explorador = false;
            }
    
        }
    
    
        if (!analista) erroresNivel2 += 1;
        if (!diplomatico) erroresNivel2 += 1;
        if (!centinela) erroresNivel2 += 1;
        if (!explorador) erroresNivel2 += 1;
    
    
        if (!analista || !diplomatico || !explorador || !centinela) {
            console.log("Numero de erroresNivel2: " + erroresNivel2);
        } else {
            pantalla = 15;
        }
    }

     matchArqueotipo() {

        for (let i = 0; i < characters.length; i++) {
    
        
            // Estefania ANALISTA
            if (characters[3].getPosX() > 235 && characters[3].getPosX() < 418 && characters[3].getPosY() > 421 && characters[3].getPosY() < 596) {
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
    
            if (characters[2].getPosX() > 652 && characters[2].getPosX() < 836 && characters[2].getPosY() > 421 && characters[2].getPosY() < 596) {
                centinela = true;
    
            } else {
                centinela = false;
            }
    
            //Camila EXPLORADOR
    
            if (characters[1].getPosX() > 861 && characters[1].getPosX() < 1045 && characters[1].getPosY() > 421 && characters[1].getPosY() < 596) {
                explorador = true;
    
            } else {
                explorador = false;
            }
    
        }
    
        if (!analista) erroresNivel1 += 1;
        if (!diplomatico) erroresNivel1 += 1;
        if (!centinela) erroresNivel1 += 1;
        if (!explorador) erroresNivel1 += 1;
    
    
        if (!analista || !diplomatico || !explorador || !centinela) {
            wrong = true;
            console.log("Numero de erroresNivel1: " + erroresNivel1);
        } else {
            pantalla = 13;
            logic.addCharacters();
        }
    }
     select(state, x){
        postulante = state;
        noFill();
        stroke(207, 60, 9);
        strokeWeight(7);
        circle(x, 158, 170);
    }


}
