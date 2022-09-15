import { useContext } from "react";
import { useActor } from "@xstate/react";
import invariant from "tiny-invariant";

import { CardImage } from "./CardImage";
import { GlobalStateContext } from "../pages/game";

export function PlayerHand({ playerName }: { playerName: string }) {
  const { gameService } = useContext(GlobalStateContext);
  const [current, send] = useActor(gameService);

  const player = current.context.players[playerName];
  const { activePlayer } = current.context;
  const isActive = activePlayer === playerName;

  invariant(player);

  return (
    <div>
      <h3 className="font-bold text-2xl">{player.name}</h3>
      <div className="flex gap-x-2">
        {player.hand.map((card, i) => (
          <CardImage
            key={i}
            {...card}
            faceDown={activePlayer !== player.name}
            selected={card.id === player.selected.hand}
            onClick={
              isActive
                ? () => {
                    console.log({ cardId: card.id });
                    send({ type: "toggle hand card", cardId: card.id });
                  }
                : undefined
            }
          />
        ))}
      </div>
    </div>
  );
}
