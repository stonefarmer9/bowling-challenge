const Game = require('../../scripts/game.js')


describe('#roll', () => {
  test('It stores the result of a roll', ()=> {
    game = new Game
    game.roll(10)
    game.roll(10)
    expect(game.scorecard).toEqual([ [10, 10] ])
  })
})

describe('#score', () => {
  test('It returns the total score of the scorecard', () => {
    game = new Game
    game.roll(5)
    game.roll(4)
    game.roll(5)
    game.roll(4)
    expect(game.score()).toEqual(18)
  })

})
