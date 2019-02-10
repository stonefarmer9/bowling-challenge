
class Game {
  constructor () {
    this.scorecard = []
    this.frame = []
    this.frameIndex = 0
    this.spareBonus = false
  }

  roll (rollScore) {
    if (this.spareBonus === true) {
      this.frame.push(rollScore * 2)
      this.spareBonus = false
    } else {
      this.frame.push(rollScore)
      if (this.frame.length === 2) {
        this.scorecard.push(this.frame)
        if (this._frameScore() >= 10) {
          this.spareBonus = true
        }
        this.frameNumber += 1
        this.frame = []
      }
    }
  };

  score () {
    var score = 0
    const add = (a, b) => a + b
    this.scorecard.forEach(function (frame) {
      score += frame.reduce(add)
    })
    return score
  };

  _frameScore () {
    var frame = this.scorecard[this.scorecard.length - 1]
    var score = frame[0] + frame[1]
    return score
  };
};
module.exports = Game
