import { useEffect, useRef } from 'react'

function Cursor() {
  const dot = useRef(null)
  const pos = useRef({ x: -100, y: -100 })
  const target = useRef({ x: -100, y: -100 })
  const ticking = useRef(false)

  useEffect(() => {
    const onMove = e => {
      target.current.x = e.clientX
      target.current.y = e.clientY
      if (!ticking.current) {
        ticking.current = true
        requestAnimationFrame(() => {
          const el = document.elementFromPoint(target.current.x, target.current.y)
          dot.current?.classList.toggle('cursor--hover', !!el?.closest('a, button, .slider__dot, .project-card, .card, .home__stat'))
          ticking.current = false
        })
      }
    }

    const onLeave = () => {
      target.current.x = -100
      target.current.y = -100
    }

    const loop = () => {
      const dx = target.current.x - pos.current.x
      const dy = target.current.y - pos.current.y
      pos.current.x += dx * 0.15
      pos.current.y += dy * 0.15
      if (dot.current) {
        dot.current.style.left = pos.current.x + 'px'
        dot.current.style.top = pos.current.y + 'px'
      }
      requestAnimationFrame(loop)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    const frame = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(frame)
    }
  }, [])

  return <div ref={dot} className="cursor" aria-hidden="true" />
}

export default Cursor
