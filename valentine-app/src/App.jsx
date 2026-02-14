import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [showQuestion, setShowQuestion] = useState(true)
  const [buttonPositions, setButtonPositions] = useState({ yes: 0, no: 1 })
  const audioRef = useRef(null)

  useEffect(() => {
    // Auto-play music when component mounts
    if (audioRef.current) {
      audioRef.current.play().catch(err => {
        console.log("Auto-play prevented. User interaction needed.");
      });
    }
  }, [])

  const handleNoHover = () => {
    // Swap positions when hovering over "No" button
    setButtonPositions(prev => ({
      yes: prev.no,
      no: prev.yes
    }))
  }

  const handleYesClick = () => {
    setShowQuestion(false)
    if (audioRef.current) {
      audioRef.current.play()
    }
  }

  const handleMusicToggle = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }

  return (
    <div className="app">
      {/* Floating hearts background */}
      <div className="hearts-container">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="heart" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}>
            ❤️
          </div>
        ))}
      </div>

      {/* Audio element */}
      <audio ref={audioRef} loop>
        <source src="https://cdn.glitch.global/examples/50-nam-ve-sau.mp3" type="audio/mpeg" />
      </audio>

      {/* Music control button */}
      <button className="music-control" onClick={handleMusicToggle}>
        🎵
      </button>

      <div className="content">
        {showQuestion ? (
          <div className="question-container">
            <h1 className="title">💕 Valentine's Day 2026 💕</h1>
            <p className="message">
              Dù chúng ta đang ở xa nhau,<br />
              nhưng trái tim anh luôn ở bên em ❤️
            </p>
            <h2 className="question">Em có muốn làm Valentine của anh không? 🌹</h2>

            <div className="buttons-container">
              <button
                className="btn btn-yes"
                onClick={handleYesClick}
                style={{ order: buttonPositions.yes }}
              >
                Có ❤️
              </button>
              <button
                className="btn btn-no"
                onMouseEnter={handleNoHover}
                style={{ order: buttonPositions.no }}
              >
                Không 💔
              </button>
            </div>
          </div>
        ) : (
          <div className="success-container">
            <h1 className="success-title">🎉 Anh biết mà 🎉</h1>
            <div className="success-hearts">
              💖💗💝💘💞💕
            </div>
            <p className="success-message">
              Anh yêu em rất rất nhiều ❤️<br />
              Dù xa cách, tình yêu của chúng ta vẫn luôn gần gũi em nhé 😘<br />
              <br />
              <em>"50 năm về sau, em vẫn sẽ là tình yêu của anh..."</em> 🌹
            </p>
            <div className="romantic-quote">
              "Khoảng cách chỉ là con số,<br />
              tình yêu mới là điều vĩnh cửu." 💫
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
