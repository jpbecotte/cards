import suits from './suits.js';
import Card from './card.js';

class Deck {
  constructor() {
    this.cards = [];

    for (let rank = 0; rank < 13; rank++) {
      suits.names.forEach(suit => {
        let card = new Card(rank, suit);
        this.cards.push(card);
      })
    }
  }
}
