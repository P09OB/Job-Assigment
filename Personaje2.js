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

    nodrag() {

        if (this.posx > 237 && this.posx < 1042 && this.posy > 406 && this.posy < 596) {

            this.overBox = true;

        } else {
            this.overBox = false;
            this.posx = 457;
            this.posy = 281;

        }

    }

}