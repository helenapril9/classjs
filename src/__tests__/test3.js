import Daemon from '../daemon.js';

test('CheckName', () =>  {
    expect(() => {
       new Daemon ("Daemon6666666", "Daemon");
    }).toThrow(); 
})



