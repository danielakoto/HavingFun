
//  await sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//init level for interface and game functionality 
let level = 1;
const lev = document.getElementById("level");
lev.innerHTML = "Level: " + level;

//init array of the amount or numbers that can be shown on screen (1,2,3,4)
let amount = [11, 91, 891, 8991];

// declare array list which will take in the random numbers that are shown on the screen
let list = "";


const headerMessage = document.getElementById("header-message");
const numbers = document.getElementById("numbers");
const startButtonID = document.getElementById("start-button-id");
const submitButtonID = document.getElementById("submit-button-id")
const cAnswer = document.getElementById("correctOrNot");
const cc = document.getElementById("check");
//GAME START
async function handleStartFunc() {
    cc.value = ""
    list = ""
    startButtonID.style.display = "none";
    submitButtonID.style.display = "inline-block"
    if(level >= 1 && level <= 5) {
        for(let i = 0; i < 3; i++){
                await sleep(1000-(50*level));
                let num = Math.floor(Math.random() * amount[0]);
                headerMessage.innerHTML = "-";
                await sleep(50);
                headerMessage.innerHTML = num;
                list += num;
        }
    } else if(level >= 6 && level <= 10){
        for(let i = 0; i < 3; i++){
            await sleep(1000-(10*level));
            let num = Math.floor(Math.random() * amount[1])+10;
            headerMessage.innerHTML = "-";
            await sleep(50);
            headerMessage.innerHTML = num;
            list += num;
        }
    } else if (level >= 11 && level <= 15) {
        for(let i = 0; i < 3; i++){
            await sleep(1000);
            let num = Math.floor(Math.random() * amount[2])+100;
            headerMessage.innerHTML = "-";
            await sleep(50);
            headerMessage.innerHTML = num;
            list += num;
        }
    } else {
        for(let i = 0; i < 3; i++){
            await sleep(1000);
            let num = Math.floor(Math.random() * amount[3])+1000;
            headerMessage.innerHTML = "-";
            await sleep(50);
            headerMessage.innerHTML = num;
            list += num;
        }
    }

    await sleep(500);
    headerMessage.innerHTML = "done";
}


//CHECKING ANSWER
async function check() {
    
    let str = cc.value 

    if(list == str) {
        cAnswer.innerHTML = "";
        await sleep(100);
        cAnswer.innerHTML = "Correct!";
        await sleep(100);
        level++;
        getLevel();
        headerMessage.innerHTML = "Continue!";
        startButtonID.innerHTML = "Next";
    } else {
        level = 1;
        getLevel();
        cAnswer.innerHTML = "";
        await sleep(100);
        cAnswer.innerHTML = "Wrong! <br> Numbers: " + list;
        headerMessage.innerHTML = "Try again";
        startButtonID.innerHTML = "Start";
    }
    cc.value = "";
    startButtonID.style.display = "inline-block";
    submitButtonID.style.display = "none"
}

//Level getter
function getLevel() {
    lev.innerHTML = "Level: " + level;
}

//check if 2 arrays are equal
function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
}

function pressNum(num) {
    cc.value += num;
}
function removeNum() {
    cc.value = cc.value.slice(0, -1); 
}