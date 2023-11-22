import Character from '../app.js';
import { Daemon } from '../app.js';

test('CheckType', () =>  {
    expect(() => {
       new Daemon ("Daemon1", "Daemons");
    }).toThrow(); 
})



