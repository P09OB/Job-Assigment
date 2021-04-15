class Personaje3 extends Character {

    constructor(posx, posy, overBox) {
        super(posx, posy, overBox);

    }

    //Imagenes de los personajes 

    pintar() {

        imageMode(CENTER);

        if (!this.overBox) {
            image(circleCamila, this.posx, this.posy);

        } else {

            image(CSmallCircle, this.posx, this.posy);
        }

    }

    jobs(){
        imageMode(CENTER);

        if (!this.overBox) {
            image(camila, this.posx, this.posy+27);

        } else {

            image(camilaCarnet, this.posx, this.posy);
        }

    }

    nodrag() {

        if (this.posx > 128 && this.posx < 1165 && this.posy > 496 && this.posy < 600)  {

            this.overBox = true;

        } else {
            this.overBox = false;
            this.posx = 554;
            this.posy = 281;

        }

    }

}