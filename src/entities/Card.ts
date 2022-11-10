import Suit from "../valueObjects/Suit";
import CardValue from "../valueObjects/CardValue";

class Card {
    private cardId: CardId;
    private cardValue: CardValue;
    private suit: Suit;

    constructor(cardId: CardId, cardValue: CardValue, suit: Suit) {
        this.cardId = cardId;
        this.cardValue = cardValue;
        this.suit = suit;
    }

    Card(cardValue: CardValue, suit: Suit){
        return new Card(CardId, cardValue, suit);
    }

    getCardId(): CardId {
        return this.cardId;
    }

    getCardValue(): CardValue {
        return this.cardValue;
    }

    getSuit(): Suit {
        return this.suit;
    }

    toString(): String {
        return this.cardValue + " of " + this.suit;
    }

    compareTo(o: Card) {
        return o.getCardValue().getValue() - this.getCardValue().getValue();
    }
}

export default Card;