let coin = document.querySelector('.coin-cost'); 
let parsedCoin = parseFloat(coin.innerHTML);

let clickerCost = document.querySelector('.clicker-cost');
let parsedClickerCost = parseFloat(clickerCost.innerHTML);
let clickerLevel = document.querySelector(".clicker-level")
let clickerIncrease = document.querySelector(".clicker-increase")
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML)


let pinecilCost = document.querySelector('.pinecil-cost');
let parasedPinecilCost = parseFloat(pinecilCost.innerHTML);
let pinecilLevel = document.querySelector('.pinecil-level')
let pinecilIncrease = document.querySelector('.pinecil-increase')
let parsedPinecilIncrease = parseFloat(pinecilIncrease.innerHTML)

let bartoszCost = document.querySelector('.bartosz-cost');
let parasedBartoszCost = parseFloat(bartoszCost.innerHTML);
let bartoszLevel = document.querySelector('.bartosz-level')
let bartoszIncrease = document.querySelector('.bartosz-increase')  
let parsedBartoszIncrease = parseFloat(bartoszIncrease.innerHTML)



let noraCost = document.querySelector('.Nora-cost');
let parsedNoraCost = parseFloat(noraCost.innerHTML);
let noraLevel = document.querySelector('.Nora-level')
let noraIncrease = document.querySelector('.Nora-increase')
let parsedNoraIncrease = parseFloat(noraIncrease.innerHTML)



let gpcText = document.getElementById("gpc-text")
let gpsText = document.getElementById("gps-text")



let gpc = 1;

let gps = 0;

function incrementCoin() {
    let parsedCoin = parseFloat(coin.innerHTML);
    coin.innerHTML = Math.round(parsedCoin += gpc);
}
function buyClicker(){
    let parsedCoin = parseFloat(coin.innerHTML);
    let parsedClickerCost = parseFloat(clickerCost.innerHTML);
    let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML);

    if(parsedCoin >= parsedClickerCost){
        coin.innerHTML = Math.round(parsedCoin -= parsedClickerCost);

        clickerLevel.innerHTML = parseInt(clickerLevel.innerHTML) + 1;

        parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.03).toFixed(2))
        clickerIncrease.innerHTML = parsedClickerIncrease
        gpc += parsedClickerIncrease

        parsedClickerCost *= 1.18;
        clickerCost.innerHTML = Math.round(parsedClickerCost)

    }  
}





function buyPinecil(){
    let  parsedCoin = parseFloat(coin.innerHTML);
    let parasedPinecilCost = parseFloat(pinecilCost.innerHTML);
    let  parsedPinecilIncrease= parseFloat(pinecilIncrease.innerHTML);

    if(parsedCoin >= parasedPinecilCost){
        coin.innerHTML = Math.round(parsedCoin -= parasedPinecilCost );

        pinecilLevel.innerHTML ++

        parsedPinecilIncrease = parseFloat((parsedPinecilIncrease * 1.03).toFixed(2))
        pinecilIncrease.innerHTML = parsedPinecilIncrease
        gps += parsedPinecilIncrease

        parasedPinecilCost *= 1.18;
        pinecilCost.innerHTML = Math.round(parasedPinecilCost)

    }  
}



function buyNora(){
    let  parsedCoin = parseFloat(coin.innerHTML);
    let parasedNoraCost = parseFloat(noraCost.innerHTML);
    let  parsedNoraIncrease= parseFloat(noraIncrease.innerHTML);

    if(parsedCoin >= parasedNoraCost){
        coin.innerHTML = Math.round(parsedCoin -= parasedNoraCost );

        noraLevel.innerHTML ++

        parsedNoraIncrease = parseFloat((parsedNoraIncrease * 1.03).toFixed(2))
        noraIncrease.innerHTML = parsedNoraIncrease
        gps += parsedNoraIncrease

        parasedNoraCost *= 1.18;
        noraCost.innerHTML = Math.round(parasedNoraCost)

    }  
}

function buyBartosz(){
    let  parsedCoin = parseFloat(coin.innerHTML);
    let parsedBartoszCost = parseFloat(bartoszCost.innerHTML);
    let  parsedBartoszIncrease = parseFloat(bartoszIncrease.innerHTML);
    if(parsedCoin >= parasedBartoszCost){
        coin.innerHTML = Math.round(parsedCoin -= parasedBartoszCost);
        bartoszLevel.innerHTML ++
        parsedBartoszIncrease = parseFloat((parsedBartoszIncrease * 1.03).toFixed(2))
        bartoszIncrease.innerHTML = parsedBartoszIncrease
        gps += parsedBartoszIncrease
        parasedBartoszCost *= 1.18;
        bartoszCost.innerHTML = Math.round(parsedBartoszCost)
    }
}

setInterval(() => {
    let parsedCoin = parseFloat(coin.innerHTML);
    parsedCoin += gps / 10;
    coin.innerHTML = Math.round( parsedCoin);
    gpcText.innerHTML = Math.round(gpc);
    gpsText.innerHTML = Math.round(gps);

}, 1000);