const Game = require('../scripts/game.js')

const game = new Game()
describe('It calculates scores from 20 rolls', () => {
  test('it returns 0 for a gutter game', () => {
    var roll = 0
    do {
      game.roll(0)
      roll += 1
    } while (roll <= 20)

    expect(game.score()).toBe(0)
  })
})
