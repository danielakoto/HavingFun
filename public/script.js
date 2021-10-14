
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
let list = [];


const sc = document.getElementById("somethingcool");
const numbers = document.getElementById("numbers");
const some = document.getElementById("some");

//GAME START
async function somethingcool() { 
    some.style.display = "none";
    if(level >= 1 && level <= 5) {
        for(let i = 0; i < 3; i++){
                await sleep(1000-(50*level));
                let num = Math.floor(Math.random() * amount[0]);
                sc.innerHTML = "-";
                await sleep(50);
                sc.innerHTML = num;
                list[i] = num;
        }
    } else if(level >= 6 && level <= 10){
        for(let i = 0; i < 3; i++){
            await sleep(1000-(10*level));
            let num = Math.floor(Math.random() * amount[1])+10;
            sc.innerHTML = "-";
            await sleep(50);
            sc.innerHTML = num;
            list[i] = num;
        }
    } else if (level >= 11 && level <= 15) {
        for(let i = 0; i < 3; i++){
            await sleep(1000);
            let num = Math.floor(Math.random() * amount[2])+100;
            sc.innerHTML = "-";
            await sleep(50);
            sc.innerHTML = num;
            list[i] = num;
        }
    } else {
        for(let i = 0; i < 3; i++){
            await sleep(1000);
            let num = Math.floor(Math.random() * amount[3])+1000;
            sc.innerHTML = "-";
            await sleep(50);
            sc.innerHTML = num;
            list[i] = num;
        }
    }

    await sleep(500);
    sc.innerHTML = "done";
}

const cAnswer = document.getElementById("correctOrNot");
const cc = document.getElementById("check");

//CHECKING ANSWER
async function check() {
    console.log(cc.value);
    //let str = 
    let str = cc.value.split(",");
    let arr = [parseInt(str[0]),parseInt(str[1]),parseInt(str[2])];
    arr.forEach(e=> {
        console.log(e)
    })
    console.log(arraysEqual(list, arr));
    if(arraysEqual(list, arr) == true) {
        cAnswer.innerHTML = " ";
        await sleep(100);
        cAnswer.innerHTML = "Correct!";
        await sleep(100);
        level++;
        getLevel();
        sc.innerHTML = "Continue!";
        some.innerHTML = "Next";
        some.style.display = "inline-block";
        cc.value = "";
    }else {
        level = 1;
        getLevel();
        cAnswer.innerHTML = " ";
        await sleep(100);
        cAnswer.innerHTML = "Not! <br> Numbers: " +  JSON.stringify(list);
        sc.innerHTML = "Try again";
        some.innerHTML = "Start";
        some.style.display = "inline-block";
        cc.value = "";
    }
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
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
}