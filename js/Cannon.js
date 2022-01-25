class Cannon{
    constructor(x,y,width,height,angle){
        this.x=x;
        this.y=y;
        this.w=width;
        this.h=height;
        this.a=angle;
        this.cannonbase = loadImage("assets/cannonBase.png");
        this.canon = loadImage("assets/canon.png");
    
    }
    
    diplay(){
        if(keyIsDown(39) && this.angle<=70){
            this.angle+=1;

        }



        if(keyIsDown(37) && this.angle>=30){
            this.angle-=1;

        }
        //creating cannon top
        push();
        translate(this.x,this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.canon,0,0,this.w,this.h);
        pop();

        //cannon bottom
        image(this.cannonbase,70,20,200,200);
        noFill();
        
    }
}
