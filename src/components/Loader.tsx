import { useEffect, useState } from 'react'

// This defines what props Loader accepts from outside
// onComplete is a function that App.tsx passes in
// When loader is done it calls this function to tell App.tsx "I'm finished"
interface LoaderProps {
  onComplete: () => void
}

const Loader = ({ onComplete }: LoaderProps) => {
  // Controls the fade out animation
  // starts as false (fully visible), becomes true when fading
  const [fading, setFading] = useState(false)

  useEffect(() => {
    // Step 1 — after 1.5 seconds, start fading out
    const fadeTimer = setTimeout(() => {
      setFading(true)
    }, 1500)

    // Step 2 — after 2.3 seconds, tell App.tsx we're completely done
    // This removes the loader from the DOM entirely
    const removeTimer = setTimeout(() => {
      onComplete()
    }, 2300)

    // Cleanup — if component unmounts early, cancel both timers
    // This prevents memory leaks
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, []) // empty [] means run once when component first appears

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black'
      style={{
        // when fading is true opacity goes to 0
        // transition makes it smooth instead of instant
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