class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
      this.guessValue = Math.round((this.min+this.max)/2);
       return this.guessValue;
    }

    lower() {
        this.max =  this.guessValue;
    }

    greater() {
        this.min = this.guessValue;
    }
}

module.exports = GuessingGame;
