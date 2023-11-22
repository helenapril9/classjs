    class Character {
    constructor(name, type, health, level, attack, defence) { 
        this.name = name;    
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence
    }
    
    checkType(type){
    let arr = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (arr.includes(type) == false) {        
        throw new Error ("Нет такого типа");                
    }
    }
    
    checkName(name) {
    if (typeof(name) !== 'string') {
        throw new Error ("Не строка");                
    } 
    if (name.length < 2 || name.length > 10 ) {
        throw new Error ("Количество символов в имени должно быть от 2 до 10 ");                
    } 
    }    
}
    class Daemon extends Character {     
    constructor (name, type, health, level, attack, defence) {
    super(name, type, health, level,attack, defence);
    this.attack = 10;
    this.defence = 40;
    super.checkType(type);
    super.checkName(name);
    } 
}

class Bowman extends Character {     
    constructor (name, type, health, level, attack, defence) {
    super(name, type, health, level,attack, defence);
    this.attack = 25;
    this.defence = 25;
    super.checkType(type);
    super.checkName(name);
    } 
}

class Swordsman extends Character {     
    constructor (name, type, health, level, attack, defence) {
    super(name, type, health, level,attack, defence);
    this.attack = 40;
    this.defence = 10;
    super.checkType(type);
    super.checkName(name);
    } 
}

class Magician extends Character {     
    constructor (name, type, health, level, attack, defence) {
    super(name, type, health, level,attack, defence);
    this.attack = 10;
    this.defence = 40;
    super.checkType(type);
    super.checkName(name);
    } 
}

class Undead extends Character {     
    constructor (name, type, health, level, attack, defence) {
    super(name, type, health, level,attack, defence);
    this.attack = 25;
    this.defence = 25;
    super.checkType(type);
    super.checkName(name);
    } 
}

class Zombie extends Character {     
    constructor (name, type, health, level, attack, defence) {
    super(name, type, health, level,attack, defence);
    this.attack = 40;
    this.defence = 10;
    super.checkType(type);
    super.checkName(name);
    } 
}