
//await sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
let level = 1;
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
async function somethingcool() {
    for(let i = 0; i < 10; i++){
        await sleep(500);
        console.log("I was here");
        let num = Math.floor(Math.random() * 101)
        sc.innerHTML = num;
        list[i] = num;
    }
    await sleep(500);
    sc.innerHTML = "done";

    list.forEach(e => {
        console.log(e);
    });

}


  