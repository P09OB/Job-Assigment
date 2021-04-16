class Personaje5 extends Character {

    constructor(posx, posy, overBox) {
        super(posx, posy, overBox);

    }

    //Imagenes de los personajes 

    pintar() {

        imageMode(CENTER);

        if (!this.overBox) {
            image(circleEstefania, this.posx, this.posy);

        } else {

            image(ESmallCircle, this.posx, this.posy);
            this.posicion = 4;

        }

    }

    jobs(){
        imageMode(CENTER);

        if (!this.overBox) {
            image(estefania, this.posx, this.posy+27);

        } else {

            image(estefaniaCarnet, this.posx, this.posy);
        }

    }

    nodrag() {

        if (this.posx > 128 && this.posx < 1165 && this.posy > 496 && this.posy < 600)  {

            this.overBox = true;

        } else {
            this.overBox = false;
            this.posx = 917;
            this.posy = 281;

        }
    }

}