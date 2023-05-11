import { Space } from "antd";
import BingoCard from "./BingoCard";
import { useState, useEffect } from "react";
import React from "react";
import componentData from "../data.json";
import shuffleArray from "../utils/ShuffleArray";

export default function Board() {
  useEffect(() => {
    let shuffledData = shuffleArray(componentData);
    setCardData(shuffledData);
  }, []);
  const [cardData, setCardData] = useState([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState([12]);

  return (
    <div>
      <Space
        size={[0, 0]}
        wrap
        style={{
          margin: "0px",
          paddingTop: "10%",
          justifyContent: "center",
        }}
      >
        {cardData.map((data, index) => (
          <BingoCard
            key={data.id}
            id={data.id}
            text={data.text}
            number={index}
            onSelectCard={setSelectedCardIndex}
            cardArray={selectedCardIndex}
          />
        ))}
      </Space>
    </div>
  );
}
