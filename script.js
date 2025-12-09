let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#newgame");
let winMsg = document.querySelector("#winmsg");
let drawMsg = document.querySelector("#drawmsg");
msgContainer = document.querySelector("#msgcontainer");


let winner;
let count = 0;
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
    }
}

const reStart = () => {
    enableBoxes();
    count = 0;
    for(box of boxes){
        box.innerText = "";
    }
    msgContainer.classList.add("hide");
    winMsg.classList.add("hide");
    drawMsg.classList.add("hide");
    newGame.classList.add("hide");
    reset.classList.remove("hide");
}


let turnO = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        if(turnO){
            box.innerText = " O";
            turnO = false; 
        }
        else{
            box.innerText = " X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


const checkWinner = () => {
    for(let pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
    
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if( pos1Val === pos2Val && pos2Val === pos3Val){
                msgContainer.classList.remove("hide");
                winMsg.classList.remove("hide");
                newGame.classList.remove("hide");
                reset.classList.add("hide");
                drawMsg.classList.add("hide");
                winner = pos1Val;
            winMsg.innerText = ` Congratulation!! winner is ${winner}`;
                for(let box of boxes){
                    box.disabled = true;
                };
                turnO = false;
                count = 0;
            }
            else{
                if(count == 9){
                    msgContainer.classList.remove("hide");
                    drawMsg.classList.remove("hide");
                    newGame.classList.remove("hide");
                    reset.classList.add("hide");
                    winMsg.classList.add("hide");
                    count = 0;
                }
            }
            
        }
                
    }
};

newGame.addEventListener("click",reStart);
reset.addEventListener("click",reStart);
