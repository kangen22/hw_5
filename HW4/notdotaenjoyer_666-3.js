class Warrior {
    constructor() {
        this._experience = 100;
        this._level = 1;
        this._rank = "Pushover";
        this._achievements = [];
        this._ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
    }

    level() {
        return this._level;
    }

    experience() {
        return this._experience;
    }

    rank() {
        return this._rank;
    }

    achievements() {
        return this._achievements;
    }

    updateRank() {
        this._rank = this._ranks[Math.floor(this._level / 10)];
    }

    training([description, expPoints, minLevel]) {
        if (this._level >= minLevel) {
            this._experience += expPoints;
            if (this._experience > 10000) this._experience = 10000;
            this._level = Math.min(Math.floor(this._experience / 100), 100);
            this.updateRank();
            this._achievements.push(description);
            return description;
        } else {
            return "Not strong enough";
        }
    }

    battle(enemyLevel) {
        if (enemyLevel < 1 || enemyLevel > 100) {
            return "Invalid level";
        }

        const levelDiff = enemyLevel - this._level;

        if (levelDiff >= 5 && this._ranks.indexOf(this.rank()) < this._ranks.indexOf(this._ranks[Math.floor(enemyLevel / 10)])) {
            return "You've been defeated";
        }

        if (levelDiff === 0) {
            this._experience += 10;
        } else if (levelDiff === -1) {
            this._experience += 5;
        } else if (levelDiff < -1) {
            this._experience += 0;
        } else {
            this._experience += 20 * levelDiff * levelDiff;
        }

        if (this._experience > 10000) this._experience = 10000;

        this._level = Math.min(Math.floor(this._experience / 100), 100);
        this.updateRank();

        if (levelDiff <= -2) {
            return "Easy fight";
        } else if (levelDiff >= 1) {
            return "An intense fight";
        } else {
            return "A good fight";
        }
    }
}

var bruce_lee = new Warrior();
console.log(bruce_lee.level());        // => 1
console.log(bruce_lee.experience());   // => 100
console.log(bruce_lee.rank());         // => "Pushover"
console.log(bruce_lee.achievements()); // => []
console.log(bruce_lee.training(["Defeated Chuck Norris", 9000, 1])); // => "Defeated Chuck Norris"
console.log(bruce_lee.experience());   // => 9100
console.log(bruce_lee.level());        // => 91
console.log(bruce_lee.rank());         // => "Master"
console.log(bruce_lee.battle(90));     // => "A good fight"
console.log(bruce_lee.experience());   // => 9105
console.log(bruce_lee.achievements()); // => ["Defeated Chuck Norris"]