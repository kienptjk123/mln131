"use client"

type ProgressBarProps = {
  currentTime: number
  duration: number
  onSeek: (time: number) => void
}

export function ProgressBar({ currentTime, duration }: Omit<ProgressBarProps, 'onSeek'>) {
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/60 to-transparent px-4 pb-4">
      <div className="flex items-center gap-3 text-white text-sm">
        <span className="font-mono tabular-nums">{formatTime(currentTime)}</span>
        <div
          className="flex-1 h-1.5 bg-white/20 rounded-full"
          role="progressbar"
          aria-label="Thanh tiến trình video"
          aria-valuemin={0}
          aria-valuemax={duration}
          aria-valuenow={currentTime}
        >
          <div
            className="h-full bg-accent rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="font-mono tabular-nums">{formatTime(duration)}</span>
      </div>
    </div>
  )
}
