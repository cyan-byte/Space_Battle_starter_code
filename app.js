const spaceHero = document.createElement("img");
spaceHero.src = "images/space_hero.gif";
document.querySelector('.playerImage').appendChild(spaceHero);

const enemy = document.createElement("img");
enemy.src = "images/enemy.gif";
document.querySelector('.enemyImage').appendChild(enemy);
enemy.style.width = ('256px');

class Ship {
    constructor(shipName, health, firepower, accuracy){
    this.shipName = shipName
    this.health = health // hit points
    this.firepower = firepower // amount of damage done to health of target with a successful hit
    this.accuracy = accuracy // chance btw 0 and 1 that ship will hit target
    }
    attack(attacker, defender) {
        const damage = Math.max(attacker.firepower - defender.health, 0);
        defender.health -= damage;
        if(defender.health <= 0) {
            console.log(`${defender.shipName} destroyed!`);
        }else {
            console.log(`The ${attacker.shipName}'s firepower hits the opponent with ${damage} damage. ${defender.shipName} has ${defender.health} health points remaining.`);
        }
    }
}

class HumanShip extends Ship {
    constructor (shipName, health, firepower, accuracy){
        super(shipName, health, firepower, accuracy);
    } 
}

class AlienShip extends Ship {
    constructor (shipName, health, firepower, accuracy){
        super(shipName, health, firepower, accuracy);
    }
}

// instances
const humanShip = new HumanShip("USS Assembly", 20, 5, .7); // instance of HumanShip class
const alienShip = new AlienShip("Alien Ship", Math.floor(Math.random() * 3) + 3, Math.floor(Math.random() * 2) + 2, Math.floor(Math.random() * .2) + .6);

// alienShip.attack(alienShip, humanShip);
// humanShip.attack(humanShip, alienShip);
// alienShip.attack(alienShip, humanShip);
// humanShip.attack(humanShip, alienShip);

// document.onkeydown = function(e) {
//     console.log(e);
// }

const humanStats = document.querySelector('.playerStats');
humanStats.textContent = '';
const humanStatsUl = document.createElement('ul');
const humanHealthLi = document.createElement('li');
const humanFirepowerLi = document.createElement('li');
const humanAccuracyLi = document.createElement('li');
humanHealthLi.textContent = `Health : ${humanShip.health}`;
humanFirepowerLi.textContent = `Firepower : ${humanShip.firepower}`;
humanAccuracyLi.textContent = `Accuracy : ${humanShip.accuracy}`;

humanStats.appendChild(humanStatsUl);
humanStatsUl.appendChild(humanHealthLi);
humanStatsUl.appendChild(humanFirepowerLi);
humanStatsUl.appendChild(humanAccuracyLi);
// humanStats.append(humanHealthLi, humanFirepowerLi, humanAccuracyLi);
///////////////////////
const alienStats = document.querySelector('.enemyStats');
alienStats.textContent = '';
const alienStatsUl = document.createElement('ul');
const alienHealthLi = document.createElement('li');
const alienFirepowerLi = document.createElement('li');
const alienAccuracyLi = document.createElement('li');
alienHealthLi.textContent = `Health : ${alienShip.health}`;
alienFirepowerLi.textContent = `Firepower : ${alienShip.firepower}`;
alienAccuracyLi.textContent = `Accuracy : ${alienShip.accuracy}`;

alienStats.appendChild(alienStatsUl);
alienStatsUl.appendChild(alienHealthLi);
alienStatsUl.appendChild(alienFirepowerLi);
alienStatsUl.appendChild(alienAccuracyLi);
const isAlive = Ship.health > 0;

// Game Round
function gameRound() {
     while (alienShip.health > 0 && humanShip.health > 0) {
        humanShip.attack(humanShip, alienShip);
        if (alienShip.isAlive === false){
            alert(`You won!`);
            break;
        } 
        alienShip.attack(alienShip, humanShip);
        if (humanShip.health <= 0) {
            alert (`You lost!`);
            break;
        }
    }
}
gameRound();

if (alienShip.health <= 0) {
    alert (`${alienShip.shipName} is DEFEATED and CANNOT ATTACK anymore.`)
}
