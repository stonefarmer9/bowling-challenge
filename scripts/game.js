
class Game {
  constructor(){
    this.scorecard = [];
  }

  roll(roll_score){
    var frame =
    this.scorecard.push(roll_score)
  };

  score(){
    const add = (a,b) => a + b;
    return this.scorecard.reduce(add)
  }


};
module.exports = Game
