const BEST_SCORE_KEY = "flashcard-best-score";

export interface BestScore {
  moves: number;
  time: number;
}

export function getBestScore(): BestScore | null {
  try {
    const stored = localStorage.getItem(BEST_SCORE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

export function saveBestScore(score: BestScore): void {
  try {
    localStorage.setItem(BEST_SCORE_KEY, JSON.stringify(score));
  } catch {
    // Handle storage errors silently
  }
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}