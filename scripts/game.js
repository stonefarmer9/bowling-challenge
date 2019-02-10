
class Game {
  constructor () {
    this.scorecard = []
    this.frame = []
    this.spareBonus = false
    this.strikeBonus = false
    this.doubleStrikeBonus = false
    this.strikeBonusCountUse = 0
  }

  roll (rollScore) {
    if (rollScore == 10 && this.strikeBonus == true) {
      this.frame.push(rollScore * 2, 0)
      this.doubleStrikeBonus = true
      this.strikeBonusCountUse =-1
      this.scorecard.push(this.frame)
      this.frame = []
    } else if (rollScore == 10 && this.strikeBonus == false){
      this.strikeBonus = true
      this.frame.push(rollScore,0)
      this.scorecard.push(this.frame)
      this.frame = []
    } else if (rollScore < 10 && this.strikeBonus == true && this.doubleStrikeBonus == false) {
      this.frame.push(rollScore * 2)
      this.strikeBonusCountUse =+1
      if (this.strikeBonusCountUse == 2){
        this.strikeBonus = false
      }
    } else if (rollScore < 10 && this.strikeBonus == true && this.doubleStrikeBonus == true) {
        this.frame.push(rollScore * 3)
        this.doubleStrikeBonus = false
    } else if (this.spareBonus == true) {
      this.frame.push(rollScore * 2)
      this.spareBonus = false
    } else {
      this.frame.push(rollScore)
      if (this.frame.length == 2) {
        this.scorecard.push(this.frame)
        if (this._frameScore() >= 10) {
          this.spareBonus = true
        }
        this.frame = []
        }
      }
      if (this.frame.length === 2) {
        this.scorecard.push(this.frame)
        this.frame = []
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
