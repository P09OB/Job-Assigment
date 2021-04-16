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

    jobs(){
        imageMode(CENTER);


        if (!this.overBox) {
            image(jhon, this.posx, this.posy+27);

        } else {

            image(jhonCarnet, this.posx, this.posy);
            this.posicion = 3;

        }

    }

    nodrag() {

        if (this.posx > 128 && this.posx < 1165 && this.posy > 496 && this.posy < 600)  {

            this.overBox = true;

        } else {
            this.overBox = false;
            this.posx = 733;
            this.posy = 281;

        }

    }

}