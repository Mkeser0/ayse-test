

function HomePage() {
  return (
    <div className='flex flex-col items-center h-screen bg-[#F6F6F6]'>
      <p>Hoşgeldiniz</p>
      <form className="flex flex-col mt-8 gap-2">
        <label htmlFor="name">Ad-Soyad: </label>
        <input className="w-60 h-9 rounded-md placeholder:text-sm " name="name" type="text" placeholder="Lütfen adınızı giriniz..."/>
        <label htmlFor="age">Yaş: </label>
        <input className="w-60 h-9 rounded-md placeholder:text-sm " name="age" type="text" placeholder="Lütfen yaşınızı giriniz..."/>
        <label htmlFor="phoneNo">Tel-no: </label>
        <input className="w-60 h-9 rounded-md placeholder:text-sm " name="phoneNo" type="text" placeholder="Lütfen numaranızı giriniz..."/>
      </form>
    </div>
  )
}

export default HomePage