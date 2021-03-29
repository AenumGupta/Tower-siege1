class Box{
  constructor(x,y){

      var options={
          restitution:1,
          density:1,
          friction:1.5
      }
      this.body=Bodies.rectangle(x,y,40,40,options);
      World.add(world,this.body);
      this.width=40;
      this.height=40;
      
  }

  display(){
var pos=this.body.position;
push ()
translate (pos.x,pos.y);
//rotate (this.body.angle);
rectMode(CENTER);
rect(0,0,40,40)
pop ();
  }


}
