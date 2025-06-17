const r=1,p=2,s=3;
let temp;

const choice={
    1:"rock",
    2:"paper",
    3:"scissor"
};

const imageChoice={
    1:"/RockPaperScissor/media/rockImageOnly.png",
    2:"/RockPaperScissor/media/paperImageOnly.png",
    3:"/RockPaperScissor/media/scissorImageOnly.png"
}


function getRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

let userCount=0;
let computerCount=0;

// console.log(choice[getRandomNumber()]);

// let possibleCombination=[
//     [r,r],[r,p],[r,s],
//     [p,r],[p,p],[p,s],
//     [s,r],[s,p],[s,s]
// ]

let rock=document.getElementById("userChoosesRock");
let paper=document.getElementById("userChoosesPaper");
let scissor=document.getElementById("userChoosesScissor");
let userImg=document.getElementById("userImage");
let computerImg=document.getElementById("computerImage");

let usrScore=document.querySelector(".userScore");
let computrScore=document.querySelector(".computerScore");

let resetBtn=document.querySelector(".reset");

function checkWinOrLose(computerMove,possibleCombination,temp)
{
    for (let el of possibleCombination){

    if(el[0]===el[1])
    {
        userImg.src=imageChoice[temp];
        computerImg.src=imageChoice[computerMove];
        console.log(`Computer chooses ${choice[computerMove]}.You choose ${choice[temp]}.Draw!!!`);
    }

    else if(el[0]-el[1]===1||el[0]-el[1]===-1){
        userImg.src=imageChoice[temp];
        computerImg.src=imageChoice[computerMove];
        el[0]>el[1]?(console.log(`Computer chooses ${choice[computerMove]}.You choose ${choice[temp]}.You win!!!`),userCount++,usrScore.innerHTML=userCount):(console.log(`Computer chooses ${choice[computerMove]}.You choose ${choice[temp]}.Computer wins!!!`),computerCount++,computrScore.innerHTML=computerCount);
    }

    else if(el[0]-el[1]===2||el[0]-el[1]===-2){
        userImg.src=imageChoice[temp];
        computerImg.src=imageChoice[computerMove];
        el[0]>el[1]?(console.log(`Computer chooses ${choice[computerMove]}.You choose ${choice[temp]}.Computer wins!!!`),computerCount++,computrScore.innerHTML=computerCount):(console.log(`Computer chooses ${choice[computerMove]}.You choose ${choice[temp]}.You win!!!`),userCount++,usrScore.innerHTML=userCount);
    }
    
    else{
        console.log("Error in program.");
    }
}}

rock.addEventListener("click",()=>
{
    let computerMove=getRandomNumber();
    let possibleCombination=[
    [r,computerMove]];

    checkWinOrLose(computerMove,possibleCombination,r);
    
});

paper.addEventListener("click",()=>
{
    let computerMove=getRandomNumber();
    let possibleCombination=[
    [p,computerMove]]

    checkWinOrLose(computerMove,possibleCombination,p);
});


scissor.addEventListener("click",()=>{
    let computerMove=getRandomNumber();
    let possibleCombination=[
    [s,computerMove]]

     checkWinOrLose(computerMove,possibleCombination,s);
});

resetBtn.addEventListener("click",()=>
{
    userCount=0;
    computerCount=0;
    usrScore.innerHTML=userCount;
    computrScore.innerHTML=computerCount;
    userImg.src="";
    computerImg.src="";
})
