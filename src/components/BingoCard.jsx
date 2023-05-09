import { Card } from "antd";
import { useState } from "react";

export default function BingoCard({
  text,
  id,
  number,
  onSelectCard,
  cardArray,
}) {
  const [cardStyle, setStyle] = useState("bingo-card");
  return (
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
  );
}
