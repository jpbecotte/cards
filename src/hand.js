import suits from './suits.js';

class Hand {
  constructor() {
    this.suits = {};
    suits.all.forEach((suit) => this.suits[suit] = []);
  }

  add(card) {
    this.suits[card.suit].push(card);
    this.suits[card.suit].sort((b, a) => {
      if (a.rank < b.rank) return -1;
      if (a.rank > b.rank) return 1;
      else return 0;
    })
  }

  allCards() {
    return Object.values(this.suits).reduce((acc, arr) => [...acc, ...arr], [])
  }

  static fromDeck(deck) {
    const hand = new this();
    for (let i = 0; i < 13; i++) {
      hand.add(deck.pick());
    }
    return hand;
  }

  toString() {
    return suits.all.map(s =>
      `${suits[s].picto} ${this.suits[s].map(c => c.value()).join(' ')}`).join(', ');
  }
}

export default Hand;
