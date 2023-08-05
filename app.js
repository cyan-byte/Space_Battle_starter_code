const spaceHero = document.createElement("img");
spaceHero.src = "images/space_hero.gif";
document.querySelector('.playerImage').appendChild(spaceHero);

const enemy = document.createElement("img");
enemy.src = "images/enemy.gif";
document.querySelector('.enemyImage').appendChild(enemy);
enemy.style.width = ('256px');


class Ship {
    constructor(shipName, hull, firepower, accuracy){
    this.shipName = shipName
    this.hull = hull // hit points
    this.firepower = firepower // amount of damage done to hull of target with a successful hit
    this.accuracy = accuracy // chance btw 0 and 1 that ship will hit target
    }

    attack(target){
        if(target.hull <= 0){
            console.log(`${target.shipName} defeated!`);
            console.log({humanShip, alienShip});
        }
        else{
            console.log(`${target.shipName} took ${damage} damage. Remaining health: ${target.hull}`);
            console.log({humanShip, alienShip});
        }
    }
}
class HumanShip extends Ship {
    constructor (shipName, hull, firepower, accuracy){
        super(shipName, hull, firepower, accuracy);
    } 
}

class AlienShip extends Ship {
    constructor (shipName, hull, firepower, accuracy){
        super(shipName, hull, firepower, accuracy);
    }
}

// instances
const humanShip = new HumanShip("USS Assembly", 20, 5, .7); // instance of HumanShip class
const alienShip = new AlienShip("Alien Ship", Math.floor(Math.random() * 3) + 3, Math.floor(Math.random() * 2) + 2, Math.floor(Math.random() * .2) + .6);



humanShip.firepower = humanShip.firepower - alienShip.accuracy; // alienShip's hit
alienShip.firepower = alienShip.firepower - humanShip.accuracy; // humanShip's hit

humanShip.hull = humanShip.hull - alienShip.firepower; // humanShip's remaining health points
alienShip.hull = alienShip.hull - humanShip.firepower; // humanShip's remaining health points

function humanHit() {
    while (humanShip.hull > 0 && alienShip.hull > 0) {
        humanShip.firepower = humanShip.firepower - alienShip.accuracy;
        alienShip.firepower = alienShip.firepower - humanShip.accuracy;
    
        humanShip.hull = humanShip.hull - alienShip.firepower;
        alienShip.hull = alienShip.hull - humanShip.firepower;
        
    }
    console.log({humanShip, alienShip});

    
    if (humanShip.hull > 0) {
        console.log(`${humanShip.shipName} wins!`);
        console.log({humanShip, alienShip});

    } else {
        console.log(`${alienShip.shipName} wins!`);
        console.log({humanShip, alienShip});

    }
}

function alienHit() {
    while (alienShip.hull > 0 && humanShip.hull > 0) {
        alienShip.firepower = alienShip.firepower - humanShip.accuracy;
        humanShip.firepower = humanShip.firepower - alienShip.accuracy;
    
        alienShip.hull = alienShip.hull - humanShip.firepower;
        humanShip.hull = humanShip.hull - alienShip.firepower;
    }
    
    if (alienShip.hull > 0) {
        console.log(`${alienShip.shipName} wins!`);
    } else {
        console.log(`${humanShip.shipName} wins!`);
    }
}

humanHit()
alienHit()
alienHit()
alienShip.attack(humanShip) // will not run... ?





// You could be battling six alien ships, each with unique values.

// Example use of accuracy to determine a hit:

// if (Math.random() < alien[0].accuracy) { // <--- Does this go in the instance?
// 	console.log('You have been hit!');
// }

// document.onkeydown = function(e) {
//     console.log(e);
// }