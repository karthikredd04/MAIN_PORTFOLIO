import React, { useEffect, useState } from 'react'

const WelcomeAnimation = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('Initializing AI Systems...')

  useEffect(() => {
    let interval
    
    // Start progress after a brief delay
    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 1 // Increase by 1% each time
          
          // Update loading text based on progress
          if (newProgress < 25) {
            setLoadingText('Initializing AI Systems...')
          } else if (newProgress < 50) {
            setLoadingText('Loading Neural Networks...')
          } else if (newProgress < 75) {
            setLoadingText('Rendering 3D Environment...')
          } else {
            setLoadingText('Launching Portfolio...')
          }
          
          if (newProgress >= 100) {
            clearInterval(interval)
            // Wait a moment at 100% before completing
            setTimeout(() => {
              onComplete()
            }, 500)
            return 100
          }
          return newProgress
        })
      }, 30) // 30ms interval = ~3 seconds total (100 * 30ms = 3000ms)
    }, 500) // Start after 0.5 second delay

    return () => {
      clearTimeout(startTimer)
      if (interval) clearInterval(interval)
    }
  }, [onComplete])

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '600px',
        padding: '2rem'
      }}>
        {/* Logo */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{
            width: '100px',
            height: '100px',
            margin: '0 auto 1.5rem',
            borderRadius: '50%',
            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)',
            animation: 'rotate 3s linear infinite',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: '#0f172a',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              color: '#3b82f6',
              fontSize: '24px'
            }}>
              AI
            </div>
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            marginBottom: '0.5rem',
            background: 'linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            KARTHIK REDDY
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
            AI/ML Engineer & Full Stack Developer
          </p>
        </div>

        {/* Loading Section */}
        <div style={{ margin: '2rem 0' }}>
          <div style={{
            color: '#cbd5e1',
            fontSize: '1.2rem',
            marginBottom: '1rem',
            minHeight: '1.5em',
            transition: 'opacity 0.3s'
          }}>
            {loadingText}
          </div>
          
          {/* Progress Bar */}
          <div style={{
            width: '100%',
            height: '6px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '3px',
            overflow: 'hidden',
            marginBottom: '0.5rem'
          }}>
            <div style={{
              height: '100%',
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
              borderRadius: '3px',
              width: `${progress}%`,
              transition: 'width 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Shimmer effect */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                animation: 'shimmer 2s infinite'
              }} />
            </div>
          </div>
          
          <div style={{
            color: '#3b82f6',
            fontWeight: 'bold',
            fontSize: '1.1rem'
          }}>
            {progress}%
          </div>
        </div>

        {/* Animated Dots */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          marginTop: '2rem'
        }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#3b82f6',
                opacity: '0.3',
                animation: `pulse 1.5s ease-in-out ${i * 0.2}s infinite`
              }}
            />
          ))}
        </div>

        {/* Subtle hint */}
        <p style={{
          position: 'absolute',
          bottom: '2rem',
          left: 0,
          right: 0,
          textAlign: 'center',
          color: '#64748b',
          fontSize: '0.9rem',
          opacity: 0.7
        }}>
          Loading your AI portfolio experience...
        </p>
      </div>

      {/* Inline CSS */}
      <style>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.2); 
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  )
}

export default WelcomeAnimation