import { useState } from 'react'
import './index.css'

// Google Drive folder link
const DRIVE_LINK = 'https://drive.google.com/drive/u/2/folders/1608Xw6VO0E36IRQHFQ1TXTRQ_X52OyYH'

function App() {
  const [showSurprise, setShowSurprise] = useState(false)
  const [particles, setParticles] = useState([])
  const [heartCount, setHeartCount] = useState(0)

  const createParticles = (e) => {
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: `${Date.now()}-${i}`,
      left: e.clientX,
      top: e.clientY,
    }))
    setParticles((prev) => [...prev, ...newParticles])
    setTimeout(() => {
      setParticles([])
    }, 1000)
  }

  const handleHeartClick = () => {
    setHeartCount(heartCount + 1)
    if (heartCount % 3 === 2) {
      setShowSurprise(true)
      setTimeout(() => setShowSurprise(false), 3000)
    }
  }

  return (
    <div
      className="relative min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 flex items-center justify-center p-6 overflow-hidden"
      onClick={createParticles}
    >
      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle fixed pointer-events-none text-2xl animate-float"
          style={{ left: p.left, top: p.top }}
        >
          ✨
        </div>
      ))}

      {/* drifting background hearts */}
      <div className="absolute left-10 bottom-6 text-pink-300 text-4xl bg-heart drift-1">
        ❤️
      </div>
      <div className="absolute right-28 bottom-10 text-red-300 text-5xl bg-heart drift-2">
        💖
      </div>
      <div className="absolute left-1/2 bottom-2 text-pink-200 text-3xl bg-heart drift-3">
        💕
      </div>

      <div className="max-w-3xl w-full bg-white/60 backdrop-blur-md rounded-3xl shadow-xl p-10 text-center relative z-10 fade-in">
        <div className="text-5xl mb-4">😘</div>

        <div className="flex items-center justify-center mb-6">
          <div className="w-20 h-20 bg-pink-600/90 rounded-full flex items-center justify-center text-white text-4xl cursor-pointer hover:scale-110 transition-transform">
            ❤️
          </div>
        </div>

        <h1 className="text-4xl font-extrabold text-pink-700 mb-2">
          I'm Sorry & Happy Valentine's Day 💕
        </h1>
        <p className="text-pink-600 mb-3 text-lg">
          I'm truly sorry for everything. You mean the world to me 🌍✨
        </p>
        <p className="text-pink-500 mb-6 italic">
          Let's share love, joy, and sweet moments together 💫
        </p>

        <div className="space-y-4">
          <a
            href={DRIVE_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-4 bg-pink-600 text-white rounded-full shadow btn-pulse text-lg font-semibold hover:bg-pink-700 transition-all"
            aria-label="Open Google Drive folder"
          >
            🎁 SUPRISEEEE 🎁
          </a>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="p-4 bg-pink-50 rounded-lg hover:bg-pink-100 hover:scale-105 transition-all cursor-pointer">
            🍫 Chocolate
          </div>
          <div className="p-4 bg-pink-50 rounded-lg hover:bg-pink-100 hover:scale-105 transition-all cursor-pointer">
            🌹 Flowers
          </div>
          <div className="p-4 bg-pink-50 rounded-lg hover:bg-pink-100 hover:scale-105 transition-all cursor-pointer">
            🎀 A Surprise
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm text-pink-500 mb-4">(Click hearts to unlock a message)</p>
          <div className="flex justify-center gap-6">
            <span
              className="text-red-400 text-2xl heart-anim cursor-pointer hover:scale-125 transition-transform"
              onClick={handleHeartClick}
            >
              ❤️
            </span>
            <span
              className="text-red-400 text-3xl heart-anim cursor-pointer hover:scale-125 transition-transform"
              style={{ animationDelay: '0.4s' }}
              onClick={handleHeartClick}
            >
              💖
            </span>
            <span
              className="text-red-400 text-2xl heart-anim cursor-pointer hover:scale-125 transition-transform"
              style={{ animationDelay: '0.8s' }}
              onClick={handleHeartClick}
            >
              💕
            </span>
          </div>
        </div>

        {showSurprise && (
          <div className="mt-6 p-4 bg-yellow-100 rounded-lg animate-bounce text-center">
            <p className="text-2xl mb-2">🎉 You're amazing! 🎉</p>
            <p className="text-pink-700 font-semibold">I love you so much! 💗</p>
          </div>
        )}

        <div className="mt-6 text-4xl flex justify-center gap-3">
          😍 🥰 😘 💕 🌹
        </div>
      </div>
    </div>
  )
}

export default App
