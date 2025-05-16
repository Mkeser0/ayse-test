import React, { useState } from 'react';
import { data } from '../data.ts';
import { useHistory } from 'react-router-dom';

type TestProps = {
  handleScoreChange: (score: number) => void;
};

function Questions({ handleScoreChange }: TestProps) {
  const [answers, setAnswers] = useState<number[]>(Array(data.length).fill(0));
const history = useHistory();
  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const questionIndex = parseInt(name.split('-')[1]);
    const answerValue = parseInt(value);

    setAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[questionIndex] = answerValue;
      return newAnswers;
    });
  };

  const calculateTotalScore = () => {
    return answers.reduce((acc, curr) => acc + curr, 0);
  };

  const onSubmit = () => {
    const totalScore = calculateTotalScore();
    handleScoreChange(totalScore);
    history.push('/sonuc');
    console.log(totalScore);
    console.log(answers);
  };
  
  
  return (
    <>
    <div>
      {data.map((soru: string, i: number) => (
        <div key={i} className='flex flex-col justify-center items-center gap-4 border-2 rounded-lg p-4 my-2 w-[400px] sm:w-[400px] md:w-[550px] lg:w-[800px] mx-auto bg-[#E6EDF4]'>
          <p className='text-[#2D2D2D]'>{soru}</p>
          <div className='flex gap-4'>
            <p className='text-[14px] text-[#D96868]'>Kesinlikle Katılmıyorum</p>
            {[1, 2, 3, 4, 5].map(value => (
              <input
                key={value}
                onChange={handleAnswerChange}
                value={value}
                name={`question-${i}`}
                type="radio"
                checked={answers[i] === value}
              />
            ))}
            <p className='text-[14px] text-[#5BA87C]'>Kesinlikle Katılıyorum</p>
          </div>
        </div>
      ))}
      <div className="flex justify-end ">
      <button onClick={onSubmit} className="mb-8 mt-4 bg-[#5BA87C] rounded-md text-white px-4 py-2 hover:cursor hover:bg-[#4A9B6D] ">
        Testi Tamamla
      </button>
      </div>
      </div>
    </>
  );
}

export default Questions;
