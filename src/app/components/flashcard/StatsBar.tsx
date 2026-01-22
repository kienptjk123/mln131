import { formatTime } from "@/lib/storage";
import { Trophy, Timer, MousePointerClick, Target } from "lucide-react";

interface StatsBarProps {
  moves: number;
  time: number;
  bestMoves: number | null;
  bestTime: number | null;
}

export function StatsBar({ moves, time, bestMoves, bestTime }: StatsBarProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
      <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:scale-105">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-blue-900/50 rounded-lg">
            <MousePointerClick className="w-5 h-5 text-blue-400" />
          </div>
          <span className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Số lượt</span>
        </div>
        <p className="text-3xl font-bold text-gray-100">{moves}</p>
        <div className="mt-1 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" />
      </div>

      <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:scale-105">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-green-900/50 rounded-lg">
            <Timer className="w-5 h-5 text-green-400" />
          </div>
          <span className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Thời gian</span>
        </div>
        <p className="text-3xl font-bold text-gray-100">{formatTime(time)}</p>
        <div className="mt-1 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full" />
      </div>

      <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:scale-105">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-purple-900/50 rounded-lg">
            <Target className="w-5 h-5 text-purple-400" />
          </div>
          <span className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Kỷ lục lượt</span>
        </div>
        <p className="text-3xl font-bold text-purple-400">
          {bestMoves !== null ? bestMoves : "—"}
        </p>
        <div className="mt-1 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full" />
      </div>

      <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:scale-105">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-yellow-900/50 rounded-lg">
            <Trophy className="w-5 h-5 text-yellow-400" />
          </div>
          <span className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Kỷ lục tốc độ</span>
        </div>
        <p className="text-3xl font-bold text-yellow-400">
          {bestTime !== null ? formatTime(bestTime) : "—"}
        </p>
        <div className="mt-1 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" />
      </div>
    </div>
  );
}