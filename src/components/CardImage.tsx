import Image from "next/image";
import { Card } from "../card";

export function CardImage({
  imgUrl,
  value,
  suit,
  faceDown = false,
  onClick,
  selected = false,
}: Card & { faceDown?: boolean; onClick?: () => void; selected?: boolean }) {
  return (
    <div
      className={[
        selected ? "border-2 border-blue-400" : "",
        "box-content rounded-md p-0.5 h-[190px]",
      ].join(" ")}
    >
      <Image
        src={faceDown ? "/images/cardBack.png" : imgUrl}
        alt={faceDown ? "face down card" : `${value} of ${suit} card`}
        width={140}
        height={190}
        onClick={onClick}
        draggable={false}
      />
    </div>
  );
}
