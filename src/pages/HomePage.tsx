

function HomePage() {



  return (
    <div className='flex flex-col items-center h-screen bg-[#F6F6F6]'>
      <p>Hoşgeldiniz</p>
      <form className="flex flex-col mt-8 gap-2">
        <label htmlFor="name">Ad-Soyad: </label>
        <input className="w-60 h-9 rounded-md placeholder:text-sm pl-2" name="name" type="text" placeholder="Lütfen adınızı giriniz..."/>
        <label htmlFor="age">Yaş: </label>
        <input className="w-60 h-9 rounded-md placeholder:text-sm pl-2" name="age" type="number" placeholder="Lütfen yaşınızı giriniz..."/>
        <label htmlFor="phoneNo">Tel-no: </label>
        <input className="w-60 h-9 rounded-md placeholder:text-sm pl-2" name="phoneNo" type="tel" placeholder="05xx xxx xx xx"/>
        <button
         
          className="mb-8 mt-4 bg-[#5BA87C] rounded-md text-white px-4 py-2 hover:cursor hover:bg-[#4A9B6D]"
        >
          Teste Git
        </button>
      </form>
    </div>
  )
}

export default HomePage