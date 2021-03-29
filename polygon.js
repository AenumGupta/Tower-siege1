class Polygon{
    constructor(x,y,radius){
        var options={
            isStatic:false
        }

        this.body= Bodies.circle(100,800,50,options);
        this.body=loadImage(polygonImg);
        World.add(world,this.body)

        this.x=100;
        this.y=800;
        this.radius=50;
    }

display(){

    imageMode(RADIUS);
    ellipseMode(CENTER);
    image(polygonImg,100,800,50,50);
    
        
    }

}