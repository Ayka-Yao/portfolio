

const About = () => {
    return (
         <section className='relative flex flex-col h-screen px-20 pt-16'>

      
      <p className='text-xl tracking-[0.4em] text-white/60 text-center'>
        ABOUT
      </p>

      
      <div className='flex-1 flex items-center'>
        <div className='max-w-3xl mx-auto'>

          <p className='text-md tracking-[0.3em] text-white/60 mb-2'>
            HI, I'M
          </p>

          <h1 className='text-7xl font-black text-pink-400 tracking-wider mb-8'>
            JERIC GONZALES
          </h1>

          <div className='w-full h-px bg-white/10 mb-8' />

          <p className='text-md tracking-[0.15em] text-white/80 leading-loose '>
            I'M A WEB DEVELOPER BASED IN PHILIPPINES,
            SPECIALIZING IN WEB DEVELOPMENT AND OTHER IT STUFF.
            I AM CONTINUOUSLY WORKING TOWARDS MASTERING REACT, TYPESCRIPT,
            AND TAILWIND CSS TO BUILD WEBSITES THAT ARE CLEAN, FUNCTIONAL,
            AND MEANINGFUL.
          </p>
          <p className='text-md tracking-[0.15em] text-white/80 leading-loose mt-6'>
            OUTSIDE OF CODING, I ENJOY READING BOOKS, JOGGING, AND CYCLING.
          </p>

        </div>
      </div>

    </section>
    )
}

export default About