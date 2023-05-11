import { Card } from "antd";
import { useState, useEffect } from "react";
import bingoDone from "../utils/BingoDone";
import Confetti from "react-confetti";

export default function BingoCard({
  text,
  id,
  number,
  onSelectCard,
  cardArray,
}) {
  const [cardStyle, setStyle] = useState("bingo-card");
  const [oldBingoCount, setOldBingoCount] = useState(0);
  const [confetti, setConfetti] = useState(false);
  let newbingoCount = bingoDone(cardArray);
  console.log(oldBingoCount, newbingoCount, "values");
  useEffect(() => {
    if (newbingoCount > oldBingoCount) {
      setConfetti(true);
    } else {
      setConfetti(false);
    }
    if (newbingoCount !== oldBingoCount) {
      setOldBingoCount(newbingoCount);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardArray]);
  return (
    <>
      {confetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={500}
        />
      )}
      <Card
        extra={number !== 0 ? number : "0"}
        bordered={true}
        headStyle={{ minHeight: 10 }}
        className={id === 12 ? "selected-card" : cardStyle}
        bodyStyle={{ padding: 5 }}
        hoverable={true}
        onClick={() => {
          if (cardArray.includes(number) && id !== 12) {
            setStyle("bingo-card");
            const removeCard = cardArray.filter(function (value) {
              return value !== number;
            });
            onSelectCard(removeCard);
          } else {
            setStyle("selected-card");
            onSelectCard((arr) => [...arr, number]);
          }
        }}
      >
        <p className="overflow-ellipsis">{text}</p>
      </Card>
    </>
  );
}
