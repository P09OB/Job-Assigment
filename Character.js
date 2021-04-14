class Character{
    
    constructor(posx,posy,overBox){

        this.posx = posx;
        this.posy = posy;
        this.overBox = false;
        
    }

    zone(){

    }

    dragged(){
        if(mouseX > 160 && mouseX < 1046 && mouseY >0 && mouseY <670){
            if(dist(this.posx,this.posy,mouseX,mouseY)<78) {
                this.posx= mouseX;
                this.posy= mouseY;
              }

        }

        if (mouseX > this.posx - 78  
            && mouseX < this.posx + 78 
            && mouseY > this.posy - 78 
            && mouseY < this.posy + 78) {
            this.overBox = true;
        }
        
    }

    dragJob(){
        if(mouseX > 128 && mouseX < 1165 && mouseY >0 && mouseY <670){
            if(dist(this.posx,this.posy,mouseX,mouseY)<78) {
                this.posx= mouseX;
                this.posy= mouseY;
              }

        }

        if (mouseX > this.posx - 78  
            && mouseX < this.posx + 78 
            && mouseY > this.posy - 78 
            && mouseY < this.posy + 78) {
            this.overBox = true;
        }
        
    }

    getPosX(){
        return this.posx;
    }
    getPosY(){
        return this.posy;
    }
}