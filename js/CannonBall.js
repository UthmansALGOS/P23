class   CannonBall{
    constructor(x,y){
        this.x=x;
        this.y = y;
        this.r=30;
        this.image = loadImage("./assets/cannonball.png")

        var options=
    {
    isStatic:true
    }
      this.body=Bodies.circle(this.x,this.y,this.r,options);
      World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
      push();
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.r,this.r);
    pop();
    }
    shoot(){
      Matter.Body.setStatic(this.body,false);
      Matter.Body.setVelocity(this.body,{x:30,y:-20});
    }
}