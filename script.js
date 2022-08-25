console.log("TicTacToe JS");
let turn="X";
let isgameover=false;
// Function to change turns
const changeTurn =()=>{
    if(turn==="X"){
        return "O";
    }
    else{
        return "X";
    }
}

// function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText === boxtext[e[2]].innerText)&&(boxtext[e[0]].innerText !== '')){
            document.querySelector(".info").innerText = "Congrats! " + boxtext[e[0]].innerText + " WON !";
            isgameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "250px";
        }
    })
}

// Game Logic
let boxes= document.getElementsByClassName("box");
let array1=Array.from(boxes);
array1.forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText ='Turn for '+ turn;
            }
        }
    })
})

// add on click listener to Reset button
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText="";
    });
    turn ='X';
    isgameover=false
    document.getElementsByClassName("info")[0].innerText ='Turn for '+ turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})
