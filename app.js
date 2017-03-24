//Test all the functions first
function test(){
    var retVal = false;
    if(!testCreateRover()) {
        console.log('testCreateRover failed');
        return false;
    }
    if(!testGetPosition()) {
        console.log('testGetPosition failed');
        return false;
    }
    if(!testRunMovements()) {
        console.log('testRunMovements failed');
        return false;
    } 
    console.log("SUCCESS!")
    return true;
}

function testCreateRover(){
    //good map size bad position
    var mapSize = {x: 5,y: 5};
    var startPos = {x: 8,y: 12,d: 'N'};
    var realRover = createRover(mapSize, startPos);
    if (realRover != null) return false;
    //bad map size bad position
    mapSize = {x: -5,y: -5};
    startPos = {x: 1,y: 2,d: 'N'};
    realRover = createRover(mapSize, startPos);
    if (realRover != null) return false;
    //bad map size good position
    mapSize = {x: -5,y: -5};
    startPos = {x: 1,y: 2,d: 'N'};
    realRover = createRover(mapSize, startPos);
    if (realRover != null) return false;
    //nulls
    mapSize = null;
    startPos = null;
    realRover = createRover(mapSize, startPos);
    if (realRover != null) return false;
    //nonsense
    mapSize = {x: 5,y: 5};
    startPos = {x: 1,y: 2,d: 'grsgh'};
    realRover = createRover(mapSize, startPos);
    if (realRover != null) return false;
    //delimiter
    mapSize = {x: 1001,y: 1005};
    startPos = {x: 1,y: 2,d: 'N'};
    realRover = createRover(mapSize, startPos);
    if (realRover != null) return false;
    //good map size good position
    mapSize = {x: 5,y: 5};
    startPos = {x: 1,y: 2,d: 'N'};
    realRover = createRover(mapSize, startPos);
    if (realRover == 'undefined' || realRover == null) return false;
    

    return true;


}
function testGetPosition(){
    //create good rover test
    var mapSize = {x: 5,y: 5};
    var startPos = {x: 1,y: 2,d: 'N'};
    var realRover = createRover(mapSize, startPos);
    var returnedPos = realRover.getPosition();
    if(returnedPos.x != startPos.x || returnedPos.y != startPos.y || returnedPos.d != startPos.d){
        return false;
    }

    //create good rover test
    mapSize = {x: 10,y: 10};
    startPos = {x: 5,y: 8,d: 'W'};
    realRover = createRover(mapSize, startPos);
    returnedPos = realRover.getPosition();
    if(returnedPos.x != startPos.x || returnedPos.y != startPos.y || returnedPos.d != startPos.d){
        return false;
    }

    //create good rover test
    mapSize = {x: 20,y: 20};
    startPos = {x: 10,y: 15,d: 'S'};
    realRover = createRover(mapSize, startPos);
    returnedPos = realRover.getPosition();
    if(returnedPos.x != startPos.x || returnedPos.y != startPos.y || returnedPos.d != startPos.d){
        return false;
    }
    
    return true;
}


function testRunMovements(){
    //bad directions
    var directions = 'NSWE';
    var mapSize = {x: 20,y: 20};
    var startPos = {x: 10,y: 15,d: 'S'};
    var realRover = createRover(mapSize, startPos);
    if (realRover.runMovements(directions)) return false;

    //null directions
    directions = null;
    mapSize = {x: 20,y: 20};
    startPos = {x: 10,y: 15,d: 'S'};
    realRover = createRover(mapSize, startPos);
    if (realRover.runMovements(directions)) return false;

    //nonsense directions
    directions = 'jdsljsdklf'
    mapSize = {x: 20,y: 20};
    startPos = {x: 10,y: 15,d: 'S'};
    realRover = createRover(mapSize, startPos);
    if (realRover.runMovements(directions)) return false;

    //good directions
    directions = 'LMLMLMLMM';
    mapSize = {x: 5,y: 5};
    startPos = {x: 1,y: 2,d: 'N'};
    var endPos = {x: 1,y: 3, d: 'N' }
    realRover = createRover(mapSize, startPos);
    if (!realRover.runMovements(directions)) return false;
    returnedPos = realRover.getPosition();
    if(returnedPos.x != endPos.x || returnedPos.y != endPos.y || returnedPos.d != endPos.d){
        return false;
    }
    return true;
}

//run the test
//test();


//Click action
function go(){
    var mapX = document.getElementById("mapX").value;
    var mapY = document.getElementById("mapY").value;
    var posX = document.getElementById("posX").value.toUpperCase();
    var posY = document.getElementById("posY").value.toUpperCase();
    var posD = document.getElementById("posD").value.toUpperCase();
    var directions = document.getElementById("directions").value.toUpperCase();
    var rover = createRover(
        getMapSizeObj(mapX,mapY),
        getPosObj(posX,posY,posD)
    );
    if(rover.runMovements(directions)) {
        var endPos = rover.getPosition();
        alert(JSON.stringify(endPos,  null, 4));
    } else {
        alert("Please input accurate directions");
    }
    
    
}

//Turn the map coords into an object
function getMapSizeObj(mapX,mapY){
    var map = mapX+mapY
    if (map.length != 2 ){
        alert("Please enter correct coordinates for the map size.");    
        mapXY.focus();
    }
    return {x: map[0], y: map[1]};
}

//Turn the starting position into an object
function getPosObj(posX,posY,posD){
    var pos = posX+posY+posD
    if (pos.length != 3){
        alert("Please enter correct coordinates for the starting position.");
        posXYD.focus();
    }
    return {x: pos[0], y: pos[1], d: pos[2]};
}

