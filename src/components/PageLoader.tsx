import { useEffect, useState } from 'react'

interface PageLoaderProps {
  onComplete: () => void
}



const PageLoader = ({ onComplete }: PageLoaderProps) => {
  const [fading, setFading] = useState(false)

  useEffect(() => {
   
    const fadeTimer = setTimeout(() => {
      setFading(true)
    }, 1500)

    
    const removeTimer = setTimeout(() => {
      onComplete()
    }, 2100)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [onComplete])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      style={{
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.6s ease',
        pointerEvents: fading ? 'none' : 'all',
      }}
    />
  )
}

export default PageLoader