class Personaje2 extends Character {

    constructor(posx, posy, overBox) {
        super(posx, posy, overBox);

    }

    //Imagenes de los personajes 

    pintar() {

        imageMode(CENTER);

        if (!this.overBox) {
            image(circleLuis, this.posx, this.posy);

        } else {

            image(LSmallCircle, this.posx, this.posy);
        }

    }

    jobs(){
        imageMode(CENTER);

        if (!this.overBox) {
            image(luis, this.posx, this.posy+45);

        } else {

            image(luisCarnet, this.posx, this.posy);
        }

    }


    nodrag() {

        if (this.posx > 128 && this.posx < 1165 && this.posy > 496 && this.posy < 600) {

            this.overBox = true;

        } else {
            this.overBox = false;
            this.posx = 457;
            this.posy = 281;

        }

    }

}