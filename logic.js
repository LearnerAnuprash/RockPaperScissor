const r=1,p=2,s=3;

function getRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

// let possibleCombination=[
//     [r,r],[r,p],[r,s],
//     [p,r],[p,p],[p,s],
//     [s,r],[s,p],[s,s]
// ]

let rock=document.getElementById("userChoosesRock");
let paper=document.getElementById("userChoosesPaper");
let scissor=document.getElementById("userChoosesScissor");



rock.addEventListener("click",()=>
{
    let possibleCombination=[
    [r,getRandomNumber()]]

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


});

paper.addEventListener("click",()=>
{
    let possibleCombination=[
    [p,getRandomNumber()]]

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
    }}
});


scissor.addEventListener("click",()=>{
    let possibleCombination=[
    [s,getRandomNumber()]]

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
    }}
});


