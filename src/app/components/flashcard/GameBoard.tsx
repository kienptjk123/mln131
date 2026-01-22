import { useState, useEffect, useCallback, useRef } from 'react'
import { createGameCards } from '@/data/cards'
import type { GameCard } from '@/data/cards'
import { shuffle } from '@/lib/shuffle'
import { getBestScore, saveBestScore, formatTime } from '@/lib/storage'
import { submitScore } from '@/lib/api'
import { Card } from './Card'
import { StatsBar } from './StatsBar'
import { StudyModal } from './StudyModal'
import { WelcomeModal } from './WelcomeModal'
import { LeaderboardModal } from './LeaderboardModal'
import { Button } from '@/components/ui/button'

import { RotateCcw, BookOpen, Trophy, Volume2, VolumeX, Zap } from 'lucide-react'

export function GameBoard() {
  const [playerName, setPlayerName] = useState<string>('')
  const [showWelcome, setShowWelcome] = useState(false)
  const [cards, setCards] = useState<GameCard[]>([])
  const [flippedCards, setFlippedCards] = useState<string[]>([])
  const [isLocked, setIsLocked] = useState(false)
  const [moves, setMoves] = useState(0)
  const [time, setTime] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [bestScore, setBestScore] = useState<{ moves: number; time: number } | null>(null)
  const [showStudy, setShowStudy] = useState(false)
  const [showLeaderboard, setShowLeaderboard] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const hasSubmittedRef = useRef(false)

  // Initialize game and check for saved player name
  useEffect(() => {
    const best = getBestScore()
    setBestScore(best)

    // Check for saved player name
    const savedName = localStorage.getItem('flashcard_player_name')
    if (savedName) {
      setPlayerName(savedName)
    }
  }, [])

  const initializeGame = useCallback(() => {
    const newCards = shuffle(createGameCards())
    setCards(newCards)
    setFlippedCards([])
    setMoves(0)
    setTime(0)
    setIsPlaying(false)
    setIsLocked(false)
    hasSubmittedRef.current = false
  }, [])

  useEffect(() => {
    if (!showWelcome && cards.length === 0) {
      initializeGame()
    }
  }, [showWelcome, cards.length, initializeGame])

  // Timer
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const playSound = (_isMatch: boolean) => {
    if (!soundEnabled) return
    // You can add sound effects here if needed
  }

  const handleCardClick = (cardId: string) => {
    // Check if player name is required before starting the game
    if (!isPlaying && moves === 0 && !playerName.trim()) {
      setShowWelcome(true)
      return
    }

    const card = cards.find((c) => c.id === cardId)
    if (!card || isLocked || card.isFlipped || card.isMatched) return

    // Start game on first move
    if (!isPlaying && moves === 0) {
      setIsPlaying(true)
    }

    const newFlippedCards = [...flippedCards, cardId]
    setFlippedCards(newFlippedCards)

    // Flip the card
    setCards((prev) => prev.map((c) => (c.id === cardId ? { ...c, isFlipped: true } : c)))

    if (newFlippedCards.length === 2) {
      setMoves((prev) => prev + 1)
      setIsLocked(true)

      const [firstId, secondId] = newFlippedCards
      const firstCard = cards.find((c) => c.id === firstId)
      const secondCard = cards.find((c) => c.id === secondId)

      if (firstCard && secondCard && firstCard.pairId === secondCard.pairId && firstCard.role !== secondCard.role) {
        // Match!
        playSound(true)
        // Show success message - you can use your preferred toast library

        setCards((prev) => prev.map((c) => (c.id === firstId || c.id === secondId ? { ...c, isMatched: true } : c)))
        setFlippedCards([])
        setIsLocked(false)
      } else {
        // No match
        playSound(false)
        setTimeout(() => {
          setCards((prev) => prev.map((c) => (c.id === firstId || c.id === secondId ? { ...c, isFlipped: false } : c)))
          setFlippedCards([])
          setIsLocked(false)
        }, 800)
      }
    }
  }

  // Check win condition
  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.isMatched) && !hasSubmittedRef.current) {
      setIsPlaying(false)
      hasSubmittedRef.current = true

      // Save best score
      saveBestScore({ moves, time })
      const newBest = getBestScore()
      setBestScore(newBest)

      // Submit to API
      const submitToAPI = async () => {
        try {
          await submitScore({
            name: playerName,
            Time: formatTime(time),
            Flip: moves
          })

          console.log(
            `🏆 Hoàn thành! Xuất sắc! ${moves} lượt - ${formatTime(time)}. Điểm đã được lưu vào bảng xếp hạng!`
          )
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (_error) {
          console.log(`✅ Hoàn thành! Xuất sắc! ${moves} lượt - ${formatTime(time)}`)
        }
      }

      submitToAPI()
    }
  }, [cards, moves, time, playerName])

  const handleStart = (name: string) => {
    setPlayerName(name)
    setShowWelcome(false)
  }
  return (
    <>
      <WelcomeModal open={showWelcome} onStart={handleStart} onClose={() => setShowWelcome(false)} />
      <StudyModal open={showStudy} onClose={() => setShowStudy(false)} />
      <LeaderboardModal open={showLeaderboard} onClose={() => setShowLeaderboard(false)} />

      <div className='min-h-screen bg-gradient-to-b from-black via-slate-950 to-black py-8 px-4'>
        <div className='max-w-6xl mx-auto'>
          {/* Enhanced Header */}
          <div className='relative text-center mb-8'>
            <div className='mb-4'>
              <div className='inline-flex items-center gap-3 bg-gray-900/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-gray-700/50 mb-4'>
                <Zap className='w-6 h-6 text-yellow-500 animate-pulse' />
                <h1 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent'>
                  Trò chơi Lật - Ghép thẻ
                </h1>
                <Zap className='w-6 h-6 text-yellow-500 animate-pulse' />
              </div>
            </div>

            <p className='text-gray-300 text-lg font-medium mb-2'>
              12 tấm thẻ (6 cặp khái niệm) được chọn ngẫu nhiên từ bộ câu hỏi
            </p>
            {playerName && (
              <div className='inline-flex items-center gap-2 bg-gray-800/80 text-blue-300 px-4 py-2 rounded-full font-semibold text-sm border border-gray-600'>
                <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
                Người chơi: {playerName}
              </div>
            )}
          </div>

          {/* Enhanced Controls */}
          <div className='flex flex-wrap gap-3 justify-center mb-8'>
            <Button
              onClick={initializeGame}
              variant='default'
              size='lg'
              className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 text-white'
            >
              <RotateCcw className='w-4 h-4 mr-2' />
              Chơi lại
            </Button>
            <Button
              onClick={() => setShowStudy(true)}
              variant='secondary'
              size='lg'
              className='bg-gray-800/90 hover:bg-gray-700 border-2 border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 text-white'
            >
              <BookOpen className='w-4 h-4 mr-2' />
              Xem khái niệm
            </Button>
            <Button
              onClick={() => setShowLeaderboard(true)}
              variant='secondary'
              size='lg'
              className='bg-gray-800/90 hover:bg-gray-700 border-2 border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 text-white'
            >
              <Trophy className='w-4 h-4 mr-2' />
              Bảng xếp hạng
            </Button>
            <Button
              onClick={() => setSoundEnabled(!soundEnabled)}
              variant='outline'
              size='lg'
              className={`shadow-lg hover:shadow-xl transition-all duration-300 ${
                soundEnabled
                  ? 'bg-green-900/30 border-green-600 text-green-400 hover:bg-green-900/50'
                  : 'bg-red-900/30 border-red-600 text-red-400 hover:bg-red-900/50'
              }`}
            >
              {soundEnabled ? <Volume2 className='w-4 h-4 mr-2' /> : <VolumeX className='w-4 h-4 mr-2' />}
              Âm thanh
            </Button>
          </div>

          {/* Enhanced Stats */}
          <StatsBar moves={moves} time={time} bestMoves={bestScore?.moves ?? null} bestTime={bestScore?.time ?? null} />

          {/* Enhanced Game Grid with better spacing and animations */}
          <div className='relative'>
            <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-6 max-w-5xl mx-auto p-6 bg-gray-900/50 rounded-3xl backdrop-blur-sm border border-gray-700/50 shadow-xl'>
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  className='transform transition-all duration-300 ease-out'
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: cards.length > 0 ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                  }}
                >
                  <Card card={card} onClick={() => handleCardClick(card.id)} isLocked={isLocked} />
                </div>
              ))}
            </div>

            {/* Game completion celebration overlay */}
            {cards.length > 0 && cards.every((card) => card.isMatched) && (
              <div className='absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm rounded-3xl animate-fadeIn'>
                <div className='bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-600 text-center animate-bounce'>
                  <Trophy className='w-16 h-16 text-yellow-500 mx-auto mb-4' />
                  <h3 className='text-2xl font-bold text-white mb-2'>Xuất sắc!</h3>
                  <p className='text-gray-300'>
                    Hoàn thành trong {moves} lượt - {formatTime(time)}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
