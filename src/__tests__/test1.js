import Character from '../app.js';
import { Daemon } from '../app.js';

test('CheckType', () =>  {
    expect(() => {
       new Daemon (32, "Daemon");
    }).toThrow(); 
})



