const API_URL = "https://671e42f01dfc42991981be9c.mockapi.io/LeaderBoard";

export interface LeaderboardEntry {
  name: string;
  Time: string;
  Flip: number;
}

export async function submitScore(entry: LeaderboardEntry): Promise<void> {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    });
    
    if (!response.ok) {
      throw new Error("Failed to submit score");
    }
  } catch (error) {
    console.error("Error submitting score:", error);
    throw error;
  }
}

export async function getLeaderboard(): Promise<LeaderboardEntry[]> {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error("Failed to fetch leaderboard");
    }
    
    const data = await response.json();
    return data.sort((a: LeaderboardEntry, b: LeaderboardEntry) => a.Flip - b.Flip).slice(0, 10);
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return [];
  }
}