export interface Card {
  id: string;
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
  {
    id: "heartsA",
    value: 1,
    suit: "hearts",
    imgUrl: "/images/cardHeartsA.png",
  },
  {
    id: "hearts2",
    value: 2,
    suit: "hearts",
    imgUrl: "/images/cardHearts2.png",
  },
  {
    id: "hearts3",
    value: 3,
    suit: "hearts",
    imgUrl: "/images/cardHearts3.png",
  },
  {
    id: "hearts4",
    value: 4,
    suit: "hearts",
    imgUrl: "/images/cardHearts4.png",
  },
  {
    id: "hearts5",
    value: 5,
    suit: "hearts",
    imgUrl: "/images/cardHearts5.png",
  },
  {
    id: "hearts6",
    value: 6,
    suit: "hearts",
    imgUrl: "/images/cardHearts6.png",
  },
  {
    id: "hearts7",
    value: 7,
    suit: "hearts",
    imgUrl: "/images/cardHearts7.png",
  },
  {
    id: "hearts8",
    value: 8,
    suit: "hearts",
    imgUrl: "/images/cardHearts8.png",
  },
  {
    id: "hearts9",
    value: 9,
    suit: "hearts",
    imgUrl: "/images/cardHearts9.png",
  },
  {
    id: "hearts10",
    value: 10,
    suit: "hearts",
    imgUrl: "/images/cardHearts10.png",
  },
  { id: "clubsA", value: 1, suit: "clubs", imgUrl: "/images/cardClubsA.png" },
  { id: "clubs2", value: 2, suit: "clubs", imgUrl: "/images/cardClubs2.png" },
  { id: "clubs3", value: 3, suit: "clubs", imgUrl: "/images/cardClubs3.png" },
  { id: "clubs4", value: 4, suit: "clubs", imgUrl: "/images/cardClubs4.png" },
  { id: "clubs5", value: 5, suit: "clubs", imgUrl: "/images/cardClubs5.png" },
  { id: "clubs6", value: 6, suit: "clubs", imgUrl: "/images/cardClubs6.png" },
  { id: "clubs7", value: 7, suit: "clubs", imgUrl: "/images/cardClubs7.png" },
  { id: "clubs8", value: 8, suit: "clubs", imgUrl: "/images/cardClubs8.png" },
  { id: "clubs9", value: 9, suit: "clubs", imgUrl: "/images/cardClubs9.png" },
  {
    id: "clubs10",
    value: 10,
    suit: "clubs",
    imgUrl: "/images/cardClubs10.png",
  },
  {
    id: "diamondsA",
    value: 1,
    suit: "diamonds",
    imgUrl: "/images/cardDiamondsA.png",
  },
  {
    id: "diamonds2",
    value: 2,
    suit: "diamonds",
    imgUrl: "/images/cardDiamonds2.png",
  },
  {
    id: "diamonds3",
    value: 3,
    suit: "diamonds",
    imgUrl: "/images/cardDiamonds3.png",
  },
  {
    id: "diamonds4",
    value: 4,
    suit: "diamonds",
    imgUrl: "/images/cardDiamonds4.png",
  },
  {
    id: "diamonds5",
    value: 5,
    suit: "diamonds",
    imgUrl: "/images/cardDiamonds5.png",
  },
  {
    id: "diamonds6",
    value: 6,
    suit: "diamonds",
    imgUrl: "/images/cardDiamonds6.png",
  },
  {
    id: "diamonds7",
    value: 7,
    suit: "diamonds",
    imgUrl: "/images/cardDiamonds7.png",
  },
  {
    id: "diamonds8",
    value: 8,
    suit: "diamonds",
    imgUrl: "/images/cardDiamonds8.png",
  },
  {
    id: "diamonds9",
    value: 9,
    suit: "diamonds",
    imgUrl: "/images/cardDiamonds9.png",
  },
  {
    id: "diamonds10",
    value: 10,
    suit: "diamonds",
    imgUrl: "/images/cardDiamonds10.png",
  },
  {
    id: "spadesA",
    value: 1,
    suit: "spades",
    imgUrl: "/images/cardSpadesA.png",
  },
  {
    id: "spades2",
    value: 2,
    suit: "spades",
    imgUrl: "/images/cardSpades2.png",
  },
  {
    id: "spades3",
    value: 3,
    suit: "spades",
    imgUrl: "/images/cardSpades3.png",
  },
  {
    id: "spades4",
    value: 4,
    suit: "spades",
    imgUrl: "/images/cardSpades4.png",
  },
  {
    id: "spades5",
    value: 5,
    suit: "spades",
    imgUrl: "/images/cardSpades5.png",
  },
  {
    id: "spades6",
    value: 6,
    suit: "spades",
    imgUrl: "/images/cardSpades6.png",
  },
  {
    id: "spades7",
    value: 7,
    suit: "spades",
    imgUrl: "/images/cardSpades7.png",
  },
  {
    id: "spades8",
    value: 8,
    suit: "spades",
    imgUrl: "/images/cardSpades8.png",
  },
  {
    id: "spades9",
    value: 9,
    suit: "spades",
    imgUrl: "/images/cardSpades9.png",
  },
  {
    id: "spades10",
    value: 10,
    suit: "spades",
    imgUrl: "/images/cardSpades10.png",
  },
];
