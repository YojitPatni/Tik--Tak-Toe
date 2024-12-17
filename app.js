console.log("console is connected");
let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")


let turno=true;
let count=0;


const winPatern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turno=true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count=0;

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        count++;
        console.log(count);
        if(turno){
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;

        checkWinner();


    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.style.color = "";
    }
}

const showWinner =(winner,g1,g2,g3)=>{
    msg.innerText=`Congratulations, Winner is ${winner} and Scroll to check result`;
    msgContainer.classList.remove("hide");
    g1.style.color="green"
    g2.style.color="green"
    g3.style.color="green"
    disableBoxes();
}

const checkWinner=()=>{
    for(let pattern of winPatern){
        let post1=boxes[pattern[0]].innerText;
        let post2=boxes[pattern[1]].innerText;
        let post3=boxes[pattern[2]].innerText;
        let col1=boxes[pattern[0]];
        let col2=boxes[pattern[1]];
        let col3=boxes[pattern[2]];

        if(post1 != "" && post2!="" && post3!=""){
            if(post1===post2 && post2===post3){
                console.log("winner",post1,post2,post3);
                showWinner(post1,col1,col2,col3);
            }
            else if(count==9){
                msg.innerText="Game is Drawn, Play Again!!!!";
                msgContainer.classList.remove("hide");
                disableBoxes();
            }
            
            
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame)



