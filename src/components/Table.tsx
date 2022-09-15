import { useContext } from "react";
import { useActor } from "@xstate/react";
import invariant from "tiny-invariant";

import { Card } from "../card";
import { GlobalStateContext } from "../pages/game";
import { CardImage } from "./CardImage";

export function Table({ deck, table }: { deck: Card[]; table: Card[] }) {
  const { gameService } = useContext(GlobalStateContext);
  const [current, send] = useActor(gameService);
  const { context: ctx } = current;

  const player = current.context.players[ctx.activePlayer];
  invariant(player);

  return (
    <div>
      <h3 className="font-bold text-2xl">Table</h3>
      <p>{`Deck: ${deck.length}`}</p>
      <div className="flex">
        {table.map((card) => (
          <CardImage
            key={card.id}
            {...card}
            onClick={() => {
              send({ type: "toggle table card", cardId: card.id });
            }}
            selected={player.selected.table.has(card.id)}
          />
        ))}
      </div>
    </div>
  );
}
