const r=1,p=2,s=3;
let el;
let possibleCombination=[
    [r,r],[r,p],[r,s],
    [p,r],[p,p],[p,s],
    [s,r],[s,p],[s,s]
]

for (let el of possibleCombination){

    if(el[0]===el[1])
    {
        console.log("draw");
    }

    else if(el[0]-el[1]===1||el[0]-el[1]===-1){
        el[0]>el[1]?console.log(`${el[0]} wins ${el[1]}`):console.log(`${el[1]} wins ${el[0]}`);
    }

    else if(el[0]-el[1]===2||el[0]-el[1]===-2){
        el[0]>el[1]?console.log(`${el[1]} wins ${el[0]}`):console.log(`${el[0]} wins ${el[1]}`);
    }
    
    else{
        console.log("Error in program.");
    }
}
