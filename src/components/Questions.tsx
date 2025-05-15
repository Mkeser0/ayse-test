import React, { useState } from 'react'
import { data } from "../data.ts"

function Questions() {
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});

  return (
<>
    {data.map((soru: string, i: number) => (<div>
        <div key={i} className='flex flex-col justify-center items-center gap-4 border-2 rounded-lg p-4 my-2 w-[400px] sm:w-[400px] md:w-[550px] lg:w-[800px] mx-auto bg-[#E6EDF4]'>
            <p className='text-[#2D2D2D]'>{soru}</p>
            <div className='flex gap-4'>
              <p className='text-[14px] text-[#D96868]'>Kesinlikle Katılmıyorum</p>
                <input value={1} name={`question-${i}`} type="radio" />
                <input value={2} name={`question-${i}`} type="radio" />
                <input value={3} name={`question-${i}`} type="radio" />
                <input value={4} name={`question-${i}`} type="radio" />
                <input value={5} name={`question-${i}`} type="radio" />
                <p className='text-[14px] text-[#5BA87C]'>Kesinlikle Katılıyorum</p>
            </div>
        </div>
    </div>))}
    </>
  )
}

export default Questions