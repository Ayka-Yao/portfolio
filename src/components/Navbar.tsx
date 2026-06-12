const NavItems = [
    { text: 'Home', id: 'home' },
    { text: 'Projects', id: 'projects' },
    { text: 'About', id: 'about' },
    { text: 'Contact', id: 'contact' },
]

interface NavbarProps {
    onNavigate: (sectionId: string) => void
}

export const Navbar = ({ onNavigate }: NavbarProps) => {
    return (
        <nav className='absolute top-0 left-0 right-0 z-20 flex items-center justify-between w-full px-5 pt-5 pb-2 border-b sm:px-10 lg:px-20 text-white/75 border-b-white/20'>
            <span
                className="text-sm md:text-base font-bold cursor-pointer mix-blend-difference"
                onClick={() => onNavigate('home')}
            >
                Ayka Yao
            </span>
            <ul className='flex text-xs md:text-sm font-bold tracking-wider space-x-3 md:space-x-10 *:cursor-pointer *:leading-none [&>*:hover]:text-white *:transition-all'>
                {NavItems.map(({ text, id }) => (
                    <li
                        key={text}
                        onClick={() => onNavigate(id)}
                        className="text-white/60 hover:text-white transition-all cursor-pointer"
                    >
                        {text}
                    </li>
                ))}
            </ul>
        </nav>
    )
}