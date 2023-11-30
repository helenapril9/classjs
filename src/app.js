export default class Character {
    constructor(name, type) { 
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!types.includes(type)) {        
        throw new Error ("Нет такого типа");                
    }
        else {
            this.type = type;
        }
    
    if (name.length < 2 || name.length > 10 ) {
        throw new Error ("Количество символов в имени должно быть от 2 до 10 ");}
        else{
            this.name = name;
        }                        

    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
}
}