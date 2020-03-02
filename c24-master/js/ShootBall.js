class ShootBall{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain); 
    }

    attach(body){
        this.chain.bodyA = bodyA;
    }

    shoot(){
        this.chain.bodyA = null;
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        push();
        stroke(3);
        line(pointA.x,pointA.y,pointB.x, pointB.y);
        pop();
        
    }

}
