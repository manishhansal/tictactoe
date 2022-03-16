let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let div4 = document.getElementById("div4");
let div5 = document.getElementById("div5");
let div6 = document.getElementById("div6");
let div7 = document.getElementById("div7");
let div8 = document.getElementById("div8");
let div9 = document.getElementById("div9");


let g = new Array(9).fill("M");
console.log(g);


let stk = [];
console.log(stk)
function displayX(a) {

    if(a===1 && stk[stk.length-1]!=="X") {

        if(div1.innerText === ""){
            div1.innerText = "X";
            stk.push("X");
            g[0] = "X";
        }
        gameOver()
    }
    else if(a===2 && stk[stk.length-1]!=="X"){

        if(div2.innerText === ""){
            div2.innerText = "X";
            stk.push("X");
            g[1] = "X";
        }
        gameOver()
    }
    else if(a===3 && stk[stk.length-1]!=="X"){

        if(div3.innerText === ""){
            div3.innerText = "X";
            stk.push("X");
            g[2] = "X";
        }
        gameOver()
    }
    else if(a===4 && stk[stk.length-1]!=="X"){

        if(div4.innerText === ""){
            div4.innerText = "X";
            stk.push("X");
            g[3] = "X";
        }
        gameOver()
    }
    else if(a===5 && stk[stk.length-1]!=="X"){

        if(div5.innerText === ""){
            div5.innerText = "X";
            stk.push("X");
            g[4] = "X";
        }
        gameOver()
    }
    else if(a===6 && stk[stk.length-1]!=="X"){

        if(div6.innerText === ""){
            div6.innerText = "X";
            stk.push("X");
            g[5] = "X";
        }
        gameOver()
    }
    else if(a===7 && stk[stk.length-1]!=="X"){

        if(div7.innerText === ""){
            div7.innerText = "X";
            stk.push("X");
            g[6] = "X";
        }
        gameOver()
    }
    else if(a===8 && stk[stk.length-1]!=="X"){

        if(div8.innerText === ""){
            div8.innerText = "X";
            stk.push("X");
            g[7] = "X";
        }
        gameOver()
    }
    else if(a===9 && stk[stk.length-1]!=="X"){

        if(div9.innerText === ""){
            div9.innerText = "X";
            stk.push("X");
            g[8] = "X";
        }
        gameOver()
    }

    else if(a===1 && stk[stk.length-1]!=="O") {

        if(div1.innerText === ""){
            div1.innerText = "O";
            stk.push("O");
            g[0] = "O";
        }
        gameOver()
    }
    else if(a===2 && stk[stk.length-1]!=="O"){

        if(div2.innerText === ""){
            div2.innerText = "O";
            stk.push("O");
            g[1] = "O";
        }
        gameOver()
    }
    else if(a===3 && stk[stk.length-1]!=="O"){

        if(div3.innerText === ""){
            div3.innerText = "O";
            stk.push("O");
            g[2] = "O";
        }
        gameOver()
    }
    else if(a===4 && stk[stk.length-1]!=="O"){

        if(div4.innerText === ""){
            div4.innerText = "O";
            stk.push("O");
            g[3] = "O";
        }
        gameOver()
    }
    else if(a===5 && stk[stk.length-1]!=="O"){

        if(div5.innerText === ""){
            div5.innerText = "O";
            stk.push("O");
            g[4] = "O";
        }
        gameOver()
    }
    else if(a===6 && stk[stk.length-1]!=="O"){

        if(div6.innerText === ""){
            div6.innerText = "O";
            stk.push("O");
            g[5] = "O";
        }
        gameOver()
    }
    else if(a===7 && stk[stk.length-1]!=="O"){

        if(div7.innerText === ""){
            div7.innerText = "O";
            stk.push("O");
            g[6] = "O";
        }
        gameOver()
    }
    else if(a===8 && stk[stk.length-1]!=="O"){

        if(div8.innerText === ""){
            div8.innerText = "O";
            stk.push("O");
            g[7] = "O";
        }
        gameOver()
    }
    else if(a===9 && stk[stk.length-1]!=="O"){

        if(div9.innerText === ""){
            div9.innerText = "O";
            stk.push("O");
            g[8] = "O";
        }
        gameOver()
    }
};

let winner = document.getElementById("winner");
function gameOver() {
    if(g[0]==="X" && g[4]==="X" && g[8]==="X"){
        console.log("X WON");
        winner.textContent = "Congrats! You won, Manish.";
        document.getElementById("playAgain").style.display = "block";
        document.getElementById("container").style.display = "none";
    }
    else if(g[0]==="X" && g[1]==="X" && g[2]==="X"){
        console.log("X WON");
        winner.textContent = "Congrats! You won, Manish.";
        document.getElementById("playAgain").style.display = "block";
        document.getElementById("container").style.display = "none";
    }
    else if(g[3]==="X" && g[4]==="X" && g[5]==="X"){
        console.log("X WON");
        winner.textContent = "Congrats! You won, Manish.";
        document.getElementById("playAgain").style.display = "block";
        document.getElementById("container").style.display = "none";
    }
    else if(g[6]==="X" && g[7]==="X" && g[8]==="X"){
        console.log("X WON");
        winner.textContent = "Congrats! You won, Manish.";
        document.getElementById("playAgain").style.display = "block";
        document.getElementById("container").style.display = "none";
    }
    else if(g[0]==="X" && g[3]==="X" && g[6]==="X"){
        console.log("X WON");
        winner.textContent = "Congrats! You won, Manish.";
        document.getElementById("playAgain").style.display = "block";
        document.getElementById("container").style.display = "none";
    }
    else if(g[2]==="X" && g[5]==="X" && g[8]==="X"){
        console.log("X WON");
        winner.textContent = "Congrats! You won, Manish.";
        document.getElementById("playAgain").style.display = "block";
        document.getElementById("container").style.display = "none";
    }
    else if(g[2]==="X" && g[4]==="X" && g[6]==="X"){
        console.log("X WON");
        winner.textContent = "Congrats! You won, Manish.";
        document.getElementById("playAgain").style.display = "block";
        document.getElementById("container").style.display = "none";
    }
    else if(g[1]==="X" && g[4]==="X" && g[7]==="X"){
        console.log("X WON");
        winner.textContent = "Congrats! You won, Manish.";
        document.getElementById("playAgain").style.display = "block";
        document.getElementById("container").style.display = "none";
    }



    else if(g[0]==="O" && g[4]==="O" && g[8]==="O"){
        console.log("O WON");
        winner.textContent = "Congrats! You won, Abhishek.";
        document.getElementById("playAgain").style.display = "block";
        document.getElementById("container").style.display = "none";
    }
    else if(g[0]==="O" && g[1]==="O" && g[2]==="O"){
        console.log("O WON");
        winner.textContent = "Congrats! You won, Abhishek.";
        document.getElementById("playAgain").style.display = "block";
        document.getElementById("container").style.display = "none";
    }
    else if(g[3]==="O" && g[4]==="O" && g[5]==="O"){
        console.log("O WON");
        winner.textContent = "Congrats! You won, Abhishek.";
        document.getElementById("playAgain").style.display = "block";
        document.getElementById("container").style.display = "none";
    }
    else if(g[6]==="O" && g[7]==="O" && g[8]==="O"){
        console.log("O WON");
        winner.textContent = "Congrats! You won, Abhishek.";
        document.getElementById("playAgain").style.display = "block";
        document.getElementById("container").style.display = "none";
    }
    else if(g[0]==="O" && g[3]==="O" && g[6]==="O"){
        console.log("O WON");
        winner.textContent = "Congrats! You won, Abhishek.";
        document.getElementById("playAgain").style.display = "block";
        document.getElementById("container").style.display = "none";
    }
    else if(g[1]==="O" && g[4]==="O" && g[7]==="O"){
        console.log("O WON");
        winner.textContent = "Congrats! You won, Abhishek.";
        document.getElementById("playAgain").style.display = "block";
        document.getElementById("container").style.display = "none";
    }
    else if(g[2]==="O" && g[5]==="O" && g[8]==="O"){
        console.log("O WON");
        winner.textContent = "Congrats! You won, Abhishek.";
        document.getElementById("playAgain").style.display = "block";
        document.getElementById("container").style.display = "none";
    }
    else if(g[2]==="O" && g[4]==="O" && g[6]==="O"){
        console.log("O WON");
        winner.textContent = "Congrats! You won, Abhishek.";
        document.getElementById("playAgain").style.display = "block";
        document.getElementById("container").style.display = "none";
    }
    
}


function playAgain() {
    window.location = "index.html";
}


// for menu button
$(function() {
    $(".material-icons").click(function() {
        $(".leftNavbar").slideToggle(500);
    });
})