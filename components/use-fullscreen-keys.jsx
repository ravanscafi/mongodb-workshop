import { useEffect } from 'react'

const f_key = 70

export const useFullscreenKeys = () => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.altKey && e.keyCode === f_key) {
        e.target.requestFullscreen()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
}

export default useFullscreenKeys
