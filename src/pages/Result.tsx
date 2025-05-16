import React from 'react'

type TestProps = {
    score: number;
};

function Result({ score }: TestProps) {
  const getResultMessage = (score: number) => {
    if (score <= 10) {
      return "Düşük";
    } else if (score <= 20) {
      return "Orta";
    } else if (score <= 30) {
      return "Yüksek";
    } else {
      return "Çok Yüksek";
    }
  };
  return (
    <div>{score} {getResultMessage(score)}</div>
  )
}

export default Result