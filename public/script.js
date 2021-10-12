
//await sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
let level = 1;
const lev = document.getElementById("level");
lev.innerHTML = "Level: " + level;

const hf = document.getElementById("havingfun");
function doS(x) {
    let rand = Math.floor(Math.random() * x);
    hf.innerHTML = rand;
    console.log(rand);
}

const ht = document.getElementById("headsortails");
function headsortails() {
    let rand = Math.floor(Math.random() * 10);
    if(rand % 2 == 1){
        ht.innerHTML = "heads";
    }else
        ht.innerHTML = "tails";
    console.log(rand + " " + ht.innerHTML);
}
let list = [];

const sc = document.getElementById("somethingcool");
const numbers = document.getElementById("numbers");
const some = document.getElementById("some");

//GAME START
async function somethingcool() { 
    some.style.display = "none";
    for(let i = 0; i < 3; i++){
        await sleep(1000-(50*level));
        let num = Math.floor(Math.random() * 11)
        sc.innerHTML = "-";
        await sleep(50);
        sc.innerHTML = num;
        list[i] = num;
    }
    await sleep(500);
    sc.innerHTML = "done";
    // list.forEach(e => {
    //     console.log(e);
    // });
}

const cAnswer = document.getElementById("correctOrNot");
const cc = document.getElementById("check");

//CHECKING ANSWER
async function check() {
    console.log(cc.value);
    //let str = 
    let str = cc.value.split(" ");
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
        cAnswer.innerHTML = "Not!";
        sc.innerHTML = "Try again";
        some.innerHTML = "Start";
        some.style.display = "inline-block";
        cc.value = "";
    }
}

function getLevel() {
    lev.innerHTML = "Level: " + level;
}

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }