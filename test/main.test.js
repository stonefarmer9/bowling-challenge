const foo = require('../scripts/main.js')

describe('It calculates scores from 20 rolls', () => {
  test('it returns 0 for a gutter game', () => {
    var game = new Game()
    var roll = 0
    do {
      game.roll(0)
      roll += 1
    } while (roll <= 20)

    expect(game.score()).toBe(0)
  })
})
