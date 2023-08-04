const spaceHero = document.createElement("img");
spaceHero.src = "images/space_hero.gif";
document.querySelector('.playerImage').appendChild(spaceHero);

const enemy = document.createElement("img");
enemy.src = "images/enemy.gif";
document.querySelector('.enemyImage').appendChild(enemy)


class Ship {
    constructor(shipName, hull, firepower, accuracy){
    this.shipName = shipName
    this.hull = hull // hit points
    this.firepower = firepower // amount of damage done to hull of target with a successful hit
    this.accuracy = accuracy // chance btw 0 and 1 that ship will hit target
    }
// method(){
//     function attack(attacker, defender){
//         const damage = 
// }
}
class HumanShip extends Ship {
    constructor (shipName, hull, firepower, accuracy){
        super(shipName, hull, firepower, accuracy);
    }
    humanHit() {
        console.log(`The ${this.shipName} has been hit`);
    }
}

class AlienShip extends Ship {
    constructor (shipName, hull, firepower, accuracy){
        super(shipName, hull, firepower, accuracy);
    }
    alienHit () {
        
    }
}
const humanShip = new HumanShip("USS Assembly", 20, 5, .7); // instance of HumanShip class
const alienShip = new AlienShip("Alien Ship", Math.floor(Math.random() * 3) + 3, Math.floor(Math.random() * 2) + 2, Math.floor(Math.random() * .2) + .6);

humanShip.humanHit();
// You could be battling six alien ships each with unique values.

// Example use of accuracy to determine a hit:

// if (Math.random() < alien[0].accuracy) { // <--- Does this go in the instance?
// 	console.log('You have been hit!');
// }

// document.onkeydown = function(e) {
//     console.log(e);
// }