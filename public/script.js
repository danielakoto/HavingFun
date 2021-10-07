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
