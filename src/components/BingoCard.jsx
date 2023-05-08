import { Card } from "antd";
import { useState } from "react";

export default function BingoCard({ text, number, onSelectCard, cardArray }) {
  const [cardStyle, setStyle] = useState("bingo-card");
  return (
    <Card
      extra={number !== 0 ? number : "0"}
      bordered={true}
      headStyle={{ minHeight: 10 }}
      className={cardStyle}
      bodyStyle={{ padding: 5 }}
      hoverable={true}
      onClick={() => {
        if (cardArray.includes(number)) {
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
      {text}
    </Card>
  );
}
