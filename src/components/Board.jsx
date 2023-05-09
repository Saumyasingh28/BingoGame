import { Space } from "antd";
import BingoCard from "./BingoCard";
import { useState, useEffect } from "react";
import React from "react";
import Confetti from "react-confetti";
import componentData from "../data.json";
import shuffleArray from "../utils/ShuffleArray";
import bingoDone from "../utils/BingoDone";

export default function Board() {
  useEffect(() => {
    let shuffledData = shuffleArray(componentData);
    setCardData(shuffledData);
  }, []);
  const [cardData, setCardData] = useState([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState([12]);
  let bingo;

  bingo = bingoDone(selectedCardIndex);

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
        {bingo && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={500}
          />
        )}
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
