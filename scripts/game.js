
class Game {
  constructor(){
    this.scorecard = [];
    this.frame = [];
  }

  roll(roll_score){
    this.frame.push(roll_score)
    if (this.frame.length === 2) {
      this.scorecard.push(this.frame)
      this.frame = []
    }
  };

  score(){
    var score = 0
    const add = (a,b) => a + b;
    this.scorecard.forEach(function(frame) {
      score += frame.reduce(add);
    })
    return score
    
  }


};
module.exports = Game
