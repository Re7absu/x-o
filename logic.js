let grideIteam = document.getElementsByClassName("square")
let curentTurn = "x"
let gameIsFinish = false
let boarArray = [
    "0" , "1" , "2",
    "3" , "4" , "5",
    "6" , "7" , "8"
]


for (const iteam of grideIteam){
    iteam.addEventListener("click" , function(){

        if (gameIsFinish){
            return
        }

        let value = iteam.getAttribute("value")

        //يساعدني بأن اذا المستخدم ضغط على المربع باكس ورجع ضغط بنفس المربع ماراح يتغير 
        let index = value 
        if (boarArray[index] =="x" ||boarArray["o"]){
            return
        }



        let squareContent = document.querySelector(`.square[value="${value}"]`)
        squareContent.innerHTML = curentTurn    
    
        boarArray[index] = curentTurn

        console.log(boarArray)

        evaluateBoard ()
        if (curentTurn == "x")
        {
            curentTurn = "o"
        }else{
            curentTurn = "x"
        }
        
       document.getElementById("instruction").textContent = `${curentTurn} turn`

    })   


    function evaluateBoard()
    {

        //ايش المربعات اللي نقدر نقول في فوز
        if(
            //row
            (boarArray[0] == boarArray[1] && boarArray[1] == boarArray[2]) ||
            (boarArray[3] == boarArray[4] && boarArray[4] == boarArray[5]) ||
            (boarArray[6] == boarArray[7] && boarArray[7] == boarArray[8]) ||

            //colm
            (boarArray[0] == boarArray[3] && boarArray[3] == boarArray[6]) ||
            (boarArray[1] == boarArray[4] && boarArray[4] == boarArray[7]) ||
            (boarArray[2] == boarArray[5] && boarArray[5] == boarArray[8]) ||
            
            //
            (boarArray[0] == boarArray[4] && boarArray[4] == boarArray[8]) ||
            (boarArray[2] == boarArray[4] && boarArray[4] == boarArray[6])   
        ){
            var winner = curentTurn == "x" ? "x" : "o"
            gameIsFinish = true
            alertify.alert(`${winner} won!`)
        }

        //اذا في تعادل او فاضي 
        var isDraw = true 
        for (square of boarArray) {
            if (square !="x" && square !="o")
            {
                isDraw = false 
            }
        }

        if(isDraw){
            gameIsFinish = true
            alertify.alert("draw")
        }


    }

}

document.getElementById("rest-btn").addEventListener("click" , function(){
    rest()
})

function rest(){
    for(iteam of grideIteam){
        let value = iteam.getAttribute("value")
        let squareContent = document.querySelector(`.square[value="${value}"]`)
        squareContent.innerHTML = " "

        boarArray = [
            "0" , "1" , "2",
            "3" , "4" , "5",
            "6" , "7" , "8"
        ]
    }
    //عشان بعد مايكون في تعادل ترجع تصفر اللعبة 
    gameIsFinish = false

    //عشان يرجع مرة ثانية x بعد ما اسوي رسيت 
    curentTurn = "x"
    document.getElementById("instruction").textContent = `${curentTurn} turn`

}