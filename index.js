// Code your solution in this file
function distanceFromHqInBlocks(block){
    
    if(block > 42){
        return block - 42;
    } else{
        return 42 - block;
    }
}

function distanceFromHqInFeet(block){
    let distance = distanceFromHqInBlocks(block);
    return distance * 264;
}

function distanceTravelledInFeet(start, finish){
    if(start > finish){
        return (start - finish) * 264;
    } else {
        return (finish - start) * 264;
    }
}

function calculatesFarePrice(start, finish){
    let distance = distanceTravelledInFeet(start, finish);

    if (distance < 400){
        return 0;
    } else if (distance >= 400 && distance <= 2000){
        let chargeableDistance = distance - 400;
        return chargeableDistance * .02;
    } else if (distance > 2000 && distance < 2500){
        return 25;
    } else{
        return "cannot travel that far";
    }
}