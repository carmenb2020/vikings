const Soldier = require("../soldier/Soldier");

class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    };

    addViking(viking) {
        this.vikingArmy.push(viking);
    };

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    };

    vikingAttack() {
        const vikingRandom = Math.floor(Math.random() * this.vikingArmy.length);
        const saxonRandom = Math.floor(Math.random() * this.saxonArmy.length);
        const vikingSoldier = this.vikingArmy[vikingRandom];
        const saxonSoldier = this.saxonArmy[saxonRandom];
        saxonSoldier.receiveDamage(vikingSoldier.strength);
        if (saxonSoldier.health <= 0) {
            this.saxonArmy.splice(saxonRandom, 1);
            return ("A Saxon has died in combat");
        };
        return("saxonSoldier.health");
    }
    
    saxonAttack() {
        const vikingRandom = Math.floor(Math.random() * this.vikingArmy.length);
        const saxonRandom = Math.floor(Math.random() * this.saxonArmy.length);
        const vikingSoldier = this.vikingArmy[vikingRandom];
        const saxonSoldier = this.saxonArmy[saxonRandom];
        vikingSoldier.receiveDamage(saxonSoldier.strength);
        if (vikingSoldier.health <= 0) {
            this.vikingArmy.splice(vikingRandom, 1);
            //return ("A Saxon has died in combat");
        };
        return(`${vikingSoldier.name} has received ${saxonSoldier.strength} points of damage`);
    }

    showStatus() {
        if (this.saxonArmy.length == 0) {
            return ("Vikings have won the war of the century!");
        }
    }
}

 module.exports = War;
