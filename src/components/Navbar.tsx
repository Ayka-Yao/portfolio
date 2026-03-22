import { useLocation } from "react-router-dom";
const NavItems = [
    { text: 'Home', path: '/' },
    { text: 'Projects', path: '/projects' },
    { text: 'About', path: '/about' },
    { text: 'Contact', path: '/contact' }
]
interface NavbarProps {
    onNavigate: (path: string, label: string) => void
}
export const Navbar = ({ onNavigate }: NavbarProps) => {
    const location = useLocation()
    return (
        <nav className='absolute top-0 left-0 right-0 z-20 flex items-center justify-between w-full px-5 pt-5 pb-2 border-b sm:px-10 lg:px-20 text-white/75 border-b-white/20'>
            <span className="text-sm md:text-base font-bold cursor-pointer mix-blend-difference"
                onClick={() => onNavigate('/', 'Home')}
            >
                Ayka Yao
            </span>
            <ul className='flex text-xs md:text-sm font-bold tracking-wider space-x-3 md:space-x-10 *:cursor-pointer *:leading-none [&>*:hover]:text-white *:transition-all'>
                {NavItems.map((item) => {
                    const { text, path } = item
                    return (
                        <li
                            key={text}
                            onClick={() => onNavigate(path, text)}
                            className={`${location.pathname === path ? 'text-white' : 'text-white/60'} hover-effect`}
                        >
                            {text}
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}