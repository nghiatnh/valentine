import { useState, useRef, useEffect } from 'react'
import './App.css'
import './gift-styles.css'
import romanticMusic from './assets/50nam.mcp3'

function App() {
  const [screen, setScreen] = useState('question') // 'question', 'gift', 'final'
  const [buttonPositions, setButtonPositions] = useState({ yes: 0, no: 1 })
  const [giftButtonPositions, setGiftButtonPositions] = useState({ yes: 0, no: 1 })
  const celebrationAudioRef = useRef(null)
  const romanticAudioRef = useRef(null)

  const handleNoHover = () => {
    // Swap positions when hovering over "No" button
    setButtonPositions(prev => ({
      yes: prev.no,
      no: prev.yes
    }))
  }

  const handleGiftNoHover = () => {
    // Swap positions for gift buttons
    setGiftButtonPositions(prev => ({
      yes: prev.no,
      no: prev.yes
    }))
  }

  const handleYesClick = () => {
    setScreen('gift')
    // Play celebration music for 5 seconds
    if (celebrationAudioRef.current) {
      celebrationAudioRef.current.currentTime = 0
      celebrationAudioRef.current.play()
      // Stop after 5 seconds
      setTimeout(() => {
        if (celebrationAudioRef.current) {
          celebrationAudioRef.current.pause()
          celebrationAudioRef.current.currentTime = 0
        }
      }, 5000)
    }
  }

  const handleGiftYesClick = () => {
    setScreen('final')
    // Stop celebration music
    if (celebrationAudioRef.current) {
      celebrationAudioRef.current.pause()
      celebrationAudioRef.current.currentTime = 0
    }
    // Auto-play romantic music on final screen
    setTimeout(() => {
      if (romanticAudioRef.current) {
        romanticAudioRef.current.play().catch(err => {
          console.log("Auto-play prevented. Click the music button to play.");
        });
      }
    }, 500)
  }

  const handleMusicToggle = () => {
    if (romanticAudioRef.current) {
      if (romanticAudioRef.current.paused) {
        romanticAudioRef.current.play()
      } else {
        romanticAudioRef.current.pause()
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

      {/* Audio elements */}
      <audio ref={celebrationAudioRef}>
        <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={romanticAudioRef} loop>
        <source src={romanticMusic} type="audio/mpeg" />
      </audio>

      {/* Music control button - only show on final screen */}
      {screen === 'final' && (
        <button className="music-control" onClick={handleMusicToggle}>
          🎵
        </button>
      )}

      <div className="content">
        {screen === 'question' ? (
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
        ) : screen === 'gift' ? (
          <div className="success-container">
            <h1 className="success-title">🎉 Anh biết mà 🎉</h1>
            <div className="success-hearts">
              💖💗💝💘💞💕
            </div>
            <p className="success-message">
              Anh cũng yêu em rất rất nhiều ❤️<br />
              Dù xa cách, tình yêu của chúng ta vẫn luôn gần gũi em nhé 😘<br />
              <br />
              <em>"50 năm về sau, em vẫn sẽ là tình yêu của anh..."</em> 🌹
            </p>
            <div className="romantic-quote">
              "Khoảng cách chỉ là con số,<br />
              tình yêu mới là điều vĩnh cửu." 💫
            </div>

            <h2 className="question" style={{ marginTop: '40px' }}>
              Em có muốn nhận quà từ anh không? 🎁
            </h2>

            <div className="buttons-container">
              <button
                className="btn btn-yes"
                onClick={handleGiftYesClick}
                style={{ order: giftButtonPositions.yes }}
              >
                Nhận quà 🎁
              </button>
              <button
                className="btn btn-no"
                onMouseEnter={handleGiftNoHover}
                style={{ order: giftButtonPositions.no }}
              >
                Không nhận 🙅‍♀️
              </button>
            </div>
          </div>
        ) : (
          <div className="gift-reveal-container">
            <h1 className="success-title">💝 Yêu em nhiều 💝</h1>
            <p className="gift-message">
              Anh xin lỗi vì ở xa không tặng cho em được,<br />
              nhưng khi ta gặp lại em hãy nhận lấy nó nhé 💕
            </p>

            <div className="gifts-display">
              <div className="gift-item">
                <div className="gift-icon">
                  <img
                    src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=400&fit=crop"
                    alt="Bouquet of roses"
                    className="gift-image"
                  />
                </div>
                <p className="gift-label">Một bó hoa tươi</p>
              </div>
              <div className="gift-item">
                <div className="gift-icon">
                  <img
                    src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&h=400&fit=crop"
                    alt="Box of chocolates"
                    className="gift-image"
                  />
                </div>
                <p className="gift-label">Một hộp sô cô la</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
