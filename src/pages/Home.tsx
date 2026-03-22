import { SiReact, SiTypescript, SiTailwindcss } from 'react-icons/si'

const Home = () => {
  return (
    <header className="relative z-10 flex h-screen items-center overflow-hidden">


      <p
        className="hidden md:block absolute font-black text-[180px] text-transparent left-15 top-18 select-none pointer-events-none tracking-widest"
        style={{ WebkitTextStroke: '1px #222' }}
      >
        GONZALES
      </p>

      <div className="relative w-full px-6 md:px-20">
        <p className="text-xs md:text-md tracking-[0.25em] text-white/65 mb-4 md:mb-6">
          HI, I'M JERIC GONZALES
        </p>
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 md:gap-0">

          <h1 className="text-[52px] md:text-[120px] font-black text-white/90 leading-[1.05] tracking-wide">
            I DEVELOP <br />
            <span className="text-purple-500">WEBSITES</span> <br />
            THAT BENEFIT <br />
            OTHERS
          </h1>

          <p className="text-sm md:text-2xl tracking-[0.2em] text-white/50 md:text-right leading-loose md:pb-4">
            WEB DEVELOPER <br />
            BASED IN THE <br />
            PHILIPPINES
          </p>
        </div>
      </div>


      <div className='hidden md:flex absolute right-20 top-6/7 -translate-y-1/2 flex-row gap-8 items-center'>
        <SiReact size={48} className='text-white/50 animate-float' />
        <SiTailwindcss size={48} className='text-white/50 animate-float-delay-1' />
        <SiTypescript size={48} className='text-white/50 animate-float-delay-2' />
      </div>
    </header>
  )
}

export default Home