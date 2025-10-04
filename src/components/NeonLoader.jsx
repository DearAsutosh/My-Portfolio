import React, { useEffect, useRef, useState } from 'react'

export default function CenterLoader({ onFinish = () => {} }) {
  const [percent, setPercent] = useState(0)
  const [visible, setVisible] = useState(true)
  const targetRef = useRef(0)
  const displayedRef = useRef(0)
  const rafRef = useRef(null)
  const mountedRef = useRef(true)

  const phrases = [
    "Preparing your experience...",
    "Almost ready...",
    "Hang tight...",
    "Loading content...",
    "Just a moment..."
  ]
  const [phraseIndex, setPhraseIndex] = useState(0)

  useEffect(() => {
    mountedRef.current = true
    let partsTotal = 1
    let partsLoaded = 0

    const imgs = Array.from(document.images || [])
    partsTotal += imgs.length

    const onPartLoaded = () => {
      partsLoaded += 1
      targetRef.current = Math.min(100, Math.round((partsLoaded / partsTotal) * 100))
    }

    const listeners = []
    imgs.forEach(img => {
      if (img.complete) onPartLoaded()
      else {
        const fn = () => {
          onPartLoaded()
          img.removeEventListener('load', fn)
          img.removeEventListener('error', fn)
        }
        img.addEventListener('load', fn)
        img.addEventListener('error', fn)
        listeners.push({ img, fn })
      }
    })

    const finishTimeout = setTimeout(() => {
      targetRef.current = 100
    }, 5000)

    const onWinLoad = () => onPartLoaded()
    if (document.readyState === 'complete') onWinLoad()
    else window.addEventListener('load', onWinLoad, { passive: true })

    const ease = () => {
      const cur = displayedRef.current
      const target = targetRef.current
      let next = cur + (target - cur) * 0.12
      if (Math.abs(target - next) < 0.5) next = target
      displayedRef.current = next
      if (mountedRef.current) setPercent(Math.round(next))

      if (next < 100) rafRef.current = requestAnimationFrame(ease)
      else {
        setTimeout(() => {
          if (!mountedRef.current) return
          setVisible(false)
          setTimeout(onFinish, 300)
        }, 200)
      }
    }

    displayedRef.current = percent
    rafRef.current = requestAnimationFrame(ease)

    const phraseInterval = setInterval(() => {
      setPhraseIndex(prev => (prev + 1) % phrases.length)
    }, 2500)

    return () => {
      mountedRef.current = false
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      clearInterval(phraseInterval)
      clearTimeout(finishTimeout)
      listeners.forEach(({ img, fn }) => {
        img.removeEventListener('load', fn)
        img.removeEventListener('error', fn)
      })
      window.removeEventListener('load', onWinLoad)
    }
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-opacity duration-500">
      {/* Large Percentage */}
      <div className="text-white text-6xl font-bold mb-4">
        {percent}%
      </div>

      {/* Small Rotating Message */}
      <div className="text-gray-400 text-sm text-center max-w-xs">
        {phrases[phraseIndex]}
      </div>
    </div>
  )
}
