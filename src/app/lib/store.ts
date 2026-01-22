import { create } from "zustand"

type VideoStore = {
  currentNodeId: string
  history: string[]
  isMuted: boolean
  showChoices: boolean
  isPreloading: boolean
  volume: number
  showCaptions: boolean
  isPlaying: boolean

  setCurrentNodeId: (id: string) => void
  pushHistory: (id: string) => void
  goBack: () => void
  setIsMuted: (muted: boolean) => void
  setShowChoices: (show: boolean) => void
  setIsPreloading: (loading: boolean) => void
  setVolume: (volume: number) => void
  setShowCaptions: (show: boolean) => void
  setIsPlaying: (playing: boolean) => void
  reset: (startNodeId: string) => void
}

export const useVideoStore = create<VideoStore>((set) => ({
  currentNodeId: "",
  history: [],
  isMuted: false,
  showChoices: false,
  isPreloading: false,
  volume: 1,
  showCaptions: false,
  isPlaying: false,

  setCurrentNodeId: (id) => set({ currentNodeId: id }),
  pushHistory: (id) => set((state) => ({ history: [...state.history, id] })),
  goBack: () =>
    set((state) => {
      if (state.history.length === 0) return state
      const newHistory = [...state.history]
      const previousNode = newHistory.pop()!
      return { history: newHistory, currentNodeId: previousNode, showChoices: false }
    }),
  setIsMuted: (muted) => set({ isMuted: muted }),
  setShowChoices: (show) => set({ showChoices: show }),
  setIsPreloading: (loading) => set({ isPreloading: loading }),
  setVolume: (volume) => set({ volume }),
  setShowCaptions: (show) => set({ showCaptions: show }),
  setIsPlaying: (playing) => set({ isPlaying: playing }),
  reset: (startNodeId) => set({ currentNodeId: startNodeId, history: [], showChoices: false, isPlaying: false }),
}))
