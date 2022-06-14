class Cartilagem{
    constructor(corpoA, corpoB){
        var ultimaligacao = corpoA.body.bodies.length-2;
        this.link = Constraint.create(
            {
                bodyA: corpoA.body.bodies[ultimaligacao],
                pointA: {x:0, y:0},
                bodyB: corpoB,
                pointB: {x:0, y:0},
                length: -10,
                stiffness: 0.01
            }
        );
        World.add(engine.world, this.link);
    }
    sumiu(){
        World.remove(engine.world, this.link);   
    }
}