import { motion } from 'framer-motion'
import type { Choice } from '@/models/types'
import { Button } from '@/components/ui/button'

type ChoiceButtonsProps = {
  choices: Choice[]
  onSelect: (target: string) => void
  show: boolean
}

export function ChoiceButtons({ choices, onSelect, show }: ChoiceButtonsProps) {
  if (!show) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className='absolute bottom-24 left-0 right-0 z-20 px-4 pb-4'
    >
      <div className='mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4'>
        {choices.map((choice, index) => (
          <motion.div
            key={choice.target}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Button
              onClick={() => onSelect(choice.target)}
              className='w-full h-auto min-h-[60px] px-6 py-4 text-base md:text-lg font-medium
                bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20
                text-white shadow-2xl rounded-full transition-all duration-200
                hover:scale-[1.02] active:scale-[0.98] focus:ring-2 focus:ring-accent/50'
              aria-label={`Chọn: ${choice.label}`}
            >
              <span className='text-balance leading-relaxed'>{choice.label}</span>
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
