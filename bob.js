class Bob{
constructor(x,y,r){
var options ={
//'isStatic':true,
'restitution':1,
'friction':0,
'density': 0.8
}
this.r = r;
this.body = Bodies.circle(x,y,(this.r)/2,options);
World.add(world,this.body);
}    
display(){
var pos = this.body.position;
push();
translate(pos.x,pos.y);
fill("red")
ellipseMode(RADIUS);
ellipse(0,0,this.r,this.r);
pop();
}

}