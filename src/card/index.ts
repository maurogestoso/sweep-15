export interface Card {
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

export const baseDeck: Card[] = [
  { value: 1, suit: "hearts", imgUrl: "/images/cardHeartsA.png" },
  { value: 2, suit: "hearts", imgUrl: "/images/cardHearts2.png" },
  { value: 3, suit: "hearts", imgUrl: "/images/cardHearts3.png" },
  { value: 4, suit: "hearts", imgUrl: "/images/cardHearts4.png" },
  { value: 5, suit: "hearts", imgUrl: "/images/cardHearts5.png" },
  { value: 6, suit: "hearts", imgUrl: "/images/cardHearts6.png" },
  { value: 7, suit: "hearts", imgUrl: "/images/cardHearts7.png" },
  { value: 8, suit: "hearts", imgUrl: "/images/cardHearts8.png" },
  { value: 9, suit: "hearts", imgUrl: "/images/cardHearts9.png" },
  { value: 10, suit: "hearts", imgUrl: "/images/cardHearts10.png" },
  { value: 1, suit: "clubs", imgUrl: "/images/cardClubsA.png" },
  { value: 2, suit: "clubs", imgUrl: "/images/cardClubs2.png" },
  { value: 3, suit: "clubs", imgUrl: "/images/cardClubs3.png" },
  { value: 4, suit: "clubs", imgUrl: "/images/cardClubs4.png" },
  { value: 5, suit: "clubs", imgUrl: "/images/cardClubs5.png" },
  { value: 6, suit: "clubs", imgUrl: "/images/cardClubs6.png" },
  { value: 7, suit: "clubs", imgUrl: "/images/cardClubs7.png" },
  { value: 8, suit: "clubs", imgUrl: "/images/cardClubs8.png" },
  { value: 9, suit: "clubs", imgUrl: "/images/cardClubs9.png" },
  { value: 10, suit: "clubs", imgUrl: "/images/cardClubs10.png" },
  { value: 1, suit: "diamonds", imgUrl: "/images/cardDiamondsA.png" },
  { value: 2, suit: "diamonds", imgUrl: "/images/cardDiamonds2.png" },
  { value: 3, suit: "diamonds", imgUrl: "/images/cardDiamonds3.png" },
  { value: 4, suit: "diamonds", imgUrl: "/images/cardDiamonds4.png" },
  { value: 5, suit: "diamonds", imgUrl: "/images/cardDiamonds5.png" },
  { value: 6, suit: "diamonds", imgUrl: "/images/cardDiamonds6.png" },
  { value: 7, suit: "diamonds", imgUrl: "/images/cardDiamonds7.png" },
  { value: 8, suit: "diamonds", imgUrl: "/images/cardDiamonds8.png" },
  { value: 9, suit: "diamonds", imgUrl: "/images/cardDiamonds9.png" },
  { value: 10, suit: "diamonds", imgUrl: "/images/cardDiamonds10.png" },
  { value: 1, suit: "spades", imgUrl: "/images/cardSpadesA.png" },
  { value: 2, suit: "spades", imgUrl: "/images/cardSpades2.png" },
  { value: 3, suit: "spades", imgUrl: "/images/cardSpades3.png" },
  { value: 4, suit: "spades", imgUrl: "/images/cardSpades4.png" },
  { value: 5, suit: "spades", imgUrl: "/images/cardSpades5.png" },
  { value: 6, suit: "spades", imgUrl: "/images/cardSpades6.png" },
  { value: 7, suit: "spades", imgUrl: "/images/cardSpades7.png" },
  { value: 8, suit: "spades", imgUrl: "/images/cardSpades8.png" },
  { value: 9, suit: "spades", imgUrl: "/images/cardSpades9.png" },
  { value: 10, suit: "spades", imgUrl: "/images/cardSpades10.png" },
];
