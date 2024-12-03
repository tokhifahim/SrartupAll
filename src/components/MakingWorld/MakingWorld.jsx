



import HouseImg from "./MakingWorldImg/makingWorld-backgroun.jpg"

const MakingWorld = () => {
    const MakingPart={
        backgroundImage:`url(${HouseImg})`,
        backgroundSize:"cover",
        backgroundPosition: 'center',
        height:"35rem",
        
       
        

    }
  return (
    <section className=' bg-blue-600 flex flex-col  lg:flex-row  '>
        <div className=" container  " >
                <div className=" container py-16 h-[35rem]  items-center text-white">
                <div className='sx:w-auto lg:w-[35rem] lg:ml-20'>
                    <span className='text-lg font-bold '>Watch Our Intro Video</span>
                    <h1 className=" sx:w-[25rem] h-auto text-4xl font-extrabold  lg:w-[25rem] py-4 leading-tight">Making world a better place for you and us</h1>
                    <p className="text-lg sx:w-[25rem] lg:w-[32rem] leading-snug py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at quam fringilla, scelerisque nisl in, accumsan diam. Quisque sollicitudin risus eu tortor euismod imperdiet.</p>
                <a href="#"> <button className='w-[9rem] h-[3rem] rounded-full text-slate-300 hover:bg-white   hover:text-blue-600 border'>Know More</button> </a>

                </div>
                </div>
            </div>
            <div className= " lg:w-[80rem] sm:p-5 "style={MakingPart}>
                </div>

    </section>
  )
}

export default MakingWorld