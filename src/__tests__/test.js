import Daemon from '../daemon.js';


test('CheckType', () => {
    expect(() => {
       new Daemon ("Daemon", "Daemons");
    }).toThrow(); 
})