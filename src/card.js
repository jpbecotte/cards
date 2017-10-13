import suits from './suits.js';

const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  value() {
    return values[this.rank];
  }

  toString() {
    return `${values[this.rank]}${suits[this.suit].picto}`;
  }
}

export default Card;
