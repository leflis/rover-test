//rover.js
function createRover(mapSize, startPos){
    //start validating my values
    if(mapSize == null || startPos == null){
        alert("Your map size or starting position cannot be blank.")
        return null;
    }
    if(isNaN(mapSize.x) || isNaN(mapSize.y) || isNaN(startPos.x) || isNaN(startPos.y)){
        alert("Please input real numbers into the map size and starting position.")
        return null;
    }
    if(startPos.d.toUpperCase() != 'N' && startPos.d.toUpperCase() != 'S' && startPos.d.toUpperCase() != 'E' && startPos.d.toUpperCase() != 'W'){
        alert("Please input N S W or E into the starting position.")
        return null;
    }
    //ridiculously large validation
    //this would probably need to go into another separate function in the long run
    if(startPos.x > mapSize.x || startPos.y > mapSize.y || mapSize.x < 1 || mapSize.x > 1000 || mapSize.y < 1 || mapSize.y > 1000 ){
       alert("Please review your inputs.") 
        return null;
    }   else{
        this.map = {};
        this.map.x = mapSize.x;
        this.map.y = mapSize.y;
        this.myPos = {};
        this.myPos.x = startPos.x;
        this.myPos.y = startPos.y;
        this.myPos.d = startPos.d;
    }
    this.move = function(direction){
        switch(direction){
            case "L":
                this.turnLeft(myPos.d);
                break;
            case "R":
                this.turnRight(myPos.d);
                break;
            case "M":
                this.moveForward();
                break;
        }
        //map size handler -- the rover will never go off the cliff!
        if(myPos.x > mapSize.x ){
            myPos.x = mapSize.x;   
        }
        if(myPos.y > mapSize.y ){
            myPos.y = mapSize.y;
        }
        if(myPos.x < 0){
            myPos.x = 0;
        }
        if(myPos.y < 0){
            myPos.y = 0;
        }
    }
    
    this.turnLeft = function(direction){
        switch (direction){
            case "N":
                myPos.d = "W"
                break;
            case "S":
                myPos.d = "E"
                break;
            case "E":
                myPos.d = "N"
                break;
            case "W":
                myPos.d = "S"
                break;
        }
    }
    this.turnRight = function(direction){
        switch (direction){
            case "N":
                myPos.d = "E"
                break;
            case "S":
                myPos.d = "W"
                break;
            case "E":
                myPos.d = "S"
                break;
            case "W":
                myPos.d = "N"
                break;
        }
    }
    this.moveForward = function(){
        switch(myPos.d){
            case "N":
                myPos.y = parseInt(myPos.y) + 1;
                break;
            case "S":
                myPos.y = parseInt(myPos.y) - 1;
                break;
            case "E":
                myPos.x = parseInt(myPos.x) + 1;
                break;
            case "W":
                myPos.x = parseInt(myPos.x) - 1;
                break;
        }
    }
    this.runMovements = function(directions){
        if(directions == null){
            return false;
        }
        for(i=0;i<directions.length;i++){
            if(directions[i].toUpperCase() != 'L' && directions[i].toUpperCase() != 'R' & directions[i].toUpperCase() != 'M'){
                return false;   
            }
        }
        for(i=0;i<directions.length;i++){
            this.move(directions[i]);
        }
        return true;
    };
    this.getPosition = function(){
        return this.myPos;
    };
    return this;
};

