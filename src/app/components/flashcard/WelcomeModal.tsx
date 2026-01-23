import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Play, Sparkles, BookOpen, Target, Clock, Trophy, AlertCircle } from 'lucide-react'

interface WelcomeModalProps {
  open: boolean
  onStart: (name: string) => void
  onClose: () => void
}

export function WelcomeModal({ open, onStart, onClose }: WelcomeModalProps) {
  const [name, setName] = useState('')
  const [showNameRequired, setShowNameRequired] = useState(false)

  // Load saved name when modal opens
  useEffect(() => {
    if (open) {
      const savedName = localStorage.getItem('flashcard_player_name') || ''
      setName(savedName)
      setShowNameRequired(false)
    }
  }, [open])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleStart()
  }

  const handleStart = () => {
    if (name.trim()) {
      // Save name to localStorage
      localStorage.setItem('flashcard_player_name', name.trim())
      onStart(name.trim())
      onClose()
    } else {
      setShowNameRequired(true)
      setTimeout(() => setShowNameRequired(false), 3000)
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        // Cho phép tự do đóng modal
        if (!isOpen) {
          onClose()
        }
      }}
    >
      <DialogContent className='sm:max-w-lg bg-gray-900/95 backdrop-blur-sm border-2 border-gray-700/50'>
        <DialogHeader>
          <div className='relative mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 flex items-center justify-center mb-6 shadow-2xl border-2 border-blue-500/50'>
            <Sparkles className='w-10 h-10 text-yellow-400 drop-shadow-lg animate-pulse' />
            <div className='absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent animate-pulse' />
          </div>

          <DialogTitle className='text-3xl text-center font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent'>
            Trò chơi Lật - Ghép thẻ
          </DialogTitle>

          <DialogDescription className='text-center space-y-3 pt-3'>
            <div className='bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-4 border border-blue-700/50'>
              <p className='font-bold text-lg text-gray-100 mb-1'>Chương 4: Dân chủ xã hội chủ nghĩa và nhà nước xã hội chủ nghĩa</p>
              <p className='text-sm text-gray-300'>
                Các cặp khái niệm và quy luật cơ bản của sản xuất hàng hóa và tiền tệ
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className='space-y-6 mt-4'>
          <div className='space-y-3'>
            <Label htmlFor='player-name' className='text-base font-semibold text-gray-300'>
              Nhập tên của bạn
              <span className='text-red-400 ml-1'>*</span>
            </Label>
            <Input
              id='player-name'
              placeholder='VD: Nguyễn Văn A'
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                if (showNameRequired) {
                  setShowNameRequired(false)
                }
              }}
              autoFocus
              className={`text-base py-3 bg-gray-800/80 border-2 ${
                showNameRequired ? 'border-red-500 animate-pulse' : 'border-gray-600'
              } focus:border-blue-500 rounded-xl transition-colors duration-300 text-white placeholder-gray-400`}
            />
            {showNameRequired && (
              <div className='flex items-center gap-2 text-red-400 text-sm animate-bounce bg-red-900/20 p-2 rounded-lg border border-red-500/30'>
                <AlertCircle className='w-4 h-4 flex-shrink-0' />
                <span>Vui lòng nhập tên của bạn để tiếp tục!</span>
              </div>
            )}
          </div>

          <div className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-600 space-y-4'>
            <div className='flex items-center gap-2 mb-3'>
              <BookOpen className='w-5 h-5 text-blue-400' />
              <p className='font-bold text-gray-100'>Mục tiêu học tập:</p>
            </div>

            <div className='grid gap-3'>
              <div className='flex items-start gap-3 p-3 bg-gray-700/50 rounded-lg border border-gray-600/50'>
                <Target className='w-4 h-4 text-green-400 mt-0.5 flex-shrink-0' />
                <span className='text-sm text-gray-300'>Phân biệt Lao động cụ thể vs Lao động trừu tượng</span>
              </div>

              <div className='flex items-start gap-3 p-3 bg-gray-700/50 rounded-lg border border-gray-600/50'>
                <Clock className='w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0' />
                <span className='text-sm text-gray-300'>Ghi nhớ các chức năng của tiền tệ</span>
              </div>

              <div className='flex items-start gap-3 p-3 bg-gray-700/50 rounded-lg border border-gray-600/50'>
                <Trophy className='w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0' />
                <span className='text-sm text-gray-300'>Liên kết khái niệm với định nghĩa/bản chất</span>
              </div>
            </div>
          </div>

          <Button
            type='submit'
            className='w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105'
            size='lg'
          >
            <Play className='w-5 h-5 mr-2' />
            Bắt đầu chơi
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
