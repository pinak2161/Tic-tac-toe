let boxes=document.querySelectorAll(".box");
let resetbtn=document.getElementById("reset-btn");
let turnO = true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerHTML="O";
            turnO=false;
        }else{
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled = true;
        checkWinner();
   
    })
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
      let pos1Val = boxes [pattern [0]].innerText;
      let pos2Val = boxes [pattern [1]].innerText;
      let pos3val = boxes [pattern [2]].innerText;

      if (pos1Val != "" && pos2Val != "" && pos3val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3val) {
          console.log(`Winner is ${pos1Val}`);
        }
      }
    }
  };