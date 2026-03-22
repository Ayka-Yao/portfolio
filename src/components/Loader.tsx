import { useEffect, useState } from 'react'

interface LoaderProps {
    onComplete: () => void
}

const Loader = ({ onComplete }: LoaderProps) => {

    const [fading, setFading] = useState(false)

    useEffect(() => {

        const fadeTimer = setTimeout(() => {
            setFading(true)
        }, 1500)


        const removeTimer = setTimeout(() => {
            onComplete()
        }, 2300)


        return () => {
            clearTimeout(fadeTimer)
            clearTimeout(removeTimer)
        }
    }, [])

    return (
        <div
            className='fixed inset-0 z-50 flex items-center justify-center bg-black'
            style={{

                opacity: fading ? 0 : 1,
                transition: 'opacity 0.8s ease',
            }}
        >
            <p className='text-white text-3xl tracking-widest font-cinzel'>
                Ayka Yao
            </p>
        </div>
    )
}

export default Loader