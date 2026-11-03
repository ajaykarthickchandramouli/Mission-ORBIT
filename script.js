let acceleration = document.querySelector("#acceleration");
let time = document.querySelector("#time");
let submit = document.querySelector("#sub");
let fuel = document.querySelector("#fuel");
let rockstat = document.querySelector("#rs");
let initialFuel = 0;
let fuelUsed = 0;
let remainingFuel = 0;
let k = 0.1;
let a = 0;
let t = 0;
let g = 10;
let s = 0;
let actualS = 500;
submit .addEventListener("click", subClicked);

function subClicked() {
    a = Number(acceleration.value)/12960;
    t = Number(time.value) * 3600;
    initialFuel = Number(fuel.value);
    if(a != 0 && t != 0 && k != 0){
        rs.innerText = "Rocket launched!"
        s = (a - g)*t**2/2;
        fuelUsed = k * a * t;
        remainingFuel = initialFuel - fuelUsed;
        if (Math.abs((s/1000) - actualS) < 0.01 && remainingFuel >= 0){
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