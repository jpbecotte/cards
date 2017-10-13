import suits from './suits.js';
import Card from './card.js';

class Deck {
  constructor() {
    this.cards = [];

    for (let rank = 0; rank < 13; rank++) {
      suits.all.forEach(suit => {
        let card = new Card(rank, suit);
        this.cards.push(card);
      })
    }
  }

  pick() {
    const index = Math.floor(Math.random() * (this.cards.length - 1));
    const result = this.cards.splice(index, 1);
    return result[0];
  }

  toString() {
    return this.cards.map(c => c.toString()).join(', ');
  }
}

export default Deck;
