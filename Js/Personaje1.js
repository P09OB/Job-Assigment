class Personaje1 extends Character {

    constructor(posx, posy, overBox) {
        super(posx, posy, overBox);

    }

    //Imagenes de los personajes 

    pintar() {

        imageMode(CENTER);

        if (!this.overBox) {
            image(circleDavid, this.posx, this.posy);

        } else {

            image(DSmallCircle, this.posx, this.posy);
        }

    }

    jobs(){
        imageMode(CENTER);

            if (!this.overBox) {
                image(david, this.posx, this.posy+27);
    
            } else {
    
                image(davidCarnet, this.posx, this.posy);
            }

    }

    nodrag() {

        if (this.posx > 128 && this.posx < 1165 && this.posy > 496 && this.posy < 600) {

            this.overBox = true;

        } else {
            this.overBox = false;
            this.posx = 377;
            this.posy = 281;

        }

    }

}