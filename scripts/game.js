
class Game {
  constructor(){
    this.scorecard = [];
  }

  roll(roll_score){
    this.scorecard.push(roll_score)
  };

  score(){
    const add = (a,b) => a + b;
    console.log(this.scorecard.reduce(add))
    return this.scorecard.reduce(add)
  }


};
module.exports = Game
