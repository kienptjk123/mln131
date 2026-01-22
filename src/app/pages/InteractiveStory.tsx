import { sampleGraph } from "../../mocks/index"
import type { Graph, Node } from "../models/types"
import { useCallback, useEffect, useRef, useState } from "react"
import { useVideoStore } from "../lib/store"
import { Spinner } from "../components/ui/spinner"
import { AnimatePresence } from "framer-motion"
import { ChoiceButtons } from "@/components/choice-buttons"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from "lucide-react"
import { Slider } from "@/components/ui/slider"

const graph: Graph = sampleGraph

const InteractiveStory = () => {
  const navigate = useNavigate()

  const videoRef = useRef<HTMLVideoElement>(null)
  const fullscreenContainerRef = useRef<HTMLDivElement>(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isBuffering, setIsBuffering] = useState(false)
  const [showDisclaimerModal, setShowDisclaimerModal] = useState(true)
  const [showThankYouModal, setShowThankYouModal] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showCenterPlayButton, setShowCenterPlayButton] = useState(false)
  const centerButtonTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const preloadRefs = useRef<Map<string, HTMLVideoElement>>(new Map())

  const {
    currentNodeId,
    isMuted,
    showChoices,
    volume,
    showCaptions,
    isPlaying,
    setCurrentNodeId,
    pushHistory,
    setIsMuted,
    setShowChoices,
    setVolume,
    setIsPlaying,
    reset,
  } = useVideoStore()

  const currentNode: Node | undefined = graph.nodes[currentNodeId]

  // Initialize
  useEffect(() => {
    reset(graph.start)
  }, [reset])

  // Cleanup effect to handle video state when component unmounts
  useEffect(() => {
    const videoElement = videoRef.current
    const preloadMap = preloadRefs.current
    const timeout = centerButtonTimeoutRef.current
    
    return () => {
      if (videoElement) {
        videoElement.pause()
        videoElement.src = ""
        videoElement.load()
      }
      // Clean up preloaded videos
      preloadMap.forEach(video => {
        video.src = ""
        video.load()
      })
      preloadMap.clear()
      
      // Clean up timeout
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [])

  // Update video properties
  useEffect(() => {
    if (!videoRef.current) return
    videoRef.current.muted = isMuted
    videoRef.current.volume = volume
  }, [isMuted, volume])

  // Handle captions
  useEffect(() => {
    if (!videoRef.current) return
    const tracks = videoRef.current.textTracks
    for (let i = 0; i < tracks.length; i++) {
      tracks[i].mode = showCaptions ? "showing" : "hidden"
    }
  }, [showCaptions])

  useEffect(() => {
    if (currentNode && !isLoading) {
      preloadNextVideos(currentNode)
    }
  }, [currentNode, isLoading])

  // Handle video source changes
  useEffect(() => {
    if (!videoRef.current || !currentNode) return
    
    const video = videoRef.current
    
    // Only update src if it's different
    if (video.src !== currentNode.src) {
      video.src = currentNode.src
      video.load()
    }
  }, [currentNode])

  // Time update handler
  const handleTimeUpdate = useCallback(() => {
    if (!videoRef.current) return
    const current = videoRef.current.currentTime
    const dur = videoRef.current.duration
    setCurrentTime(current)
    setDuration(dur)

    // Show choices when remaining time <= 3s
    const remaining = dur - current
    if (remaining <= 3 && remaining > 0 && !showChoices && currentNode) {
      setShowChoices(true)
    }
  }, [showChoices, currentNode, setShowChoices])

  // Video ended handler
  const handleEnded = useCallback(() => {
    if (!showChoices && currentNode) {
      setShowChoices(true)
      setIsPlaying(false)
    }
  }, [showChoices, currentNode, setShowChoices, setIsPlaying])

  // Preload next videos
  const preloadNextVideos = (node: Node) => {
    node.choices.forEach((choice) => {
      const targetNode = graph.nodes[choice.target]
      if (targetNode && !preloadRefs.current.has(choice.target)) {
        const video = document.createElement("video")
        video.src = targetNode.src
        video.preload = "auto"
        video.load() // Explicitly trigger load
        preloadRefs.current.set(choice.target, video)
        console.log("[v0] Preloading video:", choice.target)
      }
    })
  }

  // Handle choice selection
  const handleChoiceSelect = useCallback(async (target: string) => {
    if (!videoRef.current || isTransitioning) return

    // Check if this is an ending choice
    if (currentNode && currentNode.choices.some(choice => choice.label === "Kết thúc" && choice.target === target)) {
      setShowThankYouModal(true)
      return
    }

    setIsTransitioning(true)
    pushHistory(currentNodeId)
    setShowChoices(false)

    // Fade out
    videoRef.current.style.opacity = "0"
    await new Promise((resolve) => setTimeout(resolve, 300))

    // Pause current video before switching
    videoRef.current.pause()
    setIsPlaying(false)

    // Switch video
    setCurrentNodeId(target)
    
    // Wait for the new video to be loaded before attempting to play
    const handleCanPlay = () => {
      if (!videoRef.current) return
      
      videoRef.current.removeEventListener('canplay', handleCanPlay)
      videoRef.current.currentTime = 0
      
      // Make sure choices are hidden for new video
      setShowChoices(false)
      
      // Fade in and play
      videoRef.current.style.opacity = "1"
      
      // Use a Promise to handle play() properly
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true)
            setIsTransitioning(false)
          })
          .catch((error) => {
            console.error("[v0] Video play failed:", error)
            setIsTransitioning(false)
          })
      } else {
        setIsPlaying(true)
        setIsTransitioning(false)
      }
    }

    videoRef.current.addEventListener('canplay', handleCanPlay)
  }, [isTransitioning, currentNode, pushHistory, currentNodeId, setShowChoices, setIsPlaying, setCurrentNodeId, setShowThankYouModal])

  // Play/Pause toggle
  const handlePlayPause = useCallback(() => {
    if (!videoRef.current) return
    
    // Clear any existing timeout
    if (centerButtonTimeoutRef.current) {
      clearTimeout(centerButtonTimeoutRef.current)
    }
    
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
      setShowCenterPlayButton(true)
    } else {
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true)
            // Show play button briefly then hide it
            setShowCenterPlayButton(true)
            centerButtonTimeoutRef.current = setTimeout(() => {
              setShowCenterPlayButton(false)
            }, 1000) // Hide after 1 second
          })
          .catch((error) => {
            console.error("[v0] Video play failed:", error)
          })
      } else {
        setIsPlaying(true)
        setShowCenterPlayButton(true)
        centerButtonTimeoutRef.current = setTimeout(() => {
          setShowCenterPlayButton(false)
        }, 1000)
      }
    }
  }, [isPlaying, setIsPlaying])

  // Handle video click
  const handleVideoClick = useCallback(() => {
    handlePlayPause()
  }, [handlePlayPause])

  // Mute toggle
  const handleMuteToggle = useCallback(() => {
    setIsMuted(!isMuted)
  }, [isMuted, setIsMuted])

  // Volume change
  const handleVolumeChange = useCallback((newVolume: number) => {
    setVolume(newVolume)
    if (newVolume > 0 && isMuted) {
      setIsMuted(false)
    }
  }, [setVolume, isMuted, setIsMuted])

  // Handle disclaimer modal
  const handleDisclaimerAgree = useCallback(() => {
    setShowDisclaimerModal(false)
  }, [])

  const handleDisclaimerDisagree = useCallback(() => {
    navigate("/")
  }, [navigate])

  // Handle thank you modal
  const handleReturnHome = useCallback(() => {
    navigate("/")
  }, [navigate])

  // Handle fullscreen toggle - for container with video and UI
  const handleFullscreenToggle = useCallback(() => {
    if (!fullscreenContainerRef.current) return
    
    if (!document.fullscreenElement) {
      fullscreenContainerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true)
      }).catch(() => {
        console.error("Failed to enter fullscreen")
      })
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false)
      }).catch(() => {
        console.error("Failed to exit fullscreen")
      })
    }
  }, [])

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return

      switch (e.key.toLowerCase()) {
        case " ":
          e.preventDefault()
          handlePlayPause()
          break
        case "m":
          e.preventDefault()
          handleMuteToggle()
          break
        case "f":
          e.preventDefault()
          handleFullscreenToggle()
          break
        case "1":
          if (showChoices && currentNode?.choices[0]) {
            e.preventDefault()
            handleChoiceSelect(currentNode.choices[0].target)
          }
          break
        case "2":
          if (showChoices && currentNode?.choices[1]) {
            e.preventDefault()
            handleChoiceSelect(currentNode.choices[1].target)
          }
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handlePlayPause, handleMuteToggle, handleChoiceSelect, handleFullscreenToggle, showChoices, currentNode])

  if (!currentNode) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#1a1410] via-[#2d2419] to-[#1a1410]">
        <Spinner className="h-12 w-12 text-amber-600" />
      </div>
    )
  }
  return (
    <div 
      ref={fullscreenContainerRef}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#1a1410] via-[#2d2419] to-[#1a1410]"
    >
      {/* Disclaimer Modal */}
      {showDisclaimerModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Thông báo</h2>
            <p className="text-gray-700 mb-6">
              Đây là sản phẩm của AI nên sẽ có 1 vài sai sót không xử lý được, mong mọi người thông cảm
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={handleDisclaimerAgree} className="bg-green-600 hover:bg-green-700">
                Toi dong tinh
              </Button>
              <Button onClick={handleDisclaimerDisagree} variant="outline">
                Toi khong dong tinh
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      {showThankYouModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Cảm ơn!</h2>
            <p className="text-gray-700 mb-6">
              Cảm ơn bạn đã trải nghiệm câu chuyện tương tác của chúng tôi.
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={handleReturnHome} className="bg-blue-600 hover:bg-blue-700">
                Trang chủ
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Video Element with Click Handler */}
      <div 
        className="absolute inset-0 cursor-pointer"
        onClick={handleVideoClick}
      >
        <video
          ref={videoRef}
          poster={currentNode.poster}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={() => {
            if (videoRef.current) {
              setDuration(videoRef.current.duration)
            }
          }}
          onLoadStart={() => {
            console.log("[v0] Video load started")
            setIsLoading(true)
            setIsBuffering(true)
          }}
          onCanPlay={() => {
            console.log("[v0] Video can play")
            setIsLoading(false)
            setIsBuffering(false)
          }}
          onWaiting={() => {
            console.log("[v0] Video buffering")
            setIsBuffering(true)
          }}
          onPlaying={() => {
            console.log("[v0] Video playing")
            setIsBuffering(false)
          }}
          onEnded={handleEnded}
          onPlay={() => {
            setIsPlaying(true)
          }}
          onPause={() => {
            setIsPlaying(false)
            setShowCenterPlayButton(true)
          }}
          playsInline
        >
          {currentNode.captions && (
            <track kind="subtitles" src={currentNode.captions} srcLang="vi" label="Tiếng Việt" default={showCaptions} />
          )}
        </video>
      </div>

      {/* Center Play/Pause Button */}
      {showCenterPlayButton && (
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          <div className="bg-black/50 rounded-full p-4 backdrop-blur-sm transition-opacity duration-300 opacity-90">
            {isPlaying ? (
              <Pause className="h-12 w-12 text-white" />
            ) : (
              <Play className="h-12 w-12 text-white" />
            )}
          </div>
        </div>
      )}

      {(isLoading || isBuffering) && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-40">
          <div className="flex flex-col items-center gap-4">
            <Spinner className="h-12 w-12 text-amber-600" />
            <p className="text-white text-sm font-medium">{isLoading ? "Đang tải video..." : "Đang đệm..."}</p>
          </div>
        </div>
      )}

      {/* Dim overlay when choices are visible */}
      {showChoices && <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 z-10" />}

      {/* Title and Back Button - Top Left */}
      <div className="absolute top-4 left-4 z-20">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold text-white tracking-tight bg-black/50 px-3 py-1 rounded-lg">
            Interactive Story
          </h1>

        </div>
      </div>

      {/* New Layout: Play/Pause - Volume - Progress Bar - Fullscreen */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/60 to-transparent px-4 pb-4">
        <div className="flex items-center gap-4 text-white">
          {/* Play/Pause Button */}
          <Button
            onClick={handlePlayPause}
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 flex-shrink-0"
            aria-label={isPlaying ? "Tạm dừng" : "Phát"}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>

          {/* Volume Controls */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              onClick={handleMuteToggle}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              aria-label={isMuted ? "Bật âm thanh" : "Tắt âm thanh"}
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>

            <div className="w-20">
              <Slider
                value={[isMuted ? 0 : volume * 100]}
                onValueChange={(values) => handleVolumeChange(values[0] / 100)}
                max={100}
                step={1}
                className="cursor-pointer"
                aria-label="Âm lượng"
              />
            </div>
          </div>

          {/* Progress Bar (expanded to take remaining space) */}
          <div className="flex items-center gap-3 flex-1 text-sm">
            <span className="font-mono tabular-nums text-xs">{formatTime(currentTime)}</span>
            <div className="flex-1 h-1.5 bg-white/20 rounded-full">
              <div
                className="h-full bg-accent rounded-full transition-all"
                style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
              />
            </div>
            <span className="font-mono tabular-nums text-xs">{formatTime(duration)}</span>
          </div>

          {/* Fullscreen Button */}
          <Button
            onClick={handleFullscreenToggle}
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 flex-shrink-0"
            aria-label={isFullscreen ? "Thoát toàn màn hình" : "Toàn màn hình"}
          >
            {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Choice Buttons */}
      <AnimatePresence>
        {currentNode && (
          <ChoiceButtons choices={currentNode.choices} onSelect={handleChoiceSelect} show={showChoices} />
        )}
      </AnimatePresence>
    </div>
  )

  // Helper function for time formatting
  function formatTime(seconds: number) {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }
}

export default InteractiveStory