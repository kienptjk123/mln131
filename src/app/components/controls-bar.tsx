"use client"

import { Play, Pause, Volume2, VolumeX, Subtitles, ArrowLeft, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type ControlsBarProps = {
  isPlaying: boolean
  isMuted: boolean
  volume: number
  showCaptions: boolean
  canGoBack: boolean
  onPlayPause: () => void
  onMuteToggle: () => void
  onVolumeChange: (value: number) => void
  onCaptionsToggle: () => void
  onBack: () => void
}

export function ControlsBar({
  isPlaying,
  isMuted,
  volume,
  showCaptions,
  canGoBack,
  onPlayPause,
  onMuteToggle,
  onVolumeChange,
  onCaptionsToggle,
  onBack,
}: ControlsBarProps) {
  return (
    <div className="absolute top-0 left-0 right-0 z-30 p-4 bg-gradient-to-b from-black/60 to-transparent">
      <div className="flex items-center justify-between">
        {/* Left: Logo and Back */}
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold text-white tracking-tight">Interactive Story</h1>
          {canGoBack && (
            <Button
              onClick={onBack}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              aria-label="Quay lại (B)"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-2">
          <Button
            onClick={onPlayPause}
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
            aria-label={isPlaying ? "Tạm dừng (Space)" : "Phát (Space)"}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>

          <Button
            onClick={onMuteToggle}
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
            aria-label={isMuted ? "Bật âm thanh (M)" : "Tắt âm thanh (M)"}
          >
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </Button>

          <div className="hidden md:block w-24">
            <Slider
              value={[isMuted ? 0 : volume * 100]}
              onValueChange={(values) => onVolumeChange(values[0] / 100)}
              max={100}
              step={1}
              className="cursor-pointer"
              aria-label="Âm lượng"
            />
          </div>

          <Button
            onClick={onCaptionsToggle}
            variant="ghost"
            size="icon"
            className={`text-white hover:bg-white/20 ${showCaptions ? "bg-white/20" : ""}`}
            aria-label="Phụ đề"
          >
            <Subtitles className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" aria-label="Cài đặt">
                <Settings className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card/95 backdrop-blur-xl border-border">
              <DropdownMenuItem className="text-card-foreground">Chất lượng: Tự động</DropdownMenuItem>
              <DropdownMenuItem className="text-card-foreground">Tốc độ: 1x</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
