const Game = require('../../scripts/game.js')

const game = new Game();

describe('#roll', () => {
  test('It stores the result of a roll', ()=> {
    game.roll(10)
    expect(game.scorecard).toEqual([ 10 ])
  })
})

describe('#score', () => {
  test('It returns the total score of the scorecard', () => {
    game.roll(5)
    game.roll(5)
    game.roll(5)
    expect(game.score()).toEqual(15)
  })

})
