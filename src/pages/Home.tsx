import { SiReact, SiTypescript, SiTailwindcss } from 'react-icons/si'

const Home = () => {
    return(
         <header className="relative z-10 flex h-screen items-center overflow-hidden">


      <p
        className="absolute font-black text-[180px] text-transparent left-15 top-18 select-none pointer-events-none tracking-widest"
        style={{ WebkitTextStroke: '1px #222' }}
      >
        GONZALES
      </p>

 
      <div className="relative w-full px-20">


        <p className="text-md tracking-[0.25em] text-white/65 mb-6">
          HI, I'M JERIC GONZALES
        </p>


        <div className="flex justify-between items-end">


          <h1 className="text-[120px] font-black text-white/90 leading-[1.05] tracking-wide">
            I DEVELOP <br />
            <span className="text-purple-500">WEBSITES</span> <br />
            THAT BENEFIT <br />
            OTHERS
          </h1>

          <p className="text-2xl tracking-[0.2em] text-white/50 text-right leading-loose pb-4">
            WEB DEVELOPER <br />
            BASED IN THE <br />
            PHILIPPINES
          </p>

        </div>
      </div>
      <div className='absolute right-20 top-6/7 -translate-y-1/2 flex flex-row gap-8 items-center'>
  <SiReact 
    size={48} 
    className='text-white/50 animate-float' 
  />
  <SiTailwindcss 
    size={48} 
    className='text-white/50 animate-float-delay-1' 
  />
  <SiTypescript 
    size={48} 
    className='text-white/50 animate-float-delay-2' 
  />
</div>

    </header>
    )

}

export default Home