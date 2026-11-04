let acceleration = document.querySelector("#acceleration");
let time = document.querySelector("#time");
let submit = document.querySelector("#sub");
let rockstat = document.querySelector("#rs");
let initialFuel = 235;
let fuelUsed = 0;
let remainingFuel = 0;
let k = 1;
let a = 0;
let t = 0;
let g = 10;
let s = 0;
let actualS = 500;
submit .addEventListener("click", subClicked);

function subClicked() {
    a = Number(acceleration.value);
    t = Number(time.value);
    if(a != 0 && t != 0 && k != 0){
        rs.innerText = "Rocket launched!";
        fuelUsed = k * a * t;
        remainingFuel = initialFuel - fuelUsed
        s = (a - g)*t**2/2;
        if (Math.abs((s/1000) - actualS) < 0.01 && Math.abs(remainingFuel) > 0){
            rs.innerText = "Rocket reached the orbit successfully! ", remainingFuel
        }
        else{
            rs.innerText = "Rocket failed!", remainingFuel;
        }

}
else{
    rockstat.innerText = "Enter the required inputs!";
}
}
