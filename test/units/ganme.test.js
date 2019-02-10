const Game = require('../scripts/game.js')

const game = new Game();

describe('#roll', () =>{
  test('It stores the result of a roll', ()=> {
    game.roll(10)
    expect(game.scorecard).toBe(['10'])
  })
})
