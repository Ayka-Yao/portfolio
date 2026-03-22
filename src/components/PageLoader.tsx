import { useEffect, useState } from 'react'


interface PageLoaderProps {
  text: string
  onComplete: () => void
}

const PageLoader = ({ text, onComplete }: PageLoaderProps) => {
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFading(true)
    }, 1500)

    const removeTimer = setTimeout(() => {
      onComplete()
    }, 1400)

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
        transition: 'opacity 0.6s ease',
      }}
    >
      <p className='text-white text-3xl tracking-widest font-cinzel'>
        {text}
      </p>
    </div>
  )
}

export default PageLoader