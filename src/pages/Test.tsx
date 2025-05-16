
import Questions from '../components/Questions';

type TestProps = {
  handleScoreChange: (score: number) => void;
};

function Test({ handleScoreChange }: TestProps) {
  return (
    <div className='flex flex-col items-center h-screen bg-[#F6F6F6]'>
      <Questions handleScoreChange={handleScoreChange} />
    </div>
  );
}

export default Test;
