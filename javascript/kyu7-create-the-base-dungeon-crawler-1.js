class Player {
  constructor(name = 'Player', health = 100.00, position = {x:0,y:0}, damage = 10.00, luck = 1.00) {

    this.name = name;
    if(null==name || ''==name || typeof(name) === 'number' || typeof(name) === 'boolean'|| typeof(name) === 'object')
    this.name = "Player";
    this.health = health;
    this.position = position;
    this.damage = damage;
    this.luck = luck;
  }
}

class Game {
  constructor(name = 'Player', level = 0, health = 100.00, position = {x:0,y:0}, damage = 10.00, luck = 1.00) {
    this.level = level++;
    this.floors = [];
    this.player = new Player(name, health, position, damage, luck);
  }
}

class Monster {
  constructor(level) {
    this.level = level++
  }
}

class Map {
  constructor(level) {
    this.level = level++
  }
}
