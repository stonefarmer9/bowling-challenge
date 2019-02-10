const Game = require('../../scripts/game.js')

describe('It calculates scores from 20 rolls', () => {
  test('it returns 0 for a gutter game', () => {
    const game = new Game()
    var roll = 0
    do {
      game.roll(0)
      roll += 1
    } while (roll <= 0)

    expect(game.score()).toBe(0)
  })

  test('it can return the score of a 10 round game',() => {
    const game = new Game()
    game.roll(1)
    game.roll(2)
    game.roll(3)
    game.roll(4)
    game.roll(5)
    game.roll(1)
    game.roll(2)
    game.roll(3)
    game.roll(4)
    game.roll(5)
    game.roll(1)
    game.roll(2)
    game.roll(3)
    game.roll(4)
    game.roll(5)
    game.roll(1)
    game.roll(2)
    game.roll(3)
    game.roll(4)
    game.roll(5)
    expect(game.score()).toBe(60)
  })
})
describe('Frames', () => {
  test('it arranges the rolls into frames', () => {
    const game = new Game;
    game.roll(1)
    game.roll(2)
    game.roll(3)
    game.roll(4)

    expect(game.scorecard).toEqual([ [ 1, 2 ], [ 3, 4] ]);

  })

  describe('Spares', () => {
    test('Bonus points are awarded for a spare', () =>{
      const game = new Game;
      game.roll(5)
      game.roll(5)
      game.roll(5)
      game.roll(1)

      expect(game.score()).toBe(21)
    })
  })

})
