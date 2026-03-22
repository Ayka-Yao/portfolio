import { OrbitingCircle } from '../components/ui/OrbitingCircle'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
    return (
        <section className='relative flex h-screen w-full flex-col items-center justify-center overflow-hidden'>

            
            <span className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white from-25% to-black to-[130%] bg-clip-text text-center text-6xl font-black leading-none text-transparent lg:text-7xl font-cinzel'>
                Contact
            </span>


            <OrbitingCircle radius={200} duration={70} iconSize={40}>
                <a href='mailto:jeric.ggonzales.dev@gmail.com' target='_blank' rel='noreferrer'>
                    <MdEmail size={50} className='text-white/75 hover:text-white transition-all' />
                </a>
            </OrbitingCircle>


            <OrbitingCircle radius={300} duration={90} reverse iconSize={50}>
                <a href='https://github.com/Ayka-Yao' target='_blank' rel='noreferrer'>
                    <FaGithub size={50} className='text-white/75 hover:text-white transition-all' />
                </a>
                
            </OrbitingCircle>
            <OrbitingCircle radius={400} duration={100} iconSize={50} reverse>
                <a href='https://www.linkedin.com/in/jeric-gonzales-dev' target='_blank' rel='noreferrer'>
                    <FaLinkedin size={50} className='text-white/75 hover:text-white transition-all' />
                </a>
            </OrbitingCircle>

        </section>
    )
}

export default Contact