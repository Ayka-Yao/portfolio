// @ts-nocheck
import { useEffect } from 'react'

const useStars = () => {
  useEffect(() => {
    const canvas = document.getElementById('stars') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')

    let animationId: number
    let stars = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    const initStars = () => {
      stars = []
      const count = Math.floor((canvas.width * canvas.height) / 8000)
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.2 + 0.2,
          opacity: Math.random(),
          twinkleSpeed: Math.random() * 0.008 + 0.002,
          vx: (Math.random() - 1.8) * 0.05,
          vy: (Math.random() - 1.8) * 0.05,
        })
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        // twinkling
        star.opacity += star.twinkleSpeed
        if (star.opacity > 1 || star.opacity < 0) star.twinkleSpeed *= -1

        
        star.x += star.vx
        star.y += star.vy

       
        if (star.x < 0) star.x = canvas.width
        if (star.x > canvas.width) star.x = 0
        if (star.y < 0) star.y = canvas.height
        if (star.y > canvas.height) star.y = 0

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()
      })

      animationId = requestAnimationFrame(render)
    }

    resize()
    render()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])
}

export default useStars