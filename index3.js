class GameCharacter {
  constructor(name, life, armour, x, y) {
    this.name = `${name} is a character`;
    this.life = life;
    this.armour = armour;
    this.position = {
      x: x,
      y: y
    };
  }

  receiveHit(lifePointsRemoved) {
    this.life -= lifePointsRemoved;
    console.log(`remaining life points are ${this.life}`);

    if (this.life <= 0) {
      this.die();
    }
  }

  die() {
      debugger
    console.log(this.name + " is dead :)");
    // init die animation
  }

  move(x, y) {
    console.log("moving to " + x + " " + y);

    this.position.x = x;
    this.position.y = y;
  }
}

class Wizard extends GameCharacter {
  constructor(name, armour, x, y) {
    super(name, 20 + randomInt(1, 10), armour, x, y);

    this.nSpells = randomInt(10, 20);
  }

  castSpell() {
    this.nSpells--;

    if (this.nSpells < 0) {
      this.nSpells = 0;
    }

    console.log("casting spell");
  }
}

class Elf extends GameCharacter {
  constructor(name, armour, x, y) {
    super(name, 30 + randomInt(1, 10), armour, x, y);

    this.nArrows = randomInt(2, 4);
  }

  _log(str) {
    console.log(str + ":::" + new Date());
  }

  die() {
      super.die()
      this._log("elf dying")
  }

  drawArrow() {
    // dan likes this :)
    // if (--this.nArrows < 0) this.nArrows = 0;

    this.nArrows--;

    if (this.nArrows < 0) {
      this.nArrows = 0;
    }

    if (this.nArrows === 0) {
      this._log("You cannot draw any more arrows");
    } else {
      this._log("shooting arrow. Total arrows remaining: " + this.nArrows);
    }
  }
}

class Warrior extends GameCharacter {
  hitsWithAxe() {
    console.log("axe hitting");
  }
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let army = Array(10)
  .fill()
  .map((soldier, idx) => {
    const soldierType = randomInt(1, 2);

    switch (soldierType) {
      case 1:
        return new Elf(
          "Elf " + idx,
          80,
          Math.random() * 1200,
          Math.random() * 900
        );
        break;
      case 3:
        return new Warrior(
          "Warrior " + idx,
          100,
          100,
          Math.random() * 1200,
          Math.random() * 900
        );
        break;
      case 2:
        return new Wizard(
          "Wizard " + idx,
          100,
          100,
          Math.random() * 1200,
          Math.random() * 900
        );
        break;
    }
  });

// setInterval(() => {
//     let deathSoldiers = army.filter(soldier => soldier.life <= 0)

//     console.log(deathSoldiers)
// }, 1000)
