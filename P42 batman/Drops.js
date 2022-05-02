class Drops{
    constructor(x,y){
        var options = {
            restitution: 1,
            friction: 0.1,
            isStatic:false
           
        }
        this.rain = Bodies.circle(x,y,5,options)
        this.x=x
        this.y=y
        this.velocityY=3
        
    }
    
    
    update(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain,{x:random(0,400), y:random(0,400)})    
        }
        
    }

    display(){		
			push()
			fill("blue");
			ellipse(this.x,this.y,5, 5);
			pop()
	}

}