class Personaje4 extends Character {

    constructor(posx, posy, overBox) {
        super(posx, posy, overBox);

    }

    //Imagenes de los personajes 

    pintar() {

        imageMode(CENTER);

        if (!this.overBox) {
            image(circleJhon, this.posx, this.posy);

        } else {

            image(JSmallCircle, this.posx, this.posy);
        }

    }

    nodrag() {

        if (this.posx > 237 && this.posx < 1042 && this.posy > 406 && this.posy < 596) {

            this.overBox = true;

        } else {
            this.overBox = false;
            this.posx = 813;
            this.posy = 281;

        }

    }

}