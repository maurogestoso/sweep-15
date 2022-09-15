export type CardId =
  | "heartsA"
  | "hearts2"
  | "hearts3"
  | "hearts4"
  | "hearts5"
  | "hearts6"
  | "hearts7"
  | "hearts8"
  | "hearts9"
  | "hearts10"
  | "clubsA"
  | "clubs2"
  | "clubs3"
  | "clubs4"
  | "clubs5"
  | "clubs6"
  | "clubs7"
  | "clubs8"
  | "clubs9"
  | "clubs10"
  | "diamondsA"
  | "diamonds2"
  | "diamonds3"
  | "diamonds4"
  | "diamonds5"
  | "diamonds6"
  | "diamonds7"
  | "diamonds8"
  | "diamonds9"
  | "diamonds10"
  | "spadesA"
  | "spades2"
  | "spades3"
  | "spades4"
  | "spades5"
  | "spades6"
  | "spades7"
  | "spades8"
  | "spades9"
  | "spades10";

export interface Card {
  id: CardId;
  value: number;
  suit: "hearts" | "diamonds" | "clubs" | "spades";
  imgUrl: string;
}

export function shuffleDeck(deck: Card[]) {
  deck = deck.slice();
  const shuffledDeck: Card[] = [];

  while (deck.length > 0) {
    const randomIndex = Math.floor(Math.random() * deck.length);

    const [card] = deck.splice(randomIndex, 1);

    if (!card) break;

    shuffledDeck.push(card);
  }

  return shuffledDeck;
}

export const allCards: Record<CardId, Card> = {
  heartsA: {
    id: "heartsA",
    value: 1,
    suit: "hearts",
    imgUrl: "/images/cardHeartsA.png",
  },
  hearts2: {
    id: "hearts2",
    value: 2,
    suit: "hearts",
    imgUrl: "/images/cardHearts2.png",
  },
  hearts3: {
    id: "hearts3",
    value: 3,
    suit: "hearts",
    imgUrl: "/images/cardHearts3.png",
  },
  hearts4: {
    id: "hearts4",
    value: 4,
    suit: "hearts",
    imgUrl: "/images/cardHearts4.png",
  },
  hearts5: {
    id: "hearts5",
    value: 5,
    suit: "hearts",
    imgUrl: "/images/cardHearts5.png",
  },
  hearts6: {
    id: "hearts6",
    value: 6,
    suit: "hearts",
    imgUrl: "/images/cardHearts6.png",
  },
  hearts7: {
    id: "hearts7",
    value: 7,
    suit: "hearts",
    imgUrl: "/images/cardHearts7.png",
  },
  hearts8: {
    id: "hearts8",
    value: 8,
    suit: "hearts",
    imgUrl: "/images/cardHearts8.png",
  },
  hearts9: {
    id: "hearts9",
    value: 9,
    suit: "hearts",
    imgUrl: "/images/cardHearts9.png",
  },
  hearts10: {
    id: "hearts10",
    value: 10,
    suit: "hearts",
    imgUrl: "/images/cardHearts10.png",
  },
  clubsA: {
    id: "clubsA",
    value: 1,
    suit: "clubs",
    imgUrl: "/images/cardClubsA.png",
  },
  clubs2: {
    id: "clubs2",
    value: 2,
    suit: "clubs",
    imgUrl: "/images/cardClubs2.png",
  },
  clubs3: {
    id: "clubs3",
    value: 3,
    suit: "clubs",
    imgUrl: "/images/cardClubs3.png",
  },
  clubs4: {
    id: "clubs4",
    value: 4,
    suit: "clubs",
    imgUrl: "/images/cardClubs4.png",
  },
  clubs5: {
    id: "clubs5",
    value: 5,
    suit: "clubs",
    imgUrl: "/images/cardClubs5.png",
  },
  clubs6: {
    id: "clubs6",
    value: 6,
    suit: "clubs",
    imgUrl: "/images/cardClubs6.png",
  },
  clubs7: {
    id: "clubs7",
    value: 7,
    suit: "clubs",
    imgUrl: "/images/cardClubs7.png",
  },
  clubs8: {
    id: "clubs8",
    value: 8,
    suit: "clubs",
    imgUrl: "/images/cardClubs8.png",
  },
  clubs9: {
    id: "clubs9",
    value: 9,
    suit: "clubs",
    imgUrl: "/images/cardClubs9.png",
  },
  clubs10: {
    id: "clubs10",
    value: 10,
    suit: "clubs",
    imgUrl: "/images/cardClubs10.png",
  },
  diamondsA: {
    id: "diamondsA",
    value: 1,
    suit: "diamonds",
    imgUrl: "/images/cardDiamondsA.png",
  },
  diamonds2: {
    id: "diamonds2",
    value: 2,
    suit: "diamonds",
    imgUrl: "/images/cardDiamonds2.png",
  },
  diamonds3: {
    id: "diamonds3",
    value: 3,
    suit: "diamonds",
    imgUrl: "/images/cardDiamonds3.png",
  },
  diamonds4: {
    id: "diamonds4",
    value: 4,
    suit: "diamonds",
    imgUrl: "/images/cardDiamonds4.png",
  },
  diamonds5: {
    id: "diamonds5",
    value: 5,
    suit: "diamonds",
    imgUrl: "/images/cardDiamonds5.png",
  },
  diamonds6: {
    id: "diamonds6",
    value: 6,
    suit: "diamonds",
    imgUrl: "/images/cardDiamonds6.png",
  },
  diamonds7: {
    id: "diamonds7",
    value: 7,
    suit: "diamonds",
    imgUrl: "/images/cardDiamonds7.png",
  },
  diamonds8: {
    id: "diamonds8",
    value: 8,
    suit: "diamonds",
    imgUrl: "/images/cardDiamonds8.png",
  },
  diamonds9: {
    id: "diamonds9",
    value: 9,
    suit: "diamonds",
    imgUrl: "/images/cardDiamonds9.png",
  },
  diamonds10: {
    id: "diamonds10",
    value: 10,
    suit: "diamonds",
    imgUrl: "/images/cardDiamonds10.png",
  },
  spadesA: {
    id: "spadesA",
    value: 1,
    suit: "spades",
    imgUrl: "/images/cardSpadesA.png",
  },
  spades2: {
    id: "spades2",
    value: 2,
    suit: "spades",
    imgUrl: "/images/cardSpades2.png",
  },
  spades3: {
    id: "spades3",
    value: 3,
    suit: "spades",
    imgUrl: "/images/cardSpades3.png",
  },
  spades4: {
    id: "spades4",
    value: 4,
    suit: "spades",
    imgUrl: "/images/cardSpades4.png",
  },
  spades5: {
    id: "spades5",
    value: 5,
    suit: "spades",
    imgUrl: "/images/cardSpades5.png",
  },
  spades6: {
    id: "spades6",
    value: 6,
    suit: "spades",
    imgUrl: "/images/cardSpades6.png",
  },
  spades7: {
    id: "spades7",
    value: 7,
    suit: "spades",
    imgUrl: "/images/cardSpades7.png",
  },
  spades8: {
    id: "spades8",
    value: 8,
    suit: "spades",
    imgUrl: "/images/cardSpades8.png",
  },
  spades9: {
    id: "spades9",
    value: 9,
    suit: "spades",
    imgUrl: "/images/cardSpades9.png",
  },
  spades10: {
    id: "spades10",
    value: 10,
    suit: "spades",
    imgUrl: "/images/cardSpades10.png",
  },
};

export const baseDeck: Card[] = Object.values(allCards);
