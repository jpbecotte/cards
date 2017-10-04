class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  toString() {
    console.log(this.rank + this.suit);
  }
}

export default Card;
