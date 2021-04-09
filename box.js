class Box{
    constructor(x,y,width,height){
        var options = {
            isStatic : false,
            // density : 0.5,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        // this.r = Math.round(random(0,255));
        // this.g = Math.round(random(0,255));
        // this.b = Math.round(random(0,255));
    }
    display(){
        var pos =this.body.position;
        push ();
        translate (pos.x, pos.y);
        rotate (this.body.angle);
        rectMode(CENTER);
        fill("red");
        rect(0, 0, this.width, this.height);
        pop ();
      }
}