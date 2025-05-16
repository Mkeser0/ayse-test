

type TestProps = {
    score: number;
};

function Result({ score }: TestProps) {
  
  return (
    <div className="flex flex-col justify-center items-center mt-8 gap-4">
        <p className="text-2xl font-bold">Sonuç</p>
        {score <= 31 && (
            <p className="text-red-700">Testi tamamlamadınız!!</p>
        )}
        {(score >= 32 && score <= 57) && (
            <p className="text-green-400">Bağımlılık Riski Yok</p>
        )}
        {(score >= 58 && score <= 83) && (
            <p className="text-yellow-400">Az Bağımlılık Risk Grubu</p>
        )}
        {(score >= 84 && score <= 109) && (
            <p className="text-orange-400">Orta Bağımlılık Risk Grubu</p>
        )}
        {(score >= 110 && score <= 135) && (
            <p className="text-red-400">Yüksek Bağımlılık Risk Grubu</p>
        )}
        {(score >= 136 && score <= 160) && (
            <p className="text-red-600">Çok Yüksek Bağımlılık Risk Grubu</p>
        )}
        
        <p className="text-red-400">{score}</p>
        
    </div>
  )
}

export default Result