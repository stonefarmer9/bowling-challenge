
class Game {
  constructor(){
    this.scorecard = [];
  }

  roll(roll_score){
    this.scorecard.push(roll_score)
  };

  score(){
    var sum = 0;
    for (var i = 0; i < this.scorecard.length; i++) {
      sum += this.scorecard[i]
    }
    return sum
  }



};
module.exports = Game
