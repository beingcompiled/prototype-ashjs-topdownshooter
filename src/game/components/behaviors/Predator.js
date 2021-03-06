define(['ash', 'utils/Point',], function (Ash, Point) {
    
    var Predator = Ash.Class.extend({
        
        constructor: function(maxSpeed, perception, homePos) {

            // TO DO: separate wander system for friendlies?
			this.maxSpeed = maxSpeed;
            this.perception = perception; // range notice target
            //this.accuracy = accuracy; // % deviation from target position

            this.isHome = true;
			this.homePos = homePos;
            this.targetPos = homePos;

            this.wanderSpeed = maxSpeed;
            this.wanderRange = _.random(200, 300);
            this.wanderPos = new Point(
                homePos.x + _.random(-this.wanderRange, this.wanderRange), 
                homePos.y + _.random(-this.wanderRange, this.wanderRange)
            );
        }
    });

    return Predator;
});
